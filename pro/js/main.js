var fadesocial = function(){
  $('.social').hide();
  $('.mas').click(function(){
    $('.social').toggle(500);
  });
};
var downscroll = function(){
  $('#down').click(function(){
    $('html, body').animate({
        scrollTop: next.offset().top
    }, 2000);
  });
}
var linkblank = function(){
  $(".external").click(function() {
     url = $(this).attr("onclick");
     window.open(url, '_blank');
     return false;
  });
};



$(document).ready(linkblank);
$(document).ready(downscroll);
$(document).ready(fadesocial);
