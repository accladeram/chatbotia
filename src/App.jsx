
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';
import { GoogleGenAI } from "@google/genai";

import styles from './App.module.css';
import { useState } from 'react';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY });

 const chat = ai.chats.create({
    model: "gemini-2.5-flash",
  });

function App() {
  const [messages, setMessages] = useState([]);

  function addMessage(params) {
    setMessages(prevMessages => [...prevMessages, params]);
  }
  async function handleContentSend(content) {
    addMessage({ role: 'user', content });
    try {
       const result = await chat.sendMessage({
        message: content,
       });
      addMessage({ role: 'assistant', content: result.text });

    } catch (error) {
      addMessage({ role: 'system', content: 'Sorry, something went wrong. Please try again later.' });
      console.error('Error communicating with AI model:', error);
    }
  }
  return (
  <div className={styles.App}>
    <header className={styles.Header}>
      <img src='/chatbot.png' className={styles.Logo}  alt="Chatbot logo" />
      <h2>Chatbot IA</h2>
    </header>
    <div className={styles.ChatContainer}>
      <Chat messages={messages} />
    </div>
    <Controls onSendMessage={handleContentSend} />
  </div>
  )
}


export default App
