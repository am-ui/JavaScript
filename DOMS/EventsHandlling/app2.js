// click - fires after full action accurs
// mousedown - button is pressed
// mousedown - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element 
const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    console.log('hey you click me');
});
btn.addEventListener('mousedown', function() {
    console.log('down');
});
btn.addEventListener('mouseup', function() {
    console.log('up');
});
heading.addEventListener('mouseleave', function() {
    heading.classList.remove('blue');
});
