import RoomInfo from './roominfo/RoomInfo';

const MainPanel = (args) => {
    const { currentRoom } = args;
    return <RoomInfo name={currentRoom} people={['Ryan Gonzalez', 'Cathleen', 'Grover', 'Abdul', 'Dude']}></RoomInfo>
}

export default MainPanel;