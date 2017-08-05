//Plugins

$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto'
    })
});

jQuery(function ($) {
    $("#phone").mask("(999) 999-9999");
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true
    });
});

$(document).ready(function () {
    $('.bxslider').bxSlider();
});

var goToRoomsSlider = $('.type-of-room').bxSlider({
    minSlides: 2,
    maxSlides: 2
});

var typeRoomsCleaning = $('.type-of-cleaning').bxSlider({
    minSlides: 2,
    maxSlides: 2
});


// End plugins


//Accordeon

$('.clean-list__link').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.clean-list__container'),
        list = $this.closest('.clean-list__view'),
        items = list.find('.clean-list__container'),
        content = item.find('.clean-list__section'),
        otherContent = list.find('.clean-list__section'),
        duration = 200;

    if (!item.hasClass('active-section')) {
        items.removeClass('active-section');
        item.addClass('active-section');

        otherContent.stop(true, true).slideUp(duration);
        content.stop(true, true).slideDown(duration);
    } else {

        content.stop(true, true).slideUp(duration);
        item.stop(true, true).removeClass('active-section');
    }

});

$('.services-view__link').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.services-view__item'),
        list = $this.closest('.services-view__list'),
        items = list.find('.services-view__item'),
        content = item.find('.dropdown'),
        otherContent = list.find('.dropdown'),
        duration = 200;


    if (!item.hasClass('active-class')) {
        items.removeClass('active-class');
        item.addClass('active-class');

        otherContent.stop(true, true).slideUp(duration);
        content.stop(true, true).slideDown(duration);
    } else {
        content.stop(true, true).slideUp(duration);
        item.stop(true, true).removeClass('active-class');
    }

});

// Read More
var read_more = document.querySelector('.reviews .clean-link'),
    more_text = document.querySelector('.more__text');

read_more.addEventListener('click', function (e) {
    e.preventDefault();

    read_more.classList.add('hide')
    more_text.classList.add('active-section');
});

//Calculator

var wrapper = $('.calculator__form');
var htmlPricing = {};
//let priceList = [];

