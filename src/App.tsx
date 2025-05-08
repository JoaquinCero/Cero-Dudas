import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import { sendMessage } from './utils/api';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: uuidv4(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // In a real implementation, we would call the API
      // For demo purposes, we'll simulate a response
      // const response = await sendMessage(content);

      // Simulated API response (replace with actual API call in production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      const simulatedResponse = {
        answer: `Esta es una respuesta simulada a tu pregunta: "${content}"\n\nEn un entorno de producción, esto se conectaría a su API externa.`
      };

      // Add assistant message
      const assistantMessage: Message = {
        id: uuidv4(),
        content: simulatedResponse.answer,
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: uuidv4(),
        content: 'Lo siento, ocurrió un error al procesar tu solicitud. Por favor, intenta nuevamente más tarde.',
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-cero-black">
      <Header />
      <main className="flex-1 flex flex-col max-w-3xl w-full mx-auto md:border-x md:border-gray-700">
        <MessageList messages={messages} isLoading={isLoading} />
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </main>
      <Footer />
    </div>
  );
}

export default App;