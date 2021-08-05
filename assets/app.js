window.lazySizesConfig = {loadHidden: false, hFac: 0.5, expFactor: 2, ricTimeout: 150};
new WOW({animateClass: 'animated'}).init();
$(document).ready(function () {/* - - - - - - - - - - - - - -       init inputmask       - - - - - - - - - - - - - - - */// $( '[type="tel"]' ).inputmask( '+38 (999) 999 99 99' );
    /* - - - - - - - - - - - - - -       init select2       - - - - - - - - - - - - - - - */
    function formatResult(state) {
        if (!state.id) {
            return state.text
        }
        var val = state.element.value, price = state.element.getAttribute('data-price');
        var $state = $('<span data-val="' + val + '" data-price="' + price + '">' + state.text + '</span>');
        return $state
    }

    $('.js-select').select2({
        language: 'en',
        width: '100%',
        placeholder: 'Select size',
        allowClear: true,
        minimumResultsForSearch: -1,
        templateResult: formatResult
    }).on('select2:select', function (e) {
        var data = e.params.data, value = data.id, price = data.element.dataset.price,
            $hiddenField = e.target.parentElement.querySelector('.size-count');
        $hiddenField.value = value
    });/* - - - - - - - - - - - - - -       init fancybox       - - - - - - - - - - - - - - - */
    function fancyImageFix(current) {
        if (current.$image !== undefined) {
            var windowRation = window.innerWidth / window.innerHeight;
            var currentRation = current.width / current.height;
            var imageWidth = 0;
            var imageHeight = 0;
            if (windowRation <= currentRation) {
                $('.fancybox-image').css({'width': 'auto', 'height': '100%'});
                setTimeout(function () {
                    imageWidth = current.$image[0].width;
                    if (window.innerWidth < imageWidth) {
                        var scrollX = imageWidth - window.innerWidth;
                        $('.fancybox-slide').eq(current.index).find('.fancybox-content').scrollLeft(scrollX / 2)
                    }
                }, 10)
            } else {
                $('.fancybox-image').css({'width': '100%', 'height': 'auto'});
                setTimeout(function () {
                    imageHeight = current.$image[0].height;
                    if (window.innerHeight < imageHeight) {
                        var scrollY = imageHeight - window.innerHeight;
                        $('.fancybox-slide').eq(current.index).find('.fancybox-content').scrollTop(scrollY / 2)
                    }
                }, 10)
            }
        }
    }

    function fancyZoom($this) {// console.log('open')
        var $slide = $this.parent();
        var fancyConfig = [];
        $('.product-slider__box').each(function () {
            fancyConfig.push({src: $(this).attr('href')})
        });
        $.fancybox.open(fancyConfig, {
            transitionDuration: 600,
            animationEffect: 'fade',
            baseClass: 'fancybox-product',
            image: {preload: false},
            touch: false,
            buttons: ['close'],
            onInit: function onInit(instance) {// console.log('onInit');
// $.fancybox.getInstance('jumpTo', $slide.index());
                instance.jumpTo($slide.index())
            },
            beforeShow: function beforeShow(instance, current) {// console.log('beforeShow');
                fancyImageFix(current)
            },
            beforeLoad: function beforeLoad(instance, current) {// console.log('beforeLoad');
// instance.jumpTo( $slide.index() );
            },
            afterLoad: function afterLoad(instance, current) {// console.log('afterLoad');
                fancyImageFix(current)
            }
        })
    }

    $(window).on('resize', function () {
        $.fancybox.close()
    });
    $(document).on('mousemove', '.fancybox-product .fancybox-content', function (e) {
        if (window.matchMedia('(min-width: 992px) and (hover: hover)').matches) {
            var $parent = $(this), $this = $parent.find('.fancybox-image');
            var imageHeight = $this.innerHeight();
            var percent = (imageHeight - window.innerHeight) / window.innerHeight;
            $parent.scrollTop(e.clientY * percent)
        }
    });
    var timeout;
    var lastTap = 0;
    $(document).on('touchend click', '.product-slider__box', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $this = $(this);
        if (window.matchMedia('(min-width: 992px) and (hover: hover)').matches) {
            fancyZoom($this)
        } else {
            var currentTime = new Date().getTime();
            var tapLength = currentTime - lastTap;
            clearTimeout(timeout);
            if (tapLength < 500 && tapLength > 0) {//Double Tap/Click
                fancyZoom($this)
            } else {//Single Tap/Click
                timeout = setTimeout(function () {//Single Tap/Click code here
                    clearTimeout(timeout)
                }, 500)
            }
            lastTap = currentTime
        }
    });
    $('[data-fancybox-video]').fancybox({
        video: {
            tpl: '<video class="fancybox-video" autoplay playsinline muted loop="loop" controls controlsList="nodownload" poster="{{poster}}">' + '<source src="{{src}}" type="{{format}}" />' + 'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' + '</video>',
            format: '',// custom video format
            autoStart: true
        }
    });/* - - - - - - - - - - - - - -       scroll to       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-scroll-to', function (e) {
        e.preventDefault();
        var link = $(this).attr('href');
        if (link !== '') {
            $('html, body').animate({'scrollTop': $(link).offset().top - $('.header').innerHeight()}, 600)
        }
    });/* - - - - - - - - - - - - - -       isValidEmail       - - - - - - - - - - - - - - - */
    function isValidEmail(email) {
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)
    }// $( document ).on( 'blur', '[type="email"]', function() {
