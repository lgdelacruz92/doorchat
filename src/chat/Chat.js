import SidePanel from './sidepanel/SidePanel';
import { makeStyles } from '@material-ui/core/styles';
import MainPanel from './mainpanel/MainPanel';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
    }
});

function Chat(args) {
    const classes = useStyles();
    const { login } = args;
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState({});
    useEffect(() => {
        fetch('http://localhost:8080/api/rooms')
            .then(resp => {
                return resp.json();
            })
            .then(json => {
                setRooms(json);
                setCurrentRoom(json[0]);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    return (
        <div className={classes.root}>
            <SidePanel login={login} rooms={rooms} onRoomClick={(room) => { console.log(room) }}></SidePanel>
            <MainPanel currentRoom={currentRoom}/>
        </div>
    );
}

export default Chat;