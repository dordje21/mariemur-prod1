theme.ButtonsBlocksVisibility = function() {

    function ButtonsBlocksVisibility() {
        this.selectors = {
            buttons: '.js-button-block-visibility'
        };

        this.load();
    };

    ButtonsBlocksVisibility.prototype = $.extend({}, ButtonsBlocksVisibility.prototype, {
        load: function() {
            $('[data-block-visibility]').each(function () {
                var $this = $(this),
                    name = $this.attr('data-block-visibility');

                if(window.location.href.indexOf(name) != -1) {
                    $this.removeClass('d-none-important');

                    $this.find('[data-block-visibility-focus]').focus();
                }
            });

            $body.on('click', this.selectors.buttons, function (e) {
                var $this = $(this),
                    name = $this.attr('data-block-link'),
                    $block = $('[data-block-visibility="' + name + '"]');

                if($block.length) {
                    var close_popup = $this.attr('data-action-close-popup');

                    $block[$this.attr('data-action') === 'close' ? 'addClass' : $this.attr('data-action') === 'open' ? 'removeClass' : 'toggleClass']('d-none-important');

                    if(close_popup) theme.Popups.closeByName(close_popup);

                    if(!$block.hasClass('d-none-important')) $block.find('[data-block-visibility-focus]').focus();

                    e.preventDefault();
                    return false;
                }
            });
        }
    });

    theme.ButtonsBlocksVisibility = new ButtonsBlocksVisibility;
};

$(function() {
    theme.ButtonsBlocksVisibility();
});

