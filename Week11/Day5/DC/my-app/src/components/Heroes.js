import React, { useState } from 'react'
import heroesData from '../data/heroes.json'
import './Heroes.css'

const Heroes = ({handleScore, handleTopScore}) => {

    const [heroes, setHeroes] = useState(heroesData)
    const [clickedHeroes, setClikedHeroes] = useState([])

   const handleClick = (heroName) => {

    if (clickedHeroes.includes(heroName)) {
        setClikedHeroes([])
        handleTopScore()
        handleScore(0)
    } else {
        const newScore = clickedHeroes.length + 1
        handleScore(newScore)
        const shuffled = [...heroes.superheroes].sort(() => Math.random() - 0.5);
        setHeroes({ superheroes: shuffled });
        setClikedHeroes([...clickedHeroes, heroName])
    }

   }
  return (
    <div className='heroes-container'>
        {heroes.superheroes.map(hero => {
            return <div key={hero.id} className='hero-card' onClick={() => handleClick(hero.name)}>
                <img src={hero.image} alt=""/> <br />
                <strong>Name:</strong> {hero.name} <br />
                <strong>Occupation:</strong> {hero.occupation}
                </div>
        })}
    </div>
  )
}

export default Heroes