try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        d = (new e.Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "87b96993-61a5-40b9-9f0d-568c2aa551b1", e._sentryDebugIdIdentifier = "sentry-dbid-87b96993-61a5-40b9-9f0d-568c2aa551b1")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3537, 4810, 5476], {
        39283: (e, d, n) => {
            n.r(d), n.d(d, {
                pokiKids: () => i
            });
            var i = "lqXp53hZDYl_viQrSpkC"
        },
        91833: (e, d, n) => {
            n.r(d), n.d(d, {
                default: () => t
            });
            var i = n(95901);

            function t({
                className: e,
                name: d,
                width: n,
                height: t
            }) {
                return (0, i.Y)("svg", {
                    className: e,
                    width: n,
                    height: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.Y)("use", {
                        xlinkHref: `#${d}Icon`
                    })
                })
            }
        },
        95422: (e, d, n) => {
            n.r(d), n.d(d, {
                default: () => a
            });
            var i = n(91833),
                t = n(39283),
                l = n(95901);

            function a() {
                return (0, l.Y)("a", {
                    className: t.pokiKids,
                    href: "https://kids.poki.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    title: "Poki Kids",
                    children: (0, l.Y)(i.default, {
                        name: "kids",
                        width: "100%",
                        height: "100%"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-contentTypes-PokiKids~84c7aca5a89f30341c0b.js.map