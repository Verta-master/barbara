jQuery(function($) {
	"use strict";

//Menu
  $('.menu__btn').click(function(e) {
    e.stopPropagation();
    $('.menu__list').slideToggle();
  });
  
//Search
  $('.search__open').click(function(e) {
    e.stopPropagation();
    $('.search__wrap').slideToggle();
  });

//Hide popups on escape and click outside
$("body").click(function(){
  $('.menu__list').slideUp();
  $('.search__wrap').slideUp();
});

$("body").keydown(function(e) {
  if (e.keyCode == 27) {
    $('.menu__list').slideUp();
    $('.search__wrap').slideUp();
  }
});

});