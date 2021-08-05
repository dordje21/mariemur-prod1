class Cart {

	static async addProduct (id, quantity) {
		if (!document.querySelector('html').classList.contains('loading')) {

			document.querySelector('html').classList.add('loading')
			let formData = (document.querySelector('[name="properties[_with_discount]"]'))
				? {
					'items': [
						{
							'id': id,
							'quantity': quantity,
							'properties': {
								'_with_discount': true
							}
						}],
				} : {
					'items': [
						{
							'id': id,
							'quantity': quantity,
						}],
				}
			return fetch('/cart/add.js', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			}).then(response => {
				if (!response.ok) { throw response }
				this.updateProductCart()
				document.querySelector('html').classList.remove('loading')
				return response.json()
			}).catch((error) => {
				document.querySelector('html').classList.remove('loading')

				alert('Maximum product quantity in cart items added.')
				console.log('Error:', error)
				return false
			})
		}
	}

	static async addProductAndShowCart (id, quantity) {
		let formData = {
			'items': [
				{
					'id': id,
					'quantity': quantity,
				}],
		}
		return fetch('/cart/add.js', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		}).then(async (response) => {
			await this.updateProductCart()
			document.getElementById('cartPopup').classList.toggle('active')
			return response.json()
		}).catch((error) => {
			console.log('Error:', error)
		})
	}

	static async updateProduct (id, quantity = 0) {
		if (!document.querySelector('html').classList.contains('loading')) {

			document.querySelector('html').classList.add('loading')

			let formData = new FormData()

			formData.append(`updates[${id}]`, quantity.toString())
			return fetch('/cart/update.js', {
				method: 'POST',
				body: formData,
			}).then(async response => {
				await this.updateProductCart()
				document.querySelector('html').classList.remove('loading')

				return response.json()
			}).catch((error) => {
				console.log('Error:', error)
			})
		}

	}

	static async updateProductNote (note = '') {

		document.querySelector('html').classList.add('loading')

		let formData = new FormData()

		formData.append(`note`, note)
		return fetch('/cart/update.js', {
			method: 'POST',
			body: formData,
		}).then(response => {
			this.updateProductCart()
			document.querySelector('html').classList.remove('loading')

			return response.json()
		}).catch((error) => {
			console.log('Error:', error)
		})
	}

	static async updateProductCart () {
		return fetch('/cart').then((response) => {
			return response.text()
		}).then((html) => {
			let htmlDoc = (new DOMParser()).parseFromString(html, 'text/html')
			if (document.getElementById('cart')) {
				document.getElementById('cart').innerHTML = htmlDoc.getElementById('cart').innerHTML
			}
			document.getElementById('cartPopup').innerHTML = htmlDoc.getElementById('cartPopup').innerHTML
			document.getElementById('cartIcon').innerHTML = htmlDoc.getElementById('cartIcon').innerHTML
			var current_currency = $('.active[data-currency-code]').attr('data-currency-code')
			if (current_currency) {
				theme.ProductCurrency.setCurrency(current_currency)
			} else {
				theme.ProductCurrency.setCurrency(Currency.shopCurrency)
			}

			this.initCartEvents()

			if (window.localStorage.getItem('show-klarna')) {
				Shopify.getCart(function (data) {
					$(".klarna-set-container > klarna-placement").attr("data-purchase_amount", data.total_price);
					window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
					window.KlarnaOnsiteService.push({eventName: 'refresh-placements'});
				});
			}

			if ( $(".cart-recomendation-modal__box").find("div").length ) {
				$(".recomendation_title").css("display","block");
				$(".recomendation-modal__content").css("display","block");
			} else {
				$(".recomendation_title").css("display","none");
				$(".recomendation-modal__content").css("display","none");
			}
			function formatResult (state) {
				if (!state.id) {
					return state.text;
				}
				const val = state.element.value,
					price = state.element.getAttribute( 'data-price' );
				const $state = $(
					'<span data-val="' + val + '" data-price="' + price + '">' + state.text + '</span>'
				);
				return $state;
			}
			$( '.js-select' ).select2({
				language: 'en',
				width: '100%',
				placeholder: "Select size",
				allowClear: true,
				minimumResultsForSearch: -1,
				templateResult: formatResult
			}).on('select2:select', function (e) {
				const data = e.params.data,
					value = data.id,
					price = data.element.dataset.price,
					$hiddenField = e.target.parentElement.querySelector( '.size-count' );
				$hiddenField.value = value;
			});
		}).catch((error) => {
			console.log(error)
		})
	}

	static updateBtns (id, operation = 'remove', deleteCount = 0) {
		if ($(`[data-js-product][data-product-id="${id}"]`).length) {
			let amount = parseInt($('#shopify-section-product .product-buttons .btn-red ').attr('data-amount'))

			if (operation === 'remove') {
				amount -= deleteCount
				if (amount > 0) {
					$('#shopify-section-product .cart-info__count').html(`( ${amount} ) pieces`)
					$('#shopify-section-product .product-buttons .btn-red ').attr('data-amount', amount)
					$('#shopify-section-product .product-buttons .btn-red span').html(`Add to bag (${amount})`)
				} else {
					$('#shopify-section-product .cart-info__count').html('( 0 ) pieces')
					$('#shopify-section-product .product-buttons .btn-red ').attr('data-amount', 0)
					$('#shopify-section-product .product-buttons .btn-red span').html('Add to bag')
					$('#shopify-section-product .cart-info__button-go').css('display', 'none')
					$('#shopify-section-product .cart-info__button-add').css('display', 'flex')
				}

			} else if (operation === 'increase') {
				amount += 1
				$('#shopify-section-product .cart-info__count').html(`( ${amount} ) pieces`)
				$('#shopify-section-product .product-buttons .btn-red ').attr('data-amount', amount)
				$('#shopify-section-product .product-buttons .btn-red span').html(`Add to bag (${amount})`)
			} else {
				amount -= 1
				$('#shopify-section-product .cart-info__count').html(`( ${amount} ) pieces`)
				$('#shopify-section-product .product-buttons .btn-red ').attr('data-amount', amount)
				$('#shopify-section-product .product-buttons .btn-red span').html(`Add to bag (${amount})`)
			}

		} else if ($(`#shopify-section-product-set [data-prod-id="${id}"]`).length) {
			let mainBtn = $(`#shopify-section-product-set .js-add[data-prod-id="${id}"]`)
			let modalBtn = $(`#shopify-section-product-set .size-box__modal-button .btn-red[data-prod-id="${id}"]`)
			let amount = parseInt(mainBtn.attr('data-value'))
			if (operation === 'remove') {
				amount -= deleteCount
				mainBtn.attr('data-value', amount)
				modalBtn.attr('data-value', amount)
				if (amount > 1) {
					mainBtn.html(`<span>Add to bag (${amount - 1})</span>`)
					modalBtn.html(`<span>Add to bag (${amount - 1})</span>`)

				} else {
					mainBtn.html(`<span>Add to bag </span>`)
					modalBtn.html(`<span>Add to bag </span>`)
				}

			} else if (operation === 'increase') {
				amount += 1
				mainBtn.attr('data-value', amount)
				modalBtn.attr('data-value', amount)
				mainBtn.html(`<span>Add to bag (${amount - 1})</span>`)
				modalBtn.html(`<span>Add to bag (${amount - 1})</span>`)
			} else {
				amount -= 1
				mainBtn.attr('data-value', amount)
				modalBtn.attr('data-value', amount)
				mainBtn.html(`<span>Add to bag (${amount - 1})</span>`)
				modalBtn.html(`<span>Add to bag (${amount - 1})</span>`)
			}
			this.updateCount()
		}

	}

	static updateCount () {
		let count = 0
		$('.btn.js-add[data-value]').each(function (el) {
			count += parseInt($(this).attr('data-value')) - 1
		})
		var $btnPieces = $('.cart-info__count')
		var $btnAddToBag = $('.cart-info__button-add')
		var $btnGoToCart = $('.cart-info__button-go')
		if (count > 0) {

			$btnPieces.html(`<span data-amount="${count}">( ${count} ) pieces</span>`)
			$btnAddToBag.hide()
			$btnGoToCart.css('display', 'flex')
		} else {
			$btnPieces.html(`<span data-amount="${count}">( ${count} ) pieces</span>`)
			$btnAddToBag.css('display', 'flex')
			$btnGoToCart.hide()
		}
	}

	static async initCartEvents () {
		if (document.getElementById('shopify-section-header')) {
			document.querySelectorAll('[data-cart-product-variant-id]').forEach((el) => {
				el.productId = parseInt(el.getAttribute('data-cart-product-variant-id'))
				el.currentProductId = parseInt(el.getAttribute('data-prod-id'))
				el.quantity = parseInt(el.querySelector('[data-cart-input]').value)
				el.currentQuantity = parseInt(el.getAttribute('data-prod-quantity'))
				el.querySelector('[data-cart-remove]').addEventListener('click', async () => {
					await this.updateProduct(el.productId)
					await this.updateProductCart()
					await this.updateBtns(el.currentProductId, 'remove', el.quantity)
				})
				el.querySelector('[data-cart-increase]').addEventListener('click', () => {
					if (!document.querySelector('html').classList.contains('loading')) {
						this.addProduct(el.productId, 1).then(response => {
							console.log(response)
							if (response) {
								console.log(response)
								this.updateProductCart()
								this.updateBtns(el.currentProductId, 'increase', 0)
							} else {
								this.updateProductCart()

							}
						})
					}
				})
				el.querySelector('[data-cart-decrease]').addEventListener('click', () => {
					if (!document.querySelector('html').classList.contains('loading')) {
						if (el.quantity <= 1) {
							return false
						}
						this.updateProduct(el.productId, el.quantity - 1)
						this.updateProductCart()
						this.updateBtns(el.currentProductId, 'decrease', 0)
					}
				})

			})
		}
	}
}

