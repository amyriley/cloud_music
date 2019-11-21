import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class CreditCardDetails extends Component {

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
        const isEnabled = values.cardNumber.length > 0 && values.cardExpiryDate > 0 
        && values.cardSecurityCode.length > 0;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Credit Card Details" />
                    <TextField 
                        hintText="Enter credit card number"
                        floatingLabelText="Credit card number"
                        onChange={handleChange('cardNumber')}
                        defaultValue={values.cardNumber}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter credit card expiry date"
                        floatingLabelText="Credit card expiry date"
                        onChange={handleChange('cardExpiryDate')}
                        defaultValue={values.cardExpiryDate}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter credit card security code"
                        floatingLabelText="Credit card security code"
                        onChange={handleChange('cardSecurityCode')}
                        defaultValue={values.cardSecurityCode}
                    />
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

export default CreditCardDetails;