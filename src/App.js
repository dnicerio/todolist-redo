import React, { Component } from 'react';
import Header from './pages/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const LOCAL_STORAGE_KEY = 'App.todos'

export class App extends Component {
  state = {
    todos: []
  }

  // Load todos on component startup
  componentDidMount = () => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      this.setState({
        todos: storedTodos
    })}
  }

  // Save todos everytime component updates
  componentDidUpdate = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.todos), this.state.todos)
  }

  // Toggle Complete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    })
  }

  // Add Todo
  addTodo = (title) => {
    let newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    if (title !== '')
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
      </div>
    )
  }
}

export default App
