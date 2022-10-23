import logo from './logo.svg';
import React, {useCallback, useEffect, useId, useState} from "react";
import './App.css';
import Message from './components/Message';

const message = "Message"



function App() {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    const input = document.querySelector('input')
    console.log(input.value)
    setText(input.value)
    setMessageList([...messageList, { text: input.value, author: 'Admin' }])

  }
  const ah = () => {
    return messageList.map(e => <div className="Message" key={e.text}>Cообщение: {e.text} было отправлено автором {e.author}</div>)
  }
  useEffect((e) => { //Почему в начале выводит?
    setTimeout(() => {
      const a = "<div className='Message'>Cообщение: Привет было отправлено автором Робот</div>"
      document.querySelector('.Messages').insertAdjacentHTML('beforeend', a)

    }, 1000)

  }, [ messageList, text])
  return (
    <div className="App">
      <header className="App-header">
        <Message message={message} />
        <div className="Messages">
          {ah()}
        </div>
        <form className="App-form">
          <input type='text' className="App-input"/>
          <button action="#" onClick={sendMessage}>Send</button>
        </form>

      </header>
    </div>
  );
}

export default App;
