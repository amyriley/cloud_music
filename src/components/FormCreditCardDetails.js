import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

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
        const isEnabled = (values.cardNumber.length > 0 && values.cardNumber.length === 16) && 
        (values.cardExpiryDate.length > 0 && values.cardExpiryDate.length === 5)
        && (values.cardSecurityCode.length > 0 && values.cardSecurityCode.length === 3);
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
                    />
                    <br/>
                    <TextField
                        hintText="MM/YY"
                        floatingLabelText="Credit card expiry date"
                        onChange={handleChange('cardExpiryDate')}
                        defaultValue={values.cardExpiryDate}
                        style={styles.input}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter credit card security code"
                        floatingLabelText="Credit card security code"
                        onChange={handleChange('cardSecurityCode')}
                        defaultValue={values.cardSecurityCode}
                        style={styles.input}
                    />
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

export default CreditCardDetails;