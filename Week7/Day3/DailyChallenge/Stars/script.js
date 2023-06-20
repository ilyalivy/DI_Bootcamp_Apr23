// Instructions

// Write a JavaScript program that recreates the pattern below.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

// Do this challenge twice: first by using one loop, then by using two nested for loops 


function printStar(rows) {

    for (let i = 1; i < rows; i++) {
        let star = '* '
        console.log(star.repeat(i))
    }

}

function printStar1(rows) {

    for (let a = 1; a < rows; a++) {
        let star1 = ''

        for(let b = 0; b < a; b++) {
            star1 += '* '
        }

        console.log(star1)
    }

}

printStar(7)
printStar1(7)