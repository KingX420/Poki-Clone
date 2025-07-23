try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd700dfb-15d5-4140-9e41-64478e9f76e6", e._sentryDebugIdIdentifier = "sentry-dbid-bd700dfb-15d5-4140-9e41-64478e9f76e6")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7700], {
        4834: (e, t, p) => {
            function n() {
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
            p.d(t, {
                r: () => n
            })
        },
        57700: (e, t, p) => {
            p.r(t), p.d(t, {
                adRefreshExecution: () => F,
                adRefreshLogic: () => C,
                disableMobileAdsOpportunityEpic: () => Y,
                hideAdsStatusEpic: () => Q,
                receiveSDKEvent: () => H,
                setAdTimingsEpic: () => N,
                setMobileAdsOpportunityEpic: () => X,
                startImmersiveTakeoverEpic: () => R,
                stopAdRefreshingForCustomCampaigns: () => z,
                stopImmersiveTakeoverEpic: () => j
            });
            var n = p(29079),
                i = p(16126),
                r = p(28452),
                s = p(62467),
                o = p(44240),
                a = p(59099),
                d = p(81160),
                c = p(67791),
                u = p(96083),
                f = p(63720),
                l = p(93272),
                y = p(8767),
                g = p(76981),
                v = p(38975),
                w = p(77655),
                T = p(61701),
                b = p(34524),
                m = p(48554),
                h = p(23260),
                _ = p(98417),
                D = p(90385),
                A = p(46493),
                E = p(13150),
                I = p(42891),
                O = p(4834),
                Z = p(61348);
            const k = 6e4,
                M = 2e4,
                S = 5e3;
            let L = Date.now();

            function F(e, t) {
                return e.pipe((0, n.g)(b.sF.type), (0, i.p)((() => !(0, m.QX)(t.value))), (0, r.Z)((({
                    refreshType: e
                }) => {
                    const p = Z.A.mobile.mobile_gamebar_320x50(t.value),
                        n = (0, _.d)(t.value).filter((({
                            code: e
                        }) => e !== p.code)).map((({
                            code: t
                        }) => (0, b.XZ)({
                            code: t,
                            refreshType: e
                        })));
                    return (0, s.of)(...n)
                })))
            }

            function C(e, t) {
                const p = e.pipe((0, n.g)("@@router/LOCATION_CHANGE", b.jO.type, b.wt.type)),
                    r = e.pipe((0, n.g)(m.gO.type), (0, i.p)((({
                        payload: e
                    }) => !e.toggle))),
                    s = e.pipe((0, n.g)(m.wZ.type), (0, i.p)((({
                        event: e
                    }) => [E.sf].includes(e)))),
                    y = (0, o.h)(r, s).pipe((0, a.M)((() => {
                        L = Date.now()
                    })), (0, d.T)((() => (0, b.sF)({
                        trigger: "interaction",
                        refreshType: "direct"
                    }))), (0, c.Q)(p)),
                    g = [E.zY, E.yk, E.yS],
                    v = e.pipe((0, n.g)(m.wZ.type), (0, i.p)((({
                        event: e
                    }) => g.includes(e))), (0, i.p)((() => Date.now() - L >= M)), (0, a.M)((() => {
                        L = Date.now()
                    })), (0, d.T)((() => (0, b.sF)({
                        trigger: "smart",
                        refreshType: "smart"
                    }))), (0, c.Q)(p)),
                    w = (0, u.Y)(k).pipe((0, d.T)((() => (0, b.sF)({
                        trigger: "dumb",
                        refreshType: "dumb"
                    }))), (0, c.Q)(p));
                return e.pipe((0, n.g)(I.Xy.type, h.y.type, b.jp.type), (0, i.p)((() => "game" === (0, D.K5)(t.value))), (0, i.p)((() => !(0, I.H6)(t.value))), (0, a.M)((() => {
                    L = Date.now()
                })), (0, f.n)((() => (0, o.h)((0, l.T)((() => (0, D.Vv)(t.value) ? .allow_smart_refresh), v, w), y))))
            }

            function H(e) {
                return e.pipe((0, n.g)(m.yq.type), (0, a.M)((e => {
                    (0, A.F)({
                        category: "sdk",
                        action: "details",
                        data: e
                    })
                })), (0, y.w)())
            }

            function R(e, t) {
                return e.pipe((0, n.g)(m.wZ.type), (0, i.p)((({
                    event: e
                }) => e === E.e0)), (0, d.T)((({
                    data: e
                }) => {
                    const p = (0, D.Sk)(t.value) || {},
                        n = [...e ? .IMAWrapperIDs || [], e ? .creativeId || 0];
                    for (let e = 0; e < n.length; e++)
                        if (p[n[e]]) return {
                            takeover: {
                                creativeId: n[e],
                                config: p[n[e]]
                            }
                        };
                    return {
                        takeover: !1
                    }
                })), (0, i.p)((({
                    takeover: e
                }) => !!e)), (0, d.T)((e => (0, b.jO)(e))))
            }

            function j(e, t) {
                const p = e.pipe((0, n.g)(b.sF.type)),
                    r = e.pipe((0, n.g)(h.y.type)),
                    s = e.pipe((0, n.g)(m.wZ.type), (0, i.p)((({
                        event: e
                    }) => e === E.sf))),
                    a = s.pipe((0, g.c)(S), (0, v.s)(1), (0, f.n)((() => p)), (0, c.Q)(r)),
                    u = (0, b.$i)(t.value);
                return (0, o.h)(r.pipe((0, i.p)((() => !!(0, b.iM)(t.value))), (0, d.T)((() => (0, b.jp)()))), r.pipe((0, i.p)((() => u && u.immersiveTakeover)), (0, d.T)((() => (0, b.i$)()))), s.pipe((0, f.n)((() => p.pipe((0, w.i)(1), (0, d.T)((() => (0, b.jp)())))))), a.pipe((0, d.T)((() => (0, b.i$)()))))
            }

            function N(e) {
                return e.pipe((0, n.g)(m.wZ.type), (0, i.p)((({
                    event: e
                }) => [E.Zs, E.XD, E.e0, E.sf, E.yk, E.yS].includes(e))), (0, d.T)((e => {
                    const {
                        data: t,
                        event: p
                    } = e;
                    switch (p) {
                        case E.XD:
                        case E.sf:
                        case E.e0:
                            return (0, m.cD)({
                                event: p
                            });
                        case E.Zs:
                            return (0, m.qA)({
                                duration: t.duration,
                                currentTime: t.currentTime
                            });
                        case E.yk:
                        case E.yS:
                            return (0, m.vA)()
                    }
                })))
            }

            function Q(e) {
                return e.pipe((0, n.g)(m.wZ.type, h.y.type), (0, i.p)((({
                    event: e,
                    type: t
                }) => [E.sf, E.AY, E.Zt].includes(e) || t === h.y.type)), (0, a.M)((() => {
                    (0, O.r)()
                })), (0, d.T)((() => (0, m.m$)())))
            }

            function X(e, t) {
                return (0, I.H6)(t.value) ? e.pipe((0, n.g)(m.wZ.type), (0, i.p)((({
                    event: e
                }) => [E.Pz, E.zY, E.e0, E.sf].includes(e))), (0, d.T)((({
                    event: e
                }) => (0, b.eb)({
                    allowed: [E.Pz, E.sf].includes(e)
                })))) : T.w
            }

            function Y(e, t) {
                return (0, I.H6)(t.value) ? e.pipe((0, n.g)(h.y.type, m.gO.type), (0, i.p)((e => e.type === m.gO.type && !0 === e ? .payload ? .toggle)), (0, d.T)((() => (0, b.eb)({
                    allowed: !1
                })))) : T.w
            }

            function z(e) {
                return e.pipe((0, n.g)(m.wZ.type), (0, i.p)((({
                    event: e
                }) => [E.oM].includes(e))), (0, i.p)((({
                    data: e
                }) => ["stopRefreshingForThisPage"].includes(e.dfpCreativeId))), (0, a.M)((() => {
                    console.warn("force stopping refreshing, will activate next pageview")
                })), (0, d.T)((() => (0, b.wt)())))
            }
        }
    }
]);
//# sourceMappingURL=client~7700~628f02dfa947098eb904.js.map