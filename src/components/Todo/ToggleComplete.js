import React, { Component } from 'react';

class ToggleComplete extends Component {
  state = {
    todos: this.props.complete,
  };
}

export default ToggleComplete;
