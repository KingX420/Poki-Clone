try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d0d6290c-a2b3-4054-b3df-69b7afee5849", e._sentryDebugIdIdentifier = "sentry-dbid-d0d6290c-a2b3-4054-b3df-69b7afee5849")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4897], {
        15564: (e, n, t) => {
            t.d(n, {
                q: () => i,
                r: () => r
            });
            var o = t(95200),
                s = t(94988);

            function r() {
                return (0, o.BY)("defaultCurrentScope", (() => new s.H))
            }

            function i() {
                return (0, o.BY)("defaultIsolationScope", (() => new s.H))
            }
        },
        26674: (e, n, t) => {
            t.d(n, {
                T: () => o
            });
            const o = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
        },
        34749: (e, n, t) => {
            t.d(n, {
                j: () => d
            });
            var o = t(26674),
                s = t(30690),
                r = t(5602),
                i = t(20572);

            function d(e, n, t, u = 0) {
                return new i.T2(((i, a) => {
                    const c = e[u];
                    if (null === n || "function" != typeof c) i(n);
                    else {
                        const f = c({ ...n
                        }, t);
                        o.T && c.id && null === f && r.vF.log(`Event processor "${c.id}" dropped event`), (0, s.Qg)(f) ? f.then((n => d(e, n, t, u + 1).then(i))).then(null, a) : d(e, f, t, u + 1).then(i).then(null, a)
                    }
                }))
            }
        },
        57968: (e, n, t) => {
            t.d(n, {
                KU: () => f,
                m6: () => a,
                o5: () => d,
                rm: () => u,
                v4: () => c,
                vn: () => p
            });
            var o = t(63793),
                s = t(95200),
                r = t(94988),
                i = t(30243);

            function d() {
                const e = (0, s.EU)();
                return (0, o.h)(e).getCurrentScope()
            }

            function u() {
                const e = (0, s.EU)();
                return (0, o.h)(e).getIsolationScope()
            }

            function a() {
                return (0, s.BY)("globalScope", (() => new r.H))
            }

            function c(...e) {
                const n = (0, s.EU)(),
                    t = (0, o.h)(n);
                if (2 === e.length) {
                    const [n, o] = e;
                    return n ? t.withSetScope(n, o) : t.withScope(o)
                }
                return t.withScope(e[0])
            }

            function f() {
                return d().getClient()
            }

            function p(e) {
                const n = e.getPropagationContext(),
                    {
                        traceId: t,
                        parentSpanId: o,
                        propagationSpanId: s
                    } = n,
                    r = {
                        trace_id: t,
                        span_id: s || (0, i.Z)()
                    };
                return o && (r.parent_span_id = o), r
            }
        },
        64251: (e, n, t) => {
            t.d(n, {
                Cp: () => d,
                J0: () => f,
                J5: () => g,
                Ol: () => c,
                o: () => a,
                r: () => u
            });
            var o = t(57968),
                s = t(59328),
                r = t(18993),
                i = t(92575);

            function d(e, n) {
                return (0, o.o5)().captureException(e, (0, r.li)(n))
            }

            function u(e, n) {
                return (0, o.o5)().captureEvent(e, n)
            }

            function a(e, n) {
                (0, o.rm)().setContext(e, n)
            }

            function c() {
                const e = (0, o.KU)();
                return !1 !== e ? .getOptions().enabled && !!e ? .getTransport()
            }

            function f(e) {
                const n = (0, o.rm)(),
                    t = (0, o.o5)(),
                    {
                        userAgent: r
                    } = i.O.navigator || {},
                    d = (0, s.fj)({
                        user: t.getUser() || n.getUser(),
                        ...r && {
                            userAgent: r
                        },
                        ...e
                    }),
                    u = n.getSession();
                return "ok" === u ? .status && (0, s.qO)(u, {
                    status: "exited"
                }), p(), n.setSession(d), d
            }

            function p() {
                const e = (0, o.rm)(),
                    n = (0, o.o5)().getSession() || e.getSession();
                n && (0, s.Vu)(n), l(), e.setSession()
            }

            function l() {
                const e = (0, o.rm)(),
                    n = (0, o.KU)(),
                    t = e.getSession();
                t && n && n.captureSession(t)
            }

            function g(e = !1) {
                e ? p() : l()
            }
        },
        75330: (e, n, t) => {
            t.d(n, {
                LE: () => d,
                V7: () => u,
                lu: () => a
            });
            var o = t(31158),
                s = t(5915),
                r = t(87961),
                i = t(87202);

            function d(e, n, t, o) {
                const s = (0, i.Cj)(t),
                    d = {
                        sent_at: (new Date).toISOString(),
                        ...s && {
                            sdk: s
                        },
                        ...!!o && n && {
                            dsn: (0, r.SB)(n)
                        }
                    },
                    u = "aggregates" in e ? [{
                        type: "sessions"
                    }, e] : [{
                        type: "session"
                    }, e.toJSON()];
                return (0, i.h4)(d, [u])
            }

            function u(e, n, t, o) {
                const s = (0, i.Cj)(t),
                    r = e.type && "replay_event" !== e.type ? e.type : "event";
                ! function(e, n) {
                    n && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || n.name, e.sdk.version = e.sdk.version || n.version, e.sdk.integrations = [...e.sdk.integrations || [], ...n.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...n.packages || []])
                }(e, t ? .sdk);
                const d = (0, i.n2)(e, s, o, n);
                delete e.sdkProcessingMetadata;
                const u = [{
                    type: r
                }, e];
                return (0, i.h4)(d, [u])
            }

            function a(e, n) {
                const t = (0, o.k1)(e[0]),
                    d = n ? .getDsn(),
                    u = n ? .getOptions().tunnel,
                    a = {
                        sent_at: (new Date).toISOString(),
                        ... function(e) {
                            return !!e.trace_id && !!e.public_key
                        }(t) && {
                            trace: t
                        },
                        ...!!u && d && {
                            dsn: (0, r.SB)(d)
                        }
                    },
                    c = n ? .getOptions().beforeSendSpan,
                    f = c ? e => {
                        const n = (0, s.et)(e),
                            t = c(n);
                        return t || ((0, s.xl)(), n)
                    } : s.et,
                    p = [];
                for (const n of e) {
                    const e = f(n);
                    e && p.push((0, i.y5)(e))
                }
                return (0, i.h4)(a, p)
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-930bdb04~051732bf265a470249cd.js.map