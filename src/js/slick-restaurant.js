$('.slick-restaurant').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  variableWidth: false,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
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