wrapper.on('click', function (e) {
    e.preventDefault();
    var target = e.target;

    if (target.classList.contains('button-prew')) {
        var input = target.nextElementSibling;
        var previousValue = Number(input.value);

        if (input.value > 0) {
            input.value = previousValue - 1;
        }
    }

    if (target.classList.contains('button-next')) {
        var input = target.previousElementSibling;
        var previousValue = Number(input.value);

        input.value = previousValue + 1;
    }

    //priceList[0] = {};
    //priceList[0]["base"] = "windows";
    //priceList[0]["discountField"] = "discountWindow";
    //priceList[0]["field"] = "windowNum";
    //priceList[1] = {};
    //priceList[1]["base"] = "balcony";
    //priceList[1]["discountField"] = "discountBalcony";
    //priceList[1]["field"] = "balconyNum";
    //priceList[2] = {};
    //priceList[2]["base"] = "chandelier";
    //priceList[2]["discountField"] = "discountChandelier";
    //priceList[2]["field"] = "chandelierNum";
    //priceList[3] = {};
    //priceList[3]["base"] = "quantity";
    //priceList[3]["discountField"] = "discountQuantity";
    //priceList[3]["field"] = "quantityNum";
    //priceList[4] = {};
    //priceList[4]["base"] = "bake";
    //priceList[4]["discountField"] = "discountBake";
    //priceList[4]["field"] = "bakeNum";
    //priceList[5] = {};
    //priceList[5]["base"] = "ironing";
    //priceList[5]["discountField"] = "discountIroning";
    //priceList[5]["field"] = "ironingNum";
    //priceList[8] = {};
    //priceList[8]["base"] = "underwear";
    //priceList[8]["discountField"] = "discountUnderwear";
    //priceList[8]["field"] = "underwearNum";
    //priceList[9] = {};
    //priceList[9]["base"] = "fridge";
    //priceList[9]["discountField"] = "discountFridge";
    //priceList[9]["field"] = "fridgeNum";
    //priceList[10] = {};
    //priceList[10]["base"] = "main";
    //priceList[10]["discountField"] = "discountMain";
    //priceList[10]["field"] = "mainNum";


    $('.service-change__link').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('hide');
        $(this).next().addClass('active-section');
    });

    $('.service-change__reset').on('click', function (e) {
        e.preventDefault();
        $(this).removeClass('active-section');
        $(this).prev('.service-change__link').addClass('active-section');
    });

    var windowNum = parseInt($('input[name="windowNum"]').val());
    var fridgeNum = parseInt($('input[name="fridgeNum"]').val());
    var bakeNum = parseInt($('input[name="bakeNum"]').val());
    var chandelierNum = parseInt($('input[name="chandelierNum"]').val());
    var underwearNum = parseInt($('input[name="underwearNum"]').val());
    var mainNum = parseInt($('input[name="mainNum"]').val());
    var balconyNum = parseInt($('input[name="balconyNum"]').val());
    var quantityNum = parseInt($('input[name="quantityNum"]').val());
    var ironingNum = parseInt($('input[name="ironingNum"]').val());
    var change_eko = parseInt($('button[data-name="change-eko"]').val());
    var change_generator = parseInt($('button[data-name="change-generator"]').val());
    var change_key = parseInt($('button[data-name="change-key"]').val());
    var reset_eko = parseInt($('button[data-name="change-key"]').val());
    var reset_generator = parseInt($('button[data-name="reset-generator"]').val());
    var reset_key = parseInt($('button[data-name="reset-key"]').val());

    if (windowNum > 0) {
        htmlPricing.nameDev = 'Мытьё окон - ' + windowNum + ' шт';
    }
    if (fridgeNum > 0) {
        htmlPricing.fridgeDev = 'Мытьё холодильника внутри - ' + fridgeNum + ' шт. ';
    }
    if (bakeNum > 0) {
        htmlPricing.bakeDev = 'Мытьё духовки/СВЧ внутри - ' + bakeNum + ' шт. ';
    }
    if (chandelierNum) {
        htmlPricing.chandelierDev = 'Мытьё люстры - ' + chandelierNum + ' мин. ';
    }
    if (ironingNum) {
        htmlPricing.ironingDev = 'Глажка - ' + ironingNum + ' шт. ';
    }
    if (underwearNum) {
        htmlPricing.underwearDev = 'Поменять белье - ' + underwearNum + ' час(а). ';
    }
    if (mainNum) {
        htmlPricing.mainDev = 'Особые поручения - ' + mainNum + ' час(а). ';
    }
    if (balconyNum > 0) {
        htmlPricing.balconyDev = 'Уборка на балконе - ' + balconyNum + ' час(а). ';
    }
    if (quantityNum > 0) {
        htmlPricing.name = 'Количество санузлов - ' + quantityNum + ' шт. ';
    }

    if (change_eko) {
        htmlPricing.ekoClean = 'Эко-уборка';
    }

    if (change_generator) {
        htmlPricing.generatorClean = 'Парогенератор';
    }

    if (change_key) {
        htmlPricing.keyClean = 'Заехать за ключами от квартиры';
    }

    if (reset_eko) {
        delete htmlPricing.ekoClean;
    }

    if (reset_generator) {
        delete htmlPricing.generatorClean;
    }

    if (reset_key) {
        delete htmlPricing.keyClean;
    }

});

var changeCleanTypeInCalc = function (data_rooms, slider) {
    var activeNumber = data_rooms - 1;
    var slideQty = slider.getSlideCount();

    if (typeof data_rooms !== 'Number') {
        data_rooms = Number(data_rooms);
    }

    if (activeNumber >= 0 && data_rooms <= slideQty) {
        slider.goToSlide(activeNumber);
    } else {
        slider.goToSlide(0);
    }
};

