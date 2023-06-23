function playTheGame() {

    const play = confirm('Would you like to play the game?')

    if (!play) {
        alert('No problem, Goodbye')
        return
    }

    let userNumber = prompt('Enter a number between 0 and 10:')

    

    if (userNumber === '' || isNaN(userNumber)) {
        alert('Sorry, not a number. Goodbye')
        return
    } else if (userNumber < 0 || userNumber > 10) {
        alert('Sorry, it\'s not a good number. Goodbye')
        return
    }
    
    userNumber = Number(userNumber)

    let computerNumber
    compareNumbers(userNumber, computerNumber)

}

function compareNumbers(userNumber,computerNumber) {

    let attempts = 1
    

    while (attempts <= 3) {
        computerNumber = Math.floor(Math.random() * 11)
        alert(`The computer's number is: ${computerNumber}`)

        if (userNumber === computerNumber) {
            alert('WINNER')
            return
        } else if (userNumber > computerNumber) {
            userNumber = prompt('Your number is bigger than the computer\'s, guess again:')
        } else {
            userNumber = prompt('Your number is smaller than the computer\'s, guess again:')
        }

        
        if (userNumber === '' || isNaN(userNumber)) {
            alert('Sorry, Not a number. Goodbye')
            return
        }

        attempts++

        userNumber = Number(userNumber)
    }
    
    alert('Out of chances')

}

playTheGame()