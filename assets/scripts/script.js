$(document).ready(function() {
	$('.nav-toggle').click(function () {
        $('.mobile-nav').toggleClass('-open');
    })

    setTimeout(function () {
        $('.section-main img').addClass('-animated');
        $('.section-main h1').addClass('-animated');
        $('.section-main h2').addClass('-animated');

    }, 500);

});