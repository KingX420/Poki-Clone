try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "68bf3115-0b3f-4c8b-a055-eb1d964c0067", e._sentryDebugIdIdentifier = "sentry-dbid-68bf3115-0b3f-4c8b-a055-eb1d964c0067")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7526, 9853], {
        16259: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => s
            });
            var i = a(34164),
                o = a(18272),
                c = a(40890),
                l = a(35814),
                n = a(56832),
                r = a(95901);
            const d = {
                "basic-category": 94,
                "promoted-category": 204
            };

            function s({
                className: e,
                data: t,
                list: a,
                idx: s,
                contentType: g,
                onClick: y,
                panelSection: f,
                trackingIndex: b
            }) {
                const _ = d[g],
                    {
                        src: p,
                        srcset: u
                    } = function({
                        image: e,
                        width: t
                    }) {
                        const a = (0, c.pN)({
                            image: e,
                            width: t
                        });
                        return {
                            src: a,
                            srcset: `${a} 1x, ${(0,c.pN)({image:e,width:2*t})} 2x`
                        }
                    }({
                        image: t.image,
                        width: _
                    }),
                    h = (0, i.$)(l.categoryTile, "basic-category" === g && l.categoryTile_basicCategory, "promoted-category" === g && l.categoryTile_promotedCategory, e);
                return (0, r.FD)("a", {
                    className: h,
                    href: t.url,
                    onClick: e => {
                        e.preventDefault(), y && y();
                        const {
                            pageY: i
                        } = e, c = b || s;
                        (0, n.D)({
                            id: t.id,
                            image: "a",
                            path: t.url,
                            width: _,
                            panelSection: f,
                            index: c,
                            type: "category",
                            list: a,
                            y: i
                        }), (0, o.A)().push(t.url)
                    },
                    children: [(0, r.Y)("img", {
                        className: l.categoryTile__image,
                        src: p,
                        srcSet: u,
                        width: _,
                        height: _,
                        alt: t.title,
                        loading: "lazy"
                    }), (0, r.Y)("span", {
                        className: l.categoryTile__title,
                        children: t.title
                    })]
                })
            }
        },
        35814: (e, t, a) => {
            a.r(t), a.d(t, {
                categoryTile: () => i,
                categoryTile__image: () => o,
                categoryTile__title: () => c,
                categoryTile_basicCategory: () => l,
                categoryTile_promotedCategory: () => n
            });
            var i = "DIxbY_Wd8M99mMzbD9Jz",
                o = "VrWOfVJtTjn2FNJx0TFc",
                c = "QGnVckPD11ZTkQr8o8ci",
                l = "Ll7V72dm63WTr1buD4lg",
                n = "WNKx5SMWQkliDlBi9d5r"
        },
        56832: (e, t, a) => {
            a.d(t, {
                D: () => c
            });
            var i = a(46493),
                o = a(88421);

            function c(e) {
                const t = window.store.getState(),
                    a = e ? .panelSection ? .length > 0,
                    c = a ? {
                        searchExpanded: a,
                        terms: (0, o.Z1)(t),
                        searchSessionId: (0, o.Ie)(t)
                    } : {},
                    l = { ...e,
                        ...c
                    };
                (0, i.F)({
                    category: "tile",
                    action: "click",
                    data: l
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-CategoryTile~94f70c3e1929b0023a25.js.map