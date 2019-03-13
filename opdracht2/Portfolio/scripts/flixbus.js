/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//var btn = document.querySelector('form + button');
//
//function klapOpen() {
//    var formulier = document.querySelector('form');
//    var inputSearch = document.querySelector('[type="search"]');
//    inputSearch.focus();
//}
//
//btn.addEventListener('click', klapOpen);



var sorteren = document.querySelector('.sorteren');
var knopSorteren = document.querySelectorAll('.buttonsorteren');

var filteren = document.querySelector('.filteren');
var knopFilteren = document.querySelectorAll('.buttonfilteren');

var hartjes = document.querySelectorAll('.hartje');
var favlijst = document.querySelector('nav ul li:nth-of-type(3) img');

var download = document.querySelectorAll('.download');
var downloadlijst = document.querySelector('nav ul li:nth-of-type(2) img');


function sorterentoggle (){
    sorteren.classList.toggle('is-open');
}

function filtertoggle (){
    filteren.classList.toggle('is-open');
}

function hartjeKlik(event) {
    event.preventDefault(); // wat je normaal doet, doe het niet
    var hartje = event.target; // event.target = het geklikte element (als het goed is de img);
    console.log(hartje);
    // check of hartje al aangeklikt is of niet door ' aan' class te bekijken
    if (hartje.classList.contains('aan')) {
        hartje.classList.remove('aan'); // hartje was aan, dus remove aan
        hartje.src = "../images/icon_hartje_groen_leeg.gif";
    } else {
        hartje.classList.add('aan'); // hartje was uit, dus add aan
        hartje.src = "../images/icon_hartje_groen.gif";//hier gif plaatsen
    };

    setTimeout(
        function() {
            favlijst.src= "../images/icoon_hartje_wit_plus1.gif";
        }
        ,400
    );
}

function downloadKlik(event) {
    event.preventDefault();

    var download = event.target;

    if (download.classList.contains('bij')) {
        download.classList.remove('bij');
        download.src = "../images/icon_downloaden_orangje.gif";
    } else {
        download.classList.add('bij');
        download.src = "../images/icon_downloaden_grijs.svg";
    };

    setTimeout(
        function () {
            downloadlijst.src=
                "../images/icon_downdoad_wit_1.gif";
        }
        ,5000
    );

}



for (var i = 0; i < knopSorteren.length; i++) {
    knopSorteren[i].addEventListener('click', sorterentoggle);
}

for(var i = 0; i < knopFilteren.length; i++) {
    knopFilteren[i].addEventListener('click', filtertoggle);
}

for (var i=0; i < hartjes.length; i++) {
    hartjes[i].addEventListener('click', hartjeKlik);
}



for (var i=0; i < download.length; i++) {
    download[i].addEventListener('click', downloadKlik);
}









//wanneer er op hartje word geklikt
//verrandert de afbeelding leeg hartje naar afbeelding gevult hartje
//
//het hartje gaat naar de favorieten lijst
//afbeelding veranderd naar +1
