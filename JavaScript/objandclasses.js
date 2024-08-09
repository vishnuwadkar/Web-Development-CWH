//OBJECTS:

//JS objects have special property called protoype which is itself an object which contains some methods
const emp={
    calcfunc(){
        console.log("calcfunc");
    }
};

const teacher={
    name:"John",
};

teacher.__proto__ = emp;    //to inherit the prototype properties from emp object to teacher obj
//prototype type-> reference to an object

//if object and prototype have same method then object's method will be used

//CLASSES:
//Class is a program code template for creating objects 
    
class Cars{     //creating a class Cars using 'class' keyword
    constructor(){  //class constructor which is called as the object is created!
        console.log("Constructor is created!")
    }
    start(){
        console.log("start!")
    }
    stop(){
        console.log("stop!")
    }

    setBrand(brand){
        this.brand = brand;     //here, this means every individual object
    }
};

let fortuner = new Cars();  //Creating anew object of cars class using 'new' keyword
fortuner.start();
fortuner.setBrand("fortuner")
console.log(fortuner.brand);  //output: fortuner

//INHERITANCE IN JS
//inheritance is passing down parent class' method to child class

/*Syntax of Inheritance:
 class Parent{
 
 }
 class Child extends Parent{
 
 }
*/

class Parent{
    constructor(name){
        this.species = "human";
        this.name=name;
    }
    print(){
        console.log("Parent")
    }
    eat(){
        console.log("eats")
    }
}
class Child extends Parent{
    constructor(name){
        super(name)     //passing name from child object arg to parent class constructor in order to set name
        this.age = 25;
    }
    work(){
        super.eat();   //parent class is now super class
        console.log("Works!")
    }
}

let mulga = new Child("Jack");
mulga.print();  //output: Parent which will be inherited from parent class
//if parent class has a method with the same name as child class then parent class method will be overwritten

//if child class and parent class both have constructor, then child class constructor will be used
//if we still want to use Parent class constructor, then the parent class can be referred as 'super()'

//Q. Create a class 'User' with two properties Name and Roll no and create a method 'viewData()' to display the data
class User{
    constructor(name,roll){
    this.roll=roll
    this.name=name
    }
    viewData(){
        console.log("Roll no: ",this.roll)
        console.log("Name: ",this.name)
    }
} 

let Student = new User("Steve",45)
Student.viewData();