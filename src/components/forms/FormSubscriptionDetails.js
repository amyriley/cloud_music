import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import ContinueButton from '../buttons/ContinueButton';
import Dropdown from '../inputs/Dropdown';

export class FormSubscriptionDetails extends Component {
    render() {
        const { values, handleChange } = this.props;

        const menuItemsDuration = [ 
            { value: "3", displayText: "3 months" },
            { value: "6", displayText: "6 months" },
            { value: "12", displayText: "12 months" }
        ];

        const menuItemsGigabytes =  [
            { value: "3", displayText: 3},
            { value: "5", displayText: 5},
            { value: "10", displayText: 10},
            { value: "20", displayText: 20},
            { value: "30", displayText: 30},
            { value: "50", displayText: 50}
        ];
        return (
            <MuiThemeProvider >
              <React.Fragment>
                <Dialog 
                    open={true}
                    fullWidth={true}
                    maxWidth="sm"
                >
                    <AppBar title="Enter Subscription Details" />
                    <form>
                        <InputLabel style={styles.label}>Subscription duration:</InputLabel>
                        <Dropdown 
                            menuItems={menuItemsDuration}
                            value={values.duration}
                            onChange={handleChange('duration')}
                        />
                        <br/>
                        <InputLabel style={styles.label}>Gigabyte amount:</InputLabel>
                        <Dropdown 
                            menuItems={menuItemsGigabytes}
                            value={values.gigabytes}
                            onChange={handleChange('gigabytes')}
                        />
                        <br/>
                        <FormControl component="fieldset">
                            <FormLabel style={styles.label}>Pay upfront?</FormLabel>
                            <RadioGroup style={styles.select} required>
                                <FormControlLabel 
                                    value="yes" 
                                    control={<Radio />} 
                                    label="Yes" 
                                    checked={values.upfrontPayment === "yes"}
                                    onChange={handleChange('upfrontPayment')}
                                />
                                <FormControlLabel 
                                    value="no" 
                                    control={<Radio />} 
                                    label="No" 
                                    checked={values.upfrontPayment === "no"}
                                    onChange={handleChange('upfrontPayment')}
                                />
                            </RadioGroup>
                        </FormControl>
                        <br/>
                    </form>
                    <br/>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                    >
                        <ContinueButton 
                            nextStep={this.props.nextStep}
                        />
                    </Grid>
                </Dialog>
            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}

const styles = {
    input: {
        margin: 12,
        width: 550
    },
    label: {
        margin: 12,
        marginTop: 12
    },
    select: {
        margin: 12,
        marginBottom: 20
    }
}

export default FormSubscriptionDetails;