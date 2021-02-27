import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    loginForm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
        minWidth: '400px'
    },
    usernameTextField: {
        width: "100%",
    },
    joinButton: {
        marginTop: '15px',
        width: "100%",
        textTransform: 'none'
    }
})

function Login({ setLogin }) {
    const classes = useStyles()
    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);
    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const onUserJoin = (e) => {
        if (username === '') {
            setError(true);
        } else {
            const id = Math.floor(Math.random() * 1000) + 10;
            setLogin({ id, name: username });
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.loginForm}>
                <TextField
                    className={classes.usernameTextField}
                    error={error}
                    helperText={error ? "Name cannot be empty" : ""}
                    id="outlined-textarea"
                    inputProps={{ maxLength: 20 }}
                    label="Type your username..."
                    onChange={onUsernameChange}
                    placeholder="Placeholder"
                    variant="outlined"
                    margin="dense"
                />
                <Button
                    className={classes.joinButton}
                    color="primary"
                    onClick={onUserJoin}
                    variant="contained">Join the DoorDash Chat!</Button>
            </div>
        </div>
    )
}

export default Login;