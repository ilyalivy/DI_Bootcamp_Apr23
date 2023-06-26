let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    })
}

displayGroceries()

const cloneGroceries = () => {
    let user = client
    client = 'Betty'
    const shopping = groceries
    shopping.totalPrice = '35$'
    shopping.other.payed = false

    console.log(client)
    console.log(user)
    console.log(shopping)
    console.log(groceries)
}

cloneGroceries()