var fadesocial = function(){
  $('.social').hide();
  $('.mas').click(function(){
    $('.social').toggle(500);
  });
};
var downscroll = function(){
  $('#down').click(function(){
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
  });
}
$(document).ready(downscroll);
$(document).ready(fadesocial);