theme.Collections = function() {

    function Collections() {
        this.dom = {
            $collections: $('.js-collections')
        };

        if(this.dom.$collections.length) {
            this.load();
        }
    };

    Collections.prototype = $.extend({}, Collections.prototype, {
        current: {
            url: null,
            ajax: null
        },
        url: {
            collection: null,
            params: null
        },
        controls: {
            collection: null,
            params: null
        },
        content: {
            collection: null
        },
        _parseUrl: function() {
            var _ = this;

            this.current.url = decodeURIComponent(window.location.href);
            this.current.ajax = this.current.url;

            if(this.current.ajax.indexOf('view=') != -1) {
                $.each([6, 12, 18, 24], function() {
                    _.current.ajax.replace('view=' + this, 'view=' + this + '-ajax');
                });
            } else {
                this.current.ajax += this.current.ajax.indexOf('?') != -1 ? '&' : '?';
                this.current.ajax += 'view=ajax';
            }

            var search = this.current.url.split('collections/')[1].split('/');

            this.url.collection = search[0].split('?')[0];
            this.url.params = null;

            var is_custom_filter = this.current.url.indexOf('custom-filter') != -1 ? true : false;

            function parseParams(values) {
                $.each(values, function() {
                    if(this === 'custom-filter') {
                        return;
                    }

                    if(!_.url.params) {
                        _.url.params = {};
                    }

                    var param = this.split('='),
                        prop = param[0],
                        val = param[1];

                    if(prop === 'tag') {
                        prop = 'constraint';
                    }

                    if(!_.url.params[prop]) {
                        _.url.params[prop] = [];
                    }

                    _.url.params[prop].push(val);
                });
            };

            this.current.url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, k, v) {
                var values = v.split('+');

                if(is_custom_filter && k === 'constraint') {
                    parseParams(values);
                } else {
                    if(!_.url.params) {
                        _.url.params = {};
                    }

                    _.url.params[k] = values;
                }
            });

            if(search[1] && search[1].split('?')[0].length) {
                var values = search[1].split('?')[0].split('+');

                if(!_.url.params) {
                    _.url.params = {};
                }

                if(!_.url.params.constraint) {
                    _.url.params.constraint = [];
                }

                $.each(values, function () {
                    _.url.params.constraint.push(this);
                });
            }
        },
        _buildUrl: function(unset_url_params) {
            var _ = this,
                params = {},
                params_ajax = {},
                collection = this.controls.collection ? this.controls.collection : this.url.collection;

            this.current.url = '/collections/' + collection;

            if(this.controls.params) {
                if(this.controls.params.vendor || this.controls.params.type || this.controls.params.title || this.controls.params.price || this.controls.params.only_available || window.page.default.only_available) {
                    params.constraint = 'custom-filter';
                    params_ajax.constraint = 'custom-filter';

                    $.each(['constraint', 'vendor', 'type', 'title', 'price', 'page', 'only_available'], function (i, v) {

                        if(_.controls.params[this]) {
                            var name = v === 'constraint' ? 'tag' : v,
                                is_unset = false;

                            $.each(unset_url_params, function (j, val) {
                                if(name === val) {
                                    is_unset = val;
                                }
                            });

                            name = '+' + name + '=';

                            var value = name + _.controls.params[v].join(v === 'price' ? '-' : name);

                            if(!is_unset) params.constraint += value.replace(/ /gi, '-');
                            params_ajax.constraint += value.replace(/ /gi, '-');
                        }
                    });

                    if(!this.controls.params.only_available && window.page.default.only_available) {
                        params_ajax.constraint += '+only_available=true';
                    }

                    $.each(['sort_by', 'view'], function () {
                        if(_.controls.params[this]) {
                            var value =  _.controls.params[this][0];

                            params[this] = value;
                            params_ajax[this] = value;
                        }
                    });
                } else {
                    $.each(this.controls.params, function(k, v) {
                        var value = v.join('+');

                        params[k] = value;
                        params_ajax[k] = value;
                    });

                    $.each(unset_url_params, function () {
                        delete params[this];
                    });
                }
            }

            params_ajax.view = params_ajax.view ? params_ajax.view + '-ajax' : 'ajax';

            params = $.param(params);
            params_ajax = $.param(params_ajax);

            this.current.ajax = this.current.url;

            if(params) this.current.url += '?' + decodeURIComponent(params);
            if(params_ajax) this.current.ajax += '?' + decodeURIComponent(params_ajax);
        },
        _setUrl: function() {
            history.pushState({foo: 'filters'}, this.current.url, this.current.url);
        },
        _parseControls: function() {
            var _ = this,
                params = {};

            this.controls.collection = null;
            this.controls.params = null;

            $.each(['collection'], function() {
                var value = $('[name="' + this + '"]:checked').val();

                if(value) _.controls[this] = value;
            });

            if(!this.controls.collection) this.controls.collection = this.url.collection;

            $.each({
                'sort_by': 'sort_by',
                'view': 'view_length',
                'only_available': 'only_available'
            }, function(k, v) {
                var value = $('[name="' + v + '"]').val(),
                    default_value = window.page.default[v] + '';

                if(value && value !== default_value) params[k] = [value];
            });

            $.each({
                'constraint': [ 'collection_with_tag', 'filter_by_tag', 'filter_by_color' ],
                'vendor': 'filter_by_vendor',
                'type': 'filter_by_type'
            }, function(k, v) {
                var arr = [];

                $.each($.isArray(v) ? v : [ v ], function() {
                    $('[name="' + this + '"]:checked').each(function() {
                        var value = $(this).val();

                        for(var i = 0; i < arr.length; i++) {
                            if(arr[i] === value) return;
                        }

                        arr.push(value);
                    });
                });

                if(arr.length) {
                    params[k] = arr;
                }
            });

            $(['filter_by_title']).each(function() {
                var value = $('[name="' + this + '"]').val();

                if(value) params.title = [value];
            });

            $(['filter_by_price']).each(function() {
                var $this = $('[name="' + this + '"]'),
                    value = $this.val();

                if(value) {
                    var values = value ? value.split(';') : null,
                        from = values ? +values[0] : +$this.attr('data-from'),
                        to = values ? +values[1] : +$this.attr('data-to');

                    if(from !== +$this.attr('data-min') || to !== +$this.attr('data-max')) {
                        params['price'] = [from * 100, to * 100];
                    }
                }
            });

            $(['filter_by_title']).each(function() {
                var value = $('[name="' + this + '"]').val();

                if(value) params.title = [value];
            });

            $(['page']).each(function () {
                var value = $('[name="' + this + '"]').val();

                if(value && +value !== 1) params[this] = [value];
            });

            if(Object.keys(params).length) {
                this.controls.params = params;
            }
        },
        _setControls: function() {
            var _ = this;

            $.each({
                'sort_by': 'sort_by',
                'view': 'view_length'
            }, function(k, v) {
                var value = _.url.params && _.url.params[k] ? _.url.params[k] : window.page.default[v];

                $('[name="' + v + '"]').val(value).trigger('update');
            });

            $('[name="collection"]').removeAttr('checked');
            $('[name="collection"][value="' + this.url.collection + '"]').prop('checked', 'checked');

            $('[name="collection_with_tag"], [name="filter_by_tag"], [name="filter_by_color"], [name="filter_by_vendor"], [name="filter_by_type"], [name="only_available"]').removeAttr('checked');
            $.each({
                'constraint': [ 'collection_with_tag', 'filter_by_tag', 'filter_by_color' ],
                'vendor': 'filter_by_vendor',
                'type': 'filter_by_type',
                'only_available': 'only_available'
            }, function(k, v) {
                if(_.url.params && _.url.params[k]) {
                    $.each(_.url.params[k], function() {
                        var value = this;

                        $.each($.isArray(v) ? v : [ v ], function() {
                            var for_collection = this === 'collection_with_tag' ? '[data-section-for-collection="' + _.url.collection + '"] ' : '';

                            $(for_collection + '[name="' + this + '"][value="' + value + '"]').prop('checked', 'checked');
                        });
                    });
                }
            });

            $('[name="filter_by_title"]').val(this.url.params && this.url.params['title'] ? this.url.params['title'] : '');

            if(this.url.params && this.url.params['price']) {
                var price = this.url.params['price'][0].split('-');

                if(theme.RangeOfPrice) {
                    theme.RangeOfPrice.update(price[0] / 100, price[1] / 100);
                }
            } else {
                if(theme.RangeOfPrice) {
                    theme.RangeOfPrice.reset();
                }
            }
        },
        _checkCurrentFilters: function (params) {
            if(params) {
                delete params.page;
                delete params.sort_by;
                delete params.view;
            }

            this.$current_filter[params && Object.keys(params).length ? 'removeClass' : 'addClass']('d-none');
        },
        loadContent: function(current_obj, event_type, callback) {
            var _ = this;

            if(this.xhr) this.xhr.abort();

            theme.Loader.set($('[data-js-collection-replace="products"]'), {
                fixed: true,
                spinner: theme.current.is_mobile ? false : null
            });

            this.xhr = $.ajax({
                type: 'GET',
                url: this.current.ajax,
                cache: false,
                dataType: 'html',
                success: function (data) {
                    var $page = $(data);

                    if(theme.ProductsView) {
                        theme.ProductsView.update($page.find('[data-js-products]'));
                    }

                    $('[data-js-collection-replace]').each(function () {
                        var $this = $(this),
                            full_replace = $this[0].hasAttribute('data-js-collection-replace-only-full');

                        if(_.content.collection === current_obj.collection && full_replace) return;

                        var name = $this.attr('data-js-collection-replace'),
                            $element = $('[data-js-collection-replace="' + name + '"]'),
                            $page_element = $page.find('[data-js-collection-replace="' + name + '"]'),
                            $section;

                        if(event_type === 'page' && $element.attr('data-js-collection-replace-method') === 'add') {
                            $element.append($page_element.children());

                            if(name === 'products') {
                                theme.Loader.unset($element);
                            }
                        } else {
                            $element.replaceWith($page_element);

                            if($page_element[0].hasAttribute('data-js-collection-replace-hide-empty')) {
                                $section = $page_element.parents('[data-js-collection-nav-section]');

                                $section[$page_element.find('input').length ? 'removeClass' : 'addClass']('d-none');
                            }

                            if(name === 'products') {
                                theme.Loader.unset($page_element);
                            }

                            $element.remove();
                        }

                        _.$pagination = _.dom.$collections.find('[data-js-collection-pagination]');

                        if(theme.current.is_mobile) {
                            theme.Loader.unset(_.$sidebar);
                        }
                    });

                    theme.ImagesLazyLoad.update();

                    if(_.content.collection !== current_obj.collection) {
                        $.each({
                            'sort_by': 'sort_by',
                            'view': 'view_length'
                        }, function(k, v) {
                            var value = current_obj.params && current_obj.params[k] ? current_obj.params[k] : window.page.default[v];

                            $('[name="' + v + '"]').val(value).trigger('update');
                        });
                    }

                    theme.ProductCurrency.update();
                    theme.StoreLists.checkProductStatus();
                    theme.ProductReview.update();
                    if(theme.Tooltip) {
                        theme.Tooltip.init();
                    }

                    $page.remove();

                    _.xhr = null;

                    _.content.collection = current_obj.collection;

                    if(callback) {
                        callback();
                    }
                }
            });
        },
        removeFilter: function(type, value) {
            switch(type) {
                case 'tag': {
                    $('[name="collection_with_tag"], [name="filter_by_tag"], [name="filter_by_color"]').filter('[value="' + value + '"]').removeAttr('checked');
                    break;
                }
                case 'title': {
                    $('[name="filter_by_title"]').val('');
                    break;
                }
                case 'price': {
                    if(theme.RangeOfPrice) {
                        theme.RangeOfPrice.reset();
                    }
                    break;
                }
                case 'vendor': {
                    $('[name="filter_by_vendor"]').filter('[value="' + value + '"]').removeAttr('checked');
                    break;
                }
                case 'type': {
                    $('[name="filter_by_type"]').filter('[value="' + value + '"]').removeAttr('checked');
                    break;
                }
            }
        },
        onChangeControls: function(event_type, unset_url_params) {
            var _ = this;

            if(theme.current.is_mobile) {
                theme.Loader.set(this.$sidebar, {
                    fixed: true
                });
            }

            if(event_type !== 'page') {
                $('[name="page"]').val(1);
            }

            this._parseControls();
            this._buildUrl(unset_url_params);
            this._setUrl();
            this.loadContent(this.controls, event_type, function () {
                _._checkCurrentFilters(_.controls.params);
            });
        },
        onChangeHistory: function() {
            var _ = this;

            if(theme.current.is_mobile) {
                theme.Loader.set(this.$sidebar, {
                    fixed: true
                });
            }

            this._parseUrl();
            this._setControls();
            this.loadContent(this.url, null, function () {
                _._checkCurrentFilters(_.url.params);
            });
        },
        load: function() {
            var _ = this,
                $sidebar = $('[data-js-collection-sidebar]');

            this.$collections_body = $('[data-js-collections-body]');
            this.$sidebar = $sidebar;
            this.$current_filter = $sidebar.find('[data-js-collection-nav-section="current_filters"]');
            this.$pagination = this.dom.$collections.find('[data-js-collection-pagination]');

            this._parseUrl();
            this.content.collection = _.url.collection;

            $sidebar.on('change', '[data-js-collections-menu] input', function () {
                var $this = $(this),
                    name = $this.attr('name');

                if(name === 'collection') {
                    $('[data-js-collections-menu] [name="collection_with_tag"]:checked').removeAttr('checked');
                    $('[name="filter_by_tag"], [name="filter_by_color"], [name="filter_by_vendor"], [name="filter_by_type"]').removeAttr('checked');
                    $('[name="filter_by_title"]').val('');
                    $('[name="sort_by"]').val(page.default.sort_by);
                    $('[name="view"]').val(page.default.view_length);

                    $.each({
                        'sort_by': 'sort_by',
                        'view': 'view_length'
                    }, function(k, v) {
                        $('[name="' + v + '"]').val(window.page.default[v]).trigger('update');
                    });

                    if(theme.RangeOfPrice) {
                        theme.RangeOfPrice.reset();
                    }
                } else if(name === 'collection_with_tag') {
                    var $current_collection = $this.parents('.collections-menu__item').find('[name="collection"]'),
                        $remove_collections = $('[data-js-collections-menu] [name="collection"]:checked').not($current_collection);

                    $remove_collections.add($remove_collections.parents('.collections-menu__item').find('[name="collection_with_tag"]:checked')).removeAttr('checked');

                    if(!$current_collection.is(':checked')) {
                        if(theme.RangeOfPrice) {
                            theme.RangeOfPrice.reset();
                        }
                    }

                    $current_collection.prop('checked', 'checked');
                }

                _.onChangeControls();
            });

            $sidebar.on('click', '[data-js-collections-menu] [name="collection"]:checked',function() {
                var $this = $(this),
                    $collection_with_tag = $this.parents('.collections-menu__item').find('[name="collection_with_tag"]:checked');

                if($collection_with_tag.length) {
                    $collection_with_tag.removeAttr('checked');

                    $this.change();
                }
            });

            $sidebar.on('change', '[data-js-collection-filters] input', function () {
                _.onChangeControls();
            });

            $sidebar.on('change', '[name="only_available"]', function () {
                var $this = $(this),
                    value = $this.is(':checked') ? true : false;

                $this.attr('value', value);

                _.onChangeControls();
            });

            $sidebar.on('click', '[data-js-collection-filter-by-title] button', function () {
                _.onChangeControls();
            });

            $sidebar.on('keyup', '[data-js-collection-filter-by-title] input', $.debounce(500, function () {
                _.onChangeControls();
            }));

            this.dom.$collections.on('change', '[data-js-collection-sort-by] select, [data-js-collection-view-length] select', function () {
                _.onChangeControls();
            });

            this.dom.$collections.on('click', '[data-js-collection-pagination] a', function (e) {
                var $this = $(this),
                    $pagination = $this.parents('[data-js-collection-pagination]'),
                    value = $this.attr('data-value') || $this.attr('href').split('page=')[1].split('&')[0],
                    type = $pagination.attr('data-pagination-type'),
                    event_type = 'page',
                    unset_url_params,
                    header_h;

                $('[name="page"]').val(value);

                if(type === 'button_load_more' || type === 'infinite_scroll') {
                    unset_url_params = ['page'];
                }

                _.onChangeControls(event_type, unset_url_params);

                if(type !== 'button_load_more' && type !== 'infinite_scroll') {
                    header_h = theme.StickyHeader && theme.StickyHeader.$sticky ? theme.StickyHeader.$sticky.stickyHeader('getStickyHeight') : 0;

                    $('html, body').velocity('stop').velocity('scroll', {
                        offset: _.$collections_body.offset().top - header_h,
                        duration: theme.animations.pagination.scroll_duration * 1000
                    });
                }

                e.preventDefault();
                return false;
            });

            if(this.$pagination.attr('data-pagination-type') === 'infinite_scroll') {
                $window.on('load', function () {
                    $window.on('scroll', function () {
                        var pag_pos = _.$pagination[0].getBoundingClientRect();

                        if(pag_pos.top < theme.current.height && !_.$pagination[0].hasAttribute('data-js-loading')) {
                            _.$pagination.attr('data-js-loading', true);

                            _.$pagination.find('a').trigger('click');
                        }
                    });
                });
            }

            $sidebar.on('click', '[data-js-collection-current-tags] [data-value]', function () {
                var $this = $(this),
                    value = $this.attr('data-value'),
                    type = $this.attr('data-filter-type');

                _.removeFilter(type, value);

                _.onChangeControls();
            });

            $sidebar.on('click', '[data-js-collection-current-tags-clear]', function () {
                $('[data-js-collection-current-tags] [data-value]').each(function() {
                    var $this = $(this),
                        value = $this.attr('data-value'),
                        type = $this.attr('data-filter-type');

                    _.removeFilter(type, value);
                });

                _.onChangeControls();
            });

            $(window).on('popstate', function() {
                _.onChangeHistory();
            });
        },
        logs: function() {
            console.log('current', this.current);
            console.log('url', this.url);
            console.log('controls', this.controls);
            console.log('content', this.content);
            console.log(this.logId ? ++this.logId : this.logId = 1);
        }
    });

    theme.Collections = new Collections;
};

