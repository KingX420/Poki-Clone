try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        s = (new e.Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "74a78e53-46ee-45f0-9e36-e770294704ee", e._sentryDebugIdIdentifier = "sentry-dbid-74a78e53-46ee-45f0-9e36-e770294704ee")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4438, 8935], {
        32987: (e, s, t) => {
            t.r(s), t.d(s, {
                clippingDestAnimation: () => i,
                gradientAnimation: () => o,
                shimmer: () => r,
                shimmer__img: () => l,
                shimmer__img_dest: () => d,
                shimmer__svg: () => n
            });
            var i = "HMYNmWYQTvNrQHIj_A1U",
                o = "_Gn4kAWL8JhFMJ_tY3Is",
                r = "lKQDGo01AOX1KzmLF6zg",
                l = "V2TkVc6ms04xJnZ0q7HG",
                d = "pd1Q3HPTErZXNOk0Xhjn",
                n = "PAs3ZWFSCaUF1OTmLKvF"
        },
        98250: (e, s, t) => {
            t.r(s), t.d(s, {
                default: () => l
            });
            var i = t(34164),
                o = t(32987),
                r = t(95901);

            function l({
                sourcePicture: e,
                destinationPicture: s
            }) {
                return (0, r.FD)("div", {
                    className: o.shimmer,
                    children: [(0, r.Y)("figure", {
                        className: o.shimmer__img,
                        children: e
                    }), (0, r.Y)("figure", {
                        className: (0, i.A)(o.shimmer__img, o.shimmer__img_dest),
                        children: s
                    }), (0, r.FD)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100%",
                        height: "100%",
                        className: o.shimmer__svg,
                        children: [(0, r.Y)("defs", {
                            children: (0, r.FD)("linearGradient", {
                                id: "lgrad",
                                x1: "0%",
                                y1: "100%",
                                x2: "100%",
                                y2: "0%",
                                children: [(0, r.Y)("stop", {
                                    offset: "0%",
                                    style: {
                                        "stop-color": "rgb(255, 255, 255)",
                                        "stop-opacity": 0
                                    }
                                }), (0, r.Y)("stop", {
                                    offset: "25%",
                                    style: {
                                        "stop-color": "rgb(255, 255, 255)",
                                        "stop-opacity": 0
                                    }
                                }), (0, r.Y)("stop", {
                                    offset: "50%",
                                    style: {
                                        "stop-color": "rgb(255, 255, 255)",
                                        "stop-opacity": 1
                                    }
                                }), (0, r.Y)("stop", {
                                    offset: "75%",
                                    style: {
                                        "stop-color": "rgb(255, 255, 255)",
                                        "stop-opacity": 0
                                    }
                                }), (0, r.Y)("stop", {
                                    offset: "100%",
                                    style: {
                                        "stop-color": "rgb(238, 130, 238)",
                                        "stop-opacity": 0
                                    }
                                })]
                            })
                        }), (0, r.Y)("rect", {
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%",
                            fill: "url(#lgrad)"
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-Shimmer~8bcd83079aaa92f81f24.js.map