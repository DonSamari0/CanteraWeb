$(document).ready(function(){
	//alert($(window).width());
	var inicial =0;
	$(window).scroll(function (){
		
		if ($(window).scrollTop() < 36) {
			$("#header").removeClass("static_header");
		}else
		{ 
			var scrolles = $(window).scrollTop();
			if ( scrolles < inicial ){
				$("#header").addClass("static_header");
				//$("#logo_h").addClass("logo_hstatic");
				inicial = scrolles;	

			}
			else
			{
				inicial = scrolles;
				$("#header").removeClass("static_header")
				$("#logo_h").removeClass("logo_hstatic")

			
			}
		}
	 });

});

/*if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
	var delta = 0;
	if (event.wheelDelta) delta = event.wheelDelta / 120;
	else if (event.detail) delta = -event.detail / 3;

	handle(delta);
	if (event.preventDefault) event.preventDefault();
	event.returnValue = false;
}

function handle(delta) {
	var time 	= 600;
	var distance 	= 300;

	$('html, body').stop().animate({
		scrollTop: $(window).scrollTop() - (distance * delta)
	}, time );
}*/






	

