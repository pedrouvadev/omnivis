import React, { useState, useEffect } from 'react';

interface Pack {
  id: string;
  nome: string;
  tipo: string;
  membros: string[];
  disponivel: boolean;
}

const PacksManager: React.FC = () => {
  const [packs, setPacks] = useState<Pack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [novoPackTipo, setNovoPackTipo] = useState<string>('');

  useEffect(() => {
    fetchPacks();
  }, []);

  const fetchPacks = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/packs');
      if (!response.ok) throw new Error('Erro ao buscar packs');
      const data = await response.json();
      setPacks(data);
    } catch (err) {
      setError('Não foi possível carregar os packs');
    } finally {
      setLoading(false);
    }
  };

  const handleGerarPack = async () => {
    if (!novoPackTipo) return;

    try {
      const response = await fetch('http://localhost:3000/api/v1/packs/gerar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipo: novoPackTipo }),
      });

      if (!response.ok) throw new Error('Erro ao gerar pack');

      await fetchPacks();
      setNovoPackTipo('');
    } catch (err) {
      setError('Erro ao gerar pack');
    }
  };

  const handleConvocar = async (packId: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/packs/${packId}/convocar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          localMissao: 'Local da Missão',
          horario: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Erro ao convocar pack');

      await fetchPacks();
    } catch (err) {
      setError('Erro ao convocar pack');
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-100 rounded-lg p-4 h-24 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      {/* Gerar Novo Pack */}
      <div className="bg-white border rounded-lg p-4">
        <h2 className="font-bold mb-4">Gerar Novo Pack</h2>
        <div className="flex gap-2">
          <select
            value={novoPackTipo}
            onChange={(e) => setNovoPackTipo(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-lg min-h-[48px]"
          >
            <option value="">Selecione o tipo...</option>
            <option value="Limpeza">Limpeza</option>
            <option value="Reconstrucao">Reconstrução</option>
            <option value="Logistica">Logística</option>
          </select>
          <button
            onClick={handleGerarPack}
            disabled={!novoPackTipo}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg min-h-[48px] disabled:bg-gray-300"
          >
            Gerar
          </button>
        </div>
      </div>

      {/* Lista de Packs */}
      <div className="bg-white border rounded-lg">
        <div className="p-4 border-b">
          <h2 className="font-bold">Packs Disponíveis ({packs.filter(p => p.disponivel).length})</h2>
        </div>
        <div className="divide-y">
          {packs.map((pack) => (
            <div
              key={pack.id}
              className={`p-4 flex items-center justify-between min-h-[64px] ${
                !pack.disponivel ? 'bg-gray-50' : ''
              }`}
            >
              <div>
                <h3 className="font-bold">{pack.nome}</h3>
                <p className="text-sm text-gray-600">Tipo: {pack.tipo}</p>
                <p className="text-sm text-gray-600">Membros: {pack.membros.length}</p>
                <span
                  className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
                    pack.disponivel ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {pack.disponivel ? 'Disponível' : 'Em Missão'}
                </span>
              </div>
              {pack.disponivel && (
                <button
                  onClick={() => handleConvocar(pack.id)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg min-h-[48px]"
                >
                  Convocar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PacksManager;
