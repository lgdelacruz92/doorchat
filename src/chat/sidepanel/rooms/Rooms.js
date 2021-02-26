import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    listItem: {
        minWidth: '200px'
    }
}))

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Rooms = () => {
    const classes = useStyles();
    return (
        <List component="nav" aria-label="secondary mailbox folders">
            <ListItemLink className={classes.listItem} href="#simple-list">
                <ListItemText primary="Spam" />
            </ListItemLink>
        </List>
    );
}

export default Rooms;
