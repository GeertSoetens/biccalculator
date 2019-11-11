'use strict';

document.addEventListener('deviceready', function() {
    let r1, r2, vref, ambtemp, thermal, inputvolt, regcurrent, heatthermres, maxjunctemp, vout, pd, junctemp, voutinput, pdinput, junctempinput, toohot;

    function init() {

        // Get change-able elements
        r1 = document.getElementById('r1');
        r2 = document.getElementById('r2');
        vref = document.getElementById('vref');
        ambtemp = document.getElementById('ambtemp');
        thermal = document.getElementById('thermal');
        inputvolt = document.getElementById('inputvolt');
        regcurrent = document.getElementById('regcurrent');
        heatthermres = document.getElementById('heatthermres');
        maxjunctemp = document.getElementById('maxjunctemp');

        // Get result elements
        voutinput = document.getElementById('vout');
        pdinput = document.getElementById('pd');
        junctempinput = document.getElementById('junctemp');
        toohot = document.getElementById('toohot');

        // put elements in array
        let elements = [r1, r2, vref, ambtemp, thermal, inputvolt, regcurrent, heatthermres, maxjunctemp];
        
        // Add eventListeners
        elements.forEach(element => {
            element.addEventListener('change', calc);
        });
        
        // Hide too hot
        toohot.style.opacity = "0";
    }

    function calc() {
        vout = vref.value.replace(/,/, '.') * (1 + r1.value.replace(/,/, '.') / r2.value.replace(/,/, '.'));
        pd = (inputvolt.value.replace(/,/, '.') - vout) * regcurrent.value.replace(/,/, '.');
        junctemp = parseFloat(regcurrent.value.replace(/,/, '.')) * (parseFloat(inputvolt.value.replace(/,/, '.')) - vout) * (parseFloat(thermal.value.replace(/,/, '.')) + parseFloat(heatthermres.value.replace(/,/, '.'))) + parseFloat(ambtemp.value.replace(/,/, '.'));

        if (junctemp >  parseFloat(maxjunctemp.value.replace(/,/, '.'))) {
            toohot.style.opacity = "1";
        } else {
            toohot.style.opacity = "0";
        }

        voutinput.value = vout;
        pdinput.value = pd;
        junctempinput.value = junctemp;

        console.log(pd);
    }

    init();
})