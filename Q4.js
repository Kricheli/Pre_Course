const countOddFromZeroToNum = (num)=>{ 


        //the count number
        let count=0;
        
        // for loop that will loop through all  the words
        for (var x=0; x<=num; x++){
        
        
        //if the reminder of a number after being devided by 2, then 
        //it is a positive number
        if(x%2!==0){
        
        
            count++;
          }
        }
        return count;
        }