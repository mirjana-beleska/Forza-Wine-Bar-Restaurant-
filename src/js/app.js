$(document).ready(function(){
    console.log("Hello world!");
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        items: 6,
        center: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            320:{
                items:2,
            },
            600:{
                items:4,
            },
            992:{
                items:6,
            }
        }
    }
        
    );
  });
