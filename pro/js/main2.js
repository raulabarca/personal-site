//Size
var divwidth = window.innerWidth;
var divheight = window.innerHeight;
var brick1 = document.getElementById('brick');
var brick2 = document.getElementById('brick-2');
var brick3 = document.getElementById('brick-3');
var brick4 = document.getElementById('brick-4');

function resize(div) {
    div.style.width = divwidth + 'px';
    div.style.height = divheight + 'px';
}
resize(brick1);
resize(brick2);
resize(brick3);
resize(brick4);



//Movement
this.addEventListener("wheel", myFunction);

function myFunction() {
    alert('Wheel detectado');
    var y = brick2.offsetTop;
    window.scrollTo(0, y);
    alert('El siguiente div esta: ' + y);
}
