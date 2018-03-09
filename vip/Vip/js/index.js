$(".group").mouseenter(function() {
	var e = $(this).index();
	$(".groupbg").eq(e).css("position", "absolute").stop().animate({

		"left": "0",
		"top": "0px"
	}, 300)
	$(".grouptxt").eq(e).css("position", "absolute").stop().animate({

		"left": "0",
		"top": "36px"
	}, 300)
});
$(".group").mouseleave(function() {
	var e = $(this).index();
	$(".groupbg").eq(e).css("position", "absolute").stop().animate({

		"left": "0",
		"top": "48px"
	}, 300)
	$(".grouptxt").eq(e).css("position", "absolute").stop().animate({

		"left": "0",
		"top": "72px"
	}, 300)
});
$(".sel-area").mouseenter(function() {
	$(".sel-area-box").css("display", "block");
})
$(".sel-area-box").mouseenter(function() {
	$(".sel-area-box").css("display", "block");
})

$(".sel-area").mouseleave(function() {
	$(".sel-area-box").css("display", "none");
})
$(".top-nav-dl").mouseenter(function() {
	var e = $(this).index();
	$(".gang").eq(e).css("color", "#fff")
	$(".dl_main").css("display", "block");
})
$(".top-nav-dl").mouseleave(function() {
	var e = $(this).index();
	$(".gang").eq(e).css("color", "")
	$(".dl_main").css("display", "none");
})
$(".dl_main").mouseenter(function() {
	$(this).css("display", "block")
	$(".top-nav-dl").css({
		"background": "#fff",
		"border": "1px solid #cdcdcd",
		"border-bottom": "1px white solid"
	});
	$(".top-nav-dl .gang").css("color", "#fff")
})
$(".dl_main").mouseleave(function() {
	$(this).css("display", "none")
	$(".top-nav-dl").css({
		"background": "",
		"border": "",
		"border-bottom": "1px white solid"
	});
	$(".top-nav-dl .gang").css("color", "")
})
$(".list_tm").mouseenter(function() {
	var n = $(this).index();
	$(".gang").eq(n - 1).css("color", "#fff")
	$(".tm_kuai").css("display", "block");
})
$(".list_tm").mouseleave(function() {
	var n = $(this).index();

	$(".gang").eq(n).css("color", "")
	$(".tm_kuai").css("display", "none");
})
$(".tm_kuai").mouseenter(function() {
	$(this).css("display", "block")
	$(".list_tm").css({
		"background": "#fff",
		"border": "1px solid #cdcdcd",
		"border-bottom": "1px white solid"
	});
	$(".list_tm .gang").css("color", "#fff")
})
$(".tm_kuai").mouseleave(function() {
	$(this).css("display", "none")
	$(".list_tm").css({
		"background": "",
		"border": "",
		"border-bottom": "1px white solid"
	});
	$(".list_tm .gang").css("color", "")
})
$(".list_sjb").mouseenter(function() {
	var n = $(this).index();
	$(".gang").eq(n - 2).css("color", "#fff")
	$(".sjb_kuai").css("display", "block");
})
$(".list_sjb").mouseleave(function() {
	var n = $(this).index();

	$(".gang").eq(n).css("color", "")
	$(".sjb_kuai").css("display", "none");
})
$(".sjb_kuai").mouseenter(function() {
	$(this).css("display", "block")
	$(".list_sjb").css({
		"background": "#fff",
		"border": "1px solid #cdcdcd",
		"border-bottom": "1px white solid"
	});
	$(".list_sjb .gang").css("color", "#fff")
})
$(".sjb_kuai").mouseleave(function() {
	$(this).css("display", "none")
	$(".list_sjb").css({
		"background": "",
		"border": "",
		"border-bottom": "1px white solid"
	});
	$(".list_sjb .gang").css("color", "")
})
$(".bodyer_new_two div").mouseenter(function() {
	var n = $(this).index();
	$(".shan").eq(n).stop().animate({
		"left": "570px"
	}, 1000, function() {
		$(".shan").eq(n).css({
			"left": "-242px"
		})
	})
})

