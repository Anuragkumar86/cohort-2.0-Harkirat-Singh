
import './App.css';
import { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { nanoid } from 'nanoid'

const userName = nanoid(4);
const socket = io.connect("http://localhost:5000");

function App() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);


  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, userName })
    setMessage("");
  }

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload])
    })
  },[chat])

  console.log("CHAT: ", chat)
  return (
    <div className="App-header">
      <h1 className="">Message App</h1>
      <div>
        Hello From map
        {chat.map((payload, index) => (
          <div key={index}>{payload.message}: {payload.userName}</div>
        ))}
       
      </div>



      <form onSubmit={sendMessage}>
        <input
          name='message'
          value={message}
          placeholder='Enter message'
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        >
        </input>
        <button type='submit'>Send</button>
      </form>

    </div>
  );
}

export default App;
