$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    })
});

;(function(){
    var view = $('.clean-list__view');
    view.on('click', '.clean-list__link', function(e){
        e.preventDefault();
        var item = $(this).closest(view),
            content = $('.clean-list__section'),
            items = $(this).next();
        if(!content.hasClass('active-section')) {
            $(this).removeClass('active-section');
            items.addClass('active-section');
        }else{
            content.removeClass('active-section');
        }
        if(content.hasClass('active-section')){
            $(this).addClass('active-link');
            $('.clean-list__link').next().removeClass('active-link');
        }else {
            $('.clean-list__link').removeClass('active-link');
        }
    });
}());
