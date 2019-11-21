import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormSubscriptionDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Subscription Details" />
                    <TextField 
                        hintText="Enter subscription duration"
                        floatingLabelText="Subscription duration"
                        onChange={handleChange('duration')}
                        defaultValue={values.duration}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter gigabyte amount"
                        floatingLabelText="Gigabyte amount"
                        onChange={handleChange('gigabytes')}
                        defaultValue={values.gigabytes}
                    />
                    <br/>
                    <TextField 
                        hintText="Pay upfront?"
                        floatingLabelText="Upfront payment"
                        onChange={handleChange('upfrontPayment')}
                        defaultValue={values.upfrontPayment}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default FormSubscriptionDetails;