var i=1;
var sum = 0;
while(i<=50)
{
    if((i%2)!=0)
    {
        sum = sum+i;
    }
    
    i++;
}

console.log(sum)

var num = 123;
var res = "";
while(num != 0)
{
   let newnum = num%10;
   res = res+String(newnum);
   num = Math.floor(num/10);
}

//console.log(res)
//123 = 1**3+2**3+3**3; 


var num=123;
var sum = 0;
while(num != 0)
{
   let newnum = num%10;
   sum = sum + (newnum*newnum*newnum); 
   num = Math.floor(num/10);
}

console.log(sum)