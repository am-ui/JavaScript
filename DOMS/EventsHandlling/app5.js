//current Target
//Target
const btn = document.querySelectorAll('.btn');
btn.forEach(function(btn) {
    btn.addEventListener('Clicked',function(e) {
       // console.log(e.currentTarget);
        //e.currentTarget.style.color = 'orange';
        console.log('target', e.target)
        e.target.style.color = 'orange';


    });

});
