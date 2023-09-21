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

// BENEFIT_BOX CHANGE
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

let clickText = true;

// clickText가 true

// text2를 클릭해서
// clickText이면



