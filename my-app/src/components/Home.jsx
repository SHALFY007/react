
import React, {useCallback, useEffect, useId, useRef, useState} from "react";
import '../App.css';

import {Button, Input, List, ListItem} from "@mui/material";
import {BrowserRouter, Link, Switch, Route, Routes} from "react-router-dom";


function Home() {
    const inputRef = useRef(null)
    const listRef = useRef(null)
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState([
        {id: 'profile', name: 'Profile', path: '/profile'},
        {id:1, name:'Chat 1', path: '/chat1'},
        {id:2, name:'Chat 2', path: '/chat2'},
        {id:3, name:'Chat 3', path: '/chat3'},
        {id:4, name:'Chat 4', path: '/chat4'}
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

    const nextStep = (e) => {
        let target = e.target.id
        console.log(e.target.id)

        if (target == 'profile') {

        }
    }

    const showChat =() => {
        return chatList.map((e) => <ListItem alignItems='center' key={e.id}  id={e.id} onClick={nextStep}>
            <Link className="Chat-list-item" to={e.path}>{e.name}</Link></ListItem>)
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
            <div className="Home">
                <header className="App-header">

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

export default Home;