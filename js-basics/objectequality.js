let address1 = address('a', 'b','c');
let address2 = address('a', 'b','c');
let address3 = address1;

function address(street, city, zipCode){
    return {
    street,    
    city,
    zipCode
    };

}

function areEqual(address1, address2){
    for (let i in address1){
        if (address1[i] === address2[i]) continue;
        else return false;
    }
    return true;
}
function areSame(address1, address2){
    return (address1 === address2);
}
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));