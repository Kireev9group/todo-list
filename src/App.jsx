import './App.css'
import Todo from './Todo'
import Count from './Counter'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      todos: [],
    }
  }

  render() {
    const doneCount = this.state.todos.filter((todo) => todo.done).length
    return (
      <div>
        <div>
          <Count allLength={this.state.todos.length} doneLength={doneCount} />
          <div id="input">
            <input
              id="inputTodo"
              value={this.state.name}
              onChange={this.handleSetName}
            />
            <button className="button" onClick={this.handleAddToDo}>
              Add new todo
            </button>
          </div>
        </div>
        {this.state.todos.map((todo, index) => (
          <div id="inlineTodo">
            <Todo
              name={todo.name}
              done={todo.done}
              onDone={this.handleSetDone}
              todoindex={index}
              hasDeleteButton={todo.hasDeleteButton}
              onMouse={this.handleDeleteButton}
              onRemove={this.deleteToDo}
            />
          </div>
        ))}
      </div>
    )
  }

  handleSetName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleAddToDo = () => {
    if (this.state.name !== '') {
      const todo = {
        name: this.state.name,
        done: false,
        hasDeleteButton: false,
      }
      this.setState({
        name: '',
        todos: this.state.todos.concat([todo]),
      })
    }
  }

  handleSetDone = (newDone, myindex) => {
    const newTodos = this.state.todos.map((todo, index) =>
      index === myindex
        ? {
            name: todo.name,
            done: newDone,
            hasDeleteButton: todo.hasDeleteButton,
          }
        : todo
    )
    this.setState({
      todos: newTodos,
    })
  }

  deleteToDo = (todoindex) => {
    this.state.todos.splice(todoindex, 1)
    this.setState({})
  }

  handleDeleteButton = (hasButton, myindex) => {
    const newTodos = this.state.todos.map((todo, index) =>
      index === myindex
        ? { name: todo.name, done: todo.done, hasDeleteButton: hasButton }
        : todo
    )
    this.setState({
      todos: newTodos,
    })
  }
}

export default App