// 	const $this = $( this ),
// 		$form = $this.closest( 'form' ),
// 		email = $this.val();
// 	let $parent = '';
// 	if ( $this.closest( '.subscribe' ).length ) {
// 		$parent = $this.closest( '.subscribe' );
// 	} else {
// 		$parent = $this.closest( '.form-group' );
// 	}
// 	if ( email === '' ){
// 		$parent.removeClass( 'has-error' );
// 	} else if( isValidEmail( email ) ) {
// 		$parent.removeClass( 'has-error' );
// 		$parent.find( '.help-block' ).slideUp( 300 );
// 	} else {
// 		$parent.addClass( 'has-error' );
// 		$parent.find( '.help-block' ).slideDown( 300 );
// 		$form.submit( function ( e ) {
// 			e.stopPropagation();
// 		});
// 		setTimeout(function () {
// 			$parent.find( '.help-block' ).slideUp( 300 );
// 		}, 2000);
// 	}
// });
    function toggleErrorMessage($form) {
        setTimeout(function () {
            $form.find('.has-error .help-block').slideDown(300);
            setTimeout(function () {
                $form.find('.has-error .help-block').slideUp(300)
            }, 2000)
        }, 100)
    }

    $('form').each(function () {
        var $form = $(this);
        toggleErrorMessage($form);
        $form.on('submit', function (e) {
            toggleErrorMessage($form)
        })
    });/* - - - - - - - - - - - - - -       password toggle       - - - - - - - - - - - - - - - */
    $(document).on('input', '[type="password"]', function () {
        var val = $(this).val(), $parent = $(this).parent();
        if (val !== '') {
            $parent.find('.toggle-pass').addClass('show')
        } else {
            $parent.find('.toggle-pass').removeClass('show')
        }
    });
    $(document).on('click', '.js-toggle-pass', function () {
        var $parent = $(this).parent();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $parent.find('input').attr('type', 'text')
        } else {
            $(this).removeClass('active');
            $parent.find('input').attr('type', 'password')
        }
    });/* - - - - - - - - - - - - - -       header cart toggle       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-header-cart', function () {
        $('html').addClass('no-scroll');
        $('.cart-modal').addClass('show')
    });
    $(document).on('click', '.js-cart-modal-close', function () {
        $('html').removeClass('no-scroll');
        $('.cart-modal').removeClass('show')
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.js-header-cart, .js-btn-cart, .cart-modal__inner').length) return;
        $('.cart-modal').removeClass('show');
        e.stopPropagation()
    });/* - - - - - - - - - - - - - -       header cart note       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-cart-note-toggle', function (e) {
        e.preventDefault();
        $('.cart-modal__form').toggleClass('show');// $( '.cart-modal__form textarea' ).val( '' );
        if ($('.cart-modal__form').hasClass('show')) {
            setTimeout(function () {
                $('.cart-modal__form textarea').focus()
            }, 300)
        }
    });
    $(document).on('click', '.js-cart-note-save', function (e) {
        e.preventDefault();
        var mess = $('.cart-modal__form textarea').val();
        $('.cart-modal__form').removeClass('show');
        $('.cart-modal__note-text').text(mess);
        if (mess !== '') {
            $('.cart-modal__note').addClass('show');
            $('.cart-modal__link').addClass('hide')
        } else {
            $('.cart-modal__link').removeClass('hide')
        }
    });
    $(document).on('click', '.js-cart-note-delete', function (e) {
        e.preventDefault();
        $('.cart-modal__form').removeClass('show');
        $('.cart-modal__form textarea').val('');
        $('.cart-modal__note').removeClass('show');
        $('.cart-modal__note-text').text('');
        $('.cart-modal__link').removeClass('hide')
    });/* - - - - - - - - - - - - - -       menu toggle       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-menu-toggle', function () {
        if (!$('.header').hasClass('show')) {
            $('html').addClass('no-scroll');
            $('.header').addClass('show')
        } else {
            $('html').removeClass('no-scroll');
            $('.header').removeClass('show')
        }
    });/* - - - - - - - - - - - - - -       submenu       - - - - - - - - - - - - - - - */
    $('.top-menu ul li').each(function () {
        var $this = $(this);
        if ($this.find('.submenu').length) {
            $this.append('<div class="submenu-toggle js-submenu-toggle"><span class="icon icon-i-plus-big"></span><div>')
        }
    });
    $(document).on('click', '.js-submenu-toggle', function () {
        var $parent = $(this).closest('li');
        if (!$parent.hasClass('show')) {
            $('.top-menu ul li').removeClass('show');
            $parent.addClass('show');
            $('.submenu').slideUp(300);
            $parent.find('.submenu').slideDown(300)
        } else {
            $parent.removeClass('show');
            $parent.find('.submenu').slideUp(300)
        }
    });
    $(window).on('resize', function () {
        if (window.matchMedia('(min-width: 1200px)').matches) {
            $('.header').removeClass('show');
            $('.top-menu ul li').removeClass('show');
            $('.submenu').css('display', '')
        }
    });
    if ($('.main-head__link').length) {
        setTimeout(function () {
            $('.main-head__link').addClass('show')
        }, 1300)
    }
    if ($('.main-head__sale').length) {
        setTimeout(function () {
            $('.main-head__sale').addClass('show')
        }, 1300)
    }
    if ($('.top-menu').length) {
        setTimeout(function () {
            $('.top-menu').addClass('animated')
        }, 1300)
    }/* - - - - - - - - - - - - - -       currency toggle       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-currency-toggle', function () {
        $('.header-currency').toggleClass('active');
        $('.header-currency__modal').toggleClass('show')
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.js-currency-toggle, .header-currency__modal').length) return;
        $('.header-currency').removeClass('active');
        $('.header-currency__modal').removeClass('show');
        e.stopPropagation()
    });
    $(document).on('click', '.js-currency-link a', function () {
        $('.header-currency').removeClass('active');
        $('.header-currency__modal').removeClass('show')
    });/* - - - - - - - - - - - - - -       cart info       - - - - - - - - - - - - - - - */
    if ($('.cart-info').length) {
        var showCartInfo = function showCartInfo() {
            if (window.matchMedia('(max-width: 1199px)').matches) {
                $('.wrapper').addClass('show-cart')
            } else {
                $('.wrapper').removeClass('show-cart')
            }
        };
        showCartInfo();
        $(window).on('resize', function () {
            showCartInfo()
        })
    }/* - - - - - - - - - - - - - -       search       - - - - - - - - - - - - - - - */
    if ($('.search').length) {
        $('.search-form').addClass('show');
        $('.search-form__box-field input').focus()
    }
    $(document).on('click', '.js-search-toggle', function () {
        $('.header-search').toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.search-form').addClass('show');
            setTimeout(function () {
                $('.search-form__box-field input').focus()
            }, 300)
        } else {
            $('.search-form').removeClass('show')
        }
    });// $( document ).on( 'input', '.js-search', function() {
