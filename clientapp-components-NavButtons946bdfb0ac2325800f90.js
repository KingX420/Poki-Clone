try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ffd59bfd-a8a1-4333-be7e-9c459581fbe3", e._sentryDebugIdIdentifier = "sentry-dbid-ffd59bfd-a8a1-4333-be7e-9c459581fbe3")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2610, 4810, 5996, 8551], {
        17879: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => l
            });
            n(17402);
            var s = n(40890),
                a = n(18272),
                o = n(95901);

            function l({
                className: e,
                children: t,
                to: n,
                onClick: l,
                target: r,
                title: i,
                rel: d,
                style: c,
                refForwarded: u,
                ariaLabel: f
            }) {
                return "_blank" === r && (d = d ? `noopener ${d}` : "noopener"), (0, o.Y)("a", {
                    className: e,
                    href: n,
                    onClick: e => {
                        l && l(e), !(0, s.xs)(n) || e.defaultPrevented || 0 !== e.button || r || function(e) {
                            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                        }(e) || (e.preventDefault(), (0, a.A)().push(n))
                    },
                    rel: d,
                    target: r,
                    title: i,
                    style: c,
                    ref: u,
                    "aria-label": f,
                    children: t
                })
            }
        },
        55929: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => y
            });
            var s = n(78737),
                a = n(57225),
                o = n(34164),
                l = n(91833),
                r = n(17879),
                i = n(822),
                d = n(89385),
                c = n(98708),
                u = n(88421),
                f = n(11436),
                _ = n(46493),
                h = n(99668),
                b = n(95901);
            const v = (0, a.Ay)({
                resolved: {},
                chunkName: () => "app-components-NavButtonProfile-tsx",
                isReady(e) {
                    const t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: () => n.e(8704).then(n.bind(n, 73757)),
                requireAsync(e) {
                    const t = this.resolve(e);
                    return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                },
                requireSync(e) {
                    const t = this.resolve(e);
                    return n(t)
                },
                resolve: () => 73757
            });

            function y() {
                const e = (0, s.wA)(),
                    t = (0, s.d4)(d.Jk),
                    n = (0, s.d4)(f.Pn),
                    a = (0, s.d4)(u.GO),
                    y = (0, s.d4)(c.K);
                return (0, b.FD)("div", {
                    className: h.navButtons,
                    children: [!t && (0, b.Y)(r.default, {
                        className: (0, o.A)(h.navButtons__btn, h.navButtons__btn_left),
                        to: n,
                        onClick: () => (0, _.F)({
                            category: "home",
                            action: "click"
                        }),
                        title: y.home_icon_alt_text,
                        ariaLabel: y.home_icon_alt_text,
                        children: (0, b.Y)(l.default, {
                            name: "home",
                            className: h.navButtons__homeSVGIcon
                        })
                    }), t && (0, b.Y)(v, {
                        className: h.navButtons__btn
                    }), (0, b.FD)("button", {
                        onClick: () => {
                            e(a ? (0, i.QL)() : (0, i.rf)())
                        },
                        type: "button",
                        className: (0, o.A)("buttonReset", h.navButtons__btn, h.navButtons__btn_right),
                        title: y.search_short,
                        "aria-label": y.search_short,
                        children: [y.search, (0, b.Y)(l.default, {
                            name: "search",
                            className: h.navButtons__lookingGlassSVGIcon
                        })]
                    })]
                })
            }
        },
        91833: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => a
            });
            var s = n(95901);

            function a({
                className: e,
                name: t,
                width: n,
                height: a
            }) {
                return (0, s.Y)("svg", {
                    className: e,
                    width: n,
                    height: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.Y)("use", {
                        xlinkHref: `#${t}Icon`
                    })
                })
            }
        },
        99668: (e, t, n) => {
            n.r(t), n.d(t, {
                navButtons: () => s,
                navButtons__btn: () => a,
                navButtons__btn_left: () => o,
                navButtons__btn_right: () => l,
                navButtons__homeSVGIcon: () => r,
                navButtons__lookingGlassSVGIcon: () => i
            });
            var s = "NuKVRCDKjJRkfpgoOKXi",
                a = "Ms6HEJ826qeso4NBVCoW",
                o = "uYSe40aoLoVVar9d0u6H",
                l = "pMuUqYFsIC6GCbPomoSK",
                r = "aprWdaSScyiJf4Jvmsx9",
                i = "B_5ykBA46kDOxiz_R9wm"
        }
    }
]);
//# sourceMappingURL=client~app-components-NavButtons~946bdfb0ac2325800f90.js.map