! function() {
    function e(e, t) {
        fetch(e, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: t,
            mode: "no-cors",
            keepalive: !0,
            credentials: "omit"
        }).catch((function(a) {
            console.error(a);
            try {
                var n = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                n.open("POST", e, !0), n.setRequestHeader("Content-Type", "text/plain"), n.send(t)
            } catch (e) {}
        }))
    }

    function t(t, a, n) {
        console.error(t);
        var o = [{
            k: "where",
            v: a
        }, {
            k: "error",
            v: t.name && t.message ? "".concat(t.name, ": ").concat(t.message) : JSON.stringify(t)
        }];
        if (void 0 !== n) {
            var i = n;
            "string" != typeof t && (i = JSON.stringify(t)), o.push({
                k: "extra",
                v: i
            })
        }
        e("https://t.poki.io/l", JSON.stringify({
            c: "observer-error",
            ve: 7,
            d: o
        }))
    }
    window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
    var a = "poki_session";
    window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
    var n = ["poki.at", "poki.be", "poki.by", "poki.ch", "poki.cn", "poki.co.id", "poki.co.il", "poki.com.br", "poki.com", "poki.cz", "poki.de", "poki.dk", "poki.fi", "poki.it", "poki.jp", "poki.nl", "poki.pl", "poki.pt", "poki.se", "www.trochoi.net"];

    function o(e, t) {
        if (!e) return !1;
        if (!(e && e.page && e.landing_page && e.previous_page)) return !1;
        if (!e.tab_id) return !1;
        if (!e.expire || Date.now() > e.expire) return !1;
        if (e.expire > Date.now() + 18e5) return !1;
        if (t) {
            if (void 0 !== e.referrer_domain) {
                var a = function() {
                    try {
                        var e = new URL(document.referrer).hostname;
                        return n.indexOf(e) > -1 ? "poki" : e
                    } catch (e) {}
                    return ""
                }();
                if ("poki" !== a && "authorize.roblox.com" !== a && "accounts.google.com" !== a && a !== e.referrer_domain) return !1
            }
            var o = new URLSearchParams(window.location.search);
            if (["gclid", "msclkid", "yclid", "ttclid", "fbclid", "utm_campaign", "campaign", "adgroup", "creative", "utm_term"].some((function(e) {
                    return o.has(e)
                })) || "web_app_manifest" === o.get("utm_source") || "bing" === o.get("utm_source") || "cpc" === o.get("utm_medium") || "rtb-cpm" === o.get("utm_medium")) return !1
        }
        return !0
    }

    function i() {
        var e = null;
        o(window[window._pokiSessionGlobalName], !1) && (e = window[window._pokiSessionGlobalName]);
        try {
            var n = sessionStorage.getItem(a);
            if (n) {
                var i = JSON.parse(n);
                o(i, !0) && (!e || i.depth > e.depth) && (e = i)
            }
        } catch (e) {
            try {
                t(e, "getSession", sessionStorage.getItem(a))
            } catch (n) {
                t(e, "getSession", n)
            }
        }
        return e
    }

    function d(e) {
        try {
            var n = i();
            if (!n) return;
            e(n);
            var o = JSON.stringify(n);
            try {
                sessionStorage.setItem(a, o)
            } catch (e) {}
            window[window._pokiSessionGlobalName] = n,
                function(e, t) {
                    document.cookie = "".concat(e, "=").concat(t, "; path=/; samesite=lax; max-age=").concat(Math.min(15552e3, 15552e3))
                }(a, o)
        } catch (e) {
            t(e, "updateSessionProperties")
        }
    }
    const r = {};
    if (window ? .visualViewport) {
        const {
            width: e,
            height: t
        } = window.visualViewport;
        r.size = `${Math.round(e)}x${Math.round(t)}`
    } else r.size = `${window?.innerWidth}x${window?.innerHeight}`;
    let l = null,
        c = !1;

    function s(e) {
        if (l = 0, e ? .purpose ? .consents)
            for (let t = 1; t <= 10; t++) e.purpose.consents[t] && (l |= 1 << t)
    }

    function u() {
        window.__tcfapi && !c && (window.__tcfapi("addEventListener", 2, ((e, t) => {
            !t || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || s(e)
        })), window.__tcfapi("getTCData", 2, ((e, t) => {
            t && s(e)
        })), c = !0)
    }
    u();
    const p = {
        action: "a",
        browser_size: "bs",
        category: "c",
        connect: "co",
        connection_type: "ct",
        count: "cn",
        cpus: "cu",
        data: "d",
        depth: "de",
        dns: "dn",
        dom_complete: "dc",
        domain: "do",
        experiment: "ex",
        first_byte: "fb",
        flash_version: "f",
        game_id: "gid",
        game_version_id: "vid",
        has_adblock: "ha",
        hash: "h",
        id: "id",
        insert_id: "ii",
        interaction: "i",
        is_new: "in",
        key: "k",
        label: "l",
        landing_page: "lp",
        language: "la",
        last_byte: "lb",
        message: "m",
        name: "n",
        nav: "n",
        page: "p",
        pageview_id: "pvid",
        path: "pa",
        previous_page: "pp",
        protocol: "pr",
        query_params: "qp",
        referrer: "r",
        screen_orientation: "sor",
        screen_resolution: "sc",
        scroll_y: "sy",
        session: "s",
        site_id: "si",
        stack: "s",
        tab_id: "ti",
        tag_id: "t",
        tcf_purpose_consents: "tpc",
        time_on_page: "tp",
        time_on_previous_page: "tr",
        time_on_site: "ts",
        time_spa_load: "sl",
        timeout: "to",
        timestamp: "tt",
        timezone: "tz",
        transfer_size: "tr",
        type: "ty",
        user: "u",
        user_id: "ui",
        user_id_version: "uvv",
        user_id_valid_for: "uvi",
        value: "v",
        version: "ve"
    };

    function v(e) {
        return Object.keys(e).forEach((t => {
            if (!p[t]) return console.error(`unknown field ${t}`), void delete e[t];
            if (Array.isArray(e[t])) {
                if (0 === e[t].length) return void delete e[t];
                for (let a = 0; a < e[t].length; a++) e[t][a] = v(e[t][a])
            } else {
                if (null === e[t] || void 0 === e[t]) return void delete e[t];
                "object" == typeof e[t] && v(e[t])
            }
            const a = p[t];
            t !== a && (e[a] = e[t], delete e[t])
        })), e
    }
    let k = !1;
    const y = ["AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "ES", "EE", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "SE", "GB"];

    function g(e) {
        k = e
    }

    function m() {
        return (void 0 === window.pokiBingRemarketing || window.pokiBingRemarketing) && (window.pokiCountry && !y.includes(window.pokiCountry) || k)
    }

    function f() {
        return (void 0 === window.pokiGoogleRemarketing || window.pokiGoogleRemarketing) && (window.pokiCountry && !y.includes(window.pokiCountry) || k)
    }
    const w = "AW-962655633";

    function b() {
        if (window.gtagLoaded) return;
        window.gtagLoaded = !0, window.gtag("set", "allow_ad_personalization_signals", !0), window.gtag("set", "restricted_data_processing", !1), window.gtag("set", "linker", {
            accept_incoming: !0
        }), window.gtag("js", new Date);
        const e = f() ? "granted" : "denied";
        window.gtag("consent", "default", {
            ad_storage: e,
            ad_user_data: e,
            ad_personalization: e,
            analytics_storage: e
        }), window.gtag("config", w, {
            send_page_view: !1,
            conversion_linker: !0
        });
        const t = document.createElement("script");
        t.src = `https://www.googletagmanager.com/gtag/js?id=${w}`;
        const a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(t, a)
    }

    function A(e) {
        b();
        const t = e ? "granted" : "denied";
        window.gtag("consent", "update", {
            ad_storage: t,
            ad_user_data: t,
            ad_personalization: t,
            analytics_storage: t
        })
    }

    function h(e) {
        b(), window.gtag("event", "conversion", {
            send_to: `${w}/${e}`,
            value: 1,
            currency: "USD"
        })
    }

    function I() {
        return /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo|kaios)/i.test(navigator.userAgent)
    }

    function _() {
        return /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent)
    }

    function B() {
        window.uetq || (window.uetq = [], window.uetq.push("config", "tcf", {
            enabled: !0
        }), function(e, t, a, n, o) {
            var i, d, r;
            e[o] = e[o] || [], i = function() {
                var t = {
                    ti: "5066235"
                };
                t.q = e[o], e[o] = new UET(t), e[o].push("pageLoad")
            }, (d = t.createElement(a)).src = "//bat.bing.com/bat.js", d.async = 1, d.onload = d.onreadystatechange = function() {
                var e = this.readyState;
                e && "loaded" !== e && "complete" !== e || (i(), d.onload = d.onreadystatechange = null)
            }, (r = t.getElementsByTagName(a)[0]).parentNode.insertBefore(d, r)
        }(window, document, "script", 0, "uetq"))
    }
    window.gtag_enable_tcf_support = !0, window.dataLayer = window.dataLayer || [], window.gtagLoaded = !1, window.gtag = function() {
        dataLayer.push(arguments)
    };
    const D = 9e5;
    let S, T;

    function N(e) {
        const t = i();
        if (!t) return;
        S = performance.now(), T && clearInterval(T);
        const a = t.gameplayTotalTime || 0;
        a <= D && (T = setTimeout((() => {
            if (t.gclid && f() && (I() ? h("1RivCPGb38gBEJHrg8sD") : _() ? h("nA26CIzb3qQBEJHrg8sD") : h("Q-g4CKu_36QBEJHrg8sD")), m()) {
                B();
                let t = "desktop";
                I() ? t = "mobile" : _() && (t = "tablet");
                let a = !1;
                window.api && window.api.getAdblock && (a = window.api.getAdblock()), window.uetq.push("event", "15-minute-play-time", {
                    event_category: t,
                    event_label: e,
                    event_value: a ? 1 : 0
                })
            }
        }), D - a))
    }

    function C() {
        S && (d((e => {
            e.gameplayTotalTime = (e.gameplayTotalTime || 0) + (performance.now() - S)
        })), S = void 0), T && clearInterval(T)
    }
    window._pokiContextGlobalName = window._pokiContextGlobalName || "context";
    let P = !0;

    function E(e) {
        return "object" != typeof e ? [{
            key: "arg",
            value: JSON.stringify(e)
        }] : Object.keys(e).map((t => {
            if ("category" === t || "action" === t || "label" === t || "eventNoun" === t || "eventVerb" === t) return !1;
            let a = e[t];
            return "object" == typeof a && (a = JSON.stringify(a)), {
                key: t,
                value: a
            }
        })).filter((e => !!e))
    }

    function M(e) {
        const {
            position: t
        } = e.content.data;
        switch (t) {
            case "PP":
                return "preroll";
            case "PM":
                return "midroll";
            case "PR":
                return "rewarded";
            default:
                return `unknown-${t}`
        }
    }

    function R(e) {
        return e < 0 ? 0 : e < 30 ? Math.floor(e) : e < 60 ? 30 : e < 120 ? 60 : e < 300 ? 120 : e < 600 ? 300 : e < 1200 ? 600 : e < 1800 ? 1200 : 1800
    }
    window.addEventListener("visibilitychange", (() => {
        P = "visible" === document.visibilityState
    }));
    let H = !1;

    function G(e, a, n, o = "", r = [], l = {}) {
        const c = window[window._pokiContextGlobalName],
            {
                session: s,
                user: u
            } = c;
        if ("pageview" === a && !c.site.id && !window.pokiAllowPageview) return;
        const p = Math.max(Date.now() - s.page.start, 0),
            v = function() {
                try {
                    return !i()
                } catch (e) {
                    return t(e, "isSessionExpired"), !0
                }
            }();
        let k, y = 0;
        ("pageview" !== a || s.depth > 1) && (y = Math.max(Date.now() - s.landing_page.start, 0)), "pageview" === a && s.previous_page.start && (k = s.page.start - s.previous_page.start);
        let g, m = e.content ? .pokifordevs ? .game_id,
            f = e.content ? .pokifordevs ? .game_version_id;
        m || ({
            gameID: m
        } = e), f || (f = e.gameVersion), c.site.id || "pubhost" !== a || "initialized" !== n ? "pageview" !== a || H || (H = !0, ({
            referrer: g
        } = document), s.referrer && (g = s.referrer)) : ({
            referrer: g
        } = document);
        let w = 0;
        s.expire && (w = Math.ceil((s.expire - Date.now()) / 1e3)), v && "pageview" !== a || (l.interaction && d((function(e) {
            e.expire = Date.now() + 18e5
        })), window[window._pokiTrackerGlobalName].push({
            session: {
                id: s.id,
                depth: s.depth,
                count: s.count
            },
            user: {
                id: u.id,
                is_new: u.is_new,
                user_id_version: u.version,
                user_id_valid_for: u.ttl
            },
            page: {
                path: s.page.path,
                type: s.page.type,
                id: e.storeNoPageID ? void 0 : s.page.id,
                pageview_id: s.page.pageview_id
            },
            previous_page: {
                path: s.previous_page.path,
                type: s.previous_page.type,
                id: s.previous_page.id,
                pageview_id: s.previous_page.pageview_id
            },
            landing_page: {
                path: s.landing_page.path,
                type: s.landing_page.type,
                id: s.landing_page.id,
                pageview_id: s.landing_page.pageview_id
            },
            category: a,
            action: n,
            label: o,
            data: r,
            interaction: l.interaction,
            site_id: c.site.id,
            tag_id: c.tag,
            referrer: g,
            flash_version: c.flashVersion,
            time_on_site: y,
            time_spa_load: e.loadTime,
            time_on_page: p,
            time_on_previous_page: k,
            tab_id: s.tab_id,
            has_adblock: window.api ? .getAdblock ? .(),
            once_per_pageview: l.once_per_pageview,
            game_id: m || void 0,
            game_version_id: f || void 0,
            experiment: c.experiment,
            timeout: w
        }))
    }

    function L(e) {
        const a = window[window._pokiContextGlobalName],
            {
                event: n
            } = e,
            o = e.eventData || e.data || {};
        try {
            if ("sdk-message" === n)
                if ("pokiTrackingScreenDisplayAdImpression" === o.content.event) G(o, "ad", "displayImpression", o.content.data.platformAd ? "platform" : "ingame", [{
                    key: "opportunityId",
                    value: o.content.data.opportunityId
                }, {
                    key: "adUnitPath",
                    value: o.content.data.adUnitPath
                }, {
                    key: "prebidBid",
                    value: o.content.data.prebidBid
                }, {
                    key: "prebidBidder",
                    value: o.content.data.prebidBidder
                }, {
                    key: "prebidWon",
                    value: o.content.data.prebidWon || o.content.data.preBidWon
                }, {
                    key: "prebidSecondBid",
                    value: o.content.data.prebidSecondBid
                }, {
                    key: "prebidSecondBidder",
                    value: o.content.data.prebidSecondBidder
                }, {
                    key: "dfpIsBackfill",
                    value: o.content.data.dfpIsBackfill
                }, {
                    key: "dfpLineItemId",
                    value: o.content.data.dfpLineItemId
                }, {
                    key: "duringGameplay",
                    value: o.content.data.duringGameplay
                }, {
                    key: "houseAdId",
                    value: o.content.data.houseAdId
                }, {
                    key: "isEmpty",
                    value: o.content.data.isEmpty
                }, {
                    key: "adDomain",
                    value: o.content.data.adDomain
                }, {
                    key: "trigger",
                    value: o.content.data.refreshType
                }, {
                    key: "number",
                    value: o.content.data.refreshNumber
                }, {
                    key: "blocked",
                    value: o.content.data.blocked
                }]);
                else if ("pokiTrackingScreenDisplayAdRequested" === o.content.event) G(o, "ad", "displayRequest", o.content.data.platformAd ? "platform" : "ingame", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adUnitPath",
                value: o.content.data.adUnitPath
            }, {
                key: "duringGameplay",
                value: o.content.data.duringGameplay
            }, {
                key: "trigger",
                value: o.content.data.refreshType
            }, {
                key: "number",
                value: o.content.data.refreshNumber
            }, {
                key: "headerBiddingAllowed",
                value: o.content.data.headerBiddingAllowed
            }]);
            else if ("pokiTrackingScreenDisplayAdDestroy" !== o.content.event || o.content.data.platformAd)
                if ("pokiTrackingScreenDisplayAdDestroy" === o.content.event && o.content.data.platformAd) G(o, "platform", "destroyAd", "", [{
                    key: "opportunityId",
                    value: o.content.data.opportunityId
                }]);
                else if ("pokiTrackingScreenGameLoadingFinished" === o.content.event) G(o, "game", "loadingFinished", "", [{
                key: "time_on_page",
                value: o.content.data.now
            }, {
                key: "transferSize",
                value: o.content.data.transferSize
            }, {
                key: "trackers",
                value: o.content.data.trackers
            }, {
                key: "external_resources",
                value: o.content.data.external_resources
            }], {
                once_per_pageview: !0
            });
            else if ("pokiTrackingScreenGameplayStart" === o.content.event) G(o, "game", "play", "start", E(o.content.data), {
                interaction: !0
            }), N(a.page ? .content ? .game ? .id);
            else if ("pokiTrackingScreenGameplayStop" === o.content.event) C(), G(o, "game", "play", "stop", E(o.content.data), {
                interaction: !0
            });
            else if ("pokiTrackingAdsStatusError" === o.content.event) G(o, "ad", "error", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "waterfall",
                value: o.content.data.waterfall
            }]);
            else if ("pokiTrackingSdkStatusFailed" === o.content.event) G(o, "ad", "failed", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }]);
            else if ("pokiTrackingAdsStatusBuffering" === o.content.event) G(o, "ad", "videoBuffering", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsVideoError" === o.content.event) G(o, "ad", "videoError", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "message",
                value: o.content.data.message
            }, {
                key: "errorCode",
                value: o.content.data.errorCode
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }, {
                key: "creativeId",
                value: o.content.data.creativeId
            }, ...1 === o.content.data.waterfall ? [{
                key: "imaAdID",
                value: o.content.data.IMAAdID
            }, {
                key: "imaAdSystem",
                value: o.content.data.IMAAdSystem
            }, {
                key: "imaContentType",
                value: o.content.data.IMAContentType
            }, {
                key: "imaTitle",
                value: o.content.data.IMATitle
            }, {
                key: "imaUniversalAdIDRegistry",
                value: o.content.data.IMAUniversalAdIDRegistry
            }, {
                key: "imaUniversalAdIDValue",
                value: o.content.data.IMAUniversalAdIDValue
            }, {
                key: "imaUniversalAdIDs",
                value: o.content.data.IMAUniversalAdIDs
            }, {
                key: "imaWrapperIDs",
                value: o.content.data.IMAWrapperIDs
            }, {
                key: "hbPrebidLikelyWon",
                value: o.content.data.HBPrebidLikelyWon
            }, {
                key: "hbDetectedWinningBidder",
                value: o.content.data.HBDetectedWinningBidder
            }, {
                key: "hbPrebidWon",
                value: o.content.data.HBPrebidWon
            }, {
                key: "hbAdDomain",
                value: o.content.data.HBAdDomain
            }, {
                key: "hbBidder",
                value: o.content.data.HBBidder
            }, {
                key: "hbSource",
                value: o.content.data.HBSource
            }, {
                key: "hbAdId",
                value: o.content.data.HBAdId
            }, {
                key: "hbCreativeId",
                value: o.content.data.HBCreativeId
            }, {
                key: "apsBidder",
                value: o.content.data.APSBidder
            }] : [], ...o.content.data.HBVastXML ? [{
                key: "hbVastXML",
                value: o.content.data.HBVastXML
            }] : []]);
            else if ("pokiTrackingAdsVideoExtendedVideoError" === o.content.event) G(o, "ad", "videoExtendedError", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "message",
                value: o.content.data.message
            }, {
                key: "errorCode",
                value: o.content.data.errorCode
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }, {
                key: "creativeId",
                value: o.content.data.creativeId
            }, {
                key: "imaAdID",
                value: o.content.data.IMAAdID
            }, {
                key: "imaAdSystem",
                value: o.content.data.IMAAdSystem
            }, {
                key: "imaContentType",
                value: o.content.data.IMAContentType
            }, {
                key: "imaTitle",
                value: o.content.data.IMATitle
            }, {
                key: "imaUniversalAdIDRegistry",
                value: o.content.data.IMAUniversalAdIDRegistry
            }, {
                key: "imaUniversalAdIDValue",
                value: o.content.data.IMAUniversalAdIDValue
            }, {
                key: "imaUniversalAdIDs",
                value: o.content.data.IMAUniversalAdIDs
            }, {
                key: "imaWrapperIDs",
                value: o.content.data.IMAWrapperIDs
            }, {
                key: "hbPrebidLikelyWon",
                value: o.content.data.HBPrebidLikelyWon
            }, {
                key: "hbDetectedWinningBidder",
                value: o.content.data.HBDetectedWinningBidder
            }, {
                key: "hbPrebidWon",
                value: o.content.data.HBPrebidWon
            }, {
                key: "hbAdDomain",
                value: o.content.data.HBAdDomain
            }, {
                key: "hbBidder",
                value: o.content.data.HBBidder
            }, {
                key: "hbSource",
                value: o.content.data.HBSource
            }, {
                key: "hbAdId",
                value: o.content.data.HBAdId
            }, {
                key: "hbCreativeId",
                value: o.content.data.HBCreativeId
            }, {
                key: "apsBidder",
                value: o.content.data.APSBidder
            }, {
                key: "vastChain",
                value: o.content.data.vastChain
            }, {
                key: "vastResolved",
                value: o.content.data.vastResolved
            }, {
                key: "vastResolveErr",
                value: o.content.data.vastResolveErr
            }]);
            else if ("pokiTrackingAdsVideoLoaderError" === o.content.event) G(o, "ad", "videoLoaderError", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusPrebidRequested" === o.content.event) G(o, "ad", "videoPrebidRequested", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "blocked",
                value: o.content.data.blocked
            }]);
            else if ("pokiTrackingAdsStatusReady" === o.content.event) G(o, "ad", "videoReady", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusSkipped" === o.content.event) G(o, "ad", "videoSkipped", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }], {
                interaction: !0
            });
            else if ("pokiTrackingAdsVideoClicked" === o.content.event) G(o, "ad", "videoClicked", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }], {
                interaction: !0
            });
            else if ("pokiTrackingAdsStatusCompleted" === o.content.event) G(o, "ad", "videoCompleted", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusImpression" === o.content.event) {
                G(o, "ad", "videoImpression", M(o), [{
                    key: "waterfall",
                    value: o.content.data.waterfall
                }, {
                    key: "opportunityId",
                    value: o.content.data.opportunityId
                }, {
                    key: "adBreakId",
                    value: o.content.data.adBreakId
                }, {
                    key: "currentAdNumber",
                    value: o.content.data.currentAdNumber
                }, {
                    key: "totalAdAmount",
                    value: o.content.data.totalAdAmount
                }, {
                    key: "prebidBidder",
                    value: o.content.data.prebidBidder
                }, {
                    key: "prebidBid",
                    value: o.content.data.prebidBid
                }, {
                    key: "creativeId",
                    value: o.content.data.creativeId
                }, {
                    key: "adUnitPath",
                    value: o.content.data.adUnitPath
                }, {
                    key: "houseAdId",
                    value: o.content.data.houseAdId
                }, {
                    key: "adDomain",
                    value: o.content.data.adDomain
                }]);
                f() && window ? .gtag ? .("event", "conversion", {
                    send_to: "AW-962655633/FPkKCJ6c7KQBEJHrg8sD",
                    value: 0,
                    currency: "MXN"
                })
            } else if ("pokiTrackingAdsVideoPaused" === o.content.event) G(o, "ad", "videoPaused", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusRequested" === o.content.event) G(o, "ad", "videoRequest", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "adUnitPath",
                value: o.content.data.adUnitPath
            }, {
                key: "headerBiddingAllowed",
                value: o.content.data.headerBiddingAllowed
            }]);
            else if ("pokiTrackingAdsVideoResumed" === o.content.event) G(o, "ad", "videoResumed", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingAdsStatusStarted" === o.content.event) G(o, "ad", "videoStarted", M(o), [{
                key: "waterfall",
                value: o.content.data.waterfall
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }, {
                key: "duration",
                value: o.content.data.duration
            }, {
                key: "skip",
                value: o.content.data.skip
            }, {
                key: "prebidBidder",
                value: o.content.data.prebidBidder
            }, {
                key: "prebidBid",
                value: o.content.data.prebidBid
            }, {
                key: "creativeId",
                value: o.content.data.creativeId
            }, {
                key: "adUnitPath",
                value: o.content.data.adUnitPath
            }, {
                key: "houseAdId",
                value: o.content.data.houseAdId
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }, {
                key: "hbPrebidLikelyWon",
                value: o.content.data.HBPrebidLikelyWon
            }, {
                key: "hbDetectedWinningBidder",
                value: o.content.data.HBDetectedWinningBidder
            }, {
                key: "hbPrebidWon",
                value: o.content.data.HBPrebidWon
            }]);
            else if ("pokiTrackingRewardedWebRequest" === o.content.event) G(o, "ad", "rewardedWeb", "request", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebReady" === o.content.event) G(o, "ad", "rewardedWeb", "ready", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebImpression" === o.content.event) G(o, "ad", "rewardedWeb", "impression", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adUnitPath",
                value: o.content.data.adUnitPath
            }, {
                key: "bid",
                value: o.content.data.bid
            }, {
                key: "bidder",
                value: o.content.data.bidder
            }, {
                key: "prebidBidder",
                value: o.content.data.prebidBidder
            }, {
                key: "prebidWon",
                value: o.content.data.prebidWon || o.content.data.preBidWon
            }, {
                key: "adDomain",
                value: o.content.data.adDomain
            }]);
            else if ("pokiTrackingRewardedWebClosedGranted" === o.content.event) G(o, "ad", "rewardedWeb", "closedGranted", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebClosedDeclined" === o.content.event || "pokiTrackingRewardedWebclosedDeclined" === o.content.event) G(o, "ad", "rewardedWeb", "closedDeclined", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingRewardedWebEmpty" === o.content.event) G(o, "ad", "rewardedWeb", "empty", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("pokiTrackingScreenFirstRound" === o.content.event) {
                const e = f();
                if (G(o, "game", "play", "first", [{
                        key: "hasGoogleConsent",
                        value: e
                    }], {
                        interaction: !0,
                        once_per_pageview: !0
                    }), N(a.page ? .content ? .game ? .id), "GB" === a.geo) return;
                const t = a.page ? .content ? .game ? .id;
                let n = !1;
                if (window.api && window.api.getAdblock && (n = window.api.getAdblock()), m()) {
                    B();
                    let e = "desktop";
                    I() ? e = "mobile" : _() && (e = "tablet"), window.uetq.push("event", "game-play-first", {
                        event_category: e,
                        event_label: t,
                        event_value: n ? 1 : 0
                    }), n || window.uetq.push("event", "", {
                        ecomm_prodid: t,
                        ecomm_pagetype: "product"
                    })
                }
                e && (h("KzjDCPH3l6IBEJHrg8sD"), h("YAozCMbHmZQDEJHrg8sD"), I() ? (h("GcnkCL2-mZQDEJHrg8sD"), h("yoVJCODb6pMDEJHrg8sD")) : _() ? (h("LpAFCNHG6pMDEJHrg8sD"), h("NC5BCKnU6pMDEJHrg8sD")) : (h("tmXGCPitoJQDEJHrg8sD"), h("vjKvCO35q4cDEJHrg8sD"), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? h("AT-CCLLI3qQBEJHrg8sD") : h("XuGfCNXE3qQBEJHrg8sD")))
            } else if ("pokiTrackingScreenCommercialBreak" === o.content.event) G(o, "game", "commercialBreak", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }]);
            else if ("pokiTrackingScreenRewardedBreak" === o.content.event) G(o, "game", "rewardedBreak", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "adBreakId",
                value: o.content.data.adBreakId
            }, {
                key: "currentAdNumber",
                value: o.content.data.currentAdNumber
            }, {
                key: "totalAdAmount",
                value: o.content.data.totalAdAmount
            }].filter((e => void 0 !== e.value)), {
                interaction: !0
            });
            else if ("SaveGameMigrator" === o.type && "error" === o.content.event) G(o, "game", "saveGameMigrator", "error", [{
                key: "error",
                value: o.content.error
            }]);
            else if ("SaveGameMigrator" === o.type && "start" === o.content.event) G(o, "game", "saveGameMigrator", "start");
            else if ("SaveGameMigrator" === o.type && "timeout" === o.content.event) G(o, "game", "saveGameMigrator", "timeout");
            else if ("pokiTrackingSdkStatusInitialized" === o.content.event) G(o, "game", "sdkInitialized");
            else if ("pokiTrackingScreenDisplayAdRequest" !== o.content.event || o.content.data.platformAd)
                if ("pokiTrackingScreenDisplayAdRequest" === o.content.event && o.content.data.platformAd) G(o, "platform", "displayAd", "", [{
                    key: "opportunityId",
                    value: o.content.data.opportunityId
                }, {
                    key: "size",
                    value: o.content.data.size
                }]);
                else if ("pokiTrackingCustom" === o.content.event) G(o, o.content.data.category || o.content.data.eventNoun, o.content.data.action || o.content.data.eventVerb, "", E(o.content.data.eventData || {}));
            else if ("pokiTrackingScreenPlayerActive" === o.content.event) G(o, "game", "playerActive", "", [], {
                interaction: !0
            });
            else if ("pokiTrackingPlaytestShowModal" === o.content.event) G(o, "playtest", "showModal", "", [{
                key: "show",
                value: o.content.data.show
            }]);
            else if ("pokiTrackingPlaytestAccepted" === o.content.event) G(o, "playtest", "accepted", "", [], {
                interaction: !0
            });
            else if ("pokiTrackingPlaytestRejected" === o.content.event) G(o, "playtest", "rejected", "", [], {
                interaction: !0
            });
            else if ("pokiTrackingPlaytestNoCanvas" === o.content.event) G(o, "playtest", "noCanvas", "", []);
            else if ("pokiTrackingPlaytestStarting" === o.content.event) G(o, "playtest", "starting", "", []);
            else if ("pokiTrackingPlaytestClosed" === o.content.event) G(o, "playtest", "closed", "", [{
                key: "reason",
                value: o.content.data.reason
            }]);
            else if ("pokiTrackingPlaytestError" === o.content.event) G(o, "playtest", "error", "", [{
                key: "message",
                value: o.content.data.message
            }]);
            else if ("pokiTrackingAdsAYFailed" === o.content.event) G(o, "ay", "failed", "", [{
                key: "reason",
                value: o.content.data.reason
            }, {
                key: "ayMode",
                value: o.content.data.ayMode
            }, {
                key: "gptRejected",
                value: o.content.data.gptRejected
            }, {
                key: "imaRejected",
                value: o.content.data.imaRejected
            }, {
                key: "prebidRejected",
                value: o.content.data.prebidRejected
            }, {
                key: "a9Rejected",
                value: o.content.data.a9Rejected
            }, {
                key: "displayOnly",
                value: o.content.data.displayOnly
            }, {
                key: "fullStack",
                value: o.content.data.fullStack
            }]);
            else if ("pokiTrackingAdsDebugging" === o.content.event) {
                const {
                    category: e,
                    action: t,
                    label: a,
                    data: n
                } = o.content.data;
                if ("" === e || "" === t) return;
                G(o, e, t, a, [Object.entries(n).map((([e, t]) => ({
                    key: e,
                    value: t
                })))])
            } else "pokiTrackingAdsDisplayNotFilled" === o.content.event && G(o, "ad", "unfilled", "", [{
                key: "bidder",
                value: o.content.data.bidder
            }, {
                key: "cpm",
                value: o.content.data.cpm
            }, {
                key: "adUnitPath",
                value: o.content.data.adUnitPath
            }, {
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else G(o, "game", "displayAd", "", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }, {
                key: "size",
                value: o.content.data.size
            }]);
            else G(o, "game", "destroyAd", "ingame", [{
                key: "opportunityId",
                value: o.content.data.opportunityId
            }]);
            else if ("adslot-renderEnded" === n) G(o, "ad", "displayImpression", "platform", [{
                key: "trigger",
                value: o.refreshType
            }, {
                key: "adUnitPath",
                value: o.adUnitPath
            }, {
                key: "number",
                value: o.refreshNumber
            }, {
                key: "opportunityId",
                value: o.opportunityId
            }, {
                key: "prebidBid",
                value: o.prebidBid
            }, {
                key: "prebidBidder",
                value: o.prebidBidder
            }, {
                key: "prebidWon",
                value: o.prebidWon || o.preBidWon
            }, {
                key: "prebidSecondBid",
                value: o.prebidSecondBid
            }, {
                key: "prebidSecondBidder",
                value: o.prebidSecondBidder
            }, {
                key: "dfpIsBackfill",
                value: o.dfpIsBackfill
            }, {
                key: "dfpLineItemId",
                value: o.dfpLineItemId
            }, {
                key: "houseAdId",
                value: o.houseAdId
            }, {
                key: "isEmpty",
                value: o.isEmpty
            }, {
                key: "adDomain",
                value: o.adDomain
            }]);
            else if ("ads-adblocked" === n) G(o, "ad", "adblocked");
            else if ("ads-notFound" === n) G(o, "ad", "notFound", "platform", [{
                key: "event",
                value: o.event
            }, {
                key: "code",
                value: o.code
            }, {
                key: "refreshType",
                value: o.refreshType
            }]);
            else if ("ads-render" === n) G(o, "ad", "displayRequest", "platform", [{
                key: "trigger",
                value: o.refreshType
            }, {
                key: "adUnitPath",
                value: o.adUnitPath
            }, {
                key: "number",
                value: o.refreshNumber
            }, {
                key: "opportunityId",
                value: o.opportunityId
            }]);
            else if ("housead-click" === n) G(o, "ad", "houseAdClick", "platform", [{
                key: "houseAdId",
                value: o.houseAdId
            }]);
            else if ("consent-full" === n) g(!0), A(!0), G(o, "consent", "full"),
                function(e) {
                    if ("GB" !== e.geo) {
                        window._comscore = window._comscore || [], window._comscore.push({
                            c1: "2",
                            c2: "20061681"
                        });
                        var t = document.createElement("script");
                        t.src = "https://sb.scorecardresearch.com/cs/20061681/beacon.js";
                        var a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(t, a)
                    }
                }(a);
            else if ("consent-no" === n) g(!1), A(!1), G(o, "consent", "no");
            else if ("consent-noniab" === n) {
                const {
                    nonIABConsents: e
                } = o;
                G(o, "consent", "noniab", "", [{
                    key: "consents",
                    value: JSON.stringify(e)
                }])
            } else if ("consent-npa" === n) G(o, "consent", "npa");
            else if ("consent-unknown" === n) G(o, "consent", "unknown");
            else if ("consent-bootError" === n) G(o, "consent", "bootError");
            else if (n.startsWith("rating-")) G(o, "game", "rating", n.substr(13).toLowerCase(), [{
                key: "previous_vote",
                value: o.previousVote
            }], {
                interaction: !0
            });
            else if ("sdk-details" === n) G(o, "game", "sdkDetails", "", [{
                key: "version",
                value: o.version
            }], {
                once_per_pageview: !0
            });
            else if ("react-prehydrate" === n) {
                const e = [{
                    key: "bot.verified",
                    value: window.pokiBotVerified
                }, {
                    key: "bot.score",
                    value: window.pokiBotScore
                }, {
                    key: "playground",
                    value: o ? .playground
                }, {
                    key: "sdk",
                    value: o ? .sdk
                }, {
                    key: "ayMode",
                    value: o ? .ayMode
                }, {
                    key: "sessionRandom",
                    value: a.session.random
                }];
                void 0 !== o.isIPad && e.push({
                    key: "isIPad",
                    value: o.isIPad
                });
                const t = () => {
                    G(o, "page", "reactPrehydrate", a.page.type, e)
                };
                try {
                    navigator.cookieDeprecationLabel.getValue().then((t => {
                        t && e.push({
                            key: "cookieDeprecationLabel",
                            value: t
                        })
                    })).finally((() => {
                        t()
                    }))
                } catch (e) {
                    t()
                }
            } else if ("tile-click" === n) o.searchExpanded ? G(o, "search", "tileClick", a.page.type, [{
                key: "id",
                value: o.id
            }, {
                key: "type",
                value: o.type
            }, {
                key: "index",
                value: o.index
            }, {
                key: "path",
                value: o.path
            }, {
                key: "list",
                value: o.list
            }, {
                key: "terms",
                value: o.terms
            }, {
                key: "searchSessionId",
                value: o.searchSessionId
            }, {
                key: "panelSection",
                value: o.panelSection
            }], {
                interaction: !0
            }) : G(o, "page", "tileClick", a.page.type, [{
                key: "id",
                value: o.id
            }, {
                key: "type",
                value: o.type
            }, {
                key: "index",
                value: o.index
            }, {
                key: "path",
                value: o.path
            }, {
                key: "list",
                value: o.list
            }, {
                key: "thumbnail",
                value: o.image
            }], {
                interaction: !0
            });
            else if ("pubHost-initialized" === n) G(o, "pubhost", "initialized", "", [{
                key: "topOrigin",
                value: o.topOrigin
            }, {
                key: "bot.verified",
                value: o.bot ? .verified
            }, {
                key: "bot.score",
                value: o.bot ? .score
            }]);
            else if ("page-pulse" === n) {
                C(), N();
                const e = Math.floor((Date.now() - a.session.page.start) / 1e3),
                    t = function(e) {
                        return R(e)
                    }(e),
                    n = function(e) {
                        return R(e - 30)
                    }(e);
                if ((30 === t && n < 30 || 60 === t && n < 60 || 120 === t && n < 120 || 300 === t && n < 300 || 600 === t && n < 600 || 1200 === t && n < 1200 || 1800 === t && n < 1800) && G(o, "page", "timeSpent", `${t}s`, [{
                        key: "visible",
                        value: P ? "1" : "0"
                    }]), "GB" === a.geo) return;
                if (e >= 300 && e < 330) {
                    if (m() && "game" === a.page.type) {
                        B();
                        const e = a.page ? .content ? .game ? .id;
                        let t = !1;
                        window.api && window.api.getAdblock && (t = window.api.getAdblock());
                        let n = "desktop";
                        I() ? n = "mobile" : _() && (n = "tablet"), window.uetq.push("event", "page_timeSpent-300", {
                            event_category: n,
                            event_label: e,
                            event_value: t ? 1 : 0
                        })
                    }
                    "game" === a.page.type && f() && (i = a.user.id, r = a.page.id, b(), window.gtag("event", "page_view", {
                        send_to: w,
                        user_id: i,
                        value: 0,
                        items: [{
                            id: r,
                            google_business_vertical: "custom"
                        }]
                    }), h("2IEyCPmFmZQDEJHrg8sD"), I() ? h("AYEACNah6pMDEJHrg8sD") : _() ? h("y05mCNeWmZQDEJHrg8sD") : h("lsPJCLbOqYEBEJHrg8sD"))
                } else e >= 900 && e < 930 && "game" === a.page.type && f() && (I() ? h("t5VrCLXIlMkBEJHrg8sD") : _() ? h("WUfoCMSC5LkBEJHrg8sD") : h("Gh96CL-84MkBEJHrg8sD"))
            } else if ("appStoreButton-click" === n) G(o, "game", "appstoreClick", o.store, [], {
                interaction: !0
            });
            else if ("home-click" === n) G(o, "home", "click", a.page.type, [], {
                interaction: !0
            });
            else if ("logo-click" === n) G(o, "logo", "click", a.page.type, [], {
                interaction: !0
            });
            else if ("fullscreenButton-click" === n) G(o, "fullscreenButton", "click", "", [{
                key: "targetState",
                value: o.targetState
            }], {
                interaction: !0
            });
            else if ("page-pillClick" === n) G(o, "page", "pillClick", "", [], {
                interaction: !0
            });
            else if ("page-pillDrag" === n) G(o, "page", "pillDrag", "", [{
                key: "x",
                value: o.x
            }, {
                key: "y",
                value: o.y
            }], {
                interaction: !0
            });
            else if ("page-autoRedirectClick" === n) G(o, "page", "autoRedirect", "click", [], {
                interaction: !0
            });
            else if ("searchPanel-close" === n) G(o, "searchPanel", "close", a.page.type, [{
                key: "searchSessionId",
                value: o.searchSessionId
            }], {
                interaction: !0
            });
            else if ("searchPanel-open" === n) G(o, "searchPanel", "open", a.page.type, [{
                key: "searchSessionId",
                value: o.searchSessionId
            }], {
                interaction: !0
            });
            else if ("game-launch" === n) G(o, "game", "launch", "", [], {
                interaction: !0
            });
            else if ("page-view" !== n && "pageview" !== n || 0 === o.counter) {
                const {
                    category: t,
                    action: n,
                    options: i
                } = e;
                let {
                    label: d
                } = e;
                i ? .pageTypeAsLabel && (d = a.page.type), G(o, t, n, d, E(o), i)
            } else {
                const e = [];
                void 0 === o.counter && window.pokiBotDetected && e.push({
                        key: "bot",
                        value: window.pokiBotDetected
                    }), G(o, "pageview", "", "", e, {
                        interaction: !0
                    }), C(),
                    function(e, t) {
                        const a = new URLSearchParams(t).get(e);
                        return null === a ? "" : a
                    }("gclid", window.location.search) && d((e => {
                        e.gclid = !0
                    }))
            }
        } catch (e) {
            t(e, "gtm")
        }
        var i, r
    }
    const W = window;
    W._pokiTrackerGlobalName = W._pokiTrackerGlobalName || "tracker", W[W._pokiTrackerGlobalName] = W[W._pokiTrackerGlobalName] || [];
    const U = W[W._pokiTrackerGlobalName];
    for (U.uniqueEvents = {}, U.firstPageview = !0, U.installTCFHandler = u, U.push = function(e, a, n, o, i, d) {
            return r => {
                if ("function" != typeof r) try {
                    if (r.version = 7, !r.category) return;
                    if (r.once_per_pageview) {
                        const e = `${r.category}-${r.action||""}-${r.label||""}`;
                        if (a.uniqueEvents[e]) return;
                        a.uniqueEvents[e] = !0
                    }
                    if (delete r.once_per_pageview, "pageview" === r.category && (a.uniqueEvents = {}, r.query_params = e.location.search.substr(1), r.hash = e.location.hash.substr(1)), void 0 !== r.action && null !== r.action && (r.action = r.action.toString()), "" === r.action && delete r.action, void 0 !== r.label && null !== r.label && (r.label = r.label.toString()), "" === r.label && delete r.label, Array.isArray(r.data))
                        for (let e = 0; e < r.data.length; e++) void 0 !== r.data[e].value && null !== r.data[e].value && (r.data[e].value = r.data[e].value.toString());
                    else delete r.data;
                    if (r.cpus = e.navigator.hardwareConcurrency || 0, r.domain = e.location.hostname, r.protocol = e.location.protocol.substr(0, e.location.protocol.length - 1), r.scroll_y = e.scrollY, r.timezone = (new Date).getTimezoneOffset(), r.timestamp = Date.now(), r.tcf_purpose_consents = d(), e.navigator.connection && e.navigator.connection.effectiveType && (r.connection_type = e.navigator.connection.effectiveType), r.user && (r.user.language = e.navigator.language), r.screen_resolution = e.screen.width + "x" + e.screen.height, r.screen_orientation = e.screen ? .orientation ? .type, r.browser_size = i.size, "pageview" === r.category && a.firstPageview && e.performance && e.performance.getEntriesByType) try {
                        const t = e.performance.getEntriesByType("navigation");
                        if (t.length > 0) {
                            const e = t[0];
                            r.nav = {
                                connect: Math.round(e.connectEnd - e.connectStart),
                                dns: Math.round(e.domainLookupEnd - e.domainLookupStart),
                                dom_complete: Math.round(e.domComplete),
                                first_byte: Math.round(e.responseStart - e.requestStart),
                                last_byte: Math.round(e.responseEnd - e.requestStart),
                                transfer_size: e.transferSize
                            }
                        }
                    } catch (e) {}
                    "pageview" === r.category && (a.firstPageview = !1), r.insert_id = o(), r = v(r), n("https://t.poki.io/t", JSON.stringify(r))
                } catch (e) {
                    t(e, "push")
                } else r()
            }
        }(W, U, e, (function() {
            for (var e = Math.floor(Date.now() / 1e3), t = "", a = 0; a < 4; a++) t = String.fromCharCode(255 & e) + t, e >>= 8;
            if (window.crypto && crypto.getRandomValues && Uint32Array) {
                var n = new Uint32Array(12);
                crypto.getRandomValues(n);
                for (var o = 0; o < 12; o++) t += String.fromCharCode(255 & n[o])
            } else
                for (var i = 0; i < 12; i++) t += String.fromCharCode(Math.floor(256 * Math.random()));
            return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
        }), r, (function() {
            return l
        })); U.length > 0;) U.push(U.shift());
    ! function() {
        for (window.pokiGTM = window.pokiGTM || [], window.pokiGTM.push = L, window.pokiGTM.push({
                event: "pageview",
                eventData: {}
            }); window.pokiGTM.length > 0;) window.pokiGTM.push(window.pokiGTM.shift())
    }()
}();