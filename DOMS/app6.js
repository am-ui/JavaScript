//inner html
//textContent

const list =  document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');
console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);
let Random = "some random values";

const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">List name</li> ${Random}
<li>List item</li>`;
document.body.appendChild(ul);

div.textContent = " Welcome!!";
div.innerHTML = 'hello how can i help you';