function floatToString(e, t) {
    var o = e.toFixed(t).toString();
    return o.match(/^\.\d+/) ? "0" + o : o
}

function attributeToString(e) {
    return "string" != typeof e && (e += "", "undefined" === e && (e = "")), jQuery.trim(e)
}

window.slate = window.slate || {},/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-flexbox-placeholder-svg-touchevents-domprefixes-prefixes-setclasses-testallprops-testprop-teststyles !*/
    !function (e, t, o) {
        function i(e, t) {
            return typeof e === t
        }

        function n() {
            var e, t, o, n, s, r, a;
            for (var l in v) if (v.hasOwnProperty(l)) {
                if (e = [], t = v[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (o = 0; o < t.options.aliases.length; o++) e.push(t.options.aliases[o].toLowerCase());
                for (n = i(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) r = e[s], a = r.split("."), 1 === a.length ? S[a[0]] = n : (!S[a[0]] || S[a[0]] instanceof Boolean || (S[a[0]] = Boolean(S[a[0]])), S[a[0]][a[1]] = n), w.push((n ? "" : "no-") + a.join("-"))
            }
        }

        function s(e) {
            var t = z.className, o = S._config.classPrefix || "";
            if (T && (t = t.baseVal), S._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + o + "no-js(\\s|$)");
                t = t.replace(i, "$1" + o + "js$2")
            }
            S._config.enableClasses && (t += " " + o + e.join(" " + o), T ? z.className.baseVal = t : z.className = t)
        }

        function r() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }

        function a(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function l(e) {
            return e.replace(/([a-z])-([a-z])/g, function (e, t, o) {
                return t + o.toUpperCase()
            }).replace(/^-/, "")
        }

        function c() {
            var e = t.body;
            return e || (e = r(T ? "svg" : "body"), e.fake = !0), e
        }

        function d(e, o, i, n) {
            var s, a, l, d, u = "modernizr", p = r("div"), h = c();
            if (parseInt(i, 10)) for (; i--;) l = r("div"), l.id = n ? n[i] : u + (i + 1), p.appendChild(l);
            return s = r("style"), s.type = "text/css", s.id = "s" + u, (h.fake ? h : p).appendChild(s), h.appendChild(p), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), p.id = u, h.fake && (h.style.background = "", h.style.overflow = "hidden", d = z.style.overflow, z.style.overflow = "hidden", z.appendChild(h)), a = o(p, e), h.fake ? (h.parentNode.removeChild(h), z.style.overflow = d, z.offsetHeight) : p.parentNode.removeChild(p), !!a
        }

        function u(e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        }

        function p(e, t, o) {
            var n;
            for (var s in e) if (e[s] in t) return o === !1 ? e[s] : (n = t[e[s]], i(n, "function") ? u(n, o || t) : n);
            return !1
        }

        function h(e) {
            return e.replace(/([A-Z])/g, function (e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function m(t, i) {
            var n = t.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; n--;) if (e.CSS.supports(h(t[n]), i)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in e) {
                for (var s = []; n--;) s.push("(" + h(t[n]) + ":" + i + ")");
                return s = s.join(" or "), d("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == getComputedStyle(e, null).position
                })
            }
            return o
        }

        function f(e, t, n, s) {
            function c() {
                u && (delete O.style, delete O.modElem)
            }

            if (s = !i(s, "undefined") && s, !i(n, "undefined")) {
                var d = m(e, n);
                if (!i(d, "undefined")) return d
            }
            for (var u, p, h, f, g, y = ["modernizr", "tspan", "samp"]; !O.style && y.length;) u = !0, O.modElem = r(y.shift()), O.style = O.modElem.style;
            for (h = e.length, p = 0; h > p; p++) if (f = e[p], g = O.style[f], a(f, "-") && (f = l(f)), O.style[f] !== o) {
                if (s || i(n, "undefined")) return c(), "pfx" != t || f;
                try {
                    O.style[f] = n
                } catch (e) {
                }
                if (O.style[f] != g) return c(), "pfx" != t || f
            }
            return c(), !1
        }

        function g(e, t, o, n, s) {
            var r = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + W.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? f(a, t, n, s) : (a = (e + " " + x.join(r + " ") + r).split(" "), p(a, t, o))
        }

        function y(e, t, i) {
            return g(e, o, o, t, i)
        }

        var w = [], v = [], _ = {
            _version: "3.3.1",
            _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
            _q: [],
            on: function (e, t) {
                var o = this;
                setTimeout(function () {
                    t(o[e])
                }, 0)
            },
            addTest: function (e, t, o) {
                v.push({name: e, fn: t, options: o})
            },
            addAsyncTest: function (e) {
                v.push({name: null, fn: e})
            }
        }, S = function () {
        };
        S.prototype = _, S = new S, S.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
        var b = _._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        _._prefixes = b;
        var z = t.documentElement, T = "svg" === z.nodeName.toLowerCase(), k = "Moz O ms Webkit",
            x = _._config.usePrefixes ? k.toLowerCase().split(" ") : [];
        _._domPrefixes = x;
        var C = "CSS" in e && "supports" in e.CSS, $ = "supportsCSS" in e;
        S.addTest("supports", C || $), S.addTest("placeholder", "placeholder" in r("input") && "placeholder" in r("textarea"));
        var W = _._config.usePrefixes ? k.split(" ") : [];
        _._cssomPrefixes = W;
        var P = _.testStyles = d;
        S.addTest("touchevents", function () {
            var o;
            if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) o = !0; else {
                var i = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                P(i, function (e) {
                    o = 9 === e.offsetTop
                })
            }
            return o
        });
        var L = {elem: r("modernizr")};
        S._q.push(function () {
            delete L.elem
        });
        var O = {style: L.elem.style};
        S._q.unshift(function () {
            delete O.style
        }), _.testProp = function (e, t, i) {
            return f([e], o, t, i)
        }, _.testAllProps = g, _.testAllProps = y, S.addTest("csstransforms", function () {
            return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0)
        }), S.addTest("csstransforms3d", function () {
            var e = !!y("perspective", "1px", !0), t = S._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in z.style)) {
                var o, i = "#modernizr{width:0;height:0}";
                S.supports ? o = "@supports (perspective: 1px)" : (o = "@media (transform-3d)", t && (o += ",(-webkit-transform-3d)")), o += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", P(i + o, function (t) {
                    e = 7 === t.offsetWidth && 18 === t.offsetHeight
                })
            }
            return e
        }), S.addTest("flexbox", y("flexBasis", "1px", !0)), n(), s(w), delete _.addTest, delete _.addAsyncTest;
        for (var A = 0; A < S._q.length; A++) S._q[A]();
        e.Modernizr = S
    }(window, document),/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
    function (e, t) {
        var o, i = e.jQuery || e.Cowboy || (e.Cowboy = {});
        i.throttle = o = function (e, o, n, s) {
            function r() {
                function i() {
                    l = +new Date, n.apply(c, u)
                }

                function r() {
                    a = t
                }

                var c = this, d = +new Date - l, u = arguments;
                s && !a && i(), a && clearTimeout(a), s === t && d > e ? i() : o !== !0 && (a = setTimeout(s ? r : i, s === t ? e - d : e))
            }

            var a, l = 0;
            return "boolean" != typeof o && (s = n, n = o, o = t), i.guid && (r.guid = n.guid = n.guid || i.guid++), r
        }, i.debounce = function (e, i, n) {
            return n === t ? o(e, i, !1) : o(e, n, i !== !1)
        }
    }(this);
