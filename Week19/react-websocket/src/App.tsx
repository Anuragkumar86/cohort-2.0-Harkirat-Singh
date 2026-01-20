import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<any>(null);
  const [latestMessage, setLatestmessage] = useState("");
  const [actualMessage, setActualMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connection established');

      setSocket(socket);
    };
    socket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setLatestmessage(message.data);
    }
    return ()=>{
      socket.close();
    }
  }, [])

  if(!socket){
    return <div>
      Please wait Server is loading... 
    </div>
  }

  return (
    <>
        <input onChange={(e)=>{
          setActualMessage(e.target.value);
        }}></input>
        <button onClick={() => {
            socket.send(actualMessage);
        }}>
            Send
        </button>
        {latestMessage}
    </>
);
}

export default App