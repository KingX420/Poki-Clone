try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c1c22426-a16b-413a-8e80-c8fffa6e6d75", e._sentryDebugIdIdentifier = "sentry-dbid-c1c22426-a16b-413a-8e80-c8fffa6e6d75")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8818], {
        574: (e, t, n) => {
            n.d(t, {
                K: () => p
            });
            var r = n(1081),
                a = n(42891),
                o = n(90385),
                i = n(91323);
            const s = {};
            var c = n(25733),
                l = n(53210),
                d = n(15049),
                u = n(11436);
            const p = (0, r.Mz)(a.wu, c.v, (function() {
                return "undefined" == typeof window ? s : JSON.parse(JSON.stringify(window.user || {}))
            }), i.Gd, l.p, o.K5, o.Vv, o.N2, u.k4, d.Ir, ((e, t, n, r, a, o, i, s, c, l) => {
                let d = {};
                "game" === o && (d = {
                    id: i.id,
                    type: "game",
                    path: c,
                    content: {
                        game: {
                            id: i.id
                        }
                    }
                }), "category" === o && (d = {
                    id: s.id,
                    type: "category",
                    path: c
                }), "home" === o && (d = {
                    type: "home",
                    id: 0,
                    path: c
                });
                return {
                    geo: e,
                    session: t,
                    user: n,
                    site: r,
                    experiment: a,
                    page: d,
                    tag: "pg-75bcf2398d3fb2a92281989653952fcadc61081a",
                    isPokiAnalyticsEnabled: l
                }
            }))
        },
        4864: (e, t, n) => {
            n.d(t, {
                A: () => S
            });
            var r = n(82960),
                a = n(34524),
                o = n(18864),
                i = n(42891),
                s = n(75685);

            function c(e = {}, t) {
                return t.type === s.x.type ? { ...e,
                    ...t.conversions
                } : e
            }
            var l = n(51149);
            const d = {
                config: {}
            };

            function u(e = d, t) {
                return t.type === l.m.type ? { ...e,
                    config: t.config
                } : e
            }
            var p = n(48554),
                f = n(23260);
            const g = {
                    currentPagePath: null,
                    previousPagePath: null,
                    pages: {}
                },
                y = {
                    pokifordevs_team_id: void 0,
                    developer: void 0
                };

            function v(e = g, t) {
                const n = e.pages && e.pages[t ? .payload ? .path] || y;
                return t.type === f.y.type ? { ...e,
                    pages: { ...e.pages,
                        [t.payload.path]: { ...n,
                            pokifordevs_team_id: t.payload.pokifordevs_team_id,
                            developer: t.payload.developer
                        }
                    },
                    currentPagePath: t.payload.path,
                    previousPagePath: e.currentPagePath
                } : e
            }
            var m = n(86494);
            const h = {
                voteEpicInitilized: !1,
                userVotes: {},
                previousUserVotes: {},
                feedbackGiven: {},
                ratingsData: {}
            };

            function b(e = h, t) {
                if (t.type === m.fU.type) return { ...e,
                    voteEpicInitilized: !0
                };
                if (t.type === m.Vy.type) return { ...e,
                    userVotes: { ...e.userVotes,
                        [t.gameId]: t.direction
                    },
                    previousUserVotes: { ...e.previousUserVotes,
                        [t.gameId]: e.userVotes[t.gameId]
                    },
                    feedbackGiven: { ...e.feedbackGiven,
                        [t.gameId]: !1
                    }
                };
                if (t.type === m.rY.type) return { ...e,
                    feedbackGiven: { ...e.feedbackGiven,
                        [t.gameId]: !0
                    }
                };
                if (t.type === m.jO.type) return { ...e,
                    ratingsData: { ...t.ratingsData
                    }
                };
                if (t.type === m.Kz.type) {
                    const n = { ...e.userVotes
                        },
                        r = { ...e.previousUserVotes
                        },
                        a = { ...e.feedbackGiven
                        };
                    return delete n[t.gameId], delete r[t.gameId], delete a[t.gameId], { ...e,
                        userVotes: n,
                        previousUserVotes: r,
                        feedbackGiven: a
                    }
                }
                return e
            }
            var k = n(6788),
                _ = n(822),
                A = n(88800),
                w = n(91323),
                C = n(7696);
            const M = {
                privacyCenterViewed: !1,
                personalizedAds: !0,
                pokiAnalytics: !0,
                adsAllowed: !0,
                bingRemarketingEnabled: !0,
                googleRemarketingEnabled: !0,
                enableCMP: !0,
                sendDeviceCapabilities: !0,
                isFamilyMode: !1,
                familyModeCookieConsentShown: void 0
            };

            function P(e = M, t) {
                return t.type === C.kN.type ? { ...e,
                    privacyCenterViewed: t.toggle
                } : t.type === C.pI.type ? { ...e,
                    personalizedAds: t.toggle
                } : t.type === C.S9.type ? { ...e,
                    pokiAnalytics: t.toggle
                } : t.type === C.LX.type ? { ...e,
                    adsAllowed: t.toggle
                } : t.type === C.QX.type ? { ...e,
                    bingRemarketingEnabled: t.toggle
                } : t.type === C.X6.type ? { ...e,
                    googleRemarketingEnabled: t.toggle
                } : t.type === C.CU.type ? { ...e,
                    enableCMP: t.toggle
                } : t.type === C.Dz.type ? { ...e,
                    sendDeviceCapabilities: t.toggle
                } : t.type === C.Yt.type ? { ...e,
                    isFamilyMode: t.toggle
                } : t.type === C.rB.type ? { ...e,
                    familyModeCookieConsentShown: t.shown
                } : e
            }
            var z = n(15203),
                I = n(97454),
                G = n(89385),
                O = n(5403);
            const E = ({
                basename: e,
                defaultLocation: t = {}
            }) => {
                const n = {
                    location: t,
                    action: null,
                    basename: e,
                    forceReload: !1
                };
                return (e = n, t = {}) => {
                    const {
                        type: r
                    } = t;
                    if ("@@router/LOCATION_CHANGE" === r) {
                        const {
                            location: n,
                            action: r
                        } = t.payload || {};
                        return { ...e,
                            location: n,
                            action: r
                        }
                    }
                    if (r === O.N.type) {
                        const {
                            forceReload: n
                        } = t;
                        return { ...e,
                            forceReload: n
                        }
                    }
                    return e
                }
            };
            n(52600);
            var L = n(61481);
            const S = e => (0, r.HY)({
                router: E({
                    defaultLocation: e.location
                }),
                ads: a.Ay.reducer,
                background: o.Ay,
                client: i.Ay.reducer,
                currency: c,
                experiment: u,
                game: p.Ay.reducer,
                pages: v,
                ratings: b,
                bugReport: k.Ay.reducer,
                search: _.Ay.reducer,
                notifications: A.Ay.reducer,
                site: w.Ay.reducer,
                privacy: P,
                mystery: z.Ay.reducer,
                eastereggs: I.Ay.reducer,
                account: G.Ay.reducer,
                [L.lh.reducerPath]: L.lh.reducer
            })
        },
        11436: (e, t, n) => {
            n.d(t, {
                E6: () => v,
                IA: () => l,
                Lf: () => y,
                Ms: () => g,
                Pn: () => f,
                fn: () => i,
                hk: () => c,
                k4: () => d,
                m_: () => p
            });
            var r = n(1081),
                a = n(91323),
                o = n(40890);

            function i(e) {
                return e.router ? .location ? .search
            }
            const s = ["cache", "device", "site", "browserfamily", "traffic-tag"],
                c = (0, r.Mz)(i, (e => {
                    const t = new URLSearchParams;
                    for (const [n, r] of new URLSearchParams(e)) s.includes(n) || t.append(n, r);
                    const n = t.toString();
                    return n ? `?${n}` : ""
                })),
                l = (0, r.Mz)(i, (e => {
                    const t = {};
                    return new URLSearchParams(e).forEach(((e, n) => {
                        n.toLowerCase().startsWith("gd") && (t[n] = e)
                    })), t
                }));

            function d(e) {
                return e.router ? .location ? .pathname
            }
            const u = (0, r.Mz)((e => e.router ? .location ? .pathname), i, ((e, t) => e + t)),
                p = ((0, r.Mz)(((e, t) => t || u(e)), (e => e.client.host), c, ((e, t, n) => `${t}${e}${n}`)), (0, r.Mz)((e => e.router.location.search.replace(/^\?/, "")), (e => {
                    if (!e) return;
                    const t = e.split("&").find((e => /^debug=/.test(e)));
                    if (!t) return;
                    const [, ...n] = t.split("=");
                    return n.join("=")
                }))),
                f = (0, r.Mz)(a.Gd, (e => (0, o.AO)(e, "home", "")));

            function g(e) {
                const t = d(e),
                    n = (0, a.Gd)(e),
                    r = (0, o.M5)(n, t);
                return (0, o.TH)(n, r, t)
            }

            function y(e) {
                return e.router.forceReload
            }

            function v(e) {
                return e.router.action
            }
        },
        15049: (e, t, n) => {
            n.d(t, {
                CN: () => c,
                Ir: () => a,
                Py: () => i,
                U4: () => r,
                VH: () => u,
                YQ: () => s,
                dR: () => d,
                dV: () => o,
                hv: () => p,
                lb: () => l
            });
            const r = e => e.privacy.privacyCenterViewed,
                a = e => e.privacy.pokiAnalytics,
                o = e => e.privacy.adsAllowed,
                i = e => e.privacy.bingRemarketingEnabled,
                s = e => e.privacy.googleRemarketingEnabled,
                c = e => e.privacy.enableCMP,
                l = e => e.privacy.isFamilyMode,
                d = e => e.privacy.personalizedAds,
                u = e => e.privacy.familyModeCookieConsentShown;

            function p(e) {
                const t = a(e),
                    n = l(e),
                    r = e.privacy.sendDeviceCapabilities;
                return t && r && !n
            }
        },
        25733: (e, t, n) => {
            function r() {
                return "undefined" == typeof window ? {} : JSON.parse(JSON.stringify(window.session || {}))
            }
            n.d(t, {
                v: () => r
            })
        },
        28685: (e, t, n) => {
            n.d(t, {
                L: () => r,
                W: () => a
            });
            const r = e => e.notifications.stack;

            function a(e, t) {
                const {
                    stack: n
                } = e.notifications;
                return n.find((e => e.id === t)) || null
            }
        },
        43908: (e, t, n) => {
            n.d(t, {
                TH: () => i,
                l0: () => s,
                sv: () => c
            });
            var r = n(40890);
            const a = {},
                o = {},
                i = [],
                s = e => {
                    Object.entries(e).forEach((([e, t]) => {
                        "xx" !== t.iso_lang && (a[e] = t, i.push({
                            href: (0, r.kC)(t, "home", ""),
                            hrefLang: t.iso_lang,
                            lang: t.lang
                        }), o[t.iso_lang] = t)
                    })), i.push({
                        href: (0, r.kC)(a[3], "home", ""),
                        hrefLang: "x-default"
                    })
                },
                c = () => o
        },
        53210: (e, t, n) => {
            function r(e) {
                return e.experiment ? .config ? .playground ? .sdk_version
            }

            function a(e) {
                return e.experiment ? .config ? .id
            }
            n.d(t, {
                c: () => r,
                p: () => a
            })
        },
        88421: (e, t, n) => {
            function r(e) {
                return e.search.expanded
            }

            function a(e) {
                return e.search.pending
            }

            function o(e) {
                return e.search.error
            }

            function i(e) {
                return e.search.query
            }

            function s(e) {
                return e.search.searchSessionId
            }

            function c(e) {
                return e.search.results
            }

            function l(e) {
                return e.search.quickSearchCategories
            }
            n.d(t, {
                AB: () => l,
                GO: () => r,
                Ie: () => s,
                SO: () => a,
                Z1: () => i,
                fj: () => c,
                j5: () => o
            })
        },
        90385: (e, t, n) => {
            n.d(t, {
                $B: () => I,
                FR: () => C,
                K5: () => v,
                N2: () => k,
                Qk: () => g,
                Sk: () => L,
                TI: () => E,
                Ue: () => m,
                Vv: () => b,
                Xk: () => y,
                ZI: () => P,
                hj: () => G,
                nK: () => A,
                tM: () => M
            });
            var r = n(1081),
                a = n(42891),
                o = n(98708),
                i = n(91323),
                s = n(40890),
                c = n(15049),
                l = n(43908),
                d = n(36774),
                u = n(61481),
                p = n(53210),
                f = n(11436);

            function g(e) {
                return e.router.location.pathname
            }

            function y(e) {
                return null === e.pages.previousPagePath
            }
            const v = (0, r.Mz)(i.Gd, g, ((e, t) => (0, s.M5)(e, t)));

            function m(e) {
                const {
                    pages: t
                } = e, n = g(e), r = function(e) {
                    return e.pages.previousPagePath
                }(e), a = t.pages[n], o = r ? t.pages[r] : null;
                return a ? .pokifordevs_team_id && o ? .pokifordevs_team_id ? a.pokifordevs_team_id === o.pokifordevs_team_id : !(!a ? .developer || !o ? .developer) && a.developer === o.developer
            }
            const h = e => u.lh.endpoints.getGame.select({
                slug: (0, f.Ms)(e),
                site: (0, i.Gd)(e),
                device: (0, a.xp)(e),
                geo: (0, a.wu)(e),
                experiment: (0, p.p)(e),
                pageType: v(e),
                path: (0, f.k4)(e)
            })(e);

            function b(e) {
                const t = v(e);
                if ("game" !== t && "preview" !== t && "mystery" !== t) return {};
                const n = h(e);
                return "fulfilled" === n.status ? n.data : {}
            }
            const k = e => {
                if (!("category" === v(e))) return {};
                const t = (e => u.lh.endpoints.getCategory.select({
                    slug: (0, f.Ms)(e),
                    site: (0, i.Gd)(e),
                    device: (0, a.xp)(e),
                    geo: (0, a.wu)(e),
                    experiment: (0, p.p)(e)
                })(e))(e);
                return "fulfilled" === t.status ? t.data : {}
            };

            function _(e) {
                if (!("home" === v(e))) return {};
                const t = (e => u.lh.endpoints.getHomepage.select({
                    site: (0, i.Gd)(e),
                    device: (0, a.xp)(e),
                    geo: (0, a.wu)(e),
                    experiment: (0, p.p)(e),
                    trafficSource: (0, a.zO)(e)
                })(e))(e);
                return "fulfilled" === t.status ? t.data : {}
            }
            const A = (0, r.Mz)(v, b, k, _, ((e, t, n, r) => {
                    let a = [];
                    return "game" === e && (a = t.alternates), "category" === e && (a = n ? .alternates), "home" === e && (a = r.alternates), a ? a.filter((({
                        hrefLang: e
                    }) => "x-default" !== e)).map((({
                        href: e,
                        hrefLang: t,
                        lang: n,
                        title: r
                    }) => ({
                        href: e,
                        hrefLang: t,
                        title: r,
                        lang: n,
                        languageName: (0, l.sv)()[t].languageName
                    }))).sort(((e, t) => e.languageName.localeCompare(t.languageName, "en"))) : []
                })),
                w = {
                    PT: "https://a.poki-cdn.com/privacy/Portugal%20-%202024.12.16_Poki_privacy_statement.pdf",
                    BR: "https://a.poki-cdn.com/privacy/Brazil%20-%202024.12.16_Poki_privacy_statement.pdf"
                },
                C = (0, r.Mz)(i.Gd, (e => (0, s.AO)(e, "privacy", ""))),
                M = (0, r.Mz)(i.Gd, a.wu, ((e, t) => {
                    const n = w[t];
                    return n || (0, s.AO)(e, "content", (d._k.includes(t) ? "" : "global-") + "privacy-statement")
                })),
                P = (0, r.Mz)(i.Gd, a.wu, ((e, t) => (0, s.AO)(e, "content", (d._k.includes(t) ? "" : "global-") + "cookie-statement"))),
                z = {
                    PT: "https://a.poki-cdn.com/privacy/Portugal%20-%202024.12.16_Poki_terms_of_use.pdf",
                    BR: "https://a.poki-cdn.com/privacy/Brazil%20-%202024.12.16_Poki_terms_of_use.pdf"
                },
                I = (0, r.Mz)(i.Gd, a.wu, ((e, t) => {
                    const n = z[t];
                    return n || (0, s.AO)(e, "content", (d._k.includes(t) ? "" : "global-") + "terms-of-use")
                })),
                G = (0, r.Mz)(a.wu, (e => !["NL", "GB", "ES"].includes(e))),
                O = (0, r.Mz)(i.Gd, (e => (0, s.AO)(e, "content", "contact"))),
                E = (0, r.Mz)(i.Gd, o.K, O, M, P, I, c.lb, a.wu, G, ((e, t, n, r, a, o, i, c, l) => [{
                    label: t.about,
                    url: "https://about.poki.com",
                    external: !0
                }, {
                    label: t.developers,
                    url: "https://developers.poki.com",
                    external: !0
                }, {
                    label: t.jobs,
                    url: "https://jobs.poki.com",
                    external: !0
                }, i ? null : {
                    label: t.poki_kids,
                    url: "https://kids.poki.com",
                    external: !0
                }, !1 === l ? {
                    label: t.privacy_statement,
                    url: r
                } : null, i || l ? null : {
                    label: t.cookie_statement,
                    url: a
                }, !1 === l ? {
                    label: t.nav_terms_of_use,
                    url: o
                } : null, !0 === l ? {
                    label: "Privacy Center",
                    url: (0, s.AO)(e, "privacy", "")
                } : null, "CA" === c ? {
                    label: "⚙️ Cookie settings",
                    url: (0, s.AO)(e, "privacy", "")
                } : null, {
                    label: t.faq,
                    url: (0, s.AO)(e, "content", "faq")
                }, {
                    label: t.nav_contact,
                    url: n
                }].filter((e => null !== e))));

            function L(e) {
                const t = u.lh.endpoints.getImvitaConfigs.select({})(e);
                return "fulfilled" === t.status ? t.data : {}
            }
        },
        98417: (e, t, n) => {
            n.d(t, {
                d: () => s,
                H: () => c
            });
            var r = n(1081),
                a = n(61348);
            var o = n(42891),
                i = n(34524);

            function s(e) {
                const t = (0, o.H6)(e),
                    n = a.A[t ? "mobile" : "desktop"];
                return Object.values(n).map((t => t(e)))
            }
            const c = (0, r.Mz)(s, (function(e) {
                return e.currency
            }), i.I2, ((e, t, n) => ({
                adUnits: e,
                config: {
                    debug: !1,
                    useBidCache: !0,
                    bidCacheFilterFunction: e => !("video" === e.mediaType && "rubicon" === e.bidder),
                    currency: {
                        adServerCurrency: "EUR",
                        rates: t,
                        defaultRates: t
                    },
                    ortb2: n
                }
            })))
        },
        98708: (e, t, n) => {
            n.d(t, {
                K: () => i
            });
            var r = n(1081),
                a = n(61481),
                o = n(91323);
            const i = (0, r.Mz)((e => a.lh.endpoints.getLocalisations.select({
                site: (0, o.Gd)(e)
            })(e)), (e => e ? .data || []))
        }
    }
]);
//# sourceMappingURL=client~main-63cb1cc4~be54835bd9288544c713.js.map