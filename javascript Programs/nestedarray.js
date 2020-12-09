var employees = [
    [100,'ajay','developer',25000],
    [101,'vijay','developer',15000],
    [102,'aju','qa',30000],
    [101,'vijay','developer',25000],
]
//console.log(employees[0][1])
var total = 0;
for(let emp of employees)
{
    total = total+emp[3];
}

console.log(total)