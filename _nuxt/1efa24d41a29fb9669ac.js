(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    581: function(t, o, r) {
        "use strict";
        r(236),
        r(61),
        r(74),
        r(89);
        var e = r(1)
          , n = r.n(e)
          , a = r(9)
          , i = r.n(a)
          , s = (r(39),
        r(7))
          , c = r(36)
          , l = r.n(c);
        o.a = {
            data: function() {
                return {
                    logoTimer: null
                }
            },
            created: function() {
                this.$nuxt.lazyLoadObserverTargets = [],
                this.$store.commit("setButtonBack", {
                    isAvailable: !1
                })
            },
            mounted: function() {
                var t = this;
                this.$store.commit("setMenuOpened", !1),
                l()((function() {
                    t.$nuxt.mainVisual && t.$nuxt.mainVisual.scroll(window.scrollY || window.pageYOffset)
                }
                ), 100)
            },
            destroyed: function() {
                this.$store.commit("setPrevId", this.$store.state.currentId)
            },
            beforeDestroy: function() {
                this.$nuxt.patternBg.hide()
            },
            methods: {
                loadImg: function(t) {
                    return Object(s.a)(n.a.mark((function o() {
                        return n.a.wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    return o.abrupt("return", new i.a((function(o, r) {
                                        var e = document.createElement("img");
                                        e.src = t,
                                        e.width > 0 ? (e = null,
                                        o()) : e.addEventListener("load", (function() {
                                            o(),
                                            e = null
                                        }
                                        ), {
                                            once: !0
                                        })
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o)
                    }
                    )))()
                },
                hideLogo: function() {
                    this.$store.commit("setLogoShown", !1)
                },
                showLogo: function() {
                    var t = this
                      , o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
                    this.clearLogoTimer(),
                    this.setLogoTxt(),
                    this.logoTimer = l()(Object(s.a)(n.a.mark((function o() {
                        return n.a.wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    t.$store.commit("setLogoShown", !0);
                                case 1:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o)
                    }
                    ))), o)
                },
                setLogoTxt: function() {
                    this.$store.commit("setLogoTxt", "index" == this.$store.state.currentId ? "uzshift" : this.$store.state.currentId)
                },
                clearLogoTimer: function() {
                    this.logoTimer && clearTimeout(this.logoTimer)
                },
                getBackgroundImg: function(t) {
                    var o = window.getComputedStyle(t).backgroundImage.replace(/^url\(['"]?([^'"]*)['"]?\)$/, "$1");
                    return o = o.replace(new RegExp("^https?://" + window.location.host + "(.*)"), "$1")
                },
                onLoad: function() {
                    var t = this
                      , o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    return Object(s.a)(n.a.mark((function e() {
                        return n.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t.$nuxt.onPageLoad && t.$nuxt.onPageLoad(),
                                    t.$store.state.isRootLoaded && o && t.showLogo(),
                                    e.next = 4,
                                    t.$nextTick();
                                case 4:
                                    if (t.$store.state.isRootLoaded) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", new i.a(function() {
                                        var o = Object(s.a)(n.a.mark((function o(e) {
                                            return n.a.wrap((function(o) {
                                                for (; ; )
                                                    switch (o.prev = o.next) {
                                                    case 0:
                                                        l()(Object(s.a)(n.a.mark((function o() {
                                                            return n.a.wrap((function(o) {
                                                                for (; ; )
                                                                    switch (o.prev = o.next) {
                                                                    case 0:
                                                                        return t.setLogoTxt(),
                                                                        t.$nuxt.patternBg.init(),
                                                                        o.next = 4,
                                                                        t.$nuxt.mainVisual.start();
                                                                    case 4:
                                                                        t.$store.commit("setRootLoaded", !0),
                                                                        e();
                                                                    case 6:
                                                                    case "end":
                                                                        return o.stop()
                                                                    }
                                                            }
                                                            ), o)
                                                        }
                                                        ))), r);
                                                    case 1:
                                                    case "end":
                                                        return o.stop()
                                                    }
                                            }
                                            ), o)
                                        }
                                        )));
                                        return function(t) {
                                            return o.apply(this, arguments)
                                        }
                                    }()));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            }
        }
    },
    588: function(t, o, r) {
        var e = r(609);
        "string" == typeof e && (e = [[t.i, e, ""]]),
        e.locals && (t.exports = e.locals);
        (0,
        r(25).default)("b5c06902", e, !0, {
            sourceMap: !1
        })
    },
    608: function(t, o, r) {
        "use strict";
        var e = r(588);
        r.n(e).a
    },
    609: function(t, o, r) {
        (o = r(24)(!1)).push([t.i, "[data-v-1f705ee2]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-1f705ee2]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-1f705ee2{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-1f705ee2{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.is-displayModeFull.is-worksList .contentsRoot[data-v-1f705ee2]{position:fixed;left:0;top:0;width:100%;height:100%}.conentsInner[data-v-1f705ee2]{padding-bottom:216px}@media screen and (min-width:761px){.conentsInner[data-v-1f705ee2]{padding-bottom:240px}}", ""]),
        t.exports = o
    },
    753: function(t, o, r) {
        "use strict";
        r.r(o);
        r(61),
        r(89);
        var e = r(19)
          , n = r.n(e)
          , a = {
            mixins: [r(581).a],
            data: function() {
                return {
                    meta: null
                }
            },
            asyncData: function(t) {
                return {
                    meta: t.env.meta
                }
            },
            head: function() {
                var t, o = "works | ".concat(this.meta.title);
                return {
                    title: "works",
                    meta: [{
                        hid: "og:url",
                        property: "og:url",
                        content: n()(t = "".concat(this.meta.url.replace(/\/?$/, ""))).call(t, this.$route.fullPath)
                    }, {
                        hid: "og:title",
                        property: "og:title",
                        content: o
                    }, {
                        hid: "twitter:title",
                        name: "twitter:title",
                        content: o
                    }]
                }
            },
            beforeDestroy: function() {
                this.hideLogo()
            },
            beforeCreate: function() {
                this.$store.commit("setCurrentId", "works")
            },
            mounted: function() {
                this.$store.state.isRootLoaded && this.showLogo()
            }
        }
          , i = (r(608),
        r(17))
          , s = Object(i.a)(a, (function() {
            var t = this.$createElement
              , o = this._self._c || t;
            return o("section", {
                staticClass: "contentsRoot"
            }, [o("div", {
                staticClass: "conentsInner"
            }, [o("nuxt-child", {
                key: this.$route.path
            })], 1)])
        }
        ), [], !1, null, "1f705ee2", null);
        o.default = s.exports
    }
}]);
