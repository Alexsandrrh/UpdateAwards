$(document).ready(function() {
    let backgrounds = [
        'bg-main1.jpg',
        'bg-main2.jpg',
        'bg-main3.jpg',
        'bg-main4.jpg'
    ]

    $('#particles-js').css({
        'background-image': 'url(assets/img/' + backgrounds [Math.floor(Math.random()  * (4 - 0) + 0)] + ')'
    })
	$('.nav-toggle').click(function () {
        $('.mobile-nav').toggleClass('-open');
    })

    setTimeout(function () {
        $('.section-main img').addClass('-animated');
        $('.section-main h1').addClass('-animated');
        $('.section-main h2').addClass('-animated');
        $('.social').addClass('-animated');
    }, 3000);
});