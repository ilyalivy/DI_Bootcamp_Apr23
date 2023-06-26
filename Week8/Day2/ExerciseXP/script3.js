// Exercise 8 : Juice Bar

// Instructions

// You will use nested functions, to open a new juice bar.

// Part I:

// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

function makeJuice(size) {

    const ingredients = []

    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        ingredients.push(firstIngredient, secondIngredient, thirdIngredient)
    }
    
    function displayJuice() {

        let sentence = `The client wants a ${size} juice, containing`

        ingredients.forEach(ing => {
            sentence += ` ${ing}, `
        })

        const div = document.createElement('div')

        div.textContent = sentence
        document.body.appendChild(div)
        
    }

    addIngredients('apple', 'mango', 'melon')
    addIngredients('strawberry', 'banana', 'blueberry')
    displayJuice()

}

makeJuice('medium')

