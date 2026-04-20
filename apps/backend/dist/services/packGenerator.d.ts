export declare function gerarPack(tipo: string): Promise<{
    id: string;
    nome: string;
    tipo: string;
    membros: string[];
    disponivel: boolean;
}>;
export declare function listarPacksDisponiveis(tipo?: string): Promise<{
    id: string;
    nome: string;
    tipo: string;
    membros: string[];
    disponivel: boolean;
}[]>;
export declare function convocarPack(packId: string, localMissao: string, horario: string): Promise<{
    id: string;
    nome: string;
    tipo: string;
    membros: string[];
    disponivel: boolean;
}>;
