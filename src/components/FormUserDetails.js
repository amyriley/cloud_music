import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

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
                        />
                        <br/>
                        <TextField 
                            hintText="Enter last name"
                            floatingLabelText="Last name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            style={styles.input}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter email adddress"
                            floatingLabelText="Email address"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            style={styles.input}
                        />
                        <br/>
                        <TextField 
                            hintText="Enter street adddress"
                            floatingLabelText="Street address"
                            onChange={handleChange('address')}
                            defaultValue={values.address}
                            style={styles.input}
                        />
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
                            disabled={!isEnabled}
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
    }
}

export default FormUserDetails;