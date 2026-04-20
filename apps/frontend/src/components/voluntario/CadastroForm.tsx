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

      const voluntario = await response.json();

      // Tentar criar disponibilidade (não crítico)
      try {
        await fetch('http://localhost:3000/api/v1/disponibilidades', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tipo: formData.tipoDisponibilidade,
            ativo: formData.ativo,
            voluntarioId: voluntario.id,
          }),
        });
      } catch (dispError) {
        console.warn('Não foi possível criar disponibilidade:', dispError);
      }

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
      console.error('Erro no cadastro:', err);
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(`Não foi possível cadastrar: ${errorMessage}`);
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
      <div className="omnivis-card border-[#10B981]/30">
        <div className="omnivis-card__icon bg-[#10B981]/15">
          <span className="text-2xl">✓</span>
        </div>
        <h2 className="omnivis-card__title text-[#10B981]">Cadastro Realizado!</h2>
        <p className="omnivis-card__text mb-6">
          Obrigado por se cadastrar como voluntário. Você receberá notificações quando precisarem da sua ajuda.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="inline-flex items-center justify-center text-center min-h-[44px] px-6 py-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer text-sm"
        >
          Cadastrar Outro Voluntário
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {error && (
        <div className="omnivis-card border-[#EF4444]/30 mb-6">
          <div className="omnivis-card__icon bg-[#EF4444]/15">
            <span className="text-2xl text-[#EF4444]">!</span>
          </div>
          <p className="text-[#EF4444] text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium mb-2 text-[#94A3B8]">
            Nome Completo *
          </label>
          <input
            type="text"
            id="nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg min-h-[48px] text-[#F8FAFC] placeholder:text-[#64748B] focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4]"
            placeholder="Digite seu nome completo"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#94A3B8]">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg min-h-[48px] text-[#F8FAFC] placeholder:text-[#64748B] focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4]"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium mb-2 text-[#94A3B8]">
            Telefone *
          </label>
          <input
            type="tel"
            id="telefone"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg min-h-[48px] text-[#F8FAFC] placeholder:text-[#64748B] focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4]"
            placeholder="(00) 00000-0000"
            required
          />
        </div>

        <div>
          <label htmlFor="tipoDisponibilidade" className="block text-sm font-medium mb-2 text-[#94A3B8]">
            Tipo de Disponibilidade *
          </label>
          <select
            id="tipoDisponibilidade"
            value={formData.tipoDisponibilidade}
            onChange={(e) => setFormData({ ...formData, tipoDisponibilidade: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg min-h-[48px] text-[#F8FAFC] focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4]"
            required
          >
            <option value="Saude" className="bg-[#0F172A]">Saúde</option>
            <option value="Logistica" className="bg-[#0F172A]">Logística</option>
            <option value="Engenharia" className="bg-[#0F172A]">Engenharia</option>
          </select>
        </div>

        <div>
          <label htmlFor="ativo" className="block text-sm font-medium mb-2 text-[#94A3B8]">
            Ativo/Equipamento *
          </label>
          <input
            type="text"
            id="ativo"
            value={formData.ativo}
            onChange={(e) => setFormData({ ...formData, ativo: e.target.value })}
            placeholder="Ex: Barco, Caminhão, Drone, CNH-D"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg min-h-[48px] text-[#F8FAFC] placeholder:text-[#64748B] focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4]"
            required
          />
        </div>

        <div>
          <button
            type="button"
            onClick={handleGeolocation}
            className="inline-flex items-center justify-center text-center min-h-[44px] w-full px-4 py-2 bg-transparent border border-[#06B6D4] text-[#06B6D4] rounded-lg font-semibold hover:bg-[#06B6D4]/10 transition-all cursor-pointer text-sm"
          >
            <span className="mr-2">📍</span> Usar Minha Localização Atual
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center text-center min-h-[48px] w-full px-6 py-3 bg-gradient-to-r from-[#F97316] to-[#EF4444] text-white rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Cadastrando...' : 'Cadastrar Voluntário'}
        </button>
      </form>
    </div>
  );
};

export default CadastroForm;
