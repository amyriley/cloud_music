import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class ContinueButton extends Component {

    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
      return (
        <RaisedButton 
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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

export default ContinueButton;