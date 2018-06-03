function gooddeed (state = [], action) {
    switch (action.type) {
        case 'ADD_DEED':
            return [...state, action.deed]
        case 'EDIT_DEED': 
            let editDeedState = state.map(deed => {
                if(deed.id == action.deed.id) {
                    return action.deed
                } else {
                    return deed
                }
            })
            return [...editDeedState]
        case 'DELETE_DEED': 
            let deleteDeedState = state.filter(deed => {
                return deed.id !== action.deed.id
            })
            return [...deleteDeedState]
        
            default:
            return state
    }
}

export default gooddeed