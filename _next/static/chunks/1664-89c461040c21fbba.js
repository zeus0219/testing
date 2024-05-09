"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1664],
  {
    11664: function (e, t, r) {
      r.d(t, {
        ZP: function () {
          return ee;
        },
        kY: function () {
          return G;
        },
      });
      var n,
        i = r(15039),
        a = r(94348);
      let u = () => {},
        o = u(),
        l = Object,
        s = (e) => e === o,
        d = (e) => "function" == typeof e,
        c = (e, t) => ({ ...e, ...t }),
        f = (e) => d(e.then),
        g = new WeakMap(),
        E = 0,
        h = (e) => {
          let t, r;
          let n = typeof e,
            i = e && e.constructor,
            a = i == Date;
          if (l(e) !== e || a || i == RegExp)
            t = a
              ? e.toJSON()
              : "symbol" == n
              ? e.toString()
              : "string" == n
              ? JSON.stringify(e)
              : "" + e;
          else {
            if ((t = g.get(e))) return t;
            if (((t = ++E + "~"), g.set(e, t), i == Array)) {
              for (r = 0, t = "@"; r < e.length; r++) t += h(e[r]) + ",";
              g.set(e, t);
            }
            if (i == l) {
              t = "#";
              let n = l.keys(e).sort();
              for (; !s((r = n.pop())); )
                s(e[r]) || (t += r + ":" + h(e[r]) + ",");
              g.set(e, t);
            }
          }
          return t;
        },
        w = new WeakMap(),
        _ = {},
        p = {},
        v = "undefined",
        R = typeof window != v,
        y = typeof document != v,
        T = () => R && typeof window.requestAnimationFrame != v,
        m = (e, t) => {
          let r = w.get(e);
          return [
            () => (!s(t) && e.get(t)) || _,
            (n) => {
              if (!s(t)) {
                let i = e.get(t);
                t in p || (p[t] = i), r[5](t, c(i, n), i || _);
              }
            },
            r[6],
            () => (!s(t) && t in p ? p[t] : (!s(t) && e.get(t)) || _),
          ];
        },
        b = !0,
        [O, V] =
          R && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [u, u],
        L = {
          initFocus: (e) => (
            y && document.addEventListener("visibilitychange", e),
            O("focus", e),
            () => {
              y && document.removeEventListener("visibilitychange", e),
                V("focus", e);
            }
          ),
          initReconnect: (e) => {
            let t = () => {
                (b = !0), e();
              },
              r = () => {
                b = !1;
              };
            return (
              O("online", t),
              O("offline", r),
              () => {
                V("online", t), V("offline", r);
              }
            );
          },
        },
        S = !i.useId,
        k = !R || "Deno" in window,
        C = (e) => (T() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        N = k ? i.useEffect : i.useLayoutEffect,
        D = "undefined" != typeof navigator && navigator.connection,
        A =
          !k &&
          D &&
          (["slow-2g", "2g"].includes(D.effectiveType) || D.saveData),
        I = (e) => {
          if (d(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? h(e)
                : ""),
            t,
          ];
        },
        F = 0,
        P = () => ++F;
      var M = {
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function x(...e) {
        let [t, r, n, i] = e,
          a = c(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof i ? { revalidate: i } : i || {}
          ),
          u = a.populateCache,
          l = a.rollbackOnError,
          g = a.optimisticData,
          E = (e) => ("function" == typeof l ? l(e) : !1 !== l),
          h = a.throwOnError;
        if (d(r)) {
          let e = [];
          for (let n of t.keys())
            !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
          return Promise.all(e.map(_));
        }
        return _(r);
        async function _(r) {
          let i;
          let [l] = I(r);
          if (!l) return;
          let [c, _] = m(t, l),
            [p, v, R, y] = w.get(t),
            T = () => {
              let e = p[l];
              return (d(a.revalidate)
                ? a.revalidate(c().data, r)
                : !1 !== a.revalidate) && (delete R[l], delete y[l], e && e[0])
                ? e[0](2).then(() => c().data)
                : c().data;
            };
          if (e.length < 3) return T();
          let b = n,
            O = P();
          v[l] = [O, 0];
          let V = !s(g),
            L = c(),
            S = L.data,
            k = L._c,
            C = s(k) ? S : k;
          if ((V && _({ data: (g = d(g) ? g(C, S) : g), _c: C }), d(b)))
            try {
              b = b(C);
            } catch (e) {
              i = e;
            }
          if (b && f(b)) {
            if (
              ((b = await b.catch((e) => {
                i = e;
              })),
              O !== v[l][0])
            ) {
              if (i) throw i;
              return b;
            }
            i && V && E(i) && ((u = !0), _({ data: C, _c: o }));
          }
          if (
            (u &&
              !i &&
              (d(u)
                ? _({ data: u(b, C), error: o, _c: o })
                : _({ data: b, error: o, _c: o })),
            (v[l][1] = P()),
            Promise.resolve(T()).then(() => {
              _({ _c: o });
            }),
            i)
          ) {
            if (h) throw i;
            return;
          }
          return b;
        }
      }
      let U = (e, t) => {
          for (let r in e) e[r][0] && e[r][0](t);
        },
        W = (e, t) => {
          if (!w.has(e)) {
            let r = c(L, t),
              n = {},
              i = x.bind(o, e),
              a = u,
              l = {},
              s = (e, t) => {
                let r = l[e] || [];
                return (l[e] = r), r.push(t), () => r.splice(r.indexOf(t), 1);
              },
              d = (t, r, n) => {
                e.set(t, r);
                let i = l[t];
                if (i) for (let e of i) e(r, n);
              },
              f = () => {
                if (!w.has(e) && (w.set(e, [n, {}, {}, {}, i, d, s]), !k)) {
                  let t = r.initFocus(setTimeout.bind(o, U.bind(o, n, 0))),
                    i = r.initReconnect(setTimeout.bind(o, U.bind(o, n, 1)));
                  a = () => {
                    t && t(), i && i(), w.delete(e);
                  };
                }
              };
            return f(), [e, i, f, a];
          }
          return [e, w.get(e)[4]];
        },
        [$, j] = W(new Map()),
        q = c(
          {
            onLoadingSlow: u,
            onSuccess: u,
            onError: u,
            onErrorRetry: (e, t, r, n, i) => {
              let a = r.errorRetryCount,
                u = i.retryCount,
                o =
                  ~~((Math.random() + 0.5) * (1 << (u < 8 ? u : 8))) *
                  r.errorRetryInterval;
              (s(a) || !(u > a)) && setTimeout(n, o, i);
            },
            onDiscarded: u,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: A ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: A ? 5e3 : 3e3,
            compare: (e, t) => h(e) == h(t),
            isPaused: () => !1,
            cache: $,
            mutate: j,
            fallback: {},
          },
          {
            isOnline: () => b,
            isVisible: () => {
              let e = y && document.visibilityState;
              return s(e) || "hidden" !== e;
            },
          }
        ),
        J = (e, t) => {
          let r = c(e, t);
          if (t) {
            let { use: n, fallback: i } = e,
              { use: a, fallback: u } = t;
            n && a && (r.use = n.concat(a)), i && u && (r.fallback = c(i, u));
          }
          return r;
        },
        Y = (0, i.createContext)({}),
        Z = R && window.__SWR_DEVTOOLS_USE__,
        z = Z ? window.__SWR_DEVTOOLS_USE__ : [],
        B = (e) =>
          d(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        G = () => c(q, (0, i.useContext)(Y)),
        H = z.concat((e) => (t, r, n) => {
          let i =
            r &&
            ((...e) => {
              let [n] = I(t),
                [, , , i] = w.get($);
              if (n.startsWith("$inf$")) return r(...e);
              let a = i[n];
              return s(a) ? r(...e) : (delete i[n], a);
            });
          return e(t, i, n);
        }),
        K = (e, t, r) => {
          let n = t[e] || (t[e] = []);
          return (
            n.push(r),
            () => {
              let e = n.indexOf(r);
              e >= 0 && ((n[e] = n[n.length - 1]), n.pop());
            }
          );
        };
      Z && (window.__SWR_DEVTOOLS_REACT__ = i);
      let Q =
          i.use ||
          ((e) => {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            if ("rejected" === e.status) throw e.reason;
            throw (
              ((e.status = "pending"),
              e.then(
                (t) => {
                  (e.status = "fulfilled"), (e.value = t);
                },
                (t) => {
                  (e.status = "rejected"), (e.reason = t);
                }
              ),
              e)
            );
          }),
        X = { dedupe: !0 };
      l.defineProperty(
        (e) => {
          let { value: t } = e,
            r = (0, i.useContext)(Y),
            n = d(t),
            a = (0, i.useMemo)(() => (n ? t(r) : t), [n, r, t]),
            u = (0, i.useMemo)(() => (n ? a : J(r, a)), [n, r, a]),
            l = a && a.provider,
            s = (0, i.useRef)(o);
          l && !s.current && (s.current = W(l(u.cache || $), a));
          let f = s.current;
          return (
            f && ((u.cache = f[0]), (u.mutate = f[1])),
            N(() => {
              if (f) return f[2] && f[2](), f[3];
            }, []),
            (0, i.createElement)(Y.Provider, c(e, { value: u }))
          );
        },
        "defaultValue",
        { value: q }
      );
      let ee =
        ((n = (e, t, r) => {
          let {
              cache: n,
              compare: u,
              suspense: l,
              fallbackData: f,
              revalidateOnMount: g,
              revalidateIfStale: E,
              refreshInterval: h,
              refreshWhenHidden: _,
              refreshWhenOffline: p,
              keepPreviousData: v,
            } = r,
            [R, y, T, b] = w.get(n),
            [O, V] = I(e),
            L = (0, i.useRef)(!1),
            D = (0, i.useRef)(!1),
            A = (0, i.useRef)(O),
            F = (0, i.useRef)(t),
            U = (0, i.useRef)(r),
            W = () => U.current,
            $ = () => W().isVisible() && W().isOnline(),
            [j, q, J, Y] = m(n, O),
            Z = (0, i.useRef)({}).current,
            z = s(f) ? r.fallback[O] : f,
            B = (e, t) => {
              for (let r in Z)
                if ("data" === r) {
                  if (!u(e[r], t[r]) && (!s(e[r]) || !u(eu, t[r]))) return !1;
                } else if (t[r] !== e[r]) return !1;
              return !0;
            },
            G = (0, i.useMemo)(() => {
              let e =
                  !!O &&
                  !!t &&
                  (s(g) ? !W().isPaused() && !l && (!!s(E) || E) : g),
                r = (t) => {
                  let r = c(t);
                  return (delete r._k, e)
                    ? { isValidating: !0, isLoading: !0, ...r }
                    : r;
                },
                n = j(),
                i = Y(),
                a = r(n),
                u = n === i ? a : r(i),
                o = a;
              return [
                () => {
                  let e = r(j());
                  return B(e, o)
                    ? ((o.data = e.data),
                      (o.isLoading = e.isLoading),
                      (o.isValidating = e.isValidating),
                      (o.error = e.error),
                      o)
                    : ((o = e), e);
                },
                () => u,
              ];
            }, [n, O]),
            H = (0, a.useSyncExternalStore)(
              (0, i.useCallback)(
                (e) =>
                  J(O, (t, r) => {
                    B(r, t) || e();
                  }),
                [n, O]
              ),
              G[0],
              G[1]
            ),
            ee = !L.current,
            et = R[O] && R[O].length > 0,
            er = H.data,
            en = s(er) ? z : er,
            ei = H.error,
            ea = (0, i.useRef)(en),
            eu = v ? (s(er) ? ea.current : er) : en,
            eo =
              (!et || !!s(ei)) &&
              (ee && !s(g)
                ? g
                : !W().isPaused() && (l ? !s(en) && E : s(en) || E)),
            el = !!(O && t && ee && eo),
            es = s(H.isValidating) ? el : H.isValidating,
            ed = s(H.isLoading) ? el : H.isLoading,
            ec = (0, i.useCallback)(
              async (e) => {
                let t, n;
                let i = F.current;
                if (!O || !i || D.current || W().isPaused()) return !1;
                let a = !0,
                  l = e || {},
                  c = !T[O] || !l.dedupe,
                  f = () =>
                    S
                      ? !D.current && O === A.current && L.current
                      : O === A.current,
                  g = { isValidating: !1, isLoading: !1 },
                  E = () => {
                    q(g);
                  },
                  h = () => {
                    let e = T[O];
                    e && e[1] === n && delete T[O];
                  },
                  w = { isValidating: !0 };
                s(j().data) && (w.isLoading = !0);
                try {
                  if (
                    (c &&
                      (q(w),
                      r.loadingTimeout &&
                        s(j().data) &&
                        setTimeout(() => {
                          a && f() && W().onLoadingSlow(O, r);
                        }, r.loadingTimeout),
                      (T[O] = [i(V), P()])),
                    ([t, n] = T[O]),
                    (t = await t),
                    c && setTimeout(h, r.dedupingInterval),
                    !T[O] || T[O][1] !== n)
                  )
                    return c && f() && W().onDiscarded(O), !1;
                  g.error = o;
                  let e = y[O];
                  if (!s(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                    return E(), c && f() && W().onDiscarded(O), !1;
                  let l = j().data;
                  (g.data = u(l, t) ? l : t),
                    c && f() && W().onSuccess(t, O, r);
                } catch (r) {
                  h();
                  let e = W(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((g.error = r),
                    c &&
                      f() &&
                      (e.onError(r, O, e),
                      (!0 === t || (d(t) && t(r))) &&
                        (!W().revalidateOnFocus ||
                          !W().revalidateOnReconnect ||
                          $()) &&
                        e.onErrorRetry(
                          r,
                          O,
                          e,
                          (e) => {
                            let t = R[O];
                            t && t[0] && t[0](M.ERROR_REVALIDATE_EVENT, e);
                          },
                          { retryCount: (l.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (a = !1), E(), !0;
              },
              [O, n]
            ),
            ef = (0, i.useCallback)((...e) => x(n, A.current, ...e), []);
          if (
            (N(() => {
              (F.current = t), (U.current = r), s(er) || (ea.current = er);
            }),
            N(() => {
              if (!O) return;
              let e = ec.bind(o, X),
                t = 0,
                r = K(O, R, (r, n = {}) => {
                  if (r == M.FOCUS_EVENT) {
                    let r = Date.now();
                    W().revalidateOnFocus &&
                      r > t &&
                      $() &&
                      ((t = r + W().focusThrottleInterval), e());
                  } else if (r == M.RECONNECT_EVENT)
                    W().revalidateOnReconnect && $() && e();
                  else if (r == M.MUTATE_EVENT) return ec();
                  else if (r == M.ERROR_REVALIDATE_EVENT) return ec(n);
                });
              return (
                (D.current = !1),
                (A.current = O),
                (L.current = !0),
                q({ _k: V }),
                eo && (s(en) || k ? e() : C(e)),
                () => {
                  (D.current = !0), r();
                }
              );
            }, [O]),
            N(() => {
              let e;
              function t() {
                let t = d(h) ? h(j().data) : h;
                t && -1 !== e && (e = setTimeout(r, t));
              }
              function r() {
                !j().error && (_ || W().isVisible()) && (p || W().isOnline())
                  ? ec(X).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [h, _, p, O]),
            (0, i.useDebugValue)(eu),
            l && s(en) && O)
          ) {
            if (!S && k)
              throw Error(
                "Fallback data is required when using suspense in SSR."
              );
            (F.current = t), (U.current = r), (D.current = !1);
            let e = b[O];
            if ((s(e) || Q(ef(e)), s(ei))) {
              let e = ec(X);
              s(eu) || ((e.status = "fulfilled"), (e.value = !0)), Q(e);
            } else throw ei;
          }
          return {
            mutate: ef,
            get data() {
              return (Z.data = !0), eu;
            },
            get error() {
              return (Z.error = !0), ei;
            },
            get isValidating() {
              return (Z.isValidating = !0), es;
            },
            get isLoading() {
              return (Z.isLoading = !0), ed;
            },
          };
        }),
        function (...e) {
          let t = G(),
            [r, i, a] = B(e),
            u = J(t, a),
            o = n,
            { use: l } = u,
            s = (l || []).concat(H);
          for (let e = s.length; e--; ) o = s[e](o);
          return o(r, i || u.fetcher || null, u);
        });
    },
  },
]);
