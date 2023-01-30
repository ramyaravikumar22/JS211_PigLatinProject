//import the javascript
import pigLatin from './main'

//create input variable
let input = '';

//create variables that reference Elements in DOM

const textInput = document.getElementById('textInput');
const button = document.getElementById('button')
const reset = document.getElementById('reset')
const textOutput = document.getElementById('textOutput')

console.log();

textInput.addEventListener('keyup', (event) => {
    input = event.target.value
    console.log(input)
})

button.addEventListener('click', (e) => {
    console.log(pigLatin(input))
    textOutput.innerText = theWord
});

reset.addEventListener('click', (e) => {
    textInput.value = '';
    textOutput.innerText = ''
    input = '';
    console.log('click')
})