if(jQuery('.tarifs__title').length) {
    $('.tarifs__title').click(function() {
        $(this).children('.plus').toggleClass('plus-open');
        $(this).siblings('.block-on-off').toggleClass('rassrochka__close');
    });
}