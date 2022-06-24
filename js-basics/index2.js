let num, land;
function max(a,b){
    return (a>b) ? a: b;
}
 num= max(3,2);

function isLandscape(width, height){
    return (width> height);
}

land = isLandscape(10,2);

console.log('islandscape', land);
console.log('max', num);

