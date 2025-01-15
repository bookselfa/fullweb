const scriptURL = 'https://script.google.com/macros/s/AKfycbwWhXqD3yqROoB63hzTroONdfT9m8J36A_pZoTHnnMkL4ZShBgujRpYsufTgwPs5E9c/exec'
const form = document.forms['contact']
          
form.addEventListener('submit', e => {
    e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
    })
// const button = document.querySelector("button");
// button.addEventListener("click", function() {
//     window.location.reload(3);
// });