var text = document.getElementById('text');
var integer = 0;
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

 plus.addEventListener('click',()=>{
    integer += 1;
    text.innerHTML = integer; 
});
minus.addEventListener('click',()=>{
    if(integer>0){
        integer -= 1;
        text.innerHTML = integer;
    }
});




