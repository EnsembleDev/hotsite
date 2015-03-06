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
    
    var parts = ["mailto", "contato", "ensemble", "com", "br", "@", ".", ":"]; 
    var to = parts[0] + parts[7]
    var email = parts[5] + parts[2] + parts[6] + parts[3] + parts[6] + parts[4];

    $('.has-mail').mouseover(function () {
        $('.reach-mail-contato').attr('href',to+"contato"+email);
        $('.reach-mail-lucas').attr('href',to+"lucas"+email);
        $('.reach-mail-felipe').attr('href',to+"felipe"+email);
        $('.reach-mail-adriano').attr('href',to+"adriano"+email);
    });

    $('.has-mail').mouseleave(function () {
        $('.reach-mail-contato').attr('href','');
        $('.reach-mail-lucas').attr('href','');
        $('.reach-mail-felipe').attr('href','');
        $('.reach-mail-adriano').attr('href','');
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
