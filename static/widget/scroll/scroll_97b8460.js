$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 250) {
        $('.document-nav nav')
            .first()
            .css('top', '0px');
    } else {
        $('.document-nav nav')
            .first()
            .css('top', (250 - window.scrollY) + 'px');
    }
});