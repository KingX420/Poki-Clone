try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b7c09fe2-f727-4e24-9148-299357100a01", e._sentryDebugIdIdentifier = "sentry-dbid-b7c09fe2-f727-4e24-9148-299357100a01")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7258], {
        26958: (e, t, s) => {
            s.d(t, {
                A: () => n
            });
            var i = s(40890);

            function n(e, t) {
                if (!t) return "";
                let s = t.split(/(<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>)/gi);
                return s = s.map((t => {
                    if (!t) return;
                    const s = /<a([^>]+)href="([^"]*)"[^>]*>[^<]*<\/a>/gm;
                    return t.startsWith("<script") ? t.replace(s, (e => e.replace(/"/g, '\\"'))) : t ? .replace(s, ((t, s, n) => {
                        const r = n.replace(/https:\/\/|http:\/\//gi, "").replace(e.domain, ""),
                            o = t.toLowerCase(),
                            a = o.includes("onclick"),
                            c = o.includes('target="_blank"');
                        return !(0, i.xs)(r) || a || c ? t : t.replace(s, `${s}onclick="window.navigateTo('${r}');return false;" `)
                    }))
                })), s.join("")
            }
        },
        62929: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => H
            });
            var i = s(17402),
                n = s(68154),
                r = s(78737),
                o = s(57225),
                a = s(34164),
                c = s(25362),
                l = s(98708),
                h = s(11436),
                d = s(23260),
                m = s(42891),
                p = s(15203),
                g = s(53210),
                u = s(91323),
                y = s(15049),
                v = s(61481),
                f = s(80382),
                A = s(82552),
                b = s(40890);
            const _ = 74;
            var k = s(26958),
                Y = s(60685),
                w = s(72146),
                q = s(95901);
            const S = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-SummaryTile-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.all([s.e(637), s.e(7306)]).then(s.bind(s, 10637)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 10637
                }),
                x = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-CategoryTile-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => s.e(7526).then(s.bind(s, 16259)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 16259
                }),
                L = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-contentTypes-PokiKids-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => s.e(3537).then(s.bind(s, 95422)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 95422
                }),
                N = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-Description-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => s.e(6448).then(s.bind(s, 25069)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 25069
                }),
                $ = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageError-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => s.e(3427).then(s.bind(s, 35530)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 35530
                }),
                T = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-MysteryTile-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => s.e(6433).then(s.bind(s, 12748)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 12748
                }),
                D = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-opengraph-OGPage-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => s.e(2788).then(s.bind(s, 4875)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 4875
                }),
                M = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageHomeSkeleton-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.resolve().then(s.bind(s, 88942)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 88942
                }),
                O = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-FakeTile-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => Promise.resolve().then(s.bind(s, 19952)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 19952
                }),
                I = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-LazyLoad-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => s.e(368).then(s.bind(s, 6973)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 6973
                }),
                G = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-NavigationAwareLazyHydrate-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!s.m[t]
                    },
                    importAsync: () => s.e(4741).then(s.bind(s, 25144)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return s(t)
                    },
                    resolve: () => 25144
                }),
                R = "home",
                E = 24,
                K = 6,
                C = 1189,
                F = "home_description";

            function P({
                games: e,
                categories: t,
                skipKidsTile: s,
                isMobile: i,
                canShowMysteryGame: n
            }) {
                const r = i ? (0, f.oI)(e) : e;
                let o = 0,
                    c = 0;
                const l = r.map((e => {
                    const t = "most-played";
                    if (i) {
                        c++, o++;
                        const s = c > 2,
                            n = (0, q.Y)(S, {
                                className: "ip" + (o - 1),
                                lazy: s,
                                isMobile: i,
                                idx: o - 1,
                                trackingIndex: c - 1,
                                data: e,
                                list: t,
                                componentKey: R
                            }, `g-${e.id}`);
                        return o >= E && (o = 0), n
                    }
                    const s = c > 10,
                        n = (0, q.Y)(S, {
                            className: `ip${c}`,
                            lazy: s,
                            isMobile: i,
                            idx: c,
                            trackingIndex: c,
                            data: e,
                            list: t,
                            componentKey: R
                        }, `g-${e.id}`);
                    return c++, n
                }));
                return i ? function({
                    homepageGamesComponents: e,
                    categories: t
                }) {
                    const s = e.splice(0, E - 1),
                        i = e.reduce(((t, s, i) => {
                            const n = Math.floor(i / E),
                                r = Math.floor(e.length / E) - 1,
                                o = Math.min(n, r);
                            return t[o] || (t[o] = []), t[o].push(s), t
                        }), []),
                        n = t.filter((e => e.mobile || e.id === C)).map((e => (0, q.Y)(x, {
                            list: "basic-category",
                            data: e,
                            contentType: "basic-category"
                        }, `c-${e.id}`)));
                    return [
                        [
                            [s, ...i].map(((e, t) => 0 === t ? (0, q.Y)("div", {
                                className: (0, a.A)(Y.pageGrid, w.pageHome_mobile),
                                children: e
                            }) : (0, q.Y)(I, {
                                placeholder: (0, q.FD)(q.FK, {
                                    children: [(0, q.Y)(O, {}), (0, q.Y)(O, {}), (0, q.Y)(O, {}), (0, q.Y)(O, {}), (0, q.Y)(O, {}), (0, q.Y)(O, {})]
                                }),
                                className: (0, a.A)(Y.pageGrid, w.pageHome_mobile),
                                navigationAware: !0,
                                children: (0, q.Y)("div", {
                                    className: (0, a.A)(Y.pageGrid, w.pageHome_mobile),
                                    children: e
                                })
                            })))
                        ],
                        [(0, q.Y)(I, {
                            navigationAware: !0,
                            children: n
                        })]
                    ]
                }({
                    homepageGamesComponents: l,
                    categories: t
                }) : function({
                    homepageGamesComponents: e,
                    skipKidsTile: t,
                    categories: s,
                    canShowMysteryGame: i
                }) {
                    const n = [...s],
                        r = n.splice(0, K).map((e => (0, q.Y)(x, {
                            list: "promoted-category",
                            data: e,
                            contentType: "promoted-category"
                        }, `c-${e.id}`))),
                        o = n.map((e => (0, q.Y)(x, {
                            list: "basic-category",
                            data: e,
                            contentType: "basic-category"
                        }, `c-${e.id}`))),
                        a = [...e.splice(0, 10)],
                        c = [...e];
                    return i && c.splice(30 + Math.floor(10 * Math.random()), 0, (0, q.Y)(T, {})), [
                        [(0, q.Y)(G, {
                            on: "mouseover",
                            children: (0, q.Y)("ul", {
                                className: Y.pageTopContent,
                                children: a.map((e => (0, q.Y)("li", {
                                    children: e
                                }, e.key)))
                            })
                        }), (0, q.Y)(G, {
                            on: "mouseover",
                            children: c
                        })],
                        [(0, q.Y)(G, {
                            on: "mouseover",
                            children: r
                        }), t ? null : (0, q.Y)(G, {
                            ssrOnly: !0,
                            children: (0, q.Y)(L, {})
                        }), (0, q.Y)(G, {
                            on: "mouseover",
                            children: o
                        })]
                    ]
                }({
                    homepageGamesComponents: l,
                    categories: t,
                    skipKidsTile: s,
                    canShowMysteryGame: n
                })
            }

            function H() {
                const e = (0, r.wA)(),
                    t = (0, r.d4)(u.Gd),
                    s = (0, r.d4)(m.xp),
                    o = (0, r.d4)(m.wu),
                    f = (0, r.d4)(g.p),
                    S = (0, r.d4)(l.K),
                    x = (0, r.d4)(h.k4),
                    L = (0, r.d4)(y.lb),
                    T = (0, r.d4)(m.zO),
                    {
                        isMobile: O
                    } = (0, i.useContext)(c.F),
                    {
                        data: I,
                        isUninitialized: R,
                        isLoading: E,
                        isFetching: K,
                        isSuccess: C,
                        isError: H
                    } = (0, v.mk)({
                        site: t,
                        device: s,
                        geo: o,
                        experiment: f,
                        trafficSource: T
                    }),
                    {
                        data: j,
                        isUninitialized: z,
                        isLoading: U,
                        isFetching: W,
                        isSuccess: B,
                        isError: J
                    } = (0, v.Wm)({
                        site: t,
                        device: s,
                        geo: o,
                        list: "HPCA"
                    });
                if (H || J) return (0, q.Y)($, {});
                if (!(!R && !E && !K && C) || !(!z && !U && !W && B)) return (0, q.Y)(M, {});
                if ((0, r.d4)(h.hk).includes("opengraph=true")) return (0, q.Y)(D, {
                    games: I.games,
                    title: S.home_title,
                    type: "home"
                });
                const Q = (0, r.d4)(p.ht);
                (0, i.useEffect)((() => {
                    e((0, d.y)({
                        path: x,
                        pageType: "home",
                        pageID: null
                    }))
                }), []);
                const [V, X] = (0, i.useMemo)((() => P({
                    games: I ? .games || [],
                    categories: j || [],
                    skipKidsTile: L,
                    isMobile: O,
                    canShowMysteryGame: Q
                })), [I, j]), {
                    data: Z,
                    isSuccess: ee
                } = (0, v.iK)({
                    site: t,
                    slug: F
                }), te = (0, i.useMemo)((() => function(e, t, s) {
                    const i = e.id === _,
                        n = (0, b.kC)(e, "home", ""),
                        {
                            games: r
                        } = s.homeResults,
                        o = r.slice(0, 20),
                        a = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=630,f=png/opengraph/${e.id}/home/home-1200x630.png`,
                        c = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=675,f=png/opengraph/${e.id}/home/home-1200x675.png`,
                        l = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=1200,f=png/opengraph/${e.id}/home/home-1200x1200.png`,
                        h = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=900,f=png/opengraph/${e.id}/home/home-1200x900.png`,
                        d = `https://a.poki-cdn.com/cdn-cgi/image/quality=78,width=1200,height=600,f=png/opengraph/${e.id}/home/home-1200x600.png`;
                    return {
                        meta: {
                            canonical: n,
                            title: t.home_meta_title,
                            description: t.home_meta_description
                        },
                        jsonLD: {
                            "@context": "http://schema.org",
                            "@graph": [{
                                "@type": "WebPage",
                                "@id": `${n}#WebPage`,
                                url: n,
                                name: i ? t.home_title : t.home_meta_title,
                                description: t.home_meta_description,
                                inLanguage: e.iso_lang,
                                image: [{
                                    "@type": "ImageObject",
                                    url: c,
                                    width: "1200",
                                    height: "675"
                                }, {
                                    "@type": "ImageObject",
                                    url: l,
                                    width: "1200",
                                    height: "1200"
                                }, {
                                    "@type": "ImageObject",
                                    url: h,
                                    width: "1200",
                                    height: "900"
                                }],
                                mainEntity: {
                                    "@type": "ItemList",
                                    name: t.breadcrumb_games,
                                    itemListOrder: "http://schema.org/ItemListOrderAscending",
                                    numberOfItems: o.length,
                                    itemListElement: o.map((({
                                        title: t,
                                        slug: s
                                    }, i) => ({
                                        "@type": "ListItem",
                                        position: i + 1,
                                        name: t,
                                        url: (0, b.kC)(e, "game", s)
                                    })))
                                },
                                isPartOf: (0, A.tR)(t, e)
                            }]
                        },
                        og: {
                            title: t.home_meta_title,
                            url: n,
                            description: t.home_meta_description,
                            locale: e.locale,
                            image: a,
                            "image:width": 1200,
                            "image:height": 630,
                            "image:alt": `${t.home_title} - ${e.title}`,
                            "image:type": "image/png",
                            site_name: "Poki",
                            type: "website"
                        },
                        twitter: {
                            card: "summary_large_image",
                            title: t.home_meta_title,
                            description: t.home_meta_description,
                            image: d,
                            "image:alt": `${t.home_title} - ${e.title}`,
                            site: "@Poki"
                        },
                        content: s
                    }
                }(t, S, {
                    homeResults: I
                })), [I]), se = I ? .alternates || [];
                return (0, q.FD)(q.FK, {
                    children: [te ? .jsonLD && (0, q.Y)("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(te.jsonLD)
                        }
                    }), (0, q.FD)(n.m, {
                        children: [(0, q.Y)("title", {
                            children: te ? .meta ? .title
                        }), (0, q.Y)("meta", {
                            name: "keywords",
                            content: S.home_title
                        }), (0, q.Y)("meta", {
                            name: "description",
                            content: te ? .meta ? .description
                        }), (0, q.Y)("link", {
                            rel: "canonical",
                            href: te ? .meta ? .canonical
                        }, "canonical"), se.map((({
                            href: e,
                            hrefLang: t
                        }) => (0, q.Y)("link", {
                            rel: "alternate",
                            href: e,
                            hrefLang: t
                        }, t))), te ? .og && Object.entries(te.og).map((([e, t]) => (0, q.Y)("meta", {
                            property: `og:${e}`,
                            content: t
                        }, `og:${e}`))), te ? .twitter && Object.entries(te.twitter).map((([e, t]) => (0, q.Y)("meta", {
                            property: `twitter:${e}`,
                            content: t
                        }, `twitter:${e}`)))]
                    }), O && (0, q.FD)(q.FK, {
                        children: [V, (0, q.Y)("div", {
                            className: (0, a.A)(Y.pageGrid, w.pageHome_mobile),
                            children: X
                        })]
                    }), !O && (0, q.FD)(q.FK, {
                        children: [(0, q.Y)("div", {
                            className: (0, a.A)(Y.pageGrid, w.pageHome_desktop),
                            children: V
                        }), (0, q.Y)("div", {
                            className: (0, a.A)(Y.pageGrid, w.pageHome_desktop),
                            children: X
                        })]
                    }), ee && (0, q.Y)(G, {
                        ssrOnly: !0,
                        children: (0, q.Y)(N, {
                            data: {
                                body: (0, k.A)(t, Z.content),
                                title: S.home_title
                            }
                        })
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-PageHome~9c4537ce3b3e40d25e63.js.map