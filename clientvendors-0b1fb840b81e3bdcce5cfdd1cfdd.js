try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5b9338a9-5ea0-4816-a176-6425f2d0f60f", e._sentryDebugIdIdentifier = "sentry-dbid-5b9338a9-5ea0-4816-a176-6425f2d0f60f")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3024], {
        3572: (e, n, t) => {
            t.d(n, {
                Z: () => r
            });
            var a = t(26674),
                i = t(54704),
                s = t(91773),
                o = t(5602);

            function r(e, n, t) {
                if (!(0, i.f)(e)) return [!1];
                let r, c;
                "function" == typeof e.tracesSampler ? (c = e.tracesSampler({ ...n,
                    inheritOrSampleWith: e => "number" == typeof n.parentSampleRate ? n.parentSampleRate : "boolean" == typeof n.parentSampled ? Number(n.parentSampled) : e
                }), r = !0) : void 0 !== n.parentSampled ? c = n.parentSampled : void 0 !== e.tracesSampleRate && (c = e.tracesSampleRate, r = !0);
                const p = (0, s.i)(c);
                if (void 0 === p) return a.T && o.vF.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(c)} of type ${JSON.stringify(typeof c)}.`), [!1];
                if (!p) return a.T && o.vF.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), [!1, p, r];
                const d = t < p;
                return d || a.T && o.vF.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(c)})`), [d, p, r]
            }
        },
        5109: (e, n, t) => {
            t.d(n, {
                $: () => c,
                X: () => r
            });
            var a = t(26674),
                i = t(74611),
                s = t(5915),
                o = t(5602);

            function r(e, n, t, r = (0, s.Bk)()) {
                const c = r && (0, s.zU)(r);
                c && (a.T && o.vF.log(`[Measurement] Setting measurement on root span: ${e} = ${n} ${t}`), c.addEvent(e, {
                    [i.xc]: n,
                    [i.Sn]: t
                }))
            }

            function c(e) {
                if (!e || 0 === e.length) return;
                const n = {};
                return e.forEach((e => {
                    const t = e.attributes || {},
                        a = t[i.Sn],
                        s = t[i.xc];
                    "string" == typeof a && "number" == typeof s && (n[e.name] = {
                        value: s,
                        unit: a
                    })
                })), n
            }
        },
        22134: (e, n, t) => {
            t.d(n, {
                U: () => r,
                z: () => o
            });
            var a = t(26674),
                i = t(5915),
                s = t(5602);

            function o(e) {
                if (!a.T) return;
                const {
                    description: n = "< unknown name >",
                    op: t = "< unknown op >",
                    parent_span_id: o
                } = (0, i.et)(e), {
                    spanId: r
                } = e.spanContext(), c = (0, i.pK)(e), p = (0, i.zU)(e), d = p === e, l = `[Tracing] Starting ${c?"sampled":"unsampled"} ${d?"root ":""}span`, f = [`op: ${t}`, `name: ${n}`, `ID: ${r}`];
                if (o && f.push(`parent ID: ${o}`), !d) {
                    const {
                        op: e,
                        description: n
                    } = (0, i.et)(p);
                    f.push(`root ID: ${p.spanContext().spanId}`), e && f.push(`root op: ${e}`), n && f.push(`root description: ${n}`)
                }
                s.vF.log(`${l}\n  ${f.join("\n  ")}`)
            }

            function r(e) {
                if (!a.T) return;
                const {
                    description: n = "< unknown name >",
                    op: t = "< unknown op >"
                } = (0, i.et)(e), {
                    spanId: o
                } = e.spanContext(), r = `[Tracing] Finishing "${t}" ${(0,i.zU)(e)===e?"root ":""}span "${n}" with ID ${o}`;
                s.vF.log(r)
            }
        },
        31039: (e, n, t) => {
            t.d(n, {
                C: () => g,
                D: () => S
            });
            var a = t(57968),
                i = t(26674),
                s = t(74611),
                o = t(54704),
                r = t(70333),
                c = t(5915),
                p = t(5602),
                d = t(90519),
                l = t(31158),
                f = t(33868),
                u = t(91135),
                m = t(82558);
            const g = {
                    idleTimeout: 1e3,
                    finalTimeout: 3e4,
                    childSpanTimeout: 15e3
                },
                T = "heartbeatFailed",
                y = "idleTimeout",
                b = "finalTimeout",
                h = "externalFinish";

            function S(e, n = {}) {
                const t = new Map;
                let S, _ = !1,
                    v = h,
                    D = !n.disableAutoFinish;
                const $ = [],
                    {
                        idleTimeout: w = g.idleTimeout,
                        finalTimeout: x = g.finalTimeout,
                        childSpanTimeout: F = g.childSpanTimeout,
                        beforeSpanEnd: I
                    } = n,
                    E = (0, a.KU)();
                if (!E || !(0, o.f)()) {
                    const e = new f.w,
                        n = {
                            sample_rate: "0",
                            sampled: "false",
                            ...(0, l.k1)(e)
                        };
                    return (0, l.LZ)(e, n), e
                }
                const C = (0, a.o5)(),
                    k = (0, c.Bk)(),
                    z = function(e) {
                        const n = (0, m.Uk)(e);
                        return (0, r.r)((0, a.o5)(), n), i.T && p.vF.log("[Tracing] Started span is an idle span"), n
                    }(e);

                function O() {
                    S && (clearTimeout(S), S = void 0)
                }

                function A(e) {
                    O(), S = setTimeout((() => {
                        !_ && 0 === t.size && D && (v = y, z.end(e))
                    }), w)
                }

                function R(e) {
                    S = setTimeout((() => {
                        !_ && D && (v = T, z.end(e))
                    }), F)
                }

                function U(e) {
                    _ = !0, t.clear(), $.forEach((e => e())), (0, r.r)(C, k);
                    const n = (0, c.et)(z),
                        {
                            start_timestamp: a
                        } = n;
                    if (!a) return;
                    n.data[s.fs] || z.setAttribute(s.fs, v), p.vF.log(`[Tracing] Idle span "${n.op}" finished`);
                    const o = (0, c.xO)(z).filter((e => e !== z));
                    let d = 0;
                    o.forEach((n => {
                        n.isRecording() && (n.setStatus({
                            code: u.TJ,
                            message: "cancelled"
                        }), n.end(e), i.T && p.vF.log("[Tracing] Cancelling span since span ended early", JSON.stringify(n, void 0, 2)));
                        const t = (0, c.et)(n),
                            {
                                timestamp: a = 0,
                                start_timestamp: s = 0
                            } = t,
                            o = s <= e,
                            r = a - s <= (x + w) / 1e3;
                        if (i.T) {
                            const e = JSON.stringify(n, void 0, 2);
                            o ? r || p.vF.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : p.vF.log("[Tracing] Discarding span since it happened after idle span was finished", e)
                        }
                        r && o || ((0, c.VS)(z, n), d++)
                    })), d > 0 && z.setAttribute("sentry.idle_span_discarded_spans", d)
                }
                return z.end = new Proxy(z.end, {
                    apply(e, n, t) {
                        if (I && I(z), n instanceof f.w) return;
                        const [a, ...i] = t, s = a || (0, d.zf)(), o = (0, c.cI)(s), r = (0, c.xO)(z).filter((e => e !== z));
                        if (!r.length) return U(o), Reflect.apply(e, n, [o, ...i]);
                        const p = r.map((e => (0, c.et)(e).timestamp)).filter((e => !!e)),
                            l = p.length ? Math.max(...p) : void 0,
                            u = (0, c.et)(z).start_timestamp,
                            m = Math.min(u ? u + x / 1e3 : 1 / 0, Math.max(u || -1 / 0, Math.min(o, l || 1 / 0)));
                        return U(m), Reflect.apply(e, n, [m, ...i])
                    }
                }), $.push(E.on("spanStart", (e => {
                    if (_ || e === z || (0, c.et)(e).timestamp) return;
                    var n;
                    (0, c.xO)(z).includes(e) && (n = e.spanContext().spanId, O(), t.set(n, !0), R((0, d.zf)() + F / 1e3))
                }))), $.push(E.on("spanEnd", (e => {
                    var n;
                    _ || (n = e.spanContext().spanId, t.has(n) && t.delete(n), 0 === t.size && A((0, d.zf)() + w / 1e3))
                }))), $.push(E.on("idleSpanEnableAutoFinish", (e => {
                    e === z && (D = !0, A(), t.size && R())
                }))), n.disableAutoFinish || A(), setTimeout((() => {
                    _ || (z.setStatus({
                        code: u.TJ,
                        message: "deadline_exceeded"
                    }), v = b, z.end())
                }), x), z
            }
        },
        31158: (e, n, t) => {
            t.d(n, {
                LZ: () => f,
                ao: () => m,
                k1: () => g
            });
            var a = t(7313),
                i = t(57968),
                s = t(74611),
                o = t(54704),
                r = t(5915),
                c = t(8922),
                p = t(40873),
                d = t(88728);
            const l = "_frozenDsc";

            function f(e, n) {
                const t = e;
                (0, p.my)(t, l, n)
            }

            function u(e, n) {
                const t = n.getOptions(),
                    {
                        publicKey: i
                    } = n.getDsn() || {},
                    s = {
                        environment: t.environment || a.U,
                        release: t.release,
                        public_key: i,
                        trace_id: e
                    };
                return n.emit("createDsc", s), s
            }

            function m(e, n) {
                const t = n.getPropagationContext();
                return t.dsc || u(t.traceId, e)
            }

            function g(e) {
                const n = (0, i.KU)();
                if (!n) return {};
                const t = (0, r.zU)(e),
                    a = (0, r.et)(t),
                    p = a.data,
                    f = t.spanContext().traceState,
                    m = f ? .get("sentry.sample_rate") ? ? p[s.sy];

                function g(e) {
                    return "number" != typeof m && "string" != typeof m || (e.sample_rate = `${m}`), e
                }
                const T = t[l];
                if (T) return g(T);
                const y = f ? .get("sentry.dsc"),
                    b = y && (0, c.yD)(y);
                if (b) return g(b);
                const h = u(e.spanContext().traceId, n),
                    S = p[s.i_],
                    _ = a.description;
                return "url" !== S && _ && (h.transaction = _), (0, o.f)() && (h.sampled = String((0, r.pK)(t)), h.sample_rand = f ? .get("sentry.sample_rand") ? ? (0, d.L)(t).scope ? .getPropagationContext().sampleRand.toString()), g(h), n.emit("createDsc", h, t), h
            }
        },
        62786: (e, n, t) => {
            t.d(n, {
                s: () => d
            });
            var a = t(26674),
                i = t(5915),
                s = t(17227),
                o = t(77587),
                r = t(5602),
                c = t(91135);
            let p = !1;

            function d() {
                p || (p = !0, (0, s.L)(l), (0, o.r)(l))
            }

            function l() {
                const e = (0, i.Bk)(),
                    n = e && (0, i.zU)(e);
                if (n) {
                    const e = "internal_error";
                    a.T && r.vF.log(`[Tracing] Root span: ${e} -> Global error occurred`), n.setStatus({
                        code: c.TJ,
                        message: e
                    })
                }
            }
            l.tag = "sentry_tracingErrorCallback"
        }
    }
]);
//# sourceMappingURL=client~vendors-0b1fb840~b81e3bdcce5cfdd1cfdd.js.map