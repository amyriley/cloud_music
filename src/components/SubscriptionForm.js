import React, { Component } from 'react';
import FormSubscriptionDetails from './FormSubscriptionDetails';
import FormUserDetails from './FormUserDetails';
import CreditCardDetails from './FormCreditCardDetails';
import Confirm from './Confirm';
import Success from './Success';

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
        cardSecurityCode: '',
        price: 0
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
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <CreditCardDetails
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        previousStep={this.previousStep}
                        values={values}
                    />
                )
            case 5: 
                return (
                    <Success />
                )
        }  
    }
}

export default SubscriptionForm;