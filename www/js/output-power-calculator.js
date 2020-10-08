'use strict';

let involt, ind, dc, expeff, freq, outputpow, pic, elements;

function init() {

    // Get Elements
    involt = document.getElementById('involt');
    ind = document.getElementById('ind');
    dc = document.getElementById('dc');
    expeff = document.getElementById('expeff');
    freq = document.getElementById('freq');

    // Get Output Elements
    outputpow = document.getElementById('outputpow');
    pic = document.getElementById('pic');

    // Set event listeners
    elements = [involt, ind, dc, expeff, freq];
    elements.forEach( element => {
        element.addEventListener('change', calc);
    })

}

function calc() {
    
    outputpow.value = ((0.5 * (parseFloat(ind.value.replace(',','.')) / 1000000) * ((parseFloat(involt.value.replace(',','.')) / ( parseFloat(ind.value.replace(',','.')) / 1000000)) * (((parseFloat(freq.value.replace(',','.')) * 1000) ** -1) * (parseFloat(dc.value.replace(',','.')) / 100))) ** 2) / ((parseFloat(freq.value.replace(',','.')) * 1000) ** -1)) * (parseFloat(expeff.value.replace(',','.')) / 100);
    pic.value = (parseFloat(involt.value.replace(',','.')) / ( parseFloat(ind.value.replace(',','.')) / 1000000)) * ((( parseFloat(freq.value.replace(',','.')) * 1000) ** -1) * (parseFloat(dc.value.replace(',','.')) / 100));
}

init();
