(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    581: function(t, a, e) {
        "use strict";
        e(236),
        e(61),
        e(74),
        e(89);
        var o = e(1)
          , n = e.n(o)
          , i = e(9)
          , r = e.n(i)
          , s = (e(39),
        e(7))
          , c = e(36)
          , l = e.n(c);
        a.a = {
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
                    return Object(s.a)(n.a.mark((function a() {
                        return n.a.wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    return a.abrupt("return", new r.a((function(a, e) {
                                        var o = document.createElement("img");
                                        o.src = t,
                                        o.width > 0 ? (o = null,
                                        a()) : o.addEventListener("load", (function() {
                                            a(),
                                            o = null
                                        }
                                        ), {
                                            once: !0
                                        })
                                    }
                                    )));
                                case 1:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                hideLogo: function() {
                    this.$store.commit("setLogoShown", !1)
                },
                showLogo: function() {
                    var t = this
                      , a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
                    this.clearLogoTimer(),
                    this.setLogoTxt(),
                    this.logoTimer = l()(Object(s.a)(n.a.mark((function a() {
                        return n.a.wrap((function(a) {
                            for (; ; )
                                switch (a.prev = a.next) {
                                case 0:
                                    t.$store.commit("setLogoShown", !0);
                                case 1:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    ))), a)
                },
                setLogoTxt: function() {
                    this.$store.commit("setLogoTxt", "index" == this.$store.state.currentId ? "kdsuzuki" : this.$store.state.currentId)
                },
                clearLogoTimer: function() {
                    this.logoTimer && clearTimeout(this.logoTimer)
                },
                getBackgroundImg: function(t) {
                    var a = window.getComputedStyle(t).backgroundImage.replace(/^url\(['"]?([^'"]*)['"]?\)$/, "$1");
                    return a = a.replace(new RegExp("^https?://" + window.location.host + "(.*)"), "$1")
                },
                onLoad: function() {
                    var t = this
                      , a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    return Object(s.a)(n.a.mark((function o() {
                        return n.a.wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    return t.$nuxt.onPageLoad && t.$nuxt.onPageLoad(),
                                    t.$store.state.isRootLoaded && a && t.showLogo(),
                                    o.next = 4,
                                    t.$nextTick();
                                case 4:
                                    if (t.$store.state.isRootLoaded) {
                                        o.next = 6;
                                        break
                                    }
                                    return o.abrupt("return", new r.a(function() {
                                        var a = Object(s.a)(n.a.mark((function a(o) {
                                            return n.a.wrap((function(a) {
                                                for (; ; )
                                                    switch (a.prev = a.next) {
                                                    case 0:
                                                        l()(Object(s.a)(n.a.mark((function a() {
                                                            return n.a.wrap((function(a) {
                                                                for (; ; )
                                                                    switch (a.prev = a.next) {
                                                                    case 0:
                                                                        return t.setLogoTxt(),
                                                                        t.$nuxt.patternBg.init(),
                                                                        a.next = 4,
                                                                        t.$nuxt.mainVisual.start();
                                                                    case 4:
                                                                        t.$store.commit("setRootLoaded", !0),
                                                                        o();
                                                                    case 6:
                                                                    case "end":
                                                                        return a.stop()
                                                                    }
                                                            }
                                                            ), a)
                                                        }
                                                        ))), e);
                                                    case 1:
                                                    case "end":
                                                        return a.stop()
                                                    }
                                            }
                                            ), a)
                                        }
                                        )));
                                        return function(t) {
                                            return a.apply(this, arguments)
                                        }
                                    }()));
                                case 6:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o)
                    }
                    )))()
                }
            }
        }
    },
    587: function(t, a, e) {
        var o = e(607);
        "string" == typeof o && (o = [[t.i, o, ""]]),
        o.locals && (t.exports = o.locals);
        (0,
        e(25).default)("67e57ef8", o, !0, {
            sourceMap: !1
        })
    },
    606: function(t, a, e) {
        "use strict";
        var o = e(587);
        e.n(o).a
    },
    607: function(t, a, e) {
        (a = e(24)(!1)).push([t.i, '[data-v-17baa3e0]:root{--colorBlack:#0d0d0d;--colorBlackGradient1:#0d0d0d;--colorBlackGradient2:rgba(13,13,13,0.8);--colorBlackGradient3:rgba(13,13,13,0.6);--colorBlackGradient4:rgba(13,13,13,0.4);--colorBlackGradient5:rgba(13,13,13,0.2);--colorWhite:#f8f8f8;--colorWhiteGradient1:#f8f8f8;--colorWhiteGradient2:hsla(0,0%,97.3%,0.8);--colorWhiteGradient3:hsla(0,0%,97.3%,0.6);--colorWhiteGradient4:hsla(0,0%,97.3%,0.4);--colorWhiteGradient5:hsla(0,0%,97.3%,0.2);--color1:#0d0d0d;--color2:#f8f8f8;--gradientColor1:var(--colorWhiteGradient1);--gradientColor2:var(--colorWhiteGradient2);--gradientColor3:var(--colorWhiteGradient3);--gradientColor4:var(--colorWhiteGradient4);--gradientColor5:var(--colorWhiteGradient5)}.is-darkMode[data-v-17baa3e0]{--color1:#f8f8f8;--color2:#0d0d0d;--gradientColor1:var(--colorBlackGradient1);--gradientColor2:var(--colorBlackGradient2);--gradientColor3:var(--colorBlackGradient3);--gradientColor4:var(--colorBlackGradient4);--gradientColor5:var(--colorBlackGradient5)}@-webkit-keyframes loadingAnim-data-v-17baa3e0{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}@keyframes loadingAnim-data-v-17baa3e0{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(0);transform:scaleX(0)}49%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleX(1);transform:scaleX(1)}51%{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:scaleX(0);transform:scaleX(0)}}.conentsInner[data-v-17baa3e0]{padding-top:96px;padding-bottom:184px}@media screen and (min-width:761px){.conentsInner[data-v-17baa3e0]{padding-top:132px;padding-bottom:200px}}.logo[data-v-17baa3e0]{position:relative;width:200px;display:inline-block;margin:0 auto 8px}.logo[data-v-17baa3e0]:before{content:"";display:block;width:100%;padding-top:25.69083%}.logo svg[data-v-17baa3e0]{position:absolute;left:0;top:0;width:100%;height:100%;fill:#0d0d0d;fill:var(--color1)}@media screen and (min-width:761px){.logo[data-v-17baa3e0]{width:240px;margin:0 auto 16px}}.txt[data-v-17baa3e0]{line-height:1.6;font-size:14px;margin-top:16px;color:#0d0d0d;color:var(--color1);-webkit-transition:color .2s linear;transition:color .2s linear}.txt.jp[data-v-17baa3e0]{font-size:11.2px;line-height:2}.txt.jp span[data-v-17baa3e0]{font-size:14px}@media screen and (min-width:761px){.txt[data-v-17baa3e0]{font-size:18px;margin-top:24px}.txt.jp[data-v-17baa3e0]{font-size:12.6px;line-height:2.28}.txt.jp span[data-v-17baa3e0]{font-size:18px}}.info[data-v-17baa3e0]{margin-top:14px;line-height:1.6}.info .jp[data-v-17baa3e0]{font-size:11.2px;line-height:2}@media screen and (min-width:761px){.info[data-v-17baa3e0]{font-size:16px;margin-top:24px}.info .jp[data-v-17baa3e0]{font-size:11.2px;line-height:2.28}}.infoGrop[data-v-17baa3e0]{margin-top:14px;font-size:14px;display:block}.infoGrop dt[data-v-17baa3e0]{font-weight:700}@media screen and (min-width:761px){.infoGrop[data-v-17baa3e0]{margin-top:24px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.infoGrop dt[data-v-17baa3e0]{width:9em}}.buttons[data-v-17baa3e0]{margin-top:32px}.buttons .buttonRect[data-v-17baa3e0]{margin-top:8px;height:48px;background-color:hsla(0,0%,97.3%,.9);-webkit-transition:background-color .2s linear;transition:background-color .2s linear}.buttons .buttonRect>.innver[data-v-17baa3e0]:before{display:none!important}.buttons .buttonRect svg[data-v-17baa3e0]{width:30px;height:30px;display:inline-block;margin-right:10px;fill:#0d0d0d;fill:var(--color1);-webkit-transition:fill .2s linear;transition:fill .2s linear}.buttons .buttonRect__label[data-v-17baa3e0]{text-align:center;width:14em;white-space:nowrap}.buttons .buttonRect__labelNotice[data-v-17baa3e0]{font-size:80%;display:block}.buttons .buttonTwitter[data-v-17baa3e0],.is-desktop .buttons .buttonTwitter .buttonRect__label[data-v-17baa3e0]{--color1:#1da1f2}.buttons .buttonInstagram[data-v-17baa3e0]{--color1:#c13584}.buttons .buttonFacebook[data-v-17baa3e0]{--color1:#3b579d}.buttons .buttonGithub[data-v-17baa3e0]{--color1:#24292e}.is-darkMode .buttons .buttonGithub[data-v-17baa3e0]{--color1:#fff}.buttons .buttonNote[data-v-17baa3e0]{--color1:#2cb696}@media screen and (min-width:761px){.buttons[data-v-17baa3e0]{margin-top:32px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1400px}.buttons .buttonRect[data-v-17baa3e0]{width:calc((100% - 16px)/2);margin-top:16px;height:60px}}@media screen and (min-width:1025px){.buttons .buttonRect[data-v-17baa3e0]{width:calc((100% - 32px)/3)}}.is-darkMode .buttons .buttonRect[data-v-17baa3e0]{background-color:rgba(13,13,13,.9)}', ""]),
        t.exports = a
    },
    750: function(t, a, e) {
        "use strict";
        e.r(a);
        e(73),
        e(61),
        e(89);
        var o = e(1)
          , n = e.n(o)
          , i = (e(39),
        e(7))
          , r = e(19)
          , s = e.n(r)
          , c = {
            mixins: [e(581).a],
            asyncData: function(t) {
                return {
                    meta: t.env.meta
                }
            },
            head: function() {
                var t, a = "about | ".concat(this.meta.title);
                return {
                    title: "about",
                    meta: [{
                        hid: "og:url",
                        property: "og:url",
                        content: s()(t = "".concat(this.meta.url.replace(/\/?$/, ""))).call(t, this.$route.fullPath)
                    }, {
                        hid: "og:title",
                        property: "og:title",
                        content: a
                    }, {
                        hid: "twitter:title",
                        name: "twitter:title",
                        content: a
                    }]
                }
            },
            beforeDestroy: function() {
                this.hideLogo()
            },
            beforeCreate: function() {
                this.$store.commit("setCurrentId", "about")
            },
            created: function() {
                this.$store.commit("pushHistory", {
                    path: this.$route.path,
                    name: this.$route.name
                })
            },
            mounted: function() {
                var t = this;
                return Object(i.a)(n.a.mark((function a() {
                    var e;
                    return n.a.wrap((function(a) {
                        for (; ; )
                            switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2,
                                t.$nextTick();
                            case 2:
                                return t.$nuxt.patternBg.draw(),
                                e = t.$store.state.isRootLoaded,
                                a.next = 6,
                                t.onLoad(!0);
                            case 6:
                                t.$nuxt.mainVisual.animateToAbout(e);
                            case 7:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a)
                }
                )))()
            },
            methods: {
                onMouseDown: function() {
                    this.$nuxt.mainVisual.animateInteraction(1)
                },
                onMouseUp: function() {
                    this.$nuxt.mainVisual.animateInteraction(0)
                }
            }
        }
          , l = (e(606),
        e(17))
          , d = Object(l.a)(c, (function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("section", {
                staticClass: "contentsRoot",
                on: {
                    mousedown: t.onMouseDown,
                    mouseup: t.onMouseUp,
                    touchstart: t.onMouseDown,
                    touchend: t.onMouseUp
                }
            }, [e("div", {
                staticClass: "conentsInner"
            }, [t._m(0), t._m(1), t._m(2), e("div", {
                staticClass: "buttons"
            }, [e("div", {
                staticClass: "buttonRect buttonMail"
            }, [e("a", {
                staticClass: "inner",
                attrs: {
                    href: "mailto:skg1949188@gmail.com",
                    target: "_blank"
                }
            }, [e("span", {
                staticClass: "hover"
            }), e("svg", [e("use", {
                attrs: {
                    "xlink:href": "#iconMail"
                }
            })]), e("span", {
                staticClass: "buttonRect__label"
            }, [t._v("Email: skg1949188@gmail.com")])])]), e("div", {
                staticClass: "buttonRect buttonTwitter"
            }, [e("a", {
                staticClass: "inner",
                attrs: {
                    href: "https://x.com/KenzoSuzuki",
                    target: "_blank"
                }
            }, [e("span", {
                staticClass: "hover"
            }), e("svg", [e("use", {
                attrs: {
                    "xlink:href": "#iconTwitter"
                }
            })]), e("span", {
                staticClass: "buttonRect__label"
            }, [t._v("Twitter: @KenzoSuzuki")])])]), e("div", {
                staticClass: "buttonRect buttonInstagram"
            }, [e("a", {
                staticClass: "inner",
                attrs: {
                    href: "http://instagram.com/KenzoSuzuki",
                    target: "_blank"
                }
            }, [e("span", {
                staticClass: "hover"
            }), e("svg", [e("use", {
                attrs: {
                    "xlink:href": "#iconInstagram"
                }
            })]), e("span", {
                staticClass: "buttonRect__label"
            }, [t._v("Instagram: @KenzoSuzuki")])])]), e("div", {
                staticClass: "buttonRect buttonFacebook"
            }, [e("a", {
                staticClass: "inner",
                attrs: {
                    href: "https://www.youtube.com/@KenzoSuzuki-l5k/",
                    target: "_blank"
                }
            }, [e("span", {
                staticClass: "hover"
            }), e("svg", [e("use", {
                attrs: {
                    "xlink:href": "#iconFacebook"
                }
            })]), e("span", {
                staticClass: "buttonRect__label"
            }, [t._v("Youtube: @KenzoSuzuki-l5k")])])]), e("div", {
                staticClass: "buttonRect buttonGithub"
            }, [e("a", {
                staticClass: "inner",
                attrs: {
                    href: "https://github.com/CreativityNeverEnds",
                    target: "_blank"
                }
            }, [e("span", {
                staticClass: "hover"
            }), e("svg", [e("use", {
                attrs: {
                    "xlink:href": "#iconGithub"
                }
            })]), e("span", {
                staticClass: "buttonRect__label"
            }, [t._v("GitHub: CreativityNeverEnds")])])]), e("div", {
                staticClass: "buttonRect buttonNote"
            }, [e("a", {
                staticClass: "inner",
                attrs: {
                    href: "/resume/Kenzo_Suzuki.pdf",
                    target: "_blank"
                }
            }, [e("span", {
                staticClass: "hover"
            }), e("svg", [e("use", {
                attrs: {
                    "xlink:href": "#iconNote"
                }
            })]), t._m(3)])])])])])
        }
        ), [function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("p", {
                staticClass: "txt"
            }, [this._v("I am proficient in both frontend and backend technologies, including React.js, Next.js, Angular, Vue.js, Node.js, Express.js, and various blockchain platforms such as Ethereum, Solidity, Hyperledger, and Binance Smart Chain."), a("br"), this._v("\nI excel at designing scalable and secure applications while optimizing performance to deliver high-quality software solutions."), a("br"), this._v("\nMy extensive experience includes seamlessly integrating blockchain technology into existing systems, enhancing security, transparency, and efficiency."), a("br")])
        }
        , function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("p", {
                staticClass: "txt"
            }, [this._v("I am always prepared to implement your innovative ideas. "), a("br"), this._v("\nIf you are interested in bringing your idea to life, please feel free to reach out to me."), a("br")])
        }
        , function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("dl", {
                staticClass: "info"
            }, [e("div", {
                staticClass: "infoGrop"
            }, [e("dt", [t._v("Frontend Development")]), e("dd", [t._v("HTML5/CSS3/SCSS/SASS/Tailwind CSS"), a("br"), t._v("JavaScript/TypeScript"), a("br"), t._v("React.js/Angular/Vue.js/Next.js"), a("br"), t._v("Bootstrap/Clean-UI/Material-UI")])]), e("div", {
                staticClass: "infoGrop"
            }, [e("dt", [t._v("Backend Development")]), e("dd", [t._v("JavaScript/Python/Ruby/PHP"), a("br"), t._v("Node.js/Express.js/Django/Ruby on Rails"), a("br"), t._v("RESTful API/GraphQL API"), a("br"), t._v("MySQL/PostgreSQL/MongoDB")])]), e("div", {
                staticClass: "infoGrop"
            }, [e("dt", [t._v("Blockchain Development")]), e("dd", [t._v("Smart Contract/Solidity/Rust/Python"), a("br"), t._v("Web3.js/Ether.js"), a("br"), t._v("Ethereum/Polygon/Solana/Binance Smart Chain"), a("br"), t._v("DEX/CEX"), ])]), e("div", {
                staticClass: "infoGrop"
            }, [e("dt", [t._v("Other")]), e("dd", [t._v("AWS/Azura/Google Cloud"), a("br"), t._v("Docker/Kubernetes"), a("br"), t._v("GitHub/GitLab/BitBucket")])])])
        }
        , function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("span", {
                staticClass: "buttonRect__label"
            }, [this._v("Resume: Kenzo Suzuki"), a("span", {
                staticClass: "buttonRect__labelNotice"
            }, [this._v("(Full Stack & Blockchain Developer)")])])
        }
        ], !1, null, "17baa3e0", null);
        a.default = d.exports
    }
}]);
