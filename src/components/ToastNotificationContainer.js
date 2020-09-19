/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 19 2020 13:20:44 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// custom toast layout
const CustomToast = ({ closeToast }) => {
    return (
        <div>
            Something went wrong ;(
            <input type="text" placeholder="Enter your name..." />
            <button onClick={closeToast}>close</button>
        </div>
    )
}

// custom toast config
const customToastConfig = {
    position: toast.POSITION.BOTTOM_LEFT,
    closeOnClick: false,
    closeButton: false
}

// toast configuration
const toastConfig = {
    position: "bottom-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: 50,
}
// text in toast
const toastText = '🦄 Configured Toast! (tap close to dismiss)'

// More customization at https://fkhadra.github.io/react-toastify/introduction/

function ToastNotificationContainer() {
    // toast function
    const notify = () => {
        toast(toastText, toastConfig)
        toast.success('Successfully Fucked!', { position: toast.POSITION.TOP_RIGHT })
        toast.warning('⚠️ Oxygen Level Critical', { position: toast.POSITION.TOP_LEFT })
        toast.info('💔 I Love Khushu', { position: toast.POSITION.TOP_CENTER, autoClose: 10000 })
        toast.error('Error: missing `}` on line 32', { position: toast.POSITION.BOTTOM_RIGHT })
        toast(<CustomToast />, customToastConfig)
    }

    return (
        <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer />
        </div>
    )
}

export default React.memo(ToastNotificationContainer)
