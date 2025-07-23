try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8bcc2e9f-c09f-497b-b068-15e6ef840cf0", e._sentryDebugIdIdentifier = "sentry-dbid-8bcc2e9f-c09f-497b-b068-15e6ef840cf0")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5677], {
        65677: (e, t, i) => {
            i.r(t), i.d(t, {
                checkAutoRedirectEpic: () => S,
                checkPrivacyPolicyEpic: () => O,
                googleAnalyticsPrivacyEpic: () => M,
                hideNotificationsOnNavigateEpic: () => G,
                refreshCacheEpic$: () => U,
                sendDeviceCapabilitiesEpic: () => R,
                setViewportOrientationEpic: () => L,
                showUserFeedbackEpic: () => $,
                stateSyncEpic: () => P
            });
            i(30882);
            var n = i(29079),
                o = i(61701),
                a = i(9336),
                c = i(81160),
                r = i(44240),
                p = i(56978),
                s = i(38975),
                l = i(76981),
                u = i(63720),
                d = i(62467),
                f = i(16126),
                g = i(36173),
                y = i(59099),
                h = i(8767),
                w = i(28452),
                m = i(42891),
                b = i(88800),
                v = i(23260),
                _ = i(7696),
                E = i(28685),
                A = i(98708),
                D = i(90385),
                N = i(91323),
                k = i(15049),
                C = i(55509),
                T = i(46493),
                I = i(11865);
            i(95901);

            function L(e) {
                if ("function" != typeof window ? .matchMedia) return o.w;
                const t = window.matchMedia("(orientation: portrait)"),
                    i = (0, a.R)(window, "orientationchange").pipe((0, c.T)((() => t.matches))),
                    s = e.pipe((0, n.g)(m.Xy.type));
                return (0, r.h)(s, i).pipe((0, p.B)(100), (0, c.T)((() => (0, m.nx)({
                    orientation: t.matches ? "portrait" : "landscape"
                }))))
            }

            function O(e, t) {
                return o.w
            }

            function S(e, t) {
                if (!window ? .location ? .hash ? .includes("#utm_source=redirect") || (0, N.DF)(t.value) === N.LJ.APP) return o.w;
                const i = e.pipe((0, n.g)(m.F8.type), (0, f.p)((() => (0, m.Wv)(t.value)))),
                    a = e.pipe((0, g.o)((() => (0, k.VH)(t.value) ? (0, d.of)(o.w) : e.pipe((0, n.g)(_.rB.type)))), (0, s.s)(1));
                return e.pipe((0, n.g)(m.Xy.type), (0, s.s)(1), (0, u.n)((() => (0, r.h)(i, a))), (0, y.M)((() => {
                    let e, i;
                    const n = window.location.hash.replace("#utm_source=redirect-", "") || "";
                    window.location.hash = "", 5 === n.length && ([e, i] = n.split("-"));
                    const a = (0, D.nK)(t.value),
                        c = a.find((t => t ? .href ? .includes("poki.com/") && t ? .lang === e)),
                        r = a.find((e => e ? .href ? .includes("poki.com/") && e ? .lang === i));
                    if (!c || !r) return o.w;
                    const p = (0, A.K)(t.value),
                        s = `${p.auto_redirect_title.replace("[language]",r.languageName)}`,
                        l = p.auto_redirect_message.replace("[language]", c.languageName),
                        u = p.auto_redirect_button ? .replace("[language]", c.languageName);
                    (0, T.F)({
                        category: "page",
                        action: "autoRedirectImpression",
                        data: {
                            from: c.languageName,
                            to: r.languageName
                        }
                    }), window ? .store ? .dispatch((0, b.Gg)({
                        notification: {
                            title: s,
                            titleIcon: {
                                image: "https://a.poki-cdn.com/images/icon-world-v2.svg",
                                width: 22,
                                height: 22
                            },
                            childComponent: {
                                name: "AutoRedirectNotification",
                                props: {
                                    message: l,
                                    button: u,
                                    href: c ? .href,
                                    lang: c ? .lang
                                }
                            },
                            autoExpire: 1e4
                        }
                    }))
                })), (0, h.w)())
            }

            function M(e, t) {
                return e.pipe((0, n.g)(m.Xy.type), (0, s.s)(1), (0, y.M)((() => {
                    if ((0, m.vo)(t.value)) return;
                    const e = (0, D.tM)(t.value),
                        i = `https://${(0,N.Gd)(t.value).domain}${e}`;
                    console.info(`%cGoogle Analytics is blocked by Poki, refer to our privacy statement (${i})`, "background:rgb(0, 156, 255);color:#fff")
                })), (0, h.w)())
            }

            function R(e, t) {
                const a = (0, k.hv)(t.value),
                    c = (0, m.Rd)(t.value);
                return !a || c > .5 ? o.w : e.pipe((0, n.g)(v.y.type), (0, s.s)(1), (0, l.c)(6e4), (0, y.M)((() => {
                    i.e(2294).then(i.bind(i, 12294)).then((({
                        default: e
                    }) => {
                        e()
                    }))
                })), (0, h.w)())
            }

            function $(e, t) {
                const i = "user-satisfaction",
                    a = (0, m.Rd)(t.value),
                    r = (0, b.hk)(t.value, i),
                    p = (0, m.wu)(t.value),
                    u = (0, N.Gd)(t.value),
                    d = a < .05,
                    y = ["AU", "CA", "GB", "IE", "NZ", "US"].includes(p),
                    h = 3 === u.id;
                if (!y || !h || r || !d) return o.w;
                (0, T.F)({
                    category: "pps",
                    action: "trigger"
                });
                const w = e.pipe((0, n.g)(m.Xy.type), (0, s.s)(1), (0, l.c)(36e4)),
                    _ = e.pipe((0, n.g)(v.y.type), (0, f.p)((() => "game" !== (0, D.K5)(t.value))), (0, s.s)(1));
                return w.pipe((0, g.o)((() => _)), (0, c.T)((() => (0, b.Gg)({
                    notification: {
                        id: i,
                        title: "Would you recommend Poki to your friends?",
                        childComponent: {
                            name: "UserSatisfaction",
                            props: {
                                notificationID: i
                            }
                        },
                        muteAfterClose: !0
                    }
                }))))
            }

            function G(e, t) {
                return e.pipe((0, n.g)("@router/LOCATION_CHANGE"), (0, c.T)((() => (0, E.L)(t.value))), (0, w.Z)((e => e.filter((e => e.navigateToClose)).map((e => (0, b.oe)({
                    id: e.id
                }))))))
            }

            function P(e, t) {
                if ("undefined" == typeof window) return o.w;
                const i = [],
                    n = (0, a.R)(document, "visibilitychange").pipe((0, f.p)((() => "hidden" === document.visibilityState))),
                    c = e.pipe((0, f.p)((e => C.D[e.type])), (0, y.M)((e => {
                        const {
                            state: t,
                            property: n
                        } = C.D[e.type], o = `${t}/${n}`;
                        i.includes(o) || i.push(o)
                    })));
                return (0, r.h)(n.pipe((0, y.M)((() => {
                    i.forEach((e => {
                        const [i, n] = e.split("/"), o = t.value[i][n];
                        (0, I.SO)(`state/${e}`, JSON.stringify(o))
                    })), i.length = 0
                }))), c).pipe((0, h.w)())
            }

            function U(e) {
                return e.pipe((0, n.g)(m.Xy.type), (0, s.s)(1), (0, l.c)(864e5), (0, u.n)((() => e.pipe((0, n.g)(v.y.type), (0, y.M)((() => {
                    window.location.reload()
                })), (0, h.w)()))))
            }
        }
    }
]);
//# sourceMappingURL=client~5677~d678ce12578ecee4a9cc.js.map