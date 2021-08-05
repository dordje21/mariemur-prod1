$(function () {
    $('.show_variants').on('click', function(){
        $(this).fadeOut();
        $('.products_list').slideDown();
        $('.options_close').fadeIn();
    });

    $('.options_close').on('click', function () {
        $(this).fadeOut();
        $('.show_variants').fadeIn();
        $('.products_list').slideUp();
    });


    if ($('.cart-drawer-instructions').length) {
        var $noteInput = $('.cart-drawer-instructions');
        $('.cart-drawer-checkout-btn').on('click', function(e){
            e.preventDefault();
            $.ajax({
                type:     'POST',
                url:      '/cart/update.js',
                data:     {note: $noteInput.val()},
                dataType: 'json',
                success:  function () {
                    window.location.replace('/checkout');
                },
                error:    function () {
                    window.location.replace('/checkout');
                }
            });
        });
        $('.cart-drawer-instructions-label').on('click', function(){
            $(this).next().slideToggle(300);
        })
    }

});

$(document).ready(function() {
    const giftBlock = $('main.sd_content');
    const freGiftID = giftBlock.attr('data-gift-id');
    $('.js_custom_add').on('click', function() {
        const giftBlock = $('main.sd_content');
        const freGiftID = giftBlock.attr('data-gift-id');
        var isGift = false;
        var cartCust = CartJS.cart.items;

        let data = new FormData();
        data.append(`updates[${freGiftID}]`, 1);
        return fetch('/cart/update.js', {
            method: 'POST',
            body: data,
        }).then(response => {
            return response.json();
        }).catch((error) => {
            console.error('Error:', error);
        });

        for ( let i = 0; i <= cartCust.length-1; i++ ) {

            if ( cartCust[i].variant_id == freGiftID || cartCust[i].id == freGiftID)
                isGift = true;
        }
        if (!isGift)  { }
        setTimeout(function(){
            CartJS.addItem(freGiftID,1)
        }, 1000);
        setTimeout(function(){
            CartJS.updateItemById(freGiftID, 1);
        }, 1100);
    });
    $('body').on('click','[data-js-sort-by-label]',function () {
        $('#SortBy').val($(this).attr('data-js-sort-by-label'))
        $('#SortBy').trigger('change')
        $('[data-js-collection-sort-by-title]').html($(this).html())
        $('.catalog-sort__box').removeClass('show')
    })
    $('body').on('click','[data-js-show-by-label]',function () {
        $('#ViewLength').val($(this).attr('data-js-show-by-label'))
        $('#ViewLength').trigger('change')
        $('[data-show-by-label]').html($(this).html())
        $('.catalog-sort__box').removeClass('show')

    })
});

$(document).on('click', '.js-btn-cart', function () {


    var $parent = $(this).closest('.product-list__box')
    var $sizeCount = $parent.find('.size-count');
    if ($sizeCount.val() === '' || parseInt($sizeCount.val()) === 0){
    }else{


        setTimeout(function () {
            $('#product-sidebar').removeClass('sticky').removeClass('fixed').css({'margin-top':'0px'})

            $('html').addClass('no-scroll')
            $('.cart-modal').addClass('show')
            if (window.matchMedia('(min-width: 768px)').matches) {
                var $idleTime = 0;
                document.addEventListener('mousemove', resetIdleTime, false);
                document.addEventListener('keypress', resetIdleTime, false);

                function resetIdleTime() {
                    clearInterval(idleInterval)
                }

                function checkIfIdle() {
                    $idleTime += 1000
                    if ($idleTime >= 5000) {
                        console.log($idleTime);
                        $('html').removeClass('no-scroll')
                        $('.cart-modal').removeClass('show')
                        clearInterval(idleInterval)
                    }
                }

                var idleInterval = setInterval(checkIfIdle, 1000);
            }
            if (window.localStorage.getItem('show-klarna')) {
                Shopify.getCart(function (data) {
                    $(".klarna-set-container > klarna-placement").attr("data-purchase_amount", data.total_price);
                    window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
                    window.KlarnaOnsiteService.push({eventName: 'refresh-placements'});
                });
            }

        },1500)
    }
})

