const defaultState = [
    {id: 'main', name: 'Main', path: '/'},
    {id: 'profile', name: 'Profile', path: '/profile'},
    {id:1, name:'Chat 1', path: '/chat/1'},
    {id:2, name:'Chat 2', path: '/chat/2'},
    {id:3, name:'Chat 3', path: '/chat/3'},
    {id:4, name:'Chat 4', path: '/chat/4'}
]

export const ChatsReducer = (state= defaultState, action) => {
    switch (action.type) {
        case "createChat":
            return action
        break

        default:
            return state
    }
}