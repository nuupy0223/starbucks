const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  //화면이 스크롤될때마다 스크롤Y 라는값이 갱신, 몇픽셀 단위에 있는지 파악가능, Scroll!!대신 넣어서 확안가능
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    // gsap이라는 애니메이션라이브러리를 통해 to라는 매소드로 동작시킬건데, 동작시킬 요소는 badgeEl이라는 요소고 6초동안 점점 투명해지는 애니메이션
    // 참고 badeEl.style.display = 'none';, 요소 부분에 css 속성 추가 가능
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// .throttle(함수, 시간)
// _.throttle(사용하려는 함수를 넣어준다, 몇 초에 한번씩 실행될지 밀리세컨드 단위로 적어준다) 300 = .3초, 1000 = 1초
// 0.3초단위로 부하를 줘서 몇십개가 떠서 버벅임을 주지 않도록 제한  

toTopEl.addEventListener('click', function () {
  gsap.to(window,.7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  // fadeEl들을 fadeEl요소로 받아서 두번째 매개변수로 인덱스로 받는다. 두 개의 매개변수를 가지고 있는 함수가 반복적으로 실행될 때, gsap이라는 라이브러리에서 to라는 매소드를 실행해준다. 구성내용은 반복되는 내용 명시, 1초, 옵션은 객체데이터의 형태다.
  // 처음 오퍼시티는 0인데, 1로 변하도록 처리
  // 순차적으로 처리해야하므로 delay라는 옵션을 추가, 지연시간을 .7초동안 추가하나 동시에 실행되므로 인덱스(실행순서)에 곱해준다. 제로베이스므로 index + 1로 작성.
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

//SWIPER
// new Swiper(인수, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
}); // new => 생성자

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,//슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // }
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// TOOGLEPROMOTION
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //느낌표 = 느낌표가 붙어있는 값이 반대가 되게 만들어 주세요
  if (isHidePromotion) {
    //숨김 커리!
    promotionEl.classList.add('hide');
  }
  else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});
/* Promotion이라는 클래스를 찾아서 promotionEl이란느 변수에 할당하고
toogle-promotion이라는 클래스를 찾아서  promotionToggleBtn이라는 변수에 할당. 그러면 이것들은 다 요소이다.
다음으로 isHidePromotion이라는 변수는 프로모션이 지금 숨겨져있니? 라고 확인하는 변수이다.
isHidePromotion이 지금 flase인데 프로모션값이 지금 false니까 지금 보여지고 있다. 처음에는.
// poromotionToogleBtn 버튼을 클릭하면 함수를 클릭하고,
// 그 함수의 내용은 isHidePromotion이라는 변수가 있을텐데 그 변수의 내용을 반대로 다시 집어넣어라
// false의 반댓값으로 바꿔넣어라.
promotionToggleBtn을 클릭하면 값이 false => ture로 바뀌고 if에서 값이 true니까 숨겨지게 처리한다. 다시 클릭하면 ture가 false로 바뀌고 else문이 실행되어 보여지게 된다.
if에서 지금 ishidepromotion이

*/

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {//함수가 호출될 때 인수로 어떤 요소를 선택할것인지 선택자라는 개념을 받을것이고, 그것을 selector라는 매개변수로 받을것
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, //선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1,
      yoyo: true, // 다시 돌아갈수있도록 처리
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic //생성자 함수 아래로 줄바꿈하며 채이닝
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소들을 지정
      triggerHook: .8 // 내가 감시하고 있는 요소가 뷰포트의 어떤 지점에서 감시되었다는 것을 판단할 것인가를 지정해주는 옵션, 화면에 보여진다고 판단하면 그 밑의 setClassToggle이라는 매소드를 실행하는 구조를 가지고 있다.
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());//Secne이라는 것은 scrollMagic이라는 자바스크립트 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정해주는 매소드, 매소드 체이닝을 통해 지정 => 클래스속성, 넣었다 뺐다 제어해줌/ 컨트롤러라는 개념을 통해 제어하기위해 addTo를 넣어줘야한다.
});

/* 감시하려는 섹션에 scroll-spy라는 클래스를 하나씩 붙여줄것이고 붙어있는 각각의 섹션은 spyEls 변수에 모두다 할당을 할것이고 그 섹션들을 반복하며 처리를 하는데, 반복될때마다 spyEl안에 매개변수에 그 값이 들어있을것이고 그 spyEl는 곧 내가 감시하는 섹션이 되는 것이다.*/

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //생성자 함수, 현재 날짜 정보를 가지고 있는 데이트 객체를 가지고 있다 2022