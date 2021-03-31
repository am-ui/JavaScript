const result = document.querySelector('#result');
// selct the all children
const allChildren = result.childNodes;
console.log(allChildren);

//another ways

const children = result.children;
console.log(children);
console.log(result.firstChild);
console.log(result.lastChild);


//select the parent nodes
const heading = document.querySelector('h1');
const parent = heading.parentElement;
parent.styleMedia.color = 'red';

//previous siblings
const last = document.querySelector('#last');
const third = last.previousElementSibling.previousSibling;
console.log(third);

//nexr sibilings
const first = document.querySelector('.first');
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

//return the whitespace
console.log(last.nextSibling.nextSibling); 

//previous elemnt sibiling 
//nextElementSibilings
const first = document.querySelector('.first');
first.nextElementSibling.style.color = 'red';
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);
const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);


