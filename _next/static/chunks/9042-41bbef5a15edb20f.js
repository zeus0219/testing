"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9042],
  {
    60269: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createCurve = e.getHash = void 0);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let n =
          r(8692),
        i = r(8962),
        o = r(69691);
      function s(t) {
        return {
          hash: t,
          hmac: (e, ...r) => (0, n.hmac)(t, e, (0, i.concatBytes)(...r)),
          randomBytes: i.randomBytes,
        };
      }
      (e.getHash = s),
        (e.createCurve = function (t, e) {
          let r = (e) => (0, o.weierstrass)({ ...t, ...s(e) });
          return Object.freeze({ ...r(e), create: r });
        });
    },
    85669: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.validateBasic = e.wNAF = void 0);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let n =
          r(31965),
        i = r(11509),
        o = parseInt(0),
        s = parseInt(1);
      (e.wNAF = function (t, e) {
        let r = (t, e) => {
            let r = e.negate();
            return t ? r : e;
          },
          n = (t) => ({
            windows: Math.ceil(e / t) + 1,
            windowSize: 2 ** (t - 1),
          });
        return {
          constTimeNegate: r,
          unsafeLadder(e, r) {
            let n = t.ZERO,
              i = e;
            for (; r > o; )
              r & s && (n = n.add(i)), (i = i.double()), (r >>= s);
            return n;
          },
          precomputeWindow(t, e) {
            let { windows: r, windowSize: i } = n(e),
              o = [],
              s = t,
              a = s;
            for (let t = 0; t < r; t++) {
              (a = s), o.push(a);
              for (let t = 1; t < i; t++) (a = a.add(s)), o.push(a);
              s = a.double();
            }
            return o;
          },
          wNAF(e, i, o) {
            let { windows: a, windowSize: l } = n(e),
              f = t.ZERO,
              u = t.BASE,
              h = Number(2 ** e - 1),
              d = 2 ** e,
              c = Number(e);
            for (let t = 0; t < a; t++) {
              let e = t * l,
                n = Number(o & h);
              (o >>= c), n > l && ((n -= d), (o += s));
              let a = e + Math.abs(n) - 1,
                p = t % 2 != 0,
                y = n < 0;
              0 === n ? (u = u.add(r(p, i[e]))) : (f = f.add(r(y, i[a])));
            }
            return { p: f, f: u };
          },
          wNAFCached(t, e, r, n) {
            let i = t._WINDOW_SIZE || 1,
              o = e.get(t);
            return (
              o ||
                ((o = this.precomputeWindow(t, i)), 1 !== i && e.set(t, n(o))),
              this.wNAF(i, o, r)
            );
          },
        };
      }),
        (e.validateBasic = function (t) {
          return (
            (0, n.validateField)(t.Fp),
            (0, i.validateObject)(
              t,
              { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
              { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
            ),
            Object.freeze({
              ...(0, n.nLength)(t.n, t.nBitLength),
              ...t,
              p: t.Fp.ORDER,
            })
          );
        });
    },
    80455: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createHasher =
          e.isogenyMap =
          e.hash_to_field =
          e.expand_message_xof =
          e.expand_message_xmd =
            void 0);
      let n = r(31965),
        i = r(11509),
        o = i.bytesToNumberBE;
      function s(t, e) {
        if (t < 0 || t >= 1 << (8 * e))
          throw Error(`bad I2OSP call: value=${t} length=${e}`);
        let r = Array.from({ length: e }).fill(0);
        for (let n = e - 1; n >= 0; n--) (r[n] = 255 & t), (t >>>= 8);
        return new Uint8Array(r);
      }
      function a(t) {
        if (!(t instanceof Uint8Array)) throw Error("Uint8Array expected");
      }
      function l(t) {
        if (!Number.isSafeInteger(t)) throw Error("number expected");
      }
      function f(t, e, r, n) {
        a(t),
          a(e),
          l(r),
          e.length > 255 &&
            (e = n(
              (0, i.concatBytes)((0, i.utf8ToBytes)("H2C-OVERSIZE-DST-"), e)
            ));
        let { outputLen: o, blockLen: f } = n,
          u = Math.ceil(r / o);
        if (u > 255) throw Error("Invalid xmd length");
        let h = (0, i.concatBytes)(e, s(e.length, 1)),
          d = s(0, f),
          c = s(r, 2),
          p = Array(u),
          y = n((0, i.concatBytes)(d, t, c, s(0, 1), h));
        p[0] = n((0, i.concatBytes)(y, s(1, 1), h));
        for (let t = 1; t <= u; t++) {
          let e = [
            (function (t, e) {
              let r = new Uint8Array(t.length);
              for (let n = 0; n < t.length; n++) r[n] = t[n] ^ e[n];
              return r;
            })(y, p[t - 1]),
            s(t + 1, 1),
            h,
          ];
          p[t] = n((0, i.concatBytes)(...e));
        }
        return (0, i.concatBytes)(...p).slice(0, r);
      }
      function u(t, e, r, n, o) {
        if (
          (a(t),
          a(e),
          l(r),
          e.length > 255 &&
            (e = o
              .create({ dkLen: Math.ceil((2 * n) / 8) })
              .update((0, i.utf8ToBytes)("H2C-OVERSIZE-DST-"))
              .update(e)
              .digest()),
          r > 65535 || e.length > 255)
        )
          throw Error("expand_message_xof: invalid lenInBytes");
        return o
          .create({ dkLen: r })
          .update(t)
          .update(s(r, 2))
          .update(e)
          .update(s(e.length, 1))
          .digest();
      }
      function h(t, e, r) {
        let s;
        (0, i.validateObject)(r, {
          DST: "stringOrUint8Array",
          p: "bigint",
          m: "isSafeInteger",
          k: "isSafeInteger",
          hash: "hash",
        });
        let { p: h, k: d, m: c, hash: p, expand: y, DST: g } = r;
        a(t), l(e);
        let b = (function (t) {
            if (t instanceof Uint8Array) return t;
            if ("string" == typeof t) return (0, i.utf8ToBytes)(t);
            throw Error("DST must be Uint8Array or string");
          })(g),
          m = Math.ceil((h.toString(2).length + d) / 8),
          w = e * c * m;
        if ("xmd" === y) s = f(t, b, w, p);
        else if ("xof" === y) s = u(t, b, w, d, p);
        else if ("_internal_pass" === y) s = t;
        else throw Error('expand must be "xmd" or "xof"');
        let E = Array(e);
        for (let t = 0; t < e; t++) {
          let e = Array(c);
          for (let r = 0; r < c; r++) {
            let i = m * (r + t * c),
              a = s.subarray(i, i + m);
            e[r] = (0, n.mod)(o(a), h);
          }
          E[t] = e;
        }
        return E;
      }
      (e.expand_message_xmd = f),
        (e.expand_message_xof = u),
        (e.hash_to_field = h),
        (e.isogenyMap = function (t, e) {
          let r = e.map((t) => Array.from(t).reverse());
          return (e, n) => {
            let [i, o, s, a] = r.map((r) =>
              r.reduce((r, n) => t.add(t.mul(r, e), n))
            );
            return (
              (e = t.div(i, o)), (n = t.mul(n, t.div(s, a))), { x: e, y: n }
            );
          };
        }),
        (e.createHasher = function (t, e, r) {
          if ("function" != typeof e)
            throw Error("mapToCurve() must be defined");
          return {
            hashToCurve(n, i) {
              let o = h(n, 2, { ...r, DST: r.DST, ...i }),
                s = t.fromAffine(e(o[0])),
                a = t.fromAffine(e(o[1])),
                l = s.add(a).clearCofactor();
              return l.assertValidity(), l;
            },
            encodeToCurve(n, i) {
              let o = h(n, 1, { ...r, DST: r.encodeDST, ...i }),
                s = t.fromAffine(e(o[0])).clearCofactor();
              return s.assertValidity(), s;
            },
          };
        });
    },
    31965: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.mapHashToField =
          e.getMinHashLength =
          e.getFieldBytesLength =
          e.hashToPrivateScalar =
          e.FpSqrtEven =
          e.FpSqrtOdd =
          e.Field =
          e.nLength =
          e.FpIsSquare =
          e.FpDiv =
          e.FpInvertBatch =
          e.FpPow =
          e.validateField =
          e.isNegativeLE =
          e.FpSqrt =
          e.tonelliShanks =
          e.invert =
          e.pow2 =
          e.pow =
          e.mod =
            void 0);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let n =
          r(11509),
        i = _BigInt(0),
        o = _BigInt(1),
        s = _BigInt(2),
        a = _BigInt(3),
        l = _BigInt(4),
        f = _BigInt(5),
        u = _BigInt(8);
      function h(t, e) {
        let r = t % e;
        return r >= i ? r : e + r;
      }
      function d(t, e, r) {
        if (r <= i || e < i) throw Error("Expected power/modulo > 0");
        if (r === o) return i;
        let n = o;
        for (; e > i; )
          e & o && (n = (n * t) % r), (t = (t * t) % r), (e >>= o);
        return n;
      }
      function c(t, e) {
        if (t === i || e <= i)
          throw Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let r = h(t, e),
          n = e,
          s = i,
          a = o,
          l = o,
          f = i;
        for (; r !== i; ) {
          let t = n / r,
            e = n % r,
            i = s - l * t,
            o = a - f * t;
          (n = r), (r = e), (s = l), (a = f), (l = i), (f = o);
        }
        if (n !== o) throw Error("invert: does not exist");
        return h(s, e);
      }
      function p(t) {
        let e, r, n;
        let a = (t - o) / s;
        for (e = t - o, r = 0; e % s === i; e /= s, r++);
        for (n = s; n < t && d(n, a, t) !== t - o; n++);
        if (1 === r) {
          let e = (t + o) / l;
          return function (t, r) {
            let n = t.pow(r, e);
            if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
            return n;
          };
        }
        let f = (e + o) / s;
        return function (t, i) {
          if (t.pow(i, a) === t.neg(t.ONE))
            throw Error("Cannot find square root");
          let s = r,
            l = t.pow(t.mul(t.ONE, n), e),
            u = t.pow(i, f),
            h = t.pow(i, e);
          for (; !t.eql(h, t.ONE); ) {
            if (t.eql(h, t.ZERO)) return t.ZERO;
            let e = 1;
            for (let r = t.sqr(h); e < s && !t.eql(r, t.ONE); e++) r = t.sqr(r);
            let r = t.pow(l, o << (s - e - 1));
            (l = t.sqr(r)), (u = t.mul(u, r)), (h = t.mul(h, l)), (s = e);
          }
          return u;
        };
      }
      function y(t) {
        if (t % l === a) {
          let e = (t + o) / l;
          return function (t, r) {
            let n = t.pow(r, e);
            if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
            return n;
          };
        }
        if (t % u === f) {
          let e = (t - f) / u;
          return function (t, r) {
            let n = t.mul(r, s),
              i = t.pow(n, e),
              o = t.mul(r, i),
              a = t.mul(t.mul(o, s), i),
              l = t.mul(o, t.sub(a, t.ONE));
            if (!t.eql(t.sqr(l), r)) throw Error("Cannot find square root");
            return l;
          };
        }
        return p(t);
      }
      Number(9),
        Number(16),
        (e.mod = h),
        (e.pow = d),
        (e.pow2 = function (t, e, r) {
          let n = t;
          for (; e-- > i; ) (n *= n), (n %= r);
          return n;
        }),
        (e.invert = c),
        (e.tonelliShanks = p),
        (e.FpSqrt = y),
        (e.isNegativeLE = (t, e) => (h(t, e) & o) === o);
      let g = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function b(t, e, r) {
        if (r < i) throw Error("Expected power > 0");
        if (r === i) return t.ONE;
        if (r === o) return e;
        let n = t.ONE,
          s = e;
        for (; r > i; ) r & o && (n = t.mul(n, s)), (s = t.sqr(s)), (r >>= o);
        return n;
      }
      function m(t, e) {
        let r = Array(e.length),
          n = e.reduce(
            (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
            t.ONE
          ),
          i = t.inv(n);
        return (
          e.reduceRight(
            (e, n, i) =>
              t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
            i
          ),
          r
        );
      }
      function w(t, e) {
        let r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function E(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        return Math.ceil(t.toString(2).length / 8);
      }
      function B(t) {
        let e = E(t);
        return e + Math.ceil(e / 2);
      }
      (e.validateField = function (t) {
        let e = g.reduce((t, e) => ((t[e] = "function"), t), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "isSafeInteger",
          BITS: "isSafeInteger",
        });
        return (0, n.validateObject)(t, e);
      }),
        (e.FpPow = b),
        (e.FpInvertBatch = m),
        (e.FpDiv = function (t, e, r) {
          return t.mul(e, "bigint" == typeof r ? c(r, t.ORDER) : t.inv(r));
        }),
        (e.FpIsSquare = function (t) {
          let e = (t.ORDER - o) / s;
          return (r) => {
            let n = t.pow(r, e);
            return t.eql(n, t.ZERO) || t.eql(n, t.ONE);
          };
        }),
        (e.nLength = w),
        (e.Field = function (t, e, r = !1, s = {}) {
          if (t <= i) throw Error(`Expected Field ORDER > 0, got ${t}`);
          let { nBitLength: a, nByteLength: l } = w(t, e);
          if (l > 2048)
            throw Error("Field lengths over 2048 bytes are not supported");
          let f = y(t),
            u = Object.freeze({
              ORDER: t,
              BITS: a,
              BYTES: l,
              MASK: (0, n.bitMask)(a),
              ZERO: i,
              ONE: o,
              create: (e) => h(e, t),
              isValid: (e) => {
                if ("bigint" != typeof e)
                  throw Error(
                    `Invalid field element: expected bigint, got ${typeof e}`
                  );
                return i <= e && e < t;
              },
              is0: (t) => t === i,
              isOdd: (t) => (t & o) === o,
              neg: (e) => h(-e, t),
              eql: (t, e) => t === e,
              sqr: (e) => h(e * e, t),
              add: (e, r) => h(e + r, t),
              sub: (e, r) => h(e - r, t),
              mul: (e, r) => h(e * r, t),
              pow: (t, e) => b(u, t, e),
              div: (e, r) => h(e * c(r, t), t),
              sqrN: (t) => t * t,
              addN: (t, e) => t + e,
              subN: (t, e) => t - e,
              mulN: (t, e) => t * e,
              inv: (e) => c(e, t),
              sqrt: s.sqrt || ((t) => f(u, t)),
              invertBatch: (t) => m(u, t),
              cmov: (t, e, r) => (r ? e : t),
              toBytes: (t) =>
                r ? (0, n.numberToBytesLE)(t, l) : (0, n.numberToBytesBE)(t, l),
              fromBytes: (t) => {
                if (t.length !== l)
                  throw Error(`Fp.fromBytes: expected ${l}, got ${t.length}`);
                return r
                  ? (0, n.bytesToNumberLE)(t)
                  : (0, n.bytesToNumberBE)(t);
              },
            });
          return Object.freeze(u);
        }),
        (e.FpSqrtOdd = function (t, e) {
          if (!t.isOdd) throw Error("Field doesn't have isOdd");
          let r = t.sqrt(e);
          return t.isOdd(r) ? r : t.neg(r);
        }),
        (e.FpSqrtEven = function (t, e) {
          if (!t.isOdd) throw Error("Field doesn't have isOdd");
          let r = t.sqrt(e);
          return t.isOdd(r) ? t.neg(r) : r;
        }),
        (e.hashToPrivateScalar = function (t, e, r = !1) {
          let i = (t = (0, n.ensureBytes)("privateHash", t)).length,
            s = w(e).nByteLength + 8;
          if (s < 24 || i < s || i > 1024)
            throw Error(
              `hashToPrivateScalar: expected ${s}-1024 bytes of input, got ${i}`
            );
          return (
            h(
              r ? (0, n.bytesToNumberLE)(t) : (0, n.bytesToNumberBE)(t),
              e - o
            ) + o
          );
        }),
        (e.getFieldBytesLength = E),
        (e.getMinHashLength = B),
        (e.mapHashToField = function (t, e, r = !1) {
          let i = t.length,
            s = E(e),
            a = B(e);
          if (i < 16 || i < a || i > 1024)
            throw Error(`expected ${a}-1024 bytes of input, got ${i}`);
          let l =
            h(
              r ? (0, n.bytesToNumberBE)(t) : (0, n.bytesToNumberLE)(t),
              e - o
            ) + o;
          return r
            ? (0, n.numberToBytesLE)(l, s)
            : (0, n.numberToBytesBE)(l, s);
        });
    },
    11509: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.validateObject =
          e.createHmacDrbg =
          e.bitMask =
          e.bitSet =
          e.bitGet =
          e.bitLen =
          e.utf8ToBytes =
          e.equalBytes =
          e.concatBytes =
          e.ensureBytes =
          e.numberToVarBytesBE =
          e.numberToBytesLE =
          e.numberToBytesBE =
          e.bytesToNumberLE =
          e.bytesToNumberBE =
          e.hexToBytes =
          e.hexToNumber =
          e.numberToHexUnpadded =
          e.bytesToHex =
            void 0);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let r =
          _BigInt(0),
        n = _BigInt(1),
        o = (t) => t instanceof Uint8Array,
        s = Array.from({ length: 256 }, (t, e) =>
          e.toString(16).padStart(2, "0")
        );
      function a(t) {
        if (!o(t)) throw Error("Uint8Array expected");
        let e = "";
        for (let r = 0; r < t.length; r++) e += s[t[r]];
        return e;
      }
      function l(t) {
        let e = t.toString(16);
        return 1 & e.length ? `0${e}` : e;
      }
      function f(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return Number("" === t ? "0" : `0x${t}`);
      }
      function u(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        let e = t.length;
        if (e % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + e
          );
        let r = new Uint8Array(e / 2);
        for (let e = 0; e < r.length; e++) {
          let n = 2 * e,
            i = Number.parseInt(t.slice(n, n + 2), 16);
          if (Number.isNaN(i) || i < 0) throw Error("Invalid byte sequence");
          r[e] = i;
        }
        return r;
      }
      function h(t, e) {
        return u(t.toString(16).padStart(2 * e, "0"));
      }
      function d(...t) {
        let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
          r = 0;
        return (
          t.forEach((t) => {
            if (!o(t)) throw Error("Uint8Array expected");
            e.set(t, r), (r += t.length);
          }),
          e
        );
      }
      (e.bytesToHex = a),
        (e.numberToHexUnpadded = l),
        (e.hexToNumber = f),
        (e.hexToBytes = u),
        (e.bytesToNumberBE = function (t) {
          return f(a(t));
        }),
        (e.bytesToNumberLE = function (t) {
          if (!o(t)) throw Error("Uint8Array expected");
          return f(a(Uint8Array.from(t).reverse()));
        }),
        (e.numberToBytesBE = h),
        (e.numberToBytesLE = function (t, e) {
          return h(t, e).reverse();
        }),
        (e.numberToVarBytesBE = function (t) {
          return u(l(t));
        }),
        (e.ensureBytes = function (t, e, r) {
          let n;
          if ("string" == typeof e)
            try {
              n = u(e);
            } catch (r) {
              throw Error(
                `${t} must be valid hex string, got "${e}". Cause: ${r}`
              );
            }
          else if (o(e)) n = Uint8Array.from(e);
          else throw Error(`${t} must be hex string or Uint8Array`);
          let i = n.length;
          if ("number" == typeof r && i !== r)
            throw Error(`${t} expected ${r} bytes, got ${i}`);
          return n;
        }),
        (e.concatBytes = d),
        (e.equalBytes = function (t, e) {
          if (t.length !== e.length) return !1;
          for (let r = 0; r < t.length; r++) if (t[r] !== e[r]) return !1;
          return !0;
        }),
        (e.utf8ToBytes = function (t) {
          if ("string" != typeof t)
            throw Error(`utf8ToBytes expected string, got ${typeof t}`);
          return new Uint8Array(new TextEncoder().encode(t));
        }),
        (e.bitLen = function (t) {
          let e;
          for (e = 0; t > r;  e += 1);
          return e;
        }),
        (e.bitGet = function (t, e) {
          return (t >> Number(e)) & 1;
        }),
        (e.bitSet = (t, e, i) => t),
        (e.bitMask = (t) => n);
      let c = (t) => new Uint8Array(t),
        p = (t) => Uint8Array.from(t);
      e.createHmacDrbg = function (t, e, r) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = c(t),
          i = c(t),
          o = 0,
          s = () => {
            n.fill(1), i.fill(0), (o = 0);
          },
          a = (...t) => r(i, n, ...t),
          l = (t = c()) => {
            (i = a(p([0]), t)),
              (n = a()),
              0 !== t.length && ((i = a(p([1]), t)), (n = a()));
          },
          f = () => {
            if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              r = [];
            for (; t < e; ) {
              let e = (n = a()).slice();
              r.push(e), (t += n.length);
            }
            return d(...r);
          };
        return (t, e) => {
          let r;
          for (s(), l(t); !(r = e(f())); ) l();
          return s(), r;
        };
      };
      let y = {
        bigint: (t) => "bigint" == typeof t,
        function: (t) => "function" == typeof t,
        boolean: (t) => "boolean" == typeof t,
        string: (t) => "string" == typeof t,
        stringOrUint8Array: (t) =>
          "string" == typeof t || t instanceof Uint8Array,
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" == typeof t && Number.isSafeInteger(t.outputLen),
      };
      e.validateObject = function (t, e, r = {}) {
        let n = (e, r, n) => {
          let i = y[r];
          if ("function" != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let o = t[e];
          if ((!n || void 0 !== o) && !i(o, t))
            throw Error(
              `Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`
            );
        };
        for (let [t, r] of Object.entries(e)) n(t, r, !1);
        for (let [t, e] of Object.entries(r)) n(t, e, !0);
        return t;
      };
    },
    69691: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.mapToCurveSimpleSWU =
          e.SWUFpSqrtRatio =
          e.weierstrass =
          e.weierstrassPoints =
          e.DER =
            void 0);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let n =
          r(31965),
        i = r(11509),
        o = r(11509),
        s = r(85669),
        { bytesToNumberBE: a, hexToBytes: l } = i;
      e.DER = {
        Err: class extends Error {
          constructor(t = "") {
            super(t);
          }
        },
        _parseInt(t) {
          let { Err: r } = e.DER;
          if (t.length < 2 || 2 !== t[0])
            throw new r("Invalid signature integer tag");
          let n = t[1],
            i = t.subarray(2, n + 2);
          if (!n || i.length !== n)
            throw new r("Invalid signature integer: wrong length");
          if (128 & i[0]) throw new r("Invalid signature integer: negative");
          if (0 === i[0] && !(128 & i[1]))
            throw new r("Invalid signature integer: unnecessary leading zero");
          return { d: a(i), l: t.subarray(n + 2) };
        },
        toSig(t) {
          let { Err: r } = e.DER,
            n = "string" == typeof t ? l(t) : t;
          if (!(n instanceof Uint8Array)) throw Error("ui8a expected");
          let i = n.length;
          if (i < 2 || 48 != n[0]) throw new r("Invalid signature tag");
          if (n[1] !== i - 2)
            throw new r("Invalid signature: incorrect length");
          let { d: o, l: s } = e.DER._parseInt(n.subarray(2)),
            { d: a, l: f } = e.DER._parseInt(s);
          if (f.length)
            throw new r("Invalid signature: left bytes after parsing");
          return { r: o, s: a };
        },
        hexFromSig(t) {
          let e = (t) => (8 & Number.parseInt(t[0], 16) ? "00" + t : t),
            r = (t) => {
              let e = t.toString(16);
              return 1 & e.length ? `0${e}` : e;
            },
            n = e(r(t.s)),
            i = e(r(t.r)),
            o = n.length / 2,
            s = i.length / 2,
            a = r(o),
            l = r(s);
          return `30${r(s + o + 4)}02${l}${i}02${a}${n}`;
        },
      };
      let f = _BigInt(0),
        u = _BigInt(1),
        h = _BigInt(2),
        d = _BigInt(3),
        c = _BigInt(4);
      function p(t) {
        let e = (function (t) {
            let e = (0, s.validateBasic)(t);
            i.validateObject(
              e,
              { a: "field", b: "field" },
              {
                allowedPrivateKeyLengths: "array",
                wrapPrivateKey: "boolean",
                isTorsionFree: "function",
                clearCofactor: "function",
                allowInfinityPoint: "boolean",
                fromBytes: "function",
                toBytes: "function",
              }
            );
            let { endo: r, Fp: n, a: o } = e;
            if (r) {
              if (!n.eql(o, n.ZERO))
                throw Error(
                  "Endomorphism can only be defined for Koblitz curves that have a=0"
                );
              if (
                "object" != typeof r ||
                "bigint" != typeof r.beta ||
                "function" != typeof r.splitScalar
              )
                throw Error(
                  "Expected endomorphism with beta: bigint and splitScalar: function"
                );
            }
            return Object.freeze({ ...e });
          })(t),
          { Fp: r } = e,
          a =
            e.toBytes ||
            ((t, e, n) => {
              let o = e.toAffine();
              return i.concatBytes(
                Uint8Array.from([4]),
                r.toBytes(o.x),
                r.toBytes(o.y)
              );
            }),
          l =
            e.fromBytes ||
            ((t) => {
              let e = t.subarray(1);
              return {
                x: r.fromBytes(e.subarray(0, r.BYTES)),
                y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
              };
            });
        function h(t) {
          let { a: n, b: i } = e,
            o = r.sqr(t),
            s = r.mul(o, t);
          return r.add(r.add(s, r.mul(t, n)), i);
        }
        if (!r.eql(r.sqr(e.Gy), h(e.Gx)))
          throw Error("bad generator point: equation left != right");
        function c(t) {
          return "bigint" == typeof t && f < t && t < e.n;
        }
        function p(t) {
          if (!c(t)) throw Error("Expected valid bigint: 0 < bigint < curve.n");
        }
        function y(t) {
          let r;
          let {
            allowedPrivateKeyLengths: s,
            nByteLength: a,
            wrapPrivateKey: l,
            n: f,
          } = e;
          if (s && "bigint" != typeof t) {
            if (
              (t instanceof Uint8Array && (t = i.bytesToHex(t)),
              "string" != typeof t || !s.includes(t.length))
            )
              throw Error("Invalid key");
            t = t.padStart(2 * a, "0");
          }
          try {
            r =
              "bigint" == typeof t
                ? t
                : i.bytesToNumberBE((0, o.ensureBytes)("private key", t, a));
          } catch (e) {
            throw Error(
              `private key must be ${a} bytes, hex or bigint, not ${typeof t}`
            );
          }
          return l && (r = n.mod(r, f)), p(r), r;
        }
        let g = new Map();
        function b(t) {
          if (!(t instanceof m)) throw Error("ProjectivePoint expected");
        }
        class m {
          constructor(t, e, n) {
            if (
              ((this.px = t),
              (this.py = e),
              (this.pz = n),
              null == t || !r.isValid(t))
            )
              throw Error("x required");
            if (null == e || !r.isValid(e)) throw Error("y required");
            if (null == n || !r.isValid(n)) throw Error("z required");
          }
          static fromAffine(t) {
            let { x: e, y: n } = t || {};
            if (!t || !r.isValid(e) || !r.isValid(n))
              throw Error("invalid affine point");
            if (t instanceof m) throw Error("projective point not allowed");
            let i = (t) => r.eql(t, r.ZERO);
            return i(e) && i(n) ? m.ZERO : new m(e, n, r.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(t) {
            let e = r.invertBatch(t.map((t) => t.pz));
            return t.map((t, r) => t.toAffine(e[r])).map(m.fromAffine);
          }
          static fromHex(t) {
            let e = m.fromAffine(l((0, o.ensureBytes)("pointHex", t)));
            return e.assertValidity(), e;
          }
          static fromPrivateKey(t) {
            return m.BASE.multiply(y(t));
          }
          _setWindowSize(t) {
            (this._WINDOW_SIZE = t), g.delete(this);
          }
          assertValidity() {
            if (this.is0()) {
              if (e.allowInfinityPoint && !r.is0(this.py)) return;
              throw Error("bad point: ZERO");
            }
            let { x: t, y: n } = this.toAffine();
            if (!r.isValid(t) || !r.isValid(n))
              throw Error("bad point: x or y not FE");
            let i = r.sqr(n),
              o = h(t);
            if (!r.eql(i, o)) throw Error("bad point: equation left != right");
            if (!this.isTorsionFree())
              throw Error("bad point: not in prime-order subgroup");
          }
          hasEvenY() {
            let { y: t } = this.toAffine();
            if (r.isOdd) return !r.isOdd(t);
            throw Error("Field doesn't support isOdd");
          }
          equals(t) {
            b(t);
            let { px: e, py: n, pz: i } = this,
              { px: o, py: s, pz: a } = t,
              l = r.eql(r.mul(e, a), r.mul(o, i)),
              f = r.eql(r.mul(n, a), r.mul(s, i));
            return l && f;
          }
          negate() {
            return new m(this.px, r.neg(this.py), this.pz);
          }
          double() {
            let { a: t, b: n } = e,
              i = r.mul(n, d),
              { px: o, py: s, pz: a } = this,
              l = r.ZERO,
              f = r.ZERO,
              u = r.ZERO,
              h = r.mul(o, o),
              c = r.mul(s, s),
              p = r.mul(a, a),
              y = r.mul(o, s);
            return (
              (y = r.add(y, y)),
              (u = r.mul(o, a)),
              (u = r.add(u, u)),
              (l = r.mul(t, u)),
              (f = r.mul(i, p)),
              (f = r.add(l, f)),
              (l = r.sub(c, f)),
              (f = r.add(c, f)),
              (f = r.mul(l, f)),
              (l = r.mul(y, l)),
              (u = r.mul(i, u)),
              (p = r.mul(t, p)),
              (y = r.sub(h, p)),
              (y = r.mul(t, y)),
              (y = r.add(y, u)),
              (u = r.add(h, h)),
              (h = r.add(u, h)),
              (h = r.add(h, p)),
              (h = r.mul(h, y)),
              (f = r.add(f, h)),
              (p = r.mul(s, a)),
              (p = r.add(p, p)),
              (h = r.mul(p, y)),
              (l = r.sub(l, h)),
              (u = r.mul(p, c)),
              (u = r.add(u, u)),
              new m(l, f, (u = r.add(u, u)))
            );
          }
          add(t) {
            b(t);
            let { px: n, py: i, pz: o } = this,
              { px: s, py: a, pz: l } = t,
              f = r.ZERO,
              u = r.ZERO,
              h = r.ZERO,
              c = e.a,
              p = r.mul(e.b, d),
              y = r.mul(n, s),
              g = r.mul(i, a),
              w = r.mul(o, l),
              E = r.add(n, i),
              B = r.add(s, a);
            (E = r.mul(E, B)),
              (B = r.add(y, g)),
              (E = r.sub(E, B)),
              (B = r.add(n, o));
            let v = r.add(s, l);
            return (
              (B = r.mul(B, v)),
              (v = r.add(y, w)),
              (B = r.sub(B, v)),
              (v = r.add(i, o)),
              (f = r.add(a, l)),
              (v = r.mul(v, f)),
              (f = r.add(g, w)),
              (v = r.sub(v, f)),
              (h = r.mul(c, B)),
              (f = r.mul(p, w)),
              (h = r.add(f, h)),
              (f = r.sub(g, h)),
              (h = r.add(g, h)),
              (u = r.mul(f, h)),
              (g = r.add(y, y)),
              (g = r.add(g, y)),
              (w = r.mul(c, w)),
              (B = r.mul(p, B)),
              (g = r.add(g, w)),
              (w = r.sub(y, w)),
              (w = r.mul(c, w)),
              (B = r.add(B, w)),
              (y = r.mul(g, B)),
              (u = r.add(u, y)),
              (y = r.mul(v, B)),
              (f = r.mul(E, f)),
              (f = r.sub(f, y)),
              (y = r.mul(E, g)),
              (h = r.mul(v, h)),
              new m(f, u, (h = r.add(h, y)))
            );
          }
          subtract(t) {
            return this.add(t.negate());
          }
          is0() {
            return this.equals(m.ZERO);
          }
          wNAF(t) {
            return E.wNAFCached(this, g, t, (t) => {
              let e = r.invertBatch(t.map((t) => t.pz));
              return t.map((t, r) => t.toAffine(e[r])).map(m.fromAffine);
            });
          }
          multiplyUnsafe(t) {
            let n = m.ZERO;
            if (t === f) return n;
            if ((p(t), t === u)) return this;
            let { endo: i } = e;
            if (!i) return E.unsafeLadder(this, t);
            let { k1neg: o, k1: s, k2neg: a, k2: l } = i.splitScalar(t),
              h = n,
              d = n,
              c = this;
            for (; s > f || l > f; )
              s & u && (h = h.add(c)),
                l & u && (d = d.add(c)),
                (c = c.double()),
                (s >>= u),
                (l >>= u);
            return (
              o && (h = h.negate()),
              a && (d = d.negate()),
              (d = new m(r.mul(d.px, i.beta), d.py, d.pz)),
              h.add(d)
            );
          }
          multiply(t) {
            let n, i;
            p(t);
            let { endo: o } = e;
            if (o) {
              let { k1neg: e, k1: s, k2neg: a, k2: l } = o.splitScalar(t),
                { p: f, f: u } = this.wNAF(s),
                { p: h, f: d } = this.wNAF(l);
              (f = E.constTimeNegate(e, f)),
                (h = E.constTimeNegate(a, h)),
                (h = new m(r.mul(h.px, o.beta), h.py, h.pz)),
                (n = f.add(h)),
                (i = u.add(d));
            } else {
              let { p: e, f: r } = this.wNAF(t);
              (n = e), (i = r);
            }
            return m.normalizeZ([n, i])[0];
          }
          multiplyAndAddUnsafe(t, e, r) {
            let n = m.BASE,
              i = (t, e) =>
                e !== f && e !== u && t.equals(n)
                  ? t.multiply(e)
                  : t.multiplyUnsafe(e),
              o = i(this, e).add(i(t, r));
            return o.is0() ? void 0 : o;
          }
          toAffine(t) {
            let { px: e, py: n, pz: i } = this,
              o = this.is0();
            null == t && (t = o ? r.ONE : r.inv(i));
            let s = r.mul(e, t),
              a = r.mul(n, t),
              l = r.mul(i, t);
            if (o) return { x: r.ZERO, y: r.ZERO };
            if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
            return { x: s, y: a };
          }
          isTorsionFree() {
            let { h: t, isTorsionFree: r } = e;
            if (t === u) return !0;
            if (r) return r(m, this);
            throw Error(
              "isTorsionFree() has not been declared for the elliptic curve"
            );
          }
          clearCofactor() {
            let { h: t, clearCofactor: r } = e;
            return t === u ? this : r ? r(m, this) : this.multiplyUnsafe(e.h);
          }
          toRawBytes(t = !0) {
            return this.assertValidity(), a(m, this, t);
          }
          toHex(t = !0) {
            return i.bytesToHex(this.toRawBytes(t));
          }
        }
        (m.BASE = new m(e.Gx, e.Gy, r.ONE)),
          (m.ZERO = new m(r.ZERO, r.ONE, r.ZERO));
        let w = e.nBitLength,
          E = (0, s.wNAF)(m, e.endo ? Math.ceil(w / 2) : w);
        return {
          CURVE: e,
          ProjectivePoint: m,
          normPrivateKeyToScalar: y,
          weierstrassEquation: h,
          isWithinCurveOrder: c,
        };
      }
      function y(t, e) {
        let r = t.ORDER,
          n = f;
        for (let t = r - u; t % h === f; t /= h) n += u;
        let i = n,
          o = h << (i - u - u),
          s = o * h,
          a = (r - u) / s,
          l = (a - u) / h,
          p = s - u,
          y = t.pow(e, a),
          g = t.pow(e, (a + u) / h),
          b = (e, r) => {
            let n = y,
              s = t.pow(r, p),
              a = t.sqr(s);
            a = t.mul(a, r);
            let f = t.mul(e, a);
            (f = t.pow(f, l)),
              (f = t.mul(f, s)),
              (s = t.mul(f, r)),
              (a = t.mul(f, e));
            let d = t.mul(a, s);
            f = t.pow(d, o);
            let c = t.eql(f, t.ONE);
            (s = t.mul(a, g)),
              (f = t.mul(d, n)),
              (a = t.cmov(s, a, c)),
              (d = t.cmov(f, d, c));
            for (let e = i; e > u; e--) {
              let r = e - h;
              r = h << (r - u);
              let i = t.pow(d, r),
                o = t.eql(i, t.ONE);
              (s = t.mul(a, n)),
                (n = t.mul(n, n)),
                (i = t.mul(d, n)),
                (a = t.cmov(s, a, o)),
                (d = t.cmov(i, d, o));
            }
            return { isValid: c, value: a };
          };
        if (t.ORDER % c === d) {
          let r = (t.ORDER - d) / c,
            n = t.sqrt(t.neg(e));
          b = (e, i) => {
            let o = t.sqr(i),
              s = t.mul(e, i);
            o = t.mul(o, s);
            let a = t.pow(o, r);
            a = t.mul(a, s);
            let l = t.mul(a, n),
              f = t.mul(t.sqr(a), i),
              u = t.eql(f, e),
              h = t.cmov(l, a, u);
            return { isValid: u, value: h };
          };
        }
        return b;
      }
      (e.weierstrassPoints = p),
        (e.weierstrass = function (t) {
          let r = (function (t) {
              let e = (0, s.validateBasic)(t);
              return (
                i.validateObject(
                  e,
                  { hash: "hash", hmac: "function", randomBytes: "function" },
                  {
                    bits2int: "function",
                    bits2int_modN: "function",
                    lowS: "boolean",
                  }
                ),
                Object.freeze({ lowS: !0, ...e })
              );
            })(t),
            { Fp: a, n: l } = r,
            h = a.BYTES + 1,
            d = 2 * a.BYTES + 1;
          function c(t) {
            return n.mod(t, l);
          }
          function y(t) {
            return n.invert(t, l);
          }
          let {
              ProjectivePoint: g,
              normPrivateKeyToScalar: b,
              weierstrassEquation: m,
              isWithinCurveOrder: w,
            } = p({
              ...r,
              toBytes(t, e, r) {
                let n = e.toAffine(),
                  o = a.toBytes(n.x),
                  s = i.concatBytes;
                return r
                  ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                  : s(Uint8Array.from([4]), o, a.toBytes(n.y));
              },
              fromBytes(t) {
                let e = t.length,
                  r = t[0],
                  n = t.subarray(1);
                if (e === h && (2 === r || 3 === r)) {
                  let t = i.bytesToNumberBE(n);
                  if (!(f < t && t < a.ORDER))
                    throw Error("Point is not on curve");
                  let e = m(t),
                    o = a.sqrt(e);
                  return (
                    ((1 & r) == 1) != ((o & u) === u) && (o = a.neg(o)),
                    { x: t, y: o }
                  );
                }
                if (e === d && 4 === r)
                  return {
                    x: a.fromBytes(n.subarray(0, a.BYTES)),
                    y: a.fromBytes(n.subarray(a.BYTES, 2 * a.BYTES)),
                  };
                throw Error(
                  `Point of length ${e} was invalid. Expected ${h} compressed bytes or ${d} uncompressed bytes`
                );
              },
            }),
            E = (t) => i.bytesToHex(i.numberToBytesBE(t, r.nByteLength)),
            B = (t, e, r) => i.bytesToNumberBE(t.slice(e, r));
          class v {
            constructor(t, e, r) {
              (this.r = t),
                (this.s = e),
                (this.recovery = r),
                this.assertValidity();
            }
            static fromCompact(t) {
              let e = r.nByteLength;
              return new v(
                B((t = (0, o.ensureBytes)("compactSignature", t, 2 * e)), 0, e),
                B(t, e, 2 * e)
              );
            }
            static fromDER(t) {
              let { r, s: n } = e.DER.toSig((0, o.ensureBytes)("DER", t));
              return new v(r, n);
            }
            assertValidity() {
              if (!w(this.r)) throw Error("r must be 0 < r < CURVE.n");
              if (!w(this.s)) throw Error("s must be 0 < s < CURVE.n");
            }
            addRecoveryBit(t) {
              return new v(this.r, this.s, t);
            }
            recoverPublicKey(t) {
              let { r: e, s: n, recovery: i } = this,
                s = A((0, o.ensureBytes)("msgHash", t));
              if (null == i || ![0, 1, 2, 3].includes(i))
                throw Error("recovery id invalid");
              let l = 2 === i || 3 === i ? e + r.n : e;
              if (l >= a.ORDER) throw Error("recovery id 2 or 3 invalid");
              let f = (1 & i) == 0 ? "02" : "03",
                u = g.fromHex(f + E(l)),
                h = y(l),
                d = c(-s * h),
                p = c(n * h),
                b = g.BASE.multiplyAndAddUnsafe(u, d, p);
              if (!b) throw Error("point at infinify");
              return b.assertValidity(), b;
            }
            hasHighS() {
              return this.s > l >> u;
            }
            normalizeS() {
              return this.hasHighS()
                ? new v(this.r, c(-this.s), this.recovery)
                : this;
            }
            toDERRawBytes() {
              return i.hexToBytes(this.toDERHex());
            }
            toDERHex() {
              return e.DER.hexFromSig({ r: this.r, s: this.s });
            }
            toCompactRawBytes() {
              return i.hexToBytes(this.toCompactHex());
            }
            toCompactHex() {
              return E(this.r) + E(this.s);
            }
          }
          function x(t) {
            let e = t instanceof Uint8Array,
              r = "string" == typeof t,
              n = (e || r) && t.length;
            return e
              ? n === h || n === d
              : r
              ? n === 2 * h || n === 2 * d
              : t instanceof g;
          }
          let S =
              r.bits2int ||
              function (t) {
                let e = i.bytesToNumberBE(t),
                  n = 8 * t.length - r.nBitLength;
                return n > 0 ? e >> _BigInt(n) : e;
              },
            A =
              r.bits2int_modN ||
              function (t) {
                return c(S(t));
              },
            O = i.bitMask(r.nBitLength);
          function I(t) {
            if ("bigint" != typeof t) throw Error("bigint expected");
            if (!(f <= t && t < O))
              throw Error(`bigint expected < 2^${r.nBitLength}`);
            return i.numberToBytesBE(t, r.nByteLength);
          }
          let T = { lowS: r.lowS, prehash: !1 },
            L = { lowS: r.lowS, prehash: !1 };
          return (
            g.BASE._setWindowSize(8),
            {
              CURVE: r,
              getPublicKey: function (t, e = !0) {
                return g.fromPrivateKey(t).toRawBytes(e);
              },
              getSharedSecret: function (t, e, r = !0) {
                if (x(t)) throw Error("first arg must be private key");
                if (!x(e)) throw Error("second arg must be public key");
                return g.fromHex(e).multiply(b(t)).toRawBytes(r);
              },
              sign: function (t, e, n = T) {
                let { seed: s, k2sig: h } = (function (t, e, n = T) {
                  if (["recovered", "canonical"].some((t) => t in n))
                    throw Error("sign() legacy options not supported");
                  let { hash: s, randomBytes: h } = r,
                    { lowS: d, prehash: p, extraEntropy: m } = n;
                  null == d && (d = !0),
                    (t = (0, o.ensureBytes)("msgHash", t)),
                    p && (t = (0, o.ensureBytes)("prehashed msgHash", s(t)));
                  let E = A(t),
                    B = b(e),
                    x = [I(B), I(E)];
                  if (null != m) {
                    let t = !0 === m ? h(a.BYTES) : m;
                    x.push((0, o.ensureBytes)("extraEntropy", t));
                  }
                  return {
                    seed: i.concatBytes(...x),
                    k2sig: function (t) {
                      let e = S(t);
                      if (!w(e)) return;
                      let r = y(e),
                        n = g.BASE.multiply(e).toAffine(),
                        i = c(n.x);
                      if (i === f) return;
                      let o = c(r * c(E + i * B));
                      if (o === f) return;
                      let s = (n.x === i ? 0 : 2) | Number(n.y & u),
                        a = o;
                      if (d && o > l >> u)
                        (a = o > l >> u ? c(-o) : o), (s ^= 1);
                      return new v(i, a, s);
                    },
                  };
                })(t, e, n);
                return i.createHmacDrbg(
                  r.hash.outputLen,
                  r.nByteLength,
                  r.hmac
                )(s, h);
              },
              verify: function (t, n, i, s = L) {
                let a, l;
                if (
                  ((n = (0, o.ensureBytes)("msgHash", n)),
                  (i = (0, o.ensureBytes)("publicKey", i)),
                  "strict" in s)
                )
                  throw Error("options.strict was renamed to lowS");
                let { lowS: f, prehash: u } = s;
                try {
                  if ("string" == typeof t || t instanceof Uint8Array)
                    try {
                      l = v.fromDER(t);
                    } catch (r) {
                      if (!(r instanceof e.DER.Err)) throw r;
                      l = v.fromCompact(t);
                    }
                  else if (
                    "object" == typeof t &&
                    "bigint" == typeof t.r &&
                    "bigint" == typeof t.s
                  ) {
                    let { r: e, s: r } = t;
                    l = new v(e, r);
                  } else throw Error("PARSE");
                  a = g.fromHex(i);
                } catch (t) {
                  if ("PARSE" === t.message)
                    throw Error(
                      "signature must be Signature instance, Uint8Array or hex string"
                    );
                  return !1;
                }
                if (f && l.hasHighS()) return !1;
                u && (n = r.hash(n));
                let { r: h, s: d } = l,
                  p = A(n),
                  b = y(d),
                  m = c(p * b),
                  w = c(h * b),
                  E = g.BASE.multiplyAndAddUnsafe(a, m, w)?.toAffine();
                return !!E && c(E.x) === h;
              },
              ProjectivePoint: g,
              Signature: v,
              utils: {
                isValidPrivateKey(t) {
                  try {
                    return b(t), !0;
                  } catch (t) {
                    return !1;
                  }
                },
                normPrivateKeyToScalar: b,
                randomPrivateKey: () => {
                  let t = n.getMinHashLength(r.n);
                  return n.mapHashToField(r.randomBytes(t), r.n);
                },
                precompute: (t = 8, e = g.BASE) => (
                  e._setWindowSize(t), e.multiply((3)), e
                ),
              },
            }
          );
        }),
        (e.SWUFpSqrtRatio = y),
        (e.mapToCurveSimpleSWU = function (t, e) {
          if (
            (n.validateField(t),
            !t.isValid(e.A) || !t.isValid(e.B) || !t.isValid(e.Z))
          )
            throw Error("mapToCurveSimpleSWU: invalid opts");
          let r = y(t, e.Z);
          if (!t.isOdd) throw Error("Fp.isOdd is not implemented!");
          return (n) => {
            let i, o, s, a, l, f, u, h;
            (i = t.sqr(n)),
              (i = t.mul(i, e.Z)),
              (o = t.sqr(i)),
              (o = t.add(o, i)),
              (s = t.add(o, t.ONE)),
              (s = t.mul(s, e.B)),
              (a = t.cmov(e.Z, t.neg(o), !t.eql(o, t.ZERO))),
              (a = t.mul(a, e.A)),
              (o = t.sqr(s)),
              (f = t.sqr(a)),
              (l = t.mul(f, e.A)),
              (o = t.add(o, l)),
              (o = t.mul(o, s)),
              (f = t.mul(f, a)),
              (l = t.mul(f, e.B)),
              (o = t.add(o, l)),
              (u = t.mul(i, s));
            let { isValid: d, value: c } = r(o, f);
            (h = t.mul(i, n)),
              (h = t.mul(h, c)),
              (u = t.cmov(u, s, d)),
              (h = t.cmov(h, c, d));
            let p = t.isOdd(n) === t.isOdd(h);
            return (h = t.cmov(t.neg(h), h, p)), { x: (u = t.div(u, a)), y: h };
          };
        });
    },
    83008: function (t, e) {
      function r(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error(`Wrong positive integer: ${t}`);
      }
      function n(t) {
        if ("boolean" != typeof t) throw Error(`Expected boolean, not ${t}`);
      }
      function i(t, ...e) {
        if (!(t instanceof Uint8Array)) throw Error("Expected Uint8Array");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            `Expected Uint8Array of length ${e}, not of length=${t.length}`
          );
      }
      function o(t) {
        if ("function" != typeof t || "function" != typeof t.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        r(t.outputLen), r(t.blockLen);
      }
      function s(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(t, e) {
        i(t);
        let r = e.outputLen;
        if (t.length < r)
          throw Error(
            `digestInto() expects output buffer of length at least ${r}`
          );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.output = e.exists = e.hash = e.bytes = e.bool = e.number = void 0),
        (e.number = r),
        (e.bool = n),
        (e.bytes = i),
        (e.hash = o),
        (e.exists = s),
        (e.output = a),
        (e.default = {
          number: r,
          bool: n,
          bytes: i,
          hash: o,
          exists: s,
          output: a,
        });
    },
    26522: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.SHA2 = void 0);
      let n = r(83008),
        i = r(8962);
      class o extends i.Hash {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.createView)(this.buffer));
        }
        update(t) {
          (0, n.exists)(this);
          let { view: e, buffer: r, blockLen: o } = this,
            s = (t = (0, i.toBytes)(t)).length;
          for (let n = 0; n < s; ) {
            let a = Math.min(o - this.pos, s - n);
            if (a === o) {
              let e = (0, i.createView)(t);
              for (; o <= s - n; n += o) this.process(e, n);
              continue;
            }
            r.set(t.subarray(n, n + a), this.pos),
              (this.pos += a),
              (n += a),
              this.pos === o && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, n.exists)(this), (0, n.output)(t, this), (this.finished = !0);
          let { buffer: e, view: r, blockLen: o, isLE: s } = this,
            { pos: a } = this;
          (e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(r, 0), (a = 0));
          for (let t = a; t < o; t++) e[t] = 0;
          !(function (t, e, r, n) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let i = (32),
              o = (4294967295),
              s = Number((r >> i) & o),
              a = Number(r & o),
              l = n ? 4 : 0,
              f = n ? 0 : 4;
            t.setUint32(e + l, s, n), t.setUint32(e + f, a, n);
          })(r, o - 8, (8 * this.length), s),
            this.process(r, 0);
          let l = (0, i.createView)(t),
            f = this.outputLen;
          if (f % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = f / 4,
            h = this.get();
          if (u > h.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < u; t++) l.setUint32(4 * t, h[t], s);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = n),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
      e.SHA2 = o;
    },
    11379: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.add5L =
          e.add5H =
          e.add4H =
          e.add4L =
          e.add3H =
          e.add3L =
          e.add =
          e.rotlBL =
          e.rotlBH =
          e.rotlSL =
          e.rotlSH =
          e.rotr32L =
          e.rotr32H =
          e.rotrBL =
          e.rotrBH =
          e.rotrSL =
          e.rotrSH =
          e.shrSL =
          e.shrSH =
          e.toBig =
          e.split =
          e.fromBig =
            void 0);
      let r = _BigInt(4294967296 - 1),
        n = _BigInt(32);
      function i(t, e = !1) {
        return e
          ? { h: Number(t & r), l: Number((t >> n) & r) }
          : { h: 0 | Number((t >> n) & r), l: 0 | Number(t & r) };
      }
      function o(t, e = !1) {
        let r = new Uint32Array(t.length),
          n = new Uint32Array(t.length);
        for (let o = 0; o < t.length; o++) {
          let { h: s, l: a } = i(t[o], e);
          [r[o], n[o]] = [s, a];
        }
        return [r, n];
      }
      (e.fromBig = i), (e.split = o);
      let s = (t, e) => 0;
      e.toBig = s;
      let a = (t, e, r) => t >>> r;
      e.shrSH = a;
      let l = (t, e, r) => (t << (32 - r)) | (e >>> r);
      e.shrSL = l;
      let f = (t, e, r) => (t >>> r) | (e << (32 - r));
      e.rotrSH = f;
      let u = (t, e, r) => (t << (32 - r)) | (e >>> r);
      e.rotrSL = u;
      let h = (t, e, r) => (t << (64 - r)) | (e >>> (r - 32));
      e.rotrBH = h;
      let d = (t, e, r) => (t >>> (r - 32)) | (e << (64 - r));
      e.rotrBL = d;
      let c = (t, e) => e;
      e.rotr32H = c;
      let p = (t, e) => t;
      e.rotr32L = p;
      let y = (t, e, r) => (t << r) | (e >>> (32 - r));
      e.rotlSH = y;
      let g = (t, e, r) => (e << r) | (t >>> (32 - r));
      e.rotlSL = g;
      let b = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r));
      e.rotlBH = b;
      let m = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
      function w(t, e, r, n) {
        let i = (e >>> 0) + (n >>> 0);
        return { h: (t + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
      }
      (e.rotlBL = m), (e.add = w);
      let E = (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0);
      e.add3L = E;
      let B = (t, e, r, n) => (e + r + n + ((t / 4294967296) | 0)) | 0;
      e.add3H = B;
      let v = (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0);
      e.add4L = v;
      let x = (t, e, r, n, i) => (e + r + n + i + ((t / 4294967296) | 0)) | 0;
      e.add4H = x;
      let S = (t, e, r, n, i) =>
        (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
      e.add5L = S;
      let A = (t, e, r, n, i, o) =>
        (e + r + n + i + o + ((t / 4294967296) | 0)) | 0;
      (e.add5H = A),
        (e.default = {
          fromBig: i,
          split: o,
          toBig: s,
          shrSH: a,
          shrSL: l,
          rotrSH: f,
          rotrSL: u,
          rotrBH: h,
          rotrBL: d,
          rotr32H: c,
          rotr32L: p,
          rotlSH: y,
          rotlSL: g,
          rotlBH: b,
          rotlBL: m,
          add: w,
          add3L: E,
          add3H: B,
          add4L: v,
          add4H: x,
          add5H: A,
          add5L: S,
        });
    },
    40972: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.crypto = void 0),
        (e.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    8692: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.hmac = e.HMAC = void 0);
      let n = r(83008),
        i = r(8962);
      class o extends i.Hash {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, n.hash)(t);
          let r = (0, i.toBytes)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let o = this.blockLen,
            s = new Uint8Array(o);
          s.set(r.length > o ? t.create().update(r).digest() : r);
          for (let t = 0; t < s.length; t++) s[t] ^= 54;
          this.iHash.update(s), (this.oHash = t.create());
          for (let t = 0; t < s.length; t++) s[t] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(t) {
          return (0, n.exists)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, n.exists)(this),
            (0, n.bytes)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      (e.HMAC = o),
        (e.hmac = (t, e, r) => new o(t, e).update(r).digest()),
        (e.hmac.create = (t, e) => new o(t, e));
    },
    30341: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ripemd160 = e.RIPEMD160 = void 0);
      let n = r(26522),
        i = r(8962),
        o = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        s = Uint8Array.from({ length: 16 }, (t, e) => e),
        a = s.map((t) => (9 * t + 5) % 16),
        l = [s],
        f = [a];
      for (let t = 0; t < 4; t++)
        for (let e of [l, f]) e.push(e[t].map((t) => o[t]));
      let u = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((t) => new Uint8Array(t)),
        h = l.map((t, e) => t.map((t) => u[e][t])),
        d = f.map((t, e) => t.map((t) => u[e][t])),
        c = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        p = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        y = (t, e) => (t << e) | (t >>> (32 - e));
      function g(t, e, r, n) {
        return 0 === t
          ? e ^ r ^ n
          : 1 === t
          ? (e & r) | (~e & n)
          : 2 === t
          ? (e | ~r) ^ n
          : 3 === t
          ? (e & n) | (r & ~n)
          : e ^ (r | ~n);
      }
      let b = new Uint32Array(16);
      class m extends n.SHA2 {
        constructor() {
          super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776);
        }
        get() {
          let { h0: t, h1: e, h2: r, h3: n, h4: i } = this;
          return [t, e, r, n, i];
        }
        set(t, e, r, n, i) {
          (this.h0 = 0 | t),
            (this.h1 = 0 | e),
            (this.h2 = 0 | r),
            (this.h3 = 0 | n),
            (this.h4 = 0 | i);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) b[r] = t.getUint32(e, !0);
          let r = 0 | this.h0,
            n = r,
            i = 0 | this.h1,
            o = i,
            s = 0 | this.h2,
            a = s,
            u = 0 | this.h3,
            m = u,
            w = 0 | this.h4,
            E = w;
          for (let t = 0; t < 5; t++) {
            let e = 4 - t,
              B = c[t],
              v = p[t],
              x = l[t],
              S = f[t],
              A = h[t],
              O = d[t];
            for (let e = 0; e < 16; e++) {
              let n = (y(r + g(t, i, s, u) + b[x[e]] + B, A[e]) + w) | 0;
              (r = w), (w = u), (u = 0 | y(s, 10)), (s = i), (i = n);
            }
            for (let t = 0; t < 16; t++) {
              let r = (y(n + g(e, o, a, m) + b[S[t]] + v, O[t]) + E) | 0;
              (n = E), (E = m), (m = 0 | y(a, 10)), (a = o), (o = r);
            }
          }
          this.set(
            (this.h1 + s + m) | 0,
            (this.h2 + u + E) | 0,
            (this.h3 + w + n) | 0,
            (this.h4 + r + o) | 0,
            (this.h0 + i + a) | 0
          );
        }
        roundClean() {
          b.fill(0);
        }
        destroy() {
          (this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0);
        }
      }
      (e.RIPEMD160 = m), (e.ripemd160 = (0, i.wrapConstructor)(() => new m()));
    },
    93782: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sha224 = e.sha256 = void 0);
      let n = r(26522),
        i = r(8962),
        o = (t, e, r) => (t & e) ^ (~t & r),
        s = (t, e, r) => (t & e) ^ (t & r) ^ (e & r),
        a = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        l = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        f = new Uint32Array(64);
      class u extends n.SHA2 {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | l[0]),
            (this.B = 0 | l[1]),
            (this.C = 0 | l[2]),
            (this.D = 0 | l[3]),
            (this.E = 0 | l[4]),
            (this.F = 0 | l[5]),
            (this.G = 0 | l[6]),
            (this.H = 0 | l[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: i, F: o, G: s, H: a } = this;
          return [t, e, r, n, i, o, s, a];
        }
        set(t, e, r, n, i, o, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) f[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = f[t - 15],
              r = f[t - 2],
              n = (0, i.rotr)(e, 7) ^ (0, i.rotr)(e, 18) ^ (e >>> 3),
              o = (0, i.rotr)(r, 17) ^ (0, i.rotr)(r, 19) ^ (r >>> 10);
            f[t] = (o + f[t - 7] + n + f[t - 16]) | 0;
          }
          let { A: r, B: n, C: l, D: u, E: h, F: d, G: c, H: p } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (p +
                  ((0, i.rotr)(h, 6) ^
                    (0, i.rotr)(h, 11) ^
                    (0, i.rotr)(h, 25)) +
                  o(h, d, c) +
                  a[t] +
                  f[t]) |
                0,
              y =
                (((0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22)) +
                  s(r, n, l)) |
                0;
            (p = c),
              (c = d),
              (d = h),
              (h = (u + e) | 0),
              (u = l),
              (l = n),
              (n = r),
              (r = (e + y) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (l = (l + this.C) | 0),
            (u = (u + this.D) | 0),
            (h = (h + this.E) | 0),
            (d = (d + this.F) | 0),
            (c = (c + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(r, n, l, u, h, d, c, p);
        }
        roundClean() {
          f.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      class h extends u {
        constructor() {
          super(),
            (this.A = -1056596264),
            (this.B = 914150663),
            (this.C = 812702999),
            (this.D = -150054599),
            (this.E = -4191439),
            (this.F = 1750603025),
            (this.G = 1694076839),
            (this.H = -1090891868),
            (this.outputLen = 28);
        }
      }
      (e.sha256 = (0, i.wrapConstructor)(() => new u())),
        (e.sha224 = (0, i.wrapConstructor)(() => new h()));
    },
    14816: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.shake256 =
          e.shake128 =
          e.keccak_512 =
          e.keccak_384 =
          e.keccak_256 =
          e.keccak_224 =
          e.sha3_512 =
          e.sha3_384 =
          e.sha3_256 =
          e.sha3_224 =
          e.Keccak =
          e.keccakP =
            void 0);
      let n = r(83008),
        i = r(11379),
        o = r(8962),
        [s, a, l] = [[], [], []],
        f = _BigInt(0),
        u = _BigInt(1),
        h = _BigInt(2),
        d = _BigInt(7),
        c = _BigInt(256),
        p = _BigInt(113);
      for (let t = 0, e = u, r = 1, n = 0; t < 24; t++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          s.push(2 * (5 * n + r)),
          a.push((((t + 1) * (t + 2)) / 2) % 64);
        let i = f;
        for (let t = 0; t < 7; t++)
          (e = ((e << u) ^ ((e >> d) * p)) % c) & h &&
            (i ^= u << ((u << _BigInt(t)) - u));
        l.push(i);
      }
      let [y, g] = (0, i.split)(l, !0),
        b = (t, e, r) =>
          r > 32 ? (0, i.rotlBH)(t, e, r) : (0, i.rotlSH)(t, e, r),
        m = (t, e, r) =>
          r > 32 ? (0, i.rotlBL)(t, e, r) : (0, i.rotlSL)(t, e, r);
      function w(t, e = 24) {
        let r = new Uint32Array(10);
        for (let n = 24 - e; n < 24; n++) {
          for (let e = 0; e < 10; e++)
            r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
          for (let e = 0; e < 10; e += 2) {
            let n = (e + 8) % 10,
              i = (e + 2) % 10,
              o = r[i],
              s = r[i + 1],
              a = b(o, s, 1) ^ r[n],
              l = m(o, s, 1) ^ r[n + 1];
            for (let r = 0; r < 50; r += 10)
              (t[e + r] ^= a), (t[e + r + 1] ^= l);
          }
          let e = t[2],
            i = t[3];
          for (let r = 0; r < 24; r++) {
            let n = a[r],
              o = b(e, i, n),
              l = m(e, i, n),
              f = s[r];
            (e = t[f]), (i = t[f + 1]), (t[f] = o), (t[f + 1] = l);
          }
          for (let e = 0; e < 50; e += 10) {
            for (let n = 0; n < 10; n++) r[n] = t[e + n];
            for (let n = 0; n < 10; n++)
              t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
          }
          (t[0] ^= y[n]), (t[1] ^= g[n]);
        }
        r.fill(0);
      }
      e.keccakP = w;
      class E extends o.Hash {
        constructor(t, e, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.number)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, o.u32)(this.state));
        }
        keccak() {
          w(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0);
        }
        update(t) {
          (0, n.exists)(this);
          let { blockLen: e, state: r } = this,
            i = (t = (0, o.toBytes)(t)).length;
          for (let n = 0; n < i; ) {
            let o = Math.min(e - this.pos, i - n);
            for (let e = 0; e < o; e++) r[this.pos++] ^= t[n++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: r, blockLen: n } = this;
          (t[r] ^= e),
            (128 & e) != 0 && r === n - 1 && this.keccak(),
            (t[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, n.exists)(this, !1), (0, n.bytes)(t), this.finish();
          let e = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = t.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let o = Math.min(r - this.posOut, i - n);
            t.set(e.subarray(this.posOut, this.posOut + o), n),
              (this.posOut += o),
              (n += o);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, n.number)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, n.output)(t, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          let {
            blockLen: e,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new E(e, r, n, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = r),
            (t.outputLen = n),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      e.Keccak = E;
      let B = (t, e, r) => (0, o.wrapConstructor)(() => new E(e, t, r));
      (e.sha3_224 = B(6, 144, 28)),
        (e.sha3_256 = B(6, 136, 32)),
        (e.sha3_384 = B(6, 104, 48)),
        (e.sha3_512 = B(6, 72, 64)),
        (e.keccak_224 = B(1, 144, 28)),
        (e.keccak_256 = B(1, 136, 32)),
        (e.keccak_384 = B(1, 104, 48)),
        (e.keccak_512 = B(1, 72, 64));
      let v = (t, e, r) =>
        (0, o.wrapXOFConstructorWithOpts)(
          (n = {}) => new E(e, t, void 0 === n.dkLen ? r : n.dkLen, !0)
        );
      (e.shake128 = v(31, 168, 16)), (e.shake256 = v(31, 136, 32));
    },
    8962: function (t, e, r) {
      /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
        e,
        "__esModule",
        { value: !0 }
      ),
        (e.randomBytes =
          e.wrapXOFConstructorWithOpts =
          e.wrapConstructorWithOpts =
          e.wrapConstructor =
          e.checkOpts =
          e.Hash =
          e.concatBytes =
          e.toBytes =
          e.utf8ToBytes =
          e.asyncLoop =
          e.nextTick =
          e.hexToBytes =
          e.bytesToHex =
          e.isLE =
          e.rotr =
          e.createView =
          e.u32 =
          e.u8 =
            void 0);
      let n = r(40972),
        i = (t) => t instanceof Uint8Array;
      if (
        ((e.u8 = (t) => new Uint8Array(t.buffer, t.byteOffset, t.byteLength)),
        (e.u32 = (t) =>
          new Uint32Array(
            t.buffer,
            t.byteOffset,
            Math.floor(t.byteLength / 4)
          )),
        (e.createView = (t) =>
          new DataView(t.buffer, t.byteOffset, t.byteLength)),
        (e.rotr = (t, e) => (t << (32 - e)) | (t >>> e)),
        (e.isLE =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        !e.isLE)
      )
        throw Error("Non little-endian hardware is not supported");
      let o = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      (e.bytesToHex = function (t) {
        if (!i(t)) throw Error("Uint8Array expected");
        let e = "";
        for (let r = 0; r < t.length; r++) e += o[t[r]];
        return e;
      }),
        (e.hexToBytes = function (t) {
          if ("string" != typeof t)
            throw Error("hex string expected, got " + typeof t);
          let e = t.length;
          if (e % 2)
            throw Error(
              "padded hex string expected, got unpadded hex of length " + e
            );
          let r = new Uint8Array(e / 2);
          for (let e = 0; e < r.length; e++) {
            let n = 2 * e,
              i = Number.parseInt(t.slice(n, n + 2), 16);
            if (Number.isNaN(i) || i < 0) throw Error("Invalid byte sequence");
            r[e] = i;
          }
          return r;
        });
      let s = async () => {};
      async function a(t, r, n) {
        let i = Date.now();
        for (let o = 0; o < t; o++) {
          n(o);
          let t = Date.now() - i;
          (t >= 0 && t < r) || (await (0, e.nextTick)(), (i += t));
        }
      }
      function l(t) {
        if ("string" != typeof t)
          throw Error(`utf8ToBytes expected string, got ${typeof t}`);
        return new Uint8Array(new TextEncoder().encode(t));
      }
      function f(t) {
        if (("string" == typeof t && (t = l(t)), !i(t)))
          throw Error(`expected Uint8Array, got ${typeof t}`);
        return t;
      }
      (e.nextTick = s),
        (e.asyncLoop = a),
        (e.utf8ToBytes = l),
        (e.toBytes = f),
        (e.concatBytes = function (...t) {
          let e = new Uint8Array(t.reduce((t, e) => t + e.length, 0)),
            r = 0;
          return (
            t.forEach((t) => {
              if (!i(t)) throw Error("Uint8Array expected");
              e.set(t, r), (r += t.length);
            }),
            e
          );
        });
      class u {
        clone() {
          return this._cloneInto();
        }
      }
      e.Hash = u;
      let h = {}.toString;
      (e.checkOpts = function (t, e) {
        if (void 0 !== e && "[object Object]" !== h.call(e))
          throw Error("Options should be object or undefined");
        return Object.assign(t, e);
      }),
        (e.wrapConstructor = function (t) {
          let e = (e) => t().update(f(e)).digest(),
            r = t();
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = () => t()),
            e
          );
        }),
        (e.wrapConstructorWithOpts = function (t) {
          let e = (e, r) => t(r).update(f(e)).digest(),
            r = t({});
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = (e) => t(e)),
            e
          );
        }),
        (e.wrapXOFConstructorWithOpts = function (t) {
          let e = (e, r) => t(r).update(f(e)).digest(),
            r = t({});
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = (e) => t(e)),
            e
          );
        }),
        (e.randomBytes = function (t = 32) {
          if (n.crypto && "function" == typeof n.crypto.getRandomValues)
            return n.crypto.getRandomValues(new Uint8Array(t));
          throw Error("crypto.getRandomValues must be defined");
        });
    },
  },
]);
