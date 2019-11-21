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

    render() {
        const { values, handleChange } = this.props;
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