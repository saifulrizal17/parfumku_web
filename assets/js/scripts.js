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