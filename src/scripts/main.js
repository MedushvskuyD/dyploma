'use strict';

$(document).ready(function() {
  $('#slider').slick({
    nextArrow: '<button type="button" class="slick slick-next"></button>',
    prevArrow: '<button type="button" class="slick slick-prev"></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    // slidesToShow: 2,
    // infinite: false,
  });

  $('#offerSlider').slick({
    nextArrow: '<button type="button" class="slick slick-next"></button>',
    prevArrow: '<button type="button" class="slick slick-prev"></button>',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    // infinite: false,
  });

  $('#reviewSlider').slick({
    nextArrow: '<button type="button" class="slick slick-next"></button>',
    prevArrow: '<button type="button" class="slick slick-prev"></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    // infinite: false,
  });
});
