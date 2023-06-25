// Exercise 2 : Work With Forms

// Instructions

// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

const form = document.forms[0]
console.log(form)

// Retrieve the inputs by their id and console.log them.

const input1 = document.getElementById('fname')
const input2 = document.getElementById('lname')
console.log(input1, input2)

// Retrieve the inputs by their name attribute and console.log them.

const inputName1 = document.querySelector('input[name = "fname"]')
const inputName2 = document.querySelector('input[name = "lname"]')
console.log(inputName1, inputName2)

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

const usersAnswer = document.querySelector('.usersAnswer')

form.addEventListener('submit', getValues)

function getValues (event) {
    event.preventDefault()

    const firstName = input1.value.trim()
    const lastName = input2.value.trim()

    if (firstName === '' || lastName === ''){
        alert('Please enter both first name and last name.')
        return
    }

    const firstNameLi = document.createElement('li')
    firstNameLi.textContent = firstName

    const lastNameLi = document.createElement('li')
    lastNameLi.textContent = lastName

    usersAnswer.appendChild(firstNameLi)
    usersAnswer.appendChild(lastNameLi)

    input1.value = ''
    input2.value = ''
}