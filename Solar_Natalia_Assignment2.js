const readline = require('readline-sync');
let input = readline.question('Please enter a number? ');
let output = '';
output = Number(input).toString(2);
console.log(input + ' is the same as ' + output);

let result = input;
let output2 = '';
while(result>=1){
    output2 = result%2 + output2;
    result = (result-result%2)/2;
}
console.log(input + ' is the same as ' + output2);