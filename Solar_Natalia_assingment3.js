/*function sumDigit(n) {

   <Your code here>

  return <result>;

}
sumDigits(234) returns 9; // (2 + 3 + 4)
sumDigits(222) returns 6; // (2 + 2 + 2)
sumDigits(1234) returns 10; // (1 + 2 + 3 + 4)

*/
function sumDigit(n) {
    let str =n.toString();
    let sum = 0;
    for(let i = 0; i < str.length; i++){

        sum += Number(str[i])
    }     
   return sum;
}


console.log(sumDigit(234));
console.log(sumDigit(222));
console.log(sumDigit(1234));