$(function() {
    theme.Collections();
});

theme.ContentBuilder = function() {

    function ContentBuilder() {
        this.selectors = {
            elem: '.js-content-builder',
            button: '[data-js-content-builder-copy]',
            textarea: '[data-js-content-builder-textarea]'
        };

        this.attrs = {
            textarea_name: 'data-textarea-name'
        };

        this.load();
    };

    ContentBuilder.prototype = $.extend({}, ContentBuilder.prototype, {
        load: function() {
            var _ = this;

            $body.on('click', this.selectors.button, function () {
                var $this = $(this),
                    name = $this.attr(_.attrs.textarea_name),
                    $textarea = $this.parents(_.selectors.elem).find(_.selectors.textarea + '[name="' + name + '"]');

                _.copyContent($textarea);
            });
        },
        copyContent: function ($textarea, callback) {
            if (!navigator.clipboard) {
                $textarea.focus();
                $textarea.select();

                try {
                    console.log('Fallback: Copying text command was ' + document.execCommand('copy') ? 'successful' : 'unsuccessful');
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err);
                }

                $textarea.blur();

                if(callback) {
                    callback();
                }
            } else {
                navigator.clipboard.writeText($textarea.text()).then(function() {
                    console.log('Async: Copying to clipboard was successful!');
                }, function(err) {
                    console.error('Async: Could not copy text: ', err);
                });
            }
        }
    });

    theme.ContentBuilder = new ContentBuilder;
};

$(function() {
    theme.ContentBuilder();
});

theme.DynamicCheckout = function() {

    function DynamicCheckout() {
        this.load();
    };

    DynamicCheckout.prototype = $.extend({}, DynamicCheckout.prototype, {
        load: function() {
            function update() {
                var $this = $(this),
                    $dynamic_checkout = $this.parents('.js-dynamic-checkout'),
                    $button_wrapper = $dynamic_checkout.find('[data-js-dynamic-checkout-button-wrapper]');

                $button_wrapper[$this.is(':checked') ? 'removeClass' : 'addClass']('disabled');
            };

            $body.on('change', '.js-dynamic-checkout [data-js-dynamic-checkout-confirmation]', update);

            $('.js-dynamic-checkout [data-js-dynamic-checkout-confirmation]').each(update);
        }
    });

    theme.DynamicCheckout = new DynamicCheckout;
};

$(function() {
    theme.DynamicCheckout();
});

theme.Masonry = function() {

    function Masonry() {
        jQueryBridget('masonry', window.Masonry, $);

        this.load();
    };

    Masonry.prototype = $.extend({}, Masonry.prototype, {
        load: function() {
            this.init();
        },
        init: function (is_first) {
            var _ = this,
                $masonry = $('.masonry'),
                params = {
                    itemSelector: '[class*="col-"]'
                },
                timeout;

            this.$masonry = $masonry;

            function load() {
                $masonry.masonry(params).removeClass('invisible');

                setTimeout(function () {
                    _.update();
                }, 100);
            };

            if(is_first) {
                load();
            } else {
                $(window).on('load', function () {
                    load();
                });
            }
        },
        update: function () {
            this.$masonry.masonry('layout');
        },
        destroy: function () {
            this.$masonry.masonry('destroy');
        }
    });

    theme.Masonry = new Masonry;
};

$(function() {
    theme.Masonry();
});

theme.Notifications = function() {

    function Notifications() {
        this.selectors = {
            elems: '.js-notification'
        };

        this.settings = {
            close_limit: 40,
            translate_limit: 50,
            opacity_limit: 0.4
        };

        this.load();
    };

    Notifications.prototype = $.extend({}, Notifications.prototype, {
        load: function() {
            var _ = this,
                dif;

            $body.on('mousedown', this.selectors.elems, function(e) {
                if(e.target.tagName === 'A' || $(e.target).parents('[data-js-action]').length) {
                    return;
                }

                _.is_holded = true;

                var $this = $(this),
                    start_posX = e.screenX;

                dif = 0;

                $this.addClass('animate');
                setTimeout(function () {
                    $this.addClass('pressed');
                }, 0);

                $body.on('mousemove.notification', function(e) {
                    var posX = e.screenX,
                        set_posX = Math.min(start_posX + _.settings.translate_limit, Math.max(start_posX - _.settings.translate_limit, posX));

                    dif = set_posX - start_posX;

                    $this.removeClass('animate');

                    setTimeout(function () {
                        $this.css({
                            transform: 'translateX(' + dif + 'px) scale(0.95)',
                            opacity: Math.max((_.settings.translate_limit - Math.abs(dif)) / _.settings.translate_limit, _.settings.opacity_limit)
                        });
                    }, 0);

                    setTimeout(function () {
                        $this.addClass('animate');
                    }, 0);
                });

                $body.one('mouseup.notification', function() {
                    $this.trigger('mouseup');
                });

                e.preventDefault();
                return false;
            });

            $body.on('mouseup', this.selectors.elems, function() {
                var $this = $(this);

                _.is_holded = false;

                $body.unbind('mousemove.notification mouseup.notification');

                setTimeout(function () {
                    if(Math.abs(dif) > _.settings.close_limit) {
                        var $notification = $this.find('[data-js-notification-inner]'),
                            $btn_close = $notification.find('[data-js-action="close"]').first();

                        if($notification.hasClass('d-none')) {
                            return;
                        }

                        $this.one('transitionend', function() {
                            dif = 0;

                            $this.trigger('mouseup').trigger('transitionend');

                            $btn_close.trigger('click');
                            $notification.trigger('transitionend');

                            $this.trigger('onpressedend');
                        });

                        $this.css({
                            transform: 'translateX(' + (dif + 20) + 'px) scale(0.95)',
                            opacity: 0
                        });
                    } else {
                        $this.removeClass('pressed');

                        $this.one('transitionend' ,function () {
                            $this.removeClass('animate');
                            $this.trigger('onpressedend');
                        });

                        $this.css({
                            transform: '',
                            opacity: ''
                        });
                    }

                    if($this.css('transition-duration') === '0s') {
                        $this.trigger('transitionend');
                    }
                }, 0);
            });

            $body.on('close', this.selectors.elems, function() {
                var $this = $(this);

                $body.unbind('mousemove.notification');
                $this.trigger('mouseup').trigger('transitionend');
            });
        },
        _cookies: function($container) {
            var _ = this,
                $notification = $container.find('.js-notification-cookies');

            if($notification.length) {
                var $btn_close = $notification.find('[data-js-action="close"]'),
                    cookie = $.cookie('notification-cookies'),
                    show_once = $notification.attr('data-js-show-once'),
                    delay = +$notification.attr('data-js-delay'),
                    cookies_life = +$notification.attr('data-js-cookies-life');

                if(cookie !== 'off') {
                    setTimeout(function () {
                        _._show($notification, function () {
                            $btn_close.one('click', function() {
                                if(show_once === 'true') {
                                    var date = new Date(),
                                        timer = 24 * 60 * 60 * 1000 * cookies_life;

                                    date.setTime(date.getTime() + timer);

                                    $.cookie('notification-cookies', 'off', {
                                        expires: date,
                                        path: '/'
                                    });
                                }

                                _._hide($notification, function () {
                                    $notification.remove();
                                });

                                $(this).off();
                            });
                        });
                    }, delay * 1000);
                }

                return $btn_close;
            }
        },
        _products: function($container) {
            var _ = this,
                $notification = $container.find('.js-notification-products');

            if(!$notification.length) {
                return;
            }

            var $btns_close = $notification.find('[data-js-action="close"]'),
                $items = $notification.find('[data-js-notification-products-item]'),
                delay = +$notification.attr('data-js-delay'),
                interval_min = +$notification.attr('data-js-interval-min'),
                interval_max = +$notification.attr('data-js-interval-max'),
                max_time_life = +$notification.attr('data-js-max-time-life'),
                $current_item,
                interval_random,
                max_time_life_interval;

            function randomInteger(min, max) {
                return Math.round(min - 0.5 + Math.random() * (max - min + 1));
            };

            function hide() {
                _._hide($notification, function () {
                    autoplay();
                });
            };

            function autoplay() {
                clearInterval(max_time_life_interval);
                if(!$notification.hasClass('d-none') || _.is_holded) {
                    if(_.is_holded) {
                        $notification.parents('.js-notification').one('onpressedend', function() {
                            hide();
                        });
                    } else if($notification.is(':hover')) {
                        $notification.one('mouseleave', function() {
                            hide();
                        });
                    } else {
                        hide();
                    }
                } else {
                    $current_item = $items.eq(randomInteger(0, $items.length - 1));
                    interval_random = randomInteger(interval_min, interval_max);

                    $items.addClass('d-none');
                    $current_item.removeClass('d-none');

                    _._show($notification, function () {
                        setTimeout(function () {
                            autoplay();
                        }, interval_random * 1000);

                        if(max_time_life !== 0) {
                            max_time_life_interval = setTimeout(function () {
                                _._hide($notification);
                            }, max_time_life * 1000);
                        }
                    }, function(onVisible) {
                        onVisible();
                    });
                }
            };

            setTimeout(function () {
                autoplay();
            }, delay * 1000);

            $btns_close.on('click', function() {
                _._hide($notification);
            });

            return $btns_close;
        },
        _show: function ($notification, callback, beforeShow) {
            $notification.unbind('transitionend');

            if(callback) {
                $notification.one('transitionend', function () {
                    callback();
                });
            }

            $notification.removeClass('d-none');
            $notification.addClass('animate');

            function onVisible() {
                setTimeout(function () {
                    $notification.addClass('visible');
                }, 0);

                if($notification.css('transition-duration') === '0s') {
                    $notification.trigger('transitionend');
                }
            };

            if(beforeShow) {
                beforeShow(onVisible);
            } else {
                onVisible();
            }
        },
        _hide: function ($notification, callback) {
            $notification.unbind('transitionend');

            $notification.one('transitionend', function () {
                $notification.addClass('d-none').removeClass('animate').removeAttr('style');

                $notification.parents('.js-notification').trigger('close');

                if(callback) {
                    callback();
                }
            });

            $notification.removeClass('visible');

            if($notification.css('transition-duration') === '0s') {
                $notification.trigger('transitionend');
            }
        },
        init: function ($container) {
            this._products($container);
            this._cookies($container);
        },
        destroy: function ($container) {
            $container.find('.js-notification-cookies, .js-notification-products').find('[data-js-action="close"]').off();
        }
    });

    theme.Notifications = new Notifications;
};

