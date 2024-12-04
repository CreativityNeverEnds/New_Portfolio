(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    581: function(e, t, i) {
        "use strict";
        i(236),
        i(61),
        i(74),
        i(89);
        var r = i(1)
          , o = i.n(r)
          , a = i(9)
          , l = i.n(a)
          , n = (i(39),
        i(7))
          , s = i(36)
          , d = i.n(s);
        t.a = {
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
                var e = this;
                this.$store.commit("setMenuOpened", !1),
                d()((function() {
                    e.$nuxt.mainVisual && e.$nuxt.mainVisual.scroll(window.scrollY || window.pageYOffset)
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
                loadImg: function(e) {
                    return Object(n.a)(o.a.mark((function t() {
                        return o.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new l.a((function(t, i) {
                                        var r = document.createElement("img");
                                        r.src = e,
                                        r.width > 0 ? (r = null,
                                        t()) : r.addEventListener("load", (function() {
                                            t(),
                                            r = null
                                        }
                                        ), {
                                            once: !0
                                        })
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                hideLogo: function() {
                    this.$store.commit("setLogoShown", !1)
                },
                showLogo: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
                    this.clearLogoTimer(),
                    this.setLogoTxt(),
                    this.logoTimer = d()(Object(n.a)(o.a.mark((function t() {
                        return o.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    e.$store.commit("setLogoShown", !0);
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))), t)
                },
                setLogoTxt: function() {
                    this.$store.commit("setLogoTxt", "index" == this.$store.state.currentId ? "kdsuzuki" : this.$store.state.currentId)
                },
                clearLogoTimer: function() {
                    this.logoTimer && clearTimeout(this.logoTimer)
                },
                getBackgroundImg: function(e) {
                    var t = window.getComputedStyle(e).backgroundImage.replace(/^url\(['"]?([^'"]*)['"]?\)$/, "$1");
                    return t = t.replace(new RegExp("^https?://" + window.location.host + "(.*)"), "$1")
                },
                onLoad: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    return Object(n.a)(o.a.mark((function r() {
                        return o.a.wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    return e.$nuxt.onPageLoad && e.$nuxt.onPageLoad(),
                                    e.$store.state.isRootLoaded && t && e.showLogo(),
                                    r.next = 4,
                                    e.$nextTick();
                                case 4:
                                    if (e.$store.state.isRootLoaded) {
                                        r.next = 6;
                                        break
                                    }
                                    return r.abrupt("return", new l.a(function() {
                                        var t = Object(n.a)(o.a.mark((function t(r) {
                                            return o.a.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        d()(Object(n.a)(o.a.mark((function t() {
                                                            return o.a.wrap((function(t) {
                                                                for (; ; )
                                                                    switch (t.prev = t.next) {
                                                                    case 0:
                                                                        return e.setLogoTxt(),
                                                                        e.$nuxt.patternBg.init(),
                                                                        t.next = 4,
                                                                        e.$nuxt.mainVisual.start();
                                                                    case 4:
                                                                        e.$store.commit("setRootLoaded", !0),
                                                                        r();
                                                                    case 6:
                                                                    case "end":
                                                                        return t.stop()
                                                                    }
                                                            }
                                                            ), t)
                                                        }
                                                        ))), i);
                                                    case 1:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(e) {
                                            return t.apply(this, arguments)
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
    582: function(e, t, i) {
        var r = i(591);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        i(25).default)("a59c7dd8", r, !0, {
            sourceMap: !1
        })
    },
    583: function(e, t, i) {
        "use strict";
        var r = i(1)
          , o = i.n(r)
          , a = i(9)
          , l = i.n(a)
          , n = (i(39),
        i(7));
        t.a = function() {
            var e = Object(n.a)(o.a.mark((function e(t) {
                var i, r = arguments;
                return o.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return i = r.length > 1 && void 0 !== r[1] ? r[1] : null,
                            e.abrupt("return", new l.a((function(e) {
                                if (i || ((i = new Image).src = t),
                                i.naturalWidth)
                                    return e({
                                        x: i.naturalWidth,
                                        y: i.naturalHeight
                                    });
                                i.addEventListener("load", (function t(r) {
                                    i.removeEventListener("load", t),
                                    e({
                                        x: i.naturalWidth,
                                        y: i.naturalHeight
                                    })
                                }
                                ), {
                                    once: !0
                                })
                            }
                            )));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
    },
    586: function(e, t, i) {
        "use strict";
        var r = i(1)
          , o = i.n(r)
          , a = i(18)
          , l = i.n(a)
          , n = (i(39),
        i(7))
          , s = i(583)
          , d = {
            props: {
                src: String,
                defaultResolution: Object,
                isSquare: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                sizerStyleObj: function() {
                    return this.isSquare ? {
                        "padding-top": "100%"
                    } : {
                        "padding-top": "".concat(this.resolution.y / this.resolution.x * 100, "%")
                    }
                },
                resolution: function() {
                    return this.isSquare ? {
                        x: 1,
                        y: 1
                    } : this.imgResolution || this.defaultResolution
                }
            },
            data: function() {
                return {
                    imgResolution: null,
                    isLoaded: !1,
                    imgSrc: ""
                }
            },
            beforeDestroy: function() {
                delete this.$el.onIntersect,
                this.$nuxt.lazyLoadObserver.unobserve(this.$el)
            },
            mounted: function() {
                var e = this;
                return Object(n.a)(o.a.mark((function t() {
                    var i;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                e.$nextTick();
                            case 2:
                                window.IntersectionObserver ? (e.$nuxt.lazyLoadObserver.observe(e.$el),
                                e.$el.onIntersect = l()(i = e.onIntersect).call(i, e)) : e.loadImg();
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            methods: {
                loadImg: function() {
                    var e = this;
                    return Object(n.a)(o.a.mark((function t() {
                        return o.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return e.imgSrc = e.src,
                                    t.next = 3,
                                    e.$nextTick();
                                case 3:
                                    return t.next = 5,
                                    Object(s.a)(e.src, e.$refs.img);
                                case 5:
                                    e.imgResolution = t.sent,
                                    e.isLoaded = !0;
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onIntersect: function() {
                    var e = this;
                    return Object(n.a)(o.a.mark((function t() {
                        return o.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    e.loadImg(),
                                    e.$nuxt.lazyLoadObserver.unobserve(e.$el);
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            }
        }
          , c = (i(590),
        i(17))
          , g = Object(c.a)(d, (function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "img",
                class: {
                    "is-loaded": this.isLoaded
                }
            }, [t("div", {
                staticClass: "img__sizer",
                style: this.sizerStyleObj
            }), t("img", {
                ref: "img",
                attrs: {
                    src: this.imgSrc,
                    alt: "",
                    decoding: "async"
                }
            })])
        }
        ), [], !1, null, "d01200de", null);
        t.a = g.exports
    },
    589: function(e, t, i) {
        "use strict";
        i(61),
        i(102);
        var r = i(19)
          , o = i.n(r)
          , a = i(3)
          , l = i.n(a)
          , n = i(1)
          , s = i.n(n)
          , d = (i(39),
        i(7))
          , c = i(583);
        t.a = {
            data: function() {
                return {
                    date: ""
                }
            },
            mounted: function() {
                var e = this;
                return Object(d.a)(s.a.mark((function t() {
                    return s.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e.date = e.worksData.date.split(" ")[0];
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            computed: {
                isFlippedColor: function() {
                    return this.$store.state.isDarkMode && this.worksData.flipColorWhenDarkMode
                },
                classObj: function() {
                    var e = {};
                    return e["item-".concat(this.worksData.pageId)] = !0,
                    e["is-flippedColor"] = this.isFlippedColor,
                    e
                },
                styleObj: function() {
                    if (!this.worksData.colors)
                        return null;
                    var e = {
                        "--color1": this.worksData.colors[0],
                        "--color2": this.worksData.colors[1]
                    };
                    return this.isFlippedColor && (e["--color1"] = this.worksData.colors[1],
                    e["--color2"] = this.worksData.colors[0]),
                    e
                }
            },
            methods: {
                loadImg: function(e, t) {
                    return Object(d.a)(s.a.mark((function i() {
                        return s.a.wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    return i.abrupt("return", Object(c.a)(e, t));
                                case 1:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i)
                    }
                    )))()
                },
                getTaggedTitle: function(e) {
                    var t = [];
                    if (l()(e).call(e, "_") >= 0) {
                        var i, r = e.split("_");
                        t = o()(i = r[0].split(" ")).call(i, "<br>", r[1].split(" "))
                    } else
                        t = e.split(" ");
                    for (var a, n = "", s = 0, d = t.length; s < d; s++)
                        n += "<br>" == (a = t[s]) ? a : '<span class="inner">'.concat(a, "</span>");
                    return n
                }
            }
        }
    },
    590: function(e, t, i) {
        "use strict";
        var r = i(582);
        i.n(r).a
    },
    591: function(e, t, i) {
        (t = i(24)(!1)).push([e.i, '[data-v-d01200de]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-d01200de]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-d01200de{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-d01200de{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.img[data-v-d01200de]{position:relative;width:100%;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;border:2px solid #0d0d0d;border-color:var(--color1);background-color:#0d0d0d;background-color:var(--color1);-webkit-transition:background-color .2s linear,border-color .2s linear;transition:background-color .2s linear,border-color .2s linear}.img[data-v-d01200de]:after{width:48px;height:2px;background-color:#f8f8f8;bottom:0;right:0;margin:auto;-webkit-transition:opacity .1s linear,visibility .1s linear;transition:opacity .1s linear,visibility .1s linear;-webkit-animation:loadingAnim-data-v-d01200de 1s cubic-bezier(.645,.045,.355,1) infinite!important;animation:loadingAnim-data-v-d01200de 1s cubic-bezier(.645,.045,.355,1) infinite!important;content:""}.img[data-v-d01200de]:after,.img img[data-v-d01200de]{position:absolute;top:0;left:0}.img img[data-v-d01200de]{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-transition:opacity .2s linear,-webkit-transform 4s cubic-bezier(.19,1,.22,1);transition:opacity .2s linear,-webkit-transform 4s cubic-bezier(.19,1,.22,1);transition:opacity .2s linear,transform 4s cubic-bezier(.19,1,.22,1);transition:opacity .2s linear,transform 4s cubic-bezier(.19,1,.22,1),-webkit-transform 4s cubic-bezier(.19,1,.22,1);z-index:2;opacity:0}.img.is-loaded img[data-v-d01200de]{opacity:1}.img.is-loaded[data-v-d01200de]:after{visibility:hidden;opacity:0}.img__sizer[data-v-d01200de]{content:"";width:100%;will-change:padding-top;-webkit-transition:padding-top .2s cubic-bezier(.19,1,.22,1);transition:padding-top .2s cubic-bezier(.19,1,.22,1)}', ""]),
        e.exports = t
    },
    598: function(e, t, i) {
        var r = i(673);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        i(25).default)("e9a14216", r, !0, {
            sourceMap: !1
        })
    },
    599: function(e, t, i) {
        var r = i(675);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        i(25).default)("8108ea9c", r, !0, {
            sourceMap: !1
        })
    },
    600: function(e, t, i) {
        var r = i(677);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        i(25).default)("a00c6bce", r, !0, {
            sourceMap: !1
        })
    },
    601: function(e, t, i) {
        var r = i(679);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        i(25).default)("f07157c0", r, !0, {
            sourceMap: !1
        })
    },
    602: function(e, t, i) {
        var r = i(681);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        i(25).default)("5a153fa4", r, !0, {
            sourceMap: !1
        })
    },
    603: function(e, t, i) {
        var r = i(743);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        i(25).default)("25932c58", r, !0, {
            sourceMap: !1
        })
    },
    604: function(e, t, i) {
        var r = i(745);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        (0,
        i(25).default)("51c8b1af", r, !0, {
            sourceMap: !1
        })
    },
    672: function(e, t, i) {
        "use strict";
        var r = i(598);
        i.n(r).a
    },
    673: function(e, t, i) {
        (t = i(24)(!1)).push([e.i, "[data-v-29213626]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-29213626]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-29213626{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-29213626{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.txtLines[data-v-29213626]{margin-top:16px;position:relative;padding:16px;background-color:hsla(0,0%,97.3%,.9);border:2px solid #0d0d0d;border-color:var(--color1);-webkit-transition:color .2s linear,background-color .2s linear,border-color .2s linear;transition:color .2s linear,background-color .2s linear,border-color .2s linear}@media screen and (min-width:761px){.txtLines[data-v-29213626]{margin-top:32px;padding:32px}}.is-darkMode .txtLines[data-v-29213626]{background-color:rgba(13,13,13,.8)}.txt[data-v-29213626]{margin-top:16px;font-size:12px;line-height:1.8;text-align:justify;text-justify:inter-ideograph;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear,background-color .2s linear;transition:color .2s linear,background-color .2s linear}.txt[data-v-29213626]:first-child{margin-top:0}@media screen and (min-width:761px){.txt[data-v-29213626]{margin-top:32px;font-size:14px;max-width:640px;margin-left:auto;margin-right:auto}}", ""]),
        e.exports = t
    },
    674: function(e, t, i) {
        "use strict";
        var r = i(599);
        i.n(r).a
    },
    675: function(e, t, i) {
        (t = i(24)(!1)).push([e.i, ":root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.txtLines .txt a{color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear,opacity .1s linear;transition:color .2s linear,opacity .1s linear;text-decoration:underline}.is-desktop .txtLines .txt a:hover{opacity:.6}", ""]),
        e.exports = t
    },
    676: function(e, t, i) {
        "use strict";
        var r = i(600);
        i.n(r).a
    },
    677: function(e, t, i) {
        (t = i(24)(!1)).push([e.i, '[data-v-6b32ff6b]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-6b32ff6b]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-6b32ff6b{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-6b32ff6b{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.videoContainer[data-v-6b32ff6b]{position:relative;margin-top:16px}@media screen and (min-width:761px){.videoContainer[data-v-6b32ff6b]{margin-top:32px}}.videoContainer__inner[data-v-6b32ff6b]{position:relative;border:2px solid #0d0d0d;border-color:var(--color1);background-color:#0d0d0d;background-color:var(--color1);-webkit-transition:background-color .2s linear,border-color .2s linear;transition:background-color .2s linear,border-color .2s linear}.videoContainer__inner[data-v-6b32ff6b]:before{width:48px;height:2px;background-color:#f8f8f8;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:opacity .1s linear,visibility .1s linear;transition:opacity .1s linear,visibility .1s linear;-webkit-animation:loadingAnim-data-v-6b32ff6b 1s cubic-bezier(.645,.045,.355,1) infinite!important;animation:loadingAnim-data-v-6b32ff6b 1s cubic-bezier(.645,.045,.355,1) infinite!important;z-index:3;content:""}.videoContainer__caption[data-v-6b32ff6b]{font-size:12px;margin-top:8px;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear;line-height:1.6}@media screen and (min-width:761px){.videoContainer__caption[data-v-6b32ff6b]{margin-top:16px;font-size:14px}}.videoContainer__thumb[data-v-6b32ff6b]{z-index:2}.videoContainer__iframe[data-v-6b32ff6b]{z-index:5}.videoContainer__iframe[data-v-6b32ff6b],.videoContainer__thumb[data-v-6b32ff6b]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box}.videoContainer__thumb img[data-v-6b32ff6b]{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.videoContainer__iframe iframe[data-v-6b32ff6b],.videoContainer__thumb img[data-v-6b32ff6b]{position:absolute;height:100%;-webkit-transition:opacity .2s linear;transition:opacity .2s linear;z-index:2;opacity:0}.videoContainer__iframe iframe[data-v-6b32ff6b]{left:0;top:0;width:100%}.is-thumbLoaded .videoContainer__thumb img[data-v-6b32ff6b]{opacity:1}.is-thumbLoaded .videoContainer__thumb[data-v-6b32ff6b]:before{visibility:hidden;opacity:0}.is-videoLoaded .videoContainer__iframe iframe[data-v-6b32ff6b]{opacity:1}.is-videoLoaded .videoContainer__iframe[data-v-6b32ff6b]:before{visibility:hidden;opacity:0}.is-videoUnavailabel .videoContainer__inner[data-v-6b32ff6b]:before{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;-webkit-animation:none!important;animation:none!important;width:100%!important;height:auto!important;text-align:center;padding:10px;right:auto;bottom:auto;color:red!important;content:"this video is currently unavailable"!important;background-color:hsla(0,0%,97.3%,.8)!important;white-space:nowrap}.videoContainer__sizer[data-v-6b32ff6b]{width:100%;display:block}', ""]),
        e.exports = t
    },
    678: function(e, t, i) {
        "use strict";
        var r = i(601);
        i.n(r).a
    },
    679: function(e, t, i) {
        (t = i(24)(!1)).push([e.i, ":root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.videoContainer__iframe iframe{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transition:opacity .2s linear;transition:opacity .2s linear;z-index:2;opacity:0}.is-videoLoaded .videoContainer__iframe iframe{opacity:1}.is-videoLoaded .videoContainer__iframe iframe:before{visibility:hidden;opacity:0}", ""]),
        e.exports = t
    },
    680: function(e, t, i) {
        "use strict";
        var r = i(602);
        i.n(r).a
    },
    681: function(e, t, i) {
        (t = i(24)(!1)).push([e.i, "[data-v-4d657660]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-4d657660]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-4d657660{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-4d657660{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@media screen and (min-width:761px){.imgsContainer.is-group[data-v-4d657660]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.imgsContainer.is-group .img[data-v-4d657660]{width:calc((100% - 64px)/3)}}", ""]),
        e.exports = t
    },
    682: function(e, t, i) {
        var r = {
            "./5sports.json": 683,
            "./aimessenger.json": 684,
            "./albero.json": 685,
            "./anotherworld.json": 686,
            "./beyondthecity.json": 687,
            "./bold.json": 688,
            "./ccc_recruiting_2021.json": 689,
            "./cda.json": 690,
            "./codezero.json": 691,
            "./conmoto.json": 692,
            "./decoghana.json": 693,
            "./dmagazine.json": 694,
            "./eolia.json": 695,
            "./eren.json": 696,
            "./feswatch.json": 697,
            "./georgia2023.json": 698,
            "./gradationinc.json": 699,
            "./ha-labo.json": 700,
            "./hamidashi.json": 701,
            "./himawarilife.json": 702,
            "./hny2017.json": 703,
            "./hny2018.json": 704,
            "./hny2019.json": 705,
            "./hny2020.json": 706,
            "./hny2021.json": 707,
            "./hny2022.json": 708,
            "./hny2023.json": 709,
            "./ichikami.json": 710,
            "./jfoodo.json": 711,
            "./jujutsukaisen_dolcegabbana.json": 712,
            "./kazukinoda.json": 713,
            "./kumaleon.json": 714,
            "./lanway.json": 715,
            "./laseek.json": 716,
            "./maro.json": 717,
            "./maro2.json": 718,
            "./mugen-frontier.json": 719,
            "./office12.json": 720,
            "./pilkul.json": 721,
            "./presage.json": 722,
            "./recruit_jinji.json": 723,
            "./republic.json": 724,
            "./responsive-samples.json": 725,
            "./roov.json": 726,
            "./ryoteikirin.json": 727,
            "./saihouji.json": 728,
            "./sega60th.json": 729,
            "./sofirah.json": 730,
            "./takehanake.json": 731,
            "./thankyouTwitter1k.json": 732,
            "./tkmh.json": 733,
            "./ttglobal.json": 734,
            "./unshift.json": 735,
            "./unshift0.json": 736,
            "./ut_recruiting_2019.json": 737,
            "./visionary-arts.json": 738,
            "./wedcamp.json": 739,
            "./yasashiikirikata.json": 740,
            "./yosukekoyachi.json": 741
        };
        function o(e) {
            var t = a(e);
            return i(t)
        }
        function a(e) {
            if (!i.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return r[e]
        }
        o.keys = function() {
            return Object.keys(r)
        }
        ,
        o.resolve = a,
        e.exports = o,
        o.id = 682
    },
    683: function(e) {
        e.exports = JSON.parse('{"id":"l64c2SsrifpwkHFCvxoc","pageId":"5sports","title":"CUSTOM WATCH BEATMAKER","title2":"SEIKO 5 Sports","titleJp":"","mainImg":"/img/works/5sports/main.jpg","isAvailable":true,"url":"https://seiko5sportsbeatmaker.com/","urlButtonLabel":"","date":"2020.10.19 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"dvBnvq8o8WL2rH43ADYk","key":"reactjs","label":"React.js"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#be0203","#000000"],"pointerColor":"#be0203","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"V-gLIxJaCdA","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/5sports/video0.jpg","order":0},{"type":"video","videoId":"JuKE0aR-ajQ","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":554},"thumb":"/img/works/5sports/video1.jpg","order":1}]}')
    },
    684: function(e) {
        e.exports = JSON.parse('{"id":"guxTiDOSs1Hxwp5548uY","pageId":"aimessenger","title":"AI Messenger","title2":"brand site","titleJp":"AIメッセンジャー ブランドサイト","mainImg":"/img/works/aimessenger/main.png","isAvailable":true,"url":"https://www.ai-messenger.jp/","urlButtonLabel":"","date":"2016.10.24 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"8Y1vqJFvQjOpCCLR6thX","key":"jquery","label":"jQuery"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#003388","#ffffff"],"flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"DQ-JyBb9n_s","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/aimessenger/video0.png","order":0},{"type":"images","items":[{"filePath":"/img/works/aimessenger/0.png","order":0,"type":"image"},{"filePath":"/img/works/aimessenger/1.png","order":1,"type":"image"},{"filePath":"/img/works/aimessenger/2.png","order":2,"type":"image"}],"isGroup":false,"order":1},{"type":"images","items":[{"filePath":"/img/works/aimessenger/3.png","order":0,"type":"image"},{"filePath":"/img/works/aimessenger/4.png","order":1,"type":"image"},{"filePath":"/img/works/aimessenger/5.png","order":2,"type":"image"}],"isGroup":true,"order":2}]}')
    },
    685: function(e) {
        e.exports = JSON.parse('{"id":"4T5pw6GJZvK9R6GRI0di","pageId":"albero","title":"Office albero","title2":"","titleJp":"食の工房オフィス アルベロ (イタリア＆郷土料理教室)","mainImg":"/img/works/albero/main.jpg","isAvailable":true,"url":"https://albero-cooking.com/","urlButtonLabel":"","date":"2019.08.14 12:00:00+09:00","role":[{"id":"TjFkHaIxxextkAFhyJhC","key":"back-end","label":"Back-end"},{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"wMUMJTfZEsHJtKDevg6F","key":"direction","label":"Direction"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"},{"id":"CcrGQq4qbOa40PMcU2i2","key":"technicalDirection","label":"Technical direction"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"dHMJpMCYCHjrEQnINTEF","key":"firebase","label":"Firebase"},{"id":"pdFcNmONMRbPacM61aYf","key":"flamelink","label":"Flamelink"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"eL3tuFsXK5GVK96H2Nxb","key":"nodejs","label":"Node.js"},{"id":"72OxaxflwSi7RQG0QZg9","key":"nuxtjs","label":"Nuxt.js"}],"colors":["#0856a5","#82cddc","#ffffff"],"flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"i1Pf3iZIwBw","caption":"* This is a screen recording of the desktop layout","resolution":{"x":1280,"y":720},"thumb":"/img/works/albero/video0.png","order":0},{"type":"video","videoId":"rRMEKpu9ehQ","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1106},"thumb":"/img/works/albero/video1.png","order":1}]}')
    },
    686: function(e) {
        e.exports = JSON.parse('{"id":"dRl28Dmb2mpWTnnJl5Yl","pageId":"anotherworld","title":"ANOTHER WORLD","title2":"special site","titleJp":"映画「HELLO WORLD」スピンオフアニメ『ANOTHER WOLRD』","mainImg":"/img/works/anotherworld/main.jpg","isAvailable":true,"url":"https://www.hikaritv.net/sp/another-world/","urlButtonLabel":"","date":"2019.09.30 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#c4c7a9","#5f6264","#ffffff"],"pointerColor":"","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"c_ZktLh31UA","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":1120},"thumb":"/img/works/anotherworld/video0.jpg","order":0},{"type":"video","videoId":"imYk0um6zaM","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1100},"thumb":"/img/works/anotherworld/video1.jpg","order":1}]}')
    },
    687: function(e) {
        e.exports = JSON.parse('{"id":"Z7fwZCXiPtI3B6WMsyuv","pageId":"beyondthecity","title":"Beyond The City","title2":"","titleJp":"","mainImg":"/img/works/beyondthecity/main.jpg","isAvailable":true,"url":"https://www.beyondthecity.jp/","urlButtonLabel":"","date":"2020.02.05 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"72OxaxflwSi7RQG0QZg9","key":"nuxtjs","label":"Nuxt.js"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#000000","#ffffff"],"pointerColor":"#ffffff","flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"XyALKlGqlPA","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/beyondthecity/video0.jpg","order":0},{"type":"video","videoId":"17VkqRrCA9I","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1118},"thumb":"/img/works/beyondthecity/video1.jpg","order":1}]}')
    },
    688: function(e) {
        e.exports = JSON.parse('{"id":"eLRFM5F6ArID2y3iRgT4","pageId":"bold","title":"BOLD Inc.","title2":"","titleJp":"株式会社BOLD","mainImg":"/img/works/bold/main.jpg","isAvailable":true,"url":"https://bold-inc.world/","urlButtonLabel":"","date":"2019.12.06 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"}],"colors":["#141419","#f1f0ee"],"pointerColor":"#141419","flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"CzCiejVViIc","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":16,"y":9},"thumb":"/img/works/bold/video0.jpg","order":0},{"type":"video","videoId":"wBC4UMaDVZ0","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":650,"y":1106},"thumb":"/img/works/bold/video1.jpg","order":1}]}')
    },
    689: function(e) {
        e.exports = JSON.parse('{"id":"rdVSRrILFCU42u1hVYtC","pageId":"ccc_recruiting_2021","title":"CCC RECRUITING 2021","title2":"","titleJp":"CCC 2019年新卒採用情報サイト","mainImg":"/img/works/ccc_recruiting_2021/main.png","isAvailable":true,"url":"https://www.ccc.co.jp/recruit/newgraduates/","urlButtonLabel":"","date":"2019.10.15 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#69c3e8","#ffffff"],"pointerColor":"#ffffff","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"9HYkwRc5ISs","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/ccc_recruiting_2021/video0.jpg","order":0},{"type":"video","videoId":"NuWJ6FhTACc","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1104},"thumb":"/img/works/ccc_recruiting_2021/video1.jpg","order":1}]}')
    },
    690: function(e) {
        e.exports = JSON.parse('{"id":"6dUgY1NakQg6GuQNL8wo","pageId":"cda","title":"CONCENT_DESIGN AWARD","title2":"","titleJp":"","mainImg":"/img/works/cda/main.png","isAvailable":false,"url":"","urlButtonLabel":"","date":"2018.04.05 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#fe7373","#ffffff"],"pointerColor":"#000000","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"muO3TXYKSDU","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/cda/video0.png","order":0},{"type":"text","text":"以前務めていた株式会社コンセントよりご依頼いただき、「CONCENT DESIGN AWARD」という社内イベントの特設サイト(社内限定公開)を制作いたしました。\\n(※実績掲載許可は頂いております。)\\n\\nこのイベントは、会社の行動指針をベースとした10個の部門を設け、この1年を通じてそれぞれの部門に一番ふさわしいと思った人に対して社員のみなさんがそれぞれメッセージを贈る、というものです。\\n\\nメッセージカードは実際に紙で制作したものが社員のみなさんに配布され、投票・集計された結果1000枚以上のメッセージが集まったそうです。\\n\\nトップページではその1000枚以上のカードを実際に投票された数でビジュアライズしています。カードは各部門ごとに色が異なります。\\n\\nまた、プライバシー保護の観点からキャプチャからは割愛しましたが、それぞれのメッセージカードを見る「message」ページも用意してあります。\\n\\nmessageページではスキャンした手書きのメッセージカードがそのまま閲覧できるようになっています。\\n\\n随分前に退職した身ではありますが、このような素敵なイベントに携われたことを嬉しく思います。","order":1}]}')
    },
    691: function(e) {
        e.exports = JSON.parse('{"id":"WnMTvW8vuhVlIbBf0iqY","pageId":"codezero","title":"CODE ZERO: PREMIERE","title2":"","titleJp":"人工知能少女育成プロジェクト","mainImg":"/img/works/codezero/main.png","isAvailable":false,"url":"http://premiere.sao-game.jp/","urlButtonLabel":"","date":"2016.12.08 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"8Y1vqJFvQjOpCCLR6thX","key":"jquery","label":"jQuery"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#3d4768","#59b8b4","#f7f9f9"],"pointerColor":"#3d4768","flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"R6MidYR3AKo","caption":"* This is a screen recording of the mobile layout. (This site is for only mobile device.)","resolution":{"x":750,"y":1100},"thumb":"/img/works/codezero/video0.png","order":0},{"type":"images","items":[{"filePath":"/img/works/codezero/0.png","order":0,"type":"image"},{"filePath":"/img/works/codezero/1.png","order":1,"type":"image"},{"filePath":"/img/works/codezero/2.png","order":2,"type":"image"}],"isGroup":true,"order":1},{"type":"images","items":[{"filePath":"/img/works/codezero/3.png","order":0,"type":"image"},{"filePath":"/img/works/codezero/4.png","order":1,"type":"image"},{"filePath":"/img/works/codezero/5.png","order":2,"type":"image"}],"isGroup":true,"order":2},{"type":"images","items":[{"filePath":"/img/works/codezero/6.png","order":0,"type":"image"},{"filePath":"/img/works/codezero/7.png","order":1,"type":"image"},{"filePath":"/img/works/codezero/8.png","order":2,"type":"image"}],"isGroup":true,"order":3},{"type":"images","items":[{"filePath":"/img/works/codezero/9.png","order":0,"type":"image"},{"filePath":"/img/works/codezero/10.png","order":1,"type":"image"},{"filePath":"/img/works/codezero/11.png","order":2,"type":"image"}],"isGroup":true,"order":4}]}')
    },
    692: function(e) {
        e.exports = JSON.parse('{"id":"VS2A85bNAT9ZwhTmirrv","pageId":"conmoto","title":"Con moto","title2":"logo design","titleJp":"","mainImg":"/img/works/conmoto/main.jpg","isAvailable":false,"url":"","urlButtonLabel":"","date":"2019.04.01 12:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"}],"category":[{"id":"IeCmGy0Pjbj9E2FItSY4","key":"ci_vi","label":"CI / VI"}],"tag":[{"id":"SRFlhKJEGi9FZGjFKaH3","key":"logo","label":"Logo"}],"colors":["#bbce1a","#2b4200","#ffffff"],"pointerColor":"#000000","flipColorWhenDarkMode":false,"contents":[{"type":"text","text":"This is a logo for \\"con moto\\" that is Takuya Tomita\'s business name as an olive oil fitter.\\n\\nTwitter: <a href=\\"https://twitter.com/conmoto1984\\" target=\\"_blank\\">@conmoto1984</a>\\nFacebook page: <a href=\\"https://www.facebook.com/con.moto1984\\" target=\\"_blank\\">con.moto1984</a>\\nnote: <a href=\\"https://note.mu/con_moto\\" target=\\"_blank\\">https://note.mu/con_moto</a>","order":0},{"type":"images","items":[{"filePath":"/img/works/conmoto/0.png","order":0,"type":"image"},{"filePath":"/img/works/conmoto/1.png","order":1,"type":"image"},{"filePath":"/img/works/conmoto/2.png","order":2,"type":"image"}],"isGroup":true,"order":1},{"type":"images","items":[{"filePath":"/img/works/conmoto/3.png","order":0,"type":"image"},{"filePath":"/img/works/conmoto/4.png","order":1,"type":"image"},{"filePath":"/img/works/conmoto/5.png","order":2,"type":"image"}],"isGroup":true,"order":2}]}')
    },
    693: function(e) {
        e.exports = JSON.parse('{"id":"nx0vcZ99jCxH5XrN1sIq","pageId":"decoghana","title":"Deco Ghana Movie","title2":"by LOTTE","titleJp":"デコガーナムービー | ガーナ","mainImg":"/img/works/decoghana/main.png","isAvailable":false,"url":"http://lotte-decoghana.jp/","urlButtonLabel":"","date":"2017.05.15 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#cd0011","#f09091","#deb34b"],"flipColorWhenDarkMode":false,"contents":[{"type":"text","text":"more info:\\n<a href=\\"https://www.epoch-inc.jp/works/deco-ghanamovie/\\" target=\\"_blank\\">https://www.epoch-inc.jp/works/deco-ghanamovie/</a>","order":0},{"type":"images","items":[{"filePath":"/img/works/decoghana/0.jpg","order":0,"type":"image"},{"filePath":"/img/works/decoghana/1.jpg","order":1,"type":"image"},{"filePath":"/img/works/decoghana/2.jpg","order":2,"type":"image"},{"filePath":"/img/works/decoghana/3.jpg","order":3,"type":"image"},{"filePath":"/img/works/decoghana/4.jpg","order":4,"type":"image"},{"filePath":"/img/works/decoghana/5.jpg","order":5,"type":"image"},{"filePath":"/img/works/decoghana/6.jpg","order":6,"type":"image"},{"filePath":"/img/works/decoghana/7.jpg","order":7,"type":"image"},{"filePath":"/img/works/decoghana/8.jpg","order":8,"type":"image"},{"filePath":"/img/works/decoghana/9.jpg","order":9,"type":"image"},{"filePath":"/img/works/decoghana/10.jpg","order":10,"type":"image"},{"filePath":"/img/works/decoghana/11.jpg","order":11,"type":"image"},{"filePath":"/img/works/decoghana/12.jpg","order":12,"type":"image"}],"isGroup":false,"order":1}]}')
    },
    694: function(e) {
        e.exports = JSON.parse('{"id":"0ybpEcao8M9lu2hBX7fa","pageId":"dmagazine","title":"The World\'s Thickest_Magazine","title2":"by d magazine","titleJp":"世界一分厚い雑紙 by dマガジン","mainImg":"/img/works/dmagazine/main.jpg","isAvailable":false,"url":"","urlButtonLabel":"","date":"2018.03.20 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"gi8ovLX7QN8fRdqlIsPY","key":"digitalSingage","label":"Digital singage"}],"tag":[{"id":"fzQte4K2sGKhsYNqzipR","key":"csharp","label":"C#"},{"id":"PXxIKrY4SufCVXmHQKk9","key":"unity","label":"Unity"}],"colors":["#009241","#6eb482","#ffffff"],"flipColorWhenDarkMode":false,"contents":[{"type":"images","items":[{"filePath":"/img/works/dmagazine/0.jpg","order":0,"type":"image"},{"filePath":"/img/works/dmagazine/1.jpg","order":1,"type":"image"}],"isGroup":false,"order":0},{"type":"video","videoId":"FsRCadNZpzg","caption":"* This is a screen recording of the demo play.","resolution":{"x":1280,"y":720},"thumb":"/img/works/dmagazine/video0.jpg","order":1}]}')
    },
    695: function(e) {
        e.exports = JSON.parse('{"id":"CYqXi2qPmZIYVeJFnFV9","pageId":"eolia","title":"Air Condition Map","title2":"by Panasonic Eolia","titleJp":"エアコンディションマップ Panasonic","mainImg":"/img/works/eolia/main.jpg","isAvailable":true,"url":"https://air-map.panasonic.jp/","urlButtonLabel":"","date":"2018.10.01 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"YnxiYn5lvRwZIGhv40Wv","key":"googlemapsapi","label":"Google Maps API"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"}],"colors":["#7bbadd","#5be3cf","#ffffff"],"flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"4OQme56jPqU","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/eolia/video0.png","order":0},{"type":"video","videoId":"CyJRDN1uaw4","caption":"* This is a screen recording of the moble layout.","resolution":{"x":750,"y":1112},"thumb":"/img/works/eolia/video1.png","order":1}]}')
    },
    696: function(e) {
        e.exports = JSON.parse('{"id":"4JcRKy9vo4cjJumC19Zk","pageId":"eren","title":"Asahi Shimbun ×_Eren the Southpaw Project","title2":"","titleJp":"朝日新聞社 × 左ききのエレンプロジェクト","mainImg":"/img/works/eren/main.jpg","isAvailable":true,"url":"https://www.asahi.com/ads/hidari-kikino-eren/","urlButtonLabel":"","date":"2019.10.20 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#e50013","#deff00","#000"],"pointerColor":"#e50013","flipColorWhenDarkMode":false,"contents":[{"type":"text","text":"more info:\\n<a href=\\"https://www.aid-dcc.com/works/asahi-eren/\\" target=\\"_blank\\">https://www.aid-dcc.com/works/asahi-eren/</a>","order":0},{"type":"video","videoId":"1QZ-BSLFJx8","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/eren/video0.jpg","order":1},{"type":"video","videoId":"TwZ1R2aF1go","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1100},"thumb":"/img/works/eren/video1.jpg","order":2}]}')
    },
    697: function(e) {
        e.exports = JSON.parse('{"id":"bVLlZ5JE52jbIqt3iwCl","pageId":"feswatch","title":"Sony’s FES Watch U_Creative Festival","title2":"","titleJp":"","mainImg":"/img/works/feswatch/main.jpg","isAvailable":true,"url":"https://fashion-entertainments.com/fes-watch-u/creativefestival2018/","urlButtonLabel":"view detail","date":"2018.10.17 12:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"}],"category":[{"id":"BfSyhIDnPuynZ33IY8hh","key":"others","label":"Others"}],"tag":[{"id":"6NYhvvjvN87xyJSZzJae","key":"creativecoding","label":"Creative coding"},{"id":"8R6R1iZfI81UIrJVQQF0","key":"generativeart","label":"Generative art"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"}],"colors":["#000000","#ffffff"],"pointerColor":"#000000","flipColorWhenDarkMode":true,"contents":[{"type":"text","text":"These patters were generated by JavaScript.\\n\\nmy note article (written in Japanese)\\n<a href=\\"https://note.unshift.jp/n/n3c40c6fe4799\\" target=\\"_blank\\">https://note.unshift.jp/n/n3c40c6fe4799</a>","order":0},{"type":"images","items":[{"filePath":"/img/works/feswatch/0.png","order":0,"type":"image"},{"filePath":"/img/works/feswatch/1.png","order":1,"type":"image"},{"filePath":"/img/works/feswatch/2.png","order":2,"type":"image"},{"filePath":"/img/works/feswatch/3.png","order":3,"type":"image"}],"isGroup":false,"order":1}]}')
    },
    698: function(e) {
        e.exports = JSON.parse('{"id":"qci5iiVPkjRrDeJGvQ4V","pageId":"georgia2023","title":"MAIDRA-BU AI Illsut Maker","title2":"Georgia","titleJp":"ジョージア「毎ドラ部 AIイラストメーカー」","mainImg":"/img/works/georgia2023/main.png","isAvailable":true,"url":"https://mydrabu.georgia.jp/illust","urlButtonLabel":"","date":"2023.06.08 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#ffc93f","#3366ff"],"pointerColor":"#ffffff","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"Z4Z4MiwFqvA","resolution":{"x":1680,"y":944},"thumb":"/img/works/georgia2023/video0.png","order":0}]}')
    },
    699: function(e) {
        e.exports = JSON.parse('{"id":"pdx3PUepEgieQbr4Tj7H","pageId":"gradationinc","title":"gradation, Inc.","title2":"","titleJp":"","mainImg":"/img/works/gradationinc/main.png","isAvailable":true,"url":"https://www.gradation.site/","urlButtonLabel":"","date":"2022.04.26 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#5de091","#e9b3e5","#e1e1e1"],"pointerColor":"#5de091","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"-au7HiuN8zY","resolution":{"x":1680,"y":945},"thumb":"/img/works/gradationinc/video0.png","order":0}]}')
    },
    700: function(e) {
        e.exports = JSON.parse('{"id":"OVAdUxv5n0E0wTX3miEu","pageId":"ha-labo","title":"HA LABO","title2":"","titleJp":"","mainImg":"/img/works/ha-labo/main.png","isAvailable":true,"url":"https://ha-labo.co.jp/","urlButtonLabel":"","date":"2022.10.21 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"dvBnvq8o8WL2rH43ADYk","key":"reactjs","label":"React.js"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#434343","#f7f7f7"],"pointerColor":"#434343","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"Dfd2Bkt50f0","caption":"* This is a screen recording of the desktop layout","resolution":{"x":1680,"y":945},"thumb":"/img/works/ha-labo/video0.png","order":0},{"type":"video","videoId":"wjh-KPQGo6M","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":780,"y":1328},"thumb":"/img/works/ha-labo/video1.png","order":1}]}')
    },
    701: function(e) {
        e.exports = JSON.parse('{"id":"LvgXH5AXLYu4EyfhMw8G","pageId":"hamidashi","title":"HAMIDASHI Project","title2":"","titleJp":"はみ出しプロジェクト 新しい学校のリーダーズ×コイケヤ","mainImg":"/img/works/hamidashi/main.jpg","isAvailable":false,"url":"http://hamidashi-pj.com/","urlButtonLabel":"","date":"2016.08.09 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"8Y1vqJFvQjOpCCLR6thX","key":"jquery","label":"jQuery"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#2e317e","#d0332a","#ffffff"],"pointerColor":"#d0332a","flipColorWhenDarkMode":true,"contents":[{"type":"text","text":"more info:\\n<a href=\\"https://www.aid-dcc.com/works/hamidashi-pj/\\" target=\\"_blank\\">https://www.aid-dcc.com/works/hamidashi-pj/</a>","order":0},{"type":"video","videoId":"ICxKXFY1LCI","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/hamidashi/video0.png","order":1},{"type":"video","videoId":"WamZT8iIa8I","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1114},"thumb":"/img/works/hamidashi/video1.png","order":2},{"type":"images","items":[{"filePath":"/img/works/hamidashi/0.jpg","order":0,"type":"image"},{"filePath":"/img/works/hamidashi/1.jpg","order":1,"type":"image"},{"filePath":"/img/works/hamidashi/2.jpg","order":2,"type":"image"},{"filePath":"/img/works/hamidashi/3.jpg","order":3,"type":"image"},{"filePath":"/img/works/hamidashi/4.jpg","order":4,"type":"image"}],"isGroup":false,"order":3},{"type":"images","items":[{"filePath":"/img/works/hamidashi/5.jpg","order":0,"type":"image"},{"filePath":"/img/works/hamidashi/6.jpg","order":1,"type":"image"},{"filePath":"/img/works/hamidashi/7.jpg","order":2,"type":"image"}],"isGroup":true,"order":4},{"type":"images","items":[{"filePath":"/img/works/hamidashi/8.jpg","order":0,"type":"image"},{"filePath":"/img/works/hamidashi/9.jpg","order":1,"type":"image"},{"filePath":"/img/works/hamidashi/10.jpg","order":2,"type":"image"}],"isGroup":true,"order":5}]}')
    },
    702: function(e) {
        e.exports = JSON.parse('{"id":"7LqD5NgP3f52xN9LS93S","pageId":"himawarilife","title":"SOMPO Himawari Life","title2":"brand site","titleJp":"「生命を、次へ。」SOMPOひまわり生命ブランドサイト","mainImg":"/img/works/himawarilife/main.jpg","isAvailable":true,"url":"https://wwwsp.himawari-life.co.jp/brand/","urlButtonLabel":"","date":"2019.09.24 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#edb933","#fcf0e2","#ffffff"],"pointerColor":"","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"too5Ou3Q5z4","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":1170},"thumb":"/img/works/himawarilife/video0.jpg","order":0},{"type":"video","videoId":"KbIAkFO20P0","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1100},"thumb":"/img/works/himawarilife/video1.jpg","order":1}]}')
    },
    703: function(e) {
        e.exports = JSON.parse('{"id":"zVfvIzqs7JcEU8KEzsTY","pageId":"hny2017","title":"Happy New Year 2017","title2":"by Kenzo Suzuki","titleJp":"2017年 年賀コンテンツ","mainImg":"/img/works/hny2017/main.png","isAvailable":true,"url":"tps://2017.tkmh.me/","urlButtonLabel":"","date":"2017.01.01 12:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"8Y1vqJFvQjOpCCLR6thX","key":"jquery","label":"jQuery"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"},{"id":"OVKqW2VG3m2TMm2rMq30","key":"webvr","label":"WebVR"}],"colors":["#ffa919","#ffd879","#ffffff"],"pointerColor":"#ffa919","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"1AUV71bSIug","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/hny2017/video0.png","order":0},{"type":"images","items":[{"filePath":"/img/works/hny2017/0.png","order":0,"type":"image"},{"filePath":"/img/works/hny2017/1.png","order":1,"type":"image"},{"filePath":"/img/works/hny2017/2.png","order":2,"type":"image"},{"filePath":"/img/works/hny2017/3.png","order":3,"type":"image"}],"isGroup":false,"order":1}]}')
    },
    704: function(e) {
        e.exports = JSON.parse('{"id":"PDU1GILUtKoN1mln1Ttr","pageId":"hny2018","title":"Happy New Year 2018","title2":"created by Kenzo Suzuki","titleJp":"2018年 年賀コンテンツ","mainImg":"/img/works/hny2018/main.jpg","isAvailable":true,"url":"https://2018.unshift.jp/","urlButtonLabel":"","date":"2018.01.01 12:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#98d6a1","#000000","#ffffdd"],"flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"SCcu34oLnP0","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/hny2018/video0.png","order":0}]}')
    },
    705: function(e) {
        e.exports = JSON.parse('{"id":"SUcDWwl65ckl6zaWGIf9","pageId":"hny2019","title":"Happy New Year 2019","title2":"created by Kenzo Suzuki","titleJp":"2019年 年賀コンテンツ","mainImg":"/img/works/hny2019/main.png","isAvailable":true,"url":"https://2019.unshift.jp/","urlButtonLabel":"","date":"2019.01.01 12:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#9dd9ff","#042134","#ffffff"],"flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"wYfrPEx-sHo","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/hny2019/video0.png","order":0}]}')
    },
    706: function(e) {
        e.exports = JSON.parse('{"id":"M2sTeQhl8vZmRpGBdlb3","pageId":"hny2020","title":"Happy New Year 2020","title2":"created by Kenzo Suzuki","titleJp":"","mainImg":"/img/works/hny2020/main.jpg","isAvailable":true,"url":"https://2020.unshift.jp/","urlButtonLabel":"","date":"2020.01.01 12:00:00+09:00","role":[{"id":"4LysifeGrTCPXFMM2f6G","key":"3dmodeling","label":"3D modeling"},{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"vR5dc3r75vlHA6iQ0xNl","key":"model-viewer","label":"model-viewer"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"nOJpsiyeu6HIaSDJTN3D","key":"webar","label":"WebAR"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#f5a742","#ffffff"],"pointerColor":"#ffffff","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"JAoJNHWFZvA","caption":"* This is a screen recording of the iPhoneXS.","resolution":{"x":1280,"y":600},"thumb":"/img/works/hny2020/video0.jpg","order":0}]}')
    },
    707: function(e) {
        e.exports = JSON.parse('{"id":"swmu1h06VVTa5MIpFeDL","pageId":"hny2021","title":"Happy New Year 2021","title2":"created by Kenzo Suzuki","titleJp":"","mainImg":"/img/works/hny2021/main.jpg","isAvailable":true,"url":"https://2021.unshift.jp/","urlButtonLabel":"","date":"2021.01.01 00:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6NYhvvjvN87xyJSZzJae","key":"creativecoding","label":"Creative coding"},{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#ffd1d1","#ffffff"],"pointerColor":"","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"GfVouB4PnNg","resolution":{"x":1,"y":1},"thumb":"/img/works/hny2021/video0.jpg","order":0}]}')
    },
    708: function(e) {
        e.exports = JSON.parse('{"id":"XnL8RX5nEHHOh4jr54tL","pageId":"hny2022","title":"Happy New Year 2022","title2":"created by Kenzo Suzuki","titleJp":"","mainImg":"/img/works/hny2022/main.png","isAvailable":true,"url":"https://2022.unshift.jp/","urlButtonLabel":"","date":"2022.01.01 00:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6NYhvvjvN87xyJSZzJae","key":"creativecoding","label":"Creative coding"},{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#0f2155","#ffffff"],"pointerColor":"#0f2155","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"itBqDPtYDXM","resolution":{"x":1680,"y":945},"thumb":"/img/works/hny2022/video0.png","order":0}]}')
    },
    709: function(e) {
        e.exports = JSON.parse('{"id":"msjLRIqbtNt30vjJNwSn","pageId":"hny2023","title":"Happy New year 2023","title2":"created by Kenzo Suzuki","titleJp":"","mainImg":"/img/works/hny2023/main.png","isAvailable":true,"url":"https://2023.unshift.co.jp/","urlButtonLabel":"","date":"2023.01.02 00:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6NYhvvjvN87xyJSZzJae","key":"creativecoding","label":"Creative coding"},{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#ffcccc","#ff7091"],"pointerColor":"","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"Nyylc0qr9PM","resolution":{"x":1680,"y":944},"thumb":"/img/works/hny2023/video0.png","order":0},{"type":"video","videoId":"r7wocHKJKdE","resolution":{"x":1280,"y":720},"thumb":"/img/works/hny2023/video1.png","order":1}]}')
    },
    710: function(e) {
        e.exports = JSON.parse('{"id":"pPcEO5hMook14M0a2dt1","pageId":"ichikami","title":"ICHIKAMI 360°_HAIR STUDIO","title2":"","titleJp":"いち髪 360°HAIR STUDIO","mainImg":"/img/works/ichikami/main.png","isAvailable":false,"url":"https://ichikamistyling.jp/","urlButtonLabel":"","date":"2018.03.09 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"}],"colors":["#000000","#ffffff"],"pointerColor":"#000000","flipColorWhenDarkMode":true,"contents":[{"type":"text","text":"more info:\\n<a href=\\"https://www.epoch-inc.jp/works/ichikami360hairstudio/\\" target=\\"_blank\\">https://www.epoch-inc.jp/works/ichikami360hairstudio/</a>","order":0},{"type":"video","videoId":"0gwqwCI9DwQ","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/ichikami/video0.png","order":1},{"type":"video","videoId":"rptOl8AXkco","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1305},"thumb":"/img/works/ichikami/video1.png","order":2}]}')
    },
    711: function(e) {
        e.exports = JSON.parse('{"id":"PKsfsJPVaEgANwSd00r6","pageId":"jfoodo","title":"UNLOCK YOUR PALATE","title2":"The fresh harmony of Seafood and Sake","titleJp":"","mainImg":"/img/works/jfoodo/main.jpg","isAvailable":true,"url":"https://sake-jfoodo.jetro.go.jp/","urlButtonLabel":"","date":"2021.02.01 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"}],"colors":["#e60012","#f7f4f0"],"pointerColor":"#e60012","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"XeHbE_BUQ9E","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/jfoodo/video0.jpg","order":0},{"type":"video","videoId":"kSc9ZmmW-60","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1108},"thumb":"/img/works/jfoodo/video1.jpg","order":1}]}')
    },
    712: function(e) {
        e.exports = JSON.parse('{"id":"YEwuZKSC57MIOZYhn4q0","pageId":"jujutsukaisen_dolcegabbana","title":"Dolce & Gabbana x Jujutsu Kaisen","title2":"","titleJp":"ドルチェ&ガッバーナ × 呪術廻戦","mainImg":"/img/works/jujutsukaisen_dolcegabbana/main.png","isAvailable":true,"url":"https://jujutsukaisen.dolcegabbana.com/","urlButtonLabel":"","date":"2022.04.20 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6NYhvvjvN87xyJSZzJae","key":"creativecoding","label":"Creative coding"},{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"dvBnvq8o8WL2rH43ADYk","key":"reactjs","label":"React.js"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#a0178a","#000000"],"pointerColor":"#a0178a","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"iE6iWd6dZI8","caption":"* This is a screen recording of the desktop layout","resolution":{"x":1440,"y":950},"thumb":"/img/works/jujutsukaisen_dolcegabbana/video0.png","order":0},{"type":"video","videoId":"0ly25aP1Neg","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":780,"y":1449},"thumb":"/img/works/jujutsukaisen_dolcegabbana/video1.png","order":1}]}')
    },
    713: function(e) {
        e.exports = JSON.parse('{"id":"fWkz6yeh3jMq8NtagmRl","pageId":"kazukinoda","title":"Kazuki Noda Portfolio","title2":"","titleJp":"","mainImg":"/img/works/kazukinoda/main.jpg","isAvailable":true,"url":"https://kazukinoda.com/","urlButtonLabel":"","date":"2021.06.01 00:00:00+09:00","role":[{"id":"TjFkHaIxxextkAFhyJhC","key":"back-end","label":"Back-end"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6NYhvvjvN87xyJSZzJae","key":"creativecoding","label":"Creative coding"},{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"geIYuKzgMy2xNpLBvL0m","key":"jamstack","label":"jamstack"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"72OxaxflwSi7RQG0QZg9","key":"nuxtjs","label":"Nuxt.js"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"},{"id":"qg5lgE9tgYoscrQekiA0","key":"wordpress","label":"Wordpress"}],"colors":["#7d97b8","#ede7dc"],"pointerColor":"#7d97b8","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"H2K2sh3GNzg","caption":"* This is a screen recording of the desktop layout","resolution":{"x":1280,"y":720},"thumb":"/img/works/kazukinoda/video0.jpg","order":0},{"type":"video","videoId":"0ZQm2P-0RJA","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1328},"thumb":"/img/works/kazukinoda/video1.jpg","order":1}]}')
    },
    714: function(e) {
        e.exports = JSON.parse('{"id":"08qleh9ZlgKRFW72DxdA","pageId":"kumaleon","title":"KUMALEON","title2":"NFT project site","titleJp":"","mainImg":"/img/works/kumaleon/main.png","isAvailable":true,"url":"https://kumaleon.com/","urlButtonLabel":"","date":"2022.07.14 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#e44b43","#f9db58","#1f4891","#67b6f2","#f8f6f0"],"pointerColor":"#e44b43","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"2CovBAtd6N4","resolution":{"x":1680,"y":945},"thumb":"/img/works/kumaleon/video0.png","order":0}]}')
    },
    715: function(e) {
        e.exports = JSON.parse('{"id":"0HGgB7FKTRfEKWkWkakL","pageId":"lanway","title":"LANWAY Inc.","title2":"","titleJp":"","mainImg":"/img/works/lanway/main.png","isAvailable":true,"url":"http://lanway.jp/","urlButtonLabel":"","date":"2022.11.07 00:00:00+09:00","role":[{"id":"TjFkHaIxxextkAFhyJhC","key":"back-end","label":"Back-end"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"qg5lgE9tgYoscrQekiA0","key":"wordpress","label":"Wordpress"}],"colors":["#ffa400","#f1f1ef"],"pointerColor":"#ffa400","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"IicI4849oTw","caption":"* This is a screen recording of the desktop layout","resolution":{"x":1680,"y":945},"thumb":"/img/works/lanway/video0.png","order":0},{"type":"video","videoId":"Bu4bfqLXVOk","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":780,"y":1328},"thumb":"/img/works/lanway/video1.png","order":1}]}')
    },
    716: function(e) {
        e.exports = JSON.parse('{"id":"5SZtbyzB1ZCiAROutNxt","pageId":"laseek","title":"LASEEK","title2":"","titleJp":"ラシーク 女性のかんたんお仕事探し・求人紹介サイト","mainImg":"/img/works/laseek/main.jpg","isAvailable":true,"url":"https://la-seek.jp/","urlButtonLabel":"","date":"2019.01.23 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"}],"colors":["#fe6375","#424953","#ffffff"],"flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"tQtgRbtkmkg","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/laseek/video0.png","order":0},{"type":"video","videoId":"O_BDS_jjzf4","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1112},"thumb":"/img/works/laseek/video1.png","order":1}]}')
    },
    717: function(e) {
        e.exports = JSON.parse('{"id":"bzIyvZr9xJloa3X2bYtT","pageId":"maro","title":"MARO","title2":"official website","titleJp":"MARO（マーロ）公式サイト","mainImg":"/img/works/maro/main.jpg","isAvailable":false,"url":"http://www.maro-men.jp/","urlButtonLabel":"","date":"2017.06.22 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#ff1495","#000000","#ffffff"],"flipColorWhenDarkMode":false,"contents":[{"type":"text","text":"more info:\\n<a href=\\"https://www.aid-dcc.com/works/maro_renewal/\\" target=\\"_blank\\">https://www.aid-dcc.com/works/maro_renewal/</a>","order":0},{"type":"video","videoId":"FDekQSNCuco","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/maro/video0.png","order":1},{"type":"video","videoId":"L66uO3COlb0","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1114},"thumb":"/img/works/maro/video1.png","order":2},{"type":"video","videoId":"eJmfyT894jI","caption":"ver.0 (teaser site)","resolution":{"x":1280,"y":720},"thumb":"/img/works/maro/video2.png","order":3},{"type":"video","videoId":"rwpv_GmC6NA","caption":"ver.0 (mobile teaser site)","resolution":{"x":750,"y":1114},"thumb":"/img/works/maro/video3.png","order":4},{"type":"images","items":[{"filePath":"/img/works/maro/0.jpg","order":0,"type":"image"},{"filePath":"/img/works/maro/1.jpg","order":1,"type":"image"},{"filePath":"/img/works/maro/2.jpg","order":2,"type":"image"},{"filePath":"/img/works/maro/3.jpg","order":3,"type":"image"},{"filePath":"/img/works/maro/4.jpg","order":4,"type":"image"}],"isGroup":false,"order":5},{"type":"images","items":[{"filePath":"/img/works/maro/5.jpg","order":0,"type":"image"},{"filePath":"/img/works/maro/6.jpg","order":1,"type":"image"},{"filePath":"/img/works/maro/7.jpg","order":2,"type":"image"}],"isGroup":true,"order":6},{"type":"images","items":[{"filePath":"/img/works/maro/8.jpg","order":0,"type":"image"},{"filePath":"/img/works/maro/9.jpg","order":1,"type":"image"},{"filePath":"/img/works/maro/10.jpg","order":2,"type":"image"}],"isGroup":true,"order":7}]}')
    },
    718: function(e) {
        e.exports = JSON.parse('{"id":"udXkI6SMgCfJWWQx2dJO","pageId":"maro2","title":"MARO","title2":"official website","titleJp":"MARO（マーロ）公式サイト","mainImg":"/img/works/maro2/main.jpg","isAvailable":true,"url":"http://www.maro-men.jp/","date":"2019.06.18 20:04:57+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"}],"colors":["#dc3525","#d7c465","#000000"],"contents":[{"type":"video","videoId":"EhikPo8sZZE","caption":"","resolution":{"x":1280,"y":720},"thumb":"/img/works/maro2/video0.jpg","order":0},{"type":"video","videoId":"XhBvI01gjh4","caption":"","resolution":{"x":750,"y":1112},"thumb":"/img/works/maro2/video1.png","order":1}]}')
    },
    719: function(e) {
        e.exports = JSON.parse('{"id":"Hwm1L2HFO1BGLcanqRap","pageId":"mugen-frontier","title":"Mugen Yuwakashi Button FRONTIER","title2":"Noritz","titleJp":"無限∞湯沸かしボタン FRONTIER","mainImg":"/img/works/mugen-frontier/main.jpg","isAvailable":true,"url":"https://ofuro-time.noritz.co.jp/wakasuapp/picturebook/mugen-frontier/","urlButtonLabel":"","date":"2023.11.06 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6246YQUwdefMgANKHgVn","key":"astro","label":"Blockchain"},{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#003eff","#fffbf4"],"pointerColor":"#003eff","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"F72dAPbimQc","resolution":{"x":1680,"y":944},"thumb":"/img/works/mugen-frontier/video0.png","order":0}]}')
    },
    720: function(e) {
        e.exports = JSON.parse('{"id":"Ya9kZsCcRHTBQNC5XmGw","pageId":"office12","title":"Office 12","title2":"","titleJp":"暮らしを自由にするオフィス12","mainImg":"/img/works/office12/main.jpg","isAvailable":true,"url":"https://12-office.com/","urlButtonLabel":"","date":"2021.07.01 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#3c3c3c","#ffffff"],"pointerColor":"#3c3c3c","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"tnw56Kd9N78","caption":"* This is a screen recording of the desktop layout","resolution":{"x":1280,"y":720},"thumb":"/img/works/office12/video0.jpg","order":0},{"type":"video","videoId":"CfwjW1osi-o","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":390,"y":664},"thumb":"/img/works/office12/video1.jpg","order":1}]}')
    },
    721: function(e) {
        e.exports = JSON.parse('{"id":"KwkS5JdrkmTIsRAPgSYx","pageId":"pilkul","title":"PILKUL x HIKAKIN","title2":"special website","titleJp":"ピルクル × ヒカキンコラボ「おなかまヒーローズ」","mainImg":"/img/works/pilkul/main.png","isAvailable":true,"url":"https://www.pilkul.jp/","urlButtonLabel":"","date":"2019.06.12 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"dvBnvq8o8WL2rH43ADYk","key":"reactjs","label":"React.js"}],"colors":["#e60012","#f3b483","#ffffff"],"flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"v-zkGfR7bH4","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/pilkul/video0.png","order":0}]}')
    },
    722: function(e) {
        e.exports = JSON.parse('{"id":"HBVBKmxMeQbWhbmMVuxT","pageId":"presage","title":"Japanese design pioneer_Riki Watanabe","title2":"Presage (Seiko Watch)","titleJp":"","mainImg":"/img/works/presage/main.jpg","isAvailable":true,"url":"https://www.seikowatches.com/jp-ja/products/presage/special/rikiwatanabe/","urlButtonLabel":"","date":"2019.09.03 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#ada08c","#e3dacd","#ffffff"],"pointerColor":"#000000","flipColorWhenDarkMode":false,"contents":[{"type":"text","text":"more info:\\n<a href=\\"https://www.highlights.jp/project/seiko/\\" target=\\"_blank\\">https://www.highlights.jp/project/seiko/</a>","order":0},{"type":"video","videoId":"QtJVzExFkWc","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/presage/video0.png","order":1},{"type":"video","videoId":"dWScZAk6E10","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1106},"thumb":"/img/works/presage/video1.png","order":2}]}')
    },
    723: function(e) {
        e.exports = JSON.parse('{"id":"IxGDsV5IewBYMCWTNgYT","pageId":"recruit_jinji","title":"Recruit Co., Ltd._New graduate recruitment site","title2":"","titleJp":"株式会社リクルートの学生向けキャリアサイト","mainImg":"/img/works/recruit_jinji/main.jpg","isAvailable":true,"url":"https://www.recruit-jinji.jp/","urlButtonLabel":"","date":"2021.04.01 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#1796d9","#ffffff"],"pointerColor":"#1796d9","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"brSOEvY4omM","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/recruit_jinji/video0.jpg","order":0},{"type":"video","videoId":"A_2MBiGLhfs","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1108},"thumb":"/img/works/recruit_jinji/video1.jpg","order":1}]}')
    },
    724: function(e) {
        e.exports = JSON.parse('{"id":"XiLHikFL1R7NSyB4wQOV","pageId":"republic","title":"VJing@REPUBLIC","title2":"","titleJp":"","mainImg":"/img/works/republic/main.jpg","isAvailable":false,"url":"","urlButtonLabel":"","date":"2017.06.24 12:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"iOlse3hRmxJcGE9nyttb","key":"video","label":"Video"},{"id":"oNaMHV3qn136FcgxkpdH","key":"vjing","label":"VJing"}],"tag":[{"id":"fzQte4K2sGKhsYNqzipR","key":"csharp","label":"C#"},{"id":"6NYhvvjvN87xyJSZzJae","key":"creativecoding","label":"Creative coding"},{"id":"8R6R1iZfI81UIrJVQQF0","key":"generativeart","label":"Generative art"},{"id":"WLl8bLQ3Qp4rd0caIpS8","key":"hlsl","label":"HLSL"},{"id":"PXxIKrY4SufCVXmHQKk9","key":"unity","label":"Unity"}],"colors":["#0a5886","#66c0c8","#647add"],"flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"ZOqx7JlVvL8","caption":"video #1","resolution":{"x":1280,"y":720},"thumb":"/img/works/republic/video0.png","order":0},{"type":"video","videoId":"Yy6skQQbKek","caption":"video #2","resolution":{"x":1280,"y":720},"thumb":"/img/works/republic/video1.png","order":1}]}')
    },
    725: function(e) {
        e.exports = JSON.parse('{"id":"9OSyCoH8Et7B9X3kfOCB","pageId":"responsive-samples","title":"created by Kenzo Suzuki","title2":"","titleJp":"","mainImg":"/img/works/responsive-samples/main.png","isAvailable":true,"url":"https://responsive-samples.unshift.co.jp","urlButtonLabel":"","date":"2023.10.29 00:00:00+09:00","role":[{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6246YQUwdefMgANKHgVn","key":"astro","label":"Blockchain"},{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#0f2350","#b2b7da",""],"pointerColor":"#0f2350","flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"2uHX3ehYCho","resolution":{"x":1920,"y":1200},"thumb":"/img/works/responsive-samples/video0.png","order":0}]}')
    },
    726: function(e) {
        e.exports = JSON.parse('{"id":"JyChZ2utGfivtpiHb6A7","pageId":"roov","title":"ROOV","title2":"brand site","titleJp":"","mainImg":"/img/works/roov/main.jpg","isAvailable":true,"url":"https://roov.jp/","urlButtonLabel":"","date":"2019.05.09 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"}],"colors":["#009a96","#171c60","#d8cf1c","#ffffff"],"pointerColor":"#171c60","flipColorWhenDarkMode":false,"contents":[{"type":"text","text":"more info:\\n<a href=\\"https://www.details.co.jp/works/roov/\\" target=\\"_blank\\">https://www.details.co.jp/works/roov/</a>","order":0},{"type":"video","videoId":"xxLh120tfT4","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/roov/video0.png","order":1},{"type":"video","videoId":"TkyjAJB3XCc","caption":"* This is a screen recording of the moble layout.","resolution":{"x":730,"y":1080},"thumb":"/img/works/roov/video1.png","order":2}]}')
    },
    727: function(e) {
        e.exports = JSON.parse('{"id":"8F8QHQC8tB7cyCWlAkbd","pageId":"ryoteikirin","title":"RYOTEI KIRIN","title2":"","titleJp":"料亭きりん presented by 本搾り™","mainImg":"/img/works/ryoteikirin/main.png","isAvailable":false,"url":"http://ryotei.kirin.jp/","urlButtonLabel":"","date":"2017.02.23 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"8Y1vqJFvQjOpCCLR6thX","key":"jquery","label":"jQuery"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#d5b941","#282321","#ffffff"],"pointerColor":"#000000","flipColorWhenDarkMode":false,"contents":[{"type":"text","text":"more info:\\n<a href=\\"https://www.aid-dcc.com/works/honshibori_ryotei/\\" target=\\"_blank\\">https://www.aid-dcc.com/works/honshibori_ryotei/</a>","order":0},{"type":"video","videoId":"lAf9fGSeY98","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/ryoteikirin/video0.png","order":1},{"type":"video","videoId":"31lqwd-_QIs","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1114},"thumb":"/img/works/ryoteikirin/video1.png","order":2},{"type":"images","items":[{"filePath":"/img/works/ryoteikirin/0.jpg","order":0,"type":"image"},{"filePath":"/img/works/ryoteikirin/1.jpg","order":1,"type":"image"},{"filePath":"/img/works/ryoteikirin/2.jpg","order":2,"type":"image"},{"filePath":"/img/works/ryoteikirin/3.jpg","order":3,"type":"image"},{"filePath":"/img/works/ryoteikirin/4.jpg","order":4,"type":"image"}],"isGroup":false,"order":3},{"type":"images","items":[{"filePath":"/img/works/ryoteikirin/5.jpg","order":0,"type":"image"},{"filePath":"/img/works/ryoteikirin/6.jpg","order":1,"type":"image"},{"filePath":"/img/works/ryoteikirin/7.jpg","order":2,"type":"image"}],"isGroup":true,"order":4},{"type":"images","items":[{"filePath":"/img/works/ryoteikirin/8.jpg","order":0,"type":"image"},{"filePath":"/img/works/ryoteikirin/9.jpg","order":1,"type":"image"},{"filePath":"/img/works/ryoteikirin/10.jpg","order":2,"type":"image"}],"isGroup":true,"order":5}]}')
    },
    728: function(e) {
        e.exports = JSON.parse('{"id":"V3QapSGUWbmEUDHue7um","pageId":"saihouji","title":"Saihou-ji","title2":"Kokedera","titleJp":"西方寺 (苔寺)","mainImg":"/img/works/saihouji/main.jpg","isAvailable":true,"url":"https://saihoji-kokedera.com/","urlButtonLabel":"","date":"2023.09.14 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6246YQUwdefMgANKHgVn","key":"astro","label":"Blockchain"},{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#323232","#ffffff","#3e4f28"],"pointerColor":"#ffffff","flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"Pll880P1Pcw","resolution":{"x":1680,"y":944},"thumb":"/img/works/saihouji/video0.png","order":0}]}')
    },
    729: function(e) {
        e.exports = JSON.parse('{"id":"f0iTaYQdobH4xhTMN1Oj","pageId":"sega60th","title":"SEGA Earth UFO Catcher","title2":"","titleJp":"セガ60周年記念コンテンツ 地球UFOキャッチャー","mainImg":"/img/works/sega60th/main.jpg","isAvailable":false,"url":"","urlButtonLabel":"","date":"2020.06.03 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"YnxiYn5lvRwZIGhv40Wv","key":"googlemapsapi","label":"Google Maps API"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"dvBnvq8o8WL2rH43ADYk","key":"reactjs","label":"React.js"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#e20ff2","#151656"],"pointerColor":"#ffffff","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"NHeYzTfrRl8","caption":"","resolution":{"x":750,"y":1240},"thumb":"/img/works/sega60th/video0.jpg","order":0}]}')
    },
    730: function(e) {
        e.exports = JSON.parse('{"id":"jVrhkbFcnUVSDMEzvnZI","pageId":"sofirah","title":"Sofirah","title2":"brand site","titleJp":"","mainImg":"/img/works/sofirah/main.jpg","isAvailable":true,"url":"https://www.juliagel.com/","urlButtonLabel":"","date":"2018.10.23 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"}],"colors":["#394b6f","#60b0e5","#ffffff"],"flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"Atv4nochAk0","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/sofirah/video0.png","order":0}]}')
    },
    731: function(e) {
        e.exports = JSON.parse('{"id":"hDhdDBHqYREfyyygre5j","pageId":"takehanake","title":"TAKEHANAKE_DESIGN STUDIO","title2":"","titleJp":"","mainImg":"/img/works/takehanake/main.png","isAvailable":true,"url":"http://takehanake.com/","urlButtonLabel":"","date":"2016.10.11 12:00:00+09:00","role":[{"id":"TjFkHaIxxextkAFhyJhC","key":"back-end","label":"Back-end"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"8Y1vqJFvQjOpCCLR6thX","key":"jquery","label":"jQuery"},{"id":"qg5lgE9tgYoscrQekiA0","key":"wordpress","label":"Wordpress"}],"colors":["#ff7c00","#ff5797","#ffffff"],"flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"R8kHwtHRSLg","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/takehanake/video0.png","order":0},{"type":"images","items":[{"filePath":"/img/works/takehanake/0.png","order":0,"type":"image"},{"filePath":"/img/works/takehanake/1.png","order":1,"type":"image"},{"filePath":"/img/works/takehanake/2.png","order":2,"type":"image"}],"isGroup":false,"order":1},{"type":"images","items":[{"filePath":"/img/works/takehanake/3.png","order":0,"type":"image"},{"filePath":"/img/works/takehanake/4.png","order":1,"type":"image"},{"filePath":"/img/works/takehanake/5.png","order":2,"type":"image"}],"isGroup":true,"order":2}]}')
    },
    732: function(e) {
        e.exports = JSON.parse('{"id":"J6kXpLh8LVDdfgHUK6Wu","pageId":"thankyouTwitter1k","title":"Thank you 1,000+ followers","title2":"KenzoSuzuki on Twitter","titleJp":"","mainImg":"/img/works/thankyouTwitter1k/main.png","isAvailable":false,"url":"","urlButtonLabel":"","date":"2020.03.16 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[],"colors":["#ffffff","#1da1f2"],"pointerColor":"","flipColorWhenDarkMode":false,"contents":[]}')
    },
    734: function(e) {
        e.exports = JSON.parse('{"id":"DxWLfRChfGn2VxRwxt8T","pageId":"ttglobal","title":"TT Global","title2":"","titleJp":"","mainImg":"/img/works/ttglobal/main.jpg","isAvailable":true,"url":"https://ttglobal.com","urlButtonLabel":"","date":"2023.11.13 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6246YQUwdefMgANKHgVn","key":"astro","label":"Blockchain"},{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#50b1ba","#27639f",""],"pointerColor":"#50b1ba","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"2nuNfoL2EXM","resolution":{"x":1668,"y":944},"thumb":"/img/works/ttglobal/video0.png","order":0}]}')
    },
    735: function(e) {
        e.exports = JSON.parse('{"id":"vbIbR6VPhTnfW62MPANy","pageId":"unshift","title":"unshift","title2":"portfolio site","titleJp":"","mainImg":"/img/works/unshift/main.png","isAvailable":true,"url":"https://unshift.jp/","urlButtonLabel":"","date":"2019.07.08 12:00:00+09:00","role":[{"id":"TjFkHaIxxextkAFhyJhC","key":"back-end","label":"Back-end"},{"id":"y3leOWfJytijaIl4iVJA","key":"design","label":"Design"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"6NYhvvjvN87xyJSZzJae","key":"creativecoding","label":"Creative coding"},{"id":"dHMJpMCYCHjrEQnINTEF","key":"firebase","label":"Firebase"},{"id":"8R6R1iZfI81UIrJVQQF0","key":"generativeart","label":"Generative art"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"eL3tuFsXK5GVK96H2Nxb","key":"nodejs","label":"Node.js"},{"id":"72OxaxflwSi7RQG0QZg9","key":"nuxtjs","label":"Nuxt.js"}],"colors":["#0d0d0d","#f8f8f8"],"flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"V1pWr3UyHN0","caption":"* This is a screen recording of the desktop layout (full mode).","resolution":{"x":1280,"y":720},"thumb":"/img/works/unshift/video0.png","order":0},{"type":"video","videoId":"qYn6YTcr-uk","caption":"* This is a screen recording of the mobile layout (full mode).","resolution":{"x":750,"y":1120},"thumb":"/img/works/unshift/video1.png","order":1},{"type":"video","videoId":"-koKypUC9AY","caption":"* This is a screen recording of the desktop layout (simple / minimum mode).","resolution":{"x":1280,"y":720},"thumb":"/img/works/unshift/video2.png","order":2},{"type":"video","videoId":"pkVWf-UA8hc","caption":"* This is a screen recording of the mobile layout (simple / minimum mode).","resolution":{"x":750,"y":1106},"thumb":"/img/works/unshift/video3.png","order":3},{"type":"video","videoId":"n9DmZQFov3I","caption":"* demonstration of the settings","resolution":{"x":1280,"y":720},"thumb":"/img/works/unshift/video4.png","order":4}]}')
    },
    736: function(e) {
        e.exports = JSON.parse('{"id":"dqr2FqUMV7HOtBavLszF","pageId":"unshift0","title":"unshift","title2":"portfolio site ver.0","titleJp":"","mainImg":"/img/works/unshift0/main.png","isAvailable":false,"url":"https://unshift.jp/","urlButtonLabel":"","date":"2018.01.04 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#000000","#ffffff"],"pointerColor":"#000000","flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"NF14USbrzUA","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":720,"y":720},"thumb":"/img/works/unshift0/video0.png","order":0}]}')
    },
    737: function(e) {
        e.exports = JSON.parse('{"id":"LlEXgFVAA5eRiTJJGdpJ","pageId":"ut_recruiting_2019","title":"UT Group Recruiting Site","title2":"","titleJp":"UT 2019年度 新卒採用サイト","mainImg":"/img/works/ut_recruiting_2019/main.jpg","isAvailable":true,"url":"https://www.ut-g.co.jp/pro-recruit/","urlButtonLabel":"","date":"2019.04.30 12:00:00+09:00","role":[{"id":"TjFkHaIxxextkAFhyJhC","key":"back-end","label":"Back-end"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"},{"id":"CcrGQq4qbOa40PMcU2i2","key":"technicalDirection","label":"Technical direction"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"},{"id":"qg5lgE9tgYoscrQekiA0","key":"wordpress","label":"Wordpress"}],"colors":["#7fcd45","#000000","#ffffff"],"pointerColor":"#7fcd45","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"VcuaeNWbv3c","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/ut_recruiting_2019/video0.jpg","order":0},{"type":"video","videoId":"phmtllPptJE","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":750,"y":1105},"thumb":"/img/works/ut_recruiting_2019/video1.jpg","order":1}]}')
    },
    738: function(e) {
        e.exports = JSON.parse('{"id":"FHLa7IeoQCkvaFIIiy6Q","pageId":"visionary-arts","title":"Visionary Arts","title2":"Tokyo / Fukuoka","titleJp":"専門学校ビジョナリーアーツ 東京校 / 福岡校","mainImg":"/img/works/visionary-arts/main.jpg","isAvailable":true,"url":"https://www.va-t.ac.jp/","urlButtonLabel":"","date":"2021.05.31 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"EaieEvScf1Kreu9G4rCG","key":"vuejs","label":"Vue.js"}],"colors":["#000000","#ffffff"],"pointerColor":"#000000","flipColorWhenDarkMode":true,"contents":[{"type":"video","videoId":"0CkE6QwUZ5Q","caption":"* This is a screen recording of the desktop layout","resolution":{"x":1280,"y":720},"thumb":"/img/works/visionary-arts/video0.jpg","order":0},{"type":"video","videoId":"dDSdxYyxk-U","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":390,"y":664},"thumb":"/img/works/visionary-arts/video1.jpg","order":1}]}')
    },
    739: function(e) {
        e.exports = JSON.parse('{"id":"AKzIVmujEtA0DPlRkH2x","pageId":"wedcamp","title":"Wednesday Campanella","title2":"officeial Website","titleJp":"水曜日のカンパネラ オフィシャルサイト","mainImg":"/img/works/wedcamp/main.png","isAvailable":false,"url":"http://www.wed-camp.com/","urlButtonLabel":"","date":"2016.07.07 12:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"rNOSzONMQ7AgZizC9mJY","key":"glsl","label":"GLSL"},{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"8Y1vqJFvQjOpCCLR6thX","key":"jquery","label":"jQuery"},{"id":"pRZWWt33Y5zasdJtqLhN","key":"pixijs","label":"PIXI.js"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#c68fd0","#f1b08c","#ffffff"],"flipColorWhenDarkMode":false,"contents":[{"type":"text","text":"more info:\\n<a href=\\"https://www.aid-dcc.com/works/wedcamp/\\" target=\\"_blank\\">https://www.aid-dcc.com/works/wedcamp/</a>","order":0},{"type":"video","videoId":"2_so8QlKGQg","caption":"* This is a screen recording of the desktop layout.","resolution":{"x":1280,"y":720},"thumb":"/img/works/wedcamp/video0.jpg","order":1},{"type":"images","items":[{"filePath":"/img/works/wedcamp/0.jpg","order":0,"type":"image"},{"filePath":"/img/works/wedcamp/1.jpg","order":1,"type":"image"},{"filePath":"/img/works/wedcamp/2.jpg","order":2,"type":"image"}],"isGroup":false,"order":2},{"type":"images","items":[{"filePath":"/img/works/wedcamp/3.jpg","order":0,"type":"image"},{"filePath":"/img/works/wedcamp/4.jpg","order":1,"type":"image"},{"filePath":"/img/works/wedcamp/5.jpg","order":2,"type":"image"}],"isGroup":true,"order":3}]}')
    },
    740: function(e) {
        e.exports = JSON.parse('{"id":"Ul28gy5kR7eWZAW0LEoV","pageId":"yasashiikirikata","title":"Yasashii Kirikata Jiten","title2":"","titleJp":"やさしい切りかた辞典 | 貝印","mainImg":"/img/works/yasashiikirikata/main.png","isAvailable":true,"url":"https://www.kai-group.com/products/special/hocho/yasashii/","urlButtonLabel":"","date":"2022.08.31 00:00:00+09:00","role":[{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"jbZqy9aaGZMpfhWmSjHM","key":"nextjs","label":"Next.js"},{"id":"4NgpGStTNZUejJULbdtQ","key":"threejs","label":"three.js"},{"id":"wqxeLbEqHPVdsNPFaMYx","key":"webgl","label":"WebGL"}],"colors":["#005bff","#ffffff"],"pointerColor":"#005bff","flipColorWhenDarkMode":false,"contents":[{"type":"video","videoId":"czE3TNEQBMc","caption":"* This is a screen recording of the desktop layout","resolution":{"x":1680,"y":945},"thumb":"/img/works/yasashiikirikata/video0.png","order":0},{"type":"video","videoId":"CNJhSgplUtw","caption":"* This is a screen recording of the mobile layout.","resolution":{"x":780,"y":1328},"thumb":"/img/works/yasashiikirikata/video1.png","order":1},{"type":"video","videoId":"wC-Fz_sbAM0","caption":"Devtool for making data for this site.","resolution":{"x":1680,"y":945},"thumb":"/img/works/yasashiikirikata/video2.png","order":2},{"type":"video","videoId":"MBiSdmJTi4k","caption":"Devtool for making data for this site.","resolution":{"x":1680,"y":945},"thumb":"/img/works/yasashiikirikata/video3.png","order":3}]}')
    },
    741: function(e) {
        e.exports = JSON.parse('{"id":"7nohXn7EKfaGySKCZd1r","pageId":"yosukekoyachi","title":"YOSUKE KOYACHI","title2":"portfolio site","titleJp":"","mainImg":"/img/works/yosukekoyachi/main.jpg","isAvailable":true,"url":"http://yosukekoyachi.jp/","urlButtonLabel":"","date":"2017.04.17 12:00:00+09:00","role":[{"id":"TjFkHaIxxextkAFhyJhC","key":"back-end","label":"Back-end"},{"id":"gfvF8BWaHyOl7OvFMnzW","key":"front-end","label":"Front-end"},{"id":"CcrGQq4qbOa40PMcU2i2","key":"technicalDirection","label":"Technical direction"}],"category":[{"id":"NTeiuqCJguxjAGeiwNa4","key":"website","label":"Website"}],"tag":[{"id":"lJXXm0GRFAi9hwf4f979","key":"html_css","label":"HTML/CSS"},{"id":"I2JvrLXE2MW434LrqxMs","key":"javascript","label":"JavaScript"},{"id":"8Y1vqJFvQjOpCCLR6thX","key":"jquery","label":"jQuery"},{"id":"qg5lgE9tgYoscrQekiA0","key":"wordpress","label":"Wordpress"}],"colors":["#00c3ff","#7a7a7a","#ffffff"],"pointerColor":"#00c3ff","flipColorWhenDarkMode":false,"contents":[{"type":"text","text":"This is the portfolio site of the art artist / designer / photographer Yosuke Koyachi.\\n\\nTwitter: <a href=\\"https://twitter.com/yaccii\\" target=\\"_blank\\">@yaccii</a>\\nInstagram: <a href=\\"https://www.instagram.com/___yosuke/\\" target=\\"_blank\\">@___yosuke</a>\\nnote: <a href=\\"https://note.mu/ykoyachi\\" target=\\"_blank\\">https://note.mu/ykoyachi</a>","order":0},{"type":"images","items":[{"filePath":"/img/works/yosukekoyachi/0.jpg","order":0,"type":"image"},{"filePath":"/img/works/yosukekoyachi/1.jpg","order":1,"type":"image"}],"isGroup":false,"order":1},{"type":"images","items":[{"filePath":"/img/works/yosukekoyachi/2.jpg","order":0,"type":"image"},{"filePath":"/img/works/yosukekoyachi/3.jpg","order":1,"type":"image"},{"filePath":"/img/works/yosukekoyachi/4.jpg","order":2,"type":"image"}],"isGroup":true,"order":2}]}')
    },
    742: function(e, t, i) {
        "use strict";
        var r = i(603);
        i.n(r).a
    },
    743: function(e, t, i) {
        (t = i(24)(!1)).push([e.i, '[data-v-c01b7aba]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-c01b7aba]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-c01b7aba{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-c01b7aba{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.childRoot[data-v-c01b7aba]{padding-top:130px}@media screen and (min-width:761px) and (max-width:1024px){.childRoot[data-v-c01b7aba]{padding-top:160px}}@media screen and (min-width:1025px){.childRoot[data-v-c01b7aba]{padding-top:96px}}.worksItem__titles[data-v-c01b7aba]{text-align:left;margin-top:.2em;margin-bottom:32px}.worksItem__thumb[data-v-c01b7aba]{margin-bottom:32px}.is-displayModeFull .worksItem__thumb[data-v-c01b7aba]{opacity:0!important}.head[data-v-c01b7aba]{position:relative;z-index:2}@media screen and (min-width:1025px){.head[data-v-c01b7aba]{position:fixed;top:192px;left:32px;width:calc(40% - 25.6px);max-width:460px;-webkit-transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17);transition:transform .4s cubic-bezier(.175,.885,.425,1.17),-webkit-transform .4s cubic-bezier(.175,.885,.425,1.17)}.is-scrolled .head[data-v-c01b7aba]{-webkit-transform:translateY(-20px);transform:translateY(-20px)}}@media screen and (min-width:761px) and (max-width:1024px){.info[data-v-c01b7aba]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}}.archiveLinks[data-v-c01b7aba]{--color2:#f8f8f8;margin-top:8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.archiveLinks[data-v-c01b7aba]:first-child{margin-top:0}.archiveLinks[data-v-c01b7aba]:last-child{margin-bottom:28px}.archiveLinks li[data-v-c01b7aba]{margin-right:4px;margin-bottom:4px;background-color:#f8f8f8;background-color:#0d0d0d;background-color:var(--color1);border:2px solid #0d0d0d;border-color:var(--color1);-webkit-transition:background-color .2s linear,border-color .2s linear;transition:background-color .2s linear,border-color .2s linear}.archiveLinks li[data-v-c01b7aba],.archiveLinks li a[data-v-c01b7aba]{display:inline-block;position:relative}.archiveLinks li a[data-v-c01b7aba]{padding:6px 8px 4px;font-size:12px;letter-spacing:.1em;color:#f8f8f8;-webkit-transition:color .2s linear;transition:color .2s linear}.archiveLinks li a[data-v-c01b7aba]:before{position:absolute;left:0;top:0;z-index:0;width:100%;height:100%;background-color:#f8f8f8;background-color:var(--color2);-webkit-transform:scaleX(0);transform:scaleX(0);content:"";-webkit-transform-origin:center left;transform-origin:center left;-webkit-transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1);transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear;transition:transform .4s cubic-bezier(.19,1,.22,1),background-color .2s linear,-webkit-transform .4s cubic-bezier(.19,1,.22,1)}.archiveLinks li span[data-v-c01b7aba]{position:relative;z-index:2;color:#f8f8f8;color:var(--color2);-webkit-transition:color .2s linear;transition:color .2s linear}.is-desktop .archiveLinks li:hover a[data-v-c01b7aba]:before{-webkit-transform:scaleX(1);transform:scaleX(1)}.is-desktop .archiveLinks li:hover span[data-v-c01b7aba]{color:#0d0d0d;color:var(--color1);-webkit-transition:color .1s linear;transition:color .1s linear}@media screen and (min-width:761px){.archiveLinks li a[data-v-c01b7aba]{padding:6px 8px 4px;display:inline-block;font-size:14px}}.is-darkMode .archiveLinks[data-v-c01b7aba]{--color2:#0d0d0d}.archiveLinks__title[data-v-c01b7aba]{font-size:14px;margin-bottom:.4em;margin-right:8px;display:inline-block;line-height:26px;letter-spacing:.1em;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear}@media screen and (min-width:761px){.archiveLinks__title[data-v-c01b7aba]{font-size:14px;line-height:28px;margin-right:10px}}@media screen and (min-width:761px) and (max-width:1024px){aside[data-v-c01b7aba]{width:60%;padding-right:32px}}.buttonVisit[data-v-c01b7aba]{margin-bottom:32px;height:48px;background-color:hsla(0,0%,97.3%,.9);-webkit-transition:border-color .2s linear,background-color .2s linear;transition:border-color .2s linear,background-color .2s linear;--color2:#f8f8f8}.buttonVisit>.inner[data-v-c01b7aba]:before{display:none!important}.buttonVisit svg[data-v-c01b7aba]{width:12px;height:12px;display:inline-block;margin-left:.4em;margin-bottom:.2em;position:relative;z-index:2}@media screen and (min-width:761px) and (max-width:1024px){.buttonVisit[data-v-c01b7aba]{width:40%;min-width:300px}}.is-darkMode .buttonVisit[data-v-c01b7aba]{background-color:rgba(13,13,13,.9);--color2:#0d0d0d}.contents[data-v-c01b7aba]{position:relative;z-index:2}@media screen and (min-width:1025px){.contents[data-v-c01b7aba]{width:calc(60% - 32px);position:relative;left:calc(40% + 32px);max-width:1400px}}@media screen and (min-width:1213px){.contents[data-v-c01b7aba]{width:calc(100% - 492px);left:492px}}.canvas[data-v-c01b7aba]{width:2048px;height:2048px;position:absolute;left:0;top:0;opacity:0}', ""]),
        e.exports = t
    },
    744: function(e, t, i) {
        "use strict";
        var r = i(604);
        i.n(r).a
    },
    745: function(e, t, i) {
        (t = i(24)(!1)).push([e.i, ":root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.worksDetail .img{margin-top:16px}@media screen and (min-width:761px){.worksDetail .img{margin-top:32px}}@media screen and (min-width:1025px){.worksDetail .worksItem__thumb{margin-top:0!important}}", ""]),
        e.exports = t
    },
    748: function(e, t, i) {
        "use strict";
        i.r(t);
        i(73),
        i(61),
        i(89);
        var r = i(1)
          , o = i.n(r)
          , a = (i(39),
        i(7))
          , l = i(19)
          , n = i.n(l)
          , s = i(581)
          , d = i(589)
          , c = (i(102),
        i(20))
          , g = i.n(c)
          , f = {
            props: ["contentsData"],
            data: function() {
                return {
                    lines: []
                }
            },
            created: function() {
                var e;
                this.lines = this.contentsData.text.split("\n\n"),
                this.lines = g()(e = this.lines).call(e, (function(e) {
                    return e.replace(/\n/g, "<br>")
                }
                ))
            }
        }
          , p = (i(672),
        i(674),
        i(17))
          , m = Object(p.a)(f, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "txtLines"
            }, e._l(e.lines, (function(t, r) {
                return i("p", {
                    key: r,
                    staticClass: "txt",
                    domProps: {
                        innerHTML: e._s(t)
                    }
                })
            }
            )), 0)
        }
        ), [], !1, null, "29213626", null).exports
          , b = i(583)
          , k = {
            props: ["contentsData", "color"],
            data: function() {
                return {
                    isVideoLoaded: !1,
                    isThumbLoaded: !1,
                    isVideoUnavailable: !1,
                    player: null
                }
            },
            computed: {
                classObj: function() {
                    return {
                        "is-videoLoaded": this.isVideoLoaded,
                        "is-thumbLoaded": this.isThumbLoaded,
                        "is-videoUnavailabel": this.isVideoUnavailable
                    }
                },
                sizerStyleObj: function() {
                    var e = this.contentsData.resolution.x / this.contentsData.resolution.y;
                    return ("m" == this.$store.state.layoutMode || "l" == this.$store.state.layoutMode) && e <= 1 ? {
                        "padding-top": "".concat(56.25, "%")
                    } : {
                        "padding-top": "".concat(100 / e, "%")
                    }
                }
            },
            beforeDestroy: function() {
                this.player && (this.player.pauseVideo && this.player.pauseVideo(),
                this.player.clearVideo && this.player.clearVideo(),
                this.player = null,
                this.$el.querySelector("iframe").src = "")
            },
            mounted: function() {
                var e = this;
                return Object(a.a)(o.a.mark((function t() {
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Object(b.a)(e.contentsData.thumb, e.$refs.thumb);
                            case 2:
                                return e.isThumbLoaded = !0,
                                t.next = 5,
                                e.$nuxt.youtubeLoadPromise.catch((function(t) {
                                    e.isVideoUnavailable = !0
                                }
                                ));
                            case 5:
                                if (!e.isVideoUnavailable) {
                                    t.next = 7;
                                    break
                                }
                                return t.abrupt("return");
                            case 7:
                                e.player = new window.YT.Player(e.$refs.video,{
                                    videoId: e.contentsData.videoId,
                                    playerVars: {
                                        playsinline: 1,
                                        shoninfo: 0,
                                        color: e.color,
                                        rel: 0,
                                        wmode: "transparent"
                                    },
                                    events: {
                                        onReady: function() {
                                            e.isVideoLoaded = !0
                                        },
                                        onError: function() {
                                            e.isVideoUnavailable = !0
                                        }
                                    }
                                });
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            }
        }
          , h = (i(676),
        i(678),
        Object(p.a)(k, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "videoContainer",
                class: e.classObj
            }, [i("div", {
                staticClass: "videoContainer__inner"
            }, [i("div", {
                staticClass: "videoContainer__sizer",
                style: e.sizerStyleObj
            }), i("div", {
                staticClass: "videoContainer__thumb"
            }, [i("img", {
                ref: "thumb",
                attrs: {
                    src: e.contentsData.thumb,
                    alt: "",
                    decoding: "async"
                }
            })]), i("div", {
                staticClass: "videoContainer__iframe"
            }, [i("div", {
                ref: "video",
                staticClass: "videoContainer__video"
            })])]), e.contentsData.caption ? i("p", {
                staticClass: "videoContainer__caption"
            }, [e._v(e._s(e.contentsData.caption))]) : e._e()])
        }
        ), [], !1, null, "6b32ff6b", null).exports)
          , u = i(586)
          , y = {
            props: ["contentsData"],
            components: {
                Img: u.a
            },
            computed: {
                classObj: function() {
                    return {
                        "is-group": this.contentsData.isGroup
                    }
                }
            },
            created: function() {}
        }
          , v = (i(680),
        Object(p.a)(y, (function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "imgsContainer",
                class: this.classObj
            }, this._l(this.contentsData.items, (function(e, i) {
                return t("Img", {
                    key: i,
                    staticClass: "img",
                    attrs: {
                        src: e.filePath,
                        "default-resolution": {
                            x: 1,
                            y: 1
                        }
                    }
                })
            }
            )), 1)
        }
        ), [], !1, null, "4d657660", null).exports)
          , w = {
            mixins: [s.a, d.a],
            components: {
                TxtLines: m,
                VideoContainer: h,
                ImgsContainer: v,
                Img: u.a
            },
            head: function() {
                var e, t, i, r = this.meta.url.replace(/\/?$/, ""), o = n()(e = "".concat(this.title, " | works | ")).call(e, this.meta.title), a = n()(t = "".concat(r)).call(t, this.worksData.mainImg);
                return {
                    title: "".concat(this.title, " | works"),
                    meta: [{
                        hid: "og:url",
                        property: "og:url",
                        content: n()(i = "".concat(r)).call(i, this.$route.fullPath)
                    }, {
                        hid: "og:title",
                        property: "og:title",
                        content: o
                    }, {
                        hid: "twitter:title",
                        name: "twitter:title",
                        content: o
                    }, {
                        hid: "og:image",
                        property: "og:image",
                        content: a
                    }, {
                        hid: "twitter:image",
                        name: "twitter:image",
                        content: a
                    }]
                }
            },
            scrollToTop: !0,
            data: function() {
                return {
                    meta: null,
                    worksData: {},
                    title: "",
                    urlButtonLabel: ""
                }
            },
            destroyed: function() {
                this.$nuxt.mainVisual.animateWorksImageAlpha(0, .2),
                this.$nuxt.mainVisual.animateScrollTop()
            },
            beforeDestroy: function() {
                this.$store.commit("setCurrentWorksColors", null)
            },
            created: function() {
                this.$store.commit("setCurrentWorksColors", this.worksData.colors),
                this.$store.commit("pushHistory", {
                    path: this.$route.path,
                    name: this.$route.name
                })
            },
            updated: function() {
                var e = this;
                return Object(a.a)(o.a.mark((function t() {
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e.updateWorksDetailOffsetY();
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            asyncData: function(e) {
                e.app;
                var t = e.route
                  , r = e.env;
                return Object(a.a)(o.a.mark((function e() {
                    var a, l, n, s, d;
                    return o.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return a = t.params.id,
                                l = i(682)("./".concat(a, ".json")),
                                n = r.meta,
                                s = l.title.replace("_", " "),
                                l.title2 && (s += " ".concat(l.title2.replace("_", ""))),
                                !(d = l.urlButtonLabel) && l.isAvailable && (d = "visit site"),
                                d || l.isAvailable || (d = "this site has already been closed."),
                                e.abrupt("return", {
                                    worksData: l,
                                    title: s,
                                    urlButtonLabel: d,
                                    meta: n
                                });
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            mounted: function() {
                var e = this;
                return Object(a.a)(o.a.mark((function t() {
                    var i, r, a, l;
                    return o.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return i = e.$store.state.history.length,
                                r = "back to works top",
                                i >= 2 && ("works-tag-tag" == (a = e.$store.state.history[i - 2].name) ? r = "back to tag archive" : "works-category-category" == a ? r = "back to category archive" : "works-role-role" == a && (r = "back to role archive")),
                                "/works",
                                e.$store.commit("setButtonBack", {
                                    isAvailable: !0,
                                    label: r,
                                    path: "/works"
                                }),
                                t.next = 7,
                                e.$nextTick();
                            case 7:
                                return e.$nuxt.patternBg.draw(),
                                l = e.$store.state.isRootLoaded,
                                t.next = 11,
                                e.onLoad();
                            case 11:
                                e.updateWorksDetailOffsetY(),
                                e.$nuxt.mainVisual.animateToWorksDetail(e.worksData, l);
                            case 13:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            methods: {
                getComponent: function(e) {
                    return "text" == e ? "TxtLines" : "video" == e ? "VideoContainer" : "images" == e ? "ImgsContainer" : void 0
                },
                updateWorksDetailOffsetY: function() {
                    var e = ("l" == this.$store.state.layoutMode ? this.$refs.mainImgL : this.$refs.mainImg).$el;
                    this.$nuxt.mainVisual.updateWorksDetailOffsetY(this.$nuxt.getOffsetTop(e))
                }
            }
        }
          , x = (i(742),
        i(744),
        Object(p.a)(w, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("article", {
                staticClass: "childRoot worksDetail",
                class: e.classObj,
                style: e.styleObj
            }, [i("section", {
                staticClass: "head"
            }, [i("div", {
                staticClass: "worksItem__titles"
            }, [i("h1", {
                staticClass: "worksItem__title"
            }, [i("p", {
                staticClass: "worksItem__titleInner",
                domProps: {
                    innerHTML: e._s(e.getTaggedTitle(e.worksData.title))
                }
            }), e.worksData.title2 ? i("p", {
                staticClass: "worksItem__title2",
                domProps: {
                    innerHTML: e._s(e.getTaggedTitle(e.worksData.title2))
                }
            }) : e._e()]), e.worksData.titleJp ? i("p", {
                staticClass: "worksItem__titleJp",
                domProps: {
                    innerHTML: e._s(e.getTaggedTitle(e.worksData.titleJp))
                }
            }) : e._e()]), "l" !== e.$store.state.layoutMode ? i("Img", {
                ref: "mainImg",
                staticClass: "worksItem__thumb",
                attrs: {
                    src: e.worksData.mainImg,
                    "default-resolution": {
                        x: 120,
                        y: 63
                    }
                }
            }) : e._e(), i("section", {
                staticClass: "info"
            }, [i("aside", [i("div", {
                staticClass: "archiveLinks"
            }, [i("h3", {
                staticClass: "archiveLinks__title"
            }, [e._v("category")]), i("ul", e._l(e.worksData.category, (function(t) {
                return i("li", {
                    key: t.key
                }, [i("NuxtLink", {
                    attrs: {
                        to: "/works/category/" + t.key
                    }
                }, [i("span", [e._v(e._s(t.label))])])], 1)
            }
            )), 0)]), i("div", {
                staticClass: "archiveLinks"
            }, [i("h3", {
                staticClass: "archiveLinks__title"
            }, [e._v("role")]), i("ul", e._l(e.worksData.role, (function(t) {
                return i("li", {
                    key: t.key
                }, [i("NuxtLink", {
                    attrs: {
                        to: "/works/role/" + t.key
                    }
                }, [i("span", [e._v(e._s(t.label))])])], 1)
            }
            )), 0)]), i("div", {
                staticClass: "archiveLinks"
            }, [i("h3", {
                staticClass: "archiveLinks__title"
            }, [e._v("tag")]), i("ul", e._l(e.worksData.tag, (function(t) {
                return i("li", {
                    key: t.key
                }, [i("NuxtLink", {
                    attrs: {
                        to: "/works/tag/" + t.key
                    }
                }, [i("span", [e._v(e._s(t.label))])])], 1)
            }
            )), 0)])]), e.worksData.url ? i("div", {
                staticClass: "buttonRect buttonVisit",
                class: {
                    "is-disabled": !e.worksData.isAvailable
                }
            }, [e.worksData.isAvailable ? i("a", {
                staticClass: "inner",
                attrs: {
                    href: e.worksData.url,
                    target: "_blank"
                }
            }, [i("span", {
                staticClass: "hover"
            }), i("span", {
                staticClass: "buttonRect__label"
            }, [e._v(e._s(e.urlButtonLabel))]), i("svg", [i("use", {
                attrs: {
                    "xlink:href": "#iconBlank"
                }
            })])]) : i("div", {
                staticClass: "inner"
            }, [i("span", {
                staticClass: "buttonRect__label"
            }, [e._v(e._s(e.urlButtonLabel))])])]) : e._e()])], 1), i("section", {
                staticClass: "contents"
            }, ["l" === e.$store.state.layoutMode ? i("Img", {
                ref: "mainImgL",
                staticClass: "worksItem__thumb",
                attrs: {
                    src: e.worksData.mainImg,
                    "default-resolution": {
                        x: 120,
                        y: 63
                    }
                }
            }) : e._e(), e._l(e.worksData.contents, (function(t, r) {
                return i(e.getComponent(t.type), {
                    key: r,
                    tag: "component",
                    attrs: {
                        "contents-data": t,
                        color: e.worksData.colors[0]
                    }
                })
            }
            ))], 2)])
        }
        ), [], !1, null, "c01b7aba", null));
        t.default = x.exports
    }
}]);
