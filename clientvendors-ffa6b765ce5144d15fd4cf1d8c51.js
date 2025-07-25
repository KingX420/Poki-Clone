try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "abe70aa4-7b5d-48c2-94e4-090290708324", e._sentryDebugIdIdentifier = "sentry-dbid-abe70aa4-7b5d-48c2-94e4-090290708324")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9646], {
        62325: (e, t, n) => {
            n.d(t, {
                dp: () => X
            });
            var r = n(31039),
                a = n(5602),
                o = n(62786),
                s = n(92575),
                i = n(74611),
                c = n(57968),
                d = n(5915),
                u = n(31158),
                p = n(87320),
                f = n(30243),
                l = n(8190),
                m = n(90519),
                h = n(40873),
                g = n(83440),
                _ = n(844),
                b = n(85761),
                y = n(49431),
                v = n(90452),
                T = n(91135);
            const S = "sentry_previous_trace";

            function x(e, t) {
                const n = (0, d.et)(t);
                if (!e) return {
                    spanContext: t.spanContext(),
                    startTimestamp: n.start_timestamp
                };
                const r = e.spanContext;
                return r.traceId === n.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (y.T && a.vF.info(`Adding previous_trace ${r} link to span ${{op:n.op,...t.spanContext()}}`), t.addLink({
                    context: r,
                    attributes: {
                        [i.Lc]: "previous_trace"
                    }
                }), t.setAttribute("sentry.previous_trace", `${r.traceId}-${r.spanId}-${1===r.traceFlags?1:0}`)), {
                    spanContext: t.spanContext(),
                    startTimestamp: (0, d.et)(t).start_timestamp
                })
            }
            var w = n(66220),
                k = n(76996),
                E = n(51669),
                P = n(2323),
                F = n(54704),
                q = n(82558),
                L = n(33868),
                R = n(18843),
                C = n(35947),
                D = n(56388),
                A = n(78084);
            const I = new WeakMap,
                O = new Map,
                $ = {
                    traceFetch: !0,
                    traceXHR: !0,
                    enableHTTPTimings: !0,
                    trackFetchStreamPerformance: !1
                };

            function N(e, t) {
                const {
                    traceFetch: n,
                    traceXHR: r,
                    trackFetchStreamPerformance: a,
                    shouldCreateSpanForRequest: o,
                    enableHTTPTimings: s,
                    tracePropagationTargets: u,
                    onRequestSpanStart: f
                } = { ...$,
                    ...t
                }, l = "function" == typeof o ? o : e => !0, m = e => function(e, t) {
                    const n = (0, p.$N)();
                    if (n) {
                        let r, a;
                        try {
                            r = new URL(e, n), a = new URL(n).origin
                        } catch (e) {
                            return !1
                        }
                        const o = r.origin === a;
                        return t ? (0, P.Xr)(r.toString(), t) || o && (0, P.Xr)(r.pathname, t) : o
                    } {
                        const n = !!e.match(/^\/(?!\/)/);
                        return t ? (0, P.Xr)(e, t) : n
                    }
                }(e, u), h = {};
                n && (e.addEventProcessor((e => ("transaction" === e.type && e.spans && e.spans.forEach((e => {
                    if ("http.client" === e.op) {
                        const t = O.get(e.span_id);
                        t && (e.timestamp = t / 1e3, O.delete(e.span_id))
                    }
                })), e))), a && (0, w.B$)((e => {
                    if (e.response) {
                        const t = I.get(e.response);
                        t && e.endTimestamp && O.set(t, e.endTimestamp)
                    }
                })), (0, w.ur)((e => {
                    const t = (0, k.v)(e, l, m, h);
                    if (e.response && e.fetchData.__span && I.set(e.response, e.fetchData.__span), t) {
                        const n = U(e.fetchData.url),
                            r = n ? (0, E.Dl)(n).host : void 0;
                        t.setAttributes({
                            "http.url": n,
                            "server.address": r
                        }), s && j(t), f ? .(t, {
                            headers: e.headers
                        })
                    }
                }))), r && (0, C.Mn)((e => {
                    const t = function(e, t, n, r) {
                        const a = e.xhr,
                            o = a ? .[C.Er];
                        if (!a || a.__sentry_own_request__ || !o) return;
                        const {
                            url: s,
                            method: u
                        } = o, p = (0, F.f)() && t(s);
                        if (e.endTimestamp && p) {
                            const e = a.__sentry_xhr_span_id__;
                            if (!e) return;
                            const t = r[e];
                            return void(t && void 0 !== o.status_code && ((0, T.N8)(t, o.status_code), t.end(), delete r[e]))
                        }
                        const f = U(s),
                            l = f ? (0, E.Dl)(f) : (0, E.Dl)(s),
                            m = (0, E.f)(s),
                            h = !!(0, d.Bk)(),
                            g = p && h ? (0, q.Uk)({
                                name: `${u} ${m}`,
                                attributes: {
                                    url: s,
                                    type: "xhr",
                                    "http.method": u,
                                    "http.url": f,
                                    "server.address": l ? .host,
                                    [i.JD]: "auto.http.browser",
                                    [i.uT]: "http.client",
                                    ...l ? .search && {
                                        "http.query": l ? .search
                                    },
                                    ...l ? .hash && {
                                        "http.fragment": l ? .hash
                                    }
                                }
                            }) : new L.w;
                        a.__sentry_xhr_span_id__ = g.spanContext().spanId, r[a.__sentry_xhr_span_id__] = g, n(s) && function(e, t) {
                            const {
                                "sentry-trace": n,
                                baggage: r
                            } = (0, R.i)({
                                span: t
                            });
                            n && function(e, t, n) {
                                try {
                                    e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader("baggage", n)
                                } catch (e) {}
                            }(e, n, r)
                        }(a, (0, F.f)() && h ? g : void 0);
                        const _ = (0, c.KU)();
                        _ && _.emit("beforeOutgoingRequestSpan", g, e);
                        return g
                    }(e, l, m, h);
                    if (t) {
                        let n;
                        s && j(t);
                        try {
                            n = new Headers(e.xhr.__sentry_xhr_v3__ ? .request_headers)
                        } catch {}
                        f ? .(t, {
                            headers: n
                        })
                    }
                }))
            }

            function j(e) {
                const {
                    url: t
                } = (0, d.et)(e).data;
                if (!t || "string" != typeof t) return;
                const n = (0, D.wv)("resource", (({
                    entries: r
                }) => {
                    r.forEach((r => {
                        if (function(e) {
                                return "resource" === e.entryType && "initiatorType" in e && "string" == typeof e.nextHopProtocol && ("fetch" === e.initiatorType || "xmlhttprequest" === e.initiatorType)
                            }(r) && r.name.endsWith(t)) {
                            (function(e) {
                                const {
                                    name: t,
                                    version: n
                                } = (0, A.Ep)(e.nextHopProtocol), r = [];
                                if (r.push(["network.protocol.version", n], ["network.protocol.name", t]), !(0, m.k3)()) return r;
                                return [...r, ["http.request.redirect_start", H(e.redirectStart)],
                                    ["http.request.fetch_start", H(e.fetchStart)],
                                    ["http.request.domain_lookup_start", H(e.domainLookupStart)],
                                    ["http.request.domain_lookup_end", H(e.domainLookupEnd)],
                                    ["http.request.connect_start", H(e.connectStart)],
                                    ["http.request.secure_connection_start", H(e.secureConnectionStart)],
                                    ["http.request.connection_end", H(e.connectEnd)],
                                    ["http.request.request_start", H(e.requestStart)],
                                    ["http.request.response_start", H(e.responseStart)],
                                    ["http.request.response_end", H(e.responseEnd)]
                                ]
                            })(r).forEach((t => e.setAttribute(...t))), setTimeout(n)
                        }
                    }))
                }))
            }

            function H(e = 0) {
                return (((0, m.k3)() || performance.timeOrigin) + e) / 1e3
            }

            function U(e) {
                try {
                    return new URL(e, v.jf.location.origin).href
                } catch {
                    return
                }
            }
            const B = { ...r.C,
                instrumentNavigation: !0,
                instrumentPageLoad: !0,
                markBackgroundSpan: !0,
                enableLongTask: !0,
                enableLongAnimationFrame: !0,
                enableInp: !0,
                linkPreviousTrace: "in-memory",
                _experiments: {},
                ...$
            };
            let M = !1;
            const X = (e = {}) => {
                M && (0, a.pq)((() => {
                    console.warn("Multiple browserTracingIntegration instances are not supported.")
                })), M = !0;
                const t = v.jf.document;
                (0, o.s)();
                const {
                    enableInp: n,
                    enableLongTask: h,
                    enableLongAnimationFrame: w,
                    _experiments: {
                        enableInteractions: k,
                        enableStandaloneClsSpans: E
                    },
                    beforeStartSpan: P,
                    idleTimeout: F,
                    finalTimeout: q,
                    childSpanTimeout: L,
                    markBackgroundSpan: R,
                    traceFetch: C,
                    traceXHR: D,
                    trackFetchStreamPerformance: A,
                    shouldCreateSpanForRequest: I,
                    enableHTTPTimings: O,
                    instrumentPageLoad: $,
                    instrumentNavigation: j,
                    linkPreviousTrace: H,
                    onRequestSpanStart: U
                } = { ...B,
                    ...e
                }, X = (0, g.bk)({
                    recordClsStandaloneSpans: E || !1
                });
                n && (0, _.Z)(), w && s.O.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? (0, g.U$)() : h && (0, g.c8)(), k && (0, g.DI)();
                const K = {
                    name: void 0,
                    source: void 0
                };

                function W(e, n) {
                    const a = "pageload" === n.op,
                        o = P ? P(n) : n,
                        s = o.attributes || {};
                    n.name !== o.name && (s[i.i_] = "custom", o.attributes = s), K.name = o.name, K.source = s[i.i_];
                    const p = (0, r.D)(o, {
                        idleTimeout: F,
                        finalTimeout: q,
                        childSpanTimeout: L,
                        disableAutoFinish: a,
                        beforeSpanEnd: t => {
                            X(), (0, g.QU)(t, {
                                recordClsOnPageloadSpan: !E
                            }), Y(e, void 0);
                            const n = (0, c.o5)(),
                                r = n.getPropagationContext();
                            n.setPropagationContext({ ...r,
                                traceId: p.spanContext().traceId,
                                sampled: (0, d.pK)(p),
                                dsc: (0, u.k1)(t)
                            })
                        }
                    });

                    function f() {
                        t && ["interactive", "complete"].includes(t.readyState) && e.emit("idleSpanEnableAutoFinish", p)
                    }
                    Y(e, p), a && t && (t.addEventListener("readystatechange", (() => {
                        f()
                    })), f())
                }
                return {
                    name: "BrowserTracing",
                    afterAllSetup(e) {
                        let t = (0, p.$N)();

                        function o() {
                            const t = z(e);
                            t && !(0, d.et)(t).timestamp && (y.T && a.vF.log(`[Tracing] Finishing current active span with op: ${(0,d.et)(t).op}`), t.end())
                        }
                        if (e.on("startNavigationSpan", (t => {
                                (0, c.KU)() === e && (o(), (0, c.rm)().setPropagationContext({
                                    traceId: (0, f.e)(),
                                    sampleRand: Math.random()
                                }), (0, c.o5)().setPropagationContext({
                                    traceId: (0, f.e)(),
                                    sampleRand: Math.random()
                                }), W(e, {
                                    op: "navigation",
                                    ...t
                                }))
                            })), e.on("startPageLoadSpan", ((t, n = {}) => {
                                if ((0, c.KU)() !== e) return;
                                o();
                                const r = n.sentryTrace || J("sentry-trace"),
                                    a = n.baggage || J("baggage"),
                                    s = (0, l.kM)(r, a);
                                (0, c.o5)().setPropagationContext(s), W(e, {
                                    op: "pageload",
                                    ...t
                                })
                            })), "off" !== H) {
                            let t;
                            e.on("spanStart", (e => {
                                if ((0, d.zU)(e) === e)
                                    if ("session-storage" === H) {
                                        ! function(e) {
                                            try {
                                                v.jf.sessionStorage.setItem(S, JSON.stringify(e))
                                            } catch (e) {
                                                y.T && a.vF.warn("Could not store previous trace in sessionStorage", e)
                                            }
                                        }(x(function() {
                                            try {
                                                const e = v.jf.sessionStorage ? .getItem(S);
                                                return JSON.parse(e)
                                            } catch (e) {
                                                return
                                            }
                                        }(), e))
                                    } else t = x(t, e)
                            }))
                        }
                        if (v.jf.location) {
                            if ($) {
                                const t = (0, m.k3)();
                                ! function(e, t, n) {
                                    e.emit("startPageLoadSpan", t, n), (0, c.o5)().setTransactionName(t.name), z(e)
                                }(e, {
                                    name: v.jf.location.pathname,
                                    startTime: t ? t / 1e3 : void 0,
                                    attributes: {
                                        [i.i_]: "url",
                                        [i.JD]: "auto.pageload.browser"
                                    }
                                })
                            }
                            j && (0, b._)((({
                                to: n,
                                from: r
                            }) => {
                                void 0 !== r || -1 === t ? .indexOf(n) ? r !== n && (t = void 0, function(e, t) {
                                    e.emit("startNavigationSpan", t), (0, c.o5)().setTransactionName(t.name), z(e)
                                }(e, {
                                    name: v.jf.location.pathname,
                                    attributes: {
                                        [i.i_]: "url",
                                        [i.JD]: "auto.navigation.browser"
                                    }
                                })) : t = void 0
                            }))
                        }
                        R && (v.jf.document ? v.jf.document.addEventListener("visibilitychange", (() => {
                            const e = (0, d.Bk)();
                            if (!e) return;
                            const t = (0, d.zU)(e);
                            if (v.jf.document.hidden && t) {
                                const e = "cancelled",
                                    {
                                        op: n,
                                        status: r
                                    } = (0, d.et)(t);
                                y.T && a.vF.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), r || t.setStatus({
                                    code: T.TJ,
                                    message: e
                                }), t.setAttribute("sentry.cancellation_reason", "document.hidden"), t.end()
                            }
                        })) : y.T && a.vF.warn("[Tracing] Could not set up background tab detection due to lack of global document")), k && function(e, t, n, o, s) {
                            const c = v.jf.document;
                            let u;
                            const p = () => {
                                const c = "ui.action.click",
                                    p = z(e);
                                if (p) {
                                    const e = (0, d.et)(p).op;
                                    if (["navigation", "pageload"].includes(e)) return void(y.T && a.vF.warn(`[Tracing] Did not create ${c} span because a pageload or navigation span is in progress.`))
                                }
                                u && (u.setAttribute(i.fs, "interactionInterrupted"), u.end(), u = void 0), s.name ? u = (0, r.D)({
                                    name: s.name,
                                    op: c,
                                    attributes: {
                                        [i.i_]: s.source || "url"
                                    }
                                }, {
                                    idleTimeout: t,
                                    finalTimeout: n,
                                    childSpanTimeout: o
                                }) : y.T && a.vF.warn(`[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`)
                            };
                            c && addEventListener("click", p, {
                                once: !1,
                                capture: !0
                            })
                        }(e, F, q, L, K), n && (0, _.B)(), N(e, {
                            traceFetch: C,
                            traceXHR: D,
                            trackFetchStreamPerformance: A,
                            tracePropagationTargets: e.getOptions().tracePropagationTargets,
                            shouldCreateSpanForRequest: I,
                            enableHTTPTimings: O,
                            onRequestSpanStart: U
                        })
                    }
                }
            };

            function J(e) {
                const t = v.jf.document,
                    n = t ? .querySelector(`meta[name=${e}]`);
                return n ? .getAttribute("content") || void 0
            }
            const K = "_sentry_idleSpan";

            function z(e) {
                return e[K]
            }

            function Y(e, t) {
                (0, h.my)(e, K, t)
            }
        },
        97221: (e, t, n) => {
            n.d(t, {
                Ts: () => I
            });
            var r = n(96279),
                a = n(32324),
                o = n(75083),
                s = n(87320),
                i = n(5602),
                c = n(98822),
                d = n(20527),
                u = n(68826),
                p = n(77468),
                f = n(60434),
                l = n(49431),
                m = n(90452),
                h = n(79695),
                g = n(82522),
                _ = n(43457),
                b = n(4283),
                y = n(79274),
                v = n(75715);

            function T(e, t, n, r) {
                const a = {
                    filename: e,
                    function: "<anonymous>" === t ? d.yF : t,
                    in_app: !0
                };
                return void 0 !== n && (a.lineno = n), void 0 !== r && (a.colno = r), a
            }
            const S = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
                x = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                w = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                k = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                E = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                P = [
                    [30, e => {
                        const t = S.exec(e);
                        if (t) {
                            const [, e, n, r] = t;
                            return T(e, d.yF, +n, +r)
                        }
                        const n = x.exec(e);
                        if (n) {
                            if (n[2] && 0 === n[2].indexOf("eval")) {
                                const e = w.exec(n[2]);
                                e && (n[2] = e[1], n[3] = e[2], n[4] = e[3])
                            }
                            const [e, t] = q(n[1] || d.yF, n[2]);
                            return T(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
                        }
                    }],
                    [50, e => {
                        const t = k.exec(e);
                        if (t) {
                            if (t[3] && t[3].indexOf(" > eval") > -1) {
                                const e = E.exec(t[3]);
                                e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "")
                            }
                            let e = t[3],
                                n = t[1] || d.yF;
                            return [n, e] = q(n, e), T(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                        }
                    }]
                ],
                F = (0, d.gd)(...P),
                q = (e, t) => {
                    const n = -1 !== e.indexOf("safari-extension"),
                        r = -1 !== e.indexOf("safari-web-extension");
                    return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : d.yF, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
                };
            var L = n(20572),
                R = n(28262),
                C = n(3594);

            function D(e, t = (0, C.qd)("fetch")) {
                let n = 0,
                    r = 0;
                return (0, R.o)(e, (function(a) {
                    const o = a.body.length;
                    n += o, r++;
                    const s = {
                        body: a.body,
                        method: "POST",
                        referrerPolicy: "strict-origin",
                        headers: e.headers,
                        keepalive: n <= 6e4 && r < 15,
                        ...e.fetchOptions
                    };
                    if (!t) return (0, C.y7)("fetch"), (0, L.xg)("No fetch implementation available");
                    try {
                        return t(e.url, s).then((e => (n -= o, r--, {
                            statusCode: e.status,
                            headers: {
                                "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": e.headers.get("Retry-After")
                            }
                        })))
                    } catch (e) {
                        return (0, C.y7)("fetch"), n -= o, r--, (0, L.xg)(e)
                    }
                }))
            }

            function A(e) {
                const t = {};
                for (const n of Object.getOwnPropertyNames(e)) {
                    const r = n;
                    void 0 !== e[r] && (t[r] = e[r])
                }
                return t
            }

            function I(e = {}) {
                const t = function(e = {}) {
                    return {
                        defaultIntegrations: [(0, r.D)(), (0, a.Z)(), (0, g.G)(), (0, h.F)(), (0, b.L)(), (0, v.p)(), (0, o.s)(), (0, y.M)(), (0, _.p)()],
                        release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : m.jf.SENTRY_RELEASE ? .id,
                        sendClientReports: !0,
                        ...A(e)
                    }
                }(e);
                if (!t.skipBrowserExtensionCheck && function() {
                        const e = void 0 !== m.jf.window && m.jf;
                        if (!e) return !1;
                        const t = e[e.chrome ? "chrome" : "browser"],
                            n = t ? .runtime ? .id,
                            r = (0, s.$N)() || "",
                            a = !!n && m.jf === m.jf.top && ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some((e => r.startsWith(`${e}//`))),
                            o = void 0 !== e.nw;
                        return !!n && !a && !o
                    }()) return void(l.T && (0, i.pq)((() => {
                    console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
                })));
                l.T && !(0, c.vm)() && i.vF.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.");
                const n = { ...t,
                    stackParser: (0, d.vk)(t.stackParser || F),
                    integrations: (0, u.mH)(t),
                    transport: t.transport || D
                };
                return (0, p.J)(f.y, n)
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-ffa6b765~ce5144d15fd4cf1d8c51.js.map