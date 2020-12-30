var arr = [10,11,8,9,12,13,14,7,5]
//for(let num of arr)
//{
//    console.log(num)
//}

//arr.forEach(num=>console.log(num))  

console.log("min:"+arr.reduce((num1,num2)=>num1<num2?num1:num2))
console.log("sum:"+arr.reduce((num1,num2)=>num1+num2))


console.log(arr.sort((num1,num2)=>(num2-num1)))

