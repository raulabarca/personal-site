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

var animation = function(){
    $(window).scroll(function(){
        $('.hideleft').each(function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({left: "30",'opacity':'1'},1000);

            }
        });
        $('.hideright').each(function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({top: "40",'opacity':'1'},1000);
            }
        });
    });
}

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({left: "50",'opacity':'1'},1000);

            }

        });

    });

});


$(document).ready(linkblank);
$(document).ready(downscroll);
$(document).ready(fadesocial);
$(document).ready(animation);
