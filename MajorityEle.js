/*
ALgo

*/
// let arr=[2,2,1,1,1,2,2];
let arr=[3,2,3];
let obj={};
for(let i=0;i<arr.length;i++)
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

console.log(obj);

for(let key in obj)
{
    if(obj[key] > (arr.length/2))
    console.log(key);
}