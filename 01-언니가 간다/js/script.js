$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $document = $(document);
  const $progressBar = $('.progress-bar');

  // 크기를 구해오는 제이쿼리 메서드 : outerHeight()/* 전체크기를 구하는 것이다 */\
  const windowHeight = $window.outerHeight();
  const documentHeight = $document.outerHeight();
  // console.log(windowHeight, documentHeight);

  // scroll영역의 (세로)크기
  const scrollHeight = documentHeight - windowHeight;
  // console.log(scrollHeight);

  // 비율 구하는 공식
  // 대상을 기준으로 나누고 곱하기 100을 하면 된다.

  // 스크롤이 발생하면
  $window.on('scroll', function () {
    // 사용자의 (세로)스크롤 값을 구해서
    let scrollTop = $(this).scrollTop();
    // console.log(scrollTop);
    // 비율을 구하자 공식은, (대상/기준) * 100
    let percent = (scrollTop / scrollHeight) * 100 + '%';
    console.log(percent);
    // $progressBar의 width로 적용(%)
    $progressBar.css('width', percent);
  });
});
