// VISUAL SLIDES
new Swiper('.visual .swiper', {
  loop: true,
  autoplay: { 
    delay: 5000 
  },
  slidesPerView: 1,
  navigation: { 
    nextEl: '.visual .swiper-button-next', 
    prevEl: '.visual .swiper-button-prev'
  }
});


// SELECT_AREA CHANGE
const formEl = document.querySelector('.select_form');
const toEl = document.querySelector('.select_to');
const selectAreaEls = document.querySelector('.select_area');
const changeEl = document.querySelector('.change');

console.log(selectAreaEls);



// SALE_BOX SLIDES
new Swiper('.sale_box .swiper', {
  loop: true,
  autoplay: { 
    delay: 4000 
  },
  slidesPerView: 3,
  reverseDirection: true,
  disableOnInteraction: true
});