var _extends = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
    }
    return e
}, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};/*
 * Currency tools
 *
 * Copyright (c) 2015 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if (!function (e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t()
}(this, function () {
    "use strict";
    var e = function (e) {
            var t = {
                elements_selector: "img",
                container: document,
                threshold: 300,
                data_src: "src",
                data_srcset: "srcset",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                callback_load: null,
                callback_error: null,
                callback_set: null,
                callback_enter: null
            };
            return _extends({}, t, e)
        }, t = function (e, t) {
            return e.getAttribute("data-" + t)
        }, o = function (e, t, o) {
            return e.setAttribute("data-" + t, o)
        }, i = function (e) {
            return e.filter(function (e) {
                return !t(e, "was-processed")
            })
        }, n = function (e, t) {
            var o, i = new e(t);
            try {
                o = new CustomEvent("LazyLoad::Initialized", {detail: {instance: i}})
            } catch (e) {
                (o = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {instance: i})
            }
            window.dispatchEvent(o)
        }, s = function (e, o, i) {
            for (var n, s = 0; n = e.children[s]; s += 1) if ("SOURCE" === n.tagName) {
                var r = t(n, i);
                r && n.setAttribute(o, r)
            }
        }, r = function (e, t, o) {
            o && e.setAttribute(t, o)
        }, a = function (e, o) {
            var i = o.data_src, n = t(e, i), a = e.tagName;
            if ("IMG" === a) {
                var l = o.data_srcset, c = t(e, l), d = e.parentNode;
                return d && "PICTURE" === d.tagName && s(d, "srcset", l), r(e, "srcset", c), void r(e, "src", n)
            }
            return "IFRAME" !== a ? "VIDEO" === a ? (s(e, "src", i), void r(e, "src", n)) : void (n && (e.style.backgroundImage = 'url("' + n + '")')) : void r(e, "src", n)
        }, l = "undefined" != typeof window, c = l && "IntersectionObserver" in window,
        d = l && "classList" in document.createElement("p"), u = function (e, t) {
            d ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
        }, p = function (e, t) {
            d ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        }, h = function (e, t) {
            e && e(t)
        }, m = function (e, t, o) {
            e.removeEventListener("load", t), e.removeEventListener("error", o)
        }, f = function (e, t) {
            var o = function o(n) {
                g(n, !0, t), m(e, o, i)
            }, i = function i(n) {
                g(n, !1, t), m(e, o, i)
            };
            e.addEventListener("load", o), e.addEventListener("error", i)
        }, g = function (e, t, o) {
            var i = e.target;
            p(i, o.class_loading), u(i, t ? o.class_loaded : o.class_error), h(t ? o.callback_load : o.callback_error, i)
        }, y = function (e, t) {
            h(t.callback_enter, e), ["IMG", "IFRAME", "VIDEO"].indexOf(e.tagName) > -1 && (f(e, t), u(e, t.class_loading)), a(e, t), o(e, "was-processed", !0), h(t.callback_set, e)
        }, w = function (e) {
            return e.isIntersecting || e.intersectionRatio > 0
        }, v = function (t, o) {
            this._settings = e(t), this._setObserver(), this.update(o)
        };
    v.prototype = {
        _setObserver: function () {
            var e = this;
            if (c) {
                var t = this._settings,
                    o = {root: t.container === document ? null : t.container, rootMargin: t.threshold + "px"};
                this._observer = new IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                        if (w(t)) {
                            var o = t.target;
                            y(o, e._settings), e._observer.unobserve(o)
                        }
                    }), e._elements = i(e._elements)
                }, o)
            }
        }, loadAll: function () {
            var e = this._settings;
            this._elements.forEach(function (t) {
                y(t, e)
            }), this._elements = i(this._elements)
        }, update: function (e) {
            var t = this, o = this._settings, n = e || o.container.querySelectorAll(o.elements_selector);
            this._elements = i(Array.prototype.slice.call(n)), this._observer ? this._elements.forEach(function (e) {
                t._observer.observe(e)
            }) : this.loadAll()
        }, destroy: function () {
            var e = this;
            this._observer && (i(this._elements).forEach(function (t) {
                e._observer.unobserve(t)
            }), this._observer = null), this._elements = null, this._settings = null
        }
    };
    var _ = window.lazyLoadOptions;
    return l && _ && function (e, t) {
        if (t.length) for (var o, i = 0; o = t[i]; i += 1) n(e, o); else n(e, t)
    }(v, _), v
}),/*! jQuery UI - v1.12.1 - 2017-07-27
* http://jqueryui.com
* Includes: widget.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function (e) {
        e.ui = e.ui || {}, e.ui.version = "1.12.1";
        var t = 0, o = Array.prototype.slice;
        e.cleanData = function (t) {
            return function (o) {
                var i, n, s;
                for (s = 0; null != (n = o[s]); s++) try {
                    i = e._data(n, "events"), i && i.remove && e(n).triggerHandler("remove")
                } catch (e) {
                }
                t(o)
            }
        }(e.cleanData), e.widget = function (t, o, i) {
            var n, s, r, a = {}, l = t.split(".")[0];
            t = t.split(".")[1];
            var c = l + "-" + t;
            return i || (i = o, o = e.Widget), e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))), e.expr[":"][c.toLowerCase()] = function (t) {
                return !!e.data(t, c)
            }, e[l] = e[l] || {}, n = e[l][t], s = e[l][t] = function (e, t) {
                return this._createWidget ? void (arguments.length && this._createWidget(e, t)) : new s(e, t)
            }, e.extend(s, n, {
                version: i.version,
                _proto: e.extend({}, i),
                _childConstructors: []
            }), r = new o, r.options = e.widget.extend({}, r.options), e.each(i, function (t, i) {
                return e.isFunction(i) ? void (a[t] = function () {
                    function e() {
                        return o.prototype[t].apply(this, arguments)
                    }

                    function n(e) {
                        return o.prototype[t].apply(this, e)
                    }

                    return function () {
                        var t, o = this._super, s = this._superApply;
                        return this._super = e, this._superApply = n, t = i.apply(this, arguments), this._super = o, this._superApply = s, t
                    }
                }()) : void (a[t] = i)
            }), s.prototype = e.widget.extend(r, {widgetEventPrefix: n ? r.widgetEventPrefix || t : t}, a, {
                constructor: s,
                namespace: l,
                widgetName: t,
                widgetFullName: c
            }), n ? (e.each(n._childConstructors, function (t, o) {
                var i = o.prototype;
                e.widget(i.namespace + "." + i.widgetName, s, o._proto)
            }), delete n._childConstructors) : o._childConstructors.push(s), e.widget.bridge(t, s), s
        }, e.widget.extend = function (t) {
            for (var i, n, s = o.call(arguments, 1), r = 0, a = s.length; a > r; r++) for (i in s[r]) n = s[r][i], s[r].hasOwnProperty(i) && void 0 !== n && (t[i] = e.isPlainObject(n) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n) : n);
            return t
        }, e.widget.bridge = function (t, i) {
            var n = i.prototype.widgetFullName || t;
            e.fn[t] = function (s) {
                var r = "string" == typeof s, a = o.call(arguments, 1), l = this;
                return r ? this.length || "instance" !== s ? this.each(function () {
                    var o, i = e.data(this, n);
                    return "instance" === s ? (l = i, !1) : i ? e.isFunction(i[s]) && "_" !== s.charAt(0) ? (o = i[s].apply(i, a), o !== i && void 0 !== o ? (l = o && o.jquery ? l.pushStack(o.get()) : o, !1) : void 0) : e.error("no such method '" + s + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + s + "'")
                }) : l = void 0 : (a.length && (s = e.widget.extend.apply(null, [s].concat(a))), this.each(function () {
                    var t = e.data(this, n);
                    t ? (t.option(s || {}), t._init && t._init()) : e.data(this, n, new i(s, this))
                })), l
            }
        }, e.Widget = function () {
        }, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {classes: {}, disabled: !1, create: null},
            _createWidget: function (o, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), o), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function () {
                return {}
            },
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function () {
                var t = this;
                this._destroy(), e.each(this.classesElementLookup, function (e, o) {
                    t._removeClass(o, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: e.noop,
            widget: function () {
                return this.element
            },
            option: function (t, o) {
                var i, n, s, r = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t) if (r = {}, i = t.split("."), t = i.shift(), i.length) {
                    for (n = r[t] = e.widget.extend({}, this.options[t]), s = 0; i.length - 1 > s; s++) n[i[s]] = n[i[s]] || {}, n = n[i[s]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = o
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    r[t] = o
                }
                return this._setOptions(r), this
            },
            _setOptions: function (e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function (e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function (t) {
                var o, i, n;
                for (o in t) n = this.classesElementLookup[o], t[o] !== this.options.classes[o] && n && n.length && (i = e(n.get()), this._removeClass(n, o), i.addClass(this._classes({
                    element: i,
                    keys: o,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function (e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function () {
                return this._setOptions({disabled: !1})
            },
            disable: function () {
                return this._setOptions({disabled: !0})
            },
            _classes: function (t) {
                function o(o, s) {
                    var r, a;
                    for (a = 0; o.length > a; a++) r = n.classesElementLookup[o[a]] || e(), r = e(t.add ? e.unique(r.get().concat(t.element.get())) : r.not(t.element).get()), n.classesElementLookup[o[a]] = r, i.push(o[a]), s && t.classes[o[a]] && i.push(t.classes[o[a]])
                }

                var i = [], n = this;
                return t = e.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, t), this._on(t.element, {remove: "_untrackClassesElement"}), t.keys && o(t.keys.match(/\S+/g) || [], !0), t.extra && o(t.extra.match(/\S+/g) || []), i.join(" ")
            },
            _untrackClassesElement: function (t) {
                var o = this;
                e.each(o.classesElementLookup, function (i, n) {
                    -1 !== e.inArray(t.target, n) && (o.classesElementLookup[i] = e(n.not(t.target).get()))
                })
            },
            _removeClass: function (e, t, o) {
                return this._toggleClass(e, t, o, !1)
            },
            _addClass: function (e, t, o) {
                return this._toggleClass(e, t, o, !0)
            },
            _toggleClass: function (e, t, o, i) {
                i = "boolean" == typeof i ? i : o;
                var n = "string" == typeof e || null === e,
                    s = {extra: n ? t : o, keys: n ? e : t, element: n ? this.element : e, add: i};
                return s.element.toggleClass(this._classes(s), i), this
            },
            _on: function (t, o, i) {
                var n, s = this;
                "boolean" != typeof t && (i = o, o = t, t = !1), i ? (o = n = e(o), this.bindings = this.bindings.add(o)) : (i = o, o = this.element, n = this.widget()), e.each(i, function (i, r) {
                    function a() {
                        return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
                    }

                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || e.guid++);
                    var l = i.match(/^([\w:-]*)\s*(.*)$/), c = l[1] + s.eventNamespace, d = l[2];
                    d ? n.on(c, d, a) : o.on(c, a)
                })
            },
            _off: function (t, o) {
                o = (o || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(o).off(o), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function (e, t) {
                function o() {
                    return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                }

                var i = this;
                return setTimeout(o, t || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function (t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-hover")
                    }, mouseleave: function (t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function (t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-focus")
                    }, focusout: function (t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function (t, o, i) {
                var n, s, r = this.options[t];
                if (i = i || {}, o = e.Event(o), o.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), o.target = this.element[0], s = o.originalEvent) for (n in s) n in o || (o[n] = s[n]);
                return this.element.trigger(o, i), !(e.isFunction(r) && r.apply(this.element[0], [o].concat(i)) === !1 || o.isDefaultPrevented())
            }
        }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, o) {
            e.Widget.prototype["_" + t] = function (i, n, s) {
                "string" == typeof n && (n = {effect: n});
                var r, a = n ? n === !0 || "number" == typeof n ? o : n.effect || o : t;
                n = n || {}, "number" == typeof n && (n = {duration: n}), r = !e.isEmptyObject(n), n.complete = s, n.delay && i.delay(n.delay), r && e.effects && e.effects.effect[a] ? i[t](n) : a !== t && i[a] ? i[a](n.duration, n.easing, s) : i.queue(function (o) {
                    e(this)[t](), s && s.call(i[0]), o()
                })
            }
        }), e.widget
    }),/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */
    function (e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function (o) {
            return t(e, o)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
    }(window, function (e, t) {
        "use strict";

        function o(o, s, a) {
            function l(e, t, i) {
                var n, s = "$()." + o + '("' + t + '")';
                return e.each(function (e, l) {
                    var c = a.data(l, o);
                    if (!c) return void r(o + " not initialized. Cannot call methods, i.e. " + s);
                    var d = c[t];
                    if (!d || "_" == t.charAt(0)) return void r(s + " is not a valid method");
                    var u = d.apply(c, i);
                    n = void 0 === n ? u : n
                }), void 0 !== n ? n : e
            }

            function c(e, t) {
                e.each(function (e, i) {
                    var n = a.data(i, o);
                    n ? (n.option(t), n._init()) : (n = new s(i, t), a.data(i, o, n))
                })
            }

            a = a || t || e.jQuery, a && (s.prototype.option || (s.prototype.option = function (e) {
                a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
            }), a.fn[o] = function (e) {
                if ("string" == typeof e) {
                    var t = n.call(arguments, 1);
                    return l(this, e, t)
                }
                return c(this, e), this
            }, i(a))
        }

        function i(e) {
            !e || e && e.bridget || (e.bridget = o)
        }

        var n = Array.prototype.slice, s = e.console, r = "undefined" == typeof s ? function () {
        } : function (e) {
            s.error(e)
        };
        return i(t || e.jQuery), o
    }),/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
    /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
    !function (e) {
        "use strict";

        function t(e) {
            var t = e.length, i = o.type(e);
            return "function" !== i && !o.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        if (!e.jQuery) {
            var o = function (e, t) {
                return new o.fn.init(e, t)
            };
            o.isWindow = function (e) {
                return e && e === e.window
            }, o.type = function (e) {
                return e ? "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e : e + ""
            }, o.isArray = Array.isArray || function (e) {
                return "array" === o.type(e)
            }, o.isPlainObject = function (e) {
                var t;
                if (!e || "object" !== o.type(e) || e.nodeType || o.isWindow(e)) return !1;
                try {
                    if (e.constructor && !s.call(e, "constructor") && !s.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e) ;
                return void 0 === t || s.call(e, t)
            }, o.each = function (e, o, i) {
                var n = 0, s = e.length, r = t(e);
                if (i) {
                    if (r) for (; n < s && o.apply(e[n], i) !== !1; n++) ; else for (n in e) if (e.hasOwnProperty(n) && o.apply(e[n], i) === !1) break
                } else if (r) for (; n < s && o.call(e[n], n, e[n]) !== !1; n++) ; else for (n in e) if (e.hasOwnProperty(n) && o.call(e[n], n, e[n]) === !1) break;
                return e
            }, o.data = function (e, t, n) {
                if (void 0 === n) {
                    var s = e[o.expando], r = s && i[s];
                    if (void 0 === t) return r;
                    if (r && t in r) return r[t]
                } else if (void 0 !== t) {
                    var a = e[o.expando] || (e[o.expando] = ++o.uuid);
                    return i[a] = i[a] || {}, i[a][t] = n, n
                }
            }, o.removeData = function (e, t) {
                var n = e[o.expando], s = n && i[n];
                s && (t ? o.each(t, function (e, t) {
                    delete s[t]
                }) : delete i[n])
            }, o.extend = function () {
                var e, t, i, n, s, r, a = arguments[0] || {}, l = 1, c = arguments.length, d = !1;
                for ("boolean" == typeof a && (d = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== o.type(a) && (a = {}), l === c && (a = this, l--); l < c; l++) if (s = arguments[l]) for (n in s) s.hasOwnProperty(n) && (e = a[n], i = s[n], a !== i && (d && i && (o.isPlainObject(i) || (t = o.isArray(i))) ? (t ? (t = !1, r = e && o.isArray(e) ? e : []) : r = e && o.isPlainObject(e) ? e : {}, a[n] = o.extend(d, r, i)) : void 0 !== i && (a[n] = i)));
                return a
            }, o.queue = function (e, i, n) {
                if (e) {
                    i = (i || "fx") + "queue";
                    var s = o.data(e, i);
                    return n ? (!s || o.isArray(n) ? s = o.data(e, i, function (e, o) {
                        var i = o || [];
                        return e && (t(Object(e)) ? function (e, t) {
                            for (var o = +t.length, i = 0, n = e.length; i < o;) e[n++] = t[i++];
                            if (o !== o) for (; void 0 !== t[i];) e[n++] = t[i++];
                            e.length = n, e
                        }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                    }(n)) : s.push(n), s) : s || []
                }
            }, o.dequeue = function (e, t) {
                o.each(e.nodeType ? [e] : e, function (e, i) {
                    t = t || "fx";
                    var n = o.queue(i, t), s = n.shift();
                    "inprogress" === s && (s = n.shift()), s && ("fx" === t && n.unshift("inprogress"), s.call(i, function () {
                        o.dequeue(i, t)
                    }))
                })
            }, o.fn = o.prototype = {
                init: function (e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                }, offset: function () {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                }, position: function () {
                    var e = this[0], t = function (e) {
                            for (var t = e.offsetParent; t && "html" !== t.nodeName.toLowerCase() && t.style && "static" === t.style.position;) t = t.offsetParent;
                            return t || document
                        }(e), i = this.offset(),
                        n = /^(?:body|html)$/i.test(t.nodeName) ? {top: 0, left: 0} : o(t).offset();
                    return i.top -= parseFloat(e.style.marginTop) || 0, i.left -= parseFloat(e.style.marginLeft) || 0, t.style && (n.top += parseFloat(t.style.borderTopWidth) || 0, n.left += parseFloat(t.style.borderLeftWidth) || 0), {
                        top: i.top - n.top,
                        left: i.left - n.left
                    }
                }
            };
            var i = {};
            o.expando = "velocity" + (new Date).getTime(), o.uuid = 0;
            for (var n = {}, s = n.hasOwnProperty, r = n.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) n["[object " + a[l] + "]"] = a[l].toLowerCase();
            o.fn.init.prototype = o.fn, e.Velocity = {Utilities: o}
        }
    }(window), function (e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    "use strict";
    return function (e, t, o, i) {
        function n(e) {
            for (var t = -1, o = e ? e.length : 0, i = []; ++t < o;) {
                var n = e[t];
                n && i.push(n)
            }
            return i
        }

        function s(e) {
            return _.isWrapped(e) ? e = w.call(e) : _.isNode(e) && (e = [e]), e
        }

        function r(e) {
            var t = m.data(e, "velocity");
            return null === t ? i : t
        }

        function a(e, t) {
            var o = r(e);
            o && o.delayTimer && !o.delayPaused && (o.delayRemaining = o.delay - t + o.delayBegin, o.delayPaused = !0, clearTimeout(o.delayTimer.setTimeout))
        }

        function l(e, t) {
            var o = r(e);
            o && o.delayTimer && o.delayPaused && (o.delayPaused = !1, o.delayTimer.setTimeout = setTimeout(o.delayTimer.next, o.delayRemaining))
        }

        function c(e) {
            return function (t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function d(e, o, i, n) {
            function s(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function r(e, t) {
                return 3 * t - 6 * e
            }

            function a(e) {
                return 3 * e
            }

            function l(e, t, o) {
                return ((s(t, o) * e + r(t, o)) * e + a(t)) * e
            }

            function c(e, t, o) {
                return 3 * s(t, o) * e * e + 2 * r(t, o) * e + a(t)
            }

            function d(t, o) {
                for (var n = 0; n < f; ++n) {
                    var s = c(o, e, i);
                    if (0 === s) return o;
                    o -= (l(o, e, i) - t) / s
                }
                return o
            }

            function u() {
                for (var t = 0; t < v; ++t) z[t] = l(t * _, e, i)
            }

            function p(t, o, n) {
                var s, r, a = 0;
                do r = o + (n - o) / 2, s = l(r, e, i) - t, s > 0 ? n = r : o = r; while (Math.abs(s) > y && ++a < w);
                return r
            }

            function h(t) {
                for (var o = 0, n = 1, s = v - 1; n !== s && z[n] <= t; ++n) o += _;
                --n;
                var r = (t - z[n]) / (z[n + 1] - z[n]), a = o + r * _, l = c(a, e, i);
                return l >= g ? d(t, a) : 0 === l ? a : p(t, o, o + _)
            }

            function m() {
                T = !0, e === o && i === n || u()
            }

            var f = 4, g = .001, y = 1e-7, w = 10, v = 11, _ = 1 / (v - 1), S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var b = 0; b < 4; ++b) if ("number" != typeof arguments[b] || isNaN(arguments[b]) || !isFinite(arguments[b])) return !1;
            e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
            var z = S ? new Float32Array(v) : new Array(v), T = !1, k = function (t) {
                return T || m(), e === o && i === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(h(t), o, n)
            };
            k.getControlPoints = function () {
                return [{x: e, y: o}, {x: i, y: n}]
            };
            var x = "generateBezier(" + [e, o, i, n] + ")";
            return k.toString = function () {
                return x
            }, k
        }

        function u(e, t) {
            var o = e;
            return _.isString(e) ? T.Easings[e] || (o = !1) : o = _.isArray(e) && 1 === e.length ? c.apply(null, e) : _.isArray(e) && 2 === e.length ? k.apply(null, e.concat([t])) : !(!_.isArray(e) || 4 !== e.length) && d.apply(null, e), o === !1 && (o = T.Easings[T.defaults.easing] ? T.defaults.easing : z), o
        }

        function p(e) {
            if (e) {
                var t = T.timestamp && e !== !0 ? e : y.now(), o = T.State.calls.length;
                o > 1e4 && (T.State.calls = n(T.State.calls), o = T.State.calls.length);
                for (var s = 0; s < o; s++) if (T.State.calls[s]) {
                    var a = T.State.calls[s], l = a[0], c = a[2], d = a[3], u = !!d, g = null, w = a[5], v = a[6];
                    if (d || (d = T.State.calls[s][3] = t - 16), w) {
                        if (w.resume !== !0) continue;
                        d = a[3] = Math.round(t - v - 16), a[5] = null
                    }
                    v = a[6] = t - d;
                    for (var S = Math.min(v / c.duration, 1), b = 0, z = l.length; b < z; b++) {
                        var k = l[b], C = k.element;
                        if (r(C)) {
                            var W = !1;
                            if (c.display !== i && null !== c.display && "none" !== c.display) {
                                if ("flex" === c.display) {
                                    var P = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    m.each(P, function (e, t) {
                                        x.setPropertyValue(C, "display", t)
                                    })
                                }
                                x.setPropertyValue(C, "display", c.display)
                            }
                            c.visibility !== i && "hidden" !== c.visibility && x.setPropertyValue(C, "visibility", c.visibility);
                            for (var L in k) if (k.hasOwnProperty(L) && "element" !== L) {
                                var O, A = k[L], H = _.isString(A.easing) ? T.Easings[A.easing] : A.easing;
                                if (_.isString(A.pattern)) {
                                    var E = 1 === S ? function (e, t, o) {
                                        var i = A.endValue[t];
                                        return o ? Math.round(i) : i
                                    } : function (e, t, o) {
                                        var i = A.startValue[t], n = A.endValue[t] - i, s = i + n * H(S, c, n);
                                        return o ? Math.round(s) : s
                                    };
                                    O = A.pattern.replace(/{(\d+)(!)?}/g, E)
                                } else if (1 === S) O = A.endValue; else {
                                    var j = A.endValue - A.startValue;
                                    O = A.startValue + j * H(S, c, j)
                                }
                                if (!u && O === A.currentValue) continue;
                                if (A.currentValue = O, "tween" === L) g = O; else {
                                    var R;
                                    if (x.Hooks.registered[L]) {
                                        R = x.Hooks.getRoot(L);
                                        var I = r(C).rootPropertyValueCache[R];
                                        I && (A.rootPropertyValue = I)
                                    }
                                    var D = x.setPropertyValue(C, L, A.currentValue + (f < 9 && 0 === parseFloat(O) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                    x.Hooks.registered[L] && (x.Normalizations.registered[R] ? r(C).rootPropertyValueCache[R] = x.Normalizations.registered[R]("extract", null, D[1]) : r(C).rootPropertyValueCache[R] = D[1]), "transform" === D[0] && (W = !0)
                                }
                            }
                            c.mobileHA && r(C).transformCache.translate3d === i && (r(C).transformCache.translate3d = "(0px, 0px, 0px)", W = !0), W && x.flushTransformCache(C)
                        }
                    }
                    c.display !== i && "none" !== c.display && (T.State.calls[s][2].display = !1), c.visibility !== i && "hidden" !== c.visibility && (T.State.calls[s][2].visibility = !1), c.progress && c.progress.call(a[1], a[1], S, Math.max(0, d + c.duration - t), d, g), 1 === S && h(s)
                }
            }
            T.State.isTicking && $(p)
        }

        function h(e, t) {
            if (!T.State.calls[e]) return !1;
            for (var o = T.State.calls[e][0], n = T.State.calls[e][1], s = T.State.calls[e][2], a = T.State.calls[e][4], l = !1, c = 0, d = o.length; c < d; c++) {
                var u = o[c].element;
                t || s.loop || ("none" === s.display && x.setPropertyValue(u, "display", s.display), "hidden" === s.visibility && x.setPropertyValue(u, "visibility", s.visibility));
                var p = r(u);
                if (s.loop !== !0 && (m.queue(u)[1] === i || !/\.velocityQueueEntryFlag/i.test(m.queue(u)[1])) && p) {
                    p.isAnimating = !1, p.rootPropertyValueCache = {};
                    var h = !1;
                    m.each(x.Lists.transforms3D, function (e, t) {
                        var o = /^scale/.test(t) ? 1 : 0, n = p.transformCache[t];
                        p.transformCache[t] !== i && new RegExp("^\\(" + o + "[^.]").test(n) && (h = !0, delete p.transformCache[t])
                    }), s.mobileHA && (h = !0, delete p.transformCache.translate3d), h && x.flushTransformCache(u), x.Values.removeClass(u, "velocity-animating")
                }
                if (!t && s.complete && !s.loop && c === d - 1) try {
                    s.complete.call(n, n)
                } catch (e) {
                    setTimeout(function () {
                        throw e
                    }, 1)
                }
                a && s.loop !== !0 && a(n), p && s.loop === !0 && !t && (m.each(p.tweensContainer, function (e, t) {
                    if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
                        var o = t.startValue;
                        t.startValue = t.endValue, t.endValue = o
                    }
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), T(u, "reverse", {loop: !0, delay: s.delay})), s.queue !== !1 && m.dequeue(u, s.queue)
            }
            T.State.calls[e] = !1;
            for (var f = 0, g = T.State.calls.length; f < g; f++) if (T.State.calls[f] !== !1) {
                l = !0;
                break
            }
            l === !1 && (T.State.isTicking = !1, delete T.State.calls, T.State.calls = [])
        }

        var m, f = function () {
            if (o.documentMode) return o.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = o.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
            }
            return i
        }(), g = function () {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                var o, i = (new Date).getTime();
                return o = Math.max(0, 16 - (i - e)), e = i + o, setTimeout(function () {
                    t(i + o)
                }, o)
            }
        }(), y = function () {
            var e = t.performance || {};
            if ("function" != typeof e.now) {
                var o = e.timing && e.timing.navigationStart ? e.timing.navigationStart : (new Date).getTime();
                e.now = function () {
                    return (new Date).getTime() - o
                }
            }
            return e
        }(), w = function () {
            var e = Array.prototype.slice;
            try {
                return e.call(o.documentElement), e
            } catch (t) {
                return function (t, o) {
                    var i = this.length;
                    if ("number" != typeof t && (t = 0), "number" != typeof o && (o = i), this.slice) return e.call(this, t, o);
                    var n, s = [], r = t >= 0 ? t : Math.max(0, i + t), a = o < 0 ? i + o : Math.min(o, i), l = a - r;
                    if (l > 0) if (s = new Array(l), this.charAt) for (n = 0; n < l; n++) s[n] = this.charAt(r + n); else for (n = 0; n < l; n++) s[n] = this[r + n];
                    return s
                }
            }
        }(), v = function () {
            return Array.prototype.includes ? function (e, t) {
                return e.includes(t)
            } : Array.prototype.indexOf ? function (e, t) {
                return e.indexOf(t) >= 0
            } : function (e, t) {
                for (var o = 0; o < e.length; o++) if (e[o] === t) return !0;
                return !1
            }
        }, _ = {
            isNumber: function (e) {
                return "number" == typeof e
            }, isString: function (e) {
                return "string" == typeof e
            }, isArray: Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, isFunction: function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }, isNode: function (e) {
                return e && e.nodeType
            }, isWrapped: function (e) {
                return e && e !== t && _.isNumber(e.length) && !_.isString(e) && !_.isFunction(e) && !_.isNode(e) && (0 === e.length || _.isNode(e[0]))
            }, isSVG: function (e) {
                return t.SVGElement && e instanceof t.SVGElement
            }, isEmptyObject: function (e) {
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0
            }
        }, S = !1;
        if (e.fn && e.fn.jquery ? (m = e, S = !0) : m = t.Velocity.Utilities, f <= 8 && !S) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (f <= 7) return void (jQuery.fn.velocity = jQuery.fn.animate);
        var b = 400, z = "swing", T = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: o.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: [],
                delayedElements: {count: 0}
            },
            CSS: {},
            Utilities: m,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: b,
                easing: z,
                begin: i,
                complete: i,
                progress: i,
                display: i,
                visibility: i,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0,
                promiseRejectEmpty: !0
            },
            init: function (e) {
                m.data(e, "velocity", {
                    isSVG: _.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {major: 1, minor: 5, patch: 0},
            debug: !1,
            timestamp: !0,
            pauseAll: function (e) {
                var t = (new Date).getTime();
                m.each(T.State.calls, function (t, o) {
                    if (o) {
                        if (e !== i && (o[2].queue !== e || o[2].queue === !1)) return !0;
                        o[5] = {resume: !1}
                    }
                }), m.each(T.State.delayedElements, function (e, o) {
                    o && a(o, t)
                })
            },
            resumeAll: function (e) {
                var t = (new Date).getTime();
                m.each(T.State.calls, function (t, o) {
                    if (o) {
                        if (e !== i && (o[2].queue !== e || o[2].queue === !1)) return !0;
                        o[5] && (o[5].resume = !0)
                    }
                }), m.each(T.State.delayedElements, function (e, o) {
                    o && l(o, t)
                })
            }
        };
        t.pageYOffset !== i ? (T.State.scrollAnchor = t, T.State.scrollPropertyLeft = "pageXOffset", T.State.scrollPropertyTop = "pageYOffset") : (T.State.scrollAnchor = o.documentElement || o.body.parentNode || o.body, T.State.scrollPropertyLeft = "scrollLeft", T.State.scrollPropertyTop = "scrollTop");
        var k = function () {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, o, i) {
                var n = {x: t.x + i.dx * o, v: t.v + i.dv * o, tension: t.tension, friction: t.friction};
                return {dx: n.v, dv: e(n)}
            }

            function o(o, i) {
                var n = {dx: o.v, dv: e(o)}, s = t(o, .5 * i, n), r = t(o, .5 * i, s), a = t(o, i, r),
                    l = 1 / 6 * (n.dx + 2 * (s.dx + r.dx) + a.dx), c = 1 / 6 * (n.dv + 2 * (s.dv + r.dv) + a.dv);
                return o.x = o.x + l * i, o.v = o.v + c * i, o
            }

            return function e(t, i, n) {
                var s, r, a, l = {x: -1, v: 0, tension: null, friction: null}, c = [0], d = 0;
                for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, n = n || null, l.tension = t, l.friction = i, s = null !== n, s ? (d = e(t, i), r = d / n * .016) : r = .016; a = o(a || l, r), c.push(1 + a.x), d += 16, Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4;) ;
                return s ? function (e) {
                    return c[e * (c.length - 1) | 0]
                } : d
            }
        }();
        T.Easings = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, spring: function (e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, m.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
            T.Easings[t[0]] = d.apply(null, t[1])
        });
        var x = T.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            }, Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                colorNames: {
                    aliceblue: "240,248,255",
                    antiquewhite: "250,235,215",
                    aquamarine: "127,255,212",
                    aqua: "0,255,255",
                    azure: "240,255,255",
                    beige: "245,245,220",
                    bisque: "255,228,196",
                    black: "0,0,0",
                    blanchedalmond: "255,235,205",
                    blueviolet: "138,43,226",
                    blue: "0,0,255",
                    brown: "165,42,42",
                    burlywood: "222,184,135",
                    cadetblue: "95,158,160",
                    chartreuse: "127,255,0",
                    chocolate: "210,105,30",
                    coral: "255,127,80",
                    cornflowerblue: "100,149,237",
                    cornsilk: "255,248,220",
                    crimson: "220,20,60",
                    cyan: "0,255,255",
                    darkblue: "0,0,139",
                    darkcyan: "0,139,139",
                    darkgoldenrod: "184,134,11",
                    darkgray: "169,169,169",
                    darkgrey: "169,169,169",
                    darkgreen: "0,100,0",
                    darkkhaki: "189,183,107",
                    darkmagenta: "139,0,139",
                    darkolivegreen: "85,107,47",
                    darkorange: "255,140,0",
                    darkorchid: "153,50,204",
                    darkred: "139,0,0",
                    darksalmon: "233,150,122",
                    darkseagreen: "143,188,143",
                    darkslateblue: "72,61,139",
                    darkslategray: "47,79,79",
                    darkturquoise: "0,206,209",
                    darkviolet: "148,0,211",
                    deeppink: "255,20,147",
                    deepskyblue: "0,191,255",
                    dimgray: "105,105,105",
                    dimgrey: "105,105,105",
                    dodgerblue: "30,144,255",
                    firebrick: "178,34,34",
                    floralwhite: "255,250,240",
                    forestgreen: "34,139,34",
                    fuchsia: "255,0,255",
                    gainsboro: "220,220,220",
                    ghostwhite: "248,248,255",
                    gold: "255,215,0",
                    goldenrod: "218,165,32",
                    gray: "128,128,128",
                    grey: "128,128,128",
                    greenyellow: "173,255,47",
                    green: "0,128,0",
                    honeydew: "240,255,240",
                    hotpink: "255,105,180",
                    indianred: "205,92,92",
                    indigo: "75,0,130",
                    ivory: "255,255,240",
                    khaki: "240,230,140",
                    lavenderblush: "255,240,245",
                    lavender: "230,230,250",
                    lawngreen: "124,252,0",
                    lemonchiffon: "255,250,205",
                    lightblue: "173,216,230",
                    lightcoral: "240,128,128",
                    lightcyan: "224,255,255",
                    lightgoldenrodyellow: "250,250,210",
                    lightgray: "211,211,211",
                    lightgrey: "211,211,211",
                    lightgreen: "144,238,144",
                    lightpink: "255,182,193",
                    lightsalmon: "255,160,122",
                    lightseagreen: "32,178,170",
                    lightskyblue: "135,206,250",
                    lightslategray: "119,136,153",
                    lightsteelblue: "176,196,222",
                    lightyellow: "255,255,224",
                    limegreen: "50,205,50",
                    lime: "0,255,0",
                    linen: "250,240,230",
                    magenta: "255,0,255",
                    maroon: "128,0,0",
                    mediumaquamarine: "102,205,170",
                    mediumblue: "0,0,205",
                    mediumorchid: "186,85,211",
                    mediumpurple: "147,112,219",
                    mediumseagreen: "60,179,113",
                    mediumslateblue: "123,104,238",
                    mediumspringgreen: "0,250,154",
                    mediumturquoise: "72,209,204",
                    mediumvioletred: "199,21,133",
                    midnightblue: "25,25,112",
                    mintcream: "245,255,250",
                    mistyrose: "255,228,225",
                    moccasin: "255,228,181",
                    navajowhite: "255,222,173",
                    navy: "0,0,128",
                    oldlace: "253,245,230",
                    olivedrab: "107,142,35",
                    olive: "128,128,0",
                    orangered: "255,69,0",
                    orange: "255,165,0",
                    orchid: "218,112,214",
                    palegoldenrod: "238,232,170",
                    palegreen: "152,251,152",
                    paleturquoise: "175,238,238",
                    palevioletred: "219,112,147",
                    papayawhip: "255,239,213",
                    peachpuff: "255,218,185",
                    peru: "205,133,63",
                    pink: "255,192,203",
                    plum: "221,160,221",
                    powderblue: "176,224,230",
                    purple: "128,0,128",
                    red: "255,0,0",
                    rosybrown: "188,143,143",
                    royalblue: "65,105,225",
                    saddlebrown: "139,69,19",
                    salmon: "250,128,114",
                    sandybrown: "244,164,96",
                    seagreen: "46,139,87",
                    seashell: "255,245,238",
                    sienna: "160,82,45",
                    silver: "192,192,192",
                    skyblue: "135,206,235",
                    slateblue: "106,90,205",
                    slategray: "112,128,144",
                    snow: "255,250,250",
                    springgreen: "0,255,127",
                    steelblue: "70,130,180",
                    tan: "210,180,140",
                    teal: "0,128,128",
                    thistle: "216,191,216",
                    tomato: "255,99,71",
                    turquoise: "64,224,208",
                    violet: "238,130,238",
                    wheat: "245,222,179",
                    whitesmoke: "245,245,245",
                    white: "255,255,255",
                    yellowgreen: "154,205,50",
                    yellow: "255,255,0"
                }
            }, Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                }, registered: {}, register: function () {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var o, i, n;
                    if (f) for (o in x.Hooks.templates) if (x.Hooks.templates.hasOwnProperty(o)) {
                        i = x.Hooks.templates[o], n = i[0].split(" ");
                        var s = i[1].match(x.RegEx.valueSplit);
                        "Color" === n[0] && (n.push(n.shift()), s.push(s.shift()), x.Hooks.templates[o] = [n.join(" "), s.join(" ")])
                    }
                    for (o in x.Hooks.templates) if (x.Hooks.templates.hasOwnProperty(o)) {
                        i = x.Hooks.templates[o], n = i[0].split(" ");
                        for (var r in n) if (n.hasOwnProperty(r)) {
                            var a = o + n[r], l = r;
                            x.Hooks.registered[a] = [o, l]
                        }
                    }
                }, getRoot: function (e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                }, getUnit: function (e, t) {
                    var o = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                    return o && v(x.Lists.units, o) ? o : ""
                }, fixColors: function (e) {
                    return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (e, t, o) {
                        return x.Lists.colorNames.hasOwnProperty(o) ? (t ? t : "rgba(") + x.Lists.colorNames[o] + (t ? "" : ",1)") : t + o
                    })
                }, cleanRootPropertyValue: function (e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                }, extractValue: function (e, t) {
                    var o = x.Hooks.registered[e];
                    if (o) {
                        var i = o[0], n = o[1];
                        return t = x.Hooks.cleanRootPropertyValue(i, t), t.toString().match(x.RegEx.valueSplit)[n]
                    }
                    return t
                }, injectValue: function (e, t, o) {
                    var i = x.Hooks.registered[e];
                    if (i) {
                        var n, s = i[0], r = i[1];
                        return o = x.Hooks.cleanRootPropertyValue(s, o), n = o.toString().match(x.RegEx.valueSplit), n[r] = t, n.join(" ")
                    }
                    return o
                }
            }, Normalizations: {
                registered: {
                    clip: function (e, t, o) {
                        switch (e) {
                            case"name":
                                return "clip";
                            case"extract":
                                var i;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(o) ? i = o : (i = o.toString().match(x.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : o), i;
                            case"inject":
                                return "rect(" + o + ")"
                        }
                    }, blur: function (e, t, o) {
                        switch (e) {
                            case"name":
                                return T.State.isFirefox ? "filter" : "-webkit-filter";
                            case"extract":
                                var i = parseFloat(o);
                                if (!i && 0 !== i) {
                                    var n = o.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    i = n ? n[1] : 0
                                }
                                return i;
                            case"inject":
                                return parseFloat(o) ? "blur(" + o + ")" : "none"
                        }
                    }, opacity: function (e, t, o) {
                        if (f <= 8) switch (e) {
                            case"name":
                                return "filter";
                            case"extract":
                                var i = o.toString().match(/alpha\(opacity=(.*)\)/i);
                                return o = i ? i[1] / 100 : 1;
                            case"inject":
                                return t.style.zoom = 1, parseFloat(o) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(o), 10) + ")"
                        } else switch (e) {
                            case"name":
                                return "opacity";
                            case"extract":
                                return o;
                            case"inject":
                                return o
                        }
                    }
                }, register: function () {
                    function e(e, t, o) {
                        if ("border-box" === x.getPropertyValue(t, "boxSizing").toString().toLowerCase() === (o || !1)) {
                            var i, n, s = 0, r = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                                a = ["padding" + r[0], "padding" + r[1], "border" + r[0] + "Width", "border" + r[1] + "Width"];
                            for (i = 0; i < a.length; i++) n = parseFloat(x.getPropertyValue(t, a[i])), isNaN(n) || (s += n);
                            return o ? -s : s
                        }
                        return 0
                    }

                    function t(t, o) {
                        return function (i, n, s) {
                            switch (i) {
                                case"name":
                                    return t;
                                case"extract":
                                    return parseFloat(s) + e(t, n, o);
                                case"inject":
                                    return parseFloat(s) - e(t, n, o) + "px"
                            }
                        }
                    }

                    f && !(f > 9) || T.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var o = 0; o < x.Lists.transformsBase.length; o++) !function () {
                        var e = x.Lists.transformsBase[o];
                        x.Normalizations.registered[e] = function (t, o, n) {
                            switch (t) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return r(o) === i || r(o).transformCache[e] === i ? /^scale/i.test(e) ? 1 : 0 : r(o).transformCache[e].replace(/[()]/g, "");
                                case"inject":
                                    var s = !1;
                                    switch (e.substr(0, e.length - 1)) {
                                        case"translate":
                                            s = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                            break;
                                        case"scal":
                                        case"scale":
                                            T.State.isAndroid && r(o).transformCache[e] === i && n < 1 && (n = 1), s = !/(\d)$/i.test(n);
                                            break;
                                        case"skew":
                                            s = !/(deg|\d)$/i.test(n);
                                            break;
                                        case"rotate":
                                            s = !/(deg|\d)$/i.test(n)
                                    }
                                    return s || (r(o).transformCache[e] = "(" + n + ")"), r(o).transformCache[e]
                            }
                        }
                    }();
                    for (var n = 0; n < x.Lists.colors.length; n++) !function () {
                        var e = x.Lists.colors[n];
                        x.Normalizations.registered[e] = function (t, o, n) {
                            switch (t) {
                                case"name":
                                    return e;
                                case"extract":
                                    var s;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) s = n; else {
                                        var r, a = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(n) ? r = a[n] !== i ? a[n] : a.black : x.RegEx.isHex.test(n) ? r = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (r = a.black), s = (r || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return (!f || f > 8) && 3 === s.split(" ").length && (s += " 1"), s;
                                case"inject":
                                    return /^rgb/.test(n) ? n : (f <= 8 ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (f <= 8 ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                            }
                        }
                    }();
                    x.Normalizations.registered.innerWidth = t("width", !0), x.Normalizations.registered.innerHeight = t("height", !0), x.Normalizations.registered.outerWidth = t("width"), x.Normalizations.registered.outerHeight = t("height")
                }
            }, Names: {
                camelCase: function (e) {
                    return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase()
                    })
                }, SVGAttribute: function (e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || T.State.isAndroid && !T.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                }, prefixCheck: function (e) {
                    if (T.State.prefixMatches[e]) return [T.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], o = 0, i = t.length; o < i; o++) {
                        var n;
                        if (n = 0 === o ? e : t[o] + e.replace(/^\w/, function (e) {
                            return e.toUpperCase()
                        }), _.isString(T.State.prefixElement.style[n])) return T.State.prefixMatches[e] = n, [n, !0]
                    }
                    return [e, !1]
                }
            }, Values: {
                hexToRgb: function (e) {
                    var t, o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, o, i) {
                        return t + t + o + o + i + i
                    }), t = o.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function (e) {
                    return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                }, getUnitType: function (e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                }, getDisplayType: function (e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                }, addClass: function (e, t) {
                    if (e) if (e.classList) e.classList.add(t); else if (_.isString(e.className)) e.className += (e.className.length ? " " : "") + t; else {
                        var o = e.getAttribute(f <= 7 ? "className" : "class") || "";
                        e.setAttribute("class", o + (o ? " " : "") + t)
                    }
                }, removeClass: function (e, t) {
                    if (e) if (e.classList) e.classList.remove(t); else if (_.isString(e.className)) e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " "); else {
                        var o = e.getAttribute(f <= 7 ? "className" : "class") || "";
                        e.setAttribute("class", o.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "))
                    }
                }
            }, getPropertyValue: function (e, o, n, s) {
                function a(e, o) {
                    var n = 0;
                    if (f <= 8) n = m.css(e, o); else {
                        var l = !1;
                        /^(width|height)$/.test(o) && 0 === x.getPropertyValue(e, "display") && (l = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e)));
                        var c = function () {
                            l && x.setPropertyValue(e, "display", "none")
                        };
                        if (!s) {
                            if ("height" === o && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var d = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return c(), d
                            }
                            if ("width" === o && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var u = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return c(), u
                            }
                        }
                        var p;
                        p = r(e) === i ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : r(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === o && (o = "borderTopColor"), n = 9 === f && "filter" === o ? p.getPropertyValue(o) : p[o], "" !== n && null !== n || (n = e.style[o]), c()
                    }
                    if ("auto" === n && /^(top|right|bottom|left)$/i.test(o)) {
                        var h = a(e, "position");
                        ("fixed" === h || "absolute" === h && /top|left/i.test(o)) && (n = m(e).position()[o] + "px")
                    }
                    return n
                }

                var l;
                if (x.Hooks.registered[o]) {
                    var c = o, d = x.Hooks.getRoot(c);
                    n === i && (n = x.getPropertyValue(e, x.Names.prefixCheck(d)[0])), x.Normalizations.registered[d] && (n = x.Normalizations.registered[d]("extract", e, n)), l = x.Hooks.extractValue(c, n)
                } else if (x.Normalizations.registered[o]) {
                    var u, p;
                    u = x.Normalizations.registered[o]("name", e), "transform" !== u && (p = a(e, x.Names.prefixCheck(u)[0]), x.Values.isCSSNullValue(p) && x.Hooks.templates[o] && (p = x.Hooks.templates[o][1])), l = x.Normalizations.registered[o]("extract", e, p)
                }
                if (!/^[\d-]/.test(l)) {
                    var h = r(e);
                    if (h && h.isSVG && x.Names.SVGAttribute(o)) if (/^(height|width)$/i.test(o)) try {
                        l = e.getBBox()[o]
                    } catch (e) {
                        l = 0
                    } else l = e.getAttribute(o); else l = a(e, x.Names.prefixCheck(o)[0])
                }
                return x.Values.isCSSNullValue(l) && (l = 0), T.debug >= 2 && console.log("Get " + o + ": " + l), l
            }, setPropertyValue: function (e, o, i, n, s) {
                var a = o;
                if ("scroll" === o) s.container ? s.container["scroll" + s.direction] = i : "Left" === s.direction ? t.scrollTo(i, s.alternateValue) : t.scrollTo(s.alternateValue, i); else if (x.Normalizations.registered[o] && "transform" === x.Normalizations.registered[o]("name", e)) x.Normalizations.registered[o]("inject", e, i), a = "transform", i = r(e).transformCache[o]; else {
                    if (x.Hooks.registered[o]) {
                        var l = o, c = x.Hooks.getRoot(o);
                        n = n || x.getPropertyValue(e, c), i = x.Hooks.injectValue(l, i, n), o = c
                    }
                    if (x.Normalizations.registered[o] && (i = x.Normalizations.registered[o]("inject", e, i), o = x.Normalizations.registered[o]("name", e)), a = x.Names.prefixCheck(o)[0], f <= 8) try {
                        e.style[a] = i
                    } catch (e) {
                        T.debug && console.log("Browser does not support [" + i + "] for [" + a + "]")
                    } else {
                        var d = r(e);
                        d && d.isSVG && x.Names.SVGAttribute(o) ? e.setAttribute(o, i) : e.style[a] = i
                    }
                    T.debug >= 2 && console.log("Set " + o + " (" + a + "): " + i)
                }
                return [a, i]
            }, flushTransformCache: function (e) {
                var t = "", o = r(e);
                if ((f || T.State.isAndroid && !T.State.isChrome) && o && o.isSVG) {
                    var i = function (t) {
                        return parseFloat(x.getPropertyValue(e, t))
                    }, n = {
                        translate: [i("translateX"), i("translateY")],
                        skewX: [i("skewX")],
                        skewY: [i("skewY")],
                        scale: 1 !== i("scale") ? [i("scale"), i("scale")] : [i("scaleX"), i("scaleY")],
                        rotate: [i("rotateZ"), 0, 0]
                    };
                    m.each(r(e).transformCache, function (e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (t += e + "(" + n[e].join(" ") + ") ", delete n[e])
                    })
                } else {
                    var s, a;
                    m.each(r(e).transformCache, function (o) {
                        return s = r(e).transformCache[o], "transformPerspective" === o ? (a = s, !0) : (9 === f && "rotateZ" === o && (o = "rotate"), void (t += o + s + " "))
                    }), a && (t = "perspective" + a + " " + t)
                }
                x.setPropertyValue(e, "transform", t)
            }
        };
        x.Hooks.register(), x.Normalizations.register(), T.hook = function (e, t, o) {
            var n;
            return e = s(e), m.each(e, function (e, s) {
                if (r(s) === i && T.init(s), o === i) n === i && (n = x.getPropertyValue(s, t)); else {
                    var a = x.setPropertyValue(s, t, o);
                    "transform" === a[0] && T.CSS.flushTransformCache(s), n = a
                }
            }), n
        };
        var C = function () {
            function e() {
                return d ? k.promise || null : f
            }

            function n(e, n) {
                function s(s) {
                    var d, h;
                    if (l.begin && 0 === W) try {
                        l.begin.call(y, y)
                    } catch (e) {
                        setTimeout(function () {
                            throw e
                        }, 1)
                    }
                    if ("scroll" === O) {
                        var f, g, b, z = /^x$/i.test(l.axis) ? "Left" : "Top", C = parseFloat(l.offset) || 0;
                        l.container ? _.isWrapped(l.container) || _.isNode(l.container) ? (l.container = l.container[0] || l.container, f = l.container["scroll" + z], b = f + m(e).position()[z.toLowerCase()] + C) : l.container = null : (f = T.State.scrollAnchor[T.State["scrollProperty" + z]], g = T.State.scrollAnchor[T.State["scrollProperty" + ("Left" === z ? "Top" : "Left")]], b = m(e).offset()[z.toLowerCase()] + C), c = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: f,
                                currentValue: f,
                                endValue: b,
                                unitType: "",
                                easing: l.easing,
                                scrollData: {container: l.container, direction: z, alternateValue: g}
                            }, element: e
                        }, T.debug && console.log("tweensContainer (scroll): ", c.scroll, e)
                    } else if ("reverse" === O) {
                        if (!(d = r(e))) return;
                        if (!d.tweensContainer) return void m.dequeue(e, l.queue);
                        "none" === d.opts.display && (d.opts.display = "auto"), "hidden" === d.opts.visibility && (d.opts.visibility = "visible"), d.opts.loop = !1, d.opts.begin = null, d.opts.complete = null, S.easing || delete l.easing, S.duration || delete l.duration, l = m.extend({}, d.opts, l), h = m.extend(!0, {}, d ? d.tweensContainer : null);
                        for (var P in h) if (h.hasOwnProperty(P) && "element" !== P) {
                            var L = h[P].startValue;
                            h[P].startValue = h[P].currentValue = h[P].endValue, h[P].endValue = L, _.isEmptyObject(S) || (h[P].easing = l.easing), T.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(h[P]), e)
                        }
                        c = h
                    } else if ("start" === O) {
                        d = r(e), d && d.tweensContainer && d.isAnimating === !0 && (h = d.tweensContainer);
                        var A = function (n, s) {
                            var r, u = x.Hooks.getRoot(n), p = !1, f = s[0], g = s[1], y = s[2];
                            if (!(d && d.isSVG || "tween" === u || x.Names.prefixCheck(u)[1] !== !1 || x.Normalizations.registered[u] !== i)) return void (T.debug && console.log("Skipping [" + u + "] due to a lack of browser support."));
                            (l.display !== i && null !== l.display && "none" !== l.display || l.visibility !== i && "hidden" !== l.visibility) && /opacity|filter/.test(n) && !y && 0 !== f && (y = 0), l._cacheValues && h && h[n] ? (y === i && (y = h[n].endValue + h[n].unitType), p = d.rootPropertyValueCache[u]) : x.Hooks.registered[n] ? y === i ? (p = x.getPropertyValue(e, u), y = x.getPropertyValue(e, n, p)) : p = x.Hooks.templates[u][1] : y === i && (y = x.getPropertyValue(e, n));
                            var w, v, S, b = !1, z = function (e, t) {
                                var o, i;
                                return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                    return o = e, ""
                                }), o || (o = x.Values.getUnitType(e)), [i, o]
                            };
                            if (y !== f && _.isString(y) && _.isString(f)) {
                                r = "";
                                var k = 0, C = 0, $ = [], W = [], P = 0, L = 0, O = 0;
                                for (y = x.Hooks.fixColors(y), f = x.Hooks.fixColors(f); k < y.length && C < f.length;) {
                                    var A = y[k], H = f[C];
                                    if (/[\d\.-]/.test(A) && /[\d\.-]/.test(H)) {
                                        for (var E = A, j = H, R = ".", D = "."; ++k < y.length;) {
                                            if ((A = y[k]) === R) R = ".."; else if (!/\d/.test(A)) break;
                                            E += A
                                        }
                                        for (; ++C < f.length;) {
                                            if ((H = f[C]) === D) D = ".."; else if (!/\d/.test(H)) break;
                                            j += H
                                        }
                                        var F = x.Hooks.getUnit(y, k), N = x.Hooks.getUnit(f, C);
                                        if (k += F.length, C += N.length, F === N) E === j ? r += E + F : (r += "{" + $.length + (L ? "!" : "") + "}" + F, $.push(parseFloat(E)), W.push(parseFloat(j))); else {
                                            var M = parseFloat(E), V = parseFloat(j);
                                            r += (P < 5 ? "calc" : "") + "(" + (M ? "{" + $.length + (L ? "!" : "") + "}" : "0") + F + " + " + (V ? "{" + ($.length + (M ? 1 : 0)) + (L ? "!" : "") + "}" : "0") + N + ")", M && ($.push(M), W.push(0)), V && ($.push(0), W.push(V))
                                        }
                                    } else {
                                        if (A !== H) {
                                            P = 0;
                                            break
                                        }
                                        r += A, k++, C++, 0 === P && "c" === A || 1 === P && "a" === A || 2 === P && "l" === A || 3 === P && "c" === A || P >= 4 && "(" === A ? P++ : (P && P < 5 || P >= 4 && ")" === A && --P < 5) && (P = 0), 0 === L && "r" === A || 1 === L && "g" === A || 2 === L && "b" === A || 3 === L && "a" === A || L >= 3 && "(" === A ? (3 === L && "a" === A && (O = 1), L++) : O && "," === A ? ++O > 3 && (L = O = 0) : (O && L < (O ? 5 : 4) || L >= (O ? 4 : 3) && ")" === A && --L < (O ? 5 : 4)) && (L = O = 0)
                                    }
                                }
                                k === y.length && C === f.length || (T.debug && console.error('Trying to pattern match mis-matched strings ["' + f + '", "' + y + '"]'), r = i), r && ($.length ? (T.debug && console.log('Pattern found "' + r + '" -> ', $, W, "[" + y + "," + f + "]"), y = $, f = W, v = S = "") : r = i)
                            }
                            if (r || (w = z(n, y), y = w[0], S = w[1], w = z(n, f), f = w[0].replace(/^([+-\/*])=/, function (e, t) {
                                return b = t, ""
                            }), v = w[1], y = parseFloat(y) || 0, f = parseFloat(f) || 0, "%" === v && (/^(fontSize|lineHeight)$/.test(n) ? (f /= 100, v = "em") : /^scale/.test(n) ? (f /= 100, v = "") : /(Red|Green|Blue)$/i.test(n) && (f = f / 100 * 255, v = ""))), /[\/*]/.test(b)) v = S; else if (S !== v && 0 !== y) if (0 === f) v = S; else {
                                a = a || function () {
                                    var i = {
                                            myParent: e.parentNode || o.body,
                                            position: x.getPropertyValue(e, "position"),
                                            fontSize: x.getPropertyValue(e, "fontSize")
                                        }, n = i.position === I.lastPosition && i.myParent === I.lastParent,
                                        s = i.fontSize === I.lastFontSize;
                                    I.lastParent = i.myParent, I.lastPosition = i.position, I.lastFontSize = i.fontSize;
                                    var r = {};
                                    if (s && n) r.emToPx = I.lastEmToPx, r.percentToPxWidth = I.lastPercentToPxWidth, r.percentToPxHeight = I.lastPercentToPxHeight; else {
                                        var a = d && d.isSVG ? o.createElementNS("http://www.w3.org/2000/svg", "rect") : o.createElement("div");
                                        T.init(a), i.myParent.appendChild(a), m.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                            T.CSS.setPropertyValue(a, t, "hidden")
                                        }), T.CSS.setPropertyValue(a, "position", i.position), T.CSS.setPropertyValue(a, "fontSize", i.fontSize), T.CSS.setPropertyValue(a, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                            T.CSS.setPropertyValue(a, t, "100%")
                                        }), T.CSS.setPropertyValue(a, "paddingLeft", "100em"), r.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(a, "width", null, !0)) || 1) / 100, r.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(a, "height", null, !0)) || 1) / 100, r.emToPx = I.lastEmToPx = (parseFloat(x.getPropertyValue(a, "paddingLeft")) || 1) / 100, i.myParent.removeChild(a)
                                    }
                                    return null === I.remToPx && (I.remToPx = parseFloat(x.getPropertyValue(o.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(t.innerWidth) / 100, I.vhToPx = parseFloat(t.innerHeight) / 100), r.remToPx = I.remToPx, r.vwToPx = I.vwToPx, r.vhToPx = I.vhToPx, T.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(r), e), r
                                }();
                                var B = /margin|padding|left|right|width|text|word|letter/i.test(n) || /X$/.test(n) || "x" === n ? "x" : "y";
                                switch (S) {
                                    case"%":
                                        y *= "x" === B ? a.percentToPxWidth : a.percentToPxHeight;
                                        break;
                                    case"px":
                                        break;
                                    default:
                                        y *= a[S + "ToPx"]
                                }
                                switch (v) {
                                    case"%":
                                        y *= 1 / ("x" === B ? a.percentToPxWidth : a.percentToPxHeight);
                                        break;
                                    case"px":
                                        break;
                                    default:
                                        y *= 1 / a[v + "ToPx"]
                                }
                            }
                            switch (b) {
                                case"+":
                                    f = y + f;
                                    break;
                                case"-":
                                    f = y - f;
                                    break;
                                case"*":
                                    f *= y;
                                    break;
                                case"/":
                                    f = y / f
                            }
                            c[n] = {
                                rootPropertyValue: p,
                                startValue: y,
                                currentValue: y,
                                endValue: f,
                                unitType: v,
                                easing: g
                            }, r && (c[n].pattern = r), T.debug && console.log("tweensContainer (" + n + "): " + JSON.stringify(c[n]), e)
                        };
                        for (var H in w) if (w.hasOwnProperty(H)) {
                            var E = x.Names.camelCase(H), j = function (t, o) {
                                var i, s, r;
                                return _.isFunction(t) && (t = t.call(e, n, $)), _.isArray(t) ? (i = t[0], !_.isArray(t[1]) && /^[\d-]/.test(t[1]) || _.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? r = t[1] : _.isString(t[1]) && !x.RegEx.isHex.test(t[1]) && T.Easings[t[1]] || _.isArray(t[1]) ? (s = o ? t[1] : u(t[1], l.duration), r = t[2]) : r = t[1] || t[2]) : i = t, o || (s = s || l.easing), _.isFunction(i) && (i = i.call(e, n, $)), _.isFunction(r) && (r = r.call(e, n, $)), [i || 0, s, r]
                            }(w[H]);
                            if (v(x.Lists.colors, E)) {
                                var R = j[0], F = j[1], N = j[2];
                                if (x.RegEx.isHex.test(R)) {
                                    for (var M = ["Red", "Green", "Blue"], V = x.Values.hexToRgb(R), B = N ? x.Values.hexToRgb(N) : i, q = 0; q < M.length; q++) {
                                        var U = [V[q]];
                                        F && U.push(F), B !== i && U.push(B[q]), A(E + M[q], U)
                                    }
                                    continue
                                }
                            }
                            A(E, j)
                        }
                        c.element = e
                    }
                    c.element && (x.Values.addClass(e, "velocity-animating"), D.push(c), d = r(e), d && ("" === l.queue && (d.tweensContainer = c, d.opts = l), d.isAnimating = !0), W === $ - 1 ? (T.State.calls.push([D, y, l, null, k.resolver, null, 0]), T.State.isTicking === !1 && (T.State.isTicking = !0, p())) : W++)
                }

                var a, l = m.extend({}, T.defaults, S), c = {};
                switch (r(e) === i && T.init(e), parseFloat(l.delay) && l.queue !== !1 && m.queue(e, l.queue, function (t) {
                    T.velocityQueueEntryFlag = !0;
                    var o = T.State.delayedElements.count++;
                    T.State.delayedElements[o] = e;
                    var i = function (e) {
                        return function () {
                            T.State.delayedElements[e] = !1, t()
                        }
                    }(o);
                    r(e).delayBegin = (new Date).getTime(), r(e).delay = parseFloat(l.delay), r(e).delayTimer = {
                        setTimeout: setTimeout(t, parseFloat(l.delay)),
                        next: i
                    }
                }), l.duration.toString().toLowerCase()) {
                    case"fast":
                        l.duration = 200;
                        break;
                    case"normal":
                        l.duration = b;
                        break;
                    case"slow":
                        l.duration = 600;
                        break;
                    default:
                        l.duration = parseFloat(l.duration) || 1
                }
                if (T.mock !== !1 && (T.mock === !0 ? l.duration = l.delay = 1 : (l.duration *= parseFloat(T.mock) || 1, l.delay *= parseFloat(T.mock) || 1)), l.easing = u(l.easing, l.duration), l.begin && !_.isFunction(l.begin) && (l.begin = null), l.progress && !_.isFunction(l.progress) && (l.progress = null), l.complete && !_.isFunction(l.complete) && (l.complete = null), l.display !== i && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = T.CSS.Values.getDisplayType(e))), l.visibility !== i && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && T.State.isMobile && !T.State.isGingerbread, l.queue === !1) if (l.delay) {
                    var d = T.State.delayedElements.count++;
                    T.State.delayedElements[d] = e;
                    var h = function (e) {
                        return function () {
                            T.State.delayedElements[e] = !1, s()
                        }
                    }(d);
                    r(e).delayBegin = (new Date).getTime(), r(e).delay = parseFloat(l.delay), r(e).delayTimer = {
                        setTimeout: setTimeout(s, parseFloat(l.delay)),
                        next: h
                    }
                } else s(); else m.queue(e, l.queue, function (e, t) {
                    return t === !0 ? (k.promise && k.resolver(y), !0) : (T.velocityQueueEntryFlag = !0, void s(e))
                });
                "" !== l.queue && "fx" !== l.queue || "inprogress" === m.queue(e)[0] || m.dequeue(e)
            }

            var c, d, f, g, y, w, S,
                z = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || _.isString(arguments[0].properties));
            _.isWrapped(this) ? (d = !1, g = 0, y = this, f = this) : (d = !0, g = 1, y = z ? arguments[0].elements || arguments[0].e : arguments[0]);
            var k = {promise: null, resolver: null, rejecter: null};
            if (d && T.Promise && (k.promise = new T.Promise(function (e, t) {
                k.resolver = e, k.rejecter = t
            })), z ? (w = arguments[0].properties || arguments[0].p, S = arguments[0].options || arguments[0].o) : (w = arguments[g], S = arguments[g + 1]), !(y = s(y))) return void (k.promise && (w && S && S.promiseRejectEmpty === !1 ? k.resolver() : k.rejecter()));
            var $ = y.length, W = 0;
            if (!/^(stop|finish|finishAll|pause|resume)$/i.test(w) && !m.isPlainObject(S)) {
                var P = g + 1;
                S = {};
                for (var L = P; L < arguments.length; L++) _.isArray(arguments[L]) || !/^(fast|normal|slow)$/i.test(arguments[L]) && !/^\d/.test(arguments[L]) ? _.isString(arguments[L]) || _.isArray(arguments[L]) ? S.easing = arguments[L] : _.isFunction(arguments[L]) && (S.complete = arguments[L]) : S.duration = arguments[L]
            }
            var O;
            switch (w) {
                case"scroll":
                    O = "scroll";
                    break;
                case"reverse":
                    O = "reverse";
                    break;
                case"pause":
                    var A = (new Date).getTime();
                    return m.each(y, function (e, t) {
                        a(t, A)
                    }), m.each(T.State.calls, function (e, t) {
                        var o = !1;
                        t && m.each(t[1], function (e, n) {
                            var s = S === i ? "" : S;
                            return s !== !0 && t[2].queue !== s && (S !== i || t[2].queue !== !1) || (m.each(y, function (e, i) {
                                if (i === n) return t[5] = {resume: !1}, o = !0, !1
                            }), !o && void 0)
                        })
                    }), e();
                case"resume":
                    return m.each(y, function (e, t) {
                        l(t, A)
                    }), m.each(T.State.calls, function (e, t) {
                        var o = !1;
                        t && m.each(t[1], function (e, n) {
                            var s = S === i ? "" : S;
                            return s !== !0 && t[2].queue !== s && (S !== i || t[2].queue !== !1) || !t[5] || (m.each(y, function (e, i) {
                                if (i === n) return t[5].resume = !0, o = !0, !1
                            }), !o && void 0)
                        })
                    }), e();
                case"finish":
                case"finishAll":
                case"stop":
                    m.each(y, function (e, t) {
                        r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer), "finishAll" !== w || S !== !0 && !_.isString(S) || (m.each(m.queue(t, _.isString(S) ? S : ""), function (e, t) {
                            _.isFunction(t) && t()
                        }), m.queue(t, _.isString(S) ? S : "", []))
                    });
                    var H = [];
                    return m.each(T.State.calls, function (e, t) {
                        t && m.each(t[1], function (o, n) {
                            var s = S === i ? "" : S;
                            return s !== !0 && t[2].queue !== s && (S !== i || t[2].queue !== !1) || void m.each(y, function (o, i) {
                                if (i === n) if ((S === !0 || _.isString(S)) && (m.each(m.queue(i, _.isString(S) ? S : ""), function (e, t) {
                                    _.isFunction(t) && t(null, !0)
                                }), m.queue(i, _.isString(S) ? S : "", [])), "stop" === w) {
                                    var a = r(i);
                                    a && a.tweensContainer && s !== !1 && m.each(a.tweensContainer, function (e, t) {
                                        t.endValue = t.currentValue
                                    }), H.push(e)
                                } else "finish" !== w && "finishAll" !== w || (t[2].duration = 1)
                            })
                        })
                    }), "stop" === w && (m.each(H, function (e, t) {
                        h(t, !0)
                    }), k.promise && k.resolver(y)), e();
                default:
                    if (!m.isPlainObject(w) || _.isEmptyObject(w)) {
                        if (_.isString(w) && T.Redirects[w]) {
                            c = m.extend({}, S);
                            var E = c.duration, j = c.delay || 0;
                            return c.backwards === !0 && (y = m.extend(!0, [], y).reverse()), m.each(y, function (e, t) {
                                parseFloat(c.stagger) ? c.delay = j + parseFloat(c.stagger) * e : _.isFunction(c.stagger) && (c.delay = j + c.stagger.call(t, e, $)), c.drag && (c.duration = parseFloat(E) || (/^(callout|transition)/.test(w) ? 1e3 : b), c.duration = Math.max(c.duration * (c.backwards ? 1 - e / $ : (e + 1) / $), .75 * c.duration, 200)), T.Redirects[w].call(t, t, c || {}, e, $, y, k.promise ? k : i)
                            }), e()
                        }
                        var R = "Velocity: First argument (" + w + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return k.promise ? k.rejecter(new Error(R)) : t.console && console.log(R), e()
                    }
                    O = "start"
            }
            var I = {
                lastParent: null,
                lastPosition: null,
                lastFontSize: null,
                lastPercentToPxWidth: null,
                lastPercentToPxHeight: null,
                lastEmToPx: null,
                remToPx: null,
                vwToPx: null,
                vhToPx: null
            }, D = [];
            m.each(y, function (e, t) {
                _.isNode(t) && n(t, e)
            }), c = m.extend({}, T.defaults, S), c.loop = parseInt(c.loop, 10);
            var F = 2 * c.loop - 1;
            if (c.loop) for (var N = 0; N < F; N++) {
                var M = {delay: c.delay, progress: c.progress};
                N === F - 1 && (M.display = c.display, M.visibility = c.visibility, M.complete = c.complete), C(y, "reverse", M)
            }
            return e()
        };
        T = m.extend(C, T), T.animate = C;
        var $ = t.requestAnimationFrame || g;
        if (!T.State.isMobile && o.hidden !== i) {
            var W = function () {
                o.hidden ? ($ = function (e) {
                    return setTimeout(function () {
                        e(!0)
                    }, 16)
                }, p()) : $ = t.requestAnimationFrame || g
            };
            W(), o.addEventListener("visibilitychange", W)
        }
        return e.Velocity = T, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = T.defaults), m.each(["Down", "Up"], function (e, t) {
            T.Redirects["slide" + t] = function (e, o, n, s, r, a) {
                var l = m.extend({}, o), c = l.begin, d = l.complete, u = {},
                    p = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};
                l.display === i && (l.display = "Down" === t ? "inline" === T.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                    0 === n && c && c.call(r, r);
                    for (var o in p) if (p.hasOwnProperty(o)) {
                        u[o] = e.style[o];
                        var i = x.getPropertyValue(e, o);
                        p[o] = "Down" === t ? [i, 0] : [0, i]
                    }
                    u.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, l.complete = function () {
                    for (var t in u) u.hasOwnProperty(t) && (e.style[t] = u[t]);
                    n === s - 1 && (d && d.call(r, r), a && a.resolver(r))
                }, T(e, p, l)
            }
        }), m.each(["In", "Out"], function (e, t) {
            T.Redirects["fade" + t] = function (e, o, n, s, r, a) {
                var l = m.extend({}, o), c = l.complete, d = {opacity: "In" === t ? 1 : 0};
                0 !== n && (l.begin = null), l.complete = n !== s - 1 ? null : function () {
                    c && c.call(r, r), a && a.resolver(r)
                }, l.display === i && (l.display = "In" === t ? "auto" : "none"), T(this, d, l)
            }
        }), T
    }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
}),/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
    !function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function (e) {
        "use strict";

        function t(e) {
            if (e instanceof Date) return e;
            if (String(e).match(r)) return String(e).match(/^[0-9]*$/) && (e = Number(e)), String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")), new Date(e);
            throw new Error("Couldn't cast `" + e + "` to a date object.")
        }

        function o(e) {
            var t = e.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
            return new RegExp(t)
        }

        function i(e) {
            return function (t) {
                var i = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (i) for (var s = 0, r = i.length; s < r; ++s) {
                    var a = i[s].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), c = o(a[0]), d = a[1] || "", u = a[3] || "",
                        p = null;
                    a = a[2], l.hasOwnProperty(a) && (p = l[a], p = Number(e[p])), null !== p && ("!" === d && (p = n(u, p)), "" === d && p < 10 && (p = "0" + p.toString()), t = t.replace(c, p.toString()))
                }
                return t = t.replace(/%%/, "%")
            }
        }

        function n(e, t) {
            var o = "s", i = "";
            return e && (e = e.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === e.length ? o = e[0] : (i = e[0], o = e[1])), Math.abs(t) > 1 ? o : i
        }

        var s = [], r = [], a = {precision: 100, elapse: !1, defer: !1};
        r.push(/^[0-9]*$/.source), r.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), r.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), r = new RegExp(r.join("|"));
        var l = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        }, c = function (t, o, i) {
            this.el = t, this.$el = e(t), this.interval = null, this.offset = {}, this.options = e.extend({}, a), this.instanceNumber = s.length, s.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = e.extend({}, a, i)), this.setFinalDate(o), this.options.defer === !1 && this.start()
        };
        e.extend(c.prototype, {
            start: function () {
                null !== this.interval && clearInterval(this.interval);
                var e = this;
                this.update(), this.interval = setInterval(function () {
                    e.update.call(e)
                }, this.options.precision)
            }, stop: function () {
                clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
            }, toggle: function () {
                this.interval ? this.stop() : this.start()
            }, pause: function () {
                this.stop()
            }, resume: function () {
                this.start()
            }, remove: function () {
                this.stop.call(this), s[this.instanceNumber] = null, delete this.$el.data().countdownInstance
            }, setFinalDate: function (e) {
                this.finalDate = t(e)
            }, update: function () {
                if (0 === this.$el.closest("html").length) return void this.remove();
                var t, o = void 0 !== e._data(this.el, "events"), i = new Date;
                t = this.finalDate.getTime() - i.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft !== t && o && (this.totalSecsLeft = t, this.elapsed = i >= this.finalDate, this.offset = {
                    seconds: this.totalSecsLeft % 60,
                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                    weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                    years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()),
                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                    totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                    totalMinutes: Math.floor(this.totalSecsLeft / 60),
                    totalSeconds: this.totalSecsLeft
                }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
            }, dispatchEvent: function (t) {
                var o = e.Event(t + ".countdown");
                o.finalDate = this.finalDate, o.elapsed = this.elapsed, o.offset = e.extend({}, this.offset), o.strftime = i(this.offset), this.$el.trigger(o)
            }
        }), e.fn.countdown = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                var o = e(this).data("countdown-instance");
                if (void 0 !== o) {
                    var i = s[o], n = t[0];
                    c.prototype.hasOwnProperty(n) ? i[n].apply(i, t.slice(1)) : null === String(n).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, n), i.start()) : e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, n))
                } else new c(this, t[0], t[1])
            })
        }
    }),/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
    function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function (e) {
        function t(e) {
            return a.raw ? e : encodeURIComponent(e)
        }

        function o(e) {
            return a.raw ? e : decodeURIComponent(e)
        }

        function i(e) {
            return t(a.json ? JSON.stringify(e) : String(e))
        }

        function n(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(r, " ")), a.json ? JSON.parse(e) : e
            } catch (e) {
            }
        }

        function s(t, o) {
            var i = a.raw ? t : n(t);
            return e.isFunction(o) ? o(i) : i
        }

        var r = /\+/g, a = e.cookie = function (n, r, l) {
            if (void 0 !== r && !e.isFunction(r)) {
                if (l = e.extend({}, a.defaults, l), "number" == typeof l.expires) {
                    var c = l.expires, d = l.expires = new Date;
                    d.setTime(+d + 864e5 * c)
                }
                return document.cookie = [t(n), "=", i(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var u = n ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], h = 0, m = p.length; h < m; h++) {
                var f = p[h].split("="), g = o(f.shift()), y = f.join("=");
                if (n && n === g) {
                    u = s(y, r);
                    break
                }
                n || void 0 === (y = s(y)) || (u[g] = y)
            }
            return u
        };
        a.defaults = {}, e.removeCookie = function (t, o) {
            return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, o, {expires: -1})), !e.cookie(t))
        }
    }), "undefined" == typeof window.Shopify && (window.Shopify = {}), Shopify.money_format = "${{amount}}", Shopify.onError = function (e, t) {
    var n = eval("(" + e.responseText + ")");
    n.message ? alert(n.message + "(" + n.status + "): " + n.description) : alert("Error : " + Shopify.fullMessagesFromErrors(n).join("; ") + ".")
}, Shopify.fullMessagesFromErrors = function (e) {
    var t = [];
    return jQuery.each(e, function (e, o) {
        jQuery.each(o, function (o, i) {
            t.push(e + " " + i)
        })
    }), t
}, Shopify.onCartUpdate = function (e) {
    alert("There are now " + e.item_count + " items in the cart.")
}, Shopify.onCartShippingRatesUpdate = function (e, t) {
    var o = "";
    t.zip && (o += t.zip + ", "), t.province && (o += t.province + ", "), o += t.country, alert("There are " + e.length + " shipping rates available for " + o + ", starting at " + Shopify.formatMoney(e[0].price) + ".")
}, Shopify.onItemAdded = function (e) {
    alert(e.title + " was added to your shopping cart.")
}, Shopify.onProduct = function (e) {
    alert("Received everything we ever wanted to know about " + e.title)
}, Shopify.formatMoney = function (e, t) {
    function o(e, t) {
        return "undefined" == typeof e ? t : e
    }

    function i(e, t, i, n) {
        if (t = o(t, 2), i = o(i, ","), n = o(n, "."), isNaN(e) || null == e) return 0;
        e = (e / 100).toFixed(t);
        var s = e.split("."), r = s[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i), a = s[1] ? n + s[1] : "";
        return r + a
    }

    "string" == typeof e && (e = e.replace(".", ""));
    var n = "", s = /\{\{\s*(\w+)\s*\}\}/, r = t || this.money_format;
    switch (r.match(s)[1]) {
        case"amount":
            n = i(e, 2);
            break;
        case"amount_no_decimals":
            n = i(e, 0);
            break;
        case"amount_with_comma_separator":
            n = i(e, 2, ".", ",");
            break;
        case"amount_no_decimals_with_comma_separator":
            n = i(e, 0, ".", ",")
    }
    return r.replace(s, n)
}, Shopify.resizeImage = function (e, t) {
    try {
        if ("original" == t) return e;
        var o = e.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
        return o[1] + "_" + t + "." + o[2]
    } catch (t) {
        return e
    }
}, Shopify.addItem = function (e, t, o) {
    var t = t || 1, i = {
        type: "POST",
        url: "/cart/add.js",
        data: "quantity=" + t + "&id=" + e,
        dataType: "json",
        success: function (e) {
            "function" == typeof o ? o(e) : Shopify.onItemAdded(e)
        },
        error: function (e, t) {
            Shopify.onError(e, t)
        }
    };
    jQuery.ajax(i)
}, Shopify.addItemFromForm = function (e, t) {
    var o = {
        type: "POST",
        url: "/cart/add.js",
        data: jQuery("#" + e).serialize(),
        dataType: "json",
        success: function (e) {
            "function" == typeof t ? t(e) : Shopify.onItemAdded(e)
        },
        error: function (e, t) {
            Shopify.onError(e, t)
        }
    };
    jQuery.ajax(o)
}, Shopify.getCart = function (e) {
    jQuery.getJSON("/cart.js", function (t, o) {
        "function" == typeof e ? e(t) : Shopify.onCartUpdate(t)
    })
}, Shopify.pollForCartShippingRatesForDestination = function (e, t, o) {
    o = o || Shopify.onError;
    var i = function () {
        jQuery.ajax("/cart/async_shipping_rates", {
            dataType: "json", success: function (o, n, s) {
                200 === s.status ? "function" == typeof t ? t(o.shipping_rates, e) : Shopify.onCartShippingRatesUpdate(o.shipping_rates, e) : setTimeout(i, 500)
            }, error: o
        })
    };
    return i
}, Shopify.getCartShippingRatesForDestination = function (e, t, o) {
    o = o || Shopify.onError;
    var i = {
        type: "POST",
        url: "/cart/prepare_shipping_rates",
        data: Shopify.param({shipping_address: e}),
        success: Shopify.pollForCartShippingRatesForDestination(e, t, o),
        error: o
    };
    jQuery.ajax(i)
}, Shopify.getProduct = function (e, t) {
    jQuery.getJSON("/products/" + e + ".js", function (e, o) {
        "function" == typeof t ? t(e) : Shopify.onProduct(e)
    })
}, Shopify.changeItem = function (e, t, o) {
    var i = {
        type: "POST",
        url: "/cart/change.js",
        data: "quantity=" + t + "&id=" + e,
        dataType: "json",
        success: function (e) {
            "function" == typeof o ? o(e) : Shopify.onCartUpdate(e)
        },
        error: function (e, t) {
            Shopify.onError(e, t)
        }
    };
    jQuery.ajax(i)
}, Shopify.removeItem = function (e, t) {
    var o = {
        type: "POST", url: "/cart/change.js", data: "quantity=0&id=" + e, dataType: "json", success: function (e) {
            "function" == typeof t ? t(e) : Shopify.onCartUpdate(e)
        }, error: function (e, t) {
            Shopify.onError(e, t)
        }
    };
    jQuery.ajax(o)
}, Shopify.clear = function (e) {
    var t = {
        type: "POST", url: "/cart/clear.js", data: "", dataType: "json", success: function (t) {
            "function" == typeof e ? e(t) : Shopify.onCartUpdate(t)
        }, error: function (e, t) {
            Shopify.onError(e, t)
        }
    };
    jQuery.ajax(t)
}, Shopify.updateCartFromForm = function (e, t) {
    var o = {
        type: "POST",
        url: "/cart/update.js",
        data: jQuery("#" + e).serialize(),
        dataType: "json",
        success: function (e) {
            "function" == typeof t ? t(e) : Shopify.onCartUpdate(e)
        },
        error: function (e, t) {
            Shopify.onError(e, t)
        }
    };
    jQuery.ajax(o)
}, Shopify.updateCartAttributes = function (e, t) {
    var o = "";
    jQuery.isArray(e) ? jQuery.each(e, function (e, t) {
        var i = attributeToString(t.key);
        "" !== i && (o += "attributes[" + i + "]=" + attributeToString(t.value) + "&")
    }) : "object" == typeof e && null !== e && jQuery.each(e, function (e, t) {
        o += "attributes[" + attributeToString(e) + "]=" + attributeToString(t) + "&"
    });
    var i = {
        type: "POST", url: "/cart/update.js", data: o, dataType: "json", success: function (e) {
            "function" == typeof t ? t(e) : Shopify.onCartUpdate(e)
        }, error: function (e, t) {
            Shopify.onError(e, t)
        }
    };
    jQuery.ajax(i)
}, Shopify.updateCartNote = function (e, t) {
    var o = {
        type: "POST",
        url: "/cart/update.js",
        data: "note=" + attributeToString(e),
        dataType: "json",
        success: function (e) {
            "function" == typeof t ? t(e) : Shopify.onCartUpdate(e)
        },
        error: function (e, t) {
            Shopify.onError(e, t)
        }
    };
    jQuery.ajax(o)
}, jQuery.fn.jquery >= "1.4" ? Shopify.param = jQuery.param : (Shopify.param = function (e) {
    var t = [], o = function (e, o) {
        o = jQuery.isFunction(o) ? o() : o, t[t.length] = encodeURIComponent(e) + "=" + encodeURIComponent(o)
    };
    if (jQuery.isArray(e) || e.jquery) jQuery.each(e, function () {
        o(this.name, this.value)
    }); else for (var i in e) Shopify.buildParams(i, e[i], o);
    return t.join("&").replace(/%20/g, "+")
}, Shopify.buildParams = function (e, t, o) {
    jQuery.isArray(t) && t.length ? jQuery.each(t, function (t, i) {
        rbracket.test(e) ? o(e, i) : Shopify.buildParams(e + "[" + ("object" == typeof i || jQuery.isArray(i) ? t : "") + "]", i, o)
    }) : null != t && "object" == typeof t ? Shopify.isEmptyObject(t) ? o(e, "") : jQuery.each(t, function (t, i) {
        Shopify.buildParams(e + "[" + t + "]", i, o)
    }) : o(e, t)
}, Shopify.isEmptyObject = function (e) {
    for (var t in e) return !1;
    return !0
}),/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
    jQuery.cookie = function (e, t, o) {
        if ("undefined" == typeof t) {
            var i = null;
            if (document.cookie && "" != document.cookie) for (var n = document.cookie.split(";"), s = 0; s < n.length; s++) {
                var r = jQuery.trim(n[s]);
                if (r.substring(0, e.length + 1) == e + "=") {
                    i = decodeURIComponent(r.substring(e.length + 1));
                    break
                }
            }
            return i
        }
        o = o || {}, null === t && (t = "", o.expires = -1);
        var a = "";
        if (o.expires && ("number" == typeof o.expires || o.expires.toUTCString)) {
            var l;
            "number" == typeof o.expires ? (l = new Date, l.setTime(l.getTime() + 24 * o.expires * 60 * 60 * 1e3)) : l = o.expires, a = "; expires=" + l.toUTCString()
        }
        var c = o.path ? "; path=" + o.path : "", d = o.domain ? "; domain=" + o.domain : "",
            u = o.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), a, c, d, u].join("")
    }, "undefined" == typeof Currency) var Currency = {};
Currency.cookie = {
    configuration: {expires: 365, path: "/", domain: window.location.hostname},
    name: "currency",
    write: function (e) {
        jQuery.cookie(this.name, e, this.configuration)
    },
    read: function () {
        return jQuery.cookie(this.name)
    },
    destroy: function () {
        jQuery.cookie(this.name, null, this.configuration)
    }
}, Currency.moneyFormats = {
    USD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}}"},
    EUR: {money_format: "&euro;{{amount}}", money_with_currency_format: "&euro;{{amount}}"},
    GBP: {money_format: "&pound;{{amount}}", money_with_currency_format: "&pound;{{amount}}"},
    CAD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} CAD"},
    ALL: {money_format: "Lek {{amount}}", money_with_currency_format: "Lek {{amount}} ALL"},
    DZD: {money_format: "DA {{amount}}", money_with_currency_format: "DA {{amount}} DZD"},
    AOA: {money_format: "Kz{{amount}}", money_with_currency_format: "Kz{{amount}} AOA"},
    ARS: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} ARS"
    },
    AMD: {money_format: "{{amount}} AMD", money_with_currency_format: "{{amount}} AMD"},
    AWG: {money_format: "Afl{{amount}}", money_with_currency_format: "Afl{{amount}} AWG"},
    AUD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} AUD"},
    BBD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} Bds"},
    AZN: {money_format: "m.{{amount}}", money_with_currency_format: "m.{{amount}} AZN"},
    BDT: {money_format: "Tk {{amount}}", money_with_currency_format: "Tk {{amount}} BDT"},
    BSD: {money_format: "BS${{amount}}", money_with_currency_format: "BS${{amount}} BSD"},
    BHD: {money_format: "{{amount}}0 BD", money_with_currency_format: "{{amount}}0 BHD"},
    BYR: {money_format: "Br {{amount}}", money_with_currency_format: "Br {{amount}} BYR"},
    BZD: {money_format: "BZ${{amount}}", money_with_currency_format: "BZ${{amount}} BZD"},
    BTN: {money_format: "Nu {{amount}}", money_with_currency_format: "Nu {{amount}} BTN"},
    BAM: {
        money_format: "KM {{amount_with_comma_separator}}",
        money_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
    },
    BRL: {
        money_format: "R$ {{amount_with_comma_separator}}",
        money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
    },
    BOB: {
        money_format: "Bs{{amount_with_comma_separator}}",
        money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
    },
    BWP: {money_format: "P{{amount}}", money_with_currency_format: "P{{amount}} BWP"},
    BND: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} BND"},
    BGN: {money_format: "{{amount}} ????", money_with_currency_format: "{{amount}} ???? BGN"},
    MMK: {money_format: "K{{amount}}", money_with_currency_format: "K{{amount}} MMK"},
    KHR: {money_format: "KHR{{amount}}", money_with_currency_format: "KHR{{amount}}"},
    KYD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} KYD"},
    XAF: {money_format: "FCFA{{amount}}", money_with_currency_format: "FCFA{{amount}} XAF"},
    CLP: {money_format: "${{amount_no_decimals}}", money_with_currency_format: "${{amount_no_decimals}} CLP"},
    CNY: {money_format: "&#165;{{amount}}", money_with_currency_format: "&#165;{{amount}} CNY"},
    COP: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} COP"
    },
    CRC: {
        money_format: "&#8353; {{amount_with_comma_separator}}",
        money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC"
    },
    HRK: {
        money_format: "{{amount_with_comma_separator}} kn",
        money_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
    },
    CZK: {
        money_format: "{{amount_with_comma_separator}} K&#269;",
        money_with_currency_format: "{{amount_with_comma_separator}} K&#269;"
    },
    DKK: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "kr.{{amount_with_comma_separator}}"
    },
    DOP: {money_format: "RD$ {{amount}}", money_with_currency_format: "RD$ {{amount}}"},
    XCD: {money_format: "${{amount}}", money_with_currency_format: "EC${{amount}}"},
    EGP: {money_format: "LE {{amount}}", money_with_currency_format: "LE {{amount}} EGP"},
    ETB: {money_format: "Br{{amount}}", money_with_currency_format: "Br{{amount}} ETB"},
    XPF: {
        money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
    },
    FJD: {money_format: "${{amount}}", money_with_currency_format: "FJ${{amount}}"},
    GMD: {money_format: "D {{amount}}", money_with_currency_format: "D {{amount}} GMD"},
    GHS: {money_format: "GH&#8373;{{amount}}", money_with_currency_format: "GH&#8373;{{amount}}"},
    GTQ: {money_format: "Q{{amount}}", money_with_currency_format: "{{amount}} GTQ"},
    GYD: {money_format: "G${{amount}}", money_with_currency_format: "${{amount}} GYD"},
    GEL: {money_format: "{{amount}} GEL", money_with_currency_format: "{{amount}} GEL"},
    HNL: {money_format: "L {{amount}}", money_with_currency_format: "L {{amount}} HNL"},
    HKD: {money_format: "${{amount}}", money_with_currency_format: "HK${{amount}}"},
    HUF: {
        money_format: "{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
    },
    ISK: {money_format: "{{amount_no_decimals}} kr", money_with_currency_format: "{{amount_no_decimals}} kr ISK"},
    INR: {money_format: "Rs. {{amount}}", money_with_currency_format: "Rs. {{amount}}"},
    IDR: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "Rp {{amount_with_comma_separator}}"
    },
    ILS: {money_format: "{{amount}} NIS", money_with_currency_format: "{{amount}} NIS"},
    JMD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} JMD"},
    JPY: {money_format: "&#165;{{amount_no_decimals}}", money_with_currency_format: "&#165;{{amount_no_decimals}} JPY"},
    JEP: {money_format: "&pound;{{amount}}", money_with_currency_format: "&pound;{{amount}} JEP"},
    JOD: {money_format: "{{amount}}0 JD", money_with_currency_format: "{{amount}}0 JOD"},
    KZT: {money_format: "{{amount}} KZT", money_with_currency_format: "{{amount}} KZT"},
    KES: {money_format: "KSh{{amount}}", money_with_currency_format: "KSh{{amount}}"},
    KWD: {money_format: "{{amount}}0 KD", money_with_currency_format: "{{amount}}0 KWD"},
    KGS: {money_format: "????{{amount}}", money_with_currency_format: "????{{amount}}"},
    LVL: {money_format: "Ls {{amount}}", money_with_currency_format: "Ls {{amount}} LVL"},
    LBP: {money_format: "L&pound;{{amount}}", money_with_currency_format: "L&pound;{{amount}} LBP"},
    LTL: {money_format: "{{amount}} Lt", money_with_currency_format: "{{amount}} Lt"},
    MGA: {money_format: "Ar {{amount}}", money_with_currency_format: "Ar {{amount}} MGA"},
    MKD: {money_format: "?????? {{amount}}", money_with_currency_format: "?????? {{amount}} MKD"},
    MOP: {money_format: "MOP${{amount}}", money_with_currency_format: "MOP${{amount}}"},
    MVR: {money_format: "Rf{{amount}}", money_with_currency_format: "Rf{{amount}} MRf"},
    MXN: {money_format: "$ {{amount}}", money_with_currency_format: "$ {{amount}} MXN"},
    MYR: {money_format: "RM{{amount}} MYR", money_with_currency_format: "RM{{amount}} MYR"},
    MUR: {money_format: "Rs {{amount}}", money_with_currency_format: "Rs {{amount}} MUR"},
    MDL: {money_format: "{{amount}} MDL", money_with_currency_format: "{{amount}} MDL"},
    MAD: {money_format: "{{amount}} dh", money_with_currency_format: "Dh {{amount}} MAD"},
    MNT: {money_format: "{{amount_no_decimals}} &#8366", money_with_currency_format: "{{amount_no_decimals}} MNT"},
    MZN: {money_format: "{{amount}} Mt", money_with_currency_format: "Mt {{amount}} MZN"},
    NAD: {money_format: "N${{amount}}", money_with_currency_format: "N${{amount}} NAD"},
    NPR: {money_format: "Rs{{amount}}", money_with_currency_format: "Rs{{amount}} NPR"},
    ANG: {money_format: "&fnof;{{amount}}", money_with_currency_format: "{{amount}} NA&fnof;"},
    NZD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} NZD"},
    NIO: {money_format: "C${{amount}}", money_with_currency_format: "C${{amount}} NIO"},
    NGN: {money_format: "&#8358;{{amount}}", money_with_currency_format: "&#8358;{{amount}} NGN"},
    NOK: {
        money_format: "kr {{amount_with_comma_separator}}",
        money_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
    },
    OMR: {
        money_format: "{{amount_with_comma_separator}} OMR",
        money_with_currency_format: "{{amount_with_comma_separator}} OMR"
    },
    PKR: {money_format: "Rs.{{amount}}", money_with_currency_format: "Rs.{{amount}} PKR"},
    PGK: {money_format: "K {{amount}}", money_with_currency_format: "K {{amount}} PGK"},
    PYG: {
        money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
    },
    PEN: {money_format: "S/. {{amount}}", money_with_currency_format: "S/. {{amount}} PEN"},
    PHP: {money_format: "&#8369;{{amount}}", money_with_currency_format: "&#8369;{{amount}} PHP"},
    PLN: {
        money_format: "{{amount_with_comma_separator}} zl",
        money_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
    },
    QAR: {
        money_format: "QAR {{amount_with_comma_separator}}",
        money_with_currency_format: "QAR {{amount_with_comma_separator}}"
    },
    RON: {
        money_format: "{{amount_with_comma_separator}} lei",
        money_with_currency_format: "{{amount_with_comma_separator}} lei RON"
    },
    RUB: {
        money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
        money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
    },
    RWF: {money_format: "{{amount_no_decimals}} RF", money_with_currency_format: "{{amount_no_decimals}} RWF"},
    WST: {money_format: "WS$ {{amount}}", money_with_currency_format: "WS$ {{amount}} WST"},
    SAR: {money_format: "{{amount}} SR", money_with_currency_format: "{{amount}} SAR"},
    STD: {money_format: "Db {{amount}}", money_with_currency_format: "Db {{amount}} STD"},
    RSD: {money_format: "{{amount}} RSD", money_with_currency_format: "{{amount}} RSD"},
    SCR: {money_format: "Rs {{amount}}", money_with_currency_format: "Rs {{amount}} SCR"},
    SGD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} SGD"},
    SYP: {money_format: "S&pound;{{amount}}", money_with_currency_format: "S&pound;{{amount}} SYP"},
    ZAR: {money_format: "R {{amount}}", money_with_currency_format: "R {{amount}} ZAR"},
    KRW: {
        money_format: "&#8361;{{amount_no_decimals}}",
        money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW"
    },
    LKR: {money_format: "Rs {{amount}}", money_with_currency_format: "Rs {{amount}} LKR"},
    SEK: {money_format: "{{amount_no_decimals}} kr", money_with_currency_format: "{{amount_no_decimals}} kr SEK"},
    CHF: {money_format: "SFr. {{amount}}", money_with_currency_format: "SFr. {{amount}} CHF"},
    TWD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} TWD"},
    THB: {money_format: "{{amount}} &#xe3f;", money_with_currency_format: "{{amount}} &#xe3f; THB"},
    TZS: {money_format: "{{amount}} TZS", money_with_currency_format: "{{amount}} TZS"},
    TTD: {money_format: "${{amount}}", money_with_currency_format: "${{amount}} TTD"},
    TND: {money_format: "{{amount}}", money_with_currency_format: "{{amount}} DT"},
    TRY: {money_format: "{{amount}}TL", money_with_currency_format: "{{amount}}TL"},
    UGX: {money_format: "Ush {{amount_no_decimals}}", money_with_currency_format: "Ush {{amount_no_decimals}} UGX"},
    UAH: {money_format: "???{{amount}}", money_with_currency_format: "???{{amount}} UAH"},
    AED: {money_format: "Dhs. {{amount}}", money_with_currency_format: "Dhs. {{amount}} AED"},
    UYU: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} UYU"
    },
    VUV: {money_format: "${{amount}}", money_with_currency_format: "${{amount}}VT"},
    VEF: {
        money_format: "Bs. {{amount_with_comma_separator}}",
        money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
    },
    VND: {
        money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
    },
    XBT: {money_format: "{{amount_no_decimals}} BTC", money_with_currency_format: "{{amount_no_decimals}} BTC"},
    XOF: {money_format: "CFA{{amount}}", money_with_currency_format: "CFA{{amount}} XOF"},
    ZMW: {
        money_format: "K{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
    }
}, Currency.formatMoney = function (e, t) {
    function o(e, t) {
        return "undefined" == typeof e ? t : e
    }

    function i(e, t, i, n) {
        if (t = o(t, 2), i = o(i, ","), n = o(n, "."), isNaN(e) || null == e) return 0;
        e = (e / 100).toFixed(t);
        var s = e.split("."), r = s[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i), a = s[1] ? n + s[1] : "";
        return r + a
    }

    if ("function" == typeof Shopify.formatMoney) return Shopify.formatMoney(e, t);
    "string" == typeof e && (e = e.replace(".", ""));
    var n = "", s = /\{\{\s*(\w+)\s*\}\}/, r = t || "${{amount}}";
    switch (r.match(s)[1]) {
        case"amount":
            n = i(e, 2);
            break;
        case"amount_no_decimals":
            n = i(e, 0);
            break;
        case"amount_with_comma_separator":
            n = i(e, 2, ".", ",");
            break;
        case"amount_no_decimals_with_comma_separator":
            n = i(e, 0, ".", ",")
    }
    return r.replace(s, n)
}, Currency.currentCurrency = "", Currency.format = "money_with_currency_format", Currency.convertAll = function (e, t, o, i) {
    jQuery(o || "span.money").each(function () {
        if (jQuery(this).attr("data-currency") !== t) {
            if (jQuery(this).attr("data-currency-" + t)) jQuery(this).html(jQuery(this).attr("data-currency-" + t)); else {
                var o = 0, n = Currency.moneyFormats[e][i || Currency.format] || "{{amount}}",
                    s = Currency.moneyFormats[t][i || Currency.format] || "{{amount}}";
                o = n.indexOf("amount_no_decimals") !== -1 ? Currency.convert(100 * parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10), e, t) : "JOD" === e || "KWD" == e || "BHD" == e ? Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10) / 10, e, t) : Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ""), 10), e, t);
                var r = Currency.formatMoney(o, s);
                jQuery(this).html(r), jQuery(this).attr("data-currency-" + t, r)
            }
            jQuery(this).attr("data-currency", t)
        }
    }), this.currentCurrency = t, this.cookie.write(t)
}, !function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var t = window.Slick || {};
    (t = function () {
        var t = 0;
        return function (o, i) {
            var n, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(o),
                appendDots: e(o),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, o) {
                    return e('<button type="button" />').text(o + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(o), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, n = e(o).data("slick") || {}, s.options = e.extend({}, s.defaults, i, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, t.prototype.addSlide = t.prototype.slickAdd = function (t, o, i) {
        var n = this;
        if ("boolean" == typeof o) i = o, o = null; else if (o < 0 || o >= n.slideCount) return !1;
        n.unload(), "number" == typeof o ? 0 === o && 0 === n.$slides.length ? e(t).appendTo(n.$slideTrack) : i ? e(t).insertBefore(n.$slides.eq(o)) : e(t).insertAfter(n.$slides.eq(o)) : !0 === i ? e(t).prependTo(n.$slideTrack) : e(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (t, o) {
            e(o).attr("data-slick-index", t)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({height: t}, e.options.speed)
        }
    }, t.prototype.animateSlide = function (t, o) {
        var i = {}, n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({left: t}, n.options.speed, n.options.easing, o) : n.$slideTrack.animate({top: t}, n.options.speed, n.options.easing, o) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), e({animStart: n.currentLeft}).animate({animStart: t}, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === n.options.vertical ? (i[n.animType] = "translate(" + e + "px, 0px)", n.$slideTrack.css(i)) : (i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i))
            },
            complete: function () {
                o && o.call()
            }
        })) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(i), o && setTimeout(function () {
            n.disableTransition(), o.call()
        }, n.options.speed))
    }, t.prototype.getNavTarget = function () {
        var t = this, o = t.options.asNavFor;
        return o && null !== o && (o = e(o).not(t.$slider)), o
    }, t.prototype.asNavFor = function (t) {
        var o = this.getNavTarget();
        null !== o && "object" == typeof o && o.each(function () {
            var o = e(this).slick("getSlick");
            o.unslicked || o.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function (e) {
        var t = this, o = {};
        !1 === t.options.fade ? o[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : o[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(o) : t.$slides.eq(e).css(o)
    }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function () {
        var e = this, t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function () {
        var t, o, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), o = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) o.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = o.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, o) {
            e(o).attr("data-slick-index", t).data("originalStyling", e(o).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function () {
        var e, t, o, i, n, s, r, a = this;
        if (i = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), e = 0; e < n; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (o = 0; o < a.options.slidesPerRow; o++) {
                        var d = e * r + (t * a.options.slidesPerRow + o);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function (t, o) {
        var i, n, s, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            n = null;
            for (i in r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[i] && (n = r.breakpoints[i]) : s > r.breakpoints[i] && (n = r.breakpoints[i]));
            null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || o) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = n), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, t.prototype.changeSlide = function (t, o) {
        var i, n, s, r = this, a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, i = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case"previous":
                n = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, o);
                break;
            case"next":
                n = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, o);
                break;
            case"index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(l), !1, o), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function (e) {
        var t, o;
        if (t = this.getNavigableIndexes(), o = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var i in t) {
            if (e < t[i]) {
                e = o;
                break
            }
            o = t[i]
        }
        return e
    }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function () {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function (t) {
        var o = this;
        o.autoPlayClear(), o.touchObject = {}, o.cleanUpEvents(), e(".slick-cloned", o.$slider).detach(), o.$dots && o.$dots.remove(), o.$prevArrow && o.$prevArrow.length && (o.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), o.htmlExpr.test(o.options.prevArrow) && o.$prevArrow.remove()), o.$nextArrow && o.$nextArrow.length && (o.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), o.htmlExpr.test(o.options.nextArrow) && o.$nextArrow.remove()), o.$slides && (o.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            e(this).attr("style", e(this).data("originalStyling"))
        }), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.detach(), o.$list.detach(), o.$slider.append(o.$slides)), o.cleanUpRows(), o.$slider.removeClass("slick-slider"), o.$slider.removeClass("slick-initialized"), o.$slider.removeClass("slick-dotted"), o.unslicked = !0, t || o.$slider.trigger("destroy", [o])
    }, t.prototype.disableTransition = function (e) {
        var t = this, o = {};
        o[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(o) : t.$slides.eq(e).css(o)
    }, t.prototype.fadeSlide = function (e, t) {
        var o = this;
        !1 === o.cssTransitions ? (o.$slides.eq(e).css({zIndex: o.options.zIndex}), o.$slides.eq(e).animate({opacity: 1}, o.options.speed, o.options.easing, t)) : (o.applyTransition(e), o.$slides.eq(e).css({
            opacity: 1,
            zIndex: o.options.zIndex
        }), t && setTimeout(function () {
            o.disableTransition(e), t.call()
        }, o.options.speed))
    }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (o) {
            o.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, t.prototype.getDotCount = function () {
        var e = this, t = 0, o = 0, i = 0;
        if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow) ++i; else for (; t < e.slideCount;) ++i, t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) i = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++i, t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, t.prototype.getLeft = function (e) {
        var t, o, i, n, s = this, r = 0;
        return s.slideOffset = 0, o = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? n = -1.5 : 1 === s.options.slidesToShow && (n = -2)), r = o * s.options.slidesToShow * n), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * o * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * o * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * o), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * o * -1 + r, !0 === s.options.variableWidth && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === s.options.centerMode && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (s.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function () {
        var e, t = this, o = 0, i = 0, n = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (o = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); o < e;) n.push(o), o = i + t.options.slidesToScroll,
            i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return n
    }, t.prototype.getSlick = function () {
        return this
    }, t.prototype.getSlideCount = function () {
        var t, o, i = this;
        return o = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (n, s) {
            if (s.offsetLeft - o + e(s).outerWidth() / 2 > -1 * i.swipeLeft) return t = s, !1
        }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
    }, t.prototype.init = function (t) {
        var o = this;
        e(o.$slider).hasClass("slick-initialized") || (e(o.$slider).addClass("slick-initialized"), o.buildRows(), o.buildOut(), o.setProps(), o.startLoad(), o.loadSlider(), o.initializeEvents(), o.updateArrows(), o.updateDots(), o.checkResponsive(!0), o.focusHandler()), t && o.$slider.trigger("init", [o]), !0 === o.options.accessibility && o.initADA(), o.options.autoplay && (o.paused = !1, o.autoPlay())
    }, t.prototype.initADA = function () {
        var t = this, o = Math.ceil(t.slideCount / t.options.slidesToShow),
            i = t.getNavigableIndexes().filter(function (e) {
                return e >= 0 && e < t.slideCount
            });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (o) {
            var n = i.indexOf(o);
            e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + o,
                tabindex: -1
            }), -1 !== n && e(this).attr({"aria-describedby": "slick-slide-control" + t.instanceUid + n})
        }), t.$dots.attr("role", "tablist").find("li").each(function (n) {
            var s = i[n];
            e(this).attr({role: "presentation"}), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + n,
                "aria-controls": "slick-slide" + t.instanceUid + s,
                "aria-label": n + 1 + " of " + o,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var n = t.currentSlide, s = n + t.options.slidesToShow; n < s; n++) t.$slides.eq(n).attr("tabindex", 0);
        t.activateADA()
    }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? "next" : "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? "previous" : "next"}}))
    }, t.prototype.lazyLoad = function () {
        function t(t) {
            e("img[data-lazy]", t).each(function () {
                var t = e(this), o = e(this).attr("data-lazy"), i = e(this).attr("data-srcset"),
                    n = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    t.animate({opacity: 0}, 100, function () {
                        i && (t.attr("srcset", i), n && t.attr("sizes", n)), t.attr("src", o).animate({opacity: 1}, 200, function () {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, t, o])
                    })
                }, r.onerror = function () {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, o])
                }, r.src = o
            })
        }

        var o, i, n, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? n = (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), n = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, n = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (i > 0 && i--, n <= s.slideCount && n++)), o = s.$slider.find(".slick-slide").slice(i, n), "anticipated" === s.options.lazyLoad) for (var r = i - 1, a = n, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), o = (o = o.add(l.eq(r))).add(l.eq(a)), r--, a++;
        t(o), s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function (t) {
        var o = this;
        o.unslicked || (o.$slider.trigger("afterChange", [o, t]), o.animating = !1, o.slideCount > o.options.slidesToShow && o.setPosition(), o.swipeLeft = null, o.options.autoplay && o.autoPlay(), !0 === o.options.accessibility && (o.initADA(), o.options.focusOnChange && e(o.$slides.get(o.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, t.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var o, i, n, s, r, a = this, l = e("img[data-lazy]", a.$slider);
        l.length ? (o = l.first(), i = o.attr("data-lazy"), n = o.attr("data-srcset"), s = o.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            n && (o.attr("srcset", n), s && o.attr("sizes", s)), o.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, o, i]), a.progressiveLazyLoad()
        }, r.onerror = function () {
            t < 3 ? setTimeout(function () {
                a.progressiveLazyLoad(t + 1)
            }, 500) : (o.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, o, i]), a.progressiveLazyLoad())
        }, r.src = i) : a.$slider.trigger("allImagesLoaded", [a])
    }, t.prototype.refresh = function (t) {
        var o, i, n = this;
        i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), o = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, {currentSlide: o}), n.init(), t || n.changeSlide({
            data: {
                message: "index",
                index: o
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function () {
        var t, o, i, n = this, s = n.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            n.respondTo = n.options.respondTo || "window";
            for (t in s) if (i = n.breakpoints.length - 1, s.hasOwnProperty(t)) {
                for (o = s[t].breakpoint; i >= 0;) n.breakpoints[i] && n.breakpoints[i] === o && n.breakpoints.splice(i, 1), i--;
                n.breakpoints.push(o), n.breakpointSettings[o] = s[t].settings
            }
            n.breakpoints.sort(function (e, t) {
                return n.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, o) {
        var i = this;
        return e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, !(i.slideCount < 1 || e < 0 || e > i.slideCount - 1) && (i.unload(), !0 === o ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit(), void 0)
    }, t.prototype.setCSS = function (e) {
        var t, o, i = this, n = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", o = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", n[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(n) : (n = {}, !1 === i.cssTransitions ? (n[i.animType] = "translate(" + t + ", " + o + ")", i.$slideTrack.css(n)) : (n[i.animType] = "translate3d(" + t + ", " + o + ", 0px)", i.$slideTrack.css(n)))
    }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function () {
        var t, o = this;
        o.$slides.each(function (i, n) {
            t = o.slideWidth * i * -1, !0 === o.options.rtl ? e(n).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : e(n).css({position: "relative", left: t, top: 0, zIndex: o.options.zIndex - 2, opacity: 0})
        }), o.$slides.eq(o.currentSlide).css({zIndex: o.options.zIndex - 1, opacity: 1})
    }, t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t, o, i, n, s, r = this, a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[i] = n; else if ("multiple" === s) e.each(i, function (e, t) {
            r.options[e] = t
        }); else if ("responsive" === s) for (o in n) if ("array" !== e.type(r.options.responsive)) r.options.responsive = [n[o]]; else {
            for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === n[o].breakpoint && r.options.responsive.splice(t, 1), t--;
            r.options.responsive.push(n[o])
        }
        a && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function () {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function (e) {
        var t, o, i, n, s = this;
        if (o = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + e, o.slice(i - t + 1 + r, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? o.eq(o.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && o.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
        } else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : o.length <= s.options.slidesToShow ? o.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, i = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? o.slice(i - (s.options.slidesToShow - n), i + n).addClass("slick-active").attr("aria-hidden", "false") : o.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, t.prototype.setupInfinite = function () {
        var t, o, i, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (o = null, n.slideCount > n.options.slidesToShow)) {
            for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - i; t -= 1) o = t - 1, e(n.$slides[o]).clone(!0).attr("id", "").attr("data-slick-index", o - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + n.slideCount; t += 1) o = t, e(n.$slides[o]).clone(!0).attr("id", "").attr("data-slick-index", o + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function (t) {
        var o = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            n = parseInt(i.attr("data-slick-index"));
        n || (n = 0), o.slideCount <= o.options.slidesToShow ? o.slideHandler(n, !1, !0) : o.slideHandler(n)
    }, t.prototype.slideHandler = function (e, t, o) {
        var i, n, s, r, a, l = null, c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== o ? c.animateSlide(r, function () {
            c.postSlide(i)
        }) : c.postSlide(i)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== o ? c.animateSlide(r, function () {
            c.postSlide(i)
        }) : c.postSlide(i)); else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), n = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, n]), s = c.currentSlide, c.currentSlide = n, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== o ? (c.fadeSlideOut(s), c.fadeSlide(n, function () {
                c.postSlide(n)
            })) : c.postSlide(n), void c.animateHeight();
            !0 !== o ? c.animateSlide(l, function () {
                c.postSlide(n)
            }) : c.postSlide(n)
        }
    }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function () {
        var e, t, o, i, n = this;
        return e = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, o = Math.atan2(t, e), (i = Math.round(180 * o / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === n.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === n.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function (e) {
        var t, o, i = this;
        if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
        if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (o = i.swipeDirection()) {
                case"left":
                case"down":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
            }
            "vertical" != o && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, o]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case"start":
                t.swipeStart(e);
                break;
            case"move":
                t.swipeMove(e);
                break;
            case"end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function (e) {
        var t, o, i, n, s, r, a = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), o = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === o || a.currentSlide >= a.getDotCount() && "left" === o) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * n : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, t.prototype.swipeStart = function (e) {
        var t, o = this;
        return o.interrupted = !0, 1 !== o.touchObject.fingerCount || o.slideCount <= o.options.slidesToShow ? (o.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), o.touchObject.startX = o.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, o.touchObject.startY = o.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, o.dragging = !0, void 0)
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function () {
        var e, o, i = this, n = arguments[0], s = Array.prototype.slice.call(arguments, 1), r = i.length;
        for (e = 0; e < r; e++) if ("object" == typeof n || void 0 === n ? i[e].slick = new t(i[e], n) : o = i[e].slick[n].apply(i[e].slick, s), void 0 !== o) return o;
        return i
    }
}),/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" != typeof Object.create && (Object.create = function (e) {
    function t() {
    }

    return t.prototype = e, new t
}), function (e, t, o, i) {
    var n = {
        init: function (t, o) {
            var i = this;
            i.elem = o, i.$elem = e(o), i.imageSrc = i.$elem.data("zoom-image") ? i.$elem.data("zoom-image") : i.$elem.attr("src"), i.options = e.extend({}, e.fn.elevateZoom.options, t), i.options.tint && (i.options.lensColour = "none", i.options.lensOpacity = "1"), "inner" == i.options.zoomType && (i.options.showLens = !1), i.$elem.parent().removeAttr("title").removeAttr("alt"), i.zoomImage = i.imageSrc, i.refresh(1), e("#" + i.options.gallery + " a").click(function (t) {
                return i.options.galleryActiveClass && (e("#" + i.options.gallery + " a").removeClass(i.options.galleryActiveClass), e(this).addClass(i.options.galleryActiveClass)), t.preventDefault(), e(this).data("zoom-image") ? i.zoomImagePre = e(this).data("zoom-image") : i.zoomImagePre = e(this).data("image"), i.swaptheimage(e(this).data("image"), i.zoomImagePre), !1
            })
        }, refresh: function (e) {
            var t = this;
            setTimeout(function () {
                t.fetch(t.imageSrc)
            }, e || t.options.refresh)
        }, fetch: function (e) {
            var t = this, o = new Image;
            o.onload = function () {
                t.largeWidth = o.width, t.largeHeight = o.height, t.startZoom(), t.currentImage = t.imageSrc, t.options.onZoomedImageLoaded(t.$elem)
            }, o.src = e
        }, startZoom: function () {
            var t = this;
            if (t.nzWidth = t.$elem.width(), t.nzHeight = t.$elem.height(), t.isWindowActive = !1, t.isLensActive = !1, t.isTintActive = !1, t.overWindow = !1, t.options.imageCrossfade && (t.zoomWrap = t.$elem.wrap('<div style="height:' + t.nzHeight + "px;width:" + t.nzWidth + 'px;" class="zoomWrapper" />'), t.$elem.css("position", "absolute")), t.zoomLock = 1, t.scrollingLock = !1, t.changeBgSize = !1, t.currentZoomLevel = t.options.zoomLevel, t.nzOffset = t.$elem.offset(), t.widthRatio = t.largeWidth / t.currentZoomLevel / t.nzWidth, t.heightRatio = t.largeHeight / t.currentZoomLevel / t.nzHeight, "window" == t.options.zoomType && (t.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(t.options.zoomWindowBgColour) + ";width: " + String(t.options.zoomWindowWidth) + "px;height: " + String(t.options.zoomWindowHeight) + "px;float: left;background-size: " + t.largeWidth / t.currentZoomLevel + "px " + t.largeHeight / t.currentZoomLevel + "px;display: none;z-index:100;border: " + String(t.options.borderSize) + "px solid " + t.options.borderColour + ";background-repeat: no-repeat;position: absolute;"), "inner" == t.options.zoomType) {
                var o = t.$elem.css("border-left-width");
                t.zoomWindowStyle = "overflow: hidden;margin-left: " + String(o) + ";margin-top: " + String(o) + ";background-position: 0px 0px;width: " + String(t.nzWidth) + "px;height: " + String(t.nzHeight) + "px;float: left;display: none;cursor:" + t.options.cursor + ";px solid " + t.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
            }
            "window" == t.options.zoomType && (lensHeight = t.nzHeight < t.options.zoomWindowWidth / t.widthRatio ? t.nzHeight : String(t.options.zoomWindowHeight / t.heightRatio), lensWidth = t.largeWidth < t.options.zoomWindowWidth ? t.nzWidth : t.options.zoomWindowWidth / t.widthRatio, t.lensStyle = "background-position: 0px 0px;width: " + String(t.options.zoomWindowWidth / t.widthRatio) + "px;height: " + String(t.options.zoomWindowHeight / t.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + t.options.lensOpacity + ";filter: alpha(opacity = " + 100 * t.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + t.options.lensColour + ";cursor:" + t.options.cursor + ";border: " + t.options.lensBorderSize + "px solid " + t.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"), t.tintStyle = "display: block;position: absolute;background-color: " + t.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + t.nzWidth + "px;height: " + t.nzHeight + "px;", t.lensRound = "", "lens" == t.options.zoomType && (t.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(t.options.borderSize) + "px solid " + t.options.borderColour + ";width:" + String(t.options.lensSize) + "px;height:" + String(t.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"), "round" == t.options.lensShape && (t.lensRound = "border-top-left-radius: " + String(t.options.lensSize / 2 + t.options.borderSize) + "px;border-top-right-radius: " + String(t.options.lensSize / 2 + t.options.borderSize) + "px;border-bottom-left-radius: " + String(t.options.lensSize / 2 + t.options.borderSize) + "px;border-bottom-right-radius: " + String(t.options.lensSize / 2 + t.options.borderSize) + "px;"), t.zoomContainer = e('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + t.nzOffset.left + "px;top:" + t.nzOffset.top + "px;height:" + t.nzHeight + "px;width:" + t.nzWidth + 'px;"></div>'), e("body").append(t.zoomContainer), t.options.containLensZoom && "lens" == t.options.zoomType && t.zoomContainer.css("overflow", "hidden"), "inner" != t.options.zoomType && (t.zoomLens = e("<div class='zoomLens' style='" + t.lensStyle + t.lensRound + "'>&nbsp;</div>").appendTo(t.zoomContainer).click(function () {
                t.$elem.trigger("click")
            }), t.options.tint && (t.tintContainer = e("<div/>").addClass("tintContainer"), t.zoomTint = e("<div class='zoomTint' style='" + t.tintStyle + "'></div>"), t.zoomLens.wrap(t.tintContainer), t.zoomTintcss = t.zoomLens.after(t.zoomTint), t.zoomTintImage = e('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + t.nzWidth + "px; height: " + t.nzHeight + 'px;" src="' + t.imageSrc + '">').appendTo(t.zoomLens).click(function () {
                t.$elem.trigger("click")
            }))), isNaN(t.options.zoomWindowPosition) ? t.zoomWindow = e("<div style='z-index:999;left:" + t.windowOffsetLeft + "px;top:" + t.windowOffsetTop + "px;" + t.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
                t.$elem.trigger("click")
            }) : t.zoomWindow = e("<div style='z-index:999;left:" + t.windowOffsetLeft + "px;top:" + t.windowOffsetTop + "px;" + t.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(t.zoomContainer).click(function () {
                t.$elem.trigger("click")
            }), t.zoomWindowContainer = e("<div/>").addClass("zoomWindowContainer").css("width", t.options.zoomWindowWidth), t.zoomWindow.wrap(t.zoomWindowContainer), "lens" == t.options.zoomType && t.zoomLens.css({backgroundImage: "url('" + t.imageSrc + "')"}), "window" == t.options.zoomType && t.zoomWindow.css({backgroundImage: "url('" + t.imageSrc + "')"}), "inner" == t.options.zoomType && t.zoomWindow.css({backgroundImage: "url('" + t.imageSrc + "')"}), t.$elem.bind("touchmove", function (e) {
                e.preventDefault(), t.setPosition(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0])
            }), t.zoomContainer.bind("touchmove", function (e) {
                "inner" == t.options.zoomType && t.showHideWindow("show"), e.preventDefault(), t.setPosition(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0])
            }), t.zoomContainer.bind("touchend", function (e) {
                t.showHideWindow("hide"), t.options.showLens && t.showHideLens("hide"), t.options.tint && "inner" != t.options.zoomType && t.showHideTint("hide")
            }), t.$elem.bind("touchend", function (e) {
                t.showHideWindow("hide"), t.options.showLens && t.showHideLens("hide"), t.options.tint && "inner" != t.options.zoomType && t.showHideTint("hide")
            }), t.options.showLens && (t.zoomLens.bind("touchmove", function (e) {
                e.preventDefault(), t.setPosition(e.originalEvent.touches[0] || e.originalEvent.changedTouches[0])
            }), t.zoomLens.bind("touchend", function (e) {
                t.showHideWindow("hide"), t.options.showLens && t.showHideLens("hide"), t.options.tint && "inner" != t.options.zoomType && t.showHideTint("hide")
            })), t.$elem.bind("mousemove", function (e) {
                0 == t.overWindow && t.setElements("show"), t.lastX === e.clientX && t.lastY === e.clientY || (t.setPosition(e), t.currentLoc = e), t.lastX = e.clientX, t.lastY = e.clientY
            }), t.zoomContainer.bind("mousemove", function (e) {
                0 == t.overWindow && t.setElements("show"), t.lastX === e.clientX && t.lastY === e.clientY || (t.setPosition(e), t.currentLoc = e), t.lastX = e.clientX, t.lastY = e.clientY
            }), "inner" != t.options.zoomType && t.zoomLens.bind("mousemove", function (e) {
                t.lastX === e.clientX && t.lastY === e.clientY || (t.setPosition(e), t.currentLoc = e), t.lastX = e.clientX, t.lastY = e.clientY
            }), t.options.tint && "inner" != t.options.zoomType && t.zoomTint.bind("mousemove", function (e) {
                t.lastX === e.clientX && t.lastY === e.clientY || (t.setPosition(e), t.currentLoc = e), t.lastX = e.clientX, t.lastY = e.clientY
            }), "inner" == t.options.zoomType && t.zoomWindow.bind("mousemove", function (e) {
                t.lastX === e.clientX && t.lastY === e.clientY || (t.setPosition(e), t.currentLoc = e), t.lastX = e.clientX, t.lastY = e.clientY
            }), t.zoomContainer.add(t.$elem).mouseenter(function () {
                0 == t.overWindow && t.setElements("show")
            }).mouseleave(function () {
                t.scrollLock || t.setElements("hide")
            }), "inner" != t.options.zoomType && t.zoomWindow.mouseenter(function () {
                t.overWindow = !0, t.setElements("hide")
            }).mouseleave(function () {
                t.overWindow = !1
            }), t.minZoomLevel = t.options.minZoomLevel ? t.options.minZoomLevel : 2 * t.options.scrollZoomIncrement, t.options.scrollZoom && t.zoomContainer.add(t.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (o) {
                t.scrollLock = !0, clearTimeout(e.data(this, "timer")), e.data(this, "timer", setTimeout(function () {
                    t.scrollLock = !1
                }, 250));
                var i = o.originalEvent.wheelDelta || -1 * o.originalEvent.detail;
                return o.stopImmediatePropagation(), o.stopPropagation(), o.preventDefault(), 0 < i / 120 ? t.currentZoomLevel >= t.minZoomLevel && t.changeZoomLevel(t.currentZoomLevel - t.options.scrollZoomIncrement) : t.options.maxZoomLevel ? t.currentZoomLevel <= t.options.maxZoomLevel && t.changeZoomLevel(parseFloat(t.currentZoomLevel) + t.options.scrollZoomIncrement) : t.changeZoomLevel(parseFloat(t.currentZoomLevel) + t.options.scrollZoomIncrement), !1
            })
        }, setElements: function (e) {
            return !!this.options.zoomEnabled && ("show" == e && this.isWindowSet && ("inner" == this.options.zoomType && this.showHideWindow("show"), "window" == this.options.zoomType && this.showHideWindow("show"), this.options.showLens && this.showHideLens("show"), this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show")), void ("hide" == e && ("window" == this.options.zoomType && this.showHideWindow("hide"), this.options.tint || this.showHideWindow("hide"), this.options.showLens && this.showHideLens("hide"), this.options.tint && this.showHideTint("hide"))))
        }, setPosition: function (e) {
            return !!this.options.zoomEnabled && (this.nzHeight = this.$elem.height(), this.nzWidth = this.$elem.width(), this.nzOffset = this.$elem.offset(), this.options.tint && "inner" != this.options.zoomType && (this.zoomTint.css({top: 0}), this.zoomTint.css({left: 0})), this.options.responsive && !this.options.scrollZoom && this.options.showLens && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.largeWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "lens" != this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight), this.options.tint && (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))), "lens" == this.options.zoomType && this.zoomLens.css({
                width: String(this.options.lensSize) + "px",
                height: String(this.options.lensSize) + "px"
            })), this.zoomContainer.css({top: this.nzOffset.top}), this.zoomContainer.css({left: this.nzOffset.left}), this.mouseLeft = parseInt(e.pageX - this.nzOffset.left), this.mouseTop = parseInt(e.pageY - this.nzOffset.top), "window" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.zoomLens.height() / 2, this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize, this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2, this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize), "inner" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio, this.Eboppos = this.mouseTop > this.nzHeight - this.nzHeight / 2 / this.heightRatio, this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio, this.Eroppos = this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize), void (0 >= this.mouseLeft || 0 > this.mouseTop || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight ? this.setElements("hide") : (this.options.showLens && (this.lensLeftPos = String(this.mouseLeft - this.zoomLens.width() / 2), this.lensTopPos = String(this.mouseTop - this.zoomLens.height() / 2)), this.Etoppos && (this.lensTopPos = 0), this.Eloppos && (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0), "window" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), "inner" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)), "lens" == this.options.zoomType && (this.windowLeftPos = String(-1 * ((e.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)), this.windowTopPos = String(-1 * ((e.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)), this.zoomLens.css({backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px"}), this.changeBgSize && (this.nzHeight > this.nzWidth ? ("lens" == this.options.zoomType && this.zoomLens.css({"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"}), this.zoomWindow.css({"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"})) : ("lens" == this.options.zoomType && this.zoomLens.css({"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"}), this.zoomWindow.css({"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"})), this.changeBgSize = !1), this.setWindowPostition(e)), this.options.tint && "inner" != this.options.zoomType && this.setTintPosition(e), "window" == this.options.zoomType && this.setWindowPostition(e), "inner" == this.options.zoomType && this.setWindowPostition(e), this.options.showLens && (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0), this.zoomLens.css({
                left: this.lensLeftPos + "px",
                top: this.lensTopPos + "px"
            })))))
        }, showHideWindow: function (e) {
            "show" != e || this.isWindowActive || (this.options.zoomWindowFadeIn ? this.zoomWindow.stop(!0, !0, !1).fadeIn(this.options.zoomWindowFadeIn) : this.zoomWindow.show(), this.isWindowActive = !0), "hide" == e && this.isWindowActive && (this.options.zoomWindowFadeOut ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut) : this.zoomWindow.hide(), this.isWindowActive = !1)
        }, showHideLens: function (e) {
            "show" != e || this.isLensActive || (this.options.lensFadeIn ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) : this.zoomLens.show(), this.isLensActive = !0), "hide" == e && this.isLensActive && (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(), this.isLensActive = !1)
        }, showHideTint: function (e) {
            "show" != e || this.isTintActive || (this.options.zoomTintFadeIn ? this.zoomTint.css({opacity: this.options.tintOpacity}).animate().stop(!0, !0).fadeIn("slow") : (this.zoomTint.css({opacity: this.options.tintOpacity}).animate(), this.zoomTint.show()), this.isTintActive = !0), "hide" == e && this.isTintActive && (this.options.zoomTintFadeOut ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) : this.zoomTint.hide(), this.isTintActive = !1)
        }, setLensPostition: function (e) {
        }, setWindowPostition: function (t) {
            var o = this;
            if (isNaN(o.options.zoomWindowPosition)) o.externalContainer = e("#" + o.options.zoomWindowPosition), o.externalContainerWidth = o.externalContainer.width(), o.externalContainerHeight = o.externalContainer.height(), o.externalContainerOffset = o.externalContainer.offset(), o.windowOffsetTop = o.externalContainerOffset.top, o.windowOffsetLeft = o.externalContainerOffset.left; else switch (o.options.zoomWindowPosition) {
                case 1:
                    o.windowOffsetTop = o.options.zoomWindowOffety, o.windowOffsetLeft = +o.nzWidth;
                    break;
                case 2:
                    o.options.zoomWindowHeight > o.nzHeight && (o.windowOffsetTop = -1 * (o.options.zoomWindowHeight / 2 - o.nzHeight / 2), o.windowOffsetLeft = o.nzWidth);
                    break;
                case 3:
                    o.windowOffsetTop = o.nzHeight - o.zoomWindow.height() - 2 * o.options.borderSize, o.windowOffsetLeft = o.nzWidth;
                    break;
                case 4:
                    o.windowOffsetTop = o.nzHeight, o.windowOffsetLeft = o.nzWidth;
                    break;
                case 5:
                    o.windowOffsetTop = o.nzHeight, o.windowOffsetLeft = o.nzWidth - o.zoomWindow.width() - 2 * o.options.borderSize;
                    break;
                case 6:
                    o.options.zoomWindowHeight > o.nzHeight && (o.windowOffsetTop = o.nzHeight, o.windowOffsetLeft = -1 * (o.options.zoomWindowWidth / 2 - o.nzWidth / 2 + 2 * o.options.borderSize));
                    break;
                case 7:
                    o.windowOffsetTop = o.nzHeight, o.windowOffsetLeft = 0;
                    break;
                case 8:
                    o.windowOffsetTop = o.nzHeight, o.windowOffsetLeft = -1 * (o.zoomWindow.width() + 2 * o.options.borderSize);
                    break;
                case 9:
                    o.windowOffsetTop = o.nzHeight - o.zoomWindow.height() - 2 * o.options.borderSize, o.windowOffsetLeft = -1 * (o.zoomWindow.width() + 2 * o.options.borderSize);
                    break;
                case 10:
                    o.options.zoomWindowHeight > o.nzHeight && (o.windowOffsetTop = -1 * (o.options.zoomWindowHeight / 2 - o.nzHeight / 2), o.windowOffsetLeft = -1 * (o.zoomWindow.width() + 2 * o.options.borderSize));
                    break;
                case 11:
                    o.windowOffsetTop = o.options.zoomWindowOffety, o.windowOffsetLeft = -1 * (o.zoomWindow.width() + 2 * o.options.borderSize);
                    break;
                case 12:
                    o.windowOffsetTop = -1 * (o.zoomWindow.height() + 2 * o.options.borderSize), o.windowOffsetLeft = -1 * (o.zoomWindow.width() + 2 * o.options.borderSize);
                    break;
                case 13:
                    o.windowOffsetTop = -1 * (o.zoomWindow.height() + 2 * o.options.borderSize), o.windowOffsetLeft = 0;
                    break;
                case 14:
                    o.options.zoomWindowHeight > o.nzHeight && (o.windowOffsetTop = -1 * (o.zoomWindow.height() + 2 * o.options.borderSize), o.windowOffsetLeft = -1 * (o.options.zoomWindowWidth / 2 - o.nzWidth / 2 + 2 * o.options.borderSize));
                    break;
                case 15:
                    o.windowOffsetTop = -1 * (o.zoomWindow.height() + 2 * o.options.borderSize), o.windowOffsetLeft = o.nzWidth - o.zoomWindow.width() - 2 * o.options.borderSize;
                    break;
                case 16:
                    o.windowOffsetTop = -1 * (o.zoomWindow.height() + 2 * o.options.borderSize), o.windowOffsetLeft = o.nzWidth;
                    break;
                default:
                    o.windowOffsetTop = o.options.zoomWindowOffety, o.windowOffsetLeft = o.nzWidth
            }
            o.isWindowSet = !0, o.windowOffsetTop += o.options.zoomWindowOffety, o.windowOffsetLeft += o.options.zoomWindowOffetx, o.zoomWindow.css({top: o.windowOffsetTop}), o.zoomWindow.css({left: o.windowOffsetLeft}), "inner" == o.options.zoomType && (o.zoomWindow.css({top: 0}), o.zoomWindow.css({left: 0})), o.windowLeftPos = String(-1 * ((t.pageX - o.nzOffset.left) * o.widthRatio - o.zoomWindow.width() / 2)), o.windowTopPos = String(-1 * ((t.pageY - o.nzOffset.top) * o.heightRatio - o.zoomWindow.height() / 2)), o.Etoppos && (o.windowTopPos = 0), o.Eloppos && (o.windowLeftPos = 0), o.Eboppos && (o.windowTopPos = -1 * (o.largeHeight / o.currentZoomLevel - o.zoomWindow.height())), o.Eroppos && (o.windowLeftPos = -1 * (o.largeWidth / o.currentZoomLevel - o.zoomWindow.width())), o.fullheight && (o.windowTopPos = 0), o.fullwidth && (o.windowLeftPos = 0), "window" != o.options.zoomType && "inner" != o.options.zoomType || (1 == o.zoomLock && (1 >= o.widthRatio && (o.windowLeftPos = 0), 1 >= o.heightRatio && (o.windowTopPos = 0)), o.largeHeight < o.options.zoomWindowHeight && (o.windowTopPos = 0), o.largeWidth < o.options.zoomWindowWidth && (o.windowLeftPos = 0), o.options.easing ? (o.xp || (o.xp = 0), o.yp || (o.yp = 0), o.loop || (o.loop = setInterval(function () {
                o.xp += (o.windowLeftPos - o.xp) / o.options.easingAmount, o.yp += (o.windowTopPos - o.yp) / o.options.easingAmount, o.scrollingLock ? (clearInterval(o.loop), o.xp = o.windowLeftPos, o.yp = o.windowTopPos, o.xp = -1 * ((t.pageX - o.nzOffset.left) * o.widthRatio - o.zoomWindow.width() / 2), o.yp = -1 * ((t.pageY - o.nzOffset.top) * o.heightRatio - o.zoomWindow.height() / 2), o.changeBgSize && (o.nzHeight > o.nzWidth ? ("lens" == o.options.zoomType && o.zoomLens.css({"background-size": o.largeWidth / o.newvalueheight + "px " + o.largeHeight / o.newvalueheight + "px"}), o.zoomWindow.css({"background-size": o.largeWidth / o.newvalueheight + "px " + o.largeHeight / o.newvalueheight + "px"})) : ("lens" != o.options.zoomType && o.zoomLens.css({"background-size": o.largeWidth / o.newvaluewidth + "px " + o.largeHeight / o.newvalueheight + "px"}), o.zoomWindow.css({"background-size": o.largeWidth / o.newvaluewidth + "px " + o.largeHeight / o.newvaluewidth + "px"})), o.changeBgSize = !1), o.zoomWindow.css({backgroundPosition: o.windowLeftPos + "px " + o.windowTopPos + "px"}), o.scrollingLock = !1, o.loop = !1) : (o.changeBgSize && (o.nzHeight > o.nzWidth ? ("lens" == o.options.zoomType && o.zoomLens.css({"background-size": o.largeWidth / o.newvalueheight + "px " + o.largeHeight / o.newvalueheight + "px"}), o.zoomWindow.css({"background-size": o.largeWidth / o.newvalueheight + "px " + o.largeHeight / o.newvalueheight + "px"})) : ("lens" != o.options.zoomType && o.zoomLens.css({"background-size": o.largeWidth / o.newvaluewidth + "px " + o.largeHeight / o.newvaluewidth + "px"}), o.zoomWindow.css({"background-size": o.largeWidth / o.newvaluewidth + "px " + o.largeHeight / o.newvaluewidth + "px"})), o.changeBgSize = !1), o.zoomWindow.css({backgroundPosition: o.xp + "px " + o.yp + "px"}))
            }, 16))) : (o.changeBgSize && (o.nzHeight > o.nzWidth ? ("lens" == o.options.zoomType && o.zoomLens.css({"background-size": o.largeWidth / o.newvalueheight + "px " + o.largeHeight / o.newvalueheight + "px"}), o.zoomWindow.css({"background-size": o.largeWidth / o.newvalueheight + "px " + o.largeHeight / o.newvalueheight + "px"})) : ("lens" == o.options.zoomType && o.zoomLens.css({"background-size": o.largeWidth / o.newvaluewidth + "px " + o.largeHeight / o.newvaluewidth + "px"}), o.largeHeight / o.newvaluewidth < o.options.zoomWindowHeight ? o.zoomWindow.css({"background-size": o.largeWidth / o.newvaluewidth + "px " + o.largeHeight / o.newvaluewidth + "px"}) : o.zoomWindow.css({"background-size": o.largeWidth / o.newvalueheight + "px " + o.largeHeight / o.newvalueheight + "px"})), o.changeBgSize = !1), o.zoomWindow.css({backgroundPosition: o.windowLeftPos + "px " + o.windowTopPos + "px"})))
        }, setTintPosition: function (e) {
            this.nzOffset = this.$elem.offset(), this.tintpos = String(-1 * (e.pageX - this.nzOffset.left - this.zoomLens.width() / 2)), this.tintposy = String(-1 * (e.pageY - this.nzOffset.top - this.zoomLens.height() / 2)), this.Etoppos && (this.tintposy = 0), this.Eloppos && (this.tintpos = 0), this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize)), this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), this.options.tint && (this.fullheight && (this.tintposy = 0), this.fullwidth && (this.tintpos = 0), this.zoomTintImage.css({left: this.tintpos + "px"}), this.zoomTintImage.css({top: this.tintposy + "px"}))
        }, swaptheimage: function (t, o) {
            var i = this, n = new Image;
            i.options.loadingIcon && (i.spinner = e("<div style=\"background: url('" + i.options.loadingIcon + "') no-repeat center;height:" + i.nzHeight + "px;width:" + i.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), i.$elem.after(i.spinner)), i.options.onImageSwap(i.$elem), n.onload = function () {
                i.largeWidth = n.width, i.largeHeight = n.height, i.zoomImage = o, i.zoomWindow.css({"background-size": i.largeWidth + "px " + i.largeHeight + "px"}), i.zoomWindow.css({"background-size": i.largeWidth + "px " + i.largeHeight + "px"}), i.swapAction(t, o)
            }, n.src = o
        }, swapAction: function (t, o) {
            var i = this, n = new Image;
            if (n.onload = function () {
                i.nzHeight = n.height, i.nzWidth = n.width, i.options.onImageSwapComplete(i.$elem), i.doneCallback()
            }, n.src = t, i.currentZoomLevel = i.options.zoomLevel, i.options.maxZoomLevel = !1, "lens" == i.options.zoomType && i.zoomLens.css({backgroundImage: "url('" + o + "')"}), "window" == i.options.zoomType && i.zoomWindow.css({backgroundImage: "url('" + o + "')"}), "inner" == i.options.zoomType && i.zoomWindow.css({backgroundImage: "url('" + o + "')"}), i.currentImage = o, i.options.imageCrossfade) {
                var s = i.$elem, r = s.clone();
                i.$elem.attr("src", t), i.$elem.after(r), r.stop(!0).fadeOut(i.options.imageCrossfade, function () {
                    e(this).remove()
                }), i.$elem.width("auto").removeAttr("width"), i.$elem.height("auto").removeAttr("height"), s.fadeIn(i.options.imageCrossfade), i.options.tint && "inner" != i.options.zoomType && (s = i.zoomTintImage, r = s.clone(), i.zoomTintImage.attr("src", o), i.zoomTintImage.after(r), r.stop(!0).fadeOut(i.options.imageCrossfade, function () {
                    e(this).remove()
                }), s.fadeIn(i.options.imageCrossfade), i.zoomTint.css({height: i.$elem.height()}), i.zoomTint.css({width: i.$elem.width()})), i.zoomContainer.css("height", i.$elem.height()), i.zoomContainer.css("width", i.$elem.width()), "inner" != i.options.zoomType || i.options.constrainType || (i.zoomWrap.parent().css("height", i.$elem.height()), i.zoomWrap.parent().css("width", i.$elem.width()), i.zoomWindow.css("height", i.$elem.height()), i.zoomWindow.css("width", i.$elem.width()))
            } else i.$elem.attr("src", t), i.options.tint && (i.zoomTintImage.attr("src", o), i.zoomTintImage.attr("height", i.$elem.height()), i.zoomTintImage.css({height: i.$elem.height()}), i.zoomTint.css({height: i.$elem.height()})), i.zoomContainer.css("height", i.$elem.height()), i.zoomContainer.css("width", i.$elem.width());
            i.options.imageCrossfade && (i.zoomWrap.css("height", i.$elem.height()), i.zoomWrap.css("width", i.$elem.width())), i.options.constrainType && ("height" == i.options.constrainType && (i.zoomContainer.css("height", i.options.constrainSize), i.zoomContainer.css("width", "auto"), i.options.imageCrossfade ? (i.zoomWrap.css("height", i.options.constrainSize), i.zoomWrap.css("width", "auto"), i.constwidth = i.zoomWrap.width()) : (i.$elem.css("height", i.options.constrainSize), i.$elem.css("width", "auto"), i.constwidth = i.$elem.width()), "inner" == i.options.zoomType && (i.zoomWrap.parent().css("height", i.options.constrainSize), i.zoomWrap.parent().css("width", i.constwidth), i.zoomWindow.css("height", i.options.constrainSize), i.zoomWindow.css("width", i.constwidth)), i.options.tint && (i.tintContainer.css("height", i.options.constrainSize), i.tintContainer.css("width", i.constwidth), i.zoomTint.css("height", i.options.constrainSize), i.zoomTint.css("width", i.constwidth), i.zoomTintImage.css("height", i.options.constrainSize), i.zoomTintImage.css("width", i.constwidth))), "width" == i.options.constrainType && (i.zoomContainer.css("height", "auto"), i.zoomContainer.css("width", i.options.constrainSize), i.options.imageCrossfade ? (i.zoomWrap.css("height", "auto"), i.zoomWrap.css("width", i.options.constrainSize), i.constheight = i.zoomWrap.height()) : (i.$elem.css("height", "auto"), i.$elem.css("width", i.options.constrainSize), i.constheight = i.$elem.height()), "inner" == i.options.zoomType && (i.zoomWrap.parent().css("height", i.constheight), i.zoomWrap.parent().css("width", i.options.constrainSize), i.zoomWindow.css("height", i.constheight), i.zoomWindow.css("width", i.options.constrainSize)), i.options.tint && (i.tintContainer.css("height", i.constheight), i.tintContainer.css("width", i.options.constrainSize), i.zoomTint.css("height", i.constheight), i.zoomTint.css("width", i.options.constrainSize), i.zoomTintImage.css("height", i.constheight), i.zoomTintImage.css("width", i.options.constrainSize))))
        }, doneCallback: function () {
            this.options.loadingIcon && this.spinner.hide(), this.nzOffset = this.$elem.offset(), this.nzWidth = this.$elem.width(), this.nzHeight = this.$elem.height(), this.currentZoomLevel = this.options.zoomLevel, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "window" == this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens && (this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight)))
        }, getCurrentImage: function () {
            return this.zoomImage
        }, getGalleryList: function () {
            var t = this;
            return t.gallerylist = [], t.options.gallery ? e("#" + t.options.gallery + " a").each(function () {
                var o = "";
                e(this).data("zoom-image") ? o = e(this).data("zoom-image") : e(this).data("image") && (o = e(this).data("image")), o == t.zoomImage ? t.gallerylist.unshift({
                    href: "" + o,
                    title: e(this).find("img").attr("title")
                }) : t.gallerylist.push({href: "" + o, title: e(this).find("img").attr("title")})
            }) : t.gallerylist.push({href: "" + t.zoomImage, title: e(this).find("img").attr("title")}), t.gallerylist
        }, changeZoomLevel: function (e) {
            this.scrollingLock = !0, this.newvalue = parseFloat(e).toFixed(2), newvalue = parseFloat(e).toFixed(2), maxheightnewvalue = this.largeHeight / (this.options.zoomWindowHeight / this.nzHeight * this.nzHeight), maxwidthtnewvalue = this.largeWidth / (this.options.zoomWindowWidth / this.nzWidth * this.nzWidth), "inner" != this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / maxheightnewvalue / this.nzHeight, this.newvalueheight = maxheightnewvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth, this.newvaluewidth = maxwidthtnewvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1), "lens" == this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.fullwidth = !0, this.newvaluewidth = maxheightnewvalue) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1))), "inner" == this.options.zoomType && (maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1)), scrcontinue = !1, "inner" == this.options.zoomType && (this.nzWidth > this.nzHeight && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)), this.nzHeight > this.nzWidth && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0))), "inner" != this.options.zoomType && (scrcontinue = !0), scrcontinue && (this.zoomLock = 0, this.changeZoom = !0, this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight && (this.currentZoomLevel = this.newvalueheight, "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({height: String(this.options.zoomWindowHeight / this.heightRatio) + "px"})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth && ("inner" != this.options.zoomType && this.newvaluewidth > this.newvalueheight && (this.currentZoomLevel = this.newvaluewidth), "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({width: String(this.options.zoomWindowWidth / this.widthRatio) + "px"})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), "inner" == this.options.zoomType && (this.changeBgSize = !0, this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth), this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth))), this.setPosition(this.currentLoc)
        }, closeAll: function () {
            self.zoomWindow && self.zoomWindow.hide(), self.zoomLens && self.zoomLens.hide(), self.zoomTint && self.zoomTint.hide()
        }, changeState: function (e) {
            "enable" == e && (this.options.zoomEnabled = !0), "disable" == e && (this.options.zoomEnabled = !1)
        }
    };
    e.fn.elevateZoom = function (t) {
        return this.each(function () {
            var o = Object.create(n);
            o.init(t, this), e.data(this, "elevateZoom", o)
        })
    }, e.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: .1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: .4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: .4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: e.noop,
        onZoomedImageLoaded: function () {
        },
        onImageSwap: e.noop,
        onImageSwapComplete: e.noop
    }
}(jQuery, window, document), slate.a11y = {
    pageLinkFocus: function (e) {
        function t() {
            e.first().removeClass(o).removeAttr("tabindex")
        }

        var o = "js-focus-hidden";
        e.first().attr("tabIndex", "-1").focus().addClass(o).one("blur", t)
    }, focusHash: function () {
        var e = window.location.hash;
        e && document.getElementById(e.slice(1)) && this.pageLinkFocus($(e))
    }, bindInPageLinks: function () {
        $("a[href*=#]").on("click", function (e) {
            this.pageLinkFocus($(e.currentTarget.hash))
        }.bind(this))
    }, trapFocus: function (e) {
        var t = e.namespace ? "focusin." + e.namespace : "focusin";
        e.$elementToFocus || (e.$elementToFocus = e.$container), e.$container.attr("tabindex", "-1"), e.$elementToFocus.focus(), $(document).on(t, function (t) {
            e.$container[0] === t.target || e.$container.has(t.target).length || e.$container.focus()
        })
    }, removeTrapFocus: function (e) {
        var t = e.namespace ? "focusin." + e.namespace : "focusin";
        e.$container && e.$container.length && e.$container.removeAttr("tabindex"), $(document).off(t)
    }
}, slate.cart = {
    cookiesEnabled: function () {
        var e = navigator.cookieEnabled;
        return e || (document.cookie = "testcookie", e = document.cookie.indexOf("testcookie") !== -1), e
    }
}, slate.utils = {
    findInstance: function (e, t, o) {
        for (var i = 0; i < e.length; i++) if (e[i][t] === o) return e[i]
    }, removeInstance: function (e, t, o) {
        for (var i = e.length; i--;) if (e[i][t] === o) {
            e.splice(i, 1);
            break
        }
        return e
    }, compact: function (e) {
        for (var t = -1, o = null == e ? 0 : e.length, i = 0, n = []; ++t < o;) {
            var s = e[t];
            s && (n[i++] = s)
        }
        return n
    }, defaultTo: function (e, t) {
        return null == e || e !== e ? t : e
    }
}, slate.rte = {
    wrapTable: function (e) {
        var t = "undefined" == typeof e.tableWrapperClass ? "" : e.tableWrapperClass;
        e.$tables.wrap('<div class="' + t + '"></div>')
    }, wrapIframe: function (e) {
        var t = "undefined" == typeof e.iframeWrapperClass ? "" : e.iframeWrapperClass;
        e.$iframes.each(function () {
            $(this).wrap('<div class="' + t + '"></div>'), this.src = this.src
        })
    }
}, slate.Sections = function () {
    this.constructors = {}, this.instances = [], $(document).on("shopify:section:load", this._onSectionLoad.bind(this)).on("shopify:section:unload", this._onSectionUnload.bind(this)).on("shopify:section:select", this._onSelect.bind(this)).on("shopify:section:deselect", this._onDeselect.bind(this)).on("shopify:section:reorder", this._onReorder.bind(this)).on("shopify:block:select", this._onBlockSelect.bind(this)).on("shopify:block:deselect", this._onBlockDeselect.bind(this))
}, slate.Sections.prototype = $.extend({}, slate.Sections.prototype, {
    _createInstance: function (e, t) {
        var o = $(e), i = o.attr("data-section-id"), n = o.attr("data-section-type");
        if (t = t || this.constructors[n], "undefined" != typeof t) {
            var s = $.extend(new t(e), {id: i, type: n, container: e});
            this.instances.push(s)
        }
    }, _onSectionLoad: function (e) {
        var t = $("[data-section-id]", e.target)[0];
        t && this._createInstance(t)
    }, _onSectionUnload: function (e) {
        var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
        t && ("function" == typeof t.onUnload && t.onUnload(e), this.instances = slate.utils.removeInstance(this.instances, "id", e.detail.sectionId))
    }, _onSelect: function (e) {
        var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
        t && "function" == typeof t.onSelect && t.onSelect(e)
    }, _onDeselect: function (e) {
        var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
        t && "function" == typeof t.onDeselect && t.onDeselect(e)
    }, _onReorder: function (e) {
        var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
        t && "function" == typeof t.onReorder && t.onReorder(e)
    }, _onBlockSelect: function (e) {
        var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
        t && "function" == typeof t.onBlockSelect && t.onBlockSelect(e)
    }, _onBlockDeselect: function (e) {
        var t = slate.utils.findInstance(this.instances, "id", e.detail.sectionId);
        t && "function" == typeof t.onBlockDeselect && t.onBlockDeselect(e)
    }, register: function (e, t) {
        this.constructors[e] = t, $("[data-section-type=" + e + "]").each(function (e, o) {
            this._createInstance(o, t)
        }.bind(this))
    }
}), slate.Currency = function () {
    function e(e, o) {
        function i(e, t, o, i) {
            if (t = slate.utils.defaultTo(t, 2), o = slate.utils.defaultTo(o, ","), i = slate.utils.defaultTo(i, "."), isNaN(e) || null == e) return 0;
            e = (e / 100).toFixed(t);
            var n = e.split("."), s = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + o), r = n[1] ? i + n[1] : "";
            return s + r
        }

        "string" == typeof e && (e = e.replace(".", ""));
        var n = "", s = /\{\{\s*(\w+)\s*\}\}/, r = o || t;
        switch (r.match(s)[1]) {
            case"amount":
                n = i(e, 2);
                break;
            case"amount_no_decimals":
                n = i(e, 0);
                break;
            case"amount_with_space_separator":
                n = i(e, 2, " ", ".");
                break;
            case"amount_no_decimals_with_comma_separator":
                n = i(e, 0, ",", ".");
                break;
            case"amount_no_decimals_with_space_separator":
                n = i(e, 0, " ")
        }
        return r.replace(s, n)
    }

    var t = "${{amount}}";
    return {formatMoney: e}
}(), slate.Image = function () {
    function e(e, t) {
        "string" == typeof e && (e = [e]);
        for (var o = 0; o < e.length; o++) {
            var i = e[o];
            this.loadImage(this.getSizedImageUrl(i, t))
        }
    }

    function t(e) {
        (new Image).src = e
    }

    function o(e) {
        var t = e.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);
        return t ? t[1] : null
    }

    function i(e, t) {
        if (null === t) return e;
        if ("master" === t) return this.removeProtocol(e);
        var o = e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
        if (o) {
            var i = e.split(o[0]), n = o[0];
            return this.removeProtocol(i[0] + "_" + t + n)
        }
        return null
    }

    function n(e) {
        return e.replace(/http(s)?:/, "")
    }

    return {preload: e, loadImage: t, imageSize: o, getSizedImageUrl: i, removeProtocol: n}
}();
'use strict';

window.theme = window.theme || {};

/*================ Theme ================*/
if (Shopify && typeof Shopify === 'object') {
    Shopify.addItemObj = function (obj, n, onerror) {
        var r = {
            type: "POST",
            url: "/cart/add.js",
            data: $.extend({
                quantity: 1
            }, obj),
            dataType: "json",
            success: function (e) {
                "function" == typeof n ? n(e) : Shopify.onItemAdded(e);
            },
            error: function (e, t) {
                Shopify.onError(e, t);

                if (onerror) {
                    onerror();
                }
            }
        };

        jQuery.ajax(r);
    };
    Shopify.changeItemObj = function (obj, n) {
        var r = {
            type: "POST",
            url: "/cart/change.js",
            data: $.extend({
                quantity: 1
            }, obj),
            dataType: "json",
            success: function (e) {
                "function" == typeof n ? n(e) : Shopify.onCartUpdate(e);
            },
            error: function (e, t) {
                Shopify.onError(e, t);
            }
        };

        jQuery.ajax(r);
    };
    Shopify.onItemAdded = function (e) {
        theme.Popups.cartItemAdded(e.title);
    };
    Shopify.addValueToString = function (str, obj) {
        $.each(obj, function (i) {
            str = str.replace('{{ ' + i + ' }}', this);
        });

        return str;
    };
    Shopify.handleize = function (str) {
        return str.toLowerCase().replace(/[-+!"#$???%&'* ,./:;<=>?@[\\\]_`{|}~]+/g, "-").replace(/??/g, "a").replace(/??/g, "o").replace(/??/g, "u").replace(/??/g, "ss").replace(/??/g, "o").replace(/[()??]+/g, "").replace(/^-+|-+$/g, "");
    };
}
theme.Global = function () {

    function Global() {
        this.settings = {
            set_offset_with_fixed_body: [
                '.header__content--sticky',
                '.header--transparent',
                '.footbar',
                '.footer--fixed',
                '#admin_bar_iframe',
                '#preview-bar-iframe'
            ]
        };

        this.dom = {};

        this.load();
    }

    Global.prototype = $.extend({}, Global.prototype, {
        load: function() {
            var ua = window.navigator.userAgent.toLowerCase(),
                current_bp,
                $scroll_example = $('.scroll-offset-example');

            window.ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
            window.edge = document.documentMode || /edge/.test(ua);
            window.ios = navigator.userAgent.match(/like Mac OS X/i);
            window.moz = typeof InstallTrigger !== 'undefined';
            window.$window = $(window);
            window.$document = $(document);
            window.$html = $('html');
            window.$body = $html.find('body');



            this.dom.$icons = $('#theme-icons');

            theme.rtl = $html.attr('dir') === 'rtl' ? true : false;

            theme.breakpoints = {
                values: {
                    xs: 0,
                    sm: 541,
                    md: 778,
                    lg: 1025,
                    xl: 1260
                }
            };
            theme.breakpoints.main = theme.breakpoints.values.lg;
            theme.current = {};

            function checkWindow() {
                theme.current.width = window.innerWidth;
                theme.current.height = window.innerHeight;
            };

            function checkBreakpoint() {
                theme.current.is_mobile = theme.current.width < theme.breakpoints.main;
                theme.current.is_desktop = !theme.current.is_mobile;

                $.each(theme.breakpoints.values, function(k, v) {
                    if(v > theme.current.width) {
                        return false;
                    }

                    theme.current.bp = k;
                });

                if(current_bp && current_bp != theme.current.bp) {
                    $(window).trigger('theme.changed.breakpoint');
                }

                current_bp = theme.current.bp;
            };

            function scrollPaddingStyle() {
                var $style = $('style.scroll-offset-style');

                theme.current.scroll_w = $scroll_example[0].offsetWidth - $scroll_example[0].clientWidth;

                if(theme.current.scroll_w > 0) {
                    if(!$style.length) {
                        var offset_scroll_style_html = 'body.overflow-hidden.offset-scroll{padding-right:' + theme.current.scroll_w + 'px;}.fixed-elem.offset-scroll{padding-right:' + theme.current.scroll_w + 'px;}';

                        $('head').append($('<style>').addClass('scroll-offset-style').html(offset_scroll_style_html));
                    }
                } else {
                    $style.remove();
                }
            };

            $(window).on('resize', $.debounce(250, function() {
                checkWindow();
                checkBreakpoint();

                $(window).trigger('theme.resize');
            }));

            $(window).on('theme.changed.breakpoint', function() {
                scrollPaddingStyle();
            });

            function checkLocation() {
                if ($('.klarna-container').length){
                    $.ajax({
                        type: 'GET',
                        url: 'https://api.ipgeolocation.io/ipgeo?apiKey=89ddf96f4a4c416b9cf2ba76d71c5ed7&fields=geo',
                        dataType: 'json',
                        success: function (data) {
                            if (data && data.country_code2 && data.country_code2 !== 'US') {
                                $('.klarna-container').remove();
                                window.localStorage.setItem('show-klarna', 'false');
                            }
                            else {
                                $('.klarna-container').css('visibility', 'visible').css('max-height', 'none');
                                window.localStorage.setItem('show-klarna', 'true');
                            }
                        },
                        error: function(){
                            $('.klarna-container').css('visibility', 'visible').css('max-height', 'none');
                        }
                    });
                    if (window.localStorage.getItem('show-klarna')) {
                        if (window.localStorage.getItem('show-klarna') == 'true') {
                            $('.klarna-container').css('visibility', 'visible').css('max-height', 'none');
                        }
                        else {
                            $('.klarna-container').remove();
                        }
                    }

                };
            }
            checkLocation();
            checkWindow();
            checkBreakpoint();
            scrollPaddingStyle();

            $(window).on('load', function () {
                theme.is_loaded = true;
            });
        },
        responsiveHandler: function(obj) {
            var namespace = obj.namespace ? obj.namespace : '.widthHandler',
                current_bp;

            function bind() {
                $.each(obj.events, function(event, func) {
                    if(obj.delegate) {
                        $(obj.element).on(event + namespace, obj.delegate, func);
                    } else {
                        $(obj.element).on(event + namespace, func);
                    }
                });
            };

            function unbind() {
                $.each(obj.events, function(event) {
                    $(obj.element).unbind(event + namespace);
                });
            };

            function on_resize() {
                if(theme.current.is_mobile !== current_bp) {
                    current_bp = theme.current.is_mobile;

                    if((obj.on_desktop && theme.current.is_desktop) || (obj.on_mobile && theme.current.is_mobile)) {
                        bind();
                    } else {
                        unbind();
                    }
                }
            };

            $(window).on('theme.resize' + namespace, function() {
                on_resize();
            });

            on_resize();

            return {
                unbind: function() {
                    $(window).unbind('theme.resize' + namespace);
                    unbind();
                }
            }
        },

    });
    theme.Global = new Global;

};


theme.ImagesLazyLoad = function () {

    function ImagesLazyLoad() {
        this.load();
    }

    ImagesLazyLoad.prototype = $.extend({}, ImagesLazyLoad.prototype, {
        load: function () {
            this.init();

            this.page_is_loaded = true;
        },
        init: function () {
            var _ = this;

            this.api = new LazyLoad({
                elements_selector: '.lazyload',
                threshold: 100,
                callback_enter: function (elem) {
                    var $elem = $(elem),
                        url;

                    if ($elem.attr('data-bg')) {
                        url = $elem.attr('data-master') || $elem.attr('data-bg');

                        $elem.css({
                            'background-image': _.buildSrcset($elem, url, 'bg')
                        });
                    } else {
                        url = $elem.attr('data-master') || $elem.attr('data-srcset');

                        $elem.attr('data-srcset', _.buildSrcset($elem, url, 'srcset'));
                    }
                },
                callback_load: function (elem) {
                    $(elem).trigger('lazyloaded');
                }
            });

            function checkImages() {
                $('.lazyload.loaded').each(function () {
                    var $this = $(this),
                        url = $this.attr('data-master');

                    if (!url) {
                        return;
                    }

                    if ($this.attr('data-bg')) {
                        $this.css({
                            'background-image': _.buildSrcset($this, url, 'bg')
                        });
                    } else {
                        $this.attr('srcset', _.buildSrcset($this, url, 'srcset'));
                    }
                });
            }

            $window.on('load', function () {
                $window.on('theme.resize.lazyload checkImages', checkImages);
            });
        },
        update: function () {
            if (false) {
                this.api.update();
            }
        },
        buildSrcset: function ($elem, url, type) {
            var scale = +$elem.attr('data-scale') || 1,
                $parent,
                aspect_ratio,
                width,
                height,
                scale_perspective;

            if (type === 'bg') {
                width = $elem.width();
                width *= scale;

                width = Math.ceil(width);

                return width > 0 ? url.replace('[width]', width) : $elem.attr('data-bg');
            } else {
                $parent = $elem.parent();
                width = $parent.width();
                height = $parent.innerHeight();
                aspect_ratio = $elem.attr('data-aspect-ratio');
                scale_perspective = +$elem.attr('data-scale-perspective') || 1;
                width *= scale;
                height *= scale;

                if (theme.current.is_desktop) {
                    width *= scale_perspective;
                    height *= scale_perspective;
                }

                width = Math.ceil(Math.max(width, height * aspect_ratio));

                return width > 0 && url.indexOf('{width}') !== -1 ? url.replace('{width}', width) + ' 1x, ' + url.replace('{width}', width * 2) + ' 2x' : $elem.attr('data-srcset');
            }
        }
    });

    theme.ImagesLazyLoad = new ImagesLazyLoad;
};
theme.Position = function () {

    function Position() {
        this.settings = {
            name: 'data-js-position-name',
            desktop: 'data-js-position-desktop',
            mobile: 'data-js-position-mobile',
            all: 'data-js-position-all'
        };

        this.selectors = {
            elements: '.js-position'
        };

        this.load();
    }

    Position.prototype = $.extend({}, Position.prototype, {
        load: function () {
            var _ = this,
                current_position_is_desktop;

            function check_position() {
                if (current_position_is_desktop !== theme.current.is_desktop) {
                    _.update();

                    current_position_is_desktop = theme.current.is_desktop;
                }
            }

            $(window).on('theme.resize.position', function () {
                check_position();
            });

            check_position();

            var $elements_append_onload = $(this.selectors.elements).filter('[data-js-position-onload]');

            this.append($elements_append_onload, this.settings.all);
        },
        update: function (name) {
            var $elements = name ? $('[' + this.settings.name + '="' + name + '"]') : $(this.selectors.elements).not('[data-js-position-onload]'),
                append_to = theme.current.is_desktop ? this.settings.desktop : this.settings.mobile;

            this.append($elements, append_to);
        },
        append: function ($elements, append_to) {
            var _ = this;

            $elements.each(function () {
                var $this = $(this),
                    append_to_name = $this.attr(_.settings.name);

                var $append_to = $('[' + append_to + '="' + append_to_name + '"]');

                if ($append_to.length && !$.contains($append_to[0], $this[0])) {
                    if ($append_to.find('[' + _.settings.name + '="' + append_to_name + '"]').length) {
                        $this.remove();
                    } else {
                        $this.appendTo($append_to);
                    }
                }
            });
        }
    });

    theme.Position = new Position;
};
theme.Dropdown = function () {

    var settings = {
        namespace: '.dropdown'
    };

    function Dropdown() {
        this.selectors = {
            element: '.js-dropdown',
            button: '[data-js-dropdown-button]',
            dropdown: '[data-js-dropdown]'
        };

        this.load();
    }

    Dropdown.prototype = $.extend({}, Dropdown.prototype, {
        duration: function () {
            return theme.animations.dropdown.duration * 1000;
        },
        load: function () {
            var _ = this;

            theme.Global.responsiveHandler({
                namespace: settings.namespace,
                element: $body,
                delegate: this.selectors.button + ', ' + this.selectors.dropdown,
                on_desktop: true,
                events: {
                    'show hide close': function (e) {
                        var $elem = $(this).parents(_.selectors.element),
                            $btn = $elem.find(_.selectors.button),
                            $dropdown = $elem.find(_.selectors.dropdown);

                        _['_' + e.type]($elem, $dropdown, $btn);
                    }
                }
            });

            theme.Global.responsiveHandler({
                namespace: settings.namespace,
                element: $body,
                delegate: this.selectors.button,
                on_desktop: true,
                events: {
                    'mouseenter': function () {
                        var $this = $(this),
                            $elem = $this.parents(_.selectors.element),
                            $dropdown = $elem.find(_.selectors.dropdown);

                        if (!$this.hasClass('active') && !$dropdown.hasClass('show')) {
                            _._show($elem, $dropdown, $this);
                        }
                    },
                    'mousedown': function (e) {
                        var $this = $(this),
                            $elem = $this.parents(_.selectors.element),
                            $dropdown = $elem.find(_.selectors.dropdown);

                        if (!$this.hasClass('active')) {
                            _._show($elem, $dropdown, $this, true);

                            $body.one('mousedown' + settings.namespace, function (e) {
                                if (!$(e.target).parents(_.selectors.dropdown + ', ' + _.selectors.button).length) {
                                    $(_.selectors.dropdown).trigger('hide');
                                }
                            });
                        } else {
                            _._hide($elem, $dropdown, $this);
                        }

                        e.preventDefault();
                        return false;
                    }
                }
            });

            theme.Global.responsiveHandler({
                namespace: settings.namespace,
                element: $body,
                delegate: this.selectors.element,
                on_desktop: true,
                events: {
                    'mouseleave': function () {
                        var $this = $(this),
                            $btn = $this.find(_.selectors.button),
                            $dropdown = $this.find(_.selectors.dropdown);

                        if (!$btn.hasClass('active')) {
                            _._hide($this, $dropdown, $btn);
                        }
                    }
                }
            });
        },
        _show: function ($elem, $dropdown, $btn, is_click) {
            $(this.selectors.dropdown).not($dropdown).trigger('close');

            if (is_click) {
                $btn.addClass('active');
            }

            if ($dropdown.hasClass('show')) {
                return;
            }

            $(this.selectors.element).removeClass('hovered');
            $elem.addClass('hovered');

            $dropdown.addClass('show animate');

            if (window.edge) {
                $dropdown.addClass('visible');
            } else {
                $dropdown.velocity('stop', true).removeAttr('style');

                $dropdown.velocity('slideDown', {
                    duration: this.duration(),
                    begin: function () {
                        setTimeout(function () {
                            $dropdown.addClass('visible');
                        }, 0);
                    },
                    complete: function () {
                        $dropdown.removeAttr('style');
                    }
                });
            }
        },
        _hide: function ($elem, $dropdown, $btn) {
            if (window.edge) {
                $dropdown.removeClass('show animate visible');
                $elem.removeClass('hovered');
            } else {
                $dropdown.velocity('stop', true);

                $dropdown.velocity('slideUp', {
                    duration: this.duration(),
                    begin: function () {
                        $dropdown.removeClass('visible');
                    },
                    complete: function () {
                        $dropdown.removeClass('show animate').removeAttr('style');
                        $elem.removeClass('hovered');
                    }
                });
            }

            $btn.removeClass('active');
            $body.unbind('click' + settings.namespace);
        },
        _close: function ($dropdown, $btn) {
            $dropdown.velocity('stop');
            $dropdown.removeClass('show animate visible').removeAttr('style');
            $btn.removeClass('active');
            $body.unbind('click' + settings.namespace);
        }
    });

    theme.Dropdown = new Dropdown;
};
theme.Select = function () {

    var settings = {
        namespace: '.select'
    };

    function Select() {
        this.selectors = {
            element: '.js-select',
            dropdown: '[data-js-select-dropdown]'
        };

        this.load();
    }

    Select.prototype = $.extend({}, Select.prototype, {
        load: function () {
            var _ = this;

            theme.Global.responsiveHandler({
                namespace: settings.namespace,
                element: $body,
                delegate: this.selectors.element + ' ' + this.selectors.dropdown + ' span',
                on_desktop: true,
                events: {
                    'click': function () {
                        var $this = $(this);

                        if (!$this.hasClass('selected') && !$this[0].hasAttribute('disabled')) {
                            var value = $this.attr('data-value'),
                                $dropdown = $this.parents(_.selectors.dropdown),
                                $wrapper = $this.parents('.js-select'),
                                $select = $wrapper.find('select');

                            $select.val(value);

                            $dropdown.find('span').removeClass('selected');
                            $this.addClass('selected');

                            $dropdown.trigger('hide');

                            $select.change();
                        }
                    }
                }
            });

            $body.on('change update' + settings.namespace, this.selectors.element + ' select', function () {
                var $this = $(this),
                    $dropdown_items = $this.parents(_.selectors.element).find(_.selectors.dropdown + ' span'),
                    value = $this.val();

                $dropdown_items.each(function () {
                    var $this = $(this);

                    $this[$this.attr('data-value') == value ? 'addClass' : 'removeClass']('selected');
                });
            });

            $(this.selectors.element + '[data-onload-check] select').trigger('update' + settings.namespace);
        }
    });

    theme.Select = new Select;
};
theme.Loader = function () {

    function Loader() {
        var _ = this;

        this.$loader = $('#theme-loader .js-loader');

        _.load();
    }

    Loader.prototype = $.extend({}, Loader.prototype, {
        load: function () {
            var $loader = $body.find('.js-loader[data-js-page-loader]');

            if (!$loader.hasClass('visible')) {
                $loader.remove();

                return;
            }

            $loader.on('transitionend', function () {
                $loader.remove();
            }).addClass('animate').removeClass('visible');

            if ($loader.css('transition-duration') === '0s') {
                $loader.trigger('transitionend');
            }
        },
        set: function ($elem, obj) {
            if (!$elem.find('> .js-loader').length) {
                var $clone = this.$loader.clone(),
                    $spinner = $clone.find('[data-js-loader-spinner]');

                if (obj) {
                    if (obj.bg === false) {
                        $clone.find('[data-js-loader-bg]').remove();
                    }
                    if (obj.spinner === false) {
                        $spinner.remove();
                    }
                    if (obj.fixed === true) {
                        $spinner.addClass('fixed');
                    }
                    if (obj.delay) {
                        $clone.addClass('delay');
                    }
                }

                if (!$elem.find('[data-js-popup-name="wishlist-full"]').is('.show.visible')) {
                    $elem.addClass('loading-element');
                }

                $elem.append($clone);

                $clone.addClass('animate');

                setTimeout(function () {
                    $spinner.addClass('animate');
                    $clone.addClass('visible');
                }, 0);
            }
        },
        unset: function ($elem) {
            $elem.find('> .loader').remove();
            $elem.removeClass('loading-element');
        }
    });

    theme.Loader = new Loader;
};

theme.Popups = function () {

    function Popups() {
        this.selectors = {
            popup: '.js-popup',
            button: '.js-popup-button',
            button_close: '[data-js-popup-close]',
            bg: '[data-js-popup-bg]'
        };

        this.load();
    }

    Popups.prototype = $.extend({}, Popups.prototype, {
        load: function () {
            if ($(this.selectors.popup).length) {
                var _ = this;

                $body.on('click', this.selectors.button, function (e) {
                    var $this = $(this),
                        name = $this.attr('data-js-popup-button');

                    if (_.callByName(name, $this)) {
                        e.preventDefault();
                        return false;
                    }
                });

                $body.on('click', this.selectors.button_close, function (e) {
                    var $this = $(this),
                        name = $this.parents('[data-js-popup-name]').attr('data-js-popup-name');

                    _.closeByName(name, $this);

                    e.preventDefault();
                    return false;
                });

                $body.on('click', this.selectors.popup + ' [data-js-popup-name]', function (e) {
                    var $t = $(e.target);

                    if ($t[0].hasAttribute('data-js-popup-name')) {
                        var name = $t.attr('data-js-popup-name');
                        _.closeByName(name, $t);
                    }
                });

                setTimeout(function () {
                    $body.find(_.selectors.popup + ' [data-js-auto-call="true"]').each(function () {
                        _.callByName($(this).attr('data-js-popup-name'));
                    });
                }, 0);
            }
        },
        getByName: function (name) {
            var $popup = $(this.selectors.popup),
                $content = $popup.find('[data-js-popup-name="' + name + '"]');

            return $content;
        },
        callByName: function (name, $target) {
            var _ = this,
                $popup = $(this.selectors.popup),
                $bg = $(this.selectors.bg),
                $content = $popup.find('[data-js-popup-name="' + name + '"]'),
                is_ajax = $content.attr('data-js-popup-ajax') !== undefined ? true : false;

            function onCall() {
                $popup.scrollTop(0);

                $bg.one('transitionend', function () {
                    $content.add($bg).removeClass('animate');

                    $content.trigger('call.after', [$content, $target ? $target : null]);
                });

                $content.add($bg).addClass('animate');

                setTimeout(function () {
                    $content.add($bg).addClass('visible');

                    if ($bg.css('transition-duration') === '0s') {
                        $bg.trigger('transitionend');
                    }
                }, 0);

                if ($content[0].hasAttribute('data-js-popup-mobile-only')) {
                    $window.on('theme.changed.breakpoint.popups', function () {
                        if (!theme.current.is_mobile) {
                            _.closeByName(name);
                        }
                    });
                }
            }

            if ($content.length) {
                if (theme.current.is_desktop && $content[0].hasAttribute('data-js-popup-mobile-only')) {
                    return false;
                }

                $bg.unbind('transitionend');

                $content.trigger('call.before', [$content, $target ? $target : null]);

                $popup.addClass('active');
                if (name == 'cart' && $popup.find('[data-js-popup-name="wishlist-full"]').hasClass('show')) {
                    $popup.find('[data-js-popup-name]').not('[data-js-popup-name="wishlist-full"]').removeClass('show visible');
                    $popup.find('[data-js-popup-name="wishlist-full"]').addClass('behind_bg');
                } else {
                    $popup.find('[data-js-popup-name]').removeClass('show visible');
                    $popup.find('[data-js-popup-name="wishlist-full"]').removeClass('behind_bg');
                }

                $popup.add($content).addClass('show');

                theme.Global.fixBody();

                if (is_ajax) {
                    $content.addClass('is-process-loading');

                    theme.Loader.set($popup, {
                        fixed: true,
                        delay: true
                    });

                    $content.on('contentloaded', function () {
                        $content.removeClass('is-process-loading');

                        onCall();

                        theme.Loader.unset($popup);
                    });
                } else {
                    onCall();
                }

                $body.on('keyup.popups', function (e) {
                    if (e.keyCode === 27) {
                        _.closeAll();
                    }
                });

                $content.trigger('call.visible', [$content, $target ? $target : null]);

                return true;
            } else {
                return false;
            }
        },
        closeByName: function (name, $target) {
            var $popup = $(this.selectors.popup),
                $bg = $(this.selectors.bg),
                $content = $popup.find('[data-js-popup-name="' + name + '"]'),
                duration = $bg.css('transition-duration');

            if ($content.length) {
                $content.unbind('contentloaded').removeClass('is-process-loading');
                $bg.unbind('transitionend');
                $body.unbind('keyup.popups');
                $window.unbind('theme.changed.breakpoint.popups');
                $content.trigger('close.before', [$content, $target ? $target : null]);
                theme.Loader.unset($popup);
                $popup.find('[data-js-popup-name="wishlist-full"]').removeClass('behind_bg');
                if (name == 'cart' && $popup.find('[data-js-popup-name="wishlist-full"]').hasClass('show')) {
                    $bg.one('transitionend', function () {
                        $content.removeClass('show');
                        $content.removeClass('animate');
                        $content.trigger('close.after', [$content, $target ? $target : null]);
                    });
                    $content.addClass('animate');
                    if (!$bg.hasClass('visible') || $bg.css('transition-duration') === '0s') {
                        $bg.trigger('transitionend');
                    }
                    $content.removeClass('visible');
                } else {
                    $bg.one('transitionend', function () {
                        $popup.add($content).removeClass('show');
                        $content.add($bg).removeClass('animate');
                        theme.Global.unfixBody();
                        $popup.removeClass('active');
                        $content.trigger('close.after', [$content, $target ? $target : null]);
                    });
                    $content.add($bg).addClass('animate');
                    if (!$bg.hasClass('visible') || $bg.css('transition-duration') === '0s') {
                        $bg.trigger('transitionend');
                    }
                    $content.add($bg).removeClass('visible');
                }
                return true;
            } else {
                return false;
            }
        },
        closeAll: function () {
            var _ = this,
                $popup = $(this.selectors.popup + '.active'),
                $content = $popup.find('[data-js-popup-name]').filter('.show, .is-process-loading');

            if ($content.length) {
                $content.each(function () {
                    _.closeByName($content.attr('data-js-popup-name'));
                });

                return true;
            } else {
                return false;
            }
        },
        cartItemAdded: function (title) {
            alert(theme.strings.general.popups.cart.item_added.replace('{{ title }}', title));
        },
        cartLimitIsExceeded: function (limit) {
            alert(theme.strings.general.popups.cart.limit_is_exceeded.replace('{{ limit }}', limit));
        },
        addHandler: function (name, event, func) {
            $body.on(event, '[data-js-popup-name="' + name + '"]', function (e, $popup, $target) {
                func($popup, $target);
            });
        },
        removeHandler: function (name, event) {
            $body.unbind(event);
        }
    });

    theme.Popups = new Popups;
};


theme.PopupAccount = function () {

    function PopupAccount() {
        this.settings = {
            popup_name: 'account'
        };

        this.selectors = {
            account: '.js-popup-account',
            show_sign_up: '.js-popup-account-show-sign-up'
        };

        this.load();
    }

    PopupAccount.prototype = $.extend({}, PopupAccount.prototype, {
        load: function () {
            var _ = this;

            $body.on('click', this.selectors.show_sign_up, function (e) {
                var $account = $(_.selectors.account);

                $account.find('.popup-account__login').addClass('d-none-important');
                $account.find('.popup-account__sign-up').removeClass('d-none-important');

                e.preventDefault();
                return false;
            });

            theme.Popups.addHandler(_.settings.popup_name, 'close.after', function () {
                var $account = $(_.selectors.account);

                $account.find('.popup-account__login').removeClass('d-none-important');
                $account.find('.popup-account__sign-up').addClass('d-none-important');
            });
        }
    });

    theme.PopupAccount = new PopupAccount;
};


theme.PopupSearch = function () {

    function PopupSearch() {
        this.settings = {
            popup_name: 'navigation'
        };

        this.selectors = {
            search: '.js-popup-search-ajax'
        };

        this.load();
    }

    PopupSearch.prototype = $.extend({}, PopupSearch.prototype, {
        load: function () {
            var _ = this,
                q = '',
                ajax;

            function resultToHTML($search, $results, data) {
                if (data.count > 0) {
                    var $template = $($('#template-search-ajax')[0].content),
                        $fragment = $(document.createDocumentFragment()),
                        limit = +$search.attr('data-js-max-products') - 1;

                    $.each(data.results, function (i) {
                        var $item = $template.clone(),
                            $image = $item.find('.product-search__image img'),
                            $title = $item.find('.product-search__title a'),
                            $price = $item.find('.product-search__price .price'),
                            $links = $item.find('a');

                        $links.attr('href', this.url);
                        $title.html(this.title);
                        $image.attr('srcset', this.thumbnail + ' 1x, ' + this.thumbnail2x + ' 2x');

                        if (this.price) {
                            if (this.min_price) {
                                theme.ProductCurrency.setPrice($price, this.min_price, this.compare_at_price);
                                $price.prepend("From ");
                            } else {
                                theme.ProductCurrency.setPrice($price, this.price, this.compare_at_price);
                            }
                        } else {
                            $price.remove();
                        }

                        $fragment.append($item);

                        return i < limit;
                    });

                    $results.html('');
                    $results.append($fragment);

                    theme.ImagesLazyLoad.update();
                    theme.ProductCurrency.update();
                } else {
                    $results.html('');
                }

                $results[data.count > 0 ? 'removeClass' : 'addClass']('d-none-important');
            }

            function processResult($search, $content, q, data) {
                var $results = $search.find('.search__result'),
                    $view_all = $search.find('.search__view-all'),
                    $button_view_all = $view_all.find('a'),
                    $empty_result = $search.find('.search__empty'),
                    $menu_mobile = $('[data-js-menu-mobile]'),
                    $navigation = $('[data-js-popup-navigation-button]'),
                    navigation_button_status = q === '' ? 'close' : 'search';

                $button_view_all.attr('href', '/search?q=' + q);
                $view_all[data.count > 0 ? 'removeClass' : 'addClass']('d-none-important');
                $empty_result[q === '' || data.count > 0 ? 'addClass' : 'removeClass']('d-none-important');
                $menu_mobile[q === '' ? 'removeClass' : 'addClass']('d-none-important');

                $navigation.attr('data-js-popup-navigation-button', navigation_button_status);

                theme.Menu.closeMobileMenu();

                $results.addClass('invisible');

                resultToHTML($search, $results, data);

                $results.removeClass('invisible');

                theme.Loader.unset($search);
            }

            $body.on('keyup', this.selectors.search + ' input', $.debounce(500, function (e) {
                var $search = $(this).parents(_.selectors.search);

                if (e.keyCode !== 27) {
                    var $this = $(this),
                        value = $this.val(),
                        $content = $search.find('.search__content');

                    if (value !== q) {
                        q = value;

                        if (q === '') {
                            processResult($search, $content, q, {count: 0});
                        } else {
                            if (ajax) {
                                ajax.abort();
                            }

                            theme.Loader.set($search);

                            ajax = $.getJSON({
                                url: '/search',
                                type: 'POST',
                                data: {q: q, view: 'json'},
                                success: function (data) {
                                    processResult($search, $content, q, data);
                                }
                            });
                        }
                    }
                }
            }));

            function clear() {
                var $search = $(_.selectors.search),
                    $content = $search.find('.search__content');

                q = '';

                $search.find('input').val('');
                processResult($search, $content, q, {count: 0});
            }

            $body.on('keyup', this.selectors.search + ' input', function (e) {
                if (e.keyCode === 27) {
                    var $search = $(this).parents(_.selectors.search),
                        $content = $search.find('.search__content');

                    q = '';

                    theme.Popups.closeByName('navigation');
                    processResult($search, $content, q, {count: 0});
                }
            });

            theme.Popups.addHandler(this.settings.popup_name, 'close.before', function () {
                clear();
            });

            theme.Popups.addHandler(this.settings.popup_name, 'call.after', function ($content) {
                if (theme.current.is_desktop) {
                    $content.find('input').focus();
                }
            });

            theme.Global.responsiveHandler({
                namespace: '.searchMobileBack',
                element: $body,
                delegate: '[data-js-popup-navigation-button="search"]',
                on_mobile: true,
                events: {
                    'click': function () {
                        clear();
                    }
                }
            });
        }
    });

    theme.PopupSearch = new PopupSearch;
};


theme.PopupCart = function () {

    function PopupCart() {
        this.settings = {
            popup_name: 'cart'
        };

        this.selectors = {
            cart: '.js-popup-cart-ajax'
        };

        this.load();
    }

    PopupCart.prototype = $.extend({}, PopupCart.prototype, {
        load: function () {
            var _ = this;

            theme.Popups.addHandler(this.settings.popup_name, 'call.visible', function ($popup, $target) {
                _.update(function () {
                    $popup.trigger('contentloaded');
                });
            });
        },
        _resultToHTML: function ($items, data) {
            var $template = $($('#template-cart-ajax')[0].content),
                $fragment = $(document.createDocumentFragment());

            $.each(data.items, function (i) {
                var $item = $template.clone(),
                    $product = $item.find('.product-cart'),
                    $image = $item.find('.product-cart__image img'),
                    $title = $item.find('.product-cart__title a'),
                    $variant = $item.find('.product-cart__variant'),
                    $price = $item.find('.product-cart__price .price'),
                    $properties = $item.find('.product-cart__properties'),
                    $quantity = $item.find('.product-cart__quantity'),
                    $remove = $item.find('.product-cart__remove'),
                    $links = $item.find('a').not('.product-cart__remove');

                $product.attr('data-product-variant-id', this.variant_id);
                $links.attr('href', this.url);
                $title.html(this.product_title);
                $image.attr('src', Shopify.resizeImage(this.image, '120x')).attr('srcset', Shopify.resizeImage(this.image, '120x') + ' 1x, ' + Shopify.resizeImage(this.image, '240x') + ' 2x');
                $quantity.html(this.quantity);
                $remove.attr('href', '/cart/change?line=' + (i + 1) + '&quantity=0').attr('data-key', this.key);
                if (this.variant !== 'Default variant') {
                    $variant.html(this.variant_title).removeClass('d-none-important');
                }

                theme.ProductCurrency.setPrice($price, this.discounted_price);

                $fragment.append($item);
            });

            $items.html('');
            $items.append($fragment);
        },
        update: function (callback) {
            var _ = this;

            if (this.ajax) {
                this.ajax.abort();
            }

            this.ajax = $.getJSON("/cart.js", function (data) {
                var $cart = $(_.selectors.cart),
                    $content = $cart.find('.popup-cart__content'),
                    $empty = $cart.find('.popup-cart__empty'),
                    $items = $cart.find('.popup-cart__items'),
                    $count = $cart.find('[data-js-popup-cart-count]'),
                    $subtotal = $cart.find('[data-js-popup-cart-subtotal]');

                $count.html(theme.strings.general.popups.cart.count.replace('{{ count }}', data.item_count));
                $content[data.item_count > 0 ? 'removeClass' : 'addClass']('d-none-important');
                $empty[data.item_count > 0 ? 'addClass' : 'removeClass']('d-none-important');
                if ($('.popup-cart-upsell').length) {
                    $.ajax({
                        type: 'GET',
                        url: '/cart?view=upsell-ajax',
                        cache: false,
                        dataType: 'html',
                        success: function (data) {
                            var $content = $(data);
                            $('.popup-cart-upsell').html($content);
                        }
                    })
                }

                if (data.item_count > 0) {
                    theme.ProductCurrency.setPrice($subtotal, data.total_price);

                    _._resultToHTML($items, data);

                    theme.ProductCurrency.update();
                } else {
                    $items.add($subtotal).html('');
                }

                if ($('#shopify-section-product-set').length) {
                    if (data.item_count === 0) {
                        $('.set_add_to_cart_button').attr('disabled', true);
                        $('.btn-total').hide();
                        $('.btn-total-money').html('');
                    } else {
                        $('.btn-total').show();
                        $('.btn-total-money').html(Shopify.formatMoney(data.total_price, theme.moneyFormat));
                    }
                    $("klarna-placement").attr("data-purchase_amount", data.total_price);
                    window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
                    window.KlarnaOnsiteService.push({eventName: 'refresh-placements'});
                }

                if (callback) {
                    callback();
                }
            });
        }
    });

    theme.PopupCart = new PopupCart;
};


theme.PopupQuickView = function () {

    function PopupQuickView() {
        this.settings = {
            popup_name: 'quick-view'
        };

        this.load();
    }

    PopupQuickView.prototype = $.extend({}, PopupQuickView.prototype, {
        load: function () {
            var _ = this;

            theme.Popups.addHandler(this.settings.popup_name, 'call.visible', function ($popup, $target) {
                var $content = $popup.find('[data-js-quick-view]'),
                    $product = $target.parents('[data-js-product]');

                $content.html('');
                _.$gallery = null;

                _.getProduct($product, function (data) {
                    _.insertContent($content, data);

                    $popup.trigger('contentloaded');
                });
            });

            theme.Popups.addHandler(this.settings.popup_name, 'call.after', function ($popup) {
                if (_.$gallery && _.$gallery.length) {
                    _.$gallery.productGallery('update');
                }

                if (theme.Tooltip) {
                    theme.Tooltip.init({
                        appendTo: $popup[0]
                    });
                }
            });

            theme.Popups.addHandler(this.settings.popup_name, 'close.after', function () {
                if (_.ajax) {
                    _.ajax.abort();
                }

                if (_.$gallery && _.$gallery.length) {
                    theme.ProductGallery.destroy(_.$gallery);
                    _.$gallery = null;
                }
            });
        },
        getProduct: function ($product, success) {
            if (this.ajax) {
                this.ajax.abort();
            }

            var handle = $product.attr('data-product-handle'),
                variant = $product.attr('data-product-variant-id');

            if (handle) {
                this.ajax = $.ajax({
                    type: 'GET',
                    url: 'https://' + window.location.hostname + '/products/' + handle + '?variant=' + variant,
                    data: {
                        view: 'quick-view'
                    },
                    dataType: 'html',
                    success: function (data) {
                        success(data);
                    }
                });
            }
        },
        insertContent: function ($content, data) {
            $content.html(data);

            var $product = $content.find('[data-js-product]'),
                $gallery = $product.find('[data-js-product-gallery]'),
                $countdown = $product.find('[data-js-product-countdown] .js-countdown'),
                $text_countdown = $product.find('.js-text-countdown'),
                $visitors = $product.find('.js-visitors');

            if ($gallery.length) {
                this.$gallery = $gallery;

                theme.ProductGallery.init($gallery);
            }

            theme.ImagesLazyLoad.update();

            theme.ProductReview.update();

            if ($countdown.length) {
                theme.ProductCountdown.init($countdown);
            }

            if ($text_countdown.length) {
                theme.ProductTextCountdown.init($text_countdown);
            }

            if ($visitors.length) {
                theme.ProductVisitors.init($visitors);
            }

            theme.StoreLists.checkProductStatus($product);
        }
    });

    theme.PopupQuickView = new PopupQuickView;
};


theme.ProductCurrency = function () {

    function ProductCurrency() {

    }

    ProductCurrency.prototype = $.extend({}, ProductCurrency.prototype, {
        load: function () {
            if (theme.multiple??urrencies) {
                var cookieCurrency;

                try {
                    cookieCurrency = Currency.cookie.read();
                } catch (err) {
                }

                $('span.money span.money').each(function () {
                    $(this).parents('span.money').removeClass('money');
                });

                $('span.money').each(function () {
                    $(this).attr('data-currency-' + Currency.shopCurrency, $(this).html());
                });

                if (cookieCurrency == null) {
                    if (Currency.shopCurrency !== Currency.defaultCurrency) {
                        Currency.convertAll(Currency.shopCurrency, Currency.defaultCurrency);
                    } else {
                        Currency.currentCurrency = Currency.defaultCurrency;
                    }
                } else if (cookieCurrency === Currency.shopCurrency) {
                    Currency.currentCurrency = Currency.shopCurrency;
                } else {
                    Currency.convertAll(Currency.shopCurrency, cookieCurrency);
                }
            }
        },
        setCurrency: function (newCurrency) {
            if (theme.multiple??urrencies) {
                if (newCurrency == Currency.currentCurrency) {
                    Currency.convertAll(Currency.shopCurrency, newCurrency);
                } else {
                    Currency.convertAll(Currency.currentCurrency, newCurrency);
                }
            }
        },
        setPrice: function ($price, price, compare_at_price) {
            price = +price;
            compare_at_price = +compare_at_price;

            var html = '',
                sale = compare_at_price && compare_at_price > price;

            $price[sale ? 'addClass' : 'removeClass']('price--sale');

            if (sale) {
                html += '<span>';
                html += Shopify.formatMoney(compare_at_price, theme.moneyFormat);
                html += '</span>';

                if ($price[0].hasAttribute('data-js-show-sale-separator')) {
                    html += theme.strings.priceSaleSeparator;
                }
            }

            html += '<span>';
            html += Shopify.formatMoney(price, theme.moneyFormat);
            html += '</span>';

            $price.html(html);
        },
        update: function () {
            if (theme.multiple??urrencies) {
                Currency.convertAll(Currency.shopCurrency, Currency.currentCurrency);
            }
        }
    });

    theme.ProductCurrency = new ProductCurrency;
};
theme.ProductQuantity = function () {

    function ProductQuantity() {
        this.selectors = {
            quantity: '.js-product-quantity'
        };

        this.load();
    }

    ProductQuantity.prototype = $.extend({}, ProductQuantity.prototype, {
        load: function () {
            var _ = this;

            $body.on('click', this.selectors.quantity + ' [data-control]', function (e) {
                var $this = $(this),
                    $quantity = $this.parents(_.selectors.quantity),
                    $input = $quantity.find('input'),
                    direction = $this.attr('data-control'),
                    min = $input.attr('min') || 1,
                    max = $input.attr('max') || Infinity,
                    val = +$input.val(),
                    set_val;

                if (!$.isNumeric(val)) {
                    $input.val(min);
                    return;
                }

                if (direction === '+') {
                    set_val = ++val;
                } else if (direction === '-') {
                    set_val = --val;
                }

                if (set_val < min) {
                    set_val = min;
                } else if (set_val > max) {
                    set_val = max;
                }

                if (set_val < 0) {
                    set_val = 0;
                }

                $input.val(set_val);
                $input.trigger('custom.change');

                _.dublicate($quantity);
            });

            $(document).on('keydown', this.selectors.quantity + ' input', function (e) {
                var keyArr = [8, 9, 27, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];

                if ($.inArray(e.keyCode, keyArr) === -1) {
                    e.preventDefault();
                    return false;
                }
            });

            $(document).on('focus', this.selectors.quantity + ' input', function () {
                $(this).select();
            });

            $(document).on('blur', this.selectors.quantity + ' input', function () {
                var $this = $(this),
                    $quantity = $this.parents(_.selectors.quantity),
                    val = +$this.val(),
                    min = $this.attr('min') || 1,
                    max = $this.attr('max') || Infinity;

                if (!$.isNumeric(val) || val < min) {
                    $this.val(min);
                } else if (val > max) {
                    $this.val(max);
                }

                _.dublicate($quantity);
            });
        },
        dublicate: function ($quantity) {
            var connect = $quantity.attr('data-js-quantity-connect');

            if ($quantity.length && connect !== undefined) {
                var $input = $(this.selectors.quantity + '[data-js-quantity-connect="' + connect + '"]').find('input'),
                    value = $quantity.find('input').val();

                $input.val(value);
                $input.trigger('custom.change');
            }
        }
    });

    theme.ProductQuantity = new ProductQuantity;
};
theme.ProductCountdown = function () {

    function ProductCountdown() {
        this.selectors = {};

        this.load();
    }

    ProductCountdown.prototype = $.extend({}, ProductCountdown.prototype, {
        load: function () {
            this.init($('.js-countdown').not('.countdown--init'));
        },
        init: function ($elems) {
            var $countdown = $elems.not('.countdown--init');

            $countdown.each(function () {
                var $this = $(this),
                    date = $this.data('date');

                if (!date) {
                    return;
                }

                var hideZero = $this.data('hidezero') || true;

                //remove timezone
                var remove_from = date.indexOf(' +');

                if (remove_from != -1) {
                    date = date.slice(0, remove_from);
                }
                //END:remove timezone

                var date_obj = new Date(date.replace(/-/g, "/"));

                if (date_obj.getTime() - new Date().getTime() <= 0) {
                    return;
                }

                var t = $this.countdown(date_obj, function (e) {
                    var format = '',
                        structure = [
                            ['totalDays', theme.strings.countdown.days],
                            ['hours', theme.strings.countdown.hours],
                            ['minutes', theme.strings.countdown.minutes],
                            ['seconds', theme.strings.countdown.seconds]
                        ];

                    for (var i = 0; i < structure.length; i++) {
                        var prop = structure[i][0],
                            time = e.offset[prop],
                            postfix = structure[i][1];

                        if (i === 0 && time === 0 && hideZero === true) {
                            continue;
                        }

                        if ($this.hasClass('countdown--type-01')) {
                            format += '<span class="countdown__section">' +
                                '<span class="countdown__time">' + time + '</span>' +
                                '<span class="countdown__postfix">' + postfix + '</span>' +
                                '</span>';

                        } else if ($this.hasClass('countdown--type-02')) {
                            if (time < 10) time = '0' + time;
                            else time += '';

                            format += '<span class="countdown__section">' +
                                '<span class="countdown__time">';

                            for (var j = 0; j < time.length; j++) {
                                format += '<span>' + time.charAt(j) + '</span>';
                            }

                            format += '</span>' +
                                '<span class="countdown__postfix">' + postfix + '</span>' +
                                '</span>';
                        }
                    }

                    $(this).html(format);
                });

                $this.parents('[data-js-product-countdown]').removeClass('d-none-important');

                $this.addClass('countdown--init');
            });
        },
        destroy: function ($countdown) {
            if ($countdown.hasClass('countdown--init')) {
                $countdown.countdown('remove').off().removeClass('countdown--init').html('');
            }
        },
        reinit: function ($countdown, date) {
            this.destroy($countdown);

            var $new_countdown = $countdown.clone();

            $countdown.replaceWith($new_countdown);

            $countdown.remove();

            if (date) {
                $new_countdown.attr('data-date', date);
            }

            this.init($new_countdown);
        }
    });

    theme.ProductCountdown = new ProductCountdown;
};
theme.ProductTextCountdown = function () {

    function ProductTextCountdown() {
        this.selectors = {};

        this.load();
    }

    ProductTextCountdown.prototype = $.extend({}, ProductTextCountdown.prototype, {
        load: function () {
            this.init($('.js-text-countdown').not('.text-countdown--init'));
        },
        init: function ($elems) {
            var $countdown = $elems.not('.text-countdown--init');

            $countdown.each(function () {
                var $this = $(this),
                    $counter = $this.find('[data-js-text-countdown-counter]'),
                    $date = $this.find('[data-js-text-countdown-delivery]'),
                    reset_time = +$this.attr('data-reset-time'),
                    delivery_time = +$this.attr('data-delivery-time'),
                    delivery_format = $this.attr('data-delivery-format'),
                    delivery_excludes = $this.attr('data-delivery-excludes').replace(/ /gi, '').toLowerCase().split(','),
                    hideZero = $this.attr('data-hidezero') || true,
                    date_counter = new Date(),
                    structure = [
                        ['hours', theme.strings.text_countdown.hours],
                        ['minutes', theme.strings.text_countdown.minutes]
                    ],
                    days_of_week = [
                        theme.strings.text_countdown.days_of_week.sunday,
                        theme.strings.text_countdown.days_of_week.monday,
                        theme.strings.text_countdown.days_of_week.tuesday,
                        theme.strings.text_countdown.days_of_week.wednesday,
                        theme.strings.text_countdown.days_of_week.thursday,
                        theme.strings.text_countdown.days_of_week.friday,
                        theme.strings.text_countdown.days_of_week.saturday
                    ],
                    date_now,
                    date_delivery,
                    delivery_html,
                    format_text,
                    prop,
                    time,
                    postfix,
                    i,
                    j;

                date_counter.setDate(date_counter.getDate() + 1);
                date_counter.setHours(reset_time, 0, 0, 0);

                var t = $counter.countdown(date_counter, function (e) {
                    delivery_html = delivery_format.toLowerCase();
                    format_text = '';

                    for (i = 0; i < structure.length; i++) {
                        prop = structure[i][0];
                        time = e.offset[prop];
                        postfix = structure[i][1];

                        if (i === 0 && time === 0 && hideZero === true) {
                            continue;
                        }

                        if (i !== 0) {
                            format_text += ' ';
                        }

                        format_text += time + ' ' + postfix;
                    }

                    $(this).html(format_text);

                    date_delivery = new Date();
                    date_delivery.setDate(date_delivery.getDate() + delivery_time);

                    date_now = new Date();

                    if (date_now.getHours() >= date_counter.getHours() && date_now.getMinutes() >= date_counter.getMinutes() && date_now.getSeconds() >= date_counter.getSeconds()) {
                        date_delivery.setDate(date_delivery.getDate() + 1);
                    }

                    for (j = 0; j < delivery_excludes.length;) {
                        if (delivery_excludes[j] === days_of_week[date_delivery.getDay()].toLowerCase()) {
                            date_delivery.setDate(date_delivery.getDate() + 1);
                            j = 0;
                        } else {
                            j++;
                        }
                    }

                    delivery_html = delivery_html.replace('day', days_of_week[date_delivery.getDay()])
                        .replace('dd', ('0' + date_delivery.getDate()).slice(-2))
                        .replace('mm', ('0' + (date_delivery.getMonth() + 1)).slice(-2))
                        .replace('yyyy', date_delivery.getFullYear())
                        .replace('yy', date_delivery.getFullYear().toString().slice(-2));

                    $date.html(delivery_html);
                });

                $this.addClass('text-countdown--init');
            });
        },
        destroy: function ($countdown) {
            if ($countdown.hasClass('text-countdown--init')) {
                $countdown.countdown('remove').off().removeClass('text-countdown--init').html('');
            }
        }
    });

    theme.ProductTextCountdown = new ProductTextCountdown;
};
theme.ProductVisitors = function () {

    function ProductVisitors() {
        this.selectors = {};

        this.load();
    }

    ProductVisitors.prototype = $.extend({}, ProductVisitors.prototype, {
        load: function () {
            this.init($('.js-visitors').not('.visitors--init'));
        },
        init: function ($elems) {
            var $countdown = $elems.not('.visitors--init');

            function randomInteger(min, max) {
                return Math.round(min - 0.5 + Math.random() * (max - min + 1));
            }

            $countdown.each(function () {
                var $this = $(this),
                    $counter = $this.find('[data-js-counter]'),
                    min = $this.attr('data-min'),
                    max = $this.attr('data-max'),
                    interval_min = $this.attr('data-interval-min'),
                    interval_max = $this.attr('data-interval-max'),
                    stroke = +$this.attr('data-stroke'),
                    current_value,
                    new_value;

                $this.addClass('visitors--processing');

                function update() {
                    setTimeout(function () {
                        if (!$this.hasClass('visitors--processing')) {
                            return;
                        }

                        current_value = +$counter.text();
                        new_value = randomInteger(min, max);

                        if (Math.abs(current_value - new_value) > stroke) {
                            new_value = new_value > current_value ? current_value + stroke : current_value - stroke;
                            new_value = randomInteger(current_value, new_value);
                        }

                        $counter.text(new_value);

                        update();
                    }, randomInteger(interval_min, interval_max) * 1000);
                }

                update();

                $this.addClass('visitors--init');
            });
        },
        destroy: function ($countdown) {
            if ($countdown.hasClass('visitors--init')) {
                $countdown.off().removeClass('visitors--processing visitors--init').html('');
            }
        }
    });

    theme.ProductVisitors = new ProductVisitors;
};
theme.ProductImagesNavigation = function () {

    function ProductImagesNavigation() {
        this.selectors = {
            images_nav: '.js-product-images-navigation'
        };

        this.load();
    }

    ProductImagesNavigation.prototype = $.extend({}, ProductImagesNavigation.prototype, {
        load: function () {
            var _ = this;

            $body.on('click', '[data-js-product-images-navigation]:not([data-disabled])', function () {
                var $this = $(this),
                    $product = $this.parents('[data-js-product]'),
                    direction = $this.attr('data-js-product-images-navigation');

                theme.ProductImagesHover.disable($product.find('img'));

                var data = theme.ProductOptions.switchByImage($product, direction, null, function (data) {
                    _._updateButtons($product, data.is_first, data.is_last);
                });
            });
        },
        switch: function ($product, data) {
            var $image = $product.find('[data-js-product-image] img');

            if ($image.length) {
                theme.ProductImagesHover.disable($image);

                var image = data.update_variant.featured_image;

                if (!image || !image.src) {
                    if (data.json.images[0]) {
                        image = data.json.images[0];
                    }
                }

                if (image && image.src && +image.id !== +$image.attr('data-image-id')) {
                    var src = Shopify.resizeImage(image.src, $image.width() + 'x') + ' 1x, ' + Shopify.resizeImage(image.src, $image.width() * 2 + 'x') + ' 2x';

                    this.changeSrc($image, src, image.id);

                    if ($image.parents(this.selectors.images_nav).length) {
                        this._updateButtons($product, +data.json.images[0].id === +image.id, +data.json.images[data.json.images.length - 1].id === +image.id);
                    }
                }
            }
        },
        changeSrc: function ($image, srcset, id) {
            var $parent = $image.parent();

            id = id || 'null';

            theme.Loader.set($parent);

            $image.one('load', function () {
                theme.Loader.unset($parent);
            });

            $image.attr('srcset', srcset).attr('data-image-id', id);
        },
        _updateButtons: function ($product, is_first, is_last) {
            $product.find('[data-js-product-images-navigation="prev"]')[is_first ? 'attr' : 'removeAttr']('data-disabled', 'disabled');
            $product.find('[data-js-product-images-navigation="next"]')[is_last ? 'attr' : 'removeAttr']('data-disabled', 'disabled');
        }
    });

    theme.ProductImagesNavigation = new ProductImagesNavigation;
};


theme.ProductImagesHover = function () {

    function ProductImagesHover() {
        this.selectors = {
            images_hover: '.js-product-images-hover',
            images_hovered_end: '.js-product-images-hovered-end'
        };

        this.load();
    }

    ProductImagesHover.prototype = $.extend({}, ProductImagesHover.prototype, {
        load: function () {
            function changeImage($wrap, $image, url, id) {
                var srcset = theme.ImagesLazyLoad.buildSrcset($image, url);

                $wrap.attr('data-js-product-image-hover-id', $image.attr('data-image-id'));

                theme.ProductImagesNavigation.changeSrc($image, srcset, id);
            }

            theme.Global.responsiveHandler({
                namespace: '.product-collection.images.hover',
                element: $body,
                delegate: this.selectors.images_hover,
                on_desktop: true,
                events: {
                    'mouseenter': function () {
                        var $this = $(this),
                            $image = $this.find('img'),
                            url = $this.attr('data-js-product-image-hover'),
                            id = $this.attr('data-js-product-image-hover-id');

                        if (url) {
                            changeImage($this, $image, url, id);

                            $this.one('mouseleave', function () {
                                var url = $image.attr('data-master'),
                                    id = $this.attr('data-js-product-image-hover-id');

                                changeImage($this, $image, url, id);
                            });
                        }
                    }
                }
            });

            theme.Global.responsiveHandler({
                namespace: '.product-collection.images.hoveredend',
                element: $body,
                delegate: this.selectors.images_hovered_end,
                on_desktop: true,
                events: {
                    'mouseenter': function () {
                        var $this = $(this),
                            timeout;

                        timeout = setTimeout(function () {
                            $this.addClass('hovered-end');
                        }, theme.animations.css.duration * 1000);

                        $this.one('mouseleave', function () {
                            clearTimeout(timeout);
                        });
                    },
                    'mouseleave': function () {
                        $(this).removeClass('hovered-end');
                    }
                }
            });
        },
        disable: function ($image) {
            $image.parents(this.selectors.images_hover).removeClass('js-product-images-hover').unbind('mouseleave');
        }
    });

    theme.ProductImagesHover = new ProductImagesHover;
};


theme.ProductOptions = function () {

    function ProductOptions() {

        this.selectors = {
            options: '.js-product-options',
            options_attr: '[data-js-product-options]'
        };
        this.setItem = false;
        this.afterChange = [];
        this.load();
    }

    ProductOptions.prototype = $.extend({}, ProductOptions.prototype, {
        load: function () {
            var _ = this,
                timeout,
                xhr;

            function onProcess(e) {
                var $this = $(this);

                if ($this.hasClass('active') || $this.hasClass('disabled')) {
                    return;
                }

                var $options = $this.closest(_.selectors.options),
                    $section = $this.closest('[data-property]'),
                    $values = $section.find('[data-js-option-value]'),
                    $product = $this.closest('[data-js-product]'),
                    json = $product.attr('data-json-product'),
                    current_values = {},
                    update_variant = null,
                    setItem = $product.attr('data-set-item') == 'true',
                    upsellProduct = $product.attr('data-upsell-product') === 'true',
                    $setContainer = setItem ? $product.closest('[data-product-set]') : false,
                    is_avilable = true;
                if (e.type === 'click') {
                    $values.removeClass('active');
                    $this.addClass('active');
                }


                _._loadJSON($product, json, function (json) {
                    var $active_values = $options.find('[data-js-option-value].active').add($options.find('option:selected'));

                    $.each($active_values, function () {
                        var $this = $(this);

                        current_values[$this.closest('[data-property]').data('property')] = '' + $this.data('value');
                    });

                    $.each(json.variants, function () {
                        var variant_values = {},
                            current_variant = true;

                        $.each(this.options, function (i) {
                            variant_values[Shopify.handleize(json.options[i])] = Shopify.handleize(this);
                        });

                        $.each(current_values, function (i) {
                            if (current_values[i] !== variant_values[i]) {
                                current_variant = false;
                                return false;
                            }
                        });

                        if (current_variant && current_values.length === variant_values.length) {
                            update_variant = this;
                            return false;
                        }
                    });
                    if (!update_variant) {

                        if (upsellProduct) {
                            return;
                        }
                        update_variant = _._getDefaultVariant(json);
                        is_avilable = false;
                    } else{
                        if($('.single-product').length){
                            console.log(update_variant);
                            if($('[name="properties[_with_discount]"]').attr('value')=="true"){
                                let disc = $('[name="disc_value"]').attr('value')*1;
                                $('.single-product .product-price .money').remove();
                                $('.single-product .product-price .price').append(`<span class="money">${update_variant.price-(update_variant.price/100*disc)}</span>`)
                                $('.single-product .product-price .price.small .money').remove();
                                $('.single-product .product-price .price.small').append(`<span class="money">${update_variant.price}</span>`)
                                theme.ProductCurrency.update(Shopify.formatMoney())
                            } else {
                                $('.single-product .product-price .money').remove();
                                $('.single-product .product-price .price').append(`<span class="money">${update_variant.price}</span>`)
                                theme.ProductCurrency.update(Shopify.formatMoney())
                            }
                        }
                    }

                    _._switchVariant($product, {
                        update_variant: update_variant,
                        setItem: setItem,
                        upsellProduct: upsellProduct,
                        $setContainer: $setContainer,
                        json: json,
                        current_values: current_values,
                        is_avilable: is_avilable
                    });

                    if (setItem) {
                        _.updateSet($setContainer, $product, is_avilable, update_variant);
                    }

                });
            }

            // $('.set_add_to_cart_button').on('click', function(){
            //    var $setContainer = $(this).closest('[data-product-set]');
            //    var addVariantsIds = $setContainer.attr('data-set-variants');
            //    var prodArr = addVariantsIds.split(',');
            //    if (prodArr.length) {
            //        $('.set_add_to_cart_button', $setContainer).attr('disabled', 'disabled')
            //        _.addSetProducts(prodArr, $('.set_add_to_cart_button', $setContainer));
            //    }
            // });

            $body.on('click', this.selectors.options + ' [data-js-option-value]', onProcess);


            $body.on('change', '[data-js-option-select]', function (e, onupdate) {
                if (onupdate) {
                    return;
                }

                var $this = $(this).find('option:selected');

                onProcess.call($this, e);
            });

            $body.on('change', '[data-js-product-variants="control"]', function () {
                var $this = $(this),
                    $product = $this.parents('[data-js-product]'),
                    id = $this.find('option:selected').attr('value'),
                    json = $product.attr('data-json-product'),
                    update_variant = null,
                    is_avilable = true;

                _._loadJSON($product, json, function (json) {
                    $.each(json.variants, function () {
                        if (+this.id === +id) {
                            update_variant = this;
                            return false;
                        }
                    });

                    if (!update_variant) {
                        update_variant = _._getDefaultVariant(json);
                        is_avilable = false;
                    }

                    _._switchVariant($product, {
                        update_variant: update_variant,
                        json: json,
                        is_avilable: is_avilable,
                        dontUpdateVariantsSelect: true
                    });
                });
            });

        },
        addSetProducts: function (prodArr, $btn) {
            var _ = this;
            if (prodArr.length > 0) {
                var request = prodArr.shift();
                $.ajax({
                    method: "POST",
                    url: "/cart/add.js",
                    dataType: "json",
                    data: {
                        quantity: 1,
                        id: request
                    },
                    success: function () {
                        _.addSetProducts(prodArr, $btn);
                    },
                    error: function () {
                        _.addSetProducts(prodArr, $btn);
                    }
                })
            } else {
                $btn.removeAttr('disabled');
                theme.Cart.updateValues(null, function () {
                    theme.Popups.callByName('cart');
                });

            }
        },
        updateSet: function ($setContainer, $product, is_avilable, update_variant) {

            if (is_avilable) {
                // if (!update_variant.available) {
                //     $product.removeAttr('data-variant-selected').attr('data-set-item-price', '0');
                //     $('.set-item-soldout', $product).show();
                // }
                // else {
                //     $('.set-item-soldout', $product).hide();
                //     $product.attr('data-variant-selected', update_variant.id).attr('data-set-item-price', update_variant.price);
                // }

                var $setImage = $('.set-image', $product);
                var currentImgId = $setImage.attr('data-image-id');
                if (update_variant.featured_image && currentImgId != update_variant.featured_image.id) {
                    $setImage.attr('src', Shopify.resizeImage(update_variant.featured_image.src, '300x')).attr('data-image-id', update_variant.featured_image.id);
                }
                $('.product-options', $product).addClass('product-options-active');
            }
            // else {
            //     $product.removeAttr('data-variant-selected').attr('data-set-item-price', '0');
            //     $('.product-options', $product).removeClass('product-options-active');
            // }

            // var setItemsSelected = $setContainer.find('[data-js-product][data-variant-selected]');
            // var $setPrice = $('.product-set-price [data-js-product-price], .set-total-price', $setContainer);
            // var totalSetPrice = 0;
            // var variantsSelected = [];
            // if (setItemsSelected.length) {
            //     setItemsSelected.each(function(){
            //         totalSetPrice += +$(this).attr('data-set-item-price');
            //         variantsSelected.push($(this).attr('data-variant-selected'));
            //     });
            //     $setContainer.attr('data-set-variants', variantsSelected);
            //     $('.set_add_to_cart_button', $setContainer).removeAttr('disabled');
            //     $('.set-items-num', $setContainer).text(setItemsSelected.length + (setItemsSelected.length > 1 ? ' items' : ' item'));
            //     $('.set-items-selected', $setContainer).show();
            //     theme.ProductCurrency.setPrice($setPrice, totalSetPrice);
            //     theme.ProductCurrency.update();
            //     $("klarna-placement", $setContainer).attr("data-purchase_amount", totalSetPrice);
            //     window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
            //     window.KlarnaOnsiteService.push({ eventName: 'refresh-placements' });
            // }
            // else {
            //     $('.set_add_to_cart_button', $setContainer).attr('disabled', 'disabled');
            //     $('.set-items-selected', $setContainer).hide();
            //     $setContainer.removeAttr('data-set-variants');
            //     theme.ProductCurrency.setPrice($setPrice, 0);
            //     theme.ProductCurrency.update();
            //     $("klarna-placement", $setContainer).attr("data-purchase_amount", 0);
            //     window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
            //     window.KlarnaOnsiteService.push({ eventName: 'refresh-placements' });
            // }
        },
        _loadJSON: function ($product, json, callback, animate) {
            if ($product[0].hasAttribute('data-js-process-ajax-loading-json')) {
                $product.one('json-loaded', function () {
                    if (callback) {
                        callback(JSON.parse($product.attr('data-json-product')));
                    }
                });

                return;
            }

            animate = animate === undefined ? true : animate;

            if (json) {
                if (callback) {
                    callback(typeof json == 'object' ? json : JSON.parse(json));
                }
            } else {
                $product.attr('data-js-process-ajax-loading-json', true);

                if (animate) {
                    theme.Loader.set($product);
                }

                var handle = $product.attr('data-product-handle');

                var xhr = $.ajax({
                    type: 'GET',
                    url: '/products/' + handle,
                    data: {
                        view: 'get_json'
                    },
                    cache: false,
                    dataType: 'html',
                    success: function (data) {
                        json = JSON.parse(data);
                        $product.attr('data-json-product', JSON.stringify(json));

                        if (animate) {
                            theme.Loader.unset($product);
                        }

                        if (callback) {
                            callback(json);
                        }

                        $product.trigger('json-loaded');
                    },
                    complete: function () {
                        $product.removeAttr('data-js-process-ajax-loading-json');
                    }
                });

                return xhr;
            }
        },
        switchByImage: function ($product, get_image, id, callback) {
            var _ = this,
                $image = $product.find('[data-js-product-image] img'),
                json = $product.attr('data-json-product'),
                data = false;

            this._loadJSON($product, json, function (json) {
                var json_images = json.images,
                    current_image_id = (get_image === 'by_id') ? +id : +$image.attr('data-image-id'),
                    image_index,
                    update_variant,
                    is_avilable = true;

                $.each(json_images, function (i) {
                    if (+this.id === current_image_id) {
                        image_index = i;
                        return false;
                    }
                });

                if (image_index || image_index === 0) {
                    if (get_image === 'prev' && image_index !== 0) {
                        image_index--;
                    } else if (get_image === 'next' && image_index !== json_images.length - 1) {
                        image_index++;
                    }

                    $.each(json.variants, function () {
                        if (this.featured_image && +this.featured_image.id === +json_images[image_index].id) {
                            update_variant = this;
                            return false;
                        }
                    });

                    if (!update_variant) {
                        update_variant = _._getDefaultVariant(json);
                        update_variant.featured_image = json_images[image_index];
                    }

                    _._updateOptions($product, {
                        update_variant: update_variant,
                        json: json
                    });

                    _._switchVariant($product, {
                        update_variant: update_variant,
                        json: json,
                        is_avilable: is_avilable
                    });

                    data = {
                        index: image_index,
                        image: json_images[image_index],
                        is_first: image_index === 0,
                        is_last: image_index === json_images.length - 1
                    };
                }

                callback(data);
            });
        },
        _switchVariant: function ($product, data) {
            data.update_variant.metafields = $.extend({}, data.json.metafields);

            $.each(data.json.variants_metafields, function () {
                if (+this.variant_id === +data.update_variant.id) {
                    data.update_variant.metafields = $.extend(true, data.update_variant.metafields, this.metafields);
                }
            });

            $product.attr('data-product-variant-id', data.update_variant.id);

            this._updateContent($product, data);
        },
        _getDefaultVariant: function (json) {
            var default_variant = {};

            $.each(json.variants, function () {
                if (+this.id === +json.default_variant_id) {
                    Object.assign(default_variant, this);
                    return false;
                }
            });

            return default_variant;
        },
        _updateContent: function ($product, data) {
            var clone_id = $product.attr('data-js-product-clone-id'),
                $clone_product = $('[data-js-product-clone="' + clone_id + '"]');

            this._updateFormVariantInput($product, data);
            this._updateLinks($product, data);
            this._updateHistory($product, data);


            if (!data.dontUpdateVariantsSelect) {
                this._updateVariantsSelect($product, data);
            }

            if ($clone_product.length) {
                this._updateOptions($clone_product, data, true);
                theme.ProductImagesNavigation.switch($clone_product, data);
            }
        },
        _updateOptions: function ($product, data, set_current) {
            var $options = $product.find(this.selectors.options_attr);

            if ($options.length) {
                $options.find('[data-js-option-value]').removeClass('active');

                if (set_current) {
                    $.each(data.current_values, function (i, k) {
                        $options.find('[data-property="' + i + '"] [data-js-option-value][data-value="' + k + '"]').addClass('active');
                        $options.find('[data-js-option-select][data-property="' + i + '"]').val(k).trigger('change', [true]);
                    });
                } else {
                    $.each(data.json.options, function (i) {
                        $options.find('[data-property="' + Shopify.handleize(this) + '"] [data-js-option-value][data-value="' + Shopify.handleize(data.update_variant.options[i]) + '"]').addClass('active');
                        $options.find('[data-js-option-select][data-property="' + Shopify.handleize(this) + '"]').val(data.update_variant.options[i]).trigger('change', [true]);
                    });
                }
            }
        },
        _updateFormVariantInput: function ($product, data) {
            var $input = $product.find('[data-js-product-variant-input]');

            $input.attr('value', data.update_variant.id);
        },
        _updateVariantsSelect: function ($product, data) {
            var $select = $product.find('[data-js-product-variants]');

            if ($select.length) {
                $select.val(data.update_variant.id).change();
            }
        },
        _updateAddToCart: function ($product, $clone_product, data) {
            var $button = $product.add($clone_product).find('[data-js-product-button-add-to-cart]');

            if ($button.length) {
                data.is_avilable && data.update_variant.available ? $button.removeAttr('disabled data-button-status') : $button.attr('disabled', 'disabled').attr('data-button-status', 'sold-out');
            }
        },
        _updatePrice: function ($product, $clone_product, data) {
            var $price = $product.add($clone_product).find('[data-js-product-price]'),
                $details = $product.find('[data-js-product-price-sale-details]');
            if ($price.length) {
                var discount = $price.attr('data-discount');
                if (discount) {
                    theme.ProductCurrency.setPrice($price, data.update_variant.price * (1 - discount / 100), data.update_variant.price);
                } else {
                    theme.ProductCurrency.setPrice($price, data.update_variant.price, data.update_variant.compare_at_price);
                }
                $("klarna-placement", $product).attr("data-purchase_amount", data.update_variant.price);
                window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
                window.KlarnaOnsiteService.push({eventName: 'refresh-placements'});
            }

            if ($details.length) {
                var details;

                $.each(data.json.variants_price_sale_details, function () {
                    if (+this.id === +data.update_variant.id) {
                        details = this.details;
                    }
                });

                $details.html(details ? details : '')[details ? 'removeClass' : 'addClass']('d-none-important');
            }

            if ($price.length || $details.length) {
                theme.ProductCurrency.update();
            }
        },
        _updateLabelSale: function ($product, data) {
            var $label = $product.find('[data-js-product-label-sale]');

            if ($label.length) {
                var html = '',
                    sale = (data.update_variant.compare_at_price && data.update_variant.compare_at_price > data.update_variant.price);

                $label[!sale ? 'addClass' : 'removeClass']('d-none-important');

                if (sale) {
                    var percent = Math.ceil(100 - data.update_variant.price * 100 / data.update_variant.compare_at_price);

                    html += theme.strings.label.sale;
                    html = Shopify.addValueToString(html, {
                        'percent': percent
                    });
                }

                $label.html(html);
            }
        },
        _updateLabelInStock: function ($product, data) {
            var $label = $product.find('[data-js-product-label-in-stock]');

            if ($label.length) {
                $label[!data.update_variant.available ? 'addClass' : 'removeClass']('d-none-important');
            }
        },
        _updateLabelOutStock: function ($product, data) {
            var $label = $product.find('[data-js-product-label-out-stock]');

            if ($label.length) {
                $label[data.update_variant.available ? 'addClass' : 'removeClass']('d-none-important');
            }
        },
        _updateLabelHot: function ($product, data) {
            var $label = $product.find('[data-js-product-label-hot]');

            if ($label.length) {
                $label[data.update_variant.metafields.labels && data.update_variant.metafields.labels.hot ? 'removeClass' : 'addClass']('d-none-important');
            }
        },
        _updateLabelNew: function ($product, data) {
            var $label = $product.find('[data-js-product-label-new]');

            if ($label.length) {
                $label[data.update_variant.metafields.labels && data.update_variant.metafields.labels.new ? 'removeClass' : 'addClass']('d-none-important');
            }
        },
        _updateCountdown: function ($product, data) {
            var $countdown = $product.find('[data-js-product-countdown]'),
                date = data.update_variant.metafields.countdown && data.update_variant.metafields.countdown.date ? data.update_variant.metafields.countdown.date : false,
                $countdown_init,
                need_coundown;

            if ($countdown.length) {
                $countdown_init = $countdown.find('.js-countdown');
                need_coundown = date && data.update_variant.compare_at_price && data.update_variant.compare_at_price > data.update_variant.price;

                if (need_coundown && $countdown_init.attr('data-date') !== date) {
                    theme.ProductCountdown.reinit($countdown_init, date);
                }

                if (!need_coundown) {
                    $countdown.addClass('d-none-important');
                }
            }
        },
        _updateSKU: function ($product, data) {
            var $sku = $product.find('[data-js-product-sku]');

            if ($sku.length) {
                $sku[data.update_variant.sku ? 'removeClass' : 'addClass']('d-none-important');

                $sku.find('span').html(data.update_variant.sku);
            }
        },
        _updateBarcode: function ($product, data) {
            var $barcode = $product.find('[data-js-product-barcode]');

            if ($barcode.length) {
                $barcode[data.update_variant.barcode ? 'removeClass' : 'addClass']('d-none-important');

                $barcode.find('span').html(data.update_variant.barcode);
            }
        },
        _updateAvailability: function ($product, data) {
            var $availability = $product.find('[data-js-product-availability]');

            if ($availability.length) {
                var html = '',
                    quantity = 0;

                $.each(data.json.variants_quantity, function () {
                    if (+this.id === +data.update_variant.id) {
                        quantity = +this.quantity;
                    }
                });

                if (data.update_variant.available) {
                    html += theme.strings.availability_value_in_stock;
                    html = Shopify.addValueToString(html, {
                        'count': quantity,
                        'item': quantity === 1 ? theme.strings.layout.cart.items_count.one : theme.strings.layout.cart.items_count.other
                    });
                } else {
                    html += theme.strings.availability_value_out_stock;
                }

                $availability.attr('data-availability', data.update_variant.available).find('span').html(html);
            }
        },
        _updateStockCountdown: function ($product, data) {
            var $stock_countdown = $product.find('[data-js-product-stock-countdown]'),
                $title = $stock_countdown.find('[data-js-product-stock-countdown-title]'),
                $progress = $stock_countdown.find('[data-js-product-stock-countdown-progress]'),
                min = +$stock_countdown.attr('data-min'),
                quantity = 0;

            $.each(data.json.variants_quantity, function () {
                if (+this.id === +data.update_variant.id) quantity = +this.quantity;
            });

            if ($title) {
                $title.html(Shopify.addValueToString(theme.strings.stock_countdown.title, {
                    'quantity': '<span class="stock-countdown__counter">' + quantity + '</span>'
                }));
            }

            if ($progress) {
                $progress.width(quantity / (min / 100) + '%');
            }

            if ($stock_countdown.length) {
                $stock_countdown[quantity > 0 && quantity < min ? 'removeClass' : 'addClass']('d-none-important');
            }
        },
        _updateGallery: function ($product, data) {
            var $gallery = $product.find('[data-js-product-gallery]'),
                $for_option = $gallery.find('[data-js-for-option]');

            if (data.update_variant.option1) {
                $for_option.each(function () {
                    var $this = $(this);

                    $this[$this.attr('data-js-for-option') === Shopify.handleize(data.update_variant.option1) ? 'removeClass' : 'addClass']('d-none');
                });
            }

            if ($gallery.find('.fotorama').length) {
                var image = data.update_variant.featured_image;

                if (!image || !image.src) {
                    if (data.json.images[0]) {
                        image = data.json.images[0];
                    }
                }

                $gallery.productGallery('switchImageById', image.id);
            }
        },
        _updateLinks: function ($product, data) {
            if ($product.hasClass('product-collection')) {
                return;
            }
            var url = decodeURIComponent(window.location.origin) + '/products/' + data.json.handle + '?variant=' + data.update_variant.id;
            $product.find('a[href*="products/' + data.json.handle + '"]').attr('href', url);
        },
        _updateHistory: function ($product, data) {
            var $options = $product.find(this.selectors.options);

            if ($options.length && $options[0].hasAttribute('data-js-change-history')) {
                var url = window.location.href.split('?')[0] + '?variant=' + data.update_variant.id;

                history.replaceState({foo: 'product'}, url, url);
            }
        }
    });

    theme.ProductOptions = new ProductOptions;
};
theme.ProductReview = function () {

    function ProductReview() {

    }

    ProductReview.prototype = $.extend({}, ProductReview.prototype, {
        update: function () {
            if (window.SPR) {
                var $spr = $('[src*="productreviews.shopifycdn.com"]');

                $spr.replaceWith($('<script>').attr('src', $spr.attr('src'))).remove();
            }
        }
    });

    theme.ProductReview = new ProductReview;
};
theme.ProductGallery = function () {

    function ProductGallery() {
        this.load();
    }

    ProductGallery.prototype = $.extend({}, ProductGallery.prototype, {
        load: function () {
            $.widget('ui.productGallery', {
                options: {
                    bp: 1024,
                    bp_slick: 1024,
                    videoAutoplay: false,
                    fotorama: {
                        size: 3,
                        nav: false,
                        arrows: false,
                        allowfullscreen: true,
                        auto: false,
                        shadows: false,
                        transition: 'slide',
                        clicktransition: 'crossfade'
                    },
                    slick: {
                        preview: {
                            lazyLoad: false,
                            vertical: true,
                            verticalSwiping: true,
                            slidesToShow: 6,
                            slidesToScroll: 6,
                            dots: false,
                            arrows: true,
                            infinite: false,
                            touchMove: false,
                            responsive: [
                                {
                                    breakpoint: 1259,
                                    settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 4
                                    }
                                }
                            ]
                        },
                        panorama: {
                            lazyLoad: false,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            customPaging: '10px',
                            dots: false,
                            arrows: true,
                            infinite: false,
                            touchMove: false,
                            responsive: [
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 2
                                    }
                                },
                                {
                                    breakpoint: 779,
                                    settings: {
                                        slidesToShow: 2
                                    }
                                },
                                {
                                    breakpoint: 542,
                                    settings: {
                                        slidesToShow: 1
                                    }
                                }
                            ]
                        }
                    },
                    zoom: {
                        zoomType: "inner",
                        cursor: "crosshair",
                        easing: true,
                        zoomWindowFadeIn: 150,
                        zoomWindowFadeOut: 150
                    },
                    zoomEnable: true,
                    arrows: true,
                    btnZoom: false,
                    fullscreen: true
                },
                _create: function () {
                    this.$gallery = this.element;
                    this.$main = this.$gallery.find('[data-js-product-gallery-main]');
                    this.$preview = this.$gallery.find('[data-js-product-gallery-preview]');
                    this.$collage = this.$gallery.find('[data-js-product-gallery-collage]');
                    this.preview_type = this.$preview.attr('data-type');
                    this.$main_act_img = null;
                    this.$zoomWrapper = this.$gallery.find('[data-js-product-gallery-zoom]');
                    this.slick_state = null;
                    this.zoom_activate = true;
                    this.zoom_state = false;
                    this.id = 'id' + Math.ceil(Math.random() * 10000000);
                    this.index_id_obj = this.$main.data('index-id');
                    this.zoom_src = this.$main.data('zoom-images');

                    var _ = this,
                        arrows = this.$main.data('arrows'),
                        fullscreen = this.$main.data('fullscreen'),
                        videoAutoplay = this.$main.data('video-autoplay'),
                        zoom = this.$main.data('zoom'),
                        active_image = this.$gallery.data('active-image'),
                        $main_images = this.$main.find('img'),
                        fotarama_alts = [];

                    if (arrows != undefined) {
                        this.options.arrows = arrows;
                    }

                    if (fullscreen != undefined) {
                        this.options.fullscreen = fullscreen;
                    }

                    if (videoAutoplay != undefined) {
                        this.options.videoAutoplay = videoAutoplay;
                    }

                    if (zoom != undefined) {
                        this.options.zoomEnable = zoom;
                    }

                    if (active_image != undefined) {
                        this.options.fotorama.startindex = active_image;
                        this.options.slick.initialSlide = active_image;
                    }

                    this.options.fotorama.allowfullscreen = this.options.fullscreen;

                    if ($main_images.length === 1) {
                        this.$main.addClass('product-page-gallery__main--single');
                    }

                    $main_images.each(function () {
                        fotarama_alts.push($(this).attr('alt'));
                    });

                    if (this.$main.length) {
                        this.fotorama = this.$main.fotorama(this.options.fotorama).data('fotorama');
                    }

                    if (this.options.fullscreen) {
                        this.$btn_full = this.$gallery.find('[data-js-product-gallery-btn-fullscreen]');

                        this.$main.on({
                            'fotorama:fullscreenenter': function () {
                                _._zoomDestroy();
                            },
                            'fotorama:fullscreenexit': function () {
                                _._checkSlick();
                                _._checkCollage();

                                _._zoomInit();
                            }
                        });

                        this.$btn_full.on('click', function () {
                            _.fotorama.requestFullScreen();
                        });
                    }

                    if (this.options.btnZoom) {
                        this.$btn_zoom_toggle = $('<div>').addClass('fotorama__btn-zoom').append($('<i>').addClass('icon-zoom-in'));

                        this.$main.append(this.$btn_zoom_toggle);

                        this.$btn_zoom_toggle.on('click', function () {
                            if (_.zoom_state) _.zoomToggle('off');
                            else _.zoomToggle('on');
                        });
                    }

                    if (this.options.arrows) {
                        this.$arrow_prev = this.$gallery.find('[data-js-product-gallery-main-btn-prev]');
                        this.$arrow_next = this.$gallery.find('[data-js-product-gallery-main-btn-next]');

                        this.$arrow_prev.on('click', function () {
                            _._setEffect('crossfade', function () {
                                _.fotorama.show('<');
                            });
                        });

                        this.$arrow_next.on('click', function () {
                            _._setEffect('crossfade', function () {
                                _.fotorama.show('>');
                            });
                        });
                    }

                    //slick
                    this.$prev_slides = this.$preview.find('[data-js-product-gallery-preview-image]');

                    this.$preview.on('init', function () {
                        _.$preview.removeClass('invisible');
                    });

                    this.$preview.one('init', function () {
                        _.slick_is_init = true;
                    });

                    this.$preview.on('mousedown', '.slick-slide', function () {
                        $(this).one({
                            'mouseup': function (e) {
                                var $this = $(this);

                                _.switchImage($this);
                            }
                        });
                    });

                    //collage
                    this.$collage_slides = this.$collage.find('[data-js-product-gallery-preview-image]');

                    this.$collage.on('click', '[data-js-product-gallery-preview-image]', function () {
                        var $this = $(this);

                        _.switchImage($this);
                    });

                    this.$gallery.on('click', '[data-js-product-gallery-btn-video]', function () {
                        _.switchImage(null, 'video');

                        if ($(this).attr('data-js-product-gallery-btn-video') === 'open') {
                            _.fotorama.requestFullScreen();
                        }
                    });

                    this._slickInit();
                    this._checkSlick();

                    this.$gallery.addClass('product-page-gallery--loaded');

                    function fotoramaCheckImageAlt(fotorama) {
                        if (fotarama_alts[fotorama.activeIndex]) {
                            _.$main.find('.fotorama__active img').attr('alt', fotarama_alts[fotorama.activeIndex]);
                        }
                    }

                    function fotoramaChangeEvent() {
                        _.$main.on('fotorama:show.change', function (e, fotorama) {
                            _.$main.unbind('fotorama:showend.change fotorama:load.change');

                            _._zoomDestroy();

                            _._checkBtns(fotorama);

                            _.$main.one('fotorama:load.change', function () {
                                _._zoomInit();
                            });

                            _.$main.one('fotorama:showend.change', function (e, fotorama) {
                                if (_.$main.find('.fotorama__active img').attr('src')) {
                                    _.$main.trigger('fotorama:load.change');
                                }

                                _._checkSlick();
                                _._checkCollage();

                                fotoramaCheckImageAlt(fotorama);

                                if (_.options.videoAutoplay && fotorama.activeFrame.video) {
                                    setTimeout(function () {
                                        _.fotorama.playVideo();
                                    }, 0);
                                }
                            });
                        });
                    }

                    this.$main.one('fotorama:load', function (e, fotorama) {
                        _._zoomInit();

                        _._checkBtns(fotorama);

                        fotoramaChangeEvent();

                        _.$main.removeClass('invisible');

                        fotoramaCheckImageAlt(fotorama);

                        _.fotorama_is_init = true;
                    });

                    $(window).on('theme.changed.breakpoint.productgallery' + this.id, function () {
                        _._slickInit();
                        _._checkSlick();
                        _._checkCollage();
                        _._zoomDestroy();
                        _._zoomInit();
                    });
                },
                _slickInit: function () {
                    var this_state = window.innerWidth > this.options.bp_slick ? true : false,
                        preview_obj,
                        slidesToShow;

                    if (this_state !== this.slick_state) {
                        if (this.preview_type === 'panorama' || this_state) {
                            if (this.$preview.hasClass('slick-initialized')) {
                                this.$preview.slick('setPosition');
                            } else {
                                if (this.preview_type === 'panorama') {
                                    preview_obj = this.options.slick.panorama;
                                } else {
                                    preview_obj = this.options.slick.preview;

                                    slidesToShow = this.$preview.attr('data-slides-to-show');

                                    if (slidesToShow !== undefined) {
                                        preview_obj.slidesToShow = +slidesToShow;
                                    }
                                }

                                this.$preview.slick($.extend(preview_obj, {
                                    prevArrow: this.$gallery.find('[data-js-product-gallery-preview-btn-prev]'),
                                    nextArrow: this.$gallery.find('[data-js-product-gallery-preview-btn-next]')
                                }));
                            }
                        } else {
                            if (this.$preview.hasClass('slick-initialized')) {
                                this.$preview.addClass('invisible');
                                this.$prev_slides.removeClass('current');
                                this.$preview.slick('destroy');
                            }
                            this.slick_is_init = true;
                        }

                        this.slick_state = this_state;
                    }
                },
                _checkSlick: function (image_id) {
                    if (this.$main.hasClass('fotorama--fullscreen') || !this.$preview.hasClass('slick-initialized')) {
                        return;
                    }

                    if (!image_id) {
                        if (!this.fotorama) {
                            return;
                        }

                        image_id = this.index_id_obj[this.fotorama.activeIndex];
                    }

                    var $current_slide = this.$prev_slides.filter('[data-js-product-gallery-image-id="' + image_id + '"]'),
                        slide_index = this.$prev_slides.index($current_slide);

                    this.$prev_slides.removeClass('current');
                    $current_slide.addClass('current');
                    this.$preview.slick('slickGoTo', slide_index);
                },
                _checkCollage: function (image_id) {
                    if (this.$main.hasClass('fotorama--fullscreen') || !this.$collage.length) {
                        return;
                    }

                    if (!image_id) {
                        if (!this.fotorama) {
                            return;
                        }

                        image_id = this.index_id_obj[this.fotorama.activeIndex];
                    }

                    var $current_slide = this.$collage_slides.filter('[data-js-product-gallery-image-id="' + image_id + '"]');

                    this.$collage_slides.removeClass('current');
                    $current_slide.addClass('current');
                },
                _checkBtns: function (fotorama) {
                    if (this.options.arrows) {
                        var index = fotorama.activeFrame.i;

                        if (index === 1) this.$arrow_prev.addClass('disabled');
                        else this.$arrow_prev.removeClass('disabled');

                        if (index === fotorama.size) this.$arrow_next.addClass('disabled');
                        else this.$arrow_next.removeClass('disabled');
                    }
                },
                _zoomInit: function () {
                    var _ = this;

                    this.$main_act_img = this.$main.find('.fotorama__active').not('fotorama__stage__frame--video').find('.fotorama__img').not('.fotorama__img--full');

                    function replaceCont() {
                        setTimeout(function () {
                            _.$zoomContainer = $('body > .zoomContainer');
                            if (_.$zoomContainer.length) _.$zoomContainer.appendTo(_.$zoomWrapper);
                            else replaceCont();
                        }, 20);
                    }

                    if (this.fotorama && this.options.zoomEnable && this.$main_act_img.length && window.innerWidth > this.options.bp && this.zoom_activate && !this.$main.hasClass('fotorama--fullscreen')) {
                        var set_zoom_src = this.zoom_src[this.fotorama.activeIndex];

                        if (!set_zoom_src) return;

                        this.$main_act_img.attr('data-zoom-image', set_zoom_src);

                        this.$main_act_img.elevateZoom(this.options.zoom);

                        replaceCont();

                        this.$zoomWrapper.removeClass('d-none-important');

                        this.$main.addClass('fotorama--zoom');

                        this.zoom_state = true;
                    }
                },
                _zoomDestroy: function () {
                    if (this.options.zoomEnable && this.zoom_state && this.$main_act_img.length && this.$zoomContainer) {
                        $.removeData(this.$main_act_img, 'elevateZoom');
                        this.$main_act_img.removeAttr('data-zoom-image');

                        this.$zoomContainer.remove();
                        this.$zoomContainer = null;

                        this.$zoomWrapper.addClass('d-none-important');

                        this.$main.removeClass('fotorama--zoom');

                        this.zoom_state = false;
                    }
                },
                zoomToggle: function (state) {
                    if (this.$btn_zoom_toggle) {
                        var $icon = this.$btn_zoom_toggle.find('i');

                        $icon.removeAttr('class');

                        if (state === 'on') {
                            $icon.addClass('icon-zoom-in');

                            this.zoom_activate = true;

                            this._zoomInit();
                        } else if (state === 'off') {
                            $icon.addClass('icon-zoom-out');

                            this.zoom_activate = false;

                            this._zoomDestroy();
                        }
                    }
                },
                _setEffect: function (effect, func) {
                    var _ = this;

                    this.fotorama.setOptions({transition: effect});

                    func();

                    this.$main.one('fotorama:showend', function () {
                        _.fotorama.setOptions({transition: 'slide'});
                    });
                },
                switchImage: function ($slide, image_id) {
                    if ($slide && $slide.hasClass('current')) {
                        return;
                    }

                    var _ = this,
                        image_id = image_id || $slide.data('js-product-gallery-image-id');

                    if (this.fotorama) {
                        (function recurs_wait() {
                            if (_.fotorama_is_init) {
                                var index = 0,
                                    i = 0;

                                for (; i < _.index_id_obj.length; i++) {
                                    if (_.index_id_obj[i] == image_id) index = i;
                                }

                                _._setEffect('crossfade', function () {
                                    _.fotorama.show(index);
                                });
                            } else {
                                _.$main.one('fotorama:load', function () {
                                    recurs_wait();
                                });

                                _.$preview.on('init', function () {
                                    recurs_wait();
                                });
                            }
                        })();
                    } else if (this.preview_type === 'panorama') {
                        this._checkSlick(image_id);
                    }
                },
                switchImageById: function (image_id) {
                    var _ = this,
                        $slides = this.$prev_slides.add(this.$collage_slides),
                        $slide = $slides.filter('[data-js-product-gallery-image-id="' + image_id + '"]');

                    _.switchImage($slide, image_id);
                },
                update: function () {
                    if (this.$preview.hasClass('slick-initialized')) {
                        this.$preview.slick('setPosition');
                    }
                },
                _init: function () {

                },
                _setOption: function (key, value) {
                    $.Widget.prototype._setOption.apply(this, arguments);
                },
                destroy: function () {
                    this._zoomDestroy();

                    this.$preview.unbind('mousedown');

                    this.$preview.slick('destroy');

                    $(this.$gallery, this.$btn_full, this.$arrow_prev, this.$arrow_next, this.$btn_zoom_toggle).off().remove();

                    this.fotorama.destroy();

                    $(window).unbind('theme.changed.breakpoint.productgallery' + this.id);

                    $.Widget.prototype.destroy.call(this);
                }
            });
        },
        init: function ($gallery) {
            if (!$gallery.hasClass('product-page-gallery--loaded')) {
                $gallery.productGallery();
            }
        },
        destroy: function ($gallery) {
            if ($gallery.hasClass('product-page-gallery--loaded')) {
                $gallery.productGallery('destroy');
            }
        }
    });

    theme.ProductGallery = new ProductGallery;
};
theme.Cart = function () {

    function Cart() {
        this.selectors = {
            button_add: '.js-product-button-add-to-cart',
            button_remove: '.js-product-button-remove-from-cart'
        };

        this.load();
    }

    Cart.prototype = $.extend({}, Cart.prototype, {
        load: function () {
            var _ = this;

            function callback($button, variant_id, quantity) {
                var limit_is_exceeded = false,
                    current_variant,
                    clone_id = $button.attr('data-js-button-add-to-cart-clone-id');

                if (clone_id !== undefined) {
                    $button = $button.add($('[data-js-button-add-to-cart-clone="' + clone_id + '"]'));
                }

                $button.each(function () {
                    var $this = $(this);

                    $this.css({
                        'min-width': $this.outerWidth() + 'px'
                    });
                });

                _.updateValues(null, function (data) {
                    $.each(data.items, function () {
                        if (+this.variant_id === +variant_id) {
                            current_variant = this;
                            if (this.properties && this.properties['_with_discount']) {
                                return false;
                            }
                            if (quantity > this.quantity) {
                                $button.removeAttr('data-button-status disabled style').removeClass('active');

                                theme.Popups.cartLimitIsExceeded(this.quantity);

                                limit_is_exceeded = true;
                            }

                            return false;
                        }
                    });

                    if (!limit_is_exceeded && current_variant) {
                        if (!$('#shopify-section-product-set').length) {
                            theme.Popups.callByName('cart');
                        } else {
                            $('.set_add_to_cart_button').removeAttr('disabled');
                            Shopify.getCart(function (data) {
                                $('.btn-total').show();
                                $('.btn-total-money').html(Shopify.formatMoney(data.total_price, theme.moneyFormat));
                                $("klarna-placement").attr("data-purchase_amount", data.total_price);
                                window.KlarnaOnsiteService = window.KlarnaOnsiteService || [];
                                window.KlarnaOnsiteService.push({eventName: 'refresh-placements'});
                            });
                        }

                        $button.removeAttr('disabled').attr('data-button-status', 'added');

                        setTimeout(function () {
                            $button.removeAttr('data-button-status style').removeClass('active');
                        }, 2000);
                    }
                });
                var $wishListItem = $('.popup-wishlist-full .product-wishlist[data-product-variant-id="' + variant_id + '"]');
                if ($wishListItem.length) {
                    $wishListItem.find('.product-wishlist__remove').trigger('click');
                }
            }

            $body.on('click', this.selectors.button_add, function (e) {
                var $this = $(this);

                if (!$this.hasClass('active') && $this.attr('data-button-status') !== 'added') {
                    $this.addClass('active').attr('disabled', 'disabled');

                    var $form = $this.parents('form'),
                        form_serialize_array = $.extend({}, $form.serializeArray()),
                        form_data_object = {},
                        inner_namespace,
                        inner_prop;

                    $.each(form_serialize_array, function () {
                        if (this.name.indexOf('[') != -1 && this.name.indexOf(']') != -1) {
                            inner_namespace = this.name.split('[')[0];
                            inner_prop = this.name.split('[')[1].split(']')[0];
                            form_data_object[inner_namespace] = {};
                            form_data_object[inner_namespace][inner_prop] = this.value;
                        } else {
                            form_data_object[this.name] = this.value;
                        }
                    });

                    Shopify.getCart(function (data) {
                        var cart_has_product = false,
                            quantity = +form_data_object.quantity || 1;

                        $.each(data.items, function () {
                            if (+this.variant_id === +form_data_object.id) {
                                form_data_object.quantity = this.quantity + quantity;

                                Shopify.changeItemObj(form_data_object, function (data) {
                                    callback($this, form_data_object.id, form_data_object.quantity);
                                });

                                cart_has_product = true;

                                return false;
                            }
                        });

                        if (!cart_has_product) {
                            Shopify.addItemObj(form_data_object, function () {
                                callback($this, form_data_object.id, quantity);
                            }, function () {
                                $this.removeAttr('data-button-status disabled style').removeClass('active');
                            });
                        }
                    });

                    e.preventDefault();
                    return false;
                }
            });

            $body.on('click', this.selectors.button_remove, function (e) {
                e.preventDefault();
                var $this = $(this),
                    $product = $this.parents('[data-js-product]'),
                    id = $(this).attr('data-key');

                Shopify.removeItem(id, function (data) {
                    _.updateValues(data);

                    if (!theme.Popups.getByName('cart').hasClass('d-none-important')) {
                        theme.PopupCart.update();
                    }
                });


                return false;
            });
        },
        updateValues: function (data, callback) {
            var _ = this;

            function process(data) {
                _.updateHeaderCount(data);
                _.updateFreeShipping(data);
            }

            if (data) {
                process(data);
            } else {
                Shopify.getCart(function (data) {
                    process(data);

                    if (callback && typeof callback === 'function') {
                        callback(data);
                    }
                });
            }
        },
        updateHeaderCount: function (data) {
            $('[data-js-cart-count-mobile]').attr('data-js-cart-count-mobile', data.item_count).html(data.item_count);
            $('[data-js-cart-count-desktop]').attr('data-js-cart-count-desktop', data.item_count).html(theme.strings.header.cart_count_desktop.replace('{{ count }}', data.item_count));
        },
        updateFreeShipping: function (data) {
            var $free_shipping = $('.js-free-shipping'),
                $progress = $free_shipping.find('[data-js-progress]'),
                $text = $free_shipping.find('[data-js-text]'),
                value = +$free_shipping.attr('data-value'),
                value2 = +$free_shipping.attr('data-value-2') > 0 ? +$free_shipping.attr('data-value-2') : false,
                total = +data.total_price,
                mainValue = total >= value && value2 ? value2 : value,
                procent = Math.min(total / (mainValue / 100), 100),
                money = Math.max(mainValue - total, 0),
                text_html = money > 0 ? theme.strings.cart.general.free_shipping_html.replace('{{ value }}', Shopify.formatMoney(money, theme.moneyFormat)) : theme.strings.cart.general.free_shipping_complete;
            if (total >= value && value2) {
                text_html = money > 0 ? theme.strings.cart.general.free_shipping_2_html.replace('{{ value }}', Shopify.formatMoney(money, theme.moneyFormat)) : theme.strings.cart.general.free_shipping_complete_2;
            }

            $progress.css({
                width: procent + '%'
            });

            $text.html(text_html);
        }
    });

    theme.Cart = new Cart;
};
theme.StoreLists = function () {

    function Engine(namespace, callback) {
        this.namespace = namespace;

        this.selectors = {
            button: '.js-store-lists-add-' + namespace,
            button_remove: '.js-store-lists-remove-' + namespace,
            button_clear: '.js-store-lists-clear-' + namespace,
            has_items: '[data-js-store-lists-has-items-' + namespace + ']',
            dhas_items: '[data-js-store-lists-dhas-items-' + namespace + ']'
        };

        if (theme.customer) {
            this.current_storage = namespace + '-customer-' + theme.customer_id;

            this.app_obj = {
                namespace: namespace,
                customerid: theme.customer_id,
                shop: theme.permanent_domain,
                domain: theme.host,
                iid: theme.lists_app.iid
            };
        } else {
            this.current_storage = namespace + '-guest';
        }

        this.load(callback);
    }

    Engine.prototype = $.extend({}, Engine.prototype, {
        load: function (callback) {
            var _ = this;

            if (theme.customer) {
                var customer_storage = localStorage.getItem(this.current_storage),
                    customer_storage_arr = customer_storage ? JSON.parse(customer_storage) : [],
                    guest_storage = localStorage.getItem(this.namespace + '-guest'),
                    guest_storage_arr = guest_storage ? JSON.parse(guest_storage) : [],
                    sort_data_arr = [],
                    sort_customer_storage_arr,
                    sort_concat_arr,
                    sort_concat_arr_json;

                var sortObjectsArray = function (arr) {
                    var obj = {},
                        new_arr = [],
                        i = 0;

                    for (i = 0; i < arr.length; i++) {
                        $.each(arr[i], function (k, v) {
                            obj[k + ''] = v;
                        });
                    }

                    $.each(obj, function (k, v) {
                        var obj = {};

                        obj[k] = v;
                        new_arr.push(obj);
                    });

                    return new_arr;
                };

                var loadData = function () {
                    _.getCustomerList(function (data) {
                        if (data.status !== 200) {
                            return;
                        }

                        sort_customer_storage_arr = sortObjectsArray(customer_storage_arr);

                        if (data.items && data.items.length) {
                            sort_data_arr = sortObjectsArray(data.items);
                        }

                        sort_concat_arr = sortObjectsArray(sort_customer_storage_arr.concat(sort_data_arr));

                        sort_concat_arr_json = JSON.stringify(sort_concat_arr);

                        if (sort_concat_arr_json !== JSON.stringify(sort_customer_storage_arr) || sort_concat_arr_json !== JSON.stringify(sort_data_arr)) {
                            localStorage.setItem(_.current_storage, sort_concat_arr_json);

                            _.setCustomerList(sort_concat_arr_json);
                        }

                        _.updateHeaderCount();
                        _.checkProductStatus();

                        localStorage.removeItem(_.namespace + '-guest');
                    });
                };

                if (guest_storage_arr.length) {
                    callback({
                        trigger: function (is_active) {
                            if (is_active) {
                                customer_storage_arr = customer_storage_arr.concat(guest_storage_arr);
                            }

                            loadData();
                        },
                        info: {
                            namespace: _.namespace,
                            count: guest_storage_arr.length
                        }
                    });
                } else {
                    loadData();
                }
            } else {
                this.checkProductStatus();
            }

            $body.on('click', this.selectors.button, function (e) {
                var $this = $(this);

                $this.attr('disabled', 'disabled');

                var $product = $this.parents('[data-js-product]'),
                    handle = $product.attr('data-product-handle'),
                    id = +$product.attr('data-product-variant-id');

                if ($this.attr('data-button-status') === 'added') {
                    _.removeItem(id, handle, function (data) {
                        $this.removeAttr('data-button-status');
                        $this.removeAttr('disabled');
                    });
                } else {
                    _.addItem(id, handle, function (data) {
                        $this.attr('data-button-status', 'added');
                        $this.removeAttr('disabled');
                    });
                }

                e.preventDefault();
                return false;
            });

            function removeCallback($product, handle, id) {
                var find = '[data-js-store-lists-product-' + _.namespace + ']',
                    $popup = theme.Popups.getByName(_.namespace);

                if (handle) find += '[data-product-handle="' + handle + '"]';
                $(find).filter('[data-product-original-id="' + id + '"]').each(function () {
                    var $this = $(this);
                    $($this.parent('[class*="col"]').length ? $this.parent() : $this).remove();
                });

                if ($product && typeof $product !== undefined && $product.length) $product.remove();

                if (!$popup.hasClass('d-none-important')) {
                    theme.StoreLists.popups[_.namespace].update($popup);
                }
            }

            $body.on('click', this.selectors.button_remove, function () {
                var $this = $(this),
                    $product = $this.parents('[data-js-product]'),
                    handle = $product.attr('data-product-handle'),
                    id = $product.attr('data-product-original-id') ? +$product.attr('data-product-original-id') : +$product.attr('data-product-variant-id');

                _.removeItem(id, handle, function () {
                    removeCallback($product, handle, id);
                });
            });

            $body.on('click', this.selectors.button_clear, function () {
                _.clear(function () {
                    removeCallback();
                });
            });
        },
        setCustomerList: function (items, callback) {
            if (theme.customer) {
                $.ajax({
                    type: "POST",
                    url: "https://" + theme.lists_app.url + "/api/massadd",
                    data: $.extend({}, this.app_obj, {
                        purge: 'yes',
                        items: items
                    }),
                    cache: false,
                    success: function (data) {
                        if (callback) callback(data);
                    }
                });
            }
        },
        getCustomerList: function (callback) {
            if (theme.customer) {
                $.ajax({
                    type: 'POST',
                    url: 'https://' + theme.lists_app.url + '/api/getlist',
                    data: this.app_obj,
                    cache: false,
                    success: function (data) {
                        if (callback) callback(data);
                    }
                });
            }
        },
        addCustomerItem: function (id, handle, callback) {
            if (theme.customer) {
                $.ajax({
                    type: 'POST',
                    url: 'https://' + theme.lists_app.url + '/api/add',
                    data: $.extend({}, this.app_obj, {
                        key: id,
                        value: handle
                    }),
                    cache: false,
                    success: function (data) {
                        if (callback) callback(data);
                    }
                });
            }
        },
        removeCustomerItem: function (id, callback) {
            if (theme.customer) {
                $.ajax({
                    type: 'POST',
                    url: 'https://' + theme.lists_app.url + '/api/delete',
                    data: $.extend({}, this.app_obj, {
                        key: id,
                        _method: 'DELETE'
                    }),
                    cache: false,
                    success: function (data) {
                        if (callback) callback(data);
                    }
                });
            }
        },
        clearCustomerItem: function (callback) {
            if (theme.customer) {
                $.ajax({
                    type: 'POST',
                    url: 'https://' + theme.lists_app.url + '/api/massdelete',
                    data: $.extend({}, this.app_obj, {
                        _method: 'DELETE'
                    }),
                    cache: false,
                    success: function (data) {
                        if (callback) callback(data);
                    }
                });
            }
        },
        addItem: function (id, handle, callback) {
            var storage = localStorage.getItem(this.current_storage),
                items = storage ? JSON.parse(storage) : [],
                obj = {};

            obj[id] = handle;

            items.push(obj);

            localStorage.setItem(this.current_storage, JSON.stringify(items));

            this.checkProductStatus();
            this.updateHeaderCount();

            this.addCustomerItem(id, handle);

            if (callback) callback();
        },
        removeItem: function (id, handle, callback) {
            var storage = localStorage.getItem(this.current_storage),
                items = storage ? JSON.parse(storage) : [];

            $.each(items, function (i) {
                if (this[id] && this[id] === handle) {
                    items.splice(i, 1);
                    return false;
                }
            });

            localStorage.setItem(this.current_storage, JSON.stringify(items));

            this.checkProductStatus();

            $(this.selectors.has_items)[items.length > 0 ? 'removeClass' : 'addClass']('d-none-important');
            $(this.selectors.dhas_items)[items.length > 0 ? 'addClass' : 'removeClass']('d-none-important');

            this.updateHeaderCount();

            this.removeCustomerItem(id);

            if (callback) callback();
        },
        clear: function (callback) {
            localStorage.removeItem(this.current_storage);

            this.checkProductStatus();

            $(this.selectors.has_items).addClass('d-none-important');
            $(this.selectors.dhas_items).removeClass('d-none-important');

            this.updateHeaderCount();

            this.clearCustomerItem();

            if (callback) callback();
        },
        checkProductStatus: function ($products) {
            $products = $products || $('[data-js-product]');

            var _ = this,
                storage = localStorage.getItem(this.current_storage),
                items = storage ? JSON.parse(storage) : [],
                $active_products = $();

            $.each(items, function () {
                $.each(this, function (k, v) {
                    var $selected_product = $products.filter('[data-product-handle="' + v + '"][data-product-variant-id="' + k + '"]');

                    if ($selected_product.length) {
                        $active_products = $active_products.add($selected_product);
                    }
                });
            });

            $products.not($active_products).find(_.selectors.button).removeAttr('data-button-status');
            $active_products.find(_.selectors.button).attr('data-button-status', 'added');
        },
        updateHeaderCount: function (callback) {
            var storage = localStorage.getItem(this.current_storage),
                count = storage ? JSON.parse(storage).length : 0;

            $('[data-js-' + this.namespace + '-count]').attr('data-js-' + this.namespace + '-count', count).html(count);

            if (callback) callback();
        }
    });



    function StoreLists() {
        this.namespaces = [
            'wishlist',
            'compare'
        ];

        this.load();
    }

    StoreLists.prototype = $.extend({}, StoreLists.prototype, {
        lists: {},
        popups: {},
        load: function () {
            var triggers_array = [];

            for (var i = 0; i < this.namespaces.length; i++) {
                this.lists[this.namespaces[i]] = new Engine(this.namespaces[i], function (obj) {
                    triggers_array.push(obj);
                });
            }

            if (triggers_array.length) {
                var $button_confirm = $('[data-js-button-transfer-data]');



                var $info = $('[data-js-transfer-data-info]');

                for (var i = 0; i < triggers_array.length; i++) {
                    var $li = $('<li>'),
                        html = theme.strings.general.popups.confirm_transfer_data.info,
                        title;

                    switch (triggers_array[i].info.namespace) {
                        case 'wishlist':
                            title = theme.strings.general.popups.confirm_transfer_data.wishlist_title;
                            break;
                        case 'compare':
                            title = theme.strings.general.popups.confirm_transfer_data.compare_title;
                            break;
                    }

                    html = html.replace('{{ title }}', title);
                    html = html.replace('{{ count }}', triggers_array[i].info.count);
                    html = html.replace('{{ name }}', triggers_array[i].info.count > 1 ? theme.strings.general.popups.confirm_transfer_data.name_plural : theme.strings.general.popups.confirm_transfer_data.name_single);

                    $li.html(html);

                    $info.append($li);
                }

            }
        },
        checkProductStatus: function () {
            $.each(this.lists, function () {
                this.checkProductStatus();
            });
        },
        updateHeaderCount: function () {
            $.each(this.lists, function () {
                this.updateHeaderCount();
            });
        }
    });

    theme.StoreLists = new StoreLists;
};
theme.Menu = function () {

    function Menu() {
        this.settings = {
            popup_name: 'navigation',
            button_navigation: 'data-js-popup-navigation-button'
        };

        this.selectors = {
            popup_navigation: '.js-popup-navigation'
        }
    }

    Menu.prototype = $.extend({}, Menu.prototype, {
        is_open_animate: false,
        duration: function () {
            return window.theme.animations.menu.duration > 0.1 ? (window.theme.animations.menu.duration - 0.1) * 1000 : 0;
        },
        init: function ($menu, params) {
            var _ = this,
                $panel = $menu.find('.menu__panel'),
                $megamenus = $panel.find('.menu__megamenu'),
                $dropdowns = $panel.find('.menu__dropdown'),
                $popup_navigation = $(this.selectors.popup_navigation),
                $button_navigation = $popup_navigation.find('[' + this.settings.button_navigation + ']'),
                $curtain = $menu.find('.menu__curtain');

            this.$menu = $menu;
            this.$panel = $panel;
            this.$megamenus = $megamenus;
            this.$dropdowns = $dropdowns;
            this.$curtain = $curtain;

            this.handlerMenu = theme.Global.responsiveHandler({
                namespace: params.namespace,
                element: $menu,
                delegate: 'a',
                on_mobile: true,
                events: {
                    'click': function (e) {
                        var $this = $(this),
                            $item = $this.parent(),
                            $list = $item.find('.menu__list').first();

                        $panel.unbind('transitionend');

                        if ($list.length) {
                            var level = $item.parents('.menu__level-02').length ? 3 : 2;

                            $item.addClass('open');

                            $item.find('.menu__list').first().addClass('show');

                            $panel.attr('data-mobile-level', level);

                            if ($menu.length) {
                                $menu.scrollTop(0);
                            }

                            $button_navigation.attr(_.settings.button_navigation, 'back');

                            e.preventDefault();
                            return false;
                        }
                    }
                }
            });

            this.handlerBack = theme.Global.responsiveHandler({
                namespace: params.namespace,
                element: $popup_navigation,
                delegate: '[' + this.settings.button_navigation + '="back"]',
                on_mobile: true,
                events: {
                    'click': function () {
                        var level = $panel.attr('data-mobile-level') - 1,
                            button_status = level > 1 ? 'back' : 'close';

                        var $item = $menu.find('.menu__item.open').last();

                        $item.removeClass('open');

                        $panel.one('transitionend', function () {
                            $item.find('.menu__list').first().removeClass('show');
                        });

                        $panel.attr('data-mobile-level', level);

                        $menu.scrollTop(0);

                        $button_navigation.attr(_.settings.button_navigation, button_status);

                        if ($panel.css('transition-duration') === '0s') {
                            $panel.trigger('transitionend');
                        }
                    }
                }
            });

            theme.Popups.addHandler(this.settings.popup_name, 'close.before.closeMobileMenu', function () {
                if (theme.current.is_mobile) {
                    _.closeMobileMenu();

                    $button_navigation.attr(_.settings.button_navigation, 'close');
                }
            });

            this.handlerDropdown = theme.Global.responsiveHandler({
                namespace: params.namespace,
                element: $panel,
                delegate: '> .menu__item',
                on_desktop: true,
                events: {
                    'mouseenter mouseleave': function (e) {
                        _._toggleMegamenu($(this), e);
                    }
                }
            });

            return {
                destroy: function () {
                    theme.Popups.removeHandler(_.settings.popup_name, 'close.before.closeMobileMenu');
                    _.handlerMenu.unbind();
                    _.handlerBack.unbind();
                    _.handlerDropdown.unbind();
                }
            }
        },
        _toggleMegamenu: function ($item, e) {
            var _ = this,
                $megamenu = $item.find('.menu__megamenu'),
                $dropdown = $item.find('.menu__dropdown');

            if (e.type === 'mouseenter') {
                if ($megamenu.length) {
                    this.is_open_animate = true;

                    $megamenu.velocity('stop', true);
                    this.$dropdowns.velocity('finish');

                    this.$megamenus.not($megamenu).removeClass('show animate visible').removeAttr('style');
                    this.$dropdowns.removeClass('show animate visible').removeAttr('style');

                    $megamenu.addClass('show overflow-hidden');

                    var max_height = theme.current.height - $megamenu[0].getBoundingClientRect().top,
                        height = Math.min($megamenu.children().innerHeight(), max_height);

                    $megamenu.css({
                        'max-height': max_height
                    });

                    this.$curtain.velocity({
                        height: height,
                        tween: [height, this.$curtain.height()]
                    }, {

                        duration: this.duration(),
                        begin: function () {
                            _.$curtain.addClass('show');
                            $megamenu.addClass('animate visible');
                        },
                        progress: function (elements, c, r, s, t) {
                            $megamenu.height(t);
                        },
                        complete: function () {
                            $megamenu.removeClass('overflow-hidden').removeAttr('style');

                            _.is_open_animate = false;
                        }
                    });
                } else if ($dropdown.length) {
                    $dropdown.addClass('show');

                    $dropdown.velocity('stop', true);
                    this.$megamenus.velocity('finish');

                    this.$dropdowns.not($dropdown).removeClass('show animate visible').removeAttr('style');
                    this.$megamenus.removeClass('show animate visible').removeAttr('style');

                    $dropdown.velocity('slideDown', {
                        duration: this.duration(),
                        begin: function () {
                            setTimeout(function () {
                                $dropdown.addClass('animate visible');
                            }, 0);
                        },
                        complete: function () {
                            $dropdown.removeAttr('style');
                        }
                    });
                }
            } else if (e.type === 'mouseleave') {
                if ($megamenu.length && $megamenu.hasClass('show')) {
                    this.$curtain.velocity('stop');

                    $megamenu.velocity({
                        height: 0,
                        tween: [0, $megamenu.height()]
                    }, {
                        duration: this.duration(),
                        begin: function () {
                            $megamenu.addClass('overflow-hidden').removeClass('visible');
                        },
                        progress: function (elements, c, r, s, t) {
                            _.$curtain.height(t);
                        },
                        complete: function () {
                            $megamenu.removeClass('show animate overflow-hidden').removeAttr('style');

                            if (!_.is_open_animate) {
                                _.$curtain.removeClass('show').removeAttr('style');
                            }
                        }
                    });
                } else if ($dropdown.length) {
                    $dropdown.velocity('slideUp', {
                        duration: this.duration(),
                        begin: function () {
                            $dropdown.removeClass('visible');
                        },
                        complete: function () {
                            $dropdown.removeClass('show animate').removeAttr('style');
                        }
                    });
                }
            }
        },
        closeMobileMenu: function () {
            if (theme.current.is_mobile) {
                var $panel = this.$menu.find('.menu__panel');

                $panel.find('.menu__item').removeClass('open');

                $panel.attr('data-mobile-level', '1');

                this.$menu.scrollTop(0);
            }
        }
    });

    theme.Menu = new Menu;
};

theme.Accordion = function () {

    function Accordion() {
        this.settings = {
            elements: 'data-js-accordion',
            button: 'data-js-accordion-button',
            duration: function () {
                return theme.animations.accordion.duration * 1000;
            }
        };

        this.selectors = {
            elements: '[' + this.settings.elements + ']',
            button: '[' + this.settings.button + ']',
            content: '[data-js-accordion-content]',
            input: '[data-js-accordion-input]'
        };

        this.load();
    }

    Accordion.prototype = $.extend({}, Accordion.prototype, {
        load: function () {
            var _ = this;

            function toggle(e) {
                var $this = $(this),
                    $input = $this.find(_.selectors.input),
                    $sticky = $('.js-sticky-sidebar');

                if ($input.length) {
                    if (e.target.tagName === 'INPUT') {
                        return;
                    } else if ($.contains($this.find('label')[0], e.target) && !$input.prop('checked') && $this.hasClass('open')) {
                        return;
                    }
                }

                var $element = $this.parents(_.selectors.elements).first(),
                    $content = $element.find(_.selectors.content);

                if ($this.attr('data-js-accordion-select') !== 'all') {
                    $content = $content.first();
                }

                if ($content.is(':animated')) {
                    return;
                }

                $this.toggleClass('open');

                if ($this.hasClass('open')) {
                    $content.hide().removeClass('d-none').slideDown({
                        duration: _.settings.duration(),
                        step: function () {
                            if (theme.StickySidebar) {
                                theme.StickySidebar.update($sticky);
                            }
                        },
                        complete: function () {
                            $content.removeAttr('style');

                            if (theme.StickySidebar) {
                                theme.StickySidebar.update($sticky);
                            }
                        }
                    });
                } else {
                    $content.slideUp({
                        duration: _.settings.duration(),
                        step: function () {
                            if (theme.StickySidebar) {
                                theme.StickySidebar.update($sticky);
                            }
                        },
                        complete: function () {
                            $content.addClass('d-none').removeAttr('style');

                            if (theme.StickySidebar) {
                                theme.StickySidebar.update($sticky);
                            }
                        }
                    });
                }

                $element.find(_.selectors.button)
                    .not($this)
                    .not($element.find(_.selectors.content).find(_.selectors.button))
                    .add($element.find('[' + _.settings.button + '="inner"]'))
                    [$this.hasClass('open') ? 'addClass' : 'removeClass']('open');
            }

            $body.on('click', '[' + this.settings.elements + '="all"] ' + this.selectors.button, toggle);

            theme.Global.responsiveHandler({
                namespace: '.accordion',
                element: $body,
                delegate: '[' + this.settings.elements + '="only-mobile"] ' + this.selectors.button,
                on_mobile: true,
                events: {
                    'click': toggle
                }
            });
        }
    });

    theme.Accordion = new Accordion;
};


/*================ Sections ================*/
var Section = {};

Section.prototype = $.extend({}, Section.prototype, {
    _registerHansler: function () {
        console.log(this.elemsHasHandler)
        if (!this.elemsHasHandler) {
            this.elemsHasHandler = [];
        }

        for (var i = 0; i < arguments.length; i++) {
            this.elemsHasHandler.push(arguments[i]);
        }
    },
    _offHanslers: function () {
        console.log(this.elemsHasHandler)

        if (this.elemsHasHandler && $.isArray(this.elemsHasHandler)) {
            for (var i = 0; i < this.elemsHasHandler.length; i++) {
                $(this.elemsHasHandler[i]).off();
            }

            delete this.elemsHasHandler;
        }
    }
});

$(function () {
    theme.Global();
    theme.ProductOptions();
    theme.ProductCurrency();
    theme.Loader();
    theme.StoreLists();
    theme.sections = new slate.Sections();
    // Common a11y fixes

    if (window.location.hash.indexOf('.') === -1) {

        slate.a11y.pageLinkFocus($(window.location.hash + ''));


        $('.in-page-link').on('click', function (evt) {

            slate.a11y.pageLinkFocus($(evt.currentTarget.hash + ''));

        });

    }


    // Target tables to make them scrollable

    var tableSelectors = '.rte table';


    slate.rte.wrapTable({

        $tables: $(tableSelectors),

        tableWrapperClass: 'rte__table-wrapper'

    });


    // Target iframes to make them responsive

    var iframeSelectors =

        '.rte iframe[src*="youtube.com/embed"]:not(.not-responsive),' +

        '.rte iframe[src*="player.vimeo"]:not(.not-responsive)';


    slate.rte.wrapIframe({

        $iframes: $(iframeSelectors),

        iframeWrapperClass: 'rte__video-wrapper'

    });


    // Apply a specific class to the html element for browser support of cookies.

    if (slate.cart.cookiesEnabled()) {

        document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');

    }
});


