//To find longest word from a string using custom code
/*
   Split the String by spaceso that we will get array of strings.
   iterate the array.
 
    to store the current length  and current word, we have a  two variables. 

   if the length is greater than the current length , update the length and stroe the current string.
*/

/* 
  Approaches:

  v1 - Normal loop approach.
  v2 - reduce method.
  v3 - Object approach.
  v4 - filter approach.
  v5 -sorting approach. 

*/

let str=" Morena1 Morena2 Hello my name is Ankit Jain & i'm from Pneumonoultramicroscopicsilicovolcanoconiosis";



console.log("Normal Iterating Approach",longestStringV1(str));

function longestStringV1(sentence)
{
   let arr=sentence.split(" ");
   let current_length=0;
   let current_string;
      
   for(let i=0;i<arr.length;i++)
   {
       if(arr[i].length>=current_length)
       {
        current_length=arr[i].length;
        current_string=arr[i];
       }
   }

   return current_string;

   
}

//Using Filter method.
console.log("Using Filter method",longestString2(str));
function longestString2(sentence)
{
    let arr=sentence.split(" ");
    let current_length=0;
    let current_string;
    let newarr=arr.filter((word)=>{
        if(word.length>=current_length)
        {
            
         current_length=word.length;
         current_string=word;
         
         
         return current_string;
          
        }
    });
    
    return newarr[newarr.length-1];
}


//using the reduce method


console.log("Using reduce ",longestStringV3(str));
function longestStringV3(str){

   let result=str.split(" ").reduce((accumulator,current_string)=>{
      if(current_string.length>=accumulator.length)
      { return current_string; }

      
      return accumulator;

      
      
   },"")
  
return result;
}


//Object Approach
console.log("By Object Approach:- ",longestStringV4(str));

function longestStringV4(str)
{
   let stringArray=str.split(" ");
   let resultObject={};

   for(let i in stringArray)
   {
        resultObject[stringArray[i].length]=stringArray[i];
        
   }

    //finding the largest key in object;

    let Object_keys=Object.keys(resultObject);
    
    let largestKeyLength=0;
    for(let i in Object_keys)
    {
         if(+Object_keys[i] > largestKeyLength)
         largestKeyLength=+Object_keys[i];
    }

   return resultObject[largestKeyLength];

}


//sorting approach 
console.log("sorting approach:- ",longestStringV5(str));
function longestStringV5(str)
{
 
   return (str.split(" ").sort((a,b)=> a.length-b.length))[str.split(" ").length-1] ;
   

}