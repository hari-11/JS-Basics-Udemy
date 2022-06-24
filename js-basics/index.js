// first code
function greet(name){
    console.log('Hello ' + name);
}

function square(number){
    return number*number
}
greet('John');
console.log(square(24));

let x = 10;
let y = 3;

console.log(x++);
console.log(x);

// === strict equality same type and value
console.log(x===1);
console.log(x!==1);

// == loose equality 
console.log('1'==1);

let points = 90;
type = points >100 ? 'gold': 'silver';
console.log(type);