

$(function(){

  //스크롤 천천히
 /*  $(function() {

    $(this).impulse();
    $('html').impulse({effect: 'easeOutSine', fluid: false});
  });
   */
  
    // loder 영역

    $(document).ready(function() {
        // 3초 후에 요소의 투명도를 0으로 설정
        setTimeout(function() {
          $("body").removeClass('hide')
          $(".sc-loader").fadeOut(1500);
        },3500); // 3000밀리초 = 3초
      });


      // 사이드메뉴
      $('.fix-btn').click(function(){

        $('.side-area, .side-item').toggleClass('on')
      });

      gsap.to('.header-fix',{ 

        scrollTrigger: {
          trigger: 'main', 
          scrub:0.5,
          start: '0% 0%', 
          end: '0% 100%', 
      },
          opacity:1

     
      })


      // about 스와이퍼
      var swiper = new Swiper(".top-swiper", {
        slidesPerView: "auto", 
        loop: true,
        loopAdditionalSlides : 1,
        effect:'fade',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });




      // 커서 커스텀
      //구글 : cursor custom codepen

        $(document)
          .mousemove(function(e) {
          $('.cursor')
            .eq(0)
            .css({
              left: e.pageX,
              top: e.pageY
        });


      $('.btn-box, .sns-area, .fix-btn, .gnb-item, .sns-item, .logo, .work-sns').on({
        mouseover: function(){
            $('.cursor').css({scale : '3',transition: 'scale 0.2s ease'});
        },
         mouseleave: function(){
            $('.cursor').css({scale : '1'});
        },
        click: function(){
            $('.cursor').off('mouseleave');
        }
    });
  })


  // about 배경

    const about = gsap.timeline({

      scrollTrigger: {
        trigger: 'main',
        /* scrub:2, */ 
        start: '0% 0%', 
        end: '50% 100%', 
    },
    })
    
    about.from('.ab-bg',3,{opacity:0})



    //work 영역

    const work = gsap.timeline({

      scrollTrigger: {
        trigger: 'main',
        scrub:1.8, 
        start: '0% 0%', 
        end: '95% 100%',
        /* markers:true,  */
    },
    })
    
    work.from('.sc-work .work-item:nth-child(2)',2,{opacity:0 ,yPercent:50 ,delay:1}),
    work.from('.sc-work .work-item:nth-child(1)',2.5,{opacity:0 ,xPercent:-50,delay:1}),
    work.from('.sc-work .work-item:nth-child(6)',3,{opacity:0 ,xPercent:50,delay:1}),
    work.from('.sc-work .work-item:nth-child(4)',3,{opacity:0 ,yPercent:50,delay:1}),
    work.from('.sc-work .work-item:nth-child(3)',3,{opacity:0 ,xPercent:-50,delay:1}),
    work.from('.sc-work .work-item:nth-child(5)',3,{opacity:0 ,xPercent:50,delay:1})



    //footer 영역 
    
    const footer = gsap.timeline({

      scrollTrigger: {
        trigger: 'main',
        scrub:2, 
        start: '80% 0%', 
        end: '80% 100%', 
       /*  markers:true, */
    },
    })

    footer.from('footer',3,{opacity:0, yPercent:50,delay:1})

    

})