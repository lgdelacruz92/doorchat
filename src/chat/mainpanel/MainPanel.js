import RoomInfo from './roominfo/RoomInfo';
import { makeStyles } from '@material-ui/core/styles';
import ChatWindow from './chatwindow/ChatWindow';
import { useState } from 'react';

const dummyMessages = [
    { 
        user: 'Cathleen',
        message: 'Cathleen message'
    },
    {
        user: 'Grover',
        message: 'Grover message'
    },
    {
        user: 'Abdul',
        message: 'Abdul message'
    },
    {
        user: 'Ryan',
        message: 'Ryan message'
    }
]

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
    }
})

const MainPanel = (args) => {
    const { currentRoom } = args;
    const classes = useStyles();
    const [messages, setMessages] = useState(dummyMessages);
    return <div id="main-panel" className={classes.root}>
        <RoomInfo name={currentRoom} people={['Ryan Gonzalez', 'Cathleen', 'Grover', 'Abdul', 'Dude']}></RoomInfo>
        <ChatWindow messages={messages}></ChatWindow>
    </div>
}

export default MainPanel;