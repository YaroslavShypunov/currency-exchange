import { createMuiTheme } from '@material-ui/core/styles';

export const createTheme = () => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "rgb(235, 0, 141)",
                contrastText: '#fff',
            },
            secondary: {
                main: 'rgb(256,256,256)',
                contrastText: 'rgb(0, 117, 235)'
            }
        },
        typography: {
            h1: {
                fontWeight: 400,
                '@media (max-width:1000px)': {
                    fontSize: 40,
                },
                '@media (max-width:400px)': {
                    fontSize: 25,
                }
            }
        }
    })
    return {
        ...theme,
    }
}

const mainTheme = createTheme();
export default mainTheme