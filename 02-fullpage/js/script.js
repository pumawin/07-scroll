$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $sideDot = $('.indicator >li');
  const $section = $('main > section');
  console.log($window, $sideDot, $section);

  const $btnTop = $('btn-top');
  // TOP버튼을 클릭했을때
  $btnTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
  // 기본 동작
  //  요소의 y위치값 구하기 : offset().top
  let test = $section.eq(2).offset().top;
  $('html, body').animate(
    {
      scrollTop: test,
    },
    400
  );
});
