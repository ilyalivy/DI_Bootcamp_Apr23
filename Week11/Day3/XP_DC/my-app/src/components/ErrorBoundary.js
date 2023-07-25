import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null, 
            errorInfo: null,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }
    

  render() {
    if (this.state.errorInfo) {
        return (
            <details style={{ whiteSpace: 'pre-wrap' }}>
            <summary>Something went wrong.</summary>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
  
        )
    }
    return this.props.children
  }
}

export default ErrorBoundary