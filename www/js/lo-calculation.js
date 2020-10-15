'use strict';

let al, n, uh;

function init() {
    
    // Get change-able elements
    al = document.getElementById('AL');
    n = document.getElementById('N');

    // Get result element
    uh = document.getElementById('uH');

    // Put elements in array
    let elements = [al, n];

    // Add event listeners
    elements.forEach(element => {
        element.addEventListener('change', calc);
    });
}

function calc() {
    // Get values
    let alval = al.value.replace(/,/, '.');
    let nval = n.value.replace(/,/, '.');

    let uhresult = (alval * Math.pow(10, -9) * Math.pow(nval, 2)) * 1000000;

    uh.value = uhresult;
}

init();