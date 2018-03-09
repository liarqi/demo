$(".sidebar-gotop").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 1000)
});

$(window).scroll(function() {
	var top = $(document).scrollTop();
	if(top > 700) {
		$("#sidebar-left").fadeIn();
	} else {
		$("#sidebar-left").hide();
	}
});