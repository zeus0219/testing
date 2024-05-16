(self.webpackChunk_N_E_ = self.webpackChunk_N_E_ || []).push([
  [792],
  {
    27466: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let i = r(43219),
        o = r(16794),
        n = r(52322),
        s = o._(r(2784)),
        a = i._(r(28316)),
        l = i._(r(52851)),
        u = r(23583),
        d = r(6951),
        c = r(86359);
      r(5356);
      let f = r(21051),
        p = i._(r(92168)),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/marketing/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, r, i, o, n) {
        let s = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== s &&
          ((e["data-loaded-src"] = s),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let i = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => i,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (i = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == i ? void 0 : i.current) && i.current(e);
              }
            }));
      }
      function h(e) {
        let [t, r] = s.version.split(".", 2),
          i = parseInt(t, 10),
          o = parseInt(r, 10);
        return i > 18 || (18 === i && o >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let b = (0, s.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: i,
          sizes: o,
          height: a,
          width: l,
          decoding: u,
          className: d,
          style: c,
          fetchPriority: f,
          placeholder: p,
          loading: g,
          unoptimized: b,
          fill: v,
          onLoadRef: y,
          onLoadingCompleteRef: w,
          setBlurComplete: S,
          setShowAltText: x,
          onLoad: _,
          onError: j,
          ...C
        } = e;
        return (0, n.jsx)("img", {
          ...C,
          ...h(f),
          loading: g,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": v ? "fill" : "1",
          className: d,
          style: c,
          sizes: o,
          srcSet: i,
          src: r,
          ref: (0, s.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (j && (e.src = e.src), e.complete && m(e, p, y, w, S, b));
            },
            [r, p, y, w, S, j, b, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, p, y, w, S, b);
          },
          onError: (e) => {
            x(!0), "empty" !== p && S(!0), j && j(e);
          },
        });
      });
      function v(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          i = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...h(r.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(r.src, i), null)
          : (0, n.jsx)(l.default, {
              children: (0, n.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...i },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let y = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(f.RouterContext),
          i = (0, s.useContext)(c.ImageConfigContext),
          o = (0, s.useMemo)(() => {
            let e = g || i || d.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [i]),
          { onLoad: a, onLoadingComplete: l } = e,
          m = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          m.current = a;
        }, [a]);
        let h = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
          h.current = l;
        }, [l]);
        let [y, w] = (0, s.useState)(!1),
          [S, x] = (0, s.useState)(!1),
          { props: _, meta: j } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: y,
            showAltText: S,
          });
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(b, {
              ..._,
              unoptimized: j.unoptimized,
              placeholder: j.placeholder,
              fill: j.fill,
              onLoadRef: m,
              onLoadingCompleteRef: h,
              setBlurComplete: w,
              setShowAltText: x,
              ref: t,
            }),
            j.priority
              ? (0, n.jsx)(v, { isAppRouter: !r, imgAttributes: _ })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    23583: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(5356);
      let i = r(89719),
        o = r(6951);
      function n(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var r;
        let a,
          l,
          u,
          {
            src: d,
            sizes: c,
            unoptimized: f = !1,
            priority: p = !1,
            loading: g,
            className: m,
            quality: h,
            width: b,
            height: v,
            fill: y = !1,
            style: w,
            onLoad: S,
            onLoadingComplete: x,
            placeholder: _ = "empty",
            blurDataURL: j,
            fetchPriority: C,
            layout: O,
            objectFit: k,
            objectPosition: z,
            lazyBoundary: P,
            lazyRoot: E,
            ...I
          } = e,
          { imgConf: R, showAltText: M, blurComplete: A, defaultLoader: N } = t,
          G = R || o.imageConfigDefault;
        if ("allSizes" in G) a = G;
        else {
          let e = [...G.deviceSizes, ...G.imageSizes].sort((e, t) => e - t),
            t = G.deviceSizes.sort((e, t) => e - t);
          a = { ...G, allSizes: e, deviceSizes: t };
        }
        let L = I.loader || N;
        delete I.loader, delete I.srcSet;
        let D = "__next_img_default" in L;
        if (D) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = L;
          L = (t) => {
            let { config: r, ...i } = t;
            return e(i);
          };
        }
        if (O) {
          "fill" === O && (y = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[O];
          t && !c && (c = t);
        }
        let W = "",
          $ = s(b),
          q = s(v);
        if ("object" == typeof (r = d) && (n(r) || void 0 !== r.src)) {
          let e = n(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (u = e.blurHeight),
            (j = j || e.blurDataURL),
            (W = e.src),
            !y)
          ) {
            if ($ || q) {
              if ($ && !q) {
                let t = $ / e.width;
                q = Math.round(e.height * t);
              } else if (!$ && q) {
                let t = q / e.height;
                $ = Math.round(e.width * t);
              }
            } else ($ = e.width), (q = e.height);
          }
        }
        let B = !p && ("lazy" === g || void 0 === g);
        (!(d = "string" == typeof d ? d : W) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((f = !0), (B = !1)),
          a.unoptimized && (f = !0),
          D && d.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
          p && (C = "high");
        let F = s(h),
          U = Object.assign(
            y
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: k,
                  objectPosition: z,
                }
              : {},
            M ? {} : { color: "transparent" },
            w
          ),
          T =
            A || "empty" === _
              ? null
              : "blur" === _
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, i.getImageBlurSvg)({
                  widthInt: $,
                  heightInt: q,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: j || "",
                  objectFit: U.objectFit,
                }) +
                '")'
              : 'url("' + _ + '")',
          V = T
            ? {
                backgroundSize: U.objectFit || "cover",
                backgroundPosition: U.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: T,
              }
            : {},
          Y = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: i,
              width: o,
              quality: n,
              sizes: s,
              loader: a,
            } = e;
            if (i) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, r) {
                let { deviceSizes: i, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let i; (i = e.exec(r)); i) t.push(parseInt(i[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= i[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: i, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, s),
              d = l.length - 1;
            return {
              sizes: s || "w" !== u ? s : "100vw",
              srcSet: l
                .map(
                  (e, i) =>
                    a({ config: t, src: r, quality: n, width: e }) +
                    " " +
                    ("w" === u ? e : i + 1) +
                    u
                )
                .join(", "),
              src: a({ config: t, src: r, quality: n, width: l[d] }),
            };
          })({
            config: a,
            src: d,
            unoptimized: f,
            width: $,
            quality: F,
            sizes: c,
            loader: L,
          });
        return {
          props: {
            ...I,
            loading: B ? "lazy" : g,
            fetchPriority: C,
            width: $,
            height: q,
            decoding: "async",
            className: m,
            style: { ...U, ...V },
            sizes: Y.sizes,
            srcSet: Y.srcSet,
            src: Y.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: _, fill: y },
        };
      }
    },
    89719: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: i,
            blurHeight: o,
            blurDataURL: n,
            objectFit: s,
          } = e,
          a = i ? 40 * i : t,
          l = o ? 40 * o : r,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          n +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    40479: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getImageProps: function () {
            return a;
          },
          default: function () {
            return l;
          },
        });
      let i = r(43219),
        o = r(23583),
        n = r(27466),
        s = i._(r(92168)),
        a = (e) => {
          let { props: t } = (0, o.getImgProps)(e, {
            defaultLoader: s.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/marketing/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        },
        l = n.Image;
    },
    92168: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: i, quality: o } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          i +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        (r.__next_img_default = !0);
      let i = r;
    },
    96577: function (e, t, r) {
      e.exports = r(40479);
    },
    37164: function (e, t, r) {
      "use strict";
      r.d(t, {
        kP: function () {
          return n;
        },
      });
      let i = (e) => crypto.getRandomValues(new Uint8Array(e)),
        o = (e, t, r) => {
          let i = (2 << (Math.log(e.length - 1) / Math.LN2)) - 1,
            o = -~((1.6 * i * t) / e.length);
          return (n = t) => {
            let s = "";
            for (;;) {
              let t = r(o),
                a = o;
              for (; a--; ) if ((s += e[t[a] & i] || "").length === n) return s;
            }
          };
        },
        n = (e, t = 21) => o(e, t, i);
    },
    84687: function (e, t, r) {
      "use strict";
      r.d(t, {
        Yz: function () {
          return i.Yz;
        },
        q: function () {
          return y;
        },
        q_: function () {
          return i.q_;
        },
      });
      var i = r(89046),
        o = r(28316),
        n = r(55870),
        s = r(88307),
        a = /^--/,
        l = {},
        u = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        d = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
        c = ["Webkit", "Ms", "Moz", "O"];
      u = Object.keys(u).reduce(
        (e, t) => (c.forEach((r) => (e[d(r, t)] = e[t])), e),
        u
      );
      var f = /^(matrix|translate|scale|rotate|skew)/,
        p = /^(translate)/,
        g = /^(rotate|skew)/,
        m = (e, t) => (n.is.num(e) && 0 !== e ? e + t : e),
        h = (e, t) =>
          n.is.arr(e)
            ? e.every((e) => h(e, t))
            : n.is.num(e)
            ? e === t
            : parseFloat(e) === t,
        b = class extends s.rS {
          constructor({ x: e, y: t, z: r, ...i }) {
            let o = [],
              s = [];
            (e || t || r) &&
              (o.push([e || 0, t || 0, r || 0]),
              s.push((e) => [
                `translate3d(${e.map((e) => m(e, "px")).join(",")})`,
                h(e, 0),
              ])),
              (0, n.rU)(i, (e, t) => {
                if ("transform" === t)
                  o.push([e || ""]), s.push((e) => [e, "" === e]);
                else if (f.test(t)) {
                  if ((delete i[t], n.is.und(e))) return;
                  let r = p.test(t) ? "px" : g.test(t) ? "deg" : "";
                  o.push((0, n.qo)(e)),
                    s.push(
                      "rotate3d" === t
                        ? ([e, t, i, o]) => [
                            `rotate3d(${e},${t},${i},${m(o, r)})`,
                            h(o, 0),
                          ]
                        : (e) => [
                            `${t}(${e.map((e) => m(e, r)).join(",")})`,
                            h(e, t.startsWith("scale") ? 1 : 0),
                          ]
                    );
                }
              }),
              o.length && (i.transform = new v(o, s)),
              super(i);
          }
        },
        v = class extends n.B0 {
          constructor(e, t) {
            super(),
              (this.inputs = e),
              (this.transforms = t),
              (this._value = null);
          }
          get() {
            return this._value || (this._value = this._get());
          }
          _get() {
            let e = "",
              t = !0;
            return (
              (0, n.S6)(this.inputs, (r, i) => {
                let o = (0, n.je)(r[0]),
                  [s, a] = this.transforms[i](n.is.arr(o) ? o : r.map(n.je));
                (e += " " + s), (t = t && a);
              }),
              t ? "none" : e
            );
          }
          observerAdded(e) {
            1 == e &&
              (0, n.S6)(this.inputs, (e) =>
                (0, n.S6)(e, (e) => (0, n.j$)(e) && (0, n.UI)(e, this))
              );
          }
          observerRemoved(e) {
            0 == e &&
              (0, n.S6)(this.inputs, (e) =>
                (0, n.S6)(e, (e) => (0, n.j$)(e) && (0, n.iL)(e, this))
              );
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), (0, n.k0)(this, e);
          }
        };
      i.OH.assign({
        batchedUpdates: o.unstable_batchedUpdates,
        createStringInterpolator: n.qS,
        colors: n.O9,
      });
      var y = (0, s.Ld)(
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ],
        {
          applyAnimatedValues: function (e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            let r =
                "filter" === e.nodeName ||
                (e.parentNode && "filter" === e.parentNode.nodeName),
              {
                style: i,
                children: o,
                scrollTop: n,
                scrollLeft: s,
                viewBox: d,
                ...c
              } = t,
              f = Object.values(c),
              p = Object.keys(c).map((t) =>
                r || e.hasAttribute(t)
                  ? t
                  : l[t] ||
                    (l[t] = t.replace(/([A-Z])/g, (e) => "-" + e.toLowerCase()))
              );
            for (let t in (void 0 !== o && (e.textContent = o), i))
              if (i.hasOwnProperty(t)) {
                var g;
                let r =
                  null == (g = i[t]) || "boolean" == typeof g || "" === g
                    ? ""
                    : "number" != typeof g ||
                      0 === g ||
                      a.test(t) ||
                      (u.hasOwnProperty(t) && u[t])
                    ? ("" + g).trim()
                    : g + "px";
                a.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
              }
            p.forEach((t, r) => {
              e.setAttribute(t, f[r]);
            }),
              void 0 !== n && (e.scrollTop = n),
              void 0 !== s && (e.scrollLeft = s),
              void 0 !== d && e.setAttribute("viewBox", d);
          },
          createAnimatedStyle: (e) => new b(e),
          getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r,
        }
      ).animated;
    },
  },
]);