$(function() {
    theme.Notifications();
});

theme.Parallax = function() {

    function Parallax() {
        this.load();
    };

    Parallax.prototype = $.extend({}, Parallax.prototype, {
        load: function () {
            $.widget( 'ui.parallax', {
                options: {
                    ratio: 1.2
                },
                params: {},
                _create: function() {
                    var _ = this;

                    this.params.start_width = this.element.width();
                    this.params.start_height = this.element.height();
                    this.params.start_ratio_height = this.params.start_height / this.params.start_width;

                    this._setOption('ratio', this.element.data('ratio'), true);
                    this._setOption('height', this.element.data('height'), true);
                    this._setOption('minHeight', this.element.data('min-height'), true);

                    if(this.options.height) {
                        var height_arr = this.options.height.split(',');

                        this.options.height = {
                            xs: height_arr[4],
                            sm: height_arr[3],
                            md: height_arr[2],
                            lg: height_arr[1],
                            xl: height_arr[0]
                        };
                    } else {
                        this.element.css({
                            paddingTop: _.params.start_ratio_height * 100 + '%'
                        });
                    }

                    if(this.options.minHeight) {
                        this.element.css({
                            minHeight: this.options.minHeight + 'px'
                        });
                    }

                    this.$content = this.element.children().first();

                    this._calculateSize();
                    this._calculatePosition();

                    this.element.css({
                        overflow: 'hidden',
                        position: 'relative'
                    });

                    this.$content.css({
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    });

                    $window.on('theme.resize.parallax', function () {
                        _._calculateSize();
                        _._calculatePosition();
                    });

                    $window.on('scroll.parallax', function () {
                        _._calculatePosition();
                    });

                    this.element.addClass('parallax--init');
                },
                _calculateSize: function() {
                    this.params.current_width = this.element.width();

                    if(this.options.height) {
                        this.element.css({
                            paddingTop: this.options.height[theme.current.bp]
                        });
                    }

                    this.params.current_height = this.element.height();

                    this.params.current_scale_width = this.params.current_width * this.options.ratio;
                    this.params.current_scale_height = this.params.current_height * this.options.ratio;

                    this.params.stroke_scroll = this.params.current_height + window.innerHeight;
                    this.params.stroke_content = this.params.current_scale_height - this.params.current_height;
                    this.params.stroke_ratio = this.params.stroke_scroll / this.params.stroke_content;

                    this.$content.width(this.params.current_scale_width);
                },
                _calculatePosition: function() {
                    this.params.stroke_current = this.params.stroke_scroll - this.element[0].getBoundingClientRect().bottom;

                    this.params.stroke_current = Math.max(this.params.stroke_current, 0);
                    this.params.stroke_current = Math.min(this.params.stroke_current, this.params.stroke_scroll);

                    this.params.current_top = this.params.stroke_content * -1 + (this.params.stroke_current / this.params.stroke_ratio);

                    this.$content.css({
                        transform: 'translate(-50%, ' + this.params.current_top + 'px)'
                    });
                },
                _init: function () {

                },
                _setOption: function(key, value) {
                    $.Widget.prototype._setOption.apply(this, arguments);
                },
                destroy: function() {
                    $window.unbind('theme.resize.parallax scroll.parallax');

                    $.Widget.prototype.destroy.call(this);
                }
            });
        },
        init: function($parallax) {
            if(!$parallax.hasClass('parallax--init')) {
                $parallax.parallax();
            }
        },
        destroy: function ($parallax) {
            if($parallax.hasClass('parallax--init')) {
                $parallax.parallax('destroy');
            }
        }
    });

    theme.Parallax = new Parallax;
};

$(function() {
    theme.Parallax();
});

theme.PopupSubscription = function() {

    function PopupSubscription() {
        this.settings = {
            popup_name: 'subscription'
        };

        this.selectors = {
            popup: '.popup-subscription'
        };

        this.load();
    };

    PopupSubscription.prototype = $.extend({}, PopupSubscription.prototype, {
        load: function() {
            var $popup = theme.Popups.getByName(this.settings.popup_name);

            if($popup.length) {
                var $subscription = $(this.selectors.popup),
                    cookie = $.cookie('subscription'),
                    cookies_life = +$subscription.attr('data-js-cookies-life') || 1;

                function addCookie() {
                    var date = new Date(),
                        timer = 24 * 60 * 60 * 1000 * cookies_life;

                    date.setTime(date.getTime() + timer);

                    $.cookie('subscription', 'off', {
                        expires: date,
                        path: '/'
                    });
                };

                if(window.location.href.indexOf('customer_posted=true') !== -1) {
                    addCookie();
                } else if($('.js-subscription-confirmation-error').length && $('[data-js-popup-name="subscription-confirmation"]').length) {

                } else if(cookie !== 'off') {
                    var $dont_show = $subscription.find('[data-js-popup-subscription-dont-show]'),
                        show_once = $subscription.attr('data-js-show-once') || false,
                        delay = +$subscription.attr('data-js-delay') || 3;

                    theme.Popups.addHandler(this.settings.popup_name, 'close.after', function() {
                        if(show_once === 'true' || $dont_show.is(':checked')) {
                            addCookie();
                        }
                    });

                    setTimeout(function () {
                        theme.Popups.callByName('subscription');
                    }, delay * 1000);
                }

                $popup.on('click', '[data-js-popup-subscription-close-website]', function () {
                    history.back();
                });

                $('a[href^="https://shella-demo.myshopify.com?preview_theme_id="]').on('mousedown', function () {
                    var $this = $(this),
                        href = $this.attr('href'),
                        cookie_name = 'subscription_preview_theme_id:' + href.split('preview_theme_id=')[1];

                    if($.cookie(cookie_name) !== 'removed_subscription_cookie') {
                        var date = new Date(),
                            timer = 24 * 60 * 60 * 1000 * cookies_life;

                        date.setTime(date.getTime() + timer);

                        $.cookie(cookie_name, 'removed_subscription_cookie', {
                            expires: date,
                            path: '/'
                        });

                        $.cookie('subscription', null);
                    }
                });
            }
        }
    });

    theme.PopupSubscription = new PopupSubscription;
};

