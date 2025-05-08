import React from 'react';
import { Bot } from 'lucide-react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex gap-3 p-4 md:px-6 bg-black/20">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-cero-green flex items-center justify-center">
          <Bot className="w-5 h-5 text-black" />
        </div>
      </div>
      <div className="flex items-center text-white">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;