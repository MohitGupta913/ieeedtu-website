$(document).ready(function() {
    $(".hover-reveal").mouseenter(function () {
        $(this).find(".panel-body").slideToggle(200);
    });

    $(".hover-reveal").mouseleave(function () {
        $(this).find(".panel-body").slideToggle(200);
    });
});

$(function() {
	$('.row .panel').matchHeight();
});