// 	const $this = $( this ),
// 		$parent = $this.closest( '.search-form' );
// 	if ( $this.val() !== '' ) {
// 		$parent.addClass( 'active' );
// 	} else {
// 		$parent.removeClass( 'active' );
// 	}
// });
    $(document).on('click', '.js-search-delete', function (e) {
        e.preventDefault();
        var $parent = $(this).closest('.search-form'), $field = $parent.find('.search-form__box-field input');
        $field.val('');
        if ($('.search').length) {
            $field.focus()
        } else {
            $parent.removeClass('show');
            $('.header-search').removeClass('active')
        }// $parent.removeClass( 'active' );
    });// $( document ).click( function( e ) {
// 	if ( $( e.target ).closest( '.header-search, .search-form' ).length )
// 		return;
// 	$( '.header-search' ).removeClass( 'active' );
// 	$( '.search-form' ).removeClass( 'show' );
// 	e.stopPropagation();
// });
    /* - - - - - - - - - - - - - -       animation image       - - - - - - - - - - - - - - - */
    function animateImg(target, zoom) {
        if ($(target).length) {
            var top = $(window).scrollTop();
            var windowHeight = $(window).innerHeight();
            var thisTop = $(target).offset().top;
            var pointStart = thisTop - windowHeight;
            var thisZoom = 0;
            var constZoom = 1;
            if (zoom > 0) {
                thisZoom = 1 + parseInt((top - pointStart) * 100 / windowHeight * zoom) / 100;
                if (top < pointStart) {
                    $(target).find('img').css({'transform': 'scale( ' + constZoom + ' )'})
                }
                if (top > thisTop + windowHeight) {
                    constZoom += Math.abs(zoom) * 2;
                    $(target).find('img').css({'transform': 'scale( ' + constZoom + ' )'})
                }
            }
            if (zoom < 0) {
                thisZoom = 1 + Math.abs(zoom) * 2 + parseInt((top - pointStart) * 100 / windowHeight * zoom) / 100;
                if (top < pointStart) {
                    constZoom += Math.abs(zoom) * 2;
                    $(target).find('img').css({'transform': 'scale( ' + constZoom + ' )'})
                }
                if (top > thisTop + windowHeight) {
                    $(target).find('img').css({'transform': 'scale( ' + constZoom + ' )'})
                }
            }
            if (top > pointStart && top < thisTop + windowHeight) {
                $(target).find('img').css({'transform': 'scale( ' + thisZoom + ')'})
            }
        }
    }

    if ($('.main-collection__box').length) {
        $(window).on('scroll', function () {
            animateImg('.main-collection__box:nth-child(1) picture', -0.1);
            animateImg('.main-collection__box:nth-child(2) picture', -0.17);
            animateImg('.main-collection__box:nth-child(3) picture', -0.15);
            animateImg('.main-collection__box:nth-child(4) picture', -0.17);
            animateImg('.main-collection__box:nth-child(5) picture', -0.2)
        })
    }/* - - - - - - - - - - - - - -       animation image       - - - - - - - - - - - - - - - */// function translateImg( target, offset ) {
// 	if( $( target ).length ) {
// 		const top = $( window ).scrollTop();
// 		const windowHeight = $( window ).innerHeight();
// 		const thisTop = $( target ).offset().top;
// 		const pointStart = thisTop - windowHeight;
// 		let thisOffset = 0;
// 		let constOffset = 100;
// 		if ( offset > 0 ) {
// 			thisOffset = parseInt( ( ( top  - pointStart ) * 100 / windowHeight ) * offset);
// 			if ( top < pointStart ) {
// 				$( target ).css({
// 					'transform': 'translateY( 0 )'
// 				});
// 			}
// 			if ( top > thisTop + windowHeight) {
// 				constOffset = Math.abs( offset ) * 100 * 2;
// 				$( target ).css({
// 					'transform': 'translateY( ' + constOffset + 'px )'
// 				});
// 			}
// 		}
// 		if ( offset < 0 ) {
// 			thisOffset = parseInt( ( ( top  - pointStart ) * 100 / windowHeight ) * offset );
// 			if ( top < pointStart ) {
// 				$( target ).css({
// 					'transform': 'translateY( 0 )'
// 				});
// 			}
// 			if ( top > thisTop + windowHeight) {
// 				constOffset = offset * 100 * 2;
// 				$( target ).css({
// 					'transform': 'translateY( ' + constOffset + 'px )'
// 				});
// 			}
// 		}
// 		if ( top > pointStart && top < thisTop + windowHeight ) {
// 			$( target ).css({
// 				'transform': 'translateY( ' + thisOffset + 'px)'
// 			});
// 		}
// 	}
// }
// $( window ).on( 'scroll', function() {
// translateImg( '.brand-content__list-img:nth-child(1)', -0.9 );
// translateImg( '.brand-content__list-img:nth-child(2)', -0.7 );
// translateImg( '.brand-content__list-img:nth-child(3)', -0.9 );
// });
    /* - - - - - - - - - - - - - -       animation insta image       - - - - - - - - - - - - - - - */
    function translateInstaImage(target) {
        if ($(target).length) {
            var top = $(window).scrollTop();
            var windowHeight = $(window).innerHeight();
            var thisTop = $(target).offset().top;
            var pointStart = thisTop - windowHeight;
            var maxHeight = $('.insta-box__img').innerHeight();
            var imageHeight = target.innerHeight();
            var pointStop = thisTop + imageHeight;
            var shiftTop = (maxHeight - imageHeight) / 2;
            var currentShift = 0;
            if (top < pointStart) {
                $(target).css({'transform': 'translateY( 0 )'})
            } else if (top > thisTop) {
                $(target).css({'transform': 'translateY( -' + shiftTop + 'px )'})
            } else {
                $(target).addClass('show');
                currentShift = shiftTop * (1 - (thisTop - top) / windowHeight);
                $(target).css({'transform': 'translateY( -' + currentShift + 'px )'})
            }
        }
    }

    $(window).on('scroll', function () {
        $('.insta-list picture').each(function () {
            translateInstaImage($(this))
        })
    });/* - - - - - - - - - - - - - -       animation background       - - - - - - - - - - - - - - - */
    function animateBg(e, target, zoom) {
        var top = $(window).scrollTop();
        var windowHeight = $(window).innerHeight();
        var thisTop = $(target).offset().top;
        var pointStart = thisTop - windowHeight;
        var thisZoom = 0;
        if (zoom > 0) {
            thisZoom = 100 + parseInt((top - pointStart) * 100 / windowHeight * zoom)
        }
        if (zoom < 0) {
            thisZoom = 100 + 100 * Math.abs(zoom) * 2 + parseInt((top - pointStart) * 100 / windowHeight * zoom)
        }
        if (top > pointStart && top < thisTop + windowHeight) {
            $(target).css({'background-position': 'center bottom', 'background-size': 'auto ' + thisZoom + '%'})
        }
    }// $( window ).on( 'scroll', function ( e ) {
