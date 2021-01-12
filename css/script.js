/* global $ */
/* global document */
/* global window */
/* eslint-env jquery */

$(document).ready(function() {

    $('.js--scroll-to-projects').click(function() {
        $('html, body').animate({scrollTop: $('#lower-page').offset().top}, 1000);
    })

});

function show_blog_info(element, height) {
    let parent = element.parentElement.parentElement;
    let info = parent.childNodes[3];

    info.style.height = height.toString() + "px";
    parent.style.paddingBottom = "20px";

    element.style.display = "none";
}

function hide_blog_info(element) {
    let parent = element.parentElement.parentElement;
    let info = parent.childNodes[3];

    info.style.height = "0";
    parent.style.paddingBottom = "70px";

    parent.childNodes[1].childNodes[5].style.display = "block";
}

