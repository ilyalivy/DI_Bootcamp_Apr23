const express = require('express')
const app = express()

app.use(express.json())

app.use('/', express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: true }))


app.listen(3001, () => {
    console.log('server is listening on port 3001')
})

app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby
    if (isNaN(hobby)) {
        res.status(200).send(`My hobby: ${hobby}`)
    }
    return res.status(404).send('Not found')
})

app.get('/pic', (req, res) => {
    res.send(`<div>
    <img src = 'https://img.freepik.com/premium-photo/blue-sea-ocean-water-surface-underwater-with-sunny-cloudy-skyseascape-summer-background-wallpaper_1962-2817.jpg?w=2000' alt = 'Some image'
    </div>`)
});

app.get('/form', (req, res) => {
    res.sendFile(__dirname + "/public/form.html")
})

app.post('/formData', (req, res) => {
    console.log(req.body)
    res.send(`Hello! My email is ${req.body.email} and my message is ${req.body.message}`)
})