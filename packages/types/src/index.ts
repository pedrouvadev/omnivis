/*
 * =====================================================
 * Desenvolvido por: Pedro Uva (Mr. Uva)
 * Full-Stack Engineer & AI Strategist | Estrategista Digital
 * 
 * Website: https://mruva.com.br/
 * LinkedIn: https://www.linkedin.com/in/mruva/
 * 
 * Copyright © 2026 Pedro Uva. Todos os direitos reservados.
 * 
 * Este repositório é público. Se você clonar, fizer fork ou utilizar
 * este código em seus projetos, por favor, mantenha este aviso de
 * créditos intacto no topo de cada arquivo.
 * 
 * Agradeço pelo respeito ao meu trabalho e à minha contribuição
 * para a comunidade open-source.
 * 
 * Excelência desde 1997 • +25 anos de experiência em Full-Stack,
 * Inteligência Artificial e estratégias digitais.
 * =====================================================
 */

// Shared TypeScript types for OMNIVIS

export interface Voluntario {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  localizacao: string; // "lat,lng"
  createdAt: Date;
}

export interface Disponibilidade {
  id: string;
  tipo: string; // Saude, Logistica, Engenharia
  ativo: string; // Barco, Caminhao, Drone, CNH-D
  voluntarioId: string;
}

export interface Abrigo {
  id: string;
  nome: string;
  localizacao: string;
  capacidade: number;
  ocupacao: number;
  necessidades: string[];
}

export interface Doacao {
  id: string;
  doadorId: string;
  tipo: string;
  status: string; // Pendente, Coletada, Entregue
  transporteId?: string;
  createdAt: Date;
}

export interface Pack {
  id: string;
  nome: string;
  tipo: string; // Reconstrucao, Limpeza, Logistica
  membros: string[];
  disponivel: boolean;
}
