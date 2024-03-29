
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $('.js-hamburger').on('click', function () {
    $('.js-hamburger, .js-drawer-menu').toggleClass('is-open');
    $("html").toggleClass("is-fixed");
  });
  

// mainviewswiper
let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

}
new Swiper('.js-mainview-swiper', swipeOption);

//works-swiper
var swiper = new Swiper(".js-works-swiper", {
  pagination: {
    el: ".js-works-pagination",
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


});
