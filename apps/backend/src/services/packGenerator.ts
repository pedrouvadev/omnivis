import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface RequisitosPack {
  lider: number;
  auxiliar: number;
  transporte?: string | null;
}

const requisitosPorTipo: Record<string, RequisitosPack> = {
  Limpeza: { lider: 1, auxiliar: 3, transporte: 'Caminhao' },
  Reconstrucao: { lider: 1, auxiliar: 2, transporte: null },
  Logistica: { lider: 1, auxiliar: 2, transporte: 'Picape' },
};

// Gerar pack de voluntários
export const gerarPack = async (tipo: string) => {
  const config = requisitosPorTipo[tipo];
  
  if (!config) {
    throw new Error(`Tipo de pack inválido: ${tipo}`);
  }
  
  // Buscar líderes disponíveis
  const lideres = await prisma.voluntario.findMany({
    where: {
      disponibilidades: {
        some: {
          tipo,
          ativo: 'Lider',
        },
      },
    },
  });
  
  // Buscar auxiliares disponíveis
  const auxiliares = await prisma.voluntario.findMany({
    where: {
      disponibilidades: {
        some: {
          tipo,
          ativo: 'Auxiliar',
        },
      },
    },
  });
  
  if (lideres.length < config.lider) {
    throw new Error('Não há líderes suficientes disponíveis');
  }
  
  if (auxiliares.length < config.auxiliar) {
    throw new Error('Não há auxiliares suficientes disponíveis');
  }
  
  // Verificar transporte se necessário
  if (config.transporte) {
    const comTransporte = await prisma.voluntario.findMany({
      where: {
        disponibilidades: {
          some: {
            tipo,
            ativo: config.transporte,
          },
        },
      },
    });
    
    if (comTransporte.length === 0) {
      throw new Error('Não há transporte disponível para este pack');
    }
  }
  
  // Selecionar membros aleatoriamente
  const liderSelecionado = lideres[0];
  const auxiliaresSelecionados = auxiliares.slice(0, config.auxiliar).map((a: any) => a.id);
  
  // Criar pack
  const pack = await prisma.pack.create({
    data: {
      nome: `Pack ${tipo} - ${new Date().toISOString()}`,
      tipo,
      membros: [
        liderSelecionado.id,
        ...auxiliaresSelecionados.map((a) => a.id),
      ],
      disponivel: true,
    },
  });
  
  return pack;
};

// Listar packs disponíveis
export const listarPacksDisponiveis = async (tipo?: string) => {
  const where = tipo ? { tipo, disponivel: true } : { disponivel: true };
  
  const packs = await prisma.pack.findMany({
    where,
    include: {
      // Incluir dados dos membros seria necessário adicionar relação no schema
    },
  });
  
  return packs;
};

// Convocar pack
export const convocarPack = async (packId: string, localMissao: string, horario: string) => {
  const pack = await prisma.pack.update({
    where: { id: packId },
    data: { disponivel: false },
  });
  
  // Aqui seria implementado o envio de notificações aos membros
  
  return pack;
};
