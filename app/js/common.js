$(function() {

	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('#top').offset().top
		}, 300);
		e.preventDefault();
	});

	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

	$('form').submit(function() {
		var data = $(this).serialize();
		//var goalId = $(this).find("input[name='goal']").val();
		//var nameForm = $(this).data('name');
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	/*$('.head-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: true,
		autoplay: true,
		adaptiveHeight: true,
		prevArrow: '<div class="arr-left"></div>',
		nextArrow: '<div class="arr-right"></div>'
	});

	$('.link a').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-123
		}, 300);
	e.preventDefault();
	});

	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find("input[name='goal']").val();
		var nameForm = $(this).data('name');
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				''gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	$('.about-slider, .about-second-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: true,
		autoplay: true,
		dots: true,
		arrows: false,
		adaptiveHeight: true
	});*/

});