$(".bodyer_f1 li").mouseenter(function() {
	var n = $(this).index();
	$(this).find(".addyy").addClass("yinying");
	$(this).find(".addfloat").fadeIn(500)

})
$(".bodyer_f1 li").mouseleave(function() {
	var n = $(this).index();
	$(this).find(".addyy").removeClass("yinying");
	$(this).find(".addfloat").fadeOut(500)

})
$(".shoucang").mouseenter(function() {
	$(this).css("background", "#F10180")
	var h = $(this).index();
	$(this).find(".sty").css("color", "white")
	$(this).find(".scsp").css("color", "white")

})
$(".shoucang").mouseleave(function() {
	$(this).css("background", "")
	var h = $(this).index();
	$(this).find(".sty").css("color", "")
	$(this).find(".scsp").css("color", "")

})
$(".cengsc").mouseenter(function() {
	$(this).css("background", "#F10180")
	var h = $(this).index();
	$(this).find(".sty").css("color", "white")
	$(this).find(".scsp").css("color", "white")

})
$(".cengsc").mouseleave(function() {
	$(this).css("background", "")
	var h = $(this).index();
	$(this).find(".sty").css("color", "")
	$(this).find(".scsp").css("color", "")

})
$(".f2main_list").mouseenter(function() {
	var a = $(this).index();
	$(this).find(".cengsc").css("display", "block");
	$(this).find(".f2main_list_ying").fadeIn(500);
	$(this).find(".f2main_list_ying").fadeOut(500);

})
$(".f2main_list").mouseleave(function() {
	var a = $(this).index();
	$(this).find(".cengsc").css("display", "none");
})

$(".bz").mouseenter(function() {
	var n = $(this).index();
	$(this).find(".biaozhi").css("background", "#DF147F")
	$(this).find(".tishi").stop().animate({
		"left": "-122px"
	})

})
$(".bz").mouseleave(function() {
		var n = $(this).index();
		$(this).find(".biaozhi").css("background", "#262626")
		$(this).find(".tishi").stop().animate({
			"left": "122px"
		})

	})
	// 左侧导航
$(function() {
	// 展示默认背景
	var num = 0,
		$left_box = $(".left_box"),
		$sideBarMenu = $(".left_box li");
	$sideBarMenu.each(function(index, ele) {
		num = index * 38;
		$(ele).css("background-position", "0 -" + num + "px");
	});

	var TOP = 0;
	// 滚动效果
	$(window).scroll(function() {
		TOP = $(document).scrollTop();

		if(TOP >= ($("#shenghuo").offset().top)-40) {
			$sideBarMenu.eq(6).addClass("current").siblings().removeClass();

		} else if(TOP >= ($("#jujia").offset().top)-40) {
			$sideBarMenu.eq(5).addClass("current").siblings().removeClass();

		} else if(TOP >= ($("#meizhuang").offset().top)-40) {
			$sideBarMenu.eq(4).addClass("current").siblings().removeClass();

		} else if(TOP >= ($("#shipin").offset().top)-40) {
			$sideBarMenu.eq(3).addClass("current").siblings().removeClass();

		} else if(TOP >= ($("#nanshi").offset().top)-40) {
			$sideBarMenu.eq(2).addClass("current").siblings().removeClass();

		} else if(TOP >= ($("#nvzhuang").offset().top)-40) {
			$sideBarMenu.eq(1).addClass("current").siblings().removeClass();

		} else if(TOP >= $("#jingxuan").offset().top-40) {
			$sideBarMenu.eq(0).addClass("current").siblings().removeClass();

		} else if(TOP > 1100) {
			$left_box.fadeIn();
		} else {
			$left_box.fadeOut();
		}
	});
	
	$("#gotop").click(function(){
					
					$("body,html").animate({
						scrollTop:0
					},1000);
				})
			
});
$(".link-anim dd").mouseenter(function(){
	$(this).animate({
		"margin-left":"5px"
	},100)
})
$(".link-anim dd").mouseleave(function(){
	$(this).animate({
		"margin-left":"0px"
	},100)
})

//$(".left_box li").mouseenter(function(){
//	$(this).addClass("current").siblings().removeClass("current");
//})


//顶导航固定
 $(function () {
            
            $(window).scroll(function () {
                var docSccrollTop = $(document).scrollTop();
                if(docSccrollTop > 128){
                    $(".main_nav").css({"position":"fixed","z-index":"80","top":0});
                    // 此时 nav的位置固定，如果不设置 main部分的margin-top的话，将有一部分内容被挡住 nav的高度+开始设置的20
                    $(".main").css("margin-top","0");
                }else{
                    $(".main_nav").css({"position":"static"});  /*静态定位*/
                    $(".main").css("margin-top","0");
                }
            });
        });
var areaAA=document.getElementById("sel-area-box").getElementsByTagName("a")
		var HeaderAreaAA=document.getElementById("this_area")
		for(i=0;i<areaAA.length;i++)
		{
		areaAA.item(i).onclick=function(){
			HeaderAreaAA.innerHTML=this.innerHTML;	
			
		}
			
		}
		$("#sel-area-box").find("a").click(function(){
			$("#sel-area-box").find("a").removeClass("ys1")
			$(this).addClass("ys1");
		})
       