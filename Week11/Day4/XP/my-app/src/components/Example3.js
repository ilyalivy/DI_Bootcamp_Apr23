import React, { Component } from 'react'
import data from '../data1.json'
import { Link } from 'react-router-dom'

class Example3 extends Component {
    constructor(props) {
      super(props)
    }
  render() {

    const experiences = data.Experiences
    
    return (
      <div>
        <ul>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <img src={experience.logo} alt="" /> <br />
                    <Link to={experience.url}>{experience.companyName}</Link><br /><br />
                    {experience.roles.map((role, index) => (
                        <div key={index}>
                            <strong>{role.title}</strong> <br /> <br />
                            {role.startDate} {role.location} <br /> <br />
                            {role.description}
                        </div>
                    ))}
                </div>
                
                // <h2 key={index}>{skill.Area}
                // <ul>
                //     {skill.SkillSet.map((skillSet, index) =>
                //         <li key={index}>{skillSet.Name}</li>
                //     )}
                // </ul>
                // </h2>  
            ))}
        </ul>
      </div>
    )
  }
}

export default Example3