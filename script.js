document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('nav-toggle');
});

var div = document.querySelector('.wrapper');
document.addEventListener('mousemove',function(e) {			
    div.style.left = e.pageX+"px";
    div.style.top = e.pageY+"px";
});
