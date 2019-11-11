'use strict';

document.addEventListener('deviceready', function () {
    let inputvolt, indsize, switchcurr, dcycle, rsf, epo, elements;


    function init() {

        // Get Data
        inputvolt = document.getElementById('inputvolt');
        indsize = document.getElementById('indsize');
        switchcurr = document.getElementById('switchcurr');
        dcycle = document.getElementById('dcycle');
        rsf = document.getElementById('rsf');
        epo = document.getElementById('epo');

        // Set event listeners
        elements = [inputvolt, indsize, switchcurr, dcycle];

        elements.forEach(element => {
            element.addEventListener('change', calc);
        })
    }

    function calc() {

        let rsfval = (Math.pow(((1 / (dcycle.value.replace(/,/, '.') / 100)) * ((switchcurr.value.replace(/,/, '.') * 0.9) / ( inputvolt.value.replace(/,/, '.') / (indsize.value.replace(/,/, '.') / 1000000)))), -1)) / 1000;
        rsf.value = rsfval;
        epo.value = ((0.5 * (indsize.value.replace(/,/, '.') / 1000000) * (Math.pow((switchcurr.value.replace(/,/, '.') * 0.9), 2))) * (rsfval * 1000)) * 0.8;
    
    }

    init();
})