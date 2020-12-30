var employeedata = [
    [1000,"emp1","devop",1981,1989],
    [1001,"emp2","devop",1980,2002],
    [1002,"emp3","qa",1991,2010],
    [1003,"emp4","ba",1985,1989],
    [1004,"emp5","qa",1981,1995],
]

//q1) print all employee names in uppercase
//q2) print all employee details who are devop
//q3) print all employee details who are working in 1980s
//q4) print exp>9

console.log("q1")
for(let emp of employeedata)
{
    console.log(emp[1].toUpperCase());
}
console.log("q2")
for(let emp of employeedata)
{
    if(emp[2] == 'devop')
    {
        console.log(emp)
    }
}
console.log("q3")
for(let emp of employeedata)
{
    if(emp[3]>=1980 && emp[4]<=1989)
    {
        console.log(emp)
    }
}
console.log("q4")
for(let emp of employeedata)
{  
    if((emp[4]-emp[3])>9)
    {
        console.log(emp)
    }
}