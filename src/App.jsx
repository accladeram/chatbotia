
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';


import styles from './App.module.css';
import { useState } from 'react';
function App() {
  const [messages, setMessages] = useState([]); 
  
function handleContentSend(content) {
  setMessages(prevMessages => [...prevMessages, { role: 'user', content }]);
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
