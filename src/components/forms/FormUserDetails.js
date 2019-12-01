import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import BackButton from '../buttons/BackButton';
import FormTextFieldInputs from '../inputs/FormTextFieldInputs';

export class FormUserDetails extends Component {
    state = {
        errors: {}
    }

    validateAndContinue = (e) => {
        e.preventDefault();
        const errors = this.validate(this.props.values.firstName, this.props.values.lastName, 
                        this.props.values.email, this.props.values.address);
        this.setState({ errors });
        if (Object.entries(errors).length === 0) {
            this.props.nextStep();
        }
    }

    validate = (firstName, lastName, email, address) => {
        let errors = {};
        let regName = /^[a-zA-Z]/;
      
        if (!firstName) {
            errors['firstName'] = "First name is required";
        }

        if (!regName.test(firstName)) {
            errors['firstName'] = "Invalid first name format";

        }

        if (!lastName) {
            errors['lastName'] = "Last name is required";
        }

        if (!regName.test(lastName)) {
            errors['lastName'] = "Invalid last name format";

        }

        if (!email) {
            errors['email'] = "Email is required";
        }

        const expression = /\S+@\S+/;

        if (!expression.test(String(email).toLowerCase())) {
            errors['email'] = "Email is invalid";
        }

        if (!address) {
            errors['address'] = "Address is required";
        }
      
        return errors;
      }

    render() {
        const { values, handleChange } = this.props;
        const userDetails = [
            { hintText: "Enter first name", floatingLabelText: "First name", defaultValue: values.firstName, name: 'firstName', error: this.state.errors['firstName'] },
            { hintText: "Enter last name", floatingLabelText: "Last name", defaultValue: values.lastName, name: 'lastName', error: this.state.errors['lastName'] },
            { hintText: "Enter email address", floatingLabelText: "Email address", defaultValue: values.email, name: 'email', error: this.state.errors['email'] },
            { hintText: "Enter street address", floatingLabelText: "Street address", defaultValue: values.address, name: 'address', error: this.state.errors['address'] },
        ]
        return (
            <MuiThemeProvider >
              <React.Fragment>
                <Dialog 
                    open={true}
                    fullWidth={true}
                    maxWidth="sm"
                >
                    <AppBar title="Enter User Details" />
                    <FormTextFieldInputs 
                        list={userDetails}
                        handleChange={handleChange}
                    />
                    <br/>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                    >
                        <BackButton 
                            previousStep={this.props.previousStep}
                        />
                        <RaisedButton 
                            label="Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.validateAndContinue}
                        />
                    </Grid>
                </Dialog>
            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 12,
        width: 200,
    },
}

export default FormUserDetails;