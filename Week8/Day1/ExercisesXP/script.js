// Exercise 1 : Change The Article

// Instructions

// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.querySelector('h1')
console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.

const article = document.querySelector('article')
const lastParagraph = article.lastElementChild
lastParagraph.remove()

// Add an event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = document.querySelector('h2')
h2.addEventListener('click', changeBGColor)

function changeBGColor () {
    h2.style.backgroundColor = 'red'
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3 = document.querySelector('h3')
h3.addEventListener('click', h3Hide)

function h3Hide () {
    h3.style.display = 'none'
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const button = document.getElementById('boldButton')
const p = document.querySelectorAll('p')
button.addEventListener('click', makeTextBold)

function makeTextBold () {
    p.forEach (p => p.style.fontWeight = 'bold') 
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)


// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)