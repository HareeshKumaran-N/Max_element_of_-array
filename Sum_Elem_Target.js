let array=[1,,2,7,5,4,6];
let value=9;

//Using difference 


console.log(isTargetPresent2(array,value));



function isTargetPresent2(arr,target)//x+y=target === y=target-x;
{
    let obj={};
  for(let i=0;i<arr.length;i++)
  {
    let diff=target-arr[i];
    if(obj.hasOwnProperty(diff))
    {
          return "Possible";
    }
    else
    {
        obj[arr[i]]=arr[i];
    }
      
  }

  return "Not Possible";
}

//pairs can be found in same manner


var Arr = [1, 2, 7, 5, 4, 6];

var Target = 9;

FindPair(Arr,Target);

function FindPair(arr,target)
{
var obj = {};
for (let i = 0; i < arr.length; i++) {

  var diff = target - arr[i];

  obj.hasOwnProperty(diff) ? console.log(arr[i], diff) : (obj[arr[i]] = arr[i]);

}
}



/*
NEXT QUESTION

-ve numbers should be in last of array and positive should be in same order
[1,2,-1,4,6,7,-3,8]

*/