$(function() {
    theme.PopupSubscription();
});

theme.PopupSubscriptionСonfirmation = function() {

    function PopupSubscriptionСonfirmation() {
        this.settings = {
            popup_name: 'subscription-confirmation'
        };

        this.load();
    };

    PopupSubscriptionСonfirmation.prototype = $.extend({}, PopupSubscriptionСonfirmation.prototype, {
        load: function() {
            var $error = $('.js-subscription-confirmation-error'),
                $popup;

            if(window.location.href.indexOf('customer_posted=true') !== -1) {
                theme.Popups.callByName(this.settings.popup_name);

                theme.Popups.addHandler(this.settings.popup_name, 'close.after', function() {
                    var newurl = window.location.href.replace('?customer_posted=true', '').replace('customer_posted=true', '');

                    window.history.replaceState({path: newurl}, '', newurl);
                });
            } else if($error.length) {
                $popup = theme.Popups.getByName(this.settings.popup_name);

                $popup.find('[data-popup-subscription-confirmation-success]').addClass('d-none');
                $popup.find('[data-popup-subscription-confirmation-error-message]').html($error.first().html());
                $popup.find('[data-popup-subscription-confirmation-error]').removeClass('d-none');

                theme.Popups.callByName(this.settings.popup_name);
            }
        }
    });

    theme.PopupSubscriptionСonfirmation = new PopupSubscriptionСonfirmation;
};

$(function() {
    theme.PopupSubscriptionСonfirmation();
});


theme.Presentation = function() {

    function Presentation() {
        this.settings = {
            sections_control_container: [
                'header',
                'gallery',
                'home-builder',
                'information-line',
                'footer'
            ],
            actions: ['container', 'rtl', 'animation']
        };

        this.dom = {
            $presentation: $('.js-presentation')
        };

        this.load();
    };

    Presentation.prototype = $.extend({}, Presentation.prototype, {
        load: function() {
            var _ = this,
                animations = {};

            for(var key in theme.animations) {
                animations[key] = {};

                for(var k in theme.animations[key]) {
                    animations[key][k] = theme.animations[key][k];
                }
            }

            function toggleState(action, enable) {
                if(action === 'container') {
                    $.each(_.settings.sections_control_container, function() {
                        $('[data-section-type="' + this + '"]').each(function () {
                            var $this = $(this);

                            if(enable) {
                                if($this.hasClass('container')) {
                                    $this.attr('data-has-container', true);
                                }

                                $this.addClass('container presentation-container-enabled');

                                if($this.attr('data-boxed-without-paddings') === 'true') {
                                    $this.addClass('px-0');
                                }
                            } else {
                                if(!$this[0].hasAttribute('data-has-container')) {
                                    $this.removeClass();
                                } else {
                                    $this.removeAttr('data-has-container');
                                }

                                if($this.attr('data-boxed-without-paddings') === 'true') {
                                    $this.removeClass('px-0');
                                }

                                $this.removeClass('presentation-container-enabled');
                            }
                        });
                    });

                    $window.trigger('resize');

                    if(theme.Masonry) {
                        theme.Masonry.update();
                    }
                } else if(action === 'rtl') {
                    $html.attr('dir', enable ? 'rtl' : 'ltr');
                    theme.rtl = enable;

                    $('.slick-slider.slick-initialized').not('.slick-vertical').each(function () {
                        var $this = $(this),
                            options = $this.slick('getSlick').originalSettings;

                        options.rtl = theme.rtl;

                        $this.slick('unslick');
                        $this.slick(options);
                    });

                    $window.trigger('resize');
                } else if(action === 'animation') {
                    $body[enable ? 'addClass' : 'removeClass']('theme-css-animate');

                    if(enable) {
                        for(var key in animations) {
                            for(var k in animations[key]) {
                                theme.animations[key][k] = animations[key][k];
                            }
                        }
                    } else {
                        theme.animations.tooltip.show_duration = 0;
                        theme.animations.tooltip.hide_duration = 0;
                        theme.animations.sticky_header.duration = 0;
                        theme.animations.header_tape.duration = 0;
                        theme.animations.menu.duration = 0;
                        theme.animations.dropdown.duration = 0;
                        theme.animations.accordion.duration = 0;
                        theme.animations.tabs.duration = 0;
                        theme.animations.tabs.scroll_duration = 0;
                        theme.animations.backtotop.scroll_duration = 0;
                    }
                }
            };

            $.each(this.settings.actions, function(i, v) {
                var $button = _.dom.$presentation.find('[data-js-action="' + this + '"]');

                if($.cookie('presentation-' + this) === 'enabled' && $button.attr('data-invert') !== 'true' && !$button.is(':checked')) {
                    toggleState(v, true);
                    $button.prop('checked', 'checked');
                } else if($.cookie('presentation-' + this) === 'enabled' && $button.attr('data-invert') === 'true' && $button.is(':checked')) {
                    toggleState(v, false);
                    $button.removeAttr('checked');
                }
            });

            this.dom.$presentation.on('change', '[data-js-action]', function() {
                var $this = $(this),
                    action = $this.attr('data-js-action'),
                    enable = $this.is(':checked'),
                    state = enable;

                if($this.attr('data-invert') === 'true') {
                    state = !state;
                }

                $.cookie('presentation-' + action, state ? 'enabled' : null, {
                    expires: 60 * 60 * 1000,
                    path: '/'
                });

                setTimeout(function() {
                    toggleState(action, enable);
                }, theme.animations.css.duration * 1000);
            });

            this.dom.$presentation.on('click', '[data-js-presentation-close]', function() {
                if(_.dom.$presentation.hasClass('open')) {
                    _.dom.$presentation.removeClass('open');
                } else {
                    _.dom.$presentation.addClass('open');
                }
            });

            theme.Global.responsiveHandler({
                namespace: '.presentation',
                element: this.dom.$presentation,
                on_desktop: true,
                events: {
                    'mouseenter mouseleave': function(e) {
                        _.dom.$presentation[e.type === 'mouseenter' ? 'addClass' : 'removeClass']('open');
                    }
                }
            });
        }
    });

    theme.Presentation = new Presentation;
};

$(function() {
    theme.Presentation();
});

theme.ProductFootbar = function() {

    function ProductFootbar() {

    };

    ProductFootbar.prototype = $.extend({}, ProductFootbar.prototype, {
        duration: function () {
            return theme.animations.footbar_product.duration * 1000;
        },
        init: function($container) {
            var _ = this,
                $footbar = $container.find('.js-footbar-product'),
                $limit = $('[data-js-footbar-product-limit]');

            if($footbar.length && $limit.length) {
                $window.on('theme.resize.productFootbar scroll.productFootbar', function () {
                    _._update($footbar, $limit);
                });

                this._update($footbar, $limit);
            }
        },
        _update: function ($footbar, $limit) {
            var limit = $limit[0].getBoundingClientRect(),
                topSpacing = theme.StickyHeader && theme.StickyHeader.$sticky ? theme.StickyHeader.$sticky.stickyHeader('getStickyHeight') : 0;

            if(limit.top < topSpacing && !$footbar.hasClass('show')) {
                $footbar.addClass('show animate');

                $footbar.velocity('stop', true);

                $footbar.velocity('slideDown', {
                    duration: this.duration(),
                    begin: function () {
                        setTimeout(function () {
                            $footbar.addClass('visible');
                        }, 0);
                    },
                    complete: function () {
                        $footbar.removeAttr('style');
                    }
                });
            } else if(limit.top >= topSpacing && $footbar.hasClass('visible')) {
                $footbar.velocity('stop', true);

                $footbar.velocity('slideUp', {
                    duration: this.duration(),
                    begin: function () {
                        $footbar.removeClass('visible');
                    },
                    complete: function () {
                        $footbar.removeClass('show animate').removeAttr('style');
                    }
                });
            }
        },
        destroy: function () {
            $window.unbind('theme.resize.productFootbar scroll.productFootbar');
        }
    });

    theme.ProductFootbar = new ProductFootbar;
};

$(function() {
    theme.ProductFootbar();
});

