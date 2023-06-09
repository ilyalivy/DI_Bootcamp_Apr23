// Exercise 1: Timer

// Instructions

// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>


// Part I

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

function showAlert() {
    alert('Hello World')
}

setTimeout(showAlert, 2000)

// Part II

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// function addParagraph() {
//     const container = document.querySelector('#container')
//     const p = document.createElement('p')
//     p.textContent = 'Hello World'
//     container.appendChild(p)
// }

// setTimeout(addParagraph, 2000)

// Part III

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let intervalId

function addParagraph() {
    const container = document.querySelector('#container')
    const p = document.createElement('p')
    p.textContent = 'Hello World'
    container.appendChild(p)

    if (container.querySelectorAll('p').length === 5) {
        clearInterval(intervalId)
    }
}

intervalId = setInterval(addParagraph, 2000)

const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', function() {
    clearInterval(intervalId)
})
