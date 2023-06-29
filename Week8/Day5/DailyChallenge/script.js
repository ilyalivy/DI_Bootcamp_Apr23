function isAnagram (a, b) {

    // Remove whitespace and convert strings to lowercase
    a = a.replace(/\s/g, '').toLowerCase()
    b = b.replace(/\s/g, '').toLowerCase()

    // Check if the lengths of the strings are equal
    if (a.length !== b.length) {
        return false
    }

    // Sort the characters in both strings
    const sortedA = a.split('').sort().join('')
    const sortedB = b.split('').sort().join('')

    // Compare the sorted strings
    return sortedA === sortedB
}

const a = 'Astronomer';
const b = 'Moon starer';
console.log(isAnagram(a, b))

const c = 'Hello';
const d = 'World';
console.log(isAnagram(c, d))