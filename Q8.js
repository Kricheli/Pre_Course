const capitalize = (word)=>{ 

        var value = word
        
        var string="";
        //for loop to go through each of the words
        for(var i = 0; i < word.length; i++){
           
           //'x' worth the index of the value
            x=value.charAt(i);
            var x;
            if(
             x == "a" ||
             x == "e" ||
             x == "i" ||
             x == "o" ||
             x == "u" ||
             x == "y"
             )
        
             //converting the vowel letters to uppercase
            x=x.toUpperCase();
        
            //adding the uppercase vowel to the string
            string+=x;
        }
        
        return(string);
        }