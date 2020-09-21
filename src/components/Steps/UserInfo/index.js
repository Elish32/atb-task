import React from 'react'
import { connect } from 'react-redux'

import * as actionTypes from '../../../store/actions'

import './index.css'

const UserInfo = (props) => {
    return (
        <div className="users">
            <p>İstifadəçilər</p>
            <button onClick={props.toggleModal} >+</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch({ type: actionTypes.TOGGLE_USER_INFO_MODAL_BOX, showUserInfoModal: false })
    }
}

export default connect(null, mapDispatchToProps)(UserInfo)
