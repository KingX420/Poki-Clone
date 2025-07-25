try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "ebb15428-d7ea-41ca-b28c-adfd2e35441d", t._sentryDebugIdIdentifier = "sentry-dbid-ebb15428-d7ea-41ca-b28c-adfd2e35441d")
} catch (t) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6164], {
        59328: (t, e, s) => {
            s.d(e, {
                Vu: () => o,
                fj: () => r,
                qO: () => a
            });
            var i = s(44910),
                n = s(90519);

            function r(t) {
                const e = (0, n.zf)(),
                    s = {
                        sid: (0, i.eJ)(),
                        init: !0,
                        timestamp: e,
                        started: e,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: () => function(t) {
                            return {
                                sid: `${t.sid}`,
                                init: t.init,
                                started: new Date(1e3 * t.started).toISOString(),
                                timestamp: new Date(1e3 * t.timestamp).toISOString(),
                                status: t.status,
                                errors: t.errors,
                                did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                                duration: t.duration,
                                abnormal_mechanism: t.abnormal_mechanism,
                                attrs: {
                                    release: t.release,
                                    environment: t.environment,
                                    ip_address: t.ipAddress,
                                    user_agent: t.userAgent
                                }
                            }
                        }(s)
                    };
                return t && a(s, t), s
            }

            function a(t, e = {}) {
                if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, n.zf)(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, i.eJ)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
                else if ("number" == typeof e.duration) t.duration = e.duration;
                else {
                    const e = t.timestamp - t.started;
                    t.duration = e >= 0 ? e : 0
                }
                e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
            }

            function o(t, e) {
                let s = {};
                e ? s = {
                    status: e
                } : "ok" === t.status && (s = {
                    status: "exited"
                }), a(t, s)
            }
        },
        74611: (t, e, s) => {
            s.d(e, {
                E1: () => c,
                JD: () => a,
                Lc: () => p,
                Le: () => _,
                Sn: () => d,
                fs: () => o,
                i_: () => i,
                jG: () => u,
                sy: () => n,
                uT: () => r,
                xc: () => h
            });
            const i = "sentry.source",
                n = "sentry.sample_rate",
                r = "sentry.op",
                a = "sentry.origin",
                o = "sentry.idle_span_finish_reason",
                d = "sentry.measurement_unit",
                h = "sentry.measurement_value",
                _ = "sentry.custom_span_name",
                c = "sentry.profile_id",
                u = "sentry.exclusive_time",
                p = "sentry.link.type"
        },
        77468: (t, e, s) => {
            s.d(e, {
                J: () => a
            });
            var i = s(57968),
                n = s(26674),
                r = s(5602);

            function a(t, e) {
                !0 === e.debug && (n.T ? r.vF.enable() : (0, r.pq)((() => {
                    console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                })));
                (0, i.o5)().update(e.initialScope);
                const s = new t(e);
                return function(t) {
                    (0, i.o5)().setClient(t)
                }(s), s.init(), s
            }
        },
        94988: (t, e, s) => {
            s.d(e, {
                H: () => u
            });
            var i = s(59328),
                n = s(45734),
                r = s(70333),
                a = s(30690),
                o = s(5602),
                d = s(44910),
                h = s(30243),
                _ = s(2323),
                c = s(90519);
            class u {
                constructor() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
                        traceId: (0, h.e)(),
                        sampleRand: Math.random()
                    }
                }
                clone() {
                    const t = new u;
                    return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags
                    }, t._extra = { ...this._extra
                    }, t._contexts = { ...this._contexts
                    }, this._contexts.flags && (t._contexts.flags = {
                        values: [...this._contexts.flags.values]
                    }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
                    }, t._propagationContext = { ...this._propagationContext
                    }, t._client = this._client, t._lastEventId = this._lastEventId, (0, r.r)(t, (0, r.f)(this)), t
                }
                setClient(t) {
                    this._client = t
                }
                setLastEventId(t) {
                    this._lastEventId = t
                }
                getClient() {
                    return this._client
                }
                lastEventId() {
                    return this._lastEventId
                }
                addScopeListener(t) {
                    this._scopeListeners.push(t)
                }
                addEventProcessor(t) {
                    return this._eventProcessors.push(t), this
                }
                setUser(t) {
                    return this._user = t || {
                        email: void 0,
                        id: void 0,
                        ip_address: void 0,
                        username: void 0
                    }, this._session && (0, i.qO)(this._session, {
                        user: t
                    }), this._notifyScopeListeners(), this
                }
                getUser() {
                    return this._user
                }
                setTags(t) {
                    return this._tags = { ...this._tags,
                        ...t
                    }, this._notifyScopeListeners(), this
                }
                setTag(t, e) {
                    return this._tags = { ...this._tags,
                        [t]: e
                    }, this._notifyScopeListeners(), this
                }
                setExtras(t) {
                    return this._extra = { ...this._extra,
                        ...t
                    }, this._notifyScopeListeners(), this
                }
                setExtra(t, e) {
                    return this._extra = { ...this._extra,
                        [t]: e
                    }, this._notifyScopeListeners(), this
                }
                setFingerprint(t) {
                    return this._fingerprint = t, this._notifyScopeListeners(), this
                }
                setLevel(t) {
                    return this._level = t, this._notifyScopeListeners(), this
                }
                setTransactionName(t) {
                    return this._transactionName = t, this._notifyScopeListeners(), this
                }
                setContext(t, e) {
                    return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
                }
                setSession(t) {
                    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                }
                getSession() {
                    return this._session
                }
                update(t) {
                    if (!t) return this;
                    const e = "function" == typeof t ? t(this) : t,
                        s = e instanceof u ? e.getScopeData() : (0, a.Qd)(e) ? t : void 0,
                        {
                            tags: i,
                            extra: n,
                            user: r,
                            contexts: o,
                            level: d,
                            fingerprint: h = [],
                            propagationContext: _
                        } = s || {};
                    return this._tags = { ...this._tags,
                        ...i
                    }, this._extra = { ...this._extra,
                        ...n
                    }, this._contexts = { ...this._contexts,
                        ...o
                    }, r && Object.keys(r).length && (this._user = r), d && (this._level = d), h.length && (this._fingerprint = h), _ && (this._propagationContext = _), this
                }
                clear() {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, (0, r.r)(this, void 0), this._attachments = [], this.setPropagationContext({
                        traceId: (0, h.e)(),
                        sampleRand: Math.random()
                    }), this._notifyScopeListeners(), this
                }
                addBreadcrumb(t, e) {
                    const s = "number" == typeof e ? e : 100;
                    if (s <= 0) return this;
                    const i = {
                        timestamp: (0, c.lu)(),
                        ...t,
                        message: t.message ? (0, _.xv)(t.message, 2048) : t.message
                    };
                    return this._breadcrumbs.push(i), this._breadcrumbs.length > s && (this._breadcrumbs = this._breadcrumbs.slice(-s), this._client ? .recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this
                }
                getLastBreadcrumb() {
                    return this._breadcrumbs[this._breadcrumbs.length - 1]
                }
                clearBreadcrumbs() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }
                addAttachment(t) {
                    return this._attachments.push(t), this
                }
                clearAttachments() {
                    return this._attachments = [], this
                }
                getScopeData() {
                    return {
                        breadcrumbs: this._breadcrumbs,
                        attachments: this._attachments,
                        contexts: this._contexts,
                        tags: this._tags,
                        extra: this._extra,
                        user: this._user,
                        level: this._level,
                        fingerprint: this._fingerprint || [],
                        eventProcessors: this._eventProcessors,
                        propagationContext: this._propagationContext,
                        sdkProcessingMetadata: this._sdkProcessingMetadata,
                        transactionName: this._transactionName,
                        span: (0, r.f)(this)
                    }
                }
                setSDKProcessingMetadata(t) {
                    return this._sdkProcessingMetadata = (0, n.h)(this._sdkProcessingMetadata, t, 2), this
                }
                setPropagationContext(t) {
                    return this._propagationContext = t, this
                }
                getPropagationContext() {
                    return this._propagationContext
                }
                captureException(t, e) {
                    const s = e ? .event_id || (0, d.eJ)();
                    if (!this._client) return o.vF.warn("No client configured on scope - will not capture exception!"), s;
                    const i = new Error("Sentry syntheticException");
                    return this._client.captureException(t, {
                        originalException: t,
                        syntheticException: i,
                        ...e,
                        event_id: s
                    }, this), s
                }
                captureMessage(t, e, s) {
                    const i = s ? .event_id || (0, d.eJ)();
                    if (!this._client) return o.vF.warn("No client configured on scope - will not capture message!"), i;
                    const n = new Error(t);
                    return this._client.captureMessage(t, e, {
                        originalException: t,
                        syntheticException: n,
                        ...s,
                        event_id: i
                    }, this), i
                }
                captureEvent(t, e) {
                    const s = e ? .event_id || (0, d.eJ)();
                    return this._client ? (this._client.captureEvent(t, { ...e,
                        event_id: s
                    }, this), s) : (o.vF.warn("No client configured on scope - will not capture event!"), s)
                }
                _notifyScopeListeners() {
                    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t => {
                        t(this)
                    })), this._notifyingListeners = !1)
                }
            }
        }
    }
]);
//# sourceMappingURL=client~vendors-baaf2ba8~0cffadc04318e2ed5455.js.map