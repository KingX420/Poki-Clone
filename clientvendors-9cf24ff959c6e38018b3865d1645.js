try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c4d9902d-a97c-4edc-a0c8-edd57d68cf83", e._sentryDebugIdIdentifier = "sentry-dbid-c4d9902d-a97c-4edc-a0c8-edd57d68cf83")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3840], {
        2740: (e, t, n) => {
            n.d(t, {
                l: () => r
            });
            const r = (e, t, n) => {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                        const r = new PerformanceObserver((e => {
                            Promise.resolve().then((() => {
                                t(e.getEntries())
                            }))
                        }));
                        return r.observe(Object.assign({
                            type: e,
                            buffered: !0
                        }, n || {})), r
                    }
                } catch (e) {}
            }
        },
        4692: (e, t, n) => {
            n.d(t, {
                z: () => i
            });
            var r = n(14910);
            const i = (e = !0) => {
                const t = r.j.performance ? .getEntriesByType ? .("navigation")[0];
                if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
            }
        },
        14391: (e, t, n) => {
            n.d(t, {
                I: () => i
            });
            var r = n(14910);
            const i = e => {
                r.j.document ? .prerendering ? addEventListener("prerenderingchange", (() => e()), !0) : e()
            }
        },
        14910: (e, t, n) => {
            n.d(t, {
                j: () => r
            });
            const r = n(92575).O
        },
        22422: (e, t, n) => {
            n.d(t, {
                z: () => l
            });
            var r = n(79888),
                i = n(97806),
                d = n(30318),
                a = n(39191),
                o = n(2740),
                s = n(14391);
            const c = [1800, 3e3],
                l = (e, t = {}) => {
                    (0, s.I)((() => {
                        const n = (0, d.N)(),
                            s = (0, a.X)("FCP");
                        let l;
                        const u = (0, o.l)("paint", (e => {
                            e.forEach((e => {
                                "first-contentful-paint" === e.name && (u.disconnect(), e.startTime < n.firstHiddenTime && (s.value = Math.max(e.startTime - (0, i.b)(), 0), s.entries.push(e), l(!0)))
                            }))
                        }));
                        u && (l = (0, r.R)(e, s, c, t.reportAllChanges))
                    }))
                }
        },
        26911: (e, t, n) => {
            n.d(t, {
                D: () => l,
                O: () => c
            });
            var r = n(2740);
            let i = 0,
                d = 1 / 0,
                a = 0;
            const o = e => {
                e.forEach((e => {
                    e.interactionId && (d = Math.min(d, e.interactionId), a = Math.max(a, e.interactionId), i = a ? (a - d) / 7 + 1 : 0)
                }))
            };
            let s;
            const c = () => s ? i : performance.interactionCount || 0,
                l = () => {
                    "interactionCount" in performance || s || (s = (0, r.l)("event", o, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                }
        },
        30318: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var r = n(14910);
            let i = -1;
            const d = e => {
                    "hidden" === r.j.document.visibilityState && i > -1 && (i = "visibilitychange" === e.type ? e.timeStamp : 0, a())
                },
                a = () => {
                    removeEventListener("visibilitychange", d, !0), removeEventListener("prerenderingchange", d, !0)
                },
                o = () => (r.j.document && i < 0 && (i = "hidden" !== r.j.document.visibilityState || r.j.document.prerendering ? 1 / 0 : 0, addEventListener("visibilitychange", d, !0), addEventListener("prerenderingchange", d, !0)), {
                    get firstHiddenTime() {
                        return i
                    }
                })
        },
        32075: (e, t, n) => {
            n.d(t, {
                Q: () => i
            });
            var r = n(14910);
            const i = e => {
                const t = t => {
                    "pagehide" !== t.type && "hidden" !== r.j.document ? .visibilityState || e(t)
                };
                r.j.document && (addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0))
            }
        },
        34588: (e, t, n) => {
            n.d(t, {
                J: () => r
            });
            const r = e => {
                let t = !1;
                return () => {
                    t || (e(), t = !0)
                }
            }
        },
        39191: (e, t, n) => {
            n.d(t, {
                X: () => a
            });
            var r = n(14910);
            var i = n(97806),
                d = n(4692);
            const a = (e, t) => {
                const n = (0, d.z)();
                let a = "navigate";
                n && (r.j.document ? .prerendering || (0, i.b)() > 0 ? a = "prerender" : r.j.document ? .wasDiscarded ? a = "restore" : n.type && (a = n.type.replace(/_/g, "-")));
                return {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: `v4-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
                    navigationType: a
                }
            }
        },
        56028: (e, t, n) => {
            n.d(t, {
                d: () => a
            });
            var r = n(14910),
                i = n(32075),
                d = n(34588);
            const a = e => {
                const t = r.j.requestIdleCallback || r.j.setTimeout;
                let n = -1;
                return e = (0, d.J)(e), "hidden" === r.j.document ? .visibilityState ? e() : (n = t(e), (0, i.Q)(e)), n
            }
        },
        56631: (e, t, n) => {
            n.d(t, {
                M: () => c,
                cg: () => o,
                pl: () => a
            });
            var r = n(26911);
            const i = [],
                d = new Map,
                a = 40;
            const o = () => {
                    const e = Math.min(i.length - 1, Math.floor(((0, r.O)() - 0) / 50));
                    return i[e]
                },
                s = [],
                c = e => {
                    if (s.forEach((t => t(e))), !e.interactionId && "first-input" !== e.entryType) return;
                    const t = i[i.length - 1],
                        n = d.get(e.interactionId);
                    if (n || i.length < 10 || t && e.duration > t.latency) {
                        if (n) e.duration > n.latency ? (n.entries = [e], n.latency = e.duration) : e.duration === n.latency && e.startTime === n.entries[0] ? .startTime && n.entries.push(e);
                        else {
                            const t = {
                                id: e.interactionId,
                                latency: e.duration,
                                entries: [e]
                            };
                            d.set(t.id, t), i.push(t)
                        }
                        i.sort(((e, t) => t.latency - e.latency)), i.length > 10 && i.splice(10).forEach((e => d.delete(e.id)))
                    }
                }
        },
        79739: (e, t, n) => {
            n.d(t, {
                C: () => u
            });
            var r = n(14910),
                i = n(79888),
                d = n(97806),
                a = n(4692),
                o = n(39191),
                s = n(14391);
            const c = [800, 1800],
                l = e => {
                    r.j.document ? .prerendering ? (0, s.I)((() => l(e))) : "complete" !== r.j.document ? .readyState ? addEventListener("load", (() => l(e)), !0) : setTimeout(e, 0)
                },
                u = (e, t = {}) => {
                    const n = (0, o.X)("TTFB"),
                        r = (0, i.R)(e, n, c, t.reportAllChanges);
                    l((() => {
                        const e = (0, a.z)();
                        e && (n.value = Math.max(e.responseStart - (0, d.b)(), 0), n.entries = [e], r(!0))
                    }))
                }
        },
        79888: (e, t, n) => {
            n.d(t, {
                R: () => r
            });
            const r = (e, t, n, r) => {
                let i, d;
                return a => {
                    t.value >= 0 && (a || r) && (d = t.value - (i || 0), (d || void 0 === i) && (i = t.value, t.delta = d, t.rating = ((e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good")(t.value, n), e(t)))
                }
            }
        },
        97806: (e, t, n) => {
            n.d(t, {
                b: () => i
            });
            var r = n(4692);
            const i = () => {
                const e = (0, r.z)();
                return e ? .activationStart || 0
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-9cf24ff9~59c6e38018b3865d1645.js.map