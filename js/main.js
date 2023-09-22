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

// SELECT_BOX_STAMP_TOGGLE
const btn = document.querySelector('.select_btn button');
const stampCheck = document.querySelector('.stamp_check');

let click = '보임';

btn.addEventListener('click', function () {
  if (click == '보임') {
    stampCheck.style.opacity = 1;  
    btn.style.backgroundColor = '#0095DA';
    click = '숨김';

  } else {
    stampCheck.style.opacity = 0; 
    btn.style.backgroundColor = '#717171'
    click = '보임';      
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

const reBtn1 = document.querySelector('.reservation_btn_1');
const reBtn11 = document.querySelector('.reservation_btn_11');
const reBtn2 = document.querySelector('.reservation_btn_2');
const reBtn22 = document.querySelector('.reservation_btn_22');
const reBtn3 = document.querySelector('.reservation_btn_3');
const reBtn33 = document.querySelector('.reservation_btn_33');
const reBtn4 = document.querySelector('.reservation_btn_4');

const tabContent = document.querySelector('.search_tab_content');
const tabReservation = document.querySelector('.search_tab_reservation');
const tabCheckIn = document.querySelector('.search_tab_checkIn');


// 예약 조회 탭
reBtn2.addEventListener('click', function () {
  // tabReservation.style.opacity = 1;
  // tabContent.style.opacity = 0;
  tabReservation.style.display = 'block';
  tabCheckIn.style.display = 'none';


  reBtn1.style.backgroundColor = '#2A3493';
  reBtn11.style.color = '#fff';
  reBtn1.style.borderRadius = '30px 30px 0 0';

  reBtn2.style.backgroundColor = '#f1f1f1';
  reBtn22.style.color = '#333';
  reBtn2.style.borderRadius = '30px 30px 0 0';

  reBtn3.style.backgroundColor = '#2A3493';
  reBtn33.style.color = '#fff';
  reBtn3.style.borderRadius = '30px 30px 0 0';
});

// 항공권 예매 탭
reBtn1.addEventListener('click', function () {
  // tabReservation.style.opacity = 0;
  tabContent.style.display = 'flex';
  tabReservation.style.display = 'none';
  tabCheckIn.style.display = 'none';




  // tabContent.style.opacity = 1;

  reBtn2.style.backgroundColor = '#2A3493';
  reBtn22.style.color = '#fff';
  reBtn2.style.borderRadius = '30px 30px 0 0';

  reBtn1.style.backgroundColor = '#f1f1f1';
  reBtn11.style.color = '#333';
  reBtn1.style.borderRadius = '30px 30px 0 0';

  reBtn3.style.backgroundColor = '#2A3493';
  reBtn33.style.color = '#fff';
  reBtn3.style.borderRadius = '30px 30px 0 0';
});

// 체크인 탭
reBtn3.addEventListener('click', function () {
  // tabReservation.style.opacity = 0;
  tabContent.style.display = 'flex';
  tabReservation.style.display = 'none';
  tabCheckIn.style.display = 'block';

  reBtn2.style.backgroundColor = '#2A3493';
  reBtn22.style.color = '#fff';
  reBtn2.style.borderRadius = '30px 30px 0 0';

  reBtn3.style.backgroundColor = '#f1f1f1';
  reBtn33.style.color = '#333';
  reBtn3.style.borderRadius = '30px 30px 0 0';

  reBtn1.style.backgroundColor = '#2A3493';
  reBtn11.style.color = '#fff';
  reBtn1.style.borderRadius = '30px 30px 0 0';
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




