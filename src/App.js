import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red, blue } from '@material-ui/core/colors';
import { useState } from 'react';
import Login from './login/Login';
import Chat from './chat/Chat';

const customTheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue
    },
})

export const SERVER_URL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVELOPMENT_SERVER : process.env.REACT_APP_PRODUCTION_SERVER;

function App() {
    const [login, setLogin] = useState(null);
    return (
        <div className="App" style={{height: '100%', width: '100%'}}>
            <ThemeProvider theme={customTheme}>
                {
                    login !== null ? <Chat login={login}></Chat>: <Login setLogin={setLogin}/> 
                }
            </ThemeProvider>
        </div >
    );
}

export default App;
