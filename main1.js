let randomNumber = Math.floor(Math.random() * 100) + 1
const guess = document.querySelector('#guess')
const submit = document.querySelector('#submit')
const preview = document.querySelector('section')
const answer = document.querySelector('nav')
const highOrLow = document.querySelector('main')

let guess_count = 1
submit.addEventListener('click', checkGuess)

function checkGuess(){
    if(guess_count === 1){
        preview.textContent = 'Previous Guess: '
    }
    let userGuess = Number(guess.value)
    preview.textContent += `${userGuess} `

    if(userGuess === randomNumber){
        answer.textContent = 'Congratulations! You Guessed right'
        highOrLow.textContent = ''
        gameOver()
    } else if (guess_count == 10){
        answer.textContent = '!!!GAME OVER!!!'
        highOrLow.textContent = ''
        gameOver()
    } else {
        answer.textContent = 'Wrong'
        if(randomNumber < userGuess){
            highOrLow.textContent = 'You guess was too high'
        } else{
            highOrLow.textContent  = 'Your guess was too low'
        }
    }
    guess_count++
    guess.value = ''
    guess.focus()
    
}
function gameOver(){
    guess.disabled = true
    submit.disabled = true
    resetButton  = document.createElement('button')
    resetButton.textContent = 'Start Again'
    document.body.appendChild(resetButton)
    console.log('Hello world')
    resetButton.addEventListener('click', resetGame)
}
function resetGame(){
    guess_count = 1
    guess.disabled = false;
    submit.disabled = false;
    let clearAll = document.querySelectorAll('.clear')
    for (const clear of clearAll) {
        clear.textContent = ''
    }
    guess.focus()
    randomNumber = Math.floor(Math.random() * 100) + 1//Generating a random number after all this
    document.body.removeChild(resetButton)

}