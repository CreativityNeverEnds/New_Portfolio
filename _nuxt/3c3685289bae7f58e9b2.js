(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    581: function(t, o, e) {
        "use strict";
        e(236),
        e(61),
        e(74),
        e(89);
        var r = e(1)
          , n = e.n(r)
          , a = e(9)
          , i = e.n(a)
          , s = (e(39),
        e(7))
          , c = e(36)
          , l = e.n(c);
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
                                    return o.abrupt("return", new i.a((function(o, e) {
                                        var r = document.createElement("img");
                                        r.src = t,
                                        r.width > 0 ? (r = null,
                                        o()) : r.addEventListener("load", (function() {
                                            o(),
                                            r = null
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
                    this.$store.commit("setLogoTxt", "index" == this.$store.state.currentId ? "kdsuzuki" : this.$store.state.currentId)
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
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    return Object(s.a)(n.a.mark((function r() {
                        return n.a.wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return t.$nuxt.onPageLoad && t.$nuxt.onPageLoad(),
                                    t.$store.state.isRootLoaded && o && t.showLogo(),
                                    r.next = 4,
                                    t.$nextTick();
                                case 4:
                                    if (t.$store.state.isRootLoaded) {
                                        r.next = 6;
                                        break
                                    }
                                    return r.abrupt("return", new i.a(function() {
                                        var o = Object(s.a)(n.a.mark((function o(r) {
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
                                                                        r();
                                                                    case 6:
                                                                    case "end":
                                                                        return o.stop()
                                                                    }
                                                            }
                                                            ), o)
                                                        }
                                                        ))), e);
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
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )))()
                }
            }
        }
    },
    605: function(t, o, e) {
        var r = e(747);
        "string" == typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
        (0,
        e(25).default)("4cae6a40", r, !0, {
            sourceMap: !1
        })
    },
    746: function(t, o, e) {
        "use strict";
        var r = e(605);
        e.n(r).a
    },
    747: function(t, o, e) {
        (o = e(24)(!1)).push([t.i, '[data-v-b96b58ae]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-b96b58ae]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-b96b58ae{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-b96b58ae{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.contentsRoot[data-v-b96b58ae]{position:fixed;top:0;left:0;width:100%;padding:88px 16px 16px;overflow:hidden;z-index:3;height:100%!important}@media screen and (min-width:761px){.contentsRoot[data-v-b96b58ae]{padding:120px 32px 32px}}.is-displayModeFull .contentsRoot[data-v-b96b58ae]{height:100vh}.buttonWorks[data-v-b96b58ae]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:36px;display:block;padding:1em;font-size:16px;color:#0d0d0d;opacity:0;-webkit-transform:translate(-50%,20%);transform:translate(-50%,20%);-webkit-transition:color .2s linear,opacity .8s cubic-bezier(.19,1,.22,1),-webkit-transform .8s cubic-bezier(.19,1,.22,1);transition:color .2s linear,opacity .8s cubic-bezier(.19,1,.22,1),-webkit-transform .8s cubic-bezier(.19,1,.22,1);transition:color .2s linear,transform .8s cubic-bezier(.19,1,.22,1),opacity .8s cubic-bezier(.19,1,.22,1);transition:color .2s linear,transform .8s cubic-bezier(.19,1,.22,1),opacity .8s cubic-bezier(.19,1,.22,1),-webkit-transform .8s cubic-bezier(.19,1,.22,1)}.buttonWorks[data-v-b96b58ae]:after{-webkit-transition:background-color .2s linear;transition:background-color .2s linear;position:absolute;left:1em;bottom:1em;width:calc(100% - 2em);height:2px;-webkit-transition:-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),-webkit-transform .4s cubic-bezier(.19,1,.22,1);-webkit-transform:scaleX(0);transform:scaleX(0);background-color:#0d0d0d;content:""}.buttonWorks.is-loaded[data-v-b96b58ae]{opacity:1;-webkit-transform:translate(-50%);transform:translate(-50%)}@media screen and (min-width:761px){.buttonWorks[data-v-b96b58ae]{bottom:40px;font-size:16px}}.is-darkMode .buttonWorks[data-v-b96b58ae]{color:#f8f8f8}.is-darkMode .buttonWorks[data-v-b96b58ae]:after{background-color:#f8f8f8}.is-desktop .buttonWorks[data-v-b96b58ae]:hover:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.lead[data-v-b96b58ae]{line-height:1.6;font-size:16px;position:relative;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear}@media screen and (min-width:761px){.lead[data-v-b96b58ae]{font-size:20px}}', ""]),
        t.exports = o
    },
    749: function(t, o, e) {
        "use strict";
        e.r(o);
        e(73);
        var r = e(1)
          , n = e.n(r)
          , a = e(36)
          , i = e.n(a)
          , s = (e(39),
        e(7))
          , c = {
            mixins: [e(581).a],
            head: function() {
                return {
                    titleTemplate: null,
                    title: "Kenzo Suzuki - Creative Full Stack & Blockchain Developer."
                }
            },
            scrollToTop: !0,
            beforeDestroy: function() {
                this.hideLogo()
            },
            beforeCreate: function() {
                this.$store.commit("setCurrentId", "index")
            },
            created: function() {
                this.$store.commit("pushHistory", {
                    path: this.$route.path,
                    name: this.$route.name
                })
            },
            data: function() {
                return {
                    isLoaded: !1
                }
            },
            mounted: function() {
                var t = this;
                return Object(s.a)(n.a.mark((function o() {
                    var e;
                    return n.a.wrap((function(o) {
                        for (; ; )
                            switch (o.prev = o.next) {
                            case 0:
                                return o.next = 2,
                                t.$nextTick();
                            case 2:
                                return t.$nuxt.patternBg.draw(),
                                e = t.$store.state.isRootLoaded,
                                o.next = 6,
                                t.onLoad(!0);
                            case 6:
                                t.$nuxt.mainVisual.animateToTop(e),
                                i()((function() {
                                    t.isLoaded = !0
                                }
                                ), 3e3);
                            case 8:
                            case "end":
                                return o.stop()
                            }
                    }
                    ), o)
                }
                )))()
            },
            methods: {
                onMouseDown: function() {
                    this.$nuxt.mainVisual.animateInteraction(1)
                },
                onMouseUp: function() {
                    this.$nuxt.mainVisual.animateInteraction(0)
                },
                onClickButtonWorks: function() {
                    this.$router.push({
                        path: "/works"
                    })
                }
            }
        }
          , l = (e(746),
        e(17))
          , u = Object(l.a)(c, (function() {
            var t = this
              , o = t.$createElement
              , e = t._self._c || o;
            return e("section", {
                staticClass: "contentsRoot",
                on: {
                    mousedown: t.onMouseDown,
                    mouseup: t.onMouseUp,
                    touchstart: t.onMouseDown,
                    touchend: t.onMouseUp
                }
            }, [t._m(0), e("button", {
                staticClass: "buttonWorks",
                class: {
                    "is-loaded": t.isLoaded
                },
                on: {
                    mousedown: function(t) {
                        t.stopPropagation()
                    },
                    mouseup: function(t) {
                        t.stopPropagation()
                    },
                    touchstart: function(t) {
                        t.stopPropagation()
                    },
                    touchend: function(t) {
                        t.stopPropagation()
                    },
                    click: function(o) {
                        return o.stopPropagation(),
                        t.onClickButtonWorks(o)
                    }
                }
            }, [t._v("view works")])])
        }
        ), [function() {
            var t = this.$createElement
              , o = this._self._c || t;
            return o("p", {
                staticClass: "lead"
            }, [this._v("I'm a Full Stack & Blockchain Developer based in Tokyo."), o("br"), this._v("I contributed to the development of over 50 projects, ranging from large-scale applications to smaller initiatives."), o("br"), this._v("I have over 8 years of development experience, including 2 years in professional, hands-on design and more than 5 years specializing in blockchain development.")])
        }
        ], !1, null, "b96b58ae", null);
        o.default = u.exports
    }
}]);
