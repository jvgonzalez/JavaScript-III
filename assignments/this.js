/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of “this” will be the window/console Object //the value of "this" will be the console object when it is on the global scope
* 2. Whenever a function is called by a preceding dot, the object before that dot is this. //
* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function. // when using a constructor function "this" is specific to that oject which was created are returned.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.// 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("MJ");


// Principle 2

// code example for Implicit Binding

var me = {
name : "Jose",
age : 22,
    sayName(){
        console.log(this.name)
    }
};

// Principle 3

// code example for New Binding
 
var Cars = function(make,model,type){
    this.make = make;
    this.model = model;
    this.type = type;
}

var Audi = new Cars ("Audi", "S4", "Coupe");

console.log(Audi);

// Principle 4

// code example for Explicit Binding

var sayName = function(){
    console.log("My name is " + this.name );
};

var John = {
    name: "John",
    age : 42
};

sayName.call(John);