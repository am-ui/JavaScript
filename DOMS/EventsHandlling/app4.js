//Event object argument
// info about triggered event
//event.type
// event.currentTarget
// preventDefault() - prevent default behaviour

const hading = document.querySelector('h1');
const btn = document.querySelector('.btn');
hading.addEventListener('click', function() {
    hading.classList.add('blue');
});
hading.addEventListener('click', function(event){
   // console.log(event);
   console.log(event.currentTarget);
});

btn.addEventListener('click', function(event) {
    console.log.currentTarget.classList.add('blue');
    console.log(event.type);

});
function someFunc(e){
    e.preventDefault();
}