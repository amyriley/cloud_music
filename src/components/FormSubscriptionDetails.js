import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';

export class FormSubscriptionDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Subscription Details" />
                    <form>
                        <label>
                            Subscription duration:
                            <select value={values.duration} onChange={handleChange('duration')}>
                                <option value="3">3 months</option>
                                <option value="6">6 months</option>
                                <option value="12">12 months</option>
                            </select>
                        </label>
                        <label>
                            Gigabyte amount:
                            <select value={values.gigabytes} onChange={handleChange('gigabytes')}>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="50">50</option>
                            </select>
                        </label>
                        <label>
                            Pay Upfront?
                            <label>
                                Yes
                                <input
                                    value="yes"
                                    checked={values.upfrontPayment === "yes"}
                                    onChange={handleChange('upfrontPayment')}
                                    type="radio" />
                            </label>
                            <label>
                                No
                                <input
                                    value="no"
                                    checked={values.upfrontPayment === "no"}
                                    onChange={handleChange('upfrontPayment')}
                                    type="radio" />
                            </label>
                        </label>
                    </form>
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

export default FormSubscriptionDetails;