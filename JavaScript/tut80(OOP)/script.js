let obj = {
    a: 1,
    b: "Harry"
}
console.log(obj)

let animal = {
    eats: true,
};
let rabbit = {
    jumps: true
};
//even rabbit eats, so in order to get animal's properties to rabbit we set its prototype
rabbit.__proto__ = animal;      //sets rabbit.[[Protoype]] = animal

class Animal{
    constructor(name){
        this.name = name    //this keyword creates properties in an object
        console.log("Object is created!")
    }
    eats(){
        console.log("Khaa raha hu!")
    }
    jumps(){
        console.log("Kud raha hu!");
    }
}
let a = new Animal("Bunny");
console.log(a);
console.log(a.name)
console.log(a.jumps);

//lets create another class that has some properties of animal class

class lion extends Animal{      //'extends' key word is used to inherit properties of Animal class
    constructor(name){
        //normally this wont run because lion class is extended from animal so we also need to call animal's constructor
        //for this use super(parameter)
        super(name)     //calls parent class' constructor
        this.name = name
        console.log("Object is created for lion")
    }
    //we add another eats method which is also present in parent class
    eats(){
        //the parent class is now super() class
        //so if we want the parent class method,then
        super.eats()    //this will run parent (super) class' eats
        console.log("Lion khaa raha hu!")   //thus lions method is overridden
        //if we print a.eats, it will run animal's constructor
        //if we print l.eats, it will run lion's constructor
    }
}

let l=new lion("Shera") //its prototype is Animal
console.log(l)
console.log(a.eats)
console.log(l.eats)

//INSTANCEOF keyword
console.log(l instanceof lion)  //tells if 'l' object is created from lion class or not
console.log(l instanceof Animal)    //even this will print true since lion class is inherited from Animal
//a instanceof lion will print false!

