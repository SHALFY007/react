import logo from './logo.svg';
import React, {useCallback, useEffect, useId, useRef, useState} from "react";
import './App.css';
import Message from './components/Message';
import {Button, Input, List, ListItem} from "@mui/material";

const message = "Message"



function App() {
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([{id:1, name:'Chat 1'},
    {id:2, name:'Chat 2'},
    {id:3, name:'Chat 3'},
    {id:4, name:'Chat 4'}
   ])
  const [text, setText] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    const input = document.querySelector('input')
    console.log(input.value)
    setText(input.value)
    setMessageList([...messageList, { text: input.value, author: 'Admin' }])

  }
  const messageSend = () => {
    let g = messageList.map((e, index) => <div className="Message" key={index}>Cообщение: {e.text} было отправлено автором {e.author}</div>)
    console.log(g)
    return messageList.map((e, index) => <div className="Message" key={index}>Cообщение: {e.text} было отправлено автором {e.author}</div>)

  }

  const showChat =() => {
    return chatList.map((e) => <ListItem alignItems='center' key={e.id} className="Chat-list-item">{e.name}</ListItem>)
  }
  useEffect((e) => { //Почему в начале выводит?
    inputRef.current?.focus();
    inputRef.current.value = '';
    setTimeout(() => {
      const a = "<div className='Message'>Cообщение: Привет было отправлено автором Робот</div>"
      document.querySelector('.Messages').insertAdjacentHTML('beforeend', a)

    }, 1000)

  }, [ messageList, text])

  return (
    <div className="App">
      <List ref={listRef} disablePadding={true}>
        {showChat()}
      </List>
      <header className="App-header">
        <Message message={message} />

        <div className="Messages">
          {messageSend()}
        </div>
        <form className="App-form">
          {/*<input ref={inputRef} type='text' className="App-input"/>*/}
          <Input inputRef={inputRef} type='text' className="App-input" autoFocus={true} placeholder={'Введите текст'}></Input>
          {/*<button action="#" onClick={sendMessage}>Send</button>*/}
          <Button className="Button-send" variant="contained" type="submit" onClick={sendMessage}>Send</Button>
        </form>

      </header>
    </div>
  );
}

export default App;
