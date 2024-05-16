"use strict";
(self.webpackChunk_N_E_ = self.webpackChunk_N_E_ || []).push([
  [94],
  {
    27895: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = i(52322),
        r = i(2784),
        o = i(19453),
        a = i(76972),
        s = i(42698),
        l = i(34406);
      let c = {
        black: { color: "#000", text: "#fff" },
        darkest: { color: a.r.colors.ui.darkest, text: "#fff" },
        dark: { color: a.r.colors.ui.dark, text: "#fff" },
        mediumWhite: {
          color: a.r.colors.ui.medium,
          text: a.r.colors.ui.white,
          word: a.r.colors.ui.light,
        },
        medium: { color: a.r.colors.ui.medium, text: a.r.colors.ui.light },
        grey: { color: a.r.colors.ui.light, text: a.r.colors.ui.light },
        darkGrey: { color: "#151718", text: a.r.colors.ui.light },
        light: { color: "#fff", text: a.r.colors.ui.light },
        white: { color: "#fff", text: "#fff" },
        cta: { color: a.r.colors.actions.cta, text: a.r.colors.actions.cta },
      };
      function p(e) {
        let { keys: t, gap: i, margin: r, theme: o = "dark" } = e;
        if (!t) return null;
        let { color: a, word: l } = c[o];
        return t[1] === s.J.THEN || t[1] === s.J.OR
          ? (0, n.jsxs)(h, {
              "data-keys": !0,
              margin: r,
              style: {
                gridGap: "none" === i ? 0 : "narrow" === i ? 5 : 10,
                color: a,
              },
              children: [
                (0, n.jsx)(d, { keyType: t[0], theme: o }),
                (0, n.jsx)("span", {
                  style: { color: l },
                  children: t[1].toLowerCase(),
                }),
                (0, n.jsx)(d, { keyType: t[2], theme: o }),
              ],
            })
          : (0, n.jsx)(h, {
              "data-keys": !0,
              margin: r,
              style: {
                gridGap: "none" === i ? 0 : "narrow" === i ? 4 : 8,
                color: a,
              },
              children: t.map((e) =>
                (0, n.jsx)(d, { keyType: e, theme: o }, e)
              ),
            });
      }
      function d(e) {
        var t;
        let { keyType: i, theme: o } = e,
          [a, p] = (0, r.useState)(!1),
          d = null !== (t = l.env.NEXT_BASE_PATH) && void 0 !== t ? t : "";
        if (
          ((0, r.useEffect)(() => {
            let e = new Image();
            (e.src = ""
              .concat(d, "/keys/key-")
              .concat(i.toLowerCase(), ".svg#KEY-")
              .concat(i)),
              (e.onload = () => p(!0));
          }, [d, i]),
          !i || i === s.J.THEN || i === s.J.OR)
        )
          return null;
        let { text: h } = c[o],
          x = i.includes("W-") ? 40 : 16,
          m = [
            "dark",
            "darkest",
            "black",
            "medium",
            "mediumWhite",
            "darkGrey",
          ].includes(o),
          u = ["mediumWhite"].includes(o),
          g = (0, n.jsxs)("svg", {
            width: x,
            height: 16,
            style: { opacity: a ? 1 : 0 },
            children: [
              m &&
                (0, n.jsx)("rect", {
                  x: 2,
                  y: 2,
                  width: x - 4,
                  height: 12,
                  fill: h,
                }),
              (0, n.jsx)("use", {
                xlinkHref: ""
                  .concat(d, "/keys/key-")
                  .concat(i.toLowerCase(), ".svg#KEY-")
                  .concat(i),
              }),
            ],
          });
        return u
          ? (0, n.jsx)(f, { style: { width: x, height: 16 }, children: g })
          : g;
      }
      let h = o.ZP.span.withConfig({ componentId: "sc-4b8cb7c5-0" })(
          [
            "display:inline-grid;align-items:center;justify-content:center;grid-auto-flow:column;grid-gap:4px;margin:",
            ";color:",
            ";",
          ],
          (e) => (e.margin ? "0 6px" : "0"),
          (e) => e.theme.colors.ui.dark
        ),
        f = o.ZP.span.withConfig({ componentId: "sc-4b8cb7c5-1" })([
          "position:relative;display:flex;&::after{content:'';position:absolute;top:0;left:0;box-shadow:inset 0 0 0 0.5px rgba(255,255,255,0.06);width:100%;height:100%;border-radius:3px;pointer-events:none;}",
        ]);
    },
    5901: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return p;
        },
      });
      var n = i(52322),
        r = i(2784),
        o = i(19453);
      let a = (0, i(37164).kP)("1234567890abcdefghijklmnopqrstuvwxyz", 32);
      var s = i(84687),
        l = i(1242),
        c = i(91446),
        p = function (e) {
          let {
              label: t,
              placement: i = "bottom",
              offset: o,
              children: l,
              disable: p = !1,
            } = e,
            f = r.Children.only(l),
            [x, m] = (0, r.useState)(""),
            [u, g] = (0, r.useState)(!1),
            w = (0, r.useRef)(null),
            [v, C] = (0, r.useState)(p),
            [y, b] = (0, r.useState)({}),
            [k, j] = (0, r.useState)({});
          (0, r.useEffect)(() => {
            m(a().substring(0, 8));
          }, []),
            (0, r.useEffect)(() => {
              p && C(!1);
            }, [p]),
            (0, r.useEffect)(() => {
              let e, t;
              let i = document.querySelector('[data-tooltip="'.concat(x, '"]'));
              function n() {
                clearTimeout(e),
                  clearTimeout(t),
                  C(!1),
                  (t = setTimeout(() => {
                    g(!1);
                  }, 600));
              }
              function r() {
                clearTimeout(e),
                  document.querySelector('[data-tooltip-opened="true"]')
                    ? (C(!0), g(!0))
                    : (e = setTimeout(() => {
                        g(!0), C(!0);
                      }, 400));
              }
              if (i)
                return (
                  i.addEventListener("blur", n),
                  i.addEventListener("mouseenter", r),
                  i.addEventListener("mouseleave", n),
                  i.addEventListener("click", n),
                  () => {
                    n(),
                      i.removeEventListener("blur", n),
                      i.removeEventListener("mouseenter", r),
                      i.removeEventListener("mouseleave", n),
                      i.removeEventListener("click", n);
                  }
                );
            }, [C, x]),
            (0, r.useEffect)(() => {
              if (v) {
                let e = () => C(!1),
                  t = document.getElementById("App"),
                  i = document.getElementById("Canvas");
                return (
                  null == t || t.addEventListener("scroll", e),
                  null == i || i.addEventListener("scroll", e),
                  () => {
                    null == t || t.removeEventListener("scroll", e),
                      null == i || i.removeEventListener("scroll", e);
                  }
                );
              }
            }, [v]),
            (0, r.useEffect)(() => {
              if (p) return;
              let e = document.querySelector('[data-tooltip="'.concat(x, '"]'));
              v &&
                (function () {
                  let t = e.getBoundingClientRect(),
                    n = w.current.getBoundingClientRect(),
                    r = 0,
                    a = 0,
                    s = { left: 0, top: 0, ...o };
                  switch (i) {
                    case "top":
                      (r = t.top - 1.08 * n.height - 10 + s.top),
                        (a = t.left + t.width / 2 - n.width / 2 + s.left);
                      break;
                    case "right":
                      (r =
                        t.top + t.height / 2 - (1.08 * n.height) / 2 + s.top),
                        (a = t.right + 10 + s.left);
                      break;
                    case "bottom":
                      (r = t.top + t.height + 10 + s.top),
                        (a = t.left + t.width / 2 - n.width / 2 + s.left);
                      break;
                    case "left":
                      (r =
                        t.top + t.height / 2 - (1.08 * n.height) / 2 + s.top),
                        (a = t.left - n.width - 10 + s.left);
                  }
                  b({ top: "".concat(r, "px"), left: "".concat(a, "px") });
                })();
            }, [v, i, o, x, p]),
            (0, r.useEffect)(() => {
              let e;
              switch (i) {
                case "top":
                  e = {
                    from: {
                      opacity: 0,
                      transform: "scale(0.97) translateY(2px)",
                    },
                    enter: {
                      opacity: 1,
                      transform: "scale(1) translateY(0px)",
                    },
                    leave: {
                      opacity: 0,
                      transform: "scale(0.97) translateY(2px)",
                    },
                  };
                  break;
                case "right":
                  e = {
                    from: {
                      opacity: 0,
                      transform: "scale(0.97) translateX(-3px)",
                    },
                    enter: {
                      opacity: 1,
                      transform: "scale(1) translateX(0px)",
                    },
                    leave: {
                      opacity: 0,
                      transform: "scale(0.97) translateX(-3px)",
                    },
                  };
                  break;
                case "bottom":
                  e = {
                    from: {
                      opacity: 0,
                      transform: "scale(0.97) translateY(-2px)",
                    },
                    enter: {
                      opacity: 1,
                      transform: "scale(1) translateY(0px)",
                    },
                    leave: {
                      opacity: 0,
                      transform: "scale(0.97) translateY(-2px)",
                    },
                  };
                  break;
                case "left":
                  e = {
                    from: {
                      opacity: 0,
                      transform: "scale(0.98) translateX(3px)",
                    },
                    enter: {
                      opacity: 1,
                      transform: "scale(1) translateX(0px)",
                    },
                    leave: {
                      opacity: 0,
                      transform: "scale(0.98) translateX(3px)",
                    },
                  };
              }
              j(e);
            }, [j, i]);
          let L = (0, s.Yz)(v, {
            ...k,
            config: { tension: 800, friction: 50, ...(p && { duration: 0 }) },
          });
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, r.cloneElement)(f, {
                "data-tooltip": x,
                ...(u ? { "data-tooltip-opened": !0 } : {}),
              }),
              L((e, i) =>
                i
                  ? (0, n.jsx)(c.Z, {
                      children: (0, n.jsx)(d, {
                        ref: w,
                        style: { ...e, ...y },
                        children: (0, n.jsx)(h, {
                          textOnly: "string" == typeof t,
                          children: t,
                        }),
                      }),
                    })
                  : null
              ),
            ],
          });
        };
      let d = (0, o.ZP)(s.q.div).withConfig({ componentId: "sc-f2ea0151-0" })([
          "position:fixed;pointer-events:none;transform-origin:center center;z-index:2147483647;pointer-events:none;backface-visibility:hidden;transform:translateZ(0) scale(1,1);",
        ]),
        h = o.ZP.div.withConfig({ componentId: "sc-f2ea0151-1" })(
          [
            "display:flex;align-items:center;padding:",
            ";border-radius:7px;font-size:14px;border:0.5px solid ",
            ";background:linear-gradient(180deg,rgba(11,11,15,0.7) -1.79%,#000000 62.5%);box-shadow:0px 4px 25px rgba(0,0,0,0.25);backdrop-filter:blur(12px);",
            " & > span{margin-left:9px;}",
          ],
          (e) => (e.textOnly ? "2px 9px 4px" : "3px 6px 3px 9px"),
          (e) => e.theme.colors.ui.medium,
          l.LH
        );
    },
    1242: function (e, t, i) {
      i.d(t, {
        LH: function () {
          return r;
        },
        lN: function () {
          return a;
        },
        tm: function () {
          return s;
        },
        y$: function () {
          return o;
        },
      });
      var n = i(19453);
      let r = (0, n.iv)([
          "overflow:hidden;white-space:nowrap;text-overflow:ellipsis;",
        ]),
        o = (0, n.iv)([
          "scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}",
        ]),
        a = (0, n.iv)([
          "font-variant-numeric:tabular-nums;letter-spacing:-0.4px;padding-right:1px;",
        ]),
        s = (0, n.F4)(["from{opacity:0.2;}to{opacity:1;}"]),
        l = (0, n.F4)(["from{opacity:0;}to{opacity:1;}"]);
      (0, n.iv)(["opacity:0.2;animation:", " 0.16s forwards;"], s),
        (0, n.iv)(["opacity:0;animation:", " 0.16s forwards;"], l);
    },
    9271: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = i(52322);
      i(2784);
      var r = i(19453),
        o = i(33178);
      function a(e) {
        return (0, n.jsx)(s, { ...e, children: e.children });
      }
      let s = r.ZP.div.withConfig({ componentId: "sc-5d598e6d-0" })(
        [
          "position:relative;width:100%;max-width:1220px;padding:0 40px;margin:0 auto;",
          "{padding:0 40px;max-width:1130px;}",
          "{padding:0 20px;max-width:578px;}",
        ],
        o.mq.desktopMedium,
        o.mq.tablet
      );
    },
    24152: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = i(52322);
      i(2784);
      var r = i(19453),
        o = (e) => {
          let { color: t = "#fff", size: i = 18, ...r } = e;
          return (0, n.jsxs)("svg", {
            width: i,
            height: i,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...r,
            children: [
              (0, n.jsx)("path", {
                stroke: t,
                strokeWidth: "1.5",
                d: "M13.5 12.8053C14.2525 12.3146 14.75 11.4654 14.75 10.5C14.75 8.98122 13.5188 7.75 12 7.75C10.4812 7.75 9.25 8.98122 9.25 10.5C9.25 11.4654 9.74745 12.3146 10.5 12.8053L10.5 14.75C10.5 15.5784 11.1716 16.25 12 16.25C12.8284 16.25 13.5 15.5784 13.5 14.75L13.5 12.8053Z",
              }),
              (0, n.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "9.25",
                stroke: t,
                strokeWidth: "1.5",
              }),
            ],
          });
        },
        a = i(27895),
        s = i(42698),
        l = i(5901),
        c = i(874),
        p = i(64251),
        d = i(33178),
        h = i(93146),
        f = i(3756);
      let x = [
        { label: "Pricing", href: "/pricing" },
        { label: "Updates", href: "/updates" },
        { label: "App", href: "/download" },
      ];
      var m = function () {
        return (0, n.jsxs)(k, {
          children: [
            (0, n.jsxs)(u, {
              children: [
                (0, n.jsx)(g, {
                  children: (0, n.jsx)(f.Z, {
                    href: "/",
                    children: (0, n.jsx)(E, {}),
                  }),
                }),
                (0, n.jsxs)(w, {
                  children: [
                    (0, n.jsx)(f.Z, { href: "/", children: (0, n.jsx)(H, {}) }),
                    x.map((e) =>
                      (0, n.jsx)(
                        v,
                        { href: e.href, children: e.label },
                        e.label
                      )
                    ),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(j, {
              children: [
                (0, n.jsx)(l.Z, {
                  label: (0, n.jsxs)(n.Fragment, {
                    children: [
                      "Login ",
                      (0, n.jsx)(a.Z, { keys: [s.J.L], theme: "mediumWhite" }),
                    ],
                  }),
                  children: (0, n.jsxs)(Z, {
                    href: "".concat(c.Z.get("url")).concat(p._.login.index),
                    children: [(0, n.jsx)(b, { size: 18 }), "Login"],
                  }),
                }),
                (0, n.jsx)(l.Z, {
                  label: (0, n.jsxs)(n.Fragment, {
                    children: [
                      "Start your trial ",
                      (0, n.jsx)(a.Z, { keys: [s.J.T], theme: "mediumWhite" }),
                    ],
                  }),
                  children: (0, n.jsx)("div", {
                    children: (0, n.jsx)(y, {
                      onClick: () =>
                        (window.location.href = ""
                          .concat(c.Z.get("url"))
                          .concat(p._.signup)),
                      children: (0, n.jsxs)("span", {
                        children: [
                          (0, n.jsx)(o, { color: h.r.colors.ui.light }),
                          "Start your trial",
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)(L, {
              children: x
                .slice(0, 2)
                .map((e) =>
                  (0, n.jsx)(v, { href: e.href, children: e.label }, e.label)
                ),
            }),
          ],
        });
      };
      let u = r.ZP.div.withConfig({ componentId: "sc-424c477-0" })([
          "display:flex;align-items:center;",
        ]),
        g = r.ZP.span.withConfig({ componentId: "sc-424c477-1" })(
          ["display:none;", "{display:initial;}"],
          d.mq.tablet
        ),
        w = r.ZP.span.withConfig({ componentId: "sc-424c477-2" })(
          ["", "{display:none;}"],
          d.mq.tablet
        ),
        v = (0, r.ZP)(f.Z).withConfig({ componentId: "sc-424c477-3" })(
          [
            "position:relative;top:1px;margin-left:40px;color:",
            ";transition:color 0.2s ease;&:hover{color:",
            ";}",
            "{margin-left:26px;}",
          ],
          (e) => e.theme.colors.ui.light,
          (e) => e.theme.colors.ui.lightest,
          d.mq.tablet
        ),
        C = (0, r.F4)([
          "0%{transform:translateX(0%);}5%{transform:translateX(-2px) rotate(-2deg);}10%{transform:translateX(2px) rotate(2deg);}15%{transform:translateX(-1px) rotate(-1deg);}20%{transform:translateX(1px) rotate(1deg);}25%{transform:translateX(0%);}100%{transform:translateX(0%);}",
        ]),
        y = r.ZP.button.withConfig({ componentId: "sc-424c477-4" })(
          [
            "position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:8px 16px 8px 12px;min-width:152px;gap:4px;border-radius:28px;background:radial-gradient( 61.35% 50.07% at 48.58% 50%,rgb(0 0 0) 0%,rgb(255 255 255 / 4%) 100% );box-shadow:0px 0px 0px 0.5px rgba(134,143,151,0.2) inset,1px 1px 0px -0.5px rgba(134,143,151,0.4) inset,-1px -1px 0px -0.5px rgba(134,143,151,0.4) inset;padding:8px 17px 8px 12px;height:32px;min-width:136px;font-weight:600;font-size:14px;line-height:17px;text-align:center;color:#fff;span{display:flex;flex-direction:row;align-items:center;position:relative;z-index:1;gap:8px;}&::after{content:'';position:absolute;background:radial-gradient(61.35% 50.07% at 48.58% 50%,#000 0%,#181818 100%);box-shadow:0px 0px 0px 0.5px rgba(134,143,151,0.2) inset,1px 1px 0px -0.5px rgba(134,143,151,0.4) inset,-1px -1px 0px -0.5px rgba(134,143,151,0.4) inset,0 0px 3px rgba(255,255,255,0.1);position:absolute;border-radius:28px;left:0;top:0;width:100%;height:100%;opacity:0;transition:opacity 0.2s;}&:hover{&::after{opacity:1;}}&:hover svg{animation:",
            " 2s linear infinite;animation-delay:4s;}svg path,svg circle{transform-origin:center;stroke-width:1.5;transition:all 0.4s ease;}&:hover svg *{stroke:white;}&:hover svg circle{transform:scale(1.2);opacity:0;}&:hover svg path{transform:scale(1.6) translateY(-0.5px);}",
          ],
          C
        ),
        b = (0, r.ZP)((e) => {
          let { color: t = "#fff", size: i = 18, ...r } = e;
          return (0, n.jsxs)("svg", {
            width: i,
            height: i,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...r,
            children: [
              (0, n.jsx)("path", {
                d: "M6.235 19.305c.19-.457.364-.921.523-1.394m7.666 3.09a29.67 29.67 0 0 0 1.222-4.58m4.043.832c.376-2.026.573-4.115.573-6.25A8.253 8.253 0 0 0 8.398 3.58M3.262 15.155c.323-1.332.494-2.722.494-4.152 0-1.795.573-3.457 1.547-4.811m6.706 4.81a25.765 25.765 0 0 1-2.048 10.09M7.677 14c.135-.98.205-1.98.205-2.997a4.126 4.126 0 0 1 8.253 0c0 .502-.012 1.001-.037 1.497",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                stroke: "#868F97",
              }),
              (0, n.jsx)("path", {
                d: "M6.235 19.305c.19-.457.364-.921.523-1.394m7.666 3.09a29.67 29.67 0 0 0 1.222-4.58m4.043.832c.376-2.026.573-4.115.573-6.25A8.253 8.253 0 0 0 8.398 3.58M3.262 15.155c.323-1.332.494-2.722.494-4.152 0-1.795.573-3.457 1.547-4.811m6.706 4.81a25.765 25.765 0 0 1-2.048 10.09M7.677 14c.135-.98.205-1.98.205-2.997a4.126 4.126 0 0 1 8.253 0c0 .502-.012 1.001-.037 1.497",
                className: "touch",
              }),
            ],
          });
        }).withConfig({ componentId: "sc-424c477-5" })([
          ".touch{stroke:white;stroke-dashoffset:23;stroke-dasharray:23;opacity:0;transition:all 1s ease;}",
        ]),
        k = r.ZP.nav.withConfig({ componentId: "sc-424c477-6" })(
          [
            "position:absolute;max-width:1220px;padding:0 40px;margin:0 auto;left:0;right:0;display:flex;justify-content:space-between;align-self:center;width:100%;top:40px;z-index:100;",
            "{top:36px;}",
            "{padding:0 20px;}",
          ],
          d.mq.tablet,
          d.mq.phablet
        ),
        j = r.ZP.div.withConfig({ componentId: "sc-424c477-7" })(
          [
            "display:flex;align-items:center;font-size:14px;",
            "{display:none;}",
          ],
          d.mq.tablet
        ),
        L = r.ZP.div.withConfig({ componentId: "sc-424c477-8" })(
          ["", "{display:none;}"],
          d.mq.tabletUp
        ),
        Z = r.ZP.a.withConfig({ componentId: "sc-424c477-9" })([
          "display:flex;align-items:center;color:#fff;font-weight:600;position:relative;margin-right:34px;svg{margin:1px 8px 0 0;}&:hover{.touch{opacity:1;stroke-dashoffset:0;stroke-dasharray:23;}}",
        ]),
        E = () =>
          (0, n.jsxs)("svg", {
            width: "53",
            height: "22",
            viewBox: "0 0 53 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M44.6604 12.681L40.231 5.33789H43.6701L46.1082 10.3289L48.5209 5.33789H51.9854L47.5149 12.681V16.7563C47.5143 16.9994 47.4174 17.2324 47.2455 17.4043C47.0736 17.5762 46.8406 17.6731 46.5975 17.6738H44.6604V12.681Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M31.4842 5.33791H38.8796V6.90048C38.8796 7.14382 38.783 7.37718 38.6109 7.54925C38.4388 7.72131 38.2055 7.81797 37.9621 7.81797H33.2905V10.3401H38.1386V11.7635C38.1379 12.0066 38.041 12.2396 37.8691 12.4115C37.6972 12.5834 37.4642 12.6803 37.2211 12.681H33.2905V15.1884H39.0806V16.7563C39.0809 16.8769 39.0574 16.9964 39.0114 17.1078C38.9654 17.2193 38.8979 17.3206 38.8126 17.4058C38.7273 17.4911 38.6261 17.5587 38.5146 17.6047C38.4031 17.6506 38.2837 17.6741 38.1631 17.6738H30.5615L30.5615 6.25539C30.5615 6.13447 30.5854 6.01473 30.6319 5.90308C30.6783 5.79142 30.7463 5.69005 30.8321 5.60478C30.9178 5.51952 31.0196 5.45204 31.1315 5.40624C31.2434 5.36044 31.3633 5.33722 31.4842 5.33791Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M22.0168 17.6738H20.2104L20.2104 6.25538C20.2104 6.01205 20.3071 5.77868 20.4792 5.60662C20.6512 5.43455 20.8846 5.33789 21.1279 5.33789H28.6423V6.90047C28.6416 7.14359 28.5447 7.37656 28.3728 7.54847C28.2009 7.72038 27.9679 7.81727 27.7248 7.81796H22.9264V10.6016H27.6769V12.025C27.6769 12.2683 27.5802 12.5017 27.4082 12.6738C27.2361 12.8458 27.0027 12.9425 26.7594 12.9425H22.9264V16.7589C22.9264 17.0006 22.8308 17.2326 22.6603 17.404C22.4899 17.5754 22.2585 17.6724 22.0168 17.6738Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M10.8478 17.6304C11.0201 17.7992 11.1569 18.0006 11.2504 18.223C11.3438 18.4454 11.3919 18.6841 11.3919 18.9253C11.3919 19.1665 11.3438 19.4053 11.2504 19.6277C11.1569 19.85 11.0201 20.0515 10.8478 20.2203L9.59942 21.4661L8.33033 20.1944C7.63375 19.4963 7.2215 18.5643 7.17363 17.5793C7.12577 16.5942 7.44572 15.6266 8.07133 14.8643L10.8478 17.6304Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M10.8815 8.39986C11.2137 8.7325 11.4002 9.18335 11.4002 9.65341C11.4002 10.1235 11.2137 10.5743 10.8815 10.907L7.77356 14.0149C7.32984 14.4559 6.97817 14.9806 6.73896 15.5586C6.49976 16.1366 6.37779 16.7564 6.38015 17.3819C6.38091 17.7082 6.41476 18.0337 6.48116 18.3532L5.2561 17.0944C4.51086 16.3481 4.09229 15.3364 4.09229 14.2817C4.09229 13.227 4.51086 12.2154 5.2561 11.469L9.61245 7.11523L10.8815 8.39986Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M10.8762 2.21241C11.2094 2.54603 11.3966 2.9983 11.3966 3.46984C11.3966 3.94139 11.2094 4.39365 10.8762 4.72728L4.69389 10.9173C4.13424 11.4762 3.72276 12.1658 3.49665 12.9237C3.27054 13.6816 3.23694 14.484 3.3989 15.2581L2.14794 14.0046C1.77847 13.6358 1.48535 13.1978 1.28536 12.7156C1.08536 12.2334 0.982422 11.7165 0.982422 11.1945C0.982422 10.6724 1.08536 10.1555 1.28536 9.67334C1.48535 9.19114 1.77847 8.75311 2.14794 8.38433L9.59673 0.935547L10.8762 2.21241Z",
                fill: "white",
              }),
            ],
          }),
        H = () =>
          (0, n.jsx)("svg", {
            width: "18",
            height: "29",
            viewBox: "0 0 18 29",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.0023 4.86847C14.0023 4.27515 13.7658 3.70609 13.3447 3.2863L11.7281 1.67969L2.31641 11.0521C1.84958 11.5162 1.47921 12.0673 1.22652 12.674C0.973819 13.2808 0.84375 13.9312 0.84375 14.588C0.84375 15.2448 0.973819 15.8952 1.22652 16.502C1.47921 17.1087 1.84958 17.6598 2.31641 18.1238L3.89702 19.7011C3.69238 18.727 3.73484 17.7175 4.02053 16.7639C4.30622 15.8102 4.82614 14.9425 5.53327 14.2393L13.3447 6.45065C13.7658 6.03086 14.0023 5.4618 14.0023 4.86847ZM13.3424 11.0375C13.7649 11.4609 14.0022 12.0347 14.0022 12.6329C14.0022 13.2312 13.7649 13.805 13.3424 14.2284L9.38858 18.1839C8.8241 18.7451 8.37672 19.4129 8.07241 20.1486C7.76811 20.8842 7.61295 21.673 7.61595 22.4692C7.61692 22.8845 7.65997 23.2986 7.74446 23.7053L6.18599 22.1033C5.23793 21.1533 4.70544 19.8658 4.70544 18.5235C4.70544 17.1811 5.23793 15.8936 6.18599 14.9437L11.7279 9.40254L13.3424 11.0375ZM13.3021 22.7473C13.5238 22.9594 13.7 23.2126 13.8202 23.492C13.9405 23.7714 14.0024 24.0714 14.0024 24.3745C14.0024 24.6776 13.9405 24.9776 13.8202 25.257C13.7 25.5365 13.5238 25.7896 13.3021 26.0017L11.6954 27.5671L10.0621 25.9692C9.16557 25.092 8.63499 23.9208 8.57339 22.6831C8.51179 21.4454 8.92357 20.2295 9.72873 19.2716L13.3021 22.7473Z",
              fill: "white",
            }),
          });
    },
  },
]);
