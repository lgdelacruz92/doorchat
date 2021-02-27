import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

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

const TextInput = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <span
            className={classes.textField}
            role="textbox"
            contentEditable={true}>
        </span>
        <Button className={classes.send}>Send</Button>
    </div>;
}

export default TextInput;