var dataRooms = document.querySelector('.rooms__repairs').getAttribute('data-cleantype');
var dataRoomsCleaning = document.querySelector('.type-of-cleaning-order').getAttribute('data-cleantype');

var testAttributeAccordeon = function () {

    var view = document.querySelector('.clean-list__view');
    var fast = document.querySelector('.clean-list__fast');
    var general = document.querySelector('.clean-list__general');
    var afterRepairs = document.querySelector('.clean-list__after');
    var data = Number(view.getAttribute('data-cleantype'));

    if (data === 1) {
        fast.style.display = 'block';
    }

    if (data === 2) {
        general.style.display = 'block';
    }

    if (data === 3) {
        afterRepairs.style.display = 'block';
    }

};

/*var testAttributeSlider = function () {
    var slider_container = document.querySelector('.slider__list');
    var data = Number(slider_container.getAttribute('data-cleantype'));
    var quick = document.querySelector(' .slider__item--quick');
    var main = document.querySelector('.slider__item--main');
    var afterRepairs = document.querySelector('.slider__item--after');

    if (data === 1) {
        quick.style.left = '32%';
        quick.classList.remove('slide-bg');
        main.classList.add('slide-bg');
        main.style.left = 0;
    }

    if (data === 2) {
        main.style.left = '32%';
        main.classList.remove('slide-bg');
        quick.classList.add('slide-bg');
        quick.style.left = 0;
    }

    if (data === 3) {
        afterRepairs.style.left = '32%';
        afterRepairs.classList.remove('slide-bg');
        main.classList.add('slide-bg');
        main.style.right = '63px';
        main.style.left = 'auto';
    }

};*/

var slider_list = document.querySelector('.slider__list');

slider_list.addEventListener('click', function (e) {
    var target = e.target;
    e.preventDefault();
    var tab_general = document.querySelector('.clean-list__general');
    var tab_fast = document.querySelector('.clean-list__fast');
    var tab_after = document.querySelector('.clean-list__after');
    var slider_quick = document.querySelector('.slider__item--quick');
    var slider_main = document.querySelector('.slider__item--main');
    var slider_after = document.querySelector('.slider__item--after');

    if (target.classList.contains('slider__item--main')) {
        tab_general.style.display = 'block';
        tab_after.style.display = 'none';
        tab_fast.style.display = 'none';
        slider_main.classList.add('active--slider');
        slider_after.classList.remove('active--slider');
        slider_quick.classList.remove('active--slider');
        goToRoomsSlider.goToSlide(1);
        typeRoomsCleaning.goToSlide(1);
    }

    if (target.classList.contains('slider__item--quick')) {
        tab_fast.style.display = 'block';
        tab_after.style.display = 'none';
        tab_general.style.display = 'none';
        slider_main.classList.remove('active--slider');
        slider_after.classList.remove('active--slider');
        slider_quick.classList.add('active--slider');
        goToRoomsSlider.goToSlide(0);
        typeRoomsCleaning.goToSlide(0);
    }

    if (target.classList.contains('slider__item--after')) {
        tab_after.style.display = 'block';
        tab_general.style.display = 'none';
        tab_fast.style.display = 'none';
        slider_main.classList.remove('active--slider');
        slider_after.classList.add('active--slider');
        slider_quick.classList.remove('active--slider');
        goToRoomsSlider.goToSlide(2);
        typeRoomsCleaning.goToSlide(2);
    }

});

testAttributeAccordeon();
//testAttributeSlider();
changeCleanTypeInCalc(dataRooms, goToRoomsSlider);
changeCleanTypeInCalc(dataRoomsCleaning, typeRoomsCleaning);

//Tabs

var link = $(' .clean-link');
var sliderContent = $('.clean-list__content');

link.on('click', function (e) {
    e.preventDefault();

    var activeTab = $(this).attr("href");

    link.removeClass('active');
    $(this).addClass('active');
    sliderContent.hide();
    $(activeTab).fadeIn();
});


