import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red, blue } from '@material-ui/core/colors';
import { useState } from 'react';
import Login from './login/Login';

const customTheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue
    },
})

function App() {
    const [login, setLogin] = useState({ isLoggedIn: false })

    return (
        <div className="App" style={{height: '100%', width: '100%'}}>
            <ThemeProvider theme={customTheme}>
                {
                    login.isLoggedIn ? <div>I am logged in</div> : <Login/> 
                }
            </ThemeProvider>
        </div >
    );
}

export default App;
