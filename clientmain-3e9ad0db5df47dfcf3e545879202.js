try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2caa1e1a-8bb4-4046-9c34-592701f1a9f1", e._sentryDebugIdIdentifier = "sentry-dbid-2caa1e1a-8bb4-4046-9c34-592701f1a9f1")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6501], {
        2538: (e, t, o) => {
            o.d(t, {
                f: () => n
            });

            function n() {
                const e = window;
                e.prehydrateButtonCheckCleanup ? .(), delete e.prehydrateButtonCheckCleanup
            }
        },
        11865: (e, t, o) => {
            o.d(t, {
                Gq: () => c,
                Pq: () => p,
                SO: () => d
            });
            var n = o(55509),
                i = o(36774);
            const r = 15552e6,
                a = 2592e6;

            function s(e) {
                return n.y.find((t => t.key === e)) ? .bypassPrivacyStore
            }

            function c(e) {
                if ("undefined" != typeof window && localStorage) try {
                    if (!s(e) && !window.localStorageConsentSet && i._k.includes(window.pokiCountry)) return;
                    const t = localStorage.getItem(e);
                    let o;
                    try {
                        o = JSON.parse(t)
                    } catch {
                        localStorage.removeItem(e)
                    }
                    return o ? .value
                } catch {
                    return null
                }
            }

            function d(e, t) {
                if ("undefined" != typeof window && localStorage) try {
                    if (!s(e) && !window.localStorageConsentSet && i._k.includes(window.pokiCountry)) return;
                    localStorage.setItem(e, JSON.stringify({
                        time: (new Date).getTime(),
                        value: t
                    }))
                } catch {}
            }

            function p() {
                "undefined" != typeof window && localStorage && Object.values(n.y).forEach((e => {
                    try {
                        const t = localStorage.getItem(e.key),
                            o = JSON.parse(t);
                        if (!o) return;
                        const n = s(e.key) || window.isFamilyMode,
                            i = (new Date).getTime();
                        i >= o.time + (n ? a : r) && localStorage.removeItem(e.key)
                    } catch {}
                }))
            }
        },
        13150: (e, t, o) => {
            o.d(t, {
                AU: () => r,
                AY: () => g,
                Kt: () => v,
                NS: () => h,
                Oi: () => i,
                Pz: () => s,
                RC: () => k,
                XD: () => f,
                Zs: () => u,
                Zt: () => m,
                e0: () => l,
                oM: () => w,
                oQ: () => n,
                sf: () => y,
                yS: () => p,
                yk: () => d,
                zR: () => a,
                zY: () => c
            });
            const n = "pokiMessageEvent",
                i = "pokiMessageSdkDetails",
                r = "pokiMessageSetPokiURLParams",
                a = "pokiMessageSendCommand",
                s = "pokiTrackingScreenGameplayStart",
                c = "pokiTrackingScreenGameplayStop",
                d = "pokiTrackingScreenCommercialBreak",
                p = "pokiTrackingScreenRewardedBreak",
                l = "pokiTrackingAdsStatusStarted",
                y = "pokiTrackingAdsStatusCompleted",
                u = "pokiTrackingAdsVideoProgress",
                f = "pokiTrackingAdsStatusPrebidRequested",
                g = "pokiTrackingAdsStatusLimit",
                m = "pokiTrackingAdsStatusError",
                w = "pokiTrackingScreenDisplayAdImpression",
                h = "pokiTrackingScreenGameLoadingFinished",
                k = "pokiMessageSendScreenshot",
                v = "pokiAccountsOpenAuthPanel"
        },
        16536: (e, t, o) => {
            o.d(t, {
                LP: () => i,
                Zv: () => r
            });
            var n = o(20038);
            const i = (0, n.Nc)(),
                r = i.startListening.withTypes();
            n.ch.withTypes()
        },
        25302: (e, t, o) => {
            o.d(t, {
                Cz: () => m,
                FR: () => l,
                IF: () => S,
                Jb: () => w,
                Z3: () => g,
                ZW: () => y,
                hQ: () => u,
                o0: () => v,
                oW: () => b
            });
            var n = o(46493),
                i = o(36768);

            function r() {
                return window ? .frames ? .gameFrame || document ? .getElementById("game-element") ? .contentWindow || {
                    postMessage: () => {}
                }
            }

            function a() {
                return document.getElementById("game-player")
            }

            function s() {
                return document.getElementById("app-root")
            }

            function c() {
                return document.getElementById("poki-video-ad-container")
            }

            function d() {
                if (!window.PokiSDK) return;
                const e = c(),
                    t = a();
                if (e && t) {
                    const o = t.getBoundingClientRect();
                    e.style.left = `${o.left}px`, e.style.top = `${o.top+(window.scrollY||0)}px`, e.style.width = `${o.width}px`, e.style.height = `${o.height}px`
                }
                window ? .PokiSDK ? .resizeVideoAd ? .()
            }

            function p() {
                const e = c();
                e && (e.style.display = "none")
            }

            function l(e) {
                const t = document.createElement("div");
                return t.style.position = e ? "fixed" : "absolute", t.style.zIndex = "9999", t.style.overflow = "hidden", t.style.display = "none", t.id = "poki-video-ad-container", document.body.appendChild(t), t
            }

            function y(e, t) {
                const o = document.getElementById(e.containerID);
                o && (window ? .PokiSDK ? .destroyAd ? .(o), o.remove());
                (t || r()).postMessage({
                    type: "hoist_displayAd_destroy",
                    data: e
                }, "*")
            }

            function u(e, t, o) {
                const n = o || r();
                if (!window.PokiSDK) return void y(e, n);
                const i = a();
                if (i) {
                    const o = i.getBoundingClientRect(),
                        {
                            x: r,
                            y: a,
                            w: s,
                            h: c
                        } = e.location || {
                            x: 0,
                            y: 0,
                            w: 1e5,
                            h: 1e5
                        },
                        d = Math.floor(r + s),
                        p = Math.floor(c + a),
                        l = Math.ceil(o.width),
                        u = Math.ceil(o.height);
                    if (d < 0 || d > l || p < 0 || p > u) return console.error(`That ad doesn't fit (frame: ${l}x${u} // loc ${r} ${a} ${s} ${c} ${d} ${p})`), void y(e, n);
                    let f = document.getElementById(e.containerID);
                    f || (f = document.createElement("div"), f.style.position = t ? "fixed" : "absolute", f.style.zIndex = "9998", f.style.overflow = "hidden", f.id = e.containerID, document.body.appendChild(f)), f.style.width = `${s}px`, f.style.height = `${c}px`, f.style.left = `${o.left+r}px`, f.style.top = `${o.top+a}px`, f.setAttribute("poki-ad-running", !0), f.setAttribute("x", r), f.setAttribute("y", a), window ? .PokiSDK ? .hoistDisplayAd ? .({
                        container: f,
                        adUnitPath: e.adUnitPath,
                        size: e.size,
                        opportunityId: e.opportunityId,
                        duringGameplay: () => e.duringGameplay,
                        onCanDestroy: () => {
                            n.postMessage({
                                type: "hoist_displayAd_onCanDestroy",
                                data: {
                                    opportunityId: e.opportunityId
                                }
                            }, "*")
                        },
                        onDisplayRendered: t => {
                            n.postMessage({
                                type: "hoist_displayAd_onDisplayRendered",
                                data: {
                                    opportunityId: e.opportunityId,
                                    isEmpty: t
                                }
                            }, "*")
                        },
                        onPreconditionsFailed: () => {
                            f.remove(), y(e, n)
                        }
                    })
                }
            }
            let f = !1;

            function g(e, t, o, i) {
                const a = t || r();
                if (function() {
                        if (!window.PokiSDK) return;
                        const e = c();
                        e && (d(), e.style.display = "block")
                    }(), "PR" === e.position)(0, n.F)({
                    action: "ad",
                    category: "videoBegin",
                    label: "rewarded",
                    data: {
                        opportunityId: e.opportunityId
                    }
                }), window ? .PokiSDK ? .rewardedBreak ? .((() => {
                    a.postMessage({
                        type: "hoist_videoAd_onStart",
                        data: {
                            opportunityId: e.opportunityId
                        }
                    }, "*")
                })).then((t => {
                    p(), (t => {
                        a.postMessage({
                            type: "hoist_videoAd_onFinish",
                            data: {
                                opportunityId: e.opportunityId,
                                rewardAllowed: t
                            }
                        }, "*"), (0, n.F)({
                            action: "ad",
                            category: "videoEnd",
                            label: "rewarded",
                            data: {
                                opportunityId: e.opportunityId,
                                source: "playground"
                            }
                        })
                    })(t)
                }));
                else {
                    let t = 1,
                        r = window ? .PokiSDK ? .commercialBreak || (() => Promise.resolve());
                    window ? .PokiSDK ? .playgroundCommercialBreak && (r = window ? .PokiSDK ? .playgroundCommercialBreak, o || !i && !f || (t = 2));
                    let s = {};
                    o || (s = {
                        timeBetweenAds: 60 * (i ? 2 : 3) * 1e3
                    }), (0, n.F)({
                        action: "ad",
                        category: "videoBegin",
                        label: "midroll",
                        data: {
                            opportunityId: e.opportunityId
                        }
                    }), r({
                        amount: t,
                        onStart: () => {
                            a.postMessage({
                                type: "hoist_videoAd_onStart",
                                data: {
                                    opportunityId: e.opportunityId
                                }
                            }, "*")
                        },
                        ...s
                    }).then((t => {
                        t && (f = !0), p(), a.postMessage({
                            type: "hoist_videoAd_onFinish",
                            data: {
                                opportunityId: e.opportunityId
                            }
                        }, "*"), (0, n.F)({
                            action: "ad",
                            category: "videoEnd",
                            label: "midroll",
                            data: {
                                opportunityId: e.opportunityId,
                                source: "playground"
                            }
                        })
                    }))
                }
            }

            function m(e, t, o) {
                window ? .PokiSDK ? .setGameSpecificSettings ? .(e.adTiming, e.specialConditions, o), f = !1;
                (t || r()).postMessage({
                    type: "hoist_playgroundInit",
                    data: {
                        adBlocked: e.isAdBlocked
                    }
                }, "*")
            }

            function w() {
                document.querySelectorAll("div[poki-ad-running]").forEach((e => {
                    y({
                        containerID: e.id
                    })
                }))
            }
            const h = () => {
                    ! function() {
                        if (!window.PokiSDK) return;
                        const e = c(),
                            t = a();
                        if (e && t) {
                            const o = t.getBoundingClientRect();
                            e.style.left = `${o.left}px`, e.style.top = `${o.top+(window.scrollY||0)}px`
                        }
                    }(),
                    function() {
                        if (!window.PokiSDK) return;
                        const e = a();
                        if (e) {
                            const t = e.getBoundingClientRect();
                            document.querySelectorAll("div[poki-ad-running]").forEach((e => {
                                e.style.left = `${t.left+parseInt(e.getAttribute("x"),10)}px`, e.style.top = `${t.top+parseInt(e.getAttribute("y"),10)}px`
                            }))
                        }
                    }()
                },
                k = () => {
                    d(), w()
                };

            function v() {
                const e = a(),
                    t = s();
                e && (0, i.vy)(e, k), t && (0, i.vy)(t, h)
            }

            function b() {
                const e = a(),
                    t = s();
                e && (0, i.u3)(e), t && (0, i.u3)(t)
            }

            function S() {
                const e = r();
                e ? .postMessage({
                    type: "hoist_refocus_game"
                }, "*")
            }
        },
        32549: (e, t, o) => {
            o.d(t, {
                OV: () => s,
                Ts: () => a,
                lB: () => c
            });
            var n = o(73421);
            const i = new Map,
                r = "undefined" != typeof IntersectionObserver;

            function a(e, t = {}) {
                r && (window.pokiIntersectionObservers = window.pokiIntersectionObservers || {}, window.pokiIntersectionObservers[e] = new IntersectionObserver((t => {
                    t.filter((e => e.isIntersecting)).forEach((({
                        boundingClientRect: t,
                        target: o
                    }) => {
                        const n = i.get(o);
                        i.delete(o), window.pokiIntersectionObservers[e].unobserve(o), n && n(t)
                    }))
                }), t))
            }

            function s(e, t) {
                r && window.pokiIntersectionObservers[e] && (i.delete(t), window.pokiIntersectionObservers[e].unobserve(t))
            }

            function c(e, t, o) {
                if (r && window.pokiIntersectionObservers[e] && t)
                    if (r) s(e, t), i.set(t, o), window.pokiIntersectionObservers[e].observe(t);
                    else {
                        const {
                            cellSize: e
                        } = n.O3;
                        o({
                            width: e
                        })
                    }
            }
        },
        33992: (e, t, o) => {
            o.d(t, {
                R: () => r
            });
            var n = o(55509),
                i = o(11865);

            function r(e) {
                return Object.values(n.y).reduce(((e, t) => {
                    if ("undefined" == typeof window) return e;
                    try {
                        const o = (0, i.Gq)(t.key);
                        if (o) {
                            const n = JSON.parse(o);
                            t.validator(n) ? (e[t.rootKey] || (e[t.rootKey] = {}), e[t.rootKey][t.childKey] = n) : localStorage.removeItem(t.key)
                        }
                    } catch {
                        localStorage.removeItem(t.key)
                    }
                    return e
                }), e)
            }
        },
        34931: (e, t, o) => {
            function n() {
                let e = Math.floor(Date.now() / 1e3),
                    t = "";
                for (let o = 0; o < 4; o++) t = String.fromCharCode(255 & e) + t, e >>= 8;
                if (window.crypto && crypto.getRandomValues && Uint32Array) {
                    const e = new Uint32Array(12);
                    crypto.getRandomValues(e);
                    for (let o = 0; o < 12; o++) t += String.fromCharCode(255 & e[o])
                } else
                    for (let e = 0; e < 12; e++) t += String.fromCharCode(Math.floor(256 * Math.random()));
                return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            o.d(t, {
                u: () => n
            })
        },
        36768: (e, t, o) => {
            o.d(t, {
                Ts: () => a,
                u3: () => s,
                vy: () => c
            });
            const n = new Map,
                i = "undefined" != typeof ResizeObserver;
            let r;

            function a() {
                i && (r = new ResizeObserver((e => {
                    e.forEach((({
                        contentRect: e,
                        target: t
                    }) => {
                        const o = n.get(t);
                        o && o(e)
                    }))
                })))
            }

            function s(e) {
                i && (n.delete(e), r.unobserve(e))
            }

            function c(e, t) {
                e && i && (n.set(e, t), r.observe(e))
            }
        },
        39332: (e, t, o) => {
            o.d(t, {
                L: () => i
            });
            var n = o(17402);

            function i() {
                (0, n.useLayoutEffect)((() => {
                    if ("function" == typeof document ? .startViewTransition) {
                        const e = () => {
                            document.startViewTransition ? .((() => {}))
                        };
                        return e(), () => {
                            e()
                        }
                    }
                }), [])
            }
        },
        40890: (e, t, o) => {
            o.d(t, {
                AO: () => r,
                DZ: () => p,
                KJ: () => n,
                M5: () => d,
                O$: () => i,
                TH: () => c,
                aX: () => s,
                kC: () => a,
                pN: () => f,
                xs: () => l
            });
            const n = {
                category: "/",
                content: "/c/",
                game: "/g/",
                game_suffix: "",
                prefix: "",
                preview: "/preview",
                mystery: "/mystery",
                privacy: "/privacy"
            };

            function i(e, t) {
                return Object.keys(t).reduce(((e, o) => function(e, t, o) {
                    return e && t ? [e, /\?/.test(e) ? "&" : "?", t, o ? `=${o}` : ""].join("") : e
                }(e, o, t[o])), e)
            }

            function r(e, t, o) {
                const i = { ...n,
                    ...e.paths
                };
                return "home" === t ? i.prefix && "/en" !== i.prefix ? i.prefix : "/" : "content" === t ? [i.prefix, i.content, o].join("") : "preview" === t ? [i.prefix, i.preview, "/", o].join("") : "mystery" === t ? [i.prefix, i.mystery, "/", o].join("") : "privacy" === t ? o ? [i.prefix, i.privacy, "/", o].join("") : [i.prefix, i.privacy].join("") : ("game" === t ? [i.prefix, i.game, o, i.game_suffix] : [i.prefix, i.category, o]).join("")
            }

            function a(e, t, o) {
                const n = r(e, t, o);
                return `https://${e.domain}${n}`
            }

            function s(e) {
                const t = e.match(/^(?:https?:\/\/)?(?:www\.)?([^:/]+)/);
                return t ? t[1] : null
            }

            function c(e, t, o) {
                const i = { ...n,
                    ...e.paths
                };
                let r;
                switch (t) {
                    case "game":
                        r = new RegExp(`^${i.prefix}${i.game.replace(/\+/g,"\\+")}([^?]*)${i.game_suffix}(?:\\?.*)?$`);
                        break;
                    case "category":
                        r = new RegExp(`^${i.prefix}${i.category.replace(/\+/g,"\\+")}([^?/]*)`);
                        break;
                    case "content":
                        r = new RegExp(`^${i.prefix}${i.content}(.*)`);
                        break;
                    case "preview":
                        r = new RegExp(`^${i.prefix}/preview/([^/?]*)`);
                        break;
                    case "mystery":
                        r = new RegExp(`^${i.prefix}/mystery/([^/?]*)`);
                        break;
                    case "privacy":
                        r = new RegExp(`^${i.prefix}/privacy/([^/?]*)`);
                        break;
                    default:
                        throw new Error(`No implementation for extracting slugs of type ${t}`)
                }
                const a = r.exec(o);
                return a ? decodeURIComponent(a[1]) : ""
            }

            function d(e, t) {
                const o = function(e, t = []) {
                        if (!e) return "";
                        const o = "/" === e[0],
                            n = "https://poki.io";
                        let i;
                        try {
                            i = o ? new URL(e, n) : new URL(e)
                        } catch (t) {
                            throw new Error(`${t}: ${e}`)
                        }
                        return t.forEach((e => {
                            i.searchParams.delete(e)
                        })), o ? decodeURI(i.toString().replace(n, "")) : decodeURI(i.toString())
                    }(t),
                    i = { ...n,
                        ...e.paths
                    };
                if ("/" === o || "" !== i.prefix && o === i.prefix) return "home";
                if (new RegExp(`^${i.prefix}${i.content}(.*)$`).test(o)) return "content";
                if (new RegExp(`^${i.prefix}${i.preview}(.*)$`).test(o)) return "preview";
                if (new RegExp(`^${i.prefix}${i.mystery}(.*)$`).test(o)) return "mystery";
                if (new RegExp(`^${i.prefix}${i.privacy}(.*)$`).test(o)) return "privacy";
                return new RegExp(`^${i.prefix}${i.game.replace(/\+/g,"\\+")}.*${i.game_suffix}$`).test(o) ? "game" : "category"
            }

            function p(e, t) {
                const o = new URLSearchParams(t).get(e);
                return null === o ? "" : o
            }

            function l(e) {
                return /^\//.test(e)
            }
            const y = 78,
                u = 50;

            function f({
                width: e,
                height: t = e,
                image: o,
                quality: n = y,
                slowConnectionQuality: i = u,
                blur: r = 0,
                format: a = "auto"
            }) {
                const {
                    path: s
                } = o;
                return s ? `https://img.poki-cdn.com/cdn-cgi/image/q=${n},scq=${i},${e?`width=${e}`:""},${t?`height=${t}`:""}${r?`,blur=${r}`:""},fit=cover,f=${a}/${s.replace("https://img.poki-cdn.com/","")}` : ""
            }
        },
        47196: (e, t, o) => {
            o.d(t, {
                $B: () => a,
                EU: () => i,
                N1: () => n,
                W$: () => s,
                qv: () => r
            });
            const n = (e, t) => "us" === e.toLowerCase() && ["ca", "us-ca"].includes(t.toLowerCase()),
                i = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
                r = [...i, "IS", "LI", "NO"],
                a = ["CA", "US-CA", "IA", "US-IA"],
                s = ["CO", "US-CO", "CT", "US-CT", "DE", "US-DE", "FL", "US-FL", "IN", "US-IN", "KY", "US-KY", "MD", "US-MD", "MN", "US-MN", "MT", "US-MT", "NE", "US-NE", "NJ", "US-NJ", "NH", "US-NH", "OR", "US-OR", "TN", "US-TN", "TX", "US-TX", "UT", "US-UT", "VA", "US-VA"]
        },
        52694: (e, t, o) => {
            o.d(t, {
                C5: () => y,
                Hq: () => r,
                YE: () => c,
                ZW: () => s,
                bF: () => a,
                ec: () => u,
                py: () => d,
                rn: () => p
            });
            const n = (0, o(46278).gE)();
            let i = null;
            async function r() {
                if (!i) {
                    const {
                        Configuration: e,
                        FrontendApi: t
                    } = await Promise.all([o.e(7269), o.e(8960), o.e(2264), o.e(5124), o.e(7023), o.e(997), o.e(8224), o.e(3495), o.e(8145), o.e(6055), o.e(3849), o.e(3898), o.e(1821), o.e(3842), o.e(598), o.e(5391), o.e(6619), o.e(3728), o.e(8933), o.e(3861), o.e(8451), o.e(9142), o.e(2376), o.e(9055), o.e(9848), o.e(8497), o.e(1437), o.e(3840), o.e(4672), o.e(9646), o.e(217), o.e(4897), o.e(1241), o.e(6164), o.e(3024), o.e(3557), o.e(3220), o.e(9945), o.e(283), o.e(2499), o.e(5162), o.e(689)]).then(o.bind(o, 21945));
                    i = new t(new e({
                        basePath: n,
                        baseOptions: {
                            withCredentials: !0
                        }
                    }))
                }
                return i
            }

            function a({
                flowType: e,
                resetFlow: t
            }) {
                return o => {
                    console.error(`💀 Failed to create ${e} flow`, o), 410 === o ? .status && t()
                }
            }
            const s = async () => (await r()).createBrowserLogoutFlow(),
                c = async e => (await r()).updateLogoutFlow({
                    token: e
                });

            function d(e) {
                const t = e ? .ui ? .nodes,
                    o = t.find((e => "traits.passkey_identifier" === e.attributes.name || "identifier" === e.attributes.name));
                return o && (o.attributes.value = "My Poki Account"), e
            }

            function p(e) {
                const t = e ? .ui ? .nodes,
                    o = t.find((e => "passkey_login_trigger" === e.attributes.name || "passkey_register_trigger" === e.attributes.name));
                return o && t.splice(t.indexOf(o), 1), e
            }
            const l = ["{provider}", "{providerID}"];

            function y({
                node: e,
                localisations: t
            }) {
                const o = e.meta ? .label;
                if (!t || !o ? .text) return o ? .text || "TRANSLATION IS MISSING";
                const n = t.find((({
                    id: e
                }) => e === o.id));
                if (!n) return "TRANSLATION IS MISSING";
                const {
                    text: i,
                    context: r
                } = n;
                if (!r) return i;
                const a = Object.values(r),
                    s = o.context;
                return i.split(" ").map((e => {
                    const t = a.includes(e),
                        o = l.includes(e),
                        n = t ? e.replace(/({|})/g, "") : "";
                    return s[n] ? o ? s[n].charAt(0).toUpperCase() + s[n].slice(1) : s[n] : e
                })).join(" ")
            }

            function u() {
                return new Promise((e => {
                    window.PublicKeyCredential && "function" == typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable && "function" == typeof PublicKeyCredential.isConditionalMediationAvailable ? Promise.all([PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(), PublicKeyCredential.isConditionalMediationAvailable()]).then((t => {
                        t.every((e => !0 === e)) && e(!0), e(!1)
                    })).catch((() => e(!1))).finally((() => e(!0))) : e(!1)
                }))
            }
        },
        55509: (e, t, o) => {
            o.d(t, {
                D: () => d,
                y: () => c
            });
            var n = o(7696),
                i = o(42891),
                r = o(86494),
                a = o(88800),
                s = o(89385);
            const c = [{
                    key: "state/client/recentGames",
                    rootKey: "client",
                    childKey: "recentGames",
                    validator: e => {
                        try {
                            return !Object.entries(e).some((e => {
                                const t = parseInt(e[0], 10);
                                if (Number.isNaN(t)) return !0;
                                return e[1].some((e => "number" != typeof e.id || "number" != typeof e.pt || void 0 !== e.lp && "number" != typeof e.lp))
                            }))
                        } catch {
                            return !1
                        }
                    }
                }, {
                    key: "state/ratings/userVotes",
                    rootKey: "ratings",
                    childKey: "userVotes",
                    validator: e => {
                        try {
                            return !Object.entries(e).some((e => {
                                const t = parseInt(e[0], 10);
                                if (Number.isNaN(t)) return !0;
                                const o = e[1];
                                return 1 !== o && -1 !== o
                            }))
                        } catch {
                            return !1
                        }
                    }
                }, {
                    key: "state/client/externalGames",
                    rootKey: "client",
                    childKey: "externalGames",
                    validator: e => {
                        try {
                            return !Object.entries(e).some((e => {
                                const t = parseInt(e[0], 10);
                                if (Number.isNaN(t)) return !0;
                                return "boolean" != typeof e[1]
                            }))
                        } catch {
                            return !1
                        }
                    }
                }, {
                    key: "state/client/usPrivacyString",
                    rootKey: "client",
                    childKey: "usPrivacyString",
                    validator: e => "string" == typeof e
                }, {
                    key: "state/client/privacyPopupRevision",
                    rootKey: "client",
                    childKey: "privacyPopupRevision",
                    validator: e => "string" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/privacyCenterViewed",
                    rootKey: "privacy",
                    childKey: "privacyCenterViewed",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/personalizedAds",
                    rootKey: "privacy",
                    childKey: "personalizedAds",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/pokiAnalytics",
                    rootKey: "privacy",
                    childKey: "pokiAnalytics",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/bingRemarketingEnabled",
                    rootKey: "privacy",
                    childKey: "bingRemarketingEnabled",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/googleRemarketingEnabled",
                    rootKey: "privacy",
                    childKey: "googleRemarketingEnabled",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/privacy/familyModeCookieConsentShown",
                    rootKey: "privacy",
                    childKey: "familyModeCookieConsentShown",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/notifications/muted",
                    rootKey: "notifications",
                    childKey: "muted",
                    validator: e => !!Array.isArray(e) && e.every((e => "string" == typeof e)),
                    bypassPrivacyStore: !0
                }, {
                    key: "state/account/wasLoggedInBefore",
                    rootKey: "account",
                    childKey: "wasLoggedInBefore",
                    validator: e => "boolean" == typeof e,
                    bypassPrivacyStore: !0
                }, {
                    key: "state/account/disabledSaveGames",
                    rootKey: "account",
                    childKey: "disabledSaveGames",
                    validator: e => Array.isArray(e),
                    bypassPrivacyStore: !0
                }],
                d = {
                    [i.pX.type]: {
                        state: "client",
                        property: "recentGames"
                    },
                    [i.Pl.type]: {
                        state: "client",
                        property: "externalGames"
                    },
                    [r.Vy.type]: {
                        state: "ratings",
                        property: "userVotes"
                    },
                    [i.Fu.type]: {
                        state: "client",
                        property: "privacyPopupRevision"
                    },
                    [n.rB.type]: {
                        state: "privacy",
                        property: "familyModeCookieConsentShown"
                    },
                    [n.kN.type]: {
                        state: "privacy",
                        property: "privacyCenterViewed"
                    },
                    [n.pI.type]: {
                        state: "privacy",
                        property: "personalizedAds"
                    },
                    [n.S9.type]: {
                        state: "privacy",
                        property: "pokiAnalytics"
                    },
                    [n.QX.type]: {
                        state: "privacy",
                        property: "bingRemarketingEnabled"
                    },
                    [n.X6.type]: {
                        state: "privacy",
                        property: "googleRemarketingEnabled"
                    },
                    [a.oe.type]: {
                        state: "notifications",
                        property: "muted"
                    },
                    [s.Cf.type]: {
                        state: "account",
                        property: "wasLoggedInBefore"
                    },
                    [s.hK.type]: {
                        state: "account",
                        property: "disabledSaveGames"
                    }
                }
        },
        56469: (e, t, o) => {
            o.d(t, {
                e: () => r
            });
            var n = o(42891),
                i = o(90385);

            function r() {
                let e = -1 !== navigator.userAgent.toLowerCase().search("firefox") ? 1 : 0;
                const t = window.store.getState(),
                    o = (0, n.H6)(t),
                    r = ["game", "preview", "mystery"].includes((0, i.K5)(t));
                !o && r && window.innerHeight < 617 && (e = 16), window.scrollTo(0, e)
            }
        },
        56968: (e, t, o) => {
            o.d(t, {
                k: () => n
            });
            const n = e => new Promise(((t, o) => {
                const n = document.createElement("script");
                n.type = "text/javascript", n.src = e, n.onload = t, n.onerror = o, document.head.appendChild(n)
            }))
        },
        66685: (e, t, o) => {
            function n(e) {
                if (!e) throw new Error("waitForDOMNode requires a selector");
                const t = document.querySelector(e);
                return new Promise((o => {
                    t && o(t);
                    const n = new MutationObserver((() => {
                        document.querySelector(e) && (o(document.querySelector(e)), n.disconnect())
                    }));
                    n.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }))
            }
            o.d(t, {
                A: () => n
            })
        },
        67893: (e, t, o) => {
            o.d(t, {
                KV: () => i,
                jG: () => n,
                y1: () => r
            });
            const n = () => "undefined" == typeof window ? process.env.SERVICE_ENV : window.ENV ? .SERVICE_ENV,
                i = () => "production" === n(),
                r = () => "acceptance" === n()
        },
        82552: (e, t, o) => {
            o.d(t, {
                tR: () => a,
                uZ: () => r
            });
            var n = o(43908),
                i = o(40890);

            function r(e, t) {
                const o = (0, n.sv)(),
                    r = Object.keys(t).filter((e => e && "xx" !== e && o[e])).map((n => {
                        const {
                            slug: r
                        } = t[n];
                        return {
                            href: (0, i.kC)(o[n], e, r),
                            hrefLang: n,
                            lang: o[n] ? .lang
                        }
                    }));
                if (t.en) {
                    const {
                        slug: n
                    } = t.en;
                    r.push({
                        href: (0, i.kC)(o.en, e, n),
                        hrefLang: "x-default",
                        lang: "en"
                    })
                }
                return r
            }

            function a(e, t) {
                const o = (0, i.kC)(t, "home", "");
                return {
                    "@type": "WebSite",
                    "@id": `${o}#website`,
                    name: "Poki",
                    url: o,
                    description: e.home_meta_description,
                    inLanguage: t.iso_lang,
                    publisher: {
                        "@type": "Organization",
                        "@id": "https://poki.com/#organization",
                        url: "https://poki.com",
                        name: "Poki",
                        legalName: "Poki B.V.",
                        telephone: "+31684546856",
                        duns: "409711459",
                        taxID: "34263673",
                        vatID: "NL821689757B01",
                        description: "Poki is a free online games platform that offers more than 1500 games from a global community of creators to over 60 million monthly playing users.",
                        logo: "https://a.poki-cdn.com/img/favicon.svg",
                        brand: {
                            "@type": "Brand",
                            "@id": "https://poki.com/#brand",
                            name: "Poki",
                            slogan: "Let the world play"
                        },
                        email: "hello@poki.com",
                        sameAs: ["https://www.facebook.com/Poki", "https://linkedin.com/company/poki", "https://about.poki.com", "https://twitter.com/Poki", "https://www.similarweb.com/website/poki.com/", "https://www.youtube.com/poki", "https://www.tiktok.com/@poki_games", "https://medium.com/poki", "https://www.instagram.com/poki__games/", "https://play.google.com/store/apps/details?id=com.poki.playground", "https://www.trustpilot.com/review/poki.com", "https://www.crunchbase.com/organization/poki"],
                        contactPoint: {
                            "@type": "ContactPoint",
                            contactType: "User Feedback",
                            url: "https://poki.com/en/c/contact",
                            email: "hello@poki.com",
                            telephone: "+31684546856"
                        },
                        address: {
                            "@type": "PostalAddress",
                            postalCode: "1012 WZ",
                            addressLocality: "Amsterdam",
                            addressRegion: "Noord-Holland",
                            streetAddress: "Spui 10",
                            telephone: "+31684546856",
                            addressCountry: {
                                "@type": "Country",
                                name: "NL"
                            }
                        },
                        location: {
                            "@type": "PostalAddress",
                            postalCode: "1012 WZ",
                            addressLocality: "Amsterdam",
                            addressRegion: "Noord-Holland",
                            streetAddress: "Spui 10",
                            telephone: "+31684546856",
                            addressCountry: {
                                "@type": "Country",
                                name: "NL"
                            }
                        },
                        founder: [{
                            "@type": "Person",
                            name: "Michiel Van Amerongen",
                            jobTitle: "Co-Founder",
                            sameAs: ["https://www.linkedin.com/in/michiel-van-amerongen-1a1b739", "https://www.crunchbase.com/person/michiel-van-amerongen"]
                        }, {
                            "@type": "Person",
                            name: "Sebastiaan Moeys",
                            jobTitle: "Co-Founder",
                            sameAs: ["https://www.linkedin.com/in/samoeys", "https://medium.com/@seb_moeys"]
                        }]
                    }
                }
            }
        },
        84968: (e, t, o) => {
            o.d(t, {
                hG: () => a,
                yj: () => r
            });
            const n = ["VN", "CN", "IN", "CO", "TR", "PE", "EC", "ID", "TH", "DZ", "PK", "IL", "EG", "UA", "BO", "UY", "PH", "SV", "MA", "BD", "TN", "NP", "AZ", "KE", "GT", "PY", "TW", "JO", "OM", "LK", "RS", "PS", "KH", "AO", "GE", "NG", "IQ", "MM", "KW", "AL", "SN", "RE", "BH", "NI", "AM", "MN", "RW", "CI", "KZ", "BA", "ET", "JM", "GH", "MG", "NA", "GA", "LA", "MQ", "LC", "TG", "XK", "TT", "BW", "BZ", "TZ", "ZW", "NC", "GF", "GP", "UG", "MV", "LY", "FJ", "GD", "BN", "CG", "CM", "MU", "BB", "BT", "AS", "SR", "ME", "GY", "KG", "ZM", "CV", "TC", "BS", "YE", "PF", "GU", "CW", "MW", "FO", "AD", "CD", "SO", "BJ", "VC", "AF", "HT", "YT", "CK", "IM", "DM", "AW", "TJ", "MZ", "KN", "ML", "BF", "LS", "BQ", "GI", "GM", "WS", "SZ", "SM", "VE", "AG", "BM", "PG", "DJ", "JE", "FM", "MP", "MR", "BI", "KY", "TO", "AI", "VI", "PW", "SC", "SX", "ST", "VG", "GG", "GQ", "GL", "GN", "SL", "MS", "GW", "TL", "SB", "VU", "LR", "SD", "MF", "MH"];
            let i = {};

            function r(e, t, o) {
                const n = { ...i[e]
                };
                return n[t] = o ? (n[t] ? ? 0) + 1 : 0, i = {
                    [e]: n
                }, i
            }

            function a(e, t, o) {
                if (!n.includes(e)) return !0;
                return !((i ? .[t] ? .[o] || 0) >= 2)
            }
        },
        89625: (e, t, o) => {
            o.d(t, {
                P: () => i,
                r: () => r
            });
            var n = o(33527);

            function i(e) {
                const {
                    config: t = {}
                } = e, {
                    background: o
                } = t;
                if (o) return o
            }

            function r(e) {
                return n.Ay ? .[e]
            }
        },
        98535: (e, t, o) => {
            function n(e) {
                return ["GB", "NL"].includes(e)
            }
            o.d(t, {
                A: () => n
            })
        },
        99653: (e, t, o) => {
            function n(e) {
                "undefined" != typeof window && window.pbjs.que.push((() => {
                    const t = {
                        ortb2: { ...window.pbjs.getConfig("ortb2"),
                            ...e
                        }
                    };
                    window.pbjs.setConfig(t), window ? .PokiSDK ? .configureA9 ? .(t)
                }))
            }
            o.d(t, {
                I: () => n
            })
        }
    }
]);
//# sourceMappingURL=client~main-3e9ad0db~5df47dfcf3e545879202.js.map