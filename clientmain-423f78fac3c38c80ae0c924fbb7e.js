try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2d310d93-026f-4f4e-8c72-2a5f0bf5650b", e._sentryDebugIdIdentifier = "sentry-dbid-2d310d93-026f-4f4e-8c72-2a5f0bf5650b")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9786], {
        34524: (e, a, t) => {
            t.d(a, {
                $E: () => J,
                $i: () => x,
                Ay: () => Z,
                Fw: () => O,
                GE: () => K,
                HH: () => v,
                I2: () => W,
                Lz: () => V,
                MS: () => R,
                Q5: () => B,
                QB: () => P,
                XB: () => G,
                XZ: () => C,
                eb: () => E,
                i$: () => A,
                i8: () => M,
                iM: () => F,
                j5: () => N,
                jO: () => D,
                jp: () => z,
                mY: () => T,
                nj: () => j,
                o3: () => S,
                oP: () => I,
                sF: () => w,
                th: () => U,
                wt: () => L
            });
            var o = t(20038),
                n = t(1081),
                s = t(48554),
                d = t(42891),
                i = t(90385),
                c = t(91323),
                r = t(11436),
                l = t(53210),
                u = t(15049),
                m = t(25733),
                p = t(89385),
                g = t(17782),
                f = t(73421),
                h = t(16345),
                y = t(28933),
                _ = t(35190);
            let b;
            try {
                navigator ? .cookieDeprecationLabel && navigator.cookieDeprecationLabel.getValue().then((e => {
                    b = e
                }))
            } catch {}
            const k = (0, o.Z0)({
                    name: "ads",
                    initialState: {
                        takeover: null,
                        pokiSDKLoaded: !1,
                        adStackLoaded: !1,
                        adStackReadyForLoad: !1,
                        adBlocked: !1,
                        mobileAdsOpportunity: !1,
                        gameBarHouseAdCount: 0,
                        gameBarHouseAdEmpty: !1
                    },
                    reducers: {
                        pokiSDKLoaded: e => {
                            e.pokiSDKLoaded = !0
                        },
                        adStackLoaded: e => {
                            e.adStackLoaded = !0
                        },
                        adBlocked: e => {
                            e.adBlocked = !0
                        },
                        startImmersiveTakeover: (e, a) => {
                            e.takeover = a.payload.takeover
                        },
                        stopImmersiveTakeover: e => {
                            e.takeover = null
                        },
                        setMobileAdsOpportunity: (e, a) => {
                            e.mobileAdsOpportunity = a.payload.allowed
                        },
                        countGameBarHouseAd: (e, a) => {
                            e.gameBarHouseAdEmpty = a.payload.isEmpty, e.gameBarHouseAdCount += a.payload.isEmpty ? 0 : 1
                        }
                    },
                    extraReducers: e => {
                        e.addCase(s.Br, (e => {
                            e.adStackReadyForLoad = !0, e.gameBarHouseAdCount = 0, e.gameBarHouseAdEmpty = !1
                        }))
                    }
                }),
                w = (0, o.VP)("ads/refresh_display_ads"),
                S = (0, g.A)("ads/display_ad"),
                C = (0, g.A)("ads/refresh_ad"),
                P = (0, g.A)("ads/destory_ad_slot"),
                L = (0, o.VP)("ads/force_stop_ad_refresh"),
                A = (0, o.VP)("ads/cleanup_companion_ad"),
                {
                    pokiSDKLoaded: G,
                    adStackLoaded: v,
                    adBlocked: B,
                    startImmersiveTakeover: D,
                    stopImmersiveTakeover: z,
                    setMobileAdsOpportunity: E,
                    countGameBarHouseAd: I
                } = k.actions,
                M = (0, n.Mz)(d.Kk, u.dR, u.lb, ((e, a, t) => {
                    if ("undefined" != typeof window) {
                        const e = new URL(window ? .location ? .toString()) ? .searchParams ? .get("force_ay_mode") || _.G.NOT_APPLICABLE;
                        if ([_.G.DISABLED, _.G.PBS_ONLY, _.G.DPF_ONLY, _.G.CSTS_ONLY, _.G.PBS_DPF_CSTS, _.G.ON].includes(e)) return console.warn("AY mode set by URL parameter:", e), e
                    }
                    return t || !a ? _.G.NOT_APPLICABLE : e >= 4 && e < 8 ? _.G.PBS_ONLY : e >= 8 && e < 12 ? _.G.DPF_ONLY : e >= 12 && e < 16 ? _.G.DISABLED : _.G.ON
                })),
                O = (0, n.Mz)(M, d.wu, ((e, a) => (0, y.J)(e, a))),
                Y = (0, n.Mz)(r.fn, (e => {
                    const {
                        referrer: a
                    } = document, t = new URLSearchParams(e);
                    let o = "";
                    try {
                        o = new URL(a).hostname
                    } catch {}
                    return "web_app_manifest" === t.get("utm_source") ? "pwa" : "android_app" === t.get("poki_source") ? "android_app" : /(googleads\.g\.doubleclick\.net|tpc\.googlesyndication\.com|imasdk\.googleapis\.com|www\.googleadservices\.com)$/.test(o) || t.has("gclid") || t.has("msclkid") || t.has("yclid") || t.has("ttclid") || t.has("fbclid") || t.has("utm_campaign") || t.has("campaign") || t.has("adgroup") || t.has("creative") || "bing" === t.get("utm_source") || "cpc" === t.get("utm_medium") || "rtb-cpm" === t.get("utm_medium") ? "paid" : /(google\.[a-z]{2,3}|google\.[a-z]{2,3}\.[a-z]{2,3}|yandex\.[a-z]{2,3}|yandex\.[a-z]{2,3}\.[a-z]{2,3}|baidu\.[a-z]{2,3}\.[a-z]{2,3}|yahoo\.[a-z]{2,3}|yahoo\.[a-z]{2,3}\.[a-z]{2,3}|aol\.com|ask\.com|avg\.com|babylon\.com|bing\.com|com\.google\.android\.googlequicksearchbox|duckduckgo\.com|googleweblight\.com|info\.com|int\.search\.myway\.com|izito\.com|msn\.com|myway\.com|naver\.com|qo-search\.com|r\.searchencrypt\.com|search-results\.com|searchlock\.com|seznam\.cz|so\.com|sogou\.com|startgoogle\.startpagina\.nl|startpage\.com|startsiden\.no|virgilio\.it|webcache\.googleusercontent\.com|wp\.pl|zapmeta\.com)$/.test(o) || t.get("utm_term") && "share" !== t.get("utm_medium") ? "search" : a || "share" === t.get("utm_medium") ? "referral" : "direct"
                })),
                H = (0, n.Mz)(r.fn, (e => {
                    const {
                        referrer: a
                    } = document, t = new URLSearchParams(e);
                    return t.has("gclid") ? "google" : t.has("msclkid") ? "bing" : t.has("yclid") ? "yandex" : t.has("ttclid") ? "tiktok" : a ? .includes("google") ? "google" : a ? .includes("bing") ? "bing" : a ? .includes("yahoo") ? "yahoo" : a ? .includes("yandex") ? "yandex" : a ? .includes("tiktok") ? "tiktok" : null
                })),
                x = (0, n.Mz)(r.m_, c.Gd, i.Vv, l.p, d.H6, M, Y, H, m.v, ((e, a, t, o, n, s, d, i, c) => {
                    const r = {
                        tag: "pg-v75bcf2398d3fb2a92281989653952fcadc61081a",
                        ab: Math.floor(100 * Math.random()).toString(),
                        experiment: o,
                        page_has_mpu: "no",
                        page_has_skyscraper: "no",
                        page_has_lead: "no",
                        cookieDepL: b,
                        site_id: a.id,
                        ay_mode: s,
                        source_channel_lp: `${d||"null"}|${i||"null"}|${c.landing_page?.type||"null"}`
                    };
                    if (t && (r["game-id"] = t.id, r.categories = (t.categories || []).map((({
                            id: e
                        }) => e)), o && (r.expid_content_gameid = `${o}|${t.id}`)), e && (r.debug = e), !n) {
                        let e = 3;
                        const a = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                            t = Object.keys(f.xu);
                        for (let o = 0; o < t.length; o++) {
                            const n = Number(t[o]),
                                s = f.xu[n] || 0,
                                d = f.xu[Number(t[o + 1])] || 1 / 0;
                            if (a >= s && a <= d) {
                                e = n;
                                break
                            }
                        }
                        r.page_has_lead = "yes", e >= 12 && (r.page_has_mpu = "yes"), [9, 11, 17].includes(e) && (r.page_has_skyscraper = "yes")
                    }
                    return r
                }));

            function F(e) {
                return e.ads.takeover
            }

            function V(e) {
                return e.ads.pokiSDKLoaded
            }

            function N(e) {
                return e.ads.adStackLoaded
            }

            function T(e) {
                return e.ads.gameBarHouseAdCount
            }

            function R(e) {
                return e.ads.gameBarHouseAdEmpty
            }
            const j = e => e.ads.adBlocked,
                $ = (0, n.Mz)(d.H6, (e => e.ads.adStackReadyForLoad), ((e, a) => !e || a));

            function K(e) {
                return e.ads.mobileAdsOpportunity
            }
            const U = (0, n.Mz)(V, d.Wv, $, u.CN, p.Jk, p.iJ, ((e, a, t, o, n, s) => o ? n ? e && a && t && s : e && a && t : e && t)),
                J = (0, n.Mz)(i.Vv, (e => {
                    const a = [];
                    return e ? .categories && e.categories.forEach((e => {
                        e.iabCategories && e.iabCategories.split(",").forEach((e => {
                            a.includes(e) || a.push(e)
                        }))
                    })), a.sort(), a
                })),
                W = (0, n.Mz)(i.Vv, c.Gd, ((e, a) => {
                    const t = (0, h.A)(),
                        o = 3 === a.id ? "Poki" : a.domain_title;
                    return {
                        site: {
                            name: o,
                            domain: window.location.hostname,
                            page: window.location.href,
                            privacypolicy: 1,
                            publisher: {
                                name: o,
                                domain: a.domain
                            },
                            content: e ? {
                                id: `${e.id}`,
                                title: e.title,
                                url: window.location.href,
                                sourcerelationship: 1
                            } : {}
                        },
                        device: {
                            w: t.width,
                            h: t.height
                        }
                    }
                })),
                Z = k
        },
        89385: (e, a, t) => {
            t.d(a, {
                Ay: () => z,
                Bw: () => S,
                Cf: () => v,
                Ep: () => h,
                Fh: () => _,
                Gw: () => y,
                Hj: () => k,
                IT: () => p,
                Jk: () => u,
                Pw: () => b,
                QF: () => g,
                V1: () => G,
                g8: () => C,
                hK: () => D,
                iJ: () => m,
                ij: () => f,
                qf: () => A
            });
            var o = t(8120),
                n = t(20038),
                s = t(10179),
                d = t(90385),
                i = t(7696),
                c = t(16536),
                r = t(46493),
                l = t(52694);
            const u = e => e.account.enabled,
                m = e => e.account.status,
                p = e => e.account.session,
                g = e => e.account.flow,
                f = e => e.account.isPanelVisible,
                h = e => 200 === e.account.status,
                y = e => e.account.wasLoggedInBefore,
                _ = e => e.account.disabledSaveGames,
                b = e => e.account.pendingParentalGameConsent,
                k = e => e.account.fetchedParentalGameConsent,
                w = (0, o.Mz)(p, (e => {
                    if (!e) return null;
                    const a = new Date(e.identity.birthdate);
                    return (new Date).getFullYear() - a.getFullYear()
                })),
                S = (0, o.Mz)(d.Vv, h, w, ((e, a, t) => !!a && (!(!t || t >= 13) && !(!e.parental_consent_reasons || 0 === e.parental_consent_reasons.length)))),
                C = (0, o.Mz)(d.Vv, (e => e.account.parentalGameConsent), ((e, a) => a[e.id] ? .hasConsent)),
                P = (0, n.Z0)({
                    name: "account",
                    initialState: {
                        enabled: !1,
                        status: null,
                        session: null,
                        flow: null,
                        isPanelVisible: !1,
                        wasLoggedInBefore: !1,
                        disabledSaveGames: [],
                        hasPasskeySupport: !0,
                        parentalGameConsent: {},
                        pendingParentalGameConsent: !1,
                        fetchedParentalGameConsent: !1
                    },
                    reducers: {
                        setEnableAccount: (e, a) => {
                            e.enabled = a.payload.enabled
                        },
                        toggleAccountPanel: e => {
                            e.isPanelVisible = !e.isPanelVisible, e.isPanelVisible || window.frames ? .gameFrame ? .postMessage ? .({
                                type: "pokiAccountsAuthPanelClosed"
                            }, "*")
                        },
                        setWasLoggedInBefore: e => {
                            e.wasLoggedInBefore = !0
                        },
                        setFlow: (e, a) => {
                            let t = a.payload.flowData;
                            const o = (e => e.account.hasPasskeySupport)({
                                account: e
                            });
                            t = (0, l.py)(t), o || (t = (0, l.rn)(t)), e.flow = t
                        },
                        setDisabledSaveGames: (e, a) => {
                            e.disabledSaveGames.includes(a.payload.gameID) || e.disabledSaveGames.push(a.payload.gameID)
                        },
                        setHasPasskeySupport: (e, a) => {
                            e.hasPasskeySupport = a.payload.hasPasskeySupport
                        }
                    },
                    extraReducers: e => {
                        e.addCase(s.sx.fulfilled, ((e, a) => {
                            e.session = a.payload, e.status = 200, a ? .payload ? .identity ? .birthdate || (e.isPanelVisible = !0)
                        })), e.addCase(s.sx.rejected, (e => {
                            e.session = null, e.status = 401
                        })), e.addCase(s.Y3.pending, ((e, a) => {
                            const t = a.meta.arg;
                            e.parentalGameConsent[t] = {
                                pending: !0,
                                hasConsent: !1
                            }
                        })), e.addCase(s.Y3.fulfilled, ((e, a) => {
                            const t = a.meta.arg;
                            e.parentalGameConsent[t] = {
                                pending: !1,
                                hasConsent: !0
                            }
                        })), e.addCase(s.Y3.rejected, ((e, a) => {
                            const t = a.meta.arg;
                            e.parentalGameConsent[t] = {
                                pending: !1,
                                hasConsent: !1
                            }
                        })), e.addCase(s.YY.pending, (e => {
                            e.pendingParentalGameConsent = !0, e.fetchedParentalGameConsent = !1
                        })), e.addCase(s.YY.fulfilled, ((e, a) => {
                            e.pendingParentalGameConsent = !1, e.fetchedParentalGameConsent = !0, e.parentalGameConsent = {}, a.payload && Array.isArray(a.payload) && a.payload.forEach((a => {
                                e.parentalGameConsent[a.game_id] = {
                                    pending: !1,
                                    hasConsent: !0
                                }
                            }))
                        })), e.addCase(s.YY.rejected, (e => {
                            e.pendingParentalGameConsent = !1, e.fetchedParentalGameConsent = !0, e.parentalGameConsent = {}
                        }))
                    }
                }),
                {
                    setEnableAccount: L,
                    toggleAccountPanel: A,
                    setFlow: G,
                    setWasLoggedInBefore: v,
                    setHasPasskeySupport: B,
                    setDisabledSaveGames: D
                } = P.actions;
            (0, c.Zv)({
                actionCreator: s.sx.fulfilled,
                effect: (e, a) => {
                    const t = a.getState(),
                        o = p(t),
                        n = o ? .identity ? .ad_mode,
                        d = o ? .identity ? .is_first_login,
                        c = o ? .authentication_method || "unknown";
                    "personalized" !== n && a.dispatch((0, i.Yt)({
                        toggle: !0
                    })), a.dispatch(v()), d ? ((0, r.F)({
                        category: "account",
                        action: "registerSuccess",
                        label: c
                    }), a.dispatch((0, s.jE)())) : (0, r.F)({
                        category: "account",
                        action: "loginSuccess",
                        label: c
                    })
                }
            }), (0, c.Zv)({
                actionCreator: s.sx.rejected,
                effect: async (e, a) => {
                    const t = await (0, l.ec)();
                    a.dispatch(B({
                        hasPasskeySupport: t
                    })), (0, r.F)({
                        category: "account",
                        action: "hasPasskeySupport",
                        label: t ? "true" : "false"
                    })
                }
            });
            const z = P
        }
    }
]);
//# sourceMappingURL=client~main-423f78fa~c3c38c80ae0c924fbb7e.js.map