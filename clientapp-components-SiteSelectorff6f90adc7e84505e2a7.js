try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "381e8882-84b1-4b40-9fd2-f84c47bde19a", e._sentryDebugIdIdentifier = "sentry-dbid-381e8882-84b1-4b40-9fd2-f84c47bde19a")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [368, 2791, 4348, 4810], {
        6973: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => d
            });
            var n = l(17402),
                o = l(78737),
                s = l(11436),
                r = l(90385),
                i = l(32549),
                a = l(95901);
            const c = "default";

            function d({
                children: e,
                placeholder: t,
                className: l,
                bot: d = !1,
                onVisible: u,
                navigationAware: f
            }) {
                const h = (0, o.d4)(s.E6),
                    _ = (0, o.d4)(r.Xk),
                    g = (0, n.useRef)(null),
                    [m, b] = (0, n.useState)(!1);
                return f && "POP" === h && !_ || d ? e : ((0, n.useEffect)((() => {
                    const e = g.current;
                    return e && (0, i.lB)(c, e, (() => {
                        b(!0), "function" == typeof u && u()
                    })), () => {
                        e && (0, i.OV)(c, e)
                    }
                }), [g.current]), m ? e : (0, a.Y)("div", {
                    className: l,
                    ref: g,
                    children: t || null
                }))
            }
        },
        61812: (e, t, l) => {
            function n(e) {
                document.cookie = `poki_language_choice=${e}; domain=poki.com; path=/; max-age=7776000; samesite=lax`
            }
            l.d(t, {
                A: () => n
            })
        },
        84576: (e, t, l) => {
            l.r(t), l.d(t, {
                siteSelector: () => n,
                siteSelector__close: () => o,
                siteSelector__dropdown: () => s,
                siteSelector__dropdown_visible: () => r,
                siteSelector__flag: () => i,
                siteSelector__header: () => a,
                siteSelector__link: () => c,
                siteSelector__trigger: () => d,
                siteSelector_mobile: () => u
            });
            var n = "OpF4NXmnwNP6RxPvobuQ",
                o = "DovojMSK_z9_OBlOiZ6Q",
                s = "XFRdsseuTecILNGhZkD7",
                r = "SL786I_Z5WZ4FkfMNOyC",
                i = "XsV06PdBuhK9jfL4DVBm",
                a = "nVr20T58FFNNPkgQz8ME",
                c = "tko1gSDdFM6HXc1XCDaq",
                d = "K7UnIcZ3rTX_DLbByXPZ",
                u = "MLqVrXeq8l2alt4Gnx7r"
        },
        91833: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => o
            });
            var n = l(95901);

            function o({
                className: e,
                name: t,
                width: l,
                height: o
            }) {
                return (0, n.Y)("svg", {
                    className: e,
                    width: l,
                    height: o,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.Y)("use", {
                        xlinkHref: `#${t}Icon`
                    })
                })
            }
        },
        98949: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => y
            });
            var n = l(17402),
                o = l(78737),
                s = l(57225),
                r = l(34164),
                i = l(91833),
                a = l(6973),
                c = l(90385),
                d = l(91323),
                u = l(98708),
                f = l(25362),
                h = l(84576),
                _ = l(61812),
                g = l(95901);
            const m = (0, s.Ay)({
                resolved: {},
                chunkName: () => "app-components-Flag-tsx",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!l.m[t]
                },
                importAsync: () => l.e(5824).then(l.bind(l, 76605)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return l(t)
                },
                resolve: () => 76605
            });

            function b({
                href: e,
                lang: t
            }) {
                e ? .includes("poki.com/") && (0, _.A)(t)
            }

            function p(e) {
                return [...e].sort(((e, t) => e.languageName.toLowerCase().localeCompare(t.languageName.toLowerCase())))
            }

            function y() {
                const [e, t] = (0, n.useState)(!1), {
                    isMobile: l
                } = (0, n.useContext)(f.F), s = (0, o.d4)(c.nK), _ = (0, o.d4)(d.Gd), y = (0, o.d4)(d.n), S = (0, o.d4)(u.K);
                if (47 === _.id) return;
                const N = _.iso_lang.replace("-", "_"),
                    w = (0, n.useMemo)((() => function({
                        alternates: e,
                        sites: t
                    }) {
                        const l = e => (0, g.Y)(m, {
                            className: h.siteSelector__flag,
                            flag: e.replace("-", "_")
                        });
                        if (e && e.length) return p(e).map((({
                            href: e,
                            hrefLang: t,
                            lang: n,
                            languageName: o
                        }) => {
                            const s = l(t);
                            return (0, g.FD)("a", {
                                className: h.siteSelector__link,
                                href: e,
                                onClick: () => b({
                                    href: e,
                                    lang: n
                                }),
                                children: [s, o]
                            }, t)
                        }));
                        const n = [];
                        return p(Object.values(t)).forEach((({
                            domain: e,
                            domain_title: t,
                            iso_lang: o,
                            lang: s,
                            languageName: r,
                            paths: i
                        }) => {
                            const a = l(o),
                                c = `https://${e}${i?.prefix}`;
                            n.push((0, g.FD)("a", {
                                className: h.siteSelector__link,
                                href: c,
                                title: t,
                                onClick: () => b({
                                    href: c,
                                    lang: s
                                }),
                                children: [a, r]
                            }, o))
                        })), n
                    }({
                        alternates: s,
                        sites: y
                    })), [s, y]),
                    v = l && e || !l;
                return (0, g.FD)("div", {
                    className: (0, r.A)(h.siteSelector, {
                        [h.siteSelector_mobile]: l
                    }),
                    children: [(0, g.Y)("button", {
                        className: h.siteSelector__trigger,
                        onClick: () => {
                            l && (document.body.style.overflow = "hidden", t(!0))
                        },
                        "aria-label": "Choose language",
                        type: "button",
                        children: (0, g.Y)(a.default, {
                            children: (0, g.Y)(m, {
                                flag: N,
                                children: "Choose language"
                            })
                        })
                    }), (0, g.FD)("div", {
                        className: (0, r.A)(h.siteSelector__dropdown, {
                            [h.siteSelector__dropdown_visible]: e
                        }),
                        children: [v && (0, g.FD)(g.FK, {
                            children: [(0, g.Y)("h6", {
                                className: h.siteSelector__header,
                                children: S.select_language
                            }), (0, g.Y)("button", {
                                className: h.siteSelector__close,
                                onClick: () => {
                                    document.body.style.overflow = "", t(!1)
                                },
                                "aria-label": "Close",
                                type: "button",
                                children: (0, g.Y)(i.default, {
                                    name: "close",
                                    width: "20",
                                    height: "20"
                                })
                            })]
                        }), w.length > 0 ? w : (0, g.Y)("span", {
                            role: "img",
                            "aria-label": "No other options",
                            children: "🚫😠⁉️ 😉🎮"
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-SiteSelector~ff6f90adc7e84505e2a7.js.map