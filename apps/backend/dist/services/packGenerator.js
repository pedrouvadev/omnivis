"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarPack = gerarPack;
exports.listarPacksDisponiveis = listarPacksDisponiveis;
exports.convocarPack = convocarPack;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function gerarPack(tipo) {
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
async function listarPacksDisponiveis(tipo) {
    const where = tipo ? { tipo } : { disponivel: true };
    const packs = await prisma.pack.findMany({
        where: {
            disponivel: true,
            ...(tipo && { tipo })
        }
    });
    return packs;
}
async function convocarPack(packId, localMissao, horario) {
    const pack = await prisma.pack.update({
        where: { id: packId },
        data: {
            disponivel: false
        }
    });
    return pack;
}
