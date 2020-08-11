import React from 'react';
import '../css/Header.css';

import { Avatar, IconButton } from '@material-ui/core';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { actionTypes } from '../helpers/reducer';
import { useStateValue } from '../helpers/StateProvider';

import { useHistory } from 'react-router-dom'

function Header() {

    const history = useHistory();

    const [{ user }, dispatch] = useStateValue();


    const logout = () => {
        dispatch({
            type: actionTypes.REMOVE_USER
        });
        history.push("");
    }
    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
            </div>
            <div className="header__right">
                <IconButton
                    onClick={logout} >
                    <ExitToAppIcon color='#fff' />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
