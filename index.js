// testing if JS is connecting with HTML
window.alert("Hi"); 
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
    textOutput.innerText = pigLatin(input)
});

const pigLatin = (word) => {
    word = word.trim()
      word = word.toLowerCase()
      // Set your vowels array to compare to word
      let vowels = ['a', 'e', 'i', 'o', 'u']
      let wordArray = word.split('')
      let finalArray = []
      let bucketArray = []
      for (let index = 0; index < 2; index++) {
        // console.log(wordArray[index])
        if(vowels.includes(wordArray[index])) {
          if(index === 0){
            let theWord = word + 'yay'
            finalArray.push(theWord)
          } else {
            let theWord = word.slice(index, word.length) 
                        + word.slice(0, index) 
                        + 'ay';
            finalArray.push(theWord);
          }
        } else if (!vowels.includes(wordArray[index])) {
          let bucket = wordArray[index]
          bucketArray.push(bucket)
          if (bucketArray.length === 2) {
            let otherArray = bucketArray.join("")
            console.log(otherArray)
            let theWord = word.slice(2, word.length)
                        + word.slice(2, index)
                        + otherArray
                        + 'ay'
            finalArray.push(theWord)
          }
        }
      }
      const answer = finalArray.join();
  console.log(typeof(answer))
  // console.log(typeof(answer))
  return answer
  // Your code here

}

reset.addEventListener('click', (e) => {
    textInput.value = '';
    textOutput.innerText = '';
    input = '';
    console.log('click');
})