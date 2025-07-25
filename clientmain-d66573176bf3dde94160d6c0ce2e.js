try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a9ac4c27-acbb-48f5-b23d-02aea2066ac3", e._sentryDebugIdIdentifier = "sentry-dbid-a9ac4c27-acbb-48f5-b23d-02aea2066ac3")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5674], {
        15203: (e, t, a) => {
            a.d(t, {
                Ay: () => p,
                Bi: () => m,
                ON: () => f,
                QZ: () => g,
                ht: () => u
            });
            var n = a(20038),
                o = a(42891),
                s = a(61481),
                i = a(86494),
                r = a(90385),
                c = a(11436),
                d = a(16536);
            const l = (0, n.Z0)({
                    name: "mystery",
                    initialState: {
                        game: null,
                        games: [],
                        triggered: !1,
                        canBeShown: !1
                    },
                    reducers: {
                        setMysteryGames: (e, t) => {
                            e.games = t.payload.games, e.triggered = !1
                        },
                        setCanBeShown: (e, t) => {
                            e.canBeShown = t.payload.canBeShown, e.game = t.payload.game
                        },
                        clickMysteryGame: e => {
                            e.game = null, e.games = [], e.triggered = !0, e.canBeShown = !1
                        }
                    }
                }),
                g = e => e.mystery.game,
                m = e => e.mystery.triggered,
                u = e => e.mystery.canBeShown,
                p = l,
                {
                    setMysteryGames: y,
                    clickMysteryGame: f,
                    setCanBeShown: v
                } = l.actions;
            let h = !1;
            "undefined" != typeof window && ((0, d.Zv)({
                actionCreator: o.Xy,
                effect: async (e, {
                    getState: t,
                    dispatch: a,
                    unsubscribe: n,
                    condition: s
                }) => {
                    const i = t(),
                        r = (0, o.wu)(i),
                        d = (0, o.xp)(i),
                        l = (0, c.fn)(i),
                        g = function(e, t) {
                            return "true" === new URLSearchParams(t).get("force_mystery") || !["GB", "NL", "CA"].includes(e) && ((!navigator ? .connection ? .effectiveType || "4g" === navigator ? .connection ? .effectiveType) && (!(navigator ? .hardwareConcurrency < 8) && !!document.createElement("canvas").getContext("webgl2", {
                                failIfMajorPerformanceCaveat: !0
                            })))
                        }(r, l);
                    if (h = g, n(), h) {
                        const e = async () => {
                            try {
                                const e = await fetch(`https://mystery-game-tile.poki.io/v0/mystery-game?device=${d}&geo=${r}`),
                                    t = (await e.json()).filter((e => {
                                        const {
                                            device_category: t
                                        } = e;
                                        return t === d || "any" === t
                                    }));
                                if (0 === t.length) return void a(y({
                                    games: []
                                }));
                                const n = t.map((e => {
                                    const t = btoa(`${e.path}/${e.orientation||"both"}`);
                                    return { ...e,
                                        path: t
                                    }
                                }));
                                a(y({
                                    games: n
                                }))
                            } catch (e) {}
                        };
                        "function" == typeof requestIdleCallback ? requestIdleCallback(e, {
                            timeout: 1e4
                        }) : e();
                        const t = setInterval(e, 3e5);
                        await s(f.match), clearInterval(t)
                    }
                }
            }), (0, d.Zv)({
                matcher: (0, n.i0)(s.lh.endpoints.getGame.matchFulfilled, s.lh.endpoints.getCategory.matchFulfilled, s.lh.endpoints.getHomepage.matchFulfilled),
                effect: (e, {
                    getState: t,
                    dispatch: a,
                    unsubscribe: n
                }) => {
                    const o = t();
                    if (!h) return void n();
                    const s = (e => e.mystery.games)(o);
                    if (s.length > 0) {
                        const e = (0, r.K5)(o),
                            t = (0, r.Vv)(o),
                            n = (0, r.N2)(o),
                            i = (0, r.Qk)(o);
                        if ("category" === e && 0 === n.games.length) return void a(v({
                            canBeShown: !1,
                            game: null
                        }));
                        const c = s.filter((a => {
                            const {
                                categories: o = []
                            } = a;
                            return 0 === o.length || ("game" === e ? t.categories.some((({
                                id: e
                            }) => o.includes(e))) : "category" === e && o.includes(n.id))
                        }));
                        if (0 === c.length) return void a(v({
                            canBeShown: !1,
                            game: null
                        }));
                        let d = 0;
                        for (let e = 0; e < i.length; e++) d += i.charCodeAt(e);
                        a(v({
                            canBeShown: !0,
                            game: c[d % c.length]
                        }))
                    }
                }
            }), (0, d.Zv)({
                actionCreator: f,
                effect: (e, {
                    dispatch: t
                }) => {
                    t((0, i.Kz)({
                        gameId: 0
                    }))
                }
            }))
        },
        18864: (e, t, a) => {
            a.d(t, {
                Ay: () => v,
                rv: () => y
            });
            var n = a(20038),
                o = a(34524),
                s = a(23260),
                i = a(90385),
                r = a(8811),
                c = a(89625),
                d = a(16536);
            const l = ["immersiveTakeover", "custom", "apiOverride", "base"],
                g = {
                    base: r.V.default,
                    apiOverride: null,
                    immersiveTakeover: null
                },
                m = (0, n.Z0)({
                    name: "background",
                    initialState: g,
                    reducers: {
                        unsetBackground: () => g,
                        setBackground: (e, t) => {
                            const {
                                layer: a,
                                background: n
                            } = t.payload;
                            e[a] = n
                        }
                    },
                    selectors: {
                        selectBackground: e => {
                            let t = e.base;
                            return Object.values(l).some((a => !!e[a] && (t = e[a], !0))), t
                        },
                        selectIsImmersiveTakeover: e => null !== e.immersiveTakeover
                    }
                }),
                {
                    unsetBackground: u,
                    setBackground: p
                } = m.actions,
                {
                    selectBackground: y,
                    selectIsImmersiveTakeover: f
                } = m.selectors;
            (0, d.Zv)({
                matcher: (0, n.i0)(s.y),
                effect: (e, t) => {
                    const a = t.getState(),
                        n = (0, i.K5)(a),
                        o = y(a);
                    if (!o ? .sticky)
                        if ("preview" !== n)
                            if ("mystery" !== n)
                                if ("game" !== n)
                                    if ("category" !== n) t.dispatch(u());
                                    else {
                                        const e = (0, i.N2)(a),
                                            n = (0, c.r)(e.id);
                                        t.dispatch(p({
                                            layer: "custom",
                                            background: n
                                        }))
                                    }
                    else {
                        const e = (0, i.Vv)(a),
                            n = (0, c.P)(e);
                        t.dispatch(p({
                            layer: "custom",
                            background: n
                        }))
                    } else {
                        const {
                            mystery: e
                        } = r.V;
                        t.dispatch(p({
                            layer: "custom",
                            background: e
                        }))
                    } else {
                        const {
                            preview: e
                        } = r.V;
                        t.dispatch(p({
                            layer: "custom",
                            background: e
                        }))
                    }
                }
            }), (0, d.Zv)({
                type: o.jO.type,
                effect: (e, t) => {
                    const {
                        background: a
                    } = e ? .payload ? .takeover ? .config || {};
                    a && t.dispatch(p({
                        layer: "immersiveTakeover",
                        background: { ...a,
                            style: "dual-cover"
                        }
                    }))
                }
            }), (0, d.Zv)({
                type: o.jp.type,
                effect: (e, t) => {
                    t.dispatch(u())
                }
            });
            const v = m.reducer
        },
        42891: (e, t, a) => {
            a.d(t, {
                Ay: () => N,
                F8: () => g,
                Fe: () => P,
                Fu: () => k,
                H6: () => F,
                Jj: () => V,
                KM: () => L,
                Kk: () => x,
                Kn: () => O,
                Mh: () => K,
                Pl: () => b,
                Rd: () => M,
                SG: () => d,
                W3: () => T,
                Wv: () => $,
                Xy: () => l,
                Y1: () => m,
                ac: () => D,
                hG: () => A,
                kW: () => R,
                nx: () => h,
                oJ: () => C,
                pX: () => S,
                qk: () => E,
                rk: () => B,
                vo: () => H,
                wu: () => _,
                xp: () => I,
                zO: () => Z,
                zS: () => z,
                zj: () => G
            });
            var n = a(20038),
                o = a(1081),
                s = a(36774),
                i = a(91323);
            const r = {
                    bot: !1,
                    cache: 0,
                    device: "desktop",
                    isIpadOS: !1,
                    isIos: !1,
                    visibility: !0,
                    history: [],
                    geo: "NL",
                    region: "NH",
                    ccpaApplies: !1,
                    host: "poki.com",
                    viewportOrientation: "portrait",
                    loadingPage: !1,
                    recentGames: [],
                    hydrated: !1,
                    asyncEpicFired: !1,
                    consentStatus: void 0,
                    usPrivacyString: "1---",
                    consistentRandomSeed: Math.random(),
                    externalGames: {},
                    privacyPopupRevision: "0",
                    isAdsBlockedVisible: !1,
                    trafficSource: !1
                },
                c = (0, n.Z0)({
                    name: "client",
                    initialState: r,
                    reducers: {
                        hydrated: e => {
                            e.hydrated = !0
                        },
                        fireAsyncEpics: e => {
                            e.asyncEpicFired = !0
                        },
                        setConsentStatus: (e, t) => {
                            e.consentStatus = t.payload.consentStatus
                        },
                        setUSPrivacyString: (e, t) => {
                            e.usPrivacyString = t.payload.usPrivacyString
                        },
                        setDevice: (e, t) => {
                            e.device = t.payload.device
                        },
                        setGeo: (e, t) => {
                            e.geo = t.payload.geo
                        },
                        setRegion: (e, t) => {
                            e.region = t.payload.region
                        },
                        setTrafficSource: (e, t) => {
                            e.trafficSource = t.payload.trafficSource
                        },
                        setHost: (e, t) => {
                            e.host = t.payload.host
                        },
                        setViewportOrientation: (e, t) => {
                            e.viewportOrientation = t.payload.orientation
                        },
                        storeRecentGame: (e, t) => {
                            const {
                                recentGames: a,
                                siteID: n
                            } = t.payload;
                            e.recentGames = { ...e.recentGames,
                                [n]: a
                            }
                        },
                        setConsistentRandomSeed: (e, t) => {
                            e.consistentRandomSeed = t.payload.rand
                        },
                        setConsentExternalHostedGame: (e, t) => {
                            const {
                                gameId: a
                            } = t.payload;
                            e.externalGames = { ...e.externalGames,
                                [a]: !0
                            }
                        },
                        setPrivacyPolicyNotificationRevision: (e, t) => {
                            e.privacyPopupRevision = t.payload.revision
                        },
                        setAdsBlockedVisible: (e, t) => {
                            e.isAdsBlockedVisible = t.payload.isVisible
                        }
                    }
                }),
                {
                    hydrated: d,
                    fireAsyncEpics: l,
                    setConsentStatus: g,
                    setUSPrivacyString: m,
                    setDevice: u,
                    setGeo: p,
                    setRegion: y,
                    setTrafficSource: f,
                    setHost: v,
                    setViewportOrientation: h,
                    storeRecentGame: S,
                    setConsistentRandomSeed: w,
                    setConsentExternalHostedGame: b,
                    setPrivacyPolicyNotificationRevision: k,
                    setAdsBlockedVisible: A
                } = c.actions;

            function _(e) {
                return e.client.geo
            }

            function G(e) {
                return e.client.region
            }

            function B(e) {
                return e.client.viewportOrientation
            }
            const I = e => e.client.device;

            function F(e) {
                const {
                    device: t
                } = e.client;
                return "tablet" === t || "mobile" === t
            }
            const C = e => e.client.ccpaApplies,
                E = (0, o.Mz)((e => e.client.geo), (e => s._k.includes(e))),
                D = e => e.client.loadingPage && e.client.hydrated,
                P = (0, o.Mz)(i.Gd, (e => e.client.recentGames), ((e, t) => e && t && t[e.id] ? t[e.id] : [])),
                M = e => e.client.consistentRandomSeed,
                z = e => e.client.isIpadOS,
                T = e => e.client.isIos,
                O = e => e.client.usPrivacyString;

            function L(e, t) {
                const {
                    externalGames: a
                } = e.client;
                return a[t] || !1
            }
            const R = e => e.client.privacyPopupRevision,
                V = e => e.client.isAdsBlockedVisible,
                $ = (0, o.Mz)((e => e.client.consentStatus), C, E, ((e, t, a) => t || !a || e === s.T2)),
                K = e => e.client.asyncEpicFired,
                Z = e => e.client.trafficSource,
                x = () => {
                    const e = "undefined" != typeof window && window ? .context ? .session ? .id;
                    if (!e) return 100;
                    let t = 0;
                    for (let a = 0; a < e.length; a++) t += e.charCodeAt(a);
                    return t % 100
                },
                H = e => ["US", "BR"].includes(e.client.geo),
                N = c
        },
        48554: (e, t, a) => {
            a.d(t, {
                Ay: () => ne,
                Br: () => S,
                Co: () => E,
                Kj: () => j,
                QE: () => K,
                QX: () => x,
                TQ: () => G,
                UO: () => Z,
                cD: () => L,
                gO: () => P,
                h8: () => _,
                iG: () => A,
                iw: () => z,
                kK: () => B,
                kj: () => U,
                lT: () => N,
                lh: () => k,
                m$: () => O,
                on: () => F,
                pT: () => J,
                qA: () => R,
                u9: () => I,
                vA: () => T,
                wZ: () => w,
                wj: () => q,
                x9: () => M,
                yd: () => $,
                yq: () => b,
                zM: () => H
            });
            var n = a(20038),
                o = a(8120),
                s = a(90385),
                i = a(42891),
                r = a(89385),
                c = a(15203),
                d = a(40890),
                l = a(13150),
                g = a(46493),
                m = a(67893),
                u = a(17782),
                p = a(16536),
                y = a(73934),
                f = a(83228);
            const v = `${(0,a(46278).T5)()}/players/gamesave`,
                h = (0, n.Z0)({
                    name: "game",
                    initialState: {
                        isFullscreen: !1,
                        wasFullscreen: !1,
                        showAdStatus: !1,
                        adStatusEvent: "",
                        adDuration: 0,
                        adCurrentTime: 0,
                        loadingFinished: !1
                    },
                    reducers: {
                        setFullscreen: (e, t) => {
                            e.isFullscreen = t.payload.toggle, e.wasFullscreen = e.wasFullscreen || t.payload.toggle
                        },
                        gameLoadingFinished: e => {
                            e.loadingFinished = !0
                        },
                        setPubHostData: (e, t) => {
                            const {
                                gameId: a,
                                data: n
                            } = t.payload;
                            e[a] = { ...e[a],
                                pubHostData: n
                            }
                        },
                        showAdStatus: e => {
                            e.showAdStatus = !0
                        },
                        hideAdStatus: e => {
                            e.showAdStatus = !1
                        },
                        setAdStatusEvent: (e, t) => {
                            e.adStatusEvent = t.payload.event
                        },
                        setAdDurationAndProgress: (e, t) => {
                            e.adDuration = t.payload.duration, e.adCurrentTime = t.payload.currentTime
                        }
                    }
                }),
                S = (0, u.A)("game/boot"),
                w = (0, u.A)("game/receive_game_event"),
                b = (0, u.A)("game/receive_sdk_details"),
                k = (0, u.A)("game/request_full_screen"),
                A = (0, u.A)("game/pub_host_initialized"),
                _ = (0, u.A)("game/set_poki_url_params"),
                G = (0, u.A)("game/receive_command"),
                B = (0, u.A)("game/generate_screenshot"),
                I = (0, u.A)("game/receive_screenshot"),
                F = (0, u.A)("game/fetch_save_game"),
                C = (0, n.VP)("game/mutate_save_game"),
                E = (0, u.A)("game/cloud_save_game_script_error"),
                D = (0, u.A)("game/poki_accounts_open_auth_panel"),
                {
                    setFullscreen: P,
                    gameLoadingFinished: M,
                    setPubHostData: z,
                    showAdStatus: T,
                    hideAdStatus: O,
                    setAdStatusEvent: L,
                    setAdDurationAndProgress: R
                } = h.actions,
                V = (0, o.Mz)(s.Vv, (e => e.game), ((e, t) => t[e && e.id] || {}));

            function $(e) {
                const t = V(e);
                return t ? .pubHostData || null
            }

            function K(e) {
                const t = (0, s.Vv)(e);
                return !!t ? .fullscreen
            }
            const Z = (0, o.Mz)(s.Vv, i.zS, s.K5, c.Bi, ((e, t, a, n) => "game" === a ? "flash" === e ? .file ? .render_type || e ? .alternative_game_enabled || t && !e ? .mobile_available : "mystery" === a && !n)),
                x = e => e.game.isFullscreen,
                H = e => e.game.wasFullscreen,
                N = e => e.game.showAdStatus,
                j = e => e.game.adStatusEvent,
                U = e => e.game.adDuration,
                q = e => e.game.adCurrentTime,
                J = e => e.game.loadingFinished,
                W = {
                    pubHostInitialized: A,
                    [l.oQ]: w,
                    [l.Oi]: b,
                    [l.AU]: _,
                    [l.zR]: G,
                    [l.RC]: I,
                    [l.Kt]: D,
                    fetchSaveGame: F,
                    mutateSaveGame: C,
                    SaveGameMigrator: !0,
                    pokiLoader: !0
                },
                X = ["localhost", "games.poki.com", "game-cdn.poki.com"],
                Q = ["pokiMessageEvent", "pokiMessageDebug", "SaveGameMigrator", "pokiLoader"],
                Y = (0, m.KV)() ? "https://games.poki.com" : "*";

            function ee({
                event: e,
                dispatch: t
            }) {
                const a = function({
                    event: e
                }) {
                    const {
                        type: t
                    } = e.data || {};
                    if (!t || !W[t] || "function" != typeof W[t]) return !1;
                    const a = (0, d.aX)(e.origin) || "",
                        n = X.includes(a) || a.endsWith(".poki-gdn.com") || window.location.origin === e.origin,
                        o = document.querySelector('iframe[name="gameFrame"]'),
                        s = o && o.src.startsWith(e.origin);
                    return n || s
                }({
                    event: e
                });
                if (!a) return;
                const {
                    content: n,
                    type: o
                } = e.data;
                if (Q.includes(o) && function({
                        type: e,
                        content: t
                    }) {
                        (0, g.F)({
                            category: "sdk",
                            action: "message",
                            data: {
                                content: t,
                                type: e
                            }
                        }), window.parent !== window && window.parent.postMessage({
                            type: e,
                            content: t
                        }, Y)
                    }({
                        type: o,
                        content: n
                    }), "function" == typeof W[o]) {
                    const a = e.source;
                    t(W[o]({ ...n,
                        source: a
                    }))
                }
            }(0, p.Zv)({
                type: i.Xy.type,
                effect: (e, t) => {
                    const {
                        dispatch: a
                    } = t;
                    void 0 !== window.pokiMessageListener && window.removeEventListener("message", window.pokiMessageListener), window.pokiMessageBuffer && window.pokiMessageBuffer.forEach((e => {
                        ee({
                            event: e,
                            dispatch: a
                        })
                    })), window.addEventListener("message", (e => {
                        ee({
                            event: e,
                            dispatch: a
                        })
                    }))
                }
            });
            const te = (0, n.zD)("game/push_save_game_to_cloud", (async ({
                gameID: e,
                saveGameData: t
            }, a) => {
                const n = parseInt(localStorage.getItem(`playtime-${e}`) || "0", 10),
                    o = t.playtime + n;
                try {
                    const n = JSON.stringify({
                            ls: t.ls,
                            idb: t.idb
                        }),
                        s = new Blob([n]).size;
                    let i = n,
                        c = s,
                        d = 1,
                        l = !0;
                    try {
                        i = await (0, y.B)(n), c = i.size, d = c / s
                    } catch (e) {
                        l = !1, console.error(e)
                    }
                    if (console.info(`[SaveGame] Compression results - Original: ${s/1024}KB, Compressed: ${c/1024}KB, Compression ratio: ${(100*d).toFixed(2)}% of the original size`), c > f.Im) return console.error(`[SaveGame] Game file is too large after compression ${c/1048576}mb`), (0, g.F)({
                        category: "account",
                        action: "gamesaveSizeTooLarge",
                        data: {
                            gameId: e,
                            size: c,
                            originalSize: s,
                            compressionRatio: d
                        }
                    }), void a.dispatch((0, r.hK)({
                        gameID: e,
                        saveGameSize: c
                    }));
                    const m = {
                        "X-Poki-Pt": o.toString()
                    };
                    l && (m["Content-Encoding"] = "gzip");
                    const u = await fetch(`${v}/${e}`, {
                        method: "POST",
                        body: i,
                        credentials: "include",
                        headers: m
                    });
                    if (!u.ok) throw new Error(`Failed to save user games: ${u.status}`);
                    (0, g.F)({
                        category: "account",
                        action: "gamesaveSuccess",
                        data: {
                            gameId: e,
                            size: c,
                            originalSize: s,
                            compressionRatio: d
                        }
                    });
                    const p = new Date;
                    console.info(`[SaveGame] cloud sync - game: ${e}, at: ${p.toLocaleString()}`)
                } catch (t) {
                    console.error("[SaveGame] error pushing to cloud", t), (0, g.F)({
                        category: "account",
                        action: "gamesaveError",
                        data: {
                            gameId: e,
                            method: "pushSaveGameToCloud",
                            context: "sending gamesave to the cloud",
                            error: t instanceof Error ? `${t.name}: ${t.message}` : String(t)
                        }
                    })
                } finally {
                    localStorage.setItem(`playtime-${e}`, o.toString())
                }
            }));
            (0, p.Zv)({
                type: C.type,
                effect: (e, t) => {
                    const a = t.getState(),
                        n = (0, s.Vv)(a) ? .id,
                        o = (0, r.Ep)(a),
                        i = (0, r.Fh)(a);
                    if (!o || !n || i.includes(n)) return;
                    if ((0, f.jJ)(e.payload)) return;
                    const c = {
                        playtime: parseInt(e.payload.playtimeInterval || "0", 10),
                        ls: e.payload.ls || "",
                        idb: e.payload.idb || ""
                    };
                    t.dispatch(te({
                        gameID: n,
                        saveGameData: c
                    }))
                }
            });
            const ae = Math.random().toString(36).substring(2);
            (0, p.Zv)({
                actionCreator: r.hK,
                effect: (e, t) => {
                    const {
                        saveGameSize: a
                    } = e.payload, n = $(t.getState()), {
                        gameID: o,
                        gameVersion: s
                    } = n || {}, i = {
                        name: "LargeGameSave",
                        message: `Game state of ${(a/1024/1024).toFixed(2)}MB is too large to sync to Poki User Account (max 1MB allowed)`
                    }, r = JSON.stringify({
                        gid: o,
                        vid: s,
                        ve: 7,
                        n: i.name,
                        m: i.message,
                        ui: ae
                    });
                    fetch("https://t.poki.io/ge", {
                        method: "POST",
                        body: r
                    })
                }
            }), (0, p.Zv)({
                type: D.type,
                effect: (e, t) => {
                    const a = t.getState();
                    (0, r.ij)(a) || t.dispatch((0, r.qf)())
                }
            });
            const ne = h
        },
        91323: (e, t, a) => {
            a.d(t, {
                Ay: () => v,
                DF: () => y,
                Gd: () => u,
                LJ: () => i,
                n: () => p
            });
            var n = a(20038),
                o = a(8120),
                s = a(40890);
            const i = {
                    WEB: "web",
                    APP: "app"
                },
                r = {
                    mode: i.WEB
                },
                c = (0, n.Z0)({
                    name: "site",
                    initialState: r,
                    reducers: {
                        setSite: (e, t) => {
                            e.site = t.payload.site
                        },
                        setSitesForClient: (e, t) => {
                            e.sites = t.payload.sites
                        },
                        setLocalisations: (e, t) => {
                            e.localisations = t.payload.localisations
                        },
                        setSiteMode: (e, t) => {
                            e.mode = t.payload.mode
                        }
                    }
                }),
                {
                    setSite: d,
                    setSitesForClient: l,
                    setLocalisations: g,
                    setSiteMode: m
                } = c.actions,
                u = e => e.site.site,
                p = e => e.site.sites,
                y = e => e.site.mode,
                f = ((0, o.Mz)(u, (({
                    paths: e
                }) => ({ ...s.KJ,
                    ...e
                }))), ["ar", "he"]),
                v = ((0, o.Mz)(u, (({
                    iso_lang: e
                }) => f.includes(e))), c)
        }
    }
]);
//# sourceMappingURL=client~main-d6657317~6bf3dde94160d6c0ce2e.js.map