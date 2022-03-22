const minNumberInArr = (arr)=>{ 

        //Setting the minimum value
         var min = arr[0];
        
        //For loop to go through all the values in the array
        
         for (var j = 0; j < arr.length; j++) {
        
        //if the argument from the array is smaller then the min value
        //the argument from the array becomes the min value
          if (arr[j] < min) {
            
        min = arr [j];
        }
        }
        return min;
        }
        
        