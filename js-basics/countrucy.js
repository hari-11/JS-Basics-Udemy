const array = [2,3,4, '', NaN];

function countTruthy(array){
    let count=0;
    for (i of array){
        if (!(['', null, false, NaN, undefined, 0].includes(i))) count+=1; 
    }
    return count; 
}

console.log(countTruthy(array));