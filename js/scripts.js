$(document).ready(function() {

    // sight mode buttons
    var mode;
    var $images;
    var $desiredimg;

    $(".sights .modes").on("click", "a", function(e) {

        // toggle active class on the button itself
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        // when a user clicks a button, figure out what they want
        e.preventDefault();
        mode = $(this).attr('data-mode-button');
        $images = $(this).parent().parent().find('img');
        $desiredimage = $images.filter('[data-mode-target="' + mode + '"]');

        // hide all mode images, then show just the desired one
        $images.removeClass('active');
        $desiredimage.addClass('active');
    });
 
});