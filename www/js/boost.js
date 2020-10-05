'use strict';

let vin, vo, vd, freq, idcmax, idcmin, vsw, toff, toffinput, deltai, deltaiinput, etop, etopinput, indc, indcinput;

// Function runs when page has loaded
function init() {

    // Get input elements
    vin = document.getElementById('vin');
    vo = document.getElementById('vo');
    vd = document.getElementById('vd');
    freq = document.getElementById('freq');
    idcmax = document.getElementById('idcmax');
    idcmin = document.getElementById('idcmin');
    vsw = document.getElementById('vsw');

    // Get result inputs
    toffinput = document.getElementById('toff');
    deltaiinput = document.getElementById('deltai');
    etopinput = document.getElementById('etop');
    indcinput = document.getElementById('indc');

    // put elements in array
    let elements = [vin, vo, vd, freq, idcmax, idcmin, vsw];

    elements.forEach(element => {
        element.addEventListener('change', calc);
    })
}

// Run this function everytime a field is changed
function calc() {

    // Calculate results
    toff = (1 - ((parseFloat(vo.value.replace(/,/, '.')) + parseFloat(vd.value.replace(/,/, '.')) - parseFloat(vin.value.replace(/,/, '.'))) / (parseFloat(vo.value.replace(/,/, '.')) - parseFloat(vsw.value.replace(/,/, '.')) + parseFloat(vd.value.replace(/,/, '.'))))) * (1 / parseFloat(freq.value.replace(/,/, '.')) * 1000);
    // toff = Math.round(toff * 100) / 100;

    deltai = 2 * (parseFloat(idcmax.value.replace(/,/, '.'))) * (parseFloat(idcmin.value.replace(/,/, '.')) / parseFloat(idcmax.value.replace(/,/, '.')));
    // deltai = Math.round(deltai * 100) / 100;

    etop = (parseFloat(vo.value.replace(/,/, '.')) - parseFloat(vin.value.replace(/,/, '.')) + parseFloat(vd.value.replace(/,/, '.'))) * toff;
    // etop = Math.round(etop * 100) / 100;

    indc = etop / deltai;
    indc = Math.round(indc * 100) / 100;

    // Put them in input elements
    toffinput.value = toff;
    deltaiinput.value = deltai;
    etopinput.value = etop;
    indcinput.value = indc;
}

init();