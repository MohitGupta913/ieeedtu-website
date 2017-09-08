$(document).ready(function() {
    $(".hover-reveal").mouseenter(function () {
        $(this).find(".panel-body").slideToggle(200);
    });

    $(".hover-reveal").mouseleave(function () {
        $(this).find(".panel-body").slideToggle(200);
    });

    $(function() {
        $('.row .panel').matchHeight();
    });
    
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 6000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

