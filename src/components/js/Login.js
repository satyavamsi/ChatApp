import React from 'react'
import '../css/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../helpers/firebase';

import { useStateValue } from '../helpers/StateProvider';
import { actionTypes } from '../helpers/reducer';

import MessageIcon from '@material-ui/icons/Message';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = (e) => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <MessageIcon />
                <h1>Sign in</h1>
                <p>satyavamsi.chat.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
