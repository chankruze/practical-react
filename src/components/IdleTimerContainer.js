/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 21:35:57 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const customStyles = {
    overlay: {
        backgroundColor: 'grey'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

function IdleTimerContainer() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(true)
    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    const idleTimerRef = React.useRef(null)
    const sessionTimeoutRef = React.useRef(null)

    const onIdleHandler = () => {
        console.log('User is idle')
        setModalIsOpen(true)
        sessionTimeoutRef.current = setTimeout(logOut, 5000)
    }

    const logOut = () => {
        setIsLoggedIn(false)
        console.log('User has logged out')
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
    }

    const logIn = () => {
        setIsLoggedIn(true)
        console.log('User has logged in')
    }

    const stayLoggedIn = () => {
        console.log('User is active')
        setModalIsOpen(false)
        clearTimeout(sessionTimeoutRef.current)
    }

    return (
        <div>
            {
                isLoggedIn
                    ? <React.Fragment>
                        <h2>Hello User!</h2>
                        <IdleTimer
                            ref={idleTimerRef}
                            timeout={5000} // ms
                            onIdle={onIdleHandler} />
                    </React.Fragment>
                    : <React.Fragment>
                        <h2>Hello Guest!</h2>
                        <button onClick={logIn}>Login</button>
                    </React.Fragment>
            }
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <h2>You've been idle for a while!</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button onClick={logOut}>Log me out</button>
                    <button onClick={stayLoggedIn}>Keep me In</button>
                </div>
            </Modal>
        </div>
    )
}

export default IdleTimerContainer
