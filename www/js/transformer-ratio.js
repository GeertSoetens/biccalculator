'use strict';

document.addEventListener('deviceready', function() {
    let primturns, secturns, primvolt, primeimp, secvolt, secimp;

    function init() {

        // Get elements
        primturns = document.getElementById('primturns');
        secturns = document.getElementById('secturns');
        primvolt = document.getElementById('primvolt');
        primeimp = document.getElementById('primeimp');

        secvolt = document.getElementById('secvolt');
        secimp = document.getElementById('secimp');

        // Set event listeners
        let elemarr = [primturns, secturns, primvolt, primeimp];

        elemarr.forEach(element => {
            element.addEventListener('change', calc);
        })

    }

    function calc() {

        secvolt.value = primvolt.value.replace(/,/, '.') * secturns.value.replace(/,/, '.') / primturns.value.replace(/,/, '.');
        secimp.value = primeimp.value.replace(/,/, '.') * Math.pow(secturns.value.replace(/,/, '.'), 2) / Math.pow(primturns.value.replace(/,/, '.'), 2);

    }

    init();

})