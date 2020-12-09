var num = "10";
num = Number(num); //Typecast

function add(num1,num2)
{
  var res = num1+num2;
  console.log(res);
}


add(10,20);


function sub(num1,num2)
{
    var res=num1-num2;
    console.log(res);
}

sub(10,20);


function mul(num1,num2)
{
    var res=num1*num2;
    console.log(res);
}

mul(10,20);

//create function to find factorial of a number
function fact(num1)
{    
    let fact = 1;
    for(let i=1;i<=num1;i++)
    {
        fact = fact*i;
    }
    console.log(fact)
}


fact(4);