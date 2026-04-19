import React, { useState } from 'react';
import { Button } from '@omnivis/ui';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  localizacao: string;
  disponibilidades: string[];
}

const CadastroForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    localizacao: '',
    disponibilidades: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData({ ...formData, localizacao: `${latitude},${longitude}` });
        },
        (error) => {
          setError('Não foi possível obter sua localização. Por favor, insira manualmente.');
        }
      );
    } else {
      setError('Geolocalização não suportada pelo navegador.');
    }
  };

  const handleDisponibilidadeToggle = (tipo: string) => {
    setFormData({
      ...formData,
      disponibilidades: formData.disponibilidades.includes(tipo)
        ? formData.disponibilidades.filter((d) => d !== tipo)
        : [...formData.disponibilidades, tipo],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/v1/voluntarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar voluntário');
      }

      setSuccess(true);
    } catch (err) {
      setError('Erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Cadastro Realizado!</h2>
        <p className="text-green-700 mb-6">
          Obrigado por se cadastrar como voluntário. Você será notificado quando houver necessidades na sua região.
        </p>
        <Button onClick={() => setSuccess(false)} variant="secondary">
          Cadastrar outro voluntário
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700" role="alert">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          id="nome"
          required
          min="3"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[48px]"
          aria-describedby="nome-help"
        />
        <span id="nome-help" className="text-sm text-gray-500">
          Mínimo de 3 caracteres
        </span>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[48px]"
          aria-describedby="email-help"
        />
        <span id="email-help" className="text-sm text-gray-500">
          Usaremos para notificações importantes
        </span>
      </div>

      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefone *
        </label>
        <input
          type="tel"
          id="telefone"
          required
          min="10"
          value={formData.telefone}
          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[48px]"
          placeholder="(XX) XXXXX-XXXX"
          aria-describedby="telefone-help"
        />
        <span id="telefone-help" className="text-sm text-gray-500">
          Mínimo de 10 dígitos
        </span>
      </div>

      <div>
        <label htmlFor="localizacao" className="block text-sm font-medium text-gray-700 mb-2">
          Localização (Latitude, Longitude) *
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="localizacao"
            required
            value={formData.localizacao}
            onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[48px]"
            placeholder="-23.5505,-46.6333"
            aria-describedby="localizacao-help"
          />
          <Button
            type="button"
            onClick={handleLocation}
            variant="secondary"
            className="min-h-[48px]"
            aria-label="Obter localização atual"
          >
            📍
          </Button>
        </div>
        <span id="localizacao-help" className="text-sm text-gray-500">
          Clique no ícone para usar sua localização atual
        </span>
      </div>

      <div>
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-gray-700">
            Disponibilidades (selecione uma ou mais)
          </legend>
          {['Saude', 'Logistica', 'Engenharia'].map((tipo) => (
            <label key={tipo} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 min-h-[48px]">
              <input
                type="checkbox"
                checked={formData.disponibilidades.includes(tipo)}
                onChange={() => handleDisponibilidadeToggle(tipo)}
                className="w-6 h-6 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-gray-700">{tipo}</span>
            </label>
          ))}
        </fieldset>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full min-h-[48px]"
      >
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </Button>
    </form>
  );
};

export default CadastroForm;
