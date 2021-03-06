import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import db from '../helpers/firebase';

import '../css/Chat.css'

import Message from './Message'
import ChatInput from './ChatInput'

function Chat() {
    let messagesEnd = null;
    const { channelId } = useParams();

    const [channelDetails, setChannelDetails] = useState(null);
    const [channelMessages, setchannelMessages] = useState([]);

    useEffect(() => {
        db.collection('channels').doc(channelId)
            .onSnapshot(snapshot => {
                setChannelDetails(snapshot.data());
            });
        db.collection('channels').doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) =>
                setchannelMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            );
    }, [channelId])

    useEffect(() => {
        scrollToBottom();
    }, [channelMessages])

    const scrollToBottom = () => {
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }


    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {channelDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p><InfoOutlinedIcon /> Details </p>
                </div>
            </div>
            <div className="chat__messages">
                {channelMessages.map(message => (
                    <Message
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                        userImage={message.userImage} />
                ))}
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => {
                        console.log("reference", el);
                        messagesEnd = el;
                    }}>
                </div>
            </div>

            <ChatInput channelName={channelDetails?.name} channelId={channelId} />
        </div>
    )
}

export default Chat
