function init() {

    // Get input elements
    materialselect = document.getElementById('matselect');
    freq = document.getElementById('freq');
    skindepth = document.getElementById('skindepth');

    // Put elements in array
    let elements = [materialselect, freq];

    // Add eventListeners
    elements.forEach(element => {
        element.addEventListener('change', calc);
    });
}

// Runs every time an input has been changed
function calc() {

    // Check what material was chosen & assign values
    switch (materialselect.value) {
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

    // Calculate the answer
    result = Math.pow((parseFloat(material[1]) * 0.00000001 / (Math.PI * parseFloat(freq.value.replace(/,/, '.')) * 4 * Math.PI * 0.0000001 * parseFloat(material[2]))), 0.5) * Math.pow(10, 6);

    skindepth.value = result;
}

init();