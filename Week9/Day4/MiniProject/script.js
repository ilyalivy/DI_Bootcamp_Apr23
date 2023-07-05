// Get elements from the DOM
const btn = document.getElementById('getCharacter');
const loadingElement = document.getElementById('loading');
const characterInfoElement = document.getElementById('characterInfo');
const errorMessageElement = document.getElementById('errorMessage');

const nameElement = document.getElementById('name');
const heightElement = document.getElementById('height');
const genderElement = document.getElementById('gender');
const birthYearElement = document.getElementById('birthYear');
const homeWorldElement = document.getElementById('homeWorld');

// Fetch random character
async function fetchCharacter() {
    const characterId = Math.floor(Math.random() * 83) + 1; // Random ID between 1 and 83
    
    try {
        loadingElement.style.display = 'block'; // Show loading icon

        const response = await fetch(`https://www.swapi.tech/api/people/${characterId}`);
        const data = await response.json();

        if (data.result) {
            const homeWorldResponse = await fetch(data.result.properties.homeworld);
            const homeWorldData = await homeWorldResponse.json();

            // Update elements
            nameElement.textContent = data.result.properties.name;
            heightElement.textContent = data.result.properties.height;
            genderElement.textContent = data.result.properties.gender;
            birthYearElement.textContent = data.result.properties.birth_year;
            homeWorldElement.textContent = homeWorldData.result.properties.name;

            characterInfoElement.style.display = 'block'; // Show character info
            errorMessageElement.style.display = 'none'; // Hide error message
        } else {
            throw new Error('Character not found')
        }
    } catch (error) {
        errorMessageElement.style.display = 'block'; // Show error message
        characterInfoElement.style.display = 'none'; // Hide character info
    } finally {
        loadingElement.style.display = 'none'; // Hide loading icon
    }
}

// Attach event listener
btn.addEventListener('click', fetchCharacter);