var courses = [
    {
        id: 1,
        name: 'PHP',
        coin: 1000
    },
    {
        id: 2,
        name: 'Laravel',
        coin: 1230
    },
    {
        id: 3,
        name: 'JS',
        coin: 1000
    },
    {
        id: 4,
        name: 'Python',
        coin: 1000
    },
]

var isFree = courses.find(function(course, index) {
    console.log(index);
    return course.coin === 1000
})

console.log(isFree);