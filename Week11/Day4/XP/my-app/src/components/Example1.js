import React, { Component } from 'react'
import data from '../data1.json'

class Example1 extends Component {
    constructor(props) {
      super(props)
    }
  render() {

    const socialMedias = data.SocialMedias
    return (
      <div>
        <ul>
            {socialMedias.map((socialMedia, index) => (
                <li key={index}>
                    {socialMedia}
                </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default Example1