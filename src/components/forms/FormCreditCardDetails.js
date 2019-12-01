import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import BackButton from '../buttons/BackButton';
import FormTextFieldInputs from '../inputs/FormTextFieldInputs';

export class CreditCardDetails extends Component {
    state = {
        errors: {}
    }

    validateAndContinue = (e) => {
        e.preventDefault();
        const errors = this.validate(this.props.values.cardNumber, this.props.values.cardExpiryDate, 
                        this.props.values.cardSecurityCode);
        this.setState({ errors });
        if (Object.entries(errors).length === 0) {
            this.props.nextStep();
        }
    }

    validate = (cardNumber, cardExpiryDate, cardSecurityCode) => {
        let errors = {};
        let numbers = /^[0-9]+$/;
      
        if (!cardNumber) {
            errors['cardNumber'] = "Card number is required";
        }

        if (!cardNumber.match(numbers)) {
            errors['cardNumber'] = "Card number is invalid";
        }

        if (cardNumber.length < 16) {
            errors['cardNumber'] = "Card number must be 16 digits";
        }

        if (!cardExpiryDate) {
            errors['cardExpiryDate'] = "Card expiry date is required";
        }

        if (cardExpiryDate.length < 5) {
            errors['cardExpiryDate'] = "Invalid card expiry date";
        }

        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiryDate)) {
            errors['cardExpiryDate'] = "Expiry date format must be MM/YY";
          }

        if (!cardSecurityCode) {
            errors['cardSecurityCode'] = "Card security code is required";
        }

        if (cardSecurityCode.length < 3) {
            errors['cardSecurityCode'] = "Card security code must be 3 digits";
        }

        if (!cardSecurityCode.match(numbers)) {
            errors['cardSecurityCode'] = "Card security code is invalid";
        }

        return errors;
      }

    render() {
        const { values, handleChange } = this.props;
        const creditCardDetails = [
            { hintText: "Enter credit card number", floatingLabelText: "Credit card number", defaultValue: values.cardNumber, name: 'cardNumber', error: this.state.errors['cardNumber'] },
            { hintText: "Credit card expiry date", floatingLabelText: "Credit card expiry date", defaultValue: values.cardExpiryDate, name: 'cardExpiryDate', error: this.state.errors['cardExpiryDate'] },
            { hintText: "Enter credit card security code", floatingLabelText: "Credit card security code", defaultValue: values.cardSecurityCode, name: 'cardSecurityCode', error: this.state.errors['cardSecurityCode'] }
        ]
        return (
            <MuiThemeProvider >
              <React.Fragment>
                <Dialog 
                    open={true}
                    fullWidth={true}
                    maxWidth="sm"
                >
                    <AppBar title="Enter Credit Card Details" />
                    <FormTextFieldInputs 
                        list={creditCardDetails}
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

export default CreditCardDetails;