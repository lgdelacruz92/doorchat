import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        boxShadow: '0px 1px 4px grey',
        color: '#555'
    },
    title: {
        textAlign: 'center',
        fontSize: '25px',
        paddingTop: '30px',
        paddingBottom: '15px'
    },
    users: {
        textAlign: 'center',
        paddingBottom: '15px'
    }
});

const RoomInfo = (args) => {
    const { name, people } = args;
    const classes = useStyles();
    return <div className={classes.root}>
        <div className={classes.title}>{name}</div>
        <div className={classes.users}>
            {people.map((p, i) => {
                if (i !== people.length - 1) {
                    return `${p}, `
                }
                return `${p}`
            })}
        </div>

    </div>
}

export default RoomInfo;