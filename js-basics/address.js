// Factory Function
function address(street, city, zipCode){
    return {
    street,    
    city,
    zipCode
    };

}
function Address(street, city, zipCode){
    
    this.street = street,    
    this.city = city,
    this.zipCode = zipCode
    

}


let add = {...new Address('a','b','c')};



function showaddress(add){
    for (let i in add){
        console.log(i, add[i]);
    } 
}

showaddress(add);





