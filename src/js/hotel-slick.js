$('.hotel-slick, .hotel-room-slick, .restaurant-slick-second').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
    centerMode: false,
    variableWidth: true,
    
  
  mobileFirst: false,
  responsive: [
  
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});