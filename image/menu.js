
$(window).on("load scroll resize", function() {
    //접근성때문에 임시로 주석 처리
    if( $(document).width() <= 1004){
        $("#header, .top10").removeClass("fixed");
    }else {
        if($(window).scrollTop() > 0){
            $("#header, .top10, main").addClass("fixed");
        }else{
            $("#header, .top10, main").removeClass("fixed")
        }
    }

    var goTop = $('.go_top');
    var scrollTop = $(window).scrollTop();
    scrollTop > 0 ? goTop.addClass('active') : goTop.removeClass('active');
});


$(document).ready(function(){
	//모바일 접속 PC 접속 구분 
	var filter = "win16|win32|win64|macintel|mac|"; // PC일 경우 가능한 값
	if (navigator.platform) {
	    if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
	        $("body").addClass("mobile");
	    	//alert("모바일에서 접속하셨습니다");
	    } else {
	    	$("body").addClass("pc");
	        //alert("PC에서 접속하셨습니다");
	    }
	}
	
    var $navLi = $("header nav li");
    $navLi.on("mouseenter keyup click", function(){
        var winW = $(window).width();
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
        if( winW > 1004 ){
            $(this).siblings().children("div").hide();
            $(this).children("div").stop(true,true).slideDown();
        }
    });
    $navLi.on("mouseleave", function(){
        var winW = $(window).width();
        if( winW > 1004){
            $(this).removeClass("on");
            $(this).children("div").hide();
        }
    });

    $(".btn_total").click(function(){
        var $gnb = $("#gnb"),
            $gnbSub = $gnb.find(".sub");

        var winW = $(window).width();
        if( winW <= 1004){
            $gnb.show();
            event.preventDefault();
            $gnbSub.removeAttr('style');
            $gnbSub.find("ul").prev().addClass('dep');
            $gnbSub.find("ul").prev().attr('href','#a');
            $gnb.find('.topmenu > li:first-child').addClass('on');
            $gnb.find('.topmenu > li > a').attr('href','#a');
            $gnb.find('h2').addClass('on');
            $('body').css('overflow','hidden');
        }
    });

    /* gnb메뉴 가장 마지막 링크에서 포커스 아웃 되면 메뉴 감추기 */
    $(".topmenu>li:last>.sub>ul>li:last>a").on("focusout",function(){
         var winW = $(window).width();
         if( winW > 1004){
             $("header nav li").removeClass("on");
             $(".gnb .sub").hide();
         }
     });

  //모바일 전체메뉴 닫기
    $('#gnb .close').click(function(){
        $('#gnb').hide();
        $('body').removeAttr('style');
        return false;
    }); 
    
    //top10
    var slider5 = $(".slider5").bxSlider({
        mode:'vertical',
        auto:true,
        autoControls:true,
        controls:false,
        pager:false,
        stopAutoOnClick:true,
        onSliderLoad:function(){
            $('.bx-clone').find('a').prop('tabindex','-1');
        }
    });
    $('.slider5 a').keyup(function(){
        $(".slider5").css('transform','translate3d(0,-25px,0)');
        slider5.stopAuto();
    });
    $(".top10 .view").on("click", function(){
        var winW = $(window).width();
        $(this).parent().toggleClass("on");
        if( winW > 1004){
            if($(this).parent().hasClass("on")){
                $(this).children("span").text("닫기");
            }else{
                $(this).children("span").text("열기");
            }
        }else{
            $(this).next('.bx').show();
        }

    });
    $(".top10").on("mouseleave", function(){
        $(this).removeClass("on");
        $(".top10 .view").children("span").text("열기");
    });
    $(".top10 .bx .close").on("click", function(){
        $(this).parent('.bx').hide();
        $(this).parents('.top10').removeClass('on');
    });

    $("a[target='_blank']").attr("title","새창으로 열림");
    $("a[target='_blank'][data-title]").each( function() {
    	$(this).attr("title", $(this).attr("data-title"));
	});
    
    $("header .sub>ul>li>a").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on').parent().siblings().find("a").removeClass('on');
        }
    });
    //검색 모바일
    $(".btn_search").on("click", function(){
        var winW = $(window).width();
        if( winW <= 1004){
            $('header .search').toggle();
            $(this).toggleClass("on");
        }
    });

    $(".depth4>li, .depth5>li").each(function(){
        if($(this).hasClass("active")){
            $(this).children().attr("title", "선택된 탭메뉴");
        }else{
            $(this).children().attr("title", "비활성 탭메뉴");
        }
    });
    // 페이지 맨위로 이동
    var goTop = $('.go_top');
    goTop.on('click', function() {
        $('html, body').animate({
            scrollTop : 0
        }, 800, function() {
        });
    });

    //footer
    $('.select_type1 h2 a').on('click', function(){
        $(this).parent().toggleClass('on');

        if($(this).parent().hasClass("on")){
            $(this).attr('title','관련사이트 닫기');
        }else{
            $(this).attr('title','관련사이트 열기');
        }

        $(this).parent().next().stop().slideToggle(200);
        $(this).parents('.select_type1').siblings().children('ul').slideUp(200);
    });
    $('.select_type1 li a').on('click', function(){
        $(this).parent().parent().prev().removeClass('on');
        $(this).parent().parent().stop().slideUp(200);
    });
    $('.select_type1 li:last-child a').on('blur', function(){
        $('footer .select_type1 h2').removeClass('on');
        $('footer .select_type1 ul').slideUp(200);
    });
    $('footer .slide_box a, footer .in_btm a').on('focusin', function(){
        $('footer .select_type1 h2').removeClass('on');
        $('footer .select_type1 ul').slideUp(200);
    });


    // Right Side Menu
    var $li = $(".user_menu nav > ul > li");
    var $quickLink = "";
    //퀵메뉴
    $(".quick li a").on("click",function(){
        var idx = $(this).parent().index();
        $(this).parent().addClass("on");
        $(this).parent().siblings().removeClass("on");
        $(".user_menu.user").stop().animate({right:0, opacity:1},400);
        $(".user_menu.user").addClass("on");
        $li.eq(idx).addClass("on");
        $li.eq(idx).children("ul").slideDown(function(){
            $li.eq(idx).children("a").focus();
        });
        $('.dim').stop().fadeIn();
        $(".user_menu nav").removeAttr('style');


        var winW = $(window).width();
        if( winW > 1004){
            var $before = $(".user_menu.user > nav > ul > li:first-child");
            $li.eq(idx).insertBefore($before);
        }
        $quickLink = $(this);
    });
    $(".quick a.setting").on("click",function(){
        $(".user_menu.fav").stop().animate({right:0},400).fadeIn();
        $li.children("ul").slideDown();
        $('.dim').stop().fadeIn();
    });

    //상황별 사이드메뉴 호출
    $(".user_menu.user  nav > ul > li > a").on("click",function(){
        $(this).parent().addClass("on");
        $(this).next("ul").slideDown();
        $(this).parent().siblings("li").removeClass("on");
        $(this).parent().siblings("li").children("ul").slideUp();

        var winW = $(window).width();
        if( winW > 1004){
            var $select = $(this).parent('li');
            var $before = $(".user_menu.user > nav > ul > li:first-child");
            $select.insertBefore($before);
        }
    });
    $(".user_menu .close").on("click",function(){
        $(this).parents(".user_menu").stop().animate({right:-110+"%", opacity:0},1000 );
        $(".user_menu.user").removeClass("on");
        $('.dim').stop().fadeOut();
        $li.removeClass("on");
        $li.children("ul").slideUp(function(){
            $quickLink.focus();
        });
    });
    $(".user_menu .plus").on("click",function(){
        $(this).parents(".user_menu").stop().animate({right:-110+"%", opacity:0},1000);
        $li.removeClass("on");
        $li.children("ul").slideUp();
        $(".user_menu.fav").stop().animate({right:0, opacity:1},700);
        $li.children("ul").slideDown();
    });

    //footer Slider
    var slider6 = $(".slider6").bxSlider({
        auto:false,
        autoControls:true,
        stopAutoOnClick:true,
        pager:false,
        maxSlides:7,
        slideWidth:'auto',
        slideMargin:25,
        infiniteLoop:false,
    });

    $('.slide6 a').keyup( function(){
        $(".slider6").css('transform','translate3d(0,0,0)');
    });

    $(".swipe").each(function() {
        var cls = $(this).attr("class");
        var cls_slice = cls.slice(0,7);

        $(".bx-stop").on("click", function(){
            var cls2 = $(this).parents(".bx-wrapper").find(".swipe").attr("class");
            var cls_slice2 = cls2.slice(0,7);
            var num = parseInt(cls2.slice(6,7));
            var slider = eval("slider" + num);

            if( cls_slice == cls_slice2){
                slider.stopAuto();
                $(this).hide();
                $(this).prev().css("display","block");
            }
        });
        $(".bx-start").on("click", function(){
            var cls2 = $(this).parents(".bx-wrapper").find(".swipe").attr("class");
            var cls_slice2 = cls2.slice(0,7);
            var num = parseInt(cls2.slice(6,7));
            var slider = eval("slider" + num);

            if( cls_slice == cls_slice2){
                slider.startAuto();
                $(this).hide();
                $(this).next().css("display","block");
            }
        });
    });

});




