import Login from './Login';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red, blue } from '@material-ui/core/colors'


const customTheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue
    },
})

export const LoginPage = (args) => {
    return (
        <ThemeProvider theme={customTheme}>
            <Login {...args} />
        </ThemeProvider>
    );
};
LoginPage.args = {
    setLogin: (username) => {console.log('username added')}
}

const LoginExport = {
    title: 'Example/Login',
    component: LoginPage
}

export default LoginExport;
