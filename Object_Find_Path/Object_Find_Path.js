/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/



//Algorithm 
/*

  Given: function findPath(),which takes object and string which is the path  as parameter 
        
 In function :-

        >>Path is retrieved by using split method which returns an array which is named "path_array" 
        >>And a identifier "temp_obj" will hold the actual object ,using ...spread operator.
        
        >>And I traverse the path _array ,were path array has the key from that we can check if the key is present or not
          >> if the key is not present we can simply return undefined 

          >> else if the  key holds a value we can simply return it.
          >> else if the holds object as its value then change the value of temp_obj to current index object using spread operator.so that we iterate the nested objects.

        



  
*/




var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
   
   
   let arr=path.split('.');
//    console.log(arr);
   let temp_obj={...object};



for(let i=0;i<arr.length;i++)
{    
    let curr_key=arr[i];
    // console.log(arr[i]);
    // console.log(temp_obj);
   if(temp_obj.hasOwnProperty(curr_key) )
   {
      if(typeof temp_obj[arr[i]] === "object" && temp_obj[arr[i]]!==null) 
          {
               
              temp_obj={...temp_obj[curr_key]};//shallow copy of the object
            //  console.log(temp_obj);
            
            if(i===arr.length-1)
            return temp_obj;
            
              
          }
       else
           {
             // console.log(temp_obj[curr_key]);
              if(i===arr.length-1)
               return temp_obj[curr_key];
           
           }
   }
   else
       {
         return undefined;
       }
}

};





console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
console.log(findPath(obj, 'b.k')); //undefined