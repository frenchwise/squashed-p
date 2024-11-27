document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.featured-collection-slider__carousel', {
    perPage: 4,
    gap: 20,
    padding: 20,
    updateOnMove: true,
    arrows: false,
    breakpoints: {
      1220: {
        perPage: 3,
      },
      1024: {
        perPage: 2,
      },
      768: {
        padding: { left: 20, right: 50 },
        perPage: 1,
      },
    },
  });
  splide.mount();
});
