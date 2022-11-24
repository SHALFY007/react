
import {combineReducers, createStore, applyMiddleware} from "redux";
import {ProfileReducer} from './ProfileReducer'
import {ChatsReducer} from './ChatsReducer'
import {ChatReducer} from './ChatReducer'
import {MessageReducer} from './MessageReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ProfileReducer,
    ChatsReducer,
    MessageReducer,
    ChatReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));