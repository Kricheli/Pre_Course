const getWordByNumber = (num)=>{ 
    
        //The numbers between 0-9
        let numtoletters = ["zero","one","two","three","four","five",
        "six","seven","eight","nine"]
    
    //the function condistions    
    if(typeof(num)=='number' && num>=0 && num<=9)
    
        {
            //if the argument meets the terms of the function he will 
            //return in words
            return numtoletters[num];
    }
        else 
        //if the arguement does not meet the criteria an 'invalid' message
        //will be shown 
            return("invalid");
    }
    