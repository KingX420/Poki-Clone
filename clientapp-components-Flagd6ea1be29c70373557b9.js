try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "f692ee05-c02b-446d-9b1e-1a7f5dd88878", e._sentryDebugIdIdentifier = "sentry-dbid-f692ee05-c02b-446d-9b1e-1a7f5dd88878")
} catch (e) {}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "75bcf2398d3fb2a92281989653952fcadc61081a"
};
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2179, 5824], {
        10736: (e, r, a) => {
            a.r(r), a.d(r, {
                flag: () => n
            });
            var n = "XSNFGPMkRRGEHV0Y8QG1"
        },
        76605: (e, r, a) => {
            a.r(r), a.d(r, {
                default: () => c
            });
            var n = a(34164),
                s = a(10736),
                t = a(95901);
            const u = e => {
                switch (e) {
                    case "ar":
                        return "Saudi Arabia";
                    case "bn":
                        return "Bangladesh";
                    case "bg":
                        return "Bulgaria";
                    case "ca":
                        return "Canada";
                    case "cs":
                        return "Czech Republic";
                    case "da":
                        return "Denmark";
                    case "de_at":
                        return "Austria";
                    case "de_ch":
                    case "fr_ch":
                        return "Switzerland";
                    case "de":
                        return "Germany";
                    case "el":
                        return "Greece";
                    case "en":
                        return "USA";
                    case "en_gb":
                        return "United Kingdom";
                    case "en_au":
                        return "Australia";
                    case "es":
                        return "Spain";
                    case "es_ar":
                        return "Argentina";
                    case "es_cl":
                        return "Chile";
                    case "es_co":
                        return "Colombia";
                    case "es_cr":
                        return "Costa Rica";
                    case "es_do":
                        return "Dominican Republic";
                    case "es_ec":
                        return "Ecuador";
                    case "es_mx":
                        return "Mexico";
                    case "es_pa":
                        return "Panama";
                    case "es_pe":
                        return "Peru";
                    case "es_uy":
                        return "Uruguay";
                    case "es_ve":
                        return "Venezuela";
                    case "fi":
                        return "Finland";
                    case "fr":
                        return "France";
                    case "hi":
                        return "India";
                    case "hu":
                        return "Hungary";
                    case "he":
                        return "Israel";
                    case "id":
                        return "Indonesia";
                    case "it":
                        return "Italy";
                    case "ja":
                        return "Japan";
                    case "ko":
                        return "South Korea";
                    case "nl_be":
                        return "Belgium";
                    case "nl":
                        return "Netherlands";
                    case "no":
                        return "Norway";
                    case "ms":
                        return "Malaysia";
                    case "pl":
                        return "Poland";
                    case "pt_br":
                        return "Brazil";
                    case "ro":
                        return "Romania";
                    case "pt":
                        return "Portugal";
                    case "ru_by":
                        return "Belarus";
                    case "uk":
                        return "Ukraine";
                    case "ru":
                        return "Russia";
                    case "sk":
                        return "Slovakia";
                    case "sv":
                        return "Sweden";
                    case "sr":
                        return "Serbia";
                    case "th":
                        return "Thailand";
                    case "tl":
                        return "Philippines";
                    case "tr":
                        return "Turkey";
                    case "uz":
                        return "Uzbekistan";
                    case "vi":
                        return "Vietnam";
                    case "zh":
                        return "China";
                    default:
                        return null
                }
            };

            function c({
                flag: e,
                className: r
            }) {
                const a = (0, n.$)(s.flag, r),
                    c = u(e),
                    i = c ? .replace(/ /g, "-").toLowerCase(),
                    l = i ? `https://a.poki-cdn.com/flags/${i}.svg` : "https://a.poki-cdn.com/flags/global.svg";
                return (0, t.Y)("img", {
                    src: l,
                    className: a,
                    alt: c || "",
                    loading: "lazy",
                    decoding: "async"
                })
            }
        }
    }
]);
//# sourceMappingURL=client~app-components-Flag~d6ea1be29c70373557b9.js.map