const defaultState = [
    {id: '1', text: 'Text', author: 'Author'},
    {id: '2', text: 'Text2', author: 'Author'},
    {id: '3', text: 'Text3', author: 'Author'},
    
]

export const ChatReducer = (state= defaultState, action) => {
    switch (action.type) {
        case "createChat":
            return action
        break

        default:
            return state
    }
}