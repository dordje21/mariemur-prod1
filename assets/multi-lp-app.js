window.lazySizesConfig={loadHidden:false,hFac:0.5,expFactor:2,ricTimeout:150};new WOW({animateClass:'animated'}).init();$(document).ready(function(){function isValidEmail(email){return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)}$(document).on('blur','.subscribe [type="email"]',function(){var $this=$(this),$parent=$this.parent();email=$this.val();if(email===''){$parent.removeClass('has-error has-success')}else if(isValidEmail(email)){$parent.removeClass('has-error');// $parent.find( '.help-block' ).slideUp( 300 );
}else{$parent.addClass('has-error');// $parent.find( '.help-block' ).slideDown( 300 );
    $this.closest('form').submit(function(e){e.stopPropagation()});// setTimeout(function () {
// 	$parent.find( '.help-block' ).slideUp( 300 );
// }, 2000);
}});$(document).on('click','.subscribe-inner',function(){$('.subscribe-form').addClass('active');$('.subscribe-form input').focus()});$(document).on('click',function(e){if($(e.target).closest('.subscribe-inner').length||$('.subscribe [type="email"]').val().length>0)return;$('.subscribe-form').removeClass('active');e.stopPropagation()});/* - - - - - - - - - - - - - -       fixed header       - - - - - - - - - - - - - - - */function fixedHeader(){var top=$(window).scrollTop();var posTop=1;if(top>posTop){$('.header').addClass('fixed')}else{$('.header').removeClass('fixed')}}$(window).on('scroll',function(){fixedHeader()});fixedHeader();setTimeout(function(){$('.wrapper').addClass('stop-line')},7000);$('.wrapper').addClass('show-text');/* - - - - - - - - - - - - - -       menu toggle       - - - - - - - - - - - - - - - */$(document).on('click','.js-menu-open',function(){$('.header').addClass('menu-open');$('.header-overlay').addClass('show')});$(document).on('click','.js-menu-close',function(){$('.header').removeClass('menu-open');$('.header-overlay').removeClass('show')});$(window).on('resize',function(){if(window.matchMedia('(min-width: 768px)').matches){$('.header-overlay').removeClass('show')}else{if($('.menu-open').length){$('.header-overlay').addClass('show')}}});/* - - - - - - - - - - - - - -       header overlay toggle       - - - - - - - - - - - - - - - */$(document).on('click','.header-overlay',function(){$('.header-overlay').removeClass('show');$('.header').removeClass('menu-open')});/* - - - - - - - - - - - - - -       overlay toggle       - - - - - - - - - - - - - - - */$(document).on('click','.overlay',function(){$('.overlay').removeClass('show')});/* - - - - - - - - - - - - - -       about tabs       - - - - - - - - - - - - - - - */$(document).on('click mouseenter','.js-about-tabs li',function(){var $this=$(this);if(!$this.hasClass('active')){$('.about-tabs li').removeClass('active');$this.addClass('active');$('.about-box').removeClass('show animate');$('.about-box[data-tab="'+$this.attr('data-tab')+'"]').addClass('show');setTimeout(function(){$('.about-box[data-tab="'+$this.attr('data-tab')+'"]').addClass('animate')},100)}});function waypointsText(){var posTop=$(window).innerHeight();$('.box-translate, .about-tabs, .about-box.show, .subscribe-form').waypoint(function(direction){posTop+=$(this.element).innerHeight();if(direction==='down'){$(this.element).addClass('animate')}else{$(this.element).removeClass('animate')}},{offset:function offset(){return $(window).innerHeight()+this.element.clientHeight-60}})}waypointsText();function waypointsCatalog(){$('.catalog-box').waypoint(function(direction){if(direction==='down'){$(this.element).addClass('animate')}else{$(this.element).removeClass('animate')}},{offset:'95%'})}waypointsCatalog();function waypointsFooter(){$('.footer, .footer').waypoint(function(direction){if(direction==='down'){$(this.element).addClass('animate')}else{$(this.element).removeClass('animate')}},{offset:'95%'})}waypointsFooter()});
//# sourceMappingURL=multi-lp-app.js.map