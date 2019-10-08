import React, { Component } from 'react';

class Button extends Component {
  deleteItem = () => {};

  render() {
    const { children, onEvent } = this.props;

    return (
      <button
        onClick={() => {
          this.deleteItem();
        }}
      >
        {children}
      </button>
    );
  }
}

export default Button;
