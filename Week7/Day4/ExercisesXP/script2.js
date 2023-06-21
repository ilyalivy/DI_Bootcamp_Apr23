// Exercise 6 : Change The Navbar

// Instructions

// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

const navBar = document.getElementById('navBar')
navBar.setAttribute('id', 'socialNetworkNavigation')

// We are going to add a new <li> to the <ul>.

const ul = document.querySelector('ul')

// First, create a new <li> tag (use the createElement method).

const newLi = document.createElement('li')

// Create a new text node with “Logout” as its specified text.

const textNode = document.createTextNode('Logout')

// Append the text node to the newly created list node (<li>).

newLi.appendChild(textNode)

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

ul.appendChild(newLi)

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

const firstLink = ul.firstElementChild.firstElementChild.textContent
const lastLink = ul.lastElementChild.textContent

console.log(firstLink)
console.log(lastLink)