const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

close.addEventListener('click', () => {
    menu.classList.remove('active')
});




/* auto fill for progress line */
const counters = document.querySelectorAll('.using__loader__header-procenntage'),
    lines = document.querySelectorAll('.using__loader-linefull');
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML; 
});

$(function() {
    // scrolling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.wap').fadeIn();
        }
        else{
            $('.wap').fadeOut();
        }
    });
});

$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});

$(function() {
    $('.contact__form').submit(function(e) {
        e.eventPreventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");


            $('form').trigger('reset');
        });
        return false;
    });
});