$( document ).ready(function() {
    console.log( "ready!" );

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:40,
      center:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
              }
          }
      })
});

