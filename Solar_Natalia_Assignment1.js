/* 
Declare a variable named aStr and assign a value of '-5' to this variable
Declare a variable named aNumberConver the aStr from the string to the number data type (base 10) and assign this value to the aNumber variable.  
Use a Number function (e.g. Number(aStr))
Declare another variable named posNum and assign the absolute value of the aNumber variable to this variable.  
Use abs function (e.g. Math.abs(posNum))
Print out the value of the posNum to the console. 
 Using the console.log function*/
 
//Problem 1
let aStr = '-5';
let aNumber;
aNumber = Number(aStr);
let posNum = Math.abs(aNumber);
console.log(posNum)

/* Write an expression to convert a Fahrenheit to Celsius using the following pseudocode. 
 We can hard code the value for celsius in this assignment.  
Later, we will learn how to accept input from a console
declare variable celsius and assign a value of 10 to the celsius variable
fahrenheit = (9 / 5) * celsius + 32
print the result to the console using console.log()
console.log(fahrenheit);*/

//Problem 2
let celsius = 10;
fahrenheit = (9 / 5) * celsius + 32;
console.log(fahrenheit);

/*Compute the volume of a cylinder using the following pseudocode. 
We can hard code the value for the radius in this assignment.  
Later, we will learn how to accept input from a console.  
You can choose a few random values for the radius variable and test and validate your program's correctness.

declare variable radius and assign a value of 5 to the radius

declare a constant PI and assign a value of 3.14 to the PI constant (using keyword constant)

area = radius * radius * PI
volume = area * length

print the result to the console using console.log()

console.log(volume); */

//Problem 3
let radius = 5;
const PI = 3.14;
let length = 1;
let area = radius * radius * PI;
let volume = area * length;
console.log(volume);

