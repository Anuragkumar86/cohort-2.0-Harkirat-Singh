import { useState } from 'react'

import React from "react";

function App() {
  const [title, setTitle] = useState("My name is Anurag111");

  function updateTitle(){
    setTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <br></br>
      <br></br>
      <Header title={title}></Header>
      <Header title="Anurag2"></Header>
      <Header title="Anurag3"></Header>
      <Header title="Anurag4"></Header>
      <Header title="Anurag5"></Header>
      <Header title="Anurag6"></Header>
    </div>
  )

}

const Header = React.memo(function Header({ title }) {
  console.log(`Rendering Header with title: ${title}`);
  return <div>{"My name is " + title}</div>;
});


export default App
