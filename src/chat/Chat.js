import SidePanel from './sidepanel/SidePanel';
import { makeStyles } from '@material-ui/core/styles';
import MainPanel from './mainpanel/MainPanel';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
    }
});

function Chat(args) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SidePanel {...args}></SidePanel>
            <MainPanel currentRoom="Business"/>
        </div>
    );
}

export default Chat;