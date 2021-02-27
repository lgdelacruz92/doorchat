import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return {
        root: {
            marginBottom: '40px'
        },
        name: {
            fontFamily: theme.typography.h3.fontFamily,
            margin: 0,
            padding: '15px',
            paddingLeft: '30px',
            paddingBottom: '5px',
            paddingTop: '30px'
        },
        online: {
            margin:0,
            fontFamily: theme.typography.h3.fontFamily,
            fontSize: '12px',
            paddingLeft: '30px'
        }
    }
})

const UserInfo = (args) => {
    const classes = useStyles();
    return <div className={classes.root}>
        <h2 className={classes.name}>Ryan Gonzalez</h2>
        <span className={classes.online}>Online for 12 minutes</span>
    </div>
}

export default UserInfo;