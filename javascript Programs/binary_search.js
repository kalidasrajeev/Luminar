var arr = [10,11,12,13,14,15,16,16,17];
//element = 16;
//step1
//low = 0
//upper = 7
//mid = 3

//step 2
//calculate mid = {low+upper}/2 = 3

//step 3
//case 1
// if(element>arr[mid])

//case 2
//if(element<arr[mid])


//element == arr[mid]

arr.sort((num1,num2)=>num1-num2)
var element = 16;

var low = 0;
var upper = arr.length-1;
var flag = 0;

while(low<=upper)
{
    mid = Math.floor((low+upper)/2)

    if(element>arr[mid]){
      low = mid+1;
    }
    else if(element<arr[mid])
    {
        upper = mid-1;
    }
    else if(element == arr[mid])
    {
          flag+=1;
          break; 
    }
}

if(flag == 0)
{
   console.log('element not found');
}
else
{
   console.log('element found');
}