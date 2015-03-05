$(document).ready(function () {
    if($('.main-container').height() < $(window).height()){
        $('.bubbles-container').css('height',$(window).height());
    }
    else{
        $('.bubbles-container').css('height',$('.main-container').height());
    }

    $('.mail-float').mouseover(function () {
        $('.mail-img').addClass('animated rubberBand');
    });

    $('.mail-float').mouseleave(function () {
        $('.mail-img').removeClass('animated rubberBand');
    });
});

$(window).on('resize', function(){
    if($('.main-container').height() < $(window).height()){
        $('.bubbles-container').css('height',$(window).height());
    }
    else{
        $('.bubbles-container').css('height',$('.main-container').height());
    }

});
