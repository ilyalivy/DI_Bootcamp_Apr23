const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const lastname = document.getElementById('lastname').value

    const data = {
        name,
        lastname
    }

    const dataJSON = JSON.stringify(data)

    const div = document.querySelector('div')
    div.textContent = dataJSON
})