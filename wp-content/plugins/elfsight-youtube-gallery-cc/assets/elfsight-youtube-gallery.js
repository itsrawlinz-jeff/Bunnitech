/*
    Youtube Gallery
    Version: 3.4.2
    Release date: Fri May 08 2020

    https://elfsight.com

    Copyright (c) 2020 Elfsight, LLC. ALL RIGHTS RESERVED
*/

! function() {
    "use strict";
    window.onYottieReady = function() {
            jQuery("[data-elfsight-youtube-gallery-options]").each(function() {
                var e = jQuery(this),
                    t = e.attr("data-elfsight-youtube-gallery-options"),
                    i = JSON.parse(decodeURIComponent(t));
                e.yottie(i).removeAttr("data-elfsight-youtube-gallery-options").data("elfsight-options", t)
            })
        },
        function e(t, i, n) {
            function o(r, s) {
                if (!i[r]) {
                    if (!t[r]) {
                        var l = "function" == typeof require && require;
                        if (!s && l) return l(r, !0);
                        if (a) return a(r, !0);
                        throw new Error("Cannot find module '" + r + "'")
                    }
                    var p = i[r] = {
                        exports: {}
                    };
                    t[r][0].call(p.exports, function(e) {
                        return o(t[r][1][e] || e)
                    }, p, p.exports, e, t, i, n)
                }
                return i[r].exports
            }
            for (var a = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
            return o
        }({
            1: [function(e, t, i) {
                var n;
                n = function() {
                    return function(e) {
                        var t = {};

                        function i(n) {
                            if (t[n]) return t[n].exports;
                            var o = t[n] = {
                                exports: {},
                                id: n,
                                loaded: !1
                            };
                            return e[n].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports
                        }
                        return i.m = e, i.c = t, i.p = "", i(0)
                    }([function(e, t, i) {
                        var n = i(1).default,
                            o = i(2).default;
                        t.__esModule = !0;
                        var a = n(i(3)),
                            r = o(i(9)),
                            s = o(i(5)),
                            l = n(i(4)),
                            p = n(i(10)),
                            d = o(i(11));

                        function c() {
                            var e = new a.HandlebarsEnvironment;
                            return l.extend(e, a), e.SafeString = r.default, e.Exception = s.default, e.Utils = l, e.escapeExpression = l.escapeExpression, e.VM = p, e.template = function(t) {
                                return p.template(t, e)
                            }, e
                        }
                        var u = c();
                        u.create = c, d.default(u), u.default = u, t.default = u, e.exports = t.default
                    }, function(e, t) {
                        t.default = function(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                            return t.default = e, t
                        }, t.__esModule = !0
                    }, function(e, t) {
                        t.default = function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }, t.__esModule = !0
                    }, function(e, t, i) {
                        var n = i(1).default,
                            o = i(2).default;
                        t.__esModule = !0, t.HandlebarsEnvironment = c, t.createFrame = h;
                        var a = n(i(4)),
                            r = o(i(5));
                        t.VERSION = "3.0.1", t.COMPILER_REVISION = 6, t.REVISION_CHANGES = {
                            1: "<= 1.0.rc.2",
                            2: "== 1.0.0-rc.3",
                            3: "== 1.0.0-rc.4",
                            4: "== 1.x.x",
                            5: "== 2.0.0-alpha.x",
                            6: ">= 2.0.0-beta.1"
                        };
                        var s = a.isArray,
                            l = a.isFunction,
                            p = a.toString,
                            d = "[object Object]";

                        function c(e, t) {
                            var i;
                            this.helpers = e || {}, this.partials = t || {}, (i = this).registerHelper("helperMissing", function() {
                                if (1 !== arguments.length) throw new r.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                            }), i.registerHelper("blockHelperMissing", function(e, t) {
                                var n = t.inverse,
                                    o = t.fn;
                                if (!0 === e) return o(this);
                                if (!1 === e || null == e) return n(this);
                                if (s(e)) return 0 < e.length ? (t.ids && (t.ids = [t.name]), i.helpers.each(e, t)) : n(this);
                                if (t.data && t.ids) {
                                    var r = h(t.data);
                                    r.contextPath = a.appendContextPath(t.data.contextPath, t.name), t = {
                                        data: r
                                    }
                                }
                                return o(e, t)
                            }), i.registerHelper("each", function(e, t) {
                                if (!t) throw new r.default("Must pass iterator to #each");
                                var i = t.fn,
                                    n = t.inverse,
                                    o = 0,
                                    p = "",
                                    d = void 0,
                                    c = void 0;

                                function u(t, n, o) {
                                    d && (d.key = t, d.index = n, d.first = 0 === n, d.last = !!o, c && (d.contextPath = c + t)), p += i(e[t], {
                                        data: d,
                                        blockParams: a.blockParams([e[t], t], [c + t, null])
                                    })
                                }
                                if (t.data && t.ids && (c = a.appendContextPath(t.data.contextPath, t.ids[0]) + "."), l(e) && (e = e.call(this)), t.data && (d = h(t.data)), e && "object" == typeof e)
                                    if (s(e))
                                        for (var m = e.length; o < m; o++) u(o, o, o === e.length - 1);
                                    else {
                                        var g = void 0;
                                        for (var f in e) e.hasOwnProperty(f) && (g && u(g, o - 1), g = f, o++);
                                        g && u(g, o - 1, !0)
                                    }
                                return 0 === o && (p = n(this)), p
                            }), i.registerHelper("if", function(e, t) {
                                return l(e) && (e = e.call(this)), !t.hash.includeZero && !e || a.isEmpty(e) ? t.inverse(this) : t.fn(this)
                            }), i.registerHelper("unless", function(e, t) {
                                return i.helpers.if.call(this, e, {
                                    fn: t.inverse,
                                    inverse: t.fn,
                                    hash: t.hash
                                })
                            }), i.registerHelper("with", function(e, t) {
                                l(e) && (e = e.call(this));
                                var i = t.fn;
                                if (a.isEmpty(e)) return t.inverse(this);
                                if (t.data && t.ids) {
                                    var n = h(t.data);
                                    n.contextPath = a.appendContextPath(t.data.contextPath, t.ids[0]), t = {
                                        data: n
                                    }
                                }
                                return i(e, t)
                            }), i.registerHelper("log", function(e, t) {
                                var n = t.data && null != t.data.level ? parseInt(t.data.level, 10) : 1;
                                i.log(n, e)
                            }), i.registerHelper("lookup", function(e, t) {
                                return e ? "constructor" !== t || e.propertyIsEnumerable(t) ? e[t] : void 0 : e
                            })
                        }
                        c.prototype = {
                            constructor: c,
                            logger: u,
                            log: m,
                            registerHelper: function(e, t) {
                                if (p.call(e) === d) {
                                    if (t) throw new r.default("Arg not supported with multiple helpers");
                                    a.extend(this.helpers, e)
                                } else this.helpers[e] = t
                            },
                            unregisterHelper: function(e) {
                                delete this.helpers[e]
                            },
                            registerPartial: function(e, t) {
                                if (p.call(e) === d) a.extend(this.partials, e);
                                else {
                                    if (void 0 === t) throw new r.default("Attempting to register a partial as undefined");
                                    this.partials[e] = t
                                }
                            },
                            unregisterPartial: function(e) {
                                delete this.partials[e]
                            }
                        };
                        var u = {
                                methodMap: {
                                    0: "debug",
                                    1: "info",
                                    2: "warn",
                                    3: "error"
                                },
                                DEBUG: 0,
                                INFO: 1,
                                WARN: 2,
                                ERROR: 3,
                                level: 1,
                                log: function(e, t) {
                                    if ("undefined" != typeof console && u.level <= e) {
                                        var i = u.methodMap[e];
                                        (console[i] || console.log).call(console, t)
                                    }
                                }
                            },
                            m = (t.logger = u).log;

                        function h(e) {
                            var t = a.extend({}, e);
                            return t._parent = e, t
                        }
                        t.log = m
                    }, function(e, t) {
                        t.__esModule = !0, t.extend = function(e) {
                            for (var t = 1; t < arguments.length; t++)
                                for (var i in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], i) && (e[i] = arguments[t][i]);
                            return e
                        }, t.indexOf = function(e, t) {
                            for (var i = 0, n = e.length; i < n; i++)
                                if (e[i] === t) return i;
                            return -1
                        }, t.escapeExpression = function(e) {
                            if ("string" != typeof e) {
                                if (e && e.toHTML) return e.toHTML();
                                if (null == e) return "";
                                if (!e) return e + "";
                                e = "" + e
                            }
                            return o.test(e) ? e.replace(n, a) : e
                        }, t.isEmpty = function(e) {
                            return !e && 0 !== e || !(!l(e) || 0 !== e.length)
                        }, t.blockParams = function(e, t) {
                            return e.path = t, e
                        }, t.appendContextPath = function(e, t) {
                            return (e ? e + "." : "") + t
                        };
                        var i = {
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#x27;",
                                "`": "&#x60;"
                            },
                            n = /[&<>"'`]/g,
                            o = /[&<>"'`]/;

                        function a(e) {
                            return i[e]
                        }
                        var r, s = Object.prototype.toString;
                        t.toString = s, (r = function(e) {
                            return "function" == typeof e
                        })(/x/) && (t.isFunction = r = function(e) {
                            return "function" == typeof e && "[object Function]" === s.call(e)
                        }), t.isFunction = r;
                        var l = Array.isArray || function(e) {
                            return !(!e || "object" != typeof e) && "[object Array]" === s.call(e)
                        };
                        t.isArray = l
                    }, function(e, t, i) {
                        var n = i(6).default;
                        t.__esModule = !0;
                        var o = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];

                        function a(e, t) {
                            var i = t && t.loc,
                                r = void 0,
                                s = void 0;
                            i && (e += " - " + (r = i.start.line) + ":" + (s = i.start.column));
                            for (var l = Error.prototype.constructor.call(this, e), p = 0; p < o.length; p++) this[o[p]] = l[o[p]];
                            Error.captureStackTrace && Error.captureStackTrace(this, a);
                            try {
                                i && (this.lineNumber = r, n ? Object.defineProperty(this, "column", {
                                    value: s,
                                    enumerable: !0
                                }) : this.column = s)
                            } catch (e) {}
                        }
                        a.prototype = new Error, t.default = a, e.exports = t.default
                    }, function(e, t, i) {
                        e.exports = {
                            default: i(7),
                            __esModule: !0
                        }
                    }, function(e, t, i) {
                        var n = i(8);
                        e.exports = function(e, t, i) {
                            return n.setDesc(e, t, i)
                        }
                    }, function(e, t) {
                        var i = Object;
                        e.exports = {
                            create: i.create,
                            getProto: i.getPrototypeOf,
                            isEnum: {}.propertyIsEnumerable,
                            getDesc: i.getOwnPropertyDescriptor,
                            setDesc: i.defineProperty,
                            setDescs: i.defineProperties,
                            getKeys: i.keys,
                            getNames: i.getOwnPropertyNames,
                            getSymbols: i.getOwnPropertySymbols,
                            each: [].forEach
                        }
                    }, function(e, t) {
                        function i(e) {
                            this.string = e
                        }
                        t.__esModule = !0, i.prototype.toString = i.prototype.toHTML = function() {
                            return "" + this.string
                        }, t.default = i, e.exports = t.default
                    }, function(e, t, i) {
                        var n = i(1).default,
                            o = i(2).default;
                        t.__esModule = !0, t.checkRevision = function(e) {
                            var t = e && e[0] || 1,
                                i = s.COMPILER_REVISION;
                            if (t !== i) {
                                if (t < i) {
                                    var n = s.REVISION_CHANGES[i],
                                        o = s.REVISION_CHANGES[t];
                                    throw new r.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + o + ").")
                                }
                                throw new r.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
                            }
                        }, t.template = function(e, t) {
                            if (!t) throw new r.default("No environment passed to template");
                            if (!e || !e.main) throw new r.default("Unknown template object: " + typeof e);
                            t.VM.checkRevision(e.compiler);
                            var i = {
                                strict: function(e, t) {
                                    if (!(t in e)) throw new r.default('"' + t + '" not defined in ' + e);
                                    return e[t]
                                },
                                lookup: function(e, t) {
                                    for (var i = e.length, n = 0; n < i; n++)
                                        if (e[n] && null != e[n][t]) return e[n][t]
                                },
                                lambda: function(e, t) {
                                    return "function" == typeof e ? e.call(t) : e
                                },
                                escapeExpression: a.escapeExpression,
                                invokePartial: function(i, n, o) {
                                    o.hash && (n = a.extend({}, n, o.hash)), i = t.VM.resolvePartial.call(this, i, n, o);
                                    var s = t.VM.invokePartial.call(this, i, n, o);
                                    if (null == s && t.compile && (o.partials[o.name] = t.compile(i, e.compilerOptions, t), s = o.partials[o.name](n, o)), null == s) throw new r.default("The partial " + o.name + " could not be compiled when running in runtime-only mode");
                                    if (o.indent) {
                                        for (var l = s.split("\n"), p = 0, d = l.length; p < d && (l[p] || p + 1 !== d); p++) l[p] = o.indent + l[p];
                                        s = l.join("\n")
                                    }
                                    return s
                                },
                                fn: function(t) {
                                    return e[t]
                                },
                                programs: [],
                                program: function(e, t, i, n, o) {
                                    var a = this.programs[e],
                                        r = this.fn(e);
                                    return t || o || n || i ? a = l(this, e, r, t, i, n, o) : a || (a = this.programs[e] = l(this, e, r)), a
                                },
                                data: function(e, t) {
                                    for (; e && t--;) e = e._parent;
                                    return e
                                },
                                merge: function(e, t) {
                                    var i = e || t;
                                    return e && t && e !== t && (i = a.extend({}, t, e)), i
                                },
                                noop: t.VM.noop,
                                compilerInfo: e.compiler
                            };

                            function n(t) {
                                var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                    a = o.data;
                                n._setup(o), !o.partial && e.useData && (a = function(e, t) {
                                    return t && "root" in t || ((t = t ? s.createFrame(t) : {}).root = e), t
                                }(t, a));
                                var r = void 0,
                                    l = e.useBlockParams ? [] : void 0;
                                return e.useDepths && (r = o.depths ? [t].concat(o.depths) : [t]), e.main.call(i, t, i.helpers, i.partials, a, l, r)
                            }
                            return n.isTop = !0, n._setup = function(n) {
                                n.partial ? (i.helpers = n.helpers, i.partials = n.partials) : (i.helpers = i.merge(n.helpers, t.helpers), e.usePartial && (i.partials = i.merge(n.partials, t.partials)))
                            }, n._child = function(t, n, o, a) {
                                if (e.useBlockParams && !o) throw new r.default("must pass block params");
                                if (e.useDepths && !a) throw new r.default("must pass parent depths");
                                return l(i, t, e[t], n, 0, o, a)
                            }, n
                        }, t.wrapProgram = l, t.resolvePartial = function(e, t, i) {
                            return e ? e.call || i.name || (i.name = e, e = i.partials[e]) : e = i.partials[i.name], e
                        }, t.invokePartial = function(e, t, i) {
                            if (i.partial = !0, void 0 === e) throw new r.default("The partial " + i.name + " could not be found");
                            if (e instanceof Function) return e(t, i)
                        }, t.noop = function() {
                            return ""
                        };
                        var a = n(i(4)),
                            r = o(i(5)),
                            s = i(3);

                        function l(e, t, i, n, o, a, r) {
                            function s(t) {
                                var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                return i.call(e, t, e.helpers, e.partials, o.data || n, a && [o.blockParams].concat(a), r && [t].concat(r))
                            }
                            return s.program = t, s.depth = r ? r.length : 0, s.blockParams = o || 0, s
                        }
                    }, function(e, t) {
                        (function(i) {
                            t.__esModule = !0, t.default = function(e) {
                                var t = void 0 !== i ? i : window,
                                    n = t.Handlebars;
                                e.noConflict = function() {
                                    t.Handlebars === e && (t.Handlebars = n)
                                }
                            }, e.exports = t.default
                        }).call(t, function() {
                            return this
                        }())
                    }])
                }, "object" == typeof i && "object" == typeof t ? t.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof i ? i.Handlebars = n() : this.Handlebars = n()
            }, {}],
            2: [function(e, t, i) {
                t.exports = ".swiper-slide,.swiper-wrapper{width:100%;height:100%;position:relative}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.swiper-wrapper{z-index:1;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-o-transform:translate(0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;-moz-background-size:27px 44px;-webkit-background-size:27px 44px;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E');left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E')}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E')}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E');right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E')}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E')}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);-moz-transform:translate3d(0,-50%,0);-o-transform:translate(0,-50%);-ms-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;-moz-transform-origin:right top;-ms-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:rgba(255,255,255,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-moz-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-moz-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-moz-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;-moz-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');background-position:50%;-webkit-background-size:100%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.eapps-root,.eui-reset,.yottie-widget{-ms-flex-line-pack:initial;align-content:initial;-webkit-box-align:initial;-ms-flex-align:initial;align-items:initial;align-self:initial;-webkit-animation-delay:initial;animation-delay:initial;-webkit-animation-direction:initial;animation-direction:initial;-webkit-animation-duration:initial;animation-duration:initial;-webkit-animation-fill-mode:initial;animation-fill-mode:initial;-webkit-animation-iteration-count:initial;animation-iteration-count:initial;-webkit-animation-name:initial;animation-name:initial;-webkit-animation-play-state:initial;animation-play-state:initial;-webkit-animation-timing-function:initial;animation-timing-function:initial;-webkit-backface-visibility:initial;backface-visibility:initial;background-attachment:initial;background-blend-mode:initial;background-clip:initial;background-color:initial;background-image:initial;background-origin:initial;background-position-x:initial;background-position-y:initial;background-repeat:initial;background-size:initial;block-size:initial;border-block-end-color:initial;border-block-end-style:initial;border-block-end-width:initial;border-block-start-color:initial;border-block-start-style:initial;border-block-start-width:initial;border-bottom-left-radius:initial;border-bottom-right-radius:initial;border-bottom-width:initial;border-collapse:initial;border-image-outset:initial;border-image-repeat:initial;border-image-slice:initial;border-image-source:initial;border-image-width:initial;border-inline-end-color:initial;border-inline-end-style:initial;border-inline-end-width:initial;border-inline-start-color:initial;border-inline-start-style:initial;border-inline-start-width:initial;border-left-width:initial;border-right-width:initial;border-spacing:initial;border-top-left-radius:initial;border-top-right-radius:initial;border-top-width:initial;bottom:initial;-webkit-box-decoration-break:initial;box-decoration-break:initial;-webkit-box-shadow:initial;box-shadow:initial;-webkit-box-sizing:initial;box-sizing:initial;caption-side:initial;caret-color:initial;clear:initial;clip:initial;-webkit-clip-path:initial;clip-path:initial;clip-rule:initial;color:inherit;-webkit-print-color-adjust:initial;color-adjust:initial;color-interpolation:initial;color-interpolation-filters:initial;-webkit-column-count:initial;column-count:initial;-webkit-column-fill:initial;column-fill:initial;-webkit-column-gap:initial;column-gap:initial;-webkit-column-rule-color:initial;column-rule-color:initial;-webkit-column-rule-style:initial;column-rule-style:initial;-webkit-column-rule-width:initial;column-rule-width:initial;-webkit-column-width:initial;column-width:initial;content:initial;counter-increment:initial;counter-reset:initial;cursor:initial;dominant-baseline:initial;empty-cells:initial;fill:initial;fill-opacity:initial;fill-rule:initial;-webkit-filter:initial;filter:initial;-ms-flex-preferred-size:initial;flex-basis:initial;-webkit-box-orient:initial;-webkit-box-direction:initial;-ms-flex-direction:initial;flex-direction:initial;-webkit-box-flex:initial;-ms-flex-positive:initial;flex-grow:initial;-ms-flex-negative:initial;flex-shrink:initial;-ms-flex-wrap:initial;flex-wrap:initial;float:initial;flood-color:initial;flood-opacity:initial;-webkit-font-feature-settings:initial;font-feature-settings:initial;-webkit-font-kerning:initial;font-kerning:initial;-webkit-font-language-override:initial;font-language-override:initial;font-size:initial;font-size-adjust:initial;font-stretch:initial;font-style:initial;font-synthesis:initial;font-variant-alternates:initial;font-variant-caps:initial;font-variant-east-asian:initial;-webkit-font-variant-ligatures:initial;font-variant-ligatures:initial;font-variant-numeric:initial;font-variant-position:initial;font-weight:initial;grid-auto-columns:initial;grid-auto-flow:initial;grid-auto-rows:initial;grid-column-end:initial;grid-column-gap:initial;grid-column-start:initial;grid-row-end:initial;grid-row-gap:initial;grid-row-start:initial;grid-template-areas:initial;grid-template-columns:initial;grid-template-rows:initial;height:initial;-webkit-hyphens:initial;-ms-hyphens:initial;hyphens:initial;image-orientation:initial;image-rendering:initial;ime-mode:initial;inline-size:initial;isolation:initial;-webkit-box-pack:initial;-ms-flex-pack:initial;justify-content:initial;justify-items:initial;justify-self:initial;left:initial;letter-spacing:initial;lighting-color:initial;line-height:initial;-webkit-margin-after:initial;margin-block-end:initial;-webkit-margin-before:initial;margin-block-start:initial;margin-bottom:initial;-webkit-margin-end:initial;margin-inline-end:initial;-webkit-margin-start:initial;margin-inline-start:initial;margin-left:initial;margin-right:initial;margin-top:initial;marker-end:initial;marker-mid:initial;marker-start:initial;-webkit-mask-clip:initial;mask-clip:initial;-webkit-mask-composite:initial;mask-composite:initial;-webkit-mask-image:initial;mask-image:initial;mask-mode:initial;-webkit-mask-origin:initial;mask-origin:initial;mask-position-x:initial;mask-position-y:initial;-webkit-mask-repeat:initial;mask-repeat:initial;-webkit-mask-size:initial;mask-size:initial;mask-type:initial;max-block-size:initial;max-height:initial;max-inline-size:initial;max-width:initial;min-block-size:initial;min-height:initial;min-inline-size:initial;min-width:initial;mix-blend-mode:initial;-o-object-fit:initial;object-fit:initial;-o-object-position:initial;object-position:initial;offset-block-end:initial;offset-block-start:initial;offset-inline-end:initial;offset-inline-start:initial;opacity:initial;-webkit-box-ordinal-group:initial;-ms-flex-order:initial;order:initial;outline-color:initial;outline-offset:initial;outline-style:initial;outline-width:initial;overflow-x:initial;overflow-y:initial;-webkit-padding-after:initial;padding-block-end:initial;-webkit-padding-before:initial;padding-block-start:initial;padding-bottom:initial;-webkit-padding-end:initial;padding-inline-end:initial;-webkit-padding-start:initial;padding-inline-start:initial;padding-left:initial;padding-right:initial;padding-top:initial;page-break-after:initial;page-break-before:initial;page-break-inside:initial;paint-order:initial;-webkit-perspective:initial;perspective:initial;-webkit-perspective-origin:initial;perspective-origin:initial;pointer-events:initial;position:initial;quotes:initial;resize:initial;right:initial;ruby-align:initial;ruby-position:initial;scroll-behavior:initial;-webkit-scroll-snap-coordinate:initial;-ms-scroll-snap-coordinate:initial;scroll-snap-coordinate:initial;-webkit-scroll-snap-destination:initial;-ms-scroll-snap-destination:initial;scroll-snap-destination:initial;-webkit-scroll-snap-points-x:initial;-ms-scroll-snap-points-x:initial;scroll-snap-points-x:initial;-webkit-scroll-snap-points-y:initial;-ms-scroll-snap-points-y:initial;scroll-snap-points-y:initial;scroll-snap-type-x:initial;scroll-snap-type-y:initial;shape-rendering:initial;stop-color:initial;stop-opacity:initial;stroke:initial;stroke-dasharray:initial;stroke-dashoffset:initial;stroke-linecap:initial;stroke-linejoin:initial;stroke-miterlimit:initial;stroke-opacity:initial;stroke-width:initial;table-layout:initial;text-align:initial;text-align-last:initial;text-anchor:initial;text-combine-upright:initial;-webkit-text-decoration-color:initial;text-decoration-color:initial;-webkit-text-decoration-line:initial;text-decoration-line:initial;-webkit-text-decoration-style:initial;text-decoration-style:initial;-webkit-text-emphasis-color:initial;text-emphasis-color:initial;-webkit-text-emphasis-position:initial;text-emphasis-position:initial;-webkit-text-emphasis-style:initial;text-emphasis-style:initial;text-indent:initial;text-justify:initial;text-orientation:initial;-o-text-overflow:initial;text-overflow:initial;text-rendering:initial;text-shadow:initial;text-transform:initial;top:initial;-ms-touch-action:initial;touch-action:initial;-webkit-transform:initial;-ms-transform:initial;transform:initial;transform-box:initial;-webkit-transform-origin:initial;-ms-transform-origin:initial;transform-origin:initial;-webkit-transform-style:initial;transform-style:initial;-webkit-transition-delay:initial;-o-transition-delay:initial;transition-delay:initial;-webkit-transition-duration:initial;-o-transition-duration:initial;transition-duration:initial;-webkit-transition-property:initial;-o-transition-property:initial;transition-property:initial;-webkit-transition-timing-function:initial;-o-transition-timing-function:initial;transition-timing-function:initial;vector-effect:initial;vertical-align:initial;visibility:initial;white-space:initial;width:initial;will-change:initial;word-break:initial;word-spacing:initial;overflow-wrap:initial;-webkit-writing-mode:initial;-ms-writing-mode:initial;writing-mode:initial;z-index:initial;border-color:initial;border-style:initial;list-style:initial initial initial}.yottie-widget-header-channel-caption,.yottie-widget-header-channel-title{-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-orient:vertical}.eapps-root,.yottie-widget{direction:ltr;unicode-bidi:normal;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased}.eapps-root,.eapps-root *,.yottie-widget,.yottie-widget *{-webkit-box-sizing:border-box;box-sizing:border-box}.yottie-widget{width:100%;position:relative;direction:ltr!important;min-height:100px}.yottie-widget .adsbygoogle{display:inline-block}.yottie-widget a,.yottie-widget a:hover{text-decoration:none}.yottie-widget-header-channel-title a:hover,.yottie-widget-video-classic:hover .yottie-widget-video-info-title,.yottie-widget-video-horizontal:hover .yottie-widget-video-info-title{text-decoration:underline}.yottie-widget-inner{border-radius:10px;overflow:hidden}.yottie-widget-contents{z-index:2}.yottie-spinner{position:absolute;width:50px;height:50px;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.yottie-spinner::before{display:block;width:100%;height:100%;border:3px solid rgba(255,255,255,.6);border-radius:50%;-webkit-animation:yottie-spinner 1.2s infinite;animation:yottie-spinner 1.2s infinite;content:''}@-webkit-keyframes yottie-spinner{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}75%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}}@keyframes yottie-spinner{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}75%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(1.2);transform:scale(1.2)}}.yottie-widget-header{display:none!important;z-index:1;position:relative;background:#fafafa}.yottie-widget-header.yottie-visible{display:block!important}.yottie-widget-header-banner{background-position:center center}.yottie-widget-header-overlay{position:absolute;z-index:1;top:0;right:0;left:0;bottom:0;background:rgba(255,255,255,.92)}.yottie-widget-header-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:16px 20px;position:relative;z-index:2}.yottie-mw-640 .yottie-widget-header-inner{text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.yottie-widget-header-info{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.yottie-widget-header-logo{display:block;-webkit-box-flex:1;-ms-flex:auto 0 0px;flex:auto 0 0;margin-right:16px;width:80px;height:80px;background:#fff;border-radius:50%;overflow:hidden}.yottie-mw-640 .yottie-widget-header-logo{margin:0 0 16px;width:40px;height:40px}.yottie-widget-header-logo img{display:block;width:80px;height:80px}.yottie-mw-640 .yottie-widget-header-logo img{width:40px;height:40px}.yottie-widget-header-channel-title{display:block!important;display:-webkit-box!important;overflow:hidden;line-height:28px;max-height:28px;font-size:20px;-webkit-line-clamp:1}.yottie-widget-header-channel-title+*{margin-top:6px}.yottie-widget-header-channel-properties{overflow:hidden;max-height:16px;font-size:12px;font-weight:400;line-height:16px;color:rgba(17,17,17,.7)}.yottie-widget-header-channel-properties-item{display:inline-block}.yottie-widget-header-channel-properties-item-divider{margin:0 4px}.yottie-widget-header-channel-properties-item:first-child .yottie-widget-header-channel-properties-item-divider{display:none}.yottie-widget-header-channel-properties+*{margin-top:6px}.yottie-widget-header-channel-caption{display:block!important;display:-webkit-box!important;overflow:hidden;text-align:left;line-height:21px;font-size:14px;font-weight:400;-webkit-line-clamp:2;max-height:42px}.yottie-widget-header-classic{text-align:left}.yottie-widget-header-classic .yottie-widget-header-banner{height:175px;background-size:100% auto}.yottie-widget-header-classic .yottie-widget-header-overlay{display:none}.yottie-widget-header-classic .yottie-widget-header-logo{margin-right:16px}.yottie-widget-header-classic .yottie-widget-header-subscribe{margin-left:16px}.yottie-mw-1056 .yottie-widget-header-classic .yottie-widget-header-banner{background-size:auto 100%}.yottie-mw-640 .yottie-widget-header-classic .yottie-widget-header-banner{position:absolute;top:0;left:0;right:0;bottom:0;height:auto}.yottie-mw-640 .yottie-widget-header-classic .yottie-widget-header-subscribe{margin:16px 0 0}.yottie-mw-640 .yottie-widget-header-classic .yottie-widget-header-overlay{display:block}.yottie-widget-header-minimal{color:#fff;text-align:left;overflow:hidden}.yottie-widget-header-minimal .yottie-widget-header-subscribe{margin:16px 0 10px 16px}.yottie-widget-header-minimal .yottie-widget-header-banner{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-filter:blur(4px);filter:blur(4px);-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03)}.yottie-widget-header-accent{max-height:268px;overflow:hidden}.yottie-widget-header-accent .yottie-widget-header-logo{margin:0 0 16px}.yottie-widget-header-accent .yottie-widget-header-inner{text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.yottie-widget-header-accent .yottie-widget-header-channel-caption{max-width:600px;text-align:center}.yottie-widget-video-info-title,li.yottie-widget-nav-list-item{max-width:100%;-o-text-overflow:ellipsis;text-overflow:ellipsis}.yottie-widget-header-accent .yottie-widget-header-banner{position:absolute;top:0;left:0;right:0;bottom:0;background-size:100% auto;-webkit-filter:blur(4px);filter:blur(4px);-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03)}.yottie-widget-header-accent .yottie-widget-header-subscribe{margin:16px 0 0}.yottie-widget-header-accent .yottie-widget-header-brandingless.yottie-widget-header-accent .yottie-widget-header{height:150px}.yottie-mw-1354 .yottie-widget-header-accent .yottie-widget-header-banner{background-size:auto 100%}.yottie-widget-nav{position:relative;overflow:hidden;z-index:1;background:#fafafa}.yottie-widget-nav.yottie-disabled{display:none}.yottie-widget-nav-inner{height:46px}.yottie-widget-nav-list{position:relative;z-index:2;-webkit-transition:all .1s ease;-o-transition:all .1s ease;transition:all .1s ease}ul.yottie-widget-nav-list{overflow-x:auto;overflow-y:hidden;margin:0;padding:0 16px;white-space:nowrap;-webkit-overflow-scrolling:touch}li.yottie-widget-nav-list-item{display:inline-block;position:relative;overflow:hidden}li.yottie-widget-nav-list-item::after{display:block;position:absolute;left:50%;right:50%;bottom:0;height:2px;opacity:.6;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:all .3s cubic-bezier(.4,0,.2,1);-o-transition:all .3s cubic-bezier(.4,0,.2,1);transition:all .3s cubic-bezier(.4,0,.2,1);content:''}li.yottie-widget-nav-list-item.yottie-active::after,li.yottie-widget-nav-list-item:focus::after{right:0;left:0;opacity:1}li.yottie-widget-nav-list-item a{display:block;padding:14px 16px;outline:0!important;line-height:18px;font-weight:700;font-size:14px;-webkit-transition:color .3s ease;-o-transition:color .3s ease;transition:color .3s ease}.yottie-widget-nav-control,.yottie-widget-nav-control span{-webkit-transition:all .3s ease;-o-transition:all .3s ease;position:absolute}.yottie-widget-nav-control{z-index:3;top:0;bottom:0;width:35px;cursor:pointer;transition:all .3s ease}.yottie-widget-nav-control::before{content:'';display:block;position:absolute;top:0;bottom:0;width:60px;pointer-events:none}.yottie-widget-nav-control span{display:block;width:9px;height:15px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);transition:all .3s ease}.yottie-widget-nav-control span::after,.yottie-widget-nav-control span::before{content:'';display:block;position:absolute;width:10px;height:2px;top:7px;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.yottie-widget-nav-control-left,.yottie-widget-nav-control-left::before{left:0}.yottie-widget-nav-control-left span{left:17px}.yottie-widget-nav-control-left span::after,.yottie-widget-nav-control-left span::before{left:0}.yottie-widget-nav-control-left span::before{-webkit-transform-origin:0 110%;-ms-transform-origin:0 110%;transform-origin:0 110%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.yottie-widget-nav-control-left span::after{-webkit-transform-origin:0 -10%;-ms-transform-origin:0 -10%;transform-origin:0 -10%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.yottie-widget-nav-control-right,.yottie-widget-nav-control-right::before{right:0}.yottie-widget-nav-control-right span{right:17px}.yottie-widget-nav-control-right span::after,.yottie-widget-nav-control-right span::before{right:0}.yottie-widget-nav-control-right span::before{-webkit-transform-origin:100% 110%;-ms-transform-origin:100% 110%;transform-origin:100% 110%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.yottie-widget-nav-control-right span::after{-webkit-transform-origin:100% -10%;-ms-transform-origin:100% -10%;transform-origin:100% -10%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.yottie-widget-nav-control:active.yottie-widget-nav-control-left span{-webkit-transform:translateY(-50%) scaleY(.8) translateX(-30%);-ms-transform:translateY(-50%) scaleY(.8) translateX(-30%);transform:translateY(-50%) scaleY(.8) translateX(-30%)}.yottie-widget-nav-control:active.yottie-widget-nav-control-right span{-webkit-transform:translateY(-50%) scaleY(.8) translateX(30%);-ms-transform:translateY(-50%) scaleY(.8) translateX(30%);transform:translateY(-50%) scaleY(.8) translateX(30%)}.yottie-widget-nav-control-disabled{visibility:hidden;opacity:0}.yottie-widget-feed-ads{text-align:center}.yottie-widget-feed-ads .adsbygoogle{margin:10px 0}.yottie-widget-feed-section-pagination{position:relative!important;padding:20px!important}span.yottie-widget-feed-section-pagination-bullet{text-align:center;min-width:18px;font-size:11px;padding:5px 7px;margin:0 3px;width:auto;height:auto;border-radius:2px;color:#aaa;line-height:1;background:rgba(175,175,175,.1);opacity:1;-webkit-transition:color .3s ease;-o-transition:color .3s ease;transition:color .3s ease}span.yottie-widget-feed-section-pagination-bullet:hover{background:#eee}span.yottie-widget-feed-section-pagination-bullet-more{position:relative;padding:5px 9px}span.yottie-widget-feed-section-pagination-bullet-more::after,span.yottie-widget-feed-section-pagination-bullet-more::before{position:absolute;top:11px;right:40%;width:5px;height:1px;content:'';background:#aaa;-webkit-transition:background .3s;-o-transition:background .3s;transition:background .3s}span.yottie-widget-feed-section-pagination-bullet-more::before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;-ms-transform-origin:100% 100%;transform-origin:100% 100%}span.yottie-widget-feed-section-pagination-bullet-more::after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.yottie-widget-feed-section-pagination .swiper-pagination-bullet-active{color:#111;background:#eee}.yottie-widget-feed-section-search{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;padding:20px!important}.yottie-widget-feed-section-search-selector{height:33px;line-height:33px;margin-left:20px!important}.yottie-widget-feed-section-search-selector-label{color:#aaa;cursor:pointer}.yottie-widget-feed-section-search-selector-label-input{position:relative;top:2px;margin-right:5px;outline:0;cursor:pointer}.yottie-widget-feed-section-search-form{position:relative;width:33%;margin-bottom:0}@media only screen and (max-width:640px){span.yottie-widget-feed-section-pagination-bullet{min-width:14px}.yottie-widget-feed-section-search-form{width:50%}}@media only screen and (max-width:500px){.yottie-widget-feed-section-search-form{width:100%}}.yottie-widget-feed-section-search-form-input{border-radius:2px;border:1px solid rgba(175,175,175,.3);outline:0;padding:6px 11px;width:100%;color:#aaa;line-height:1;font-size:13px;-webkit-box-sizing:border-box;box-sizing:border-box;background:0 0}.yottie-widget-feed-section-search-form-input::-ms-clear{display:none}.yottie-widget-feed-section-search-form-button{position:absolute;right:0;top:0;padding:9px 10px 8px;width:12px;height:12px;display:inline-block;cursor:pointer;-webkit-box-sizing:content-box;box-sizing:content-box}.yottie-widget-feed-section-search-form-button-icon{display:block;height:12px;width:12px;fill:rgba(175,175,175,.3);-webkit-transition:fill .5s;-o-transition:fill .5s;transition:fill .5s}.yottie-widget-feed-section-search-form-button:hover .yottie-widget-feed-section-search-form-button-icon{fill:red}div.yottie-widget-feed-section{display:none;position:relative;min-height:150px}div.yottie-widget-feed-section.yottie-active{display:block}div.yottie-widget-feed-section-novideos{position:absolute;top:50%;right:0;left:0;text-align:center;color:#aaa;height:32px;line-height:32px;margin-top:-16px;font-size:14px}div.yottie-widget-feed-section-scrollbar{position:absolute;z-index:5;right:10px;bottom:10px;left:10px;height:3px;border-radius:0}div.yottie-widget-feed-section-scrollbar .swiper-scrollbar-drag{border-radius:0}div.yottie-widget-feed-section-arrow{position:absolute;z-index:3;top:50%;height:40px;width:40px;margin-top:-20px;border-radius:50%;-webkit-box-shadow:0 0 6px rgba(0,0,0,.2);box-shadow:0 0 6px rgba(0,0,0,.2);-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;cursor:pointer}div.yottie-widget-feed-section-arrow:active{-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}div.yottie-widget-feed-section-arrow::before{display:block;position:absolute;visibility:hidden;top:8px;left:8px;width:3px;height:3px;border-radius:50%;opacity:0;-webkit-transform-origin:12px 12px;-ms-transform-origin:12px 12px;transform-origin:12px 12px;-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease;-webkit-animation:yottie-arrow-orbit-loader .8s linear 0s infinite;animation:yottie-arrow-orbit-loader .8s linear 0s infinite;content:''}div.yottie-widget-feed-section-arrow.swiper-button-disabled{opacity:0;-webkit-transform:scale(.2);-ms-transform:scale(.2);transform:scale(.2);-webkit-transition:all .1s ease;-o-transition:all .1s ease;transition:all .1s ease}div.yottie-widget-feed-section-arrow.swiper-button-disabled.yottie-widget-feed-section-arrow-has-next{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}div.yottie-widget-feed-section-arrow.swiper-button-disabled.yottie-widget-feed-section-arrow-has-next::before{visibility:visible;opacity:1}div.yottie-widget-feed-section-arrow span{display:block;position:relative;width:7px;height:15px;margin:13px 16px}div.yottie-widget-feed-section-arrow span::after,div.yottie-widget-feed-section-arrow span::before{position:absolute;border-radius:2px;top:6px;width:8px;height:2px;-webkit-transition:background .2s ease,width .2s ease;-o-transition:background .2s ease,width .2s ease;transition:background .2s ease,width .2s ease;content:''}div.yottie-widget-feed-section-arrow-prev span::before{left:0;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 100%;-ms-transform-origin:0 100%;transform-origin:0 100%}div.yottie-widget-feed-section-arrow-prev span::after{left:0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}div.yottie-widget-feed-section-arrow-next span::before{right:0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:100% 100%;-ms-transform-origin:100% 100%;transform-origin:100% 100%}div.yottie-widget-feed-section-arrow-next span::after{right:0;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}div.yottie-widget-feed-section-arrow-prev{left:2px}div.yottie-widget-feed-section-arrow-next{right:2px}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-scrollbar{top:10px;left:auto;width:3px;height:auto}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-prev{top:2px;left:50%;margin-top:0;margin-left:-21px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-prev:active{-webkit-transform:rotate(90deg) scale(.9);-ms-transform:rotate(90deg) scale(.9);transform:rotate(90deg) scale(.9)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-prev.swiper-button-disabled{opacity:0;-webkit-transform:rotate(90deg) scale(.2);-ms-transform:rotate(90deg) scale(.2);transform:rotate(90deg) scale(.2)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-next{top:auto;right:auto;bottom:2px;left:50%;margin-top:0;margin-left:-21px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-next:active{-webkit-transform:rotate(90deg) scale(.9);-ms-transform:rotate(90deg) scale(.9);transform:rotate(90deg) scale(.9)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-next.swiper-button-disabled{opacity:0;-webkit-transform:rotate(90deg) scale(.2);-ms-transform:rotate(90deg) scale(.2);transform:rotate(90deg) scale(.2)}div.yottie-widget-feed-section-vertical .yottie-widget-feed-section-arrow-next.swiper-button-disabled.yottie-widget-feed-section-arrow-has-next{opacity:1;-webkit-transform:rotate(90deg) scale(1);-ms-transform:rotate(90deg) scale(1);transform:rotate(90deg) scale(1)}div.yottie-widget-feed-section-loader{position:absolute;visibility:hidden;z-index:4;top:0;right:0;bottom:0;left:0;opacity:0;background:rgba(0,0,0,.6);-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease}div.yottie-widget-feed-section-loader.yottie-visible{visibility:visible;opacity:1}.yottie-widget-feed .swiper-wrapper{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.yottie-widget-feed .swiper-container,.yottie-widget-feed .swiper-slide{-webkit-box-sizing:border-box;box-sizing:border-box}.yottie-widget-feed .swiper-container.swiper-slide-visible,.yottie-widget-feed .swiper-slide.swiper-slide-visible{z-index:4}@-webkit-keyframes yottie-arrow-orbit-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes yottie-arrow-orbit-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.yottie-widget-video{position:relative;overflow:hidden;float:left;-webkit-backface-visibility:hidden;backface-visibility:hidden}.yottie-widget-video-player{display:block;position:absolute;z-index:4}.yottie-widget-video-preview{display:block!important;position:relative;z-index:1;min-height:1px}.yottie-widget-video-preview-thumbnail{display:block;overflow:hidden}.yottie-widget-video-preview-thumbnail img{position:relative;top:50%;width:100%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}span.yottie-widget-video-preview-marker{display:block;position:absolute;padding:5px 7px 6px;border-radius:2px;background:#fff;line-height:1;font-size:12px;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}span.yottie-widget-video-preview-marker-hd{top:4px;left:4px}span.yottie-widget-video-preview-marker-duration{right:4px;bottom:4px}.yottie-mw-130 span.yottie-widget-video-preview-marker{display:none}.yottie-widget-video-preview-play{display:block;position:absolute;z-index:3;top:50%;left:50%;width:68px;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease}.yottie-widget-video:hover .yottie-widget-video-preview-play{border-color:transparent transparent transparent rgba(255,255,255,.8)}.yottie-mw-180 .yottie-widget-video-preview-play{border-width:15px 0 15px 20px}.yottie-widget-video-info{position:relative;z-index:3;-webkit-box-sizing:border-box;box-sizing:border-box}div.yottie-widget-video-info{padding:16px 0 14px}.yottie-widget-video-info-title{display:inline-block;overflow:hidden;white-space:nowrap;line-height:18px;font-weight:700;font-size:14px}div.yottie-widget-video-info-passed-time{margin-top:4px;line-height:16px;font-size:12px}div.yottie-widget-video-info-caption{display:-webkit-box!important;overflow:hidden;margin-top:8px;word-wrap:break-word;-o-text-overflow:ellipsis;text-overflow:ellipsis;line-height:1.4;font-size:13px;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:36.4px}.yottie-widget-video-info-properties{height:14px;overflow:hidden}div.yottie-widget-video-info-properties{margin-top:8px}div.yottie-widget-video-info-properties-inner{font-size:12px}.yottie-widget-video-info-properties-item{display:inline-block}.yottie-widget-video-info-properties-item-divider{margin:0 2px}.yottie-widget-video-info-properties-item:first-child .yottie-widget-video-info-properties-item-divider{display:none}div.yottie-widget-video-overlay{position:absolute;display:none;visibility:hidden;z-index:2;top:0;right:0;bottom:0;left:0;opacity:0;-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease;background:rgba(255,255,255,.95)}.yottie-widget-video-cinema{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-perspective:900px;perspective:900px}.yottie-widget-video-cinema *{-webkit-backface-visibility:hidden;backface-visibility:hidden}.yottie-widget-video-cinema div.yottie-widget-video-overlay{display:block}.yottie-widget-video-cinema .yottie-widget-video-preview{-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.yottie-widget-video-cinema .yottie-widget-video-info{visibility:hidden;position:absolute;top:0;right:0;bottom:0;left:0;padding:12px;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;cursor:pointer;opacity:0}.yottie-widget-video-cinema:hover .yottie-widget-video-info{visibility:visible;opacity:1}.yottie-widget-video-cinema:hover .yottie-widget-video-overlay{visibility:visible;opacity:1;-webkit-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s;-webkit-transition-delay:0s;-o-transition-delay:0s;transition-delay:0s}.yottie-widget-video-cinema:hover .yottie-widget-video-preview{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05)}.yottie-widget-video-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;cursor:pointer}.yottie-widget-video-horizontal .yottie-widget-video-preview{width:50%;max-width:256px}.yottie-widget-video-horizontal .yottie-widget-video-info{-webkit-box-flex:1;-ms-flex:1;flex:1;width:50%;padding:0 12px 14px;height:100%}.yottie-widget-video-horizontal.yottie-mw-370{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.yottie-widget-video-horizontal.yottie-mw-370 .yottie-widget-video-preview{width:auto;max-width:none}.yottie-widget-video-horizontal.yottie-mw-370 .yottie-widget-video-info{width:auto;height:auto;padding:16px 0 14px}.yottie-widget-video-classic{cursor:pointer}.yottie-widget-video-classic .yottie-widget-video-info{padding:16px 0 14px}.yottie-error{display:none!important;position:absolute;top:0;right:0;bottom:0;left:0}.yottie-error.yottie-visible{display:block!important}.yottie-error-overlay{position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.6)}div.yottie-error-content{position:absolute;top:50%;left:50%;padding:22px;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);background:#fff;font-size:12px;color:#232323}div.yottie-error-content-title{font-weight:700;line-height:1.6}.yottie.yottie-popup{position:fixed;visibility:hidden;z-index:9999;top:0;right:0;bottom:0;left:0}.yottie-popup a{color:#1a89de;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease}.yottie-popup a:hover{color:#2fa5ff}.yottie-popup.yottie-popup-show{visibility:visible}.yottie-popup .yottie-popup-overlay{position:absolute;visibility:hidden;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.7);-webkit-transition:.25s ease;-o-transition:.25s ease;transition:.25s ease}.yottie-popup-show.yottie-popup .yottie-popup-overlay{visibility:visible;opacity:1}.yottie-popup .yottie-popup-wrapper{position:absolute;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;max-height:100%;top:0;right:0;bottom:0;left:0;padding:50px 0}@media only screen and (max-width:854px){.yottie-popup .yottie-popup-wrapper{padding-bottom:0}}.yottie-popup .yottie-popup-loader{position:absolute;padding-bottom:56.25%;width:100%;height:0;background:#000}.yottie-popup .yottie-popup-loader .yottie-spinner{visibility:hidden;-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease}.yottie-popup-loading.yottie-popup .yottie-popup-loader .yottie-spinner{visibility:visible}.yottie-popup .yottie-popup-inner{position:relative;visibility:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;left:50%;width:854px;background:#fff;opacity:0;-webkit-transform:translateX(-50%) scale(.9);-ms-transform:translateX(-50%) scale(.9);transform:translateX(-50%) scale(.9);-webkit-transform-origin:center 0;-ms-transform-origin:center 0;transform-origin:center 0;-webkit-transition:all .25s ease;-o-transition:all .25s ease;transition:all .25s ease}@media only screen and (max-width:854px){.yottie-popup .yottie-popup-inner{width:100%}}.yottie-popup-show.yottie-popup .yottie-popup-inner{visibility:visible;opacity:1;-webkit-transform:translateX(-50%) scale(1);-ms-transform:translateX(-50%) scale(1);transform:translateX(-50%) scale(1);-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease}.yottie-popup .yottie-popup-control-close{position:absolute;z-index:12;width:36px;height:36px;top:-12px;right:-36px;cursor:pointer;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.yottie-popup .yottie-popup-control-close::after,.yottie-popup .yottie-popup-control-close::before{display:block;position:absolute;width:20px;height:2px;top:50%;left:50%;margin:-1px 0 0 -10px;border-radius:10px;background:#a0a0a0;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;content:''}.yottie-popup .yottie-popup-control-close::before{-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg)}.yottie-popup .yottie-popup-control-close::after{-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg)}.yottie-popup .yottie-popup-control-close:hover::after,.yottie-popup .yottie-popup-control-close:hover::before{background:#dcdcdc}.yottie-popup .yottie-popup-control-close:active{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}@media only screen and (max-width:936px){.yottie-popup .yottie-popup-control-close{top:-43px;right:0}}@media only screen and (max-width:768px){.yottie-popup .yottie-popup-inner{-webkit-box-shadow:0 -3px 35px rgba(0,0,0,.4);box-shadow:0 -3px 35px rgba(0,0,0,.4)}.yottie-popup .yottie-popup-control-close{top:-50px;right:0;left:0;width:auto;height:50px;background:rgba(255,255,255,0)}.yottie-popup .yottie-popup-control-close::after,.yottie-popup .yottie-popup-control-close::before{background:#dcdcdc}}.yottie-popup .yottie-popup-control-arrow{position:absolute;z-index:10;top:20px;bottom:20px;width:100px;cursor:pointer}.yottie-popup .yottie-popup-control-arrow-next span,.yottie-popup .yottie-popup-control-arrow-previous span{display:block;position:absolute;width:43px;height:63px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.yottie-popup .yottie-popup-control-arrow-next span::after,.yottie-popup .yottie-popup-control-arrow-next span::before,.yottie-popup .yottie-popup-control-arrow-previous span::after,.yottie-popup .yottie-popup-control-arrow-previous span::before{display:block;position:absolute;width:43px;height:2px;top:20px;border-radius:10px 0 0 10px;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;content:'';background:#656565}.yottie-popup .yottie-popup-control-arrow-previous{left:0}.yottie-popup .yottie-popup-control-arrow-previous span{left:24px}.yottie-popup .yottie-popup-control-arrow-previous span::before{-webkit-transform-origin:0 110%;-ms-transform-origin:0 110%;transform-origin:0 110%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.yottie-popup .yottie-popup-control-arrow-previous span::after{-webkit-transform-origin:0 -10%;-ms-transform-origin:0 -10%;transform-origin:0 -10%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.yottie-popup .yottie-popup-control-arrow-next{right:0}.yottie-popup .yottie-popup-control-arrow-next span{right:24px}.yottie-popup .yottie-popup-control-arrow-next span::before{-webkit-transform-origin:100% 110%;-ms-transform-origin:100% 110%;transform-origin:100% 110%;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.yottie-popup .yottie-popup-control-arrow-next span::after{-webkit-transform-origin:100% -10%;-ms-transform-origin:100% -10%;transform-origin:100% -10%;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.yottie-popup .yottie-popup-video{-webkit-box-sizing:border-box;box-sizing:border-box}.yottie-popup .yottie-popup-video-player{position:relative;padding-bottom:56.25%;height:0}.yottie-popup .yottie-popup-video-player iframe{display:block;position:absolute;top:0;left:0;width:100%;height:100%}.yottie-popup .yottie-popup-video-info,.yottie-popup .yottie-popup-video-rating{display:-webkit-box;display:-ms-flexbox;-webkit-box-orient:horizontal;-webkit-box-direction:normal}.yottie-popup .yottie-popup-video-content{padding:20px}.yottie-popup .yottie-popup-video-content-ads{text-align:center}.yottie-popup .yottie-popup-video-content-ads .adsbygoogle{margin:10px 0}@media only screen and (max-width:768px){.yottie-popup .yottie-popup-video-content{padding:15px 20px}}.yottie-popup .yottie-popup-video-title{margin:10px 0 16px;line-height:28px;font-size:20px;color:#111}.yottie-popup .yottie-popup-video-info{display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.yottie-popup .yottie-popup-video-views{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:14px;line-height:22px;color:rgba(17,17,17,.7)}.yottie-popup .yottie-popup-video-rating-dislikes span,.yottie-popup .yottie-popup-video-rating-likes span,.yottie-popup .yottie-popup-video-share{line-height:20px;font-size:12px;color:rgba(17,17,17,.5)}@media only screen and (max-width:640px){.yottie-popup .yottie-popup-video-views{-webkit-box-flex:1;-ms-flex:1 100%;flex:1 100%}}.yottie-popup .yottie-popup-video-rating{position:relative;display:flex;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:120px}.yottie-popup .yottie-popup-video-rating-dislikes,.yottie-popup .yottie-popup-video-rating-likes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 0}.yottie-popup .yottie-popup-video-rating-dislikes-icon,.yottie-popup .yottie-popup-video-rating-likes-icon{margin-right:8px;width:12px;height:11px;fill:rgba(17,17,17,.5)}.yottie-popup .yottie-popup-video-rating-ratio{position:absolute;bottom:0;width:100%;height:2px;background:#cfcfcf}.yottie-popup .yottie-popup-video-rating-ratio span{display:block;height:100%;background:#2fa5ff}@media only screen and (max-width:640px){.yottie-popup .yottie-popup-video-rating-ratio::before{content:'';display:block;position:absolute;right:0;left:0;height:1px;background:rgba(0,0,0,.1)}}.yottie-popup .yottie-popup-video-share{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;margin-left:28px;font-weight:700;text-transform:uppercase;fill:rgba(17,17,17,.5);cursor:pointer}.yottie-popup .yottie-popup-video-share:last-child{margin-left:auto}.yottie-popup .yottie-popup-video-share::hover{color:rgba(17,17,17,.9);fill:rgba(17,17,17,.9)}.yottie-popup .yottie-popup-video-share-icon{margin-right:8px;width:14px;height:12px}.yottie-popup .yottie-popup-video-share-popover{opacity:0;visibility:hidden}.yottie-popup .yottie-popup-video-share-popover-content{position:absolute;bottom:100%;right:0;padding-bottom:11px;width:192px;z-index:6}.yottie-popup .yottie-popup-video-share-popover-content-inner{position:relative;background:#2f353a;border-radius:4px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.2);box-shadow:0 4px 16px rgba(0,0,0,.2)}.yottie-popup .yottie-popup-video-share-popover-content-inner::before{content:'';position:absolute;display:block;bottom:-5px;right:20px;width:10px;height:10px;-webkit-transform:rotateZ(-45deg);-ms-transform:rotate(-45deg);transform:rotateZ(-45deg);background:#2f353a}.yottie-popup .yottie-popup-video-share-popover-content-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#17191a;font-size:13px;font-weight:400;line-height:1;border-top:1px solid rgba(255,255,255,.2);padding:12px 0;cursor:pointer;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;position:relative;text-align:left}.yottie-popup .yottie-popup-video-share-popover-content-item:first-child{border:none}.yottie-popup .yottie-popup-video-share-popover-content-item:hover{background:#42474c;border-radius:4px}.yottie-popup .yottie-popup-video-share-popover-content-item-icon{height:100%;width:12px;float:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-left:12px}.yottie-popup .yottie-popup-video-share-popover-content-item-icon img{width:100%;height:100%}.yottie-popup .yottie-popup-video-share-popover-content-item-title{display:inline-block;text-transform:none;margin-left:12px;font-size:13px;color:#fff}.yottie-popup .yottie-popup-video-share-popover-open{opacity:1;visibility:visible}.yottie-popup .yottie-popup-video-share-popover-left .yottie-popup-video-share-popover-content-inner:before{right:40px;left:auto;margin-left:auto}.yottie-popup .yottie-popup-video-share-popover-bottom .yottie-popup-video-share-popover-content{top:100%;padding-top:11px}.yottie-popup .yottie-popup-video-share-popover-bottom .yottie-popup-video-share-popover-content-inner:before{top:-5px}.yottie-popup .yottie-popup-video-meta{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-top:-1px;padding:20px 0}.yottie-popup .yottie-popup-video-meta::after,.yottie-popup .yottie-popup-video-meta::before{content:'';position:absolute;display:block;left:0;right:0;height:1px;background:#111;opacity:.1}.yottie-popup .yottie-popup-video-meta::before{top:0}.yottie-popup .yottie-popup-video-meta::after{bottom:0}@media only screen and (max-width:640px){.yottie-popup .yottie-popup-video-meta{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.yottie-popup .yottie-popup-video-meta-channel-logo{margin-bottom:12px}}.yottie-popup .yottie-popup-video-meta-channel-logo{display:block;-webkit-box-flex:1;-ms-flex:auto 0 0px;flex:auto 0 0;margin-right:16px;width:44px;height:44px;background:#fff;border-radius:50%;overflow:hidden}.yottie-popup .yottie-popup-video-meta-channel-logo img{width:44px;height:44px}.yottie-popup .yottie-popup-video-meta-channel-name{display:inline-block;margin-bottom:4px;line-height:18px;text-decoration:none;font-weight:700;font-size:14px;color:#111}.yottie-popup .yottie-popup-video-meta-channel-name:hover{text-decoration:underline}.yottie-popup .yottie-popup-video-meta-date{margin-bottom:12px;line-height:16px;font-size:12px;color:rgba(17,17,17,.7)}.yottie-popup .yottie-popup-video-meta-text{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.yottie-popup .yottie-popup-video-meta-description{overflow:hidden;max-height:40px;line-height:20px;font-size:14px;color:#111}.yottie-popup .yottie-popup-video-meta-description-more{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;cursor:pointer;padding:8px 0;margin:6px 0 -14px;text-transform:uppercase;line-height:16px;font-weight:700;font-size:12px;-webkit-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;color:rgba(17,17,17,.5)}.yottie-popup .yottie-popup-video-meta-description-more:hover{color:rgba(17,17,17,.7)}.yottie-popup .yottie-popup-video-meta-description-show-full{overflow:auto;max-height:none}@media only screen and (max-width:640px){.yottie-popup .yottie-popup-video-meta-subscribe-container{margin-top:32px}}.yottie-popup .yottie-popup-video-comments{padding:8px 0}.yottie-popup .yottie-popup-video-comments-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:12px 0}.yottie-popup .yottie-popup-video-comments-item:last-child{margin-bottom:0}.yottie-popup .yottie-popup-video-comments-item-profile-image{display:block;position:relative;-webkit-box-flex:1;-ms-flex:auto 0 0px;flex:auto 0 0;margin-right:12px;width:44px;height:44px;background:#fff;border-radius:50%;overflow:hidden;-webkit-box-shadow:inset 0 0 0 1px rgba(0,0,0,.1);box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}.yottie-popup .yottie-popup-video-comments-item-profile-image img{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50%;width:100%;padding:1px;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden}.yottie-popup .yottie-popup-video-comments-item-profile-image:hover img{opacity:.9}.yottie-popup .yottie-popup-video-comments-item-name{display:inline-block;margin:0 8px 2px 0;line-height:16px;font-size:13px;font-weight:700}.yottie-popup .yottie-popup-video-comments-item-name a{text-decoration:none;color:#111}.yottie-popup .yottie-popup-video-comments-item-name a:hover{text-decoration:underline;color:#2fa5ff}.yottie-popup .yottie-popup-video-comments-item-passed-time{display:inline-block;font-size:12px;color:rgba(17,17,17,.7)}.yottie-popup .yottie-popup-video-comments-item-likes{margin-top:2px;font-size:12px;line-height:16px;color:rgba(17,17,17,.5)}.yottie-popup .yottie-popup-video-comments-item-likes-icon{margin-right:4px;width:12px;height:11px;fill:rgba(17,17,17,.5)}.yottie-popup .yottie-popup-video-comments-item-text{line-height:21px;font-size:14px;color:#222;margin-top:1px}"
            }, {}],
            3: [function(e, t, i) {
                t.exports = function(t, i) {
                    ! function t(i, n, o) {
                        function a(s, l) {
                            if (!n[s]) {
                                if (!i[s]) {
                                    var p = "function" == typeof e && e;
                                    if (!l && p) return p(s, !0);
                                    if (r) return r(s, !0);
                                    throw new Error("Cannot find module '" + s + "'")
                                }
                                var d = n[s] = {
                                    exports: {}
                                };
                                i[s][0].call(d.exports, function(e) {
                                    return a(i[s][1][e] || e)
                                }, d, d.exports, t, i, n, o)
                            }
                            return n[s].exports
                        }
                        for (var r = "function" == typeof e && e, s = 0; s < o.length; s++) a(o[s]);
                        return a
                    }({
                        1: [function(e, t, i) {
                            (function(e) {
                                var i;
                                if (e.crypto && crypto.getRandomValues) {
                                    var n = new Uint8Array(16);
                                    i = function() {
                                        return crypto.getRandomValues(n), n
                                    }
                                }
                                if (!i) {
                                    var o = new Array(16);
                                    i = function() {
                                        for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
                                        return o
                                    }
                                }
                                t.exports = i
                            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                        }, {}],
                        2: [function(e, t, i) {
                            for (var n = e("./rng"), o = [], a = {}, r = 0; r < 256; r++) o[r] = (r + 256).toString(16).substr(1), a[o[r]] = r;

                            function s(e, t) {
                                var i = t || 0,
                                    n = o;
                                return n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + "-" + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]] + n[e[i++]]
                            }
                            var l = n(),
                                p = [1 | l[0], l[1], l[2], l[3], l[4], l[5]],
                                d = 16383 & (l[6] << 8 | l[7]),
                                c = 0,
                                u = 0;

                            function m(e, t, i) {
                                var o = t && i || 0;
                                "string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
                                var a = (e = e || {}).random || (e.rng || n)();
                                if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                                    for (var r = 0; r < 16; r++) t[o + r] = a[r];
                                return t || s(a)
                            }
                            var h = m;
                            h.v1 = function(e, t, i) {
                                var n = t && i || 0,
                                    o = t || [],
                                    a = void 0 !== (e = e || {}).clockseq ? e.clockseq : d,
                                    r = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                                    l = void 0 !== e.nsecs ? e.nsecs : u + 1,
                                    m = r - c + (l - u) / 1e4;
                                if (m < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (m < 0 || c < r) && void 0 === e.nsecs && (l = 0), 1e4 <= l) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                                c = r, d = a;
                                var h = (1e4 * (268435455 & (r += 122192928e5)) + (u = l)) % 4294967296;
                                o[n++] = h >>> 24 & 255, o[n++] = h >>> 16 & 255, o[n++] = h >>> 8 & 255, o[n++] = 255 & h;
                                var g = r / 4294967296 * 1e4 & 268435455;
                                o[n++] = g >>> 8 & 255, o[n++] = 255 & g, o[n++] = g >>> 24 & 15 | 16, o[n++] = g >>> 16 & 255, o[n++] = a >>> 8 | 128, o[n++] = 255 & a;
                                for (var f = e.node || p, v = 0; v < 6; v++) o[n + v] = f[v];
                                return t || s(o)
                            }, h.v4 = m, h.parse = function(e, t, i) {
                                var n = t && i || 0,
                                    o = 0;
                                for (t = t || [], e.toLowerCase().replace(/[0-9a-f]{2}/g, function(e) {
                                        o < 16 && (t[n + o++] = a[e])
                                    }); o < 16;) t[n + o++] = 0;
                                return t
                            }, h.unparse = s, t.exports = h
                        }, {
                            "./rng": 1
                        }],
                        3: [function(e, t, i) {
                            var n = e("./jquery"),
                                o = function() {
                                    this.components = {}
                                };
                            n.extend(o, {
                                id: "Application"
                            }), o.prototype = function() {}, n.extend(o.prototype, {
                                constructor: o,
                                components: null,
                                component: function(e) {
                                    if (this.hasComponent(e)) return this.components[e]
                                },
                                registerComponent: function(e, t) {
                                    if (!this.hasComponent(t)) return e.register(this), t = t || e.constructor.getId(), this.components[t] = e
                                },
                                hasComponent: function(e) {
                                    return !!this.components[e]
                                }
                            }), t.exports = o
                        }, {
                            "./jquery": 7
                        }],
                        4: [function(e, t, i) {
                            var n = e("./jquery"),
                                o = e("./utils"),
                                a = function() {};
                            n.extend(a, {
                                id: "Cl"
                            }), a.prototype = function() {}, n.extend(a.prototype, {
                                constructor: a,
                                getParent: function(e) {
                                    return this.constructor.inheritance[e]
                                },
                                set: function(e, t) {
                                    return o.setProperty(this, e, t)
                                },
                                get: function(e, t) {
                                    return o.getProperty(this, e, t)
                                }
                            }), t.exports = a
                        }, {
                            "./jquery": 7,
                            "./utils": 15
                        }],
                        5: [function(e, t, i) {
                            var n = e("./jquery"),
                                o = function() {};
                            n.extend(o, {
                                id: "Component",
                                getId: function() {
                                    return this.id.substr(0, 1).toLowerCase() + this.id.substr(1)
                                }
                            }), o.prototype = function() {}, n.extend(o.prototype, {
                                constructor: o,
                                inject: function() {
                                    var e = this;
                                    e.constructor.dependencies && n.each(e.constructor.dependencies, function(t, i) {
                                        e[i] = e.app.component(i)
                                    })
                                },
                                register: function(e) {
                                    this.app = e, this.inject()
                                },
                                trigger: function() {
                                    this.$e.trigger.apply(this.$e, arguments)
                                },
                                on: function() {
                                    this.$e.on.apply(this.$e, arguments)
                                }
                            }), t.exports = o
                        }, {
                            "./jquery": 7
                        }],
                        6: [function(e, t, i) {
                            t.exports = function(e, t, i, n) {
                                e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
                                var o, a, r, s = isFinite(+e) ? +e : 0,
                                    l = isFinite(+t) ? Math.abs(t) : 0,
                                    p = void 0 === n ? "," : n,
                                    d = void 0 === i ? "." : i,
                                    c = "";
                                return 3 < (c = (l ? (o = s, a = l, r = Math.pow(10, a), "" + (Math.round(o * r) / r).toFixed(a)) : "" + Math.round(s)).split("."))[0].length && (c[0] = c[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, p)), (c[1] || "").length < l && (c[1] = c[1] || "", c[1] += new Array(l - c[1].length + 1).join("0")), c.join(d)
                            }
                        }, {}],
                        7: [function(e, t, i) {
                            t.exports = window.jQuery
                        }, {}],
                        8: [function(e, t, i) {
                            var n = e("./../../jquery"),
                                o = e("./../../olivie");
                            t.exports = o.component("Colorizer", function(e, t, i, n) {
                                var o = this;
                                o.schemes = e, o.schemeId = t, o.tplId = n, o.overwrites = i || {}, o.setBaseScheme(t)
                            }, {
                                dependencies: ["renderer"]
                            }, {
                                schemes: null,
                                schemeId: null,
                                baseScheme: null,
                                scheme: null,
                                overwrites: null,
                                $element: null,
                                setBaseScheme: function(e) {
                                    this.baseScheme = this.schemes[this.schemeId] || {}
                                },
                                applyScheme: function() {
                                    var e = this;
                                    e.$element || (e.$element = n('<style type="text/css"></style>'), e.app.$element.before(e.$element)), e.overwrites = o.utils.filterNulls(e.overwrites), e.scheme = n.extend(!0, {}, e.baseScheme, e.overwrites);
                                    var t = {
                                        scheme: e.scheme,
                                        id: e.app.getId()
                                    };
                                    e.$element.html(e.renderer.render(e.tplId, t))
                                },
                                run: function() {
                                    this.applyScheme(), this.$element.insertBefore(this.app.$element)
                                }
                            })
                        }, {
                            "./../../jquery": 7,
                            "./../../olivie": 14
                        }],
                        9: [function(e, t, i) {
                            var n = e("./../../jquery"),
                                o = e("./../../olivie");
                            t.exports = o.component("I18n", function(e, t) {
                                var i = this;
                                i.lang = t, i.dictionary = e, i.langDictionary = i.dictionary[i.lang] || i.dictionary[i.constructor.DEFAULT_LANG]
                            }, {
                                DEFAULT_LANG: "en"
                            }, {
                                lang: null,
                                dictionary: null,
                                langDictionary: null,
                                lexemes: [{
                                    id: "interpolation",
                                    regex: /\{\{([a-zA-Z]+)\}\}/,
                                    func: function(e, t) {
                                        return t[e[1]] || "[[Unknown variable " + e[1] + "]]"
                                    }
                                }, {
                                    id: "modified_interpolation",
                                    regex: /\{\{([a-zA-Z]+)\s*\|\s*([a-zA-Z]+)\(([^)]*)\)\}\}/,
                                    func: function(e, t, i) {
                                        var n = e[1],
                                            o = e[2],
                                            a = e[3];
                                        if (!i.modifiers[o]) return '[[Unknown modifier "' + o + '"]]';
                                        var r = a ? a.split(/\s*,\s*/) : [];
                                        return i.modifiers[o].apply(t[n], r)
                                    }
                                }],
                                modifiers: {},
                                hasTranslation: function(e) {
                                    return !!this.langDictionary[e]
                                },
                                getTranslation: function(e) {
                                    return this.langDictionary[e]
                                },
                                parse: function(e, t) {
                                    var i = this;
                                    return n.each(i.lexemes, function(n, o) {
                                        e = e.replace(o.regex, function() {
                                            return o.func.call(void 0, arguments, t, i)
                                        })
                                    }), e
                                },
                                t: function(e, t) {
                                    return t = t || {}, this.parse(this.getTranslation(e) || e, t)
                                }
                            })
                        }, {
                            "./../../jquery": 7,
                            "./../../olivie": 14
                        }],
                        10: [function(e, t, i) {
                            var n = e("./../../jquery"),
                                o = e("./../../olivie");
                            t.exports = o.component("Renderer", function(e) {
                                this.views = e
                            }, {}, {
                                views: null,
                                getTemplate: function(e) {
                                    var t = o.utils.getProperty(this.views, e);
                                    if ("function" === n.type(t)) return t
                                },
                                render: function(e, t) {
                                    return this.getTemplate(e)(t)
                                }
                            })
                        }, {
                            "./../../jquery": 7,
                            "./../../olivie": 14
                        }],
                        11: [function(e, t, i) {
                            var n = e("./../../jquery"),
                                o = e("./../../olivie");
                            t.exports = o.class("Cache", [], function(e, t) {
                                this.client = t, e = e.substr(0, 1).toUpperCase() + e.substr(1), this.cacheBaseId = "OlivieClientCache" + e
                            }, {}, {
                                indexedDB: window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
                                cacheStoreId: null,
                                db: null,
                                isSupported: function() {
                                    return !!this.indexedDB
                                },
                                isReady: function() {
                                    return !!this.db
                                },
                                connect: function(e) {
                                    var t, i = this;
                                    if (e = e || n.Deferred(), i.isSupported()) try {
                                        (t = i.indexedDB.open(i.cacheBaseId, 1)).onsuccess = function() {
                                            i.db = t.result, e.resolve()
                                        }, t.onerror = function() {
                                            e.reject()
                                        }, t.onupgradeneeded = function(t) {
                                            t.currentTarget.result.createObjectStore("Requests", {
                                                keyPath: "url"
                                            }).createIndex("url", "url", {
                                                unique: !0
                                            }), i.connect(e)
                                        }
                                    } catch (t) {
                                        e.reject()
                                    } else e.reject();
                                    return e.promise()
                                },
                                save: function(e, t, i) {
                                    if (this.isReady()) {
                                        var n = this.db.transaction("Requests", "readwrite"),
                                            o = {
                                                url: e,
                                                result: t,
                                                apiKey: i || null,
                                                date: Math.floor(Date.now() / 1e3)
                                            };
                                        n.objectStore("Requests").put(o)
                                    }
                                },
                                getSaved: function(e, t, i, o) {
                                    var a = this;
                                    i = i || n.Deferred();
                                    try {
                                        var r, s, l = o.data.key;
                                        a.isReady() && t ? (r = a.db.transaction(["Requests"], "readonly"), (s = r.objectStore("Requests").get(e)).onsuccess = function() {
                                            var n = s.result;
                                            n && n.date + t > Math.floor(Date.now() / 1e3) && n.apiKey === l ? i.resolve(n.result) : (a.delete(e), i.reject())
                                        }, s.onerror = function() {
                                            i.reject()
                                        }) : i.reject()
                                    } catch (o) {
                                        i.reject()
                                    }
                                    return i.promise()
                                },
                                delete: function(e, t) {
                                    var i;
                                    return t = t || n.Deferred(), this.isReady() ? ((i = this.db.transaction(["Requests"], "readwrite").objectStore("Requests").delete(e)).onsuccess = function() {
                                        t.resolve()
                                    }, i.onerror = function() {
                                        t.reject()
                                    }) : t.reject(), t.promise()
                                }
                            })
                        }, {
                            "./../../jquery": 7,
                            "./../../olivie": 14
                        }],
                        12: [function(e, t, i) {
                            var n = e("./../../jquery"),
                                o = e("./../../olivie"),
                                a = e("./cache"),
                                r = e("./ga");
                            t.exports = o.component("Client", function(e, t, i, o) {
                                var s = this;
                                s.requestModifiers = [], s.responseModifiers = [], t && n.isPlainObject(t) && s.attachRequestModifier(function(e) {
                                    e.data = n.extend(!1, {}, e.data, t)
                                }), "https://www.googleapis.com/youtube/v3" !== e ? s.attachRequestModifier(function(t) {
                                    t.url = e + "?q=" + encodeURIComponent(t.url)
                                }) : s.attachRequestModifier(function(t) {
                                    t.url = e + t.url
                                }), s.cache = new a(i, s), s.ga = new r("UA-33920597-29"), s.defaultCacheTime = parseInt(o, 10)
                            }, {
                                parseQuery: function(e) {
                                    var t = e.match(/\?([^#]+)/),
                                        i = {};
                                    return t && t[1] && t[1].split("&").map(function(e) {
                                        var t = e.split("=");
                                        i[t[0]] = t[1] || ""
                                    }), i
                                }
                            }, {
                                cache: null,
                                requestModifiers: null,
                                responseModifiers: null,
                                defaultCacheTime: null,
                                run: function() {
                                    var e = n.Deferred(),
                                        t = this.cache.connect();
                                    return t.done(function() {
                                        e.resolve()
                                    }), t.fail(function() {
                                        e.resolve(-1)
                                    }), e.promise()
                                },
                                attachRequestModifier: function(e) {
                                    return "function" === n.type(e) && !!this.requestModifiers.push(e)
                                },
                                attachResponseModifier: function(e) {
                                    return "function" === n.type(e) && !!this.responseModifiers.push(e)
                                },
                                send: function(e, t, i, o) {
                                    var a = this;
                                    "undefined" === n.type(o) && (o = a.defaultCacheTime), t = t || {}, i = i || {};
                                    var r = n.Deferred();
                                    t = n.extend(!1, {}, a.constructor.parseQuery(e), t), e = e.replace(/(\?\|#).*/, "") + "?" + n.param(t), t.callback && (t.callback = null), i = n.extend(!1, {}, i, {
                                        url: e,
                                        dataType: "jsonp",
                                        type: i.type || "get"
                                    }), n.each(a.requestModifiers, function(e, t) {
                                        t.call(a, i)
                                    });
                                    var s = JSON.stringify(i),
                                        l = function(e, t) {
                                            (e.error || e.meta && e.meta.error_message) && console.error(e.error || e.meta && e.meta.error_message), o && "success" === t && a.cache.save(s, e, i.data.key), n.each(a.responseModifiers, function(t, i) {
                                                "pending" === r.state() && i.call(a, e, r)
                                            }), "pending" === r.state() && r.resolve(e)
                                        },
                                        p = function(e) {
                                            a.ga.collect(e.status + " " + e.statusText)
                                        };
                                    return a.cache.getSaved(s, o, !1, i).done(l).fail(function() {
                                        n.ajax(i).done(l).fail(p)
                                    }), r.promise()
                                },
                                get: function(e, t, i) {
                                    return (i = i || {}).type = "get", this.send(e, t, i)
                                }
                            })
                        }, {
                            "./../../jquery": 7,
                            "./../../olivie": 14,
                            "./cache": 11,
                            "./ga": 13
                        }],
                        13: [function(e, t, i) {
                            var n = e("./../../jquery"),
                                o = e("./../../olivie"),
                                a = e("../../../../../bower_components/uuid");
                            t.exports = o.class("Ga", [], function(e) {
                                this.tid = e, this.cid = this.getCid()
                            }, {
                                BASE_URL: "https://www.google-analytics.com/collect"
                            }, {
                                tid: null,
                                cid: null,
                                getCid: function() {
                                    var e;
                                    try {
                                        return (e = localStorage.getItem("yt_cid")) || (e = a(), localStorage.setItem("yt_cid", e)), e
                                    } catch (e) {
                                        return a()
                                    }
                                },
                                collect: function(e, t) {
                                    if (t = t || "ApiRequestError", e) {
                                        var i = (new Date).getTime(),
                                            o = {
                                                tid: this.tid,
                                                cid: this.cid,
                                                v: 1,
                                                ds: "web",
                                                an: "Yottie",
                                                t: "event",
                                                ec: t,
                                                ea: e,
                                                z: i
                                            },
                                            a = n.param(o),
                                            r = this.constructor.BASE_URL + "?" + a,
                                            s = new Image;
                                        s.src = r, s.style.position = "absolute", s.style.zIndex = "-1", s.style.left = "-9999px", s.onload = function() {
                                            document.body.removeChild(s)
                                        }, document.body.appendChild(s)
                                    }
                                }
                            })
                        }, {
                            "../../../../../bower_components/uuid": 2,
                            "./../../jquery": 7,
                            "./../../olivie": 14
                        }],
                        14: [function(e, t, i) {
                            var n = e("./jquery"),
                                o = e("./utils"),
                                a = e("./cl"),
                                r = e("./application"),
                                s = e("./component"),
                                l = {
                                    $: n,
                                    utils: o,
                                    plugin: function(e, t, i) {
                                        return n.fn[e] ? null : (n.fn[e] = function(e) {
                                            return this.each(function(i, n) {
                                                t.call(void 0, n, e)
                                            })
                                        }, i && (n[e] = i), n.fn[e])
                                    },
                                    application: function(e, t, i, n) {
                                        return this.class(e, [r], t, i, n)
                                    },
                                    component: function(e, t, i, n) {
                                        return n = n || {}, this.class(e, [s], t, i, n)
                                    },
                                    class: function(e, t, i, o, r) {
                                        o = o || {}, r = r || {}, (t = t || []).unshift(a), o.id = e, o.inheritance = {}, n.each(t, function(e, t) {
                                            t.id && (o.inheritance[t.id] = t)
                                        });
                                        var s = function() {
                                            i.apply(this, arguments)
                                        };
                                        return s.prototype = function() {}, r.constructor = s, n.extend.apply(self.$, [s].concat(t.concat([o]))), n.extend.apply(self.$, [s.prototype].concat(t.map(function(e) {
                                            return e.prototype
                                        })).concat(r)), s
                                    }
                                };
                            t.exports = l
                        }, {
                            "./application": 3,
                            "./cl": 4,
                            "./component": 5,
                            "./jquery": 7,
                            "./utils": 15
                        }],
                        15: [function(e, t, i) {
                            var n = e("./jquery"),
                                o = e("./external/number_format");
                            t.exports = {
                                unifyMultipleOption: function(e) {
                                    var t = n.type(e);
                                    return "array" === t ? e : "string" === t ? e.split(/[\s,;\|]+/).filter(function(e) {
                                        return !!e
                                    }) : null
                                },
                                applyModifier: function(e, t) {
                                    return "array" !== n.type(t) && (t = [t]), n.each(t, function(t, i) {
                                        "function" === n.type(i) && (e = i.call(i, e))
                                    }), e
                                },
                                getProperty: function(e, t, i) {
                                    if (e && t && "string" === n.type(t)) {
                                        var o = e;
                                        return n.each(t.split("."), function(e, t) {
                                            if (!(o = o[t])) return !1
                                        }), o && i && (o = this.applyModifier(o, i)), o
                                    }
                                },
                                setProperty: function(e, t, i) {
                                    if (e && t && "string" === n.type(t)) {
                                        var o = e,
                                            a = t.split(".");
                                        return n.each(a, function(e, t) {
                                            e == a.length - 1 ? o[t] = i : "undefined" === n.type(o[t]) && (o[t] = {}), o = o[t]
                                        }), e
                                    }
                                },
                                formatBigNumber: function(e, t) {
                                    if (e = parseFloat(e), t = t || 1, "number" !== n.type(e)) return NaN;
                                    var i, o, a = "";
                                    return 1e9 <= e ? (i = e / 1e9, a = "B") : 1e6 <= e ? (i = e / 1e6, a = "M") : 1e3 <= e ? (i = e / 1e3, a = "K") : i = e, ((i = i.toFixed(t)) - (o = parseInt(i, 10)) == 0 || 10 <= i) && (i = o), i + a
                                },
                                parseInt: function(e) {
                                    return parseInt(e, 10)
                                },
                                formatNumberWithCommas: function(e) {
                                    return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                                },
                                formatPassedTime: function(e) {
                                    e instanceof Date || (e = Math.round(new Date(Date.parse(e)).getTime() / 1e3));
                                    var t, i, n = Math.round((new Date).getTime() / 1e3),
                                        o = Math.abs(n - e);
                                    return i = 604800 <= o ? (t = o / 604800, "w") : 86400 <= o ? (t = o / 86400, "d") : 3600 <= o ? (t = o / 3600, "h") : 60 <= o ? (t = o / 60, "m") : (t = o, "s"), (t = Math.round(t)) + i
                                },
                                filterNulls: function(e) {
                                    var t = this,
                                        i = {};
                                    return n.each(e, function(e, o) {
                                        "object" === n.type(o) ? i[e] = t.filterNulls(o) : null !== o && (i[e] = o)
                                    }), i
                                },
                                nl2br: function(e) {
                                    return e.replace(/\n/g, "<br>")
                                },
                                formatAnchors: function(e) {
                                    return e.replace(/(https?|ftp):\/\/[^\s\t<]+/g, function(e) {
                                        return '<a href="' + e + '" target="_blank" rel="nofollow">' + e + "</a>"
                                    })
                                },
                                numberFormat: function() {
                                    return o.apply(o, arguments)
                                },
                                shuffle: function(e) {
                                    var t, i;
                                    for (t = e.length - 1; 0 <= t; --t) e[i = Math.floor(Math.random() * t)] = [e[t], e[t] = e[i]][0]
                                },
                                inViewPort: function(e, t) {
                                    var i = e.getBoundingClientRect(),
                                        n = i.width / 100 * (100 - t),
                                        o = i.height / 100 * (100 - t);
                                    return i.top >= 0 - o && i.left >= 0 - n && i.bottom <= window.innerHeight + o && i.right <= window.innerWidth + n
                                },
                                invertColor: function(e) {
                                    var t = e.replace(/(rgba\()|(rgb\()|(\))/g, "").split(",");
                                    return 186 < .299 * parseInt(t[0], 10) + .587 * parseInt(t[1], 10) + .114 * parseInt(t[2], 10) ? "#000" : "#fff"
                                },
                                css: function(e, t) {
                                    for (var i in e)
                                        if (e.hasOwnProperty(i)) {
                                            var n = e[i];
                                            if (n instanceof HTMLElement)
                                                for (var o in t)
                                                    if (t.hasOwnProperty(o)) {
                                                        var a = t[o];
                                                        n.style[o] = a
                                                    }
                                        }
                                }
                            }
                        }, {
                            "./external/number_format": 6,
                            "./jquery": 7
                        }],
                        16: [function(e, t, i) {
                            var n = function(e, t) {
                                this.initialized = !1, this.app = e, this.widgetId = t, this.analytics = window.eapps && window.eapps.analytics ? window.eapps.analytics : null, this.app && this.widgetId && this.analytics && (this.initialized = !0)
                            };
                            n.prototype.store = function(e, t, i) {
                                if (t = t || 1, i = i || null, this.initialized) {
                                    var n = {
                                        app: this.app,
                                        widgetId: this.widgetId,
                                        event: e,
                                        count: t,
                                        lifetime: i
                                    };
                                    this.analytics.store(n)
                                }
                            }, n.prototype.available = function() {
                                return !!this.initialized
                            }, t.exports = n
                        }, {}],
                        17: [function(e, t, i) {
                            t.exports = function(e, t) {
                                var i = this;
                                i.customStyle = document.createElement("style"), i.customStyle.innerHTML = t, e.app.$element[0].appendChild(i.customStyle);
                                var n = [];
                                i.customStyle && i.customStyle.sheet && i.customStyle.sheet.cssRules && (jQuery.each(i.customStyle.sheet.cssRules, function(t, i) {
                                    "object" === jQuery.type(i) && n.push("div#yottie_" + e.app.id + " " + i.cssText)
                                }), n = n.join("\n"), i.customStyle.innerHTML = n)
                            }
                        }, {}],
                        18: [function(e, t, i) {
                            t.exports = function(e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                        selector: "",
                                        text: "Widget is deactivated<br>Visit Elfsight Apps",
                                        link: "https://apps.elfsight.com/",
                                        tpl: null
                                    },
                                    i = this;
                                i.view = t.tpl ? t.tpl : jQuery('<a href="' + t.link + '" class="" target="_blank">' + t.text + "</a>"), i.view[0].setAttribute("style", ["align-content:center!important", "align-items:center!important", "animation:none!important", "background:rgba(251, 251, 251, 0.9)!important", "border:none!important", "border-radius:2px!important", "bottom:0!important", "box-sizing:border-box!important", "color:#333333!important", "display:flex!important", "float:none!important", "font-family:Roboto,Arial,Sans-serif!important", "font-size:13px!important", "height:auto!important", "left:0!important", "line-height:16px!important", "margin:0!important", "opacity:1!important", "padding:0!important", "position:absolute!important", "right:0!important", "text-align:center!important", "text-decoration:none!important", "text-indent:0!important", "top:0!important", "transform:none!important", "justify-content:center!important", "visibility:visible!important", "width:auto!important", "z-index:99998!important", "zoom:1!important"].join(";")), ["blur", "change", "click", "focus", "focusin", "focusout", "hover", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "resize", "scroll", "select", "submit"].forEach(function(e) {
                                    i.view[0].addEventListener(e, function(e) {
                                        "eapps-remove-link" !== e.target.className && e.stopPropagation()
                                    })
                                }), ["blur", "change", "click", "focus", "focusin", "focusout", "hover", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "resize", "scroll", "select", "submit"].forEach(function(e) {
                                    i.view[0].addEventListener(e, function(e) {
                                        e.stopPropagation()
                                    })
                                }), i.view.appendTo(e.app.$element.find(t.selector))
                            }
                        }, {}],
                        19: [function(e, t, i) {
                            t.exports = {
                                apiUrl: "https://www.googleapis.com/youtube/v3",
                                key: [],
                                debug: !1,
                                channel: null,
                                sourceGroups: null,
                                order: null,
                                cacheTime: 21600,
                                width: "auto",
                                lang: "en",
                                header: {
                                    visible: !0,
                                    layout: "classic",
                                    channelName: null,
                                    channelDescription: null,
                                    channelLogo: null,
                                    channelBanner: null,
                                    info: "logo banner channelName videosCounter subscribersCounter viewsCounter subscribeButton"
                                },
                                content: {
                                    columns: 3,
                                    rows: 1,
                                    gutter: 20,
                                    arrowsControl: !0,
                                    scrollControl: !1,
                                    dragControl: !0,
                                    paginationControl: !0,
                                    search: !1,
                                    direction: "horizontal",
                                    freeMode: !1,
                                    scrollbar: !1,
                                    transitionEffect: "slide",
                                    transitionSpeed: 600,
                                    auto: 0,
                                    autoPauseOnHover: !1,
                                    responsive: null
                                },
                                video: {
                                    layout: "classic",
                                    info: "playIcon duration title date description viewsCounter likesCounter commentsCounter",
                                    playMode: "popup"
                                },
                                popup: {
                                    info: "title channelLogo channelName subscribeButton viewsCounter likesRatio likesCounter dislikesCounter share date description descriptionMoreButton comments",
                                    autoplay: !0
                                },
                                color: {
                                    scheme: "default",
                                    header: {
                                        bg: null,
                                        bannerOverlay: null,
                                        channelName: null,
                                        channelNameHover: null,
                                        channelDescription: null,
                                        anchor: null,
                                        anchorHover: null,
                                        counters: null
                                    },
                                    groups: {
                                        bg: null,
                                        link: null,
                                        linkHover: null,
                                        linkActive: null,
                                        highlight: null,
                                        highlightHover: null,
                                        highlightActive: null
                                    },
                                    content: {
                                        bg: null,
                                        arrows: null,
                                        arrowsHover: null,
                                        arrowsBg: null,
                                        arrowsBgHover: null,
                                        scrollbarBg: null,
                                        scrollbarSliderBg: null
                                    },
                                    video: {
                                        bg: null,
                                        overlay: null,
                                        playIcon: null,
                                        playIconHover: null,
                                        duration: null,
                                        durationBg: null,
                                        title: null,
                                        titleHover: null,
                                        date: null,
                                        description: null,
                                        anchor: null,
                                        anchorHover: null,
                                        counters: null
                                    },
                                    popup: {
                                        bg: null,
                                        overlay: null,
                                        title: null,
                                        channelName: null,
                                        channelNameHover: null,
                                        viewsCounter: null,
                                        likesRatio: null,
                                        dislikesRatio: null,
                                        likesCounter: null,
                                        dislikesCounter: null,
                                        share: null,
                                        date: null,
                                        description: null,
                                        anchor: null,
                                        anchorHover: null,
                                        descriptionMoreButton: null,
                                        descriptionMoreButtonHover: null,
                                        commentsUsername: null,
                                        commentsUsernameHover: null,
                                        commentsPassedTime: null,
                                        commentsText: null,
                                        commentsLikes: null,
                                        controls: null,
                                        controlsHover: null,
                                        controlsMobile: null,
                                        controlsMobileBg: null
                                    }
                                },
                                ads: {
                                    client: null,
                                    slots: {
                                        content: null,
                                        popup: null
                                    }
                                },
                                noCookies: !1
                            }
                        }, {}],
                        20: [function(e, t, i) {
                            t.exports = {
                                en: {},
                                de: {
                                    w: "Wo.",
                                    d: "Tag",
                                    h: "Std.",
                                    min: "min",
                                    s: "Sek",
                                    "Show more": "Mehr anzeigen",
                                    "Show less": "Weniger anzeigen",
                                    Videos: "Videos",
                                    Subscribers: "Abonnenten",
                                    Views: "Aufrufe",
                                    Uploads: "Uploads",
                                    "Published at": "Veröffentlicht am",
                                    "All comments": "Alle Kommentare",
                                    Comments: "Kommentare",
                                    Likes: "Likes",
                                    Dislikes: "Dislikes",
                                    Search: "Suche",
                                    "There are no videos by this request": "Leider wurden keine Videos gefunden",
                                    Share: "Teilen",
                                    "Share on Facebook": "Auf Facebook teilen",
                                    "Share on Twitter": "Auf Twitter teilen",
                                    "Share on Google+": "Auf Google+ teilen"
                                },
                                hr: {
                                    w: "tj",
                                    d: "d",
                                    h: "s",
                                    min: "m",
                                    s: "s",
                                    "Show more": "Prikaži više",
                                    "Show less": "Prikaži manje",
                                    Videos: "Video",
                                    Subscribers: "Pretplatnici",
                                    Views: "Pregleda",
                                    Uploads: "Upload",
                                    "Published at": "Objavljeno",
                                    "All comments": "Svi komentari",
                                    Comments: "Komentari",
                                    Likes: "Lajkova",
                                    Dislikes: "Dislajkova",
                                    Search: "Traži",
                                    "There are no videos by this request": "",
                                    Share: "Podjeli",
                                    "Share on Facebook": "Podjeli na Facebooku",
                                    "Share on Twitter": "Podjeli na Twitteru",
                                    "Share on Google+": "Podjeli na Google+"
                                },
                                es: {
                                    w: "sem",
                                    d: "día",
                                    h: "h",
                                    min: "min",
                                    s: "s",
                                    "Show more": "Mostrar más",
                                    "Show less": "Mostrar menos",
                                    Videos: "Vídeos",
                                    Subscribers: "Suscriptores",
                                    Views: "Visualizaciones",
                                    Uploads: "Vídeos subidos",
                                    "Published at": "Publicado el",
                                    "All comments": "Todos los comentarios",
                                    Comments: "Comentarios",
                                    Likes: "Similaĵoj",
                                    Dislikes: "Antipatioj",
                                    Search: "Buscar",
                                    "There are no videos by this request": "",
                                    Share: "Compartir",
                                    "Share on Facebook": "Compartir en Facebook",
                                    "Share on Twitter": "Compartir en Twitter",
                                    "Share on Google+": "Compartir en Google+"
                                },
                                fr: {
                                    w: "sem",
                                    d: "j",
                                    h: "h",
                                    min: "min",
                                    s: "s",
                                    "Show more": "Plus",
                                    "Show less": "Moins",
                                    Videos: "Vidéos",
                                    Subscribers: "Abonnés",
                                    Views: "Vues",
                                    Uploads: "Vidéos ajoutées",
                                    "Published at": "Ajoutée le",
                                    "All comments": "Tous les commentaires",
                                    Comments: "Commentaires",
                                    Likes: "Goûts",
                                    Dislikes: "Dégoûts",
                                    Search: "Chercher",
                                    "There are no videos by this request": "",
                                    Share: "Partager",
                                    "Share on Facebook": "Partager sur Facebook",
                                    "Share on Twitter": "Partager sur Twitter",
                                    "Share on Google+": "Partager sur Google+"
                                },
                                it: {
                                    w: "sett.",
                                    d: "g",
                                    h: "h",
                                    min: "m",
                                    s: "s",
                                    "Show more": "Mostra altro",
                                    "Show less": "Mostra meno",
                                    Videos: "Video",
                                    Subscribers: "Iscritti",
                                    Views: "Visualizzazioni",
                                    Uploads: "Video caricati",
                                    "Published at": "Pubblicato il",
                                    "All comments": "Tutti i commenti",
                                    Comments: "Commenti",
                                    Likes: "Piace",
                                    Dislikes: "Non piace",
                                    Search: "Ricerca",
                                    "There are no videos by this request": "",
                                    Share: "Condividi",
                                    "Share on Facebook": "Condividi su Facebook",
                                    "Share on Twitter": "Condividi su Twitter",
                                    "Share on Google+": "Condividi su Google+"
                                },
                                nl: {
                                    w: "w.",
                                    d: "d.",
                                    h: "u.",
                                    min: "m.",
                                    s: "s.",
                                    "Show more": "Meer weergeven",
                                    "Show less": "Minder weergeven",
                                    Videos: "Video`s",
                                    Subscribers: "Abonnees",
                                    Views: "Weergaven",
                                    Uploads: "Uploads",
                                    "Published at": "Gepubliceerd op",
                                    "All comments": "Alle reacties",
                                    Comments: "Reacties",
                                    Likes: "Sympathieën",
                                    Dislikes: "Antipathieën",
                                    Search: "Zoeken",
                                    "There are no videos by this request": "",
                                    Share: "Delen",
                                    "Share on Facebook": "Delen op Facebook",
                                    "Share on Twitter": "Delen op Twitter",
                                    "Share on Google+": "Delen op Google+"
                                },
                                no: {
                                    w: "u",
                                    d: "d",
                                    h: "t",
                                    min: "m",
                                    s: "s",
                                    "Show more": "Vis mer",
                                    "Show less": "Vis mindre",
                                    Videos: "Videoer",
                                    Subscribers: "Abonnenter",
                                    Views: "Avspillinger",
                                    Uploads: "Opplastinger",
                                    "Published at": "Publisert",
                                    "All comments": "Alle kommentarer",
                                    Comments: "Kommentarer",
                                    Likes: "Liker",
                                    Dislikes: "Misliker",
                                    Search: "Søke",
                                    "There are no videos by this request": "",
                                    Share: "Delen",
                                    "Share on Facebook": "Del på Facebook",
                                    "Share on Twitter": "Del på Twitter",
                                    "Share on Google+": "Del på Google+"
                                },
                                pl: {
                                    w: "w",
                                    d: "dzień",
                                    h: "godz.",
                                    min: "min",
                                    s: "s",
                                    "Show more": "Pokaż więcej",
                                    "Show less": "Pokaż mniej",
                                    Videos: "Wideo",
                                    Subscribers: "Subskrypcji",
                                    Views: "Wyświetlenia",
                                    Uploads: "Przesłane filmy",
                                    "Published at": "Opublikowany",
                                    "All comments": "Wszystkie komentarze",
                                    Comments: "Komentarzy",
                                    Likes: "Upodobania",
                                    Dislikes: "Antypatie",
                                    Search: "Szukaj",
                                    "There are no videos by this request": "",
                                    Share: "Dzielić",
                                    "Share on Facebook": "Udostępnij na Facebooku",
                                    "Share on Twitter": "Udostępnij na Twitterze",
                                    "Share on Google+": "Udostępnij w Google+"
                                },
                                "pt-BR": {
                                    w: "sem",
                                    d: "d",
                                    h: "h",
                                    min: "min",
                                    s: "s",
                                    "Show more": "Mostrar mais",
                                    "Show less": "Mostrar menos",
                                    Videos: "Vídeos",
                                    Subscribers: "Inscritos",
                                    Views: "Visualizações",
                                    Uploads: "Uploads",
                                    "Published at": "Publicado em",
                                    "All comments": "Todos os comentarios",
                                    Comments: "Comentários",
                                    Likes: "Gostos",
                                    Dislikes: "Desgostos",
                                    Search: "Procurar",
                                    "There are no videos by this request": "",
                                    Share: "Compartilhar",
                                    "Share on Facebook": "Compartilhar no Facebook",
                                    "Share on Twitter": "Compartilhar no Twitter",
                                    "Share on Google+": "Compartilhar no Google+"
                                },
                                sv: {
                                    w: "v",
                                    d: "d",
                                    h: "h",
                                    min: "min",
                                    s: "sek",
                                    "Show more": "Visa mer",
                                    "Show less": "Visa mindre",
                                    Videos: "Videoklipp",
                                    Subscribers: "Prenumeranter",
                                    Views: "Visningar",
                                    Uploads: "Uppladdningar",
                                    "Published at": "Publicerades den",
                                    "All comments": "Alla kommentarer",
                                    Comments: "Kommentarer",
                                    Likes: "Gillar",
                                    Dislikes: "Ogillar",
                                    Search: "Sök",
                                    "There are no videos by this request": "",
                                    Share: "Dela med sig",
                                    "Share on Facebook": "Dela på Facebook",
                                    "Share on Twitter": "Dela på Twitter",
                                    "Share on Google+": "Dela på Google+"
                                },
                                tr: {
                                    w: "h",
                                    d: "g",
                                    h: "s",
                                    min: "d",
                                    s: "sn",
                                    "Show more": "Daha fazla göster",
                                    "Show less": "Daha az göster",
                                    Videos: "Videolar",
                                    Subscribers: "Abone",
                                    Views: "Görüntüleme",
                                    Uploads: "Yüklenenler",
                                    "Published at": "Tarihinde yayınlandı",
                                    "All comments": "Tüm yorumlar",
                                    Comments: "Yorumlar",
                                    Likes: "Seviyor",
                                    Dislikes: "Sevmediği",
                                    Search: "Arama",
                                    "There are no videos by this request": "",
                                    Share: "Pay",
                                    "Share on Facebook": "Facebook'ta Paylaş",
                                    "Share on Twitter": "Twitter'da Paylaş",
                                    "Share on Google+": "Google + 'da Paylaş"
                                },
                                ru: {
                                    w: "нед.",
                                    d: "дн.",
                                    h: "ч",
                                    min: "мин",
                                    s: "с",
                                    "Show more": "Ещё",
                                    "Show less": "Свернуть",
                                    Videos: "Видео",
                                    Subscribers: "Подписчиков",
                                    Views: "Просмотров",
                                    Uploads: "Загрузки",
                                    "Published at": "Опубликовано",
                                    "All comments": "Все комментарии",
                                    Comments: "Комментариев",
                                    Likes: "Нравится",
                                    Dislikes: "Не понравилось",
                                    Search: "Поиск",
                                    "There are no videos by this request": "",
                                    Share: "Поделиться",
                                    "Share on Facebook": "Поделиться на Facebook",
                                    "Share on Twitter": "Поделиться на Twitter",
                                    "Share on Google+": "Поделиться на Google+"
                                },
                                hi: {
                                    w: "सप्ताह",
                                    d: "दिन",
                                    h: "घंटे",
                                    min: "मिनट",
                                    s: "सेकंड",
                                    "Show more": "और दिखाएं",
                                    "Show less": "कम दिखाएं",
                                    Videos: "वीडियो",
                                    Subscribers: "सदस्य",
                                    Views: "बार देखा गया",
                                    Uploads: "अपलोड",
                                    "Published at": "को प्रकाशित",
                                    "All comments": "सभी टिप्पणियां",
                                    Comments: "टिप्पणियाँ",
                                    Likes: "पसंद",
                                    Dislikes: "नापसंद",
                                    Search: "खोज",
                                    "There are no videos by this request": "",
                                    Share: "शेयर",
                                    "Share on Facebook": "फेसबुक पर सांझा करें",
                                    "Share on Twitter": "ट्विटर पर साझा करें",
                                    "Share on Google+": "Google+ पर साझा करें"
                                },
                                "zh-HK": {
                                    w: "周",
                                    d: "天",
                                    h: "小时",
                                    min: "分钟",
                                    s: "秒",
                                    "Show more": "展开",
                                    "Show less": "收起",
                                    Videos: "视频",
                                    Subscribers: "位订阅者",
                                    Views: "次观看",
                                    Uploads: "上传的视频",
                                    "Published at": "发表于",
                                    "All comments": "所有评论",
                                    Comments: "评论",
                                    Likes: "喜欢",
                                    Dislikes: "不喜欢",
                                    Search: "搜索",
                                    "There are no videos by this request": "",
                                    Share: "分享",
                                    "Share on Facebook": "分享到Facebook",
                                    "Share on Twitter": "分享到Twitter",
                                    "Share on Google+": "分享到Google+"
                                },
                                "zh-TW": {
                                    w: "週",
                                    d: "天",
                                    h: "小時",
                                    min: "分鐘",
                                    s: "秒",
                                    "Show more": "展開",
                                    "Show less": "收起",
                                    Videos: "影片",
                                    Subscribers: "位訂閱者",
                                    Views: "次觀看",
                                    Uploads: "上傳的影片",
                                    "Published at": "發表於",
                                    "All comments": "所有評論",
                                    Comments: "評論",
                                    Likes: "喜歡",
                                    Dislikes: "不喜歡",
                                    Search: "搜索",
                                    "There are no videos by this request": "此請求沒有影片",
                                    Share: "分享",
                                    "Share on Facebook": "分享到 Facebook",
                                    "Share on Twitter": "分享到 Twitter",
                                    "Share on Google+": "分享到 Google+"
                                },
                                ja: {
                                    w: "週間前",
                                    d: "日前",
                                    h: "時間前",
                                    min: "分前",
                                    s: "秒前",
                                    "Show more": "もっと見る",
                                    "Show less": "一部を表示",
                                    Videos: "動画",
                                    Subscribers: "人",
                                    Views: "回",
                                    Uploads: "アップロード済み",
                                    "Published at": "に公開",
                                    "All comments": "すべてのコメント",
                                    Comments: "コメント",
                                    Likes: "好き",
                                    Dislikes: "嫌い",
                                    Search: "サーチ",
                                    "There are no videos by this request": "",
                                    Share: "シェア",
                                    "Share on Facebook": "Facebookでシェア",
                                    "Share on Twitter": "Twitterでシェアする",
                                    "Share on Google+": "Google+でシェアする"
                                },
                                sk: {
                                    w: "t",
                                    d: "d",
                                    h: "h",
                                    min: "m",
                                    s: "s",
                                    "Show more": "Zobraziť viac",
                                    "Show less": "Zobraziť menej",
                                    Videos: "Videí",
                                    Subscribers: "Odberateľov",
                                    Views: "Zhliadnutí",
                                    Uploads: "Nahrané videá",
                                    "Published at": "Zverejnené",
                                    "All comments": "Všetky komentáre",
                                    Comments: "Komentárov",
                                    Likes: "Záľuby",
                                    Dislikes: "Nepáči",
                                    Search: "Vyhľadávanie",
                                    "There are no videos by this request": "",
                                    Share: "Zdieľať",
                                    "Share on Facebook": "Zdieľať na Facebook",
                                    "Share on Twitter": "Zdieľať na Twitter",
                                    "Share on Google+": "Zdieľať na Google+"
                                },
                                cs: {
                                    w: "t",
                                    d: "d",
                                    h: "h",
                                    min: "m",
                                    s: "s",
                                    "Show more": "Zobrazit více",
                                    "Show less": "Zobrazit méně",
                                    Videos: "Videí",
                                    Subscribers: "Odběratelů",
                                    Views: "Zhlédnutí",
                                    Uploads: "Nahraná videa",
                                    "Published at": "Publikováno",
                                    "All comments": "Všechny komentáře",
                                    Comments: "Komentářů",
                                    Likes: "Líbí se",
                                    Dislikes: "Nemá ráda",
                                    Search: "Vyhledávání",
                                    "There are no videos by this request": "",
                                    Share: "Sdílet",
                                    "Share on Facebook": "Sdílet na Facebooku",
                                    "Share on Twitter": "Sdílet na Twitteru",
                                    "Share on Google+": "Sdílet na Google+"
                                },
                                ko: {
                                    w: "t",
                                    d: "d",
                                    h: "h",
                                    min: "m",
                                    s: "s",
                                    "Show more": "더보기",
                                    "Show less": "덜보기",
                                    Videos: "비디오",
                                    Subscribers: "구독자",
                                    Views: "조회수",
                                    Uploads: "업로드",
                                    "Published at": "게재하기",
                                    "All comments": "모든 커멘트",
                                    Comments: "댓글",
                                    Likes: "좋아요",
                                    Dislikes: "싫어요",
                                    Search: "수색",
                                    "There are no videos by this request": "",
                                    Share: "몫",
                                    "Share on Facebook": "Facebook에서 공유",
                                    "Share on Twitter": "Twitter에서 공유",
                                    "Share on Google+": "Google+에서 공유"
                                },
                                ro: {
                                    w: "s",
                                    d: "z",
                                    h: "o",
                                    min: "m",
                                    s: "s",
                                    "Show more": "Arată mai multe",
                                    "Show less": "Arată mai puține",
                                    Videos: "Video-uri",
                                    Subscribers: "Abonați",
                                    Views: "Vizualizări",
                                    Uploads: "Urcări",
                                    "Published at": "Publicat pe",
                                    "All comments": "Toate comentariile",
                                    Comments: "Comentarii",
                                    Likes: "Aprecieri",
                                    Dislikes: "Dislike-uri",
                                    Search: "Caută",
                                    "There are no videos by this request": "Nu sunt video-uri pentru această cerere",
                                    Share: "Distribuie",
                                    "Share on Facebook": "Distribuie pe Facebook",
                                    "Share on Twitter": "Distribuie pe Twitter",
                                    "Share on Google+": "Distribuie pe Google+"
                                },
                                he: {
                                    w: "שבוע",
                                    d: "יום",
                                    h: "שעה",
                                    min: "דקה",
                                    s: "שניה",
                                    "Show more": "הצג עוד",
                                    "Show less": "הצג פחות",
                                    Videos: "סרטונים",
                                    Subscribers: "מנויים",
                                    Views: "צפיות",
                                    Uploads: "העלאות",
                                    "Published at": "פורסם ב",
                                    "All comments": "כל התגובות",
                                    Comments: "תגובות",
                                    Likes: "לייקים",
                                    Dislikes: "דיסלייקים",
                                    Search: "חיפוש",
                                    "There are no videos by this request": "לא מצאנו",
                                    Share: "שיתוף",
                                    "Share on Facebook": "שיתוף בפייסבוק",
                                    "Share on Twitter": "שיתוף בטוויטר",
                                    "Share on Google+": "שיתוף בגוגל+"
                                },
                                hu: {
                                    w: "h",
                                    d: "n",
                                    h: "ó",
                                    min: "p",
                                    s: "m",
                                    "Show more": "Több megjelenítése",
                                    "Show less": "Kevesebb megjelenítése",
                                    Videos: "Videók",
                                    Subscribers: "Feliratkozó",
                                    Views: "Megtekintés",
                                    Uploads: "Feltöltések",
                                    "Published at": "Bemutatva",
                                    "All comments": "Megjegyzések",
                                    Comments: "Megjegyzések",
                                    Likes: "Tetszik",
                                    Dislikes: "Nem-Tetszik",
                                    Search: "Keresés",
                                    "There are no videos by this request": "Nem található ilyen videó",
                                    Share: "Megosztás",
                                    "Share on Facebook": "Megosztás Facebookon",
                                    "Share on Twitter": "Megosztás Twitteren",
                                    "Share on Google+": "Megosztás Google+ -on"
                                },
                                uk: {
                                    w: "тиж",
                                    d: "дн",
                                    h: "г",
                                    min: "хв",
                                    s: "с",
                                    "Show more": "Показати більше",
                                    "Show less": "Згорнути",
                                    Videos: "Відео",
                                    Subscribers: "Підписчики",
                                    Views: "Переглядів",
                                    Uploads: "Завантажень",
                                    "Published at": "Опубліковано",
                                    "All comments": "Всі коментарі",
                                    Comments: "Коментарів",
                                    Likes: "Вподобань",
                                    Dislikes: "Не сподобалось",
                                    Search: "Пошук",
                                    "There are no videos by this request": "Відео відсутні по даному запиту",
                                    Share: "Поширити",
                                    "Share on Facebook": "Поширити на Facebook",
                                    "Share on Twitter": "Поширити на Twitter"
                                },
                                al: {
                                    w: "javë",
                                    d: "ditë",
                                    h: "orë",
                                    min: "min",
                                    s: "sek",
                                    "Show more": "Shfaq më shumë",
                                    "Show less": "Shfaq më pak",
                                    Videos: "Video",
                                    Subscribers: "Abonues",
                                    Views: "Shikime",
                                    Uploads: "Video të ngarkuara",
                                    "Published at": "Publikuar më",
                                    "All comments": "Të gjitha komentet",
                                    Comments: "Komentet",
                                    Likes: "Pëlqime",
                                    Dislikes: "Mospëlqime",
                                    Search: "Kërko",
                                    "There are no videos by this request": "Nuk ka video për këtë kërkesë",
                                    Share: "Shpërndaje",
                                    "Share on Facebook": "Shpërndaje në  Facebook",
                                    "Share on Twitter": "Shpërndaje në  Twitter"
                                }
                            }
                        }, {}],
                        21: [function(e, t, i) {
                            var n = e("./../../olivie/src/js/olivie"),
                                o = e("./../../olivie/src/js/jquery"),
                                a = e("./yottie"),
                                r = e("./yottie-facade"),
                                s = e("./defaults"),
                                l = e("./schemes"),
                                p = 0;
                            n.plugin("yottie", function(e, t) {
                                if (s = o.data(e, "yottie")) return s;
                                var i = o.yottie.generateAttributesMap();
                                o.each(i, function(e, i) {
                                    if ((i = i.replace(/-([a-z])/g, function(e) {
                                            return e[1].toUpperCase()
                                        })) in t) {
                                        var n = t,
                                            a = e.split("."),
                                            r = t[i];
                                        o.each(a, function(e, t) {
                                            e == a.length - 1 ? n[t] = r : "undefined" === o.type(n[t]) && (n[t] = {}), n = n[t]
                                        })
                                    }
                                });
                                var n = new a(++p, e, t),
                                    s = new r(n);
                                o.data(e, "yottie", s), n.run()
                            }, {
                                defaults: s,
                                schemes: l,
                                orderFunctions: {
                                    date: function(e, t) {
                                        var i = Date.parse(e.snippet.publishedAt),
                                            n = Date.parse(t.snippet.publishedAt);
                                        return i < n ? -1 : n < i ? 1 : 0
                                    }
                                },
                                generateAttributesMap: function(e, t, i) {
                                    return e = e || "", t = t || s, i = i || {}, o.each(t, function(t, n) {
                                        var a;
                                        "object" === o.type(n) ? o.yottie.generateAttributesMap(e ? e + "." + t : t, n, i) : i[a = e ? e + "." + t : t] = a.replace(/\.|[A-Z]/g, function(e) {
                                            return "." === e ? "-" : "-" + e.toLowerCase()
                                        })
                                    }), i
                                },
                                init: function(e) {
                                    e = e || document.body;
                                    var t = o.yottie.generateAttributesMap();
                                    o("[data-yt]", e).each(function(e, i) {
                                        var a = o(i),
                                            r = {};
                                        o.each(t, function(e, t) {
                                            var i = a.attr("data-yt-" + t);
                                            "true" === i ? i = !0 : "false" === i && (i = !1), n.utils.setProperty(r, e, i)
                                        }), a.yottie(r)
                                    })
                                },
                                addOrderFunction: function(e, t) {
                                    "function" === o.type(t) && (this.orderFunctions[e] = t)
                                }
                            }), o(function() {
                                var e = window.onYottieReady;
                                e && "function" === o.type(e) && e(), o(window).trigger("yottieReady"), o.yottie.init()
                            })
                        }, {
                            "./../../olivie/src/js/jquery": 7,
                            "./../../olivie/src/js/olivie": 14,
                            "./defaults": 19,
                            "./schemes": 45,
                            "./yottie": 48,
                            "./yottie-facade": 47
                        }],
                        22: [function(e, t, i) {
                            t.exports = function(e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                        selector: "",
                                        text: "Free Elfsight widgets",
                                        link: "https://elfsight.com/",
                                        tpl: null,
                                        owner: !1,
                                        platform: !1
                                    },
                                    i = this;
                                i.view = t.tpl ? t.tpl : jQuery('<a href="' + t.link + '" target="_blank">\n                            ' + t.text + '\n                            \n                            <div class="eapps-remove-link" title="Remove Elfsight logo">\n                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 10 10">\n                                  <path fill="#ffffff" d="M6.01 5l3.78 3.78a.714.714 0 1 1-1.01 1.01L5 6.01 1.22 9.79A.714.714 0 1 1 .21 8.78L3.99 5 .21 1.22A.714.714 0 0 1 1.22.21L5 3.99 8.78.21a.714.714 0 0 1 1.01 1.01L6.01 5z"/>\n                                </svg>\n\n                            </div>\n                        </a>'), i.view[0].setAttribute("style", ["animation:none!important", "background:rgba(255,255,255,.5) url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDZCQzk0NkYzNEIwMTFFNzg5ODc5NzU1NEQwMzQxRTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDZCQzk0NzAzNEIwMTFFNzg5ODc5NzU1NEQwMzQxRTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNkJDOTQ2RDM0QjAxMUU3ODk4Nzk3NTU0RDAzNDFFOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNkJDOTQ2RTM0QjAxMUU3ODk4Nzk3NTU0RDAzNDFFOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmvrtX4AAAFpSURBVHjajJNNK0RhFMef50oZxWZkUpSXSMnOamZFWFkozcZ8AEk+gvIdKN/A1kJKFoTsWEzKWxaiKE2NkJdirt+5nZmO25341+++PM+55zn3PP/HO+eCMAwr3J333hmNwwA0QRmu4BSebZB8MQd3sA0VM7cAaXiFVjN+ALs2QT8UIIQtOHbJ6oQx6NVq1qMElC+lN/M8Dy1QgkMo1kmUgwk4gc0oQa0c7wtakeheE50nJMnDEKzGE8htCkZM8C1saCOraoAluPTa5UG4gA8NmISs+eAR1rRPVckvZwLdqmnoMJM78GLe07qq1Y1cAt0J0Xcs4Mk8f5q4Xwq0PFF7bG7flJyKlS/qdurCBx3IxgKuYQXO4E0Xs03MSBOd7sIoLGs/kpSKJchrfFs0SJI9bdosdCUkeDc2z6kHxEilmg/wgPh9ERrhSC1d/peVjZHE0jPQp0Nf+v/1D1OCE6urDUPPX8f5R4ABAGa7ZWSBcR62AAAAAElFTkSuQmCC')no-repeat 8px center !important", "border:none!important", "border-radius:6px!important", "bottom:auto!important", "box-sizing:border-box!important", "color:rgba(0,0,0,.5)!important", "display:inline-block!important", "float:none!important", "font-family:Roboto,Arial,Sans-serif!important", "font-size:12px!important", "font-weight:700!important", "height:28px!important", "left:50%!important", "line-height:16px!important", "margin:8px auto!important", "opacity:1!important", "padding:6px 6px 6px 32px!important", "position:relative!important", "right:auto!important", "text-align:left!important", "text-decoration:none!important", "text-indent:0!important", "top:auto!important", "transform:translateX(-50%)!important", "visibility:visible!important", "max-width:240px!important", "z-index:99999!important", "zoom:1!important", "background-color:rgba(238,238,238,0.9)!important"].join(";")), ["blur", "change", "click", "focus", "focusin", "focusout", "hover", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "resize", "scroll", "select", "submit"].forEach(function(e) {
                                    i.view[0].addEventListener(e, function(e) {
                                        "eapps-remove-link" !== e.target.className && e.stopPropagation()
                                    })
                                }), jQuery(i.view[0]).find("div")[0].setAttribute("style", ["display:" + (!t.platform || t.owner && t.platform ? "flex" : "none") + "!important", "align-items:center!important", "justify-content:center!important", "width:20px!important", "height:20px!important", "border-radius:12px!important", "overflow:hidden!important", "position:absolute!important", "right:-10px!important", "top:-10px!important", "background:#f93262!important", "box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2)!important"].join(";")), jQuery(i.view[0]).find("svg")[0].setAttribute("style", ["display:block!important", "pointer-events:none!important"].join(";")), jQuery(i.view[0]).find("div").on("click", function(e) {
                                    t.platform && window.open(t.appsLink, "_blank").focus(), e.preventDefault()
                                }), i.view.appendTo(e.app.$element.find(t.selector))
                            }
                        }, {}],
                        23: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie"),
                                a = n(window);
                            t.exports = o.component("Popup", function() {}, {
                                AVAILABLE_INFO: ["duration", "title", "channelLogo", "channelName", "subscribeButton", "viewsCounter", "likesCounter", "dislikesCounter", "likesRatio", "share", "date", "description", "descriptionMoreButton", "comments"],
                                dependencies: ["youtube", "i18n", "renderer", "ads", ""]
                            }, {
                                $e: n("<div></div>"),
                                videoPlayer: null,
                                open: function(e) {
                                    var t = this;
                                    if (t.showing) return !1;
                                    t.analytics = t.get("app.analytics"), t.showVideo(e), t.showing = !0, t.$popup.addClass("yottie-popup-show")
                                },
                                close: function() {
                                    var e = this;
                                    setTimeout(function() {
                                        e.videoPlayer.destroy(), e.$video.remove()
                                    }, 350), e.showing = !1, e.$popup.removeClass("yottie-popup-show")
                                },
                                showVideo: function(e) {
                                    var t = this,
                                        i = t.youtube.parseSource(e);
                                    i && "youtube#video" === i.kind && (t.$popup.addClass("yottie-popup-loading"), t.youtube.model(i.kind).find(i.criteria, "contentDetails,statistics,snippet").done(function(e) {
                                        if (e) {
                                            t.video = e;
                                            var i = [];
                                            i.push(t.getVideoChannel()), i.push(t.getVideoCommentThreads()), n.when.apply(n, i).done(function() {
                                                t.$popup.removeClass("yottie-popup-loading"), t.$video = t.createVideoElement();
                                                var e = {
                                                    videoId: t.video.id,
                                                    playerVars: {
                                                        autoplay: t.app.options.popup.autoplay,
                                                        showinfo: !1,
                                                        rel: 0
                                                    },
                                                    events: {
                                                        onStateChange: function(e) {
                                                            switch (t.analytics && t.analytics.available() && t.analytics.store("click"), e.data) {
                                                                case YT.PlayerState.ENDED:
                                                                    e.target.pauseVideo(), e.target.seekTo(0)
                                                            }
                                                        }
                                                    }
                                                };
                                                t.app.options.noCookies && (e.host = "http://www.youtube-nocookie.com");
                                                var i = new YT.Player(t.$video.find(".yottie-popup-video-player span").get(0), e);
                                                t.videoPlayer = i, !t.app.options.noCookies && t.channel && t.channel.renderButton(t.$video.find(".yottie-popup-video-meta-subscribe").get(0)), t.$video.appendTo(t.$inner), t.$videoPlayer = t.$video.find(".yottie-popup-video-source iframe"), t.fit(), setTimeout(function() {
                                                    t.ads.init(t.$inner)
                                                }, 17)
                                            })
                                        }
                                    }))
                                },
                                getVideoChannel: function() {
                                    var e = this;
                                    e.video;
                                    var t = n.Deferred();
                                    return e.youtube.model("youtube#channel").find({
                                        id: e.video.snippet.channelId
                                    }, "snippet").done(function(i) {
                                        e.channel = i, t.resolve()
                                    }).fail(function() {
                                        e.channel = null, t.resolve()
                                    }), t
                                },
                                getVideoCommentThreads: function() {
                                    var e = this;
                                    e.video;
                                    var t = n.Deferred();
                                    return e.youtube.model("youtube#commentThread").findAll({
                                        videoId: e.video.id,
                                        textFormat: "plainText"
                                    }, "snippet").done(function(i) {
                                        e.commentThreads = i, t.resolve()
                                    }).fail(function() {
                                        e.commentThreads = null, t.resolve()
                                    }), t
                                },
                                createPopupElement: function() {
                                    var e = this,
                                        t = {};
                                    return t.loader = e.renderer.render("popup.loader", {
                                        parts: t
                                    }), t.controlClose = e.renderer.render("popup.control.close", {
                                        parts: t
                                    }), t.controlArrows = e.renderer.render("popup.control.arrows", {
                                        parts: t
                                    }), t.inner = e.renderer.render("popup.inner", {
                                        parts: t
                                    }), t.overlay = e.renderer.render("popup.overlay", {
                                        parts: t
                                    }), t.wrapper = e.renderer.render("popup.wrapper", {
                                        parts: t
                                    }), n(e.renderer.render("popup.container", {
                                        parts: t
                                    }))
                                },
                                createVideoElement: function() {
                                    var e = this,
                                        t = {},
                                        i = {},
                                        a = e.i18n.t("Published at") + " " + new Date(Date.parse(e.video.snippet.publishedAt)).toLocaleDateString(),
                                        r = [];
                                    if (e.commentThreads && e.commentThreads.length)
                                        for (var s = 0, l = e.commentThreads.length; s < l; s++) {
                                            var p = e.commentThreads[s].getText();
                                            r.push({
                                                authorProfileImageUrl: e.commentThreads[s].snippet.topLevelComment.snippet.authorProfileImageUrl,
                                                authorName: e.commentThreads[s].snippet.topLevelComment.snippet.authorDisplayName,
                                                authorChannelUrl: e.commentThreads[s].snippet.topLevelComment.snippet.authorChannelUrl,
                                                text: p,
                                                passedTime: e.commentThreads[s].get("snippet.topLevelComment.snippet.publishedAt", o.utils.formatPassedTime),
                                                likesCount: e.commentThreads[s].get("snippet.topLevelComment.snippet.likeCount", o.utils.formatBigNumber),
                                                displayLikesCount: 0 < parseInt(e.commentThreads[s].snippet.topLevelComment.snippet.likeCount, 10),
                                                likesTitle: e.i18n.t("Likes") + ": " + e.commentThreads[s].get("snippet.topLevelComment.snippet.likeCount", o.utils.formatNumberDigits)
                                            })
                                        }
                                    return e.activeInfo = o.utils.unifyMultipleOption(e.app.options.popup.info) || [], e.activeInfo = e.activeInfo.filter(function(t) {
                                        return !!~e.constructor.AVAILABLE_INFO.indexOf(t)
                                    }), n.each(e.activeInfo, function(e, i) {
                                        t[i] = !0
                                    }), t.viewsCounter = !!e.video.get("statistics.viewCount") && t.viewsCounter, t.dislikesCounter = !!e.video.get("statistics.dislikeCount") && t.dislikesCounter, t.likesCounter = !!e.video.get("statistics.likeCount") && t.likesCounter, t.channel = e.channel && t.channelName || t.channelLogo || t.subscribeButton, t.ratingCounters = t.likesCounter || t.dislikesCounter, t.rating = t.ratingCounters || t.likesRatio, t.properties = t.viewsCounter || t.rating, t.infoHeader = t.title || t.properties, t.infoMeta = t.channel || t.share, t.description = t.description && e.video.snippet.description, t.infoMain = t.description || t.date, t.info = t.infoHeader || t.infoMain || t.infoMeta, t.comments = e.commentThreads && t.comments, t.content = t.info || t.comments, t.descriptionMoreButton = t.description && t.descriptionMoreButton, t.meta = e.channelLogo || t.channelName || t.date || t.description || t.subscribeButton, i.videoPlayer = e.renderer.render("popup.video.player", {
                                        displaying: t,
                                        parts: i
                                    }), i.videoContent = e.renderer.render("popup.video.content", {
                                        displaying: t,
                                        parts: i,
                                        logo: e.channel.get("snippet.thumbnails.default.url"),
                                        name: e.channel.get("snippet.title"),
                                        link: "//www.youtube.com/channel/" + e.channel.id,
                                        viewsCount: e.video.get("statistics.viewCount", o.utils.formatNumberWithCommas) + " " + e.i18n.t("Views"),
                                        likesCount: e.video.get("statistics.likeCount", o.utils.formatBigNumber),
                                        dislikesCount: e.video.get("statistics.dislikeCount", o.utils.formatBigNumber),
                                        likesRatio: parseInt(100 * e.video.get("statistics.likeCount") / (parseInt(e.video.get("statistics.likeCount"), 10) + parseInt(e.video.get("statistics.dislikeCount"), 10)), 10),
                                        titles: {
                                            views: e.i18n.t("Views") + ": " + e.video.get("statistics.viewCount", e.youtube.constructor.formatNumberDigits),
                                            likes: e.i18n.t("Likes") + ": " + e.video.get("statistics.likeCount", e.youtube.constructor.formatNumberDigits),
                                            dislikes: e.i18n.t("Dislikes") + ": " + e.video.get("statistics.dislikeCount", e.youtube.constructor.formatNumberDigits),
                                            share: e.i18n.t("Share")
                                        },
                                        date: a,
                                        text: e.video.get("snippet.description", [o.utils.nl2br, o.utils.formatAnchors]),
                                        showMoreLabel: e.i18n.t("Show more"),
                                        title: e.video.get("snippet.title"),
                                        comments: e.commentThreads ? r : null,
                                        shareButtons: e.getShareButtons()
                                    }), n(e.renderer.render("popup.video.container", {
                                        displaying: t,
                                        parts: i
                                    }))
                                },
                                getShareButtons: function() {
                                    var e = this,
                                        t = {
                                            facebook: e.i18n.t("Share on Facebook"),
                                            twitter: e.i18n.t("Share on Twitter")
                                        };
                                    return {
                                        facebook: {
                                            id: "facebook",
                                            title: t.facebook,
                                            icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNS43LDEzVjguMWgzLjZWNi4yYzAtMy4zLDIuNS02LjIsNS41LTYuMmgzLjl2NC45aC0zLjljLTAuNCwwLTAuOSwwLjUtMC45LDEuM3YxLjloNC45VjEzaC00Ljl2MTENCgkJSDkuM1YxM0g1Ljd6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==",
                                            handler: function() {
                                                window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent("https://www.youtube.com/watch?v=" + e.video.get("id")), "facebook", "width=600px,height=600px,menubar=no,toolbar=no,resizable=yes,scrollbars=yes")
                                            }
                                        },
                                        twitter: {
                                            id: "twitter",
                                            title: t.twitter,
                                            icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGlkPSJ0d2l0dGVyLTQtaWNvbl8xXyIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yMS41LDcuMWMwLjMsNi45LTQuOSwxNC42LTE0LDE0LjZjLTIuOCwwLTUuNC0wLjgtNy41LTIuMg0KCQljMi42LDAuMyw1LjItMC40LDcuMy0yYy0yLjIsMC00LTEuNS00LjYtMy40YzAuOCwwLjEsMS41LDAuMSwyLjItMC4xYy0yLjQtMC41LTQtMi42LTMuOS00LjljMC43LDAuNCwxLjQsMC42LDIuMiwwLjYNCgkJQzEsOC4yLDAuNCw1LjMsMS43LDMuMWMyLjQsMyw2LjEsNC45LDEwLjEsNS4xYy0wLjctMy4xLDEuNi02LDQuOC02YzEuNCwwLDIuNywwLjYsMy42LDEuNmMxLjEtMC4yLDIuMi0wLjYsMy4xLTEuMg0KCQljLTAuNCwxLjEtMS4xLDIuMS0yLjIsMi43YzEtMC4xLDEuOS0wLjQsMi44LTAuOEMyMy4zLDUuNSwyMi41LDYuNCwyMS41LDcuMXoiLz4NCjwvZz4NCjwvc3ZnPg0K",
                                            handler: function() {
                                                window.open("https://twitter.com/share?url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + e.video.get("id")) + "&text=" + encodeURIComponent(e.video.get("snippet.title")), "facebook", "width=600px,height=600px,menubar=no,toolbar=no,resizable=yes,scrollbars=yes")
                                            }
                                        }
                                    }
                                },
                                watch: function() {
                                    var e = this;
                                    e.$wrapper.click(function(t) {
                                        e.analytics && e.analytics.available() && e.analytics.store("click"), t.target === e.$wrapper.get(0) && e.close()
                                    }), e.$controlClose.click(function(t) {
                                        t.preventDefault(), e.close()
                                    }), e.$popup.on("click", ".yottie-popup-video-meta-description-more", function() {
                                        n(this).text(function(t, i) {
                                            return i === e.i18n.t("Show more") ? e.i18n.t("Show less") : e.i18n.t("Show more")
                                        }).siblings(".yottie-popup-video-meta-description").toggleClass("yottie-popup-video-meta-description-show-full")
                                    }), e.$popup.on("click", ".yottie-popup-video-share", function(t) {
                                        e.$popup.find(".yottie-popup-video-share-popover").addClass("yottie-popup-video-share-popover-open"), t.stopPropagation()
                                    }), e.$popup.on("click", ".yottie-popup-video-share-popover-content-item", function(t) {
                                        var i = e.getShareButtons(),
                                            o = n(this).attr("data-type");
                                        if (o) {
                                            var a = i[o];
                                            a && "function" == typeof a.handler && a.handler()
                                        }
                                        t.stopPropagation()
                                    }), n("body").on("click touchend", function(t) {
                                        n(t.target).closest(".yottie-popup-video-share-popover").length || e.$popup.find(".yottie-popup-video-share-popover").removeClass("yottie-popup-video-share-popover-open")
                                    })
                                },
                                fit: function() {
                                    var e = a.innerHeight(),
                                        t = this.$inner.innerHeight(),
                                        i = 0;
                                    t < e && (i = e / 2 - t / 2 - 50), this.$inner.css("top", i)
                                },
                                run: function() {
                                    var e = this;
                                    return "popup" == e.get("app.options.video.playMode") && (e.$popup = e.createPopupElement(), e.$popup.appendTo(document.body), e.$popup.attr("id", "yottie_popup_" + e.app.getId()), e.$wrapper = e.$popup.find(".yottie-popup-wrapper"), e.$inner = e.$popup.find(".yottie-popup-inner"), e.$controlClose = e.$popup.find(".yottie-popup-control-close"), e.watch(), a.resize(function() {
                                        e.fit()
                                    })), e
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        24: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie");
                            t.exports = o.component("Ads", function(e) {
                                this.client = e.client, this.slots = e.slots
                            }, {
                                dependencies: ["renderer"],
                                SIZES: [{
                                    width: 728,
                                    height: 90
                                }, {
                                    width: 320,
                                    height: 50
                                }]
                            }, {
                                client: null,
                                slots: null,
                                isActive: function() {
                                    return window.adsbygoogle && this.client
                                },
                                run: function() {
                                    (this.slots.content || this.slots.popup) && n.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")
                                },
                                showAt: function(e) {
                                    return !!this.slots[e]
                                },
                                init: function(e) {
                                    var t = this;
                                    if (t.isActive()) {
                                        var i = n("[data-yt-ads-place]", e);
                                        i = i.filter(function() {
                                            var e = n(this).attr("data-yt-ads-place");
                                            return t.showAt(e)
                                        }), t.processSlots(i)
                                    }
                                },
                                createAdsElement: function(e, t) {
                                    return n(this.renderer.render("ads", n.extend(!1, {
                                        pubId: this.client,
                                        slotId: t
                                    }, e)))
                                },
                                processSlots: function(e) {
                                    var t = this;
                                    e.each(function() {
                                        var e = n(this),
                                            i = e.attr("data-yt-ads-place"),
                                            o = t.slots[i],
                                            a = null,
                                            r = e.width();
                                        r > t.constructor.SIZES[1].width && r < t.constructor.SIZES[0].width ? a = t.constructor.SIZES[1] : r > t.constructor.SIZES[0].width && (a = t.constructor.SIZES[0]), e.empty(), a && t.createAdsElement(a, o).appendTo(e)
                                    }), adsbygoogle.push({})
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        25: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie"),
                                a = e("./grid"),
                                r = e("./../youtube/proxy-storage"),
                                s = (e("./../../defaults"), n(window));
                            t.exports = o.class("FeedSection", [], function(e, t) {
                                var i = this;
                                if (n.isPlainObject(t)) {
                                    n.isArray(t.sources) || (t.sources = [t.sources]), i.controller = e, i.title = t.name || i.controller.i18n.t("Untitled"), i.videoPlayMode = i.get("controller.app.options.video.playMode"), i.analytics = i.get("controller.app.analytics"), i.videos = [], i.source = [], n.each(t.sources, function(e, t) {
                                        var o;
                                        if ("string" === n.type(t)) {
                                            if (!(o = i.controller.youtube.parseSource(t))) return
                                        } else {
                                            if (!(n.isPlainObject(t) && t.kind && t.criteria)) return;
                                            o = t
                                        }
                                        i.source.push(o)
                                    }), i.hasSource = i.source && i.source.length, i.$element = i.createFeedSectionElement(), i.hasSource || (i.$novideos = n(i.controller.renderer.render("feed.section.novideos", {
                                        message: i.controller.i18n.t("There are no videos in this group")
                                    })), i.$novideos.appendTo(i.$element)), i.$inner = i.$element.find(".yottie-widget-feed-section-inner"), i.$loader = n(i.controller.renderer.render("feed.loader")), i.get("controller.app.options.content.search") && (i.$filter = n(i.controller.renderer.render("feed.filter", {
                                        placeholder: i.controller.i18n.t("Search")
                                    })), i.$filter.find(".yottie-widget-feed-section-search-selector-label-input").attr("name", "filterField_" + i.title), i.$filter.prependTo(i.$element)), i.hasSource && i.get("controller.app.options.content.arrowsControl") && (i.$inner.append(i.controller.renderer.render("feed.arrows")), i.$arrowPrev = i.$element.find(".yottie-widget-feed-section-arrow-prev"), i.$arrowNext = i.$element.find(".yottie-widget-feed-section-arrow-next")), i.hasSource && i.get("controller.app.options.content.scrollbar") && (i.$scrollbar = n(i.controller.renderer.render("feed.scrollbar")), i.$scrollbar.appendTo(i.$element)), i.get("controller.app.options.content.paginationControl") && (i.$pagination = n(i.controller.renderer.render("feed.pagination")), i.$pagination.appendTo(i.$element)), i.$loader.appendTo(i.$element), i.fetcher = i.createFetcher(), i.inlinePlayers = {}, i.defaultBreakpoint = {
                                        columns: i.get("controller.app.options.content.columns", o.utils.parseInt),
                                        rows: i.get("controller.app.options.content.rows", o.utils.parseInt),
                                        gutter: i.get("controller.app.options.content.gutter", o.utils.parseInt)
                                    }, i.currentBreakpoint = i.defaultBreakpoint, i.grid = new a(i.$inner, i.defaultBreakpoint);
                                    var r = [],
                                        s = i.get("controller.app.options.content.responsive");
                                    s && (n.each(s, function(e, t) {
                                        t.mw = parseInt(t.minWidth ? t.minWidth : e, 10), r.push(t)
                                    }), r.sort(function(e, t) {
                                        return e.mw < t.mw ? -1 : e.mw > t.mw ? 1 : 0
                                    }), i.breakpoints = r), i.auto = i.get("controller.app.options.content.auto", o.utils.parseInt), i.autoPauseOnHover = i.get("controller.app.options.content.autoPauseOnHover"), i.$element.addClass("yottie-widget-feed-section-" + i.get("controller.app.options.content.direction"))
                                }
                            }, {
                                VIDEO_AVAILABLE_INFO: ["playIcon", "duration", "title", "date", "description", "viewsCounter", "likesCounter", "commentsCounter"],
                                AVAILABLE_EFFECTS: ["slide", "fade", "cube", "coverflow", "flip"],
                                AVAILABLE_DIRECTIONS: ["horizontal"],
                                VIDEO_BREAKPOINTS: [560, 490, 440, 370, 280, 230, 180, 130, 70],
                                SWIPER_OPTIONS_ALIASES: {
                                    columns: "slidesPerView",
                                    gutter: "spaceBetween"
                                },
                                prepareSwiperBreakpoints: function(e) {
                                    var t = this;
                                    if (!e) return null;
                                    var i = {};
                                    return n.each(e, function(e, o) {
                                        i[e] = {}, n.each(o, function(n, o) {
                                            var a = t.SWIPER_OPTIONS_ALIASES[n];
                                            a && (i[e][a] = o)
                                        })
                                    }), i
                                }
                            }, {
                                virgin: !0,
                                redistributing: !1,
                                fetcher: null,
                                videoStorage: null,
                                controller: null,
                                title: null,
                                source: null,
                                grid: null,
                                swiper: null,
                                auto: null,
                                videoActiveInfo: null,
                                videoPlayMode: null,
                                inlinePlayers: null,
                                breakpoints: null,
                                currentBreakpoint: null,
                                prevBreakpoint: null,
                                defaultBreakpoint: null,
                                hover: null,
                                $element: null,
                                $inner: null,
                                $arrowPrev: null,
                                $arrowNext: null,
                                $scrollbar: null,
                                $loader: null,
                                $pagination: null,
                                isPlaying: null,
                                filterStr: "",
                                filterField: "title&description",
                                allFetched: !1,
                                noCookies: !1,
                                createFeedSectionElement: function() {
                                    return n(this.controller.renderer.render("feed.section"))
                                },
                                createFetcher: function() {
                                    var e, t = this,
                                        i = t.get("controller.app.options.order"),
                                        n = (t.get("controller.app.options.content.search"), t.controller.youtube.createUniversalVideoFetcher(t.source, "snippet,contentDetails,statistics"));
                                    return i ? (e = new r(n, i), t.allFetched = !0) : e = n, e
                                },
                                activate: function() {
                                    var e = this;
                                    if (e.$element.addClass("yottie-active"), !e.hasSource) return !1;
                                    e.virgin ? (e.virgin = !1, e.fit(), e.showLoader(500), e.fetcher.prepare().done(function() {
                                        e.appendSlide(!0).done(function() {
                                            e.fit(), e.auto && setTimeout(function() {
                                                e.isPlaying || !e.swiper.autoplaying || e.hover || e.swiper.slideNext()
                                            }, e.auto)
                                        })
                                    })) : e.fit()
                                },
                                deactivate: function() {
                                    this.$element.removeClass("yottie-active"), n.each(this.inlinePlayers, function(e, t) {
                                        t.pauseVideo()
                                    })
                                },
                                createVideoElement: function(e) {
                                    var t = this,
                                        i = {};
                                    n.each(t.videoActiveInfo, function(e, t) {
                                        i[t] = !0
                                    }), i.viewsCounter = !!e.get("statistics.viewCount") && i.viewsCounter, i.likesCounter = !!e.get("statistics.likeCount") && i.likesCounter, i.commentsCounter = !!e.get("statistics.commentCount") && i.commentsCounter, i.properties = i.viewsCounter || i.likesCounter || i.commentsCounter, i.info = i.properties || i.title || i.date || i.description, i.videoPlayer = "inline" === t.videoPlayMode;
                                    var a = {};
                                    return a.player = t.controller.renderer.render("video.player", {
                                        displaying: i
                                    }), a.preview = t.controller.renderer.render("video.preview", {
                                        displaying: i,
                                        id: e.id,
                                        thumbnail: e.get("snippet.thumbnails.high.url"),
                                        maxresThumbnail: e.get("snippet.thumbnails.maxres.url"),
                                        title: e.get("snippet.title"),
                                        duration: e.parseDuration()
                                    }), a.overlay = t.controller.renderer.render("video.overlay"), a.info = t.controller.renderer.render("video.info", {
                                        displaying: i,
                                        id: e.id,
                                        title: e.get("snippet.title"),
                                        description: e.get("snippet.description", [o.utils.nl2br, o.utils.formatAnchors]),
                                        viewsCount: e.get("statistics.viewCount", o.utils.formatBigNumber) + " " + t.controller.i18n.t("Views"),
                                        likesCount: e.get("statistics.likeCount", o.utils.formatBigNumber) + " " + t.controller.i18n.t("Likes"),
                                        commentsCount: e.get("statistics.commentCount", o.utils.formatBigNumber) + " " + t.controller.i18n.t("Comments"),
                                        date: new Date(e.getPublishedTimestamp()).toLocaleDateString(),
                                        titles: {
                                            views: t.controller.i18n.t("Views") + ": " + e.get("statistics.viewCount", t.controller.youtube.constructor.formatNumberDigits),
                                            likes: t.controller.i18n.t("Likes") + ": " + e.get("statistics.likeCount", t.controller.youtube.constructor.formatNumberDigits),
                                            comments: t.controller.i18n.t("Comments") + ": " + e.get("statistics.commentCount", t.controller.youtube.constructor.formatNumberDigits)
                                        }
                                    }), n(t.controller.renderer.render("video.container", {
                                        id: e.id,
                                        displaying: i,
                                        parts: a,
                                        layout: t.videoLayout
                                    }))
                                },
                                appendSlide: function(e) {
                                    var t = this,
                                        i = t.grid.getItemsCount(),
                                        o = n.Deferred();
                                    return t.fetcher.hasNext() ? (e || t.showLoader(), t.fetcher.fetch(i, t.filterStr, t.filterField).done(function(e) {
                                        var i = n(),
                                            a = n(t.controller.renderer.render("feed.slide"));
                                        n.each(e, function(e, n) {
                                            var o = t.createVideoElement(n);
                                            i = i.add(o)
                                        }), i.appendTo(a), t.swiper.appendSlide(a.get(0)), t.fitSlides(a), t.hideLoader(), o.resolve()
                                    }).fail(function() {
                                        if (t.swiper.autoplay && t.swiper.autoplay.stop(), !t.fetcher.hasNext() && 0 === t.$element.find(".yottie-widget-feed-section-slide").length) {
                                            var e = n(t.controller.renderer.render("feed.slide"));
                                            t.$novideos = n(t.controller.renderer.render("feed.section.novideos", {
                                                message: t.controller.i18n.t("There are no videos by this request") + ': "' + t.filterStr + '".'
                                            })), t.$novideos.appendTo(e), t.swiper.appendSlide(e)
                                        }
                                        t.hideLoader(), t.$arrowNext.toggleClass("yottie-widget-feed-section-arrow-has-next", !1), o.reject()
                                    })) : o.reject(), o.promise()
                                },
                                isHorizontal: function() {
                                    return "horizontal" === this.get("controller.app.options.content.direction")
                                },
                                run: function() {
                                    var e = this;
                                    e.noCookies = e.get("controller.app.options.noCookies"), e.videoLayout = e.get("controller.app.options.video.layout"), e.videoActiveInfo = o.utils.unifyMultipleOption(e.get("controller.app.options.video.info")) || [], e.videoActiveInfo = e.videoActiveInfo.filter(function(t) {
                                        return !!~e.constructor.VIDEO_AVAILABLE_INFO.indexOf(t)
                                    });
                                    var t = e.get("controller.app.options.content.transitionEffect", function(t) {
                                            return ~e.constructor.AVAILABLE_EFFECTS.indexOf(t) ? t : "slide"
                                        }),
                                        i = e.get("controller.app.options.content.direction", function(t) {
                                            return ~e.constructor.AVAILABLE_DIRECTIONS.indexOf(t) ? t : "vertical"
                                        }),
                                        a = e.get("controller.app.options.content.dragControl"),
                                        r = e.get("controller.app.options.content.scrollControl"),
                                        s = e.get("controller.app.options.content.paginationControl"),
                                        l = !a && !r && !s,
                                        p = window.SwiperNoConflict || window.Swiper;
                                    e.swiper = new p(e.$inner, {
                                        direction: i,
                                        effect: t,
                                        speed: e.get("controller.app.options.content.transitionSpeed", o.utils.parseInt),
                                        fade: {
                                            crossFade: !0
                                        },
                                        cube: {
                                            shadowScale: .1,
                                            shadowOffset: 15
                                        },
                                        coverflow: {
                                            rotate: 60
                                        },
                                        slidesPerView: 1,
                                        slidesPerColumn: 1,
                                        freeMode: e.get("controller.app.options.content.freeMode"),
                                        mousewheelControl: r,
                                        simulateTouch: a,
                                        scrollbar: e.$scrollbar ? e.$scrollbar.get() : null,
                                        scrollbarDraggable: !1,
                                        scrollbarHide: !0,
                                        prevButton: e.$arrowPrev ? e.$arrowPrev.get() : null,
                                        nextButton: e.$arrowNext ? e.$arrowNext.get() : null,
                                        autoplay: e.auto,
                                        autoplayDisableOnInteraction: !1,
                                        watchSlidesProgress: !0,
                                        watchSlidesVisibility: !0,
                                        onlyExternal: l,
                                        pagination: e.$pagination ? e.$pagination.get() : null,
                                        paginationClickable: !0,
                                        paginationBulletRender: function(e, t, i) {
                                            return '<span class="yottie-widget-feed-section-pagination-bullet ' + i + '">' + (t + 1) + "</span>"
                                        },
                                        onTouchStart: function(e, t) {
                                            l && t.preventDefault()
                                        }
                                    }), s && (e.swiper.on("onPaginationRendered", function() {
                                        if (e.fetcher.hasNext()) {
                                            var t = n('<span class="yottie-widget-feed-section-pagination-bullet yottie-widget-feed-section-pagination-bullet-more swiper-pagination-bullet">&nbsp;</span>').get(0);
                                            n(e.swiper.paginationContainer).append(t)
                                        }
                                        e.rebuildPagination()
                                    }), e.swiper.on("onSlideChangeEnd", function() {
                                        e.rebuildPagination()
                                    })), e.swiper.on("reachEnd", function() {
                                        var t = e.fetcher.hasNext();
                                        e.swiper.stopAutoplay(), t && !e.redistributing && setTimeout(function() {
                                            e.appendSlide(!0).done(function() {
                                                e.hover || e.swiper.startAutoplay()
                                            })
                                        }, 17), e.$arrowNext && e.$arrowNext.toggleClass("yottie-widget-feed-section-arrow-has-next", t)
                                    }), e.$element.on("click", ".yottie-widget-video", function(t) {
                                        var i;
                                        t.preventDefault(), t.stopPropagation();
                                        var o = n(this).closest(".yottie-widget-video"),
                                            a = n(t.target),
                                            r = o.attr("data-yt-id"),
                                            s = o.find(".yottie-widget-video-preview").attr("href");
                                        if (a.is("a") && a.parent().is(".yottie-widget-video-info-caption")) return window.open(a.attr("href"));
                                        if ("youtube" !== e.videoPlayMode) {
                                            if (e.swiper.stopAutoplay(), e.isPlaying = !0, "popup" === e.videoPlayMode) e.controller.popup.open("https://www.youtube.com/watch?v=" + r);
                                            else if (i = e.inlinePlayers[r]) i.getPlayerState() === YT.PlayerState.PLAYING ? i.pauseVideo() : i.playVideo();
                                            else {
                                                var l = {
                                                    videoId: r,
                                                    playerVars: {
                                                        autoplay: !0,
                                                        showinfo: !1,
                                                        rel: 0
                                                    },
                                                    events: {
                                                        onStateChange: function(t) {
                                                            switch (t.data) {
                                                                case YT.PlayerState.ENDED:
                                                                    t.target.pauseVideo(), t.target.seekTo(0), e.isPlaying = !1, e.swiper.startAutoplay();
                                                                    break;
                                                                case YT.PlayerState.PLAYING:
                                                                    n.each(e.inlinePlayers, function(t, i) {
                                                                        t !== r && (e.isPlaying = !0, e.swiper.stopAutoplay(), i.pauseVideo())
                                                                    });
                                                                    break;
                                                                case YT.PlayerState.PAUSED:
                                                                    setTimeout(function() {
                                                                        var t = !1;
                                                                        n.each(e.inlinePlayers, function(e, i) {
                                                                            e !== r && i.getPlayerState() === YT.PlayerState.PLAYING && (t = !0)
                                                                        }), t || (e.isPlaying = !1, !e.hover && e.auto && e.swiper.startAutoplay())
                                                                    }, 2e3)
                                                            }
                                                        }
                                                    }
                                                };
                                                e.noCookies && (l.host = "http://www.youtube-nocookie.com"), i = new YT.Player(o.find(".yottie-widget-video-player span").get(0), l), e.fitVideos(o), e.inlinePlayers[r] = i
                                            }
                                            e.analytics && e.analytics.available() && e.analytics.store("click")
                                        } else a.is(".yottie-widget-video-info-caption") || a.parent().is(".yottie-widget-video-info-caption") || window.open(s)
                                    }), e.autoPauseOnHover && (e.$element.on("mouseenter", function() {
                                        e.hover = !0, e.swiper.stopAutoplay()
                                    }), e.$element.on("mouseleave", function() {
                                        e.isPlaying || (e.hover = !1, e.swiper.startAutoplay())
                                    })), n(window).resize(function() {
                                        e.fit()
                                    }), e.$element.on("submit", ".yottie-widget-feed-section-search-form", function(t) {
                                        t.preventDefault(), e.searching || e.$element.find(".yottie-widget-feed-section-search-form-input").trigger("change")
                                    }), e.$element.on("click", ".yottie-widget-feed-section-search-form-button", function() {
                                        e.searching || e.$element.find(".yottie-widget-feed-section-search-form-input").trigger("change")
                                    }), e.$element.on("change", ".yottie-widget-feed-section-search-form-input", function() {
                                        e.searching = !0, e.filterStr = e.$element.find(".yottie-widget-feed-section-search-form-input").val(), e.showLoader(), e.swiper.isEnd = !0, e.swiper.removeAllSlides(), e.fetcher = e.createFetcher(), e.fetcher.prepare().done(function() {
                                            e.swiper.isEnd = !1, e.appendSlide().done(function() {
                                                e.fit(), e.searching = !1, e.auto && setTimeout(function() {
                                                    e.isPlaying || !e.swiper.autoplaying || e.hover || e.swiper.slideNext()
                                                }, e.auto)
                                            })
                                        })
                                    })
                                },
                                fit: function() {
                                    this.fitGrid(), this.fitSlides()
                                },
                                fitInner: function() {
                                    var e = this.$element.find(".yottie-widget-video:first").outerHeight(!0),
                                        t = parseInt(this.$element.find(".yottie-widget-feed-section-slide:first").css("padding-top"), 10),
                                        i = this.grid.rows;
                                    this.$inner.innerHeight(e * i + t)
                                },
                                fitSlides: function(e) {
                                    var t = this;
                                    e = e || t.$element.find(".yottie-widget-feed-section-slide"), setTimeout(function() {
                                        e.css({
                                            paddingTop: t.grid.gutter,
                                            paddingLeft: t.grid.gutter,
                                            height: "100%"
                                        })
                                    }), t.fitVideos(e.find(".yottie-widget-video"))
                                },
                                fitGrid: function() {
                                    var e = this;
                                    if (e.breakpoints && e.breakpoints.length) {
                                        var t;
                                        e.prevBreakpoint = e.currentBreakpoint;
                                        var i = s.width();
                                        if (n.each(e.breakpoints, function(e, n) {
                                                if (i <= n.mw) return t = n, !1
                                            }), t || (t = e.defaultBreakpoint), t !== e.currentBreakpoint) {
                                            e.currentBreakpoint = t, e.grid.setOptions(e.currentBreakpoint), e.redistributeVideos();
                                            var o = e.$element.find(".yottie-widget-video"),
                                                a = e.grid.getItemsCount();
                                            0 !== o.length && o.length < a && e.fetcher.hasNext() && (e.swiper.removeAllSlides(), e.appendSlide(!0).done(function() {
                                                e.appendSlide(!0).done(function() {
                                                    e.grid.setOptions(e.currentBreakpoint), e.redistributeVideos(), e.fitSlides()
                                                })
                                            }))
                                        }
                                    }
                                },
                                fitVideos: function(e) {
                                    var t = this;
                                    setTimeout(function() {
                                        e = e || t.$element.find(".yottie-widget-video"), t.grid.calculate(), o.utils.css(e, {
                                            marginBottom: t.grid.gutter + "px",
                                            marginRight: t.grid.gutter + "px",
                                            width: t.grid.itemWidth + "px"
                                        });
                                        var i, a = e.find(".yottie-widget-video-preview"),
                                            r = e.find(".yottie-widget-video-player iframe"),
                                            s = a.find(".yottie-widget-video-preview-thumbnail"),
                                            l = a.innerWidth(),
                                            p = t.controller.widget.constructor.updateBreakpoints(e, t.constructor.VIDEO_BREAKPOINTS, "yottie-mw-");
                                        i = (l = a.innerWidth()) / 16 * 9 - .6, s.find("img").each(function(t, i) {
                                            var o = n(i),
                                                a = o.attr("data-src"),
                                                r = o.attr("data-maxres-src");
                                            r && 480 < e.width() ? o.attr("src", r) : o.attr("src", a)
                                        }), s.css({
                                            width: l,
                                            height: i
                                        }), "horizontal" === t.videoLayout && 370 < p && e.find(".yottie-widget-video-info").innerHeight(i);
                                        var d = t.controller.widget.app.options.colorVideoPlayIcon ? o.utils.invertColor(t.controller.widget.app.options.colorVideoPlayIcon) : "#fff";
                                        a.find(".subcolor").each(function(e, t) {
                                            t.setAttribute("fill", d)
                                        }), r.length && r.width(l).height(i), t.fitInner()
                                    })
                                },
                                redistributeVideos: function() {
                                    var e = this,
                                        t = [],
                                        i = e.$element.find(".yottie-widget-video"),
                                        o = e.grid.getItemsCount(),
                                        a = Math.ceil(i.length / o);
                                    if (i.length) {
                                        e.redistributing = !0, e.swiper.lockSwipes(), e.swiper.removeAllSlides();
                                        for (var r = 0; r < a; ++r) s = r, l = void 0, l = n(e.controller.renderer.render("feed.slide")), i.slice(s * o, (s + 1) * o).appendTo(l), t.push(l.get(0));
                                        var s, l;
                                        e.swiper.prependSlide(t.reverse()), e.swiper.update(!0), e.swiper.unlockSwipes(), e.redistributing = !1
                                    }
                                },
                                showLoader: function(e) {
                                    var t = this;
                                    t.$loader && !t.$loader.is(".yottie-visible") && (t.loaderTimeout && (clearTimeout(t.loaderTimeout), t.loaderTimeout = null), t.loaderTimeout = setTimeout(function() {
                                        t.$loader.addClass("yottie-visible")
                                    }, parseInt(e, 10)))
                                },
                                hideLoader: function() {
                                    var e = this;
                                    e.$loader && (e.loaderTimeout && (clearTimeout(e.loaderTimeout), e.loaderTimeout = null), e.$loader.removeClass("yottie-visible"))
                                },
                                rebuildPagination: function() {
                                    var e = this.$element.find(".yottie-widget-feed-section-pagination-bullet"),
                                        t = this.swiper.activeIndex,
                                        i = [
                                            [],
                                            []
                                        ],
                                        o = 0;
                                    n.map(e, function(a, r) {
                                        r < e.length - 1 && (r < 1 || t - 1.5 < r && r < t + 1.5 || r > e.length - 3 ? (r === t && (o = 1), n(a).css("display", "inline-block").text(r + 1)) : (i[o].push(r), n(a).css("display", "none").text("...")))
                                    });
                                    var a = i.map(function(e) {
                                        return parseInt(e[0]) + parseInt((e[e.length - 1] - e[0]) / 2)
                                    });
                                    n.map(e, function(e, t) {
                                        t !== a[0] && t !== a[1] || n(e).css("display", "inline-block")
                                    }), n(this.swiper.paginationContainer).html(e)
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./../../defaults": 19,
                            "./../youtube/proxy-storage": 40,
                            "./grid": 27
                        }],
                        26: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie"),
                                a = e("./feed-section");
                            t.exports = o.component("Feed", function() {
                                this.sections = [], this.$e = n("<div></div>")
                            }, {
                                dependencies: ["renderer", "i18n", "youtube", "popup", "widget", "ads"]
                            }, {
                                sections: null,
                                activeSectionId: null,
                                $element: null,
                                $inner: null,
                                $e: null,
                                createFeedElement: function() {
                                    return n(this.renderer.render("feed.container"))
                                },
                                getSection: function(e) {
                                    if (this.hasSection(e)) return this.sections[e]
                                },
                                hasSection: function(e) {
                                    return !!this.sections[e]
                                },
                                setActiveSection: function(e) {
                                    this.hasSection(e) && (n.each(this.sections, function(e, t) {
                                        t.deactivate()
                                    }), this.getSection(e).activate(), this.activeSectionId = e)
                                },
                                getActiveSection: function() {
                                    return this.getSection(this.activeSectionId)
                                },
                                run: function(e) {
                                    var t = this;
                                    t.$element = t.createFeedElement(), t.$inner = t.$element.find(".yottie-widget-feed-inner"), n.each(e, function(e, i) {
                                        var n = new a(t, i);
                                        n.$element.appendTo(t.$inner), n.run(), t.sections.push(n)
                                    }), setTimeout(function() {
                                        t.app.component("groups").fit(), t.ads.init(t.$element)
                                    }, 100)
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./feed-section": 25
                        }],
                        27: [function(e, t, i) {
                            e("./../../../../olivie/src/js/jquery");
                            var n = e("./../../../../olivie/src/js/olivie");
                            t.exports = n.class("Grid", [], function(e, t) {
                                var i = this;
                                i.$element = e, i.options = t, i.columns = i.options.columns, i.rows = i.options.rows, i.gutter = i.options.gutter
                            }, {}, {
                                options: null,
                                columns: null,
                                rows: null,
                                gutter: null,
                                $element: null,
                                setOptions: function(e, t) {
                                    var i = this;
                                    i.columns = e.hasOwnProperty("columns") ? n.utils.parseInt(e.columns) : i.columns, i.rows = e.hasOwnProperty("rows") ? n.utils.parseInt(e.rows) : i.rows, i.gutter = e.hasOwnProperty("gutter") ? n.utils.parseInt(e.gutter) : i.gutter, i.columns || (i.columns = 1), i.rows || (i.rows = 1), i.gutter || (i.gutter = 0), t && i.calculate()
                                },
                                calculate: function() {
                                    var e = this,
                                        t = e.$element.innerWidth(),
                                        i = e.gutter * (e.columns + 1);
                                    e.itemWidth = parseInt((t - i) / e.columns, 10)
                                },
                                getItemsCount: function() {
                                    return this.columns * this.rows
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        28: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie"),
                                a = n(window);
                            t.exports = o.component("Groups", function() {
                                this.$e = n("<div></div>")
                            }, {
                                dependencies: ["renderer", "i18n", "feed"]
                            }, {
                                sourceGroups: null,
                                $element: null,
                                $inner: null,
                                $list: null,
                                $items: null,
                                $e: null,
                                createGroupsElement: function() {
                                    var e = this;
                                    return n(e.renderer.render("groups.container", {
                                        visible: !!(e.app.options.sourceGroups && 1 < e.app.options.sourceGroups.length),
                                        list: e.renderer.render("groups.list", {
                                            groups: e.sourceGroups
                                        }),
                                        controls: e.renderer.render("groups.controls")
                                    }))
                                },
                                fit: function() {
                                    var e = this,
                                        t = e.$list.scrollLeft(),
                                        i = e.$list.get(0).scrollWidth - e.$list.innerWidth();
                                    e.$controlLeft.toggleClass("yottie-widget-nav-control-disabled", t < 10), e.$controlRight.toggleClass("yottie-widget-nav-control-disabled", i - t < 10)
                                },
                                run: function(e) {
                                    var t = this;
                                    t.sourceGroups = e.slice(), n.each(t.sourceGroups, function(e, i) {
                                        i.name || i.title || (i.title = t.i18n.t("Untitled")), i.title || (i.title = i.name)
                                    }), t.$element = t.createGroupsElement(), t.$inner = t.$element.children().first(), t.$list = t.$inner.children().first(), t.$items = t.$list.children(), t.$controlLeft = t.$element.find(".yottie-widget-nav-control-left"), t.$controlRight = t.$element.find(".yottie-widget-nav-control-right"), t.$items.on("click", function() {
                                        var e = n(this),
                                            i = e.children().first().attr("data-yt-id");
                                        t.$items.removeClass("yottie-active"), e.addClass("yottie-active"), t.feed.setActiveSection(i);
                                        var o = e.position().left;
                                        o < 20 && t.$list.animate({
                                            scrollLeft: "-=" + e.innerWidth()
                                        }), o + e.innerWidth() + 20 > t.$list.innerWidth() && t.$list.animate({
                                            scrollLeft: "+=" + e.innerWidth()
                                        })
                                    }), a.resize(function() {
                                        t.fit()
                                    }), t.$list.scroll(function() {
                                        t.fit()
                                    }), t.$controlLeft.on("touchstart click", function() {
                                        var e = t.$items.filter(function() {
                                            return n(this).innerWidth() - 20 - n(this).position().left < t.$list.innerWidth()
                                        }).first();
                                        t.$list.animate({
                                            scrollLeft: e.length ? t.$list.scrollLeft() + e.position().left - 30 : 0
                                        }, 300)
                                    }), t.$controlRight.on("touchstart click", function() {
                                        var e = t.$items.filter(function() {
                                            return n(this).position().left + n(this).innerWidth() + 20 >= t.$list.innerWidth()
                                        }).first();
                                        t.$list.animate({
                                            scrollLeft: e.length ? t.$list.scrollLeft() + e.position().left - 30 : t.$list.get(0).scrollWidth
                                        }, 300)
                                    })
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        29: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie");
                            t.exports = o.component("Header", function() {
                                this.$e = n("<div></div>")
                            }, {
                                AVAILABLE_INFO: ["logo", "banner", "channelName", "channelDescription", "videosCounter", "subscribersCounter", "viewsCounter", "subscribeButton"],
                                dependencies: ["error", "youtube", "i18n", "renderer"]
                            }, {
                                visible: null,
                                channel: null,
                                activeInfo: null,
                                $element: null,
                                $e: null,
                                createHeaderElement: function() {
                                    var e = this;
                                    e.activeInfo = o.utils.unifyMultipleOption(e.app.options.header.info) || [], e.activeInfo = e.activeInfo.filter(function(t) {
                                        return !!~e.constructor.AVAILABLE_INFO.indexOf(t)
                                    });
                                    var t = {};
                                    n.each(e.activeInfo, function(e, i) {
                                        t[i] = !0
                                    }), t.properties = e.channel.id && (t.videosCounter || t.subscribersCounter || t.viewsCounter), t.channel = t.channelName || t.channelDescription, t.logo = t.logo && e.channel.get("snippet.thumbnails.default.url"), t.banner = t.banner && e.channel.get("brandingSettings.image.bannerTabletHdImageUrl"), t.inner = t.logo || t.channel || t.properties || t.banner, t.branding = t.logo || t.banner, t.subscribeButton = e.channel.id && t.subscribeButton;
                                    var i = {};
                                    return i.logo = e.renderer.render("header.logo", {
                                        displaying: t,
                                        id: e.channel.id,
                                        url: e.channel.get("snippet.thumbnails.default.url"),
                                        title: e.channel.get("snippet.title")
                                    }), i.channel = e.renderer.render("header.channel", {
                                        displaying: t,
                                        id: e.channel.id,
                                        name: e.channel.get("snippet.title"),
                                        description: e.channel.get("snippet.description", o.utils.formatAnchors),
                                        videoCount: e.channel.get("statistics.videoCount", o.utils.formatBigNumber) + " " + e.i18n.t("Videos"),
                                        subscriberCount: e.channel.get("statistics.subscriberCount", o.utils.formatBigNumber) + " " + e.i18n.t("Subscribers"),
                                        viewCount: e.channel.get("statistics.viewCount", o.utils.formatBigNumber) + " " + e.i18n.t("Views")
                                    }), i.overlay = e.renderer.render("header.overlay", {
                                        displaying: t
                                    }), i.banner = e.renderer.render("header.banner", {
                                        displaying: t,
                                        url: e.channel.get("brandingSettings.image.bannerTabletHdImageUrl")
                                    }), i.subscribe = e.renderer.render("header.subscribe", {
                                        displaying: t
                                    }), i.inner = e.renderer.render("header.inner", {
                                        displaying: t,
                                        parts: i
                                    }), n(e.renderer.render("header.container", {
                                        visible: e.visible,
                                        layout: e.app.options.header.layout,
                                        displaying: t,
                                        parts: i
                                    }))
                                },
                                run: function() {
                                    var e, t = this,
                                        i = n.Deferred();
                                    if (t.visible = t.app.options.header.visible, t.app.options.channel) {
                                        if ("string" !== n.type(t.app.options.channel)) return t;
                                        if (!(e = t.youtube.parseSource(t.app.options.channel)) || "youtube#channel" !== e.kind) return t.error.throw('Option "channel" contents invalid channel or user url.'), t;
                                        t.youtube.model(e.kind).find(e.criteria, "snippet,brandingSettings,statistics,contentDetails").done(function(e) {
                                            t.channel = e, i.resolve()
                                        }).fail(function(e) {
                                            e = e || 'Option "channel" contents invalid channel or user url.', t.error.throw(e)
                                        })
                                    } else t.channel = t.youtube.model("youtube#channel").create(), i.resolve();
                                    return i.done(function() {
                                        t.channel && (t.app.options.header.channelName && t.channel.set("snippet.title", t.app.options.header.channelName), t.app.options.header.channelDescription && t.channel.set("snippet.description", t.app.options.header.channelDescription), t.app.options.header.channelLogo ? t.channel.set("snippet.thumbnails.default.url", t.app.options.header.channelLogo) : t.channel.id && t.channel.set("snippet.thumbnails.default.url", t.youtube.resizeLogo(t.channel.get("snippet.thumbnails.default.url"), 100)), t.app.options.header.channelBanner && t.channel.set("brandingSettings.image.bannerTabletHdImageUrl", t.app.options.header.channelBanner), t.visible = t.visible && (t.channel.get("snippet.title") || t.channel.get("snippet.description") || t.channel.get("snippet.thumbnails.default.url") || t.channel.get("brandingSettings.image.bannerImageUrl")), t.$element = t.createHeaderElement(), t.app.options.noCookies || t.channel.renderButton(t.$element.find(".yottie-widget-header-subscribe-button").get(0))), setTimeout(function() {
                                            t.trigger("ready", [t])
                                        })
                                    }), t
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        30: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie"),
                                a = e("./../../free-link"),
                                r = e("./../../deactivation"),
                                s = e("./../../custom-css");
                            t.exports = o.component("Widget", function() {
                                this.$e = n("<div></div>")
                            }, {
                                dependencies: ["renderer"],
                                BREAKPOINTS: [1354, 1056, 780, 640, 460, 410],
                                updateBreakpoints: function(e, t, i) {
                                    var o = {},
                                        a = e.innerWidth(),
                                        r = a;
                                    return n.each(t, function(e, t) {
                                        a <= t ? (o[i + t] = !0, r = t) : o[i + t] = !1
                                    }), e.removeClass(Object.keys(o).join(" ")), e.addClass(Object.keys(o).filter(function(e) {
                                        return o[e]
                                    }).join(" ")), r
                                }
                            }, {
                                $e: null,
                                run: function() {
                                    var e = this,
                                        t = n(e.renderer.render("widget"));
                                    o.utils.css(e.app.$element, {
                                        clear: "both"
                                    }), t.find("yottie[data-part]").each(function(t, i) {
                                        var o = n(i),
                                            a = o.attr("data-part"),
                                            r = e.app.component(a);
                                        r && r.$element ? o.replaceWith(r.$element) : o.remove()
                                    }), t.appendTo(e.app.$element), e.app.$element.attr("id", "yottie_" + e.app.getId()), e.app.$element.css({
                                        maxWidth: e.app.options.width
                                    }), e.fit(), n(window).resize(function() {
                                        e.fit()
                                    }), e.app.$element.css({
                                        position: "relative"
                                    }), !0 !== e.app.options.showElfsightLogo || e.app.freelink || (e.app.freelink = new a(e, {
                                        selector: ".yottie-widget-inner",
                                        text: "Free Youtube Gallery widget",
                                        link: "https://elfsight.com/youtube-channel-plugin-yottie/?utm_source=websites&utm_medium=clients&utm_content=yottie&utm_term=" + e.app.options.websiteUrl + "&utm_campaign=free-widget",
                                        appsLink: "https://apps.elfsight.com/panel/applications/yottie?show_pricing=true&remove_logo=true&utm_source=websites&utm_medium=clients&utm_content=yottie&utm_term=" + e.app.options.websiteUrl + "&utm_campaign=remove-link",
                                        owner: e.app.options.owner,
                                        platform: e.app.options.platform
                                    })), !0 !== e.app.options.deactivate || e.app.deactivation || (e.app.deactivation = new r(e, {
                                        selector: ".yottie-widget-inner",
                                        text: "Widget is deactivated<br>Visit Elfsight Apps",
                                        link: "https://apps.elfsight.com/panel/applications/yottie?utm_source=websites&utm_medium=clients&utm_content=yottie&utm_term=" + e.app.options.websiteUrl + "&utm_campaign=deactivated-widget"
                                    })), e.app.options.customCSS && (e.app.customCss = new s(e, e.app.options.customCSS))
                                },
                                fit: function() {
                                    this.constructor.updateBreakpoints(this.app.$element, this.constructor.BREAKPOINTS, "yottie-mw-")
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./../../custom-css": 17,
                            "./../../deactivation": 18,
                            "./../../free-link": 22
                        }],
                        31: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie");
                            t.exports = o.component("Error", function() {}, {
                                dependencies: ["renderer"]
                            }, {
                                $element: null,
                                $content: null,
                                $msg: null,
                                createErrorElement: function() {
                                    return n(this.renderer.render("error.container"))
                                },
                                run: function() {
                                    var e = this;
                                    e.$element = e.createErrorElement(), e.$content = e.$element.find(".yottie-error-content"), e.$element.appendTo(e.app.$element)
                                },
                                throw: function(e) {
                                    var t = this;
                                    t.app.get("options.debug") || t.app.$element.hide(), t.$element.addClass("yottie-visible");
                                    var i = n(t.renderer.render("error.content", {
                                        message: e
                                    }));
                                    t.$msg ? t.$msg = t.$msg.replaceWith(i) : (t.$msg = i, t.$msg.appendTo(t.$content))
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        32: [function(e, t, i) {
                            e("./../../../../olivie/src/js/jquery");
                            var n = e("./../../../../olivie/src/js/olivie"),
                                o = e("./model");
                            t.exports = function(e) {
                                return n.class("Channel", [o], function(e) {
                                    this.getParent("Model").call(this, e)
                                }, {
                                    client: e,
                                    path: "/channels"
                                }, {
                                    renderButton: function(e) {
                                        var t = this;
                                        setTimeout(function() {
                                            if (window.gapi) gapi.ytsubscribe.render(e, {
                                                channelId: t.id
                                            });
                                            else {
                                                var i = document.createElement("script");
                                                i.src = "https://apis.google.com/js/platform.js", i.onload = function() {
                                                    gapi.ytsubscribe.render(e, {
                                                        channelId: t.id
                                                    })
                                                }, document.head.appendChild(i)
                                            }
                                        }, 300)
                                    }
                                })
                            }
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./model": 35
                        }],
                        33: [function(e, t, i) {
                            e("./../../../../olivie/src/js/jquery");
                            var n = e("./../../../../olivie/src/js/olivie"),
                                o = e("./model");
                            t.exports = function(e) {
                                return n.class("CommentThread", [o], function(e) {
                                    this.getParent("Model").call(this, e)
                                }, {
                                    client: e,
                                    path: "/commentThreads"
                                }, {
                                    getText: function() {
                                        var e = this.get("snippet.topLevelComment.snippet.textDisplay");
                                        return e ? e.replace(/<a([^>]+)>/, '<a$1 target="_blank" rel="nofollow">') : null
                                    }
                                })
                            }
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./model": 35
                        }],
                        34: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie");
                            t.exports = o.class("Fetcher", [], function(e, t) {
                                e && t && (this.params = e, this.part = t)
                            }, {
                                create: function(e, t) {
                                    return new this(e, t)
                                },
                                fetchDone: function(e, t, i, n, o) {
                                    var a = this;
                                    Array.prototype.push.apply(n, e.items), t.nextPageToken = e.nextPageToken || null, t.hasNextPage = !!t.nextPageToken;
                                    var r = o - n.length;
                                    t.hasNextPage && n.length < o ? t.fetch(r, i, n, o) : (n = n.map(function(e) {
                                        return a.model.create(e)
                                    }), i.resolve(n, t))
                                }
                            }, {
                                params: null,
                                part: null,
                                nextPageToken: null,
                                hasNextPage: !0,
                                hasNext: function() {
                                    return this.hasNextPage
                                },
                                fetch: function(e, t, i, o) {
                                    var a = this;
                                    o = o || e, e = e <= a.constructor.model.MAX_RESULTS_MAX ? e : a.constructor.model.MAX_RESULTS_MAX, t = t || n.Deferred(), i = i || [];
                                    var r = n.extend({}, a.params, {
                                        part: a.part,
                                        maxResults: e
                                    });
                                    return a.nextPageToken && (r.pageToken = a.nextPageToken), a.hasNextPage ? a.constructor.model.client.get(a.constructor.model.path, r).done(function(e) {
                                        a.constructor.fetchDone(e, a, t, i, o)
                                    }) : t.reject(), t.promise()
                                },
                                fetchAll: function(e) {
                                    var t = this;
                                    e = e || n.Deferred();
                                    var i = n.extend({}, t.params, {
                                        part: t.part,
                                        maxResults: t.constructor.model.MAX_RESULTS_MAX
                                    });
                                    return t.hasNextPage && t.constructor.model.client.get(t.constructor.model.path, i).done(function(i) {
                                        t.constructor.fetchDone(i, t, e, [], i.pageInfo.totalResults)
                                    }), e.promise()
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        35: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie");
                            t.exports = o.class("Model", [], function(e) {
                                e && this.fill(e)
                            }, {
                                MAX_RESULTS_MIN: 0,
                                MAX_RESULTS_MAX: 50,
                                find: function(e, t, i) {
                                    var o = this;
                                    if (e && t) return i = i || n.Deferred(), e.maxResults = 1, e.part = t, o.client.get(o.path, e).done(function(e) {
                                        e.items && e.items.length ? i.resolve(o.create(e.items[0])) : i.reject(e.error ? e.error.message : null)
                                    }), i.promise()
                                },
                                findAll: function(e, t, i, o) {
                                    var a = this;
                                    if (e && t) return o = o || n.Deferred(), e.part = t, i && (e.maxResults = i), a.client.get(a.path, e).done(function(e) {
                                        var t = [];
                                        e.items && e.items.length ? (n.each(e.items, function(e, i) {
                                            t.push(a.create(i))
                                        }), o.resolve(t)) : e.items && !e.items.length ? o.resolve(e.items) : o.reject(e.error ? e.error.message : null)
                                    }), o.promise()
                                },
                                create: function(e) {
                                    return new this(e)
                                }
                            }, {
                                fill: function(e) {
                                    n.extend(this, e)
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        36: [function(e, t, i) {
                            e("./../../../../olivie/src/js/jquery");
                            var n = e("./../../../../olivie/src/js/olivie"),
                                o = e("./model");
                            t.exports = function(e) {
                                return n.class("PlaylistItem", [o], function(e) {
                                    this.getParent("Model").call(this, e)
                                }, {
                                    client: e,
                                    path: "/playlistItems"
                                }, {})
                            }
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./model": 35
                        }],
                        37: [function(e, t, i) {
                            e("./../../../../olivie/src/js/jquery");
                            var n = e("./../../../../olivie/src/js/olivie"),
                                o = e("./fetcher");
                            t.exports = function(e) {
                                return n.class("PlaylistItemsFetcher", [o], function(e, t) {
                                    this.getParent("Fetcher").call(this, e, t)
                                }, {
                                    model: e
                                }, {})
                            }
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./fetcher": 34
                        }],
                        38: [function(e, t, i) {
                            e("./../../../../olivie/src/js/jquery");
                            var n = e("./../../../../olivie/src/js/olivie"),
                                o = e("./model");
                            t.exports = function(e) {
                                return n.class("Playlist", [o], function(e) {
                                    this.getParent("Model").call(this, e)
                                }, {
                                    client: e,
                                    path: "/playlists"
                                }, {})
                            }
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./model": 35
                        }],
                        39: [function(e, t, i) {
                            e("./../../../../olivie/src/js/jquery");
                            var n = e("./../../../../olivie/src/js/olivie"),
                                o = e("./fetcher");
                            t.exports = function(e) {
                                return n.class("PlaylistsFetcher", [o], function(e, t) {
                                    this.getParent("Fetcher").call(this, e, t)
                                }, {
                                    model: e
                                }, {})
                            }
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./fetcher": 34
                        }],
                        40: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie");
                            t.exports = o.class("ProxyStorage", [], function(e, t) {
                                var i = this;
                                i.fetcher = e, i.orderingRules = [], t = o.utils.unifyMultipleOption(t) || [], n.each(t, function(e, t) {
                                    t = t.split("#");
                                    var n = i.constructor.ORDER_FIELD_ALIASES[t[0]] || t[0],
                                        o = t[1] || "asc";
                                    i.orderingRules.push({
                                        field: n,
                                        direction: o
                                    })
                                })
                            }, {
                                ORDER_FIELD_ALIASES: {
                                    likes: "statistics.likeCount",
                                    dislikes: "statistics.dislikeCount",
                                    views: "statistics.viewCount",
                                    comments: "statistics.commentCount",
                                    position: "__relatedPlaylistItem.snippet.position"
                                }
                            }, {
                                fetcher: null,
                                result: null,
                                orderingRules: null,
                                pointer: 0,
                                prepare: function() {
                                    var e = this,
                                        t = n.Deferred();
                                    return e.fetcher.prepare().done(function() {
                                        e.fetcher.fetchAll().done(function(i) {
                                            e.result = i, e.sortResult(), t.resolve()
                                        })
                                    }), t.promise()
                                },
                                sortResult: function() {
                                    var e = this;
                                    n.each(e.orderingRules, function(t, i) {
                                        var n;
                                        "random" === i.field ? o.utils.shuffle(e.result) : ((n = jQuery.yottie.orderFunctions[i.field]) || (n = function(e, t) {
                                            var n = o.utils.getProperty(e, i.field, o.utils.parseInt),
                                                a = o.utils.getProperty(t, i.field, o.utils.parseInt);
                                            return n < a ? -1 : a < n ? 1 : 0
                                        }), e.result.sort(n), "desc" === i.direction && e.result.reverse())
                                    })
                                },
                                isReady: function() {
                                    return this.fetcher.isReady()
                                },
                                hasNext: function() {
                                    return this.result.length > this.pointer
                                },
                                fetch: function(e, t, i, o) {
                                    var a, r, s, l, p = this;
                                    return o = o || n.Deferred(), p.isReady() && p.hasNext() ? (p.pointer += e, "" !== t && (p.result = (r = p.result, l = (s = function(e) {
                                        return e.toLowerCase().trim().replace(/[_+-.,!@#$%^&*();\/|<>"':?\d]/g, "")
                                    })(t), r = r.filter(function(e) {
                                        var t = e.snippet,
                                            n = s(t.title),
                                            o = s(t.description);
                                        return "title&description" === i ? -1 !== n.indexOf(l) || -1 !== o.indexOf(l) : -1 !== n.indexOf(l)
                                    }))), a = p.result.slice(p.pointer - e, p.pointer), o.resolve(a)) : o.reject(), o.promise()
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        41: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie");
                            t.exports = o.class("UniversalVideoFetcher", [], function(e, t, i) {
                                var n = this;
                                n.rawSource = e, n.part = t, n.youtube = i, n.preparedSource = [], n.fetchers = [], n.stack = [], n.videoPlaylistItemRelations = {}
                            }, {
                                stackSortingFunc: function(e, t) {
                                    var i = e.getPublishedTimestamp(),
                                        n = t.getPublishedTimestamp();
                                    return n < i ? -1 : i < n ? 1 : 0
                                }
                            }, {
                                youtube: null,
                                rawSource: null,
                                preparedSource: null,
                                fetchers: null,
                                stack: null,
                                part: null,
                                videoPlaylistItemRelations: null,
                                isReady: function() {
                                    return !!this.fetchers.length
                                },
                                sortStack: function() {
                                    this.stack.sort(this.constructor.stackSortingFunc)
                                },
                                hasNext: function() {
                                    return this.stack && this.stack.length || this.fetchers.some(function(e) {
                                        return e.hasNext()
                                    })
                                },
                                prepare: function() {
                                    var e = this,
                                        t = n.Deferred(),
                                        i = [];
                                    return n.each(e.rawSource, function(t, a) {
                                        var r = n.Deferred();
                                        "youtube#channel" === a.kind ? e.youtube.model(a.kind).find(a.criteria, "contentDetails").done(function(e) {
                                            var t = o.utils.getProperty(e, "contentDetails.relatedPlaylists.uploads");
                                            t && r.resolve({
                                                kind: "youtube#playlist",
                                                criteria: {
                                                    id: t
                                                }
                                            })
                                        }) : r.resolve(a), i.push(r)
                                    }), n.when.apply(n, i).done(function() {
                                        var i = [],
                                            o = [];
                                        n.each(arguments, function(e, t) {
                                            "youtube#playlist" === t.kind ? i.push(t) : o.push(t.criteria.id)
                                        }), e.preparedSource = i, o.length && e.preparedSource.push({
                                            kind: "youtube#video",
                                            criteria: {
                                                id: o
                                            }
                                        }), n.each(e.preparedSource, function(t, i) {
                                            var n, o, a, r;
                                            r = "youtube#playlist" === i.kind ? (a = "youtube#playlistItem", o = {
                                                playlistId: i.criteria.id
                                            }, "contentDetails,snippet") : (a = i.kind, o = {
                                                id: i.criteria.id.join(",")
                                            }, e.part), n = e.youtube.fetcher(a).create(o, r), e.fetchers.push(n)
                                        }), t.resolve()
                                    }), t.promise()
                                },
                                fetch: function(e, t, i, o) {
                                    t = t || "", i = i || "title";
                                    var a, r, s = this;
                                    o = o || n.Deferred();
                                    var l = [],
                                        p = s.hasNext();
                                    return s.isReady() ? s.stack.length >= e || !p && s.stack.length ? (a = s.stack.slice(0, e), s.stack.splice(0, e), o.resolve(a)) : p ? (n.each(s.fetchers, function(e, t) {
                                        t.hasNext() && !l.length && l.push(t.fetch(50))
                                    }), !l.length && s.stack && s.stack.length && (r = s.stack.slice(), s.stack = [], o.resolve(r)), n.when.apply(n, l).done(function() {
                                        var a = [],
                                            r = "object" === n.type(arguments[1]) ? [arguments] : arguments;
                                        n.each(r, function(e, n) {
                                            if (n) {
                                                var o, r, l, p = n[0],
                                                    d = n[1];
                                                "" !== t && (o = p, l = (r = function(e) {
                                                    return e.toLowerCase().trim().replace(/[_+-.,!@#$%^&*();\/|<>"':?\d]/g, "")
                                                })(t), p = o = o.filter(function(e) {
                                                    var t = e.snippet,
                                                        n = r(t.title),
                                                        o = r(t.description);
                                                    return "title&description" === i ? -1 !== n.indexOf(l) || -1 !== o.indexOf(l) : -1 !== n.indexOf(l)
                                                })), "VideoFetcher" === d.constructor.id ? Array.prototype.push.apply(s.stack, p) : Array.prototype.push.apply(a, p.map(function(e) {
                                                    return (s.videoPlaylistItemRelations[e.contentDetails.videoId] = e).contentDetails.videoId
                                                }))
                                            }
                                        });
                                        var l = n.Deferred();
                                        a.length ? s.youtube.model("youtube#video").findAllVideos({
                                            id: a.join(",")
                                        }, s.part).done(function(e) {
                                            Array.prototype.push.apply(s.stack, e), n.each(s.stack, function(e, t) {
                                                t.__relatedPlaylistItem = s.videoPlaylistItemRelations[t.id]
                                            }), l.resolve()
                                        }) : s.fetch(e, t, i, o), l.done(function() {
                                            s.fetch(e, t, i, o)
                                        })
                                    })) : o.reject(1) : o.reject(0), o.promise()
                                },
                                fetchAll: function(e, t) {
                                    var i = this;
                                    return e = e || n.Deferred(), t = t || [], i.fetch(50).done(function(n) {
                                        Array.prototype.push.apply(t, n), i.fetchAll(e, t)
                                    }).fail(function() {
                                        e.resolve(t)
                                    }), e.promise()
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14
                        }],
                        42: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie"),
                                a = e("./fetcher");
                            t.exports = function(e) {
                                return o.class("VideoFetcher", [a], function(e, t) {
                                    this.getParent("Fetcher").call(this, e, t), this.stack = []
                                }, {
                                    model: e
                                }, {
                                    stack: null,
                                    hasNext: function() {
                                        return this.hasNextPage || this.stack.length
                                    },
                                    fetch: function(e, t, i, o) {
                                        var a = this;
                                        o = o || e, t = t || n.Deferred(), i = i || [];
                                        var r = n.Deferred();
                                        return a.hasNext() ? (a.stack.length ? r.resolve() : (a.hasNextPage = !1, a.constructor.model.findAllVideos({
                                            id: a.params.id
                                        }, a.part).done(function(e) {
                                            a.stack = e, r.resolve()
                                        }).fail(function() {
                                            t.reject()
                                        })), r.done(function() {
                                            var i = a.stack.slice(0, e);
                                            a.stack.splice(0, e), i.length ? t.resolve(i, a) : t.reject()
                                        })) : t.reject(), t.promise()
                                    }
                                })
                            }
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./fetcher": 34
                        }],
                        43: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie"),
                                a = e("./model");
                            t.exports = function(e) {
                                return o.class("Video", [a], function(e) {
                                    this.getParent("Model").call(this, e)
                                }, {
                                    DURATION_REGEX: /\d+[A-Z]/g,
                                    client: e,
                                    path: "/videos",
                                    findAllVideos: function(e, t, i, o, a) {
                                        var r, s = this;
                                        return o = o || n.Deferred(), e && e.id ? (e.id = "string" === n.type(e.id) ? e.id.split(",") : e.id, e.id = i ? e.id.slice(0, i) : e.id, a || e.id.length > s.MAX_RESULTS_MAX ? (a = a || [], r = n.extend(!1, {}, e, {
                                            id: e.id.slice(0, s.MAX_RESULTS_MAX).join(",")
                                        }), s.findAll(r, t).done(function(i) {
                                            Array.prototype.push.apply(a, i);
                                            var r, l = e.id.slice(s.MAX_RESULTS_MAX);
                                            l.length ? (r = n.extend(!1, {}, e, {
                                                id: l
                                            }), s.findAllVideos(r, t, null, o, a)) : o.resolve(a)
                                        }).fail(function(e) {
                                            e && console.error(e)
                                        })) : (e.id = e.id.join(","), s.findAll(e, t, i, o))) : s.findAll(e, t, i, o), o.promise()
                                    }
                                }, {
                                    getPublishedTimestamp: function() {
                                        return this.get("snippet.publishedAt", Date.parse)
                                    },
                                    parseDuration: function() {
                                        var e = {},
                                            t = this.get("contentDetails.duration");
                                        if (t) {
                                            var i = t.match(this.constructor.DURATION_REGEX);
                                            return n.each(i, function(t, i) {
                                                var n = i.substr(i.length - 1).toLowerCase(),
                                                    o = "0" + parseInt(i.substr(0, i.length - 1), 10);
                                                o = o.substr(-2), e[n] = o
                                            }), e
                                        }
                                    }
                                })
                            }
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./model": 35
                        }],
                        44: [function(e, t, i) {
                            var n = e("./../../../../olivie/src/js/jquery"),
                                o = e("./../../../../olivie/src/js/olivie"),
                                a = e("./universal-video-fetcher"),
                                r = e("./channel"),
                                s = e("./playlist"),
                                l = e("./playlist-item"),
                                p = e("./video"),
                                d = e("./comment-thread"),
                                c = e("./playlists-fetcher"),
                                u = e("./playlist-items-fetcher"),
                                m = e("./video-fetcher");
                            t.exports = o.component("Youtube", function() {}, {
                                dependencies: ["client"],
                                SOURCE_DETERMINANTS: [{
                                    kind: "youtube#channel",
                                    regex: /^https?:\/\/(www\.)?youtube\.com\/channel\/([^\/]+)\/?$/,
                                    func: function(e) {
                                        return {
                                            criteria: {
                                                id: e[2]
                                            }
                                        }
                                    }
                                }, {
                                    kind: "youtube#channel",
                                    regex: /^https?:\/\/(www\.)?youtube\.com\/user\/([^\/]+)\/?$/,
                                    func: function(e) {
                                        return {
                                            criteria: {
                                                forUsername: e[2]
                                            }
                                        }
                                    }
                                }, {
                                    kind: "youtube#playlist",
                                    regex: /^https?:\/\/(www\.)?youtube\.com\/playlist\/?\?list=([^$]+)$/,
                                    func: function(e) {
                                        return {
                                            criteria: {
                                                id: e[2]
                                            }
                                        }
                                    }
                                }, {
                                    kind: "youtube#video",
                                    regex: /^https?:\/\/(www\.)?youtube\.com\/watch\/?\?v=([^$&]+)/,
                                    func: function(e) {
                                        return {
                                            criteria: {
                                                id: e[2]
                                            }
                                        }
                                    }
                                }],
                                formatNumberDigits: function(e) {
                                    return o.utils.numberFormat(e, 0, null, " ")
                                }
                            }, {
                                models: null,
                                register: function(e) {
                                    var t = this;
                                    t.getParent("Component").prototype.register.call(t, e), t.models = {
                                        "youtube#channel": r(t.client),
                                        "youtube#playlist": s(t.client),
                                        "youtube#playlistItem": l(t.client),
                                        "youtube#video": p(t.client),
                                        "youtube#commentThread": d(t.client)
                                    }, t.fetchers = {
                                        "youtube#playlist": c(t.model("youtube#playlist")),
                                        "youtube#playlistItem": u(t.model("youtube#playlistItem")),
                                        "youtube#video": m(t.model("youtube#video"))
                                    }
                                },
                                hasModel: function(e) {
                                    return !!this.models[e]
                                },
                                model: function(e) {
                                    if (this.hasModel(e)) return this.models[e]
                                },
                                hasFetcher: function(e) {
                                    return !!this.fetchers[e]
                                },
                                fetcher: function(e) {
                                    if (this.hasFetcher(e)) return this.fetchers[e]
                                },
                                createUniversalVideoFetcher: function(e, t) {
                                    return new a(e, t, this)
                                },
                                parseSource: function(e) {
                                    var t = null;
                                    return n.each(this.constructor.SOURCE_DETERMINANTS, function(i, o) {
                                        var a = e.match(o.regex);
                                        if (a) return t = n.extend({
                                            kind: o.kind
                                        }, o.func(a)), !1
                                    }), t
                                },
                                resizeLogo: function(e, t) {
                                    return e.replace(/\/s\d+-c-k-no/, "/s" + parseInt(t, 10) + "-c-k-no")
                                }
                            })
                        }, {
                            "./../../../../olivie/src/js/jquery": 7,
                            "./../../../../olivie/src/js/olivie": 14,
                            "./channel": 32,
                            "./comment-thread": 33,
                            "./playlist": 38,
                            "./playlist-item": 36,
                            "./playlist-items-fetcher": 37,
                            "./playlists-fetcher": 39,
                            "./universal-video-fetcher": 41,
                            "./video": 43,
                            "./video-fetcher": 42
                        }],
                        45: [function(e, t, i) {
                            t.exports = {
                                default: {
                                    header: {
                                        bg: "rgb(250, 250, 250)",
                                        bannerOverlay: "rgba(255, 255, 255, 0.92)",
                                        channelName: "rgb(17, 17, 17)",
                                        channelNameHover: "rgb(17, 17, 17)",
                                        channelDescription: "rgb(17, 17, 17)",
                                        anchor: "rgb(17, 17, 17)",
                                        anchorHover: "rgb(17, 17, 17)",
                                        counters: "rgba(17, 17, 17, 0.7)"
                                    },
                                    groups: {
                                        bg: "rgb(250, 250, 250)",
                                        link: "rgba(17, 17, 17, 0.5)",
                                        linkHover: "rgb(17, 17, 17)",
                                        linkActive: "rgb(17, 17, 17)",
                                        highlightHover: "rgb(17, 17, 17)",
                                        highlightActive: "rgb(17, 17, 17)"
                                    },
                                    content: {
                                        bg: "rgb(255, 255, 255)",
                                        arrows: "rgb(0, 0, 0)",
                                        arrowsHover: "rgb(0, 0, 0)",
                                        arrowsBg: "rgba(255, 255, 255, 0.8)",
                                        arrowsBgHover: "rgba(255, 255, 255, 1)",
                                        scrollbarBg: "rgb(204, 204, 204)",
                                        scrollbarSliderBg: "rgba(0, 0, 0, 0.4)"
                                    },
                                    video: {
                                        bg: "rgb(255, 255, 255)",
                                        overlay: "rgba(255, 255, 255, 0.95)",
                                        playIcon: "rgba(255, 0, 0, 0.8)",
                                        playIconHover: "rgba(255, 0, 0, 1)",
                                        duration: "rgb(255, 255, 255)",
                                        durationBg: "rgba(34, 34, 34, 0.81)",
                                        title: "rgb(17, 17, 17)",
                                        titleHover: "rgb(17, 17, 17)",
                                        date: "rgba(17, 17, 17, 0.7)",
                                        description: "rgb(17, 17, 17)",
                                        anchor: "rgb(26, 137, 222)",
                                        anchorHover: "rgb(47, 165, 255)",
                                        counters: "rgba(17, 17, 17, 0.7)"
                                    },
                                    popup: {
                                        bg: "rgb(255, 255, 255)",
                                        overlay: "rgba(0, 0, 0, 0.7)",
                                        title: "rgb(17, 17, 17)",
                                        channelName: "rgb(17, 17, 17)",
                                        channelNameHover: "rgb(17, 17, 17)",
                                        viewsCounter: "rgba(17, 17, 17, 0.7)",
                                        likesRatio: "rgb(47, 165, 255)",
                                        dislikesRatio: "rgb(207, 207, 207)",
                                        likesCounter: "rgba(17, 17, 17, 0.5)",
                                        dislikesCounter: "rgba(17, 17, 17, 0.5)",
                                        share: "rgba(17, 17, 17, 0.5)",
                                        date: "rgba(17, 17, 17, 0.7)",
                                        description: "rgb(17, 17, 17)",
                                        anchor: "rgb(26, 137, 222)",
                                        anchorHover: "rgb(47, 165, 255)",
                                        descriptionMoreButton: "rgba(17, 17, 17, 0.5)",
                                        descriptionMoreButtonHover: "rgba(17, 17, 17, 0.7)",
                                        commentsUsername: "rgb(17, 17, 17)",
                                        commentsUsernameHover: "rgb(17, 17, 17)",
                                        commentsPassedTime: "rgba(17, 17, 17, 0.7)",
                                        commentsText: "rgb(17, 17, 17)",
                                        commentsLikes: "rgba(17, 17, 17, 0.5)",
                                        controls: "rgb(160, 160, 160)",
                                        controlsHover: "rgb(220, 220, 220)",
                                        controlsMobile: "rgb(220, 220, 220)",
                                        controlsMobileBg: "rgba(255, 255, 255, 0)"
                                    }
                                },
                                dark: {
                                    header: {
                                        bg: "rgb(51, 51, 51)",
                                        bannerOverlay: "rgba(51, 51, 51, 0.81)",
                                        channelName: "rgb(255, 255, 255)",
                                        channelNameHover: "rgb(77, 178, 255)",
                                        channelDescription: "rgb(255, 255, 255)",
                                        anchor: "rgb(77, 178, 255)",
                                        anchorHover: "rgb(255, 255, 255)",
                                        counters: "rgb(160, 160, 160)"
                                    },
                                    groups: {
                                        bg: "rgb(51, 51, 51)",
                                        link: "rgba(255, 255, 255, 0.5)",
                                        linkHover: "rgb(255, 66, 66)",
                                        linkActive: "rgb(255, 66, 66)",
                                        highlight: "rgb(85, 85, 85)",
                                        highlightHover: "rgb(255, 66, 66)",
                                        highlightActive: "rgb(255, 66, 66)"
                                    },
                                    content: {
                                        bg: "rgb(51, 51, 51)",
                                        arrows: "rgb(34, 34, 34)",
                                        arrowsHover: "rgb(255, 0, 0)",
                                        arrowsBg: "rgba(255, 255, 255, 0.4)",
                                        arrowsBgHover: "rgba(255, 255, 255, 0.8)",
                                        scrollbarBg: "rgb(85, 85, 85)",
                                        scrollbarSliderBg: "rgba(255, 255, 255, 0.4)"
                                    },
                                    video: {
                                        bg: "rgb(28, 28, 28)",
                                        overlay: "rgba(28, 28, 28, 0.9)",
                                        playIcon: "rgba(255, 0, 0, 0.8)",
                                        playIconHover: "rgba(255, 0, 0, 1)",
                                        duration: "rgb(255, 255, 255)",
                                        durationBg: "rgba(28, 28, 28, 0.81)",
                                        title: "rgb(200, 200, 200)",
                                        titleHover: "rgb(77, 178, 255)",
                                        date: "rgb(116, 116, 116)",
                                        description: "rgb(200, 200, 200)",
                                        anchor: "rgb(42, 163, 255)",
                                        anchorHover: "rgb(77, 178, 255)",
                                        counters: "rgb(112, 112, 112)"
                                    },
                                    popup: {
                                        bg: "rgb(51, 51, 51)",
                                        overlay: "rgba(0, 0, 0, 0.7)",
                                        title: "rgb(255, 255, 255)",
                                        channelName: "rgb(255, 255, 255)",
                                        channelNameHover: "rgb(77, 178, 255)",
                                        viewsCounter: "rgb(255, 255, 255)",
                                        likesRatio: "rgb(47, 165, 255)",
                                        dislikesRatio: "rgb(100, 100, 100)",
                                        likesCounter: "rgb(144, 144, 144)",
                                        dislikesCounter: "rgb(144, 144, 144)",
                                        share: "rgb(144, 144, 144)",
                                        date: "rgb(255, 255, 255)",
                                        description: "rgb(255, 255, 255)",
                                        anchor: "rgb(42, 163, 255)",
                                        anchorHover: "rgb(77, 178, 255)",
                                        descriptionMoreButton: "rgb(120, 120, 120)",
                                        descriptionMoreButtonHover: "rgb(255, 255, 255)",
                                        commentsUsername: "rgb(255, 255, 255)",
                                        commentsUsernameHover: "rgb(77, 178, 255)",
                                        commentsPassedTime: "rgb(116, 116, 116)",
                                        commentsText: "rgb(255, 255, 255)",
                                        commentsLikes: "rgb(116, 116, 116)",
                                        controls: "rgb(160, 160, 160)",
                                        controlsHover: "rgb(220, 220, 220)",
                                        controlsMobile: "rgb(220, 220, 220)",
                                        controlsMobileBg: "rgba(255, 255, 255, 0)"
                                    }
                                },
                                red: {
                                    header: {
                                        bg: "rgb(197, 17, 9)",
                                        bannerOverlay: "rgb(197, 17, 9)",
                                        channelName: "rgb(255, 255, 255)",
                                        channelNameHover: "rgba(255, 255, 255, 0.9)",
                                        channelDescription: "rgb(255, 255, 255)",
                                        anchor: "rgba(255, 255, 255, 0.9)",
                                        anchorHover: "rgb(255, 255, 255)",
                                        counters: "rgba(255, 255, 255, 0.6)"
                                    },
                                    groups: {
                                        bg: "rgb(230, 33, 23)",
                                        link: "rgba(255, 255, 255, 0.6)",
                                        linkHover: "rgb(255, 255, 255)",
                                        linkActive: "rgb(255, 255, 255)",
                                        highlight: "rgba(255, 255, 255, 0.4)",
                                        highlightHover: "rgb(255, 255, 255)",
                                        highlightActive: "rgb(255, 255, 255)"
                                    },
                                    content: {
                                        bg: "rgb(255, 255, 255)",
                                        arrows: "rgb(255, 255, 255)",
                                        arrowsHover: "rgb(0, 198, 255)",
                                        arrowsBg: "rgba(0, 0, 0, 0.7)",
                                        arrowsBgHover: "rgba(0, 0, 0, 0.95)",
                                        scrollbarBg: "rgb(223, 223, 223)",
                                        scrollbarSliderBg: "rgba(133, 133, 133, 0.4)"
                                    },
                                    video: {
                                        bg: "rgb(255, 255, 255)",
                                        overlay: "rgba(255, 255, 255, 0.95)",
                                        playIcon: "rgba(255, 0, 0, 0.8)",
                                        playIconHover: "rgba(255, 0, 0, 1)",
                                        duration: "rgb(209, 238, 246)",
                                        durationBg: "rgba(5, 25, 43, 0.81)",
                                        title: "rgb(0, 0, 0)",
                                        titleHover: "rgb(255, 26, 54)",
                                        date: "rgb(177, 177, 177)",
                                        description: "rgb(80, 80, 80)",
                                        anchor: "rgb(255, 26, 54)",
                                        anchorHover: "rgb(0, 0, 0)",
                                        counters: "rgb(177, 177, 177)"
                                    },
                                    popup: {
                                        bg: "rgb(255, 255, 255)",
                                        overlay: "rgba(12, 2, 2, 0.8)",
                                        title: "rgb(0, 0, 0)",
                                        channelName: "rgb(0, 0, 0)",
                                        channelNameHover: "rgb(255, 26, 54)",
                                        viewsCounter: "rgb(85, 85, 85)",
                                        likesRatio: "rgb(47, 165, 255)",
                                        dislikesRatio: "rgb(207, 207, 207)",
                                        likesCounter: "rgb(144, 144, 144)",
                                        dislikesCounter: "rgb(144, 144, 144)",
                                        share: "rgb(144, 144, 144)",
                                        date: "rgb(80, 80, 80)",
                                        description: "rgb(80, 80, 80)",
                                        anchor: "rgb(255, 26, 54)",
                                        anchorHover: "rgb(0, 0, 0)",
                                        descriptionMoreButton: "rgb(177, 177, 177)",
                                        descriptionMoreButtonHover: "rgb(80, 80, 80)",
                                        commentsUsername: "rgb(0, 0, 0)",
                                        commentsUsernameHover: "rgb(255, 26, 54)",
                                        commentsPassedTime: "rgb(177, 177, 177)",
                                        commentsText: "rgb(80, 80, 80)",
                                        commentsLikes: "rgb(180, 180, 180)",
                                        controls: "rgb(160, 160, 160)",
                                        controlsHover: "rgb(220, 220, 220)",
                                        controlsMobile: "rgb(220, 220, 220)",
                                        controlsMobileBg: "rgba(255, 255, 255, 0)"
                                    }
                                },
                                "deep blue": {
                                    header: {
                                        bg: "rgb(50, 81, 108)",
                                        bannerOverlay: "rgba(50, 81, 108, 0.81)",
                                        channelName: "rgb(255, 255, 255)",
                                        channelNameHover: "rgb(98, 220, 255)",
                                        channelDescription: "rgb(209, 238, 246)",
                                        anchor: "rgb(98, 220, 255)",
                                        anchorHover: "rgb(255, 255, 255)",
                                        counters: "rgb(140, 170, 197)"
                                    },
                                    groups: {
                                        bg: "rgb(33, 56, 75)",
                                        link: "rgb(255, 255, 255, 0.5)",
                                        linkHover: "rgb(98, 220, 255)",
                                        linkActive: "rgb(98, 220, 255)",
                                        highlight: "rgb(50, 81, 108)",
                                        highlightHover: "rgb(0, 198, 255)",
                                        highlightActive: "rgb(0, 198, 255)"
                                    },
                                    content: {
                                        bg: "rgb(33, 56, 75)",
                                        arrows: "rgb(255, 255, 255)",
                                        arrowsHover: "rgb(0, 198, 255)",
                                        arrowsBg: "rgba(0, 0, 0, 0.7)",
                                        arrowsBgHover: "rgba(0, 0, 0, 0.95)",
                                        scrollbarBg: "rgb(50, 81, 108)",
                                        scrollbarSliderBg: "rgb(66, 114, 156)"
                                    },
                                    video: {
                                        bg: "rgb(33, 56, 75)",
                                        overlay: "rgba(5, 25, 43, 0.9)",
                                        playIcon: "rgba(255, 0, 0, 0.8)",
                                        playIconHover: "rgba(255, 0, 0, 1)",
                                        duration: "rgb(209, 238, 246)",
                                        durationBg: "rgba(5, 25, 43, 0.81)",
                                        title: "rgb(0, 198, 255)",
                                        titleHover: "rgb(255, 255, 255)",
                                        date: "rgba(90, 130, 165, 1)",
                                        description: "rgb(209, 238, 246)",
                                        anchor: "rgb(0, 198, 255)",
                                        anchorHover: "rgb(255, 255, 255)",
                                        counters: "rgba(90, 130, 165, 1)"
                                    },
                                    popup: {
                                        bg: "rgb(33, 56, 75)",
                                        overlay: "rgba(4, 17, 28, 0.8)",
                                        title: "rgb(255, 255, 255)",
                                        channelName: "rgb(255, 255, 255)",
                                        channelNameHover: "rgb(0, 198, 255)",
                                        viewsCounter: "rgb(255, 255, 255)",
                                        likesRatio: "rgb(44, 138, 218)",
                                        dislikesRatio: "rgb(51, 79, 102)",
                                        likesCounter: "rgba(90, 130, 165, 1)",
                                        dislikesCounter: "rgba(90, 130, 165, 1)",
                                        share: "rgba(90, 130, 165, 1)",
                                        date: "rgba(90, 130, 165, 1)",
                                        description: "rgb(209, 238, 246)",
                                        anchor: "rgb(0, 198, 255)",
                                        anchorHover: "rgb(255, 255, 255)",
                                        descriptionMoreButton: "rgba(90, 130, 165, 1)",
                                        descriptionMoreButtonHover: "rgb(209, 238, 246)",
                                        commentsUsername: "rgb(255, 255, 255)",
                                        commentsUsernameHover: "rgb(0, 198, 255)",
                                        commentsPassedTime: "rgba(90, 130, 165, 1)",
                                        commentsText: "rgb(209, 238, 246)",
                                        commentsLikes: "rgba(90, 130, 165, 1)",
                                        controls: "rgb(68, 107, 140)",
                                        controlsHover: "rgb(0, 198, 255)",
                                        controlsMobile: "rgb(68, 107, 140)",
                                        controlsMobileBg: "rgb(33, 56, 75)"
                                    }
                                }
                            }
                        }, {}],
                        46: [function(e, i, n) {
                            var o = {};
                            o.ads = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a = t.helperMissing,
                                        r = "function",
                                        s = this.escapeExpression;
                                    return '<ins class="adsbygoogle" style="width:' + s(typeof(o = null != (o = t.width || (null != e ? e.width : e)) ? o : a) === r ? o.call(e, {
                                        name: "width",
                                        hash: {},
                                        data: n
                                    }) : o) + "px;height:" + s(typeof(o = null != (o = t.height || (null != e ? e.height : e)) ? o : a) === r ? o.call(e, {
                                        name: "height",
                                        hash: {},
                                        data: n
                                    }) : o) + 'px" data-ad-client="' + s(typeof(o = null != (o = t.pubId || (null != e ? e.pubId : e)) ? o : a) === r ? o.call(e, {
                                        name: "pubId",
                                        hash: {},
                                        data: n
                                    }) : o) + '" data-ad-slot="' + s(typeof(o = null != (o = t.slotId || (null != e ? e.slotId : e)) ? o : a) === r ? o.call(e, {
                                        name: "slotId",
                                        hash: {},
                                        data: n
                                    }) : o) + '"></ins>'
                                },
                                useData: !0
                            }), o.colorizer = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a, r = t.helperMissing,
                                        s = "function",
                                        l = this.escapeExpression,
                                        p = this.lambda;
                                    return " #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.bg : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header-overlay { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.bannerOverlay : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header-channel-title, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header-channel-title a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.channelName : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header-channel-title:hover, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header-channel-title a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.channelNameHover : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header-channel-caption { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.channelDescription : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header-channel-caption a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.anchor : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header-channel-caption a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.anchorHover : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-header-channel-properties-item { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.header : o) ? o.counters : o, e)) + "; }  #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.bg : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-list-item a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.link : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-list-item:hover a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.linkHover : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-list-item.yottie-active a, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-list-item.yottie-active:hover a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.linkActive : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-list-item:hover::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.highlightHover : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-list-item.yottie-active:hover::after, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-list-item.yottie-active::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.highlightActive : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-control-left::before { background: linear-gradient(to left, rgba(255, 255, 255, 0), " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.bg : o, e)) + " 60%); } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-control-right::before { background: linear-gradient(to right, rgba(255, 255, 255, 0), " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.bg : o, e)) + " 60%); } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-control span::before, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-control span::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.link : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-control:hover span::before, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-nav-control:hover span::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.groups : o) ? o.linkActive : o, e)) + "; }  #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.bg : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-arrow { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrowsBg : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-arrow:hover { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrowsBgHover : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-arrow span::before, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-arrow span::after, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-arrow::before { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrows : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-arrow:hover span::before, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-arrow:hover span::after, #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-arrow:hover::before { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.arrowsHover : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-scrollbar { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.scrollbarBg : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-scrollbar .swiper-scrollbar-drag { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.content : o) ? o.scrollbarSliderBg : o, e)) + "; }  #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.bg : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-feed-section-slide { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.bg : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-overlay { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.overlay : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-preview-play .maincolor { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.playIcon : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video:hover .yottie-widget-video-preview-play .maincolor { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.playIconHover : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-preview-marker-duration { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.durationBg : o, e)) + "; color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.duration : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-info-title { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.title : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-info-title:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.titleHover : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-info-passed-time { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.date : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-info-caption { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.description : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-info-properties-item { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.counters : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-info-caption a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.anchor : o, e)) + "; } #yottie_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-widget-video-info-caption a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.video : o) ? o.anchorHover : o, e)) + "; }  #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-inner { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.bg : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-inner a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.anchor : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-inner a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.anchorHover : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-overlay { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.overlay : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-title { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.title : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-inner .yottie-popup-video-meta-channel-name { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.channelName : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-inner .yottie-popup-video-meta-channel-name:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.channelNameHover : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-views { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.viewsCounter : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-rating-ratio { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.dislikesRatio : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-rating-ratio span { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.likesRatio : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-rating-likes span { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.likesCounter : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-rating-dislikes span { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.dislikesCounter : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-rating-likes svg { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.likesCounter : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-rating-dislikes svg { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.dislikesCounter : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-share svg { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.share : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-share span { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.share : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-meta-date { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.date : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-meta-description { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.description : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-meta::after, #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-meta::before { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.description : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-meta-description-more { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.descriptionMoreButton : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-meta-description-more:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.descriptionMoreButtonHover : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-comments-item-name a { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsUsername : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-comments-item-name a:hover { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsUsernameHover : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-comments-item-passed-time { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsPassedTime : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-comments-item-text { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsText : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-comments-item-likes { color: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsLikes : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-video-comments-item-likes-icon { fill: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.commentsLikes : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-control-close::before, #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-control-close::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controls : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-control-close:hover::before, #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-control-close:hover::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controlsHover : o, e)) + "; } @media only screen and (max-width: 768px) { #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-control-close { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controlsMobileBg : o, e)) + "; } #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-control-close::before, #yottie_popup_" + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + " .yottie-popup-control-close::after { background: " + l(p(null != (o = null != (o = null != e ? e.scheme : e) ? o.popup : o) ? o.controlsMobile : o, e)) + "; } }"
                                },
                                useData: !0
                            }), o.error = o.error || {}, o.error.container = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-error"><div class="yottie-error-overlay"></div><div class="yottie-error-content"><div class="yottie-error-content-title">Unfortunately, an error occurred:</div></div></div>'
                                },
                                useData: !0
                            }), o.error.content = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-error-content-msg">' + this.escapeExpression("function" == typeof(o = null != (o = t.message || (null != e ? e.message : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "message",
                                        hash: {},
                                        data: n
                                    }) : o) + "</div>"
                                },
                                useData: !0
                            }), o.feed = o.feed || {}, o.feed.arrows = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-feed-section-arrow yottie-widget-feed-section-arrow-prev"><span></span></div><div class="yottie-widget-feed-section-arrow yottie-widget-feed-section-arrow-next"><span></span></div>'
                                },
                                useData: !0
                            }), o.feed.container = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-feed"><div class="yottie-widget-feed-inner"></div><div class="yottie-widget-feed-ads" data-yt-ads-place="content"></div></div>'
                                },
                                useData: !0
                            }), o.feed.filter = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return '<div style="display: none"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" viewBox="0 0 12 12"><symbol viewBox="0 0 12 12" id="icon-search"><path id="u9qra" d="M1988.46 1576.54a3.07 3.07 0 0 1-3.09-3.08 3.07 3.07 0 0 1 3.09-3.09 3.07 3.07 0 0 1 3.08 3.09 3.07 3.07 0 0 1-3.08 3.08zm4.11 0h-.55l-.2-.2a4.3 4.3 0 0 0 1.1-2.88 4.45 4.45 0 1 0-8.92 0 4.45 4.45 0 0 0 4.46 4.45 4.3 4.3 0 0 0 2.88-1.1l.2.21v.55l3.43 3.43 1.03-1.03z"/><g><g transform="translate(-1984 -1569)"><use xlink:href="#u9qra"/></g></g></symbol></svg></div><div class="yottie-widget-feed-section-search"><form class="yottie-widget-feed-section-search-form"> <input class="yottie-widget-feed-section-search-form-input" placeholder="' + this.escapeExpression("function" == typeof(o = null != (o = t.placeholder || (null != e ? e.placeholder : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "placeholder",
                                        hash: {},
                                        data: n
                                    }) : o) + '..."> <a class="yottie-widget-feed-section-search-form-button"><svg class="yottie-widget-feed-section-search-form-button-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-search"></use></svg></a></form></div>'
                                },
                                useData: !0
                            }), o.feed.loader = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-feed-section-loader"><div class="yottie-spinner"></div></div>'
                                },
                                useData: !0
                            }), o.feed.pagination = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-feed-section-pagination swiper-pagination"></div>'
                                },
                                useData: !0
                            }), o.feed.scrollbar = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-feed-section-scrollbar swiper-scrollbar"></div>'
                                },
                                useData: !0
                            }), o.feed.section = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-feed-section"><div class="yottie-widget-feed-section-inner swiper-container"><div class="swiper-wrapper"></div></div></div>'
                                },
                                useData: !0
                            }), o.feed.section = o.feed.section || {}, o.feed.section.novideos = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-widget-feed-section-novideos">' + this.escapeExpression("function" == typeof(o = null != (o = t.message || (null != e ? e.message : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "message",
                                        hash: {},
                                        data: n
                                    }) : o) + "</div>"
                                },
                                useData: !0
                            }), o.feed.slide = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-feed-section-slide swiper-slide"></div>'
                                },
                                useData: !0
                            }), o.groups = o.groups || {}, o.groups.container = t.template({
                                1: function(e, t, i, n) {
                                    return " yottie-disabled"
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a, r = t.helperMissing,
                                        s = "function";
                                    return '<div class="yottie-widget-nav' + (null != (o = t.unless.call(e, null != e ? e.visible : e, {
                                        name: "unless",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + '"><div class="yottie-widget-nav-inner"> ' + (null != (o = typeof(a = null != (a = t.list || (null != e ? e.list : e)) ? a : r) === s ? a.call(e, {
                                        name: "list",
                                        hash: {},
                                        data: n
                                    }) : a) ? o : "") + " " + (null != (o = typeof(a = null != (a = t.controls || (null != e ? e.controls : e)) ? a : r) === s ? a.call(e, {
                                        name: "controls",
                                        hash: {},
                                        data: n
                                    }) : a) ? o : "") + "</div></div>"
                                },
                                useData: !0
                            }), o.groups.controls = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-nav-control yottie-widget-nav-control-left yottie-widget-nav-control-disabled"><span></span></div><div class="yottie-widget-nav-control yottie-widget-nav-control-right yottie-widget-nav-control-disabled"><span></span></div>'
                                },
                                useData: !0
                            }), o.groups.list = t.template({
                                1: function(e, t, i, n) {
                                    var o, a, r = t.helperMissing,
                                        s = "function",
                                        l = this.escapeExpression;
                                    return '<li class="yottie-widget-nav-list-item' + (null != (o = t.unless.call(e, n && n.index, {
                                        name: "unless",
                                        hash: {},
                                        fn: this.program(2, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + '"> <a href="javascript:void(0)" data-yt-id="' + l(typeof(a = null != (a = t.index || n && n.index) ? a : r) === s ? a.call(e, {
                                        name: "index",
                                        hash: {},
                                        data: n
                                    }) : a) + '">' + l(typeof(a = null != (a = t.title || (null != e ? e.title : e)) ? a : r) === s ? a.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : a) + "</a></li> "
                                },
                                2: function(e, t, i, n) {
                                    return " yottie-active"
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return '<ul class="yottie-widget-nav-list"> ' + (null != (o = t.each.call(e, null != e ? e.groups : e, {
                                        name: "each",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</ul>"
                                },
                                useData: !0
                            }), o.header = o.header || {}, o.header.banner = t.template({
                                1: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-widget-header-banner" style="background-image: url(\'' + this.escapeExpression("function" == typeof(o = null != (o = t.url || (null != e ? e.url : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "url",
                                        hash: {},
                                        data: n
                                    }) : o) + "');\"></div> "
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.banner : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : ""
                                },
                                useData: !0
                            }), o.header.channel = t.template({
                                1: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-widget-header-channel"> ' + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.channelName : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(2, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.properties : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(7, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.channelDescription : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(14, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div> "
                                },
                                2: function(e, t, i, n) {
                                    var o;
                                    return " " + (null != (o = t.if.call(e, null != e ? e.id : e, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(3, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.unless.call(e, null != e ? e.id : e, {
                                        name: "unless",
                                        hash: {},
                                        fn: this.program(5, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " "
                                },
                                3: function(e, t, i, n) {
                                    var o, a = t.helperMissing,
                                        r = "function",
                                        s = this.escapeExpression;
                                    return '<div class="yottie-widget-header-channel-title"> <a href="https://www.youtube.com/channel/' + s(typeof(o = null != (o = t.id || (null != e ? e.id : e)) ? o : a) === r ? o.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : o) + '/" title="' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                        name: "name",
                                        hash: {},
                                        data: n
                                    }) : o) + '" target="_blank">' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                        name: "name",
                                        hash: {},
                                        data: n
                                    }) : o) + "</a></div> "
                                },
                                5: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-widget-header-channel-title">' + this.escapeExpression("function" == typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "name",
                                        hash: {},
                                        data: n
                                    }) : o) + "</div> "
                                },
                                7: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-widget-header-channel-properties"> ' + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.subscribersCounter : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(8, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.videosCounter : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(10, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.viewsCounter : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(12, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div> "
                                },
                                8: function(e, t, i, n) {
                                    var o;
                                    return ' <span class="yottie-widget-header-channel-properties-item"><span class="yottie-widget-header-channel-properties-item-divider">•</span> <span class="yottie-widget-header-channel-properties-item-text">' + this.escapeExpression("function" == typeof(o = null != (o = t.subscriberCount || (null != e ? e.subscriberCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "subscriberCount",
                                        hash: {},
                                        data: n
                                    }) : o) + "</span></span> "
                                },
                                10: function(e, t, i, n) {
                                    var o;
                                    return ' <span class="yottie-widget-header-channel-properties-item"><span class="yottie-widget-header-channel-properties-item-divider">•</span> <span class="yottie-widget-header-channel-properties-item-text">' + this.escapeExpression("function" == typeof(o = null != (o = t.videoCount || (null != e ? e.videoCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "videoCount",
                                        hash: {},
                                        data: n
                                    }) : o) + "</span></span> "
                                },
                                12: function(e, t, i, n) {
                                    var o;
                                    return ' <span class="yottie-widget-header-channel-properties-item"><span class="yottie-widget-header-channel-properties-item-divider">•</span> <span class="yottie-widget-header-channel-properties-item-text">' + this.escapeExpression("function" == typeof(o = null != (o = t.viewCount || (null != e ? e.viewCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "viewCount",
                                        hash: {},
                                        data: n
                                    }) : o) + "</span></span> "
                                },
                                14: function(e, t, i, n) {
                                    var o, a;
                                    return '<div class="yottie-widget-header-channel-caption">' + (null != (o = "function" == typeof(a = null != (a = t.description || (null != e ? e.description : e)) ? a : t.helperMissing) ? a.call(e, {
                                        name: "description",
                                        hash: {},
                                        data: n
                                    }) : a) ? o : "") + "</div> "
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.channel : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : ""
                                },
                                useData: !0
                            }), o.header.container = t.template({
                                1: function(e, t, i, n) {
                                    return " yottie-visible"
                                },
                                3: function(e, t, i, n) {
                                    return " yottie-widget-header-brandingless"
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a, r = this.lambda;
                                    return '<div class="yottie-widget-header yottie-widget-header-' + this.escapeExpression("function" == typeof(a = null != (a = t.layout || (null != e ? e.layout : e)) ? a : t.helperMissing) ? a.call(e, {
                                        name: "layout",
                                        hash: {},
                                        data: n
                                    }) : a) + (null != (o = t.if.call(e, null != e ? e.visible : e, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + (null != (o = t.unless.call(e, null != (o = null != e ? e.displaying : e) ? o.branding : o, {
                                        name: "unless",
                                        hash: {},
                                        fn: this.program(3, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + '"> ' + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.overlay : o, e)) ? o : "") + " " + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.banner : o, e)) ? o : "") + " " + (null != (o = r(null != (o = null != e ? e.parts : e) ? o.inner : o, e)) ? o : "") + "</div>"
                                },
                                useData: !0
                            }), o.header.inner = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a = this.lambda;
                                    return '<div class="yottie-widget-header-inner"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.logo : o, e)) ? o : "") + '<div class="yottie-widget-header-info"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.channel : o, e)) ? o : "") + "</div> " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.subscribe : o, e)) ? o : "") + "</div>"
                                },
                                useData: !0
                            }), o.header.logo = t.template({
                                1: function(e, t, i, n) {
                                    var o;
                                    return " " + (null != (o = t.if.call(e, null != e ? e.id : e, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(2, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.unless.call(e, null != e ? e.id : e, {
                                        name: "unless",
                                        hash: {},
                                        fn: this.program(4, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " "
                                },
                                2: function(e, t, i, n) {
                                    var o, a = t.helperMissing,
                                        r = "function",
                                        s = this.escapeExpression;
                                    return ' <a class="yottie-widget-header-logo" href="https://www.youtube.com/channel/' + s(typeof(o = null != (o = t.id || (null != e ? e.id : e)) ? o : a) === r ? o.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : o) + '/" title="' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : o) + '" target="_blank" rel="nofollow"><img src="' + s(typeof(o = null != (o = t.url || (null != e ? e.url : e)) ? o : a) === r ? o.call(e, {
                                        name: "url",
                                        hash: {},
                                        data: n
                                    }) : o) + '" alt="' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : o) + '"/></a> '
                                },
                                4: function(e, t, i, n) {
                                    var o, a = t.helperMissing,
                                        r = "function",
                                        s = this.escapeExpression;
                                    return '<div class="yottie-widget-header-logo"> <img src="' + s(typeof(o = null != (o = t.url || (null != e ? e.url : e)) ? o : a) === r ? o.call(e, {
                                        name: "url",
                                        hash: {},
                                        data: n
                                    }) : o) + '" alt="' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : o) + '"/></div> '
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.logo : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : ""
                                },
                                useData: !0
                            }), o.header.overlay = t.template({
                                1: function(e, t, i, n) {
                                    return '<div class="yottie-widget-header-overlay"></div> '
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.banner : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : ""
                                },
                                useData: !0
                            }), o.header.subscribe = t.template({
                                1: function(e, t, i, n) {
                                    return '<div class="yottie-widget-header-subscribe"><div class="yottie-widget-header-subscribe-button"></div></div> '
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.subscribeButton : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : ""
                                },
                                useData: !0
                            }), o.popup = o.popup || {}, o.popup.container = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a = this.lambda;
                                    return '<div class="eapps-root yottie-popup yottie"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.overlay : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.wrapper : o, e)) ? o : "") + "</div>"
                                },
                                useData: !0
                            }), o.popup.control = o.popup.control || {}, o.popup.control.arrows = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-popup-control-arrow-previous yottie-popup-control-arrow"><span></span></div><div class="yottie-popup-control-arrow-next yottie-popup-control-arrow"><span></span></div>'
                                },
                                useData: !0
                            }), o.popup.control.close = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-popup-control-close"></div>'
                                },
                                useData: !0
                            }), o.popup.inner = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a = this.lambda;
                                    return '<div class="yottie-popup-inner"> ' + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.loader : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.controlClose : o, e)) ? o : "") + "  " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.video : o, e)) ? o : "") + "</div>"
                                },
                                useData: !0
                            }), o.popup.loader = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-popup-loader"><div class="yottie-spinner"></div></div>'
                                },
                                useData: !0
                            }), o.popup.overlay = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-popup-overlay"></div>'
                                },
                                useData: !0
                            }), o.popup.video = o.popup.video || {}, o.popup.video.container = t.template({
                                1: function(e, t, i, n) {
                                    var o;
                                    return " " + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoContent : o, e)) ? o : "") + " "
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-popup-video"> ' + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.videoPlayer : o, e)) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.content : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div>"
                                },
                                useData: !0
                            }), o.popup.video.content = t.template({
                                1: function(e, t, i, n) {
                                    var o, a, r = this.escapeExpression;
                                    return '<div class="yottie-popup-video-views" title="' + r(this.lambda(null != (o = null != e ? e.titles : e) ? o.views : o, e)) + '">' + r("function" == typeof(a = null != (a = t.viewsCount || (null != e ? e.viewsCount : e)) ? a : t.helperMissing) ? a.call(e, {
                                        name: "viewsCount",
                                        hash: {},
                                        data: n
                                    }) : a) + "</div> "
                                },
                                3: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-popup-video-rating"> ' + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.likesCounter : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(4, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.dislikesCounter : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(6, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.likesRatio : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(8, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div> "
                                },
                                4: function(e, t, i, n) {
                                    var o, a, r = this.escapeExpression;
                                    return '<div class="yottie-popup-video-rating-likes" title="' + r(this.lambda(null != (o = null != e ? e.titles : e) ? o.likes : o, e)) + '"><svg class="yottie-popup-video-rating-likes-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-likes"></use></svg><span>' + r("function" == typeof(a = null != (a = t.likesCount || (null != e ? e.likesCount : e)) ? a : t.helperMissing) ? a.call(e, {
                                        name: "likesCount",
                                        hash: {},
                                        data: n
                                    }) : a) + "</span></div> "
                                },
                                6: function(e, t, i, n) {
                                    var o, a, r = this.escapeExpression;
                                    return '<div class="yottie-popup-video-rating-dislikes" title="' + r(this.lambda(null != (o = null != e ? e.titles : e) ? o.dislikes : o, e)) + '"><svg class="yottie-popup-video-rating-dislikes-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-dislikes"></use></svg><span>' + r("function" == typeof(a = null != (a = t.dislikesCount || (null != e ? e.dislikesCount : e)) ? a : t.helperMissing) ? a.call(e, {
                                        name: "dislikesCount",
                                        hash: {},
                                        data: n
                                    }) : a) + "</span></div> "
                                },
                                8: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-popup-video-rating-ratio"><span style="width: ' + this.escapeExpression("function" == typeof(o = null != (o = t.likesRatio || (null != e ? e.likesRatio : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "likesRatio",
                                        hash: {},
                                        data: n
                                    }) : o) + '%"></span></div> '
                                },
                                10: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-popup-video-share"><svg class="yottie-popup-video-share-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-share"></use></svg><span>' + this.escapeExpression(this.lambda(null != (o = null != e ? e.titles : e) ? o.share : o, e)) + '</span><div class="yottie-popup-video-share-popover yottie-popup-video-share-popover-left"><div class="yottie-popup-video-share-popover-content"><div class="yottie-popup-video-share-popover-content-inner"> ' + (null != (o = t.each.call(e, null != e ? e.shareButtons : e, {
                                        name: "each",
                                        hash: {},
                                        fn: this.program(11, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div></div></div></div> "
                                },
                                11: function(e, t, i, n) {
                                    var o, a = t.helperMissing,
                                        r = "function",
                                        s = this.escapeExpression;
                                    return '<div class="yottie-popup-video-share-popover-content-item" data-type="' + s(typeof(o = null != (o = t.key || n && n.key) ? o : a) === r ? o.call(e, {
                                        name: "key",
                                        hash: {},
                                        data: n
                                    }) : o) + '"><div class="yottie-popup-video-share-popover-content-item-icon"> <img src="' + s(typeof(o = null != (o = t.icon || (null != e ? e.icon : e)) ? o : a) === r ? o.call(e, {
                                        name: "icon",
                                        hash: {},
                                        data: n
                                    }) : o) + '"></div><div class="yottie-popup-video-share-popover-content-item-title"> ' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : o) + "</div></div> "
                                },
                                13: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-popup-video-meta"> ' + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.channelLogo : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(14, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + '<div class="yottie-popup-video-meta-text"> ' + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.channelName : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(16, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.date : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(18, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.description : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(20, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.descriptionMoreButton : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(23, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div> " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.subscribeButton : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(25, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div> "
                                },
                                14: function(e, t, i, n) {
                                    var o, a = t.helperMissing,
                                        r = "function",
                                        s = this.escapeExpression;
                                    return '<div class="yottie-popup-video-meta-channel-logo"> <a href="' + s(typeof(o = null != (o = t.link || (null != e ? e.link : e)) ? o : a) === r ? o.call(e, {
                                        name: "link",
                                        hash: {},
                                        data: n
                                    }) : o) + '" target="_blank" rel="nofollow" title="' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                        name: "name",
                                        hash: {},
                                        data: n
                                    }) : o) + '"><img src="' + s(typeof(o = null != (o = t.logo || (null != e ? e.logo : e)) ? o : a) === r ? o.call(e, {
                                        name: "logo",
                                        hash: {},
                                        data: n
                                    }) : o) + '" alt="' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                        name: "name",
                                        hash: {},
                                        data: n
                                    }) : o) + '"></a></div> '
                                },
                                16: function(e, t, i, n) {
                                    var o, a = t.helperMissing,
                                        r = "function",
                                        s = this.escapeExpression;
                                    return ' <a href="' + s(typeof(o = null != (o = t.link || (null != e ? e.link : e)) ? o : a) === r ? o.call(e, {
                                        name: "link",
                                        hash: {},
                                        data: n
                                    }) : o) + '" class="yottie-popup-video-meta-channel-name" target="_blank" rel="nofollow">' + s(typeof(o = null != (o = t.name || (null != e ? e.name : e)) ? o : a) === r ? o.call(e, {
                                        name: "name",
                                        hash: {},
                                        data: n
                                    }) : o) + "</a> "
                                },
                                18: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-popup-video-meta-date">' + this.escapeExpression("function" == typeof(o = null != (o = t.date || (null != e ? e.date : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "date",
                                        hash: {},
                                        data: n
                                    }) : o) + "</div> "
                                },
                                20: function(e, t, i, n) {
                                    var o, a;
                                    return '<div class="yottie-popup-video-meta-description' + (null != (o = t.unless.call(e, null != (o = null != e ? e.displaying : e) ? o.descriptionMoreButton : o, {
                                        name: "unless",
                                        hash: {},
                                        fn: this.program(21, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + '"> ' + (null != (o = "function" == typeof(a = null != (a = t.text || (null != e ? e.text : e)) ? a : t.helperMissing) ? a.call(e, {
                                        name: "text",
                                        hash: {},
                                        data: n
                                    }) : a) ? o : "") + "</div> "
                                },
                                21: function(e, t, i, n) {
                                    return " yottie-popup-video-meta-description-show-full"
                                },
                                23: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-popup-video-meta-description-more"><span>' + this.escapeExpression("function" == typeof(o = null != (o = t.showMoreLabel || (null != e ? e.showMoreLabel : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "showMoreLabel",
                                        hash: {},
                                        data: n
                                    }) : o) + "</span></div> "
                                },
                                25: function(e, t, i, n) {
                                    return '<div class="yottie-popup-video-meta-subscribe-container"><div class="yottie-popup-video-meta-subscribe"></div></div> '
                                },
                                27: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-popup-video-comments"> ' + (null != (o = t.each.call(e, null != e ? e.comments : e, {
                                        name: "each",
                                        hash: {},
                                        fn: this.program(28, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div> "
                                },
                                28: function(e, t, i, n) {
                                    var o, a, r = t.helperMissing,
                                        s = "function",
                                        l = this.escapeExpression;
                                    return '<div class="yottie-popup-video-comments-item"><div class="yottie-popup-video-comments-item-profile-image"> <a href="' + l(typeof(a = null != (a = t.authorChannelUrl || (null != e ? e.authorChannelUrl : e)) ? a : r) === s ? a.call(e, {
                                        name: "authorChannelUrl",
                                        hash: {},
                                        data: n
                                    }) : a) + '" target="_blank" rel="nofollow"><img src="' + l(typeof(a = null != (a = t.authorProfileImageUrl || (null != e ? e.authorProfileImageUrl : e)) ? a : r) === s ? a.call(e, {
                                        name: "authorProfileImageUrl",
                                        hash: {},
                                        data: n
                                    }) : a) + '"></a></div><div class="yottie-popup-video-comments-item-info"><div class="yottie-popup-video-comments-item-header"><div class="yottie-popup-video-comments-item-name"> <a href="' + l(typeof(a = null != (a = t.authorChannelUrl || (null != e ? e.authorChannelUrl : e)) ? a : r) === s ? a.call(e, {
                                        name: "authorChannelUrl",
                                        hash: {},
                                        data: n
                                    }) : a) + '" target="_blank" rel="nofollow">' + l(typeof(a = null != (a = t.authorName || (null != e ? e.authorName : e)) ? a : r) === s ? a.call(e, {
                                        name: "authorName",
                                        hash: {},
                                        data: n
                                    }) : a) + '</a></div><div class="yottie-popup-video-comments-item-passed-time">' + l(typeof(a = null != (a = t.passedTime || (null != e ? e.passedTime : e)) ? a : r) === s ? a.call(e, {
                                        name: "passedTime",
                                        hash: {},
                                        data: n
                                    }) : a) + '</div></div><div class="yottie-popup-video-comments-item-text"> ' + (null != (o = typeof(a = null != (a = t.text || (null != e ? e.text : e)) ? a : r) === s ? a.call(e, {
                                        name: "text",
                                        hash: {},
                                        data: n
                                    }) : a) ? o : "") + "</div> " + (null != (o = t.if.call(e, null != e ? e.displayLikesCount : e, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(29, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div></div> "
                                },
                                29: function(e, t, i, n) {
                                    var o, a, r = this.escapeExpression;
                                    return '<div class="yottie-popup-video-comments-item-likes" title="' + r(this.lambda(null != (o = null != e ? e.titles : e) ? o.likes : o, e)) + '"><svg class="yottie-popup-video-comments-item-likes-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-likes"></use></svg><span>' + r("function" == typeof(a = null != (a = t.likesCount || (null != e ? e.likesCount : e)) ? a : t.helperMissing) ? a.call(e, {
                                        name: "likesCount",
                                        hash: {},
                                        data: n
                                    }) : a) + "</span></div> "
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a;
                                    return '<div style="display: none"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="11" viewBox="0 0 12 11"><symbol viewBox="0 0 12 11" id="icon-likes"><defs><path id="jfk8a" d="M2631 867.95c0-.6-.5-1.1-1.1-1.1h-3.43l.55-2.53v-.17c0-.21-.11-.43-.22-.6l-.6-.55-3.6 3.63c-.22.17-.33.44-.33.77v5.5c0 .6.5 1.1 1.1 1.1h4.9c.44 0 .82-.27.98-.66l1.64-3.9c.06-.12.06-.28.06-.39v-1.1h.05c0 .06 0 0 0 0zm-12 6.05h2.18v-6.6H2619z"/></defs><g><g transform="translate(-2619 -863)"><use xlink:href="#jfk8a"/></g></g></symbol></svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="11" viewBox="0 0 12 11"><symbol viewBox="0 0 12 11" id="icon-dislikes"><defs><path id="w9axa" d="M2698 871.05c0 .6.46 1.1 1.03 1.1h3.24l-.52 2.53v.17c0 .21.1.43.21.6l.57.55 3.39-3.63c.2-.17.3-.44.3-.77v-5.5c0-.6-.45-1.1-1.02-1.1h-4.63c-.41 0-.77.27-.92.66l-1.55 3.9c-.05.12-.05.28-.05.39v1.1h-.05c0-.06 0 0 0 0zm12-5.65h-2.06v6.6h2.06z"/></defs><g><g transform="translate(-2698 -865)"><use xlink:href="#w9axa"/></g></g></symbol></svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="12" viewBox="0 0 14 12"><symbol viewBox="0 0 14 12" id="icon-share"><defs><path id="dka3a" d="M2786 868.92l-5.93-5.91v3.94A8.06 8.06 0 0 0 2772 875a8.08 8.08 0 0 1 8.07-4.12v3.96z"/></defs><g><g transform="translate(-2772 -863)"><use xlink:href="#dka3a"/></g></g></symbol></svg></div><div class="yottie-popup-video-content"><div class="yottie-popup-video-title"> ' + this.escapeExpression("function" == typeof(a = null != (a = t.title || (null != e ? e.title : e)) ? a : t.helperMissing) ? a.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : a) + '</div><div class="yottie-popup-video-info"> ' + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.viewsCounter : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.ratingCounters : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(3, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.share : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(10, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div> " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.meta : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(13, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + '<div class="yottie-popup-video-content-ads" data-yt-ads-place="popup"></div> ' + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.comments : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(27, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div>"
                                },
                                useData: !0
                            }), o.popup.video.player = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-popup-video-player"><span></span></div>'
                                },
                                useData: !0
                            }), o.popup.wrapper = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-popup-wrapper"> ' + (null != (o = this.lambda(null != (o = null != e ? e.parts : e) ? o.inner : o, e)) ? o : "") + "</div>"
                                },
                                useData: !0
                            }), o.video = o.video || {}, o.video.container = t.template({
                                1: function(e, t, i, n) {
                                    var o, a = this.lambda;
                                    return " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.overlay : o, e)) ? o : "") + " " + (null != (o = a(null != (o = null != e ? e.parts : e) ? o.info : o, e)) ? o : "") + " "
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a, r = t.helperMissing,
                                        s = "function",
                                        l = this.escapeExpression,
                                        p = this.lambda;
                                    return '<div class="yottie-widget-video yottie-widget-video-' + l(typeof(a = null != (a = t.layout || (null != e ? e.layout : e)) ? a : r) === s ? a.call(e, {
                                        name: "layout",
                                        hash: {},
                                        data: n
                                    }) : a) + '" data-yt-id="' + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + '"> ' + (null != (o = p(null != (o = null != e ? e.parts : e) ? o.player : o, e)) ? o : "") + " " + (null != (o = p(null != (o = null != e ? e.parts : e) ? o.preview : o, e)) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.info : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div>"
                                },
                                useData: !0
                            }), o.video.info = t.template({
                                1: function(e, t, i, n) {
                                    var o, a = t.helperMissing,
                                        r = "function",
                                        s = this.escapeExpression;
                                    return ' <a href="https://www.youtube.com/watch?v=' + s(typeof(o = null != (o = t.id || (null != e ? e.id : e)) ? o : a) === r ? o.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : o) + '" title="' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : o) + '" target="_blank" class="yottie-widget-video-info-title">' + s(typeof(o = null != (o = t.title || (null != e ? e.title : e)) ? o : a) === r ? o.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : o) + "</a> "
                                },
                                3: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-widget-video-info-passed-time">' + this.escapeExpression("function" == typeof(o = null != (o = t.date || (null != e ? e.date : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "date",
                                        hash: {},
                                        data: n
                                    }) : o) + "</div> "
                                },
                                5: function(e, t, i, n) {
                                    var o, a;
                                    return '<div class="yottie-widget-video-info-caption"> ' + (null != (o = "function" == typeof(a = null != (a = t.description || (null != e ? e.description : e)) ? a : t.helperMissing) ? a.call(e, {
                                        name: "description",
                                        hash: {},
                                        data: n
                                    }) : a) ? o : "") + "</div> "
                                },
                                7: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-widget-video-info-properties"><div class="yottie-widget-video-info-properties-inner"> ' + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.viewsCounter : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(8, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.likesCounter : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(10, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.commentsCounter : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(12, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div></div> "
                                },
                                8: function(e, t, i, n) {
                                    var o;
                                    return ' <span class="yottie-widget-video-info-properties-item"><span class="yottie-widget-video-info-properties-item-divider">•</span> <span>' + this.escapeExpression("function" == typeof(o = null != (o = t.viewsCount || (null != e ? e.viewsCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "viewsCount",
                                        hash: {},
                                        data: n
                                    }) : o) + "</span></span> "
                                },
                                10: function(e, t, i, n) {
                                    var o;
                                    return ' <span class="yottie-widget-video-info-properties-item"><span class="yottie-widget-video-info-properties-item-divider">•</span> <span>' + this.escapeExpression("function" == typeof(o = null != (o = t.likesCount || (null != e ? e.likesCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "likesCount",
                                        hash: {},
                                        data: n
                                    }) : o) + "</span></span> "
                                },
                                12: function(e, t, i, n) {
                                    var o;
                                    return ' <span class="yottie-widget-video-info-properties-item"><span class="yottie-widget-video-info-properties-item-divider">•</span> <span>' + this.escapeExpression("function" == typeof(o = null != (o = t.commentsCount || (null != e ? e.commentsCount : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "commentsCount",
                                        hash: {},
                                        data: n
                                    }) : o) + "</span></span> "
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return '<div class="yottie-widget-video-info"> ' + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.title : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.date : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(3, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.description : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(5, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.properties : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(7, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</div>"
                                },
                                useData: !0
                            }), o.video.overlay = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-video-overlay"></div>'
                                },
                                useData: !0
                            }), o.video.player = t.template({
                                1: function(e, t, i, n) {
                                    return '<span class="yottie-widget-video-player"><span></span></span> '
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o;
                                    return null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.videoPlayer : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : ""
                                },
                                useData: !0
                            }), o.video.preview = t.template({
                                1: function(e, t, i, n) {
                                    var o;
                                    return 'data-maxres-src="' + this.escapeExpression("function" == typeof(o = null != (o = t.maxresThumbnail || (null != e ? e.maxresThumbnail : e)) ? o : t.helperMissing) ? o.call(e, {
                                        name: "maxresThumbnail",
                                        hash: {},
                                        data: n
                                    }) : o) + '"'
                                },
                                3: function(e, t, i, n) {
                                    var o;
                                    return ' <span class="yottie-widget-video-preview-marker yottie-widget-video-preview-marker-duration">' + (null != (o = t.if.call(e, null != (o = null != e ? e.duration : e) ? o.h : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(4, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + (null != (o = t.if.call(e, null != (o = null != e ? e.duration : e) ? o.m : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(6, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + (null != (o = t.unless.call(e, null != (o = null != e ? e.duration : e) ? o.m : o, {
                                        name: "unless",
                                        hash: {},
                                        fn: this.program(8, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + (null != (o = t.if.call(e, null != (o = null != e ? e.duration : e) ? o.s : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(10, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + (null != (o = t.unless.call(e, null != (o = null != e ? e.duration : e) ? o.s : o, {
                                        name: "unless",
                                        hash: {},
                                        fn: this.program(12, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</span> "
                                },
                                4: function(e, t, i, n) {
                                    var o;
                                    return this.escapeExpression(this.lambda(null != (o = null != e ? e.duration : e) ? o.h : o, e)) + ":"
                                },
                                6: function(e, t, i, n) {
                                    var o;
                                    return this.escapeExpression(this.lambda(null != (o = null != e ? e.duration : e) ? o.m : o, e)) + ":"
                                },
                                8: function(e, t, i, n) {
                                    return "00:"
                                },
                                10: function(e, t, i, n) {
                                    var o;
                                    return this.escapeExpression(this.lambda(null != (o = null != e ? e.duration : e) ? o.s : o, e))
                                },
                                12: function(e, t, i, n) {
                                    return "00"
                                },
                                14: function(e, t, i, n) {
                                    return '<svg class="yottie-widget-video-preview-play" viewBox="0 0 68 48"><g fill-rule="evenodd"><path class="maincolor" d="M31.386 0h5.873c2.423.06 4.849.08 7.273.153 3.306.094 6.614.219 9.914.46 1.23.092 2.46.2 3.684.35.936.121 1.875.253 2.79.491a8.56 8.56 0 0 1 4.23 2.623 8.597 8.597 0 0 1 1.9 3.66c.52 2.09.755 4.24.95 6.382v19.415c-.193 2.209-.424 4.424-.932 6.586a8.575 8.575 0 0 1-6.352 6.415c-.918.211-1.854.334-2.788.445-2.585.29-5.185.436-7.782.56a367.25 367.25 0 0 1-11.351.307c-.449.014-.9-.017-1.345.036h-4.26c-5.366-.045-10.733-.139-16.094-.417-2.57-.145-5.145-.305-7.696-.666-.912-.138-1.83-.294-2.697-.616a8.596 8.596 0 0 1-4.698-4.222c-.388-.764-.628-1.592-.802-2.428-.423-2.006-.64-4.047-.813-6.087-.242-2.984-.348-5.978-.39-8.971v-1.06c.037-2.699.129-5.397.323-8.09.17-2.245.386-4.493.825-6.704.138-.67.289-1.342.54-1.98.92-2.382 2.935-4.322 5.365-5.117.517-.172 1.052-.275 1.588-.368C9.988.93 11.348.802 12.708.684 14.985.5 17.267.382 19.55.29c2.926-.116 5.854-.187 8.782-.233C29.349.03 30.369.042 31.386 0"/><path class="subcolor" fill="#fff" d="M27.381 13.692c5.937 3.412 11.869 6.832 17.802 10.25-5.934 3.416-11.865 6.837-17.802 10.25-.002-6.834-.002-13.667 0-20.5z"/></g></svg>'
                                },
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    var o, a, r = t.helperMissing,
                                        s = "function",
                                        l = this.escapeExpression;
                                    return ' <a href="https://www.youtube.com/watch?v=' + l(typeof(a = null != (a = t.id || (null != e ? e.id : e)) ? a : r) === s ? a.call(e, {
                                        name: "id",
                                        hash: {},
                                        data: n
                                    }) : a) + '" title="' + l(typeof(a = null != (a = t.title || (null != e ? e.title : e)) ? a : r) === s ? a.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : a) + '" target="_blank" class="yottie-widget-video-preview"><span class="yottie-widget-video-preview-thumbnail"><img alt="' + l(typeof(a = null != (a = t.title || (null != e ? e.title : e)) ? a : r) === s ? a.call(e, {
                                        name: "title",
                                        hash: {},
                                        data: n
                                    }) : a) + '" data-src="' + l(typeof(a = null != (a = t.thumbnail || (null != e ? e.thumbnail : e)) ? a : r) === s ? a.call(e, {
                                        name: "thumbnail",
                                        hash: {},
                                        data: n
                                    }) : a) + '" ' + (null != (o = t.if.call(e, null != e ? e.maxresThumbnail : e, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(1, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "/></span> " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.duration : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(3, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + " " + (null != (o = t.if.call(e, null != (o = null != e ? e.displaying : e) ? o.playIcon : o, {
                                        name: "if",
                                        hash: {},
                                        fn: this.program(14, n, 0),
                                        inverse: this.noop,
                                        data: n
                                    })) ? o : "") + "</a>"
                                },
                                useData: !0
                            }), o.widget = t.template({
                                compiler: [6, ">= 2.0.0-beta.1"],
                                main: function(e, t, i, n) {
                                    return '<div class="yottie-widget-inner"><yottie data-part="header"></yottie><div class="yottie-widget-contents"><yottie data-part="groups"></yottie><yottie data-part="feed"></yottie></div></div>'
                                },
                                useData: !0
                            }), i.exports = o
                        }, {}],
                        47: [function(e, t, i) {
                            e("./../../olivie/src/js/jquery");
                            var n = e("./../../olivie/src/js/olivie");
                            t.exports = n.class("YottieFacade", [], function(e) {
                                this.app = e
                            }, {}, {
                                app: null
                            })
                        }, {
                            "./../../olivie/src/js/jquery": 7,
                            "./../../olivie/src/js/olivie": 14
                        }],
                        48: [function(e, t, i) {
                            var n = e("./../../olivie/src/js/jquery"),
                                o = e("./../../olivie/src/js/olivie"),
                                a = e("./../../olivie/src/js/modules/mies/client"),
                                r = e("./../../olivie/src/js/modules/appearance/i18n"),
                                s = e("./../../olivie/src/js/modules/appearance/renderer"),
                                l = e("./../../olivie/src/js/modules/appearance/colorizer"),
                                p = e("./../../olivie/src/js/utils"),
                                d = e("./modules/widget/yt-error"),
                                c = e("./modules/youtube/youtube"),
                                u = e("./modules/widget/widget"),
                                m = e("./modules/widget/header"),
                                h = e("./modules/widget/groups"),
                                g = e("./modules/widget/feed"),
                                f = e("./modules/widget/ads"),
                                v = e("./modules/popup/popup"),
                                w = e("./dictionary"),
                                y = e("./views"),
                                b = e("./schemes"),
                                x = e("./defaults"),
                                k = e("./analytics");
                            t.exports = o.application("Yottie", function(e, t, i) {
                                var o, C = this;
                                C.getParent("Application").call(C), C.id = e, C.$element = n(t), i.apiKey && (i.key = i.apiKey), i.key || delete i.key, C.options = n.extend(!0, {}, x, i), C.analytics = new k("yottie", C.options.widgetId || null);
                                var S = C.options.key;
                                o = n.isArray(S) ? S[Math.floor(Math.random() * S.length)] : S, C.registerComponent(new a(C.options.apiUrl, {
                                    key: o,
                                    public_key: "RWxmc2lnaHQuIEFsbCByaWdodHMgcmVzZXJ2ZWQu"
                                }, "Yottie", C.options.cacheTime)), C.registerComponent(new r(w, C.options.lang)), C.registerComponent(new s(y)), C.registerComponent(new l(b, C.options.color.scheme, C.options.color, "colorizer")), C.registerComponent(new d), C.registerComponent(new c), C.registerComponent(new f(C.options.ads)), C.registerComponent(new u), C.registerComponent(new m), C.registerComponent(new v), C.registerComponent(new g), C.registerComponent(new h);
                                var T = C.component("client");
                                T.attachResponseModifier(function(e) {
                                    var t;
                                    e.error && (t = e.error.code + " " + e.error.message + " " + JSON.stringify(e.error.errors) + " (" + document.location.href + ")", T.ga.collect(t))
                                }), C.analytics.available() && setTimeout(function() {
                                    var e, t = function(e) {
                                        var t = e.height() ? window.innerHeight / e.height() * 50 : 50;
                                        p.inViewPort(e[0], t) && C.analytics.store("view", 1, 86400)
                                    };
                                    C.$element.click(function() {
                                        C.analytics.store("click")
                                    }), jQuery(window).on("scroll resize", function() {
                                        clearTimeout(e), e = setTimeout(function() {
                                            t(C.$element)
                                        }, 100)
                                    }), t(C.$element)
                                }, 1e3)
                            }, {
                                VERSION: "3.3.0"
                            }, {
                                id: null,
                                $element: null,
                                options: null,
                                run: function() {
                                    var e = this;
                                    if (e.$element.addClass("yottie yottie-widget"), e.component("error").run(), "string" === n.type(e.options.sourceGroups) && e.options.sourceGroups.length) try {
                                        e.options.sourceGroups = n.parseJSON(decodeURIComponent(e.options.sourceGroups))
                                    } catch (t) {
                                        e.options.sourceGroups = null
                                    }
                                    if ("string" === n.type(e.options.content.responsive) && e.options.content.responsive.length) try {
                                        e.options.content.responsive = n.parseJSON(decodeURIComponent(e.options.content.responsive))
                                    } catch (t) {
                                        e.options.content.responsive = null
                                    }
                                    e.component("colorizer").run(), e.component("ads").run(), e.component("client").run().done(function() {
                                        e.component("header").run().on("ready", function(t, i) {
                                            var n;
                                            if (jQuery.isArray(e.options.sourceGroups) && e.options.sourceGroups.length) n = e.options.sourceGroups;
                                            else {
                                                if (!e.options.channel) return void e.component("error").throw("Channel and sourceGroups are not specified.");
                                                n = [{
                                                    title: e.component("i18n").t("Uploads"),
                                                    sources: [{
                                                        kind: "youtube#playlist",
                                                        criteria: {
                                                            id: i.channel.contentDetails.relatedPlaylists.uploads
                                                        }
                                                    }]
                                                }]
                                            }
                                            e.component("groups").run(n), e.component("feed").run(n), e.component("widget").run(), e.component("popup").run(), e.component("feed").setActiveSection(0)
                                        })
                                    })
                                },
                                getId: function() {
                                    return this.id
                                }
                            })
                        }, {
                            "./../../olivie/src/js/jquery": 7,
                            "./../../olivie/src/js/modules/appearance/colorizer": 8,
                            "./../../olivie/src/js/modules/appearance/i18n": 9,
                            "./../../olivie/src/js/modules/appearance/renderer": 10,
                            "./../../olivie/src/js/modules/mies/client": 12,
                            "./../../olivie/src/js/olivie": 14,
                            "./../../olivie/src/js/utils": 15,
                            "./analytics": 16,
                            "./defaults": 19,
                            "./dictionary": 20,
                            "./modules/popup/popup": 23,
                            "./modules/widget/ads": 24,
                            "./modules/widget/feed": 26,
                            "./modules/widget/groups": 28,
                            "./modules/widget/header": 29,
                            "./modules/widget/widget": 30,
                            "./modules/widget/yt-error": 31,
                            "./modules/youtube/youtube": 44,
                            "./schemes": 45,
                            "./views": 46
                        }]
                    }, {}, [21])
                }
            }, {}],
            4: [function(e, t, i) {
                var n = e("./__packaged-css"),
                    o = e("./__packaged-js"),
                    a = e("../../bower_components/handlebars/handlebars.runtime"),
                    r = e("./swiper/swiper.js"),
                    s = [{
                        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js",
                        test: function() {
                            return !!window.jQuery
                        }
                    }, {
                        src: "https://www.youtube.com/iframe_api",
                        test: function() {
                            return !!window.YT
                        }
                    }],
                    l = function() {
                        o(a, r)
                    },
                    p = document.createElement("style");
                p.type = "text/css", p.innerHTML = n, document.head.appendChild(p);
                for (var d = 0, c = 0, u = 0; u < s.length; ++u)(function(e, t) {
                    if (!t.test.call()) {
                        ++d;
                        var i = document.createElement("script");
                        i.src = t.src, i.onload = function() {
                            ++c === d && l(), document.head.removeChild(i)
                        }, document.head.appendChild(i)
                    }
                }).call(s[u], u, s[u]);
                d || l()
            }, {
                "../../bower_components/handlebars/handlebars.runtime": 1,
                "./__packaged-css": 2,
                "./__packaged-js": 3,
                "./swiper/swiper.js": 5
            }],
            5: [function(e, t, i) {
                ! function() {
                    var e, t, i, n, o, a, r, s, l, p = function(t, i) {
                        if (!(this instanceof p)) return new p(t, i);
                        var n = {
                                direction: "horizontal",
                                touchEventsTarget: "container",
                                initialSlide: 0,
                                speed: 300,
                                autoplay: !1,
                                autoplayDisableOnInteraction: !0,
                                autoplayStopOnLast: !1,
                                iOSEdgeSwipeDetection: !1,
                                iOSEdgeSwipeThreshold: 20,
                                freeMode: !1,
                                freeModeMomentum: !0,
                                freeModeMomentumRatio: 1,
                                freeModeMomentumBounce: !0,
                                freeModeMomentumBounceRatio: 1,
                                freeModeMomentumVelocityRatio: 1,
                                freeModeSticky: !1,
                                freeModeMinimumVelocity: .02,
                                autoHeight: !1,
                                setWrapperSize: !1,
                                virtualTranslate: !1,
                                effect: "slide",
                                coverflow: {
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: !0
                                },
                                flip: {
                                    slideShadows: !0,
                                    limitRotation: !0
                                },
                                cube: {
                                    slideShadows: !0,
                                    shadow: !0,
                                    shadowOffset: 20,
                                    shadowScale: .94
                                },
                                fade: {
                                    crossFade: !1
                                },
                                parallax: !1,
                                zoom: !1,
                                zoomMax: 3,
                                zoomMin: 1,
                                zoomToggle: !0,
                                scrollbar: null,
                                scrollbarHide: !0,
                                scrollbarDraggable: !1,
                                scrollbarSnapOnRelease: !1,
                                keyboardControl: !1,
                                mousewheelControl: !1,
                                mousewheelReleaseOnEdges: !1,
                                mousewheelInvert: !1,
                                mousewheelForceToAxis: !1,
                                mousewheelSensitivity: 1,
                                mousewheelEventsTarged: "container",
                                hashnav: !1,
                                hashnavWatchState: !1,
                                history: !1,
                                replaceState: !1,
                                breakpoints: void 0,
                                spaceBetween: 0,
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerColumnFill: "column",
                                slidesPerGroup: 1,
                                centeredSlides: !1,
                                slidesOffsetBefore: 0,
                                slidesOffsetAfter: 0,
                                roundLengths: !1,
                                touchRatio: 1,
                                touchAngle: 45,
                                simulateTouch: !0,
                                shortSwipes: !0,
                                longSwipes: !0,
                                longSwipesRatio: .5,
                                longSwipesMs: 300,
                                followFinger: !0,
                                onlyExternal: !1,
                                threshold: 0,
                                touchMoveStopPropagation: !0,
                                touchReleaseOnEdges: !1,
                                uniqueNavElements: !0,
                                pagination: null,
                                paginationElement: "span",
                                paginationClickable: !1,
                                paginationHide: !1,
                                paginationBulletRender: null,
                                paginationProgressRender: null,
                                paginationFractionRender: null,
                                paginationCustomRender: null,
                                paginationType: "bullets",
                                resistance: !0,
                                resistanceRatio: .85,
                                nextButton: null,
                                prevButton: null,
                                watchSlidesProgress: !1,
                                watchSlidesVisibility: !1,
                                grabCursor: !1,
                                preventClicks: !0,
                                preventClicksPropagation: !0,
                                slideToClickedSlide: !1,
                                lazyLoading: !1,
                                lazyLoadingInPrevNext: !1,
                                lazyLoadingInPrevNextAmount: 1,
                                lazyLoadingOnTransitionStart: !1,
                                preloadImages: !0,
                                updateOnImagesReady: !0,
                                loop: !1,
                                loopAdditionalSlides: 0,
                                loopedSlides: null,
                                control: void 0,
                                controlInverse: !1,
                                controlBy: "slide",
                                normalizeSlideIndex: !0,
                                allowSwipeToPrev: !0,
                                allowSwipeToNext: !0,
                                swipeHandler: null,
                                noSwiping: !0,
                                noSwipingClass: "swiper-no-swiping",
                                passiveListeners: !0,
                                containerModifierClass: "swiper-container-",
                                slideClass: "swiper-slide",
                                slideActiveClass: "swiper-slide-active",
                                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                                slideVisibleClass: "swiper-slide-visible",
                                slideDuplicateClass: "swiper-slide-duplicate",
                                slideNextClass: "swiper-slide-next",
                                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                                slidePrevClass: "swiper-slide-prev",
                                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                                wrapperClass: "swiper-wrapper",
                                bulletClass: "swiper-pagination-bullet",
                                bulletActiveClass: "swiper-pagination-bullet-active",
                                buttonDisabledClass: "swiper-button-disabled",
                                paginationCurrentClass: "swiper-pagination-current",
                                paginationTotalClass: "swiper-pagination-total",
                                paginationHiddenClass: "swiper-pagination-hidden",
                                paginationProgressbarClass: "swiper-pagination-progressbar",
                                paginationClickableClass: "swiper-pagination-clickable",
                                paginationModifierClass: "swiper-pagination-",
                                lazyLoadingClass: "swiper-lazy",
                                lazyStatusLoadingClass: "swiper-lazy-loading",
                                lazyStatusLoadedClass: "swiper-lazy-loaded",
                                lazyPreloaderClass: "swiper-lazy-preloader",
                                notificationClass: "swiper-notification",
                                preloaderClass: "preloader",
                                zoomContainerClass: "swiper-zoom-container",
                                observer: !1,
                                observeParents: !1,
                                a11y: !1,
                                prevSlideMessage: "Previous slide",
                                nextSlideMessage: "Next slide",
                                firstSlideMessage: "This is the first slide",
                                lastSlideMessage: "This is the last slide",
                                paginationBulletMessage: "Go to slide {{index}}",
                                runCallbacksOnInit: !0
                            },
                            o = i && i.virtualTranslate;
                        i = i || {};
                        var a = {};
                        for (var r in i)
                            if ("object" != typeof i[r] || null === i[r] || i[r].nodeType || i[r] === window || i[r] === document || void 0 !== m && i[r] instanceof m || "undefined" != typeof jQuery && i[r] instanceof jQuery) a[r] = i[r];
                            else
                                for (var s in a[r] = {}, i[r]) a[r][s] = i[r][s];
                        for (var l in n)
                            if (void 0 === i[l]) i[l] = n[l];
                            else if ("object" == typeof i[l])
                            for (var d in n[l]) void 0 === i[l][d] && (i[l][d] = n[l][d]);
                        var c = this;
                        if (c.params = i, c.originalParams = a, c.classNames = [], void 0 !== e && void 0 !== m && (e = m), (void 0 !== e || (e = void 0 === m ? window.Dom7 || window.Zepto || window.jQuery : m)) && (c.$ = e, c.currentBreakpoint = void 0, c.getActiveBreakpoint = function() {
                                if (!c.params.breakpoints) return !1;
                                var e, t = !1,
                                    i = [];
                                for (e in c.params.breakpoints) c.params.breakpoints.hasOwnProperty(e) && i.push(e);
                                i.sort(function(e, t) {
                                    return parseInt(e, 10) > parseInt(t, 10)
                                });
                                for (var n = 0; n < i.length; n++)(e = i[n]) >= window.innerWidth && !t && (t = e);
                                return t || "max"
                            }, c.setBreakpoint = function() {
                                var e = c.getActiveBreakpoint();
                                if (e && c.currentBreakpoint !== e) {
                                    var t = e in c.params.breakpoints ? c.params.breakpoints[e] : c.originalParams,
                                        i = c.params.loop && t.slidesPerView !== c.params.slidesPerView;
                                    for (var n in t) c.params[n] = t[n];
                                    c.currentBreakpoint = e, i && c.destroyLoop && c.reLoop(!0)
                                }
                            }, c.params.breakpoints && c.setBreakpoint(), c.container = e(t), 0 !== c.container.length)) {
                            if (1 < c.container.length) {
                                var u = [];
                                return c.container.each(function() {
                                    u.push(new p(this, i))
                                }), u
                            }(c.container[0].swiper = c).container.data("swiper", c), c.classNames.push(c.params.containerModifierClass + c.params.direction), c.params.freeMode && c.classNames.push(c.params.containerModifierClass + "free-mode"), c.support.flexbox || (c.classNames.push(c.params.containerModifierClass + "no-flexbox"), c.params.slidesPerColumn = 1), c.params.autoHeight && c.classNames.push(c.params.containerModifierClass + "autoheight"), (c.params.parallax || c.params.watchSlidesVisibility) && (c.params.watchSlidesProgress = !0), c.params.touchReleaseOnEdges && (c.params.resistanceRatio = 0), 0 <= ["cube", "coverflow", "flip"].indexOf(c.params.effect) && (c.support.transforms3d ? (c.params.watchSlidesProgress = !0, c.classNames.push(c.params.containerModifierClass + "3d")) : c.params.effect = "slide"), "slide" !== c.params.effect && c.classNames.push(c.params.containerModifierClass + c.params.effect), "cube" === c.params.effect && (c.params.resistanceRatio = 0, c.params.slidesPerView = 1, c.params.slidesPerColumn = 1, c.params.slidesPerGroup = 1, c.params.centeredSlides = !1, c.params.spaceBetween = 0, c.params.virtualTranslate = !0), "fade" !== c.params.effect && "flip" !== c.params.effect || (c.params.slidesPerView = 1, c.params.slidesPerColumn = 1, c.params.slidesPerGroup = 1, c.params.watchSlidesProgress = !0, void(c.params.spaceBetween = 0) === o && (c.params.virtualTranslate = !0)), c.params.grabCursor && c.support.touch && (c.params.grabCursor = !1), c.wrapper = c.container.children("." + c.params.wrapperClass), c.params.pagination && (c.paginationContainer = e(c.params.pagination), c.params.uniqueNavElements && "string" == typeof c.params.pagination && 1 < c.paginationContainer.length && 1 === c.container.find(c.params.pagination).length && (c.paginationContainer = c.container.find(c.params.pagination)), "bullets" === c.params.paginationType && c.params.paginationClickable ? c.paginationContainer.addClass(c.params.paginationModifierClass + "clickable") : c.params.paginationClickable = !1, c.paginationContainer.addClass(c.params.paginationModifierClass + c.params.paginationType)), (c.params.nextButton || c.params.prevButton) && (c.params.nextButton && (c.nextButton = e(c.params.nextButton), c.params.uniqueNavElements && "string" == typeof c.params.nextButton && 1 < c.nextButton.length && 1 === c.container.find(c.params.nextButton).length && (c.nextButton = c.container.find(c.params.nextButton))), c.params.prevButton && (c.prevButton = e(c.params.prevButton), c.params.uniqueNavElements && "string" == typeof c.params.prevButton && 1 < c.prevButton.length && 1 === c.container.find(c.params.prevButton).length && (c.prevButton = c.container.find(c.params.prevButton)))), c.isHorizontal = function() {
                                return "horizontal" === c.params.direction
                            }, c.rtl = c.isHorizontal() && ("rtl" === c.container[0].dir.toLowerCase() || "rtl" === c.container.css("direction")), c.rtl && c.classNames.push(c.params.containerModifierClass + "rtl"), c.rtl && (c.wrongRTL = "-webkit-box" === c.wrapper.css("display")), 1 < c.params.slidesPerColumn && c.classNames.push(c.params.containerModifierClass + "multirow"), c.device.android && c.classNames.push(c.params.containerModifierClass + "android"), c.container.addClass(c.classNames.join(" ")), c.translate = 0, c.progress = 0, c.velocity = 0, c.lockSwipeToNext = function() {
                                (c.params.allowSwipeToNext = !1) === c.params.allowSwipeToPrev && c.params.grabCursor && c.unsetGrabCursor()
                            }, c.lockSwipeToPrev = function() {
                                (c.params.allowSwipeToPrev = !1) === c.params.allowSwipeToNext && c.params.grabCursor && c.unsetGrabCursor()
                            }, c.lockSwipes = function() {
                                c.params.allowSwipeToNext = c.params.allowSwipeToPrev = !1, c.params.grabCursor && c.unsetGrabCursor()
                            }, c.unlockSwipeToNext = function() {
                                (c.params.allowSwipeToNext = !0) === c.params.allowSwipeToPrev && c.params.grabCursor && c.setGrabCursor()
                            }, c.unlockSwipeToPrev = function() {
                                (c.params.allowSwipeToPrev = !0) === c.params.allowSwipeToNext && c.params.grabCursor && c.setGrabCursor()
                            }, c.unlockSwipes = function() {
                                c.params.allowSwipeToNext = c.params.allowSwipeToPrev = !0, c.params.grabCursor && c.setGrabCursor()
                            }, c.setGrabCursor = function(e) {
                                c.container[0].style.cursor = "move", c.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", c.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", c.container[0].style.cursor = e ? "grabbing" : "grab"
                            }, c.unsetGrabCursor = function() {
                                c.container[0].style.cursor = ""
                            }, c.params.grabCursor && c.setGrabCursor(), c.imagesToLoad = [], c.imagesLoaded = 0, c.loadImage = function(e, t, i, n, o, a) {
                                var r;

                                function s() {
                                    a && a()
                                }
                                e.complete && o ? s() : t ? ((r = new window.Image).onload = s, r.onerror = s, n && (r.sizes = n), i && (r.srcset = i), t && (r.src = t)) : s()
                            }, c.preloadImages = function() {
                                function e() {
                                    null != c && c && (void 0 !== c.imagesLoaded && c.imagesLoaded++, c.imagesLoaded === c.imagesToLoad.length && (c.params.updateOnImagesReady && c.update(), c.emit("onImagesReady", c)))
                                }
                                c.imagesToLoad = c.container.find("img");
                                for (var t = 0; t < c.imagesToLoad.length; t++) c.loadImage(c.imagesToLoad[t], c.imagesToLoad[t].currentSrc || c.imagesToLoad[t].getAttribute("src"), c.imagesToLoad[t].srcset || c.imagesToLoad[t].getAttribute("srcset"), c.imagesToLoad[t].sizes || c.imagesToLoad[t].getAttribute("sizes"), !0, e)
                            }, c.autoplayTimeoutId = void 0, c.autoplaying = !1, c.autoplayPaused = !1, c.startAutoplay = function() {
                                return void 0 === c.autoplayTimeoutId && !!c.params.autoplay && !c.autoplaying && (c.autoplaying = !0, c.emit("onAutoplayStart", c), void A())
                            }, c.stopAutoplay = function(e) {
                                c.autoplayTimeoutId && (c.autoplayTimeoutId && clearTimeout(c.autoplayTimeoutId), c.autoplaying = !1, c.autoplayTimeoutId = void 0, c.emit("onAutoplayStop", c))
                            }, c.pauseAutoplay = function(e) {
                                c.autoplayPaused || (c.autoplayTimeoutId && clearTimeout(c.autoplayTimeoutId), c.autoplayPaused = !0, 0 === e ? (c.autoplayPaused = !1, A()) : c.wrapper.transitionEnd(function() {
                                    c && (c.autoplayPaused = !1, c.autoplaying ? A() : c.stopAutoplay())
                                }))
                            }, c.minTranslate = function() {
                                return -c.snapGrid[0]
                            }, c.maxTranslate = function() {
                                return -c.snapGrid[c.snapGrid.length - 1]
                            }, c.updateAutoHeight = function() {
                                var e, t = [],
                                    i = 0;
                                if ("auto" !== c.params.slidesPerView && 1 < c.params.slidesPerView)
                                    for (e = 0; e < Math.ceil(c.params.slidesPerView); e++) {
                                        var n = c.activeIndex + e;
                                        if (n > c.slides.length) break;
                                        t.push(c.slides.eq(n)[0])
                                    } else t.push(c.slides.eq(c.activeIndex)[0]);
                                for (e = 0; e < t.length; e++)
                                    if (void 0 !== t[e]) {
                                        var o = t[e].offsetHeight;
                                        i = i < o ? o : i
                                    }
                                i && c.wrapper.css("height", i + "px")
                            }, c.updateContainerSize = function() {
                                var e, t;
                                e = void 0 !== c.params.width ? c.params.width : c.container[0].clientWidth, t = void 0 !== c.params.height ? c.params.height : c.container[0].clientHeight, 0 === e && c.isHorizontal() || 0 === t && !c.isHorizontal() || (e = e - parseInt(c.container.css("padding-left"), 10) - parseInt(c.container.css("padding-right"), 10), t = t - parseInt(c.container.css("padding-top"), 10) - parseInt(c.container.css("padding-bottom"), 10), c.width = e, c.height = t, c.size = c.isHorizontal() ? c.width : c.height)
                            }, c.updateSlidesSize = function() {
                                c.slides = c.wrapper.children("." + c.params.slideClass), c.snapGrid = [], c.slidesGrid = [], c.slidesSizesGrid = [];
                                var e, t = c.params.spaceBetween,
                                    i = -c.params.slidesOffsetBefore,
                                    n = 0,
                                    o = 0;
                                if (void 0 !== c.size) {
                                    var a, r;
                                    "string" == typeof t && 0 <= t.indexOf("%") && (t = parseFloat(t.replace("%", "")) / 100 * c.size), c.virtualSize = -t, c.rtl ? c.slides.css({
                                        marginLeft: "",
                                        marginTop: ""
                                    }) : c.slides.css({
                                        marginRight: "",
                                        marginBottom: ""
                                    }), 1 < c.params.slidesPerColumn && (a = Math.floor(c.slides.length / c.params.slidesPerColumn) === c.slides.length / c.params.slidesPerColumn ? c.slides.length : Math.ceil(c.slides.length / c.params.slidesPerColumn) * c.params.slidesPerColumn, "auto" !== c.params.slidesPerView && "row" === c.params.slidesPerColumnFill && (a = Math.max(a, c.params.slidesPerView * c.params.slidesPerColumn)));
                                    var s, l = c.params.slidesPerColumn,
                                        p = a / l,
                                        d = p - (c.params.slidesPerColumn * p - c.slides.length);
                                    for (e = 0; e < c.slides.length; e++) {
                                        r = 0;
                                        var u, m, h, g = c.slides.eq(e);
                                        1 < c.params.slidesPerColumn && ("column" === c.params.slidesPerColumnFill ? (h = e - (m = Math.floor(e / l)) * l, (d < m || m === d && h === l - 1) && ++h >= l && (h = 0, m++), u = m + h * a / l, g.css({
                                            "-webkit-box-ordinal-group": u,
                                            "-moz-box-ordinal-group": u,
                                            "-ms-flex-order": u,
                                            "-webkit-order": u,
                                            order: u
                                        })) : m = e - (h = Math.floor(e / p)) * p, g.css("margin-" + (c.isHorizontal() ? "top" : "left"), 0 !== h && c.params.spaceBetween && c.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h)), "none" !== g.css("display") && ("auto" === c.params.slidesPerView ? (r = c.isHorizontal() ? g.outerWidth(!0) : g.outerHeight(!0), c.params.roundLengths && (r = P(r))) : (r = (c.size - (c.params.slidesPerView - 1) * t) / c.params.slidesPerView, c.params.roundLengths && (r = P(r)), c.isHorizontal() ? c.slides[e].style.width = r + "px" : c.slides[e].style.height = r + "px"), c.slides[e].swiperSlideSize = r, c.slidesSizesGrid.push(r), c.params.centeredSlides ? (i = i + r / 2 + n / 2 + t, 0 === n && 0 !== e && (i = i - c.size / 2 - t), 0 === e && (i = i - c.size / 2 - t), Math.abs(i) < .001 && (i = 0), o % c.params.slidesPerGroup == 0 && c.snapGrid.push(i), c.slidesGrid.push(i)) : (o % c.params.slidesPerGroup == 0 && c.snapGrid.push(i), c.slidesGrid.push(i), i = i + r + t), c.virtualSize += r + t, n = r, o++)
                                    }
                                    if (c.virtualSize = Math.max(c.virtualSize, c.size) + c.params.slidesOffsetAfter, c.rtl && c.wrongRTL && ("slide" === c.params.effect || "coverflow" === c.params.effect) && c.wrapper.css({
                                            width: c.virtualSize + c.params.spaceBetween + "px"
                                        }), c.support.flexbox && !c.params.setWrapperSize || (c.isHorizontal() ? c.wrapper.css({
                                            width: c.virtualSize + c.params.spaceBetween + "px"
                                        }) : c.wrapper.css({
                                            height: c.virtualSize + c.params.spaceBetween + "px"
                                        })), 1 < c.params.slidesPerColumn && (c.virtualSize = (r + c.params.spaceBetween) * a, c.virtualSize = Math.ceil(c.virtualSize / c.params.slidesPerColumn) - c.params.spaceBetween, c.isHorizontal() ? c.wrapper.css({
                                            width: c.virtualSize + c.params.spaceBetween + "px"
                                        }) : c.wrapper.css({
                                            height: c.virtualSize + c.params.spaceBetween + "px"
                                        }), c.params.centeredSlides)) {
                                        for (s = [], e = 0; e < c.snapGrid.length; e++) c.snapGrid[e] < c.virtualSize + c.snapGrid[0] && s.push(c.snapGrid[e]);
                                        c.snapGrid = s
                                    }
                                    if (!c.params.centeredSlides) {
                                        for (s = [], e = 0; e < c.snapGrid.length; e++) c.snapGrid[e] <= c.virtualSize - c.size && s.push(c.snapGrid[e]);
                                        c.snapGrid = s, 1 < Math.floor(c.virtualSize - c.size) - Math.floor(c.snapGrid[c.snapGrid.length - 1]) && c.snapGrid.push(c.virtualSize - c.size)
                                    }
                                    0 === c.snapGrid.length && (c.snapGrid = [0]), 0 !== c.params.spaceBetween && (c.isHorizontal() ? c.rtl ? c.slides.css({
                                        marginLeft: t + "px"
                                    }) : c.slides.css({
                                        marginRight: t + "px"
                                    }) : c.slides.css({
                                        marginBottom: t + "px"
                                    })), c.params.watchSlidesProgress && c.updateSlidesOffset()
                                }
                            }, c.updateSlidesOffset = function() {
                                for (var e = 0; e < c.slides.length; e++) c.slides[e].swiperSlideOffset = c.isHorizontal() ? c.slides[e].offsetLeft : c.slides[e].offsetTop
                            }, c.currentSlidesPerView = function() {
                                var e, t, i = 1;
                                if (c.params.centeredSlides) {
                                    var n, o = c.slides[c.activeIndex].swiperSlideSize;
                                    for (e = c.activeIndex + 1; e < c.slides.length; e++) c.slides[e] && !n && (i++, (o += c.slides[e].swiperSlideSize) > c.size && (n = !0));
                                    for (t = c.activeIndex - 1; 0 <= t; t--) c.slides[t] && !n && (i++, (o += c.slides[t].swiperSlideSize) > c.size && (n = !0))
                                } else
                                    for (e = c.activeIndex + 1; e < c.slides.length; e++) c.slidesGrid[e] - c.slidesGrid[c.activeIndex] < c.size && i++;
                                return i
                            }, c.updateSlidesProgress = function(e) {
                                if (void 0 === e && (e = c.translate || 0), 0 !== c.slides.length) {
                                    void 0 === c.slides[0].swiperSlideOffset && c.updateSlidesOffset();
                                    var t = -e;
                                    c.rtl && (t = e), c.slides.removeClass(c.params.slideVisibleClass);
                                    for (var i = 0; i < c.slides.length; i++) {
                                        var n = c.slides[i],
                                            o = (t + (c.params.centeredSlides ? c.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + c.params.spaceBetween);
                                        if (c.params.watchSlidesVisibility) {
                                            var a = -(t - n.swiperSlideOffset),
                                                r = a + c.slidesSizesGrid[i];
                                            (0 <= a && a < c.size || 0 < r && r <= c.size || a <= 0 && r >= c.size) && c.slides.eq(i).addClass(c.params.slideVisibleClass)
                                        }
                                        n.progress = c.rtl ? -o : o
                                    }
                                }
                            }, c.updateProgress = function(e) {
                                void 0 === e && (e = c.translate || 0);
                                var t = c.maxTranslate() - c.minTranslate(),
                                    i = c.isBeginning,
                                    n = c.isEnd;
                                0 === t ? (c.progress = 0, c.isBeginning = c.isEnd = !0) : (c.progress = (e - c.minTranslate()) / t, c.isBeginning = c.progress <= 0, c.isEnd = 1 <= c.progress), c.isBeginning && !i && c.emit("onReachBeginning", c), c.isEnd && !n && c.emit("onReachEnd", c), c.params.watchSlidesProgress && c.updateSlidesProgress(e), c.emit("onProgress", c, c.progress)
                            }, c.updateActiveIndex = function() {
                                var e, t, i, n = c.rtl ? c.translate : -c.translate;
                                for (t = 0; t < c.slidesGrid.length; t++) void 0 !== c.slidesGrid[t + 1] ? n >= c.slidesGrid[t] && n < c.slidesGrid[t + 1] - (c.slidesGrid[t + 1] - c.slidesGrid[t]) / 2 ? e = t : n >= c.slidesGrid[t] && n < c.slidesGrid[t + 1] && (e = t + 1) : n >= c.slidesGrid[t] && (e = t);
                                c.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), (i = Math.floor(e / c.params.slidesPerGroup)) >= c.snapGrid.length && (i = c.snapGrid.length - 1), e !== c.activeIndex && (c.snapIndex = i, c.previousIndex = c.activeIndex, c.activeIndex = e, c.updateClasses(), c.updateRealIndex())
                            }, c.updateRealIndex = function() {
                                c.realIndex = parseInt(c.slides.eq(c.activeIndex).attr("data-swiper-slide-index") || c.activeIndex, 10)
                            }, c.updateClasses = function() {
                                c.slides.removeClass(c.params.slideActiveClass + " " + c.params.slideNextClass + " " + c.params.slidePrevClass + " " + c.params.slideDuplicateActiveClass + " " + c.params.slideDuplicateNextClass + " " + c.params.slideDuplicatePrevClass);
                                var t = c.slides.eq(c.activeIndex);
                                t.addClass(c.params.slideActiveClass), i.loop && (t.hasClass(c.params.slideDuplicateClass) ? c.wrapper.children("." + c.params.slideClass + ":not(." + c.params.slideDuplicateClass + ')[data-swiper-slide-index="' + c.realIndex + '"]').addClass(c.params.slideDuplicateActiveClass) : c.wrapper.children("." + c.params.slideClass + "." + c.params.slideDuplicateClass + '[data-swiper-slide-index="' + c.realIndex + '"]').addClass(c.params.slideDuplicateActiveClass));
                                var n = t.next("." + c.params.slideClass).addClass(c.params.slideNextClass);
                                c.params.loop && 0 === n.length && (n = c.slides.eq(0)).addClass(c.params.slideNextClass);
                                var o = t.prev("." + c.params.slideClass).addClass(c.params.slidePrevClass);
                                if (c.params.loop && 0 === o.length && (o = c.slides.eq(-1)).addClass(c.params.slidePrevClass), i.loop && (n.hasClass(c.params.slideDuplicateClass) ? c.wrapper.children("." + c.params.slideClass + ":not(." + c.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(c.params.slideDuplicateNextClass) : c.wrapper.children("." + c.params.slideClass + "." + c.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(c.params.slideDuplicateNextClass), o.hasClass(c.params.slideDuplicateClass) ? c.wrapper.children("." + c.params.slideClass + ":not(." + c.params.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(c.params.slideDuplicatePrevClass) : c.wrapper.children("." + c.params.slideClass + "." + c.params.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(c.params.slideDuplicatePrevClass)), c.paginationContainer && 0 < c.paginationContainer.length) {
                                    var a, r = c.params.loop ? Math.ceil((c.slides.length - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length;
                                    if (c.params.loop ? ((a = Math.ceil((c.activeIndex - c.loopedSlides) / c.params.slidesPerGroup)) > c.slides.length - 1 - 2 * c.loopedSlides && (a -= c.slides.length - 2 * c.loopedSlides), r - 1 < a && (a -= r), a < 0 && "bullets" !== c.params.paginationType && (a = r + a)) : a = void 0 !== c.snapIndex ? c.snapIndex : c.activeIndex || 0, "bullets" === c.params.paginationType && c.bullets && 0 < c.bullets.length && (c.bullets.removeClass(c.params.bulletActiveClass), 1 < c.paginationContainer.length ? c.bullets.each(function() {
                                            e(this).index() === a && e(this).addClass(c.params.bulletActiveClass)
                                        }) : c.bullets.eq(a).addClass(c.params.bulletActiveClass)), "fraction" === c.params.paginationType && (c.paginationContainer.find("." + c.params.paginationCurrentClass).text(a + 1), c.paginationContainer.find("." + c.params.paginationTotalClass).text(r)), "progress" === c.params.paginationType) {
                                        var s = (a + 1) / r,
                                            l = s,
                                            p = 1;
                                        c.isHorizontal() || (p = s, l = 1), c.paginationContainer.find("." + c.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(c.params.speed)
                                    }
                                    "custom" === c.params.paginationType && c.params.paginationCustomRender && (c.paginationContainer.html(c.params.paginationCustomRender(c, a + 1, r)), c.emit("onPaginationRendered", c, c.paginationContainer[0]))
                                }
                                c.params.loop || (c.params.prevButton && c.prevButton && 0 < c.prevButton.length && (c.isBeginning ? (c.prevButton.addClass(c.params.buttonDisabledClass), c.params.a11y && c.a11y && c.a11y.disable(c.prevButton)) : (c.prevButton.removeClass(c.params.buttonDisabledClass), c.params.a11y && c.a11y && c.a11y.enable(c.prevButton))), c.params.nextButton && c.nextButton && 0 < c.nextButton.length && (c.isEnd ? (c.nextButton.addClass(c.params.buttonDisabledClass), c.params.a11y && c.a11y && c.a11y.disable(c.nextButton)) : (c.nextButton.removeClass(c.params.buttonDisabledClass), c.params.a11y && c.a11y && c.a11y.enable(c.nextButton))))
                            }, c.updatePagination = function() {
                                if (c.params.pagination && c.paginationContainer && 0 < c.paginationContainer.length) {
                                    var e = "";
                                    if ("bullets" === c.params.paginationType) {
                                        for (var t = c.params.loop ? Math.ceil((c.slides.length - 2 * c.loopedSlides) / c.params.slidesPerGroup) : c.snapGrid.length, i = 0; i < t; i++) c.params.paginationBulletRender ? e += c.params.paginationBulletRender(c, i, c.params.bulletClass) : e += "<" + c.params.paginationElement + ' class="' + c.params.bulletClass + '"></' + c.params.paginationElement + ">";
                                        c.paginationContainer.html(e), c.bullets = c.paginationContainer.find("." + c.params.bulletClass), c.params.paginationClickable && c.params.a11y && c.a11y && c.a11y.initPagination()
                                    }
                                    "fraction" === c.params.paginationType && (e = c.params.paginationFractionRender ? c.params.paginationFractionRender(c, c.params.paginationCurrentClass, c.params.paginationTotalClass) : '<span class="' + c.params.paginationCurrentClass + '"></span> / <span class="' + c.params.paginationTotalClass + '"></span>', c.paginationContainer.html(e)), "progress" === c.params.paginationType && (e = c.params.paginationProgressRender ? c.params.paginationProgressRender(c, c.params.paginationProgressbarClass) : '<span class="' + c.params.paginationProgressbarClass + '"></span>', c.paginationContainer.html(e)), "custom" !== c.params.paginationType && c.emit("onPaginationRendered", c, c.paginationContainer[0])
                                }
                            }, c.update = function(e) {
                                var t;

                                function i() {
                                    c.rtl, c.translate, t = Math.min(Math.max(c.translate, c.maxTranslate()), c.minTranslate()), c.setWrapperTranslate(t), c.updateActiveIndex(), c.updateClasses()
                                }
                                c && (c.updateContainerSize(), c.updateSlidesSize(), c.updateProgress(), c.updatePagination(), c.updateClasses(), c.params.scrollbar && c.scrollbar && c.scrollbar.set(), e ? (c.controller && c.controller.spline && (c.controller.spline = void 0), c.params.freeMode ? (i(), c.params.autoHeight && c.updateAutoHeight()) : (("auto" === c.params.slidesPerView || 1 < c.params.slidesPerView) && c.isEnd && !c.params.centeredSlides ? c.slideTo(c.slides.length - 1, 0, !1, !0) : c.slideTo(c.activeIndex, 0, !1, !0)) || i()) : c.params.autoHeight && c.updateAutoHeight())
                            }, c.onResize = function(e) {
                                c.params.onBeforeResize && c.params.onBeforeResize(c), c.params.breakpoints && c.setBreakpoint();
                                var t = c.params.allowSwipeToPrev,
                                    i = c.params.allowSwipeToNext;
                                c.params.allowSwipeToPrev = c.params.allowSwipeToNext = !0, c.updateContainerSize(), c.updateSlidesSize(), ("auto" === c.params.slidesPerView || c.params.freeMode || e) && c.updatePagination(), c.params.scrollbar && c.scrollbar && c.scrollbar.set(), c.controller && c.controller.spline && (c.controller.spline = void 0);
                                var n = !1;
                                if (c.params.freeMode) {
                                    var o = Math.min(Math.max(c.translate, c.maxTranslate()), c.minTranslate());
                                    c.setWrapperTranslate(o), c.updateActiveIndex(), c.updateClasses(), c.params.autoHeight && c.updateAutoHeight()
                                } else c.updateClasses(), n = ("auto" === c.params.slidesPerView || 1 < c.params.slidesPerView) && c.isEnd && !c.params.centeredSlides ? c.slideTo(c.slides.length - 1, 0, !1, !0) : c.slideTo(c.activeIndex, 0, !1, !0);
                                c.params.lazyLoading && !n && c.lazy && c.lazy.load(), c.params.allowSwipeToPrev = t, c.params.allowSwipeToNext = i, c.params.onAfterResize && c.params.onAfterResize(c)
                            }, c.touchEventsDesktop = {
                                start: "mousedown",
                                move: "mousemove",
                                end: "mouseup"
                            }, window.navigator.pointerEnabled ? c.touchEventsDesktop = {
                                start: "pointerdown",
                                move: "pointermove",
                                end: "pointerup"
                            } : window.navigator.msPointerEnabled && (c.touchEventsDesktop = {
                                start: "MSPointerDown",
                                move: "MSPointerMove",
                                end: "MSPointerUp"
                            }), c.touchEvents = {
                                start: c.support.touch || !c.params.simulateTouch ? "touchstart" : c.touchEventsDesktop.start,
                                move: c.support.touch || !c.params.simulateTouch ? "touchmove" : c.touchEventsDesktop.move,
                                end: c.support.touch || !c.params.simulateTouch ? "touchend" : c.touchEventsDesktop.end
                            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === c.params.touchEventsTarget ? c.container : c.wrapper).addClass("swiper-wp8-" + c.params.direction), c.initEvents = function(e) {
                                var t = e ? "off" : "on",
                                    n = e ? "removeEventListener" : "addEventListener",
                                    o = "container" === c.params.touchEventsTarget ? c.container[0] : c.wrapper[0],
                                    a = c.support.touch ? o : document,
                                    r = !!c.params.nested;
                                if (c.browser.ie) o[n](c.touchEvents.start, c.onTouchStart, !1), a[n](c.touchEvents.move, c.onTouchMove, r), a[n](c.touchEvents.end, c.onTouchEnd, !1);
                                else {
                                    if (c.support.touch) {
                                        var s = !("touchstart" !== c.touchEvents.start || !c.support.passiveListener || !c.params.passiveListeners) && {
                                            passive: !0,
                                            capture: !1
                                        };
                                        o[n](c.touchEvents.start, c.onTouchStart, s), o[n](c.touchEvents.move, c.onTouchMove, r), o[n](c.touchEvents.end, c.onTouchEnd, s)
                                    }(i.simulateTouch && !c.device.ios && !c.device.android || i.simulateTouch && !c.support.touch && c.device.ios) && (o[n]("mousedown", c.onTouchStart, !1), document[n]("mousemove", c.onTouchMove, r), document[n]("mouseup", c.onTouchEnd, !1))
                                }
                                window[n]("resize", c.onResize), c.params.nextButton && c.nextButton && 0 < c.nextButton.length && (c.nextButton[t]("click", c.onClickNext), c.params.a11y && c.a11y && c.nextButton[t]("keydown", c.a11y.onEnterKey)), c.params.prevButton && c.prevButton && 0 < c.prevButton.length && (c.prevButton[t]("click", c.onClickPrev), c.params.a11y && c.a11y && c.prevButton[t]("keydown", c.a11y.onEnterKey)), c.params.pagination && c.params.paginationClickable && (c.paginationContainer[t]("click", "." + c.params.bulletClass, c.onClickIndex), c.params.a11y && c.a11y && c.paginationContainer[t]("keydown", "." + c.params.bulletClass, c.a11y.onEnterKey)), (c.params.preventClicks || c.params.preventClicksPropagation) && o[n]("click", c.preventClicks, !0)
                            }, c.attachEvents = function() {
                                c.initEvents()
                            }, c.detachEvents = function() {
                                c.initEvents(!0)
                            }, c.allowClick = !0, c.preventClicks = function(e) {
                                c.allowClick || (c.params.preventClicks && e.preventDefault(), c.params.preventClicksPropagation && c.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                            }, c.onClickNext = function(e) {
                                e.preventDefault(), c.isEnd && !c.params.loop || c.slideNext()
                            }, c.onClickPrev = function(e) {
                                e.preventDefault(), c.isBeginning && !c.params.loop || c.slidePrev()
                            }, c.onClickIndex = function(t) {
                                t.preventDefault();
                                var i = e(this).index() * c.params.slidesPerGroup;
                                c.params.loop && (i += c.loopedSlides), c.slideTo(i)
                            }, c.updateClickedSlide = function(t) {
                                var i = L(t, "." + c.params.slideClass),
                                    n = !1;
                                if (i)
                                    for (var o = 0; o < c.slides.length; o++) c.slides[o] === i && (n = !0);
                                if (!i || !n) return c.clickedSlide = void 0, void(c.clickedIndex = void 0);
                                if (c.clickedSlide = i, c.clickedIndex = e(i).index(), c.params.slideToClickedSlide && void 0 !== c.clickedIndex && c.clickedIndex !== c.activeIndex) {
                                    var a, r = c.clickedIndex,
                                        s = "auto" === c.params.slidesPerView ? c.currentSlidesPerView() : c.params.slidesPerView;
                                    if (c.params.loop) {
                                        if (c.animating) return;
                                        a = parseInt(e(c.clickedSlide).attr("data-swiper-slide-index"), 10), c.params.centeredSlides ? r < c.loopedSlides - s / 2 || r > c.slides.length - c.loopedSlides + s / 2 ? (c.fixLoop(), r = c.wrapper.children("." + c.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + c.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                            c.slideTo(r)
                                        }, 0)) : c.slideTo(r) : r > c.slides.length - s ? (c.fixLoop(), r = c.wrapper.children("." + c.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + c.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                            c.slideTo(r)
                                        }, 0)) : c.slideTo(r)
                                    } else c.slideTo(r)
                                }
                            };
                            var h, g, f, v, w, y, b, x, k, C, S, T, z = "input, select, textarea, button, video",
                                M = Date.now(),
                                D = [];
                            for (var E in c.animating = !1, c.touches = {
                                    startX: 0,
                                    startY: 0,
                                    currentX: 0,
                                    currentY: 0,
                                    diff: 0
                                }, c.onTouchStart = function(t) {
                                    if (t.originalEvent && (t = t.originalEvent), (S = "touchstart" === t.type) || !("which" in t) || 3 !== t.which)
                                        if (c.params.noSwiping && L(t, "." + c.params.noSwipingClass)) c.allowClick = !0;
                                        else if (!c.params.swipeHandler || L(t, c.params.swipeHandler)) {
                                        var i = c.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                            n = c.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                                        if (!(c.device.ios && c.params.iOSEdgeSwipeDetection && i <= c.params.iOSEdgeSwipeThreshold)) {
                                            if (f = !(g = !(h = !0)), T = w = void 0, c.touches.startX = i, c.touches.startY = n, v = Date.now(), c.allowClick = !0, c.updateContainerSize(), c.swipeDirection = void 0, 0 < c.params.threshold && (x = !1), "touchstart" !== t.type) {
                                                var o = !0;
                                                e(t.target).is(z) && (o = !1), document.activeElement && e(document.activeElement).is(z) && document.activeElement.blur(), o && t.preventDefault()
                                            }
                                            c.emit("onTouchStart", c, t)
                                        }
                                    }
                                }, c.onTouchMove = function(t) {
                                    if (t.originalEvent && (t = t.originalEvent), !S || "mousemove" !== t.type) {
                                        if (t.preventedByNestedSwiper) return c.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(c.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                                        if (c.params.onlyExternal) return c.allowClick = !1, void(h && (c.touches.startX = c.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, c.touches.startY = c.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, v = Date.now()));
                                        if (S && c.params.touchReleaseOnEdges && !c.params.loop)
                                            if (c.isHorizontal()) {
                                                if (c.touches.currentX < c.touches.startX && c.translate <= c.maxTranslate() || c.touches.currentX > c.touches.startX && c.translate >= c.minTranslate()) return
                                            } else if (c.touches.currentY < c.touches.startY && c.translate <= c.maxTranslate() || c.touches.currentY > c.touches.startY && c.translate >= c.minTranslate()) return;
                                        if (S && document.activeElement && t.target === document.activeElement && e(t.target).is(z)) return g = !0, void(c.allowClick = !1);
                                        var n;
                                        if (f && c.emit("onTouchMove", c, t), !(t.targetTouches && 1 < t.targetTouches.length))
                                            if (c.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, c.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === w && (w = !(c.isHorizontal() && c.touches.currentY === c.touches.startY || !c.isHorizontal() && c.touches.currentX === c.touches.startX) && (n = 180 * Math.atan2(Math.abs(c.touches.currentY - c.touches.startY), Math.abs(c.touches.currentX - c.touches.startX)) / Math.PI, c.isHorizontal() ? n > c.params.touchAngle : 90 - n > c.params.touchAngle)), w && c.emit("onTouchMoveOpposite", c, t), void 0 === T && (c.touches.currentX === c.touches.startX && c.touches.currentY === c.touches.startY || (T = !0)), h)
                                                if (w) h = !1;
                                                else if (T) {
                                            c.allowClick = !1, c.emit("onSliderMove", c, t), t.preventDefault(), c.params.touchMoveStopPropagation && !c.params.nested && t.stopPropagation(), g || (i.loop && c.fixLoop(), b = c.getWrapperTranslate(), c.setWrapperTransition(0), c.animating && c.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), c.params.autoplay && c.autoplaying && (c.params.autoplayDisableOnInteraction ? c.stopAutoplay() : c.pauseAutoplay()), C = !1, !c.params.grabCursor || !0 !== c.params.allowSwipeToNext && !0 !== c.params.allowSwipeToPrev || c.setGrabCursor(!0)), g = !0;
                                            var o = c.touches.diff = c.isHorizontal() ? c.touches.currentX - c.touches.startX : c.touches.currentY - c.touches.startY;
                                            o *= c.params.touchRatio, c.rtl && (o = -o), c.swipeDirection = 0 < o ? "prev" : "next", y = o + b;
                                            var a = !0;
                                            if (0 < o && y > c.minTranslate() ? (a = !1, c.params.resistance && (y = c.minTranslate() - 1 + Math.pow(-c.minTranslate() + b + o, c.params.resistanceRatio))) : o < 0 && y < c.maxTranslate() && (a = !1, c.params.resistance && (y = c.maxTranslate() + 1 - Math.pow(c.maxTranslate() - b - o, c.params.resistanceRatio))), a && (t.preventedByNestedSwiper = !0), !c.params.allowSwipeToNext && "next" === c.swipeDirection && y < b && (y = b), !c.params.allowSwipeToPrev && "prev" === c.swipeDirection && b < y && (y = b), 0 < c.params.threshold) {
                                                if (!(Math.abs(o) > c.params.threshold || x)) return void(y = b);
                                                if (!x) return x = !0, c.touches.startX = c.touches.currentX, c.touches.startY = c.touches.currentY, y = b, void(c.touches.diff = c.isHorizontal() ? c.touches.currentX - c.touches.startX : c.touches.currentY - c.touches.startY)
                                            }
                                            c.params.followFinger && ((c.params.freeMode || c.params.watchSlidesProgress) && c.updateActiveIndex(), c.params.freeMode && (0 === D.length && D.push({
                                                position: c.touches[c.isHorizontal() ? "startX" : "startY"],
                                                time: v
                                            }), D.push({
                                                position: c.touches[c.isHorizontal() ? "currentX" : "currentY"],
                                                time: (new window.Date).getTime()
                                            })), c.updateProgress(y), c.setWrapperTranslate(y))
                                        }
                                    }
                                }, c.onTouchEnd = function(t) {
                                    if (t.originalEvent && (t = t.originalEvent), f && c.emit("onTouchEnd", c, t), f = !1, h) {
                                        c.params.grabCursor && g && h && (!0 === c.params.allowSwipeToNext || !0 === c.params.allowSwipeToPrev) && c.setGrabCursor(!1);
                                        var i, n = Date.now(),
                                            o = n - v;
                                        if (c.allowClick && (c.updateClickedSlide(t), c.emit("onTap", c, t), o < 300 && 300 < n - M && (k && clearTimeout(k), k = setTimeout(function() {
                                                c && (c.params.paginationHide && 0 < c.paginationContainer.length && !e(t.target).hasClass(c.params.bulletClass) && c.paginationContainer.toggleClass(c.params.paginationHiddenClass), c.emit("onClick", c, t))
                                            }, 300)), o < 300 && n - M < 300 && (k && clearTimeout(k), c.emit("onDoubleTap", c, t))), M = Date.now(), setTimeout(function() {
                                                c && (c.allowClick = !0)
                                            }, 0), h && g && c.swipeDirection && 0 !== c.touches.diff && y !== b)
                                            if (h = g = !1, i = c.params.followFinger ? c.rtl ? c.translate : -c.translate : -y, c.params.freeMode) {
                                                if (i < -c.minTranslate()) return void c.slideTo(c.activeIndex);
                                                if (i > -c.maxTranslate()) return void(c.slides.length < c.snapGrid.length ? c.slideTo(c.snapGrid.length - 1) : c.slideTo(c.slides.length - 1));
                                                if (c.params.freeModeMomentum) {
                                                    if (1 < D.length) {
                                                        var a = D.pop(),
                                                            r = D.pop(),
                                                            s = a.position - r.position,
                                                            l = a.time - r.time;
                                                        c.velocity = s / l, c.velocity = c.velocity / 2, Math.abs(c.velocity) < c.params.freeModeMinimumVelocity && (c.velocity = 0), (150 < l || 300 < (new window.Date).getTime() - a.time) && (c.velocity = 0)
                                                    } else c.velocity = 0;
                                                    c.velocity = c.velocity * c.params.freeModeMomentumVelocityRatio, D.length = 0;
                                                    var p = 1e3 * c.params.freeModeMomentumRatio,
                                                        d = c.velocity * p,
                                                        u = c.translate + d;
                                                    c.rtl && (u = -u);
                                                    var m, w = !1,
                                                        x = 20 * Math.abs(c.velocity) * c.params.freeModeMomentumBounceRatio;
                                                    if (u < c.maxTranslate()) c.params.freeModeMomentumBounce ? (u + c.maxTranslate() < -x && (u = c.maxTranslate() - x), m = c.maxTranslate(), C = w = !0) : u = c.maxTranslate();
                                                    else if (u > c.minTranslate()) c.params.freeModeMomentumBounce ? (u - c.minTranslate() > x && (u = c.minTranslate() + x), m = c.minTranslate(), C = w = !0) : u = c.minTranslate();
                                                    else if (c.params.freeModeSticky) {
                                                        var S, T = 0;
                                                        for (T = 0; T < c.snapGrid.length; T += 1)
                                                            if (c.snapGrid[T] > -u) {
                                                                S = T;
                                                                break
                                                            }
                                                        u = Math.abs(c.snapGrid[S] - u) < Math.abs(c.snapGrid[S - 1] - u) || "next" === c.swipeDirection ? c.snapGrid[S] : c.snapGrid[S - 1], c.rtl || (u = -u)
                                                    }
                                                    if (0 !== c.velocity) p = c.rtl ? Math.abs((-u - c.translate) / c.velocity) : Math.abs((u - c.translate) / c.velocity);
                                                    else if (c.params.freeModeSticky) return void c.slideReset();
                                                    c.params.freeModeMomentumBounce && w ? (c.updateProgress(m), c.setWrapperTransition(p), c.setWrapperTranslate(u), c.onTransitionStart(), c.animating = !0, c.wrapper.transitionEnd(function() {
                                                        c && C && (c.emit("onMomentumBounce", c), c.setWrapperTransition(c.params.speed), c.setWrapperTranslate(m), c.wrapper.transitionEnd(function() {
                                                            c && c.onTransitionEnd()
                                                        }))
                                                    })) : c.velocity ? (c.updateProgress(u), c.setWrapperTransition(p), c.setWrapperTranslate(u), c.onTransitionStart(), c.animating || (c.animating = !0, c.wrapper.transitionEnd(function() {
                                                        c && c.onTransitionEnd()
                                                    }))) : c.updateProgress(u), c.updateActiveIndex()
                                                }(!c.params.freeModeMomentum || o >= c.params.longSwipesMs) && (c.updateProgress(), c.updateActiveIndex())
                                            } else {
                                                var z, E = 0,
                                                    I = c.slidesSizesGrid[0];
                                                for (z = 0; z < c.slidesGrid.length; z += c.params.slidesPerGroup) void 0 !== c.slidesGrid[z + c.params.slidesPerGroup] ? i >= c.slidesGrid[z] && i < c.slidesGrid[z + c.params.slidesPerGroup] && (E = z, I = c.slidesGrid[z + c.params.slidesPerGroup] - c.slidesGrid[z]) : i >= c.slidesGrid[z] && (E = z, I = c.slidesGrid[c.slidesGrid.length - 1] - c.slidesGrid[c.slidesGrid.length - 2]);
                                                var P = (i - c.slidesGrid[E]) / I;
                                                if (o > c.params.longSwipesMs) {
                                                    if (!c.params.longSwipes) return void c.slideTo(c.activeIndex);
                                                    "next" === c.swipeDirection && (P >= c.params.longSwipesRatio ? c.slideTo(E + c.params.slidesPerGroup) : c.slideTo(E)), "prev" === c.swipeDirection && (P > 1 - c.params.longSwipesRatio ? c.slideTo(E + c.params.slidesPerGroup) : c.slideTo(E))
                                                } else {
                                                    if (!c.params.shortSwipes) return void c.slideTo(c.activeIndex);
                                                    "next" === c.swipeDirection && c.slideTo(E + c.params.slidesPerGroup), "prev" === c.swipeDirection && c.slideTo(E)
                                                }
                                            }
                                        else h = g = !1
                                    }
                                }, c._slideTo = function(e, t) {
                                    return c.slideTo(e, t, !0, !0)
                                }, c.slideTo = function(e, t, i, n) {
                                    void 0 === i && (i = !0), void 0 === e && (e = 0), e < 0 && (e = 0), c.snapIndex = Math.floor(e / c.params.slidesPerGroup), c.snapIndex >= c.snapGrid.length && (c.snapIndex = c.snapGrid.length - 1);
                                    var o = -c.snapGrid[c.snapIndex];
                                    if (c.params.autoplay && c.autoplaying && (n || !c.params.autoplayDisableOnInteraction ? c.pauseAutoplay(t) : c.stopAutoplay()), c.updateProgress(o), c.params.normalizeSlideIndex)
                                        for (var a = 0; a < c.slidesGrid.length; a++) - Math.floor(100 * o) >= Math.floor(100 * c.slidesGrid[a]) && (e = a);
                                    return !(!c.params.allowSwipeToNext && o < c.translate && o < c.minTranslate() || !c.params.allowSwipeToPrev && o > c.translate && o > c.maxTranslate() && (c.activeIndex || 0) !== e || (void 0 === t && (t = c.params.speed), c.previousIndex = c.activeIndex || 0, c.activeIndex = e, c.updateRealIndex(), c.rtl && -o === c.translate || !c.rtl && o === c.translate ? (c.params.autoHeight && c.updateAutoHeight(), c.updateClasses(), "slide" !== c.params.effect && c.setWrapperTranslate(o), 1) : (c.updateClasses(), c.onTransitionStart(i), 0 === t || c.browser.lteIE9 ? (c.setWrapperTranslate(o), c.setWrapperTransition(0), c.onTransitionEnd(i)) : (c.setWrapperTranslate(o), c.setWrapperTransition(t), c.animating || (c.animating = !0, c.wrapper.transitionEnd(function() {
                                        c && c.onTransitionEnd(i)
                                    }))), 0)))
                                }, c.onTransitionStart = function(e) {
                                    void 0 === e && (e = !0), c.params.autoHeight && c.updateAutoHeight(), c.lazy && c.lazy.onTransitionStart(), e && (c.emit("onTransitionStart", c), c.activeIndex !== c.previousIndex && (c.emit("onSlideChangeStart", c), c.activeIndex > c.previousIndex ? c.emit("onSlideNextStart", c) : c.emit("onSlidePrevStart", c)))
                                }, c.onTransitionEnd = function(e) {
                                    c.animating = !1, c.setWrapperTransition(0), void 0 === e && (e = !0), c.lazy && c.lazy.onTransitionEnd(), e && (c.emit("onTransitionEnd", c), c.activeIndex !== c.previousIndex && (c.emit("onSlideChangeEnd", c), c.activeIndex > c.previousIndex ? c.emit("onSlideNextEnd", c) : c.emit("onSlidePrevEnd", c))), c.params.history && c.history && c.history.setHistory(c.params.history, c.activeIndex), c.params.hashnav && c.hashnav && c.hashnav.setHash()
                                }, c.slideNext = function(e, t, i) {
                                    return c.params.loop ? !c.animating && (c.fixLoop(), c.container[0].clientLeft, c.slideTo(c.activeIndex + c.params.slidesPerGroup, t, e, i)) : c.slideTo(c.activeIndex + c.params.slidesPerGroup, t, e, i)
                                }, c._slideNext = function(e) {
                                    return c.slideNext(!0, e, !0)
                                }, c.slidePrev = function(e, t, i) {
                                    return c.params.loop ? !c.animating && (c.fixLoop(), c.container[0].clientLeft, c.slideTo(c.activeIndex - 1, t, e, i)) : c.slideTo(c.activeIndex - 1, t, e, i)
                                }, c._slidePrev = function(e) {
                                    return c.slidePrev(!0, e, !0)
                                }, c.slideReset = function(e, t, i) {
                                    return c.slideTo(c.activeIndex, t, e)
                                }, c.disableTouchControl = function() {
                                    return c.params.onlyExternal = !0
                                }, c.enableTouchControl = function() {
                                    return !(c.params.onlyExternal = !1)
                                }, c.setWrapperTransition = function(e, t) {
                                    c.wrapper.transition(e), "slide" !== c.params.effect && c.effects[c.params.effect] && c.effects[c.params.effect].setTransition(e), c.params.parallax && c.parallax && c.parallax.setTransition(e), c.params.scrollbar && c.scrollbar && c.scrollbar.setTransition(e), c.params.control && c.controller && c.controller.setTransition(e, t), c.emit("onSetTransition", c, e)
                                }, c.setWrapperTranslate = function(e, t, i) {
                                    var n = 0,
                                        o = 0;
                                    c.isHorizontal() ? n = c.rtl ? -e : e : o = e, c.params.roundLengths && (n = P(n), o = P(o)), c.params.virtualTranslate || (c.support.transforms3d ? c.wrapper.transform("translate3d(" + n + "px, " + o + "px, 0px)") : c.wrapper.transform("translate(" + n + "px, " + o + "px)")), c.translate = c.isHorizontal() ? n : o;
                                    var a = c.maxTranslate() - c.minTranslate();
                                    (0 === a ? 0 : (e - c.minTranslate()) / a) !== c.progress && c.updateProgress(e), t && c.updateActiveIndex(), "slide" !== c.params.effect && c.effects[c.params.effect] && c.effects[c.params.effect].setTranslate(c.translate), c.params.parallax && c.parallax && c.parallax.setTranslate(c.translate), c.params.scrollbar && c.scrollbar && c.scrollbar.setTranslate(c.translate), c.params.control && c.controller && c.controller.setTranslate(c.translate, i), c.emit("onSetTranslate", c, c.translate)
                                }, c.getTranslate = function(e, t) {
                                    var i, n, o, a;
                                    return void 0 === t && (t = "x"), c.params.virtualTranslate ? c.rtl ? -c.translate : c.translate : (o = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (6 < (n = o.transform || o.webkitTransform).split(",").length && (n = n.split(", ").map(function(e) {
                                        return e.replace(",", ".")
                                    }).join(", ")), a = new window.WebKitCSSMatrix("none" === n ? "" : n)) : i = (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = window.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = window.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), c.rtl && n && (n = -n), n || 0)
                                }, c.getWrapperTranslate = function(e) {
                                    return void 0 === e && (e = c.isHorizontal() ? "x" : "y"), c.getTranslate(c.wrapper[0], e)
                                }, c.observers = [], c.initObservers = function() {
                                    if (c.params.observeParents)
                                        for (var e = c.container.parents(), t = 0; t < e.length; t++) j(e[t]);
                                    j(c.container[0], {
                                        childList: !1
                                    }), j(c.wrapper[0], {
                                        attributes: !1
                                    })
                                }, c.disconnectObservers = function() {
                                    for (var e = 0; e < c.observers.length; e++) c.observers[e].disconnect();
                                    c.observers = []
                                }, c.createLoop = function() {
                                    c.wrapper.children("." + c.params.slideClass + "." + c.params.slideDuplicateClass).remove();
                                    var t = c.wrapper.children("." + c.params.slideClass);
                                    "auto" !== c.params.slidesPerView || c.params.loopedSlides || (c.params.loopedSlides = t.length), c.loopedSlides = parseInt(c.params.loopedSlides || c.params.slidesPerView, 10), c.loopedSlides = c.loopedSlides + c.params.loopAdditionalSlides, c.loopedSlides > t.length && (c.loopedSlides = t.length);
                                    var i, n = [],
                                        o = [];
                                    for (t.each(function(i, a) {
                                            var r = e(this);
                                            i < c.loopedSlides && o.push(a), i < t.length && i >= t.length - c.loopedSlides && n.push(a), r.attr("data-swiper-slide-index", i)
                                        }), i = 0; i < o.length; i++) c.wrapper.append(e(o[i].cloneNode(!0)).addClass(c.params.slideDuplicateClass));
                                    for (i = n.length - 1; 0 <= i; i--) c.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(c.params.slideDuplicateClass))
                                }, c.destroyLoop = function() {
                                    c.wrapper.children("." + c.params.slideClass + "." + c.params.slideDuplicateClass).remove(), c.slides.removeAttr("data-swiper-slide-index")
                                }, c.reLoop = function(e) {
                                    var t = c.activeIndex - c.loopedSlides;
                                    c.destroyLoop(), c.createLoop(), c.updateSlidesSize(), e && c.slideTo(t + c.loopedSlides, 0, !1)
                                }, c.fixLoop = function() {
                                    var e;
                                    c.activeIndex < c.loopedSlides ? (e = c.slides.length - 3 * c.loopedSlides + c.activeIndex, e += c.loopedSlides, c.slideTo(e, 0, !1, !0)) : ("auto" === c.params.slidesPerView && c.activeIndex >= 2 * c.loopedSlides || c.activeIndex > c.slides.length - 2 * c.params.slidesPerView) && (e = -c.slides.length + c.activeIndex + c.loopedSlides, e += c.loopedSlides, c.slideTo(e, 0, !1, !0))
                                }, c.appendSlide = function(e) {
                                    if (c.params.loop && c.destroyLoop(), "object" == typeof e && e.length)
                                        for (var t = 0; t < e.length; t++) e[t] && c.wrapper.append(e[t]);
                                    else c.wrapper.append(e);
                                    c.params.loop && c.createLoop(), c.params.observer && c.support.observer || c.update(!0)
                                }, c.prependSlide = function(e) {
                                    c.params.loop && c.destroyLoop();
                                    var t = c.activeIndex + 1;
                                    if ("object" == typeof e && e.length) {
                                        for (var i = 0; i < e.length; i++) e[i] && c.wrapper.prepend(e[i]);
                                        t = c.activeIndex + e.length
                                    } else c.wrapper.prepend(e);
                                    c.params.loop && c.createLoop(), c.params.observer && c.support.observer || c.update(!0), c.slideTo(t, 0, !1)
                                }, c.removeSlide = function(e) {
                                    c.params.loop && (c.destroyLoop(), c.slides = c.wrapper.children("." + c.params.slideClass));
                                    var t, i = c.activeIndex;
                                    if ("object" == typeof e && e.length) {
                                        for (var n = 0; n < e.length; n++) t = e[n], c.slides[t] && c.slides.eq(t).remove(), t < i && i--;
                                        i = Math.max(i, 0)
                                    } else t = e, c.slides[t] && c.slides.eq(t).remove(), t < i && i--, i = Math.max(i, 0);
                                    c.params.loop && c.createLoop(), c.params.observer && c.support.observer || c.update(!0), c.params.loop ? c.slideTo(i + c.loopedSlides, 0, !1) : c.slideTo(i, 0, !1)
                                }, c.removeAllSlides = function() {
                                    for (var e = [], t = 0; t < c.slides.length; t++) e.push(t);
                                    c.removeSlide(e)
                                }, c.effects = {
                                    fade: {
                                        setTranslate: function() {
                                            for (var e = 0; e < c.slides.length; e++) {
                                                var t = c.slides.eq(e),
                                                    i = -t[0].swiperSlideOffset;
                                                c.params.virtualTranslate || (i -= c.translate);
                                                var n = 0;
                                                c.isHorizontal() || (n = i, i = 0);
                                                var o = c.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                                t.css({
                                                    opacity: o
                                                }).transform("translate3d(" + i + "px, " + n + "px, 0px)")
                                            }
                                        },
                                        setTransition: function(e) {
                                            if (c.slides.transition(e), c.params.virtualTranslate && 0 !== e) {
                                                var t = !1;
                                                c.slides.transitionEnd(function() {
                                                    if (!t && c) {
                                                        t = !0, c.animating = !1;
                                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++) c.wrapper.trigger(e[i])
                                                    }
                                                })
                                            }
                                        }
                                    },
                                    flip: {
                                        setTranslate: function() {
                                            for (var t = 0; t < c.slides.length; t++) {
                                                var i = c.slides.eq(t),
                                                    n = i[0].progress;
                                                c.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                                                var o = -180 * n,
                                                    a = 0,
                                                    r = -i[0].swiperSlideOffset,
                                                    s = 0;
                                                if (c.isHorizontal() ? c.rtl && (o = -o) : (s = r, a = -o, o = r = 0), i[0].style.zIndex = -Math.abs(Math.round(n)) + c.slides.length, c.params.flip.slideShadows) {
                                                    var l = c.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                                        p = c.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                                    0 === l.length && (l = e('<div class="swiper-slide-shadow-' + (c.isHorizontal() ? "left" : "top") + '"></div>'), i.append(l)), 0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (c.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(p)), l.length && (l[0].style.opacity = Math.max(-n, 0)), p.length && (p[0].style.opacity = Math.max(n, 0))
                                                }
                                                i.transform("translate3d(" + r + "px, " + s + "px, 0px) rotateX(" + a + "deg) rotateY(" + o + "deg)")
                                            }
                                        },
                                        setTransition: function(t) {
                                            if (c.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), c.params.virtualTranslate && 0 !== t) {
                                                var i = !1;
                                                c.slides.eq(c.activeIndex).transitionEnd(function() {
                                                    if (!i && c && e(this).hasClass(c.params.slideActiveClass)) {
                                                        i = !0, c.animating = !1;
                                                        for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++) c.wrapper.trigger(t[n])
                                                    }
                                                })
                                            }
                                        }
                                    },
                                    cube: {
                                        setTranslate: function() {
                                            var t, i = 0;
                                            c.params.cube.shadow && (c.isHorizontal() ? (0 === (t = c.wrapper.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), c.wrapper.append(t)), t.css({
                                                height: c.width + "px"
                                            })) : 0 === (t = c.container.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), c.container.append(t)));
                                            for (var n = 0; n < c.slides.length; n++) {
                                                var o = c.slides.eq(n),
                                                    a = 90 * n,
                                                    r = Math.floor(a / 360);
                                                c.rtl && (a = -a, r = Math.floor(-a / 360));
                                                var s = Math.max(Math.min(o[0].progress, 1), -1),
                                                    l = 0,
                                                    p = 0,
                                                    d = 0;
                                                n % 4 == 0 ? (l = 4 * -r * c.size, d = 0) : (n - 1) % 4 == 0 ? (l = 0, d = 4 * -r * c.size) : (n - 2) % 4 == 0 ? (l = c.size + 4 * r * c.size, d = c.size) : (n - 3) % 4 == 0 && (l = -c.size, d = 3 * c.size + 4 * c.size * r), c.rtl && (l = -l), c.isHorizontal() || (p = l, l = 0);
                                                var u = "rotateX(" + (c.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (c.isHorizontal() ? a : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                                                if (s <= 1 && -1 < s && (i = 90 * n + 90 * s, c.rtl && (i = 90 * -n - 90 * s)), o.transform(u), c.params.cube.slideShadows) {
                                                    var m = c.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                                        h = c.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                                    0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (c.isHorizontal() ? "left" : "top") + '"></div>'), o.append(m)), 0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (c.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(h)), m.length && (m[0].style.opacity = Math.max(-s, 0)), h.length && (h[0].style.opacity = Math.max(s, 0))
                                                }
                                            }
                                            if (c.wrapper.css({
                                                    "-webkit-transform-origin": "50% 50% -" + c.size / 2 + "px",
                                                    "-moz-transform-origin": "50% 50% -" + c.size / 2 + "px",
                                                    "-ms-transform-origin": "50% 50% -" + c.size / 2 + "px",
                                                    "transform-origin": "50% 50% -" + c.size / 2 + "px"
                                                }), c.params.cube.shadow)
                                                if (c.isHorizontal()) t.transform("translate3d(0px, " + (c.width / 2 + c.params.cube.shadowOffset) + "px, " + -c.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.params.cube.shadowScale + ")");
                                                else {
                                                    var g = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                                        f = 1.5 - (Math.sin(2 * g * Math.PI / 360) / 2 + Math.cos(2 * g * Math.PI / 360) / 2),
                                                        v = c.params.cube.shadowScale,
                                                        w = c.params.cube.shadowScale / f,
                                                        y = c.params.cube.shadowOffset;
                                                    t.transform("scale3d(" + v + ", 1, " + w + ") translate3d(0px, " + (c.height / 2 + y) + "px, " + -c.height / 2 / w + "px) rotateX(-90deg)")
                                                }
                                            var b = c.isSafari || c.isUiWebView ? -c.size / 2 : 0;
                                            c.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (c.isHorizontal() ? 0 : i) + "deg) rotateY(" + (c.isHorizontal() ? -i : 0) + "deg)")
                                        },
                                        setTransition: function(e) {
                                            c.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), c.params.cube.shadow && !c.isHorizontal() && c.container.find(".swiper-cube-shadow").transition(e)
                                        }
                                    },
                                    coverflow: {
                                        setTranslate: function() {
                                            for (var t = c.translate, i = c.isHorizontal() ? -t + c.width / 2 : -t + c.height / 2, n = c.isHorizontal() ? c.params.coverflow.rotate : -c.params.coverflow.rotate, o = c.params.coverflow.depth, a = 0, r = c.slides.length; a < r; a++) {
                                                var s = c.slides.eq(a),
                                                    l = c.slidesSizesGrid[a],
                                                    p = (i - s[0].swiperSlideOffset - l / 2) / l * c.params.coverflow.modifier,
                                                    d = c.isHorizontal() ? n * p : 0,
                                                    u = c.isHorizontal() ? 0 : n * p,
                                                    m = -o * Math.abs(p),
                                                    h = c.isHorizontal() ? 0 : c.params.coverflow.stretch * p,
                                                    g = c.isHorizontal() ? c.params.coverflow.stretch * p : 0;
                                                Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(d) < .001 && (d = 0), Math.abs(u) < .001 && (u = 0);
                                                var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + u + "deg) rotateY(" + d + "deg)";
                                                if (s.transform(f), s[0].style.zIndex = 1 - Math.abs(Math.round(p)), c.params.coverflow.slideShadows) {
                                                    var v = c.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                                        w = c.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                                    0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (c.isHorizontal() ? "left" : "top") + '"></div>'), s.append(v)), 0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (c.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(w)), v.length && (v[0].style.opacity = 0 < p ? p : 0), w.length && (w[0].style.opacity = 0 < -p ? -p : 0)
                                                }
                                            }
                                            c.browser.ie && (c.wrapper[0].style.perspectiveOrigin = i + "px 50%")
                                        },
                                        setTransition: function(e) {
                                            c.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                                        }
                                    }
                                }, c.lazy = {
                                    initialImageLoaded: !1,
                                    loadImageInSlide: function(t, i) {
                                        if (void 0 !== t && (void 0 === i && (i = !0), 0 !== c.slides.length)) {
                                            var n = c.slides.eq(t),
                                                o = n.find("." + c.params.lazyLoadingClass + ":not(." + c.params.lazyStatusLoadedClass + "):not(." + c.params.lazyStatusLoadingClass + ")");
                                            !n.hasClass(c.params.lazyLoadingClass) || n.hasClass(c.params.lazyStatusLoadedClass) || n.hasClass(c.params.lazyStatusLoadingClass) || (o = o.add(n[0])), 0 !== o.length && o.each(function() {
                                                var t = e(this);
                                                t.addClass(c.params.lazyStatusLoadingClass);
                                                var o = t.attr("data-background"),
                                                    a = t.attr("data-src"),
                                                    r = t.attr("data-srcset"),
                                                    s = t.attr("data-sizes");
                                                c.loadImage(t[0], a || o, r, s, !1, function() {
                                                    if (null != c && c) {
                                                        if (o ? (t.css("background-image", 'url("' + o + '")'), t.removeAttr("data-background")) : (r && (t.attr("srcset", r), t.removeAttr("data-srcset")), s && (t.attr("sizes", s), t.removeAttr("data-sizes")), a && (t.attr("src", a), t.removeAttr("data-src"))), t.addClass(c.params.lazyStatusLoadedClass).removeClass(c.params.lazyStatusLoadingClass), n.find("." + c.params.lazyPreloaderClass + ", ." + c.params.preloaderClass).remove(), c.params.loop && i) {
                                                            var e = n.attr("data-swiper-slide-index");
                                                            if (n.hasClass(c.params.slideDuplicateClass)) {
                                                                var l = c.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + c.params.slideDuplicateClass + ")");
                                                                c.lazy.loadImageInSlide(l.index(), !1)
                                                            } else {
                                                                var p = c.wrapper.children("." + c.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                                c.lazy.loadImageInSlide(p.index(), !1)
                                                            }
                                                        }
                                                        c.emit("onLazyImageReady", c, n[0], t[0])
                                                    }
                                                }), c.emit("onLazyImageLoad", c, n[0], t[0])
                                            })
                                        }
                                    },
                                    load: function() {
                                        var t, i = c.params.slidesPerView;
                                        if ("auto" === i && (i = 0), c.lazy.initialImageLoaded || (c.lazy.initialImageLoaded = !0), c.params.watchSlidesVisibility) c.wrapper.children("." + c.params.slideVisibleClass).each(function() {
                                            c.lazy.loadImageInSlide(e(this).index())
                                        });
                                        else if (1 < i)
                                            for (t = c.activeIndex; t < c.activeIndex + i; t++) c.slides[t] && c.lazy.loadImageInSlide(t);
                                        else c.lazy.loadImageInSlide(c.activeIndex);
                                        if (c.params.lazyLoadingInPrevNext)
                                            if (1 < i || c.params.lazyLoadingInPrevNextAmount && 1 < c.params.lazyLoadingInPrevNextAmount) {
                                                var n = c.params.lazyLoadingInPrevNextAmount,
                                                    o = i,
                                                    a = Math.min(c.activeIndex + o + Math.max(n, o), c.slides.length),
                                                    r = Math.max(c.activeIndex - Math.max(o, n), 0);
                                                for (t = c.activeIndex + i; t < a; t++) c.slides[t] && c.lazy.loadImageInSlide(t);
                                                for (t = r; t < c.activeIndex; t++) c.slides[t] && c.lazy.loadImageInSlide(t)
                                            } else {
                                                var s = c.wrapper.children("." + c.params.slideNextClass);
                                                0 < s.length && c.lazy.loadImageInSlide(s.index());
                                                var l = c.wrapper.children("." + c.params.slidePrevClass);
                                                0 < l.length && c.lazy.loadImageInSlide(l.index())
                                            }
                                    },
                                    onTransitionStart: function() {
                                        c.params.lazyLoading && (c.params.lazyLoadingOnTransitionStart || !c.params.lazyLoadingOnTransitionStart && !c.lazy.initialImageLoaded) && c.lazy.load()
                                    },
                                    onTransitionEnd: function() {
                                        c.params.lazyLoading && !c.params.lazyLoadingOnTransitionStart && c.lazy.load()
                                    }
                                }, c.scrollbar = {
                                    isTouched: !1,
                                    setDragPosition: function(e) {
                                        var t = c.scrollbar,
                                            i = (c.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[c.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                                            n = -c.minTranslate() * t.moveDivider,
                                            o = -c.maxTranslate() * t.moveDivider;
                                        i < n ? i = n : o < i && (i = o), i = -i / t.moveDivider, c.updateProgress(i), c.setWrapperTranslate(i, !0)
                                    },
                                    dragStart: function(e) {
                                        var t = c.scrollbar;
                                        t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), c.params.scrollbarHide && t.track.css("opacity", 1), c.wrapper.transition(100), t.drag.transition(100), c.emit("onScrollbarDragStart", c)
                                    },
                                    dragMove: function(e) {
                                        var t = c.scrollbar;
                                        t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), c.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), c.emit("onScrollbarDragMove", c))
                                    },
                                    dragEnd: function(e) {
                                        var t = c.scrollbar;
                                        t.isTouched && (t.isTouched = !1, c.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                                            t.track.css("opacity", 0), t.track.transition(400)
                                        }, 1e3)), c.emit("onScrollbarDragEnd", c), c.params.scrollbarSnapOnRelease && c.slideReset())
                                    },
                                    draggableEvents: !1 !== c.params.simulateTouch || c.support.touch ? c.touchEvents : c.touchEventsDesktop,
                                    enableDraggable: function() {
                                        var t = c.scrollbar,
                                            i = c.support.touch ? t.track : document;
                                        e(t.track).on(t.draggableEvents.start, t.dragStart), e(i).on(t.draggableEvents.move, t.dragMove), e(i).on(t.draggableEvents.end, t.dragEnd)
                                    },
                                    disableDraggable: function() {
                                        var t = c.scrollbar,
                                            i = c.support.touch ? t.track : document;
                                        e(t.track).off(t.draggableEvents.start, t.dragStart), e(i).off(t.draggableEvents.move, t.dragMove), e(i).off(t.draggableEvents.end, t.dragEnd)
                                    },
                                    set: function() {
                                        if (c.params.scrollbar) {
                                            var t = c.scrollbar;
                                            t.track = e(c.params.scrollbar), c.params.uniqueNavElements && "string" == typeof c.params.scrollbar && 1 < t.track.length && 1 === c.container.find(c.params.scrollbar).length && (t.track = c.container.find(c.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = c.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = c.size / c.virtualSize, t.moveDivider = t.divider * (t.trackSize / c.size), t.dragSize = t.trackSize * t.divider, c.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", 1 <= t.divider ? t.track[0].style.display = "none" : t.track[0].style.display = "", c.params.scrollbarHide && (t.track[0].style.opacity = 0)
                                        }
                                    },
                                    setTranslate: function() {
                                        if (c.params.scrollbar) {
                                            var e, t = c.scrollbar,
                                                i = (c.translate, t.dragSize);
                                            e = (t.trackSize - t.dragSize) * c.progress, c.rtl && c.isHorizontal() ? 0 < (e = -e) ? (i = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e) : e < 0 ? (i = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e), c.isHorizontal() ? (c.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = i + "px") : (c.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = i + "px"), c.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                                                t.track[0].style.opacity = 0, t.track.transition(400)
                                            }, 1e3))
                                        }
                                    },
                                    setTransition: function(e) {
                                        c.params.scrollbar && c.scrollbar.drag.transition(e)
                                    }
                                }, c.controller = {
                                    LinearSpline: function(e, t) {
                                        var i, n, o, a, r;
                                        this.x = e, this.y = t, this.lastIndex = e.length - 1, this.x.length, this.interpolate = function(e) {
                                            return e ? (r = function(e, t) {
                                                for (n = -1, i = e.length; 1 < i - n;) e[o = i + n >> 1] <= t ? n = o : i = o;
                                                return i
                                            }(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
                                        }
                                    },
                                    getInterpolateFunction: function(e) {
                                        c.controller.spline || (c.controller.spline = c.params.loop ? new c.controller.LinearSpline(c.slidesGrid, e.slidesGrid) : new c.controller.LinearSpline(c.snapGrid, e.snapGrid))
                                    },
                                    setTranslate: function(e, t) {
                                        var i, n, o = c.params.control;

                                        function a(t) {
                                            e = t.rtl && "horizontal" === t.params.direction ? -c.translate : c.translate, "slide" === c.params.controlBy && (c.controller.getInterpolateFunction(t), n = -c.controller.spline.interpolate(-e)), n && "container" !== c.params.controlBy || (i = (t.maxTranslate() - t.minTranslate()) / (c.maxTranslate() - c.minTranslate()), n = (e - c.minTranslate()) * i + t.minTranslate()), c.params.controlInverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setWrapperTranslate(n, !1, c), t.updateActiveIndex()
                                        }
                                        if (Array.isArray(o))
                                            for (var r = 0; r < o.length; r++) o[r] !== t && o[r] instanceof p && a(o[r]);
                                        else o instanceof p && t !== o && a(o)
                                    },
                                    setTransition: function(e, t) {
                                        var i, n = c.params.control;

                                        function o(t) {
                                            t.setWrapperTransition(e, c), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                                                n && (t.params.loop && "slide" === c.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                                            }))
                                        }
                                        if (Array.isArray(n))
                                            for (i = 0; i < n.length; i++) n[i] !== t && n[i] instanceof p && o(n[i]);
                                        else n instanceof p && t !== n && o(n)
                                    }
                                }, c.hashnav = {
                                    onHashCange: function(e, t) {
                                        var i = document.location.hash.replace("#", "");
                                        i !== c.slides.eq(c.activeIndex).attr("data-hash") && c.slideTo(c.wrapper.children("." + c.params.slideClass + '[data-hash="' + i + '"]').index())
                                    },
                                    attachEvents: function(t) {
                                        var i = t ? "off" : "on";
                                        e(window)[i]("hashchange", c.hashnav.onHashCange)
                                    },
                                    setHash: function() {
                                        if (c.hashnav.initialized && c.params.hashnav)
                                            if (c.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + c.slides.eq(c.activeIndex).attr("data-hash") || "");
                                            else {
                                                var e = c.slides.eq(c.activeIndex),
                                                    t = e.attr("data-hash") || e.attr("data-history");
                                                document.location.hash = t || ""
                                            }
                                    },
                                    init: function() {
                                        if (c.params.hashnav && !c.params.history) {
                                            c.hashnav.initialized = !0;
                                            var e = document.location.hash.replace("#", "");
                                            if (e)
                                                for (var t = 0, i = c.slides.length; t < i; t++) {
                                                    var n = c.slides.eq(t);
                                                    if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(c.params.slideDuplicateClass)) {
                                                        var o = n.index();
                                                        c.slideTo(o, 0, c.params.runCallbacksOnInit, !0)
                                                    }
                                                }
                                            c.params.hashnavWatchState && c.hashnav.attachEvents()
                                        }
                                    },
                                    destroy: function() {
                                        c.params.hashnavWatchState && c.hashnav.attachEvents(!0)
                                    }
                                }, c.history = {
                                    init: function() {
                                        if (c.params.history) {
                                            if (!window.history || !window.history.pushState) return c.params.history = !1, void(c.params.hashnav = !0);
                                            c.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, c.params.runCallbacksOnInit), c.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                                        }
                                    },
                                    setHistoryPopState: function() {
                                        c.history.paths = c.history.getPathValues(), c.history.scrollToSlide(c.params.speed, c.history.paths.value, !1)
                                    },
                                    getPathValues: function() {
                                        var e = window.location.pathname.slice(1).split("/"),
                                            t = e.length;
                                        return {
                                            key: e[t - 2],
                                            value: e[t - 1]
                                        }
                                    },
                                    setHistory: function(e, t) {
                                        if (c.history.initialized && c.params.history) {
                                            var i = c.slides.eq(t),
                                                n = this.slugify(i.attr("data-history"));
                                            window.location.pathname.includes(e) || (n = e + "/" + n), c.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                                        }
                                    },
                                    slugify: function(e) {
                                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                                    },
                                    scrollToSlide: function(e, t, i) {
                                        if (t)
                                            for (var n = 0, o = c.slides.length; n < o; n++) {
                                                var a = c.slides.eq(n);
                                                if (this.slugify(a.attr("data-history")) === t && !a.hasClass(c.params.slideDuplicateClass)) {
                                                    var r = a.index();
                                                    c.slideTo(r, e, i)
                                                }
                                            } else c.slideTo(0, e, i)
                                    }
                                }, c.disableKeyboardControl = function() {
                                    c.params.keyboardControl = !1, e(document).off("keydown", N)
                                }, c.enableKeyboardControl = function() {
                                    c.params.keyboardControl = !0, e(document).on("keydown", N)
                                }, c.mousewheel = {
                                    event: !1,
                                    lastScrollTime: (new window.Date).getTime()
                                }, c.params.mousewheelControl && (c.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                                    var e = "onwheel",
                                        t = e in document;
                                    if (!t) {
                                        var i = document.createElement("div");
                                        i.setAttribute(e, "return;"), t = "function" == typeof i[e]
                                    }
                                    return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t
                                }() ? "wheel" : "mousewheel"), c.disableMousewheelControl = function() {
                                    if (!c.mousewheel.event) return !1;
                                    var t = c.container;
                                    return "container" !== c.params.mousewheelEventsTarged && (t = e(c.params.mousewheelEventsTarged)), t.off(c.mousewheel.event, B), !(c.params.mousewheelControl = !1)
                                }, c.enableMousewheelControl = function() {
                                    if (!c.mousewheel.event) return !1;
                                    var t = c.container;
                                    return "container" !== c.params.mousewheelEventsTarged && (t = e(c.params.mousewheelEventsTarged)), t.on(c.mousewheel.event, B), c.params.mousewheelControl = !0
                                }, c.parallax = {
                                    setTranslate: function() {
                                        c.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                            H(this, c.progress)
                                        }), c.slides.each(function() {
                                            var t = e(this);
                                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                                H(this, Math.min(Math.max(t[0].progress, -1), 1))
                                            })
                                        })
                                    },
                                    setTransition: function(t) {
                                        void 0 === t && (t = c.params.speed), c.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                            var i = e(this),
                                                n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                                            0 === t && (n = 0), i.transition(n)
                                        })
                                    }
                                }, c.zoom = {
                                    scale: 1,
                                    currentScale: 1,
                                    isScaling: !1,
                                    gesture: {
                                        slide: void 0,
                                        slideWidth: void 0,
                                        slideHeight: void 0,
                                        image: void 0,
                                        imageWrap: void 0,
                                        zoomMax: c.params.zoomMax
                                    },
                                    image: {
                                        isTouched: void 0,
                                        isMoved: void 0,
                                        currentX: void 0,
                                        currentY: void 0,
                                        minX: void 0,
                                        minY: void 0,
                                        maxX: void 0,
                                        maxY: void 0,
                                        width: void 0,
                                        height: void 0,
                                        startX: void 0,
                                        startY: void 0,
                                        touchesStart: {},
                                        touchesCurrent: {}
                                    },
                                    velocity: {
                                        x: void 0,
                                        y: void 0,
                                        prevPositionX: void 0,
                                        prevPositionY: void 0,
                                        prevTime: void 0
                                    },
                                    getDistanceBetweenTouches: function(e) {
                                        if (e.targetTouches.length < 2) return 1;
                                        var t = e.targetTouches[0].pageX,
                                            i = e.targetTouches[0].pageY,
                                            n = e.targetTouches[1].pageX,
                                            o = e.targetTouches[1].pageY;
                                        return Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - i, 2))
                                    },
                                    onGestureStart: function(t) {
                                        var i = c.zoom;
                                        if (!c.support.gestures) {
                                            if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                                            i.gesture.scaleStart = i.getDistanceBetweenTouches(t)
                                        }
                                        i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = e(this), 0 === i.gesture.slide.length && (i.gesture.slide = c.slides.eq(c.activeIndex)), i.gesture.image = i.gesture.slide.find("img, svg, canvas"), i.gesture.imageWrap = i.gesture.image.parent("." + c.params.zoomContainerClass), i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || c.params.zoomMax, 0 !== i.gesture.imageWrap.length) ? (i.gesture.image.transition(0), i.isScaling = !0) : i.gesture.image = void 0
                                    },
                                    onGestureChange: function(e) {
                                        var t = c.zoom;
                                        if (!c.support.gestures) {
                                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                                            t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                                        }
                                        t.gesture.image && 0 !== t.gesture.image.length && (c.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale, t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)), t.scale < c.params.zoomMin && (t.scale = c.params.zoomMin + 1 - Math.pow(c.params.zoomMin - t.scale + 1, .5)), t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                                    },
                                    onGestureEnd: function(e) {
                                        var t = c.zoom;
                                        !c.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), c.params.zoomMin), t.gesture.image.transition(c.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (t.gesture.slide = void 0))
                                    },
                                    onTouchStart: function(e, t) {
                                        var i = e.zoom;
                                        i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(), i.image.isTouched = !0, i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                                    },
                                    onTouchMove: function(e) {
                                        var t = c.zoom;
                                        if (t.gesture.image && 0 !== t.gesture.image.length && (c.allowClick = !1, t.image.isTouched && t.gesture.slide)) {
                                            t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth, t.image.height = t.gesture.image[0].offsetHeight, t.image.startX = c.getTranslate(t.gesture.imageWrap[0], "x") || 0, t.image.startY = c.getTranslate(t.gesture.imageWrap[0], "y") || 0, t.gesture.slideWidth = t.gesture.slide[0].offsetWidth, t.gesture.slideHeight = t.gesture.slide[0].offsetHeight, t.gesture.imageWrap.transition(0), c.rtl && (t.image.startX = -t.image.startX), c.rtl && (t.image.startY = -t.image.startY));
                                            var i = t.image.width * t.scale,
                                                n = t.image.height * t.scale;
                                            if (!(i < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                                                if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0), t.image.maxY = -t.image.minY, t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !t.image.isMoved && !t.isScaling) {
                                                    if (c.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x) return void(t.image.isTouched = !1);
                                                    if (!c.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y) return void(t.image.isTouched = !1)
                                                }
                                                e.preventDefault(), e.stopPropagation(), t.image.isMoved = !0, t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX, t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY, t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)), t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)), t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)), t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)), t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x), t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y), t.velocity.prevTime || (t.velocity.prevTime = Date.now()), t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2, t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2, Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0), Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0), t.velocity.prevPositionX = t.image.touchesCurrent.x, t.velocity.prevPositionY = t.image.touchesCurrent.y, t.velocity.prevTime = Date.now(), t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                                            }
                                        }
                                    },
                                    onTouchEnd: function(e, t) {
                                        var i = e.zoom;
                                        if (i.gesture.image && 0 !== i.gesture.image.length) {
                                            if (!i.image.isTouched || !i.image.isMoved) return i.image.isTouched = !1, void(i.image.isMoved = !1);
                                            i.image.isTouched = !1, i.image.isMoved = !1;
                                            var n = 300,
                                                o = 300,
                                                a = i.velocity.x * n,
                                                r = i.image.currentX + a,
                                                s = i.velocity.y * o,
                                                l = i.image.currentY + s;
                                            0 !== i.velocity.x && (n = Math.abs((r - i.image.currentX) / i.velocity.x)), 0 !== i.velocity.y && (o = Math.abs((l - i.image.currentY) / i.velocity.y));
                                            var p = Math.max(n, o);
                                            i.image.currentX = r, i.image.currentY = l;
                                            var d = i.image.width * i.scale,
                                                c = i.image.height * i.scale;
                                            i.image.minX = Math.min(i.gesture.slideWidth / 2 - d / 2, 0), i.image.maxX = -i.image.minX, i.image.minY = Math.min(i.gesture.slideHeight / 2 - c / 2, 0), i.image.maxY = -i.image.minY, i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX), i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY), i.gesture.imageWrap.transition(p).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                                        }
                                    },
                                    onTransitionEnd: function(e) {
                                        var t = e.zoom;
                                        t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"), t.gesture.imageWrap.transform("translate3d(0,0,0)"), t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0, t.scale = t.currentScale = 1)
                                    },
                                    toggleZoom: function(t, i) {
                                        var n, o, a, r, s, l, p, d, c, u, m, h, g, f, v, w, y = t.zoom;
                                        y.gesture.slide || (y.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), y.gesture.image = y.gesture.slide.find("img, svg, canvas"), y.gesture.imageWrap = y.gesture.image.parent("." + t.params.zoomContainerClass)), y.gesture.image && 0 !== y.gesture.image.length && (o = void 0 === y.image.touchesStart.x && i ? (n = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX, "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (n = y.image.touchesStart.x, y.image.touchesStart.y), y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1, y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, i ? (v = y.gesture.slide[0].offsetWidth, w = y.gesture.slide[0].offsetHeight, a = y.gesture.slide.offset().left + v / 2 - n, r = y.gesture.slide.offset().top + w / 2 - o, p = y.gesture.image[0].offsetWidth, d = y.gesture.image[0].offsetHeight, c = p * y.scale, u = d * y.scale, g = -(m = Math.min(v / 2 - c / 2, 0)), f = -(h = Math.min(w / 2 - u / 2, 0)), (s = a * y.scale) < m && (s = m), g < s && (s = g), (l = r * y.scale) < h && (l = h), f < l && (l = f)) : l = s = 0, y.gesture.imageWrap.transition(300).transform("translate3d(" + s + "px, " + l + "px,0)"), y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")))
                                    },
                                    attachEvents: function(t) {
                                        var i = t ? "off" : "on";
                                        if (c.params.zoom) {
                                            c.slides;
                                            var n = !("touchstart" !== c.touchEvents.start || !c.support.passiveListener || !c.params.passiveListeners) && {
                                                passive: !0,
                                                capture: !1
                                            };
                                            c.support.gestures ? (c.slides[i]("gesturestart", c.zoom.onGestureStart, n), c.slides[i]("gesturechange", c.zoom.onGestureChange, n), c.slides[i]("gestureend", c.zoom.onGestureEnd, n)) : "touchstart" === c.touchEvents.start && (c.slides[i](c.touchEvents.start, c.zoom.onGestureStart, n), c.slides[i](c.touchEvents.move, c.zoom.onGestureChange, n), c.slides[i](c.touchEvents.end, c.zoom.onGestureEnd, n)), c[i]("touchStart", c.zoom.onTouchStart), c.slides.each(function(t, n) {
                                                0 < e(n).find("." + c.params.zoomContainerClass).length && e(n)[i](c.touchEvents.move, c.zoom.onTouchMove)
                                            }), c[i]("touchEnd", c.zoom.onTouchEnd), c[i]("transitionEnd", c.zoom.onTransitionEnd), c.params.zoomToggle && c.on("doubleTap", c.zoom.toggleZoom)
                                        }
                                    },
                                    init: function() {
                                        c.zoom.attachEvents()
                                    },
                                    destroy: function() {
                                        c.zoom.attachEvents(!0)
                                    }
                                }, c._plugins = [], c.plugins) {
                                var I = c.plugins[E](c, c.params[E]);
                                I && c._plugins.push(I)
                            }
                            return c.callPlugins = function(e) {
                                for (var t = 0; t < c._plugins.length; t++) e in c._plugins[t] && c._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                            }, c.emitterEventListeners = {}, c.emit = function(e) {
                                var t;
                                if (c.params[e] && c.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), c.emitterEventListeners[e])
                                    for (t = 0; t < c.emitterEventListeners[e].length; t++) c.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                                c.callPlugins && c.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                            }, c.on = function(e, t) {
                                return e = F(e), c.emitterEventListeners[e] || (c.emitterEventListeners[e] = []), c.emitterEventListeners[e].push(t), c
                            }, c.off = function(e, t) {
                                var i;
                                if (e = F(e), void 0 === t) return c.emitterEventListeners[e] = [], c;
                                if (c.emitterEventListeners[e] && 0 !== c.emitterEventListeners[e].length) {
                                    for (i = 0; i < c.emitterEventListeners[e].length; i++) c.emitterEventListeners[e][i] === t && c.emitterEventListeners[e].splice(i, 1);
                                    return c
                                }
                            }, c.once = function(e, t) {
                                e = F(e);
                                var i = function() {
                                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), c.off(e, i)
                                };
                                return c.on(e, i), c
                            }, c.a11y = {
                                makeFocusable: function(e) {
                                    return e.attr("tabIndex", "0"), e
                                },
                                addRole: function(e, t) {
                                    return e.attr("role", t), e
                                },
                                addLabel: function(e, t) {
                                    return e.attr("aria-label", t), e
                                },
                                disable: function(e) {
                                    return e.attr("aria-disabled", !0), e
                                },
                                enable: function(e) {
                                    return e.attr("aria-disabled", !1), e
                                },
                                onEnterKey: function(t) {
                                    13 === t.keyCode && (e(t.target).is(c.params.nextButton) ? (c.onClickNext(t), c.isEnd ? c.a11y.notify(c.params.lastSlideMessage) : c.a11y.notify(c.params.nextSlideMessage)) : e(t.target).is(c.params.prevButton) && (c.onClickPrev(t), c.isBeginning ? c.a11y.notify(c.params.firstSlideMessage) : c.a11y.notify(c.params.prevSlideMessage)), e(t.target).is("." + c.params.bulletClass) && e(t.target)[0].click())
                                },
                                liveRegion: e('<span class="' + c.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                                notify: function(e) {
                                    var t = c.a11y.liveRegion;
                                    0 !== t.length && (t.html(""), t.html(e))
                                },
                                init: function() {
                                    c.params.nextButton && c.nextButton && 0 < c.nextButton.length && (c.a11y.makeFocusable(c.nextButton), c.a11y.addRole(c.nextButton, "button"), c.a11y.addLabel(c.nextButton, c.params.nextSlideMessage)), c.params.prevButton && c.prevButton && 0 < c.prevButton.length && (c.a11y.makeFocusable(c.prevButton), c.a11y.addRole(c.prevButton, "button"), c.a11y.addLabel(c.prevButton, c.params.prevSlideMessage)), e(c.container).append(c.a11y.liveRegion)
                                },
                                initPagination: function() {
                                    c.params.pagination && c.params.paginationClickable && c.bullets && c.bullets.length && c.bullets.each(function() {
                                        var t = e(this);
                                        c.a11y.makeFocusable(t), c.a11y.addRole(t, "button"), c.a11y.addLabel(t, c.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                                    })
                                },
                                destroy: function() {
                                    c.a11y.liveRegion && 0 < c.a11y.liveRegion.length && c.a11y.liveRegion.remove()
                                }
                            }, c.init = function() {
                                c.params.loop && c.createLoop(), c.updateContainerSize(), c.updateSlidesSize(), c.updatePagination(), c.params.scrollbar && c.scrollbar && (c.scrollbar.set(), c.params.scrollbarDraggable && c.scrollbar.enableDraggable()), "slide" !== c.params.effect && c.effects[c.params.effect] && (c.params.loop || c.updateProgress(), c.effects[c.params.effect].setTranslate()), c.params.loop ? c.slideTo(c.params.initialSlide + c.loopedSlides, 0, c.params.runCallbacksOnInit) : (c.slideTo(c.params.initialSlide, 0, c.params.runCallbacksOnInit), 0 === c.params.initialSlide && (c.parallax && c.params.parallax && c.parallax.setTranslate(), c.lazy && c.params.lazyLoading && (c.lazy.load(), c.lazy.initialImageLoaded = !0))), c.attachEvents(), c.params.observer && c.support.observer && c.initObservers(), c.params.preloadImages && !c.params.lazyLoading && c.preloadImages(), c.params.zoom && c.zoom && c.zoom.init(), c.params.autoplay && c.startAutoplay(), c.params.keyboardControl && c.enableKeyboardControl && c.enableKeyboardControl(), c.params.mousewheelControl && c.enableMousewheelControl && c.enableMousewheelControl(), c.params.hashnavReplaceState && (c.params.replaceState = c.params.hashnavReplaceState), c.params.history && c.history && c.history.init(), c.params.hashnav && c.hashnav && c.hashnav.init(), c.params.a11y && c.a11y && c.a11y.init(), c.emit("onInit", c)
                            }, c.cleanupStyles = function() {
                                c.container.removeClass(c.classNames.join(" ")).removeAttr("style"), c.wrapper.removeAttr("style"), c.slides && c.slides.length && c.slides.removeClass([c.params.slideVisibleClass, c.params.slideActiveClass, c.params.slideNextClass, c.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), c.paginationContainer && c.paginationContainer.length && c.paginationContainer.removeClass(c.params.paginationHiddenClass), c.bullets && c.bullets.length && c.bullets.removeClass(c.params.bulletActiveClass), c.params.prevButton && e(c.params.prevButton).removeClass(c.params.buttonDisabledClass), c.params.nextButton && e(c.params.nextButton).removeClass(c.params.buttonDisabledClass), c.params.scrollbar && c.scrollbar && (c.scrollbar.track && c.scrollbar.track.length && c.scrollbar.track.removeAttr("style"), c.scrollbar.drag && c.scrollbar.drag.length && c.scrollbar.drag.removeAttr("style"))
                            }, c.destroy = function(e, t) {
                                c.detachEvents(), c.stopAutoplay(), c.params.scrollbar && c.scrollbar && c.params.scrollbarDraggable && c.scrollbar.disableDraggable(), c.params.loop && c.destroyLoop(), t && c.cleanupStyles(), c.disconnectObservers(), c.params.zoom && c.zoom && c.zoom.destroy(), c.params.keyboardControl && c.disableKeyboardControl && c.disableKeyboardControl(), c.params.mousewheelControl && c.disableMousewheelControl && c.disableMousewheelControl(), c.params.a11y && c.a11y && c.a11y.destroy(), c.params.history && !c.params.replaceState && window.removeEventListener("popstate", c.history.setHistoryPopState), c.params.hashnav && c.hashnav && c.hashnav.destroy(), c.emit("onDestroy"), !1 !== e && (c = null)
                            }, c.init(), c
                        }

                        function P(e) {
                            return Math.floor(e)
                        }

                        function A() {
                            var e = c.params.autoplay,
                                t = c.slides.eq(c.activeIndex);
                            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || c.params.autoplay), c.autoplayTimeoutId = setTimeout(function() {
                                c.params.loop ? (c.fixLoop(), c._slideNext(), c.emit("onAutoplay", c)) : c.isEnd ? i.autoplayStopOnLast ? c.stopAutoplay() : (c._slideTo(0), c.emit("onAutoplay", c)) : (c._slideNext(), c.emit("onAutoplay", c))
                            }, e)
                        }

                        function L(t, i) {
                            var n = e(t.target);
                            if (!n.is(i))
                                if ("string" == typeof i) n = n.parents(i);
                                else if (i.nodeType) {
                                var o;
                                return n.parents().each(function(e, t) {
                                    t === i && (o = i)
                                }), o ? i : void 0
                            }
                            if (0 !== n.length) return n[0]
                        }

                        function j(e, t) {
                            t = t || {};
                            var i = new(window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                                e.forEach(function(e) {
                                    c.onResize(!0), c.emit("onObserverUpdate", c, e)
                                })
                            });
                            i.observe(e, {
                                attributes: void 0 === t.attributes || t.attributes,
                                childList: void 0 === t.childList || t.childList,
                                characterData: void 0 === t.characterData || t.characterData
                            }), c.observers.push(i)
                        }

                        function N(e) {
                            e.originalEvent && (e = e.originalEvent);
                            var t = e.keyCode || e.charCode;
                            if (!c.params.allowSwipeToNext && (c.isHorizontal() && 39 === t || !c.isHorizontal() && 40 === t)) return !1;
                            if (!c.params.allowSwipeToPrev && (c.isHorizontal() && 37 === t || !c.isHorizontal() && 38 === t)) return !1;
                            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                                if (37 === t || 39 === t || 38 === t || 40 === t) {
                                    var i = !1;
                                    if (0 < c.container.parents("." + c.params.slideClass).length && 0 === c.container.parents("." + c.params.slideActiveClass).length) return;
                                    var n = window.pageXOffset,
                                        o = window.pageYOffset,
                                        a = window.innerWidth,
                                        r = window.innerHeight,
                                        s = c.container.offset();
                                    c.rtl && (s.left = s.left - c.container[0].scrollLeft);
                                    for (var l = [
                                            [s.left, s.top],
                                            [s.left + c.width, s.top],
                                            [s.left, s.top + c.height],
                                            [s.left + c.width, s.top + c.height]
                                        ], p = 0; p < l.length; p++) {
                                        var d = l[p];
                                        d[0] >= n && d[0] <= n + a && d[1] >= o && d[1] <= o + r && (i = !0)
                                    }
                                    if (!i) return
                                }
                                c.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !c.rtl || 37 === t && c.rtl) && c.slideNext(), (37 === t && !c.rtl || 39 === t && c.rtl) && c.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && c.slideNext(), 38 === t && c.slidePrev()), c.emit("onKeyPress", c, t)
                            }
                        }

                        function B(e) {
                            e.originalEvent && (e = e.originalEvent);
                            var t, i, n, o, a, r = 0,
                                s = c.rtl ? -1 : 1,
                                l = (a = o = n = i = 0, "detail" in (t = e) && (n = t.detail), "wheelDelta" in t && (n = -t.wheelDelta / 120), "wheelDeltaY" in t && (n = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (i = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (i = n, n = 0), o = 10 * i, a = 10 * n, "deltaY" in t && (a = t.deltaY), "deltaX" in t && (o = t.deltaX), (o || a) && t.deltaMode && (1 === t.deltaMode ? (o *= 40, a *= 40) : (o *= 800, a *= 800)), o && !i && (i = o < 1 ? -1 : 1), a && !n && (n = a < 1 ? -1 : 1), {
                                    spinX: i,
                                    spinY: n,
                                    pixelX: o,
                                    pixelY: a
                                });
                            if (c.params.mousewheelForceToAxis)
                                if (c.isHorizontal()) {
                                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return;
                                    r = l.pixelX * s
                                } else {
                                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return;
                                    r = l.pixelY
                                }
                            else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * s : -l.pixelY;
                            if (0 !== r) {
                                if (c.params.mousewheelInvert && (r = -r), c.params.freeMode) {
                                    var p = c.getWrapperTranslate() + r * c.params.mousewheelSensitivity,
                                        d = c.isBeginning,
                                        u = c.isEnd;
                                    if (p >= c.minTranslate() && (p = c.minTranslate()), p <= c.maxTranslate() && (p = c.maxTranslate()), c.setWrapperTransition(0), c.setWrapperTranslate(p), c.updateProgress(), c.updateActiveIndex(), (!d && c.isBeginning || !u && c.isEnd) && c.updateClasses(), c.params.freeModeSticky ? (clearTimeout(c.mousewheel.timeout), c.mousewheel.timeout = setTimeout(function() {
                                            c.slideReset()
                                        }, 300)) : c.params.lazyLoading && c.lazy && c.lazy.load(), c.emit("onScroll", c, e), c.params.autoplay && c.params.autoplayDisableOnInteraction && c.stopAutoplay(), 0 === p || p === c.maxTranslate()) return
                                } else {
                                    if (60 < (new window.Date).getTime() - c.mousewheel.lastScrollTime)
                                        if (r < 0)
                                            if (c.isEnd && !c.params.loop || c.animating) {
                                                if (c.params.mousewheelReleaseOnEdges) return !0
                                            } else c.slideNext(), c.emit("onScroll", c, e);
                                    else if (c.isBeginning && !c.params.loop || c.animating) {
                                        if (c.params.mousewheelReleaseOnEdges) return !0
                                    } else c.slidePrev(), c.emit("onScroll", c, e);
                                    c.mousewheel.lastScrollTime = (new window.Date).getTime()
                                }
                                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
                            }
                        }

                        function H(t, i) {
                            var n, o, a;
                            t = e(t);
                            var r = c.rtl ? -1 : 1;
                            n = t.attr("data-swiper-parallax") || "0", o = t.attr("data-swiper-parallax-x"), a = t.attr("data-swiper-parallax-y"), o || a ? (o = o || "0", a = a || "0") : c.isHorizontal() ? (o = n, a = "0") : (a = n, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * i * r + "%" : o * i * r + "px", a = 0 <= a.indexOf("%") ? parseInt(a, 10) * i + "%" : a * i + "px", t.transform("translate3d(" + o + ", " + a + ",0px)")
                        }

                        function F(e) {
                            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
                        }
                    };
                    p.prototype = {
                        isSafari: (l = window.navigator.userAgent.toLowerCase(), 0 <= l.indexOf("safari") && l.indexOf("chrome") < 0 && l.indexOf("android") < 0),
                        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
                        isArray: function(e) {
                            return "[object Array]" === Object.prototype.toString.apply(e)
                        },
                        browser: {
                            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                            ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
                            lteIE9: (s = document.createElement("div"), s.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e", 1 === s.getElementsByTagName("i").length)
                        },
                        device: (i = window.navigator.userAgent, n = i.match(/(Android);?[\s\/]+([\d.]+)?/), o = i.match(/(iPad).*OS\s([\d_]+)/), a = i.match(/(iPod)(.*OS\s([\d_]+))?/), r = !o && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/), {
                            ios: o || r || a,
                            android: n
                        }),
                        support: {
                            touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
                            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || (t = document.createElement("div").style, "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t),
                            flexbox: function() {
                                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++)
                                    if (t[i] in e) return !0
                            }(),
                            observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
                            passiveListener: function() {
                                var e = !1;
                                try {
                                    var t = Object.defineProperty({}, "passive", {
                                        get: function() {
                                            e = !0
                                        }
                                    });
                                    window.addEventListener("testPassiveListener", null, t)
                                } catch (e) {}
                                return e
                            }(),
                            gestures: "ongesturestart" in window
                        },
                        plugins: {}
                    };
                    for (var d, c, u, m = (c = function(e, t) {
                            var i = [],
                                n = 0;
                            if (e && !t && e instanceof d) return e;
                            if (e)
                                if ("string" == typeof e) {
                                    var o, a, r = e.trim();
                                    if (0 <= r.indexOf("<") && 0 <= r.indexOf(">")) {
                                        var s = "div";
                                        for (0 === r.indexOf("<li") && (s = "ul"), 0 === r.indexOf("<tr") && (s = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (s = "tr"), 0 === r.indexOf("<tbody") && (s = "table"), 0 === r.indexOf("<option") && (s = "select"), (a = document.createElement(s)).innerHTML = e, n = 0; n < a.childNodes.length; n++) i.push(a.childNodes[n])
                                    } else
                                        for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e) : [document.getElementById(e.split("#")[1])], n = 0; n < o.length; n++) o[n] && i.push(o[n])
                                } else if (e.nodeType || e === window || e === document) i.push(e);
                            else if (0 < e.length && e[0].nodeType)
                                for (n = 0; n < e.length; n++) i.push(e[n]);
                            return new d(i)
                        }, (d = function(e) {
                            var t = 0;
                            for (t = 0; t < e.length; t++) this[t] = e[t];
                            return this.length = e.length, this
                        }).prototype = {
                            addClass: function(e) {
                                if (void 0 === e) return this;
                                for (var t = e.split(" "), i = 0; i < t.length; i++)
                                    for (var n = 0; n < this.length; n++) this[n].classList.add(t[i]);
                                return this
                            },
                            removeClass: function(e) {
                                for (var t = e.split(" "), i = 0; i < t.length; i++)
                                    for (var n = 0; n < this.length; n++) this[n].classList.remove(t[i]);
                                return this
                            },
                            hasClass: function(e) {
                                return !!this[0] && this[0].classList.contains(e)
                            },
                            toggleClass: function(e) {
                                for (var t = e.split(" "), i = 0; i < t.length; i++)
                                    for (var n = 0; n < this.length; n++) this[n].classList.toggle(t[i]);
                                return this
                            },
                            attr: function(e, t) {
                                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                                for (var i = 0; i < this.length; i++)
                                    if (2 === arguments.length) this[i].setAttribute(e, t);
                                    else
                                        for (var n in e) this[i][n] = e[n], this[i].setAttribute(n, e[n]);
                                return this
                            },
                            removeAttr: function(e) {
                                for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                                return this
                            },
                            data: function(e, t) {
                                if (void 0 !== t) {
                                    for (var i = 0; i < this.length; i++) {
                                        var n = this[i];
                                        n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t
                                    }
                                    return this
                                }
                                if (this[0]) return this[0].getAttribute("data-" + e) || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                            },
                            transform: function(e) {
                                for (var t = 0; t < this.length; t++) {
                                    var i = this[t].style;
                                    i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
                                }
                                return this
                            },
                            transition: function(e) {
                                "string" != typeof e && (e += "ms");
                                for (var t = 0; t < this.length; t++) {
                                    var i = this[t].style;
                                    i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
                                }
                                return this
                            },
                            on: function(e, t, i, n) {
                                function o(e) {
                                    var n = e.target;
                                    if (c(n).is(t)) i.call(n, e);
                                    else
                                        for (var o = c(n).parents(), a = 0; a < o.length; a++) c(o[a]).is(t) && i.call(o[a], e)
                                }
                                var a, r, s = e.split(" ");
                                for (a = 0; a < this.length; a++)
                                    if ("function" == typeof t || !1 === t)
                                        for ("function" == typeof t && (i = t, n = arguments[2] || !1), r = 0; r < s.length; r++) this[a].addEventListener(s[r], i, n);
                                    else
                                        for (r = 0; r < s.length; r++) this[a].dom7LiveListeners || (this[a].dom7LiveListeners = []), this[a].dom7LiveListeners.push({
                                            listener: i,
                                            liveListener: o
                                        }), this[a].addEventListener(s[r], o, n);
                                return this
                            },
                            off: function(e, t, i, n) {
                                for (var o = e.split(" "), a = 0; a < o.length; a++)
                                    for (var r = 0; r < this.length; r++)
                                        if ("function" == typeof t || !1 === t) "function" == typeof t && (i = t, n = arguments[2] || !1), this[r].removeEventListener(o[a], i, n);
                                        else if (this[r].dom7LiveListeners)
                                    for (var s = 0; s < this[r].dom7LiveListeners.length; s++) this[r].dom7LiveListeners[s].listener === i && this[r].removeEventListener(o[a], this[r].dom7LiveListeners[s].liveListener, n);
                                return this
                            },
                            once: function(e, t, i, n) {
                                var o = this;
                                "function" == typeof t && (t = !1, i = arguments[1], n = arguments[2]), o.on(e, t, function a(r) {
                                    i(r), o.off(e, t, a, n)
                                }, n)
                            },
                            trigger: function(e, t) {
                                for (var i = 0; i < this.length; i++) {
                                    var n;
                                    try {
                                        n = new window.CustomEvent(e, {
                                            detail: t,
                                            bubbles: !0,
                                            cancelable: !0
                                        })
                                    } catch (i) {
                                        (n = document.createEvent("Event")).initEvent(e, !0, !0), n.detail = t
                                    }
                                    this[i].dispatchEvent(n)
                                }
                                return this
                            },
                            transitionEnd: function(e) {
                                var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                                    n = this;

                                function o(a) {
                                    if (a.target === this)
                                        for (e.call(this, a), t = 0; t < i.length; t++) n.off(i[t], o)
                                }
                                if (e)
                                    for (t = 0; t < i.length; t++) n.on(i[t], o);
                                return this
                            },
                            width: function() {
                                return this[0] === window ? window.innerWidth : 0 < this.length ? parseFloat(this.css("width")) : null
                            },
                            outerWidth: function(e) {
                                return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                            },
                            height: function() {
                                return this[0] === window ? window.innerHeight : 0 < this.length ? parseFloat(this.css("height")) : null
                            },
                            outerHeight: function(e) {
                                return 0 < this.length ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                            },
                            offset: function() {
                                if (0 < this.length) {
                                    var e = this[0],
                                        t = e.getBoundingClientRect(),
                                        i = document.body,
                                        n = e.clientTop || i.clientTop || 0,
                                        o = e.clientLeft || i.clientLeft || 0,
                                        a = window.pageYOffset || e.scrollTop,
                                        r = window.pageXOffset || e.scrollLeft;
                                    return {
                                        top: t.top + a - n,
                                        left: t.left + r - o
                                    }
                                }
                                return null
                            },
                            css: function(e, t) {
                                var i;
                                if (1 === arguments.length) {
                                    if ("string" != typeof e) {
                                        for (i = 0; i < this.length; i++)
                                            for (var n in e) this[i].style[n] = e[n];
                                        return this
                                    }
                                    if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                                }
                                if (2 !== arguments.length || "string" != typeof e) return this;
                                for (i = 0; i < this.length; i++) this[i].style[e] = t;
                                return this
                            },
                            each: function(e) {
                                for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                                return this
                            },
                            html: function(e) {
                                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                                for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                                return this
                            },
                            text: function(e) {
                                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                                for (var t = 0; t < this.length; t++) this[t].textContent = e;
                                return this
                            },
                            is: function(e) {
                                if (!this[0]) return !1;
                                var t, i;
                                if ("string" == typeof e) {
                                    var n = this[0];
                                    if (n === document) return e === document;
                                    if (n === window) return e === window;
                                    if (n.matches) return n.matches(e);
                                    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                                    if (n.mozMatchesSelector) return n.mozMatchesSelector(e);
                                    if (n.msMatchesSelector) return n.msMatchesSelector(e);
                                    for (t = c(e), i = 0; i < t.length; i++)
                                        if (t[i] === this[0]) return !0;
                                    return !1
                                }
                                if (e === document) return this[0] === document;
                                if (e === window) return this[0] === window;
                                if (e.nodeType || e instanceof d) {
                                    for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i++)
                                        if (t[i] === this[0]) return !0;
                                    return !1
                                }
                                return !1
                            },
                            index: function() {
                                if (this[0]) {
                                    for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                                    return t
                                }
                            },
                            eq: function(e) {
                                if (void 0 === e) return this;
                                var t, i = this.length;
                                return new d(i - 1 < e ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
                            },
                            append: function(e) {
                                var t, i;
                                for (t = 0; t < this.length; t++)
                                    if ("string" == typeof e) {
                                        var n = document.createElement("div");
                                        for (n.innerHTML = e; n.firstChild;) this[t].appendChild(n.firstChild)
                                    } else if (e instanceof d)
                                    for (i = 0; i < e.length; i++) this[t].appendChild(e[i]);
                                else this[t].appendChild(e);
                                return this
                            },
                            prepend: function(e) {
                                var t, i;
                                for (t = 0; t < this.length; t++)
                                    if ("string" == typeof e) {
                                        var n = document.createElement("div");
                                        for (n.innerHTML = e, i = n.childNodes.length - 1; 0 <= i; i--) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
                                    } else if (e instanceof d)
                                    for (i = 0; i < e.length; i++) this[t].insertBefore(e[i], this[t].childNodes[0]);
                                else this[t].insertBefore(e, this[t].childNodes[0]);
                                return this
                            },
                            insertBefore: function(e) {
                                for (var t = c(e), i = 0; i < this.length; i++)
                                    if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0]);
                                    else if (1 < t.length)
                                    for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[i].cloneNode(!0), t[n])
                            },
                            insertAfter: function(e) {
                                for (var t = c(e), i = 0; i < this.length; i++)
                                    if (1 === t.length) t[0].parentNode.insertBefore(this[i], t[0].nextSibling);
                                    else if (1 < t.length)
                                    for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[i].cloneNode(!0), t[n].nextSibling)
                            },
                            next: function(e) {
                                return 0 < this.length ? e ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(e) ? new d([this[0].nextElementSibling]) : new d([]) : this[0].nextElementSibling ? new d([this[0].nextElementSibling]) : new d([]) : new d([])
                            },
                            nextAll: function(e) {
                                var t = [],
                                    i = this[0];
                                if (!i) return new d([]);
                                for (; i.nextElementSibling;) {
                                    var n = i.nextElementSibling;
                                    e ? c(n).is(e) && t.push(n) : t.push(n), i = n
                                }
                                return new d(t)
                            },
                            prev: function(e) {
                                return 0 < this.length ? e ? this[0].previousElementSibling && c(this[0].previousElementSibling).is(e) ? new d([this[0].previousElementSibling]) : new d([]) : this[0].previousElementSibling ? new d([this[0].previousElementSibling]) : new d([]) : new d([])
                            },
                            prevAll: function(e) {
                                var t = [],
                                    i = this[0];
                                if (!i) return new d([]);
                                for (; i.previousElementSibling;) {
                                    var n = i.previousElementSibling;
                                    e ? c(n).is(e) && t.push(n) : t.push(n), i = n
                                }
                                return new d(t)
                            },
                            parent: function(e) {
                                for (var t = [], i = 0; i < this.length; i++) e ? c(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode);
                                return c(c.unique(t))
                            },
                            parents: function(e) {
                                for (var t = [], i = 0; i < this.length; i++)
                                    for (var n = this[i].parentNode; n;) e ? c(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
                                return c(c.unique(t))
                            },
                            find: function(e) {
                                for (var t = [], i = 0; i < this.length; i++)
                                    for (var n = this[i].querySelectorAll(e), o = 0; o < n.length; o++) t.push(n[o]);
                                return new d(t)
                            },
                            children: function(e) {
                                for (var t = [], i = 0; i < this.length; i++)
                                    for (var n = this[i].childNodes, o = 0; o < n.length; o++) e ? 1 === n[o].nodeType && c(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
                                return new d(c.unique(t))
                            },
                            remove: function() {
                                for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                                return this
                            },
                            add: function() {
                                var e, t;
                                for (e = 0; e < arguments.length; e++) {
                                    var i = c(arguments[e]);
                                    for (t = 0; t < i.length; t++) this[this.length] = i[t], this.length++
                                }
                                return this
                            }
                        }, c.fn = d.prototype, c.unique = function(e) {
                            for (var t = [], i = 0; i < e.length; i++) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                            return t
                        }, c), h = ["jQuery", "Zepto", "Dom7"], g = 0; g < h.length; g++) window[h[g]] && f(window[h[g]]);

                    function f(e) {
                        e.fn.swiper = function(t) {
                            var i;
                            return e(this).each(function() {
                                var e = new p(this, t);
                                i || (i = e)
                            }), i
                        }
                    }(u = void 0 === m ? window.Dom7 || window.Zepto || window.jQuery : m) && ("transitionEnd" in u.fn || (u.fn.transitionEnd = function(e) {
                        var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            n = this;

                        function o(a) {
                            if (a.target === this)
                                for (e.call(this, a), t = 0; t < i.length; t++) n.off(i[t], o)
                        }
                        if (e)
                            for (t = 0; t < i.length; t++) n.on(i[t], o);
                        return this
                    }), "transform" in u.fn || (u.fn.transform = function(e) {
                        for (var t = 0; t < this.length; t++) {
                            var i = this[t].style;
                            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
                        }
                        return this
                    }), "transition" in u.fn || (u.fn.transition = function(e) {
                        "string" != typeof e && (e += "ms");
                        for (var t = 0; t < this.length; t++) {
                            var i = this[t].style;
                            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
                        }
                        return this
                    }), "outerWidth" in u.fn || (u.fn.outerWidth = function(e) {
                        return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                    })), window.SwiperNoConflict = p
                }(), void 0 !== t ? t.exports = window.SwiperNoConflict : "function" == typeof define && define.amd && define([], function() {
                    return window.SwiperNoConflict
                })
            }, {}]
        }, {}, [4])
}();