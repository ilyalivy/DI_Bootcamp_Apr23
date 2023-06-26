// Exercise 6 : Fortune Teller

// Instructions

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    let sentence = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids."
    const div = document.createElement('div')
    div.textContent = sentence;
    document.body.appendChild(div)
})(2, "Ashley", "New York", "Engineer")