//Algorithm.
/*

    >>Create a function which takes input as a parameter.

    >>Check whether the given input is valid input , check is the input isstring and not a empty string.

    >>Create an empty object 

    >>If it is a valid string lowercase all the character in the string and split the string into an array 

    >>traverse the array while traversing check the character is present in the object or not
      if it is not present in object update the object with  character as key and its value as 1
      if it is present then increment the particular key's value by 1.


   >>finally, return the object  

*/


let str="HArEesh";

console.log("Using Object Approach with Ternary Operator ", FindOccurenceV1(str));

//Using Object
function FindOccurenceV1(str)
{  
    if(typeof str==="string" && str.length>0)
    {
        let resultObject={};
        let CharacterArray=str.toLowerCase().split("");
        
        for(let i=0;i<CharacterArray.length;i++)
        {
             //ternary Operator
            (resultObject.hasOwnProperty(CharacterArray[i]))
            ? 
            resultObject[CharacterArray[i]]=resultObject[CharacterArray[i]]+1 
            : 
            resultObject[CharacterArray[i]]=1;
        
     
        }
         
        return resultObject;
    }
    else
    {
       return "Invalid Input";
    }

}

//using reduce approach
console.log("Using reduce Approach", FindOccurenceV2(str));
function FindOccurenceV2(str)
{
   if(typeof str==="string" && str.length>0)
   {
       
      let result=str.toLowerCase().split("").reduce((acc,curr)=>{
      
            if(acc.hasOwnProperty(curr))
             { acc[curr]=acc[curr]+1;}
            else
             {acc[curr]=1;}
             
              return acc;
      },{});
    
     
    return result;

   }
   else
   {
      return "Invalid Input";
   }


  
}



console.log("Normal Iterating Approach", FindOccurenceV3(str));

function FindOccurenceV3(str)
{
    if(typeof str==="string" && str.length>0)
   {
       let resultObject={};
       let CharacterArray=str.toLowerCase().split("");
       
       for(let i=0;i<CharacterArray.length;i++)
       {
            //ternary Operator
           if (resultObject.hasOwnProperty(CharacterArray[i]))
             resultObject[CharacterArray[i]]=resultObject[CharacterArray[i]]+1 
          else
           resultObject[CharacterArray[i]]=1;
       
    
       }
        
       return resultObject;
   }
   else
   {
      return "Invalid Input";
   }



  
}