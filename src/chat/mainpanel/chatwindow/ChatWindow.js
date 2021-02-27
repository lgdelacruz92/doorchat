import UserMessage from './usermessage/UserMessage';
import UserSent from './usersent/UserSent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '80%',
        backgroundColor: '#ECEFF0',
        borderTop: '1px solid #ccc',
        overflowY: 'scroll'
    }
})

const ChatWindow = (args) => {
    const { messages, userId } = args
    const classes = useStyles();
    return (
        <div className={classes.root}>
            { messages.map((m,i) => {
                if (userId === m.id) {
                    return <UserSent key={i} message={m}></UserSent>
                }
                return <UserMessage key={i} message={m} />
            })}
        </div>
    );
}

export default ChatWindow;