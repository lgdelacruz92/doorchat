import RoomInfo from './roominfo/RoomInfo';
import { makeStyles } from '@material-ui/core/styles';
import ChatWindow from './chatwindow/ChatWindow';
import TextInput from './textinput/TextInput';
import { useState,useEffect } from 'react';
import { SERVER_URL } from 'App';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        overflowY: 'auto'
    }
})

const MainPanel = (args) => {
    const { currentRoom, setCurrentRoom, login } = args;
    const classes = useStyles();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (currentRoom.id !== undefined) {
            fetch(`${SERVER_URL}rooms/${currentRoom.id}/messages`)
                .then(resp => {
                    return resp.json();
                })
                .then(json => {
                    setMessages(json);
                })
                .catch(err => {
                    console.error('Error fetching messages');
                });
        }

    }, [currentRoom]);
    return <div id="main-panel" className={classes.root}>
        <RoomInfo currentRoom={currentRoom} user={login.name}></RoomInfo>
        <ChatWindow messages={messages} user={login.name}></ChatWindow>
        <TextInput currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} user={login}></TextInput>
    </div>
}

export default MainPanel;