


$("#all_tit").mouseenter(function(){
	$("#all_con").slideDown(300);
});

$("#all_con").mouseenter(function(){
	$(this).css("display","block");
});
$(".all").mouseleave(function(){
	$(".all_con").slideUp(200);
})
//侧边栏
$(".lan").hover(function(){
	$(this).css("background","#ff5c4d");
	$(this).find("svg").css("color","#fff");
	$(this).find(".lan_tan").stop().animate({"left":"-64px"}, 800);
},function(){
	$(this).css("background","#3f3c3c");
	$(this).find("svg").css("color","#ff4040");
	$(this).find(".lan_tan").stop().animate({"left":"64px"}, 800);
})
$(".lan_saom").hover(
	function(){
		$(".lan_erweisma").show();
	},
	function(){
		$(".lan_erweisma").hide();
})
$(".lan_fhtop").click(function() {
	$("body").animate({"scrollTop":"0"}, 500)
});


//60秒倒计时
var q=59;
		setInterval(times,1000)
		function times(){
			q--;
			if(q==-1){
				q=59
			}
			if(q<10){
				$("#second").html("0"+q)
			
			}
			else{
				$("#second").html(q)
			}
		}

$(".buy60s").mouseenter(function(){
	$(this).find(".swiper-button-next").fadeIn();
	$(this).find(".swiper-button-prev").fadeIn();
	
})
$(".buy60s").mouseleave(function(){
	$(this).find(".swiper-button-next").fadeOut();
	$(this).find(".swiper-button-prev").fadeOut();
	
})
//返回顶部

	// 滚动效果
	$(window).scroll(function(){
		$(".go").click(function(){
			$("body,html").stop().animate({"scrollTop":0},1000);
		})
		$("#go").click(function(){
			$("body,html").stop().animate({"scrollTop":0},1000);
		})
	})
	
// 左侧导航
$(function() {
	var $floor_nav = $("#floor_nav"),
		$sideBarMenu = $("#floor_nav li");
	var TOP = 0;
	// 滚动效果
	$(window).scroll(function() {
		TOP = $(document).scrollTop();

		if(TOP >= ($(".ass").offset().top)-40){		
			$sideBarMenu.eq(3).addClass("current").siblings().removeClass();

		} else if(TOP >= ($(".ite").offset().top)-40) {
			$sideBarMenu.eq(2).addClass("current").siblings().removeClass();

		} else if(TOP >= ($(".act").offset().top) -40){
			$sideBarMenu.eq(1).addClass("current").siblings().removeClass();

		} else if(TOP >= ($(".buy60s").offset().top) -40){

			$sideBarMenu.eq(0).addClass("current").siblings().removeClass();

		} else if(TOP > 490) {
			$floor_nav.fadeIn();
		} else {
			$floor_nav.fadeOut();
		}
	});
	
			
});


$(".floor_nav li").click(function(){
	var i=$(".floor_nav li").index();
	console.log(i);
$(this).addClass("current").siblings().removeClass("current");

})

		