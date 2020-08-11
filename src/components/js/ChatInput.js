import React from 'react'
import { useState } from 'react';

import db from '../helpers/firebase';
import { useStateValue } from '../helpers/StateProvider';

import firebase from 'firebase';

import '../css/ChatInput.css'

function ChatInput({ channelName, channelId }) {

    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();
        if (channelId) {
            db.collection('channels').doc(channelId)
                .collection('messages')
                .add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName,
                    userImage: user.photoURL
                })
        }
        setInput("")
    }
    return (
        <div className="chatInput">
            <form action="">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`} />
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput
