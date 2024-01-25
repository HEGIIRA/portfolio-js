// JS Swiper
var swiper = new Swiper(".slide-content", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// JS SCROLL REVEAL
window.addEventListener('scroll', reveal);
      function reveal(){
        var reveals= document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++){
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;


        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
        }
      }