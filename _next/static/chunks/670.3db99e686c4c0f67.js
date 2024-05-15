(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [670],
  {
    71054: function (e, t, r) {
      "use strict";
      var i = r(49055),
        n = r(50792),
        s = r(34405),
        o = r(51789),
        a = r(15044);
      (t.Cv = 32), (t.WH = 12), (t.pg = 16);
      var c = new Uint8Array(16),
        u = (function () {
          function e(e) {
            if (
              ((this.nonceLength = t.WH),
              (this.tagLength = t.pg),
              e.length !== t.Cv)
            )
              throw Error("ChaCha20Poly1305 needs 32-byte key");
            this._key = new Uint8Array(e);
          }
          return (
            (e.prototype.seal = function (e, t, r, n) {
              if (e.length > 16)
                throw Error("ChaCha20Poly1305: incorrect nonce length");
              var o,
                a = new Uint8Array(16);
              a.set(e, a.length - e.length);
              var c = new Uint8Array(32);
              i.stream(this._key, a, c, 4);
              var u = t.length + this.tagLength;
              if (n) {
                if (n.length !== u)
                  throw Error("ChaCha20Poly1305: incorrect destination length");
                o = n;
              } else o = new Uint8Array(u);
              return (
                i.streamXOR(this._key, a, t, o, 4),
                this._authenticate(
                  o.subarray(o.length - this.tagLength, o.length),
                  c,
                  o.subarray(0, o.length - this.tagLength),
                  r
                ),
                s.wipe(a),
                o
              );
            }),
            (e.prototype.open = function (e, t, r, n) {
              if (e.length > 16)
                throw Error("ChaCha20Poly1305: incorrect nonce length");
              if (t.length < this.tagLength) return null;
              var o,
                c = new Uint8Array(16);
              c.set(e, c.length - e.length);
              var u = new Uint8Array(32);
              i.stream(this._key, c, u, 4);
              var h = new Uint8Array(this.tagLength);
              if (
                (this._authenticate(
                  h,
                  u,
                  t.subarray(0, t.length - this.tagLength),
                  r
                ),
                !a.equal(h, t.subarray(t.length - this.tagLength, t.length)))
              )
                return null;
              var l = t.length - this.tagLength;
              if (n) {
                if (n.length !== l)
                  throw Error("ChaCha20Poly1305: incorrect destination length");
                o = n;
              } else o = new Uint8Array(l);
              return (
                i.streamXOR(
                  this._key,
                  c,
                  t.subarray(0, t.length - this.tagLength),
                  o,
                  4
                ),
                s.wipe(c),
                o
              );
            }),
            (e.prototype.clean = function () {
              return s.wipe(this._key), this;
            }),
            (e.prototype._authenticate = function (e, t, r, i) {
              var a = new n.Poly1305(t);
              i &&
                (a.update(i),
                i.length % 16 > 0 && a.update(c.subarray(i.length % 16))),
                a.update(r),
                r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
              var u = new Uint8Array(8);
              i && o.writeUint64LE(i.length, u),
                a.update(u),
                o.writeUint64LE(r.length, u),
                a.update(u);
              for (var h = a.digest(), l = 0; l < h.length; l++) e[l] = h[l];
              a.clean(), s.wipe(h), s.wipe(u);
            }),
            e
          );
        })();
      t.OK = u;
    },
    49055: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(51789),
        n = r(34405);
      function s(e, t, r, s, o) {
        if ((void 0 === o && (o = 0), 32 !== e.length))
          throw Error("ChaCha: key size must be 32 bytes");
        if (s.length < r.length)
          throw Error("ChaCha: destination is shorter than source");
        if (0 === o) {
          if (8 !== t.length && 12 !== t.length)
            throw Error("ChaCha nonce must be 8 or 12 bytes");
          (c = (a = new Uint8Array(16)).length - t.length), a.set(t, c);
        } else {
          if (16 !== t.length)
            throw Error("ChaCha nonce with counter must be 16 bytes");
          (a = t), (c = o);
        }
        for (var a, c, u = new Uint8Array(64), h = 0; h < r.length; h += 64) {
          !(function (e, t, r) {
            for (
              var n = (r[3] << 24) | (r[2] << 16) | (r[1] << 8) | r[0],
                s = (r[7] << 24) | (r[6] << 16) | (r[5] << 8) | r[4],
                o = (r[11] << 24) | (r[10] << 16) | (r[9] << 8) | r[8],
                a = (r[15] << 24) | (r[14] << 16) | (r[13] << 8) | r[12],
                c = (r[19] << 24) | (r[18] << 16) | (r[17] << 8) | r[16],
                u = (r[23] << 24) | (r[22] << 16) | (r[21] << 8) | r[20],
                h = (r[27] << 24) | (r[26] << 16) | (r[25] << 8) | r[24],
                l = (r[31] << 24) | (r[30] << 16) | (r[29] << 8) | r[28],
                f = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
                p = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
                d = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
                g = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
                y = 1634760805,
                v = 857760878,
                m = 2036477234,
                b = 1797285236,
                _ = n,
                w = s,
                E = o,
                D = a,
                I = c,
                S = u,
                P = h,
                O = l,
                C = f,
                A = p,
                x = d,
                N = g,
                R = 0;
              R < 20;
              R += 2
            )
              (C ^= y = (y + _) | 0),
                (_ ^= I = (I + (C = (C >>> 16) | (C << 16))) | 0),
                (_ = (_ >>> 20) | (_ << 12)),
                (A ^= v = (v + w) | 0),
                (w ^= S = (S + (A = (A >>> 16) | (A << 16))) | 0),
                (w = (w >>> 20) | (w << 12)),
                (x ^= m = (m + E) | 0),
                (E ^= P = (P + (x = (x >>> 16) | (x << 16))) | 0),
                (E = (E >>> 20) | (E << 12)),
                (N ^= b = (b + D) | 0),
                (D ^= O = (O + (N = (N >>> 16) | (N << 16))) | 0),
                (D = (D >>> 20) | (D << 12)),
                (x ^= m = (m + E) | 0),
                (E ^= P = (P + (x = (x >>> 24) | (x << 8))) | 0),
                (E = (E >>> 25) | (E << 7)),
                (N ^= b = (b + D) | 0),
                (D ^= O = (O + (N = (N >>> 24) | (N << 8))) | 0),
                (D = (D >>> 25) | (D << 7)),
                (A ^= v = (v + w) | 0),
                (w ^= S = (S + (A = (A >>> 24) | (A << 8))) | 0),
                (w = (w >>> 25) | (w << 7)),
                (C ^= y = (y + _) | 0),
                (_ ^= I = (I + (C = (C >>> 24) | (C << 8))) | 0),
                (_ = (_ >>> 25) | (_ << 7)),
                (N ^= y = (y + w) | 0),
                (w ^= P = (P + (N = (N >>> 16) | (N << 16))) | 0),
                (w = (w >>> 20) | (w << 12)),
                (C ^= v = (v + E) | 0),
                (E ^= O = (O + (C = (C >>> 16) | (C << 16))) | 0),
                (E = (E >>> 20) | (E << 12)),
                (A ^= m = (m + D) | 0),
                (D ^= I = (I + (A = (A >>> 16) | (A << 16))) | 0),
                (D = (D >>> 20) | (D << 12)),
                (x ^= b = (b + _) | 0),
                (_ ^= S = (S + (x = (x >>> 16) | (x << 16))) | 0),
                (_ = (_ >>> 20) | (_ << 12)),
                (A ^= m = (m + D) | 0),
                (D ^= I = (I + (A = (A >>> 24) | (A << 8))) | 0),
                (D = (D >>> 25) | (D << 7)),
                (x ^= b = (b + _) | 0),
                (_ ^= S = (S + (x = (x >>> 24) | (x << 8))) | 0),
                (_ = (_ >>> 25) | (_ << 7)),
                (C ^= v = (v + E) | 0),
                (E ^= O = (O + (C = (C >>> 24) | (C << 8))) | 0),
                (E = (E >>> 25) | (E << 7)),
                (N ^= y = (y + w) | 0),
                (w ^= P = (P + (N = (N >>> 24) | (N << 8))) | 0),
                (w = (w >>> 25) | (w << 7));
            i.writeUint32LE((y + 1634760805) | 0, e, 0),
              i.writeUint32LE((v + 857760878) | 0, e, 4),
              i.writeUint32LE((m + 2036477234) | 0, e, 8),
              i.writeUint32LE((b + 1797285236) | 0, e, 12),
              i.writeUint32LE((_ + n) | 0, e, 16),
              i.writeUint32LE((w + s) | 0, e, 20),
              i.writeUint32LE((E + o) | 0, e, 24),
              i.writeUint32LE((D + a) | 0, e, 28),
              i.writeUint32LE((I + c) | 0, e, 32),
              i.writeUint32LE((S + u) | 0, e, 36),
              i.writeUint32LE((P + h) | 0, e, 40),
              i.writeUint32LE((O + l) | 0, e, 44),
              i.writeUint32LE((C + f) | 0, e, 48),
              i.writeUint32LE((A + p) | 0, e, 52),
              i.writeUint32LE((x + d) | 0, e, 56),
              i.writeUint32LE((N + g) | 0, e, 60);
          })(u, a, e);
          for (var l = h; l < h + 64 && l < r.length; l++)
            s[l] = r[l] ^ u[l - h];
          !(function (e, t, r) {
            for (var i = 1; r--; )
              (i = (i + (255 & e[t])) | 0), (e[t] = 255 & i), (i >>>= 8), t++;
            if (i > 0) throw Error("ChaCha: counter overflow");
          })(a, 0, c);
        }
        return n.wipe(u), 0 === o && n.wipe(a), s;
      }
      (t.streamXOR = s),
        (t.stream = function (e, t, r, i) {
          return void 0 === i && (i = 0), n.wipe(r), s(e, t, r, r, i);
        });
    },
    15044: function (e, t) {
      "use strict";
      function r(e, t) {
        if (e.length !== t.length) return 0;
        for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
        return 1 & ((r - 1) >>> 8);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.select = function (e, t, r) {
          return (~(e - 1) & t) | ((e - 1) & r);
        }),
        (t.lessOrEqual = function (e, t) {
          return (((0 | e) - (0 | t) - 1) >>> 31) & 1;
        }),
        (t.compare = r),
        (t.equal = function (e, t) {
          return 0 !== e.length && 0 !== t.length && 0 !== r(e, t);
        });
    },
    73280: function (e, t, r) {
      "use strict";
      (t.Xx = t._w = t.aP = t.KS = t.jQ = void 0), r(81214);
      let i = r(41835);
      function n(e) {
        let t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      r(34405),
        (t.jQ = 64),
        (t.KS = 64),
        (t.aP = 32),
        (new Uint8Array(32)[0] = 9);
      let s = n(),
        o = n([1]),
        a =
          (n([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          n([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ])),
        c = n([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        u = n([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]);
      function h(e, t) {
        for (let r = 0; r < 16; r++) e[r] = 0 | t[r];
      }
      function l(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let i = e[r] + t + 65535;
          (t = Math.floor(i / 65536)), (e[r] = i - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function f(e, t, r) {
        let i = ~(r - 1);
        for (let r = 0; r < 16; r++) {
          let n = i & (e[r] ^ t[r]);
          (e[r] ^= n), (t[r] ^= n);
        }
      }
      function p(e, t) {
        let r = n(),
          i = n();
        for (let e = 0; e < 16; e++) i[e] = t[e];
        l(i), l(i), l(i);
        for (let e = 0; e < 2; e++) {
          r[0] = i[0] - 65517;
          for (let e = 1; e < 15; e++)
            (r[e] = i[e] - 65535 - ((r[e - 1] >> 16) & 1)), (r[e - 1] &= 65535);
          r[15] = i[15] - 32767 - ((r[14] >> 16) & 1);
          let e = (r[15] >> 16) & 1;
          (r[14] &= 65535), f(i, r, 1 - e);
        }
        for (let t = 0; t < 16; t++)
          (e[2 * t] = 255 & i[t]), (e[2 * t + 1] = i[t] >> 8);
      }
      n([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
      function d(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
      }
      function g(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
      }
      function y(e, t, r) {
        let i,
          n,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          h = 0,
          l = 0,
          f = 0,
          p = 0,
          d = 0,
          g = 0,
          y = 0,
          v = 0,
          m = 0,
          b = 0,
          _ = 0,
          w = 0,
          E = 0,
          D = 0,
          I = 0,
          S = 0,
          P = 0,
          O = 0,
          C = 0,
          A = 0,
          x = 0,
          N = 0,
          R = 0,
          T = 0,
          j = 0,
          U = 0,
          L = r[0],
          k = r[1],
          M = r[2],
          q = r[3],
          $ = r[4],
          z = r[5],
          H = r[6],
          F = r[7],
          V = r[8],
          K = r[9],
          B = r[10],
          W = r[11],
          G = r[12],
          Y = r[13],
          J = r[14],
          Q = r[15];
        (s += (i = t[0]) * L),
          (o += i * k),
          (a += i * M),
          (c += i * q),
          (u += i * $),
          (h += i * z),
          (l += i * H),
          (f += i * F),
          (p += i * V),
          (d += i * K),
          (g += i * B),
          (y += i * W),
          (v += i * G),
          (m += i * Y),
          (b += i * J),
          (_ += i * Q),
          (o += (i = t[1]) * L),
          (a += i * k),
          (c += i * M),
          (u += i * q),
          (h += i * $),
          (l += i * z),
          (f += i * H),
          (p += i * F),
          (d += i * V),
          (g += i * K),
          (y += i * B),
          (v += i * W),
          (m += i * G),
          (b += i * Y),
          (_ += i * J),
          (w += i * Q),
          (a += (i = t[2]) * L),
          (c += i * k),
          (u += i * M),
          (h += i * q),
          (l += i * $),
          (f += i * z),
          (p += i * H),
          (d += i * F),
          (g += i * V),
          (y += i * K),
          (v += i * B),
          (m += i * W),
          (b += i * G),
          (_ += i * Y),
          (w += i * J),
          (E += i * Q),
          (c += (i = t[3]) * L),
          (u += i * k),
          (h += i * M),
          (l += i * q),
          (f += i * $),
          (p += i * z),
          (d += i * H),
          (g += i * F),
          (y += i * V),
          (v += i * K),
          (m += i * B),
          (b += i * W),
          (_ += i * G),
          (w += i * Y),
          (E += i * J),
          (D += i * Q),
          (u += (i = t[4]) * L),
          (h += i * k),
          (l += i * M),
          (f += i * q),
          (p += i * $),
          (d += i * z),
          (g += i * H),
          (y += i * F),
          (v += i * V),
          (m += i * K),
          (b += i * B),
          (_ += i * W),
          (w += i * G),
          (E += i * Y),
          (D += i * J),
          (I += i * Q),
          (h += (i = t[5]) * L),
          (l += i * k),
          (f += i * M),
          (p += i * q),
          (d += i * $),
          (g += i * z),
          (y += i * H),
          (v += i * F),
          (m += i * V),
          (b += i * K),
          (_ += i * B),
          (w += i * W),
          (E += i * G),
          (D += i * Y),
          (I += i * J),
          (S += i * Q),
          (l += (i = t[6]) * L),
          (f += i * k),
          (p += i * M),
          (d += i * q),
          (g += i * $),
          (y += i * z),
          (v += i * H),
          (m += i * F),
          (b += i * V),
          (_ += i * K),
          (w += i * B),
          (E += i * W),
          (D += i * G),
          (I += i * Y),
          (S += i * J),
          (P += i * Q),
          (f += (i = t[7]) * L),
          (p += i * k),
          (d += i * M),
          (g += i * q),
          (y += i * $),
          (v += i * z),
          (m += i * H),
          (b += i * F),
          (_ += i * V),
          (w += i * K),
          (E += i * B),
          (D += i * W),
          (I += i * G),
          (S += i * Y),
          (P += i * J),
          (O += i * Q),
          (p += (i = t[8]) * L),
          (d += i * k),
          (g += i * M),
          (y += i * q),
          (v += i * $),
          (m += i * z),
          (b += i * H),
          (_ += i * F),
          (w += i * V),
          (E += i * K),
          (D += i * B),
          (I += i * W),
          (S += i * G),
          (P += i * Y),
          (O += i * J),
          (C += i * Q),
          (d += (i = t[9]) * L),
          (g += i * k),
          (y += i * M),
          (v += i * q),
          (m += i * $),
          (b += i * z),
          (_ += i * H),
          (w += i * F),
          (E += i * V),
          (D += i * K),
          (I += i * B),
          (S += i * W),
          (P += i * G),
          (O += i * Y),
          (C += i * J),
          (A += i * Q),
          (g += (i = t[10]) * L),
          (y += i * k),
          (v += i * M),
          (m += i * q),
          (b += i * $),
          (_ += i * z),
          (w += i * H),
          (E += i * F),
          (D += i * V),
          (I += i * K),
          (S += i * B),
          (P += i * W),
          (O += i * G),
          (C += i * Y),
          (A += i * J),
          (x += i * Q),
          (y += (i = t[11]) * L),
          (v += i * k),
          (m += i * M),
          (b += i * q),
          (_ += i * $),
          (w += i * z),
          (E += i * H),
          (D += i * F),
          (I += i * V),
          (S += i * K),
          (P += i * B),
          (O += i * W),
          (C += i * G),
          (A += i * Y),
          (x += i * J),
          (N += i * Q),
          (v += (i = t[12]) * L),
          (m += i * k),
          (b += i * M),
          (_ += i * q),
          (w += i * $),
          (E += i * z),
          (D += i * H),
          (I += i * F),
          (S += i * V),
          (P += i * K),
          (O += i * B),
          (C += i * W),
          (A += i * G),
          (x += i * Y),
          (N += i * J),
          (R += i * Q),
          (m += (i = t[13]) * L),
          (b += i * k),
          (_ += i * M),
          (w += i * q),
          (E += i * $),
          (D += i * z),
          (I += i * H),
          (S += i * F),
          (P += i * V),
          (O += i * K),
          (C += i * B),
          (A += i * W),
          (x += i * G),
          (N += i * Y),
          (R += i * J),
          (T += i * Q),
          (b += (i = t[14]) * L),
          (_ += i * k),
          (w += i * M),
          (E += i * q),
          (D += i * $),
          (I += i * z),
          (S += i * H),
          (P += i * F),
          (O += i * V),
          (C += i * K),
          (A += i * B),
          (x += i * W),
          (N += i * G),
          (R += i * Y),
          (T += i * J),
          (j += i * Q),
          (_ += (i = t[15]) * L),
          (w += i * k),
          (E += i * M),
          (D += i * q),
          (I += i * $),
          (S += i * z),
          (P += i * H),
          (O += i * F),
          (C += i * V),
          (A += i * K),
          (x += i * B),
          (N += i * W),
          (R += i * G),
          (T += i * Y),
          (j += i * J),
          (U += i * Q),
          (s += 38 * w),
          (o += 38 * E),
          (a += 38 * D),
          (c += 38 * I),
          (u += 38 * S),
          (h += 38 * P),
          (l += 38 * O),
          (f += 38 * C),
          (p += 38 * A),
          (d += 38 * x),
          (g += 38 * N),
          (y += 38 * R),
          (v += 38 * T),
          (m += 38 * j),
          (b += 38 * U),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = b + n + 65535) / 65536)),
          (b = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = b + n + 65535) / 65536)),
          (b = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = h),
          (e[6] = l),
          (e[7] = f),
          (e[8] = p),
          (e[9] = d),
          (e[10] = g),
          (e[11] = y),
          (e[12] = v),
          (e[13] = m),
          (e[14] = b),
          (e[15] = _);
      }
      function v(e, t) {
        let r = n(),
          i = n(),
          s = n(),
          o = n(),
          c = n(),
          u = n(),
          h = n(),
          l = n(),
          f = n();
        g(r, e[1], e[0]),
          g(f, t[1], t[0]),
          y(r, r, f),
          d(i, e[0], e[1]),
          d(f, t[0], t[1]),
          y(i, i, f),
          y(s, e[3], t[3]),
          y(s, s, a),
          y(o, e[2], t[2]),
          d(o, o, o),
          g(c, i, r),
          g(u, o, s),
          d(h, o, s),
          d(l, i, r),
          y(e[0], c, u),
          y(e[1], l, h),
          y(e[2], h, u),
          y(e[3], c, l);
      }
      function m(e, t, r) {
        for (let i = 0; i < 4; i++) f(e[i], t[i], r);
      }
      function b(e, t) {
        let r = n(),
          i = n(),
          s = n();
        (function (e, t) {
          let r;
          let i = n();
          for (r = 0; r < 16; r++) i[r] = t[r];
          for (r = 253; r >= 0; r--)
            y(i, i, i), 2 !== r && 4 !== r && y(i, i, t);
          for (r = 0; r < 16; r++) e[r] = i[r];
        })(s, t[2]),
          y(r, t[0], s),
          y(i, t[1], s),
          p(e, i),
          (e[31] ^=
            (function (e) {
              let t = new Uint8Array(32);
              return p(t, e), 1 & t[0];
            })(r) << 7);
      }
      function _(e, t) {
        let r = [n(), n(), n(), n()];
        h(r[0], c),
          h(r[1], u),
          h(r[2], o),
          y(r[3], c, u),
          (function (e, t, r) {
            h(e[0], s), h(e[1], o), h(e[2], o), h(e[3], s);
            for (let i = 255; i >= 0; --i) {
              let n = (r[(i / 8) | 0] >> (7 & i)) & 1;
              m(e, t, n), v(t, e), v(e, e), m(e, t, n);
            }
          })(e, r, t);
      }
      t._w = function (e) {
        if (e.length !== t.aP)
          throw Error(`ed25519: seed must be ${t.aP} bytes`);
        let r = (0, i.hash)(e);
        (r[0] &= 248), (r[31] &= 127), (r[31] |= 64);
        let s = new Uint8Array(32),
          o = [n(), n(), n(), n()];
        _(o, r), b(s, o);
        let a = new Uint8Array(64);
        return a.set(e), a.set(s, 32), { publicKey: s, secretKey: a };
      };
      let w = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function E(e, t) {
        let r, i, n, s;
        for (i = 63; i >= 32; --i) {
          for (r = 0, n = i - 32, s = i - 12; n < s; ++n)
            (t[n] += r - 16 * t[i] * w[n - (i - 32)]),
              (r = Math.floor((t[n] + 128) / 256)),
              (t[n] -= 256 * r);
          (t[n] += r), (t[i] = 0);
        }
        for (n = 0, r = 0; n < 32; n++)
          (t[n] += r - (t[31] >> 4) * w[n]), (r = t[n] >> 8), (t[n] &= 255);
        for (n = 0; n < 32; n++) t[n] -= r * w[n];
        for (i = 0; i < 32; i++) (t[i + 1] += t[i] >> 8), (e[i] = 255 & t[i]);
      }
      function D(e) {
        let t = new Float64Array(64);
        for (let r = 0; r < 64; r++) t[r] = e[r];
        for (let t = 0; t < 64; t++) e[t] = 0;
        E(e, t);
      }
      t.Xx = function (e, t) {
        let r = new Float64Array(64),
          s = [n(), n(), n(), n()],
          o = (0, i.hash)(e.subarray(0, 32));
        (o[0] &= 248), (o[31] &= 127), (o[31] |= 64);
        let a = new Uint8Array(64);
        a.set(o.subarray(32), 32);
        let c = new i.SHA512();
        c.update(a.subarray(32)), c.update(t);
        let u = c.digest();
        c.clean(),
          D(u),
          _(s, u),
          b(a, s),
          c.reset(),
          c.update(a.subarray(0, 32)),
          c.update(e.subarray(32)),
          c.update(t);
        let h = c.digest();
        D(h);
        for (let e = 0; e < 32; e++) r[e] = u[e];
        for (let e = 0; e < 32; e++)
          for (let t = 0; t < 32; t++) r[e + t] += h[e] * o[t];
        return E(a.subarray(32), r), a;
      };
    },
    63944: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSerializableHash = function (e) {
          return (
            void 0 !== e.saveState &&
            void 0 !== e.restoreState &&
            void 0 !== e.cleanSavedState
          );
        });
    },
    12411: function (e, t, r) {
      "use strict";
      var i = r(2669),
        n = r(34405),
        s = (function () {
          function e(e, t, r, n) {
            void 0 === r && (r = new Uint8Array(0)),
              (this._counter = new Uint8Array(1)),
              (this._hash = e),
              (this._info = n);
            var s = i.hmac(this._hash, r, t);
            (this._hmac = new i.HMAC(e, s)),
              (this._buffer = new Uint8Array(this._hmac.digestLength)),
              (this._bufpos = this._buffer.length);
          }
          return (
            (e.prototype._fillBuffer = function () {
              this._counter[0]++;
              var e = this._counter[0];
              if (0 === e) throw Error("hkdf: cannot expand more");
              this._hmac.reset(),
                e > 1 && this._hmac.update(this._buffer),
                this._info && this._hmac.update(this._info),
                this._hmac.update(this._counter),
                this._hmac.finish(this._buffer),
                (this._bufpos = 0);
            }),
            (e.prototype.expand = function (e) {
              for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
                this._bufpos === this._buffer.length && this._fillBuffer(),
                  (t[r] = this._buffer[this._bufpos++]);
              return t;
            }),
            (e.prototype.clean = function () {
              this._hmac.clean(),
                n.wipe(this._buffer),
                n.wipe(this._counter),
                (this._bufpos = 0);
            }),
            e
          );
        })();
      t.t = s;
    },
    2669: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(63944),
        n = r(15044),
        s = r(34405),
        o = (function () {
          function e(e, t) {
            (this._finished = !1),
              (this._inner = new e()),
              (this._outer = new e()),
              (this.blockSize = this._outer.blockSize),
              (this.digestLength = this._outer.digestLength);
            var r = new Uint8Array(this.blockSize);
            t.length > this.blockSize
              ? this._inner.update(t).finish(r).clean()
              : r.set(t);
            for (var n = 0; n < r.length; n++) r[n] ^= 54;
            this._inner.update(r);
            for (var n = 0; n < r.length; n++) r[n] ^= 106;
            this._outer.update(r),
              i.isSerializableHash(this._inner) &&
                i.isSerializableHash(this._outer) &&
                ((this._innerKeyedState = this._inner.saveState()),
                (this._outerKeyedState = this._outer.saveState())),
              s.wipe(r);
          }
          return (
            (e.prototype.reset = function () {
              if (
                !i.isSerializableHash(this._inner) ||
                !i.isSerializableHash(this._outer)
              )
                throw Error(
                  "hmac: can't reset() because hash doesn't implement restoreState()"
                );
              return (
                this._inner.restoreState(this._innerKeyedState),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.clean = function () {
              i.isSerializableHash(this._inner) &&
                this._inner.cleanSavedState(this._innerKeyedState),
                i.isSerializableHash(this._outer) &&
                  this._outer.cleanSavedState(this._outerKeyedState),
                this._inner.clean(),
                this._outer.clean();
            }),
            (e.prototype.update = function (e) {
              return this._inner.update(e), this;
            }),
            (e.prototype.finish = function (e) {
              return (
                this._finished
                  ? this._outer.finish(e)
                  : (this._inner.finish(e),
                    this._outer
                      .update(e.subarray(0, this.digestLength))
                      .finish(e),
                    (this._finished = !0)),
                this
              );
            }),
            (e.prototype.digest = function () {
              var e = new Uint8Array(this.digestLength);
              return this.finish(e), e;
            }),
            (e.prototype.saveState = function () {
              if (!i.isSerializableHash(this._inner))
                throw Error(
                  "hmac: can't saveState() because hash doesn't implement it"
                );
              return this._inner.saveState();
            }),
            (e.prototype.restoreState = function (e) {
              if (
                !i.isSerializableHash(this._inner) ||
                !i.isSerializableHash(this._outer)
              )
                throw Error(
                  "hmac: can't restoreState() because hash doesn't implement it"
                );
              return (
                this._inner.restoreState(e),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (e.prototype.cleanSavedState = function (e) {
              if (!i.isSerializableHash(this._inner))
                throw Error(
                  "hmac: can't cleanSavedState() because hash doesn't implement it"
                );
              this._inner.cleanSavedState(e);
            }),
            e
          );
        })();
      (t.HMAC = o),
        (t.hmac = function (e, t, r) {
          var i = new o(e, t);
          i.update(r);
          var n = i.digest();
          return i.clean(), n;
        }),
        (t.equal = n.equal);
    },
    50792: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(15044),
        n = r(34405);
      t.DIGEST_LENGTH = 16;
      var s = (function () {
        function e(e) {
          (this.digestLength = t.DIGEST_LENGTH),
            (this._buffer = new Uint8Array(16)),
            (this._r = new Uint16Array(10)),
            (this._h = new Uint16Array(10)),
            (this._pad = new Uint16Array(8)),
            (this._leftover = 0),
            (this._fin = 0),
            (this._finished = !1);
          var r = e[0] | (e[1] << 8);
          this._r[0] = 8191 & r;
          var i = e[2] | (e[3] << 8);
          this._r[1] = ((r >>> 13) | (i << 3)) & 8191;
          var n = e[4] | (e[5] << 8);
          this._r[2] = ((i >>> 10) | (n << 6)) & 7939;
          var s = e[6] | (e[7] << 8);
          this._r[3] = ((n >>> 7) | (s << 9)) & 8191;
          var o = e[8] | (e[9] << 8);
          (this._r[4] = ((s >>> 4) | (o << 12)) & 255),
            (this._r[5] = (o >>> 1) & 8190);
          var a = e[10] | (e[11] << 8);
          this._r[6] = ((o >>> 14) | (a << 2)) & 8191;
          var c = e[12] | (e[13] << 8);
          this._r[7] = ((a >>> 11) | (c << 5)) & 8065;
          var u = e[14] | (e[15] << 8);
          (this._r[8] = ((c >>> 8) | (u << 8)) & 8191),
            (this._r[9] = (u >>> 5) & 127),
            (this._pad[0] = e[16] | (e[17] << 8)),
            (this._pad[1] = e[18] | (e[19] << 8)),
            (this._pad[2] = e[20] | (e[21] << 8)),
            (this._pad[3] = e[22] | (e[23] << 8)),
            (this._pad[4] = e[24] | (e[25] << 8)),
            (this._pad[5] = e[26] | (e[27] << 8)),
            (this._pad[6] = e[28] | (e[29] << 8)),
            (this._pad[7] = e[30] | (e[31] << 8));
        }
        return (
          (e.prototype._blocks = function (e, t, r) {
            for (
              var i = this._fin ? 0 : 2048,
                n = this._h[0],
                s = this._h[1],
                o = this._h[2],
                a = this._h[3],
                c = this._h[4],
                u = this._h[5],
                h = this._h[6],
                l = this._h[7],
                f = this._h[8],
                p = this._h[9],
                d = this._r[0],
                g = this._r[1],
                y = this._r[2],
                v = this._r[3],
                m = this._r[4],
                b = this._r[5],
                _ = this._r[6],
                w = this._r[7],
                E = this._r[8],
                D = this._r[9];
              r >= 16;

            ) {
              var I,
                S = e[t + 0] | (e[t + 1] << 8);
              n += 8191 & S;
              var P = e[t + 2] | (e[t + 3] << 8);
              s += ((S >>> 13) | (P << 3)) & 8191;
              var O = e[t + 4] | (e[t + 5] << 8);
              o += ((P >>> 10) | (O << 6)) & 8191;
              var C = e[t + 6] | (e[t + 7] << 8);
              a += ((O >>> 7) | (C << 9)) & 8191;
              var A = e[t + 8] | (e[t + 9] << 8);
              (c += ((C >>> 4) | (A << 12)) & 8191), (u += (A >>> 1) & 8191);
              var x = e[t + 10] | (e[t + 11] << 8);
              h += ((A >>> 14) | (x << 2)) & 8191;
              var N = e[t + 12] | (e[t + 13] << 8);
              l += ((x >>> 11) | (N << 5)) & 8191;
              var R = e[t + 14] | (e[t + 15] << 8);
              (f += ((N >>> 8) | (R << 8)) & 8191), (p += (R >>> 5) | i);
              var T = 0;
              (T =
                (I =
                  0 + n * d + 5 * D * s + 5 * E * o + 5 * w * a + 5 * _ * c) >>>
                13),
                (I &= 8191),
                (I +=
                  5 * b * u + 5 * m * h + 5 * v * l + 5 * y * f + 5 * g * p),
                (T += I >>> 13),
                (I &= 8191);
              var j = T;
              (j += n * g + s * d + 5 * D * o + 5 * E * a + 5 * w * c),
                (T = j >>> 13),
                (j &= 8191),
                (j +=
                  5 * _ * u + 5 * b * h + 5 * m * l + 5 * v * f + 5 * y * p),
                (T += j >>> 13),
                (j &= 8191);
              var U = T;
              (U += n * y + s * g + o * d + 5 * D * a + 5 * E * c),
                (T = U >>> 13),
                (U &= 8191),
                (U +=
                  5 * w * u + 5 * _ * h + 5 * b * l + 5 * m * f + 5 * v * p),
                (T += U >>> 13),
                (U &= 8191);
              var L = T;
              (L += n * v + s * y + o * g + a * d + 5 * D * c),
                (T = L >>> 13),
                (L &= 8191),
                (L +=
                  5 * E * u + 5 * w * h + 5 * _ * l + 5 * b * f + 5 * m * p),
                (T += L >>> 13),
                (L &= 8191);
              var k = T;
              (k += n * m + s * v + o * y + a * g + c * d),
                (T = k >>> 13),
                (k &= 8191),
                (k +=
                  5 * D * u + 5 * E * h + 5 * w * l + 5 * _ * f + 5 * b * p),
                (T += k >>> 13),
                (k &= 8191);
              var M = T;
              (M += n * b + s * m + o * v + a * y + c * g),
                (T = M >>> 13),
                (M &= 8191),
                (M += u * d + 5 * D * h + 5 * E * l + 5 * w * f + 5 * _ * p),
                (T += M >>> 13),
                (M &= 8191);
              var q = T;
              (q += n * _ + s * b + o * m + a * v + c * y),
                (T = q >>> 13),
                (q &= 8191),
                (q += u * g + h * d + 5 * D * l + 5 * E * f + 5 * w * p),
                (T += q >>> 13),
                (q &= 8191);
              var $ = T;
              ($ += n * w + s * _ + o * b + a * m + c * v),
                (T = $ >>> 13),
                ($ &= 8191),
                ($ += u * y + h * g + l * d + 5 * D * f + 5 * E * p),
                (T += $ >>> 13),
                ($ &= 8191);
              var z = T;
              (z += n * E + s * w + o * _ + a * b + c * m),
                (T = z >>> 13),
                (z &= 8191),
                (z += u * v + h * y + l * g + f * d + 5 * D * p),
                (T += z >>> 13),
                (z &= 8191);
              var H = T;
              (H += n * D + s * E + o * w + a * _ + c * b),
                (T = H >>> 13),
                (H &= 8191),
                (H += u * m + h * v + l * y + f * g + p * d),
                (T += H >>> 13),
                (H &= 8191),
                (I = 8191 & (T = ((T = ((T << 2) + T) | 0) + I) | 0)),
                (T >>>= 13),
                (j += T),
                (n = I),
                (s = j),
                (o = U),
                (a = L),
                (c = k),
                (u = M),
                (h = q),
                (l = $),
                (f = z),
                (p = H),
                (t += 16),
                (r -= 16);
            }
            (this._h[0] = n),
              (this._h[1] = s),
              (this._h[2] = o),
              (this._h[3] = a),
              (this._h[4] = c),
              (this._h[5] = u),
              (this._h[6] = h),
              (this._h[7] = l),
              (this._h[8] = f),
              (this._h[9] = p);
          }),
          (e.prototype.finish = function (e, t) {
            void 0 === t && (t = 0);
            var r,
              i,
              n,
              s,
              o = new Uint16Array(10);
            if (this._leftover) {
              for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++)
                this._buffer[s] = 0;
              (this._fin = 1), this._blocks(this._buffer, 0, 16);
            }
            for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++)
              (this._h[s] += r), (r = this._h[s] >>> 13), (this._h[s] &= 8191);
            for (
              this._h[0] += 5 * r,
                r = this._h[0] >>> 13,
                this._h[0] &= 8191,
                this._h[1] += r,
                r = this._h[1] >>> 13,
                this._h[1] &= 8191,
                this._h[2] += r,
                o[0] = this._h[0] + 5,
                r = o[0] >>> 13,
                o[0] &= 8191,
                s = 1;
              s < 10;
              s++
            )
              (o[s] = this._h[s] + r), (r = o[s] >>> 13), (o[s] &= 8191);
            for (o[9] -= 8192, i = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= i;
            for (s = 0, i = ~i; s < 10; s++)
              this._h[s] = (this._h[s] & i) | o[s];
            for (
              s = 1,
                this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
                this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
                this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
                this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
                this._h[4] =
                  ((this._h[4] >>> 12) |
                    (this._h[5] << 1) |
                    (this._h[6] << 14)) &
                  65535,
                this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
                this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
                this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
                n = this._h[0] + this._pad[0],
                this._h[0] = 65535 & n;
              s < 8;
              s++
            )
              (n = (((this._h[s] + this._pad[s]) | 0) + (n >>> 16)) | 0),
                (this._h[s] = 65535 & n);
            return (
              (e[t + 0] = this._h[0] >>> 0),
              (e[t + 1] = this._h[0] >>> 8),
              (e[t + 2] = this._h[1] >>> 0),
              (e[t + 3] = this._h[1] >>> 8),
              (e[t + 4] = this._h[2] >>> 0),
              (e[t + 5] = this._h[2] >>> 8),
              (e[t + 6] = this._h[3] >>> 0),
              (e[t + 7] = this._h[3] >>> 8),
              (e[t + 8] = this._h[4] >>> 0),
              (e[t + 9] = this._h[4] >>> 8),
              (e[t + 10] = this._h[5] >>> 0),
              (e[t + 11] = this._h[5] >>> 8),
              (e[t + 12] = this._h[6] >>> 0),
              (e[t + 13] = this._h[6] >>> 8),
              (e[t + 14] = this._h[7] >>> 0),
              (e[t + 15] = this._h[7] >>> 8),
              (this._finished = !0),
              this
            );
          }),
          (e.prototype.update = function (e) {
            var t,
              r = 0,
              i = e.length;
            if (this._leftover) {
              (t = 16 - this._leftover) > i && (t = i);
              for (var n = 0; n < t; n++)
                this._buffer[this._leftover + n] = e[r + n];
              if (
                ((i -= t), (r += t), (this._leftover += t), this._leftover < 16)
              )
                return this;
              this._blocks(this._buffer, 0, 16), (this._leftover = 0);
            }
            if (
              (i >= 16 &&
                ((t = i - (i % 16)), this._blocks(e, r, t), (r += t), (i -= t)),
              i)
            ) {
              for (var n = 0; n < i; n++)
                this._buffer[this._leftover + n] = e[r + n];
              this._leftover += i;
            }
            return this;
          }),
          (e.prototype.digest = function () {
            if (this._finished) throw Error("Poly1305 was finished");
            var e = new Uint8Array(16);
            return this.finish(e), e;
          }),
          (e.prototype.clean = function () {
            return (
              n.wipe(this._buffer),
              n.wipe(this._r),
              n.wipe(this._h),
              n.wipe(this._pad),
              (this._leftover = 0),
              (this._fin = 0),
              (this._finished = !0),
              this
            );
          }),
          e
        );
      })();
      (t.Poly1305 = s),
        (t.oneTimeAuth = function (e, t) {
          var r = new s(e);
          r.update(t);
          var i = r.digest();
          return r.clean(), i;
        }),
        (t.equal = function (e, r) {
          return (
            e.length === t.DIGEST_LENGTH &&
            r.length === t.DIGEST_LENGTH &&
            i.equal(e, r)
          );
        });
    },
    63956: function (e, t, r) {
      "use strict";
      var i = r(51789),
        n = r(34405);
      (t.k = 32), (t.cn = 64);
      var s = (function () {
        function e() {
          (this.digestLength = t.k),
            (this.blockSize = t.cn),
            (this._state = new Int32Array(8)),
            (this._temp = new Int32Array(64)),
            (this._buffer = new Uint8Array(128)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._state[0] = 1779033703),
              (this._state[1] = 3144134277),
              (this._state[2] = 1013904242),
              (this._state[3] = 2773480762),
              (this._state[4] = 1359893119),
              (this._state[5] = 2600822924),
              (this._state[6] = 528734635),
              (this._state[7] = 1541459225);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            n.wipe(this._buffer), n.wipe(this._temp), this.reset();
          }),
          (e.prototype.update = function (e, t) {
            if ((void 0 === t && (t = e.length), this._finished))
              throw Error("SHA256: can't update because hash was finished.");
            var r = 0;
            if (((this._bytesHashed += t), this._bufferLength > 0)) {
              for (; this._bufferLength < this.blockSize && t > 0; )
                (this._buffer[this._bufferLength++] = e[r++]), t--;
              this._bufferLength === this.blockSize &&
                (a(this._temp, this._state, this._buffer, 0, this.blockSize),
                (this._bufferLength = 0));
            }
            for (
              t >= this.blockSize &&
              ((r = a(this._temp, this._state, e, r, t)),
              (t %= this.blockSize));
              t > 0;

            )
              (this._buffer[this._bufferLength++] = e[r++]), t--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                n = t % 64 < 56 ? 64 : 128;
              this._buffer[r] = 128;
              for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
              i.writeUint32BE((t / 536870912) | 0, this._buffer, n - 8),
                i.writeUint32BE(t << 3, this._buffer, n - 4),
                a(this._temp, this._state, this._buffer, 0, n),
                (this._finished = !0);
            }
            for (var s = 0; s < this.digestLength / 4; s++)
              i.writeUint32BE(this._state[s], e, 4 * s);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw Error("SHA256: cannot save finished state");
            return {
              state: new Int32Array(this._state),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._state.set(e.state),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            n.wipe(e.state),
              e.buffer && n.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.mE = s;
      var o = new Int32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ]);
      function a(e, t, r, n, s) {
        for (; s >= 64; ) {
          for (
            var a = t[0],
              c = t[1],
              u = t[2],
              h = t[3],
              l = t[4],
              f = t[5],
              p = t[6],
              d = t[7],
              g = 0;
            g < 16;
            g++
          ) {
            var y = n + 4 * g;
            e[g] = i.readUint32BE(r, y);
          }
          for (var g = 16; g < 64; g++) {
            var v = e[g - 2],
              m =
                ((v >>> 17) | (v << 15)) ^
                ((v >>> 19) | (v << 13)) ^
                (v >>> 10),
              b =
                (((v = e[g - 15]) >>> 7) | (v << 25)) ^
                ((v >>> 18) | (v << 14)) ^
                (v >>> 3);
            e[g] = ((m + e[g - 7]) | 0) + ((b + e[g - 16]) | 0);
          }
          for (var g = 0; g < 64; g++) {
            var m =
                ((((((l >>> 6) | (l << 26)) ^
                  ((l >>> 11) | (l << 21)) ^
                  ((l >>> 25) | (l << 7))) +
                  ((l & f) ^ (~l & p))) |
                  0) +
                  ((d + ((o[g] + e[g]) | 0)) | 0)) |
                0,
              b =
                ((((a >>> 2) | (a << 30)) ^
                  ((a >>> 13) | (a << 19)) ^
                  ((a >>> 22) | (a << 10))) +
                  ((a & c) ^ (a & u) ^ (c & u))) |
                0;
            (d = p),
              (p = f),
              (f = l),
              (l = (h + m) | 0),
              (h = u),
              (u = c),
              (c = a),
              (a = (m + b) | 0);
          }
          (t[0] += a),
            (t[1] += c),
            (t[2] += u),
            (t[3] += h),
            (t[4] += l),
            (t[5] += f),
            (t[6] += p),
            (t[7] += d),
            (n += 64),
            (s -= 64);
        }
        return n;
      }
      t.vp = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    41835: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(51789),
        n = r(34405);
      (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
      var s = (function () {
        function e() {
          (this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            n.wipe(this._buffer),
              n.wipe(this._tempHi),
              n.wipe(this._tempLo),
              this.reset();
          }),
          (e.prototype.update = function (e, r) {
            if ((void 0 === r && (r = e.length), this._finished))
              throw Error("SHA512: can't update because hash was finished.");
            var i = 0;
            if (((this._bytesHashed += r), this._bufferLength > 0)) {
              for (; this._bufferLength < t.BLOCK_SIZE && r > 0; )
                (this._buffer[this._bufferLength++] = e[i++]), r--;
              this._bufferLength === this.blockSize &&
                (a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              r >= this.blockSize &&
              ((i = a(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                e,
                i,
                r
              )),
              (r %= this.blockSize));
              r > 0;

            )
              (this._buffer[this._bufferLength++] = e[i++]), r--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                r = this._bufferLength,
                n = t % 128 < 112 ? 128 : 256;
              this._buffer[r] = 128;
              for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
              i.writeUint32BE((t / 536870912) | 0, this._buffer, n - 8),
                i.writeUint32BE(t << 3, this._buffer, n - 4),
                a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  n
                ),
                (this._finished = !0);
            }
            for (var s = 0; s < this.digestLength / 8; s++)
              i.writeUint32BE(this._stateHi[s], e, 8 * s),
                i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._stateHi.set(e.stateHi),
              this._stateLo.set(e.stateLo),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            n.wipe(e.stateHi),
              n.wipe(e.stateLo),
              e.buffer && n.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.SHA512 = s;
      var o = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function a(e, t, r, n, s, a, c) {
        for (
          var u,
            h,
            l,
            f,
            p,
            d,
            g,
            y,
            v = r[0],
            m = r[1],
            b = r[2],
            _ = r[3],
            w = r[4],
            E = r[5],
            D = r[6],
            I = r[7],
            S = n[0],
            P = n[1],
            O = n[2],
            C = n[3],
            A = n[4],
            x = n[5],
            N = n[6],
            R = n[7];
          c >= 128;

        ) {
          for (var T = 0; T < 16; T++) {
            var j = 8 * T + a;
            (e[T] = i.readUint32BE(s, j)), (t[T] = i.readUint32BE(s, j + 4));
          }
          for (var T = 0; T < 80; T++) {
            var U = v,
              L = m,
              k = b,
              M = _,
              q = w,
              $ = E,
              z = D,
              H = I,
              F = S,
              V = P,
              K = O,
              B = C,
              W = A,
              G = x,
              Y = N,
              J = R;
            if (
              ((u = I),
              (p = 65535 & (h = R)),
              (d = h >>> 16),
              (g = 65535 & u),
              (y = u >>> 16),
              (u =
                ((w >>> 14) | (A << 18)) ^
                ((w >>> 18) | (A << 14)) ^
                ((A >>> 9) | (w << 23))),
              (p +=
                65535 &
                (h =
                  ((A >>> 14) | (w << 18)) ^
                  ((A >>> 18) | (w << 14)) ^
                  ((w >>> 9) | (A << 23)))),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = (w & E) ^ (~w & D)),
              (p += 65535 & (h = (A & x) ^ (~A & N))),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = o[2 * T]),
              (p += 65535 & (h = o[2 * T + 1])),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = e[T % 16]),
              (p += 65535 & (h = t[T % 16])),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (d += p >>> 16),
              (g += d >>> 16),
              (y += g >>> 16),
              (l = (65535 & g) | (y << 16)),
              (f = (65535 & p) | (d << 16)),
              (u = l),
              (p = 65535 & (h = f)),
              (d = h >>> 16),
              (g = 65535 & u),
              (y = u >>> 16),
              (u =
                ((v >>> 28) | (S << 4)) ^
                ((S >>> 2) | (v << 30)) ^
                ((S >>> 7) | (v << 25))),
              (p +=
                65535 &
                (h =
                  ((S >>> 28) | (v << 4)) ^
                  ((v >>> 2) | (S << 30)) ^
                  ((v >>> 7) | (S << 25)))),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (u = (v & m) ^ (v & b) ^ (m & b)),
              (p += 65535 & (h = (S & P) ^ (S & O) ^ (P & O))),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (d += p >>> 16),
              (g += d >>> 16),
              (y += g >>> 16),
              (H = (65535 & g) | (y << 16)),
              (J = (65535 & p) | (d << 16)),
              (u = M),
              (p = 65535 & (h = B)),
              (d = h >>> 16),
              (g = 65535 & u),
              (y = u >>> 16),
              (u = l),
              (p += 65535 & (h = f)),
              (d += h >>> 16),
              (g += 65535 & u),
              (y += u >>> 16),
              (d += p >>> 16),
              (g += d >>> 16),
              (y += g >>> 16),
              (M = (65535 & g) | (y << 16)),
              (B = (65535 & p) | (d << 16)),
              (m = U),
              (b = L),
              (_ = k),
              (w = M),
              (E = q),
              (D = $),
              (I = z),
              (v = H),
              (P = F),
              (O = V),
              (C = K),
              (A = B),
              (x = W),
              (N = G),
              (R = Y),
              (S = J),
              T % 16 == 15)
            )
              for (var j = 0; j < 16; j++)
                (u = e[j]),
                  (p = 65535 & (h = t[j])),
                  (d = h >>> 16),
                  (g = 65535 & u),
                  (y = u >>> 16),
                  (u = e[(j + 9) % 16]),
                  (p += 65535 & (h = t[(j + 9) % 16])),
                  (d += h >>> 16),
                  (g += 65535 & u),
                  (y += u >>> 16),
                  (u =
                    (((l = e[(j + 1) % 16]) >>> 1) |
                      ((f = t[(j + 1) % 16]) << 31)) ^
                    ((l >>> 8) | (f << 24)) ^
                    (l >>> 7)),
                  (p +=
                    65535 &
                    (h =
                      ((f >>> 1) | (l << 31)) ^
                      ((f >>> 8) | (l << 24)) ^
                      ((f >>> 7) | (l << 25)))),
                  (d += h >>> 16),
                  (g += 65535 & u),
                  (y += u >>> 16),
                  (u =
                    (((l = e[(j + 14) % 16]) >>> 19) |
                      ((f = t[(j + 14) % 16]) << 13)) ^
                    ((f >>> 29) | (l << 3)) ^
                    (l >>> 6)),
                  (p +=
                    65535 &
                    (h =
                      ((f >>> 19) | (l << 13)) ^
                      ((l >>> 29) | (f << 3)) ^
                      ((f >>> 6) | (l << 26)))),
                  (d += h >>> 16),
                  (g += 65535 & u),
                  (y += u >>> 16),
                  (d += p >>> 16),
                  (g += d >>> 16),
                  (y += g >>> 16),
                  (e[j] = (65535 & g) | (y << 16)),
                  (t[j] = (65535 & p) | (d << 16));
          }
          (u = v),
            (p = 65535 & (h = S)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[0]),
            (p += 65535 & (h = n[0])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[0] = v = (65535 & g) | (y << 16)),
            (n[0] = S = (65535 & p) | (d << 16)),
            (u = m),
            (p = 65535 & (h = P)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[1]),
            (p += 65535 & (h = n[1])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[1] = m = (65535 & g) | (y << 16)),
            (n[1] = P = (65535 & p) | (d << 16)),
            (u = b),
            (p = 65535 & (h = O)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[2]),
            (p += 65535 & (h = n[2])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[2] = b = (65535 & g) | (y << 16)),
            (n[2] = O = (65535 & p) | (d << 16)),
            (u = _),
            (p = 65535 & (h = C)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[3]),
            (p += 65535 & (h = n[3])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[3] = _ = (65535 & g) | (y << 16)),
            (n[3] = C = (65535 & p) | (d << 16)),
            (u = w),
            (p = 65535 & (h = A)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[4]),
            (p += 65535 & (h = n[4])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[4] = w = (65535 & g) | (y << 16)),
            (n[4] = A = (65535 & p) | (d << 16)),
            (u = E),
            (p = 65535 & (h = x)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[5]),
            (p += 65535 & (h = n[5])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[5] = E = (65535 & g) | (y << 16)),
            (n[5] = x = (65535 & p) | (d << 16)),
            (u = D),
            (p = 65535 & (h = N)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[6]),
            (p += 65535 & (h = n[6])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[6] = D = (65535 & g) | (y << 16)),
            (n[6] = N = (65535 & p) | (d << 16)),
            (u = I),
            (p = 65535 & (h = R)),
            (d = h >>> 16),
            (g = 65535 & u),
            (y = u >>> 16),
            (u = r[7]),
            (p += 65535 & (h = n[7])),
            (d += h >>> 16),
            (g += 65535 & u),
            (y += u >>> 16),
            (d += p >>> 16),
            (g += d >>> 16),
            (y += g >>> 16),
            (r[7] = I = (65535 & g) | (y << 16)),
            (n[7] = R = (65535 & p) | (d << 16)),
            (a += 128),
            (c -= 128);
        }
        return a;
      }
      t.hash = function (e) {
        var t = new s();
        t.update(e);
        var r = t.digest();
        return t.clean(), r;
      };
    },
    10644: function (e, t, r) {
      "use strict";
      t.gi = t.Au = t.KS = t.kz = void 0;
      let i = r(81214),
        n = r(34405);
      function s(e) {
        let t = new Float64Array(16);
        if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
        return t;
      }
      (t.kz = 32), (t.KS = 32);
      let o = new Uint8Array(32);
      o[0] = 9;
      let a = s([56129, 1]);
      function c(e) {
        let t = 1;
        for (let r = 0; r < 16; r++) {
          let i = e[r] + t + 65535;
          (t = Math.floor(i / 65536)), (e[r] = i - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function u(e, t, r) {
        let i = ~(r - 1);
        for (let r = 0; r < 16; r++) {
          let n = i & (e[r] ^ t[r]);
          (e[r] ^= n), (t[r] ^= n);
        }
      }
      function h(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
      }
      function l(e, t, r) {
        for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
      }
      function f(e, t, r) {
        let i,
          n,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          h = 0,
          l = 0,
          f = 0,
          p = 0,
          d = 0,
          g = 0,
          y = 0,
          v = 0,
          m = 0,
          b = 0,
          _ = 0,
          w = 0,
          E = 0,
          D = 0,
          I = 0,
          S = 0,
          P = 0,
          O = 0,
          C = 0,
          A = 0,
          x = 0,
          N = 0,
          R = 0,
          T = 0,
          j = 0,
          U = 0,
          L = r[0],
          k = r[1],
          M = r[2],
          q = r[3],
          $ = r[4],
          z = r[5],
          H = r[6],
          F = r[7],
          V = r[8],
          K = r[9],
          B = r[10],
          W = r[11],
          G = r[12],
          Y = r[13],
          J = r[14],
          Q = r[15];
        (s += (i = t[0]) * L),
          (o += i * k),
          (a += i * M),
          (c += i * q),
          (u += i * $),
          (h += i * z),
          (l += i * H),
          (f += i * F),
          (p += i * V),
          (d += i * K),
          (g += i * B),
          (y += i * W),
          (v += i * G),
          (m += i * Y),
          (b += i * J),
          (_ += i * Q),
          (o += (i = t[1]) * L),
          (a += i * k),
          (c += i * M),
          (u += i * q),
          (h += i * $),
          (l += i * z),
          (f += i * H),
          (p += i * F),
          (d += i * V),
          (g += i * K),
          (y += i * B),
          (v += i * W),
          (m += i * G),
          (b += i * Y),
          (_ += i * J),
          (w += i * Q),
          (a += (i = t[2]) * L),
          (c += i * k),
          (u += i * M),
          (h += i * q),
          (l += i * $),
          (f += i * z),
          (p += i * H),
          (d += i * F),
          (g += i * V),
          (y += i * K),
          (v += i * B),
          (m += i * W),
          (b += i * G),
          (_ += i * Y),
          (w += i * J),
          (E += i * Q),
          (c += (i = t[3]) * L),
          (u += i * k),
          (h += i * M),
          (l += i * q),
          (f += i * $),
          (p += i * z),
          (d += i * H),
          (g += i * F),
          (y += i * V),
          (v += i * K),
          (m += i * B),
          (b += i * W),
          (_ += i * G),
          (w += i * Y),
          (E += i * J),
          (D += i * Q),
          (u += (i = t[4]) * L),
          (h += i * k),
          (l += i * M),
          (f += i * q),
          (p += i * $),
          (d += i * z),
          (g += i * H),
          (y += i * F),
          (v += i * V),
          (m += i * K),
          (b += i * B),
          (_ += i * W),
          (w += i * G),
          (E += i * Y),
          (D += i * J),
          (I += i * Q),
          (h += (i = t[5]) * L),
          (l += i * k),
          (f += i * M),
          (p += i * q),
          (d += i * $),
          (g += i * z),
          (y += i * H),
          (v += i * F),
          (m += i * V),
          (b += i * K),
          (_ += i * B),
          (w += i * W),
          (E += i * G),
          (D += i * Y),
          (I += i * J),
          (S += i * Q),
          (l += (i = t[6]) * L),
          (f += i * k),
          (p += i * M),
          (d += i * q),
          (g += i * $),
          (y += i * z),
          (v += i * H),
          (m += i * F),
          (b += i * V),
          (_ += i * K),
          (w += i * B),
          (E += i * W),
          (D += i * G),
          (I += i * Y),
          (S += i * J),
          (P += i * Q),
          (f += (i = t[7]) * L),
          (p += i * k),
          (d += i * M),
          (g += i * q),
          (y += i * $),
          (v += i * z),
          (m += i * H),
          (b += i * F),
          (_ += i * V),
          (w += i * K),
          (E += i * B),
          (D += i * W),
          (I += i * G),
          (S += i * Y),
          (P += i * J),
          (O += i * Q),
          (p += (i = t[8]) * L),
          (d += i * k),
          (g += i * M),
          (y += i * q),
          (v += i * $),
          (m += i * z),
          (b += i * H),
          (_ += i * F),
          (w += i * V),
          (E += i * K),
          (D += i * B),
          (I += i * W),
          (S += i * G),
          (P += i * Y),
          (O += i * J),
          (C += i * Q),
          (d += (i = t[9]) * L),
          (g += i * k),
          (y += i * M),
          (v += i * q),
          (m += i * $),
          (b += i * z),
          (_ += i * H),
          (w += i * F),
          (E += i * V),
          (D += i * K),
          (I += i * B),
          (S += i * W),
          (P += i * G),
          (O += i * Y),
          (C += i * J),
          (A += i * Q),
          (g += (i = t[10]) * L),
          (y += i * k),
          (v += i * M),
          (m += i * q),
          (b += i * $),
          (_ += i * z),
          (w += i * H),
          (E += i * F),
          (D += i * V),
          (I += i * K),
          (S += i * B),
          (P += i * W),
          (O += i * G),
          (C += i * Y),
          (A += i * J),
          (x += i * Q),
          (y += (i = t[11]) * L),
          (v += i * k),
          (m += i * M),
          (b += i * q),
          (_ += i * $),
          (w += i * z),
          (E += i * H),
          (D += i * F),
          (I += i * V),
          (S += i * K),
          (P += i * B),
          (O += i * W),
          (C += i * G),
          (A += i * Y),
          (x += i * J),
          (N += i * Q),
          (v += (i = t[12]) * L),
          (m += i * k),
          (b += i * M),
          (_ += i * q),
          (w += i * $),
          (E += i * z),
          (D += i * H),
          (I += i * F),
          (S += i * V),
          (P += i * K),
          (O += i * B),
          (C += i * W),
          (A += i * G),
          (x += i * Y),
          (N += i * J),
          (R += i * Q),
          (m += (i = t[13]) * L),
          (b += i * k),
          (_ += i * M),
          (w += i * q),
          (E += i * $),
          (D += i * z),
          (I += i * H),
          (S += i * F),
          (P += i * V),
          (O += i * K),
          (C += i * B),
          (A += i * W),
          (x += i * G),
          (N += i * Y),
          (R += i * J),
          (T += i * Q),
          (b += (i = t[14]) * L),
          (_ += i * k),
          (w += i * M),
          (E += i * q),
          (D += i * $),
          (I += i * z),
          (S += i * H),
          (P += i * F),
          (O += i * V),
          (C += i * K),
          (A += i * B),
          (x += i * W),
          (N += i * G),
          (R += i * Y),
          (T += i * J),
          (j += i * Q),
          (_ += (i = t[15]) * L),
          (w += i * k),
          (E += i * M),
          (D += i * q),
          (I += i * $),
          (S += i * z),
          (P += i * H),
          (O += i * F),
          (C += i * V),
          (A += i * K),
          (x += i * B),
          (N += i * W),
          (R += i * G),
          (T += i * Y),
          (j += i * J),
          (U += i * Q),
          (s += 38 * w),
          (o += 38 * E),
          (a += 38 * D),
          (c += 38 * I),
          (u += 38 * S),
          (h += 38 * P),
          (l += 38 * O),
          (f += 38 * C),
          (p += 38 * A),
          (d += 38 * x),
          (g += 38 * N),
          (y += 38 * R),
          (v += 38 * T),
          (m += 38 * j),
          (b += 38 * U),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = b + n + 65535) / 65536)),
          (b = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (n = Math.floor((i = s + (n = 1) + 65535) / 65536)),
          (s = i - 65536 * n),
          (n = Math.floor((i = o + n + 65535) / 65536)),
          (o = i - 65536 * n),
          (n = Math.floor((i = a + n + 65535) / 65536)),
          (a = i - 65536 * n),
          (n = Math.floor((i = c + n + 65535) / 65536)),
          (c = i - 65536 * n),
          (n = Math.floor((i = u + n + 65535) / 65536)),
          (u = i - 65536 * n),
          (n = Math.floor((i = h + n + 65535) / 65536)),
          (h = i - 65536 * n),
          (n = Math.floor((i = l + n + 65535) / 65536)),
          (l = i - 65536 * n),
          (n = Math.floor((i = f + n + 65535) / 65536)),
          (f = i - 65536 * n),
          (n = Math.floor((i = p + n + 65535) / 65536)),
          (p = i - 65536 * n),
          (n = Math.floor((i = d + n + 65535) / 65536)),
          (d = i - 65536 * n),
          (n = Math.floor((i = g + n + 65535) / 65536)),
          (g = i - 65536 * n),
          (n = Math.floor((i = y + n + 65535) / 65536)),
          (y = i - 65536 * n),
          (n = Math.floor((i = v + n + 65535) / 65536)),
          (v = i - 65536 * n),
          (n = Math.floor((i = m + n + 65535) / 65536)),
          (m = i - 65536 * n),
          (n = Math.floor((i = b + n + 65535) / 65536)),
          (b = i - 65536 * n),
          (n = Math.floor((i = _ + n + 65535) / 65536)),
          (_ = i - 65536 * n),
          (s += n - 1 + 37 * (n - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = h),
          (e[6] = l),
          (e[7] = f),
          (e[8] = p),
          (e[9] = d),
          (e[10] = g),
          (e[11] = y),
          (e[12] = v),
          (e[13] = m),
          (e[14] = b),
          (e[15] = _);
      }
      function p(e, t) {
        let r = new Uint8Array(32),
          i = new Float64Array(80),
          n = s(),
          o = s(),
          p = s(),
          d = s(),
          g = s(),
          y = s();
        for (let t = 0; t < 31; t++) r[t] = e[t];
        (r[31] = (127 & e[31]) | 64),
          (r[0] &= 248),
          (function (e, t) {
            for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
          })(i, t);
        for (let e = 0; e < 16; e++) o[e] = i[e];
        n[0] = d[0] = 1;
        for (let e = 254; e >= 0; --e) {
          let t = (r[e >>> 3] >>> (7 & e)) & 1;
          u(n, o, t),
            u(p, d, t),
            h(g, n, p),
            l(n, n, p),
            h(p, o, d),
            l(o, o, d),
            f(d, g, g),
            f(y, n, n),
            f(n, p, n),
            f(p, o, g),
            h(g, n, p),
            l(n, n, p),
            f(o, n, n),
            l(p, d, y),
            f(n, p, a),
            h(n, n, d),
            f(p, p, n),
            f(n, d, y),
            f(d, o, i),
            f(o, g, g),
            u(n, o, t),
            u(p, d, t);
        }
        for (let e = 0; e < 16; e++)
          (i[e + 16] = n[e]),
            (i[e + 32] = p[e]),
            (i[e + 48] = o[e]),
            (i[e + 64] = d[e]);
        let v = i.subarray(32),
          m = i.subarray(16);
        !(function (e, t) {
          let r = s();
          for (let e = 0; e < 16; e++) r[e] = t[e];
          for (let e = 253; e >= 0; e--)
            f(r, r, r), 2 !== e && 4 !== e && f(r, r, t);
          for (let t = 0; t < 16; t++) e[t] = r[t];
        })(v, v),
          f(m, m, v);
        let b = new Uint8Array(32);
        return (
          !(function (e, t) {
            let r = s(),
              i = s();
            for (let e = 0; e < 16; e++) i[e] = t[e];
            c(i), c(i), c(i);
            for (let e = 0; e < 2; e++) {
              r[0] = i[0] - 65517;
              for (let e = 1; e < 15; e++)
                (r[e] = i[e] - 65535 - ((r[e - 1] >> 16) & 1)),
                  (r[e - 1] &= 65535);
              r[15] = i[15] - 32767 - ((r[14] >> 16) & 1);
              let e = (r[15] >> 16) & 1;
              (r[14] &= 65535), u(i, r, 1 - e);
            }
            for (let t = 0; t < 16; t++)
              (e[2 * t] = 255 & i[t]), (e[2 * t + 1] = i[t] >> 8);
          })(b, m),
          b
        );
      }
      (t.Au = function (e) {
        let r = (0, i.randomBytes)(32, e),
          s = (function (e) {
            if (e.length !== t.KS)
              throw Error(`x25519: seed must be ${t.KS} bytes`);
            let r = new Uint8Array(e);
            return { publicKey: p(r, o), secretKey: r };
          })(r);
        return (0, n.wipe)(r), s;
      }),
        (t.gi = function (e, r, i = !1) {
          if (e.length !== t.kz)
            throw Error("X25519: incorrect secret key length");
          if (r.length !== t.kz)
            throw Error("X25519: incorrect public key length");
          let n = p(e, r);
          if (i) {
            let e = 0;
            for (let t = 0; t < n.length; t++) e |= n[t];
            if (0 === e) throw Error("X25519: invalid shared key");
          }
          return n;
        });
    },
    65399: function (e, t, r) {
      "use strict";
      function i() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function n() {
        let e = i();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowserCryptoAvailable =
          t.getSubtleCrypto =
          t.getBrowerCrypto =
            void 0),
        (t.getBrowerCrypto = i),
        (t.getSubtleCrypto = n),
        (t.isBrowserCryptoAvailable = function () {
          return !!i() && !!n();
        });
    },
    30806: function (e, t, r) {
      "use strict";
      var i = r(26182);
      function n() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function s() {
        return (
          void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = n),
        (t.isNode = s),
        (t.isBrowser = function () {
          return !n() && !s();
        });
    },
    60948: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(93739);
      i.__exportStar(r(65399), t), i.__exportStar(r(30806), t);
    },
    70670: function (e, t, r) {
      "use strict";
      let i;
      r.d(t, {
        EthereumProvider: function () {
          return o5;
        },
      });
      var n = {};
      r.r(n),
        r.d(n, {
          identity: function () {
            return F;
          },
        });
      var s = {};
      r.r(s),
        r.d(s, {
          base2: function () {
            return V;
          },
        });
      var o = {};
      r.r(o),
        r.d(o, {
          base8: function () {
            return K;
          },
        });
      var a = {};
      r.r(a),
        r.d(a, {
          base10: function () {
            return B;
          },
        });
      var c = {};
      r.r(c),
        r.d(c, {
          base16: function () {
            return W;
          },
          base16upper: function () {
            return G;
          },
        });
      var u = {};
      r.r(u),
        r.d(u, {
          base32: function () {
            return Y;
          },
          base32hex: function () {
            return Z;
          },
          base32hexpad: function () {
            return et;
          },
          base32hexpadupper: function () {
            return er;
          },
          base32hexupper: function () {
            return ee;
          },
          base32pad: function () {
            return Q;
          },
          base32padupper: function () {
            return X;
          },
          base32upper: function () {
            return J;
          },
          base32z: function () {
            return ei;
          },
        });
      var h = {};
      r.r(h),
        r.d(h, {
          base36: function () {
            return en;
          },
          base36upper: function () {
            return es;
          },
        });
      var l = {};
      r.r(l),
        r.d(l, {
          base58btc: function () {
            return eo;
          },
          base58flickr: function () {
            return ea;
          },
        });
      var f = {};
      r.r(f),
        r.d(f, {
          base64: function () {
            return ec;
          },
          base64pad: function () {
            return eu;
          },
          base64url: function () {
            return eh;
          },
          base64urlpad: function () {
            return el;
          },
        });
      var p = {};
      r.r(p),
        r.d(p, {
          base256emoji: function () {
            return eg;
          },
        });
      var d = {};
      r.r(d),
        r.d(d, {
          sha256: function () {
            return eO;
          },
          sha512: function () {
            return eC;
          },
        });
      var g = {};
      r.r(g),
        r.d(g, {
          identity: function () {
            return eA;
          },
        });
      var y = {};
      r.r(y),
        r.d(y, {
          code: function () {
            return eN;
          },
          decode: function () {
            return eT;
          },
          encode: function () {
            return eR;
          },
          name: function () {
            return ex;
          },
        });
      var v = {};
      r.r(v),
        r.d(v, {
          code: function () {
            return ek;
          },
          decode: function () {
            return eq;
          },
          encode: function () {
            return eM;
          },
          name: function () {
            return eL;
          },
        });
      var m = r(177),
        b = r.n(m),
        _ = r(71054),
        w = r(12411),
        E = r(81214),
        D = r(63956),
        I = r(10644);
      function S(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function P(e = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? S(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function O(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = P(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return S(r);
      }
      var C = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var n = 0; n < e.length; n++) {
          var s = e.charAt(n),
            o = s.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(s + " is ambiguous");
          r[o] = n;
        }
        var a = e.length,
          c = e.charAt(0),
          u = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function l(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var i = 0, n = 0; e[t] === c; ) i++, t++;
            for (
              var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s);
              e[t];

            ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var l = 0, f = s - 1;
                (0 !== h || l < n) && -1 !== f;
                f--, l++
              )
                (h += (a * o[f]) >>> 0),
                  (o[f] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (n = l), t++;
            }
            if (" " !== e[t]) {
              for (var p = s - n; p !== s && 0 === o[p]; ) p++;
              for (var d = new Uint8Array(i + (s - p)), g = i; p !== s; )
                d[g++] = o[p++];
              return d;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n]; )
              n++, r++;
            for (
              var o = ((s - n) * h + 1) >>> 0, u = new Uint8Array(o);
              n !== s;

            ) {
              for (
                var l = t[n], f = 0, p = o - 1;
                (0 !== l || f < i) && -1 !== p;
                p--, f++
              )
                (l += (256 * u[p]) >>> 0),
                  (u[p] = l % a >>> 0),
                  (l = (l / a) >>> 0);
              if (0 !== l) throw Error("Non-zero carry");
              (i = f), n++;
            }
            for (var d = o - i; d !== o && 0 === u[d]; ) d++;
            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
            return g;
          },
          decodeUnsafe: l,
          decode: function (e) {
            var r = l(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      new Uint8Array(0);
      let A = (e, t) => {
          if (e === t) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
          return !0;
        },
        x = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        N = (e) => new TextEncoder().encode(e),
        R = (e) => new TextDecoder().decode(e);
      class T {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class j {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return L(this, e);
        }
      }
      class U {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return L(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let L = (e, t) =>
        new U({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class k {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new T(e, t, r)),
            (this.decoder = new j(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let M = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new k(e, t, r, i),
        q = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: n } = C(r, t);
          return M({ prefix: e, name: t, encode: i, decode: (e) => x(n(e)) });
        },
        $ = (e, t, r, i) => {
          let n = {};
          for (let e = 0; e < t.length; ++e) n[t[e]] = e;
          let s = e.length;
          for (; "=" === e[s - 1]; ) --s;
          let o = new Uint8Array(((s * r) / 8) | 0),
            a = 0,
            c = 0,
            u = 0;
          for (let t = 0; t < s; ++t) {
            let s = n[e[t]];
            if (void 0 === s) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | s),
              (a += r) >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        z = (e, t, r) => {
          let i = "=" === t[t.length - 1],
            n = (1 << r) - 1,
            s = "",
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; )
              (o -= r), (s += t[n & (a >> o)]);
          if ((o && (s += t[n & (a << (r - o))]), i))
            for (; (s.length * r) & 7; ) s += "=";
          return s;
        },
        H = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          M({
            prefix: t,
            name: e,
            encode: (e) => z(e, i, r),
            decode: (t) => $(t, i, r, e),
          }),
        F = M({
          prefix: "\x00",
          name: "identity",
          encode: (e) => R(e),
          decode: (e) => N(e),
        }),
        V = H({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        K = H({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        B = q({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        W = H({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        G = H({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        Y = H({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        J = H({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Q = H({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        X = H({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        Z = H({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        ee = H({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        et = H({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        er = H({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        ei = H({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        en = q({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        es = q({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        eo = q({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        ea = q({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        ec = H({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        eu = H({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        eh = H({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        el = H({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        ef = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        ep = ef.reduce((e, t, r) => ((e[r] = t), e), []),
        ed = ef.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        eg = M({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += ep[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = ed[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      var ey = {
        encode: function e(t, r, i) {
          r = r || [];
          for (var n = (i = i || 0); t >= 2147483648; )
            (r[i++] = (255 & t) | 128), (t /= 128);
          for (; -128 & t; ) (r[i++] = (255 & t) | 128), (t >>>= 7);
          return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
        },
        decode: function e(t, r) {
          var i,
            n = 0,
            r = r || 0,
            s = 0,
            o = r,
            a = t.length;
          do {
            if (o >= a)
              throw ((e.bytes = 0), RangeError("Could not decode varint"));
            (i = t[o++]),
              (n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)),
              (s += 7);
          } while (i >= 128);
          return (e.bytes = o - r), n;
        },
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 268435456
            ? 4
            : e < 34359738368
            ? 5
            : e < 4398046511104
            ? 6
            : e < 562949953421312
            ? 7
            : e < 72057594037927940
            ? 8
            : e < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let ev = (e, t = 0) => [ey.decode(e, t), ey.decode.bytes],
        em = (e, t, r = 0) => (ey.encode(e, t, r), t),
        eb = (e) => ey.encodingLength(e),
        e_ = (e, t) => {
          let r = t.byteLength,
            i = eb(e),
            n = i + eb(r),
            s = new Uint8Array(n + r);
          return em(e, s, 0), em(r, s, i), s.set(t, n), new eD(e, r, t, s);
        },
        ew = (e) => {
          let t = x(e),
            [r, i] = ev(t),
            [n, s] = ev(t.subarray(i)),
            o = t.subarray(i + s);
          if (o.byteLength !== n) throw Error("Incorrect length");
          return new eD(r, n, o, t);
        },
        eE = (e, t) =>
          e === t ||
          (e.code === t.code && e.size === t.size && A(e.bytes, t.bytes));
      class eD {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let eI = ({ name: e, code: t, encode: r }) => new eS(e, t, r);
      class eS {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? e_(this.code, t)
              : t.then((e) => e_(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let eP = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        eO = eI({ name: "sha2-256", code: 18, encode: eP("SHA-256") }),
        eC = eI({ name: "sha2-512", code: 19, encode: eP("SHA-512") }),
        eA = {
          code: 0,
          name: "identity",
          encode: x,
          digest: (e) => e_(0, x(e)),
        },
        ex = "raw",
        eN = 85,
        eR = (e) => x(e),
        eT = (e) => x(e),
        ej = new TextEncoder(),
        eU = new TextDecoder(),
        eL = "json",
        ek = 512,
        eM = (e) => ej.encode(JSON.stringify(e)),
        eq = (e) => JSON.parse(eU.decode(e));
      class e$ {
        constructor(e, t, r, i) {
          (this.code = t),
            (this.version = e),
            (this.multihash = r),
            (this.bytes = i),
            (this.byteOffset = i.byteOffset),
            (this.byteLength = i.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: eY,
              byteLength: eY,
              code: eG,
              version: eG,
              multihash: eG,
              bytes: eG,
              _baseCache: eY,
              asCID: eY,
            });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            let { code: e, multihash: t } = this;
            if (e !== eV)
              throw Error("Cannot convert a non dag-pb CID to CIDv0");
            if (t.code !== eK)
              throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
            return e$.createV0(t);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: e, digest: t } = this.multihash,
                r = e_(e, t);
              return e$.createV1(this.code, r);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`
              );
          }
        }
        equals(e) {
          return (
            e &&
            this.code === e.code &&
            this.version === e.version &&
            eE(this.multihash, e.multihash)
          );
        }
        toString(e) {
          let { bytes: t, version: r, _baseCache: i } = this;
          return 0 === r ? eH(t, i, e || eo.encoder) : eF(t, i, e || Y.encoder);
        }
        toJSON() {
          return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes,
          };
        }
        get [Symbol.toStringTag]() {
          return "CID";
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return "CID(" + this.toString() + ")";
        }
        static isCID(e) {
          return eJ(/^0\.0/, eQ), !!(e && (e[eW] || e.asCID === e));
        }
        get toBaseEncodedString() {
          throw Error("Deprecated, use .toString()");
        }
        get codec() {
          throw Error(
            '"codec" property is deprecated, use integer "code" property instead'
          );
        }
        get buffer() {
          throw Error(
            "Deprecated .buffer property, use .bytes to get Uint8Array instead"
          );
        }
        get multibaseName() {
          throw Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof e$) return e;
          if (null != e && e.asCID === e) {
            let { version: t, code: r, multihash: i, bytes: n } = e;
            return new e$(t, r, i, n || eB(t, r, i.bytes));
          }
          if (null == e || !0 !== e[eW]) return null;
          {
            let { version: t, multihash: r, code: i } = e,
              n = ew(r);
            return e$.create(t, i, n);
          }
        }
        static create(e, t, r) {
          if ("number" != typeof t)
            throw Error("String codecs are no longer supported");
          switch (e) {
            case 0:
              if (t === eV) return new e$(e, t, r, r.bytes);
              throw Error(
                `Version 0 CID must use dag-pb (code: ${eV}) block encoding`
              );
            case 1: {
              let i = eB(e, t, r.bytes);
              return new e$(e, t, r, i);
            }
            default:
              throw Error("Invalid version");
          }
        }
        static createV0(e) {
          return e$.create(0, eV, e);
        }
        static createV1(e, t) {
          return e$.create(1, e, t);
        }
        static decode(e) {
          let [t, r] = e$.decodeFirst(e);
          if (r.length) throw Error("Incorrect length");
          return t;
        }
        static decodeFirst(e) {
          let t = e$.inspectBytes(e),
            r = t.size - t.multihashSize,
            i = x(e.subarray(r, r + t.multihashSize));
          if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
          let n = i.subarray(t.multihashSize - t.digestSize),
            s = new eD(t.multihashCode, t.digestSize, n, i);
          return [
            0 === t.version ? e$.createV0(s) : e$.createV1(t.codec, s),
            e.subarray(t.size),
          ];
        }
        static inspectBytes(e) {
          let t = 0,
            r = () => {
              let [r, i] = ev(e.subarray(t));
              return (t += i), r;
            },
            i = r(),
            n = eV;
          if (
            (18 === i ? ((i = 0), (t = 0)) : 1 === i && (n = r()),
            0 !== i && 1 !== i)
          )
            throw RangeError(`Invalid CID version ${i}`);
          let s = t,
            o = r(),
            a = r(),
            c = t + a;
          return {
            version: i,
            codec: n,
            multihashCode: o,
            digestSize: a,
            multihashSize: c - s,
            size: c,
          };
        }
        static parse(e, t) {
          let [r, i] = ez(e, t),
            n = e$.decode(i);
          return n._baseCache.set(r, e), n;
        }
      }
      let ez = (e, t) => {
          switch (e[0]) {
            case "Q":
              return [eo.prefix, (t || eo).decode(`${eo.prefix}${e}`)];
            case eo.prefix:
              return [eo.prefix, (t || eo).decode(e)];
            case Y.prefix:
              return [Y.prefix, (t || Y).decode(e)];
            default:
              if (null == t)
                throw Error(
                  "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
                );
              return [e[0], t.decode(e)];
          }
        },
        eH = (e, t, r) => {
          let { prefix: i } = r;
          if (i !== eo.prefix)
            throw Error(`Cannot string encode V0 in ${r.name} encoding`);
          let n = t.get(i);
          if (null != n) return n;
          {
            let n = r.encode(e).slice(1);
            return t.set(i, n), n;
          }
        },
        eF = (e, t, r) => {
          let { prefix: i } = r,
            n = t.get(i);
          if (null != n) return n;
          {
            let n = r.encode(e);
            return t.set(i, n), n;
          }
        },
        eV = 112,
        eK = 18,
        eB = (e, t, r) => {
          let i = eb(e),
            n = i + eb(t),
            s = new Uint8Array(n + r.byteLength);
          return em(e, s, 0), em(t, s, i), s.set(r, n), s;
        },
        eW = Symbol.for("@ipld/js-cid/CID"),
        eG = { writable: !1, configurable: !1, enumerable: !0 },
        eY = { writable: !1, enumerable: !1, configurable: !1 },
        eJ = (e, t) => {
          if (e.test("0.0.0-dev")) console.warn(t);
          else throw Error(t);
        },
        eQ = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
        eX = { ...n, ...s, ...o, ...a, ...c, ...u, ...h, ...l, ...f, ...p };
      function eZ(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...d, ...g });
      let e0 = eZ(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        e1 = eZ(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = P((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        e5 = {
          utf8: e0,
          "utf-8": e0,
          hex: eX.base16,
          latin1: e1,
          ascii: e1,
          binary: e1,
          ...eX,
        };
      function e3(e, t = "utf8") {
        let r = e5[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? S(globalThis.Buffer.from(e, "utf-8"))
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function e6(e, t = "utf8") {
        let r = e5[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8")
          : r.encoder.encode(e).substring(1);
      }
      var e2 = r(20267),
        e8 = r(30355),
        e4 = r(34257),
        e9 = r(41075),
        e7 = r(93654);
      r(44306);
      let te = {
        waku: {
          publish: "waku_publish",
          batchPublish: "waku_batchPublish",
          subscribe: "waku_subscribe",
          batchSubscribe: "waku_batchSubscribe",
          subscription: "waku_subscription",
          unsubscribe: "waku_unsubscribe",
          batchUnsubscribe: "waku_batchUnsubscribe",
        },
        irn: {
          publish: "irn_publish",
          batchPublish: "irn_batchPublish",
          subscribe: "irn_subscribe",
          batchSubscribe: "irn_batchSubscribe",
          subscription: "irn_subscription",
          unsubscribe: "irn_unsubscribe",
          batchUnsubscribe: "irn_batchUnsubscribe",
        },
        iridium: {
          publish: "iridium_publish",
          batchPublish: "iridium_batchPublish",
          subscribe: "iridium_subscribe",
          batchSubscribe: "iridium_batchSubscribe",
          subscription: "iridium_subscription",
          unsubscribe: "iridium_unsubscribe",
          batchUnsubscribe: "iridium_batchUnsubscribe",
        },
      };
      var tt = r(26182);
      function tr(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      let ti = "base10",
        tn = "base16",
        ts = "base64pad",
        to = "utf8";
      function ta() {
        return e6((0, E.randomBytes)(32), tn);
      }
      function tc(e) {
        return e6((0, D.vp)(e3(e, to)), tn);
      }
      function tu(e) {
        return Number(e6(e, ti));
      }
      function th(e) {
        let t = e3(e, ts),
          r = t.slice(0, 1);
        if (1 === tu(r)) {
          let e = t.slice(1, 33),
            i = t.slice(33, 45);
          return { type: r, sealed: t.slice(45), iv: i, senderPublicKey: e };
        }
        let i = t.slice(1, 13);
        return { type: r, sealed: t.slice(13), iv: i };
      }
      function tl(e) {
        let t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > "u")
            throw Error("missing sender public key");
          if (typeof e?.receiverPublicKey > "u")
            throw Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function tf(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      var tp = Object.defineProperty,
        td = Object.getOwnPropertySymbols,
        tg = Object.prototype.hasOwnProperty,
        ty = Object.prototype.propertyIsEnumerable,
        tv = (e, t, r) =>
          t in e
            ? tp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        tm = (e, t) => {
          for (var r in t || (t = {})) tg.call(t, r) && tv(e, r, t[r]);
          if (td) for (var r of td(t)) ty.call(t, r) && tv(e, r, t[r]);
          return e;
        };
      let tb = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown",
      };
      function t_() {
        return (
          "u" > typeof tt &&
          "u" > typeof tt.versions &&
          "u" > typeof tt.versions.node
        );
      }
      function tw() {
        return (
          !(0, e4.getDocument)() &&
          !!(0, e4.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function tE() {
        return !t_() && !!(0, e4.getNavigator)() && !!(0, e4.getDocument)();
      }
      function tD() {
        return tw()
          ? tb.reactNative
          : t_()
          ? tb.node
          : tE()
          ? tb.browser
          : tb.unknown;
      }
      function tI(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function tS(e) {
        return Object.fromEntries(e.entries());
      }
      function tP(e) {
        return new Map(Object.entries(e));
      }
      function tO(e = e8.FIVE_MINUTES, t) {
        let r, i, n;
        let s = (0, e8.toMiliseconds)(e || e8.FIVE_MINUTES);
        return {
          resolve: (e) => {
            n && r && (clearTimeout(n), r(e));
          },
          reject: (e) => {
            n && i && (clearTimeout(n), i(e));
          },
          done: () =>
            new Promise((e, o) => {
              (n = setTimeout(() => {
                o(Error(t));
              }, s)),
                (r = e),
                (i = o);
            }),
        };
      }
      function tC(e, t, r) {
        return new Promise(async (i, n) => {
          let s = setTimeout(() => n(Error(r)), t);
          try {
            let t = await e;
            i(t);
          } catch (e) {
            n(e);
          }
          clearTimeout(s);
        });
      }
      function tA(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw Error(
              'Value must be "string" for expirer target type: topic'
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw Error(`Unknown expirer target type: ${e}`);
      }
      function tx(e) {
        let [t, r] = e.split(":"),
          i = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof r) i.topic = r;
        else if ("id" === t && Number.isInteger(Number(r))) i.id = Number(r);
        else
          throw Error(
            `Invalid target, expected id:number or topic:string, got ${t}:${r}`
          );
        return i;
      }
      function tN(e, t) {
        return (0, e8.fromMiliseconds)(
          (t || Date.now()) + (0, e8.toMiliseconds)(e)
        );
      }
      function tR(e) {
        return Date.now() >= (0, e8.toMiliseconds)(e);
      }
      function tT(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function tj(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function tU({ id: e, topic: t, wcDeepLink: i }) {
        try {
          if (!i) return;
          let n = "string" == typeof i ? JSON.parse(i) : i,
            s = n?.href;
          if ("string" != typeof s) return;
          s.endsWith("/") && (s = s.slice(0, -1));
          let o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
            a = tD();
          a === tb.browser
            ? o.startsWith("https://")
              ? window.open(o, "_blank", "noreferrer noopener")
              : window.open(o, "_self", "noreferrer noopener")
            : a === tb.reactNative &&
              "u" > typeof (null == r.g ? void 0 : r.g.Linking) &&
              (await r.g.Linking.openURL(o));
        } catch (e) {
          console.error(e);
        }
      }
      async function tL(e, t) {
        try {
          return (
            (await e.getItem(t)) || (tE() ? localStorage.getItem(t) : void 0)
          );
        } catch (e) {
          console.error(e);
        }
      }
      function tk(e) {
        return e?.relay || { protocol: "irn" };
      }
      function tM(e) {
        let t = te[e];
        if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      var tq = Object.defineProperty,
        t$ = Object.defineProperties,
        tz = Object.getOwnPropertyDescriptors,
        tH = Object.getOwnPropertySymbols,
        tF = Object.prototype.hasOwnProperty,
        tV = Object.prototype.propertyIsEnumerable,
        tK = (e, t, r) =>
          t in e
            ? tq(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        tB = (e, t) => {
          for (var r in t || (t = {})) tF.call(t, r) && tK(e, r, t[r]);
          if (tH) for (var r of tH(t)) tV.call(t, r) && tK(e, r, t[r]);
          return e;
        },
        tW = (e, t) => t$(e, tz(t));
      function tG(e) {
        var t;
        let r = (e = (e = e.includes("wc://")
            ? e.replace("wc://", "")
            : e).includes("wc:")
            ? e.replace("wc:", "")
            : e).indexOf(":"),
          i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          n = e.substring(0, r),
          s = e.substring(r + 1, i).split("@"),
          o = "u" > typeof i ? e.substring(i) : "",
          a = e7.parse(o);
        return {
          protocol: n,
          topic: (t = s[0]).startsWith("//") ? t.substring(2) : t,
          version: parseInt(s[1], 10),
          symKey: a.symKey,
          relay: (function (e, t = "-") {
            let r = {},
              i = "relay" + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(i)) {
                  let n = t.replace(i, ""),
                    s = e[t];
                  r[n] = s;
                }
              }),
              r
            );
          })(a),
          expiryTimestamp: a.expiryTimestamp
            ? parseInt(a.expiryTimestamp, 10)
            : void 0,
        };
      }
      function tY(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [r, i] = e.split(":");
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function tJ(e) {
        return e.includes(":");
      }
      function tQ(e) {
        return tJ(e) ? e.split(":")[0] : e;
      }
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      let tX = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        tZ = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function t0(e, t) {
        let { message: r, code: i } = tZ[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function t1(e, t) {
        let { message: r, code: i } = tX[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function t5(e, t) {
        return (
          !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
        );
      }
      function t3(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function t6(e) {
        return typeof e > "u";
      }
      function t2(e, t) {
        return !!(t && t6(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function t8(e, t) {
        return !!(t && t6(e)) || ("number" == typeof e && !isNaN(e));
      }
      function t4(e) {
        return !!(t2(e, !1) && e.includes(":")) && 2 === e.split(":").length;
      }
      function t9(e) {
        let t = !0;
        return (
          t5(e) ? e.length && (t = e.every((e) => t2(e, !1))) : (t = !1), t
        );
      }
      function t7(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            var i;
            let n;
            if (r) return;
            let s =
              ((i = `${t}, namespace`),
              (n = null),
              t9(e?.methods)
                ? t9(e?.events) ||
                  (n = t1(
                    "UNSUPPORTED_EVENTS",
                    `${i}, events should be an array of strings or empty array for no events`
                  ))
                : (n = t1(
                    "UNSUPPORTED_METHODS",
                    `${i}, methods should be an array of strings or empty array for no methods`
                  )),
              n);
            s && (r = s);
          }),
          r
        );
      }
      function re(e, t) {
        let r = null;
        if (e && t3(e)) {
          let i;
          let n = t7(e, t);
          n && (r = n);
          let s =
            ((i = null),
            Object.values(e).forEach((e) => {
              var r, n;
              let s;
              if (i) return;
              let o =
                ((r = e?.accounts),
                (n = `${t} namespace`),
                (s = null),
                t5(r)
                  ? r.forEach((e) => {
                      s ||
                        (function (e) {
                          if (t2(e, !1) && e.includes(":")) {
                            let t = e.split(":");
                            if (3 === t.length) {
                              let e = t[0] + ":" + t[1];
                              return !!t[2] && t4(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (s = t1(
                          "UNSUPPORTED_ACCOUNTS",
                          `${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (s = t1(
                      "UNSUPPORTED_ACCOUNTS",
                      `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                s);
              o && (i = o);
            }),
            i);
          s && (r = s);
        } else
          r = t0(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`
          );
        return r;
      }
      function rt(e) {
        return t2(e.protocol, !0);
      }
      function rr(e) {
        return "u" > typeof e;
      }
      function ri(e, t) {
        return !(
          !t4(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...tY(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function rn(e, t, r) {
        let i = null,
          n = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                var i;
                r.includes(":")
                  ? (t[r] = e[r])
                  : null == (i = e[r].chains) ||
                    i.forEach((i) => {
                      t[i] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          s = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(":")) t[r] = e[r];
                else {
                  let i = tY(e[r].accounts);
                  i?.forEach((i) => {
                    t[i] = {
                      accounts: e[r].accounts.filter((e) =>
                        e.includes(`${i}:`)
                      ),
                      methods: e[r].methods,
                      events: e[r].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(n),
          a = Object.keys(s),
          c = rs(Object.keys(e)),
          u = rs(Object.keys(t)),
          h = c.filter((e) => !u.includes(e));
        return (
          h.length &&
            (i = t0(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          tI(o, a) ||
            (i = t0(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || i) return;
            let n = tY(t[e].accounts);
            n.includes(e) ||
              (i = t0(
                "NON_CONFORMING_NAMESPACES",
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${n.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (tI(n[e].methods, s[e].methods)
                ? tI(n[e].events, s[e].events) ||
                  (i = t0(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (i = t0(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          i
        );
      }
      function rs(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      function ro() {
        let e = tD();
        return new Promise((t) => {
          switch (e) {
            case tb.browser:
              t(tE() && navigator?.onLine);
              break;
            case tb.reactNative:
              t(ra());
              break;
            case tb.node:
            default:
              t(!0);
          }
        });
      }
      async function ra() {
        if (tw() && "u" > typeof r.g && null != r.g && r.g.NetInfo) {
          let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      let rc = {};
      class ru {
        static get(e) {
          return rc[e];
        }
        static set(e, t) {
          rc[e] = t;
        }
        static delete(e) {
          delete rc[e];
        }
      }
      let rh =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        rl =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        rf = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function rp(e, t) {
        if (
          "__proto__" === e ||
          ("constructor" === e && t && "object" == typeof t && "prototype" in t)
        ) {
          console.warn(
            `[destr] Dropping "${e}" key to prevent prototype pollution.`
          );
          return;
        }
        return t;
      }
      function rd(e, t = {}) {
        if ("string" != typeof e) return e;
        let r = e.trim();
        if ('"' === e[0] && e.endsWith('"') && !e.includes("\\"))
          return r.slice(1, -1);
        if (r.length <= 9) {
          let e = r.toLowerCase();
          if ("true" === e) return !0;
          if ("false" === e) return !1;
          if ("undefined" === e) return;
          if ("null" === e) return null;
          if ("nan" === e) return Number.NaN;
          if ("infinity" === e) return Number.POSITIVE_INFINITY;
          if ("-infinity" === e) return Number.NEGATIVE_INFINITY;
        }
        if (!rf.test(e)) {
          if (t.strict) throw SyntaxError("[destr] Invalid JSON");
          return e;
        }
        try {
          if (rh.test(e) || rl.test(e)) {
            if (t.strict) throw Error("[destr] Possible prototype pollution");
            return JSON.parse(e, rp);
          }
          return JSON.parse(e);
        } catch (r) {
          if (t.strict) throw r;
          return e;
        }
      }
      var rg = r(30410).Buffer;
      function ry(e, ...t) {
        try {
          var r;
          return (r = e(...t)) && "function" == typeof r.then
            ? r
            : Promise.resolve(r);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      function rv(e) {
        if (
          (function (e) {
            let t = typeof e;
            return null === e || ("object" !== t && "function" !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            let t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ("function" == typeof e.toJSON) return rv(e.toJSON());
        throw Error("[unstorage] Cannot stringify value!");
      }
      let rm = "base64:";
      function rb(e) {
        return e
          ? e
              .split("?")[0]
              .replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")
          : "";
      }
      function r_(e) {
        return (e = rb(e)) ? e + ":" : "";
      }
      let rw = () => {
        let e = new Map();
        return {
          name: "memory",
          options: {},
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, r) {
            e.set(t, r);
          },
          setItemRaw(t, r) {
            e.set(t, r);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => Array.from(e.keys()),
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function rE(e, t, r) {
        return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {};
      }
      async function rD(e) {
        "function" == typeof e.dispose && (await ry(e.dispose));
      }
      function rI(e) {
        return new Promise((t, r) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => r(e.error));
        });
      }
      function rS(e, t) {
        let r = indexedDB.open(e);
        r.onupgradeneeded = () => r.result.createObjectStore(t);
        let i = rI(r);
        return (e, r) => i.then((i) => r(i.transaction(t, e).objectStore(t)));
      }
      function rP() {
        return i || (i = rS("keyval-store", "keyval")), i;
      }
      function rO(e, t = rP()) {
        return t("readonly", (t) => rI(t.get(e)));
      }
      let rC = (e) =>
          JSON.stringify(e, (e, t) =>
            "bigint" == typeof t ? t.toString() + "n" : t
          ),
        rA = (e) =>
          JSON.parse(
            e.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            ),
            (e, t) =>
              "string" == typeof t && t.match(/^\d+n$/)
                ? BigInt(t.substring(0, t.length - 1))
                : t
          );
      function rx(e) {
        if ("string" != typeof e)
          throw Error(`Cannot safe json parse value of type ${typeof e}`);
        try {
          return rA(e);
        } catch (t) {
          return e;
        }
      }
      function rN(e) {
        return "string" == typeof e ? e : rC(e) || "";
      }
      var rR = (e = {}) => {
        let t;
        let r = e.base && e.base.length > 0 ? `${e.base}:` : "",
          i = (e) => r + e;
        return (
          e.dbName && e.storeName && (t = rS(e.dbName, e.storeName)),
          {
            name: "idb-keyval",
            options: e,
            hasItem: async (e) => !(typeof (await rO(i(e), t)) > "u"),
            getItem: async (e) => (await rO(i(e), t)) ?? null,
            setItem: (e, r) =>
              (function (e, t, r = rP()) {
                return r("readwrite", (r) => (r.put(t, e), rI(r.transaction)));
              })(i(e), r, t),
            removeItem: (e) =>
              (function (e, t = rP()) {
                return t("readwrite", (t) => (t.delete(e), rI(t.transaction)));
              })(i(e), t),
            getKeys: () =>
              (function (e = rP()) {
                return e("readonly", (e) => {
                  var t;
                  if (e.getAllKeys) return rI(e.getAllKeys());
                  let r = [];
                  return ((t = (e) => r.push(e.key)),
                  (e.openCursor().onsuccess = function () {
                    this.result && (t(this.result), this.result.continue());
                  }),
                  rI(e.transaction)).then(() => r);
                });
              })(t),
            clear: () =>
              (function (e = rP()) {
                return e("readwrite", (e) => (e.clear(), rI(e.transaction)));
              })(t),
          }
        );
      };
      class rT {
        constructor() {
          this.indexedDb = (function (e = {}) {
            let t = {
                mounts: { "": e.driver || rw() },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              r = (e) => {
                for (let r of t.mountpoints)
                  if (e.startsWith(r))
                    return {
                      base: r,
                      relativeKey: e.slice(r.length),
                      driver: t.mounts[r],
                    };
                return { base: "", relativeKey: e, driver: t.mounts[""] };
              },
              i = (e, r) =>
                t.mountpoints
                  .filter((t) => t.startsWith(e) || (r && e.startsWith(t)))
                  .map((r) => ({
                    relativeBase:
                      e.length > r.length ? e.slice(r.length) : void 0,
                    mountpoint: r,
                    driver: t.mounts[r],
                  })),
              n = (e, r) => {
                if (t.watching)
                  for (let i of ((r = rb(r)), t.watchListeners)) i(e, r);
              },
              s = async () => {
                if (!t.watching)
                  for (let e in ((t.watching = !0), t.mounts))
                    t.unwatch[e] = await rE(t.mounts[e], n, e);
              },
              o = async () => {
                if (t.watching) {
                  for (let e in t.unwatch) await t.unwatch[e]();
                  (t.unwatch = {}), (t.watching = !1);
                }
              },
              a = (e, t, i) => {
                let n = new Map(),
                  s = (e) => {
                    let t = n.get(e.base);
                    return (
                      t ||
                        ((t = { driver: e.driver, base: e.base, items: [] }),
                        n.set(e.base, t)),
                      t
                    );
                  };
                for (let i of e) {
                  let e = "string" == typeof i,
                    n = rb(e ? i : i.key),
                    o = e ? void 0 : i.value,
                    a = e || !i.options ? t : { ...t, ...i.options },
                    c = r(n);
                  s(c).items.push({
                    key: n,
                    value: o,
                    relativeKey: c.relativeKey,
                    options: a,
                  });
                }
                return Promise.all([...n.values()].map((e) => i(e))).then((e) =>
                  e.flat()
                );
              },
              c = {
                hasItem(e, t = {}) {
                  let { relativeKey: i, driver: n } = r((e = rb(e)));
                  return ry(n.hasItem, i, t);
                },
                getItem(e, t = {}) {
                  let { relativeKey: i, driver: n } = r((e = rb(e)));
                  return ry(n.getItem, i, t).then((e) => rd(e));
                },
                getItems: (e, t) =>
                  a(e, t, (e) =>
                    e.driver.getItems
                      ? ry(
                          e.driver.getItems,
                          e.items.map((e) => ({
                            key: e.relativeKey,
                            options: e.options,
                          })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: (function (...e) {
                              return rb(e.join(":"));
                            })(e.base, t.key),
                            value: rd(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            ry(e.driver.getItem, t.relativeKey, t.options).then(
                              (e) => ({ key: t.key, value: rd(e) })
                            )
                          )
                        )
                  ),
                getItemRaw(e, t = {}) {
                  let { relativeKey: i, driver: n } = r((e = rb(e)));
                  return n.getItemRaw
                    ? ry(n.getItemRaw, i, t)
                    : ry(n.getItem, i, t).then((e) =>
                        "string" == typeof e && e.startsWith(rm)
                          ? rg.from(e.slice(rm.length), "base64")
                          : e
                      );
                },
                async setItem(e, t, i = {}) {
                  if (void 0 === t) return c.removeItem(e);
                  let { relativeKey: s, driver: o } = r((e = rb(e)));
                  o.setItem &&
                    (await ry(o.setItem, s, rv(t), i),
                    o.watch || n("update", e));
                },
                async setItems(e, t) {
                  await a(e, t, async (e) => {
                    if (e.driver.setItems)
                      return ry(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: rv(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          ry(
                            e.driver.setItem,
                            t.relativeKey,
                            rv(t.value),
                            t.options
                          )
                        )
                      ));
                  });
                },
                async setItemRaw(e, t, i = {}) {
                  if (void 0 === t) return c.removeItem(e, i);
                  let { relativeKey: s, driver: o } = r((e = rb(e)));
                  if (o.setItemRaw) await ry(o.setItemRaw, s, t, i);
                  else {
                    if (!o.setItem) return;
                    await ry(
                      o.setItem,
                      s,
                      "string" == typeof t
                        ? t
                        : rm + rg.from(t).toString("base64"),
                      i
                    );
                  }
                  o.watch || n("update", e);
                },
                async removeItem(e, t = {}) {
                  "boolean" == typeof t && (t = { removeMeta: t });
                  let { relativeKey: i, driver: s } = r((e = rb(e)));
                  s.removeItem &&
                    (await ry(s.removeItem, i, t),
                    (t.removeMeta || t.removeMata) &&
                      (await ry(s.removeItem, i + "$", t)),
                    s.watch || n("remove", e));
                },
                async getMeta(e, t = {}) {
                  "boolean" == typeof t && (t = { nativeOnly: t });
                  let { relativeKey: i, driver: n } = r((e = rb(e))),
                    s = Object.create(null);
                  if (
                    (n.getMeta && Object.assign(s, await ry(n.getMeta, i, t)),
                    !t.nativeOnly)
                  ) {
                    let e = await ry(n.getItem, i + "$", t).then((e) => rd(e));
                    e &&
                      "object" == typeof e &&
                      ("string" == typeof e.atime &&
                        (e.atime = new Date(e.atime)),
                      "string" == typeof e.mtime &&
                        (e.mtime = new Date(e.mtime)),
                      Object.assign(s, e));
                  }
                  return s;
                },
                setMeta(e, t, r = {}) {
                  return this.setItem(e + "$", t, r);
                },
                removeMeta(e, t = {}) {
                  return this.removeItem(e + "$", t);
                },
                async getKeys(e, t = {}) {
                  let r = i((e = r_(e)), !0),
                    n = [],
                    s = [];
                  for (let e of r) {
                    let r = (await ry(e.driver.getKeys, e.relativeBase, t))
                      .map((t) => e.mountpoint + rb(t))
                      .filter((e) => !n.some((t) => e.startsWith(t)));
                    s.push(...r),
                      (n = [
                        e.mountpoint,
                        ...n.filter((t) => !t.startsWith(e.mountpoint)),
                      ]);
                  }
                  return e
                    ? s.filter((t) => t.startsWith(e) && !t.endsWith("$"))
                    : s.filter((e) => !e.endsWith("$"));
                },
                async clear(e, t = {}) {
                  (e = r_(e)),
                    await Promise.all(
                      i(e, !1).map(async (e) =>
                        e.driver.clear
                          ? ry(e.driver.clear, e.relativeBase, t)
                          : e.driver.removeItem
                          ? Promise.all(
                              (
                                await e.driver.getKeys(e.relativeBase || "", t)
                              ).map((r) => e.driver.removeItem(r, t))
                            )
                          : void 0
                      )
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(t.mounts).map((e) => rD(e)));
                },
                watch: async (e) => (
                  await s(),
                  t.watchListeners.push(e),
                  async () => {
                    (t.watchListeners = t.watchListeners.filter(
                      (t) => t !== e
                    )),
                      0 === t.watchListeners.length && (await o());
                  }
                ),
                async unwatch() {
                  (t.watchListeners = []), await o();
                },
                mount(e, r) {
                  if ((e = r_(e)) && t.mounts[e])
                    throw Error(`already mounted at ${e}`);
                  return (
                    e &&
                      (t.mountpoints.push(e),
                      t.mountpoints.sort((e, t) => t.length - e.length)),
                    (t.mounts[e] = r),
                    t.watching &&
                      Promise.resolve(rE(r, n, e))
                        .then((r) => {
                          t.unwatch[e] = r;
                        })
                        .catch(console.error),
                    c
                  );
                },
                async unmount(e, r = !0) {
                  (e = r_(e)) &&
                    t.mounts[e] &&
                    (t.watching &&
                      e in t.unwatch &&
                      (t.unwatch[e](), delete t.unwatch[e]),
                    r && (await rD(t.mounts[e])),
                    (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                    delete t.mounts[e]);
                },
                getMount(e = "") {
                  let t = r((e = rb(e) + ":"));
                  return { driver: t.driver, base: t.base };
                },
                getMounts: (e = "", t = {}) =>
                  i((e = rb(e)), t.parents).map((e) => ({
                    driver: e.driver,
                    base: e.mountpoint,
                  })),
              };
            return c;
          })({
            driver: rR({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((e) => [e.key, e.value]);
        }
        async getItem(e) {
          let t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, rN(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var rj =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof r.g
            ? r.g
            : "u" > typeof self
            ? self
            : {},
        rU = { exports: {} };
      function rL(e) {
        var t;
        return [e[0], rx(null != (t = e[1]) ? t : "")];
      }
      !(function () {
        function e() {}
        (e.prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          "u" > typeof rj && rj.localStorage
            ? (rU.exports = rj.localStorage)
            : "u" > typeof window && window.localStorage
            ? (rU.exports = window.localStorage)
            : (rU.exports = new e());
      })();
      class rk {
        constructor() {
          this.localStorage = rU.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(rL);
        }
        async getItem(e) {
          let t = this.localStorage.getItem(e);
          if (null !== t) return rx(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, rN(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      let rM = async (e, t, r) => {
          let i = "wc_storage_version",
            n = await t.getItem(i);
          if (n && n >= 1) {
            r(t);
            return;
          }
          let s = await e.getKeys();
          if (!s.length) {
            r(t);
            return;
          }
          let o = [];
          for (; s.length; ) {
            let r = s.shift();
            if (!r) continue;
            let i = r.toLowerCase();
            if (
              i.includes("wc@") ||
              i.includes("walletconnect") ||
              i.includes("wc_") ||
              i.includes("wallet_connect")
            ) {
              let i = await e.getItem(r);
              await t.setItem(r, i), o.push(r);
            }
          }
          await t.setItem(i, 1), r(t), rq(e, o);
        },
        rq = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class r$ {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          let e = new rk();
          this.storage = e;
          try {
            let t = new rT();
            rM(e, t, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
      var rz = r(36877),
        rH = r(92894),
        rF = r.n(rH);
      let rV = { level: "info" },
        rK = "custom_context";
      var rB = Object.defineProperty,
        rW = Object.defineProperties,
        rG = Object.getOwnPropertyDescriptors,
        rY = Object.getOwnPropertySymbols,
        rJ = Object.prototype.hasOwnProperty,
        rQ = Object.prototype.propertyIsEnumerable,
        rX = (e, t, r) =>
          t in e
            ? rB(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        rZ = (e, t) => {
          for (var r in t || (t = {})) rJ.call(t, r) && rX(e, r, t[r]);
          if (rY) for (var r of rY(t)) rQ.call(t, r) && rX(e, r, t[r]);
          return e;
        },
        r0 = (e, t) => rW(e, rG(t));
      function r1(e) {
        return r0(rZ({}, e), { level: e?.level || rV.level });
      }
      function r5(e, t = rK) {
        return typeof e.bindings > "u"
          ? (function (e, t = rK) {
              return e[t] || "";
            })(e, t)
          : e.bindings().context || "";
      }
      function r3(e, t, r = rK) {
        let i = (function (e, t, r = rK) {
          let i = r5(e, r);
          return i.trim() ? `${i}/${t}` : t;
        })(e, t, r);
        return (function (e, t, r = rK) {
          return (e[r] = t), e;
        })(e.child({ context: i }), i, r);
      }
      var r6 = r(49726);
      class r2 extends r6.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class r8 extends r6.q {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class r4 {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class r9 extends r6.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class r7 extends r6.q {
        constructor(e) {
          super();
        }
      }
      class ie {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      class it extends r6.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class ir extends r6.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class ii {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class is {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class io {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class ia {
        constructor(e) {
          this.client = e;
        }
      }
      var ic = r(73280);
      let iu = "base64url",
        ih = "base58btc";
      function il(e) {
        return e6(e3(rN(e), "utf8"), iu);
      }
      function ip(e) {
        return ["did", "key", "z" + e6(O([e3("K36", ih), e]), ih)].join(":");
      }
      function id(e = (0, E.randomBytes)(32)) {
        return ic._w(e);
      }
      async function ig(e, t, r, i, n = (0, e8.fromMiliseconds)(Date.now())) {
        var s, o;
        let a = { alg: "EdDSA", typ: "JWT" },
          c = { iss: ip(i.publicKey), sub: e, aud: t, iat: n, exp: n + r },
          u = e3(
            [il((s = { header: a, payload: c }).header), il(s.payload)].join(
              "."
            ),
            "utf8"
          );
        return [
          il(
            (o = { header: a, payload: c, signature: ic.Xx(i.secretKey, u) })
              .header
          ),
          il(o.payload),
          e6(o.signature, iu),
        ].join(".");
      }
      r(9885);
      let iy = "INTERNAL_ERROR",
        iv = "SERVER_ERROR",
        im = [-32700, -32600, -32601, -32602, -32603],
        ib = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [iy]: { code: -32603, message: "Internal error" },
          [iv]: { code: -32e3, message: "Server error" },
        };
      function i_(e) {
        return Object.keys(ib).includes(e) ? ib[e] : ib[iv];
      }
      function iw(e, t, r) {
        return e.message.includes("getaddrinfo ENOTFOUND") ||
          e.message.includes("connect ECONNREFUSED")
          ? Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
      var iE = r(60948);
      function iD(e = 3) {
        return (
          Date.now() * Math.pow(10, e) +
          Math.floor(Math.random() * Math.pow(10, e))
        );
      }
      function iI(e = 6) {
        return BigInt(iD(e));
      }
      function iS(e, t, r) {
        return { id: r || iD(), jsonrpc: "2.0", method: e, params: t };
      }
      function iP(e, t) {
        return { id: e, jsonrpc: "2.0", result: t };
      }
      function iO(e, t, r) {
        var i, n, s;
        return {
          id: e,
          jsonrpc: "2.0",
          error:
            void 0 === (i = t)
              ? i_(iy)
              : ("string" == typeof i &&
                  (i = Object.assign(Object.assign({}, i_(iv)), {
                    message: i,
                  })),
                void 0 !== r && (i.data = r),
                (n = i.code),
                im.includes(n) &&
                  ((s = i.code),
                  (i = Object.values(ib).find((e) => e.code === s) || ib[iv])),
                i),
        };
      }
      class iC {}
      class iA extends iC {
        constructor() {
          super();
        }
      }
      class ix extends iA {
        constructor(e) {
          super();
        }
      }
      function iN(e, t) {
        let r = (function (e) {
          let t = e.match(RegExp(/^\w+:/, "gi"));
          if (t && t.length) return t[0];
        })(e);
        return void 0 !== r && new RegExp(t).test(r);
      }
      function iR(e) {
        return iN(e, "^https?:");
      }
      function iT(e) {
        return iN(e, "^wss?:");
      }
      function ij(e) {
        return (
          "object" == typeof e &&
          "id" in e &&
          "jsonrpc" in e &&
          "2.0" === e.jsonrpc
        );
      }
      function iU(e) {
        return ij(e) && "method" in e;
      }
      function iL(e) {
        return ij(e) && (ik(e) || iM(e));
      }
      function ik(e) {
        return "result" in e;
      }
      function iM(e) {
        return "error" in e;
      }
      class iq extends ix {
        constructor(e) {
          super(e),
            (this.events = new m.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            iS(e.method, e.params || [], e.id || iI().toString()),
            t
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                i(e);
              }
            this.events.on(`${e.id}`, (e) => {
              iM(e) ? i(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              i(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            iL(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${
                  e.reason ? `(${e.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      let i$ = () =>
          "u" > typeof WebSocket ||
          ("u" > typeof r.g && "u" > typeof r.g.WebSocket) ||
          ("u" > typeof window && "u" > typeof window.WebSocket) ||
          ("u" > typeof self && "u" > typeof self.WebSocket),
        iz = (e) => e.split("?")[0],
        iH =
          "u" > typeof WebSocket
            ? WebSocket
            : "u" > typeof r.g && "u" > typeof r.g.WebSocket
            ? r.g.WebSocket
            : "u" > typeof window && "u" > typeof window.WebSocket
            ? window.WebSocket
            : "u" > typeof self && "u" > typeof self.WebSocket
            ? self.WebSocket
            : r(49676);
      class iF {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new m.EventEmitter()),
            (this.registering = !1),
            !iT(e))
          )
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          this.url = e;
        }
        get connected() {
          return "u" > typeof this.socket;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            if (typeof this.socket > "u") {
              t(Error("Connection already closed"));
              return;
            }
            (this.socket.onclose = (t) => {
              this.onClose(t), e();
            }),
              this.socket.close();
          });
        }
        async send(e) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send(rN(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!iT(e))
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return t(
                        Error("WebSocket connection is missing or invalid")
                      );
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, r) => {
              let i = new URLSearchParams(e).get("origin"),
                n = (0, iE.isReactNative)()
                  ? { headers: { origin: i } }
                  : {
                      rejectUnauthorized: !RegExp(
                        "wss?://localhost(:d{2,5})?"
                      ).test(e),
                    },
                s = new iH(e, [], n);
              i$()
                ? (s.onerror = (e) => {
                    r(this.emitError(e.error));
                  })
                : s.on("error", (e) => {
                    r(this.emitError(e));
                  }),
                (s.onopen = () => {
                  this.onOpen(s), t(s);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(e) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", e);
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? rx(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = iO(e, r.message || r.toString());
          this.events.emit("payload", i);
        }
        parseError(e, t = this.url) {
          return iw(e, iz(t), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          let t = this.parseError(
            Error(
              e?.message ||
                `WebSocket connection failed for host: ${iz(this.url)}`
            )
          );
          return this.events.emit("register_error", t), t;
        }
      }
      var iV = r(19834),
        iK = r.n(iV),
        iB = r(84824),
        iW = r.n(iB),
        iG = r(26182),
        iY = function (e, t) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
            r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var s = e.charAt(n),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw TypeError(s + " is ambiguous");
            r[o] = n;
          }
          var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function l(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[0]) {
              for (var i = 0, n = 0; e[t] === c; ) i++, t++;
              for (
                var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var h = r[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var l = 0, f = s - 1;
                  (0 !== h || l < n) && -1 !== f;
                  f--, l++
                )
                  (h += (a * o[f]) >>> 0),
                    (o[f] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw Error("Non-zero carry");
                (n = l), t++;
              }
              if (" " !== e[t]) {
                for (var p = s - n; p !== s && 0 === o[p]; ) p++;
                for (var d = new Uint8Array(i + (s - p)), g = i; p !== s; )
                  d[g++] = o[p++];
                return d;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var r = 0, i = 0, n = 0, s = t.length;
                n !== s && 0 === t[n];

              )
                n++, r++;
              for (
                var o = ((s - n) * h + 1) >>> 0, u = new Uint8Array(o);
                n !== s;

              ) {
                for (
                  var l = t[n], f = 0, p = o - 1;
                  (0 !== l || f < i) && -1 !== p;
                  p--, f++
                )
                  (l += (256 * u[p]) >>> 0),
                    (u[p] = l % a >>> 0),
                    (l = (l / a) >>> 0);
                if (0 !== l) throw Error("Non-zero carry");
                (i = f), n++;
              }
              for (var d = o - i; d !== o && 0 === u[d]; ) d++;
              for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
              return g;
            },
            decodeUnsafe: l,
            decode: function (e) {
              var r = l(e);
              if (r) return r;
              throw Error(`Non-${t} character`);
            },
          };
        };
      let iJ = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        iQ = (e) => new TextEncoder().encode(e),
        iX = (e) => new TextDecoder().decode(e);
      class iZ {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class i0 {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return i5(this, e);
        }
      }
      class i1 {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return i5(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let i5 = (e, t) =>
        new i1({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class i3 {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new iZ(e, t, r)),
            (this.decoder = new i0(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let i6 = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new i3(e, t, r, i),
        i2 = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: n } = iY(r, t);
          return i6({ prefix: e, name: t, encode: i, decode: (e) => iJ(n(e)) });
        },
        i8 = (e, t, r, i) => {
          let n = {};
          for (let e = 0; e < t.length; ++e) n[t[e]] = e;
          let s = e.length;
          for (; "=" === e[s - 1]; ) --s;
          let o = new Uint8Array(((s * r) / 8) | 0),
            a = 0,
            c = 0,
            u = 0;
          for (let t = 0; t < s; ++t) {
            let s = n[e[t]];
            if (void 0 === s) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | s),
              (a += r) >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        i4 = (e, t, r) => {
          let i = "=" === t[t.length - 1],
            n = (1 << r) - 1,
            s = "",
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; )
              (o -= r), (s += t[n & (a >> o)]);
          if ((o && (s += t[n & (a << (r - o))]), i))
            for (; (s.length * r) & 7; ) s += "=";
          return s;
        },
        i9 = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          i6({
            prefix: t,
            name: e,
            encode: (e) => i4(e, i, r),
            decode: (t) => i8(t, i, r, e),
          });
      var i7 = Object.freeze({
          __proto__: null,
          identity: i6({
            prefix: "\x00",
            name: "identity",
            encode: (e) => iX(e),
            decode: (e) => iQ(e),
          }),
        }),
        ne = Object.freeze({
          __proto__: null,
          base2: i9({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1,
          }),
        }),
        nt = Object.freeze({
          __proto__: null,
          base8: i9({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3,
          }),
        }),
        nr = Object.freeze({
          __proto__: null,
          base10: i2({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        }),
        ni = Object.freeze({
          __proto__: null,
          base16: i9({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          base16upper: i9({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          }),
        });
      let nn = i9({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        ns = i9({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        no = i9({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        na = i9({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        nc = i9({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        nu = i9({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        });
      var nh = Object.freeze({
          __proto__: null,
          base32: nn,
          base32upper: ns,
          base32pad: no,
          base32padupper: na,
          base32hex: nc,
          base32hexupper: nu,
          base32hexpad: i9({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5,
          }),
          base32hexpadupper: i9({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          base32z: i9({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          }),
        }),
        nl = Object.freeze({
          __proto__: null,
          base36: i2({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          base36upper: i2({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          }),
        }),
        nf = Object.freeze({
          __proto__: null,
          base58btc: i2({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          base58flickr: i2({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          }),
        });
      let np = i9({
        prefix: "m",
        name: "base64",
        alphabet:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6,
      });
      var nd = Object.freeze({
        __proto__: null,
        base64: np,
        base64pad: i9({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        base64url: i9({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        base64urlpad: i9({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
      });
      let ng = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        ny = ng.reduce((e, t, r) => ((e[r] = t), e), []),
        nv = ng.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      var nm = Object.freeze({
          __proto__: null,
          base256emoji: i6({
            prefix: "\uD83D\uDE80",
            name: "base256emoji",
            encode: function (e) {
              return e.reduce((e, t) => (e += ny[t]), "");
            },
            decode: function (e) {
              let t = [];
              for (let r of e) {
                let e = nv[r.codePointAt(0)];
                if (void 0 === e)
                  throw Error(`Non-base256emoji character: ${r}`);
                t.push(e);
              }
              return new Uint8Array(t);
            },
          }),
        }),
        nb = {
          encode: function e(t, r, i) {
            (r = r || []), (i = i || 0);
            for (var n = i; t >= 2147483648; )
              (r[i++] = (255 & t) | 128), (t /= 128);
            for (; -128 & t; ) (r[i++] = (255 & t) | 128), (t >>>= 7);
            return (r[i] = 0 | t), (e.bytes = i - n + 1), r;
          },
          decode: function e(t, r) {
            var i,
              n = 0,
              r = r || 0,
              s = 0,
              o = r,
              a = t.length;
            do {
              if (o >= a)
                throw ((e.bytes = 0), RangeError("Could not decode varint"));
              (i = t[o++]),
                (n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)),
                (s += 7);
            } while (i >= 128);
            return (e.bytes = o - r), n;
          },
          encodingLength: function (e) {
            return e < 128
              ? 1
              : e < 16384
              ? 2
              : e < 2097152
              ? 3
              : e < 268435456
              ? 4
              : e < 34359738368
              ? 5
              : e < 4398046511104
              ? 6
              : e < 562949953421312
              ? 7
              : e < 72057594037927940
              ? 8
              : e < 0x7fffffffffffffff
              ? 9
              : 10;
          },
        };
      let n_ = (e, t, r = 0) => (nb.encode(e, t, r), t),
        nw = (e) => nb.encodingLength(e),
        nE = (e, t) => {
          let r = t.byteLength,
            i = nw(e),
            n = i + nw(r),
            s = new Uint8Array(n + r);
          return n_(e, s, 0), n_(r, s, i), s.set(t, n), new nD(e, r, t, s);
        };
      class nD {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let nI = ({ name: e, code: t, encode: r }) => new nS(e, t, r);
      class nS {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? nE(this.code, t)
              : t.then((e) => nE(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let nP = (e) => async (t) =>
        new Uint8Array(await crypto.subtle.digest(e, t));
      var nO = Object.freeze({
          __proto__: null,
          sha256: nI({ name: "sha2-256", code: 18, encode: nP("SHA-256") }),
          sha512: nI({ name: "sha2-512", code: 19, encode: nP("SHA-512") }),
        }),
        nC = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: iJ,
            digest: (e) => nE(0, iJ(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let nA = {
        ...i7,
        ...ne,
        ...nt,
        ...nr,
        ...ni,
        ...nh,
        ...nl,
        ...nf,
        ...nd,
        ...nm,
      };
      function nx(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function nN(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...nO, ...nC });
      let nR = nN(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        nT = nN(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? nx(globalThis.Buffer.allocUnsafe(e))
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        nj = {
          utf8: nR,
          "utf-8": nR,
          hex: nA.base16,
          latin1: nT,
          ascii: nT,
          binary: nT,
          ...nA,
        },
        nU = "core",
        nL = `wc@2:${nU}:`,
        nk = { logger: "error" },
        nM = { database: ":memory:" },
        nq = "client_ed25519_seed",
        n$ = e8.ONE_DAY,
        nz = e8.SIX_HOURS,
        nH = "wss://relay.walletconnect.com",
        nF = "wss://relay.walletconnect.org",
        nV = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          publish: "relayer_publish",
        },
        nK = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        nB = e8.ONE_SECOND,
        nW = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        nG = 1e3 * e8.FIVE_SECONDS,
        nY = {
          wc_pairingDelete: {
            req: { ttl: e8.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: e8.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: e8.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: e8.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: e8.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: e8.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        nJ = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        nQ = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        nX = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        nZ = "verify-api",
        n0 = "https://verify.walletconnect.com",
        n1 = "https://verify.walletconnect.org",
        n5 = [n0, n1];
      class n3 {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = nL),
            (this.init = async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > "u") {
                let { message: t } = t0(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = r3(t, this.name));
        }
        get context() {
          return r5(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, tS(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? tP(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class n6 {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => (
              this.isInitialized(), ip(id(await this.getClientSeed()).publicKey)
            )),
            (this.generateKeyPair = () => {
              this.isInitialized();
              let e = (function () {
                let e = I.Au();
                return {
                  privateKey: e6(e.secretKey, tn),
                  publicKey: e6(e.publicKey, tn),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              let t = id(await this.getClientSeed()),
                r = ta();
              return await ig(r, e, n$, t);
            }),
            (this.generateSharedKey = (e, t, r) => {
              this.isInitialized();
              let i = (function (e, t) {
                let r = I.gi(e3(e, tn), e3(t, tn), !0);
                return e6(new w.t(D.mE, r).expand(32), tn);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(i, r);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              let r = t || e6((0, D.vp)(e3(e, tn)), tn);
              return await this.keychain.set(r, e), r;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, r) => {
              this.isInitialized();
              let i = tl(r),
                n = rN(t);
              if (tf(i)) {
                let t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              let s = this.getSymKey(e),
                { type: o, senderPublicKey: a } = i;
              return (function (e) {
                var t;
                let r =
                  ((t = "u" > typeof e.type ? e.type : 0), e3(`${t}`, ti));
                if (1 === tu(r) && typeof e.senderPublicKey > "u")
                  throw Error("Missing sender public key for type 1 envelope");
                let i =
                    "u" > typeof e.senderPublicKey
                      ? e3(e.senderPublicKey, tn)
                      : void 0,
                  n = "u" > typeof e.iv ? e3(e.iv, tn) : (0, E.randomBytes)(12);
                return (function (e) {
                  if (1 === tu(e.type)) {
                    if (typeof e.senderPublicKey > "u")
                      throw Error(
                        "Missing sender public key for type 1 envelope"
                      );
                    return e6(
                      O([e.type, e.senderPublicKey, e.iv, e.sealed]),
                      ts
                    );
                  }
                  return e6(O([e.type, e.iv, e.sealed]), ts);
                })({
                  type: r,
                  sealed: new _.OK(e3(e.symKey, tn)).seal(n, e3(e.message, to)),
                  iv: n,
                  senderPublicKey: i,
                });
              })({ type: o, symKey: s, message: n, senderPublicKey: a });
            }),
            (this.decode = async (e, t, r) => {
              this.isInitialized();
              let i = (function (e, t) {
                let r = th(e);
                return tl({
                  type: tu(r.type),
                  senderPublicKey:
                    "u" > typeof r.senderPublicKey
                      ? e6(r.senderPublicKey, tn)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, r);
              if (tf(i)) {
                let t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                let r = this.getSymKey(e),
                  i = (function (e) {
                    let t = new _.OK(e3(e.symKey, tn)),
                      { sealed: r, iv: i } = th(e.encoded),
                      n = t.open(i, r);
                    if (null === n) throw Error("Failed to decrypt");
                    return e6(n, to);
                  })({ symKey: r, encoded: t });
                return rx(i);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            (this.getPayloadType = (e) => tu(th(e).type)),
            (this.getPayloadSenderPublicKey = (e) => {
              let t = th(e);
              return t.senderPublicKey ? e6(t.senderPublicKey, tn) : void 0;
            }),
            (this.core = e),
            (this.logger = r3(t, this.name)),
            (this.keychain = r || new n3(this.core, this.logger));
        }
        get context() {
          return r5(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(nq);
          } catch {
            (e = ta()), await this.keychain.set(nq, e);
          }
          return (function (e, t = "utf8") {
            let r = nj[t];
            if (!r) throw Error(`Unsupported encoding "${t}"`);
            return ("utf8" === t || "utf-8" === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? nx(globalThis.Buffer.from(e, "utf-8"))
              : r.decoder.decode(`${r.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class n2 extends r4 {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = nL),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let e = await this.getRelayerMessages();
                  "u" > typeof e && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              let r = tc(t),
                i = this.messages.get(e);
              return (
                typeof i > "u" && (i = {}),
                "u" > typeof i[r] ||
                  ((i[r] = t), this.messages.set(e, i), await this.persist()),
                r
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => (
              this.isInitialized(), "u" > typeof this.get(e)[tc(t)]
            )),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = r3(e, this.name)),
            (this.core = t);
        }
        get context() {
          return r5(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, tS(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? tP(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class n8 extends r9 {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new m.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, e8.toMiliseconds)(2 * e8.TEN_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, r) => {
              var i;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: r },
                });
              try {
                let n = r?.ttl || nz,
                  s = tk(r),
                  o = r?.prompt || !1,
                  a = r?.tag || 0,
                  c = r?.id || iI().toString(),
                  u = {
                    topic: e,
                    message: t,
                    opts: { ttl: n, relay: s, prompt: o, tag: a, id: c },
                  },
                  h = setTimeout(
                    () => this.queue.set(c, u),
                    this.publishTimeout
                  );
                try {
                  await await tC(
                    this.rpcPublish(e, t, n, s, o, a, c),
                    this.publishTimeout,
                    `Failed to publish payload, please try again. id:${c} tag:${a}`
                  ),
                    this.removeRequestFromQueue(c),
                    this.relayer.events.emit(nV.publish, u);
                } catch (e) {
                  if (
                    (this.logger.debug("Publishing Payload stalled"),
                    (this.needsTransportRestart = !0),
                    null != (i = r?.internal) && i.throwOnFailedPublish)
                  )
                    throw (this.removeRequestFromQueue(c), e);
                  return;
                } finally {
                  clearTimeout(h);
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: r },
                  });
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = r3(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return r5(this.logger);
        }
        rpcPublish(e, t, r, i, n, s, o) {
          var a, c, u, h;
          let l = {
            method: tM(i.protocol).publish,
            params: { topic: e, message: t, ttl: r, prompt: n, tag: s },
            id: o,
          };
          return (
            t6(null == (a = l.params) ? void 0 : a.prompt) &&
              (null == (c = l.params) || delete c.prompt),
            t6(null == (u = l.params) ? void 0 : u.tag) &&
              (null == (h = l.params) || delete h.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: l,
            }),
            this.relayer.request(l)
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            let { topic: t, message: r, opts: i } = e;
            await this.publish(t, r, i);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(rz.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(nV.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(nV.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      class n4 {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              let r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let r = this.get(e);
              if (!this.exists(e, t)) return;
              let i = r.filter((e) => e !== t);
              if (!i.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, i);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var n9 = Object.defineProperty,
        n7 = Object.defineProperties,
        se = Object.getOwnPropertyDescriptors,
        st = Object.getOwnPropertySymbols,
        sr = Object.prototype.hasOwnProperty,
        si = Object.prototype.propertyIsEnumerable,
        sn = (e, t, r) =>
          t in e
            ? n9(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ss = (e, t) => {
          for (var r in t || (t = {})) sr.call(t, r) && sn(e, r, t[r]);
          if (st) for (var r of st(t)) si.call(t, r) && sn(e, r, t[r]);
          return e;
        },
        so = (e, t) => n7(e, se(t));
      class sa extends it {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new n4()),
            (this.events = new m.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = nL),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                let r = tk(t),
                  i = { topic: e, relay: r };
                this.pending.set(e, i);
                let n = await this.rpcSubscribe(e, r);
                return (
                  this.onSubscribe(n, i),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  }),
                  n
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                "u" > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) => {
              if (this.topics.includes(e)) return !0;
              let t = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((r, i) => {
                let n = new e8.Watch();
                n.start(t);
                let s = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(s), n.stop(t), r(!0)),
                    n.elapsed(t) >= nG &&
                      (clearInterval(s),
                      n.stop(t),
                      i(Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = r3(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return r5(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let r = this.topicMap.get(e);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(e, r, t))
          );
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: r },
            });
          try {
            let i = tk(r);
            await this.rpcUnsubscribe(e, t, i);
            let n = t1("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, n),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: r },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t) {
          let r = { method: tM(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            await await tC(this.relayer.request(r), this.subscribeTimeout);
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(nV.connection_stalled);
          }
          return tc(e + this.clientId);
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = {
            method: tM(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            return await await tC(
              this.relayer.request(t),
              this.subscribeTimeout
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(nV.connection_stalled);
          }
        }
        rpcUnsubscribe(e, t, r) {
          let i = {
            method: tM(r.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, so(ss({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, ss({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.subscriptions.has(e) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t));
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, ss({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(nW.created, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = t0("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          let r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(nW.deleted, so(ss({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(nW.sync);
        }
        async reset() {
          if (this.cached.length) {
            let e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let t = 0; t < e; t++) {
              let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(e);
            }
          }
          this.events.emit(nW.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = t0("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          let t = await this.rpcBatchSubscribe(e);
          t5(t) &&
            this.onBatchSubscribe(t.map((t, r) => so(ss({}, e[r]), { id: t })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
          let e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(
            rz.HEARTBEAT_EVENTS.pulse,
            async () => {
              await this.checkPending();
            }
          ),
            this.relayer.on(nV.connect, async () => {
              await this.onConnect();
            }),
            this.relayer.on(nV.disconnect, () => {
              this.onDisconnect();
            }),
            this.events.on(nW.created, async (e) => {
              let t = nW.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(nW.deleted, async (e) => {
              let t = nW.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e());
              }, this.pollingInterval);
            }));
        }
      }
      var sc = Object.defineProperty,
        su = Object.getOwnPropertySymbols,
        sh = Object.prototype.hasOwnProperty,
        sl = Object.prototype.propertyIsEnumerable,
        sf = (e, t, r) =>
          t in e
            ? sc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        sp = (e, t) => {
          for (var r in t || (t = {})) sh.call(t, r) && sf(e, r, t[r]);
          if (su) for (var r of su(t)) sl.call(t, r) && sf(e, r, t[r]);
          return e;
        };
      class sd extends r7 {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new m.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.requestsInFlight = new Map()),
            (this.request = async (e) => {
              this.logger.debug("Publishing Request Payload");
              let t = e.id,
                r = this.provider.request(e);
              this.requestsInFlight.set(t, { promise: r, request: e });
              try {
                return await this.toEstablishConnection(), await r;
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(e),
                  e)
                );
              } finally {
                this.requestsInFlight.delete(t);
              }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e);
            }),
            (this.onConnectHandler = () => {
              this.events.emit(nV.connect);
            }),
            (this.onDisconnectHandler = () => {
              this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.error(e),
                this.events.emit(nV.error, e),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(nK.payload, this.onPayloadHandler),
                this.provider.on(nK.connect, this.onConnectHandler),
                this.provider.on(nK.disconnect, this.onDisconnectHandler),
                this.provider.on(nK.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? r3(e.logger, this.name)
                : rF()(r1({ level: e.logger || "error" }))),
            (this.messages = new n2(this.logger, e.core)),
            (this.subscriber = new sa(this, this.logger)),
            (this.publisher = new n8(this, this.logger)),
            (this.relayUrl = e?.relayUrl || nH),
            (this.projectId = e.projectId),
            (this.bundleId = (function () {
              var e;
              try {
                return tw() &&
                  "u" > typeof r.g &&
                  "u" > typeof (null == r.g ? void 0 : r.g.Application)
                  ? null == (e = r.g.Application)
                    ? void 0
                    : e.applicationId
                  : void 0;
              } catch {
                return;
              }
            })()),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${nF}...`
            ),
              await this.restartTransport(nF);
          }
          (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport"
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return r5(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
            });
        }
        async subscribe(e, t) {
          var r;
          let i;
          this.isInitialized();
          let n =
            (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) ||
            "";
          if (n) return n;
          let s = (t) => {
            t.topic === e && (this.subscriber.off(nW.created, s), i());
          };
          return (
            await Promise.all([
              new Promise((e) => {
                (i = e), this.subscriber.on(nW.created, s);
              }),
              new Promise(async (r) => {
                (n = await this.subscriber.subscribe(e, t)), r();
              }),
            ]),
            n
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportClose() {
          this.requestsInFlight.size > 0 &&
            (this.logger.debug(
              "Waiting for all in-flight requests to finish before closing transport..."
            ),
            this.requestsInFlight.forEach(async (e) => {
              await e.promise;
            })),
            (this.transportExplicitlyClosed = !0),
            this.hasExperiencedNetworkDisruption && this.connected
              ? await tC(
                  this.provider.disconnect(),
                  1e3,
                  "provider.disconnect()"
                ).catch(() => this.onProviderDisconnect())
              : this.connected && (await this.provider.disconnect());
        }
        async transportOpen(e) {
          if (
            ((this.transportExplicitlyClosed = !1),
            await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress)
          ) {
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e),
              await this.transportClose(),
              await this.createProvider()),
              (this.connectionAttemptInProgress = !0);
            try {
              await Promise.all([
                new Promise((e) => {
                  if (!this.initialized) return e();
                  this.subscriber.once(nW.resubscribed, () => {
                    e();
                  });
                }),
                new Promise(async (e, t) => {
                  try {
                    await tC(
                      this.provider.connect(),
                      1e4,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    );
                  } catch (e) {
                    t(e);
                    return;
                  }
                  e();
                }),
              ]);
            } catch (e) {
              if ((this.logger.error(e), !this.isConnectionStalled(e.message)))
                throw e;
              this.provider.events.emit(nK.disconnect);
            } finally {
              (this.connectionAttemptInProgress = !1),
                (this.hasExperiencedNetworkDisruption = !1);
            }
          }
        }
        async restartTransport(e) {
          await this.confirmOnlineStateOrThrow(),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = e || this.relayUrl),
              await this.transportClose(),
              await this.createProvider(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await ro()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new iq(
            new iF(
              (function ({
                protocol: e,
                version: t,
                relayUrl: i,
                sdkVersion: n,
                auth: s,
                projectId: o,
                useOnCloseEvent: a,
                bundleId: c,
              }) {
                var u;
                let h;
                let l = i.split("?"),
                  f = (function (e, t, i) {
                    let n = (function () {
                        if (
                          tD() === tb.reactNative &&
                          "u" > typeof r.g &&
                          "u" > typeof (null == r.g ? void 0 : r.g.Platform)
                        ) {
                          let { OS: e, Version: t } = r.g.Platform;
                          return [e, t].join("-");
                        }
                        let e = (0, e2.qY)();
                        if (null === e) return "unknown";
                        let t = e.os
                          ? e.os.replace(" ", "").toLowerCase()
                          : "unknown";
                        return "browser" === e.type
                          ? [t, e.name, e.version].join("-")
                          : [t, e.version].join("-");
                      })(),
                      s = (function () {
                        var e;
                        let t = tD();
                        return t === tb.browser
                          ? [
                              t,
                              (null == (e = (0, e4.getLocation)())
                                ? void 0
                                : e.host) || "unknown",
                            ].join(":")
                          : t;
                      })();
                    return [[e, t].join("-"), ["js", i].join("-"), n, s].join(
                      "/"
                    );
                  })(e, t, n),
                  p =
                    ((u = l[1] || ""),
                    (h = tm(tm({}, (h = e7.parse(u))), {
                      auth: s,
                      ua: f,
                      projectId: o,
                      useOnCloseEvent: a || void 0,
                      origin: c || void 0,
                    })),
                    (u = e7.stringify(h)));
                return l[0] + "?" + p;
              })({
                sdkVersion: "2.11.1",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          let { topic: t, message: r } = e;
          await this.messages.set(t, r);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0
            );
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${t}`
              ),
              !0
            );
          let i = this.messages.has(t, r);
          return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            iU(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let t = e.params,
              { topic: r, message: i, publishedAt: n } = t.data,
              s = { topic: r, message: i, publishedAt: n };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(sp({ type: "event", event: t.id }, s)),
              this.events.emit(t.id, s),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(s);
          } else iL(e) && this.events.emit(nV.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(nV.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let t = iP(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(nK.payload, this.onPayloadHandler),
            this.provider.off(nK.connect, this.onConnectHandler),
            this.provider.off(nK.disconnect, this.onDisconnectHandler),
            this.provider.off(nK.error, this.onProviderErrorHandler);
        }
        async registerEventListeners() {
          this.events.on(nV.connection_stalled, () => {
            this.restartTransport().catch((e) => this.logger.error(e));
          });
          let e = await ro();
          !(function (e) {
            switch (tD()) {
              case tb.browser:
                !tw() &&
                  tE() &&
                  (window.addEventListener("online", () => e(!0)),
                  window.addEventListener("offline", () => e(!1)));
                break;
              case tb.reactNative:
                tw() &&
                  "u" > typeof r.g &&
                  null != r.g &&
                  r.g.NetInfo &&
                  r.g?.NetInfo.addEventListener((t) => e(t?.isConnected));
              case tb.node:
            }
          })(async (t) => {
            this.initialized &&
              e !== t &&
              ((e = t),
              t
                ? await this.restartTransport().catch((e) =>
                    this.logger.error(e)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportClose().catch((e) =>
                    this.logger.error(e)
                  )));
          });
        }
        onProviderDisconnect() {
          this.events.emit(nV.disconnect), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            (this.logger.info("attemptToReconnect called. Connecting..."),
            setTimeout(async () => {
              await this.restartTransport().catch((e) => this.logger.error(e));
            }, (0, e8.toMiliseconds)(nB)));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectionAttemptInProgress)
              return await new Promise((e) => {
                let t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var sg = Object.defineProperty,
        sy = Object.getOwnPropertySymbols,
        sv = Object.prototype.hasOwnProperty,
        sm = Object.prototype.propertyIsEnumerable,
        sb = (e, t, r) =>
          t in e
            ? sg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        s_ = (e, t) => {
          for (var r in t || (t = {})) sv.call(t, r) && sb(e, r, t[r]);
          if (sy) for (var r of sy(t)) sm.call(t, r) && sb(e, r, t[r]);
          return e;
        };
      class sw extends ie {
        constructor(e, t, r, i = nL, n) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = nL),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  var t;
                  this.getKey && null !== e && !t6(e)
                    ? this.map.set(this.getKey(e), e)
                    : (null == (t = e?.proposer) ? void 0 : t.publicKey)
                    ? this.map.set(e.id, e)
                    : e?.topic && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((r) => iK()(t[r], e[r]))
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              let r = s_(s_({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  await this.persist());
            }),
            (this.logger = r3(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = n);
        }
        get context() {
          return r5(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            let { message: t } = t0("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              let { message: e } = t0("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class sE {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (b())()),
            (this.initialized = !1),
            (this.storagePrefix = nL),
            (this.ignoredPayloadTypes = [1]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async () => {
              var e;
              this.isInitialized();
              let t = ta(),
                r = await this.core.crypto.setSymKey(t),
                i = tN(e8.FIVE_MINUTES),
                n = { protocol: "irn" },
                s =
                  ((e = {
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: r,
                    symKey: t,
                    relay: n,
                    expiryTimestamp: i,
                  }),
                  `${e.protocol}:${e.topic}@${e.version}?` +
                    e7.stringify(
                      tW(
                        tB(
                          { symKey: e.symKey },
                          (function (e, t = "-") {
                            let r = {};
                            return (
                              Object.keys(e).forEach((i) => {
                                e[i] && (r["relay" + t + i] = e[i]);
                              }),
                              r
                            );
                          })(e.relay)
                        ),
                        { expiryTimestamp: e.expiryTimestamp }
                      )
                    ));
              return (
                await this.pairings.set(r, {
                  topic: r,
                  expiry: i,
                  relay: n,
                  active: !1,
                }),
                await this.core.relayer.subscribe(r),
                this.core.expirer.set(r, i),
                { topic: r, uri: s }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), this.isValidPair(e);
              let {
                topic: t,
                symKey: r,
                relay: i,
                expiryTimestamp: n,
              } = tG(e.uri);
              if (this.pairings.keys.includes(t) && this.pairings.get(t).active)
                throw Error(
                  `Pairing already exists: ${t}. Please try again with a new connection URI.`
                );
              let s = n || tN(e8.FIVE_MINUTES),
                o = { topic: t, relay: i, expiry: s, active: !1 };
              return (
                await this.pairings.set(t, o),
                this.core.expirer.set(t, s),
                e.activatePairing && (await this.activate({ topic: t })),
                this.events.emit(nJ.create, o),
                this.core.crypto.keychain.has(t) ||
                  (await this.core.crypto.setSymKey(r, t),
                  await this.core.relayer.subscribe(t, { relay: i })),
                o
              );
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              let t = tN(e8.THIRTY_DAYS);
              await this.pairings.update(e, { active: !0, expiry: t }),
                this.core.expirer.set(e, t);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: r, resolve: i, reject: n } = tO();
                this.events.once(tT("pairing_ping", e), ({ error: e }) => {
                  e ? n(e) : i();
                }),
                  await r();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  t1("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, r) => {
              let i = iS(t, r),
                n = await this.core.crypto.encode(e, i),
                s = nY[t].req;
              return (
                this.core.history.set(e, i),
                this.core.relayer.publish(e, n, s),
                i.id
              );
            }),
            (this.sendResult = async (e, t, r) => {
              let i = iP(e, r),
                n = await this.core.crypto.encode(t, i),
                s = nY[(await this.core.history.get(t, e)).request.method].res;
              await this.core.relayer.publish(t, n, s),
                await this.core.history.resolve(i);
            }),
            (this.sendError = async (e, t, r) => {
              let i = iO(e, r),
                n = await this.core.crypto.encode(t, i),
                s = await this.core.history.get(t, e),
                o = nY[s.request.method]
                  ? nY[s.request.method].res
                  : nY.unregistered_method.res;
              await this.core.relayer.publish(t, n, o),
                await this.core.history.resolve(i);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, t1("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              let e = this.pairings.getAll().filter((e) => tR(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              let { topic: t, payload: r } = e;
              switch (r.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, r);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, r);
                default:
                  return this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return "wc_pairingPing" === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(nJ.ping, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                ik(t)
                  ? this.events.emit(tT("pairing_ping", r), {})
                  : iM(t) &&
                    this.events.emit(tT("pairing_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(nJ.delete, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              let { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                let t = t1("WC_METHOD_UNSUPPORTED", i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(t1("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e) => {
              var t;
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw Error(t);
              }
              if (
                !(function (e) {
                  if (t2(e, !1))
                    try {
                      return "u" > typeof new URL(e);
                    } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw Error(t);
              }
              let r = tG(e.uri);
              if (!(null != (t = r?.relay) && t.protocol)) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw Error(e);
              }
              if (!(null != r && r.symKey)) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw Error(e);
              }
              if (
                null != r &&
                r.expiryTimestamp &&
                (0, e8.toMiliseconds)(r?.expiryTimestamp) < Date.now()
              ) {
                let { message: e } = t0(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!t2(e, !1)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = t0(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if (tR(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = t0("EXPIRED", `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = r3(t, this.name)),
            (this.pairings = new sw(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return r5(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(nV.message, async (e) => {
            let { topic: t, message: r } = e;
            if (
              !this.pairings.keys.includes(t) ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r)
              )
            )
              return;
            let i = await this.core.crypto.decode(t, r);
            try {
              iU(i)
                ? (this.core.history.set(t, i),
                  this.onRelayEventRequest({ topic: t, payload: i }))
                : iL(i) &&
                  (await this.core.history.resolve(i),
                  await this.onRelayEventResponse({ topic: t, payload: i }),
                  this.core.history.delete(t, i.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(nX.expired, async (e) => {
            let { topic: t } = tx(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(nJ.expire, { topic: t }));
          });
        }
      }
      class sD extends r8 {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new m.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = nL),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              let i = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: tN(e8.THIRTY_DAYS),
              };
              this.records.set(i.id, i), this.events.emit(nQ.created, i);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = iM(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.events.emit(nQ.updated, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((r) => {
                  r.topic !== e ||
                    ("u" > typeof t && r.id !== t) ||
                    (this.records.delete(r.id),
                    this.events.emit(nQ.deleted, r));
                });
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = r3(t, this.name));
        }
        get context() {
          return r5(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ("u" > typeof t.response) return;
              let r = {
                topic: t.topic,
                request: iS(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = t0("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(nQ.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = t0("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(nQ.created, (e) => {
            let t = nQ.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e }),
              this.persist();
          }),
            this.events.on(nQ.updated, (e) => {
              let t = nQ.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.events.on(nQ.deleted, (e) => {
              let t = nQ.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.core.heartbeat.on(rz.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((e) => {
              (0, e8.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${e.id}`),
                this.delete(e.topic, e.id));
            });
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class sI extends ir {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new m.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = nL),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                let t = this.formatTarget(e);
                return "u" > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              let r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(nX.created, { target: r, expiration: i });
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(nX.deleted, { target: t, expiration: r });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = r3(t, this.name));
        }
        get context() {
          return r5(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e) return tA("topic", e);
          if ("number" == typeof e) return tA("id", e);
          let { message: t } = t0("UNKNOWN_TYPE", `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(nX.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = t0("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = t0("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: r } = t;
          (0, e8.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(nX.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(rz.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations()
          ),
            this.events.on(nX.created, (e) => {
              let t = nX.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(nX.expired, (e) => {
              let t = nX.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(nX.deleted, (e) => {
              let t = nX.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      class sS extends ii {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.name = nZ),
            (this.initialized = !1),
            (this.queue = []),
            (this.verifyDisabled = !1),
            (this.init = async (e) => {
              if (this.verifyDisabled || tw() || !tE()) return;
              let t = this.getVerifyUrl(e?.verifyUrl);
              this.verifyUrl !== t && this.removeIframe(), (this.verifyUrl = t);
              try {
                await this.createIframe();
              } catch (e) {
                this.logger.info(
                  `Verify iframe failed to load: ${this.verifyUrl}`
                ),
                  this.logger.info(e);
              }
              if (!this.initialized) {
                this.removeIframe(), (this.verifyUrl = n1);
                try {
                  await this.createIframe();
                } catch (e) {
                  this.logger.info(
                    `Verify iframe failed to load: ${this.verifyUrl}`
                  ),
                    this.logger.info(e),
                    (this.verifyDisabled = !0);
                }
              }
            }),
            (this.register = async (e) => {
              this.initialized
                ? this.sendPost(e.attestationId)
                : (this.addToQueue(e.attestationId), await this.init());
            }),
            (this.resolve = async (e) => {
              let t;
              if (this.isDevEnv) return "";
              let r = this.getVerifyUrl(e?.verifyUrl);
              try {
                t = await this.fetchAttestation(e.attestationId, r);
              } catch (i) {
                this.logger.info(
                  `failed to resolve attestation: ${e.attestationId} from url: ${r}`
                ),
                  this.logger.info(i),
                  (t = await this.fetchAttestation(e.attestationId, n1));
              }
              return t;
            }),
            (this.fetchAttestation = async (e, t) => {
              this.logger.info(`resolving attestation: ${e} from url: ${t}`);
              let r = this.startAbortTimer(2 * e8.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(r), 200 === i.status ? await i.json() : void 0
              );
            }),
            (this.addToQueue = (e) => {
              this.queue.push(e);
            }),
            (this.processQueue = () => {
              0 !== this.queue.length &&
                (this.queue.forEach((e) => this.sendPost(e)),
                (this.queue = []));
            }),
            (this.sendPost = (e) => {
              var t;
              try {
                if (!this.iframe) return;
                null == (t = this.iframe.contentWindow) ||
                  t.postMessage(e, "*"),
                  this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`);
              } catch {}
            }),
            (this.createIframe = async () => {
              let e;
              let t = (r) => {
                "verify_ready" === r.data &&
                  ((this.initialized = !0),
                  this.processQueue(),
                  window.removeEventListener("message", t),
                  e());
              };
              await Promise.race([
                new Promise((r) => {
                  if (document.getElementById(nZ)) return r();
                  window.addEventListener("message", t);
                  let i = document.createElement("iframe");
                  (i.id = nZ),
                    (i.src = `${this.verifyUrl}/${this.projectId}`),
                    (i.style.display = "none"),
                    document.body.append(i),
                    (this.iframe = i),
                    (e = r);
                }),
                new Promise((e, r) =>
                  setTimeout(() => {
                    window.removeEventListener("message", t),
                      r("verify iframe load timeout");
                  }, (0, e8.toMiliseconds)(e8.FIVE_SECONDS))
                ),
              ]);
            }),
            (this.removeIframe = () => {
              this.iframe &&
                (this.iframe.remove(),
                (this.iframe = void 0),
                (this.initialized = !1));
            }),
            (this.getVerifyUrl = (e) => {
              let t = e || n0;
              return (
                n5.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${n0}`
                  ),
                  (t = n0)),
                t
              );
            }),
            (this.logger = r3(t, this.name)),
            (this.verifyUrl = n0),
            (this.abortController = new AbortController()),
            (this.isDevEnv = t_() && iG.env.IS_VITEST);
        }
        get context() {
          return r5(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, e8.toMiliseconds)(e)
            )
          );
        }
      }
      class sP extends is {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.context = "echo"),
            (this.registerDeviceToken = async (e) => {
              let {
                  clientId: t,
                  token: r,
                  notificationType: i,
                  enableEncrypted: n = !1,
                } = e,
                s = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await iW()(s, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: i,
                  token: r,
                  always_raw: n,
                }),
              });
            }),
            (this.logger = r3(t, this.context));
        }
      }
      var sO = Object.defineProperty,
        sC = Object.getOwnPropertySymbols,
        sA = Object.prototype.hasOwnProperty,
        sx = Object.prototype.propertyIsEnumerable,
        sN = (e, t, r) =>
          t in e
            ? sO(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        sR = (e, t) => {
          for (var r in t || (t = {})) sA.call(t, r) && sN(e, r, t[r]);
          if (sC) for (var r of sC(t)) sx.call(t, r) && sN(e, r, t[r]);
          return e;
        };
      class sT extends r2 {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = nU),
            (this.events = new m.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || nH),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : rF()(r1({ level: e?.logger || nk.logger }));
          (this.logger = r3(t, this.name)),
            (this.heartbeat = new rz.HeartBeat()),
            (this.crypto = new n6(this, this.logger, e?.keychain)),
            (this.history = new sD(this, this.logger)),
            (this.expirer = new sI(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new r$(sR(sR({}, nM), e?.storageOptions))),
            (this.relayer = new sd({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new sE(this, this.logger)),
            (this.verify = new sS(this.projectId || "", this.logger)),
            (this.echoClient = new sP(this.projectId || "", this.logger));
        }
        static async init(e) {
          let t = new sT(e);
          await t.initialize();
          let r = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t;
        }
        get context() {
          return r5(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      let sj = "client",
        sU = `wc@2:${sj}:`,
        sL = { name: sj, logger: "error" },
        sk = "WALLETCONNECT_DEEPLINK_CHOICE",
        sM = "Proposal expired",
        sq = e8.SEVEN_DAYS,
        s$ = {
          wc_sessionPropose: {
            req: { ttl: e8.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: e8.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: e8.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: e8.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: e8.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: e8.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: e8.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: e8.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: e8.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: e8.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: e8.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: e8.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: e8.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: e8.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: e8.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: e8.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        sz = { min: e8.FIVE_MINUTES, max: e8.SEVEN_DAYS },
        sH = { idle: "IDLE", active: "ACTIVE" },
        sF = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var sV = Object.defineProperty,
        sK = Object.defineProperties,
        sB = Object.getOwnPropertyDescriptors,
        sW = Object.getOwnPropertySymbols,
        sG = Object.prototype.hasOwnProperty,
        sY = Object.prototype.propertyIsEnumerable,
        sJ = (e, t, r) =>
          t in e
            ? sV(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        sQ = (e, t) => {
          for (var r in t || (t = {})) sG.call(t, r) && sJ(e, r, t[r]);
          if (sW) for (var r of sW(t)) sY.call(t, r) && sJ(e, r, t[r]);
          return e;
        },
        sX = (e, t) => sK(e, sB(t));
      class sZ extends ia {
        constructor(e) {
          super(e),
            (this.name = "engine"),
            (this.events = new (b())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [1]),
            (this.requestQueue = { state: sH.idle, queue: [] }),
            (this.sessionRequestQueue = { state: sH.idle, queue: [] }),
            (this.requestQueueDelay = e8.ONE_SECOND),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                this.client.core.pairing.register({ methods: Object.keys(s$) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, e8.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (e) => {
              await this.isInitialized();
              let t = sX(sQ({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              let {
                  pairingTopic: r,
                  requiredNamespaces: i,
                  optionalNamespaces: n,
                  sessionProperties: s,
                  relays: o,
                } = t,
                a = r,
                c,
                u = !1;
              if (
                (a && (u = this.client.core.pairing.pairings.get(a).active),
                !a || !u)
              ) {
                let { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (a = e), (c = t);
              }
              let h = await this.client.core.crypto.generateKeyPair(),
                l = s$.wc_sessionPropose.req.ttl || e8.FIVE_MINUTES,
                f = tN(l),
                p = sQ(
                  {
                    requiredNamespaces: i,
                    optionalNamespaces: n,
                    relays: o ?? [{ protocol: "irn" }],
                    proposer: { publicKey: h, metadata: this.client.metadata },
                    expiryTimestamp: f,
                  },
                  s && { sessionProperties: s }
                ),
                { reject: d, resolve: g, done: y } = tO(l, sM);
              if (
                (this.events.once(
                  tT("session_connect"),
                  async ({ error: e, session: t }) => {
                    if (e) d(e);
                    else if (t) {
                      t.self.publicKey = h;
                      let e = sX(sQ({}, t), {
                        requiredNamespaces: p.requiredNamespaces,
                        optionalNamespaces: p.optionalNamespaces,
                      });
                      await this.client.session.set(t.topic, e),
                        await this.setExpiry(t.topic, t.expiry),
                        a &&
                          (await this.client.core.pairing.updateMetadata({
                            topic: a,
                            metadata: t.peer.metadata,
                          })),
                        g(e);
                    }
                  }
                ),
                !a)
              ) {
                let { message: e } = t0(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${a}`
                );
                throw Error(e);
              }
              let v = await this.sendRequest({
                topic: a,
                method: "wc_sessionPropose",
                params: p,
                throwOnFailedPublish: !0,
              });
              return (
                await this.setProposal(v, sQ({ id: v }, p)),
                { uri: c, approval: y }
              );
            }),
            (this.pair = async (e) => (
              await this.isInitialized(), await this.client.core.pairing.pair(e)
            )),
            (this.approve = async (e) => {
              await this.isInitialized(), await this.isValidApprove(e);
              let {
                  id: t,
                  relayProtocol: r,
                  namespaces: i,
                  sessionProperties: n,
                } = e,
                {
                  pairingTopic: s,
                  proposer: o,
                  requiredNamespaces: a,
                  optionalNamespaces: c,
                } = this.client.proposal.get(t);
              s = s || "";
              let u = await this.client.core.crypto.generateKeyPair(),
                h = o.publicKey,
                l = await this.client.core.crypto.generateSharedKey(u, h);
              s &&
                t &&
                (await this.client.core.pairing.updateMetadata({
                  topic: s,
                  metadata: o.metadata,
                }),
                await this.sendResult({
                  id: t,
                  topic: s,
                  result: {
                    relay: { protocol: r ?? "irn" },
                    responderPublicKey: u,
                  },
                }),
                await this.client.proposal.delete(t, t1("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: s }));
              let f = sQ(
                {
                  relay: { protocol: r ?? "irn" },
                  namespaces: i,
                  pairingTopic: s,
                  controller: { publicKey: u, metadata: this.client.metadata },
                  expiry: tN(sq),
                },
                n && { sessionProperties: n }
              );
              await this.client.core.relayer.subscribe(l);
              let p = sX(sQ({}, f), {
                topic: l,
                requiredNamespaces: a,
                optionalNamespaces: c,
                pairingTopic: s,
                acknowledged: !1,
                self: f.controller,
                peer: { publicKey: o.publicKey, metadata: o.metadata },
                controller: u,
              });
              await this.client.session.set(l, p);
              try {
                await this.sendRequest({
                  topic: l,
                  method: "wc_sessionSettle",
                  params: f,
                  throwOnFailedPublish: !0,
                });
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(l, t1("USER_DISCONNECTED")),
                  await this.client.core.relayer.unsubscribe(l),
                  e)
                );
              }
              return (
                await this.setExpiry(l, tN(sq)),
                {
                  topic: l,
                  acknowledged: () =>
                    new Promise((e) =>
                      setTimeout(() => e(this.client.session.get(l)), 500)
                    ),
                }
              );
            }),
            (this.reject = async (e) => {
              await this.isInitialized(), await this.isValidReject(e);
              let { id: t, reason: r } = e,
                { pairingTopic: i } = this.client.proposal.get(t);
              i &&
                (await this.sendError(t, i, r),
                await this.client.proposal.delete(t, t1("USER_DISCONNECTED")));
            }),
            (this.update = async (e) => {
              await this.isInitialized(), await this.isValidUpdate(e);
              let { topic: t, namespaces: r } = e,
                i = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: r },
                }),
                { done: n, resolve: s, reject: o } = tO();
              return (
                this.events.once(tT("session_update", i), ({ error: e }) => {
                  e ? o(e) : s();
                }),
                await this.client.session.update(t, { namespaces: r }),
                { acknowledged: n }
              );
            }),
            (this.extend = async (e) => {
              await this.isInitialized(), await this.isValidExtend(e);
              let { topic: t } = e,
                r = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                }),
                { done: i, resolve: n, reject: s } = tO();
              return (
                this.events.once(tT("session_extend", r), ({ error: e }) => {
                  e ? s(e) : n();
                }),
                await this.setExpiry(t, tN(sq)),
                { acknowledged: i }
              );
            }),
            (this.request = async (e) => {
              await this.isInitialized(), await this.isValidRequest(e);
              let {
                  chainId: t,
                  request: r,
                  topic: i,
                  expiry: n = s$.wc_sessionRequest.req.ttl,
                } = e,
                s = iD(),
                {
                  done: o,
                  resolve: a,
                  reject: c,
                } = tO(n, "Request expired. Please try again.");
              return (
                this.events.once(
                  tT("session_request", s),
                  ({ error: e, result: t }) => {
                    e ? c(e) : a(t);
                  }
                ),
                await Promise.all([
                  new Promise(async (e) => {
                    await this.sendRequest({
                      clientRpcId: s,
                      topic: i,
                      method: "wc_sessionRequest",
                      params: {
                        request: sX(sQ({}, r), { expiryTimestamp: tN(n) }),
                        chainId: t,
                      },
                      expiry: n,
                      throwOnFailedPublish: !0,
                    }).catch((e) => c(e)),
                      this.client.events.emit("session_request_sent", {
                        topic: i,
                        request: r,
                        chainId: t,
                        id: s,
                      }),
                      e();
                  }),
                  new Promise(async (e) => {
                    tU({
                      id: s,
                      topic: i,
                      wcDeepLink: await tL(this.client.core.storage, sk),
                    }),
                      e();
                  }),
                  o(),
                ]).then((e) => e[2])
              );
            }),
            (this.respond = async (e) => {
              await this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: r } = e,
                { id: i } = r;
              ik(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                  })
                : iM(r) && (await this.sendError(i, t, r.error)),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              await this.isInitialized(), await this.isValidPing(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = await this.sendRequest({
                    topic: t,
                    method: "wc_sessionPing",
                    params: {},
                  }),
                  { done: r, resolve: i, reject: n } = tO();
                this.events.once(tT("session_ping", e), ({ error: e }) => {
                  e ? n(e) : i();
                }),
                  await r();
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              await this.isInitialized(), await this.isValidEmit(e);
              let { topic: t, event: r, chainId: i } = e;
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: r, chainId: i },
              });
            }),
            (this.disconnect = async (e) => {
              await this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: t1("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = t0(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  let { requiredNamespaces: r } = t,
                    i = Object.keys(e.namespaces),
                    n = Object.keys(r),
                    s = !0;
                  return (
                    !!tI(n, i) &&
                    (i.forEach((t) => {
                      let {
                          accounts: i,
                          methods: n,
                          events: o,
                        } = e.namespaces[t],
                        a = tY(i),
                        c = r[t];
                      (tI(tr(t, c), a) &&
                        tI(c.methods, n) &&
                        tI(c.events, o)) ||
                        (s = !1);
                    }),
                    s)
                  );
                })(t, e)
              )
            )),
            (this.getPendingSessionRequests = () =>
              this.client.pendingRequest.getAll()),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var i, n;
                        return (
                          (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                          (null == (n = r.peerMetadata) ? void 0 : n.url) ===
                            e.peer.metadata.url &&
                          r.topic &&
                          r.topic !== t.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      r.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e) => {
              let {
                  topic: t,
                  expirerHasDeleted: r = !1,
                  emitEvent: i = !0,
                  id: n = 0,
                } = e,
                { self: s } = this.client.session.get(t);
              await this.client.core.relayer.unsubscribe(t),
                await this.client.session.delete(t, t1("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(s.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(s.publicKey)),
                this.client.core.crypto.keychain.has(t) &&
                  (await this.client.core.crypto.deleteSymKey(t)),
                r || this.client.core.expirer.del(t),
                this.client.core.storage
                  .removeItem(sk)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === t &&
                    this.deletePendingSessionRequest(
                      e.id,
                      t1("USER_DISCONNECTED")
                    );
                }),
                i &&
                  this.client.events.emit("session_delete", {
                    id: n,
                    topic: t,
                  });
            }),
            (this.deleteProposal = async (e, t) => {
              await Promise.all([
                this.client.proposal.delete(e, t1("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.deletePendingSessionRequest = async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                r &&
                  ((this.sessionRequestQueue.state = sH.idle),
                  this.client.events.emit("session_request_expire", { id: e }));
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (await this.client.session.update(e, { expiry: t })),
                this.client.core.expirer.set(e, t);
            }),
            (this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t),
                this.client.core.expirer.set(
                  e,
                  tN(s$.wc_sessionPropose.req.ttl)
                );
            }),
            (this.setPendingSessionRequest = async (e) => {
              let { id: t, topic: r, params: i, verifyContext: n } = e,
                s =
                  i.request.expiryTimestamp || tN(s$.wc_sessionRequest.req.ttl);
              await this.client.pendingRequest.set(t, {
                id: t,
                topic: r,
                params: i,
                verifyContext: n,
              }),
                s && this.client.core.expirer.set(t, s);
            }),
            (this.sendRequest = async (e) => {
              let {
                  topic: t,
                  method: r,
                  params: i,
                  expiry: n,
                  relayRpcId: s,
                  clientRpcId: o,
                  throwOnFailedPublish: a,
                } = e,
                c = iS(r, i, o);
              if (tE() && sF.includes(r)) {
                let e = tc(JSON.stringify(c));
                this.client.core.verify.register({ attestationId: e });
              }
              let u = await this.client.core.crypto.encode(t, c),
                h = s$[r].req;
              return (
                n && (h.ttl = n),
                s && (h.id = s),
                this.client.core.history.set(t, c),
                a
                  ? ((h.internal = sX(sQ({}, h.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(t, u, h))
                  : this.client.core.relayer
                      .publish(t, u, h)
                      .catch((e) => this.client.logger.error(e)),
                c.id
              );
            }),
            (this.sendResult = async (e) => {
              let { id: t, topic: r, result: i, throwOnFailedPublish: n } = e,
                s = iP(t, i),
                o = await this.client.core.crypto.encode(r, s),
                a =
                  s$[(await this.client.core.history.get(r, t)).request.method]
                    .res;
              n
                ? ((a.internal = sX(sQ({}, a.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(r, o, a))
                : this.client.core.relayer
                    .publish(r, o, a)
                    .catch((e) => this.client.logger.error(e)),
                await this.client.core.history.resolve(s);
            }),
            (this.sendError = async (e, t, r) => {
              let i = iO(e, r),
                n = await this.client.core.crypto.encode(t, i),
                s =
                  s$[(await this.client.core.history.get(t, e)).request.method]
                    .res;
              this.client.core.relayer.publish(t, n, s),
                await this.client.core.history.resolve(i);
            }),
            (this.cleanup = async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let r = !1;
                tR(t.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (r = !0),
                  r && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  tR(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state === sH.active) {
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = sH.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    this.processRequest(e),
                      await new Promise((e) => setTimeout(e, 300));
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = sH.idle;
            }),
            (this.processRequest = (e) => {
              let { topic: t, payload: r } = e,
                i = r.method;
              switch (i) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(t, r);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequest(t, r);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${i}`
                  );
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.client.core.history.get(t, r.id)).request
                  .method;
              switch (i) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${i}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              let { topic: t } = e,
                { message: r } = t0(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(r);
            }),
            (this.onSessionProposeRequest = async (e, t) => {
              let { params: r, id: i } = t;
              try {
                this.isValidConnect(sQ({}, t.params));
                let n = r.expiryTimestamp || tN(s$.wc_sessionPropose.req.ttl),
                  s = sQ({ id: i, pairingTopic: e, expiryTimestamp: n }, r);
                await this.setProposal(i, s);
                let o = tc(JSON.stringify(t)),
                  a = await this.getVerifyContext(o, s.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: i,
                  params: s,
                  verifyContext: a,
                });
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionProposeResponse = async (e, t) => {
              let { id: r } = t;
              if (ik(t)) {
                let { result: i } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: i,
                });
                let n = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n,
                });
                let s = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: s,
                });
                let o = i.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                let a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                let c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else
                iM(t) &&
                  (await this.client.proposal.delete(
                    r,
                    t1("USER_DISCONNECTED")
                  ),
                  this.events.emit(tT("session_connect"), { error: t.error }));
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                let {
                    relay: r,
                    controller: n,
                    expiry: s,
                    namespaces: o,
                    sessionProperties: a,
                    pairingTopic: c,
                  } = t.params,
                  u = sQ(
                    {
                      topic: e,
                      relay: r,
                      expiry: s,
                      namespaces: o,
                      acknowledged: !0,
                      pairingTopic: c,
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      controller: n.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: n.publicKey, metadata: n.metadata },
                    },
                    a && { sessionProperties: a }
                  );
                await this.sendResult({ id: t.id, topic: e, result: !0 }),
                  this.events.emit(tT("session_connect"), { session: u }),
                  this.cleanupDuplicatePairings(u);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              let { id: r } = t;
              ik(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(tT("session_approve", r), {}))
                : iM(t) &&
                  (await this.client.session.delete(e, t1("USER_DISCONNECTED")),
                  this.events.emit(tT("session_approve", r), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              let { params: r, id: i } = t;
              try {
                let t = `${e}_session_update`,
                  n = ru.get(t);
                if (n && this.isRequestOutOfSync(n, i)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${i}`
                  );
                  return;
                }
                this.isValidUpdate(sQ({ topic: e }, r)),
                  await this.client.session.update(e, {
                    namespaces: r.namespaces,
                  }),
                  await this.sendResult({ id: i, topic: e, result: !0 }),
                  this.client.events.emit("session_update", {
                    id: i,
                    topic: e,
                    params: r,
                  }),
                  ru.set(t, i);
              } catch (t) {
                await this.sendError(i, e, t), this.client.logger.error(t);
              }
            }),
            (this.isRequestOutOfSync = (e, t) =>
              parseInt(t.toString().slice(0, -3)) <=
              parseInt(e.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (e, t) => {
              let { id: r } = t;
              ik(t)
                ? this.events.emit(tT("session_update", r), {})
                : iM(t) &&
                  this.events.emit(tT("session_update", r), { error: t.error });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, tN(sq)),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              let { id: r } = t;
              ik(t)
                ? this.events.emit(tT("session_extend", r), {})
                : iM(t) &&
                  this.events.emit(tT("session_extend", r), { error: t.error });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                ik(t)
                  ? this.events.emit(tT("session_ping", r), {})
                  : iM(t) &&
                    this.events.emit(tT("session_ping", r), { error: t.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  await Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(nV.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: r }));
                      });
                    }),
                    this.sendResult({ id: r, topic: e, result: !0 }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: t1("USER_DISCONNECTED"),
                    }),
                  ]);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidRequest(sQ({ topic: e }, i));
                let t = tc(JSON.stringify(iS("wc_sessionRequest", i, r))),
                  n = this.client.session.get(e),
                  s = await this.getVerifyContext(t, n.peer.metadata),
                  o = { id: r, topic: e, params: i, verifyContext: s };
                await this.setPendingSessionRequest(o),
                  this.addSessionRequestToSessionRequestQueue(o),
                  this.processSessionRequestQueue();
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              let { id: r } = t;
              ik(t)
                ? this.events.emit(tT("session_request", r), {
                    result: t.result,
                  })
                : iM(t) &&
                  this.events.emit(tT("session_request", r), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              let { id: r, params: i } = t;
              try {
                let t = `${e}_session_event_${i.event.name}`,
                  n = ru.get(t);
                if (n && this.isRequestOutOfSync(n, r)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  );
                  return;
                }
                this.isValidEmit(sQ({ topic: e }, i)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: i,
                  }),
                  ru.set(t, r);
              } catch (t) {
                await this.sendError(r, e, t), this.client.logger.error(t);
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = sH.idle),
                    this.processSessionRequestQueue();
                }, (0, e8.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.cleanupPendingSentRequestsForTopic = ({
              topic: e,
              error: t,
            }) => {
              let r = this.client.core.history.pending;
              r?.length > 0 &&
                r
                  .filter(
                    (t) =>
                      t.topic === e && "wc_sessionRequest" === t.request.method
                  )
                  .forEach((e) => {
                    this.events.emit(tT("session_request", e.request.id), {
                      error: t,
                    });
                  });
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === sH.active) {
                this.client.logger.info(
                  "session request queue is already active."
                );
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info("session request queue is empty.");
                return;
              }
              try {
                (this.sessionRequestQueue.state = sH.active),
                  this.client.events.emit("session_request", e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onPairingCreated = (e) => {
              if (e.active) return;
              let t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest(
                  e.topic,
                  iS(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                    },
                    t.id
                  )
                );
            }),
            (this.isValidConnect = async (e) => {
              let t;
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: r,
                requiredNamespaces: i,
                optionalNamespaces: n,
                sessionProperties: s,
                relays: o,
              } = e;
              if (
                (t6(r) || (await this.isValidPairingTopic(r)),
                (t = !1),
                o
                  ? o &&
                    t5(o) &&
                    o.length &&
                    o.forEach((e) => {
                      t = rt(e);
                    })
                  : (t = !0),
                !t)
              ) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${o}`
                );
                throw Error(e);
              }
              t6(i) ||
                0 === t3(i) ||
                this.validateNamespaces(i, "requiredNamespaces"),
                t6(n) ||
                  0 === t3(n) ||
                  this.validateNamespaces(n, "optionalNamespaces"),
                t6(s) || this.validateSessionProps(s, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              let r = (function (e, t, r) {
                let i = null;
                if (e && t3(e)) {
                  let n;
                  let s = t7(e, t);
                  s && (i = s);
                  let o =
                    ((n = null),
                    Object.entries(e).forEach(([e, i]) => {
                      var s, o;
                      let a;
                      if (n) return;
                      let c =
                        ((s = tr(e, i)),
                        (o = `${t} ${r}`),
                        (a = null),
                        t5(s) && s.length
                          ? s.forEach((e) => {
                              a ||
                                t4(e) ||
                                (a = t1(
                                  "UNSUPPORTED_CHAINS",
                                  `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : t4(e) ||
                            (a = t1(
                              "UNSUPPORTED_CHAINS",
                              `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        a);
                      c && (n = c);
                    }),
                    n);
                  o && (i = o);
                } else
                  i = t0(
                    "MISSING_OR_INVALID",
                    `${t}, ${r} should be an object with data`
                  );
                return i;
              })(e, "connect()", t);
              if (r) throw Error(r.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!rr(e))
                throw Error(
                  t0("MISSING_OR_INVALID", `approve() params: ${e}`).message
                );
              let {
                id: t,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: n,
              } = e;
              await this.isValidProposalId(t);
              let s = this.client.proposal.get(t),
                o = re(r, "approve()");
              if (o) throw Error(o.message);
              let a = rn(s.requiredNamespaces, r, "approve()");
              if (a) throw Error(a.message);
              if (!t2(i, !0)) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${i}`
                );
                throw Error(e);
              }
              t6(n) || this.validateSessionProps(n, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(t);
              }
              let { id: t, reason: r } = e;
              if (
                (await this.isValidProposalId(t),
                !r ||
                  "object" != typeof r ||
                  !r.code ||
                  !t8(r.code, !1) ||
                  !r.message ||
                  !t2(r.message, !1))
              ) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              let t;
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: r, controller: i, namespaces: n, expiry: s } = e;
              if (!rt(r)) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let o =
                ((t = null),
                t2(i?.publicKey, !1) ||
                  (t = t0(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() controller public key should be a string"
                  )),
                t);
              if (o) throw Error(o.message);
              let a = re(n, "onSessionSettleRequest()");
              if (a) throw Error(a.message);
              if (tR(s)) {
                let { message: e } = t0("EXPIRED", "onSessionSettleRequest()");
                throw Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, namespaces: r } = e;
              await this.isValidSessionTopic(t);
              let i = this.client.session.get(t),
                n = re(r, "update()");
              if (n) throw Error(n.message);
              let s = rn(i.requiredNamespaces, r, "update()");
              if (s) throw Error(s.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              var t;
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: r, request: i, chainId: n, expiry: s } = e;
              await this.isValidSessionTopic(r);
              let { namespaces: o } = this.client.session.get(r);
              if (!ri(o, n)) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${n}`
                );
                throw Error(e);
              }
              if (t6(i) || !t2(i.method, !1)) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (
                !(
                  t2((t = i.method), !1) &&
                  (function (e, t) {
                    let r = [];
                    return (
                      Object.values(e).forEach((e) => {
                        tY(e.accounts).includes(t) && r.push(...e.methods);
                      }),
                      r
                    );
                  })(o, n).includes(t)
                )
              ) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `request() method: ${i.method}`
                );
                throw Error(e);
              }
              if (s && (!t8(s, !1) || !(s <= sz.max) || !(s >= sz.min))) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${s}. Expiry must be a number (in seconds) between ${sz.min} and ${sz.max}`
                );
                throw Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              var t;
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: r, response: i } = e;
              try {
                await this.isValidSessionTopic(r);
              } catch (r) {
                throw (
                  (null != (t = e?.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  r)
                );
              }
              if (
                t6(i) ||
                (t6(i.result) && t6(i.error)) ||
                !t8(i.id, !1) ||
                !t2(i.jsonrpc, !1)
              ) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              var t;
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: r, event: i, chainId: n } = e;
              await this.isValidSessionTopic(r);
              let { namespaces: s } = this.client.session.get(r);
              if (!ri(s, n)) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${n}`
                );
                throw Error(e);
              }
              if (t6(i) || !t2(i.name, !1)) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (
                !(
                  t2((t = i.name), !1) &&
                  (function (e, t) {
                    let r = [];
                    return (
                      Object.values(e).forEach((e) => {
                        tY(e.accounts).includes(t) && r.push(...e.events);
                      }),
                      r
                    );
                  })(s, n).includes(t)
                )
              ) {
                let { message: e } = t0(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!rr(e)) {
                let { message: t } = t0(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.getVerifyContext = async (e, t) => {
              let r = {
                verified: {
                  verifyUrl: t.verifyUrl || n0,
                  validation: "UNKNOWN",
                  origin: t.url || "",
                },
              };
              try {
                let i = await this.client.core.verify.resolve({
                  attestationId: e,
                  verifyUrl: t.verifyUrl,
                });
                i &&
                  ((r.verified.origin = i.origin),
                  (r.verified.isScam = i.isScam),
                  (r.verified.validation =
                    i.origin === new URL(t.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.info(e);
              }
              return (
                this.client.logger.info(`Verify context: ${JSON.stringify(r)}`),
                r
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!t2(e, !1)) {
                  let { message: r } = t0(
                    "MISSING_OR_INVALID",
                    `${t} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e
                    )}`
                  );
                  throw Error(r);
                }
              });
            });
        }
        async isInitialized() {
          if (!this.initialized) {
            let { message: e } = t0("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(nV.message, async (e) => {
            let { topic: t, message: r } = e;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(r)
              )
            )
              return;
            let i = await this.client.core.crypto.decode(t, r);
            try {
              iU(i)
                ? (this.client.core.history.set(t, i),
                  this.onRelayEventRequest({ topic: t, payload: i }))
                : iL(i)
                ? (await this.client.core.history.resolve(i),
                  await this.onRelayEventResponse({ topic: t, payload: i }),
                  this.client.core.history.delete(t, i.id))
                : this.onRelayEventUnknownPayload({ topic: t, payload: i });
            } catch (e) {
              this.client.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(nX.expired, async (e) => {
            let { topic: t, id: r } = tx(e.target);
            if (r && this.client.pendingRequest.keys.includes(r))
              return await this.deletePendingSessionRequest(
                r,
                t0("EXPIRED"),
                !0
              );
            t
              ? this.client.session.keys.includes(t) &&
                (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
                this.client.events.emit("session_expire", { topic: t }))
              : r &&
                (await this.deleteProposal(r, !0),
                this.client.events.emit("proposal_expire", { id: r }));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(nJ.create, (e) =>
            this.onPairingCreated(e)
          );
        }
        isValidPairingTopic(e) {
          if (!t2(e, !1)) {
            let { message: t } = t0(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = t0(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (tR(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = t0("EXPIRED", `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!t2(e, !1)) {
            let { message: t } = t0(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.session.keys.includes(e)) {
            let { message: t } = t0(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (tR(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = t0("EXPIRED", `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = t0(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
          else if (t2(e, !1)) {
            let { message: t } = t0(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = t0(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            let { message: t } = t0(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = t0(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (tR(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = t0("EXPIRED", `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class s0 extends sw {
        constructor(e, t) {
          super(e, t, "proposal", sU), (this.core = e), (this.logger = t);
        }
      }
      class s1 extends sw {
        constructor(e, t) {
          super(e, t, "session", sU), (this.core = e), (this.logger = t);
        }
      }
      class s5 extends sw {
        constructor(e, t) {
          super(e, t, "request", sU, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class s3 extends io {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = sL.name),
            (this.events = new m.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || sL.name),
            (this.metadata = e?.metadata ||
              (0, e9.D)() || {
                name: "",
                description: "",
                url: "",
                icons: [""],
              });
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : rF()(r1({ level: e?.logger || sL.logger }));
          (this.core = e?.core || new sT(e)),
            (this.logger = r3(t, this.name)),
            (this.session = new s1(this.core, this.logger)),
            (this.proposal = new s0(this.core, this.logger)),
            (this.pendingRequest = new s5(this.core, this.logger)),
            (this.engine = new sZ(this));
        }
        static async init(e) {
          let t = new s3(e);
          return await t.initialize(), t;
        }
        get context() {
          return r5(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var s6 = r(89031),
        s2 = r.n(s6);
      let s8 = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class s4 {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new m.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !iR(e))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(e, t) {
          this.isAvailable || (await this.register());
          try {
            let t = rN(e),
              r = await s2()(
                this.url,
                Object.assign(Object.assign({}, s8), { body: t })
              ),
              i = await r.json();
            this.onPayload({ data: i });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register(e = this.url) {
          if (!iR(e))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), void 0 === this.isAvailable))
                      return t(Error("HTTP connection is missing or invalid"));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let t = rN({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
              await s2()(e, Object.assign(Object.assign({}, s8), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            let e = this.parseError(t);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if (void 0 === e.data) return;
          let t = "string" == typeof e.data ? rx(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = iO(e, r.message || r.toString());
          this.events.emit("payload", i);
        }
        parseError(e, t = this.url) {
          return iw(e, t, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      let s9 = "error",
        s7 = "wc@2:universal_provider:",
        oe = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      var ot =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof r.g
            ? r.g
            : "u" > typeof self
            ? self
            : {},
        or = { exports: {} };
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ !(function (e, t) {
        (function () {
          var r,
            i = "Expected a function",
            n = "__lodash_hash_undefined__",
            s = "__lodash_placeholder__",
            o = 1 / 0,
            a = 0 / 0,
            c = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            u = "[object Arguments]",
            h = "[object Array]",
            l = "[object Boolean]",
            f = "[object Date]",
            p = "[object Error]",
            d = "[object Function]",
            g = "[object GeneratorFunction]",
            y = "[object Map]",
            v = "[object Number]",
            m = "[object Object]",
            b = "[object Promise]",
            _ = "[object RegExp]",
            w = "[object Set]",
            E = "[object String]",
            D = "[object Symbol]",
            I = "[object WeakMap]",
            S = "[object ArrayBuffer]",
            P = "[object DataView]",
            O = "[object Float32Array]",
            C = "[object Float64Array]",
            A = "[object Int8Array]",
            x = "[object Int16Array]",
            N = "[object Int32Array]",
            R = "[object Uint8Array]",
            T = "[object Uint8ClampedArray]",
            j = "[object Uint16Array]",
            U = "[object Uint32Array]",
            L = /\b__p \+= '';/g,
            k = /\b(__p \+=) '' \+/g,
            M = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            q = /&(?:amp|lt|gt|quot|#39);/g,
            $ = /[&<>"']/g,
            z = RegExp(q.source),
            H = RegExp($.source),
            F = /<%-([\s\S]+?)%>/g,
            V = /<%([\s\S]+?)%>/g,
            K = /<%=([\s\S]+?)%>/g,
            B = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            W = /^\w*$/,
            G =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Y = /[\\^$.*+?()[\]{}|]/g,
            J = RegExp(Y.source),
            Q = /^\s+/,
            X = /\s/,
            Z = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
            et = /,? & /,
            er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ei = /[()=,{}\[\]\/\s]/,
            en = /\\(\\)?/g,
            es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            eo = /\w*$/,
            ea = /^[-+]0x[0-9a-f]+$/i,
            ec = /^0b[01]+$/i,
            eu = /^\[object .+?Constructor\]$/,
            eh = /^0o[0-7]+$/i,
            el = /^(?:0|[1-9]\d*)$/,
            ef = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            ep = /($^)/,
            ed = /['\n\r\u2028\u2029\\]/g,
            eg = "\ud800-\udfff",
            ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            ev = "\\u2700-\\u27bf",
            em = "a-z\\xdf-\\xf6\\xf8-\\xff",
            eb = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            e_ = "\\ufe0e\\ufe0f",
            ew =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            eE = "['’]",
            eD = "[" + ew + "]",
            eI = "[" + ey + "]",
            eS = "[" + em + "]",
            eP = "[^" + eg + ew + "\\d+" + ev + em + eb + "]",
            eO = "\ud83c[\udffb-\udfff]",
            eC = "[^" + eg + "]",
            eA = "(?:\ud83c[\udde6-\uddff]){2}",
            ex = "[\ud800-\udbff][\udc00-\udfff]",
            eN = "[" + eb + "]",
            eR = "\\u200d",
            eT = "(?:" + eS + "|" + eP + ")",
            ej = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
            eU = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
            eL = "(?:" + eI + "|" + eO + ")?",
            ek = "[" + e_ + "]?",
            eM =
              "(?:" +
              eR +
              "(?:" +
              [eC, eA, ex].join("|") +
              ")" +
              ek +
              eL +
              ")*",
            eq = ek + eL + eM,
            e$ = "(?:" + ["[" + ev + "]", eA, ex].join("|") + ")" + eq,
            ez =
              "(?:" +
              [eC + eI + "?", eI, eA, ex, "[" + eg + "]"].join("|") +
              ")",
            eH = RegExp(eE, "g"),
            eF = RegExp(eI, "g"),
            eV = RegExp(eO + "(?=" + eO + ")|" + ez + eq, "g"),
            eK = RegExp(
              [
                eN +
                  "?" +
                  eS +
                  "+" +
                  ej +
                  "(?=" +
                  [eD, eN, "$"].join("|") +
                  ")",
                "(?:" +
                  eN +
                  "|" +
                  eP +
                  ")+" +
                  eU +
                  "(?=" +
                  [eD, eN + eT, "$"].join("|") +
                  ")",
                eN + "?" + eT + "+" + ej,
                eN + "+" + eU,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                "\\d+",
                e$,
              ].join("|"),
              "g"
            ),
            eB = RegExp("[" + eR + eg + ey + e_ + "]"),
            eW =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            eG = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            eY = -1,
            eJ = {};
          (eJ[O] =
            eJ[C] =
            eJ[A] =
            eJ[x] =
            eJ[N] =
            eJ[R] =
            eJ[T] =
            eJ[j] =
            eJ[U] =
              !0),
            (eJ[u] =
              eJ[h] =
              eJ[S] =
              eJ[l] =
              eJ[P] =
              eJ[f] =
              eJ[p] =
              eJ[d] =
              eJ[y] =
              eJ[v] =
              eJ[m] =
              eJ[_] =
              eJ[w] =
              eJ[E] =
              eJ[I] =
                !1);
          var eQ = {};
          (eQ[u] =
            eQ[h] =
            eQ[S] =
            eQ[P] =
            eQ[l] =
            eQ[f] =
            eQ[O] =
            eQ[C] =
            eQ[A] =
            eQ[x] =
            eQ[N] =
            eQ[y] =
            eQ[v] =
            eQ[m] =
            eQ[_] =
            eQ[w] =
            eQ[E] =
            eQ[D] =
            eQ[R] =
            eQ[T] =
            eQ[j] =
            eQ[U] =
              !0),
            (eQ[p] = eQ[d] = eQ[I] = !1);
          var eX = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            eZ = parseFloat,
            e0 = parseInt,
            e1 = "object" == typeof ot && ot && ot.Object === Object && ot,
            e5 =
              "object" == typeof self && self && self.Object === Object && self,
            e3 = e1 || e5 || Function("return this")(),
            e6 = t && !t.nodeType && t,
            e2 = e6 && e && !e.nodeType && e,
            e8 = e2 && e2.exports === e6,
            e4 = e8 && e1.process,
            e9 = (function () {
              try {
                return (
                  (e2 && e2.require && e2.require("util").types) ||
                  (e4 && e4.binding && e4.binding("util"))
                );
              } catch {}
            })(),
            e7 = e9 && e9.isArrayBuffer,
            te = e9 && e9.isDate,
            tt = e9 && e9.isMap,
            tr = e9 && e9.isRegExp,
            ti = e9 && e9.isSet,
            tn = e9 && e9.isTypedArray;
          function ts(e, t, r) {
            switch (r.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, r[0]);
              case 2:
                return e.call(t, r[0], r[1]);
              case 3:
                return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
          }
          function to(e, t, r, i) {
            for (var n = -1, s = null == e ? 0 : e.length; ++n < s; ) {
              var o = e[n];
              t(i, o, r(o), e);
            }
            return i;
          }
          function ta(e, t) {
            for (
              var r = -1, i = null == e ? 0 : e.length;
              ++r < i && !1 !== t(e[r], r, e);

            );
            return e;
          }
          function tc(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
              if (!t(e[r], r, e)) return !1;
            return !0;
          }
          function tu(e, t) {
            for (
              var r = -1, i = null == e ? 0 : e.length, n = 0, s = [];
              ++r < i;

            ) {
              var o = e[r];
              t(o, r, e) && (s[n++] = o);
            }
            return s;
          }
          function th(e, t) {
            return !!(null == e ? 0 : e.length) && t_(e, t, 0) > -1;
          }
          function tl(e, t, r) {
            for (var i = -1, n = null == e ? 0 : e.length; ++i < n; )
              if (r(t, e[i])) return !0;
            return !1;
          }
          function tf(e, t) {
            for (
              var r = -1, i = null == e ? 0 : e.length, n = Array(i);
              ++r < i;

            )
              n[r] = t(e[r], r, e);
            return n;
          }
          function tp(e, t) {
            for (var r = -1, i = t.length, n = e.length; ++r < i; )
              e[n + r] = t[r];
            return e;
          }
          function td(e, t, r, i) {
            var n = -1,
              s = null == e ? 0 : e.length;
            for (i && s && (r = e[++n]); ++n < s; ) r = t(r, e[n], n, e);
            return r;
          }
          function tg(e, t, r, i) {
            var n = null == e ? 0 : e.length;
            for (i && n && (r = e[--n]); n--; ) r = t(r, e[n], n, e);
            return r;
          }
          function ty(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
              if (t(e[r], r, e)) return !0;
            return !1;
          }
          var tv = tI("length");
          function tm(e, t, r) {
            var i;
            return (
              r(e, function (e, r, n) {
                if (t(e, r, n)) return (i = r), !1;
              }),
              i
            );
          }
          function tb(e, t, r, i) {
            for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n; )
              if (t(e[s], s, e)) return s;
            return -1;
          }
          function t_(e, t, r) {
            return t == t
              ? (function (e, t, r) {
                  for (var i = r - 1, n = e.length; ++i < n; )
                    if (e[i] === t) return i;
                  return -1;
                })(e, t, r)
              : tb(e, tE, r);
          }
          function tw(e, t, r, i) {
            for (var n = r - 1, s = e.length; ++n < s; )
              if (i(e[n], t)) return n;
            return -1;
          }
          function tE(e) {
            return e != e;
          }
          function tD(e, t) {
            var r = null == e ? 0 : e.length;
            return r ? tO(e, t) / r : a;
          }
          function tI(e) {
            return function (t) {
              return null == t ? r : t[e];
            };
          }
          function tS(e) {
            return function (t) {
              return null == e ? r : e[t];
            };
          }
          function tP(e, t, r, i, n) {
            return (
              n(e, function (e, n, s) {
                r = i ? ((i = !1), e) : t(r, e, n, s);
              }),
              r
            );
          }
          function tO(e, t) {
            for (var i, n = -1, s = e.length; ++n < s; ) {
              var o = t(e[n]);
              o !== r && (i = i === r ? o : i + o);
            }
            return i;
          }
          function tC(e, t) {
            for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
            return i;
          }
          function tA(e) {
            return e && e.slice(0, tK(e) + 1).replace(Q, "");
          }
          function tx(e) {
            return function (t) {
              return e(t);
            };
          }
          function tN(e, t) {
            return tf(t, function (t) {
              return e[t];
            });
          }
          function tR(e, t) {
            return e.has(t);
          }
          function tT(e, t) {
            for (var r = -1, i = e.length; ++r < i && t_(t, e[r], 0) > -1; );
            return r;
          }
          function tj(e, t) {
            for (var r = e.length; r-- && t_(t, e[r], 0) > -1; );
            return r;
          }
          var tU = tS({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            tL = tS({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function tk(e) {
            return "\\" + eX[e];
          }
          function tM(e) {
            return eB.test(e);
          }
          function tq(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e, i) {
                r[++t] = [i, e];
              }),
              r
            );
          }
          function t$(e, t) {
            return function (r) {
              return e(t(r));
            };
          }
          function tz(e, t) {
            for (var r = -1, i = e.length, n = 0, o = []; ++r < i; ) {
              var a = e[r];
              (a === t || a === s) && ((e[r] = s), (o[n++] = r));
            }
            return o;
          }
          function tH(e) {
            var t = -1,
              r = Array(e.size);
            return (
              e.forEach(function (e) {
                r[++t] = e;
              }),
              r
            );
          }
          function tF(e) {
            return tM(e)
              ? (function (e) {
                  for (var t = (eV.lastIndex = 0); eV.test(e); ) ++t;
                  return t;
                })(e)
              : tv(e);
          }
          function tV(e) {
            return tM(e) ? e.match(eV) || [] : e.split("");
          }
          function tK(e) {
            for (var t = e.length; t-- && X.test(e.charAt(t)); );
            return t;
          }
          var tB = tS({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            tW = (function e(t) {
              var X,
                eg,
                ey,
                ev,
                em = (t =
                  null == t ? e3 : tW.defaults(e3.Object(), t, tW.pick(e3, eG)))
                  .Array,
                eb = t.Date,
                e_ = t.Error,
                ew = t.Function,
                eE = t.Math,
                eD = t.Object,
                eI = t.RegExp,
                eS = t.String,
                eP = t.TypeError,
                eO = em.prototype,
                eC = ew.prototype,
                eA = eD.prototype,
                ex = t["__core-js_shared__"],
                eN = eC.toString,
                eR = eA.hasOwnProperty,
                eT = 0,
                ej = (X = /[^.]+$/.exec(
                  (ex && ex.keys && ex.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + X
                  : "",
                eU = eA.toString,
                eL = eN.call(eD),
                ek = e3._,
                eM = eI(
                  "^" +
                    eN
                      .call(eR)
                      .replace(Y, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                eq = e8 ? t.Buffer : r,
                e$ = t.Symbol,
                ez = t.Uint8Array,
                eV = eq ? eq.allocUnsafe : r,
                eB = t$(eD.getPrototypeOf, eD),
                eX = eD.create,
                e1 = eA.propertyIsEnumerable,
                e5 = eO.splice,
                e6 = e$ ? e$.isConcatSpreadable : r,
                e2 = e$ ? e$.iterator : r,
                e4 = e$ ? e$.toStringTag : r,
                e9 = (function () {
                  try {
                    var e = nd(eD, "defineProperty");
                    return e({}, "", {}), e;
                  } catch {}
                })(),
                tv = t.clearTimeout !== e3.clearTimeout && t.clearTimeout,
                tS = eb && eb.now !== e3.Date.now && eb.now,
                tG = t.setTimeout !== e3.setTimeout && t.setTimeout,
                tY = eE.ceil,
                tJ = eE.floor,
                tQ = eD.getOwnPropertySymbols,
                tX = eq ? eq.isBuffer : r,
                tZ = t.isFinite,
                t0 = eO.join,
                t1 = t$(eD.keys, eD),
                t5 = eE.max,
                t3 = eE.min,
                t6 = eb.now,
                t2 = t.parseInt,
                t8 = eE.random,
                t4 = eO.reverse,
                t9 = nd(t, "DataView"),
                t7 = nd(t, "Map"),
                re = nd(t, "Promise"),
                rt = nd(t, "Set"),
                rr = nd(t, "WeakMap"),
                ri = nd(eD, "create"),
                rn = rr && new rr(),
                rs = {},
                ro = nq(t9),
                ra = nq(t7),
                rc = nq(re),
                ru = nq(rt),
                rh = nq(rr),
                rl = e$ ? e$.prototype : r,
                rf = rl ? rl.valueOf : r,
                rp = rl ? rl.toString : r;
              function rd(e) {
                if (sB(e) && !sU(e) && !(e instanceof rm)) {
                  if (e instanceof rv) return e;
                  if (eR.call(e, "__wrapped__")) return n$(e);
                }
                return new rv(e);
              }
              var rg = (function () {
                function e() {}
                return function (t) {
                  if (!sK(t)) return {};
                  if (eX) return eX(t);
                  e.prototype = t;
                  var i = new e();
                  return (e.prototype = r), i;
                };
              })();
              function ry() {}
              function rv(e, t) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!t),
                  (this.__index__ = 0),
                  (this.__values__ = r);
              }
              function rm(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = 4294967295),
                  (this.__views__ = []);
              }
              function rb(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var i = e[t];
                  this.set(i[0], i[1]);
                }
              }
              function r_(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var i = e[t];
                  this.set(i[0], i[1]);
                }
              }
              function rw(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r; ) {
                  var i = e[t];
                  this.set(i[0], i[1]);
                }
              }
              function rE(e) {
                var t = -1,
                  r = null == e ? 0 : e.length;
                for (this.__data__ = new rw(); ++t < r; ) this.add(e[t]);
              }
              function rD(e) {
                var t = (this.__data__ = new r_(e));
                this.size = t.size;
              }
              function rI(e, t) {
                var r = sU(e),
                  i = !r && sj(e),
                  n = !r && !i && sq(e),
                  s = !r && !i && !n && s0(e),
                  o = r || i || n || s,
                  a = o ? tC(e.length, eS) : [],
                  c = a.length;
                for (var u in e)
                  (t || eR.call(e, u)) &&
                    !(
                      o &&
                      ("length" == u ||
                        (n && ("offset" == u || "parent" == u)) ||
                        (s &&
                          ("buffer" == u ||
                            "byteLength" == u ||
                            "byteOffset" == u)) ||
                        nw(u, c))
                    ) &&
                    a.push(u);
                return a;
              }
              function rS(e) {
                var t = e.length;
                return t ? e[ih(0, t - 1)] : r;
              }
              function rP(e, t, i) {
                ((i === r || sN(e[t], i)) && (i !== r || t in e)) ||
                  rN(e, t, i);
              }
              function rO(e, t, i) {
                var n = e[t];
                (eR.call(e, t) && sN(n, i) && (i !== r || t in e)) ||
                  rN(e, t, i);
              }
              function rC(e, t) {
                for (var r = e.length; r--; ) if (sN(e[r][0], t)) return r;
                return -1;
              }
              function rA(e, t, r, i) {
                return (
                  rM(e, function (e, n, s) {
                    t(i, e, r(e), s);
                  }),
                  i
                );
              }
              function rx(e, t) {
                return e && iF(t, of(t), e);
              }
              function rN(e, t, r) {
                "__proto__" == t && e9
                  ? e9(e, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: r,
                      writable: !0,
                    })
                  : (e[t] = r);
              }
              function rR(e, t) {
                for (
                  var i = -1, n = t.length, s = em(n), o = null == e;
                  ++i < n;

                )
                  s[i] = o ? r : oa(e, t[i]);
                return s;
              }
              function rT(e, t, i) {
                return (
                  e == e &&
                    (i !== r && (e = e <= i ? e : i),
                    t !== r && (e = e >= t ? e : t)),
                  e
                );
              }
              function rj(e, t, i, n, s, o) {
                var a,
                  c = 1 & t,
                  h = 2 & t,
                  p = 4 & t;
                if ((i && (a = s ? i(e, n, s, o) : i(e)), a !== r)) return a;
                if (!sK(e)) return e;
                var b = sU(e);
                if (b) {
                  if (
                    ((I = e.length),
                    (L = new e.constructor(I)),
                    I &&
                      "string" == typeof e[0] &&
                      eR.call(e, "index") &&
                      ((L.index = e.index), (L.input = e.input)),
                    (a = L),
                    !c)
                  )
                    return iH(e, a);
                } else {
                  var I,
                    L,
                    k,
                    M,
                    q,
                    $ = nv(e),
                    z = $ == d || $ == g;
                  if (sq(e)) return iL(e, c);
                  if ($ == m || $ == u || (z && !s)) {
                    if (((a = h || z ? {} : nb(e)), !c))
                      return h
                        ? ((k = (q = a) && iF(e, op(e), q)), iF(e, ny(e), k))
                        : ((M = rx(a, e)), iF(e, ng(e), M));
                  } else {
                    if (!eQ[$]) return s ? e : {};
                    a = (function (e, t, r) {
                      var i,
                        n,
                        s = e.constructor;
                      switch (t) {
                        case S:
                          return ik(e);
                        case l:
                        case f:
                          return new s(+e);
                        case P:
                          return (
                            (i = r ? ik(e.buffer) : e.buffer),
                            new e.constructor(i, e.byteOffset, e.byteLength)
                          );
                        case O:
                        case C:
                        case A:
                        case x:
                        case N:
                        case R:
                        case T:
                        case j:
                        case U:
                          return iM(e, r);
                        case y:
                          return new s();
                        case v:
                        case E:
                          return new s(e);
                        case _:
                          return (
                            ((n = new e.constructor(
                              e.source,
                              eo.exec(e)
                            )).lastIndex = e.lastIndex),
                            n
                          );
                        case w:
                          return new s();
                        case D:
                          return rf ? eD(rf.call(e)) : {};
                      }
                    })(e, $, c);
                  }
                }
                o || (o = new rD());
                var H = o.get(e);
                if (H) return H;
                o.set(e, a),
                  sQ(e)
                    ? e.forEach(function (r) {
                        a.add(rj(r, t, i, r, e, o));
                      })
                    : sW(e) &&
                      e.forEach(function (r, n) {
                        a.set(n, rj(r, t, i, n, e, o));
                      });
                var F = p ? (h ? na : no) : h ? op : of,
                  V = b ? r : F(e);
                return (
                  ta(V || e, function (r, n) {
                    V && (r = e[(n = r)]), rO(a, n, rj(r, t, i, n, e, o));
                  }),
                  a
                );
              }
              function rU(e, t, i) {
                var n = i.length;
                if (null == e) return !n;
                for (e = eD(e); n--; ) {
                  var s = i[n],
                    o = t[s],
                    a = e[s];
                  if ((a === r && !(s in e)) || !o(a)) return !1;
                }
                return !0;
              }
              function rL(e, t, n) {
                if ("function" != typeof e) throw new eP(i);
                return nR(function () {
                  e.apply(r, n);
                }, t);
              }
              function rk(e, t, r, i) {
                var n = -1,
                  s = th,
                  o = !0,
                  a = e.length,
                  c = [],
                  u = t.length;
                if (!a) return c;
                r && (t = tf(t, tx(r))),
                  i
                    ? ((s = tl), (o = !1))
                    : t.length >= 200 && ((s = tR), (o = !1), (t = new rE(t)));
                e: for (; ++n < a; ) {
                  var h = e[n],
                    l = null == r ? h : r(h);
                  if (((h = i || 0 !== h ? h : 0), o && l == l)) {
                    for (var f = u; f--; ) if (t[f] === l) continue e;
                    c.push(h);
                  } else s(t, l, i) || c.push(h);
                }
                return c;
              }
              (rd.templateSettings = {
                escape: F,
                evaluate: V,
                interpolate: K,
                variable: "",
                imports: { _: rd },
              }),
                (rd.prototype = ry.prototype),
                (rd.prototype.constructor = rd),
                (rv.prototype = rg(ry.prototype)),
                (rv.prototype.constructor = rv),
                (rm.prototype = rg(ry.prototype)),
                (rm.prototype.constructor = rm),
                (rb.prototype.clear = function () {
                  (this.__data__ = ri ? ri(null) : {}), (this.size = 0);
                }),
                (rb.prototype.delete = function (e) {
                  var t = this.has(e) && delete this.__data__[e];
                  return (this.size -= t ? 1 : 0), t;
                }),
                (rb.prototype.get = function (e) {
                  var t = this.__data__;
                  if (ri) {
                    var i = t[e];
                    return i === n ? r : i;
                  }
                  return eR.call(t, e) ? t[e] : r;
                }),
                (rb.prototype.has = function (e) {
                  var t = this.__data__;
                  return ri ? t[e] !== r : eR.call(t, e);
                }),
                (rb.prototype.set = function (e, t) {
                  var i = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (i[e] = ri && t === r ? n : t),
                    this
                  );
                }),
                (r_.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (r_.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = rC(t, e);
                  return (
                    !(r < 0) &&
                    (r == t.length - 1 ? t.pop() : e5.call(t, r, 1),
                    --this.size,
                    !0)
                  );
                }),
                (r_.prototype.get = function (e) {
                  var t = this.__data__,
                    i = rC(t, e);
                  return i < 0 ? r : t[i][1];
                }),
                (r_.prototype.has = function (e) {
                  return rC(this.__data__, e) > -1;
                }),
                (r_.prototype.set = function (e, t) {
                  var r = this.__data__,
                    i = rC(r, e);
                  return (
                    i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this
                  );
                }),
                (rw.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new rb(),
                      map: new (t7 || r_)(),
                      string: new rb(),
                    });
                }),
                (rw.prototype.delete = function (e) {
                  var t = nf(this, e).delete(e);
                  return (this.size -= t ? 1 : 0), t;
                }),
                (rw.prototype.get = function (e) {
                  return nf(this, e).get(e);
                }),
                (rw.prototype.has = function (e) {
                  return nf(this, e).has(e);
                }),
                (rw.prototype.set = function (e, t) {
                  var r = nf(this, e),
                    i = r.size;
                  return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
                }),
                (rE.prototype.add = rE.prototype.push =
                  function (e) {
                    return this.__data__.set(e, n), this;
                  }),
                (rE.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (rD.prototype.clear = function () {
                  (this.__data__ = new r_()), (this.size = 0);
                }),
                (rD.prototype.delete = function (e) {
                  var t = this.__data__,
                    r = t.delete(e);
                  return (this.size = t.size), r;
                }),
                (rD.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (rD.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (rD.prototype.set = function (e, t) {
                  var r = this.__data__;
                  if (r instanceof r_) {
                    var i = r.__data__;
                    if (!t7 || i.length < 199)
                      return i.push([e, t]), (this.size = ++r.size), this;
                    r = this.__data__ = new rw(i);
                  }
                  return r.set(e, t), (this.size = r.size), this;
                });
              var rM = iB(rB),
                rq = iB(rW, !0);
              function r$(e, t) {
                var r = !0;
                return (
                  rM(e, function (e, i, n) {
                    return (r = !!t(e, i, n));
                  }),
                  r
                );
              }
              function rz(e, t, i) {
                for (var n = -1, s = e.length; ++n < s; ) {
                  var o = e[n],
                    a = t(o);
                  if (null != a && (c === r ? a == a && !sZ(a) : i(a, c)))
                    var c = a,
                      u = o;
                }
                return u;
              }
              function rH(e, t) {
                var r = [];
                return (
                  rM(e, function (e, i, n) {
                    t(e, i, n) && r.push(e);
                  }),
                  r
                );
              }
              function rF(e, t, r, i, n) {
                var s = -1,
                  o = e.length;
                for (r || (r = n_), n || (n = []); ++s < o; ) {
                  var a = e[s];
                  t > 0 && r(a)
                    ? t > 1
                      ? rF(a, t - 1, r, i, n)
                      : tp(n, a)
                    : i || (n[n.length] = a);
                }
                return n;
              }
              var rV = iW(),
                rK = iW(!0);
              function rB(e, t) {
                return e && rV(e, t, of);
              }
              function rW(e, t) {
                return e && rK(e, t, of);
              }
              function rG(e, t) {
                return tu(t, function (t) {
                  return sH(e[t]);
                });
              }
              function rY(e, t) {
                t = iT(t, e);
                for (var i = 0, n = t.length; null != e && i < n; )
                  e = e[nM(t[i++])];
                return i && i == n ? e : r;
              }
              function rJ(e, t, r) {
                var i = t(e);
                return sU(e) ? i : tp(i, r(e));
              }
              function rQ(e) {
                return null == e
                  ? e === r
                    ? "[object Undefined]"
                    : "[object Null]"
                  : e4 && e4 in eD(e)
                  ? (function (e) {
                      var t = eR.call(e, e4),
                        i = e[e4];
                      try {
                        e[e4] = r;
                        var n = !0;
                      } catch {}
                      var s = eU.call(e);
                      return n && (t ? (e[e4] = i) : delete e[e4]), s;
                    })(e)
                  : eU.call(e);
              }
              function rX(e, t) {
                return e > t;
              }
              function rZ(e, t) {
                return null != e && eR.call(e, t);
              }
              function r0(e, t) {
                return null != e && t in eD(e);
              }
              function r1(e, t, i) {
                for (
                  var n = i ? tl : th,
                    s = e[0].length,
                    o = e.length,
                    a = o,
                    c = em(o),
                    u = 1 / 0,
                    h = [];
                  a--;

                ) {
                  var l = e[a];
                  a && t && (l = tf(l, tx(t))),
                    (u = t3(l.length, u)),
                    (c[a] =
                      !i && (t || (s >= 120 && l.length >= 120))
                        ? new rE(a && l)
                        : r);
                }
                l = e[0];
                var f = -1,
                  p = c[0];
                e: for (; ++f < s && h.length < u; ) {
                  var d = l[f],
                    g = t ? t(d) : d;
                  if (
                    ((d = i || 0 !== d ? d : 0), !(p ? tR(p, g) : n(h, g, i)))
                  ) {
                    for (a = o; --a; ) {
                      var y = c[a];
                      if (!(y ? tR(y, g) : n(e[a], g, i))) continue e;
                    }
                    p && p.push(g), h.push(d);
                  }
                }
                return h;
              }
              function r5(e, t, i) {
                t = iT(t, e);
                var n = null == (e = nA(e, t)) ? e : e[nM(nQ(t))];
                return null == n ? r : ts(n, e, i);
              }
              function r3(e) {
                return sB(e) && rQ(e) == u;
              }
              function r6(e, t, i, n, s) {
                return (
                  e === t ||
                  (null != e && null != t && (sB(e) || sB(t))
                    ? (function (e, t, i, n, s, o) {
                        var a = sU(e),
                          c = sU(t),
                          d = a ? h : nv(e),
                          g = c ? h : nv(t);
                        (d = d == u ? m : d), (g = g == u ? m : g);
                        var b = d == m,
                          I = g == m,
                          O = d == g;
                        if (O && sq(e)) {
                          if (!sq(t)) return !1;
                          (a = !0), (b = !1);
                        }
                        if (O && !b)
                          return (
                            o || (o = new rD()),
                            a || s0(e)
                              ? nn(e, t, i, n, s, o)
                              : (function (e, t, r, i, n, s, o) {
                                  switch (r) {
                                    case P:
                                      if (
                                        e.byteLength != t.byteLength ||
                                        e.byteOffset != t.byteOffset
                                      )
                                        break;
                                      (e = e.buffer), (t = t.buffer);
                                    case S:
                                      return !(
                                        e.byteLength != t.byteLength ||
                                        !s(new ez(e), new ez(t))
                                      );
                                    case l:
                                    case f:
                                    case v:
                                      return sN(+e, +t);
                                    case p:
                                      return (
                                        e.name == t.name &&
                                        e.message == t.message
                                      );
                                    case _:
                                    case E:
                                      return e == t + "";
                                    case y:
                                      var a = tq;
                                    case w:
                                      var c = 1 & i;
                                      if (
                                        (a || (a = tH), e.size != t.size && !c)
                                      )
                                        break;
                                      var u = o.get(e);
                                      if (u) return u == t;
                                      (i |= 2), o.set(e, t);
                                      var h = nn(a(e), a(t), i, n, s, o);
                                      return o.delete(e), h;
                                    case D:
                                      if (rf) return rf.call(e) == rf.call(t);
                                  }
                                  return !1;
                                })(e, t, d, i, n, s, o)
                          );
                        if (!(1 & i)) {
                          var C = b && eR.call(e, "__wrapped__"),
                            A = I && eR.call(t, "__wrapped__");
                          if (C || A) {
                            var x = C ? e.value() : e,
                              N = A ? t.value() : t;
                            return o || (o = new rD()), s(x, N, i, n, o);
                          }
                        }
                        return (
                          !!O &&
                          (o || (o = new rD()),
                          (function (e, t, i, n, s, o) {
                            var a = 1 & i,
                              c = no(e),
                              u = c.length;
                            if (u != no(t).length && !a) return !1;
                            for (var h = u; h--; ) {
                              var l = c[h];
                              if (!(a ? l in t : eR.call(t, l))) return !1;
                            }
                            var f = o.get(e),
                              p = o.get(t);
                            if (f && p) return f == t && p == e;
                            var d = !0;
                            o.set(e, t), o.set(t, e);
                            for (var g = a; ++h < u; ) {
                              var y = e[(l = c[h])],
                                v = t[l];
                              if (n)
                                var m = a
                                  ? n(v, y, l, t, e, o)
                                  : n(y, v, l, e, t, o);
                              if (
                                !(m === r ? y === v || s(y, v, i, n, o) : m)
                              ) {
                                d = !1;
                                break;
                              }
                              g || (g = "constructor" == l);
                            }
                            if (d && !g) {
                              var b = e.constructor,
                                _ = t.constructor;
                              b != _ &&
                                "constructor" in e &&
                                "constructor" in t &&
                                !(
                                  "function" == typeof b &&
                                  b instanceof b &&
                                  "function" == typeof _ &&
                                  _ instanceof _
                                ) &&
                                (d = !1);
                            }
                            return o.delete(e), o.delete(t), d;
                          })(e, t, i, n, s, o))
                        );
                      })(e, t, i, n, r6, s)
                    : e != e && t != t)
                );
              }
              function r2(e, t, i, n) {
                var s = i.length,
                  o = s,
                  a = !n;
                if (null == e) return !o;
                for (e = eD(e); s--; ) {
                  var c = i[s];
                  if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
                }
                for (; ++s < o; ) {
                  var u = (c = i[s])[0],
                    h = e[u],
                    l = c[1];
                  if (a && c[2]) {
                    if (h === r && !(u in e)) return !1;
                  } else {
                    var f = new rD();
                    if (n) var p = n(h, l, u, e, t, f);
                    if (!(p === r ? r6(l, h, 3, n, f) : p)) return !1;
                  }
                }
                return !0;
              }
              function r8(e) {
                return (
                  !(!sK(e) || (ej && ej in e)) && (sH(e) ? eM : eu).test(nq(e))
                );
              }
              function r4(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? oM
                  : "object" == typeof e
                  ? sU(e)
                    ? ir(e[0], e[1])
                    : it(e)
                  : oW(e);
              }
              function r9(e) {
                if (!nP(e)) return t1(e);
                var t = [];
                for (var r in eD(e))
                  eR.call(e, r) && "constructor" != r && t.push(r);
                return t;
              }
              function r7(e, t) {
                return e < t;
              }
              function ie(e, t) {
                var r = -1,
                  i = sk(e) ? em(e.length) : [];
                return (
                  rM(e, function (e, n, s) {
                    i[++r] = t(e, n, s);
                  }),
                  i
                );
              }
              function it(e) {
                var t = np(e);
                return 1 == t.length && t[0][2]
                  ? nO(t[0][0], t[0][1])
                  : function (r) {
                      return r === e || r2(r, e, t);
                    };
              }
              function ir(e, t) {
                var i;
                return nD(e) && (i = t) == i && !sK(i)
                  ? nO(nM(e), t)
                  : function (i) {
                      var n = oa(i, e);
                      return n === r && n === t ? oc(i, e) : r6(t, n, 3);
                    };
              }
              function ii(e, t, i, n, s) {
                e !== t &&
                  rV(
                    t,
                    function (o, a) {
                      if ((s || (s = new rD()), sK(o)))
                        !(function (e, t, i, n, s, o, a) {
                          var c = nx(e, i),
                            u = nx(t, i),
                            h = a.get(u);
                          if (h) {
                            rP(e, i, h);
                            return;
                          }
                          var l = o ? o(c, u, i + "", e, t, a) : r,
                            f = l === r;
                          if (f) {
                            var p = sU(u),
                              d = !p && sq(u),
                              g = !p && !d && s0(u);
                            (l = u),
                              p || d || g
                                ? sU(c)
                                  ? (l = c)
                                  : sM(c)
                                  ? (l = iH(c))
                                  : d
                                  ? ((f = !1), (l = iL(u, !0)))
                                  : g
                                  ? ((f = !1), (l = iM(u, !0)))
                                  : (l = [])
                                : sY(u) || sj(u)
                                ? ((l = c),
                                  sj(c)
                                    ? (l = s9(c))
                                    : (!sK(c) || sH(c)) && (l = nb(u)))
                                : (f = !1);
                          }
                          f && (a.set(u, l), s(l, u, n, o, a), a.delete(u)),
                            rP(e, i, l);
                        })(e, t, a, i, ii, n, s);
                      else {
                        var c = n ? n(nx(e, a), o, a + "", e, t, s) : r;
                        c === r && (c = o), rP(e, a, c);
                      }
                    },
                    op
                  );
              }
              function is(e, t) {
                var i = e.length;
                if (i) return nw((t += t < 0 ? i : 0), i) ? e[t] : r;
              }
              function io(e, t, r) {
                t = t.length
                  ? tf(t, function (e) {
                      return sU(e)
                        ? function (t) {
                            return rY(t, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [oM];
                var i = -1;
                return (
                  (t = tf(t, tx(nl()))),
                  (function (e, t) {
                    var r = e.length;
                    for (e.sort(t); r--; ) e[r] = e[r].value;
                    return e;
                  })(
                    ie(e, function (e, r, n) {
                      return {
                        criteria: tf(t, function (t) {
                          return t(e);
                        }),
                        index: ++i,
                        value: e,
                      };
                    }),
                    function (e, t) {
                      return (function (e, t, r) {
                        for (
                          var i = -1,
                            n = e.criteria,
                            s = t.criteria,
                            o = n.length,
                            a = r.length;
                          ++i < o;

                        ) {
                          var c = iq(n[i], s[i]);
                          if (c) {
                            if (i >= a) return c;
                            return c * ("desc" == r[i] ? -1 : 1);
                          }
                        }
                        return e.index - t.index;
                      })(e, t, r);
                    }
                  )
                );
              }
              function ia(e, t, r) {
                for (var i = -1, n = t.length, s = {}; ++i < n; ) {
                  var o = t[i],
                    a = rY(e, o);
                  r(a, o) && id(s, iT(o, e), a);
                }
                return s;
              }
              function ic(e, t, r, i) {
                var n = i ? tw : t_,
                  s = -1,
                  o = t.length,
                  a = e;
                for (e === t && (t = iH(t)), r && (a = tf(e, tx(r))); ++s < o; )
                  for (
                    var c = 0, u = t[s], h = r ? r(u) : u;
                    (c = n(a, h, c, i)) > -1;

                  )
                    a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                return e;
              }
              function iu(e, t) {
                for (var r = e ? t.length : 0, i = r - 1; r--; ) {
                  var n = t[r];
                  if (r == i || n !== s) {
                    var s = n;
                    nw(n) ? e5.call(e, n, 1) : iS(e, n);
                  }
                }
                return e;
              }
              function ih(e, t) {
                return e + tJ(t8() * (t - e + 1));
              }
              function il(e, t) {
                var r = "";
                if (!e || t < 1 || t > 9007199254740991) return r;
                do t % 2 && (r += e), (t = tJ(t / 2)) && (e += e);
                while (t);
                return r;
              }
              function ip(e, t) {
                return nT(nC(e, t, oM), e + "");
              }
              function id(e, t, i, n) {
                if (!sK(e)) return e;
                t = iT(t, e);
                for (
                  var s = -1, o = t.length, a = o - 1, c = e;
                  null != c && ++s < o;

                ) {
                  var u = nM(t[s]),
                    h = i;
                  if (
                    "__proto__" === u ||
                    "constructor" === u ||
                    "prototype" === u
                  )
                    break;
                  if (s != a) {
                    var l = c[u];
                    (h = n ? n(l, u, c) : r) === r &&
                      (h = sK(l) ? l : nw(t[s + 1]) ? [] : {});
                  }
                  rO(c, u, h), (c = c[u]);
                }
                return e;
              }
              var ig = rn
                  ? function (e, t) {
                      return rn.set(e, t), e;
                    }
                  : oM,
                iy = e9
                  ? function (e, t) {
                      return e9(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: oU(t),
                        writable: !0,
                      });
                    }
                  : oM;
              function iv(e, t, r) {
                var i = -1,
                  n = e.length;
                t < 0 && (t = -t > n ? 0 : n + t),
                  (r = r > n ? n : r) < 0 && (r += n),
                  (n = t > r ? 0 : (r - t) >>> 0),
                  (t >>>= 0);
                for (var s = em(n); ++i < n; ) s[i] = e[i + t];
                return s;
              }
              function im(e, t) {
                var r;
                return (
                  rM(e, function (e, i, n) {
                    return !(r = t(e, i, n));
                  }),
                  !!r
                );
              }
              function ib(e, t, r) {
                var i = 0,
                  n = null == e ? i : e.length;
                if ("number" == typeof t && t == t && n <= 2147483647) {
                  for (; i < n; ) {
                    var s = (i + n) >>> 1,
                      o = e[s];
                    null !== o && !sZ(o) && (r ? o <= t : o < t)
                      ? (i = s + 1)
                      : (n = s);
                  }
                  return n;
                }
                return i_(e, t, oM, r);
              }
              function i_(e, t, i, n) {
                var s = 0,
                  o = null == e ? 0 : e.length;
                if (0 === o) return 0;
                t = i(t);
                for (
                  var a = t != t, c = null === t, u = sZ(t), h = t === r;
                  s < o;

                ) {
                  var l = tJ((s + o) / 2),
                    f = i(e[l]),
                    p = f !== r,
                    d = null === f,
                    g = f == f,
                    y = sZ(f);
                  if (a) var v = n || g;
                  else
                    v = h
                      ? g && (n || p)
                      : c
                      ? g && p && (n || !d)
                      : u
                      ? g && p && !d && (n || !y)
                      : !d && !y && (n ? f <= t : f < t);
                  v ? (s = l + 1) : (o = l);
                }
                return t3(o, 4294967294);
              }
              function iw(e, t) {
                for (var r = -1, i = e.length, n = 0, s = []; ++r < i; ) {
                  var o = e[r],
                    a = t ? t(o) : o;
                  if (!r || !sN(a, c)) {
                    var c = a;
                    s[n++] = 0 === o ? 0 : o;
                  }
                }
                return s;
              }
              function iE(e) {
                return "number" == typeof e ? e : sZ(e) ? a : +e;
              }
              function iD(e) {
                if ("string" == typeof e) return e;
                if (sU(e)) return tf(e, iD) + "";
                if (sZ(e)) return rp ? rp.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -o ? "-0" : t;
              }
              function iI(e, t, r) {
                var i = -1,
                  n = th,
                  s = e.length,
                  o = !0,
                  a = [],
                  c = a;
                if (r) (o = !1), (n = tl);
                else if (s >= 200) {
                  var u = t ? null : i9(e);
                  if (u) return tH(u);
                  (o = !1), (n = tR), (c = new rE());
                } else c = t ? [] : a;
                e: for (; ++i < s; ) {
                  var h = e[i],
                    l = t ? t(h) : h;
                  if (((h = r || 0 !== h ? h : 0), o && l == l)) {
                    for (var f = c.length; f--; ) if (c[f] === l) continue e;
                    t && c.push(l), a.push(h);
                  } else n(c, l, r) || (c !== a && c.push(l), a.push(h));
                }
                return a;
              }
              function iS(e, t) {
                return (
                  (t = iT(t, e)), null == (e = nA(e, t)) || delete e[nM(nQ(t))]
                );
              }
              function iP(e, t, r, i) {
                return id(e, t, r(rY(e, t)), i);
              }
              function iO(e, t, r, i) {
                for (
                  var n = e.length, s = i ? n : -1;
                  (i ? s-- : ++s < n) && t(e[s], s, e);

                );
                return r
                  ? iv(e, i ? 0 : s, i ? s + 1 : n)
                  : iv(e, i ? s + 1 : 0, i ? n : s);
              }
              function iC(e, t) {
                var r = e;
                return (
                  r instanceof rm && (r = r.value()),
                  td(
                    t,
                    function (e, t) {
                      return t.func.apply(t.thisArg, tp([e], t.args));
                    },
                    r
                  )
                );
              }
              function iA(e, t, r) {
                var i = e.length;
                if (i < 2) return i ? iI(e[0]) : [];
                for (var n = -1, s = em(i); ++n < i; )
                  for (var o = e[n], a = -1; ++a < i; )
                    a != n && (s[n] = rk(s[n] || o, e[a], t, r));
                return iI(rF(s, 1), t, r);
              }
              function ix(e, t, i) {
                for (
                  var n = -1, s = e.length, o = t.length, a = {};
                  ++n < s;

                ) {
                  var c = n < o ? t[n] : r;
                  i(a, e[n], c);
                }
                return a;
              }
              function iN(e) {
                return sM(e) ? e : [];
              }
              function iR(e) {
                return "function" == typeof e ? e : oM;
              }
              function iT(e, t) {
                return sU(e) ? e : nD(e, t) ? [e] : nk(s7(e));
              }
              function ij(e, t, i) {
                var n = e.length;
                return (i = i === r ? n : i), !t && i >= n ? e : iv(e, t, i);
              }
              var iU =
                tv ||
                function (e) {
                  return e3.clearTimeout(e);
                };
              function iL(e, t) {
                if (t) return e.slice();
                var r = e.length,
                  i = eV ? eV(r) : new e.constructor(r);
                return e.copy(i), i;
              }
              function ik(e) {
                var t = new e.constructor(e.byteLength);
                return new ez(t).set(new ez(e)), t;
              }
              function iM(e, t) {
                var r = t ? ik(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length);
              }
              function iq(e, t) {
                if (e !== t) {
                  var i = e !== r,
                    n = null === e,
                    s = e == e,
                    o = sZ(e),
                    a = t !== r,
                    c = null === t,
                    u = t == t,
                    h = sZ(t);
                  if (
                    (!c && !h && !o && e > t) ||
                    (o && a && u && !c && !h) ||
                    (n && a && u) ||
                    (!i && u) ||
                    !s
                  )
                    return 1;
                  if (
                    (!n && !o && !h && e < t) ||
                    (h && i && s && !n && !o) ||
                    (c && i && s) ||
                    (!a && s) ||
                    !u
                  )
                    return -1;
                }
                return 0;
              }
              function i$(e, t, r, i) {
                for (
                  var n = -1,
                    s = e.length,
                    o = r.length,
                    a = -1,
                    c = t.length,
                    u = t5(s - o, 0),
                    h = em(c + u),
                    l = !i;
                  ++a < c;

                )
                  h[a] = t[a];
                for (; ++n < o; ) (l || n < s) && (h[r[n]] = e[n]);
                for (; u--; ) h[a++] = e[n++];
                return h;
              }
              function iz(e, t, r, i) {
                for (
                  var n = -1,
                    s = e.length,
                    o = -1,
                    a = r.length,
                    c = -1,
                    u = t.length,
                    h = t5(s - a, 0),
                    l = em(h + u),
                    f = !i;
                  ++n < h;

                )
                  l[n] = e[n];
                for (var p = n; ++c < u; ) l[p + c] = t[c];
                for (; ++o < a; ) (f || n < s) && (l[p + r[o]] = e[n++]);
                return l;
              }
              function iH(e, t) {
                var r = -1,
                  i = e.length;
                for (t || (t = em(i)); ++r < i; ) t[r] = e[r];
                return t;
              }
              function iF(e, t, i, n) {
                var s = !i;
                i || (i = {});
                for (var o = -1, a = t.length; ++o < a; ) {
                  var c = t[o],
                    u = n ? n(i[c], e[c], c, i, e) : r;
                  u === r && (u = e[c]), s ? rN(i, c, u) : rO(i, c, u);
                }
                return i;
              }
              function iV(e, t) {
                return function (r, i) {
                  var n = sU(r) ? to : rA,
                    s = t ? t() : {};
                  return n(r, e, nl(i, 2), s);
                };
              }
              function iK(e) {
                return ip(function (t, i) {
                  var n = -1,
                    s = i.length,
                    o = s > 1 ? i[s - 1] : r,
                    a = s > 2 ? i[2] : r;
                  for (
                    o = e.length > 3 && "function" == typeof o ? (s--, o) : r,
                      a && nE(i[0], i[1], a) && ((o = s < 3 ? r : o), (s = 1)),
                      t = eD(t);
                    ++n < s;

                  ) {
                    var c = i[n];
                    c && e(t, c, n, o);
                  }
                  return t;
                });
              }
              function iB(e, t) {
                return function (r, i) {
                  if (null == r) return r;
                  if (!sk(r)) return e(r, i);
                  for (
                    var n = r.length, s = t ? n : -1, o = eD(r);
                    (t ? s-- : ++s < n) && !1 !== i(o[s], s, o);

                  );
                  return r;
                };
              }
              function iW(e) {
                return function (t, r, i) {
                  for (var n = -1, s = eD(t), o = i(t), a = o.length; a--; ) {
                    var c = o[e ? a : ++n];
                    if (!1 === r(s[c], c, s)) break;
                  }
                  return t;
                };
              }
              function iG(e) {
                return function (t) {
                  var i = tM((t = s7(t))) ? tV(t) : r,
                    n = i ? i[0] : t.charAt(0),
                    s = i ? ij(i, 1).join("") : t.slice(1);
                  return n[e]() + s;
                };
              }
              function iY(e) {
                return function (t) {
                  return td(oR(oI(t).replace(eH, "")), e, "");
                };
              }
              function iJ(e) {
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(t[0]);
                    case 2:
                      return new e(t[0], t[1]);
                    case 3:
                      return new e(t[0], t[1], t[2]);
                    case 4:
                      return new e(t[0], t[1], t[2], t[3]);
                    case 5:
                      return new e(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                      return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  var r = rg(e.prototype),
                    i = e.apply(r, t);
                  return sK(i) ? i : r;
                };
              }
              function iQ(e) {
                return function (t, i, n) {
                  var s = eD(t);
                  if (!sk(t)) {
                    var o = nl(i, 3);
                    (t = of(t)),
                      (i = function (e) {
                        return o(s[e], e, s);
                      });
                  }
                  var a = e(t, i, n);
                  return a > -1 ? s[o ? t[a] : a] : r;
                };
              }
              function iX(e) {
                return ns(function (t) {
                  var n = t.length,
                    s = n,
                    o = rv.prototype.thru;
                  for (e && t.reverse(); s--; ) {
                    var a = t[s];
                    if ("function" != typeof a) throw new eP(i);
                    if (o && !c && "wrapper" == nu(a)) var c = new rv([], !0);
                  }
                  for (s = c ? s : n; ++s < n; ) {
                    var u = nu((a = t[s])),
                      h = "wrapper" == u ? nc(a) : r;
                    c =
                      h && nI(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9]
                        ? c[nu(h[0])].apply(c, h[3])
                        : 1 == a.length && nI(a)
                        ? c[u]()
                        : c.thru(a);
                  }
                  return function () {
                    var e = arguments,
                      r = e[0];
                    if (c && 1 == e.length && sU(r)) return c.plant(r).value();
                    for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n; )
                      s = t[i].call(this, s);
                    return s;
                  };
                });
              }
              function iZ(e, t, i, n, s, o, a, c, u, h) {
                var l = 128 & t,
                  f = 1 & t,
                  p = 2 & t,
                  d = 24 & t,
                  g = 512 & t,
                  y = p ? r : iJ(e);
                return function v() {
                  for (var m = arguments.length, b = em(m), _ = m; _--; )
                    b[_] = arguments[_];
                  if (d)
                    var w = nh(v),
                      E = (function (e, t) {
                        for (var r = e.length, i = 0; r--; ) e[r] === t && ++i;
                        return i;
                      })(b, w);
                  if (
                    (n && (b = i$(b, n, s, d)),
                    o && (b = iz(b, o, a, d)),
                    (m -= E),
                    d && m < h)
                  ) {
                    var D = tz(b, w);
                    return i8(e, t, iZ, v.placeholder, i, b, D, c, u, h - m);
                  }
                  var I = f ? i : this,
                    S = p ? I[e] : e;
                  return (
                    (m = b.length),
                    c
                      ? (b = (function (e, t) {
                          for (
                            var i = e.length, n = t3(t.length, i), s = iH(e);
                            n--;

                          ) {
                            var o = t[n];
                            e[n] = nw(o, i) ? s[o] : r;
                          }
                          return e;
                        })(b, c))
                      : g && m > 1 && b.reverse(),
                    l && u < m && (b.length = u),
                    this &&
                      this !== e3 &&
                      this instanceof v &&
                      (S = y || iJ(S)),
                    S.apply(I, b)
                  );
                };
              }
              function i0(e, t) {
                return function (r, i) {
                  var n, s;
                  return (
                    (n = t(i)),
                    (s = {}),
                    rB(r, function (t, r, i) {
                      e(s, n(t), r, i);
                    }),
                    s
                  );
                };
              }
              function i1(e, t) {
                return function (i, n) {
                  var s;
                  if (i === r && n === r) return t;
                  if ((i !== r && (s = i), n !== r)) {
                    if (s === r) return n;
                    "string" == typeof i || "string" == typeof n
                      ? ((i = iD(i)), (n = iD(n)))
                      : ((i = iE(i)), (n = iE(n))),
                      (s = e(i, n));
                  }
                  return s;
                };
              }
              function i5(e) {
                return ns(function (t) {
                  return (
                    (t = tf(t, tx(nl()))),
                    ip(function (r) {
                      var i = this;
                      return e(t, function (e) {
                        return ts(e, i, r);
                      });
                    })
                  );
                });
              }
              function i3(e, t) {
                var i = (t = t === r ? " " : iD(t)).length;
                if (i < 2) return i ? il(t, e) : t;
                var n = il(t, tY(e / tF(t)));
                return tM(t) ? ij(tV(n), 0, e).join("") : n.slice(0, e);
              }
              function i6(e) {
                return function (t, i, n) {
                  return (
                    n && "number" != typeof n && nE(t, i, n) && (i = n = r),
                    (t = s6(t)),
                    i === r ? ((i = t), (t = 0)) : (i = s6(i)),
                    (n = n === r ? (t < i ? 1 : -1) : s6(n)),
                    (function (e, t, r, i) {
                      for (
                        var n = -1,
                          s = t5(tY((t - e) / (r || 1)), 0),
                          o = em(s);
                        s--;

                      )
                        (o[i ? s : ++n] = e), (e += r);
                      return o;
                    })(t, i, n, e)
                  );
                };
              }
              function i2(e) {
                return function (t, r) {
                  return (
                    ("string" == typeof t && "string" == typeof r) ||
                      ((t = s4(t)), (r = s4(r))),
                    e(t, r)
                  );
                };
              }
              function i8(e, t, i, n, s, o, a, c, u, h) {
                var l = 8 & t,
                  f = l ? a : r,
                  p = l ? r : a,
                  d = l ? o : r,
                  g = l ? r : o;
                (t |= l ? 32 : 64), 4 & (t &= ~(l ? 64 : 32)) || (t &= -4);
                var y = [e, t, s, d, f, g, p, c, u, h],
                  v = i.apply(r, y);
                return nI(e) && nN(v, y), (v.placeholder = n), nj(v, e, t);
              }
              function i4(e) {
                var t = eE[e];
                return function (e, r) {
                  if (
                    ((e = s4(e)), (r = null == r ? 0 : t3(s2(r), 292)) && tZ(e))
                  ) {
                    var i = (s7(e) + "e").split("e");
                    return +(
                      (i = (s7(t(i[0] + "e" + (+i[1] + r))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+i[1] - r)
                    );
                  }
                  return t(e);
                };
              }
              var i9 =
                rt && 1 / tH(new rt([, -0]))[1] == o
                  ? function (e) {
                      return new rt(e);
                    }
                  : oF;
              function i7(e) {
                return function (t) {
                  var r,
                    i,
                    n = nv(t);
                  return n == y
                    ? tq(t)
                    : n == w
                    ? ((r = -1),
                      (i = Array(t.size)),
                      t.forEach(function (e) {
                        i[++r] = [e, e];
                      }),
                      i)
                    : tf(e(t), function (e) {
                        return [e, t[e]];
                      });
                };
              }
              function ne(e, t, n, o, a, c, u, h) {
                var l = 2 & t;
                if (!l && "function" != typeof e) throw new eP(i);
                var f = o ? o.length : 0;
                if (
                  (f || ((t &= -97), (o = a = r)),
                  (u = u === r ? u : t5(s2(u), 0)),
                  (h = h === r ? h : s2(h)),
                  (f -= a ? a.length : 0),
                  64 & t)
                ) {
                  var p = o,
                    d = a;
                  o = a = r;
                }
                var g = l ? r : nc(e),
                  y = [e, t, n, o, a, p, d, c, u, h];
                if (
                  (g &&
                    (function (e, t) {
                      var r = e[1],
                        i = t[1],
                        n = r | i,
                        o = n < 131,
                        a =
                          (128 == i && 8 == r) ||
                          (128 == i && 256 == r && e[7].length <= t[8]) ||
                          (384 == i && t[7].length <= t[8] && 8 == r);
                      if (o || a) {
                        1 & i && ((e[2] = t[2]), (n |= 1 & r ? 0 : 4));
                        var c = t[3];
                        if (c) {
                          var u = e[3];
                          (e[3] = u ? i$(u, c, t[4]) : c),
                            (e[4] = u ? tz(e[3], s) : t[4]);
                        }
                        (c = t[5]) &&
                          ((u = e[5]),
                          (e[5] = u ? iz(u, c, t[6]) : c),
                          (e[6] = u ? tz(e[5], s) : t[6])),
                          (c = t[7]) && (e[7] = c),
                          128 & i &&
                            (e[8] = null == e[8] ? t[8] : t3(e[8], t[8])),
                          null == e[9] && (e[9] = t[9]),
                          (e[0] = t[0]),
                          (e[1] = n);
                      }
                    })(y, g),
                  (e = y[0]),
                  (t = y[1]),
                  (n = y[2]),
                  (o = y[3]),
                  (a = y[4]),
                  (h = y[9] =
                    y[9] === r ? (l ? 0 : e.length) : t5(y[9] - f, 0)) ||
                    !(24 & t) ||
                    (t &= -25),
                  t && 1 != t)
                )
                  8 == t || 16 == t
                    ? ((v = e),
                      (m = t),
                      (b = h),
                      (_ = iJ(v)),
                      (R = function e() {
                        for (
                          var t = arguments.length, i = em(t), n = t, s = nh(e);
                          n--;

                        )
                          i[n] = arguments[n];
                        var o =
                          t < 3 && i[0] !== s && i[t - 1] !== s ? [] : tz(i, s);
                        return (t -= o.length) < b
                          ? i8(v, m, iZ, e.placeholder, r, i, o, r, r, b - t)
                          : ts(
                              this && this !== e3 && this instanceof e ? _ : v,
                              this,
                              i
                            );
                      }))
                    : (32 != t && 33 != t) || a.length
                    ? (R = iZ.apply(r, y))
                    : ((w = e),
                      (E = t),
                      (D = n),
                      (I = o),
                      (S = 1 & E),
                      (P = iJ(w)),
                      (R = function e() {
                        for (
                          var t = -1,
                            r = arguments.length,
                            i = -1,
                            n = I.length,
                            s = em(n + r),
                            o =
                              this && this !== e3 && this instanceof e ? P : w;
                          ++i < n;

                        )
                          s[i] = I[i];
                        for (; r--; ) s[i++] = arguments[++t];
                        return ts(o, S ? D : this, s);
                      }));
                else
                  var v,
                    m,
                    b,
                    _,
                    w,
                    E,
                    D,
                    I,
                    S,
                    P,
                    O,
                    C,
                    A,
                    x,
                    N,
                    R =
                      ((O = e),
                      (C = t),
                      (A = n),
                      (x = 1 & C),
                      (N = iJ(O)),
                      function e() {
                        return (
                          this && this !== e3 && this instanceof e ? N : O
                        ).apply(x ? A : this, arguments);
                      });
                return nj((g ? ig : nN)(R, y), e, t);
              }
              function nt(e, t, i, n) {
                return e === r || (sN(e, eA[i]) && !eR.call(n, i)) ? t : e;
              }
              function nr(e, t, i, n, s, o) {
                return (
                  sK(e) &&
                    sK(t) &&
                    (o.set(t, e), ii(e, t, r, nr, o), o.delete(t)),
                  e
                );
              }
              function ni(e) {
                return sY(e) ? r : e;
              }
              function nn(e, t, i, n, s, o) {
                var a = 1 & i,
                  c = e.length,
                  u = t.length;
                if (c != u && !(a && u > c)) return !1;
                var h = o.get(e),
                  l = o.get(t);
                if (h && l) return h == t && l == e;
                var f = -1,
                  p = !0,
                  d = 2 & i ? new rE() : r;
                for (o.set(e, t), o.set(t, e); ++f < c; ) {
                  var g = e[f],
                    y = t[f];
                  if (n) var v = a ? n(y, g, f, t, e, o) : n(g, y, f, e, t, o);
                  if (v !== r) {
                    if (v) continue;
                    p = !1;
                    break;
                  }
                  if (d) {
                    if (
                      !ty(t, function (e, t) {
                        if (!tR(d, t) && (g === e || s(g, e, i, n, o)))
                          return d.push(t);
                      })
                    ) {
                      p = !1;
                      break;
                    }
                  } else if (!(g === y || s(g, y, i, n, o))) {
                    p = !1;
                    break;
                  }
                }
                return o.delete(e), o.delete(t), p;
              }
              function ns(e) {
                return nT(nC(e, r, nB), e + "");
              }
              function no(e) {
                return rJ(e, of, ng);
              }
              function na(e) {
                return rJ(e, op, ny);
              }
              var nc = rn
                ? function (e) {
                    return rn.get(e);
                  }
                : oF;
              function nu(e) {
                for (
                  var t = e.name + "",
                    r = rs[t],
                    i = eR.call(rs, t) ? r.length : 0;
                  i--;

                ) {
                  var n = r[i],
                    s = n.func;
                  if (null == s || s == e) return n.name;
                }
                return t;
              }
              function nh(e) {
                return (eR.call(rd, "placeholder") ? rd : e).placeholder;
              }
              function nl() {
                var e = rd.iteratee || oq;
                return (
                  (e = e === oq ? r4 : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function nf(e, t) {
                var r,
                  i = e.__data__;
                return (
                  "string" == (r = typeof t) ||
                  "number" == r ||
                  "symbol" == r ||
                  "boolean" == r
                    ? "__proto__" !== t
                    : null === t
                )
                  ? i["string" == typeof t ? "string" : "hash"]
                  : i.map;
              }
              function np(e) {
                for (var t = of(e), r = t.length; r--; ) {
                  var i = t[r],
                    n = e[i];
                  t[r] = [i, n, n == n && !sK(n)];
                }
                return t;
              }
              function nd(e, t) {
                var i = null == e ? r : e[t];
                return r8(i) ? i : r;
              }
              var ng = tQ
                  ? function (e) {
                      return null == e
                        ? []
                        : tu(tQ((e = eD(e))), function (t) {
                            return e1.call(e, t);
                          });
                    }
                  : oJ,
                ny = tQ
                  ? function (e) {
                      for (var t = []; e; ) tp(t, ng(e)), (e = eB(e));
                      return t;
                    }
                  : oJ,
                nv = rQ;
              function nm(e, t, r) {
                t = iT(t, e);
                for (var i = -1, n = t.length, s = !1; ++i < n; ) {
                  var o = nM(t[i]);
                  if (!(s = null != e && r(e, o))) break;
                  e = e[o];
                }
                return s || ++i != n
                  ? s
                  : !!(n = null == e ? 0 : e.length) &&
                      sV(n) &&
                      nw(o, n) &&
                      (sU(e) || sj(e));
              }
              function nb(e) {
                return "function" != typeof e.constructor || nP(e)
                  ? {}
                  : rg(eB(e));
              }
              function n_(e) {
                return sU(e) || sj(e) || !!(e6 && e && e[e6]);
              }
              function nw(e, t) {
                var r = typeof e;
                return (
                  !!(t = t ?? 9007199254740991) &&
                  ("number" == r || ("symbol" != r && el.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < t
                );
              }
              function nE(e, t, r) {
                if (!sK(r)) return !1;
                var i = typeof t;
                return (
                  ("number" == i
                    ? !!(sk(r) && nw(t, r.length))
                    : "string" == i && t in r) && sN(r[t], e)
                );
              }
              function nD(e, t) {
                if (sU(e)) return !1;
                var r = typeof e;
                return (
                  !!(
                    "number" == r ||
                    "symbol" == r ||
                    "boolean" == r ||
                    null == e ||
                    sZ(e)
                  ) ||
                  W.test(e) ||
                  !B.test(e) ||
                  (null != t && e in eD(t))
                );
              }
              function nI(e) {
                var t = nu(e),
                  r = rd[t];
                if ("function" != typeof r || !(t in rm.prototype)) return !1;
                if (e === r) return !0;
                var i = nc(r);
                return !!i && e === i[0];
              }
              ((t9 && nv(new t9(new ArrayBuffer(1))) != P) ||
                (t7 && nv(new t7()) != y) ||
                (re && nv(re.resolve()) != b) ||
                (rt && nv(new rt()) != w) ||
                (rr && nv(new rr()) != I)) &&
                (nv = function (e) {
                  var t = rQ(e),
                    i = t == m ? e.constructor : r,
                    n = i ? nq(i) : "";
                  if (n)
                    switch (n) {
                      case ro:
                        return P;
                      case ra:
                        return y;
                      case rc:
                        return b;
                      case ru:
                        return w;
                      case rh:
                        return I;
                    }
                  return t;
                });
              var nS = ex ? sH : oQ;
              function nP(e) {
                var t = e && e.constructor;
                return e === (("function" == typeof t && t.prototype) || eA);
              }
              function nO(e, t) {
                return function (i) {
                  return null != i && i[e] === t && (t !== r || e in eD(i));
                };
              }
              function nC(e, t, i) {
                return (
                  (t = t5(t === r ? e.length - 1 : t, 0)),
                  function () {
                    for (
                      var r = arguments,
                        n = -1,
                        s = t5(r.length - t, 0),
                        o = em(s);
                      ++n < s;

                    )
                      o[n] = r[t + n];
                    n = -1;
                    for (var a = em(t + 1); ++n < t; ) a[n] = r[n];
                    return (a[t] = i(o)), ts(e, this, a);
                  }
                );
              }
              function nA(e, t) {
                return t.length < 2 ? e : rY(e, iv(t, 0, -1));
              }
              function nx(e, t) {
                if (
                  !("constructor" === t && "function" == typeof e[t]) &&
                  "__proto__" != t
                )
                  return e[t];
              }
              var nN = nU(ig),
                nR =
                  tG ||
                  function (e, t) {
                    return e3.setTimeout(e, t);
                  },
                nT = nU(iy);
              function nj(e, t, r) {
                var i,
                  n,
                  s = t + "";
                return nT(
                  e,
                  (function (e, t) {
                    var r = t.length;
                    if (!r) return e;
                    var i = r - 1;
                    return (
                      (t[i] = (r > 1 ? "& " : "") + t[i]),
                      (t = t.join(r > 2 ? ", " : " ")),
                      e.replace(
                        Z,
                        `{
/* [wrapped with ` +
                          t +
                          `] */
`
                      )
                    );
                  })(
                    s,
                    ((i = (n = s.match(ee)) ? n[1].split(et) : []),
                    ta(c, function (e) {
                      var t = "_." + e[0];
                      r & e[1] && !th(i, t) && i.push(t);
                    }),
                    i.sort())
                  )
                );
              }
              function nU(e) {
                var t = 0,
                  i = 0;
                return function () {
                  var n = t6(),
                    s = 16 - (n - i);
                  if (((i = n), s > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(r, arguments);
                };
              }
              function nL(e, t) {
                var i = -1,
                  n = e.length,
                  s = n - 1;
                for (t = t === r ? n : t; ++i < t; ) {
                  var o = ih(i, s),
                    a = e[o];
                  (e[o] = e[i]), (e[i] = a);
                }
                return (e.length = t), e;
              }
              var nk =
                ((ey = (eg = sS(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(""),
                      e.replace(G, function (e, r, i, n) {
                        t.push(i ? n.replace(en, "$1") : r || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === ey.size && ey.clear(), e;
                  }
                )).cache),
                eg);
              function nM(e) {
                if ("string" == typeof e || sZ(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -o ? "-0" : t;
              }
              function nq(e) {
                if (null != e) {
                  try {
                    return eN.call(e);
                  } catch {}
                  try {
                    return e + "";
                  } catch {}
                }
                return "";
              }
              function n$(e) {
                if (e instanceof rm) return e.clone();
                var t = new rv(e.__wrapped__, e.__chain__);
                return (
                  (t.__actions__ = iH(e.__actions__)),
                  (t.__index__ = e.__index__),
                  (t.__values__ = e.__values__),
                  t
                );
              }
              var nz = ip(function (e, t) {
                  return sM(e) ? rk(e, rF(t, 1, sM, !0)) : [];
                }),
                nH = ip(function (e, t) {
                  var i = nQ(t);
                  return (
                    sM(i) && (i = r),
                    sM(e) ? rk(e, rF(t, 1, sM, !0), nl(i, 2)) : []
                  );
                }),
                nF = ip(function (e, t) {
                  var i = nQ(t);
                  return (
                    sM(i) && (i = r), sM(e) ? rk(e, rF(t, 1, sM, !0), r, i) : []
                  );
                });
              function nV(e, t, r) {
                var i = null == e ? 0 : e.length;
                if (!i) return -1;
                var n = null == r ? 0 : s2(r);
                return n < 0 && (n = t5(i + n, 0)), tb(e, nl(t, 3), n);
              }
              function nK(e, t, i) {
                var n = null == e ? 0 : e.length;
                if (!n) return -1;
                var s = n - 1;
                return (
                  i !== r &&
                    ((s = s2(i)), (s = i < 0 ? t5(n + s, 0) : t3(s, n - 1))),
                  tb(e, nl(t, 3), s, !0)
                );
              }
              function nB(e) {
                return (null == e ? 0 : e.length) ? rF(e, 1) : [];
              }
              function nW(e) {
                return e && e.length ? e[0] : r;
              }
              var nG = ip(function (e) {
                  var t = tf(e, iN);
                  return t.length && t[0] === e[0] ? r1(t) : [];
                }),
                nY = ip(function (e) {
                  var t = nQ(e),
                    i = tf(e, iN);
                  return (
                    t === nQ(i) ? (t = r) : i.pop(),
                    i.length && i[0] === e[0] ? r1(i, nl(t, 2)) : []
                  );
                }),
                nJ = ip(function (e) {
                  var t = nQ(e),
                    i = tf(e, iN);
                  return (
                    (t = "function" == typeof t ? t : r) && i.pop(),
                    i.length && i[0] === e[0] ? r1(i, r, t) : []
                  );
                });
              function nQ(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : r;
              }
              var nX = ip(nZ);
              function nZ(e, t) {
                return e && e.length && t && t.length ? ic(e, t) : e;
              }
              var n0 = ns(function (e, t) {
                var r = null == e ? 0 : e.length,
                  i = rR(e, t);
                return (
                  iu(
                    e,
                    tf(t, function (e) {
                      return nw(e, r) ? +e : e;
                    }).sort(iq)
                  ),
                  i
                );
              });
              function n1(e) {
                return null == e ? e : t4.call(e);
              }
              var n5 = ip(function (e) {
                  return iI(rF(e, 1, sM, !0));
                }),
                n3 = ip(function (e) {
                  var t = nQ(e);
                  return sM(t) && (t = r), iI(rF(e, 1, sM, !0), nl(t, 2));
                }),
                n6 = ip(function (e) {
                  var t = nQ(e);
                  return (
                    (t = "function" == typeof t ? t : r),
                    iI(rF(e, 1, sM, !0), r, t)
                  );
                });
              function n2(e) {
                if (!(e && e.length)) return [];
                var t = 0;
                return (
                  (e = tu(e, function (e) {
                    if (sM(e)) return (t = t5(e.length, t)), !0;
                  })),
                  tC(t, function (t) {
                    return tf(e, tI(t));
                  })
                );
              }
              function n8(e, t) {
                if (!(e && e.length)) return [];
                var i = n2(e);
                return null == t
                  ? i
                  : tf(i, function (e) {
                      return ts(t, r, e);
                    });
              }
              var n4 = ip(function (e, t) {
                  return sM(e) ? rk(e, t) : [];
                }),
                n9 = ip(function (e) {
                  return iA(tu(e, sM));
                }),
                n7 = ip(function (e) {
                  var t = nQ(e);
                  return sM(t) && (t = r), iA(tu(e, sM), nl(t, 2));
                }),
                se = ip(function (e) {
                  var t = nQ(e);
                  return (
                    (t = "function" == typeof t ? t : r), iA(tu(e, sM), r, t)
                  );
                }),
                st = ip(n2),
                sr = ip(function (e) {
                  var t = e.length,
                    i = t > 1 ? e[t - 1] : r;
                  return (
                    (i = "function" == typeof i ? (e.pop(), i) : r), n8(e, i)
                  );
                });
              function si(e) {
                var t = rd(e);
                return (t.__chain__ = !0), t;
              }
              function sn(e, t) {
                return t(e);
              }
              var ss = ns(function (e) {
                  var t = e.length,
                    i = t ? e[0] : 0,
                    n = this.__wrapped__,
                    s = function (t) {
                      return rR(t, e);
                    };
                  return !(t > 1) &&
                    !this.__actions__.length &&
                    n instanceof rm &&
                    nw(i)
                    ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                        func: sn,
                        args: [s],
                        thisArg: r,
                      }),
                      new rv(n, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(r), e;
                      }))
                    : this.thru(s);
                }),
                so = iV(function (e, t, r) {
                  eR.call(e, r) ? ++e[r] : rN(e, r, 1);
                }),
                sa = iQ(nV),
                sc = iQ(nK);
              function su(e, t) {
                return (sU(e) ? ta : rM)(e, nl(t, 3));
              }
              function sh(e, t) {
                return (
                  sU(e)
                    ? function (e, t) {
                        for (
                          var r = null == e ? 0 : e.length;
                          r-- && !1 !== t(e[r], r, e);

                        );
                        return e;
                      }
                    : rq
                )(e, nl(t, 3));
              }
              var sl = iV(function (e, t, r) {
                  eR.call(e, r) ? e[r].push(t) : rN(e, r, [t]);
                }),
                sf = ip(function (e, t, r) {
                  var i = -1,
                    n = "function" == typeof t,
                    s = sk(e) ? em(e.length) : [];
                  return (
                    rM(e, function (e) {
                      s[++i] = n ? ts(t, e, r) : r5(e, t, r);
                    }),
                    s
                  );
                }),
                sp = iV(function (e, t, r) {
                  rN(e, r, t);
                });
              function sd(e, t) {
                return (sU(e) ? tf : ie)(e, nl(t, 3));
              }
              var sg = iV(
                  function (e, t, r) {
                    e[r ? 0 : 1].push(t);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                sy = ip(function (e, t) {
                  if (null == e) return [];
                  var r = t.length;
                  return (
                    r > 1 && nE(e, t[0], t[1])
                      ? (t = [])
                      : r > 2 && nE(t[0], t[1], t[2]) && (t = [t[0]]),
                    io(e, rF(t, 1), [])
                  );
                }),
                sv =
                  tS ||
                  function () {
                    return e3.Date.now();
                  };
              function sm(e, t, i) {
                return (
                  (t = i ? r : t),
                  (t = e && null == t ? e.length : t),
                  ne(e, 128, r, r, r, r, t)
                );
              }
              function sb(e, t) {
                var n;
                if ("function" != typeof t) throw new eP(i);
                return (
                  (e = s2(e)),
                  function () {
                    return (
                      --e > 0 && (n = t.apply(this, arguments)),
                      e <= 1 && (t = r),
                      n
                    );
                  }
                );
              }
              var s_ = ip(function (e, t, r) {
                  var i = 1;
                  if (r.length) {
                    var n = tz(r, nh(s_));
                    i |= 32;
                  }
                  return ne(e, i, t, r, n);
                }),
                sw = ip(function (e, t, r) {
                  var i = 3;
                  if (r.length) {
                    var n = tz(r, nh(sw));
                    i |= 32;
                  }
                  return ne(t, i, e, r, n);
                });
              function sE(e, t, n) {
                var s,
                  o,
                  a,
                  c,
                  u,
                  h,
                  l = 0,
                  f = !1,
                  p = !1,
                  d = !0;
                if ("function" != typeof e) throw new eP(i);
                function g(t) {
                  var i = s,
                    n = o;
                  return (s = o = r), (l = t), (c = e.apply(n, i));
                }
                function y(e) {
                  var i = e - h,
                    n = e - l;
                  return h === r || i >= t || i < 0 || (p && n >= a);
                }
                function v() {
                  var e,
                    r,
                    i,
                    n = sv();
                  if (y(n)) return m(n);
                  u = nR(
                    v,
                    ((e = n - h),
                    (r = n - l),
                    (i = t - e),
                    p ? t3(i, a - r) : i)
                  );
                }
                function m(e) {
                  return (u = r), d && s ? g(e) : ((s = o = r), c);
                }
                function b() {
                  var e,
                    i = sv(),
                    n = y(i);
                  if (((s = arguments), (o = this), (h = i), n)) {
                    if (u === r)
                      return (l = e = h), (u = nR(v, t)), f ? g(e) : c;
                    if (p) return iU(u), (u = nR(v, t)), g(h);
                  }
                  return u === r && (u = nR(v, t)), c;
                }
                return (
                  (t = s4(t) || 0),
                  sK(n) &&
                    ((f = !!n.leading),
                    (a = (p = "maxWait" in n) ? t5(s4(n.maxWait) || 0, t) : a),
                    (d = "trailing" in n ? !!n.trailing : d)),
                  (b.cancel = function () {
                    u !== r && iU(u), (l = 0), (s = h = o = u = r);
                  }),
                  (b.flush = function () {
                    return u === r ? c : m(sv());
                  }),
                  b
                );
              }
              var sD = ip(function (e, t) {
                  return rL(e, 1, t);
                }),
                sI = ip(function (e, t, r) {
                  return rL(e, s4(t) || 0, r);
                });
              function sS(e, t) {
                if (
                  "function" != typeof e ||
                  (null != t && "function" != typeof t)
                )
                  throw new eP(i);
                var r = function () {
                  var i = arguments,
                    n = t ? t.apply(this, i) : i[0],
                    s = r.cache;
                  if (s.has(n)) return s.get(n);
                  var o = e.apply(this, i);
                  return (r.cache = s.set(n, o) || s), o;
                };
                return (r.cache = new (sS.Cache || rw)()), r;
              }
              function sP(e) {
                if ("function" != typeof e) throw new eP(i);
                return function () {
                  var t = arguments;
                  switch (t.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, t[0]);
                    case 2:
                      return !e.call(this, t[0], t[1]);
                    case 3:
                      return !e.call(this, t[0], t[1], t[2]);
                  }
                  return !e.apply(this, t);
                };
              }
              sS.Cache = rw;
              var sO = ip(function (e, t) {
                  var r = (t =
                    1 == t.length && sU(t[0])
                      ? tf(t[0], tx(nl()))
                      : tf(rF(t, 1), tx(nl()))).length;
                  return ip(function (i) {
                    for (var n = -1, s = t3(i.length, r); ++n < s; )
                      i[n] = t[n].call(this, i[n]);
                    return ts(e, this, i);
                  });
                }),
                sC = ip(function (e, t) {
                  var i = tz(t, nh(sC));
                  return ne(e, 32, r, t, i);
                }),
                sA = ip(function (e, t) {
                  var i = tz(t, nh(sA));
                  return ne(e, 64, r, t, i);
                }),
                sx = ns(function (e, t) {
                  return ne(e, 256, r, r, r, t);
                });
              function sN(e, t) {
                return e === t || (e != e && t != t);
              }
              var sR = i2(rX),
                sT = i2(function (e, t) {
                  return e >= t;
                }),
                sj = r3(
                  (function () {
                    return arguments;
                  })()
                )
                  ? r3
                  : function (e) {
                      return (
                        sB(e) && eR.call(e, "callee") && !e1.call(e, "callee")
                      );
                    },
                sU = em.isArray,
                sL = e7
                  ? tx(e7)
                  : function (e) {
                      return sB(e) && rQ(e) == S;
                    };
              function sk(e) {
                return null != e && sV(e.length) && !sH(e);
              }
              function sM(e) {
                return sB(e) && sk(e);
              }
              var sq = tX || oQ,
                s$ = te
                  ? tx(te)
                  : function (e) {
                      return sB(e) && rQ(e) == f;
                    };
              function sz(e) {
                if (!sB(e)) return !1;
                var t = rQ(e);
                return (
                  t == p ||
                  "[object DOMException]" == t ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !sY(e))
                );
              }
              function sH(e) {
                if (!sK(e)) return !1;
                var t = rQ(e);
                return (
                  t == d ||
                  t == g ||
                  "[object AsyncFunction]" == t ||
                  "[object Proxy]" == t
                );
              }
              function sF(e) {
                return "number" == typeof e && e == s2(e);
              }
              function sV(e) {
                return (
                  "number" == typeof e &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e <= 9007199254740991
                );
              }
              function sK(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t);
              }
              function sB(e) {
                return null != e && "object" == typeof e;
              }
              var sW = tt
                ? tx(tt)
                : function (e) {
                    return sB(e) && nv(e) == y;
                  };
              function sG(e) {
                return "number" == typeof e || (sB(e) && rQ(e) == v);
              }
              function sY(e) {
                if (!sB(e) || rQ(e) != m) return !1;
                var t = eB(e);
                if (null === t) return !0;
                var r = eR.call(t, "constructor") && t.constructor;
                return (
                  "function" == typeof r && r instanceof r && eN.call(r) == eL
                );
              }
              var sJ = tr
                  ? tx(tr)
                  : function (e) {
                      return sB(e) && rQ(e) == _;
                    },
                sQ = ti
                  ? tx(ti)
                  : function (e) {
                      return sB(e) && nv(e) == w;
                    };
              function sX(e) {
                return "string" == typeof e || (!sU(e) && sB(e) && rQ(e) == E);
              }
              function sZ(e) {
                return "symbol" == typeof e || (sB(e) && rQ(e) == D);
              }
              var s0 = tn
                  ? tx(tn)
                  : function (e) {
                      return sB(e) && sV(e.length) && !!eJ[rQ(e)];
                    },
                s1 = i2(r7),
                s5 = i2(function (e, t) {
                  return e <= t;
                });
              function s3(e) {
                if (!e) return [];
                if (sk(e)) return sX(e) ? tV(e) : iH(e);
                if (e2 && e[e2])
                  return (function (e) {
                    for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
                    return r;
                  })(e[e2]());
                var t = nv(e);
                return (t == y ? tq : t == w ? tH : ow)(e);
              }
              function s6(e) {
                return e
                  ? (e = s4(e)) === o || e === -o
                    ? (e < 0 ? -1 : 1) * 17976931348623157e292
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function s2(e) {
                var t = s6(e),
                  r = t % 1;
                return t == t ? (r ? t - r : t) : 0;
              }
              function s8(e) {
                return e ? rT(s2(e), 0, 4294967295) : 0;
              }
              function s4(e) {
                if ("number" == typeof e) return e;
                if (sZ(e)) return a;
                if (sK(e)) {
                  var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = sK(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = tA(e);
                var r = ec.test(e);
                return r || eh.test(e)
                  ? e0(e.slice(2), r ? 2 : 8)
                  : ea.test(e)
                  ? a
                  : +e;
              }
              function s9(e) {
                return iF(e, op(e));
              }
              function s7(e) {
                return null == e ? "" : iD(e);
              }
              var oe = iK(function (e, t) {
                  if (nP(t) || sk(t)) {
                    iF(t, of(t), e);
                    return;
                  }
                  for (var r in t) eR.call(t, r) && rO(e, r, t[r]);
                }),
                ot = iK(function (e, t) {
                  iF(t, op(t), e);
                }),
                or = iK(function (e, t, r, i) {
                  iF(t, op(t), e, i);
                }),
                oi = iK(function (e, t, r, i) {
                  iF(t, of(t), e, i);
                }),
                on = ns(rR),
                os = ip(function (e, t) {
                  e = eD(e);
                  var i = -1,
                    n = t.length,
                    s = n > 2 ? t[2] : r;
                  for (s && nE(t[0], t[1], s) && (n = 1); ++i < n; )
                    for (
                      var o = t[i], a = op(o), c = -1, u = a.length;
                      ++c < u;

                    ) {
                      var h = a[c],
                        l = e[h];
                      (l === r || (sN(l, eA[h]) && !eR.call(e, h))) &&
                        (e[h] = o[h]);
                    }
                  return e;
                }),
                oo = ip(function (e) {
                  return e.push(r, nr), ts(og, r, e);
                });
              function oa(e, t, i) {
                var n = null == e ? r : rY(e, t);
                return n === r ? i : n;
              }
              function oc(e, t) {
                return null != e && nm(e, t, r0);
              }
              var ou = i0(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = eU.call(t)),
                    (e[t] = r);
                }, oU(oM)),
                oh = i0(function (e, t, r) {
                  null != t &&
                    "function" != typeof t.toString &&
                    (t = eU.call(t)),
                    eR.call(e, t) ? e[t].push(r) : (e[t] = [r]);
                }, nl),
                ol = ip(r5);
              function of(e) {
                return sk(e) ? rI(e) : r9(e);
              }
              function op(e) {
                return sk(e)
                  ? rI(e, !0)
                  : (function (e) {
                      if (!sK(e))
                        return (function (e) {
                          var t = [];
                          if (null != e) for (var r in eD(e)) t.push(r);
                          return t;
                        })(e);
                      var t = nP(e),
                        r = [];
                      for (var i in e)
                        ("constructor" == i && (t || !eR.call(e, i))) ||
                          r.push(i);
                      return r;
                    })(e);
              }
              var od = iK(function (e, t, r) {
                  ii(e, t, r);
                }),
                og = iK(function (e, t, r, i) {
                  ii(e, t, r, i);
                }),
                oy = ns(function (e, t) {
                  var r = {};
                  if (null == e) return r;
                  var i = !1;
                  (t = tf(t, function (t) {
                    return (t = iT(t, e)), i || (i = t.length > 1), t;
                  })),
                    iF(e, na(e), r),
                    i && (r = rj(r, 7, ni));
                  for (var n = t.length; n--; ) iS(r, t[n]);
                  return r;
                }),
                ov = ns(function (e, t) {
                  return null == e
                    ? {}
                    : ia(e, t, function (t, r) {
                        return oc(e, r);
                      });
                });
              function om(e, t) {
                if (null == e) return {};
                var r = tf(na(e), function (e) {
                  return [e];
                });
                return (
                  (t = nl(t)),
                  ia(e, r, function (e, r) {
                    return t(e, r[0]);
                  })
                );
              }
              var ob = i7(of),
                o_ = i7(op);
              function ow(e) {
                return null == e ? [] : tN(e, of(e));
              }
              var oE = iY(function (e, t, r) {
                return (t = t.toLowerCase()), e + (r ? oD(t) : t);
              });
              function oD(e) {
                return oN(s7(e).toLowerCase());
              }
              function oI(e) {
                return (e = s7(e)) && e.replace(ef, tU).replace(eF, "");
              }
              var oS = iY(function (e, t, r) {
                  return e + (r ? "-" : "") + t.toLowerCase();
                }),
                oP = iY(function (e, t, r) {
                  return e + (r ? " " : "") + t.toLowerCase();
                }),
                oO = iG("toLowerCase"),
                oC = iY(function (e, t, r) {
                  return e + (r ? "_" : "") + t.toLowerCase();
                }),
                oA = iY(function (e, t, r) {
                  return e + (r ? " " : "") + oN(t);
                }),
                ox = iY(function (e, t, r) {
                  return e + (r ? " " : "") + t.toUpperCase();
                }),
                oN = iG("toUpperCase");
              function oR(e, t, i) {
                var n;
                return (
                  (e = s7(e)),
                  (t = i ? r : t) === r
                    ? ((n = e), eW.test(n))
                      ? e.match(eK) || []
                      : e.match(er) || []
                    : e.match(t) || []
                );
              }
              var oT = ip(function (e, t) {
                  try {
                    return ts(e, r, t);
                  } catch (e) {
                    return sz(e) ? e : new e_(e);
                  }
                }),
                oj = ns(function (e, t) {
                  return (
                    ta(t, function (t) {
                      rN(e, (t = nM(t)), s_(e[t], e));
                    }),
                    e
                  );
                });
              function oU(e) {
                return function () {
                  return e;
                };
              }
              var oL = iX(),
                ok = iX(!0);
              function oM(e) {
                return e;
              }
              function oq(e) {
                return r4("function" == typeof e ? e : rj(e, 1));
              }
              var o$ = ip(function (e, t) {
                  return function (r) {
                    return r5(r, e, t);
                  };
                }),
                oz = ip(function (e, t) {
                  return function (r) {
                    return r5(e, r, t);
                  };
                });
              function oH(e, t, r) {
                var i = of(t),
                  n = rG(t, i);
                null != r ||
                  (sK(t) && (n.length || !i.length)) ||
                  ((r = t), (t = e), (e = this), (n = rG(t, of(t))));
                var s = !(sK(r) && "chain" in r) || !!r.chain,
                  o = sH(e);
                return (
                  ta(n, function (r) {
                    var i = t[r];
                    (e[r] = i),
                      o &&
                        (e.prototype[r] = function () {
                          var t = this.__chain__;
                          if (s || t) {
                            var r = e(this.__wrapped__);
                            return (
                              (r.__actions__ = iH(this.__actions__)).push({
                                func: i,
                                args: arguments,
                                thisArg: e,
                              }),
                              (r.__chain__ = t),
                              r
                            );
                          }
                          return i.apply(e, tp([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function oF() {}
              var oV = i5(tf),
                oK = i5(tc),
                oB = i5(ty);
              function oW(e) {
                return nD(e)
                  ? tI(nM(e))
                  : function (t) {
                      return rY(t, e);
                    };
              }
              var oG = i6(),
                oY = i6(!0);
              function oJ() {
                return [];
              }
              function oQ() {
                return !1;
              }
              var oX = i1(function (e, t) {
                  return e + t;
                }, 0),
                oZ = i4("ceil"),
                o0 = i1(function (e, t) {
                  return e / t;
                }, 1),
                o1 = i4("floor"),
                o5 = i1(function (e, t) {
                  return e * t;
                }, 1),
                o3 = i4("round"),
                o6 = i1(function (e, t) {
                  return e - t;
                }, 0);
              return (
                (rd.after = function (e, t) {
                  if ("function" != typeof t) throw new eP(i);
                  return (
                    (e = s2(e)),
                    function () {
                      if (--e < 1) return t.apply(this, arguments);
                    }
                  );
                }),
                (rd.ary = sm),
                (rd.assign = oe),
                (rd.assignIn = ot),
                (rd.assignInWith = or),
                (rd.assignWith = oi),
                (rd.at = on),
                (rd.before = sb),
                (rd.bind = s_),
                (rd.bindAll = oj),
                (rd.bindKey = sw),
                (rd.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return sU(e) ? e : [e];
                }),
                (rd.chain = si),
                (rd.chunk = function (e, t, i) {
                  t = (i ? nE(e, t, i) : t === r) ? 1 : t5(s2(t), 0);
                  var n = null == e ? 0 : e.length;
                  if (!n || t < 1) return [];
                  for (var s = 0, o = 0, a = em(tY(n / t)); s < n; )
                    a[o++] = iv(e, s, (s += t));
                  return a;
                }),
                (rd.compact = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, i = 0, n = [];
                    ++t < r;

                  ) {
                    var s = e[t];
                    s && (n[i++] = s);
                  }
                  return n;
                }),
                (rd.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var t = em(e - 1), r = arguments[0], i = e; i--; )
                    t[i - 1] = arguments[i];
                  return tp(sU(r) ? iH(r) : [r], rF(t, 1));
                }),
                (rd.cond = function (e) {
                  var t = null == e ? 0 : e.length,
                    r = nl();
                  return (
                    (e = t
                      ? tf(e, function (e) {
                          if ("function" != typeof e[1]) throw new eP(i);
                          return [r(e[0]), e[1]];
                        })
                      : []),
                    ip(function (r) {
                      for (var i = -1; ++i < t; ) {
                        var n = e[i];
                        if (ts(n[0], this, r)) return ts(n[1], this, r);
                      }
                    })
                  );
                }),
                (rd.conforms = function (e) {
                  var t, r;
                  return (
                    (r = of((t = rj(e, 1)))),
                    function (e) {
                      return rU(e, t, r);
                    }
                  );
                }),
                (rd.constant = oU),
                (rd.countBy = so),
                (rd.create = function (e, t) {
                  var r = rg(e);
                  return null == t ? r : rx(r, t);
                }),
                (rd.curry = function e(t, i, n) {
                  i = n ? r : i;
                  var s = ne(t, 8, r, r, r, r, r, i);
                  return (s.placeholder = e.placeholder), s;
                }),
                (rd.curryRight = function e(t, i, n) {
                  i = n ? r : i;
                  var s = ne(t, 16, r, r, r, r, r, i);
                  return (s.placeholder = e.placeholder), s;
                }),
                (rd.debounce = sE),
                (rd.defaults = os),
                (rd.defaultsDeep = oo),
                (rd.defer = sD),
                (rd.delay = sI),
                (rd.difference = nz),
                (rd.differenceBy = nH),
                (rd.differenceWith = nF),
                (rd.drop = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? iv(e, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t, n)
                    : [];
                }),
                (rd.dropRight = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? iv(
                        e,
                        0,
                        (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t
                      )
                    : [];
                }),
                (rd.dropRightWhile = function (e, t) {
                  return e && e.length ? iO(e, nl(t, 3), !0, !0) : [];
                }),
                (rd.dropWhile = function (e, t) {
                  return e && e.length ? iO(e, nl(t, 3), !0) : [];
                }),
                (rd.fill = function (e, t, i, n) {
                  var s = null == e ? 0 : e.length;
                  return s
                    ? (i &&
                        "number" != typeof i &&
                        nE(e, t, i) &&
                        ((i = 0), (n = s)),
                      (function (e, t, i, n) {
                        var s = e.length;
                        for (
                          (i = s2(i)) < 0 && (i = -i > s ? 0 : s + i),
                            (n = n === r || n > s ? s : s2(n)) < 0 && (n += s),
                            n = i > n ? 0 : s8(n);
                          i < n;

                        )
                          e[i++] = t;
                        return e;
                      })(e, t, i, n))
                    : [];
                }),
                (rd.filter = function (e, t) {
                  return (sU(e) ? tu : rH)(e, nl(t, 3));
                }),
                (rd.flatMap = function (e, t) {
                  return rF(sd(e, t), 1);
                }),
                (rd.flatMapDeep = function (e, t) {
                  return rF(sd(e, t), o);
                }),
                (rd.flatMapDepth = function (e, t, i) {
                  return (i = i === r ? 1 : s2(i)), rF(sd(e, t), i);
                }),
                (rd.flatten = nB),
                (rd.flattenDeep = function (e) {
                  return (null == e ? 0 : e.length) ? rF(e, o) : [];
                }),
                (rd.flattenDepth = function (e, t) {
                  return (null == e ? 0 : e.length)
                    ? rF(e, (t = t === r ? 1 : s2(t)))
                    : [];
                }),
                (rd.flip = function (e) {
                  return ne(e, 512);
                }),
                (rd.flow = oL),
                (rd.flowRight = ok),
                (rd.fromPairs = function (e) {
                  for (
                    var t = -1, r = null == e ? 0 : e.length, i = {};
                    ++t < r;

                  ) {
                    var n = e[t];
                    i[n[0]] = n[1];
                  }
                  return i;
                }),
                (rd.functions = function (e) {
                  return null == e ? [] : rG(e, of(e));
                }),
                (rd.functionsIn = function (e) {
                  return null == e ? [] : rG(e, op(e));
                }),
                (rd.groupBy = sl),
                (rd.initial = function (e) {
                  return (null == e ? 0 : e.length) ? iv(e, 0, -1) : [];
                }),
                (rd.intersection = nG),
                (rd.intersectionBy = nY),
                (rd.intersectionWith = nJ),
                (rd.invert = ou),
                (rd.invertBy = oh),
                (rd.invokeMap = sf),
                (rd.iteratee = oq),
                (rd.keyBy = sp),
                (rd.keys = of),
                (rd.keysIn = op),
                (rd.map = sd),
                (rd.mapKeys = function (e, t) {
                  var r = {};
                  return (
                    (t = nl(t, 3)),
                    rB(e, function (e, i, n) {
                      rN(r, t(e, i, n), e);
                    }),
                    r
                  );
                }),
                (rd.mapValues = function (e, t) {
                  var r = {};
                  return (
                    (t = nl(t, 3)),
                    rB(e, function (e, i, n) {
                      rN(r, i, t(e, i, n));
                    }),
                    r
                  );
                }),
                (rd.matches = function (e) {
                  return it(rj(e, 1));
                }),
                (rd.matchesProperty = function (e, t) {
                  return ir(e, rj(t, 1));
                }),
                (rd.memoize = sS),
                (rd.merge = od),
                (rd.mergeWith = og),
                (rd.method = o$),
                (rd.methodOf = oz),
                (rd.mixin = oH),
                (rd.negate = sP),
                (rd.nthArg = function (e) {
                  return (
                    (e = s2(e)),
                    ip(function (t) {
                      return is(t, e);
                    })
                  );
                }),
                (rd.omit = oy),
                (rd.omitBy = function (e, t) {
                  return om(e, sP(nl(t)));
                }),
                (rd.once = function (e) {
                  return sb(2, e);
                }),
                (rd.orderBy = function (e, t, i, n) {
                  return null == e
                    ? []
                    : (sU(t) || (t = null == t ? [] : [t]),
                      sU((i = n ? r : i)) || (i = null == i ? [] : [i]),
                      io(e, t, i));
                }),
                (rd.over = oV),
                (rd.overArgs = sO),
                (rd.overEvery = oK),
                (rd.overSome = oB),
                (rd.partial = sC),
                (rd.partialRight = sA),
                (rd.partition = sg),
                (rd.pick = ov),
                (rd.pickBy = om),
                (rd.property = oW),
                (rd.propertyOf = function (e) {
                  return function (t) {
                    return null == e ? r : rY(e, t);
                  };
                }),
                (rd.pull = nX),
                (rd.pullAll = nZ),
                (rd.pullAllBy = function (e, t, r) {
                  return e && e.length && t && t.length
                    ? ic(e, t, nl(r, 2))
                    : e;
                }),
                (rd.pullAllWith = function (e, t, i) {
                  return e && e.length && t && t.length ? ic(e, t, r, i) : e;
                }),
                (rd.pullAt = n0),
                (rd.range = oG),
                (rd.rangeRight = oY),
                (rd.rearg = sx),
                (rd.reject = function (e, t) {
                  return (sU(e) ? tu : rH)(e, sP(nl(t, 3)));
                }),
                (rd.remove = function (e, t) {
                  var r = [];
                  if (!(e && e.length)) return r;
                  var i = -1,
                    n = [],
                    s = e.length;
                  for (t = nl(t, 3); ++i < s; ) {
                    var o = e[i];
                    t(o, i, e) && (r.push(o), n.push(i));
                  }
                  return iu(e, n), r;
                }),
                (rd.rest = function (e, t) {
                  if ("function" != typeof e) throw new eP(i);
                  return ip(e, (t = t === r ? t : s2(t)));
                }),
                (rd.reverse = n1),
                (rd.sampleSize = function (e, t, i) {
                  return (
                    (t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t)),
                    (sU(e)
                      ? function (e, t) {
                          return nL(iH(e), rT(t, 0, e.length));
                        }
                      : function (e, t) {
                          var r = ow(e);
                          return nL(r, rT(t, 0, r.length));
                        })(e, t)
                  );
                }),
                (rd.set = function (e, t, r) {
                  return null == e ? e : id(e, t, r);
                }),
                (rd.setWith = function (e, t, i, n) {
                  return (
                    (n = "function" == typeof n ? n : r),
                    null == e ? e : id(e, t, i, n)
                  );
                }),
                (rd.shuffle = function (e) {
                  return (
                    sU(e)
                      ? function (e) {
                          return nL(iH(e));
                        }
                      : function (e) {
                          return nL(ow(e));
                        }
                  )(e);
                }),
                (rd.slice = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? (i && "number" != typeof i && nE(e, t, i)
                        ? ((t = 0), (i = n))
                        : ((t = null == t ? 0 : s2(t)),
                          (i = i === r ? n : s2(i))),
                      iv(e, t, i))
                    : [];
                }),
                (rd.sortBy = sy),
                (rd.sortedUniq = function (e) {
                  return e && e.length ? iw(e) : [];
                }),
                (rd.sortedUniqBy = function (e, t) {
                  return e && e.length ? iw(e, nl(t, 2)) : [];
                }),
                (rd.split = function (e, t, i) {
                  return (
                    i && "number" != typeof i && nE(e, t, i) && (t = i = r),
                    (i = i === r ? 4294967295 : i >>> 0)
                      ? (e = s7(e)) &&
                        ("string" == typeof t || (null != t && !sJ(t))) &&
                        !(t = iD(t)) &&
                        tM(e)
                        ? ij(tV(e), 0, i)
                        : e.split(t, i)
                      : []
                  );
                }),
                (rd.spread = function (e, t) {
                  if ("function" != typeof e) throw new eP(i);
                  return (
                    (t = null == t ? 0 : t5(s2(t), 0)),
                    ip(function (r) {
                      var i = r[t],
                        n = ij(r, 0, t);
                      return i && tp(n, i), ts(e, this, n);
                    })
                  );
                }),
                (rd.tail = function (e) {
                  var t = null == e ? 0 : e.length;
                  return t ? iv(e, 1, t) : [];
                }),
                (rd.take = function (e, t, i) {
                  return e && e.length
                    ? iv(e, 0, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t)
                    : [];
                }),
                (rd.takeRight = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  return n
                    ? iv(
                        e,
                        (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t,
                        n
                      )
                    : [];
                }),
                (rd.takeRightWhile = function (e, t) {
                  return e && e.length ? iO(e, nl(t, 3), !1, !0) : [];
                }),
                (rd.takeWhile = function (e, t) {
                  return e && e.length ? iO(e, nl(t, 3)) : [];
                }),
                (rd.tap = function (e, t) {
                  return t(e), e;
                }),
                (rd.throttle = function (e, t, r) {
                  var n = !0,
                    s = !0;
                  if ("function" != typeof e) throw new eP(i);
                  return (
                    sK(r) &&
                      ((n = "leading" in r ? !!r.leading : n),
                      (s = "trailing" in r ? !!r.trailing : s)),
                    sE(e, t, { leading: n, maxWait: t, trailing: s })
                  );
                }),
                (rd.thru = sn),
                (rd.toArray = s3),
                (rd.toPairs = ob),
                (rd.toPairsIn = o_),
                (rd.toPath = function (e) {
                  return sU(e) ? tf(e, nM) : sZ(e) ? [e] : iH(nk(s7(e)));
                }),
                (rd.toPlainObject = s9),
                (rd.transform = function (e, t, r) {
                  var i = sU(e),
                    n = i || sq(e) || s0(e);
                  if (((t = nl(t, 4)), null == r)) {
                    var s = e && e.constructor;
                    r = n
                      ? i
                        ? new s()
                        : []
                      : sK(e) && sH(s)
                      ? rg(eB(e))
                      : {};
                  }
                  return (
                    (n ? ta : rB)(e, function (e, i, n) {
                      return t(r, e, i, n);
                    }),
                    r
                  );
                }),
                (rd.unary = function (e) {
                  return sm(e, 1);
                }),
                (rd.union = n5),
                (rd.unionBy = n3),
                (rd.unionWith = n6),
                (rd.uniq = function (e) {
                  return e && e.length ? iI(e) : [];
                }),
                (rd.uniqBy = function (e, t) {
                  return e && e.length ? iI(e, nl(t, 2)) : [];
                }),
                (rd.uniqWith = function (e, t) {
                  return (
                    (t = "function" == typeof t ? t : r),
                    e && e.length ? iI(e, r, t) : []
                  );
                }),
                (rd.unset = function (e, t) {
                  return null == e || iS(e, t);
                }),
                (rd.unzip = n2),
                (rd.unzipWith = n8),
                (rd.update = function (e, t, r) {
                  return null == e ? e : iP(e, t, iR(r));
                }),
                (rd.updateWith = function (e, t, i, n) {
                  return (
                    (n = "function" == typeof n ? n : r),
                    null == e ? e : iP(e, t, iR(i), n)
                  );
                }),
                (rd.values = ow),
                (rd.valuesIn = function (e) {
                  return null == e ? [] : tN(e, op(e));
                }),
                (rd.without = n4),
                (rd.words = oR),
                (rd.wrap = function (e, t) {
                  return sC(iR(t), e);
                }),
                (rd.xor = n9),
                (rd.xorBy = n7),
                (rd.xorWith = se),
                (rd.zip = st),
                (rd.zipObject = function (e, t) {
                  return ix(e || [], t || [], rO);
                }),
                (rd.zipObjectDeep = function (e, t) {
                  return ix(e || [], t || [], id);
                }),
                (rd.zipWith = sr),
                (rd.entries = ob),
                (rd.entriesIn = o_),
                (rd.extend = ot),
                (rd.extendWith = or),
                oH(rd, rd),
                (rd.add = oX),
                (rd.attempt = oT),
                (rd.camelCase = oE),
                (rd.capitalize = oD),
                (rd.ceil = oZ),
                (rd.clamp = function (e, t, i) {
                  return (
                    i === r && ((i = t), (t = r)),
                    i !== r && (i = (i = s4(i)) == i ? i : 0),
                    t !== r && (t = (t = s4(t)) == t ? t : 0),
                    rT(s4(e), t, i)
                  );
                }),
                (rd.clone = function (e) {
                  return rj(e, 4);
                }),
                (rd.cloneDeep = function (e) {
                  return rj(e, 5);
                }),
                (rd.cloneDeepWith = function (e, t) {
                  return rj(e, 5, (t = "function" == typeof t ? t : r));
                }),
                (rd.cloneWith = function (e, t) {
                  return rj(e, 4, (t = "function" == typeof t ? t : r));
                }),
                (rd.conformsTo = function (e, t) {
                  return null == t || rU(e, t, of(t));
                }),
                (rd.deburr = oI),
                (rd.defaultTo = function (e, t) {
                  return null == e || e != e ? t : e;
                }),
                (rd.divide = o0),
                (rd.endsWith = function (e, t, i) {
                  (e = s7(e)), (t = iD(t));
                  var n = e.length,
                    s = (i = i === r ? n : rT(s2(i), 0, n));
                  return (i -= t.length) >= 0 && e.slice(i, s) == t;
                }),
                (rd.eq = sN),
                (rd.escape = function (e) {
                  return (e = s7(e)) && H.test(e) ? e.replace($, tL) : e;
                }),
                (rd.escapeRegExp = function (e) {
                  return (e = s7(e)) && J.test(e) ? e.replace(Y, "\\$&") : e;
                }),
                (rd.every = function (e, t, i) {
                  var n = sU(e) ? tc : r$;
                  return i && nE(e, t, i) && (t = r), n(e, nl(t, 3));
                }),
                (rd.find = sa),
                (rd.findIndex = nV),
                (rd.findKey = function (e, t) {
                  return tm(e, nl(t, 3), rB);
                }),
                (rd.findLast = sc),
                (rd.findLastIndex = nK),
                (rd.findLastKey = function (e, t) {
                  return tm(e, nl(t, 3), rW);
                }),
                (rd.floor = o1),
                (rd.forEach = su),
                (rd.forEachRight = sh),
                (rd.forIn = function (e, t) {
                  return null == e ? e : rV(e, nl(t, 3), op);
                }),
                (rd.forInRight = function (e, t) {
                  return null == e ? e : rK(e, nl(t, 3), op);
                }),
                (rd.forOwn = function (e, t) {
                  return e && rB(e, nl(t, 3));
                }),
                (rd.forOwnRight = function (e, t) {
                  return e && rW(e, nl(t, 3));
                }),
                (rd.get = oa),
                (rd.gt = sR),
                (rd.gte = sT),
                (rd.has = function (e, t) {
                  return null != e && nm(e, t, rZ);
                }),
                (rd.hasIn = oc),
                (rd.head = nW),
                (rd.identity = oM),
                (rd.includes = function (e, t, r, i) {
                  (e = sk(e) ? e : ow(e)), (r = r && !i ? s2(r) : 0);
                  var n = e.length;
                  return (
                    r < 0 && (r = t5(n + r, 0)),
                    sX(e)
                      ? r <= n && e.indexOf(t, r) > -1
                      : !!n && t_(e, t, r) > -1
                  );
                }),
                (rd.indexOf = function (e, t, r) {
                  var i = null == e ? 0 : e.length;
                  if (!i) return -1;
                  var n = null == r ? 0 : s2(r);
                  return n < 0 && (n = t5(i + n, 0)), t_(e, t, n);
                }),
                (rd.inRange = function (e, t, i) {
                  var n, s, o;
                  return (
                    (t = s6(t)),
                    i === r ? ((i = t), (t = 0)) : (i = s6(i)),
                    (n = e = s4(e)) >= t3((s = t), (o = i)) && n < t5(s, o)
                  );
                }),
                (rd.invoke = ol),
                (rd.isArguments = sj),
                (rd.isArray = sU),
                (rd.isArrayBuffer = sL),
                (rd.isArrayLike = sk),
                (rd.isArrayLikeObject = sM),
                (rd.isBoolean = function (e) {
                  return !0 === e || !1 === e || (sB(e) && rQ(e) == l);
                }),
                (rd.isBuffer = sq),
                (rd.isDate = s$),
                (rd.isElement = function (e) {
                  return sB(e) && 1 === e.nodeType && !sY(e);
                }),
                (rd.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    sk(e) &&
                    (sU(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      sq(e) ||
                      s0(e) ||
                      sj(e))
                  )
                    return !e.length;
                  var t = nv(e);
                  if (t == y || t == w) return !e.size;
                  if (nP(e)) return !r9(e).length;
                  for (var r in e) if (eR.call(e, r)) return !1;
                  return !0;
                }),
                (rd.isEqual = function (e, t) {
                  return r6(e, t);
                }),
                (rd.isEqualWith = function (e, t, i) {
                  var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                  return n === r ? r6(e, t, r, i) : !!n;
                }),
                (rd.isError = sz),
                (rd.isFinite = function (e) {
                  return "number" == typeof e && tZ(e);
                }),
                (rd.isFunction = sH),
                (rd.isInteger = sF),
                (rd.isLength = sV),
                (rd.isMap = sW),
                (rd.isMatch = function (e, t) {
                  return e === t || r2(e, t, np(t));
                }),
                (rd.isMatchWith = function (e, t, i) {
                  return (
                    (i = "function" == typeof i ? i : r), r2(e, t, np(t), i)
                  );
                }),
                (rd.isNaN = function (e) {
                  return sG(e) && e != +e;
                }),
                (rd.isNative = function (e) {
                  if (nS(e))
                    throw new e_(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return r8(e);
                }),
                (rd.isNil = function (e) {
                  return null == e;
                }),
                (rd.isNull = function (e) {
                  return null === e;
                }),
                (rd.isNumber = sG),
                (rd.isObject = sK),
                (rd.isObjectLike = sB),
                (rd.isPlainObject = sY),
                (rd.isRegExp = sJ),
                (rd.isSafeInteger = function (e) {
                  return (
                    sF(e) && e >= -9007199254740991 && e <= 9007199254740991
                  );
                }),
                (rd.isSet = sQ),
                (rd.isString = sX),
                (rd.isSymbol = sZ),
                (rd.isTypedArray = s0),
                (rd.isUndefined = function (e) {
                  return e === r;
                }),
                (rd.isWeakMap = function (e) {
                  return sB(e) && nv(e) == I;
                }),
                (rd.isWeakSet = function (e) {
                  return sB(e) && "[object WeakSet]" == rQ(e);
                }),
                (rd.join = function (e, t) {
                  return null == e ? "" : t0.call(e, t);
                }),
                (rd.kebabCase = oS),
                (rd.last = nQ),
                (rd.lastIndexOf = function (e, t, i) {
                  var n = null == e ? 0 : e.length;
                  if (!n) return -1;
                  var s = n;
                  return (
                    i !== r &&
                      (s = (s = s2(i)) < 0 ? t5(n + s, 0) : t3(s, n - 1)),
                    t == t
                      ? (function (e, t, r) {
                          for (var i = r + 1; i-- && e[i] !== t; );
                          return i;
                        })(e, t, s)
                      : tb(e, tE, s, !0)
                  );
                }),
                (rd.lowerCase = oP),
                (rd.lowerFirst = oO),
                (rd.lt = s1),
                (rd.lte = s5),
                (rd.max = function (e) {
                  return e && e.length ? rz(e, oM, rX) : r;
                }),
                (rd.maxBy = function (e, t) {
                  return e && e.length ? rz(e, nl(t, 2), rX) : r;
                }),
                (rd.mean = function (e) {
                  return tD(e, oM);
                }),
                (rd.meanBy = function (e, t) {
                  return tD(e, nl(t, 2));
                }),
                (rd.min = function (e) {
                  return e && e.length ? rz(e, oM, r7) : r;
                }),
                (rd.minBy = function (e, t) {
                  return e && e.length ? rz(e, nl(t, 2), r7) : r;
                }),
                (rd.stubArray = oJ),
                (rd.stubFalse = oQ),
                (rd.stubObject = function () {
                  return {};
                }),
                (rd.stubString = function () {
                  return "";
                }),
                (rd.stubTrue = function () {
                  return !0;
                }),
                (rd.multiply = o5),
                (rd.nth = function (e, t) {
                  return e && e.length ? is(e, s2(t)) : r;
                }),
                (rd.noConflict = function () {
                  return e3._ === this && (e3._ = ek), this;
                }),
                (rd.noop = oF),
                (rd.now = sv),
                (rd.pad = function (e, t, r) {
                  e = s7(e);
                  var i = (t = s2(t)) ? tF(e) : 0;
                  if (!t || i >= t) return e;
                  var n = (t - i) / 2;
                  return i3(tJ(n), r) + e + i3(tY(n), r);
                }),
                (rd.padEnd = function (e, t, r) {
                  e = s7(e);
                  var i = (t = s2(t)) ? tF(e) : 0;
                  return t && i < t ? e + i3(t - i, r) : e;
                }),
                (rd.padStart = function (e, t, r) {
                  e = s7(e);
                  var i = (t = s2(t)) ? tF(e) : 0;
                  return t && i < t ? i3(t - i, r) + e : e;
                }),
                (rd.parseInt = function (e, t, r) {
                  return (
                    r || null == t ? (t = 0) : t && (t = +t),
                    t2(s7(e).replace(Q, ""), t || 0)
                  );
                }),
                (rd.random = function (e, t, i) {
                  if (
                    (i && "boolean" != typeof i && nE(e, t, i) && (t = i = r),
                    i === r &&
                      ("boolean" == typeof t
                        ? ((i = t), (t = r))
                        : "boolean" == typeof e && ((i = e), (e = r))),
                    e === r && t === r
                      ? ((e = 0), (t = 1))
                      : ((e = s6(e)),
                        t === r ? ((t = e), (e = 0)) : (t = s6(t))),
                    e > t)
                  ) {
                    var n = e;
                    (e = t), (t = n);
                  }
                  if (i || e % 1 || t % 1) {
                    var s = t8();
                    return t3(
                      e + s * (t - e + eZ("1e-" + ((s + "").length - 1))),
                      t
                    );
                  }
                  return ih(e, t);
                }),
                (rd.reduce = function (e, t, r) {
                  var i = sU(e) ? td : tP,
                    n = arguments.length < 3;
                  return i(e, nl(t, 4), r, n, rM);
                }),
                (rd.reduceRight = function (e, t, r) {
                  var i = sU(e) ? tg : tP,
                    n = arguments.length < 3;
                  return i(e, nl(t, 4), r, n, rq);
                }),
                (rd.repeat = function (e, t, i) {
                  return (
                    (t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t)), il(s7(e), t)
                  );
                }),
                (rd.replace = function () {
                  var e = arguments,
                    t = s7(e[0]);
                  return e.length < 3 ? t : t.replace(e[1], e[2]);
                }),
                (rd.result = function (e, t, i) {
                  t = iT(t, e);
                  var n = -1,
                    s = t.length;
                  for (s || ((s = 1), (e = r)); ++n < s; ) {
                    var o = null == e ? r : e[nM(t[n])];
                    o === r && ((n = s), (o = i)), (e = sH(o) ? o.call(e) : o);
                  }
                  return e;
                }),
                (rd.round = o3),
                (rd.runInContext = e),
                (rd.sample = function (e) {
                  return (
                    sU(e)
                      ? rS
                      : function (e) {
                          return rS(ow(e));
                        }
                  )(e);
                }),
                (rd.size = function (e) {
                  if (null == e) return 0;
                  if (sk(e)) return sX(e) ? tF(e) : e.length;
                  var t = nv(e);
                  return t == y || t == w ? e.size : r9(e).length;
                }),
                (rd.snakeCase = oC),
                (rd.some = function (e, t, i) {
                  var n = sU(e) ? ty : im;
                  return i && nE(e, t, i) && (t = r), n(e, nl(t, 3));
                }),
                (rd.sortedIndex = function (e, t) {
                  return ib(e, t);
                }),
                (rd.sortedIndexBy = function (e, t, r) {
                  return i_(e, t, nl(r, 2));
                }),
                (rd.sortedIndexOf = function (e, t) {
                  var r = null == e ? 0 : e.length;
                  if (r) {
                    var i = ib(e, t);
                    if (i < r && sN(e[i], t)) return i;
                  }
                  return -1;
                }),
                (rd.sortedLastIndex = function (e, t) {
                  return ib(e, t, !0);
                }),
                (rd.sortedLastIndexBy = function (e, t, r) {
                  return i_(e, t, nl(r, 2), !0);
                }),
                (rd.sortedLastIndexOf = function (e, t) {
                  if (null == e ? 0 : e.length) {
                    var r = ib(e, t, !0) - 1;
                    if (sN(e[r], t)) return r;
                  }
                  return -1;
                }),
                (rd.startCase = oA),
                (rd.startsWith = function (e, t, r) {
                  return (
                    (e = s7(e)),
                    (r = null == r ? 0 : rT(s2(r), 0, e.length)),
                    (t = iD(t)),
                    e.slice(r, r + t.length) == t
                  );
                }),
                (rd.subtract = o6),
                (rd.sum = function (e) {
                  return e && e.length ? tO(e, oM) : 0;
                }),
                (rd.sumBy = function (e, t) {
                  return e && e.length ? tO(e, nl(t, 2)) : 0;
                }),
                (rd.template = function (e, t, i) {
                  var n = rd.templateSettings;
                  i && nE(e, t, i) && (t = r),
                    (e = s7(e)),
                    (t = or({}, t, n, nt));
                  var s,
                    o,
                    a = or({}, t.imports, n.imports, nt),
                    c = of(a),
                    u = tN(a, c),
                    h = 0,
                    l = t.interpolate || ep,
                    f = "__p += '",
                    p = eI(
                      (t.escape || ep).source +
                        "|" +
                        l.source +
                        "|" +
                        (l === K ? es : ep).source +
                        "|" +
                        (t.evaluate || ep).source +
                        "|$",
                      "g"
                    ),
                    d =
                      "//# sourceURL=" +
                      (eR.call(t, "sourceURL")
                        ? (t.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++eY + "]") +
                      `
`;
                  e.replace(p, function (t, r, i, n, a, c) {
                    return (
                      i || (i = n),
                      (f += e.slice(h, c).replace(ed, tk)),
                      r &&
                        ((s = !0),
                        (f +=
                          `' +
__e(` +
                          r +
                          `) +
'`)),
                      a &&
                        ((o = !0),
                        (f +=
                          `';
` +
                          a +
                          `;
__p += '`)),
                      i &&
                        (f +=
                          `' +
((__t = (` +
                          i +
                          `)) == null ? '' : __t) +
'`),
                      (h = c + t.length),
                      t
                    );
                  }),
                    (f += `';
`);
                  var g = eR.call(t, "variable") && t.variable;
                  if (g) {
                    if (ei.test(g))
                      throw new e_(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else
                    f =
                      `with (obj) {
` +
                      f +
                      `
}
`;
                  (f = (o ? f.replace(L, "") : f)
                    .replace(k, "$1")
                    .replace(M, "$1;")),
                    (f =
                      "function(" +
                      (g || "obj") +
                      `) {
` +
                      (g
                        ? ""
                        : `obj || (obj = {});
`) +
                      "var __t, __p = ''" +
                      (s ? ", __e = _.escape" : "") +
                      (o
                        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                        : `;
`) +
                      f +
                      `return __p
}`);
                  var y = oT(function () {
                    return ew(c, d + "return " + f).apply(r, u);
                  });
                  if (((y.source = f), sz(y))) throw y;
                  return y;
                }),
                (rd.times = function (e, t) {
                  if ((e = s2(e)) < 1 || e > 9007199254740991) return [];
                  var r = 4294967295,
                    i = t3(e, 4294967295);
                  (t = nl(t)), (e -= 4294967295);
                  for (var n = tC(i, t); ++r < e; ) t(r);
                  return n;
                }),
                (rd.toFinite = s6),
                (rd.toInteger = s2),
                (rd.toLength = s8),
                (rd.toLower = function (e) {
                  return s7(e).toLowerCase();
                }),
                (rd.toNumber = s4),
                (rd.toSafeInteger = function (e) {
                  return e
                    ? rT(s2(e), -9007199254740991, 9007199254740991)
                    : 0 === e
                    ? e
                    : 0;
                }),
                (rd.toString = s7),
                (rd.toUpper = function (e) {
                  return s7(e).toUpperCase();
                }),
                (rd.trim = function (e, t, i) {
                  if ((e = s7(e)) && (i || t === r)) return tA(e);
                  if (!e || !(t = iD(t))) return e;
                  var n = tV(e),
                    s = tV(t),
                    o = tT(n, s),
                    a = tj(n, s) + 1;
                  return ij(n, o, a).join("");
                }),
                (rd.trimEnd = function (e, t, i) {
                  if ((e = s7(e)) && (i || t === r))
                    return e.slice(0, tK(e) + 1);
                  if (!e || !(t = iD(t))) return e;
                  var n = tV(e),
                    s = tj(n, tV(t)) + 1;
                  return ij(n, 0, s).join("");
                }),
                (rd.trimStart = function (e, t, i) {
                  if ((e = s7(e)) && (i || t === r)) return e.replace(Q, "");
                  if (!e || !(t = iD(t))) return e;
                  var n = tV(e),
                    s = tT(n, tV(t));
                  return ij(n, s).join("");
                }),
                (rd.truncate = function (e, t) {
                  var i = 30,
                    n = "...";
                  if (sK(t)) {
                    var s = "separator" in t ? t.separator : s;
                    (i = "length" in t ? s2(t.length) : i),
                      (n = "omission" in t ? iD(t.omission) : n);
                  }
                  var o = (e = s7(e)).length;
                  if (tM(e)) {
                    var a = tV(e);
                    o = a.length;
                  }
                  if (i >= o) return e;
                  var c = i - tF(n);
                  if (c < 1) return n;
                  var u = a ? ij(a, 0, c).join("") : e.slice(0, c);
                  if (s === r) return u + n;
                  if ((a && (c += u.length - c), sJ(s))) {
                    if (e.slice(c).search(s)) {
                      var h,
                        l = u;
                      for (
                        s.global || (s = eI(s.source, s7(eo.exec(s)) + "g")),
                          s.lastIndex = 0;
                        (h = s.exec(l));

                      )
                        var f = h.index;
                      u = u.slice(0, f === r ? c : f);
                    }
                  } else if (e.indexOf(iD(s), c) != c) {
                    var p = u.lastIndexOf(s);
                    p > -1 && (u = u.slice(0, p));
                  }
                  return u + n;
                }),
                (rd.unescape = function (e) {
                  return (e = s7(e)) && z.test(e) ? e.replace(q, tB) : e;
                }),
                (rd.uniqueId = function (e) {
                  var t = ++eT;
                  return s7(e) + t;
                }),
                (rd.upperCase = ox),
                (rd.upperFirst = oN),
                (rd.each = su),
                (rd.eachRight = sh),
                (rd.first = nW),
                oH(
                  rd,
                  ((ev = {}),
                  rB(rd, function (e, t) {
                    eR.call(rd.prototype, t) || (ev[t] = e);
                  }),
                  ev),
                  { chain: !1 }
                ),
                (rd.VERSION = "4.17.21"),
                ta(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    rd[e].placeholder = rd;
                  }
                ),
                ta(["drop", "take"], function (e, t) {
                  (rm.prototype[e] = function (i) {
                    i = i === r ? 1 : t5(s2(i), 0);
                    var n =
                      this.__filtered__ && !t ? new rm(this) : this.clone();
                    return (
                      n.__filtered__
                        ? (n.__takeCount__ = t3(i, n.__takeCount__))
                        : n.__views__.push({
                            size: t3(i, 4294967295),
                            type: e + (n.__dir__ < 0 ? "Right" : ""),
                          }),
                      n
                    );
                  }),
                    (rm.prototype[e + "Right"] = function (t) {
                      return this.reverse()[e](t).reverse();
                    });
                }),
                ta(["filter", "map", "takeWhile"], function (e, t) {
                  var r = t + 1,
                    i = 1 == r || 3 == r;
                  rm.prototype[e] = function (e) {
                    var t = this.clone();
                    return (
                      t.__iteratees__.push({ iteratee: nl(e, 3), type: r }),
                      (t.__filtered__ = t.__filtered__ || i),
                      t
                    );
                  };
                }),
                ta(["head", "last"], function (e, t) {
                  var r = "take" + (t ? "Right" : "");
                  rm.prototype[e] = function () {
                    return this[r](1).value()[0];
                  };
                }),
                ta(["initial", "tail"], function (e, t) {
                  var r = "drop" + (t ? "" : "Right");
                  rm.prototype[e] = function () {
                    return this.__filtered__ ? new rm(this) : this[r](1);
                  };
                }),
                (rm.prototype.compact = function () {
                  return this.filter(oM);
                }),
                (rm.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (rm.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (rm.prototype.invokeMap = ip(function (e, t) {
                  return "function" == typeof e
                    ? new rm(this)
                    : this.map(function (r) {
                        return r5(r, e, t);
                      });
                })),
                (rm.prototype.reject = function (e) {
                  return this.filter(sP(nl(e)));
                }),
                (rm.prototype.slice = function (e, t) {
                  e = s2(e);
                  var i = this;
                  return i.__filtered__ && (e > 0 || t < 0)
                    ? new rm(i)
                    : (e < 0 ? (i = i.takeRight(-e)) : e && (i = i.drop(e)),
                      t !== r &&
                        (i = (t = s2(t)) < 0 ? i.dropRight(-t) : i.take(t - e)),
                      i);
                }),
                (rm.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (rm.prototype.toArray = function () {
                  return this.take(4294967295);
                }),
                rB(rm.prototype, function (e, t) {
                  var i = /^(?:filter|find|map|reject)|While$/.test(t),
                    n = /^(?:head|last)$/.test(t),
                    s = rd[n ? "take" + ("last" == t ? "Right" : "") : t],
                    o = n || /^find/.test(t);
                  s &&
                    (rd.prototype[t] = function () {
                      var t = this.__wrapped__,
                        a = n ? [1] : arguments,
                        c = t instanceof rm,
                        u = a[0],
                        h = c || sU(t),
                        l = function (e) {
                          var t = s.apply(rd, tp([e], a));
                          return n && f ? t[0] : t;
                        };
                      h &&
                        i &&
                        "function" == typeof u &&
                        1 != u.length &&
                        (c = h = !1);
                      var f = this.__chain__,
                        p = !!this.__actions__.length,
                        d = o && !f,
                        g = c && !p;
                      if (!o && h) {
                        t = g ? t : new rm(this);
                        var y = e.apply(t, a);
                        return (
                          y.__actions__.push({
                            func: sn,
                            args: [l],
                            thisArg: r,
                          }),
                          new rv(y, f)
                        );
                      }
                      return d && g
                        ? e.apply(this, a)
                        : ((y = this.thru(l)),
                          d ? (n ? y.value()[0] : y.value()) : y);
                    });
                }),
                ta(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var t = eO[e],
                      r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      i = /^(?:pop|shift)$/.test(e);
                    rd.prototype[e] = function () {
                      var e = arguments;
                      if (i && !this.__chain__) {
                        var n = this.value();
                        return t.apply(sU(n) ? n : [], e);
                      }
                      return this[r](function (r) {
                        return t.apply(sU(r) ? r : [], e);
                      });
                    };
                  }
                ),
                rB(rm.prototype, function (e, t) {
                  var r = rd[t];
                  if (r) {
                    var i = r.name + "";
                    eR.call(rs, i) || (rs[i] = []),
                      rs[i].push({ name: t, func: r });
                  }
                }),
                (rs[iZ(r, 2).name] = [{ name: "wrapper", func: r }]),
                (rm.prototype.clone = function () {
                  var e = new rm(this.__wrapped__);
                  return (
                    (e.__actions__ = iH(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = iH(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = iH(this.__views__)),
                    e
                  );
                }),
                (rm.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new rm(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()), (e.__dir__ *= -1);
                  return e;
                }),
                (rm.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    t = this.__dir__,
                    r = sU(e),
                    i = t < 0,
                    n = r ? e.length : 0,
                    s = (function (e, t, r) {
                      for (var i = -1, n = r.length; ++i < n; ) {
                        var s = r[i],
                          o = s.size;
                        switch (s.type) {
                          case "drop":
                            e += o;
                            break;
                          case "dropRight":
                            t -= o;
                            break;
                          case "take":
                            t = t3(t, e + o);
                            break;
                          case "takeRight":
                            e = t5(e, t - o);
                        }
                      }
                      return { start: e, end: t };
                    })(0, n, this.__views__),
                    o = s.start,
                    a = s.end,
                    c = a - o,
                    u = i ? a : o - 1,
                    h = this.__iteratees__,
                    l = h.length,
                    f = 0,
                    p = t3(c, this.__takeCount__);
                  if (!r || (!i && n == c && p == c))
                    return iC(e, this.__actions__);
                  var d = [];
                  e: for (; c-- && f < p; ) {
                    u += t;
                    for (var g = -1, y = e[u]; ++g < l; ) {
                      var v = h[g],
                        m = v.iteratee,
                        b = v.type,
                        _ = m(y);
                      if (2 == b) y = _;
                      else if (!_) {
                        if (1 == b) continue e;
                        break e;
                      }
                    }
                    d[f++] = y;
                  }
                  return d;
                }),
                (rd.prototype.at = ss),
                (rd.prototype.chain = function () {
                  return si(this);
                }),
                (rd.prototype.commit = function () {
                  return new rv(this.value(), this.__chain__);
                }),
                (rd.prototype.next = function () {
                  this.__values__ === r && (this.__values__ = s3(this.value()));
                  var e = this.__index__ >= this.__values__.length,
                    t = e ? r : this.__values__[this.__index__++];
                  return { done: e, value: t };
                }),
                (rd.prototype.plant = function (e) {
                  for (var t, i = this; i instanceof ry; ) {
                    var n = n$(i);
                    (n.__index__ = 0),
                      (n.__values__ = r),
                      t ? (s.__wrapped__ = n) : (t = n);
                    var s = n;
                    i = i.__wrapped__;
                  }
                  return (s.__wrapped__ = e), t;
                }),
                (rd.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof rm) {
                    var t = e;
                    return (
                      this.__actions__.length && (t = new rm(this)),
                      (t = t.reverse()).__actions__.push({
                        func: sn,
                        args: [n1],
                        thisArg: r,
                      }),
                      new rv(t, this.__chain__)
                    );
                  }
                  return this.thru(n1);
                }),
                (rd.prototype.toJSON =
                  rd.prototype.valueOf =
                  rd.prototype.value =
                    function () {
                      return iC(this.__wrapped__, this.__actions__);
                    }),
                (rd.prototype.first = rd.prototype.head),
                e2 &&
                  (rd.prototype[e2] = function () {
                    return this;
                  }),
                rd
              );
            })();
          e2 ? (((e2.exports = tW)._ = tW), (e6._ = tW)) : (e3._ = tW);
        }.call(ot));
      })(or, or.exports);
      var oi = Object.defineProperty,
        on = Object.defineProperties,
        os = Object.getOwnPropertyDescriptors,
        oo = Object.getOwnPropertySymbols,
        oa = Object.prototype.hasOwnProperty,
        oc = Object.prototype.propertyIsEnumerable,
        ou = (e, t, r) =>
          t in e
            ? oi(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        oh = (e, t) => {
          for (var r in t || (t = {})) oa.call(t, r) && ou(e, r, t[r]);
          if (oo) for (var r of oo(t)) oc.call(t, r) && ou(e, r, t[r]);
          return e;
        },
        ol = (e, t) => on(e, os(t));
      function of(e, t, r) {
        var i;
        let n = (function (e) {
          let [t, r] = e.split(":");
          return { namespace: t, reference: r };
        })(e);
        return (
          (null == (i = t.rpcMap) ? void 0 : i[n.reference]) ||
          `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
        );
      }
      function op(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function od(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function og(e = {}, t = {}) {
        let r = oy(e),
          i = oy(t);
        return or.exports.merge(r, i);
      }
      function oy(e) {
        var t, r, i, n;
        let s = {};
        if (!t3(e)) return s;
        for (let [o, a] of Object.entries(e)) {
          let e = tJ(o) ? [o] : a.chains,
            c = a.methods || [],
            u = a.events || [],
            h = a.rpcMap || {},
            l = tQ(o);
          s[l] = ol(oh(oh({}, s[l]), a), {
            chains: tj(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: tj(c, null == (r = s[l]) ? void 0 : r.methods),
            events: tj(u, null == (i = s[l]) ? void 0 : i.events),
            rpcMap: oh(oh({}, h), null == (n = s[l]) ? void 0 : n.rpcMap),
          });
        }
        return s;
      }
      function ov(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function om(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
          ? e
          : Number(e);
      }
      let ob = {},
        o_ = (e) => ob[e],
        ow = (e, t) => {
          ob[e] = t;
        };
      class oE {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = o_("events")),
            (this.client = o_("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(oe.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = op(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || of(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new iq(new s4(r, o_("disableProviderPing")));
        }
      }
      class oD {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = o_("events")),
            (this.client = o_("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(oe.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          let r =
            t ||
            of(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new iq(new s4(r, o_("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = parseInt(op(t));
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, r;
          let i = e.request.params
              ? null == (t = e.request.params[0])
                ? void 0
                : t.chainId
              : "0x0",
            n = parseInt((i = i.startsWith("0x") ? i : `0x${i}`), 16);
          if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: i }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${n}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
      }
      class oI {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = o_("events")),
            (this.client = o_("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(oe.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = op(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || of(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new iq(new s4(r, o_("disableProviderPing")));
        }
      }
      class oS {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = o_("events")),
            (this.client = o_("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              oe.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = op(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || of(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new iq(new s4(r, o_("disableProviderPing")));
        }
      }
      class oP {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = o_("events")),
            (this.client = o_("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              oe.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let r = this.getCardanoRPCUrl(t),
                i = op(t);
              e[i] = this.createHttpProvider(i, r);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || this.getCardanoRPCUrl(e);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new iq(new s4(r, o_("disableProviderPing")));
        }
      }
      class oO {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = o_("events")),
            (this.client = o_("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(oe.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = op(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || of(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new iq(new s4(r, o_("disableProviderPing")));
        }
      }
      class oC {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = o_("events")),
            (this.client = o_("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(oe.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = op(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || of(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new iq(new s4(r, o_("disableProviderPing")));
        }
      }
      class oA {
        constructor(e) {
          (this.name = "near"),
            (this.namespace = e.namespace),
            (this.events = o_("events")),
            (this.client = o_("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let r = t || of(`${this.name}:${e}`, this.namespace);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(
            oe.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || of(e, this.namespace);
          return typeof r > "u"
            ? void 0
            : new iq(new s4(r, o_("disableProviderPing")));
        }
      }
      var ox = Object.defineProperty,
        oN = Object.defineProperties,
        oR = Object.getOwnPropertyDescriptors,
        oT = Object.getOwnPropertySymbols,
        oj = Object.prototype.hasOwnProperty,
        oU = Object.prototype.propertyIsEnumerable,
        oL = (e, t, r) =>
          t in e
            ? ox(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ok = (e, t) => {
          for (var r in t || (t = {})) oj.call(t, r) && oL(e, r, t[r]);
          if (oT) for (var r of oT(t)) oU.call(t, r) && oL(e, r, t[r]);
          return e;
        },
        oM = (e, t) => oN(e, oR(t));
      class oq {
        constructor(e) {
          (this.events = new (b())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : rF()(r1({ level: e?.logger || s9 }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new oq(e);
          return await t.initialize(), t;
        }
        async request(e, t, r) {
          let [i, n] = this.validateChain(t);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(i).request({
            request: ok({}, e),
            chainId: `${i}:${n}`,
            topic: this.session.topic,
            expiry: r,
          });
        }
        sendAsync(e, t, r, i) {
          let n = new Date().getTime();
          this.request(e, r, i)
            .then((e) => t(null, iP(n, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: t1("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
              throw Error("Max auto pairing attempts reached");
            let { uri: r, approval: i } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            r && ((this.uri = r), this.events.emit("display_uri", r)),
              await i()
                .then((e) => {
                  this.session = e;
                  let t = (function (e) {
                    let t = {};
                    for (let [r, i] of Object.entries(e)) {
                      let e = i.methods || [],
                        n = i.events || [],
                        s = i.accounts || [],
                        o = tJ(r) ? [r] : i.chains ? i.chains : od(i.accounts);
                      t[r] = { chains: o, methods: e, events: n, accounts: s };
                    }
                    return t;
                  })(e.namespaces);
                  (this.namespaces = og(this.namespaces, t)),
                    this.persist("namespaces", this.namespaces);
                })
                .catch((e) => {
                  if (e.message !== sM) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [r, i] = this.validateChain(e);
            this.getProvider(r).setDefaultChain(i, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if (t5(t)) {
            for (let r of t)
              e.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    r.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            let e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await s3.init({
              logger: this.providerOpts.logger || s9,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => tQ(e))),
          ];
          ow("client", this.client),
            ow("events", this.events),
            ow("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let r = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!r.length) return [];
                  let i = [];
                  return (
                    r.forEach((e) => {
                      let r = t.namespaces[e].accounts;
                      i.push(...r);
                    }),
                    i
                  );
                })(e, this.session),
                r = od(t),
                i = oM(
                  ok({}, og(this.namespaces, this.optionalNamespaces)[e]),
                  { accounts: t, chains: r }
                );
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new oD({ namespace: i });
                  break;
                case "solana":
                  this.rpcProviders[e] = new oI({ namespace: i });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new oS({ namespace: i });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new oE({ namespace: i });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new oP({ namespace: i });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new oO({ namespace: i });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new oC({ namespace: i });
                  break;
                case "near":
                  this.rpcProviders[e] = new oA({ namespace: i });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              let { params: t } = e,
                { event: r } = t;
              if ("accountsChanged" === r.name) {
                let e = r.data;
                e && t5(e) && this.events.emit("accountsChanged", e.map(ov));
              } else if ("chainChanged" === r.name) {
                let e = t.chainId,
                  r = t.event.data,
                  i = tQ(e),
                  n = om(e) !== om(r) ? `${i}:${om(r)}` : e;
                this.onChainChanged(n);
              } else this.events.emit(r.name, r.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var r;
              let { namespaces: i } = t,
                n = null == (r = this.client) ? void 0 : r.session.get(e);
              (this.session = oM(ok({}, n), { namespaces: i })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  oM(ok({}, t1("USER_DISCONNECTED")), { data: e.topic })
                );
            }),
            this.on(oe.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
          return this.rpcProviders[e];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: i,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = i),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", r);
        }
        validateChain(e) {
          let [t, r] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => tQ(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && r) return [t, r];
          let i = tQ(Object.keys(this.namespaces)[0]),
            n = this.rpcProviders[i].getDefaultChain();
          return [i, n];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [r, i] = this.validateChain(e);
          i &&
            (t || this.getProvider(r).setDefaultChain(i),
            this.namespaces[r]
              ? (this.namespaces[r].defaultChain = i)
              : this.namespaces[`${r}:${i}`]
              ? (this.namespaces[`${r}:${i}`].defaultChain = i)
              : (this.namespaces[`${r}:${i}`] = { defaultChain: i }),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", i));
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem(`${s7}/${e}`, t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${s7}/${e}`);
        }
      }
      let o$ = ["eth_sendTransaction", "personal_sign"],
        oz = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        oH = ["chainChanged", "accountsChanged"],
        oF = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var oV = Object.defineProperty,
        oK = Object.defineProperties,
        oB = Object.getOwnPropertyDescriptors,
        oW = Object.getOwnPropertySymbols,
        oG = Object.prototype.hasOwnProperty,
        oY = Object.prototype.propertyIsEnumerable,
        oJ = (e, t, r) =>
          t in e
            ? oV(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        oQ = (e, t) => {
          for (var r in t || (t = {})) oG.call(t, r) && oJ(e, r, t[r]);
          if (oW) for (var r of oW(t)) oY.call(t, r) && oJ(e, r, t[r]);
          return e;
        },
        oX = (e, t) => oK(e, oB(t));
      function oZ(e) {
        return Number(e[0].split(":")[1]);
      }
      function o0(e) {
        return `0x${e.toString(16)}`;
      }
      class o1 {
        constructor() {
          (this.events = new m.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (
              this.events.removeListener(e, t), this
            )),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new o1();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(
            e,
            this.formatChainId(this.chainId),
            t
          );
        }
        sendAsync(e, t, r) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), r);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          let { required: t, optional: r } = (function (e) {
            let {
              chains: t,
              optionalChains: r,
              methods: i,
              optionalMethods: n,
              events: s,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!t5(t)) throw Error("Invalid chains");
            let c = {
                chains: t,
                methods: i || o$,
                events: s || oH,
                rpcMap: oQ({}, t.length ? { [oZ(t)]: a[oZ(t)] } : {}),
              },
              u = s?.filter((e) => !oH.includes(e)),
              h = i?.filter((e) => !o$.includes(e));
            if (
              !r &&
              !o &&
              !n &&
              !(null != u && u.length) &&
              !(null != h && h.length)
            )
              return { required: t.length ? c : void 0 };
            let l = (u?.length && h?.length) || !r,
              f = {
                chains: [...new Set(l ? c.chains.concat(r || []) : r)],
                methods: [
                  ...new Set(c.methods.concat(null != n && n.length ? n : oz)),
                ],
                events: [
                  ...new Set(c.events.concat(null != o && o.length ? o : oF)),
                ],
                rpcMap: a,
              };
            return {
              required: t.length ? c : void 0,
              optional: r.length ? f : void 0,
            };
          })(this.rpc);
          try {
            let i = await new Promise(async (i, n) => {
              var s;
              this.rpc.showQrModal &&
                (null == (s = this.modal) ||
                  s.subscribeModal((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      n(Error("Connection request reset. Please try again.")));
                  })),
                await this.signer
                  .connect(
                    oX(
                      oQ(
                        { namespaces: oQ({}, t && { [this.namespace]: t }) },
                        r && { optionalNamespaces: { [this.namespace]: r } }
                      ),
                      { pairingTopic: e?.pairingTopic }
                    )
                  )
                  .then((e) => {
                    i(e);
                  })
                  .catch((e) => {
                    n(Error(e.message));
                  });
            });
            if (!i) return;
            let n = (function (e, t = []) {
              let r = [];
              return (
                Object.keys(e).forEach((i) => {
                  if (t.length && !t.includes(i)) return;
                  let n = e[i];
                  r.push(...n.accounts);
                }),
                r
              );
            })(i.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n),
              this.setAccounts(n),
              this.events.emit("connect", { chainId: o0(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            let { params: t } = e,
              { event: r } = t;
            "accountsChanged" === r.name
              ? ((this.accounts = this.parseAccounts(r.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === r.name
              ? this.setChainId(this.formatChainId(r.data))
              : this.events.emit(r.name, r.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              let t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", o0(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  oX(oQ({}, t1("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, r;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (r = this.modal) || r.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          let t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", o0(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, r, i] = e.split(":");
          return { chainId: `${t}:${r}`, address: i };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, r;
          let i = null != (t = e?.chains) ? t : [],
            n = null != (r = e?.optionalChains) ? r : [],
            s = i.concat(n);
          if (!s.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let o = i.length ? e?.methods || o$ : [],
            a = i.length ? e?.events || oH : [],
            c = e?.optionalMethods || [],
            u = e?.optionalEvents || [],
            h = e?.rpcMap || this.buildRpcMap(s, e.projectId),
            l = e?.qrModalOptions || void 0;
          return {
            chains: i?.map((e) => this.formatChainId(e)),
            optionalChains: n.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: u,
            rpcMap: h,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: l,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let r = {};
          return (
            e.forEach((e) => {
              r[e] = this.getRpcUrl(e, t);
            }),
            r
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? oZ(this.rpc.chains)
              : oZ(this.rpc.optionalChains)),
            (this.signer = await oq.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let { WalletConnectModal: t } = await r
                .e(2018)
                .then(r.bind(r, 82018));
              e = t;
            } catch {
              throw Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (e)
              try {
                this.modal = new e(
                  oQ({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
                );
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: r, rpcMap: i } = e;
          t &&
            t5(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
            })),
            r &&
              t5(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = r?.map((e) => this.formatChainId(e))),
              r.forEach((e) => {
                this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var r;
          return (
            (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (!this.session) return;
          let e = await this.signer.client.core.storage.getItem(
              `${this.STORAGE_KEY}/chainId`
            ),
            t = this.session.namespaces[`${this.namespace}:${e}`]
              ? this.session.namespaces[`${this.namespace}:${e}`]
              : this.session.namespaces[this.namespace];
          this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
            this.setAccounts(t?.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      let o5 = o1;
    },
    49726: function (e, t, r) {
      "use strict";
      r.d(t, {
        q: function () {
          return i;
        },
      });
      class i {}
    },
    45003: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          IEvents: function () {
            return i.q;
          },
        });
      var i = r(49726);
    },
    17128: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0);
      let i = r(30355);
      (t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS),
        (t.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    69908: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(93739).__exportStar(r(17128), t);
    },
    44960: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HeartBeat = void 0);
      let i = r(93739),
        n = r(177),
        s = r(30355),
        o = r(87500),
        a = r(69908);
      class c extends o.IHeartBeat {
        constructor(e) {
          super(e),
            (this.events = new n.EventEmitter()),
            (this.interval = a.HEARTBEAT_INTERVAL),
            (this.interval =
              (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL);
        }
        static init(e) {
          return i.__awaiter(this, void 0, void 0, function* () {
            let t = new c(e);
            return yield t.init(), t;
          });
        }
        init() {
          return i.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        initialize() {
          return i.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              s.toMiliseconds(this.interval)
            );
          });
        }
        pulse() {
          this.events.emit(a.HEARTBEAT_EVENTS.pulse);
        }
      }
      t.HeartBeat = c;
    },
    36877: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(93739);
      i.__exportStar(r(44960), t),
        i.__exportStar(r(87500), t),
        i.__exportStar(r(69908), t);
    },
    48367: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IHeartBeat = void 0);
      let i = r(45003);
      class n extends i.IEvents {
        constructor(e) {
          super();
        }
      }
      t.IHeartBeat = n;
    },
    87500: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(93739).__exportStar(r(48367), t);
    },
    44306: function () {},
    9885: function () {},
    49633: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(93739);
      i.__exportStar(r(34394), t), i.__exportStar(r(66177), t);
    },
    34394: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    66177: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    30355: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(93739);
      i.__exportStar(r(4690), t),
        i.__exportStar(r(34919), t),
        i.__exportStar(r(63633), t),
        i.__exportStar(r(49633), t);
    },
    63633: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(93739).__exportStar(r(80822), t);
    },
    80822: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IWatch = void 0);
      class r {}
      t.IWatch = r;
    },
    89529: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      let i = r(49633);
      (t.toMiliseconds = function (e) {
        return e * i.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / i.ONE_THOUSAND);
        });
    },
    84290: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    4690: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(93739);
      i.__exportStar(r(84290), t), i.__exportStar(r(89529), t);
    },
    34919: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e))
            throw Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          let t = this.get(e);
          if (void 0 !== t.elapsed)
            throw Error(`Watch already stopped for label: ${e}`);
          let r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          let t = this.timestamps.get(e);
          if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          let t = this.get(e);
          return t.elapsed || Date.now() - t.started;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    34257: function (e, t) {
      "use strict";
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function i(e) {
        let t = r(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return i("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return i("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return i("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return i("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    41075: function (e, t, r) {
      "use strict";
      t.D = void 0;
      let i = r(34257);
      t.D = function () {
        let e, t, r;
        try {
          (e = i.getDocumentOrThrow()), (t = i.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function n(...t) {
          let r = e.getElementsByTagName("meta");
          for (let e = 0; e < r.length; e++) {
            let i = r[e],
              n = ["itemprop", "property", "name"]
                .map((e) => i.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (n.length && n) {
              let e = i.getAttribute("content");
              if (e) return e;
            }
          }
          return "";
        }
        let s =
            ((r = n("name", "og:site_name", "og:title", "twitter:title")) ||
              (r = e.title),
            r),
          o = n(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          );
        return {
          description: o,
          url: t.origin,
          icons: (function () {
            let r = e.getElementsByTagName("link"),
              i = [];
            for (let e = 0; e < r.length; e++) {
              let n = r[e],
                s = n.getAttribute("rel");
              if (s && s.toLowerCase().indexOf("icon") > -1) {
                let e = n.getAttribute("href");
                if (e) {
                  if (
                    -1 === e.toLowerCase().indexOf("https:") &&
                    -1 === e.toLowerCase().indexOf("http:") &&
                    0 !== e.indexOf("//")
                  ) {
                    let r = t.protocol + "//" + t.host;
                    if (0 === e.indexOf("/")) r += e;
                    else {
                      let i = t.pathname.split("/");
                      i.pop(), (r += i.join("/") + "/" + e);
                    }
                    i.push(r);
                  } else if (0 === e.indexOf("//")) {
                    let r = t.protocol + e;
                    i.push(r);
                  } else i.push(e);
                }
              }
            }
            return i;
          })(),
          name: s,
        };
      };
    },
    89031: function (e, t) {
      var r = "undefined" != typeof self ? self : this,
        i = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (e.prototype = r), new e();
        })();
      (function (e) {
        var t = {
          searchParams: "URLSearchParams" in i,
          iterable: "Symbol" in i && "iterator" in Symbol,
          blob:
            "FileReader" in i &&
            "Blob" in i &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (e) {
                return !1;
              }
            })(),
          formData: "FormData" in i,
          arrayBuffer: "ArrayBuffer" in i,
        };
        if (t.arrayBuffer)
          var r = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            n =
              ArrayBuffer.isView ||
              function (e) {
                return e && r.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        function s(e) {
          if (
            ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
          )
            throw TypeError("Invalid character in header field name");
          return e.toLowerCase();
        }
        function o(e) {
          return "string" != typeof e && (e = String(e)), e;
        }
        function a(e) {
          var r = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            t.iterable &&
              (r[Symbol.iterator] = function () {
                return r;
              }),
            r
          );
        }
        function c(e) {
          (this.map = {}),
            e instanceof c
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        function u(e) {
          if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
          e.bodyUsed = !0;
        }
        function h(e) {
          return new Promise(function (t, r) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                r(e.error);
              });
          });
        }
        function l(e) {
          var t = new FileReader(),
            r = h(t);
          return t.readAsArrayBuffer(e), r;
        }
        function f(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function p() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this._bodyInit = e), e)) {
                if ("string" == typeof e) this._bodyText = e;
                else if (t.blob && Blob.prototype.isPrototypeOf(e))
                  this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (
                  t.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e)
                )
                  this._bodyText = e.toString();
                else {
                  var r;
                  t.arrayBuffer &&
                  t.blob &&
                  (r = e) &&
                  DataView.prototype.isPrototypeOf(r)
                    ? ((this._bodyArrayBuffer = f(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : t.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(e) || n(e))
                    ? (this._bodyArrayBuffer = f(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e));
                }
              } else this._bodyText = "";
              !this.headers.get("content-type") &&
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : t.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            t.blob &&
              ((this.blob = function () {
                var e = u(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData)
                  return Promise.resolve(new Blob([this._bodyText]));
                throw Error("could not read FormData body as blob");
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? u(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(l);
              })),
            (this.text = function () {
              var e,
                t,
                r,
                i = u(this);
              if (i) return i;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (r = h((t = new FileReader()))),
                  t.readAsText(e),
                  r
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), r = Array(t.length), i = 0;
                      i < t.length;
                      i++
                    )
                      r[i] = String.fromCharCode(t[i]);
                    return r.join("");
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error("could not read FormData body as text");
            }),
            t.formData &&
              (this.formData = function () {
                return this.text().then(y);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (c.prototype.append = function (e, t) {
          (e = s(e)), (t = o(t));
          var r = this.map[e];
          this.map[e] = r ? r + ", " + t : t;
        }),
          (c.prototype.delete = function (e) {
            delete this.map[s(e)];
          }),
          (c.prototype.get = function (e) {
            return (e = s(e)), this.has(e) ? this.map[e] : null;
          }),
          (c.prototype.has = function (e) {
            return this.map.hasOwnProperty(s(e));
          }),
          (c.prototype.set = function (e, t) {
            this.map[s(e)] = o(t);
          }),
          (c.prototype.forEach = function (e, t) {
            for (var r in this.map)
              this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
          }),
          (c.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (t, r) {
                e.push(r);
              }),
              a(e)
            );
          }),
          (c.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              a(e)
            );
          }),
          (c.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (t, r) {
                e.push([r, t]);
              }),
              a(e)
            );
          }),
          t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
        var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function g(e, t) {
          var r,
            i,
            n = (t = t || {}).body;
          if (e instanceof g) {
            if (e.bodyUsed) throw TypeError("Already read");
            (this.url = e.url),
              (this.credentials = e.credentials),
              t.headers || (this.headers = new c(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              n ||
                null == e._bodyInit ||
                ((n = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials =
              t.credentials || this.credentials || "same-origin"),
            (t.headers || !this.headers) && (this.headers = new c(t.headers)),
            (this.method =
              ((i = (r = t.method || this.method || "GET").toUpperCase()),
              d.indexOf(i) > -1 ? i : r)),
            (this.mode = t.mode || this.mode || null),
            (this.signal = t.signal || this.signal),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && n)
          )
            throw TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(n);
        }
        function y(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split("&")
              .forEach(function (e) {
                if (e) {
                  var r = e.split("="),
                    i = r.shift().replace(/\+/g, " "),
                    n = r.join("=").replace(/\+/g, " ");
                  t.append(decodeURIComponent(i), decodeURIComponent(n));
                }
              }),
            t
          );
        }
        function v(e, t) {
          t || (t = {}),
            (this.type = "default"),
            (this.status = void 0 === t.status ? 200 : t.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = "statusText" in t ? t.statusText : "OK"),
            (this.headers = new c(t.headers)),
            (this.url = t.url || ""),
            this._initBody(e);
        }
        (g.prototype.clone = function () {
          return new g(this, { body: this._bodyInit });
        }),
          p.call(g.prototype),
          p.call(v.prototype),
          (v.prototype.clone = function () {
            return new v(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new c(this.headers),
              url: this.url,
            });
          }),
          (v.error = function () {
            var e = new v(null, { status: 0, statusText: "" });
            return (e.type = "error"), e;
          });
        var m = [301, 302, 303, 307, 308];
        (v.redirect = function (e, t) {
          if (-1 === m.indexOf(t)) throw RangeError("Invalid status code");
          return new v(null, { status: t, headers: { location: e } });
        }),
          (e.DOMException = i.DOMException);
        try {
          new e.DOMException();
        } catch (t) {
          (e.DOMException = function (e, t) {
            (this.message = e), (this.name = t);
            var r = Error(e);
            this.stack = r.stack;
          }),
            (e.DOMException.prototype = Object.create(Error.prototype)),
            (e.DOMException.prototype.constructor = e.DOMException);
        }
        function b(r, i) {
          return new Promise(function (n, s) {
            var o = new g(r, i);
            if (o.signal && o.signal.aborted)
              return s(new e.DOMException("Aborted", "AbortError"));
            var a = new XMLHttpRequest();
            function u() {
              a.abort();
            }
            (a.onload = function () {
              var e,
                t,
                r = {
                  status: a.status,
                  statusText: a.statusText,
                  headers:
                    ((e = a.getAllResponseHeaders() || ""),
                    (t = new c()),
                    e
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split(/\r?\n/)
                      .forEach(function (e) {
                        var r = e.split(":"),
                          i = r.shift().trim();
                        if (i) {
                          var n = r.join(":").trim();
                          t.append(i, n);
                        }
                      }),
                    t),
                };
              (r.url =
                "responseURL" in a
                  ? a.responseURL
                  : r.headers.get("X-Request-URL")),
                n(new v("response" in a ? a.response : a.responseText, r));
            }),
              (a.onerror = function () {
                s(TypeError("Network request failed"));
              }),
              (a.ontimeout = function () {
                s(TypeError("Network request failed"));
              }),
              (a.onabort = function () {
                s(new e.DOMException("Aborted", "AbortError"));
              }),
              a.open(o.method, o.url, !0),
              "include" === o.credentials
                ? (a.withCredentials = !0)
                : "omit" === o.credentials && (a.withCredentials = !1),
              "responseType" in a && t.blob && (a.responseType = "blob"),
              o.headers.forEach(function (e, t) {
                a.setRequestHeader(t, e);
              }),
              o.signal &&
                (o.signal.addEventListener("abort", u),
                (a.onreadystatechange = function () {
                  4 === a.readyState &&
                    o.signal.removeEventListener("abort", u);
                })),
              a.send(void 0 === o._bodyInit ? null : o._bodyInit);
          });
        }
        (b.polyfill = !0),
          i.fetch ||
            ((i.fetch = b), (i.Headers = c), (i.Request = g), (i.Response = v)),
          (e.Headers = c),
          (e.Request = g),
          (e.Response = v),
          (e.fetch = b),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })({}),
        (i.fetch.ponyfill = !0),
        delete i.fetch.polyfill,
        ((t = i.fetch).default = i.fetch),
        (t.fetch = i.fetch),
        (t.Headers = i.Headers),
        (t.Request = i.Request),
        (t.Response = i.Response),
        (e.exports = t);
    },
    27566: function (e) {
      "use strict";
      var t = "%[a-f0-9]{2}",
        r = RegExp("(" + t + ")|([^%]+?)", "gi"),
        i = RegExp("(" + t + ")+", "gi");
      e.exports = function (e) {
        if ("string" != typeof e)
          throw TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof e +
              "`"
          );
        try {
          return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
        } catch (t) {
          return (function (e) {
            for (
              var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = i.exec(e);
              n;

            ) {
              try {
                t[n[0]] = decodeURIComponent(n[0]);
              } catch (e) {
                var s = (function (e) {
                  try {
                    return decodeURIComponent(e);
                  } catch (n) {
                    for (var t = e.match(r) || [], i = 1; i < t.length; i++)
                      t =
                        (e = (function e(t, r) {
                          try {
                            return [decodeURIComponent(t.join(""))];
                          } catch (e) {}
                          if (1 === t.length) return t;
                          r = r || 1;
                          var i = t.slice(0, r),
                            n = t.slice(r);
                          return Array.prototype.concat.call([], e(i), e(n));
                        })(t, i).join("")).match(r) || [];
                    return e;
                  }
                })(n[0]);
                s !== n[0] && (t[n[0]] = s);
              }
              n = i.exec(e);
            }
            t["%C2"] = "�";
            for (var o = Object.keys(t), a = 0; a < o.length; a++) {
              var c = o[a];
              e = e.replace(RegExp(c, "g"), t[c]);
            }
            return e;
          })(e);
        }
      };
    },
    177: function (e) {
      "use strict";
      var t,
        r = "object" == typeof Reflect ? Reflect : null,
        i =
          r && "function" == typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var n =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, i) {
            function n(r) {
              e.removeListener(t, s), i(r);
            }
            function s() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", n),
                r([].slice.call(arguments));
            }
            g(e, t, s, { once: !0 }),
              "error" !== t &&
                "function" == typeof e.on &&
                g(e, "error", n, { once: !0 });
          });
        }),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var o = 10;
      function a(e) {
        if ("function" != typeof e)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function c(e) {
        return void 0 === e._maxListeners
          ? s.defaultMaxListeners
          : e._maxListeners;
      }
      function u(e, t, r, i) {
        if (
          (a(r),
          void 0 === (s = e._events)
            ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== s.newListener &&
                (e.emit("newListener", t, r.listener ? r.listener : r),
                (s = e._events)),
              (o = s[t])),
          void 0 === o)
        )
          (o = s[t] = r), ++e._eventsCount;
        else if (
          ("function" == typeof o
            ? (o = s[t] = i ? [r, o] : [o, r])
            : i
            ? o.unshift(r)
            : o.push(r),
          (n = c(e)) > 0 && o.length > n && !o.warned)
        ) {
          o.warned = !0;
          var n,
            s,
            o,
            u = Error(
              "Possible EventEmitter memory leak detected. " +
                o.length +
                " " +
                String(t) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
          (u.name = "MaxListenersExceededWarning"),
            (u.emitter = e),
            (u.type = t),
            (u.count = o.length),
            console && console.warn && console.warn(u);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function l(e, t, r) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          n = h.bind(i);
        return (n.listener = r), (i.wrapFn = n), n;
      }
      function f(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var n = i[t];
        return void 0 === n
          ? []
          : "function" == typeof n
          ? r
            ? [n.listener || n]
            : [n]
          : r
          ? (function (e) {
              for (var t = Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(n)
          : d(n, n.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function d(e, t) {
        for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r;
      }
      function g(e, t, r, i) {
        if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
        else if ("function" == typeof e.addEventListener)
          e.addEventListener(t, function n(s) {
            i.once && e.removeEventListener(t, n), r(s);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e
          );
      }
      Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || n(e))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          o = e;
        },
      }),
        (s.init = function () {
          (void 0 === this._events ||
            this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || n(e))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (s.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (s.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var n = "error" === e,
            s = this._events;
          if (void 0 !== s) n = n && void 0 === s.error;
          else if (!n) return !1;
          if (n) {
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var o,
              a = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
            throw ((a.context = o), a);
          }
          var c = s[e];
          if (void 0 === c) return !1;
          if ("function" == typeof c) i(c, this, t);
          else
            for (var u = c.length, h = d(c, u), r = 0; r < u; ++r)
              i(h[r], this, t);
          return !0;
        }),
        (s.prototype.addListener = function (e, t) {
          return u(this, e, t, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function (e, t) {
          return u(this, e, t, !0);
        }),
        (s.prototype.once = function (e, t) {
          return a(t), this.on(e, l(this, e, t)), this;
        }),
        (s.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, l(this, e, t)), this;
        }),
        (s.prototype.removeListener = function (e, t) {
          var r, i, n, s, o;
          if ((a(t), void 0 === (i = this._events) || void 0 === (r = i[e])))
            return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[e],
                i.removeListener &&
                  this.emit("removeListener", e, r.listener || t));
          else if ("function" != typeof r) {
            for (n = -1, s = r.length - 1; s >= 0; s--)
              if (r[s] === t || r[s].listener === t) {
                (o = r[s].listener), (n = s);
                break;
              }
            if (n < 0) return this;
            0 === n
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, n),
              1 === r.length && (i[e] = r[0]),
              void 0 !== i.removeListener &&
                this.emit("removeListener", e, o || t);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function (e) {
          var t, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 == arguments.length) {
            var n,
              s = Object.keys(r);
            for (i = 0; i < s.length; ++i)
              "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (s.prototype.listeners = function (e) {
          return f(this, e, !0);
        }),
        (s.prototype.rawListeners = function (e) {
          return f(this, e, !1);
        }),
        (s.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (s.prototype.listenerCount = p),
        (s.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    49391: function (e) {
      "use strict";
      e.exports = function (e, t) {
        for (
          var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0;
          s < i.length;
          s++
        ) {
          var o = i[s],
            a = e[o];
          (n ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a);
        }
        return r;
      };
    },
    19834: function (e, t, r) {
      e = r.nmd(e);
      var i,
        n,
        s,
        o = "__lodash_hash_undefined__",
        a = "[object Arguments]",
        c = "[object Array]",
        u = "[object Boolean]",
        h = "[object Date]",
        l = "[object Error]",
        f = "[object Function]",
        p = "[object Map]",
        d = "[object Number]",
        g = "[object Object]",
        y = "[object Promise]",
        v = "[object RegExp]",
        m = "[object Set]",
        b = "[object String]",
        _ = "[object WeakMap]",
        w = "[object ArrayBuffer]",
        E = "[object DataView]",
        D = /^\[object .+?Constructor\]$/,
        I = /^(?:0|[1-9]\d*)$/,
        S = {};
      (S["[object Float32Array]"] =
        S["[object Float64Array]"] =
        S["[object Int8Array]"] =
        S["[object Int16Array]"] =
        S["[object Int32Array]"] =
        S["[object Uint8Array]"] =
        S["[object Uint8ClampedArray]"] =
        S["[object Uint16Array]"] =
        S["[object Uint32Array]"] =
          !0),
        (S[a] =
          S[c] =
          S[w] =
          S[u] =
          S[E] =
          S[h] =
          S[l] =
          S[f] =
          S[p] =
          S[d] =
          S[g] =
          S[v] =
          S[m] =
          S[b] =
          S[_] =
            !1);
      var P = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        O = "object" == typeof self && self && self.Object === Object && self,
        C = P || O || Function("return this")(),
        A = t && !t.nodeType && t,
        x = A && e && !e.nodeType && e,
        N = x && x.exports === A,
        R = N && P.process,
        T = (function () {
          try {
            return R && R.binding && R.binding("util");
          } catch (e) {}
        })(),
        j = T && T.isTypedArray;
      function U(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e, i) {
            r[++t] = [i, e];
          }),
          r
        );
      }
      function L(e) {
        var t = -1,
          r = Array(e.size);
        return (
          e.forEach(function (e) {
            r[++t] = e;
          }),
          r
        );
      }
      var k = Array.prototype,
        M = Function.prototype,
        q = Object.prototype,
        $ = C["__core-js_shared__"],
        z = M.toString,
        H = q.hasOwnProperty,
        F = (i = /[^.]+$/.exec(($ && $.keys && $.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + i
          : "",
        V = q.toString,
        K = RegExp(
          "^" +
            z
              .call(H)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        B = N ? C.Buffer : void 0,
        W = C.Symbol,
        G = C.Uint8Array,
        Y = q.propertyIsEnumerable,
        J = k.splice,
        Q = W ? W.toStringTag : void 0,
        X = Object.getOwnPropertySymbols,
        Z = B ? B.isBuffer : void 0,
        ee =
          ((n = Object.keys),
          (s = Object),
          function (e) {
            return n(s(e));
          }),
        et = eS(C, "DataView"),
        er = eS(C, "Map"),
        ei = eS(C, "Promise"),
        en = eS(C, "Set"),
        es = eS(C, "WeakMap"),
        eo = eS(Object, "create"),
        ea = eC(et),
        ec = eC(er),
        eu = eC(ei),
        eh = eC(en),
        el = eC(es),
        ef = W ? W.prototype : void 0,
        ep = ef ? ef.valueOf : void 0;
      function ed(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function eg(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function ey(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var i = e[t];
          this.set(i[0], i[1]);
        }
      }
      function ev(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new ey(); ++t < r; ) this.add(e[t]);
      }
      function em(e) {
        var t = (this.__data__ = new eg(e));
        this.size = t.size;
      }
      function eb(e, t) {
        for (var r = e.length; r--; ) if (eA(e[r][0], t)) return r;
        return -1;
      }
      function e_(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Q && Q in Object(e)
          ? (function (e) {
              var t = H.call(e, Q),
                r = e[Q];
              try {
                e[Q] = void 0;
                var i = !0;
              } catch (e) {}
              var n = V.call(e);
              return i && (t ? (e[Q] = r) : delete e[Q]), n;
            })(e)
          : V.call(e);
      }
      function ew(e) {
        return eL(e) && e_(e) == a;
      }
      function eE(e, t, r, i, n, s) {
        var o = 1 & r,
          a = e.length,
          c = t.length;
        if (a != c && !(o && c > a)) return !1;
        var u = s.get(e);
        if (u && s.get(t)) return u == t;
        var h = -1,
          l = !0,
          f = 2 & r ? new ev() : void 0;
        for (s.set(e, t), s.set(t, e); ++h < a; ) {
          var p = e[h],
            d = t[h];
          if (i) var g = o ? i(d, p, h, t, e, s) : i(p, d, h, e, t, s);
          if (void 0 !== g) {
            if (g) continue;
            l = !1;
            break;
          }
          if (f) {
            if (
              !(function (e, t) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                  if (t(e[r], r, e)) return !0;
                return !1;
              })(t, function (e, t) {
                if (!f.has(t) && (p === e || n(p, e, r, i, s)))
                  return f.push(t);
              })
            ) {
              l = !1;
              break;
            }
          } else if (!(p === d || n(p, d, r, i, s))) {
            l = !1;
            break;
          }
        }
        return s.delete(e), s.delete(t), l;
      }
      function eD(e) {
        var t;
        return (
          (t = (function (e) {
            return null != e && ej(e.length) && !eT(e)
              ? (function (e, t) {
                  var r,
                    i = eN(e),
                    n = !i && ex(e),
                    s = !i && !n && eR(e),
                    o = !i && !n && !s && ek(e),
                    a = i || n || s || o,
                    c = a
                      ? (function (e, t) {
                          for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
                          return i;
                        })(e.length, String)
                      : [],
                    u = c.length;
                  for (var h in e)
                    H.call(e, h) &&
                      !(
                        a &&
                        ("length" == h ||
                          (s && ("offset" == h || "parent" == h)) ||
                          (o &&
                            ("buffer" == h ||
                              "byteLength" == h ||
                              "byteOffset" == h)) ||
                          ((r = null == (r = u) ? 9007199254740991 : r) &&
                            ("number" == typeof h || I.test(h)) &&
                            h > -1 &&
                            h % 1 == 0 &&
                            h < r))
                      ) &&
                      c.push(h);
                  return c;
                })(e)
              : (function (e) {
                  if (
                    ((t = e && e.constructor),
                    e !== (("function" == typeof t && t.prototype) || q))
                  )
                    return ee(e);
                  var t,
                    r = [];
                  for (var i in Object(e))
                    H.call(e, i) && "constructor" != i && r.push(i);
                  return r;
                })(e);
          })(e)),
          eN(e)
            ? t
            : (function (e, t) {
                for (var r = -1, i = t.length, n = e.length; ++r < i; )
                  e[n + r] = t[r];
                return e;
              })(t, eP(e))
        );
      }
      function eI(e, t) {
        var r,
          i = e.__data__;
        return (
          "string" == (r = typeof t) ||
          "number" == r ||
          "symbol" == r ||
          "boolean" == r
            ? "__proto__" !== t
            : null === t
        )
          ? i["string" == typeof t ? "string" : "hash"]
          : i.map;
      }
      function eS(e, t) {
        var r = null == e ? void 0 : e[t];
        return !(!eU(r) || (F && F in r)) && (eT(r) ? K : D).test(eC(r))
          ? r
          : void 0;
      }
      (ed.prototype.clear = function () {
        (this.__data__ = eo ? eo(null) : {}), (this.size = 0);
      }),
        (ed.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (ed.prototype.get = function (e) {
          var t = this.__data__;
          if (eo) {
            var r = t[e];
            return r === o ? void 0 : r;
          }
          return H.call(t, e) ? t[e] : void 0;
        }),
        (ed.prototype.has = function (e) {
          var t = this.__data__;
          return eo ? void 0 !== t[e] : H.call(t, e);
        }),
        (ed.prototype.set = function (e, t) {
          var r = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (r[e] = eo && void 0 === t ? o : t),
            this
          );
        }),
        (eg.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (eg.prototype.delete = function (e) {
          var t = this.__data__,
            r = eb(t, e);
          return (
            !(r < 0) &&
            (r == t.length - 1 ? t.pop() : J.call(t, r, 1), --this.size, !0)
          );
        }),
        (eg.prototype.get = function (e) {
          var t = this.__data__,
            r = eb(t, e);
          return r < 0 ? void 0 : t[r][1];
        }),
        (eg.prototype.has = function (e) {
          return eb(this.__data__, e) > -1;
        }),
        (eg.prototype.set = function (e, t) {
          var r = this.__data__,
            i = eb(r, e);
          return i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this;
        }),
        (ey.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new ed(),
              map: new (er || eg)(),
              string: new ed(),
            });
        }),
        (ey.prototype.delete = function (e) {
          var t = eI(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (ey.prototype.get = function (e) {
          return eI(this, e).get(e);
        }),
        (ey.prototype.has = function (e) {
          return eI(this, e).has(e);
        }),
        (ey.prototype.set = function (e, t) {
          var r = eI(this, e),
            i = r.size;
          return r.set(e, t), (this.size += r.size == i ? 0 : 1), this;
        }),
        (ev.prototype.add = ev.prototype.push =
          function (e) {
            return this.__data__.set(e, o), this;
          }),
        (ev.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (em.prototype.clear = function () {
          (this.__data__ = new eg()), (this.size = 0);
        }),
        (em.prototype.delete = function (e) {
          var t = this.__data__,
            r = t.delete(e);
          return (this.size = t.size), r;
        }),
        (em.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (em.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (em.prototype.set = function (e, t) {
          var r = this.__data__;
          if (r instanceof eg) {
            var i = r.__data__;
            if (!er || i.length < 199)
              return i.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new ey(i);
          }
          return r.set(e, t), (this.size = r.size), this;
        });
      var eP = X
          ? function (e) {
              return null == e
                ? []
                : (function (e, t) {
                    for (
                      var r = -1, i = null == e ? 0 : e.length, n = 0, s = [];
                      ++r < i;

                    ) {
                      var o = e[r];
                      t(o, r, e) && (s[n++] = o);
                    }
                    return s;
                  })(X((e = Object(e))), function (t) {
                    return Y.call(e, t);
                  });
            }
          : function () {
              return [];
            },
        eO = e_;
      function eC(e) {
        if (null != e) {
          try {
            return z.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      }
      function eA(e, t) {
        return e === t || (e != e && t != t);
      }
      ((et && eO(new et(new ArrayBuffer(1))) != E) ||
        (er && eO(new er()) != p) ||
        (ei && eO(ei.resolve()) != y) ||
        (en && eO(new en()) != m) ||
        (es && eO(new es()) != _)) &&
        (eO = function (e) {
          var t = e_(e),
            r = t == g ? e.constructor : void 0,
            i = r ? eC(r) : "";
          if (i)
            switch (i) {
              case ea:
                return E;
              case ec:
                return p;
              case eu:
                return y;
              case eh:
                return m;
              case el:
                return _;
            }
          return t;
        });
      var ex = ew(
          (function () {
            return arguments;
          })()
        )
          ? ew
          : function (e) {
              return eL(e) && H.call(e, "callee") && !Y.call(e, "callee");
            },
        eN = Array.isArray,
        eR =
          Z ||
          function () {
            return !1;
          };
      function eT(e) {
        if (!eU(e)) return !1;
        var t = e_(e);
        return (
          t == f ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      }
      function ej(e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      }
      function eU(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function eL(e) {
        return null != e && "object" == typeof e;
      }
      var ek = j
        ? function (e) {
            return j(e);
          }
        : function (e) {
            return eL(e) && ej(e.length) && !!S[e_(e)];
          };
      e.exports = function (e, t) {
        return (function e(t, r, i, n, s) {
          return (
            t === r ||
            (null != t && null != r && (eL(t) || eL(r))
              ? (function (e, t, r, i, n, s) {
                  var o = eN(e),
                    f = eN(t),
                    y = o ? c : eO(e),
                    _ = f ? c : eO(t);
                  (y = y == a ? g : y), (_ = _ == a ? g : _);
                  var D = y == g,
                    I = _ == g,
                    S = y == _;
                  if (S && eR(e)) {
                    if (!eR(t)) return !1;
                    (o = !0), (D = !1);
                  }
                  if (S && !D)
                    return (
                      s || (s = new em()),
                      o || ek(e)
                        ? eE(e, t, r, i, n, s)
                        : (function (e, t, r, i, n, s, o) {
                            switch (r) {
                              case E:
                                if (
                                  e.byteLength != t.byteLength ||
                                  e.byteOffset != t.byteOffset
                                )
                                  break;
                                (e = e.buffer), (t = t.buffer);
                              case w:
                                if (
                                  e.byteLength != t.byteLength ||
                                  !s(new G(e), new G(t))
                                )
                                  break;
                                return !0;
                              case u:
                              case h:
                              case d:
                                return eA(+e, +t);
                              case l:
                                return (
                                  e.name == t.name && e.message == t.message
                                );
                              case v:
                              case b:
                                return e == t + "";
                              case p:
                                var a = U;
                              case m:
                                var c = 1 & i;
                                if ((a || (a = L), e.size != t.size && !c))
                                  break;
                                var f = o.get(e);
                                if (f) return f == t;
                                (i |= 2), o.set(e, t);
                                var g = eE(a(e), a(t), i, n, s, o);
                                return o.delete(e), g;
                              case "[object Symbol]":
                                if (ep) return ep.call(e) == ep.call(t);
                            }
                            return !1;
                          })(e, t, y, r, i, n, s)
                    );
                  if (!(1 & r)) {
                    var P = D && H.call(e, "__wrapped__"),
                      O = I && H.call(t, "__wrapped__");
                    if (P || O) {
                      var C = P ? e.value() : e,
                        A = O ? t.value() : t;
                      return s || (s = new em()), n(C, A, r, i, s);
                    }
                  }
                  return (
                    !!S &&
                    (s || (s = new em()),
                    (function (e, t, r, i, n, s) {
                      var o = 1 & r,
                        a = eD(e),
                        c = a.length;
                      if (c != eD(t).length && !o) return !1;
                      for (var u = c; u--; ) {
                        var h = a[u];
                        if (!(o ? h in t : H.call(t, h))) return !1;
                      }
                      var l = s.get(e);
                      if (l && s.get(t)) return l == t;
                      var f = !0;
                      s.set(e, t), s.set(t, e);
                      for (var p = o; ++u < c; ) {
                        var d = e[(h = a[u])],
                          g = t[h];
                        if (i)
                          var y = o ? i(g, d, h, t, e, s) : i(d, g, h, e, t, s);
                        if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                          f = !1;
                          break;
                        }
                        p || (p = "constructor" == h);
                      }
                      if (f && !p) {
                        var v = e.constructor,
                          m = t.constructor;
                        v != m &&
                          "constructor" in e &&
                          "constructor" in t &&
                          !(
                            "function" == typeof v &&
                            v instanceof v &&
                            "function" == typeof m &&
                            m instanceof m
                          ) &&
                          (f = !1);
                      }
                      return s.delete(e), s.delete(t), f;
                    })(e, t, r, i, n, s))
                  );
                })(t, r, i, n, e, s)
              : t != t && r != r)
          );
        })(e, t);
      };
    },
    84824: function (e) {
      "use strict";
      let t = self.fetch.bind(self);
      (e.exports = t), (e.exports.default = e.exports);
    },
    93654: function (e, t, r) {
      "use strict";
      let i = r(83687),
        n = r(27566),
        s = r(3919),
        o = r(49391),
        a = (e) => null == e,
        c = Symbol("encodeFragmentIdentifier");
      function u(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function h(e, t) {
        return t.encode ? (t.strict ? i(e) : encodeURIComponent(e)) : e;
      }
      function l(e, t) {
        return t.decode ? n(e) : e;
      }
      function f(e) {
        let t = e.indexOf("#");
        return -1 !== t && (e = e.slice(0, t)), e;
      }
      function p(e) {
        let t = (e = f(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function d(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : t.parseBooleans &&
              null !== e &&
              ("true" === e.toLowerCase() || "false" === e.toLowerCase()) &&
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function g(e, t) {
        u(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          )).arrayFormatSeparator
        );
        let r = (function (e) {
            let t;
            switch (e.arrayFormat) {
              case "index":
                return (e, r, i) => {
                  if (
                    ((t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    !t)
                  ) {
                    i[e] = r;
                    return;
                  }
                  void 0 === i[e] && (i[e] = {}), (i[e][t[1]] = r);
                };
              case "bracket":
                return (e, r, i) => {
                  if (
                    ((t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, "")), !t)
                  ) {
                    i[e] = r;
                    return;
                  }
                  if (void 0 === i[e]) {
                    i[e] = [r];
                    return;
                  }
                  i[e] = [].concat(i[e], r);
                };
              case "colon-list-separator":
                return (e, r, i) => {
                  if (
                    ((t = /(:list)$/.exec(e)),
                    (e = e.replace(/:list$/, "")),
                    !t)
                  ) {
                    i[e] = r;
                    return;
                  }
                  if (void 0 === i[e]) {
                    i[e] = [r];
                    return;
                  }
                  i[e] = [].concat(i[e], r);
                };
              case "comma":
              case "separator":
                return (t, r, i) => {
                  let n =
                      "string" == typeof r &&
                      r.includes(e.arrayFormatSeparator),
                    s =
                      "string" == typeof r &&
                      !n &&
                      l(r, e).includes(e.arrayFormatSeparator);
                  r = s ? l(r, e) : r;
                  let o =
                    n || s
                      ? r.split(e.arrayFormatSeparator).map((t) => l(t, e))
                      : null === r
                      ? r
                      : l(r, e);
                  i[t] = o;
                };
              case "bracket-separator":
                return (t, r, i) => {
                  let n = /(\[\])$/.test(t);
                  if (((t = t.replace(/\[\]$/, "")), !n)) {
                    i[t] = r ? l(r, e) : r;
                    return;
                  }
                  let s =
                    null === r
                      ? []
                      : r.split(e.arrayFormatSeparator).map((t) => l(t, e));
                  if (void 0 === i[t]) {
                    i[t] = s;
                    return;
                  }
                  i[t] = [].concat(i[t], s);
                };
              default:
                return (e, t, r) => {
                  if (void 0 === r[e]) {
                    r[e] = t;
                    return;
                  }
                  r[e] = [].concat(r[e], t);
                };
            }
          })(t),
          i = Object.create(null);
        if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, "")))
          return i;
        for (let n of e.split("&")) {
          if ("" === n) continue;
          let [e, o] = s(t.decode ? n.replace(/\+/g, " ") : n, "=");
          (o =
            void 0 === o
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                  t.arrayFormat
                )
              ? o
              : l(o, t)),
            r(l(e, t), o, i);
        }
        for (let e of Object.keys(i)) {
          let r = i[e];
          if ("object" == typeof r && null !== r)
            for (let e of Object.keys(r)) r[e] = d(r[e], t);
          else i[e] = d(r, t);
        }
        return !1 === t.sort
          ? i
          : (!0 === t.sort
              ? Object.keys(i).sort()
              : Object.keys(i).sort(t.sort)
            ).reduce((e, t) => {
              let r = i[t];
              return (
                r && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = (function e(t) {
                      return Array.isArray(t)
                        ? t.sort()
                        : "object" == typeof t
                        ? e(Object.keys(t))
                            .sort((e, t) => Number(e) - Number(t))
                            .map((e) => t[e])
                        : t;
                    })(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = p),
        (t.parse = g),
        (t.stringify = (e, t) => {
          if (!e) return "";
          u(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t
            )).arrayFormatSeparator
          );
          let r = (r) =>
              (t.skipNull && a(e[r])) || (t.skipEmptyString && "" === e[r]),
            i = (function (e) {
              switch (e.arrayFormat) {
                case "index":
                  return (t) => (r, i) => {
                    let n = r.length;
                    return void 0 === i ||
                      (e.skipNull && null === i) ||
                      (e.skipEmptyString && "" === i)
                      ? r
                      : null === i
                      ? [...r, [h(t, e), "[", n, "]"].join("")]
                      : [...r, [h(t, e), "[", h(n, e), "]=", h(i, e)].join("")];
                  };
                case "bracket":
                  return (t) => (r, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? r
                      : null === i
                      ? [...r, [h(t, e), "[]"].join("")]
                      : [...r, [h(t, e), "[]=", h(i, e)].join("")];
                case "colon-list-separator":
                  return (t) => (r, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? r
                      : null === i
                      ? [...r, [h(t, e), ":list="].join("")]
                      : [...r, [h(t, e), ":list=", h(i, e)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                  return (r) => (i, n) =>
                    void 0 === n ||
                    (e.skipNull && null === n) ||
                    (e.skipEmptyString && "" === n)
                      ? i
                      : ((n = null === n ? "" : n), 0 === i.length)
                      ? [[h(r, e), t, h(n, e)].join("")]
                      : [[i, h(n, e)].join(e.arrayFormatSeparator)];
                }
                default:
                  return (t) => (r, i) =>
                    void 0 === i ||
                    (e.skipNull && null === i) ||
                    (e.skipEmptyString && "" === i)
                      ? r
                      : null === i
                      ? [...r, h(t, e)]
                      : [...r, [h(t, e), "=", h(i, e)].join("")];
              }
            })(t),
            n = {};
          for (let t of Object.keys(e)) r(t) || (n[t] = e[t]);
          let s = Object.keys(n);
          return (
            !1 !== t.sort && s.sort(t.sort),
            s
              .map((r) => {
                let n = e[r];
                return void 0 === n
                  ? ""
                  : null === n
                  ? h(r, t)
                  : Array.isArray(n)
                  ? 0 === n.length && "bracket-separator" === t.arrayFormat
                    ? h(r, t) + "[]"
                    : n.reduce(i(r), []).join("&")
                  : h(r, t) + "=" + h(n, t);
              })
              .filter((e) => e.length > 0)
              .join("&")
          );
        }),
        (t.parseUrl = (e, t) => {
          t = Object.assign({ decode: !0 }, t);
          let [r, i] = s(e, "#");
          return Object.assign(
            { url: r.split("?")[0] || "", query: g(p(e), t) },
            t && t.parseFragmentIdentifier && i
              ? { fragmentIdentifier: l(i, t) }
              : {}
          );
        }),
        (t.stringifyUrl = (e, r) => {
          r = Object.assign({ encode: !0, strict: !0, [c]: !0 }, r);
          let i = f(e.url).split("?")[0] || "",
            n = t.extract(e.url),
            s = Object.assign(t.parse(n, { sort: !1 }), e.query),
            o = t.stringify(s, r);
          o && (o = `?${o}`);
          let a = (function (e) {
            let t = "",
              r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          })(e.url);
          return (
            e.fragmentIdentifier &&
              (a = `#${
                r[c] ? h(e.fragmentIdentifier, r) : e.fragmentIdentifier
              }`),
            `${i}${o}${a}`
          );
        }),
        (t.pick = (e, r, i) => {
          i = Object.assign({ parseFragmentIdentifier: !0, [c]: !1 }, i);
          let { url: n, query: s, fragmentIdentifier: a } = t.parseUrl(e, i);
          return t.stringifyUrl(
            { url: n, query: o(s, r), fragmentIdentifier: a },
            i
          );
        }),
        (t.exclude = (e, r, i) => {
          let n = Array.isArray(r) ? (e) => !r.includes(e) : (e, t) => !r(e, t);
          return t.pick(e, n, i);
        });
    },
    42828: function (e) {
      "use strict";
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, i) {
        var n = (i && i.stringify) || t;
        if ("object" == typeof e && null !== e) {
          var s = r.length + 1;
          if (1 === s) return e;
          var o = Array(s);
          o[0] = n(e);
          for (var a = 1; a < s; a++) o[a] = n(r[a]);
          return o.join(" ");
        }
        if ("string" != typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (
          var u = "", h = 0, l = -1, f = (e && e.length) || 0, p = 0;
          p < f;

        ) {
          if (37 === e.charCodeAt(p) && p + 1 < f) {
            switch (((l = l > -1 ? l : 0), e.charCodeAt(p + 1))) {
              case 100:
              case 102:
                if (h >= c || null == r[h]) break;
                l < p && (u += e.slice(l, p)),
                  (u += Number(r[h])),
                  (l = p + 2),
                  p++;
                break;
              case 105:
                if (h >= c || null == r[h]) break;
                l < p && (u += e.slice(l, p)),
                  (u += Math.floor(Number(r[h]))),
                  (l = p + 2),
                  p++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c || void 0 === r[h]) break;
                l < p && (u += e.slice(l, p));
                var d = typeof r[h];
                if ("string" === d) {
                  (u += "'" + r[h] + "'"), (l = p + 2), p++;
                  break;
                }
                if ("function" === d) {
                  (u += r[h].name || "<anonymous>"), (l = p + 2), p++;
                  break;
                }
                (u += n(r[h])), (l = p + 2), p++;
                break;
              case 115:
                if (h >= c) break;
                l < p && (u += e.slice(l, p)),
                  (u += String(r[h])),
                  (l = p + 2),
                  p++;
                break;
              case 37:
                l < p && (u += e.slice(l, p)),
                  (u += "%"),
                  (l = p + 2),
                  p++,
                  h--;
            }
            ++h;
          }
          ++p;
        }
        return -1 === l ? e : (l < f && (u += e.slice(l)), u);
      };
    },
    3919: function (e) {
      "use strict";
      e.exports = (e, t) => {
        if (!("string" == typeof e && "string" == typeof t))
          throw TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        let r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
      };
    },
    83687: function (e) {
      "use strict";
      e.exports = (e) =>
        encodeURIComponent(e).replace(
          /[!'()*]/g,
          (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
        );
    },
    93739: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: function () {
            return s;
          },
          __asyncDelegator: function () {
            return _;
          },
          __asyncGenerator: function () {
            return b;
          },
          __asyncValues: function () {
            return w;
          },
          __await: function () {
            return m;
          },
          __awaiter: function () {
            return h;
          },
          __classPrivateFieldGet: function () {
            return S;
          },
          __classPrivateFieldSet: function () {
            return P;
          },
          __createBinding: function () {
            return f;
          },
          __decorate: function () {
            return a;
          },
          __exportStar: function () {
            return p;
          },
          __extends: function () {
            return n;
          },
          __generator: function () {
            return l;
          },
          __importDefault: function () {
            return I;
          },
          __importStar: function () {
            return D;
          },
          __makeTemplateObject: function () {
            return E;
          },
          __metadata: function () {
            return u;
          },
          __param: function () {
            return c;
          },
          __read: function () {
            return g;
          },
          __rest: function () {
            return o;
          },
          __spread: function () {
            return y;
          },
          __spreadArrays: function () {
            return v;
          },
          __values: function () {
            return d;
          },
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var i =
        function (e, t) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        };
      function n(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var s = function () {
        return (s =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var n in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var n = 0, i = Object.getOwnPropertySymbols(e);
            n < i.length;
            n++
          )
            0 > t.indexOf(i[n]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
              (r[i[n]] = e[i[n]]);
        return r;
      }
      function a(e, t, r, i) {
        var n,
          s = arguments.length,
          o =
            s < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (n = e[a]) &&
              (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
        return s > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (n, s) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              s(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function l(e, t) {
        var r,
          i,
          n,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & s[0]
                          ? i.return
                          : s[0]
                          ? i.throw || ((n = i.return) && n.call(i), 0)
                          : i.next) &&
                      !(n = n.call(i, s[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                    case 0:
                    case 1:
                      n = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (i = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(n = (n = o.trys).length > 0 && n[n.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < n[1]) {
                        (o.label = n[1]), (n = s);
                        break;
                      }
                      if (n && o.label < n[2]) {
                        (o.label = n[2]), o.ops.push(s);
                        break;
                      }
                      n[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  (s = [6, e]), (i = 0);
                } finally {
                  r = n = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function f(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function d(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          n,
          s = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = s.next()).done; )
            o.push(i.value);
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            i && !i.done && (r = s.return) && r.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var i = Array(e), n = 0, t = 0; t < r; t++)
          for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++)
            i[n] = s[o];
        return i;
      }
      function m(e) {
        return this instanceof m ? ((this.v = e), this) : new m(e);
      }
      function b(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var i,
          n = r.apply(e, t || []),
          s = [];
        return (
          (i = {}),
          o("next"),
          o("throw"),
          o("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          n[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                s.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = n[e](t)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : h(s[0][2], r);
          } catch (e) {
            h(s[0][3], e);
          }
        }
        function c(e) {
          a("next", e);
        }
        function u(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function _(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, n) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: m(e[i](t)), done: "return" === i }
                  : n
                  ? n(t)
                  : t;
              }
            : n;
        }
      }
      function w(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = d(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, n) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, n, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function E(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function D(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function S(e, t) {
        if (!t.has(e))
          throw TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    49676: function (e) {
      "use strict";
      e.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    92894: function (e, t, r) {
      "use strict";
      let i = r(42828);
      e.exports = s;
      let n =
        (function () {
          function e(e) {
            return void 0 !== e && e;
          }
          try {
            if ("undefined" != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, "globalThis", {
                get: function () {
                  return (
                    delete Object.prototype.globalThis, (this.globalThis = this)
                  );
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (t) {
            return e(self) || e(window) || e(this) || {};
          }
        })().console || {};
      function s(e) {
        var t, r;
        (e = e || {}).browser = e.browser || {};
        let i = e.browser.transmit;
        if (i && "function" != typeof i.send)
          throw Error("pino: transmit option must have a send function");
        let h = e.browser.write || n;
        e.browser.write && (e.browser.asObject = !0);
        let l = e.serializers || {},
          g = Array.isArray((t = e.browser.serialize))
            ? t.filter(function (e) {
                return "!stdSerializers.err" !== e;
              })
            : !0 === t && Object.keys(l),
          y = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (y = !1),
          "function" == typeof h &&
            (h.error = h.fatal = h.warn = h.info = h.debug = h.trace = h),
          !1 === e.enabled && (e.level = "silent");
        let v = e.level || "info",
          m = Object.create(h);
        m.log || (m.log = f),
          Object.defineProperty(m, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(m, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ("silent" !== e && !this.levels.values[e])
                throw Error("unknown level " + e);
              (this._level = e),
                o(b, m, "error", "log"),
                o(b, m, "fatal", "error"),
                o(b, m, "warn", "error"),
                o(b, m, "info", "log"),
                o(b, m, "debug", "log"),
                o(b, m, "trace", "log");
            },
          });
        let b = {
          transmit: i,
          serialize: g,
          asObject: e.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp:
            "function" == typeof (r = e).timestamp
              ? r.timestamp
              : !1 === r.timestamp
              ? p
              : d,
        };
        return (
          (m.levels = s.levels),
          (m.level = v),
          (m.setMaxListeners =
            m.getMaxListeners =
            m.emit =
            m.addListener =
            m.on =
            m.prependListener =
            m.once =
            m.prependOnceListener =
            m.removeListener =
            m.removeAllListeners =
            m.listeners =
            m.listenerCount =
            m.eventNames =
            m.write =
            m.flush =
              f),
          (m.serializers = l),
          (m._serialize = g),
          (m._stdErrSerialize = y),
          (m.child = function (t, r) {
            if (!t) throw Error("missing bindings for child Pino");
            (r = r || {}),
              g && t.serializers && (r.serializers = t.serializers);
            let n = r.serializers;
            if (g && n) {
              var s = Object.assign({}, l, n),
                o = !0 === e.browser.serialize ? Object.keys(s) : g;
              delete t.serializers, a([t], o, s, this._stdErrSerialize);
            }
            function h(e) {
              (this._childLevel = (0 | e._childLevel) + 1),
                (this.error = c(e, t, "error")),
                (this.fatal = c(e, t, "fatal")),
                (this.warn = c(e, t, "warn")),
                (this.info = c(e, t, "info")),
                (this.debug = c(e, t, "debug")),
                (this.trace = c(e, t, "trace")),
                s && ((this.serializers = s), (this._serialize = o)),
                i && (this._logEvent = u([].concat(e._logEvent.bindings, t)));
            }
            return (h.prototype = this), new h(this);
          }),
          i && (m._logEvent = u()),
          m
        );
      }
      function o(e, t, r, o) {
        let c = Object.getPrototypeOf(t);
        (t[r] =
          t.levelVal > t.levels.values[r]
            ? f
            : c[r]
            ? c[r]
            : n[r] || n[o] || f),
          (function (e, t, r) {
            if (e.transmit || t[r] !== f) {
              var o;
              t[r] =
                ((o = t[r]),
                function () {
                  let c = e.timestamp(),
                    h = Array(arguments.length),
                    l =
                      Object.getPrototypeOf && Object.getPrototypeOf(this) === n
                        ? n
                        : this;
                  for (var f = 0; f < h.length; f++) h[f] = arguments[f];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      a(
                        h,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize
                      ),
                    e.asObject
                      ? o.call(
                          l,
                          (function (e, t, r, n) {
                            e._serialize &&
                              a(
                                r,
                                e._serialize,
                                e.serializers,
                                e._stdErrSerialize
                              );
                            let o = r.slice(),
                              c = o[0],
                              u = {};
                            n && (u.time = n), (u.level = s.levels.values[t]);
                            let h = (0 | e._childLevel) + 1;
                            if (
                              (h < 1 && (h = 1),
                              null !== c && "object" == typeof c)
                            ) {
                              for (; h-- && "object" == typeof o[0]; )
                                Object.assign(u, o.shift());
                              c = o.length ? i(o.shift(), o) : void 0;
                            } else
                              "string" == typeof c && (c = i(o.shift(), o));
                            return void 0 !== c && (u.msg = c), u;
                          })(this, r, h, c)
                        )
                      : o.apply(l, h),
                    e.transmit)
                  ) {
                    let i = e.transmit.level || t.level,
                      n = s.levels.values[i],
                      o = s.levels.values[r];
                    if (o < n) return;
                    (function (e, t, r) {
                      let i = t.send,
                        n = t.ts,
                        s = t.methodLevel,
                        o = t.methodValue,
                        c = t.val,
                        h = e._logEvent.bindings;
                      a(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize
                      ),
                        (e._logEvent.ts = n),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === h.indexOf(e);
                        })),
                        (e._logEvent.level.label = s),
                        (e._logEvent.level.value = o),
                        i(s, e._logEvent, c),
                        (e._logEvent = u(h));
                    })(
                      this,
                      {
                        ts: c,
                        methodLevel: r,
                        methodValue: o,
                        transmitLevel: i,
                        transmitValue:
                          s.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      h
                    );
                  }
                });
            }
          })(e, t, r);
      }
      function a(e, t, r, i) {
        for (let n in e)
          if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
          else if ("object" == typeof e[n] && !Array.isArray(e[n]))
            for (let i in e[n])
              t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]));
      }
      function c(e, t, r) {
        return function () {
          let i = Array(1 + arguments.length);
          i[0] = t;
          for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
          return e[r].apply(this, i);
        };
      }
      function u(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: "", value: 0 },
        };
      }
      function h() {
        return {};
      }
      function l(e) {
        return e;
      }
      function f() {}
      function p() {
        return !1;
      }
      function d() {
        return Date.now();
      }
      (s.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (s.stdSerializers = {
          mapHttpRequest: h,
          mapHttpResponse: h,
          wrapRequestSerializer: l,
          wrapResponseSerializer: l,
          wrapErrorSerializer: l,
          req: h,
          res: h,
          err: function (e) {
            let t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack,
            };
            for (let r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        }),
        (s.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: p,
            epochTime: d,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
