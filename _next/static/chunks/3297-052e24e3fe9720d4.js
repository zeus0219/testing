"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3297],
  {
    83297: function (e, t, a) {
      a.d(t, {
        A: function () {
          return eu;
        },
        x: function () {
          return eg;
        },
      });
      var n,
        r = a(15039),
        o = a(68946),
        {
          entries: i,
          setPrototypeOf: s,
          isFrozen: l,
          getPrototypeOf: d,
          getOwnPropertyDescriptor: c,
        } = Object,
        { freeze: u, seal: m, create: p } = Object,
        { apply: f, construct: h } = "undefined" != typeof Reflect && Reflect;
      u ||
        (u = function (e) {
          return e;
        }),
        m ||
          (m = function (e) {
            return e;
          }),
        f ||
          (f = function (e, t, a) {
            return e.apply(t, a);
          }),
        h ||
          (h = function (e, t) {
            return new e(...t);
          });
      var g = _(Array.prototype.forEach),
        y = _(Array.prototype.pop),
        b = _(Array.prototype.push),
        v = _(String.prototype.toLowerCase),
        w = _(String.prototype.toString),
        x = _(String.prototype.match),
        E = _(String.prototype.replace),
        T = _(String.prototype.indexOf),
        N = _(String.prototype.trim),
        A = _(Object.prototype.hasOwnProperty),
        S = _(RegExp.prototype.test),
        k =
          ((n = TypeError),
          function () {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
              t[a] = arguments[a];
            return h(n, t);
          });
      function _(e) {
        return function (t) {
          for (
            var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), r = 1;
            r < a;
            r++
          )
            n[r - 1] = arguments[r];
          return f(e, t, n);
        };
      }
      function R(e, t) {
        let a =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v;
        s && s(e, null);
        let n = t.length;
        for (; n--; ) {
          let r = t[n];
          if ("string" == typeof r) {
            let e = a(r);
            e !== r && (l(t) || (t[n] = e), (r = e));
          }
          e[r] = !0;
        }
        return e;
      }
      function C(e) {
        let t = p(null);
        for (let [a, n] of i(e))
          A(e, a) &&
            (Array.isArray(n)
              ? (t[a] = (function (e) {
                  for (let t = 0; t < e.length; t++) A(e, t) || (e[t] = null);
                  return e;
                })(n))
              : n && "object" == typeof n && n.constructor === Object
              ? (t[a] = C(n))
              : (t[a] = n));
        return t;
      }
      function M(e, t) {
        for (; null !== e; ) {
          let a = c(e, t);
          if (a) {
            if (a.get) return _(a.get);
            if ("function" == typeof a.value) return _(a.value);
          }
          e = d(e);
        }
        return function () {
          return null;
        };
      }
      var L = u([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
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
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        D = u([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern",
        ]),
        I = u([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        O = u([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use",
        ]),
        P = u([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
          "mprescripts",
        ]),
        z = u([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none",
        ]),
        U = u(["#text"]),
        B = u([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "nonce",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "playsinline",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "xmlns",
          "slot",
        ]),
        H = u([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clippathunits",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "startoffset",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "systemlanguage",
          "tabindex",
          "targetx",
          "targety",
          "transform",
          "transform-origin",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]),
        F = u([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]),
        Y = u([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        j = m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        W = m(/<%[\w\W]*|[\w\W]*%>/gm),
        G = m(/\${[\w\W]*}/gm),
        $ = m(/^data-[\-\w.\u00B7-\uFFFF]/),
        X = m(/^aria-[\-\w]+$/),
        V = m(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
        ),
        q = m(/^(?:\w+script|data):/i),
        K = m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Z = m(/^html$/i),
        J = Object.freeze({
          __proto__: null,
          MUSTACHE_EXPR: j,
          ERB_EXPR: W,
          TMPLIT_EXPR: G,
          DATA_ATTR: $,
          ARIA_ATTR: X,
          IS_ALLOWED_URI: V,
          IS_SCRIPT_OR_DATA: q,
          ATTR_WHITESPACE: K,
          DOCTYPE_NAME: Z,
          CUSTOM_ELEMENT: m(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i),
        }),
        Q = function (e, t) {
          if ("object" != typeof e || "function" != typeof e.createPolicy)
            return null;
          let a = null,
            n = "data-tt-policy-suffix";
          t && t.hasAttribute(n) && (a = t.getAttribute(n));
          let r = "dompurify" + (a ? "#" + a : "");
          try {
            return e.createPolicy(r, {
              createHTML: (e) => e,
              createScriptURL: (e) => e,
            });
          } catch (e) {
            return (
              console.warn(
                "TrustedTypes policy " + r + " could not be created."
              ),
              null
            );
          }
        },
        ee = (function e() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "undefined" == typeof window
                ? null
                : window,
            a = (t) => e(t);
          if (
            ((a.version = "3.0.10"),
            (a.removed = []),
            !t || !t.document || 9 !== t.document.nodeType)
          )
            return (a.isSupported = !1), a;
          let { document: n } = t,
            r = n,
            o = r.currentScript,
            {
              DocumentFragment: s,
              HTMLTemplateElement: l,
              Node: d,
              Element: c,
              NodeFilter: m,
              NamedNodeMap: f = t.NamedNodeMap || t.MozNamedAttrMap,
              HTMLFormElement: h,
              DOMParser: _,
              trustedTypes: j,
            } = t,
            W = c.prototype,
            G = M(W, "cloneNode"),
            $ = M(W, "nextSibling"),
            X = M(W, "childNodes"),
            q = M(W, "parentNode");
          if ("function" == typeof l) {
            let e = n.createElement("template");
            e.content &&
              e.content.ownerDocument &&
              (n = e.content.ownerDocument);
          }
          let K,
            ee = "",
            {
              implementation: et,
              createNodeIterator: ea,
              createDocumentFragment: en,
              getElementsByTagName: er,
            } = n,
            { importNode: eo } = r,
            ei = {};
          a.isSupported =
            "function" == typeof i &&
            "function" == typeof q &&
            et &&
            void 0 !== et.createHTMLDocument;
          let {
              MUSTACHE_EXPR: es,
              ERB_EXPR: el,
              TMPLIT_EXPR: ed,
              DATA_ATTR: ec,
              ARIA_ATTR: eu,
              IS_SCRIPT_OR_DATA: em,
              ATTR_WHITESPACE: ep,
              CUSTOM_ELEMENT: ef,
            } = J,
            { IS_ALLOWED_URI: eh } = J,
            eg = null,
            ey = R({}, [...L, ...D, ...I, ...P, ...U]),
            eb = null,
            ev = R({}, [...B, ...H, ...F, ...Y]),
            ew = Object.seal(
              p(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              })
            ),
            ex = null,
            eE = null,
            eT = !0,
            eN = !0,
            eA = !1,
            eS = !0,
            ek = !1,
            e_ = !1,
            eR = !1,
            eC = !1,
            eM = !1,
            eL = !1,
            eD = !1,
            eI = !0,
            eO = !1,
            eP = !0,
            ez = !1,
            eU = {},
            eB = null,
            eH = R({}, [
              "annotation-xml",
              "audio",
              "colgroup",
              "desc",
              "foreignobject",
              "head",
              "iframe",
              "math",
              "mi",
              "mn",
              "mo",
              "ms",
              "mtext",
              "noembed",
              "noframes",
              "noscript",
              "plaintext",
              "script",
              "style",
              "svg",
              "template",
              "thead",
              "title",
              "video",
              "xmp",
            ]),
            eF = null,
            eY = R({}, ["audio", "video", "img", "source", "image", "track"]),
            ej = null,
            eW = R({}, [
              "alt",
              "class",
              "for",
              "id",
              "label",
              "name",
              "pattern",
              "placeholder",
              "role",
              "summary",
              "title",
              "value",
              "style",
              "xmlns",
            ]),
            eG = "http://www.w3.org/1998/Math/MathML",
            e$ = "http://www.w3.org/2000/svg",
            eX = "http://www.w3.org/1999/xhtml",
            eV = eX,
            eq = !1,
            eK = null,
            eZ = R({}, [eG, e$, eX], w),
            eJ = null,
            eQ = ["application/xhtml+xml", "text/html"],
            e0 = null,
            e1 = null,
            e2 = n.createElement("form"),
            e5 = function (e) {
              return e instanceof RegExp || e instanceof Function;
            },
            e4 = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (!(e1 && e1 === e)) {
                if (
                  ((e && "object" == typeof e) || (e = {}),
                  (e = C(e)),
                  (e0 =
                    "application/xhtml+xml" ===
                    (eJ =
                      -1 === eQ.indexOf(e.PARSER_MEDIA_TYPE)
                        ? "text/html"
                        : e.PARSER_MEDIA_TYPE)
                      ? w
                      : v),
                  (eg = A(e, "ALLOWED_TAGS") ? R({}, e.ALLOWED_TAGS, e0) : ey),
                  (eb = A(e, "ALLOWED_ATTR") ? R({}, e.ALLOWED_ATTR, e0) : ev),
                  (eK = A(e, "ALLOWED_NAMESPACES")
                    ? R({}, e.ALLOWED_NAMESPACES, w)
                    : eZ),
                  (ej = A(e, "ADD_URI_SAFE_ATTR")
                    ? R(C(eW), e.ADD_URI_SAFE_ATTR, e0)
                    : eW),
                  (eF = A(e, "ADD_DATA_URI_TAGS")
                    ? R(C(eY), e.ADD_DATA_URI_TAGS, e0)
                    : eY),
                  (eB = A(e, "FORBID_CONTENTS")
                    ? R({}, e.FORBID_CONTENTS, e0)
                    : eH),
                  (ex = A(e, "FORBID_TAGS") ? R({}, e.FORBID_TAGS, e0) : {}),
                  (eE = A(e, "FORBID_ATTR") ? R({}, e.FORBID_ATTR, e0) : {}),
                  (eU = !!A(e, "USE_PROFILES") && e.USE_PROFILES),
                  (eT = !1 !== e.ALLOW_ARIA_ATTR),
                  (eN = !1 !== e.ALLOW_DATA_ATTR),
                  (eA = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (eS = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
                  (ek = e.SAFE_FOR_TEMPLATES || !1),
                  (e_ = e.WHOLE_DOCUMENT || !1),
                  (eM = e.RETURN_DOM || !1),
                  (eL = e.RETURN_DOM_FRAGMENT || !1),
                  (eD = e.RETURN_TRUSTED_TYPE || !1),
                  (eC = e.FORCE_BODY || !1),
                  (eI = !1 !== e.SANITIZE_DOM),
                  (eO = e.SANITIZE_NAMED_PROPS || !1),
                  (eP = !1 !== e.KEEP_CONTENT),
                  (ez = e.IN_PLACE || !1),
                  (eh = e.ALLOWED_URI_REGEXP || V),
                  (eV = e.NAMESPACE || eX),
                  (ew = e.CUSTOM_ELEMENT_HANDLING || {}),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    e5(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (ew.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    e5(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (ew.attributeNameCheck =
                      e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    "boolean" ==
                      typeof e.CUSTOM_ELEMENT_HANDLING
                        .allowCustomizedBuiltInElements &&
                    (ew.allowCustomizedBuiltInElements =
                      e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  ek && (eN = !1),
                  eL && (eM = !0),
                  eU &&
                    ((eg = R({}, U)),
                    (eb = []),
                    !0 === eU.html && (R(eg, L), R(eb, B)),
                    !0 === eU.svg && (R(eg, D), R(eb, H), R(eb, Y)),
                    !0 === eU.svgFilters && (R(eg, I), R(eb, H), R(eb, Y)),
                    !0 === eU.mathMl && (R(eg, P), R(eb, F), R(eb, Y))),
                  e.ADD_TAGS &&
                    (eg === ey && (eg = C(eg)), R(eg, e.ADD_TAGS, e0)),
                  e.ADD_ATTR &&
                    (eb === ev && (eb = C(eb)), R(eb, e.ADD_ATTR, e0)),
                  e.ADD_URI_SAFE_ATTR && R(ej, e.ADD_URI_SAFE_ATTR, e0),
                  e.FORBID_CONTENTS &&
                    (eB === eH && (eB = C(eB)), R(eB, e.FORBID_CONTENTS, e0)),
                  eP && (eg["#text"] = !0),
                  e_ && R(eg, ["html", "head", "body"]),
                  eg.table && (R(eg, ["tbody"]), delete ex.tbody),
                  e.TRUSTED_TYPES_POLICY)
                ) {
                  if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                    throw k(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                    );
                  if (
                    "function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw k(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                    );
                  ee = (K = e.TRUSTED_TYPES_POLICY).createHTML("");
                } else
                  void 0 === K && (K = Q(j, o)),
                    null !== K &&
                      "string" == typeof ee &&
                      (ee = K.createHTML(""));
                u && u(e), (e1 = e);
              }
            },
            e3 = R({}, ["mi", "mo", "mn", "ms", "mtext"]),
            e9 = R({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            e7 = R({}, ["title", "style", "font", "a", "script"]),
            e8 = R({}, [...D, ...I, ...O]),
            e6 = R({}, [...P, ...z]),
            te = function (e) {
              let t = q(e);
              (t && t.tagName) ||
                (t = { namespaceURI: eV, tagName: "template" });
              let a = v(e.tagName),
                n = v(t.tagName);
              return (
                !!eK[e.namespaceURI] &&
                (e.namespaceURI === e$
                  ? t.namespaceURI === eX
                    ? "svg" === a
                    : t.namespaceURI === eG
                    ? "svg" === a && ("annotation-xml" === n || e3[n])
                    : !!e8[a]
                  : e.namespaceURI === eG
                  ? t.namespaceURI === eX
                    ? "math" === a
                    : t.namespaceURI === e$
                    ? "math" === a && e9[n]
                    : !!e6[a]
                  : e.namespaceURI === eX
                  ? (t.namespaceURI !== e$ || !!e9[n]) &&
                    (t.namespaceURI !== eG || !!e3[n]) &&
                    !e6[a] &&
                    (e7[a] || !e8[a])
                  : !!("application/xhtml+xml" === eJ && eK[e.namespaceURI]))
              );
            },
            tt = function (e) {
              b(a.removed, { element: e });
              try {
                e.parentNode.removeChild(e);
              } catch (t) {
                e.remove();
              }
            },
            ta = function (e, t) {
              try {
                b(a.removed, { attribute: t.getAttributeNode(e), from: t });
              } catch (e) {
                b(a.removed, { attribute: null, from: t });
              }
              if ((t.removeAttribute(e), "is" === e && !eb[e])) {
                if (eM || eL)
                  try {
                    tt(t);
                  } catch (e) {}
                else
                  try {
                    t.setAttribute(e, "");
                  } catch (e) {}
              }
            },
            tn = function (e) {
              let t = null,
                a = null;
              if (eC) e = "<remove></remove>" + e;
              else {
                let t = x(e, /^[\r\n\t ]+/);
                a = t && t[0];
              }
              "application/xhtml+xml" === eJ &&
                eV === eX &&
                (e =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  e +
                  "</body></html>");
              let r = K ? K.createHTML(e) : e;
              if (eV === eX)
                try {
                  t = new _().parseFromString(r, eJ);
                } catch (e) {}
              if (!t || !t.documentElement) {
                t = et.createDocument(eV, "template", null);
                try {
                  t.documentElement.innerHTML = eq ? ee : r;
                } catch (e) {}
              }
              let o = t.body || t.documentElement;
              return (
                e &&
                  a &&
                  o.insertBefore(n.createTextNode(a), o.childNodes[0] || null),
                eV === eX
                  ? er.call(t, e_ ? "html" : "body")[0]
                  : e_
                  ? t.documentElement
                  : o
              );
            },
            tr = function (e) {
              return ea.call(
                e.ownerDocument || e,
                e,
                m.SHOW_ELEMENT |
                  m.SHOW_COMMENT |
                  m.SHOW_TEXT |
                  m.SHOW_PROCESSING_INSTRUCTION,
                null
              );
            },
            to = function (e) {
              return "function" == typeof d && e instanceof d;
            },
            ti = function (e, t, n) {
              ei[e] &&
                g(ei[e], (e) => {
                  e.call(a, t, n, e1);
                });
            },
            ts = function (e) {
              let t = null;
              if (
                (ti("beforeSanitizeElements", e, null),
                e instanceof h &&
                  ("string" != typeof e.nodeName ||
                    "string" != typeof e.textContent ||
                    "function" != typeof e.removeChild ||
                    !(e.attributes instanceof f) ||
                    "function" != typeof e.removeAttribute ||
                    "function" != typeof e.setAttribute ||
                    "string" != typeof e.namespaceURI ||
                    "function" != typeof e.insertBefore ||
                    "function" != typeof e.hasChildNodes))
              )
                return tt(e), !0;
              let n = e0(e.nodeName);
              if (
                (ti("uponSanitizeElement", e, { tagName: n, allowedTags: eg }),
                e.hasChildNodes() &&
                  !to(e.firstElementChild) &&
                  S(/<[/\w]/g, e.innerHTML) &&
                  S(/<[/\w]/g, e.textContent))
              )
                return tt(e), !0;
              if (!eg[n] || ex[n]) {
                if (
                  !ex[n] &&
                  td(n) &&
                  ((ew.tagNameCheck instanceof RegExp &&
                    S(ew.tagNameCheck, n)) ||
                    (ew.tagNameCheck instanceof Function && ew.tagNameCheck(n)))
                )
                  return !1;
                if (eP && !eB[n]) {
                  let t = q(e) || e.parentNode,
                    a = X(e) || e.childNodes;
                  if (a && t) {
                    let n = a.length;
                    for (let r = n - 1; r >= 0; --r)
                      t.insertBefore(G(a[r], !0), $(e));
                  }
                }
                return tt(e), !0;
              }
              return (e instanceof c && !te(e)) ||
                (("noscript" === n || "noembed" === n || "noframes" === n) &&
                  S(/<\/no(script|embed|frames)/i, e.innerHTML))
                ? (tt(e), !0)
                : (ek &&
                    3 === e.nodeType &&
                    ((t = e.textContent),
                    g([es, el, ed], (e) => {
                      t = E(t, e, " ");
                    }),
                    e.textContent !== t &&
                      (b(a.removed, { element: e.cloneNode() }),
                      (e.textContent = t))),
                  ti("afterSanitizeElements", e, null),
                  !1);
            },
            tl = function (e, t, a) {
              if (eI && ("id" === t || "name" === t) && (a in n || a in e2))
                return !1;
              if (!(eN && !eE[t] && S(ec, t)) && !(eT && S(eu, t))) {
                if (!eb[t] || eE[t]) {
                  if (
                    !(
                      (td(e) &&
                        ((ew.tagNameCheck instanceof RegExp &&
                          S(ew.tagNameCheck, e)) ||
                          (ew.tagNameCheck instanceof Function &&
                            ew.tagNameCheck(e))) &&
                        ((ew.attributeNameCheck instanceof RegExp &&
                          S(ew.attributeNameCheck, t)) ||
                          (ew.attributeNameCheck instanceof Function &&
                            ew.attributeNameCheck(t)))) ||
                      ("is" === t &&
                        ew.allowCustomizedBuiltInElements &&
                        ((ew.tagNameCheck instanceof RegExp &&
                          S(ew.tagNameCheck, a)) ||
                          (ew.tagNameCheck instanceof Function &&
                            ew.tagNameCheck(a))))
                    )
                  )
                    return !1;
                } else if (
                  !ej[t] &&
                  !S(eh, E(a, ep, "")) &&
                  !(
                    ("src" === t || "xlink:href" === t || "href" === t) &&
                    "script" !== e &&
                    0 === T(a, "data:") &&
                    eF[e]
                  ) &&
                  !(eA && !S(em, E(a, ep, ""))) &&
                  a
                )
                  return !1;
              }
              return !0;
            },
            td = function (e) {
              return "annotation-xml" !== e && x(e, ef);
            },
            tc = function (e) {
              ti("beforeSanitizeAttributes", e, null);
              let { attributes: t } = e;
              if (!t) return;
              let n = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: eb,
                },
                r = t.length;
              for (; r--; ) {
                let { name: o, namespaceURI: i, value: s } = t[r],
                  l = e0(o),
                  d = "value" === o ? s : N(s);
                if (
                  ((n.attrName = l),
                  (n.attrValue = d),
                  (n.keepAttr = !0),
                  (n.forceKeepAttr = void 0),
                  ti("uponSanitizeAttribute", e, n),
                  (d = n.attrValue),
                  n.forceKeepAttr || (ta(o, e), !n.keepAttr))
                )
                  continue;
                if (!eS && S(/\/>/i, d)) {
                  ta(o, e);
                  continue;
                }
                ek &&
                  g([es, el, ed], (e) => {
                    d = E(d, e, " ");
                  });
                let c = e0(e.nodeName);
                if (tl(c, l, d)) {
                  if (
                    (eO &&
                      ("id" === l || "name" === l) &&
                      (ta(o, e), (d = "user-content-" + d)),
                    K &&
                      "object" == typeof j &&
                      "function" == typeof j.getAttributeType &&
                      !i)
                  )
                    switch (j.getAttributeType(c, l)) {
                      case "TrustedHTML":
                        d = K.createHTML(d);
                        break;
                      case "TrustedScriptURL":
                        d = K.createScriptURL(d);
                    }
                  try {
                    i ? e.setAttributeNS(i, o, d) : e.setAttribute(o, d),
                      y(a.removed);
                  } catch (e) {}
                }
              }
              ti("afterSanitizeAttributes", e, null);
            },
            tu = function e(t) {
              let a = null,
                n = tr(t);
              for (ti("beforeSanitizeShadowDOM", t, null); (a = n.nextNode()); )
                ti("uponSanitizeShadowNode", a, null),
                  ts(a) || (a.content instanceof s && e(a.content), tc(a));
              ti("afterSanitizeShadowDOM", t, null);
            };
          return (
            (a.sanitize = function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = null,
                o = null,
                i = null,
                l = null;
              if (
                ((eq = !e) && (e = "<!-->"), "string" != typeof e && !to(e))
              ) {
                if ("function" == typeof e.toString) {
                  if ("string" != typeof (e = e.toString()))
                    throw k("dirty is not a string, aborting");
                } else throw k("toString is not a function");
              }
              if (!a.isSupported) return e;
              if (
                (eR || e4(t),
                (a.removed = []),
                "string" == typeof e && (ez = !1),
                ez)
              ) {
                if (e.nodeName) {
                  let t = e0(e.nodeName);
                  if (!eg[t] || ex[t])
                    throw k(
                      "root node is forbidden and cannot be sanitized in-place"
                    );
                }
              } else if (e instanceof d)
                (1 ===
                  (o = (n = tn("<!---->")).ownerDocument.importNode(e, !0))
                    .nodeType &&
                  "BODY" === o.nodeName) ||
                "HTML" === o.nodeName
                  ? (n = o)
                  : n.appendChild(o);
              else {
                if (!eM && !ek && !e_ && -1 === e.indexOf("<"))
                  return K && eD ? K.createHTML(e) : e;
                if (!(n = tn(e))) return eM ? null : eD ? ee : "";
              }
              n && eC && tt(n.firstChild);
              let c = tr(ez ? e : n);
              for (; (i = c.nextNode()); )
                ts(i) || (i.content instanceof s && tu(i.content), tc(i));
              if (ez) return e;
              if (eM) {
                if (eL)
                  for (l = en.call(n.ownerDocument); n.firstChild; )
                    l.appendChild(n.firstChild);
                else l = n;
                return (
                  (eb.shadowroot || eb.shadowrootmode) &&
                    (l = eo.call(r, l, !0)),
                  l
                );
              }
              let u = e_ ? n.outerHTML : n.innerHTML;
              return (
                e_ &&
                  eg["!doctype"] &&
                  n.ownerDocument &&
                  n.ownerDocument.doctype &&
                  n.ownerDocument.doctype.name &&
                  S(Z, n.ownerDocument.doctype.name) &&
                  (u =
                    "<!DOCTYPE " +
                    n.ownerDocument.doctype.name +
                    `>
` +
                    u),
                ek &&
                  g([es, el, ed], (e) => {
                    u = E(u, e, " ");
                  }),
                K && eD ? K.createHTML(u) : u
              );
            }),
            (a.setConfig = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              e4(e), (eR = !0);
            }),
            (a.clearConfig = function () {
              (e1 = null), (eR = !1);
            }),
            (a.isValidAttribute = function (e, t, a) {
              return e1 || e4({}), tl(e0(e), e0(t), a);
            }),
            (a.addHook = function (e, t) {
              "function" == typeof t && ((ei[e] = ei[e] || []), b(ei[e], t));
            }),
            (a.removeHook = function (e) {
              if (ei[e]) return y(ei[e]);
            }),
            (a.removeHooks = function (e) {
              ei[e] && (ei[e] = []);
            }),
            (a.removeAllHooks = function () {
              ei = {};
            }),
            a
          );
        })(),
        et = (e) => {
          switch (e) {
            case "success":
              return er;
            case "info":
              return ei;
            case "warning":
              return eo;
            case "error":
              return es;
            default:
              return null;
          }
        },
        ea = Array(12).fill(0),
        en = ({ visible: e }) =>
          r.createElement(
            "div",
            { className: "sonner-loading-wrapper", "data-visible": e },
            r.createElement(
              "div",
              { className: "sonner-spinner" },
              ea.map((e, t) =>
                r.createElement("div", {
                  className: "sonner-loading-bar",
                  key: `spinner-bar-${t}`,
                })
              )
            )
          ),
        er = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
          })
        ),
        eo = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
          })
        ),
        ei = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
          })
        ),
        es = r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          r.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
          })
        ),
        el = () => {
          let [e, t] = r.useState(!1);
          return (
            r.useEffect(() => {
              let e = () => {
                t(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", e),
                () => window.removeEventListener("visibilitychange", e)
              );
            }, []),
            e
          );
        },
        ed = 1,
        ec = new (class {
          constructor() {
            (this.subscribe = (e) => (
              this.subscribers.push(e),
              () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1);
              }
            )),
              (this.publish = (e) => {
                this.subscribers.forEach((t) => t(e));
              }),
              (this.addToast = (e) => {
                this.publish(e), (this.toasts = [...this.toasts, e]);
              }),
              (this.create = (e) => {
                var t;
                let { message: a, ...n } = e,
                  r =
                    "number" == typeof (null == e ? void 0 : e.id) ||
                    (null == (t = e.id) ? void 0 : t.length) > 0
                      ? e.id
                      : ed++,
                  o = this.toasts.find((e) => e.id === r),
                  i = void 0 === e.dismissible || e.dismissible;
                return (
                  o
                    ? (this.toasts = this.toasts.map((t) =>
                        t.id === r
                          ? (this.publish({ ...t, ...e, id: r, title: a }),
                            { ...t, ...e, id: r, dismissible: i, title: a })
                          : t
                      ))
                    : this.addToast({ title: a, ...n, dismissible: i, id: r }),
                  r
                );
              }),
              (this.dismiss = (e) => (
                e ||
                  this.toasts.forEach((e) => {
                    this.subscribers.forEach((t) =>
                      t({ id: e.id, dismiss: !0 })
                    );
                  }),
                this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                e
              )),
              (this.message = (e, t) => this.create({ ...t, message: e })),
              (this.error = (e, t) =>
                this.create({ ...t, message: e, type: "error" })),
              (this.success = (e, t) =>
                this.create({ ...t, type: "success", message: e })),
              (this.info = (e, t) =>
                this.create({ ...t, type: "info", message: e })),
              (this.warning = (e, t) =>
                this.create({ ...t, type: "warning", message: e })),
              (this.loading = (e, t) =>
                this.create({ ...t, type: "loading", message: e })),
              (this.promise = (e, t) => {
                let a;
                if (!t) return;
                void 0 !== t.loading &&
                  (a = this.create({
                    ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description:
                      "function" != typeof t.description
                        ? t.description
                        : void 0,
                  }));
                let n = e instanceof Promise ? e : e(),
                  r = void 0 !== a;
                return (
                  n
                    .then((e) => {
                      if (e && "boolean" == typeof e.ok && !e.ok) {
                        r = !1;
                        let n =
                            "function" == typeof t.error
                              ? t.error(`HTTP error! status: ${e.status}`)
                              : t.error,
                          o =
                            "function" == typeof t.description
                              ? t.description(`HTTP error! status: ${e.status}`)
                              : t.description;
                        this.create({
                          id: a,
                          type: "error",
                          message: n,
                          description: o,
                        });
                      } else if (void 0 !== t.success) {
                        r = !1;
                        let n =
                            "function" == typeof t.success
                              ? t.success(e)
                              : t.success,
                          o =
                            "function" == typeof t.description
                              ? t.description(e)
                              : t.description;
                        this.create({
                          id: a,
                          type: "success",
                          message: n,
                          description: o,
                        });
                      }
                    })
                    .catch((e) => {
                      if (void 0 !== t.error) {
                        r = !1;
                        let n =
                            "function" == typeof t.error ? t.error(e) : t.error,
                          o =
                            "function" == typeof t.description
                              ? t.description(e)
                              : t.description;
                        this.create({
                          id: a,
                          type: "error",
                          message: n,
                          description: o,
                        });
                      }
                    })
                    .finally(() => {
                      var e;
                      r && (this.dismiss(a), (a = void 0)),
                        null == (e = t.finally) || e.call(t);
                    }),
                  a
                );
              }),
              (this.custom = (e, t) => {
                let a = (null == t ? void 0 : t.id) || ed++;
                return this.create({ jsx: e(a), id: a, ...t }), a;
              }),
              (this.subscribers = []),
              (this.toasts = []);
          }
        })(),
        eu = Object.assign(
          (e, t) => {
            let a = (null == t ? void 0 : t.id) || ed++;
            return ec.addToast({ title: e, ...t, id: a }), a;
          },
          {
            success: ec.success,
            info: ec.info,
            warning: ec.warning,
            error: ec.error,
            custom: ec.custom,
            message: ec.message,
            promise: ec.promise,
            dismiss: ec.dismiss,
            loading: ec.loading,
          }
        );
      function em(e) {
        return void 0 !== e.label && "function" == typeof e.onClick;
      }
      function ep(...e) {
        return e.filter(Boolean).join(" ");
      }
      !(function (e, { insertAt: t } = {}) {
        if (!e || "undefined" == typeof document) return;
        let a = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          "top" === t && a.firstChild
            ? a.insertBefore(n, a.firstChild)
            : a.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e));
      })(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
      var ef = (e) => {
        var t, a, n, o, i, s, l;
        let {
            invert: d,
            toast: c,
            unstyled: u,
            interacting: m,
            setHeights: p,
            visibleToasts: f,
            heights: h,
            index: g,
            toasts: y,
            expanded: b,
            removeToast: v,
            closeButton: w,
            style: x,
            cancelButtonStyle: E,
            actionButtonStyle: T,
            className: N = "",
            descriptionClassName: A = "",
            duration: S,
            position: k,
            gap: _,
            loadingIcon: R,
            expandByDefault: C,
            classNames: M,
            icons: L,
            closeButtonAriaLabel: D = "Close toast",
            pauseWhenPageIsHidden: I,
            cn: O,
          } = e,
          [P, z] = r.useState(!1),
          [U, B] = r.useState(!1),
          [H, F] = r.useState(!1),
          [Y, j] = r.useState(!1),
          [W, G] = r.useState(0),
          [$, X] = r.useState(0),
          V = r.useRef(null),
          q = r.useRef(null),
          K = 0 === g,
          Z = g + 1 <= f,
          J = c.type,
          Q = !1 !== c.dismissible,
          ea = c.className || "",
          er = c.descriptionClassName || "",
          eo = r.useMemo(
            () => h.findIndex((e) => e.toastId === c.id) || 0,
            [h, c.id]
          ),
          ei = r.useMemo(() => {
            var e;
            return null != (e = c.closeButton) ? e : w;
          }, [c.closeButton, w]),
          es = r.useMemo(() => c.duration || S || 4e3, [c.duration, S]),
          ed = r.useRef(0),
          ec = r.useRef(0),
          eu = r.useRef(0),
          ep = r.useRef(null),
          [ef, eh] = k.split("-"),
          eg = r.useMemo(
            () => h.reduce((e, t, a) => (a >= eo ? e : e + t.height), 0),
            [h, eo]
          ),
          ey = el(),
          eb = c.invert || d,
          ev = "loading" === J;
        (ec.current = r.useMemo(() => eo * _ + eg, [eo, eg])),
          r.useEffect(() => {
            z(!0);
          }, []),
          r.useLayoutEffect(() => {
            if (!P) return;
            let e = q.current,
              t = e.style.height;
            e.style.height = "auto";
            let a = e.getBoundingClientRect().height;
            (e.style.height = t),
              X(a),
              p((e) =>
                e.find((e) => e.toastId === c.id)
                  ? e.map((e) => (e.toastId === c.id ? { ...e, height: a } : e))
                  : [{ toastId: c.id, height: a, position: c.position }, ...e]
              );
          }, [P, c.title, c.description, p, c.id]);
        let ew = r.useCallback(() => {
          B(!0),
            G(ec.current),
            p((e) => e.filter((e) => e.toastId !== c.id)),
            setTimeout(() => {
              v(c);
            }, 200);
        }, [c, v, p, ec]);
        function ex(e) {
          return { __html: ee.sanitize(e) };
        }
        return (
          r.useEffect(() => {
            if (
              (c.promise && "loading" === J) ||
              c.duration === 1 / 0 ||
              "loading" === c.type
            )
              return;
            let e,
              t = es;
            return (
              b || m || (I && ey)
                ? (() => {
                    if (eu.current < ed.current) {
                      let e = new Date().getTime() - ed.current;
                      t -= e;
                    }
                    eu.current = new Date().getTime();
                  })()
                : t !== 1 / 0 &&
                  ((ed.current = new Date().getTime()),
                  (e = setTimeout(() => {
                    var e;
                    null == (e = c.onAutoClose) || e.call(c, c), ew();
                  }, t))),
              () => clearTimeout(e)
            );
          }, [b, m, C, c, es, ew, c.promise, J, I, ey]),
          r.useEffect(() => {
            let e = q.current;
            if (e) {
              let t = e.getBoundingClientRect().height;
              return (
                X(t),
                p((e) => [
                  { toastId: c.id, height: t, position: c.position },
                  ...e,
                ]),
                () => p((e) => e.filter((e) => e.toastId !== c.id))
              );
            }
          }, [p, c.id]),
          r.useEffect(() => {
            c.delete && ew();
          }, [ew, c.delete]),
          r.createElement(
            "li",
            {
              "aria-live": c.important ? "assertive" : "polite",
              "aria-atomic": "true",
              role: "status",
              tabIndex: 0,
              ref: q,
              className: O(
                N,
                ea,
                null == M ? void 0 : M.toast,
                null == (t = null == c ? void 0 : c.classNames)
                  ? void 0
                  : t.toast,
                null == M ? void 0 : M.default,
                null == M ? void 0 : M[J],
                null == (a = null == c ? void 0 : c.classNames) ? void 0 : a[J]
              ),
              "data-sonner-toast": "",
              "data-styled": !(c.jsx || c.unstyled || u),
              "data-mounted": P,
              "data-promise": !!c.promise,
              "data-removed": U,
              "data-visible": Z,
              "data-y-position": ef,
              "data-x-position": eh,
              "data-index": g,
              "data-front": K,
              "data-swiping": H,
              "data-dismissible": Q,
              "data-type": J,
              "data-invert": eb,
              "data-swipe-out": Y,
              "data-expanded": !!(b || (C && P)),
              style: {
                "--index": g,
                "--toasts-before": g,
                "--z-index": y.length - g,
                "--offset": `${U ? W : ec.current}px`,
                "--initial-height": C ? "auto" : `${$}px`,
                ...x,
                ...c.style,
              },
              onPointerDown: (e) => {
                ev ||
                  !Q ||
                  ((V.current = new Date()),
                  G(ec.current),
                  e.target.setPointerCapture(e.pointerId),
                  "BUTTON" !== e.target.tagName &&
                    (F(!0), (ep.current = { x: e.clientX, y: e.clientY })));
              },
              onPointerUp: () => {
                var e, t, a, n;
                if (Y || !Q) return;
                ep.current = null;
                let r = Number(
                    (null == (e = q.current)
                      ? void 0
                      : e.style
                          .getPropertyValue("--swipe-amount")
                          .replace("px", "")) || 0
                  ),
                  o =
                    new Date().getTime() -
                    (null == (t = V.current) ? void 0 : t.getTime());
                if (Math.abs(r) >= 20 || Math.abs(r) / o > 0.11) {
                  G(ec.current),
                    null == (a = c.onDismiss) || a.call(c, c),
                    ew(),
                    j(!0);
                  return;
                }
                null == (n = q.current) ||
                  n.style.setProperty("--swipe-amount", "0px"),
                  F(!1);
              },
              onPointerMove: (e) => {
                var t;
                if (!ep.current || !Q) return;
                let a = e.clientY - ep.current.y,
                  n = e.clientX - ep.current.x,
                  r = ("top" === ef ? Math.min : Math.max)(0, a),
                  o = "touch" === e.pointerType ? 10 : 2;
                Math.abs(r) > o
                  ? null == (t = q.current) ||
                    t.style.setProperty("--swipe-amount", `${a}px`)
                  : Math.abs(n) > o && (ep.current = null);
              },
            },
            ei && !c.jsx
              ? r.createElement(
                  "button",
                  {
                    "aria-label": D,
                    "data-disabled": ev,
                    "data-close-button": !0,
                    onClick:
                      ev || !Q
                        ? () => {}
                        : () => {
                            var e;
                            ew(), null == (e = c.onDismiss) || e.call(c, c);
                          },
                    className: O(
                      null == M ? void 0 : M.closeButton,
                      null == (n = null == c ? void 0 : c.classNames)
                        ? void 0
                        : n.closeButton
                    ),
                  },
                  r.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "12",
                      height: "12",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    },
                    r.createElement("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18",
                    }),
                    r.createElement("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18",
                    })
                  )
                )
              : null,
            c.jsx || r.isValidElement(c.title)
              ? c.jsx || c.title
              : r.createElement(
                  r.Fragment,
                  null,
                  J || c.icon || c.promise
                    ? r.createElement(
                        "div",
                        {
                          "data-icon": "",
                          className: O(null == M ? void 0 : M.icon),
                        },
                        c.promise || ("loading" === c.type && !c.icon)
                          ? c.icon ||
                              (null != L && L.loading
                                ? r.createElement(
                                    "div",
                                    {
                                      className: "sonner-loader",
                                      "data-visible": "loading" === J,
                                    },
                                    L.loading
                                  )
                                : R
                                ? r.createElement(
                                    "div",
                                    {
                                      className: "sonner-loader",
                                      "data-visible": "loading" === J,
                                    },
                                    R
                                  )
                                : r.createElement(en, {
                                    visible: "loading" === J,
                                  }))
                          : null,
                        "loading" !== c.type
                          ? c.icon || (null == L ? void 0 : L[J]) || et(J)
                          : null
                      )
                    : null,
                  r.createElement(
                    "div",
                    {
                      "data-content": "",
                      className: O(null == M ? void 0 : M.content),
                    },
                    r.createElement("div", {
                      "data-title": "",
                      className: O(
                        null == M ? void 0 : M.title,
                        null == (o = null == c ? void 0 : c.classNames)
                          ? void 0
                          : o.title
                      ),
                      dangerouslySetInnerHTML: ex(c.title),
                    }),
                    c.description
                      ? r.createElement("div", {
                          "data-description": "",
                          className: O(
                            A,
                            er,
                            null == M ? void 0 : M.description,
                            null == (i = null == c ? void 0 : c.classNames)
                              ? void 0
                              : i.description
                          ),
                          dangerouslySetInnerHTML: ex(c.description),
                        })
                      : null
                  ),
                  r.isValidElement(c.cancel)
                    ? c.cancel
                    : c.cancel && em(c.cancel)
                    ? r.createElement(
                        "button",
                        {
                          "data-button": !0,
                          "data-cancel": !0,
                          style: c.cancelButtonStyle || E,
                          onClick: (e) => {
                            em(c.cancel) && Q && (ew(), c.cancel.onClick(e));
                          },
                          className: O(
                            null == M ? void 0 : M.cancelButton,
                            null == (s = null == c ? void 0 : c.classNames)
                              ? void 0
                              : s.cancelButton
                          ),
                        },
                        c.cancel.label
                      )
                    : null,
                  r.isValidElement(c.action)
                    ? c.action
                    : c.action && em(c.action)
                    ? r.createElement(
                        "button",
                        {
                          "data-button": "",
                          style: c.actionButtonStyle || T,
                          onClick: (e) => {
                            em(c.action) &&
                              (c.action.onClick(e), e.defaultPrevented || ew());
                          },
                          className: O(
                            null == M ? void 0 : M.actionButton,
                            null == (l = null == c ? void 0 : c.classNames)
                              ? void 0
                              : l.actionButton
                          ),
                        },
                        c.action.label
                      )
                    : null
                )
          )
        );
      };
      function eh() {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return "ltr";
        let e = document.documentElement.getAttribute("dir");
        return "auto" !== e && e
          ? e
          : window.getComputedStyle(document.documentElement).direction;
      }
      var eg = (e) => {
        let {
            invert: t,
            position: a = "bottom-right",
            hotkey: n = ["altKey", "KeyT"],
            expand: i,
            closeButton: s,
            className: l,
            offset: d,
            theme: c = "light",
            richColors: u,
            duration: m,
            style: p,
            visibleToasts: f = 3,
            toastOptions: h,
            dir: g = eh(),
            gap: y = 14,
            loadingIcon: b,
            icons: v,
            containerAriaLabel: w = "Notifications",
            pauseWhenPageIsHidden: x,
            cn: E = ep,
          } = e,
          [T, N] = r.useState([]),
          A = r.useMemo(
            () =>
              Array.from(
                new Set(
                  [a].concat(T.filter((e) => e.position).map((e) => e.position))
                )
              ),
            [T, a]
          ),
          [S, k] = r.useState([]),
          [_, R] = r.useState(!1),
          [C, M] = r.useState(!1),
          [L, D] = r.useState(
            "system" !== c
              ? c
              : "undefined" != typeof window &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          ),
          I = r.useRef(null),
          O = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          P = r.useRef(null),
          z = r.useRef(!1),
          U = r.useCallback(
            (e) => N((t) => t.filter(({ id: t }) => t !== e.id)),
            []
          );
        return (
          r.useEffect(
            () =>
              ec.subscribe((e) => {
                if (e.dismiss) {
                  N((t) =>
                    t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t))
                  );
                  return;
                }
                setTimeout(() => {
                  o.flushSync(() => {
                    N((t) => {
                      let a = t.findIndex((t) => t.id === e.id);
                      return -1 !== a
                        ? [
                            ...t.slice(0, a),
                            { ...t[a], ...e },
                            ...t.slice(a + 1),
                          ]
                        : [e, ...t];
                    });
                  });
                });
              }),
            []
          ),
          r.useEffect(() => {
            if ("system" !== c) {
              D(c);
              return;
            }
            "system" === c &&
              (window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? D("dark")
                : D("light")),
              "undefined" != typeof window &&
                window
                  .matchMedia("(prefers-color-scheme: dark)")
                  .addEventListener("change", ({ matches: e }) => {
                    D(e ? "dark" : "light");
                  });
          }, [c]),
          r.useEffect(() => {
            T.length <= 1 && R(!1);
          }, [T]),
          r.useEffect(() => {
            let e = (e) => {
              var t, a;
              n.every((t) => e[t] || e.code === t) &&
                (R(!0), null == (t = I.current) || t.focus()),
                "Escape" === e.code &&
                  (document.activeElement === I.current ||
                    (null != (a = I.current) &&
                      a.contains(document.activeElement))) &&
                  R(!1);
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [n]),
          r.useEffect(() => {
            if (I.current)
              return () => {
                P.current &&
                  (P.current.focus({ preventScroll: !0 }),
                  (P.current = null),
                  (z.current = !1));
              };
          }, [I.current]),
          T.length
            ? r.createElement(
                "section",
                { "aria-label": `${w} ${O}`, tabIndex: -1 },
                A.map((e, a) => {
                  var n;
                  let [o, c] = e.split("-");
                  return r.createElement(
                    "ol",
                    {
                      key: e,
                      dir: "auto" === g ? eh() : g,
                      tabIndex: -1,
                      ref: I,
                      className: l,
                      "data-sonner-toaster": !0,
                      "data-theme": L,
                      "data-rich-colors": u,
                      "data-y-position": o,
                      "data-x-position": c,
                      style: {
                        "--front-toast-height": `${
                          (null == (n = S[0]) ? void 0 : n.height) || 0
                        }px`,
                        "--offset":
                          "number" == typeof d ? `${d}px` : d || "32px",
                        "--width": "356px",
                        "--gap": `${y}px`,
                        ...p,
                      },
                      onBlur: (e) => {
                        z.current &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          ((z.current = !1),
                          P.current &&
                            (P.current.focus({ preventScroll: !0 }),
                            (P.current = null)));
                      },
                      onFocus: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          z.current ||
                          ((z.current = !0), (P.current = e.relatedTarget));
                      },
                      onMouseEnter: () => R(!0),
                      onMouseMove: () => R(!0),
                      onMouseLeave: () => {
                        C || R(!1);
                      },
                      onPointerDown: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          M(!0);
                      },
                      onPointerUp: () => M(!1),
                    },
                    T.filter(
                      (t) => (!t.position && 0 === a) || t.position === e
                    ).map((a, n) => {
                      var o, l;
                      return r.createElement(ef, {
                        key: a.id,
                        icons: v,
                        index: n,
                        toast: a,
                        duration:
                          null != (o = null == h ? void 0 : h.duration) ? o : m,
                        className: null == h ? void 0 : h.className,
                        descriptionClassName:
                          null == h ? void 0 : h.descriptionClassName,
                        invert: t,
                        visibleToasts: f,
                        closeButton:
                          null != (l = null == h ? void 0 : h.closeButton)
                            ? l
                            : s,
                        interacting: C,
                        position: e,
                        style: null == h ? void 0 : h.style,
                        unstyled: null == h ? void 0 : h.unstyled,
                        classNames: null == h ? void 0 : h.classNames,
                        cancelButtonStyle:
                          null == h ? void 0 : h.cancelButtonStyle,
                        actionButtonStyle:
                          null == h ? void 0 : h.actionButtonStyle,
                        removeToast: U,
                        toasts: T.filter((e) => e.position == a.position),
                        heights: S.filter((e) => e.position == a.position),
                        setHeights: k,
                        expandByDefault: i,
                        gap: y,
                        loadingIcon: b,
                        expanded: _,
                        pauseWhenPageIsHidden: x,
                        cn: E,
                      });
                    })
                  );
                })
              )
            : null
        );
      }; /*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
*/
    },
  },
]);
