import { ApiResponse } from '../types';

const API_URL = 'https://api.example.com/chat'; // Replace with your actual API endpoint

export async function sendMessage(question: string): Promise<ApiResponse> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      answer: 'Lo siento, ocurrió un error al procesar tu solicitud. Por favor, intenta nuevamente más tarde.'
    };
  }
}