/*
Write a function that takes a number 
If the number is divisible by 3, return "FIZZ"
IF the number is divisible by 5, return "BUZZ"
If the number is divisible by 3 & 5, return "FIZZBUZZ"
Otherwise, return null.
*/

function fizzBuzz(number){
    if(number % 3 === 0) {
        return "FIZZ";
    }
}

console.log('3 should return FIZZ', fizzBuzz(3));
console.log('3 should return FIZZ', fizzBuzz(36));
