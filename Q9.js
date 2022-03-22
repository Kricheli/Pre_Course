
function LongestWord(sentence){

        //spliting the words from sentence using this command
        let wordsArr = sentence.split(" ");
    
        //The words array
        let words = [];
    
        //for loop to loop through all the words in the sentence
        for(let j=0; j<wordsArr.length; j++){
            
            //remove the special signs and numbers from the sentence
            words.push(removesym(wordsArr[j]));
        }
        
        
        let start = [words[0]];
        for(let q=0; q<words.length; q++) {
            if(words[q].length>start[0].length) {
              start[0] = words[q];
              
            }else if (start[0].length == words[q].length) {
                start[0]=start[0];
            }
        }
            return start.join(" ");
    }
    function removesym(word){
        let newWord = "";
        let accept = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        for(let r=0; r<word.length; r++){
            if(accept.includes(word[r])){
                newWord+=word[r];
            }
        }
        return newWord;
    }
    
        
        
    