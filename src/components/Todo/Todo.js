import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';
import s from './ToggleComplete.module.css';

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

  toggleComplete = id => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  render() {
    return (
      <div>
        <AddTask addTask={this.addTask} />
        <ul>
          {this.state.todos.map(({ id, text, completed }) => (
            <li key={id}>
              <p className={completed && s.checkTodo}>{text}</p>
              <input
                type="checkbox"
                onChange={() => this.toggleComplete(id)}
                checked={completed}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
