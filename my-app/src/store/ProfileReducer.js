const defaultState = {
    text: 'first'
}

export const ProfileReducer = (state= defaultState, action) => {
    switch (action.type) {
        case "changeValue":
            return action
        break

        default:
            return state
    }
}
