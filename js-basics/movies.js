const movies = [
    {title:'a', year: 2018, rating: 4.5},
    {title:'b', year: 2018, rating: 4.5},
    {title:'c', year: 2018, rating: 3},
    {title:'d', year: 2017, rating: 4.5},

];

const neww = movies
.sort((a,b)=> {return a.rating-b.rating} )
.reverse(value => value.rating)
.filter(value => ((value.rating>4) && (value.year === 2018) ))
.map(m=> m.title);

console.log(neww);

