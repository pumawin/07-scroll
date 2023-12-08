$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $document = $(document);
  const $girl = $('.girl');
  const $puppy = $('.puppy');

  // 전역변수로 선언
  let windowHeight = 0;
  let documentHeight = 0;
  let scrollHeight = 0;

  // 스크롤 영역을 구하는 함수
  function getHeight() {
    // 크기를 구해오는 제이쿼리 메서드 : outerHeight()/* 전체크기를 구하는 것이다 */\
    windowHeight = $window.outerHeight();
    documentHeight = $document.outerHeight();

    // scroll영역의 (세로)크기
    scrollHeight = documentHeight - windowHeight;
  }

  // 시작하자마자, 스크롤 영역 구하기
  getHeight();

  // 브라우저 창이 조절될 때
  $window.on('resize', function () {
    getHeight();
    console.log(scrollHeight);

    // 스크롤 이벤트를 강제로 발생시킴--> 최종 언니 위치 수정
    $window.trigger('scroll');
  });

  // 비율 구하는 공식
  // 대상을 기준으로 나누고 곱하기 100을 하면 된다.

  // 스크롤이 발생하면
  $window.on('scroll', function () {
    // 사용자의 (세로)스크롤 값을 구해서
    let scrollTop = $(this).scrollTop();
    // 비율을 구하자 공식은, (대상/기준) * 100
    let percent = (scrollTop / scrollHeight) * 100 + '%';
    // $girl의 left로 적용(%)
    $girl.css('left', percent);
    $puppy.css('left', percent);
  });

  // 마우스 휠 조작했을 때
  $window.on('wheel keydown', function (e) {
    // console.log(e);

    if (e.originalEvent.deltaY < 0 || e.keyCode === 38) {
      // 휠 올렸을 때
      $girl.css('transform', 'rotateY(180deg)');
    } else if (e.originalEvent.deltaY > 0 || e.keyCode === 40) {
      $girl.css('transform', 'rotateY(0)');
      // 휠을 내렸을 때
    }
  });
});
