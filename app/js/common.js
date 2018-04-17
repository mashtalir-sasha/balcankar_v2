$(function() {

	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('#top').offset().top
		}, 300);
		e.preventDefault();
	});

	$(document).on('change',function() {
		$('.weight em').html( $('input[name="weight"]').val() );
		$('.height em').html( $('input[name="height"]').val() );
		$('.price em').html( $('input[name="price"]').val() );
	});

	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

	$('.fancybox').click(function(){
		var ttl = $(this).data('title');
		var subTtl = $(this).data('subtitle');
		var text = $(this).data('text');
		var btn = $(this).data('btn');
		var goal = $(this).data('goal');
		var subject = $(this).data('subject');
		$('.ttl').html(ttl);
		$('.subTtl').html(subTtl);
		$('.text').html(text);
		$('.btn').html(btn);
		$('.goal').val(goal);
		$('.subject').val(subject);
	});

	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				gtag('event','submit',{'event_category':'submit','event_action':goalId});
				yaCounter48306911.reachGoal(goalId);
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	$('.slider, .slider-add_init').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		dots: true
	});

	$('.about__klients').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		 responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 321,
				settings: {
					slidesToShow: 1
				}
			}
		  ] 
	});

	$('.mob-mnu__humb').click(function() {
		$('.mob-mnu-list').toggleClass('show');
	});

	$('.mob-mnu__li').click(function() {
		$('.mob-mnu-list').removeClass('show');
	});

	$('.scroll').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-106
		}, 500);
	e.preventDefault();
	});

	$(window).scroll(function(){
		var topline = $(window).scrollTop();
		if ( topline > 650 ) {
			$(".posf").addClass('show');
		} else {
			$(".posf").removeClass('show');
		};
    });

});