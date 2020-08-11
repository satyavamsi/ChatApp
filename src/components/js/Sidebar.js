import React, { useState, useEffect } from 'react'
import '../css/Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SidebarOption from './SidebarOption';

import db from '../helpers/firebase';


import { useStateValue } from '../helpers/StateProvider';

function Sidebar() {

    const [channels, setChannels] = useState([]);

    const [{ user }] = useStateValue();

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        })
        return () => {

        }
    }, [])

    console.log(channels);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    {/* <h2>Satya Vamsi</h2> */}
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
            </div>
            <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />
            <div className="sidebar__options">

                <hr />


                {/* Connect to DB */}
                {/* SidebarOption */}
                {channels.map(channel => (
                    <SidebarOption title={channel.name} id={channel.id} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
