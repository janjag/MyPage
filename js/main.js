//Nav toggle button
"use strict"
var navToggleButton = function () {
    $('.nav-toggle').on('click', 'button', function() {
        $('.nav').toggleClass('nav-off');
    });
}

$(document).ready(function() {
    
    navToggleButton();
});