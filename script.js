$(document).ready(function () {

  $("#nav-bar1").click(function () {
    $('.features').show();
    $('.msg').show();
    $('.about-text').css("display", "none");
    $('.headline').show();
    $(".mentor").css("display", "none");
    $('.mentee').css("display", "none");
  });

  $("#nav-bar2").click(function () {
    $('.features').hide();
    $('.msg').hide();
    $('.headline').show();
    $('.about-text').css("display", "block");
    $(".mentor").css("display", "none");
    $('.mentee').css("display", "none");
    
  });

  $("#nav-bar3").click(function () {
    $('.features').hide();
    $('.msg').hide();
    $('.headline').hide();
    $('.about-text').css("display", "none");
    $(".mentor").css("display", "flex");
    $('.mentee').css("display", "none");
  });

  $("#nav-bar4").click(function () {
    $('.features').hide();
    $('.msg').hide();
    $('.headline').hide();
    $('.about-text').css("display", "none");
    $(".mentor").css("display", "none");
    $('.mentee').css("display", "flex");
  });
  
  $("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  
});