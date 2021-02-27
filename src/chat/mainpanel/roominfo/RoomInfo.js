import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { SERVER_URL } from 'App';

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
    const { currentRoom } = args;
    const classes = useStyles();
    const [people, setPeople] = useState([]);

    useEffect(() => {
        if (currentRoom.id !== undefined) {
            fetch(`${SERVER_URL}rooms/${currentRoom.id}`)
            .then(resp => {
                return resp.json();
            })
            .then(json => {
                setPeople(json.users);
            })
            .catch(err => {
                console.log(err)
            });
        }
    }, [currentRoom]);
    return <div className={classes.root}>
        <div className={classes.title}>{currentRoom.name}</div>
        <div className={classes.users}>
            { 
                people.map((p,i) => {
                    if (i === people.length-1) {
                        return `${p}`;
                    }
                    return `${p}, `;
                })
            }
        </div>

    </div>
}

export default RoomInfo;