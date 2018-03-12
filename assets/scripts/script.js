$(document).ready(function() {
    var backgrounds = [
        'bg-main1.jpg',
        'bg-main2.jpg',
        'bg-main3.jpg',
        'bg-main4.jpg'
    ]

    var modalElements = [
        '.modal-links a:eq(0)',
        '.modal-links a:eq(1)',
        '.modal-links a:eq(2)',
        '.modal-toggle',
        '.modal-map'
    ];

    $('#particles-js').css({
        'background-image': 'url(assets/img/' + backgrounds [Math.floor(Math.random()  * (4 - 0) + 0)] + ')'
    });

    let modalToggle = $('.js-modal-toggle'),
    modal = $('.modal'),
    mobileNav = $('.mobile-nav');

	$('.nav-toggle').click(function () {
        mobileNav.toggleClass('-open');
        modal.removeClass('-active');
    });

    $('.mobile-nav a').click(function () {
        mobileNav.removeClass('-open');
    });

    modalToggle.click(function ($event) {
        event.preventDefault();
        showHideModal();
    });

    function showHideModal () {
        modal.toggleClass('-active');
        for (let i = 0; i < modalElements.length; i++) {
            let delay = i * 300;
            setTimeout(function () {
                $(modalElements[i]).toggleClass('-action');
            }, 300 + delay);
        }
    }

    setTimeout(function () {
        $('.section-main img').addClass('-animated');
        $('.section-main h1').addClass('-animated');
        $('.section-main h2').addClass('-animated');
        $('.social').addClass('-animated');
    }, 3000);
});