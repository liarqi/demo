var a=n=0;
		var timer=null;
		
			$(".lis li").mouseenter(function(){
				$(this).addClass("xz").siblings().removeClass("xz");
				var a=$(this).index();
				$(".banner_imgs li").eq(a).stop().fadeIn(500).siblings().stop().fadeOut(500);
				n=a;
			});
			timer=setInterval(next,2000);
			
			function next(){
				
				n++;
				if(n>5){
					n=0;
				}
				$(".lis li").eq(n).addClass("xz").siblings().removeClass("xz");
				$(".banner_imgs li").eq(n).stop().fadeIn(500).siblings().stop().fadeOut(500);
					
			};
			
			$(".banner_imgbg").hover(function(){
				clearInterval(timer);
				$(".jt p").stop().fadeIn();
			},function(){
				timer=setInterval(next,2000);
				$(".jt p").stop().fadeOut();
			});
			$(".jtr").click(function(){
				n++;
				if(n>4){
					n=0;
				}
				$(".lis li").eq(n).addClass("xz").siblings().removeClass("xz");
				console.log(n);
				$(".banner_imgs li").eq(n).fadeIn(500).siblings().fadeOut(500);
			})
			$(".jtl").click(function(){
				n--
				if(n==-1){
					n=4;
				}
				$(".lis li").eq(n).addClass("xz").siblings().removeClass("xz");
				$(".banner_imgs li").eq(n).fadeIn(500).siblings().fadeOut(500);
			})
			$(".banner_imgs li:gt(0)").hide();