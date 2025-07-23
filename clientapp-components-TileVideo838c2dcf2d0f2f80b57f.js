try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        d = (new e.Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5617fb80-c44b-4ebd-8b9f-53e62d14235a", e._sentryDebugIdIdentifier = "sentry-dbid-5617fb80-c44b-4ebd-8b9f-53e62d14235a")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3946, 5139], {
        25919: (e, d, o) => {
            o.r(d), o.d(d, {
                tileVideo: () => t
            });
            var t = "UnEHxLYLNyXKaG7b1gjH"
        },
        57190: (e, d, o) => {
            o.r(d), o.d(d, {
                default: () => l,
                getVideo: () => s
            });
            var t = o(17402),
                i = o(25919),
                n = o(95901);

            function s({
                videoUrl: e,
                videoSize: d
            }) {
                return {
                    h264: `https://v.poki-cdn.com/${e}.${d}.h264.mp4`,
                    h265: `https://v.poki-cdn.com/${e}.${d}.h265.mp4`,
                    vp9: `https://v.poki-cdn.com/${e}.${d}.vp9.mp4`
                }
            }

            function l({
                videoUrl: e
            }) {
                const d = (0, t.useRef)(null),
                    [o, l] = (0, t.useState)(null);
                (0, t.useEffect)((() => {
                    if (d.current) {
                        const {
                            width: e
                        } = d.current.getBoundingClientRect();
                        switch (!0) {
                            case e > 300:
                                l("3x3");
                                break;
                            case e > 200:
                                l("2x2");
                                break;
                            default:
                                l("1x1")
                        }
                    }
                }), [d.current]);
                const {
                    h264: c,
                    h265: f,
                    vp9: r
                } = (0, t.useMemo)((() => s({
                    videoUrl: e,
                    videoSize: o
                })), [e, o]);
                return e && o ? (0, n.FD)("video", {
                    loop: !0,
                    muted: !0,
                    ref: d,
                    className: i.tileVideo,
                    autoPlay: !0,
                    playsInline: !0,
                    children: [(0, n.Y)("source", {
                        src: r,
                        type: 'video/mp4; codecs="vp09.00.10.08"'
                    }), (0, n.Y)("source", {
                        src: f,
                        type: 'video/mp4; codecs="hvc1.1.6.L63.90"'
                    }), (0, n.Y)("source", {
                        src: c,
                        type: "video/mp4"
                    })]
                }) : (0, n.Y)("video", {
                    ref: d,
                    className: i.tileVideo
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-TileVideo~838c2dcf2d0f2f80b57f.js.map