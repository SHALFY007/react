import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import Message from './components/Message';

const message = "Message"



function App() {
  const [messageList, setMessageList] = useState([]);
  useEffect((e) => {
    setTimeout(() => {
      alert(`Привет, ${messageList[messageList.length - 1].author}, я получил твое сообщение`)
      console.log(messageList[messageList.length - 1])
    }, 1000)

  }, [messageList])
  const ah = () => {
    return messageList.map(e => <div>Cообщение: {e.text} было отправлено автором {e.author}</div>)
  }
  const sendMessage = (e) => {
    e.preventDefault();
    const input = document.querySelector('input')
    //messageList.push({ text: input.value, author: 'Admin' })
    setMessageList([{ text: input.value, author: 'Admin' }])

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message message={message} />
        {ah()}
        <form>
          <input type='text' />
          <button action="#" onClick={sendMessage}>Send</button>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
