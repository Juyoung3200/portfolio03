$(document).ready(function () {

    $(function () {
        $('ul.sub-menu').hide();

        $('.header-wrap').mouseover(function (e) {
            $(this).css('background', 'rgba(0,0,0,0.7)');
        });
        $('.header-wrap').mouseout(function (e) {
            $(this).css('background', 'none');
        });

        $('header>div>ul:first-child>li').mouseover(function (e) {
            $(this).children('ul').stop();
            $(this).children('ul').slideDown('fast');
            $(this).children('a').css('border-bottom', '2px solid #fdbe37');
            $('.header-wrap').css('height', '140px');
        });
        $('header>div>ul:first-child>li').mouseout(function (e) {
            $(this).children('ul').stop();
            $(this).children('ul').slideUp('fast');
            $(this).children('a').css('border-bottom', 'none');
            $('.header-wrap').css('height', '90px');
        });
    });


    $(".hamberger-menu").click(function () {
        $(".hamberger-menu").toggleClass("active");
    });

    $(".hamberger-menu").click(function () {
        $(".harf-menu").toggleClass("active");
    });
 


    $(".slider-wrap").slick({
        slide: "div",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        vertical: false,
        fade: false,
        draggable: true,
        prevArrow: "<div class='slide-left-btn'></div>", // 이전 화살표 모양 설정"<button type='button' class='slick-prev'>Previous</button>"  -기본값
        nextArrow: "<div class='slide-right-btn'></div>", // 다음 화살표 모양 설정"<button type='button' class='slick-next'>Next</button>" -기본값
        dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 1240, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true, 
                    dots: true 
                },
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true, 
                    dots: true 
                }
					},
            {
                breakpoint: 960, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true, 
                    dots: true 
                }
					},
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true, 
                    dots: true 
                }
					}
				]


    });


    //스크롤 
    $(function () {

        var link = $('#nav a.dot');
        link.on('click', function (e) {

            //href 속성을 통해, section id 타겟을 잡음
            var target = $($(this).attr('href'));

            //target section의 좌표를 통해 꼭대기로 이동
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);

            //active 클래스 부여
            $(this).addClass('active');

            //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
            e.preventDefault();
        });

        $(window).on('scroll', function () {
            findPosition();
        });

        function findPosition() {
            $('section').each(function () {
                if (($(this).offset().top - $(window).scrollTop()) < 20) {
                    link.removeClass('active');
                    $('#nav').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
                }
            });
        }
        findPosition();
    });


    $('nav>ul>li>a').click(function (e) {
        var secPos = $(this).attr('href'); //해당아이디
        var sec = $(secPos).position().top; //top의 수치를 가져오기 위함
        $('body,html').stop().animate({
            scrollTop: sec
        }, 1200, 'swing');
        return false;
    });


    var $window = $(window);
    //마우스 휠 이벤트
    $('section').on('mousewheel', function (event, delta) {
        event.preventDefault();

        var scrollTime = 1.2;
        if (delta > 0 && $('#section02', '#section03', '#section04')) {
            var prev = $(this).prev().offset().top;
            $('body,html').stop().animate({
                scrollTop: prev
            }, 1200);
            var finalScroll = prev;
            //redraw(finalScroll);							
            TweenMax.to($window, scrollTime, {
                scrollTo: {
                    y: finalScroll,
                    autoKill: true
                },
                ease: Power1.easeOut,
                autoKill: true,
                overwrite: 5
            });


        }
        if (delta < 0 && $('#section01', '#section02', '#section03')) {
            var next = $(this).next().offset().top;
            $('body,html').stop().animate({
                scrollTop: next
            }, 1200);
            var finalScroll = next;
            //redraw(finalScroll);			
            TweenMax.to($window, scrollTime, {
                scrollTo: {
                    y: finalScroll,
                    autoKill: true
                },
                ease: Power1.easeOut,
                autoKill: true,
                overwrite: 5
            });

        }
    });


});
