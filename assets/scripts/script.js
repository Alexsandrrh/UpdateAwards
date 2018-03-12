$(document).ready(function() {
    var backgrounds = [
        'bg-main1.jpg',
        'bg-main2.jpg',
        'bg-main3.jpg',
        'bg-main4.jpg'
    ]

    var modalElements = [
        '.modal-links a',
        '.modal-toggle',
        '.modal-map iframe'
    ]

    $('')

    $('#particles-js').css({
        'background-image': 'url(assets/img/' + backgrounds [Math.floor(Math.random()  * (4 - 0) + 0)] + ')'
    })

    var modalToggle = $('.js-modal-toggle'),
    modal = $('.modal'),
    mobileNav = $('.mobile-nav');

	$('.nav-toggle').click(function () {
        mobileNav.toggleClass('-open');
        modal.removeClass('-active');
        for (i = 0; i < 3; i++) {
            $(modalElements[i]).removeClass('-zero');
        }
    })

    $('.mobile-nav a').click(function () {
        mobileNav.removeClass('-open');
    })

    modalToggle.click(function ($event) {
        event.preventDefault();
        modal.toggleClass('-active');
        for (i = 0; i < 3; i++) {
                $(modalElements[i]).addClass('-zero');
        }
    })

    $('.modal-toggle').click(function () {
        for (i = 0; i < 3; i++) {
            $(modalElements[i]).removeClass('-zero');
        }
    })

    setTimeout(function () {
        $('.section-main img').addClass('-animated');
        $('.section-main h1').addClass('-animated');
        $('.section-main h2').addClass('-animated');
        $('.social').addClass('-animated');
    }, 3000);
});