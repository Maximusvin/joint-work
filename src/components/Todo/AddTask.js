import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    inputValue: '',
  };
  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  handleBtnClick = () => {
    this.props.addTask(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button type="button" onClick={this.handleBtnClick}>
          Click
        </button>
      </div>
    );
  }
}
export default AddTask;
