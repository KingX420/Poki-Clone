try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        d = (new e.Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3f5216d7-ad8b-4f58-a2dd-972ce5ef3e98", e._sentryDebugIdIdentifier = "sentry-dbid-3f5216d7-ad8b-4f58-a2dd-972ce5ef3e98")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4741], {
        25144: (e, d, n) => {
            n.r(d), n.d(d, {
                default: () => r
            });
            var f = n(78737),
                l = n(43882),
                i = n(11436),
                o = n(90385),
                s = n(95901);

            function r({
                ssrOnly: e,
                whenIdle: d,
                whenVisible: n,
                noWrapper: r,
                on: t,
                children: a
            }) {
                const b = (0, f.d4)(i.E6),
                    _ = (0, f.d4)(o.Xk);
                return "POP" !== b || _ ? (0, s.Y)(l.A, {
                    ssrOnly: e,
                    whenIdle: d,
                    whenVisible: n,
                    noWrapper: r,
                    on: t,
                    children: a
                }) : a
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-NavigationAwareLazyHydrate~cf11c84b4e334d38811a.js.map