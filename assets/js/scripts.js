// script by saiful
$(document).ready(function () {
    var $grid = $('.product-container').isotope({
      itemSelector: '.product-item',
      layoutMode: 'fitRows'
    });

    $('#product-flters li').on('click', function () {
      $('#product-flters li').removeClass('filter-active');
      $(this).addClass('filter-active');
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
});

//script test by aan
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});