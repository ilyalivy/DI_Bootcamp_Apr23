// Exercise 7 : Welcome

// Instructions

// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function(userName) {
    const nav = document.querySelector('nav')

    const div = document.createElement('div')
    div.textContent = `Welcome ${userName}`
    nav.appendChild(div)

    const img = document.createElement('img')
    img.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VzOnkxCRm3IVkbbU5s8OyQHaH8%26pid%3DApi&f=1&ipt=4c5a591e84b7fa9af3cbe53c53d33226d16ea0af51d7954ccaf035529b2ff202&ipo=images')
    nav.appendChild(img)
})('John')