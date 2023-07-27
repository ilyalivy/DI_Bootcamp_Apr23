import React, { Component } from 'react'
import data from '../data1.json'

class Example2 extends Component {
    constructor(props) {
      super(props)
    }
  render() {

    const skills = data.Skills
    
    return (
      <div>
        <ul>
            {skills.map((skill, index) => (
                <h2 key={index}>{skill.Area}
                <ul>
                    {skill.SkillSet.map((skillSet, index) =>
                        <li key={index}>{skillSet.Name}</li>
                    )}
                </ul>
                </h2>  
            ))}
        </ul>
      </div>
    )
  }
}

export default Example2