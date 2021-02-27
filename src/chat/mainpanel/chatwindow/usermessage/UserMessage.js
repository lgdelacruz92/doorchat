import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    message: {
        maxWidth: '400px',
        margin: '20px'
    },
    textContainer: {
        borderRadius: '20px',
        display: 'inline-block'
    },
    innerText: {
        padding: '20px'
    },
    username: {
        marginTop: '10px'
    }
});

const UserMessage = (args) => {
    const { name, message } = args.message;
    const classes = useStyles();
    return <div>
        <div className={classes.message}>
            <Paper classes={{rounded: classes.textContainer}}>
                <Typography className={classes.innerText}>{message}</Typography>
            </Paper>
            <Typography className={classes.username}>{name}</Typography>
        </div>
    </div>
}

export default UserMessage;