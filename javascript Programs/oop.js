class Person{
    //name,age,gender
    constructor(name,age,gender)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    //setPerson=(name,age,gender)=>{
    //    this.name = name;
    //    this.age = age;
    //    this.gender = gender;
    //}
    printPerson=()=>{
        console.log(this.name+this.age+this.gender)
    }
}

var obj = new Person("ajay",25,"male");
//obj.setPerson("ajay",25,"male")
obj.printPerson()
//var obj1 = new Person();
//obj1.setPerson("kalidas",23,'male');
//obj1.printPerson();


//instance variables

console.log(obj.name)
obj.age = 24;

console.log(obj.age)


