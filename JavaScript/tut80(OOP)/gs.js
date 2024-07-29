//getters and setters are used to get & set the computed properties 
class User{
    constructor(name){
        // invokes the setter
        this.name = name;
    }

    set name(value){
        if(value.length<4){
            console.log("name is too short!")
            return;
        }
        this._name = value;
    }
};
//implementation
let user = new User("John");
console.log(user.name);   //alerts John
user = new User("")     //Name is too short!
//or 
// user.name = "xyz"   //setter will run
