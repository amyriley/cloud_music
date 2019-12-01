import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import BackButton from './buttons/BackButton';
import DetailsList from './DetailsList';

export class Confirm extends Component {

    continueAndPostData = (e) => {
        e.preventDefault();
           
        fetch("https://httpbin.org/post", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(this.props.values)
        })
        .then(response => {
        console.log(response.json())
        })
        .catch(error => console.log(error))

        this.props.nextStep();
    }

    render() {
        const { values: { duration, gigabytes, upfrontPayment, firstName, lastName, 
            email, address, cardNumber, cardExpiryDate, cardSecurityCode,
            acceptedTermsAndConditions }, handleCheck, calculatePrice } = this.props;
        
        const isEnabled = acceptedTermsAndConditions;

        const detailsList = [
                        { primaryText: "Subscription duration", secondaryText: duration + " months" }, 
                        { primaryText: "Gigabyte amount", secondaryText: gigabytes + " gigabytes" },
                        { primaryText: "Upfront payment?", secondaryText: upfrontPayment },
                        { primaryText: "First name", secondaryText: firstName },
                        { primaryText: "Last name", secondaryText: lastName },
                        { primaryText: "Email", secondaryText: email },
                        { primaryText: "Street address", secondaryText: address },
                        { primaryText: "Credit card number", secondaryText: cardNumber },
                        { primaryText: "Credit card expiry date", secondaryText: cardExpiryDate },
                        { primaryText: "Credit card security code", secondaryText: cardSecurityCode },
                        { primaryText: "Total price", secondaryText: "$ " + calculatePrice }
                    ];

        return (
            <MuiThemeProvider >
              <React.Fragment>
                <Dialog 
                    open={true}
                    fullWidth={true}
                    maxWidth="sm"
                >
                    <AppBar title="Confirm Subscription Order" />
                    <DetailsList 
                        style={styles.input}
                        list={detailsList}
                    />
                    <form>
                        <label style={styles.terms}>
                            <input
                            checked={acceptedTermsAndConditions}
                            onChange={handleCheck}
                            style={styles.checkbox}
                            type="checkbox" />
                            I accept the terms and conditions of this agreement
                        </label>
                    </form>
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
                            label="Confirm & Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continueAndPostData}
                            disabled={!isEnabled}
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
    terms: {
        margin: 12,
        padding: 20,
    },
    checkbox: {
        margin: 12
    },
}

export default Confirm;