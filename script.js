document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('nav-toggle');
    document.querySelectorAll('.span').item(1).classList.toggle('slide');
    document.querySelectorAll('.span').item(0).classList.toggle('cross-down');
    document.querySelectorAll('.span').item(2).classList.toggle('cross-up');
    console.log(document.querySelectorAll('.span').item(1).classList);
});

var div = document.querySelector('.wrapper');
document.addEventListener('mousemove',function(e) {			
    div.style.left = e.pageX+"px";
    div.style.top = e.pageY+"px";
});
