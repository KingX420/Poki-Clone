try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "21cbdf5e-d262-46ad-ab62-54b8a0bac5a2", e._sentryDebugIdIdentifier = "sentry-dbid-21cbdf5e-d262-46ad-ab62-54b8a0bac5a2")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2610, 4810, 7603, 7994], {
        17879: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => i
            });
            a(17402);
            var l = a(40890),
                n = a(18272),
                d = a(95901);

            function i({
                className: e,
                children: t,
                to: a,
                onClick: i,
                target: o,
                title: r,
                rel: s,
                style: f,
                refForwarded: c,
                ariaLabel: u
            }) {
                return "_blank" === o && (s = s ? `noopener ${s}` : "noopener"), (0, d.Y)("a", {
                    className: e,
                    href: a,
                    onClick: e => {
                        i && i(e), !(0, l.xs)(a) || e.defaultPrevented || 0 !== e.button || o || function(e) {
                            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                        }(e) || (e.preventDefault(), (0, n.A)().push(a))
                    },
                    rel: s,
                    target: o,
                    title: r,
                    style: f,
                    ref: c,
                    "aria-label": u,
                    children: t
                })
            }
        },
        23030: (e, t, a) => {
            a.r(t), a.d(t, {
                logo: () => l
            });
            var l = "C9JUSu6VaKM5y0Kq4sg2"
        },
        58686: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => u
            });
            var l = a(78737),
                n = a(34164),
                d = a(91833),
                i = a(17879),
                o = a(90385),
                r = a(46493),
                s = a(23030),
                f = a(97454),
                c = a(95901);
            const u = function({
                className: e,
                external: t = !1,
                favicon: a = !1,
                to: u,
                title: b,
                ariaLabel: g = "Poki"
            }) {
                const h = (0, l.d4)(o.K5),
                    y = (0, l.d4)(f.Lb),
                    _ = () => {
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
                let p = a ? (0, c.Y)(d.default, {
                    name: "fav",
                    height: "36",
                    width: "36"
                }) : (0, c.Y)(d.default, {
                    name: "poki",
                    width: "100%",
                    height: "100%"
                });
                if (y) {
                    const e = y.url;
                    p = (0, c.Y)("img", {
                        src: e,
                        alt: "Poki",
                        style: y.style
                    })
                }
                const w = (0, n.A)(s.logo, e);
                return u ? (0, c.Y)(i.default, {
                    className: w,
                    to: u,
                    target: t ? "_blank" : void 0,
                    title: b,
                    onClick: _,
                    ariaLabel: g,
                    children: p
                }) : (0, c.Y)("span", {
                    className: w,
                    children: p
                })
            }
        },
        91833: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => n
            });
            var l = a(95901);

            function n({
                className: e,
                name: t,
                width: a,
                height: n
            }) {
                return (0, l.Y)("svg", {
                    className: e,
                    width: a,
                    height: n,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.Y)("use", {
                        xlinkHref: `#${t}Icon`
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-Logo~3aae1b3a33a00c8ee286.js.map