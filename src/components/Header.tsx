import React from 'react';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center py-4 px-4 text-center">
      <div className="flex items-center gap-2 mb-1">
        <MessageSquare className="w-8 h-8 text-cero-green" />
        <h1 className="text-3xl font-bold text-white">Cero Dudas</h1>
      </div>
      <p className="text-gray-300 text-sm">
        Tu asistente en sostenibilidad y atributos ambientales
      </p>
    </header>
  );
};

export default Header;