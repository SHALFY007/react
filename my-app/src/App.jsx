import logo from './logo.svg';
import React, {useCallback, useEffect, useId, useRef, useState} from "react";
import './App.css';
import Message from './components/Message';
import {Button, Input, List, ListItem} from "@mui/material";
import {BrowserRouter, Link, Switch, Route, Routes, useParams} from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Error from "./components/Error";

const message = "Message"



function App() {
  const { id } = useParams();
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([
    {id: 'main', name: 'Main', path: '/'},
    {id: 'profile', name: 'Profile', path: '/profile'},
      {id:1, name:'Chat 1', path: '/chat/1'},
    {id:2, name:'Chat 2', path: '/chat/2'},
    {id:3, name:'Chat 3', path: '/chat/3'},
    {id:4, name:'Chat 4', path: '/chat/4'}
   ])
  const [text, setText] = useState('');

  // const sendMessage = (e) => {
  //   e.preventDefault();
  //
  //   const input = document.querySelector('input')
  //   console.log(input.value)
  //   setText(input.value)
  //   setMessageList([...messageList, { text: input.value, author: 'Admin' }])
  //
  // }
  // const messageSend = () => {
  //   let g = messageList.map((e, index) => <div className="Message" key={index}>Cообщение: {e.text} было отправлено автором {e.author}</div>)
  //   console.log(g)
  //   return messageList.map((e, index) => <div className="Message" key={index}>Cообщение: {e.text} было отправлено автором {e.author}</div>)
  //
  // }
  //
  //
  const showChat =() => {
    return chatList.map((e) => <ListItem alignItems='center' key={e.id}  id={e.id}>
      <Link className="Chat-list-item" to={e.path}>{e.name}</Link></ListItem>)
  }
  // useEffect((e) => { //Почему в начале выводит?
  //   inputRef.current?.focus();
  //   inputRef.current.value = '';
  //   setTimeout(() => {
  //     const a = "<div className='Message'>Cообщение: Привет было отправлено автором Робот</div>"
  //     document.querySelector('.Messages').insertAdjacentHTML('beforeend', a)
  //
  //   }, 1000)
  //
  // }, [ messageList, text])

  return (
      <BrowserRouter>
    <div className="App">
      <List ref={listRef} disablePadding={true} className={'List'}>
        {showChat()}
      </List>
      {/*<header className="App-header">*/}
      {/*  <Message message={message} />*/}

      {/*  <div className="Messages">*/}
      {/*    {messageSend()}*/}
      {/*  </div>*/}
      {/*  <form className="App-form">*/}
      {/*    /!*<input ref={inputRef} type='text' className="App-input"/>*!/*/}
      {/*    <Input inputRef={inputRef} type='text' className="App-input" autoFocus={true} placeholder={'Введите текст'}></Input>*/}
      {/*    /!*<button action="#" onClick={sendMessage}>Send</button>*!/*/}
      {/*    <Button className="Button-send" variant="contained" type="submit" onClick={sendMessage}>Send</Button>*/}
      {/*  </form>*/}

      {/*</header>*/}
    </div>
        <Routes>
          <Route path="/profile" element={ <Profile />}>

          </Route>
          <Route exact path="/" element={ <Home />}>

          </Route>
          <Route path="/chat/:id" element={ <Home />}>

          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>

      </BrowserRouter>
  );
}

export default App;
