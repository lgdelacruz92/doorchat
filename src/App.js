import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red, blue } from '@material-ui/core/colors';
import { useState } from 'react'

const customTheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue
    },
})

function App() {
    const [login, setLogin] = useState({ isLoggedIn: false })

    return (
        <div className="App">
            <ThemeProvider theme={customTheme}>
                {
                    login.isLoggedIn ? <div>I am logged in</div> : <div>I am out</div>
                }
            </ThemeProvider>
        </div >
    );
}

export default App;
