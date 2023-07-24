import React, { useState, useEffect } from 'react'

const Color = () => {

  const [favoriteColor, setFavoriteColor] = useState('red')

  useEffect(() => {
    alert('useEffect reached')
    setFavoriteColor('yellow')
  }, [])

  const handleColorChange = () => {
    setFavoriteColor('blue')
  }
    
  return (
    <div>
        <h1>{`My Favorite Color is ${favoriteColor}`}</h1>
        <button onClick={handleColorChange}>Change Color to Blue</button>
    </div>
  )
}

export default Color