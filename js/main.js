//Nav toggle button
"use strict"

var navToggleButton = function () {
    $('.nav-toggle').on('click', function () {
        $('.nav').find('li').toggleClass('nav-off');
        $('.content').toggleClass('content-wide');
        $('.nav-toggle').toggleClass('nav-toggle-swith');
    });
}

//Simple sub page loading mechanism

var subPageLoader = function () {
    $('ul li a').on('click', function () {
    var subPage = $(this).attr('href');
    $('.content').load(subPage);
    return false;
    });
    
}


$(document).ready(function () {
    $('.content').load('subpage/about.html');
    subPageLoader();
    navToggleButton();
});