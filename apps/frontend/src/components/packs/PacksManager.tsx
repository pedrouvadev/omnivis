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
          <div key={i} className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-white/10 rounded-xl p-4 h-24 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="omnivis-card border-[#EF4444]/30">
          <div className="omnivis-card__icon bg-[#EF4444]/15">
            <span className="text-2xl text-[#EF4444]">!</span>
          </div>
          <p className="text-[#EF4444] text-sm">{error}</p>
        </div>
      )}

      {/* Gerar Novo Pack */}
      <div className="omnivis-card">
        <div className="omnivis-card__icon bg-[#F59E0B]/15">
          <span className="text-xl text-[#F59E0B]">⚡</span>
        </div>
        <h2 className="omnivis-card__title">Gerar Novo Pack</h2>
        <div className="flex gap-2 mt-4">
          <select
            value={novoPackTipo}
            onChange={(e) => setNovoPackTipo(e.target.value)}
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg min-h-[48px] text-[#F8FAFC] focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
          >
            <option value="" className="bg-[#0F172A]">Selecione o tipo...</option>
            <option value="Limpeza" className="bg-[#0F172A]">Limpeza</option>
            <option value="Reconstrucao" className="bg-[#0F172A]">Reconstrução</option>
            <option value="Logistica" className="bg-[#0F172A]">Logística</option>
          </select>
          <button
            onClick={handleGerarPack}
            disabled={!novoPackTipo}
            className="inline-flex items-center justify-center text-center min-h-[48px] px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            Gerar
          </button>
        </div>
      </div>

      {/* Lista de Packs */}
      <div className="omnivis-card">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
          <h2 className="text-lg font-bold text-[#F8FAFC]">
            Packs Disponíveis ({packs.filter(p => p.disponivel).length})
          </h2>
        </div>
        <div className="space-y-3">
          {packs.length === 0 ? (
            <p className="text-[#94A3B8] text-center py-8">Nenhum pack encontrado.</p>
          ) : (
            packs.map((pack) => (
              <div
                key={pack.id}
                className={`p-4 bg-white/5 border rounded-lg flex items-center justify-between min-h-[64px] transition-all ${
                  pack.disponivel ? 'border-white/10 hover:border-[#F59E0B]/30' : 'border-white/5 opacity-60'
                }`}
              >
                <div>
                  <h3 className="font-bold text-[#F8FAFC]">{pack.nome}</h3>
                  <p className="text-sm text-[#94A3B8]">Tipo: {pack.tipo}</p>
                  <p className="text-sm text-[#64748B]">Membros: {pack.membros.length}</p>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs mt-2 font-medium ${
                      pack.disponivel 
                        ? 'bg-[#10B981]/10 text-[#10B981]' 
                        : 'bg-[#EF4444]/10 text-[#EF4444]'
                    }`}
                  >
                    {pack.disponivel ? 'Disponível' : 'Em Missão'}
                  </span>
                </div>
                {pack.disponivel && (
                  <button
                    onClick={() => handleConvocar(pack.id)}
                    className="inline-flex items-center justify-center text-center min-h-[44px] px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer text-sm"
                  >
                    Convocar
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PacksManager;
