//select element in this case select button
//addEventListner()
//what event what to do


const btn = document.querySelector('.btn');
const heading = document.querySelector('h1');

function changeColors(){
    let hasClass = heading.classList.contains('red');

if(hasClass)
{
    heading.classList.remove('red');
}
else{
    heading.classList.add('red');

}
}
btn.addEventListener('click', function(){
    heading.classList.add('red');
    console.log('hey you click me');

});