theme.ProductsView = function() {

    function ProductsView() {
        this.selectors = {
            view: '.js-products-view'
        };

        this.init();
    };

    ProductsView.prototype = $.extend({}, ProductsView.prototype, {
        init: function() {
            var _ = this,
                obj_view = localStorage.getItem('products-view');

            if(window.location.href.indexOf('products-view=reset') !== -1) {
                obj_view = null;
                localStorage.setItem('products-view', null);
            }

            if(obj_view) {
                var $wrappers = $(this.selectors.view + ' [data-js-products-grid-buttons]');

                obj_view = JSON.parse(obj_view);

                $wrappers.each(function () {
                    var $wrapper = $(this),
                        is_default = true;

                    $.each(obj_view, function (k, v) {
                        if($wrapper.attr('data-value-' + k) !== v) {
                            var active_attr = 'data-active-' + k;

                            $wrapper.attr('data-value-' + k, v);
                            $wrapper.find('[data-value]').removeAttr(active_attr);
                            $wrapper.find('[data-value="' + v +  '"]').attr(active_attr, true);

                            is_default = false;
                        }
                    });

                    if(!is_default) {
                        _.update($wrapper);
                    }
                });
            }

            $body.on('click', this.selectors.view + ' [data-js-products-grid-buttons] [data-value]', function() {
                var $this = $(this),
                    $wrapper = $this.parents('[data-js-products-grid-buttons]'),
                    value = $this.attr('data-value'),
                    bp = theme.current.bp,
                    active_attr = 'data-active-' + bp;

                if(!$this[0].hasAttribute(active_attr)) {
                    var obj_values = {};

                    $wrapper.find('[data-value]').removeAttr(active_attr);
                    $this.attr(active_attr, true);
                    $wrapper.attr('data-value-' + bp, value);

                    _.update($wrapper);

                    $.each(theme.breakpoints.values, function (k, v) {
                        obj_values[k] = $wrapper.attr('data-value-' + k);
                    });

                    localStorage.setItem('products-view', JSON.stringify(obj_values));
                }
            });
        },
        update: function ($wrapper) {
            var $products = $wrapper.parents(this.selectors.view).find('[data-js-products]'),
                $buttons = $('[data-js-products-grid-buttons]'),
                grid_class = '';

            if(!$buttons.length) {
                return;
            }

            $.each(theme.breakpoints.values, function(k) {
                var grid_value = $buttons.attr('data-value-' + k),
                    column_size = (grid_value === 'list' ? 12 : 12 / +grid_value);

                $products[+grid_value === 1 ? 'addClass' : 'removeClass']('products-view-centered-' + k);
                $products[grid_value === 'list' ? 'addClass' : 'removeClass']('products-view-list-' + k);

                grid_class += ' col-';

                if(k !== 'xs') {
                    grid_class += k + '-';
                }

                grid_class += column_size;
            });

            $products.find('[data-js-product]').parent().attr('class', grid_class);

            $window.trigger('checkImages');
        }
    });

    theme.ProductsView = new ProductsView;
};

$(function() {
    theme.ProductsView();
});

theme.RangeOfPrice = function() {

    function RangeOfPrice() {
        this.dom = {};
    };

    RangeOfPrice.prototype = $.extend({}, RangeOfPrice.prototype, {
        init: function() {
            this.dom.$range = $('.js-range-of-price');

            if(this.dom.$range.length) {
                var params = {
                    type: "double",
                    force_edges: true,
                    prettify: function (data) {
                        return Shopify.formatMoney(data * 100, theme.moneyFormat);
                    }
                };

                if (Currency) {
                    this.dom.$range.on('change', function () {
                        theme.ProductCurrency.update();
                    });

                    $.extend(params, {
                        onStart: function () {
                            setTimeout(function () {
                                theme.ProductCurrency.update();
                            }, 0);
                        },
                        onFinish: function () {
                            theme.ProductCurrency.update();
                            theme.Collections.onChangeControls();
                        }
                    });
                }

                this.dom.$range.ionRangeSlider(params);
            }
        },
        destroy: function () {
            if(this.dom.$range && this.dom.$range.data('ionRangeSlider')) {
                this.dom.$range.ionRangeSlider('destroy');
                delete this.dom;
            }
        },
        update: function(from, to) {
            if(this.dom.$range) {
                var api = this.dom.$range.data('ionRangeSlider');

                api.update({
                    from: from,
                    to: to
                });
            }
        },
        reset: function() {
            if(this.dom.$range.length) {
                var api = this.dom.$range.data('ionRangeSlider');

                api.update({
                    from: api.result.min,
                    to: api.result.max
                });
            }
        }
    });

    theme.RangeOfPrice = new RangeOfPrice;
};

$(function() {
    theme.RangeOfPrice();
});

theme.ShippingRatesCalculation = function() {

    function ShippingRatesCalculation() {
        this.load();
    };

    ShippingRatesCalculation.prototype = $.extend({}, ShippingRatesCalculation.prototype, {
        load: function() {
            var $calculator = $('#shipping-calculator');

            if($calculator.length) {
                var $info = $('.shipping-calculator-info');

                Shopify.Cart.ShippingCalculator.show({
                    submitButton: theme.strings.shippingCalcSubmitButton,
                    submitButtonDisabled: theme.strings.shippingCalcSubmitButtonDisabled,
                    customerIsLoggedIn: theme.strings.shippingCalcCustomerIsLoggedIn,
                    moneyFormat: theme.strings.shippingCalcMoneyFormat
                });

                $calculator.on('updated', function () {
                    setTimeout(function () {
                        var $result = $('#shipping-rates-feedback.success'),
                            html = $result.text(),
                            data = {
                                zip: $('#address_zip').val(),
                                province: $('#address_province').val(),
                                country: $('#address_country').val()
                            },
                            info = '';

                        $result.html(html);

                        var $price = $('<span>').addClass('price'),
                            $money = $result.find('span');

                        $money.replaceWith($price);
                        $price.append($money);

                        theme.ProductCurrency.update();

                        if($('#shipping-rates-feedback.success').length) {
                            $.each(data, function () {
                                if(this) {
                                    if(info) info += ', ';
                                    info += this;
                                }
                            });

                            $info.text(theme.strings.cart.general.shipping_calculator_data_info.replace('{{ data }}', info)).fadeIn({
                                complete: function () {
                                    $info.removeAttr('style');
                                }
                            }).removeClass('d-none');
                        } else {
                            $info.text('').addClass('d-none');
                        }
                    }, 100);
                });
            }
        }
    });

    theme.ShippingRatesCalculation = new ShippingRatesCalculation;
};

$(function() {
    theme.ShippingRatesCalculation();
});

theme.StickyHeader = function() {

    function StickyHeader() {

    };

    StickyHeader.prototype = $.extend({}, StickyHeader.prototype, {
        init: function($sticky, params) {
            var effect = $sticky.attr('data-sticky-effect') || 1;

            if ($sticky.length) {
                var stickyHeader = {
                    _create: function() {
                        var _ = this,
                            $elem = this.bindings,
                            $sticky_m = $elem.find(this.options.mobile && this.options.mobile.sticky ? this.options.mobile.sticky : ''),
                            $sticky_d = $elem.find(this.options.desktop && this.options.desktop.sticky ? this.options.desktop.sticky : ''),
                            $spacer_m = $('<div>').addClass('header__spacer header__spacer--m').insertBefore($sticky_m),
                            $spacer_d = $('<div>').addClass('header__spacer header__spacer--d').insertBefore($sticky_d);

                        this.sticky_class = 'header__content--sticky';

                        function fix() {
                            _._fix(_.$sticky, _.$spacer);
                            _._move(_.options[_.bp]);
                        };

                        function unfix() {
                            _._unfix(_.$sticky, _.$spacer);
                            _._return(_.options[_.bp]);
                        };

                        function on_resize() {
                            var is_desktop = theme.current.is_desktop;

                            _.bp = is_desktop ? 'desktop' : 'mobile';
                            _.$sticky = is_desktop ? $sticky_d : $sticky_m;
                            _.$spacer = is_desktop ? $spacer_d : $spacer_m;

                            if(!_.$sticky.length) return;

                            if (is_desktop) {
                                $spacer_m.removeClass('header__spacer--visible');
                                $spacer_d.addClass('header__spacer--visible');

                                if ($sticky_m.hasClass(_.sticky_class)) {
                                    _._unfix($sticky_m, $spacer_m);
                                    _._return(_.options.mobile);
                                }
                            } else {
                                $spacer_d.removeClass('header__spacer--visible');
                                $spacer_m.addClass('header__spacer--visible');

                                if ($sticky_d.hasClass(_.sticky_class)) {
                                    _._unfix($sticky_d, $spacer_d);
                                    _._return(_.options.desktop);
                                }
                            }
                        };

                        function on_scroll() {
                            if(!_.$sticky.length) return;

                            var limit = _.options[_.bp].limit ? _.options[_.bp].limit : 0,
                                spacer_pos = _.$spacer[0].getBoundingClientRect();

                            if (limit === 'bottom') {
                                limit = _.$sticky.hasClass(_.sticky_class) ? _.$spacer.innerHeight() : _.$sticky.innerHeight();
                            }

                            limit *= -1;

                            if (spacer_pos.top < limit) {
                                if (!_.$sticky.hasClass(_.sticky_class)) {
                                    fix();
                                }

                                if(!ie) {
                                    _._check_height(_.$sticky, _.options[_.bp]);
                                }
                            } else {
                                if (_.$sticky.hasClass(_.sticky_class)) {
                                    unfix();
                                }
                            }
                        };

                        on_resize();
                        on_scroll();

                        $window.on({
                            'theme.resize.stickyHeader': function() {
                                on_resize();
                                on_scroll();
                            },
                            'scroll.stickyHeader': on_scroll
                        });
                    },
                    _fix: function($sticky, $spacer) {
                        var height = $sticky.innerHeight();

                        $spacer.height(height);

                        if(this.options[this.bp].fade) {
                            $sticky.css({ 'opacity': 0 }).velocity({ 'opacity': theme.animations.sticky_header.opacity }, this.options[this.bp].duration());
                        }

                        $sticky.addClass(this.sticky_class);
                    },
                    _unfix: function($sticky, $spacer) {
                        $spacer.removeAttr('style');

                        if(this.options[this.bp].fade) {
                            $sticky.velocity('stop', true);
                        }

                        $sticky.removeAttr('style').removeClass(this.sticky_class);
                    },
                    _move: function(obj) {
                        if (!obj.move) return;

                        $.each(obj.move, function() {
                            var $elem = $(this.elem),
                                $to = $(this.to),
                                method = this.method || 'append';

                            this.$elem = $elem;
                            this.$parent = $elem.parent();

                            $to[method]($elem);
                        });
                    },
                    _return: function(obj) {
                        if (!obj.move) return;

                        $.each(obj.move, function() {
                            var method = this.method || 'append';

                            this.$parent[method](this.$elem);
                            this.$elem = null;
                            this.$parent = null;
                        });
                    },
                    _check_height: function($sticky, obj) {
                        if(!obj.height) return;

                        var spacer_pos = this.$spacer[0].getBoundingClientRect(),
                            height = spacer_pos.bottom <= obj.height ? obj.height : spacer_pos.bottom;

                        $sticky.css({ 'min-height': height });
                    },
                    getStickyHeight: function() {
                        return this.options[this.bp] ? (this.options[this.bp].height || $(this.options[this.bp].sticky).innerHeight()) : 0;
                    },
                    destroy: function() {
                        $(window).unbind('resize.stickyHeader scroll.stickyHeader');

                        $.Widget.prototype.destroy.call(this);
                    }
                };

                $.widget('ui.stickyHeader', stickyHeader);

                $sticky.stickyHeader(params);

                this.$sticky = $sticky;

                return {
                    destroy: function() {
                        $sticky.stickyHeader('destroy');
                    }
                };
            }
        }
    });

    theme.StickyHeader = new StickyHeader;
};

