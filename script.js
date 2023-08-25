$(document).ready(function () {
  $("#nav-bar1").click(function () {
    $('.features').show();
    $('.headline').show();
  });

  $("#nav-bar2").click(function () {
    $('.features').hide();
    $('.headline').hide();
  });

  $("#nav-bar3").click(function () {
    $('.features').show();
    $('.headline').hide();
  });

  $("#nav-bar4").click(function () {
    $('.features').hide();
    $('.headline').show();
  });
  
});