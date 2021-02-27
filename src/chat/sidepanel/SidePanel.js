import { makeStyles } from '@material-ui/core/styles';
import Rooms from './rooms/Rooms';
import UserInfo from './userinfo/UserInfo';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        height: '100%',
    }
}));

function SidePanel(args) {
    const classes = useStyles();
    const { login, rooms } = args;
    return (
        <div className={classes.root}>
            <UserInfo login={login} rooms={rooms}/>
            <Rooms {...args} />
        </div>
    );
}

export default SidePanel;