// animateBg(e, '.subscribe', -0.06);
// });
    /* - - - - - - - - - - - - - -       parallax image/video       - - - - - - - - - - - - - - - */
    function parallaxBox() {
        var top = $(window).scrollTop();
        var constShift = 200;
        var $this = $('.main-head__box, .contact-us__top');
        var $image = $('.main-head__img');
        var thisHeight = $this.innerHeight();
        var $thisVideo = $this.find('img, video');
        var $thisImage = $image.find('img');
        var pos = 0;
        if (window.matchMedia('(min-width: 768px)').matches) {
            $thisVideo.css({'height': 'calc(100% + ' + constShift + 'px)', 'top': '-' + constShift + 'px'});
            $thisImage.css({'height': 'calc(100% + ' + constShift + 'px)', 'top': '-' + constShift + 'px'});
            if (top < thisHeight) {
                pos = (top * constShift / thisHeight).toFixed(2)
            } else {
                pos = constShift
            }
            $thisVideo.css('transform', 'translateY(' + pos + 'px) scale(1)');
            $thisImage.css('transform', 'translateY(' + pos + 'px) scale(1.25)')
        } else {
            $thisVideo.css({'height': '100%', 'top': '', 'transform': 'scale(1)'});
            $thisImage.css({'height': '100%', 'top': '', 'transform': 'scale(1)'})
        }
        setTimeout(function () {
            $thisVideo.css('transition', 'none');
            $thisImage.css('transition', 'none')
        }, 1000)
    }

    if ($('.main-head__box, .contact-us__top').length) {
        parallaxBox();
        $(window).on('scroll resize', function (e) {
            parallaxBox()
        })
    }/* - - - - - - - - - - - - - -       zoomOut animation image       - - - - - - - - - - - - - - - */
    function zoomOutAnimation($this) {
        var top = $(window).scrollTop();
        var constShift = 100;
        var imageHeight = parseInt($this.innerHeight()) * 0.1;
        var posTop = $this.offset().top - $(window).innerHeight();
        if (window.matchMedia('(min-width: 320px)').matches) {
            $this.find('img').css({'height': 'calc(100% + ' + imageHeight + 'px)', 'transform': 'scale(1.15)'});
            if (top > posTop) {
                $this.find('img').css({'height': 'calc(100%)', 'transform': 'scale(1)'})
            }
        } else {
            $this.find('img').css({'height': '', 'transform': ''})
        }
    }

    if ($('.zoom-out').length) {
        $('.zoom-out').each(function () {
            var $this = $(this);
            zoomOutAnimation($this);
            $(window).on('scroll resize', function (e) {
                zoomOutAnimation($this)
            })
        })
    }/* - - - - - - - - - - - - - -       init product slider       - - - - - - - - - - - - - - - */
    $('.js-product-slider').on('init', function () {
        $('.js-product-slider .slick-dots').append('<div class="slick-dots__line"></div>')
    });

    function initProductSlider() {
        if (window.matchMedia('(max-width: 5000px)').matches) {
            $('.js-product-slider').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 600,
                arrows: false,
                dots: true,
                touchMove: false
            }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                $('.js-product-slider .slick-dots__line').css('left', 48 * nextSlide + 'px')
            })
        }
    }

    initProductSlider();
    // $(window).resize(function () {
    //     if ($('.js-product-slider').hasClass('slick-initialized') && window.matchMedia('(min-width: 1200px)').matches) {
    //         $('.js-product-slider').slick('unslick')
    //     } else if (!$('.js-product-slider').hasClass('slick-initialized')) {
    //         initProductSlider()
    //     }
    // });
    /* - - - - - - -          checkbox       - - - - - - - - */
    $(document).on('change', '.js-checkbox-list [type="checkbox"]:not([disabled])', function () {
        var $this = $(this), $parent = $this.closest('.js-checkbox-list');
        if ($this.prop('checked')) {
            $parent.find('[type="checkbox"]').prop('checked', false);
            $this.prop('checked', true)
        } else {
            $this.prop('checked', false)
        }
    });/* - - - - - - -        count calculate       - - - - - - - - */
    function calcCount() {
        $('.count-box').each(function () {
            var $this = $(this), $field = $this.find('.count'), $plus = $this.find('.count-inc'),
                $minus = $this.find('.count-dec'), min = parseInt($field.attr('data-min')),
                max = parseInt($field.attr('data-max'));
            var count = 0, postfix = $field.attr('data-postfix');
            postfix = postfix !== '' ? ' ' + postfix : '';
            if (parseInt($field.val()) === min) {
                $minus.addClass('disabled');
                $plus.removeClass('disabled')
            } else if (parseInt($field.val()) === max) {
                $minus.removeClass('disabled');
                $plus.addClass('disabled')
            } else {
                $plus.removeClass('disabled');
                $minus.removeClass('disabled')
            }
            $plus.on('click', function () {
                $minus.removeClass('disabled');
                count = parseInt($field.val());
                if (count < max - 1) {
                    count++
                } else {
                    $plus.addClass('disabled');
                    count = max
                }
                $field.val(count + postfix)
            });
            $minus.on('click', function () {
                $plus.removeClass('disabled');
                count = parseInt($field.val());
                if (count > min + 1) {
                    count--
                } else {
                    $minus.addClass('disabled');
                    count = min
                }
                $field.val(count + postfix)
            });
            $field.on('input', function () {
                $plus.removeClass('disabled');
                $minus.removeClass('disabled');
                count = $field.val();
                count = count === '' ? count : parseInt(count);
                if (count < min + 1) {
                    $minus.addClass('disabled');
                    if (count === '') {
                        count = ''
                    } else {
                        count = min
                    }
                } else if (count > max - 1) {
                    $plus.addClass('disabled');
                    count = max
                }
                $field.val(count)
            });
            $field.on('focus', function () {
                count = parseInt($field.val());
                $field.val(count)
            });
            $field.on('blur', function () {
                count = $field.val();
                if (count === '') {
                    count = min
                }
                $field.val(parseInt(count) + postfix)
            })
        })
    }

    calcCount();/* - - - - - - -        product info toggle       - - - - - - - - */
    $(document).on('click', '.js-product-info', function () {
        var $parent = $(this).closest('.product-info__box');
        if (!$parent.hasClass('active')) {
            var posTop = $parent.closest('.product-info').offset().top + $parent.find('.product-info__box-title').innerHeight() * $parent.index() - $('header').innerHeight();
            $('html, body').animate({'scrollTop': posTop}, 300);
            $('.product-info__box').removeClass('active');
            $parent.addClass('active');
            $('.product-info__box-text').slideUp(300);
            $parent.find('.product-info__box-text').slideDown(300)
        } else {
            $parent.removeClass('active');
            $parent.find('.product-info__box-text').slideUp(300)
        }
    });
    // var stickyStart = 0;
    //
    // function stickyProductSidebar() {
    //     var top = $(window).scrollTop(), $header = $('.header'), $parent = $('.product-content'),
    //         $slider = $('.product-slider'), n = 1, count = $slider.children('div').length,
    //         $sliderImage = $slider.children('div:nth-child(1)'), $sidebar = $('.product-sidebar'),
    //         parentTop = $parent.offset().top + parseFloat($parent.css('padding-top')) - $header.innerHeight(),
    //         sliderBottom = $slider.offset().top + $slider.innerHeight();
    //     var heightStop = 0, stickyStop = 0, posBottom = 0;
    //     stickyStop = stickyStop.toFixed(2);
    //     if (window.matchMedia('(min-width: 1200px)').matches) {
    //         if (count < n) {
    //             stickyStop = $slider.innerHeight() - ($(window).innerHeight() - $header.innerHeight() - 76);
    //             posBottom = sliderBottom - $(window).innerHeight()
    //         } else {
    //             heightStop = $sliderImage.innerHeight() * n + parseFloat($sliderImage.css('margin-bottom')) * (n - 1);
    //             stickyStop = heightStop - ($(window).innerHeight() - $header.innerHeight() - 76);
    //             posBottom = $slider.offset().top + heightStop - $(window).innerHeight();
    //             stickyStop = stickyStop < 0 ? 0 : stickyStop
    //         }
    //         if (top > parentTop - 76 && top < posBottom) {// console.log('fixed');
    //             $sidebar.removeClass('sticky').addClass('fixed').css({'margin-top': ''});
    //             stickyStart = top
    //         } else {
    //             $sidebar.removeClass('fixed')
    //         }
    //         if (top > posBottom) {// console.log('sticky');
    //             $sidebar.addClass('sticky').css({// 'margin-top': stickyStart - $header.innerHeight() + parseFloat( $parent.css( 'padding-top' ) )
    //                 'margin-top': stickyStop + 'px'
    //             })
    //         }
    //     } else {
    //         $sidebar.removeClass('fixed sticky').css({'margin-top': ''})
    //     }
    // }
    //
    // if ($('.product-sidebar').length) {
    //     stickyProductSidebar();
    //     $(window).on('scroll resize', function () {
    //         stickyProductSidebar()
    //     })
    // }/* - - - - - - - - - - - - - -       init product other slider       - - - - - - - - - - - - - - - */// $( '.js-product-other-slider' ).slick({
