arr = [10,11,12,13,14,15];
var total = 0;
for(let item of arr)
{
    total = total+item;
}

console.log(total)

arr.splice(2,2)

console.log(arr)


arr = [2,4,3,1]
i = 1;
for(let num of arr)
{
  console.log(num**i)
  i = i+1;
}

//sort
var arr = [5,2,4,6,1];
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr)

//arr.sort((num1,num2)=>num2-num1);

//console.log(arr)

//search

var arr = [10,12,14,2,7,0];
var element = 12;
i = 0;
for(let data of arr)
{
    if(data == element)
    {
        console.log("element exists at index "+ i)
    }

    i++;
}

