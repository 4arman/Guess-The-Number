const btn = document.querySelector('#btn-btn')
const input = document.querySelector('#inp')
const text = document.querySelector('#text1')

function randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const num = randomNumber(1,100)

btn.addEventListener('click', () => {
    if (input.value == num) {
        text.textContent = 'You Guessed the Number!'
        text.style = 'display: block;'
    }

    if (input.value > num) {
        text.textContent = 'Less'
        text.style = 'display: block;'
    }

    if (input.value < num) {
        text.textContent = 'More'
        text.style = 'display: block;'
    }

    if (input.value == '') {
        text.textContent = 'Please Enter a Number!'
    }
})