// 	infinite: false,
// 	slidesToShow: 2,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	dots: false,
// 	swipeToSlide: true
// }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
// 	$( '.product-slider .slick-dots__line' ).css('left', 48 * nextSlide + 'px');
// });
    /* - - - - - - - - - - - - - -       size toggle       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-size-add:not(.btn-red)', function (e) {
        var $parent = $(this).closest('.product-list__box'), $sizeCount = $parent.find('.size-count');
        if ($sizeCount.val() === '' || parseInt($sizeCount.val()) === 0) {
            e.preventDefault();
            $parent.find('.size-box').addClass('has-error')
        }
    });
    $(document).on('click', '.js-size', function () {
        var $parent = $(this).closest('.size-box');// if ( window.matchMedia( '(max-width: 1199px)' ).matches ) {
// 	if ( !$parent.hasClass( 'show' ) ) {
// 		$( 'html' ).addClass( 'no-scroll' );
// 	} else {
// 		$( 'html' ).removeClass( 'no-scroll' );
// 	}
// }
        if (!$parent.hasClass('show')) {
            $('.size-box').removeClass('show');
            $parent.addClass('show')
        } else {
            $parent.removeClass('show')
        }
    });

    function setSize($parent) {
        var $sizeSelected = $parent.find('.size-box__modal-list .active'),
            $sizeField = $parent.find('.size-box__count'), $sizeCount = $parent.find('.size-count'),
            sizeText = $sizeSelected.find('.size-title').text();
        $sizeField.text("SIZE: (" + sizeText + ")");
        $sizeCount.val($sizeSelected.attr('data-val'));
        $parent.find('.size-box').removeClass('has-error show');
        $('html').removeClass('no-scroll');
        if ($sizeCount.val() === '' || parseInt($sizeCount.val()) === 0) {
            $parent.find('.product-list__box-button .btn').removeClass('btn-red')
        } else {
            $parent.find('.product-list__box-button .btn').addClass('btn-red')
        }
    }

    $(document).on('click', '.size-box__modal-button .btn', function (e) {
        e.preventDefault();
        var $parent = $(this).closest('.product-list__box');
        if (window.matchMedia('(max-width: 1199px)').matches) {
            setSize($parent)
        }
    });
    $(document).on('click', '.size-box__modal-list li', function () {
        var $parent = $(this).closest('.product-list__box');
        $parent.find('.size-box__modal-list li').removeClass('active');
        $(this).addClass('active');// if ( window.matchMedia( '(min-width: 1200px)' ).matches ) {
        setSize($parent);// }
    });
    $(document).on('click', '.js-size-close', function () {
        $('html').removeClass('no-scroll');
        $(this).closest('.size-box').removeClass('show')
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.size-box').length) return;
        $('.size-box').removeClass('show');
        e.stopPropagation()
    });// $( '.js-size-list' ).each( function() {
// 	const $list = $( this ).find( 'ul' );
// 	$list.on( 'scroll', function() {
// 		if ( window.matchMedia( '(max-width: 1199px)' ).matches ) {
// 			const top = $list.scrollTop();
// 			const itemHeight = 60;
// 			const index = Math.floor(top/itemHeight);
// 			$list.find('li').removeClass( 'active' );
// 			$list.find('li').eq(index).addClass( 'active' );
// 		}
// 	});
// });
    /* - - - - - - - - - - - - - -       init product other slider       - - - - - - - - - - - - - - - */
    $('.js-main-news-slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        responsive: [{breakpoint: 768, settings: {slidesToShow: 1}}]
    });/* - - - - - - - - - - - - - -       go to collection       - - - - - - - - - - - - - - - */
    /* - - - - - - - - - - - - - -       init product other slider       - - - - - - - - - - - - - - - */
    $('.js-related-slider-new').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [{breakpoint: 768, settings: {slidesToShow: 2}}]
    });/* - - - - - - - - - - - - - -       go to collection       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-goto-collection', function (e) {
        e.preventDefault();
        var link = $(this).attr('href');
        var time = 0;
        if (window.matchMedia('(min-width: 1200px)').matches) {
            $('.main-head').addClass('show');
            time = 1000
        }
        setTimeout(function () {
            document.location.href = link
        }, time)
    });/* - - - - - - - - - - - - - -       size guide       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-size-guide', function () {
        $('html').addClass('no-scroll');
        $('.product-size-guide').addClass('show');// let posTop = 0;
// $( 'html, body' ).animate({ 'scrollTop': $( '.product-size-guide' ).offset().top - posTop }, 100 );
    });
    $(document).on('click', '.js-size-guide-close', function () {
        $('html').removeClass('no-scroll');
        $(this).closest('.product-size-guide').removeClass('show')
    });// function fixedSizeGuide() {
// 	if ( window.matchMedia( '(max-width: 1200px)' ).matches ) {
// 		const top = $( window ).scrollTop();
// 		let posTop = $( '.product-sidebar' ).offset().top - 5;
// 		posTop = $( '.header' ).length ? posTop - $( '.header' ).innerHeight() : posTop;
// 		posTop = ( '.product-slider' ).length ? posTop - parseFloat( $( '.product-slider' ).css( 'margin-bottom' )) : posTop;
// 		if ( top >= posTop ) {
// 			$( '.product-size-guide' ).addClass( 'fixed' );
// 		} else {
// 			$( '.product-size-guide' ).removeClass( 'fixed' );
// 		}
// 	} else {
// 		$( '.product-size-guide' ).removeClass( 'fixed' );
// 	}
// }
// if ( $( '.product-sidebar' ).length ) {
// 	fixedSizeGuide();
// 	$( window ).on( 'scroll resize', function() {
// 		fixedSizeGuide();
// 	});
// }
    $(document).click(function (e) {
        if ($(e.target).closest('.product-size-guide, .js-size-guide').length) return;
        $('.product-size-guide').removeClass('show');
        e.stopPropagation()
    });/* - - - - - - - - - - - - - -       rebuild DOM       - - - - - - - - - - - - - - - */
    function rebuildDom() {
        var $sizeGuide = $('.product-size-guide').detach();
        var $currency = $('.header-left');
        var $currencyList = $('.header-currency__modal');
        if (window.matchMedia('(min-width: 1200px)').matches) {
            $currency.prependTo('.header-top .header-inner');
            $currencyList.prependTo('.header-top .header-inner');
            $sizeGuide.appendTo('.wrapper')
        } else {
            $currency.appendTo('.header-bottom');
            $currencyList.appendTo('.header-bottom');
            $sizeGuide.appendTo('.product-content')
        }
    }

    $(window).on('resize', function () {
        rebuildDom()
    });
    rebuildDom();/* - - - - - - - - - - - - - -       catalog sort toggle       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-catalog-sort', function () {
        var $this = $(this), $parent = $this.closest('.catalog-sort__box');
        if (!$parent.hasClass('show')) {
            $('.catalog-sort__box').removeClass('show');
            $parent.addClass('show')
        } else {
            $parent.removeClass('show')
        }
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.catalog-sort__box').length) return;
        $('.catalog-sort__box').removeClass('show');
        e.stopPropagation()
    });/* - - - - - - - - - - - - - -       catalog view toggle       - - - - - - - - - - - - - - - */
    function toggleCatalogView() {
        var $catalog = $('.catalog-list'), type = $('.js-catalog-view.active').attr('data-type');
        if (type === undefined || type === '') {
            $catalog.removeClass('view-single view-grid view-list').addClass('view-single')
        } else {
            $catalog.removeClass('view-single view-grid view-list').addClass('view-' + type)
        }
    }

    toggleCatalogView();
    $(document).on('click', '.js-catalog-view', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $('.js-catalog-view').removeClass('active');
            $(this).addClass('active');
            toggleCatalogView()
        }
    });/* - - - - - - - - - - - - - -       catalog load more       - - - - - - - - - - - - - - - */
    $(document).on('click', '.js-load-more', function () {
        var $this = $(this);
        $this.addClass('loading');
        setTimeout(function () {
            $this.removeClass('loading').addClass('loaded')
        }, 1000);
        setTimeout(function () {
            $this.removeClass('loaded')
        }, 2000)
    });/* - - - - - - - - - - - - - -       catalog filter       - - - - - - - - - - - - - - - */
    if ($('.catalog-filter').length) {
        $('.catalog-filter__box').each(function () {
            if ($(this).hasClass('active')) {
                $(this).find('.catalog-filter__box-body').slideDown(300)
            }
        })
    }
    $(document).on('click', '.js-catalog-filter-toggle', function () {
        var $catalog = $('.catalog-filter'), $toggleFilter = $(this),
            $toggleFilterTitle = $toggleFilter.find('.catalog-toggle__title'),
            textShow = $(this).attr('data-show-text'), textHide = $(this).attr('data-hide-text');
        if (!$catalog.hasClass('show')) {
            $('body').addClass('show-filter');
            $toggleFilterTitle.text(textHide);
            $catalog.addClass('show');
            $('.overlay').addClass('show')
        } else {
            $('body').removeClass('show-filter');
            $toggleFilterTitle.text(textShow);
            $catalog.removeClass('show');
            $('.overlay').removeClass('show')
        }
    });
    $(document).on('click', '.js-catalog-filter', function (e) {
        var $parent = $(this).closest('.catalog-filter__box');
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
            $parent.find('.catalog-filter__box-body').slideDown(300)
        } else {
            $parent.removeClass('active');
            $parent.find('.catalog-filter__box-body').slideUp(300)
        }
    });// function fixedCatalogFilter() {
