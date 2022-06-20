$(document).ready(function(){
	
	// 배너존
	var slider2 = $(".slider2").bxSlider({
		auto:true,
		autoControls:true,
		prevText:"이전",
		nextText:"다음",
		startText:"재생",
		stopText:"정지",
		autoStart:($(".slider2").children().length>1) ? true:false,
		stopAutoOnClick:true,
		pager:true,
		pagerType: "short",

		onSliderLoad:function(){
			$('.bx-clone').find('a').prop('tabindex','-1');
		},
		onSlideAfter:function(){
			$('.slider2 > div').each(function(){
				if( $(this).attr('aria-hidden') == 'false'){
					$(this).find('a').attr('tabindex','0');
				}
			});
		}
	});
	$(".slider2").keyup(function(){
		$(".slider2").css('transform','translate3d(-383px,0,0)');
		slider2.stopAuto();
	});
	
	// 알림존
	var slider4 = $(".slider4").bxSlider({
		auto:true,
		autoControls:true,
		prevText:"이전",
		nextText:"다음",
		startText:"재생",
		stopText:"정지",
		autoStart:($(".slider4").children().length>1) ? true:false,
		stopAutoOnClick:true,
		pager:true,
		pagerType: "short",
		onSliderLoad:function(){
			$('.bx-clone').find('a').prop('tabindex','-1');
			/*
			if($(".slider4").children().length-2<2){
				$(".bx-stop").css('display','none');
				$(".bx-stop").prev().css('display','inline-block');
			}
			*/
		},
		onSlideAfter:function(){
			$('.slider4 > div').each(function(){
				if( $(this).attr('aria-hidden') == 'false'){
					$(this).find('a').attr('tabindex','0');
				}
			});
		}
	});
	$(".slider4").keyup(function(){
		$(".slider4").css('transform','translate3d(-383px,0,0)');
		slider4.stopAuto();
	});

	// 카드뉴스
	var slider3 = $(".slider3").bxSlider({
		auto:true,
		autoControls:true,
		prevText:"이전",
		nextText:"다음",
		startText:"재생",
		stopText:"정지",
		autoStart:($(".slider3").children().length>1) ? true:false,
		stopAutoOnClick:true,
		pager:true,
		// controls:true,
		pagerType: "short",
		onSliderLoad:function(){
			$('.bx-clone').find('a').prop('tabindex','-1');
		},
		onSlideAfter:function(){
			$('.slider3 > div').each(function(){
				if( $(this).attr('aria-hidden') == 'false'){
					$(this).find('a').attr('tabindex','0');
				}
			});
		}
	});
	$(".slider3").keyup(function(){
		$(".slider3").css('transform','translate3d(-383px,0,0)');
		slider3.stopAuto();
	});
	
	if(slider2.getSlideCount() == 1){
		$(".bx-stop:eq(1)").css('display','none');
		$(".bx-stop:eq(1)").prev().css('display','inline-block');
	}
	
	if(slider4.getSlideCount() == 1){
		$(".bx-stop:eq(2)").css('display','none');
		$(".bx-stop:eq(2)").prev().css('display','inline-block');
	}
	
	if(slider3.getSlideCount() == 1){
		$(".bx-stop:eq(3)").css('display','none');
		$(".bx-stop:eq(3)").prev().css('display','inline-block');
	}

	//만성질환 건강통계
	var slider5 = $(".stat_slide>ul").bxSlider({
		pager:false,
		prevText:"<span class='sr_only'>이전</span>",
		nextText:"<span class='sr_only'>다음</span>",
		adaptiveHeight:true,
		touchEnabled:false
	});

	//alert($(".bx-stop").length);
	
	// $(".bx-stop").css('display','none');
	// $(".bx-stop").prev().css('display','inline-block');

	// alert($(".slider3").children().length);
	// alert(slider3.getSlideCount());


	/*
	$(".bx-stop").click(function(){

	});
	 
	
	$(".slider2").click(function(){
		//alert("aa");

	});
	
	$(".slider2").keyup(function(){
		//alert("bb");
	});
	*/

	// sns소식 스크립트 + 반응형
	var sns1 = $(".sns.no1").bxSlider({
		auto:false,
		autoControls:false,
		pager:false,
		maxSlides:3,
		minSlides:1,
		slideMargin:50,
		moveSlides:1,
		slideWidth:270,
		stopAutoOnClick:false
	});
	/*
	var unit, winW;
	$(window).on('resize load',function(){
		var winW = $(window).width();
		if( winW < 768){
		//var winW = $(this).width()/200|0;
		//unit = winW > 4 ? 4 : winW;
			sns1.reloadSlider({
				slideWidth:320
			});
		}else{
			sns1.reloadSlider({
				maxSlides:4,
				minSlides:1,
				slideMargin:50,
				moveSlides:1,
				slideWidth:200
			});
		}

	});
	*/

	var sns2 = $(".sns.no2").bxSlider({
		auto:false,
		autoControls:false,
		pager:false,
		maxSlides:3,
		minSlides:1,
		slideMargin:50,
		moveSlides:1,
		slideWidth:270,
		stopAutoOnClick:false
	});
	/*
	var unit2, winW2;
	$(window).on('resize load',function(){
		var winW = $(window).width();
		if( winW < 768){
			sns2.reloadSlider({
				slideWidth:320,
			});
		}else{
			sns2.reloadSlider({
				maxSlides:4,
				minSlides:1,
				slideMargin:50,
				moveSlides:1,
				slideWidth:200
			});
		}

	});
	*/
	$(".tabs .ico2.on a").on("click",function(){
		sns2.reloadSlider();
	});

	$(".tabs .ico4 a").on("click",function(){
		sns4.reloadSlider();
	});

	var sns4 = $(".sns.no4").bxSlider({
		auto:false,
		autoControls:false,
		pager:false,
		maxSlides:3,
		minSlides:1,
		slideMargin:50,
		moveSlides:1,
		slideWidth:270,
		stopAutoOnClick:false
	});
	/*
	var unit4, winW4;
	$(window).on('resize load',function(){
		var winW = $(window).width();
		if( winW < 768){
			sns4.reloadSlider({
				slideWidth:320,
			});
		}else{
			sns4.reloadSlider({
				maxSlides:4,
				minSlides:1,
				slideMargin:50,
				moveSlides:1,
				slideWidth:200
			});
		}
	});
	*/

	//탭 선택에 따라 좌우버튼 기능 전환
	$(".sns_box .control a").on("click", function(){

		if( $(this).parent().hasClass('idx0') ){
			if( $(this).hasClass('prev') ){
				sns2.goToPrevSlide();
			}else{
				sns2.goToNextSlide();
			}
		}else if( $(this).parent().hasClass('idx1') ){
			if( $(this).hasClass('prev') ){
				sns3.goToPrevSlide();
			}else{
				sns3.goToNextSlide();
			}
		}else if( $(this).parent().hasClass('idx2') ){
			if( $(this).hasClass('prev') ){
				sns4.goToPrevSlide();
			}else{
				sns4.goToNextSlide();
			}
		}else if( $(this).parent().hasClass('idx3') ){
			if( $(this).hasClass('prev') ){
				sns1.goToPrevSlide();
			}else{
				sns1.goToNextSlide();
			}
		}

	});
	//sns부분 슬라이더 접근성 보완
	$('.sns_box li a').on('keyup', function(){
		$('.tab_con.on .bx-viewport .bx-clone').css('visibility','hidden');
	});
	$('.sns_box li a').on('blur', function(){
		$('.tab_con.on .bx-viewport .bx-clone').css('visibility','visible');
	});

	//탭메뉴
	$(".tabs ul a").on("click",function(){

		var idx = $(this).parent().index();
		
		
		
		if($(this).parent().hasClass('ico1')){

		}else if($(this).parent().hasClass('ico3')){

		}else{
			$(this).parent().addClass("on")
			$(this).attr("title", "선택된 탭메뉴");
			$(this).parent().siblings().removeClass("on");
			$(this).parent().siblings().children().attr("title", "비활성 탭메뉴");
			$(this).parent().parent().parent().children(".tab_con").eq(idx).addClass("on");
			$(this).parent().parent().parent().children(".tab_con").eq(idx).siblings("div").removeClass("on");
			if( $(this).parents('.sns_box') ){
				$('.sns_box .control').removeClass().addClass('idx' + (idx + 1)).addClass('control');
			}

		}



	});
	
	//20200709_접근성보완 탭메뉴
	/* 메인 탭메뉴 */
	var tab = $(".tabs2"),
	    tabBtn = tab.find(">ul>li>a"),
	    tabCon = $(".tab_con");

	tabAuto();

	function tabAuto(){
	    tab.each(function(e){
	        var t = $(this),
	            btn = t.find(">ul>li>a");

	        btn.each(function(){
	            var t = $(this),
	                con = t.find(".tab_con");

	            if(t.parent().hasClass("on")){
	                var tabH = t.innerHeight() + t.next().innerHeight();

	                t.parents(".tabs2").height(tabH);
	                con.removeClass("on").hide();
	                btn.attr("title","비활성 탭메뉴");
	                t.next().addClass("on").show();
	                t.attr("title","선택된 탭메뉴");
	            }
	        });
	    });
	}

	tabBtn.on("click focusin",function(){
	    var t = $(this);

	    var tabH = t.innerHeight() + t.next().innerHeight();
	    t.closest(".tabs2").height(tabH);

	    t.closest(".tabs2").find(".tab_con").removeClass("on").hide();
	    t.closest(".tabs2").find(">ul>li>a").attr("title","비활성 탭메뉴").parent().removeClass("on");
	    t.attr("title","선택된 탭메뉴").parent().addClass("on");
	    t.next().addClass("on").show();

	    return false;
	});

	$(window).on("resize",function(){
	    tabAuto();
	});



	// 시작,정지 아이콘 변환
	$(".bx-controls-auto a").on("click", function(){
			if( $(this).hasClass('bx-stop') ){
				$(this).css('display','none');
				$(this).prev().css('display','inline-block');
			}else {
				$(this).css('display','none');
				$(this).next().css('display','inline-block');
			}
	});


});

//비주얼 슬라이드
$(function () {
	$('#slider-count').prepend('<strong class="current-index"></strong> / ');
	var slider1 = $('.main-bx').bxSlider({
	    auto: true,
	    pause:10000,
	    autoControls:true,
	    onSliderLoad: function (currentIndex){
	        $('#slider-count .current-index').text(currentIndex + 1);
	        $('.main-bx .sw1').attr('z-index','3');
	        $('.main-bx .sw2').attr('z-index','3');
	        $('.main-bx .sw3').attr('z-index','3');
	        $('.main-bx .sw4').attr('z-index','3');
	        $('.main-bx .sw1.bx-clone').attr('z-index','0');
	        $('.main-bx .sw4.bx-clone').attr('z-index','0');
	    },
	    onSlideBefore: function ($slideElement, oldIndex, newIndex){
	        $('#slider-count .current-index').text(newIndex + 1);
	        $('#progress').attr("class", 'type' + newIndex);
	    },pagerCustom: '#bx-pager'
	});
	$('#slider-count').append(slider1.getSlideCount());
});




