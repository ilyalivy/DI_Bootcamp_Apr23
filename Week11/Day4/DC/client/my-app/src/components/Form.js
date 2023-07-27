import React, { useState } from 'react'

const Form = () => {

    const [inputValue, setInputValue] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:3030/api/world', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputValue })
            })

            const data = await response.json()
            setMessage(data)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
        </form>
        {message}
    </div>
  )
}

export default Form