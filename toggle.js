

(function (window, document) {
    'use strict';

    const burger = document.getElementById('burger');
    burger.onclick = function() {
    burger.classList.toggle('active');
    }



    const $toggles = document.querySelectorAll('.toggle'); //NodeList
    const $toggleBtn = document.getElementById('toggle-btn');
    
    
    
    $toggleBtn.addEventListener('click', function () {
        toggleElements();

    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
   
    

})(window, document)

