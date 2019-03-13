/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


function scrollApear() {
    var showUp = document.querySelectorAll('.show-up');
    //console.log(introText);
    for (var i = 0; i < showUp.length ; i++) {
        var introPosition = showUp[i].getBoundingClientRect().top;
        //vanaf boven scherm
        //var screenPosition = window.innerHeight;

        //vanaf helescherm delen door 1.3
        var screenPosition = window.innerHeight / 1.2;
        console.log(screenPosition);

        if (introPosition < screenPosition) {
            showUp[i].classList.add('intro-appear');
        }
    }
}

window.addEventListener('scroll', scrollApear);
