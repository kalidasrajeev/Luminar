class student
{
    constructor(rol,name,course,total){
        this.rol = rol;
        this.name = name;
        this.course = course;
        this.total = total;
    }
    printStudent=()=>{
        console.log("Roll No:"+this.rol)
        console.log("Name:"+this.name)
        console.log("course:"+this.course)
    }
}

var obj = new student(100,"akhil","mca",145)
var obj1 = new student(101,"akshay","bca",135)
var obj2 = new student(102,"binish","mca",147)
var obj3 = new student(103,"cinto","mca",130)
var obj4 = new student(104,"dinil","MEAN",140)

//print all student names
var students = [obj,obj1,obj2,obj3,obj4];

//students.push(obj)
//students.push(obj1)
//students.push(obj2)
//students.push(obj3)
//students.push(obj4)

//students.map(obj=>console.log(obj.name))

//students.filter(obj=>obj.course == "mca").forEach(obj=>console.log(obj.name))

students.filter(obj=>obj.total>143).forEach(obj=>console.log(obj.name))

console.log(students.map(obj=>obj.total).reduce((t1,t2)=>t1>t2?t1:t2))

var sor=students.sort((o1,o2)=>o1.total>o2.total?-1:1)
console.log(sor)


