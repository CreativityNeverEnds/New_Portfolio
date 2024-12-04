(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    10: function(t, e, i) {
        "use strict";
        i.d(e, "i", (function() {
            return Q
        }
        )),
        i.d(e, "j", (function() {
            return Z
        }
        )),
        i.d(e, "a", (function() {
            return J
        }
        )),
        i.d(e, "n", (function() {
            return K
        }
        )),
        i.d(e, "e", (function() {
            return tt
        }
        )),
        i.d(e, "f", (function() {
            return et
        }
        )),
        i.d(e, "c", (function() {
            return it
        }
        )),
        i.d(e, "h", (function() {
            return at
        }
        )),
        i.d(e, "o", (function() {
            return nt
        }
        )),
        i.d(e, "k", (function() {
            return lt
        }
        )),
        i.d(e, "m", (function() {
            return ct
        }
        )),
        i.d(e, "d", (function() {
            return dt
        }
        )),
        i.d(e, "b", (function() {
            return ut
        }
        )),
        i.d(e, "g", (function() {
            return ft
        }
        )),
        i.d(e, "l", (function() {
            return ht
        }
        ));
        i(225),
        i(73),
        i(40),
        i(236),
        i(61),
        i(74),
        i(108),
        i(89),
        i(411),
        i(102),
        i(111);
        var r = i(86)
          , a = i.n(r)
          , o = i(97)
          , n = i.n(o)
          , s = i(69)
          , l = i.n(s)
          , c = i(14)
          , d = i.n(c)
          , u = i(70)
          , f = i.n(u)
          , h = i(71)
          , m = i.n(h)
          , p = i(98)
          , b = i.n(p)
          , g = i(88)
          , v = i(43)
          , w = i.n(v)
          , k = i(300)
          , x = i.n(k)
          , _ = i(117)
          , y = i.n(_)
          , M = i(68)
          , C = i.n(M)
          , T = i(47)
          , z = i(80)
          , S = i.n(z)
          , I = i(3)
          , B = i.n(I)
          , L = i(31)
          , A = i.n(L)
          , O = i(1)
          , G = i.n(O)
          , E = (i(39),
        i(7))
          , X = i(9)
          , P = i.n(X)
          , R = i(193)
          , D = i.n(R)
          , F = i(55)
          , W = i.n(F)
          , N = i(20)
          , V = i.n(N)
          , j = i(19)
          , U = i.n(j)
          , $ = i(99)
          , H = i(2);
        function Y(t, e) {
            var i = W()(t);
            if (m.a) {
                var r = m()(t);
                e && (r = w()(r).call(r, (function(e) {
                    return f()(t, e).enumerable
                }
                ))),
                i.push.apply(i, r)
            }
            return i
        }
        function q(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i, r = null != arguments[e] ? arguments[e] : {};
                if (e % 2)
                    d()(i = Y(Object(r), !0)).call(i, (function(e) {
                        Object($.a)(t, e, r[e])
                    }
                    ));
                else if (l.a)
                    n()(t, l()(r));
                else {
                    var o;
                    d()(o = Y(Object(r))).call(o, (function(e) {
                        a()(t, e, f()(r, e))
                    }
                    ))
                }
            }
            return t
        }
        function Q(t) {
            H.a.config.errorHandler && H.a.config.errorHandler(t)
        }
        function Z(t) {
            return t.then((function(t) {
                return t.default || t
            }
            ))
        }
        function J(t, e) {
            if (e || !t.options.__hasNuxtData) {
                var i = t.options._originDataFn || t.options.data || function() {
                    return {}
                }
                ;
                t.options._originDataFn = i,
                t.options.data = function() {
                    var r = i.call(this, this);
                    return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                    q({}, r, {}, e)
                }
                ,
                t.options.__hasNuxtData = !0,
                t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
            }
        }
        function K(t) {
            return t.options && t._Ctor === t || (t.options ? (t._Ctor = t,
            t.extendOptions = t.options) : (t = H.a.extend(t))._Ctor = t,
            !t.options.name && t.options.__file && (t.options.name = t.options.__file)),
            t
        }
        function tt(t) {
            var e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return U()(Array.prototype).apply([], V()(e = t.matched).call(e, (function(t, e) {
                var a;
                return V()(a = W()(t[r])).call(a, (function(a) {
                    return i && i.push(e),
                    t[r][a]
                }
                ))
            }
            )))
        }
        function et(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return tt(t, e, "instances")
        }
        function it(t, e) {
            var i;
            return U()(Array.prototype).apply([], V()(i = t.matched).call(i, (function(t, i) {
                var r;
                return D()(r = W()(t.components)).call(r, (function(r, a) {
                    return t.components[a] ? r.push(e(t.components[a], t.instances[a], t, a, i)) : delete t.components[a],
                    r
                }
                ), [])
            }
            )))
        }
        function rt(t, e) {
            return P.a.all(it(t, function() {
                var t = Object(E.a)(G.a.mark((function t(i, r, a, o) {
                    return G.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if ("function" != typeof i || i.options) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 3,
                                i();
                            case 3:
                                i = t.sent;
                            case 4:
                                return a.components[o] = i = K(i),
                                t.abrupt("return", "function" == typeof e ? e(i, r, a, o) : i);
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e, i, r, a) {
                    return t.apply(this, arguments)
                }
            }()))
        }
        function at(t) {
            return ot.apply(this, arguments)
        }
        function ot() {
            return (ot = Object(E.a)(G.a.mark((function t(e) {
                var i;
                return G.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (e) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.next = 4,
                            rt(e);
                        case 4:
                            return t.abrupt("return", q({}, e, {
                                meta: V()(i = tt(e)).call(i, (function(t, i) {
                                    return q({}, t.options.meta, {}, (e.matched[i] || {}).meta)
                                }
                                ))
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function nt(t, e) {
            return st.apply(this, arguments)
        }
        function st() {
            return (st = Object(E.a)(G.a.mark((function t(e, i) {
                var r, a, o, n;
                return G.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return e.context || (e.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: e,
                                store: e.store,
                                payload: i.payload,
                                error: i.error,
                                base: "/",
                                env: {
                                    meta: {
                                        title: "unshift",
                                        shortName: "unshift",
                                        url: "https://unshift.jp/",
                                        description: "This is Kenzo Suzuki's portfolio site.",
                                        ogImage: "https://unshift.jp/img/common/ogp.png"
                                    }
                                }
                            },
                            i.req && (e.context.req = i.req),
                            i.res && (e.context.res = i.res),
                            i.ssrContext && (e.context.ssrContext = i.ssrContext),
                            e.context.redirect = function(t, i, r) {
                                if (t) {
                                    e.context._redirected = !0;
                                    var a = Object(T.a)(i);
                                    if ("number" == typeof t || "undefined" !== a && "object" !== a || (r = i || {},
                                    i = t,
                                    a = Object(T.a)(i),
                                    t = 302),
                                    "object" === a && (i = e.router.resolve(i).route.fullPath),
                                    !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(i))
                                        throw i = wt(i, r),
                                        window.location.replace(i),
                                        new Error("ERR_REDIRECT");
                                    e.context.next({
                                        path: i,
                                        query: r,
                                        status: t
                                    })
                                }
                            }
                            ,
                            e.context.nuxtState = window.__NUXT__),
                            t.next = 3,
                            P.a.all([at(i.route), at(i.from)]);
                        case 3:
                            r = t.sent,
                            a = Object(g.a)(r, 2),
                            o = a[0],
                            n = a[1],
                            i.route && (e.context.route = o),
                            i.from && (e.context.from = n),
                            e.context.next = i.next,
                            e.context._redirected = !1,
                            e.context._errored = !1,
                            e.context.isHMR = !1,
                            e.context.params = e.context.route.params || {},
                            e.context.query = e.context.route.query || {};
                        case 15:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function lt(t, e) {
            return !t.length || e._redirected || e._errored ? P.a.resolve() : ct(t[0], e).then((function() {
                return lt(A()(t).call(t, 1), e)
            }
            ))
        }
        function ct(t, e) {
            var i;
            return (i = 2 === t.length ? new P.a((function(i) {
                t(e, (function(t, r) {
                    t && e.error(t),
                    i(r = r || {})
                }
                ))
            }
            )) : t(e)) && i instanceof P.a && "function" == typeof i.then ? i : P.a.resolve(i)
        }
        function dt(t, e) {
            var i = decodeURI(window.location.pathname);
            return "hash" === e ? window.location.hash.replace(/^#\//, "") : (t && 0 === B()(i).call(i, t) && (i = A()(i).call(i, t.length)),
            (i || "/") + window.location.search + window.location.hash)
        }
        function ut(t, e) {
            return function(t, e) {
                for (var i = new Array(t.length), r = 0; r < t.length; r++)
                    "object" === Object(T.a)(t[r]) && (i[r] = new RegExp("^(?:" + t[r].pattern + ")$",vt(e)));
                return function(e, r) {
                    for (var a = "", o = e || {}, n = (r || {}).pretty ? pt : encodeURIComponent, s = 0; s < t.length; s++) {
                        var l = t[s];
                        if ("string" != typeof l) {
                            var c = o[l.name || "pathMatch"]
                              , d = void 0;
                            if (null == c) {
                                if (l.optional) {
                                    l.partial && (a += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (C()(c)) {
                                if (!y()(l))
                                    throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + S()(c) + "`");
                                if (0 === c.length) {
                                    if (l.optional)
                                        continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var u = 0; u < c.length; u++) {
                                    if (d = n(c[u]),
                                    !i[s].test(d))
                                        throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + S()(d) + "`");
                                    a += (0 === u ? l.prefix : l.delimiter) + d
                                }
                            } else {
                                if (d = l.asterisk ? pt(c, !0) : n(c),
                                !i[s].test(d))
                                    throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
                                a += l.prefix + d
                            }
                        } else
                            a += l
                    }
                    return a
                }
            }(function(t, e) {
                var i, r = [], a = 0, o = 0, n = "", s = e && e.delimiter || "/";
                for (; null != (i = mt.exec(t)); ) {
                    var l = i[0]
                      , c = i[1]
                      , d = i.index;
                    if (n += A()(t).call(t, o, d),
                    o = d + l.length,
                    c)
                        n += c[1];
                    else {
                        var u = t[o]
                          , f = i[2]
                          , h = i[3]
                          , m = i[4]
                          , p = i[5]
                          , b = i[6]
                          , g = i[7];
                        n && (r.push(n),
                        n = "");
                        var v = null != f && null != u && u !== f
                          , w = "+" === b || "*" === b
                          , k = "?" === b || "*" === b
                          , x = i[2] || s
                          , _ = m || p;
                        r.push({
                            name: h || a++,
                            prefix: f || "",
                            delimiter: x,
                            optional: k,
                            repeat: w,
                            partial: v,
                            asterisk: Boolean(g),
                            pattern: _ ? gt(_) : g ? ".*" : "[^" + bt(x) + "]+?"
                        })
                    }
                }
                o < t.length && (n += t.substr(o));
                n && r.push(n);
                return r
            }(t, e), e)
        }
        function ft(t, e) {
            var i = {}
              , r = q({}, t, {}, e);
            for (var a in r)
                String(t[a]) !== String(e[a]) && (i[a] = !0);
            return i
        }
        function ht(t) {
            var e;
            if (t.message || "string" == typeof t)
                e = t.message || t;
            else
                try {
                    e = S()(t, null, 2)
                } catch (i) {
                    e = "[".concat(t.constructor.name, "]")
                }
            return q({}, t, {
                message: e,
                statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [],
        window.onNuxtReady = function(t) {
            window.onNuxtReadyCbs.push(t)
        }
        ;
        var mt = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
        function pt(t, e) {
            var i = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(i, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function bt(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }
        function gt(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }
        function vt(t) {
            return t && t.sensitive ? "" : "i"
        }
        function wt(t, e) {
            var i, r = B()(t).call(t, "://");
            -1 !== r ? (i = t.substring(0, r),
            t = t.substring(r + 3)) : x()(t).call(t, "//") && (t = t.substring(2));
            var a, o = t.split("/"), n = (i ? i + "://" : "//") + o.shift(), s = w()(o).call(o, Boolean).join("/");
            if (2 === (o = s.split("#")).length) {
                var l = o
                  , c = Object(g.a)(l, 2);
                s = c[0],
                a = c[1]
            }
            return n += s ? "/" + s : "",
            e && "{}" !== S()(e) && (n += (2 === t.split("?").length ? "&" : "?") + function(t) {
                var e, i, r;
                return w()(e = V()(i = b()(r = W()(t)).call(r)).call(i, (function(e) {
                    var i, r = t[e];
                    return null == r ? "" : C()(r) ? V()(i = A()(r).call(r)).call(i, (function(t) {
                        return [e, "=", t].join("")
                    }
                    )).join("&") : e + "=" + r
                }
                ))).call(e, Boolean).join("&")
            }(e)),
            n += a ? "#" + a : ""
        }
    },
    170: function(t, e, i) {
        var r = i(468);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("72daabed", r, !0, {
            sourceMap: !1
        })
    },
    171: function(t, e, i) {
        var r = i(479);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("b78a9876", r, !0, {
            sourceMap: !1
        })
    },
    172: function(t, e, i) {
        var r = i(511);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("3b901970", r, !0, {
            sourceMap: !1
        })
    },
    173: function(t, e, i) {
        var r = i(513);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("276b3c56", r, !0, {
            sourceMap: !1
        })
    },
    174: function(t, e, i) {
        var r = i(515);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("3244d3e0", r, !0, {
            sourceMap: !1
        })
    },
    175: function(t, e, i) {
        var r = i(517);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("774ed11a", r, !0, {
            sourceMap: !1
        })
    },
    176: function(t, e, i) {
        var r = i(519);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("32857cc9", r, !0, {
            sourceMap: !1
        })
    },
    177: function(t, e, i) {
        var r = i(521);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("66126850", r, !0, {
            sourceMap: !1
        })
    },
    178: function(t, e, i) {
        var r = i(523);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("c0d55c74", r, !0, {
            sourceMap: !1
        })
    },
    179: function(t, e, i) {
        var r = i(525);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("dd3e01e2", r, !0, {
            sourceMap: !1
        })
    },
    180: function(t, e, i) {
        var r = i(527);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("38c9daae", r, !0, {
            sourceMap: !1
        })
    },
    181: function(t, e, i) {
        var r = i(529);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("1c261bd0", r, !0, {
            sourceMap: !1
        })
    },
    182: function(t, e, i) {
        var r = i(531);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("3742c02e", r, !0, {
            sourceMap: !1
        })
    },
    183: function(t, e, i) {
        var r = i(533);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("4c842a1a", r, !0, {
            sourceMap: !1
        })
    },
    184: function(t, e, i) {
        var r = i(535);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("509708c3", r, !0, {
            sourceMap: !1
        })
    },
    185: function(t, e, i) {
        var r = i(543);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("459a47e0", r, !0, {
            sourceMap: !1
        })
    },
    186: function(t, e, i) {
        var r = i(565);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("6efbadf6", r, !0, {
            sourceMap: !1
        })
    },
    187: function(t, e, i) {
        var r = i(571);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("05e9818a", r, !0, {
            sourceMap: !1
        })
    },
    188: function(t, e, i) {
        var r = i(573);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("1cb42670", r, !0, {
            sourceMap: !1
        })
    },
    189: function(t, e, i) {
        var r = i(575);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("425a0dd0", r, !0, {
            sourceMap: !1
        })
    },
    195: function(t, e, i) {
        "use strict";
        var r = i(9)
          , a = i.n(r)
          , o = i(191)
          , n = i.n(o)
          , s = i(43)
          , l = i.n(s)
          , c = i(20)
          , d = i.n(c)
          , u = i(192)
          , f = i.n(u)
          , h = i(18)
          , m = i.n(h)
          , p = i(14)
          , b = i.n(p)
          , g = i(36)
          , v = i.n(g)
          , w = i(87)
          , k = i.n(w)
          , x = i(2)
          , _ = window.requestIdleCallback || function(t) {
            var e = k()();
            return v()((function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (k()() - e))
                    }
                })
            }
            ), 1)
        }
          , y = window.cancelIdleCallback || function(t) {
            clearTimeout(t)
        }
          , M = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
            b()(t).call(t, (function(t) {
                var e = t.intersectionRatio
                  , i = t.target;
                e <= 0 || i.__prefetch()
            }
            ))
        }
        ));
        e.a = {
            name: "NuxtLink",
            extends: x.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = _(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                y(this.handleId),
                this.__observed && (M.unobserve(this.$el),
                delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    var t;
                    M && (this.shouldPrefetch() && (this.$el.__prefetch = m()(t = this.prefetchLink).call(t, this),
                    M.observe(this.$el),
                    this.__observed = !0))
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var t, e = navigator.connection;
                    return !(this.$nuxt.isOffline || e && (f()(t = e.effectiveType || "").call(t, "2g") || e.saveData))
                },
                getPrefetchComponents: function() {
                    var t, e = this.$router.resolve(this.to, this.$route, this.append), i = d()(t = e.resolved.matched).call(t, (function(t) {
                        return t.components.default
                    }
                    ));
                    return l()(i).call(i, (function(t) {
                        return "function" == typeof t && !t.options && !t.__prefetched
                    }
                    ))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        M.unobserve(this.$el);
                        var t = this.getPrefetchComponents()
                          , e = !0
                          , i = !1
                          , r = void 0;
                        try {
                            for (var o, s = n()(t); !(e = (o = s.next()).done); e = !0) {
                                var l = o.value
                                  , c = l();
                                c instanceof a.a && c.catch((function() {}
                                )),
                                l.__prefetched = !0
                            }
                        } catch (t) {
                            i = !0,
                            r = t
                        } finally {
                            try {
                                e || null == s.return || s.return()
                            } finally {
                                if (i)
                                    throw r
                            }
                        }
                    }
                }
            }
        }
    },
    230: function(t, e, i) {
        "use strict";
        i.r(e),
        e.default = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\n\nvoid main(void){\n  gl_Position = vec4(position, 1.0);\n}\n"
    },
    231: function(t, e, i) {
        "use strict";
        e.a = {}
    },
    295: function(t, e, i) {
        "use strict";
        i.r(e),
        e.default = "precision highp float;\n#define GLSLIFY 1\n\n// attribute\nattribute vec3 normal;\nattribute vec3 position;\nattribute vec2 uv;\n\nattribute vec4 randomValues;\nattribute float instanceIndex;\n\nattribute vec3 offset0_1;\nattribute vec3 offset0_2;\nattribute vec3 offset0_3;\nattribute vec3 offset0_3_g;\nattribute vec3 offset0_5;\nattribute vec3 offset0_5_g;\n\nattribute vec3 offset3;\n\n// uniform\nuniform mat4 modelMatrix;\nuniform mat4 vpMatrix;\nuniform vec3 cameraPos;\nuniform vec2 resolution;\n\nuniform mat4 lightVPMatrix;\nuniform vec3 lightPos;\n\nuniform mat4 tMatrix;\n\nuniform float size;\nuniform float time;\n\nuniform float topAnimationValue1;\nuniform float topAnimationValue2;\nuniform float topAnimationValue3;\nuniform float topAnimationValue4;\nuniform float topAnimationValue5;\nuniform float topAnimationValue6;\n\nuniform float worksDetailFactor;\nuniform vec3 worksListOffset;\nuniform vec3 worksDetailOffset;\nuniform float worksImageAlpha;\n\nuniform vec3 worksImageTextureData1;\nuniform vec3 worksImageTextureData2;\nuniform vec3 worksImageTextureData3;\nuniform vec3 worksImageTextureData4;\n\nuniform float scrollTop;\nuniform float mobileWindowOffsetY;\nuniform float titleScale;\n\nuniform float scaleDefault;\nuniform float scaleTransition;\nuniform float scaleWorksList;\nuniform float scaleWorksDetail;\nuniform float scaleAbout;\n\nuniform float interactionAnimValue;\nuniform float worksAnimValue;\nuniform float worksAnimValueT;\nuniform float aboutAnimValue;\n\n// varying\nvarying vec2 vUv;\nvarying vec2 vPatternUV;\nvarying vec2 vWorksImageUV;\nvarying vec3 vNormal;\nvarying vec4 vPos;  // model\nvarying vec4 vPosition;  // mvp\nvarying vec4 vDepth;\nvarying vec4 vTexCoord;\nvarying float vWorksFactor;\n\nconst float PI_0 = 3.1415926535897932384626433832795;\n\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\nvec3 rotateVec3(vec3 p, float angle, vec3 axis){\n  vec3 a = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float r = 1.0 - c;\n  mat3 m = mat3(\n    a.x * a.x * r + c,\n    a.y * a.x * r + a.z * s,\n    a.z * a.x * r - a.y * s,\n    a.x * a.y * r - a.z * s,\n    a.y * a.y * r + c,\n    a.z * a.y * r + a.x * s,\n    a.x * a.z * r + a.y * s,\n    a.y * a.z * r - a.x * s,\n    a.z * a.z * r + c\n  );\n  return m * p;\n}\n\nmat3 getRotateMatrix3(float angle, vec3 axis){\n  vec3 a = normalize(axis);\n  float s = sin(angle);\n  float c = cos(angle);\n  float r = 1.0 - c;\n  mat3 m = mat3(\n    a.x * a.x * r + c,\n    a.y * a.x * r + a.z * s,\n    a.z * a.x * r - a.y * s,\n    a.x * a.y * r - a.z * s,\n    a.y * a.y * r + c,\n    a.z * a.y * r + a.x * s,\n    a.x * a.z * r + a.y * s,\n    a.y * a.z * r - a.x * s,\n    a.z * a.z * r + c\n  );\n  return m;\n}\n\nfloat exponentialInOut(float t) {\n  return t == 0.0 || t == 1.0\n    ? t\n    : t < 0.5\n      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\n      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\n}\n\n#ifndef PI\n#define PI 3.141592653589793\n#endif\n\nfloat backOut(float t) {\n  float f = t < 0.5\n    ? 2.0 * t\n    : 1.0 - (2.0 * t - 1.0);\n\n  float g = pow(f, 3.0) - f * sin(f * PI);\n\n  return t < 0.5\n    ? 0.5 * g\n    : 0.5 * (1.0 - g) + 0.5;\n}\n\nfloat exponentialOut(float t) {\n  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);\n}\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nfloat mod289_0(float x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute_0(vec4 x) {\n     return mod289_0(((x*34.0)+1.0)*x);\n}\n\nfloat permute_0(float x) {\n     return mod289_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_0(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt_0(float r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip)\n  {\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n  return p;\n  }\n\n// (sqrt(5) - 1)/4 = F4, used once below\n#define F4 0.309016994374947451\n\nfloat snoise_0(vec4 v)\n  {\n  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                        0.276393202250021,  // 2 * G4\n                        0.414589803375032,  // 3 * G4\n                       -0.447213595499958); // -1 + 4 * G4\n\n// First corner\n  vec4 i  = floor(v + dot(v, vec4(F4)) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n  //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n  //  x1 = x0 - i1  + 1.0 * C.xxxx\n  //  x2 = x0 - i2  + 2.0 * C.xxxx\n  //  x3 = x0 - i3  + 3.0 * C.xxxx\n  //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n  vec4 x1 = x0 - i1 + C.xxxx;\n  vec4 x2 = x0 - i2 + C.yyyy;\n  vec4 x3 = x0 - i3 + C.zzzz;\n  vec4 x4 = x0 + C.wwww;\n\n// Permutations\n  i = mod289_0(i);\n  float j0 = permute_0( permute_0( permute_0( permute_0(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute_0( permute_0( permute_0( permute_0 (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n  vec4 p0_0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n  vec4 norm = taylorInvSqrt_0(vec4(dot(p0_0,p0_0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt_0(dot(p4,p4));\n\n// Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0_0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n  }\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1(vec4 x) {\n     return mod289_1(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_0 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_0;\n  vec3 i1 = min( g_0.xyz, l.zxy );\n  vec3 i2 = max( g_0.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1(i);\n  vec4 p = permute_1( permute_1( permute_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_0 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_0.xy,h.z);\n  vec3 p3 = vec3(a1_0.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1(vec4(dot(p0_1,p0_1), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nconst vec3 AXIS_X = vec3(1.0, 0.0, 0.0);\nconst vec3 AXIS_Y = vec3(0.0, 1.0, 0.0);\nconst vec3 AXIS_Z = vec3(0.0, 0.0, 1.0);\n\nconst float DOUBLE_PI = 2.0 * PI_0;\n\nconst float TEXTURE_UV_UNIT = 0.25;\nconst float ASPECT_RATIO = 120.0 / 63.0;\nconst float THUMB_NUM_COLS = 16.0;\nconst float THUMB_NUM_COLS_HALF = THUMB_NUM_COLS * 0.5;\nconst float THUMB_NUM_COLS_SQUARE = THUMB_NUM_COLS * THUMB_NUM_COLS;\nconst float THUMB_UV_UNIT = 1.0 / THUMB_NUM_COLS;\n\nconst float POS0_2_THRESOLD = 343.0;\n\nfloat getAnimationValue(float animationValue, float randomValue, float moveCoef) {\n  float delay = randomValue * moveCoef;\n  return backOut(map(animationValue, delay, delay + (1.0 - moveCoef), 0.0, 1.0, true));\n}\nfloat getAnimationValue2(float animationValue, float randomValue, float moveCoef) {\n  float delay = randomValue * moveCoef;\n  return exponentialInOut(map(animationValue, delay, delay + (1.0 - moveCoef), 0.0, 1.0, true));\n}\n\nvec2 getPolygonPos(float t, float n) {\n  float an = 2.0 * PI_0 / n;\n  float t_an = t / an;\n  float p = cos(an * 0.5) / cos(an * (t_an - floor(t_an)) - an * 0.5);\n  vec3 pos = vec3(\n    cos(t) * p,\n    sin(t) * p,\n    0.0\n  );\n  return rotateVec3(pos, PI_0 * 0.25, AXIS_Z).xy;\n}\n\nvec3 get0_4Pos(vec3 inputPos) {\n  float t = mod(abs(time * (0.2 + abs(randomValues.y)) * 0.0001 + randomValues.w * 1.0), 1.0);\n  float t2 = floor(t / 0.25);\n  float t3 = mod(t, 0.25) * 4.0;\n  t = 0.25 * t2 + 0.25 * exponentialInOut(t3);\n  t *= PI_0 * 2.0 * sign(randomValues.z);\n  float r;\n  vec2 polygonPos = getPolygonPos(t, 4.0);\n\n  // x軸回転\n  r = length(inputPos.yz);\n  vec3 posAxisX = vec3(\n    inputPos.x,\n    polygonPos.x * r,\n    polygonPos.y * r\n  );\n\n  // y軸回転\n  r = length(inputPos.zx);\n  vec3 posAxisY = vec3(\n    polygonPos.y * r,\n    inputPos.y,\n    polygonPos.x * r\n  );\n\n  // z軸回転\n  r = length(inputPos.xy);\n  vec3 posAxisZ = vec3(\n    polygonPos.x * r,\n    polygonPos.y * r,\n    inputPos.z\n  );\n\n  float axisFactor = floor(mod(abs(randomValues.x) * 10.0, 3.0));\n  vec3 pos = posAxisX;\n  pos = mix(pos, posAxisY, step(abs(axisFactor - 1.0), 0.0));\n  pos = mix(pos, posAxisZ, step(abs(axisFactor - 2.0), 0.0));\n  return pos;\n}\n\nvoid main(void){\n  vec4 r = randomValues * 2.0 - 1.0;\n  vec3 pos, n, sphereN;\n  float theta, t;\n  mat3 transformMatrix;\n  mat3 localTransformMatrixP = mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0);\n\n  float colIndex, rowIndex, depthIndex;\n  float offsetX, offsetY, offsetZ;\n\n  pos = position;\n  n = normal;\n\n  //\n  // animations\n  //\n\n  // top\n\n  // top 1\n  float a0_1 = getAnimationValue2(topAnimationValue1, randomValues.z, 0.4);\n  vec3 pos0_1 = pos + offset0_1 * (1.0 + interactionAnimValue);\n  vec3 n0_1 = n;\n\n  // top 2\n  float a0_2 = getAnimationValue2(topAnimationValue2, randomValues.z, 0.4);\n  vec3 sn = normalize(pos);\n  vec3 n0_2 = mix(n, sn, interactionAnimValue);\n  vec3 pos0_2 = mix(pos, sn * size * 0.5, interactionAnimValue) + offset0_2 * (1.0 + interactionAnimValue);\n  t = mod(time * 0.004 + (offset0_2.x + offset0_2.y + offset0_2.z) * 0.6 / size, DOUBLE_PI);\n  pos0_2 += size * 0.5 * sin(t) * normalize(pos0_2);\n\n  pos0_2 *= 1.4;\n  pos0_2 = mix(pos0_2, vec3(0.0), step(POS0_2_THRESOLD, instanceIndex));\n\n  // top 3\n  float i = floor(instanceIndex / 44.0);\n  float a0_3 = getAnimationValue2(topAnimationValue3, randomValues.z, 0.4);\n  vec3 n0_3 = n;\n  vec3 pos0_3 = pos + (offset0_3 - offset0_3_g) * (1.0 + interactionAnimValue * 0.5);\n\n  pos0_3 += offset0_3_g;\n  pos0_3 *= 0.8;\n\n  // top 4\n  float a0_4 = getAnimationValue2(topAnimationValue4, randomValues.z, 0.4);\n  vec3 pos0_4 = pos * (0.2 + randomValues.w * 1.8);\n  vec3 n0_4 = n;\n  pos0_4.xz *=  (1.0 + interactionAnimValue * 0.8);\n  pos0_4.y *=  (1.0 - interactionAnimValue * 0.8);\n  pos0_4 += get0_4Pos(randomValues.xyz * 2.0 - 1.0) * size * 20.0;\n\n  // top 5\n  float a0_5 = getAnimationValue2(topAnimationValue5, randomValues.z, 0.4);\n  vec3 pos0_5 = pos + (offset0_5 - offset0_5_g)  * (1.0 + interactionAnimValue * 0.5);\n  vec3 n0_5 = n;\n  pos0_5 += offset0_5_g;\n\n  // top 6\n  float radius = size * 8.0 * (1.0 + interactionAnimValue * 0.8);\n  float a0_6 = getAnimationValue2(topAnimationValue6, randomValues.z, 0.4);\n  vec3 n0_6 = mix(normalize(pos), n, interactionAnimValue);\n  vec3 pos0_6 = vec3(0.0);\n\n  t = mod(time * 0.00002 + instanceIndex / 352.0 * DOUBLE_PI, DOUBLE_PI);\n  float s = sin(t * 0.5);\n\n  float t2 = t * 8.0;\n  float t3 = mod(time * 0.001 + instanceIndex / 352.0 * DOUBLE_PI * 30.0, DOUBLE_PI);\n  float t4 = mod(time * 0.0006 + instanceIndex / 352.0 * DOUBLE_PI * 50.0, DOUBLE_PI);\n  float radiusFactor =  (0.8 + 0.2 * sin(t3)) * s;\n  pos0_6.x = radius * radiusFactor * cos(t2);\n  pos0_6.y = radius * cos(t * 0.5) * (0.9 + 0.1 * cos(t4) * radiusFactor);\n  pos0_6.z = radius * radiusFactor * sin(t2);\n\n  pos0_6 += mix(n0_6 * size * 0.7, pos * 1.5, interactionAnimValue) * radiusFactor;\n\n  vec3 pos0 = vec3(0.0);\n  vec3 n0 = n;\n\n  pos0 = mix(pos0, pos0_1, a0_1);\n  pos0 = mix(pos0, pos0_2, a0_2);\n  pos0 = mix(pos0, pos0_3, a0_3);\n  pos0 = mix(pos0, pos0_4, a0_4);\n  pos0 = mix(pos0, pos0_5, a0_5);\n  pos0 = mix(pos0, pos0_6, a0_6);\n  n0 = normalize(mix(n0, n0_1, a0_1));\n  n0 = normalize(mix(n0, n0_2, a0_2));\n  n0 = normalize(mix(n0, n0_3, a0_3));\n  n0 = normalize(mix(n0, n0_4, a0_4));\n  n0 = normalize(mix(n0, n0_5, a0_5));\n  n0 = normalize(mix(n0, n0_6, a0_6));\n\n  // top animation rotation\n  t = mod(time * 0.0001, DOUBLE_PI);\n\n  transformMatrix = getRotateMatrix3(t, AXIS_X);\n  pos0 = transformMatrix * pos0;\n  n0 = transformMatrix * n0;\n\n  transformMatrix = getRotateMatrix3(t, AXIS_Z);\n  pos0 = transformMatrix * pos0;\n  n0 = transformMatrix * n0;\n\n  pos0 *= scaleDefault;  // scale\n\n  // transition\n  t = time * 0.004;\n  vec3 pos1 = (pos + offset0_1) * 0.8;  // cube scale\n  vec3 n1 = n;\n  float l = length(pos + offset0_1) / size * 0.06;\n  float a1 = getAnimationValue2(worksAnimValueT, (randomValues.z + l * 9.0) * 0.1, 0.6);\n  // float a1 = worksAnimValueT;\n  float l2 = l * 10.0 * a1;\n\n  theta = mod(t + r.y * 10.0 + l2, DOUBLE_PI);\n  pos1.x += size * (4.0 + r.x * 8.0 * sin(theta));\n\n  theta = mod(t + r.z * 10.0 + l2, DOUBLE_PI);\n  transformMatrix = getRotateMatrix3(theta, AXIS_Y);\n  pos1 = transformMatrix * pos1;\n  n1 = transformMatrix * n1;\n\n  theta = mod(t + r.x * 10.0 + l2, DOUBLE_PI);\n  transformMatrix = getRotateMatrix3(theta, AXIS_Z);\n  pos1 = transformMatrix * pos1;\n  n1 = transformMatrix * n1;\n\n  theta = mod(t + r.y * 10.0 + l2, DOUBLE_PI);\n  transformMatrix = getRotateMatrix3(theta, AXIS_X);\n  pos1 = transformMatrix * pos1;\n  n1 = transformMatrix * n1;\n\n  t = mod(time * 0.0002, DOUBLE_PI);\n\n  transformMatrix = getRotateMatrix3(t, AXIS_X);\n  pos1 = transformMatrix * pos1;\n  n1 = transformMatrix * n1;\n\n  transformMatrix = getRotateMatrix3(t, AXIS_Y);\n  pos1 = transformMatrix * pos1;\n  n1 = transformMatrix * n1;\n\n  pos1 *= scaleWorksList * 0.4;\n\n  // works\n  t = mod(time * 0.004, DOUBLE_PI);\n  vec3 n2 = n;\n  float a2 = getAnimationValue(worksAnimValue, (randomValues.x + l * 9.0) * 0.1, 0.6);\n\n  // 正方形状に配置 (16 x 16)\n  vec3 pos2_1 = pos;\n  offsetX = -size * (THUMB_NUM_COLS_HALF - 0.5);\n  offsetY = offsetX;\n  colIndex = mod(instanceIndex, THUMB_NUM_COLS);\n  rowIndex = floor(instanceIndex / THUMB_NUM_COLS);\n  pos2_1.x += offsetX + colIndex * size;\n  pos2_1.y += offsetY + rowIndex * size;\n  pos2_1.y /= ASPECT_RATIO;  // 横長に変形\n  pos2_1.z -= size * 0.5;\n  s = step(THUMB_NUM_COLS_SQUARE, instanceIndex);\n  pos2_1 = mix(pos2_1, vec3(0.0), s);  // stepは THUMB_NUM_COLS_SQUARE < instanceIndexのとき1\n\n  // 正面 背面\n  vec2 worksImageUV1_1 = vec2(\n    (mix(1.0 - uv.x, uv.x, step(0.5, n.z)) + colIndex) * THUMB_UV_UNIT,\n    (1.0 - (1.0 - uv.y + rowIndex) * THUMB_UV_UNIT) * 0.5\n  );\n  worksImageUV1_1 = mix(vec2(0.0, 0.0), worksImageUV1_1, step(0.5, abs(n.z)));\n\n  // 左右\n  vec2 worksImageUV1_2 = vec2(\n    colIndex + step(0.5, n.x) * THUMB_UV_UNIT,\n    (1.0 - (1.0 - uv.y + rowIndex) * THUMB_UV_UNIT) * 0.5\n  );\n  worksImageUV1_2 = mix(vec2(0.0, 0.0), worksImageUV1_2, step(0.5, abs(n.x)));\n\n  // 上下\n  vec2 worksImageUV1_3 = vec2(\n    (uv.x + colIndex) * THUMB_UV_UNIT,\n    (1.0 - (rowIndex + step(0.5, n.y)) * THUMB_UV_UNIT) * 0.5\n  );\n  worksImageUV1_3 = mix(vec2(0.0, 0.0), worksImageUV1_3, step(0.5, abs(n.y)));\n\n  vec2 worksImageUV1 = mix(worksImageUV1_1 + worksImageUV1_2 + worksImageUV1_3, vec2(0.0), s);\n\n  float a = length(pos2_1.xy + size * THUMB_NUM_COLS_HALF) / size * 0.04;\n  float d = getAnimationValue(worksDetailFactor, (randomValues.z + a * 9.0) * 0.1, 0.6);\n\n  // title\n  float imgWidth = size * THUMB_NUM_COLS;\n  float titleFactorX = max(0.0, (1.0 - d));\n  float titleFactorY = 1.0 - step(titleFactorX, 0.0);\n  float titleFactorXScale = max(0.0, getAnimationValue(worksImageAlpha, 0.1, 0.1));\n  float titleFactorYScale = 1.0 - step(titleFactorXScale, 0.0);\n\n  vec3 pos2_2 = pos;\n  float txtOffsetTop = 0.0;\n  float txtWidthScale = worksImageTextureData1[1] * THUMB_NUM_COLS * titleScale;\n  float txtHeightScale = worksImageTextureData1[2] * THUMB_NUM_COLS * titleScale;\n  txtOffsetTop -= (imgWidth / ASPECT_RATIO - txtHeightScale * size) * 0.5;\n  pos2_2.x *= txtWidthScale * titleFactorX * titleFactorXScale;\n  pos2_2.y *= txtHeightScale * titleFactorY * titleFactorYScale;\n  pos2_2.x -= (imgWidth - txtWidthScale * size * titleFactorX * titleFactorXScale) * 0.5;\n  pos2_2.y += txtOffsetTop;\n  pos2_2.z *= txtHeightScale;\n  pos2_2.z += size * 0.25;\n  s = step(abs(THUMB_NUM_COLS_SQUARE - instanceIndex), 0.0);\n  pos2_2 = mix(vec3(0.0), pos2_2, s); // stepは abs(THUMB_NUM_COLS_SQUARE - instanceIndex) >= 0 のとき1\n  vec2 worksImageUV2 = vec2(\n    mix(0.0, uv.x * worksImageTextureData1[1], step(abs(n.x), 0.0)),\n    (uv.y * worksImageTextureData1[2] + worksImageTextureData1[0])\n  );\n  worksImageUV2 = mix(vec2(0.0), worksImageUV2, s);\n  txtOffsetTop -= size * txtHeightScale * 0.5;\n\n  vec3 pos2_3 = pos;\n  txtWidthScale = worksImageTextureData2[1] * THUMB_NUM_COLS * titleScale;\n  txtHeightScale = worksImageTextureData2[2] * THUMB_NUM_COLS * titleScale;\n  titleFactorXScale = max(0.0, getAnimationValue(worksImageAlpha, 0.2, 0.1));\n  titleFactorYScale = 1.0 - step(titleFactorXScale, 0.0);\n  txtOffsetTop -= txtHeightScale * size * 0.5;\n  pos2_3.x *= txtWidthScale * titleFactorX * titleFactorXScale;\n  pos2_3.y *= txtHeightScale * titleFactorY * titleFactorYScale;\n  pos2_3.x -= (imgWidth - txtWidthScale * size * titleFactorX * titleFactorXScale) * 0.5;\n  pos2_3.y += txtOffsetTop;\n  pos2_3.z *= txtHeightScale;\n  pos2_3.z += size * 0.25;\n  s = step(abs(THUMB_NUM_COLS_SQUARE + 1.0 - instanceIndex), 0.0);\n  pos2_3 = mix(vec3(0.0), pos2_3, s);\n  vec2 worksImageUV3 = vec2(\n    mix(0.0, uv.x * worksImageTextureData2[1], step(abs(n.x), 0.0)),\n    (uv.y * worksImageTextureData2[2] + worksImageTextureData2[0])\n  );\n  worksImageUV3 = mix(vec2(0.0), worksImageUV3, s);\n  txtOffsetTop -= size * txtHeightScale * 0.5;\n\n  vec3 pos2_4 = pos;\n  txtWidthScale = worksImageTextureData3[1] * THUMB_NUM_COLS * titleScale;\n  txtHeightScale = worksImageTextureData3[2] * THUMB_NUM_COLS * titleScale;\n  titleFactorXScale = max(0.0, getAnimationValue(worksImageAlpha, 0.3, 0.1));\n  titleFactorYScale = 1.0 - step(titleFactorXScale, 0.0);\n  txtOffsetTop -= txtHeightScale * size * 0.5;\n  pos2_4.x *= txtWidthScale * titleFactorX * titleFactorXScale;\n  pos2_4.y *= txtHeightScale * titleFactorY * titleFactorYScale;\n  pos2_4.x -= (imgWidth - txtWidthScale * size * titleFactorX * titleFactorXScale) * 0.5;\n  pos2_4.y += txtOffsetTop;\n  pos2_4.z *= txtHeightScale;\n  pos2_4.z += size * 0.25;\n  s = step(abs(THUMB_NUM_COLS_SQUARE + 2.0 - instanceIndex), 0.0);\n  pos2_4 = mix(vec3(0.0), pos2_4, s);\n  vec2 worksImageUV4 = vec2(\n    mix(0.0, uv.x * worksImageTextureData3[1], step(abs(n.x), 0.0)),\n    (uv.y * worksImageTextureData3[2] + worksImageTextureData3[0])\n  );\n  worksImageUV4 = mix(vec2(0.0), worksImageUV4, s);\n  txtOffsetTop -= size * txtHeightScale * 0.5;\n\n  vec3 pos2_5 = pos;\n  txtWidthScale = worksImageTextureData4[1] * THUMB_NUM_COLS * titleScale;\n  txtHeightScale = worksImageTextureData4[2] * THUMB_NUM_COLS * titleScale;\n  titleFactorXScale = max(0.0, getAnimationValue(worksImageAlpha, 0.4, 0.1));\n  titleFactorYScale = 1.0 - step(titleFactorXScale, 0.0);\n  txtOffsetTop -= txtHeightScale * size * 0.5;\n  pos2_5.x *= txtWidthScale * titleFactorX * titleFactorXScale;\n  pos2_5.y *= txtHeightScale * titleFactorY * titleFactorYScale;\n  pos2_5.x -= (imgWidth - txtWidthScale * size * titleFactorX * titleFactorXScale) * 0.5;\n  pos2_5.y += txtOffsetTop;\n  pos2_5.z *= txtHeightScale;\n  pos2_5.z += size * 0.25;\n  s = step(abs(THUMB_NUM_COLS_SQUARE + 3.0 - instanceIndex), 0.0);\n  pos2_5 = mix(vec3(0.0), pos2_5, s);\n  vec2 worksImageUV5 = vec2(\n    mix(0.0, uv.x * worksImageTextureData4[1], step(abs(n.x), 0.0)),\n    (uv.y * worksImageTextureData4[2] + worksImageTextureData4[0])\n  );\n  worksImageUV5 = mix(vec2(0.0), worksImageUV5, s);\n  txtOffsetTop -= size * txtHeightScale * 0.5;\n\n  vec3 pos2 = pos2_1 + pos2_2 + pos2_3 + pos2_4 + pos2_5;\n  vec2 worksImageUV = worksImageUV1 + worksImageUV2 + worksImageUV3 + worksImageUV4 + worksImageUV5;\n  vec2 vPatternUV2 = vec2(pos2.x, pos2.y) / size * 0.1;\n\n  pos2.z += size * 0.4 * sin(t + (pos2.x + pos2.y) / size);\n\n  float scale = mix(scaleWorksList, scaleWorksDetail, d);\n  pos2 *= scale;\n  pos2 += mix(worksListOffset, worksDetailOffset, d);\n\n  pos2.y += scrollTop * d;\n\n  // about\n  vec3 pos3 = pos;\n  vec3 n3 = n;\n  float a3 = getAnimationValue(aboutAnimValue, (randomValues.x + l * 9.0) * 0.1, 0.6);\n  pos3 += mix(offset3 * (1.0 + interactionAnimValue * 0.8), -pos3, step(336.0, instanceIndex));\n\n  transformMatrix = getRotateMatrix3(PI_0 * 0.5, AXIS_X);\n  pos3 = transformMatrix * pos3;\n  n3 = transformMatrix * n3;\n\n  t = mod(time * 0.0002, DOUBLE_PI);\n\n  transformMatrix = getRotateMatrix3(t, AXIS_X);\n  pos3 = transformMatrix * pos3;\n  n3 = transformMatrix * n3;\n\n  transformMatrix = getRotateMatrix3(t, AXIS_Z);\n  pos3 = transformMatrix * pos3;\n  n3= transformMatrix * n3;\n\n  pos3 *= scaleAbout;\n\n  // mix positions\n  pos = mix(pos0, pos3, a3);\n  pos = mix(pos, pos2, a2);\n  pos = mix(pos, pos1, a1);\n  n = normalize(mix(n0, n3, a3));\n  n = normalize(mix(n, n2, a2));\n  n = normalize(mix(n, n1, a1));\n\n  pos.y += mobileWindowOffsetY;\n\n  // varying\n  vUv = uv;\n  vPatternUV = mix((uv + floor(r.xy * 4.0)) * TEXTURE_UV_UNIT, vPatternUV2, a2);\n  vNormal = n;\n  vPos = modelMatrix * vec4(pos, 1.0);\n  vWorksImageUV = worksImageUV;\n  vWorksFactor = worksAnimValue;\n\n  vDepth = lightVPMatrix * vPos;\n  vTexCoord = tMatrix * vDepth;\n  vPosition = vpMatrix * vPos;\n\n  gl_Position = vPosition;\n}\n"
    },
    316: function(t, e, i) {
        t.exports = i(317)
    },
    317: function(t, e, i) {
        "use strict";
        i.r(e),
        function(t) {
            i(73),
            i(40),
            i(61),
            i(108),
            i(207),
            i(111);
            var e = i(190)
              , r = i.n(e)
              , a = i(68)
              , o = i.n(a)
              , n = i(9)
              , s = i.n(n)
              , l = i(191)
              , c = i.n(l)
              , d = i(18)
              , u = i.n(d)
              , f = i(47)
              , h = i(19)
              , m = i.n(h)
              , p = i(1)
              , b = i.n(p)
              , g = (i(39),
            i(7))
              , v = i(80)
              , w = i.n(v)
              , k = i(192)
              , x = i.n(k)
              , _ = i(55)
              , y = i.n(_)
              , M = i(43)
              , C = i.n(M)
              , T = i(14)
              , z = i.n(T)
              , S = i(20)
              , I = i.n(S)
              , B = i(11)
              , L = i.n(B)
              , A = (i(209),
            i(401),
            i(408),
            i(410),
            i(2))
              , O = i(299)
              , G = i(231)
              , E = i(10)
              , X = i(72)
              , P = i(195);
            A.a.component(P.a.name, P.a),
            A.a.component("NLink", P.a),
            t.fetch || (t.fetch = O.a);
            var R, D, F = [], W = window.__NUXT__ || {};
            L()(A.a.config, {
                silent: !0,
                performance: !1
            });
            var N = A.a.config.errorHandler || console.error;
            function V(t, e, i) {
                var r = function(t) {
                    var r = function(t, e) {
                        if (!t || !t.options || !t.options[e])
                            return {};
                        var i = t.options[e];
                        if ("function" == typeof i) {
                            for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                                a[o - 2] = arguments[o];
                            return i.apply(void 0, a)
                        }
                        return i
                    }(t, "transition", e, i) || {};
                    return "string" == typeof r ? {
                        name: r
                    } : r
                };
                return I()(t).call(t, (function(t) {
                    var e = L()({}, r(t));
                    if (i && i.matched.length && i.matched[0].components.default) {
                        var a, o, n = r(i.matched[0].components.default);
                        z()(a = C()(o = y()(n)).call(o, (function(t) {
                            var e;
                            return n[t] && x()(e = t.toLowerCase()).call(e, "leave")
                        }
                        ))).call(a, (function(t) {
                            e[t] = n[t]
                        }
                        ))
                    }
                    return e
                }
                ))
            }
            function j(t, e, i) {
                this._pathChanged = Boolean(R.nuxt.err) || e.path !== t.path,
                this._queryChanged = w()(t.query) !== w()(e.query),
                this._diffQuery = this._queryChanged ? Object(E.g)(t.query, e.query) : [];
                try {
                    i()
                } catch (n) {
                    var r = n || {}
                      , a = r.statusCode || r.status || r.response && r.response.status || 500
                      , o = r.message || "";
                    if (/^Loading( CSS)? chunk (\d)+ failed\./.test(o))
                        return void window.location.reload(!0);
                    this.error({
                        statusCode: a,
                        message: o
                    }),
                    this.$nuxt.$emit("routeChanged", t, e, r),
                    i()
                }
            }
            function U(t, e) {
                return W.serverRendered && e && Object(E.a)(t, e),
                t._Ctor = t,
                t
            }
            function $(t) {
                var e = Object(E.d)(t.options.base, t.options.mode);
                return Object(E.c)(t.match(e), function() {
                    var t = Object(g.a)(b.a.mark((function t(e, i, r, a, o) {
                        var n;
                        return b.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof e || e.options) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.next = 3,
                                    e();
                                case 3:
                                    e = t.sent;
                                case 4:
                                    return n = U(Object(E.n)(e), W.data ? W.data[o] : null),
                                    r.components[a] = n,
                                    t.abrupt("return", n);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e, i, r, a, o) {
                        return t.apply(this, arguments)
                    }
                }())
            }
            function H(t, e, i) {
                var r = this
                  , a = []
                  , o = !1;
                if (void 0 !== i && (a = [],
                (i = Object(E.n)(i)).options.middleware && (a = m()(a).call(a, i.options.middleware)),
                z()(t).call(t, (function(t) {
                    t.options.middleware && (a = m()(a).call(a, t.options.middleware))
                }
                ))),
                a = I()(a).call(a, (function(t) {
                    return "function" == typeof t ? t : ("function" != typeof G.a[t] && (o = !0,
                    r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t
                    })),
                    G.a[t])
                }
                )),
                !o)
                    return Object(E.k)(a, e)
            }
            function Y(t, e, i) {
                return q.apply(this, arguments)
            }
            function q() {
                return (q = Object(g.a)(b.a.mark((function t(e, i, a) {
                    var n, l, d, f, h, m, p, g, v, w, k, x, _, y, M, C, T, S, B, L = this;
                    return b.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", a());
                            case 2:
                                return e === i ? F = [] : (l = [],
                                F = I()(n = Object(E.e)(i, l)).call(n, (function(t, e) {
                                    return Object(E.b)(i.matched[l[e]].path)(i.params)
                                }
                                ))),
                                d = !1,
                                f = function(t) {
                                    d || (d = !0,
                                    a(t))
                                }
                                ,
                                t.next = 7,
                                Object(E.o)(R, {
                                    route: e,
                                    from: i,
                                    next: u()(f).call(f, this)
                                });
                            case 7:
                                if (this._dateLastError = R.nuxt.dateErr,
                                this._hadError = Boolean(R.nuxt.err),
                                h = [],
                                (m = Object(E.e)(e, h)).length) {
                                    t.next = 26;
                                    break
                                }
                                return t.next = 14,
                                H.call(this, m, R.context);
                            case 14:
                                if (!d) {
                                    t.next = 16;
                                    break
                                }
                                return t.abrupt("return");
                            case 16:
                                return p = (X.a.options || X.a).layout,
                                t.next = 19,
                                this.loadLayout("function" == typeof p ? p.call(X.a, R.context) : p);
                            case 19:
                                return g = t.sent,
                                t.next = 22,
                                H.call(this, m, R.context, g);
                            case 22:
                                if (!d) {
                                    t.next = 24;
                                    break
                                }
                                return t.abrupt("return");
                            case 24:
                                return R.context.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                t.abrupt("return", a());
                            case 26:
                                return z()(m).call(m, (function(t) {
                                    t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData,
                                    t.options.fetch = t._Ctor.options.fetch)
                                }
                                )),
                                this.setTransitions(V(m, e, i)),
                                t.prev = 28,
                                t.next = 31,
                                H.call(this, m, R.context);
                            case 31:
                                if (!d) {
                                    t.next = 33;
                                    break
                                }
                                return t.abrupt("return");
                            case 33:
                                if (!R.context._errored) {
                                    t.next = 35;
                                    break
                                }
                                return t.abrupt("return", a());
                            case 35:
                                return "function" == typeof (v = m[0].options.layout) && (v = v(R.context)),
                                t.next = 39,
                                this.loadLayout(v);
                            case 39:
                                return v = t.sent,
                                t.next = 42,
                                H.call(this, m, R.context, v);
                            case 42:
                                if (!d) {
                                    t.next = 44;
                                    break
                                }
                                return t.abrupt("return");
                            case 44:
                                if (!R.context._errored) {
                                    t.next = 46;
                                    break
                                }
                                return t.abrupt("return", a());
                            case 46:
                                w = !0,
                                t.prev = 47,
                                k = !0,
                                x = !1,
                                _ = void 0,
                                t.prev = 51,
                                y = c()(m);
                            case 53:
                                if (k = (M = y.next()).done) {
                                    t.next = 65;
                                    break
                                }
                                if ("function" == typeof (C = M.value).options.validate) {
                                    t.next = 57;
                                    break
                                }
                                return t.abrupt("continue", 62);
                            case 57:
                                return t.next = 59,
                                C.options.validate(R.context);
                            case 59:
                                if (w = t.sent) {
                                    t.next = 62;
                                    break
                                }
                                return t.abrupt("break", 65);
                            case 62:
                                k = !0,
                                t.next = 53;
                                break;
                            case 65:
                                t.next = 71;
                                break;
                            case 67:
                                t.prev = 67,
                                t.t0 = t.catch(51),
                                x = !0,
                                _ = t.t0;
                            case 71:
                                t.prev = 71,
                                t.prev = 72,
                                k || null == y.return || y.return();
                            case 74:
                                if (t.prev = 74,
                                !x) {
                                    t.next = 77;
                                    break
                                }
                                throw _;
                            case 77:
                                return t.finish(74);
                            case 78:
                                return t.finish(71);
                            case 79:
                                t.next = 85;
                                break;
                            case 81:
                                return t.prev = 81,
                                t.t1 = t.catch(47),
                                this.error({
                                    statusCode: t.t1.statusCode || "500",
                                    message: t.t1.message
                                }),
                                t.abrupt("return", a());
                            case 85:
                                if (w) {
                                    t.next = 88;
                                    break
                                }
                                return this.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                t.abrupt("return", a());
                            case 88:
                                return t.next = 90,
                                s.a.all(I()(m).call(m, (function(t, a) {
                                    if (t._path = Object(E.b)(e.matched[h[a]].path)(e.params),
                                    t._dataRefresh = !1,
                                    L._pathChanged && L._queryChanged || t._path !== F[a])
                                        t._dataRefresh = !0;
                                    else if (!L._pathChanged && L._queryChanged) {
                                        var n = t.options.watchQuery;
                                        !0 === n ? t._dataRefresh = !0 : o()(n) ? t._dataRefresh = r()(n).call(n, (function(t) {
                                            return L._diffQuery[t]
                                        }
                                        )) : "function" == typeof n && (T || (T = Object(E.f)(e)),
                                        t._dataRefresh = n.apply(T[a], [e.query, i.query]))
                                    }
                                    if (L._hadError || !L._isMounted || t._dataRefresh) {
                                        var l = []
                                          , c = t.options.asyncData && "function" == typeof t.options.asyncData
                                          , d = Boolean(t.options.fetch);
                                        if (c) {
                                            var u = Object(E.m)(t.options.asyncData, R.context).then((function(e) {
                                                Object(E.a)(t, e)
                                            }
                                            ));
                                            l.push(u)
                                        }
                                        if (L.$loading.manual = !1 === t.options.loading,
                                        d) {
                                            var f = t.options.fetch(R.context);
                                            f && (f instanceof s.a || "function" == typeof f.then) || (f = s.a.resolve(f)),
                                            f.then((function(t) {}
                                            )),
                                            l.push(f)
                                        }
                                        return s.a.all(l)
                                    }
                                }
                                )));
                            case 90:
                                d || a(),
                                t.next = 107;
                                break;
                            case 93:
                                if (t.prev = 93,
                                t.t2 = t.catch(28),
                                "ERR_REDIRECT" !== (S = t.t2 || {}).message) {
                                    t.next = 98;
                                    break
                                }
                                return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, i, S));
                            case 98:
                                return F = [],
                                Object(E.i)(S),
                                "function" == typeof (B = (X.a.options || X.a).layout) && (B = B(R.context)),
                                t.next = 104,
                                this.loadLayout(B);
                            case 104:
                                this.error(S),
                                this.$nuxt.$emit("routeChanged", e, i, S),
                                a();
                            case 107:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[28, 93], [47, 81], [51, 67, 71, 79], [72, , 74, 78]])
                }
                )))).apply(this, arguments)
            }
            function Q(t, e) {
                Object(E.c)(t, (function(t, e, i, r) {
                    return "object" !== Object(f.a)(t) || t.options || ((t = A.a.extend(t))._Ctor = t,
                    i.components[r] = t),
                    t
                }
                ))
            }
            function Z(t) {
                this._hadError && this._dateLastError === this.$options.nuxt.dateErr && this.error();
                var e = this.$options.nuxt.err ? (X.a.options || X.a).layout : t.matched[0].components.default.options.layout;
                "function" == typeof e && (e = e(R.context)),
                this.setLayout(e)
            }
            function J(t, e) {
                var i = this;
                if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
                    var r = Object(E.f)(t)
                      , a = Object(E.e)(t);
                    A.a.nextTick((function() {
                        z()(r).call(r, (function(t, e) {
                            if (t && !t._isDestroyed && t.constructor._dataRefresh && a[e] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                var i = t.constructor.options.data.call(t);
                                for (var r in i)
                                    A.a.set(t.$data, r, i[r]);
                                window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                }
                                ))
                            }
                        }
                        )),
                        Z.call(i, t)
                    }
                    ))
                }
            }
            function K(t) {
                var e;
                z()(e = window.onNuxtReadyCbs).call(e, (function(e) {
                    "function" == typeof e && e(t)
                }
                )),
                "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t),
                D.afterEach((function(e, i) {
                    A.a.nextTick((function() {
                        return t.$nuxt.$emit("routeChanged", e, i)
                    }
                    ))
                }
                ))
            }
            function tt() {
                return (tt = Object(g.a)(b.a.mark((function t(e) {
                    var i, r, a, o, n, l, c;
                    return b.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return R = e.app,
                                D = e.router,
                                e.store,
                                r = new A.a(R),
                                a = W.layout || "default",
                                t.next = 7,
                                r.loadLayout(a);
                            case 7:
                                return r.setLayout(a),
                                o = function() {
                                    r.$mount("#__nuxt"),
                                    D.afterEach(Q),
                                    D.afterEach(u()(J).call(J, r)),
                                    A.a.nextTick((function() {
                                        K(r)
                                    }
                                    ))
                                }
                                ,
                                t.next = 11,
                                s.a.all($(D));
                            case 11:
                                if (n = t.sent,
                                r.setTransitions = u()(i = r.$options.nuxt.setTransitions).call(i, r),
                                n.length && (r.setTransitions(V(n, D.currentRoute)),
                                F = I()(l = D.currentRoute.matched).call(l, (function(t) {
                                    return Object(E.b)(t.path)(D.currentRoute.params)
                                }
                                ))),
                                r.$loading = {},
                                W.error && r.error(W.error),
                                D.beforeEach(u()(j).call(j, r)),
                                D.beforeEach(u()(Y).call(Y, r)),
                                !W.serverRendered) {
                                    t.next = 21;
                                    break
                                }
                                return o(),
                                t.abrupt("return");
                            case 21:
                                c = function() {
                                    Q(D.currentRoute, D.currentRoute),
                                    Z.call(r, D.currentRoute),
                                    o()
                                }
                                ,
                                Y.call(r, D.currentRoute, D.currentRoute, (function(t) {
                                    if (t) {
                                        var e = D.afterEach((function(t, i) {
                                            e(),
                                            c()
                                        }
                                        ));
                                        D.push(t, void 0, (function(t) {
                                            t && N(t)
                                        }
                                        ))
                                    } else
                                        c()
                                }
                                ));
                            case 23:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))).apply(this, arguments)
            }
            Object(X.b)().then((function(t) {
                return tt.apply(this, arguments)
            }
            )).catch(N)
        }
        .call(this, i(56))
    },
    467: function(t, e, i) {
        "use strict";
        var r = i(170);
        i.n(r).a
    },
    468: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]),
        t.exports = e
    },
    469: function(t, e, i) {
        var r = i(470);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("16ba724e", r, !0, {
            sourceMap: !1
        })
    },
    470: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, "@import url(https://fonts.googleapis.com/css?family=Noto+Sans+JP:700&display=swap&subset=japanese);"]),
        e.push([t.i, ':root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@font-face{font-family:Futura;font-style:normal;font-weight:400;font-display:swap;src:url(/font/Futura/Futura-Medium.woff) format("woff")}@font-face{font-family:YakuHanJP;font-style:normal;font-weight:700;font-display:swap;src:url(/font/YakuHanJP/YakuHanJP-Bold.woff2) format("woff2"),url(/font/YakuHanJP/YakuHanJP-Bold.woff) format("woff"),url(/font/YakuHanJP/YakuHanJP-Bold.eot)}', ""]),
        t.exports = e
    },
    471: function(t, e, i) {
        var r = i(472);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("41a7ecd9", r, !0, {
            sourceMap: !1
        })
    },
    472: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, ':root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}html{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;margin:auto;min-height:100%}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}button{background-color:transparent;border:none;cursor:pointer}button,input[type=password],input[type=text],select,textarea{outline:none;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}button,input[type=checkbox],input[type=password],input[type=text],select,textarea{margin:0;border-radius:0;border:none}input[type=checkbox]{padding:0;outline:none;background-color:transparent;cursor:pointer}body{position:relative;width:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;letter-spacing:.05em;min-height:100%;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear}*{font-family:Futura,YakuHanJP,Noto Sans JP,sans-serif!important}a{text-decoration:none;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear}.page-enter-active,.page-leave-active{-webkit-transition:opacity .2s linear,visibility .2s linear;transition:opacity .2s linear,visibility .2s linear}.page-enter,.page-leave-to{opacity:0;visibility:hidden}.buttonRect{height:40px;position:relative;-webkit-backface-visibility:hidden;backface-visibility:hidden}.buttonRect>.inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-size:14px;border:2px solid #0d0d0d;border-color:var(--color1);-webkit-transition:border-color .2s linear,background-color .2s linear;transition:border-color .2s linear,background-color .2s linear}.buttonRect>.inner,.buttonRect>.inner:before,.buttonRect>.inner>.hover{width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.buttonRect>.inner:before,.buttonRect>.inner>.hover{position:absolute;left:0;top:0;content:"";z-index:0;background-color:#0d0d0d;background-color:var(--color1);-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:center left;transform-origin:center left;-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear;transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.buttonRect svg{fill:#0d0d0d;fill:var(--color1);-webkit-transition:fill .2s linear;transition:fill .2s linear;position:relative;z-index:2}.buttonRect.is-disabled>.inner{opacity:.4}.is-desktop .buttonRect:not(.is-disabled):hover>.inner{-webkit-transition:color .1s linear,border-color .1s linear,background-color .1s linear;transition:color .1s linear,border-color .1s linear,background-color .1s linear}.is-desktop .buttonRect:not(.is-disabled):hover>.inner:before,.is-desktop .buttonRect:not(.is-disabled):hover>.inner>.hover{-webkit-transform:scaleX(1);transform:scaleX(1)}.is-desktop .buttonRect:not(.is-disabled):hover .buttonRect__label{color:#f8f8f8;color:var(--color2);-webkit-transition:color .1s linear;transition:color .1s linear}.is-desktop .buttonRect:not(.is-disabled):hover svg{fill:#f8f8f8!important;fill:var(--color2)!important;-webkit-transition:fill .1s linear;transition:fill .1s linear}@media screen and (max-width:320px){.buttonRect>.inner{font-size:12px}}@media screen and (min-width:761px){.buttonRect{height:60px}.buttonRect>.inner{font-size:16px}}.buttonRect__label{color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear;position:relative;z-index:2;letter-spacing:.1em}.contentsRoot{padding:16px;position:relative;z-index:1}@media screen and (min-width:761px){.contentsRoot{padding:32px}}.worksItem__thumb{margin-bottom:16px;position:relative;z-index:1;border:2px solid #0d0d0d;border-color:var(--color1);background-color:#0d0d0d;background-color:var(--color1);-webkit-transition:border-color .2s linear,background-color .2s linear;transition:border-color .2s linear,background-color .2s linear}.worksItem__titles{position:relative;z-index:3}.worksItem__date>span,.worksItem__title2>span,.worksItem__titleInner>span,.worksItem__titleJp>span{padding:.2em .14em .1em;display:inline-block;line-height:.9;margin-top:-.05em;background-color:#0d0d0d;background-color:var(--color1);color:#f8f8f8;-webkit-transition:color .2s linear,background-color .2s linear;transition:color .2s linear,background-color .2s linear}.is-darkMode .worksItem__date>span,.is-darkMode .worksItem__title2>span,.is-darkMode .worksItem__titleInner>span,.is-darkMode .worksItem__titleJp>span{color:#0d0d0d}.worksItem__date{font-size:14px;letter-spacing:.1em}.worksItem__date>span{line-height:1.2}@media screen and (min-width:761px){.worksItem__date{font-size:16px}}.worksItem__title{font-size:32px;position:relative}@media screen and (min-width:761px){.worksItem__title{font-size:40px}}.worksItem__titleInner{display:block;letter-spacing:0}.worksItem__title2{font-size:20px;letter-spacing:0}@media screen and (min-width:761px){.worksItem__title2{font-size:24px}}.worksItem__titleJp{font-size:11px;font-weight:700;letter-spacing:.05em;margin-top:-.1em}.worksItem__titleJp span{font-family:YakuHanJP,Noto Sans JP,sans-serif!important;line-height:1.4}@media screen and (min-width:761px){.worksItem__titleJp{font-size:14px}}.worksArchiveTitle{font-size:24px;margin-bottom:24px;color:#0d0d0d;color:var(--color1);-webkit-transition:color .1s linear;transition:color .1s linear}@media screen and (min-width:761px){.worksArchiveTitle{font-size:28px;margin-bottom:32px}}.buttonSquare{z-index:10;position:absolute;width:48px;height:48px;display:block;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;border:2px solid #0d0d0d;border-color:var(--color1);-webkit-transition:border-color .2s linear,background-color .2s linear;transition:border-color .2s linear,background-color .2s linear}.buttonSquare svg{position:relative;z-index:2}.buttonSquare:after{position:absolute;left:0;top:0;z-index:0;width:100%;height:100%;background-color:#0d0d0d;background-color:var(--color1);-webkit-transform:scaleX(0);transform:scaleX(0);content:"";-webkit-transform-origin:center left;transform-origin:center left;-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear;transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1)}@media screen and (min-width:761px){.buttonSquare{width:56px;height:56px}}.is-desktop .buttonSquare:hover:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.is-desktop .buttonSquare:hover .buttonSquare__label{-webkit-transition:color .1s linear;transition:color .1s linear;color:#f8f8f8;color:var(--color2)}.buttonSquare__label{position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;bottom:4px;font-size:11px;text-align:center;letter-spacing:.1em;text-indent:.1em;line-height:1;text-transform:lowercase;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear;z-index:2}@media screen and (min-width:761px){.buttonSquare__label{font-size:11px;bottom:6px}}[v-cloak]{display:none!important}.dg.ac{z-index:1000!important}', ""]),
        t.exports = e
    },
    473: function(t, e, i) {
        var r = i(474);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("580296fa", r, !0, {
            sourceMap: !1
        })
    },
    474: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, ':root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}', ""]),
        t.exports = e
    },
    475: function(t, e, i) {
        var r = i(476);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        i(25).default)("e40a9e8e", r, !0, {
            sourceMap: !1
        })
    },
    476: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, ":root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.slideContainer{margin:0 auto;position:relative;overflow:hidden!important;list-style:none;padding:0;z-index:1}.slideContainer--no-flexbox .slideItem{float:left}.slideContainer--vertical>.slideWrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.slideWrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.slideContainer--android .slideItem,.slideWrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.slideContainer--multirow>.slideWrapper{-ms-flex-wrap:wrap;flex-wrap:wrap}.slideContainer--free-mode>.slideWrapper{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1);margin:0 auto}.slideItem{-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.slideItem--scroll{height:auto!important;overflow:visible!important;-webkit-box-sizing:border-box;box-sizing:border-box}.slideItem-invisible-blank{visibility:hidden}.slideContainer--autoheight,.slideContainer--autoheight .slideItem{height:auto}.slideContainer--autoheight .slideWrapper{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.slideContainer--3d{-webkit-perspective:1200px;perspective:1200px}.slideContainer--3d .slideItem,.slideContainer--3d .slideItem-shadow-bottom,.slideContainer--3d .slideItem-shadow-left,.slideContainer--3d .slideItem-shadow-right,.slideContainer--3d .slideItem-shadow-top,.slideContainer--3d .slideWrapper,.slideContainer--3d .swiper-cube-shadow{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.slideContainer--3d .slideItem-shadow-bottom,.slideContainer--3d .slideItem-shadow-left,.slideContainer--3d .slideItem-shadow-right,.slideContainer--3d .slideItem-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.slideContainer--3d .slideItem-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.slideContainer--3d .slideItem-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.slideContainer--3d .slideItem-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.slideContainer--3d .slideItem-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.slideContainer--wp8-horizontal,.slideContainer--wp8-horizontal>.slideWrapper{-ms-touch-action:pan-y;touch-action:pan-y}.slideContainer--wp8-vertical,.slideContainer--wp8-vertical>.slideWrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.slideContainer--rtl .swiper-button-next,.swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:10px;right:auto}.slideContainer--rtl .swiper-button-prev,.swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E\");right:10px;left:auto}.slideContainer--rtl .swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")}.slideContainer--rtl .swiper-button-prev.swiper-button-white,.swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")}.slideContainer--rtl .swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E\")}.slideContainer--rtl .swiper-button-prev.swiper-button-black,.swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E\")}.swiper-button-lock{display:none}.slidePagination{position:relative;text-align:center;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.slidePagination.slidePagination--hidden{opacity:0}.slideContainer--horizontal>.slidePagination--bullets,.slidePagination--custom,.slidePagination--fraction{left:0;width:100%}.slidePagination--bullets-dynamic{overflow:hidden;font-size:0}.slidePagination--bullets-dynamic .slidePagination__bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.slidePagination--bullets-dynamic .slidePagination__bullet-active,.slidePagination--bullets-dynamic .slidePagination__bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.slidePagination--bullets-dynamic .slidePagination__bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.slidePagination--bullets-dynamic .slidePagination__bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.slidePagination--bullets-dynamic .slidePagination__bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.slidePagination--bullets-dynamic .slidePagination__bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.slidePagination__bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2;vertical-align:top}button.slidePagination__bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.slidePagination--clickable .slidePagination__bullet{cursor:pointer}.slidePagination__bullet-active{opacity:1;background:#007aff}.slideContainer--vertical>.slidePagination--bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.slideContainer--vertical>.slidePagination--bullets .slidePagination__bullet{margin:6px 0;display:block}.slideContainer--vertical>.slidePagination--bullets.slidePagination--bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.slideContainer--vertical>.slidePagination--bullets.slidePagination--bullets-dynamic .slidePagination__bullet{display:inline-block;-webkit-transition:top .2s,-webkit-transform .2s;transition:top .2s,-webkit-transform .2s;transition:transform .2s,top .2s;transition:transform .2s,top .2s,-webkit-transform .2s}.slideContainer--horizontal>.slidePagination--bullets .slidePagination__bullet{margin:0 4px}.slideContainer--horizontal>.slidePagination--bullets.slidePagination--bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.slideContainer--horizontal>.slidePagination--bullets.slidePagination--bullets-dynamic .slidePagination__bullet{-webkit-transition:left .2s,-webkit-transform .2s;transition:left .2s,-webkit-transform .2s;transition:transform .2s,left .2s;transition:transform .2s,left .2s,-webkit-transform .2s}.slideContainer--horizontal.slideContainer--rtl>.slidePagination--bullets-dynamic .slidePagination__bullet{-webkit-transition:right .2s,-webkit-transform .2s;transition:right .2s,-webkit-transform .2s;transition:transform .2s,right .2s;transition:transform .2s,right .2s,-webkit-transform .2s}.slidePagination--progressbar{background:rgba(0,0,0,.25);position:absolute}.slidePagination--progressbar .slidePagination--progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.slideContainer--rtl .slidePagination--progressbar .slidePagination--progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.slideContainer--horizontal>.slidePagination--progressbar,.slideContainer--vertical>.slidePagination--progressbar.slidePagination--progressbar-opposite{width:100%;height:4px;left:0;top:0}.slideContainer--horizontal>.slidePagination--progressbar.slidePagination--progressbar-opposite,.slideContainer--vertical>.slidePagination--progressbar{width:4px;height:100%;left:0;top:0}.slidePagination--white .slidePagination__bullet-active{background:#fff}.slidePagination--progressbar.slidePagination--white{background:hsla(0,0%,100%,.25)}.slidePagination--progressbar.slidePagination--white .slidePagination--progressbar-fill{background:#fff}.slidePagination--black .slidePagination__bullet-active{background:#000}.slidePagination--progressbar.slidePagination--black{background:rgba(0,0,0,.25)}.slidePagination--progressbar.slidePagination--black .slidePagination--progressbar-fill{background:#000}.slidePagination--lock{display:none}.slideScrollbar{border-radius:6px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.is-darkMode .slideScrollbar{background:hsla(0,0%,100%,.4)}.slideContainer--horizontal>.slideScrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:3px;width:98%}.slideContainer--vertical>.slideScrollbar{position:absolute;right:3px;top:1%;z-index:50;width:3px;height:98%}.slideScrollbar__drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.3);border-radius:6px;left:0;top:0}.is-darkMode .slideScrollbar__drag{background:hsla(0,0%,100%,.6)}.slideScrollbar-cursor-drag{cursor:move}.slideScrollbar--lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.slideItem-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12) infinite;animation:swiper-preloader-spin 1s steps(12) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.slideContainer .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.slideContainer--fade.slideContainer--free-mode .slideItem{-webkit-transition-timing-function:cubic-bezier(.215,.61,.355,1);transition-timing-function:cubic-bezier(.215,.61,.355,1)}.slideContainer--fade .slideItem{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.slideContainer--fade .slideItem .slideItem{pointer-events:none}.slideContainer--fade .slideItem-active,.slideContainer--fade .slideItem-active .slideItem-active{pointer-events:auto}.slideContainer--cube{overflow:visible}.slideContainer--cube .slideItem{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.slideContainer--cube .slideItem .slideItem{pointer-events:none}.slideContainer--cube.slideContainer--rtl .slideItem{-webkit-transform-origin:100% 0;transform-origin:100% 0}.slideContainer--cube .slideItem-active,.slideContainer--cube .slideItem-active .slideItem-active{pointer-events:auto}.slideContainer--cube .slideItem-active,.slideContainer--cube .slideItem-next,.slideContainer--cube .slideItem-next+.slideItem,.slideContainer--cube .slideItem-prev{pointer-events:auto;visibility:visible}.slideContainer--cube .slideItem-shadow-bottom,.slideContainer--cube .slideItem-shadow-left,.slideContainer--cube .slideItem-shadow-right,.slideContainer--cube .slideItem-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.slideContainer--cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.slideContainer--flip{overflow:visible}.slideContainer--flip .slideItem{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.slideContainer--flip .slideItem .slideItem{pointer-events:none}.slideContainer--flip .slideItem-active,.slideContainer--flip .slideItem-active .slideItem-active{pointer-events:auto}.slideContainer--flip .slideItem-shadow-bottom,.slideContainer--flip .slideItem-shadow-left,.slideContainer--flip .slideItem-shadow-right,.slideContainer--flip .slideItem-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.slideContainer--coverflow .slideWrapper{-ms-perspective:1200px}", ""]),
        t.exports = e
    },
    478: function(t, e, i) {
        "use strict";
        var r = i(171);
        i.n(r).a
    },
    479: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, '[data-v-600129f9]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-600129f9]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-600129f9{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-600129f9{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.logo[data-v-600129f9]{position:fixed;display:inline-block;top:20px;left:16px;height:41.76px;-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);-webkit-transform-origin:top left;transform-origin:top left;z-index:13;-webkit-backface-visibility:hidden;backface-visibility:hidden;padding-left:1px;-webkit-transform:scale(.9);transform:scale(.9)}.is-ie11 .logo *[data-v-600129f9],.is-ie11 .logo[data-v-600129f9] :after,.is-ie11 .logo[data-v-600129f9] :before{-webkit-transition:none!important;transition:none!important}.logo .label[data-v-600129f9]{position:absolute;left:0;top:0;z-index:0;opacity:0;text-transform:lowercase}.logo a[data-v-600129f9]{display:inline-block;height:100%}.is-index .logo[data-v-600129f9]{-webkit-transform:scale(1.14);transform:scale(1.14)}.is-scrolled:not(.is-index) .logo[data-v-600129f9]{-webkit-transform:translateY(-2px) scale(.6);transform:translateY(-2px) scale(.6)}.is-menuBottomLeft.is-menuOpened .logo[data-v-600129f9]{-webkit-transform:translateX(160px) scale(.9);transform:translateX(160px) scale(.9)}.is-menuBottomLeft.is-menuOpened.is-index .logo[data-v-600129f9]{-webkit-transform:translateX(160px) scale(1.14);transform:translateX(160px) scale(1.14)}.is-menuBottomLeft.is-menuOpened:not(.is-index) .logo[data-v-600129f9]{-webkit-transform:translateX(160px) scale(.9);transform:translateX(160px) scale(.9)}.is-menuBottomLeft.is-menuOpened.is-scrolled:not(.is-index) .logo[data-v-600129f9]{-webkit-transform:translateX(160px) scale(.6);transform:translateX(160px) scale(.6)}@media screen and (min-width:761px){.logo[data-v-600129f9]{top:34px;left:32px;-webkit-transform:scale(1.2);transform:scale(1.2)}.is-index .logo[data-v-600129f9]{-webkit-transform:scale(1.4);transform:scale(1.4)}.is-scrolled:not(.is-index) .logo[data-v-600129f9]{-webkit-transform:translateY(-4px) scale(.9);transform:translateY(-4px) scale(.9)}.is-menuBottomLeft.is-menuOpened .logo[data-v-600129f9]{-webkit-transform:translateX(200px) scale(1.2);transform:translateX(200px) scale(1.2)}.is-menuBottomLeft.is-menuOpened.is-index .logo[data-v-600129f9]{-webkit-transform:translateX(200px) scale(1.4);transform:translateX(200px) scale(1.4)}.is-menuBottomLeft.is-menuOpened:not(.is-index) .logo[data-v-600129f9]{-webkit-transform:translateX(200px) scale(1.2);transform:translateX(200px) scale(1.2)}.is-menuBottomLeft.is-menuOpened.is-scrolled:not(.is-index) .logo[data-v-600129f9]{-webkit-transform:translateX(160px) scale(.9);transform:translateX(160px) scale(.9)}}.logo__inner[data-v-600129f9]{-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.chars[data-v-600129f9]{position:relative;white-space:nowrap}.char[data-v-600129f9]{position:relative;display:inline-block;margin-right:8.64px;height:36px;width:36px;-webkit-transform:translateZ(0);transform:translateZ(0)}.char[data-v-600129f9],.char__underline[data-v-600129f9]{-webkit-backface-visibility:hidden;backface-visibility:hidden}.char__underline[data-v-600129f9]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:-5.76px;height:3.6px;width:100%;visibility:hidden;opacity:0;-webkit-transition:visibility 0s linear .4s,opacity .2s cubic-bezier(.19,1,.22,1) .2s;transition:visibility 0s linear .4s,opacity .2s cubic-bezier(.19,1,.22,1) .2s}.char__underline[data-v-600129f9]:after{position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;content:"";bottom:0;width:100%;height:100%;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:left center;transform-origin:left center;-webkit-transform:scaleX(0) translateZ(0);transform:scaleX(0) translateZ(0);background-color:#0d0d0d;background-color:var(--color1);-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1);transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1);transition:transform .4s cubic-bezier(.215,.61,.355,1),background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1)}.char--square[data-v-600129f9]{width:18.8px}.char--square .char__inner svg[data-v-600129f9]{bottom:-5.76px;-webkit-transform:translateY(120%) rotate(2turn);transform:translateY(120%) rotate(2turn)}.char--square .char__underline[data-v-600129f9]{visibility:visible!important;opacity:1!important}.char--square .char__underline[data-v-600129f9]:after{-webkit-transform:scaleX(1) translateX(0)!important;transform:scaleX(1) translateX(0)!important}.char--u[data-v-600129f9]{width:16.04571px}.char--n[data-v-600129f9]{width:16.14857px}.char--d[data-v-600129f9]{width:4.14857px}.char--z[data-v-600129f9]{width:13.14857px}.char--s[data-v-600129f9]{width:13.37143px}.char--h[data-v-600129f9]{width:16.14857px}.char--i[data-v-600129f9]{width:5.55429px}.char--f[data-v-600129f9]{width:10.59429px;margin-left:-1.44px}.char--t[data-v-600129f9]{width:9.56571px;margin-left:-1.08px}.char--a[data-v-600129f9],.char--b[data-v-600129f9]{width:19.02857px}.char--b[data-v-600129f9]{margin-right:7.2px}.char--o[data-v-600129f9]{width:19.95429px}.char--l[data-v-600129f9]{width:4.32px}.char--w[data-v-600129f9]{width:30.03429px;margin-right:6.48px}.char--r[data-v-600129f9]{width:12.24px}.char--k[data-v-600129f9]{width:16.86857px}.char__inner[data-v-600129f9]{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:0;height:43.2px;margin-top:-7.2px;overflow:hidden!important}.char__inner[data-v-600129f9],.char__inner svg[data-v-600129f9]{position:absolute;width:36px;-webkit-backface-visibility:hidden;backface-visibility:hidden}.char__inner svg[data-v-600129f9]{bottom:0;height:36px;display:block;-webkit-transform:translateY(120%);transform:translateY(120%);fill:#0d0d0d;fill:var(--color1);-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17),fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.logo.is-shown .char__inner svg[data-v-600129f9]{-webkit-transform:translateY(0);transform:translateY(0)}.logo.is-shown .char.char--square .char__inner svg[data-v-600129f9]{-webkit-transform:translateY(0) rotate(1turn);transform:translateY(0) rotate(1turn)}.logo.is-shown .char__underline[data-v-600129f9]{-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s;visibility:visible;opacity:1}.logo.is-shown .char__underline[data-v-600129f9]:after{-webkit-transform:scaleX(1) translateZ(0);transform:scaleX(1) translateZ(0)}.logo.is-shown .char:first-of-type .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .08s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .08s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .08s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .08s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .08s}.logo.is-shown .char:first-of-type .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .28s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .28s;transition:transform .4s cubic-bezier(.215,.61,.355,1) .28s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) .28s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .28s}.logo.is-shown .char:nth-of-type(2) .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .16s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .16s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .16s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .16s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .16s}.logo.is-shown .char:nth-of-type(2) .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .36s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .36s;transition:transform .4s cubic-bezier(.215,.61,.355,1) .36s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) .36s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .36s}.logo.is-shown .char:nth-of-type(3) .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .24s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .24s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .24s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .24s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .24s}.logo.is-shown .char:nth-of-type(3) .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .44s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .44s;transition:transform .4s cubic-bezier(.215,.61,.355,1) .44s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) .44s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .44s}.logo.is-shown .char:nth-of-type(4) .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .32s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .32s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .32s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .32s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .32s}.logo.is-shown .char:nth-of-type(4) .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .52s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .52s;transition:transform .4s cubic-bezier(.215,.61,.355,1) .52s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) .52s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .52s}.logo.is-shown .char:nth-of-type(5) .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .4s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .4s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .4s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .4s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .4s}.logo.is-shown .char:nth-of-type(5) .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .6s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .6s;transition:transform .4s cubic-bezier(.215,.61,.355,1) .6s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) .6s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .6s}.logo.is-shown .char:nth-of-type(6) .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .48s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .48s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .48s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .48s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .48s}.logo.is-shown .char:nth-of-type(6) .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .68s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .68s;transition:transform .4s cubic-bezier(.215,.61,.355,1) .68s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) .68s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .68s}.logo.is-shown .char:nth-of-type(7) .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .56s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .56s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .56s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .56s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .56s}.logo.is-shown .char:nth-of-type(7) .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .76s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .76s;transition:transform .4s cubic-bezier(.215,.61,.355,1) .76s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) .76s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .76s}.logo.is-shown .char:nth-of-type(8) .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .64s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .64s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .64s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .64s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .64s}.logo.is-shown .char:nth-of-type(8) .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .84s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .84s;transition:transform .4s cubic-bezier(.215,.61,.355,1) .84s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) .84s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .84s}.logo.is-shown .char:nth-of-type(9) .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .72s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .72s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .72s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .72s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .72s}.logo.is-shown .char:nth-of-type(9) .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .92s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .92s;transition:transform .4s cubic-bezier(.215,.61,.355,1) .92s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) .92s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) .92s}.logo.is-shown .char:nth-of-type(10) .char__inner svg[data-v-600129f9]{-webkit-transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .8s;transition:fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .8s;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .8s,fill .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17) .8s,fill .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17) .8s}.logo.is-shown .char:nth-of-type(10) .char__underline[data-v-600129f9]:after{-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) 1s;transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) 1s;transition:transform .4s cubic-bezier(.215,.61,.355,1) 1s,background-color .2s linear;transition:transform .4s cubic-bezier(.215,.61,.355,1) 1s,background-color .2s linear,-webkit-transform .4s cubic-bezier(.215,.61,.355,1) 1s}.logo.is-noAnim .char.char--square .char__inner svg[data-v-600129f9],.logo.is-noAnim .char__inner svg[data-v-600129f9],.logo.is-noAnim .char__underline[data-v-600129f9],.logo.is-noAnim .char__underline[data-v-600129f9]:after{-webkit-transition-duration:0s!important;transition-duration:0s!important;-webkit-transition-delay:0s!important;transition-delay:0s!important}', ""]),
        t.exports = e
    },
    510: function(t, e, i) {
        "use strict";
        var r = i(172);
        i.n(r).a
    },
    511: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, "[data-v-3e1dc8b2]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-3e1dc8b2]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-3e1dc8b2{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-3e1dc8b2{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.loading[data-v-3e1dc8b2]{position:fixed;left:0;top:0;width:100%;height:100%;z-index:100;background-color:#f8f8f8;background-color:var(--color2)}", ""]),
        t.exports = e
    },
    512: function(t, e, i) {
        "use strict";
        var r = i(173);
        i.n(r).a
    },
    513: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, ":root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@-webkit-keyframes loadingLogoAnim{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes loadingLogoAnim{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}.loading__logo{position:absolute!important;top:50%!important;left:50%!important;-webkit-transform:translate(-50%,-50%) translate(45.4%,-20%)!important;transform:translate(-50%,-50%) translate(45.4%,-20%)!important;-webkit-transition:-webkit-transform 1s cubic-bezier(.19,1,.22,1)!important;transition:-webkit-transform 1s cubic-bezier(.19,1,.22,1)!important;transition:transform 1s cubic-bezier(.19,1,.22,1)!important;transition:transform 1s cubic-bezier(.19,1,.22,1),-webkit-transform 1s cubic-bezier(.19,1,.22,1)!important}.loading__logo .char:first-child svg{-webkit-transition:none!important;transition:none!important}@media screen and (max-width:320px){.loading__logo{-webkit-transform:scale(.9) translate(-50%,-50%) translate(45.4%,-20%)!important;transform:scale(.9) translate(-50%,-50%) translate(45.4%,-20%)!important}}@media screen and (min-width:761px) and (max-width:1024px){.loading__logo{-webkit-transform:scale(1.2) translate(-50%,-50%) translate(45.4%,-20%)!important;transform:scale(1.2) translate(-50%,-50%) translate(45.4%,-20%)!important}}@media screen and (min-width:1025px){.loading__logo{-webkit-transform:scale(1.6) translate(-50%,-50%) translate(45.4%,-20%)!important;transform:scale(1.6) translate(-50%,-50%) translate(45.4%,-20%)!important}}.is-started .loading__logo{-webkit-transform:translate(-50%,-50%) translateY(-20%)!important;transform:translate(-50%,-50%) translateY(-20%)!important}@media screen and (max-width:320px){.is-started .loading__logo{-webkit-transform:scale(.9) translate(-50%,-50%) translateY(-20%)!important;transform:scale(.9) translate(-50%,-50%) translateY(-20%)!important}}@media screen and (min-width:761px) and (max-width:1024px){.is-started .loading__logo{-webkit-transform:scale(1.2) translate(-50%,-50%) translateY(-20%)!important;transform:scale(1.2) translate(-50%,-50%) translateY(-20%)!important}}@media screen and (min-width:1025px){.is-started .loading__logo{-webkit-transform:scale(1.6) translate(-50%,-50%) translateY(-20%)!important;transform:scale(1.6) translate(-50%,-50%) translateY(-20%)!important}}.loading-leave-active{-webkit-transition:opacity .2s linear,visibility .2s linear;transition:opacity .2s linear,visibility .2s linear}.loading-leave-to{opacity:0;visibility:hidden}", ""]),
        t.exports = e
    },
    514: function(t, e, i) {
        "use strict";
        var r = i(174);
        i.n(r).a
    },
    515: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, "[data-v-19f5c22f]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-19f5c22f]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-19f5c22f{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-19f5c22f{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}svg[data-v-19f5c22f]{position:absolute;z-index:-10;width:1px;height:1px;font-size:0}", ""]),
        t.exports = e
    },
    516: function(t, e, i) {
        "use strict";
        var r = i(175);
        i.n(r).a
    },
    517: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, '[data-v-4fb558ee]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-4fb558ee]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-4fb558ee{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-4fb558ee{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.menu[data-v-4fb558ee]{overflow:hidden;z-index:12;position:fixed;bottom:0;width:100%;height:100%}.is-menuBottomRight .menu[data-v-4fb558ee],.is-menuTopRight .menu[data-v-4fb558ee]{right:0}.is-menuBottomLeft .menu[data-v-4fb558ee]{left:0}.is-menuTopRight .menu[data-v-4fb558ee]{bottom:auto;top:0}@media screen and (min-width:761px) and (max-width:1024px){.menu[data-v-4fb558ee]{width:200px}}@media screen and (min-width:1025px){.menu[data-v-4fb558ee]{z-index:30;padding:0!important;bottom:auto;top:0;right:0;left:auto!important;width:auto;height:auto;overflow:visible}}.menu__bg[data-v-4fb558ee]{left:0;top:0;position:absolute;width:100%;height:100%;background-color:hsla(0,0%,100%,.8)}.is-darkMode .menu__bg[data-v-4fb558ee]{background-color:rgba(0,0,0,.8)}@media screen and (min-width:1025px){.menu__bg[data-v-4fb558ee]{display:none}}.menu__inner[data-v-4fb558ee]{width:160px;overflow:hidden;position:absolute;padding-bottom:16px;-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.is-menuBottomLeft .menu__inner[data-v-4fb558ee],.is-menuBottomRight .menu__inner[data-v-4fb558ee]{bottom:108px}@media screen and (max-width:320px){.is-menuBottomLeft .menu__inner[data-v-4fb558ee],.is-menuBottomRight .menu__inner[data-v-4fb558ee]{bottom:64px}}.is-menuBottomRight .menu__inner[data-v-4fb558ee],.is-menuTopRight .menu__inner[data-v-4fb558ee]{right:0;padding-right:16px;text-align:right}.is-menuBottomLeft .menu__inner[data-v-4fb558ee]{left:0;padding-left:16px;-webkit-transform-origin:bottom left;transform-origin:bottom left}.is-menuTopRight .menu__inner[data-v-4fb558ee]{top:80px;padding-top:16px;-webkit-transform-origin:top right;transform-origin:top right}.is-scrolled.is-menuTopRight .menu__inner[data-v-4fb558ee]{-webkit-transform:translateY(-20px);transform:translateY(-20px)}.is-landScape.is-menuTopRight .menu__inner[data-v-4fb558ee]{top:72px}.is-menuBottomLeft.is-landScape .menu__inner[data-v-4fb558ee],.is-menuBottomRight.is-landScape .menu__inner[data-v-4fb558ee]{bottom:56px}.is-buttonBackAvailable.is-menuBottomLeft .menu__inner[data-v-4fb558ee],.is-buttonBackAvailable.is-menuBottomRight .menu__inner[data-v-4fb558ee]{-webkit-transform:translateY(-36px);transform:translateY(-36px)}@media screen and (min-width:761px) and (max-width:1024px){.menu__inner[data-v-4fb558ee]{width:200px}.is-menuBottomLeft .menu__inner[data-v-4fb558ee],.is-menuBottomRight .menu__inner[data-v-4fb558ee]{bottom:96px!important}.is-menuBottomRight .menu__inner[data-v-4fb558ee],.is-menuTopRight .menu__inner[data-v-4fb558ee]{padding-right:32px}.is-menuBottomLeft .menu__inner[data-v-4fb558ee]{padding-left:32px}.is-menuTopRight .menu__inner[data-v-4fb558ee]{top:96px!important;padding-top:32px}}@media screen and (min-width:1025px){.menu__inner[data-v-4fb558ee]{padding:0;overflow:visible;position:relative;width:auto;top:32px}.menu__inner nav ul[data-v-4fb558ee]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding-right:32px}.is-scrolled .menu__inner[data-v-4fb558ee]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes menuNavItemBullet-data-v-4fb558ee{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes menuNavItemBullet-data-v-4fb558ee{0%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}.menuNavItem[data-v-4fb558ee]{display:block;margin-bottom:10px;text-align:right;font-size:20px;letter-spacing:.2em}.menuNavItem>.inner[data-v-4fb558ee]{position:relative;display:inline-block;padding:.5em 1em .4em}.is-desktop .menuNavItem:hover .menuNavItem__label[data-v-4fb558ee]:after,.menuNavItem.is-current .menuNavItem__label[data-v-4fb558ee]:after{-webkit-transform:scaleX(1)!important;transform:scaleX(1)!important}.is-menuBottomRight .menuNavItem>.inner[data-v-4fb558ee],.is-menuTopRight .menuNavItem>.inner[data-v-4fb558ee]{padding-right:.1em;padding-left:1em}.is-menuBottomRight .menuNavItem>.inner[data-v-4fb558ee]:after,.is-menuTopRight .menuNavItem>.inner[data-v-4fb558ee]:after{right:.2em}.is-menuBottomRight .menuNavItem.is-current .inner[data-v-4fb558ee]:after,.is-menuTopRight .menuNavItem.is-current .inner[data-v-4fb558ee]:after{right:.14em}.is-menuBottomLeft .menuNavItem[data-v-4fb558ee]{text-align:left}.is-menuBottomLeft .menuNavItem>.inner[data-v-4fb558ee]{padding-left:.24em;padding-right:1em}.is-landScape .menuNavItem[data-v-4fb558ee]{margin-bottom:8px}.is-landScape .menuNavItem>.inner[data-v-4fb558ee]{padding-top:.4em;padding-bottom:.4em}@media screen and (min-width:761px) and (max-width:1024px){.menuNavItem[data-v-4fb558ee]{margin-bottom:16px;font-size:24px}.menuNavItem>.inner[data-v-4fb558ee]{padding-top:.4em;padding-bottom:.4em}}@media screen and (min-width:1025px){.menuNavItem[data-v-4fb558ee]{margin-bottom:0;margin-left:6px;font-size:22px}.menuNavItem>.inner[data-v-4fb558ee]{padding:.4em .8em;position:relative}.menuNavItem[data-v-4fb558ee]:last-child{margin-left:28px}}.menuNavItem__label[data-v-4fb558ee]{position:relative;display:inline-block;color:#0d0d0d;color:var(--color1);-webkit-transition:letter-spacing .4s cubic-bezier(.19,1,.22,1),color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:letter-spacing .4s cubic-bezier(.19,1,.22,1),color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),letter-spacing .4s cubic-bezier(.19,1,.22,1),color .2s linear;transition:transform .4s cubic-bezier(.19,1,.22,1),letter-spacing .4s cubic-bezier(.19,1,.22,1),color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.menuNavItem__label[data-v-4fb558ee]:after{position:absolute;-webkit-transform-origin:center left;transform-origin:center left;bottom:.14em;left:-.1em;width:100%;height:2px;content:"";-webkit-transform:scaleX(0);transform:scaleX(0);background-color:#0d0d0d;background-color:var(--color1);-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:background-color .2s linear,transform .4s cubic-bezier(.19,1,.22,1);transition:background-color .2s linear,transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.is-menuBottomRight .menuNavItem__label[data-v-4fb558ee],.is-menuTopRight .menuNavItem__label[data-v-4fb558ee]{-webkit-transform-origin:center right;transform-origin:center right}.is-menuBottomRight .menuNavItem__label[data-v-4fb558ee]:after,.is-menuTopRight .menuNavItem__label[data-v-4fb558ee]:after{right:.08em;-webkit-transform-origin:bottom right;transform-origin:bottom right}.is-menuBottomLeft .menuNavItem__label[data-v-4fb558ee]{-webkit-transform-origin:center left;transform-origin:center left}.is-menuBottomLeft .menuNavItem__label[data-v-4fb558ee]:after{left:-.04em;-webkit-transform-origin:bottom left;transform-origin:bottom left}@media screen and (min-width:761px) and (max-width:1024px){.menuNavItem__label[data-v-4fb558ee]:after{height:2px;bottom:.2em}}@media screen and (min-width:1025px){.menuNavItem__label[data-v-4fb558ee]:after{height:2px;bottom:.1em}}@-webkit-keyframes gearAnim-data-v-4fb558ee{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes gearAnim-data-v-4fb558ee{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.menuNavItem--settings[data-v-4fb558ee]{display:inline-block;margin-top:4px}.menuNavItem--settings>.inner[data-v-4fb558ee]:after{display:none}.menuNavItem--settings>.inner[data-v-4fb558ee]{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;padding-left:1.2em!important;padding-right:.24em!important}.menuNavItem--settings svg[data-v-4fb558ee]{position:absolute;top:0;bottom:0;margin-top:auto;margin-bottom:auto;width:12px;height:12px;display:inline-block;vertical-align:middle;left:.3em;fill:#0d0d0d;fill:var(--color1);-webkit-transition:fill .2s linear;transition:fill .2s linear}.menuNavItem--settings .menuNavItem__label[data-v-4fb558ee]{font-size:16px;letter-spacing:.05em;vertical-align:middle}.is-desktop .menuNavItem--settings:hover svg[data-v-4fb558ee]{-webkit-animation:gearAnim-data-v-4fb558ee 2s linear infinite;animation:gearAnim-data-v-4fb558ee 2s linear infinite}@media screen and (min-width:761px) and (max-width:1024px){.menuNavItem--settings[data-v-4fb558ee]{margin-top:6px;margin-bottom:10px}.menuNavItem--settings svg[data-v-4fb558ee]{width:16px;height:16px}.menuNavItem--settings .menuNavItem__label[data-v-4fb558ee]{font-size:18px}}@media screen and (min-width:1025px){.menuNavItem--settings[data-v-4fb558ee]{width:56px;height:56px;display:block;margin-top:0;position:relative;border:2px solid #0d0d0d;border-color:var(--color1);-webkit-transition:border-color .2s linear,background-color .2s linear;transition:border-color .2s linear,background-color .2s linear}.menuNavItem--settings[data-v-4fb558ee]:before{opacity:.9;background-color:#f8f8f8;background-color:var(--color2);-webkit-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear}.menuNavItem--settings[data-v-4fb558ee]:after,.menuNavItem--settings[data-v-4fb558ee]:before{top:0;left:0;width:100%;height:100%;content:"";position:absolute}.menuNavItem--settings[data-v-4fb558ee]:after{z-index:0;background-color:#0d0d0d;background-color:var(--color1);-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transform-origin:center left;transform-origin:center left;-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear;transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.menuNavItem--settings>.inner[data-v-4fb558ee]{position:relative;padding:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:2}.menuNavItem--settings svg[data-v-4fb558ee]{width:20px;height:20px;margin:2px auto 6px;position:relative;-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0;display:block;left:auto}.menuNavItem--settings .menuNavItem__label[data-v-4fb558ee]{position:relative;font-size:12px;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;display:block;line-height:1;letter-spacing:.04em}.menuNavItem--settings .menuNavItem__label[data-v-4fb558ee]:after{display:none}.is-desktop .menuNavItem--settings[data-v-4fb558ee]:hover{-webkit-transition:border-color .1s linear,background-color .1s linear;transition:border-color .1s linear,background-color .1s linear}.is-desktop .menuNavItem--settings[data-v-4fb558ee]:hover:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.is-desktop .menuNavItem--settings:hover svg[data-v-4fb558ee]{-webkit-transition:fill .1s linear;transition:fill .1s linear;fill:#f8f8f8;fill:var(--color2)}.is-desktop .menuNavItem--settings:hover .menuNavItem__label[data-v-4fb558ee]{-webkit-transition:color .1s linear;transition:color .1s linear;color:#f8f8f8;color:var(--color2)}.is-scrolled .menuNavItem--settings[data-v-4fb558ee]:before{opacity:.6}}.menu-enter-active[data-v-4fb558ee]{-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.menu-enter-active .menuNavItem[data-v-4fb558ee]{-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.menu-enter-active .menuNavItem[data-v-4fb558ee]:first-child{-webkit-transition-delay:.04s!important;transition-delay:.04s!important}.menu-enter-active .menuNavItem[data-v-4fb558ee]:nth-child(2){-webkit-transition-delay:.08s!important;transition-delay:.08s!important}.menu-enter-active .menuNavItem[data-v-4fb558ee]:nth-child(3){-webkit-transition-delay:.12s!important;transition-delay:.12s!important}.menu-enter-active .menuNavItem[data-v-4fb558ee]:nth-child(4){-webkit-transition-delay:.16s!important;transition-delay:.16s!important}.menu-enter-active .menuNavItem[data-v-4fb558ee]:nth-child(5){-webkit-transition-delay:.2s!important;transition-delay:.2s!important}.menu-enter-active .menuNavItem[data-v-4fb558ee]:nth-child(6){-webkit-transition-delay:.24s!important;transition-delay:.24s!important}.menu-enter-active .menuNavItem[data-v-4fb558ee]:nth-child(7){-webkit-transition-delay:.28s!important;transition-delay:.28s!important}.menu-enter-active .menuNavItem[data-v-4fb558ee]:nth-child(8){-webkit-transition-delay:.32s!important;transition-delay:.32s!important}.menu-enter-active .menuNavItem[data-v-4fb558ee]:nth-child(9){-webkit-transition-delay:.36s!important;transition-delay:.36s!important}.menu-enter-active .menuNavItem[data-v-4fb558ee]:nth-child(10){-webkit-transition-delay:.4s!important;transition-delay:.4s!important}.menu-leave-active[data-v-4fb558ee]{-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.menu-leave-active .menuNavItem[data-v-4fb558ee]{-webkit-transition:-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.menu-enter[data-v-4fb558ee],.menu-leave-to[data-v-4fb558ee]{opacity:0}.is-menuBottomRight .menu-enter .menuNavItem[data-v-4fb558ee],.is-menuBottomRight .menu-leave-to .menuNavItem[data-v-4fb558ee],.is-menuTopRight .menu-enter .menuNavItem[data-v-4fb558ee],.is-menuTopRight .menu-leave-to .menuNavItem[data-v-4fb558ee]{-webkit-transform:translateX(120px);transform:translateX(120px)}.is-menuBottomLeft .menu-enter .menuNavItem[data-v-4fb558ee],.is-menuBottomLeft .menu-leave-to .menuNavItem[data-v-4fb558ee]{-webkit-transform:translateX(-120px);transform:translateX(-120px)}@media screen and (min-width:761px) and (max-width:1024px){.menuNavItem .menu-enter .is-menuBottomRight[data-v-4fb558ee],.menuNavItem .menu-enter .is-menuTopRight[data-v-4fb558ee],.menuNavItem .menu-leave-to .is-menuBottomRight[data-v-4fb558ee],.menuNavItem .menu-leave-to .is-menuTopRight[data-v-4fb558ee]{-webkit-transform:translateX(160px);transform:translateX(160px)}.menuNavItem .menu-enter .is-menuBottomLeft[data-v-4fb558ee],.menuNavItem .menu-leave-to .is-menuBottomLeft[data-v-4fb558ee]{-webkit-transform:translateX(-160px);transform:translateX(-160px)}}.menu-enter-to[data-v-4fb558ee],.menu-leave[data-v-4fb558ee]{opacity:1}.menu-enter-to .menuNavItem[data-v-4fb558ee],.menu-leave .menuNavItem[data-v-4fb558ee]{-webkit-transform:translateX(0);transform:translateX(0)}', ""]),
        t.exports = e
    },
    518: function(t, e, i) {
        "use strict";
        var r = i(176);
        i.n(r).a
    },
    519: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, '[data-v-5cf76a3f]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-5cf76a3f]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-5cf76a3f{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-5cf76a3f{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.buttonMenu[data-v-5cf76a3f]{bottom:0;right:0;-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);-webkit-transform-origin:right top;transform-origin:right top}.buttonMenu[data-v-5cf76a3f]:before{top:0;left:0;width:100%;height:100%;content:"";position:absolute;opacity:.9;background-color:#f8f8f8;background-color:var(--color2);-webkit-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear}.is-desktop .buttonMenu:hover .buttonMenu__line[data-v-5cf76a3f]:before{background-color:#f8f8f8;background-color:var(--color2);-webkit-transition:background-color .1s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:background-color .1s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .1s linear;transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .1s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.is-desktop .buttonMenu:hover .buttonMenu__line[data-v-5cf76a3f]:after{background-color:#f8f8f8;background-color:var(--color2);-webkit-transition:width .4s cubic-bezier(.19,1,.22,1),background-color .1s linear;transition:width .4s cubic-bezier(.19,1,.22,1),background-color .1s linear}.is-menuOpened .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:first-child{-webkit-transform:rotate(45deg)!important;transform:rotate(45deg)!important}.is-menuOpened .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:first-child:before{-webkit-transform:scale(0);transform:scale(0)}.is-menuOpened .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:first-child:after{width:100%}.is-menuOpened .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:nth-child(2){opacity:0}.is-menuOpened .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:nth-child(3){-webkit-transform:rotate(-45deg)!important;transform:rotate(-45deg)!important}.is-menuOpened .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:nth-child(3):before{-webkit-transform:scale(0);transform:scale(0)}.is-menuOpened .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:nth-child(3):after{width:100%}.is-menuBottomRight .buttonMenu .buttonMenu__line[data-v-5cf76a3f],.is-menuTopRight .buttonMenu .buttonMenu__line[data-v-5cf76a3f]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.is-menuBottomRight .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:first-child,.is-menuTopRight .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:first-child{-webkit-transform:translateY(-6px) rotate(180deg);transform:translateY(-6px) rotate(180deg)}.is-menuBottomRight .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:nth-child(3),.is-menuTopRight .buttonMenu .buttonMenu__line[data-v-5cf76a3f]:nth-child(3){-webkit-transform:translateY(6px) rotate(180deg);transform:translateY(6px) rotate(180deg)}.is-menuTopRight.is-scrolled .buttonMenu[data-v-5cf76a3f]{-webkit-transform:translateY(-2px) scale(.8);transform:translateY(-2px) scale(.8)}@media screen and (min-width:761px){.is-menuTopRight.is-scrolled .buttonMenu[data-v-5cf76a3f]{-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}}.is-menuOpened .buttonMenu .buttonSquare__label--closed[data-v-5cf76a3f]{-webkit-transform:translateX(-48px);transform:translateX(-48px)}.is-menuOpened .buttonMenu .buttonSquare__label--opened[data-v-5cf76a3f]{-webkit-transform:translateX(0);transform:translateX(0)}.buttonSquare__label[data-v-5cf76a3f]{-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.buttonSquare__label--closed[data-v-5cf76a3f]{-webkit-transform:translateX(0);transform:translateX(0)}.buttonSquare__label--opened[data-v-5cf76a3f]{-webkit-transform:translateX(48px);transform:translateX(48px)}.buttonMenu__line[data-v-5cf76a3f]{position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;top:16px;width:22px;height:2px;z-index:2;-webkit-transition:opacity .4s cubic-bezier(.19,1,.22,1),color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:opacity .4s cubic-bezier(.19,1,.22,1),color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),opacity .4s cubic-bezier(.19,1,.22,1),color .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17),opacity .4s cubic-bezier(.19,1,.22,1),color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.buttonMenu__line[data-v-5cf76a3f]:first-child{-webkit-transform:translateY(-6px);transform:translateY(-6px)}.buttonMenu__line[data-v-5cf76a3f]:nth-child(3){-webkit-transform:translateY(6px);transform:translateY(6px)}.buttonMenu__line[data-v-5cf76a3f]:after,.buttonMenu__line[data-v-5cf76a3f]:before{position:absolute;top:0;content:"";background-color:#0d0d0d;background-color:var(--color1)}.buttonMenu__line[data-v-5cf76a3f]:before{width:2px;height:2px;left:0;-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear;transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.buttonMenu__line[data-v-5cf76a3f]:after{width:18px;height:2px;right:0;will-change:width;-webkit-transition:width .4s cubic-bezier(.19,1,.22,1),background-color .2s linear;transition:width .4s cubic-bezier(.19,1,.22,1),background-color .2s linear}@media screen and (min-width:761px){.buttonMenu__line[data-v-5cf76a3f]{top:20px}}', ""]),
        t.exports = e
    },
    520: function(t, e, i) {
        "use strict";
        var r = i(177);
        i.n(r).a
    },
    521: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, '[data-v-1dcde032]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-1dcde032]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-1dcde032{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-1dcde032{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.buttonBackWrapper[data-v-1dcde032]{z-index:30;top:88px;left:16px;position:fixed;-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.buttonBackWrapper.is-available[data-v-1dcde032]{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}@media screen and (min-width:761px){.buttonBackWrapper[data-v-1dcde032]{top:130px;left:32px}}.buttonBack[data-v-1dcde032]{position:relative;-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);white-space:nowrap;height:32px}.buttonBack[data-v-1dcde032]:before{position:absolute;top:0;bottom:0;margin-top:auto;margin-bottom:auto;content:"";left:1em;z-index:3;width:6px;height:6px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);border-color:#0d0d0d;border-color:var(--color1);border-style:solid;border-width:2px 0 0 2px;-webkit-transition:border-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .2s linear,transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .2s linear,transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.buttonBack[data-v-1dcde032]:after{top:0;left:0;width:100%;height:100%;content:"";position:absolute;opacity:.9;background-color:#f8f8f8;background-color:var(--color2);-webkit-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear}.buttonBack>.inner[data-v-1dcde032]{position:relative;z-index:2;padding:.2em 1em 0 2.4em;font-size:10px}.is-desktop .buttonBack[data-v-1dcde032]:hover:before{-webkit-transform:translateX(-30%) rotate(-45deg);transform:translateX(-30%) rotate(-45deg);-webkit-transition:border-color .1s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .1s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .1s linear,transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .1s linear,transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1);border-color:#f8f8f8!important;border-color:var(--color2)!important}@media screen and (min-width:761px){.buttonBack>.inner[data-v-1dcde032]{font-size:12px}}.buttonRect__label[data-v-1dcde032]{letter-spacing:.1em}', ""]),
        t.exports = e
    },
    522: function(t, e, i) {
        "use strict";
        var r = i(178);
        i.n(r).a
    },
    523: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, ":root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.buttonBackWrapper.is-onTopLeft{-webkit-transform:translateX(-100%) translateX(-40px);transform:translateX(-100%) translateX(-40px)}.is-scrolled .buttonBackWrapper.is-onTopLeft .buttonBack{-webkit-transform:translateY(-16px);transform:translateY(-16px)}.is-menuBottomLeft.is-menuOpened.is-buttonBackAvailable .buttonBackWrapper.is-onTopLeft{-webkit-transform:translateX(160px)!important;transform:translateX(160px)!important}@media screen and (min-width:761px){.buttonBackWrapper.is-onTopLeft{-webkit-transform:translateX(-100%) translateX(-60px);transform:translateX(-100%) translateX(-60px)}}.buttonBackWrapper.is-onBottomRight{position:absolute;top:auto;left:auto;bottom:0;right:0;z-index:2;-webkit-transform:translateX(100%) translateX(52px);transform:translateX(100%) translateX(52px)}@media screen and (min-width:761px){.buttonBackWrapper.is-onBottomRight{-webkit-transform:translateX(100%) translateX(60px);transform:translateX(100%) translateX(60px)}}.buttonBackWrapper.is-onBottomLeft{position:absolute;top:auto;left:0;bottom:0;z-index:2;-webkit-transform:translateX(-100%) translateX(-52px);transform:translateX(-100%) translateX(-52px)}@media screen and (min-width:761px){.buttonBackWrapper.is-onBottomLeft{-webkit-transform:translateX(-100%) translateX(-60px);transform:translateX(-100%) translateX(-60px)}}", ""]),
        t.exports = e
    },
    524: function(t, e, i) {
        "use strict";
        var r = i(179);
        i.n(r).a
    },
    525: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, '[data-v-1ae27c88]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-1ae27c88]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-1ae27c88{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-1ae27c88{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.buttonScrollTop[data-v-1ae27c88]{bottom:0;right:0;z-index:9;-webkit-transition:border-color .2s linear,background-color .2s linear,opacity .4s cubic-bezier(.19,1,.22,1),visibility .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:border-color .2s linear,background-color .2s linear,opacity .4s cubic-bezier(.19,1,.22,1),visibility .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),border-color .2s linear,background-color .2s linear,opacity .4s cubic-bezier(.19,1,.22,1),visibility .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),border-color .2s linear,background-color .2s linear,opacity .4s cubic-bezier(.19,1,.22,1),visibility .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.buttonScrollTop[data-v-1ae27c88]:before{top:0;left:0;width:100%;height:100%;content:"";position:absolute;opacity:.9;background-color:#f8f8f8;background-color:var(--color2);-webkit-transition:background-color .2s linear,opacity .2s linear;transition:background-color .2s linear,opacity .2s linear}.is-desktop .buttonScrollTop:hover .buttonScrollTop__arrow[data-v-1ae27c88]{border-color:#f8f8f8;border-color:var(--color2);-webkit-transform:translateY(-24%) rotate(45deg);transform:translateY(-24%) rotate(45deg);-webkit-transition:border-color .1s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .1s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),border-color .1s linear,transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),border-color .1s linear,transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.is-displayModeFull.is-worksList .buttonScrollTop[data-v-1ae27c88],.is-index .buttonScrollTop[data-v-1ae27c88]{opacity:0!important;visibility:hidden!important}.buttonScrollTop__arrow[data-v-1ae27c88]{position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;content:"";width:10px;height:10px;top:8px;-webkit-transform:rotate(45deg);transform:rotate(45deg);z-index:2;border-color:#0d0d0d;border-color:var(--color1);border-style:solid;border-width:2px 0 0 2px;-webkit-transition:border-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .2s linear,transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .2s linear,transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1)}@media screen and (min-width:761px){.buttonScrollTop__arrow[data-v-1ae27c88]{top:10px}}.buttonSquare__label[data-v-1ae27c88]{top:auto;bottom:3px;font-size:10px;line-height:1.04}@media screen and (min-width:761px){.buttonSquare__label[data-v-1ae27c88]{bottom:4px;font-size:11px;line-height:1.1}}', ""]),
        t.exports = e
    },
    526: function(t, e, i) {
        "use strict";
        var r = i(180);
        i.n(r).a
    },
    527: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, "[data-v-f6a19850]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-f6a19850]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-f6a19850{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-f6a19850{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.selector[data-v-f6a19850]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:16px;margin-bottom:16px;position:relative}.selector.is-disabled[data-v-f6a19850]{opacity:.4}.selector__indicstor[data-v-f6a19850]{position:absolute;left:0;top:0;z-index:0;height:100%;background-color:#41e044;-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),background-color .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17),background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.selectorItem[data-v-f6a19850]{min-height:32px;position:relative;display:block;z-index:3;border:2px solid #0d0d0d;border-color:var(--color1);-webkit-transition:background-color .2s linear,border-color .2s linear;transition:background-color .2s linear,border-color .2s linear}.selectorItem[data-v-f6a19850]:disabled{opacity:.4}.selectorItem__inner[data-v-f6a19850]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:8px}.selectorItem__label[data-v-f6a19850]{letter-spacing:.1em;font-size:12px;padding-top:.2em;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear;line-height:1.4}.selectorItem__figure[data-v-f6a19850]{margin:8px auto;display:block;width:100%;position:relative}.selectorItem.is-current[data-v-f6a19850]{background-color:transparent}.selectorItem.is-current .selectorItem__label[data-v-f6a19850]{color:#f8f8f8;color:var(--color2)}", ""]),
        t.exports = e
    },
    528: function(t, e, i) {
        "use strict";
        var r = i(181);
        i.n(r).a
    },
    529: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, ":root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@media screen and (min-width:761px){.selectorItem__label br{display:none}}", ""]),
        t.exports = e
    },
    530: function(t, e, i) {
        "use strict";
        var r = i(182);
        i.n(r).a
    },
    531: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, '[data-v-0abacdd4]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-0abacdd4]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-0abacdd4{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-0abacdd4{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.settings[data-v-0abacdd4]{position:fixed;z-index:30}.settings[data-v-0abacdd4],.settings__bg[data-v-0abacdd4]{top:0;bottom:0;left:0;right:0;margin:auto;width:100%;height:100%}.settings__bg[data-v-0abacdd4]{position:absolute;z-index:0;background-color:hsla(0,0%,97.3%,.8);background-color:var(--gradientColor2);-webkit-transition:background-color .2s linear,opacity .1s linear,visibility .1s linear;transition:background-color .2s linear,opacity .1s linear,visibility .1s linear}.settings__contents[data-v-0abacdd4]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;overflow:hidden;z-index:3;width:calc(100% - 40px);height:calc(100% - 40px);max-width:600px;max-height:940px;border:2px solid #0d0d0d;border-color:var(--color1);background-color:#f8f8f8;background-color:var(--color2);-webkit-transition:border-color .2s linear,background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.405,1.095);transition:border-color .2s linear,background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.405,1.095);transition:border-color .2s linear,background-color .2s linear,transform .4s cubic-bezier(.175,.885,.405,1.095);transition:border-color .2s linear,background-color .2s linear,transform .4s cubic-bezier(.175,.885,.405,1.095),-webkit-transform .4s cubic-bezier(.175,.885,.405,1.095)}@media screen and (min-width:761px){.settings__contents[data-v-0abacdd4]{width:calc(100% - 64px);height:calc(100% - 64px)}}@media screen and (min-width:1025px){.settings__contents[data-v-0abacdd4]{max-height:700px}}.settings__inner[data-v-0abacdd4]{width:100%;height:100%;position:absolute;z-index:1}.settings__inner[data-v-0abacdd4]:before{top:0;left:0;width:100%;height:64px;content:"";position:absolute;z-index:3;opacity:.9;background-color:#f8f8f8;background-color:var(--color2);-webkit-box-shadow:0 0 0 4px #f8f8f8,0 0 0 8px hsla(0,0%,97.3%,.8),0 0 0 12px hsla(0,0%,97.3%,.6),0 0 0 16px hsla(0,0%,97.3%,.4),0 0 0 20px hsla(0,0%,97.3%,.2);box-shadow:0 0 0 4px #f8f8f8,0 0 0 8px hsla(0,0%,97.3%,.8),0 0 0 12px hsla(0,0%,97.3%,.6),0 0 0 16px hsla(0,0%,97.3%,.4),0 0 0 20px hsla(0,0%,97.3%,.2);-webkit-box-shadow:0 0 0 4px var(--gradientColor1),0 0 0 8px var(--gradientColor2),0 0 0 12px var(--gradientColor3),0 0 0 16px var(--gradientColor4),0 0 0 20px var(--gradientColor5);box-shadow:0 0 0 4px var(--gradientColor1),0 0 0 8px var(--gradientColor2),0 0 0 12px var(--gradientColor3),0 0 0 16px var(--gradientColor4),0 0 0 20px var(--gradientColor5);-webkit-transition:background-color .2s linear,-webkit-box-shadow .2s linear;transition:background-color .2s linear,-webkit-box-shadow .2s linear;transition:background-color .2s linear,box-shadow .2s linear;transition:background-color .2s linear,box-shadow .2s linear,-webkit-box-shadow .2s linear}@media screen and (min-width:761px){.settings__inner[data-v-0abacdd4]:before{height:108px}}.slideContainer[data-v-0abacdd4]{position:relative}.slideContainer[data-v-0abacdd4],.slideWrapper[data-v-0abacdd4]{-webkit-box-sizing:border-box;box-sizing:border-box}.slideWrapper[data-v-0abacdd4]{width:100%;height:100%;position:absolute;-webkit-overflow-scrolling:touch}.slideItem[data-v-0abacdd4]{-webkit-box-sizing:border-box;box-sizing:border-box;height:auto!important;padding:96px 16px 0}@media screen and (min-width:761px){.slideItem[data-v-0abacdd4]{padding:128px 32px 0}}.settings__title[data-v-0abacdd4]{position:absolute;top:24px;left:16px;font-size:28px;letter-spacing:.1em;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear;z-index:3}@media screen and (min-width:761px){.settings__title[data-v-0abacdd4]{top:42px;left:32px;font-size:32px}}.settings__section[data-v-0abacdd4]{margin-bottom:48px;position:relative;z-index:1}@media screen and (min-width:761px){.settings__section[data-v-0abacdd4]{margin-bottom:56px}}.settings__sectionTitle[data-v-0abacdd4]{font-size:20px;letter-spacing:.1em;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear}@media screen and (min-width:761px){.settings__sectionTitle[data-v-0abacdd4]{font-size:22px}}.settings__childSection[data-v-0abacdd4]{margin-top:32px}.settings__childSection[data-v-0abacdd4]:first-of-type{margin-top:24px}@media screen and (min-width:761px){.settings__childSection[data-v-0abacdd4]{margin-top:48px}.settings__childSection[data-v-0abacdd4]:first-of-type{margin-top:32px}}.settings__childSectionTitle[data-v-0abacdd4]{font-size:16px;letter-spacing:.1em;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear}@media screen and (min-width:761px){.settings__childSectionTitle[data-v-0abacdd4]{font-size:18px}}.settings__txts[data-v-0abacdd4]{margin-top:8px}@media screen and (min-width:761px){.settings__txts[data-v-0abacdd4]{margin-top:16px}}.settings__notice[data-v-0abacdd4]{font-size:12px;line-height:1.4;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear}@media screen and (min-width:761px){.settings__notice[data-v-0abacdd4]{font-size:14px}}.settings__alert[data-v-0abacdd4]{font-size:12px;line-height:1.4;color:red!important}@media screen and (min-width:761px){.settings__alert[data-v-0abacdd4]{font-size:14px}}.buttonClose[data-v-0abacdd4]{position:absolute;top:16px;right:16px;-webkit-transform:scale(.9) translateZ(0);transform:scale(.9) translateZ(0);-webkit-transform-origin:right top;transform-origin:right top;z-index:3;-webkit-backface-visibility:hidden;backface-visibility:hidden}@media screen and (min-width:761px){.buttonClose[data-v-0abacdd4]{top:32px;right:32px;-webkit-transform:scale(.8) translateZ(0);transform:scale(.8) translateZ(0)}}.is-desktop .buttonClose:hover .buttonClose__line[data-v-0abacdd4]{background-color:#f8f8f8;background-color:var(--color2);-webkit-transition:opacity .4s cubic-bezier(.19,1,.22,1),background-color .1s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:opacity .4s cubic-bezier(.19,1,.22,1),background-color .1s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),opacity .4s cubic-bezier(.19,1,.22,1),background-color .1s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17),opacity .4s cubic-bezier(.19,1,.22,1),background-color .1s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.buttonClose__line[data-v-0abacdd4]{position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;top:16px;width:22px;height:2px;z-index:2;background-color:#0d0d0d;background-color:var(--color1);-webkit-transition:opacity .4s cubic-bezier(.19,1,.22,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:opacity .4s cubic-bezier(.19,1,.22,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),opacity .4s cubic-bezier(.19,1,.22,1),background-color .2s linear;transition:transform .4s cubic-bezier(.175,.885,.425,1.17),opacity .4s cubic-bezier(.19,1,.22,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.buttonClose__line[data-v-0abacdd4]:first-child{-webkit-transform:rotate(135deg)!important;transform:rotate(135deg)!important}.buttonClose__line[data-v-0abacdd4]:nth-child(2){-webkit-transform:rotate(-135deg)!important;transform:rotate(-135deg)!important}@media screen and (min-width:761px){.buttonClose__line[data-v-0abacdd4]{top:18px}}.settings-enter .settings__bg[data-v-0abacdd4],.settings-leave-to .settings__bg[data-v-0abacdd4]{opacity:0;visibility:hidden}.settings-enter .settings__contents[data-v-0abacdd4],.settings-leave-to .settings__contents[data-v-0abacdd4]{-webkit-transform:translateY(100vh);transform:translateY(100vh)}.settings-enter-to .settings__bg[data-v-0abacdd4],.settings-leave .settings__bg[data-v-0abacdd4]{opacity:1;visibility:visible}.settings-enter-to .settings__contents[data-v-0abacdd4],.settings-leave .settings__contents[data-v-0abacdd4]{-webkit-transform:translateY(0);transform:translateY(0)}', ""]),
        t.exports = e
    },
    532: function(t, e, i) {
        "use strict";
        var r = i(183);
        i.n(r).a
    },
    533: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, ':root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.optionMenuBottomLeft,.optionMenuBottomRight,.optionMenuTopRight{width:60%;margin:0 auto;border-radius:6px;position:relative;display:block;border:2px solid #0d0d0d;border-color:var(--color1);-webkit-transition:border-color .2s linear;transition:border-color .2s linear}.optionMenuBottomLeft:before,.optionMenuBottomRight:before,.optionMenuTopRight:before{content:"";display:block;width:100%;padding-top:160%}.optionMenuBottomLeft:after,.optionMenuBottomRight:after,.optionMenuTopRight:after{position:absolute;content:"";-webkit-box-sizing:content-box;box-sizing:content-box;display:block;width:16%;padding-top:16%;border:2px solid #0d0d0d;border-color:var(--color1);-webkit-transition:border-color .2s linear;transition:border-color .2s linear}.selectorItem.is-current .optionMenuBottomLeft,.selectorItem.is-current .optionMenuBottomLeft:after,.selectorItem.is-current .optionMenuBottomRight,.selectorItem.is-current .optionMenuBottomRight:after,.selectorItem.is-current .optionMenuTopRight,.selectorItem.is-current .optionMenuTopRight:after{border-color:#f8f8f8;border-color:var(--color2)}.is-landScape .optionMenuBottomLeft:before,.is-landScape .optionMenuBottomRight:before,.is-landScape .optionMenuTopRight:before{padding-top:62.5%}.is-landScape .optionMenuBottomLeft:after,.is-landScape .optionMenuBottomRight:after,.is-landScape .optionMenuTopRight:after{width:12%;padding-top:12%}@media screen and (min-width:761px){.optionMenuBottomLeft,.optionMenuBottomRight,.optionMenuTopRight{width:40%}.is-landScape .optionMenuBottomLeft,.is-landScape .optionMenuBottomRight,.is-landScape .optionMenuTopRight{width:60%}}.optionMenuBottomRight:after{bottom:4px;right:4px}.optionMenuBottomLeft:after{bottom:4px;left:4px}.optionMenuTopRight:after{top:4px;right:4px}', ""]),
        t.exports = e
    },
    534: function(t, e, i) {
        "use strict";
        var r = i(184);
        i.n(r).a
    },
    535: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, "[data-v-48d47c47]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-48d47c47]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-48d47c47{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-48d47c47{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.alertModal[data-v-48d47c47]{position:fixed;top:0;bottom:0;left:0;right:0;margin:auto;width:100%;height:100%;z-index:40}.alertModal__bg[data-v-48d47c47]{width:100%;height:100vh;background-color:hsla(0,0%,97.3%,.8);background-color:var(--gradientColor2);-webkit-transition:background-color .2s linear,opacity .1s linear,visibility .1s linear;transition:background-color .2s linear,opacity .1s linear,visibility .1s linear}.alertModal__bg[data-v-48d47c47],.alertModal__contents[data-v-48d47c47]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.alertModal__contents[data-v-48d47c47]{overflow:hidden;z-index:3;width:calc(100% - 40px);max-width:300px;padding:16px;border:2px solid #0d0d0d;border-color:var(--color1);background-color:#f8f8f8;background-color:var(--color2);-webkit-transition:border-color .2s linear,background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.405,1.095);transition:border-color .2s linear,background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.405,1.095);transition:border-color .2s linear,background-color .2s linear,transform .4s cubic-bezier(.175,.885,.405,1.095);transition:border-color .2s linear,background-color .2s linear,transform .4s cubic-bezier(.175,.885,.405,1.095),-webkit-transform .4s cubic-bezier(.175,.885,.405,1.095)}@media screen and (min-width:761px){.alertModal__contents[data-v-48d47c47]{max-width:500px;padding:32px;width:calc(100% - 64px)}}.alertModal__buttons[data-v-48d47c47]{margin-top:16px}.alertModal__buttons .buttonRect[data-v-48d47c47]{width:100%}.alertModal__buttons .buttonRect__label[data-v-48d47c47]{padding-top:.2em;letter-spacing:.1em}@media screen and (min-width:761px){.alertModal__buttons[data-v-48d47c47]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:32px}.alertModal__buttons .buttonRect[data-v-48d47c47]{height:48px}}.alertModal__buttonOK[data-v-48d47c47]{margin-bottom:8px}@media screen and (min-width:761px){.alertModal__buttonOK[data-v-48d47c47]{margin-bottom:0;margin-right:16px}}.alertModal__txt[data-v-48d47c47]{font-size:16px;line-height:1.6;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear;text-align:center;letter-spacing:.1em}@media screen and (min-width:761px){.alertModal__txt[data-v-48d47c47]{font-size:18px}}.alertModal-enter .alertModal__bg[data-v-48d47c47],.alertModal-leave-to .alertModal__bg[data-v-48d47c47]{opacity:0;visibility:hidden}.alertModal-enter .alertModal__contents[data-v-48d47c47],.alertModal-leave-to .alertModal__contents[data-v-48d47c47]{-webkit-transform:translateY(100vh) translate(-50%,-50%);transform:translateY(100vh) translate(-50%,-50%)}.alertModal-enter-to .alertModal__bg[data-v-48d47c47],.alertModal-leave .alertModal__bg[data-v-48d47c47]{opacity:1;visibility:visible}.alertModal-enter-to .alertModal__contents[data-v-48d47c47],.alertModal-leave .alertModal__contents[data-v-48d47c47]{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}", ""]),
        t.exports = e
    },
    542: function(t, e, i) {
        "use strict";
        var r = i(185);
        i.n(r).a
    },
    543: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, "[data-v-56353ed5]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-56353ed5]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-56353ed5{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-56353ed5{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.patternBg[data-v-56353ed5]{position:fixed;left:0;top:0}.bg[data-v-56353ed5],.patternBg[data-v-56353ed5]{width:100%;height:100%}.bg[data-v-56353ed5]{position:absolute;background-size:1024px 1024px;background-repeat:repeat;background-position:0 0;opacity:0;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.is-shown .bg[data-v-56353ed5]{opacity:.2}.is-invisible .bg[data-v-56353ed5]{display:none}@media screen and (min-width:761px){.bg[data-v-56353ed5]{background-size:1600px 1600px}}", ""]),
        t.exports = e
    },
    558: function(t, e, i) {
        "use strict";
        i.r(e),
        e.default = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec3 lightPos;\nuniform vec3 cameraPos;\nuniform vec4 baseColor;\nuniform float depthMode;\nuniform float lightNear;\nuniform float lightFar;\nuniform float shadowBias;\nuniform float size;\nuniform vec2 resolution;\nuniform float shadowScale;\nuniform float patternAlpha;\nuniform float worksImageAlpha;\n\nuniform sampler2D patternTexture;\nuniform sampler2D shadowTexture;\nuniform sampler2D depthTexture;\nuniform sampler2D worksImageTexture;\n\nvarying vec2 vUv;\nvarying vec2 vPatternUV;\nvarying vec2 vWorksImageUV;\nvarying vec3 vNormal;\nvarying vec4 vPos;  // model\nvarying vec4 vPosition;  // mvp\nvarying vec4 vDepth;\nvarying vec4 vTexCoord;\nvarying float vWorksFactor;\n\nvoid main(void){\n  vec3 light = lightPos - vPos.xyz;\n  vec3 eye = cameraPos - vPos.xyz;\n  float diffuse = clamp(dot(normalize(vNormal), normalize(light)), 0.2, 0.8) + 0.3;\n\n  vec4 savedDepth = texture2DProj(depthTexture, vTexCoord);\n\n  vec4 shadowColor = vec4(mix(vec3(0.2 +  vWorksFactor * 0.7), vec3(0.8), step(0.5, baseColor.r)), 1.0);\n  float depth = 1.0 / (lightFar - lightNear) * length(vDepth);\n  shadowColor = mix(shadowColor, vec4(1.0), step(depth - shadowBias, savedDepth.r));\n\n  vec4 patternColor = texture2D(patternTexture, vPatternUV);\n  vec4 color = mix(patternColor, baseColor, 0.8);\n  vec4 transitionColor = mix(vec4(0.1, 0.1, 0.1, 1.0), baseColor, step(0.5, baseColor.r));\n  color = mix(transitionColor, color, patternAlpha);\n\n  vec4 worksImageColor = texture2D(worksImageTexture, vWorksImageUV);\n  color = mix(color, worksImageColor, worksImageAlpha);\n\n  vec4 shadow = min(vec4(vec3(diffuse), 1.0) * shadowColor, 1.0);\n  float minR = min(resolution.x, resolution.y);\n  vec2 shadowTextureUV = gl_FragCoord.xy / vec2(minR) * shadowScale;\n  color *= min(texture2D(shadowTexture, shadowTextureUV) + shadow, 1.0);\n\n  // depthMode\n  float d = gl_FragCoord.z;\n  vec4 depthColor = vec4(d, d, d, 1.0);\n\n  gl_FragColor = mix(color, depthColor, depthMode);\n}\n"
    },
    559: function(t, e, i) {
        "use strict";
        i.r(e),
        e.default = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nuniform float lightNear;\nuniform float lightFar;\n\nvarying vec4 vDepth;\n\nvoid main(void){\n  float d = 1.0 / (lightFar - lightNear) * length(vDepth);\n  gl_FragColor = vec4(d, d, d, 1.0);\n}\n"
    },
    560: function(t, e, i) {
        "use strict";
        i.r(e),
        e.default = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D texture;\n\nvoid main(void) {\n  gl_FragColor = texture2D(texture, gl_FragCoord.xy / resolution);\n}\n"
    },
    561: function(t, e, i) {
        "use strict";
        i.r(e),
        e.default = 'precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D texture;\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent \n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE, \n            vec2 v_rgbSW, vec2 v_rgbSE, \n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n//To save 9 dependent texture reads, you can compute\n//these in the vertex shader and use the optimized\n//frag.glsl function in your frag shader. \n\n//This is best suited for mobile devices, like iOS.\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n\t\t\tout vec2 v_rgbNW, out vec2 v_rgbNE,\n\t\t\tout vec2 v_rgbSW, out vec2 v_rgbSE,\n\t\t\tout vec2 v_rgbM) {\n\tvec2 inverseVP = 1.0 / resolution.xy;\n\tv_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n\tv_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n\tv_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n\tv_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n\tv_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvec4 apply(sampler2D tex, vec2 fragCoord, vec2 resolution) {\n\tmediump vec2 v_rgbNW;\n\tmediump vec2 v_rgbNE;\n\tmediump vec2 v_rgbSW;\n\tmediump vec2 v_rgbSE;\n\tmediump vec2 v_rgbM;\n\n\t//compute the texture coords\n\ttexcoords(fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\t\n\t//compute FXAA\n\treturn fxaa(tex, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n\nvoid main(void) {\n  gl_FragColor = apply(texture, gl_FragCoord.xy, resolution);\n}\n'
    },
    562: function(t, e, i) {
        "use strict";
        i.r(e),
        e.default = "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nconst float PI = 3.1415926535897932384626433832795;\n\nfloat map(float value, float inputMin, float inputMax, float outputMin, float outputMax, bool clamp) {\n  if(clamp == true) {\n    if(value < inputMin) return outputMin;\n    if(value > inputMax) return outputMax;\n  }\n\n  float p = (outputMax - outputMin) / (inputMax - inputMin);\n  return ((value - inputMin) * p) + outputMin;\n}\n\nuniform vec2 resolution;\nuniform sampler2D texture;\nuniform float transitionOffset;\nuniform float speed;\n\nuniform vec2 pointerPos;\n\nuniform sampler2D logoNormalTexture;\nuniform sampler2D logoMaskTexture;\nuniform vec2 logoSize;\nuniform float logoFactor;\nuniform float time;\nuniform float mobileWindowOffsetY;\nuniform float topFactor;\n\nuniform sampler2D patternTexture;\nuniform float repeatSize;\nuniform float devicePixelRatio;\nuniform vec4 baseColor;\nuniform float alpha;\n\nvoid main(void) {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  float dirFactorX = step(resolution.x - resolution.y, 0.0);\n  vec2 dirFactor = vec2(-dirFactorX, 1.0 - dirFactorX);\n\n  float n = 0.0;\n  float t1 = mod(time * 0.01, PI * 2.0);\n  float t2 = mod(time * 0.02, PI * 2.0);\n  vec2 normalUV = vec2(\n    (uv.x - (1.0 - logoSize.x) * 0.5) / logoSize.x,\n    (uv.y - mobileWindowOffsetY * devicePixelRatio / resolution.y - (1.0 - logoSize.y) * 0.5) / logoSize.y\n  );\n\n  vec4 maskColor = texture2D(logoMaskTexture, vec2(normalUV.x, 1.0 - normalUV.y));\n  float maskFactor = maskColor.a;\n  float maskNoise = (maskColor.r * 2.0 - 1.0) * maskFactor;\n\n  vec2 uvOffset = vec2(\n    sin(t1 + maskNoise * 10.0) * 0.001 / logoSize.x,\n    cos(t2 + maskNoise * 10.0) * 0.001 / logoSize.y\n  ) * maskFactor * topFactor;\n\n  normalUV += uvOffset;\n  normalUV.y = 1.0 - normalUV.y;\n\n  vec3 normal = texture2D(logoNormalTexture, normalUV).rgb * 2.0 - 1.0;\n  maskFactor = floor(texture2D(logoMaskTexture, normalUV).a + 0.5);\n\n  float offsetRatio = 100.0 / resolution.y;\n  uv += normal.xy * offsetRatio * maskFactor * topFactor;\n\n  float normalXYL = length(normal.xy);\n  vec2 normalRGBShiftValue = normalXYL * offsetRatio * maskFactor * topFactor * normalize(normal.xy) * 0.8;\n\n  vec2 uvR = uv;\n  uvR -= vec2(0.03 * -speed + transitionOffset) * dirFactor;\n  uvR += normalRGBShiftValue;\n\n  vec2 uvG = uv;\n  uvG -= vec2(0.06 * -speed + transitionOffset) * dirFactor;\n\n  vec2 uvB = uv;\n  uvB -= vec2(transitionOffset) * dirFactor;\n  uvB -= normalRGBShiftValue;\n\n  vec4 colorR = texture2D(texture, uvR);\n  vec4 colorG = texture2D(texture, uvG);\n  vec4 colorB = texture2D(texture, uvB);\n  vec4 color = vec4(colorR.r, colorG.g, colorB.b, min(1.0, colorR.a + colorG.a + colorB.a));\n\n  vec2 bgUV = uv * resolution / (repeatSize * devicePixelRatio);\n  normalRGBShiftValue = normalRGBShiftValue / (repeatSize * devicePixelRatio) * resolution.y;\n  uvR = bgUV + normalRGBShiftValue;\n  uvG = bgUV;\n  uvB = bgUV + normalRGBShiftValue;\n  colorR = texture2D(patternTexture, uvR);\n  colorG = texture2D(patternTexture, uvG);\n  colorB = texture2D(patternTexture, uvB);\n  vec4 bgColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);\n  bgColor = mix(bgColor, baseColor, 1.0 - alpha * 0.2);\n\n  vec3 light = normalize(vec3(pointerPos, 1.0));\n  vec3 eye = vec3(0.0, 0.0, 1.0);\n  float diffuse = mix(clamp(dot(normal, light), 0.98 + (1.0 - maskFactor * topFactor) * 0.02, 1.0), 1.0, step(normal.z + 1.0, 0.0));\n\n  color = vec4(mix(color.rgb, bgColor.rgb, 1.0 - color.a), 1.0);\n  color.rgb *=  vec3(diffuse);\n\n  gl_FragColor = color;\n}\n"
    },
    564: function(t, e, i) {
        "use strict";
        var r = i(186);
        i.n(r).a
    },
    565: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, "[data-v-329571c0]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-329571c0]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-329571c0{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-329571c0{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.mainVisual[data-v-329571c0]{position:fixed;left:0;top:0;width:100%;height:100%;z-index:0}.is-mobile .mainVisual[data-v-329571c0]{height:100vh!important}canvas[data-v-329571c0]{position:absolute;width:100%;height:100%}", ""]),
        t.exports = e
    },
    570: function(t, e, i) {
        "use strict";
        var r = i(187);
        i.n(r).a
    },
    571: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, '[data-v-6003a4b6]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-6003a4b6]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-6003a4b6{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-6003a4b6{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.worksListFullMode[data-v-6003a4b6]{position:fixed;left:0;top:0;width:100%;height:100%;z-index:10;-webkit-transition:-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.worksListFullMode__clickableArea[data-v-6003a4b6]{position:fixed;z-index:0;cursor:pointer}.worksListFullMode__clickableArea[data-v-6003a4b6],.worksListFullMode__clickableAreaTxt[data-v-6003a4b6]{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.worksListFullMode__clickableAreaTxt[data-v-6003a4b6]{position:absolute;font-size:10px;color:#0d0d0d;letter-spacing:.1em;line-height:1.4;text-align:center;white-space:nowrap;opacity:0;visibility:hidden;-webkit-transition:opacity .2s linear,visibility .2s linear,color .2s linear;transition:opacity .2s linear,visibility .2s linear,color .2s linear}.is-loading .worksListFullMode__clickableAreaTxt[data-v-6003a4b6],.is-transitionMode .worksListFullMode__clickableAreaTxt[data-v-6003a4b6]{opacity:1;visibility:visible}.is-darkMode .worksListFullMode__clickableAreaTxt[data-v-6003a4b6]{color:#f8f8f8}@media screen and (min-width:761px){.worksListFullMode__clickableAreaTxt[data-v-6003a4b6]{font-size:18px}}.worksListFullMode__clickableAreaTxtInner[data-v-6003a4b6]:first-child{margin-bottom:.6em;font-size:12px;-webkit-transition:opacity .2s linear;transition:opacity .2s linear;opacity:0;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);top:-2em}.is-loading .worksListFullMode__clickableAreaTxtInner[data-v-6003a4b6]{-webkit-transition-delay:.2s;transition-delay:.2s;opacity:1}@media screen and (min-width:761px){.worksListFullMode__clickableAreaTxtInner[data-v-6003a4b6]:first-child{font-size:20px}}.worksItem__titles[data-v-6003a4b6]{position:absolute;left:10%;bottom:10%;opacity:0}.worksListFullModeIndicator[data-v-6003a4b6]{position:fixed;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-align:center;color:#0d0d0d;font-size:11px;bottom:16px;line-height:1.4;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.is-darkMode .worksListFullModeIndicator[data-v-6003a4b6]{color:#f8f8f8}@media screen and (min-width:761px){.worksListFullModeIndicator[data-v-6003a4b6]{bottom:32px;font-size:14px}}.worksListFullModeIndicator__current[data-v-6003a4b6],.worksListFullModeIndicator__total[data-v-6003a4b6]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.worksListFullModeIndicator__total[data-v-6003a4b6]{margin-left:1.4em}.worksListFullModeIndicator__total[data-v-6003a4b6]:before{position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;top:.16em;content:"/";font-size:70%;font-weight:700}.worksListFullModeIndicator__digit01[data-v-6003a4b6],.worksListFullModeIndicator__digit10[data-v-6003a4b6]{display:block;width:7px;height:15px;overflow:hidden;position:relative}@media screen and (min-width:761px){.worksListFullModeIndicator__digit01[data-v-6003a4b6],.worksListFullModeIndicator__digit10[data-v-6003a4b6]{width:12px;height:19px}}.worksListFullModeIndicator__digit01Inner[data-v-6003a4b6],.worksListFullModeIndicator__digit10Inner[data-v-6003a4b6]{display:block;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;-webkit-transition:-webkit-transform .4s ease-out;transition:-webkit-transform .4s ease-out;transition:transform .4s ease-out;transition:transform .4s ease-out,-webkit-transform .4s ease-out;-webkit-transform:translateY(-16px);transform:translateY(-16px)}@media screen and (min-width:761px){.worksListFullModeIndicator__digit01Inner[data-v-6003a4b6],.worksListFullModeIndicator__digit10Inner[data-v-6003a4b6]{-webkit-transform:translateY(-28px);transform:translateY(-28px)}}.worksListFullModeIndicator__digit[data-v-6003a4b6]{text-align:center;width:100%;height:100%}.worksListFullMode-enter-active[data-v-6003a4b6],.worksListFullMode-leave-active[data-v-6003a4b6]{-webkit-transition:opacity .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:opacity .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:opacity .4s cubic-bezier(.19,1,.22,1),transform .4s cubic-bezier(.19,1,.22,1);transition:opacity .4s cubic-bezier(.19,1,.22,1),transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.worksListFullMode-enter-to[data-v-6003a4b6],.worksListFullMode-leave[data-v-6003a4b6]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.worksListFullMode-enter[data-v-6003a4b6],.worksListFullMode-leave-to[data-v-6003a4b6]{opacity:0;-webkit-transform:translateY(16px);transform:translateY(16px)}@media screen and (min-width:761px){.worksListFullMode-enter[data-v-6003a4b6],.worksListFullMode-leave-to[data-v-6003a4b6]{-webkit-transform:translateY(32px);transform:translateY(32px)}}.worksListFullModeIndicator__next[data-v-6003a4b6],.worksListFullModeIndicator__prev[data-v-6003a4b6]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:30px;height:30px;background-color:transparent;margin-top:-1.6%}.worksListFullModeIndicator__next[data-v-6003a4b6]:before,.worksListFullModeIndicator__prev[data-v-6003a4b6]:before{position:absolute;top:0;bottom:0;margin-top:auto;margin-bottom:auto;content:"";left:1em;z-index:3;width:6px;height:6px;-webkit-transform:translateY(-8%) rotate(-45deg);transform:translateY(-8%) rotate(-45deg);border-color:#0d0d0d;border-color:var(--color1);border-style:solid;border-width:1.4px 0 0 1.4px;-webkit-transition:border-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .2s linear,transform .4s cubic-bezier(.19,1,.22,1);transition:border-color .2s linear,transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1)}@media screen and (min-width:761px){.worksListFullModeIndicator__next[data-v-6003a4b6]:before,.worksListFullModeIndicator__prev[data-v-6003a4b6]:before{width:6px;height:6px;border-top-width:2px;border-left-width:2px}}.worksListFullModeIndicator__prev[data-v-6003a4b6]{left:-30px}@media screen and (min-width:761px){.worksListFullModeIndicator__prev[data-v-6003a4b6]{left:-36px}}.worksListFullModeIndicator__next[data-v-6003a4b6]{right:-30px;-webkit-transform:translateY(-50%) scaleX(-1);transform:translateY(-50%) scaleX(-1)}@media screen and (min-width:761px){.worksListFullModeIndicator__next[data-v-6003a4b6]{right:-36px}}.worksListFullModeHowToMove[data-v-6003a4b6]{position:absolute;left:0;right:0;margin-left:auto;margin-right:auto;bottom:80px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-transition:opacity .2s linear 2s,visibility .2s linear 2s;transition:opacity .2s linear 2s,visibility .2s linear 2s}.worksListFullModeHowToMove.is-onceMoved[data-v-6003a4b6]{opacity:0;visibility:hidden}@media screen and (min-width:761px){.worksListFullModeHowToMove[data-v-6003a4b6]{bottom:140px}}.is-desktop .worksListFullModeHowToMove[data-v-6003a4b6]{bottom:42px!important}@media screen and (min-width:761px){.is-desktop .worksListFullModeHowToMove[data-v-6003a4b6]{bottom:90px!important}}.worksListFullMode__clickNotice[data-v-6003a4b6]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);text-align:center;white-space:nowrap;font-size:12px;bottom:-28px;line-height:1.4}@media screen and (min-width:761px){.worksListFullMode__clickNotice[data-v-6003a4b6]{font-size:14px;bottom:-36px}}.is-darkMode .worksListFullMode__clickNotice[data-v-6003a4b6]{color:#f8f8f8}.worksListFullModeHowToMoveItem[data-v-6003a4b6]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 10px;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.is-desktop .worksListFullModeHowToMoveItem--swipe[data-v-6003a4b6],.worksListFullModeHowToMoveItem--arrowKey[data-v-6003a4b6],.worksListFullModeHowToMoveItem--scroll[data-v-6003a4b6]{display:none}.is-desktop .worksListFullModeHowToMoveItem--arrowKey[data-v-6003a4b6],.is-desktop .worksListFullModeHowToMoveItem--scroll[data-v-6003a4b6]{display:-webkit-box;display:-ms-flexbox;display:flex}.worksListFullModeHowToMoveItem--scroll .worksListFullModeHowToMoveItem__icon[data-v-6003a4b6]{width:30.0464px;height:30.8404px}@media screen and (min-width:1025px){.worksListFullModeHowToMoveItem--scroll .worksListFullModeHowToMoveItem__icon[data-v-6003a4b6]{width:37.558px;height:38.5505px}}.worksListFullModeHowToMoveItem--swipe .worksListFullModeHowToMoveItem__icon[data-v-6003a4b6]{width:21.54138px;height:26.1341px;margin-left:-16px;top:-4px;position:relative}@media screen and (min-width:1025px){.worksListFullModeHowToMoveItem--swipe .worksListFullModeHowToMoveItem__icon[data-v-6003a4b6]{width:31.6785px;height:38.4325px;margin-left:-18px}}.worksListFullModeHowToMoveItem--arrowKey .worksListFullModeHowToMoveItem__icon[data-v-6003a4b6]{width:47.4684px;height:30.9824px}@media screen and (min-width:1025px){.worksListFullModeHowToMoveItem--arrowKey .worksListFullModeHowToMoveItem__icon[data-v-6003a4b6]{width:59.3355px;height:38.728px}}.worksListFullModeHowToMoveItem__icon[data-v-6003a4b6]{fill:#0d0d0d;display:block}.is-darkMode .worksListFullModeHowToMoveItem__icon[data-v-6003a4b6]{fill:#f8f8f8}.worksListFullModeHowToMoveItem__label[data-v-6003a4b6]{font-size:12px;margin-left:6px;line-height:1.2;color:#0d0d0d}.is-darkMode .worksListFullModeHowToMoveItem__label[data-v-6003a4b6]{color:#f8f8f8}@media screen and (min-width:761px){.worksListFullModeHowToMoveItem__label[data-v-6003a4b6]{margin-left:8px;font-size:14px}}.worksListFullModeHowToMoveItem--arrowKey .worksListFullModeHowToMoveItem__label[data-v-6003a4b6]{margin-left:8px}@media screen and (min-width:1025px){.worksListFullModeHowToMoveItem--arrowKey .worksListFullModeHowToMoveItem__label[data-v-6003a4b6]{margin-left:10px}}', ""]),
        t.exports = e
    },
    572: function(t, e, i) {
        "use strict";
        var r = i(188);
        i.n(r).a
    },
    573: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, "[data-v-68129c30]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-68129c30]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-68129c30{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-68129c30{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@-webkit-keyframes pointerNoticeAnim-data-v-68129c30{0%{-webkit-transform:rotate(0deg) scale(1.5);transform:rotate(0deg) scale(1.5)}to{-webkit-transform:rotate(1turn) scale(1.5);transform:rotate(1turn) scale(1.5)}}@keyframes pointerNoticeAnim-data-v-68129c30{0%{-webkit-transform:rotate(0deg) scale(1.5);transform:rotate(0deg) scale(1.5)}to{-webkit-transform:rotate(1turn) scale(1.5);transform:rotate(1turn) scale(1.5)}}.pointerNotice[data-v-68129c30]{position:fixed;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:20;-webkit-transition:opacity 1.2s cubic-bezier(.19,1,.22,1);transition:opacity 1.2s cubic-bezier(.19,1,.22,1)}.is-mobile .pointerNotice[data-v-68129c30],.is-tablet .pointerNotice[data-v-68129c30]{display:none}.pointerNotice[data-v-68129c30]:not(.is-available){-webkit-transition-duration:.6s;transition-duration:.6s}.pointerNotice__square[data-v-68129c30]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:36px;height:36px}.pointerNotice__square svg[data-v-68129c30]{width:100%;height:100%;display:block;-webkit-animation:pointerNoticeAnim-data-v-68129c30 1s linear infinite;animation:pointerNoticeAnim-data-v-68129c30 1s linear infinite;-webkit-transition:fill .4s cubic-bezier(.19,1,.22,1);transition:fill .4s cubic-bezier(.19,1,.22,1)}.pointerNotice__label[data-v-68129c30]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;-webkit-transition:color .4s cubic-bezier(.19,1,.22,1);transition:color .4s cubic-bezier(.19,1,.22,1);white-space:nowrap;text-align:center;top:30px;line-height:1.2}", ""]),
        t.exports = e
    },
    574: function(t, e, i) {
        "use strict";
        var r = i(189);
        i.n(r).a
    },
    575: function(t, e, i) {
        (e = i(24)(!1)).push([t.i, '[data-v-26a2d11d]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-26a2d11d]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-26a2d11d{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-26a2d11d{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.root[data-v-26a2d11d]{position:relative;overflow:hidden}.root[data-v-26a2d11d]:before{height:100%;-webkit-transition:background-color .2s linear;transition:background-color .2s linear}.root[data-v-26a2d11d]:after,.root[data-v-26a2d11d]:before{position:fixed;left:0;top:0;content:"";width:100%;background-color:#f8f8f8;background-color:var(--color2)}.root[data-v-26a2d11d]:after{height:74px;z-index:8;-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0;-webkit-box-shadow:0 0 0 4px #f8f8f8,0 0 0 8px hsla(0,0%,97.3%,.8),0 0 0 12px hsla(0,0%,97.3%,.6),0 0 0 16px hsla(0,0%,97.3%,.4),0 0 0 20px hsla(0,0%,97.3%,.2);box-shadow:0 0 0 4px #f8f8f8,0 0 0 8px hsla(0,0%,97.3%,.8),0 0 0 12px hsla(0,0%,97.3%,.6),0 0 0 16px hsla(0,0%,97.3%,.4),0 0 0 20px hsla(0,0%,97.3%,.2);-webkit-box-shadow:0 0 0 4px var(--gradientColor1),0 0 0 8px var(--gradientColor2),0 0 0 12px var(--gradientColor3),0 0 0 16px var(--gradientColor4),0 0 0 20px var(--gradientColor5);box-shadow:0 0 0 4px var(--gradientColor1),0 0 0 8px var(--gradientColor2),0 0 0 12px var(--gradientColor3),0 0 0 16px var(--gradientColor4),0 0 0 20px var(--gradientColor5);-webkit-transition:opacity .4s cubic-bezier(.215,.61,.355,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-box-shadow .2s linear;transition:opacity .4s cubic-bezier(.215,.61,.355,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-box-shadow .2s linear;transition:opacity .4s cubic-bezier(.215,.61,.355,1),transform .4s cubic-bezier(.175,.885,.425,1.17),background-color .2s linear,box-shadow .2s linear;transition:opacity .4s cubic-bezier(.215,.61,.355,1),transform .4s cubic-bezier(.175,.885,.425,1.17),background-color .2s linear,box-shadow .2s linear,-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-box-shadow .2s linear}.root.is-displayModeFull.is-worksList[data-v-26a2d11d]:after,.root.is-index[data-v-26a2d11d]:after{display:none!important}.root.is-scrolled[data-v-26a2d11d]:after{opacity:.9;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.root.is-index[data-v-26a2d11d]{overflow:visible!important}@media screen and (min-width:761px){.root[data-v-26a2d11d]:after{height:120px}.root.is-scrolled[data-v-26a2d11d]:after{-webkit-transform:translateY(-32px);transform:translateY(-32px)}}.contents[data-v-26a2d11d]{-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.buttonContainer[data-v-26a2d11d]{position:fixed;z-index:20;width:48px;height:48px;will-change:width,height;-webkit-transition:width .4s cubic-bezier(.19,1,.22,1),height .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:width .4s cubic-bezier(.19,1,.22,1),height .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:width .4s cubic-bezier(.19,1,.22,1),height .4s cubic-bezier(.19,1,.22,1),transform .4s cubic-bezier(.19,1,.22,1);transition:width .4s cubic-bezier(.19,1,.22,1),height .4s cubic-bezier(.19,1,.22,1),transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1)}@media screen and (min-width:761px){.buttonContainer[data-v-26a2d11d]{width:56px;height:56px}}.buttonContainer--bottomRight[data-v-26a2d11d]{right:16px;bottom:56px;-webkit-transform-origin:bottom right;transform-origin:bottom right}.is-landScape .buttonContainer--bottomRight[data-v-26a2d11d]{bottom:16px}@media screen and (max-width:320px){.buttonContainer--bottomRight[data-v-26a2d11d]{bottom:16px}}@media screen and (min-width:761px){.buttonContainer--bottomRight[data-v-26a2d11d]{right:32px!important;bottom:32px!important}}.buttonContainer--bottomLeft[data-v-26a2d11d]{left:16px;bottom:56px;-webkit-transform-origin:bottom left;transform-origin:bottom left}.is-landScape .buttonContainer--bottomLeft[data-v-26a2d11d]{bottom:16px}@media screen and (max-width:320px){.buttonContainer--bottomLeft[data-v-26a2d11d]{bottom:16px}}@media screen and (min-width:761px){.buttonContainer--bottomLeft[data-v-26a2d11d]{left:32px!important;bottom:32px!important}}.buttonContainer--topRight[data-v-26a2d11d]{-webkit-transform-origin:top right;transform-origin:top right;right:16px;top:16px}.buttonContainer--topRight[data-v-26a2d11d]:before{display:none}@media screen and (min-width:761px){.buttonContainer--topRight[data-v-26a2d11d]{right:32px!important;top:32px!important}}.is-menuBottomRight .buttonScrollTop[data-v-26a2d11d]{opacity:0;visibility:hidden}.is-menuBottomRight.is-scrolled .buttonContainer--bottomRight[data-v-26a2d11d]{height:104px}.is-menuBottomRight.is-scrolled .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-56px);transform:translateY(-56px);opacity:1;visibility:visible}.is-menuBottomRight.is-scrolled.is-menuOpened .buttonContainer--bottomRight[data-v-26a2d11d]{height:48px;width:104px}.is-menuBottomRight.is-scrolled.is-menuOpened .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateX(-56px);transform:translateX(-56px)}.is-menuBottomRight.is-buttonBackAvailable .buttonContainer--bottomRight[data-v-26a2d11d]:before,.is-menuBottomRight.is-buttonBackAvailable .buttonMenu[data-v-26a2d11d],.is-menuBottomRight.is-buttonBackAvailable .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-40px);transform:translateY(-40px)}.is-menuBottomRight.is-buttonBackAvailable.is-scrolled .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-96px);transform:translateY(-96px)}.is-menuBottomRight.is-buttonBackAvailable.is-scrolled.is-menuOpened .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translate(-56px,-40px);transform:translate(-56px,-40px)}@media screen and (min-width:761px) and (max-width:1024px){.is-menuBottomRight.is-scrolled .buttonContainer--bottomRight[data-v-26a2d11d]{height:120px}.is-menuBottomRight.is-scrolled .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-64px);transform:translateY(-64px)}.is-menuBottomRight.is-scrolled.is-menuOpened .buttonContainer--bottomRight[data-v-26a2d11d]{height:56px;width:120px}.is-menuBottomRight.is-scrolled.is-menuOpened .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateX(-64px);transform:translateX(-64px)}.is-menuBottomRight.is-buttonBackAvailable.is-scrolled .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-104px);transform:translateY(-104px)}.is-menuBottomRight.is-buttonBackAvailable.is-scrolled.is-menuOpened .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translate(-64px,-40px);transform:translate(-64px,-40px)}}.is-menuBottomLeft .buttonScrollTop[data-v-26a2d11d]{opacity:0;visibility:hidden}.is-menuBottomLeft .buttonMenu[data-v-26a2d11d],.is-menuBottomLeft .buttonScrollTop[data-v-26a2d11d]{right:auto;left:0!important}.is-menuBottomLeft.is-scrolled .buttonContainer--bottomLeft[data-v-26a2d11d]{height:104px}.is-menuBottomLeft.is-scrolled .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-56px);transform:translateY(-56px);opacity:1;visibility:visible}.is-menuBottomLeft.is-scrolled.is-menuOpened .buttonContainer--bottomLeft[data-v-26a2d11d]{height:48px;width:104px}.is-menuBottomLeft.is-scrolled.is-menuOpened .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateX(56px);transform:translateX(56px)}.is-menuBottomLeft.is-buttonBackAvailable .buttonContainer--bottomLeft[data-v-26a2d11d]:before,.is-menuBottomLeft.is-buttonBackAvailable .buttonMenu[data-v-26a2d11d],.is-menuBottomLeft.is-buttonBackAvailable .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-40px);transform:translateY(-40px)}.is-menuBottomLeft.is-buttonBackAvailable.is-scrolled .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-96px);transform:translateY(-96px)}.is-menuBottomLeft.is-buttonBackAvailable.is-scrolled.is-menuOpened .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translate(56px,-40px);transform:translate(56px,-40px)}@media screen and (min-width:761px) and (max-width:1024px){.is-menuBottomLeft.is-scrolled .buttonContainer--bottomLeft[data-v-26a2d11d]{height:120px}.is-menuBottomLeft.is-scrolled .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-64px);transform:translateY(-64px)}.is-menuBottomLeft.is-scrolled.is-menuOpened .buttonContainer--bottomLeft[data-v-26a2d11d]{height:56px;width:120px}.is-menuBottomLeft.is-scrolled.is-menuOpened .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateX(64px);transform:translateX(64px)}.is-menuBottomLeft.is-buttonBackAvailable.is-scrolled .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translateY(-104px);transform:translateY(-104px)}.is-menuBottomLeft.is-buttonBackAvailable.is-scrolled.is-menuOpened .buttonScrollTop[data-v-26a2d11d]{-webkit-transform:translate(64px,-40px);transform:translate(64px,-40px)}}.is-menuTopRight .buttonContainer--bottomRight[data-v-26a2d11d]{-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);-webkit-transform:translateX(98px);transform:translateX(98px)}.is-menuTopRight.is-scrolled .buttonContainer--bottomRight[data-v-26a2d11d]{-webkit-transform:translateX(0);transform:translateX(0)}@media screen and (min-width:761px){.is-menuTopRight .buttonContainer--bottomRight[data-v-26a2d11d]{-webkit-transform:translateX(106px);transform:translateX(106px)}.is-menuTopRight.is-scrolled .buttonContainer--bottomRight[data-v-26a2d11d]{-webkit-transform:translateX(0);transform:translateX(0)}}.root.is-index:not(.is-menuBottomRight) .buttonContainer--bottomRight[data-v-26a2d11d]{-webkit-transform:translateX(106px)!important;transform:translateX(106px)!important}@media screen and (min-width:1025px){.buttonContainer--bottomRight[data-v-26a2d11d]{-webkit-transform:translateX(106px);transform:translateX(106px)}.is-scrolled .buttonContainer--bottomRight[data-v-26a2d11d]{-webkit-transform:translateX(0);transform:translateX(0)}}', ""]),
        t.exports = e
    },
    576: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, "state", (function() {
            return r
        }
        )),
        i.d(e, "mutations", (function() {
            return a
        }
        ));
        var r = function() {
            return {
                isMenuOpened: !1,
                layoutMode: "s",
                isScrolled: !1,
                scrollTop: 0,
                windowWidth: 0,
                windowHeight: 0,
                isRootLoaded: !1,
                isLogoShown: !1,
                isYouTubeAvailable: !0,
                isButtonBackAvailable: !1,
                isSettingsOpened: !1,
                supportsBlendMode: !0,
                buttonBackLabel: "back",
                buttonBackPath: "/",
                logoTxt: "kdsuzuki",
                currentId: "index",
                prevId: "index",
                history: [],
                isWorksListFullModeHoverd: !1,
                pointerColor: "#ffffff",
                isAlertModalOpened: !1,
                alertModalTxt: "error",
                alertModalMode: "alert",
                alertModalLabels: {
                    ok: "ok",
                    cancel: "cancel"
                },
                alertModalConfirmCallback: null,
                alertModalCancelCallback: null,
                displayMode: "simple",
                menuPosition: "bottomRight",
                autoDarkMode: !1,
                isDarkMode: !1
            }
        }
          , a = {
            setMenuOpened: function(t, e) {
                t.isMenuOpened = e
            },
            setSettingsOpened: function(t, e) {
                t.isSettingsOpened = e
            },
            setScrollTop: function(t, e) {
                t.scrollTop = e
            },
            setLayoutMode: function(t, e) {
                t.layoutMode = e
            },
            setWindowSize: function(t) {
                t.windowWidth = window.innerWidth,
                t.windowHeight = window.innerHeight
            },
            setScrolled: function(t, e) {
                t.isScrolled = e
            },
            setRootLoaded: function(t, e) {
                t.isRootLoaded = e
            },
            setCurrentId: function(t, e) {
                t.currentId = e
            },
            setPrevId: function(t, e) {
                t.prevId = e
            },
            setLogoShown: function(t, e) {
                t.isLogoShown = e
            },
            setLogoTxt: function(t, e) {
                t.logoTxt = e
            },
            setYouTubeAvailable: function(t, e) {
                t.isDarkMode = e
            },
            setButtonBack: function(t, e) {
                var i = e.isAvailable
                  , r = e.label
                  , a = void 0 === r ? "" : r
                  , o = e.path
                  , n = void 0 === o ? "" : o;
                t.isButtonBackAvailable = i,
                n && (t.buttonBackPath = n),
                a && (t.buttonBackLabel = a)
            },
            pushHistory: function(t, e) {
                var i = t.history.length;
                0 != i && t.history[i - 1].path === e.path || t.history.push(e)
            },
            popHistory: function(t) {
                t.history.pop()
            },
            setDisplayMode: function(t, e) {
                t.displayMode = e
            },
            setMenuPosition: function(t, e) {
                t.menuPosition = e
            },
            setDarkMode: function(t, e) {
                t.isDarkMode = e
            },
            setAutoDarkMode: function(t, e) {
                t.autoDarkMode = e
            },
            setSupportsBlenMode: function(t, e) {
                t.supportsBlendMode = e
            },
            setCurrentWorksColors: function(t, e) {
                t.currentWorksColors = e
            },
            setAlertModal: function(t, e) {
                var i = e.isOpened
                  , r = e.mode
                  , a = void 0 === r ? "" : r
                  , o = e.txt
                  , n = void 0 === o ? "" : o
                  , s = e.labels
                  , l = e.confirmCallback
                  , c = e.cancelCallback;
                t.isAlertModalOpened = i,
                n && (t.alertModalTxt = n),
                a && (t.alertModalMode = a),
                s && (t.alertModalLabels = s),
                t.alertModalConfirmCallback = l,
                t.alertModalCancelCallback = c
            },
            setWorksListFullModeHoverd: function(t, e) {
                t.isWorksListFullModeHoverd = e
            },
            setPointerColor: function(t, e) {
                t.pointerColor = e
            }
        }
    },
    72: function(t, e, i) {
        "use strict";
        i.d(e, "b", (function() {
            return Ci
        }
        )),
        i.d(e, "a", (function() {
            return it
        }
        ));
        i(73);
        var r = i(1)
          , a = i.n(r)
          , o = i(9)
          , n = i.n(o)
          , s = i(18)
          , l = i.n(s)
          , c = i(87)
          , d = i.n(c)
          , u = i(20)
          , f = i.n(u)
          , h = i(68)
          , m = i.n(h)
          , p = i(11)
          , b = i.n(p)
          , g = (i(39),
        i(86))
          , v = i.n(g)
          , w = i(97)
          , k = i.n(w)
          , x = i(69)
          , _ = i.n(x)
          , y = i(14)
          , M = i.n(y)
          , C = i(70)
          , T = i.n(C)
          , z = i(43)
          , S = i.n(z)
          , I = i(71)
          , B = i.n(I)
          , L = i(55)
          , A = i.n(L)
          , O = i(7)
          , G = i(99)
          , E = i(2)
          , X = i(301)
          , P = i(232)
          , R = i.n(P)
          , D = i(101)
          , F = i.n(D)
          , W = (i(40),
        i(120))
          , N = i(10)
          , V = i(190)
          , j = i.n(V)
          , U = i(303)
          , $ = i.n(U);
        "scrollRestoration"in window.history && (window.history.scrollRestoration = "manual",
        window.addEventListener("beforeunload", (function() {
            window.history.scrollRestoration = "auto"
        }
        )),
        window.addEventListener("load", (function() {
            window.history.scrollRestoration = "manual"
        }
        )));
        var H = function() {}
          , Y = W.a.prototype.push;
        W.a.prototype.push = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H
              , i = arguments.length > 2 ? arguments[2] : void 0;
            return Y.call(this, t, e, i)
        }
        ,
        E.a.use(W.a);
        var q = {
            mode: "history",
            base: decodeURI("/"),
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(t, e, i) {
                var r = !1
                  , a = Object(N.e)(t);
                (a.length < 2 && $()(a).call(a, (function(t) {
                    return !1 !== t.options.scrollToTop
                }
                )) || j()(a).call(a, (function(t) {
                    return t.options.scrollToTop
                }
                ))) && (r = {
                    x: 0,
                    y: 0
                }),
                i && (r = i);
                var o = window.$nuxt;
                return t.path === e.path && t.hash !== e.hash && o.$nextTick((function() {
                    return o.$emit("triggerScroll")
                }
                )),
                new n.a((function(e) {
                    o.$once("triggerScroll", (function() {
                        if (t.hash) {
                            var i = t.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (i = "#" + window.CSS.escape(i.substr(1)));
                            try {
                                document.querySelector(i) && (r = {
                                    selector: i
                                })
                            } catch (t) {}
                        }
                        e(r)
                    }
                    ))
                }
                ))
            },
            routes: [{
                path: "/about",
                component: function() {
                    return Object(N.j)(i.e(3).then(i.bind(null, 750)))
                },
                name: "about"
            }, {
                path: "/works",
                component: function() {
                    return Object(N.j)(i.e(5).then(i.bind(null, 753)))
                },
                children: [{
                    path: "",
                    component: function() {
                        return Object(N.j)(Promise.all([i.e(0), i.e(8)]).then(i.bind(null, 752)))
                    },
                    name: "works"
                }, {
                    path: "category/:category?",
                    component: function() {
                        return Object(N.j)(Promise.all([i.e(0), i.e(7)]).then(i.bind(null, 751)))
                    },
                    name: "works-category-category"
                }, {
                    path: "role/:role?",
                    component: function() {
                        return Object(N.j)(Promise.all([i.e(0), i.e(9)]).then(i.bind(null, 755)))
                    },
                    name: "works-role-role"
                }, {
                    path: "tag/:tag?",
                    component: function() {
                        return Object(N.j)(Promise.all([i.e(0), i.e(10)]).then(i.bind(null, 754)))
                    },
                    name: "works-tag-tag"
                }, {
                    path: ":id",
                    component: function() {
                        return Object(N.j)(i.e(6).then(i.bind(null, 748)))
                    },
                    name: "works-id"
                }]
            }, {
                path: "/",
                component: function() {
                    return Object(N.j)(i.e(4).then(i.bind(null, 749)))
                },
                name: "index"
            }],
            fallback: !1
        };
        function Q() {
            return new W.a(q)
        }
        var Z = {
            name: "NuxtChild",
            functional: !0,
            props: {
                nuxtChildKey: {
                    type: String,
                    default: ""
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                }
            },
            render: function(t, e) {
                var i = e.parent
                  , r = e.data
                  , a = e.props;
                r.nuxtChild = !0;
                for (var o = i, n = i.$nuxt.nuxt.transitions, s = i.$nuxt.nuxt.defaultTransition, c = 0; i; )
                    i.$vnode && i.$vnode.data.nuxtChild && c++,
                    i = i.$parent;
                r.nuxtChildDepth = c;
                var d = n[c] || s
                  , u = {};
                M()(J).call(J, (function(t) {
                    void 0 !== d[t] && (u[t] = d[t])
                }
                ));
                var f = {};
                M()(K).call(K, (function(t) {
                    var e;
                    "function" == typeof d[t] && (f[t] = l()(e = d[t]).call(e, o))
                }
                ));
                var h = f.beforeEnter;
                if (f.beforeEnter = function(t) {
                    if (window.$nuxt.$nextTick((function() {
                        window.$nuxt.$emit("triggerScroll")
                    }
                    )),
                    h)
                        return h.call(o, t)
                }
                ,
                !1 === d.css) {
                    var m = f.leave;
                    (!m || m.length < 2) && (f.leave = function(t, e) {
                        m && m.call(o, t),
                        o.$nextTick(e)
                    }
                    )
                }
                var p = t("routerView", r);
                return a.keepAlive && (p = t("keep-alive", {
                    props: a.keepAliveProps
                }, [p])),
                t("transition", {
                    props: u,
                    on: f
                }, [p])
            }
        }
          , J = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"]
          , K = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
          , tt = {
            name: "NuxtError",
            props: {
                error: {
                    type: Object,
                    default: null
                }
            },
            computed: {
                statusCode: function() {
                    return this.error && this.error.statusCode || 500
                },
                message: function() {
                    return this.error.message || "Error"
                }
            },
            head: function() {
                return {
                    title: this.message,
                    meta: [{
                        name: "viewport",
                        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                    }]
                }
            }
        }
          , et = (i(467),
        i(17))
          , it = Object(et.a)(tt, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "__nuxt-error-page"
            }, [i("div", {
                staticClass: "error"
            }, [i("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "90",
                    height: "90",
                    fill: "#DBE1EC",
                    viewBox: "0 0 48 48"
                }
            }, [i("path", {
                attrs: {
                    d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                }
            })]), t._v(" "), i("div", {
                staticClass: "title"
            }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? i("p", {
                staticClass: "description"
            }, [i("NuxtLink", {
                staticClass: "error-link",
                attrs: {
                    to: "/"
                }
            }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
        }
        ), [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "logo"
            }, [e("a", {
                attrs: {
                    href: "https://nuxtjs.org",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [this._v("Nuxt.js")])])
        }
        ], !1, null, null, null).exports
          , rt = (i(61),
        i(74),
        i(89),
        i(88))
          , at = {
            name: "Nuxt",
            components: {
                NuxtChild: Z,
                NuxtError: it
            },
            props: {
                nuxtChildKey: {
                    type: String,
                    default: void 0
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                },
                name: {
                    type: String,
                    default: "default"
                }
            },
            errorCaptured: function(t) {
                this.displayingNuxtError && (this.errorFromNuxtError = t,
                this.$forceUpdate())
            },
            computed: {
                routerViewKey: function() {
                    if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                        return this.nuxtChildKey || Object(N.b)(this.$route.matched[0].path)(this.$route.params);
                    var t = Object(rt.a)(this.$route.matched, 1)[0];
                    if (!t)
                        return this.$route.path;
                    var e = t.components.default;
                    if (e && e.options) {
                        var i = e.options;
                        if (i.key)
                            return "function" == typeof i.key ? i.key(this.$route) : i.key
                    }
                    return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                }
            },
            beforeCreate: function() {
                E.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
            },
            render: function(t) {
                var e = this;
                return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                    return e.errorFromNuxtError = !1
                }
                )),
                t("div", {}, [t("h2", "An error occured while showing the error page"), t("p", "Unfortunately an error occured and while showing the error page another error occured"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                    props: {
                        to: "/"
                    }
                }, "Go back to home")])) : (this.displayingNuxtError = !0,
                this.$nextTick((function() {
                    return e.displayingNuxtError = !1
                }
                )),
                t(it, {
                    props: {
                        error: this.nuxt.err
                    }
                })) : t("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props
                })
            }
        }
          , ot = (i(108),
        i(111),
        i(469),
        i(471),
        i(473),
        i(475),
        i(36))
          , nt = i.n(ot)
          , st = {
            props: {
                txt: String,
                rootElement: {
                    default: "h1"
                }
            },
            date: function() {
                return {
                    isShown: !1
                }
            },
            computed: {
                isLoaded: function() {
                    return this.$store.state.isRootLoaded
                },
                classObj: function() {
                    return {
                        "is-shown": this.$store.state.isLogoShown
                    }
                }
            },
            methods: {
                getSquareSVG: function() {
                    return this.$refs.squareSVG
                }
            }
        }
          , lt = (i(478),
        Object(et.a)(st, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e(this.rootElement, {
                tag: "component",
                staticClass: "logo",
                class: this.classObj
            }, [e("NuxtLink", {
                staticClass: "logo_inner",
                attrs: {
                    to: "/"
                }
            }, [e("span", {
                staticClass: "label"
            }, [this._v(this._s(this.txt))]), e("div", {
                staticClass: "chars"
            }, [e("div", {
                staticClass: "char char--square"
            }, [e("span", {
                staticClass: "char__inner"
            }, [e("svg", {
                ref: "squareSVG"
            }, [e("use", {
                attrs: {
                    "xlink:href": "#charSquare"
                }
            })])]), e("span", {
                staticClass: "char__underline"
            })]), this._l(this.txt, (function(t) {
                console.log(t,"ttttttttt")
                return e("div", {
                    staticClass: "char",
                    class: "char--" + t
                }, [e("span", {
                    staticClass: "char__inner"
                }, [e("svg", [e("use", {
                    attrs: {
                        "xlink:href": "#char" + t.toUpperCase()
                    }
                })])]), e("span", {
                    staticClass: "char__underline"
                })])
            }
            ))], 2)])], 1)
        }
        ), [], !1, null, "600129f9", null).exports)
          , ct = i(0)
          , dt = i(305);
        ct.B.registerPlugin(dt.a);
        var ut = {
            components: {
                Logo: lt
            },
            data: function() {
                return {
                    logoTxt: "kdsuzuki",
                    isStarted: !1,
                    isLoadCompleted: !1,
                    squareTweenObj: null,
                    squareSVG: null,
                    toSkip: !1
                }
            },
            computed: {
                isLoaded: function() {
                    return this.$store.state.isRootLoaded
                },
                classObj: function() {
                    return {
                        "is-started": this.isStarted,
                        "is-loaded": this.isLoaded
                    }
                }
            },
            mounted: function() {
                var t = this;
                return Object(O.a)(a.a.mark((function e() {
                    return a.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.$localStorage.init(),
                                "1" === t.$localStorage.getLocalStorage("onceVisited") ? t.toSkip = !0 : t.$localStorage.setLocalStorage("onceVisited", "1"),
                                t.squareSVG = t.$refs.logo.getSquareSVG(),
                                t.rotateSquare();
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            updated: function() {
                var t = this;
                return Object(O.a)(a.a.mark((function e() {
                    return a.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.isLoaded && !t.isStarted && t.start();
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            methods: {
                rotateSquare: function() {
                    this.squareTweenObj = ct.B.fromTo(this.squareSVG, 1.2, {
                        y: 0,
                        rotation: 0
                    }, {
                        y: 0,
                        rotation: 360,
                        ease: ct.g.easeInOut,
                        yoyo: !0,
                        repeat: -1
                    })
                },
                start: function() {
                    var t = this;
                    if (this.toSkip)
                        return this.$store.commit("setLogoShown", !0),
                        void (this.isLoadCompleted = !0);
                    this.isStarted = !0,
                    this.squareTweenObj.kill(),
                    this.squareTweenObj = ct.B.timeline().to(this.squareSVG, .6, {
                        ease: ct.c.easeOut,
                        rotation: 0,
                        overwrite: !0
                    }).add((function() {
                        t.$store.commit("setLogoShown", !0)
                    }
                    )).add((function() {
                        t.isLoadCompleted = !0
                    }
                    ), "+=1.6")
                }
            }
        }
          , ft = (i(510),
        i(512),
        Object(et.a)(ut, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("transition", {
                attrs: {
                    name: "loading",
                    duraiton: "200"
                }
            }, [this.isLoadCompleted ? this._e() : e("div", {
                staticClass: "loading",
                class: this.classObj
            }, [e("Logo", {
                ref: "logo",
                staticClass: "loading__logo",
                attrs: {
                    txt: this.logoTxt,
                    rootElement: "div"
                }
            })], 1)])
        }
        ), [], !1, null, "3e1dc8b2", null).exports)
          , ht = {}
          , mt = (i(514),
        Object(et.a)(ht, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("svg", [e("defs", [e("symbol", {
                attrs: {
                    id: "logo",
                    viewBox: "0 0 389.244 100"
                }
            }, [e("path", {
                attrs: {
                    d: "M0,90.413h45.908V100H0L0,90.413L0,90.413z M45.908,33.827v45.908v0.078H0v-0.078V33.827H45.908z M36.321,43.414H9.587v26.734h26.734V43.414z M66.329,100h38.036v-9.587H66.329V100z M76.617,33.749h-10.21V59.47 c0,4.053,0.39,7.093,1.247,9.197c0.857,2.26,2.416,4.365,4.521,6.235c3.429,3.04,7.872,4.521,13.172,4.521 c5.378,0,9.743-1.481,13.25-4.521c2.104-1.871,3.585-3.897,4.443-6.235c0.857-2.572,1.325-5.612,1.325-9.197V33.749H94.076v25.565 c0,7.405-2.884,11.068-8.73,11.068s-8.73-3.663-8.73-11.068V33.827V33.749z M125.097,90.413V100h38.348v-9.587h-38.27H125.097z M125.253,33.827v44.349h10.288V56.742c0-5.534,0.701-9.353,2.104-11.613c1.403-2.26,3.819-3.352,7.249-3.352 c3.118,0,5.3,0.857,6.469,2.572c1.169,1.715,1.793,4.754,1.793,9.119v24.864h10.288v-27.28c0-6.235-1.247-10.756-3.741-13.562 c-2.884-3.274-6.937-4.91-12.081-4.91c-4.521,0-8.574,1.793-12.159,5.378v-4.131h-10.288H125.253z M183.476,100h31.723v-9.587 h-31.723V100z M199.61,32.58c-3.897,0-7.171,1.325-9.899,3.819c-2.65,2.494-3.975,5.69-3.975,9.587c0,2.962,0.779,5.3,2.338,7.171 c1.247,1.403,3.352,2.884,6.313,4.365c1.013,0.468,2.104,1.013,3.118,1.481c1.013,0.468,2.104,0.935,3.118,1.481 c2.728,1.637,4.053,3.352,4.053,5.144c0,3.196-1.715,4.754-5.222,4.754c-1.715,0-3.196-0.546-4.443-1.715 c-0.624-0.546-1.559-1.949-2.806-4.053l-8.73,4.053c3.118,7.249,8.34,10.912,15.822,10.912c4.365,0,8.106-1.403,11.146-4.131 c3.196-2.884,4.754-6.469,4.754-10.756c0-3.352-0.935-6.079-2.806-8.028s-5.534-4.131-10.99-6.469 c-3.975-1.637-6.002-3.352-6.002-5.066c0-0.935,0.39-1.793,1.013-2.416c0.701-0.624,1.481-0.935,2.416-0.935 c2.027,0,3.663,1.403,4.988,4.131l8.496-4.521C209.587,35.542,205.3,32.58,199.61,32.58z M235.23,100h38.27v-9.587h-38.27V100z M235.23,78.332h10.288V56.82c0-5.456,0.779-9.353,2.182-11.613c1.403-2.26,3.975-3.352,7.56-3.352c2.806,0,4.832,0.779,6.08,2.416 c1.247,1.559,1.871,4.131,1.871,7.716v26.345H273.5v-27.28c0-6.235-1.247-10.756-3.819-13.562c-3.04-3.274-7.093-4.91-12.081-4.91 c-4.365,0-8.418,1.637-12.081,4.91V1.169H235.23V78.332z M294.232,100h10.288v-9.587h-10.288V100z M294.622,20.031 c1.325,1.325,2.884,1.949,4.754,1.949c1.793,0,3.429-0.624,4.677-1.949c1.325-1.325,1.949-2.884,1.949-4.754 c0-1.793-0.624-3.429-1.949-4.677c-1.325-1.325-2.884-1.949-4.754-1.949c-1.793,0-3.352,0.624-4.677,1.949 s-1.949,2.884-1.949,4.677C292.673,17.225,293.375,18.784,294.622,20.031z M294.232,78.254h10.288V33.749h-10.288V78.254z M323.772,100h25.175v-9.587h-25.175V100z M349.104,43.414v-9.587H337.88V19.096c0-3.663,0.312-6.157,0.935-7.405 c0.624-1.325,1.871-1.949,3.663-1.949c1.403,0,3.196,0.624,5.456,1.715l1.013,0.546V1.637C346.22,0.546,343.882,0,342.089,0 c-5.144,0-9.041,1.637-11.691,4.832c-2.026,2.26-2.962,6.235-2.962,11.847v17.147h-3.663v9.587h3.663v34.918h10.288V43.414H349.104 z M366.563,100h22.681v-9.587h-22.681V100z M389.244,43.414v-9.587h-8.028v-16.29h-10.288v16.29h-4.365v9.587h4.365v34.918h10.288 V43.414H389.244z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "logoIcon",
                    viewBox: "0 0 69.376 100"
                }
            }, [e("path", {
                attrs: {
                    d: "M0,85.512h69.376V100H0L0,85.512L0,85.512z M69.376,0v69.376v0.118H0v-0.118V0H69.376z M54.888,14.488h-40.4 v40.4h40.4V14.488z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconSettings",
                    viewBox: "0 0 100 100.009"
                }
            }, [e("path", {
                attrs: {
                    d: "M98.178,41.788l-12.849-2.1c-0.752-2.578-1.781-5.057-3.068-7.403l7.501-10.69 c0.607-0.863,0.502-2.039-0.243-2.787l-8.455-8.451c-0.754-0.752-1.941-0.85-2.807-0.226l-10.529,7.568 c-2.368-1.309-4.868-2.348-7.462-3.102L58.025,1.8C57.842,0.761,56.94,0,55.883,0H43.926c-1.065,0-1.974,0.772-2.146,1.824 l-2.078,12.727c-2.609,0.75-5.113,1.778-7.472,3.07L21.728,10.12c-0.867-0.62-2.048-0.52-2.802,0.23l-8.451,8.451 c-0.746,0.746-0.85,1.92-0.243,2.783l7.39,10.573c-1.315,2.381-2.363,4.9-3.126,7.522L1.818,41.791C0.77,41.965,0,42.873,0,43.934 v11.958c0,1.054,0.757,1.957,1.794,2.141l12.677,2.248c0.759,2.615,1.807,5.135,3.126,7.522l-7.481,10.464 c-0.617,0.863-0.52,2.048,0.23,2.802l8.453,8.459c0.746,0.746,1.922,0.85,2.785,0.243l10.588-7.416 c2.376,1.307,4.887,2.344,7.49,3.096l2.122,12.742c0.172,1.046,1.078,1.813,2.141,1.813h11.958c1.054,0,1.957-0.757,2.139-1.794 l2.272-12.805c2.607-0.767,5.105-1.811,7.457-3.12l10.664,7.481c0.865,0.611,2.039,0.504,2.787-0.241l8.453-8.459 c0.752-0.754,0.85-1.944,0.226-2.809l-7.605-10.56c1.289-2.348,2.313-4.831,3.059-7.409l12.866-2.259 c1.041-0.183,1.798-1.087,1.798-2.141V43.934C100.002,42.869,99.23,41.96,98.178,41.788z M50,65.223 c-8.405,0-15.219-6.814-15.219-15.219S41.595,34.786,50,34.786s15.219,6.814,15.219,15.219S58.405,65.223,50,65.223z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconScroll",
                    viewBox: "0 0 75.116 77.101"
                }
            }, [e("path", {
                attrs: {
                    d: "M24.568,77.101c-13.448,0-24.426-10.942-24.472-24.391L0,24.559C-0.047,11.065,10.895,0.046,24.39,0 c13.534,0,24.513,10.94,24.559,24.391l0.096,28.153c0.023,6.51-2.51,12.658-7.13,17.311c-4.62,4.651-10.75,7.226-17.26,7.247H24.568 z M24.402,3.542c-5.583,0.019-10.83,2.218-14.775,6.19c-3.944,3.972-6.106,9.233-6.087,14.816l0.097,28.151 c0.039,11.503,9.429,20.862,20.933,20.862c5.655-0.019,10.903-2.218,14.848-6.19c3.944-3.972,6.106-9.233,6.087-14.816 l-0.097-28.153c-0.04-11.503-9.429-20.86-20.931-20.86H24.402z M24.478,27.148c-1.212,0-2.201-0.984-2.205-2.197l-0.035-10.323 c-0.002-0.587,0.224-1.142,0.64-1.56c0.414-0.416,0.967-0.647,1.555-0.649c1.219,0,2.207,0.984,2.21,2.195l0.035,10.323 c0.005,1.215-0.98,2.207-2.196,2.21H24.478z M74.621,52.363c-0.316-0.313-0.735-0.485-1.18-0.485c-0.449,0-0.871,0.175-1.188,0.493 l-5.028,5.062l-0.073-21.14c0,0,0-0.001,0-0.001l-0.058-16.916l5.062,5.029c0.317,0.313,0.736,0.485,1.181,0.485 c0.45,0,0.872-0.177,1.189-0.495c0.315-0.317,0.487-0.739,0.485-1.188c0-0.445-0.176-0.865-0.494-1.182l-7.741-7.688 c-0.317-0.313-0.736-0.485-1.181-0.485c-0.45,0-0.872,0.177-1.189,0.495l-7.891,7.945c-0.316,0.319-0.488,0.739-0.486,1.186 c0.002,0.449,0.177,0.869,0.494,1.184c0.317,0.313,0.736,0.485,1.181,0.485c0.45,0,0.871-0.175,1.188-0.493l4.854-4.889 l0.072,20.764c0,0,0,0,0,0l0.056,16.539l-4.888-4.854c-0.316-0.313-0.735-0.485-1.179-0.485c-0.45,0-0.872,0.175-1.19,0.493 c-0.315,0.319-0.487,0.739-0.486,1.186c0.002,0.449,0.177,0.869,0.495,1.184l7.945,7.892c0.316,0.313,0.735,0.485,1.179,0.485 c0.45,0,0.872-0.175,1.189-0.493l7.689-7.742c0.316-0.319,0.488-0.739,0.486-1.186C75.115,53.1,74.939,52.68,74.621,52.363z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconArrowKey",
                    viewBox: "0 0 118.671 77.456"
                }
            }, [e("path", {
                attrs: {
                    d: "M71.423,36.241H47.247c-3.326,0-6.032-2.706-6.032-6.033V6.033C41.215,2.706,43.921,0,47.247,0h24.176 c3.326,0,6.032,2.706,6.032,6.033v24.174C77.456,33.534,74.749,36.241,71.423,36.241z M47.247,3.553 c-1.367,0-2.479,1.113-2.479,2.48v24.174c0,1.367,1.112,2.48,2.479,2.48h24.176c1.367,0,2.479-1.113,2.479-2.48V6.033 c0-1.367-1.112-2.48-2.479-2.48H47.247z M58.834,13.156l-4.683,8.111c-0.223,0.386,0.056,0.868,0.501,0.868h9.366 c0.445,0,0.723-0.482,0.501-0.868l-4.683-8.111C59.614,12.77,59.057,12.77,58.834,13.156z M47.247,41.215h24.176 c3.326,0,6.032,2.706,6.032,6.033v24.174c0,3.327-2.706,6.033-6.032,6.033H47.247c-3.326,0-6.032-2.706-6.032-6.033V47.248 C41.215,43.921,43.921,41.215,47.247,41.215z M71.423,73.903c1.367,0,2.479-1.113,2.479-2.48V47.248c0-1.367-1.112-2.48-2.479-2.48 H47.247c-1.367,0-2.479,1.113-2.479,2.48v24.174c0,1.367,1.112,2.48,2.479,2.48L71.423,73.903L71.423,73.903z M59.836,64.3 l4.683-8.111c0.223-0.386-0.056-0.868-0.501-0.868h-9.366c-0.445,0-0.723,0.482-0.501,0.868l4.683,8.111 C59.057,64.686,59.614,64.686,59.836,64.3z M36.241,47.247v24.176c0,3.326-2.706,6.032-6.033,6.032H6.033 C2.706,77.456,0,74.749,0,71.423V47.247c0-3.326,2.706-6.032,6.033-6.032h24.174C33.534,41.215,36.241,43.921,36.241,47.247z M3.553,71.423c0,1.367,1.113,2.479,2.48,2.479h24.174c1.367,0,2.48-1.112,2.48-2.479V47.247c0-1.367-1.113-2.479-2.48-2.479H6.033 c-1.367,0-2.48,1.112-2.48,2.479V71.423z M12.96,59.836l8.111,4.683c0.386,0.223,0.868-0.056,0.868-0.501v-9.366 c0-0.445-0.482-0.723-0.868-0.501l-8.111,4.683C12.574,59.057,12.574,59.614,12.96,59.836z M82.43,71.423V47.247 c0-3.326,2.706-6.032,6.033-6.032h24.174c3.327,0,6.033,2.706,6.033,6.032v24.176c0,3.326-2.706,6.032-6.033,6.032H88.463 C85.136,77.456,82.43,74.749,82.43,71.423z M115.118,47.247c0-1.367-1.113-2.479-2.48-2.479H88.463c-1.367,0-2.48,1.112-2.48,2.479 v24.176c0,1.367,1.113,2.479,2.48,2.479h24.174c1.367,0,2.48-1.112,2.48-2.479L115.118,47.247L115.118,47.247z M105.712,58.834 L97.6,54.151c-0.386-0.223-0.868,0.056-0.868,0.501v9.366c0,0.445,0.482,0.723,0.868,0.501l8.111-4.683 C106.097,59.614,106.097,59.057,105.712,58.834z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconSwipe",
                    viewBox: "0 0 63.357 76.865"
                }
            }, [e("path", {
                attrs: {
                    d: "M62.857,37.865c-0.842-4.981-3.356-7.588-5.316-8.899c-1.912-1.278-3.899-1.771-5.449-1.936 c-1.998-2.674-4.875-4.133-8.19-4.133c-0.728,0-1.468,0.069-2.212,0.208c-1.968-2.249-4.672-3.474-7.718-3.474 c-0.056,0-0.112,0.001-0.169,0.001l-0.011-9.359h11.577l-4.34,4.34c-0.267,0.267-0.413,0.62-0.413,0.998 c0,0.378,0.148,0.733,0.413,1c0.268,0.267,0.623,0.413,1.001,0.413c0.377,0,0.732-0.146,0.999-0.413l6.916-6.915 c0.551-0.551,0.552-1.449,0.001-1.999l-6.738-6.738c-0.267-0.267-0.622-0.414-1-0.414c-0.377,0-0.732,0.148-0.999,0.414 c-0.268,0.267-0.415,0.622-0.414,1c0,0.378,0.147,0.731,0.414,0.998l4.491,4.492H33.681c-0.245-2.094-1.137-3.958-2.651-5.302 C29.473,0.761,27.416,0,25.238,0c-2.333,0-4.573,0.902-6.145,2.476c-1.325,1.327-2.088,3.038-2.308,4.97H4.658L9.15,2.955 c0.267-0.267,0.413-0.62,0.413-0.998c0.001-0.378-0.147-0.733-0.414-1C8.882,0.691,8.527,0.543,8.15,0.543 c-0.378,0-0.732,0.146-0.999,0.414L0.413,7.696c-0.551,0.551-0.551,1.449,0,1.999l6.915,6.915c0.268,0.267,0.623,0.413,1,0.413 c0.378,0,0.733-0.146,1-0.413c0.267-0.267,0.414-0.622,0.414-1c0-0.378-0.147-0.731-0.414-0.998l-4.339-4.34h11.701l0.018,14.295 l0.012,10.158c-2.284,1.221-3.864,3.155-4.596,5.644c-1.128,3.835-0.229,8.773,2.748,15.099c1.959,4.162,4.311,7.804,5.437,9.464 l0.499,6.643c0.223,2.966,2.728,5.29,5.702,5.29l23.674-0.029c2.856-0.004,5.29-2.142,5.662-4.974l0.92-7.002 C62.354,56.097,64.404,47.015,62.857,37.865z M53.551,63.179c-0.17,0.263-0.283,0.561-0.323,0.872l-0.964,7.342 c-0.137,1.047-1.029,1.766-2.085,1.767l-23.667-0.035c-0.001,0-0.002,0-0.003,0c-1.101,0-2.017-0.785-2.1-1.884l-0.529-7.014 c-0.028-0.372-0.153-0.712-0.365-1.019c-2.166-3.148-14.262-21.506-4.467-25.601c0.78-0.326,1.285-1.086,1.284-1.931 c-0.006-5.001-0.026-21.595-0.033-27.122c-0.004-3.295,2.467-4.944,4.939-4.944c2.467,0,4.934,1.644,4.938,4.933l0.015,12.729 c0.002,1.179,0.961,2.103,2.099,2.103c0.109,0,0.22-0.008,0.331-0.026c0.418-0.066,0.873-0.108,1.349-0.108 c1.778,0,3.852,0.595,5.441,2.797c0.395,0.547,1.027,0.846,1.682,0.846c0.184,0,0.37-0.024,0.554-0.072 c0.623-0.165,1.403-0.305,2.253-0.305c1.857,0,4.048,0.67,5.663,3.215c0.324,0.51,0.874,0.828,1.478,0.85 c2.134,0.077,7.089,1.012,8.253,7.893C60.374,44.845,59.877,53.402,53.551,63.179z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconBlank",
                    viewBox: "0 0 99 99"
                }
            }, [e("path", {
                attrs: {
                    d: "M22,0v22H0v77h77V77h22V0H22z M63,63v14v8H14V36h8h14h27V63z M85,63h-8V22H36v-8h49V63z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconTwitter",
                    viewBox: "0 0 100 81.271"
                }
            }, [e("path", {
                attrs: {
                    d: "M31.449,81.271c37.737,0,58.374-31.264,58.374-58.374c0-0.888-0.018-1.773-0.059-2.652 c4.006-2.896,7.488-6.509,10.235-10.623c-3.676,1.633-7.632,2.734-11.782,3.23c4.236-2.54,7.488-6.559,9.022-11.349 c-3.965,2.35-8.354,4.06-13.027,4.98C80.468,2.494,75.136,0,69.236,0c-11.331,0-20.52,9.188-20.52,20.515 c0,1.61,0.18,3.176,0.532,4.678C32.198,24.336,17.078,16.171,6.96,3.758c-1.764,3.031-2.779,6.554-2.779,10.312 c0,7.118,3.622,13.402,9.13,17.078c-3.365-0.104-6.527-1.028-9.292-2.567c-0.005,0.086-0.005,0.172-0.005,0.262 c0,9.937,7.073,18.233,16.46,20.114c-1.723,0.469-3.536,0.722-5.408,0.722c-1.322,0-2.607-0.131-3.857-0.37 c2.612,8.151,10.185,14.083,19.166,14.25C23.352,69.06,14.507,72.34,4.894,72.34c-1.655,0-3.288-0.095-4.894-0.284 C9.08,77.874,19.861,81.271,31.449,81.271"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconFacebook",
                    viewBox: "0 0 51.932 100"
                }
            }, [e("path", {
                attrs: {
                    d: "M72 80 L -20 80 L -20 75 L 72 75z M 72 75 L 72 15 L 67 15 L 67 75zM 67 15 L -20 15 L -20 20 L 67 20zM -20 20 L -20 75 L -15 75 L -15 20zM14 60 L 14 35 L 43 47.5z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconNote",
                    viewBox: "0 0 89.596 100"
                }
            }, [e("path", {
                attrs: {
                    d: "M89.589,50.143c0-14.577,0.016-29.154-0.011-43.731c-0.008-4.032-2.23-6.386-6.12-6.393 C64.76-0.013,46.06,0.014,27.361,0c-2.179-0.002-3.97,0.822-5.413,2.374C15.562,9.24,9.225,16.152,2.822,23.003 C0.819,25.146-0.001,27.645,0,30.509C0.009,51.179-0.002,71.85,0.019,92.521c0.005,5.124,2.38,7.474,7.454,7.475 c24.912,0.005,49.825,0.006,74.737,0c5.281-0.001,7.379-2.1,7.382-7.376C89.599,78.461,89.595,64.302,89.589,50.143z M77.08,49.932 c0,11.59,0.003,23.179-0.002,34.769c-0.001,2.764-0.063,2.828-2.797,2.828c-19.595,0.004-39.19,0.004-58.785-0.001 c-2.614-0.001-2.705-0.094-2.705-2.741c-0.005-17.146,0.012-34.291-0.025-51.437c-0.004-1.726,0.495-3.066,1.693-4.332 c4.681-4.944,9.304-9.944,13.893-14.974c1.182-1.296,2.507-1.841,4.251-1.837c13.979,0.037,27.959,0.015,41.938,0.025 c2.364,0.002,2.534,0.185,2.535,2.57C77.084,26.514,77.08,38.223,77.08,49.932z M32.399,43.751c0-0.003,0-0.006,0-0.009 c2.447,0,4.897,0.075,7.34-0.02c2.772-0.107,4.604-1.895,4.658-4.668c0.091-4.713,0.032-9.429,0.022-14.144 c-0.004-1.613-0.726-2.87-2.036-3.784c-3.34-2.331-7.583-0.19-7.891,4.06c-0.164,2.257-0.111,4.535-0.053,6.801 c0.038,1.481-0.61,2.04-2.027,2.022c-2.267-0.029-4.538-0.046-6.803,0.035c-3.019,0.108-4.859,1.983-4.863,4.827 c-0.004,2.818,1.881,4.764,4.849,4.864C27.861,43.813,30.131,43.751,32.399,43.751z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconInstagram",
                    viewBox: "0 0 100 100"
                }
            }, [e("path", {
                attrs: {
                    d: "M50,9.013c13.35,0,14.933,0.05,20.208,0.292C83.758,9.921,90.088,16.35,90.704,29.8 c0.242,5.271,0.287,6.854,0.287,20.204c0,13.354-0.05,14.933-0.287,20.204c-0.621,13.438-6.933,19.879-20.496,20.496 c-5.275,0.242-6.85,0.292-20.208,0.292c-13.35,0-14.933-0.05-20.204-0.292C16.212,90.083,9.917,83.625,9.3,70.204 C9.058,64.933,9.008,63.354,9.008,50c0-13.35,0.054-14.929,0.292-20.204C9.921,16.35,16.233,9.917,29.796,9.3 C35.071,9.063,36.65,9.013,50,9.013z M50,0C36.421,0,34.721,0.058,29.388,0.3C11.229,1.133,1.137,11.208,0.304,29.383 C0.058,34.721,0,36.421,0,50s0.058,15.283,0.3,20.617C1.133,88.775,11.208,98.867,29.383,99.7C34.721,99.942,36.421,100,50,100 s15.283-0.058,20.617-0.3c18.142-0.833,28.258-10.908,29.079-29.083C99.942,65.283,100,63.579,100,50s-0.058-15.279-0.3-20.612 C98.883,11.246,88.796,1.137,70.621,0.304C65.283,0.058,63.579,0,50,0z M50,24.325c-14.179,0-25.675,11.496-25.675,25.675 S35.821,75.679,50,75.679S75.675,64.183,75.675,50C75.675,35.821,64.179,24.325,50,24.325z M50,66.667 c-9.204,0-16.667-7.458-16.667-16.667c0-9.204,7.463-16.667,16.667-16.667S66.667,40.796,66.667,50 C66.667,59.208,59.204,66.667,50,66.667z M76.692,17.312c-3.317,0-6.004,2.688-6.004,6s2.688,6,6.004,6c3.312,0,5.996-2.688,5.996-6 S80.004,17.312,76.692,17.312z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconGithub",
                    viewBox: "0 0 100 97.554"
                }
            }, [e("path", {
                attrs: {
                    d: "M93.293,24.902c-4.471-7.661-10.536-13.726-18.196-18.196C67.436,2.235,59.072,0,50,0 c-9.071,0-17.438,2.236-25.097,6.706c-7.661,4.47-13.725,10.536-18.196,18.196C2.235,32.563,0,40.928,0,49.998 C0,60.893,3.179,70.69,9.538,79.392c6.358,8.702,14.572,14.724,24.641,18.066c1.172,0.218,2.04,0.065,2.604-0.455 c0.564-0.52,0.846-1.172,0.846-1.952c0-0.13-0.011-1.302-0.033-3.515c-0.022-2.214-0.033-4.145-0.033-5.793l-1.497,0.259 c-0.955,0.175-2.159,0.249-3.613,0.228c-1.453-0.02-2.962-0.173-4.524-0.456c-1.563-0.281-3.017-0.932-4.362-1.952 c-1.345-1.02-2.3-2.355-2.864-4.003l-0.651-1.498C19.617,77.323,18.934,76.215,18,75c-0.933-1.216-1.877-2.04-2.832-2.474 L14.713,72.2c-0.304-0.217-0.586-0.478-0.846-0.782c-0.26-0.304-0.455-0.607-0.586-0.911c-0.13-0.304-0.022-0.554,0.325-0.75 c0.348-0.196,0.976-0.291,1.888-0.291l1.302,0.195c0.868,0.174,1.942,0.694,3.223,1.562c1.28,0.868,2.332,1.996,3.157,3.384 c0.999,1.78,2.202,3.136,3.613,4.07c1.41,0.933,2.832,1.399,4.264,1.399c1.432,0,2.669-0.109,3.711-0.324 c1.041-0.217,2.018-0.543,2.929-0.977c0.391-2.909,1.454-5.144,3.19-6.706c-2.474-0.26-4.698-0.651-6.673-1.172 c-1.974-0.521-4.014-1.367-6.119-2.54c-2.106-1.171-3.853-2.626-5.241-4.361c-1.389-1.736-2.528-4.016-3.417-6.836 c-0.89-2.822-1.334-6.076-1.334-9.765c0-5.253,1.715-9.722,5.144-13.412c-1.606-3.949-1.455-8.376,0.455-13.28 c1.259-0.391,3.125-0.098,5.599,0.879c2.474,0.977,4.286,1.813,5.436,2.507c1.151,0.693,2.073,1.281,2.767,1.758 c4.037-1.128,8.203-1.692,12.5-1.692s8.464,0.564,12.501,1.692l2.474-1.562c1.692-1.042,3.689-1.997,5.988-2.865 c2.3-0.868,4.059-1.107,5.275-0.716c1.952,4.905,2.126,9.331,0.52,13.28c3.429,3.689,5.144,8.16,5.144,13.412 c0,3.689-0.446,6.954-1.335,9.797c-0.889,2.844-2.039,5.121-3.449,6.836c-1.412,1.715-3.17,3.158-5.274,4.329 c-2.105,1.172-4.146,2.018-6.12,2.539c-1.975,0.521-4.199,0.913-6.673,1.173c2.256,1.952,3.384,5.034,3.384,9.244v13.736 c0,0.78,0.271,1.432,0.815,1.952c0.542,0.52,1.399,0.673,2.571,0.455c10.07-3.341,18.284-9.363,24.642-18.066 C96.82,70.689,100,60.891,100,49.996C99.998,40.928,97.761,32.563,93.293,24.902z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "iconMail",
                    viewBox: "0 0 100 75"
                }
            }, [e("path", {
                attrs: {
                    d: "M0,0v75h100V0H0z M27.596,33.037l-19.263,23.8V17.429C8.333,17.429,27.596,33.037,27.596,33.037z M10.342,8.333 h79.312L50,40.471C50,40.471,10.342,8.333,10.342,8.333z M34.067,38.283L50,51.196l15.958-12.933l23.383,28.404H11.096 L34.067,38.283z M72.433,33.017l19.233-15.588v38.95C91.667,56.379,72.433,33.017,72.433,33.017z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charSquare",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M25.569,25.533v58.863v0.071h58.863v-0.071V25.533H25.569z M72.127,72.162H37.873V37.838h34.254V72.162z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charU",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M43.809,43.477V76.23c0,9.454,3.73,14.18,11.191,14.18c7.46,0,11.191-4.726,11.191-14.18V43.477h13.184v33.047 c0,4.57-0.567,8.516-1.699,11.836c-1.094,2.969-2.988,5.645-5.684,8.027c-4.453,3.867-10.118,5.801-16.992,5.801 c-6.836,0-12.48-1.934-16.934-5.801c-2.735-2.382-4.668-5.058-5.801-8.027c-1.094-2.656-1.641-6.601-1.641-11.836V43.477H43.809z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charN",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M30.42,43.477h13.242v5.273c4.609-4.57,9.804-6.855,15.586-6.855c6.64,0,11.816,2.09,15.527,6.27 c3.203,3.555,4.805,9.356,4.805,17.402v34.98H66.338V68.672c0-5.625-0.782-9.511-2.344-11.66c-1.523-2.187-4.297-3.281-8.32-3.281 c-4.375,0-7.481,1.446-9.316,4.336c-1.797,2.852-2.695,7.833-2.695,14.941v27.539H30.42V43.477z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charD",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M61 101.9 L 49 101.9 L 49 89.9 L 61 89.9 z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charZ",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M 73 101.9 L 37 101.9 L 37 89.9 L 61 56.4 L 37 56.4 L 37 44.4 L 73 44.4 L 73 56.4 L 49 89.9 L 73 89.9 z"
                }
            })]),  e("symbol", {
                attrs: {
                    id: "charS",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M71.67,53.203l-10.898,5.801c-1.719-3.516-3.848-5.273-6.387-5.273c-1.211,0-2.247,0.401-3.105,1.201 c-0.86,0.801-1.289,1.827-1.289,3.076c0,2.188,2.539,4.356,7.617,6.504c6.992,3.008,11.699,5.782,14.121,8.32 c2.421,2.54,3.633,5.958,3.633,10.254c0,5.508-2.032,10.118-6.094,13.828c-3.946,3.516-8.711,5.273-14.297,5.273 c-9.571,0-16.348-4.667-20.332-14.004l11.25-5.215c1.562,2.735,2.754,4.473,3.574,5.215c1.601,1.485,3.516,2.227,5.742,2.227 c4.453,0,6.68-2.031,6.68-6.094c0-2.344-1.719-4.531-5.156-6.562c-1.329-0.664-2.657-1.308-3.984-1.934 c-1.329-0.625-2.676-1.269-4.043-1.934c-3.829-1.875-6.524-3.75-8.086-5.625c-1.992-2.382-2.988-5.449-2.988-9.199 c0-4.96,1.699-9.062,5.098-12.305c3.476-3.242,7.695-4.863,12.656-4.863C62.685,41.895,68.115,45.665,71.67,53.203z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charH",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M30.449,1.582h13.184v46.641c4.688-4.219,9.863-6.328,15.527-6.328c6.445,0,11.602,2.09,15.469,6.27 c3.281,3.633,4.922,9.434,4.922,17.402v34.98H66.367v-33.75c0-4.57-0.811-7.881-2.432-9.932c-1.622-2.051-4.229-3.076-7.822-3.076 c-4.61,0-7.852,1.426-9.727,4.277c-1.836,2.891-2.754,7.852-2.754,14.883v27.598H30.449V1.582z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charI",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M46.416,19.746c0-2.304,0.839-4.296,2.52-5.977c1.679-1.679,3.691-2.52,6.035-2.52 c2.382,0,4.414,0.84,6.094,2.52c1.679,1.641,2.52,3.653,2.52,6.035c0,2.383-0.84,4.415-2.52,6.094 c-1.641,1.68-3.653,2.52-6.035,2.52c-2.383,0-4.415-0.839-6.094-2.52C47.255,24.219,46.416,22.168,46.416,19.746z M61.592,43.477 v57.07H48.408v-57.07H61.592z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charF",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M56.787,55.781v44.766H43.545V55.781h-4.688V43.477h4.688V21.445c0-7.187,1.25-12.265,3.75-15.234 C50.732,2.071,55.732,0,62.295,0c2.344,0,5.292,0.684,8.848,2.051v13.477l-1.348-0.703c-2.852-1.445-5.196-2.168-7.031-2.168 c-2.344,0-3.926,0.84-4.746,2.52c-0.82,1.641-1.23,4.805-1.23,9.492v18.809h14.355v12.305H56.787z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charT",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M59.277,55.781v44.766H46.094V55.781h-5.625V43.477h5.625V22.559h13.184v20.918h10.254v12.305H59.277z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charL",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M61.592,1.582v98.965H48.408V1.582H61.592z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charA",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M70.762,43.477h13.242v57.07H70.762V94.57c-5.43,5.079-11.27,7.617-17.52,7.617 c-7.891,0-14.414-2.851-19.57-8.555c-5.118-5.82-7.676-13.085-7.676-21.797c0-8.555,2.558-15.683,7.676-21.387 c5.117-5.703,11.523-8.555,19.219-8.555c6.64,0,12.598,2.735,17.871,8.203V43.477z M39.473,71.836c0,5.469,1.465,9.922,4.395,13.359 c3.007,3.477,6.797,5.215,11.367,5.215c4.882,0,8.827-1.679,11.836-5.039c3.008-3.476,4.512-7.89,4.512-13.242 c0-5.351-1.504-9.765-4.512-13.242c-3.009-3.398-6.914-5.098-11.719-5.098c-4.532,0-8.32,1.719-11.367,5.156 C40.976,62.422,39.473,66.719,39.473,71.836z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charB",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M39.18,1.582v48.516c5.273-5.468,11.25-8.203,17.93-8.203c7.695,0,14.101,2.871,19.219,8.613 c5.117,5.704,7.676,12.813,7.676,21.328c0,8.789-2.578,16.055-7.734,21.797c-5.118,5.704-11.582,8.555-19.395,8.555 c-6.602,0-12.501-2.539-17.695-7.617v5.977H25.996V1.582H39.18z M70.527,72.422c0-5.468-1.485-9.921-4.453-13.359 c-3.009-3.516-6.777-5.273-11.309-5.273c-4.844,0-8.789,1.699-11.836,5.098c-3.009,3.36-4.512,7.734-4.512,13.125 c0,5.547,1.484,9.981,4.453,13.301c2.968,3.398,6.875,5.098,11.719,5.098c4.57,0,8.358-1.699,11.367-5.098 C69.004,81.875,70.527,77.578,70.527,72.422z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charO",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M24.561,71.602c0-8.242,2.949-15.253,8.848-21.035c5.897-5.781,13.086-8.672,21.562-8.672 c8.516,0,15.741,2.911,21.68,8.73c5.859,5.821,8.789,12.969,8.789,21.445c0,8.555-2.95,15.723-8.848,21.504 c-5.938,5.742-13.223,8.613-21.855,8.613c-8.555,0-15.724-2.93-21.504-8.789C27.451,87.618,24.561,80.352,24.561,71.602z M38.037,71.836c0,5.704,1.523,10.215,4.57,13.535c3.125,3.36,7.245,5.039,12.363,5.039c5.156,0,9.277-1.66,12.363-4.98 c3.085-3.32,4.629-7.753,4.629-13.301c0-5.546-1.544-9.98-4.629-13.301c-3.126-3.359-7.246-5.039-12.363-5.039 c-5.039,0-9.121,1.68-12.246,5.039C39.599,62.188,38.037,66.524,38.037,71.836z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charW",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M24.004,43.477l14.941,32.578l16.113-37.793l16.23,37.793l14.766-32.578h14.766l-29.883,61.348L55.059,68.086 l-16.055,36.738L9.18,43.477H24.004z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charR",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M36.338,43.477h13.184v5.098c2.421-2.538,4.57-4.277,6.445-5.215c1.913-0.976,4.179-1.465,6.797-1.465 c3.476,0,7.108,1.134,10.898,3.398l-6.035,12.07c-2.501-1.796-4.942-2.695-7.324-2.695c-7.188,0-10.781,5.431-10.781,16.289v29.59 H36.338V43.477z"
                }
            })]), e("symbol", {
                attrs: {
                    id: "charK",
                    viewBox: "0 0 110 110",
                    preserveAspectRatio: "xMidYMid slice"
                }
            }, [e("path", {
                attrs: {
                    d: "M42.549,1.582v60.352l18.574-18.457h17.695L54.033,67.441l26.602,33.105H63.525L44.658,76.465l-2.109,2.109 v21.973H29.365V1.582H42.549z"
                }
            })])])])
        }
        ), [], !1, null, "19f5c22f", null).exports)
          , pt = {
            updated: function() {
                if ("full" === this.$store.state.displayMode)
                    this.$store.state.layoutMode
            },
            computed: {
                isOpened: function() {
                    if ("l" !== this.$store.state.layoutMode) {
                        var t = this.$store.state.isMenuOpened;
                        return this.$emit(t ? "open" : "close"),
                        t
                    }
                    return !0
                },
                currentId: function() {
                    return this.$store.state.currentId
                },
                transitionDuration: function() {
                    return "l" === this.$store.state.layoutMode ? 0 : 1e3
                },
                classObj: function() {
                    return {
                        "is-opened": this.isOpened
                    }
                }
            },
            methods: {
                close: function() {
                    this.$store.commit("setMenuOpened", !1)
                },
                onTouchMove: function(t) {},
                openSettings: function() {
                    this.$store.commit("setSettingsOpened", !0)
                }
            }
        }
          , bt = (i(516),
        Object(et.a)(pt, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "menu",
                    duration: t.transitionDuration
                }
            }, [t.isOpened ? i("div", {
                staticClass: "menu",
                class: t.classObj
            }, [i("div", {
                staticClass: "menu__bg",
                on: {
                    click: t.close
                }
            }), i("div", {
                staticClass: "menu__inner"
            }, [i("nav", [i("ul", [i("li", {
                staticClass: "menuNavItem",
                class: {
                    "is-current": "index" == this.currentId
                },
                on: {
                    click: t.close
                }
            }, [i("NuxtLink", {
                staticClass: "inner",
                attrs: {
                    to: "/"
                }
            }, [i("span", {
                staticClass: "menuNavItem__label"
            }, [t._v("main")])])], 1), i("li", {
                staticClass: "menuNavItem",
                class: {
                    "is-current": "works" == this.currentId
                },
                on: {
                    click: t.close
                }
            }, [i("NuxtLink", {
                staticClass: "inner",
                attrs: {
                    to: "/works"
                }
            }, [i("span", {
                staticClass: "menuNavItem__label"
            }, [t._v("works")])])], 1), i("li", {
                staticClass: "menuNavItem",
                class: {
                    "is-current": "about" == this.currentId
                },
                on: {
                    click: t.close
                }
            }, [i("NuxtLink", {
                staticClass: "inner",
                attrs: {
                    to: "/about"
                }
            }, [i("span", {
                staticClass: "menuNavItem__label"
            }, [t._v("about")])])], 1), i("button", {
                staticClass: "menuNavItem menuNavItem--settings",
                on: {
                    click: t.openSettings
                }
            }, [i("div", {
                staticClass: "inner"
            }, [i("span", {
                staticClass: "menuNavItem__label"
            }, [t._v("settings")]), i("svg", [i("use", {
                attrs: {
                    "xlink:href": "#iconSettings"
                }
            })])])])])])])]) : t._e()])
        }
        ), [], !1, null, "4fb558ee", null).exports)
          , gt = {
            methods: {
                toggleMenu: function() {
                    this.$store.commit("setMenuOpened", !this.$store.state.isMenuOpened)
                }
            }
        }
          , vt = (i(518),
        Object(et.a)(gt, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return "l" !== this.$store.state.layoutMode ? e("button", {
                staticClass: "buttonSquare buttonMenu",
                on: {
                    click: this.toggleMenu
                }
            }, [e("span", {
                staticClass: "buttonMenu__line"
            }), e("span", {
                staticClass: "buttonMenu__line"
            }), e("span", {
                staticClass: "buttonMenu__line"
            }), e("p", {
                staticClass: "buttonSquare__label buttonSquare__label--closed"
            }, [this._v("menu")]), e("p", {
                staticClass: "buttonSquare__label buttonSquare__label--opened"
            }, [this._v("close")])]) : this._e()
        }
        ), [], !1, null, "5cf76a3f", null).exports)
          , wt = {
            methods: {
                back: function() {
                    var t, e = this.$store.state.history.length;
                    t = e >= 2 ? {
                        path: this.$store.state.history[e - 2].path
                    } : {
                        path: this.$store.state.buttonBackPath
                    };
                    var i = this.$store.state.history[e - 1];
                    "works-id" == i.name && (t.hash = i.path.replace("/works/", "")),
                    this.$router.push(t),
                    e >= 2 && this.$store.commit("popHistory")
                }
            },
            computed: {
                label: function() {
                    return this.$store.state.buttonBackLabel
                },
                classObj: function() {
                    return {
                        "is-available": this.$store.state.isButtonBackAvailable
                    }
                }
            }
        }
          , kt = (i(520),
        i(522),
        Object(et.a)(wt, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "buttonBackWrapper",
                class: this.classObj
            }, [e("button", {
                staticClass: "buttonRect buttonBack",
                on: {
                    click: this.back
                }
            }, [e("div", {
                staticClass: "inner"
            }, [e("p", {
                staticClass: "buttonRect__label"
            }, [this._v(this._s(this.label))])])])])
        }
        ), [], !1, null, "1dcde032", null).exports)
          , xt = {
            methods: {
                scrollToTop: function() {
                    this.$nuxt.scrollTo(0)
                }
            }
        }
          , _t = (i(524),
        Object(et.a)(xt, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("button", {
                staticClass: "buttonSquare buttonScrollTop",
                on: {
                    click: this.scrollToTop
                }
            }, [e("span", {
                staticClass: "buttonScrollTop__arrow"
            }), this._m(0)])
        }
        ), [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("p", {
                staticClass: "buttonSquare__label"
            }, [this._v("scroll"), e("br"), this._v("to top")])
        }
        ], !1, null, "1ae27c88", null).exports)
          , yt = i(19)
          , Mt = i.n(yt)
          , Ct = {
            props: ["options", "isDisabled"],
            data: function() {
                return {
                    selectedIndex: 0
                }
            },
            computed: {
                numOptions: function() {
                    return this.options.length
                },
                indicatorStyleObj: function() {
                    var t, e;
                    return {
                        width: Mt()(t = "calc((100% - ".concat(8 * (this.numOptions - 1), "px) / ")).call(t, this.numOptions, ")"),
                        transform: Mt()(e = "translateX(".concat(100 * this.selectedIndex, "%) translateX(")).call(e, 8 * this.selectedIndex, "px)")
                    }
                },
                itemStyleObj: function() {
                    var t;
                    return {
                        width: Mt()(t = "calc((100% - ".concat(8 * (this.numOptions - 1), "px) / ")).call(t, this.numOptions, ")")
                    }
                }
            },
            methods: {
                select: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    (e || !this.options[t].isDisabled && !this.isDisabled) && (this.setSelected(t),
                    this.$emit("change", {
                        index: t,
                        withInteraction: i
                    }))
                },
                setSelected: function(t) {
                    this.selectedIndex = t
                }
            }
        }
          , Tt = (i(526),
        i(528),
        Object(et.a)(Ct, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", {
                staticClass: "selector",
                class: {
                    "is-disabled": t.isDisabled
                }
            }, [i("div", {
                staticClass: "selector__indicstor",
                style: t.indicatorStyleObj
            }), t._l(t.options, (function(e, r) {
                return i("button", {
                    key: r,
                    staticClass: "selectorItem",
                    class: {
                        "is-current": t.selectedIndex == r,
                        "is-disabled": e.isDisabled
                    },
                    style: t.itemStyleObj,
                    attrs: {
                        disabled: e.isDisabled
                    },
                    on: {
                        click: function(e) {
                            return t.select(r, !1, !0)
                        }
                    }
                }, [i("div", {
                    staticClass: "selectorItem__inner"
                }, [e.figure ? i("span", {
                    staticClass: "selectorItem__figure",
                    domProps: {
                        innerHTML: t._s(e.figure)
                    }
                }) : t._e(), i("span", {
                    staticClass: "selectorItem__label",
                    domProps: {
                        innerHTML: t._s(e.label)
                    }
                })])])
            }
            ))], 2)
        }
        ), [], !1, null, "f6a19850", null).exports)
          , zt = i(306)
          , St = i.n(zt)
          , It = {
            displayMode: "setDisplayMode",
            menuPosition: "setMenuPosition",
            autoDarkMode: "setAutoDarkMode",
            isDarkMode: "setDarkMode"
        }
          , Bt = {
            components: {
                SettingsSelector: Tt
            },
            data: function() {
                return {
                    selectorOptions: {
                        displayMode: [{
                            label: "full",
                            value: "full",
                            isDisabled: !1
                        }, {
                            label: "simple",
                            value: "simple"
                        }, {
                            label: "minimum",
                            value: "minimum"
                        }],
                        menuPosition: [{
                            label: "bottom <br>- right",
                            value: "bottomRight",
                            figure: '<span class="optionMenuBottomRight"></span>'
                        }, {
                            label: "bottom <br>- left",
                            value: "bottomLeft",
                            figure: '<span class="optionMenuBottomLeft"></span>'
                        }, {
                            label: "top - <br>right",
                            value: "topRight",
                            figure: '<span class="optionMenuTopRight"></span>'
                        }],
                        autoDarkMode: [{
                            label: "off",
                            value: !1
                        }, {
                            label: "on",
                            value: !0
                        }],
                        isDarkMode: [{
                            label: "light",
                            value: !1
                        }, {
                            label: "dark",
                            value: !0
                        }]
                    },
                    isDisplayModeDisabled: !1,
                    isAutoDarkModeDisabled: !1,
                    isDarkModeDisabled: !1,
                    isDisplayModeNotSupported: !1,
                    isAutoDarkModeNotSupported: !1,
                    isDarkModeNotSupported: !1,
                    swiper: null,
                    isInited: !1,
                    mql: null,
                    mqd: null
                }
            },
            computed: {
                isOpened: function() {
                    return this.$store.state.isSettingsOpened
                },
                classObj: function() {
                    return {
                        "is-opened": this.isOpened
                    }
                }
            },
            updated: function() {
                this.updateSwiper()
            },
            mounted: function() {
                var t = this;
                return Object(O.a)(a.a.mark((function e() {
                    return a.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.$localStorage.init(),
                                t.$isIE11 && (t.isDisplayModeDisabled = !0,
                                t.isDisplayModeNotSupported = !0,
                                t.isDarkModeDisabled = !0,
                                t.isDarkModeNotSupported = !0,
                                t.$refs.selectorDisplayMode.select(2, !0, !1),
                                t.$refs.selectorDarkMode.select(0, !0, !1)),
                                t.mql = window.matchMedia("(prefers-color-scheme: light)"),
                                t.mqd = window.matchMedia("(prefers-color-scheme: dark)"),
                                t.mql.matches || t.mqd.matches ? t.mql.addListener((function() {
                                    t.mql.matches ? t.$store.state.autoDarkMode && t.$refs.selectorDarkMode.select(t.getIndexFromValue("isDarkMode", !1), !0, !1) : t.$store.state.autoDarkMode && t.$refs.selectorDarkMode.select(t.getIndexFromValue("isDarkMode", !0), !0, !1)
                                }
                                )) : (t.isAutoDarkModeDisabled = !0,
                                t.isAutoDarkModeNotSupported = !0),
                                t.restoreSetting("displayMode", t.$refs.selectorDisplayMode, 0),
                                t.restoreSetting("menuPosition", t.$refs.selectorMenuPositionMobile),
                                t.restoreSetting("autoDarkMode", t.$refs.selectorAutoDarkMode),
                                t.restoreSetting("isDarkMode", t.$refs.selectorDarkMode),
                                t.$isGoogleBot && t.$refs.selectorDisplayMode.select(1, !0, !1),
                                t.swiper = new St.a(t.$refs.scroller,{
                                    speed: 400,
                                    longSwipes: !0,
                                    longSwipesRatio: .1,
                                    threshold: 8,
                                    direction: "vertical",
                                    slidesPerView: "auto",
                                    loop: !1,
                                    freeMode: !0,
                                    scrollbar: {
                                        el: ".slideScrollbar",
                                        dragClass: "slideScrollbar__drag",
                                        lockClass: "slideScrollbar--lock",
                                        hide: !0
                                    },
                                    mousewheel: !0,
                                    containerModifierClass: "slideContainer--",
                                    wrapperClass: "slideWrapper",
                                    slideClass: "slideItem",
                                    slideActiveClass: "slideItem--active",
                                    slidePrevClass: "slideItem--prev",
                                    slideNextClass: "slideItem--next",
                                    slideVisibleClass: "slideItem--visible",
                                    slideDuplicate: "slideItem--dupilcate",
                                    slideDuplicateActiveClass: "slideItem--dupilcate-active",
                                    slideDuplicatePrevClass: "slideItem--dupilcate-prev",
                                    slideDuplicateNextClass: "slideItem--dupilcate-next"
                                }),
                                t.isInited = !0;
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            methods: {
                close: function() {
                    this.$store.commit("setSettingsOpened", !1)
                },
                getIndexFromValue: function(t, e) {
                    for (var i = this.selectorOptions[t], r = 0, a = i.length; r < a; r++)
                        if (i[r].value == e)
                            return r;
                    return null
                },
                restoreSetting: function(t, e) {
                    var i = this
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , a = this.setSettingFromLocalStorage(t);
                    if ("displayMode" == t) {
                        if (this.isDisplayModeNotSupported)
                            return;
                        var o = this.$localStorage.getLocalStorage("updated");
                        "1" !== o && (a = "full",
                        this.$localStorage.setLocalStorage("updated", "1"))
                    }
                    e.select(this.getIndexFromValue(t, a) || r, !0, !1),
                    nt()((function() {
                        i.gaEventTrack(t, a)
                    }
                    ), 500)
                },
                setSettingFromLocalStorage: function(t) {
                    var e = this.$localStorage.getLocalStorage(t);
                    return "true" == e || "false" != e && e
                },
                setSetting: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , r = this.selectorOptions[t][e].value;
                    i ? this.$localStorage.setLocalStorage(t, r) : (this.$store.commit(It[t], r),
                    this.$localStorage.setLocalStorage(t, r),
                    this.gaEventTrack(t, r))
                },
                gaEventTrack: function(t, e) {
                    var i;
                    window.ga && ga("send", "event", "settings", "change", Mt()(i = "".concat(t, "_")).call(i, e))
                },
                onTouchMove: function(t) {},
                onChangeDisplayMode: function(t) {
                    var e = this
                      , i = t.index
                      , r = t.withInteraction;
                    return Object(O.a)(a.a.mark((function t() {
                        var o;
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (o = e.$store.state.displayMode,
                                    !r || "full" != o && ("full" == o || 0 != i)) {
                                        t.next = 5;
                                        break
                                    }
                                    e.$store.commit("setAlertModal", {
                                        isOpened: !0,
                                        mode: "confirm",
                                        txt: "Relead to apply<br>the display mode setting?",
                                        labels: {
                                            ok: "reload",
                                            cancel: "cancel"
                                        },
                                        confirmCallback: function() {
                                            var t = Object(O.a)(a.a.mark((function t() {
                                                return a.a.wrap((function(t) {
                                                    for (; ; )
                                                        switch (t.prev = t.next) {
                                                        case 0:
                                                            e.setSetting("displayMode", i, !0),
                                                            window.location.reload();
                                                        case 2:
                                                        case "end":
                                                            return t.stop()
                                                        }
                                                }
                                                ), t)
                                            }
                                            )));
                                            return function() {
                                                return t.apply(this, arguments)
                                            }
                                        }(),
                                        cancelCallback: function() {
                                            e.$refs.selectorDisplayMode.select(e.getIndexFromValue("displayMode", o), !0, !1)
                                        }
                                    }),
                                    t.next = 9;
                                    break;
                                case 5:
                                    return e.setSetting("displayMode", i),
                                    t.next = 8,
                                    e.$nextTick();
                                case 8:
                                    e.$store.state.isRootLoaded && e.$nuxt.patternBg && "simple" == e.$store.state.displayMode && e.$nuxt.patternBg.draw();
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onChangeMenuPositionMobile: function(t) {
                    var e = t.index;
                    t.withInteraction;
                    this.setSetting("menuPosition", e)
                },
                onChangeAutoDarkMode: function(t) {
                    var e = this
                      , i = t.index;
                    t.withInteraction;
                    return Object(O.a)(a.a.mark((function t() {
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.setSetting("autoDarkMode", i),
                                    1 == i ? (e.$refs.selectorDarkMode.select(e.getIndexFromValue("isDarkMode", e.mqd.matches), !0, !1),
                                    e.$isIE11 || (e.isDarkModeDisabled = !0)) : e.isDarkModeDisabled = !1,
                                    t.next = 4,
                                    e.$nextTick();
                                case 4:
                                    e.updateSwiper();
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onChangeDarkMode: function(t) {
                    var e = this
                      , i = t.index;
                    t.withInteraction;
                    return Object(O.a)(a.a.mark((function t() {
                        var r;
                        return a.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.$store.state.displayMode,
                                    e.setSetting("isDarkMode", i),
                                    t.next = 4,
                                    e.$nextTick();
                                case 4:
                                    r = e.$store.state.displayMode,
                                    e.$store.state.isRootLoaded && e.$nuxt.patternBg && ("simple" == r && "works-id" != e.$route.name ? e.$nuxt.patternBg.draw() : "full" == r && (e.$nuxt.patternBg.draw(),
                                    e.$nuxt.mainVisual.applyColorScheme(),
                                    e.$nuxt.worksListFullMode.updateData()));
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                updateSwiper: function() {
                    this.swiper && this.swiper.update()
                },
                onEnter: function() {
                    this.updateSwiper(),
                    this.swiper.slideReset(0)
                }
            }
        }
          , Lt = (i(530),
        i(532),
        Object(et.a)(Bt, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "settings",
                    duration: "400"
                },
                on: {
                    enter: t.onEnter
                }
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isInited || t.isOpened,
                    expression: "!isInited || isOpened"
                }],
                staticClass: "settings",
                class: t.classObj
            }, [i("div", {
                staticClass: "settings__bg",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.close(e)
                    }
                }
            }), i("div", {
                staticClass: "settings__contents"
            }, [i("h2", {
                staticClass: "settings__title"
            }, [t._v("settings")]), i("button", {
                staticClass: "buttonClose buttonSquare",
                on: {
                    click: t.close
                }
            }, [i("span", {
                staticClass: "buttonClose__line"
            }), i("span", {
                staticClass: "buttonClose__line"
            }), i("span", {
                staticClass: "buttonSquare__label"
            }, [t._v("close")])]), i("div", {
                ref: "scroller",
                staticClass: "settings__inner slideContainer"
            }, [i("div", {
                staticClass: "slideScrollbar"
            }), i("div", {
                staticClass: "slideWrapper"
            }, [i("div", {
                staticClass: "slideItem"
            }, [i("section", {
                staticClass: "settings__section"
            }, [i("h3", {
                staticClass: "settings__sectionTitle"
            }, [t._v("display mode")]), i("div", {
                staticClass: "settings__txts"
            }, [t.isDisplayModeNotSupported ? i("p", {
                staticClass: "settings__notice settings__alert"
            }, [t._v("* this browser doesn't support.")]) : t._e()]), i("SettingsSelector", {
                ref: "selectorDisplayMode",
                attrs: {
                    options: t.selectorOptions.displayMode,
                    "is-disabled": t.isDisplayModeDisabled
                },
                on: {
                    change: t.onChangeDisplayMode
                }
            })], 1), i("section", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "l" !== t.$store.state.layoutMode,
                    expression: "$store.state.layoutMode !== 'l'"
                }],
                staticClass: "settings__section"
            }, [i("h3", {
                staticClass: "settings__sectionTitle"
            }, [t._v("menu position")]), i("SettingsSelector", {
                ref: "selectorMenuPositionMobile",
                attrs: {
                    options: t.selectorOptions.menuPosition
                },
                on: {
                    change: t.onChangeMenuPositionMobile
                }
            })], 1), i("section", {
                staticClass: "settings__section"
            }, [i("h3", {
                staticClass: "settings__sectionTitle"
            }, [t._v("color scheme")]), i("section", {
                staticClass: "settings__childSection"
            }, [i("h4", {
                staticClass: "settings__childSectionTitle"
            }, [t._v("auto light / dark mode")]), i("div", {
                staticClass: "settings__txts"
            }, [i("p", {
                staticClass: "settings__notice"
            }, [t._v("whether to depend on the OS setting.")]), t.isAutoDarkModeNotSupported ? i("p", {
                staticClass: "settings__notice settings__alert"
            }, [t._v("* this browser doesn't support.")]) : t._e()]), i("SettingsSelector", {
                ref: "selectorAutoDarkMode",
                attrs: {
                    options: t.selectorOptions.autoDarkMode,
                    "is-disabled": t.isAutoDarkModeDisabled
                },
                on: {
                    change: t.onChangeAutoDarkMode
                }
            })], 1), i("section", {
                staticClass: "settings__childSection"
            }, [i("h4", {
                staticClass: "settings__childSectionTitle"
            }, [t._v("light / dark mode")]), i("div", {
                staticClass: "settings__txts"
            }, [i("p", {
                staticClass: "settings__notice"
            }, [t._v('if "auto light / dark mode" setting is off, you can select color scheme.')]), t.isDarkModeNotSupported ? i("p", {
                staticClass: "settings__notice settings__alert"
            }, [t._v("* this browser doesn't support.")]) : t._e(), t.isDarkModeDisabled && t.$store.state.autoDarkMode ? i("p", {
                staticClass: "settings__notice settings__alert"
            }, [t._v('* this option is automatically seleced because "auto light / dark mode" setting is on.')]) : t._e()]), i("SettingsSelector", {
                ref: "selectorDarkMode",
                attrs: {
                    options: t.selectorOptions.isDarkMode,
                    "is-disabled": t.isDarkModeDisabled
                },
                on: {
                    change: t.onChangeDarkMode
                }
            })], 1)])])])])])])])
        }
        ), [], !1, null, "0abacdd4", null).exports)
          , At = {
            computed: {
                isOpened: function() {
                    return this.$store.state.isAlertModalOpened
                },
                mode: function() {
                    return this.$store.state.alertModalMode
                },
                txt: function() {
                    return this.$store.state.alertModalTxt
                },
                classObj: function() {
                    return {
                        "is-opened": this.isOpened
                    }
                }
            },
            mounted: function() {},
            methods: {
                close: function() {
                    var t = this.$store.state.alertModalCancelCallback;
                    "confirm" == this.mode && t && t(),
                    this.$store.commit("setAlertModal", {
                        isOpened: !1
                    })
                },
                onClickOK: function() {
                    var t = this.$store.state.alertModalConfirmCallback;
                    "confirm" == this.mode && t ? t() : this.close()
                }
            }
        }
          , Ot = (i(534),
        Object(et.a)(At, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "alertModal",
                    duration: "400"
                }
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isOpened,
                    expression: "isOpened"
                }],
                staticClass: "alertModal",
                class: t.classObj
            }, [i("div", {
                staticClass: "alertModal__bg",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        t.close(e)
                    }
                }
            }), i("div", {
                staticClass: "alertModal__contents"
            }, [i("p", {
                staticClass: "alertModal__txt",
                domProps: {
                    innerHTML: t._s(t.txt)
                }
            }), i("div", {
                staticClass: "alertModal__buttons"
            }, [i("button", {
                staticClass: "buttonRect alertModal__buttonOK",
                on: {
                    click: t.onClickOK
                }
            }, [i("div", {
                staticClass: "inner"
            }, [i("span", {
                staticClass: "buttonRect__label"
            }, [t._v(t._s(t.$store.state.alertModalLabels.ok))])])]), "confirm" == t.mode ? i("button", {
                staticClass: "buttonRect alertModal__cancel",
                on: {
                    click: t.close
                }
            }, [i("div", {
                staticClass: "inner"
            }, [i("span", {
                staticClass: "buttonRect__label"
            }, [t._v(t._s(t.$store.state.alertModalLabels.cancel))])])]) : t._e()])])])])
        }
        ), [], !1, null, "48d47c47", null).exports)
          , Gt = i(4)
          , Et = i(5)
          , Xt = i(31)
          , Pt = i.n(Xt)
          , Rt = i(41)
          , Dt = i.n(Rt)
          , Ft = i(23)
          , Wt = i.n(Ft)
          , Nt = function() {
            function t(e) {
                Object(Gt.a)(this, t),
                this._settings = b()(this._getDefaultSettings(), e),
                this._colorQueue = []
            }
            return Object(Et.a)(t, null, [{
                key: "getCosValue",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = -t * Math.PI * .5 + .75 * Math.PI + e;
                    return Math.cos(i)
                }
            }, {
                key: "getSinValue",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = -t * Math.PI * .5 + .75 * Math.PI + e;
                    return -Math.sin(i)
                }
            }, {
                key: "TOP_LEFT",
                get: function() {
                    return 0
                }
            }, {
                key: "TOP_RIGHT",
                get: function() {
                    return 1
                }
            }, {
                key: "BOTTOM_RIGHT",
                get: function() {
                    return 2
                }
            }, {
                key: "BOTTOM_LEFT",
                get: function() {
                    return 3
                }
            }]),
            Object(Et.a)(t, [{
                key: "_getDefaultSettings",
                value: function() {
                    return {
                        canvas: null,
                        ctx: null,
                        randomColor: !1,
                        generateColor: !1,
                        gridSize: 0,
                        colors: ["#000000", "#ffffff"]
                    }
                }
            }, {
                key: "drawBg",
                value: function(t, e, i) {
                    var r;
                    this._settings.ctx.fillStyle = this.getColor(),
                    this._settings.ctx.beginPath(),
                    this._settings.ctx.rect(t, e, i, i),
                    this._settings.ctx.closePath(),
                    Dt()(r = this._settings.ctx).call(r)
                }
            }, {
                key: "draw",
                value: function(t, e, i) {
                    return this.drawBg(t, e, i),
                    null
                }
            }, {
                key: "_resetColorQueue",
                value: function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    e && (this._lastColor = ""),
                    this._colorQueue = Pt()(t = this._settings.colors).call(t),
                    this._settings.randomColor && this._settings.colors.length > 1 && this._shuffleColorQueue()
                }
            }, {
                key: "_shuffleColorQueue",
                value: function() {
                    var t = Wt.a.shuffle(this._colorQueue);
                    t[0] != this._lastColor ? this._colorQueue = t : this._shuffleColorQueue()
                }
            }, {
                key: "_getGeneratedColor",
                value: function() {
                    var t, e;
                    return Mt()(t = Mt()(e = "hsl(".concat(Wt.a.random(0, 360), ", ")).call(e, Wt.a.random(0, 100), "%, ")).call(t, Wt.a.random(0, 100), "%)")
                }
            }, {
                key: "getColor",
                value: function() {
                    return this._settings.generateColor ? (this._lastColor = this._getGeneratedColor(),
                    this._lastColor) : (0 == this._colorQueue.length && this._resetColorQueue(),
                    this._lastColor = this._colorQueue.shift(),
                    this._lastColor)
                }
            }, {
                key: "limitSize",
                get: function() {
                    return this._settings.limitSize
                }
            }]),
            t
        }()
          , Vt = i(15)
          , jt = i(8)
          , Ut = i(35)
          , $t = i(16)
          , Ht = function(t) {
            function e(t) {
                return Object(Gt.a)(this, e),
                Object(Vt.a)(this, Object(jt.a)(e).call(this, t))
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "_getDefaultSettings",
                value: function() {
                    return b()(Object(Ut.a)(Object(jt.a)(e.prototype), "_getDefaultSettings", this).call(this), {
                        num: 6,
                        minSize: .05,
                        maxSize: 1,
                        randomNum: !0,
                        minNum: 3,
                        maxNum: 6
                    })
                }
            }, {
                key: "draw",
                value: function(t, e, i) {
                    this._settings.randomNum && (this._settings.num = Wt.a.random(this._settings.minNum, this._settings.maxNum));
                    for (var r = i * this._settings.maxSize, a = 0, o = (this._settings.maxSize - this._settings.minSize) / this._settings.num * i, n = 0; n < this._settings.num; n++) {
                        var s;
                        a = (i - r) / 2,
                        this._settings.ctx.fillStyle = this.getColor(),
                        this._settings.ctx.beginPath(),
                        this._settings.ctx.rect(t + a, e + a, r, r),
                        this._settings.ctx.closePath(),
                        r -= o,
                        Dt()(s = this._settings.ctx).call(s)
                    }
                    return null
                }
            }]),
            e
        }(Nt)
          , Yt = function(t) {
            function e(t) {
                return Object(Gt.a)(this, e),
                Object(Vt.a)(this, Object(jt.a)(e).call(this, t))
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "_getDefaultSettings",
                value: function() {
                    return b()(Object(Ut.a)(Object(jt.a)(e.prototype), "_getDefaultSettings", this).call(this), {
                        num: 1,
                        minSize: .1,
                        maxSize: 1,
                        randomType: !1,
                        randomNum: !0,
                        minNum: 1,
                        maxNum: 6
                    })
                }
            }, {
                key: "draw",
                value: function(t, e, i) {
                    this._settings.randomNum && (this._settings.num = Wt.a.random(this._settings.minNum, this._settings.maxNum)),
                    this.drawBg(t, e, i);
                    var r = .5 * i
                      , a = r * this._settings.maxSize
                      , o = (this._settings.maxSize - this._settings.minSize) / this._settings.num * r
                      , n = t + r
                      , s = e + r
                      , l = 0;
                    if (this._settings.randomType && (l = Wt.a.random(0, 3)),
                    0 == l) {
                        for (var c = 0; c < this._settings.num; c++)
                            this._drawArc(n, s, a),
                            a -= o;
                        return null
                    }
                    if (1 == l) {
                        for (var d = 0 == Wt.a.random(0, 1), u = 0; u < this._settings.num; u++)
                            this._drawHalfArcs(n, s, a, r, d),
                            a -= o;
                        return null
                    }
                    if (2 == l) {
                        for (var f = 0; f < this._settings.num; f++)
                            this._drawQuartArcsType1(n, s, a, r),
                            a -= o;
                        return null
                    }
                    if (3 == l) {
                        o *= 2,
                        2,
                        a = i;
                        for (var h = Wt.a.random(0, 3), m = 0; m < this._settings.num; m++)
                            this._drawQuartArcsType2(t, e, a, i, h),
                            a -= o;
                        return null
                    }
                }
            }, {
                key: "_drawArc",
                value: function(t, e, i) {
                    var r;
                    this._settings.ctx.fillStyle = this.getColor(),
                    this._settings.ctx.beginPath(),
                    this._settings.ctx.arc(t, e, i, 0, 2 * Math.PI),
                    this._settings.ctx.closePath(),
                    Dt()(r = this._settings.ctx).call(r)
                }
            }, {
                key: "_drawHalfArc",
                value: function(t, e, i, r, a) {
                    var o, n = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    this._settings.ctx.beginPath(),
                    this._settings.ctx.arc(t, e, i, r, a, n),
                    this._settings.ctx.closePath(),
                    Dt()(o = this._settings.ctx).call(o)
                }
            }, {
                key: "_drawHalfArcs",
                value: function(t, e, i, r) {
                    var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                      , o = 0
                      , n = Math.PI
                      , s = 0
                      , l = 0;
                    a ? (o = 0,
                    n = Math.PI,
                    l = r) : (o = .5 * -Math.PI,
                    n = .5 * Math.PI,
                    s = r),
                    this._settings.ctx.fillStyle = this.getColor(),
                    this._drawHalfArc(t - s, e - l, i, o, n),
                    this._drawHalfArc(t + s, e + l, i, o, n, !0)
                }
            }, {
                key: "_drawQuartArc",
                value: function(t, e, i) {
                    var r, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nt.TOP_LEFT, o = .5 * Math.PI * a, n = o + .5 * Math.PI;
                    this._settings.ctx.beginPath(),
                    this._settings.ctx.moveTo(t, e),
                    this._settings.ctx.arc(t, e, i, o, n),
                    this._settings.ctx.lineTo(t, e),
                    this._settings.ctx.closePath(),
                    Dt()(r = this._settings.ctx).call(r)
                }
            }, {
                key: "_drawQuartArcsType1",
                value: function(t, e, i, r) {
                    this._settings.ctx.fillStyle = this.getColor(),
                    this._drawQuartArc(t - r, e - r, i, Nt.TOP_LEFT),
                    this._drawQuartArc(t + r, e - r, i, Nt.TOP_RIGHT),
                    this._drawQuartArc(t + r, e + r, i, Nt.BOTTOM_RIGHT),
                    this._drawQuartArc(t - r, e + r, i, Nt.BOTTOM_LEFT)
                }
            }, {
                key: "_drawQuartArcsType2",
                value: function(t, e, i, r, a) {
                    this._settings.ctx.fillStyle = this.getColor(),
                    this._drawQuartArc(t + r * (1 == a || 2 == a), e + r * (2 == a || 3 == a), i, a)
                }
            }]),
            e
        }(Nt)
          , qt = function(t) {
            function e(t) {
                return Object(Gt.a)(this, e),
                Object(Vt.a)(this, Object(jt.a)(e).call(this, t))
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "_getDefaultSettings",
                value: function() {
                    return b()(Object(Ut.a)(Object(jt.a)(e.prototype), "_getDefaultSettings", this).call(this), {
                        num: 6,
                        minSize: .05,
                        maxSize: 1,
                        randomNum: !0,
                        minNum: 1,
                        maxNum: 6
                    })
                }
            }, {
                key: "draw",
                value: function(t, e, i) {
                    this._settings.randomNum && (this._settings.num = Wt.a.random(this._settings.minNum, this._settings.maxNum)),
                    this.drawBg(t, e, i);
                    for (var r = .5 * i, a = r * this._settings.maxSize, o = (this._settings.maxSize - this._settings.minSize) / this._settings.num * r, n = t + r, s = e + r, l = r, c = this._settings.gridSize <= l, d = 0; d < this._settings.num; d++) {
                        var u;
                        this._settings.ctx.fillStyle = c && 0 == d ? this._lastColor : this.getColor(),
                        this._settings.ctx.beginPath(),
                        this._settings.ctx.moveTo(n - a, s),
                        this._settings.ctx.lineTo(n, s - a),
                        this._settings.ctx.lineTo(n + a, s),
                        this._settings.ctx.lineTo(n, s + a),
                        this._settings.ctx.closePath(),
                        a -= o,
                        Dt()(u = this._settings.ctx).call(u)
                    }
                    return [{
                        offsetX: t,
                        offsetY: e,
                        size: l,
                        position: Nt.TOP_LEFT
                    }, {
                        offsetX: t + l,
                        offsetY: e,
                        size: l,
                        position: Nt.TOP_RIGHT
                    }, {
                        offsetX: t + l,
                        offsetY: e + l,
                        size: l,
                        position: Nt.BOTTOM_RIGHT
                    }, {
                        offsetX: t,
                        offsetY: e + l,
                        size: l,
                        position: Nt.BOTTOM_LEFT
                    }]
                }
            }]),
            e
        }(Nt)
          , Qt = function(t) {
            function e(t) {
                return Object(Gt.a)(this, e),
                Object(Vt.a)(this, Object(jt.a)(e).call(this, t))
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "_getDefaultSettings",
                value: function() {
                    return b()(Object(Ut.a)(Object(jt.a)(e.prototype), "_getDefaultSettings", this).call(this), {
                        num: 2,
                        randomNum: !0,
                        minNum: 2,
                        maxNum: 6
                    })
                }
            }, {
                key: "draw",
                value: function(t, e, i) {
                    this._settings.randomNum && (this._settings.num = Wt.a.random(this._settings.minNum, this._settings.maxNum));
                    var r = i
                      , a = 0
                      , o = i / this._settings.num;
                    if (0 == Wt.a.random(0, 1))
                        for (var n = 0; n < this._settings.num; n++) {
                            var s;
                            this._settings.ctx.fillStyle = this.getColor(),
                            this._settings.ctx.beginPath(),
                            this._settings.ctx.rect(t + a, e, r, i),
                            this._settings.ctx.closePath(),
                            r -= o,
                            a += o,
                            Dt()(s = this._settings.ctx).call(s)
                        }
                    else
                        for (var l = 0; l < this._settings.num; l++) {
                            var c;
                            this._settings.ctx.fillStyle = this.getColor(),
                            this._settings.ctx.beginPath(),
                            this._settings.ctx.rect(t, e + a, i, r),
                            this._settings.ctx.closePath(),
                            r -= o,
                            a += o,
                            Dt()(c = this._settings.ctx).call(c)
                        }
                    return null
                }
            }]),
            e
        }(Nt)
          , Zt = function(t) {
            function e(t) {
                return Object(Gt.a)(this, e),
                Object(Vt.a)(this, Object(jt.a)(e).call(this, t))
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "_getDefaultSettings",
                value: function() {
                    return b()(Object(Ut.a)(Object(jt.a)(e.prototype), "_getDefaultSettings", this).call(this), {
                        num: 6,
                        minSize: .05,
                        maxSize: 1
                    })
                }
            }, {
                key: "draw",
                value: function(t, e, i, r) {
                    var a, o = t + .5 * i, n = e + .5 * i, s = i * Math.sqrt(2) * .5;
                    return this._settings.ctx.fillStyle = this.getColor(),
                    this._settings.ctx.beginPath(),
                    this._settings.ctx.moveTo(Math.round(o + s * Nt.getCosValue(r, .5 * Math.PI)), Math.round(n + s * Nt.getSinValue(r, .5 * Math.PI))),
                    this._settings.ctx.lineTo(Math.round(o + s * Nt.getCosValue(r)), Math.round(n + s * Nt.getSinValue(r))),
                    this._settings.ctx.lineTo(Math.round(o + s * Nt.getCosValue(r, .5 * -Math.PI)), Math.round(n + s * Nt.getSinValue(r, .5 * -Math.PI))),
                    this._settings.ctx.closePath(),
                    Dt()(a = this._settings.ctx).call(a),
                    !1
                }
            }]),
            e
        }(Nt)
          , Jt = function() {
            function t(e, i) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1024
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1024
                  , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 64
                  , n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0
                  , s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                Object(Gt.a)(this, t),
                this._renderMode = n,
                this._generateColor = s,
                this._canvas = e,
                this._colors = i,
                this._width = r,
                this._height = a,
                this._gridSize = o,
                this._singleRectGridThreshold = .25 * this._width,
                this._singleTriangleGridThreshold = this._gridSize,
                this._ctx = this._canvas.getContext("2d"),
                this.applySettings()
            }
            return Object(Et.a)(t, [{
                key: "setColors",
                value: function(t) {
                    this._colors = t
                }
            }, {
                key: "setRenderMode",
                value: function(t) {
                    this._renderMode = t
                }
            }, {
                key: "setGridSize",
                value: function(t) {
                    this._gridSize = t
                }
            }, {
                key: "applySettings",
                value: function() {
                    var t = {
                        canvas: this._canvas,
                        ctx: this._ctx,
                        randomColor: !0,
                        generateColor: this._generateColor,
                        limitSize: this._width,
                        gridSize: this._gridSize,
                        colors: this._colors
                    };
                    this.resize(this._width, this._height),
                    this._rectDrawerQueue = [],
                    0 == this._renderMode ? this._rectDrawerModule = [new Yt(b()({}, t)), new Ht(b()({}, t)), new qt(b()({}, t)), new Qt(b()({}, t, {
                        limitSize: 1 * this._gridSize
                    })), new Nt(b()({}, t, {
                        limitSize: 1 * this._gridSize
                    }))] : 1 == this._renderMode ? this._rectDrawerModule = [new Yt(b()({}, t)), new Nt(b()({}, t, {
                        limitSize: 2 * this._gridSize
                    }))] : 2 == this._renderMode ? this._rectDrawerModule = [new Ht(b()({}, t)), new Nt(b()({}, t, {
                        limitSize: 2 * this._gridSize
                    }))] : 3 == this._renderMode ? this._rectDrawerModule = [new qt(b()({}, t)), new Nt(b()({}, t, {
                        limitSize: 2 * this._gridSize
                    }))] : 4 == this._renderMode && (this._rectDrawerModule = [new Qt(b()({}, t))]),
                    this._triangleDrawerQueue = [],
                    this._triangleDrawerModule = [new Zt(b()(t, {}))]
                }
            }, {
                key: "draw",
                value: function() {
                    this._drawGridRectAreaGroup(0, 0, this._width)
                }
            }, {
                key: "_drawGridGroup",
                value: function(t, e, i) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    Wt.a.random(0, r);
                    0 == 1 ? Wt.a.random(0, 1) ? (this._drawGridTriangleAreaGroup(t, e, i, Nt.TOP_LEFT),
                    this._drawGridTriangleAreaGroup(t, e, i, Nt.BOTTOM_RIGHT)) : (this._drawGridTriangleAreaGroup(t, e, i, Nt.TOP_RIGHT),
                    this._drawGridTriangleAreaGroup(t, e, i, Nt.BOTTOM_LEFT)) : this._drawGridRectAreaGroup(t, e, i)
                }
            }, {
                key: "_getRectDrawer",
                value: function(t) {
                    0 == this._rectDrawerQueue.length && (this._rectDrawerQueue = Wt.a.shuffle(this._rectDrawerModule));
                    var e = this._rectDrawerQueue.shift();
                    return t > e.limitSize ? this._getRectDrawer(t) : e
                }
            }, {
                key: "_drawGridRectArea",
                value: function(t, e, i) {
                    var r = this._getRectDrawer(i).draw(t, e, i);
                    if (i != this._gridSize && r)
                        for (var a = 0; a < r.length; a++) {
                            var o = r[a];
                            o.hasOwnProperty("position") ? this._drawGridTriangleAreaGroup(o.offsetX, o.offsetY, o.size, o.position) : this._drawGridRectAreaGroup(o.offsetX, o.offsetY, o.size)
                        }
                }
            }, {
                key: "_drawGridRectAreaGroup",
                value: function(t, e, i) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                      , a = Wt.a.random(0, r);
                    if ((0 == a || i == this._gridSize) && i <= this._singleRectGridThreshold)
                        this._drawGridRectArea(t, e, i);
                    else {
                        var o = .5 * i;
                        this._drawGridGroup(t, e, o),
                        this._drawGridGroup(t + o, e, o),
                        this._drawGridGroup(t, e + o, o),
                        this._drawGridGroup(t + o, e + o, o)
                    }
                }
            }, {
                key: "_drawGridTriangleArea",
                value: function(t, e, i, r) {
                    0 == this._triangleDrawerQueue.length && (this._triangleDrawerQueue = Wt.a.shuffle(this._triangleDrawerModule)),
                    this._triangleDrawerQueue.shift().draw(t, e, i, r)
                }
            }, {
                key: "_drawGridTriangleAreaGroup",
                value: function(t, e, i, r) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1
                      , o = Wt.a.random(0, a);
                    if ((0 == o || i == this._gridSize) && i <= this._singleTriangleGridThreshold)
                        this._drawGridTriangleArea(t, e, i, r);
                    else {
                        var n = .5 * i
                          , s = t + .5 * n
                          , l = e + .5 * n
                          , c = .5 * n * Math.sqrt(2);
                        this._drawGridGroup(s + c * Nt.getCosValue(r), l + c * Nt.getSinValue(r), n),
                        this._drawGridTriangleAreaGroup(s + c * Nt.getCosValue(r, .5 * -Math.PI), l + c * Nt.getSinValue(r, .5 * -Math.PI), n, r),
                        this._drawGridTriangleAreaGroup(s + c * Nt.getCosValue(r, .5 * Math.PI), l + c * Nt.getSinValue(r, .5 * Math.PI), n, r)
                    }
                }
            }, {
                key: "resize",
                value: function(t, e) {
                    this._width = t,
                    this._height = e,
                    this._canvas.width = this._width,
                    this._canvas.height = this._height,
                    this._numCols = Math.ceil(this._width / this._gridSize),
                    this._numRows = Math.ceil(this._height / this._gridSize)
                }
            }, {
                key: "getImage",
                value: function() {
                    return this._canvas.toDataURL("image/jpeg")
                }
            }, {
                key: "dispose",
                value: function() {
                    this._ctx.draw,
                    this._canvas.width = 0,
                    this._canvas.height = 0,
                    this._canvas = null,
                    this._ctx = null
                }
            }]),
            t
        }()
          , Kt = {
            data: function() {
                return {
                    gridPatternCanvas: null,
                    patterImg: "",
                    colors: [],
                    isShown: !1,
                    canvas: null
                }
            },
            computed: {
                isAvailable: function() {
                    return "minimum" !== this.$store.state.displayMode
                },
                isInvisible: function() {
                    return "full" === this.$store.state.displayMode
                },
                classObj: function() {
                    return {
                        "is-shown": this.isShown,
                        "is-invisible": this.isInvisible
                    }
                },
                bgStyleObj: function() {
                    return this.patterImg ? {
                        "background-image": "url(".concat(this.patterImg, ")")
                    } : null
                }
            },
            destroyed: function() {
                this.gridPatternCanvas && (this.gridPatternCanvas.dispose(),
                this.gridPatternCanvas = null,
                this.patterImg = "")
            },
            methods: {
                init: function() {
                    this.gridPatternCanvas || (this.canvas = document.createElement("canvas"),
                    this.$md.isIE11 || "s" == this.$store.state.layoutMode ? this.canvas.width = this.canvas.height = "1024" : this.canvas.width = this.canvas.height = "2048",
                    this.gridPatternCanvas = new Jt(this.canvas,[],this.canvas.width,this.canvas.height,this.canvas.width / 32))
                },
                hide: function() {
                    var t = this;
                    return Object(O.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t.isShown = !1,
                                    t.$nuxt.mainVisual.animateBgPatternAlpha(0, .2),
                                    e.abrupt("return", new n.a((function(e) {
                                        nt()((function() {
                                            t.patterImg = null,
                                            e()
                                        }
                                        ), 200)
                                    }
                                    )));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                show: function() {
                    var t = this;
                    return Object(O.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t.isShown = !0,
                                    t.$nuxt.mainVisual.animateBgPatternAlpha(1, 1),
                                    e.abrupt("return", new n.a((function(t) {
                                        nt()((function() {
                                            t()
                                        }
                                        ), 200)
                                    }
                                    )));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                draw: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return Object(O.a)(a.a.mark((function i() {
                        return a.a.wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    if (t.isAvailable) {
                                        i.next = 2;
                                        break
                                    }
                                    return i.abrupt("return");
                                case 2:
                                    return t.init(),
                                    e || (e = t.$store.state.currentWorksColors || (t.$store.state.isDarkMode ? ["#000", "#ccc"] : ["#fff", "#ccc"])),
                                    t.gridPatternCanvas.setColors(e),
                                    t.gridPatternCanvas.setRenderMode(Math.floor(4 * Math.random())),
                                    t.gridPatternCanvas.applySettings(),
                                    t.gridPatternCanvas.draw(),
                                    t.patterImg = t.gridPatternCanvas.getImage(),
                                    t.$nuxt.mainVisual.updatePattern(),
                                    i.next = 12,
                                    t.$nextTick();
                                case 12:
                                    t.show();
                                case 13:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i)
                    }
                    )))()
                }
            }
        }
          , te = (i(542),
        Object(et.a)(Kt, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return this.isAvailable ? e("div", {
                staticClass: "patternBg",
                class: this.classObj
            }, [e("div", {
                staticClass: "bg",
                style: this.bgStyleObj
            })]) : this._e()
        }
        ), [], !1, null, "56353ed5", null).exports)
          , ee = i(307)
          , ie = i.n(ee)
          , re = i(308)
          , ae = i.n(re)
          , oe = i(6)
          , ne = i(98)
          , se = i.n(ne)
          , le = function(t, e, i) {
            return Math.max(e, Math.min(i, t))
        }
          , ce = function() {
            function t(e, i, r) {
                Object(Gt.a)(this, t),
                this.r = 1,
                this.g = 1,
                this.b = 1,
                void 0 === i && void 0 === r && this.set(e),
                this.setRGB(e, i, r),
                this.setHSL = function() {
                    function t(t, e, i) {
                        return i < 0 && (i += 1),
                        i > 1 && (i -= 1),
                        i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
                    }
                    return function(e, i, r) {
                        if (e = (e % 1 + e) % e,
                        i = le(i, 0, 1),
                        r = le(r, 0, 1),
                        0 === i)
                            this.r = this.g = this.b = r;
                        else {
                            var a = r <= .5 ? r * (1 + i) : r + i - r * i
                              , o = 2 * r - a;
                            this.r = t(o, a, e + 1 / 3),
                            this.g = t(o, a, e),
                            this.b = t(o, a, e - 1 / 3)
                        }
                        return this
                    }
                }()
            }
            return Object(Et.a)(t, [{
                key: "set",
                value: function(e) {
                    return e && e instanceof t ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e),
                    this
                }
            }, {
                key: "setScalar",
                value: function(t) {
                    return this.r = t,
                    this.g = t,
                    this.b = t,
                    this
                }
            }, {
                key: "setHex",
                value: function(t) {
                    return t = Math.floor(t),
                    this.r = (t >> 16 & 255) / 255,
                    this.g = (t >> 8 & 255) / 255,
                    this.b = (255 & t) / 255,
                    this
                }
            }, {
                key: "setRGB",
                value: function(t, e, i) {
                    return this.r = t,
                    this.g = e,
                    this.b = i,
                    this
                }
            }, {
                key: "clone",
                value: function() {
                    return new this.constructor(this.r,this.g,this.b)
                }
            }, {
                key: "copy",
                value: function(t) {
                    return this.r = t.r,
                    this.g = t.g,
                    this.b = t.b,
                    this
                }
            }, {
                key: "getHex",
                value: function() {
                    return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
                }
            }, {
                key: "getHexString",
                value: function() {
                    var t;
                    return Pt()(t = "000000" + this.getHex().toString(16)).call(t, -6)
                }
            }, {
                key: "getHSL",
                value: function(t) {
                    void 0 === t && (t = {
                        h: 0,
                        s: 0,
                        l: 0
                    });
                    var e, i, r = this.r, a = this.g, o = this.b, n = Math.max(r, a, o), s = Math.min(r, a, o), l = (s + n) / 2;
                    if (s === n)
                        e = 0,
                        i = 0;
                    else {
                        var c = n - s;
                        switch (i = l <= .5 ? c / (n + s) : c / (2 - n - s),
                        n) {
                        case r:
                            e = (a - o) / c + (a < o ? 6 : 0);
                            break;
                        case a:
                            e = (o - r) / c + 2;
                            break;
                        case o:
                            e = (r - a) / c + 4
                        }
                        e /= 6
                    }
                    return t.h = e,
                    t.s = i,
                    t.l = l,
                    t
                }
            }, {
                key: "add",
                value: function(t) {
                    return this.r += t.r,
                    this.g += t.g,
                    this.b += t.b,
                    this
                }
            }, {
                key: "addColors",
                value: function(t, e) {
                    return this.r = t.r + e.r,
                    this.g = t.g + e.g,
                    this.b = t.b + e.b,
                    this
                }
            }, {
                key: "addScalar",
                value: function(t) {
                    return this.r += t,
                    this.g += t,
                    this.b += t,
                    this
                }
            }, {
                key: "sub",
                value: function(t) {
                    return this.r = Math.max(0, this.r - t.r),
                    this.g = Math.max(0, this.g - t.g),
                    this.b = Math.max(0, this.b - t.b),
                    this
                }
            }, {
                key: "multiply",
                value: function(t) {
                    return this.r *= t.r,
                    this.g *= t.g,
                    this.b *= t.b,
                    this
                }
            }, {
                key: "multiplyScalar",
                value: function(t) {
                    return this.r *= t,
                    this.g *= t,
                    this.b *= t,
                    this
                }
            }, {
                key: "lerp",
                value: function(t, e) {
                    return this.r += (t.r - this.r) * e,
                    this.g += (t.g - this.g) * e,
                    this.b += (t.b - this.b) * e,
                    this
                }
            }, {
                key: "equals",
                value: function(t) {
                    return t.r === this.r && t.g === this.g && t.b === this.b
                }
            }, {
                key: "fromArray",
                value: function(t, e) {
                    return void 0 === e && (e = 0),
                    this.r = t[e],
                    this.g = t[e + 1],
                    this.b = t[e + 2],
                    this
                }
            }, {
                key: "toArray",
                value: function(t, e) {
                    return void 0 === t && (t = []),
                    void 0 === e && (e = 0),
                    t[e] = this.r,
                    t[e + 1] = this.g,
                    t[e + 2] = this.b,
                    t
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.getHex()
                }
            }]),
            t
        }()
          , de = function() {
            function t(e) {
                var i;
                Object(Gt.a)(this, t),
                this.canvas = e.canvas,
                this.devicePixelRatio = e.devicePixelRatio || 1,
                this._bgColor = new ce(1,1,1),
                this._bgAlpha = 1,
                this.autoClear = void 0 === e.autoClear || e.autoClear;
                var r = {
                    antialias: e.antialias,
                    premultipliedAlpha: e.premultipliedAlpha,
                    alpha: e.alpha
                };
                try {
                    this._gl = this.canvas.getContext("webgl", r) || this.canvas.getContext("experimental-webgl", r),
                    i = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT)
                } catch (t) {
                    return void this._onError("no webgl support")
                }
                i ? this._gl || this._onError("no webgl context") : this._onError("no highp support")
            }
            return Object(Et.a)(t, [{
                key: "setBgColor",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    this._bgColor = t,
                    this._bgAlpha = e
                }
            }, {
                key: "getGLContext",
                value: function() {
                    return this._gl
                }
            }, {
                key: "render",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    (e = e || this).onBeforeRender(),
                    this._renderObjects(t),
                    e.onAfterRender()
                }
            }, {
                key: "onBeforeRender",
                value: function() {
                    this.autoClear && this.clear(),
                    this._gl.viewport(0, 0, this.canvas.width, this.canvas.height)
                }
            }, {
                key: "onAfterRender",
                value: function() {
                    this._gl.flush()
                }
            }, {
                key: "clear",
                value: function() {
                    this._gl.clearColor(this._bgColor.r, this._bgColor.g, this._bgColor.b, this._bgAlpha),
                    this._gl.clearDepth(1),
                    this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT)
                }
            }, {
                key: "setSize",
                value: function(t, e) {
                    this.canvas.style.width = "".concat(t, "px"),
                    this.canvas.style.height = "".concat(e, "px"),
                    this.canvas.width = t * this.devicePixelRatio,
                    this.canvas.height = e * this.devicePixelRatio
                }
            }, {
                key: "_renderObjects",
                value: function(t) {
                    if (t.isVisible) {
                        t.isRenderable && t.render();
                        for (var e = this._getRenderList(t.children), i = 0, r = e.length; i < r; i++)
                            this._renderObjects(e[i])
                    }
                }
            }, {
                key: "_getRenderList",
                value: function(t) {
                    if (!t)
                        return [];
                    var e = S()(t).call(t, (function(t) {
                        return t.isVisible
                    }
                    ));
                    return se()(e).call(e, (function(t, e) {
                        return t.renderOrder - e.renderOrder
                    }
                    ))
                }
            }, {
                key: "_onError",
                value: function(t) {
                    throw new Error(t)
                }
            }, {
                key: "dispose",
                value: function() {
                    var t;
                    (this.clear(),
                    this.canvas) && (this.canvas.width = 1,
                    this.canvas.height = 1,
                    this.canvas.parentElement && this.canvas.parentElement.removeChild(this.canvas),
                    this.canvas = null,
                    (t = this._gl.getExtension("WEBGL_lose_context")) && t.loseContext(),
                    this._gl = null)
                }
            }]),
            t
        }()
          , ue = function() {
            for (var t = [], e = 0; e < 256; e++)
                t[e] = (e < 16 ? "0" : "") + e.toString(16);
            return function() {
                var e = 4294967295 * Math.random() | 0
                  , i = 4294967295 * Math.random() | 0
                  , r = 4294967295 * Math.random() | 0
                  , a = 4294967295 * Math.random() | 0;
                return (t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + "-" + t[255 & i] + t[i >> 8 & 255] + "-" + t[i >> 16 & 15 | 64] + t[i >> 24 & 255] + "-" + t[63 & r | 128] + t[r >> 8 & 255] + "-" + t[r >> 16 & 255] + t[r >> 24 & 255] + t[255 & a] + t[a >> 8 & 255] + t[a >> 16 & 255] + t[a >> 24 & 255]).toUpperCase()
            }
        }()
          , fe = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object(Gt.a)(this, t),
                this._loadPromise = null,
                this._isLoaded = !1,
                this._uuid = ue(),
                this.textureUnitIndex = t.textureCnt++,
                this._needsUpdate = !0,
                this._isDisposed = !1,
                this._isCanvas = !1,
                this.wrapS = e.wrapS || "CLAMP_TO_EDGE",
                this.wrapT = e.wrapT || "CLAMP_TO_EDGE",
                this.magFilter = e.magFilter || "LINEAR",
                this.minFilter = e.minFilter || "LINEAR",
                this.mipmap = e.mipmap || !1,
                this._formatStr = e.format || "RGBA",
                this._typeStr = e.type || "UNSIGNED_BYTE"
            }
            var e, i;
            return Object(Et.a)(t, [{
                key: "getGLTexture",
                value: function() {
                    return this._glTexture
                }
            }, {
                key: "setCanvas",
                value: function(t) {
                    this._isLoaded = !0,
                    this._isCanvas = !0,
                    this._img = t,
                    this.updateGLTexture()
                }
            }, {
                key: "load",
                value: (i = Object(O.a)(a.a.mark((function t(e) {
                    var i = this;
                    return a.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return this._imgPath = e,
                                t.abrupt("return", this._loadPromise = this.preloadImg(this._imgPath).then((function(t) {
                                    i._img = t,
                                    i._isLoaded = !0
                                }
                                )));
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "dispose",
                value: function() {
                    this._isDisposed || (this._isLoaded = !1,
                    this._imgPath = "",
                    this._isCanvas || (this._img.src = ""),
                    this._img = null,
                    this._deleteGLTexture(),
                    this._gl = null,
                    this._isDisposed = !0)
                }
            }, {
                key: "bind",
                value: function(t) {
                    null != t && this._gl && (this._gl.activeTexture(this._gl["TEXTURE" + this.textureUnitIndex.toString()]),
                    this._gl.bindTexture(this._gl.TEXTURE_2D, this._glTexture),
                    this._gl.uniform1i(t, this.textureUnitIndex),
                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl[this.wrapS]),
                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl[this.wrapT]),
                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl[this.magFilter]),
                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl[this.minFilter]),
                    this._needsUpdate = !1)
                }
            }, {
                key: "setGLContext",
                value: function(t) {
                    this._gl = t,
                    this.format = this._formatStr,
                    this.type = this._typeStr,
                    this._createGLTexture()
                }
            }, {
                key: "updateGLTexture",
                value: function() {
                    if (this._glTexture)
                        return this._gl.bindTexture(this._gl.TEXTURE_2D, this._glTexture),
                        this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._format, this._format, this._type, this._img),
                        this.mipmap && this._gl.generateMipmap(this._gl.TEXTURE_2D),
                        this._gl.bindTexture(this._gl.TEXTURE_2D, null),
                        this._glTexture
                }
            }, {
                key: "_createGLTexture",
                value: function() {
                    if (this._img)
                        return this._gl.activeTexture(this._gl["TEXTURE" + this.textureUnitIndex.toString()]),
                        this._glTexture = this._gl.createTexture(),
                        this._gl.bindTexture(this._gl.TEXTURE_2D, this._glTexture),
                        this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._format, this._format, this._type, this._img),
                        this.mipmap && this._gl.generateMipmap(this._gl.TEXTURE_2D),
                        this._gl.bindTexture(this._gl.TEXTURE_2D, null),
                        this._glTexture
                }
            }, {
                key: "_deleteGLTexture",
                value: function() {
                    this._glTexture && (this._gl.deleteTexture(this._glTexture),
                    this._glTexture = null,
                    this._needsUpdate = !1)
                }
            }, {
                key: "preloadImg",
                value: (e = Object(O.a)(a.a.mark((function t(e) {
                    return a.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new n.a((function(t, i) {
                                    var r, a, o;
                                    return r = new Image,
                                    o = function() {
                                        return r.removeEventListener("load", o),
                                        r.removeEventListener("error", a),
                                        t(r)
                                    }
                                    ,
                                    a = function() {
                                        return r.removeEventListener("load", o),
                                        r.removeEventListener("error", a),
                                        i("img load error", e)
                                    }
                                    ,
                                    r.addEventListener("load", o),
                                    r.addEventListener("error", a),
                                    r.src = e
                                }
                                )));
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                ))),
                function(t) {
                    return e.apply(this, arguments)
                }
                )
            }, {
                key: "uuid",
                get: function() {
                    return this._uuid
                }
            }, {
                key: "isLoaded",
                get: function() {
                    return this._isLoaded
                }
            }, {
                key: "img",
                get: function() {
                    return this._img
                }
            }, {
                key: "isDesposed",
                get: function() {
                    return this._isDisposed
                }
            }, {
                key: "type",
                set: function(t) {
                    if (this._typeStr = t,
                    "FLOAT" == this._typeStr) {
                        if (!this._gl.getExtension("OES_texture_float"))
                            throw new Error("no support float texture");
                        this._type = this._gl[this._typeStr],
                        "LINEAR" != this.magFilter && "LINEAR" != this.minFilter || this._gl.getExtension("OES_texture_float_linear") || (this.magFilter = "NEAREST",
                        this.minFilter = "NEAREST")
                    } else if ("HALF_FLOAT_OES" == this._typeStr) {
                        var e = this._gl.getExtension("OES_texture_half_float");
                        if (!e)
                            throw new Error("no support half float texture");
                        this._type = e.HALF_FLOAT_OES
                    } else
                        this._type = this._gl[this._typeStr]
                },
                get: function() {
                    return this._typeStr
                }
            }, {
                key: "format",
                set: function(t) {
                    this._formatStr = t,
                    this._format = this._gl[this._formatStr]
                },
                get: function() {
                    return this._formatStr
                }
            }, {
                key: "needsUpdate",
                set: function(t) {
                    this._needsUpdate = t
                }
            }]),
            t
        }();
        fe.textureCnt = 0;
        var he = function() {
            function t(e, i, r) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                Object(Gt.a)(this, t),
                this.gl = e,
                this._width = Math.ceil(i),
                this._height = Math.ceil(r),
                this._uuid = ue(),
                this._bgColor = new ce(0,0,0),
                this._bgAlpha = 1,
                this._needsUpdate = !0,
                this.autoClear = a.autoClear || !0,
                this.textureUnitIndex = fe.textureCnt++,
                this.wrapS = a.wrapS || "CLAMP_TO_EDGE",
                this.wrapT = a.wrapT || "CLAMP_TO_EDGE",
                this.magFilter = a.magFilter || "LINEAR",
                this.minFilter = a.minFilter || "LINEAR",
                this.mipmap = a.mipmap || !1,
                this._formatStr = a.format || "RGBA",
                this._typeStr = a.type || "UNSIGNED_BYTE",
                this.setGLContext(e),
                this._createFrameBuffer(),
                this._isDisposed = !1
            }
            return Object(Et.a)(t, [{
                key: "setBgColor",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    this._bgColor = t,
                    this._bgAlpha = e
                }
            }, {
                key: "setGLContext",
                value: function(t) {
                    this._gl = t,
                    this.format = this._formatStr,
                    this.type = this._typeStr
                }
            }, {
                key: "dispose",
                value: function() {
                    this._deleteFrameBuffer(),
                    this._gl = null,
                    this._isDisposed = !0
                }
            }, {
                key: "updateFrameBuffer",
                value: function() {
                    this._deleteFrameBuffer(),
                    this._createFrameBuffer()
                }
            }, {
                key: "getGLTexture",
                value: function() {
                    return this._glTexture
                }
            }, {
                key: "onBeforeRender",
                value: function() {
                    this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._frameBuffer),
                    this._gl.viewport(0, 0, this._textureWidth, this._textureHeight),
                    this.autoClear && this.clear()
                }
            }, {
                key: "onAfterRender",
                value: function() {
                    this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null)
                }
            }, {
                key: "clear",
                value: function() {
                    this._gl.clearColor(this._bgColor.r, this._bgColor.g, this._bgColor.b, this._bgAlpha),
                    this._gl.clearDepth(1),
                    this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT)
                }
            }, {
                key: "bind",
                value: function(t) {
                    null != t && this._gl && (this._gl.activeTexture(this._gl["TEXTURE" + this.textureUnitIndex.toString()]),
                    this._gl.bindTexture(this._gl.TEXTURE_2D, this._glTexture),
                    this._gl.uniform1i(t, this.textureUnitIndex),
                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl[this.wrapS]),
                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl[this.wrapT]),
                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl[this.magFilter]),
                    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl[this.minFilter]),
                    this._needsUpdate = !1)
                }
            }, {
                key: "setSize",
                value: function(t, e) {
                    this._width = Math.ceil(t),
                    this._height = Math.ceil(e),
                    this.updateFrameBuffer()
                }
            }, {
                key: "_createFrameBuffer",
                value: function() {
                    this._gl.activeTexture(this._gl["TEXTURE" + this.textureUnitIndex.toString()]),
                    this._textureWidth = this._getTextureSize(this._width),
                    this._textureHeight = this._getTextureSize(this._height),
                    this._frameBuffer = this._gl.createFramebuffer(),
                    this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, this._frameBuffer),
                    this._depthRenderBuffer = this._gl.createRenderbuffer(),
                    this._gl.bindRenderbuffer(this._gl.RENDERBUFFER, this._depthRenderBuffer),
                    this._gl.renderbufferStorage(this._gl.RENDERBUFFER, this._gl.DEPTH_COMPONENT16, this._textureWidth, this._textureHeight),
                    this._gl.framebufferRenderbuffer(this._gl.FRAMEBUFFER, this._gl.DEPTH_ATTACHMENT, this._gl.RENDERBUFFER, this._depthRenderBuffer),
                    this._glTexture = this._gl.createTexture(),
                    this._gl.bindTexture(this._gl.TEXTURE_2D, this._glTexture),
                    this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._format, this._textureWidth, this._textureHeight, 0, this._format, this._type, null),
                    this.mipmap && this._gl.generateMipmap(this._gl.TEXTURE_2D),
                    this._gl.framebufferTexture2D(this._gl.FRAMEBUFFER, this._gl.COLOR_ATTACHMENT0, this._gl.TEXTURE_2D, this._glTexture, 0),
                    this._gl.bindTexture(this._gl.TEXTURE_2D, null),
                    this._gl.bindRenderbuffer(this._gl.RENDERBUFFER, null),
                    this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null)
                }
            }, {
                key: "_deleteFrameBuffer",
                value: function() {
                    this._frameBuffer && (this._gl.deleteFramebuffer(this._frameBuffer),
                    this._frameBuffer = null),
                    this._glTexture && (this._gl.deleteTexture(this._glTexture),
                    this._glTexture = null),
                    this._depthRenderBuffer && (this._gl.deleteRenderbuffer(this._depthRenderBuffer),
                    this._depthRenderBuffer = null)
                }
            }, {
                key: "_getTextureSize",
                value: function(t) {
                    var e = t.toString(2).length
                      , i = Math.pow(2, e)
                      , r = Math.pow(2, e - 1);
                    return i - t > t - r ? r : i
                }
            }, {
                key: "getTextureResolution",
                value: function() {
                    return {
                        x: this._textureWidth,
                        y: this._textureHeight
                    }
                }
            }, {
                key: "type",
                set: function(t) {
                    if (this._typeStr = t,
                    "FLOAT" == this._typeStr) {
                        if (!this._gl.getExtension("OES_texture_float"))
                            throw new Error("no support float texture");
                        this._type = this._gl[this._typeStr],
                        "LINEAR" != this.magFilter && "LINEAR" != this.minFilter || this._gl.getExtension("OES_texture_float_linear") || (this.magFilter = "NEAREST",
                        this.minFilter = "NEAREST")
                    } else if ("HALF_FLOAT_OES" == this._typeStr) {
                        var e = this._gl.getExtension("OES_texture_half_float");
                        if (!e)
                            throw new Error("no support half float texture");
                        this._type = e.HALF_FLOAT_OES,
                        "LINEAR" != this.magFilter && "LINEAR" != this.minFilter || this._gl.getExtension("OES_texture_half_float_linear") || (this.magFilter = "NEAREST",
                        this.minFilter = "NEAREST")
                    } else
                        this._type = this._gl[this._typeStr]
                },
                get: function() {
                    return this._typeStr
                }
            }, {
                key: "format",
                set: function(t) {
                    this._formatStr = t,
                    this._format = this._gl[this._formatStr]
                },
                get: function() {
                    return this._formatStr
                }
            }, {
                key: "texture",
                get: function() {
                    return this
                }
            }, {
                key: "width",
                set: function(t) {
                    this._width = t,
                    this.setSize(this._width, this._height)
                },
                get: function() {
                    return this._width
                }
            }, {
                key: "height",
                set: function(t) {
                    this._height = t,
                    this.setSize(this._width, this._height)
                },
                get: function() {
                    return this._height
                }
            }, {
                key: "isDesposed",
                get: function() {
                    return this._isDisposed
                }
            }, {
                key: "needsUpdate",
                set: function(t) {
                    this._needsUpdate = t
                }
            }]),
            t
        }()
          , me = (i(144),
        i(145),
        i(229),
        i(146),
        i(147),
        i(148),
        i(149),
        i(150),
        i(151),
        i(152),
        i(153),
        i(154),
        i(155),
        i(156),
        i(157),
        i(158),
        i(159),
        i(160),
        i(161),
        i(162),
        i(163),
        i(164),
        i(165),
        i(166),
        i(167),
        i(168),
        function() {
            function t() {
                Object(Gt.a)(this, t),
                this.attributes = {},
                this._attrLocations = {},
                this._glIndexBuffer = null,
                this._glBuffers = {},
                this._uuid = ue(),
                this._isDisposed = !1
            }
            return Object(Et.a)(t, [{
                key: "addAttribute",
                value: function(t, e) {
                    this.attributes[t] = e
                }
            }, {
                key: "removeAttribute",
                value: function(t) {
                    this.attributes[t] = null,
                    delete this.attributes[t]
                }
            }, {
                key: "setIndex",
                value: function(t) {
                    this.index = t
                }
            }, {
                key: "removeIndex",
                value: function() {
                    this.index = null
                }
            }, {
                key: "enableAttributes",
                value: function(t) {
                    var e, i;
                    for (var r in this._attrLocations = {},
                    this.attributes)
                        e = this.attributes[r],
                        -1 != (i = this._gl.getAttribLocation(t, r)) && (this._attrLocations[r] = i,
                        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._glBuffers[r]),
                        this._gl.enableVertexAttribArray(i),
                        this._gl.vertexAttribPointer(i, e.itemSize, this._gl.FLOAT, !1, 0, 0));
                    this.index && this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer)
                }
            }, {
                key: "drawGeometry",
                value: function() {
                    this.index ? (this._gl.drawElements(this._gl.TRIANGLES, this.index.count, this._gl.UNSIGNED_SHORT, 0),
                    this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer)) : this._gl.drawArrays(this._gl.TRIANGLES, 0, 3)
                }
            }, {
                key: "disableAttributes",
                value: function() {
                    this._disableAttrLocations()
                }
            }, {
                key: "dispose",
                value: function() {
                    this._isDisposed || (this._disableAttrLocations(),
                    this._deleteGLBuffers(),
                    this.attributes = null,
                    this._attrLocations = null,
                    this._glBuffers = null,
                    this._gl = null,
                    this._isDisposed = !0)
                }
            }, {
                key: "updateGLBuffers",
                value: function() {
                    this._deleteGLBuffers(),
                    this._createGLBuffers()
                }
            }, {
                key: "setGLContext",
                value: function(t) {
                    this._gl = t,
                    this._createGLBuffers()
                }
            }, {
                key: "updateAttribute",
                value: function(t, e) {
                    this.attributes[t].array = e,
                    this._updateVBO(this._glBuffers[t], e)
                }
            }, {
                key: "updateIndex",
                value: function(t) {
                    this.index = t,
                    this._updateIBO(t)
                }
            }, {
                key: "_disableAttrLocations",
                value: function() {
                    for (var t in this._attrLocations)
                        this._disableAttrLocation(this._attrLocations[t]);
                    this.index && this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null)
                }
            }, {
                key: "_disableAttrLocation",
                value: function(t) {
                    this._gl.disableVertexAttribArray(t)
                }
            }, {
                key: "_createGLBuffers",
                value: function() {
                    var t;
                    for (var e in this.attributes)
                        t = this.attributes[e],
                        this._glBuffers[e] = this._createVBO(t.array, t.dynamic);
                    this.index && (this._glIndexBuffer = this._createIBO(this.index.array, !1))
                }
            }, {
                key: "_deleteGLBuffers",
                value: function() {
                    for (var t in this.attributes)
                        this._gl.deleteBuffer(this._glBuffers[t]);
                    this._glBuffers = {}
                }
            }, {
                key: "_createVBO",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = e ? "DYNAMIC_DRAW" : "STATIC_DRAW"
                      , r = this._gl.createBuffer();
                    return this._gl.bindBuffer(this._gl.ARRAY_BUFFER, r),
                    this._gl.bufferData(this._gl.ARRAY_BUFFER, t, this._gl[i]),
                    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null),
                    r
                }
            }, {
                key: "_updateVBO",
                value: function(t, e) {
                    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, t),
                    this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, e),
                    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null)
                }
            }, {
                key: "_createIBO",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = e ? "DYNAMIC_DRAW" : "STATIC_DRAW"
                      , r = this._gl.createBuffer();
                    return this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, r),
                    this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, t, this._gl[i]),
                    this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null),
                    r
                }
            }, {
                key: "_updateIBO",
                value: function(t) {
                    this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer),
                    this._gl.bufferSubData(this._gl.ELEMENT_ARRAY_BUFFER, 0, t),
                    this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null)
                }
            }, {
                key: "uuid",
                get: function() {
                    return this._uuid
                }
            }, {
                key: "isDesposed",
                get: function() {
                    return this._isDisposed
                }
            }]),
            t
        }())
          , pe = function() {
            function t(e, i) {
                Object(Gt.a)(this, t),
                this.itemSize = i,
                this.setArray(e),
                this.dynamic = !1
            }
            return Object(Et.a)(t, [{
                key: "setArray",
                value: function(t) {
                    return this.count = void 0 !== t ? t.length / this.itemSize : 0,
                    this.array = t,
                    this
                }
            }, {
                key: "clone",
                value: function() {
                    return new t(this.array,this.itemSize)
                }
            }]),
            t
        }()
          , be = function(t) {
            function e(t, i, r, a) {
                var o;
                Object(Gt.a)(this, e),
                o = Object(Vt.a)(this, Object(jt.a)(e).call(this));
                var n, s, l = (t = t || 1) / 2, c = (i = i || 1) / 2, d = Math.floor(r) || 1, u = Math.floor(a) || 1, f = d + 1, h = u + 1, m = t / d, p = i / u, b = [], g = [], v = [], w = [];
                for (s = 0; s < h; s++) {
                    var k = s * p - c;
                    for (n = 0; n < f; n++) {
                        var x = n * m - l;
                        g.push(x, -k, 0),
                        v.push(0, 0, 1),
                        w.push(n / d),
                        w.push(s / u)
                    }
                }
                for (s = 0; s < u; s++)
                    for (n = 0; n < d; n++) {
                        var _ = n + f * s
                          , y = n + f * (s + 1)
                          , M = n + 1 + f * (s + 1)
                          , C = n + 1 + f * s;
                        b.push(_, y, C),
                        b.push(y, M, C)
                    }
                return o.setIndex(new pe(new Uint16Array(b),1)),
                o.addAttribute("position", new pe(new Float32Array(g),3)),
                o.addAttribute("normal", new pe(new Float32Array(v),3)),
                o.addAttribute("uv", new pe(new Float32Array(w),2)),
                o
            }
            return Object($t.a)(e, t),
            e
        }(me)
          , ge = i(100)
          , ve = i.n(ge)
          , we = i(3)
          , ke = i.n(we)
          , xe = function() {
            function t() {
                Object(Gt.a)(this, t),
                this.children = [],
                this.matrix = oe.a.create(),
                this.modelMatrix = oe.a.create(),
                this._modelMatrixInverse = oe.a.create(),
                this.quaternion = oe.b.create(),
                this.position = oe.c.create(),
                this.scale = oe.c.create(),
                oe.c.set(this.scale, 1, 1, 1),
                this.parent = null,
                this.isVisible = !0,
                this.renderOrder = 0,
                this.isRenderable = !1,
                this._uuid = ue(),
                this._isDisposed = !1
            }
            return Object(Et.a)(t, [{
                key: "add",
                value: function(t) {
                    this.children.push(t),
                    t.parent = this
                }
            }, {
                key: "remove",
                value: function(t) {
                    var e, i, r = ke()(e = this.children).call(e, t);
                    -1 !== r && (t.parent = null,
                    ve()(i = this.children).call(i, r, 1))
                }
            }, {
                key: "setRotationFromEuler",
                value: function(t, e, i) {
                    oe.b.fromEuler(this.quaternion, t, e, i)
                }
            }, {
                key: "rotateX",
                value: function(t) {
                    oe.b.rotateX(this.quaternion, this.quaternion, t)
                }
            }, {
                key: "rotateY",
                value: function(t) {
                    oe.b.rotateY(this.quaternion, this.quaternion, t)
                }
            }, {
                key: "rotateZ",
                value: function(t) {
                    oe.b.rotateZ(this.quaternion, this.quaternion, t)
                }
            }, {
                key: "rotateOnAxis",
                value: function(t, e) {
                    oe.b.setAxisAngle(this.quaternion, t, e)
                }
            }, {
                key: "applyMatrix",
                value: function(t) {
                    oe.a.multiply(this.matrix, t, this.matrix),
                    oe.a.getTranslation(this.position, this.matrix),
                    oe.a.getRotation(this.quaternion, this.matrix),
                    oe.a.getScaling(this.scale, this.matrix)
                }
            }, {
                key: "updateMatrix",
                value: function() {
                    var t = this.quaternion[0]
                      , e = this.quaternion[1]
                      , i = this.quaternion[2]
                      , r = this.quaternion[3]
                      , a = t + t
                      , o = e + e
                      , n = i + i
                      , s = t * a
                      , l = t * o
                      , c = t * n
                      , d = e * o
                      , u = e * n
                      , f = i * n
                      , h = r * a
                      , m = r * o
                      , p = r * n
                      , b = this.scale[0]
                      , g = this.scale[1]
                      , v = this.scale[2];
                    oe.a.set(this.matrix, (1 - (d + f)) * b, (l + p) * b, (c - m) * b, 0, (l - p) * g, (1 - (s + f)) * g, (u + h) * g, 0, (c + m) * v, (u - h) * v, (1 - (s + d)) * v, 0, this.position[0], this.position[1], this.position[2], 1),
                    this.parent ? oe.a.multiply(this.modelMatrix, this.parent.modelMatrix, this.matrix) : oe.a.copy(this.modelMatrix, this.matrix),
                    oe.a.invert(this._modelMatrixInverse, this.modelMatrix);
                    for (var w = 0, k = this.children.length; w < k; w++)
                        this.children[w].updateMatrix()
                }
            }, {
                key: "updateTextureUnitIndicies",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this._setTextureUnitIndicies(t)
                }
            }, {
                key: "setGLContext",
                value: function(t) {
                    for (var e = 0, i = this.children.length; e < i; e++)
                        this.children[e].setGLContext(t)
                }
            }, {
                key: "dispose",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!this._isDisposed) {
                        for (var e, i = 0, r = this.children.length; i < r; i++)
                            (e = this.children[i]) && e.dispose(t);
                        this.parent && this.parent.remove(this),
                        this.isRenderable = !1,
                        this.isVisible = !1,
                        this.children = null,
                        this.matrix = null,
                        this.modelMatrix = null,
                        this._modelMatrixInverse = null,
                        this.quaternion = null,
                        this.position = null,
                        this.scale = null,
                        this._isDisposed = !0
                    }
                }
            }, {
                key: "_setTextureUnitIndicies",
                value: function(t) {
                    this.isRenderable && (t = this.material.setTextureUnitIndicies(t));
                    for (var e = 0, i = this.children.length; e < i; e++)
                        t = this.children[e]._setTextureUnitIndicies(t);
                    return t
                }
            }, {
                key: "uuid",
                get: function() {
                    return this._uuid
                }
            }, {
                key: "isDesposed",
                get: function() {
                    return this._isDisposed
                }
            }]),
            t
        }()
          , _e = function(t) {
            function e(t, i) {
                return Object(Gt.a)(this, e),
                Object(Vt.a)(this, Object(jt.a)(e).call(this, t, i))
            }
            return Object($t.a)(e, t),
            e
        }(function(t) {
            function e(t, i) {
                var r;
                return Object(Gt.a)(this, e),
                (r = Object(Vt.a)(this, Object(jt.a)(e).call(this))).isRenderable = !0,
                r.geometry = t,
                r.material = i,
                r
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "setGLContext",
                value: function(t) {
                    this._gl = t,
                    this.geometry.setGLContext(this._gl),
                    this.material.setGLContext(this._gl),
                    Object(Ut.a)(Object(jt.a)(e.prototype), "setGLContext", this).call(this, t)
                }
            }, {
                key: "setMaterial",
                value: function(t) {
                    this.material = t
                }
            }, {
                key: "render",
                value: function() {
                    this._gl && (this._gl.useProgram(this.material.glProgram),
                    this.material.enableCullingSetting(),
                    this.material.enableBlendSetting(),
                    this.material.enableDepthSetting(),
                    this.material.enableUniforms(),
                    this.geometry.enableAttributes(this.material.glProgram),
                    this.geometry.drawGeometry(),
                    this.geometry.disableAttributes(this.material.glProgram))
                }
            }, {
                key: "dispose",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    t && (this.geometry && this.geometry.dispose(),
                    this.material && this.material.dispose(),
                    this.geometry = null,
                    this.material = null),
                    this._gl = null,
                    Object(Ut.a)(Object(jt.a)(e.prototype), "dispose", this).call(this, t)
                }
            }, {
                key: "glProgram",
                get: function() {
                    return this.material && this.material.glProgram
                }
            }]),
            e
        }(xe))
          , ye = function() {
            function t(e, i, r, a, o) {
                var n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
                  , s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                Object(Gt.a)(this, t),
                this.renderer = a,
                this.gl = e,
                this.updateMaterial = o,
                this.currentTextureIndex = 0,
                this.renderTargets = [new he(e,i,r,n), new he(e,i,r,n)],
                s || (s = new be(100,100)),
                this.plane = new _e(s,this.updateMaterial),
                this.plane.setGLContext(this.gl)
            }
            return Object(Et.a)(t, [{
                key: "render",
                value: function() {
                    this.renderer.render(this.plane, this.renderTargets[this.currentTextureIndex])
                }
            }, {
                key: "setMaterial",
                value: function(t) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.updateMaterial = t,
                    this.plane.setMaterial(this.updateMaterial)
                }
            }, {
                key: "swapTexture",
                value: function() {
                    this.currentTextureIndex = (this.currentTextureIndex + 1) % 2
                }
            }, {
                key: "getTexture",
                value: function() {
                    return this.getRenderTarget().texture
                }
            }, {
                key: "getTextureResolution",
                value: function() {
                    return this.getTexture().getTextureResolution()
                }
            }, {
                key: "getRenderTarget",
                value: function() {
                    return this.renderTargets[this.currentTextureIndex]
                }
            }, {
                key: "setSize",
                value: function(t, e) {
                    this.renderTargets[0].setSize(t, e),
                    this.renderTargets[1].setSize(t, e)
                }
            }, {
                key: "setBgColor",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    this.renderTargets[0].setBgColor(t, e),
                    this.renderTargets[1].setBgColor(t, e)
                }
            }, {
                key: "disposoe",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.renderTargets[0].dispose(),
                    this.renderTargets[1].dispose(),
                    this.updateMaterial.dispose(),
                    this.plane.dispose(t),
                    this.gl = null,
                    this.render = null
                }
            }]),
            t
        }()
          , Me = function(t) {
            function e(t, i, r, a) {
                var o;
                return Object(Gt.a)(this, e),
                (o = Object(Vt.a)(this, Object(jt.a)(e).call(this))).fov = t,
                o.aspect = i,
                o.near = r,
                o.far = a,
                o.updateProjectionMatrix(),
                o
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "updateProjectionMatrix",
                value: function() {
                    return oe.a.perspective(this.projectionMatrix, this.fov, this.aspect, this.near, this.far),
                    this.projectionMatrix
                }
            }]),
            e
        }(function(t) {
            function e() {
                var t;
                return Object(Gt.a)(this, e),
                (t = Object(Vt.a)(this, Object(jt.a)(e).call(this))).up = [0, 1, 0],
                t.projectionMatrix = oe.a.create(),
                t.viewMatrix = oe.a.create(),
                t.lookAt(0, 0, 0),
                t
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "lookAt",
                value: function(t, e, i) {
                    oe.a.lookAt(this.viewMatrix, this.position, [t, e, i], this.up);
                    var r = oe.a.create();
                    oe.a.invert(r, this.viewMatrix),
                    oe.a.getRotation(this.quaternion, r)
                }
            }]),
            e
        }(xe))
          , Ce = {
            depthFunc: "LEQUAL",
            depthTest: !0,
            blendDst: "ONE_MINUS_SRC_COLOR",
            blendDstAlpha: "ONE",
            blendEquation: "FUNC_ADD",
            blendEquationAlpha: "ONE",
            blending: "normal",
            blendSrc: "SRC_ALPHA",
            blendSrcAlpha: "ONE",
            cullFace: !1
        }
          , Te = function() {
            function t(e) {
                for (var i in Object(Gt.a)(this, t),
                this._uniLocations = {},
                this._uuid = ue(),
                this._isDisposed = !1,
                this._blending = "",
                this._glBlendEquation = "",
                this._glBlendEquationAlpha = "",
                this._glBlendSrc = "",
                this._glBlendDst = "",
                this._glBlendSrcAlpha = "",
                this._glBlendDstAlpha = "",
                this._enableFuncLabel = "",
                this._glProgram = null,
                this.vertexShader = e.vertexShader,
                this.fragmentShader = e.fragmentShader,
                this.uniforms = e.uniforms,
                e = b()({}, Ce, e))
                    this[i] = e[i]
            }
            return Object(Et.a)(t, [{
                key: "dispose",
                value: function() {
                    this._isDisposed || (this._deleteGLProgram(),
                    this._deleteGLShaders(),
                    this._gl = null,
                    this._isDisposed = !0)
                }
            }, {
                key: "enableCullingSetting",
                value: function() {
                    this.cullFace ? this._gl.enable(this._gl.CULL_FACE) : this._gl.disable(this._gl.CULL_FACE)
                }
            }, {
                key: "enableDepthSetting",
                value: function() {
                    this.depthTest ? (this._gl.enable(this._gl.DEPTH_TEST),
                    this._gl.depthFunc(this._gl[this.depthFunc])) : this._gl.disable(this._gl.DEPTH_TEST)
                }
            }, {
                key: "enableBlendSetting",
                value: function() {
                    this._gl[this._enableFuncLabel](this._gl.BLEND),
                    this._gl.blendEquationSeparate(this._glBlendEquation, this._glBlendEquationAlpha),
                    this._gl.blendFuncSeparate(this._glBlendSrc, this._glBlendDst, this._glBlendSrcAlpha, this._glBlendDstAlpha)
                }
            }, {
                key: "enableUniforms",
                value: function() {
                    var t, e;
                    for (var i in this._uniLocations = {},
                    this.uniforms) {
                        var r, a;
                        if (t = this.uniforms[i],
                        e = this._gl.getUniformLocation(this._glProgram, i),
                        this._uniLocations[i] = e,
                        ke()(r = t.type).call(r, "Matrix") >= 0)
                            this._gl[t.type](e, !1, t.value);
                        else if (ke()(a = t.type).call(a, "texture") >= 0) {
                            var o;
                            t.value && l()(o = t.value).call(o, e)
                        } else {
                            var n, s = t.value;
                            isNaN(t.value) || (s = [t.value]);
                            var c = [e];
                            ke()(n = t.type).call(n, "v") >= 0 ? c.push(Pt()(Array.prototype).call(s)) : c = Mt()(c).call(c, Pt()(Array.prototype).call(s)),
                            this._gl[t.type].apply(this._gl, c)
                        }
                    }
                }
            }, {
                key: "setGLContext",
                value: function(t) {
                    var e;
                    for (var i in this._gl = t,
                    this._createGLProgram(),
                    this.uniforms) {
                        var r;
                        e = this.uniforms[i],
                        ke()(r = e.type).call(r, "texture") >= 0 && e.value && e.value.setGLContext && e.value.setGLContext(this._gl)
                    }
                    this.updateBlendingValues()
                }
            }, {
                key: "getGLShaders",
                value: function() {
                    return this._glShaders
                }
            }, {
                key: "updateGLShaders",
                value: function() {
                    this._deleteGLShaders(),
                    this._createGLShaders()
                }
            }, {
                key: "setTextureUnitIndicies",
                value: function(t) {
                    var e, i = {};
                    for (var r in this.uniforms) {
                        var a;
                        e = this.uniforms[r],
                        ke()(a = e.type).call(a, "texture") >= 0 && e.value && !i[e.value.uuid] && (i[e.value.uuid] = !0,
                        e.value.textureUnitIndex = t++)
                    }
                    return t
                }
            }, {
                key: "_updateGLProgram",
                value: function() {
                    this._deleteGLProgram(),
                    this._createGLProgram()
                }
            }, {
                key: "_createGLProgram",
                value: function() {
                    if (this._createGLShaders(),
                    this._glProgram = this._gl.createProgram(),
                    this._gl.attachShader(this._glProgram, this._glShaders.vertexShader),
                    this._gl.attachShader(this._glProgram, this._glShaders.fragmentShader),
                    this._gl.linkProgram(this._glProgram),
                    this._gl.getProgramParameter(this._glProgram, this._gl.LINK_STATUS))
                        return this._glProgram;
                    throw new Error(this._gl.getProgramInfoLog(this._glProgram))
                }
            }, {
                key: "_detachGLShaders",
                value: function() {
                    for (var t = this._gl.getAttachedShaders(this._glProgram), e = 0, i = t.length; e < i; e++)
                        this._gl.detachShader(this._glProgram, t[e])
                }
            }, {
                key: "_deleteGLProgram",
                value: function() {
                    this._glProgram && (this._detachGLShaders(),
                    this._gl.deleteProgram(this._glProgram),
                    this._glProgram = null)
                }
            }, {
                key: "_createGLShaders",
                value: function() {
                    return this._glShaders = {
                        vertexShader: this._createGLShader(this.vertexShader, this._gl.VERTEX_SHADER),
                        fragmentShader: this._createGLShader(this.fragmentShader, this._gl.FRAGMENT_SHADER)
                    },
                    this._glShaders
                }
            }, {
                key: "_deleteGLShaders",
                value: function() {
                    this._glShaders && (this._gl.deleteShader(this._glShaders.vertexShader),
                    this._gl.deleteShader(this._glShaders.fragmentShader),
                    this._glShaders = null)
                }
            }, {
                key: "_createGLShader",
                value: function(t, e) {
                    var i = this._gl.createShader(e);
                    if (this._gl.shaderSource(i, t),
                    this._gl.compileShader(i),
                    this._gl.getShaderParameter(i, this._gl.COMPILE_STATUS))
                        return i;
                    throw new Error(this._gl.getShaderInfoLog(i))
                }
            }, {
                key: "updateBlendingValues",
                value: function() {
                    this._gl && (this._blending ? this._enableFuncLabel = "enable" : this._enableFuncLabel = "disable",
                    "custom" == this._blending ? (this._glBlendEquation = this._gl[this.blendEquation],
                    this._glBlendEquationAlpha = this._gl[this.blendEquationAlpha],
                    this._glBlendSrc = this._gl[this.blendSrc],
                    this._glBlendDst = this._gl[this.blendDst],
                    this._glBlendSrcAlpha = this._gl[this.blendSrcAlpha],
                    this._glBlendDstAlpha = this._gl[this.blendDstAlpha]) : (this._glBlendEquation = this._gl.FUNC_ADD,
                    this._glBlendEquationAlpha = this._gl.FUNC_ADD,
                    this._glBlendSrcAlpha = this._gl.ONE,
                    this._glBlendDstAlpha = this._gl.ONE,
                    "normal" == this._blending ? (this._glBlendSrc = this._gl.SRC_ALPHA,
                    this._glBlendDst = this._gl.ONE_MINUS_SRC_ALPHA) : "additive" == this._blending ? (this._glBlendSrc = this._gl.SRC_ALPHA,
                    this._glBlendDst = this._gl.ONE) : "subtractive" == this._blending ? (this._glBlendEquation = this._gl.FUNC_REVERSE_SUBTRACT,
                    this._glBlendSrc = this._gl.SRC_ALPHA,
                    this._glBlendDst = this._gl.DST_ALPHA) : "multiply" == this._blending && (this._glBlendSrc = this._gl.DST_COLOR,
                    this._glBlendDst = this._gl.ZERO)))
                }
            }, {
                key: "uuid",
                get: function() {
                    return this._uuid
                }
            }, {
                key: "glProgram",
                get: function() {
                    return this._glProgram
                }
            }, {
                key: "isDesposed",
                get: function() {
                    return this._isDisposed
                }
            }, {
                key: "blending",
                set: function(t) {
                    this._blending = t,
                    this.updateBlendingValues()
                },
                get: function() {
                    return this._blending
                }
            }]),
            t
        }()
          , ze = function(t) {
            function e() {
                var t;
                return Object(Gt.a)(this, e),
                (t = Object(Vt.a)(this, Object(jt.a)(e).call(this)))._ext = null,
                t.numInstances = 1,
                t
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "addAttribute",
                value: function(t, e) {
                    this.attributes[t] = e
                }
            }, {
                key: "removeAttribute",
                value: function(t) {
                    this.attributes[t] = null,
                    delete this.attributes[t]
                }
            }, {
                key: "setIndex",
                value: function(t) {
                    this.index = t
                }
            }, {
                key: "removeIndex",
                value: function() {
                    this.index = null
                }
            }, {
                key: "enableAttributes",
                value: function(t) {
                    var e, i;
                    for (var r in this._attrLocations = {},
                    this.attributes)
                        e = this.attributes[r],
                        -1 != (i = this._gl.getAttribLocation(t, r)) && (this._attrLocations[r] = i,
                        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._glBuffers[r]),
                        this._gl.enableVertexAttribArray(i),
                        this._gl.vertexAttribPointer(i, e.itemSize, this._gl.FLOAT, !1, 0, 0),
                        this._ext.vertexAttribDivisorANGLE(i, e.divisor || 0));
                    this.index && this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer)
                }
            }, {
                key: "drawGeometry",
                value: function() {
                    this.index ? (this._ext.drawElementsInstancedANGLE(this._gl.TRIANGLES, this.index.count, this._gl.UNSIGNED_SHORT, 0, this.numInstances),
                    this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._glIndexBuffer)) : this._ext.drawArraysInstancedANGLE(this._gl.TRIANGLES, 0, 3, this.numInstances)
                }
            }, {
                key: "setExt",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if (!this._ext && (this._ext = null === t ? this._gl.getExtension("ANGLE_instanced_arrays") : t,
                    null == this._ext))
                        throw new Error("ANGLE_instanced_arrays not supported")
                }
            }, {
                key: "setGLContext",
                value: function(t) {
                    Object(Ut.a)(Object(jt.a)(e.prototype), "setGLContext", this).call(this, t),
                    this.setExt(this._ext)
                }
            }, {
                key: "_disableAttrLocation",
                value: function(t) {
                    this._gl.disableVertexAttribArray(t),
                    this._ext.vertexAttribDivisorANGLE(t, 0)
                }
            }]),
            e
        }(me)
          , Se = function(t) {
            function e(t, i) {
                var r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return Object(Gt.a)(this, e),
                (r = Object(Vt.a)(this, Object(jt.a)(e).call(this, t, i))).divisor = a,
                r.dynamic = !1,
                r
            }
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "clone",
                value: function() {
                    return new e(this.array,this.itemSize,this.divisor)
                }
            }]),
            e
        }(pe)
          , Ie = function() {
            function t(e, i, r) {
                if (Object(Gt.a)(this, t),
                this._ext = r.getExtension("ANGLE_instanced_arrays"),
                this._baseGeometry = e,
                this._geometry = null,
                this._isPseudo = !1,
                this._numInstances = i,
                this._numPositions = this._baseGeometry.attributes.position.count,
                this._ext) {
                    this._geometry = new ze,
                    this._geometry.numInstances = this._numInstances,
                    this._geometry.setExt(this._ext);
                    var a = this._baseGeometry.attributes.position.clone();
                    this._geometry.addAttribute("position", a),
                    this._geometry.addAttribute("uv", this._baseGeometry.attributes.uv.clone()),
                    this._geometry.addAttribute("normal", this._baseGeometry.attributes.normal.clone()),
                    this._geometry.setIndex(this._baseGeometry.index.clone())
                } else
                    this._isPseudo = !0,
                    this._geometry = new me,
                    this._setPseudoAttribute("position"),
                    this._setPseudoAttribute("uv"),
                    this._setPseudoAttribute("normal"),
                    this._setPseudoIndex();
                for (var o = [], n = [], s = 0; s < this._numInstances; s++)
                    n.push(s),
                    o.push(this._getRandomValue()),
                    o.push(this._getRandomValue()),
                    o.push(this._getRandomValue()),
                    o.push(this._getRandomValue());
                this.setAttribute("randomValues", o, Float32Array, 4, 1),
                this.setAttribute("instanceIndex", n, Float32Array, 1, 1)
            }
            return Object(Et.a)(t, [{
                key: "setAttribute",
                value: function(t, e, i, r) {
                    var a, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, n = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    if (this._isPseudo) {
                        for (var s = [], l = 0; l < this._numInstances; l++)
                            for (var c = 0, d = this._numPositions; c < d; c++)
                                for (var u = 0; u < r; u++)
                                    s.push(e[l * r + u]);
                        a = new pe(new i(s),r)
                    } else
                        a = new Se(new i(e),r,o);
                    a.dynamic = n,
                    this._geometry.addAttribute(t, a)
                }
            }, {
                key: "setAttributeByVertex",
                value: function(t, e, i, r) {
                    var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                      , o = new pe(new i(e),r);
                    o.dynamic = a,
                    this._geometry.addAttribute(t, o)
                }
            }, {
                key: "updateAttribute",
                value: function(t, e, i) {
                    if (this._isPseudo) {
                        for (var r = [], a = 0; a < this._numInstances; a++)
                            for (var o = 0, n = this._numPositions; o < n; o++)
                                for (var s = 0; s < itemSize; s++)
                                    r.push(e[a * itemSize + s]);
                        this._geometry.updateAttribute(t, new i(r))
                    } else
                        this._geometry.updateAttribute(t, new i(e))
                }
            }, {
                key: "getGeometry",
                value: function() {
                    return this._geometry
                }
            }, {
                key: "_getRandomValue",
                value: function() {
                    return (Math.random() + Math.random() + Math.random()) / 3
                }
            }, {
                key: "_setPseudoAttribute",
                value: function(t) {
                    for (var e = this._baseGeometry.attributes[t], i = Pt()(Array.prototype).call(e.array), r = [], a = 0; a < this._numInstances; a++)
                        r = Mt()(r).call(r, i);
                    this._geometry.addAttribute(t, new pe(new Float32Array(r),e.itemSize))
                }
            }, {
                key: "_setPseudoIndex",
                value: function() {
                    for (var t = Pt()(Array.prototype).call(this._baseGeometry.index.array), e = [], i = 0; i < this._numInstances; i++)
                        for (var r = 0, a = this._baseGeometry.index.count; r < a; r++)
                            e.push(i * this._numPositions + t[r]);
                    this._geometry.setIndex(new pe(new Uint16Array(e),1))
                }
            }]),
            t
        }()
          , Be = (i(102),
        function(t) {
            return Le.apply(this, arguments)
        }
        );
        function Le() {
            return (Le = Object(O.a)(a.a.mark((function t(e) {
                return a.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", new n.a((function(t, i) {
                                var r, a, o;
                                return r = new Image,
                                o = function() {
                                    return r.removeEventListener("load", o),
                                    r.removeEventListener("error", a),
                                    t(r)
                                }
                                ,
                                a = function() {
                                    return r.removeEventListener("load", o),
                                    r.removeEventListener("error", a),
                                    i("img load error", e)
                                }
                                ,
                                r.addEventListener("load", o),
                                r.addEventListener("error", a),
                                r.src = e
                            }
                            )));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        var Ae = "#f8f8f8"
          , Oe = "#0d0d0d"
          , Ge = function(t) {
            function e(t, i, r, a) {
                var o;
                return Object(Gt.a)(this, e),
                (o = Object(Vt.a)(this, Object(jt.a)(e).call(this))).gl = t,
                o.adjustTxt = a,
                o.canvas = document.createElement("canvas"),
                o.canvasCtx = o.canvas.getContext("2d"),
                o.width = i,
                o.height = r,
                o.canvas.width = i,
                o.canvas.height = r,
                o.setCanvas(o.canvas),
                o.setGLContext(o.gl),
                o
            }
            var i;
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "getTextureData",
                value: function(t, e, i, r) {
                    return {
                        offsetTop: (t - r) / this.height,
                        width: (e + 2 * r) / this.width,
                        height: (i + 1.5 * r) / this.height
                    }
                }
            }, {
                key: "setData",
                value: (i = Object(O.a)(a.a.mark((function t(e, i) {
                    var r, o, n, s, l, c, d, u, f, h, m, p, b, g = arguments;
                    return a.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (g.length > 2 && void 0 !== g[2] && g[2] || !this.data || this.data.pageId != e.pageId) {
                                    t.next = 4;
                                    break
                                }
                                return this.textureData.isSameData = !0,
                                t.abrupt("return", this.textureData);
                            case 4:
                                return this.currentLoadingPageId = e.pageId,
                                this.data = e,
                                r = Ae,
                                o = this.data.colors[0],
                                i && (r = Oe,
                                this.data.flipColorWhenDarkMode && (o = this.data.colors[1])),
                                n = {
                                    pageId: e.pageId,
                                    isCanceled: !1,
                                    isSameData: !1,
                                    title: {},
                                    titleLine2: {},
                                    title2: {},
                                    titleJp: {}
                                },
                                s = .5 * this.height,
                                this.canvasCtx.clearRect(0, 0, this.width, this.height),
                                this.canvasCtx.clearRect(0, 0, this.width, this.height),
                                this.canvasCtx.fillStyle = o,
                                this.canvasCtx.fillRect(0, s, this.width, .5 * this.height),
                                t.next = 18,
                                Be(this.data.mainImg);
                            case 18:
                                if (l = t.sent,
                                this.currentLoadingPageId == e.pageId) {
                                    t.next = 22;
                                    break
                                }
                                return n.isCanceled = !0,
                                t.abrupt("return", n);
                            case 22:
                                return this.textureData = n,
                                this.textureData.isCanceled = !1,
                                this.canvasCtx.drawImage(l, 0, 0, this.width, .5 * this.height),
                                c = 0,
                                this.canvasCtx.fillStyle = r,
                                this.canvasCtx.textAlign = "left",
                                this.canvasCtx.textBaseline = "top",
                                d = this.data.title,
                                ke()(d).call(d, "_") >= 0 && (f = d.split("_"),
                                h = Object(rt.a)(f, 2),
                                d = h[0],
                                u = h[1]),
                                s += m = 24,
                                this.canvas.style.letterSpacing = "0",
                                this.canvasCtx.font = "".concat(120, "px Futura"),
                                c = this.canvasCtx.measureText(d).width,
                                this.canvasCtx.fillText(d, m, s),
                                this.textureData.title = this.getTextureData(s, c, 120, m),
                                s += 120 + m,
                                u && (s += m,
                                c = this.canvasCtx.measureText(u).width,
                                this.canvasCtx.fillText(u, m, s),
                                this.textureData.titleLine2 = this.getTextureData(s, c, 120, m),
                                s += 120 + m),
                                this.data.title2 && (s += p = 14.4,
                                this.canvas.style.letterSpacing = "0",
                                this.canvasCtx.font = "".concat(72, "px Futura"),
                                c = this.canvasCtx.measureText(this.data.title2).width,
                                this.canvasCtx.fillText(this.data.title2, p, s),
                                this.textureData.title2 = this.getTextureData(s, c, 72, p),
                                s += 72 + p),
                                this.data.titleJp && (s += b = 8.4,
                                this.canvas.style.letterSpacing = "0.05em",
                                this.canvasCtx.font = "".concat(42, 'px "Noto Sans JP"'),
                                c = this.canvasCtx.measureText(this.data.titleJp).width,
                                this.canvasCtx.fillText(this.data.titleJp, b, s),
                                this.textureData.titleJp = this.getTextureData(s + (this.adjustTxt ? b : 0), c, 42 + (this.adjustTxt ? b : 0), b)),
                                this.updateGLTexture(),
                                t.abrupt("return", this.textureData);
                            case 44:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t, e) {
                    return i.apply(this, arguments)
                }
                )
            }]),
            e
        }(fe)
          , Ee = i(27)
          , Xe = function(t) {
            function e(t, i, r, a, o, n) {
                var s;
                Object(Gt.a)(this, e),
                s = Object(Vt.a)(this, Object(jt.a)(e).call(this)),
                t = t || 1,
                i = i || 1,
                r = r || 1,
                a = Math.floor(a) || 1,
                o = Math.floor(o) || 1,
                n = Math.floor(n) || 1;
                var l = []
                  , c = []
                  , d = []
                  , u = []
                  , f = 0;
                function h(t, e, i, r, a, o, n, s, h, m, p) {
                    var b, g, v = o / h, w = n / m, k = o / 2, x = n / 2, _ = s / 2, y = h + 1, M = m + 1, C = 0, T = oe.c.create();
                    for (g = 0; g < M; g++) {
                        var z = g * w - x;
                        for (b = 0; b < y; b++) {
                            var S = b * v - k;
                            T[t] = S * r,
                            T[e] = z * a,
                            T[i] = _,
                            c.push(T[0], T[1], T[2]),
                            T[t] = 0,
                            T[e] = 0,
                            T[i] = s > 0 ? 1 : -1,
                            d.push(T[0], T[1], T[2]),
                            u.push(b / h),
                            u.push(g / m),
                            C += 1
                        }
                    }
                    for (g = 0; g < m; g++)
                        for (b = 0; b < h; b++) {
                            var I = f + b + y * g
                              , B = f + b + y * (g + 1)
                              , L = f + (b + 1) + y * (g + 1)
                              , A = f + (b + 1) + y * g;
                            l.push(I, B, A),
                            l.push(B, L, A),
                            6
                        }
                    f += C
                }
                return (h("2", "1", "0", -1, -1, r, i, t, n, o, 0),
                h("2", "1", "0", 1, -1, r, i, -t, n, o, 1),
                h("0", "2", "1", 1, 1, t, r, i, a, n, 2),
                h("0", "2", "1", 1, -1, t, r, -i, a, n, 3),
                h("0", "1", "2", 1, -1, t, i, r, a, o, 4),
                h("0", "1", "2", -1, -1, t, i, -r, a, o, 5),
                s.setIndex(new pe(new Uint16Array(l),1)),
                s.addAttribute("position", new pe(new Float32Array(c),3)),
                s.addAttribute("normal", new pe(new Float32Array(d),3)),
                s.addAttribute("uv", new pe(new Float32Array(u),2)),
                s)
            }
            return Object($t.a)(e, t),
            e
        }(me)
          , Pe = function(t) {
            function e(t, r, a, o, n, s, l) {
                var c;
                Object(Gt.a)(this, e),
                (c = Object(Vt.a)(this, Object(jt.a)(e).call(this, null, null))).size = t,
                c.camera = s,
                c.worksDetailOffsetTop = 0,
                c.worksData = null,
                c.isTransitionMode = !1,
                c.lightCamera = new Me(60 / 180 * Math.PI,1,.1,1e4),
                c.lightCamera.position[0] = 1e3,
                c.lightCamera.position[1] = 1e3,
                c.lightCamera.position[2] = 1e3,
                c.lightCamera.lookAt(0, 0, 0),
                c.currentAnimationLabel = "",
                c.worksImageTexture = n,
                c.isLoading = !1;
                var d = new Xe(t,t,t,8,8,8);
                c.basePositions = d.attributes.position.array,
                c.geometryBuilder = new Ie(d,352,l);
                c.vpMatrix = oe.a.create(),
                oe.a.multiply(c.vpMatrix, c.camera.projectionMatrix, c.camera.viewMatrix),
                c.lightVPMatrix = oe.a.create(),
                oe.a.multiply(c.lightVPMatrix, c.lightCamera.projectionMatrix, c.lightCamera.viewMatrix);
                var u = {
                    size: {
                        type: "uniform1f",
                        value: t
                    },
                    time: {
                        type: "uniform1f",
                        value: 0
                    },
                    modelMatrix: {
                        type: "uniformMatrix4fv",
                        value: c.modelMatrix
                    },
                    cameraPos: {
                        type: "uniform3f",
                        value: s.position
                    },
                    vpMatrix: {
                        type: "uniformMatrix4fv",
                        value: c.vpMatrix
                    },
                    tMatrix: {
                        type: "uniformMatrix4fv",
                        value: [.5, 0, 0, 0, 0, .5, 0, 0, 0, 0, 1, 0, .5, .5, 0, 1]
                    },
                    lightPos: {
                        type: "uniform3f",
                        value: c.lightCamera.position
                    },
                    lightVPMatrix: {
                        type: "uniformMatrix4fv",
                        value: c.lightVPMatrix
                    },
                    lightNear: {
                        type: "uniform1f",
                        value: c.lightCamera.near
                    },
                    lightFar: {
                        type: "uniform1f",
                        value: c.lightCamera.far
                    },
                    topAnimationValue1: {
                        type: "uniform1f",
                        value: 0
                    },
                    topAnimationValue2: {
                        type: "uniform1f",
                        value: 0
                    },
                    topAnimationValue3: {
                        type: "uniform1f",
                        value: 0
                    },
                    topAnimationValue4: {
                        type: "uniform1f",
                        value: 0
                    },
                    topAnimationValue5: {
                        type: "uniform1f",
                        value: 0
                    },
                    topAnimationValue6: {
                        type: "uniform1f",
                        value: 0
                    },
                    interactionAnimValue: {
                        type: "uniform1f",
                        value: 0
                    },
                    worksAnimValueT: {
                        type: "uniform1f",
                        value: 0
                    },
                    worksAnimValue: {
                        type: "uniform1f",
                        value: 0
                    },
                    aboutAnimValue: {
                        type: "uniform1f",
                        value: 0
                    },
                    worksDetailFactor: {
                        type: "uniform1f",
                        value: 0
                    },
                    worksListOffset: {
                        type: "uniform3f",
                        value: [0, 0, 0]
                    },
                    worksDetailOffset: {
                        type: "uniform3f",
                        value: [0, 0, 0]
                    },
                    worksImageTextureData1: {
                        type: "uniform3f",
                        value: [0, 0, 0]
                    },
                    worksImageTextureData2: {
                        type: "uniform3f",
                        value: [0, 0, 0]
                    },
                    worksImageTextureData3: {
                        type: "uniform3f",
                        value: [0, 0, 0]
                    },
                    worksImageTextureData4: {
                        type: "uniform3f",
                        value: [0, 0, 0]
                    },
                    scaleDefault: {
                        type: "uniform1f",
                        value: 1
                    },
                    scaleTransition: {
                        type: "uniform1f",
                        value: 1
                    },
                    scaleWorksList: {
                        type: "uniform1f",
                        value: 1
                    },
                    scaleWorksDetail: {
                        type: "uniform1f",
                        value: 1
                    },
                    scaleAbout: {
                        type: "uniform1f",
                        value: .9
                    },
                    resolution: {
                        type: "uniform2f",
                        value: [0, 0]
                    },
                    scrollTop: {
                        type: "uniform1f",
                        value: 0
                    },
                    mobileWindowOffsetY: {
                        type: "uniform1f",
                        value: 0
                    },
                    titleScale: {
                        type: "uniform1f",
                        value: 1
                    }
                };
                return c.renderMaterial = new Te({
                    vertexShader: i(295).default,
                    fragmentShader: i(558).default,
                    blending: "normal",
                    cullFace: !0,
                    uniforms: b()({}, u, {
                        depthTexture: {
                            type: "texture",
                            value: a
                        },
                        patternTexture: {
                            type: "texture",
                            value: r
                        },
                        patternAlpha: {
                            type: "uniform1f",
                            value: 1
                        },
                        shadowTexture: {
                            type: "texture",
                            value: o
                        },
                        shadowScale: {
                            type: "uniform1f",
                            value: 40
                        },
                        shadowBias: {
                            type: "uniform1f",
                            value: 8e-4
                        },
                        worksImageTexture: {
                            type: "texture",
                            value: n
                        },
                        worksImageAlpha: {
                            type: "uniform1f",
                            value: 0
                        },
                        baseColor: {
                            type: "uniform4f",
                            value: [0, 0, 0, 0]
                        }
                    })
                }),
                c.depthMaterial = new Te({
                    vertexShader: i(295).default,
                    fragmentShader: i(559).default,
                    uniforms: b()({}, u, {
                        cameraPos: {
                            type: "uniform3f",
                            value: c.lightCamera.position
                        },
                        vpMatrix: {
                            type: "uniformMatrix4fv",
                            value: c.lightVPMatrix
                        }
                    })
                }),
                c.depthMaterial.setGLContext(l),
                c.material = c.renderMaterial,
                c.geometry = c.geometryBuilder.getGeometry(),
                c
            }
            var r, o, s, l;
            return Object($t.a)(e, t),
            Object(Et.a)(e, [{
                key: "setDepthMode",
                value: function(t) {
                    this.setMaterial(t ? this.depthMaterial : this.renderMaterial)
                }
            }, {
                key: "getMenuOpenedFactor",
                value: function() {
                    return this.renderMaterial.uniforms.menuOpenedFactor.value
                }
            }, {
                key: "getMenuOpenedOffsetX",
                value: function() {
                    return this.renderMaterial.uniforms.menuOpenedOffsetX.value
                }
            }, {
                key: "init",
                value: function(t, e) {
                    this.$store = t,
                    this.$nuxt = e,
                    this.initOffsets()
                }
            }, {
                key: "initOffsets",
                value: function() {
                    for (var t, e, i, r, a, o, n, s, l, c, d, u, f, h, m, p, b, g, v, w, k, x, _, y = [], M = [], C = [], T = [], z = [], S = [], I = 2 * this.size, B = Mt()(t = []).call(t, Object(Ee.a)(this.initPos2x2(0, .5 * -this.size, 0)), Object(Ee.a)(this.initPos2x2(0, .5 * this.size, 0))), L = Mt()(e = []).call(e, Object(Ee.a)(this.initPosRing(I, 0, 2 * -I, 0)), Object(Ee.a)(this.initPosPole(I, 2 * -I, 0, 2 * -I)), Object(Ee.a)(this.initPosPole(I, 2 * -I, 0, 2 * I)), Object(Ee.a)(this.initPosPole(I, 2 * I, 0, 2 * -I)), Object(Ee.a)(this.initPosPole(I, 2 * I, 0, 2 * I)), Object(Ee.a)(this.initPosRing(I, 0, 2 * I, 0))), A = Mt()(i = []).call(i, Object(Ee.a)(this.initPosRing(this.size, 0, 2 * -this.size, 0)), Object(Ee.a)(this.initPosPole(this.size, 2 * -this.size, 0, 2 * -this.size)), Object(Ee.a)(this.initPosPole(this.size, 2 * -this.size, 0, 2 * this.size)), Object(Ee.a)(this.initPosPole(this.size, 2 * this.size, 0, 2 * -this.size)), Object(Ee.a)(this.initPosPole(this.size, 2 * this.size, 0, 2 * this.size)), Object(Ee.a)(this.initPosRing(this.size, 0, 2 * this.size, 0))), O = Mt()(r = []).call(r, Object(Ee.a)(this.initPosRing(I, 0, -this.size, -I)), Object(Ee.a)(this.initPosRing(I, 0, this.size, -I)), Object(Ee.a)(this.initPosUnderbar(I, 0, -this.size, 5 * I)), Object(Ee.a)(this.initPosUnderbar(I, 0, this.size, 5 * I))), G = 17 * this.size, E = 11 * this.size, X = 0, P = L.length / 3; X < P; X++) {
                        p = L[3 * X + 1],
                        m = L[3 * X + 0],
                        b = L[3 * X + 2],
                        v = A[3 * X + 1],
                        g = A[3 * X + 0],
                        w = A[3 * X + 2],
                        k = O[3 * X + 0] || 0,
                        x = O[3 * X + 1] || 0,
                        _ = O[3 * X + 2] || 0;
                        for (var R = 0, D = B.length / 3; R < D; R++) {
                            var F = B[3 * R + 0]
                              , W = B[3 * R + 1]
                              , N = B[3 * R + 2];
                            y.push(F + m),
                            y.push(W + p),
                            y.push(N + b),
                            S.push(F + k),
                            S.push(W + x),
                            S.push(N + _)
                        }
                        u = d = .5 * (5 * this.size - G);
                        for (var V = 0; V < 9; V++)
                            4 != V && (s = V % 3,
                            l = Math.floor(V / 3),
                            a = d + s * this.size * 6,
                            o = u + l * this.size * 6,
                            n = 0,
                            C.push(a),
                            C.push(o),
                            C.push(n),
                            a += g,
                            o += v,
                            n += w,
                            M.push(a),
                            M.push(o),
                            M.push(n));
                        f = d = .5 * (5 * this.size - E);
                        for (var j = 0; j < 4; j++)
                            4 != j && (s = j % 2,
                            c = Math.floor(j / 2),
                            a = d + s * this.size * 6,
                            o = -d,
                            n = f + c * this.size * 6,
                            z.push(a),
                            z.push(o),
                            z.push(n),
                            T.push(a + g),
                            T.push(o + v),
                            T.push(n + w),
                            o = d,
                            z.push(a),
                            z.push(o),
                            z.push(n),
                            T.push(a + g),
                            T.push(o + v),
                            T.push(n + w))
                    }
                    this.geometryBuilder.setAttribute("offset0_1", y, Float32Array, 3, 1),
                    this.geometryBuilder.setAttribute("offset0_3", M, Float32Array, 3, 1),
                    this.geometryBuilder.setAttribute("offset0_3_g", C, Float32Array, 3, 1),
                    this.geometryBuilder.setAttribute("offset0_5", T, Float32Array, 3, 1),
                    this.geometryBuilder.setAttribute("offset0_5_g", z, Float32Array, 3, 1),
                    this.geometryBuilder.setAttribute("offset3", S, Float32Array, 3, 1);
                    var U = [];
                    u = d = .5 * -(7 * this.size) + .5 * this.size,
                    f = d;
                    for (var $ = 0; $ < 352; $++)
                        s = (h = $ % 49) % 7,
                        l = Math.floor(h / 7),
                        c = Math.floor($ / 49),
                        a = s * this.size + d,
                        o = l * this.size + u,
                        n = c * this.size + f,
                        U.push(a),
                        U.push(o),
                        U.push(n);
                    this.geometryBuilder.setAttribute("offset0_2", U, Float32Array, 3, 1)
                }
            }, {
                key: "initPos2x2",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = [];
                    t -= .5 * this.size,
                    i -= .5 * this.size;
                    for (var a = 0; a < 4; a++)
                        r.push(t + a % 2 * this.size),
                        r.push(e),
                        r.push(i + Math.floor(a / 2) * this.size);
                    return r
                }
            }, {
                key: "initPosUnderbar",
                value: function(t) {
                    var e, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, o = [];
                    i -= 2 * t,
                    a -= 2 * t;
                    for (var n = 0; n < 5; n++)
                        e = i + n * t,
                        o.push(e),
                        o.push(r),
                        o.push(a);
                    return o
                }
            }, {
                key: "initPosRing",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , a = [];
                    e -= 2 * t;
                    for (var o, n = r - 2 * t, s = r + 2 * t, l = 0; l < 5; l++)
                        if (o = e + l * t,
                        a.push(o),
                        a.push(i),
                        a.push(n),
                        a.push(o),
                        a.push(i),
                        a.push(s),
                        0 == l || 4 == l)
                            for (var c = 0; c < 3; c++)
                                a.push(o),
                                a.push(i),
                                a.push(r - t + c * t);
                    return a
                }
            }, {
                key: "initPosPole",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , a = [];
                    i -= t;
                    for (var o = 0; o < 3; o++)
                        a.push(e),
                        a.push(i + o * t),
                        a.push(r);
                    return a
                }
            }, {
                key: "setUniformValue",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this.renderMaterial.uniforms[t].value = e,
                    i || (this.depthMaterial.uniforms[t].value = e)
                }
            }, {
                key: "update",
                value: function(t) {
                    this.renderMaterial.uniforms.time.value = t,
                    this.depthMaterial.uniforms.time.value = t,
                    oe.a.multiply(this.vpMatrix, this.camera.projectionMatrix, this.camera.viewMatrix)
                }
            }, {
                key: "animateTo",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return this.currentAnimationLabel == t ? "" : (this.timeline && this.timeline.kill(),
                    this.timeline = this.toggleAnimation(this.currentAnimationLabel, t, e, i),
                    this.currentAnimationLabel = t,
                    this.timeline)
                }
            }, {
                key: "animateInteraction",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .4;
                    this.animateUniformValue("interactionAnimValue", t, e, !1, !0, ct.a.easeOut, !0)
                }
            }, {
                key: "toggleAnimation",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , a = ct.B.timeline({
                        delay: r
                    });
                    return t && a.add(this.animateUniformValue(t, 0, i, !1, !1, ct.e.easeNone, !1), 0),
                    e && a.add(this.animateUniformValue(e, 1, i, !1, !1, ct.e.easeNone, !1), 0),
                    a
                }
            }, {
                key: "animateWorksDetailFactor",
                value: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2
                      , i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return ct.B.killTweensOf(this.renderMaterial.uniforms.worksDetailFactor),
                    ct.B.to(this.renderMaterial.uniforms.worksDetailFactor, e, {
                        value: i ? 0 : 1,
                        ease: ct.e.easeNone,
                        onUpdate: function() {
                            t.depthMaterial.uniforms.worksDetailFactor.value = t.renderMaterial.uniforms.worksDetailFactor.value
                        }
                    })
                }
            }, {
                key: "setColorScheme",
                value: function(t) {
                    this.material.uniforms.baseColor.value = t,
                    this.worksData && this.setWorksData(this.worksData)
                }
            }, {
                key: "resize",
                value: function(t, e, i, r) {
                    this.width = i,
                    this.height = r,
                    this.aspectRatio = this.width / this.height,
                    this.setUniformValue("resolution", [t, e]),
                    this.updateParams()
                }
            }, {
                key: "setWorksListOffset",
                value: function(t, e, i) {
                    this.setUniformValue("worksListOffset", [t, e, i])
                }
            }, {
                key: "setWorksDetailOffset",
                value: function(t, e, i) {
                    this.setUniformValue("worksDetailOffset", [t, e, i])
                }
            }, {
                key: "updateParams",
                value: function() {
                    var t, e, i = Math.min(this.width, this.height) / 1e3, r = 0, a = this.material.uniforms.worksListOffset.value[1], o = this.material.uniforms.worksDetailOffset.value[1], n = this.$store.state.layoutMode, s = 16 * this.size, l = 1, c = 1, d = 40, u = 1;
                    if ("s" == n || "ss" == n)
                        i = Math.min(this.width, this.height) / 900,
                        l = c = (this.width - 32) / s,
                        d = 30,
                        u = 1.2,
                        this.aspectRatio > 4 / 3.4 && (l = (this.height - 32) / s,
                        i = this.height / 800);
                    else if ("m" == n)
                        i = Math.min(this.width, this.height) / 900,
                        l = c = (this.width - 64) / s,
                        u = 1.2,
                        this.aspectRatio > 4 / 3.4 && (l = (this.height - 64) / s,
                        i = this.height / 900);
                    else {
                        l = Math.min(1200, .8 * this.width) / s,
                        this.aspectRatio > 4 / 3 && (l = 1.2 * Math.min(900, this.height) / s,
                        i = this.height / 1e3),
                        u = .8 / l;
                        var f = this.width - 64;
                        f >= 1149 ? (c = Math.min(f - 492, 1400) / s,
                        r = 524 - .5 * (this.width - s * c)) : (c = (.6 * f - 32) / s,
                        r = .4 * f + 64 - .5 * (this.width - s * c))
                    }
                    e = t = .5 * -this.size * l;
                    var h = s * c
                      , m = h / 16 * 9;
                    0 !== this.worksDetailOffsetTop && (o = .5 * (window.innerHeight - m) - this.worksDetailOffsetTop),
                    this.setUniformValue("scaleDefault", i),
                    this.setUniformValue("scaleTransition", i),
                    this.setWorksListOffset(0, a, t),
                    this.setWorksDetailOffset(r, o, e),
                    this.setUniformValue("scaleWorksList", l),
                    this.setUniformValue("scaleWorksDetail", c),
                    this.setUniformValue("scaleAbout", .9 * i),
                    this.setUniformValue("shadowScale", d, !0),
                    this.setUniformValue("titleScale", u),
                    this.worksParams = {
                        baseSize: s,
                        scaleWorksList: l,
                        worksListOffset: {
                            x: 0,
                            y: a,
                            z: t
                        }
                    }
                }
            }, {
                key: "animateToTop",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.worksData = null,
                    this.cancelTransition(),
                    this.updateParams(),
                    this.animateTo("", t ? 2 : 0)
                }
            }, {
                key: "animateToAbout",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.worksData = null,
                    this.cancelTransition(),
                    this.updateParams(),
                    this.animateTo("aboutAnimValue", t ? 2 : 0)
                }
            }, {
                key: "cancelTransition",
                value: function() {
                    this.alphaTween && this.alphaTween.kill(),
                    this.alphaTween = this.animateWorksImageAlpha(0, .2)
                }
            }, {
                key: "animateToWorks",
                value: (l = Object(O.a)(a.a.mark((function t(e) {
                    var i, r, o, s = this, l = arguments;
                    return a.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return i = !(l.length > 1 && void 0 !== l[1]) || l[1],
                                r = !(l.length > 2 && void 0 !== l[2]) || l[2],
                                o = new n.a((function(t) {
                                    var e = ct.B.timeline({
                                        onComplete: function() {
                                            t()
                                        }
                                    });
                                    return "works" !== s.$store.state.prevId ? (s.setUniformValue("worksDetailFactor", i ? 0 : 1),
                                    e.add(s.animateTo("worksAnimValue", r ? 2 : 0), 0)) : e.add(s.animateWorksDetailFactor(1.4, i), 0),
                                    e
                                }
                                )),
                                t.next = 5,
                                n.a.all([o, this.setWorksData(e)]);
                            case 5:
                                if ("works" === this.$store.state.currentId) {
                                    t.next = 7;
                                    break
                                }
                                return t.abrupt("return");
                            case 7:
                                this.isTransitionMode || this.animateWorksImageAlpha(1, .2);
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return l.apply(this, arguments)
                }
                )
            }, {
                key: "animateScrollTop",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .4;
                    return this.animateUniformValue("scrollTop", t, e, !1, !0, ct.b.easeOut, !0)
                }
            }, {
                key: "animateBgPatternAlpha",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return this.animateUniformValue("patternAlpha", t, e, !0)
                }
            }, {
                key: "animateWorksImageAlpha",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .2;
                    return this.animateUniformValue("worksImageAlpha", t, e, !0, !0, ct.e.easeNone, !0)
                }
            }, {
                key: "updateWorksDetailOffsetY",
                value: function(t) {
                    this.worksDetailOffsetTop = t,
                    this.updateParams()
                }
            }, {
                key: "setWorksData",
                value: (s = Object(O.a)(a.a.mark((function t(e) {
                    var i, r, o, n = arguments;
                    return a.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if ((i = n.length > 1 && void 0 !== n[1] && n[1]) || !this.worksData || e.pageId != this.worksData.pageId) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", !0);
                            case 3:
                                return this.worksData = e,
                                this.isLoading = !0,
                                t.next = 7,
                                this.$webfontLoadPromise;
                            case 7:
                                return t.next = 9,
                                this.worksImageTexture.setData(e, this.$store.state.isDarkMode, i);
                            case 9:
                                return r = t.sent,
                                o = r.title,
                                this.setUniformValue("worksImageTextureData1", [o.offsetTop, o.width, o.height]),
                                o = r.titleLine2,
                                this.setUniformValue("worksImageTextureData2", [o.offsetTop || 0, o.width || 0, o.height || 0]),
                                o = r.title2,
                                this.setUniformValue("worksImageTextureData3", [o.offsetTop || 0, o.width || 0, o.height || 0]),
                                o = r.titleJp,
                                this.setUniformValue("worksImageTextureData4", [o.offsetTop || 0, o.width || 0, o.height || 0]),
                                this.isLoading = !1,
                                t.abrupt("return", r);
                            case 20:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "animateToWorksListTransition",
                value: (o = Object(O.a)(a.a.mark((function t() {
                    var e, i = arguments;
                    return a.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e = i.length > 0 && void 0 !== i[0] ? i[0] : 4,
                                !this.isTransitionMode) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return this.isTransitionMode = !0,
                                this.transitionTimeline && this.transitionTimeline.kill(),
                                this.alphaTween && this.alphaTween.kill(),
                                this.transitionTimeline = ct.B.timeline().add(this.animateUniformValue("worksAnimValueT", 1, e, !1, !0, ct.c.easeOut), 0).add(this.animateWorksImageAlpha(0, .2), 0),
                                t.abrupt("return", this.transitionTimeline);
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "animateFromWorksListTransition",
                value: (r = Object(O.a)(a.a.mark((function t(e) {
                    var i, r, o = this, s = arguments;
                    return a.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (i = s.length > 1 && void 0 !== s[1] ? s[1] : 4,
                                this.isTransitionMode) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                this.isTransitionMode = !1,
                                r = new n.a((function(t) {
                                    return o.transitionTimeline && o.transitionTimeline.kill(),
                                    o.transitionTimeline = ct.B.timeline({
                                        onComplete: function() {
                                            t()
                                        }
                                    }).add(o.animateUniformValue("worksAnimValueT", 0, i, !1, !0, ct.c.easeOut), 0),
                                    o.transitionTimeline
                                }
                                )),
                                n.a.all([r, this.setWorksData(e).then((function(t) {
                                    o.isTransitionMode || t.isCanceled || t.isSameData || (o.alphaTween = o.animateWorksImageAlpha(1, .2))
                                }
                                )).catch((function(t) {}
                                ))]);
                            case 6:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return r.apply(this, arguments)
                }
                )
            }, {
                key: "animateUniformValue",
                value: function(t, e, i) {
                    var r = this
                      , a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                      , n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ct.a.easeOut
                      , s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6]
                      , l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
                    o && ct.B.killTweensOf(this.renderMaterial.uniforms[t]);
                    var c = {
                        value: e,
                        ease: n,
                        overwrite: s
                    };
                    return a ? l && (c.onUpdate = l) : c.onUpdate = function() {
                        r.depthMaterial.uniforms[t].value = r.renderMaterial.uniforms[t].value,
                        l && l()
                    }
                    ,
                    ct.B.to(this.renderMaterial.uniforms[t], i, c)
                }
            }, {
                key: "setMobileWindowOffsetY",
                value: function(t) {
                    this.setUniformValue("mobileWindowOffsetY", t)
                }
            }, {
                key: "getMobileWindowOffsetY",
                value: function() {
                    return this.renderMaterial.uniforms.mobileWindowOffsetY.value
                }
            }, {
                key: "animateMobileWindowOffsetY",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this.animateUniformValue("mobileWindowOffsetY", t, e, !1, !0, ct.a.easeOut, !0, i)
                }
            }, {
                key: "initDatGUI",
                value: function(t) {
                    for (var e = this, i = t.addFolder("animation values"), r = function(t) {
                        var r = "topAnimationValue".concat(t + 1);
                        e[r] = e.renderMaterial.uniforms[r].value,
                        i.add(e, r, 0, 1, e[r]).step(.01).onChange((function(t) {
                            e.renderMaterial.uniforms[r].value = t,
                            e.depthMaterial.uniforms[r].value = t
                        }
                        ))
                    }, a = 0; a < 6; a++)
                        r(a);
                    i.open()
                }
            }]),
            e
        }(_e)
          , Re = [0, 0, 0]
          , De = {
            black: [13 / 256, 13 / 256, 13 / 256, 1],
            white: [.96875, .96875, .96875, 1]
        }
          , Fe = 1024
          , We = 512
          , Ne = [1, 2, 3, 4, 5, 6]
          , Ve = {
            data: function() {
                return {
                    isNoWebGL: !1,
                    worksParams: {},
                    isLoading: !1
                }
            },
            computed: {
                isAvailable: function() {
                    return "minimum" !== this.$store.state.displayMode
                }
            },
            mounted: function() {
                var t, e;
                this.update = l()(t = this.update).call(t, this),
                window.changeCameraPos = l()(e = this.tweenCameraTopPos).call(e, this)
            },
            methods: {
                init: function() {
                    var t = this;
                    return Object(O.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!t.isInited) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.abrupt("return", t.initWebGL());
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                animateMobileWindowOffsetY: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .4;
                    if (this.cubes) {
                        var i = .5 * (this.height - window.innerHeight);
                        return this.cubes.animateMobileWindowOffsetY(i, e, (function() {
                            t.mainPlaneMaterial.uniforms.mobileWindowOffsetY.value = t.cubes.getMobileWindowOffsetY()
                        }
                        ))
                    }
                },
                getPointerPos: function() {
                    return this.mainPlaneMaterial ? {
                        x: .5 * (this.mainPlaneMaterial.uniforms.pointerPos.value[0] + 1) * this.width,
                        y: .5 * (this.mainPlaneMaterial.uniforms.pointerPos.value[1] + 1) * this.height
                    } : {
                        x: 0,
                        y: 0
                    }
                },
                setMobileWindowOffsetY: function() {
                    if (this.cubes) {
                        var t = .5 * (this.height - window.innerHeight);
                        this.mainPlaneMaterial.uniforms.mobileWindowOffsetY.value = t,
                        this.cubes.setMobileWindowOffsetY(t)
                    }
                },
                animateInteraction: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.cubes && this.cubes.animateInteraction(t)
                },
                animateScrollTop: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .4;
                    this.cubes && this.cubes.animateScrollTop(t, e)
                },
                scroll: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    !this.isNoWebGL && this.isInited && (this.animateMobileWindowOffsetY(e ? 0 : .4),
                    this.cubes.setUniformValue("scrollTop", t),
                    this.cubes.updateParams(),
                    this.worksParams = this.cubes.worksParams)
                },
                resize: function() {
                    if (!this.isNoWebGL && this.isInited) {
                        this.width = this.$el.offsetWidth,
                        this.height = this.$el.offsetHeight;
                        var t = this.width / this.height;
                        this.cameraDefaultPos[2] = this.height / Math.tan(45 * Math.PI / 360) / 2;
                        var e = {
                            x: this.width * this.devicePixelRatio,
                            y: this.height * this.devicePixelRatio
                        };
                        this.width,
                        this.height;
                        this.renderTexture.setSize(e.x, e.y),
                        this.renderer.setSize(this.width, this.height);
                        var i = this.renderTexture.getTextureResolution();
                        this.renderMaterial.uniforms.resolution.value[0] = i.x,
                        this.renderMaterial.uniforms.resolution.value[1] = i.y,
                        this.antialiasMaterial.uniforms.resolution.value[0] = i.x,
                        this.antialiasMaterial.uniforms.resolution.value[1] = i.y,
                        this.mainPlaneMaterial.uniforms.devicePixelRatio.value = this.devicePixelRatio,
                        this.mainPlaneMaterial.uniforms.repeatSize.value = "s" == this.$store.state.layoutMode ? 1024 : 1600,
                        this.mainPlaneMaterial.uniforms.resolution.value[0] = e.x,
                        this.mainPlaneMaterial.uniforms.resolution.value[1] = e.y;
                        var r = Math.min(this.width, this.height) / ("s" == this.$store.state.layoutMode ? 600 : 800);
                        this.mainPlaneMaterial.uniforms.logoSize.value[0] = Fe * r / this.width,
                        this.mainPlaneMaterial.uniforms.logoSize.value[1] = We * r / this.height,
                        this.cubes.resize(e.x, e.y, this.width, this.height),
                        this.camera.aspect = t,
                        this.camera.near = Math.round(this.cameraDefaultPos[2] / 10),
                        this.camera.far = Math.round(2 * this.cameraDefaultPos[2]),
                        this.camera.updateProjectionMatrix()
                    }
                },
                initWebGL: function() {
                    var t = this;
                    return Object(O.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t.isInited = !0,
                                    t.devicePixelRatio = 1,
                                    t.sensorAxisDir = -1,
                                    t.aboutFactor = 0,
                                    t.worksFactor = 0,
                                    t.topFactor = 1,
                                    t.cameraRotatation = {
                                        x: 0,
                                        y: 0
                                    },
                                    t.currentTopAnimationIndex = 0,
                                    t.startTime = 0,
                                    "full" === t.$store.state.displayMode) {
                                        e.next = 12;
                                        break
                                    }
                                    return t.isNoWebGL = !0,
                                    e.abrupt("return");
                                case 12:
                                    return e.abrupt("return", new n.a(function() {
                                        var e = Object(O.a)(a.a.mark((function e(r, o) {
                                            var s, c, d, u, f, h;
                                            return a.a.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        t.canvas = t.$refs.canvas,
                                                        t.width = t.$el.offsetWidth,
                                                        t.height = t.$el.offsetHeight,
                                                        t.devicePixelRatio = window.devicePixelRatio,
                                                        t.renderer = new de({
                                                            canvas: t.canvas,
                                                            devicePixelRatio: t.devicePixelRatio,
                                                            antialias: !1,
                                                            autoClear: !1,
                                                            premultipliedAlpha: !0
                                                        }),
                                                        t.renderer.setBgColor(new ce(0,0,0), 0),
                                                        t.gl = t.renderer.getGLContext(),
                                                        t._render = l()(s = t.fullEffectsRender).call(s, t),
                                                        t.camera = new Me(.25 * Math.PI,1,10,2500),
                                                        t.cameraDefaultPos = oe.c.clone(t.camera.position),
                                                        t.cameraTopPos = oe.c.clone(t.camera.position),
                                                        t.topCameraParams = {
                                                            rotationX: 0,
                                                            rotationZ: 0,
                                                            length: 1,
                                                            centerX: 0,
                                                            centerY: 0,
                                                            centerZ: 0
                                                        },
                                                        t.camera.lookAt(0, 0, 0),
                                                        t.renderMaterial = new Te({
                                                            vertexShader: i(230).default,
                                                            fragmentShader: i(560).default,
                                                            depthTest: !1,
                                                            cullFace: !0,
                                                            uniforms: {
                                                                resolution: {
                                                                    type: "uniform2f",
                                                                    value: [0, 0]
                                                                },
                                                                texture: {
                                                                    type: "texture",
                                                                    value: null
                                                                },
                                                                time: {
                                                                    type: "uniform1f",
                                                                    value: 0
                                                                },
                                                                animationValue: {
                                                                    type: "uniform1f",
                                                                    value: 0
                                                                }
                                                            }
                                                        }),
                                                        t.renderMaterial.setGLContext(t.gl),
                                                        t.antialiasMaterial = new Te({
                                                            vertexShader: i(230).default,
                                                            fragmentShader: i(561).default,
                                                            depthTest: !1,
                                                            cullFace: !0,
                                                            uniforms: {
                                                                resolution: {
                                                                    type: "uniform2f",
                                                                    value: [0, 0]
                                                                },
                                                                texture: {
                                                                    type: "texture",
                                                                    value: null
                                                                }
                                                            }
                                                        }),
                                                        t.antialiasMaterial.setGLContext(t.gl),
                                                        c = new be(100,100),
                                                        t.renderTexture = new ye(t.gl,t.width,t.height,t.renderer,t.renderMaterial,{
                                                            wrapS: "REPEAT",
                                                            wrapT: "REPEAT",
                                                            minFilter: "LINEAR",
                                                            magFilter: "LINEAR"
                                                        },c),
                                                        t.renderTexture.setBgColor(new ce(0,0,0), 0),
                                                        d = "FLOAT",
                                                        t.$isiOS && (d = "HALF_FLOAT_OES");
                                                        try {
                                                            t.depthTexture = new he(t.gl,1024,1024,{
                                                                type: d
                                                            }),
                                                            t.depthTexture.minFilter = "NEAREST",
                                                            t.depthTexture.magFilter = "NEAREST"
                                                        } catch (e) {
                                                            t.depthTexture = null,
                                                            t._render = l()(u = t.noEffectsRender).call(u, t)
                                                        }
                                                        return t.patternTexture = new fe,
                                                        t.patternTexture.setCanvas(t.$nuxt.patternBg.canvas),
                                                        t.patternTexture.wrapS = "REPEAT",
                                                        t.patternTexture.wrapT = "REPEAT",
                                                        t.patternTexture.minFilter = "LINEAR_MIPMAP_LINEAR",
                                                        t.patternTexture.mipmap = !0,
                                                        t.shadowTexture = new fe,
                                                        t.shadowTexture.wrapS = "REPEAT",
                                                        t.shadowTexture.wrapT = "REPEAT",
                                                        t.shadowTexture.minFilter = "LINEAR_MIPMAP_LINEAR",
                                                        t.shadowTexture.mipmap = !0,
                                                        t.logoNormalTexture = new fe,
                                                        t.logoNormalTexture.mipmap = !1,
                                                        t.logoMaskTexture = new fe,
                                                        t.logoMaskTexture.mipmap = !1,
                                                        t.worksImageTexture = new Ge(t.gl,2048,2048,t.$isiOS || t.$isEdge),
                                                        t.shadowTexture.minFilter = "LINEAR",
                                                        t.shadowTexture.mipmap = !1,
                                                        t.rootObject = new xe,
                                                        t.mainPlaneMaterial = new Te({
                                                            vertexShader: i(230).default,
                                                            fragmentShader: i(562).default,
                                                            depthTest: !1,
                                                            cullFace: !0,
                                                            uniforms: {
                                                                resolution: {
                                                                    type: "uniform2f",
                                                                    value: [0, 0]
                                                                },
                                                                texture: {
                                                                    type: "texture",
                                                                    value: null
                                                                },
                                                                logoNormalTexture: {
                                                                    type: "texture",
                                                                    value: t.logoNormalTexture
                                                                },
                                                                logoMaskTexture: {
                                                                    type: "texture",
                                                                    value: t.logoMaskTexture
                                                                },
                                                                mobileWindowOffsetY: {
                                                                    type: "uniform1f",
                                                                    value: 0
                                                                },
                                                                transitionOffset: {
                                                                    type: "uniform1f",
                                                                    value: 0
                                                                },
                                                                speed: {
                                                                    type: "uniform1f",
                                                                    value: 0
                                                                },
                                                                logoFactor: {
                                                                    type: "uniform1f",
                                                                    value: 0
                                                                },
                                                                logoSize: {
                                                                    type: "uniform2f",
                                                                    value: [1, 1]
                                                                },
                                                                pointerPos: {
                                                                    type: "uniform2f",
                                                                    value: [0, 0]
                                                                },
                                                                time: {
                                                                    type: "uniform1f",
                                                                    value: 0
                                                                },
                                                                topFactor: {
                                                                    type: "uniform1f",
                                                                    value: 1
                                                                },
                                                                repeatSize: {
                                                                    type: "uniform1f",
                                                                    value: 1024
                                                                },
                                                                devicePixelRatio: {
                                                                    type: "uniform1f",
                                                                    value: t.devicePixelRatio
                                                                },
                                                                alpha: {
                                                                    type: "uniform1f",
                                                                    value: 1
                                                                },
                                                                patternTexture: {
                                                                    type: "texture",
                                                                    value: t.patternTexture
                                                                },
                                                                baseColor: {
                                                                    type: "uniform4f",
                                                                    value: [0, 0, 0, 0]
                                                                }
                                                            }
                                                        }),
                                                        t.mainPlane = new _e(c,t.mainPlaneMaterial),
                                                        e.next = 46,
                                                        n.a.all([t.shadowTexture.load("/img/common/shadow1.png"), t.logoNormalTexture.load("/img/common/normal.png"), t.logoMaskTexture.load("/img/common/logoMask.png")]);
                                                    case 46:
                                                        t.mainPlane.setGLContext(t.gl),
                                                        t.cubes = new Pe(50,t.patternTexture,t.depthTexture,t.shadowTexture,t.worksImageTexture,t.camera,t.gl),
                                                        t.cubes.init(t.$store, t.$nuxt),
                                                        t.rootObject.add(t.cubes),
                                                        t.rootObject.setGLContext(t.gl),
                                                        t.rootObject.updateMatrix(),
                                                        t.$md.tablet() || t.$md.mobile() ? window.addEventListener("touchmove", l()(f = t.touchMoveHandler).call(f, t)) : window.addEventListener("mousemove", l()(h = t.mouseMoveHandler).call(h, t)),
                                                        t.resize(),
                                                        t.setCameraPos(),
                                                        t.applyColorScheme(),
                                                        t.scroll(window.scrollY || window.pageYOffset),
                                                        r();
                                                    case 59:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t, i) {
                                            return e.apply(this, arguments)
                                        }
                                    }()).catch((function(e) {
                                        t.isNoWebGL = !0
                                    }
                                    )));
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                calcWeights: function() {
                    for (var t, e, i, r = [], a = 0, o = 0; o < 20; o++)
                        e = 1 + 2 * o,
                        i = Math.exp(e * e * -.5 / 81),
                        r[o] = i,
                        o > 0 && (i *= 2),
                        a += i;
                    for (var n = 0; n < 20; n++)
                        r[n] /= a;
                    var s = ae()(t = Pt()(r).call(r)).call(t);
                    r.shift(),
                    s = Mt()(s).call(s, r),
                    this.blurMaterial.uniforms.weights.value = s
                },
                start: function() {
                    var t = this;
                    return Object(O.a)(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.init();
                                case 2:
                                    t.isInited && !t.isNoWebGL && (t.startTime = (new Date).getTime(),
                                    t.setMobileWindowOffsetY(),
                                    t.tweenCameraTopPos(),
                                    nt()((function() {
                                        t.cubes.animateUniformValue("topAnimationValue1", 1, 2, !1, !0, ct.e.easeNone, !0),
                                        t.setToggleTopAnimTimer()
                                    }
                                    ), 1e3),
                                    t.update());
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                tweenCameraTopPos: function() {
                    var t = this;
                    ct.B.killTweensOf(this.topCameraParams);
                    ct.B.fromTo(this.topCameraParams, 10, {
                        rotationX: (2 * Math.random() - 1) * Math.PI * .5,
                        rotationZ: (2 * Math.random() - 1) * Math.PI,
                        centerX: .1 * (2 * Math.random() - 1),
                        centerY: .1 * (2 * Math.random() - 1),
                        centerZ: .1 * (2 * Math.random() - 1),
                        length: .6 + .4 * Math.random()
                    }, {
                        rotationX: (2 * Math.random() - 1) * Math.PI * .5,
                        rotationZ: (2 * Math.random() - 1) * Math.PI,
                        centerX: .1 * (2 * Math.random() - 1),
                        centerY: .1 * (2 * Math.random() - 1),
                        centerZ: .1 * (2 * Math.random() - 1),
                        length: .6 + .4 * Math.random(),
                        ease: ct.e.easeNone,
                        overwrite: !0,
                        onComplete: function() {
                            t.tweenCameraTopPos()
                        }
                    }),
                    this.render()
                },
                stop: function() {
                    cancelAnimationFrame(this.animationId)
                },
                update: function() {
                    this.animationId = requestAnimationFrame(this.update),
                    this.isLoading = this.cubes.isLoading && !this.isTransitionMode(),
                    this.$nuxt.worksListFullMode.update(),
                    this.render()
                },
                fullEffectsRender: function() {
                    this.renderer.clear(),
                    this.cubes.setDepthMode(!0),
                    this.renderer.render(this.rootObject, this.depthTexture),
                    this.cubes.setDepthMode(!1),
                    this.renderer.render(this.rootObject, this.renderTexture.getRenderTarget()),
                    this.mainPlaneMaterial.uniforms.texture.value = this.renderTexture.getTexture(),
                    this.renderer.render(this.mainPlane)
                },
                noEffectsRender: function() {
                    this.renderer.render(this.rootObject)
                },
                render: function() {
                    var t = (new Date).getTime() - this.startTime;
                    this.setCameraPos(),
                    this.camera.lookAt(this.cameraTopCenter[0], this.cameraTopCenter[1], this.cameraTopCenter[2]),
                    this.camera.updateMatrix(),
                    this.cubes.update(t),
                    this.renderMaterial.uniforms.time.value = t,
                    this.mainPlaneMaterial.uniforms.time.value = t,
                    this.rootObject.updateMatrix(),
                    this._render()
                },
                initDatGUI: function() {
                    var t = i(563);
                    this.gui = new t.GUI,
                    this.cubes.initDatGUI(this.gui)
                },
                tweenPointerPos: function(t, e) {
                    var i = this;
                    this.pointerPosTween && this.pointerPosTween.kill(),
                    this.pointerPosTween = ct.B.to(this.mainPlaneMaterial.uniforms.pointerPos.value, 1, {
                        0: t,
                        1: e,
                        ease: ct.c.easeOut,
                        onUpdate: function() {
                            i.$nuxt.pointerNotice.setPointerPos(.5 * (i.mainPlaneMaterial.uniforms.pointerPos.value[0] + 1) * i.width, .5 * (i.mainPlaneMaterial.uniforms.pointerPos.value[1] + 1) * i.height)
                        }
                    })
                },
                mouseMoveHandler: function(t) {
                    this.pointerX = t.clientX / this.width * 2 - 1,
                    this.pointerY = t.clientY / this.height * 2 - 1,
                    this.tweenPointerPos(this.pointerX, this.pointerY)
                },
                touchMoveHandler: function(t) {
                    var e = t.touches[0]
                      , i = e.clientX / this.width * 2 - 1
                      , r = e.clientY / this.height * 2 - 1;
                    this.tweenPointerPos(i, r)
                },
                deviceMotionHandler: function(t) {
                    this.motionXStart || (this.motionXStart = t.accelerationIncludingGravity.x),
                    this.motionYStart || (this.motionYStart = t.accelerationIncludingGravity.y),
                    this.pointerX = (t.accelerationIncludingGravity.x - this.motionXStart) / 8 * this.sensorAxisDir,
                    this.pointerY = (t.accelerationIncludingGravity.y - this.motionYStart) / 12 * this.sensorAxisDir,
                    this.tweenPointerPos(this.pointerX, this.pointerY)
                },
                setCameraPos: function() {
                    var t = Math.PI / 2.4 * (1 - .8 * this.worksFactor);
                    this.cameraTopPos = oe.c.clone(this.cameraDefaultPos),
                    this.cameraTopPos[2] *= this.topCameraParams.length,
                    this.cameraTopCenter = [this.cameraTopPos[2] * this.topCameraParams.centerX, this.cameraTopPos[2] * this.topCameraParams.centerY, this.cameraTopPos[2] * this.topCameraParams.centerX],
                    oe.c.lerp(this.cameraTopCenter, Re, this.cameraTopCenter, this.topFactor),
                    oe.c.rotateX(this.cameraTopPos, this.cameraTopPos, Re, this.topCameraParams.rotationX),
                    oe.c.rotateZ(this.cameraTopPos, this.cameraTopPos, Re, this.topCameraParams.rotationZ),
                    this.cameraRotatation.x = this.mainPlaneMaterial.uniforms.pointerPos.value[1] * t,
                    this.cameraRotatation.y = this.mainPlaneMaterial.uniforms.pointerPos.value[0] * t * 2;
                    var e = oe.c.create();
                    oe.c.lerp(e, this.cameraDefaultPos, this.cameraTopPos, this.topFactor),
                    oe.c.rotateX(e, e, Re, this.cameraRotatation.x),
                    oe.c.rotateY(e, e, Re, this.cameraRotatation.y),
                    this.camera.position = e,
                    this.camera.lookAt(this.cameraTopCenter[0], this.cameraTopCenter[1], this.cameraTopCenter[2]),
                    this.camera.updateMatrix()
                },
                setPatternCanvas: function(t) {
                    this.isInited && !this.isNoWebGL && (this.cubes.setPatternCanvas(t),
                    this.rootObject.setGLContext(this.gl))
                },
                updatePattern: function() {
                    this.isInited && !this.isNoWebGL && this.patternTexture.updateGLTexture()
                },
                applyColorScheme: function() {
                    if (this.isInited && !this.isNoWebGL) {
                        var t = this.$store.state.isDarkMode ? De.black : De.white;
                        this.mainPlaneMaterial.uniforms.baseColor.value = t,
                        this.cubes.setColorScheme(t);
                        var e = {
                            r: t[0],
                            g: t[1],
                            b: t[2]
                        };
                        this.renderTexture.setBgColor(e, 0),
                        this.renderer.setBgColor(e, 0),
                        this.updatePattern(),
                        this.render()
                    }
                },
                setToggleTopAnimTimer: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7;
                    this.toggleTopAnimTimer = ie()((function() {
                        var e = (t.currentTopAnimationIndex + 1) % Ne.length;
                        t.animateTopTo(e)
                    }
                    ), 1e3 * e)
                },
                clearToggleTopAnimTimer: function() {
                    this.toggleTopAnimTimer && clearTimeout(this.toggleTopAnimTimer)
                },
                animateTopTo: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (this.currentTopAnimationIndex == t)
                        return "";
                    this.timeline && this.timeline.kill();
                    var r = "topAnimationValue" + Ne[this.currentTopAnimationIndex]
                      , a = "topAnimationValue" + Ne[t];
                    return this.timeline = this.cubes.toggleAnimation(r, a, e, i),
                    this.currentTopAnimationIndex = t,
                    this.timeline
                },
                toggleAnimation: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4
                      , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , a = ct.B.timeline({
                        delay: r
                    });
                    return t && a.add(this.animateMainUniformValue(t, 0, i, !0, ct.e.easeNone), 0),
                    e && a.add(this.animateMainUniformValue(e, 1, i, !1, ct.e.easeNone), 0),
                    a
                },
                animateToTop: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.isInited && !this.isNoWebGL && (this.cubes && this.cubes.animateToTop(t),
                    this.cancelTransition(),
                    this.animateContentsFactor(1, 0, 0, t))
                },
                animateToAbout: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.isInited && !this.isNoWebGL && (this.cubes && this.cubes.animateToAbout(t),
                    this.cancelTransition(),
                    this.animateContentsFactor(0, 0, 1, t))
                },
                animateToWorksList: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.isInited && !this.isNoWebGL && (this.cubes && this.cubes.animateToWorks(t, !0, e),
                    (this.$md.mobile() || this.$md.tablet()) && this.tweenPointerPos(0, 0),
                    this.animateContentsFactor(0, 1, 0, e))
                },
                animateToWorksDetail: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.isInited && !this.isNoWebGL && (this.cubes && this.cubes.animateToWorks(t, !1, e),
                    (this.$md.mobile() || this.$md.tablet()) && this.tweenPointerPos(0, 0),
                    this.cancelTransition(),
                    this.animateContentsFactor(0, 1, 0, e))
                },
                animateBgPatternAlpha: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .2;
                    !this.isNoWebGL && this.isInited && (this.patternBgTweenObj && this.patternBgTweenObj.kill(),
                    this.patternBgTweenObj = ct.B.timeline().to(this.mainPlaneMaterial.uniforms.alpha, e, {
                        value: t,
                        ease: ct.e.easeNone
                    }).add(this.cubes.animateBgPatternAlpha(t, e), 0))
                },
                updateWorksDetailOffsetY: function(t) {
                    this.cubes && this.cubes.updateWorksDetailOffsetY(t)
                },
                setWorksData: function(t) {
                    var e = this
                      , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return Object(O.a)(a.a.mark((function r() {
                        return a.a.wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return r.abrupt("return", e.cubes && e.cubes.setWorksData(t, i));
                                case 1:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )))()
                },
                animateWorksDetailFactor: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                      , e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.cubes && this.cubes.animateWorksDetailFactor(t, e)
                },
                animateToWorksListTransition: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    this.isTransitionMode() || this.cubes && this.cubes.animateToWorksListTransition(t)
                },
                animateFromWorksListTransition: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    this.cubes && this.cubes.animateFromWorksListTransition(t, e)
                },
                setTransitionOffset: function(t) {
                    this.mainPlaneMaterial.uniforms.transitionOffset.value = t
                },
                animateMainUniformValue: function(t, e, i) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                      , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ct.c.easeOut
                      , o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
                      , n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
                    r && ct.B.killTweensOf(this.mainPlaneMaterial.uniforms[t]);
                    var s = {
                        value: e,
                        ease: a,
                        overwrite: o
                    };
                    return n && (s.onUpdate = n),
                    ct.B.to(this.mainPlaneMaterial.uniforms[t], i, s)
                },
                animateContentsFactor: function(t, e, i) {
                    var r = this
                      , a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                      , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
                      , n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .8;
                    a || (n = 0,
                    o = 0),
                    ct.B.killTweensOf({
                        topFactor: t,
                        worksFactor: e,
                        aboutFactor: i
                    }),
                    ct.B.to(this, o, {
                        topFactor: t,
                        worksFactor: e,
                        aboutFactor: i,
                        delay: n,
                        ease: ct.b.easeOut,
                        overwrite: !0,
                        onUpdate: function() {
                            r.mainPlaneMaterial.uniforms.topFactor.value = r.topFactor
                        }
                    })
                },
                cancelTransition: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .4;
                    this.animateMainUniformValue("transitionOffset", 0, t),
                    this.animateMainUniformValue("speed", 0, t)
                },
                setSpeedValue: function(t) {
                    this.mainPlaneMaterial.uniforms.speed.value = t
                },
                animateWorksImageAlpha: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .2;
                    this.cubes && this.cubes.animateWorksImageAlpha(t, e)
                },
                isTransitionMode: function() {
                    return this.cubes && this.cubes.isTransitionMode
                }
            }
        }
          , je = (i(564),
        Object(et.a)(Ve, (function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return this.isAvailable ? e("div", {
                staticClass: "mainVisual"
            }, [e("canvas", {
                ref: "canvas"
            })]) : this._e()
        }
        ), [], !1, null, "329571c0", null).exports)
          , Ue = i(119)
          , $e = i.n(Ue)
          , He = i(234)
          , Ye = i.n(He)
          , qe = {
            data: function() {
                return {
                    isAvailable: !1,
                    mainVisual: null,
                    worksListData: [],
                    touch: {
                        x: 0,
                        y: 0
                    },
                    startTouch: {
                        x: 0,
                        y: 0
                    },
                    beforeTouch: {
                        x: 0,
                        y: 0
                    },
                    delta: 0,
                    touchDelta: 0,
                    swipeDir: "",
                    scrollY: 0,
                    beforeScrollY: 0,
                    indexValue: 0,
                    prevIndex: 0,
                    scrollEndTimer: null,
                    autoSnapTween: null,
                    isTouchAnimating: !1,
                    isOnceMoved: !1,
                    isTransitionMode: !1,
                    digits: [9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                    touchEndTimeline: null,
                    deltaCoef: 1,
                    gotoTween: null,
                    pointerPos: {
                        x: 0,
                        y: 0
                    }
                }
            },
            beforeDestroy: function() {
                window.removeEventListener("keydown", this.onKeyDown)
            },
            mounted: function() {
                var t;
                this.deltaCoef = this.$isFirefox && this.$isWindows ? 20 : 1,
                this.onKeyDown = l()(t = this.onKeyDown).call(t, this),
                this.$refs.clickableArea.focus(),
                window.addEventListener("keydown", this.onKeyDown)
            },
            computed: {
                clickNoticeLabel: function() {
                    return this.$md && (this.$md.mobile() || this.$md.tablet()) ? "tap to view more details." : ""
                },
                worksData: function() {
                    return this.worksListData[0] ? this.worksListData[this.getIndex()] : {}
                },
                numItems: function() {
                    return this.worksListData && this.worksListData.length || 0
                },
                isLoading: function() {
                    return !this.mainVisual || this.mainVisual.isLoading
                },
                clickableAreaStyleObj: function() {
                    if (!this.mainVisual)
                        return {};
                    var t = this.mainVisual.worksParams;
                    if (!t.baseSize)
                        return null;
                    var e = t.baseSize * t.scaleWorksList
                      , i = e / 120 * 63;
                    return {
                        width: "".concat(Math.round(1.2 * e), "px"),
                        height: "".concat(Math.round(1.2 * i), "px")
                    }
                }
            },
            methods: {
                init: function(t, e) {
                    this.isAvailable = !0,
                    this.worksListData = t,
                    this.$store.commit("setPointerColor", this.worksListData[e].pointerColor || "#ffffff"),
                    this.setInitialIndex(e)
                },
                disable: function() {
                    this.isAvailable = !1
                },
                setMainVisual: function(t) {
                    this.mainVisual = t
                },
                setInitialIndex: function(t) {
                    this.prevIndex = t,
                    this.indexValue = t,
                    this.scrollY = 1e3 * this.indexValue,
                    this.beforeScrollY = this.scrollY
                },
                updateData: function() {
                    this.isAvailable && this.mainVisual.setWorksData(this.worksData, !0)
                },
                onClick: function() {
                    this.$router.push({
                        name: "works-id",
                        params: {
                            id: this.worksData.pageId
                        }
                    })
                },
                clearScrollEndTimer: function() {
                    this.scrollEndTimer && clearTimeout(this.scrollEndTimer)
                },
                setScrollEndTimer: function() {
                    var t = this;
                    this.clearScrollEndTimer(),
                    this.scrollEndTimer = nt()((function() {
                        t.autoSnap()
                    }
                    ), 60)
                },
                getIndex: function() {
                    var t = Math.round(this.indexValue);
                    if ((t == this.numItems || t < 0) && (t = 0),
                    this.prevIndex != t) {
                        this.isOnceMoved = !0;
                        var e = this.worksListData[t];
                        this.$store.commit("setPointerColor", e.pointerColor || "#ffffff"),
                        this.$router.replace({
                            path: this.$route.path,
                            hash: "#".concat(e.pageId)
                        })
                    }
                    return this.prevIndex = t,
                    t
                },
                getPageId: function() {
                    return this.worksListData[this.getIndex()].pageId
                },
                onWheel: function(t) {
                    this.gotoTween && this.gotoTween.kill(),
                    this.delta = Math.max(-80, Math.min(t.deltaY, 80)) * this.deltaCoef
                },
                onTouchStart: function(t) {
                    var e = t.targetTouches[0];
                    this.startTouch = {
                        x: e.clientX,
                        y: e.clientY
                    },
                    this.beforeTouch = {
                        x: e.clientX,
                        y: e.clientY
                    },
                    this.touch = {
                        x: e.clientX,
                        y: e.clientY
                    }
                },
                onTouchMove: function(t) {
                    var e = t.targetTouches[0];
                    this.touch = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    var i = 0;
                    if ("" == this.swipeDir) {
                        var r = this.beforeTouch.x - this.touch.x
                          , a = this.beforeTouch.y - this.touch.y
                          , o = Math.abs(r) - Math.abs(a);
                        Math.abs(o) > 4 && (this.gotoTween && this.gotoTween.kill(),
                        this.mainVisual.animateToWorksListTransition(),
                        this.isTouchAnimating = !0,
                        o > 0 ? (this.swipeDir = "x",
                        i = r) : (this.swipeDir = "y",
                        i = a))
                    } else
                        i = this.beforeTouch[this.swipeDir] - this.touch[this.swipeDir];
                    this.touchDelta = .5 * Math.max(-300, Math.min(10 * i, 300)),
                    this.scrollY += this.touchDelta,
                    this.beforeTouch = {
                        x: e.clientX,
                        y: e.clientY
                    }
                },
                onTouchEnd: function(t) {
                    var e = this
                      , i = 10 * (this.touch[this.swipeDir] - this.startTouch[this.swipeDir]) * .5
                      , r = Math.abs(i);
                    this.swipeDir = "";
                    var a = this.getIndex();
                    r < 1e3 && ((a = this.indexValue) < 0 && (a += this.numItems),
                    a = -1 == Ye()(i) ? a % 1 >= .1 ? Math.ceil(a) : Math.floor(a) : a % 1 <= .9 ? Math.floor(a) : Math.ceil(a)),
                    this.touchEndTimeline && this.touchEndTimeline.kill(),
                    this.touchEndTimeline = ct.B.timeline().to(this, .4, {
                        scrollY: 1e3 * a,
                        ease: ct.c.easeOut
                    }).add((function() {
                        e.isTouchAnimating = !1
                    }
                    ), .2)
                },
                onMouseOver: function(t) {
                    this.$store.commit("setWorksListFullModeHoverd", !0)
                },
                onMouseOut: function(t) {
                    this.$store.commit("setWorksListFullModeHoverd", !1)
                },
                onKeyDown: function(t) {
                    if (this.$refs.clickableArea.focus(),
                    this.isAvailable) {
                        var e = t.key;
                        "ArrowRight" == e || "ArrowDown" == e ? this.goNext() : "ArrowLeft" == e || "ArrowUp" == e ? this.goPrev() : "Enter" == e && this.onClick()
                    }
                },
                goPrev: function() {
                    this.goTo(-1)
                },
                goNext: function() {
                    this.goTo(1)
                },
                goTo: function(t) {
                    var e = this;
                    this.isTouchAnimating = !0,
                    this.mainVisual.animateToWorksListTransition();
                    var i = this.indexValue;
                    i = Math.round(i + t),
                    this.gotoTween && this.gotoTween.kill(),
                    this.gotoTween = ct.B.timeline().to(this, .6, {
                        scrollY: 1e3 * i,
                        ease: ct.c.easeOut
                    }).add((function() {
                        e.isTouchAnimating = !1
                    }
                    ), "-=0.2")
                },
                snap: function() {
                    var t = 1e3 * this.getIndex() - this.scrollY;
                    t > 1e3 ? t -= 1e3 * this.numItems : t < -1e3 && (t += 1e3 * this.numItems),
                    this.scrollY += .2 * t
                },
                updateSpeed: function() {
                    var t = this.scrollY - this.beforeScrollY;
                    Math.abs(t) > 200 && (t -= Ye()(t) * this.numItems * 1e3),
                    t = Math.max(-100, Math.min(t, 100)) / 100,
                    this.mainVisual.setSpeedValue(t)
                },
                updateScrollY: function() {
                    this.scrollY < 0 && (this.scrollY += 1e3 * this.numItems),
                    this.scrollY = this.scrollY % (1e3 * this.numItems);
                    var t = this.scrollY / 1e3;
                    if (this.indexValue = t,
                    this.mainVisual.setTransitionOffset(this.indexValue % 1),
                    this.delta <= .001 && this.delta,
                    this.scrollY += this.delta,
                    !this.isTouchAnimating) {
                        var e = Math.abs(this.delta);
                        e < 50 && this.snap(),
                        e > 4 && this.mainVisual.animateToWorksListTransition(),
                        e < 4 && this.mainVisual.animateFromWorksListTransition(this.worksListData[this.getIndex()]),
                        this.delta *= .94
                    }
                    this.updateSpeed(),
                    this.beforeScrollY = this.scrollY
                },
                setDigitPos: function(t, e) {
                    var i = t.offsetHeight / 12;
                    ct.B.set(t, {
                        y: (1 + e) % 11 * -i
                    })
                },
                updateIndicator: function() {
                    var t = Math.round(this.indexValue);
                    t = t % this.numItems + 1,
                    this.setDigits(this.$refs.currentDigit10Inner, this.$refs.currentDigit01Inner, t),
                    this.setDigits(this.$refs.totalDigit10Inner, this.$refs.totalDigit01Inner, this.numItems)
                },
                setDigits: function(t, e, i) {
                    var r = i.toString()
                      , a = 0
                      , o = r;
                    i >= 10 && (a = r.charAt(0),
                    o = r.charAt(1)),
                    a = $e()(a),
                    o = $e()(o),
                    this.setDigitPos(t, a),
                    this.setDigitPos(e, o)
                },
                update: function() {
                    this.isAvailable && (this.isTransitionMode = this.mainVisual && this.mainVisual.isTransitionMode(),
                    this.updateIndicator(),
                    this.updateScrollY())
                },
                getLoadingTitle: function(t) {
                    return t ? t.replace("_", "<br>") : ""
                },
                getTaggedTitle: function(t) {
                    if (!t)
                        return "";
                    var e = [];
                    if (ke()(t).call(t, "_") >= 0) {
                        var i, r = t.split("_");
                        e = Mt()(i = r[0].split(" ")).call(i, "<br>", r[1].split(" "))
                    } else
                        e = t.split(" ");
                    for (var a, o = "", n = 0, s = e.length; n < s; n++)
                        o += "<br>" == (a = e[n]) ? a : '<span class="inner">'.concat(a, "</span>");
                    return o
                }
            }
        }
          , Qe = (i(570),
        Object(et.a)(qe, (function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "worksListFullMode",
                    duration: "400"
                }
            }, [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isAvailable && "full" == t.$store.state.displayMode,
                    expression: "isAvailable && $store.state.displayMode == 'full'"
                }],
                staticClass: "worksListFullMode",
                on: {
                    wheel: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.onWheel(e)
                    },
                    touchstart: function(e) {
                        return t.onTouchStart(e)
                    },
                    touchend: function(e) {
                        return t.onTouchEnd(e)
                    },
                    touchmove: function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        t.onTouchMove(e)
                    }
                }
            }, [i("button", {
                ref: "clickableArea",
                staticClass: "worksListFullMode__clickableArea",
                class: {
                    "is-loading": t.isLoading,
                    "is-transitionMode": t.isTransitionMode
                },
                style: t.clickableAreaStyleObj,
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.onClick(e)
                    },
                    mouseover: function(e) {
                        return t.onMouseOver(e)
                    },
                    mouseout: function(e) {
                        return t.onMouseOut(e)
                    }
                }
            }, [i("div", {
                staticClass: "worksListFullMode__clickableAreaTxt"
            }, [i("p", {
                staticClass: "worksListFullMode__clickableAreaTxtInner"
            }, [t._v("loading...")]), i("div", {
                staticClass: "worksListFullMode__clickableAreaTxtInner",
                domProps: {
                    innerHTML: t._s(t.getLoadingTitle(t.worksData.title))
                }
            })]), i("div", {
                staticClass: "worksItem__titles"
            }, [i("h2", {
                staticClass: "worksItem__title"
            }, [i("p", {
                staticClass: "worksItem__titleInner",
                domProps: {
                    innerHTML: t._s(t.getTaggedTitle(t.worksData.title))
                }
            }), t.worksData.title2 ? i("p", {
                staticClass: "worksItem__title2",
                domProps: {
                    innerHTML: t._s(t.getTaggedTitle(t.worksData.title2))
                }
            }) : t._e()]), t.worksData.titleJp ? i("p", {
                staticClass: "worksItem__titleJp",
                domProps: {
                    innerHTML: t._s(t.getTaggedTitle(t.worksData.titleJp))
                }
            }) : t._e()])]), i("div", {
                staticClass: "worksListFullModeHowToMove",
                class: {
                    "is-onceMoved": t.isOnceMoved
                }
            }, [i("div", {
                staticClass: "worksListFullModeHowToMoveItem worksListFullModeHowToMoveItem--arrowKey"
            }, [i("svg", {
                staticClass: "worksListFullModeHowToMoveItem__icon"
            }, [i("use", {
                attrs: {
                    "xlink:href": "#iconArrowKey"
                }
            })]), i("p", {
                staticClass: "worksListFullModeHowToMoveItem__label"
            }, [t._v("press arrow key")])]), i("div", {
                staticClass: "worksListFullModeHowToMoveItem worksListFullModeHowToMoveItem--scroll"
            }, [i("svg", {
                staticClass: "worksListFullModeHowToMoveItem__icon"
            }, [i("use", {
                attrs: {
                    "xlink:href": "#iconScroll"
                }
            })]), i("p", {
                staticClass: "worksListFullModeHowToMoveItem__label"
            }, [t._v("mouse scroll")])]), i("div", {
                staticClass: "worksListFullModeHowToMoveItem worksListFullModeHowToMoveItem--swipe"
            }, [i("svg", {
                staticClass: "worksListFullModeHowToMoveItem__icon"
            }, [i("use", {
                attrs: {
                    "xlink:href": "#iconSwipe"
                }
            })]), i("p", {
                staticClass: "worksListFullModeHowToMoveItem__label"
            }, [t._v("swipe")]), i("p", {
                staticClass: "worksListFullMode__clickNotice"
            }, [t._v("and"), i("br"), t._v("\ntap to view more details")])])]), i("div", {
                staticClass: "worksListFullModeIndicator"
            }, [i("button", {
                staticClass: "worksListFullModeIndicator__prev",
                on: {
                    click: t.goPrev
                }
            }), i("button", {
                staticClass: "worksListFullModeIndicator__next",
                on: {
                    click: t.goNext
                }
            }), i("p", {
                staticClass: "worksListFullModeIndicator__current"
            }, [i("span", {
                staticClass: "worksListFullModeIndicator__digit10"
            }, [i("span", {
                ref: "currentDigit10Inner",
                staticClass: "worksListFullModeIndicator__digit10Inner"
            }, t._l(t.digits, (function(e, r) {
                return i("span", {
                    key: "currentDigit10_" + r,
                    staticClass: "worksListFullModeIndicator__digit"
                }, [t._v(t._s(e))])
            }
            )), 0)]), i("span", {
                staticClass: "worksListFullModeIndicator__digit01"
            }, [i("span", {
                ref: "currentDigit01Inner",
                staticClass: "worksListFullModeIndicator__digit01Inner"
            }, t._l(t.digits, (function(e, r) {
                return i("span", {
                    key: "currentDigit01_" + r,
                    staticClass: "worksListFullModeIndicator__digit"
                }, [t._v(t._s(e))])
            }
            )), 0)])]), i("p", {
                staticClass: "worksListFullModeIndicator__total"
            }, [i("span", {
                staticClass: "worksListFullModeIndicator__digit10"
            }, [i("span", {
                ref: "totalDigit10Inner",
                staticClass: "worksListFullModeIndicator__digit10Inner"
            }, t._l(t.digits, (function(e, r) {
                return i("span", {
                    key: "totalDigit10_" + r,
                    staticClass: "worksListFullModeIndicator__digit"
                }, [t._v(t._s(e))])
            }
            )), 0)]), i("span", {
                staticClass: "worksListFullModeIndicator__digit01"
            }, [i("span", {
                ref: "totalDigit01Inner",
                staticClass: "worksListFullModeIndicator__digit01Inner"
            }, t._l(t.digits, (function(e, r) {
                return i("span", {
                    key: "totalDigit01_" + r,
                    staticClass: "worksListFullModeIndicator__digit"
                }, [t._v(t._s(e))])
            }
            )), 0)])])])])])
        }
        ), [], !1, null, "6003a4b6", null).exports)
          , Ze = {
            data: function() {
                return {
                    pointerPos: {
                        x: 0,
                        y: 0
                    }
                }
            },
            computed: {
                classObj: function() {
                    return {
                        "is-available": "works" === this.$store.state.currentId && "works-id" !== this.$route.name
                    }
                },
                styleObj: function() {
                    var t;
                    return {
                        opacity: this.$store.state.isWorksListFullModeHoverd ? 1 : 0,
                        transform: Mt()(t = "translate(-50%, -50%) translate(".concat(this.pointerPos.x, "px, ")).call(t, this.pointerPos.y, "px)")
                    }
                },
                squareStyleObj: function() {
                    return {
                        fill: this.$store.state.pointerColor
                    }
                },
                labelStyleObj: function() {
                    return {
                        color: this.$store.state.pointerColor
                    }
                }
            },
            methods: {
                setMainVisual: function(t) {
                    this.mainVisual = t
                },
                setPointerPos: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this.pointerPos.x = t,
                    this.pointerPos.y = e
                }
            }
        }
          , Je = (i(572),
        {
            components: {
                Loading: ft,
                Logo: lt,
                PatternBg: te,
                MainVisual: je,
                WorksListFullMode: Qe,
                SVGDefs: mt,
                Menu: bt,
                ButtonMenu: vt,
                ButtonBack: kt,
                ButtonScrollTop: _t,
                Settings: Lt,
                AlertModal: Ot,
                PointerNotice: Object(et.a)(Ze, (function() {
                    var t = this.$createElement
                      , e = this._self._c || t;
                    return e("div", {
                        staticClass: "pointerNotice",
                        class: this.classObj,
                        style: this.styleObj
                    }, [e("span", {
                        staticClass: "pointerNotice__square"
                    }, [e("svg", {
                        ref: "squareSVG",
                        style: this.squareStyleObj
                    }, [e("use", {
                        attrs: {
                            "xlink:href": "#charSquare"
                        }
                    })])]), e("p", {
                        staticClass: "pointerNotice__label",
                        style: this.labelStyleObj
                    }, [this._v("more details")])])
                }
                ), [], !1, null, "68129c30", null).exports
            },
            data: function() {
                return {
                    scrollToTweenObj: {
                        value: 0
                    },
                    mq: null,
                    body: null,
                    html: null,
                    youtubeLoadPromise: null
                }
            },
            computed: {
                logoTxt: function() {
                    return this.$store.state.logoTxt
                },
                isMenuOpened: function() {
                    return this.$store.state.isMenuOpened
                },
                isLayoutL: function() {
                    return "l" === this.$store.state.layoutMode
                },
                isWorksList: function() {
                    return "works" === this.$store.state.currentId && "works-id" !== this.$route.name
                },
                menuPosition: function() {
                    return this.$store.state.menuPosition
                },
                classObj: function() {
                    var t = {
                        "is-menuOpened": this.isMenuOpened,
                        "is-index": "index" === this.$store.state.currentId,
                        "is-worksList": this.isWorksList,
                        "is-scrolled": this.$store.state.isScrolled,
                        "is-darkMode": this.$store.state.isDarkMode,
                        "is-buttonBackAvailable": this.$store.state.isButtonBackAvailable,
                        "is-blendMode": this.$store.state.supportsBlendMode,
                        "is-landScape": !this.isLayoutL && this.$store.state.windowWidth > this.$store.state.windowHeight
                    };
                    return "l" !== this.$store.state.layoutMode && ("bottomRight" == this.$store.state.menuPosition ? t["is-menuBottomRight"] = !0 : "bottomLeft" == this.$store.state.menuPosition ? t["is-menuBottomLeft"] = !0 : "topRight" == this.$store.state.menuPosition && (t["is-menuTopRight"] = !0)),
                    "full" == this.$store.state.displayMode ? t["is-displayModeFull"] = !0 : "simple" == this.$store.state.displayMode ? t["is-displayModeSimple"] = !0 : "minimum" == this.$store.state.displayMode && (t["is-displayModeMinimum"] = !0),
                    t
                }
            },
            created: function() {
                var t = this;
                this.youtubeLoadPromise = new n.a((function(e, i) {
                    var r = nt()((function() {
                        t.$store.commit("setYouTubeAvailable", !1),
                        i("timeout")
                    }
                    ), 15e3);
                    if (window.YT && window.YT.Player)
                        return clearTimeout(r),
                        e();
                    window.onYouTubeIframeAPIReady = function() {
                        clearTimeout(r),
                        e()
                    }
                }
                )),
                window.addEventListener("popstate", (function(e) {
                    t.$store.commit("popHistory")
                }
                ))
            },
            mounted: function() {
                var t, e, i, r, a, o, n;
                this.body = document.body,
                this.html = this.body.parentElement,
                this.$store.commit("setSupportsBlenMode", window.CSS && window.CSS.supports("mix-blend-mode", "soft-light")),
                this.$nuxt.youtubeLoadPromise = this.youtubeLoadPromise,
                this.$nuxt.scrollTo = l()(t = this.scrollTo).call(t, this),
                this.$nuxt.getOffsetTop = l()(e = this.getOffsetTop).call(e, this),
                this.$nuxt.onPageLoad = l()(i = this.onPageLoad).call(i, this),
                this.$nuxt.patternBg = this.$refs.patternBg,
                this.$nuxt.mainVisual = this.$refs.mainVisual,
                this.$nuxt.worksListFullMode = this.$refs.worksListFullMode,
                this.$nuxt.pointerNotice = this.$refs.pointerNotice,
                this.$nuxt.worksListFullMode.setMainVisual(this.$nuxt.mainVisual),
                this.$nuxt.pointerNotice.setMainVisual(this.$nuxt.mainVisual),
                this.scrollHandler = l()(r = this.scrollHandler).call(r, this),
                this.cancelScrollToAnimation = l()(a = this.cancelScrollToAnimation).call(a, this),
                this.mobileResizeHanndler = l()(o = this.mobileResizeHanndler).call(o, this),
                this.resizeHandler = l()(n = this.resizeHandler).call(n, this),
                this.initIntersectionObserver(),
                this.initScroll(),
                this.initMediaQuery(),
                this.initResize()
            },
            methods: {
                scrollTo: function(t) {
                    var e = this
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .6
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ct.b.easeInOut
                      , s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
                      , l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    return Object(O.a)(a.a.mark((function c() {
                        var d;
                        return a.a.wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return "string" == typeof t ? (d = document.getElementById(t),
                                    t = d ? e.getOffsetTop(d) : 0) : t instanceof HTMLElement && (t = t ? e.getOffsetTop(t) : 0),
                                    e.scrollHeight = e.html.scrollHeight - window.innerHeight,
                                    t = Math.min(t, e.scrollHeight),
                                    e.killScrollTween(),
                                    a.abrupt("return", new n.a((function(a) {
                                        var n = window.scrollY || window.pageYOffset;
                                        if (t === n)
                                            return a();
                                        e.scrollToTweenObj = {
                                            value: n
                                        };
                                        var c = window.scrollX || window.pageXOffset;
                                        ct.B.to(e.scrollToTweenObj, i, {
                                            value: t,
                                            overwrite: !0,
                                            ease: o,
                                            delay: r,
                                            onStart: function() {
                                                null != s && s()
                                            },
                                            onUpdate: function() {
                                                window.scrollTo(c, e.scrollToTweenObj.value)
                                            },
                                            onComplete: function() {
                                                return null != l && l(),
                                                a()
                                            }
                                        })
                                    }
                                    )));
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), c)
                    }
                    )))()
                },
                getOffsetTop: function(t) {
                    return t.offsetParent ? t.offsetTop + this.getOffsetTop(t.offsetParent) : t.offsetTop
                },
                killScrollTween: function() {
                    this.scrollToTweenObj && ct.B.killTweensOf(this.scrollToTweenObj),
                    this.scrollToTweenObj = null
                },
                initScroll: function() {
                    this.scrollCount = 0,
                    window.addEventListener("scroll", this.scrollHandler, {
                        passive: !0
                    }),
                    window.addEventListener("wheel", this.cancelScrollToAnimation, {
                        passive: !0
                    }),
                    window.addEventListener("touchmove", this.cancelScrollToAnimation, {
                        passive: !0
                    })
                },
                cancelScrollToAnimation: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.killScrollTween()
                },
                scrollHandler: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , e = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    window.scrollY || window.pageYOffset);
                    this.$store.commit("setScrollTop", e),
                    e > 100 && !this.$store.state.isScrolled ? "index" !== this.$store.state.currentId && this.$store.commit("setScrolled", !0) : e <= 100 && this.$store.state.isScrolled && this.$store.commit("setScrolled", !1),
                    this.scrollHeight = this.html.scrollHeight - window.innerHeight,
                    this.$nuxt.mainVisual.scroll(e, null !== t)
                },
                initMediaQuery: function() {
                    this.mqL = window.matchMedia("(min-width:1025px)"),
                    this.mqM = window.matchMedia("(min-width:761px) and (max-width:1024px)"),
                    this.mqS = window.matchMedia("(min-width:321px) and (max-width:760px)"),
                    this.mqSS = window.matchMedia("(max-width:320px)")
                },
                mediaQueryHandler: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.mqL.matches && "l" !== this.$store.state.layoutMode ? this.$store.commit("setLayoutMode", "l") : this.mqM.matches && "m" !== this.$store.state.layoutMode ? this.$store.commit("setLayoutMode", "m") : this.mqS.matches && "s" !== this.$store.state.layoutMode ? this.$store.commit("setLayoutMode", "s") : this.mqSS.matches && "ss" !== this.$store.state.layoutMode && this.$store.commit("setLayoutMode", "ss")
                },
                initResize: function() {
                    this.$md.mobile() ? (this.resizeTimer = null,
                    window.addEventListener("orientationchange", this.mobileResizeHanndler, {
                        passive: !0
                    })) : window.addEventListener("resize", this.resizeHandler, {
                        passive: !0
                    }),
                    this.resizeHandler()
                },
                mobileResizeHanndler: function() {
                    var t = this;
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    null != this.resizeTimer && (clearTimeout(this.resizeTimer),
                    this.resizeTimer = null),
                    this.resizeTimer = nt()((function() {
                        t.resizeHandler()
                    }
                    ), 300)
                },
                resizeHandler: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.$store.commit("setWindowSize"),
                    this.mediaQueryHandler(),
                    this.$nuxt.mainVisual && this.$nuxt.mainVisual.resize(),
                    this.scrollHandler(null, !0)
                },
                onPageLoad: function() {
                    this.resizeHandler()
                },
                onMenuOpened: function() {},
                onMenuClosed: function() {},
                initIntersectionObserver: function() {
                    if (window.IntersectionObserver) {
                        this.$nuxt.lazyLoadObserver = new IntersectionObserver((function(t, e) {
                            M()(t).call(t, (function(t, e) {
                                t.isIntersecting && t.target.onIntersect()
                            }
                            ))
                        }
                        ),{
                            root: null,
                            rootMargin: "0px",
                            threshold: function() {
                                for (var t = [], e = 1; e <= 20; e++) {
                                    var i = e / 20;
                                    t.push(i)
                                }
                                return t.push(0),
                                t
                            }()
                        })
                    }
                }
            }
        })
          , Ke = (i(574),
        {
            _default: Object(et.a)(Je, (function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "root",
                    class: t.classObj
                }, [i("SVGDefs"), i("Loading"), i("div", {
                    staticClass: "wrapper"
                }, [i("PatternBg", {
                    ref: "patternBg"
                }), i("MainVisual", {
                    ref: "mainVisual"
                }), i("WorksListFullMode", {
                    ref: "worksListFullMode"
                }), i("Logo", {
                    attrs: {
                        txt: t.logoTxt
                    }
                }), i("Menu", {
                    on: {
                        open: t.onMenuOpened,
                        close: t.onMenuClosed
                    }
                }), i("PointerNotice", {
                    ref: "pointerNotice"
                }), i("ButtonBack", {
                    staticClass: "is-onTopLeft"
                }), "topRight" != t.menuPosition || t.isLayoutL ? t._e() : i("div", {
                    staticClass: "buttonContainer buttonContainer--topRight"
                }, [i("ButtonMenu")], 1), "bottomLeft" != t.menuPosition || t.isLayoutL ? t._e() : i("div", {
                    staticClass: "buttonContainer buttonContainer--bottomLeft"
                }, [i("ButtonScrollTop"), i("ButtonMenu"), "bottomLeft" == t.menuPosition ? i("ButtonBack", {
                    staticClass: "is-onBottomLeft"
                }) : t._e()], 1), "bottomLeft" != t.menuPosition || t.isLayoutL ? i("div", {
                    staticClass: "buttonContainer buttonContainer--bottomRight"
                }, [i("ButtonScrollTop"), "bottomRight" != t.menuPosition || t.isLayoutL ? t._e() : i("ButtonMenu"), "bottomRight" != t.menuPosition || t.isLayoutL ? t._e() : i("ButtonBack", {
                    staticClass: "is-onBottomRight"
                })], 1) : t._e(), i("main", {
                    staticClass: "contents"
                }, [i("nuxt")], 1), i("Settings"), i("AlertModal")], 1)], 1)
            }
            ), [], !1, null, "26a2d11d", null).exports
        })
          , ti = {
            head: {
                htmlAttrs: {
                    prefix: "og: http://ogp.me/ns#"
                },
                title: "unshift",
                titleTemplate: "%s | unshift",
                meta: [{
                    charset: "utf-8"
                }, {
                    name: "viewport",
                    content: "width=device-width"
                }, {
                    hid: "description",
                    name: "description",
                    content: "This is Kenzo Suzuki's portfolio site."
                }, {
                    hid: "og:site_name",
                    property: "og:site_name",
                    content: "unshift"
                }, {
                    hid: "og:type",
                    property: "og:type",
                    content: "website"
                }, {
                    hid: "og:url",
                    property: "og:url",
                    content: "https://unshift.jp/"
                }, {
                    hid: "og:title",
                    property: "og:title",
                    content: "unshift"
                }, {
                    hid: "og:description",
                    property: "og:description",
                    content: "This is Kenzo Suzuki's portfolio site."
                }, {
                    hid: "og:image",
                    property: "og:image",
                    content: "https://unshift.jp/img/common/ogp.png"
                }, {
                    hid: "twitter:card",
                    name: "twitter:card",
                    content: "summary_large_image"
                }, {
                    hid: "twitter:title",
                    name: "twitter:title",
                    content: "unshift"
                }, {
                    hid: "twitter:description",
                    name: "twitter:description",
                    content: "This is Kenzo Suzuki's portfolio site."
                }, {
                    hid: "twitter:image",
                    name: "twitter:image",
                    content: "https://unshift.jp/img/common/ogp.png"
                }],
                link: [{
                    rel: "icon",
                    type: "image/x-icon",
                    href: "/img/icon/favicon.ico"
                }, {
                    rel: "apple-touch-icon",
                    href: "/img/icon/apple-touch-icon.png"
                }, {
                    rel: "manifest",
                    href: "/img/icon/manifest.json"
                }],
                script: [{
                    src: "https://www.youtube.com/player_api",
                    async: !0
                }],
                style: []
            },
            render: function(t, e) {
                var i = t(this.layout || "nuxt")
                  , r = t("div", {
                    domProps: {
                        id: "__layout"
                    },
                    key: this.layoutName
                }, [i])
                  , a = t("transition", {
                    props: {
                        name: "layout",
                        mode: "out-in"
                    },
                    on: {
                        beforeEnter: function(t) {
                            window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            }
                            ))
                        }
                    }
                }, [r]);
                return t("div", {
                    domProps: {
                        id: "__nuxt"
                    }
                }, [a])
            },
            data: function() {
                return {
                    isOnline: !0,
                    layout: null,
                    layoutName: ""
                }
            },
            beforeCreate: function() {
                E.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
            },
            created: function() {
                E.a.prototype.$nuxt = this,
                window.$nuxt = this,
                this.refreshOnlineStatus(),
                window.addEventListener("online", this.refreshOnlineStatus),
                window.addEventListener("offline", this.refreshOnlineStatus),
                this.error = this.nuxt.error,
                this.context = this.$options.context
            },
            computed: {
                isOffline: function() {
                    return !this.isOnline
                }
            },
            methods: {
                refreshOnlineStatus: function() {
                    void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                },
                refresh: function() {
                    var t = this;
                    return Object(O.a)(a.a.mark((function e() {
                        var i, r;
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((i = Object(N.f)(t.$route)).length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return r = f()(i).call(i, (function(e) {
                                        var i = [];
                                        return e.$options.fetch && i.push(Object(N.m)(e.$options.fetch, t.context)),
                                        e.$options.asyncData && i.push(Object(N.m)(e.$options.asyncData, t.context).then((function(t) {
                                            for (var i in t)
                                                E.a.set(e.$data, i, t[i])
                                        }
                                        ))),
                                        n.a.all(i)
                                    }
                                    )),
                                    e.prev = 4,
                                    e.next = 7,
                                    n.a.all(r);
                                case 7:
                                    e.next = 13;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(4),
                                    Object(N.i)(e.t0),
                                    t.error(e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[4, 9]])
                    }
                    )))()
                },
                setLayout: function(t) {
                    return t && Ke["_" + t] || (t = "default"),
                    this.layoutName = t,
                    this.layout = Ke["_" + t],
                    this.layout
                },
                loadLayout: function(t) {
                    return t && Ke["_" + t] || (t = "default"),
                    n.a.resolve(Ke["_" + t])
                }
            }
        }
          , ei = i(235);
        E.a.use(ei.a);
        var ii = {};
        (ii = function(t, e) {
            if ((t = t.default || t).commit)
                throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
            return "function" != typeof t && (t = b()({}, t)),
            function(t, e) {
                if (t.state && "function" != typeof t.state) {
                    var i = b()({}, t.state);
                    t = b()({}, t, {
                        state: function() {
                            return i
                        }
                    })
                }
                return t
            }(t)
        }(i(576), "store/index.js")).modules = ii.modules || {};
        var ri = ii instanceof Function ? ii : function() {
            return new ei.a.Store(b()({
                strict: !1
            }, ii))
        }
        ;
        var ai = i(309)
          , oi = i.n(ai);
        function ni(t, e) {
            var i = A()(t);
            if (B.a) {
                var r = B()(t);
                e && (r = S()(r).call(r, (function(e) {
                    return T()(t, e).enumerable
                }
                ))),
                i.push.apply(i, r)
            }
            return i
        }
        function si(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i, r = null != arguments[e] ? arguments[e] : {};
                if (e % 2)
                    M()(i = ni(Object(r), !0)).call(i, (function(e) {
                        Object(G.a)(t, e, r[e])
                    }
                    ));
                else if (_.a)
                    k()(t, _()(r));
                else {
                    var a;
                    M()(a = ni(Object(r))).call(a, (function(e) {
                        v()(t, e, T()(r, e))
                    }
                    ))
                }
            }
            return t
        }
        var li, ci, di = function() {
            var t = Object(O.a)(a.a.mark((function t(e, i) {
                var r;
                return a.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if ("function" != typeof (r = {
                                dev: !0,
                                debug: {
                                    sendHitTask: !0
                                },
                                id: "UA-115936777-1"
                            }).asyncID) {
                                t.next = 5;
                                break
                            }
                            return t.next = 4,
                            r.asyncID(e);
                        case 4:
                            r.id = t.sent;
                        case 5:
                            E.a.use(oi.a, si({}, {
                                router: e.app.router
                            }, {}, r)),
                            e.$ga = E.a.$ga,
                            i("ga", E.a.$ga);
                        case 8:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e, i) {
                return t.apply(this, arguments)
            }
        }(), ui = i(310), fi = i.n(ui), hi = i(311), mi = i.n(hi);
        E.a.prototype.$md = (li = new fi.a(navigator.userAgent),
        ci = document.querySelector("html"),
        li.tablet() ? ci.classList.add("is-tablet") : li.mobile() ? ci.classList.add("is-mobile") : ci.classList.add("is-desktop"),
        li);
        var pi, bi, gi = document.querySelector("html"), vi = navigator && navigator.userAgent;
        vi && (E.a.prototype.$isiOS = (pi = vi,
        -1 !== ke()(bi = navigator.userAgent.toLowerCase()).call(bi, "ipad") || function(t) {
            var e;
            return -1 !== ke()(e = t.toLowerCase()).call(e, "iphone")
        }(pi) || function(t) {
            var e;
            return -1 !== ke()(e = t.toLowerCase()).call(e, "ipod")
        }(pi)),
        E.a.prototype.$isAndroid = function(t) {
            var e;
            return -1 !== ke()(e = t.toLowerCase()).call(e, "android")
        }(vi),
        E.a.prototype.$isIE11 = function(t) {
            var e;
            return -1 !== ke()(e = t.toLowerCase()).call(e, "rv:11.0")
        }(vi),
        E.a.prototype.$isEdge = function(t) {
            var e;
            return -1 !== ke()(e = t.toLowerCase()).call(e, "edge")
        }(vi),
        E.a.prototype.$isWindows = function(t) {
            var e;
            return -1 !== ke()(e = t.toLowerCase()).call(e, "windows")
        }(vi),
        E.a.prototype.$isGoogleBot = function(t) {
            var e;
            return ke()(e = t.toLowerCase()).call(e, "googlebot") >= 0
        }(vi),
        E.a.prototype.$isChrome = !E.a.prototype.$isEdge && function(t) {
            var e;
            return -1 !== ke()(e = t.toLowerCase()).call(e, "chrome")
        }(vi),
        E.a.prototype.$isFirefox = !E.a.prototype.$isEdge && function(t) {
            var e;
            return -1 !== ke()(e = t.toLowerCase()).call(e, "firefox")
        }(vi),
        E.a.prototype.$isiOS && gi.classList.add("is-ios"),
        E.a.prototype.$isAndroid && gi.classList.add("is-android"),
        E.a.prototype.$isIE11 && gi.classList.add("is-ie11"),
        E.a.prototype.$isEdge && gi.classList.add("is-edge"),
        E.a.prototype.$isGoogleBot && gi.classList.add("is-windows"),
        E.a.prototype.$isFirefox && gi.classList.add("is-firefox"),
        E.a.prototype.$isGoogleBot && gi.classList.add("is-googlebot"),
        E.a.prototype.$isWindows && E.a.prototype.$isChrome && gi.classList.add("is-winchrome")),
        E.a.prototype.$webfontLoadPromise = new n.a((function(t) {
            mi.a.load({
                google: {
                    families: ["Noto Sans JP:700"]
                },
                custom: {
                    families: ["YakuHanJP", "Futura"]
                },
                timeout: 1e4,
                active: function() {
                    nt()((function() {
                        t()
                    }
                    ), 100)
                },
                fontactive: function(t, e) {},
                inactive: function() {
                    t("failed to load webfont")
                }
            })
        }
        ));
        E.a.prototype.$localStorage = {
            init: function() {
                var t = !0;
                if (window.localStorage)
                    try {
                        localStorage.setItem("checkIfUseLocalStorage", "1"),
                        localStorage.removeItem("checkIfUseLocalStorage")
                    } catch (e) {
                        t = !1
                    }
                else
                    t = !1;
                t ? (E.a.prototype.$localStorage.setLocalStorage = function(t, e) {
                    return localStorage.setItem(t, e)
                }
                ,
                E.a.prototype.$localStorage.getLocalStorage = function(t) {
                    return localStorage.getItem(t)
                }
                ,
                E.a.prototype.$localStorage.removeLocalStorage = function(t) {
                    return localStorage.removeItem(t)
                }
                ,
                E.a.prototype.$localStorage.clearLocalStorage = function() {
                    return localStorage.clear()
                }
                ) : (E.a.prototype.$localStorage.setLocalStorage = function() {
                    return null
                }
                ,
                E.a.prototype.$localStorage.getLocalStorage = function() {
                    return null
                }
                ,
                E.a.prototype.$localStorage.removeLocalStorage = function() {
                    return null
                }
                ,
                E.a.prototype.$localStorage.clearLocalStorage = function() {
                    return null
                }
                )
            }
        };
        var wi = i(194)
          , ki = i.n(wi);
        i(579);
        ki.a.apps.length || ki.a.initializeApp({
            apiKey: "AIzaSyDH7g3cwcfoIANYQHF1yhy6EIUoZC3qNNI",
            authDomain: "unshift-43ba9.firebaseapp.com",
            databaseURL: "https://unshift-43ba9.firebaseio.com",
            projectId: "unshift-43ba9",
            storageBucket: "unshift-43ba9.appspot.com",
            messagingSenderId: "907929841968",
            appId: "1:907929841968:web:56e924d8c15dd4f0"
        });
        var xi = ki.a;
        function _i(t, e) {
            var i = A()(t);
            if (B.a) {
                var r = B()(t);
                e && (r = S()(r).call(r, (function(e) {
                    return T()(t, e).enumerable
                }
                ))),
                i.push.apply(i, r)
            }
            return i
        }
        function yi(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i, r = null != arguments[e] ? arguments[e] : {};
                if (e % 2)
                    M()(i = _i(Object(r), !0)).call(i, (function(e) {
                        Object(G.a)(t, e, r[e])
                    }
                    ));
                else if (_.a)
                    k()(t, _()(r));
                else {
                    var a;
                    M()(a = _i(Object(r))).call(a, (function(e) {
                        v()(t, e, T()(r, e))
                    }
                    ))
                }
            }
            return t
        }
        E.a.component(R.a.name, R.a),
        E.a.component(F.a.name, yi({}, F.a, {
            render: function(t, e) {
                return F.a._warned || (F.a._warned = !0),
                F.a.render(t, e)
            }
        })),
        E.a.component(Z.name, Z),
        E.a.component("NChild", Z),
        E.a.component(at.name, at),
        E.a.use(X.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var Mi = {
            name: "page",
            duration: 200,
            mode: "out-in",
            appear: !1,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        };
        function Ci(t) {
            return Ti.apply(this, arguments)
        }
        function Ti() {
            return (Ti = Object(O.a)(a.a.mark((function t(e) {
                var i, r, o, n, s, c, u, h, p;
                return a.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Q();
                        case 2:
                            return r = t.sent,
                            (o = ri(e)).$router = r,
                            n = o.registerModule,
                            o.registerModule = function(t, e, i) {
                                return n.call(o, t, e, b()({
                                    preserveState: !0
                                }, i))
                            }
                            ,
                            s = yi({
                                store: o,
                                router: r,
                                nuxt: {
                                    defaultTransition: Mi,
                                    transitions: [Mi],
                                    setTransitions: function(t) {
                                        return m()(t) || (t = [t]),
                                        t = f()(t).call(t, (function(t) {
                                            return t = t ? "string" == typeof t ? b()({}, Mi, {
                                                name: t
                                            }) : b()({}, Mi, t) : Mi
                                        }
                                        )),
                                        this.$options.nuxt.transitions = t,
                                        t
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(t) {
                                        t = t || null,
                                        s.context._errored = Boolean(t),
                                        t = t ? Object(N.l)(t) : null;
                                        var i = this.nuxt || this.$options.nuxt;
                                        return i.dateErr = d()(),
                                        i.err = t,
                                        e && (e.nuxt.error = t),
                                        t
                                    }
                                }
                            }, ti),
                            o.app = s,
                            c = e ? e.next : function(t) {
                                return s.router.push(t)
                            }
                            ,
                            e ? u = r.resolve(e.url).route : (h = Object(N.d)(r.options.base, r.options.mode),
                            u = r.resolve(h).route),
                            t.next = 13,
                            Object(N.o)(s, {
                                store: o,
                                route: u,
                                next: c,
                                error: l()(i = s.nuxt.error).call(i, s),
                                payload: e ? e.payload : void 0,
                                req: e ? e.req : void 0,
                                res: e ? e.res : void 0,
                                beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                ssrContext: e
                            });
                        case 13:
                            if (p = function(t, e) {
                                if (!t)
                                    throw new Error("inject(key, value) has no key provided");
                                if (void 0 === e)
                                    throw new Error("inject(key, value) has no value provided");
                                s[t = "$" + t] = e,
                                o[t] = s[t];
                                var i = "__nuxt_" + t + "_installed__";
                                E.a[i] || (E.a[i] = !0,
                                E.a.use((function() {
                                    Object.prototype.hasOwnProperty.call(E.a, t) || v()(E.a.prototype, t, {
                                        get: function() {
                                            return this.$root.$options[t]
                                        }
                                    })
                                }
                                )))
                            }
                            ,
                            window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state),
                            "function" != typeof di) {
                                t.next = 18;
                                break
                            }
                            return t.next = 18,
                            di(s.context, p);
                        case 18:
                            t.next = 21;
                            break;
                        case 21:
                            t.next = 24;
                            break;
                        case 24:
                            if ("function" != typeof xi) {
                                t.next = 27;
                                break
                            }
                            return t.next = 27,
                            xi(s.context, p);
                        case 27:
                            t.next = 30;
                            break;
                        case 30:
                            return t.abrupt("return", {
                                store: o,
                                app: s,
                                router: r
                            });
                        case 31:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
    }
}, [[316, 11, 2, 12]]]);
