import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    }
})

function Login() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">Enter name</Button>
        </div>
    )
}

export default Login;