import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class NavigationButton extends Component {

    navigateForm = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
      return (
        <RaisedButton 
            label={this.props.direction}
            primary={false}
            style={styles.button}
            onClick={this.navigateForm}
        />
      );
    }
}

const styles = {
    button: {
        margin: 12,
        width: 200,
    },
}

export default NavigationButton;