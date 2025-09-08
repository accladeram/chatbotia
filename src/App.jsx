
import { Chat } from './components/Chat/Chat';
import { Controls } from './components/Controls/Controls';


import styles from './App.module.css';
import { useState } from 'react';
function App() {
  const [messages, setMessages] = useState(MESSAGES); 
  

  return (
  <div className={styles.App}>
    <header className={styles.Header}>
      <img src='/chatbot.png' className={styles.Logo}  alt="Chatbot logo" />
      <h2>Chatbot IA</h2>
    </header>
    <div className={styles.ChatContainer}>
      <Chat messages={messages} />
    </div>
    <Controls />
  </div>
  )
}

const MESSAGES = [
  {role:'user', content: 'Hola, ¿cómo estás?'},
  {role:'assistant', content: 'Hola, estoy bien, gracias. ¿En qué puedo ayudarte?'},
  {role:'user', content: '¿Cuál es la capital de Francia?'},
  {role:'assistant', content: 'La capital de Francia es París.'},
]
export default App
