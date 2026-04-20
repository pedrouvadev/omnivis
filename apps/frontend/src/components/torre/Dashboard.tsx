import React, { useState, useEffect } from 'react';
import VoluntarioModal from './VoluntarioModal';

interface Disponibilidade {
  id: string;
  tipo: string;
  ativo: string;
  voluntarioId: string;
}

interface Voluntario {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  localizacao: string;
  disponibilidades: Disponibilidade[];
}

const Dashboard: React.FC = () => {
  const [voluntarios, setVoluntarios] = useState<Voluntario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filtroTipo, setFiltroTipo] = useState<string>('');
  const [voluntarioSelecionado, setVoluntarioSelecionado] = useState<Voluntario | null>(null);

  useEffect(() => {
    fetchVoluntarios();
  }, []);

  const fetchVoluntarios = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/voluntarios');
      if (!response.ok) throw new Error('Erro ao buscar voluntários');
      const data = await response.json();
      setVoluntarios(data);
    } catch (err) {
      setError('Não foi possível carsome (d) => d.tipo === voluntários');
    } finally {
      setLoading(false);
    }
  };

  const voluntariosFiltrados = voluntarios.filter((v) =>
    filtroTipo ? v.disponibilidades.some((d) => d.tipo === filtroTipo) : true
  );

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[rgba(15,23,42,0.6)] backdrop-blur-[12px] border border-white/10 rounded-xl p-4 h-24 animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="omnivis-card border-[#EF4444]/30">
        <div className="omnivis-card__icon bg-[#EF4444]/15">
          <span className="text-2xl text-[#EF4444]">!</span>
        </div>
        <p className="text-[#EF4444] text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="omnivis-card">
        <div className="omnivis-card__icon bg-[#06B6D4]/15">
          <span className="text-xl text-[#06B6D4]">🔍</span>
        </div>
        <h2 className="omnivis-card__title">Filtrar por Competência</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setFiltroTipo('')}
            className={`px-4 py-2 rounded-lg min-h-[44px] text-sm font-semibold transition-all ${
              filtroTipo === '' 
                ? 'bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white' 
                : 'bg-white/5 border border-white/10 text-[#94A3B8] hover:border-[#06B6D4]/30'
            }`}
          >
            Todos
          </button>
          {['Saude', 'Logistica', 'Engenharia'].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltroTipo(tipo)}
              className={`px-4 py-2 rounded-lg min-h-[44px] text-sm font-semibold transition-all ${
                filtroTipo === tipo 
                  ? 'bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white' 
                  : 'bg-white/5 border border-white/10 text-[#94A3B8] hover:border-[#06B6D4]/30'
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="omnivis-card hover:border-[#06B6D4]/30 p-4">
          <p className="text-xs text-[#06B6D4] font-semibold uppercase tracking-wider mb-1">Total Voluntários</p>
          <p className="text-3xl font-bold text-[#F8FAFC]">{voluntarios.length}</p>
        </div>
        <div className="omnivis-card hover:border-[#10B981]/30 p-4">
          <p className="text-xs text-[#10B981] font-semibold uppercase tracking-wider mb-1">Saúde</p>
          <p className="text-3xl font-bold text-[#F8FAFC]">
            {voluntarios.filter((v) => v.disponibilidades.some((d) => d.tipo === 'Saude')).length}
          </p>
        </div>
        <div className="omnivis-card hover:border-[#F59E0B]/30 p-4">
          <p className="text-xs text-[#F59E0B] font-semibold uppercase tracking-wider mb-1">Logística</p>
          <p className="text-3xl font-bold text-[#F8FAFC]">
            {voluntarios.filter((v) => v.disponibilidades.some((d) => d.tipo === 'Logistica')).length}
          </p>
        </div>
        <div className="omnivis-card hover:border-[#8B5CF6]/30 p-4">
          <p className="text-xs text-[#8B5CF6] font-semibold uppercase tracking-wider mb-1">Engenharia</p>
          <p className="text-3xl font-bold text-[#F8FAFC]">
            {voluntarios.filter((v) => v.disponibilidades.some((d) => d.tipo === 'Engenharia')).length}
          </p>
        </div>
      </div>

      {/* Lista de Voluntários */}
      <div className="omnivis-card">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
          <h2 className="text-lg font-bold text-[#F8FAFC]">
            Voluntários ({voluntariosFiltrados.length})
          </h2>
        </div>
        <div className="space-y-3">
          {voluntariosFiltrados.length === 0 ? (
            <p className="text-[#94A3B8] text-center py-8">Nenhum voluntário encontrado.</p>
          ) : (
            voluntariosFiltrados.map((voluntario) => (
              <div
                key={voluntario.id}
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#06B6D4]/30 cursor-pointer transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-[#F8FAFC] text-lg">{voluntario.nome}</h3>
                  <p className="text-sm text-[#94A3B8]">{voluntario.email}</p>
                  <p className="text-sm text-[#64748B]">{voluntario.telefone}</p>
                  <div className="flex gap-2 mt-2">
                    {voluntario.disponibilidades.map((d) => (
                      <span
                        key={d.id}
                        className="px-2 py-1 bg-[#06B6D4]/10 text-[#06B6D4] text-xs rounded font-medium"
                      >
                        {d.tipo}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => setVoluntarioSelecionado(voluntario)}
                  className="inline-flex items-center justify-center text-center min-h-[44px] px-4 py-2 bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer text-sm"
                >
                  Detalhes
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {voluntarioSelecionado && (
        <VoluntarioModal
          voluntario={voluntarioSelecionado}
          onClose={() => setVoluntarioSelecionado(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
