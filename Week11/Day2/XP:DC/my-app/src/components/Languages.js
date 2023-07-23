import React, {useState} from 'react'
import './Languages.css';

  
const Languages = () => {

    const initialLanguages = [
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
];

const [languages, setLanguages] = useState(initialLanguages)

const voteIncrement = (languageName) => {
    const updatedLanguages = languages.map(language => 
        language.name === languageName
        ? {...language, votes: language.votes + 1}
        : language
    )
    setLanguages(updatedLanguages)
}

  return (
    <div className='container'>
        <h1>Vote Your Language!</h1>
        {languages.map(language =>(
            <div key={language.name} className='language-item'>
                <div className="votes">Votes: {language.votes}</div>
                <div className="language-name">{language.name}</div>
                <button className='vote-button' onClick={() => voteIncrement(language.name)}>Click Here</button>

            </div>
        ))}
    </div>
  )
}

export default Languages