/*class Parent{

    phone = () => {
        console.log("i have nokia 5530")
    }

}

class Child extends Parent{

}

var ch = new Child();
ch.phone(); */

//multilevel

class Parent{

    m1 = () => {
        console.log("inside Parent")
    }

}

class Child extends Parent{

    m2 = () => {
        console.log("inside Child")
    }

}
class Subchild extends Child{

    m3 = () => {
        console.log("inside Subchild")
    }

}

var sb = new Subchild();
sb.m3();
sb.m2();
sb.m1();