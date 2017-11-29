$(document).ready(function(){
    ! function(i) {
         var o, n;
         i(".title__block").on("click", function() {
           o = i(this).parents(".accordion__item"), n = o.find(".accordion__info"),
             o.hasClass("active__block") ? (o.removeClass("active__block"),
               n.slideUp()) : (o.addClass("active__block"), n.stop(!0, !0).slideDown(),
               o.siblings(".active__block").removeClass("active__block").children(
                 ".accordion__info").stop(!0, !0).slideUp())
         })
       }(jQuery);
   });
   
   