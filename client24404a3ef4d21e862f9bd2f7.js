try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        o = (new e.Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "be163f70-3894-4f23-9f80-bb009b5341ce", e._sentryDebugIdIdentifier = "sentry-dbid-be163f70-3894-4f23-9f80-bb009b5341ce")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2440, 2610, 3177, 4715, 4810, 6858, 7202], {
        11434: (e, o, i) => {
            i.r(o), i.d(o, {
                default: () => k,
                familyModeCookieConsentGBNotification: () => b
            });
            var t = i(17402),
                n = i(78737),
                a = i(34164),
                l = i(12331),
                c = i(7696),
                d = i(42891),
                s = i(88800),
                r = i(90385),
                f = i(15049),
                u = i(11436),
                m = i(25341),
                y = i(46493),
                _ = i(36774),
                g = i(61941),
                h = i(95901);
            const p = "familyModeCookieConsentGBNotification",
                b = () => ({
                    notification: {
                        id: p,
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
                const [e, o] = (0, t.useState)(!1), i = (0, n.wA)(), b = (0, n.d4)(r.tM), k = (0, n.d4)(f.Ir), C = (0, n.d4)(f.dV), w = (0, n.d4)(u.Lf), N = (e, o) => {
                    i((0, c.rB)({
                        shown: !0
                    })), i((0, s.oe)({
                        id: p
                    })), o && window.loadTS2(), e && (window.localStorageConsentSet = !0, (0, y.F)({
                        category: "consent",
                        action: "full"
                    }), i((0, d.F8)({
                        consentStatus: _.T2
                    }))), (0, c.S9)({
                        toggle: o
                    }), (0, m.M)({
                        name: "poki_analytics",
                        value: o
                    }), (0, c.LX)({
                        toggle: e
                    }), (0, m.M)({
                        name: "poki_ads_allowed",
                        value: e
                    }), !w || e && o || window.location.reload()
                }, v = e => {
                    N(e, e)
                }, B = () => {
                    (0, y.F)({
                        category: "privacyCenter",
                        action: "pokiAnalytics",
                        label: k ? "off" : "on"
                    }), i((0, c.S9)({
                        toggle: !k
                    })), (0, m.M)({
                        name: "poki_analytics",
                        value: !k
                    })
                }, M = () => {
                    (0, y.F)({
                        category: "privacyCenter",
                        action: "adsAllowed",
                        label: C ? "off" : "on"
                    }), i((0, c.LX)({
                        toggle: !C
                    })), (0, m.M)({
                        name: "poki_ads_allowed",
                        value: !C
                    })
                };
                return e ? (0, h.FD)("div", {
                    className: g.familyModeCookieGBNotification__moreOptions,
                    children: [(0, h.Y)("small", {
                        children: 'Use the toggles below to decide what cookies can be stored on your device. You can change your settings and review them anytime by clicking "Manage Consent" at the bottom of each Poki page.'
                    }), (0, h.FD)("button", {
                        type: "button",
                        className: (0, a.A)("buttonReset", g.familyModeCookieGBNotification__toggleWrapper),
                        onClick: B,
                        children: [(0, h.Y)("h3", {
                            className: g.familyModeCookieGBNotification__label,
                            children: "Opt-in to Poki Analytics"
                        }), (0, h.FD)("label", {
                            className: g.familyModeCookieGBNotification__toggle,
                            "aria-label": "Toggle Poki Analytics on or off",
                            htmlFor: "toggle-pokiAnalytics",
                            children: [(0, h.Y)("input", {
                                type: "checkbox",
                                className: g.familyModeCookieGBNotification__input,
                                checked: k,
                                id: "toggle-pokiAnalytics",
                                onChange: B
                            }), (0, h.Y)("span", {
                                className: g.familyModeCookieGBNotification__toggle__slider
                            })]
                        })]
                    }), (0, h.FD)("button", {
                        type: "button",
                        className: (0, a.A)("buttonReset", g.familyModeCookieGBNotification__toggleWrapper),
                        onClick: M,
                        children: [(0, h.Y)("h3", {
                            className: g.familyModeCookieGBNotification__label,
                            children: "Opt-in to contextual advertisements"
                        }), (0, h.FD)("label", {
                            className: g.familyModeCookieGBNotification__toggle,
                            "aria-label": "Toggle contextual advertisements on or off",
                            htmlFor: "toggle-adsAllowed",
                            children: [(0, h.Y)("input", {
                                type: "checkbox",
                                className: g.familyModeCookieGBNotification__input,
                                checked: C,
                                id: "toggle-adsAllowed",
                                onChange: M
                            }), (0, h.Y)("span", {
                                className: g.familyModeCookieGBNotification__toggle__slider
                            })]
                        })]
                    }), (0, h.Y)(l.default, {
                        sizeSmall: !0,
                        simplified: !0,
                        onClick: () => {
                            N(C, k)
                        },
                        className: g.familyModeCookieGBNotification__fullWidthButton,
                        children: "Save & Continue"
                    })]
                }) : (0, h.FD)(h.FK, {
                    children: [(0, h.Y)("strong", {
                        children: (0, h.Y)("small", {
                            children: "Please check with your parents if you are under 13!"
                        })
                    }), (0, h.Y)("small", {
                        children: "At Poki, we believe in a free to play experience and in limiting the personal data we process about you. To improve your experience, we place our own analytical cookies. To keep our website free, we use non-personalized advertising cookies (meaning any ads you see are not based on profiling you), and anti-fraud cookies."
                    }), (0, h.FD)("small", {
                        children: ["Please click ", (0, h.Y)("a", {
                            href: b,
                            target: "_blank",
                            rel: "noreferrer",
                            children: "here"
                        }), " to learn more about the cookies we use. If you are under the age of 13, you need to check with your parents before clicking on the below."]
                    }), (0, h.Y)(l.default, {
                        sizeSmall: !0,
                        simplified: !0,
                        secondary: !0,
                        className: g.familyModeCookieGBNotification__fullWidthButton,
                        onClick: () => {
                            o(!e)
                        },
                        children: "More Options"
                    }), (0, h.FD)("div", {
                        className: g.familyModeCookieGBNotification__buttons,
                        children: [(0, h.Y)(l.default, {
                            sizeSmall: !0,
                            simplified: !0,
                            onClick: () => {
                                v(!0)
                            },
                            className: g.familyModeCookieGBNotification__fullWidthButton,
                            children: "Accept all optional Cookies"
                        }), (0, h.Y)(l.default, {
                            sizeSmall: !0,
                            simplified: !0,
                            onClick: () => {
                                v(!1)
                            },
                            className: g.familyModeCookieGBNotification__fullWidthButton,
                            children: "Reject all optional Cookies"
                        })]
                    })]
                })
            }
        },
        12331: (e, o, i) => {
            i.r(o), i.d(o, {
                default: () => d
            });
            var t = i(34164),
                n = i(91833),
                a = i(17879),
                l = i(91278),
                c = i(95901);

            function d({
                children: e,
                className: o,
                secondary: i,
                submit: d = !1,
                to: s,
                onClick: r,
                rel: f,
                target: u,
                icon: m,
                iconLeft: y = !1,
                sizeSmall: _ = !1,
                simplified: g = !1,
                disabled: h,
                value: p,
                name: b
            }) {
                const k = (0, c.FD)(c.FK, {
                        children: [y && m && (0, c.Y)(n.default, {
                            name: m
                        }), m ? (0, c.Y)("span", {
                            className: l.button__text,
                            children: e
                        }) : e, !y && m && (0, c.Y)(n.default, {
                            name: m
                        })]
                    }),
                    C = (0, c.FD)(c.FK, {
                        children: [(0, c.Y)("div", {
                            className: l.button__background
                        }), (0, c.Y)("div", {
                            className: l.button__inner,
                            children: k
                        }), (0, c.Y)("div", {
                            className: l.button__spacer,
                            children: k
                        })]
                    }),
                    w = (0, t.A)("buttonReset", l.button, {
                        [l.button_simplified]: g,
                        [l.button_secondary]: i,
                        [l.button_small]: _,
                        [l.button_iconLeft]: y
                    }, o);
                return s ? (0, c.Y)(a.default, {
                    rel: f,
                    to: s,
                    target: u,
                    className: w,
                    onClick: r,
                    children: C
                }) : (0, c.Y)("button", {
                    type: d ? "submit" : "button",
                    className: w,
                    disabled: h,
                    onClick: r,
                    value: p,
                    name: b,
                    children: C
                })
            }
        },
        17879: (e, o, i) => {
            i.r(o), i.d(o, {
                default: () => l
            });
            i(17402);
            var t = i(40890),
                n = i(18272),
                a = i(95901);

            function l({
                className: e,
                children: o,
                to: i,
                onClick: l,
                target: c,
                title: d,
                rel: s,
                style: r,
                refForwarded: f,
                ariaLabel: u
            }) {
                return "_blank" === c && (s = s ? `noopener ${s}` : "noopener"), (0, a.Y)("a", {
                    className: e,
                    href: i,
                    onClick: e => {
                        l && l(e), !(0, t.xs)(i) || e.defaultPrevented || 0 !== e.button || c || function(e) {
                            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                        }(e) || (e.preventDefault(), (0, n.A)().push(i))
                    },
                    rel: s,
                    target: c,
                    title: d,
                    style: r,
                    ref: f,
                    "aria-label": u,
                    children: o
                })
            }
        },
        25341: (e, o, i) => {
            function t({
                name: e,
                value: o
            }) {
                document.cookie = `${e}=${o}; path=/; max-age=1704085200; samesite=lax`
            }
            i.d(o, {
                M: () => t
            })
        },
        42440: (e, o, i) => {
            i.r(o), i.d(o, {
                initiatePrivacyCenterNotificationEpic: () => b,
                isFamilyFriendlyAdsNotificationEpic: () => k
            });
            var t = i(61701),
                n = i(38975),
                a = i(81160),
                l = i(59099),
                c = i(8767),
                d = i(29079),
                s = i(42891),
                r = i(88800),
                f = i(7696),
                u = i(98708),
                m = i(91323),
                y = i(15049),
                _ = i(18272),
                g = i(40890),
                h = i(90385),
                p = i(11434);

            function b(e, o) {
                if ("undefined" == typeof window) return t.w;
                const i = (0, s.wu)(o.value),
                    l = (0, h.K5)(o.value);
                if ("CA" !== i || "privacy" === l) return t.w;
                if ((0, y.U4)(o.value)) return t.w;
                const c = "privacyCanadaNotification";
                return e.pipe((0, d.g)(s.Xy.type), (0, n.s)(1), (0, a.T)((() => (0, r.Gg)({
                    notification: {
                        id: c,
                        title: "Choose your cookies in the Privacy Center",
                        titleIcon: {
                            svgName: "lock",
                            width: 36,
                            height: 36
                        },
                        childComponent: {
                            name: "privacyCenter/PrivacyCenterCanadaNotification"
                        },
                        muteAfterClose: !0,
                        actions: [{
                            title: "To Privacy Center",
                            onClick: () => {
                                const e = (0, m.Gd)(o.value),
                                    i = (0, g.AO)(e, "privacy", "");
                                (0, _.A)().push(i), window.store.dispatch((0, r.oe)({
                                    id: c
                                }))
                            }
                        }]
                    }
                }))))
            }

            function k(e, o) {
                if ("undefined" == typeof window) return t.w;
                if (!(0, y.lb)(o.value)) return t.w;
                const i = (0, s.wu)(o.value);
                if ((0, y.VH)(o.value)) return t.w;
                if ("GB" === i) return e.pipe((0, d.g)(s.Xy.type), (0, n.s)(1), (0, l.M)((() => {
                    window ? .store ? .dispatch((0, r.Gg)((0, p.familyModeCookieConsentGBNotification)()))
                })), (0, c.w)());
                const a = (0, u.K)(o.value);
                return e.pipe((0, d.g)(s.Xy.type), (0, n.s)(1), (0, l.M)((() => {
                    window ? .store ? .dispatch((0, r.Gg)({
                        notification: {
                            title: a.family_mode_title,
                            titleIcon: {
                                svgName: "lock",
                                width: 36,
                                height: 36
                            },
                            childComponent: {
                                name: "FamilyModeCookieNotification"
                            },
                            autoExpire: 1e4,
                            onExplicitClose: () => {
                                window ? .store ? .dispatch((0, f.rB)({
                                    shown: !0
                                }))
                            }
                        }
                    }))
                })), (0, c.w)())
            }
        },
        61941: (e, o, i) => {
            i.r(o), i.d(o, {
                familyModeCookieGBNotification__buttons: () => t,
                familyModeCookieGBNotification__fullWidthButton: () => n,
                familyModeCookieGBNotification__input: () => a,
                familyModeCookieGBNotification__label: () => l,
                familyModeCookieGBNotification__moreOptions: () => c,
                familyModeCookieGBNotification__toggle: () => d,
                familyModeCookieGBNotification__toggleWrapper: () => s,
                familyModeCookieGBNotification__toggle__slider: () => r
            });
            var t = "d_DmuPsXDqfP77VXDFjg",
                n = "iVrAj29wqK0ZABkf8f3L",
                a = "GaaLeCRZn_VbfBtVimO1",
                l = "CdaRGBjd1rgs4_qvLuby",
                c = "_gv64sEAxjHYEnyWUbgd",
                d = "sFVfo08BSK3Q4hVOeWFD",
                s = "lBoDCt5y_q8wpYa4cSPp",
                r = "KYiB_uvdlQx4jd5658_K"
        },
        91278: (e, o, i) => {
            i.r(o), i.d(o, {
                button: () => t,
                buttonBackgroundPulse: () => n,
                buttonInnerPulse: () => a,
                button__background: () => l,
                button__inner: () => c,
                button__spacer: () => d,
                button__text: () => s,
                button_iconLeft: () => r,
                button_secondary: () => f,
                button_simplified: () => u,
                button_small: () => m
            });
            var t = "LxfzsgIFAyWR1n45HIzy",
                n = "cdPa9NsT2c88OEdQ1mTj",
                a = "wQIiM5L19MHiau69g6It",
                l = "KZsD_IviR3LdyA5eEP2Z",
                c = "TPKRM9KtuVyey8GtLkuW",
                d = "QJreC1uqlXz6gH09VlhP",
                s = "FXfieYW9mRepYdhrfxeA",
                r = "uRQvy9BJOnhfTfQBTJMV",
                f = "snryCgav2Soo95rzHejY",
                u = "eCsNx5j10H4SMXc9ZfIa",
                m = "OsmtBQrXW9qOmZfG_ZCg"
        },
        91833: (e, o, i) => {
            i.r(o), i.d(o, {
                default: () => n
            });
            var t = i(95901);

            function n({
                className: e,
                name: o,
                width: i,
                height: n
            }) {
                return (0, t.Y)("svg", {
                    className: e,
                    width: i,
                    height: n,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, t.Y)("use", {
                        xlinkHref: `#${o}Icon`
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=client~2440~4a3ef4d21e862f9bd2f7.js.map