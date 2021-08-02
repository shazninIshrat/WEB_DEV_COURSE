// displaying output
console.log('hello World');
// declaring variable and type
var price = 21; //integer
console.log(typeof price);
var name = 'Lorem Ipsum'; //string
console.log(typeof name);
var price2 = 21.22; //float
console.log(typeof price2);
var isreading = true; //boolean
console.log(typeof isreading);
// string concat
var text1 = 'Good';
var text2 = 'Morning';
var fullText = text1 + ' ' + text2;
console.log(fullText);
// method of strings
var newText = text1.toUpperCase(text1);
console.log(newText); //uppercase

var newText2 = text1.toLowerCase(text1);
console.log(newText2); //lowercase

var sentence = 'My name is ABC';
var newSentence = sentence.replace('ABC', 'EFB');
console.log(newSentence);//replacing words

var newText = text1.charAt(3);
console.log(newText); //indexing 

var newText = text1.repeat(2);
console.log(newText); //repeat

// Conversion
var number1 = 20.5;
var number2 = '10';
var newNumber1 = parseInt(number1);
console.log(newNumber1); //float to integer

var newNumber2 = parseInt(number2);
console.log(newNumber2);

// fixed point
var number3 = 10.4;
var number4 = 10.3;
var total = number3 + number4;
console.log(total);
console.log(parseFloat(total.toFixed(2)));

// mathematical operation
var number5 = 10;
var number6 = 20;
console.log(number5 + number6);
console.log(number5 - number6);
console.log(number5 * number6);
console.log(number5 / number6);
console.log(number5 % number6);
console.log(Math.round(5.56));
console.log(Math.abs(-10));
console.log(Math.floor(5.67));
console.log(Math.ceil(7.1));
console.log(Math.random()); //will generate anynumber
console.log(Math.round((Math.random() * 4)));//generate a number between 0 and 4 

// generating random number when two boundary are given 
var upperBoundary = 50;
var lowerBoundary = 20;
var randomNumber = Math.round(Math.random() * (upperBoundary - lowerBoundary + 1)) + lowerBoundary;
console.log(randomNumber);










