import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export class Dropdown extends Component {

    listMenuItems() {
        return this.props.menuItems.map((m, i) => {
            return (
                <MenuItem
                    key={i}
                    value={m.value}
                >
                {m.displayText}
                </MenuItem>
            )
        })
    }

    render() {
        return (
            <Select
                value={this.props.value}
                onChange={this.props.onChange}
                style={styles.select}
            >
            {this.listMenuItems()}
            </Select>
          );

    }
}

const styles = {
    select: {
        margin: 12,
        marginBottom: 20
    }
}

export default Dropdown;