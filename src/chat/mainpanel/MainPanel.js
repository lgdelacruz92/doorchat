import RoomInfo from './roominfo/RoomInfo';
import { makeStyles } from '@material-ui/core/styles';
import ChatWindow from './chatwindow/ChatWindow';
import TextInput from './textinput/TextInput';
import { useState,useEffect } from 'react';
import { SERVER_URL } from 'App';

const dummyMessages = [
    { 
        id: 0,
        user: 'Cathleen',
        message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique'
    },
    {
        id: 1,
        user: 'Grover',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 2,
        user: 'Abdul',
        message: 'If you use this site regularly and would like to help k'
    },
    {
        id: 3,
        user: 'Ryan',
        message: 'Ryan message'
    }
]

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        overflowY: 'auto'
    }
})

const MainPanel = (args) => {
    const { currentRoom, login } = args;
    const classes = useStyles();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log('current room', currentRoom);
        if (currentRoom.id !== undefined) {
            fetch(`${SERVER_URL}rooms/${currentRoom.id}/messages`)
                .then(resp => {
                    return resp.json();
                })
                .then(json => {
                    console.log(json);
                    setMessages(json);
                })
                .catch(err => {
                    console.error('Error fetching messages');
                })
        }
    }, [currentRoom]);
    return <div id="main-panel" className={classes.root}>
        <RoomInfo currentRoom={currentRoom}></RoomInfo>
        <ChatWindow messages={messages} userId={login.id}></ChatWindow>
        <TextInput></TextInput>
    </div>
}

export default MainPanel;