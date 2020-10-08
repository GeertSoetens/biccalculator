'use strict';
let materialselect, material, turns, radius, length, inductance;

<<<<<<< HEAD
function init() {

    // Get elements
    turns = document.getElementById('turns');
    radius = document.getElementById('radius');
    length = document.getElementById('length');
    materialselect = document.getElementById('matselect');
    inductance = document.getElementById('inductance');

    // Set event listeners
    let elemarr = [turns, radius, length, materialselect];

    elemarr.forEach(element => {
        element.addEventListener('change', calc);
    })

    // Initial check on element values...
    switch (materialselect.value.replace(/,/, '.')) {
        case 'aluminium':
            material = ['Aluminium', '2.6548', '1.00002'];
            break;
        case 'copper':
            material = ['Copper', '1.678', '0.999991'];
            break;
        case 'gold':        
            material = ['Gold', '2.24', '1'];
            break;
        case 'nickel': 
            material = ['Nickel', '6.84', '600'];
            break;
        case 'silver':
            material = ['Silver', '1.586', '0.99998'];
            break;
        default:
            material = ['Unassigned', '0', '0'];
    };

    document.getElementById('matselectouput').value = material[2];
}

function calc() {

    // Get mat values
    switch (materialselect.value.replace(/,/, '.')) {
        case 'aluminium':
            material = ['Aluminium', '2.6548', '1.00002'];
            break;
        case 'copper':
            material = ['Copper', '1.678', '0.999991'];
            break;
        case 'gold':        
            material = ['Gold', '2.24', '1'];
            break;
        case 'nickel': 
            material = ['Nickel', '6.84', '600'];
            break;
        case 'silver':
            material = ['Silver', '1.586', '0.99998'];
            break;
        default:
            material = ['Unassigned', '0', '0'];
    };

    document.getElementById('matselectouput').value = material[2];

    let result = (parseFloat(material[2]) * 4 * Math.pow(10, -7) * Math.PI * Math.PI * Math.pow(parseFloat(turns.value.replace(/,/, '.')), 2) * Math.pow(parseFloat(radius.value.replace(/,/, '.')) / 1000, 2)) / (parseFloat(length.value.replace(/,/, '.')) / 1000 * (1 + 0.4502 * parseFloat(radius.value.replace(/,/, '.')) * 2 / parseFloat(length.value.replace(/,/, '.')))) * Math.pow(10, 6);

    inductance.value = result;
}

=======

let materialselect, material, turns, radius, length, inductance;

function init() {

    // Get elements
    turns = document.getElementById('turns');
    radius = document.getElementById('radius');
    length = document.getElementById('length');
    materialselect = document.getElementById('matselect');
    inductance = document.getElementById('inductance');

    // Set event listeners
    let elemarr = [turns, radius, length, materialselect];

    elemarr.forEach(element => {
        element.addEventListener('change', calc);
    })

    // Initial check on element values...
    switch (materialselect.value.replace(/,/, '.')) {
        case 'aluminium':
            material = ['Aluminium', '2.6548', '1.00002'];
            break;
        case 'copper':
            material = ['Copper', '1.678', '0.999991'];
            break;
        case 'gold':        
            material = ['Gold', '2.24', '1'];
            break;
        case 'nickel': 
            material = ['Nickel', '6.84', '600'];
            break;
        case 'silver':
            material = ['Silver', '1.586', '0.99998'];
            break;
        default:
            material = ['Unassigned', '0', '0'];
    };

    document.getElementById('matselectouput').value = material[2];
}

function calc() {

    // Get mat values
    switch (materialselect.value.replace(/,/, '.')) {
        case 'aluminium':
            material = ['Aluminium', '2.6548', '1.00002'];
            break;
        case 'copper':
            material = ['Copper', '1.678', '0.999991'];
            break;
        case 'gold':        
            material = ['Gold', '2.24', '1'];
            break;
        case 'nickel': 
            material = ['Nickel', '6.84', '600'];
            break;
        case 'silver':
            material = ['Silver', '1.586', '0.99998'];
            break;
        default:
            material = ['Unassigned', '0', '0'];
    };

    document.getElementById('matselectouput').value = material[2];

    let result = (parseFloat(material[2]) * 4 * Math.pow(10, -7) * Math.PI * Math.PI * Math.pow(parseFloat(turns.value.replace(/,/, '.')), 2) * Math.pow(parseFloat(radius.value.replace(/,/, '.')) / 1000, 2)) / (parseFloat(length.value.replace(/,/, '.')) / 1000 * (1 + 0.4502 * parseFloat(radius.value.replace(/,/, '.')) * 2 / parseFloat(length.value.replace(/,/, '.')))) * Math.pow(10, 6);

    inductance.value = result;
}

>>>>>>> 5f1cd5812a067d371c45831b72fc240e43562111
init();