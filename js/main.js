//Nav toggle button

var navToggleButton = function () {
    $('.nav-toggle').on('click', function () {
        $('.nav').toggleClass('nav-off');
        $('.nav-toggle').toggleClass('nav-toggle-swith');
    });
}

//Simple sub page loading mechanism

var subPageLoader = function () {
    $('ul li a').on('click', function () {
    var subPage = $(this).attr('href');
    $('#content').load(subPage);
    return false;
    });
    
}


$(document).ready(function () {
    $('#content').load('subpage/about.html');
    subPageLoader();
    navToggleButton();
});