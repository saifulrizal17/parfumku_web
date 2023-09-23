// script filter product by saiful
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

// script navbar by saiful
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('scrolled');
  } else {
      $('.navbar').removeClass('scrolled');
  }
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('scrolled');
  } else {
      $('.navbar').removeClass('scrolled');
  }
});

// script text typing effect by saiful
const typingText = document.getElementById("typing-text");
const staticText = "Selamat Datang di ";
const textArray = ["Toko Parfumku"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
      const span = document.createElement("span");
      span.textContent = textArray[textIndex].charAt(charIndex);
      span.style.color = "#ffc107"; 
      typingText.appendChild(span);
      charIndex++;
      setTimeout(type, 100); 
  } else {
      setTimeout(erase, 1000); 
  }
}

function erase() {
  if (charIndex > 0) {
      typingText.removeChild(typingText.lastChild);
      charIndex--;
      setTimeout(erase, 50); 
  } else {
      textIndex++;
      if (textIndex >= textArray.length) {
          textIndex = 0;
      }
      setTimeout(type, 800); 
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000); 
});

// script floating bottom right icon by saiful
document.getElementById("open-modal").addEventListener("click", function () {
  var myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
});

//script test by aan
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  autoplay: {
    delay: 2000, // untuk mengatur durasi slider (dalam milidetik)
  },
  fadeEffect: {
    crossFade: true,
  },
  grabCursor: true,
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
