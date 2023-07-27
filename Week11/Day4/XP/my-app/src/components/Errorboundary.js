import React, { Component } from 'react'

class Errorboundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false,
      }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

  render() {
    if (this.state.hasError) {
        return <h1>An error has occured.</h1>
    }
    return this.props.children
  }
}

export default Errorboundary