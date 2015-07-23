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
    
    var parts = ['mailto', 'contato', 'ensemble', 'com', 'br', '@', '.', ':']; 
    var to = parts[0] + parts[7]
    var email = parts[5] + parts[2] + parts[6] + parts[3] + parts[6] + parts[4];

    $('.has-mail').mouseover(function () {
    	var $el = $(this);
		$el.attr('href',to+$el.data("mail")+email);
    });

    $('.has-mail').mouseleave(function () {
        $$(this).removeAttr('href');
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
