(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [894],
  {
    26182: function (e, r, t) {
      "use strict";
      var o, n;
      e.exports =
        (null == (o = t.g.process) ? void 0 : o.env) &&
        "object" == typeof (null == (n = t.g.process) ? void 0 : n.env)
          ? t.g.process
          : t(4703);
    },
    4703: function (e) {
      !(function () {
        var r = {
            229: function (e) {
              var r,
                t,
                o,
                n = (e.exports = {});
              function l() {
                throw Error("setTimeout has not been defined");
              }
              function i() {
                throw Error("clearTimeout has not been defined");
              }
              function s(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === l || !r) && setTimeout)
                  return (r = setTimeout), setTimeout(e, 0);
                try {
                  return r(e, 0);
                } catch (t) {
                  try {
                    return r.call(null, e, 0);
                  } catch (t) {
                    return r.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  r = "function" == typeof setTimeout ? setTimeout : l;
                } catch (e) {
                  r = l;
                }
                try {
                  t = "function" == typeof clearTimeout ? clearTimeout : i;
                } catch (e) {
                  t = i;
                }
              })();
              var a = [],
                c = !1,
                d = -1;
              function u() {
                c &&
                  o &&
                  ((c = !1),
                  o.length ? (a = o.concat(a)) : (d = -1),
                  a.length && p());
              }
              function p() {
                if (!c) {
                  var e = s(u);
                  c = !0;
                  for (var r = a.length; r; ) {
                    for (o = a, a = []; ++d < r; ) o && o[d].run();
                    (d = -1), (r = a.length);
                  }
                  (o = null),
                    (c = !1),
                    (function (e) {
                      if (t === clearTimeout) return clearTimeout(e);
                      if ((t === i || !t) && clearTimeout)
                        return (t = clearTimeout), clearTimeout(e);
                      try {
                        t(e);
                      } catch (r) {
                        try {
                          return t.call(null, e);
                        } catch (r) {
                          return t.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function f(e, r) {
                (this.fun = e), (this.array = r);
              }
              function b() {}
              (n.nextTick = function (e) {
                var r = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var t = 1; t < arguments.length; t++)
                    r[t - 1] = arguments[t];
                a.push(new f(e, r)), 1 !== a.length || c || s(p);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (n.title = "browser"),
                (n.browser = !0),
                (n.env = {}),
                (n.argv = []),
                (n.version = ""),
                (n.versions = {}),
                (n.on = b),
                (n.addListener = b),
                (n.once = b),
                (n.off = b),
                (n.removeListener = b),
                (n.removeAllListeners = b),
                (n.emit = b),
                (n.prependListener = b),
                (n.prependOnceListener = b),
                (n.listeners = function (e) {
                  return [];
                }),
                (n.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (n.cwd = function () {
                  return "/";
                }),
                (n.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (n.umask = function () {
                  return 0;
                });
            },
          },
          t = {};
        function o(e) {
          var n = t[e];
          if (void 0 !== n) return n.exports;
          var l = (t[e] = { exports: {} }),
            i = !0;
          try {
            r[e](l, l.exports, o), (i = !1);
          } finally {
            i && delete t[e];
          }
          return l.exports;
        }
        o.ab = "//";
        var n = o(229);
        e.exports = n;
      })();
    },
    7382: function (e, r, t) {
      "use strict";
      var o = t(15039),
        n = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s =
          o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, r, t) {
        var o,
          l = {},
          c = null,
          d = null;
        for (o in (void 0 !== t && (c = "" + t),
        void 0 !== r.key && (c = "" + r.key),
        void 0 !== r.ref && (d = r.ref),
        r))
          i.call(r, o) && !a.hasOwnProperty(o) && (l[o] = r[o]);
        if (e && e.defaultProps)
          for (o in (r = e.defaultProps)) void 0 === l[o] && (l[o] = r[o]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: d,
          props: l,
          _owner: s.current,
        };
      }
      (r.Fragment = l), (r.jsx = c), (r.jsxs = c);
    },
    2067: function (e, r, t) {
      "use strict";
      e.exports = t(7382);
    },
    18315: function (e, r, t) {
      "use strict";
      function o() {
        for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)
          (e = arguments[t]) &&
            (r = (function e(r) {
              var t,
                o,
                n = "";
              if ("string" == typeof r || "number" == typeof r) n += r;
              else if ("object" == typeof r) {
                if (Array.isArray(r)) {
                  var l = r.length;
                  for (t = 0; t < l; t++)
                    r[t] && (o = e(r[t])) && (n && (n += " "), (n += o));
                } else for (o in r) r[o] && (n && (n += " "), (n += o));
              }
              return n;
            })(e)) &&
            (o && (o += " "), (o += r));
        return o;
      }
      t.d(r, {
        W: function () {
          return o;
        },
      }),
        (r.Z = o);
    },
    39315: function (e, r, t) {
      "use strict";
      t.d(r, {
        m6: function () {
          return $;
        },
      });
      let o = /^\[(.+)\]$/;
      function n(e, r) {
        let t = e;
        return (
          r.split("-").forEach((e) => {
            t.nextPart.has(e) ||
              t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (t = t.nextPart.get(e));
          }),
          t
        );
      }
      let l = /\s+/;
      function i() {
        let e,
          r,
          t = 0,
          o = "";
        for (; t < arguments.length; )
          (e = arguments[t++]) &&
            (r = (function e(r) {
              let t;
              if ("string" == typeof r) return r;
              let o = "";
              for (let n = 0; n < r.length; n++)
                r[n] && (t = e(r[n])) && (o && (o += " "), (o += t));
              return o;
            })(e)) &&
            (o && (o += " "), (o += r));
        return o;
      }
      function s(e) {
        let r = (r) => r[e] || [];
        return (r.isThemeGetter = !0), r;
      }
      let a = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        d = new Set(["px", "full", "screen"]),
        u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        p =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        b = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        m =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function g(e) {
        return y(e) || d.has(e) || c.test(e);
      }
      function h(e) {
        return P(e, "length", N);
      }
      function y(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function v(e) {
        return P(e, "number", y);
      }
      function x(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function w(e) {
        return e.endsWith("%") && y(e.slice(0, -1));
      }
      function k(e) {
        return a.test(e);
      }
      function z(e) {
        return u.test(e);
      }
      let j = new Set(["length", "size", "percentage"]);
      function T(e) {
        return P(e, j, G);
      }
      function _(e) {
        return P(e, "position", G);
      }
      let C = new Set(["image", "url"]);
      function E(e) {
        return P(e, C, R);
      }
      function S(e) {
        return P(e, "", I);
      }
      function O() {
        return !0;
      }
      function P(e, r, t) {
        let o = a.exec(e);
        return (
          !!o &&
          (o[1] ? ("string" == typeof r ? o[1] === r : r.has(o[1])) : t(o[2]))
        );
      }
      function N(e) {
        return p.test(e) && !f.test(e);
      }
      function G() {
        return !1;
      }
      function I(e) {
        return b.test(e);
      }
      function R(e) {
        return m.test(e);
      }
      let $ = (function (e) {
        let r, t, s;
        let a = function (l) {
          var i;
          return (
            (t = (r = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let r = 0,
                  t = new Map(),
                  o = new Map();
                function n(n, l) {
                  t.set(n, l), ++r > e && ((r = 0), (o = t), (t = new Map()));
                }
                return {
                  get(e) {
                    let r = t.get(e);
                    return void 0 !== r
                      ? r
                      : void 0 !== (r = o.get(e))
                      ? (n(e, r), r)
                      : void 0;
                  },
                  set(e, r) {
                    t.has(e) ? t.set(e, r) : n(e, r);
                  },
                };
              })((i = [].reduce((e, r) => r(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let r = e.separator,
                  t = 1 === r.length,
                  o = r[0],
                  n = r.length;
                return function (e) {
                  let l;
                  let i = [],
                    s = 0,
                    a = 0;
                  for (let c = 0; c < e.length; c++) {
                    let d = e[c];
                    if (0 === s) {
                      if (d === o && (t || e.slice(c, c + n) === r)) {
                        i.push(e.slice(a, c)), (a = c + n);
                        continue;
                      }
                      if ("/" === d) {
                        l = c;
                        continue;
                      }
                    }
                    "[" === d ? s++ : "]" === d && s--;
                  }
                  let c = 0 === i.length ? e : e.substring(a),
                    d = c.startsWith("!"),
                    u = d ? c.substring(1) : c;
                  return {
                    modifiers: i,
                    hasImportantModifier: d,
                    baseClassName: u,
                    maybePostfixModifierPosition: l && l > a ? l - a : void 0,
                  };
                };
              })(i),
              ...(function (e) {
                let r = (function (e) {
                    var r;
                    let { theme: t, prefix: o } = e,
                      l = { nextPart: new Map(), validators: [] };
                    return (
                      ((r = Object.entries(e.classGroups)),
                      o
                        ? r.map(([e, r]) => [
                            e,
                            r.map((e) =>
                              "string" == typeof e
                                ? o + e
                                : "object" == typeof e
                                ? Object.fromEntries(
                                    Object.entries(e).map(([e, r]) => [
                                      o + e,
                                      r,
                                    ])
                                  )
                                : e
                            ),
                          ])
                        : r).forEach(([e, r]) => {
                        (function e(r, t, o, l) {
                          r.forEach((r) => {
                            if ("string" == typeof r) {
                              ("" === r ? t : n(t, r)).classGroupId = o;
                              return;
                            }
                            if ("function" == typeof r) {
                              if (r.isThemeGetter) {
                                e(r(l), t, o, l);
                                return;
                              }
                              t.validators.push({
                                validator: r,
                                classGroupId: o,
                              });
                              return;
                            }
                            Object.entries(r).forEach(([r, i]) => {
                              e(i, n(t, r), o, l);
                            });
                          });
                        })(r, l, e, t);
                      }),
                      l
                    );
                  })(e),
                  {
                    conflictingClassGroups: t,
                    conflictingClassGroupModifiers: l,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let t = e.split("-");
                    return (
                      "" === t[0] && 1 !== t.length && t.shift(),
                      (function e(r, t) {
                        if (0 === r.length) return t.classGroupId;
                        let o = r[0],
                          n = t.nextPart.get(o),
                          l = n ? e(r.slice(1), n) : void 0;
                        if (l) return l;
                        if (0 === t.validators.length) return;
                        let i = r.join("-");
                        return t.validators.find(({ validator: e }) => e(i))
                          ?.classGroupId;
                      })(t, r) ||
                        (function (e) {
                          if (o.test(e)) {
                            let r = o.exec(e)[1],
                              t = r?.substring(0, r.indexOf(":"));
                            if (t) return "arbitrary.." + t;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, r) {
                    let o = t[e] || [];
                    return r && l[e] ? [...o, ...l[e]] : o;
                  },
                };
              })(i),
            }).cache.get),
            (s = r.cache.set),
            (a = c),
            c(l)
          );
        };
        function c(e) {
          let o = t(e);
          if (o) return o;
          let n = (function (e, r) {
            let {
                splitModifiers: t,
                getClassGroupId: o,
                getConflictingClassGroupIds: n,
              } = r,
              i = new Set();
            return e
              .trim()
              .split(l)
              .map((e) => {
                let {
                    modifiers: r,
                    hasImportantModifier: n,
                    baseClassName: l,
                    maybePostfixModifierPosition: i,
                  } = t(e),
                  s = o(i ? l.substring(0, i) : l),
                  a = !!i;
                if (!s) {
                  if (!i || !(s = o(l)))
                    return { isTailwindClass: !1, originalClassName: e };
                  a = !1;
                }
                let c = (function (e) {
                  if (e.length <= 1) return e;
                  let r = [],
                    t = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (r.push(...t.sort(), e), (t = []))
                        : t.push(e);
                    }),
                    r.push(...t.sort()),
                    r
                  );
                })(r).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: n ? c + "!" : c,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: a,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: r,
                    classGroupId: t,
                    hasPostfixModifier: o,
                  } = e,
                  l = r + t;
                return (
                  !i.has(l) &&
                  (i.add(l), n(t, o).forEach((e) => i.add(r + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, r);
          return s(e, n), n;
        }
        return function () {
          return a(i.apply(null, arguments));
        };
      })(function () {
        let e = s("colors"),
          r = s("spacing"),
          t = s("blur"),
          o = s("brightness"),
          n = s("borderColor"),
          l = s("borderRadius"),
          i = s("borderSpacing"),
          a = s("borderWidth"),
          c = s("contrast"),
          d = s("grayscale"),
          u = s("hueRotate"),
          p = s("invert"),
          f = s("gap"),
          b = s("gradientColorStops"),
          m = s("gradientColorStopPositions"),
          j = s("inset"),
          C = s("margin"),
          P = s("opacity"),
          N = s("padding"),
          G = s("saturate"),
          I = s("scale"),
          R = s("sepia"),
          $ = s("skew"),
          L = s("space"),
          M = s("translate"),
          W = () => ["auto", "contain", "none"],
          A = () => ["auto", "hidden", "clip", "visible", "scroll"],
          q = () => ["auto", k, r],
          D = () => [k, r],
          F = () => ["", g, h],
          U = () => ["auto", y, k],
          B = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          Y = () => ["solid", "dashed", "dotted", "double", "none"],
          Z = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
          ],
          H = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          J = () => ["", "0", k],
          K = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          Q = () => [y, v],
          V = () => [y, k];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [O],
            spacing: [g, h],
            blur: ["none", "", z, k],
            brightness: Q(),
            borderColor: [e],
            borderRadius: ["none", "", "full", z, k],
            borderSpacing: D(),
            borderWidth: F(),
            contrast: Q(),
            grayscale: J(),
            hueRotate: V(),
            invert: J(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [w, h],
            inset: q(),
            margin: q(),
            opacity: Q(),
            padding: D(),
            saturate: Q(),
            scale: Q(),
            sepia: J(),
            skew: V(),
            space: D(),
            translate: D(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", k] }],
            container: ["container"],
            columns: [{ columns: [z] }],
            "break-after": [{ "break-after": K() }],
            "break-before": [{ "break-before": K() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...B(), k] }],
            overflow: [{ overflow: A() }],
            "overflow-x": [{ "overflow-x": A() }],
            "overflow-y": [{ "overflow-y": A() }],
            overscroll: [{ overscroll: W() }],
            "overscroll-x": [{ "overscroll-x": W() }],
            "overscroll-y": [{ "overscroll-y": W() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [j] }],
            "inset-x": [{ "inset-x": [j] }],
            "inset-y": [{ "inset-y": [j] }],
            start: [{ start: [j] }],
            end: [{ end: [j] }],
            top: [{ top: [j] }],
            right: [{ right: [j] }],
            bottom: [{ bottom: [j] }],
            left: [{ left: [j] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", x, k] }],
            basis: [{ basis: q() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", k] }],
            grow: [{ grow: J() }],
            shrink: [{ shrink: J() }],
            order: [{ order: ["first", "last", "none", x, k] }],
            "grid-cols": [{ "grid-cols": [O] }],
            "col-start-end": [{ col: ["auto", { span: ["full", x, k] }, k] }],
            "col-start": [{ "col-start": U() }],
            "col-end": [{ "col-end": U() }],
            "grid-rows": [{ "grid-rows": [O] }],
            "row-start-end": [{ row: ["auto", { span: [x, k] }, k] }],
            "row-start": [{ "row-start": U() }],
            "row-end": [{ "row-end": U() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", k] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", k] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ...H()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...H(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...H(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [N] }],
            px: [{ px: [N] }],
            py: [{ py: [N] }],
            ps: [{ ps: [N] }],
            pe: [{ pe: [N] }],
            pt: [{ pt: [N] }],
            pr: [{ pr: [N] }],
            pb: [{ pb: [N] }],
            pl: [{ pl: [N] }],
            m: [{ m: [C] }],
            mx: [{ mx: [C] }],
            my: [{ my: [C] }],
            ms: [{ ms: [C] }],
            me: [{ me: [C] }],
            mt: [{ mt: [C] }],
            mr: [{ mr: [C] }],
            mb: [{ mb: [C] }],
            ml: [{ ml: [C] }],
            "space-x": [{ "space-x": [L] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [L] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, r] },
            ],
            "min-w": [{ "min-w": [k, r, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  k,
                  r,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [z] },
                  z,
                ],
              },
            ],
            h: [
              { h: [k, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [k, r, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", z, h] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  v,
                ],
              },
            ],
            "font-family": [{ font: [O] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  k,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", y, v] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  g,
                  k,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", k] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", k] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [P] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [P] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...Y(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g, h] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", g, k] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: D() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  k,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", k] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [P] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...B(), _] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", T] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  E,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [b] }],
            "gradient-via": [{ via: [b] }],
            "gradient-to": [{ to: [b] }],
            rounded: [{ rounded: [l] }],
            "rounded-s": [{ "rounded-s": [l] }],
            "rounded-e": [{ "rounded-e": [l] }],
            "rounded-t": [{ "rounded-t": [l] }],
            "rounded-r": [{ "rounded-r": [l] }],
            "rounded-b": [{ "rounded-b": [l] }],
            "rounded-l": [{ "rounded-l": [l] }],
            "rounded-ss": [{ "rounded-ss": [l] }],
            "rounded-se": [{ "rounded-se": [l] }],
            "rounded-ee": [{ "rounded-ee": [l] }],
            "rounded-es": [{ "rounded-es": [l] }],
            "rounded-tl": [{ "rounded-tl": [l] }],
            "rounded-tr": [{ "rounded-tr": [l] }],
            "rounded-br": [{ "rounded-br": [l] }],
            "rounded-bl": [{ "rounded-bl": [l] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [P] }],
            "border-style": [{ border: [...Y(), "hidden"] }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [P] }],
            "divide-style": [{ divide: Y() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: ["", ...Y()] }],
            "outline-offset": [{ "outline-offset": [g, k] }],
            "outline-w": [{ outline: [g, h] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: F() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [P] }],
            "ring-offset-w": [{ "ring-offset": [g, h] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", z, S] }],
            "shadow-color": [{ shadow: [O] }],
            opacity: [{ opacity: [P] }],
            "mix-blend": [{ "mix-blend": Z() }],
            "bg-blend": [{ "bg-blend": Z() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [t] }],
            brightness: [{ brightness: [o] }],
            contrast: [{ contrast: [c] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", z, k] }],
            grayscale: [{ grayscale: [d] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [p] }],
            saturate: [{ saturate: [G] }],
            sepia: [{ sepia: [R] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [t] }],
            "backdrop-brightness": [{ "backdrop-brightness": [o] }],
            "backdrop-contrast": [{ "backdrop-contrast": [c] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [p] }],
            "backdrop-opacity": [{ "backdrop-opacity": [P] }],
            "backdrop-saturate": [{ "backdrop-saturate": [G] }],
            "backdrop-sepia": [{ "backdrop-sepia": [R] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [i] }],
            "border-spacing-x": [{ "border-spacing-x": [i] }],
            "border-spacing-y": [{ "border-spacing-y": [i] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  k,
                ],
              },
            ],
            duration: [{ duration: V() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", k] }],
            delay: [{ delay: V() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", k] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [I] }],
            "scale-x": [{ "scale-x": [I] }],
            "scale-y": [{ "scale-y": [I] }],
            rotate: [{ rotate: [x, k] }],
            "translate-x": [{ "translate-x": [M] }],
            "translate-y": [{ "translate-y": [M] }],
            "skew-x": [{ "skew-x": [$] }],
            "skew-y": [{ "skew-y": [$] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  k,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  k,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": D() }],
            "scroll-mx": [{ "scroll-mx": D() }],
            "scroll-my": [{ "scroll-my": D() }],
            "scroll-ms": [{ "scroll-ms": D() }],
            "scroll-me": [{ "scroll-me": D() }],
            "scroll-mt": [{ "scroll-mt": D() }],
            "scroll-mr": [{ "scroll-mr": D() }],
            "scroll-mb": [{ "scroll-mb": D() }],
            "scroll-ml": [{ "scroll-ml": D() }],
            "scroll-p": [{ "scroll-p": D() }],
            "scroll-px": [{ "scroll-px": D() }],
            "scroll-py": [{ "scroll-py": D() }],
            "scroll-ps": [{ "scroll-ps": D() }],
            "scroll-pe": [{ "scroll-pe": D() }],
            "scroll-pt": [{ "scroll-pt": D() }],
            "scroll-pr": [{ "scroll-pr": D() }],
            "scroll-pb": [{ "scroll-pb": D() }],
            "scroll-pl": [{ "scroll-pl": D() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", k] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [g, h, v] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
