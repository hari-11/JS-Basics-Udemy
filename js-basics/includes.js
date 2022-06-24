const numbers = [1,2,3,4];

function includes(arr, s){
    for (let i in arr){
        if (s === arr[i]) return true;
        

    }
    return false;
}

console.log(includes(numbers, 7));