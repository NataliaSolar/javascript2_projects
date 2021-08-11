var str = '15';
console.log(parseInt(str,10));
console.log(parseInt(str,2));
console.log(parseInt(str,8));
console.log(parseInt(str,16));

const fah = 33.578;
const  cel = (5/9) * (fah -32);
console.log(cel);

const tf = (9/5) * cel +32;

//console.log(tf);
//console.log(fah);
//console.log(Math.abs(tf - fah) <= 0.0001);
//console.log(typeoftf.toFixed(2));
//console.log(Number(tf.toFixed(2)) === Number(fah.toFixed(2)));
let windspeed = 45;
windchill =(12.1452 + 11.6222 * Math.sqrt(windspeed) - 1.16222 * windspeed) * (33 - cel);
console.log(windchill);
console.log(0.1 + 0.2 == 0.3);

let arr = ["test1", "test2"];
arr.unshift('1');
console.log(arr)

///let arr3 = new Array(5);

///let arr1 = [];

let arr2 = Array(5);

var x = 10;

var y = 20;

var z = "" + x + y;
console.log(z)
console.log(null == undefined);

function print() {
    console.log(a);
    let a = 5;
  }
  print();
 /* var str = "This is a JavaScript string";

var res2=str.slice(-6);
console.log(res2);


//arr = [1,2,3,4,5];
//Implement a function that returns a new array that contains only even numbers
function even(arr) {
   let newarr = [];
   for(let i = 0; i <arr.length; i++){
       if(arr[i]%2 === 0){
           newarr.push(arr[i])
       }
   }
   return newarr;
}

console.log(even(arr))

var str = "This is a JavaScript string";
var res = str.substr(5, 2);
console.log(res);




/*Implement a function named extractName that extracts the first name and last name from a given name. 

The function accepts a string and returns an array that stores the first then last name.

Assume that the given first and the last name is separated by a single white space.

You should test your function and it should pass the following two tests */

// function extractName(name){
//     return name.split(' ');
// }

// console.log(extractName('John Doe'));
// console.log(extractName('Mary Smith'));

// arr = [1,2,3,4,5,6,7,8,9]

//const randNumber = (max - min) * Math.random() + min

// function shuffle(arr) {
//     let max = arr.length -1;
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         let randNumber = Math.floor((max - i) * Math.random() + i);
//         let temp = arr[i]
//         arr[i] = arr[randNumber]
//         arr[randNumber] = temp
//     }

//     return arr;
// }

// console.log(shuffle(arr))


/*let fruits = ["Apple", "Orange"];
let another = fruits;
another.push("Pear");
console.log( fruits );*/
//a e i u o
// function containsVowels(str) {
//     for(i=0; i<str.length; i++){
//         if(str[i]==='a'|| str[i]==='e' || str[i]==='i'|| str[i]==='u' || str[i]==='o'){
//             return true;
//         }
//     }
//     return false;
//     }

//     str1 = 'hello';
// console.log(containsVowels(str1)); // should print true;

// str2 = 'mnht';
// console.log(containsVowels(str2)); // should print false;

// arr = [1,2,3,4,5]
// function average(arr) {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }

// console.log(average(arr))


// let fruits = ["Apple", "Orange"];
// for (item in fruits) {
//   item += "reset";
// }
// console.log(fruits);

// (function(){
// console.log("Hello World")
// }());