$(function() {
    theme.StickyHeader();
});

/*DOCUMENTATION*/

//params example
/*
 {
 bp: 1024,
 mobile: {
 sticky: '.tt-header__nav',
 limit: 400,
 fade: true,
 duration: 400
 },
 desktop: {
 sticky: '.tt-header__menu',
 height: 60,
 move: [
 {
 elem: '.tt-header__sidebar',
 to: '.tt-header__menu',
 method: 'append'
 }
 ]
 }
 }

 //params info
 bp - responsive breakpoint (number)
 mobile, desktop - breakpoint params (object)
 bp.sticky - sticky element (selector)
 bp.limit - breakpoint to start sticky (number, 'bottom')
 bp.height - change sticky element height (number)
 bp.fade - fade effect (bool)
 bp.duration - effects duration (number)
 bp.move - move elements inside sticky (array of objects)
 bp.move.elem - items that are moved (selector)
 bp.move.to - element to which to move (selector)
 bp.move.method - jquery method move (string)
 */

theme.StickySidebar = function() {
    function StickySidebar() {
        this.selectors = {
            elements: '.js-sticky-sidebar'
        };
    };

    StickySidebar.prototype = $.extend({}, StickySidebar.prototype, {
        init: function ($container, is_parent) {
            if(edge || ie) {
                return;
            }

            var $sticky = $container[is_parent ? 'parents' : 'find'](this.selectors.elements);

            if($sticky.length) {
                if(moz && $sticky[0].hasAttribute('data-disable-moz')) {
                    return;
                }

                function calculate($sticky) {
                    $sticky.each(function () {
                        var $this = $(this),
                            $inner = $this.find('[data-sticky-sidebar-inner]');

                        if(theme.current.is_desktop) {
                            if(!$this.hasClass('initialize')) {
                                var $parent = $this.parents('[data-sticky-sidebar-parent]'),
                                    topSpacing = theme.StickyHeader && theme.StickyHeader.$sticky ? theme.StickyHeader.$sticky.stickyHeader('getStickyHeight') : 0,
                                    bottomSpacing = 0,
                                    own_topSpacing = $this.attr('data-top-spacing'),
                                    own_bottomSpacing = $this.attr('data-bottom-spacing');

                                if(own_topSpacing !== undefined) {
                                    topSpacing += +own_topSpacing;
                                }

                                if(own_bottomSpacing !== undefined) {
                                    bottomSpacing += +own_bottomSpacing;
                                }

                                $this.stickySidebar({
                                    containerSelector: $parent,
                                    innerWrapperSelector: $inner,
                                    topSpacing: topSpacing,
                                    bottomSpacing: bottomSpacing
                                }).addClass('initialize active');
                            } else if(!$this.hasClass('active')) {
                                $this.stickySidebar('updateSticky');
                                $this.addClass('active');
                            }
                        } else {
                            if($this.hasClass('initialize active')) {
                                $this.stickySidebar('destroy');
                                $this.removeClass('initialize active');
                                $this.removeAttr('style');
                                $inner.removeAttr('style');
                            }
                        }
                    });
                };

                $window.on('theme.changed.breakpoint.sticky-sidebar', function () {
                    calculate($sticky);
                });

                calculate($sticky);
            }
        },
        update: function ($sticky) {
            if(edge || ie) {
                return;
            }

            if($sticky.length && theme.current.is_desktop) {
                if(moz && $sticky[0].hasAttribute('data-disable-moz')) {
                    return;
                }

                $sticky.each(function() {
                    var $this = $(this);

                    if($this.hasClass('initialize active')) {
                        $this.stickySidebar('updateSticky');
                    }
                });
            }
        },
        destroy: function ($container, is_parent) {
            if(edge || ie) {
                return;
            }

            var $sticky = $container[is_parent ? 'parents' : 'find'](this.selectors.elements);

            if($sticky.length && $sticky.hasClass('initialize')) {
                if(moz && $sticky[0].hasAttribute('data-disable-moz')) {
                    return;
                }

                $window.unbind('theme.changed.breakpoint.sticky-sidebar');
                $sticky.stickySidebar('destroy');
            }
        }
    });

    theme.StickySidebar = new StickySidebar;
};

$(function() {
    theme.StickySidebar();
});

