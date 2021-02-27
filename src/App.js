import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red, blue } from '@material-ui/core/colors';
import { useState, createContext } from 'react';
import Login from './login/Login';
import Chat from './chat/Chat';

const customTheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue
    },
})

console.log(process.env.SERVER, 'server host');

function App() {
    const [login, setLogin] = useState({});
    console.log(login, 'login name')
    return (
        <div className="App" style={{height: '100%', width: '100%'}}>
            <ThemeProvider theme={customTheme}>
                {
                    login.length > 0 ? <Chat login={login}></Chat>: <Login setLogin={setLogin}/> 
                }
            </ThemeProvider>
        </div >
    );
}

export default App;
