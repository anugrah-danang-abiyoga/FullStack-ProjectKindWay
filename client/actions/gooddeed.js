import request from '../utils/api'
import gooddeed from '../reducers/gooddeed'

export function saveGoodDeed (date, gooddeeds) {

    return (dispatch) => {
        let data = {
            date, gooddeeds
        }

        request('post', 'v1/gooddeeds', data)
    }
}

export function addGoodDeed (id) {
    return {
        type: 'ADD_DEED',
        id
    }
}

export function editGoodDeed (deed) {
    return {
        type: 'EDIT_DEED', 
        deed
    }
}

export function deleteGoodDeed (deed_id) {
    return {
        type: 'DELETE_DEED',
        deed_id
    }
}