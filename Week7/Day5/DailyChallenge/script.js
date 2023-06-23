let number = Number(prompt('Enter the number'))
if (isNaN(number) || number == '') {
  alert('Not a number')
}

let i = 1

const p1 = document.createElement('p')
p1.innerHTML = `We start the song at ${number} bottles<br>Take ${i} down, pass ${i > 1 ? 'them' : 'it'} around<br>We have now ${number -= i} ${number > 1 ? 'bottles' : 'bottle'}<br>`
document.body.appendChild(p1)
i++

const p2 = document.createElement('p')
p2.innerHTML = `Take ${i} down, pass them around<br>We have now ${number -= i} ${number > 1 ? 'bottles' : 'bottle'}<br>`
document.body.appendChild(p2)
i++

for (i; i < number; i++) {

  const p = document.createElement('p')
  p.innerHTML = `Then, take ${i} down, pass them around<br>We have now ${number -= i} ${number > 1 ? 'bottles' : 'bottle'}<br>`
  document.body.appendChild(p)
}

if (i > number) {
  const p3 = document.createElement('p')
  p3.innerHTML = `Then, take ${number} down, pass them around<br>We have now 0 bottle<br>`
  document.body.appendChild(p3)
}