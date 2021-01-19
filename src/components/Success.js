import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Success = ({ values }) => {
    
    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Success"/>
                <h1>Thank You For Your Submission</h1>
            </>
        </MuiThemeProvider>
    )
}

export default Success