class ProductCard {

	static init () {
		let _self = this
		_self._initProductForm()
	}

	static _initProductForm () {
		let _self = this

		document.querySelectorAll('[data-product-form]').forEach(form => {
			form.querySelectorAll('[data-option-radio]').forEach((radioInput) => {
				radioInput.addEventListener('click', () => {
					_self._staticChangeOption(form, radioInput)
				})
			})
			form.addEventListener('submit', function (ev) {
				ev.stopPropagation()
				ev.preventDefault()
				Cart.addProductToCart(parseInt(ev.target.querySelector('[data-option-select]').value), 1).then(() => {
					window.location.href = window.theme.isProductCartParam ? '/checkout' : '/cart'
				}).catch((error) => {
					console.log('Error:', error)
				})
			})
		})
	}

	static _staticChangeOption (form, radioInput) {
		let _self = this

		form.querySelector(`[data-option-select]`).selectedIndex = form.querySelector(`[data-option-select] [data-option-value="${radioInput.value}"]`).index
		if (document.querySelector('.orderNowContent')) {
			document.querySelector('.orderNowContent form').querySelector(`[data-option-select]`).selectedIndex = form.querySelector(
				`[data-option-select] [data-option-value="${radioInput.value}"]`).index
		}
		_self._changePriceSlideImgAndBtnStatus(form)
	}

