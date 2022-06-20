
// swiper slide section

const swiper01 = new Swiper('.sw_top', {
    direction: 'vertical',
    loop: true,
    slidesPerView : 'auto', 
    spaceBetween : 6, 
    loop : true, 
    loopAdditionalSlides : 1, 
    pagination : false,
    autoplay : { 
      delay : 2000,  
      disableOnInteraction : false,  
    },

});

//slide arrow rotate
$('.toggle-btn i').click(function(){
    $('.toggle-btn  > i').toggleClass('active');
    $('.slide-sec').toggleClass('active');
    console.log('start');
})

// main slide
var swiper02 = new Swiper(".swiper-nav", {
  // loop: true,
  // spaceBetween: 10,
  slidesPerView: 4,
});
var swiper03 = new Swiper(".swiper-view", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper02,
  },
});

//info tab
$(".tab01-menu li").on("click", function(){
  const idx = $(this).index();
 
  $(`.tab-content1`).hide();
  $(`.tab-content1.con${idx+1}`).show();
  $(".tab01-menu li").removeClass("active");
  $(this).addClass("active");
});
//tab menu hover가 none 되도록 다시 해보기
// $(".tab01-menu li.active").hover(function(){
//   $(this).css('border-bottom', ' 2px solid #21a089')
//   $(this).css('hover','none')
// })

$(".tab02-menu li").on("click", function(){
  const idx = $(this).index();
 
  $(`.tab-content2`).hide();
  $(`.tab-content2.cons${idx+1}`).show();
  $(".tab02-menu li").removeClass("active");
  $(this).addClass("active");
});

// slide-wrap 부분 slide 
const swiper04 = new Swiper('.bs-s01', {
  loop: true,
  pagination: {
    el: '.swiper-pagination01',
    type: "fraction"
  },
  navigation: {
    nextEl: '.swiper-button-next01',
    el:'start01',
    el:'stop01',
    prevEl: '.swiper-button-prev01',
  },
  slidesPerView : 'auto', 
  spaceBetween : 6, 
  loopAdditionalSlides : 1, 
  autoplay : {  
    delay : 2000,  
    disableOnInteraction : false,  
  },
});

$('.start01').on('click', function() {
  swiper04.autoplay.start();
  $(this).css('display','none');
  $('.stop01').css('display','block');
  return false;
});
$('.stop01').on('click', function() {
  swiper04.autoplay.stop();
  $(this).css('display','none');
  $('.start01').css('display','block');
  return false;
});


const swiper05 = new Swiper('.bs-s02', {
  loop: true,
  pagination: {
    el: '.swiper-pagination02',
    type: "fraction"
  },
  navigation: {
    nextEl: '.swiper-button-next02',
    el:'start02',
    el:'stop02',
    prevEl: '.swiper-button-prev02',
  },
  slidesPerView : 'auto', 
  spaceBetween : 6, 
  loopAdditionalSlides : 1, 
  autoplay : {  
    delay : 2000,  
    disableOnInteraction : false,  
  },
});
$('.start02').on('click', function() {
  swiper05.autoplay.start();
  $(this).css('display','none');
  $('.stop02').css('display','block');
  return false;
});
$('.stop02').on('click', function() {
  swiper05.autoplay.stop();
  $(this).css('display','none');
  $('.start02').css('display','block');
  return false;
});


const swiper06 = new Swiper('.bs-s03', {
  loop: true,
  pagination: {
    el: '.swiper-pagination03',
    type: "fraction"
  },
  navigation: {
    nextEl: '.swiper-button-next03',
    el:'start03',
    el:'stop03',
    prevEl: '.swiper-button-prev03',
  },
  slidesPerView : 'auto', 
  spaceBetween : 6, 
  loopAdditionalSlides : 1, 
  autoplay : {  
    delay : 2000,  
    disableOnInteraction : false,  
  },
});
$('.start03').on('click', function() {
  swiper06.autoplay.start();
  $(this).css('display','none');
  $('.stop03').css('display','block');
  return false;
});
$('.stop03').on('click', function() {
  swiper06.autoplay.stop();
  $(this).css('display','none');
  $('.start03').css('display','block');
  return false;
});


const swiper07 = new Swiper('.bs-s04', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: "fraction"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView : 'auto', 
  spaceBetween : 6, 
  loopAdditionalSlides : 1, 
});

//top-btn
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
      $('.top-btn').fadeIn();
    } else {
      $('.top-btn').fadeOut();
    }
});
  
$('.top-btn').click(function () {
    $('html, body').animate({
          scrollTop: 0
      }, 500);
      return false;
  });

// footer arrow
$('.footer-wrap .footer-right .select-box .select').click(function(){
  $(this).find('p > i').toggleClass('active');
  $(this).children("ul").slideToggle();
  $(this).children().siblings().removeClass("active").find(".select-box ul").slideUp(500);
  $(this).children().toggleClass("active");
});

// footer arrow(반응형)
$('.footer-wrap-re .footer-right .select-box .select').click(function(){
  $(this).find('p > i').toggleClass('active');
  $(this).children("ul").slideToggle();
  $(this).children().siblings().removeClass("active").find(".select-box ul").slideUp(500);
  $(this).children().toggleClass("active");
});