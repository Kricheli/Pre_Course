const divideOrHasSeven = (start,end)=>{

        //the count of the arguments start by zero
        let counter = 0;
        
        //for loop to go through every argument
         for (var i = start; i <= end; i++) {
        
        //
          argument= i.toString();
         
           for (var q = 0; q < argument.length; q++){
        
        //the first function allows us knoe if number "7"
           if ((argument.match("7")) 
           || (i % 7 == 0)){
            counter++;
            break;
                      
                       
          
                      }     
                 }
         } 
         
        
        
        return counter;
        }
        