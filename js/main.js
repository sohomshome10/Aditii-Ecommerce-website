$(function() {
    $('.image-slider').slick({
        dots: true,
        infinite: true,
        speed: 900,
        fade: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });

    $('.hamburger').click(function(){
        $(this).toggleClass('navactive');
        $('.navlinks').slideToggle();
    });
    $('body').append('<a href="#home" class="top scroll"><i class="fas fa-chevron-up"></i></a>');
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.top').fadeIn('slow');
        }else{
             $('.top').fadeOut('slow');
        }
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },500);
        return false;
    });
});