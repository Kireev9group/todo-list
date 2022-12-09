import './Todo.css'
import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div
        className={this.props.done ? 'done' : 'undone'}
        id="todo"
        onMouseEnter={this.deleteButtonOn}
        onMouseLeave={this.deleteButtonOff}
      >
        <input
          type="checkbox"
          id="checkbox-id"
          checked={this.props.done}
          onChange={this.handleCheck}
        />
        <span>{this.props.inx}</span>
        <span>{this.props.name}</span>
        {this.props.hasDeleteButton && (
          <button onClick={this.deleteToDo} id="deleteButton">
            Delete
          </button>
        )}
      </div>
    )
  }

  handleCheck = (e) => {
    const done = e.target.checked
    this.props.onDone(done, this.props.todoindex)
  }

  deleteToDo = () => {
    this.props.onRemove(this.props.todoindex)
  }

  deleteButtonOn = () => {
    this.props.onMouse(true, this.props.todoindex)
  }

  deleteButtonOff = () => {
    this.props.onMouse(false, this.props.todoindex)
  }
}
