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
}


export default {
    title: 'Example/Login',
    component: LoginPage
}
