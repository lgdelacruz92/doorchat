import RoomInfo from './roominfo/RoomInfo';
import { makeStyles } from '@material-ui/core/styles';
import ChatWindow from './chatwindow/ChatWindow';
import { useState } from 'react';

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
    }
})

const MainPanel = (args) => {
    const { currentRoom } = args;
    const classes = useStyles();
    const [messages, setMessages] = useState(dummyMessages);
    return <div id="main-panel" className={classes.root}>
        <RoomInfo name={currentRoom} people={['Ryan Gonzalez', 'Cathleen', 'Grover', 'Abdul', 'Dude']}></RoomInfo>
        <ChatWindow messages={messages} userId={3}></ChatWindow>
    </div>
}

export default MainPanel;