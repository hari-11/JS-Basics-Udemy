let courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

const course = courses.findIndex(function(element){
    return element.name === 'a'
});

console.log(course)