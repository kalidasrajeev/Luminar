var pattern= "ABABBC";
var obj = {};
for(let char of pattern)
{
    if(char in obj)
    {
       console.log(char);
       break;
    }
    else
    {
        obj[char]=1;
    }
}