theme.Tabs = function() {

    function Tabs() {

        this.selectors = {
            elements: '[data-js-tabs]'
        };

        this.load();
    };

    Tabs.prototype = $.extend({}, Tabs.prototype, {
        init: function ($tabs) {
            var $tabs = $tabs || $('.js-tabs').not('.tabs--init');

            var tabsObj = {
                singleOpen: true,
                anim_tab_duration: function () {
                    return theme.animations.tabs.duration * 1000;
                },
                anim_scroll_duration: function () {
                    return theme.animations.tabs.scroll_duration * 1000;
                },
                toggleOnDesktop: true,
                scrollToOpenMobile: false,
                effect: 'slide',
                offsetTop: '.header__content.header__content--sticky'
            };

            if($tabs.hasClass('product-tabs')) {
                tabsObj = $.extend(tabsObj, {
                    goToTab: [
                        {
                            elem: '.spr-badge-caption',
                            tab: 'reviews'
                        }
                    ]
                });
            }

            $tabs.ttTabs(tabsObj);
        },
        load: function() {
            $.fn.ttTabs = function (options) {
                function ttTabs(tabs) {
                    var $tabs = $(tabs),
                        $head = $tabs.find('[data-js-tabs-head]'),
                        $slider = $tabs.find('[data-js-tabs-slider]'),
                        $head_btns = $tabs.find('[data-js-tabs-btn]'),
                        $body_btns = $tabs.find('[data-js-tabs-btn-mobile]'),
                        $body_tabs = $tabs.find('[data-js-tabs-tab]'),
                        $btn_prev = $tabs.find('[data-js-tabs-nav-prev]'),
                        $btn_next = $tabs.find('[data-js-tabs-nav-next]'),
                        breakpoint = 1024,
                        type = $tabs.attr('data-type'),
                        scrollToOpenMobile = (options.scrollToOpenMobile !== undefined) ? options.scrollToOpenMobile : true,
                        singleOpen = (options.singleOpen !== undefined) ? options.singleOpen : true,
                        toggleOnDesktop = (options.toggleOnDesktop !== undefined) ? options.toggleOnDesktop : true,
                        effect = (options.effect !== undefined) ? options.effect : 'slide',
                        goToTab = options.goToTab;

                    function _closeTab($btn, data) {
                        var $animElem,
                            this_effect = data.effect || effect,
                            anim_obj = {
                                duration: options.anim_tab_duration(),
                                complete: function () {
                                    $(this).removeAttr('style');
                                }
                            };

                        function _anim_func($animElem) {
                            switch(this_effect) {
                                case 'toggle':
                                    $animElem.hide().removeAttr('style');
                                    break;
                                case 'slide':
                                    $animElem.velocity('slideUp', anim_obj);
                                    break;
                                default:
                                    $animElem.velocity('slideUp', anim_obj);
                            }
                        };

                        if(data.desktop || singleOpen) {
                            $head_btns.removeClass('active');
                            $animElem = $body_tabs.filter('.active').removeClass('active').find('[data-js-tabs-content]').stop();

                            _anim_func($animElem);
                        } else {
                            var index = $head_btns.index($btn);

                            $btn.removeClass('active');
                            $animElem = $body_tabs.eq(index).removeClass('active').find('[data-js-tabs-content]').stop();

                            _anim_func($animElem);
                        }
                    };

                    function _openTab($btn, data) {
                        var index = $head_btns.index($btn),
                            $body_tab_act = $body_tabs.eq(index),
                            $animElem,
                            $sticky = $('.js-sticky-sidebar'),
                            this_effect = data.effect || effect,
                            anim_obj = {
                                duration: options.anim_tab_duration(),
                                progress: function () {
                                    if(theme.StickySidebar) {
                                        theme.StickySidebar.update($sticky);
                                    }
                                },
                                complete: function () {
                                    if(data.after) {
                                        data.after($body_tab_act);
                                    }

                                    if(theme.StickySidebar) {
                                        theme.StickySidebar.update($sticky);
                                    }
                                }
                            };

                        function _anim_func($animElem) {
                            if($slider.hasClass('slick-initialized')) {
                                var btn_l = $btn.last().get(0).getBoundingClientRect().left,
                                    btn_r = $btn.last().get(0).getBoundingClientRect().right,
                                    slider_l = $slider.get(0).getBoundingClientRect().left,
                                    slider_r = $slider.get(0).getBoundingClientRect().right;

                                if(btn_r > slider_r) $slider.slick('slickNext');
                                else if(btn_l < slider_l) $slider.slick('slickPrev');
                            }

                            switch(this_effect) {
                                case 'toggle':
                                    $animElem.show();
                                    if(data.after) {
                                        data.after($body_tab_act);
                                    }
                                    break;
                                case 'slide':
                                    $animElem.velocity('slideDown', anim_obj);
                                    break;
                                default:
                                    $animElem.velocity('slideDown', anim_obj);
                            }
                        };

                        $btn.addClass('active');
                        $animElem = $body_tab_act.addClass('active').find('> div').stop();

                        _anim_func($animElem);
                    };

                    function _toTab(tab) {
                        var wind_w = window.innerWidth,
                            desktop = wind_w > breakpoint,
                            $btn = $head_btns.filter('[data-tab="' + tab + '"]');

                        function afterOpen() {
                            var tob_t = type === 'horizontal' && desktop ? $tabs.offset().top : $body_btns.eq($head_btns.index($btn)).offset().top,
                                header_h = theme.StickyHeader && theme.StickyHeader.$sticky ? theme.StickyHeader.$sticky.stickyHeader('getStickyHeight') : 0;

                            $('html, body').velocity( 'scroll' , {
                                offset: tob_t - header_h,
                                duration: options.anim_scroll_duration()
                            });
                        };

                        if(!$btn.hasClass('active')) {
                            _closeTab($btn, {
                                desktop: desktop,
                                effect: 'toggle'
                            });

                            _openTab($btn, {
                                desktop: desktop,
                                effect: 'toggle',
                                after: function () {
                                    afterOpen();
                                }
                            });
                        } else {
                            afterOpen();
                        }
                    };

                    function _btn_disabled(currentSlide) {
                        var btn_last_r = $head_btns.last().get(0).getBoundingClientRect().right,
                            slider_r = $slider.get(0).getBoundingClientRect().right;

                        if(currentSlide === 0) $btn_prev.addClass('disabled');
                        else $btn_prev.removeClass('disabled');

                        if(btn_last_r <= slider_r) $btn_next.addClass('disabled');
                        else $btn_next.removeClass('disabled');
                    };

                    function _slider_init() {
                        if($slider.hasClass('slick-initialized')) return;

                        $head.addClass('tabs__head--slider');

                        $slider.slick({
                            infinite: false,
                            slidesToShow: 1,
                            variableWidth: true,
                            draggable: false,
                            dots: false,
                            arrows: false
                        });

                        $btn_prev.addClass('disabled');

                        $slider.on('afterChange', function(e, slick, currentSlide) {
                            _btn_disabled(currentSlide);
                        });

                        $btn_prev.on('click', function() {
                            if($(this).hasClass('disabled')) return;
                            $slider.slick('slickPrev');
                        });

                        $btn_next.on('click', function() {
                            if($(this).hasClass('disabled')) return;
                            $slider.slick('slickNext');
                        });
                    };

                    function _slider_destroy() {
                        if(!$slider.hasClass('slick-initialized')) return;

                        $($slider, $btn_prev, $btn_next).off();

                        $slider.slick('unslick');

                        $head.removeClass('tabs__head--slider');
                    };

                    $head_btns.on('click', function (e, trigger) {
                        var $this = $(this),
                            wind_w = window.innerWidth,
                            desktop = wind_w > breakpoint,
                            trigger = (trigger === 'trigger') ? true : false;

                        if($this.hasClass('active')) {
                            if(desktop && !toggleOnDesktop) return;

                            _closeTab($this, {
                                desktop: desktop
                            });
                        } else {
                            _closeTab($this, {
                                desktop: desktop
                            });

                            _openTab($this, {
                                desktop: desktop,
                                after: function ($body_tab_act) {
                                    if (!desktop && !trigger && scrollToOpenMobile) {
                                        var tob_t = $body_tab_act.find('[data-js-tabs-btn-mobile]').offset().top,
                                            header_h = theme.StickyHeader && theme.StickyHeader.$sticky ? theme.StickyHeader.$sticky.stickyHeader('getStickyHeight') : 0;

                                        $('html, body').velocity('stop').velocity('scroll', {
                                            offset: tob_t - header_h,
                                            duration: options.anim_scroll_duration()
                                        });
                                    }
                                }
                            });
                        }
                    });

                    $body_btns.on('click', function () {
                        var $this = $(this),
                            $parent = $this.parent(),
                            index = $body_tabs.index($parent);

                        $head_btns.eq(index).trigger('click');
                    });

                    if($.isArray(goToTab) && goToTab.length) {
                        $(goToTab).each(function () {
                            var _ = this;

                            $body.on('click', this.elem, function (e) {
                                _toTab(_.tab, _.scrollTo, _.focus);

                                e.preventDefault();
                                return false;
                            });
                        });
                    }

                    if(type === 'horizontal') {
                        $(window).on('theme.resize updateTabs', function () {
                            var wind_w = window.innerWidth,
                                desktop = wind_w > breakpoint,
                                head_w = $slider.innerWidth(),
                                btns_w = 0;

                            $head_btns.each(function () {
                                btns_w += $(this).innerWidth();
                            });

                            if(desktop) {
                                var $btn_act = $head_btns.filter('.active');

                                if(!singleOpen && $btn_act.length > 1) {
                                    var $save_active = $btn_act.first();

                                    _closeTab('', {
                                        desktop: desktop
                                    });

                                    _openTab($save_active, {
                                        desktop: desktop
                                    });
                                }

                                if(btns_w > head_w) {
                                    _slider_init();
                                    if($slider.hasClass('slick-initialized')) {
                                        setTimeout(function() {
                                            _btn_disabled($head_btns.index($('[data-js-tabs-btn].slick-current')));
                                        }, 0);
                                    }
                                } else {
                                    _slider_destroy();
                                }
                            } else {
                                _slider_destroy();
                            }
                        });
                    }

                    $head_btns.filter('[data-active="true"]').trigger('click', ['trigger']);

                    $(window).trigger('updateTabs');

                    $tabs.addClass('tabs--init');

                    return $tabs;
                };

                $(this).each(function() {
                    new ttTabs(this);
                });
            };

            this.init();
        }
    });

    theme.Tabs = new Tabs;
};

$(function() {
    theme.Tabs();
});

theme.Tooltip = function() {

    function Tooltip() {
        this.params = {
            size: 'small',
            arrow: true,
            animation: 'fade',
            inertia: false,
            duration: [200, 0],
            delay: 0,
            theme: 'shella'
        };

        this.load();
    };

    Tooltip.prototype = $.extend({}, Tooltip.prototype, {
        load: function () {
            this.params = $.extend(this.params, {
                animation: window.theme.animations.tooltip.type,
                inertia: window.theme.animations.tooltip.inertia,
                touch: false
            });

            this.init();
        },
        init: function (obj) {
            this.params = $.extend(this.params, {
                duration: [window.theme.animations.tooltip.show_duration * 1000, window.theme.animations.tooltip.hide_duration * 1000]
            });

            if(obj) {
                this.params = $.extend(this.params, obj);
            }

            this.api = tippy('[data-js-tooltip]', this.params);
        },
        reinit: function (obj) {
            this.destroy();
            this.init(obj);
        },
        destroy: function () {
            if(this.api) {
                this.api.destroyAll();
                this.api = null;
            }
        }
    });

    theme.Tooltip = new Tooltip;
};

$(function() {
    theme.Tooltip();
});

theme.Trigger = function() {

    function Trigger() {
        this.load();
    };

    Trigger.prototype = $.extend({}, Trigger.prototype, {
        load: function () {
            var _ = this;

            $body.on('click', '[data-js-trigger]', function () {
                _.process($(this).attr('data-js-trigger'));
            });
        },
        process: function (id, event) {
            event = event || 'click';

            $('[data-js-trigger-id="' + id + '"]').trigger(event);
        }
    });

    theme.Trigger = new Trigger;
};

$(function() {
    theme.Trigger();
});
