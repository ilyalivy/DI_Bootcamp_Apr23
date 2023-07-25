import React, { Component } from 'react'

export class BuggyCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    handleClick = () => {
        const { counter } = this.state
        this.setState({counter: counter + 1})
        
    }

  render() {
    const { counter } = this.state
    if (counter === 5) {
        throw new Error('I crashed!')
    } 
    return (
        
      <div onClick={this.handleClick}>
        Counter: {this.state.counter}
      </div>
    )
  }
}

export default BuggyCounter