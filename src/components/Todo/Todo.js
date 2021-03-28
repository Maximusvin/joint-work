import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

class Todo extends Component {
  state = {
    todos: this.props.todos,
  };
  //  { "id": 1, "text": "Можливість добавлення таски", "completed": false },
  addTask = text => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }));
  };
  render() {
    return (
      <div>
        <AddTask addTask={this.addTask} />
        <ul>
          {this.state.todos.map(task => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
