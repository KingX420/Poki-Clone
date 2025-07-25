try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        o = (new e.Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "dfb19fc5-2d6d-4146-a79e-3a7962af8789", e._sentryDebugIdIdentifier = "sentry-dbid-dfb19fc5-2d6d-4146-a79e-3a7962af8789")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [219, 2610, 3177, 4715, 4810, 6858, 7202, 7603, 7994, 9010], {
        11434: (e, o, t) => {
            t.r(o), t.d(o, {
                default: () => k,
                familyModeCookieConsentGBNotification: () => p
            });
            var i = t(17402),
                n = t(78737),
                a = t(34164),
                l = t(12331),
                s = t(7696),
                r = t(42891),
                c = t(88800),
                d = t(90385),
                f = t(15049),
                u = t(11436),
                _ = t(25341),
                m = t(46493),
                h = t(36774),
                b = t(61941),
                g = t(95901);
            const y = "familyModeCookieConsentGBNotification",
                p = () => ({
                    notification: {
                        id: y,
                        title: "Cookies",
                        titleIcon: {
                            svgName: "lock",
                            width: 36,
                            height: 36
                        },
                        childComponent: {
                            name: "FamilyModeCookieGBNotification"
                        },
                        blocking: !0,
                        showCloseButtonInHeader: !1
                    }
                });

            function k() {
                const [e, o] = (0, i.useState)(!1), t = (0, n.wA)(), p = (0, n.d4)(d.tM), k = (0, n.d4)(f.Ir), N = (0, n.d4)(f.dV), C = (0, n.d4)(u.Lf), v = (e, o) => {
                    t((0, s.rB)({
                        shown: !0
                    })), t((0, c.oe)({
                        id: y
                    })), o && window.loadTS2(), e && (window.localStorageConsentSet = !0, (0, m.F)({
                        category: "consent",
                        action: "full"
                    }), t((0, r.F8)({
                        consentStatus: h.T2
                    }))), (0, s.S9)({
                        toggle: o
                    }), (0, _.M)({
                        name: "poki_analytics",
                        value: o
                    }), (0, s.LX)({
                        toggle: e
                    }), (0, _.M)({
                        name: "poki_ads_allowed",
                        value: e
                    }), !C || e && o || window.location.reload()
                }, w = e => {
                    v(e, e)
                }, Y = () => {
                    (0, m.F)({
                        category: "privacyCenter",
                        action: "pokiAnalytics",
                        label: k ? "off" : "on"
                    }), t((0, s.S9)({
                        toggle: !k
                    })), (0, _.M)({
                        name: "poki_analytics",
                        value: !k
                    })
                }, B = () => {
                    (0, m.F)({
                        category: "privacyCenter",
                        action: "adsAllowed",
                        label: N ? "off" : "on"
                    }), t((0, s.LX)({
                        toggle: !N
                    })), (0, _.M)({
                        name: "poki_ads_allowed",
                        value: !N
                    })
                };
                return e ? (0, g.FD)("div", {
                    className: b.familyModeCookieGBNotification__moreOptions,
                    children: [(0, g.Y)("small", {
                        children: 'Use the toggles below to decide what cookies can be stored on your device. You can change your settings and review them anytime by clicking "Manage Consent" at the bottom of each Poki page.'
                    }), (0, g.FD)("button", {
                        type: "button",
                        className: (0, a.A)("buttonReset", b.familyModeCookieGBNotification__toggleWrapper),
                        onClick: Y,
                        children: [(0, g.Y)("h3", {
                            className: b.familyModeCookieGBNotification__label,
                            children: "Opt-in to Poki Analytics"
                        }), (0, g.FD)("label", {
                            className: b.familyModeCookieGBNotification__toggle,
                            "aria-label": "Toggle Poki Analytics on or off",
                            htmlFor: "toggle-pokiAnalytics",
                            children: [(0, g.Y)("input", {
                                type: "checkbox",
                                className: b.familyModeCookieGBNotification__input,
                                checked: k,
                                id: "toggle-pokiAnalytics",
                                onChange: Y
                            }), (0, g.Y)("span", {
                                className: b.familyModeCookieGBNotification__toggle__slider
                            })]
                        })]
                    }), (0, g.FD)("button", {
                        type: "button",
                        className: (0, a.A)("buttonReset", b.familyModeCookieGBNotification__toggleWrapper),
                        onClick: B,
                        children: [(0, g.Y)("h3", {
                            className: b.familyModeCookieGBNotification__label,
                            children: "Opt-in to contextual advertisements"
                        }), (0, g.FD)("label", {
                            className: b.familyModeCookieGBNotification__toggle,
                            "aria-label": "Toggle contextual advertisements on or off",
                            htmlFor: "toggle-adsAllowed",
                            children: [(0, g.Y)("input", {
                                type: "checkbox",
                                className: b.familyModeCookieGBNotification__input,
                                checked: N,
                                id: "toggle-adsAllowed",
                                onChange: B
                            }), (0, g.Y)("span", {
                                className: b.familyModeCookieGBNotification__toggle__slider
                            })]
                        })]
                    }), (0, g.Y)(l.default, {
                        sizeSmall: !0,
                        simplified: !0,
                        onClick: () => {
                            v(N, k)
                        },
                        className: b.familyModeCookieGBNotification__fullWidthButton,
                        children: "Save & Continue"
                    })]
                }) : (0, g.FD)(g.FK, {
                    children: [(0, g.Y)("strong", {
                        children: (0, g.Y)("small", {
                            children: "Please check with your parents if you are under 13!"
                        })
                    }), (0, g.Y)("small", {
                        children: "At Poki, we believe in a free to play experience and in limiting the personal data we process about you. To improve your experience, we place our own analytical cookies. To keep our website free, we use non-personalized advertising cookies (meaning any ads you see are not based on profiling you), and anti-fraud cookies."
                    }), (0, g.FD)("small", {
                        children: ["Please click ", (0, g.Y)("a", {
                            href: p,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "here"
                        }), " to learn more about the cookies we use. If you are under the age of 13, you need to check with your parents before clicking on the below."]
                    }), (0, g.Y)(l.default, {
                        sizeSmall: !0,
                        simplified: !0,
                        secondary: !0,
                        className: b.familyModeCookieGBNotification__fullWidthButton,
                        onClick: () => {
                            o(!e)
                        },
                        children: "More Options"
                    }), (0, g.FD)("div", {
                        className: b.familyModeCookieGBNotification__buttons,
                        children: [(0, g.Y)(l.default, {
                            sizeSmall: !0,
                            simplified: !0,
                            onClick: () => {
                                w(!0)
                            },
                            className: b.familyModeCookieGBNotification__fullWidthButton,
                            children: "Accept all optional Cookies"
                        }), (0, g.Y)(l.default, {
                            sizeSmall: !0,
                            simplified: !0,
                            onClick: () => {
                                w(!1)
                            },
                            className: b.familyModeCookieGBNotification__fullWidthButton,
                            children: "Reject all optional Cookies"
                        })]
                    })]
                })
            }
        },
        12331: (e, o, t) => {
            t.r(o), t.d(o, {
                default: () => r
            });
            var i = t(34164),
                n = t(91833),
                a = t(17879),
                l = t(91278),
                s = t(95901);

            function r({
                children: e,
                className: o,
                secondary: t,
                submit: r = !1,
                to: c,
                onClick: d,
                rel: f,
                target: u,
                icon: _,
                iconLeft: m = !1,
                sizeSmall: h = !1,
                simplified: b = !1,
                disabled: g,
                value: y,
                name: p
            }) {
                const k = (0, s.FD)(s.FK, {
                        children: [m && _ && (0, s.Y)(n.default, {
                            name: _
                        }), _ ? (0, s.Y)("span", {
                            className: l.button__text,
                            children: e
                        }) : e, !m && _ && (0, s.Y)(n.default, {
                            name: _
                        })]
                    }),
                    N = (0, s.FD)(s.FK, {
                        children: [(0, s.Y)("div", {
                            className: l.button__background
                        }), (0, s.Y)("div", {
                            className: l.button__inner,
                            children: k
                        }), (0, s.Y)("div", {
                            className: l.button__spacer,
                            children: k
                        })]
                    }),
                    C = (0, i.A)("buttonReset", l.button, {
                        [l.button_simplified]: b,
                        [l.button_secondary]: t,
                        [l.button_small]: h,
                        [l.button_iconLeft]: m
                    }, o);
                return c ? (0, s.Y)(a.default, {
                    rel: f,
                    to: c,
                    target: u,
                    className: C,
                    onClick: d,
                    children: N
                }) : (0, s.Y)("button", {
                    type: r ? "submit" : "button",
                    className: C,
                    disabled: g,
                    onClick: d,
                    value: y,
                    name: p,
                    children: N
                })
            }
        },
        17879: (e, o, t) => {
            t.r(o), t.d(o, {
                default: () => l
            });
            t(17402);
            var i = t(40890),
                n = t(18272),
                a = t(95901);

            function l({
                className: e,
                children: o,
                to: t,
                onClick: l,
                target: s,
                title: r,
                rel: c,
                style: d,
                refForwarded: f,
                ariaLabel: u
            }) {
                return "_blank" === s && (c = c ? `noopener ${c}` : "noopener"), (0, a.Y)("a", {
                    className: e,
                    href: t,
                    onClick: e => {
                        l && l(e), !(0, i.xs)(t) || e.defaultPrevented || 0 !== e.button || s || function(e) {
                            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                        }(e) || (e.preventDefault(), (0, n.A)().push(t))
                    },
                    rel: c,
                    target: s,
                    title: r,
                    style: d,
                    ref: f,
                    "aria-label": u,
                    children: o
                })
            }
        },
        23030: (e, o, t) => {
            t.r(o), t.d(o, {
                logo: () => i
            });
            var i = "C9JUSu6VaKM5y0Kq4sg2"
        },
        25341: (e, o, t) => {
            function i({
                name: e,
                value: o
            }) {
                document.cookie = `${e}=${o}; path=/; max-age=1704085200; samesite=lax`
            }
            t.d(o, {
                M: () => i
            })
        },
        36877: (e, o, t) => {
            t.r(o), t.d(o, {
                footer: () => i,
                footer__brand: () => n,
                footer__content: () => a,
                footer__icons: () => l,
                footer__link: () => s,
                footer__links: () => r,
                footer__logo: () => c,
                footer__mission: () => d,
                footer__version: () => f
            });
            var i = "q3dppPisdqD1gwCqXrlY",
                n = "nFfRxeFvFwQzS_6hLEl2",
                a = "B3Ykv32PAQzAWDm8ZLxP",
                l = "j4t7TebV_3KylFyYJHVh",
                s = "qMWRUBS9td2nFBRm5ow7",
                r = "mXTmsEBqPqY4oZrhcK6R",
                c = "nDlYEPwiwt1Ocy1EY4QY",
                d = "jX1Y8HMEoQ0MUS7LKDJi",
                f = "RWjlLpskajlr_GQxk6b1"
        },
        53978: (e, o, t) => {
            t.r(o), t.d(o, {
                default: () => v
            });
            var i = t(17402),
                n = t(78737),
                a = t(57225),
                l = t(34164),
                s = t(25362),
                r = t(58686),
                c = t(17879),
                d = t(90385),
                f = t(42891),
                u = t(15049),
                _ = t(53210),
                m = t(98708),
                h = t(88800),
                b = t(5403),
                g = t(11434),
                y = t(36877),
                p = t(95901);
            const k = (0, a.Ay)({
                resolved: {},
                chunkName: () => "app-components-SiteSelector-tsx",
                isReady(e) {
                    const o = this.resolve(e);
                    return !0 === this.resolved[o] && !!t.m[o]
                },
                importAsync: () => t.e(4348).then(t.bind(t, 98949)),
                requireAsync(e) {
                    const o = this.resolve(e);
                    return this.resolved[o] = !1, this.importAsync(e).then((e => (this.resolved[o] = !0, e)))
                },
                requireSync(e) {
                    const o = this.resolve(e);
                    return t(o)
                },
                resolve: () => 98949
            });

            function N() {
                window.__tcfapi("displayConsentUi", 2, (() => {}))
            }

            function C() {
                window.__uspapi("displayUspUi")
            }

            function v() {
                const [e, o] = (0, i.useState)(null), t = (0, n.wA)(), {
                    isMobile: a
                } = (0, i.useContext)(s.F), v = (0, n.d4)(f.qk), w = (0, n.d4)(f.oJ), Y = (0, n.d4)(d.TI), B = (0, n.d4)(_.c), M = (0, n.d4)(_.p), D = (0, n.d4)(m.K), A = (0, n.d4)(u.lb), F = (0, n.d4)(f.wu), G = `Poki - ${M||`main - ${"75bcf2398d3fb2a92281989653952fcadc61081a".substring(0,6)}`}  |  SDK - ${B?B.substring(0,6):"v2"}`;
                return (0, i.useEffect)((() => {
                    o((0, p.Y)(k, {}))
                }), []), (0, p.FD)("footer", {
                    className: y.footer,
                    children: [(0, p.FD)("div", {
                        className: y.footer__content,
                        children: [(0, p.FD)("div", {
                            className: y.footer__brand,
                            children: [(0, p.Y)("div", {
                                className: y.footer__logo,
                                children: (0, p.Y)(r.default, {
                                    title: D.footer_logo_alt_text,
                                    ariaLabel: D.footer_logo_alt_text,
                                    external: !0,
                                    to: "https://about.poki.com/"
                                })
                            }), (0, p.Y)("span", {
                                className: y.footer__mission,
                                children: "Let the world play"
                            })]
                        }), (0, p.FD)("div", {
                            className: y.footer__links,
                            children: [v && !A && (0, p.FD)("button", {
                                onClick: N,
                                className: y.footer__link,
                                type: "button",
                                children: [(0, p.Y)("span", {
                                    role: "img",
                                    "aria-label": D.cookie,
                                    children: "⚙️"
                                }), " ", D.cookie]
                            }), w && (0, p.FD)("button", {
                                onClick: C,
                                className: y.footer__link,
                                type: "button",
                                children: [(0, p.Y)("span", {
                                    role: "img",
                                    "aria-label": "Do Not Sell My Data",
                                    children: "⚙️"
                                }), " ", "Do Not Sell My Data"]
                            }), "GB" === F && (0, p.Y)("button", {
                                onClick: function() {
                                    t((0, b.N)({
                                        forceReload: !0
                                    })), t((0, h.Gg)((0, g.familyModeCookieConsentGBNotification)()))
                                },
                                className: y.footer__link,
                                type: "button",
                                children: "Manage Consent"
                            }), Y.map((e => (0, p.Y)(c.default, {
                                className: y.footer__link,
                                to: e.url,
                                target: e.external ? "_blank" : void 0,
                                rel: e.external ? "nofollow" : void 0,
                                children: e.label
                            }, e.label)))]
                        }), (0, p.Y)("div", {
                            className: y.footer__icons,
                            children: e
                        })]
                    }), (0, p.Y)("button", {
                        type: "button",
                        onClick: function() {
                            if (!navigator.clipboard) return;
                            const e = `\nUser Agent: ${navigator.userAgent}\nExperiment ID: ${M||"main"}\nGit SHA: 75bcf2398d3fb2a92281989653952fcadc61081a\nSDK Version: ${B||"v2"}\nMobile: ${a}\nIs Family Mode: ${A}\nCookie Consent Needed: ${v}\nCountry: ${window.pokiCountry||"N/A"}\n`;
                            navigator.clipboard.writeText(e)
                        },
                        className: (0, l.A)("buttonReset", y.footer__version),
                        children: G
                    })]
                })
            }
        },
        58686: (e, o, t) => {
            t.r(o), t.d(o, {
                default: () => u
            });
            var i = t(78737),
                n = t(34164),
                a = t(91833),
                l = t(17879),
                s = t(90385),
                r = t(46493),
                c = t(23030),
                d = t(97454),
                f = t(95901);
            const u = function({
                className: e,
                external: o = !1,
                favicon: t = !1,
                to: u,
                title: _,
                ariaLabel: m = "Poki"
            }) {
                const h = (0, i.d4)(s.K5),
                    b = (0, i.d4)(d.Lb),
                    g = () => {
                        (0, r.F)({
                            category: "logo",
                            action: "click",
                            label: h,
                            data: {
                                path: u
                            },
                            options: {
                                interaction: !0
                            }
                        })
                    };
                let y = t ? (0, f.Y)(a.default, {
                    name: "fav",
                    height: "36",
                    width: "36"
                }) : (0, f.Y)(a.default, {
                    name: "poki",
                    width: "100%",
                    height: "100%"
                });
                if (b) {
                    const e = b.url;
                    y = (0, f.Y)("img", {
                        src: e,
                        alt: "Poki",
                        style: b.style
                    })
                }
                const p = (0, n.A)(c.logo, e);
                return u ? (0, f.Y)(l.default, {
                    className: p,
                    to: u,
                    target: o ? "_blank" : void 0,
                    title: _,
                    onClick: g,
                    ariaLabel: m,
                    children: y
                }) : (0, f.Y)("span", {
                    className: p,
                    children: y
                })
            }
        },
        61941: (e, o, t) => {
            t.r(o), t.d(o, {
                familyModeCookieGBNotification__buttons: () => i,
                familyModeCookieGBNotification__fullWidthButton: () => n,
                familyModeCookieGBNotification__input: () => a,
                familyModeCookieGBNotification__label: () => l,
                familyModeCookieGBNotification__moreOptions: () => s,
                familyModeCookieGBNotification__toggle: () => r,
                familyModeCookieGBNotification__toggleWrapper: () => c,
                familyModeCookieGBNotification__toggle__slider: () => d
            });
            var i = "d_DmuPsXDqfP77VXDFjg",
                n = "iVrAj29wqK0ZABkf8f3L",
                a = "GaaLeCRZn_VbfBtVimO1",
                l = "CdaRGBjd1rgs4_qvLuby",
                s = "_gv64sEAxjHYEnyWUbgd",
                r = "sFVfo08BSK3Q4hVOeWFD",
                c = "lBoDCt5y_q8wpYa4cSPp",
                d = "KYiB_uvdlQx4jd5658_K"
        },
        91278: (e, o, t) => {
            t.r(o), t.d(o, {
                button: () => i,
                buttonBackgroundPulse: () => n,
                buttonInnerPulse: () => a,
                button__background: () => l,
                button__inner: () => s,
                button__spacer: () => r,
                button__text: () => c,
                button_iconLeft: () => d,
                button_secondary: () => f,
                button_simplified: () => u,
                button_small: () => _
            });
            var i = "LxfzsgIFAyWR1n45HIzy",
                n = "cdPa9NsT2c88OEdQ1mTj",
                a = "wQIiM5L19MHiau69g6It",
                l = "KZsD_IviR3LdyA5eEP2Z",
                s = "TPKRM9KtuVyey8GtLkuW",
                r = "QJreC1uqlXz6gH09VlhP",
                c = "FXfieYW9mRepYdhrfxeA",
                d = "uRQvy9BJOnhfTfQBTJMV",
                f = "snryCgav2Soo95rzHejY",
                u = "eCsNx5j10H4SMXc9ZfIa",
                _ = "OsmtBQrXW9qOmZfG_ZCg"
        },
        91833: (e, o, t) => {
            t.r(o), t.d(o, {
                default: () => n
            });
            var i = t(95901);

            function n({
                className: e,
                name: o,
                width: t,
                height: n
            }) {
                return (0, i.Y)("svg", {
                    className: e,
                    width: t,
                    height: n,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.Y)("use", {
                        xlinkHref: `#${o}Icon`
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-Footer~050d24dfdae748eeb928.js.map