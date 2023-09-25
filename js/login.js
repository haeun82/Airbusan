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