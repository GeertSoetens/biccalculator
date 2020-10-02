'use strict';
let involt, freq, dc, peakind, ind, indval, epo, elements;

function init() {

    // Get Elements
    involt = document.getElementById('involt');
    freq = document.getElementById('freq');
    dc = document.getElementById('dc');
    peakind = document.getElementById('peakind');

    // Get output elements
    ind = document.getElementById('ind');
    epo = document.getElementById('epo');

    // Add event listeners...
    elements = [involt, freq, dc, peakind];

    elements.forEach(element => {
        element.addEventListener('change', calc);
    })

    
}

function calc() {

    indval = (parseFloat(involt.value.replace(',','.')) / ((parseFloat(peakind.value.replace(',','.')) * 0.9) / (((Math.pow(parseFloat(freq.value.replace(',','.'))* 1000, -1)) * (parseFloat(dc.value.replace(',','.')) / 100 ))))) * 1000000;
    ind.value = indval;
    epo.value = ((0.5 * (parseFloat(indval) / 1000000) * ((Math.pow(parseFloat(peakind.value.replace(',','.')) * 0.9, 2))) * (parseFloat(freq.value.replace(',','.')) * 1000))) * 0.8;
}

init();