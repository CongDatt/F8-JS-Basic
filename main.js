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

// function handleMap(course, index) {
//     return {
//         id: course.id,
//         name: 'Khoa hoc ' + course.name,
//         coin: 'Gia ' + course.coin
//     }
// }

// var isFree = courses.map(handleMap);



function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    return accumulator + currentValue.coin
}

var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);