
let arr=[1,2,3,1,42,5,3,25];
// let arr=[];
console.log(largestElem(arr));

function largestElem(arr)
{
    if(! (arr instanceof Array) )
    {
        return "Invalid input" ;
    }
    else
    {

    if(arr.length==0)
    {
       return "array cannot empty";
    }
    else
    {   

    let max=0;
            for(let i=0;i<arr.length;i++)
            {
                if(arr[i]>max)
                max=arr[i];
            }   
         return max;
    }
   
    }
}