import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

export class FormUserDetails extends Component {
    state = {
        errors: {}
    }

    continue = (e) => {
        e.preventDefault();
        const errors = this.validate(this.props.values.firstName, this.props.values.lastName, 
                        this.props.values.email, this.props.values.address);
        this.setState({ errors });
        console.log(errors)
        if (Object.entries(errors).length === 0) {
            this.props.nextStep();
        }
    }

    back = (e) => {
        e.preventDefault();
        this.props.previousStep();
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
        return (
            <MuiThemeProvider >
              <React.Fragment>
                <Dialog 
                    open={true}
                    fullWidth={true}
                    maxWidth="sm"
                >
                    <AppBar title="Enter User Details" />
                    <form>
                        <TextField 
                            hintText="Enter first name"
                            floatingLabelText="First name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            style={styles.input}
                            required
                        />
                        <div>{this.state.errors['firstName'] && <span>{this.state.errors['firstName']}</span>}</div>
                        <br/>
                        <TextField 
                            hintText="Enter last name"
                            floatingLabelText="Last name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            style={styles.input}
                            required
                        />
                        <div>{this.state.errors['lastName'] && <span>{this.state.errors['lastName']}</span>}</div>
                        <br/>
                        <TextField 
                            hintText="Enter email adddress"
                            floatingLabelText="Email address"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            style={styles.input}
                            required
                        />
                        <div>{this.state.errors['email'] && <span>{this.state.errors['email']}</span>}</div>
                        <br/>
                        <TextField 
                            hintText="Enter street adddress"
                            floatingLabelText="Street address"
                            onChange={handleChange('address')}
                            defaultValue={values.address}
                            style={styles.input}
                            required
                        />
                        <div>{this.state.errors['address'] && <span>{this.state.errors['address']}</span>}</div>
                    </form>
                    <br/>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                    >
                        <RaisedButton 
                            label="Back"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                        <RaisedButton 
                            label="Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
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
    input: {
        margin: 12,
        width: 550
    },
    asterix: {
        color: "red",
    }
}

export default FormUserDetails;