	static _changePriceSlideImgAndBtnStatus (form) {
		const variants = form.querySelector(`[data-option-select]`).options
		const selectedVariant = variants[variants.selectedIndex]

		const currentPrice = selectedVariant.getAttribute('data-price')
		const oldPrice = selectedVariant.getAttribute('data-compare-price')
		let buyBtn = form.querySelector(`[data-option-select]`)
		let buyBtnText = form.querySelector(`[data-add-to-cart-text]`)
		let priceWrapper = form.querySelector('[data-product-price]')

		if (selectedVariant.getAttribute('data-available') === 'true') {
			priceWrapper.innerHTML = oldPrice
				? `<div class="current">${currentPrice}</div><div class="old">${oldPrice}</div>`
				:
				`<div class="current">${currentPrice}</div>`
			buyBtnText.innerText = 'Add to cart'
			buyBtn.disabled = false
		} else {
			priceWrapper.innerHTML = ``
			buyBtnText.innerText = 'Sold out'
			buyBtn.disabled = true
		}
		if (selectedVariant.getAttribute('data-image-id')) {
			let variant_image_id = selectedVariant.getAttribute('data-image-id')
			if (variant_image_id) {
				const sliderItem = $(`.productSliderMain .sliderItem[data-img-id="${variant_image_id}"]`)

				sliderItem ? $('[product-slider-main]').slick('slickGoTo', sliderItem.attr('data-slick-index')) : false

			}
		}
		if (document.querySelector('.orderNowContent')) {
			if (selectedVariant.getAttribute('data-available') === 'true') {
				document.querySelector('.orderNowContent__title').textContent = `All this for only ${currentPrice}`
			} else {
				document.querySelector('.orderNowContent__title').textContent = `Sold out`
			}
		}
	}

}

