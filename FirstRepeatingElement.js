/*
  
Iterate the array 
make an object
         >>using hasOwnProperty 
           >> if it is not in the object put the key , if the repeating element comes we can break the loop since the key is already present.
*/ 

let arr=[1,2,3,4,2,1];
obj ={};

for(let i=0;i<arr.length;i++)
{
    if(obj.hasOwnProperty(arr[i]))
    {
        console.log(arr[i]);
        break;
      
    }
    else
    {
       

        obj[arr[i]]=true;
    }
}