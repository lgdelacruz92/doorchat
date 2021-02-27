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
    return <ListItem button {...props} />;
}

const Rooms = (args) => {
    const classes = useStyles();
    const { onRoomClick, rooms } = args;
    return (
        <List component="nav" aria-label="secondary mailbox folders">
            { rooms.map(room => (
                <ListItemLink key={room.id} className={classes.listItem} onClick={() => {
                    onRoomClick(room)}}>
                    <ListItemText primary={room.name} />
                </ListItemLink>
            ))}
        </List>
    );
}

export default Rooms;
