const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

const section = document.querySelector('section')

planets.forEach ((planet, index) => {
    const divPlanet = document.createElement('div')
    divPlanet.classList.add('planet')

    const colors = ["gray", "orange", "blue", "red", "brown", "yellow", "lightblue", "darkblue"]
    
    const color = colors[index % colors.length]

    divPlanet.style.backgroundColor = color
    
    section.appendChild(divPlanet)
})