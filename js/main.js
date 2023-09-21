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
// clickText이면 img2가 보이게하고 img1를 숨김
// 그렇지 않고 text1을 클릭하면 img1보이고 img2 숨김

// text2.addEventListener('click', function () {
//   if (clickText) { 
//     // img2.style.opacity = 1;
//     img1.style.opacity = 0;
//     clickText = false;
//   }
//   else if(clickText) {
//     img1.style.opacity = 1;
//     img2.style.opacity = 0;
//     clickText = true;
//   }
// });


// text2.addEventListener('click', function () {
//   const hasHide = img2.classList.contains('hide');
//   if (hasHide) {
//     img2.classList.remove('hide');
//     img2.style.display = 'block';
//   } else {
//     img1.classList.add('hide');
//     img1.style.display = 'block';
//   }
// });



text2.addEventListener('click', function () {
  // img2.style.display = 'block';
  img1.style.opacity = 0;
  img2.style.opacity = 1;
});

text1.addEventListener('click', function () {
  // img1.style.display = 'block';
  img1.style.opacity = 1;
  img2.style.opacity = 0;
});













// text1.addEventListener('click', function () {
//   if (clickText) {
//     img1.style.display = 'block';
//     // img2.style.display = 'none';
//     clickText = false;
//   }
// });

// text2.addEventListener('click', function () {

//   img2.style.display = 'block';
//   img2.style.display = 'none';
//   // clickText = false;
// });

// text1.addEventListener('click', function () {
//   img1.style.display = 'block';
//   img2.style.display = 'none';
//   // clickText = false;
// });




