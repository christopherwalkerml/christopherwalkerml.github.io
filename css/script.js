/* global $ */
/* global document */
/* global window */
/* eslint-env jquery */

$(document).ready(function() {

    $('.js--scroll-to-projects').click(function() {
        $('html, body').animate({scrollTop: $('#lower-page').offset().top}, 1000);
    })

});

function show_blog_info(element) {
    let parent = element.parentElement.parentElement;
    let info = parent.childNodes[3];

    info.style.height = info.scrollHeight + 'px';
    parent.style.paddingBottom = "8px";

    element.style.display = "none";
}

function hide_blog_info(element) {
    let parent = element.parentElement.parentElement;
    let info = parent.childNodes[3];

    info.style.height = "0";
    parent.style.paddingBottom = "70px";

    // show open button
    setTimeout(function() {
        parent.childNodes[1].childNodes[5].style.display = "block";
    }, 350);
}

