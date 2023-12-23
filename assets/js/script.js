$(document).ready(function () {
    $('.mask1').scroll(function () {
        var scroll = $('.mask1').scrollTop();
        if (scroll >= 80) {
          $(".mask1 .opacity-box").hide();
        }
        else {
          $(".mask1 .opacity-box").show();
        }
    });
    $('.mask2').scroll(function () {
        var scroll = $('.mask2').scrollTop();
        if (scroll >= 80) {
          $(".mask2 .opacity-box").hide();
        }
        else {
          $(".mask2 .opacity-box").show();
        }
    });
});

