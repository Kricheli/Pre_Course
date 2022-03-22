const numFactorial = (num)=>{ 


        var num;
        var factorial; 
        
        
        factorial=1;
        
        //for loop to go through each of the numbers
        for(var i=1; i<=num; i++)  {
        
        //this function will multiply the number by itself
        factorial= factorial*i;}  
        
        return factorial;
        }