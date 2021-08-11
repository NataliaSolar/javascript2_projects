/*const readline = require('readline-sync');
var radius = readline.question("Enter a radius ");
radius = 5;
const vol = (4/3)*Math.PI*Math.pow(radius,3);
console.log(vol.toFixed(2))*/

const bookPrice = 60*0.6*24.95 + 3 + 59*0.75;
console.log(bookPrice.toFixed(2));



const isLeapYear = (year) =>{
    if (year % 4 ===0 && year % 100 !== 0 && year % 400 === 0){
        return true;
    } else{
        return false;
    }
}

console.log(isLeapYear(1900));
