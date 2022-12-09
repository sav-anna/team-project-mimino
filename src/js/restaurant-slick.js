$('.restaurant-slick, .restaurant-kitchen-slick').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  variableWidth: true,
  mobileFirst: true,
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
