
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


    //JQUERY NICE SELECT JS
    $('select').niceSelect();

    // REVIEW CAROUSEL JS
    $('.review-img-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<img src='./images/icons/arrow-left.svg'>","<img src='./images/icons/arrow-right.svg'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    })

    // REVIEW CAROUSEL JS
    $('.travel-destinations').owlCarousel({
        loop: true,
        margin: 32,
        nav: true,
        navText: ["<img src='./images/icons/arrow-left-gray.svg'>","<img src='./images/icons/arrow-right-gray.svg'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            991: {
                items: 4,
            }
        }
    })



});

  