// 	const top = $( window ).scrollTop(),
// 		headerHeight = $( '.header' ).innerHeight();
// 	if ( $( '.catalog-filter' ).hasClass( 'show' ) ) {
// 		if ( top > $( '.catalog-content' ).offset().top - headerHeight ) {
// 			$( '.catalog-filter' ).addClass( 'fixed' );
// 		} else {
// 			$( '.catalog-filter' ).removeClass( 'fixed' );
// 		}
// 	}
// }
// if ( $( '.catalog-filter' ).length ) {
// 	$( window ).on( 'scroll', function(){
// 		fixedCatalogFilter();
// 	});
// }
    $(document).click(function (e) {
        if ($(e.target).closest('.catalog-filter, .catalog-toggle').length) return;
        $('body').removeClass('show-filter');
        $('.catalog-filter').removeClass('show');
        $('.overlay').removeClass('show');
        e.stopPropagation()
    });
    $(document).on('click', '.overlay', function () {
        $('.overlay').removeClass('show');
        if ($('.catalog-filter').length) {
            $('body').removeClass('show-filter');
            $('.catalog-toggle__title').text($('.catalog-toggle').attr('data-show-text'));
            $('.catalog-filter').removeClass('show')
        }
    });/* - - - - - - - - - - - - - -       prettify       - - - - - - - - - - - - - - - */
    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')
    }/* - - - - - - - - - - - - - -       init ionRangeSlider       - - - - - - - - - - - - - - - */
    $('.js-range').each(function () {
        var $range = $(this), $parent = $range.closest('.range-box'), $filter = $range.closest('.catalog-filter'),
            $inputFrom = $parent.find('.range-box__value-from'), $inputTo = $parent.find('.range-box__value-to'),
            min = parseInt($range.attr('data-min')), max = parseInt($range.attr('data-max')),
            valueFrom = parseInt($range.attr('data-from')), valueTo = parseInt($range.attr('data-to'));
        var prefix = '';
        if ($range.attr('data-prefix') !== undefined) {
            prefix = $range.attr('data-prefix')
        }
        var instance = void 0;
        $range.ionRangeSlider({
            type: 'double', grid: false, hide_from_to: true, hide_min_max: true,// min: min,
// max: max,
// from: valueFrom,
// to: valueTo,
            onStart: updateInputs, onChange: updateInputs
        });
        instance = $range.data('ionRangeSlider');

        function updateInputs(data) {
            var from = data.from, to = data.to;
            $inputFrom.prop('value', prefix + prettify(from));
            $inputTo.prop('value', prefix + prettify(to))
        }

        $filter.find('[type="reset"]').on('click', function () {// instance.reset();
            instance.update({from: valueFrom, to: valueTo});
            setTimeout(function () {
                $inputFrom.val(prefix + prettify(valueFrom));
                $inputTo.val(prefix + prettify(valueTo))
            }, 100)
        });
        $inputFrom.on('input', function () {
            var val = parseInt($(this).prop('value').replace(/[\$\€\£\s]+/g, ''));
            var to = parseInt($(this).closest('.range-box').find('.range-box__value-to').prop('value').replace(/[\$\€\£\s]+/g, ''));// validate
            if (val <= min) {
                val = min
            } else if (val >= to) {
                val = to
            }
            instance.update({from: val});// $inputFrom.val( prettify( val ) );
        });
        $inputFrom.on('blur', function () {
            var val = parseInt($(this).prop('value').replace(/[\$\€\£\s]+/g, ''));
            var to = parseInt($(this).closest('.range-box').find('.range-box__value-to').prop('value').replace(/[\$\€\£\s]+/g, ''));
            if (val <= min || !val) {
                val = min
            } else if (val >= to) {
                val = to
            }
            $inputFrom.val(prefix + prettify(val))
        });
        $inputTo.on('input', function () {
            var val = parseInt($(this).prop('value').replace(/[\$\€\£\s]+/g, ''));
            var from = parseInt($(this).closest('.range-box').find('.range-box__value-from').prop('value').replace(/[\$\€\£\s]+/g, ''));// validate
            if (val < from) {
                val = from
            } else if (val > max) {
                val = max
            }
            instance.update({to: val});// $inputTo.val( prettify( val ) );
        });
        $inputTo.on('blur', function () {
            var val = parseInt($(this).prop('value').replace(/[\$\€\£\s]+/g, ''));
            var from = parseInt($(this).closest('.range-box').find('.range-box__value-from').prop('value').replace(/[\$\€\£\s]+/g, ''));
            if (val >= max || !val) {
                val = max
            } else if (val <= from) {
                val = from
            }
            $inputTo.val(prefix + prettify(val))
        })
    });/* - - - - - - - - - - - - - -       html enable scroll       - - - - - - - - - - - - - - - */
    $(document).click(function (e) {
        if ($(e.target).closest('.size-box, .js-size-guide, .js-header-cart, .js-btn-cart, .cart-modal__inner, .header, .js-menu-toggle').length) return;
        $('html').removeClass('no-scroll');
        e.stopPropagation()
    });
    if ($('.collection-next').length) {
        var $collection = $('.collection-next');
        $collection.on('mousemove', function (e) {
            $collection.addClass('hover');
            $collection.css({
                '--mouseX': e.pageX - $collection.offset().left + 'px',
                '--mouseY': e.pageY - $collection.offset().top + 'px'
            })
        });
        $collection.on('mouseleave', function () {
            $collection.removeClass('hover')
        })
    }/* - - - - - - - - - - - - - -       collection black image animation       - - - - - - - - - - - - - - - */// function blackImage() {
