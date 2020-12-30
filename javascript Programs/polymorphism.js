//many forms

//method overloading
//method overriding

class Maths{
    add = () =>
    {
        console.log("no arg method")
    }
    add = (no1) => 
    {
        console.log("inside single arg method");
    }
    add = (no1,no2) =>
    {
        console.log("inside two arg method");
    }

}

var obj = new Maths();
obj.add(10,20);
obj.add(10);
obj.add();

//method overriding

class Parent{
   
    phone = () => {
        console.log("have nokia 5310");
    }
}

class Child extends Parent{
    phone = () => {
        console.log("have iphone");
    }
}

var ch = new Child();
ch.phone();

