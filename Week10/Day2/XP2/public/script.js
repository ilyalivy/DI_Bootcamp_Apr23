fetch('/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('user-data').innerText = JSON.stringify(data);
  });

function showAlert() {
    alert('Hello from Javascript!');
}