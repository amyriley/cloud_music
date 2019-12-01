import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export class FormTextFieldInputs extends Component {

    listInputs() {
        return this.props.list.map((l, i) => {
            return (
                <div>
                    <TextField
                        key={l.name}
                        hintText={l.hintText}
                        floatingLabelText={l.floatingLabelText}
                        onChange={this.props.handleChange(l.name)}
                        style={styles.input}
                        defaultValue={l.defaultValue}
                        required
                    />
                    <div style={styles.errorMessage}>{l.error && <span>{l.error}</span>}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <form>
                {this.listInputs()}
            </form>
          );

    }
}

const styles = {
    input: {
        margin: 12,
        width: 550
    },
    errorMessage: {
        marginLeft: 12,
        widthLeft: 550,
        color: "red",
        fontSize: 12
    }
}

export default FormTextFieldInputs;