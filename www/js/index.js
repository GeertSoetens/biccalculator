'use strict';
document.addEventListener('deviceready', function() {
    
    function checkAppState() {
        if (sessionStorage.getItem('appReady') === true) {
            return;
        } else if (sessionStorage.getItem('appReady') === null) {
            checkAppState();
        }
    }
});