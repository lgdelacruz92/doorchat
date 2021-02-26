import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
        minWidth: '200px',
        maxWidth: '300px'
    },
    usernameTextField: {
        width:"100%",
    },
    joinButton: {
        marginTop: '15px',
        width:"100%",
        textTransform: 'none'
    }
})

function Login() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <TextField
                className={classes.usernameTextField}
                id="outlined-textarea"
                label="Type your username..."
                multiline
                placeholder="Placeholder"
                variant="outlined"
                margin="dense"
            />
            <Button
                className={classes.joinButton}
                color="primary"
                variant="contained">Join the DoorDash Chat!</Button>
        </div>
    )
}

export default Login;