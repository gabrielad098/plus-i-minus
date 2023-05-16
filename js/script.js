'use strict';

const btns = document.querySelectorAll('button');

const result = document.querySelector('#result');

let counter = 0;

btns[0].addEventListener('click', () =>{
    counter++;
    result.innerText = counter;
});

btns[1].addEventListener('click', () =>{
    if(counter > 0)
    counter--;
    result.innerText = counter;
});

// const dodaj = document.querySelector('#dodaj');

// const odejmij = document.querySelector('#odejmij');

// let wynik = document.querySelector('wynik');

// dodaj.addEventListener("click", function(){

// let wynik = wynik.value + 1;

// });