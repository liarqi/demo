$(".more-btn").click(function(){
//	console.log($(this).length);
	var i=$(this).parents("dl").find("dd").height();
	if (i<=24) {	
		$(this).parents("dl").find("dd").stop().animate({"height":'120px'},400);
	} else{
		$(this).parents("dl").find("dd").stop().animate({"height":'24px'},400);
	}
	console.log(i);
});

$(".more-btn2").click(function(){
	console.log($(this).length);
	var i=$(this).parents("dl").find("dd").height();
	if (i<=24) {	
		$(this).parents("dl").find("dd").stop().animate({"height":'180px'},400);
	} else{
		$(this).parents("dl").find("dd").stop().animate({"height":'24px'},400);
	}
	
});



//楼宇切换
 var num = 0, $subbnav = $("#floor_nav"),$sideBarMenu = $("#floor_nav li");
            $sideBarMenu.each(function (index, ele) {
                num = index * 78;
                $(ele).css("background-position", "0 -"+num + "px");
            });

            var TOP = 0;
            // 滚动效果
            $(window).scroll(function () {
                TOP = $(document).scrollTop();

                if(TOP >= $(".mei").offset().top){
                    $sideBarMenu.eq(3).addClass("current").siblings().removeClass();
                } else if(TOP >= $(".fu").offset().top){
                    $sideBarMenu.eq(2).addClass("current").siblings().removeClass();
                } else if(TOP >= $(".jia").offset().top){
                    $sideBarMenu.eq(1).addClass("current").siblings().removeClass();
                } else if(TOP >= $(".dian").offset().top){
                    $sideBarMenu.eq(0).addClass("current").siblings().removeClass();
                } else if(TOP > 0){
                    $subbnav.fadeIn();
                }else{
                    $subbnav.fadeOut();
                }
            });

            $sideBarMenu.click(function () {
                $("html,body").stop().animate({
                    // 给具有相同效果的元素添加 共同的样式 jd
                    "scrollTop" : $(".jd").eq($(this).index()).offset().top
                },1000);
            });

            $(".back").click(function () {
				//$(document).scrollTop(0);
                $("html,body").animate({"scrollTop":0},300); // html,body ?
            });