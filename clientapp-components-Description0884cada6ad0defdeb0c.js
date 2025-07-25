try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3d7c4491-d901-4896-af6a-0a0642d9bb5d", e._sentryDebugIdIdentifier = "sentry-dbid-3d7c4491-d901-4896-af6a-0a0642d9bb5d")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4810, 6448, 8707], {
        25069: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => N
            });
            var s = i(17402),
                r = i(78737),
                n = i(34164),
                o = i(57225),
                d = i(91833),
                l = i(25362),
                a = i(98708),
                c = i(90385),
                h = i(52928),
                p = i(40890),
                _ = i(59962),
                u = i(95901);
            const m = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-Breadcrumbs-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!i.m[t]
                    },
                    importAsync: () => i.e(8984).then(i.bind(i, 3513)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return i(t)
                    },
                    resolve: () => 3513
                }),
                g = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-StoreLinks-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!i.m[t]
                    },
                    importAsync: () => i.e(9936).then(i.bind(i, 64957)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return i(t)
                    },
                    resolve: () => 64957
                }),
                b = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-Tags-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!i.m[t]
                    },
                    importAsync: () => i.e(8837).then(i.bind(i, 62676)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return i(t)
                    },
                    resolve: () => 62676
                }),
                v = (0, o.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-GamePrivacyPolicy-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!i.m[t]
                    },
                    importAsync: () => i.e(7098).then(i.bind(i, 34835)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return i(t)
                    },
                    resolve: () => 34835
                }),
                y = 314,
                f = 204;

            function N({
                data: e,
                children: t
            }) {
                const {
                    isMobile: i
                } = (0, s.useContext)(l.F), o = (0, r.d4)(a.K), N = (0, r.d4)(c.K5), w = e ? .developer || e ? .rating, {
                    image: A
                } = e, S = A ? (0, p.pN)({
                    width: y,
                    height: y,
                    image: A
                }) : "", D = A ? (0, p.pN)({
                    width: 2 * y,
                    height: 2 * y,
                    image: A
                }) : "", Y = A ? (0, p.pN)({
                    width: f,
                    height: f,
                    image: A
                }) : "", I = A ? (0, p.pN)({
                    width: 2 * f,
                    height: 2 * f,
                    image: A
                }) : "";
                return (0, u.FD)("article", {
                    className: _.description,
                    children: ["game" === N && !!e.breadcrumbs && e.breadcrumbs.length > 0 && (0, u.Y)(m, {
                        breadcrumbs: e.breadcrumbs
                    }), "home" === N && (0, u.Y)("div", {
                        className: _.description__preTitle,
                        children: o.about_title
                    }), (0, u.Y)("header", {
                        style: _.description__titleContainer,
                        children: "home" === N || "game" === N && !i ? (0, u.Y)("h1", {
                            className: _.description__title,
                            children: e.title
                        }) : (0, u.Y)("h2", {
                            className: _.description__title,
                            children: e.title
                        })
                    }), w && (0, u.FD)("div", {
                        className: _.description__labels,
                        children: [e.developer && (0, u.Y)("span", {
                            className: _.description__developer,
                            children: e.developer
                        }), e.rating && (0, u.FD)(u.FK, {
                            children: [(0, u.FD)("span", {
                                className: _.description__label,
                                children: [(0, u.Y)(d.default, {
                                    className: _.description__SVGIconStar,
                                    name: "star"
                                }), e.rating.rating.toFixed(1)]
                            }), (0, u.FD)("span", {
                                className: _.description__label,
                                children: [(0, h.ZV)(e.rating.up_count + e.rating.down_count), " ", o.votes]
                            })]
                        })]
                    }), A && (0, u.FD)("picture", {
                        className: _.description__thumbnailContainer,
                        children: [(0, u.Y)("source", {
                            className: _.description__thumbnail,
                            srcSet: `${S} 1x, ${D} 2x`,
                            media: "(min-width: 991px)",
                            width: y,
                            height: y
                        }), (0, u.Y)("img", {
                            className: _.description__thumbnail,
                            alt: e.title,
                            src: Y,
                            srcSet: `${Y} 1x, ${I} 2x`,
                            decoding: "async",
                            loading: "lazy",
                            width: f,
                            height: f
                        })]
                    }), (0, u.Y)("div", {
                        className: (0, n.$)(_.description__localized, "home" === N && _.description__localized_isHomePage),
                        dangerouslySetInnerHTML: {
                            __html: e.body
                        }
                    }), e.privacy_policy_url && (0, u.Y)(v, {
                        url: e.privacy_policy_url
                    }), "game" === N && e ? .store_urls && Object.keys(e.store_urls).length > 0 && (0, u.FD)(u.FK, {
                        children: [(0, u.Y)("h3", {
                            className: _.description__appStoreTitle,
                            children: o.get_the_app
                        }), (0, u.Y)(g, {
                            urls: e.store_urls
                        })]
                    }), e.tags && e.tags.length > 0 && (0, u.Y)(b, {
                        className: _.description__tags,
                        tags: e.tags
                    }), t]
                })
            }
        },
        52928: (e, t, i) => {
            function s(e) {
                return e[0].toUpperCase() + e.slice(1)
            }
            i.d(t, {
                ZH: () => s,
                ZV: () => n
            });
            const r = "undefined" != typeof Intl ? new Intl.NumberFormat : {
                format: e => e
            };

            function n(e) {
                return r.format(e)
            }
        },
        59962: (e, t, i) => {
            i.r(t), i.d(t, {
                description: () => s,
                description__SVGIconStar: () => r,
                description__appStoreTitle: () => n,
                description__developer: () => o,
                description__label: () => d,
                description__labels: () => l,
                description__localized: () => a,
                description__localized_isHomePage: () => c,
                description__preTitle: () => h,
                description__tags: () => p,
                description__thumbnail: () => _,
                description__thumbnailContainer: () => u,
                description__title: () => m,
                description__titleContainer: () => g
            });
            var s = "npmo3Vk8vdpOrUnRlo4K",
                r = "fcfViJboVjIxhb1F278U",
                n = "Z4P1bZJFYA_LBpxMeK3z",
                o = "ykSfXRX6hSsz0ISpeaWm",
                d = "vd1aWiYRdRn48fpbDJ0_",
                l = "wY7sRBuJJVct_A0DPHDr",
                a = "U5UHxulLIj1mqRNKVoIl",
                c = "S9u9oGGPKoCPdp0ckDId",
                h = "SIe_wNXliOAsytkgDP1I",
                p = "vSEqiNgYwM46IdL3tgV4",
                _ = "bfq4PKbgNwePswLuaSwZ",
                u = "wIGewHYOM_yiDgJbC_XN",
                m = "Wa2Xpu5vfbxVCjRv2Gv_",
                g = "i3QPWr3keV_hOpU2xsic"
        },
        91833: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => r
            });
            var s = i(95901);

            function r({
                className: e,
                name: t,
                width: i,
                height: r
            }) {
                return (0, s.Y)("svg", {
                    className: e,
                    width: i,
                    height: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.Y)("use", {
                        xlinkHref: `#${t}Icon`
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-Description~0884cada6ad0defdeb0c.js.map