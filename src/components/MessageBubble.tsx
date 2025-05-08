import React from 'react';
import { Message } from '../types';
import { User, Bot } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div 
      className={`flex gap-3 p-4 md:px-6 animate-fade-in ${isUser ? 'bg-transparent' : 'bg-black/20'}`}
    >
      <div className="flex-shrink-0 mt-1">
        {isUser ? (
          <div className="w-8 h-8 rounded-full bg-user-bubble flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-cero-green flex items-center justify-center">
            <Bot className="w-5 h-5 text-black" />
          </div>
        )}
      </div>
      <div className={`flex-1 ${isUser ? 'text-white' : 'text-white'}`}>
        <div className="prose max-w-none">
          <p className="whitespace-pre-wrap leading-relaxed">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;