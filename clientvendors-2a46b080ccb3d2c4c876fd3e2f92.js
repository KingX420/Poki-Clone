try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7d2b8e9a-4127-414c-984a-2a69c4392d28", e._sentryDebugIdIdentifier = "sentry-dbid-7d2b8e9a-4127-414c-984a-2a69c4392d28")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3898], {
        14297: (e, n, t) => {
            t(4146), t(17402), t(44363), t(8661), t(4595), t(41458)
        },
        41458: (e, n, t) => {
            t.d(n, {
                t: () => r
            });
            var r = t(17402).default.createContext(null)
        },
        43882: (e, n, t) => {
            function r() {
                return r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, r.apply(null, arguments)
            }
            t.d(n, {
                A: () => u
            });
            var i = t(17402),
                o = i.useLayoutEffect;

            function s() {
                return !0
            }
            const u = function(e) {
                var n = (0, i.useRef)(null),
                    t = (0, i.useReducer)(s, !1),
                    u = t[0],
                    a = t[1],
                    f = e.noWrapper,
                    c = e.ssrOnly,
                    d = e.whenIdle,
                    l = e.whenVisible,
                    b = e.promise,
                    p = e.on,
                    y = void 0 === p ? [] : p,
                    h = e.children,
                    v = e.didHydrate,
                    g = function(e, n) {
                        if (null == e) return {};
                        var t = {};
                        for (var r in e)
                            if ({}.hasOwnProperty.call(e, r)) {
                                if (n.includes(r)) continue;
                                t[r] = e[r]
                            }
                        return t
                    }(e, ["noWrapper", "ssrOnly", "whenIdle", "whenVisible", "promise", "on", "children", "didHydrate"]);
                o((function() {
                    n.current.hasChildNodes() || a()
                }), []), (0, i.useEffect)((function() {
                    u && v && v()
                }), [u]), (0, i.useEffect)((function() {
                    if (!c && !u) {
                        var e = n.current,
                            t = [];
                        if (b && b.then(a, a), l) {
                            var r = f ? e : e.firstElementChild;
                            if (!r || "undefined" == typeof IntersectionObserver) return a();
                            var i = new IntersectionObserver((function(e) {
                                e.forEach((function(e) {
                                    (e.isIntersecting || e.intersectionRatio > 0) && a()
                                }))
                            }), "object" == typeof l ? l : {
                                rootMargin: "250px"
                            });
                            i.observe(r), t.push((function() {
                                i.disconnect()
                            }))
                        }
                        if (d)
                            if ("undefined" != typeof requestIdleCallback) {
                                var o = requestIdleCallback(a, {
                                    timeout: 500
                                });
                                t.push((function() {
                                    cancelIdleCallback(o)
                                }))
                            } else {
                                var s = setTimeout(a, 2e3);
                                t.push((function() {
                                    clearTimeout(s)
                                }))
                            }
                        return [].concat(y).forEach((function(n) {
                                e.addEventListener(n, a, {
                                    once: !0,
                                    passive: !0
                                }), t.push((function() {
                                    e.removeEventListener(n, a, {})
                                }))
                            })),
                            function() {
                                t.forEach((function(e) {
                                    e()
                                }))
                            }
                    }
                }), [u, y, c, d, l, v, b, f]);
                var E = "string" == typeof f ? f : "div";
                return u ? f ? h : (0, i.createElement)(E, r({
                    ref: n,
                    style: {
                        display: "contents"
                    }
                }, g), h) : (0, i.createElement)(E, r({}, g, {
                    ref: n,
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: ""
                    }
                }))
            }
        },
        59904: (e, n, t) => {
            t.d(n, {
                A: () => s
            });
            var r = t(17402),
                i = t(41458),
                o = t(8661);
            const s = function(e) {
                var n = e.store,
                    t = e.context,
                    s = e.children,
                    u = (0, r.useMemo)((function() {
                        var e = new o.A(n);
                        return e.onStateChange = e.notifyNestedSubs, {
                            store: n,
                            subscription: e
                        }
                    }), [n]),
                    a = (0, r.useMemo)((function() {
                        return n.getState()
                    }), [n]);
                (0, r.useEffect)((function() {
                    var e = u.subscription;
                    return e.trySubscribe(), a !== n.getState() && e.notifyNestedSubs(),
                        function() {
                            e.tryUnsubscribe(), e.onStateChange = null
                        }
                }), [u, a]);
                var f = t || i.t;
                return r.default.createElement(f.Provider, {
                    value: u
                }, s)
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-2a46b080~ccb3d2c4c876fd3e2f92.js.map