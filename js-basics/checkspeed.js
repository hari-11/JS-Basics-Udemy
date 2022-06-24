let check;
function checkSpeed(speed){
    const speedLim = 70;
    if (speed<=speedLim) return 'Ok';
    else if (speed>speedLim) {
        if ((Math.floor((speed-speedLim)/5) >= 1) && (Math.floor((speed-speedLim)/5) < 12)) {
            return  Math.floor((speed-speedLim)/5);  
        }
        

        else if (Math.floor((speed-speedLim)/5) >= 12){
            return 'suspended'

        }

        return 'Ok';
    }
}

check = checkSpeed(73);
console.log(check);
