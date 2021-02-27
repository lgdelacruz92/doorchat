import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    message: {
        maxWidth: '400px',
        margin: '20px'
    },
    textContainer: {
        borderRadius: '20px',
        display: 'inline-block',
        backgroundColor: '#ff0033',
        color: 'white'
    },
    innerText: {
        padding: '20px'
    },
    username: {
        marginTop: '10px'
    }
}));
const UserSent = (args) => {
    const { name, message } = args.message;
    const classes = useStyles();
    return <div className={classes.root}>
        <div className={classes.message}>
            <Paper classes={{ rounded: classes.textContainer }}>
                <Typography className={classes.innerText}>{message}</Typography>
            </Paper>
            <Typography className={classes.username}>{name}</Typography>
        </div>
    </div>
}

export default UserSent;