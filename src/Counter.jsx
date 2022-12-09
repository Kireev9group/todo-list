import React from 'react'
import './Counter.css'

export default class Count extends React.Component {
  render() {
    return (
      <div>
        <div className="name">To do</div>
        <div className="counter">
          <span>All: {this.props.allLength}</span>
          <span>Done: {this.props.doneLength}</span>
          <span>Left: {this.props.allLength - this.props.doneLength}</span>
        </div>
      </div>
    )
  }
}
