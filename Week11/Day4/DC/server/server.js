import express from 'express'
import cors from 'cors'

const app = express()
const port = 3030

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/api/hello', (req, res) => {
    res.json('Hello From Express')
})

app.post('/api/world', (req, res) => {
    const inputValue = req.body.inputValue
    console.log('Received message from client:', inputValue)
    res.json(`I received your POST request. This is what you sent me: ${inputValue}`)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})