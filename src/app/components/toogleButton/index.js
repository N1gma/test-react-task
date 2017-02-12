import React, { Component } from 'react';

export default class ToogleButton extends Component {
  render() {
    return (
      <button
        className="toogle-button"
        onClick={ this.props.onClick }
      >+
      </button>
    );
  }
}
