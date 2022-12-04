$('.variable-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  
  variableWidth: true,
  mobileFirst: true,
  responsive: [
    
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        
      },
    },
   
    
  ],
});
