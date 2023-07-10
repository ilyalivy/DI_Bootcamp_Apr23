// Exercise 2 : HTTP & JSON

// Instructions

// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// Hint : use JSON.
// 3. Your server should run on http://localhost:8080/

const http =require('http');



const server = http.createServer((request, response) => {
    console.log('Get the request from client')

    const user = {
    firstname: 'John',
    lastname: 'Doe'
}
    response.end(JSON.stringify(user))
})

server.listen(8080, () => {
    console.log('run on 8080')
})