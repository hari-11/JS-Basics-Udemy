const numbers = [1,2, 1,3,4];

const count = countOccurences(numbers, -1)

function countOccurences(arr, search){
    let coun = arr.filter(value=> (value === search))
    return coun.length;
}

console.log(count)