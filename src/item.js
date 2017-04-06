import React, {Component} from 'react';

class Item extends Component {
  
    render() {

        console.log(this.props.item);
        return (
            <div style={{
                position:'absolute'
                
            }}>
                <h1 >{this.props.item}</h1>
            </div>
        );
    }
}

export default Item;