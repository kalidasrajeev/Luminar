var num = 2;
var lower = 8;
var upper = 40;
for(let i = 1;;i++)
{
    let res = i**num;
    if(res>40)
    {
        break;
    }
    if(res>lower && res<upper)
    {
        console.log(res)
    }
        
}

//lower=10 upper=50 print all prime number between low to upper 