// 	const $this = $( '.collection-black__inner' ),
// 		top = $( window ).scrollTop(),
// 	posTop = $this.offset().top;
// 	if ( top > posTop - $( window ).innerHeight() / 2 ) {
// 		$this.addClass( 'show' );
// 	} else {
// 		$this.removeClass( 'show' );
// 	}
// }
// if ( $('.collection-black__inner').length ) {
// 	blackImage();
// 	$( window ).on( 'scroll resize', function () {
// 		blackImage();
// 	});
// }
    /* - - - - - - - - - - - - - -       table responsive       - - - - - - - - - - - - - - - */
    $('.content-text table, .size-chart-content table, .faq-content table').each(function () {
        $(this).wrap('<div class="table-responsive" />')
    });/* - - - - - - - - - - - - - -       text nav sticky       - - - - - - - - - - - - - - - */
    if ($('nav.nav').length) {
        $('.wrapper').addClass('is-text')
    }
});/* - - - - - - -        faq info toggle       - - - - - - - - */
$(document).on('click', '.js-faq-info', function () {
    var $parent = $(this).closest('.faq-info__box');
    if (!$parent.hasClass('active')) {
        $('.faq-info__box').removeClass('active');
        $parent.addClass('active');
        $('.faq-info__box-text').slideUp(300);
        $parent.find('.faq-info__box-text').slideDown(300)
    } else {
        $parent.removeClass('active');
        $parent.find('.faq-info__box-text').slideUp(300)
    }
});
$(document).on('click', '.js-size-info', function () {
    var $parent = $(this).closest('.size-chart-guide__box');
    if (!$parent.hasClass('active')) {
        $('.size-chart-guide__box').removeClass('active');
        $parent.addClass('active');
        $parent.find('.size-chart-guide__box-content').slideDown(600);
        $('.size-chart-guide__box:not(.active) .size-chart-guide__box-content').slideUp(600);
        setTimeout(function () {
            var posTop = $('.header').innerHeight();
            $('html, body').animate({'scrollTop': $parent.offset().top - posTop}, 600)
        }, 600)
    } else {
        $parent.removeClass('active');
        $parent.find('.size-chart-guide__box-content').slideUp(600)
    }
});
//# sourceMappingURL=app.js.map

