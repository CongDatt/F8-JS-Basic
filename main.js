// Dom Attribute

var headingElement = document.querySelector('h1');
headingElement.title = 'Tieu de'
headingElement.className = 'newClass' // setter

headingElement.setAttribute('abc', 'xyz')

var boxElement = document.querySelector('.box')
boxElement.innerHTML = '<h1> H1 tag </h1>'

console.log(headingElement.innerHTML);

headingElement.classList.add('add','classList')

console.log(headingElement.classList.contains('add'));