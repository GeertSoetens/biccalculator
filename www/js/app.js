document.addEventListener('deviceready', function() {
    let loadingElement = document.getElementById('loading');

    function onDeviceReady() {
        window.open = cordova.InAppBrowser.open;
    }

    function wait(ms) {
        let start = new Date().getTime();
        let end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function load() {
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

    if(sessionStorage.getItem('loaded') === null) {
        loadingElement.style.display = "block"
        sessionStorage.setItem('loaded', true);
        load();
    } else {
        loadingElement.style.display = "none";
    }

})