let loadingElement = document.getElementById('loading');

function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
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