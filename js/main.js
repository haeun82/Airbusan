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
const changeEl = document.querySelector('.change');
const selecrAreaEl = document.querySelector('.select_area');
let status = true;






changeEl.addEventListener('click', function () {
  if (status) {
    selecrAreaEl.style.flexDirection = 'row-reverse';
    selecrAreaEl.style.justifyContent = 'flex-end';
    status = false;
  } else {
    selecrAreaEl.style.flexDirection = 'row';
    selecrAreaEl.style.justifyContent = 'flex-start';
    status = true;
  }

});





// SALE_BOX SLIDES
new Swiper('.sale_box .swiper', {
  loop: true,
  autoplay: { 
    delay: 4000 
  },
  slidesPerView: 3
});

