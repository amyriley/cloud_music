import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class BackButton extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.previousStep();
    }

    render() {
      return (
        <RaisedButton 
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
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

export default BackButton;