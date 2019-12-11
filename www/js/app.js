document.addEventListener('deviceready', function() {
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
    I'm sorry, who ever ends up reading this script
    fake loading screen
    */
    function load() {
        if(typeof(loadingElement != 'undefined' && loadingElement != null)) {
        let loadingText = document.getElementById('loadingtext');

        setTimeout(function() {
            loadingText.innerHTML = 'HTML';
        }, getRandomNumber(500, 1000));
        setTimeout(function() {
            loadingText.innerHTML = 'CSS';
        }, getRandomNumber(800, 1500));
        setTimeout(function() {
            loadingText.innerHTML = 'JavaScript';
        }, getRandomNumber(1200, 1800));
        setTimeout(function() {
            loadingText.innerHTML = 'Initiating...';
        }, getRandomNumber(1600, 2000));
        setTimeout(function() {
            loadingText.innerHTML = 'All Done!';
        }, 2100);
        setTimeout(function() {
            loadingElement.style.display = "none";
        }, 2500);
        }
    }

    if(sessionStorage.getItem('loaded') === null) {
        loadingElement.style.display = "block"
        sessionStorage.setItem('loaded', true);
        load();
    } else {
        if (typeof(loadingElement) != 'undefined' && loadingElement != null) {
            loadingElement.style.display = "none";
        }
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

})