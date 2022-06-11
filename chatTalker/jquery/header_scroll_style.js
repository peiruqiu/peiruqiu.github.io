
$(function(){
 var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.header').addClass('header_shrink') && $('.logo').addClass('logo_shrink');
        }
        else {
            $('.header').removeClass('header_shrink') && $('.logo').removeClass('logo_shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset;
    }
});
