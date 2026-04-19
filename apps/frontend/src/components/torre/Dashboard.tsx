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
    filtroTipo ? v.disponibilidades.includes(filtroTipo) : true
  );

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-100 rounded-lg p-4 h-24 animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="bg-white border rounded-lg p-4">
        <h2 className="font-bold mb-4">Filtrar por Competência</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFiltroTipo('')}
            className={`px-4 py-2 rounded-lg min-h-[48px] md:min-h-[48px] lg:min-h-[64px] ${
              filtroTipo === '' ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            Todos
          </button>
          {['Saude', 'Logistica', 'Engenharia'].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltroTipo(tipo)}
              className={`px-4 py-2 rounded-lg min-h-[48px] md:min-h-[48px] lg:min-h-[64px] ${
                filtroTipo === tipo ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-600">Total Voluntários</p>
          <p className="text-2xl font-bold text-blue-800">{voluntarios.length}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-600">Saúde</p>
          <p className="text-2xl font-bold text-green-800">
            {voluntarios.filter((v) => v.disponibilidades.includes('Saude')).length}
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-600">Logística</p>
          <p className="text-2xl font-bold text-yellow-800">
            {voluntarios.filter((v) => v.disponibilidades.includes('Logistica')).length}
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm text-purple-600">Engenharia</p>
          <p className="text-2xl font-bold text-purple-800">
            {voluntarios.filter((v) => v.disponibilidades.includes('Engenharia')).length}
          </p>
        </div>
      </div>

      {/* Lista de Voluntários */}
      <div className="bg-white border rounded-lg">
        <div className="p-4 border-b">
          <h2 className="font-bold">
            Voluntários ({voluntariosFiltrados.length})
          </h2>
        </div>
        <div className="divide-y">
          {voluntariosFiltrados.map((voluntario) => (
            <div
              key={voluntario.id}
              className="p-4 hover:bg-gray-50 cursor-pointer min-h-[64px] flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-lg">{voluntario.nome}</h3>
                <p className="text-sm text-gray-600">{voluntario.email}</p>
                <p className="text-sm text-gray-600">{voluntario.telefone}</p>
                <div className="flex gap-2 mt-2">
                  {voluntario.disponibilidades.map((d) => (
                    <span
                      key={d.id}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                    >
                      {d.tipo}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setVoluntarioSelecionado(voluntario)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg min-h-[48px]"
              >
                Detalhes
              </button>
            </div>
          ))}
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
