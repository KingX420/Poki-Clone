try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b7ccc0e0-227a-4980-9d5e-96767bcb0241", e._sentryDebugIdIdentifier = "sentry-dbid-b7ccc0e0-227a-4980-9d5e-96767bcb0241")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4672], {
        4283: (e, t, n) => {
            n.d(t, {
                L: () => h
            });
            var r = n(68826),
                o = n(17227),
                a = n(57968),
                s = n(64251),
                i = n(77587),
                c = n(30690),
                u = n(87320),
                l = n(20527),
                d = n(5602),
                f = n(49431),
                p = n(11738),
                m = n(90452);
            const h = (0, r._C)(((e = {}) => {
                const t = {
                    onerror: !0,
                    onunhandledrejection: !0,
                    ...e
                };
                return {
                    name: "GlobalHandlers",
                    setupOnce() {
                        Error.stackTraceLimit = 50
                    },
                    setup(e) {
                        t.onerror && (! function(e) {
                            (0, o.L)((t => {
                                const {
                                    stackParser: n,
                                    attachStacktrace: r
                                } = y();
                                if ((0, a.KU)() !== e || (0, m.jN)()) return;
                                const {
                                    msg: o,
                                    url: i,
                                    line: d,
                                    column: f,
                                    error: h
                                } = t, g = function(e, t, n, r) {
                                    const o = e.exception = e.exception || {},
                                        a = o.values = o.values || [],
                                        s = a[0] = a[0] || {},
                                        i = s.stacktrace = s.stacktrace || {},
                                        d = i.frames = i.frames || [],
                                        f = r,
                                        p = n,
                                        m = (0, c.Kg)(t) && t.length > 0 ? t : (0, u.$N)();
                                    0 === d.length && d.push({
                                        colno: f,
                                        filename: m,
                                        function: l.yF,
                                        in_app: !0,
                                        lineno: p
                                    });
                                    return e
                                }((0, p.H7)(n, h || o, void 0, r, !1), i, d, f);
                                g.level = "error", (0, s.r)(g, {
                                    originalException: h,
                                    mechanism: {
                                        handled: !1,
                                        type: "onerror"
                                    }
                                })
                            }))
                        }(e), g("onerror")), t.onunhandledrejection && (! function(e) {
                            (0, i.r)((t => {
                                const {
                                    stackParser: n,
                                    attachStacktrace: r
                                } = y();
                                if ((0, a.KU)() !== e || (0, m.jN)()) return;
                                const o = function(e) {
                                        if ((0, c.sO)(e)) return e;
                                        try {
                                            if ("reason" in e) return e.reason;
                                            if ("detail" in e && "reason" in e.detail) return e.detail.reason
                                        } catch {}
                                        return e
                                    }(t),
                                    i = (0, c.sO)(o) ? {
                                        exception: {
                                            values: [{
                                                type: "UnhandledRejection",
                                                value: `Non-Error promise rejection captured with value: ${String(o)}`
                                            }]
                                        }
                                    } : (0, p.H7)(n, o, void 0, r, !0);
                                i.level = "error", (0, s.r)(i, {
                                    originalException: o,
                                    mechanism: {
                                        handled: !1,
                                        type: "onunhandledrejection"
                                    }
                                })
                            }))
                        }(e), g("onunhandledrejection"))
                    }
                }
            }));

            function g(e) {
                f.T && d.vF.log(`Global Handler attached: ${e}`)
            }

            function y() {
                const e = (0, a.KU)();
                return e ? .getOptions() || {
                    stackParser: () => [],
                    attachStacktrace: !1
                }
            }
        },
        11738: (e, t, n) => {
            n.d(t, {
                H7: () => _,
                K8: () => u,
                qv: () => v,
                u: () => y
            });
            var r = n(57968),
                o = n(51071),
                a = n(30690),
                s = n(44910),
                i = n(20572),
                c = n(40873);

            function u(e, t) {
                const n = f(e, t),
                    r = {
                        type: h(t),
                        value: g(t)
                    };
                return n.length && (r.stacktrace = {
                    frames: n
                }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
            }

            function l(e, t, n, s) {
                const i = (0, r.KU)(),
                    c = i ? .getOptions().normalizeDepth,
                    l = function(e) {
                        for (const t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                const n = e[t];
                                if (n instanceof Error) return n
                            }
                        return
                    }(t),
                    d = {
                        __serialized__: (0, o.cd)(t, c)
                    };
                if (l) return {
                    exception: {
                        values: [u(e, l)]
                    },
                    extra: d
                };
                const p = {
                    exception: {
                        values: [{
                            type: (0, a.xH)(t) ? t.constructor.name : s ? "UnhandledRejection" : "Error",
                            value: E(t, {
                                isUnhandledRejection: s
                            })
                        }]
                    },
                    extra: d
                };
                if (n) {
                    const t = f(e, n);
                    t.length && (p.exception.values[0].stacktrace = {
                        frames: t
                    })
                }
                return p
            }

            function d(e, t) {
                return {
                    exception: {
                        values: [u(e, t)]
                    }
                }
            }

            function f(e, t) {
                const n = t.stacktrace || t.stack || "",
                    r = function(e) {
                        if (e && p.test(e.message)) return 1;
                        return 0
                    }(t),
                    o = function(e) {
                        if ("number" == typeof e.framesToPop) return e.framesToPop;
                        return 0
                    }(t);
                try {
                    return e(n, r, o)
                } catch (e) {}
                return []
            }
            const p = /Minified React error #\d+;/i;

            function m(e) {
                return "undefined" != typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception
            }

            function h(e) {
                const t = e ? .name;
                if (!t && m(e)) {
                    return e.message && Array.isArray(e.message) && 2 == e.message.length ? e.message[0] : "WebAssembly.Exception"
                }
                return t
            }

            function g(e) {
                const t = e ? .message;
                return m(e) ? Array.isArray(e.message) && 2 == e.message.length ? e.message[1] : "wasm exception" : t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
            }

            function y(e, t, n, r) {
                const o = _(e, t, n ? .syntheticException || void 0, r);
                return (0, s.M6)(o), o.level = "error", n ? .event_id && (o.event_id = n.event_id), (0, i.XW)(o)
            }

            function v(e, t, n = "info", r, o) {
                const a = b(e, t, r ? .syntheticException || void 0, o);
                return a.level = n, r ? .event_id && (a.event_id = r.event_id), (0, i.XW)(a)
            }

            function _(e, t, n, r, o) {
                let i;
                if ((0, a.T2)(t) && t.error) {
                    return d(e, t.error)
                }
                if ((0, a.BD)(t) || (0, a.W6)(t)) {
                    const o = t;
                    if ("stack" in t) i = d(e, t);
                    else {
                        const t = o.name || ((0, a.BD)(o) ? "DOMError" : "DOMException"),
                            c = o.message ? `${t}: ${o.message}` : t;
                        i = b(e, c, n, r), (0, s.gO)(i, c)
                    }
                    return "code" in o && (i.tags = { ...i.tags,
                        "DOMException.code": `${o.code}`
                    }), i
                }
                if ((0, a.bJ)(t)) return d(e, t);
                if ((0, a.Qd)(t) || (0, a.xH)(t)) {
                    return i = l(e, t, n, o), (0, s.M6)(i, {
                        synthetic: !0
                    }), i
                }
                return i = b(e, t, n, r), (0, s.gO)(i, `${t}`, void 0), (0, s.M6)(i, {
                    synthetic: !0
                }), i
            }

            function b(e, t, n, r) {
                const o = {};
                if (r && n) {
                    const r = f(e, n);
                    r.length && (o.exception = {
                        values: [{
                            value: t,
                            stacktrace: {
                                frames: r
                            }
                        }]
                    }), (0, s.M6)(o, {
                        synthetic: !0
                    })
                }
                if ((0, a.NF)(t)) {
                    const {
                        __sentry_template_string__: e,
                        __sentry_template_values__: n
                    } = t;
                    return o.logentry = {
                        message: e,
                        params: n
                    }, o
                }
                return o.message = t, o
            }

            function E(e, {
                isUnhandledRejection: t
            }) {
                const n = (0, c.HF)(e),
                    r = t ? "promise rejection" : "exception";
                if ((0, a.T2)(e)) return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                if ((0, a.xH)(e)) {
                    return `Event \`${function(e){try{const t=Object.getPrototypeOf(e);return t?t.constructor.name:void 0}catch(e){}}(e)}\` (type=${e.type}) captured as ${r}`
                }
                return `Object captured as ${r} with keys: ${n}`
            }
        },
        43457: (e, t, n) => {
            n.d(t, {
                p: () => u
            });
            var r = n(68826),
                o = n(5602),
                a = n(64251),
                s = n(85761),
                i = n(49431),
                c = n(90452);
            const u = (0, r._C)((() => ({
                name: "BrowserSession",
                setupOnce() {
                    void 0 !== c.jf.document ? ((0, a.J0)({
                        ignoreDuration: !0
                    }), (0, a.J5)(), (0, s._)((({
                        from: e,
                        to: t
                    }) => {
                        void 0 !== e && e !== t && ((0, a.J0)({
                            ignoreDuration: !0
                        }), (0, a.J5)())
                    }))) : i.T && o.vF.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.")
                }
            })))
        },
        49431: (e, t, n) => {
            n.d(t, {
                T: () => r
            });
            const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
        },
        60434: (e, t, n) => {
            n.d(t, {
                y: () => l
            });
            var r = n(649),
                o = n(91591),
                a = n(8251),
                s = n(87502),
                i = n(87489),
                c = n(11738),
                u = n(90452);
            class l extends r.Kj {
                constructor(e) {
                    const t = {
                            parentSpanIsAlwaysRootSpan: !0,
                            ...e
                        },
                        n = u.jf.SENTRY_SDK_SOURCE || (0, o.e)();
                    (0, a.K)(t, "browser", ["browser"], n), super(t);
                    const r = this,
                        {
                            sendDefaultPii: c,
                            _experiments: l
                        } = r._options,
                        d = l ? .enableLogs;
                    t.sendClientReports && u.jf.document && u.jf.document.addEventListener("visibilitychange", (() => {
                        "hidden" === u.jf.document.visibilityState && (this._flushOutcomes(), d && (0, s.lt)(r))
                    })), d && (r.on("flush", (() => {
                        (0, s.lt)(r)
                    })), r.on("afterCaptureLog", (() => {
                        r._logFlushIdleTimeout && clearTimeout(r._logFlushIdleTimeout), r._logFlushIdleTimeout = setTimeout((() => {
                            (0, s.lt)(r)
                        }), 5e3)
                    }))), c && (r.on("postprocessEvent", i.E), r.on("beforeSendSession", i.N))
                }
                eventFromException(e, t) {
                    return (0, c.u)(this._options.stackParser, e, t, this._options.attachStacktrace)
                }
                eventFromMessage(e, t = "info", n) {
                    return (0, c.qv)(this._options.stackParser, e, t, n, this._options.attachStacktrace)
                }
                _prepareEvent(e, t, n, r) {
                    return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, r)
                }
            }
        },
        75715: (e, t, n) => {
            n.d(t, {
                p: () => s
            });
            var r = n(75655),
                o = n(68826),
                a = n(11738);
            const s = (0, o._C)(((e = {}) => {
                const t = e.limit || 5,
                    n = e.key || "cause";
                return {
                    name: "LinkedErrors",
                    preprocessEvent(e, o, s) {
                        const i = s.getOptions();
                        (0, r.Q)(a.K8, i.stackParser, n, t, e, o)
                    }
                }
            }))
        },
        79274: (e, t, n) => {
            n.d(t, {
                M: () => s
            });
            var r = n(68826),
                o = n(87320),
                a = n(90452);
            const s = (0, r._C)((() => ({
                name: "HttpContext",
                preprocessEvent(e) {
                    if (!a.jf.navigator && !a.jf.location && !a.jf.document) return;
                    const t = e.request ? .url || (0, o.$N)(),
                        {
                            referrer: n
                        } = a.jf.document || {},
                        {
                            userAgent: r
                        } = a.jf.navigator || {},
                        s = { ...e.request ? .headers,
                            ...n && {
                                Referer: n
                            },
                            ...r && {
                                "User-Agent": r
                            }
                        },
                        i = { ...e.request,
                            ...t && {
                                url: t
                            },
                            headers: s
                        };
                    e.request = i
                }
            })))
        },
        79695: (e, t, n) => {
            n.d(t, {
                F: () => E
            });
            var r = n(84625),
                o = n(66220),
                a = n(68826),
                s = n(57968),
                i = n(6810),
                c = n(44910),
                u = n(5602),
                l = n(87320),
                d = n(22209),
                f = n(2323),
                p = n(91923),
                m = n(51669),
                h = n(61221),
                g = n(35947),
                y = n(85761),
                v = n(49431),
                _ = n(90452);
            const b = 1024,
                E = (0, a._C)(((e = {}) => {
                    const t = {
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0,
                        ...e
                    };
                    return {
                        name: "Breadcrumbs",
                        setup(e) {
                            t.console && (0, r.P)(function(e) {
                                return function(t) {
                                    if ((0, s.KU)() !== e) return;
                                    const n = {
                                        category: "console",
                                        data: {
                                            arguments: t.args,
                                            logger: "console"
                                        },
                                        level: (0, d.t)(t.level),
                                        message: (0, f.gt)(t.args, " ")
                                    };
                                    if ("assert" === t.level) {
                                        if (!1 !== t.args[0]) return;
                                        n.message = `Assertion failed: ${(0,f.gt)(t.args.slice(1)," ")||"console.assert"}`, n.data.arguments = t.args.slice(1)
                                    }(0, i.Z)(n, {
                                        input: t.args,
                                        level: t.level
                                    })
                                }
                            }(e)), t.dom && (0, h.i)(function(e, t) {
                                return function(n) {
                                    if ((0, s.KU)() !== e) return;
                                    let r, o, a = "object" == typeof t ? t.serializeAttribute : void 0,
                                        c = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                                    c && c > b && (v.T && u.vF.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${c} was configured. Sentry will use 1024 instead.`), c = b), "string" == typeof a && (a = [a]);
                                    try {
                                        const e = n.event,
                                            t = function(e) {
                                                return !!e && !!e.target
                                            }(e) ? e.target : e;
                                        r = (0, l.Hd)(t, {
                                            keyAttrs: a,
                                            maxStringLength: c
                                        }), o = (0, l.xE)(t)
                                    } catch (e) {
                                        r = "<unknown>"
                                    }
                                    if (0 === r.length) return;
                                    const d = {
                                        category: `ui.${n.name}`,
                                        message: r
                                    };
                                    o && (d.data = {
                                        "ui.component_name": o
                                    }), (0, i.Z)(d, {
                                        event: n.event,
                                        name: n.name,
                                        global: n.global
                                    })
                                }
                            }(e, t.dom)), t.xhr && (0, g.Mn)(function(e) {
                                return function(t) {
                                    if ((0, s.KU)() !== e) return;
                                    const {
                                        startTimestamp: n,
                                        endTimestamp: r
                                    } = t, o = t.xhr[g.Er];
                                    if (!n || !r || !o) return;
                                    const {
                                        method: a,
                                        url: c,
                                        status_code: u,
                                        body: l
                                    } = o, d = {
                                        method: a,
                                        url: c,
                                        status_code: u
                                    }, f = {
                                        xhr: t.xhr,
                                        input: l,
                                        startTimestamp: n,
                                        endTimestamp: r
                                    }, m = {
                                        category: "xhr",
                                        data: d,
                                        type: "http",
                                        level: (0, p.X)(u)
                                    };
                                    e.emit("beforeOutgoingRequestBreadcrumb", m, f), (0, i.Z)(m, f)
                                }
                            }(e)), t.fetch && (0, o.ur)(function(e) {
                                return function(t) {
                                    if ((0, s.KU)() !== e) return;
                                    const {
                                        startTimestamp: n,
                                        endTimestamp: r
                                    } = t;
                                    if (r && (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method))
                                        if (t.fetchData.method, t.fetchData.url, t.error) {
                                            const o = t.fetchData,
                                                a = {
                                                    data: t.error,
                                                    input: t.args,
                                                    startTimestamp: n,
                                                    endTimestamp: r
                                                },
                                                s = {
                                                    category: "fetch",
                                                    data: o,
                                                    level: "error",
                                                    type: "http"
                                                };
                                            e.emit("beforeOutgoingRequestBreadcrumb", s, a), (0, i.Z)(s, a)
                                        } else {
                                            const o = t.response,
                                                a = { ...t.fetchData,
                                                    status_code: o ? .status
                                                };
                                            t.fetchData.request_body_size, t.fetchData.response_body_size;
                                            const s = {
                                                    input: t.args,
                                                    response: o,
                                                    startTimestamp: n,
                                                    endTimestamp: r
                                                },
                                                c = {
                                                    category: "fetch",
                                                    data: a,
                                                    type: "http",
                                                    level: (0, p.X)(a.status_code)
                                                };
                                            e.emit("beforeOutgoingRequestBreadcrumb", c, s), (0, i.Z)(c, s)
                                        }
                                }
                            }(e)), t.history && (0, y._)(function(e) {
                                return function(t) {
                                    if ((0, s.KU)() !== e) return;
                                    let n = t.from,
                                        r = t.to;
                                    const o = (0, m.Dl)(_.jf.location.href);
                                    let a = n ? (0, m.Dl)(n) : void 0;
                                    const c = (0, m.Dl)(r);
                                    a ? .path || (a = o), o.protocol === c.protocol && o.host === c.host && (r = c.relative), o.protocol === a.protocol && o.host === a.host && (n = a.relative), (0, i.Z)({
                                        category: "navigation",
                                        data: {
                                            from: n,
                                            to: r
                                        }
                                    })
                                }
                            }(e)), t.sentry && e.on("beforeSendEvent", function(e) {
                                return function(t) {
                                    (0, s.KU)() === e && (0, i.Z)({
                                        category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                                        event_id: t.event_id,
                                        level: t.level,
                                        message: (0, c.$X)(t)
                                    }, {
                                        event: t
                                    })
                                }
                            }(e))
                        }
                    }
                }))
        },
        82522: (e, t, n) => {
            n.d(t, {
                G: () => c
            });
            var r = n(40873),
                o = n(68826),
                a = n(20527),
                s = n(90452);
            const i = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                c = (0, o._C)(((e = {}) => {
                    const t = {
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0,
                        ...e
                    };
                    return {
                        name: "BrowserApiErrors",
                        setupOnce() {
                            t.setTimeout && (0, r.GS)(s.jf, "setTimeout", u), t.setInterval && (0, r.GS)(s.jf, "setInterval", u), t.requestAnimationFrame && (0, r.GS)(s.jf, "requestAnimationFrame", l), t.XMLHttpRequest && "XMLHttpRequest" in s.jf && (0, r.GS)(XMLHttpRequest.prototype, "send", d);
                            const e = t.eventTarget;
                            if (e) {
                                (Array.isArray(e) ? e : i).forEach(f)
                            }
                        }
                    }
                }));

            function u(e) {
                return function(...t) {
                    const n = t[0];
                    return t[0] = (0, s.LV)(n, {
                        mechanism: {
                            data: {
                                function: (0, a.qQ)(e)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }), e.apply(this, t)
                }
            }

            function l(e) {
                return function(t) {
                    return e.apply(this, [(0, s.LV)(t, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: (0, a.qQ)(e)
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    })])
                }
            }

            function d(e) {
                return function(...t) {
                    const n = this;
                    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((e => {
                        e in n && "function" == typeof n[e] && (0, r.GS)(n, e, (function(t) {
                            const n = {
                                    mechanism: {
                                        data: {
                                            function: e,
                                            handler: (0, a.qQ)(t)
                                        },
                                        handled: !1,
                                        type: "instrument"
                                    }
                                },
                                o = (0, r.sp)(t);
                            return o && (n.mechanism.data.handler = (0, a.qQ)(o)), (0, s.LV)(t, n)
                        }))
                    })), e.apply(this, t)
                }
            }

            function f(e) {
                const t = s.jf,
                    n = t[e] ? .prototype;
                n ? .hasOwnProperty ? .("addEventListener") && ((0, r.GS)(n, "addEventListener", (function(t) {
                    return function(n, r, o) {
                        try {
                            "function" == typeof r.handleEvent && (r.handleEvent = (0, s.LV)(r.handleEvent, {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: (0, a.qQ)(r),
                                        target: e
                                    },
                                    handled: !1,
                                    type: "instrument"
                                }
                            }))
                        } catch {}
                        return t.apply(this, [n, (0, s.LV)(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: (0, a.qQ)(r),
                                    target: e
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }), o])
                    }
                })), (0, r.GS)(n, "removeEventListener", (function(e) {
                    return function(t, n, r) {
                        try {
                            const o = n.__sentry_wrapped__;
                            o && e.call(this, t, o, r)
                        } catch (e) {}
                        return e.call(this, t, n, r)
                    }
                })))
            }
        },
        90452: (e, t, n) => {
            n.d(t, {
                LV: () => d,
                jN: () => l,
                jf: () => c
            });
            var r = n(92575),
                o = n(40873),
                a = n(57968),
                s = n(44910),
                i = n(64251);
            const c = r.O;
            let u = 0;

            function l() {
                return u > 0
            }

            function d(e, t = {}) {
                if (! function(e) {
                        return "function" == typeof e
                    }(e)) return e;
                try {
                    const t = e.__sentry_wrapped__;
                    if (t) return "function" == typeof t ? t : e;
                    if ((0, o.sp)(e)) return e
                } catch (t) {
                    return e
                }
                const n = function(...n) {
                    try {
                        const r = n.map((e => d(e, t)));
                        return e.apply(this, r)
                    } catch (e) {
                        throw u++, setTimeout((() => {
                            u--
                        })), (0, a.v4)((r => {
                            r.addEventProcessor((e => (t.mechanism && ((0, s.gO)(e, void 0, void 0), (0, s.M6)(e, t.mechanism)), e.extra = { ...e.extra,
                                arguments: n
                            }, e))), (0, i.Cp)(e)
                        })), e
                    }
                };
                try {
                    for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
                } catch {}(0, o.pO)(n, e), (0, o.my)(e, "__sentry_wrapped__", n);
                try {
                    Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", {
                        get: () => e.name
                    })
                } catch {}
                return n
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-5b69c406~2a5be33378fd8d7632fe.js.map