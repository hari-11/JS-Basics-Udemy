const numbers = [10,2,5,4];

const max = getMax(numbers);

function getMax(arr){
    return arr.reduce((a,b) => a>b ? a: b)
}

console.log(max)