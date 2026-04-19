import React from 'react';

interface VoluntarioModalProps {
  voluntario: any;
  onClose: () => void;
}

const VoluntarioModal: React.FC<VoluntarioModalProps> = ({ voluntario, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{voluntario.nome}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl min-h-[48px] min-w-[48px]"
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{voluntario.email}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Telefone</p>
            <p className="font-medium">{voluntario.telefone}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Localização</p>
            <p className="font-medium">{voluntario.localizacao}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Disponibilidades</p>
            <div className="flex flex-wrap gap-2">
              {voluntario.disponibilidades?.map((d: string) => (
                <span key={d} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {d}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Cadastrado em</p>
            <p className="font-medium">
              {new Date(voluntario.createdAt).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
        
        <div className="mt-6 flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-200 rounded-lg min-h-[48px] hover:bg-gray-300"
          >
            Fechar
          </button>
          <button
            onClick={() => {
              // Implementar ação de contato
              alert(`Funcionalidade de contato para ${voluntario.nome} em desenvolvimento`);
            }}
            className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg min-h-[48px] hover:bg-blue-700"
          >
            Contatar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoluntarioModal;
