import React from "react";


import { connect } from 'react-redux'
import * as actionTypes from './store/actions'

import UserInfoModal from './components/UserInfoModal'
import Title from './components/Title'
import Header from './components/Header'
import Steps from './components/Steps'
import Footer from './components/Footer'

import "./styles/app.css";

const App = (props) => {

    React.useEffect(() => {

        const modalBackdrop = document.querySelector('.modal-backdrop')

        modalBackdrop.addEventListener('click', props.toggleModal)

        return () => modalBackdrop.removeEventListener('click', props.toggleModal)

    })

    return (
        <div className={`App${props.modalState ? ' modal-active' : ''}`}>
            <div className="modal-backdrop"></div>
            <Header />
            <Title />
            <UserInfoModal modal={props.modalState} toggle={props.toggleModal} />
            <Steps />
            <Footer />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modalState: state.showUserInfoModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch({ type: actionTypes.TOGGLE_USER_INFO_MODAL_BOX })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
