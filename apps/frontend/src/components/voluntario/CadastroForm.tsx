import React, { useState } from 'react';

const CadastroForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    localizacao: '',
    tipoDisponibilidade: 'Saude',
    ativo: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/v1/voluntarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          localizacao: '0,0', // Será atualizado com geolocalização
        }),
      });

      if (!response.ok) throw new Error('Erro ao cadastrar voluntário');

      // Criar disponibilidade
      const voluntario = await response.json();
      await fetch('http://localhost:3000/api/v1/disponibilidades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tipo: formData.tipoDisponibilidade,
          ativo: formData.ativo,
          voluntarioId: voluntario.id,
        }),
      });

      setSuccess(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        localizacao: '',
        tipoDisponibilidade: 'Saude',
        ativo: '',
      });
    } catch (err) {
      setError('Não foi possível cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Localização obtida mas não armazenada por enquanto
          console.log('Localização:', position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setError('Não foi possível obter sua localização');
        }
      );
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-800 mb-2">Cadastro Realizado!</h2>
        <p className="text-green-700 mb-4">Obrigado por se cadastrar como voluntário.</p>
        <button
          onClick={() => setSuccess(false)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg min-h-[48px]"
        >
          Cadastrar Outro Voluntário
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg min-h-[48px]"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg min-h-[48px]"
            required
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium mb-2">
            Telefone *
          </label>
          <input
            type="tel"
            id="telefone"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg min-h-[48px]"
            required
          />
        </div>

        <div>
          <label htmlFor="tipoDisponibilidade" className="block text-sm font-medium mb-2">
            Tipo de Disponibilidade *
          </label>
          <select
            id="tipoDisponibilidade"
            value={formData.tipoDisponibilidade}
            onChange={(e) => setFormData({ ...formData, tipoDisponibilidade: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg min-h-[48px]"
            required
          >
            <option value="Saude">Saúde</option>
            <option value="Logistica">Logística</option>
            <option value="Engenharia">Engenharia</option>
          </select>
        </div>

        <div>
          <label htmlFor="ativo" className="block text-sm font-medium mb-2">
            Ativo/Equipamento *
          </label>
          <input
            type="text"
            id="ativo"
            value={formData.ativo}
            onChange={(e) => setFormData({ ...formData, ativo: e.target.value })}
            placeholder="Ex: Barco, Caminhão, Drone, CNH-D"
            className="w-full px-4 py-3 border rounded-lg min-h-[48px]"
            required
          />
        </div>

        <div>
          <button
            type="button"
            onClick={handleGeolocation}
            className="w-full px-4 py-3 bg-gray-200 rounded-lg min-h-[48px] hover:bg-gray-300"
          >
            📍 Usar Minha Localização Atual
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg min-h-[48px] disabled:bg-gray-300"
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default CadastroForm;
