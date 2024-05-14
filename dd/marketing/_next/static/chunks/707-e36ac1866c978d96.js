"use strict";
(self.webpackChunk_N_E_ = self.webpackChunk_N_E_ || []).push([
  [707],
  {
    71453: function (t, e, n) {
      let i;
      n.d(e, {
        oR: function () {
          return s;
        },
        E3: function () {
          return u;
        },
        U2: function () {
          return g;
        },
        t8: function () {
          return m;
        },
      });
      var a = n(75969),
        r = n(43354);
      let o = {
        [r.in.trace]: "#444444;",
        [r.in.debug]: "#2767cf;",
        [r.in.info]: "#27cf43;",
        [r.in.warn]: "#cf8627;",
        [r.in.error]: "#cf2727;",
      };
      class c extends r.PU {
        static getLogger(t) {
          let e = t || "logger";
          return this.globalSettings.getLogger(e) || new c(e);
        }
        static setContext(t) {
          i = t;
        }
        large(t) {
          for (
            var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1;
            i < e;
            i++
          )
            n[i - 1] = arguments[i];
          return this.baseLogger.log(
            "%c".concat(t),
            "font-size: 20px",
            "\n",
            ...n
          );
        }
        log(t, e, n, a) {
          let c = t === r.in.trace,
            l = o[t],
            s = new Date().toISOString().slice(0, 19).split("T").join(" "),
            u = r.in[t].toUpperCase(),
            { err: g, ...m } = a || {},
            d =
              Object.keys(m).length > 0
                ? "\n".concat(this.safelyStringify(m))
                : "",
            h = g && g.stack ? "\n\n".concat(g.stack) : "",
            f = g ? "\n\n".concat(this.safelyStringify(g)) : "",
            p = "%c"
              .concat(u, " %c[")
              .concat(s, "] %c")
              .concat(i ? "[".concat(i, "]") : "", "%c(")
              .concat(e, ") %c")
              .concat(n, "%c")
              .concat(d)
              .concat(h)
              .concat(f);
          return this.baseLogger.log(
            p,
            "color:".concat(c ? o[r.in.trace] : l),
            "color:".concat(c ? o[r.in.trace] : "#666666;"),
            "color:".concat(c ? o[r.in.trace] : "#cccccc;"),
            "color:".concat(c ? o[r.in.trace] : "#999999;"),
            "color:".concat(c ? o[r.in.trace] : "#ffffff;"),
            "color:".concat("#cccccc;")
          );
        }
        constructor(...t) {
          super(...t), (this.baseLogger = console);
        }
      }
      c.getLogger("helpers.cache");
      let l = "persist-v1.3",
        s = "".concat(l, "::debug"),
        u = "".concat(l, "::last-path");
      function g(t) {
        let { withTimestamp: e = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = localStorage.getItem(t);
        return null === n ? null : e ? JSON.parse(n) : JSON.parse(n).value;
      }
      function m(t, e) {
        localStorage.setItem(
          t,
          JSON.stringify({ timestamp: Date.now(), value: e })
        );
      }
      new a.Z();
    },
    43354: function (t, e, n) {
      var i, a, r, o;
      n.d(e, {
        PU: function () {
          return s;
        },
        in: function () {
          return a;
        },
        gq: function () {
          return u;
        },
      }),
        ((r = i || (i = {})).CODE = "CODE"),
        (r.MISSING_DATA = "MISSING_DATA"),
        (r.PROVIDER = "PROVIDER"),
        (r.INFRASTRUCTURE = "INFRASTRUCTURE"),
        ((o = a || (a = {}))[(o.trace = 0)] = "trace"),
        (o[(o.debug = 1)] = "debug"),
        (o[(o.info = 2)] = "info"),
        (o[(o.warn = 3)] = "warn"),
        (o[(o.error = 4)] = "error");
      class c {
        setGlobalConfig(t, e) {
          t && this.setLevel(t),
            (this.moduleFilter = e || "*"),
            this.setModule(this.moduleFilter),
            this.allLogger.forEach((t) => {
              t.setIsModuleEnabled();
            });
        }
        addLogger(t) {
          this.allLogger.push(t);
        }
        getLogger(t) {
          return this.allLogger.find((e) => e.moduleName === t);
        }
        setLevel(t) {
          if (!Object.keys(a).includes(t))
            throw Error(
              "Level '"
                .concat(t, "' is not a known log level (")
                .concat(Object.keys(a), ")")
            );
          this.level = a[t];
        }
        setModule(t) {
          let e = t.split(",").map((t) => t.trim());
          (this.logAll = e.includes("*")),
            (this.whitelist = new Map(
              e.filter((t) => !t.startsWith("!")).map((t) => [t, !0])
            )),
            (this.blacklist = new Map(
              e.filter((t) => t.startsWith("!")).map((t) => [t.slice(1), !0])
            ));
        }
        constructor() {
          (this.level = 1),
            (this.moduleFilter = "*"),
            (this.logAll = !0),
            (this.whitelist = new Map()),
            (this.blacklist = new Map()),
            (this.allLogger = []);
        }
      }
      let l = new c();
      class s {
        static get globalSettings() {
          return l;
        }
        static get level() {
          return l.level;
        }
        static get filter() {
          return l.moduleFilter;
        }
        setIsModuleEnabled() {
          let t = (t) => {
            let e = "";
            for (let n of this.moduleName.split("."))
              if (((e = e ? "".concat(e, ".").concat(n) : n), t.has(e)))
                return !0;
            return !1;
          };
          this.isModuleEnabled = l.logAll ? !t(l.blacklist) : t(l.whitelist);
        }
        trace(t) {
          if (!this.isEnabled(0)) return;
          let [e, n] = this.buildMessage(t);
          return this.log(0, this.moduleName, e, n);
        }
        debug(t) {
          if (!this.isEnabled(1)) return;
          let [e, n] = this.buildMessage(t);
          return this.log(1, this.moduleName, e, n);
        }
        info(t) {
          if (!this.isEnabled(2)) return;
          let [e, n] = this.buildMessage(t);
          return this.log(2, this.moduleName, e, n);
        }
        warn(t) {
          if (!this.isEnabled(3)) return;
          let [e, n] = this.buildMessage(t);
          return this.log(3, this.moduleName, e, n);
        }
        error(t) {
          if (!this.isEnabled(4)) return;
          let [e, n] = this.buildMessage(t);
          return (
            n.code || (n.code = i.CODE), this.log(4, this.moduleName, e, n)
          );
        }
        isEnabled(t) {
          return (
            !![3, 4].includes(t) || (!(l.level > t) && !!this.isModuleEnabled)
          );
        }
        safelyStringify(t) {
          try {
            return JSON.stringify(t, null, 2);
          } catch (t) {
            return "<failed to stringify for logging>: ".concat(t.message);
          }
        }
        buildMessage(t) {
          if ("string" == typeof t) return [t, null];
          let { msg: e, ...n } = t;
          return [e || "<empty log>", n];
        }
        constructor(t, e = !0) {
          (this.moduleName = t),
            (this.isModuleEnabled = e),
            (this.ErrorCode = i),
            l.addLogger(this),
            this.setIsModuleEnabled();
        }
      }
      function u() {
        let t = (t) => (t) => {};
        return {
          trace: t("trace"),
          debug: t("debug"),
          info: t("info"),
          warn: t("warn"),
          error: t("error"),
          log: t("log"),
        };
      }
      s.setGlobalConfig = l.setGlobalConfig.bind(l);
    },
    3756: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = n(52322),
        a = n(39097),
        r = n.n(a),
        o = n(5632);
      n(2784);
      var c = n(23789),
        l = n(874),
        s = n(71453);
      function u(t) {
        let e = (0, o.useRouter)();
        return (0, i.jsx)(r(), {
          ...t,
          onClick: (n) => {
            var i;
            null == t ||
              null === (i = t.onClick) ||
              void 0 === i ||
              i.call(t, n),
              localStorage.setItem(s.E3, e.asPath);
          },
          href:
            c.KF === c.qA.dev
              ? t.href
              : "".concat(l.Z.get("url")).concat(t.href),
          children: t.children,
        });
      }
    },
    1470: function (t, e, n) {
      var i = n(52322),
        a = n(97729),
        r = n.n(a);
      n(2784);
      let o = n(874).Z.get("url");
      e.Z = (t) => {
        let {
            children: e,
            dateforSEO: n,
            image: a,
            pathname: c,
            title: l,
            themeColor: s = "#0B0B0F",
            description:
              u = "Explore a new era of effortless financial research at your fingertips. Fey is meticulously crafted, empowering the modern investor with real-time market intelligence.",
          } = t,
          g = {
            siteUrl: o,
            title: l,
            description: u,
            name: "Fey",
            social: [
              { name: "twitter", url: "https://twitter.com/narative" },
              { name: "github", url: "https://github.com/narative" },
              {
                name: "linkedin",
                url: "https://www.linkedin.com/company/narative",
              },
            ],
          },
          m = g.social.find((t) => "twitter" === t.name),
          d = g.social.find((t) => "github" === t.name),
          h = g.social.find((t) => "linkedin" === t.name),
          f = g.siteUrl + c;
        ["ctfassets", "cdn.sanity.io", "firebase", "googleapis"].some((t) =>
          null == a ? void 0 : a.includes(t)
        ) || (a = g.siteUrl + a);
        let p =
          '{\n    "@context": "https://schema.org",\n    "@graph": [\n      {\n        "@type": "Organization",\n        "@id": "'
            .concat(g.siteUrl, '/#organization",\n        "name": "')
            .concat(g.title, '",\n        "url": "')
            .concat(g.siteUrl, '",\n        "sameAs": [\n          "')
            .concat(m.url, '",\n          "')
            .concat(d.url, '",\n          "')
            .concat(
              h.url,
              '"\n        ],\n        "logo": {\n          "@type": "ImageObject",\n          "@id": "'
            )
            .concat(
              g.siteUrl,
              '/#logo",\n          "inLanguage": "en-US",\n          "url": "'
            )
            .concat(
              g.siteUrl,
              '/icons/icon-512x512.png",\n          "width": 512,\n          "height": 512,\n          "caption": "'
            )
            .concat(
              g.title,
              '"\n        },\n        "image": {\n          "@id": "'
            )
            .concat(
              g.siteUrl,
              '/#logo"\n        }\n      },\n      {\n        "@type": "WebSite",\n        "@id": "'
            )
            .concat(g.siteUrl, '/#website",\n        "url": "')
            .concat(g.siteUrl, '",\n        "name": "')
            .concat(g.name, '",\n        "description": "')
            .concat(
              g.description,
              '",\n        "publisher": {\n          "@id": "'
            )
            .concat(
              g.siteUrl,
              '/#organization"\n        },\n        "inLanguage": "en-US"\n      },\n      {\n        "@type": [\n          "WebPage"\n        ],\n        "@id": "'
            )
            .concat(f, '/#webpage",\n        "url": "')
            .concat(f, '",\n        "name": "')
            .concat(
              l || g.name,
              '",\n        "isPartOf": {\n          "@id": "'
            )
            .concat(
              g.siteUrl,
              '/#website"\n        },\n        "about": {\n          "@id": "'
            )
            .concat(
              g.siteUrl,
              '/#organization"\n        },\n        "description": "'
            )
            .concat(
              u || g.description,
              '",\n        "inLanguage": "en-US"\n      },\n      {\n        "@type": "BreadcrumbList",\n        "description": "Breadcrumbs list",\n        "itemListElement": [\n          {\n            "@type": "ListItem",\n            "item": "'
            )
            .concat(
              g.siteUrl,
              '",\n            "name": "Homepage",\n            "position": "1"\n          }\n        ],\n        "name": "Breadcrumbs"\n      }\n    ]\n  }\n'
            )
            .replace(/"[^"]+"|(\s)/gm, function (t, e) {
              return e ? "" : t;
            });
        return (0, i.jsxs)(r(), {
          children: [
            (0, i.jsx)("title", { children: g.title }),
            (0, i.jsx)("meta", { name: "description", content: u }),
            (0, i.jsx)("meta", { name: "image", content: "".concat(a) }),
            (0, i.jsx)("meta", { name: "theme-color", content: s }),
            (0, i.jsx)("meta", { name: "og:image", content: "".concat(a) }),
            (0, i.jsx)("meta", { name: "og:title", content: l || g.title }),
            (0, i.jsx)("meta", {
              name: "og:description",
              content: u || g.description,
            }),
            (0, i.jsx)("meta", { name: "og:url", content: f }),
            (0, i.jsx)("meta", { name: "og:site_name", content: g.name }),
            (0, i.jsx)("meta", { name: "og:type", content: "website" }),
            (0, i.jsx)("meta", {
              name: "twitter:image",
              content: "".concat(a),
            }),
            (0, i.jsx)("meta", {
              name: "twitter:title",
              content: l || g.title,
            }),
            (0, i.jsx)("meta", {
              name: "twitter:description",
              content: u || g.description,
            }),
            (0, i.jsx)("meta", { name: "twitter:site", content: g.name }),
            (0, i.jsx)("meta", { name: "twitter:creator", content: m.url }),
            (0, i.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, i.jsx)("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: { __html: p },
            }),
            e,
          ],
        });
      };
    },
  },
]);
