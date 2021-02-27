import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useRef } from 'react';
import { SERVER_URL } from 'App';

const useStyles = makeStyles({
    root: {
        minHeight: '80px',
        borderTop: '1px solid lightgrey',
        padding: '20px',
        display: 'flex',
        alignItems: 'center'
    },
    textField: {
        width: '90%',
        display: 'inline-block',
        overflow: 'hidden',
        minHeight: '40px',
        lineHeight: '20px',
        padding: '10px',
        border: '1px solid lightgrey'
    },
    send: {
        width: '100px',
        display: 'inline-block',
        marginLeft: '10px',
        color: '#4ec0ee',
        fontWeight: 'bold'
    }
})

const TextInput = (args) => {
    const classes = useStyles();
    const inputRef = useRef();
    const { currentRoom, user } = args;

    const onSend = () => {
        const message = inputRef.current.innerText;
        inputRef.current.innerText = '';
        fetch(`${SERVER_URL}rooms/${currentRoom.id}/messages`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ roomId: currentRoom.id, name: user.name, message})
        })
        .then(resp => {
            console.log('success')
        })

        .catch(err => {
            console.log(err, 'TextInput')
        });
    }

    return <div className={classes.root}>
        <span
            ref={inputRef}
            className={classes.textField}
            role="textbox"
            contentEditable={true}>
        </span>
        <Button onClick={onSend} className={classes.send}>Send</Button>
    </div>;
}

export default TextInput;