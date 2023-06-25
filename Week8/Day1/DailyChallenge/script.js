const form = document.getElementById('libform')
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const noun = document.getElementById('noun').value
    const adjective = document.getElementById('adjective').value
    const person = document.getElementById('person').value
    const verb = document.getElementById('verb').value
    const place = document.getElementById('place').value

    if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
        console.error('Please fill in all the inputs.')
        return
    }

    const story = `Once upon a time, there was a ${adjective} ${noun} named ${person}. ${person} loved to ${verb} in ${place}.`

    const storyElement = document.getElementById('story')
    storyElement.textContent = story
})