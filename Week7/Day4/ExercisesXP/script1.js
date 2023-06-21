// Exercise 5 : Users

// Instructions

// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it

const container = document.getElementById('container')
console.log(container)

// Change the name “Pete” to “Richard”.

const ulFirst = document.querySelector('.list')
ulFirst.lastElementChild.textContent = 'Richard'

// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)

const elementSarah = document.querySelector('ul:nth-child(3) li:nth-child(2)')
elementSarah.remove()

// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

const uls = document.getElementsByTagName('ul')

const myName = 'Ilya';

for (let i = 0; i < uls.length; i++) {
  let firstNameElement = uls[i].getElementsByTagName("li")[0];
  firstNameElement.textContent = myName;
}

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.

for (let i = 0; i < uls.length; i++) {
    uls[i].classList.add('student_list')
}

// Add the classes university and attendance to the first <ul>.

ulFirst.classList.add('university', 'attendance')

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.

container.style.backgroundColor = 'lightblue'
container.style.padding = '10px'

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the second <ul>)

for (let i = 0; i < uls.length; i++) {
    uls[1].lastElementChild.style.display = 'none'
}

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)

ulFirst.lastElementChild.style.border = '2px solid lightblue'

// Change the font size of the whole body.

document.body.style.fontSize = '20px'

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (container.style.backgroundColor === 'lightblue') {

    // const lis = document.getElementsByTagName('li')

    // for (let i = 0; i < lis.length; i++) {}

    const userList = [];
    const lists = document.querySelectorAll('.list');
    
    lists.forEach((list) => {
      const users = list.querySelectorAll('li');
      users.forEach((user) => {
        userList.push(user.textContent);
      });
    });
    
    const message = `Hello ${userList.join(' and ')}`;
    alert(message);
  }
