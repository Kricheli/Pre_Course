


//The game headline
const figlet = require('figlet');
console.log(figlet.textSync('HangMan'));

 const readlineSync = require('readline-sync')

 //The array of words 
 let words =['rose','icecream','movie','sun','sky','box','blue','hangman'];

 // Pick Random index from the arrayl
 
 const getRandomWord = (words) => {
     let randomIndex = Math.floor((Math.random() * words.length))
     return words[randomIndex]
 }
 // Creating the hidden random word
 const creatHiddenWord = (word) => {
     let hiddenWord = word.split('').map(argu => {return '*'})
     return hiddenWord
 }

 //the game can only recive alphabetic letters
 const letters = /[a-zA-Z]/;

    //Function to check if the letter that was entered is part of the randm worf
const isLetterInWord = (letter,word) => {
    return word.includes(letter)}
const replaceMatches = (letter, randomWord, hiddenWord) => {
    for(let i = 0; i < randomWord.length; i++) {
        let crrChar = randomWord[i]
        if (crrChar === letter) {
            hiddenWord[i] = letter;
        }
    }
    return hiddenWord;
}

const startGame = () => {
    let randomWord = getRandomWord(words);
    let hiddenWord = creatHiddenWord(randomWord)

    //The number of guesses a player has when he starts the game
    let guesses = 10;
    

    //this loop state the game will continue until the number of guesses reach zero 
    //or if the hidden word will unravil*
    while(guesses > 0 && hiddenWord.join('') !== randomWord) {


        console.log('\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓')

        //Displaying the player the amount of guesses he has.
        console.log('\n➠ You have' , guesses , 'guesses, \n  may the odds be ever in your favor.\n\n')  
        console.log(' The word is: ', hiddenWord.join(' '))
        
        
        const answer = readlineSync.question(' \n please enter your guess: ')
        

        //Converts an uppercase letters lowercase letters
        const answerLower = answer.toLowerCase();
        
        
        if (isLetterInWord(answerLower,randomWord)){
            //If the input contain a correct answer a message will be shown to the player  
             hiddenWord = replaceMatches(answerLower,randomWord,hiddenWord);
             console.log('\n Correct!!!!!!')

        //If the input don't contain alphbetic letters, or that that his length is bigger then one
        //an 'invalid input' will be shown.
        } else if(
            (!answer.match(letters)) ||
            (answerLower.length != 1) ||
            answerLower === " "
            ){
                console.log("\n Invalid input")
            }

            //If the input contain a wrong letter, the number of guesses will decrease by one
         else {
            guesses--;
            console.log('\n Sadly, this is incorrect.')
        }
         //If the number of guesses is equal to zero, the player will lose.
        if(guesses === 0){
            console.log(' You lost,\n\nthe word was:', randomWord, '\n\nBetter luck next round!')
        }
        //If the number of guesses is greater then zero, and there are no hidden letters 
        //then the player had won.
        else if(guesses > 0 && hiddenWord.includes('*') < 1){
            console.log('\nYou won!!!!!!☺\n\nThe word is:',randomWord)
        }
        

    }

 }
//Command to start the game when the file is called in the terminal
 startGame()

 
 




 