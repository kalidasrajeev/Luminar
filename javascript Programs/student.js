var students = [
    [100,'ajay','bca',140],
    [101,'vijay','bca',145],
    [102,'aju','mca',150],
    [101,'vinay','mca',155],
]
//console.log(employees[0][1])
var total = 0;
for(let stud of students)
{
    stud[1] = stud[1].toUpperCase();
    console.log(stud[1])
}

var count = 0;
for(let stud of students)
{
    if(stud[2] == 'bca')
    {
        count = count+1;
    }
}

console.log(count)

//sum of total group by bca

var total = 0;
for(let stud of students)
{
    if(stud[2] == 'bca')
    {
        total = total+stud[3];
    }
}

console.log(total)

//print details of student who have highest total
var highest = 0;

for(let stud of students)
{
   if(highest < stud[3])
   {
       highest = stud[3];
   }
}

for(let stud of students)
{
   if(stud[3] == highest)
   {
       console.log(stud)
   }
}



