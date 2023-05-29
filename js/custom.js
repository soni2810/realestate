var navigation = new TimelineLite({paused:true, reversed:true});
navigation.to("#navigationWrap", 0.5, {opacity: 1, display: 'block'})
          .to(".navbar", 0.3, {opacity: 0}, "-=0.1")
          .to(".close", 0.3, {display: "block", opacity: 1}, "-=0.1")
          .from(".menu", 0.5, {opacity: 0, y: 30})
          // .from(".social", 0.5, {opacity: 0});

$(".navbar, .close").click (function() {
  navigation.reversed() ? navigation.play() : navigation.reverse();
})

    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      scrollbar: {
        direction: "vertical",
        el: ".swiper-scrollbar",
        
        // hide: true,
      },
    });

    var swiper = new Swiper(".mySwiper-one", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
     
    });

    var swiper = new Swiper(".Swiper-one", {
      slidesPerView: 3,
      spaceBetween: 43,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // var textWrapper = document.querySelector('.ml2');
    // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    $('.owl-carousel').owlCarousel({
      // loop:true,
      margin:43,
      dots: false,
      nav: true,
      navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2.2
          },
          1900:{
            items:2.3
        }
      }
  })


    Splitting();

    AOS.init();