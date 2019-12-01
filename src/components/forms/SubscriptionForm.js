import React, { Component } from 'react';
import FormSubscriptionDetails from './FormSubscriptionDetails';
import FormUserDetails from './FormUserDetails';
import CreditCardDetails from './FormCreditCardDetails';
import Confirm from '../Confirm';
import Success from '../Success';

export class SubscriptionForm extends Component {
    state = {
        step: 1,
        duration: 12,
        gigabytes: 5,
        upfrontPayment: "no",
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        cardNumber: '',
        cardExpiryDate: '',
        cardSecurityCode: '',
        acceptedTermsAndConditions: false,
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
            [input]: e.target.value, 
        });
    }

    handleCheck = (e) => {
        this.setState({
            acceptedTermsAndConditions : e.target.checked
        });
    }

    calculatePrice = () => {
        let totalPrice = (this.state.gigabytes * 2) * parseInt(this.state.duration);  
    
        if (this.state.upfrontPayment === "yes") {
            totalPrice = totalPrice - ((totalPrice / 100) * 10);
        }

        return totalPrice;
    }

    render() {
        const { step } = this.state;
        const { duration, gigabytes, upfrontPayment, firstName, lastName, 
            email, address, cardNumber, cardExpiryDate, cardSecurityCode,  
            acceptedTermsAndConditions } = this.state;
        const values = { duration, gigabytes, upfrontPayment, firstName, lastName, 
            email, address, cardNumber, cardExpiryDate, cardSecurityCode,
            acceptedTermsAndConditions }

        const calculatePrice = this.calculatePrice().toFixed(2);
        
        switch(step) {
            case 1:
            default:
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
                        handleChange={this.handleChange}
                        handleCheck={this.handleCheck}
                        values={values}
                        calculatePrice={calculatePrice}
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