import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
    button: {
        margin: 15
    }
}

const FormPersonalDetails = ({ nextStep, prevStep, values, handleChange }) => {
    const continueStep = (e) => {
        e.preventDefault();
        nextStep();
    }
    const backStep = (e) => {
        e.preventDefault();
        prevStep();
    }
    return (
        <MuiThemeProvider>
            <>
                <AppBar title="Enter Personal Details"/>
                <TextField
                    hintText="Enter your Occupation"
                    floatingLabelText="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                />
                <br/>
                <TextField
                    hintText="Enter your City"
                    floatingLabelText="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                />
                <br/>
                <TextField
                    hintText="Enter your Bio"
                    floatingLabelText="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                />
                <br/>
                <RaisedButton
                    label="Back"
                    secondary={true}
                    style={styles.button}
                    onClick={backStep}
                />
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

export default FormPersonalDetails
