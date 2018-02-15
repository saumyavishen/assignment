$(function(){

	$('.top-div').on('mouseover', function(){
		$(this).find( "span" ).css( "color", "#a97979" );
		$(this).find( "h4" ).css( "color", "#a97979" );
		$(this).find( "hr" ).css( "color", "#a97979" );
	});

	$('.top-div').on('mouseleave', function(){
		$(this).find( "span" ).css( "color", "#333" );
		$(this).find( "h4" ).css( "color", "#333" );
		$(this).find( "hr" ).css( "color", "#333" );
	});

	$('.sixImg').on('mouseover', function(){
		$(this).find( "div" ).css( "background-color", "#a97979" );
		$(this).find( "h4" ).css( "color", "#fff" );
		$(this).find( "p" ).css( "color", "#e4a8a8" );
	});

	$('.sixImg').on('mouseleave', function(){
		$(this).find( "div" ).css( "background-color", "#F9F9F9" );
		$(this).find( "h4" ).css( "color", "#000" );
		$(this).find( "p" ).css( "color", "#b1a8a8" );
	});

	$('.dateImg').on('mouseover', function(){
		$(this).find( "div" ).css( "background-color", "#46210f" );
		$(this).find( "h4" ).css( "color", "#fff" );
		$(this).find( "p" ).css( "color", "#e4a8a8" );
		$(this).find( "a" ).css( "color", "#fff" );
	});

	$('.dateImg').on('mouseleave', function(){
		$(this).find( "div" ).css( "background-color", "#F9F9F9" );
		$(this).find( "h4" ).css( "color", "#000" );
		$(this).find( "p" ).css( "color", "#b1a8a8" );
	});

	$(window).scroll(function () {

		if ($(this).scrollTop() > 70) {
			$('.navbar').css('background-color' ,'#333')
		} else {
			$('.navbar').css('background-color' ,'none');
			$('.navbar').css('background-color','transparent');
		}
		
        if ($(this).scrollTop() > 500) {
            $(".navbar").hide();
        } else {
            $(".navbar").show();
        }
    });

});