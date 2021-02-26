import Chat from './Chat';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red, blue } from '@material-ui/core/colors'


const customTheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue
    },
})

export const ChatPage = (args) => {
    return (
        <ThemeProvider theme={customTheme}>
            <Chat {...args} />
        </ThemeProvider>
    );
};
ChatPage.args = {
}

const ChatExport = {
    title: 'Example/Chat',
    component: ChatPage 
}

export default ChatExport;
