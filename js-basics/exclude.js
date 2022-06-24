// objective is to exclude the list of arr from numbers list
const numbers = [1,2,3,4];

const output  = except(numbers, [4,1]);

function except(numbers, arr) {
    return numbers.filter(value =>(!arr.includes(value)));
}

console.log(output);