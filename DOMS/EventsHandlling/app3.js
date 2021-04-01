//keypress
// keydown
//keyup

const nameInput = document.getElementById('name');
nameInput.addEventListener('keypress', function() {
    console.log('you press a key');
});
nameInput.addEventListener('keyup', function() {
    console.log('you press the keyup key');

});
nameInput.addEventListener('keydown',function() {
    console.dir(nameInput.value);
})