$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 10,
        randomStart: true,
        speed: 3000,
        captions: true,
        pager: true,
        pagerCustom: "#pager",
        pagerType: 'short'
    });
});