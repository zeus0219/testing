(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1347],
  {
    61907: function (e) {
      var t = !!(
        "undefined" != typeof window &&
        window.document &&
        window.document.createElement
      );
      e.exports = t;
    },
    42837: function (e, t, i) {
      "use strict";
      i.d(t, {
        n: function () {
          return l;
        },
      });
      var s = i(28194),
        r = i(21596);
      function l(e, t) {
        let i = +(0, s.Q)(e);
        return (0, r.L)(e, i + t);
      }
    },
    9038: function (e, t, i) {
      "use strict";
      i.d(t, {
        m: function () {
          return l;
        },
      });
      var s = i(42837),
        r = i(45823);
      function l(e, t) {
        return (0, s.n)(e, t * r.yJ);
      }
    },
    81261: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return V;
        },
      });
      var s = i(15039),
        r = i(84639),
        l = i(48717),
        o = function () {
          return l.Z.Date.now();
        },
        n = /\s/,
        a = function (e) {
          for (var t = e.length; t-- && n.test(e.charAt(t)); );
          return t;
        },
        c = /^\s+/,
        h = i(55357),
        u = 0 / 0,
        d = /^[-+]0x[0-9a-f]+$/i,
        p = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        v = parseInt,
        m = function (e) {
          if ("number" == typeof e) return e;
          if ((0, h.Z)(e)) return u;
          if ((0, r.Z)(e)) {
            var t,
              i = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = (0, r.Z)(i) ? i + "" : i;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = (t = e) ? t.slice(0, a(t) + 1).replace(c, "") : t;
          var s = p.test(e);
          return s || f.test(e) ? v(e.slice(2), s ? 2 : 8) : d.test(e) ? u : +e;
        },
        b = Math.max,
        g = Math.min,
        x = function (e, t, i) {
          var s,
            l,
            n,
            a,
            c,
            h,
            u = 0,
            d = !1,
            p = !1,
            f = !0;
          if ("function" != typeof e) throw TypeError("Expected a function");
          function v(t) {
            var i = s,
              r = l;
            return (s = l = void 0), (u = t), (a = e.apply(r, i));
          }
          function x(e) {
            var i = e - h,
              s = e - u;
            return void 0 === h || i >= t || i < 0 || (p && s >= n);
          }
          function y() {
            var e,
              i,
              s,
              r = o();
            if (x(r)) return E(r);
            c = setTimeout(
              y,
              ((e = r - h), (i = r - u), (s = t - e), p ? g(s, n - i) : s)
            );
          }
          function E(e) {
            return ((c = void 0), f && s) ? v(e) : ((s = l = void 0), a);
          }
          function w() {
            var e,
              i = o(),
              r = x(i);
            if (((s = arguments), (l = this), (h = i), r)) {
              if (void 0 === c)
                return (u = e = h), (c = setTimeout(y, t)), d ? v(e) : a;
              if (p) return clearTimeout(c), (c = setTimeout(y, t)), v(h);
            }
            return void 0 === c && (c = setTimeout(y, t)), a;
          }
          return (
            (t = m(t) || 0),
            (0, r.Z)(i) &&
              ((d = !!i.leading),
              (n = (p = "maxWait" in i) ? b(m(i.maxWait) || 0, t) : n),
              (f = "trailing" in i ? !!i.trailing : f)),
            (w.cancel = function () {
              void 0 !== c && clearTimeout(c),
                (u = 0),
                (s = h = l = c = void 0);
            }),
            (w.flush = function () {
              return void 0 === c ? a : E(o());
            }),
            w
          );
        },
        y = function (e, t, i) {
          var s = !0,
            l = !0;
          if ("function" != typeof e) throw TypeError("Expected a function");
          return (
            (0, r.Z)(i) &&
              ((s = "leading" in i ? !!i.leading : s),
              (l = "trailing" in i ? !!i.trailing : l)),
            x(e, t, { leading: s, maxWait: t, trailing: l })
          );
        },
        E = i(61907),
        w = function () {
          return (w =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        S = null,
        O = null;
      function k() {
        if (null === S) {
          if ("undefined" == typeof document) return (S = 0);
          var e = document.body,
            t = document.createElement("div");
          t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
          var i = t.getBoundingClientRect().right;
          e.removeChild(t), (S = i);
        }
        return S;
      }
      function A(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function N(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      E &&
        window.addEventListener("resize", function () {
          O !== window.devicePixelRatio &&
            ((O = window.devicePixelRatio), (S = null));
        });
      var W = function (e) {
        return Array.prototype.reduce.call(
          e,
          function (e, t) {
            var i = t.name.match(/data-simplebar-(.+)/);
            if (i) {
              var s = i[1].replace(/\W+(.)/g, function (e, t) {
                return t.toUpperCase();
              });
              switch (t.value) {
                case "true":
                case void 0:
                  e[s] = !0;
                  break;
                case "false":
                  e[s] = !1;
                  break;
                default:
                  e[s] = t.value;
              }
            }
            return e;
          },
          {}
        );
      };
      function z(e, t) {
        var i;
        e && (i = e.classList).add.apply(i, t.split(" "));
      }
      function M(e, t) {
        e &&
          t.split(" ").forEach(function (t) {
            e.classList.remove(t);
          });
      }
      function L(e) {
        return ".".concat(e.split(" ").join("."));
      }
      var R = Object.freeze({
          __proto__: null,
          getElementWindow: A,
          getElementDocument: N,
          getOptions: W,
          addClasses: z,
          removeClasses: M,
          classNamesToQuery: L,
        }),
        C = (function () {
          function e(t, i) {
            void 0 === i && (i = {});
            var s = this;
            if (
              ((this.removePreventClickId = null),
              (this.minScrollbarWidth = 20),
              (this.stopScrollDelay = 175),
              (this.isScrolling = !1),
              (this.isMouseEntering = !1),
              (this.scrollXTicking = !1),
              (this.scrollYTicking = !1),
              (this.wrapperEl = null),
              (this.contentWrapperEl = null),
              (this.contentEl = null),
              (this.offsetEl = null),
              (this.maskEl = null),
              (this.placeholderEl = null),
              (this.heightAutoObserverWrapperEl = null),
              (this.heightAutoObserverEl = null),
              (this.rtlHelpers = null),
              (this.scrollbarWidth = 0),
              (this.resizeObserver = null),
              (this.mutationObserver = null),
              (this.elStyles = null),
              (this.isRtl = null),
              (this.mouseX = 0),
              (this.mouseY = 0),
              (this.onMouseMove = function () {}),
              (this.onWindowResize = function () {}),
              (this.onStopScrolling = function () {}),
              (this.onMouseEntered = function () {}),
              (this.onScroll = function () {
                var e = A(s.el);
                s.scrollXTicking ||
                  (e.requestAnimationFrame(s.scrollX), (s.scrollXTicking = !0)),
                  s.scrollYTicking ||
                    (e.requestAnimationFrame(s.scrollY),
                    (s.scrollYTicking = !0)),
                  s.isScrolling ||
                    ((s.isScrolling = !0), z(s.el, s.classNames.scrolling)),
                  s.showScrollbar("x"),
                  s.showScrollbar("y"),
                  s.onStopScrolling();
              }),
              (this.scrollX = function () {
                s.axis.x.isOverflowing && s.positionScrollbar("x"),
                  (s.scrollXTicking = !1);
              }),
              (this.scrollY = function () {
                s.axis.y.isOverflowing && s.positionScrollbar("y"),
                  (s.scrollYTicking = !1);
              }),
              (this._onStopScrolling = function () {
                M(s.el, s.classNames.scrolling),
                  s.options.autoHide &&
                    (s.hideScrollbar("x"), s.hideScrollbar("y")),
                  (s.isScrolling = !1);
              }),
              (this.onMouseEnter = function () {
                s.isMouseEntering ||
                  (z(s.el, s.classNames.mouseEntered),
                  s.showScrollbar("x"),
                  s.showScrollbar("y"),
                  (s.isMouseEntering = !0)),
                  s.onMouseEntered();
              }),
              (this._onMouseEntered = function () {
                M(s.el, s.classNames.mouseEntered),
                  s.options.autoHide &&
                    (s.hideScrollbar("x"), s.hideScrollbar("y")),
                  (s.isMouseEntering = !1);
              }),
              (this._onMouseMove = function (e) {
                (s.mouseX = e.clientX),
                  (s.mouseY = e.clientY),
                  (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                    s.onMouseMoveForAxis("x"),
                  (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                    s.onMouseMoveForAxis("y");
              }),
              (this.onMouseLeave = function () {
                s.onMouseMove.cancel(),
                  (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                    s.onMouseLeaveForAxis("x"),
                  (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                    s.onMouseLeaveForAxis("y"),
                  (s.mouseX = -1),
                  (s.mouseY = -1);
              }),
              (this._onWindowResize = function () {
                (s.scrollbarWidth = s.getScrollbarWidth()),
                  s.hideNativeScrollbar();
              }),
              (this.onPointerEvent = function (e) {
                var t, i;
                s.axis.x.track.el &&
                  s.axis.y.track.el &&
                  s.axis.x.scrollbar.el &&
                  s.axis.y.scrollbar.el &&
                  ((s.axis.x.track.rect =
                    s.axis.x.track.el.getBoundingClientRect()),
                  (s.axis.y.track.rect =
                    s.axis.y.track.el.getBoundingClientRect()),
                  (s.axis.x.isOverflowing || s.axis.x.forceVisible) &&
                    (t = s.isWithinBounds(s.axis.x.track.rect)),
                  (s.axis.y.isOverflowing || s.axis.y.forceVisible) &&
                    (i = s.isWithinBounds(s.axis.y.track.rect)),
                  (t || i) &&
                    (e.stopPropagation(),
                    "pointerdown" === e.type &&
                      "touch" !== e.pointerType &&
                      (t &&
                        ((s.axis.x.scrollbar.rect =
                          s.axis.x.scrollbar.el.getBoundingClientRect()),
                        s.isWithinBounds(s.axis.x.scrollbar.rect)
                          ? s.onDragStart(e, "x")
                          : s.onTrackClick(e, "x")),
                      i &&
                        ((s.axis.y.scrollbar.rect =
                          s.axis.y.scrollbar.el.getBoundingClientRect()),
                        s.isWithinBounds(s.axis.y.scrollbar.rect)
                          ? s.onDragStart(e, "y")
                          : s.onTrackClick(e, "y")))));
              }),
              (this.drag = function (t) {
                if (s.draggedAxis && s.contentWrapperEl) {
                  var i,
                    r,
                    l,
                    o,
                    n,
                    a,
                    c,
                    h,
                    u,
                    d,
                    p,
                    f = s.axis[s.draggedAxis].track,
                    v =
                      null !==
                        (r =
                          null === (i = f.rect) || void 0 === i
                            ? void 0
                            : i[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== r
                        ? r
                        : 0,
                    m = s.axis[s.draggedAxis].scrollbar,
                    b =
                      null !==
                        (o =
                          null === (l = s.contentWrapperEl) || void 0 === l
                            ? void 0
                            : l[s.axis[s.draggedAxis].scrollSizeAttr]) &&
                      void 0 !== o
                        ? o
                        : 0,
                    g = parseInt(
                      null !==
                        (a =
                          null === (n = s.elStyles) || void 0 === n
                            ? void 0
                            : n[s.axis[s.draggedAxis].sizeAttr]) && void 0 !== a
                        ? a
                        : "0px",
                      10
                    );
                  t.preventDefault(), t.stopPropagation();
                  var x =
                      ("y" === s.draggedAxis ? t.pageY : t.pageX) -
                      (null !==
                        (h =
                          null === (c = f.rect) || void 0 === c
                            ? void 0
                            : c[s.axis[s.draggedAxis].offsetAttr]) &&
                      void 0 !== h
                        ? h
                        : 0) -
                      s.axis[s.draggedAxis].dragOffset,
                    y =
                      ((x =
                        "x" === s.draggedAxis && s.isRtl
                          ? (null !==
                              (d =
                                null === (u = f.rect) || void 0 === u
                                  ? void 0
                                  : u[s.axis[s.draggedAxis].sizeAttr]) &&
                            void 0 !== d
                              ? d
                              : 0) -
                            m.size -
                            x
                          : x) /
                        (v - m.size)) *
                      (b - g);
                  "x" === s.draggedAxis &&
                    s.isRtl &&
                    (y = (
                      null === (p = e.getRtlHelpers()) || void 0 === p
                        ? void 0
                        : p.isScrollingToNegative
                    )
                      ? -y
                      : y),
                    (s.contentWrapperEl[
                      s.axis[s.draggedAxis].scrollOffsetAttr
                    ] = y);
                }
              }),
              (this.onEndDrag = function (e) {
                var t = N(s.el),
                  i = A(s.el);
                e.preventDefault(),
                  e.stopPropagation(),
                  M(s.el, s.classNames.dragging),
                  t.removeEventListener("mousemove", s.drag, !0),
                  t.removeEventListener("mouseup", s.onEndDrag, !0),
                  (s.removePreventClickId = i.setTimeout(function () {
                    t.removeEventListener("click", s.preventClick, !0),
                      t.removeEventListener("dblclick", s.preventClick, !0),
                      (s.removePreventClickId = null);
                  }));
              }),
              (this.preventClick = function (e) {
                e.preventDefault(), e.stopPropagation();
              }),
              (this.el = t),
              (this.options = w(w({}, e.defaultOptions), i)),
              (this.classNames = w(
                w({}, e.defaultOptions.classNames),
                i.classNames
              )),
              (this.axis = {
                x: {
                  scrollOffsetAttr: "scrollLeft",
                  sizeAttr: "width",
                  scrollSizeAttr: "scrollWidth",
                  offsetSizeAttr: "offsetWidth",
                  offsetAttr: "left",
                  overflowAttr: "overflowX",
                  dragOffset: 0,
                  isOverflowing: !0,
                  forceVisible: !1,
                  track: { size: null, el: null, rect: null, isVisible: !1 },
                  scrollbar: {
                    size: null,
                    el: null,
                    rect: null,
                    isVisible: !1,
                  },
                },
                y: {
                  scrollOffsetAttr: "scrollTop",
                  sizeAttr: "height",
                  scrollSizeAttr: "scrollHeight",
                  offsetSizeAttr: "offsetHeight",
                  offsetAttr: "top",
                  overflowAttr: "overflowY",
                  dragOffset: 0,
                  isOverflowing: !0,
                  forceVisible: !1,
                  track: { size: null, el: null, rect: null, isVisible: !1 },
                  scrollbar: {
                    size: null,
                    el: null,
                    rect: null,
                    isVisible: !1,
                  },
                },
              }),
              "object" != typeof this.el || !this.el.nodeName)
            )
              throw Error(
                "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                  this.el
                )
              );
            (this.onMouseMove = y(this._onMouseMove, 64)),
              (this.onWindowResize = x(this._onWindowResize, 64, {
                leading: !0,
              })),
              (this.onStopScrolling = x(
                this._onStopScrolling,
                this.stopScrollDelay
              )),
              (this.onMouseEntered = x(
                this._onMouseEntered,
                this.stopScrollDelay
              )),
              this.init();
          }
          return (
            (e.getRtlHelpers = function () {
              if (e.rtlHelpers) return e.rtlHelpers;
              var t = document.createElement("div");
              t.innerHTML =
                '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
              var i = t.firstElementChild,
                s = null == i ? void 0 : i.firstElementChild;
              if (!s) return null;
              document.body.appendChild(i), (i.scrollLeft = 0);
              var r = e.getOffset(i),
                l = e.getOffset(s);
              i.scrollLeft = -999;
              var o = e.getOffset(s);
              return (
                document.body.removeChild(i),
                (e.rtlHelpers = {
                  isScrollOriginAtZero: r.left !== l.left,
                  isScrollingToNegative: l.left !== o.left,
                }),
                e.rtlHelpers
              );
            }),
            (e.prototype.getScrollbarWidth = function () {
              try {
                if (
                  (this.contentWrapperEl &&
                    "none" ===
                      getComputedStyle(
                        this.contentWrapperEl,
                        "::-webkit-scrollbar"
                      ).display) ||
                  "scrollbarWidth" in document.documentElement.style ||
                  "-ms-overflow-style" in document.documentElement.style
                )
                  return 0;
                return k();
              } catch (e) {
                return k();
              }
            }),
            (e.getOffset = function (e) {
              var t = e.getBoundingClientRect(),
                i = N(e),
                s = A(e);
              return {
                top: t.top + (s.pageYOffset || i.documentElement.scrollTop),
                left: t.left + (s.pageXOffset || i.documentElement.scrollLeft),
              };
            }),
            (e.prototype.init = function () {
              E &&
                (this.initDOM(),
                (this.rtlHelpers = e.getRtlHelpers()),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
            }),
            (e.prototype.initDOM = function () {
              var e, t;
              (this.wrapperEl = this.el.querySelector(
                L(this.classNames.wrapper)
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector(L(this.classNames.contentWrapper))),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector(L(this.classNames.contentEl))),
                (this.offsetEl = this.el.querySelector(
                  L(this.classNames.offset)
                )),
                (this.maskEl = this.el.querySelector(L(this.classNames.mask))),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  L(this.classNames.placeholder)
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  L(this.classNames.heightAutoObserverWrapperEl)
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  L(this.classNames.heightAutoObserverEl)
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  ""
                    .concat(L(this.classNames.track))
                    .concat(L(this.classNames.horizontal))
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  ""
                    .concat(L(this.classNames.track))
                    .concat(L(this.classNames.vertical))
                )),
                (this.axis.x.scrollbar.el =
                  (null === (e = this.axis.x.track.el) || void 0 === e
                    ? void 0
                    : e.querySelector(L(this.classNames.scrollbar))) || null),
                (this.axis.y.scrollbar.el =
                  (null === (t = this.axis.y.track.el) || void 0 === t
                    ? void 0
                    : t.querySelector(L(this.classNames.scrollbar))) || null),
                this.options.autoHide ||
                  (z(this.axis.x.scrollbar.el, this.classNames.visible),
                  z(this.axis.y.scrollbar.el, this.classNames.visible));
            }),
            (e.prototype.initListeners = function () {
              var e,
                t = this,
                i = A(this.el);
              if (
                (this.el.addEventListener("mouseenter", this.onMouseEnter),
                this.el.addEventListener(
                  "pointerdown",
                  this.onPointerEvent,
                  !0
                ),
                this.el.addEventListener("mousemove", this.onMouseMove),
                this.el.addEventListener("mouseleave", this.onMouseLeave),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.addEventListener("scroll", this.onScroll),
                i.addEventListener("resize", this.onWindowResize),
                this.contentEl)
              ) {
                if (window.ResizeObserver) {
                  var s = !1,
                    r = i.ResizeObserver || ResizeObserver;
                  (this.resizeObserver = new r(function () {
                    s &&
                      i.requestAnimationFrame(function () {
                        t.recalculate();
                      });
                  })),
                    this.resizeObserver.observe(this.el),
                    this.resizeObserver.observe(this.contentEl),
                    i.requestAnimationFrame(function () {
                      s = !0;
                    });
                }
                (this.mutationObserver = new i.MutationObserver(function () {
                  i.requestAnimationFrame(function () {
                    t.recalculate();
                  });
                })),
                  this.mutationObserver.observe(this.contentEl, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                  });
              }
            }),
            (e.prototype.recalculate = function () {
              if (
                this.heightAutoObserverEl &&
                this.contentEl &&
                this.contentWrapperEl &&
                this.wrapperEl &&
                this.placeholderEl
              ) {
                var e = A(this.el);
                (this.elStyles = e.getComputedStyle(this.el)),
                  (this.isRtl = "rtl" === this.elStyles.direction);
                var t = this.contentEl.offsetWidth,
                  i = this.heightAutoObserverEl.offsetHeight <= 1,
                  s = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                  r = this.contentWrapperEl.offsetWidth,
                  l = this.elStyles.overflowX,
                  o = this.elStyles.overflowY;
                (this.contentEl.style.padding = ""
                  .concat(this.elStyles.paddingTop, " ")
                  .concat(this.elStyles.paddingRight, " ")
                  .concat(this.elStyles.paddingBottom, " ")
                  .concat(this.elStyles.paddingLeft)),
                  (this.wrapperEl.style.margin = "-"
                    .concat(this.elStyles.paddingTop, " -")
                    .concat(this.elStyles.paddingRight, " -")
                    .concat(this.elStyles.paddingBottom, " -")
                    .concat(this.elStyles.paddingLeft));
                var n = this.contentEl.scrollHeight,
                  a = this.contentEl.scrollWidth;
                (this.contentWrapperEl.style.height = i ? "auto" : "100%"),
                  (this.placeholderEl.style.width = s
                    ? "".concat(t || a, "px")
                    : "auto"),
                  (this.placeholderEl.style.height = "".concat(n, "px"));
                var c = this.contentWrapperEl.offsetHeight;
                (this.axis.x.isOverflowing = 0 !== t && a > t),
                  (this.axis.y.isOverflowing = n > c),
                  (this.axis.x.isOverflowing =
                    "hidden" !== l && this.axis.x.isOverflowing),
                  (this.axis.y.isOverflowing =
                    "hidden" !== o && this.axis.y.isOverflowing),
                  (this.axis.x.forceVisible =
                    "x" === this.options.forceVisible ||
                    !0 === this.options.forceVisible),
                  (this.axis.y.forceVisible =
                    "y" === this.options.forceVisible ||
                    !0 === this.options.forceVisible),
                  this.hideNativeScrollbar();
                var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                  u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                (this.axis.x.isOverflowing =
                  this.axis.x.isOverflowing && a > r - u),
                  (this.axis.y.isOverflowing =
                    this.axis.y.isOverflowing && n > c - h),
                  (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                  (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                  this.axis.x.scrollbar.el &&
                    (this.axis.x.scrollbar.el.style.width = "".concat(
                      this.axis.x.scrollbar.size,
                      "px"
                    )),
                  this.axis.y.scrollbar.el &&
                    (this.axis.y.scrollbar.el.style.height = "".concat(
                      this.axis.y.scrollbar.size,
                      "px"
                    )),
                  this.positionScrollbar("x"),
                  this.positionScrollbar("y"),
                  this.toggleTrackVisibility("x"),
                  this.toggleTrackVisibility("y");
              }
            }),
            (e.prototype.getScrollbarSize = function (e) {
              if (
                (void 0 === e && (e = "y"),
                !this.axis[e].isOverflowing || !this.contentEl)
              )
                return 0;
              var t,
                i,
                s,
                r = this.contentEl[this.axis[e].scrollSizeAttr],
                l =
                  null !==
                    (i =
                      null === (t = this.axis[e].track.el) || void 0 === t
                        ? void 0
                        : t[this.axis[e].offsetSizeAttr]) && void 0 !== i
                    ? i
                    : 0;
              return (
                (s = Math.max(~~((l / r) * l), this.options.scrollbarMinSize)),
                this.options.scrollbarMaxSize &&
                  (s = Math.min(s, this.options.scrollbarMaxSize)),
                s
              );
            }),
            (e.prototype.positionScrollbar = function (t) {
              void 0 === t && (t = "y");
              var i,
                s,
                r,
                l = this.axis[t].scrollbar;
              if (
                this.axis[t].isOverflowing &&
                this.contentWrapperEl &&
                l.el &&
                this.elStyles
              ) {
                var o = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                  n =
                    (null === (i = this.axis[t].track.el) || void 0 === i
                      ? void 0
                      : i[this.axis[t].offsetSizeAttr]) || 0,
                  a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                  c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
                (c =
                  "x" === t &&
                  this.isRtl &&
                  (null === (s = e.getRtlHelpers()) || void 0 === s
                    ? void 0
                    : s.isScrollOriginAtZero)
                    ? -c
                    : c),
                  "x" === t &&
                    this.isRtl &&
                    (c = (
                      null === (r = e.getRtlHelpers()) || void 0 === r
                        ? void 0
                        : r.isScrollingToNegative
                    )
                      ? c
                      : -c);
                var h = c / (o - a),
                  u = ~~((n - l.size) * h);
                (u = "x" === t && this.isRtl ? -u + (n - l.size) : u),
                  (l.el.style.transform =
                    "x" === t
                      ? "translate3d(".concat(u, "px, 0, 0)")
                      : "translate3d(0, ".concat(u, "px, 0)"));
              }
            }),
            (e.prototype.toggleTrackVisibility = function (e) {
              void 0 === e && (e = "y");
              var t = this.axis[e].track.el,
                i = this.axis[e].scrollbar.el;
              t &&
                i &&
                this.contentWrapperEl &&
                (this.axis[e].isOverflowing || this.axis[e].forceVisible
                  ? ((t.style.visibility = "visible"),
                    (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                      "scroll"),
                    this.el.classList.add(
                      "".concat(this.classNames.scrollable, "-").concat(e)
                    ))
                  : ((t.style.visibility = "hidden"),
                    (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                      "hidden"),
                    this.el.classList.remove(
                      "".concat(this.classNames.scrollable, "-").concat(e)
                    )),
                this.axis[e].isOverflowing
                  ? (i.style.display = "block")
                  : (i.style.display = "none"));
            }),
            (e.prototype.showScrollbar = function (e) {
              void 0 === e && (e = "y"),
                this.axis[e].isOverflowing &&
                  !this.axis[e].scrollbar.isVisible &&
                  (z(this.axis[e].scrollbar.el, this.classNames.visible),
                  (this.axis[e].scrollbar.isVisible = !0));
            }),
            (e.prototype.hideScrollbar = function (e) {
              void 0 === e && (e = "y"),
                this.axis[e].isOverflowing &&
                  this.axis[e].scrollbar.isVisible &&
                  (M(this.axis[e].scrollbar.el, this.classNames.visible),
                  (this.axis[e].scrollbar.isVisible = !1));
            }),
            (e.prototype.hideNativeScrollbar = function () {
              this.offsetEl &&
                ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                  this.axis.y.isOverflowing || this.axis.y.forceVisible
                    ? "-".concat(this.scrollbarWidth, "px")
                    : "0px"),
                (this.offsetEl.style.bottom =
                  this.axis.x.isOverflowing || this.axis.x.forceVisible
                    ? "-".concat(this.scrollbarWidth, "px")
                    : "0px"));
            }),
            (e.prototype.onMouseMoveForAxis = function (e) {
              void 0 === e && (e = "y");
              var t = this.axis[e];
              t.track.el &&
                t.scrollbar.el &&
                ((t.track.rect = t.track.el.getBoundingClientRect()),
                (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
                this.isWithinBounds(t.track.rect)
                  ? (this.showScrollbar(e),
                    z(t.track.el, this.classNames.hover),
                    this.isWithinBounds(t.scrollbar.rect)
                      ? z(t.scrollbar.el, this.classNames.hover)
                      : M(t.scrollbar.el, this.classNames.hover))
                  : (M(t.track.el, this.classNames.hover),
                    this.options.autoHide && this.hideScrollbar(e)));
            }),
            (e.prototype.onMouseLeaveForAxis = function (e) {
              void 0 === e && (e = "y"),
                M(this.axis[e].track.el, this.classNames.hover),
                M(this.axis[e].scrollbar.el, this.classNames.hover),
                this.options.autoHide && this.hideScrollbar(e);
            }),
            (e.prototype.onDragStart = function (e, t) {
              void 0 === t && (t = "y");
              var i,
                s = N(this.el),
                r = A(this.el),
                l = this.axis[t].scrollbar,
                o = "y" === t ? e.pageY : e.pageX;
              (this.axis[t].dragOffset =
                o -
                ((null === (i = l.rect) || void 0 === i
                  ? void 0
                  : i[this.axis[t].offsetAttr]) || 0)),
                (this.draggedAxis = t),
                z(this.el, this.classNames.dragging),
                s.addEventListener("mousemove", this.drag, !0),
                s.addEventListener("mouseup", this.onEndDrag, !0),
                null === this.removePreventClickId
                  ? (s.addEventListener("click", this.preventClick, !0),
                    s.addEventListener("dblclick", this.preventClick, !0))
                  : (r.clearTimeout(this.removePreventClickId),
                    (this.removePreventClickId = null));
            }),
            (e.prototype.onTrackClick = function (e, t) {
              var i,
                s,
                r,
                l,
                o = this;
              void 0 === t && (t = "y");
              var n = this.axis[t];
              if (
                this.options.clickOnTrack &&
                n.scrollbar.el &&
                this.contentWrapperEl
              ) {
                e.preventDefault();
                var a = A(this.el);
                this.axis[t].scrollbar.rect =
                  n.scrollbar.el.getBoundingClientRect();
                var c =
                    null !==
                      (s =
                        null === (i = this.axis[t].scrollbar.rect) ||
                        void 0 === i
                          ? void 0
                          : i[this.axis[t].offsetAttr]) && void 0 !== s
                      ? s
                      : 0,
                  h = parseInt(
                    null !==
                      (l =
                        null === (r = this.elStyles) || void 0 === r
                          ? void 0
                          : r[this.axis[t].sizeAttr]) && void 0 !== l
                      ? l
                      : "0px",
                    10
                  ),
                  u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                  d =
                    ("y" === t ? this.mouseY - c : this.mouseX - c) < 0
                      ? -1
                      : 1,
                  p = -1 === d ? u - h : u + h,
                  f = function () {
                    o.contentWrapperEl &&
                      (-1 === d
                        ? u > p &&
                          ((u -= 40),
                          (o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u),
                          a.requestAnimationFrame(f))
                        : u < p &&
                          ((u += 40),
                          (o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u),
                          a.requestAnimationFrame(f)));
                  };
                f();
              }
            }),
            (e.prototype.getContentElement = function () {
              return this.contentEl;
            }),
            (e.prototype.getScrollElement = function () {
              return this.contentWrapperEl;
            }),
            (e.prototype.removeListeners = function () {
              var e = A(this.el);
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
                this.el.removeEventListener(
                  "pointerdown",
                  this.onPointerEvent,
                  !0
                ),
                this.el.removeEventListener("mousemove", this.onMouseMove),
                this.el.removeEventListener("mouseleave", this.onMouseLeave),
                this.contentWrapperEl &&
                  this.contentWrapperEl.removeEventListener(
                    "scroll",
                    this.onScroll
                  ),
                e.removeEventListener("resize", this.onWindowResize),
                this.mutationObserver && this.mutationObserver.disconnect(),
                this.resizeObserver && this.resizeObserver.disconnect(),
                this.onMouseMove.cancel(),
                this.onWindowResize.cancel(),
                this.onStopScrolling.cancel(),
                this.onMouseEntered.cancel();
            }),
            (e.prototype.unMount = function () {
              this.removeListeners();
            }),
            (e.prototype.isWithinBounds = function (e) {
              return (
                this.mouseX >= e.left &&
                this.mouseX <= e.left + e.width &&
                this.mouseY >= e.top &&
                this.mouseY <= e.top + e.height
              );
            }),
            (e.prototype.findChild = function (e, t) {
              var i =
                e.matches ||
                e.webkitMatchesSelector ||
                e.mozMatchesSelector ||
                e.msMatchesSelector;
              return Array.prototype.filter.call(e.children, function (e) {
                return i.call(e, t);
              })[0];
            }),
            (e.rtlHelpers = null),
            (e.defaultOptions = {
              forceVisible: !1,
              clickOnTrack: !0,
              scrollbarMinSize: 25,
              scrollbarMaxSize: 0,
              ariaLabel: "scrollable content",
              classNames: {
                contentEl: "simplebar-content",
                contentWrapper: "simplebar-content-wrapper",
                offset: "simplebar-offset",
                mask: "simplebar-mask",
                wrapper: "simplebar-wrapper",
                placeholder: "simplebar-placeholder",
                scrollbar: "simplebar-scrollbar",
                track: "simplebar-track",
                heightAutoObserverWrapperEl:
                  "simplebar-height-auto-observer-wrapper",
                heightAutoObserverEl: "simplebar-height-auto-observer",
                visible: "simplebar-visible",
                horizontal: "simplebar-horizontal",
                vertical: "simplebar-vertical",
                hover: "simplebar-hover",
                dragging: "simplebar-dragging",
                scrolling: "simplebar-scrolling",
                scrollable: "simplebar-scrollable",
                mouseEntered: "simplebar-mouse-entered",
              },
              scrollableNode: null,
              contentNode: null,
              autoHide: !0,
            }),
            (e.getOptions = W),
            (e.helpers = R),
            e
          );
        })(),
        T = function () {
          return (T =
            Object.assign ||
            function (e) {
              for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        V = s.forwardRef(function (e, t) {
          var i = e.children,
            r = e.scrollableNodeProps,
            l = void 0 === r ? {} : r,
            o = (function (e, t) {
              var i = {};
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) &&
                  0 > t.indexOf(s) &&
                  (i[s] = e[s]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var r = 0, s = Object.getOwnPropertySymbols(e);
                  r < s.length;
                  r++
                )
                  0 > t.indexOf(s[r]) &&
                    Object.prototype.propertyIsEnumerable.call(e, s[r]) &&
                    (i[s[r]] = e[s[r]]);
              return i;
            })(e, ["children", "scrollableNodeProps"]),
            n = s.useRef(),
            a = s.useRef(),
            c = s.useRef(),
            h = {},
            u = {};
          Object.keys(o).forEach(function (e) {
            Object.prototype.hasOwnProperty.call(C.defaultOptions, e)
              ? (h[e] = o[e])
              : (u[e] = o[e]);
          });
          var d = T(T({}, C.defaultOptions.classNames), h.classNames),
            p = T(T({}, l), {
              className: ""
                .concat(d.contentWrapper)
                .concat(l.className ? " ".concat(l.className) : ""),
              tabIndex: 0,
              role: "region",
              "aria-label": h.ariaLabel || C.defaultOptions.ariaLabel,
            });
          return (
            s.useEffect(function () {
              var e;
              return (
                (a.current = p.ref ? p.ref.current : a.current),
                n.current &&
                  ((e = new C(
                    n.current,
                    T(
                      T(T({}, h), a.current && { scrollableNode: a.current }),
                      c.current && { contentNode: c.current }
                    )
                  )),
                  "function" == typeof t ? t(e) : t && (t.current = e)),
                function () {
                  null == e || e.unMount(),
                    (e = null),
                    "function" == typeof t && t(null);
                }
              );
            }, []),
            s.createElement(
              "div",
              T({ "data-simplebar": "init", ref: n }, u),
              s.createElement(
                "div",
                { className: d.wrapper },
                s.createElement(
                  "div",
                  { className: d.heightAutoObserverWrapperEl },
                  s.createElement("div", { className: d.heightAutoObserverEl })
                ),
                s.createElement(
                  "div",
                  { className: d.mask },
                  s.createElement(
                    "div",
                    { className: d.offset },
                    "function" == typeof i
                      ? i({
                          scrollableNodeRef: a,
                          scrollableNodeProps: T(T({}, p), { ref: a }),
                          contentNodeRef: c,
                          contentNodeProps: { className: d.contentEl, ref: c },
                        })
                      : s.createElement(
                          "div",
                          T({}, p),
                          s.createElement("div", { className: d.contentEl }, i)
                        )
                  )
                ),
                s.createElement("div", { className: d.placeholder })
              ),
              s.createElement(
                "div",
                { className: "".concat(d.track, " simplebar-horizontal") },
                s.createElement("div", { className: d.scrollbar })
              ),
              s.createElement(
                "div",
                { className: "".concat(d.track, " simplebar-vertical") },
                s.createElement("div", { className: d.scrollbar })
              )
            )
          );
        });
      V.displayName = "SimpleBar";
    },
  },
]);
