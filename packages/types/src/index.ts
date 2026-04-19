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
