$(document).ready(function() {
  if(jQuery('#application-form').length) { 
      //E-mail Ajax Send
      $("#application-form form").submit(function() { //Change
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "../../mail.php", //Change
          data: th.serialize()
        }).done(function() {
          $('.application-form__done').removeClass('hide');
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });
    }
    $('.application-form__done__close').click(function() {
      $('.application-form__done').addClass('hide');
    });
      //E-mail Ajax Send
    if(jQuery('#notification-form').length) {
      $("#notification-form form").submit(function() { //Change
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "../../mail.php", //Change
          data: th.serialize()
        }).done(function() {
          $('.application-form__done').removeClass('hide');
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });
    }
    $('.notification-form__done__close').click(function() {
      $('.notification-form__done').addClass('hide');
    });
    });

    //select-number form

if(jQuery('.phone-mask').length) {
  jQuery(function($){
    $(".phone-mask").mask("+7(999) 999-9999");
  });
}