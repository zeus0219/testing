(self.webpackChunk_N_E_ = self.webpackChunk_N_E_ || []).push([
  [405],
  {
    87314: function (A, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(9276);
        },
      ]);
    },
    56494: function (A, t) {
      "use strict";
      t.Z = {
        src: "/dd/marketing/_next/static/media/meta-home.318094c1.jpg",
        height: 1260,
        width: 2400,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABlxb/xAAWEAADAAAAAAAAAAAAAAAAAAAAAQP/2gAIAQEAAQUCkz//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGP/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAGPwJ//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hfKyj/9oADAMBAAIAAwAAABAH/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAIAQIBAT8Qh//EABcQAQEBAQAAAAAAAAAAAAAAAAEhABH/2gAIAQEAAT8QFBVwTf/Z",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    41934: function (A, t, e) {
      "use strict";
      var i = e(52322);
      e(2784),
        (t.Z = (A) => {
          let { color: t = "#fff", size: e = 18, ...n } = A;
          return (0, i.jsx)("svg", {
            width: e,
            height: e,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...n,
            children: (0, i.jsx)("path", {
              d: "M9.75 18.25L16 12L9.75 5.75",
              stroke: t,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
        });
    },
    19016: function (A, t, e) {
      "use strict";
      var i = e(52322);
      e(2784);
      var n = e(19453),
        a = e(33178);
      t.Z = function (A) {
        let { appearance: t, text: e, onClick: n, disable: a = !1, ...o } = A;
        switch (t) {
          case "solid":
            return (0, i.jsx)(l, {
              onClick: n || (() => {}),
              "aria-label": e,
              disabled: a,
              disable: a,
              ...o,
              children: e,
            });
          case "outline":
            return (0, i.jsx)(d, {
              onClick: n || (() => {}),
              "aria-label": e,
              disabled: a,
              disable: a,
              ...o,
              children: (0, i.jsx)("span", { children: e }),
            });
          case "gradient":
            return (0, i.jsx)(s, {
              onClick: n || (() => {}),
              "aria-label": e,
              ...o,
              children: (0, i.jsx)("span", { children: e }),
            });
          case "transparent":
            return (0, i.jsx)(r, {
              onClick: n || (() => {}),
              "aria-label": e,
              disabled: a,
              disable: a,
              ...o,
              children: e,
            });
          default:
            return null;
        }
      };
      let s = n.ZP.button.withConfig({ componentId: "sc-411481a2-0" })([
          "display:flex;flex-direction:row;align-items:center;padding:8px 17px 8px 12px;gap:8px;background:rgba(255,255,255,0.08);background:linear-gradient(#141414,#141414) padding-box,linear-gradient(to bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.2)) border-box;border-radius:50px;border:0.5px solid transparent;height:32px;min-width:136px;font-weight:600;font-size:14px;line-height:17px;text-align:center;color:#ffffff;",
        ]),
        o = n.ZP.button.withConfig({ componentId: "sc-411481a2-1" })(
          [
            "position:relative;display:flex;align-items:center;padding:4px 33px 5px 33px;border-radius:43px;font-size:16px;font-weight:600;line-height:19px;text-align:center;display:flex;align-items:center;justify-content:center;width:100%;max-width:194px;height:36px;white-space:nowrap;span{position:relative;z-index:1;}",
            "{font-size:19px;font-weight:600;width:230px;max-width:230px;height:46px;}",
          ],
          a.mq.tablet
        ),
        r = (0, n.ZP)(o).withConfig({ componentId: "sc-411481a2-2" })(
          [
            "color:#fff;&:before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;border-radius:43px;background:#fff;opacity:0.05;transition:opacity 0.25s ease;}&:hover::before{opacity:",
            ";}",
          ],
          (A) => (A.disable ? 0.05 : 0.08)
        ),
        l = (0, n.ZP)(o).withConfig({ componentId: "sc-411481a2-3" })(
          [
            "background:#fff;color:",
            ";box-shadow:0px 5px 25px rgba(255,255,255,0.15);opacity:",
            ";cursor:",
            ";&::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;border-radius:43px;background:rgba(0,0,0,0.16);opacity:0;transition:opacity 0.25s ease;}&:hover::before{opacity:",
            ";}",
          ],
          (A) => A.theme.colors.ui.medium,
          (A) => (A.disable ? 0.24 : 1),
          (A) => (A.disable ? "initial" : "pointer"),
          (A) => (A.disable ? 0 : 1)
        ),
        d = (0, n.ZP)(o).withConfig({ componentId: "sc-411481a2-4" })(
          [
            "background:transparent;color:#fff;border:1px solid #fff;box-shadow:0px 5px 25px rgba(255,255,255,0.1);transition:color 0.2s ease;backdrop-filter:blur(2px);",
            "{box-shadow:0px 2px 10px rgba(255,255,255,0.1);}svg path{fill:#fff;transition:fill 0.3s ease;}span{position:relative;z-index:1;}&::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;border-radius:43px;opacity:0.05;background:#fff;transition:opacity 0.2s ease;}&:hover{color:",
            ";svg path{fill:",
            ";transition:fill 0.3s ease;}}&:hover::before{opacity:",
            ";}",
          ],
          a.mq.tablet,
          (A) => A.theme.colors.ui.black,
          (A) => A.theme.colors.ui.black,
          (A) => (A.disable ? 0.05 : 1)
        );
    },
    92502: function (A, t, e) {
      "use strict";
      var i = e(19453),
        n = e(33178);
      let a = i.ZP.h1.withConfig({ componentId: "sc-3bc7f5d9-0" })(
          [
            "font-weight:600;font-size:54px;line-height:1.1;color:#fff;margin-bottom:16px;@media (max-height:780px) and (max-width:1440px){line-height:100%;font-size:42px;}",
            "{line-height:100%;font-size:42px;}",
            "{font-size:36px;}",
          ],
          n.mq.tablet,
          n.mq.phablet
        ),
        s = i.ZP.h2.withConfig({ componentId: "sc-3bc7f5d9-1" })(
          [
            "font-weight:600;font-size:48px;line-height:110%;color:#fff;margin-bottom:16px;transition:color 1s;@media (max-height:780px) and (max-width:1440px){line-height:100%;font-size:42px;margin-bottom:20px;}",
            "{line-height:100%;font-size:42px;margin-bottom:22px;}",
            "{font-size:36px;margin-bottom:18px;}",
          ],
          n.mq.desktopMedium,
          n.mq.phone
        ),
        o = i.ZP.h3.withConfig({ componentId: "sc-3bc7f5d9-2" })([
          "font-weight:600;font-size:22px;line-height:110%;color:#fff;margin-bottom:16px;",
        ]),
        r = i.ZP.h4.withConfig({ componentId: "sc-3bc7f5d9-3" })([
          "font-weight:600;font-size:18px;line-height:110%;color:#fff;margin-bottom:16px;",
        ]);
      t.Z = { h1: a, h2: s, h3: o, h4: r };
    },
    56956: function (A, t, e) {
      "use strict";
      var i = e(52322),
        n = e(24993),
        a = e.n(n),
        s = e(2784),
        o = e(20360),
        r = e(19453),
        l = e(33178),
        d = e(75512);
      t.Z = function (A) {
        let {
            cover: t,
            height: e,
            innherHeight: n,
            render: r,
            notSticky: l,
            top: p,
            overflowVisisble: x,
          } = A,
          [m, f] = (0, o.YD)(),
          [u, E] = (0, s.useState)(0),
          C = (0, s.useRef)();
        return (
          (0, s.useEffect)(() => {
            function A() {
              let A = C.current;
              if (A) {
                let t = window.pageYOffset || window.scrollY,
                  e = (0, d.oJ)(A),
                  i = A.getBoundingClientRect().height,
                  n = Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  ),
                  a = (0, d.uZ)((t - e) / (i - n) || 0, 0, 1);
                requestAnimationFrame(() => E(Number(a.toPrecision(2))));
              }
            }
            if (f)
              return (
                A(),
                window.addEventListener("scroll", A),
                window.addEventListener("resize", A),
                () => {
                  window.removeEventListener("scroll", A),
                    window.removeEventListener("resize", A);
                }
              );
          }, [C, f]),
          (0, i.jsx)("div", {
            ref: C,
            "data-component": "sticky",
            children: (0, i.jsx)(c, {
              height: e,
              ref: m,
              children: (0, i.jsxs)(g, {
                children: [
                  (0, i.jsx)(h, {
                    top: p,
                    cover: t,
                    overflowVisisble: x,
                    style: f && n ? { height: a()() } : {},
                    children: r && r({ progress: u }),
                  }),
                  l && l({ progress: u }),
                ],
              }),
            }),
          })
        );
      };
      let c = r.ZP.div.withConfig({ componentId: "sc-818cefdc-0" })(
          ["height:", ";position:relative;"],
          (A) => A.height || "100vh"
        ),
        g = r.ZP.div.withConfig({ componentId: "sc-818cefdc-1" })([
          "height:100%;",
        ]),
        h = r.ZP.div.withConfig({ componentId: "sc-818cefdc-2" })(
          [
            "position:sticky;top:",
            "px;min-height:initial;height:",
            ";display:flex;align-items:center;justify-content:center;overflow-x:hidden;width:100%;z-index:1;",
            ";",
            "{",
            "}",
          ],
          (A) => A.top || 0,
          (A) => (A.cover ? "100vh" : "initial"),
          (A) => A.cover && "overflow-y: hidden;",
          l.mq.phablet,
          (A) => A.overflowVisisble && "overflow: visible;"
        );
    },
    58168: function (A, t, e) {
      "use strict";
      var i = e(19453),
        n = e(33178);
      let a = i.ZP.p.withConfig({ componentId: "sc-1578630c-0" })(
          [
            "font-weight:normal;font-size:18px;line-height:132%;",
            "{font-size:18px;}",
            "{font-size:16px;}",
          ],
          n.mq.desktopMedium,
          n.mq.phone
        ),
        s = i.ZP.p.withConfig({ componentId: "sc-1578630c-1" })(
          [
            "font-style:normal;font-weight:600;font-size:22px;line-height:110%;@media (max-height:780px) and (max-width:1440px){line-height:130%;font-size:19px;}",
            "{line-height:130%;font-size:19px;}",
            "{font-size:16px;}",
          ],
          n.mq.desktopMedium,
          n.mq.phoneSmall
        );
      t.Z = { regular: a, semibold: s };
    },
    9276: function (A, t, e) {  
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return a5;
          },
          default: function () {
            return a2;
          },
        });
      var i = e(52322),
        n = e(2784),
        o = e(1470),
        r = e(56494),
        c = e(96577),
        g = e.n(c),
        h = e(20360),
        p = e(19453),
        b = e(87704),
        y = e(874),
        I = e(33178),
        v = e(25237),
        j = e.n(v),
        z = e(93146);
      let D = j()(
          () =>
            Promise.resolve()
              .then(e.bind(e, 10035))
              .then((A) => A.ResponsiveLine),
          { loadableGenerated: { webpack: () => [10035] }, ssr: !1 }
        ),
        O =
          "'FeyCalibre','-apple-system','BlinkMacSystemFont', 'San Francisco','Helvetica Neue','Helvetica','Ubuntu','Roboto', 'Noto','Segoe UI','Arial',sans-serif",
        k = z.r.colors.ui.light,
        M = {
          data: [],
          lineWidth: 1,
          animate: !1,
          enableGridX: !1,
          enableGridY: !1,
          axisLeft: null,
          axisBottom: null,
          enableCrosshair: !1,
          enablePoints: !1,
          theme: {
            background: "transparent",
            axis: {
              domain: { line: { stroke: "transparent", strokeWidth: 1 } },
              ticks: {
                line: { stroke: "transparent", strokeWidth: 0 },
                text: {
                  fill: k,
                  fontSize: 10,
                  fontWeight: 500,
                  fontFamily: O,
                  fillOpacity: 0.8,
                },
              },
              legend: { text: { fill: k, fontSize: 14, fontFamily: O } },
            },
            grid: {
              line: {
                stroke: z.r.colors.ui.light,
                strokeWidth: 1,
                strokeDasharray: "3 3",
                strokeOpacity: 0.3,
              },
            },
            legends: { text: { fill: k, fontSize: 14 } },
            labels: { text: { fill: k, fontSize: 14 } },
            crosshair: {
              line: {
                stroke: "url(#crosshair)",
                strokeWidth: 1,
                strokeOpacity: 1,
                strokeDasharray: "3 3",
              },
            },
            dots: { text: { fill: k, fontSize: 14 } },
            tooltip: {
              container: {
                background: "#000",
                color: "#fff",
                fontSize: "inherit",
                borderRadius: "2px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
                padding: "5px 9px",
              },
              table: {},
              tableCell: { padding: "3px 5px" },
            },
          },
          colors: { datum: "color" },
        };
      function S(A) {
        let { data: t, loading: e } = A,
          [a, s] = (0, n.useState)(0),
          o = (0, n.useRef)(null);
        return ((0, n.useEffect)(() => {
          o.current && s(o.current.getBoundingClientRect().width);
        }, [o]),
        e)
          ? (0, i.jsx)(P, {}, 1)
          : (0, i.jsx)(P, {
              ref: o,
              children: (0, i.jsx)(Z, {
                data: [
                  { id: "spark-chart", data: t, color: "url(#graphDefault)" },
                ],
                width: a,
              }),
            });
      }
      let Z = (A) => {
          let { data: t, width: e } = A,
            [a, s] = (0, n.useState)(void 0);
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(D, {
              ...M,
              data: t,
              yScale: { type: "linear", min: "auto", max: "auto" },
              layers: [
                "lines",
                (A) =>
                  (0, i.jsx)(L, { ...A, point: a, setPoint: s, chartWidth: e }),
              ],
            }),
          });
        },
        R = (0, p.F4)(["from{opacity:0;}to{opacity:1;}"]),
        U = (0, p.iv)(["opacity:0;animation:", " 0.5s forwards;"], R);
      (0, p.iv)(
        ["opacity:0;animation:", " 0.5s forwards;"],
        (0, p.F4)(["from{opacity:0;}to{opacity:0.5;}"])
      );
      let P = p.ZP.div.withConfig({ componentId: "sc-ed1f1067-0" })(
          [
            "display:flex;align-items:center;position:relative;height:100%;width:100%;will-change:opacity;opacity:0;",
            " svg{overflow:visible;}",
          ],
          U
        ),
        L = (A) => {
          let {
              point: t,
              points: e,
              setPoint: a,
              setComparisonPoint: s,
              innerHeight: o,
              chartWidth: r,
            } = A,
            l = (0, n.useRef)(null);
          function d(A) {
            let t = l.current.getBoundingClientRect(),
              i = A.clientX - t.x - 8;
            return e.reduce(
              (A, t) => (Math.abs(t.x - i) < Math.abs(A.x - i) ? t : A),
              null == e ? void 0 : e[0]
            );
          }
          return (0, i.jsx)("g", {
            transform: "translate(-".concat(8, ",0)"),
            children: (0, i.jsx)("rect", {
              ref: l,
              onMouseDown: function (A) {
                t || a(d(A));
              },
              onPointerDown: function (A) {
                l.current.setPointerCapture(A.pointerId), null == s || s(d(A));
              },
              onPointerUp: function (A) {
                l.current.releasePointerCapture(A.pointerId),
                  null == s || s(null);
              },
              onPointerMove: function (A) {
                return a(d(A));
              },
              onPointerLeave: function () {
                a(null), null == s || s(null);
              },
              width: r + 16,
              height: o,
              fillOpacity: 0,
            }),
          });
        };
      var V = e(92502),
        H = e(37373),
        F = e(58168),
        q = e(73572);
      p.ZP.div.withConfig({ componentId: "sc-bb20648a-9" })([
        "mask-image:radial-gradient(ellipse at center,rgba(0,0,0,1),transparent 72%);position:absolute;width:100%;height:120%;top:0;left:0;opacity:0.5;background:transparent;background-image:radial-gradient(#28292e 1px,transparent 0);background-size:7px 7px;background-position:-8.5px -8.5px;pointer-events:none;",
      ]);
      (0, p.F4)([
        "0%{transform:translateX(0%);}5%{transform:translateX(-2px) rotate(-2deg);}10%{transform:translateX(2px) rotate(2deg);}15%{transform:translateX(-1px) rotate(-1deg);}20%{transform:translateX(1px) rotate(1deg);}25%{transform:translateX(0%);}100%{transform:translateX(0%);}",
      ]);
      var A5 = e(30458),
        A4 = e(91446),
        A3 = e(64251),
        A8 = e(9271),
        A9 = e(19016);
      var tU = e(42698);
      var tY = e(1242);
      p.ZP.div.withConfig({ componentId: "sc-ffaf8dad-0" })(
        ["color:", ";opacity:0.64;padding:16px 16px 0;font-size:14px;"],
        (A) => A.theme.colors.ui.light
      );
      p.ZP.div.withConfig({ componentId: "sc-ffaf8dad-5" })([
        "font-size:12px;display:flex;justify-content:flex-end;",
      ]),
        p.ZP.div.withConfig({ componentId: "sc-ffaf8dad-6" })(
          [
            "margin-left:16px;font-size:16px;min-width:48px;text-align:right;",
            " & > strong{color:",
            ";}",
          ],
          tY.lN,
          (A) => ("true" === A.highlight ? "#fff" : A.theme.colors.ui.light)
        );
      var tX = e(27895);
      p.ZP.div.withConfig({ componentId: "sc-15f38c4f-2" })(
        ["display:none;", "{display:block;}"],
        I.mq.tablet
      );
      var ew = e(56956)
      var eL = e(75512);
      p.ZP.div.withConfig({ componentId: "sc-c716dd4f-22" })([
        "will-change:opacity;&:not(:last-of-type){position:relative;&::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:1px;}}",
      ]);
      var ny = {
          src: "/dd/marketing/_next/static/media/canvas-UI_1x.125fd4b0.png",
          height: 469,
          width: 750,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUeHiIXFxxBu/leAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAG0lEQVR4nGNgZGBkZGRkAEEwQGHApBgZGUAEAAH4ABeMBTspAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        nI = {
          src: "/dd/marketing/_next/static/media/canvas-UI_2x.4c680c4e.png",
          height: 938,
          width: 1500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUYGBwfHyTmngNfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAFklEQVR4nGNggANGMIAxwCJwggEsAAABgQAQaUcUfAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        nv = {
          src: "/dd/marketing/_next/static/media/canvas-UI_4x.331c4e23.png",
          height: 1876,
          width: 3e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUXFxweHiMTJeiOAAAACXBIWXMAACxLAAAsSwGlPZapAAAAGklEQVR4nGNgYGRgYAATjGCAwoBJgcQYGBgAAeYAEw1WBD4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        nj = {
          src: "/dd/marketing/_next/static/media/home-UI_1x.84d28fcb.png",
          height: 469,
          width: 750,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUaGyAWFhs+fjJmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nGNgQABGRgYGRggLxoAIQmhGBgAA1gALCRmH0AAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        nz = {
          src: "/dd/marketing/_next/static/media/home-UI_2x.93e459b8.png",
          height: 938,
          width: 1500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUaGyAXFxy4w/yzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAGklEQVR4nGNgQABGRhACs8AIgiEiDIyMjIwAAQUADsPSvOcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        nD = {
          src: "/dd/marketing/_next/static/media/home-UI_4x.2c3d07f7.png",
          height: 1876,
          width: 3e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUaGyAWFxy5AZaEAAAACXBIWXMAACxLAAAsSwGlPZapAAAAHElEQVR4nGNgQABGRgYGRggLwgBjiAgDIyMjIwAA5wANEQj73QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        nO = function () {
          return (0, i.jsx)(nk, {
            "aria-hidden": "true",
            children: (0, i.jsx)(nM, {}),
          });
        };
      let nk = p.ZP.div.withConfig({ componentId: "sc-fe3fc0e9-0" })(
        [
          "position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;padding:30px 60px 0 65px;flex:1;",
          "{padding:20px 40px 0 25px;}",
          "{padding:12px 40px 0 28px;}",
        ],
        I.mq.desktopSmall,
        I.mq.tablet
      );
      function nM() {
        let [A, t] = (0, n.useState)(""),
          [e, a] = (0, n.useState)(""),
          [s, o] = (0, n.useState)(0);
        return (
          (0, n.useEffect)(() => {
            let A = new window.Date(),
              e = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "November",
                "December",
              ][A.getMonth()],
              i = A.getDate();
            t(
              [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ][A.getDay()]
            ),
              a(e),
              o(i);
          }, []),
          (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(nS, { children: "Hello, Warren" }),
              (0, i.jsxs)(nZ, { children: [A, ", ", e, " ", s] }),
            ],
          })
        );
      }
      let nS = p.ZP.div.withConfig({ componentId: "sc-fe3fc0e9-1" })(
          [
            "font-weight:600;font-size:16.6667px;line-height:20px;",
            "{font-size:14.8px;}",
            "{line-height:8px;font-size:8px;}",
          ],
          I.mq.desktopSmall,
          I.mq.tablet
        ),
        nZ = p.ZP.div.withConfig({ componentId: "sc-fe3fc0e9-2" })(
          [
            "font-size:11.4583px;line-height:14px;color:",
            ";",
            "{font-size:10.17px;}",
            "{line-height:7px;font-size:6px;}",
          ],
          (A) => A.theme.colors.ui.light,
          I.mq.desktopSmall,
          I.mq.tablet
        );
      function nR(A) {
        let { progress: t } = A;
        return (0, i.jsxs)(nU, {
          style: {
            borderTopLeftRadius: "".concat((1 - 3 * t) * 11, "px"),
            borderTopRightRadius: "".concat((1 - 3 * t) * 11, "px"),
          },
          children: [
            (0, i.jsx)(H.Z, {
              src: nj,
              srcMedium: nz,
              srcLarge: nD,
              alt: "Fey home page",
              style: { height: "100%" },
            }),
            (0, i.jsx)(nO, {}),
            (0, i.jsx)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                opacity: t > 0.9 ? 1 : 0,
                visibility: t > 0.9 ? "visible" : "hidden",
                transition: "opacity 0.25s ease",
              },
              children: (0, i.jsx)(H.Z, {
                src: ny,
                srcMedium: nI,
                srcLarge: nv,
                alt: "Fey canvas",
                style: { height: "100%" },
              }),
            }),
          ],
        });
      }
      let nU = p.ZP.div.withConfig({ componentId: "sc-213d6256-0" })(
        [
          "position:relative;width:100%;height:100%;display:block;backface-visibility:hidden;overflow:hidden;will-change:border-radius;",
          "{display:none;}",
        ],
        I.mq.tablet
      );
      var nP = function (A) {
        let { progress: t } = A,
          { width: e } = (0, eL.iP)();
        if (e > 768) return null;
        let n = e <= 540 ? (0, eL.uZ)(1.44 - 0.25 * t * 10, 1, 1.44) : 1;
        return (0, i.jsxs)(nL, {
          style: {
            transform: "scaleY(".concat(n, ")"),
            borderTopLeftRadius: "".concat((1 - 3 * t) * 7, "px"),
            borderTopRightRadius: "".concat((1 - 3 * t) * 7, "px"),
          },
          "aria-hidden": "true",
          children: [
            (0, i.jsx)(H.Z, {
              src: nj,
              srcMedium: nz,
              srcLarge: nD,
              alt: "Fey home page",
              style: { height: "100%" },
            }),
            (0, i.jsx)(nO, {}),
            (0, i.jsx)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                opacity: t > 0.9 ? 1 : 0,
                visibility: t > 0.9 ? "visible" : "hidden",
                transition: "opacity 0.25s ease",
              },
              children: (0, i.jsx)(H.Z, {
                src: ny,
                srcMedium: nI,
                srcLarge: nv,
                alt: "Fey canvas",
                style: { height: "100%" },
              }),
            }),
          ],
        });
      };
      let nL = p.ZP.div.withConfig({ componentId: "sc-c387fc9f-0" })(
        [
          "position:relative;width:100%;height:100%;display:block;backface-visibility:hidden;overflow:hidden;",
          "{display:none;}",
        ],
        I.mq.desktopSmallUp
      );
      var nV = e(43984),
        nH = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(nG, {
                children: (0, i.jsxs)(nF, {
                  onClick: () =>
                    (window.location.href = ""
                      .concat(y.Z.get("url"))
                      .concat(A3._.signup)),
                  "aria-label": "Submit request",
                  children: [
                    "Press ",
                    (0, i.jsx)(tX.Z, { keys: [tU.J.T], theme: "mediumWhite" }),
                    " anytime to start your trial",
                  ],
                }),
              }),
              (0, i.jsx)(nT, {
                children: (0, i.jsx)(A9.Z, {
                  appearance: "transparent",
                  text: "Start your free trial",
                  onClick: () =>
                    (window.location.href = ""
                      .concat(y.Z.get("url"))
                      .concat(A3._.signup)),
                }),
              }),
            ],
          });
        };
      let nF = p.ZP.button.withConfig({ componentId: "sc-3bc61693-0" })(
          [
            "display:flex;align-items:center;font-weight:600;font-size:14px;line-height:132%;text-align:center;color:",
            ";transition:color 0.2s ease;& > span{margin:0 4px;transition:color 0.2s ease;}&:hover,&:focus{color:#fff;}",
            "{display:none;}",
          ],
          (A) => A.theme.colors.ui.light,
          I.mq.tablet
        ),
        nG = p.ZP.div.withConfig({ componentId: "sc-3bc61693-1" })(
          ["", "{display:none;}"],
          I.mq.tablet
        ),
        nT = p.ZP.div.withConfig({ componentId: "sc-3bc61693-2" })(
          ["", "{display:none;}"],
          I.mq.tabletUp
        );
      var nN = {
          src: "/dd/marketing/_next/static/media/key-lights.e51a9404.svg",
          height: 410,
          width: 760,
          blurWidth: 0,
          blurHeight: 0,
        },
        nY = {
          src: "/dd/marketing/_next/static/media/macbook_1x.dfe0dcce.jpg",
          height: 410,
          width: 760,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGQB//EABUQAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEBAAEFAo//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAVEAEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAQABPyGX/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBAAAgMAAAAAAAAAAAAAAAAAAGEBMVH/2gAIAQEAAT8QTNaj/9k=",
          blurWidth: 8,
          blurHeight: 4,
        },
        nJ = {
          src: "/dd/marketing/_next/static/media/macbook_2x.943dda57.jpg",
          height: 820,
          width: 1520,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGQB//EABUQAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEBAAEFAo//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAVEAEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAQABPyGX/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBAAAgMAAAAAAAAAAAAAAAAAAGEBMVH/2gAIAQEAAT8QTNaj/9k=",
          blurWidth: 8,
          blurHeight: 4,
        },
        n_ = {
          src: "/dd/marketing/_next/static/media/macbook_4x.299ca224.jpg",
          height: 1640,
          width: 3040,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGQB//EABUQAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEBAAEFAo//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAVEAEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAQABPyGH/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGRAAAQUAAAAAAAAAAAAAAAAAEQAhQVFh/9oACAEBAAE/EHwIvF//2Q==",
          blurWidth: 8,
          blurHeight: 4,
        },
        nK = {
          src: "/dd/marketing/_next/static/media/screen-1_1x.71b44f17.jpg",
          height: 410,
          width: 760,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGOB//EABYQAAMAAAAAAAAAAAAAAAAAAAEREv/aAAgBAQABBQKiv//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABUQAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEBAAY/Ao//xAAXEAEAAwAAAAAAAAAAAAAAAAABACEx/9oACAEBAAE/IQEGnZ//2gAMAwEAAgADAAAAEPP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAWEAEBAQAAAAAAAAAAAAAAAAARAFH/2gAIAQEAAT8QHoI0v//Z",
          blurWidth: 8,
          blurHeight: 4,
        },
        nW = {
          src: "/dd/marketing/_next/static/media/screen-1_2x.82b0b05b.jpg",
          height: 820,
          width: 1520,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGOB//EABYQAAMAAAAAAAAAAAAAAAAAAAEREv/aAAgBAQABBQKiv//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABUQAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEBAAY/Ao//xAAXEAEAAwAAAAAAAAAAAAAAAAABACEx/9oACAEBAAE/IQEGnZ//2gAMAwEAAgADAAAAEPP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAWEAEBAQAAAAAAAAAAAAAAAAARAFH/2gAIAQEAAT8QHoI0v//Z",
          blurWidth: 8,
          blurHeight: 4,
        },
        nX = {
          src: "/dd/marketing/_next/static/media/screen-1_4x.5ab54123.jpg",
          height: 1640,
          width: 3040,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGOB//EABYQAAMAAAAAAAAAAAAAAAAAAAEREv/aAAgBAQABBQKiv//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABUQAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEBAAY/Ao//xAAXEAEAAwAAAAAAAAAAAAAAAAABACEx/9oACAEBAAE/IQEGnZ//2gAMAwEAAgADAAAAEPP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAWEAEBAQAAAAAAAAAAAAAAAAARAFH/2gAIAQEAAT8QHoI0v//Z",
          blurWidth: 8,
          blurHeight: 4,
        },
        nq = {
          src: "/dd/marketing/_next/static/media/screen-2_1x.066ce593.jpg",
          height: 410,
          width: 760,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGOB//EABYQAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAQABBQI0l//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQEAAT8hxnKf/9oADAMBAAIAAwAAABD7/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAFhABAQEAAAAAAAAAAAAAAAAAEQAB/9oACAEBAAE/EEXA0v/Z",
          blurWidth: 8,
          blurHeight: 4,
        },
        n$ = {
          src: "/dd/marketing/_next/static/media/screen-2_2x.7a99b53c.jpg",
          height: 820,
          width: 1520,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGOB//EABYQAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAQABBQI0l//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQEAAT8hxnKf/9oADAMBAAIAAwAAABD7/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAFhABAQEAAAAAAAAAAAAAAAAAEQEA/9oACAEBAAE/EINcCm//2Q==",
          blurWidth: 8,
          blurHeight: 4,
        },
        n1 = {
          src: "/dd/marketing/_next/static/media/screen-2_4x.d237caeb.jpg",
          height: 1640,
          width: 3040,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGOB//EABYQAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAgBAQABBQI0l//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQEAAT8hxnKf/9oADAMBAAIAAwAAABD7/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAFhABAQEAAAAAAAAAAAAAAAAAEQEA/9oACAEBAAE/EINcCm//2Q==",
          blurWidth: 8,
          blurHeight: 4,
        },
        n0 = {
          src: "/dd/marketing/_next/static/media/screen-3_1x.77433fd1.jpg",
          height: 410,
          width: 760,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGQB//EABYQAAMAAAAAAAAAAAAAAAAAAAACEv/aAAgBAQABBQK2P//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABUQAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEBAAY/Aq//xAAXEAEBAQEAAAAAAAAAAAAAAAABEQBx/9oACAEBAAE/IViNd3//2gAMAwEAAgADAAAAEAv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAWEAEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQEAAT8QXLKSAd//2Q==",
          blurWidth: 8,
          blurHeight: 4,
        },
        n7 = {
          src: "/dd/marketing/_next/static/media/screen-3_2x.273beb24.jpg",
          height: 820,
          width: 1520,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGQB//EABYQAAMAAAAAAAAAAAAAAAAAAAACEv/aAAgBAQABBQK2P//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABUQAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEBAAY/Aq//xAAXEAEBAQEAAAAAAAAAAAAAAAABEQBx/9oACAEBAAE/IViNd3//2gAMAwEAAgADAAAAEAP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAWEAEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQEAAT8QXLKSAd//2Q==",
          blurWidth: 8,
          blurHeight: 4,
        },
        n5 = {
          src: "/dd/marketing/_next/static/media/screen-3_4x.8b2644d4.jpg",
          height: 1640,
          width: 3040,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGQB//EABYQAAMAAAAAAAAAAAAAAAAAAAACEv/aAAgBAQABBQK2P//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABUQAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEBAAY/Aq//xAAXEAEBAQEAAAAAAAAAAAAAAAABEQBx/9oACAEBAAE/IViNd3//2gAMAwEAAgADAAAAEAv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAWEAEBAQAAAAAAAAAAAAAAAAABEQD/2gAIAQEAAT8QXLCSC7//2Q==",
          blurWidth: 8,
          blurHeight: 4,
        };
      let n2 = (0, p.F4)([
          "0%{opacity:0;}5%{opacity:1;}50%{transform:translateX(94px);opacity:1;}52%{transform:translateX(96px);opacity:0;}100%{opacity:0;}",
        ]),
        n4 = (0, p.F4)([
          "0%{opacity:0;}15%{opacity:0;transform:translateX(30px) rotate(-240deg) scale(0.5);}50%{transform:translateX(94px) rotate(-60deg) scale(1);opacity:1;}55%{transform:translateX(96px) rotate(0deg) scale(0.4);opacity:0;}100%{opacity:0;}",
        ]),
        n6 = (0, p.F4)([
          "0%{box-shadow:0 2px 6px black,0 0 2px rgba(182,177,239,0),0 0 2px rgba(224,172,131,0);}50%{box-shadow:0 2px 2px rgba(0,0,0,0),-2px 0 6px rgba(182,177,239,0.3),2px 0 6px rgba(224,172,131,0.3);}100%{box-shadow:0 2px 6px black,0 0 2px rgba(182,177,239,0),0 0 2px rgba(224,172,131,0);}",
        ]),
        n3 = p.ZP.span.withConfig({ componentId: "sc-773c9270-0" })(
          [
            "width:21px;height:21px;position:absolute;top:-11px;left:36px;filter:blur(0.5px);transform-origin:center;animation:",
            " 8s linear infinite;&::before,&::after{content:'';position:absolute;}&::before{width:1px;height:100%;left:10px;background:linear-gradient(to bottom,transparent,rgba(224,173,135,0.8),transparent);}&::after{width:100%;height:1px;top:10px;background:linear-gradient(to left,transparent,rgba(224,173,135,0.8),transparent);}",
          ],
          n4
        ),
        n8 = p.ZP.span.withConfig({ componentId: "sc-773c9270-1" })([
          "position:relative;margin-left:4px;top:-1px;font-size:13px;line-height:17px;",
        ]),
        n9 = p.ZP.button.withConfig({ componentId: "sc-773c9270-2" })(
          [
            "padding:0px 13px 0px 8px;margin-bottom:22px;color:#e6e6e6;z-index:1;position:relative;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:5px 15px 5px 8px;border-radius:99px;background:linear-gradient(black,black) padding-box,linear-gradient(to right,rgba(182,177,239,0.2),rgba(224,172,131,0.2)) border-box;border:1px solid transparent;box-shadow:0 2px 8px -1px rgba(0,0,0,0.6);transition:all 0.6s ease;cursor:pointer;-webkit-tap-highlight-color:transparent;&::before{content:'';position:absolute;top:-1px;left:14px;height:1px;width:32px;background:linear-gradient(to right,transparent,rgba(255,255,255,0.16));animation:",
            " 8s linear infinite;mix-blend-mode:difference;}&:hover{animation:",
            " 2.2s linear infinite;}&:hover::before{opacity:0;animation:stop;}&:hover ",
            "{opacity:0;animation:stop;}& text{position:relative;margin-left:4px;top:-1px;font-size:13px;line-height:17px;}",
          ],
          n2,
          n6,
          n3
        );
      function aA() {
        let [A, t] = (0, n.useState)(!1),
          e = (0, n.useRef)(null),
          a = (0, q.useIsClient)(),
          s = (A) => {
            A.preventDefault(),
              t(!1),
              (e.current.src =
                "https://player.vimeo.com/video/893918505?h=7c1acb90f0&loop=0");
          };
        return (
          (0, n.useEffect)(() => {
            if (A) {
              let A = (A) => {
                "Escape" === A.key && s(A);
              };
              return (
                document.addEventListener("keydown", A),
                () => document.removeEventListener("keydown", A)
              );
            }
          }, [A, s]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)(n9, {
                onClick: () => {
                  t(!0),
                    e.current.contentWindow.postMessage(
                      { method: "play" },
                      "*"
                    );
                },
                children: [
                  (0, i.jsx)("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                      d: "M8.98883 17.9652C8.44583 18.297 7.74902 17.9063 7.74902 17.2699V6.73023C7.74902 6.09386 8.44583 5.70307 8.98883 6.0349L17.6122 11.3047C18.1321 11.6225 18.1321 12.3776 17.6122 12.6954L8.98883 17.9652Z",
                      fill: "#fff",
                    }),
                  }),
                  (0, i.jsx)(n8, { children: "Watch the guided tour" }),
                  (0, i.jsx)(n3, {}),
                ],
              }),
              a &&
                (0, i.jsx)(A4.Z, {
                  children: (0, i.jsxs)(ae, {
                    style: {
                      opacity: A ? 1 : 0,
                      pointerEvents: A ? "initial" : "none",
                    },
                    children: [
                      (0, i.jsx)(at, {
                        onClick: s,
                        children: (0, i.jsx)(b.Z, { size: 16 }),
                      }),
                      (0, i.jsx)(ai, {
                        children: (0, i.jsx)(an, {
                          children: (0, i.jsx)(aa, {
                            children: (0, i.jsx)("iframe", {
                              ref: e,
                              src: "https://player.vimeo.com/video/893918505?h=7c1acb90f0&loop=0",
                              allow: "autoplay; fullscreen",
                              allowFullScreen: !0,
                              style: {
                                width: "100%",
                                height: "100%",
                                border: "none",
                              },
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      }
      let at = p.ZP.button.withConfig({ componentId: "sc-773c9270-3" })([
          "width:24px;height:24px;background:rgba(255,255,255,0.05);border-radius:50%;position:absolute;top:24px;left:24px;display:grid;place-content:center;",
        ]),
        ae = p.ZP.div.withConfig({ componentId: "sc-773c9270-4" })([
          "position:fixed;top:0;left:0;right:0;height:100%;background:#000;z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;",
        ]),
        ai = p.ZP.div.withConfig({ componentId: "sc-773c9270-5" })([
          "max-width:1004px;width:100%;",
        ]),
        an = p.ZP.div.withConfig({ componentId: "sc-773c9270-6" })([
          "position:relative;z-index:1;border-radius:12px;overflow:hidden;padding-top:56.25%;",
        ]),
        aa = p.ZP.div.withConfig({ componentId: "sc-773c9270-7" })([
          "position:absolute;inset:0;",
        ]),
        as = p.ZP.button.withConfig({ componentId: "sc-773c9270-8" })(
          [
            "position:relative;height:28px;font-size:14px;line-height:17px;padding:0 13px 0 8px;color:",
            ";box-shadow:0px 2px 2px rgba(0,0,0,0.13);border-radius:47px;span{z-index:1;position:relative;display:flex;align-items:center;justify-content:space-between;gap:8px;}&::after{content:'';position:absolute;width:100%;height:100%;top:0;left:0;border-radius:47px;background:#fff;opacity:0;transition:opacity 0.3s ease;}:root{--angle:132.89deg;}@property --angle{syntax:'<angle>';initial-value:132.89deg;inherits:false;}@keyframes rotateConicGradient{to{--angle:492.89deg;}}&::before{content:'';position:absolute;width:100%;height:100%;left:0;top:0;background-image:linear-gradient(180deg,#0b0b0f 0%,#000000 100%),conic-gradient( from var(--angle) at 47.4% 51.13%,rgba(215,203,231,0.04) -0.45deg,rgba(179,174,245,0) 39.67deg,rgba(179,174,245,0) 63.61deg,rgba(181,176,245,0.17) 152.92deg,rgba(214,203,232,0) 179.84deg,rgba(236,190,173,0.08) 225.01deg,rgba(236,190,172,0) 304.51deg,rgba(215,203,231,0.04) 359.55deg,rgba(179,174,245,0) 399.67deg );background-origin:border-box;background-clip:padding-box,border-box;border:1px solid transparent;border-radius:47px;animation:rotateConicGradient 8s 0.6s ease infinite;pointer-events:none;}",
          ],
          (A) => A.theme.colors.ui.lightest
        );
      p.ZP.div.withConfig({ componentId: "sc-773c9270-9" })(
        [
          "position:relative;margin-bottom:22px;& > svg{position:absolute;left:-12px;top:-10px;transition:transform 1s;}&:hover{svg{transform:scale(1.05,1.1);}",
          "{&::after{opacity:0.03;}}}",
        ],
        as
      );
      let ao = p.ZP.div.withConfig({ componentId: "sc-773c9270-10" })([
        "position:absolute;top:-50px;width:100%;max-width:468px;left:0;right:0;height:129px;margin:0 auto;background:rgba(234,236,138,0.04);filter:blur(30.4688px);border-radius:50%;",
      ]);
      function ar() {
        let [A, t] = (0, h.YD)({ threshold: 0.9, triggerOnce: !0 }),
          [e, a] = (0, h.YD)(),
          { height: s, width: o } = (0, eL.iP)(),
          { adjustedTop: r } = ap({ width: o, height: s }),
          l = (0, n.useRef)(null),
          [d, c] = (0, n.useState)(0),
          [g, p] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          l.current &&
            (l.current.style.transform = "translateY(".concat(r, "vh)"));
        }, [o, s, r, l]),
          (0, n.useEffect)(() => {
            console.log(a,'4444444444',window.scrollY);
            let A = () => c((0, eL.uZ)(window.scrollY, 0, 500));
            if (a)
              return (
                A(),
                window.addEventListener("scroll", A),
                () => window.removeEventListener("scroll", A)
              );
          }, [a]),
          (0, n.useEffect)(() => {
            var A;
            (A = () => {
              p(!0);
            }),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  A();
                });
              });
          }, []);
        let [x, m] = (0, n.useState)({ src: nK, srcMedum: nW, srcLarge: nX });
        return (
          (0, n.useEffect)(() => {
            m(
              [
                { src: nK, srcMedum: nW, srcLarge: nX },
                { src: nq, srcMedum: n$, srcLarge: n1 },
                { src: n0, srcMedum: n7, srcLarge: n5 },
              ][Math.floor(3 * Math.random())]
            );
          }, []),
          (0, i.jsx)(af, {
            style: { minHeight: "150vh" },
            ref: e,
            children: (0, i.jsxs)(A8.Z, {
              children: [
                (0, i.jsx)(al, {
                  style: {
                    position: "absolute",
                    top: "17.9vh",
                    left: 0,
                    right: 0,
                    opacity: (0, eL.uZ)(1 - d / 2000, 0, 1),
                    willChange: "opacity",
                  },
                  children: (0, i.jsxs)(aE, {
                    children: [
                      (0, i.jsx)(A5.Z, {
                        duration: "3s",
                        fromZero: !0,
                        children: (0, i.jsx)(aA, {}),
                      }),
                      (0, i.jsx)(aB, {
                        children: (0, i.jsxs)(A5.Z, {
                          duration: "3.6s",
                          fromZero: !0,
                          children: [
                            (0, i.jsx)("span", { children: "Finance is" }),
                            " ",
                            (0, i.jsx)("span", {
                              children: "finally effortless.",
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(A5.Z, {
                        fromZero: !0,
                        children: (0, i.jsx)("div", {
                          style: {
                            opacity: (0, eL.uZ)(1 - d / 200, 0, 1),
                            willChange: "opacity",
                          },
                          children: (0, i.jsx)(nH, {}),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)(aQ, {
                  style: { animation: g ? "fadein 4s 0.3s forwards" : "none" },
                  children: [
                    (0, i.jsx)(ay, {
                      tabIndex: -1,
                      style: { transform: "translateY(-".concat(d / 2 - 250, "px)") },
                      children: (0, i.jsxs)(aI, {
                        ref: l,
                        children: [
                          (0, i.jsx)(ao, {}),
                          (0, i.jsx)(av, {
                            src: nY,
                            srcMedium: nJ,
                            srcLarge: n_,
                            alt: "",
                          }),
                          (0, i.jsx)(az, {
                            children: (0, i.jsx)(aj, {
                              src: x.src,
                              srcMedium: x.srcMedum,
                              srcLarge: x.srcLarge,
                              alt: "",
                            }),
                          }),
                          (0, i.jsx)(aD, {
                            children: (0, i.jsx)(H.Z, { src: nN, alt: "" }),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(ax, {}),
                  ],
                }),
                (0, i.jsxs)(am, {
                  children: [
                    (0, i.jsx)(au, {
                      children: (0, i.jsxs)(aE, {
                        children: [
                          (0, i.jsx)(V.Z.h2, {
                            children: "Simplify the complex.",
                          }),
                          (0, i.jsx)(V.Z.h2, { children: "Reduce the noise." }),
                          (0, i.jsx)(F.Z.regular, {
                            children:
                              "Fey curates essential insights from industry giants, ensuring you get a clear view without clutter — all packed within an intuitive interface.",
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(aM, {
                      ref: A,
                      children: (0, i.jsxs)(aS, {
                        "aria-hidden": "true",
                        children: [
                          (0, i.jsx)(aR, {
                            delay: "0.2s",
                            style: t ? { transform: "none", opacity: 1 } : {},
                            children: (0, i.jsx)(ad, {}),
                          }),
                          (0, i.jsx)(aR, {
                            delay: "0.1s",
                            style: t ? { transform: "none", opacity: 1 } : {},
                            children: (0, i.jsx)(ac, {}),
                          }),
                          (0, i.jsx)(aU, {
                            delay: "0.1s",
                            style: t ? { transform: "none", opacity: 1 } : {},
                            children: (0, i.jsx)(ag, {}),
                          }),
                          (0, i.jsx)(aU, {
                            delay: "0.2s",
                            style: t ? { transform: "none", opacity: 1 } : {},
                            children: (0, i.jsx)(ah, {}),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      let al = p.ZP.div.withConfig({ componentId: "sc-773c9270-11" })(
          [
            "display:flex;align-items:center;justify-content:center;",
            "{z-index:100;}",
          ],
          I.mq.tablet
        ),
        ad = () =>
          (0, i.jsx)("svg", {
            viewBox: "0 0 75 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsxs)("g", {
              clipPath: "url(#clip0_8116_180979)",
              children: [
                (0, i.jsx)("path", {
                  d: "M54.7518 15.9268C52.2163 15.9268 50.6407 14.4581 50.6407 12.0907C50.6407 9.63377 52.0946 8.10518 54.4356 8.10518H54.632C54.9257 8.10518 55.33 8.11476 55.8823 8.18374V5.21805H57.5359V15.6595C57.5359 15.6595 55.9647 15.9268 54.7518 15.9268ZM54.737 9.40719C53.1351 9.40719 52.3562 10.2718 52.3562 12.0495C52.3562 13.6457 53.296 14.6377 54.8059 14.6377C55.0962 14.6377 55.4287 14.6186 55.8818 14.5798V9.51354C55.4292 9.44072 55.0641 9.40719 54.737 9.40719ZM32.1008 15.6873L27.6338 7.89201L27.6323 15.6873H26.0755V5.81876H28.2551L32.7221 13.5446L32.7202 5.81876H34.2976V15.6873H32.1008ZM46.3295 15.8392C45.5774 15.8392 44.7932 15.7548 43.8596 15.5752L43.7585 15.556V14.1774L43.906 14.209C44.7295 14.3848 45.4404 14.5348 46.1517 14.5348C46.7261 14.5348 48.064 14.4447 48.064 13.5992C48.064 12.8902 47.1395 12.712 46.397 12.5698L46.3501 12.5602C46.2111 12.5343 46.0804 12.508 45.9702 12.4802C44.8809 12.1976 43.7187 11.7727 43.7187 10.313C43.7187 8.88936 44.8454 8.07357 46.8104 8.07357C47.7536 8.07357 48.4382 8.17416 48.9886 8.25656L49.2559 8.29584V9.63377L49.1136 9.60791C48.4908 9.49342 47.7608 9.37558 47.059 9.37558C46.2787 9.37558 45.3527 9.52168 45.3527 10.2158C45.3527 10.7921 46.1105 10.9569 46.9881 11.148C48.2154 11.4134 49.7368 11.7468 49.7368 13.4215C49.7368 14.9577 48.4961 15.8392 46.3295 15.8392ZM62.1782 15.8392C60.4667 15.8392 58.8815 15.5374 58.8815 13.352C58.8815 10.9736 61.3327 10.9736 62.7981 10.9736C62.9437 10.9736 63.6326 11.0057 63.8438 11.0148C63.8419 9.68072 63.8252 9.36264 61.8903 9.36264C61.1234 9.36264 60.2717 9.51402 59.5196 9.6491L59.3759 9.67497V8.35763L59.4727 8.33703C60.3445 8.15979 61.1852 8.07357 62.0422 8.07357C63.9171 8.07357 65.5056 8.26231 65.5056 10.5885V15.6614L65.3916 15.6744C64.0929 15.82 63.0616 15.8392 62.1782 15.8392ZM62.7569 12.1506C61.3438 12.1506 60.4681 12.3585 60.4681 13.3932C60.4681 14.5908 61.5852 14.69 62.6333 14.69C63.0242 14.69 63.7279 14.6397 63.943 14.6243V12.1918C63.6402 12.1789 62.8522 12.1506 62.7569 12.1506ZM38.9754 15.8392C37.2614 15.8392 35.6767 15.5374 35.6767 13.352C35.6767 10.9736 38.1279 10.9736 39.5928 10.9736C39.7389 10.9736 40.4292 11.0057 40.6409 11.0148C40.639 9.68072 40.6204 9.36264 38.6855 9.36264C37.9181 9.36264 37.0664 9.51402 36.3143 9.6491L36.1706 9.67497V8.35763L36.2698 8.33703C37.1145 8.16237 37.9748 8.07409 38.8374 8.07357C40.7118 8.07357 42.3008 8.26231 42.3008 10.5885V15.6614L42.1863 15.6744C40.8881 15.82 39.8568 15.8392 38.9754 15.8392ZM39.5516 12.1506C38.139 12.1506 37.2652 12.3585 37.2652 13.3932C37.2652 14.5908 38.3804 14.69 39.4285 14.69C39.8213 14.69 40.525 14.6397 40.7401 14.6243V12.1918C40.435 12.1789 39.647 12.1506 39.5516 12.1506Z",
                  fill: "#6166DC",
                }),
                (0, i.jsx)("path", {
                  d: "M72.0904 19.0403V15.803C71.4452 15.8931 71.1026 15.8931 70.8258 15.8931C70.1704 15.8931 69.4428 15.7508 68.8795 15.5132C67.6182 14.9887 66.8661 13.657 66.8661 11.9483C66.8661 11.0956 67.074 9.53633 68.4641 8.69611C69.1621 8.27935 69.9855 8.10115 71.2243 8.10115C71.6674 8.10115 72.2662 8.13469 72.8444 8.16822L73.7838 8.21708V18.2902L72.0904 19.0403ZM71.1007 9.40364C69.4203 9.40316 68.5686 10.2606 68.5686 11.9483C68.5686 14.1212 69.839 14.5777 70.9072 14.5777C71.1673 14.5777 71.4595 14.5777 72.1067 14.4953V9.45059C71.5999 9.41705 71.3661 9.40364 71.1007 9.40364Z",
                  fill: "#6166DC",
                }),
                (0, i.jsx)("path", {
                  d: "M18.6879 -0.0307617L13.2183 14.9965C13.1506 15.1815 13.0323 15.3438 12.8767 15.4646C12.7212 15.5855 12.5348 15.6602 12.3388 15.6801V15.6872H18.1207C18.5734 15.6872 18.9609 15.3993 19.1051 14.997L24.5766 -0.0307617H18.6879Z",
                  fill: "#6166DC",
                }),
                (0, i.jsx)("path", {
                  d: "M11.8669 15.4593C12.2023 15.4593 12.4959 15.2926 12.6755 15.0401C12.6942 15.0138 12.7599 14.9218 12.8063 14.7968L14.8125 9.28216L13.6389 6.06162C13.5705 5.89854 13.4598 5.7567 13.3182 5.65081C13.1765 5.54492 13.0092 5.47883 12.8334 5.45938C12.6577 5.43993 12.4799 5.46784 12.3186 5.54021C12.1572 5.61258 12.0182 5.72677 11.9158 5.87097C11.8966 5.89731 11.8186 6.01468 11.785 6.11432L9.77884 11.627L10.9577 14.8605C11.0342 15.0382 11.1611 15.1896 11.3227 15.2961C11.4842 15.4025 11.6735 15.4592 11.8669 15.4593Z",
                  fill: "#6166DC",
                }),
                (0, i.jsx)("path", {
                  d: "M12.2957 5.2232H6.45006C5.99737 5.2232 5.60984 5.50966 5.46373 5.91396L-0.00585938 20.9412H5.88288L11.353 5.91444C11.4239 5.71894 11.5515 5.54899 11.7194 5.42623C11.8872 5.30347 12.0879 5.23346 12.2957 5.22512V5.2232Z",
                  fill: "#6166DC",
                }),
              ],
            }),
          }),
        ac = () =>
          (0, i.jsxs)("svg", {
            viewBox: "0 0 75 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("path", {
                d: "M12.0191 14.2866C12.0191 14.7275 11.9465 15.1058 11.8011 15.4229C11.6558 15.7401 11.4686 16.0134 11.2395 16.2425C10.8785 16.6035 10.4401 16.8615 9.92461 17.015C9.40916 17.169 8.86098 17.246 8.27959 17.246C7.77713 17.246 7.2819 17.1733 6.79291 17.028C6.30393 16.8826 5.86549 16.6338 5.47805 16.2815C5.19602 16.026 4.9626 15.7107 4.77779 15.3368C4.5925 14.9628 4.50009 14.5508 4.50009 14.1018H6.24474C6.24474 14.3314 6.29046 14.5446 6.38334 14.7424C6.47575 14.9407 6.59222 15.1106 6.73372 15.2511C6.93585 15.4547 7.18035 15.588 7.46671 15.6549C7.75307 15.7208 8.03269 15.7536 8.30606 15.7536C8.63189 15.7536 8.94039 15.7165 9.23108 15.6414C9.52178 15.5668 9.7552 15.4369 9.93135 15.2511C10.0372 15.1375 10.1248 15.0162 10.1956 14.8877C10.2663 14.7602 10.301 14.5821 10.301 14.353C10.301 14.0099 10.1893 13.7519 9.96456 13.5801C9.7398 13.4088 9.48231 13.2961 9.19114 13.2432C8.87397 13.1816 8.52601 13.1373 8.14724 13.1113C7.76847 13.0853 7.42484 13.0444 7.11682 12.9915C6.79051 12.9385 6.48441 12.8461 6.19853 12.7143C5.91217 12.5819 5.66094 12.4082 5.44485 12.1921C5.22923 11.9765 5.05742 11.7166 4.92988 11.4124C4.80185 11.1087 4.73784 10.7632 4.73784 10.3752C4.73784 10.0051 4.81292 9.66632 4.9626 9.35781C5.11228 9.04931 5.31057 8.7721 5.55747 8.5252C5.86549 8.2167 6.26206 7.97461 6.74671 7.79846C7.23136 7.62232 7.75114 7.53424 8.30606 7.53424C8.80804 7.53424 9.29028 7.61125 9.75279 7.76526C10.2153 7.91975 10.6056 8.14643 10.9223 8.44579C11.2043 8.71001 11.431 9.00985 11.6028 9.34434C11.7747 9.67931 11.8647 10.0446 11.8738 10.4412H10.1296C10.1205 10.2742 10.0786 10.1086 10.004 9.94594C9.92894 9.78279 9.83413 9.63984 9.72007 9.51616C9.56991 9.35781 9.35862 9.23461 9.08574 9.14605C8.81237 9.05846 8.54815 9.01418 8.29259 9.01418C8.02836 9.01418 7.7574 9.04931 7.48018 9.11958C7.20248 9.19033 6.96666 9.32701 6.77318 9.52963C6.67596 9.63503 6.59896 9.74958 6.54169 9.87327C6.48441 9.99648 6.45602 10.1462 6.45602 10.3223C6.45602 10.6308 6.54409 10.8661 6.72024 11.0293C6.89639 11.1925 7.12548 11.2959 7.40751 11.3397C7.70687 11.3845 8.04376 11.424 8.4182 11.4586C8.79264 11.4942 9.13386 11.5337 9.44237 11.5775C9.79466 11.6304 10.1272 11.7257 10.4401 11.8619C10.7529 11.9986 11.0258 12.1791 11.2597 12.4034C11.4926 12.6286 11.6779 12.8991 11.8146 13.2162C11.9503 13.5334 12.0191 13.89 12.0191 14.2866Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M19.3962 17.0881L18.7359 16.3479C18.3567 16.6829 17.9404 16.9293 17.487 17.0881C17.0332 17.2465 16.5639 17.3259 16.0793 17.3259C15.6654 17.3259 15.2688 17.2599 14.89 17.1276C14.5112 16.9962 14.1811 16.8085 13.8991 16.5659C13.6175 16.3238 13.3927 16.0264 13.2253 15.6741C13.0578 15.3218 12.974 14.9248 12.974 14.4844C12.974 13.903 13.1261 13.4058 13.4303 12.991C13.734 12.5771 14.1373 12.2161 14.6393 11.9076C14.4891 11.7488 14.3529 11.5929 14.2297 11.4379C14.106 11.2843 14.0006 11.1275 13.9125 10.9686C13.824 10.8103 13.7561 10.6428 13.7075 10.4667C13.6594 10.2905 13.6348 10.0922 13.6348 9.87227C13.6348 9.50217 13.7032 9.17153 13.8399 8.88083C13.9761 8.59014 14.1589 8.34132 14.388 8.13437C14.6171 7.92741 14.8881 7.771 15.2009 7.66512C15.5133 7.55972 15.8458 7.50677 16.1986 7.50677C16.5422 7.50677 16.87 7.55731 17.1828 7.65886C17.4957 7.75993 17.771 7.90961 18.0092 8.10789C18.2469 8.30618 18.4361 8.54875 18.5771 8.83463C18.7181 9.12099 18.7889 9.44923 18.7889 9.81933C18.7889 10.1278 18.7446 10.4026 18.656 10.6452C18.5684 10.8873 18.4447 11.1077 18.2864 11.306C18.1281 11.5038 17.9404 11.6867 17.7248 11.8542C17.5087 12.0222 17.2733 12.18 17.0178 12.3297L18.643 14.1008C18.7224 13.9511 18.7773 13.7769 18.8081 13.5786C18.8389 13.3803 18.863 13.1715 18.8808 12.951C18.8986 12.7397 18.9077 12.5328 18.9077 12.3297V11.8027H21.3257V13.1108H20.2423C20.224 13.4809 20.1759 13.8462 20.097 14.2072C20.0176 14.5691 19.8766 14.9031 19.6739 15.2121L21.4046 17.0881H19.3962ZM15.6037 12.9385C15.4454 13.0357 15.3001 13.1286 15.1677 13.2162C15.0358 13.3043 14.9184 13.4063 14.8173 13.5204C14.7163 13.6349 14.6369 13.7644 14.5796 13.9102C14.5223 14.056 14.4939 14.225 14.4939 14.4194C14.4939 14.6572 14.5401 14.8685 14.6325 15.0537C14.7254 15.2386 14.8486 15.3926 15.0026 15.5163C15.1566 15.6395 15.3347 15.7314 15.5378 15.7935C15.7404 15.8551 15.9517 15.8854 16.1721 15.8854C16.4537 15.8854 16.7357 15.8459 17.0178 15.7665C17.2998 15.6871 17.5419 15.5336 17.7445 15.304L15.6037 12.9385ZM17.2425 9.88623C17.2425 9.5604 17.1434 9.30917 16.9451 9.13302C16.7473 8.95687 16.498 8.8688 16.1986 8.8688C15.9257 8.8688 15.6832 8.95014 15.4719 9.11329C15.2606 9.27644 15.1547 9.52094 15.1547 9.84676C15.1547 9.99644 15.1831 10.1375 15.2404 10.2693C15.2977 10.4017 15.3679 10.5273 15.4521 10.6462C15.5354 10.765 15.6302 10.8767 15.7361 10.9831C15.8415 11.0885 15.9431 11.19 16.0403 11.2868C16.1808 11.2078 16.3237 11.126 16.4696 11.0423C16.6144 10.959 16.7444 10.8642 16.8589 10.7578C16.9735 10.6519 17.0659 10.5287 17.1366 10.3877C17.2074 10.2477 17.2425 10.0802 17.2425 9.88623Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M29.6282 10.7055C29.6282 11.155 29.5579 11.5641 29.4169 11.9347C29.2759 12.3048 29.0665 12.622 28.7888 12.8862C28.5116 13.1504 28.1661 13.3559 27.7517 13.5008C27.3378 13.6461 26.8618 13.7188 26.3247 13.7188H24.3428V17.0753H22.6511V7.70618H26.3247C26.8618 7.70618 27.3378 7.77885 27.7517 7.9242C28.1661 8.06954 28.5116 8.27216 28.7888 8.53206C29.0665 8.79195 29.2759 9.1067 29.4169 9.47681C29.5579 9.84691 29.6282 10.2565 29.6282 10.7055ZM27.911 10.719C27.911 10.2695 27.7786 9.90419 27.5144 9.62216C27.2502 9.34061 26.8315 9.19959 26.2592 9.19959H24.3432V12.2254H26.2592C26.8315 12.2254 27.2502 12.0868 27.5144 11.8091C27.7781 11.5319 27.911 11.1685 27.911 10.719Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M39.6712 17.0749L39.4729 16.0435C39.4026 16.1759 39.2967 16.3145 39.1562 16.4598C39.0147 16.6052 38.8414 16.7356 38.634 16.8501C38.4266 16.9647 38.1955 17.0595 37.9405 17.1346C37.6854 17.2087 37.4115 17.2462 37.1213 17.2462C36.5751 17.2462 36.0659 17.1716 35.5952 17.0215C35.1235 16.8718 34.7029 16.5989 34.3333 16.2023C34.0864 15.9473 33.8857 15.6782 33.7321 15.3962C33.5777 15.1142 33.4544 14.8148 33.362 14.4976C33.2692 14.1805 33.2056 13.8479 33.17 13.5004C33.1349 13.152 33.1176 12.7848 33.1176 12.3964C33.1176 12.0186 33.1325 11.6552 33.1638 11.3063C33.1946 10.9583 33.2542 10.6306 33.3418 10.3221C33.4299 10.0135 33.5536 9.71852 33.7119 9.43649C33.8708 9.15494 34.0772 8.88591 34.3333 8.63035C34.6942 8.26939 35.1235 7.99602 35.6212 7.81121C36.1188 7.62591 36.6194 7.53351 37.1213 7.53351C37.7027 7.53351 38.2312 7.63073 38.7071 7.8242C39.1827 8.01816 39.5792 8.27805 39.8964 8.60388C40.126 8.84211 40.319 9.11259 40.4778 9.41676C40.6361 9.72045 40.729 10.08 40.755 10.4939H39.0108C38.993 10.3086 38.9449 10.1502 38.8655 10.0179C38.7861 9.88601 38.6985 9.75847 38.6013 9.63478C38.275 9.25601 37.7773 9.06639 37.1074 9.06639C36.8345 9.06639 36.5568 9.12174 36.2752 9.23195C35.9932 9.34216 35.7598 9.4981 35.575 9.70072C35.4161 9.8682 35.2886 10.0622 35.1914 10.2821C35.0947 10.5025 35.0196 10.734 34.9671 10.9761C34.9142 11.2187 34.881 11.4627 34.868 11.7091C34.8545 11.956 34.8482 12.1846 34.8482 12.3959C34.8482 12.6077 34.8564 12.8392 34.8742 13.0899C34.892 13.3411 34.9272 13.5899 34.9801 13.8364C35.0331 14.0837 35.1076 14.3186 35.2049 14.5438C35.3016 14.7686 35.4291 14.9645 35.588 15.132C35.7728 15.3346 36.0043 15.4838 36.282 15.581C36.5592 15.6782 36.8345 15.7268 37.1074 15.7268C37.4164 15.7268 37.6868 15.6782 37.9203 15.581C38.1532 15.4843 38.3496 15.3524 38.5084 15.1854C38.7639 14.9207 38.929 14.6411 39.0041 14.346C39.0787 14.051 39.1158 13.7228 39.1158 13.3618H36.8826V11.9478H40.7675V17.0749H39.6712Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M44.9026 17.0616C44.7347 17.0963 44.6134 17.1213 44.5393 17.1338C44.4647 17.1473 44.3434 17.1535 44.1759 17.1535C43.6118 17.1535 43.1585 17.0082 42.8148 16.7175C42.4712 16.4268 42.2994 15.9556 42.2994 15.3035V7.52069H43.9646V15.0268C43.9646 15.2294 44.0041 15.3901 44.0835 15.509C44.1629 15.6279 44.3434 15.6875 44.6254 15.6875C44.6957 15.6875 44.7486 15.6851 44.7837 15.6808C44.8189 15.6765 44.8583 15.6736 44.9026 15.6736V17.0616Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M51.9143 13.6395C51.9143 14.2209 51.8435 14.7079 51.703 15.0997C51.562 15.4915 51.3637 15.851 51.1081 16.1763C50.8709 16.467 50.5421 16.7178 50.1239 16.9295C49.7052 17.1403 49.2316 17.2467 48.7032 17.2467C48.1747 17.2467 47.7011 17.1403 47.2834 16.9295C46.8647 16.7178 46.536 16.467 46.2987 16.1763C46.0431 15.8505 45.8448 15.4915 45.7038 15.0997C45.5633 14.7079 45.4925 14.2209 45.4925 13.6395C45.4925 13.0581 45.5633 12.571 45.7038 12.1793C45.8448 11.7875 46.0431 11.428 46.2987 11.1022C46.536 10.8115 46.8647 10.5607 47.2834 10.349C47.7011 10.1377 48.1747 10.0318 48.7032 10.0318C49.2316 10.0318 49.7052 10.1377 50.1239 10.349C50.5421 10.5607 50.8709 10.8115 51.1081 11.1022C51.3637 11.4285 51.562 11.7875 51.703 12.1793C51.8431 12.571 51.9143 13.0581 51.9143 13.6395ZM50.2356 13.6395C50.2356 13.3137 50.2048 12.9984 50.1432 12.6947C50.0811 12.3901 49.9497 12.1283 49.7471 11.9078C49.6325 11.7846 49.4872 11.6811 49.311 11.5974C49.1349 11.5137 48.9323 11.4718 48.7027 11.4718C48.4736 11.4718 48.2715 11.5137 48.0948 11.5974C47.9182 11.6811 47.7729 11.7846 47.6588 11.9078C47.4562 12.1283 47.3243 12.3901 47.2627 12.6947C47.2011 12.9984 47.1703 13.3137 47.1703 13.6395C47.1703 13.9653 47.2011 14.2805 47.2627 14.5842C47.3243 14.8884 47.4562 15.1507 47.6588 15.3706C47.7729 15.4939 47.9187 15.5973 48.0948 15.6816C48.271 15.7653 48.4736 15.8072 48.7027 15.8072C48.9323 15.8072 49.1344 15.7653 49.311 15.6816C49.4872 15.5973 49.6325 15.4939 49.7471 15.3706C49.9497 15.1507 50.0811 14.8884 50.1432 14.5842C50.2048 14.2805 50.2356 13.9653 50.2356 13.6395Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M59.5363 13.652C59.5363 14.3037 59.4347 14.8832 59.2317 15.3895C59.029 15.8962 58.721 16.3169 58.3066 16.6519C58.0958 16.8275 57.8513 16.9685 57.5741 17.0744C57.2964 17.1803 56.9855 17.2328 56.6419 17.2328C56.2631 17.2328 55.8973 17.1606 55.5455 17.0152C55.1932 16.8694 54.915 16.6384 54.7129 16.3212L54.607 17.0744H53.1805V7.53351H54.8318V10.7052C54.9906 10.5117 55.2264 10.3509 55.5388 10.2229C55.8516 10.0954 56.215 10.0314 56.6294 10.0314C56.9812 10.0314 57.2969 10.08 57.5746 10.1767C57.8518 10.2734 58.0963 10.4101 58.3071 10.5863C59.1263 11.2649 59.5363 12.2866 59.5363 13.652ZM57.8576 13.626C57.8576 13.3267 57.8282 13.0312 57.7714 12.74C57.7142 12.4493 57.5977 12.1899 57.4211 11.9613C57.2974 11.8107 57.1453 11.6836 56.9653 11.5772C56.7843 11.4718 56.5668 11.4194 56.3112 11.4194C55.9854 11.4194 55.7207 11.4877 55.5186 11.6239C55.316 11.7606 55.1571 11.9363 55.0435 12.1528C54.929 12.3685 54.8515 12.6067 54.812 12.8661C54.7726 13.126 54.7528 13.3791 54.7528 13.626C54.7528 13.9605 54.7923 14.3018 54.8717 14.6502C54.9507 14.9982 55.1095 15.2821 55.3472 15.5026C55.4613 15.6084 55.598 15.6927 55.7573 15.7538C55.9156 15.8154 56.1004 15.8457 56.3117 15.8457C56.5673 15.8457 56.7848 15.7933 56.9658 15.6869C57.1458 15.5815 57.2979 15.4539 57.4216 15.3038C57.5977 15.0747 57.7142 14.8129 57.7719 14.5174C57.8287 14.2224 57.8576 13.9259 57.8576 13.626Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M66.8697 16.9959C66.7287 17.058 66.6074 17.1042 66.5063 17.1345C66.4053 17.1653 66.2537 17.1812 66.051 17.1812C65.6896 17.1812 65.4124 17.084 65.2184 16.8905C65.0245 16.6975 64.9147 16.4723 64.8883 16.2172C64.7295 16.4993 64.4652 16.7413 64.0951 16.944C63.725 17.1466 63.2938 17.2476 62.801 17.2476C62.3866 17.2476 62.0251 17.1884 61.7166 17.0696C61.4081 16.9507 61.1506 16.7919 60.9437 16.5936C60.7372 16.3953 60.5803 16.1667 60.4749 15.9068C60.369 15.6469 60.3166 15.3759 60.3166 15.0944C60.3166 14.7681 60.3758 14.4779 60.4947 14.2218C60.6131 13.9663 60.7791 13.7458 60.9899 13.561C61.2012 13.3762 61.4481 13.2328 61.7301 13.1317C62.0117 13.0302 62.3153 12.9657 62.6421 12.9397L64.6635 12.7944V12.3708C64.6635 12.045 64.5865 11.7822 64.4325 11.5844C64.2785 11.3861 63.9681 11.287 63.5003 11.287C63.1128 11.287 62.8115 11.3712 62.5955 11.5377C62.3798 11.7057 62.2634 11.9478 62.2451 12.2649H60.6463C60.6727 11.877 60.7627 11.5421 60.9172 11.2605C61.0708 10.9785 61.2763 10.7475 61.5309 10.567C61.7864 10.3865 62.0819 10.2522 62.4164 10.1642C62.7514 10.0761 63.1123 10.0318 63.4998 10.0318C64.0908 10.0318 64.6168 10.1353 65.0793 10.3422C65.5414 10.5497 65.8744 10.913 66.0766 11.4323C66.1646 11.6528 66.22 11.8818 66.2421 12.1196C66.2638 12.3573 66.2753 12.5913 66.2753 12.8199V15.3706C66.2753 15.529 66.3037 15.6416 66.361 15.7075C66.4183 15.7735 66.5174 15.8067 66.6584 15.8067C66.7287 15.8067 66.7773 15.8024 66.8038 15.7932C66.8307 15.7932 66.8524 15.7889 66.8697 15.7807V16.9959ZM64.663 14.0226L62.9189 14.1545C62.6638 14.1723 62.4342 14.256 62.2316 14.4052C62.0285 14.5558 61.9274 14.7715 61.9274 15.0535C61.9274 15.3177 62.0266 15.5266 62.2249 15.6811C62.4232 15.8356 62.6498 15.9116 62.9054 15.9116C63.4252 15.9116 63.8482 15.7778 64.174 15.5088C64.4999 15.2402 64.663 14.8504 64.663 14.3393V14.0226Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M70.5 17.0616C70.3325 17.0963 70.2113 17.1213 70.1367 17.1338C70.0616 17.1473 69.9403 17.1535 69.7733 17.1535C69.2092 17.1535 68.7559 17.0082 68.4122 16.7175C68.0686 16.4268 67.8968 15.9556 67.8968 15.3035V7.52069H69.5615V15.0268C69.5615 15.2294 69.6015 15.3901 69.6809 15.509C69.7603 15.6279 69.9403 15.6875 70.2223 15.6875C70.2931 15.6875 70.3455 15.6851 70.3812 15.6808C70.4163 15.6765 70.4557 15.6736 70.5 15.6736V17.0616Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M70.5 3H4.5V4.52085H70.5V3Z",
                fill: "#6166DC",
              }),
            ],
          }),
        ag = () =>
          (0, i.jsx)("svg", {
            viewBox: "0 0 75 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M13.4451 15.4396H20.0336V13.701H15.4354V11.5735H19.2443V9.8349H15.4354V7.86752H20.0565V6.12891H13.4451V15.4396ZM27.9603 11.9853L23.6481 6.12891H20.6741L21.6006 7.30705V15.4625H23.5909V9.35449L28.0518 15.4396H29.9505V6.12891H27.9603V11.9853ZM10.4369 10.647C11.3062 10.4754 12.0382 9.66333 12.0382 8.5195C12.0268 7.28417 11.1346 6.12891 9.33882 6.12891H3.5625L4.45468 7.27273V15.4396H9.53327C11.3291 15.4396 12.2556 14.3187 12.2556 12.9118C12.2327 11.768 11.4435 10.7843 10.4369 10.647ZM6.45638 7.87896H8.94991C9.62477 7.87896 10.048 8.26786 10.048 8.86265C10.048 9.446 9.62477 9.84634 8.94991 9.84634H6.45638V7.87896ZM9.04142 13.7125H6.46781V11.5735H9.04142C9.79635 11.5735 10.2196 12.0539 10.2196 12.6373C10.2196 13.3121 9.77347 13.701 9.04142 13.7125ZM59.0838 11.9853H60.1246V13.0834C59.587 13.5295 58.9122 13.7697 58.2145 13.7811C56.5559 13.7811 55.3778 12.5229 55.3778 10.8072C55.3778 9.10285 56.5559 7.83321 58.2145 7.83321C59.0838 7.84464 59.8844 8.2793 60.342 9.01134L61.909 8.14204C61.2341 7.07828 60.056 6.12891 58.1801 6.12891C55.5493 6.12891 53.3532 7.94759 53.3532 10.7843C53.3532 13.621 55.515 15.4396 58.1801 15.4396C59.6328 15.4625 61.0283 14.8449 61.9891 13.7582V10.3153H57.7455L59.0838 11.9853ZM50.1162 11.9853L45.7925 6.12891H42.8186L43.7451 7.30705V15.4625H45.7353V9.35449L50.1962 15.4396H52.1064V6.12891H50.1162V11.9853ZM68.5889 6.12891H64.7457L65.6722 7.30705L65.5006 7.75314L62.5267 15.4625H64.7686L65.3519 13.8955H69.3667L69.9501 15.4625H72.192L68.5889 6.12891ZM65.8781 12.134L67.3307 8.11916L68.7834 12.134H65.8781ZM39.6845 6.12891H41.6747V15.4625H39.6845V6.12891ZM38.0831 7.73026V6.12891H31.0715V7.86752H35.4752L31.0715 13.8383V15.4396H38.1632V13.701H33.6451L38.0831 7.73026Z",
              fill: "#6166DC",
            }),
          }),
        ah = () =>
          (0, i.jsxs)("svg", {
            viewBox: "0 0 83 21",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.25 4.1752C0.25 2.80829 1.3581 1.7002 2.725 1.7002H17.575C18.9419 1.7002 20.05 2.80829 20.05 4.1752V16.8252C20.05 18.1921 18.9419 19.3002 17.575 19.3002H2.725C1.3581 19.3002 0.25 18.1921 0.25 16.8252V4.1752ZM13.45 8.36603L10.1402 5.00031L6.85004 8.32533L8.49497 11.3692L10.1239 16.5503L12.8581 9.12862L13.45 8.36603ZM10.3519 12.2089L12.0404 10.1175L10.3519 14.7007L10.3519 12.2089ZM8.91969 11.3044L10.2617 5.73456L12.8797 8.3971L9.92759 12.054L9.92729 14.5082L8.91969 11.3044ZM7.37607 8.40249L9.76339 5.98975L8.62544 10.7143L7.37607 8.40249Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M28.7511 15.6259V13.3709L28.6631 12.5789H28.7511C28.8977 12.8209 29.1196 13.0226 29.4166 13.1839C29.7136 13.3453 30.0527 13.4259 30.4341 13.4259C30.9401 13.4259 31.4002 13.2994 31.8146 13.0464C32.2289 12.7934 32.5534 12.4414 32.7881 11.9904C33.0227 11.5394 33.1401 11.0243 33.1401 10.4449C33.1401 9.87294 33.0227 9.3596 32.7881 8.90494C32.5534 8.45027 32.2289 8.09644 31.8146 7.84344C31.4002 7.59044 30.9401 7.46394 30.4341 7.46394C30.0527 7.46394 29.7154 7.54644 29.4221 7.71144C29.1287 7.87644 28.9051 8.07994 28.7511 8.32194H28.6631V7.63994H27.3101V15.6259H28.7511ZM30.1811 12.0949C29.9171 12.0949 29.6677 12.0253 29.4331 11.8859C29.1984 11.7466 29.0114 11.5523 28.8721 11.3029C28.7327 11.0536 28.6631 10.7676 28.6631 10.4449C28.6631 10.1223 28.7327 9.83627 28.8721 9.58694C29.0114 9.3376 29.1984 9.1451 29.4331 9.00944C29.6677 8.87377 29.9171 8.80594 30.1811 8.80594C30.4524 8.80594 30.7054 8.87377 30.9401 9.00944C31.1747 9.1451 31.3617 9.3376 31.5011 9.58694C31.6404 9.83627 31.7101 10.1223 31.7101 10.4449C31.7101 10.7676 31.6404 11.0536 31.5011 11.3029C31.3617 11.5523 31.1747 11.7466 30.9401 11.8859C30.7054 12.0253 30.4524 12.0949 30.1811 12.0949ZM36.9351 13.4259C37.5071 13.4259 38.0204 13.2958 38.4751 13.0354C38.9297 12.7751 39.2836 12.4194 39.5366 11.9684C39.7896 11.5174 39.9161 11.0096 39.9161 10.4449C39.9161 9.8876 39.7896 9.3816 39.5366 8.92694C39.2836 8.47227 38.9297 8.11477 38.4751 7.85444C38.0204 7.5941 37.5071 7.46394 36.9351 7.46394C36.3557 7.46394 35.8387 7.5941 35.3841 7.85444C34.9294 8.11477 34.5756 8.47227 34.3226 8.92694C34.0696 9.3816 33.9431 9.8876 33.9431 10.4449C33.9431 11.0096 34.0696 11.5174 34.3226 11.9684C34.5756 12.4194 34.9294 12.7751 35.3841 13.0354C35.8387 13.2958 36.3557 13.4259 36.9351 13.4259ZM36.9351 12.0949C36.6564 12.0949 36.3997 12.0289 36.1651 11.8969C35.9304 11.7649 35.7416 11.5724 35.5986 11.3194C35.4556 11.0664 35.3841 10.7749 35.3841 10.4449C35.3841 10.1149 35.4556 9.82527 35.5986 9.57594C35.7416 9.3266 35.9304 9.13594 36.1651 9.00394C36.3997 8.87194 36.6564 8.80594 36.9351 8.80594C37.2137 8.80594 37.4704 8.87194 37.7051 9.00394C37.9397 9.13594 38.1267 9.3266 38.2661 9.57594C38.4054 9.82527 38.4751 10.1149 38.4751 10.4449C38.4751 10.7823 38.4054 11.0756 38.2661 11.3249C38.1267 11.5743 37.9397 11.7649 37.7051 11.8969C37.4704 12.0289 37.2137 12.0949 36.9351 12.0949ZM42.4571 13.2499V5.37394H41.0161V13.2499H42.4571ZM45.9771 15.6259L49.4421 7.63994H47.8361L46.4391 11.1269H46.3511L44.8991 7.63994H43.2601L45.6251 12.9859L44.4261 15.6259H45.9771ZM52.8191 15.8019C53.3984 15.8019 53.9044 15.6828 54.3371 15.4444C54.7697 15.2061 55.1034 14.8669 55.3381 14.4269C55.5727 13.9869 55.6901 13.4663 55.6901 12.8649V7.63994H54.3041V8.23394H54.2161C54.0401 7.9846 53.8091 7.79394 53.5231 7.66194C53.2371 7.52994 52.9107 7.46394 52.5441 7.46394C52.0821 7.46394 51.6512 7.5831 51.2516 7.82144C50.8519 8.05977 50.5311 8.3971 50.2891 8.83344C50.0471 9.26977 49.9261 9.7776 49.9261 10.3569C49.9261 10.9363 50.0471 11.4441 50.2891 11.8804C50.5311 12.3168 50.8519 12.6541 51.2516 12.8924C51.6512 13.1308 52.0821 13.2499 52.5441 13.2499C52.9107 13.2499 53.2371 13.1839 53.5231 13.0519C53.8091 12.9199 54.0401 12.7293 54.2161 12.4799H54.3041V12.9199C54.3041 13.4333 54.1702 13.8293 53.9026 14.1079C53.6349 14.3866 53.2737 14.5259 52.8191 14.5259C52.5111 14.5259 52.2361 14.4453 51.9941 14.2839C51.7521 14.1226 51.5724 13.9026 51.4551 13.6239L50.1021 14.1739C50.2634 14.6213 50.5787 15.0044 51.0481 15.3234C51.5174 15.6424 52.1077 15.8019 52.8191 15.8019ZM52.8411 11.9409C52.4304 11.9409 52.0821 11.8016 51.7961 11.5229C51.5101 11.2443 51.3671 10.8556 51.3671 10.3569C51.3671 9.85827 51.5101 9.4696 51.7961 9.19094C52.0821 8.91227 52.4304 8.77294 52.8411 8.77294C53.2517 8.77294 53.5982 8.91044 53.8806 9.18544C54.1629 9.46044 54.3041 9.85094 54.3041 10.3569C54.3041 10.8483 54.1611 11.2351 53.8751 11.5174C53.5891 11.7998 53.2444 11.9409 52.8411 11.9409ZM59.7821 13.4259C60.3541 13.4259 60.8674 13.2958 61.3221 13.0354C61.7767 12.7751 62.1306 12.4194 62.3836 11.9684C62.6366 11.5174 62.7631 11.0096 62.7631 10.4449C62.7631 9.8876 62.6366 9.3816 62.3836 8.92694C62.1306 8.47227 61.7767 8.11477 61.3221 7.85444C60.8674 7.5941 60.3541 7.46394 59.7821 7.46394C59.2027 7.46394 58.6857 7.5941 58.2311 7.85444C57.7764 8.11477 57.4226 8.47227 57.1696 8.92694C56.9166 9.3816 56.7901 9.8876 56.7901 10.4449C56.7901 11.0096 56.9166 11.5174 57.1696 11.9684C57.4226 12.4194 57.7764 12.7751 58.2311 13.0354C58.6857 13.2958 59.2027 13.4259 59.7821 13.4259ZM59.7821 12.0949C59.5034 12.0949 59.2467 12.0289 59.0121 11.8969C58.7774 11.7649 58.5886 11.5724 58.4456 11.3194C58.3026 11.0664 58.2311 10.7749 58.2311 10.4449C58.2311 10.1149 58.3026 9.82527 58.4456 9.57594C58.5886 9.3266 58.7774 9.13594 59.0121 9.00394C59.2467 8.87194 59.5034 8.80594 59.7821 8.80594C60.0607 8.80594 60.3174 8.87194 60.5521 9.00394C60.7867 9.13594 60.9737 9.3266 61.1131 9.57594C61.2524 9.82527 61.3221 10.1149 61.3221 10.4449C61.3221 10.7823 61.2524 11.0756 61.1131 11.3249C60.9737 11.5743 60.7867 11.7649 60.5521 11.8969C60.3174 12.0289 60.0607 12.0949 59.7821 12.0949ZM65.3041 13.2499V10.3899C65.3041 9.93527 65.4232 9.5576 65.6616 9.25694C65.8999 8.95627 66.2134 8.80594 66.6021 8.80594C66.9321 8.80594 67.1887 8.90494 67.3721 9.10294C67.5554 9.30094 67.6471 9.5796 67.6471 9.93894V13.2499H69.0881V9.76294C69.0881 9.0516 68.9121 8.4906 68.5601 8.07994C68.2081 7.66927 67.6947 7.46394 67.0201 7.46394C66.6607 7.46394 66.3271 7.54277 66.0191 7.70044C65.7111 7.8581 65.4727 8.0726 65.3041 8.34394H65.2161V7.63994H63.8631V13.2499H65.3041Z",
                fill: "#6166DC",
              }),
              (0, i.jsx)("path", {
                d: "M71.3211 13.316C71.5851 13.316 71.8106 13.2225 71.9976 13.0355C72.1846 12.8485 72.2781 12.623 72.2781 12.359C72.2781 12.095 72.1846 11.8714 71.9976 11.688C71.8106 11.5047 71.5851 11.413 71.3211 11.413C71.0571 11.413 70.8316 11.5047 70.6446 11.688C70.4576 11.8714 70.3641 12.095 70.3641 12.359C70.3641 12.623 70.4576 12.8485 70.6446 13.0355C70.8316 13.2225 71.0571 13.316 71.3211 13.316ZM74.4121 7.02404C74.6687 7.02404 74.8869 6.93237 75.0666 6.74904C75.2462 6.56571 75.3361 6.34571 75.3361 6.08904C75.3361 5.83237 75.2462 5.61421 75.0666 5.43454C74.8869 5.25487 74.6687 5.16504 74.4121 5.16504C74.1554 5.16504 73.9354 5.25487 73.7521 5.43454C73.5687 5.61421 73.4771 5.83237 73.4771 6.08904C73.4771 6.34571 73.5687 6.56571 73.7521 6.74904C73.9354 6.93237 74.1554 7.02404 74.4121 7.02404ZM75.1271 13.25V7.64004H73.6861V13.25H75.1271ZM79.3181 13.426C79.8901 13.426 80.4034 13.2959 80.8581 13.0355C81.3127 12.7752 81.6666 12.4195 81.9196 11.9685C82.1726 11.5175 82.2991 11.0097 82.2991 10.445C82.2991 9.88771 82.1726 9.38171 81.9196 8.92704C81.6666 8.47237 81.3127 8.11487 80.8581 7.85454C80.4034 7.59421 79.8901 7.46404 79.3181 7.46404C78.7387 7.46404 78.2217 7.59421 77.7671 7.85454C77.3124 8.11487 76.9586 8.47237 76.7056 8.92704C76.4526 9.38171 76.3261 9.88771 76.3261 10.445C76.3261 11.0097 76.4526 11.5175 76.7056 11.9685C76.9586 12.4195 77.3124 12.7752 77.7671 13.0355C78.2217 13.2959 78.7387 13.426 79.3181 13.426ZM79.3181 12.095C79.0394 12.095 78.7827 12.029 78.5481 11.897C78.3134 11.765 78.1246 11.5725 77.9816 11.3195C77.8386 11.0665 77.7671 10.775 77.7671 10.445C77.7671 10.115 77.8386 9.82537 77.9816 9.57604C78.1246 9.32671 78.3134 9.13604 78.5481 9.00404C78.7827 8.87204 79.0394 8.80604 79.3181 8.80604C79.5967 8.80604 79.8534 8.87204 80.0881 9.00404C80.3227 9.13604 80.5097 9.32671 80.6491 9.57604C80.7884 9.82537 80.8581 10.115 80.8581 10.445C80.8581 10.7824 80.7884 11.0757 80.6491 11.325C80.5097 11.5744 80.3227 11.765 80.0881 11.897C79.8534 12.029 79.5967 12.095 79.3181 12.095Z",
                fill: "#6166DC",
              }),
            ],
          });
      function ap(A) {
        let { width: t, height: e } = A,
          [i, a] = (0, n.useState)({
            rX: 55,
            tY: 66,
            tZ: 198,
            sX: 0.8615,
            sY: 0.746,
            adjustedTop: 24,
            adjustedTopDesign: 28,
          });
        return (
          (0, n.useEffect)(() => {
            let A = 18,
              i = 28,
              n = 56.5,
              s = 62,
              o = 190,
              r = 0.825,
              l = 0.765;
            t >= 960 &&
              ((A = 38),
              (i = 12),
              e >= 750 && ((A = 24), (i = 18)),
              e >= 800 && ((A = 18), (i = 20)),
              e >= 850 && ((A = 14), (i = 24)),
              e >= 900 && ((A = 12), (i = 28)),
              e >= 950 && ((A = 12), (i = 35)),
              e >= 1100 && ((A = 12), (i = 40))),
              t >= 1440 && e <= 780 && ((A = 31), (i = 18)),
              t <= 960 &&
                ((n = 61), (s = 55), (o = 198), (r = 0.835), (l = 0.88)),
              t <= 768 &&
                ((n = 67),
                (s = 38),
                (o = 290),
                (r = 0.772),
                (l = 1),
                (A = 12),
                (i = 13)),
              t <= 540 &&
                ((n = 73.5),
                (s = 29),
                (o = 190),
                (r = 0.82),
                (l = 1),
                (A = 18),
                (i = 10),
                e > 800 && (i = 8)),
              t <= 440 && ((A = 20), (i = 24)),
              t <= 375 &&
                ((n = 74),
                (s = 26),
                (o = 290),
                (r = 0.77),
                (l = 1),
                (A = 30),
                (i = 20),
                e < 700 && ((A = 30), (i = 20))),
              t <= 360 && ((n = 74), (s = 28), (o = 290), (r = 0.81), (l = 1)),
              t <= 320 &&
                ((s = 22.6),
                (n = 74),
                (o = 480),
                (r = 0.78),
                (l = 1),
                (A = 30),
                (i = 16),
                e > 490 && ((A = 30), (i = 22))),
              a({
                rX: n,
                tY: s,
                tZ: o,
                sX: r,
                sY: l,
                adjustedTop: A,
                adjustedTopDesign: i,
              });
          }, [t, e]),
          i
        );
      }
      function ax() {
        let { height: A, width: t } = (0, eL.iP)(),
          {
            rX: e,
            tY: a,
            tZ: s,
            sX: o,
            sY: r,
            adjustedTop: l,
            adjustedTopDesign: d,
          } = ap({ width: t, height: A }),
          [c, g] = (0, n.useState)(1800);
        return (
          (0, n.useEffect)(() => {
            let e = 1800;
            t <= 960 && (e = 2e3),
              t <= 540 && (e = 1500),
              t <= 400 && ((e = 1280), A > 700 && (e = 1430)),
              t <= 320 && (e = 1150),
              A <= 780 && t >= 960 && (e = 1650),
              A >= 1100 && (e = 2050),
              g(e);
          }, [t, A]),
          (0, i.jsx)(ew.Z, {
            cover: !0,
            overflowVisisble: !0,
            height: "".concat(c, "px"),
            render: (c) => {
              let { progress: g } = c,
                h = (0, n.useRef)(null),
                p = (0, n.useRef)(null),
                x = (0, n.useRef)(null),
                m = (0, n.useRef)(null),
                f = (0, n.useRef)(null);
                console.log('progress,444""::',g);
              return (
                (0, n.useEffect)(() => {
                  (() => {
                    if (
                      (g > 0.1 && (p.current.style.animationDuration = "0s"),
                      h.current && x.current && m.current && f.current)
                    ) {
                      let A = t > 768 ? 1.1 : 1,
                      i = (0, eL.uZ)((A - 3 * g) * e, 0, e),
                      n = (0, eL.uZ)((1 - 4 * g) * a, 0, a),
                        d = (0, eL.uZ)((1 - 2 * g) * s, 0, s),
                        c = (0, eL.uZ)(o + 0.14 * g * 4.6, o, 1),
                        p = (0, eL.uZ)(r + 0.25 * g * 4, r, 1),
                        u = (0, eL.uZ)((1 - g) * l, 0, l);
                      (h.current.style.transform = "translateY(".concat(
                        u,
                        // t > 960 ? u-l+1 : -1*u+1,
                        "vh)"
                      )),
                        t > 768 &&
                          ((x.current.style.transform = "translate3d(0px, -"
                            .concat(n + 14, "px, ")
                            .concat(d, "px) rotateX(-")
                            .concat(i, "deg) scale3d(0.86, 0.66, 1)")),
                          (x.current.style.opacity = g > 0 ? "0.7" : "0")),
                        (m.current.style.opacity = g > 0.35 ? "1" : "0"),
                        (f.current.style.transform = "translate3d(0px, -"
                          .concat(n, "px, ")
                          .concat(d, "px) rotateX(-")
                          .concat(i, "deg) scale3d(")
                          .concat(c, ", ")
                          .concat(p, ", 1)"));
                    }
                  })();
                }, [t, A, g, l, d, h, x, m, f, e, a, o, r]),
                (0, i.jsx)(ab, {
                  "aria-hidden": "true",
                  ref: p,
                  tabIndex: -1,
                  children: (0, i.jsxs)(aw, {
                    ref: h,
                    children: [
                      (0, i.jsx)(aO, { ref: x, hideOnMobile: !0 }),
                      (0, i.jsx)(aO, {
                        ref: m,
                        style: {
                          top: "1px",
                          boxShadow: "0 -30px 40px 0px #0B0B0F",
                        },
                      }),
                      (0, i.jsx)(ak, {
                        ref: f,
                        children: (0, i.jsxs)(nV.Z, {
                          style: { width: "100%", height: "100%" },
                          children: [
                            (0, i.jsx)(nR, { progress: g }),
                            (0, i.jsx)(nP, { progress: g }),
                          ],
                        }),
                      }),
                    ],
                  }),
                })
              );
            },
            notSticky: (A) => {
              let { progress: e } = A,
                a = (0, n.useRef)(null);
              return (
                (0, n.useEffect)(() => {
                  (() => {
                    let A = t > 768 ? 0.33 : 0.3;
                    (a.current.style.opacity = "".concat((e - A) * 6)),
                      e > 0.1 && (a.current.style.animationDuration = "0s");
                  })();
                }, [e, a, t]),
                (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)("div", {
                    style: { position: "relative", zIndex: e < 0.1 ? 1 : 0 },
                    children: (0, i.jsx)(au, {
                      children: (0, i.jsx)(aC, {
                        children: (0, i.jsxs)("div", {
                          ref: a,
                          style: {
                            position: "relative",
                            top: "-".concat(d, "vh"),
                          },
                          children: [
                            (0, i.jsx)(V.Z.h2, {
                              style: { whiteSpace: "nowrap" },
                              children: "See the big picture.",
                            }),
                            (0, i.jsx)(F.Z.regular, {
                              children:
                                "Fey offers a streamlined view of real-time market data, effortlessly giving you the big picture on your favorite companies.",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                })
              );
            },
          })
        );
      }
      let am = p.ZP.div.withConfig({ componentId: "sc-773c9270-12" })(
          [
            "top:-18vh;position:relative;",
            "{top:-24vh;margin-bottom:-4vh;}",
            "{top:-28vh;margin-bottom:-12vh;}",
            "{top:-33vh;margin-bottom:-18vh;}@media (max-height:700px){top:-30vh;}@media (max-height:760px) and (min-width:960px){top:-14vh;padding-bottom:4vh;}@media screen and (min-height:950px){top:-21vh;margin-bottom:-6vh;}@media screen and (min-height:1050px){top:-26vh;margin-bottom:-10vh;}",
          ],
          I.mq.desktopSmall,
          I.mq.tablet,
          I.mq.phablet
        ),
        af = p.ZP.section.withConfig({ componentId: "sc-773c9270-13" })(
          ["background:", ";"],
          (A) => A.theme.colors.ui.black
        ),
        au = p.ZP.div.withConfig({ componentId: "sc-773c9270-14" })([
          "display:flex;align-items:center;justify-content:center;",
        ]),
        aE = p.ZP.div.withConfig({ componentId: "sc-773c9270-15" })(
          [
            "position:relative;width:100%;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;p{max-width:480px;margin:0 auto;}h2:first-of-type{",
            "{display:none;}}h2:last-of-type{display:none;",
            "{display:block;}}",
          ],
          I.mq.tablet,
          I.mq.tablet
        ),
        aC = p.ZP.div.withConfig({ componentId: "sc-773c9270-16" })(
          [
            "position:relative;max-width:458px;text-align:center;opacity:0;animation:fadein 3.6s 1.2s forwards;top:8vh;h2{margin-bottom:16px;}",
            "{top:0;padding:0 18px;}",
            "{top:8vh;}",
          ],
          I.mq.tablet,
          I.mq.phoneSmall
        ),
        ab = p.ZP.div.withConfig({ componentId: "sc-773c9270-17" })(
          [
            "position:relative;pointer-events:none;width:100%;will-change:transform;",
            "{max-width:335px;}",
          ],
          I.mq.phablet
        ),
        aw = p.ZP.div.withConfig({ componentId: "sc-773c9270-18" })([
          "position:relative;transform-origin:50% 50%;transform-style:preserve-3d;perspective:2000px;",
        ]),
        aB = (0, p.ZP)(V.Z.h1).withConfig({ componentId: "sc-773c9270-19" })(
          [
            "max-width:593px;margin-bottom:21px;",
            "{max-width:512px;}",
            "{max-width:320px;margin-bottom:45px;span{display:block;}}",
          ],
          I.mq.tablet,
          I.mq.phablet
        ),
        aQ = p.ZP.div.withConfig({ componentId: "sc-773c9270-20" })([
          "opacity:0;pointer-events:none;",
        ]),
        ay = p.ZP.div.withConfig({ componentId: "sc-773c9270-21" })(
          [
            "position:absolute;left:0;right:0;max-width:760px;margin:0 auto;height:100vh;display:flex;align-items:center;justify-content:center;pointer-events:none;will-change:transform;",
            "{max-width:660px;}",
            "{max-width:487px;}",
            "{max-width:335px;}",
          ],
          I.mq.desktopSmall,
          I.mq.tablet,
          I.mq.phablet
        ),
        aI = p.ZP.div.withConfig({ componentId: "sc-773c9270-22" })([
          "position:relative;width:760px;display:flex;img{width:100%;height:100%;}",
        ]),
        av = (0, p.ZP)(H.Z).withConfig({ componentId: "sc-773c9270-23" })(
          ["mask-image:url(", ");mask-size:760px 410px;", "{mask-size:100%;}"],
          "/dd/marketing/_next/static/media/macbook-mask.88a7ca93.png",
          I.mq.desktopSmall
        ),
        aj = (0, p.ZP)(H.Z).withConfig({ componentId: "sc-773c9270-24" })(
          [
            "position:absolute;mask-image:url(",
            ");mask-size:760px 410px;",
            "{mask-size:100%;}",
          ],
          "/dd/marketing/_next/static/media/screen-mask.925d359b.png",
          I.mq.desktopSmall
        ),
        az = p.ZP.div.withConfig({ componentId: "sc-773c9270-25" })(
          [
            "position:absolute;top:0;left:-3px;width:100%;height:100%;",
            "{left:-2px;}",
            "{left:-1px;}",
          ],
          I.mq.tablet,
          I.mq.phablet
        ),
        aD = p.ZP.div.withConfig({ componentId: "sc-773c9270-26" })([
          "position:absolute;top:0;left:0;width:100%;opacity:0;animation:fadein 2s 2s forwards;",
        ]),
        aO = p.ZP.div.withConfig({ componentId: "sc-773c9270-27" })(
          [
            "position:absolute;left:0;top:0;right:0;height:100%;width:100%;max-width:750px;margin:0 auto;z-index:1;transition:opacity 0.2s;box-shadow:0 0 30px ",
            ";",
            "{max-width:666px;max-height:357px;}",
            "{max-width:487px;height:304.54px;",
            "}",
            "{max-width:335px;height:208px;}",
          ],
          (A) => A.theme.colors.ui.black,
          I.mq.desktopSmall,
          I.mq.tablet,
          (A) => A.hideOnMobile && "display: none;",
          I.mq.phablet
        ),
        ak = p.ZP.div.withConfig({ componentId: "sc-773c9270-28" })(
          [
            "position:relative;width:100%;max-width:750px;background:#000;display:flex;justify-content:center;align-items:center;z-index:1;margin:0 auto;z-index:10;border-radius:11px;will-change:transform;",
            "{max-width:640px;overflow:visible;}",
            "{max-width:487px;height:304.54px;}",
            "{max-width:335px;height:auto;}",
          ],
          I.mq.desktopSmall,
          I.mq.tablet,
          I.mq.phablet
        ),
        aM = p.ZP.div.withConfig({ componentId: "sc-773c9270-29" })(
          [
            "max-width:446px;text-align:center;margin:32px auto 0;color:",
            ";",
            "{max-width:330px;}",
          ],
          (A) => A.theme.colors.labels.highlight,
          I.mq.phone
        ),
        aS = p.ZP.div.withConfig({ componentId: "sc-773c9270-30" })([
          "display:flex;justify-content:space-between;align-items:center;width:100%;margin:45px auto;overflow:hidden;",
        ]),
        aZ = p.ZP.div.withConfig({ componentId: "sc-773c9270-31" })(
          [
            "opacity:0;min-width:75px;&:last-of-type{min-width:84px;}",
            "{min-width:64px;&:last-of-type{min-width:71px;}}",
            "{min-width:56px;&:last-of-type{min-width:61px;}}",
          ],
          I.mq.tablet,
          I.mq.phone
        ),
        aR = (0, p.ZP)(aZ).withConfig({ componentId: "sc-773c9270-32" })(
          [
            "transform:translateX(3px) scale(0.98);transition:transform 0.6s cubic-bezier(0.25,0.4,0.4,1) ",
            ",opacity 0.6s ",
            ";",
          ],
          (A) => A.delay,
          (A) => A.delay
        );
      (0, p.ZP)(aZ).withConfig({ componentId: "sc-773c9270-33" })(
        ["transition:opacity 0.6s ", ";"],
        (A) => A.delay
      );
      let aU = (0, p.ZP)(aZ).withConfig({ componentId: "sc-773c9270-34" })(
        [
          "transform:translateX(-3px) scale(0.98);transition:transform 0.6s cubic-bezier(0.25,0.4,0.4,1) ",
          ",opacity 0.6s ",
          ";",
        ],
        (A) => A.delay,
        (A) => A.delay
      );
      p.ZP.div.withConfig({ componentId: "sc-773c9270-35" })(
        [
          "transform:translateX(-3px) scale(0.98);opacity:0;transition:transform 0.6s cubic-bezier(0.25,0.4,0.4,1) ",
          ",opacity 0.6s ",
          ";",
        ],
        (A) => A.delay,
        (A) => A.delay
      ),
        p.ZP.div.withConfig({ componentId: "sc-773c9270-36" })(
          [
            "transform:translateY(-9px) scale(0.98);opacity:0;transition:transform 0.6s cubic-bezier(0.25,0.4,0.4,1) ",
            ",opacity 0.6s ",
            ";",
          ],
          (A) => A.delay,
          (A) => A.delay
        );
      var a5 = !0;
      function a2(A) {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(o.Z, {
              title: "Fey: Finance is finally effortless.",
              pathname: "/",
              image: r.Z.src,
            }),
            (0, i.jsx)(ar, {}),
          ],
        });
      }
    },
  },
  function (A) {
    A.O(
      0,
      [655, 792, 357, 786, 624, 154, 707, 94, 525, 701, 572, 888, 774, 179],
      function () {
        return A((A.s = 87314));
      }
    ),
      (_N_E = A.O());
  },
]);
