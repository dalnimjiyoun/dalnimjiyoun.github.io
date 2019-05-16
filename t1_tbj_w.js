$(document).ready(function() {
  var main_bt = document.getElementsByClassName('main_bt');
  var sub_bt = document.getElementsByClassName('sub_bt');
  var position;

/*메인버튼*/
  $(main_bt[0]).click(function() {
    count = 0;
    wheel_count();
  });
  $(main_bt[1]).click(function() {
    count = 1;
    wheel_count();
  });
  $(main_bt[2]).click(function() {
    count = 2;
    wheel_count();
  });
  $(main_bt[3]).click(function() {
    count = 3;
    wheel_count();
  });
  $(main_bt[4]).click(function() {
    count = 4;
    wheel_count();
  });
  $(main_bt[5]).click(function() {
    count = 5;
    wheel_count();
  });
  $(main_bt[6]).click(function() {
    count = 6;
    wheel_count();
  });
  $(main_bt[7]).click(function() {
    count = 7;
    wheel_count();
  });
  $(main_bt[8]).click(function() {
    count = 8;
    wheel_count();
  });
  $(main_bt[9]).click(function() {
    count = 9;
    wheel_count();
  });
  $(main_bt[10]).click(function() {
    count = 10;
    wheel_count();
  });





/*서브버튼*/
  $(sub_bt[0]).click(function() {
    count = 0;
    wheel_count();
    background_color();
  });
  $(sub_bt[1]).click(function() {
    count = 1;
    wheel_count();
    background_color();
  });
  $(sub_bt[2]).click(function() {
    count = 2;
    wheel_count();
    background_color();
  });
  $(sub_bt[3]).click(function() {
    count = 3;
    wheel_count();
    background_color();
  });
  $(sub_bt[4]).click(function() {
    count = 4;
    wheel_count();
    background_color();
  });
  $(sub_bt[5]).click(function() {
    count = 5;
    wheel_count();
    background_color();
  });
  $(sub_bt[6]).click(function() {
    count = 6;
    wheel_count();
    background_color();
  });
  $(sub_bt[7]).click(function() {
    count = 7;
    wheel_count();
    background_color();
  });
  $(sub_bt[8]).click(function() {
    count = 8;
    wheel_count();
    background_color();
  });
  $(sub_bt[9]).click(function() {
    count = 9;
    wheel_count();
    background_color();
  });
  $(sub_bt[10]).click(function() {
    count = 10;
    wheel_count();
    background_color();
  });





  var div_h = 0;
  var count = 0;
  var scrollEvent = false;
  var wheel_data;

/*스크롤 한번에 한페이지씩*/
  $("html").on('mousewheel', function(c) {
    wheel_data = c.originalEvent.wheelDelta;
    if (wheel_data > 0 && count > 0 && scrollEvent == false) {
      c.preventDefault();
      console.log("올라가고 있어~~");
      scrollEvent = true;
      count --;
      wheel_count();
      setTimeout(function() {
        scrollEvent = false;
      }, 500);
    }else if (wheel_data < 0 && count < 10 && scrollEvent == false) {
      c.preventDefault();
      console.log("내려가고 있어~~");
      scrollEvent = true;
      count ++;
      wheel_count();
      setTimeout(function() {
        scrollEvent = false;
      }, 500);
    }
  });





/*각 페이지단 옵셋*/
  function wheel_count() {
    if (count == 0)
    {
      position = $("#video_box").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[0]).css("background-color","#60d4ff");
    }
    else if (count == 1)
    {
      position = $("#hd").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[1]).css("background-color","#60d4ff");
    }
    else if (count == 2)
    {
      position = $("#ud").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[2]).css("background-color","#60d4ff");
    }
    else if (count == 3)
    {
      position = $("#bb").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[3]).css("background-color","#60d4ff");
    }
    else if (count == 4)
    {
      position = $("#ym").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[4]).css("background-color","#60d4ff");
    }
    else if (count == 5)
    {
      position = $("#bj").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[5]).css("background-color","#60d4ff");
    }
    else if (count == 6)
    {
      position = $("#wd").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[6]).css("background-color","#60d4ff");
    }
    else if (count == 7)
    {
      position = $("#gb").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[7]).css("background-color","#60d4ff");
    }
    else if (count == 8)
    {
      position = $("#yh").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[8]).css("background-color","#60d4ff");
    }
    else if (count == 9)
    {
      position = $("#si").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[9]).css("background-color","#60d4ff");
    }
    else if (count == 10)
    {
      position = $("#kn").offset();
      $("html").stop().animate({scrollTop:position.top},500);
      sub_bt_clear();
      $(sub_bt[10]).css("background-color","#60d4ff");
    }
  }





/*버튼 색 재지정 함수*/
  function sub_bt_clear() {
    $(sub_bt).css("background-color", "rgb(140, 140, 140)");
  }





/*페이지 스타트 변경*/
start_ani();

function start_ani() {
  position = $("#video_box").offset();
  $("html").stop().animate({scrollTop:position.top},3000);
  wheel_count();
}
});
