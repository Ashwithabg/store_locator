import React from 'react';
import './Button.css'

class Button extends React.Component {
    render() {
        return (
            <button className="location_button" onClick={this.props.handleClick} value={this.props.location}>
                {this.props.location ? this.props.location : 'All Locations'}
            </button>
        )
    }
}


export default Button;