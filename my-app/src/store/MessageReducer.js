const defaultState = 
    {text: "text", author: 'Admin', id: 1}


export const MessageReducer = (state= defaultState, action) => {
    switch (action.type) {
        case "addMessage":
            return action
        break

        default:
            return state
    }
}