const numbers = [1,2,3,4];

const output = move(numbers, 0, 0);

function move(arr, index, offset){
        let copy = [...arr];
        arr.splice(index,1);
        let new_copy = copy[index];
        
        
        if ((offset+index) < 0 || (offset+index) > copy.length) return console.error('Invalid');
        else {arr.splice(offset+index,0, new_copy)
        return arr;}
        

    }

console.log(output);