(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5439],
  {
    13359: function (e) {
      let t = (e, t, l) =>
        (l < 0 && (l += 1), l > 1 && (l -= 1), l < 1 / 6)
          ? e + (t - e) * 6 * l
          : l < 0.5
          ? t
          : l < 2 / 3
          ? e + (t - e) * (2 / 3 - l) * 6
          : e;
      e.exports = (e, l, n) => {
        let o, i, r;
        if (((e /= 360), 0 == l)) o = i = r = n;
        else {
          let u = n < 0.5 ? n * (1 + l) : n + l - n * l,
            a = 2 * n - u;
          (o = t(a, u, e + 1 / 3)), (i = t(a, u, e)), (r = t(a, u, e - 1 / 3));
        }
        return [
          Math.max(0, Math.min(Math.round(255 * o), 255)),
          Math.max(0, Math.min(Math.round(255 * i), 255)),
          Math.max(0, Math.min(Math.round(255 * r), 255)),
        ];
      };
    },
    69239: function (e) {
      e.exports = (e, t, l) => [
        [e, t, l],
        [(e + 120) % 360, t, l],
        [(e + 240) % 360, t, l],
      ];
    },
    81345: function (e) {
      "use strict";
      e.exports = function (e) {
        for (var t = 5381, l = e.length; l; ) t = (33 * t) ^ e.charCodeAt(--l);
        return t >>> 0;
      };
    },
    69429: function (e, t, l) {
      "use strict";
      l.d(t, {
        b7: function () {
          return r;
        },
        ie: function () {
          return i;
        },
      });
      var n = l(15039),
        o = l(49356);
      /**
       * react-table
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */ function i(e, t) {
        return e
          ? ("function" == typeof e &&
              (() => {
                let t = Object.getPrototypeOf(e);
                return t.prototype && t.prototype.isReactComponent;
              })()) ||
            "function" == typeof e ||
            ("object" == typeof e &&
              "symbol" == typeof e.$$typeof &&
              ["react.memo", "react.forward_ref"].includes(
                e.$$typeof.description
              ))
            ? n.createElement(e, t)
            : e
          : null;
      }
      function r(e) {
        let t = {
            state: {},
            onStateChange: () => {},
            renderFallbackValue: null,
            ...e,
          },
          [l] = n.useState(() => ({ current: (0, o.W_)(t) })),
          [i, r] = n.useState(() => l.current.initialState);
        return (
          l.current.setOptions((t) => ({
            ...t,
            ...e,
            state: { ...i, ...e.state },
            onStateChange: (t) => {
              r(t), null == e.onStateChange || e.onStateChange(t);
            },
          })),
          l.current
        );
      }
    },
    49356: function (e, t, l) {
      "use strict";
      /**
       * table-core
       *
       * Copyright (c) TanStack
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */ function n(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function o(e, t) {
        return (l) => {
          t.setState((t) => ({ ...t, [e]: n(l, t[e]) }));
        };
      }
      function i(e) {
        return e instanceof Function;
      }
      function r(e, t, l) {
        let n,
          o = [];
        return (i) => {
          let r, u;
          l.key && l.debug && (r = Date.now());
          let a = e(i);
          if (!(a.length !== o.length || a.some((e, t) => o[t] !== e)))
            return n;
          if (
            ((o = a),
            l.key && l.debug && (u = Date.now()),
            (n = t(...a)),
            null == l || null == l.onChange || l.onChange(n),
            l.key && l.debug && null != l && l.debug())
          ) {
            let e = Math.round((Date.now() - r) * 100) / 100,
              t = Math.round((Date.now() - u) * 100) / 100,
              n = t / 16,
              o = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
              `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * n, 120)
            )}deg 100% 31%);`,
              null == l ? void 0 : l.key
            );
          }
          return n;
        };
      }
      function u(e, t, l, n) {
        return {
          debug: () => {
            var l;
            return null != (l = null == e ? void 0 : e.debugAll) ? l : e[t];
          },
          key: !1,
          onChange: n,
        };
      }
      l.d(t, {
        Cl: function () {
          return N;
        },
        W_: function () {
          return q;
        },
        sC: function () {
          return U;
        },
        tj: function () {
          return $;
        },
      });
      let a = "debugHeaders";
      function g(e, t, l) {
        var n;
        let o = {
          id: null != (n = l.id) ? n : t.id,
          column: t,
          index: l.index,
          isPlaceholder: !!l.isPlaceholder,
          placeholderId: l.placeholderId,
          depth: l.depth,
          subHeaders: [],
          colSpan: 0,
          rowSpan: 0,
          headerGroup: null,
          getLeafHeaders: () => {
            let e = [],
              t = (l) => {
                l.subHeaders && l.subHeaders.length && l.subHeaders.map(t),
                  e.push(l);
              };
            return t(o), e;
          },
          getContext: () => ({ table: e, header: o, column: t }),
        };
        return (
          e._features.forEach((t) => {
            null == t.createHeader || t.createHeader(o, e);
          }),
          o
        );
      }
      function s(e, t, l, n) {
        var o, i;
        let r = 0,
          u = function (e, t) {
            void 0 === t && (t = 1),
              (r = Math.max(r, t)),
              e
                .filter((e) => e.getIsVisible())
                .forEach((e) => {
                  var l;
                  null != (l = e.columns) && l.length && u(e.columns, t + 1);
                }, 0);
          };
        u(e);
        let a = [],
          s = (e, t) => {
            let o = {
                depth: t,
                id: [n, `${t}`].filter(Boolean).join("_"),
                headers: [],
              },
              i = [];
            e.forEach((e) => {
              let r;
              let u = [...i].reverse()[0],
                a = e.column.depth === o.depth,
                s = !1;
              if (
                (a && e.column.parent
                  ? (r = e.column.parent)
                  : ((r = e.column), (s = !0)),
                u && (null == u ? void 0 : u.column) === r)
              )
                u.subHeaders.push(e);
              else {
                let o = g(l, r, {
                  id: [n, t, r.id, null == e ? void 0 : e.id]
                    .filter(Boolean)
                    .join("_"),
                  isPlaceholder: s,
                  placeholderId: s
                    ? `${i.filter((e) => e.column === r).length}`
                    : void 0,
                  depth: t,
                  index: i.length,
                });
                o.subHeaders.push(e), i.push(o);
              }
              o.headers.push(e), (e.headerGroup = o);
            }),
              a.push(o),
              t > 0 && s(i, t - 1);
          };
        s(
          t.map((e, t) => g(l, e, { depth: r, index: t })),
          r - 1
        ),
          a.reverse();
        let d = (e) =>
          e
            .filter((e) => e.column.getIsVisible())
            .map((e) => {
              let t = 0,
                l = 0,
                n = [0];
              return (
                e.subHeaders && e.subHeaders.length
                  ? ((n = []),
                    d(e.subHeaders).forEach((e) => {
                      let { colSpan: l, rowSpan: o } = e;
                      (t += l), n.push(o);
                    }))
                  : (t = 1),
                (l += Math.min(...n)),
                (e.colSpan = t),
                (e.rowSpan = l),
                { colSpan: t, rowSpan: l }
              );
            });
        return (
          d(null != (o = null == (i = a[0]) ? void 0 : i.headers) ? o : []), a
        );
      }
      let d = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
        c = () => ({
          startOffset: null,
          startSize: null,
          deltaOffset: null,
          deltaPercentage: null,
          isResizingColumn: !1,
          columnSizingStart: [],
        }),
        p = null;
      function f(e) {
        return "touchstart" === e.type;
      }
      let m = (e, t, l) => {
        var n;
        let o = l.toLowerCase();
        return !!(null == (n = e.getValue(t)) ||
        null == (n = n.toString()) ||
        null == (n = n.toLowerCase())
          ? void 0
          : n.includes(o));
      };
      m.autoRemove = (e) => V(e);
      let C = (e, t, l) => {
        var n;
        return !!(null == (n = e.getValue(t)) || null == (n = n.toString())
          ? void 0
          : n.includes(l));
      };
      C.autoRemove = (e) => V(e);
      let S = (e, t, l) => {
        var n;
        return (
          (null == (n = e.getValue(t)) || null == (n = n.toString())
            ? void 0
            : n.toLowerCase()) === (null == l ? void 0 : l.toLowerCase())
        );
      };
      S.autoRemove = (e) => V(e);
      let w = (e, t, l) => {
        var n;
        return null == (n = e.getValue(t)) ? void 0 : n.includes(l);
      };
      w.autoRemove = (e) => V(e) || !(null != e && e.length);
      let h = (e, t, l) =>
        !l.some((l) => {
          var n;
          return !(null != (n = e.getValue(t)) && n.includes(l));
        });
      h.autoRemove = (e) => V(e) || !(null != e && e.length);
      let v = (e, t, l) =>
        l.some((l) => {
          var n;
          return null == (n = e.getValue(t)) ? void 0 : n.includes(l);
        });
      v.autoRemove = (e) => V(e) || !(null != e && e.length);
      let R = (e, t, l) => e.getValue(t) === l;
      R.autoRemove = (e) => V(e);
      let b = (e, t, l) => e.getValue(t) == l;
      b.autoRemove = (e) => V(e);
      let F = (e, t, l) => {
        let [n, o] = l,
          i = e.getValue(t);
        return i >= n && i <= o;
      };
      (F.resolveFilterValue = (e) => {
        let [t, l] = e,
          n = "number" != typeof t ? parseFloat(t) : t,
          o = "number" != typeof l ? parseFloat(l) : l,
          i = null === t || Number.isNaN(n) ? -1 / 0 : n,
          r = null === l || Number.isNaN(o) ? 1 / 0 : o;
        if (i > r) {
          let e = i;
          (i = r), (r = e);
        }
        return [i, r];
      }),
        (F.autoRemove = (e) => V(e) || (V(e[0]) && V(e[1])));
      let M = {
        includesString: m,
        includesStringSensitive: C,
        equalsString: S,
        arrIncludes: w,
        arrIncludesAll: h,
        arrIncludesSome: v,
        equals: R,
        weakEquals: b,
        inNumberRange: F,
      };
      function V(e) {
        return null == e || "" === e;
      }
      function P(e, t, l) {
        return (
          (!!e && !!e.autoRemove && e.autoRemove(t, l)) ||
          void 0 === t ||
          ("string" == typeof t && !t)
        );
      }
      let I = {
          sum: (e, t, l) =>
            l.reduce((t, l) => {
              let n = l.getValue(e);
              return t + ("number" == typeof n ? n : 0);
            }, 0),
          min: (e, t, l) => {
            let n;
            return (
              l.forEach((t) => {
                let l = t.getValue(e);
                null != l && (n > l || (void 0 === n && l >= l)) && (n = l);
              }),
              n
            );
          },
          max: (e, t, l) => {
            let n;
            return (
              l.forEach((t) => {
                let l = t.getValue(e);
                null != l && (n < l || (void 0 === n && l >= l)) && (n = l);
              }),
              n
            );
          },
          extent: (e, t, l) => {
            let n, o;
            return (
              l.forEach((t) => {
                let l = t.getValue(e);
                null != l &&
                  (void 0 === n
                    ? l >= l && (n = o = l)
                    : (n > l && (n = l), o < l && (o = l)));
              }),
              [n, o]
            );
          },
          mean: (e, t) => {
            let l = 0,
              n = 0;
            if (
              (t.forEach((t) => {
                let o = t.getValue(e);
                null != o && (o = +o) >= o && (++l, (n += o));
              }),
              l)
            )
              return n / l;
          },
          median: (e, t) => {
            if (!t.length) return;
            let l = t.map((t) => t.getValue(e));
            if (!(Array.isArray(l) && l.every((e) => "number" == typeof e)))
              return;
            if (1 === l.length) return l[0];
            let n = Math.floor(l.length / 2),
              o = l.sort((e, t) => e - t);
            return l.length % 2 != 0 ? o[n] : (o[n - 1] + o[n]) / 2;
          },
          unique: (e, t) =>
            Array.from(new Set(t.map((t) => t.getValue(e))).values()),
          uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
          count: (e, t) => t.length,
        },
        x = () => ({ pageIndex: 0, pageSize: 10 }),
        _ = () => ({ left: [], right: [] }),
        y = () => ({ top: [], bottom: [] }),
        E = (e, t, l, n, o) => {
          var i;
          let r = o.getRow(t, !0);
          l
            ? (r.getCanMultiSelect() ||
                Object.keys(e).forEach((t) => delete e[t]),
              r.getCanSelect() && (e[t] = !0))
            : delete e[t],
            n &&
              null != (i = r.subRows) &&
              i.length &&
              r.getCanSelectSubRows() &&
              r.subRows.forEach((t) => E(e, t.id, l, n, o));
        };
      function G(e, t) {
        let l = e.getState().rowSelection,
          n = [],
          o = {},
          i = function (e, t) {
            return e
              .map((e) => {
                var t;
                let r = L(e, l);
                if (
                  (r && (n.push(e), (o[e.id] = e)),
                  null != (t = e.subRows) &&
                    t.length &&
                    (e = { ...e, subRows: i(e.subRows) }),
                  r)
                )
                  return e;
              })
              .filter(Boolean);
          };
        return { rows: i(t.rows), flatRows: n, rowsById: o };
      }
      function L(e, t) {
        var l;
        return null != (l = t[e.id]) && l;
      }
      function A(e, t, l) {
        var n;
        if (!(null != (n = e.subRows) && n.length)) return !1;
        let o = !0,
          i = !1;
        return (
          e.subRows.forEach((e) => {
            if (
              (!i || o) &&
              (e.getCanSelect() && (L(e, t) ? (i = !0) : (o = !1)),
              e.subRows && e.subRows.length)
            ) {
              let l = A(e, t);
              "all" === l ? (i = !0) : ("some" === l && (i = !0), (o = !1));
            }
          }),
          o ? "all" : !!i && "some"
        );
      }
      let H = /([0-9]+)/gm;
      function D(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }
      function z(e) {
        return "number" == typeof e
          ? isNaN(e) || e === 1 / 0 || e === -1 / 0
            ? ""
            : String(e)
          : "string" == typeof e
          ? e
          : "";
      }
      function O(e, t) {
        let l = e.split(H).filter(Boolean),
          n = t.split(H).filter(Boolean);
        for (; l.length && n.length; ) {
          let e = l.shift(),
            t = n.shift(),
            o = parseInt(e, 10),
            i = parseInt(t, 10),
            r = [o, i].sort();
          if (isNaN(r[0])) {
            if (e > t) return 1;
            if (t > e) return -1;
            continue;
          }
          if (isNaN(r[1])) return isNaN(o) ? -1 : 1;
          if (o > i) return 1;
          if (i > o) return -1;
        }
        return l.length - n.length;
      }
      let T = {
        alphanumeric: (e, t, l) =>
          O(z(e.getValue(l)).toLowerCase(), z(t.getValue(l)).toLowerCase()),
        alphanumericCaseSensitive: (e, t, l) =>
          O(z(e.getValue(l)), z(t.getValue(l))),
        text: (e, t, l) =>
          D(z(e.getValue(l)).toLowerCase(), z(t.getValue(l)).toLowerCase()),
        textCaseSensitive: (e, t, l) => D(z(e.getValue(l)), z(t.getValue(l))),
        datetime: (e, t, l) => {
          let n = e.getValue(l),
            o = t.getValue(l);
          return n > o ? 1 : n < o ? -1 : 0;
        },
        basic: (e, t, l) => D(e.getValue(l), t.getValue(l)),
      };
      function B(e, t) {
        return t
          ? "center" === t
            ? e.getCenterVisibleLeafColumns()
            : "left" === t
            ? e.getLeftVisibleLeafColumns()
            : e.getRightVisibleLeafColumns()
          : e.getVisibleLeafColumns();
      }
      let k = [
        {
          createTable: (e) => {
            (e.getHeaderGroups = r(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
                e.getState().columnPinning.right,
              ],
              (t, l, n, o) => {
                var i, r;
                let u =
                    null !=
                    (i =
                      null == n
                        ? void 0
                        : n
                            .map((e) => l.find((t) => t.id === e))
                            .filter(Boolean))
                      ? i
                      : [],
                  a =
                    null !=
                    (r =
                      null == o
                        ? void 0
                        : o
                            .map((e) => l.find((t) => t.id === e))
                            .filter(Boolean))
                      ? r
                      : [];
                return s(
                  t,
                  [
                    ...u,
                    ...l.filter(
                      (e) =>
                        !(null != n && n.includes(e.id)) &&
                        !(null != o && o.includes(e.id))
                    ),
                    ...a,
                  ],
                  e
                );
              },
              u(e.options, a, "getHeaderGroups")
            )),
              (e.getCenterHeaderGroups = r(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (t, l, n, o) =>
                  s(
                    t,
                    (l = l.filter(
                      (e) =>
                        !(null != n && n.includes(e.id)) &&
                        !(null != o && o.includes(e.id))
                    )),
                    e,
                    "center"
                  ),
                u(e.options, a, "getCenterHeaderGroups")
              )),
              (e.getLeftHeaderGroups = r(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                ],
                (t, l, n) => {
                  var o;
                  return s(
                    t,
                    null !=
                      (o =
                        null == n
                          ? void 0
                          : n
                              .map((e) => l.find((t) => t.id === e))
                              .filter(Boolean))
                      ? o
                      : [],
                    e,
                    "left"
                  );
                },
                u(e.options, a, "getLeftHeaderGroups")
              )),
              (e.getRightHeaderGroups = r(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.right,
                ],
                (t, l, n) => {
                  var o;
                  return s(
                    t,
                    null !=
                      (o =
                        null == n
                          ? void 0
                          : n
                              .map((e) => l.find((t) => t.id === e))
                              .filter(Boolean))
                      ? o
                      : [],
                    e,
                    "right"
                  );
                },
                u(e.options, a, "getRightHeaderGroups")
              )),
              (e.getFooterGroups = r(
                () => [e.getHeaderGroups()],
                (e) => [...e].reverse(),
                u(e.options, a, "getFooterGroups")
              )),
              (e.getLeftFooterGroups = r(
                () => [e.getLeftHeaderGroups()],
                (e) => [...e].reverse(),
                u(e.options, a, "getLeftFooterGroups")
              )),
              (e.getCenterFooterGroups = r(
                () => [e.getCenterHeaderGroups()],
                (e) => [...e].reverse(),
                u(e.options, a, "getCenterFooterGroups")
              )),
              (e.getRightFooterGroups = r(
                () => [e.getRightHeaderGroups()],
                (e) => [...e].reverse(),
                u(e.options, a, "getRightFooterGroups")
              )),
              (e.getFlatHeaders = r(
                () => [e.getHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                u(e.options, a, "getFlatHeaders")
              )),
              (e.getLeftFlatHeaders = r(
                () => [e.getLeftHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                u(e.options, a, "getLeftFlatHeaders")
              )),
              (e.getCenterFlatHeaders = r(
                () => [e.getCenterHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                u(e.options, a, "getCenterFlatHeaders")
              )),
              (e.getRightFlatHeaders = r(
                () => [e.getRightHeaderGroups()],
                (e) => e.map((e) => e.headers).flat(),
                u(e.options, a, "getRightFlatHeaders")
              )),
              (e.getCenterLeafHeaders = r(
                () => [e.getCenterFlatHeaders()],
                (e) =>
                  e.filter((e) => {
                    var t;
                    return !(null != (t = e.subHeaders) && t.length);
                  }),
                u(e.options, a, "getCenterLeafHeaders")
              )),
              (e.getLeftLeafHeaders = r(
                () => [e.getLeftFlatHeaders()],
                (e) =>
                  e.filter((e) => {
                    var t;
                    return !(null != (t = e.subHeaders) && t.length);
                  }),
                u(e.options, a, "getLeftLeafHeaders")
              )),
              (e.getRightLeafHeaders = r(
                () => [e.getRightFlatHeaders()],
                (e) =>
                  e.filter((e) => {
                    var t;
                    return !(null != (t = e.subHeaders) && t.length);
                  }),
                u(e.options, a, "getRightLeafHeaders")
              )),
              (e.getLeafHeaders = r(
                () => [
                  e.getLeftHeaderGroups(),
                  e.getCenterHeaderGroups(),
                  e.getRightHeaderGroups(),
                ],
                (e, t, l) => {
                  var n, o, i, r, u, a;
                  return [
                    ...(null != (n = null == (o = e[0]) ? void 0 : o.headers)
                      ? n
                      : []),
                    ...(null != (i = null == (r = t[0]) ? void 0 : r.headers)
                      ? i
                      : []),
                    ...(null != (u = null == (a = l[0]) ? void 0 : a.headers)
                      ? u
                      : []),
                  ]
                    .map((e) => e.getLeafHeaders())
                    .flat();
                },
                u(e.options, a, "getLeafHeaders")
              ));
          },
        },
        {
          getInitialState: (e) => ({ columnVisibility: {}, ...e }),
          getDefaultOptions: (e) => ({
            onColumnVisibilityChange: o("columnVisibility", e),
          }),
          createColumn: (e, t) => {
            (e.toggleVisibility = (l) => {
              e.getCanHide() &&
                t.setColumnVisibility((t) => ({
                  ...t,
                  [e.id]: null != l ? l : !e.getIsVisible(),
                }));
            }),
              (e.getIsVisible = () => {
                var l, n;
                let o = e.columns;
                return (
                  null ==
                    (l = o.length
                      ? o.some((e) => e.getIsVisible())
                      : null == (n = t.getState().columnVisibility)
                      ? void 0
                      : n[e.id]) || l
                );
              }),
              (e.getCanHide = () => {
                var l, n;
                return (
                  (null == (l = e.columnDef.enableHiding) || l) &&
                  (null == (n = t.options.enableHiding) || n)
                );
              }),
              (e.getToggleVisibilityHandler = () => (t) => {
                null == e.toggleVisibility ||
                  e.toggleVisibility(t.target.checked);
              });
          },
          createRow: (e, t) => {
            (e._getAllVisibleCells = r(
              () => [e.getAllCells(), t.getState().columnVisibility],
              (e) => e.filter((e) => e.column.getIsVisible()),
              u(t.options, "debugRows", "_getAllVisibleCells")
            )),
              (e.getVisibleCells = r(
                () => [
                  e.getLeftVisibleCells(),
                  e.getCenterVisibleCells(),
                  e.getRightVisibleCells(),
                ],
                (e, t, l) => [...e, ...t, ...l],
                u(t.options, "debugRows", "getVisibleCells")
              ));
          },
          createTable: (e) => {
            let t = (t, l) =>
              r(
                () => [
                  l(),
                  l()
                    .filter((e) => e.getIsVisible())
                    .map((e) => e.id)
                    .join("_"),
                ],
                (e) =>
                  e.filter((e) =>
                    null == e.getIsVisible ? void 0 : e.getIsVisible()
                  ),
                u(e.options, "debugColumns", t)
              );
            (e.getVisibleFlatColumns = t("getVisibleFlatColumns", () =>
              e.getAllFlatColumns()
            )),
              (e.getVisibleLeafColumns = t("getVisibleLeafColumns", () =>
                e.getAllLeafColumns()
              )),
              (e.getLeftVisibleLeafColumns = t(
                "getLeftVisibleLeafColumns",
                () => e.getLeftLeafColumns()
              )),
              (e.getRightVisibleLeafColumns = t(
                "getRightVisibleLeafColumns",
                () => e.getRightLeafColumns()
              )),
              (e.getCenterVisibleLeafColumns = t(
                "getCenterVisibleLeafColumns",
                () => e.getCenterLeafColumns()
              )),
              (e.setColumnVisibility = (t) =>
                null == e.options.onColumnVisibilityChange
                  ? void 0
                  : e.options.onColumnVisibilityChange(t)),
              (e.resetColumnVisibility = (t) => {
                var l;
                e.setColumnVisibility(
                  t
                    ? {}
                    : null != (l = e.initialState.columnVisibility)
                    ? l
                    : {}
                );
              }),
              (e.toggleAllColumnsVisible = (t) => {
                var l;
                (t = null != (l = t) ? l : !e.getIsAllColumnsVisible()),
                  e.setColumnVisibility(
                    e
                      .getAllLeafColumns()
                      .reduce(
                        (e, l) => ({
                          ...e,
                          [l.id]:
                            t || !(null != l.getCanHide && l.getCanHide()),
                        }),
                        {}
                      )
                  );
              }),
              (e.getIsAllColumnsVisible = () =>
                !e
                  .getAllLeafColumns()
                  .some((e) => !(null != e.getIsVisible && e.getIsVisible()))),
              (e.getIsSomeColumnsVisible = () =>
                e
                  .getAllLeafColumns()
                  .some((e) =>
                    null == e.getIsVisible ? void 0 : e.getIsVisible()
                  )),
              (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                var l;
                e.toggleAllColumnsVisible(
                  null == (l = t.target) ? void 0 : l.checked
                );
              });
          },
        },
        {
          getInitialState: (e) => ({ columnOrder: [], ...e }),
          getDefaultOptions: (e) => ({
            onColumnOrderChange: o("columnOrder", e),
          }),
          createColumn: (e, t) => {
            (e.getIndex = r(
              (e) => [B(t, e)],
              (t) => t.findIndex((t) => t.id === e.id),
              u(t.options, "debugColumns", "getIndex")
            )),
              (e.getIsFirstColumn = (l) => {
                var n;
                return (null == (n = B(t, l)[0]) ? void 0 : n.id) === e.id;
              }),
              (e.getIsLastColumn = (l) => {
                var n;
                let o = B(t, l);
                return (null == (n = o[o.length - 1]) ? void 0 : n.id) === e.id;
              });
          },
          createTable: (e) => {
            (e.setColumnOrder = (t) =>
              null == e.options.onColumnOrderChange
                ? void 0
                : e.options.onColumnOrderChange(t)),
              (e.resetColumnOrder = (t) => {
                var l;
                e.setColumnOrder(
                  t ? [] : null != (l = e.initialState.columnOrder) ? l : []
                );
              }),
              (e._getOrderColumnsFn = r(
                () => [
                  e.getState().columnOrder,
                  e.getState().grouping,
                  e.options.groupedColumnMode,
                ],
                (e, t, l) => (n) => {
                  let o = [];
                  if (null != e && e.length) {
                    let t = [...e],
                      l = [...n];
                    for (; l.length && t.length; ) {
                      let e = t.shift(),
                        n = l.findIndex((t) => t.id === e);
                      n > -1 && o.push(l.splice(n, 1)[0]);
                    }
                    o = [...o, ...l];
                  } else o = n;
                  return (function (e, t, l) {
                    if (!(null != t && t.length) || !l) return e;
                    let n = e.filter((e) => !t.includes(e.id));
                    return "remove" === l
                      ? n
                      : [
                          ...t
                            .map((t) => e.find((e) => e.id === t))
                            .filter(Boolean),
                          ...n,
                        ];
                  })(o, t, l);
                },
                u(e.options, "debugTable", "_getOrderColumnsFn")
              ));
          },
        },
        {
          getInitialState: (e) => ({
            columnPinning: _(),
            rowPinning: y(),
            ...e,
          }),
          getDefaultOptions: (e) => ({
            onColumnPinningChange: o("columnPinning", e),
            onRowPinningChange: o("rowPinning", e),
          }),
          createColumn: (e, t) => {
            (e.pin = (l) => {
              let n = e
                .getLeafColumns()
                .map((e) => e.id)
                .filter(Boolean);
              t.setColumnPinning((e) => {
                var t, o, i, r, u, a;
                return "right" === l
                  ? {
                      left: (null != (i = null == e ? void 0 : e.left)
                        ? i
                        : []
                      ).filter((e) => !(null != n && n.includes(e))),
                      right: [
                        ...(null != (r = null == e ? void 0 : e.right)
                          ? r
                          : []
                        ).filter((e) => !(null != n && n.includes(e))),
                        ...n,
                      ],
                    }
                  : "left" === l
                  ? {
                      left: [
                        ...(null != (u = null == e ? void 0 : e.left)
                          ? u
                          : []
                        ).filter((e) => !(null != n && n.includes(e))),
                        ...n,
                      ],
                      right: (null != (a = null == e ? void 0 : e.right)
                        ? a
                        : []
                      ).filter((e) => !(null != n && n.includes(e))),
                    }
                  : {
                      left: (null != (t = null == e ? void 0 : e.left)
                        ? t
                        : []
                      ).filter((e) => !(null != n && n.includes(e))),
                      right: (null != (o = null == e ? void 0 : e.right)
                        ? o
                        : []
                      ).filter((e) => !(null != n && n.includes(e))),
                    };
              });
            }),
              (e.getCanPin = () =>
                e.getLeafColumns().some((e) => {
                  var l, n, o;
                  return (
                    (null == (l = e.columnDef.enablePinning) || l) &&
                    (null ==
                      (n =
                        null != (o = t.options.enableColumnPinning)
                          ? o
                          : t.options.enablePinning) ||
                      n)
                  );
                })),
              (e.getIsPinned = () => {
                let l = e.getLeafColumns().map((e) => e.id),
                  { left: n, right: o } = t.getState().columnPinning,
                  i = l.some((e) => (null == n ? void 0 : n.includes(e))),
                  r = l.some((e) => (null == o ? void 0 : o.includes(e)));
                return i ? "left" : !!r && "right";
              }),
              (e.getPinnedIndex = () => {
                var l, n;
                let o = e.getIsPinned();
                return o
                  ? null !=
                    (l =
                      null == (n = t.getState().columnPinning) ||
                      null == (n = n[o])
                        ? void 0
                        : n.indexOf(e.id))
                    ? l
                    : -1
                  : 0;
              });
          },
          createRow: (e, t) => {
            (e.pin = (l, n, o) => {
              let i = n
                  ? e.getLeafRows().map((e) => {
                      let { id: t } = e;
                      return t;
                    })
                  : [],
                r = o
                  ? e.getParentRows().map((e) => {
                      let { id: t } = e;
                      return t;
                    })
                  : [],
                u = new Set([...r, e.id, ...i]);
              t.setRowPinning((e) => {
                var t, n, o, i, r, a;
                return "bottom" === l
                  ? {
                      top: (null != (o = null == e ? void 0 : e.top)
                        ? o
                        : []
                      ).filter((e) => !(null != u && u.has(e))),
                      bottom: [
                        ...(null != (i = null == e ? void 0 : e.bottom)
                          ? i
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                        ...Array.from(u),
                      ],
                    }
                  : "top" === l
                  ? {
                      top: [
                        ...(null != (r = null == e ? void 0 : e.top)
                          ? r
                          : []
                        ).filter((e) => !(null != u && u.has(e))),
                        ...Array.from(u),
                      ],
                      bottom: (null != (a = null == e ? void 0 : e.bottom)
                        ? a
                        : []
                      ).filter((e) => !(null != u && u.has(e))),
                    }
                  : {
                      top: (null != (t = null == e ? void 0 : e.top)
                        ? t
                        : []
                      ).filter((e) => !(null != u && u.has(e))),
                      bottom: (null != (n = null == e ? void 0 : e.bottom)
                        ? n
                        : []
                      ).filter((e) => !(null != u && u.has(e))),
                    };
              });
            }),
              (e.getCanPin = () => {
                var l;
                let { enableRowPinning: n, enablePinning: o } = t.options;
                return "function" == typeof n
                  ? n(e)
                  : null == (l = null != n ? n : o) || l;
              }),
              (e.getIsPinned = () => {
                let l = [e.id],
                  { top: n, bottom: o } = t.getState().rowPinning,
                  i = l.some((e) => (null == n ? void 0 : n.includes(e))),
                  r = l.some((e) => (null == o ? void 0 : o.includes(e)));
                return i ? "top" : !!r && "bottom";
              }),
              (e.getPinnedIndex = () => {
                var l, n;
                let o = e.getIsPinned();
                if (!o) return -1;
                let i =
                  null == (l = t._getPinnedRows(o))
                    ? void 0
                    : l.map((e) => {
                        let { id: t } = e;
                        return t;
                      });
                return null != (n = null == i ? void 0 : i.indexOf(e.id))
                  ? n
                  : -1;
              }),
              (e.getCenterVisibleCells = r(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.left,
                  t.getState().columnPinning.right,
                ],
                (e, t, l) => {
                  let n = [...(null != t ? t : []), ...(null != l ? l : [])];
                  return e.filter((e) => !n.includes(e.column.id));
                },
                u(t.options, "debugRows", "getCenterVisibleCells")
              )),
              (e.getLeftVisibleCells = r(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.left,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "left" })),
                u(t.options, "debugRows", "getLeftVisibleCells")
              )),
              (e.getRightVisibleCells = r(
                () => [
                  e._getAllVisibleCells(),
                  t.getState().columnPinning.right,
                ],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.column.id === t))
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: "right" })),
                u(t.options, "debugRows", "getRightVisibleCells")
              ));
          },
          createTable: (e) => {
            (e.setColumnPinning = (t) =>
              null == e.options.onColumnPinningChange
                ? void 0
                : e.options.onColumnPinningChange(t)),
              (e.resetColumnPinning = (t) => {
                var l, n;
                return e.setColumnPinning(
                  t
                    ? _()
                    : null !=
                      (l =
                        null == (n = e.initialState) ? void 0 : n.columnPinning)
                    ? l
                    : _()
                );
              }),
              (e.getIsSomeColumnsPinned = (t) => {
                var l, n, o;
                let i = e.getState().columnPinning;
                return t
                  ? !!(null == (l = i[t]) ? void 0 : l.length)
                  : !!(
                      (null == (n = i.left) ? void 0 : n.length) ||
                      (null == (o = i.right) ? void 0 : o.length)
                    );
              }),
              (e.getLeftLeafColumns = r(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                u(e.options, "debugColumns", "getLeftLeafColumns")
              )),
              (e.getRightLeafColumns = r(
                () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
                (e, t) =>
                  (null != t ? t : [])
                    .map((t) => e.find((e) => e.id === t))
                    .filter(Boolean),
                u(e.options, "debugColumns", "getRightLeafColumns")
              )),
              (e.getCenterLeafColumns = r(
                () => [
                  e.getAllLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (e, t, l) => {
                  let n = [...(null != t ? t : []), ...(null != l ? l : [])];
                  return e.filter((e) => !n.includes(e.id));
                },
                u(e.options, "debugColumns", "getCenterLeafColumns")
              )),
              (e.setRowPinning = (t) =>
                null == e.options.onRowPinningChange
                  ? void 0
                  : e.options.onRowPinningChange(t)),
              (e.resetRowPinning = (t) => {
                var l, n;
                return e.setRowPinning(
                  t
                    ? y()
                    : null !=
                      (l = null == (n = e.initialState) ? void 0 : n.rowPinning)
                    ? l
                    : y()
                );
              }),
              (e.getIsSomeRowsPinned = (t) => {
                var l, n, o;
                let i = e.getState().rowPinning;
                return t
                  ? !!(null == (l = i[t]) ? void 0 : l.length)
                  : !!(
                      (null == (n = i.top) ? void 0 : n.length) ||
                      (null == (o = i.bottom) ? void 0 : o.length)
                    );
              }),
              (e._getPinnedRows = r(
                (t) => [e.getRowModel().rows, e.getState().rowPinning[t], t],
                (t, l, n) => {
                  var o;
                  return (
                    null == (o = e.options.keepPinnedRows) || o
                      ? (null != l ? l : []).map((t) => {
                          let l = e.getRow(t, !0);
                          return l.getIsAllParentsExpanded() ? l : null;
                        })
                      : (null != l ? l : []).map((e) =>
                          t.find((t) => t.id === e)
                        )
                  )
                    .filter(Boolean)
                    .map((e) => ({ ...e, position: n }));
                },
                u(e.options, "debugRows", "_getPinnedRows")
              )),
              (e.getTopRows = () => e._getPinnedRows("top")),
              (e.getBottomRows = () => e._getPinnedRows("bottom")),
              (e.getCenterRows = r(
                () => [
                  e.getRowModel().rows,
                  e.getState().rowPinning.top,
                  e.getState().rowPinning.bottom,
                ],
                (e, t, l) => {
                  let n = new Set([
                    ...(null != t ? t : []),
                    ...(null != l ? l : []),
                  ]);
                  return e.filter((e) => !n.has(e.id));
                },
                u(e.options, "debugRows", "getCenterRows")
              ));
          },
        },
        {
          getDefaultColumnDef: () => ({ filterFn: "auto" }),
          getInitialState: (e) => ({
            columnFilters: [],
            globalFilter: void 0,
            ...e,
          }),
          getDefaultOptions: (e) => ({
            onColumnFiltersChange: o("columnFilters", e),
            onGlobalFilterChange: o("globalFilter", e),
            filterFromLeafRows: !1,
            maxLeafRowFilterDepth: 100,
            globalFilterFn: "auto",
            getColumnCanGlobalFilter: (t) => {
              var l;
              let n =
                null == (l = e.getCoreRowModel().flatRows[0]) ||
                null == (l = l._getAllCellsByColumnId()[t.id])
                  ? void 0
                  : l.getValue();
              return "string" == typeof n || "number" == typeof n;
            },
          }),
          createColumn: (e, t) => {
            (e.getAutoFilterFn = () => {
              let l = t.getCoreRowModel().flatRows[0],
                n = null == l ? void 0 : l.getValue(e.id);
              return "string" == typeof n
                ? M.includesString
                : "number" == typeof n
                ? M.inNumberRange
                : "boolean" == typeof n || (null !== n && "object" == typeof n)
                ? M.equals
                : Array.isArray(n)
                ? M.arrIncludes
                : M.weakEquals;
            }),
              (e.getFilterFn = () => {
                var l, n;
                return i(e.columnDef.filterFn)
                  ? e.columnDef.filterFn
                  : "auto" === e.columnDef.filterFn
                  ? e.getAutoFilterFn()
                  : null !=
                    (l =
                      null == (n = t.options.filterFns)
                        ? void 0
                        : n[e.columnDef.filterFn])
                  ? l
                  : M[e.columnDef.filterFn];
              }),
              (e.getCanFilter = () => {
                var l, n, o;
                return (
                  (null == (l = e.columnDef.enableColumnFilter) || l) &&
                  (null == (n = t.options.enableColumnFilters) || n) &&
                  (null == (o = t.options.enableFilters) || o) &&
                  !!e.accessorFn
                );
              }),
              (e.getCanGlobalFilter = () => {
                var l, n, o, i;
                return (
                  (null == (l = e.columnDef.enableGlobalFilter) || l) &&
                  (null == (n = t.options.enableGlobalFilter) || n) &&
                  (null == (o = t.options.enableFilters) || o) &&
                  (null ==
                    (i =
                      null == t.options.getColumnCanGlobalFilter
                        ? void 0
                        : t.options.getColumnCanGlobalFilter(e)) ||
                    i) &&
                  !!e.accessorFn
                );
              }),
              (e.getIsFiltered = () => e.getFilterIndex() > -1),
              (e.getFilterValue = () => {
                var l;
                return null == (l = t.getState().columnFilters) ||
                  null == (l = l.find((t) => t.id === e.id))
                  ? void 0
                  : l.value;
              }),
              (e.getFilterIndex = () => {
                var l, n;
                return null !=
                  (l =
                    null == (n = t.getState().columnFilters)
                      ? void 0
                      : n.findIndex((t) => t.id === e.id))
                  ? l
                  : -1;
              }),
              (e.setFilterValue = (l) => {
                t.setColumnFilters((t) => {
                  var o, i;
                  let r = e.getFilterFn(),
                    u = null == t ? void 0 : t.find((t) => t.id === e.id),
                    a = n(l, u ? u.value : void 0);
                  if (P(r, a, e))
                    return null !=
                      (o = null == t ? void 0 : t.filter((t) => t.id !== e.id))
                      ? o
                      : [];
                  let g = { id: e.id, value: a };
                  return u
                    ? null !=
                      (i =
                        null == t
                          ? void 0
                          : t.map((t) => (t.id === e.id ? g : t)))
                      ? i
                      : []
                    : null != t && t.length
                    ? [...t, g]
                    : [g];
                });
              }),
              (e._getFacetedRowModel =
                t.options.getFacetedRowModel &&
                t.options.getFacetedRowModel(t, e.id)),
              (e.getFacetedRowModel = () =>
                e._getFacetedRowModel
                  ? e._getFacetedRowModel()
                  : t.getPreFilteredRowModel()),
              (e._getFacetedUniqueValues =
                t.options.getFacetedUniqueValues &&
                t.options.getFacetedUniqueValues(t, e.id)),
              (e.getFacetedUniqueValues = () =>
                e._getFacetedUniqueValues
                  ? e._getFacetedUniqueValues()
                  : new Map()),
              (e._getFacetedMinMaxValues =
                t.options.getFacetedMinMaxValues &&
                t.options.getFacetedMinMaxValues(t, e.id)),
              (e.getFacetedMinMaxValues = () => {
                if (e._getFacetedMinMaxValues)
                  return e._getFacetedMinMaxValues();
              });
          },
          createRow: (e, t) => {
            (e.columnFilters = {}), (e.columnFiltersMeta = {});
          },
          createTable: (e) => {
            (e.getGlobalAutoFilterFn = () => M.includesString),
              (e.getGlobalFilterFn = () => {
                var t, l;
                let { globalFilterFn: n } = e.options;
                return i(n)
                  ? n
                  : "auto" === n
                  ? e.getGlobalAutoFilterFn()
                  : null !=
                    (t = null == (l = e.options.filterFns) ? void 0 : l[n])
                  ? t
                  : M[n];
              }),
              (e.setColumnFilters = (t) => {
                let l = e.getAllLeafColumns();
                null == e.options.onColumnFiltersChange ||
                  e.options.onColumnFiltersChange((e) => {
                    var o;
                    return null == (o = n(t, e))
                      ? void 0
                      : o.filter((e) => {
                          let t = l.find((t) => t.id === e.id);
                          return !(t && P(t.getFilterFn(), e.value, t));
                        });
                  });
              }),
              (e.setGlobalFilter = (t) => {
                null == e.options.onGlobalFilterChange ||
                  e.options.onGlobalFilterChange(t);
              }),
              (e.resetGlobalFilter = (t) => {
                e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
              }),
              (e.resetColumnFilters = (t) => {
                var l, n;
                e.setColumnFilters(
                  t
                    ? []
                    : null !=
                      (l =
                        null == (n = e.initialState) ? void 0 : n.columnFilters)
                    ? l
                    : []
                );
              }),
              (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
              (e.getFilteredRowModel = () =>
                (!e._getFilteredRowModel &&
                  e.options.getFilteredRowModel &&
                  (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
                e.options.manualFiltering || !e._getFilteredRowModel)
                  ? e.getPreFilteredRowModel()
                  : e._getFilteredRowModel()),
              (e._getGlobalFacetedRowModel =
                e.options.getFacetedRowModel &&
                e.options.getFacetedRowModel(e, "__global__")),
              (e.getGlobalFacetedRowModel = () =>
                e.options.manualFiltering || !e._getGlobalFacetedRowModel
                  ? e.getPreFilteredRowModel()
                  : e._getGlobalFacetedRowModel()),
              (e._getGlobalFacetedUniqueValues =
                e.options.getFacetedUniqueValues &&
                e.options.getFacetedUniqueValues(e, "__global__")),
              (e.getGlobalFacetedUniqueValues = () =>
                e._getGlobalFacetedUniqueValues
                  ? e._getGlobalFacetedUniqueValues()
                  : new Map()),
              (e._getGlobalFacetedMinMaxValues =
                e.options.getFacetedMinMaxValues &&
                e.options.getFacetedMinMaxValues(e, "__global__")),
              (e.getGlobalFacetedMinMaxValues = () => {
                if (e._getGlobalFacetedMinMaxValues)
                  return e._getGlobalFacetedMinMaxValues();
              });
          },
        },
        {
          getInitialState: (e) => ({ sorting: [], ...e }),
          getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }),
          getDefaultOptions: (e) => ({
            onSortingChange: o("sorting", e),
            isMultiSortEvent: (e) => e.shiftKey,
          }),
          createColumn: (e, t) => {
            (e.getAutoSortingFn = () => {
              let l = t.getFilteredRowModel().flatRows.slice(10),
                n = !1;
              for (let t of l) {
                let l = null == t ? void 0 : t.getValue(e.id);
                if ("[object Date]" === Object.prototype.toString.call(l))
                  return T.datetime;
                if ("string" == typeof l && ((n = !0), l.split(H).length > 1))
                  return T.alphanumeric;
              }
              return n ? T.text : T.basic;
            }),
              (e.getAutoSortDir = () => {
                let l = t.getFilteredRowModel().flatRows[0];
                return "string" ==
                  typeof (null == l ? void 0 : l.getValue(e.id))
                  ? "asc"
                  : "desc";
              }),
              (e.getSortingFn = () => {
                var l, n;
                if (!e) throw Error();
                return i(e.columnDef.sortingFn)
                  ? e.columnDef.sortingFn
                  : "auto" === e.columnDef.sortingFn
                  ? e.getAutoSortingFn()
                  : null !=
                    (l =
                      null == (n = t.options.sortingFns)
                        ? void 0
                        : n[e.columnDef.sortingFn])
                  ? l
                  : T[e.columnDef.sortingFn];
              }),
              (e.toggleSorting = (l, n) => {
                let o = e.getNextSortingOrder(),
                  i = null != l;
                t.setSorting((r) => {
                  let u;
                  let a = null == r ? void 0 : r.find((t) => t.id === e.id),
                    g = null == r ? void 0 : r.findIndex((t) => t.id === e.id),
                    s = [],
                    d = i ? l : "desc" === o;
                  if (
                    ("toggle" !=
                      (u =
                        null != r && r.length && e.getCanMultiSort() && n
                          ? a
                            ? "toggle"
                            : "add"
                          : null != r && r.length && g !== r.length - 1
                          ? "replace"
                          : a
                          ? "toggle"
                          : "replace") ||
                      i ||
                      o ||
                      (u = "remove"),
                    "add" === u)
                  ) {
                    var c;
                    (s = [...r, { id: e.id, desc: d }]).splice(
                      0,
                      s.length -
                        (null != (c = t.options.maxMultiSortColCount)
                          ? c
                          : Number.MAX_SAFE_INTEGER)
                    );
                  } else
                    s =
                      "toggle" === u
                        ? r.map((t) => (t.id === e.id ? { ...t, desc: d } : t))
                        : "remove" === u
                        ? r.filter((t) => t.id !== e.id)
                        : [{ id: e.id, desc: d }];
                  return s;
                });
              }),
              (e.getFirstSortDir = () => {
                var l, n;
                return (
                  null !=
                  (l =
                    null != (n = e.columnDef.sortDescFirst)
                      ? n
                      : t.options.sortDescFirst)
                    ? l
                    : "desc" === e.getAutoSortDir()
                )
                  ? "desc"
                  : "asc";
              }),
              (e.getNextSortingOrder = (l) => {
                var n, o;
                let i = e.getFirstSortDir(),
                  r = e.getIsSorted();
                return r
                  ? (r === i ||
                      (null != (n = t.options.enableSortingRemoval) && !n) ||
                      (!!l &&
                        null != (o = t.options.enableMultiRemove) &&
                        !o)) &&
                      ("desc" === r ? "asc" : "desc")
                  : i;
              }),
              (e.getCanSort = () => {
                var l, n;
                return (
                  (null == (l = e.columnDef.enableSorting) || l) &&
                  (null == (n = t.options.enableSorting) || n) &&
                  !!e.accessorFn
                );
              }),
              (e.getCanMultiSort = () => {
                var l, n;
                return null !=
                  (l =
                    null != (n = e.columnDef.enableMultiSort)
                      ? n
                      : t.options.enableMultiSort)
                  ? l
                  : !!e.accessorFn;
              }),
              (e.getIsSorted = () => {
                var l;
                let n =
                  null == (l = t.getState().sorting)
                    ? void 0
                    : l.find((t) => t.id === e.id);
                return !!n && (n.desc ? "desc" : "asc");
              }),
              (e.getSortIndex = () => {
                var l, n;
                return null !=
                  (l =
                    null == (n = t.getState().sorting)
                      ? void 0
                      : n.findIndex((t) => t.id === e.id))
                  ? l
                  : -1;
              }),
              (e.clearSorting = () => {
                t.setSorting((t) =>
                  null != t && t.length ? t.filter((t) => t.id !== e.id) : []
                );
              }),
              (e.getToggleSortingHandler = () => {
                let l = e.getCanSort();
                return (n) => {
                  l &&
                    (null == n.persist || n.persist(),
                    null == e.toggleSorting ||
                      e.toggleSorting(
                        void 0,
                        !!e.getCanMultiSort() &&
                          (null == t.options.isMultiSortEvent
                            ? void 0
                            : t.options.isMultiSortEvent(n))
                      ));
                };
              });
          },
          createTable: (e) => {
            (e.setSorting = (t) =>
              null == e.options.onSortingChange
                ? void 0
                : e.options.onSortingChange(t)),
              (e.resetSorting = (t) => {
                var l, n;
                e.setSorting(
                  t
                    ? []
                    : null !=
                      (l = null == (n = e.initialState) ? void 0 : n.sorting)
                    ? l
                    : []
                );
              }),
              (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
              (e.getSortedRowModel = () =>
                (!e._getSortedRowModel &&
                  e.options.getSortedRowModel &&
                  (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                e.options.manualSorting || !e._getSortedRowModel)
                  ? e.getPreSortedRowModel()
                  : e._getSortedRowModel());
          },
        },
        {
          getDefaultColumnDef: () => ({
            aggregatedCell: (e) => {
              var t, l;
              return null !=
                (t =
                  null == (l = e.getValue()) || null == l.toString
                    ? void 0
                    : l.toString())
                ? t
                : null;
            },
            aggregationFn: "auto",
          }),
          getInitialState: (e) => ({ grouping: [], ...e }),
          getDefaultOptions: (e) => ({
            onGroupingChange: o("grouping", e),
            groupedColumnMode: "reorder",
          }),
          createColumn: (e, t) => {
            (e.toggleGrouping = () => {
              t.setGrouping((t) =>
                null != t && t.includes(e.id)
                  ? t.filter((t) => t !== e.id)
                  : [...(null != t ? t : []), e.id]
              );
            }),
              (e.getCanGroup = () => {
                var l, n, o, i;
                return null !=
                  (l =
                    null ==
                      (n =
                        null !=
                        (o = null == (i = e.columnDef.enableGrouping) || i)
                          ? o
                          : t.options.enableGrouping) || n)
                  ? l
                  : !!e.accessorFn;
              }),
              (e.getIsGrouped = () => {
                var l;
                return null == (l = t.getState().grouping)
                  ? void 0
                  : l.includes(e.id);
              }),
              (e.getGroupedIndex = () => {
                var l;
                return null == (l = t.getState().grouping)
                  ? void 0
                  : l.indexOf(e.id);
              }),
              (e.getToggleGroupingHandler = () => {
                let t = e.getCanGroup();
                return () => {
                  t && e.toggleGrouping();
                };
              }),
              (e.getAutoAggregationFn = () => {
                let l = t.getCoreRowModel().flatRows[0],
                  n = null == l ? void 0 : l.getValue(e.id);
                return "number" == typeof n
                  ? I.sum
                  : "[object Date]" === Object.prototype.toString.call(n)
                  ? I.extent
                  : void 0;
              }),
              (e.getAggregationFn = () => {
                var l, n;
                if (!e) throw Error();
                return i(e.columnDef.aggregationFn)
                  ? e.columnDef.aggregationFn
                  : "auto" === e.columnDef.aggregationFn
                  ? e.getAutoAggregationFn()
                  : null !=
                    (l =
                      null == (n = t.options.aggregationFns)
                        ? void 0
                        : n[e.columnDef.aggregationFn])
                  ? l
                  : I[e.columnDef.aggregationFn];
              });
          },
          createTable: (e) => {
            (e.setGrouping = (t) =>
              null == e.options.onGroupingChange
                ? void 0
                : e.options.onGroupingChange(t)),
              (e.resetGrouping = (t) => {
                var l, n;
                e.setGrouping(
                  t
                    ? []
                    : null !=
                      (l = null == (n = e.initialState) ? void 0 : n.grouping)
                    ? l
                    : []
                );
              }),
              (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
              (e.getGroupedRowModel = () =>
                (!e._getGroupedRowModel &&
                  e.options.getGroupedRowModel &&
                  (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                e.options.manualGrouping || !e._getGroupedRowModel)
                  ? e.getPreGroupedRowModel()
                  : e._getGroupedRowModel());
          },
          createRow: (e, t) => {
            (e.getIsGrouped = () => !!e.groupingColumnId),
              (e.getGroupingValue = (l) => {
                if (e._groupingValuesCache.hasOwnProperty(l))
                  return e._groupingValuesCache[l];
                let n = t.getColumn(l);
                return null != n && n.columnDef.getGroupingValue
                  ? ((e._groupingValuesCache[l] = n.columnDef.getGroupingValue(
                      e.original
                    )),
                    e._groupingValuesCache[l])
                  : e.getValue(l);
              }),
              (e._groupingValuesCache = {});
          },
          createCell: (e, t, l, n) => {
            (e.getIsGrouped = () =>
              t.getIsGrouped() && t.id === l.groupingColumnId),
              (e.getIsPlaceholder = () =>
                !e.getIsGrouped() && t.getIsGrouped()),
              (e.getIsAggregated = () => {
                var t;
                return (
                  !e.getIsGrouped() &&
                  !e.getIsPlaceholder() &&
                  !!(null != (t = l.subRows) && t.length)
                );
              });
          },
        },
        {
          getInitialState: (e) => ({ expanded: {}, ...e }),
          getDefaultOptions: (e) => ({
            onExpandedChange: o("expanded", e),
            paginateExpandedRows: !0,
          }),
          createTable: (e) => {
            let t = !1,
              l = !1;
            (e._autoResetExpanded = () => {
              var n, o;
              if (!t) {
                e._queue(() => {
                  t = !0;
                });
                return;
              }
              if (
                null !=
                (n =
                  null != (o = e.options.autoResetAll)
                    ? o
                    : e.options.autoResetExpanded)
                  ? n
                  : !e.options.manualExpanding
              ) {
                if (l) return;
                (l = !0),
                  e._queue(() => {
                    e.resetExpanded(), (l = !1);
                  });
              }
            }),
              (e.setExpanded = (t) =>
                null == e.options.onExpandedChange
                  ? void 0
                  : e.options.onExpandedChange(t)),
              (e.toggleAllRowsExpanded = (t) => {
                (null != t ? t : !e.getIsAllRowsExpanded())
                  ? e.setExpanded(!0)
                  : e.setExpanded({});
              }),
              (e.resetExpanded = (t) => {
                var l, n;
                e.setExpanded(
                  t
                    ? {}
                    : null !=
                      (l = null == (n = e.initialState) ? void 0 : n.expanded)
                    ? l
                    : {}
                );
              }),
              (e.getCanSomeRowsExpand = () =>
                e
                  .getPrePaginationRowModel()
                  .flatRows.some((e) => e.getCanExpand())),
              (e.getToggleAllRowsExpandedHandler = () => (t) => {
                null == t.persist || t.persist(), e.toggleAllRowsExpanded();
              }),
              (e.getIsSomeRowsExpanded = () => {
                let t = e.getState().expanded;
                return !0 === t || Object.values(t).some(Boolean);
              }),
              (e.getIsAllRowsExpanded = () => {
                let t = e.getState().expanded;
                return "boolean" == typeof t
                  ? !0 === t
                  : !(
                      !Object.keys(t).length ||
                      e.getRowModel().flatRows.some((e) => !e.getIsExpanded())
                    );
              }),
              (e.getExpandedDepth = () => {
                let t = 0;
                return (
                  (!0 === e.getState().expanded
                    ? Object.keys(e.getRowModel().rowsById)
                    : Object.keys(e.getState().expanded)
                  ).forEach((e) => {
                    let l = e.split(".");
                    t = Math.max(t, l.length);
                  }),
                  t
                );
              }),
              (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
              (e.getExpandedRowModel = () =>
                (!e._getExpandedRowModel &&
                  e.options.getExpandedRowModel &&
                  (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                e.options.manualExpanding || !e._getExpandedRowModel)
                  ? e.getPreExpandedRowModel()
                  : e._getExpandedRowModel());
          },
          createRow: (e, t) => {
            (e.toggleExpanded = (l) => {
              t.setExpanded((n) => {
                var o;
                let i = !0 === n || !!(null != n && n[e.id]),
                  r = {};
                if (
                  (!0 === n
                    ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                        r[e] = !0;
                      })
                    : (r = n),
                  (l = null != (o = l) ? o : !i),
                  !i && l)
                )
                  return { ...r, [e.id]: !0 };
                if (i && !l) {
                  let { [e.id]: t, ...l } = r;
                  return l;
                }
                return n;
              });
            }),
              (e.getIsExpanded = () => {
                var l;
                let n = t.getState().expanded;
                return !!(null !=
                (l =
                  null == t.options.getIsRowExpanded
                    ? void 0
                    : t.options.getIsRowExpanded(e))
                  ? l
                  : !0 === n || (null == n ? void 0 : n[e.id]));
              }),
              (e.getCanExpand = () => {
                var l, n, o;
                return null !=
                  (l =
                    null == t.options.getRowCanExpand
                      ? void 0
                      : t.options.getRowCanExpand(e))
                  ? l
                  : (null == (n = t.options.enableExpanding) || n) &&
                      !!(null != (o = e.subRows) && o.length);
              }),
              (e.getIsAllParentsExpanded = () => {
                let l = !0,
                  n = e;
                for (; l && n.parentId; )
                  l = (n = t.getRow(n.parentId, !0)).getIsExpanded();
                return l;
              }),
              (e.getToggleExpandedHandler = () => {
                let t = e.getCanExpand();
                return () => {
                  t && e.toggleExpanded();
                };
              });
          },
        },
        {
          getInitialState: (e) => ({
            ...e,
            pagination: { ...x(), ...(null == e ? void 0 : e.pagination) },
          }),
          getDefaultOptions: (e) => ({
            onPaginationChange: o("pagination", e),
          }),
          createTable: (e) => {
            let t = !1,
              l = !1;
            (e._autoResetPageIndex = () => {
              var n, o;
              if (!t) {
                e._queue(() => {
                  t = !0;
                });
                return;
              }
              if (
                null !=
                (n =
                  null != (o = e.options.autoResetAll)
                    ? o
                    : e.options.autoResetPageIndex)
                  ? n
                  : !e.options.manualPagination
              ) {
                if (l) return;
                (l = !0),
                  e._queue(() => {
                    e.resetPageIndex(), (l = !1);
                  });
              }
            }),
              (e.setPagination = (t) =>
                null == e.options.onPaginationChange
                  ? void 0
                  : e.options.onPaginationChange((e) => n(t, e))),
              (e.resetPagination = (t) => {
                var l;
                e.setPagination(
                  t ? x() : null != (l = e.initialState.pagination) ? l : x()
                );
              }),
              (e.setPageIndex = (t) => {
                e.setPagination((l) => {
                  let o = n(t, l.pageIndex);
                  return (
                    (o = Math.max(
                      0,
                      Math.min(
                        o,
                        void 0 === e.options.pageCount ||
                          -1 === e.options.pageCount
                          ? Number.MAX_SAFE_INTEGER
                          : e.options.pageCount - 1
                      )
                    )),
                    { ...l, pageIndex: o }
                  );
                });
              }),
              (e.resetPageIndex = (t) => {
                var l, n;
                e.setPageIndex(
                  t
                    ? 0
                    : null !=
                      (l =
                        null == (n = e.initialState) ||
                        null == (n = n.pagination)
                          ? void 0
                          : n.pageIndex)
                    ? l
                    : 0
                );
              }),
              (e.resetPageSize = (t) => {
                var l, n;
                e.setPageSize(
                  t
                    ? 10
                    : null !=
                      (l =
                        null == (n = e.initialState) ||
                        null == (n = n.pagination)
                          ? void 0
                          : n.pageSize)
                    ? l
                    : 10
                );
              }),
              (e.setPageSize = (t) => {
                e.setPagination((e) => {
                  let l = Math.max(1, n(t, e.pageSize)),
                    o = e.pageSize * e.pageIndex;
                  return { ...e, pageIndex: Math.floor(o / l), pageSize: l };
                });
              }),
              (e.setPageCount = (t) =>
                e.setPagination((l) => {
                  var o;
                  let i = n(t, null != (o = e.options.pageCount) ? o : -1);
                  return (
                    "number" == typeof i && (i = Math.max(-1, i)),
                    { ...l, pageCount: i }
                  );
                })),
              (e.getPageOptions = r(
                () => [e.getPageCount()],
                (e) => {
                  let t = [];
                  return (
                    e &&
                      e > 0 &&
                      (t = [...Array(e)].fill(null).map((e, t) => t)),
                    t
                  );
                },
                u(e.options, "debugTable", "getPageOptions")
              )),
              (e.getCanPreviousPage = () =>
                e.getState().pagination.pageIndex > 0),
              (e.getCanNextPage = () => {
                let { pageIndex: t } = e.getState().pagination,
                  l = e.getPageCount();
                return -1 === l || (0 !== l && t < l - 1);
              }),
              (e.previousPage = () => e.setPageIndex((e) => e - 1)),
              (e.nextPage = () => e.setPageIndex((e) => e + 1)),
              (e.firstPage = () => e.setPageIndex(0)),
              (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
              (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
              (e.getPaginationRowModel = () =>
                (!e._getPaginationRowModel &&
                  e.options.getPaginationRowModel &&
                  (e._getPaginationRowModel =
                    e.options.getPaginationRowModel(e)),
                e.options.manualPagination || !e._getPaginationRowModel)
                  ? e.getPrePaginationRowModel()
                  : e._getPaginationRowModel()),
              (e.getPageCount = () => {
                var t;
                return null != (t = e.options.pageCount)
                  ? t
                  : Math.ceil(
                      e.getRowCount() / e.getState().pagination.pageSize
                    );
              }),
              (e.getRowCount = () => {
                var t;
                return null != (t = e.options.rowCount)
                  ? t
                  : e.getPrePaginationRowModel().rows.length;
              });
          },
        },
        {
          getInitialState: (e) => ({ rowSelection: {}, ...e }),
          getDefaultOptions: (e) => ({
            onRowSelectionChange: o("rowSelection", e),
            enableRowSelection: !0,
            enableMultiRowSelection: !0,
            enableSubRowSelection: !0,
          }),
          createTable: (e) => {
            (e.setRowSelection = (t) =>
              null == e.options.onRowSelectionChange
                ? void 0
                : e.options.onRowSelectionChange(t)),
              (e.resetRowSelection = (t) => {
                var l;
                return e.setRowSelection(
                  t ? {} : null != (l = e.initialState.rowSelection) ? l : {}
                );
              }),
              (e.toggleAllRowsSelected = (t) => {
                e.setRowSelection((l) => {
                  t = void 0 !== t ? t : !e.getIsAllRowsSelected();
                  let n = { ...l },
                    o = e.getPreGroupedRowModel().flatRows;
                  return (
                    t
                      ? o.forEach((e) => {
                          e.getCanSelect() && (n[e.id] = !0);
                        })
                      : o.forEach((e) => {
                          delete n[e.id];
                        }),
                    n
                  );
                });
              }),
              (e.toggleAllPageRowsSelected = (t) =>
                e.setRowSelection((l) => {
                  let n = void 0 !== t ? t : !e.getIsAllPageRowsSelected(),
                    o = { ...l };
                  return (
                    e.getRowModel().rows.forEach((t) => {
                      E(o, t.id, n, !0, e);
                    }),
                    o
                  );
                })),
              (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
              (e.getSelectedRowModel = r(
                () => [e.getState().rowSelection, e.getCoreRowModel()],
                (t, l) =>
                  Object.keys(t).length
                    ? G(e, l)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable", "getSelectedRowModel")
              )),
              (e.getFilteredSelectedRowModel = r(
                () => [e.getState().rowSelection, e.getFilteredRowModel()],
                (t, l) =>
                  Object.keys(t).length
                    ? G(e, l)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable", "getFilteredSelectedRowModel")
              )),
              (e.getGroupedSelectedRowModel = r(
                () => [e.getState().rowSelection, e.getSortedRowModel()],
                (t, l) =>
                  Object.keys(t).length
                    ? G(e, l)
                    : { rows: [], flatRows: [], rowsById: {} },
                u(e.options, "debugTable", "getGroupedSelectedRowModel")
              )),
              (e.getIsAllRowsSelected = () => {
                let t = e.getFilteredRowModel().flatRows,
                  { rowSelection: l } = e.getState(),
                  n = !!(t.length && Object.keys(l).length);
                return (
                  n && t.some((e) => e.getCanSelect() && !l[e.id]) && (n = !1),
                  n
                );
              }),
              (e.getIsAllPageRowsSelected = () => {
                let t = e
                    .getPaginationRowModel()
                    .flatRows.filter((e) => e.getCanSelect()),
                  { rowSelection: l } = e.getState(),
                  n = !!t.length;
                return n && t.some((e) => !l[e.id]) && (n = !1), n;
              }),
              (e.getIsSomeRowsSelected = () => {
                var t;
                let l = Object.keys(
                  null != (t = e.getState().rowSelection) ? t : {}
                ).length;
                return l > 0 && l < e.getFilteredRowModel().flatRows.length;
              }),
              (e.getIsSomePageRowsSelected = () => {
                let t = e.getPaginationRowModel().flatRows;
                return (
                  !e.getIsAllPageRowsSelected() &&
                  t
                    .filter((e) => e.getCanSelect())
                    .some((e) => e.getIsSelected() || e.getIsSomeSelected())
                );
              }),
              (e.getToggleAllRowsSelectedHandler = () => (t) => {
                e.toggleAllRowsSelected(t.target.checked);
              }),
              (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
                e.toggleAllPageRowsSelected(t.target.checked);
              });
          },
          createRow: (e, t) => {
            (e.toggleSelected = (l, n) => {
              let o = e.getIsSelected();
              t.setRowSelection((i) => {
                var r;
                if (((l = void 0 !== l ? l : !o), e.getCanSelect() && o === l))
                  return i;
                let u = { ...i };
                return (
                  E(
                    u,
                    e.id,
                    l,
                    null == (r = null == n ? void 0 : n.selectChildren) || r,
                    t
                  ),
                  u
                );
              });
            }),
              (e.getIsSelected = () => {
                let { rowSelection: l } = t.getState();
                return L(e, l);
              }),
              (e.getIsSomeSelected = () => {
                let { rowSelection: l } = t.getState();
                return "some" === A(e, l);
              }),
              (e.getIsAllSubRowsSelected = () => {
                let { rowSelection: l } = t.getState();
                return "all" === A(e, l);
              }),
              (e.getCanSelect = () => {
                var l;
                return "function" == typeof t.options.enableRowSelection
                  ? t.options.enableRowSelection(e)
                  : null == (l = t.options.enableRowSelection) || l;
              }),
              (e.getCanSelectSubRows = () => {
                var l;
                return "function" == typeof t.options.enableSubRowSelection
                  ? t.options.enableSubRowSelection(e)
                  : null == (l = t.options.enableSubRowSelection) || l;
              }),
              (e.getCanMultiSelect = () => {
                var l;
                return "function" == typeof t.options.enableMultiRowSelection
                  ? t.options.enableMultiRowSelection(e)
                  : null == (l = t.options.enableMultiRowSelection) || l;
              }),
              (e.getToggleSelectedHandler = () => {
                let t = e.getCanSelect();
                return (l) => {
                  var n;
                  t &&
                    e.toggleSelected(
                      null == (n = l.target) ? void 0 : n.checked
                    );
                };
              });
          },
        },
        {
          getDefaultColumnDef: () => d,
          getInitialState: (e) => ({
            columnSizing: {},
            columnSizingInfo: c(),
            ...e,
          }),
          getDefaultOptions: (e) => ({
            columnResizeMode: "onEnd",
            columnResizeDirection: "ltr",
            onColumnSizingChange: o("columnSizing", e),
            onColumnSizingInfoChange: o("columnSizingInfo", e),
          }),
          createColumn: (e, t) => {
            (e.getSize = () => {
              var l, n, o;
              let i = t.getState().columnSizing[e.id];
              return Math.min(
                Math.max(
                  null != (l = e.columnDef.minSize) ? l : d.minSize,
                  null != (n = null != i ? i : e.columnDef.size) ? n : d.size
                ),
                null != (o = e.columnDef.maxSize) ? o : d.maxSize
              );
            }),
              (e.getStart = r(
                (e) => [e, B(t, e), t.getState().columnSizing],
                (t, l) =>
                  l
                    .slice(0, e.getIndex(t))
                    .reduce((e, t) => e + t.getSize(), 0),
                u(t.options, "debugColumns", "getStart")
              )),
              (e.getAfter = r(
                (e) => [e, B(t, e), t.getState().columnSizing],
                (t, l) =>
                  l
                    .slice(e.getIndex(t) + 1)
                    .reduce((e, t) => e + t.getSize(), 0),
                u(t.options, "debugColumns", "getAfter")
              )),
              (e.resetSize = () => {
                t.setColumnSizing((t) => {
                  let { [e.id]: l, ...n } = t;
                  return n;
                });
              }),
              (e.getCanResize = () => {
                var l, n;
                return (
                  (null == (l = e.columnDef.enableResizing) || l) &&
                  (null == (n = t.options.enableColumnResizing) || n)
                );
              }),
              (e.getIsResizing = () =>
                t.getState().columnSizingInfo.isResizingColumn === e.id);
          },
          createHeader: (e, t) => {
            (e.getSize = () => {
              let t = 0,
                l = (e) => {
                  if (e.subHeaders.length) e.subHeaders.forEach(l);
                  else {
                    var n;
                    t += null != (n = e.column.getSize()) ? n : 0;
                  }
                };
              return l(e), t;
            }),
              (e.getStart = () => {
                if (e.index > 0) {
                  let t = e.headerGroup.headers[e.index - 1];
                  return t.getStart() + t.getSize();
                }
                return 0;
              }),
              (e.getResizeHandler = (l) => {
                let n = t.getColumn(e.column.id),
                  o = null == n ? void 0 : n.getCanResize();
                return (i) => {
                  if (
                    !n ||
                    !o ||
                    (null == i.persist || i.persist(),
                    f(i) && i.touches && i.touches.length > 1)
                  )
                    return;
                  let r = e.getSize(),
                    u = e
                      ? e
                          .getLeafHeaders()
                          .map((e) => [e.column.id, e.column.getSize()])
                      : [[n.id, n.getSize()]],
                    a = f(i) ? Math.round(i.touches[0].clientX) : i.clientX,
                    g = {},
                    s = (e, l) => {
                      "number" == typeof l &&
                        (t.setColumnSizingInfo((e) => {
                          var n, o;
                          let i =
                              "rtl" === t.options.columnResizeDirection
                                ? -1
                                : 1,
                            r =
                              (l -
                                (null !=
                                (n = null == e ? void 0 : e.startOffset)
                                  ? n
                                  : 0)) *
                              i,
                            u = Math.max(
                              r /
                                (null != (o = null == e ? void 0 : e.startSize)
                                  ? o
                                  : 0),
                              -0.999999
                            );
                          return (
                            e.columnSizingStart.forEach((e) => {
                              let [t, l] = e;
                              g[t] =
                                Math.round(100 * Math.max(l + l * u, 0)) / 100;
                            }),
                            { ...e, deltaOffset: r, deltaPercentage: u }
                          );
                        }),
                        ("onChange" === t.options.columnResizeMode ||
                          "end" === e) &&
                          t.setColumnSizing((e) => ({ ...e, ...g })));
                    },
                    d = (e) => s("move", e),
                    c = (e) => {
                      s("end", e),
                        t.setColumnSizingInfo((e) => ({
                          ...e,
                          isResizingColumn: !1,
                          startOffset: null,
                          startSize: null,
                          deltaOffset: null,
                          deltaPercentage: null,
                          columnSizingStart: [],
                        }));
                    },
                    m = l || "undefined" != typeof document ? document : null,
                    C = {
                      moveHandler: (e) => d(e.clientX),
                      upHandler: (e) => {
                        null == m ||
                          m.removeEventListener("mousemove", C.moveHandler),
                          null == m ||
                            m.removeEventListener("mouseup", C.upHandler),
                          c(e.clientX);
                      },
                    },
                    S = {
                      moveHandler: (e) => (
                        e.cancelable &&
                          (e.preventDefault(), e.stopPropagation()),
                        d(e.touches[0].clientX),
                        !1
                      ),
                      upHandler: (e) => {
                        var t;
                        null == m ||
                          m.removeEventListener("touchmove", S.moveHandler),
                          null == m ||
                            m.removeEventListener("touchend", S.upHandler),
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          c(null == (t = e.touches[0]) ? void 0 : t.clientX);
                      },
                    },
                    w = !!(function () {
                      if ("boolean" == typeof p) return p;
                      let e = !1;
                      try {
                        let t = () => {};
                        window.addEventListener("test", t, {
                          get passive() {
                            return (e = !0), !1;
                          },
                        }),
                          window.removeEventListener("test", t);
                      } catch (t) {
                        e = !1;
                      }
                      return (p = e);
                    })() && { passive: !1 };
                  f(i)
                    ? (null == m ||
                        m.addEventListener("touchmove", S.moveHandler, w),
                      null == m ||
                        m.addEventListener("touchend", S.upHandler, w))
                    : (null == m ||
                        m.addEventListener("mousemove", C.moveHandler, w),
                      null == m ||
                        m.addEventListener("mouseup", C.upHandler, w)),
                    t.setColumnSizingInfo((e) => ({
                      ...e,
                      startOffset: a,
                      startSize: r,
                      deltaOffset: 0,
                      deltaPercentage: 0,
                      columnSizingStart: u,
                      isResizingColumn: n.id,
                    }));
                };
              });
          },
          createTable: (e) => {
            (e.setColumnSizing = (t) =>
              null == e.options.onColumnSizingChange
                ? void 0
                : e.options.onColumnSizingChange(t)),
              (e.setColumnSizingInfo = (t) =>
                null == e.options.onColumnSizingInfoChange
                  ? void 0
                  : e.options.onColumnSizingInfoChange(t)),
              (e.resetColumnSizing = (t) => {
                var l;
                e.setColumnSizing(
                  t ? {} : null != (l = e.initialState.columnSizing) ? l : {}
                );
              }),
              (e.resetHeaderSizeInfo = (t) => {
                var l;
                e.setColumnSizingInfo(
                  t
                    ? c()
                    : null != (l = e.initialState.columnSizingInfo)
                    ? l
                    : c()
                );
              }),
              (e.getTotalSize = () => {
                var t, l;
                return null !=
                  (t =
                    null == (l = e.getHeaderGroups()[0])
                      ? void 0
                      : l.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getLeftTotalSize = () => {
                var t, l;
                return null !=
                  (t =
                    null == (l = e.getLeftHeaderGroups()[0])
                      ? void 0
                      : l.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getCenterTotalSize = () => {
                var t, l;
                return null !=
                  (t =
                    null == (l = e.getCenterHeaderGroups()[0])
                      ? void 0
                      : l.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              }),
              (e.getRightTotalSize = () => {
                var t, l;
                return null !=
                  (t =
                    null == (l = e.getRightHeaderGroups()[0])
                      ? void 0
                      : l.headers.reduce((e, t) => e + t.getSize(), 0))
                  ? t
                  : 0;
              });
          },
        },
      ];
      function q(e) {
        var t;
        (e.debugAll || e.debugTable) &&
          console.info("Creating Table Instance...");
        let l = { _features: k },
          o = l._features.reduce(
            (e, t) =>
              Object.assign(
                e,
                null == t.getDefaultOptions ? void 0 : t.getDefaultOptions(l)
              ),
            {}
          ),
          i = (e) =>
            l.options.mergeOptions
              ? l.options.mergeOptions(o, e)
              : { ...o, ...e },
          a = { ...(null != (t = e.initialState) ? t : {}) };
        l._features.forEach((e) => {
          var t;
          a =
            null !=
            (t = null == e.getInitialState ? void 0 : e.getInitialState(a))
              ? t
              : a;
        });
        let g = [],
          s = !1,
          d = {
            _features: k,
            options: { ...o, ...e },
            initialState: a,
            _queue: (e) => {
              g.push(e),
                s ||
                  ((s = !0),
                  Promise.resolve()
                    .then(() => {
                      for (; g.length; ) g.shift()();
                      s = !1;
                    })
                    .catch((e) =>
                      setTimeout(() => {
                        throw e;
                      })
                    ));
            },
            reset: () => {
              l.setState(l.initialState);
            },
            setOptions: (e) => {
              let t = n(e, l.options);
              l.options = i(t);
            },
            getState: () => l.options.state,
            setState: (e) => {
              null == l.options.onStateChange || l.options.onStateChange(e);
            },
            _getRowId: (e, t, n) => {
              var o;
              return null !=
                (o =
                  null == l.options.getRowId
                    ? void 0
                    : l.options.getRowId(e, t, n))
                ? o
                : `${n ? [n.id, t].join(".") : t}`;
            },
            getCoreRowModel: () => (
              l._getCoreRowModel ||
                (l._getCoreRowModel = l.options.getCoreRowModel(l)),
              l._getCoreRowModel()
            ),
            getRowModel: () => l.getPaginationRowModel(),
            getRow: (e, t) => {
              let n = (t ? l.getPrePaginationRowModel() : l.getRowModel())
                .rowsById[e];
              if (!n && !(n = l.getCoreRowModel().rowsById[e])) throw Error();
              return n;
            },
            _getDefaultColumnDef: r(
              () => [l.options.defaultColumn],
              (e) => {
                var t;
                return (
                  (e = null != (t = e) ? t : {}),
                  {
                    header: (e) => {
                      let t = e.header.column.columnDef;
                      return t.accessorKey
                        ? t.accessorKey
                        : t.accessorFn
                        ? t.id
                        : null;
                    },
                    cell: (e) => {
                      var t, l;
                      return null !=
                        (t =
                          null == (l = e.renderValue()) || null == l.toString
                            ? void 0
                            : l.toString())
                        ? t
                        : null;
                    },
                    ...l._features.reduce(
                      (e, t) =>
                        Object.assign(
                          e,
                          null == t.getDefaultColumnDef
                            ? void 0
                            : t.getDefaultColumnDef()
                        ),
                      {}
                    ),
                    ...e,
                  }
                );
              },
              u(e, "debugColumns", "_getDefaultColumnDef")
            ),
            _getColumnDefs: () => l.options.columns,
            getAllColumns: r(
              () => [l._getColumnDefs()],
              (e) => {
                let t = function (e, n, o) {
                  return (
                    void 0 === o && (o = 0),
                    e.map((e) => {
                      let i = (function (e, t, l, n) {
                        var o, i;
                        let a;
                        let g = { ...e._getDefaultColumnDef(), ...t },
                          s = g.accessorKey,
                          d =
                            null !=
                            (o =
                              null != (i = g.id)
                                ? i
                                : s
                                ? s.replace(".", "_")
                                : void 0)
                              ? o
                              : "string" == typeof g.header
                              ? g.header
                              : void 0;
                        if (
                          (g.accessorFn
                            ? (a = g.accessorFn)
                            : s &&
                              (a = s.includes(".")
                                ? (e) => {
                                    let t = e;
                                    for (let e of s.split(".")) {
                                      var l;
                                      t = null == (l = t) ? void 0 : l[e];
                                    }
                                    return t;
                                  }
                                : (e) => e[g.accessorKey]),
                          !d)
                        )
                          throw Error();
                        let c = {
                          id: `${String(d)}`,
                          accessorFn: a,
                          parent: n,
                          depth: l,
                          columnDef: g,
                          columns: [],
                          getFlatColumns: r(
                            () => [!0],
                            () => {
                              var e;
                              return [
                                c,
                                ...(null == (e = c.columns)
                                  ? void 0
                                  : e.flatMap((e) => e.getFlatColumns())),
                              ];
                            },
                            u(
                              e.options,
                              "debugColumns",
                              "column.getFlatColumns"
                            )
                          ),
                          getLeafColumns: r(
                            () => [e._getOrderColumnsFn()],
                            (e) => {
                              var t;
                              return null != (t = c.columns) && t.length
                                ? e(
                                    c.columns.flatMap((e) => e.getLeafColumns())
                                  )
                                : [c];
                            },
                            u(
                              e.options,
                              "debugColumns",
                              "column.getLeafColumns"
                            )
                          ),
                        };
                        for (let t of e._features)
                          null == t.createColumn || t.createColumn(c, e);
                        return c;
                      })(l, e, o, n);
                      return (
                        (i.columns = e.columns ? t(e.columns, i, o + 1) : []), i
                      );
                    })
                  );
                };
                return t(e);
              },
              u(e, "debugColumns", "getAllColumns")
            ),
            getAllFlatColumns: r(
              () => [l.getAllColumns()],
              (e) => e.flatMap((e) => e.getFlatColumns()),
              u(e, "debugColumns", "getAllFlatColumns")
            ),
            _getAllFlatColumnsById: r(
              () => [l.getAllFlatColumns()],
              (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
              u(e, "debugColumns", "getAllFlatColumnsById")
            ),
            getAllLeafColumns: r(
              () => [l.getAllColumns(), l._getOrderColumnsFn()],
              (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
              u(e, "debugColumns", "getAllLeafColumns")
            ),
            getColumn: (e) => l._getAllFlatColumnsById()[e],
          };
        Object.assign(l, d);
        for (let e = 0; e < l._features.length; e++) {
          let t = l._features[e];
          null == t || null == t.createTable || t.createTable(l);
        }
        return l;
      }
      let j = (e, t, l, n, o, i, a) => {
        let g = {
          id: t,
          index: n,
          original: l,
          depth: o,
          parentId: a,
          _valuesCache: {},
          _uniqueValuesCache: {},
          getValue: (t) => {
            if (g._valuesCache.hasOwnProperty(t)) return g._valuesCache[t];
            let l = e.getColumn(t);
            if (null != l && l.accessorFn)
              return (
                (g._valuesCache[t] = l.accessorFn(g.original, n)),
                g._valuesCache[t]
              );
          },
          getUniqueValues: (t) => {
            if (g._uniqueValuesCache.hasOwnProperty(t))
              return g._uniqueValuesCache[t];
            let l = e.getColumn(t);
            return null != l && l.accessorFn
              ? (l.columnDef.getUniqueValues
                  ? (g._uniqueValuesCache[t] = l.columnDef.getUniqueValues(
                      g.original,
                      n
                    ))
                  : (g._uniqueValuesCache[t] = [g.getValue(t)]),
                g._uniqueValuesCache[t])
              : void 0;
          },
          renderValue: (t) => {
            var l;
            return null != (l = g.getValue(t))
              ? l
              : e.options.renderFallbackValue;
          },
          subRows: null != i ? i : [],
          getLeafRows: () =>
            (function (e, t) {
              let l = [],
                n = (e) => {
                  e.forEach((e) => {
                    l.push(e);
                    let o = t(e);
                    null != o && o.length && n(o);
                  });
                };
              return n(e), l;
            })(g.subRows, (e) => e.subRows),
          getParentRow: () => (g.parentId ? e.getRow(g.parentId, !0) : void 0),
          getParentRows: () => {
            let e = [],
              t = g;
            for (;;) {
              let l = t.getParentRow();
              if (!l) break;
              e.push(l), (t = l);
            }
            return e.reverse();
          },
          getAllCells: r(
            () => [e.getAllLeafColumns()],
            (t) =>
              t.map((t) =>
                (function (e, t, l, n) {
                  let o = {
                    id: `${t.id}_${l.id}`,
                    row: t,
                    column: l,
                    getValue: () => t.getValue(n),
                    renderValue: () => {
                      var t;
                      return null != (t = o.getValue())
                        ? t
                        : e.options.renderFallbackValue;
                    },
                    getContext: r(
                      () => [e, l, t, o],
                      (e, t, l, n) => ({
                        table: e,
                        column: t,
                        row: l,
                        cell: n,
                        getValue: n.getValue,
                        renderValue: n.renderValue,
                      }),
                      u(e.options, "debugCells", "cell.getContext")
                    ),
                  };
                  return (
                    e._features.forEach((n) => {
                      null == n.createCell || n.createCell(o, l, t, e);
                    }, {}),
                    o
                  );
                })(e, g, t, t.id)
              ),
            u(e.options, "debugRows", "getAllCells")
          ),
          _getAllCellsByColumnId: r(
            () => [g.getAllCells()],
            (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
            u(e.options, "debugRows", "getAllCellsByColumnId")
          ),
        };
        for (let t = 0; t < e._features.length; t++) {
          let l = e._features[t];
          null == l || null == l.createRow || l.createRow(g, e);
        }
        return g;
      };
      function N() {
        return {
          accessor: (e, t) =>
            "function" == typeof e
              ? { ...t, accessorFn: e }
              : { ...t, accessorKey: e },
          display: (e) => e,
          group: (e) => e,
        };
      }
      function U() {
        return (e) =>
          r(
            () => [e.options.data],
            (t) => {
              let l = { rows: [], flatRows: [], rowsById: {} },
                n = function (t, o, i) {
                  void 0 === o && (o = 0);
                  let r = [];
                  for (let a = 0; a < t.length; a++) {
                    let g = j(
                      e,
                      e._getRowId(t[a], a, i),
                      t[a],
                      a,
                      o,
                      void 0,
                      null == i ? void 0 : i.id
                    );
                    if (
                      (l.flatRows.push(g),
                      (l.rowsById[g.id] = g),
                      r.push(g),
                      e.options.getSubRows)
                    ) {
                      var u;
                      (g.originalSubRows = e.options.getSubRows(t[a], a)),
                        null != (u = g.originalSubRows) &&
                          u.length &&
                          (g.subRows = n(g.originalSubRows, o + 1, g));
                    }
                  }
                  return r;
                };
              return (l.rows = n(t)), l;
            },
            u(e.options, "debugTable", "getRowModel", () =>
              e._autoResetPageIndex()
            )
          );
      }
      function $() {
        return (e) =>
          r(
            () => [e.getState().sorting, e.getPreSortedRowModel()],
            (t, l) => {
              if (!l.rows.length || !(null != t && t.length)) return l;
              let n = e.getState().sorting,
                o = [],
                i = n.filter((t) => {
                  var l;
                  return null == (l = e.getColumn(t.id))
                    ? void 0
                    : l.getCanSort();
                }),
                r = {};
              i.forEach((t) => {
                let l = e.getColumn(t.id);
                l &&
                  (r[t.id] = {
                    sortUndefined: l.columnDef.sortUndefined,
                    invertSorting: l.columnDef.invertSorting,
                    sortingFn: l.getSortingFn(),
                  });
              });
              let u = (e) => {
                let t = e.map((e) => ({ ...e }));
                return (
                  t.sort((e, t) => {
                    for (let n = 0; n < i.length; n += 1) {
                      var l;
                      let o = i[n],
                        u = r[o.id],
                        a = null != (l = null == o ? void 0 : o.desc) && l,
                        g = 0;
                      if (u.sortUndefined) {
                        let l = e.getValue(o.id),
                          n = t.getValue(o.id),
                          i = void 0 === l,
                          r = void 0 === n;
                        (i || r) &&
                          (g =
                            i && r
                              ? 0
                              : i
                              ? u.sortUndefined
                              : -u.sortUndefined);
                      }
                      if ((0 === g && (g = u.sortingFn(e, t, o.id)), 0 !== g))
                        return a && (g *= -1), u.invertSorting && (g *= -1), g;
                    }
                    return e.index - t.index;
                  }),
                  t.forEach((e) => {
                    var t;
                    o.push(e),
                      null != (t = e.subRows) &&
                        t.length &&
                        (e.subRows = u(e.subRows));
                  }),
                  t
                );
              };
              return { rows: u(l.rows), flatRows: o, rowsById: l.rowsById };
            },
            u(e.options, "debugTable", "getSortedRowModel", () =>
              e._autoResetPageIndex()
            )
          );
      }
    },
    46756: function (e, t, l) {
      "use strict";
      l.d(t, {
        A: function () {
          return o;
        },
      });
      var n = l(28194);
      function o(e, t) {
        let l = (0, n.Q)(e),
          o = (0, n.Q)(t);
        return l.getTime() > o.getTime();
      }
    },
  },
]);