function minImagesSlider() {
    let sliderImages = document.getElementsByClassName('slider-with-mini-images')[0].getElementsByClassName('js-product-slider')[0].innerHTML;
    let sliderImageUl = document.getElementsByClassName('slider-with-mini-images')[0].getElementsByClassName('js-product-slider')[0].getElementsByTagName('ul')[0];
    let sliderMinImages = document.getElementsByClassName('slider-mini-images')[0];

    sliderMinImages.innerHTML = sliderImages;
    let minImgArr = sliderMinImages.getElementsByTagName('div');

    for (let i = 0; i < minImgArr.length; i++){
        let images = sliderMinImages.getElementsByTagName('div')[i].getElementsByTagName('a')[0].innerHTML;
        sliderMinImages.getElementsByTagName('div')[i].innerHTML = images;
        sliderMinImages.getElementsByTagName('div')[i].style.width = (100 / minImgArr.length) + "%";
        sliderMinImages.getElementsByTagName('div')[i].setAttribute('onclick', 'getFullImage("slick-slide-control0' + i +'")');
        sliderMinImages.getElementsByTagName('div')[i].setAttribute('class', 'slick-slide-control0' + i);
    }
}

minImagesSlider();



function getFullImage(id){
    document.getElementById(id).click();
    let hoverImg = document.getElementsByClassName(id)[0].getElementsByTagName('img')[0];
    let arr = document.getElementsByClassName('slider-mini-images')[0].getElementsByTagName('div');
    for(let i = 0; i < arr.length; i++){
        arr[i].getElementsByTagName('img')[0].style.border = "0px solid #000"
    }
    hoverImg.style.border = "1px solid #000"
}


function sizesChecker() {
    let sizes = document.getElementsByClassName('size-count-value-checker');
    var sizesCheckerTemp = 0;
    for (let i = 0; i < sizes.length; i++){
        if(sizes[i].value!=0){
            sizesCheckerTemp = sizesCheckerTemp + 1;
        }
    }
    let error = document.getElementsByClassName('product-buttons-errors')[0];
    if (sizesCheckerTemp != sizes.length){
        error.style.display = "block"
    } else {
        error.style.display = "none"
        let arrVariantsId = document.getElementsByClassName('size-count-value-checker');

        if(arrVariantsId.length < 2){
            Cart.addProduct(arrVariantsId[0].value, 1)
        }
        if(arrVariantsId.length == 2){
            Cart.addProduct2(arrVariantsId[0].value, 1, arrVariantsId[1].value, 1)
        }
        if(arrVariantsId.length == 3){
            Cart.addProduct3(arrVariantsId[0].value, 1, arrVariantsId[1].value, 1, arrVariantsId[2].value, 1)
        }
        if(arrVariantsId.length == 4){
            Cart.addProduct4(arrVariantsId[0].value, 1, arrVariantsId[1].value, 1, arrVariantsId[2].value, 1, arrVariantsId[3].value, 1)
        }

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
}

function reviewsTitle() {
    let reviewsSummary = document.getElementsByClassName('summary-overview')[0];
    let reviewsTitle = document.getElementsByClassName('reviews-prod-title');
    let stars = reviewsSummary.getElementsByClassName('stamped-starrating')[0].innerHTML;
    let countOfReviews = document.getElementsByClassName('stamped-summary-caption')[0].getElementsByTagName('span')[0].getAttribute("data-count");

    if (countOfReviews > 0) {
        for (let i = 0; i < reviewsTitle.length; i++) {
            reviewsTitle[i].innerHTML = stars + '<a href="#shopify-section-reviews-products">' + countOfReviews + ' Reviews</a>';
        }
    }
}

setTimeout(reviewsTitle, 3000);
