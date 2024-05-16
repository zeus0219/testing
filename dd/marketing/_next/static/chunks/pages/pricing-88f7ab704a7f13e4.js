"use strict";

(self.webpackChunk_N_E_ = self.webpackChunk_N_E_ || []).push([[939], {
  20726: function (A, t, e) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/pricing", function () {
      return e(58213);
    }]);
  },
  30458: function (A, t, e) {
    "use strict";

    var i = e(19453);
    let a = (0, i.F4)(["from{opacity:0.2;}to{opacity:1;}"]),
      n = (0, i.F4)(["from{opacity:0;}to{opacity:1;}"]),
      s = i.ZP.div.withConfig({
        componentId: "sc-609e9d63-0"
      })(["opacity:0;animation:", " ", " cubic-bezier(0.25,0.4,0.4,1) ", " forwards;"], A => A.fromZero ? n : a, A => A.duration || "1s", A => A.delay || "0s");
    t.Z = s;
  },
  57306: function (A, t, e) {
    "use strict";

    e.d(t, {
      Z: function () {
        return a;
      }
    });
    var i = e(52322);
    function a(A) {
      return (0, i.jsx)(n, {
        gradient: A.gradient,
        children: A.children
      });
    }
    e(2784);
    let n = e(19453).ZP.span.withConfig({
      componentId: "sc-44f07702-0"
    })(["display:inline-block;background:", ";-webkit-background-clip:text;-webkit-text-fill-color:transparent;"], A => A.gradient ? A.gradient : "linear-gradient(90deg, #B3AEF5 0.41%, #D7CBE7 40.68%, #E5C8C8 64.12%, #EAA879 97.82%), #D9D9D9");
  },
  19016: function (A, t, e) {
    "use strict";

    var i = e(52322);
    e(2784);
    var a = e(19453),
      n = e(33178);
    t.Z = function (A) {
      let {
        appearance: t,
        text: e,
        onClick: a,
        disable: n = !1,
        ...o
      } = A;
      switch (t) {
        case "solid":
          return (0, i.jsx)(g, {
            onClick: a || (() => {}),
            "aria-label": e,
            disabled: n,
            disable: n,
            ...o,
            children: e
          });
        case "outline":
          return (0, i.jsx)(l, {
            onClick: a || (() => {}),
            "aria-label": e,
            disabled: n,
            disable: n,
            ...o,
            children: (0, i.jsx)("span", {
              children: e
            })
          });
        case "gradient":
          return (0, i.jsx)(s, {
            onClick: a || (() => {}),
            "aria-label": e,
            ...o,
            children: (0, i.jsx)("span", {
              children: e
            })
          });
        case "transparent":
          return (0, i.jsx)(r, {
            onClick: a || (() => {}),
            "aria-label": e,
            disabled: n,
            disable: n,
            ...o,
            children: e
          });
        default:
          return null;
      }
    };
    let s = a.ZP.button.withConfig({
        componentId: "sc-411481a2-0"
      })(["display:flex;flex-direction:row;align-items:center;padding:8px 17px 8px 12px;gap:8px;background:rgba(255,255,255,0.08);background:linear-gradient(#141414,#141414) padding-box,linear-gradient(to bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.2)) border-box;border-radius:50px;border:0.5px solid transparent;height:32px;min-width:136px;font-weight:600;font-size:14px;line-height:17px;text-align:center;color:#ffffff;"]),
      o = a.ZP.button.withConfig({
        componentId: "sc-411481a2-1"
      })(["position:relative;display:flex;align-items:center;padding:4px 33px 5px 33px;border-radius:43px;font-size:16px;font-weight:600;line-height:19px;text-align:center;display:flex;align-items:center;justify-content:center;width:100%;max-width:194px;height:36px;white-space:nowrap;span{position:relative;z-index:1;}", "{font-size:19px;font-weight:600;width:230px;max-width:230px;height:46px;}"], n.mq.tablet),
      r = (0, a.ZP)(o).withConfig({
        componentId: "sc-411481a2-2"
      })(["color:#fff;&:before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;border-radius:43px;background:#fff;opacity:0.05;transition:opacity 0.25s ease;}&:hover::before{opacity:", ";}"], A => A.disable ? 0.05 : 0.08),
      g = (0, a.ZP)(o).withConfig({
        componentId: "sc-411481a2-3"
      })(["background:#fff;color:", ";box-shadow:0px 5px 25px rgba(255,255,255,0.15);opacity:", ";cursor:", ";&::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;border-radius:43px;background:rgba(0,0,0,0.16);opacity:0;transition:opacity 0.25s ease;}&:hover::before{opacity:", ";}"], A => A.theme.colors.ui.medium, A => A.disable ? 0.24 : 1, A => A.disable ? "initial" : "pointer", A => A.disable ? 0 : 1),
      l = (0, a.ZP)(o).withConfig({
        componentId: "sc-411481a2-4"
      })(["background:transparent;color:#fff;border:1px solid #fff;box-shadow:0px 5px 25px rgba(255,255,255,0.1);transition:color 0.2s ease;backdrop-filter:blur(2px);", "{box-shadow:0px 2px 10px rgba(255,255,255,0.1);}svg path{fill:#fff;transition:fill 0.3s ease;}span{position:relative;z-index:1;}&::before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;border-radius:43px;opacity:0.05;background:#fff;transition:opacity 0.2s ease;}&:hover{color:", ";svg path{fill:", ";transition:fill 0.3s ease;}}&:hover::before{opacity:", ";}"], n.mq.tablet, A => A.theme.colors.ui.black, A => A.theme.colors.ui.black, A => A.disable ? 0.05 : 1);
  },
  33429: function (A, t, e) {
    "use strict";

    var i = e(52322),
      a = e(5632),
      n = e(2784),
      s = e(19453),
      o = e(76972),
      r = e(85273),
      g = e(33178),
      l = e(9271),
      d = e(3756);
    let c = [{
      text: "About the team",
      href: "https://narative.co/about"
    }, {
      text: "Why we built this",
      href: "https://www.narative.co/articles/the-ultimate-investing-experience"
    }, {
      text: "Follow us on Twitter",
      href: "https://twitter.com/narative"
    }];
    function h(A) {
      let [t, e] = (0, n.useState)(!1),
        s = (0, a.useRouter)(),
        o = (0, r.q_)({
          height: t ? 216 : 50,
          config: {
            tension: 1e3,
            friction: 100
          }
        });
      return (0, i.jsx)(m, {
        children: (0, i.jsxs)(E, {
          children: [(0, i.jsxs)(b, {
            children: ["/" !== s.pathname && (0, i.jsx)(B, {
              href: "/",
              children: (0, i.jsx)(f, {
                children: "Home"
              })
            }), "/pricing" !== s.pathname && (0, i.jsx)(B, {
              href: "/pricing",
              children: (0, i.jsx)(f, {
                children: "Pricing"
              })
            }), "/updates" !== s.pathname && (0, i.jsx)(B, {
              href: "/updates",
              children: (0, i.jsx)(f, {
                children: "Updates"
              })
            }), (0, i.jsx)(B, {
              href: "/privacy",
              children: (0, i.jsx)(f, {
                children: "Privacy Policy"
              })
            }), (0, i.jsx)(B, {
              href: "/terms",
              children: (0, i.jsx)(f, {
                children: "Terms of Service"
              })
            }), (0, i.jsxs)(w, {
              style: o,
              children: [(0, i.jsxs)(Q, {
                onClick: () => e(A => !A),
                children: [(0, i.jsx)(f, {
                  children: "Narative Studio"
                }), (0, i.jsx)(v, {
                  onClick: () => {},
                  isExpanded: t,
                  theme: A.theme,
                  clear: !0
                })]
              }), (0, i.jsx)(u, {
                children: c.map((A, e) => (0, i.jsx)(p, {
                  style: {
                    opacity: t ? 1 : 0,
                    transitionDelay: "".concat(30 * e, "ms")
                  },
                  children: (0, i.jsx)(O, {
                    href: A.href,
                    target: "_blank",
                    rel: "noopener",
                    children: A.text
                  })
                }, A.href))
              })]
            })]
          }), (0, i.jsx)(C, {
            children: (0, i.jsxs)(k, {
              children: ["\xa9 ", new Date().getFullYear(), ", Fey Labs Inc."]
            })
          })]
        })
      });
    }
    t.Z = function (A) {
      let t = (0, a.useRouter)(),
        e = {
          light: {
            text: "#000",
            background: "#D8D7D8",
            linkBackground: "rgba(134, 143, 151, 0.14)",
            divider: "rgba(0,0,0,0.28)"
          },
          dark: {
            text: o.r.colors.ui.light,
            background: o.r.colors.ui.black,
            linkBackground: "rgba(255, 255, 255, 0.02)",
            divider: "rgba(255, 255, 255, 0.1)"
          },
          transparent: {
            text: o.r.colors.ui.light,
            background: "transparent",
            linkBackground: "rgba(255, 255, 255, 0.02)",
            divider: "rgba(255, 255, 255, 0.1)"
          }
        };
      return (0, i.jsxs)(s.f6, {
        theme: e[A.theme || "dark"],
        children: [(0, i.jsx)(x, {
          children: (0, i.jsxs)(D, {
            children: [(0, i.jsxs)(k, {
              children: ["\xa9 ", new Date().getFullYear(), ", Fey Labs Inc."]
            }), (0, i.jsxs)(z, {
              children: ["/" !== t.pathname && (0, i.jsx)(I, {
                href: "/",
                children: "Home"
              }), "/pricing" !== t.pathname && (0, i.jsx)(I, {
                href: "/pricing",
                children: "Pricing"
              }), "/Updates" !== t.pathname && (0, i.jsx)(I, {
                href: "/updates",
                children: "Updates"
              }), "/download" !== t.pathname && (0, i.jsx)(I, {
                href: "/download",
                children: "Download"
              }), (0, i.jsx)(I, {
                href: "/privacy",
                children: "Privacy"
              }), (0, i.jsx)(I, {
                href: "/terms",
                children: "Terms"
              })]
            })]
          })
        }), (0, i.jsx)(h, {
          ...A
        })]
      });
    };
    let p = s.ZP.li.withConfig({
        componentId: "sc-3b89ed56-0"
      })(["list-style:none;color:", ";transition:opacity 0.4s;transition:color 0.2s ease;"], A => A.theme.text),
      x = s.ZP.footer.withConfig({
        componentId: "sc-3b89ed56-1"
      })(["width:100%;z-index:100;padding:42px;background:", ";transition:background 1s ease;", "{display:none;}"], A => A.theme.background, g.mq.desktopSmall),
      m = s.ZP.footer.withConfig({
        componentId: "sc-3b89ed56-2"
      })(["width:100%;padding:50px 20px 42px;background:", ";transition:background 0.25s ease;", "{display:none;}"], A => A.theme.background, g.mq.desktopSmallUp),
      E = s.ZP.div.withConfig({
        componentId: "sc-3b89ed56-3"
      })(["max-width:487px;margin:0 auto;"]),
      b = s.ZP.div.withConfig({
        componentId: "sc-3b89ed56-4"
      })(["display:grid;grid-template-columns:1fr;row-gap:8px;width:100%;background:", ";transition:background 0.25s ease;margin-bottom:42px;"], A => A.theme.background),
      u = s.ZP.ul.withConfig({
        componentId: "sc-3b89ed56-5"
      })(["display:grid;grid-template-columns:1fr;row-gap:21px;padding:36px 0 20px;"]),
      B = (0, s.ZP)(d.Z).withConfig({
        componentId: "sc-3b89ed56-6"
      })(["display:flex;align-items:center;padding:14px 20px;width:100%;color:", ";border-radius:5px;background:", ";transition:color 0.2s ease,background 0.25s ease;"], A => A.theme.text, A => A.theme.linkBackground),
      f = s.ZP.span.withConfig({
        componentId: "sc-3b89ed56-7"
      })(["opacity:0.75;"]),
      w = (0, s.ZP)(r.q.div).withConfig({
        componentId: "sc-3b89ed56-8"
      })(["padding:14px 20px;display:inline-block;width:100%;color:", ";border-radius:5px;background:", ";transition:color 0.2s ease,background 0.25s ease;overflow:hidden;"], A => A.theme.text, A => A.theme.linkBackground),
      Q = s.ZP.div.withConfig({
        componentId: "sc-3b89ed56-9"
      })(["display:flex;justify-content:space-between;align-items:center;"]),
      C = s.ZP.div.withConfig({
        componentId: "sc-3b89ed56-10"
      })(["display:flex;justify-content:space-between;padding-right:14px;svg{opacity:0.5;}"]),
      D = (0, s.ZP)(l.Z).withConfig({
        componentId: "sc-3b89ed56-11"
      })(["display:flex;align-items:center;justify-content:space-between;"]),
      z = s.ZP.div.withConfig({
        componentId: "sc-3b89ed56-12"
      })(["display:flex;align-items:center;opacity:0.75;color:", ";transition:color 0.2s ease;"], A => A.theme.text),
      I = (0, s.ZP)(d.Z).withConfig({
        componentId: "sc-3b89ed56-13"
      })(["display:flex;align-items:center;color:", ";transition:color 0.2s ease;line-height:132%;opacity:0.75;transition:opacity 0.25s ease;&:hover{opacity:1;}&:not(:last-child){margin-right:32px;}", "{font-size:18px;&:not(:last-child){margin-right:0;margin-bottom:42px;}}"], A => A.theme.text, g.mq.tablet),
      O = s.ZP.a.withConfig({
        componentId: "sc-3b89ed56-14"
      })(["display:flex;align-items:center;color:", ";transition:color 0.2s ease;line-height:132%;opacity:0.75;transition:opacity 0.25s ease;&:hover{opacity:1;}&:not(:last-child){margin-right:32px;}", "{font-size:18px;&:not(:last-child){margin-right:0;margin-bottom:42px;}}"], A => A.theme.text, g.mq.tablet),
      k = s.ZP.span.withConfig({
        componentId: "sc-3b89ed56-15"
      })(["display:flex;align-items:center;color:", ";line-height:132%;opacity:0.5;", "{font-size:18px;width:100%;justify-content:space-between;}"], A => A.theme.text, g.mq.tablet);
    function v(A) {
      return (0, i.jsxs)(U, {
        light: "light" === A.theme,
        clear: A.clear,
        disabled: A.disabled,
        onClick: A.onClick ? A.onClick : () => {},
        "aria-label": "Toggle more or less links",
        children: [(0, i.jsx)(j, {
          style: {
            transform: "translateY(".concat(A.isExpanded ? "6px" : "0", ")")
          },
          children: (0, i.jsx)(M, {})
        }), (0, i.jsx)(j, {
          style: {
            transform: "translateY(".concat(A.isExpanded ? "-6px" : "0", ")")
          },
          children: (0, i.jsx)(y, {})
        })]
      });
    }
    let U = s.ZP.button.withConfig({
        componentId: "sc-3b89ed56-16"
      })(["position:relative;background:", ";border-radius:50%;width:24px;height:24px;min-width:24px;min-height:24px;position:relative;transition:background 0.25s ease;cursor:", ";opacity:", ";&:hover{background:", ";}svg path{fill:", ";}"], A => A.clear ? "transparent" : A.light ? "rgba(0,0,0,0.05)" : "rgba(255, 255, 255, 0.03)", A => A.disabled ? "default" : "pointer", A => A.disabled ? "0.5" : "1", A => A.light ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.06)", A => A.light ? "#000" : "#fff"),
      j = s.ZP.div.withConfig({
        componentId: "sc-3b89ed56-17"
      })(["position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;transition:transform 0.25s ease;"]),
      y = A => {
        let {
          size: t = 24
        } = A;
        return (0, i.jsx)("svg", {
          width: t,
          height: t,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.73399 13.0012C8.95743 12.7786 9.31971 12.7786 9.54315 13.0012L11.9994 15.4479L14.4556 13.0012C14.6791 12.7786 15.0414 12.7786 15.2648 13.0012C15.4882 13.2237 15.4882 13.5846 15.2648 13.8072L12.404 16.657C12.2967 16.7639 12.1511 16.8239 11.9994 16.8239C11.8476 16.8239 11.7021 16.7639 11.5948 16.657L8.73399 13.8072C8.51055 13.5846 8.51055 13.2237 8.73399 13.0012Z",
            fill: "white"
          })
        });
      },
      M = A => {
        let {
          size: t = 24
        } = A;
        return (0, i.jsx)("svg", {
          width: t,
          height: t,
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.265 11.0861C15.0416 11.3139 14.6793 11.3139 14.4559 11.0861L11.9996 8.58248L9.54338 11.0861C9.31994 11.3139 8.95766 11.3139 8.73422 11.0861C8.51078 10.8584 8.51078 10.4891 8.73422 10.2614L11.595 7.3453C11.7023 7.23593 11.8479 7.17448 11.9996 7.17448C12.1514 7.17448 12.2969 7.23593 12.4042 7.3453L15.265 10.2614C15.4885 10.4891 15.4885 10.8584 15.265 11.0861Z",
            fill: "white"
          })
        });
      };
  },
  92502: function (A, t, e) {
    "use strict";

    var i = e(19453),
      a = e(33178);
    let n = i.ZP.h1.withConfig({
        componentId: "sc-3bc7f5d9-0"
      })(["font-weight:600;font-size:54px;line-height:1.1;color:#fff;margin-bottom:16px;@media (max-height:780px) and (max-width:1440px){line-height:100%;font-size:42px;}", "{line-height:100%;font-size:42px;}", "{font-size:36px;}"], a.mq.tablet, a.mq.phablet),
      s = i.ZP.h2.withConfig({
        componentId: "sc-3bc7f5d9-1"
      })(["font-weight:600;font-size:48px;line-height:110%;color:#fff;margin-bottom:16px;transition:color 1s;@media (max-height:780px) and (max-width:1440px){line-height:100%;font-size:42px;margin-bottom:20px;}", "{line-height:100%;font-size:42px;margin-bottom:22px;}", "{font-size:36px;margin-bottom:18px;}"], a.mq.desktopMedium, a.mq.phone),
      o = i.ZP.h3.withConfig({
        componentId: "sc-3bc7f5d9-2"
      })(["font-weight:600;font-size:22px;line-height:110%;color:#fff;margin-bottom:16px;"]),
      r = i.ZP.h4.withConfig({
        componentId: "sc-3bc7f5d9-3"
      })(["font-weight:600;font-size:18px;line-height:110%;color:#fff;margin-bottom:16px;"]);
    t.Z = {
      h1: n,
      h2: s,
      h3: o,
      h4: r
    };
  },
  37373: function (A, t, e) {
    "use strict";

    var i = e(52322),
      a = e(2784),
      n = e(19453);
    t.Z = a.forwardRef(function (A, t) {
      let {
        src: e,
        srcMedium: a,
        srcLarge: n,
        alt: o,
        loading: r,
        ...g
      } = A;
      if (!(null == e ? void 0 : e.src)) return (0, i.jsx)(s, {
        src: e,
        alt: o,
        ref: t,
        loading: r || "eager",
        ...g
      });
      let l = (null == e ? void 0 : e.src) ? "".concat(e.src, " 1x,") : "",
        d = (null == a ? void 0 : a.src) ? "".concat(a.src, " 1.5x,") : "",
        c = (null == n ? void 0 : n.src) ? "".concat(n.src, " 2x,") : "",
        h = (null == n ? void 0 : n.src) || (null == a ? void 0 : a.src) || (null == e ? void 0 : e.src);
      return (0, i.jsx)(s, {
        srcSet: "".concat(l).concat(d).concat(c),
        src: h,
        alt: o,
        ref: t,
        width: null == e ? void 0 : e.width,
        height: null == e ? void 0 : e.height,
        loading: r || "eager",
        ...g
      });
    });
    let s = n.ZP.img.withConfig({
      componentId: "sc-5b600b70-0"
    })(["width:100%;"]);
  },
  56956: function (A, t, e) {
    "use strict";

    var i = e(52322),
      a = e(24993),
      n = e.n(a),
      s = e(2784),
      o = e(20360),
      r = e(19453),
      g = e(33178),
      l = e(75512);
    t.Z = function (A) {
      let {
          cover: t,
          height: e,
          innherHeight: a,
          render: r,
          notSticky: g,
          top: p,
          overflowVisisble: x
        } = A,
        [m, E] = (0, o.YD)(),
        [b, u] = (0, s.useState)(0),
        B = (0, s.useRef)();
      return (0, s.useEffect)(() => {
        function A() {
          let A = B.current;
          if (A) {
            let t = window.pageYOffset || window.scrollY,
              e = (0, l.oJ)(A),
              i = A.getBoundingClientRect().height,
              a = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
              n = (0, l.uZ)((t - e) / (i - a) || 0, 0, 1);
            requestAnimationFrame(() => u(Number(n.toPrecision(2))));
          }
        }
        if (E) return A(), window.addEventListener("scroll", A), window.addEventListener("resize", A), () => {
          window.removeEventListener("scroll", A), window.removeEventListener("resize", A);
        };
      }, [B, E]), (0, i.jsx)("div", {
        ref: B,
        "data-component": "sticky",
        children: (0, i.jsx)(d, {
          height: e,
          ref: m,
          children: (0, i.jsxs)(c, {
            children: [(0, i.jsx)(h, {
              top: p,
              cover: t,
              overflowVisisble: x,
              style: E && a ? {
                height: n()()
              } : {},
              children: r && r({
                progress: b
              })
            }), g && g({
              progress: b
            })]
          })
        })
      });
    };
    let d = r.ZP.div.withConfig({
        componentId: "sc-818cefdc-0"
      })(["height:", ";position:relative;"], A => A.height || "100vh"),
      c = r.ZP.div.withConfig({
        componentId: "sc-818cefdc-1"
      })(["height:100%;"]),
      h = r.ZP.div.withConfig({
        componentId: "sc-818cefdc-2"
      })(["position:sticky;top:", "px;min-height:initial;height:", ";display:flex;align-items:center;justify-content:center;overflow-x:hidden;width:100%;z-index:1;", ";", "{", "}"], A => A.top || 0, A => A.cover ? "100vh" : "initial", A => A.cover && "overflow-y: hidden;", g.mq.phablet, A => A.overflowVisisble && "overflow: visible;");
  },
  58168: function (A, t, e) {
    "use strict";

    var i = e(19453),
      a = e(33178);
    let n = i.ZP.p.withConfig({
        componentId: "sc-1578630c-0"
      })(["font-weight:normal;font-size:18px;line-height:132%;", "{font-size:18px;}", "{font-size:16px;}"], a.mq.desktopMedium, a.mq.phone),
      s = i.ZP.p.withConfig({
        componentId: "sc-1578630c-1"
      })(["font-style:normal;font-weight:600;font-size:22px;line-height:110%;@media (max-height:780px) and (max-width:1440px){line-height:130%;font-size:19px;}", "{line-height:130%;font-size:19px;}", "{font-size:16px;}"], a.mq.desktopMedium, a.mq.phoneSmall);
    t.Z = {
      regular: n,
      semibold: s
    };
  },
  58213: function (A, t, e) {
    "use strict";

    e.r(t), e.d(t, {
      default: function () {
        return tB;
      }
    });
    var i = e(52322),
      a = e(2784),
      n = e(19453),
      s = e(33178),
      o = e(33429),
      r = e(24152),
      g = e(1470),
      l = e(30458),
      d = e(57306),
      c = e(9271),
      h = e(92502),
      p = e(37373),
      x = e(56956),
      m = {
        src: "/dd/marketing/_next/static/media/hero-30-mobile_1x.848cff10.png",
        height: 370,
        width: 375,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXEUExQLDAwnJycSExQgJyceHh4NDQ0ZGRcQEBcEBAQMDAwXFxcfHx/h7O8lAAAADnRSTlMArLUGMg0TfkAlw3ebybemyfUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVHicRcu3AYBADATB1cm9Ef23SwaTD3wq8EhI0+1nwPeYYYuKe+RalNR9BsiA7X9+AR99AN4HmimfAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8
      },
      E = {
        src: "/dd/marketing/_next/static/media/hero-30-mobile_2x.0feb458a.png",
        height: 740,
        width: 750,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXElLikgICANDQwTExMSFBQKCwweHiMZGRcaGhoQEBMEBAQIBwcfHx9iblkPAAAADnRSTlMACwN7rzK2E0CkJcOQyeSEgukAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA2SURBVHicRcs7FoAgFMTQzLwPArr/7XpoNNVtAl+j7BIoM+KZRuvOJC9GxW4fdEfsCajw0j+/HkMA10VaaJAAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8
      },
      b = {
        src: "/dd/marketing/_next/static/media/hero-30-mobile_4x.ce87ac89.png",
        height: 1480,
        width: 1500,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXEhJiYtLTwTExIaGRkMDQ8FBQYLCwsZGhsbGxsTExMiIi4TExMICAcFNuhFAAAADnRSTlMACgOxOSm2facTyRZ3kYl/dqoAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAzSURBVHicRcu3AYBAEASx2fNv6L9dMlAu+KwwC4HGb+8xlI+7ebCyq+TBqereAyix1J9fH3gA2gIhQO0AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8
      },
      u = {
        src: "/dd/marketing/_next/static/media/hero-30-tablet_1x.d6870526.png",
        height: 507,
        width: 736,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAIVBMVEVMaXEVFxgODQ0WGBklJSUPDw8ODg8MDAsFBQUJCQkfHx8XriWKAAAAC3RSTlMAQZZYCil3t12Bi6w+FqsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAkSURBVHicY2CAA2Y2Vi5GEIORiZ2ZiQXC4AAzmNlYOcFSUAAACe0AXYVdvckAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6
      },
      B = {
        src: "/dd/marketing/_next/static/media/hero-30-tablet_2x.e6455341.png",
        height: 1014,
        width: 1472,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEVMaXEPDg0XFxcODg8UFRUPDw8MDAsFBQUSFxsiIh8LDg4XGhoYG/WvAAAADHRSTlMAlUN3him2XzdZWVef2PgCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAI0lEQVR4nGNggANuZlYWJhCDg5GNkxHEYGJkYwczuGBSUAAAClAAXCy4bvMAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6
      },
      f = {
        src: "/dd/marketing/_next/static/media/hero-30-tablet_4x.651e2383.png",
        height: 2028,
        width: 2944,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAIVBMVEVMaXEXGBkPDw4ODg8bHBwPDw8NCwsFBQUHCQkLDg4fHx9x/yY2AAAAC3RSTlMAQZZ2WCq2YIFbiHunHM8AAAAJcEhZcwAALEsAACxLAaU9lqkAAAAjSURBVHicY2CAAxZmVi5GEIORiY2FCcpgBzM4mVk5wFJQAAAIzgBTCliYMgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 6
      },
      w = {
        src: "/dd/marketing/_next/static/media/hero-30_1x.7afce67d.png",
        height: 640,
        width: 1140,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEUUFRVMaXEXFxcJCQkHBwcZGRkHBwsTFxceHh7bhrhSAAAACXRSTlMdAG2mjIpFQQv13AJ6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nGNgZGRgYGBgZGRgZGRnZmUCM9iYWSAMiBQAA5kAMRpyvOYAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 4
      },
      Q = {
        src: "/dd/marketing/_next/static/media/hero-30_2x.5eb5a315.png",
        height: 1280,
        width: 2280,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUUFBVMaXEQEBAXFxcJCQkHBwsXFxceHh6dsMOIAAAACHRSTlMdAIxtpkVBCzhovzoAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAeSURBVHicY2BkZGBgYGBkZGBkZGNhYgYzWGEMiBQAA1wALvbiSpYAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 4
      },
      C = {
        src: "/dd/marketing/_next/static/media/hero-30_4x.8196533f.png",
        height: 2560,
        width: 4560,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAHlBMVEUUFRYAAABMaXEQDw8XFxYJCQkHCwsAAAATFxc/Pz/1DttIAAAACnRSTlMdAQCNbKRFBUEE4dWrjwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAACVJREFUeJxjYGRiYGBgYGJkYGTiYGVmYWdiYGRiY2Vm4QQxIFIABWIATVy3dwkAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 4
      },
      D = {
        src: "/dd/marketing/_next/static/media/hero-bg-mobile_1x.1447926c.jpg",
        height: 370,
        width: 375,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGPB//EABUQAQEAAAAAAAAAAAAAAAAAAAAi/9oACAEBAAEFApf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAXEAADAQAAAAAAAAAAAAAAAAAAETFB/9oACAEBAAE/IY1n/9oADAMBAAIAAwAAABAD/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAQVH/2gAIAQEAAT8QDOUCtn//2Q==",
        blurWidth: 8,
        blurHeight: 8
      },
      z = {
        src: "/dd/marketing/_next/static/media/hero-bg-mobile_2x.7ffaded8.jpg",
        height: 740,
        width: 750,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGOB//EABUQAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEBAAEFAo//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAXEAADAQAAAAAAAAAAAAAAAAAAETFB/9oACAEBAAE/IZ1n/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAQVH/2gAIAQEAAT8QDuUCtn//2Q==",
        blurWidth: 8,
        blurHeight: 8
      },
      I = {
        src: "/dd/marketing/_next/static/media/hero-bg-mobile_4x.3856b95a.jpg",
        height: 1480,
        width: 1500,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGOB//EABUQAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEBAAEFAo//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAXEAADAQAAAAAAAAAAAAAAAAAAETFB/9oACAEBAAE/IZ1n/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAQVH/2gAIAQEAAT8QDuUCtn//2Q==",
        blurWidth: 8,
        blurHeight: 8
      },
      O = {
        src: "/dd/marketing/_next/static/media/hero-bg-tablet_1x.122e0053.jpg",
        height: 507,
        width: 736,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGNB//EABUQAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEBAAEFAo//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAXEAEAAwAAAAAAAAAAAAAAAAARACEx/9oACAEBAAE/IUZc/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAIVH/2gAIAQEAAT8QJFrpz//Z",
        blurWidth: 8,
        blurHeight: 6
      },
      k = {
        src: "/dd/marketing/_next/static/media/hero-bg-tablet_2x.c5abdf55.jpg",
        height: 1014,
        width: 1472,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGNB//EABUQAQEAAAAAAAAAAAAAAAAAABEh/9oACAEBAAEFAof/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAXEAADAQAAAAAAAAAAAAAAAAAAESFB/9oACAEBAAE/IXhT/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAGBAAAgMAAAAAAAAAAAAAAAAAAREAIVH/2gAIAQEAAT8QJErpz//Z",
        blurWidth: 8,
        blurHeight: 6
      },
      v = {
        src: "/dd/marketing/_next/static/media/hero-bg-tablet_4x.1ecac976.jpg",
        height: 2028,
        width: 2944,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGNB//EABQQAQAAAAAAAAAAAAAAAAAAAEH/2gAIAQEAAQUCP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABgQAAIDAAAAAAAAAAAAAAAAAAABESFB/9oACAEBAAE/IZWLP//aAAwDAQACAAMAAAAQ8//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABgQAAIDAAAAAAAAAAAAAAAAAAERACFR/9oACAEBAAE/ECVK6c//2Q==",
        blurWidth: 8,
        blurHeight: 6
      },
      U = {
        src: "/dd/marketing/_next/static/media/hero-bg_1x.6627aae8.jpg",
        height: 640,
        width: 1140,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGNB//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABYQAQEBAAAAAAAAAAAAAAAAABEAIf/aAAgBAQABPyFwv//aAAwDAQACAAMAAAAQA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABkQAAEFAAAAAAAAAAAAAAAAABEAASExcf/aAAgBAQABPxA6mGSv/9k=",
        blurWidth: 8,
        blurHeight: 4
      },
      j = {
        src: "/dd/marketing/_next/static/media/hero-bg_2x.a26fd6cd.jpg",
        height: 1280,
        width: 2280,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGNB//EABQQAQAAAAAAAAAAAAAAAAAAAEH/2gAIAQEAAQUCP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABYQAQEBAAAAAAAAAAAAAAAAABEAMf/aAAgBAQABPyFwX//aAAwDAQACAAMAAAAQA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABgQAAIDAAAAAAAAAAAAAAAAAAARIVFx/9oACAEBAAE/EKDVJ//Z",
        blurWidth: 8,
        blurHeight: 4
      },
      y = {
        src: "/dd/marketing/_next/static/media/hero-bg_4x.caeca940.jpg",
        height: 2560,
        width: 4560,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGNB//EABQQAQAAAAAAAAAAAAAAAAAAAEH/2gAIAQEAAQUCP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABYQAAMAAAAAAAAAAAAAAAAAAAARUf/aAAgBAQABPyFwf//aAAwDAQACAAMAAAAQA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABgQAAIDAAAAAAAAAAAAAAAAAAARIUFx/9oACAEBAAE/EKE1Sf/Z",
        blurWidth: 8,
        blurHeight: 4
      },
      M = {
        src: "/dd/marketing/_next/static/media/hero-dots-mobile_1x.b9c8424e.png",
        height: 370,
        width: 375,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAABlBMVEXQ0NBMaXHyRYbAAAAAAnRSTlMBAG+I/HkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAXSURBVHicY2CEAgZMBgOUCWEwYAUwxQAHNQAqySIXggAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8
      },
      R = {
        src: "/dd/marketing/_next/static/media/hero-dots-mobile_2x.993bca65.png",
        height: 740,
        width: 750,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAABlBMVEXe3t5MaXGXoC7iAAAAAnRSTlMBAG+I/HkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAXSURBVHicY2CEAgZMBgOUCWEwYAUwxQAHNQAqySIXggAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8
      },
      S = {
        src: "/dd/marketing/_next/static/media/hero-dots-mobile_4x.0fd9b3d4.png",
        height: 1480,
        width: 1500,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAABlBMVEXe3t5MaXGXoC7iAAAAAnRSTlMBAG+I/HkAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAXSURBVHicY2CEAgZMBgOUCWYwYAcwxQAHFgApAT6sfwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8
      },
      P = {
        src: "/dd/marketing/_next/static/media/hero-dots-tablet_1x.89d631d4.png",
        height: 507,
        width: 736,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAABlBMVEX///9MaXG/fzaeAAAAAnRSTlMBAG+I/HkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAYSURBVHicY2CEAgYGGA1hgWgGKAUHMMUAA4YAHSTSAeIAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 6
      },
      Z = {
        src: "/dd/marketing/_next/static/media/hero-dots-tablet_2x.7d9a9b23.png",
        height: 1014,
        width: 1472,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAABlBMVEVMaXH///+a4ocPAAAAAnRSTlMAAQGU/a4AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAcSURBVHicY2CAAUY4A8xiZAQzGBnBDDCAK2UAAAHHABPNBSCdAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 6
      },
      H = {
        src: "/dd/marketing/_next/static/media/hero-dots-tablet_4x.99e7fb1f.png",
        height: 2028,
        width: 2944,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAABlBMVEX///9MaXG/fzaeAAAAAnRSTlMBAG+I/HkAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAaSURBVHicY2CEAgYGOAPMYgABKAUFjDAljAADtQAfwnLpmAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 6
      },
      F = {
        src: "/dd/marketing/_next/static/media/hero-dots_1x.bd0d5330.png",
        height: 640,
        width: 1140,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEX///9MaXG/fzaeAAAAAnRSTlMBAG+I/HkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAYSURBVHicY2BgBAMGBgYwC0TDAITDyAgAAUYADjT+WQAAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 4
      },
      L = {
        src: "/dd/marketing/_next/static/media/hero-dots_2x.305d3cf8.png",
        height: 1280,
        width: 2280,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEX///9MaXG/fzaeAAAAAnRSTlMBAG+I/HkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAYSURBVHicY2BgBAMGBgYwC0TDAITDyAgAAUYADjT+WQAAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 4
      },
      J = {
        src: "/dd/marketing/_next/static/media/hero-dots_4x.189f567a.png",
        height: 2560,
        width: 4560,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEX///9MaXG/fzaeAAAAAnRSTlMBAG+I/HkAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAUSURBVHicY2BgYAQBBhCA0aiAEQABAgAKnzzPzwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 4
      },
      G = {
        src: "/dd/marketing/_next/static/media/benzinga.4d073b6d.svg",
        height: 28,
        width: 100,
        blurWidth: 0,
        blurHeight: 0
      },
      Y = {
        src: "/dd/marketing/_next/static/media/nasdaq.dd705cda.svg",
        height: 28,
        width: 100,
        blurWidth: 0,
        blurHeight: 0
      },
      V = {
        src: "/dd/marketing/_next/static/media/polygon.e0644b95.svg",
        height: 28,
        width: 110,
        blurWidth: 0,
        blurHeight: 0
      },
      N = {
        src: "/dd/marketing/_next/static/media/sp_global.ef7400f7.svg",
        height: 28,
        width: 100,
        blurWidth: 0,
        blurHeight: 0
      },
      T = e(75512);
    let _ = () => (0, i.jsx)(Ah, {
        children: (0, i.jsx)(Ap, {
          children: (0, i.jsx)(d.Z, {
            children: "Fey provides premium, ad-free data sourced from industry giants like Nasdaq and S&P Global. We prioritize quality and continually enhance our features with regular updates. Unlike freemium platforms with inaccurate data and sponsored content, or costly institutional platforms, Fey strikes the perfect balance of affordability and excellence."
          })
        })
      }),
      W = () => (0, i.jsxs)(K, {
        children: [(0, i.jsx)(p.Z, {
          src: Y,
          alt: "Nasdaq"
        }), (0, i.jsx)(p.Z, {
          src: N,
          alt: "SP Global"
        }), (0, i.jsx)(p.Z, {
          src: G,
          alt: "Benzinga"
        }), (0, i.jsx)(p.Z, {
          src: V,
          alt: "Polygon"
        })]
      }),
      K = n.ZP.div.withConfig({
        componentId: "sc-75981253-0"
      })(["display:flex;align-items:flex-end;gap:56px;margin:0 auto 120px;width:100%;max-width:945px;padding-top:64px;border-top:1px solid rgba(255,255,255,0.16);position:relative;img{width:min-content;}", "{gap:30px;img{width:auto;height:21px;}}", "{padding-top:29px;gap:30px;img{height:21px;}}", "{gap:24px;padding-top:32px;margin:0 auto 71px;img{height:18.5px;}}"], s.mq.desktopMedium, s.mq.tablet, s.mq.phablet);
    function X() {
      let A = (0, a.useRef)(null),
        t = (0, T.Qj)(A),
        {
          height: e
        } = (0, T.iP)(),
        [n, s] = (0, a.useState)(1280);
      return (0, a.useEffect)(() => {
        let A = 1280;
        e >= 1050 && (A = 1500), e >= 1200 && (A = 1900), e >= 1600 && (A = 2100), s(A);
      }, [e]), (0, i.jsxs)("div", {
        ref: A,
        children: [(0, i.jsx)(x.Z, {
          cover: !0,
          innherHeight: !0,
          height: "".concat(n, "px"),
          render: A => {
            let {
                progress: t
              } = A,
              e = {
                filter: "blur(".concat(20 * t, "px)"),
                opacity: 1 - t,
                willChange: "filter, opacity"
              },
              a = {
                transform: "scale(".concat((0, T.uZ)(1 - 0.3 * t, 0.67, 1), ")"),
                willChange: "transform"
              };
            return (0, i.jsxs)(Ar, {
              children: [(0, i.jsx)(Ac, {
                style: e,
                children: (0, i.jsx)(l.Z, {
                  duration: "4s",
                  delay: "2.2s",
                  fromZero: !0,
                  children: "What it costs."
                })
              }), (0, i.jsxs)(Ag, {
                children: [(0, i.jsxs)(Ae, {
                  children: [(0, i.jsxs)(l.Z, {
                    duration: "3.6s",
                    delay: "0.2s",
                    children: [(0, i.jsx)(p.Z, {
                      src: U,
                      srcMedium: j,
                      srcLarge: y,
                      alt: "Picture of the author",
                      style: e
                    }), (0, i.jsx)(Aa, {
                      src: F,
                      srcMedium: L,
                      srcLarge: J,
                      alt: "Picture of the author",
                      style: {
                        mixBlendMode: "color-dodge",
                        ...e
                      }
                    })]
                  }), (0, i.jsx)(An, {
                    style: a,
                    children: (0, i.jsx)(As, {
                      src: w,
                      srcMedium: Q,
                      srcLarge: C,
                      alt: "Picture of the author"
                    })
                  })]
                }), (0, i.jsxs)(Ai, {
                  children: [(0, i.jsxs)(l.Z, {
                    duration: "3.6s",
                    delay: "0.2s",
                    children: [(0, i.jsx)(p.Z, {
                      src: O,
                      srcMedium: k,
                      srcLarge: v,
                      alt: "Picture of the author",
                      style: e
                    }), (0, i.jsx)(Aa, {
                      src: P,
                      srcMedium: Z,
                      srcLarge: H,
                      alt: "Picture of the author",
                      style: {
                        mixBlendMode: "color-dodge",
                        ...e
                      }
                    })]
                  }), (0, i.jsx)(An, {
                    style: a,
                    children: (0, i.jsx)(As, {
                      src: u,
                      srcMedium: B,
                      srcLarge: f,
                      alt: "Picture of the author"
                    })
                  })]
                }), (0, i.jsxs)(Ao, {
                  children: [(0, i.jsxs)(l.Z, {
                    duration: "3.6s",
                    delay: "0.2s",
                    children: [(0, i.jsx)(p.Z, {
                      src: D,
                      srcMedium: z,
                      srcLarge: I,
                      alt: "Picture of the author",
                      style: e
                    }), (0, i.jsx)(Aa, {
                      src: M,
                      srcMedium: R,
                      srcLarge: S,
                      alt: "Picture of the author",
                      style: {
                        mixBlendMode: "color-dodge",
                        ...e
                      }
                    })]
                  }), (0, i.jsx)(An, {
                    style: a,
                    children: (0, i.jsx)(As, {
                      src: m,
                      srcMedium: E,
                      srcLarge: b,
                      alt: "Picture of the author"
                    })
                  })]
                }), (0, i.jsx)(l.Z, {
                  duration: "4s",
                  delay: "2.2s",
                  fromZero: !0,
                  children: (0, i.jsxs)(Ad, {
                    style: e,
                    children: [(0, i.jsxs)(Al, {
                      children: ["$60", (0, i.jsx)("svg", {
                        width: "36",
                        height: "3",
                        viewBox: "0 0 36 3",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                          d: "M17.8112 0.881592C14.9676 0.920046 12.124 0.968573 9.27901 0.921399C7.78538 0.894997 6.29375 0.82831 4.80035 0.746506C3.53852 0.680782 2.21232 0.30756 0.954231 0.654847C0.925155 0.629543 0.896079 0.604239 0.861532 0.578911C0.759715 0.502937 0.649969 0.578025 0.574517 0.738878C0.452173 0.773621 0.331654 0.808372 0.20931 0.843115C0.0326945 0.771864 -0.0733309 1.265 0.0807024 1.50236C0.289113 1.82054 0.294415 1.86085 0.459982 1.95724C0.504818 2.13874 0.575315 2.29013 0.66621 2.36103C0.666189 2.36606 0.664323 2.37613 0.664302 2.38116C1.85109 2.94519 3.12159 2.68358 4.33085 2.67353C5.82464 2.65964 7.31676 2.61049 8.81064 2.57646C11.8039 2.50841 14.7989 2.43534 17.792 2.39751C20.6319 2.35904 23.4699 2.35078 26.3093 2.42311C29.3348 2.49623 32.3697 2.93201 35.394 2.83387C35.8154 2.82053 35.8323 1.39526 35.4113 1.33809C29.571 0.522894 23.6606 0.805364 17.8112 0.881592Z",
                          fill: "#E6E6E6"
                        })
                      })]
                    }), " ", "$30/mo public launch deal.", " "]
                  })
                })]
              })]
            });
          }
        }), (0, i.jsxs)(AA, {
          style: {
            opacity: Math.pow(2 * t, 12),
            willChange: "opacity"
          },
          children: [(0, i.jsx)(_, {}), (0, i.jsx)(W, {}), (0, i.jsx)(At, {
            style: {
              opacity: 1 - Math.pow(1.3 * t, 14),
              willChange: "opacity"
            }
          })]
        })]
      });
    }
    let q = (0, n.F4)(["0%{transform:scale(0.9) translateY(40px);}100%{transform:scale(1) translateY(0px);}"]),
      $ = (0, n.F4)(["0%{transform:scale(1.07);opacity:0}100%{transform:scale(1);opacity:1}"]),
      AA = (0, n.ZP)(c.Z).withConfig({
        componentId: "sc-75981253-1"
      })(["overflow:hidden;z-index:1;margin-top:-200px;@media (min-height:950px){margin-top:-280px;}@media (min-height:1050px){margin-top:-310px;}@media (min-height:1100px){margin-top:-360px;}@media (min-height:1200px){margin-top:-420px;}@media (min-height:1400px){margin-top:-520px;}", "{margin-top:-310px;}@media (max-height:700px) and (max-width:540px){margin-top:-210px;}"], s.mq.phablet),
      At = n.ZP.div.withConfig({
        componentId: "sc-75981253-2"
      })(["position:fixed;width:100%;height:100%;bottom:-48%;left:0;background:linear-gradient(transparent,#000 50%);pointer-events:none;"]),
      Ae = n.ZP.div.withConfig({
        componentId: "sc-75981253-3"
      })(["", "{display:none;}"], s.mq.tablet),
      Ai = n.ZP.div.withConfig({
        componentId: "sc-75981253-4"
      })(["display:none;", "{display:block;}", "{display:none;}"], s.mq.tablet, s.mq.phablet),
      Aa = (0, n.ZP)(p.Z).withConfig({
        componentId: "sc-75981253-5"
      })(["position:absolute;left:0;top:0;width:100%;height:100%;mix-blend-mode:color-doge;animation:", " 5.8s cubic-bezier(0.45,0,0.55,1);"], q),
      An = n.ZP.div.withConfig({
        componentId: "sc-75981253-6"
      })(["position:absolute;left:0;top:0;width:100%;height:100%;"]),
      As = (0, n.ZP)(p.Z).withConfig({
        componentId: "sc-75981253-7"
      })(["position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;animation:", " 3.2s 1s cubic-bezier(0.45,0,0.55,1) forwards;"], $),
      Ao = n.ZP.div.withConfig({
        componentId: "sc-75981253-8"
      })(["display:none;", "{display:block;}"], s.mq.phablet),
      Ar = n.ZP.div.withConfig({
        componentId: "sc-75981253-9"
      })(["display:flex;flex-direction:column;justify-content:center;max-width:1140px;padding-top:170px;margin:0 auto 120px;", "{max-width:1010px;margin-bottom:100px;}", "{padding:0;margin:0;}"], s.mq.desktopMedium, s.mq.phablet),
      Ag = n.ZP.div.withConfig({
        componentId: "sc-75981253-10"
      })(["position:relative;text-align:center;img{height:auto;}"]),
      Al = n.ZP.span.withConfig({
        componentId: "sc-75981253-11"
      })(["position:relative;color:#52565c;margin-right:5px;& > svg{position:absolute;left:-3.5px;top:12px;}"]),
      Ad = n.ZP.div.withConfig({
        componentId: "sc-75981253-12"
      })(["position:absolute;display:flex;align-items:center;justify-content:center;bottom:76px;left:0;right:0;color:", ";font-size:21px;font-weight:600;z-index:1;", "{font-size:19px;bottom:42px;}", "{font-size:19px;bottom:12px;}", "{position:relative;}"], A => A.theme.colors.ui.light, s.mq.desktopMedium, s.mq.tablet, s.mq.phablet),
      Ac = (0, n.ZP)(h.Z.h1).withConfig({
        componentId: "sc-75981253-13"
      })(["display:flex;justify-content:center;text-shadow:0px 0px 30px rgba(71,159,250,0.3);margin-bottom:-100px;position:relative;z-index:1;", "{margin-bottom:-80px;font-size:42px;}", "{margin-bottom:-65px;}", "{font-size:36px;margin-bottom:-36px;}"], s.mq.desktop, s.mq.tablet, s.mq.phablet),
      Ah = n.ZP.div.withConfig({
        componentId: "sc-75981253-14"
      })(["max-width:944px;margin:0 auto 64px;position:relative;", "{margin-bottom:52px;}", "{margin-bottom:29px;}", "{margin-bottom:31px;}"], s.mq.desktop, s.mq.tablet, s.mq.phablet),
      Ap = n.ZP.div.withConfig({
        componentId: "sc-75981253-15"
      })(["font-weight:600;font-size:42px;line-height:115%;", "{font-size:38px;}", "{font-size:28px;}", "{font-size:24px;}"], s.mq.desktopMedium, s.mq.tablet, s.mq.tablet);
    var Ax = e(58168),
      Am = e(5632),
      AE = e(27895),
      Ab = e(42698),
      Au = e(5901),
      AB = e(874),
      Af = e(64251),
      Aw = e(19016),
      AQ = {
        src: "/dd/marketing/_next/static/media/fey-icon-2023_1x.60098151.png",
        height: 116,
        width: 116,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUVFRwSEhYMDA/Ozs9MaXEUFRpvcHMWFRsNDRIjJCq0tLU7PEItLTETExkcHSQiIiiZmZs6ieG1AAAADXRSTlMYREf+ANz+PP47/v77GLD81gAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJwVxlEWgCAIRcGrgUD1pP2vtuN8DUZVFQbe3e0QW8/SLkJ9fbnj5F6pk3yXFODKlIMxx5jYD02BAf3RxQotAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8
      },
      AC = {
        src: "/dd/marketing/_next/static/media/fey-icon-2023_2x.afdbf58b.png",
        height: 232,
        width: 232,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEUUFhtqam3Ozs+0tLUUFRpMaXEQEBIWFhsODhMkJCo7PEIKCg4sLTETExkgISgbGyGampx7fH+Ma8yAAAAADXRSTlMY/v7+2wBGPP47/kj7xEq5GwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADtJREFUeJwVxskRgDAMALEN+ARsQ//NMtFLKJmZKEh3t4BPXd9M4tXHG+M754raiWdVOUhFhIBymxn6A00/AgZsg0HyAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8
      },
      AD = {
        src: "/dd/marketing/_next/static/media/fey-icon-2023_4x.7c1a5796.png",
        height: 464,
        width: 464,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEUXFxyzs7TJycotLTEVFholJi1wcXQXFx4NDRBMaXE+QEWXmJoVExoQEBUfICYTFBoZGiAKCxCbKmKMAAAADXRSTlM//v7+3EH+GEYA/v5FnW22KwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADxJREFUeJwlxkEOgEAIA8CqsAVNgf3/Z41xToOkuzsTtKoqIzB9rxkAXeejP8fa/WVfSwJokmREMiKC+QJNmQIqA5LTNQAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8
      };
    function Az() {
      return (0, Am.useRouter)(), (0, i.jsxs)(AO, {
        children: [(0, i.jsx)(Ak, {
          src: AQ,
          srcMedium: AC,
          srcLarge: AD,
          alt: "Fey icon"
        }), (0, i.jsx)(h.Z.h1, {
          children: (0, i.jsxs)(d.Z, {
            gradient: "linear-gradient(260.26deg, #B3AEF5 -10.67%, #D7CBE7 33.86%, #E5C8C8 59.77%, #EAA879 97.04%)",
            children: ["Get started", (0, i.jsx)(AI, {
              children: " with Fey"
            }), "."]
          })
        }), (0, i.jsx)(Ax.Z.regular, {
          style: {
            maxWidth: "480px"
          },
          children: "Each subscription goes towards aggressively adding new features built with customers' best interests at heart, including your privacy."
        }), (0, i.jsx)(Au.Z, {
          label: (0, i.jsxs)(i.Fragment, {
            children: ["Start your trial ", (0, i.jsx)(AE.Z, {
              keys: [Ab.J.T],
              theme: "mediumWhite"
            })]
          }),
          children: (0, i.jsx)(Aw.Z, {
            appearance: "outline",
            text: "Try it free",
            onClick: () => window.location.href = "".concat(AB.Z.get("url")).concat(Af._.signup)
          })
        })]
      });
    }
    let AI = n.ZP.span.withConfig({
        componentId: "sc-4c544049-0"
      })(["", "{display:none;}"], s.mq.phablet),
      AO = n.ZP.div.withConfig({
        componentId: "sc-4c544049-1"
      })(["margin:215px 0px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;p{margin-bottom:32px;}", "{margin:128px 0px 117px;p{margin-bottom:28px;}}", "{margin:128px 0px 117px;p{margin-bottom:24px;}}"], s.mq.tablet, s.mq.phablet),
      Ak = (0, n.ZP)(p.Z).withConfig({
        componentId: "sc-4c544049-2"
      })(["width:116px;height:116px;margin-bottom:32px;", "{width:98px;height:98px;margin-bottom:28px;}", "{margin-bottom:30px;width:84px;height:84px;}"], s.mq.desktopSmall, s.mq.phablet);
    var Av = {
        src: "/dd/marketing/_next/static/media/pricing-row-1.3035fa25.svg",
        height: 550,
        width: 360,
        blurWidth: 0,
        blurHeight: 0
      },
      AU = {
        src: "/dd/marketing/_next/static/media/pricing-row-2.41ce3195.svg",
        height: 550,
        width: 360,
        blurWidth: 0,
        blurHeight: 0
      },
      Aj = {
        src: "/dd/marketing/_next/static/media/pricing-row-3.f08f575d.svg",
        height: 550,
        width: 360,
        blurWidth: 0,
        blurHeight: 0
      },
      Ay = e(20360),
      AM = e(51286),
      AR = e(85273);
    let AS = A => new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      }).format(A),
      AP = new Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    function AZ() {
      var A, t, e, a, n, s, o;
      let [r, g] = (0, Ay.YD)({
          threshold: 0.4,
          triggerOnce: !0
        }),
        [l, d] = (0, Ay.YD)(),
        c = {
          opacity: g ? 1 : 0,
          transform: g ? "scale(1)" : "scale(0.92)"
        },
        {
          data: h,
          isLoading: p
        } = (0, AM.ZP)("/marketing/api/pricing", async A => {
          let t = await fetch(A);
          return await t.json();
        }),
        x = (null == h ? void 0 : null === (A = h.ticker) || void 0 === A ? void 0 : A.lastQuote.p) || (null == h ? void 0 : null === (t = h.ticker) || void 0 === t ? void 0 : t.prevDay.c);
      return (0, i.jsxs)(AH, {
        ref: r,
        children: [(0, i.jsx)(AV, {
          style: c
        }), (0, i.jsxs)(AF, {
          children: [(0, i.jsx)("span", {
            children: "Live Pricing."
          }), " Emphasis on live."]
        }), (0, i.jsx)(AY, {}), p ? null : (0, i.jsxs)(AL, {
          ref: l,
          children: [(0, i.jsxs)(AJ, {
            children: [(0, i.jsx)(AT, {
              value: x,
              format: AS
            }), " "]
          }), (null == h ? void 0 : null === (e = h.ticker) || void 0 === e ? void 0 : e.lastQuote.p) !== 0 && (0, i.jsxs)(AG, {
            change: null == h ? void 0 : null === (a = h.ticker) || void 0 === a ? void 0 : a.todaysChange,
            children: [(null == h ? void 0 : null === (n = h.ticker) || void 0 === n ? void 0 : n.todaysChange) >= 0 && "+", (0, i.jsx)(AT, {
              value: null == h ? void 0 : null === (s = h.ticker) || void 0 === s ? void 0 : s.todaysChange,
              format: AS
            }), " (", (0, i.jsx)(AT, {
              value: Math.abs((null == h ? void 0 : null === (o = h.ticker) || void 0 === o ? void 0 : o.todaysChangePerc) / 100),
              format: AP.format
            }), ")"]
          })]
        }), (0, i.jsx)(AN, {
          src: Av,
          alt: "",
          style: c
        }), (0, i.jsx)(AN, {
          src: AU,
          alt: "",
          style: {
            ...c,
            filter: "blur(2px)",
            transitionDelay: "0.6s"
          }
        }), (0, i.jsx)(AN, {
          src: Aj,
          alt: "",
          style: {
            ...c,
            filter: "blur(4px)",
            transitionDelay: "1.2s"
          }
        })]
      });
    }
    let AH = n.ZP.div.withConfig({
        componentId: "sc-1a9832c-0"
      })(["background:linear-gradient(171.85deg,#3c342e 4.44%,#040404 90%);box-shadow:0px 20px 30px rgba(0,0,0,0.1);border-radius:14px;padding:60px 48px 124px;grid-column:auto / span 2;display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:relative;overflow:hidden;", "{padding:55px 20px 80px;justify-content:center;}img{pointer-events:none;transition:opacity 3.2s ease,transform 1.4s ease;}"], s.mq.tablet),
      AF = (0, n.ZP)(h.Z.h3).withConfig({
        componentId: "sc-1a9832c-1"
      })(["font-size:32px;span{color:#c88159;}", "{text-align:center;span{display:block;}}"], s.mq.tablet),
      AL = n.ZP.div.withConfig({
        componentId: "sc-1a9832c-2"
      })(["z-index:1;text-align:center;line-height:1;opacity:0;animation:fadein 0.1s forwards;font-variant-numeric:tabular-nums;letter-spacing:-1px;padding-right:1px;"]),
      AJ = n.ZP.div.withConfig({
        componentId: "sc-1a9832c-3"
      })(["font-size:42px;text-align:center;font-weight:600;margin-bottom:4px;"]),
      AG = n.ZP.div.withConfig({
        componentId: "sc-1a9832c-4"
      })(["font-size:18px;color:", ";"], A => A.change > 0 ? A.theme.colors.labels.positive : A.theme.colors.labels.negative),
      AY = n.ZP.div.withConfig({
        componentId: "sc-1a9832c-5"
      })(["flex-grow:1;"]);
    (0, n.F4)(["0%{opacity:0;transform:scale(0.92);}100%{opacity:1;transform:scale(1);}"]);
    let AV = n.ZP.div.withConfig({
        componentId: "sc-1a9832c-6"
      })(["position:absolute;top:10%;left:0%;width:100%;height:80%;pointer-events:none;background-image:radial-gradient( circle at center,#433e3c 1px,#433e3c 1px,transparent 1px,transparent 100% );background-repeat:repeat;background-position:left center;background-size:8px 8px;mask-image:radial-gradient(ellipse at center,rgba(0,0,0,1),transparent 60%);opacity:0.8;transition:opacity 2s ease,transform 2s ease;"]),
      AN = (0, n.ZP)(p.Z).withConfig({
        componentId: "sc-1a9832c-7"
      })(["position:absolute;left:0;top:-12px;width:100%;height:100%;"]);
    function AT(A) {
      let {
          value: t,
          format: e
        } = A,
        [n, s] = (0, a.useState)(e(null == t ? void 0 : t.toString()));
      return (0, AR.q_)({
        value: null == t ? void 0 : t.toString(),
        config: {
          tension: 80
        },
        onChange(A) {
          let {
            value: t
          } = A;
          s(e(t.value));
        }
      }), (0, i.jsx)(AR.q.span, {
        children: n
      });
    }
    var A_ = {
        src: "/dd/marketing/_next/static/media/analysis-device.375cb6de.svg",
        height: 572,
        width: 750,
        blurWidth: 0,
        blurHeight: 0
      },
      AW = {
        src: "/dd/marketing/_next/static/media/analysis-mobile_1x.d34af721.png",
        height: 437,
        width: 716,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUZGh4LCw2KOA+EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEElEQVR4nGNgZAADRgYiGAABDgALLsgUUgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 5
      },
      AK = {
        src: "/dd/marketing/_next/static/media/analysis-mobile_2x.db29087d.png",
        height: 874,
        width: 1432,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUZGh4LDA3FeZlDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAEElEQVR4nGNgZAADRgYiGAABDgALLsgUUgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 5
      },
      AX = {
        src: "/dd/marketing/_next/static/media/analysis-mobile_4x.07af80f4.png",
        height: 1748,
        width: 2864,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUZGh4LDA3FeZlDAAAACXBIWXMAACxLAAAsSwGlPZapAAAAEElEQVR4nGNgZAADRgYiGAABDgALLsgUUgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 5
      },
      Aq = {
        src: "/dd/marketing/_next/static/media/analysis-screen_1x.a0cba425.jpg",
        height: 572,
        width: 750,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGQB//EABYQAAMAAAAAAAAAAAAAAAAAAAABAv/aAAgBAQABBQJWf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAQADAAAAAAAAAAAAAAAAABEAAYH/2gAIAQEAAT8hAadn/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Qr//EABcQAQEBAQAAAAAAAAAAAAAAAAERAEH/2gAIAQEAAT8QgEQTh3//2Q==",
        blurWidth: 8,
        blurHeight: 6
      },
      A$ = {
        src: "/dd/marketing/_next/static/media/analysis-screen_2x.1e220f89.jpg",
        height: 1144,
        width: 1500,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGQB//EABYQAAMAAAAAAAAAAAAAAAAAAAABAv/aAAgBAQABBQJWf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAQADAAAAAAAAAAAAAAAAABEAAYH/2gAIAQEAAT8hAadn/9oADAMBAAIAAwAAABD7/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Qr//EABcQAQEBAQAAAAAAAAAAAAAAAAERAEH/2gAIAQEAAT8QgEQTh3//2Q==",
        blurWidth: 8,
        blurHeight: 6
      },
      A0 = {
        src: "/dd/marketing/_next/static/media/analysis-screen_4x.a1ceed88.jpg",
        height: 2288,
        width: 3e3,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGQB//EABYQAAMAAAAAAAAAAAAAAAAAAAABAv/aAAgBAQABBQJWf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABcQAQADAAAAAAAAAAAAAAAAABEAAYH/2gAIAQEAAT8hAadn/9oADAMBAAIAAwAAABDz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPxB//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAQABPxCBIkpg/9k=",
        blurWidth: 8,
        blurHeight: 6
      };
    function A1() {
      let A = (0, a.useRef)(null),
        t = (0, T.Qj)(A);
      return (0, i.jsxs)(A2, {
        ref: A,
        children: [(0, i.jsxs)(A5, {
          children: [(0, i.jsx)(p.Z, {
            src: Aq,
            srcMedium: A$,
            srcLarge: A0,
            alt: "Market Analysis"
          }), (0, i.jsx)(p.Z, {
            src: A_,
            alt: ""
          })]
        }), (0, i.jsx)(A8, {
          children: (0, i.jsx)(p.Z, {
            src: AW,
            srcMedium: AK,
            srcLarge: AX,
            alt: "Market Analysis",
            style: {
              transform: "translateY(".concat(-36 * t, "px)")
            }
          })
        }), (0, i.jsxs)(A7, {
          children: [(0, i.jsx)(d.Z, {
            gradient: "linear-gradient(90deg, #3AAA82 0%, #42B28A 35.26%, #4EBEAA 59.83%, #3EC6D9 100%)",
            children: "Market Analysis"
          }), "at your fingertips."]
        })]
      });
    }
    let A2 = n.ZP.div.withConfig({
        componentId: "sc-2cc6f63a-0"
      })(["position:relative;overflow:hidden;background:#000000;border-radius:14px;grid-column:auto / span 4;padding:70px 48px;display:flex;align-items:flex-end;", "{justify-content:center;padding:0px 0 64px;}"], s.mq.tablet),
      A7 = (0, n.ZP)(h.Z.h3).withConfig({
        componentId: "sc-2cc6f63a-1"
      })(["position:relative;font-size:32px;margin:0;span{display:block;}", "{text-align:center;}"], s.mq.tablet),
      A5 = n.ZP.div.withConfig({
        componentId: "sc-2cc6f63a-2"
      })(["top:0;left:0;width:100%;height:100%;position:absolute;width:750px;height:572px;pointer-events:none;img{top:0;left:0;height:100%;width:100%;position:absolute;}", "{top:-40px;}", "{display:none;}"], s.mq.desktopMedium, s.mq.tablet),
      A8 = n.ZP.div.withConfig({
        componentId: "sc-2cc6f63a-3"
      })(["bottom:185px;left:24px;width:100%;height:100%;position:absolute;width:716px;height:437px;pointer-events:none;", "{display:none;}img{top:0;left:0;height:100%;width:100%;position:absolute;}"], s.mq.tabletUp),
      A4 = [{
        src: "/dd/marketing/_next/static/media/mkt-motley-fool.c86eb0f1.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-benzinga.3be722f6.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-bloomberg.d7e37fc0.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-yahoo.658438be.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-business-insider.1675d16b.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-cnbc.afce507d.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-nyt.adc9f354.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-wsj.876b36b7.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-forbes.c20da920.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-investopedia.30d9378f.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-cnn.10f3284b.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }, {
        src: "/dd/marketing/_next/static/media/mkt-seeking-alpha.2e7e92ae.svg",
        height: 36,
        width: 169,
        blurWidth: 0,
        blurHeight: 0
      }];
    function A3() {
      let A = (0, a.useRef)(null),
        t = (0, T.Qj)(A);
      return (0, i.jsx)(A6, {
        ref: A,
        children: (0, i.jsx)(A9, {
          children: (0, i.jsx)(tA, {
            style: {
              transform: "translateY(".concat(-160 * t, "px)")
            },
            children: A4.map((A, t) => (0, i.jsx)(p.Z, {
              src: A,
              alt: ""
            }, t))
          })
        })
      });
    }
    let A6 = n.ZP.div.withConfig({
        componentId: "sc-5afbd5b2-0"
      })(["position:relative;background:#000000;overflow:hidden;border-radius:14px;grid-column:auto / span 2;padding:64px 48px;display:flex;align-items:flex-end;", "{justify-content:center;padding:0px 0 64px;text-align:center;}"], s.mq.tablet),
      A9 = n.ZP.div.withConfig({
        componentId: "sc-5afbd5b2-1"
      })(["top:0;left:0;position:absolute;width:100%;height:100%;&::after{content:'';position:absolute;top:0%;left:0;width:100%;height:100%;background:linear-gradient(black,transparent,black);pointer-events:none;}"]),
      tA = n.ZP.div.withConfig({
        componentId: "sc-5afbd5b2-2"
      })(["top:0;left:0;position:absolute;width:100%;height:100%;img{top:0;left:0;width:100%;transition:transform 0.4s cubic-bezier(0.76,0,0.24,1);&:not(:last-of-type){margin-bottom:18.5px;}}"]);
    var tt = {
        src: "/dd/marketing/_next/static/media/screener-laptop_1x.c995c86b.jpg",
        height: 572,
        width: 750,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABlRX/xAAWEAADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQEAAQUClH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAYEAACAwAAAAAAAAAAAAAAAAAAAREhQf/aAAgBAQABPyFQqsP/2gAMAwEAAgADAAAAEAP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAWEAEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQEAAT8QYydRf//Z",
        blurWidth: 8,
        blurHeight: 6
      },
      te = {
        src: "/dd/marketing/_next/static/media/screener-laptop_2x.811d2cf8.jpg",
        height: 1144,
        width: 1500,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABlRX/xAAWEAADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQEAAQUClH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAY/An//xAAYEAACAwAAAAAAAAAAAAAAAAAAAREhQf/aAAgBAQABPyFQqsP/2gAMAwEAAgADAAAAEAP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAWEAEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQEAAT8QYydQ3//Z",
        blurWidth: 8,
        blurHeight: 6
      },
      ti = {
        src: "/dd/marketing/_next/static/media/screener-laptop_4x.90566ec2.jpg",
        height: 2288,
        width: 3e3,
        blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABlBX/xAAWEAADAAAAAAAAAAAAAAAAAAABERL/2gAIAQEAAQUCkL//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAVEAEBAAAAAAAAAAAAAAAAAAAAMf/aAAgBAQAGPwKP/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERYf/aAAgBAQABPyFRYP/aAAwDAQACAAMAAAAQ8//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABYQAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAQABPxBiI1Df/9k=",
        blurWidth: 8,
        blurHeight: 6
      },
      ta = {
        src: "/dd/marketing/_next/static/media/screener-mobile_1x.7219f723.png",
        height: 437,
        width: 716,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUcHSEJCQsYTLkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEElEQVR4nGNgZAADRgYiGAABDgALLsgUUgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 5
      },
      tn = {
        src: "/dd/marketing/_next/static/media/screener-mobile_2x.5a393dd8.png",
        height: 874,
        width: 1432,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUcHCEJCQslLJC5AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAEElEQVR4nGNgZAADRgYiGAABDgALLsgUUgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 5
      },
      ts = {
        src: "/dd/marketing/_next/static/media/screener-mobile_4x.01a1beed.png",
        height: 1748,
        width: 2864,
        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUcHCEJCQslLJC5AAAACXBIWXMAACxLAAAsSwGlPZapAAAAEElEQVR4nGNgZAADRgYiGAABDgALLsgUUgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 5
      },
      to = e(93146);
    function tr() {
      let [A, t] = (0, a.useState)(""),
        [e, n] = (0, a.useState)(""),
        [s, o] = (0, a.useState)(0);
      return (0, a.useEffect)(() => {
        let A = new window.Date(),
          e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"][A.getMonth()],
          i = A.getDate();
        t(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][A.getDay()]), n(e), o(i);
      }, []), (0, i.jsxs)(tg, {
        children: [A.substring(0, 3), " ", e.substring(0, 3), " ", s]
      });
    }
    let tg = n.ZP.div.withConfig({
      componentId: "sc-2b1d9601-0"
    })(["position:absolute;top:146px;left:724px;font-size:6.2px;white-space:nowrap;", "{display:none;}"], s.mq.tablet);
    function tl() {
      let A = (0, a.useRef)(null),
        t = (0, T.Qj)(A);
      return (0, i.jsxs)(td, {
        ref: A,
        children: [(0, i.jsx)(th, {
          src: tt,
          srcMedium: te,
          srcLarge: ti,
          alt: "News"
        }), (0, i.jsx)(tr, {}), (0, i.jsx)(tp, {
          src: ta,
          srcMedium: tn,
          srcLarge: ts,
          alt: "News",
          style: {
            transform: "translateY(".concat(-36 * t, "px)")
          }
        }), (0, i.jsx)(tc, {
          children: (0, i.jsxs)(h.Z.h2, {
            style: {
              fontSize: "32px",
              margin: 0
            },
            children: ["Stock screener.", " ", (0, i.jsx)(d.Z, {
              gradient: to.r.colors.gradients.idea,
              children: "At the speed of thought."
            })]
          })
        })]
      });
    }
    let td = n.ZP.div.withConfig({
        componentId: "sc-2b1d9601-1"
      })(["background:#000000;border-radius:14px;grid-column:3 / -1;overflow:hidden;border-radius:14px;position:relative;", "{display:flex;align-items:flex-end;justify-content:center;padding-bottom:64px;}"], s.mq.tablet),
      tc = n.ZP.div.withConfig({
        componentId: "sc-2b1d9601-2"
      })(["padding:48px;z-index:1000000;position:relative;", "{text-align:center;padding:0;span:last-of-type{display:block;}}"], s.mq.tablet);
    n.ZP.span.withConfig({
      componentId: "sc-2b1d9601-3"
    })(["color:", ";position:relative;transition:color 0.5s 0.2s cubic-bezier(0.25,0.46,0.45,0.94);::before{content:'';background:", ";position:absolute;top:58%;left:0;width:100%;clip-path:", ";transition:clip-path 0.8s cubic-bezier(0.25,0.46,0.45,0.94),background 0.5s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s;height:1px;}"], A => A.view ? "rgba(134, 143, 151, 0.5)" : "#fff", A => A.view ? "rgba(134, 143, 151, 0.5)" : "#fff", A => A.view ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 0 0, 0% 100%, 0 100%)");
    let th = (0, n.ZP)(p.Z).withConfig({
        componentId: "sc-2b1d9601-4"
      })(["position:absolute;left:0;top:0;pointer-events:none;width:750px;height:572px;", "{display:none;}"], s.mq.tablet),
      tp = (0, n.ZP)(p.Z).withConfig({
        componentId: "sc-2b1d9601-5"
      })(["position:absolute;left:24px;bottom:165px;width:716px;height:437px;pointer-events:none;", "{display:none;}"], s.mq.tabletUp);
    function tx() {
      return (0, i.jsx)(tm, {
        children: (0, i.jsx)(c.Z, {
          children: (0, i.jsxs)(tE, {
            children: [(0, i.jsxs)(tb, {
              children: [(0, i.jsxs)(h.Z.h2, {
                children: ["Value is what ", (0, i.jsx)("span", {
                  children: "you get."
                })]
              }), (0, i.jsx)(Ax.Z.regular, {
                style: {
                  maxWidth: "583px"
                },
                children: "For $30 a month or $300 a year, you'll unlock access to the latest market insights, accurate asset pricing, a lightning-fast screener, ad-free news and more."
              })]
            }), (0, i.jsxs)(tu, {
              children: [(0, i.jsx)(A1, {}), (0, i.jsx)(A3, {}), (0, i.jsx)(AZ, {}), (0, i.jsx)(tl, {})]
            }), (0, i.jsx)(Az, {})]
          })
        })
      });
    }
    let tm = n.ZP.div.withConfig({
        componentId: "sc-c6604e06-0"
      })(["display:flex;flex-direction:column;align-items:center;"]),
      tE = n.ZP.div.withConfig({
        componentId: "sc-c6604e06-1"
      })(["margin-top:120px;width:100%;flex:1;max-width:1140px;"]),
      tb = n.ZP.div.withConfig({
        componentId: "sc-c6604e06-2"
      })(["margin-bottom:56px;padding-left:99px;", "{padding-left:86px;margin-bottom:48px;}", "{padding-left:0;}", "{span{display:block;}}"], s.mq.desktopMedium, s.mq.tablet, s.mq.phablet),
      tu = n.ZP.div.withConfig({
        componentId: "sc-c6604e06-3"
      })(["display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(2,550px);grid-gap:30px;", "{grid-gap:20px;grid-template-rows:repeat(2,487px);}", "{display:flex;flex-direction:column;gap:20px;& > div{min-height:488px;}}"], s.mq.desktopMedium, s.mq.tablet);
    function tB() {
      return (0, i.jsxs)(a.Fragment, {
        children: [(0, i.jsx)(g.Z, {
          image: "/dd/marketing/_next/static/media/meta-pricing.22190941.jpg",
          pathname: "/pricing",
          title: "Fey | Pricing",
          description: "For $30 a month or $300 a year, Fey gives you access to the latest market insights, accurate asset pricing, seamless broker integrations, ad-free news and more.",
          themeColor: "#000000"
        }), (0, i.jsxs)(tw, {
          children: [(0, i.jsx)(r.Z, {}), (0, i.jsx)(X, {}), (0, i.jsxs)(tf, {
            children: [(0, i.jsx)(tx, {}), (0, i.jsx)(o.Z, {
              theme: "transparent"
            })]
          })]
        })]
      });
    }
    let tf = n.ZP.div.withConfig({
        componentId: "sc-c28a02f7-0"
      })(["background:linear-gradient(180deg,#0b0b0f 0%,#0b0b0f 62.68%,rgba(11,11,15,0));", "{background:linear-gradient(180deg,#0b0b0f 0%,#0b0b0f 80%,rgba(11,11,15,0));}"], s.mq.tablet),
      tw = n.ZP.div.withConfig({
        componentId: "sc-c28a02f7-1"
      })(["position:relative;background:#000000;min-height:100vh;"]);
  },
  37164: function (A, t, e) {
    "use strict";

    e.d(t, {
      kP: function () {
        return n;
      }
    });
    let i = A => crypto.getRandomValues(new Uint8Array(A)),
      a = (A, t, e) => {
        let i = (2 << Math.log(A.length - 1) / Math.LN2) - 1,
          a = -~(1.6 * i * t / A.length);
        return function () {
          let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : t;
          let s = "";
          for (;;) {
            let t = e(a),
              o = a;
            for (; o--;) if ((s += A[t[o] & i] || "").length === n) return s;
          }
        };
      },
      n = function (A) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;
        return a(A, t, i);
      };
  },
  84687: function (A, t, e) {
    "use strict";

    e.d(t, {
      Yz: function () {
        return i.Yz;
      },
      q: function () {
        return u;
      },
      q_: function () {
        return i.q_;
      }
    });
    var i = e(89046),
      a = e(28316),
      n = e(55870),
      s = e(88307),
      o = /^--/,
      r = {},
      g = {
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
        strokeWidth: !0
      },
      l = (A, t) => A + t.charAt(0).toUpperCase() + t.substring(1),
      d = ["Webkit", "Ms", "Moz", "O"];
    g = Object.keys(g).reduce((A, t) => (d.forEach(e => A[l(e, t)] = A[t]), A), g);
    var c = /^(matrix|translate|scale|rotate|skew)/,
      h = /^(translate)/,
      p = /^(rotate|skew)/,
      x = (A, t) => n.is.num(A) && 0 !== A ? A + t : A,
      m = (A, t) => n.is.arr(A) ? A.every(A => m(A, t)) : n.is.num(A) ? A === t : parseFloat(A) === t,
      E = class extends s.rS {
        constructor(_ref) {
          let {
            x: A,
            y: t,
            z: e,
            ...i
          } = _ref;
          let a = [],
            s = [];
          (A || t || e) && (a.push([A || 0, t || 0, e || 0]), s.push(A => [`translate3d(${A.map(A => x(A, "px")).join(",")})`, m(A, 0)])), (0, n.rU)(i, (A, t) => {
            if ("transform" === t) a.push([A || ""]), s.push(A => [A, "" === A]);else if (c.test(t)) {
              if (delete i[t], n.is.und(A)) return;
              let e = h.test(t) ? "px" : p.test(t) ? "deg" : "";
              a.push((0, n.qo)(A)), s.push("rotate3d" === t ? _ref2 => {
                let [A, t, i, a] = _ref2;
                return [`rotate3d(${A},${t},${i},${x(a, e)})`, m(a, 0)];
              } : A => [`${t}(${A.map(A => x(A, e)).join(",")})`, m(A, t.startsWith("scale") ? 1 : 0)]);
            }
          }), a.length && (i.transform = new b(a, s)), super(i);
        }
      },
      b = class extends n.B0 {
        constructor(A, t) {
          super(), this.inputs = A, this.transforms = t, this._value = null;
        }
        get() {
          return this._value || (this._value = this._get());
        }
        _get() {
          let A = "",
            t = !0;
          return (0, n.S6)(this.inputs, (e, i) => {
            let a = (0, n.je)(e[0]),
              [s, o] = this.transforms[i](n.is.arr(a) ? a : e.map(n.je));
            A += " " + s, t = t && o;
          }), t ? "none" : A;
        }
        observerAdded(A) {
          1 == A && (0, n.S6)(this.inputs, A => (0, n.S6)(A, A => (0, n.j$)(A) && (0, n.UI)(A, this)));
        }
        observerRemoved(A) {
          0 == A && (0, n.S6)(this.inputs, A => (0, n.S6)(A, A => (0, n.j$)(A) && (0, n.iL)(A, this)));
        }
        eventObserved(A) {
          "change" == A.type && (this._value = null), (0, n.k0)(this, A);
        }
      };
    i.OH.assign({
      batchedUpdates: a.unstable_batchedUpdates,
      createStringInterpolator: n.qS,
      colors: n.O9
    });
    var u = (0, s.Ld)(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
      applyAnimatedValues: function (A, t) {
        if (!A.nodeType || !A.setAttribute) return !1;
        let e = "filter" === A.nodeName || A.parentNode && "filter" === A.parentNode.nodeName,
          {
            style: i,
            children: a,
            scrollTop: n,
            scrollLeft: s,
            viewBox: l,
            ...d
          } = t,
          c = Object.values(d),
          h = Object.keys(d).map(t => e || A.hasAttribute(t) ? t : r[t] || (r[t] = t.replace(/([A-Z])/g, A => "-" + A.toLowerCase())));
        for (let t in void 0 !== a && (A.textContent = a), i) if (i.hasOwnProperty(t)) {
          var p;
          let e = null == (p = i[t]) || "boolean" == typeof p || "" === p ? "" : "number" != typeof p || 0 === p || o.test(t) || g.hasOwnProperty(t) && g[t] ? ("" + p).trim() : p + "px";
          o.test(t) ? A.style.setProperty(t, e) : A.style[t] = e;
        }
        h.forEach((t, e) => {
          A.setAttribute(t, c[e]);
        }), void 0 !== n && (A.scrollTop = n), void 0 !== s && (A.scrollLeft = s), void 0 !== l && A.setAttribute("viewBox", l);
      },
      createAnimatedStyle: A => new E(A),
      getComponentProps: _ref3 => {
        let {
          scrollTop: A,
          scrollLeft: t,
          ...e
        } = _ref3;
        return e;
      }
    }).animated;
  }
}, function (A) {
  A.O(0, [655, 624, 707, 94, 888, 774, 179], function () {
    return A(A.s = 20726);
  }), _N_E = A.O();
}]);