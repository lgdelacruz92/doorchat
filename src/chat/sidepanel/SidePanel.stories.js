import SidePanel from './SidePanel';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red, blue } from '@material-ui/core/colors'


const customTheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue
    },
})

export const SidePanelPage = (args) => {
    return (
        <ThemeProvider theme={customTheme}>
            <SidePanel {...args}/>
        </ThemeProvider>
    );
};
SidePanelPage.args = {
}

const SidePanelExport = {
    title: 'Example/Chat',
    component: SidePanelPage 
}

export default SidePanelExport;