function isValidEmail (email) {
	return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)
}

function updateCount () {
	let count = 0
	$('.btn.js-add[data-value]').each(function (el) {
		count += parseInt($(this).attr('data-value')) - 1
	})
	if (count > 0) {
		var $btnPieces = $('.cart-info__count')
		var $btnAddToBag = $('.cart-info__button-add')
		var $btnGoToCart = $('.cart-info__button-go')
		$btnPieces.html(`<span data-amount="${count}">( ${count} ) pieces</span>`)
		$btnAddToBag.hide()
		$btnGoToCart.css('display', 'flex')
	}
}

$(document).ready(function () {
	ProductCard.init()
	Cart.initCartEvents()
	$(document).on('click', '.js-add', function (e) {
		var $parent = $(this).closest('.product-list__box')
		var $sizeCount = $parent.find('.size-count')
		var $optionListActive = $parent.find('.size-box__modal-list li.active')
		var $amount = parseInt($(this).attr('data-value'))
		var $btn = $(this)
		var $modalBtn = $parent.find('.size-box__modal-button .btn')

		var $btnAddToBag = $('.cart-info__button-add')
		var $btnGoToCart = $('.cart-info__button-go')
		if ($sizeCount.val() === '' || parseInt($sizeCount.val()) === 0) {
			e.preventDefault()
			$parent.find('.size-box').addClass('has-error')
		} else {
			e.preventDefault()
			try {
				Cart.addProduct($sizeCount.val(), 1).then(response => {
					if (response) {
						$btn.html(`<span>Add to bag  (${$amount})</span>`)
						$modalBtn.html(`<span>Add to bag  (${$amount})</span>`)
						$btn.attr(`data-value`, $amount + 1)
						$modalBtn.attr(`data-value`, $amount + 1)
						$btnAddToBag.hide()
						$btnGoToCart.css('display', 'flex')
						updateCount()
					}
				}).catch(error => {
				})
			} catch (e) {

			}

		}
	})

	$(document).on('click', '.js-cart-note-save', function (e) {
		var text = $('textarea[name="mess"]').val()
		Cart.updateProductNote(text)
	})
	$(document).on('click', '.js-cart-delete-note', function (e) {
		var text = ''
		Cart.updateProductNote(text)
		e.preventDefault()
		e.stopPropagation()
	})
	$(document).on('click', '.size-box__modal-button .btn-red', function (e) {
		var $parent = $(this).closest('.product-list__box')
		var $sizeCount = $parent.find('.js-size-list .active')
		var $amount = parseInt($(this).attr('data-value'))
		var $btn = $(this)
		var $btnPieces = $('.cart-info__count')
		var $btnPiecesAmount = parseInt($('.cart-info__count').attr('data-amount'))
		var $btnAddToBag = $('.cart-info__button-add')
		var $btnGoToCart = $('.cart-info__button-go')
		if (!$sizeCount) {
			e.preventDefault()
		} else {
			e.preventDefault()
			try {
				Cart.addProduct($sizeCount.attr('data-val'), 1).then(response => {
					console.log(response)

					if (response) {
						$btn.html(`<span>Add to bag  (${$amount})</span>`)
						$btn.attr(`data-value`, $amount + 1)
						$parent.find('.btn-red').attr(`data-value`, $amount + 1)
						$parent.find('.btn-red').html(`<span>Add to bag  (${$amount})</span>`)

						$btnPieces.html(`<span data-amount="${$btnPiecesAmount + 1}">( ${$btnPiecesAmount + 1} ) pieces</span>`)
						$btnAddToBag.hide()
						$btnGoToCart.css('display', 'flex')
						$('.js-size-close').trigger('click')
						updateCount()
					}

				})

			} catch {

			}

		}
	})
	$(document).on('click', '.single-product .btn-red', function (e) {
		var $parent = $(this).closest('.product-content')
		var $sizeCount = $parent.find('.count-field input')
		var $amount = parseInt($sizeCount.val())
		var $newAmount = parseInt($parent.find('.btn-red').attr('data-amount')) + $amount
		e.preventDefault()
		Cart.addProduct($parent.attr('data-product-variant-id'), $amount).then(response => {
			console.log(response)

			if (response) {
				var $btnAddToBag = $('.cart-info__button-add')
				var $btnGoToCart = $('.cart-info__button-go')
				$parent.find('.btn-red').attr('data-amount', $newAmount)
				$parent.find('.btn-red').html(`<span >Add to bag  (${$newAmount})</span>`)
				$('.cart-info__count').html(`( ${$newAmount} ) pieces`)
				$btnAddToBag.hide()
				$btnGoToCart.css('display', 'flex')
			}
		})
	})
	$(document).on('click', '#shopify-section-product .cart-info__button-add', function (e) {
		var $parent = $('#shopify-section-product')
		var $sizeCount = $parent.find('.count-field input')
		var $amount = parseInt($sizeCount.val())
		e.preventDefault()
		Cart.addProduct($parent.find('.single-product').attr('data-product-variant-id'), $amount).then(response => {
			if (response) {
				var $btnAddToBag = $('.cart-info__button-add')
				var $btnGoToCart = $('.cart-info__button-go')
				$parent.find('.btn-red').html(`<span>Add to bag  (${response.items[0].quantity})</span>`)
				$('.cart-info__count').html(`( ${response.items[0].quantity} ) pieces`)
				$btnAddToBag.hide()
				$btnGoToCart.css('display', 'flex')
				$('.js-size-close').trigger('click')
			}

		})
	})
	$(document).on('blur', '[type="password"]', function () {
		$(this).parent().find('.help-block').slideUp(300, () => {
			$(this).parent().removeClass('has-error')
		})
	})
	$('#create_customer').submit(function (ev) {
		if ($('#regPass').val() !== $('#confRegPass').val()) {
			ev.preventDefault()
			$('#confRegPass').parent().addClass('has-error')
		}
	})
	$('#ContactForm').submit(function (ev) {
		let $form = $('#ContactForm')
		let $emailInput = $form.find('input[type="email"]')
		if (!isValidEmail($emailInput.val())) {
			ev.preventDefault()
			$emailInput.parent().addClass('has-error')
		}
		if (!$('#acceptterms').prop('checked')) {
			ev.preventDefault()
			$('#acceptterms').parent().addClass('has-error')
		}
	})
	$('#contact_form').submit(function (ev) {
		let $form = $('#contact_form')
		let $emailInput = $form.find('input[type="email"]')
		if (!isValidEmail($emailInput.val())) {
			document.getElementById('errorBlock').innerText = 'Please enter your email in correct format: Example@mail.com'

			ev.preventDefault()
			$emailInput.parent().addClass('has-error')
		}
	})
	$('#waitlistForm').submit(function (ev) {
		ev.preventDefault()
		console.log(ev)

		let $form = $(this)
		let $emailInput = $form.find('input[type="email"]')
		console.log($emailInput)
		let $btn = $form.find('button[type="submit"]')
		let $success = $form.find('.waitlist-modal__success')
		$('.has-error').removeClass('has-error')
		if (!isValidEmail($emailInput.val())) {
			$emailInput.parent().addClass('has-error')
			return false
		}
		console.log($form.find('[name="addEmail"]'))

		if (!$form.find('[name="addEmail"]').prop('checked')) {
			$form.find('[name="addEmail"]').parent().addClass('has-error')
			return false
		}
		$btn.addClass('d-none')
		$success.removeClass('d-none')
		setTimeout(function () {
			$('html').removeClass('wait-no-scroll')
			$('.waitlist-modal').removeClass('show')
		}, 5000)
	})
	$('[data-id="waitlistForm"]').submit(function (ev) {
		ev.preventDefault()
		console.log(ev)

		let $form = $(this)
		let $emailInput = $form.find('input[type="email"]')
		console.log($emailInput)
		let $btn = $form.find('button[type="submit"]')
		let $success = $form.find('.waitlist-modal__success')
		$('.has-error').removeClass('has-error')
		if (!isValidEmail($emailInput.val())) {
			$emailInput.parent().addClass('has-error')
			return false
		}
		console.log($form.find('.js-size-list .active'))
		if (!$form.find('.js-size-list .active').length) {
			$form.find('.size-box').addClass('has-error')
			return false
		}

		if (!$form.find('[name="addEmail"]').prop('checked')) {
			$form.find('[name="addEmail"]').parent().addClass('has-error')
			return false
		}
		$btn.addClass('d-none')
		$success.removeClass('d-none')
		setTimeout(function () {
			$('html').removeClass('wait-no-scroll')
			$('.waitlist-modal').removeClass('show')
		}, 5000)
	})
	$('#waitlistForm-main').submit(function (ev) {
		let $form = $(this)
		let $emailInput = $form.find('input[type="email"]')
		let $btn = $form.find('button[type="submit"]')
		let $success = $form.find('.waitlist-modal__success')
		$('.has-error').removeClass('has-error')
		ev.preventDefault()
		if (!isValidEmail($emailInput.val())) {
			$emailInput.parent().addClass('has-error')
			return false
		}
		$form.find('.js-size-list').each(function () {
			console.log($(this))
			console.log($(this).closest('.size-box'))
			if (!$(this).find('.active').length) {
				$(this).closest('.size-box').addClass('has-error')
			}
		})
		if ($form.find('.size-box.has-error').length) {
			return false
		}
		if (!$('#addEmail-item').prop('checked')) {
			$('#addEmail-item').parent().addClass('has-error')
			return false
		}
		$btn.addClass('d-none')
		$success.removeClass('d-none')
		setTimeout(function () {
			$('html').removeClass('wait-no-scroll')
			$('.waitlist-modal').removeClass('show')
		}, 5000)
	})
	$('#contact_form').click(function (ev) {
		$('.has-error').removeClass('has-error')
	})
	$('.js-filter-close').click(function () {
		var $catalog = $('.catalog-filter'), $toggleFilter = $(this),
			$toggleFilterTitle = $('.catalog-toggle__title'),
			textShow = $('.js-catalog-filter-toggle').attr('data-show-text'),
			textHide = $('.js-catalog-filter-toggle').attr('data-hide-text')
		if (!$catalog.hasClass('show')) {
			$('body').addClass('show-filter')
			$toggleFilterTitle.text(textHide)
			$catalog.addClass('show')
			$('.overlay').addClass('show')
		} else {
			$('body').removeClass('show-filter')
			$toggleFilterTitle.text(textShow)
			$catalog.removeClass('show')
			$('.overlay').removeClass('show')

		}

	})
	$('[data-js-tabs-btn]').click(function () {
		$('[data-js-tabs-btn]').removeClass('active')
		$(this).addClass('active')
		$('[data-js-tabs-content]').css('display', 'none')
		$(`[data-tab-content-id="${$(this).attr('data-tab-id')}"]`).css('display', 'block')

	})
	$('[data-js-accordion-button]').click(function () {
		$(this).closest('[data-js-accordion]').find('[data-js-accordion-content]').toggleClass('d-none')
	})
	$(document).on('click', '.js-load-more-coll', function () {
		var $this = $(this)
		var $collections = $('.collection-list__box-js')
		$this.addClass('loading')
		setTimeout(function () {
			$this.removeClass('loading').addClass('loaded')
			$collections.removeClass('d-none')
		}, 1000)
		setTimeout(function () {
			$this.removeClass('loaded')
			$this.addClass('disable')
		}, 2000)
	})
	$('#customer_login').submit(function (event) {
		if ($('.login .has-error').length != 0) {
			event.preventDefault()
			event.stopPropagation()
		}
	})
	$('.js-currencies-list').click(function () {
		$('.js-currencies-list').removeClass('show')
	})
	$(document).on('click', '.js-scroll-to-info', function (e) {
		e.preventDefault()
		var link = $(this).attr('href')
		if (link !== '') {
			$('html, body').animate({ 'scrollTop': $(link).offset().top - $('.header').innerHeight() }, 600)
		}
		$('.cart-info').addClass('has-error')
		$('.size-box').addClass('has-error')
		setTimeout(function () {
			$('.cart-info').removeClass('has-error')
		}, 2000)
	})
})
