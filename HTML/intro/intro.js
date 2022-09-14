(function() {
    const HAPPY_CLASS_NAME = 'happy';
    const SAD_CLASS_NAME = 'sad';
    const DISPLAY_ELEMENT_ID = 'display';

    let mode = 'sad';

    initialize();

    function initialize() {
        if (mode == 'sad') {
            let display = document.getElementById(DISPLAY_ELEMENT_ID);
            display.className = SAD_CLASS_NAME;
            display.innerHTML = 'I am a sad website :('
        }
    }
})();