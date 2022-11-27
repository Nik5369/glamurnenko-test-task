let a = () => $('.is-show').width($('.container').width());

document.addEventListener('orientationchange', function(){$('.is-show').width($('.container').width())});
document.addEventListener('DOMContentLoaded', function(){$('.is-show').width($('.container').width())});
$(window).blur(function() {$('.is-show').width($('.container').width())});
$(window).focus(function() {$('.is-show').width($('.container').width())});
$(window).mousemove(function() {$('.is-show').width($('.container').width())});

document.addEventListener('scroll', function () {
    if ($(window).scrollTop() > 450) {
        $('.is-show').width($('.container').width())
        $('.fixed-head').addClass('is-show');   
    } else {
        $('.is-show').width($('.container').width())
        $('.fixed-head').removeClass('is-show');
    }    
}) 

$(document).ready(function() {
    $('.burger').click(function() {
        $('.header').toggleClass('disp-none')
        $('.fixed-head').toggleClass('burger-head_open');
        $('.p-for-head').toggleClass('p-for-head_active');
        $('.menu-in-burger').toggleClass('open-menu');
    });
});

$('.page-up').click(function() { 
    $('html,body').animate({ 
        scrollTop: 0
    }, 100);
});
let currency = {
        ruble : {
            name: "ruble",
            sign: `\u{20bd}`,
            rateToRuble: 1,
        },
        hryvnia : {
            name: 'hryvnia',
            sign: `\u{20b4}`,
            rateToRuble: 0.6,
        },
        dollar : {
            name: 'dollar',
            sign: `\u{0024}`,
            rateToRuble: 0.016,
        },
        euro : {
            name: 'euro',
            sign: `\u{20ac}`,
            rateToRuble: 0.015,
        },
}
let firstPriceNumber = Number($('#price1').text());
let secondPriceNumber = Number($('#price2').text());
let thirdPriceNumber = Number($('#price3').text());
inCurrency = 'ruble';
let firstPrice = $('#price1').text();
$('#price1').text(firstPrice + currency.ruble.sign)
let secondPrice = $('#price2').text();
$('#price2').text(secondPrice + currency.ruble.sign)
let thirdPrice = $('#price3').text();
$('#price3').text(thirdPrice + currency.ruble.sign)


$('.choose-currency_block').click(function(){
    ($(this).attr('id') == 'hryvnia')
    if(inCurrency = currency.ruble.name){
        inCurrency = currency[$(this).attr('id')].name;
        $('#price1').text(Math.round(firstPriceNumber * currency[$(this).attr('id')].rateToRuble) + currency[$(this).attr('id')].sign)
        $('#price2').text(Math.round(secondPriceNumber * currency[$(this).attr('id')].rateToRuble) + currency[$(this).attr('id')].sign)
        $('#price3').text(Math.round(thirdPriceNumber * currency[$(this).attr('id')].rateToRuble) + currency[$(this).attr('id')].sign)
    }

    
})
// console.log($('#price1').text($('#price2')));