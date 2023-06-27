// Exercise 1 : Colors

// Instructions

// Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

colors.forEach((color, i) => {
    console.log(`#${i + 1} choice is ${color}`)
})

if (colors.some(value => value === 'Violet')) {
    console.log('Yeah')
} else {
    console.log('No...')
}


// Exercise 2 : Colors #2

// Instructions

// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

colors.forEach((color, i) => {
    const suffix = ordinal[i + 1] || ordinal[0]
    console.log(`${i + 1}${suffix} choice is ${color}`)
})


// Exercise 3 : Analyzing

// Instructions

// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); 

// [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]

// ------2------
const country = "USA";
console.log([...country]);

// [ 'U', 'S', 'A' ]

// // ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// [ undefined, undefined ]


// Exercise 4 : Employees

// Instructions

// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :

// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents = users.map(user => `Hello ${user['firstName']}`)
console.log(welcomeStudents)


// Using the filter() method, create a new array, containing only the Full Stack Residents.

const fullStackResidents = users.filter(user => user['role'].includes('Full Stack Resident'))
console.log(fullStackResidents)


// Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const lastName = users.filter(user => user['role'].includes('Full Stack Resident')).map(user => user['lastName'])
console.log(lastName)


// Exercise 6 : Star Wars

// Instructions

// Using this array 

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const sentence = epic.reduce((acc, elem) => acc + ' ' + elem, '')
console.log(sentence)


// Exercise 7 : Employees #2

// Instructions

// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.

const passedStudents = students.filter(student => student['isPassed'])


// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

.forEach(student => console.log(`Good job ${student['name']}, you passed the course in ${student['course']}`))


// Exercise 6 : Bank Details

// Instructions

// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly Details, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the Details (ie. the positive AND the negative Details) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

const bankAmount = 1000
const VAT = 0.17

const details = ["+200", "-100", "+146", "+167", "-290"]

const modifyDetails = (details, VAT) => {
    const modifiedDetails = details.map(detail => {
        const amount = Number(detail)
        const modifiedAmount = amount + amount * VAT
        return modifiedAmount
    })
    
    return modifiedDetails
}

const modifiedDetails = modifyDetails(details, VAT)
console.log(modifiedDetails)

const totalDetails = modifiedDetails.reduce((total, detail) => total + detail, 0)

const finalBankAmount = bankAmount + totalDetails

console.log(`Bank account standing: ${finalBankAmount.toFixed(2)}`)