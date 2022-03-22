const primeNumberFromOneToN = (n)=>{ 

        { 
         function isPrime (n)
   {
       let j = Math.floor(Math.sqrt(n));
   
       for (var i = 2; i <= j; i++)
       {
   
           if (n % i == 0)
           {
               return false;
           }
       }
   
       return true;
   }
           let counter=0;
           for (var i = 2; i <= n; i++)
           {
               if (isPrime(i))
               {
                   counter++;
               }
           }
       return counter;
       }
   }