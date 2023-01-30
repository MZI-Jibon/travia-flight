
$(document).ready(function () {
    // NAVBAR JS
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("nav").css({ "background": "#ffffffe5", "box-shadow": "0 0 7px #777", "transition": ".3s" });
        }

        else {
            $("nav").css({ "background": "#00000000", "box-shadow": "none" });
        }
    })

    // FLIGHT JS
    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#tabs-nav li').click(function () {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    //JQUERY NICE SELECT JS
    $('select').niceSelect();

    // CAROUSEL JS
    $('.review-img-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            }
        }
    })



});

  


