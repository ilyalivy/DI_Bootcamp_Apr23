// Exercise 5 : Event Listeners

// Instructions

// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

let myElement = document.getElementById('myElement')

myElement.addEventListener('click', function () {
    myElement.style.left = '50px'
})

myElement.addEventListener('mouseover', function () {
    myElement.style.top = '50px'
})

myElement.addEventListener('mouseout', function () {
    myElement.style.top = '0'
})

myElement.addEventListener('dblclick', function() {
    myElement.style.backgroundColor = 'blue'
    myElement.style.fontSize = '35px'
})