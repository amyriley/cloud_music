import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export class FormSubscriptionDetails extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
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
                    <AppBar title="Enter Subscription Details" />
                    <form>
                        <InputLabel style={styles.label}>Subscription duration:</InputLabel>
                        <Select
                            style={styles.select}
                            value={values.duration} 
                            onChange={handleChange('duration')}
                            required
                        >
                            <MenuItem value="3">3 months</MenuItem>
                            <MenuItem value="6">6 months</MenuItem>
                            <MenuItem value="12">12 months</MenuItem>
                        </Select>
                        <br/>
                        <InputLabel style={styles.label}>Gigabyte amount:</InputLabel>
                        <Select 
                            style={styles.select}
                            value={values.gigabytes} 
                            onChange={handleChange('gigabytes')}
                            required
                        >
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20">20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                        </Select>
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