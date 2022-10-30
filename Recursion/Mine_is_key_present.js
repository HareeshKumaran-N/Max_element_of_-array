let obj=
{
    
fname: "Hareesh",
lname: "Kumaran",
isActive: false,
Info: {
  country: "India",
  state: "TN",
  favs: {
    actor:"KH",
    favPlayers: {
      cricketTeam: "Dhoni",
      footBall: "Ronaldo",
    },
  },
},
};

console.log(isKeyPresent(obj,"fotBall"));


function isKeyPresent(obj,xkey)
{

    if(obj.hasOwnProperty(xkey))
     {
        return true;
     }

     for(let key in obj)
     {
        if(typeof obj[key] ==="object")
        {
            let result=isKeyPresent(obj[key],xkey);
            if(result)
            {
                return true;
            }

        }
        
     }

     return false;


}

