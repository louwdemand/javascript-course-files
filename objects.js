What are JavaScript Objects?
Objects are variables that can store both values and functions.

Values are stored as key:value pairs called properties.

Functions are stored as key:function() pairs called methods.

Real Life Comparison
In real life, we can describe subjects as objects (a car, a person, a house)

Car Object

Car Properties	Car Methods
car.name = Fiat

car.model = 500

car.weight = 850kg

car.color = white	car.start()

car.drive()

car.brake()

car.stop()
Different cars have the same properties, but the property values can differ from car to car.

Different cars have the same methods, but the methods can be performed at different times.

Object Example
This code example assigns many values (Fiat, 500, white) to an object named car:

Example
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
Note
type, model, and color are properties

"Fiat", 500, and "white" are property values

Object Literal
An object literal "literally" describes an object using a concise syntax with zero or more key:value pairs inside curly braces to describe all the object properties:

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
How to Create a JavaScript Object
An object literal is the simplest and most common way to define a JavaScript object.

All the examples below, create the same JavaScript object:

Example 1
// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Spaces and line breaks are not important. An object literal can span multiple lines:

Example 2
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
You can also create an empty object, and add the properties later:

Example 3
// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Note
You should declare objects with the const keyword.

Using the new Keyword
Example 4
Create a new JavaScript object using new Object():

// Create an Object
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});
Note:
There is no need to use new Object().

For readability, simplicity and speed, use an object literal instead.

REMOVE ADS

Object Properties
You can access object properties in two ways:

Dot notation
Bracket notation
Dot Notation
objectName.propertyName
person.firstName;
Bracket Notation
objectName["propertyName"]
person["firstName"];
JavaScript Object Methods
Objects can also have methods.

Object methods are actions that can be performed on objects.

Object methods are function definitions stored as property values:

Example
const person = {
  firstName: "John",
  lastName : "Doe",
  age      : 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
Property	Property Value
firstName	John
lastName	Doe
age	50
fullName	function() {return this.firstName + " " + this.lastName;}
Note
In an object method, this refers to the object.

In the example above, this refers to the person object:

Learn More:
What are Object Properties?

What are Object Methods?

What is this in Objects?

How to Display Javascript Objects

What is an Object Constructor?

Summary
Objects are containers for Properties and Methods
Properties are named Values stored as key:value pairs
Methods are Functions stored as key:function() pairs.
In JavaScript, Objects are King
If you Understand Objects, you Understand JavaScript.
In JavaScript, almost "everything" is an object:

Objects are objects
Maths are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
RegExp are Objects
Errors are Objects
All JavaScript values, except primitives, are objects.

JavaScript Primitives
A primitive data type is data type that can only store a single primitive value.

JavaScript defines 7 types of primitive data types:

Type	Example value
string	"Hello"
number	3.14
boolean	true
bigint	12345678901234
null	null
undefined	undefined
symbol	symbol
