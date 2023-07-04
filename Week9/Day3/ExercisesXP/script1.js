// Exercise 2 : Giphy API

// Instructions

// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

fetch('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=2&limit=10&offset=2')
.then(response => {
    if(response.ok) {
        return response.json()
    } else {
        throw new Error ("issues with fetch")
    }
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})