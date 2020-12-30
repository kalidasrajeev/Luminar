//20000,18000,22000,19000,25000,30000,32000,20000,18000,22000,19000,25000
var expense = {jan:20000,feb:18000,mar:22000,apr:19000,may:25000,jun:30000,jul:32000,aug:20000,sep:18000,oct:22000,nov:19000,dec:25000}
console.log(expense["feb"])
console.log(expense.feb)
//array => searching difficult
//object


var students = {
    rol: 100,
    name: 'ajay',
    course: 'bca',
    total: 140,
    sid: 100
}


for(let key in students)
{
    console.log(key+":"+students[key])
}


console.log("course" in students)
console.log("gender" in students)

//adding a new key value pairs into object

students["gender"] = "male";

console.log(students)

//adding 50 more to total

students["total"] += 50; 

console.log(students)






