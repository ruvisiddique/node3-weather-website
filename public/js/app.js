console.log('Client side javascript file')

/* fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
}) */
/* fetch('http://localhost:3000/weather?address=!').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
}) */

const weatherForm = document.querySelector('form')
const seachVal = document.querySelector('input')
const msgOne = document.getElementById('msgOne')
const msgTwo = document.getElementById('msgTwo')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = seachVal.value
    msgOne.textContent = 'Loading....'
    msgTwo.textContent = ''
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            msgOne.textContent = data.error
        } else {
            msgOne.textContent = data.location
            msgTwo.textContent = data.forecast
        }
    })
})
})