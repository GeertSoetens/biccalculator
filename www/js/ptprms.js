'use strict';


let voltpp, voltrms, voltppoutput, voltrmsoutput, rms, pp;

function init() {

    // Get elements
    voltpp = document.getElementById("voltpp");
    voltrms = document.getElementById("voltrms");

    // Get outputs
    voltrmsoutput = document.getElementById("voltrmsoutput");
    voltppoutput = document.getElementById("voltppoutput");
    
    // Add event listeners
    voltpp.addEventListener('change', calc);
    voltrms.addEventListener('change', calc)
}

function calc() {
    
    // Peak to peak into RMS
    rms = parseFloat(voltpp.value.replace(/,/, '.')) / (2 * Math.pow(2, 0.5));
    // RMS into Peak to peak
    pp = parseFloat(voltrms.value.replace(/,/, '.')) * (2 * Math.pow(2, 0.5));

    voltrmsoutput.value = rms;
    voltppoutput.value = pp;
}

init();
