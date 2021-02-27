import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

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
    const [time, setTime] = useState(0);
    const { login } = args;

    const getTime = () => {
        if (time < 60000) {
            return 'Online for less than 1 minute.';
        } else {

            return `Online for ${Math.floor(time/60000)} minutes.`;
        }
    }

    useEffect(() => {
        const startTime = Date.now();
        const refreshInt = setInterval(() =>{ 
            setTime(Date.now() - startTime);
        }, 5000);

        // Clean up interval
        return () => {
            clearInterval(refreshInt);
        }
    }, []);

    
    return <div className={classes.root}>
        <h2 className={classes.name}>{login.name}</h2>
        <span className={classes.online}>{getTime()}</span>
    </div>
}

export default UserInfo;