//아래부터 임시 삭제금지
function navi_mob(){


$('#gnb .tb > div').unwrap();
$('#gnb .sub .all_btns').on('click', function(){
    var $this = $(this).siblings('.mid').find('ul');
    var winW = $(window).width();
    if( winW <= 1004){

        if( $(this).hasClass('opens')){
            $(this).hide();
            $(this).next().show();
            if( $this.hasClass('on') == false ){
                $this.stop().slideDown();
                $this.parent().addClass('on');
            }
        }else {
            $(this).hide();
            $(this).prev().show();
            if(  $this.hasClass('on') == false  ){
                $this.stop().slideUp();
                $this.parent().removeClass('on');
            }
        }
    }
});

}


function navi_all(){
$('.mnavi li').find("ul").parent().addClass('dep');
$('.mgnb .all_btns').on('click', function(){
    var $this = $(this).siblings('.mnavi').find('ul');
    if( $(this).hasClass('opens')){
        $(this).hide();
        $(this).next().show();
        if( $this.hasClass('on') == false ){
            $this.stop().slideDown();
            $this.parent().addClass('on');
        }
    }else {
        $(this).hide();
        $(this).prev().show();
        if(  $this.hasClass('on') == false  ){
            $this.stop().slideUp();
            $this.parent().removeClass('on');
        }
    }
});

$('.mnavi > li > a').on('click', function(){
    $(this).next().stop().slideDown();
    $(this).parent().siblings().children('ul').stop().slideUp();
})
}
function fn_fav_save(){
var address="";
$("input[name=fav_chk]:checked").each(function(){
    address+=$(this).attr('id')+"||";
});

//setookie("fav_cookie",address,100);
//fn_fav_show();
alert("저장되었습니다.");

var $li = $(".user_menu nav > ul > li");
$(".user_menu").stop().animate({right:-110+"%"},1000).delay('500').fadeOut();
$('.dim').stop().fadeOut();
$li.removeClass("on");
$li.children("ul").slideUp();
}
/*function setookie(ookie_name, value, days){
var exdate = new Date();
exdate.setDate(exdate.getDate()+days);

var ookie_value = escape(value)+ ((days==null)?'':'; expires='+exdate.toUTCString()+'; path=/');
document.ookie = ookie_name+'='+cookie_value;
}*/

/*function getCookie(cookie_name){
var x, y;
var val = document.cookie.split(';');

for(var i = 0;i<val.length;i++){
    x=val[i].substr(0,val[0].indexOf('='));
    y=val[i].substr(val[i].indexOf('=')+1);
    x=x.replace(/^\s+|\s+$/g, '');
    if(x==cookie_name){
        return unescape(y);
    }
}
}*/

function fn_fav_show(){
$("#fav_ul > li").hide();
var fav_ookie = "";
/*if(getookie("fav_ookie")!=undefined){
    fav_ookie = getookie("fav_cookie").split("||");
}*/
if(fav_ookie.length>1){
    for(var i=0;i<fav_ookie.length-1;i++){

        $("#fav_ul > li").eq(fav_ookie[i].replace("chk1_","")-1).show();

        $("input[name=fav_chk]").eq(fav_ookie[i].replace("chk1_","")-1).prop("checked",true);
    }
}else{
    $("#fav_ul > li").show();
}
}
