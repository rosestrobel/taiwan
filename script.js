document.addEventListener('scroll',function() {
    var hero = document.querySelector('.hero button');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 260) {
        hero.style.visibility = 'hidden';
    }
    else {
        hero.style.visibility = 'visible';
    }
});
