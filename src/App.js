import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red, blue } from '@material-ui/core/colors';

const customTheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue
    },
})

function App() {

    
    return (
        <ThemeProvider theme={customTheme}>
            <div className="App">
            </div>
        </ThemeProvider>
  );
}

export default App;
