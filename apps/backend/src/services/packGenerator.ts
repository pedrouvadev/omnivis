import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function gerarPack(tipo: string) {
  // Buscar voluntários com disponibilidades compatíveis
  const voluntarios = await prisma.voluntario.findMany({
    where: {
      disponibilidades: {
        some: {
          tipo: tipo === 'Reconstrucao' ? 'Engenharia' : 
                tipo === 'Limpeza' ? 'Logistica' : 'Logistica'
        }
      }
    },
    include: {
      disponibilidades: true
    }
  });

  // Selecionar até 5 voluntários
  const membros = voluntarios.slice(0, 5).map(v => v.id);

  const pack = await prisma.pack.create({
    data: {
      nome: `Pack ${tipo} - ${new Date().toLocaleDateString()}`,
      tipo,
      membros
    }
  });

  return pack;
}

export async function listarPacksDisponiveis(tipo?: string) {
  const where = tipo ? { tipo } : { disponivel: true };
  
  const packs = await prisma.pack.findMany({
    where: {
      disponivel: true,
      ...(tipo && { tipo })
    }
  });

  return packs;
}

export async function convocarPack(packId: string, localMissao: string, horario: string) {
  const pack = await prisma.pack.update({
    where: { id: packId },
    data: {
      disponivel: false
    }
  });

  return pack;
}
