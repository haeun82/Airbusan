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

let click = true;

btn.addEventListener('click', function () {
  if (click == true) {
    stampCheck.style.opacity = 1;  
    btn.style.backgroundColor = '#0095DA';
    click = false;

  } else {
    stampCheck.style.opacity = 0; 
    btn.style.backgroundColor = '#717171'
    click = true;      
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


const tabBtns = document.querySelectorAll('.tab_btn');
const tabContents = document.querySelectorAll('.tab_content');
tabBtns.forEach(function (tabBtn, index) {
  tabBtn.addEventListener('click', function () {
    tabBtns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    tabBtns[index].classList.add('active');

    tabContents.forEach(function (content) {
      content.style.display = 'none';
    });
    tabContents[index].style.display = 'block';
  });
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




// 출발일~도착일 탭
const bkc01 = document.querySelector('.booking_content.bkc_01');
const fromToDate = document.querySelector('.from_to_date');
const closeBtn = document.querySelector('.close');


bkc01.addEventListener('click', function () {
  fromToDate.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
  fromToDate.style.display = 'none';
});



// 승객 인원 선택 탭

// 열고 닫기
const passengerModal = document.querySelector('.passenger_modal');
const closePassenger = document.querySelector('.close_1');
const passengerBtn = document.querySelector('.bkc_02');


passengerBtn.addEventListener('click', function () {
  passengerModal.style.display = 'block';
});

closePassenger.addEventListener('click', function () {
  passengerModal.style.display = 'none';
});



// 성인
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const number = document.querySelector('.adult_count');

plusBtn.addEventListener('click',function(){
  let count = Number(number.textContent);
    count = count + 1;
    number.textContent = count;
});
minusBtn.addEventListener('click',function(){
  let count = Number(number.textContent);
    count = count - 1;
    number.textContent = count;
});

// 소아
const plusBtnChild = document.querySelector('#plus_1');
const minusBtnChild = document.querySelector('#minus_1');
const numberChild = document.querySelector('.child_count');

plusBtnChild.addEventListener('click',function(){
  let countText = Number(numberChild.textContent);
    countText = countText + 1;
    numberChild.textContent = countText;
});
minusBtnChild.addEventListener('click',function(){
  let countText = Number(numberChild.textContent);
    countText = countText - 1;
    numberChild.textContent = countText;
});

// 영아
const plusBtnInfant = document.querySelector('#plus_2');
const minusBtnInfant = document.querySelector('#minus_2');
const numberInfant = document.querySelector('.infant_count');

plusBtnInfant.addEventListener('click',function(){
  let countTextTwo = Number(numberInfant.textContent);
    countTextTwo = countTextTwo + 1;
    numberInfant.textContent = countTextTwo;
});
minusBtnInfant.addEventListener('click',function(){
  let countTextTwo = Number(numberInfant.textContent);
    countTextTwo = countTextTwo - 1;
    numberInfant.textContent = countTextTwo;
});

// 단체 예약 모달 띄우기

const groupBooking = document.querySelector('.group_booking');
const closeModalBtn = document.querySelector('.close_2');
const reservationTab = document.querySelector('.reservation_btn_44');

reservationTab.addEventListener('click',function () {
  groupBooking.style.display = 'flex';
});

closeModalBtn.addEventListener('click',function () {
  groupBooking.style.display = 'none';
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

text1.addEventListener('click', function () {
  img1.style.display = 'block';
  img2.style.display = 'none';
});


text2.addEventListener('click', function () {
  img2.style.display = 'block';
  img1.style.display = 'none';
});




// 미디어쿼리 메뉴 나타내기
    // 햄버거 버튼을 클릭하면 .menu_media 요소에 'active'라는 클래스 값 추가(in JS)
    const btnHamburgerEl = document.querySelector('.btn-hamburger');
    const mNavEl = document.querySelector('.menu_media');
    const btnCloseEl = document.querySelector('.btn_close');
    
    btnHamburgerEl.addEventListener('click', function () {
      mNavEl.classList.add('active');
    });
    // 닫기 버튼을 클릭하면 .menu_media 요소에 'active'라는 클래스 값 제거(in JS)
    btnCloseEl.addEventListener('click', function () {
      mNavEl.classList.remove('active');
    });
    // 'active'라는 클래스 값이 있으면 요소 보이기!(in CSS)




// 상세설명 모달창
const goodsIcons = document.querySelectorAll('.goods_icon');
const goodsContents = document.querySelectorAll('.goods_content');
goodsIcons.forEach(function (goodsIcon, index) {
  goodsIcon.addEventListener('click', function () {
    goodsIcons.forEach(function (goods) {
      goods.classList.remove('active');
    });
    goodsIcons[index].classList.add('active');

    goodsContents.forEach(function (goodsContent) {
      goodsContent.style.display = 'none';
    });
    goodsContents[index].style.display = 'block';
  });
  
    for (let index = 0; index < goodsContents.length; index++) {
      goodsContents[index].addEventListener('click', function () {
        goodsContents[index].style.display = 'none';
      });
    }
});




