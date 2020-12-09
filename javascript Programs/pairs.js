var  arr = [1,2,3,4,5,6] 

low = 0;
upper = arr.length-1;
element = 7;
while(low<upper)
{
    let total = arr[low] + arr[upper];
    if(element < total)
    {
       upper = upper-1;
    }
    else if(element > total)
    {
       low = low+1;
    }
    else if(element == total)
    {
      console.log("pairs: ("+arr[low]+","+arr[upper]+")");
      low = low+1;
    }
}