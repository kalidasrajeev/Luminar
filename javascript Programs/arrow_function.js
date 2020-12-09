function add(x,y)
{
    return x+y;
}

let res = 10+20;
console.log(res);

//arrow_function, lambda function
//nameless functions

let add1 = (num1,num2)=>num1+num2;
console.log(add1(10,20));


let sub = (num1,num2)=>num1-num2;
console.log(sub(10,20));


let setValue = (age,name)=>{
    this.age = age;
    this.name = name;
}


let fact1 = (num1)=>
{    
    let fact = 1;
    for(let i=1;i<=num1;i++)
    {
        fact = fact*i;
    }
    return fact
}

console.log(fact1(4))