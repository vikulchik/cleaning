//Plugins

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

jQuery(function($){
  $("#phone").mask("(999) 999-9999");
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true
    });
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

console.log(wrapper)
wrapper.on('click', function (e) {
    e.preventDefault();
    var target = e.target;

    if (target.classList.contains('price-list__button--prew')) {
        var input = target.nextElementSibling;
        var previousValue = Number(input.value);

        if (input.value > 0) {
            input.value = previousValue - 1;
        }
    }

    if (target.classList.contains('price-list__button--next')) {
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