import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    listItem: {
        minWidth: '300px',
        paddingLeft: '30px',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark
        }
    }
}))

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const dummyRooms = [
    'Analytics',
    'Business',
    'Design',
    'Engineering',
    'HR',
    'Operations',
    'Special Ops'
]


const Rooms = () => {
    const classes = useStyles();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/rooms')
            .then(resp => {
                return resp.json();
            })
            .then(json => {
                setRooms(json);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <List component="nav" aria-label="secondary mailbox folders">
            { rooms.map(room => (
                <ListItemLink key={room.id} className={classes.listItem} href="#simple-list">
                    <ListItemText primary={room.name} />
                </ListItemLink>
            ))}
        </List>
    );
}

export default Rooms;
