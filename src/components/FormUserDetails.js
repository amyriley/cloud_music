import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const { values, handleChange } = this.props;
        const isEnabled = values.firstName.length > 0 && values.lastName.length > 0 
        && values.email.length > 0 && values.address.length > 0;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <form>
                        <TextField 
                            hintText="Enter first name"
                            floatingLabelText="First name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter last name"
                            floatingLabelText="Last name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter email adddress"
                            floatingLabelText="Email address"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter street adddress"
                            floatingLabelText="Street address"
                            onChange={handleChange('address')}
                            defaultValue={values.address}
                        />
                    </form>
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        disabled={!isEnabled}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;