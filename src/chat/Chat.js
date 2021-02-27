import SidePanel from './sidepanel/SidePanel';
import { makeStyles } from '@material-ui/core/styles';
import MainPanel from './mainpanel/MainPanel';

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

    return (
        <div className={classes.root}>
            <SidePanel login={login}></SidePanel>
            <MainPanel currentRoom="Business"/>
        </div>
    );
}

export default Chat;