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
          alert("Благодарим за Вашу заявку!");
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });
    }
      //E-mail Ajax Send
    if(jQuery('#notification-form').length) {
      $("#notification-form form").submit(function() { //Change
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "../../mail.php", //Change
          data: th.serialize()
        }).done(function() {
          alert("Мы вас оповестим, если цена на услугу будет снижена!");
          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });
        return false;
      });
    }
    
    });

    //select-number form

if(jQuery('.phone-mask').length) {
  jQuery(function($){
    $(".phone-mask").mask("+7(999) 999-9999");
  });
}