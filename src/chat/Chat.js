import SidePanel from './sidepanel/SidePanel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
});

function Chat(args) {
    return (
        <SidePanel {...args}></SidePanel>
    );
}

export default Chat;