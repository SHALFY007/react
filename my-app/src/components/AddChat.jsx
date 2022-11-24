import {useDispatch, useSelector} from "react-redux";
import {useRef} from 'react'
import Container from '@mui/material/Container';


function AddChat() {
    const inputEl = useRef()

    const dispatch = useDispatch()
    const value = useSelector((state) => state.ChatsReducer.name)
    console.log(value)

    const createChat = () => {
        console.log('Create')
        console.log(inputEl.current.value)
        dispatch({type: 'createChat', name: inputEl.current.value,path: `/chat/${inputEl.current.value}`,
         id: inputEl.current.value})
    }
    return (
        <Container maxWidth="xl">
     <div className="add-chat">
            <form action="#">
                <input type="text" id='input-chat' placeholder="Имя чата" ref={inputEl}/>
                <input type="button" id="button-chat" value="Создать чат" onClick={createChat}/>
            </form>
        </div>
        </Container>
    );
}

export default AddChat