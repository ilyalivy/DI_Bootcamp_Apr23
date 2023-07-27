import React, { useState, useEffect } from 'react'

const Fetch = () => {

    const [message, setMessage] = useState('')

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await fetch('http://localhost:3030/api/hello')
        const data = await response.json()
        setMessage(data)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }

    fetchMessage()
  }, [])

  return (
     <div className="App">
      <h1>{message}</h1>
    </div>
  )
}

export default Fetch