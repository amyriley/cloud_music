import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';

export class DetailsList extends Component {

    listItems() {
        return this.props.list.map((l, i) => {
            return (
                <ListItem 
                    key={i}
                    primaryText={l.primaryText}
                    secondaryText={l.secondaryText} 
                />
            )
        })
    }

    render() {
        return (
            <List>
                {this.listItems()}
            </List>
        );
    }
}

export default DetailsList;