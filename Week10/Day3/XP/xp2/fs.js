const fs = require('fs');

fs.writeFile('data.txt', 'Bla bla', 'utf-8', (err) => {
    if (err) return console.log(err);
})

fs.appendFile('data.txt', ' ' + 'Buy orange juice', 'utf-8', (err) => {
    if (err) return console.log(err)
})

fs.unlink('data.txt', (err) => {
    if (err) return console.log(err);
})