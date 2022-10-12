/*
Algorithm:-

 function will take a string as a parameter
  
 >>split the string into array using split()
                                                and 
                                                        reverse the array using reverse()
                                                                                     and   
                                                                                            joining the array elements to form a reversed string using join() .


 >> Then simply check the original string and a reversed string using " === " . 

*/



function isPalindrome(og)
 {

        if (og===undefined) return "Input cannot be undefined";//to check whether parameter passed
     
        if(typeof og !="string") return "Input should be String";//to  check the input is string
        
        if(og.length===0)    return "Input cannot be empty";//to check string is empty
        

         
        let rev=og.split("").reverse().join(""); 
      
        return ( rev=== og )? "Palindrome" : "Not a Palindrome" ;
 }



console.log(isPalindrome(""));

console.log(isPalindrome());

console.log( isPalindrome("malayalam"));

console.log( isPalindrome("Card"));

console.log( isPalindrome({}) );
