import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

export class Confirm extends Component {

    continue = (e) => {
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

    back = (e) => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const { values: { duration, gigabytes, upfrontPayment, firstName, lastName, 
            email, address, cardNumber, cardExpiryDate, cardSecurityCode,
            acceptedTermsAndConditions }, handleCheck, handlePrice } = this.props;

        const isEnabled = acceptedTermsAndConditions;

        let totalPrice = (gigabytes * 2) * parseInt(duration);  

        if (upfrontPayment === "yes") {
            totalPrice = totalPrice - ((totalPrice / 100) * 10);
        }

        // console.log(this.props.values);

        return (
            <MuiThemeProvider >
              <React.Fragment>
                <Dialog 
                    open={true}
                    fullWidth={true}
                    maxWidth="sm"
                >
                    <AppBar title="Confirm Subscription Order" />
                    <List style={styles.input}>
                        <ListItem 
                            primaryText="Subscription duration"
                            secondaryText={ duration + " months"}
                        />
                        <ListItem 
                            primaryText="Gigabyte amount"
                            secondaryText={ gigabytes + " gigabytes"}
                        />
                        <ListItem 
                            primaryText="Upfront payment?"
                            secondaryText={ upfrontPayment }
                        />
                        <ListItem 
                            primaryText="First name"
                            secondaryText={ firstName }
                        />
                        <ListItem 
                            primaryText="Last name"
                            secondaryText={ lastName }
                        />
                        <ListItem 
                            primaryText="Email address"
                            secondaryText={ email }
                        />
                        <ListItem 
                            primaryText="Street address"
                            secondaryText={ address }
                        />
                        <ListItem 
                            primaryText="Credit card number"
                            secondaryText={ cardNumber }
                        />
                        <ListItem 
                            primaryText="Credit card expiry date"
                            secondaryText={ cardExpiryDate }
                        />
                        <ListItem 
                            primaryText="Credit card security code"
                            secondaryText={ cardSecurityCode }
                        />
                        <ListItem 
                            primaryText="Total price"
                            secondaryText={ "$ " + totalPrice }
                        />
                    </List>
                    <form>
                        <label style={styles.terms}>
                            I accept the terms and conditions of this agreement
                            <input
                            checked={acceptedTermsAndConditions}
                            onChange={handleCheck}
                            style={styles.checkbox}
                            type="checkbox" />
                        </label>
                    </form>
                    <br/>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                    >
                        <RaisedButton 
                            label="Confirm & Continue"
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
    }
}

export default Confirm;