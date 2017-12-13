var a=n=0;
		var timer=null;
		
			$(".thumbs li").mouseenter(function(){
				$(this).addClass("current").siblings().removeClass("current");
				var a=$(this).index();
				$(".view_bd li").eq(a).stop().show().siblings().stop().hide();
				n=a;
			});
				
			$(".banner_imgs li:gt(0)").hide();
$(".havestorage").click(function(){
//	$(this).find(i).css("visibility","visible" )
$(this).children("i").css("visibility","visible");
$(this).css("border-color","#ff666b").siblings().css("border-color","").children("i").css("visibility","hidden");
})
//数量加减
var i=$("#num").val()

				$("#add").click(function(){
					i++;
					console.log(i);
					$("#num").val(i);
					
				})
				$("#sum").click(function(){
					i--;
					if(i<=1){
						i=1;
					}
					console.log(i);
					$("#num").val(i);
					
				})
//详情table切换
$(".tabs_bar li").click(function(){
	$(this).addClass("current").siblings().removeClass("current");
});
//详情table切换固定
$(function () {
            
            $(window).scroll(function () {
                var docSccrollTop = $(document).scrollTop();
//              var tabs_barTop = $(".tabs_bar").offset().top;
//             console.log(tabs_barTop);
                if(docSccrollTop > 813){
                	
                    $(".tabs_bar").css({"position":"fixed","z-index":"80","top":0});
                    // 此时 nav的位置固定，如果不设置 main部分的margin-top的话，将有一部分内容被挡住 nav的高度+开始设置的20
                    $(".detail_part").css("margin-top",0);
                }else{
                    $(".tabs_bar").css({"position":"static"});  /*静态定位*/
                    $(".detail_part").css("margin-top","0");
                }
            });
        });
