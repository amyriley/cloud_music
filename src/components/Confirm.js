import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import { Checkbox } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {

    continue = (e) => {
        e.preventDefault();
        // process form here - send to API
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
        const { values: { duration, gigabytes, upfrontPayment, firstName, lastName, 
            email, address, cardNumber, cardExpiryDate, cardSecurityCode, price } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Subscription Order" />
                    <List>
                        <ListItem 
                            primaryText="Subscription duration"
                            secondaryText={ duration }
                        />
                        <ListItem 
                            primaryText="Gigabyte amount"
                            secondaryText={ gigabytes }
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
                            secondaryText={ price }
                        />
                    </List>
                    <Typography variant="body2" display="block">
                        Please confirm that you agree to the terms and conditions by selecting the check box:
                    </Typography>
                    <Checkbox></Checkbox> 
                    <br/>
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default Confirm;