import SidePanel from './sidepanel/SidePanel';
import { makeStyles } from '@material-ui/core/styles';
import MainPanel from './mainpanel/MainPanel';
import { useState, useEffect } from 'react';
import { SERVER_URL } from 'App';
import socketIOClient from 'socket.io-client';

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
        const socket = socketIOClient(SERVER_URL.replace('api/', ''));
        socket.on('update', room => {
            setCurrentRoom(room);
        });
        fetch(`${SERVER_URL}rooms`)
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
            <SidePanel login={login} rooms={rooms} onRoomClick={(room) => { setCurrentRoom(room) }}></SidePanel>
            <MainPanel currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} login={login}/>
        </div>
    );
}

export default Chat;