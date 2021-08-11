// Natalia Solar Assignment 7

/*Annual interest rate = .12
Monthly interest rate= (Annual interest rate) / 12.0
Minimum monthly payment = 20
Monthly unpaid balance = (Previous balance) - (Minimum monthly payment)
Updated balance each month = (Monthly unpaid balance) + (Monthly interest rate x Monthly unpaid balance) */



/*let balance = 1000;
let annualInterestRate = 0.12;
let monthlyPaymentRate = annualInterestRate/12.0;
let minimumMonthlyPayment = 20;

let previousBalance = balance;

for(let i = 1; i <= 12; i++){

    monthlyUnpaidBalance = (previousBalance) - (minimumMonthlyPayment);
    updatedBalance = monthlyUnpaidBalance + (monthlyPaymentRate * monthlyUnpaidBalance);
    previousBalance = updatedBalance;
}

balance = updatedBalance.toFixed(2);

console.log(balance);*/

arr = [1,2,3,4,5,6,7,8]



function randomize(arr) {
    let max = arr.length - 1;
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
    }

    for(let i = 0; i < arr.length; i++){

        let rand = Math.floor((max - 1)* Math.random() + 1);
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];

    }
    return newArr;
  }

  console.log(randomize(arr))
  console.log(arr)
  function sum(arr){
    let total = 0;
    let avg = 0;

    for(let i = 0; i < arr.length; i++){
        total +=  arr[i];
    }
    avg = total/arr.length
    return avg;
  }

  console.log(sum(arr))



arr = ["test", "me", "hello", "wow"];
test = "e";	

function containsKeyWords(arr, test){
    let testLen = test.length;
    let wordLen;
    let same = true;
    let answer = '';

    for(m = 0; m < arr.length; m++){
        wordLen = arr[m].length;
        for(let i = 0;  i < wordLen - testLen + 1; i++){
            let k = 0;
            for(let j = i; j < i + testLen; j++){

                if(arr[m][j] != test[k]) same = false;
                k++;
            }

            if(same === true) answer += arr[m] + ', ';

            same = true;
        }
    }
    return answer;

}

		 
console.log(containsKeyWords(arr, test)); //should return 'test', 'me', hello'


test= ["hello","test1","hahaha","hello","hello","test1"];
keyword = 'hello';

function findOccurences(test, keyword){
    let count = 0;
    let newArr = [];

    for(m = 0; m < test.length; m++){
        
        if(test[m] === keyword){
            count ++;
            if (count > 2) newArr.push(test[m]);
        }else{
            continue;
        }    
    }

    return newArr;
}

console.log(findOccurences(test, keyword));

function displayDigit(number) {
let output = [];
while(number > 0 ){
    output.unshift(number%10);
    number = Math.floor(number/10);
}
return output;
}

console.log(displayDigit(12345))