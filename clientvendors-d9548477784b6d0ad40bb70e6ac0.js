try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2c407550-e578-461e-a64c-a859cc5c2c2c", e._sentryDebugIdIdentifier = "sentry-dbid-2c407550-e578-461e-a64c-a859cc5c2c2c")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8497], {
        83440: (e, t, n) => {
            n.d(t, {
                DI: () => D,
                QU: () => E,
                U$: () => w,
                bk: () => _,
                c8: () => k
            });
            var r = n(90519),
                i = n(5915),
                o = n(74611),
                s = n(87320),
                c = n(5109),
                a = n(51669),
                u = n(14910),
                l = n(38549),
                d = n(56388),
                f = n(78084),
                m = n(97806),
                p = n(4692),
                b = n(30318);
            const v = 2147483647;
            let y, T, h = 0,
                g = {};

            function _({
                recordClsStandaloneSpans: e
            }) {
                const t = (0, f.D)();
                if (t && (0, r.k3)()) {
                    t.mark && u.j.performance.mark("sentry-tracing-init");
                    const n = (0, d.T5)((({
                            metric: e
                        }) => {
                            const t = e.entries[e.entries.length - 1];
                            if (!t) return;
                            const n = (0, f.rv)((0, r.k3)()),
                                i = (0, f.rv)(t.startTime);
                            g.fid = {
                                value: e.value,
                                unit: "millisecond"
                            }, g["mark.fid"] = {
                                value: n + i,
                                unit: "second"
                            }
                        })),
                        i = (0, d.Pt)((({
                            metric: e
                        }) => {
                            const t = e.entries[e.entries.length - 1];
                            t && (g.lcp = {
                                value: e.value,
                                unit: "millisecond"
                            }, y = t)
                        }), !0),
                        o = (0, d.YG)((({
                            metric: e
                        }) => {
                            e.entries[e.entries.length - 1] && (g.ttfb = {
                                value: e.value,
                                unit: "millisecond"
                            })
                        })),
                        s = e ? (0, l.D)() : (0, d.a9)((({
                            metric: e
                        }) => {
                            const t = e.entries[e.entries.length - 1];
                            t && (g.cls = {
                                value: e.value,
                                unit: ""
                            }, T = t)
                        }), !0);
                    return () => {
                        n(), i(), o(), s ? .()
                    }
                }
                return () => {}
            }

            function k() {
                (0, d.wv)("longtask", (({
                    entries: e
                }) => {
                    const t = (0, i.Bk)();
                    if (!t) return;
                    const {
                        op: n,
                        start_timestamp: s
                    } = (0, i.et)(t);
                    for (const i of e) {
                        const e = (0, f.rv)((0, r.k3)() + i.startTime),
                            c = (0, f.rv)(i.duration);
                        "navigation" === n && s && e < s || (0, f.Tn)(t, e, e + c, {
                            name: "Main UI thread blocked",
                            op: "ui.long-task",
                            attributes: {
                                [o.JD]: "auto.ui.browser.metrics"
                            }
                        })
                    }
                }))
            }

            function w() {
                new PerformanceObserver((e => {
                    const t = (0, i.Bk)();
                    if (t)
                        for (const n of e.getEntries()) {
                            if (!n.scripts[0]) continue;
                            const e = (0, f.rv)((0, r.k3)() + n.startTime),
                                {
                                    start_timestamp: s,
                                    op: c
                                } = (0, i.et)(t);
                            if ("navigation" === c && s && e < s) continue;
                            const a = (0, f.rv)(n.duration),
                                u = {
                                    [o.JD]: "auto.ui.browser.metrics"
                                },
                                l = n.scripts[0],
                                {
                                    invoker: d,
                                    invokerType: m,
                                    sourceURL: p,
                                    sourceFunctionName: b,
                                    sourceCharPosition: v
                                } = l;
                            u["browser.script.invoker"] = d, u["browser.script.invoker_type"] = m, p && (u["code.filepath"] = p), b && (u["code.function"] = b), -1 !== v && (u["browser.script.source_char_position"] = v), (0, f.Tn)(t, e, e + a, {
                                name: "Main UI thread blocked",
                                op: "ui.long-animation-frame",
                                attributes: u
                            })
                        }
                })).observe({
                    type: "long-animation-frame",
                    buffered: !0
                })
            }

            function D() {
                (0, d.wv)("event", (({
                    entries: e
                }) => {
                    const t = (0, i.Bk)();
                    if (t)
                        for (const n of e)
                            if ("click" === n.name) {
                                const e = (0, f.rv)((0, r.k3)() + n.startTime),
                                    i = (0, f.rv)(n.duration),
                                    c = {
                                        name: (0, s.Hd)(n.target),
                                        op: `ui.interaction.${n.name}`,
                                        startTime: e,
                                        attributes: {
                                            [o.JD]: "auto.ui.browser.metrics"
                                        }
                                    },
                                    a = (0, s.xE)(n.target);
                                a && (c.attributes["ui.component_name"] = a), (0, f.Tn)(t, e, e + i, c)
                            }
                }))
            }

            function E(e, t) {
                const n = (0, f.D)(),
                    l = (0, r.k3)();
                if (!n ? .getEntries || !l) return;
                const d = (0, f.rv)(l),
                    v = n.getEntries(),
                    {
                        op: _,
                        start_timestamp: k
                    } = (0, i.et)(e);
                if (v.slice(h).forEach((t => {
                        const n = (0, f.rv)(t.startTime),
                            r = (0, f.rv)(Math.max(0, t.duration));
                        if (!("navigation" === _ && k && d + n < k)) switch (t.entryType) {
                            case "navigation":
                                ! function(e, t, n) {
                                    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                                            S(e, t, r, n)
                                        })), S(e, t, "secureConnection", n, "TLS/SSL"), S(e, t, "fetch", n, "cache"), S(e, t, "domainLookup", n, "DNS"),
                                        function(e, t, n) {
                                            const r = n + (0, f.rv)(t.requestStart),
                                                i = n + (0, f.rv)(t.responseEnd),
                                                s = n + (0, f.rv)(t.responseStart);
                                            t.responseEnd && ((0, f.Tn)(e, r, i, {
                                                op: "browser.request",
                                                name: t.name,
                                                attributes: {
                                                    [o.JD]: "auto.ui.browser.metrics"
                                                }
                                            }), (0, f.Tn)(e, s, i, {
                                                op: "browser.response",
                                                name: t.name,
                                                attributes: {
                                                    [o.JD]: "auto.ui.browser.metrics"
                                                }
                                            }))
                                        }(e, t, n)
                                }(e, t, d);
                                break;
                            case "mark":
                            case "paint":
                            case "measure":
                                {! function(e, t, n, r, i) {
                                        const s = (0, p.z)(!1),
                                            c = (0, f.rv)(s ? s.requestStart : 0),
                                            a = i + Math.max(n, c),
                                            u = i + n,
                                            l = u + r,
                                            d = {
                                                [o.JD]: "auto.resource.browser.metrics"
                                            };
                                        a !== u && (d["sentry.browser.measure_happened_before_request"] = !0, d["sentry.browser.measure_start_time"] = a);
                                        a <= l && (0, f.Tn)(e, a, l, {
                                            name: t.name,
                                            op: t.entryType,
                                            attributes: d
                                        })
                                    }(e, t, n, r, d);
                                    const i = (0, b.N)(),
                                        s = t.startTime < i.firstHiddenTime;
                                    "first-paint" === t.name && s && (g.fp = {
                                        value: t.startTime,
                                        unit: "millisecond"
                                    }),
                                    "first-contentful-paint" === t.name && s && (g.fcp = {
                                        value: t.startTime,
                                        unit: "millisecond"
                                    });
                                    break
                                }
                            case "resource":
                                ! function(e, t, n, r, i, s) {
                                    if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                                    const c = (0, a.Dl)(n),
                                        l = {
                                            [o.JD]: "auto.resource.browser.metrics"
                                        };
                                    A(l, t, "transferSize", "http.response_transfer_size"), A(l, t, "encodedBodySize", "http.response_content_length"), A(l, t, "decodedBodySize", "http.decoded_response_content_length");
                                    const d = t.deliveryType;
                                    null != d && (l["http.response_delivery_type"] = d);
                                    const m = t.renderBlockingStatus;
                                    m && (l["resource.render_blocking_status"] = m);
                                    c.protocol && (l["url.scheme"] = c.protocol.split(":").pop());
                                    c.host && (l["server.address"] = c.host);
                                    l["url.same_origin"] = n.includes(u.j.location.origin);
                                    const {
                                        name: p,
                                        version: b
                                    } = (0, f.Ep)(t.nextHopProtocol);
                                    l["network.protocol.name"] = p, l["network.protocol.version"] = b;
                                    const v = s + r,
                                        y = v + i;
                                    (0, f.Tn)(e, v, y, {
                                        name: n.replace(u.j.location.origin, ""),
                                        op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                                        attributes: l
                                    })
                                }(e, t, t.name, n, r, d)
                        }
                    })), h = Math.max(v.length - 1, 0), function(e) {
                        const t = u.j.navigator;
                        if (!t) return;
                        const n = t.connection;
                        n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType), n.type && e.setAttribute("connectionType", n.type), (0, f.Kk)(n.rtt) && (g["connection.rtt"] = {
                            value: n.rtt,
                            unit: "millisecond"
                        }));
                        (0, f.Kk)(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`);
                        (0, f.Kk)(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
                    }(e), "pageload" === _) {
                    ! function(e) {
                        const t = (0, p.z)(!1);
                        if (!t) return;
                        const {
                            responseStart: n,
                            requestStart: r
                        } = t;
                        r <= n && (e["ttfb.requestTime"] = {
                            value: n - r,
                            unit: "millisecond"
                        })
                    }(g);
                    const n = g["mark.fid"];
                    n && g.fid && ((0, f.Tn)(e, n.value, n.value + (0, f.rv)(g.fid.value), {
                            name: "first input delay",
                            op: "ui.action",
                            attributes: {
                                [o.JD]: "auto.ui.browser.metrics"
                            }
                        }), delete g["mark.fid"]), "fcp" in g && t.recordClsOnPageloadSpan || delete g.cls, Object.entries(g).forEach((([e, t]) => {
                            (0, c.X)(e, t.value, t.unit)
                        })), e.setAttribute("performance.timeOrigin", d), e.setAttribute("performance.activationStart", (0, m.b)()),
                        function(e) {
                            y && (y.element && e.setAttribute("lcp.element", (0, s.Hd)(y.element)), y.id && e.setAttribute("lcp.id", y.id), y.url && e.setAttribute("lcp.url", y.url.trim().slice(0, 200)), null != y.loadTime && e.setAttribute("lcp.loadTime", y.loadTime), null != y.renderTime && e.setAttribute("lcp.renderTime", y.renderTime), e.setAttribute("lcp.size", y.size));
                            T ? .sources && T.sources.forEach(((t, n) => e.setAttribute(`cls.source.${n+1}`, (0, s.Hd)(t.node))))
                        }(e)
                }
                y = void 0, T = void 0, g = {}
            }

            function S(e, t, n, r, i = n) {
                const s = function(e) {
                        if ("secureConnection" === e) return "connectEnd";
                        if ("fetch" === e) return "domainLookupStart";
                        return `${e}End`
                    }(n),
                    c = t[s],
                    a = t[`${n}Start`];
                a && c && (0, f.Tn)(e, r + (0, f.rv)(a), r + (0, f.rv)(c), {
                    op: `browser.${i}`,
                    name: t.name,
                    attributes: {
                        [o.JD]: "auto.ui.browser.metrics",
                        ..."redirect" === n && null != t.redirectCount ? {
                            "http.redirect_count": t.redirectCount
                        } : {}
                    }
                })
            }

            function A(e, t, n, r) {
                const i = t[n];
                null != i && i < v && (e[r] = i)
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-d9548477~784b6d0ad40bb70e6ac0.js.map