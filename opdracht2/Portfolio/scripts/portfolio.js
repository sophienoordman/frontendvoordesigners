/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


function scrollApear (){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    //vanaf boven scherm
    //var screenPosition = window.innerHeight;

    //vanaf helescherm delen door 1.3
    var screenPosition = window.innerHeight/ 1.2;

    if(introPosition< screenPosition){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollApear);

