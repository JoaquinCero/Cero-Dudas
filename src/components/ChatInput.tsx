import React, { useState, KeyboardEvent } from 'react';
import { SendHorizontal } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-gray-700 bg-black/30 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative flex items-end">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu pregunta aquí..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 pr-12 resize-none focus:outline-none focus:ring-1 focus:ring-cero-green text-white"
            rows={1}
            disabled={isLoading}
            style={{ minHeight: '50px', maxHeight: '200px' }}
          />
          <button
            onClick={handleSend}
            disabled={!message.trim() || isLoading}
            className={`absolute right-2 bottom-2.5 p-1.5 rounded-md ${
              !message.trim() || isLoading
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-cero-green hover:bg-cero-green-hover'
            } transition-colors`}
            aria-label="Enviar mensaje"
          >
            <SendHorizontal className="h-5 w-5 text-black" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Cero Dudas puede cometer errores. Verifica la información importante.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;