try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8c230228-2ebe-487f-89a9-20beccbc40c7", e._sentryDebugIdIdentifier = "sentry-dbid-8c230228-2ebe-487f-89a9-20beccbc40c7")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5182], {
        8811: (e, t, o) => {
            o.d(t, {
                V: () => n
            });
            const n = {
                default: {
                    style: "default"
                },
                preview: {
                    color: "var(--grey-7)",
                    image: "https://a.poki-cdn.com/images/bg-diamante-lowpo.svg",
                    style: "tile"
                },
                mystery: {
                    color: "var(--yellow-8)",
                    imageLeft: "https://a.poki-cdn.com/cdn-cgi/image/f=auto,quality=78/images/bg-playtest-left.png",
                    imageRight: "https://a.poki-cdn.com/cdn-cgi/image/f=auto,quality=78/images/bg-playtest-right.png",
                    style: "dual-cover"
                }
            }
        },
        16345: (e, t, o) => {
            o.d(t, {
                A: () => n
            });
            const n = () => ({
                width: window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth,
                height: window.innerHeight || window.document.documentElement.clientHeight || window.document.body.clientHeight
            })
        },
        17615: (e, t, o) => {
            o.d(t, {
                A: () => v
            });
            var n = o(57225),
                s = o(37084),
                i = o(59908),
                r = o(88942),
                c = o(42495),
                a = o(92413),
                l = o(70335),
                d = o(40890),
                u = o(95901);
            const p = (0, n.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageHome-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!o.m[t]
                    },
                    importAsync: () => o.e(7258).then(o.bind(o, 62929)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return o(t)
                    },
                    resolve: () => 62929
                }, {
                    fallback: (0, u.Y)(r.default, {})
                }),
                h = (0, n.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageCategory-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!o.m[t]
                    },
                    importAsync: () => o.e(4307).then(o.bind(o, 1986)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return o(t)
                    },
                    resolve: () => 1986
                }, {
                    fallback: (0, u.Y)(c.default, {})
                }),
                V = (0, n.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageGame-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!o.m[t]
                    },
                    importAsync: () => o.e(1509).then(o.bind(o, 52265)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return o(t)
                    },
                    resolve: () => 52265
                }, {
                    fallback: (0, u.Y)(a.default, {})
                }),
                m = (0, n.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageError-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!o.m[t]
                    },
                    importAsync: () => o.e(3427).then(o.bind(o, 35530)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return o(t)
                    },
                    resolve: () => 35530
                }, {
                    fallback: (0, u.Y)(l.default, {})
                }),
                y = (0, n.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-PageContent-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!o.m[t]
                    },
                    importAsync: () => o.e(9830).then(o.bind(o, 94147)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return o(t)
                    },
                    resolve: () => 94147
                }, {
                    fallback: (0, u.Y)(l.default, {})
                }),
                A = (0, n.Ay)({
                    resolved: {},
                    chunkName: () => "app-components-privacyCenter-PrivacyCenter-tsx",
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!o.m[t]
                    },
                    importAsync: () => Promise.all([o.e(9310), o.e(9551), o.e(6421), o.e(9130), o.e(9083), o.e(5730), o.e(1056), o.e(3718), o.e(7837)]).then(o.bind(o, 57126)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return o(t)
                    },
                    resolve: () => 57126
                }, {
                    fallback: (0, u.Y)(l.default, {})
                });

            function v({
                ssrPath: e,
                ssrSearch: t,
                site: o
            }) {
                return (0, u.Y)(s.Ix, {
                    ssrPath: e,
                    ssrSearch: t,
                    hook: i.ZD,
                    children: (0, u.FD)(s.dO, {
                        children: [(0, u.Y)(s.qh, {
                            path: `${(0,d.AO)(o,"home","")}`,
                            component: p
                        }), (0, u.Y)(s.qh, {
                            nest: !0,
                            path: `${(0,d.AO)(o,"game",":slug")}`,
                            component: V
                        }), (0, u.Y)(s.qh, {
                            nest: !0,
                            path: `${(0,d.AO)(o,"content",":slug")}`,
                            component: y
                        }), (0, u.Y)(s.qh, {
                            nest: !0,
                            path: `${(0,d.AO)(o,"preview",":slug")}`,
                            component: V
                        }), (0, u.Y)(s.qh, {
                            nest: !0,
                            path: `${(0,d.AO)(o,"mystery",":slug")}`,
                            component: V
                        }), (0, u.Y)(s.qh, {
                            nest: !0,
                            path: `${(0,d.AO)(o,"privacy","")}`,
                            component: A,
                            children: (0, u.Y)(s.qh, {
                                path: "/:slug",
                                component: A
                            })
                        }), (0, u.Y)(s.qh, {
                            path: `${(0,d.AO)(o,"category",":slug")}`,
                            component: h
                        }), (0, u.Y)(s.qh, {
                            component: m
                        })]
                    })
                })
            }
        },
        17782: (e, t, o) => {
            function n(e) {
                const t = `poki/${e}`,
                    o = e => ({
                        type: t,
                        ...e
                    });
                return o.type = t, o
            }
            o.d(t, {
                A: () => n
            })
        },
        28933: (e, t, o) => {
            o.d(t, {
                J: () => i
            });
            var n = o(35190);
            const s = e => ["US", "CA", "DE", "BR", "FR", "AU", "MX", "JP", "ES", "CH", "PL", "KR", "GB", "BE", "IT", "AE", "NL", "SE", "DK", "SA", "NZ", "RO", "ZA", "TH", "AT", "NO", "MY", "CL", "SG", "CZ", "IL", "HU", "FI", "SK", "IE", "HK", "BG", "PT", "UY", "TW", "CR", "GR", "OM", "PR", "JO", "PA", "HR", "UZ", "KE", "KW", "LV", "LU", "SI", "EE", "MM", "QA", "LT", "BH", "IS", "JM", "TT", "NA", "MT", "BS", "MO", "AW", "AS", "VI", "KY", "LI", "BQ", "JE", "BM", "PW", "VG", "GG", "MP", "MC", "NU", "NF", "TV"].includes(e);

            function i(e, t) {
                return [n.G.ON, n.G.PBS_DPF_CSTS, n.G.PBS_ONLY].includes(e) && s(t)
            }
        },
        35190: (e, t, o) => {
            o.d(t, {
                G: () => n
            });
            let n = function(e) {
                return e.ON = "on", e.NOT_APPLICABLE = "not_applicable", e.DISABLED = "disabled", e.PBS_ONLY = "pbs_only", e.DPF_ONLY = "dpf_only", e.CSTS_ONLY = "csts_only", e.PBS_DPF_CSTS = "pbs_dpf_csts", e
            }({})
        },
        46278: (e, t, o) => {
            o.d(t, {
                Ay: () => l,
                E5: () => h,
                G6: () => a,
                T5: () => u,
                Vy: () => p,
                gE: () => d
            });
            var n = o(54200),
                s = o(67893),
                i = o(34317);
            const r = "undefined" != typeof XMLHttpRequest ? XMLHttpRequest : o.n(i)();

            function c(e, t, o = {}, s = !1) {
                const i = `${e}${t}`;
                return s ? fetch(i, o) : (0, n.R)({
                    createXHR: () => new r,
                    url: i,
                    ...o,
                    crossDomain: !0
                })
            }

            function a() {
                let e = {
                    acceptance: "https://api-acceptance.poki.io",
                    production: "https://api.poki.com",
                    local: "http://localhost:10019",
                    kiosk: "/api"
                };
                "undefined" == typeof window && "cluster" === process.env.DEPLOY_ENV && (e = { ...e,
                    acceptance: "http://content.mothership.svc.cluster.local",
                    production: "http://content.mothership.svc.cluster.local"
                }), "undefined" == typeof window && "string" == typeof process.env.OVERWRITE_API_LOCATION && (e = Object.keys(e).reduce(((e, t) => (e[t] = process.env.OVERWRITE_API_LOCATION, e)), {}));
                return e[(0, s.jG)()] || "https://api.poki.com"
            }

            function l(e, t, o = !1) {
                return c(a(), e, t, o)
            }

            function d() {
                let e = {
                    acceptance: "https://poki-auth-acceptance.poki.io",
                    production: "https://poki-auth.poki.com",
                    local: "http://localhost:3005"
                };
                "undefined" == typeof window && "cluster" === process.env.DEPLOY_ENV && (e = {
                    acceptance: "http://kratos.mothership.svc.cluster.local",
                    production: "http://kratos.mothership.svc.cluster.local",
                    local: "http://localhost:3005"
                });
                return e[(0, s.jG)()] || "https://poki-auth.poki.com"
            }

            function u() {
                let e = {
                    acceptance: "https://user-vault-acceptance.poki.io",
                    production: "https://user-vault.poki.com",
                    local: "http://localhost:3000"
                };
                "undefined" == typeof window && "cluster" === process.env.DEPLOY_ENV && (e = {
                    acceptance: "http://user-vault.mothership.svc.cluster.local",
                    production: "http://user-vault.mothership.svc.cluster.local",
                    local: "http://localhost:3000"
                });
                return e[(0, s.jG)()] || "https://user-vault.poki.com"
            }

            function p(e, t) {
                const o = {
                    acceptance: "https://vote-acceptance.poki.io",
                    production: "https://vote.poki.io",
                    local: "http://localhost:10066"
                };
                return c(o[(0, s.jG)()] || o.production, e, t)
            }

            function h(e, t) {
                return c("https://t.poki.io", e, t)
            }
        },
        46493: (e, t, o) => {
            o.d(t, {
                F: () => i
            });
            var n = o(574);
            const s = "undefined" != typeof window && new URLSearchParams(window.location.search).has("verboseLogging");

            function i({
                category: e,
                action: t,
                label: o,
                data: i,
                options: r
            }) {
                if ("undefined" == typeof window) return;
                const c = window;
                if (c.context = (0, n.K)(c.store.getState()), s && console.info(`[pushEvent] ${e} ${t} ${o}`, i, r), !c.context ? .isPokiAnalyticsEnabled && "settingsUpdated" !== t) return;
                let a = `${e}-${t}`;
                t || (a = e), o && (a += `-${o}`), c.pokiGTM ? .push({
                    event: a,
                    category: e,
                    action: t,
                    label: o,
                    data: i || {},
                    options: r || {}
                })
            }
        },
        53490: (e, t, o) => {
            o.d(t, {
                Y: () => n
            });
            class n {
                isReady = !1;
                constructor() {
                    this.audioElement = document.createElement("audio"), this.audioElement.preload = "auto", this.audioElement.src = "data:audio/mpeg;base64,/+MYxAALWDXcoV4AAiAMq+aGT7h2ObUH6N+wfrm9R3XRzGu4WkYJ45pjZhkmECIKYXIAJgxA3GEEBcrQAA+AF1vMRDCtjCSA/+MYxA0JiC5BQZ8AAFt8//sAxMRRBjDBKgB/zwhw7AwF0D/AACRVNon1Uj9Ya5I0v0ksMAHFJTGCBT0w6IGxMCNBnDBwQVow/+MYxCEMEDYQAd8AADDAVjAMAG8wIYBpDgF1OpUwoEahNi89yzhvi6UxS0U6MHkC7TA2wdIy1MxCwjGZvMhhUmRI0OhmqjMi/+MYxCsKCDXQAP8eAEs+POM/LzdbUFUzGoNEMW1BITDUgIw4pHM14IYzzKkxrI0wqFQEgyClMYXQfjdJ/vw8pczYMhEE6zDP/+MYxD0KqDWYAP9YAELAMHQBsTjcGNHJkxKKjCgNMZhIBCkdSjITA2o5EnviPzPoODMLx8kw44SSMKJCtz+18OM2M4dEjWCe/+MYxE0KWDWEAP8eADRY7MUBIEXVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxF4KiDVIAP8gAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV", this.audioElement.load()
                }
                async prepare() {
                    if (this.isReady) return;
                    const e = async () => {
                        try {
                            this.audioElement.volume = 0, await this.audioElement.play(), await new Promise((e => {
                                setTimeout(e, 1)
                            })), await this.audioElement.pause(), this.audioElement.volume = 1, this.isReady = !0, document.removeEventListener("touchstart", e), document.removeEventListener("keydown", e), document.removeEventListener("mousedown", e)
                        } catch (e) {
                            console.error("Failed to prepare audio", e)
                        }
                    };
                    document.addEventListener("touchstart", e, {
                        once: !0
                    }), document.addEventListener("keydown", e, {
                        once: !0
                    }), document.addEventListener("mousedown", e, {
                        once: !0
                    })
                }
                async play(e) {
                    if (this.isReady) try {
                        this.audioElement.src = e, await this.audioElement.play()
                    } catch (e) {
                        console.error("Failed to play audio", e)
                    } else console.warn("Audio not prepared. Call prepare() first")
                }
                getCurrentTime() {
                    return this.audioElement.currentTime
                }
                stop() {
                    this.audioElement.pause(), this.audioElement.currentTime = 0
                }
                setVolume(e) {
                    this.audioElement.volume = Math.max(0, Math.min(1, e))
                }
            }
        },
        58606: (e, t, o) => {
            o.d(t, {
                A: () => i
            });
            var n = o(46278);
            const s = {
                api: n.Ay,
                vote: n.Vy,
                tracking: n.E5
            };

            function i(e = "api") {
                return s[e]
            }
        },
        80382: (e, t, o) => {
            o.d(t, {
                NH: () => r,
                oI: () => i,
                rL: () => s
            });
            var n = o(40890);

            function s(e, t, {
                id: o,
                developer: s,
                slug: i,
                image: r,
                image_alt: c,
                mobile: a,
                title: l,
                is_new: d,
                animated_thumbnail: u,
                iab_categories: p
            }) {
                return {
                    id: o,
                    developer: s,
                    mobile: a,
                    title: l,
                    type: t,
                    image: r,
                    imageAlt: c,
                    url: (0, n.AO)(e, t, i),
                    slug: i,
                    isNew: d,
                    animatedThumbnail: u,
                    iabCategories: p
                }
            }

            function i(e) {
                return e.filter((e => e.mobile))
            }

            function r(e = "desktop", t) {
                return "mobile" === e ? [...t].sort(((e, t) => e.mobile === t.mobile ? 0 : e.mobile ? -1 : 1)) : t
            }
        },
        91629: (e, t, o) => {
            o.d(t, {
                A: () => m
            });
            var n = o(20038),
                s = o(72750),
                i = o(93045),
                r = o(91323),
                c = o(4864),
                a = o(43908),
                l = o(61481),
                d = o(48554),
                u = o(88800),
                p = o(58606),
                h = o(16536),
                V = o(33992);

            function m(e, t, m) {
                const y = (0, s.C)({
                        dependencies: {
                            createApi: p.A
                        }
                    }),
                    {
                        createReduxHistory: A,
                        routerMiddleware: v
                    } = (0, i.a1)({
                        history: e
                    }),
                    f = (0, c.A)(e),
                    w = (0, n.U1)({
                        reducer: f,
                        middleware: e => e({
                            serializableCheck: {
                                ignoredActions: [d.wZ.type, u.Gg.type],
                                ignoredPaths: ["notifications"]
                            }
                        }).prepend(h.LP.middleware).concat([v, y, l.lh.middleware]),
                        preloadedState: (0, V.R)(m || {}),
                        enhancers: e => e()
                    });
                return "undefined" != typeof window && (window.store = w, (0, a.l0)((0, r.n)(w.getState()))), A(w), "function" == typeof t && y.run(t), "undefined" != typeof window && o.e(4368).then(o.bind(o, 4368)).then((({
                    fireCombinedAsyncEpics: e
                }) => {
                    "function" == typeof requestIdleCallback ? requestIdleCallback((() => {
                        e()
                    }), {
                        timeout: 2e3
                    }) : setTimeout((() => {
                        e()
                    }), 1)
                })), w
            }
        }
    }
]);
//# sourceMappingURL=client~main-e9d155aa~1a998f2e94e1b1028fb5.js.map