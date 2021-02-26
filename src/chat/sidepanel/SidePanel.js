import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
import Rooms from './rooms/Rooms';
import UserInfo from './userinfo/UserInfo';

const useStyles = makeStyles(theme => ({
    drawer: {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    }
}));

function SidePanel(args) {
    const classes = useStyles()
    return (
        <Drawer open={true} PaperProps={{ className: classes.drawer }}>
            <UserInfo />
            <Rooms {...args} />
        </Drawer>
    );
}

export default SidePanel;