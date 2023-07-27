import React from 'react'

const DataFetcher = () => {
    const fetchData = async () => {
        const url = "https://webhook.site/61213790-c051-416d-97e3-19e0ea607b30"

        const dataToSend = {
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            })

            console.log(response);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    const handleFetchData = () => {
        fetchData()
    }

  return (
    <div>
        <button onClick={handleFetchData}>Press me to post some data</button>
    </div>
  )
}

export default DataFetcher