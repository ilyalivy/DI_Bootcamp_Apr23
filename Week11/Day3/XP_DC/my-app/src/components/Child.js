import React, { Component } from 'react'

class Child extends Component {

    componentWillUnmount() {
        alert('The component named Header is about to be unmounted.')
    }
    render() {
        return (
        <div>
            <h2>Hello World!</h2>
        </div>
        )
    }
}

export default Child