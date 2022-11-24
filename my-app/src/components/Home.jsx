
import React, {useCallback, useEffect, useId, useRef, useState} from "react";
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import {Button, Input, List, ListItem, Container} from "@mui/material";


function Home() {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.MessageReducer.id)
    console.log(value)
    const messages = useSelector((state) => state.ChatsReducer)
    let a = messages.find(ctx => ctx.id == value)
    
    console.log(a)
    const qw = useSelector((state) => state.ChatReducer)
    let st = qw.find(ctx => ctx.id == value)
    console.log(st)
    const inputRef = useRef(null)
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState('');
    
    const sendMessage = (e) => {
        e.preventDefault();

        const input = document.querySelector('input')
        console.log(input.value)
        dispatch({type: 'addMessage', author: 'Admin', text: input.value, id: value.id})
        // св
        //setMessageList([...messageList, { text: input.value, author: 'Admin' }])

    }
    const messageSend = () => {
        return messageList.map((e, index) => <div className="Message" key={index}>Cообщение: {e.text} было отправлено автором {e.author}</div>)

    }

    
    useEffect(() => {
        setMessageList([...messageList, value])
      }, [value])
    useEffect((e) => { //Почему в начале выводит?
        inputRef.current?.focus();
        inputRef.current.value = '';
        setTimeout(() => {
            const a = "<div className='Message'>Cообщение: Привет было отправлено автором Робот</div>"
            document.querySelector('.Messages').insertAdjacentHTML('beforeend', a)

        }, 1000)

    }, [ messageList, text])

    return (
        <Container maxWidth="xl"> 
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
        </Container>
    );
}

export default Home;