import UserMessage from './usermessage/UserMessage';
import UserSent from './usersent/UserSent';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect,useRef } from 'react';

const useStyles = makeStyles({
    root: {
        minHeight: '80%',
        maxHeight: '80%',
        backgroundColor: '#ECEFF0',
        borderTop: '1px solid #ccc',
        overflowY: 'scroll'
    }
})

const ChatWindow = (args) => {
    const { messages, user } = args
    const classes = useStyles();
    const chatWindowRef = useRef();

    useEffect(() => {
        chatWindowRef.current.scrollTo(0, chatWindowRef.current.scrollHeight);
    });

    return (
        <div className={classes.root} ref={chatWindowRef}>
            { messages.map((m,i) => {
                if (user === m.name) {
                    return <UserSent key={i} message={m}></UserSent>
                }
                return <UserMessage key={i} message={m} />
            })}
        </div>
    );
}

export default ChatWindow;