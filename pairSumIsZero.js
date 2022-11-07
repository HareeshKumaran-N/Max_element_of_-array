// To find a first pair from a number array whose sum is zero
let arr=[1,2,1,-1,4,,3,-3];

console.log(zeroPair(arr));

  function zeroPair(arr)
  {
      let map={};// to hold the index of its first occurence
      for(let i=0;i<arr.length;i++)
      {
        if(!map.hasOwnProperty(arr[i]))
        {
            map[arr[i]]=i;
        }

        if(arr[i]<0)//if it is a negative.
        {
            let positive=arr[i]*-1;//checking its positive is present or not.

            if(map.hasOwnProperty(positive))//checking if it's positive pair already exists 
            {
                 return {
                           [map[positive]]: positive,
                           [i]:arr[i]
                        };
            }
        }
      }


      return "No Pair found";


      

  }
