import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

export class CreditCardDetails extends Component {
    state = {
        errors: {}
    }

    continue = (e) => {
        e.preventDefault();
        const errors = this.validate(this.props.values.cardNumber, this.props.values.cardExpiryDate, 
                        this.props.values.cardSecurityCode);
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
        return (
            <MuiThemeProvider >
              <React.Fragment>
                <Dialog 
                    open={true}
                    fullWidth={true}
                    maxWidth="sm"
                >
                    <AppBar title="Enter Credit Card Details" />
                    <TextField 
                        hintText="Enter credit card number"
                        floatingLabelText="Credit card number"
                        onChange={handleChange('cardNumber')}
                        defaultValue={values.cardNumber}
                        style={styles.input}
                        required
                    />
                    <div>{this.state.errors['cardNumber'] && <span>{this.state.errors['cardNumber']}</span>}</div>
                    <br/>
                    <TextField
                        hintText="MM/YY"
                        floatingLabelText="Credit card expiry date"
                        onChange={handleChange('cardExpiryDate')}
                        defaultValue={values.cardExpiryDate}
                        style={styles.input}
                        required
                    />
                    <div>{this.state.errors['cardExpiryDate'] && <span>{this.state.errors['cardExpiryDate']}</span>}</div>
                    <br/>
                    <TextField 
                        hintText="Enter credit card security code"
                        floatingLabelText="Credit card security code"
                        onChange={handleChange('cardSecurityCode')}
                        defaultValue={values.cardSecurityCode}
                        style={styles.input}
                        required
                    />
                    <div>{this.state.errors['cardSecurityCode'] && <span>{this.state.errors['cardSecurityCode']}</span>}</div>
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
    }
}

export default CreditCardDetails;