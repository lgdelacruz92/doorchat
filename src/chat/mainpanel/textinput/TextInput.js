import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minHeight: '80px',
        borderTop: '1px solid lightgrey'
    }
})

const TextInput = () => {
    const classes = useStyles();
    return <div className={classes.root}>Hello world</div>;
}

export default TextInput;