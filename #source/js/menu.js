$(document).ready(function() {
	if(window.matchMedia('(min-width: 560px)').matches){
		$(".sub, .submenu-burger").click(function(event) {
			$(".submenu, .subicon").toggleClass("active");
			$("body").toggleClass("lock");
		});
	}
});





