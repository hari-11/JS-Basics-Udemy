let number;
function fizzBuzz(num){
    if (typeof num !=='number') return 'Not a number';
    else if ((num%3 === 0) && (num%5 ===0)) return 'FizzBuzz';
    else if (num%3 === 0) return 'Fizz';
    else if (num%5 === 0) return 'Buzz';
    else if ((num%3 !== 0) || (num%5 !==0)) return num;
    
}

number = fizzBuzz(15);
console.log(number);
