try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "21cbc1ce-e3dd-4c1b-8615-5c4ff6ec2694", e._sentryDebugIdIdentifier = "sentry-dbid-21cbc1ce-e3dd-4c1b-8615-5c4ff6ec2694")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9848], {
        3594: (e, t, n) => {
            n.d(t, {
                qd: () => d,
                y7: () => c
            });
            var r = n(98822),
                o = n(5602),
                s = n(4693),
                a = n(14910);
            const i = {};

            function d(e) {
                const t = i[e];
                if (t) return t;
                let n = a.j[e];
                if ((0, r.a3)(n)) return i[e] = n.bind(a.j);
                const d = a.j.document;
                if (d && "function" == typeof d.createElement) try {
                    const t = d.createElement("iframe");
                    t.hidden = !0, d.head.appendChild(t);
                    const r = t.contentWindow;
                    r ? .[e] && (n = r[e]), d.head.removeChild(t)
                } catch (t) {
                    s.T && o.vF.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
                }
                return n ? i[e] = n.bind(a.j) : n
            }

            function c(e) {
                i[e] = void 0
            }
        },
        4693: (e, t, n) => {
            n.d(t, {
                T: () => r
            });
            const r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
        },
        35947: (e, t, n) => {
            n.d(t, {
                Er: () => i,
                Mn: () => d
            });
            var r = n(26131),
                o = n(90519),
                s = n(30690),
                a = n(14910);
            const i = "__sentry_xhr_v3__";

            function d(e) {
                (0, r.s5)("xhr", e), (0, r.AS)("xhr", c)
            }

            function c() {
                if (!a.j.XMLHttpRequest) return;
                const e = XMLHttpRequest.prototype;
                e.open = new Proxy(e.open, {
                    apply(e, t, n) {
                        const a = new Error,
                            d = 1e3 * (0, o.zf)(),
                            c = (0, s.Kg)(n[0]) ? n[0].toUpperCase() : void 0,
                            u = function(e) {
                                if ((0, s.Kg)(e)) return e;
                                try {
                                    return e.toString()
                                } catch {}
                                return
                            }(n[1]);
                        if (!c || !u) return e.apply(t, n);
                        t[i] = {
                            method: c,
                            url: u,
                            request_headers: {}
                        }, "POST" === c && u.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
                        const f = () => {
                            const e = t[i];
                            if (e && 4 === t.readyState) {
                                try {
                                    e.status_code = t.status
                                } catch (e) {}
                                const n = {
                                    endTimestamp: 1e3 * (0, o.zf)(),
                                    startTimestamp: d,
                                    xhr: t,
                                    virtualError: a
                                };
                                (0, r.aj)("xhr", n)
                            }
                        };
                        return "onreadystatechange" in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                            apply: (e, t, n) => (f(), e.apply(t, n))
                        }) : t.addEventListener("readystatechange", f), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                            apply(e, t, n) {
                                const [r, o] = n, a = t[i];
                                return a && (0, s.Kg)(r) && (0, s.Kg)(o) && (a.request_headers[r.toLowerCase()] = o), e.apply(t, n)
                            }
                        }), e.apply(t, n)
                    }
                }), e.send = new Proxy(e.send, {
                    apply(e, t, n) {
                        const s = t[i];
                        if (!s) return e.apply(t, n);
                        void 0 !== n[0] && (s.body = n[0]);
                        const a = {
                            startTimestamp: 1e3 * (0, o.zf)(),
                            xhr: t
                        };
                        return (0, r.aj)("xhr", a), e.apply(t, n)
                    }
                })
            }
        },
        61221: (e, t, n) => {
            n.d(t, {
                i: () => f
            });
            var r = n(26131),
                o = n(40873),
                s = n(44910),
                a = n(14910);
            const i = 1e3;
            let d, c, u;

            function f(e) {
                (0, r.s5)("dom", e), (0, r.AS)("dom", y)
            }

            function y() {
                if (!a.j.document) return;
                const e = r.aj.bind(null, "dom"),
                    t = l(e, !0);
                a.j.document.addEventListener("click", t, !1), a.j.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((t => {
                    const n = a.j,
                        r = n[t] ? .prototype;
                    r ? .hasOwnProperty ? .("addEventListener") && ((0, o.GS)(r, "addEventListener", (function(t) {
                        return function(n, r, o) {
                            if ("click" === n || "keypress" == n) try {
                                const r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                    s = r[n] = r[n] || {
                                        refCount: 0
                                    };
                                if (!s.handler) {
                                    const r = l(e);
                                    s.handler = r, t.call(this, n, r, o)
                                }
                                s.refCount++
                            } catch (e) {}
                            return t.call(this, n, r, o)
                        }
                    })), (0, o.GS)(r, "removeEventListener", (function(e) {
                        return function(t, n, r) {
                            if ("click" === t || "keypress" == t) try {
                                const n = this.__sentry_instrumentation_handlers__ || {},
                                    o = n[t];
                                o && (o.refCount--, o.refCount <= 0 && (e.call(this, t, o.handler, r), o.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                            } catch (e) {}
                            return e.call(this, t, n, r)
                        }
                    })))
                }))
            }

            function l(e, t = !1) {
                return n => {
                    if (!n || n._sentryCaptured) return;
                    const r = function(e) {
                        try {
                            return e.target
                        } catch (e) {
                            return null
                        }
                    }(n);
                    if (function(e, t) {
                            return "keypress" === e && (!t ? .tagName || "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable)
                        }(n.type, r)) return;
                    (0, o.my)(n, "_sentryCaptured", !0), r && !r._sentryId && (0, o.my)(r, "_sentryId", (0, s.eJ)());
                    const f = "keypress" === n.type ? "input" : n.type;
                    if (! function(e) {
                            if (e.type !== c) return !1;
                            try {
                                if (!e.target || e.target._sentryId !== u) return !1
                            } catch (e) {}
                            return !0
                        }(n)) {
                        e({
                            event: n,
                            name: f,
                            global: t
                        }), c = n.type, u = r ? r._sentryId : void 0
                    }
                    clearTimeout(d), d = a.j.setTimeout((() => {
                        u = void 0, c = void 0
                    }), i)
                }
            }
        },
        85761: (e, t, n) => {
            n.d(t, {
                _: () => d
            });
            var r = n(26131),
                o = n(98822),
                s = n(40873),
                a = n(14910);
            let i;

            function d(e) {
                const t = "history";
                (0, r.s5)(t, e), (0, r.AS)(t, c)
            }

            function c() {
                function e(e) {
                    return function(...t) {
                        const n = t.length > 2 ? t[2] : void 0;
                        if (n) {
                            const o = i,
                                s = String(n);
                            if (i = s, o === s) return e.apply(this, t);
                            const a = {
                                from: o,
                                to: s
                            };
                            (0, r.aj)("history", a)
                        }
                        return e.apply(this, t)
                    }
                }
                a.j.addEventListener("popstate", (() => {
                    const e = a.j.location.href,
                        t = i;
                    if (i = e, t === e) return;
                    const n = {
                        from: t,
                        to: e
                    };
                    (0, r.aj)("history", n)
                })), (0, o.NJ)() && ((0, s.GS)(a.j.history, "pushState", e), (0, s.GS)(a.j.history, "replaceState", e))
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-221ea48c~21504ec9efbbc0a54ec6.js.map