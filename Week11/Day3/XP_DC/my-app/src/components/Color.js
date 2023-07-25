import React, { Component } from 'react'
import Child from './Child';


export class Color extends Component {
    state = {
        favoriteColor: 'red',
        show: true
      };
    

    shouldComponentUpdate() {
        return true;
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' })
        }, 2000)
    }


    componentDidUpdate() {
        console.log('after update');
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('in getSnapshotBeforeUpdate');
        return null;
    }

    

    handleDelete = () => {
        this.setState({ show: false })
    }

  render() {
    const { favoriteColor } = this.state;
    return (
      <div>
        
        <h1>{`My Favorite Color is ${favoriteColor}`}</h1>
        <button onClick={() => this.setState({ favoriteColor: 'blue' })}>Change Color to Blue</button>
         {this.state.show ? <div>{<Child />}</div> : null}
        <button onClick={this.handleDelete}>Delete Header</button>
      </div>
    )
  }
}



export default Color