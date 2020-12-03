var num1=20;
var num2=50;
var num3=100;

if(num1>num2 && num1>num3)
{
    if(num2>num3)
    {
        console.log("num2 is 2nd greatest");
    }
    else
    {
        console.log("num3 is 2nd greatest");
    }
}
else if(num2>num1 && num2>num3)
{
    if(num1>num3)
    {
        console.log("num1 is 2nd greatest");
    }
    else
    {
        console.log("num3 is 2nd greatest");
    }
}

else if(num3>num1 && num3>num2)
{
    if(num1>num2)
    {
        console.log("num1 is 2nd greatest");
    }
    else
    {
        console.log("num2 is 2nd greatest");
    }
}
else
{
    console.log("All are equal")
}

