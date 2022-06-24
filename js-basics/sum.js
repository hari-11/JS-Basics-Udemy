let limit = 10;
function sum(limit){
    sum = 0;
    for (let i = 0; i<=limit; i++){
        if ((i%3 === 0 ) || (i%5 === 0)) sum+=i;
        
    } 
    console.log(sum);
}

sum(limit);

