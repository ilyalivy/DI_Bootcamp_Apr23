function myMove() {
    const animate = document.querySelector('#animate')
    const container = document.querySelector('#container')
    let position = 0
    const containerRemainWidth = container.offsetWidth - animate.offsetWidth
    const intervalId = setInterval(frame, 1)
    function frame() {
        if (position === containerRemainWidth) {
            clearInterval(intervalId)
        } else {
            position++
            animate.style.left = position + 'px'
        }
    }
}