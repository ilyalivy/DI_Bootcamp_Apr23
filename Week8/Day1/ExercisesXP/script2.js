// Exercise 3 : Transform The Sentence

// Instructions

// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// Declare a global variable named allBoldItems.

let allBoldItems

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong')
}

// Create a function called highlight() that changes the color of all the bold text to blue. 

function highlight() {
    for (let boldItem of allBoldItems) {
        boldItem.style.color = 'blue'
    }
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black. 

function returnItemsToDefault() {
    for (let boldItem of allBoldItems) {
        boldItem.style.color = 'black'
    }
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph).

getBoldItems()

let p = document.querySelector('p')
p.addEventListener('mouseover', highlight)
p.addEventListener('mouseout', returnItemsToDefault)