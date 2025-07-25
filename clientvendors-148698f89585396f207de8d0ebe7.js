try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f33d161e-30ff-4f52-b149-16922b691da4", t._sentryDebugIdIdentifier = "sentry-dbid-f33d161e-30ff-4f52-b149-16922b691da4")
} catch (t) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3557], {
        33868: (t, e, n) => {
            n.d(e, {
                w: () => i
            });
            var s = n(5915),
                a = n(30243);
            class i {
                constructor(t = {}) {
                    this._traceId = t.traceId || (0, a.e)(), this._spanId = t.spanId || (0, a.Z)()
                }
                spanContext() {
                    return {
                        spanId: this._spanId,
                        traceId: this._traceId,
                        traceFlags: s.CC
                    }
                }
                end(t) {}
                setAttribute(t, e) {
                    return this
                }
                setAttributes(t) {
                    return this
                }
                setStatus(t) {
                    return this
                }
                updateName(t) {
                    return this
                }
                isRecording() {
                    return !1
                }
                addEvent(t, e, n) {
                    return this
                }
                addLink(t) {
                    return this
                }
                addLinks(t) {
                    return this
                }
                recordException(t, e) {}
            }
        },
        82558: (t, e, n) => {
            n.d(e, {
                Uk: () => w,
                hb: () => A
            });
            var s = n(63793),
                a = n(95200),
                i = n(57968),
                r = n(26674),
                o = n(74611),
                d = n(54704),
                c = n(91773),
                p = n(70333),
                u = n(5915),
                _ = n(5602),
                h = n(31158),
                m = n(22134),
                l = n(3572),
                f = n(33868),
                S = n(75330),
                g = n(30243),
                b = n(90519),
                I = n(5109),
                T = n(88728);
            class v {
                constructor(t = {}) {
                    this._traceId = t.traceId || (0, g.e)(), this._spanId = t.spanId || (0, g.Z)(), this._startTime = t.startTimestamp || (0, b.zf)(), this._links = t.links, this._attributes = {}, this.setAttributes({
                        [o.JD]: "manual",
                        [o.uT]: t.op,
                        ...t.attributes
                    }), this._name = t.name, t.parentSpanId && (this._parentSpanId = t.parentSpanId), "sampled" in t && (this._sampled = t.sampled), t.endTimestamp && (this._endTime = t.endTimestamp), this._events = [], this._isStandaloneSpan = t.isStandalone, this._endTime && this._onSpanEnded()
                }
                addLink(t) {
                    return this._links ? this._links.push(t) : this._links = [t], this
                }
                addLinks(t) {
                    return this._links ? this._links.push(...t) : this._links = t, this
                }
                recordException(t, e) {}
                spanContext() {
                    const {
                        _spanId: t,
                        _traceId: e,
                        _sampled: n
                    } = this;
                    return {
                        spanId: t,
                        traceId: e,
                        traceFlags: n ? u.aO : u.CC
                    }
                }
                setAttribute(t, e) {
                    return void 0 === e ? delete this._attributes[t] : this._attributes[t] = e, this
                }
                setAttributes(t) {
                    return Object.keys(t).forEach((e => this.setAttribute(e, t[e]))), this
                }
                updateStartTime(t) {
                    this._startTime = (0, u.cI)(t)
                }
                setStatus(t) {
                    return this._status = t, this
                }
                updateName(t) {
                    return this._name = t, this.setAttribute(o.i_, "custom"), this
                }
                end(t) {
                    this._endTime || (this._endTime = (0, u.cI)(t), (0, m.U)(this), this._onSpanEnded())
                }
                getSpanJSON() {
                    return {
                        data: this._attributes,
                        description: this._name,
                        op: this._attributes[o.uT],
                        parent_span_id: this._parentSpanId,
                        span_id: this._spanId,
                        start_timestamp: this._startTime,
                        status: (0, u.yW)(this._status),
                        timestamp: this._endTime,
                        trace_id: this._traceId,
                        origin: this._attributes[o.JD],
                        profile_id: this._attributes[o.E1],
                        exclusive_time: this._attributes[o.jG],
                        measurements: (0, I.$)(this._events),
                        is_segment: this._isStandaloneSpan && (0, u.zU)(this) === this || void 0,
                        segment_id: this._isStandaloneSpan ? (0, u.zU)(this).spanContext().spanId : void 0,
                        links: (0, u.uU)(this._links)
                    }
                }
                isRecording() {
                    return !this._endTime && !!this._sampled
                }
                addEvent(t, e, n) {
                    r.T && _.vF.log("[Tracing] Adding an event to span:", t);
                    const s = y(e) ? e : n || (0, b.zf)(),
                        a = y(e) ? {} : e || {},
                        i = {
                            name: t,
                            time: (0, u.cI)(s),
                            attributes: a
                        };
                    return this._events.push(i), this
                }
                isStandaloneSpan() {
                    return !!this._isStandaloneSpan
                }
                _onSpanEnded() {
                    const t = (0, i.KU)();
                    t && t.emit("spanEnd", this);
                    if (!(this._isStandaloneSpan || this === (0, u.zU)(this))) return;
                    if (this._isStandaloneSpan) return void(this._sampled ? function(t) {
                        const e = (0, i.KU)();
                        if (!e) return;
                        const n = t[1];
                        if (!n || 0 === n.length) return void e.recordDroppedEvent("before_send", "span");
                        e.sendEnvelope(t)
                    }((0, S.lu)([this], t)) : (r.T && _.vF.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."), t && t.recordDroppedEvent("sample_rate", "span")));
                    const e = this._convertSpanToTransaction();
                    if (e) {
                        ((0, T.L)(this).scope || (0, i.o5)()).captureEvent(e)
                    }
                }
                _convertSpanToTransaction() {
                    if (!E((0, u.et)(this))) return;
                    this._name || (r.T && _.vF.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>");
                    const {
                        scope: t,
                        isolationScope: e
                    } = (0, T.L)(this);
                    if (!0 !== this._sampled) return;
                    const n = (0, u.xO)(this).filter((t => t !== this && ! function(t) {
                            return t instanceof v && t.isStandaloneSpan()
                        }(t))).map((t => (0, u.et)(t))).filter(E),
                        s = this._attributes[o.i_];
                    delete this._attributes[o.Le], n.forEach((t => {
                        delete t.data[o.Le]
                    }));
                    const a = {
                            contexts: {
                                trace: (0, u.Ck)(this)
                            },
                            spans: n.length > 1e3 ? n.sort(((t, e) => t.start_timestamp - e.start_timestamp)).slice(0, 1e3) : n,
                            start_timestamp: this._startTime,
                            timestamp: this._endTime,
                            transaction: this._name,
                            type: "transaction",
                            sdkProcessingMetadata: {
                                capturedSpanScope: t,
                                capturedSpanIsolationScope: e,
                                dynamicSamplingContext: (0, h.k1)(this)
                            },
                            ...s && {
                                transaction_info: {
                                    source: s
                                }
                            }
                        },
                        i = (0, I.$)(this._events);
                    return i && Object.keys(i).length && (r.T && _.vF.log("[Measurements] Adding measurements to transaction event", JSON.stringify(i, void 0, 2)), a.measurements = i), a
                }
            }

            function y(t) {
                return t && "number" == typeof t || t instanceof Date || Array.isArray(t)
            }

            function E(t) {
                return !!(t.start_timestamp && t.timestamp && t.span_id && t.trace_id)
            }
            const k = "__SENTRY_SUPPRESS_TRACING__";

            function w(t) {
                const e = x();
                if (e.startInactiveSpan) return e.startInactiveSpan(t);
                const n = L(t),
                    {
                        forceTransaction: s,
                        parentSpan: a
                    } = t;
                return (t.scope ? e => (0, i.v4)(t.scope, e) : void 0 !== a ? t => A(a, t) : t => t())((() => {
                    const e = (0, i.o5)(),
                        a = U(e);
                    return t.onlyIfParent && !a ? new f.w : D({
                        parentSpan: a,
                        spanArguments: n,
                        forceTransaction: s,
                        scope: e
                    })
                }))
            }

            function A(t, e) {
                const n = x();
                return n.withActiveSpan ? n.withActiveSpan(t, e) : (0, i.v4)((n => ((0, p.r)(n, t || void 0), e(n))))
            }

            function D({
                parentSpan: t,
                spanArguments: e,
                forceTransaction: n,
                scope: s
            }) {
                if (!(0, d.f)()) {
                    const s = new f.w;
                    if (n || !t) {
                        const t = {
                            sampled: "false",
                            sample_rate: "0",
                            transaction: e.name,
                            ...(0, h.k1)(s)
                        };
                        (0, h.LZ)(s, t)
                    }
                    return s
                }
                const a = (0, i.rm)();
                let r;
                if (t && !n) r = function(t, e, n) {
                    const {
                        spanId: s,
                        traceId: a
                    } = t.spanContext(), r = !e.getScopeData().sdkProcessingMetadata[k] && (0, u.pK)(t), o = r ? new v({ ...n,
                        parentSpanId: s,
                        traceId: a,
                        sampled: r
                    }) : new f.w({
                        traceId: a
                    });
                    (0, u.Hu)(t, o);
                    const d = (0, i.KU)();
                    d && (d.emit("spanStart", o), n.endTimestamp && d.emit("spanEnd", o));
                    return o
                }(t, s, e), (0, u.Hu)(t, r);
                else if (t) {
                    const n = (0, h.k1)(t),
                        {
                            traceId: a,
                            spanId: i
                        } = t.spanContext(),
                        o = (0, u.pK)(t);
                    r = C({
                        traceId: a,
                        parentSpanId: i,
                        ...e
                    }, s, o), (0, h.LZ)(r, n)
                } else {
                    const {
                        traceId: t,
                        dsc: n,
                        parentSpanId: i,
                        sampled: o
                    } = { ...a.getPropagationContext(),
                        ...s.getPropagationContext()
                    };
                    r = C({
                        traceId: t,
                        parentSpanId: i,
                        ...e
                    }, s, o), n && (0, h.LZ)(r, n)
                }
                return (0, m.z)(r), (0, T.d)(r, s, a), r
            }

            function L(t) {
                const e = {
                    isStandalone: (t.experimental || {}).standalone,
                    ...t
                };
                if (t.startTime) {
                    const n = { ...e
                    };
                    return n.startTimestamp = (0, u.cI)(t.startTime), delete n.startTime, n
                }
                return e
            }

            function x() {
                const t = (0, a.EU)();
                return (0, s.h)(t)
            }

            function C(t, e, n) {
                const s = (0, i.KU)(),
                    a = s ? .getOptions() || {},
                    {
                        name: d = "",
                        attributes: p
                    } = t,
                    u = e.getPropagationContext(),
                    [h, m, f] = e.getScopeData().sdkProcessingMetadata[k] ? [!1] : (0, l.Z)(a, {
                        name: d,
                        parentSampled: n,
                        attributes: p,
                        parentSampleRate: (0, c.i)(u.dsc ? .sample_rate)
                    }, u.sampleRand),
                    S = new v({ ...t,
                        attributes: {
                            [o.i_]: "custom",
                            [o.sy]: void 0 !== m && f ? m : void 0,
                            ...t.attributes
                        },
                        sampled: h
                    });
                return !h && s && (r.T && _.vF.log("[Tracing] Discarding root span because its trace was not chosen to be sampled."), s.recordDroppedEvent("sample_rate", "transaction")), s && s.emit("spanStart", S), S
            }

            function U(t) {
                const e = (0, p.f)(t);
                if (!e) return;
                const n = (0, i.KU)();
                return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, u.zU)(e) : e
            }
        },
        88728: (t, e, n) => {
            n.d(e, {
                L: () => o,
                d: () => r
            });
            var s = n(40873);
            const a = "_sentryScope",
                i = "_sentryIsolationScope";

            function r(t, e, n) {
                t && ((0, s.my)(t, i, n), (0, s.my)(t, a, e))
            }

            function o(t) {
                return {
                    scope: t[a],
                    isolationScope: t[i]
                }
            }
        },
        91135: (t, e, n) => {
            n.d(e, {
                F3: () => a,
                N8: () => r,
                TJ: () => i,
                a3: () => s
            });
            const s = 0,
                a = 1,
                i = 2;

            function r(t, e) {
                t.setAttribute("http.response.status_code", e);
                const n = function(t) {
                    if (t < 400 && t >= 100) return {
                        code: a
                    };
                    if (t >= 400 && t < 500) switch (t) {
                        case 401:
                            return {
                                code: i,
                                message: "unauthenticated"
                            };
                        case 403:
                            return {
                                code: i,
                                message: "permission_denied"
                            };
                        case 404:
                            return {
                                code: i,
                                message: "not_found"
                            };
                        case 409:
                            return {
                                code: i,
                                message: "already_exists"
                            };
                        case 413:
                            return {
                                code: i,
                                message: "failed_precondition"
                            };
                        case 429:
                            return {
                                code: i,
                                message: "resource_exhausted"
                            };
                        case 499:
                            return {
                                code: i,
                                message: "cancelled"
                            };
                        default:
                            return {
                                code: i,
                                message: "invalid_argument"
                            }
                    }
                    if (t >= 500 && t < 600) switch (t) {
                        case 501:
                            return {
                                code: i,
                                message: "unimplemented"
                            };
                        case 503:
                            return {
                                code: i,
                                message: "unavailable"
                            };
                        case 504:
                            return {
                                code: i,
                                message: "deadline_exceeded"
                            };
                        default:
                            return {
                                code: i,
                                message: "internal_error"
                            }
                    }
                    return {
                        code: i,
                        message: "unknown_error"
                    }
                }(e);
                "unknown_error" !== n.message && t.setStatus(n)
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-148698f8~9585396f207de8d0ebe7.js.map