let loadingElement = document.getElementById('loading');

function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
}

// Create a function that forces code to wait a set ammount of miliseconds

function wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

// No scroll function for phones
function noScroll() {
    window.scrollTo(0,0);
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/*
Create the lightbox for info elements.
Add event listeners to info elements.
*/

let infoElement = document.getElementById('info');
let infoLightBox = document.getElementById('infobox');   

if (typeof(infoElement) != 'undefined' && infoElement != null) {

    infoElement.addEventListener('click', function() {
        infoLightBox.style.display = 'block';
        document.body.style.overflow = 'hidden';
        window.addEventListener('scroll', noScroll);
    })

    infoLightBox.addEventListener('click', function() {
        infoLightBox.style.display = 'none';
        document.body.style.overflow = 'visible';
        window.removeEventListener('scroll', noScroll);
    })
}

// Create reset button functionality
let resetElement = document.getElementById('reset');

if (typeof(resetElement) != 'undefined' && resetElement != null) {

    resetElement.addEventListener('click', function() {
        let inputs = document.getElementsByTagName('input');
        let select = document.getElementById('matselect');

        for (i = 0; i < inputs.length; i++) {
            inputs.item(i).value = '';
        }

        if (typeof(select) != 'undefined' && select != null) {
            select.selectedIndex = 0;
        }

    })

}