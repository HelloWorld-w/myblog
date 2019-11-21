$(function(){
	$('.ul_li li').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	$('.slider_click').click(function(){
		show();
	})
	$('.mask').click(function(){
		hide();
	})
	function show(){
		$('.mask').fadeIn();
		$('.slider').css('right',0);
	}
	function hide(){
		$('.mask').fadeOut();
		$('.slider').css('right',-300);
	}
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$('.top').css('display','block')
		}else{
			$('.top').css('display','none')
		}
	})
	$('.top').click(function(){
		$('html,body').animate({
			scrollTop:0
		},0)
	})
})