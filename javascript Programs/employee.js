var employee = {
    eid: 100,
    name: "john",
    desig: "developer",
    salary: 25000
}

console.log("gender" in employee)

employee["gender"] = "male";

employee["salary"] += 5000;

console.log(employee)

for(let emp in employee)
{
    console.log(emp,":",employee[emp])
}

