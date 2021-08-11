function validateCreditCard(cardNumber){
    //get rid of the '-'
    let num = cardNumber.split('-').join('');
    console.log(num);


    //check if the number is 16 digits long, if the number contains only digits if the last digit is even
    let myreg = /[0-9]{15}[0|2|4|6|8]$/;

    if(!myreg.test(num)){
        console.log('Not long ehough, or contains invalid characters or the last is odd')
        return false;
    }
    
    //get the sum of all digist and check if it's greater than 16
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    if(sum < 16){
        console.log('The sum of all digits must be greater than 16')
        return false;
    }

    //check if the card number has only one type of number
    let areEqual = true;
    for(let i = 0; i < num.length -1; i++){
        if(num[i] != num[i+1]) areEqual = false
    }
    if(areEqual) 
    {
        console.log('The card number must have at least two different digits represented');
        return false;
    }
    return true;
}



console.log(validateCreditCard('9999-9999-8888-000') + '\n');//not long ehough
console.log(validateCreditCard('99a9-99b9-8c88-0000') + '\n');//contains invalid characters
console.log(validateCreditCard('6666-6666-6666-6661') + '\n');//odd final number
console.log(validateCreditCard('1111-1111-1111-1110') + '\n'); //sum less than 16
console.log(validateCreditCard('4444-4444-4444-4444') + '\n');// only one type of number
console.log(validateCreditCard('9999-9999-8888-0000') + '\n');//ok
console.log(validateCreditCard('6666-6666-6666-1666') + '\n');//ok



//Create a shoppingCart objet 
class shoppingCart{
    constructor() {
        this.list = new Array();
    }
    //method to add items to the cart
    addItem(item) {
        this.list.push(item);
    }
}
//item class that stores item name and price
class item{
    constructor(name,price) {
        this.itemName = name;
        this.itemPrice = price;
    }
}

 function cashRegister(shoppingCart){
    let totalPrice = 0;

    for(let i = 0; i < shoppingCart.list.length; i++){
        totalPrice += shoppingCart.list[i].itemPrice;
    }
    return totalPrice;
 }

 //create instances of items
let item1 = new item('Organic milk', 3.50);
let item2 = new item('Eggs', 2.35);
let item3 = new item('Breakfast Cereal', 1.50);
let item4 = new item('Potatoes', 6.25);
let item5 = new item('Groung Beef', 5.20);

//create shopping cart object and add items in it
let myCart1 = new shoppingCart();
myCart1.addItem(item1);
myCart1.addItem(item2);

console.log(myCart1);
console.log('Total Price: $' + cashRegister(myCart1) + '\n');//total price 5.85


let myCart2 = new shoppingCart();
myCart2.addItem(item3);
myCart2.addItem(item4);
myCart2.addItem(item5);

console.log(myCart2);
console.log('Total Price: $' + cashRegister(myCart2));  //total price 12.95om ,




