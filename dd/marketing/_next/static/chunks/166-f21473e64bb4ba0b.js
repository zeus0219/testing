"use strict";

(self.webpackChunk_N_E_ = self.webpackChunk_N_E_ || []).push([[166], {
  47744: function (t, e, r) {
    t.exports = r(40398);
  },
  23472: function (t, e, r) {
    "use strict";

    var n = r(4079),
      i = r(9534),
      o = r(26509),
      s = r(98056),
      a = r(36676),
      u = ["projectId", "dataset", "imageOptions", "ignoreUnknownTypes"],
      c = {
        imageOptions: {},
        ignoreUnknownTypes: !0
      };
    function l(t) {
      return "block" === t._type && t.listItem;
    }
    t.exports = function (t, e, r, h) {
      var f = n({}, c, e),
        p = o(s(Array.isArray(f.blocks) ? f.blocks : [f.blocks]), f.listNestMode),
        d = a(r, f.serializers || {}),
        y = u.reduce(function (t, e) {
          var r = f[e];
          return void 0 !== r && (t[e] = r), t;
        }, {}),
        m = !!f.renderContainerOnSingleChild,
        g = p.map(function e(r, n, o, s) {
          var a, u, c, f, p, m, g, v, b;
          return "list" === r._type && r.listItem ? (a = r.listItem, u = r.level, c = r._key, f = r.children.map(e), t(d.list, {
            key: c,
            level: u,
            type: a,
            options: y
          }, f)) : l(r) ? (p = function (t, e) {
            for (var r = 0, n = 0; n < e.length && e[n] !== t; n++) l(e[n]) && r++;
            return r;
          }(r, o), m = r._key, g = i(r).map(e), t(d.listItem, {
            node: r,
            serializers: d,
            index: p,
            key: m,
            options: y
          }, g)) : "string" == typeof r || r.marks || "span" === r._type ? h(r, d, n, {
            serializeNode: e
          }) : (v = i(r).map(function (t, r, n) {
            return e(t, r, n, !0);
          }), b = {
            key: r._key || "block-".concat(n),
            node: r,
            isInline: s,
            serializers: d,
            options: y
          }, t(d.block, b, v));
        });
      if (m || g.length > 1) {
        var v = f.className ? {
          className: f.className
        } : {};
        return t(d.container, v, g);
      }
      return g[0] ? g[0] : "function" == typeof d.empty ? t(d.empty) : d.empty;
    };
  },
  9534: function (t) {
    "use strict";

    var e = ["strong", "em", "code", "underline", "strike-through"];
    function r(t, e, r) {
      if (!t.marks || 0 === t.marks.length) return t.marks || [];
      var i = n.bind(null, t.marks.reduce(function (t, n) {
        t[n] = t[n] ? t[n] + 1 : 1;
        for (var i = e + 1; i < r.length; i++) {
          var o = r[i];
          if (o.marks && Array.isArray(o.marks) && -1 !== o.marks.indexOf(n)) t[n]++;else break;
        }
        return t;
      }, {}));
      return t.marks.slice().sort(i);
    }
    function n(t, r, n) {
      var i = t[r] || 0,
        o = t[n] || 0;
      if (i !== o) return o - i;
      var s = e.indexOf(r),
        a = e.indexOf(n);
      return s !== a ? s - a : r < n ? -1 : r > n ? 1 : 0;
    }
    t.exports = function (t) {
      var e = t.children,
        n = t.markDefs;
      if (!e || !e.length) return [];
      var i = e.map(r),
        o = {
          _type: "span",
          children: []
        },
        s = [o];
      return e.forEach(function (t, e) {
        var r = i[e];
        if (!r) {
          s[s.length - 1].children.push(t);
          return;
        }
        var o = 1;
        if (s.length > 1) for (; o < s.length; o++) {
          var a = s[o].markKey,
            u = r.indexOf(a);
          if (-1 === u) break;
          r.splice(u, 1);
        }
        var c = function (t) {
          for (var e = t.length - 1; e >= 0; e--) {
            var r = t[e];
            if ("span" === r._type && r.children) return r;
          }
        }(s = s.slice(0, o));
        if (r.forEach(function (e) {
          var r = {
            _type: "span",
            _key: t._key,
            children: [],
            mark: n.find(function (t) {
              return t._key === e;
            }) || e,
            markKey: e
          };
          c.children.push(r), s.push(r), c = r;
        }), "span" === t._type && "string" == typeof t.text && (Array.isArray(t.marks) || void 0 === t.marks)) {
          for (var l = t.text.split("\n"), h = l.length; h-- > 1;) l.splice(h, 0, "\n");
          c.children = c.children.concat(l);
        } else c.children = c.children.concat(t);
      }), o.children;
    };
  },
  98056: function (t, e, r) {
    "use strict";

    var n = r(4079);
    t.exports = function (t) {
      return t.map(function (t) {
        return t._key ? t : n({
          _key: function (t) {
            var e = 0,
              r = t.length;
            if (0 === r) return e;
            for (var n = 0; n < r; n++) e = (e << 5) - e + t.charCodeAt(n), e &= e;
            return e;
          }(JSON.stringify(t)).toString(36).replace(/[^A-Za-z0-9]/g, "")
        }, t);
      });
    };
  },
  98317: function (t, e, r) {
    "use strict";

    var n = r(50855),
      i = r(40563),
      o = r(4079),
      s = encodeURIComponent,
      a = "You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(n("block-content-image-materializing")),
      u = function (t) {
        var e = t.imageOptions,
          r = Object.keys(e);
        if (!r.length) return "";
        var n = r.map(function (t) {
          return "".concat(s(t), "=").concat(s(e[t]));
        });
        return "?".concat(n.join("&"));
      };
    t.exports = function (t) {
      var e = t.node,
        r = t.options,
        n = r.projectId,
        s = r.dataset,
        c = e.asset;
      if (!c) throw Error("Image does not have required `asset` property");
      if (c.url) return c.url + u(r);
      if (!n || !s) throw Error(a);
      if (!c._ref) throw Error("Invalid image reference in block, no `_ref` found on `asset`");
      return i(o({
        projectId: n,
        dataset: s
      }, r.imageOptions || {})).image(e).toString();
    };
  },
  40398: function (t, e, r) {
    "use strict";

    var n = r(76553),
      i = r(23472),
      o = r(98317),
      s = r(36676);
    t.exports = {
      blocksToNodes: function (t, e, r, o) {
        if (r) return i(t, e, r, o);
        var s = n(t);
        return i(t, e, s.defaultSerializers, s.serializeSpan);
      },
      getSerializers: n,
      getImageUrl: o,
      mergeSerializers: s
    };
  },
  36676: function (t, e, r) {
    "use strict";

    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }
    var i = r(4079);
    t.exports = function (t, e) {
      return Object.keys(t).reduce(function (r, o) {
        var s = n(t[o]);
        return "function" === s ? r[o] = void 0 !== e[o] ? e[o] : t[o] : "object" === s ? r[o] = i({}, t[o], e[o]) : r[o] = void 0 === e[o] ? t[o] : e[o], r;
      }, {});
    };
  },
  26509: function (t, e, r) {
    "use strict";

    var n = r(4079);
    function i(t) {
      return {
        _type: "list",
        _key: "".concat(t._key, "-parent"),
        level: t.level,
        listItem: t.listItem,
        children: [t]
      };
    }
    function o(t) {
      return t.children && t.children[t.children.length - 1];
    }
    function s(t, e) {
      var r = "string" == typeof e.listItem;
      if ("list" === t._type && t.level === e.level && r && t.listItem === e.listItem) return t;
      var n = o(t);
      return !!n && s(n, e);
    }
    t.exports = function (t) {
      for (var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", a = [], u = 0; u < t.length; u++) {
        var c,
          l = t[u];
        if (!l.listItem) {
          a.push(l), e = null;
          continue;
        }
        if (!e) {
          e = i(l), a.push(e);
          continue;
        }
        if (c = e, l.level === c.level && l.listItem === c.listItem) {
          e.children.push(l);
          continue;
        }
        if (l.level > e.level) {
          var h = i(l);
          if ("html" === r) {
            var f = o(e),
              p = n({}, f, {
                children: f.children.concat(h)
              });
            e.children[e.children.length - 1] = p;
          } else e.children.push(h);
          e = h;
          continue;
        }
        if (l.level < e.level) {
          var d = s(a[a.length - 1], l);
          if (d) {
            (e = d).children.push(l);
            continue;
          }
          e = i(l), a.push(e);
          continue;
        }
        if (l.listItem !== e.listItem) {
          var y = s(a[a.length - 1], {
            level: l.level
          });
          if (y && y.listItem === l.listItem) {
            (e = y).children.push(l);
            continue;
          }
          e = i(l), a.push(e);
          continue;
        }
        console.warn("Unknown state encountered for block", l), a.push(l);
      }
      return a;
    };
  },
  76553: function (t, e, r) {
    "use strict";

    var n = r(4079),
      i = r(98317);
    t.exports = function (t, e) {
      var r = e || {
        useDashedStyles: !1
      };
      function o(e, r) {
        return t(e, null, r.children);
      }
      return {
        defaultSerializers: {
          types: {
            block: function (e) {
              var r = e.node.style || "normal";
              return /^h\d/.test(r) ? t(r, null, e.children) : "blockquote" === r ? t("blockquote", null, e.children) : t("p", null, e.children);
            },
            image: function (e) {
              if (!e.node.asset) return null;
              var r = t("img", {
                src: i(e)
              });
              return e.isInline ? r : t("figure", null, r);
            }
          },
          marks: {
            strong: o.bind(null, "strong"),
            em: o.bind(null, "em"),
            code: o.bind(null, "code"),
            underline: function (e) {
              return t("span", {
                style: r.useDashedStyles ? {
                  "text-decoration": "underline"
                } : {
                  textDecoration: "underline"
                }
              }, e.children);
            },
            "strike-through": function (e) {
              return t("del", null, e.children);
            },
            link: function (e) {
              return t("a", {
                href: e.mark.href
              }, e.children);
            }
          },
          list: function (e) {
            return t("bullet" === e.type ? "ul" : "ol", null, e.children);
          },
          listItem: function (e) {
            var r = e.node.style && "normal" !== e.node.style ? t(e.serializers.types.block, e, e.children) : e.children;
            return t("li", null, r);
          },
          block: function (e) {
            var r = e.node,
              n = e.serializers,
              i = e.options,
              o = e.isInline,
              s = e.children,
              a = r._type,
              u = n.types[a];
            if (!u) {
              if (i.ignoreUnknownTypes) return console.warn('Unknown block type "'.concat(a, '", please specify a serializer for it in the `serializers.types` prop')), t(n.unknownType, {
                node: r,
                options: i,
                isInline: o
              }, s);
              throw Error('Unknown block type "'.concat(a, '", please specify a serializer for it in the `serializers.types` prop'));
            }
            return t(u, {
              node: r,
              options: i,
              isInline: o
            }, s);
          },
          span: function (e) {
            var r = e.node,
              n = r.mark,
              i = r.children,
              o = "string" == typeof n ? n : n._type,
              s = e.serializers.marks[o];
            return s ? t(s, e.node, i) : (console.warn('Unknown mark type "'.concat(o, '", please specify a serializer for it in the `serializers.marks` prop')), t(e.serializers.unknownMark, null, i));
          },
          hardBreak: function () {
            return t("br");
          },
          unknownType: function (e) {
            return t("div", {
              style: {
                display: "none"
              }
            }, 'Unknown block type "'.concat(e.node._type, '", please specify a serializer for it in the `serializers.types` prop'));
          },
          unknownMark: "span",
          container: "div",
          text: void 0,
          empty: ""
        },
        serializeSpan: function (e, r, i, o) {
          if ("\n" === e && r.hardBreak) return t(r.hardBreak, {
            key: "hb-".concat(i)
          });
          if ("string" == typeof e) return r.text ? t(r.text, {
            key: "text-".concat(i)
          }, e) : e;
          e.children && (s = {
            children: e.children.map(function (t, r) {
              return o.serializeNode(t, r, e.children, !0);
            })
          });
          var s,
            a = n({}, e, s);
          return t(r.span, {
            key: e._key || "span-".concat(i),
            node: a,
            serializers: r
          });
        }
      };
    };
  },
  50855: function (t) {
    t.exports = function (t) {
      return "https://docs.sanity.io/help/" + t;
    };
  },
  40563: function (t) {
    t.exports = function () {
      function t() {
        return (t = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }).apply(this, arguments);
      }
      function e(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
      function n(t) {
        return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      var i = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]],
        o = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
        s = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
        a = ["format"],
        u = function () {
          function u(e, r) {
            this.options = e ? t(t({}, e.options || {}), r || {}) : t({}, r || {});
          }
          var c = u.prototype;
          return c.withOptions = function (r) {
            var n = r.baseUrl || this.options.baseUrl,
              o = {
                baseUrl: n
              };
            for (var s in r) r.hasOwnProperty(s) && (o[function (t) {
              for (var r, n = function (t) {
                  var r = 0;
                  if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function (t, r) {
                      if (t) {
                        if ("string" == typeof t) return e(t, r);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e(t, r);
                      }
                    }(t))) return function () {
                      return r >= t.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: t[r++]
                      };
                    };
                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }
                  return (r = t[Symbol.iterator]()).next.bind(r);
                }(i); !(r = n()).done;) {
                var o = r.value,
                  s = o[0],
                  a = o[1];
                if (t === s || t === a) return s;
              }
              return t;
            }(s)] = r[s]);
            return new u(this, t({
              baseUrl: n
            }, o));
          }, c.image = function (t) {
            return this.withOptions({
              source: t
            });
          }, c.dataset = function (t) {
            return this.withOptions({
              dataset: t
            });
          }, c.projectId = function (t) {
            return this.withOptions({
              projectId: t
            });
          }, c.bg = function (t) {
            return this.withOptions({
              bg: t
            });
          }, c.dpr = function (t) {
            return this.withOptions({
              dpr: t
            });
          }, c.width = function (t) {
            return this.withOptions({
              width: t
            });
          }, c.height = function (t) {
            return this.withOptions({
              height: t
            });
          }, c.focalPoint = function (t, e) {
            return this.withOptions({
              focalPoint: {
                x: t,
                y: e
              }
            });
          }, c.maxWidth = function (t) {
            return this.withOptions({
              maxWidth: t
            });
          }, c.minWidth = function (t) {
            return this.withOptions({
              minWidth: t
            });
          }, c.maxHeight = function (t) {
            return this.withOptions({
              maxHeight: t
            });
          }, c.minHeight = function (t) {
            return this.withOptions({
              minHeight: t
            });
          }, c.size = function (t, e) {
            return this.withOptions({
              width: t,
              height: e
            });
          }, c.blur = function (t) {
            return this.withOptions({
              blur: t
            });
          }, c.sharpen = function (t) {
            return this.withOptions({
              sharpen: t
            });
          }, c.rect = function (t, e, r, n) {
            return this.withOptions({
              rect: {
                left: t,
                top: e,
                width: r,
                height: n
              }
            });
          }, c.format = function (t) {
            return this.withOptions({
              format: t
            });
          }, c.invert = function (t) {
            return this.withOptions({
              invert: t
            });
          }, c.orientation = function (t) {
            return this.withOptions({
              orientation: t
            });
          }, c.quality = function (t) {
            return this.withOptions({
              quality: t
            });
          }, c.forceDownload = function (t) {
            return this.withOptions({
              download: t
            });
          }, c.flipHorizontal = function () {
            return this.withOptions({
              flipHorizontal: !0
            });
          }, c.flipVertical = function () {
            return this.withOptions({
              flipVertical: !0
            });
          }, c.ignoreImageParams = function () {
            return this.withOptions({
              ignoreImageParams: !0
            });
          }, c.fit = function (t) {
            if (-1 === o.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
            return this.withOptions({
              fit: t
            });
          }, c.crop = function (t) {
            if (-1 === s.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
            return this.withOptions({
              crop: t
            });
          }, c.saturation = function (t) {
            return this.withOptions({
              saturation: t
            });
          }, c.auto = function (t) {
            if (-1 === a.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
            return this.withOptions({
              auto: t
            });
          }, c.pad = function (t) {
            return this.withOptions({
              pad: t
            });
          }, c.url = function () {
            return function (e) {
              var o = t({}, e || {}),
                s = o.source;
              delete o.source;
              var a = function (e) {
                var r;
                if (!e) return null;
                if ("string" == typeof e && /^https?:\/\//.test("" + e)) r = {
                  asset: {
                    _ref: n(e)
                  }
                };else if ("string" == typeof e) r = {
                  asset: {
                    _ref: e
                  }
                };else if (e && "string" == typeof e._ref) r = {
                  asset: e
                };else if (e && "string" == typeof e._id) r = {
                  asset: {
                    _ref: e._id || ""
                  }
                };else if (e && e.asset && "string" == typeof e.asset.url) r = {
                  asset: {
                    _ref: n(e.asset.url)
                  }
                };else {
                  if ("object" != typeof e.asset) return null;
                  r = e;
                }
                return e.crop && (r.crop = e.crop), e.hotspot && (r.hotspot = e.hotspot), function (e) {
                  if (e.crop && e.hotspot) return e;
                  var r = t({}, e);
                  return r.crop || (r.crop = {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0
                  }), r.hotspot || (r.hotspot = {
                    x: 0.5,
                    y: 0.5,
                    height: 1,
                    width: 1
                  }), r;
                }(r);
              }(s);
              if (!a) return null;
              var u = function (t) {
                  var e = t.split("-"),
                    n = e[1],
                    i = e[2],
                    o = e[3];
                  if (!n || !i || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                  var s = i.split("x"),
                    a = s[0],
                    u = s[1],
                    c = +a,
                    l = +u;
                  if (!(isFinite(c) && isFinite(l))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                  return {
                    id: n,
                    width: c,
                    height: l,
                    format: o
                  };
                }(a.asset._ref || a.asset._id || ""),
                c = Math.round(a.crop.left * u.width),
                l = Math.round(a.crop.top * u.height),
                h = {
                  left: c,
                  top: l,
                  width: Math.round(u.width - a.crop.right * u.width - c),
                  height: Math.round(u.height - a.crop.bottom * u.height - l)
                },
                f = a.hotspot.height * u.height / 2,
                p = a.hotspot.width * u.width / 2,
                d = a.hotspot.x * u.width,
                y = a.hotspot.y * u.height;
              return o.rect || o.focalPoint || o.ignoreImageParams || o.crop || (o = t(t({}, o), function (t, e) {
                var r,
                  n = e.width,
                  i = e.height;
                if (!(n && i)) return {
                  width: n,
                  height: i,
                  rect: t.crop
                };
                var o = t.crop,
                  s = t.hotspot,
                  a = n / i;
                if (o.width / o.height > a) {
                  var u = o.height,
                    c = u * a,
                    l = o.top,
                    h = (s.right - s.left) / 2 + s.left - c / 2;
                  h < o.left ? h = o.left : h + c > o.left + o.width && (h = o.left + o.width - c), r = {
                    left: Math.round(h),
                    top: Math.round(l),
                    width: Math.round(c),
                    height: Math.round(u)
                  };
                } else {
                  var f = o.width,
                    p = f / a,
                    d = o.left,
                    y = (s.bottom - s.top) / 2 + s.top - p / 2;
                  y < o.top ? y = o.top : y + p > o.top + o.height && (y = o.top + o.height - p), r = {
                    left: Math.max(0, Math.floor(d)),
                    top: Math.max(0, Math.floor(y)),
                    width: Math.round(f),
                    height: Math.round(p)
                  };
                }
                return {
                  width: n,
                  height: i,
                  rect: r
                };
              }({
                crop: h,
                hotspot: {
                  left: d - p,
                  top: y - f,
                  right: d + p,
                  bottom: y + f
                }
              }, o))), function (t) {
                var e = t.baseUrl || "https://cdn.sanity.io",
                  r = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format,
                  n = e + "/images/" + t.projectId + "/" + t.dataset + "/" + r,
                  o = [];
                if (t.rect) {
                  var s = t.rect,
                    a = s.left,
                    u = s.top,
                    c = s.width,
                    l = s.height;
                  (0 !== a || 0 !== u || l !== t.asset.height || c !== t.asset.width) && o.push("rect=" + a + "," + u + "," + c + "," + l);
                }
                t.bg && o.push("bg=" + t.bg), t.focalPoint && (o.push("fp-x=" + t.focalPoint.x), o.push("fp-y=" + t.focalPoint.y));
                var h = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                return (h && o.push("flip=" + h), i.forEach(function (e) {
                  var r = e[0],
                    n = e[1];
                  void 0 !== t[r] ? o.push(n + "=" + encodeURIComponent(t[r])) : void 0 !== t[n] && o.push(n + "=" + encodeURIComponent(t[n]));
                }), 0 === o.length) ? n : n + "?" + o.join("&");
              }(t(t({}, o), {}, {
                asset: u
              }));
            }(this.options);
          }, c.toString = function () {
            return this.url();
          }, u;
        }();
      return function (t) {
        if (t && "object" == typeof t.clientConfig) {
          var e = t.clientConfig,
            r = e.apiHost,
            n = e.projectId,
            i = e.dataset;
          return new u(null, {
            baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
            projectId: n,
            dataset: i
          });
        }
        return new u(null, t);
      };
    }();
  },
  58446: function (t, e, r) {
    "use strict";

    var n = r(2784),
      i = r(13980),
      o = r(47744),
      s = r(40711),
      a = s.serializers,
      u = s.serializeSpan,
      c = s.renderProps,
      l = o.getImageUrl,
      h = o.blocksToNodes,
      f = o.mergeSerializers,
      p = n.createElement,
      d = function t(e) {
        var r = f(t.defaultSerializers, e.serializers);
        return h(p, Object.assign({}, c, e, {
          serializers: r,
          blocks: e.blocks || []
        }), a, u);
      };
    d.defaultSerializers = a, d.getImageUrl = l, d.propTypes = {
      className: i.string,
      renderContainerOnSingleChild: i.bool,
      ignoreUnknownTypes: i.bool,
      projectId: i.string,
      dataset: i.string,
      imageOptions: i.object,
      serializers: i.shape({
        types: i.object,
        marks: i.object,
        list: i.func,
        listItem: i.func,
        block: i.func,
        span: i.func
      }),
      blocks: i.oneOfType([i.arrayOf(i.shape({
        _type: i.string.isRequired
      })), i.shape({
        _type: i.string.isRequired
      })]).isRequired
    }, d.defaultProps = {
      ignoreUnknownTypes: !0,
      renderContainerOnSingleChild: !1,
      serializers: {},
      imageOptions: {}
    }, t.exports = d;
  },
  40711: function (t, e, r) {
    "use strict";

    var n = r(2784),
      i = (0, r(47744).getSerializers)(n.createElement),
      o = i.defaultSerializers,
      s = i.serializeSpan;
    t.exports = {
      serializeSpan: s,
      serializers: o,
      renderProps: {
        nestMarks: !0
      }
    };
  },
  53116: function (t) {
    t.exports = function () {
      function t() {
        return (t = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }).apply(this, arguments);
      }
      function e(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
      function n(t) {
        return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      var i = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]],
        o = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
        s = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
        a = ["format"],
        u = function () {
          function u(e, r) {
            this.options = void 0, this.options = e ? t({}, e.options || {}, r || {}) : t({}, r || {});
          }
          var c = u.prototype;
          return c.withOptions = function (r) {
            var n = r.baseUrl || this.options.baseUrl,
              o = {
                baseUrl: n
              };
            for (var s in r) r.hasOwnProperty(s) && (o[function (t) {
              for (var r, n = function (t, r) {
                  var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                  if (n) return (n = n.call(t)).next.bind(n);
                  if (Array.isArray(t) || (n = function (t, r) {
                    if (t) {
                      if ("string" == typeof t) return e(t, r);
                      var n = Object.prototype.toString.call(t).slice(8, -1);
                      if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e(t, r);
                    }
                  }(t))) {
                    n && (t = n);
                    var i = 0;
                    return function () {
                      return i >= t.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: t[i++]
                      };
                    };
                  }
                  throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }(i); !(r = n()).done;) {
                var o = r.value,
                  s = o[0],
                  a = o[1];
                if (t === s || t === a) return s;
              }
              return t;
            }(s)] = r[s]);
            return new u(this, t({
              baseUrl: n
            }, o));
          }, c.image = function (t) {
            return this.withOptions({
              source: t
            });
          }, c.dataset = function (t) {
            return this.withOptions({
              dataset: t
            });
          }, c.projectId = function (t) {
            return this.withOptions({
              projectId: t
            });
          }, c.bg = function (t) {
            return this.withOptions({
              bg: t
            });
          }, c.dpr = function (t) {
            return this.withOptions(t && 1 !== t ? {
              dpr: t
            } : {});
          }, c.width = function (t) {
            return this.withOptions({
              width: t
            });
          }, c.height = function (t) {
            return this.withOptions({
              height: t
            });
          }, c.focalPoint = function (t, e) {
            return this.withOptions({
              focalPoint: {
                x: t,
                y: e
              }
            });
          }, c.maxWidth = function (t) {
            return this.withOptions({
              maxWidth: t
            });
          }, c.minWidth = function (t) {
            return this.withOptions({
              minWidth: t
            });
          }, c.maxHeight = function (t) {
            return this.withOptions({
              maxHeight: t
            });
          }, c.minHeight = function (t) {
            return this.withOptions({
              minHeight: t
            });
          }, c.size = function (t, e) {
            return this.withOptions({
              width: t,
              height: e
            });
          }, c.blur = function (t) {
            return this.withOptions({
              blur: t
            });
          }, c.sharpen = function (t) {
            return this.withOptions({
              sharpen: t
            });
          }, c.rect = function (t, e, r, n) {
            return this.withOptions({
              rect: {
                left: t,
                top: e,
                width: r,
                height: n
              }
            });
          }, c.format = function (t) {
            return this.withOptions({
              format: t
            });
          }, c.invert = function (t) {
            return this.withOptions({
              invert: t
            });
          }, c.orientation = function (t) {
            return this.withOptions({
              orientation: t
            });
          }, c.quality = function (t) {
            return this.withOptions({
              quality: t
            });
          }, c.forceDownload = function (t) {
            return this.withOptions({
              download: t
            });
          }, c.flipHorizontal = function () {
            return this.withOptions({
              flipHorizontal: !0
            });
          }, c.flipVertical = function () {
            return this.withOptions({
              flipVertical: !0
            });
          }, c.ignoreImageParams = function () {
            return this.withOptions({
              ignoreImageParams: !0
            });
          }, c.fit = function (t) {
            if (-1 === o.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
            return this.withOptions({
              fit: t
            });
          }, c.crop = function (t) {
            if (-1 === s.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
            return this.withOptions({
              crop: t
            });
          }, c.saturation = function (t) {
            return this.withOptions({
              saturation: t
            });
          }, c.auto = function (t) {
            if (-1 === a.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
            return this.withOptions({
              auto: t
            });
          }, c.pad = function (t) {
            return this.withOptions({
              pad: t
            });
          }, c.url = function () {
            return function (e) {
              var o = t({}, e || {}),
                s = o.source;
              delete o.source;
              var a = function (e) {
                var r;
                if (!e) return null;
                if ("string" == typeof e && /^https?:\/\//.test("" + e)) r = {
                  asset: {
                    _ref: n(e)
                  }
                };else if ("string" == typeof e) r = {
                  asset: {
                    _ref: e
                  }
                };else if (e && "string" == typeof e._ref) r = {
                  asset: e
                };else if (e && "string" == typeof e._id) r = {
                  asset: {
                    _ref: e._id || ""
                  }
                };else if (e && e.asset && "string" == typeof e.asset.url) r = {
                  asset: {
                    _ref: n(e.asset.url)
                  }
                };else {
                  if ("object" != typeof e.asset) return null;
                  r = t({}, e);
                }
                return e.crop && (r.crop = e.crop), e.hotspot && (r.hotspot = e.hotspot), function (e) {
                  if (e.crop && e.hotspot) return e;
                  var r = t({}, e);
                  return r.crop || (r.crop = {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0
                  }), r.hotspot || (r.hotspot = {
                    x: 0.5,
                    y: 0.5,
                    height: 1,
                    width: 1
                  }), r;
                }(r);
              }(s);
              if (!a) throw Error("Unable to resolve image URL from source (" + JSON.stringify(s) + ")");
              var u = function (t) {
                  var e = t.split("-"),
                    n = e[1],
                    i = e[2],
                    o = e[3];
                  if (!n || !i || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                  var s = i.split("x"),
                    a = s[0],
                    u = s[1],
                    c = +a,
                    l = +u;
                  if (!(isFinite(c) && isFinite(l))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                  return {
                    id: n,
                    width: c,
                    height: l,
                    format: o
                  };
                }(a.asset._ref || a.asset._id || ""),
                c = Math.round(a.crop.left * u.width),
                l = Math.round(a.crop.top * u.height),
                h = {
                  left: c,
                  top: l,
                  width: Math.round(u.width - a.crop.right * u.width - c),
                  height: Math.round(u.height - a.crop.bottom * u.height - l)
                },
                f = a.hotspot.height * u.height / 2,
                p = a.hotspot.width * u.width / 2,
                d = a.hotspot.x * u.width,
                y = a.hotspot.y * u.height;
              return o.rect || o.focalPoint || o.ignoreImageParams || o.crop || (o = t({}, o, function (t, e) {
                var r,
                  n = e.width,
                  i = e.height;
                if (!(n && i)) return {
                  width: n,
                  height: i,
                  rect: t.crop
                };
                var o = t.crop,
                  s = t.hotspot,
                  a = n / i;
                if (o.width / o.height > a) {
                  var u = Math.round(o.height),
                    c = Math.round(u * a),
                    l = Math.max(0, Math.round(o.top)),
                    h = Math.max(0, Math.round(Math.round((s.right - s.left) / 2 + s.left) - c / 2));
                  h < o.left ? h = o.left : h + c > o.left + o.width && (h = o.left + o.width - c), r = {
                    left: h,
                    top: l,
                    width: c,
                    height: u
                  };
                } else {
                  var f = o.width,
                    p = Math.round(f / a),
                    d = Math.max(0, Math.round(o.left)),
                    y = Math.max(0, Math.round(Math.round((s.bottom - s.top) / 2 + s.top) - p / 2));
                  y < o.top ? y = o.top : y + p > o.top + o.height && (y = o.top + o.height - p), r = {
                    left: d,
                    top: y,
                    width: f,
                    height: p
                  };
                }
                return {
                  width: n,
                  height: i,
                  rect: r
                };
              }({
                crop: h,
                hotspot: {
                  left: d - p,
                  top: y - f,
                  right: d + p,
                  bottom: y + f
                }
              }, o))), function (t) {
                var e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                  r = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format,
                  n = e + "/images/" + t.projectId + "/" + t.dataset + "/" + r,
                  o = [];
                if (t.rect) {
                  var s = t.rect,
                    a = s.left,
                    u = s.top,
                    c = s.width,
                    l = s.height;
                  (0 !== a || 0 !== u || l !== t.asset.height || c !== t.asset.width) && o.push("rect=" + a + "," + u + "," + c + "," + l);
                }
                t.bg && o.push("bg=" + t.bg), t.focalPoint && (o.push("fp-x=" + t.focalPoint.x), o.push("fp-y=" + t.focalPoint.y));
                var h = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                return (h && o.push("flip=" + h), i.forEach(function (e) {
                  var r = e[0],
                    n = e[1];
                  void 0 !== t[r] ? o.push(n + "=" + encodeURIComponent(t[r])) : void 0 !== t[n] && o.push(n + "=" + encodeURIComponent(t[n]));
                }), 0 === o.length) ? n : n + "?" + o.join("&");
              }(t({}, o, {
                asset: u
              }));
            }(this.options);
          }, c.toString = function () {
            return this.url();
          }, u;
        }();
      return function (t) {
        if (t && "config" in t && "function" == typeof t.config) {
          var e = t.config(),
            r = e.apiHost,
            n = e.projectId,
            i = e.dataset;
          return new u(null, {
            baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
            projectId: n,
            dataset: i
          });
        }
        if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
          var o = t.clientConfig,
            s = o.apiHost,
            a = o.projectId,
            c = o.dataset;
          return new u(null, {
            baseUrl: (s || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
            projectId: a,
            dataset: c
          });
        }
        return new u(null, t);
      };
    }();
  },
  65881: function (t) {
    function e(t, e, r, n) {
      return Math.round(t / r) + " " + n + (e >= 1.5 * r ? "s" : "");
    }
    t.exports = function (t, r) {
      r = r || {};
      var n,
        i,
        o = typeof t;
      if ("string" === o && t.length > 0) return function (t) {
        if (!((t = String(t)).length > 100)) {
          var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
          if (e) {
            var r = parseFloat(e[1]);
            switch ((e[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return 315576e5 * r;
              case "weeks":
              case "week":
              case "w":
                return 6048e5 * r;
              case "days":
              case "day":
              case "d":
                return 864e5 * r;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return 36e5 * r;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return 6e4 * r;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return 1e3 * r;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return r;
              default:
                return;
            }
          }
        }
      }(t);
      if ("number" === o && isFinite(t)) return r.long ? (n = Math.abs(t)) >= 864e5 ? e(t, n, 864e5, "day") : n >= 36e5 ? e(t, n, 36e5, "hour") : n >= 6e4 ? e(t, n, 6e4, "minute") : n >= 1e3 ? e(t, n, 1e3, "second") : t + " ms" : (i = Math.abs(t)) >= 864e5 ? Math.round(t / 864e5) + "d" : i >= 36e5 ? Math.round(t / 36e5) + "h" : i >= 6e4 ? Math.round(t / 6e4) + "m" : i >= 1e3 ? Math.round(t / 1e3) + "s" : t + "ms";
      throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
  },
  25130: function (t, e, r) {
    let n;
    var i = r(34406);
    e.formatArgs = function (e) {
      if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
      let r = "color: " + this.color;
      e.splice(1, 0, r, "color: inherit");
      let n = 0,
        i = 0;
      e[0].replace(/%[a-zA-Z%]/g, t => {
        "%%" !== t && (n++, "%c" === t && (i = n));
      }), e.splice(i, 0, r);
    }, e.save = function (t) {
      try {
        t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
      } catch (t) {}
    }, e.load = function () {
      let t;
      try {
        t = e.storage.getItem("debug");
      } catch (t) {}
      return !t && void 0 !== i && "env" in i && (t = i.env.DEBUG), t;
    }, e.useColors = function () {
      return "undefined" != typeof window && !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }, e.storage = function () {
      try {
        return localStorage;
      } catch (t) {}
    }(), e.destroy = (n = !1, () => {
      n || (n = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    }), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.log = console.debug || console.log || (() => {}), t.exports = r(87123)(e);
    let {
      formatters: o
    } = t.exports;
    o.j = function (t) {
      try {
        return JSON.stringify(t);
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message;
      }
    };
  },
  87123: function (t, e, r) {
    t.exports = function (t) {
      function e(t) {
        let r, i, o;
        let s = null;
        function a() {
          for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
            t[_key] = arguments[_key];
          }
          if (!a.enabled) return;
          let n = Number(new Date()),
            i = n - (r || n);
          a.diff = i, a.prev = r, a.curr = n, r = n, t[0] = e.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
          let o = 0;
          t[0] = t[0].replace(/%([a-zA-Z%])/g, (r, n) => {
            if ("%%" === r) return "%";
            o++;
            let i = e.formatters[n];
            if ("function" == typeof i) {
              let e = t[o];
              r = i.call(a, e), t.splice(o, 1), o--;
            }
            return r;
          }), e.formatArgs.call(a, t), (a.log || e.log).apply(a, t);
        }
        return a.namespace = t, a.useColors = e.useColors(), a.color = e.selectColor(t), a.extend = n, a.destroy = e.destroy, Object.defineProperty(a, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () => null !== s ? s : (i !== e.namespaces && (i = e.namespaces, o = e.enabled(t)), o),
          set: t => {
            s = t;
          }
        }), "function" == typeof e.init && e.init(a), a;
      }
      function n(t, r) {
        let n = e(this.namespace + (void 0 === r ? ":" : r) + t);
        return n.log = this.log, n;
      }
      function i(t) {
        return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      return e.debug = e, e.default = e, e.coerce = function (t) {
        return t instanceof Error ? t.stack || t.message : t;
      }, e.disable = function () {
        let t = [...e.names.map(i), ...e.skips.map(i).map(t => "-" + t)].join(",");
        return e.enable(""), t;
      }, e.enable = function (t) {
        let r;
        e.save(t), e.namespaces = t, e.names = [], e.skips = [];
        let n = ("string" == typeof t ? t : "").split(/[\s,]+/),
          i = n.length;
        for (r = 0; r < i; r++) n[r] && ("-" === (t = n[r].replace(/\*/g, ".*?"))[0] ? e.skips.push(RegExp("^" + t.slice(1) + "$")) : e.names.push(RegExp("^" + t + "$")));
      }, e.enabled = function (t) {
        let r, n;
        if ("*" === t[t.length - 1]) return !0;
        for (r = 0, n = e.skips.length; r < n; r++) if (e.skips[r].test(t)) return !1;
        for (r = 0, n = e.names.length; r < n; r++) if (e.names[r].test(t)) return !0;
        return !1;
      }, e.humanize = r(65881), e.destroy = function () {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }, Object.keys(t).forEach(r => {
        e[r] = t[r];
      }), e.names = [], e.skips = [], e.formatters = {}, e.selectColor = function (t) {
        let r = 0;
        for (let e = 0; e < t.length; e++) r = (r << 5) - r + t.charCodeAt(e) | 0;
        return e.colors[Math.abs(r) % e.colors.length];
      }, e.enable(e.load()), e;
    };
  },
  34772: function (t) {
    var e,
      r,
      n = Object.prototype,
      i = Function.prototype.toString,
      o = n.hasOwnProperty,
      s = i.call(Object),
      a = n.toString,
      u = (e = Object.getPrototypeOf, r = Object, function (t) {
        return e(r(t));
      });
    t.exports = function (t) {
      if (!(t && "object" == typeof t) || "[object Object]" != a.call(t) || function (t) {
        var e = !1;
        if (null != t && "function" != typeof t.toString) try {
          e = !!(t + "");
        } catch (t) {}
        return e;
      }(t)) return !1;
      var e = u(t);
      if (null === e) return !0;
      var r = o.call(e, "constructor") && e.constructor;
      return "function" == typeof r && r instanceof r && i.call(r) == s;
    };
  },
  4079: function (t) {
    "use strict";

    var e = Object.assign.bind(Object);
    t.exports = e, t.exports.default = t.exports;
  },
  44655: function (t) {
    var e = function (t) {
      return t.replace(/^\s+|\s+$/g, "");
    };
    t.exports = function (t) {
      if (!t) return {};
      for (var r = {}, n = e(t).split("\n"), i = 0; i < n.length; i++) {
        var o,
          s = n[i],
          a = s.indexOf(":"),
          u = e(s.slice(0, a)).toLowerCase(),
          c = e(s.slice(a + 1));
        void 0 === r[u] ? r[u] = c : (o = r[u], "[object Array]" === Object.prototype.toString.call(o)) ? r[u].push(c) : r[u] = [r[u], c];
      }
      return r;
    };
  },
  53482: function (t, e, r) {
    "use strict";

    r.d(e, {
      S: function () {
        return rY;
      },
      d: function () {
        return rG;
      },
      e: function () {
        return rX;
      },
      g: function () {
        return e_;
      },
      p: function () {
        return ew;
      }
    });
    let n = {
        timeout: typeof navigator > "u" || "ReactNative" !== navigator.product ? 12e4 : 6e4
      },
      i = function (t) {
        let e = {
          ...n,
          ...("string" == typeof t ? {
            url: t
          } : t)
        };
        if (e.timeout = function t(e) {
          if (!1 === e || 0 === e) return !1;
          if (e.connect || e.socket) return e;
          let r = Number(e);
          return isNaN(r) ? t(n.timeout) : {
            connect: r,
            socket: r
          };
        }(e.timeout), e.query) {
          let {
            url: t,
            searchParams: r
          } = function (t) {
            let e = t.indexOf("?");
            if (-1 === e) return {
              url: t,
              searchParams: new URLSearchParams()
            };
            let r = t.slice(0, e),
              n = t.slice(e + 1),
              i = new URLSearchParams(n);
            if ("function" == typeof i.set) return {
              url: r,
              searchParams: i
            };
            if ("function" != typeof decodeURIComponent) throw Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
            let s = new URLSearchParams();
            for (let t of n.split("&")) {
              let [e, r] = t.split("=");
              e && s.append(o(e), o(r || ""));
            }
            return {
              url: r,
              searchParams: s
            };
          }(e.url);
          for (let [n, i] of Object.entries(e.query)) {
            if (void 0 !== i) {
              if (Array.isArray(i)) for (let t of i) r.append(n, t);else r.append(n, i);
            }
            let o = r.toString();
            o && (e.url = `${t}?${o}`);
          }
        }
        return e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e;
      };
    function o(t) {
      return decodeURIComponent(t.replace(/\+/g, " "));
    }
    let s = /^https?:\/\//i,
      a = function (t) {
        if (!s.test(t.url)) throw Error(`"${t.url}" is not a valid URL`);
      };
    var u,
      c,
      l = r(44655);
    let h = t => function (e, r) {
        let i = "onError" === e,
          o = r;
        for (var _len2 = arguments.length, n = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          n[_key2 - 2] = arguments[_key2];
        }
        for (let r = 0; r < t[e].length && (o = (0, t[e][r])(o, ...n), !i || o); r++);
        return o;
      },
      f = ["request", "response", "progress", "error", "abort"],
      p = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    var d,
      y,
      m,
      g,
      v,
      b,
      w,
      C = (t, e, r) => {
        if (!e.has(t)) throw TypeError("Cannot " + r);
      },
      O = (t, e, r) => (C(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
      x = (t, e, r) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
      },
      E = (t, e, r, n) => (C(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
    class k {
      constructor() {
        this.readyState = 0, this.responseType = "", x(this, d, void 0), x(this, y, void 0), x(this, m, void 0), x(this, g, {}), x(this, v, void 0), x(this, b, {}), x(this, w, void 0);
      }
      open(t, e, r) {
        E(this, d, t), E(this, y, e), E(this, m, ""), this.readyState = 1, this.onreadystatechange(), E(this, v, void 0);
      }
      abort() {
        O(this, v) && O(this, v).abort();
      }
      getAllResponseHeaders() {
        return O(this, m);
      }
      setRequestHeader(t, e) {
        O(this, g)[t] = e;
      }
      setInit(t) {
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        E(this, b, t), E(this, w, e);
      }
      send(t) {
        let e = "arraybuffer" !== this.responseType,
          r = {
            ...O(this, b),
            method: O(this, d),
            headers: O(this, g),
            body: t
          };
        "function" == typeof AbortController && O(this, w) && (E(this, v, new AbortController()), "u" > typeof EventTarget && O(this, v).signal instanceof EventTarget && (r.signal = O(this, v).signal)), "u" > typeof document && (r.credentials = this.withCredentials ? "include" : "omit"), fetch(O(this, y), r).then(t => (t.headers.forEach((t, e) => {
          E(this, m, O(this, m) + `${e}: ${t}\r
`);
        }), this.status = t.status, this.statusText = t.statusText, this.readyState = 3, e ? t.text() : t.arrayBuffer())).then(t => {
          "string" == typeof t ? this.responseText = t : this.response = t, this.readyState = 4, this.onreadystatechange();
        }).catch(t => {
          var e;
          if ("AbortError" === t.name) {
            this.onabort();
            return;
          }
          null == (e = this.onerror) || e.call(this, t);
        });
      }
    }
    d = new WeakMap(), y = new WeakMap(), m = new WeakMap(), g = new WeakMap(), v = new WeakMap(), b = new WeakMap(), w = new WeakMap();
    let S = "function" == typeof XMLHttpRequest ? "xhr" : "fetch",
      j = "xhr" === S ? XMLHttpRequest : k,
      I = (t, e) => {
        var r;
        let n = t.options,
          i = t.applyMiddleware("finalizeOptions", n),
          o = {},
          s = t.applyMiddleware("interceptRequest", void 0, {
            adapter: S,
            context: t
          });
        if (s) {
          let t = setTimeout(e, 0, null, s);
          return {
            abort: () => clearTimeout(t)
          };
        }
        let a = new j();
        a instanceof k && "object" == typeof i.fetch && a.setInit(i.fetch, null == (r = i.useAbortSignal) || r);
        let u = i.headers,
          c = i.timeout,
          h = !1,
          f = !1,
          p = !1;
        if (a.onerror = t => {
          m(Error(`Request error while attempting to reach ${i.url}${t.lengthComputable ? `(${t.loaded} of ${t.total} bytes transferred)` : ""}`));
        }, a.ontimeout = t => {
          m(Error(`Request timeout while attempting to reach ${i.url}${t.lengthComputable ? `(${t.loaded} of ${t.total} bytes transferred)` : ""}`));
        }, a.onabort = () => {
          y(!0), h = !0;
        }, a.onreadystatechange = () => {
          c && (y(), o.socket = setTimeout(() => d("ESOCKETTIMEDOUT"), c.socket)), h || 4 !== a.readyState || 0 === a.status || function () {
            if (!(h || f || p)) {
              if (0 === a.status) {
                m(Error("Unknown XHR error"));
                return;
              }
              y(), f = !0, e(null, {
                body: a.response || ("" === a.responseType || "text" === a.responseType ? a.responseText : ""),
                url: i.url,
                method: i.method,
                headers: l(a.getAllResponseHeaders()),
                statusCode: a.status,
                statusMessage: a.statusText
              });
            }
          }();
        }, a.open(i.method, i.url, !0), a.withCredentials = !!i.withCredentials, u && a.setRequestHeader) for (let t in u) u.hasOwnProperty(t) && a.setRequestHeader(t, u[t]);
        return i.rawBody && (a.responseType = "arraybuffer"), t.applyMiddleware("onRequest", {
          options: i,
          adapter: S,
          request: a,
          context: t
        }), a.send(i.body || null), c && (o.connect = setTimeout(() => d("ETIMEDOUT"), c.connect)), {
          abort: function () {
            h = !0, a && a.abort();
          }
        };
        function d(e) {
          p = !0, a.abort();
          let r = Error("ESOCKETTIMEDOUT" === e ? `Socket timed out on request to ${i.url}` : `Connection timed out on request to ${i.url}`);
          r.code = e, t.channels.error.publish(r);
        }
        function y(t) {
          (t || h || a.readyState >= 2 && o.connect) && clearTimeout(o.connect), o.socket && clearTimeout(o.socket);
        }
        function m(t) {
          if (f) return;
          y(!0), f = !0, a = null;
          let r = t || Error(`Network error while attempting to reach ${i.url}`);
          r.isNetworkError = !0, r.request = i, e(r);
        }
      },
      _ = function () {
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : I;
        return function t(e, r) {
          let n = [],
            o = p.reduce((t, e) => (t[e] = t[e] || [], t), {
              processOptions: [i],
              validateOptions: [a]
            });
          function s(t) {
            let e;
            let n = (t, e, r) => {
                let n = t,
                  o = e;
                if (!n) try {
                  o = s("onResponse", e, r);
                } catch (t) {
                  o = null, n = t;
                }
                (n = n && s("onError", n, r)) ? i.error.publish(n) : o && i.response.publish(o);
              },
              i = f.reduce((t, e) => (t[e] = function () {
                let t = Object.create(null),
                  e = 0;
                return {
                  publish: function (e) {
                    for (let r in t) t[r](e);
                  },
                  subscribe: function (r) {
                    let n = e++;
                    return t[n] = r, function () {
                      delete t[n];
                    };
                  }
                };
              }(), t), {}),
              s = h(o),
              a = s("processOptions", t);
            s("validateOptions", a);
            let u = {
                options: a,
                channels: i,
                applyMiddleware: s
              },
              c = i.request.subscribe(t => {
                e = r(t, (e, r) => n(e, r, t));
              });
            i.abort.subscribe(() => {
              c(), e && e.abort();
            });
            let l = s("onReturn", i, u);
            return l === i && i.request.publish(u), l;
          }
          return s.use = function (t) {
            if (!t) throw Error("Tried to add middleware that resolved to falsey value");
            if ("function" == typeof t) throw Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
            if (t.onReturn && o.onReturn.length > 0) throw Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
            return p.forEach(e => {
              t[e] && o[e].push(t[e]);
            }), n.push(t), s;
          }, s.clone = () => t(n, r), e.forEach(s.use), s;
        }(t, e);
      };
    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */
    function T(t) {
      return "[object Object]" === Object.prototype.toString.call(t);
    }
    r(25130);
    var M = r(48834).lW;
    Object.prototype.hasOwnProperty;
    let A = typeof M > "u" ? () => !1 : t => M.isBuffer(t),
      $ = ["boolean", "string", "number"],
      R = {};
    "u" > typeof globalThis ? R = globalThis : "u" > typeof window ? R = window : "u" > typeof global ? R = global : "u" > typeof self && (R = self);
    var P = R;
    let F = function () {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let e = t.implementation || Promise;
      if (!e) throw Error("`Promise` is not available in global scope, and no implementation was passed");
      return {
        onReturn: (r, n) => new e((e, i) => {
          let o = n.options.cancelToken;
          o && o.promise.then(t => {
            r.abort.publish(t), i(t);
          }), r.error.subscribe(i), r.response.subscribe(r => {
            e(t.onlyBody ? r.body : r);
          }), setTimeout(() => {
            try {
              r.request.publish(n);
            } catch (t) {
              i(t);
            }
          }, 0);
        })
      };
    };
    class U {
      constructor(t) {
        this.__CANCEL__ = !0, this.message = t;
      }
      toString() {
        return `Cancel${this.message ? `: ${this.message}` : ""}`;
      }
    }
    let q = class {
      constructor(t) {
        if ("function" != typeof t) throw TypeError("executor must be a function.");
        let e = null;
        this.promise = new Promise(t => {
          e = t;
        }), t(t => {
          this.reason || (this.reason = new U(t), e(this.reason));
        });
      }
    };
    q.source = () => {
      let t;
      return {
        token: new q(e => {
          t = e;
        }),
        cancel: t
      };
    }, F.Cancel = U, F.CancelToken = q, F.isCancel = t => !!(t && null != t && t.__CANCEL__);
    var z = (t, e, r) => ("GET" === r.method || "HEAD" === r.method) && (t.isNetworkError || !1);
    let N = t => null !== t && "object" == typeof t && "function" == typeof t.pipe;
    var D = t => {
      let e = t.maxRetries || 5,
        r = t.retryDelay || W,
        n = t.shouldRetry;
      return {
        onError: (t, i) => {
          let o = i.options,
            s = o.maxRetries || e,
            a = o.shouldRetry || n,
            u = o.attemptNumber || 0;
          if (N(o.body) || !a(t, u, o) || u >= s) return t;
          let c = Object.assign({}, i, {
            options: Object.assign({}, o, {
              attemptNumber: u + 1
            })
          });
          return setTimeout(() => i.channels.request.publish(c), r(u)), null;
        }
      };
    };
    function W(t) {
      return 100 * Math.pow(2, t) + 100 * Math.random();
    }
    let H = function () {
      let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return D({
        shouldRetry: z,
        ...t
      });
    };
    H.shouldRetry = z;
    var L = r(22970);
    function B(t) {
      return "function" == typeof t;
    }
    function V(t) {
      var e = t(function (t) {
        Error.call(t), t.stack = Error().stack;
      });
      return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
    }
    var J = V(function (t) {
      return function (e) {
        t(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map(function (t, e) {
          return e + 1 + ") " + t.toString();
        }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e;
      };
    });
    function Y(t, e) {
      if (t) {
        var r = t.indexOf(e);
        0 <= r && t.splice(r, 1);
      }
    }
    var G = function () {
      var t;
      function e(t) {
        this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
      }
      return e.prototype.unsubscribe = function () {
        if (!this.closed) {
          this.closed = !0;
          var t,
            e,
            r,
            n,
            i,
            o = this._parentage;
          if (o) {
            if (this._parentage = null, Array.isArray(o)) try {
              for (var s = (0, L.XA)(o), a = s.next(); !a.done; a = s.next()) a.value.remove(this);
            } catch (e) {
              t = {
                error: e
              };
            } finally {
              try {
                a && !a.done && (e = s.return) && e.call(s);
              } finally {
                if (t) throw t.error;
              }
            } else o.remove(this);
          }
          var u = this.initialTeardown;
          if (B(u)) try {
            u();
          } catch (t) {
            i = t instanceof J ? t.errors : [t];
          }
          var c = this._finalizers;
          if (c) {
            this._finalizers = null;
            try {
              for (var l = (0, L.XA)(c), h = l.next(); !h.done; h = l.next()) {
                var f = h.value;
                try {
                  K(f);
                } catch (t) {
                  i = null != i ? i : [], t instanceof J ? i = (0, L.ev)((0, L.ev)([], (0, L.CR)(i)), (0, L.CR)(t.errors)) : i.push(t);
                }
              }
            } catch (t) {
              r = {
                error: t
              };
            } finally {
              try {
                h && !h.done && (n = l.return) && n.call(l);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          if (i) throw new J(i);
        }
      }, e.prototype.add = function (t) {
        var r;
        if (t && t !== this) {
          if (this.closed) K(t);else {
            if (t instanceof e) {
              if (t.closed || t._hasParent(this)) return;
              t._addParent(this);
            }
            (this._finalizers = null !== (r = this._finalizers) && void 0 !== r ? r : []).push(t);
          }
        }
      }, e.prototype._hasParent = function (t) {
        var e = this._parentage;
        return e === t || Array.isArray(e) && e.includes(t);
      }, e.prototype._addParent = function (t) {
        var e = this._parentage;
        this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
      }, e.prototype._removeParent = function (t) {
        var e = this._parentage;
        e === t ? this._parentage = null : Array.isArray(e) && Y(e, t);
      }, e.prototype.remove = function (t) {
        var r = this._finalizers;
        r && Y(r, t), t instanceof e && t._removeParent(this);
      }, e.EMPTY = ((t = new e()).closed = !0, t), e;
    }();
    function X(t) {
      return t instanceof G || t && "closed" in t && B(t.remove) && B(t.add) && B(t.unsubscribe);
    }
    function K(t) {
      B(t) ? t() : t.unsubscribe();
    }
    G.EMPTY;
    var Z = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
      },
      Q = {
        setTimeout: function (t, e) {
          for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
          var i = Q.delegate;
          return (null == i ? void 0 : i.setTimeout) ? i.setTimeout.apply(i, (0, L.ev)([t, e], (0, L.CR)(r))) : setTimeout.apply(void 0, (0, L.ev)([t, e], (0, L.CR)(r)));
        },
        clearTimeout: function (t) {
          var e = Q.delegate;
          return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(t);
        },
        delegate: void 0
      };
    function tt(t) {
      Q.setTimeout(function () {
        var e = Z.onUnhandledError;
        if (e) e(t);else throw t;
      });
    }
    function te() {}
    var tr = tn("C", void 0, void 0);
    function tn(t, e, r) {
      return {
        kind: t,
        value: e,
        error: r
      };
    }
    var ti = null,
      to = function (t) {
        function e(e) {
          var r = t.call(this) || this;
          return r.isStopped = !1, e ? (r.destination = e, X(e) && e.add(r)) : r.destination = tf, r;
        }
        return (0, L.ZT)(e, t), e.create = function (t, e, r) {
          return new tc(t, e, r);
        }, e.prototype.next = function (t) {
          this.isStopped ? th(tn("N", t, void 0), this) : this._next(t);
        }, e.prototype.error = function (t) {
          this.isStopped ? th(tn("E", void 0, t), this) : (this.isStopped = !0, this._error(t));
        }, e.prototype.complete = function () {
          this.isStopped ? th(tr, this) : (this.isStopped = !0, this._complete());
        }, e.prototype.unsubscribe = function () {
          this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
        }, e.prototype._next = function (t) {
          this.destination.next(t);
        }, e.prototype._error = function (t) {
          try {
            this.destination.error(t);
          } finally {
            this.unsubscribe();
          }
        }, e.prototype._complete = function () {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }, e;
      }(G),
      ts = Function.prototype.bind;
    function ta(t, e) {
      return ts.call(t, e);
    }
    var tu = function () {
        function t(t) {
          this.partialObserver = t;
        }
        return t.prototype.next = function (t) {
          var e = this.partialObserver;
          if (e.next) try {
            e.next(t);
          } catch (t) {
            tl(t);
          }
        }, t.prototype.error = function (t) {
          var e = this.partialObserver;
          if (e.error) try {
            e.error(t);
          } catch (t) {
            tl(t);
          } else tl(t);
        }, t.prototype.complete = function () {
          var t = this.partialObserver;
          if (t.complete) try {
            t.complete();
          } catch (t) {
            tl(t);
          }
        }, t;
      }(),
      tc = function (t) {
        function e(e, r, n) {
          var i,
            o,
            s = t.call(this) || this;
          return B(e) || !e ? i = {
            next: null != e ? e : void 0,
            error: null != r ? r : void 0,
            complete: null != n ? n : void 0
          } : s && Z.useDeprecatedNextContext ? ((o = Object.create(e)).unsubscribe = function () {
            return s.unsubscribe();
          }, i = {
            next: e.next && ta(e.next, o),
            error: e.error && ta(e.error, o),
            complete: e.complete && ta(e.complete, o)
          }) : i = e, s.destination = new tu(i), s;
        }
        return (0, L.ZT)(e, t), e;
      }(to);
    function tl(t) {
      Z.useDeprecatedSynchronousErrorHandling ? Z.useDeprecatedSynchronousErrorHandling && ti && (ti.errorThrown = !0, ti.error = t) : tt(t);
    }
    function th(t, e) {
      var r = Z.onStoppedNotification;
      r && Q.setTimeout(function () {
        return r(t, e);
      });
    }
    var tf = {
        closed: !0,
        next: te,
        error: function (t) {
          throw t;
        },
        complete: te
      },
      tp = "function" == typeof Symbol && Symbol.observable || "@@observable";
    function td(t) {
      return t;
    }
    function ty(t) {
      return 0 === t.length ? td : 1 === t.length ? t[0] : function (e) {
        return t.reduce(function (t, e) {
          return e(t);
        }, e);
      };
    }
    var tm = function () {
      function t(t) {
        t && (this._subscribe = t);
      }
      return t.prototype.lift = function (e) {
        var r = new t();
        return r.source = this, r.operator = e, r;
      }, t.prototype.subscribe = function (t, e, r) {
        var n,
          i = this,
          o = (n = t) && n instanceof to || n && B(n.next) && B(n.error) && B(n.complete) && X(n) ? t : new tc(t, e, r);
        return function (t) {
          if (Z.useDeprecatedSynchronousErrorHandling) {
            var e = !ti;
            if (e && (ti = {
              errorThrown: !1,
              error: null
            }), t(), e) {
              var r = ti,
                n = r.errorThrown,
                i = r.error;
              if (ti = null, n) throw i;
            }
          } else t();
        }(function () {
          var t = i.operator,
            e = i.source;
          o.add(t ? t.call(o, e) : e ? i._subscribe(o) : i._trySubscribe(o));
        }), o;
      }, t.prototype._trySubscribe = function (t) {
        try {
          return this._subscribe(t);
        } catch (e) {
          t.error(e);
        }
      }, t.prototype.forEach = function (t, e) {
        var r = this;
        return new (e = tg(e))(function (e, n) {
          var i = new tc({
            next: function (e) {
              try {
                t(e);
              } catch (t) {
                n(t), i.unsubscribe();
              }
            },
            error: n,
            complete: e
          });
          r.subscribe(i);
        });
      }, t.prototype._subscribe = function (t) {
        var e;
        return null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(t);
      }, t.prototype[tp] = function () {
        return this;
      }, t.prototype.pipe = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return ty(t)(this);
      }, t.prototype.toPromise = function (t) {
        var e = this;
        return new (t = tg(t))(function (t, r) {
          var n;
          e.subscribe(function (t) {
            return n = t;
          }, function (t) {
            return r(t);
          }, function () {
            return t(n);
          });
        });
      }, t.create = function (e) {
        return new t(e);
      }, t;
    }();
    function tg(t) {
      var e;
      return null !== (e = null != t ? t : Z.Promise) && void 0 !== e ? e : Promise;
    }
    var tv = function (t) {
      return t && "number" == typeof t.length && "function" != typeof t;
    };
    function tb(t) {
      return B(null == t ? void 0 : t.then);
    }
    function tw(t) {
      return Symbol.asyncIterator && B(null == t ? void 0 : t[Symbol.asyncIterator]);
    }
    function tC(t) {
      return TypeError("You provided " + (null !== t && "object" == typeof t ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }
    var tO = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    function tx(t) {
      return B(null == t ? void 0 : t[tO]);
    }
    function tE(t) {
      return (0, L.FC)(this, arguments, function () {
        var e, r, n;
        return (0, L.Jh)(this, function (i) {
          switch (i.label) {
            case 0:
              e = t.getReader(), i.label = 1;
            case 1:
              i.trys.push([1,, 9, 10]), i.label = 2;
            case 2:
              return [4, (0, L.qq)(e.read())];
            case 3:
              if (n = (r = i.sent()).value, !r.done) return [3, 5];
              return [4, (0, L.qq)(void 0)];
            case 4:
              return [2, i.sent()];
            case 5:
              return [4, (0, L.qq)(n)];
            case 6:
              return [4, i.sent()];
            case 7:
              return i.sent(), [3, 2];
            case 8:
              return [3, 10];
            case 9:
              return e.releaseLock(), [7];
            case 10:
              return [2];
          }
        });
      });
    }
    function tk(t) {
      return B(null == t ? void 0 : t.getReader);
    }
    function tS(t) {
      if (t instanceof tm) return t;
      if (null != t) {
        if (B(t[tp])) return new tm(function (e) {
          var r = t[tp]();
          if (B(r.subscribe)) return r.subscribe(e);
          throw TypeError("Provided object does not correctly implement Symbol.observable");
        });
        if (tv(t)) return new tm(function (e) {
          for (var r = 0; r < t.length && !e.closed; r++) e.next(t[r]);
          e.complete();
        });
        if (tb(t)) return new tm(function (e) {
          t.then(function (t) {
            e.closed || (e.next(t), e.complete());
          }, function (t) {
            return e.error(t);
          }).then(null, tt);
        });
        if (tw(t)) return tj(t);
        if (tx(t)) return new tm(function (e) {
          var r, n;
          try {
            for (var i = (0, L.XA)(t), o = i.next(); !o.done; o = i.next()) {
              var s = o.value;
              if (e.next(s), e.closed) return;
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              o && !o.done && (n = i.return) && n.call(i);
            } finally {
              if (r) throw r.error;
            }
          }
          e.complete();
        });
        if (tk(t)) return tj(tE(t));
      }
      throw tC(t);
    }
    function tj(t) {
      return new tm(function (e) {
        (function (t, e) {
          var r, n, i, o;
          return (0, L.mG)(this, void 0, void 0, function () {
            var s;
            return (0, L.Jh)(this, function (a) {
              switch (a.label) {
                case 0:
                  a.trys.push([0, 5, 6, 11]), r = (0, L.KL)(t), a.label = 1;
                case 1:
                  return [4, r.next()];
                case 2:
                  if ((n = a.sent()).done) return [3, 4];
                  if (s = n.value, e.next(s), e.closed) return [2];
                  a.label = 3;
                case 3:
                  return [3, 1];
                case 4:
                  return [3, 11];
                case 5:
                  return i = {
                    error: a.sent()
                  }, [3, 11];
                case 6:
                  if (a.trys.push([6,, 9, 10]), !(n && !n.done && (o = r.return))) return [3, 8];
                  return [4, o.call(r)];
                case 7:
                  a.sent(), a.label = 8;
                case 8:
                  return [3, 10];
                case 9:
                  if (i) throw i.error;
                  return [7];
                case 10:
                  return [7];
                case 11:
                  return e.complete(), [2];
              }
            });
          });
        })(t, e).catch(function (t) {
          return e.error(t);
        });
      });
    }
    function tI(t, e, r, n, i) {
      void 0 === n && (n = 0), void 0 === i && (i = !1);
      var o = e.schedule(function () {
        r(), i ? t.add(this.schedule(null, n)) : this.unsubscribe();
      }, n);
      if (t.add(o), !i) return o;
    }
    function t_(t) {
      return function (e) {
        if (B(null == e ? void 0 : e.lift)) return e.lift(function (e) {
          try {
            return t(e, this);
          } catch (t) {
            this.error(t);
          }
        });
        throw TypeError("Unable to lift unknown Observable type");
      };
    }
    function tT(t, e, r, n, i) {
      return new tM(t, e, r, n, i);
    }
    var tM = function (t) {
      function e(e, r, n, i, o, s) {
        var a = t.call(this, e) || this;
        return a.onFinalize = o, a.shouldUnsubscribe = s, a._next = r ? function (t) {
          try {
            r(t);
          } catch (t) {
            e.error(t);
          }
        } : t.prototype._next, a._error = i ? function (t) {
          try {
            i(t);
          } catch (t) {
            e.error(t);
          } finally {
            this.unsubscribe();
          }
        } : t.prototype._error, a._complete = n ? function () {
          try {
            n();
          } catch (t) {
            e.error(t);
          } finally {
            this.unsubscribe();
          }
        } : t.prototype._complete, a;
      }
      return (0, L.ZT)(e, t), e.prototype.unsubscribe = function () {
        var e;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var r = this.closed;
          t.prototype.unsubscribe.call(this), r || null === (e = this.onFinalize) || void 0 === e || e.call(this);
        }
      }, e;
    }(to);
    function tA(t, e) {
      return void 0 === e && (e = 0), t_(function (r, n) {
        r.subscribe(tT(n, function (r) {
          return tI(n, t, function () {
            return n.next(r);
          }, e);
        }, function () {
          return tI(n, t, function () {
            return n.complete();
          }, e);
        }, function (r) {
          return tI(n, t, function () {
            return n.error(r);
          }, e);
        }));
      });
    }
    function t$(t, e) {
      return void 0 === e && (e = 0), t_(function (r, n) {
        n.add(t.schedule(function () {
          return r.subscribe(n);
        }, e));
      });
    }
    function tR(t, e) {
      if (!t) throw Error("Iterable cannot be null");
      return new tm(function (r) {
        tI(r, e, function () {
          var n = t[Symbol.asyncIterator]();
          tI(r, e, function () {
            n.next().then(function (t) {
              t.done ? r.complete() : r.next(t.value);
            });
          }, 0, !0);
        });
      });
    }
    function tP(t, e) {
      return e ? function (t, e) {
        if (null != t) {
          if (B(t[tp])) return tS(t).pipe(t$(e), tA(e));
          if (tv(t)) return new tm(function (r) {
            var n = 0;
            return e.schedule(function () {
              n === t.length ? r.complete() : (r.next(t[n++]), r.closed || this.schedule());
            });
          });
          if (tb(t)) return tS(t).pipe(t$(e), tA(e));
          if (tw(t)) return tR(t, e);
          if (tx(t)) return new tm(function (r) {
            var n;
            return tI(r, e, function () {
              n = t[tO](), tI(r, e, function () {
                var t, e, i;
                try {
                  e = (t = n.next()).value, i = t.done;
                } catch (t) {
                  r.error(t);
                  return;
                }
                i ? r.complete() : r.next(e);
              }, 0, !0);
            }), function () {
              return B(null == n ? void 0 : n.return) && n.return();
            };
          });
          if (tk(t)) return tR(tE(t), e);
        }
        throw tC(t);
      }(t, e) : tS(t);
    }
    var tF = V(function (t) {
      return function () {
        t(this), this.name = "EmptyError", this.message = "no elements in sequence";
      };
    });
    function tU(t, e) {
      var r = "object" == typeof e;
      return new Promise(function (n, i) {
        var o,
          s = !1;
        t.subscribe({
          next: function (t) {
            o = t, s = !0;
          },
          error: i,
          complete: function () {
            s ? n(o) : r ? n(e.defaultValue) : i(new tF());
          }
        });
      });
    }
    var tq = Array.isArray;
    function tz(t, e) {
      return t_(function (r, n) {
        var i = 0;
        r.subscribe(tT(n, function (r) {
          n.next(t.call(e, r, i++));
        }));
      });
    }
    var tN = Array.isArray;
    function tD() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var r = B(t[t.length - 1]) ? t.pop() : void 0;
      return r ? function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return ty(t);
      }(tD.apply(void 0, (0, L.ev)([], (0, L.CR)(t))), tz(function (t) {
        return tN(t) ? r.apply(void 0, (0, L.ev)([], (0, L.CR)(t))) : r(t);
      })) : t_(function (e, r) {
        var n, i, o;
        (n = (0, L.ev)([e], (0, L.CR)(1 === t.length && tq(t[0]) ? t[0] : t)), void 0 === o && (o = td), function (t) {
          var e;
          e = function () {
            for (var e = n.length, r = Array(e), s = e, a = e, u = function (e) {
                var u;
                u = function () {
                  var u = tP(n[e], i),
                    c = !1;
                  u.subscribe(tT(t, function (n) {
                    r[e] = n, !c && (c = !0, a--), a || t.next(o(r.slice()));
                  }, function () {
                    --s || t.complete();
                  }));
                }, i ? tI(t, i, u) : u();
              }, c = 0; c < e; c++) u(c);
          }, i ? tI(t, i, e) : e();
        })(r);
      });
    }
    function tW(t, e) {
      return t_(function (r, n) {
        var i = 0;
        r.subscribe(tT(n, function (r) {
          return t.call(e, r, i++) && n.next(r);
        }));
      });
    }
    class tH extends Error {
      constructor(t) {
        let e = tB(t);
        super(e.message), this.statusCode = 400, Object.assign(this, e);
      }
    }
    class tL extends Error {
      constructor(t) {
        let e = tB(t);
        super(e.message), this.statusCode = 500, Object.assign(this, e);
      }
    }
    function tB(t) {
      let e = t.body,
        r = {
          response: t,
          statusCode: t.statusCode,
          responseBody: -1 !== (t.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? JSON.stringify(e, null, 2) : e,
          message: "",
          details: void 0
        };
      if (e.error && e.message) return r.message = `${e.error} - ${e.message}`, r;
      if (tV(e) && tV(e.error) && "mutationError" === e.error.type && "string" == typeof e.error.description) {
        let t = e.error.items || [],
          n = t.slice(0, 5).map(t => {
            var e;
            return null == (e = t.error) ? void 0 : e.description;
          }).filter(Boolean),
          i = n.length ? `:
- ${n.join(`
- `)}` : "";
        return t.length > 5 && (i += `
...and ${t.length - 5} more`), r.message = `${e.error.description}${i}`, r.details = e.error, r;
      }
      return e.error && e.error.description ? (r.message = e.error.description, r.details = e.error) : r.message = e.error || e.message || function (t) {
        let e = t.statusMessage ? ` ${t.statusMessage}` : "";
        return `${t.method}-request to ${t.url} resulted in HTTP ${t.statusCode}${e}`;
      }(t), r;
    }
    function tV(t) {
      return "object" == typeof t && null !== t && !Array.isArray(t);
    }
    let tJ = {
        onResponse: t => {
          if (t.statusCode >= 500) throw new tL(t);
          if (t.statusCode >= 400) throw new tH(t);
          return t;
        }
      },
      tY = {
        onResponse: t => {
          let e = t.headers["x-sanity-warning"];
          return (Array.isArray(e) ? e : [e]).filter(Boolean).forEach(t => console.warn(t)), t;
        }
      };
    function tG(t, _ref) {
      let {
        maxRetries: e = 5,
        retryDelay: r
      } = _ref;
      var n;
      let i = _([e > 0 ? H({
        retryDelay: r,
        maxRetries: e,
        shouldRetry: tX
      }) : {}, ...t, tY, {
        processOptions: t => {
          var e, r;
          let n = t.body;
          return n && "function" != typeof n.pipe && !A(n) && (-1 !== $.indexOf(typeof n) || Array.isArray(n) || !1 !== T(n) && (void 0 === (e = n.constructor) || !1 !== T(r = e.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf"))) ? Object.assign({}, t, {
            body: JSON.stringify(t.body),
            headers: Object.assign({}, t.headers, {
              "Content-Type": "application/json"
            })
          }) : t;
        }
      }, {
        onResponse: t => {
          let e = t.headers["content-type"] || "",
            r = n && n.force || -1 !== e.indexOf("application/json");
          return t.body && e && r ? Object.assign({}, t, {
            body: function (t) {
              try {
                return JSON.parse(t);
              } catch (t) {
                throw t.message = `Failed to parsed response body as JSON: ${t.message}`, t;
              }
            }(t.body)
          }) : t;
        },
        processOptions: t => Object.assign({}, t, {
          headers: Object.assign({
            Accept: "application/json"
          }, t.headers)
        })
      }, {
        onRequest: t => {
          if ("xhr" !== t.adapter) return;
          let e = t.request,
            r = t.context;
          function n(t) {
            return e => {
              let n = e.lengthComputable ? e.loaded / e.total * 100 : -1;
              r.channels.progress.publish({
                stage: t,
                percent: n,
                total: e.total,
                loaded: e.loaded,
                lengthComputable: e.lengthComputable
              });
            };
          }
          "upload" in e && "onprogress" in e.upload && (e.upload.onprogress = n("upload")), "onprogress" in e && (e.onprogress = n("download"));
        }
      }, tJ, function () {
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        let e = t.implementation || P.Observable;
        if (!e) throw Error("`Observable` is not available in global scope, and no implementation was passed");
        return {
          onReturn: (t, r) => new e(e => (t.error.subscribe(t => e.error(t)), t.progress.subscribe(t => e.next(Object.assign({
            type: "progress"
          }, t))), t.response.subscribe(t => {
            e.next(Object.assign({
              type: "response"
            }, t)), e.complete();
          }), t.request.publish(r), () => t.abort.publish()))
        };
      }({
        implementation: tm
      })]);
      function o(t) {
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i;
        return e({
          maxRedirects: 0,
          ...t
        });
      }
      return o.defaultRequester = i, o;
    }
    function tX(t, e, r) {
      let n = "GET" === r.method || "HEAD" === r.method,
        i = (r.uri || r.url).startsWith("/data/query"),
        o = t.response && (429 === t.response.statusCode || 502 === t.response.statusCode || 503 === t.response.statusCode);
      return (!!n || !!i) && !!o || H.shouldRetry(t, e, r);
    }
    function tK(t) {
      if ("string" == typeof t) return {
        id: t
      };
      if (Array.isArray(t)) return {
        query: "*[_id in $ids]",
        params: {
          ids: t
        }
      };
      if ("object" == typeof t && null !== t && "query" in t && "string" == typeof t.query) return "params" in t && "object" == typeof t.params && null !== t.params ? {
        query: t.query,
        params: t.params
      } : {
        query: t.query
      };
      let e = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join(`
`);
      throw Error(`Unknown selection - must be one of:

${e}`);
    }
    let tZ = ["image", "file"],
      tQ = ["before", "after", "replace"],
      t0 = t => {
        if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(t)) throw Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
      },
      t1 = t => {
        if (!/^[-a-z0-9]+$/i.test(t)) throw Error("`projectId` can only contain only a-z, 0-9 and dashes");
      },
      t3 = t => {
        if (-1 === tZ.indexOf(t)) throw Error(`Invalid asset type: ${t}. Must be one of ${tZ.join(", ")}`);
      },
      t6 = (t, e) => {
        if (null === e || "object" != typeof e || Array.isArray(e)) throw Error(`${t}() takes an object of properties`);
      },
      t2 = (t, e) => {
        if ("string" != typeof e || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e) || e.includes("..")) throw Error(`${t}(): "${e}" is not a valid document ID`);
      },
      t9 = (t, e) => {
        if (!e._id) throw Error(`${t}() requires that the document contains an ID ("_id" property)`);
        t2(t, e._id);
      },
      t5 = (t, e, r) => {
        let n = "insert(at, selector, items)";
        if (-1 === tQ.indexOf(t)) {
          let t = tQ.map(t => `"${t}"`).join(", ");
          throw Error(`${n} takes an "at"-argument which is one of: ${t}`);
        }
        if ("string" != typeof e) throw Error(`${n} takes a "selector"-argument which must be a string`);
        if (!Array.isArray(r)) throw Error(`${n} takes an "items"-argument which must be an array`);
      },
      t4 = t => {
        if (!t.dataset) throw Error("`dataset` must be provided to perform queries");
        return t.dataset || "";
      },
      t8 = t => {
        if ("string" != typeof t || !/^[a-z0-9._-]{1,75}$/i.test(t)) throw Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
        return t;
      };
    var t7 = (t, e, r) => {
        if (!e.has(t)) throw TypeError("Cannot " + r);
      },
      et = (t, e, r) => (t7(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
      ee = (t, e, r) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
      },
      er = (t, e, r, n) => (t7(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
    class en {
      constructor(t) {
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.selection = t, this.operations = e;
      }
      set(t) {
        return this._assign("set", t);
      }
      setIfMissing(t) {
        return this._assign("setIfMissing", t);
      }
      diffMatchPatch(t) {
        return t6("diffMatchPatch", t), this._assign("diffMatchPatch", t);
      }
      unset(t) {
        if (!Array.isArray(t)) throw Error("unset(attrs) takes an array of attributes to unset, non-array given");
        return this.operations = Object.assign({}, this.operations, {
          unset: t
        }), this;
      }
      inc(t) {
        return this._assign("inc", t);
      }
      dec(t) {
        return this._assign("dec", t);
      }
      insert(t, e, r) {
        return t5(t, e, r), this._assign("insert", {
          [t]: e,
          items: r
        });
      }
      append(t, e) {
        return this.insert("after", `${t}[-1]`, e);
      }
      prepend(t, e) {
        return this.insert("before", `${t}[0]`, e);
      }
      splice(t, e, r, n) {
        let i = e < 0 ? e - 1 : e,
          o = typeof r > "u" || -1 === r ? -1 : Math.max(0, e + r),
          s = `${t}[${i}:${i < 0 && o >= 0 ? "" : o}]`;
        return this.insert("replace", s, n || []);
      }
      ifRevisionId(t) {
        return this.operations.ifRevisionID = t, this;
      }
      serialize() {
        return {
          ...tK(this.selection),
          ...this.operations
        };
      }
      toJSON() {
        return this.serialize();
      }
      reset() {
        return this.operations = {}, this;
      }
      _assign(t, e) {
        let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        return t6(t, e), this.operations = Object.assign({}, this.operations, {
          [t]: Object.assign({}, r && this.operations[t] || {}, e)
        }), this;
      }
      _set(t, e) {
        return this._assign(t, e, !1);
      }
    }
    let ei = class t extends en {
      constructor(t, e, r) {
        super(t, e), ee(this, eZ, void 0), er(this, eZ, r);
      }
      clone() {
        return new t(this.selection, {
          ...this.operations
        }, et(this, eZ));
      }
      commit(t) {
        if (!et(this, eZ)) throw Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        let e = Object.assign({
          returnFirst: "string" == typeof this.selection,
          returnDocuments: !0
        }, t);
        return et(this, eZ).mutate({
          patch: this.serialize()
        }, e);
      }
    };
    eZ = new WeakMap();
    let eo = class t extends en {
      constructor(t, e, r) {
        super(t, e), ee(this, eQ, void 0), er(this, eQ, r);
      }
      clone() {
        return new t(this.selection, {
          ...this.operations
        }, et(this, eQ));
      }
      commit(t) {
        if (!et(this, eQ)) throw Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        let e = Object.assign({
          returnFirst: "string" == typeof this.selection,
          returnDocuments: !0
        }, t);
        return et(this, eQ).mutate({
          patch: this.serialize()
        }, e);
      }
    };
    eQ = new WeakMap();
    var es = (t, e, r) => {
        if (!e.has(t)) throw TypeError("Cannot " + r);
      },
      ea = (t, e, r) => (es(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
      eu = (t, e, r) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
      },
      ec = (t, e, r, n) => (es(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
    let el = {
      returnDocuments: !1
    };
    class eh {
      constructor() {
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        let e = arguments.length > 1 ? arguments[1] : undefined;
        this.operations = t, this.trxId = e;
      }
      create(t) {
        return t6("create", t), this._add({
          create: t
        });
      }
      createIfNotExists(t) {
        let e = "createIfNotExists";
        return t6(e, t), t9(e, t), this._add({
          [e]: t
        });
      }
      createOrReplace(t) {
        let e = "createOrReplace";
        return t6(e, t), t9(e, t), this._add({
          [e]: t
        });
      }
      delete(t) {
        return t2("delete", t), this._add({
          delete: {
            id: t
          }
        });
      }
      transactionId(t) {
        return t ? (this.trxId = t, this) : this.trxId;
      }
      serialize() {
        return [...this.operations];
      }
      toJSON() {
        return this.serialize();
      }
      reset() {
        return this.operations = [], this;
      }
      _add(t) {
        return this.operations.push(t), this;
      }
    }
    let ef = class t extends eh {
      constructor(t, e, r) {
        super(t, r), eu(this, e0, void 0), ec(this, e0, e);
      }
      clone() {
        return new t([...this.operations], ea(this, e0), this.trxId);
      }
      commit(t) {
        if (!ea(this, e0)) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        return ea(this, e0).mutate(this.serialize(), Object.assign({
          transactionId: this.trxId
        }, el, t || {}));
      }
      patch(t, e) {
        let r = "function" == typeof e;
        if ("string" != typeof t && t instanceof eo) return this._add({
          patch: t.serialize()
        });
        if (r) {
          let r = e(new eo(t, {}, ea(this, e0)));
          if (!(r instanceof eo)) throw Error("function passed to `patch()` must return the patch");
          return this._add({
            patch: r.serialize()
          });
        }
        return this._add({
          patch: {
            id: t,
            ...e
          }
        });
      }
    };
    e0 = new WeakMap();
    let ep = class t extends eh {
      constructor(t, e, r) {
        super(t, r), eu(this, e1, void 0), ec(this, e1, e);
      }
      clone() {
        return new t([...this.operations], ea(this, e1), this.trxId);
      }
      commit(t) {
        if (!ea(this, e1)) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        return ea(this, e1).mutate(this.serialize(), Object.assign({
          transactionId: this.trxId
        }, el, t || {}));
      }
      patch(t, e) {
        let r = "function" == typeof e;
        if ("string" != typeof t && t instanceof ei) return this._add({
          patch: t.serialize()
        });
        if (r) {
          let r = e(new ei(t, {}, ea(this, e1)));
          if (!(r instanceof ei)) throw Error("function passed to `patch()` must return the patch");
          return this._add({
            patch: r.serialize()
          });
        }
        return this._add({
          patch: {
            id: t,
            ...e
          }
        });
      }
    };
    function ed(t) {
      return "https://www.sanity.io/help/" + t;
    }
    e1 = new WeakMap();
    let ey = t => {
        var e;
        let r, n;
        return e = function () {
          for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            e[_key3] = arguments[_key3];
          }
          return console.warn(t.join(" "), ...e);
        }, r = !1, function () {
          return r || (n = e(...arguments), r = !0), n;
        };
      },
      em = ey(["Since you haven't set a value for `useCdn`, we will deliver content using our", "global, edge-cached API-CDN. If you wish to have content delivered faster, set", "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]),
      eg = ey(["The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]),
      ev = ey(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${ed("js-client-browser-token")} for more information and how to hide this warning.`]),
      eb = ey(["Using the Sanity client without specifying an API version is deprecated.", `See ${ed("js-client-api-version")}`]),
      ew = ey(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]),
      eC = {
        apiHost: "https://api.sanity.io",
        apiVersion: "1",
        useProjectHostname: !0,
        stega: {
          enabled: !1
        }
      },
      eO = ["localhost", "127.0.0.1", "0.0.0.0"],
      ex = t => -1 !== eO.indexOf(t),
      eE = function (t) {
        switch (t) {
          case "previewDrafts":
          case "published":
          case "raw":
            return;
          default:
            throw TypeError("Invalid API perspective string, expected `published`, `previewDrafts` or `raw`");
        }
      },
      ek = (t, e) => {
        let r = {
          ...e,
          ...t,
          stega: {
            ...("boolean" == typeof e.stega ? {
              enabled: e.stega
            } : e.stega || eC.stega),
            ...("boolean" == typeof t.stega ? {
              enabled: t.stega
            } : t.stega || {})
          }
        };
        r.apiVersion || eb();
        let n = {
            ...eC,
            ...r
          },
          i = n.useProjectHostname;
        if (typeof Promise > "u") {
          let t = ed("js-client-promise-polyfill");
          throw Error(`No native Promise-implementation found, polyfill needed - see ${t}`);
        }
        if (i && !n.projectId) throw Error("Configuration must contain `projectId`");
        if ("string" == typeof n.perspective && eE(n.perspective), "encodeSourceMap" in n) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
        if ("encodeSourceMapAtPath" in n) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
        if ("boolean" != typeof n.stega.enabled) throw Error(`stega.enabled must be a boolean, received ${n.stega.enabled}`);
        if (n.stega.enabled && void 0 === n.stega.studioUrl) throw Error("stega.studioUrl must be defined when stega.enabled is true");
        if (n.stega.enabled && "string" != typeof n.stega.studioUrl && "function" != typeof n.stega.studioUrl) throw Error(`stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`);
        let o = "u" > typeof window && window.location && window.location.hostname,
          s = o && ex(window.location.hostname);
        o && s && n.token && !0 !== n.ignoreBrowserTokenWarning ? ev() : typeof n.useCdn > "u" && em(), i && t1(n.projectId), n.dataset && t0(n.dataset), "requestTagPrefix" in n && (n.requestTagPrefix = n.requestTagPrefix ? t8(n.requestTagPrefix).replace(/\.+$/, "") : void 0), n.apiVersion = `${n.apiVersion}`.replace(/^v/, ""), n.isDefaultApi = n.apiHost === eC.apiHost, n.useCdn = !1 !== n.useCdn && !n.withCredentials, function (t) {
          if ("1" === t || "X" === t) return;
          let e = new Date(t);
          if (!(/^\d{4}-\d{2}-\d{2}$/.test(t) && e instanceof Date && e.getTime() > 0)) throw Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
        }(n.apiVersion);
        let a = n.apiHost.split("://", 2),
          u = a[0],
          c = a[1],
          l = n.isDefaultApi ? "apicdn.sanity.io" : c;
        return n.useProjectHostname ? (n.url = `${u}://${n.projectId}.${c}/v${n.apiVersion}`, n.cdnUrl = `${u}://${n.projectId}.${l}/v${n.apiVersion}`) : (n.url = `${n.apiHost}/v${n.apiVersion}`, n.cdnUrl = n.url), n;
      };
    var eS = {
        0: 8203,
        1: 8204,
        2: 8205,
        3: 8290,
        4: 8291,
        5: 8288,
        6: 65279,
        7: 8289,
        8: 119155,
        9: 119156,
        a: 119157,
        b: 119158,
        c: 119159,
        d: 119160,
        e: 119161,
        f: 119162
      },
      ej = {
        0: 8203,
        1: 8204,
        2: 8205,
        3: 65279
      },
      eI = [,,,,].fill(String.fromCodePoint(ej[0])).join("");
    function e_(t, e) {
      let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "auto";
      let n;
      return !0 === r || "auto" === r && (Number.isNaN(Number(t)) && Date.parse(t) || function (t) {
        try {
          new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
        } catch {
          return !1;
        }
        return !0;
      }(t)) ? t : `${t}${(n = JSON.stringify(e), `${eI}${Array.from(n).map(t => {
        let e = t.charCodeAt(0);
        if (e > 255) throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${n} on character ${t} (${e})`);
        return Array.from(e.toString(4).padStart(4, "0")).map(t => String.fromCodePoint(ej[t])).join("");
      }).join("")}`)}`;
    }
    Object.fromEntries(Object.entries(ej).map(t => t.reverse())), Object.fromEntries(Object.entries(eS).map(t => t.reverse()));
    var eT = `${Object.values(eS).map(t => `\\u{${t.toString(16)}}`).join("")}`,
      eM = RegExp(`[${eT}]{4,}`, "gu");
    let eA = _ref2 => {
        let {
          query: t,
          params: e = {},
          options: r = {}
        } = _ref2;
        let n = new URLSearchParams(),
          {
            tag: i,
            returnQuery: o,
            ...s
          } = r;
        for (let [r, o] of (i && n.append("tag", i), n.append("query", t), Object.entries(e))) n.append(`$${r}`, JSON.stringify(o));
        for (let [t, e] of Object.entries(s)) e && n.append(t, `${e}`);
        return !1 === o && n.append("returnQuery", "false"), `?${n}`;
      },
      e$ = (t, e) => !1 === t ? void 0 : typeof t > "u" ? e : t,
      eR = function () {
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return {
          dryRun: t.dryRun,
          returnIds: !0,
          returnDocuments: e$(t.returnDocuments, !0),
          visibility: t.visibility || "sync",
          autoGenerateArrayKeys: t.autoGenerateArrayKeys,
          skipCrossDatasetReferenceValidation: t.skipCrossDatasetReferenceValidation
        };
      },
      eP = t => "response" === t.type,
      eF = t => t.body,
      eU = (t, e) => t.reduce((t, r) => (t[e(r)] = r, t), Object.create(null));
    function eq(t, e, n, i) {
      let o = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      let s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
      let a = "stega" in s ? {
          ...(n || {}),
          ...("boolean" == typeof s.stega ? {
            enabled: s.stega
          } : s.stega || {})
        } : n,
        u = a.enabled ? function (t) {
          try {
            return JSON.parse(JSON.stringify(t, (t, e) => {
              var r;
              return "string" != typeof e ? e : {
                cleaned: e.replace(eM, ""),
                encoded: (null == (r = e.match(eM)) ? void 0 : r[0]) || ""
              }.cleaned;
            }));
          } catch {
            return t;
          }
        }(o) : o,
        c = !1 === s.filterResponse ? t => t : t => t.result,
        {
          cache: l,
          next: h,
          ...f
        } = {
          useAbortSignal: "u" > typeof s.signal,
          resultSourceMap: a.enabled ? "withKeyArraySelector" : s.resultSourceMap,
          ...s,
          returnQuery: !1 === s.filterResponse && !1 !== s.returnQuery
        },
        p = eB(t, e, "query", {
          query: i,
          params: u
        }, "u" > typeof l || "u" > typeof h ? {
          ...f,
          fetch: {
            cache: l,
            next: h
          }
        } : f);
      return a.enabled ? p.pipe(function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return tD.apply(void 0, (0, L.ev)([], (0, L.CR)(t)));
      }(tP(r.e(139).then(r.bind(r, 32139)).then(function (t) {
        return t.a;
      }).then(_ref3 => {
        let {
          stegaEncodeSourceMap: t
        } = _ref3;
        return t;
      }))), tz(_ref4 => {
        let [t, e] = _ref4;
        let r = e(t.result, t.resultSourceMap, a);
        return c({
          ...t,
          result: r
        });
      })) : p.pipe(tz(c));
    }
    function ez(t, e, r) {
      let n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      let i = {
        uri: eG(t, "doc", r),
        json: !0,
        tag: n.tag
      };
      return eJ(t, e, i).pipe(tW(eP), tz(t => t.body.documents && t.body.documents[0]));
    }
    function eN(t, e, r) {
      let n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      let i = {
        uri: eG(t, "doc", r.join(",")),
        json: !0,
        tag: n.tag
      };
      return eJ(t, e, i).pipe(tW(eP), tz(t => {
        let e = eU(t.body.documents || [], t => t._id);
        return r.map(t => e[t] || null);
      }));
    }
    function eD(t, e, r, n) {
      return t9("createIfNotExists", r), eV(t, e, r, "createIfNotExists", n);
    }
    function eW(t, e, r, n) {
      return t9("createOrReplace", r), eV(t, e, r, "createOrReplace", n);
    }
    function eH(t, e, r, n) {
      return eB(t, e, "mutate", {
        mutations: [{
          delete: tK(r)
        }]
      }, n);
    }
    function eL(t, e, r, n) {
      let i;
      return eB(t, e, "mutate", {
        mutations: Array.isArray(i = r instanceof eo || r instanceof ei ? {
          patch: r.serialize()
        } : r instanceof ef || r instanceof ep ? r.serialize() : r) ? i : [i],
        transactionId: n && n.transactionId || void 0
      }, n);
    }
    function eB(t, e, r, n) {
      let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      let o = "mutate" === r,
        s = o ? "" : eA(n),
        a = !o && s.length < 11264,
        u = i.returnFirst,
        {
          timeout: c,
          token: l,
          tag: h,
          headers: f,
          returnQuery: p
        } = i,
        d = eG(t, r, a ? s : "");
      return eJ(t, e, {
        method: a ? "GET" : "POST",
        uri: d,
        json: !0,
        body: a ? void 0 : n,
        query: o && eR(i),
        timeout: c,
        headers: f,
        token: l,
        tag: h,
        returnQuery: p,
        perspective: i.perspective,
        resultSourceMap: i.resultSourceMap,
        canUseCdn: "query" === r,
        signal: i.signal,
        fetch: i.fetch,
        useAbortSignal: i.useAbortSignal,
        useCdn: i.useCdn
      }).pipe(tW(eP), tz(eF), tz(t => {
        if (!o) return t;
        let e = t.results || [];
        if (i.returnDocuments) return u ? e[0] && e[0].document : e.map(t => t.document);
        let r = u ? e[0] && e[0].id : e.map(t => t.id);
        return {
          transactionId: t.transactionId,
          results: e,
          [u ? "documentId" : "documentIds"]: r
        };
      }));
    }
    function eV(t, e, r, n) {
      let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      return eB(t, e, "mutate", {
        mutations: [{
          [n]: r
        }]
      }, Object.assign({
        returnFirst: !0,
        returnDocuments: !0
      }, i));
    }
    function eJ(t, e, r) {
      var n, i, o;
      let s = r.url || r.uri,
        a = t.config(),
        u = typeof r.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 && 0 === s.indexOf("/data/") : r.canUseCdn,
        c = (null != (n = r.useCdn) ? n : a.useCdn) && u,
        l = r.tag && a.requestTagPrefix ? [a.requestTagPrefix, r.tag].join(".") : r.tag || a.requestTagPrefix;
      if (l && null !== r.tag && (r.query = {
        tag: t8(l),
        ...r.query
      }), ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 && 0 === s.indexOf("/data/query/")) {
        let t = null != (i = r.resultSourceMap) ? i : a.resultSourceMap;
        void 0 !== t && !1 !== t && (r.query = {
          resultSourceMap: t,
          ...r.query
        });
        let e = r.perspective || a.perspective;
        "string" == typeof e && "raw" !== e && (eE(e), r.query = {
          perspective: e,
          ...r.query
        }, "previewDrafts" === e && c && (c = !1, eg())), !1 === r.returnQuery && (r.query = {
          returnQuery: "false",
          ...r.query
        });
      }
      let h = function (t) {
          let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          let r = {},
            n = e.token || t.token;
          n && (r.Authorization = `Bearer ${n}`), e.useGlobalApi || t.useProjectHostname || !t.projectId || (r["X-Sanity-Project-ID"] = t.projectId);
          let i = !!(typeof e.withCredentials > "u" ? t.token || t.withCredentials : e.withCredentials),
            o = typeof e.timeout > "u" ? t.timeout : e.timeout;
          return Object.assign({}, e, {
            headers: Object.assign({}, r, e.headers || {}),
            timeout: typeof o > "u" ? 3e5 : o,
            proxy: e.proxy || t.proxy,
            json: !0,
            withCredentials: i,
            fetch: "object" == typeof e.fetch && "object" == typeof t.fetch ? {
              ...t.fetch,
              ...e.fetch
            } : e.fetch || t.fetch
          });
        }(a, Object.assign({}, r, {
          url: eX(t, s, c)
        })),
        f = new tm(t => e(h, a.requester).subscribe(t));
      return r.signal ? f.pipe((o = r.signal, t => new tm(e => {
        let r = () => e.error(function (t) {
          var e, r;
          if (eK) return new DOMException(null != (e = null == t ? void 0 : t.reason) ? e : "The operation was aborted.", "AbortError");
          let n = Error(null != (r = null == t ? void 0 : t.reason) ? r : "The operation was aborted.");
          return n.name = "AbortError", n;
        }(o));
        if (o && o.aborted) {
          r();
          return;
        }
        let n = t.subscribe(e);
        return o.addEventListener("abort", r), () => {
          o.removeEventListener("abort", r), n.unsubscribe();
        };
      }))) : f;
    }
    function eY(t, e, r) {
      return eJ(t, e, r).pipe(tW(t => "response" === t.type), tz(t => t.body));
    }
    function eG(t, e, r) {
      let n = t4(t.config()),
        i = `/${e}/${n}`;
      return `/data${r ? `${i}/${r}` : i}`.replace(/\/($|\?)/, "$1");
    }
    function eX(t, e) {
      let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      let {
        url: n,
        cdnUrl: i
      } = t.config();
      return `${r ? i : n}/${e.replace(/^\//, "")}`;
    }
    let eK = !!globalThis.DOMException;
    var eZ,
      eQ,
      e0,
      e1,
      e3,
      e6,
      e2 = (t, e, r) => {
        if (!e.has(t)) throw TypeError("Cannot " + r);
      },
      e9 = (t, e, r) => (e2(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
      e5 = (t, e, r) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
      },
      e4 = (t, e, r, n) => (e2(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
    class e8 {
      constructor(t, e) {
        e5(this, e3, void 0), e5(this, e6, void 0), e4(this, e3, t), e4(this, e6, e);
      }
      upload(t, e, r) {
        return rt(e9(this, e3), e9(this, e6), t, e, r);
      }
    }
    e3 = new WeakMap(), e6 = new WeakMap();
    class e7 {
      constructor(t, e) {
        e5(this, ra, void 0), e5(this, ru, void 0), e4(this, ra, t), e4(this, ru, e);
      }
      upload(t, e, r) {
        return tU(rt(e9(this, ra), e9(this, ru), t, e, r).pipe(tW(t => "response" === t.type), tz(t => t.body.document)));
      }
    }
    function rt(t, e, r, n) {
      let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      t3(r);
      let o = i.extract || void 0;
      o && !o.length && (o = ["none"]);
      let s = t4(t.config()),
        a = "image" === r ? "images" : "files",
        u = !(typeof File > "u") && n instanceof File ? Object.assign({
          filename: !1 === i.preserveFilename ? void 0 : n.name,
          contentType: n.type
        }, i) : i,
        {
          tag: c,
          label: l,
          title: h,
          description: f,
          creditLine: p,
          filename: d,
          source: y
        } = u,
        m = {
          label: l,
          title: h,
          description: f,
          filename: d,
          meta: o,
          creditLine: p
        };
      return y && (m.sourceId = y.id, m.sourceName = y.name, m.sourceUrl = y.url), eJ(t, e, {
        tag: c,
        method: "POST",
        timeout: u.timeout || 0,
        uri: `/assets/${a}/${s}`,
        headers: u.contentType ? {
          "Content-Type": u.contentType
        } : {},
        query: m,
        body: n
      });
    }
    ra = new WeakMap(), ru = new WeakMap();
    var re = (t, e) => Object.keys(e).concat(Object.keys(t)).reduce((r, n) => (r[n] = typeof t[n] > "u" ? e[n] : t[n], r), {});
    let rr = (t, e) => e.reduce((e, r) => (typeof t[r] > "u" || (e[r] = t[r]), e), {}),
      rn = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"],
      ri = {
        includeResult: !0
      };
    function ro(t, e) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      let {
          url: i,
          token: o,
          withCredentials: s,
          requestTagPrefix: a
        } = this.config(),
        u = n.tag && a ? [a, n.tag].join(".") : n.tag,
        c = {
          ...re(n, ri),
          tag: u
        },
        l = eA({
          query: t,
          params: e,
          options: {
            tag: u,
            ...rr(c, rn)
          }
        }),
        h = `${i}${eG(this, "listen", l)}`;
      if (h.length > 14800) return new tm(t => t.error(Error("Query too large for listener")));
      let f = c.events ? c.events : ["mutation"],
        p = -1 !== f.indexOf("reconnect"),
        d = {};
      return (o || s) && (d.withCredentials = !0), o && (d.headers = {
        Authorization: `Bearer ${o}`
      }), new tm(t => {
        let e;
        l().then(t => {
          e = t;
        }).catch(e => {
          t.error(e), m();
        });
        let n,
          i = !1;
        function o() {
          i || (p && t.next({
            type: "reconnect"
          }), i || e.readyState !== e.CLOSED || (c(), clearTimeout(n), n = setTimeout(y, 100)));
        }
        function s(e) {
          t.error(function (t) {
            if (t instanceof Error) return t;
            let e = rs(t);
            return e instanceof Error ? e : Error(e.error ? e.error.description ? e.error.description : "string" == typeof e.error ? e.error : JSON.stringify(e.error, null, 2) : e.message || "Unknown listener error");
          }(e));
        }
        function a(e) {
          let r = rs(e);
          return r instanceof Error ? t.error(r) : t.next(r);
        }
        function u() {
          i = !0, c(), t.complete();
        }
        function c() {
          e && (e.removeEventListener("error", o), e.removeEventListener("channelError", s), e.removeEventListener("disconnect", u), f.forEach(t => e.removeEventListener(t, a)), e.close());
        }
        async function l() {
          let {
              default: t
            } = await r.e(704).then(r.t.bind(r, 83014, 19)),
            e = new t(h, d);
          return e.addEventListener("error", o), e.addEventListener("channelError", s), e.addEventListener("disconnect", u), f.forEach(t => e.addEventListener(t, a)), e;
        }
        function y() {
          l().then(t => {
            e = t;
          }).catch(e => {
            t.error(e), m();
          });
        }
        function m() {
          i = !0, c();
        }
        return m;
      });
    }
    function rs(t) {
      try {
        let e = t.data && JSON.parse(t.data) || {};
        return Object.assign({
          type: t.type
        }, e);
      } catch (t) {
        return t;
      }
    }
    var ra,
      ru,
      rc,
      rl,
      rh = (t, e, r) => {
        if (!e.has(t)) throw TypeError("Cannot " + r);
      },
      rf = (t, e, r) => (rh(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
      rp = (t, e, r) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
      },
      rd = (t, e, r, n) => (rh(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
    class ry {
      constructor(t, e) {
        rp(this, rc, void 0), rp(this, rl, void 0), rd(this, rc, t), rd(this, rl, e);
      }
      create(t, e) {
        return rg(rf(this, rc), rf(this, rl), "PUT", t, e);
      }
      edit(t, e) {
        return rg(rf(this, rc), rf(this, rl), "PATCH", t, e);
      }
      delete(t) {
        return rg(rf(this, rc), rf(this, rl), "DELETE", t);
      }
      list() {
        return eY(rf(this, rc), rf(this, rl), {
          uri: "/datasets",
          tag: null
        });
      }
    }
    rc = new WeakMap(), rl = new WeakMap();
    class rm {
      constructor(t, e) {
        rp(this, rv, void 0), rp(this, rb, void 0), rd(this, rv, t), rd(this, rb, e);
      }
      create(t, e) {
        return tU(rg(rf(this, rv), rf(this, rb), "PUT", t, e));
      }
      edit(t, e) {
        return tU(rg(rf(this, rv), rf(this, rb), "PATCH", t, e));
      }
      delete(t) {
        return tU(rg(rf(this, rv), rf(this, rb), "DELETE", t));
      }
      list() {
        return tU(eY(rf(this, rv), rf(this, rb), {
          uri: "/datasets",
          tag: null
        }));
      }
    }
    function rg(t, e, r, n, i) {
      return t0(n), eY(t, e, {
        method: r,
        uri: `/datasets/${n}`,
        body: i,
        tag: null
      });
    }
    rv = new WeakMap(), rb = new WeakMap();
    var rv,
      rb,
      rw,
      rC,
      rO = (t, e, r) => {
        if (!e.has(t)) throw TypeError("Cannot " + r);
      },
      rx = (t, e, r) => (rO(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
      rE = (t, e, r) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
      },
      rk = (t, e, r, n) => (rO(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
    class rS {
      constructor(t, e) {
        rE(this, rw, void 0), rE(this, rC, void 0), rk(this, rw, t), rk(this, rC, e);
      }
      list(t) {
        let e = (null == t ? void 0 : t.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
        return eY(rx(this, rw), rx(this, rC), {
          uri: e
        });
      }
      getById(t) {
        return eY(rx(this, rw), rx(this, rC), {
          uri: `/projects/${t}`
        });
      }
    }
    rw = new WeakMap(), rC = new WeakMap();
    class rj {
      constructor(t, e) {
        rE(this, rI, void 0), rE(this, r_, void 0), rk(this, rI, t), rk(this, r_, e);
      }
      list(t) {
        let e = (null == t ? void 0 : t.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
        return tU(eY(rx(this, rI), rx(this, r_), {
          uri: e
        }));
      }
      getById(t) {
        return tU(eY(rx(this, rI), rx(this, r_), {
          uri: `/projects/${t}`
        }));
      }
    }
    rI = new WeakMap(), r_ = new WeakMap();
    var rI,
      r_,
      rT,
      rM,
      rA = (t, e, r) => {
        if (!e.has(t)) throw TypeError("Cannot " + r);
      },
      r$ = (t, e, r) => (rA(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
      rR = (t, e, r) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
      },
      rP = (t, e, r, n) => (rA(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
    class rF {
      constructor(t, e) {
        rR(this, rT, void 0), rR(this, rM, void 0), rP(this, rT, t), rP(this, rM, e);
      }
      getById(t) {
        return eY(r$(this, rT), r$(this, rM), {
          uri: `/users/${t}`
        });
      }
    }
    rT = new WeakMap(), rM = new WeakMap();
    class rU {
      constructor(t, e) {
        rR(this, rq, void 0), rR(this, rz, void 0), rP(this, rq, t), rP(this, rz, e);
      }
      getById(t) {
        return tU(eY(r$(this, rq), r$(this, rz), {
          uri: `/users/${t}`
        }));
      }
    }
    rq = new WeakMap(), rz = new WeakMap();
    var rq,
      rz,
      rN,
      rD,
      rW = (t, e, r) => {
        if (!e.has(t)) throw TypeError("Cannot " + r);
      },
      rH = (t, e, r) => (rW(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
      rL = (t, e, r) => {
        if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
        e instanceof WeakSet ? e.add(t) : e.set(t, r);
      },
      rB = (t, e, r, n) => (rW(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
    let rV = class t {
      constructor(t) {
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : eC;
        rL(this, rN, void 0), rL(this, rD, void 0), this.listen = ro, this.config(e), rB(this, rD, t), this.assets = new e8(this, rH(this, rD)), this.datasets = new ry(this, rH(this, rD)), this.projects = new rS(this, rH(this, rD)), this.users = new rF(this, rH(this, rD));
      }
      clone() {
        return new t(rH(this, rD), this.config());
      }
      config(t) {
        if (void 0 === t) return {
          ...rH(this, rN)
        };
        if (rH(this, rN) && !1 === rH(this, rN).allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        return rB(this, rN, ek(t, rH(this, rN) || {})), this;
      }
      withConfig(e) {
        let r = this.config();
        return new t(rH(this, rD), {
          ...r,
          ...e,
          stega: {
            ...(r.stega || {}),
            ...("boolean" == typeof (null == e ? void 0 : e.stega) ? {
              enabled: e.stega
            } : (null == e ? void 0 : e.stega) || {})
          }
        });
      }
      fetch(t, e, r) {
        return eq(this, rH(this, rD), rH(this, rN).stega, t, e, r);
      }
      getDocument(t, e) {
        return ez(this, rH(this, rD), t, e);
      }
      getDocuments(t, e) {
        return eN(this, rH(this, rD), t, e);
      }
      create(t, e) {
        return eV(this, rH(this, rD), t, "create", e);
      }
      createIfNotExists(t, e) {
        return eD(this, rH(this, rD), t, e);
      }
      createOrReplace(t, e) {
        return eW(this, rH(this, rD), t, e);
      }
      delete(t, e) {
        return eH(this, rH(this, rD), t, e);
      }
      mutate(t, e) {
        return eL(this, rH(this, rD), t, e);
      }
      patch(t, e) {
        return new ei(t, e, this);
      }
      transaction(t) {
        return new ep(t, this);
      }
      request(t) {
        return eY(this, rH(this, rD), t);
      }
      getUrl(t, e) {
        return eX(this, t, e);
      }
      getDataUrl(t, e) {
        return eG(this, t, e);
      }
    };
    rN = new WeakMap(), rD = new WeakMap();
    let rJ = class t {
      constructor(t) {
        let e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : eC;
        rL(this, u, void 0), rL(this, c, void 0), this.listen = ro, this.config(e), rB(this, c, t), this.assets = new e7(this, rH(this, c)), this.datasets = new rm(this, rH(this, c)), this.projects = new rj(this, rH(this, c)), this.users = new rU(this, rH(this, c)), this.observable = new rV(t, e);
      }
      clone() {
        return new t(rH(this, c), this.config());
      }
      config(t) {
        if (void 0 === t) return {
          ...rH(this, u)
        };
        if (rH(this, u) && !1 === rH(this, u).allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        return this.observable && this.observable.config(t), rB(this, u, ek(t, rH(this, u) || {})), this;
      }
      withConfig(e) {
        let r = this.config();
        return new t(rH(this, c), {
          ...r,
          ...e,
          stega: {
            ...(r.stega || {}),
            ...("boolean" == typeof (null == e ? void 0 : e.stega) ? {
              enabled: e.stega
            } : (null == e ? void 0 : e.stega) || {})
          }
        });
      }
      fetch(t, e, r) {
        return tU(eq(this, rH(this, c), rH(this, u).stega, t, e, r));
      }
      getDocument(t, e) {
        return tU(ez(this, rH(this, c), t, e));
      }
      getDocuments(t, e) {
        return tU(eN(this, rH(this, c), t, e));
      }
      create(t, e) {
        return tU(eV(this, rH(this, c), t, "create", e));
      }
      createIfNotExists(t, e) {
        return tU(eD(this, rH(this, c), t, e));
      }
      createOrReplace(t, e) {
        return tU(eW(this, rH(this, c), t, e));
      }
      delete(t, e) {
        return tU(eH(this, rH(this, c), t, e));
      }
      mutate(t, e) {
        return tU(eL(this, rH(this, c), t, e));
      }
      patch(t, e) {
        return new eo(t, e, this);
      }
      transaction(t) {
        return new ef(t, this);
      }
      request(t) {
        return tU(eY(this, rH(this, c), t));
      }
      dataRequest(t, e, r) {
        return tU(eB(this, rH(this, c), t, e, r));
      }
      getUrl(t, e) {
        return eX(this, t, e);
      }
      getDataUrl(t, e) {
        return eG(this, t, e);
      }
    };
    u = new WeakMap(), c = new WeakMap();
    let rY = rJ;
    function rG(t, e) {
      return {
        requester: tG(t, {}).defaultRequester,
        createClient: r => new e(tG(t, {
          maxRetries: r.maxRetries,
          retryDelay: r.retryDelay
        }), r)
      };
    }
    var rX = [];
  },
  60058: function (t, e, r) {
    "use strict";

    r.d(e, {
      e: function () {
        return v;
      }
    });
    var n = r(53482);
    let i = (0, n.d)(n.e, n.S),
      o = i.requester,
      s = i.createClient;
    var a = r(34772);
    let u = {
      0: 8203,
      1: 8204,
      2: 8205,
      3: 8290,
      4: 8291,
      5: 8288,
      6: 65279,
      7: 8289,
      8: 119155,
      9: 119156,
      a: 119157,
      b: 119158,
      c: 119159,
      d: 119160,
      e: 119161,
      f: 119162
    };
    Object.fromEntries(Object.entries(u).map(t => t.reverse()));
    let c = `${Object.values(u).map(t => `\\u{${t.toString(16)}}`).join("")}`;
    RegExp(`(?:[${c}]{2})+`, "gu");
    var l = r(34406);
    let h = {
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t",
        "'": "\\'",
        "\\": "\\\\"
      },
      f = {
        "\\f": "\f",
        "\\n": "\n",
        "\\r": "\r",
        "\\t": "	",
        "\\'": "'",
        "\\\\": "\\"
      };
    function p(t) {
      let e;
      let r = [],
        n = /\['(.*?)'\]|\[(\d+)\]/g;
      for (; null !== (e = n.exec(t));) {
        if (void 0 !== e[1]) {
          let t = e[1].replace(/\\(\\|f|n|r|t|')/g, t => f[t]);
          r.push(t);
          continue;
        }
        if (void 0 !== e[2]) {
          r.push(parseInt(e[2], 10));
          continue;
        }
      }
      return r;
    }
    let d = t => {
      let {
          path: e
        } = t,
        r = e.at(-1);
      return !("slug" === e.at(-2) && "current" === r || "string" == typeof r && r.startsWith("_")) && ("number" != typeof r || "marks" !== e.at(-2) || "number" != typeof e.at(-3) || "children" !== e.at(-4) || "number" != typeof e.at(-5)) && ("href" !== r || "number" != typeof e.at(-2) || "markDefs" !== e.at(-3) || "number" != typeof e.at(-4)) && ("string" != typeof r || "number" != typeof e.at(-2) || "style" !== r && "listItem" !== r);
    };
    function y(t) {
      return t.map((t, e) => "number" == typeof t ? "[".concat(t, "]") : e > 0 ? ".".concat(t) : t).join("");
    }
    let m = t => {
      let {
          encodeSourceMap: e = function () {
            try {
              return "true" === (void 0).SANITY_SOURCE_MAP;
            } catch {}
            try {
              return "true" === l.env.SANITY_SOURCE_MAP;
            } catch {}
            return !1;
          }(),
          encodeSourceMapAtPath: r,
          studioUrl: i = function () {
            try {
              return (void 0).SANITY_STUDIO_URL;
            } catch {}
            try {
              return l.env.SANITY_STUDIO_URL;
            } catch {}
          }(),
          logger: c,
          ...f
        } = t,
        m = !0 === e;
      "auto" === e && (m = function () {
        try {
          return "preview" === (void 0).VERCEL_ENV;
        } catch {}
        try {
          return "preview" === l.env.VERCEL_ENV;
        } catch {}
        return !1;
      }());
      try {
        if (m && !1 !== t.resultSourceMap) {
          null == c || c.debug("[@sanity/preview-kit]: Creating source map enabled client");
          let e = function (t) {
            let {
              studioUrl: e,
              encodeSourceMapAtPath: r,
              logger: n
            } = t;
            !function (t, e) {
              if (!t) throw Error("Invariant failed");
            }(e, 0);
            let i = o.clone();
            function s(t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
              return e({
                maxRedirects: 0,
                ...t
              });
            }
            return i.use(function (t) {
              let {
                  studioUrl: e,
                  encodeSourceMapAtPath: r,
                  logger: n
                } = t,
                i = function (t, e, r) {
                  let n = function (t) {
                      let e = t.replace(/\/$/, "");
                      return (t, r) => "".concat(e, "/intent/edit/id=").concat(t._id, ";path=").concat(encodeURIComponent((Array.isArray(r) ? r : p(r)).map((t, e) => "number" == typeof t ? "[".concat(t, "]") : e > 0 ? ".".concat(t) : t).join("")));
                    }(t),
                    i = {
                      encoded: [],
                      skipped: []
                    },
                    o = (t, o, s) => ("function" == typeof e ? e({
                      path: s,
                      filterDefault: d
                    }) : d({
                      path: s,
                      filterDefault: d
                    })) === !1 ? (r && i.skipped.push({
                      path: y(s),
                      value: "".concat(t.slice(0, 20)).concat(t.length > 20 ? "..." : ""),
                      length: t.length
                    }), t) : (r && i.encoded.push({
                      path: y(s),
                      value: "".concat(t.slice(0, 20)).concat(t.length > 20 ? "..." : ""),
                      length: t.length
                    }), function (t, e) {
                      let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "auto";
                      return !0 === r ? t : "auto" === r && (Date.parse(t) || function (t) {
                        try {
                          new URL(t);
                        } catch {
                          return !1;
                        }
                        return !0;
                      }(t)) ? t : `${t}${function (t) {
                        let e = JSON.stringify(t);
                        return Array.from(e).map(t => {
                          let r = t.charCodeAt(0);
                          if (r > 255) throw Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${t} (${r})`);
                          return Array.from(r.toString(16).padStart(2, "0")).map(t => String.fromCodePoint(u[t])).join("");
                        }).join("");
                      }(e)}`;
                    }(t, {
                      origin: "sanity.io",
                      href: n(o, s)
                    }, "auto"));
                  return {
                    report: i,
                    transcode: o,
                    walk: t => (i.encoded.length = 0, i.skipped.length = 0, function (t, e) {
                      if (!t.resultSourceMap) throw TypeError("Missing resultSourceMap");
                      return t.result = function t(e, r) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return null !== e && Array.isArray(e) ? e.map((e, i) => t(e, r, n.concat(i))) : "object" == typeof e && null !== e ? Object.fromEntries(Object.entries(e).map(e => {
                          let [i, o] = e;
                          return [i, t(o, r, n.concat(i))];
                        })) : r(e, n);
                      }(t.result, (r, n) => {
                        if ("string" != typeof r) return r;
                        let i = function (t, e, r) {
                          let n = "$".concat(t.map(t => {
                            if ("string" == typeof t) {
                              let e = t.replace(/[\f\n\r\t'\\]/g, t => h[t]);
                              return "['".concat(e, "']");
                            }
                            return "[".concat(t, "]");
                          }).join(""));
                          if (!e.mappings) {
                            null == r || r.error("Missing resultSourceMap.mappings", {
                              resultSourceMap: e
                            });
                            return;
                          }
                          if (void 0 !== e.mappings[n]) return [e.mappings[n], n, ""];
                          let i = Object.entries(e.mappings).filter(t => {
                            let [e] = t;
                            return n.startsWith(e);
                          }).sort((t, e) => {
                            let [r] = t,
                              [n] = e;
                            return n.length - r.length;
                          });
                          if (0 == i.length) return;
                          let [o, s] = i[0],
                            a = n.substring(o.length);
                          return [s, o, a];
                        }(n, t.resultSourceMap);
                        if (!i) return r;
                        let [o,, s] = i;
                        if ("value" !== o.type || "documentValue" !== o.source.type) return r;
                        let a = t.resultSourceMap.documents[o.source.document];
                        return e(r, a, t.resultSourceMap.paths[o.source.path] + s);
                      }), t;
                    }(t, (t, e, r) => o(t, e, p(r))))
                  };
                }(e, r, n);
              return {
                onResponse: t => {
                  var e;
                  if ("object" != typeof t || null === t) return t;
                  if (Array.isArray(t.body) || "string" == typeof t.body || a(t.body)) {
                    if (e = t.body, "object" != typeof e || null === e || !("resultSourceMap" in e)) return n && (null == n || n.error("[@sanity/preview-kit]: Missing Content Source Map from response body", t.body)), t;
                    let r = i.walk(t.body);
                    if (n) {
                      let t = i.report.skipped.length,
                        e = i.report.encoded.length;
                      if ((t || e) && (null == n || n.groupCollapsed("[@sanity/preview-kit]: Stega encoding source map into result"), null == n || n.log("[@sanity/preview-kit]: Paths encoded: ".concat(i.report.encoded.length, ", skipped: ").concat(i.report.skipped.length))), i.report.encoded.length > 0 && (null == n || n.log("[@sanity/preview-kit]: Table of encoded paths"), null == n || n.table(i.report.encoded)), i.report.skipped.length > 0) {
                        let t = new Set();
                        for (let {
                          path: e
                        } of i.report.skipped) t.add(e.replace(/\[\d+\]/g, "[]"));
                        null == n || n.log("[@sanity/preview-kit]: List of skipped paths", [...t.values()]);
                      }
                      (t || e) && (null == n || n.groupEnd());
                    }
                    return {
                      ...t,
                      body: r
                    };
                  }
                  return t;
                }
              };
            }({
              studioUrl: e,
              encodeSourceMapAtPath: r,
              logger: n
            })), s.defaultRequester = i, s;
          }({
            ...t,
            studioUrl: i
          });
          return new n.S(e, {
            ...f,
            resultSourceMap: !0
          });
        }
      } catch (t) {
        console.error("[@sanity/preview-kit]: Error creating client", t, "falling back to non-embedded sourcemap mode");
      }
      return s(f);
    };
    var g = r(34406);
    function v(t) {
      let {
        studioUrl: e = g.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
        encodeSourceMap: r = !1
      } = t;
      return m({
        ...t,
        studioUrl: e,
        encodeSourceMap: r
      });
    }
  },
  22970: function (t, e, r) {
    "use strict";

    r.d(e, {
      CR: function () {
        return c;
      },
      FC: function () {
        return f;
      },
      Jh: function () {
        return a;
      },
      KL: function () {
        return p;
      },
      XA: function () {
        return u;
      },
      ZT: function () {
        return i;
      },
      _T: function () {
        return o;
      },
      ev: function () {
        return l;
      },
      mG: function () {
        return s;
      },
      qq: function () {
        return h;
      }
    });
    var n = function (t, e) {
      return (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      })(t, e);
    };
    function i(t, e) {
      if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
      function r() {
        this.constructor = t;
      }
      n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }
    function o(t, e) {
      var r = {};
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
      return r;
    }
    function s(t, e, r, n) {
      return new (r || (r = Promise))(function (i, o) {
        function s(t) {
          try {
            u(n.next(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          try {
            u(n.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function u(t) {
          var e;
          t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function (t) {
            t(e);
          })).then(s, a);
        }
        u((n = n.apply(t, e || [])).next());
      });
    }
    function a(t, e) {
      var r,
        n,
        i,
        o,
        s = {
          label: 0,
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;
      function a(a) {
        return function (u) {
          return function (a) {
            if (r) throw TypeError("Generator is already executing.");
            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
              if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
              switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                case 0:
                case 1:
                  i = a;
                  break;
                case 4:
                  return s.label++, {
                    value: a[1],
                    done: !1
                  };
                case 5:
                  s.label++, n = a[1], a = [0];
                  continue;
                case 7:
                  a = s.ops.pop(), s.trys.pop();
                  continue;
                default:
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                    s.label = a[1];
                    break;
                  }
                  if (6 === a[0] && s.label < i[1]) {
                    s.label = i[1], i = a;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2], s.ops.push(a);
                    break;
                  }
                  i[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              a = e.call(t, s);
            } catch (t) {
              a = [6, t], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([a, u]);
        };
      }
    }
    function u(t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
        r = e && t[e],
        n = 0;
      if (r) return r.call(t);
      if (t && "number" == typeof t.length) return {
        next: function () {
          return t && n >= t.length && (t = void 0), {
            value: t && t[n++],
            done: !t
          };
        }
      };
      throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function c(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r) return t;
      var n,
        i,
        o = r.call(t),
        s = [];
      try {
        for (; (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          n && !n.done && (r = o.return) && r.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    }
    function l(t, e, r) {
      if (r || 2 == arguments.length) for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
      return t.concat(n || Array.prototype.slice.call(e));
    }
    function h(t) {
      return this instanceof h ? (this.v = t, this) : new h(t);
    }
    function f(t, e, r) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var n,
        i = r.apply(t, e || []),
        o = [];
      return n = {}, s("next"), s("throw"), s("return"), n[Symbol.asyncIterator] = function () {
        return this;
      }, n;
      function s(t) {
        i[t] && (n[t] = function (e) {
          return new Promise(function (r, n) {
            o.push([t, e, r, n]) > 1 || a(t, e);
          });
        });
      }
      function a(t, e) {
        try {
          var r;
          (r = i[t](e)).value instanceof h ? Promise.resolve(r.value.v).then(u, c) : l(o[0][2], r);
        } catch (t) {
          l(o[0][3], t);
        }
      }
      function u(t) {
        a("next", t);
      }
      function c(t) {
        a("throw", t);
      }
      function l(t, e) {
        t(e), o.shift(), o.length && a(o[0][0], o[0][1]);
      }
    }
    function p(t) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var e,
        r = t[Symbol.asyncIterator];
      return r ? r.call(t) : (t = u(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function () {
        return this;
      }, e);
      function n(r) {
        e[r] = t[r] && function (e) {
          return new Promise(function (n, i) {
            !function (t, e, r, n) {
              Promise.resolve(n).then(function (e) {
                t({
                  value: e,
                  done: r
                });
              }, e);
            }(n, i, (e = t[r](e)).done, e.value);
          });
        };
      }
    }
    "function" == typeof SuppressedError && SuppressedError;
  }
}]);