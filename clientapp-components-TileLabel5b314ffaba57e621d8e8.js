try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        l = (new e.Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "f7a77c23-0b73-42a3-9f72-797299fb14ae", e._sentryDebugIdIdentifier = "sentry-dbid-f7a77c23-0b73-42a3-9f72-797299fb14ae")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4810, 8371, 9008], {
        44237: (e, l, n) => {
            n.r(l), n.d(l, {
                default: () => s
            });
            var a = n(34164),
                t = n(91833),
                i = n(71618),
                d = n(95901);
            const r = ({
                label: e
            }) => {
                if (!e) return !1;
                switch (e) {
                    case "new":
                        return "fire";
                    case "restart":
                        return "restart"
                }
                return !1
            };

            function s({
                label: e
            }) {
                const l = r({
                    label: e
                });
                return l ? (0, d.Y)("div", {
                    className: (0, a.A)("tile-label", i.tileLabel),
                    children: (0, d.Y)("div", {
                        className: i.tileLabel__container,
                        children: (0, d.Y)(t.default, {
                            className: i.tileLabel__icon,
                            name: l
                        })
                    })
                }) : null
            }
        },
        71618: (e, l, n) => {
            n.r(l), n.d(l, {
                tileLabel: () => a,
                tileLabel__container: () => t,
                tileLabel__icon: () => i
            });
            var a = "ETVXnX3Vp6CGuiKrBvDR",
                t = "StuSAzcQnRTWluaN5YMe",
                i = "rCs5cyEiqiTpYvt_VBCR"
        },
        91833: (e, l, n) => {
            n.r(l), n.d(l, {
                default: () => t
            });
            var a = n(95901);

            function t({
                className: e,
                name: l,
                width: n,
                height: t
            }) {
                return (0, a.Y)("svg", {
                    className: e,
                    width: n,
                    height: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.Y)("use", {
                        xlinkHref: `#${l}Icon`
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-TileLabel~5b314ffaba57e621d8e8.js.map