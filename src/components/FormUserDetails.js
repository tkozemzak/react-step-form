import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    button: {
        margin: 15
    }
}

const FormUserDetails = ({ nextStep, values, handleChange }) => {
    const continueStep = (e) => {
        e.preventDefault();
        nextStep();
    }
    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Enter User Details"/>
                <TextField
                    hintText="Enter your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField
                    hintText="Enter your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField
                    hintText="Enter your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br/>
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={continueStep}
                />
            </>
        </MuiThemeProvider>
    )
}

export default FormUserDetails
