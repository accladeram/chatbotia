
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';
import { Assistant } from './assistants/googleai/Assistant';
import styles from './App.module.css';
import { useState } from 'react';


function App() {

  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);

  function addMessage(params) {
    setMessages(prevMessages => [...prevMessages, params]);
  }

  async function handleContentSend(content) {
    addMessage({ role: 'user', content });
    try {
      const result = await assistant.chat(content);
      addMessage({ role: 'assistant', content: result });
    } catch (error) {
      addMessage({ role: 'system', content: 'Sorry, something went wrong. Please try again later.' });
      console.error('Error communicating with AI model:', error);
    }
  }
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src='/chatbot.png' className={styles.Logo} alt="Chatbot logo" />
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
