try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1c63394d-9138-4041-b32b-0e573d7d473f", e._sentryDebugIdIdentifier = "sentry-dbid-1c63394d-9138-4041-b32b-0e573d7d473f")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1437], {
        844: (e, t, n) => {
            n.d(t, {
                B: () => v,
                Z: () => f
            });
            var r = n(90519),
                i = n(5915),
                o = n(57968),
                a = n(87320),
                s = n(74611),
                c = n(56388),
                u = n(78084);
            const d = [],
                l = new Map;

            function f() {
                if ((0, u.D)() && (0, r.k3)()) {
                    const e = (0, c.hT)((({
                        metric: e
                    }) => {
                        if (null == e.value) return;
                        const t = e.entries.find((t => t.duration === e.value && p[t.name]));
                        if (!t) return;
                        const {
                            interactionId: n
                        } = t, c = p[t.name], d = (0, u.rv)((0, r.k3)() + t.startTime), f = (0, u.rv)(e.value), v = (0, i.Bk)(), h = v ? (0, i.zU)(v) : void 0, m = (null != n ? l.get(n) : void 0) || h, g = m ? (0, i.et)(m).description : (0, o.o5)().getScopeData().transactionName, T = (0, a.Hd)(t.target), y = {
                            [s.JD]: "auto.http.browser.inp",
                            [s.uT]: `ui.interaction.${c}`,
                            [s.jG]: t.duration
                        }, b = (0, u.kD)({
                            name: T,
                            transaction: g,
                            attributes: y,
                            startTime: d
                        });
                        b && (b.addEvent("inp", {
                            [s.Sn]: "millisecond",
                            [s.xc]: e.value
                        }), b.end(d + f))
                    }));
                    return () => {
                        e()
                    }
                }
                return () => {}
            }
            const p = {
                click: "click",
                pointerdown: "click",
                pointerup: "click",
                mousedown: "click",
                mouseup: "click",
                touchstart: "click",
                touchend: "click",
                mouseover: "hover",
                mouseout: "hover",
                mouseenter: "hover",
                mouseleave: "hover",
                pointerover: "hover",
                pointerout: "hover",
                pointerenter: "hover",
                pointerleave: "hover",
                dragstart: "drag",
                dragend: "drag",
                drag: "drag",
                dragenter: "drag",
                dragleave: "drag",
                dragover: "drag",
                drop: "drag",
                keydown: "press",
                keyup: "press",
                keypress: "press",
                input: "press"
            };

            function v() {
                const e = ({
                    entries: e
                }) => {
                    const t = (0, i.Bk)(),
                        n = t && (0, i.zU)(t);
                    e.forEach((e => {
                        if (!(0, c.tC)(e) || !n) return;
                        const t = e.interactionId;
                        if (null != t && !l.has(t)) {
                            if (d.length > 10) {
                                const e = d.shift();
                                l.delete(e)
                            }
                            d.push(t), l.set(t, n)
                        }
                    }))
                };
                (0, c.wv)("event", e), (0, c.wv)("first-input", e)
            }
        },
        38549: (e, t, n) => {
            n.d(t, {
                D: () => p
            });
            var r = n(57968),
                i = n(5915),
                o = n(5602),
                a = n(90519),
                s = n(87320),
                c = n(74611),
                u = n(4693),
                d = n(56388),
                l = n(78084),
                f = n(32075);

            function p() {
                let e, t, n = 0;
                if (! function() {
                        try {
                            return PerformanceObserver.supportedEntryTypes.includes("layout-shift")
                        } catch {
                            return !1
                        }
                    }()) return;
                let p = !1;

                function v() {
                    p || (p = !0, t && function(e, t, n) {
                        u.T && o.vF.log(`Sending CLS span (${e})`);
                        const i = (0, l.rv)(((0, a.k3)() || 0) + (t ? .startTime || 0)),
                            d = (0, r.o5)().getScopeData().transactionName,
                            f = t ? (0, s.Hd)(t.sources[0] ? .node) : "Layout shift",
                            p = {
                                [c.JD]: "auto.http.browser.cls",
                                [c.uT]: "ui.webvital.cls",
                                [c.jG]: t ? .duration || 0,
                                "sentry.pageload.span_id": n
                            },
                            v = (0, l.kD)({
                                name: f,
                                transaction: d,
                                attributes: p,
                                startTime: i
                            });
                        v && (v.addEvent("cls", {
                            [c.Sn]: "",
                            [c.xc]: e
                        }), v.end(i))
                    }(n, e, t), h())
                }
                const h = (0, d.a9)((({
                    metric: t
                }) => {
                    const r = t.entries[t.entries.length - 1];
                    r && (n = t.value, e = r)
                }), !0);
                (0, f.Q)((() => {
                    v()
                })), setTimeout((() => {
                    const e = (0, r.KU)();
                    if (!e) return;
                    const n = e.on("startNavigationSpan", (() => {
                            v(), n ? .()
                        })),
                        o = (0, i.Bk)();
                    if (o) {
                        const e = (0, i.zU)(o);
                        "pageload" === (0, i.et)(e).op && (t = e.spanContext().spanId)
                    }
                }), 0)
            }
        },
        56388: (e, t, n) => {
            n.d(t, {
                a9: () => B,
                T5: () => P,
                hT: () => Q,
                Pt: () => O,
                wv: () => J,
                YG: () => H,
                tC: () => Z
            });
            var r = n(5602),
                i = n(20527),
                o = n(4693),
                a = n(79888),
                s = n(39191),
                c = n(2740),
                u = n(32075),
                d = n(34588),
                l = n(22422);
            const f = [.1, .25],
                p = (e, t = {}) => {
                    (0, l.z)((0, d.J)((() => {
                        const n = (0, s.X)("CLS", 0);
                        let r, i = 0,
                            o = [];
                        const d = e => {
                                e.forEach((e => {
                                    if (!e.hadRecentInput) {
                                        const t = o[0],
                                            n = o[o.length - 1];
                                        i && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, o.push(e)) : (i = e.value, o = [e])
                                    }
                                })), i > n.value && (n.value = i, n.entries = o, r())
                            },
                            l = (0, c.l)("layout-shift", d);
                        l && (r = (0, a.R)(e, n, f, t.reportAllChanges), (0, u.Q)((() => {
                            d(l.takeRecords()), r(!0)
                        })), setTimeout(r, 0))
                    })))
                };
            var v = n(30318),
                h = n(14391);
            const m = [100, 300],
                g = (e, t = {}) => {
                    (0, h.I)((() => {
                        const n = (0, v.N)(),
                            r = (0, s.X)("FID");
                        let i;
                        const o = e => {
                                e.startTime < n.firstHiddenTime && (r.value = e.processingStart - e.startTime, r.entries.push(e), i(!0))
                            },
                            l = e => {
                                e.forEach(o)
                            },
                            f = (0, c.l)("first-input", l);
                        i = (0, a.R)(e, r, m, t.reportAllChanges), f && (0, u.Q)((0, d.J)((() => {
                            l(f.takeRecords()), f.disconnect()
                        })))
                    }))
                };
            var T = n(14910),
                y = n(56631),
                b = n(26911),
                k = n(56028);
            const E = [200, 500],
                D = (e, t = {}) => {
                    "PerformanceEventTiming" in T.j && "interactionId" in PerformanceEventTiming.prototype && (0, h.I)((() => {
                        (0, b.D)();
                        const n = (0, s.X)("INP");
                        let r;
                        const i = e => {
                                (0, k.d)((() => {
                                    e.forEach(y.M);
                                    const t = (0, y.cg)();
                                    t && t.latency !== n.value && (n.value = t.latency, n.entries = t.entries, r())
                                }))
                            },
                            o = (0, c.l)("event", i, {
                                durationThreshold: null != t.durationThreshold ? t.durationThreshold : y.pl
                            });
                        r = (0, a.R)(e, n, E, t.reportAllChanges), o && (o.observe({
                            type: "first-input",
                            buffered: !0
                        }), (0, u.Q)((() => {
                            i(o.takeRecords()), r(!0)
                        })))
                    }))
                };
            var _ = n(97806);
            const w = [2500, 4e3],
                I = {},
                C = (e, t = {}) => {
                    (0, h.I)((() => {
                        const n = (0, v.N)(),
                            r = (0, s.X)("LCP");
                        let i;
                        const o = e => {
                                t.reportAllChanges || (e = e.slice(-1)), e.forEach((e => {
                                    e.startTime < n.firstHiddenTime && (r.value = Math.max(e.startTime - (0, _.b)(), 0), r.entries = [e], i())
                                }))
                            },
                            l = (0, c.l)("largest-contentful-paint", o);
                        if (l) {
                            i = (0, a.R)(e, r, w, t.reportAllChanges);
                            const n = (0, d.J)((() => {
                                I[r.id] || (o(l.takeRecords()), l.disconnect(), I[r.id] = !0, i(!0))
                            }));
                            ["keydown", "click"].forEach((e => {
                                T.j.document && addEventListener(e, (() => (0, k.d)(n)), {
                                    once: !0,
                                    capture: !0
                                })
                            })), (0, u.Q)(n)
                        }
                    }))
                };
            var S = n(79739);
            const A = {},
                N = {};
            let L, R, U, j, x;

            function B(e, t = !1) {
                return M("cls", e, z, L, t)
            }

            function O(e, t = !1) {
                return M("lcp", e, X, U, t)
            }

            function P(e) {
                return M("fid", e, F, R)
            }

            function H(e) {
                return M("ttfb", e, $, j)
            }

            function Q(e) {
                return M("inp", e, G, x)
            }

            function J(e, t) {
                return Y(e, t), N[e] || (! function(e) {
                    const t = {};
                    "event" === e && (t.durationThreshold = 0);
                    (0, c.l)(e, (t => {
                        K(e, {
                            entries: t
                        })
                    }), t)
                }(e), N[e] = !0), q(e, t)
            }

            function K(e, t) {
                const n = A[e];
                if (n ? .length)
                    for (const a of n) try {
                        a(t)
                    } catch (t) {
                        o.T && r.vF.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${(0,i.qQ)(a)}\nError:`, t)
                    }
            }

            function z() {
                return p((e => {
                    K("cls", {
                        metric: e
                    }), L = e
                }), {
                    reportAllChanges: !0
                })
            }

            function F() {
                return g((e => {
                    K("fid", {
                        metric: e
                    }), R = e
                }))
            }

            function X() {
                return C((e => {
                    K("lcp", {
                        metric: e
                    }), U = e
                }), {
                    reportAllChanges: !0
                })
            }

            function $() {
                return (0, S.C)((e => {
                    K("ttfb", {
                        metric: e
                    }), j = e
                }))
            }

            function G() {
                return D((e => {
                    K("inp", {
                        metric: e
                    }), x = e
                }))
            }

            function M(e, t, n, r, i = !1) {
                let o;
                return Y(e, t), N[e] || (o = n(), N[e] = !0), r && t({
                    metric: r
                }), q(e, t, i ? o : void 0)
            }

            function Y(e, t) {
                A[e] = A[e] || [], A[e].push(t)
            }

            function q(e, t, n) {
                return () => {
                    n && n();
                    const r = A[e];
                    if (!r) return;
                    const i = r.indexOf(t); - 1 !== i && r.splice(i, 1)
                }
            }

            function Z(e) {
                return "duration" in e
            }
        },
        78084: (e, t, n) => {
            n.d(t, {
                D: () => d,
                Ep: () => f,
                Kk: () => s,
                Tn: () => c,
                kD: () => u,
                rv: () => l
            });
            var r = n(5915),
                i = n(82558),
                o = n(57968),
                a = n(14910);

            function s(e) {
                return "number" == typeof e && isFinite(e)
            }

            function c(e, t, n, { ...o
            }) {
                const a = (0, r.et)(e).start_timestamp;
                return a && a > t && "function" == typeof e.updateStartTime && e.updateStartTime(t), (0, i.hb)(e, (() => {
                    const e = (0, i.Uk)({
                        startTime: t,
                        ...o
                    });
                    return e && e.end(n), e
                }))
            }

            function u(e) {
                const t = (0, o.KU)();
                if (!t) return;
                const {
                    name: n,
                    transaction: r,
                    attributes: s,
                    startTime: c
                } = e, {
                    release: u,
                    environment: d,
                    sendDefaultPii: l
                } = t.getOptions(), f = t.getIntegrationByName("Replay"), p = f ? .getReplayId(), v = (0, o.o5)(), h = v.getUser(), m = void 0 !== h ? h.email || h.id || h.ip_address : void 0;
                let g;
                try {
                    g = v.getScopeData().contexts.profile.profile_id
                } catch {}
                const T = {
                    release: u,
                    environment: d,
                    user: m || void 0,
                    profile_id: g || void 0,
                    replay_id: p || void 0,
                    transaction: r,
                    "user_agent.original": a.j.navigator ? .userAgent,
                    "client.address": l ? "{{auto}}" : void 0,
                    ...s
                };
                return (0, i.Uk)({
                    name: n,
                    attributes: T,
                    startTime: c,
                    experimental: {
                        standalone: !0
                    }
                })
            }

            function d() {
                return a.j.addEventListener && a.j.performance
            }

            function l(e) {
                return e / 1e3
            }

            function f(e) {
                let t = "unknown",
                    n = "unknown",
                    r = "";
                for (const i of e) {
                    if ("/" === i) {
                        [t, n] = e.split("/");
                        break
                    }
                    if (!isNaN(Number(i))) {
                        t = "h" === r ? "http" : r, n = e.split(r)[1];
                        break
                    }
                    r += i
                }
                return r === e && (t = r), {
                    name: t,
                    version: n
                }
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-9686a255~886d2d9fc36df21d9fcc.js.map