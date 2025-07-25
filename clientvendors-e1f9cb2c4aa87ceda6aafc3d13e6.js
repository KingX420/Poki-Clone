try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "1e1ce3a2-9f5c-434c-b5c6-e56358aba808", t._sentryDebugIdIdentifier = "sentry-dbid-1e1ce3a2-9f5c-434c-b5c6-e56358aba808")
} catch (t) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5162], {
        4712: (t, e, n) => {
            n.d(e, {
                L: () => r,
                R: () => s
            });
            var a = n(74611);

            function s(t) {
                const {
                    trace_id: e,
                    parent_span_id: n,
                    span_id: s,
                    status: r,
                    origin: i,
                    data: o,
                    op: c
                } = t.contexts ? .trace ? ? {};
                return {
                    data: o ? ? {},
                    description: t.transaction,
                    op: c,
                    parent_span_id: n,
                    span_id: s ? ? "",
                    start_timestamp: t.start_timestamp ? ? 0,
                    status: r,
                    timestamp: t.timestamp,
                    trace_id: e ? ? "",
                    origin: i,
                    profile_id: o ? .[a.E1],
                    exclusive_time: o ? .[a.jG],
                    measurements: t.measurements,
                    is_segment: !0
                }
            }

            function r(t) {
                return {
                    type: "transaction",
                    timestamp: t.timestamp,
                    start_timestamp: t.start_timestamp,
                    transaction: t.description,
                    contexts: {
                        trace: {
                            trace_id: t.trace_id,
                            span_id: t.span_id,
                            parent_span_id: t.parent_span_id,
                            op: t.op,
                            status: t.status,
                            origin: t.origin,
                            data: { ...t.data,
                                ...t.profile_id && {
                                    [a.E1]: t.profile_id
                                },
                                ...t.exclusive_time && {
                                    [a.jG]: t.exclusive_time
                                }
                            }
                        }
                    },
                    measurements: t.measurements
                }
            }
        },
        5915: (t, e, n) => {
            n.d(e, {
                Bk: () => L,
                CC: () => l,
                Ck: () => y,
                Hu: () => w,
                Qh: () => v,
                VS: () => A,
                aO: () => g,
                cI: () => S,
                et: () => I,
                kX: () => x,
                pK: () => E,
                uU: () => h,
                xO: () => O,
                xl: () => N,
                yW: () => C,
                zU: () => j
            });
            var a = n(63793),
                s = n(95200),
                r = n(57968),
                i = n(74611),
                o = n(91135),
                c = n(88728),
                d = n(5602),
                u = n(40873),
                p = n(30243),
                f = n(90519),
                m = n(8190),
                _ = n(70333);
            const l = 0,
                g = 1;
            let b = !1;

            function y(t) {
                const {
                    spanId: e,
                    traceId: n
                } = t.spanContext(), {
                    data: a,
                    op: s,
                    parent_span_id: r,
                    status: i,
                    origin: o,
                    links: c
                } = I(t);
                return {
                    parent_span_id: r,
                    span_id: e,
                    trace_id: n,
                    data: a,
                    op: s,
                    status: i,
                    origin: o,
                    links: c
                }
            }

            function x(t) {
                const {
                    spanId: e,
                    traceId: n,
                    isRemote: a
                } = t.spanContext(), s = a ? e : I(t).parent_span_id, r = (0, c.L)(t).scope;
                return {
                    parent_span_id: s,
                    span_id: a ? r ? .getPropagationContext().propagationSpanId || (0, p.Z)() : e,
                    trace_id: n
                }
            }

            function v(t) {
                const {
                    traceId: e,
                    spanId: n
                } = t.spanContext(), a = E(t);
                return (0, m.TC)(e, n, a)
            }

            function h(t) {
                return t && t.length > 0 ? t.map((({
                    context: {
                        spanId: t,
                        traceId: e,
                        traceFlags: n,
                        ...a
                    },
                    attributes: s
                }) => ({
                    span_id: t,
                    trace_id: e,
                    sampled: n === g,
                    attributes: s,
                    ...a
                }))) : void 0
            }

            function S(t) {
                return "number" == typeof t ? k(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? k(t.getTime()) : (0, f.zf)()
            }

            function k(t) {
                return t > 9999999999 ? t / 1e3 : t
            }

            function I(t) {
                if (function(t) {
                        return "function" == typeof t.getSpanJSON
                    }(t)) return t.getSpanJSON();
                const {
                    spanId: e,
                    traceId: n
                } = t.spanContext();
                if (function(t) {
                        const e = t;
                        return !!(e.attributes && e.startTime && e.name && e.endTime && e.status)
                    }(t)) {
                    const {
                        attributes: a,
                        startTime: s,
                        name: r,
                        endTime: o,
                        parentSpanId: c,
                        status: d,
                        links: u
                    } = t;
                    return {
                        span_id: e,
                        trace_id: n,
                        data: a,
                        description: r,
                        parent_span_id: c,
                        start_timestamp: S(s),
                        timestamp: S(o) || void 0,
                        status: C(d),
                        op: a[i.uT],
                        origin: a[i.JD],
                        links: h(u)
                    }
                }
                return {
                    span_id: e,
                    trace_id: n,
                    start_timestamp: 0,
                    data: {}
                }
            }

            function E(t) {
                const {
                    traceFlags: e
                } = t.spanContext();
                return e === g
            }

            function C(t) {
                if (t && t.code !== o.a3) return t.code === o.F3 ? "ok" : t.message || "unknown_error"
            }
            const D = "_sentryChildSpans",
                T = "_sentryRootSpan";

            function w(t, e) {
                const n = t[T] || t;
                (0, u.my)(e, T, n), t[D] ? t[D].add(e) : (0, u.my)(t, D, new Set([e]))
            }

            function A(t, e) {
                t[D] && t[D].delete(e)
            }

            function O(t) {
                const e = new Set;
                return function t(n) {
                    if (!e.has(n) && E(n)) {
                        e.add(n);
                        const a = n[D] ? Array.from(n[D]) : [];
                        for (const e of a) t(e)
                    }
                }(t), Array.from(e)
            }

            function j(t) {
                return t[T] || t
            }

            function L() {
                const t = (0, s.EU)(),
                    e = (0, a.h)(t);
                return e.getActiveSpan ? e.getActiveSpan() : (0, _.f)((0, r.o5)())
            }

            function N() {
                b || ((0, d.pq)((() => {
                    console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.")
                })), b = !0)
            }
        },
        8251: (t, e, n) => {
            n.d(e, {
                K: () => s
            });
            var a = n(21472);

            function s(t, e, n = [e], s = "npm") {
                const r = t._metadata || {};
                r.sdk || (r.sdk = {
                    name: `sentry.javascript.${e}`,
                    packages: n.map((t => ({
                        name: `${s}:@sentry/${t}`,
                        version: a.M
                    }))),
                    version: a.M
                }), t._metadata = r
            }
        },
        18843: (t, e, n) => {
            n.d(e, {
                i: () => f
            });
            var a = n(63793),
                s = n(95200),
                r = n(57968),
                i = n(64251),
                o = n(5602),
                c = n(5915),
                d = n(31158),
                u = n(8190),
                p = n(8922);

            function f(t = {}) {
                const e = (0, r.KU)();
                if (!(0, i.Ol)() || !e) return {};
                const n = (0, s.EU)(),
                    f = (0, a.h)(n);
                if (f.getTraceData) return f.getTraceData(t);
                const m = (0, r.o5)(),
                    _ = t.span || (0, c.Bk)(),
                    l = _ ? (0, c.Qh)(_) : function(t) {
                        const {
                            traceId: e,
                            sampled: n,
                            propagationSpanId: a
                        } = t.getPropagationContext();
                        return (0, u.TC)(e, a, n)
                    }(m),
                    g = _ ? (0, d.k1)(_) : (0, d.ao)(e, m),
                    b = (0, p.De)(g);
                return u.MI.test(l) ? {
                    "sentry-trace": l,
                    baggage: b
                } : (o.vF.warn("Invalid sentry-trace data. Cannot generate trace data"), {})
            }
        },
        18993: (t, e, n) => {
            n.d(e, {
                li: () => _,
                mG: () => m
            });
            var a = n(7313),
                s = n(57968),
                r = n(34749),
                i = n(94988),
                o = n(48132),
                c = n(44910),
                d = n(51071),
                u = n(2323),
                p = n(90519),
                f = n(43545);

            function m(t, e, n, m, _, l) {
                const {
                    normalizeDepth: g = 3,
                    normalizeMaxBreadth: b = 1e3
                } = t, y = { ...e,
                    event_id: e.event_id || n.event_id || (0, c.eJ)(),
                    timestamp: e.timestamp || (0, p.lu)()
                }, x = n.integrations || t.integrations.map((t => t.name));
                ! function(t, e) {
                    const {
                        environment: n,
                        release: s,
                        dist: r,
                        maxValueLength: i = 250
                    } = e;
                    t.environment = t.environment || n || a.U, !t.release && s && (t.release = s);
                    !t.dist && r && (t.dist = r);
                    const o = t.request;
                    o ? .url && (o.url = (0, u.xv)(o.url, i))
                }(y, t),
                function(t, e) {
                    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
                }(y, x), _ && _.emit("applyFrameMetadata", e), void 0 === e.type && function(t, e) {
                    const n = (0, o.z)(e);
                    t.exception ? .values ? .forEach((t => {
                        t.stacktrace ? .frames ? .forEach((t => {
                            t.filename && (t.debug_id = n[t.filename])
                        }))
                    }))
                }(y, t.stackParser);
                const v = function(t, e) {
                    if (!e) return t;
                    const n = t ? t.clone() : new i.H;
                    return n.update(e), n
                }(m, n.captureContext);
                n.mechanism && (0, c.M6)(y, n.mechanism);
                const h = _ ? _.getEventProcessors() : [],
                    S = (0, s.m6)().getScopeData();
                if (l) {
                    const t = l.getScopeData();
                    (0, f.Rg)(S, t)
                }
                if (v) {
                    const t = v.getScopeData();
                    (0, f.Rg)(S, t)
                }
                const k = [...n.attachments || [], ...S.attachments];
                k.length && (n.attachments = k), (0, f.e2)(y, S);
                const I = [...h, ...S.eventProcessors];
                return (0, r.j)(I, y, n).then((t => (t && function(t) {
                    const e = {};
                    if (t.exception ? .values ? .forEach((t => {
                            t.stacktrace ? .frames ? .forEach((t => {
                                t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                            }))
                        })), 0 === Object.keys(e).length) return;
                    t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
                    const n = t.debug_meta.images;
                    Object.entries(e).forEach((([t, e]) => {
                        n.push({
                            type: "sourcemap",
                            code_file: t,
                            debug_id: e
                        })
                    }))
                }(t), "number" == typeof g && g > 0 ? function(t, e, n) {
                    if (!t) return null;
                    const a = { ...t,
                        ...t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map((t => ({ ...t,
                                ...t.data && {
                                    data: (0, d.S8)(t.data, e, n)
                                }
                            })))
                        },
                        ...t.user && {
                            user: (0, d.S8)(t.user, e, n)
                        },
                        ...t.contexts && {
                            contexts: (0, d.S8)(t.contexts, e, n)
                        },
                        ...t.extra && {
                            extra: (0, d.S8)(t.extra, e, n)
                        }
                    };
                    t.contexts ? .trace && a.contexts && (a.contexts.trace = t.contexts.trace, t.contexts.trace.data && (a.contexts.trace.data = (0, d.S8)(t.contexts.trace.data, e, n)));
                    t.spans && (a.spans = t.spans.map((t => ({ ...t,
                        ...t.data && {
                            data: (0, d.S8)(t.data, e, n)
                        }
                    }))));
                    t.contexts ? .flags && a.contexts && (a.contexts.flags = (0, d.S8)(t.contexts.flags, 3, n));
                    return a
                }(t, g, b) : t)))
            }

            function _(t) {
                if (t) return function(t) {
                    return t instanceof i.H || "function" == typeof t
                }(t) || function(t) {
                    return Object.keys(t).some((t => l.includes(t)))
                }(t) ? {
                    captureContext: t
                } : t
            }
            const l = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"]
        },
        20900: (t, e, n) => {
            n.d(e, {
                T: () => o
            });
            var a = n(64251),
                s = n(97221),
                r = n(8251),
                i = n(17402);

            function o(t) {
                const e = { ...t
                };
                return (0, r.K)(e, "react"), (0, a.o)("react", {
                    version: i.version
                }), (0, s.Ts)(e)
            }
        },
        45734: (t, e, n) => {
            function a(t, e, n = 2) {
                if (!e || "object" != typeof e || n <= 0) return e;
                if (t && 0 === Object.keys(e).length) return t;
                const s = { ...t
                };
                for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (s[t] = a(s[t], e[t], n - 1));
                return s
            }
            n.d(e, {
                h: () => a
            })
        },
        70333: (t, e, n) => {
            n.d(e, {
                f: () => i,
                r: () => r
            });
            var a = n(40873);
            const s = "_sentrySpan";

            function r(t, e) {
                e ? (0, a.my)(t, s, e) : delete t[s]
            }

            function i(t) {
                return t[s]
            }
        },
        87489: (t, e, n) => {
            function a(t) {
                void 0 === t.user ? .ip_address && (t.user = { ...t.user,
                    ip_address: "{{auto}}"
                })
            }

            function s(t) {
                "aggregates" in t ? void 0 === t.attrs ? .ip_address && (t.attrs = { ...t.attrs,
                    ip_address: "{{auto}}"
                }) : void 0 === t.ipAddress && (t.ipAddress = "{{auto}}")
            }
            n.d(e, {
                E: () => a,
                N: () => s
            })
        },
        91773: (t, e, n) => {
            function a(t) {
                if ("boolean" == typeof t) return Number(t);
                const e = "string" == typeof t ? parseFloat(t) : t;
                return "number" != typeof e || isNaN(e) || e < 0 || e > 1 ? void 0 : e
            }
            n.d(e, {
                i: () => a
            })
        }
    }
]);
//# sourceMappingURL=client~vendors-e1f9cb2c~4aa87ceda6aafc3d13e6.js.map