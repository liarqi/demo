$(".xplist").mouseenter(function() {
	var i = $(".xplist").index();
	$(this).find(".img_txt").fadeIn(1000);
})
$(".xplist").mouseleave(function() {
	var i = $(".xplist").index();
	$(this).find(".img_txt").fadeOut(500)
})
var play=document.getElementById("play");
var video_bg=document.getElementById("video_bg");
var shipin=document.getElementById("shipin");
//点击图片
play.onclick = function() {
	video_bg.style.display = 'block';
	shipin.style.display = 'block';
	//js--播放   play()
	shipin.play();

};
//点击灰色背景
video_bg.onclick = function() {
	video_bg.style.display = 'none';
	shipin.style.display = 'none';
	//js--暂停  pause()
	shipin.pause();
};
