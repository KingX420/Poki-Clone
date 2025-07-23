try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7f8603a3-fafa-4abe-915c-addada1d3b77", e._sentryDebugIdIdentifier = "sentry-dbid-7f8603a3-fafa-4abe-915c-addada1d3b77")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4040], {
        4834: (e, t, n) => {
            function o() {
                const e = document.getElementById("game-element");
                try {
                    e ? .contentWindow ? .frames[0] ? .focus()
                } catch {
                    try {
                        e ? .contentWindow ? .focus()
                    } catch {
                        e ? .focus()
                    }
                }
            }
            n.d(t, {
                r: () => o
            })
        },
        24040: (e, t, n) => {
            n.r(t), n.d(t, {
                cloudSaveGameScriptErrorEpic: () => H,
                fetchSaveGameEpic: () => K,
                fixIOSFullscreen: () => Q,
                fullscreenEpic: () => Z,
                gameLoadingFinishedEpic: () => q,
                generateScreenshotEpic: () => ee,
                pubHostInitializedEpic: () => N,
                receiveScreenshotEpic: () => ne,
                sendBugReportEpic: () => te,
                setRecentGameEpic: () => J,
                showCSPWarningEpic: () => oe,
                trackRecentGameEpic: () => Y,
                updatePokiURLParams: () => A
            });
            var o = n(59099),
                i = n(8767),
                a = n(63720),
                r = n(61701),
                c = n(62467),
                s = n(16126),
                l = n(9336),
                d = n(76981),
                u = n(56978),
                p = n(44240),
                g = n(67791),
                f = n(38975),
                m = n(81160),
                y = n(39697),
                w = n(83349),
                v = n(29079),
                h = n(42891),
                E = n(48554),
                b = n(46493),
                _ = n(91323),
                S = n(90385),
                I = n(13150),
                D = n(4834),
                x = n(25302),
                k = n(23260),
                G = n(58606),
                F = n(53210),
                R = n(25733),
                O = n(6788),
                P = n(34524),
                L = n(56469),
                T = n(74275),
                B = n(86494),
                C = n(46278),
                M = n(89385),
                z = n(83228);
            const V = (0, C.T5)();

            function A(e) {
                return e.pipe((0, v.g)(E.h8.type), (0, o.M)((e => {
                    const {
                        params: t
                    } = e;
                    if (!t) return;
                    const n = Object.keys(t),
                        o = new URLSearchParams(window.location.search),
                        i = [];
                    o.forEach(((e, t) => {
                        t.startsWith("gd") && i.push(t)
                    })), i.forEach((e => {
                        o.delete(e)
                    })), n.forEach((e => {
                        o.set(`gd${e}`, t[e])
                    })), window.history.replaceState({}, document.title, `${window.location.pathname}?${o.toString()}`)
                })), (0, i.w)())
            }

            function N(e, t) {
                return e.pipe((0, v.g)(E.iG.type), (0, a.n)((e => {
                    const n = (0, S.Vv)(t.value);
                    return n ? ((0, b.F)({
                        category: "pubHost",
                        action: "initialized",
                        data: e
                    }), delete e.source, (0, c.of)((0, E.iw)({
                        gameId: n.id,
                        data: e
                    }))) : r.w
                })))
            }

            function H(e, t) {
                return e.pipe((0, v.g)(E.Co.type), (0, o.M)((e => {
                    const n = (0, S.Vv)(t.value);
                    n ? .id && (0, b.F)({
                        category: "account",
                        action: "gamesaveError",
                        data: {
                            gameID: n.id,
                            method: "cloudsavegameScript",
                            context: "cloudsavegame script error",
                            error: e.data ? .error
                        }
                    })
                })), (0, i.w)())
            }

            function $(e, t) {
                window.frames ? .gameFrame ? .postMessage ? .({
                    type: "fetchedSaveGame",
                    resolution: e,
                    data: t
                }, "*")
            }

            function K(e, t) {
                return e.pipe((0, v.g)(E.on.type), (0, s.p)((() => ["game", "preview", "mystery"].includes((0, S.K5)(t.value)))), (0, o.M)((async () => {
                    const e = (0, S.Vv)(t.value),
                        n = (0, M.Fh)(t.value);
                    if (e ? .id) try {
                        let o, i = 0;
                        const a = localStorage.getItem(`playtime-${e.id}`) || 0;
                        let r = "cloud",
                            c = !1;
                        if (n.includes(e.id)) r = "local";
                        else {
                            try {
                                (0, M.Ep)(t.value) && (o = await (0, z.$)(e.id), i = o ? .playtime || 0, c = !(0, z.jJ)(o)), console.log("[SaveGame] fetched gamesave from user-vault", o)
                            } catch (t) {
                                console.error(t), (0, b.F)({
                                    category: "account",
                                    action: "gamesaveError",
                                    data: {
                                        gameID: e.id,
                                        method: "fetchSaveGameEpic",
                                        context: "fetching gamesave from cloud",
                                        error: t instanceof Error ? t.message : String(t)
                                    }
                                })
                            }
                            c || (r = "local"), "cloud" === r && localStorage.setItem(`playtime-${e.id}`, i.toString())
                        }
                        console.log("[SaveGame] Sending postMessage with data and resolution", o, r), (0, b.F)({
                            category: "account",
                            action: "fetchSaveGame",
                            data: {
                                resolution: r,
                                localPlaytime: a,
                                cloudPlaytime: i,
                                receivedPopulatedSaveGameFromCloud: c
                            }
                        }), $(r, o)
                    } catch (t) {
                        console.error(t), (0, b.F)({
                            category: "account",
                            action: "gamesaveError",
                            data: {
                                gameID: e.id,
                                method: "fetchSaveGameEpic",
                                context: "sending postMessage to gameFrame",
                                error: t instanceof Error ? t.message : String(t)
                            }
                        })
                    } else $("local", {
                        playtime: 0,
                        ls: "",
                        idb: ""
                    })
                })), (0, i.w)())
            }
            const X = () => document.getElementById("game-container"),
                U = () => document.getElementById("game-element"),
                W = () => {
                    U() && (0, L.e)()
                };

            function Q(e, t) {
                if (!(0, h.H6)(t.value) || "undefined" == typeof window) return r.w;
                const n = (0, l.R)(window, "resize").pipe((0, d.c)(500), (0, a.n)((() => (W(), r.w))), (0, u.B)(3e3)),
                    o = (0, l.R)(window, "orientationchange").pipe((0, a.n)((() => (W(), r.w))), (0, u.B)(3e3));
                return e.pipe((0, v.g)(E.gO.type), (0, a.n)((({
                    toggle: t
                }) => t ? ((0, D.r)(), W(), (0, p.h)(n, o).pipe((0, g.Q)(e.pipe((0, v.g)(E.gO.type), (0, s.p)((({
                    toggle: e
                }) => !e)))))) : r.w)))
            }
            const j = (e, t) => {
                if (!e) return;
                const n = (0, h.zS)(t),
                    o = (0, h.W3)(t),
                    i = (0, S.Vv)(t),
                    a = (0, h.H6)(t),
                    r = window ? .screen ? .orientation ? .lock,
                    c = a && r && i ? .mobile_file ? .orientation;
                if (!n && !o) try {
                    e.requestFullscreen({
                        navigationUI: "hide"
                    }).catch((() => {}))
                } catch {} finally {
                    e.focus()
                }
                var s;
                c && (s = i.mobile_file.orientation, ["portrait", "landscape"].includes(s) && window.screen.orientation.lock(s).catch((() => {})))
            };

            function J(e, t) {
                if ("undefined" == typeof window) return r.w;
                const n = (0, _.Gd)(t.value);
                return e.pipe((0, v.g)(h.SG.type, k.y.type, h.Xy.type), (0, s.p)((() => "game" === (0, S.K5)(t.value))), (0, a.n)((() => e.pipe((0, v.g)(E.wZ.type), (0, s.p)((({
                    event: e
                }) => e === I.Pz)), (0, f.s)(1), (0, m.T)((() => {
                    const e = (0, S.Vv)(t.value),
                        {
                            id: o
                        } = e || {};
                    if (!o) return r.w;
                    if ((0, M.Ep)(t.value)) try {
                        const e = `${V}/players/history`;
                        fetch(e, {
                            method: "POST",
                            body: JSON.stringify({
                                game_id: o
                            }),
                            credentials: "include"
                        })
                    } catch (e) {}
                    const i = [...(0, h.Fe)(t.value)],
                        a = i.findIndex((e => e.id === o)),
                        c = a > -1 ? i.filter((e => e.id !== o)) : i,
                        s = {
                            id: o,
                            pt: a > -1 ? i[a].pt : 0,
                            lp: Date.now()
                        };
                    c.unshift(s);
                    const l = c.slice(0, 100);
                    return (0, h.pX)({
                        recentGames: l,
                        siteID: n.id
                    })
                }))))))
            }

            function Y(e, t) {
                if ("undefined" == typeof window) return r.w;
                const n = (0, _.Gd)(t.value),
                    o = e.pipe((0, v.g)(k.y.type));
                return e.pipe((0, v.g)(h.pX.type), (0, a.n)((() => (0, y.O)(6e4).pipe((0, m.T)((() => {
                    const {
                        id: e
                    } = (0, S.Vv)(t.value), o = (0, h.Fe)(t.value), i = o.find((t => t.id === e));
                    if (i) {
                        const t = parseInt(i.pt || 0, 10) + 60,
                            a = o.map((n => n.id === e ? { ...n,
                                pt: t
                            } : n));
                        return (0, h.pX)({
                            recentGames: a,
                            siteID: n.id
                        })
                    }
                    return r.w
                })), (0, g.Q)(o)))))
            }

            function Z(e, t) {
                const n = (0, l.R)(window, "fullscreenchange").pipe((0, a.n)((() => (W(), (0, E.QX)(t.value) !== !!document ? .fullscreenElement ? (0, h.H6)(t.value) && !document ? .fullscreenElement ? r.w : (0, c.of)((0, E.gO)({
                        toggle: !!document ? .fullscreenElement
                    })) : r.w)))),
                    d = e.pipe((0, v.g)(E.lh.type), (0, s.p)((({
                        toggle: e
                    }) => e)), (0, o.M)((() => {
                        j(document.body, t.value)
                    })), (0, m.T)((() => (0, E.gO)({
                        toggle: !0
                    })))),
                    u = () => {
                        if (!(0, E.QX)(t.value)) return r.w;
                        window ? .PokiSDK ? .stopVideoAd ? .(), (0, x.Jb)();
                        try {
                            document ? .exitFullscreen ? .().catch((() => {}))
                        } catch {}
                        return window.removeEventListener("resize", W), window.removeEventListener("orientationchange", W), (0, c.of)((0, E.gO)({
                            toggle: !1
                        }))
                    },
                    f = e.pipe((0, v.g)(E.lh.type), (0, s.p)((({
                        toggle: e
                    }) => !e)), (0, a.n)((() => u()))),
                    y = e.pipe((0, v.g)("@@router/LOCATION_CHANGE"), (0, s.p)((() => !window.location.toString().includes("#fullscreen") && !window.location.toString().includes("#goog_rewarded"))), (0, a.n)((() => u()))),
                    w = e.pipe((0, v.g)(E.Br.type), (0, s.p)((() => (0, h.H6)(t.value))), (0, a.n)((() => (0, p.h)((0, l.R)(X(), "click"), (0, l.R)(U(), "click")).pipe((0, s.p)((() => (0, h.H6)(t.value))), (0, o.M)((() => {
                        j(document.body, t.value), (0, x.IF)()
                    })), (0, g.Q)(f), (0, i.w)())))),
                    b = e.pipe((0, v.g)(E.gO.type), (0, a.n)((({
                        payload: e
                    }) => {
                        const {
                            toggle: t
                        } = e, {
                            body: n
                        } = document, o = document.getElementById("app-root");
                        return o.style.overflow = t ? "hidden" : "auto", o.style.height = t ? "100svh" : "auto", t ? n.classList.add("isFullscreen") : n.classList.remove("isFullscreen"), r.w
                    })));
                return (0, p.h)(d, f, y, n, w, b)
            }

            function q(e) {
                return e.pipe((0, v.g)(E.wZ.type), (0, s.p)((({
                    event: e
                }) => e === I.NS)), (0, m.T)((() => (0, E.x9)())))
            }

            function ee(e, t) {
                return e.pipe((0, v.g)(E.kK.type), (0, w.c)(3e3), (0, s.p)((() => window ? .frames ? .gameFrame)), (0, o.M)((({
                    callback: e
                }) => {
                    const n = "screenshot" === e,
                        o = (0, S.Vv)(t.value);
                    window.frames.gameFrame.postMessage({
                        type: "pokiGenerateScreenshot",
                        hasFrame: n,
                        title: o.title,
                        thumbnail: o.image ? .path,
                        callback: e
                    }, "*")
                })))
            }

            function te(e, t) {
                return e.pipe((0, v.g)(O.X$.type), (0, w.c)(1e4), (0, a.n)((({
                    screenshot: e,
                    errors: n
                }) => {
                    const o = (0, O.p3)(t.value),
                        a = (0, G.A)("tracking"),
                        r = (0, F.p)(t.value),
                        c = (0, E.yd)(t.value),
                        s = (0, _.Gd)(t.value),
                        l = (0, S.Vv)(t.value),
                        d = (0, P.nj)(t.value),
                        u = (0, E.zM)(t.value),
                        p = (0, E.pT)(t.value),
                        g = (0, R.v)(t.value),
                        f = c ? .gameID === l.pokifordevs_game_id ? c.gameVersion : void 0,
                        m = g ? .page ? .start > 0 ? Date.now() - g.page.start : 0,
                        y = document.getElementById("game-element");
                    let w, v;
                    y && (w = `${y.clientWidth}x${y.clientHeight}`);
                    try {
                        const e = document.createElement("canvas"),
                            t = {
                                powerPreference: "high-performance",
                                failIfMajorPerformanceCaveat: !1
                            };
                        let n = e.getContext("webgl2", t);
                        if (n || (n = e.getContext("webgl", t), n || (n = e.getContext("experimental-webgl", t))), n) {
                            const e = n.getExtension("WEBGL_debug_renderer_info");
                            e && (v = n.getParameter(e.UNMASKED_RENDERER_WEBGL)), v || (v = n.getParameter(n.RENDERER))
                        }
                    } catch {}
                    return a("/playground-feedback", {
                        method: "POST",
                        body: JSON.stringify({
                            p4d_game_id: l.pokifordevs_game_id,
                            p4d_version_id: f,
                            type: "bugreport",
                            site_id: s.id,
                            message: o,
                            screenshot: e,
                            experiment: r,
                            adblock: d,
                            was_fullscreen: u,
                            game_resolution: w,
                            loading_finished: p,
                            time_on_page: m,
                            errors: n,
                            webgl_renderer: v,
                            device_pixel_ratio: window.devicePixelRatio || 1
                        })
                    }).pipe((0, i.w)())
                })))
            }

            function ne(e, t) {
                return e.pipe((0, v.g)(E.u9.type), (0, m.T)((e => e ? .data)), (0, a.n)((({
                    screenshot: e,
                    errors: n,
                    callback: o
                }) => {
                    if ("bugReport" === o) try {
                        return (0, c.of)((0, O.X$)({
                            screenshot: e,
                            errors: n
                        }))
                    } catch {
                        return r.w
                    }
                    if ("ratings" === o) try {
                        const o = (0, T.xI)(t.value);
                        return (0, c.of)((0, B.rY)({
                            voteDirection: o.voteDirection,
                            message: o.message,
                            screenshot: e,
                            errors: n
                        }))
                    } catch {
                        return r.w
                    }
                })))
            }

            function oe(e, t) {
                return e.pipe((0, v.g)(h.Xy.type), (0, f.s)(1), (0, s.p)((() => "preview" === (0, S.K5)(t.value))), (0, d.c)(1e4), (0, o.M)((() => {
                    console.info("%c🛡️ Content Security Policy (CSP) Notice 🛡️\n\n%cThis website has a strict Content Security Policy.\nIf your game needs to access external resources, please contact us.\n\n%c📧 Email your exact domains, including ports and protocol, to: developers@poki.com\n🔗 Don't forget to include a link to your game!\n\n%cThank you for your cooperation in maintaining our security standards!", "font-size: 20px; font-weight: bold; color: #4a90e2;", "font-size: 14px; color: #666;", "font-size: 14px; color: #0a84ff; font-weight: bold;", "font-size: 14px; color: #666; font-style: italic;")
                })), (0, i.w)())
            }
        },
        74275: (e, t, n) => {
            function o(e, t) {
                return e.ratings.userVotes[t] || 0
            }

            function i(e, t) {
                return e.ratings.previousUserVotes[t] || 0
            }

            function a(e, t) {
                const {
                    userVotes: n,
                    feedbackGiven: o
                } = e.ratings;
                return 0 !== n[t] && void 0 !== o[t] && !o[t]
            }

            function r(e) {
                return e.ratings.voteEpicInitilized
            }

            function c(e) {
                return e.ratings.ratingsData
            }
            n.d(t, {
                BK: () => r,
                U1: () => i,
                p5: () => o,
                xI: () => c,
                z5: () => a
            })
        }
    }
]);
//# sourceMappingURL=client~4040~7fa09d82a78ec91bd4c6.js.map