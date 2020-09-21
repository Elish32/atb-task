import * as actionTypes from './actions'

const initialState = {
    showUserInfoModal: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.TOGGLE_USER_INFO_MODAL_BOX:
            return {
                showUserInfoModal: !state.showUserInfoModal
            }
        default:
            return state
    }

}

export default reducer
