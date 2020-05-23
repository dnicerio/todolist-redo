import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';


export class TodoItem extends Component {
  // Line-through completed todos on button click
  completeLine = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="todosContainer">
        <div className="textContainer">
          <p className="todosText" style={this.completeLine()}>
            {title}
          </p>
        </div>
        <div className="btnContainer">
          <button 
            className="btnComplete" 
            onClick={this.props.toggleComplete.bind(this, id)}>
              <i className="fa fa-check" aria-hidden="true"></i>
          </button>
          <button 
            className="btnDelete" 
            onClick={this.props.delTodo.bind(this, id)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>       
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
}

export default TodoItem
