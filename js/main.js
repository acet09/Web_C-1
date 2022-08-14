// Jquery
$(document).ready(function(){
  // nav
  $("#SNB > ul > li").hover(function(){
    $(this).find('.sub').stop().slideDown(200);
  },function(){
    $(this).find('.sub').stop().slideUp(200);  
  });

  // slide
  $(".slide-con").hide();
  $(".slide-con:first").show();
  function slidemove(){
    $(".slide-con:first").fadeOut().next().fadeIn().end().appendTo(".slide-box2");
  }
  setInterval(slidemove, 3000);

  // tab
  $(".nc-list").hide();
  $(".nc-list:first").show();
  $(".notgall-title a").click(function(){
    let num=$(this).index();
    $(".notgall-title a").removeClass('active');
    $(this).addClass('active');    
    $(".nc-list").hide();
    $(".nc-list").eq(num).show();
  });

  // pop
  $("#pop").hide();
  $(".notice ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop button").click(function(){
    $("#pop").hide();
  });




});