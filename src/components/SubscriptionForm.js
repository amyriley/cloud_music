import React, { Component } from 'react';
import FormSubscriptionDetails from './FormSubscriptionDetails';
import FormUserDetails from './FormUserDetails';
import CreditCardDetails from './FormCreditCardDetails';

export class SubscriptionForm extends Component {
    state = {
        step: 1,
        duration: '',
        gigabytes: '',
        upfrontPayment: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        cardNumber: '',
        cardExpiryDate: '',
        cardSecurityCode: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const { step } = this.state;
        const { duration, gigabytes, upfrontPayment, firstName, lastName, 
            email, address, cardNumber, cardExpiryDate, cardSecurityCode } = this.state;
        const values = { duration, gigabytes, upfrontPayment, firstName, lastName, 
            email, address, cardNumber, cardExpiryDate, cardSecurityCode }

        switch(step) {
            case 1:
                return (
                    <FormSubscriptionDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <CreditCardDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <h1>Confirm</h1>
                )
            case 5: 
                return (
                    <h1>Success</h1>
                )
        }  
    }
}

export default SubscriptionForm;