$(".lifu_img").mouseenter(function() {
	var i = $(".lifu_img").index();
	$(this).find(".lifu_about").fadeIn(800);
})
$(".lifu_img").mouseleave(function() {
	var i = $(".lifu_img").index();
	$(this).find(".lifu_about").fadeOut(300)
})