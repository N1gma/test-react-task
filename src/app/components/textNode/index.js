import React, { Component } from 'react';
import ToogleButton from 'app/components/toogleButton';


export default class textNode extends Component {
  render() {
    return (
      <span
        style={ { backgroundColor: this.props.color } }
        id={ this.props.id }
        className={ this.props.active && 'active' }
      >
        { this.props.text }
        {
          this.props.active
          && !this.props.color
          && <ToogleButton onClick={ this.props.buttonClick(this.props.text) } />
        }
      </span>
    );
  }
}
