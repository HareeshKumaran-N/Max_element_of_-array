// 1,1,2,3,4,,5,5,6,7

/*

 find the occurence of each element
*/ 


function FindOccurence(arr)
{
   obj={};
   
   
   for(let i=0;i<arr.length;i++)
   {

    // if( arr[i]!==undefined )
    { 
    
      
      if(obj.hasOwnProperty(arr[i]))
      {
        obj[arr[i]]=obj[arr[i]]+1;
      }
      else
      {
      
        obj[arr[i]]=1;
      }
   
    }

   }


   return obj;
}



//method two
function FindOccurence2(arr)
{
       
   for(let i=0;i<arr.length;i++)
    (obj.hasOwnProperty(arr[i]))?   obj[arr[i]]=+1 :  obj[arr[i]]=1;

    return obj;
}


console.table( FindOccurence([1,1,2,3,4,,5,5,6,7]) );

console.table( FindOccurence2([1,1,2,3,4,,5,5,6,7]) );