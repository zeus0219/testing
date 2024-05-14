(self.webpackChunk_N_E_ = self.webpackChunk_N_E_ || []).push([
  [786],
  {
    36458: function (e, t, n) {
      "use strict";
      n.d(t, {
        TL: function () {
          return tX;
        },
        F_: function () {
          return tH;
        },
        d: function () {
          return tC;
        },
        tM: function () {
          return tW;
        },
        yU: function () {
          return t5;
        },
        wM: function () {
          return tg;
        },
        Bg: function () {
          return th;
        },
        _U: function () {
          return tp;
        },
        Ht: function () {
          return tP;
        },
        ji: function () {
          return tK;
        },
        P6: function () {
          return t1;
        },
        zn: function () {
          return t0;
        },
        VZ: function () {
          return td;
        },
        c$: function () {
          return tR;
        },
        w$: function () {
          return to;
        },
        a6: function () {
          return tz;
        },
        NS: function () {
          return ts;
        },
        Bs: function () {
          return tm;
        },
        xE: function () {
          return ty;
        },
        tf: function () {
          return ta;
        },
        Fg: function () {
          return tk;
        },
        O_: function () {
          return tv;
        },
        li: function () {
          return tJ;
        },
      });
      var r = n(2784),
        i = n(13980),
        o = n.n(i),
        a = n(88797),
        s = n(98537),
        u = n.n(s),
        c = n(72579),
        f = n.n(c),
        l = n(16765),
        d = n.n(l),
        h = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        p = RegExp(h.source, "g"),
        g = n(75868),
        b = n(85505),
        m = n.n(b),
        y = n(52322),
        v = n(56974),
        _ = n.n(v);
      n(86152);
      var x = n(34130),
        w = n(28133),
        k = n(91233),
        M = n(33037),
        T = n(15333),
        S = n(21594),
        C = n(39418),
        O = n(65648),
        j = n(10549),
        R = n(30656),
        q = n(61945),
        E = n(99506),
        P = n(54208),
        z = n(7491),
        A = n(64914),
        Z = n(90202),
        D = n(52149),
        N = n(43261),
        U = n(4267),
        F = n(22504),
        L = n(8302),
        W = n(93418),
        Y = n(65972),
        I = n(1906),
        B = n(44447),
        H = n(5201),
        V = n(5768),
        $ = n(91599),
        G = n(8475),
        X = n(45795),
        Q = n(25673),
        J = n(52399),
        K = n(43642),
        ee = n(62514),
        et = n(94841),
        en = n(33536),
        er = n(24966),
        ei = n(44687),
        eo = n(155),
        ea = n(35098),
        es = n(35996),
        eu = n(61049),
        ec = n.n(eu),
        ef = n(67304),
        el = n.n(ef);
      function ed(e, t, n) {
        e._context.bezierCurveTo(
          (2 * e._x0 + e._x1) / 3,
          (2 * e._y0 + e._y1) / 3,
          (e._x0 + 2 * e._x1) / 3,
          (e._y0 + 2 * e._y1) / 3,
          (e._x0 + 4 * e._x1 + t) / 6,
          (e._y0 + 4 * e._y1 + n) / 6
        );
      }
      function eh(e) {
        this._context = e;
      }
      function ep() {}
      function eg(e) {
        this._context = e;
      }
      function eb(e) {
        this._context = e;
      }
      function em(e, t) {
        (this._basis = new eh(e)), (this._beta = t);
      }
      (eh.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              ed(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              ed(this, e, t);
          }
          (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
        },
      }),
        (eg.prototype = {
          areaStart: ep,
          areaEnd: ep,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              case 2:
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = e), (this._y2 = t);
                break;
              case 1:
                (this._point = 2), (this._x3 = e), (this._y3 = t);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = e),
                  (this._y4 = t),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + e) / 6,
                    (this._y0 + 4 * this._y1 + t) / 6
                  );
                break;
              default:
                ed(this, e, t);
            }
            (this._x0 = this._x1),
              (this._x1 = e),
              (this._y0 = this._y1),
              (this._y1 = t);
          },
        }),
        (eb.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var n = (this._x0 + 4 * this._x1 + e) / 6,
                  r = (this._y0 + 4 * this._y1 + t) / 6;
                this._line
                  ? this._context.lineTo(n, r)
                  : this._context.moveTo(n, r);
                break;
              case 3:
                this._point = 4;
              default:
                ed(this, e, t);
            }
            (this._x0 = this._x1),
              (this._x1 = e),
              (this._y0 = this._y1),
              (this._y1 = t);
          },
        }),
        (em.prototype = {
          lineStart: function () {
            (this._x = []), (this._y = []), this._basis.lineStart();
          },
          lineEnd: function () {
            var e = this._x,
              t = this._y,
              n = e.length - 1;
            if (n > 0)
              for (
                var r, i = e[0], o = t[0], a = e[n] - i, s = t[n] - o, u = -1;
                ++u <= n;

              )
                (r = u / n),
                  this._basis.point(
                    this._beta * e[u] + (1 - this._beta) * (i + r * a),
                    this._beta * t[u] + (1 - this._beta) * (o + r * s)
                  );
            (this._x = this._y = null), this._basis.lineEnd();
          },
          point: function (e, t) {
            this._x.push(+e), this._y.push(+t);
          },
        });
      var ey = (function e(t) {
        function n(e) {
          return 1 === t ? new eh(e) : new em(e, t);
        }
        return (
          (n.beta = function (t) {
            return e(+t);
          }),
          n
        );
      })(0.85);
      function ev(e, t, n) {
        e._context.bezierCurveTo(
          e._x1 + e._k * (e._x2 - e._x0),
          e._y1 + e._k * (e._y2 - e._y0),
          e._x2 + e._k * (e._x1 - t),
          e._y2 + e._k * (e._y1 - n),
          e._x2,
          e._y2
        );
      }
      function e_(e, t) {
        (this._context = e), (this._k = (1 - t) / 6);
      }
      e_.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              ev(this, this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t);
              break;
            case 1:
              (this._point = 2), (this._x1 = e), (this._y1 = t);
              break;
            case 2:
              this._point = 3;
            default:
              ev(this, e, t);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t);
        },
      };
      var ex = (function e(t) {
        function n(e) {
          return new e_(e, t);
        }
        return (
          (n.tension = function (t) {
            return e(+t);
          }),
          n
        );
      })(0);
      function ew(e, t) {
        (this._context = e), (this._k = (1 - t) / 6);
      }
      ew.prototype = {
        areaStart: ep,
        areaEnd: ep,
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              (this._point = 1), (this._x3 = e), (this._y3 = t);
              break;
            case 1:
              (this._point = 2),
                this._context.moveTo((this._x4 = e), (this._y4 = t));
              break;
            case 2:
              (this._point = 3), (this._x5 = e), (this._y5 = t);
              break;
            default:
              ev(this, e, t);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t);
        },
      };
      var ek = (function e(t) {
        function n(e) {
          return new ew(e, t);
        }
        return (
          (n.tension = function (t) {
            return e(+t);
          }),
          n
        );
      })(0);
      function eM(e, t) {
        (this._context = e), (this._k = (1 - t) / 6);
      }
      eM.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (e, t) {
          switch (((e = +e), (t = +t), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              ev(this, e, t);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t);
        },
      };
      var eT = (function e(t) {
        function n(e) {
          return new eM(e, t);
        }
        return (
          (n.tension = function (t) {
            return e(+t);
          }),
          n
        );
      })(0);
      function eS(e, t, n) {
        var r = e._x1,
          i = e._y1,
          o = e._x2,
          a = e._y2;
        if (e._l01_a > 1e-12) {
          var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a,
            u = 3 * e._l01_a * (e._l01_a + e._l12_a);
          (r = (r * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u),
            (i = (i * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u);
        }
        if (e._l23_a > 1e-12) {
          var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a,
            f = 3 * e._l23_a * (e._l23_a + e._l12_a);
          (o = (o * c + e._x1 * e._l23_2a - t * e._l12_2a) / f),
            (a = (a * c + e._y1 * e._l23_2a - n * e._l12_2a) / f);
        }
        e._context.bezierCurveTo(r, i, o, a, e._x2, e._y2);
      }
      function eC(e, t) {
        (this._context = e), (this._alpha = t);
      }
      eC.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (e, t) {
          if (((e = +e), (t = +t), this._point)) {
            var n = this._x2 - e,
              r = this._y2 - t;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(n * n + r * r, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              eS(this, e, t);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t);
        },
      };
      var eO = (function e(t) {
        function n(e) {
          return t ? new eC(e, t) : new e_(e, 0);
        }
        return (
          (n.alpha = function (t) {
            return e(+t);
          }),
          n
        );
      })(0.5);
      function ej(e, t) {
        (this._context = e), (this._alpha = t);
      }
      ej.prototype = {
        areaStart: ep,
        areaEnd: ep,
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (e, t) {
          if (((e = +e), (t = +t), this._point)) {
            var n = this._x2 - e,
              r = this._y2 - t;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(n * n + r * r, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              (this._point = 1), (this._x3 = e), (this._y3 = t);
              break;
            case 1:
              (this._point = 2),
                this._context.moveTo((this._x4 = e), (this._y4 = t));
              break;
            case 2:
              (this._point = 3), (this._x5 = e), (this._y5 = t);
              break;
            default:
              eS(this, e, t);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t);
        },
      };
      var eR = (function e(t) {
        function n(e) {
          return t ? new ej(e, t) : new ew(e, 0);
        }
        return (
          (n.alpha = function (t) {
            return e(+t);
          }),
          n
        );
      })(0.5);
      function eq(e, t) {
        (this._context = e), (this._alpha = t);
      }
      eq.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._y0 =
            this._y1 =
            this._y2 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (e, t) {
          if (((e = +e), (t = +t), this._point)) {
            var n = this._x2 - e,
              r = this._y2 - t;
            this._l23_a = Math.sqrt(
              (this._l23_2a = Math.pow(n * n + r * r, this._alpha))
            );
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              eS(this, e, t);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = e),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = t);
        },
      };
      var eE = (function e(t) {
          function n(e) {
            return t ? new eq(e, t) : new eM(e, 0);
          }
          return (
            (n.alpha = function (t) {
              return e(+t);
            }),
            n
          );
        })(0.5),
        eP = n(20651);
      function ez(e) {
        this._context = e;
      }
      function eA(e, t, n) {
        var r = e._x1 - e._x0,
          i = t - e._x1,
          o = (e._y1 - e._y0) / (r || (i < 0 && -0)),
          a = (n - e._y1) / (i || (r < 0 && -0));
        return (
          ((o < 0 ? -1 : 1) + (a < 0 ? -1 : 1)) *
            Math.min(
              Math.abs(o),
              Math.abs(a),
              0.5 * Math.abs((o * i + a * r) / (r + i))
            ) || 0
        );
      }
      function eZ(e, t) {
        var n = e._x1 - e._x0;
        return n ? ((3 * (e._y1 - e._y0)) / n - t) / 2 : t;
      }
      function eD(e, t, n) {
        var r = e._x0,
          i = e._y0,
          o = e._x1,
          a = e._y1,
          s = (o - r) / 3;
        e._context.bezierCurveTo(r + s, i + s * t, o - s, a - s * n, o, a);
      }
      function eN(e) {
        this._context = e;
      }
      function eU(e) {
        this._context = new eF(e);
      }
      function eF(e) {
        this._context = e;
      }
      function eL(e) {
        this._context = e;
      }
      function eW(e) {
        var t,
          n,
          r = e.length - 1,
          i = Array(r),
          o = Array(r),
          a = Array(r);
        for (i[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
          (i[t] = 1), (o[t] = 4), (a[t] = 4 * e[t] + 2 * e[t + 1]);
        for (
          i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1;
          t < r;
          ++t
        )
          (n = i[t] / o[t - 1]), (o[t] -= n), (a[t] -= n * a[t - 1]);
        for (i[r - 1] = a[r - 1] / o[r - 1], t = r - 2; t >= 0; --t)
          i[t] = (a[t] - i[t + 1]) / o[t];
        for (t = 0, o[r - 1] = (e[r] + i[r - 1]) / 2; t < r - 1; ++t)
          o[t] = 2 * e[t + 1] - i[t + 1];
        return [i, o];
      }
      function eY(e, t) {
        (this._context = e), (this._t = t);
      }
      (ez.prototype = {
        areaStart: ep,
        areaEnd: ep,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (e, t) {
          (e = +e),
            (t = +t),
            this._point
              ? this._context.lineTo(e, t)
              : ((this._point = 1), this._context.moveTo(e, t));
        },
      }),
        (eN.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                eD(this, this._t0, eZ(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (e, t) {
            var n = NaN;
            if (((t = +t), (e = +e) !== this._x1 || t !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(e, t)
                      : this._context.moveTo(e, t);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3),
                    eD(this, eZ(this, (n = eA(this, e, t))), n);
                  break;
                default:
                  eD(this, this._t0, (n = eA(this, e, t)));
              }
              (this._x0 = this._x1),
                (this._x1 = e),
                (this._y0 = this._y1),
                (this._y1 = t),
                (this._t0 = n);
            }
          },
        }),
        ((eU.prototype = Object.create(eN.prototype)).point = function (e, t) {
          eN.prototype.point.call(this, t, e);
        }),
        (eF.prototype = {
          moveTo: function (e, t) {
            this._context.moveTo(t, e);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (e, t) {
            this._context.lineTo(t, e);
          },
          bezierCurveTo: function (e, t, n, r, i, o) {
            this._context.bezierCurveTo(t, e, r, n, o, i);
          },
        }),
        (eL.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var e = this._x,
              t = this._y,
              n = e.length;
            if (n) {
              if (
                (this._line
                  ? this._context.lineTo(e[0], t[0])
                  : this._context.moveTo(e[0], t[0]),
                2 === n)
              )
                this._context.lineTo(e[1], t[1]);
              else
                for (var r = eW(e), i = eW(t), o = 0, a = 1; a < n; ++o, ++a)
                  this._context.bezierCurveTo(
                    r[0][o],
                    i[0][o],
                    r[1][o],
                    i[1][o],
                    e[a],
                    t[a]
                  );
            }
            (this._line || (0 !== this._line && 1 === n)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (e, t) {
            this._x.push(+e), this._y.push(+t);
          },
        }),
        (eY.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(e, t)
                    : this._context.moveTo(e, t);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0)
                  this._context.lineTo(this._x, t), this._context.lineTo(e, t);
                else {
                  var n = this._x * (1 - this._t) + e * this._t;
                  this._context.lineTo(n, this._y), this._context.lineTo(n, t);
                }
            }
            (this._x = e), (this._y = t);
          },
        });
      var eI = n(82582),
        eB = n(81488);
      Object.prototype.hasOwnProperty;
      var eH = n(18149),
        eV = n.n(eH),
        e$ = n(97030),
        eG = n.n(e$),
        eX = n(13888),
        eQ = n.n(eX);
      function eJ() {
        return (eJ =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function eK(e, t) {
        return (eK =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function e0(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      var e1 = {
          fill: o().string,
          fontSize: o().number,
          fontFamily: o().string,
        },
        e2 = o().shape({
          domain: o().shape({
            line: o().shape({
              stroke: o().string.isRequired,
              strokeWidth: o().number.isRequired,
              strokeDasharray: o().string,
            }).isRequired,
          }).isRequired,
          ticks: o().shape({
            line: o().shape({
              stroke: o().string.isRequired,
              strokeWidth: o().number.isRequired,
              strokeDasharray: o().string,
            }).isRequired,
            text: o().shape(eJ({}, e1)).isRequired,
          }).isRequired,
          legend: o().shape({ text: o().shape(eJ({}, e1)).isRequired })
            .isRequired,
        }),
        e3 = o().shape({
          line: o().shape({
            stroke: o().string.isRequired,
            strokeWidth: o().number.isRequired,
            strokeDasharray: o().string,
          }).isRequired,
        }),
        e6 = o().shape({
          hidden: o().shape({
            symbol: o().shape({
              fill: o().string.isRequired,
              opacity: o().number,
            }).isRequired,
            text: o().shape(eJ({}, e1, { opacity: o().number })).isRequired,
          }).isRequired,
          text: o().shape(eJ({}, e1)).isRequired,
        }),
        e5 = o().shape({ text: o().shape(eJ({}, e1)).isRequired }),
        e8 = o().shape({ text: o().shape(eJ({}, e1)).isRequired }),
        e7 = o().shape({ text: o().shape(eJ({}, e1)).isRequired }),
        e4 = o().shape({
          line: o().shape({
            stroke: o().string.isRequired,
            strokeWidth: o().number.isRequired,
            strokeDasharray: o().string,
          }).isRequired,
        }),
        e9 = o().shape({
          text: o().shape(
            eJ({}, e1, {
              outlineWidth: o().number.isRequired,
              outlineColor: o().string.isRequired,
            })
          ).isRequired,
          link: o().shape({
            stroke: o().string.isRequired,
            strokeWidth: o().number.isRequired,
            outlineWidth: o().number.isRequired,
            outlineColor: o().string.isRequired,
          }).isRequired,
          outline: o().shape({
            stroke: o().string.isRequired,
            strokeWidth: o().number.isRequired,
            outlineWidth: o().number.isRequired,
            outlineColor: o().string.isRequired,
          }).isRequired,
          symbol: o().shape({
            fill: o().string.isRequired,
            outlineWidth: o().number.isRequired,
            outlineColor: o().string.isRequired,
          }).isRequired,
        }),
        te =
          (o().shape({
            background: o().string.isRequired,
            fontFamily: o().string.isRequired,
            fontSize: o().number.isRequired,
            textColor: o().string.isRequired,
            axis: e2.isRequired,
            grid: e3.isRequired,
            legends: e6.isRequired,
            labels: e5.isRequired,
            dots: e8.isRequired,
            markers: e7,
            crosshair: e4.isRequired,
            annotations: e9.isRequired,
          }),
          {
            background: "transparent",
            fontFamily: "sans-serif",
            fontSize: 11,
            textColor: "#333333",
            axis: {
              domain: { line: { stroke: "transparent", strokeWidth: 1 } },
              ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: {} },
              legend: { text: { fontSize: 12 } },
            },
            grid: { line: { stroke: "#dddddd", strokeWidth: 1 } },
            legends: {
              hidden: {
                symbol: { fill: "#333333", opacity: 0.6 },
                text: { fill: "#333333", opacity: 0.6 },
              },
              text: {},
              ticks: {
                line: { stroke: "#777777", strokeWidth: 1 },
                text: { fontSize: 10 },
              },
              title: { text: {} },
            },
            labels: { text: {} },
            markers: { lineColor: "#000000", lineStrokeWidth: 1, text: {} },
            dots: { text: {} },
            tooltip: {
              container: {
                background: "white",
                color: "inherit",
                fontSize: "inherit",
                borderRadius: "2px",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
                padding: "5px 9px",
              },
              basic: {
                whiteSpace: "pre",
                display: "flex",
                alignItems: "center",
              },
              chip: { marginRight: 7 },
              table: {},
              tableCell: { padding: "3px 5px" },
              tableCellValue: { fontWeight: "bold" },
            },
            crosshair: {
              line: {
                stroke: "#000000",
                strokeWidth: 1,
                strokeOpacity: 0.75,
                strokeDasharray: "6 6",
              },
            },
            annotations: {
              text: {
                fontSize: 13,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              link: {
                stroke: "#000000",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              outline: {
                fill: "none",
                stroke: "#000000",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              symbol: {
                fill: "#000000",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
            },
          }),
        tt = [
          "axis.ticks.text",
          "axis.legend.text",
          "legends.title.text",
          "legends.text",
          "legends.ticks.text",
          "legends.title.text",
          "labels.text",
          "dots.text",
          "markers.text",
          "annotations.text",
        ],
        tn = function (e, t) {
          var n = u()({}, e, t);
          return (
            tt.forEach(function (e) {
              void 0 === f()(n, e + ".fontFamily") &&
                d()(n, e + ".fontFamily", n.fontFamily),
                void 0 === f()(n, e + ".fontSize") &&
                  d()(n, e + ".fontSize", n.fontSize),
                void 0 === f()(n, e + ".fill") &&
                  d()(n, e + ".fill", n.textColor);
            }),
            n
          );
        },
        tr = (0, r.createContext)(),
        ti = function (e) {
          var t = e.children,
            n = e.animate,
            i = e.stiffness,
            o = e.damping,
            a = e.config,
            s = (0, r.useMemo)(
              function () {
                return {
                  animate: n,
                  springConfig: { stiffness: i, damping: o },
                  config: m()(a) ? g.config[a] : a,
                };
              },
              [n, i, o, a]
            );
          return (0, y.jsx)(tr.Provider, { value: s, children: t });
        },
        to = {
          animate: o().bool,
          motionStiffness: o().number,
          motionDamping: o().number,
          motionConfig: o().oneOfType([
            o().oneOf(Object.keys(g.config)),
            o().shape({
              mass: o().number,
              tension: o().number,
              friction: o().number,
              clamp: o().bool,
              precision: o().number,
              velocity: o().number,
              duration: o().number,
              easing: o().func,
            }),
          ]),
        };
      (ti.propTypes = {
        children: o().node.isRequired,
        animate: to.animate,
        stiffness: to.motionStiffness,
        damping: to.motionDamping,
        config: to.motionConfig,
      }),
        (ti.defaultProps = {
          animate: !0,
          stiffness: 90,
          damping: 15,
          config: "default",
        });
      var ta = function () {
          return (0, r.useContext)(tr);
        },
        ts = function (e) {
          var t,
            n = ta(),
            i = n.animate,
            o = n.config,
            a =
              ((t = (0, r.useRef)()),
              (0, r.useEffect)(
                function () {
                  t.current = e;
                },
                [e]
              ),
              t.current),
            s = (0, r.useMemo)(
              function () {
                return (function (e, t) {
                  var n,
                    r,
                    i,
                    o,
                    a,
                    s = (h.lastIndex = p.lastIndex = 0),
                    u = -1,
                    c = [],
                    f = [];
                  for (e += "", t += ""; (i = h.exec(e)) && (o = p.exec(t)); )
                    (a = o.index) > s &&
                      ((a = t.slice(s, a)), c[u] ? (c[u] += a) : (c[++u] = a)),
                      (i = i[0]) === (o = o[0])
                        ? c[u]
                          ? (c[u] += o)
                          : (c[++u] = o)
                        : ((c[++u] = null),
                          f.push({
                            i: u,
                            x: (function (e, t) {
                              return (
                                (e = +e),
                                (t = +t),
                                function (n) {
                                  return e * (1 - n) + t * n;
                                }
                              );
                            })(i, o),
                          })),
                      (s = p.lastIndex);
                  return (
                    s < t.length &&
                      ((a = t.slice(s)), c[u] ? (c[u] += a) : (c[++u] = a)),
                    c.length < 2
                      ? f[0]
                        ? ((n = f[0].x),
                          function (e) {
                            return n(e) + "";
                          })
                        : ((r = t),
                          function () {
                            return r;
                          })
                      : ((t = f.length),
                        function (e) {
                          for (var n, r = 0; r < t; ++r)
                            c[(n = f[r]).i] = n.x(e);
                          return c.join("");
                        })
                  );
                })(a, e);
              },
              [a, e]
            ),
            u = (0, g.useSpring)({
              from: { value: 0 },
              to: { value: 1 },
              reset: !0,
              config: o,
              immediate: !i,
            }).value;
          return (0, g.to)(u, s);
        },
        tu = Object.keys({
          nivo: [
            "#d76445",
            "#f47560",
            "#e8c1a0",
            "#97e3d5",
            "#61cdbb",
            "#00b0a7",
          ],
          BrBG: _()(w.r),
          PRGn: _()(k.r),
          PiYG: _()(M.r),
          PuOr: _()(T.r),
          RdBu: _()(S.r),
          RdGy: _()(C.r),
          RdYlBu: _()(O.r),
          RdYlGn: _()(j.r),
          spectral: _()(R.r),
          blues: _()(q.r),
          greens: _()(E.r),
          greys: _()(P.r),
          oranges: _()(z.r),
          purples: _()(A.r),
          reds: _()(Z.r),
          BuGn: _()(D.r),
          BuPu: _()(N.r),
          GnBu: _()(U.r),
          OrRd: _()(F.r),
          PuBuGn: _()(L.r),
          PuBu: _()(W.r),
          PuRd: _()(Y.r),
          RdPu: _()(I.r),
          YlGnBu: _()(B.r),
          YlGn: _()(H.r),
          YlOrBr: _()(V.r),
          YlOrRd: _()($.r),
        }),
        tc =
          (G.Z,
          X.Z,
          Q.Z,
          J.Z,
          K.Z,
          ee.Z,
          et.Z,
          en.Z,
          er.Z,
          _()(w.r),
          _()(k.r),
          _()(M.r),
          _()(T.r),
          _()(S.r),
          _()(C.r),
          _()(O.r),
          _()(j.r),
          _()(R.r),
          _()(q.r),
          _()(E.r),
          _()(P.r),
          _()(z.r),
          _()(A.r),
          _()(Z.r),
          _()(D.r),
          _()(N.r),
          _()(U.r),
          _()(F.r),
          _()(L.r),
          _()(W.r),
          _()(Y.r),
          _()(I.r),
          _()(B.r),
          _()(H.r),
          _()(V.r),
          _()($.r),
          w.Z,
          k.Z,
          M.Z,
          T.Z,
          S.Z,
          C.Z,
          O.Z,
          j.Z,
          R.Z,
          q.Z,
          E.Z,
          P.Z,
          z.Z,
          A.Z,
          Z.Z,
          ei.ZP,
          ei.yy,
          ei.uX,
          ei.zD,
          eo.s7,
          eo.H7,
          ea.Z,
          D.Z,
          N.Z,
          U.Z,
          F.Z,
          L.Z,
          W.Z,
          Y.Z,
          I.Z,
          B.Z,
          H.Z,
          V.Z,
          $.Z,
          eo.ZP,
          es.Z,
          o().oneOfType([o().oneOf(tu), o().func, o().arrayOf(o().string)]),
          {
            basis: function (e) {
              return new eh(e);
            },
            basisClosed: function (e) {
              return new eg(e);
            },
            basisOpen: function (e) {
              return new eb(e);
            },
            bundle: ey,
            cardinal: ex,
            cardinalClosed: ek,
            cardinalOpen: eT,
            catmullRom: eO,
            catmullRomClosed: eR,
            catmullRomOpen: eE,
            linear: eP.Z,
            linearClosed: function (e) {
              return new ez(e);
            },
            monotoneX: function (e) {
              return new eN(e);
            },
            monotoneY: function (e) {
              return new eU(e);
            },
            natural: function (e) {
              return new eL(e);
            },
            step: function (e) {
              return new eY(e, 0.5);
            },
            stepAfter: function (e) {
              return new eY(e, 1);
            },
            stepBefore: function (e) {
              return new eY(e, 0);
            },
          }),
        tf = Object.keys(tc),
        tl =
          (o().oneOf(tf),
          tf.filter(function (e) {
            return e.endsWith("Closed");
          }),
          el()(
            tf,
            "bundle",
            "basisClosed",
            "basisOpen",
            "cardinalClosed",
            "cardinalOpen",
            "catmullRomClosed",
            "catmullRomOpen",
            "linearClosed"
          ),
          el()(
            tf,
            "bundle",
            "basisClosed",
            "basisOpen",
            "cardinalClosed",
            "cardinalOpen",
            "catmullRomClosed",
            "catmullRomOpen",
            "linearClosed"
          )),
        td = o().oneOf(tl),
        th = function (e) {
          if (!tc[e])
            throw TypeError(
              "'" + e + "', is not a valid curve interpolator identifier."
            );
          return tc[e];
        },
        tp = {
          defs: o().arrayOf(o().shape({ id: o().string.isRequired }))
            .isRequired,
          fill: o().arrayOf(
            o().shape({
              id: o().string.isRequired,
              match: o().oneOfType([o().oneOf(["*"]), o().object, o().func])
                .isRequired,
            })
          ).isRequired,
        },
        tg =
          (o().oneOf([
            "ascending",
            "descending",
            "insideOut",
            "none",
            "reverse",
          ]),
          o().oneOf(["expand", "diverging", "none", "silhouette", "wiggle"]),
          o().shape({
            top: o().number,
            right: o().number,
            bottom: o().number,
            left: o().number,
          }).isRequired,
          o().oneOf([
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ])),
        tb = ((0, x.Z)(er.Z), { top: 0, right: 0, bottom: 0, left: 0 }),
        tm = function (e, t, n) {
          return (
            void 0 === n && (n = {}),
            (0, r.useMemo)(
              function () {
                var r = eJ({}, tb, n);
                return {
                  margin: r,
                  innerWidth: e - r.left - r.right,
                  innerHeight: t - r.top - r.bottom,
                  outerWidth: e,
                  outerHeight: t,
                };
              },
              [e, t, n.top, n.right, n.bottom, n.left]
            )
          );
        },
        ty = function () {
          var e = (0, r.useRef)(null),
            t = (0, r.useState)({ left: 0, top: 0, width: 0, height: 0 }),
            n = t[0],
            i = t[1],
            o = (0, r.useState)(function () {
              return "undefined" != typeof window
                ? new ResizeObserver(function (e) {
                    return i(e[0].contentRect);
                  })
                : null;
            })[0];
          return (
            (0, r.useEffect)(function () {
              return (
                e.current && null !== o && o.observe(e.current),
                function () {
                  null !== o && o.disconnect();
                }
              );
            }, []),
            [e, n]
          );
        },
        tv = function (e) {
          return (0, r.useMemo)(
            function () {
              return "function" == typeof e
                ? e
                : "string" == typeof e
                ? 0 === e.indexOf("time:")
                  ? (0, eB.i$)(e.slice("5"))
                  : (0, eI.WU)(e)
                : function (e) {
                    return "" + e;
                  };
            },
            [e]
          );
        },
        t_ = (0, r.createContext)(),
        tx = {},
        tw = function (e) {
          var t,
            n = e.theme,
            i = e.children,
            o =
              ((t = void 0 === n ? tx : n),
              (0, r.useMemo)(
                function () {
                  return tn(te, t);
                },
                [t]
              ));
          return (0, y.jsx)(t_.Provider, { value: o, children: i });
        };
      tw.propTypes = { children: o().node.isRequired, theme: o().object };
      var tk = function () {
          return (0, r.useContext)(t_);
        },
        tM = function (e) {
          var t = e.children,
            n = e.condition,
            i = e.wrapper;
          return n ? (0, r.cloneElement)(i, {}, t) : t;
        };
      tM.propTypes = {
        children: o().node.isRequired,
        condition: o().bool.isRequired,
        wrapper: o().element.isRequired,
      };
      var tT = { position: "relative" },
        tS = function (e) {
          var t = e.children,
            n = e.theme,
            i = e.renderWrapper,
            o = e.isInteractive,
            s = e.animate,
            u = e.motionStiffness,
            c = e.motionDamping,
            f = e.motionConfig,
            l = (0, r.useRef)(null);
          return (0, y.jsx)(tw, {
            theme: n,
            children: (0, y.jsx)(ti, {
              animate: s,
              stiffness: u,
              damping: c,
              config: f,
              children: (0, y.jsx)(a.pn, {
                container: l,
                children: (0, y.jsxs)(tM, {
                  condition: void 0 === i || i,
                  wrapper: (0, y.jsx)("div", { style: tT, ref: l }),
                  children: [t, (void 0 === o || o) && (0, y.jsx)(a.u, {})],
                }),
              }),
            }),
          });
        };
      (tS.propTypes = {
        children: o().element.isRequired,
        isInteractive: o().bool,
        renderWrapper: o().bool,
        theme: o().object,
        animate: o().bool,
        motionStiffness: o().number,
        motionDamping: o().number,
        motionConfig: o().string,
      }),
        o().func.isRequired,
        o().bool,
        o().bool,
        o().object.isRequired,
        o().bool.isRequired,
        o().number,
        o().number,
        o().string;
      var tC = function (e) {
        var t = e.children,
          n = ty(),
          r = n[0],
          i = n[1],
          o = i.width > 0 && i.height > 0;
        return (0, y.jsx)("div", {
          ref: r,
          style: { width: "100%", height: "100%" },
          children: o && t({ width: i.width, height: i.height }),
        });
      };
      tC.propTypes = { children: o().func.isRequired };
      var tO = ["id", "colors"],
        tj = function (e) {
          var t = e.id,
            n = e.colors,
            r = e0(e, tO);
          return (0, y.jsx)(
            "linearGradient",
            eJ({ id: t, x1: 0, x2: 0, y1: 0, y2: 1 }, r, {
              children: n.map(function (e) {
                var t = e.offset,
                  n = e.color,
                  r = e.opacity;
                return (0,
                y.jsx)("stop", { offset: t + "%", stopColor: n, stopOpacity: void 0 !== r ? r : 1 }, t);
              }),
            })
          );
        };
      tj.propTypes = {
        id: o().string.isRequired,
        colors: o().arrayOf(
          o().shape({
            offset: o().number.isRequired,
            color: o().string.isRequired,
            opacity: o().number,
          })
        ).isRequired,
        gradientTransform: o().string,
      };
      var tR = function (e, t, n) {
          return (
            void 0 === n && (n = {}),
            eJ({ id: e, type: "linearGradient", colors: t }, n)
          );
        },
        tq = { linearGradient: tj },
        tE = (0, r.memo)(function (e) {
          var t = e.id,
            n = e.background,
            r = e.color,
            i = e.size,
            o = e.padding,
            a = e.stagger,
            s = i + o,
            u = i / 2,
            c = o / 2;
          return (
            !0 === a && (s = 2 * i + 2 * o),
            (0, y.jsxs)("pattern", {
              id: t,
              width: s,
              height: s,
              patternUnits: "userSpaceOnUse",
              children: [
                (0, y.jsx)("rect", { width: s, height: s, fill: n }),
                (0, y.jsx)("circle", { cx: c + u, cy: c + u, r: u, fill: r }),
                a &&
                  (0, y.jsx)("circle", {
                    cx: 1.5 * o + i + u,
                    cy: 1.5 * o + i + u,
                    r: u,
                    fill: r,
                  }),
              ],
            })
          );
        });
      (tE.displayName = "PatternDots"),
        (tE.propTypes = {
          id: o().string.isRequired,
          color: o().string.isRequired,
          background: o().string.isRequired,
          size: o().number.isRequired,
          padding: o().number.isRequired,
          stagger: o().bool.isRequired,
        }),
        (tE.defaultProps = {
          color: "#000000",
          background: "#ffffff",
          size: 4,
          padding: 4,
          stagger: !1,
        });
      var tP = function (e) {
          return (e * Math.PI) / 180;
        },
        tz = {
          svg: {
            align: {
              left: "start",
              center: "middle",
              right: "end",
              start: "start",
              middle: "middle",
              end: "end",
            },
            baseline: {
              top: "text-before-edge",
              center: "central",
              bottom: "alphabetic",
            },
          },
          canvas: {
            align: {
              left: "left",
              center: "center",
              right: "right",
              start: "left",
              middle: "center",
              end: "right",
            },
            baseline: { top: "top", center: "middle", bottom: "bottom" },
          },
        },
        tA = (0, r.memo)(function (e) {
          var t = e.id,
            n = e.spacing,
            r = e.rotation,
            i = e.background,
            o = e.color,
            a = e.lineWidth,
            s = Math.round(r) % 360,
            u = Math.abs(n);
          s > 180
            ? (s -= 360)
            : s > 90
            ? (s -= 180)
            : s < -180
            ? (s += 360)
            : s < -90 && (s += 180);
          var c,
            f = u,
            l = u;
          return (
            0 === s
              ? (c =
                  "\n                M 0 0 L " +
                  f +
                  " 0\n                M 0 " +
                  l +
                  " L " +
                  f +
                  " " +
                  l +
                  "\n            ")
              : 90 === s
              ? (c =
                  "\n                M 0 0 L 0 " +
                  l +
                  "\n                M " +
                  f +
                  " 0 L " +
                  f +
                  " " +
                  l +
                  "\n            ")
              : ((f = Math.abs(u / Math.sin(tP(s)))),
                (l = u / Math.sin(tP(90 - s))),
                (c =
                  s > 0
                    ? "\n                    M 0 " +
                      -l +
                      " L " +
                      2 * f +
                      " " +
                      l +
                      "\n                    M " +
                      -f +
                      " " +
                      -l +
                      " L " +
                      f +
                      " " +
                      l +
                      "\n                    M " +
                      -f +
                      " 0 L " +
                      f +
                      " " +
                      2 * l +
                      "\n                "
                    : "\n                    M " +
                      -f +
                      " " +
                      l +
                      " L " +
                      f +
                      " " +
                      -l +
                      "\n                    M " +
                      -f +
                      " " +
                      2 * l +
                      " L " +
                      2 * f +
                      " " +
                      -l +
                      "\n                    M 0 " +
                      2 * l +
                      " L " +
                      2 * f +
                      " 0\n                ")),
            (0, y.jsxs)("pattern", {
              id: t,
              width: f,
              height: l,
              patternUnits: "userSpaceOnUse",
              children: [
                (0, y.jsx)("rect", {
                  width: f,
                  height: l,
                  fill: i,
                  stroke: "rgba(255, 0, 0, 0.1)",
                  strokeWidth: 0,
                }),
                (0, y.jsx)("path", {
                  d: c,
                  strokeWidth: a,
                  stroke: o,
                  strokeLinecap: "square",
                }),
              ],
            })
          );
        });
      (tA.displayName = "PatternLines"),
        (tA.propTypes = {
          id: o().string.isRequired,
          spacing: o().number.isRequired,
          rotation: o().number.isRequired,
          background: o().string.isRequired,
          color: o().string.isRequired,
          lineWidth: o().number.isRequired,
        }),
        (tA.defaultProps = {
          spacing: 5,
          rotation: 0,
          color: "#000000",
          background: "#ffffff",
          lineWidth: 2,
        });
      var tZ = (0, r.memo)(function (e) {
        var t = e.id,
          n = e.background,
          r = e.color,
          i = e.size,
          o = e.padding,
          a = e.stagger,
          s = i + o,
          u = o / 2;
        return (
          !0 === a && (s = 2 * i + 2 * o),
          (0, y.jsxs)("pattern", {
            id: t,
            width: s,
            height: s,
            patternUnits: "userSpaceOnUse",
            children: [
              (0, y.jsx)("rect", { width: s, height: s, fill: n }),
              (0, y.jsx)("rect", { x: u, y: u, width: i, height: i, fill: r }),
              a &&
                (0, y.jsx)("rect", {
                  x: 1.5 * o + i,
                  y: 1.5 * o + i,
                  width: i,
                  height: i,
                  fill: r,
                }),
            ],
          })
        );
      });
      (tZ.displayName = "PatternSquares"),
        (tZ.propTypes = {
          id: o().string.isRequired,
          color: o().string.isRequired,
          background: o().string.isRequired,
          size: o().number.isRequired,
          padding: o().number.isRequired,
          stagger: o().bool.isRequired,
        }),
        (tZ.defaultProps = {
          color: "#000000",
          background: "#ffffff",
          size: 4,
          padding: 4,
          stagger: !1,
        });
      var tD = { patternDots: tE, patternLines: tA, patternSquares: tZ },
        tN = ["type"],
        tU = eJ({}, tq, tD),
        tF = function (e) {
          var t = e.defs;
          return !t || t.length < 1
            ? null
            : (0, y.jsx)("defs", {
                "aria-hidden": !0,
                children: t.map(function (e) {
                  var t = e.type,
                    n = e0(e, tN);
                  return tU[t]
                    ? (0, r.createElement)(tU[t], eJ({ key: n.id }, n))
                    : null;
                }),
              });
        };
      tF.propTypes = {
        defs: o().arrayOf(
          o().shape({
            type: o().oneOf(Object.keys(tU)).isRequired,
            id: o().string.isRequired,
          })
        ),
      };
      var tL = (0, r.memo)(tF),
        tW = function (e) {
          var t = e.width,
            n = e.height,
            r = e.margin,
            i = e.defs,
            o = e.children,
            a = e.role,
            s = e.ariaLabel,
            u = e.ariaLabelledBy,
            c = e.ariaDescribedBy,
            f = e.isFocusable,
            l = tk();
          return (0, y.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: t,
            height: n,
            role: a,
            "aria-label": s,
            "aria-labelledby": u,
            "aria-describedby": c,
            focusable: f,
            tabIndex: f ? 0 : void 0,
            children: [
              (0, y.jsx)(tL, { defs: i }),
              (0, y.jsx)("rect", { width: t, height: n, fill: l.background }),
              (0, y.jsx)("g", {
                transform: "translate(" + r.left + "," + r.top + ")",
                children: o,
              }),
            ],
          });
        };
      tW.propTypes = {
        width: o().number.isRequired,
        height: o().number.isRequired,
        margin: o().shape({
          top: o().number.isRequired,
          left: o().number.isRequired,
        }).isRequired,
        defs: o().array,
        children: o().oneOfType([o().arrayOf(o().node), o().node]).isRequired,
        role: o().string,
        isFocusable: o().bool,
        ariaLabel: o().string,
        ariaLabelledBy: o().string,
        ariaDescribedBy: o().string,
      };
      var tY = function (e) {
        var t = e.size,
          n = e.color,
          r = e.borderWidth,
          i = e.borderColor;
        return (0, y.jsx)("circle", {
          r: t / 2,
          fill: n,
          stroke: i,
          strokeWidth: r,
          style: { pointerEvents: "none" },
        });
      };
      tY.propTypes = {
        size: o().number.isRequired,
        color: o().string.isRequired,
        borderWidth: o().number.isRequired,
        borderColor: o().string.isRequired,
      };
      var tI = (0, r.memo)(tY),
        tB = function (e) {
          var t = e.x,
            n = e.y,
            i = e.symbol,
            o = void 0 === i ? tI : i,
            a = e.size,
            s = e.datum,
            u = e.color,
            c = e.borderWidth,
            f = e.borderColor,
            l = e.label,
            d = e.labelTextAnchor,
            h = e.labelYOffset,
            p = tk(),
            b = ta(),
            m = b.animate,
            v = b.config,
            _ = (0, g.useSpring)({
              transform: "translate(" + t + ", " + n + ")",
              config: v,
              immediate: !m,
            });
          return (0, y.jsxs)(g.animated.g, {
            transform: _.transform,
            style: { pointerEvents: "none" },
            children: [
              (0, r.createElement)(o, {
                size: a,
                color: u,
                datum: s,
                borderWidth: c,
                borderColor: f,
              }),
              l &&
                (0, y.jsx)("text", {
                  textAnchor: void 0 === d ? "middle" : d,
                  y: void 0 === h ? -12 : h,
                  style: p.dots.text,
                  children: l,
                }),
            ],
          });
        };
      tB.propTypes = {
        x: o().number.isRequired,
        y: o().number.isRequired,
        datum: o().object.isRequired,
        size: o().number.isRequired,
        color: o().string.isRequired,
        borderWidth: o().number.isRequired,
        borderColor: o().string.isRequired,
        symbol: o().oneOfType([o().func, o().object]),
        label: o().oneOfType([o().string, o().number]),
        labelTextAnchor: o().oneOf(["start", "middle", "end"]),
        labelYOffset: o().number,
      };
      var tH = (0, r.memo)(tB),
        tV = function (e) {
          var t = e.width,
            n = e.height,
            r = e.axis,
            i = e.scale,
            o = e.value,
            a = e.lineStyle,
            s = e.textStyle,
            u = e.legend,
            c = e.legendPosition,
            f = e.legendOffsetX,
            l = e.legendOffsetY,
            d = e.legendOrientation,
            h = tk(),
            p = 0,
            g = 0,
            b = 0,
            m = 0;
          "y" === r ? ((b = i(o)), (g = t)) : ((p = i(o)), (m = n));
          var v = null;
          if (u) {
            var _ = (function (e) {
              var t = e.axis,
                n = e.width,
                r = e.height,
                i = e.position,
                o = e.offsetX,
                a = e.offsetY,
                s = e.orientation,
                u = 0,
                c = 0,
                f = "start";
              if ("x" === t)
                switch (i) {
                  case "top-left":
                    (u = -o), (c = a), (f = "end");
                    break;
                  case "top":
                    (c = -a), (f = "horizontal" === s ? "middle" : "start");
                    break;
                  case "top-right":
                    (u = o),
                      (c = a),
                      (f = "horizontal" === s ? "start" : "end");
                    break;
                  case "right":
                    (u = o),
                      (c = r / 2),
                      (f = "horizontal" === s ? "start" : "middle");
                    break;
                  case "bottom-right":
                    (u = o), (c = r - a), (f = "start");
                    break;
                  case "bottom":
                    (c = r + a), (f = "horizontal" === s ? "middle" : "end");
                    break;
                  case "bottom-left":
                    (c = r - a),
                      (u = -o),
                      (f = "horizontal" === s ? "end" : "start");
                    break;
                  case "left":
                    (u = -o),
                      (c = r / 2),
                      (f = "horizontal" === s ? "end" : "middle");
                }
              else
                switch (i) {
                  case "top-left":
                    (u = o), (c = -a), (f = "start");
                    break;
                  case "top":
                    (u = n / 2),
                      (c = -a),
                      (f = "horizontal" === s ? "middle" : "start");
                    break;
                  case "top-right":
                    (u = n - o),
                      (c = -a),
                      (f = "horizontal" === s ? "end" : "start");
                    break;
                  case "right":
                    (u = n + o), (f = "horizontal" === s ? "start" : "middle");
                    break;
                  case "bottom-right":
                    (u = n - o), (c = a), (f = "end");
                    break;
                  case "bottom":
                    (u = n / 2),
                      (c = a),
                      (f = "horizontal" === s ? "middle" : "end");
                    break;
                  case "bottom-left":
                    (u = o),
                      (c = a),
                      (f = "horizontal" === s ? "start" : "end");
                    break;
                  case "left":
                    (u = -o), (f = "horizontal" === s ? "end" : "middle");
                }
              return {
                x: u,
                y: c,
                rotation: "vertical" === s ? -90 : 0,
                textAnchor: f,
              };
            })({
              axis: r,
              width: t,
              height: n,
              position: c,
              offsetX: f,
              offsetY: l,
              orientation: d,
            });
            v = (0, y.jsx)("text", {
              transform:
                "translate(" +
                _.x +
                ", " +
                _.y +
                ") rotate(" +
                _.rotation +
                ")",
              textAnchor: _.textAnchor,
              dominantBaseline: "central",
              style: s,
              children: u,
            });
          }
          return (0, y.jsxs)("g", {
            transform: "translate(" + p + ", " + b + ")",
            children: [
              (0, y.jsx)("line", {
                x1: 0,
                x2: g,
                y1: 0,
                y2: m,
                stroke: h.markers.lineColor,
                strokeWidth: h.markers.lineStrokeWidth,
                style: a,
              }),
              v,
            ],
          });
        };
      (tV.propTypes = {
        width: o().number.isRequired,
        height: o().number.isRequired,
        axis: o().oneOf(["x", "y"]).isRequired,
        scale: o().func.isRequired,
        value: o().oneOfType([o().number, o().string, o().instanceOf(Date)])
          .isRequired,
        lineStyle: o().object,
        textStyle: o().object,
        legend: o().string,
        legendPosition: o().oneOf([
          "top-left",
          "top",
          "top-right",
          "right",
          "bottom-right",
          "bottom",
          "bottom-left",
          "left",
        ]),
        legendOffsetX: o().number.isRequired,
        legendOffsetY: o().number.isRequired,
        legendOrientation: o().oneOf(["horizontal", "vertical"]).isRequired,
      }),
        (tV.defaultProps = {
          legendPosition: "top-right",
          legendOffsetX: 14,
          legendOffsetY: 14,
          legendOrientation: "horizontal",
        });
      var t$ = (0, r.memo)(tV),
        tG = function (e) {
          var t = e.markers,
            n = e.width,
            r = e.height,
            i = e.xScale,
            o = e.yScale;
          return t && 0 !== t.length
            ? t.map(function (e, t) {
                return (0,
                y.jsx)(t$, eJ({}, e, { width: n, height: r, scale: "y" === e.axis ? o : i }), t);
              })
            : null;
        };
      tG.propTypes = {
        width: o().number.isRequired,
        height: o().number.isRequired,
        xScale: o().func.isRequired,
        yScale: o().func.isRequired,
        markers: o().arrayOf(
          o().shape({
            axis: o().oneOf(["x", "y"]).isRequired,
            value: o().oneOfType([o().number, o().string, o().instanceOf(Date)])
              .isRequired,
            lineStyle: o().object,
            textStyle: o().object,
          })
        ),
      };
      var tX = (0, r.memo)(tG),
        tQ = [
          "theme",
          "renderWrapper",
          "animate",
          "motionStiffness",
          "motionDamping",
          "motionConfig",
        ],
        tJ = function (e) {
          return (function (t) {
            function n() {
              return t.apply(this, arguments) || this;
            }
            return (
              (n.prototype = Object.create(t.prototype)),
              (n.prototype.constructor = n),
              eK(n, t),
              (n.prototype.render = function () {
                var t = this.props,
                  n = t.theme,
                  r = t.renderWrapper,
                  i = t.animate,
                  o = t.motionStiffness,
                  a = t.motionDamping,
                  s = t.motionConfig,
                  u = e0(t, tQ);
                return (0, y.jsx)(tS, {
                  theme: n,
                  renderWrapper: r,
                  isInteractive: u.isInteractive,
                  animate: i,
                  motionStiffness: o,
                  motionDamping: a,
                  motionConfig: s,
                  children: (0, y.jsx)(e, eJ({}, u)),
                });
              }),
              n
            );
          })(r.Component);
        },
        tK = function (e, t) {
          var n,
            r = ec()(e)
              ? e
              : function (t) {
                  return f()(t, e);
                };
          return (
            t && (n = ec()(t) ? t : (0, eI.WU)(t)),
            n
              ? function (e) {
                  return n(r(e));
                }
              : r
          );
        },
        t0 = function (e, t, n, r, i, o) {
          return e <= i && i <= e + n && t <= o && o <= t + r;
        },
        t1 = function (e, t) {
          var n = t.clientX,
            r = t.clientY,
            i = e.getBoundingClientRect(),
            o = e.getBBox(),
            a = o.width === i.width ? 1 : o.width / i.width;
          return [(n - i.left) * a, (r - i.top) * a];
        },
        t2 = Object.keys(tq),
        t3 = Object.keys(tD),
        t6 = function (e, t, n) {
          if ("*" === e) return !0;
          if (ec()(e)) return e(t);
          if (eG()(e)) {
            var r = n ? f()(t, n) : t;
            return eV()(eQ()(r, Object.keys(e)), e);
          }
          return !1;
        },
        t5 = function (e, t, n, r) {
          var i = void 0 === r ? {} : r,
            o = i.dataKey,
            a = i.colorKey,
            s = void 0 === a ? "color" : a,
            u = i.targetKey,
            c = void 0 === u ? "fill" : u,
            l = [],
            h = {};
          return (
            e.length &&
              t.length &&
              ((l = [].concat(e)),
              t.forEach(function (t) {
                for (
                  var r = 0;
                  r < n.length &&
                  "break" !==
                    (function (r) {
                      var i = n[r],
                        a = i.id;
                      if (t6(i.match, t, o)) {
                        var u = e.find(function (e) {
                          return e.id === a;
                        });
                        if (u) {
                          if (t3.includes(u.type)) {
                            if (
                              "inherit" === u.background ||
                              "inherit" === u.color
                            ) {
                              var p = f()(t, s),
                                g = u.background,
                                b = u.color,
                                m = a;
                              "inherit" === u.background &&
                                ((m = m + ".bg." + p), (g = p)),
                                "inherit" === u.color &&
                                  ((m = m + ".fg." + p), (b = p)),
                                d()(t, c, "url(#" + m + ")"),
                                h[m] ||
                                  (l.push(
                                    eJ({}, u, {
                                      id: m,
                                      background: g,
                                      color: b,
                                    })
                                  ),
                                  (h[m] = 1));
                            } else d()(t, c, "url(#" + a + ")");
                          } else if (t2.includes(u.type)) {
                            if (
                              u.colors
                                .map(function (e) {
                                  return e.color;
                                })
                                .includes("inherit")
                            ) {
                              var y = f()(t, s),
                                v = a,
                                _ = eJ({}, u, {
                                  colors: u.colors.map(function (e, t) {
                                    return "inherit" !== e.color
                                      ? e
                                      : ((v = v + "." + t + "." + y),
                                        eJ({}, e, {
                                          color:
                                            "inherit" === e.color ? y : e.color,
                                        }));
                                  }),
                                });
                              (_.id = v),
                                d()(t, c, "url(#" + v + ")"),
                                h[v] || (l.push(_), (h[v] = 1));
                            } else d()(t, c, "url(#" + a + ")");
                          }
                        }
                        return "break";
                      }
                    })(r);
                  r++
                );
              })),
            l
          );
        };
    },
    10035: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Line: function () {
            return im;
          },
          LineCanvas: function () {
            return ix;
          },
          LineCanvasDefaultProps: function () {
            return r6;
          },
          LineCanvasPropTypes: function () {
            return r1;
          },
          LineDefaultProps: function () {
            return r3;
          },
          LinePropTypes: function () {
            return r0;
          },
          ResponsiveLine: function () {
            return iy;
          },
          ResponsiveLineCanvas: function () {
            return iw;
          },
          useAreaGenerator: function () {
            return r8;
          },
          useLine: function () {
            return r4;
          },
          useLineGenerator: function () {
            return r5;
          },
          useSlices: function () {
            return r7;
          },
        });
      var r,
        i,
        o,
        a,
        s = n(2784),
        u = n(36458),
        c = n(8475),
        f = n(45795),
        l = n(25673),
        d = n(52399),
        h = n(43642),
        p = n(62514),
        g = n(94841),
        b = n(33536),
        m = n(24966),
        y = n(28133),
        v = n(91233),
        _ = n(33037),
        x = n(15333),
        w = n(21594),
        k = n(39418),
        M = n(65648),
        T = n(10549),
        S = n(30656),
        C = n(61945),
        O = n(99506),
        j = n(54208),
        R = n(7491),
        q = n(64914),
        E = n(90202),
        P = n(52149),
        z = n(43261),
        A = n(4267),
        Z = n(22504),
        D = n(8302),
        N = n(93418),
        U = n(65972),
        F = n(1906),
        L = n(44447),
        W = n(5201),
        Y = n(5768),
        I = n(91599),
        B = n(44687),
        H = n(155),
        V = n(35098),
        $ = n(35996),
        G = n(97030),
        X = n.n(G),
        Q = n(72579),
        J = n.n(Q),
        K = n(68847),
        ee = n(13980),
        et = n.n(ee),
        en = n(34130);
      function er() {
        return (er =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ei(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var eo = {
          nivo: [
            "#e8c1a0",
            "#f47560",
            "#f1e15b",
            "#e8a838",
            "#61cdbb",
            "#97e3d5",
          ],
          category10: c.Z,
          accent: f.Z,
          dark2: l.Z,
          paired: d.Z,
          pastel1: h.Z,
          pastel2: p.Z,
          set1: g.Z,
          set2: b.Z,
          set3: m.Z,
        },
        ea = Object.keys(eo),
        es = {
          brown_blueGreen: y.r,
          purpleRed_green: v.r,
          pink_yellowGreen: _.r,
          purple_orange: x.r,
          red_blue: w.r,
          red_grey: k.r,
          red_yellow_blue: M.r,
          red_yellow_green: T.r,
          spectral: S.r,
        },
        eu = Object.keys(es),
        ec = {
          brown_blueGreen: y.Z,
          purpleRed_green: v.Z,
          pink_yellowGreen: _.Z,
          purple_orange: x.Z,
          red_blue: w.Z,
          red_grey: k.Z,
          red_yellow_blue: M.Z,
          red_yellow_green: T.Z,
          spectral: S.Z,
        },
        ef = {
          blues: C.r,
          greens: O.r,
          greys: j.r,
          oranges: R.r,
          purples: q.r,
          reds: E.r,
          blue_green: P.r,
          blue_purple: z.r,
          green_blue: A.r,
          orange_red: Z.r,
          purple_blue_green: D.r,
          purple_blue: N.r,
          purple_red: U.r,
          red_purple: F.r,
          yellow_green_blue: L.r,
          yellow_green: W.r,
          yellow_orange_brown: Y.r,
          yellow_orange_red: I.r,
        },
        el = Object.keys(ef),
        ed = {
          blues: C.Z,
          greens: O.Z,
          greys: j.Z,
          oranges: R.Z,
          purples: q.Z,
          reds: E.Z,
          turbo: function (e) {
            return (
              "rgb(" +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    34.61 +
                      (e = Math.max(0, Math.min(1, e))) *
                        (1172.33 -
                          e *
                            (10793.56 -
                              e * (33300.12 - e * (38394.49 - 14825.05 * e))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    23.31 +
                      e *
                        (557.33 +
                          e *
                            (1225.33 -
                              e * (3574.96 - e * (1073.77 + 707.56 * e))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    27.2 +
                      e *
                        (3211.1 -
                          e *
                            (15327.97 -
                              e * (27814 - e * (22569.18 - 6838.66 * e))))
                  )
                )
              ) +
              ")"
            );
          },
          viridis: B.ZP,
          inferno: B.yy,
          magma: B.uX,
          plasma: B.zD,
          cividis: function (e) {
            return (
              "rgb(" +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    -4.54 -
                      (e = Math.max(0, Math.min(1, e))) *
                        (35.34 -
                          e *
                            (2381.73 -
                              e * (6402.7 - e * (7024.72 - 2710.57 * e))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    32.49 +
                      e *
                        (170.73 +
                          e * (52.82 - e * (131.46 - e * (176.58 - 67.37 * e))))
                  )
                )
              ) +
              ", " +
              Math.max(
                0,
                Math.min(
                  255,
                  Math.round(
                    81.24 +
                      e *
                        (442.36 -
                          e *
                            (2482.43 -
                              e * (6167.24 - e * (6614.94 - 2475.67 * e))))
                  )
                )
              ) +
              ")"
            );
          },
          warm: H.s7,
          cool: H.H7,
          cubehelixDefault: V.Z,
          blue_green: P.Z,
          blue_purple: z.Z,
          green_blue: A.Z,
          orange_red: Z.Z,
          purple_blue_green: D.Z,
          purple_blue: N.Z,
          purple_red: U.Z,
          red_purple: F.Z,
          yellow_green_blue: L.Z,
          yellow_green: W.Z,
          yellow_orange_brown: Y.Z,
          yellow_orange_red: I.Z,
        },
        eh = er({}, eo, es, ef),
        ep = Object.keys(eh),
        eg = { rainbow: H.ZP, sinebow: $.Z },
        eb =
          (Object.keys(er({}, ec, ed, eg)),
          function (e, t) {
            if ("function" == typeof e) return e;
            if (X()(e)) {
              if (void 0 !== e.theme) {
                if (void 0 === t)
                  throw Error(
                    "Unable to use color from theme as no theme was provided"
                  );
                var n = J()(t, e.theme);
                if (void 0 === n)
                  throw Error(
                    "Color from theme is undefined at path: '" + e.theme + "'"
                  );
                return function () {
                  return n;
                };
              }
              if (void 0 !== e.from) {
                var r = function (t) {
                  return J()(t, e.from);
                };
                if (Array.isArray(e.modifiers)) {
                  for (
                    var i,
                      o = [],
                      a = (function (e, t) {
                        var n =
                          ("undefined" != typeof Symbol &&
                            e[Symbol.iterator]) ||
                          e["@@iterator"];
                        if (n) return (n = n.call(e)).next.bind(n);
                        if (
                          Array.isArray(e) ||
                          (n = (function (e, t) {
                            if (e) {
                              if ("string" == typeof e) return ei(e, t);
                              var n = Object.prototype.toString
                                .call(e)
                                .slice(8, -1);
                              return (
                                "Object" === n &&
                                  e.constructor &&
                                  (n = e.constructor.name),
                                "Map" === n || "Set" === n
                                  ? Array.from(e)
                                  : "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n
                                    )
                                  ? ei(e, t)
                                  : void 0
                              );
                            }
                          })(e))
                        ) {
                          n && (e = n);
                          var r = 0;
                          return function () {
                            return r >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[r++] };
                          };
                        }
                        throw TypeError(
                          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })(e.modifiers);
                    !(i = a()).done;

                  )
                    !(function () {
                      var e = i.value,
                        t = e[0],
                        n = e[1];
                      if ("brighter" === t)
                        o.push(function (e) {
                          return e.brighter(n);
                        });
                      else if ("darker" === t)
                        o.push(function (e) {
                          return e.darker(n);
                        });
                      else {
                        if ("opacity" !== t)
                          throw Error(
                            "Invalid color modifier: '" +
                              t +
                              "', must be one of: 'brighter', 'darker', 'opacity'"
                          );
                        o.push(function (e) {
                          return (e.opacity = n), e;
                        });
                      }
                    })();
                  return 0 === o.length
                    ? r
                    : function (e) {
                        return o
                          .reduce(function (e, t) {
                            return t(e);
                          }, (0, K.B8)(r(e)))
                          .toString();
                      };
                }
                return r;
              }
              throw Error(
                "Invalid color spec, you should either specify 'theme' or 'from' when using a config object"
              );
            }
            return function () {
              return e;
            };
          }),
        em = function (e, t) {
          return (0, s.useMemo)(
            function () {
              return eb(e, t);
            },
            [e, t]
          );
        },
        ey = et().oneOfType([
          et().func,
          et().arrayOf(et().string),
          et().shape({ scheme: et().oneOf(ep).isRequired, size: et().number }),
          et().shape({ datum: et().string.isRequired }),
          et().string,
        ]),
        ev =
          (et().oneOfType([
            et().string,
            et().func,
            et().shape({ theme: et().string.isRequired }),
            et().shape({
              from: et().string.isRequired,
              modifiers: et().arrayOf(et().array),
            }),
          ]),
          function (e, t) {
            if ("function" == typeof e) return e;
            var n =
              "function" == typeof t
                ? t
                : function (e) {
                    return J()(e, t);
                  };
            if (Array.isArray(e)) {
              var r = (0, en.Z)(e),
                i = function (e) {
                  return r(n(e));
                };
              return (i.scale = r), i;
            }
            if (X()(e)) {
              if (void 0 !== e.datum)
                return function (t) {
                  return J()(t, e.datum);
                };
              if (void 0 !== e.scheme) {
                if (((o = e.scheme), ea.includes(o))) {
                  var o,
                    a,
                    s,
                    u = (0, en.Z)(eh[e.scheme]),
                    c = function (e) {
                      return u(n(e));
                    };
                  return (c.scale = u), c;
                }
                if (((a = e.scheme), eu.includes(a))) {
                  if (void 0 !== e.size && (e.size < 3 || e.size > 11))
                    throw Error(
                      "Invalid size '" +
                        e.size +
                        "' for diverging color scheme '" +
                        e.scheme +
                        "', must be between 3~11"
                    );
                  var f = (0, en.Z)(eh[e.scheme][e.size || 11]),
                    l = function (e) {
                      return f(n(e));
                    };
                  return (l.scale = f), l;
                }
                if (((s = e.scheme), el.includes(s))) {
                  if (void 0 !== e.size && (e.size < 3 || e.size > 9))
                    throw Error(
                      "Invalid size '" +
                        e.size +
                        "' for sequential color scheme '" +
                        e.scheme +
                        "', must be between 3~9"
                    );
                  var d = (0, en.Z)(eh[e.scheme][e.size || 9]),
                    h = function (e) {
                      return d(n(e));
                    };
                  return (h.scale = d), h;
                }
              }
              throw Error(
                "Invalid colors, when using an object, you should either pass a 'datum' or a 'scheme' property"
              );
            }
            return function () {
              return e;
            };
          }),
        e_ = n(75868),
        ex = n(81488),
        ew = n(82582),
        ek = n(75652),
        eM = n.n(ek),
        eT = n(84636),
        eS = n.n(eT),
        eC = n(829),
        eO = n.n(eC),
        ej = n(56974),
        eR = n.n(ej),
        eq = n(17318),
        eE = n.n(eq),
        eP = Math.sqrt(50),
        ez = Math.sqrt(10),
        eA = Math.sqrt(2);
      function eZ(e, t, n) {
        var r,
          i,
          o,
          a,
          s = -1;
        if (((n = +n), (e = +e) == (t = +t) && n > 0)) return [e];
        if (
          ((r = t < e) && ((i = e), (e = t), (t = i)),
          0 === (a = eD(e, t, n)) || !isFinite(a))
        )
          return [];
        if (a > 0) {
          let n = Math.round(e / a),
            r = Math.round(t / a);
          for (
            n * a < e && ++n, r * a > t && --r, o = Array((i = r - n + 1));
            ++s < i;

          )
            o[s] = (n + s) * a;
        } else {
          let n = Math.round(e * (a = -a)),
            r = Math.round(t * a);
          for (
            n / a < e && ++n, r / a > t && --r, o = Array((i = r - n + 1));
            ++s < i;

          )
            o[s] = (n + s) / a;
        }
        return r && o.reverse(), o;
      }
      function eD(e, t, n) {
        var r = (t - e) / Math.max(0, n),
          i = Math.floor(Math.log(r) / Math.LN10),
          o = r / Math.pow(10, i);
        return i >= 0
          ? (o >= eP ? 10 : o >= ez ? 5 : o >= eA ? 2 : 1) * Math.pow(10, i)
          : -Math.pow(10, -i) / (o >= eP ? 10 : o >= ez ? 5 : o >= eA ? 2 : 1);
      }
      function eN(e, t, n) {
        var r = Math.abs(t - e) / Math.max(0, n),
          i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
          o = r / i;
        return (
          o >= eP ? (i *= 10) : o >= ez ? (i *= 5) : o >= eA && (i *= 2),
          t < e ? -i : i
        );
      }
      function eU(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      function eF(e) {
        let t = e,
          n = e;
        function r(e, t, r, i) {
          for (null == r && (r = 0), null == i && (i = e.length); r < i; ) {
            let o = (r + i) >>> 1;
            0 > n(e[o], t) ? (r = o + 1) : (i = o);
          }
          return r;
        }
        return (
          1 === e.length &&
            ((t = (t, n) => e(t) - n), (n = (t, n) => eU(e(t), n))),
          {
            left: r,
            center: function (e, n, i, o) {
              null == i && (i = 0), null == o && (o = e.length);
              let a = r(e, n, i, o - 1);
              return a > i && t(e[a - 1], n) > -t(e[a], n) ? a - 1 : a;
            },
            right: function (e, t, r, i) {
              for (null == r && (r = 0), null == i && (i = e.length); r < i; ) {
                let o = (r + i) >>> 1;
                n(e[o], t) > 0 ? (i = o) : (r = o + 1);
              }
              return r;
            },
          }
        );
      }
      let eL = eF(eU),
        eW = eL.right;
      function eY(e, t, n, r, i) {
        var o = e * e,
          a = o * e;
        return (
          ((1 - 3 * e + 3 * o - a) * t +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * e + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      eL.left,
        eF(function (e) {
          return null === e ? NaN : +e;
        }).center;
      var eI = (e) => () => e;
      function eB(e, t) {
        var n = t - e;
        return n
          ? function (t) {
              return e + t * n;
            }
          : eI(isNaN(e) ? t : e);
      }
      var eH = (function e(t) {
        var n,
          r =
            1 == (n = +(n = t))
              ? eB
              : function (e, t) {
                  var r, i, o;
                  return t - e
                    ? ((r = e),
                      (i = t),
                      (r = Math.pow(r, (o = n))),
                      (i = Math.pow(i, o) - r),
                      (o = 1 / o),
                      function (e) {
                        return Math.pow(r + e * i, o);
                      })
                    : eI(isNaN(e) ? t : e);
                };
        function i(e, t) {
          var n = r((e = (0, K.B8)(e)).r, (t = (0, K.B8)(t)).r),
            i = r(e.g, t.g),
            o = r(e.b, t.b),
            a = eB(e.opacity, t.opacity);
          return function (t) {
            return (
              (e.r = n(t)),
              (e.g = i(t)),
              (e.b = o(t)),
              (e.opacity = a(t)),
              e + ""
            );
          };
        }
        return (i.gamma = e), i;
      })(1);
      function eV(e) {
        return function (t) {
          var n,
            r,
            i = t.length,
            o = Array(i),
            a = Array(i),
            s = Array(i);
          for (n = 0; n < i; ++n)
            (r = (0, K.B8)(t[n])),
              (o[n] = r.r || 0),
              (a[n] = r.g || 0),
              (s[n] = r.b || 0);
          return (
            (o = e(o)),
            (a = e(a)),
            (s = e(s)),
            (r.opacity = 1),
            function (e) {
              return (r.r = o(e)), (r.g = a(e)), (r.b = s(e)), r + "";
            }
          );
        };
      }
      function e$(e, t) {
        return (
          (e = +e),
          (t = +t),
          function (n) {
            return e * (1 - n) + t * n;
          }
        );
      }
      eV(function (e) {
        var t = e.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
            i = e[r],
            o = e[r + 1],
            a = r > 0 ? e[r - 1] : 2 * i - o,
            s = r < t - 1 ? e[r + 2] : 2 * o - i;
          return eY((n - r / t) * t, a, i, o, s);
        };
      }),
        eV(function (e) {
          var t = e.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
              i = e[(r + t - 1) % t],
              o = e[r % t],
              a = e[(r + 1) % t],
              s = e[(r + 2) % t];
            return eY((n - r / t) * t, i, o, a, s);
          };
        });
      var eG = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        eX = RegExp(eG.source, "g");
      function eQ(e, t) {
        return (
          (e = +e),
          (t = +t),
          function (n) {
            return Math.round(e * (1 - n) + t * n);
          }
        );
      }
      function eJ(e) {
        return +e;
      }
      var eK = [0, 1];
      function e0(e) {
        return e;
      }
      function e1(e, t) {
        var n;
        return (t -= e = +e)
          ? function (n) {
              return (n - e) / t;
            }
          : ((n = isNaN(t) ? NaN : 0.5),
            function () {
              return n;
            });
      }
      function e2(e, t, n) {
        var r = e[0],
          i = e[1],
          o = t[0],
          a = t[1];
        return (
          i < r
            ? ((r = e1(i, r)), (o = n(a, o)))
            : ((r = e1(r, i)), (o = n(o, a))),
          function (e) {
            return o(r(e));
          }
        );
      }
      function e3(e, t, n) {
        var r = Math.min(e.length, t.length) - 1,
          i = Array(r),
          o = Array(r),
          a = -1;
        for (
          e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
          ++a < r;

        )
          (i[a] = e1(e[a], e[a + 1])), (o[a] = n(t[a], t[a + 1]));
        return function (t) {
          var n = eW(e, t, 1, r) - 1;
          return o[n](i[n](t));
        };
      }
      function e6(e, t) {
        return t
          .domain(e.domain())
          .range(e.range())
          .interpolate(e.interpolate())
          .clamp(e.clamp())
          .unknown(e.unknown());
      }
      function e5() {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = eK,
          s = eK,
          u = function e(t, n) {
            var r,
              i,
              o = typeof n;
            return null == n || "boolean" === o
              ? eI(n)
              : ("number" === o
                  ? e$
                  : "string" === o
                  ? (i = (0, K.ZP)(n))
                    ? ((n = i), eH)
                    : function (e, t) {
                        var n,
                          r,
                          i,
                          o,
                          a,
                          s = (eG.lastIndex = eX.lastIndex = 0),
                          u = -1,
                          c = [],
                          f = [];
                        for (
                          e += "", t += "";
                          (i = eG.exec(e)) && (o = eX.exec(t));

                        )
                          (a = o.index) > s &&
                            ((a = t.slice(s, a)),
                            c[u] ? (c[u] += a) : (c[++u] = a)),
                            (i = i[0]) === (o = o[0])
                              ? c[u]
                                ? (c[u] += o)
                                : (c[++u] = o)
                              : ((c[++u] = null),
                                f.push({ i: u, x: e$(i, o) })),
                            (s = eX.lastIndex);
                        return (
                          s < t.length &&
                            ((a = t.slice(s)),
                            c[u] ? (c[u] += a) : (c[++u] = a)),
                          c.length < 2
                            ? f[0]
                              ? ((n = f[0].x),
                                function (e) {
                                  return n(e) + "";
                                })
                              : ((r = t),
                                function () {
                                  return r;
                                })
                            : ((t = f.length),
                              function (e) {
                                for (var n, r = 0; r < t; ++r)
                                  c[(n = f[r]).i] = n.x(e);
                                return c.join("");
                              })
                        );
                      }
                  : n instanceof K.ZP
                  ? eH
                  : n instanceof Date
                  ? function (e, t) {
                      var n = new Date();
                      return (
                        (e = +e),
                        (t = +t),
                        function (r) {
                          return n.setTime(e * (1 - r) + t * r), n;
                        }
                      );
                    }
                  : ((r = n), !ArrayBuffer.isView(r) || r instanceof DataView)
                  ? Array.isArray(n)
                    ? function (t, n) {
                        var r,
                          i = n ? n.length : 0,
                          o = t ? Math.min(i, t.length) : 0,
                          a = Array(o),
                          s = Array(i);
                        for (r = 0; r < o; ++r) a[r] = e(t[r], n[r]);
                        for (; r < i; ++r) s[r] = n[r];
                        return function (e) {
                          for (r = 0; r < o; ++r) s[r] = a[r](e);
                          return s;
                        };
                      }
                    : ("function" != typeof n.valueOf &&
                        "function" != typeof n.toString) ||
                      isNaN(n)
                    ? function (t, n) {
                        var r,
                          i = {},
                          o = {};
                        for (r in ((null === t || "object" != typeof t) &&
                          (t = {}),
                        (null === n || "object" != typeof n) && (n = {}),
                        n))
                          r in t ? (i[r] = e(t[r], n[r])) : (o[r] = n[r]);
                        return function (e) {
                          for (r in i) o[r] = i[r](e);
                          return o;
                        };
                      }
                    : e$
                  : function (e, t) {
                      t || (t = []);
                      var n,
                        r = e ? Math.min(t.length, e.length) : 0,
                        i = t.slice();
                      return function (o) {
                        for (n = 0; n < r; ++n)
                          i[n] = e[n] * (1 - o) + t[n] * o;
                        return i;
                      };
                    })(t, n);
          },
          c = e0;
        function f() {
          var e,
            t,
            n,
            u = Math.min(a.length, s.length);
          return (
            c !== e0 &&
              ((e = a[0]),
              (t = a[u - 1]),
              e > t && ((n = e), (e = t), (t = n)),
              (c = function (n) {
                return Math.max(e, Math.min(t, n));
              })),
            (r = u > 2 ? e3 : e2),
            (i = o = null),
            l
          );
        }
        function l(t) {
          return null == t || isNaN((t = +t))
            ? n
            : (i || (i = r(a.map(e), s, u)))(e(c(t)));
        }
        return (
          (l.invert = function (n) {
            return c(t((o || (o = r(s, a.map(e), e$)))(n)));
          }),
          (l.domain = function (e) {
            return arguments.length
              ? ((a = Array.from(e, eJ)), f())
              : a.slice();
          }),
          (l.range = function (e) {
            return arguments.length ? ((s = Array.from(e)), f()) : s.slice();
          }),
          (l.rangeRound = function (e) {
            return (s = Array.from(e)), (u = eQ), f();
          }),
          (l.clamp = function (e) {
            return arguments.length ? ((c = !!e || e0), f()) : c !== e0;
          }),
          (l.interpolate = function (e) {
            return arguments.length ? ((u = e), f()) : u;
          }),
          (l.unknown = function (e) {
            return arguments.length ? ((n = e), l) : n;
          }),
          function (n, r) {
            return (e = n), (t = r), f();
          }
        );
      }
      var e8 = n(22274),
        e7 =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function e4(e) {
        var t;
        if (!(t = e7.exec(e))) throw Error("invalid format: " + e);
        return new e9({
          fill: t[1],
          align: t[2],
          sign: t[3],
          symbol: t[4],
          zero: t[5],
          width: t[6],
          comma: t[7],
          precision: t[8] && t[8].slice(1),
          trim: t[9],
          type: t[10],
        });
      }
      function e9(e) {
        (this.fill = void 0 === e.fill ? " " : e.fill + ""),
          (this.align = void 0 === e.align ? ">" : e.align + ""),
          (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
          (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
          (this.zero = !!e.zero),
          (this.width = void 0 === e.width ? void 0 : +e.width),
          (this.comma = !!e.comma),
          (this.precision = void 0 === e.precision ? void 0 : +e.precision),
          (this.trim = !!e.trim),
          (this.type = void 0 === e.type ? "" : e.type + "");
      }
      function te(e, t) {
        if (
          (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var n,
          r = e.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
      }
      function tt(e) {
        return (e = te(Math.abs(e))) ? e[1] : NaN;
      }
      function tn(e, t) {
        var n = te(e, t);
        if (!n) return e + "";
        var r = n[0],
          i = n[1];
        return i < 0
          ? "0." + Array(-i).join("0") + r
          : r.length > i + 1
          ? r.slice(0, i + 1) + "." + r.slice(i + 1)
          : r + Array(i - r.length + 2).join("0");
      }
      (e4.prototype = e9.prototype),
        (e9.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      var tr = {
        "%": (e, t) => (100 * e).toFixed(t),
        b: (e) => Math.round(e).toString(2),
        c: (e) => e + "",
        d: function (e) {
          return Math.abs((e = Math.round(e))) >= 1e21
            ? e.toLocaleString("en").replace(/,/g, "")
            : e.toString(10);
        },
        e: (e, t) => e.toExponential(t),
        f: (e, t) => e.toFixed(t),
        g: (e, t) => e.toPrecision(t),
        o: (e) => Math.round(e).toString(8),
        p: (e, t) => tn(100 * e, t),
        r: tn,
        s: function (e, t) {
          var n = te(e, t);
          if (!n) return e + "";
          var i = n[0],
            o = n[1],
            a = o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            s = i.length;
          return a === s
            ? i
            : a > s
            ? i + Array(a - s + 1).join("0")
            : a > 0
            ? i.slice(0, a) + "." + i.slice(a)
            : "0." + Array(1 - a).join("0") + te(e, Math.max(0, t + a - 1))[0];
        },
        X: (e) => Math.round(e).toString(16).toUpperCase(),
        x: (e) => Math.round(e).toString(16),
      };
      function ti(e) {
        return e;
      }
      var to = Array.prototype.map,
        ta = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function ts(e) {
        var t = e.domain;
        return (
          (e.ticks = function (e) {
            var n = t();
            return eZ(n[0], n[n.length - 1], null == e ? 10 : e);
          }),
          (e.tickFormat = function (e, n) {
            var r = t();
            return (function (e, t, n, r) {
              var i,
                s,
                u = eN(e, t, n);
              switch ((r = e4(null == r ? ",f" : r)).type) {
                case "s":
                  var c = Math.max(Math.abs(e), Math.abs(t));
                  return (
                    null != r.precision ||
                      isNaN(
                        (s = Math.max(
                          0,
                          3 * Math.max(-8, Math.min(8, Math.floor(tt(c) / 3))) -
                            tt(Math.abs(u))
                        ))
                      ) ||
                      (r.precision = s),
                    a(r, c)
                  );
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                  null != r.precision ||
                    isNaN(
                      (s =
                        Math.max(
                          0,
                          tt(
                            Math.abs(Math.max(Math.abs(e), Math.abs(t))) -
                              (i = Math.abs((i = u)))
                          ) - tt(i)
                        ) + 1)
                    ) ||
                    (r.precision = s - ("e" === r.type));
                  break;
                case "f":
                case "%":
                  null != r.precision ||
                    isNaN((s = Math.max(0, -tt(Math.abs(u))))) ||
                    (r.precision = s - ("%" === r.type) * 2);
              }
              return o(r);
            })(r[0], r[r.length - 1], null == e ? 10 : e, n);
          }),
          (e.nice = function (n) {
            null == n && (n = 10);
            var r,
              i,
              o = t(),
              a = 0,
              s = o.length - 1,
              u = o[a],
              c = o[s],
              f = 10;
            for (
              c < u && ((i = u), (u = c), (c = i), (i = a), (a = s), (s = i));
              f-- > 0;

            ) {
              if ((i = eD(u, c, n)) === r) return (o[a] = u), (o[s] = c), t(o);
              if (i > 0)
                (u = Math.floor(u / i) * i), (c = Math.ceil(c / i) * i);
              else if (i < 0)
                (u = Math.ceil(u * i) / i), (c = Math.floor(c * i) / i);
              else break;
              r = i;
            }
            return e;
          }),
          e
        );
      }
      function tu() {
        var e,
          t,
          n = (0, en.Z)().unknown(void 0),
          r = n.domain,
          i = n.range,
          o = 0,
          a = 1,
          s = !1,
          u = 0,
          c = 0,
          f = 0.5;
        function l() {
          var n = r().length,
            l = a < o,
            d = l ? a : o,
            h = l ? o : a;
          (e = (h - d) / Math.max(1, n - u + 2 * c)),
            s && (e = Math.floor(e)),
            (d += (h - d - e * (n - u)) * f),
            (t = e * (1 - u)),
            s && ((d = Math.round(d)), (t = Math.round(t)));
          var p = (function (e, t, n) {
            (e = +e),
              (t = +t),
              (n =
                (i = arguments.length) < 2
                  ? ((t = e), (e = 0), 1)
                  : i < 3
                  ? 1
                  : +n);
            for (
              var r = -1,
                i = 0 | Math.max(0, Math.ceil((t - e) / n)),
                o = Array(i);
              ++r < i;

            )
              o[r] = e + r * n;
            return o;
          })(n).map(function (t) {
            return d + e * t;
          });
          return i(l ? p.reverse() : p);
        }
        return (
          delete n.unknown,
          (n.domain = function (e) {
            return arguments.length ? (r(e), l()) : r();
          }),
          (n.range = function (e) {
            return arguments.length
              ? (([o, a] = e), (o = +o), (a = +a), l())
              : [o, a];
          }),
          (n.rangeRound = function (e) {
            return ([o, a] = e), (o = +o), (a = +a), (s = !0), l();
          }),
          (n.bandwidth = function () {
            return t;
          }),
          (n.step = function () {
            return e;
          }),
          (n.round = function (e) {
            return arguments.length ? ((s = !!e), l()) : s;
          }),
          (n.padding = function (e) {
            return arguments.length ? ((u = Math.min(1, (c = +e))), l()) : u;
          }),
          (n.paddingInner = function (e) {
            return arguments.length ? ((u = Math.min(1, e)), l()) : u;
          }),
          (n.paddingOuter = function (e) {
            return arguments.length ? ((c = +e), l()) : c;
          }),
          (n.align = function (e) {
            return arguments.length
              ? ((f = Math.max(0, Math.min(1, e))), l())
              : f;
          }),
          (n.copy = function () {
            return tu(r(), [o, a])
              .round(s)
              .paddingInner(u)
              .paddingOuter(c)
              .align(f);
          }),
          e8.o.apply(l(), arguments)
        );
      }
      (o = (i = (function (e) {
        var t,
          n,
          i,
          o =
            void 0 === e.grouping || void 0 === e.thousands
              ? ti
              : ((t = to.call(e.grouping, Number)),
                (n = e.thousands + ""),
                function (e, r) {
                  for (
                    var i = e.length, o = [], a = 0, s = t[0], u = 0;
                    i > 0 &&
                    s > 0 &&
                    (u + s + 1 > r && (s = Math.max(1, r - u)),
                    o.push(e.substring((i -= s), i + s)),
                    !((u += s + 1) > r));

                  )
                    s = t[(a = (a + 1) % t.length)];
                  return o.reverse().join(n);
                }),
          a = void 0 === e.currency ? "" : e.currency[0] + "",
          s = void 0 === e.currency ? "" : e.currency[1] + "",
          u = void 0 === e.decimal ? "." : e.decimal + "",
          c =
            void 0 === e.numerals
              ? ti
              : ((i = to.call(e.numerals, String)),
                function (e) {
                  return e.replace(/[0-9]/g, function (e) {
                    return i[+e];
                  });
                }),
          f = void 0 === e.percent ? "%" : e.percent + "",
          l = void 0 === e.minus ? "−" : e.minus + "",
          d = void 0 === e.nan ? "NaN" : e.nan + "";
        function h(e) {
          var t = (e = e4(e)).fill,
            n = e.align,
            i = e.sign,
            h = e.symbol,
            p = e.zero,
            g = e.width,
            b = e.comma,
            m = e.precision,
            y = e.trim,
            v = e.type;
          "n" === v
            ? ((b = !0), (v = "g"))
            : tr[v] || (void 0 === m && (m = 12), (y = !0), (v = "g")),
            (p || ("0" === t && "=" === n)) && ((p = !0), (t = "0"), (n = "="));
          var _ =
              "$" === h
                ? a
                : "#" === h && /[boxX]/.test(v)
                ? "0" + v.toLowerCase()
                : "",
            x = "$" === h ? s : /[%p]/.test(v) ? f : "",
            w = tr[v],
            k = /[defgprs%]/.test(v);
          function M(e) {
            var a,
              s,
              f,
              h = _,
              M = x;
            if ("c" === v) (M = w(e) + M), (e = "");
            else {
              var T = (e = +e) < 0 || 1 / e < 0;
              if (
                ((e = isNaN(e) ? d : w(Math.abs(e), m)),
                y &&
                  (e = (function (e) {
                    e: for (var t, n = e.length, r = 1, i = -1; r < n; ++r)
                      switch (e[r]) {
                        case ".":
                          i = t = r;
                          break;
                        case "0":
                          0 === i && (i = r), (t = r);
                          break;
                        default:
                          if (!+e[r]) break e;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? e.slice(0, i) + e.slice(t + 1) : e;
                  })(e)),
                T && 0 == +e && "+" !== i && (T = !1),
                (h =
                  (T ? ("(" === i ? i : l) : "-" === i || "(" === i ? "" : i) +
                  h),
                (M =
                  ("s" === v ? ta[8 + r / 3] : "") +
                  M +
                  (T && "(" === i ? ")" : "")),
                k)
              ) {
                for (a = -1, s = e.length; ++a < s; )
                  if (48 > (f = e.charCodeAt(a)) || f > 57) {
                    (M = (46 === f ? u + e.slice(a + 1) : e.slice(a)) + M),
                      (e = e.slice(0, a));
                    break;
                  }
              }
            }
            b && !p && (e = o(e, 1 / 0));
            var S = h.length + e.length + M.length,
              C = S < g ? Array(g - S + 1).join(t) : "";
            switch (
              (b &&
                p &&
                ((e = o(C + e, C.length ? g - M.length : 1 / 0)), (C = "")),
              n)
            ) {
              case "<":
                e = h + e + M + C;
                break;
              case "=":
                e = h + C + e + M;
                break;
              case "^":
                e = C.slice(0, (S = C.length >> 1)) + h + e + M + C.slice(S);
                break;
              default:
                e = C + h + e + M;
            }
            return c(e);
          }
          return (
            (m =
              void 0 === m
                ? 6
                : /[gprs]/.test(v)
                ? Math.max(1, Math.min(21, m))
                : Math.max(0, Math.min(20, m))),
            (M.toString = function () {
              return e + "";
            }),
            M
          );
        }
        return {
          format: h,
          formatPrefix: function (e, t) {
            var n = h((((e = e4(e)).type = "f"), e)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(tt(t) / 3))),
              i = Math.pow(10, -r),
              o = ta[8 + r / 3];
            return function (e) {
              return n(i * e) + o;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
        (a = i.formatPrefix);
      var tc = new Date(),
        tf = new Date();
      function tl(e, t, n, r) {
        function i(t) {
          return e((t = 0 == arguments.length ? new Date() : new Date(+t))), t;
        }
        return (
          (i.floor = function (t) {
            return e((t = new Date(+t))), t;
          }),
          (i.ceil = function (n) {
            return e((n = new Date(n - 1))), t(n, 1), e(n), n;
          }),
          (i.round = function (e) {
            var t = i(e),
              n = i.ceil(e);
            return e - t < n - e ? t : n;
          }),
          (i.offset = function (e, n) {
            return t((e = new Date(+e)), null == n ? 1 : Math.floor(n)), e;
          }),
          (i.range = function (n, r, o) {
            var a,
              s = [];
            if (
              ((n = i.ceil(n)),
              (o = null == o ? 1 : Math.floor(o)),
              !(n < r) || !(o > 0))
            )
              return s;
            do s.push((a = new Date(+n))), t(n, o), e(n);
            while (a < n && n < r);
            return s;
          }),
          (i.filter = function (n) {
            return tl(
              function (t) {
                if (t >= t) for (; e(t), !n(t); ) t.setTime(t - 1);
              },
              function (e, r) {
                if (e >= e) {
                  if (r < 0) for (; ++r <= 0; ) for (; t(e, -1), !n(e); );
                  else for (; --r >= 0; ) for (; t(e, 1), !n(e); );
                }
              }
            );
          }),
          n &&
            ((i.count = function (t, r) {
              return (
                tc.setTime(+t),
                tf.setTime(+r),
                e(tc),
                e(tf),
                Math.floor(n(tc, tf))
              );
            }),
            (i.every = function (e) {
              return isFinite((e = Math.floor(e))) && e > 0
                ? e > 1
                  ? i.filter(
                      r
                        ? function (t) {
                            return r(t) % e == 0;
                          }
                        : function (t) {
                            return i.count(0, t) % e == 0;
                          }
                    )
                  : i
                : null;
            })),
          i
        );
      }
      var td = tl(
        function () {},
        function (e, t) {
          e.setTime(+e + t);
        },
        function (e, t) {
          return t - e;
        }
      );
      (td.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? e > 1
            ? tl(
                function (t) {
                  t.setTime(Math.floor(t / e) * e);
                },
                function (t, n) {
                  t.setTime(+t + n * e);
                },
                function (t, n) {
                  return (n - t) / e;
                }
              )
            : td
          : null;
      }),
        td.range;
      var th = tl(
        function (e) {
          e.setTime(e - e.getMilliseconds());
        },
        function (e, t) {
          e.setTime(+e + 1e3 * t);
        },
        function (e, t) {
          return (t - e) / 1e3;
        },
        function (e) {
          return e.getUTCSeconds();
        }
      );
      th.range;
      var tp = tl(
        function (e) {
          e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds());
        },
        function (e, t) {
          e.setTime(+e + 6e4 * t);
        },
        function (e, t) {
          return (t - e) / 6e4;
        },
        function (e) {
          return e.getMinutes();
        }
      );
      tp.range;
      var tg = tl(
        function (e) {
          e.setTime(
            e -
              e.getMilliseconds() -
              1e3 * e.getSeconds() -
              6e4 * e.getMinutes()
          );
        },
        function (e, t) {
          e.setTime(+e + 36e5 * t);
        },
        function (e, t) {
          return (t - e) / 36e5;
        },
        function (e) {
          return e.getHours();
        }
      );
      tg.range;
      var tb = tl(
        (e) => e.setHours(0, 0, 0, 0),
        (e, t) => e.setDate(e.getDate() + t),
        (e, t) =>
          (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) /
          864e5,
        (e) => e.getDate() - 1
      );
      function tm(e) {
        return tl(
          function (t) {
            t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
              t.setHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setDate(e.getDate() + 7 * t);
          },
          function (e, t) {
            return (
              (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) /
              6048e5
            );
          }
        );
      }
      tb.range;
      var ty = tm(0),
        tv = tm(1),
        t_ = tm(2),
        tx = tm(3),
        tw = tm(4),
        tk = tm(5),
        tM = tm(6);
      ty.range, tv.range, t_.range, tx.range, tw.range, tk.range, tM.range;
      var tT = tl(
        function (e) {
          e.setDate(1), e.setHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setMonth(e.getMonth() + t);
        },
        function (e, t) {
          return (
            t.getMonth() -
            e.getMonth() +
            (t.getFullYear() - e.getFullYear()) * 12
          );
        },
        function (e) {
          return e.getMonth();
        }
      );
      tT.range;
      var tS = tl(
        function (e) {
          e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setFullYear(e.getFullYear() + t);
        },
        function (e, t) {
          return t.getFullYear() - e.getFullYear();
        },
        function (e) {
          return e.getFullYear();
        }
      );
      (tS.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? tl(
              function (t) {
                t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                  t.setMonth(0, 1),
                  t.setHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setFullYear(t.getFullYear() + n * e);
              }
            )
          : null;
      }),
        tS.range;
      var tC = tl(
        function (e) {
          e.setUTCSeconds(0, 0);
        },
        function (e, t) {
          e.setTime(+e + 6e4 * t);
        },
        function (e, t) {
          return (t - e) / 6e4;
        },
        function (e) {
          return e.getUTCMinutes();
        }
      );
      tC.range;
      var tO = tl(
        function (e) {
          e.setUTCMinutes(0, 0, 0);
        },
        function (e, t) {
          e.setTime(+e + 36e5 * t);
        },
        function (e, t) {
          return (t - e) / 36e5;
        },
        function (e) {
          return e.getUTCHours();
        }
      );
      tO.range;
      var tj = tl(
        function (e) {
          e.setUTCHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setUTCDate(e.getUTCDate() + t);
        },
        function (e, t) {
          return (t - e) / 864e5;
        },
        function (e) {
          return e.getUTCDate() - 1;
        }
      );
      function tR(e) {
        return tl(
          function (t) {
            t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
              t.setUTCHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setUTCDate(e.getUTCDate() + 7 * t);
          },
          function (e, t) {
            return (t - e) / 6048e5;
          }
        );
      }
      tj.range;
      var tq = tR(0),
        tE = tR(1),
        tP = tR(2),
        tz = tR(3),
        tA = tR(4),
        tZ = tR(5),
        tD = tR(6);
      tq.range, tE.range, tP.range, tz.range, tA.range, tZ.range, tD.range;
      var tN = tl(
        function (e) {
          e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setUTCMonth(e.getUTCMonth() + t);
        },
        function (e, t) {
          return (
            t.getUTCMonth() -
            e.getUTCMonth() +
            (t.getUTCFullYear() - e.getUTCFullYear()) * 12
          );
        },
        function (e) {
          return e.getUTCMonth();
        }
      );
      tN.range;
      var tU = tl(
        function (e) {
          e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setUTCFullYear(e.getUTCFullYear() + t);
        },
        function (e, t) {
          return t.getUTCFullYear() - e.getUTCFullYear();
        },
        function (e) {
          return e.getUTCFullYear();
        }
      );
      function tF(e, t, n, r, i, o) {
        let a = [
          [th, 1, 1e3],
          [th, 5, 5e3],
          [th, 15, 15e3],
          [th, 30, 3e4],
          [o, 1, 6e4],
          [o, 5, 3e5],
          [o, 15, 9e5],
          [o, 30, 18e5],
          [i, 1, 36e5],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [r, 1, 864e5],
          [r, 2, 1728e5],
          [n, 1, 6048e5],
          [t, 1, 2592e6],
          [t, 3, 7776e6],
          [e, 1, 31536e6],
        ];
        function s(t, n, r) {
          let i = Math.abs(n - t) / r,
            o = eF(([, , e]) => e).right(a, i);
          if (o === a.length) return e.every(eN(t / 31536e6, n / 31536e6, r));
          if (0 === o) return td.every(Math.max(eN(t, n, r), 1));
          let [s, u] = a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o];
          return s.every(u);
        }
        return [
          function (e, t, n) {
            let r = t < e;
            r && ([e, t] = [t, e]);
            let i = n && "function" == typeof n.range ? n : s(e, t, n),
              o = i ? i.range(e, +t + 1) : [];
            return r ? o.reverse() : o;
          },
          s,
        ];
      }
      (tU.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? tl(
              function (t) {
                t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                  t.setUTCMonth(0, 1),
                  t.setUTCHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n * e);
              }
            )
          : null;
      }),
        tU.range;
      let [tL, tW] = tF(tU, tN, tq, tj, tO, tC),
        [tY, tI] = tF(tS, tT, ty, tb, tg, tp);
      function tB(e, t) {
        e = e.slice();
        var n,
          r = 0,
          i = e.length - 1,
          o = e[r],
          a = e[i];
        return (
          a < o && ((n = r), (r = i), (i = n), (n = o), (o = a), (a = n)),
          (e[r] = t.floor(o)),
          (e[i] = t.ceil(a)),
          e
        );
      }
      function tH(e) {
        return new Date(e);
      }
      function tV(e) {
        return e instanceof Date ? +e : +new Date(+e);
      }
      function t$(e, t, n, r, i, o, a, s, u, c) {
        var f = e5()(e0, e0),
          l = f.invert,
          d = f.domain,
          h = c(".%L"),
          p = c(":%S"),
          g = c("%I:%M"),
          b = c("%I %p"),
          m = c("%a %d"),
          y = c("%b %d"),
          v = c("%B"),
          _ = c("%Y");
        function x(e) {
          return (
            u(e) < e
              ? h
              : s(e) < e
              ? p
              : a(e) < e
              ? g
              : o(e) < e
              ? b
              : r(e) < e
              ? i(e) < e
                ? m
                : y
              : n(e) < e
              ? v
              : _
          )(e);
        }
        return (
          (f.invert = function (e) {
            return new Date(l(e));
          }),
          (f.domain = function (e) {
            return arguments.length ? d(Array.from(e, tV)) : d().map(tH);
          }),
          (f.ticks = function (t) {
            var n = d();
            return e(n[0], n[n.length - 1], null == t ? 10 : t);
          }),
          (f.tickFormat = function (e, t) {
            return null == t ? x : c(t);
          }),
          (f.nice = function (e) {
            var n = d();
            return (
              (e && "function" == typeof e.range) ||
                (e = t(n[0], n[n.length - 1], null == e ? 10 : e)),
              e ? d(tB(n, e)) : f
            );
          }),
          (f.copy = function () {
            return e6(f, t$(e, t, n, r, i, o, a, s, u, c));
          }),
          f
        );
      }
      function tG(e) {
        return Math.log(e);
      }
      function tX(e) {
        return Math.exp(e);
      }
      function tQ(e) {
        return -Math.log(-e);
      }
      function tJ(e) {
        return -Math.exp(-e);
      }
      function tK(e) {
        return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
      }
      function t0(e) {
        return function (t) {
          return -e(-t);
        };
      }
      function t1(e) {
        return function (t) {
          return Math.sign(t) * Math.log1p(Math.abs(t / e));
        };
      }
      function t2(e) {
        return function (t) {
          return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
        };
      }
      var t3 = new Date(),
        t6 = new Date();
      function t5(e, t, n, r) {
        function i(t) {
          return e((t = 0 == arguments.length ? new Date() : new Date(+t))), t;
        }
        return (
          (i.floor = function (t) {
            return e((t = new Date(+t))), t;
          }),
          (i.ceil = function (n) {
            return e((n = new Date(n - 1))), t(n, 1), e(n), n;
          }),
          (i.round = function (e) {
            var t = i(e),
              n = i.ceil(e);
            return e - t < n - e ? t : n;
          }),
          (i.offset = function (e, n) {
            return t((e = new Date(+e)), null == n ? 1 : Math.floor(n)), e;
          }),
          (i.range = function (n, r, o) {
            var a,
              s = [];
            if (
              ((n = i.ceil(n)),
              (o = null == o ? 1 : Math.floor(o)),
              !(n < r) || !(o > 0))
            )
              return s;
            do s.push((a = new Date(+n))), t(n, o), e(n);
            while (a < n && n < r);
            return s;
          }),
          (i.filter = function (n) {
            return t5(
              function (t) {
                if (t >= t) for (; e(t), !n(t); ) t.setTime(t - 1);
              },
              function (e, r) {
                if (e >= e) {
                  if (r < 0) for (; ++r <= 0; ) for (; t(e, -1), !n(e); );
                  else for (; --r >= 0; ) for (; t(e, 1), !n(e); );
                }
              }
            );
          }),
          n &&
            ((i.count = function (t, r) {
              return (
                t3.setTime(+t),
                t6.setTime(+r),
                e(t3),
                e(t6),
                Math.floor(n(t3, t6))
              );
            }),
            (i.every = function (e) {
              return isFinite((e = Math.floor(e))) && e > 0
                ? e > 1
                  ? i.filter(
                      r
                        ? function (t) {
                            return r(t) % e == 0;
                          }
                        : function (t) {
                            return i.count(0, t) % e == 0;
                          }
                    )
                  : i
                : null;
            })),
          i
        );
      }
      var t8 = t5(
        function () {},
        function (e, t) {
          e.setTime(+e + t);
        },
        function (e, t) {
          return t - e;
        }
      );
      (t8.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? e > 1
            ? t5(
                function (t) {
                  t.setTime(Math.floor(t / e) * e);
                },
                function (t, n) {
                  t.setTime(+t + n * e);
                },
                function (t, n) {
                  return (n - t) / e;
                }
              )
            : t8
          : null;
      }),
        t8.range;
      var t7 = t5(
        function (e) {
          e.setTime(e - e.getMilliseconds());
        },
        function (e, t) {
          e.setTime(+e + 1e3 * t);
        },
        function (e, t) {
          return (t - e) / 1e3;
        },
        function (e) {
          return e.getUTCSeconds();
        }
      );
      t7.range;
      var t4 = t5(
        function (e) {
          e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds());
        },
        function (e, t) {
          e.setTime(+e + 6e4 * t);
        },
        function (e, t) {
          return (t - e) / 6e4;
        },
        function (e) {
          return e.getMinutes();
        }
      );
      t4.range;
      var t9 = t5(
        function (e) {
          e.setUTCSeconds(0, 0);
        },
        function (e, t) {
          e.setTime(+e + 6e4 * t);
        },
        function (e, t) {
          return (t - e) / 6e4;
        },
        function (e) {
          return e.getUTCMinutes();
        }
      );
      t9.range;
      var ne = t5(
        function (e) {
          e.setTime(
            e -
              e.getMilliseconds() -
              1e3 * e.getSeconds() -
              6e4 * e.getMinutes()
          );
        },
        function (e, t) {
          e.setTime(+e + 36e5 * t);
        },
        function (e, t) {
          return (t - e) / 36e5;
        },
        function (e) {
          return e.getHours();
        }
      );
      ne.range;
      var nt = t5(
        function (e) {
          e.setUTCMinutes(0, 0, 0);
        },
        function (e, t) {
          e.setTime(+e + 36e5 * t);
        },
        function (e, t) {
          return (t - e) / 36e5;
        },
        function (e) {
          return e.getUTCHours();
        }
      );
      function nn(e) {
        return t5(
          function (t) {
            t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
              t.setHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setDate(e.getDate() + 7 * t);
          },
          function (e, t) {
            return (
              (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) /
              6048e5
            );
          }
        );
      }
      nt.range;
      var nr = nn(0),
        ni = nn(1),
        no = nn(2),
        na = nn(3),
        ns = nn(4),
        nu = nn(5),
        nc = nn(6);
      function nf(e) {
        return t5(
          function (t) {
            t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
              t.setUTCHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setUTCDate(e.getUTCDate() + 7 * t);
          },
          function (e, t) {
            return (t - e) / 6048e5;
          }
        );
      }
      nr.range, ni.range, no.range, na.range, ns.range, nu.range, nc.range;
      var nl = nf(0),
        nd = nf(1),
        nh = nf(2),
        np = nf(3),
        ng = nf(4),
        nb = nf(5),
        nm = nf(6);
      nl.range, nd.range, nh.range, np.range, ng.range, nb.range, nm.range;
      var ny = t5(
        function (e) {
          e.setDate(1), e.setHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setMonth(e.getMonth() + t);
        },
        function (e, t) {
          return (
            t.getMonth() -
            e.getMonth() +
            (t.getFullYear() - e.getFullYear()) * 12
          );
        },
        function (e) {
          return e.getMonth();
        }
      );
      ny.range;
      var nv = t5(
        function (e) {
          e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setUTCMonth(e.getUTCMonth() + t);
        },
        function (e, t) {
          return (
            t.getUTCMonth() -
            e.getUTCMonth() +
            (t.getUTCFullYear() - e.getUTCFullYear()) * 12
          );
        },
        function (e) {
          return e.getUTCMonth();
        }
      );
      nv.range;
      var n_ = t5(
        function (e) {
          e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setFullYear(e.getFullYear() + t);
        },
        function (e, t) {
          return t.getFullYear() - e.getFullYear();
        },
        function (e) {
          return e.getFullYear();
        }
      );
      (n_.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? t5(
              function (t) {
                t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                  t.setMonth(0, 1),
                  t.setHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setFullYear(t.getFullYear() + n * e);
              }
            )
          : null;
      }),
        n_.range;
      var nx = t5(
        function (e) {
          e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setUTCFullYear(e.getUTCFullYear() + t);
        },
        function (e, t) {
          return t.getUTCFullYear() - e.getUTCFullYear();
        },
        function (e) {
          return e.getUTCFullYear();
        }
      );
      function nw() {
        return (nw =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      (nx.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? t5(
              function (t) {
                t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                  t.setUTCMonth(0, 1),
                  t.setUTCHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n * e);
              }
            )
          : null;
      }),
        nx.range;
      var nk = [
          function (e) {
            return e.setMilliseconds(0);
          },
          function (e) {
            return e.setSeconds(0);
          },
          function (e) {
            return e.setMinutes(0);
          },
          function (e) {
            return e.setHours(0);
          },
          function (e) {
            return e.setDate(1);
          },
          function (e) {
            return e.setMonth(0);
          },
        ],
        nM = {
          millisecond: [],
          second: nk.slice(0, 1),
          minute: nk.slice(0, 2),
          hour: nk.slice(0, 3),
          day: nk.slice(0, 4),
          month: nk.slice(0, 5),
          year: nk.slice(0, 6),
        },
        nT = function (e) {
          var t,
            n = e.format,
            r = void 0 === n ? "native" : n,
            i = e.precision,
            o = e.useUTC,
            a = void 0 === o || o,
            s =
              ((t = void 0 === i ? "millisecond" : i),
              function (e) {
                return (
                  nM[t].forEach(function (t) {
                    t(e);
                  }),
                  e
                );
              });
          return function (e) {
            return void 0 === e
              ? e
              : "native" === r || e instanceof Date
              ? s(e)
              : s((a ? (0, ex.wp)(r) : (0, ex.Z1)(r))(e));
          };
        },
        nS = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = e.min,
            c = void 0 === u ? 0 : u,
            f = e.max,
            l = void 0 === f ? "auto" : f,
            d = e.stacked,
            h = void 0 !== d && d,
            p = e.reverse,
            g = e.clamp,
            b = e.nice,
            m = void 0 !== b && b;
          (i =
            "auto" === c
              ? !0 === h
                ? null != (o = t.minStacked)
                  ? o
                  : 0
                : t.min
              : c),
            (a =
              "auto" === l
                ? !0 === h
                  ? null != (s = t.maxStacked)
                    ? s
                    : 0
                  : t.max
                : l);
          var y = (function e() {
            var t = e5()(e0, e0);
            return (
              (t.copy = function () {
                return e6(t, e());
              }),
              e8.o.apply(t, arguments),
              ts(t)
            );
          })()
            .rangeRound("x" === r ? [0, n] : [n, 0])
            .domain(void 0 !== p && p ? [a, i] : [i, a])
            .clamp(void 0 !== g && g);
          return (
            !0 === m ? y.nice() : "number" == typeof m && y.nice(m), nC(y, h)
          );
        },
        nC = function (e, t) {
          return (
            void 0 === t && (t = !1), (e.type = "linear"), (e.stacked = t), e
          );
        },
        nO = function (e, t, n) {
          var r = (function () {
            return (function e(t) {
              var n = t.copy;
              return (
                (t.padding = t.paddingOuter),
                delete t.paddingInner,
                delete t.paddingOuter,
                (t.copy = function () {
                  return e(n());
                }),
                t
              );
            })(tu.apply(null, arguments).paddingInner(1));
          })()
            .range([0, n])
            .domain(t.all);
          return (r.type = "point"), r;
        },
        nj = function (e, t, n, r) {
          var i = e.round;
          return nR(
            tu()
              .range("x" === r ? [0, n] : [n, 0])
              .domain(t.all)
              .round(void 0 === i || i)
          );
        },
        nR = function (e) {
          return (e.type = "band"), e;
        },
        nq = function (e, t, n) {
          var r,
            i,
            o = e.format,
            a = void 0 === o ? "native" : o,
            s = e.precision,
            u = e.min,
            c = void 0 === u ? "auto" : u,
            f = e.max,
            l = void 0 === f ? "auto" : f,
            d = e.useUTC,
            h = void 0 === d || d,
            p = e.nice,
            g = void 0 !== p && p,
            b = nT({
              format: a,
              precision: void 0 === s ? "millisecond" : s,
              useUTC: h,
            });
          (r = "auto" === c ? b(t.min) : "native" !== a ? b(c) : c),
            (i = "auto" === l ? b(t.max) : "native" !== a ? b(l) : l);
          var m = h
            ? (function () {
                return e8.o.apply(
                  t$(tL, tW, tU, tN, tq, tj, tO, tC, th, ex.g0).domain([
                    Date.UTC(2e3, 0, 1),
                    Date.UTC(2e3, 0, 2),
                  ]),
                  arguments
                );
              })()
            : (function () {
                return e8.o.apply(
                  t$(tY, tI, tS, tT, ty, tb, tg, tp, th, ex.i$).domain([
                    new Date(2e3, 0, 1),
                    new Date(2e3, 0, 2),
                  ]),
                  arguments
                );
              })();
          return (
            m.range([0, n]),
            r && i && m.domain([r, i]),
            !0 === g
              ? m.nice()
              : ("object" != typeof g && "number" != typeof g) || m.nice(g),
            (m.type = "time"),
            (m.useUTC = h),
            m
          );
        },
        nE = function (e, t, n, r) {
          var i,
            a = e.base,
            s = e.min,
            u = void 0 === s ? "auto" : s,
            c = e.max,
            f = void 0 === c ? "auto" : c;
          if (
            t.all.some(function (e) {
              return 0 === e;
            })
          )
            throw Error("a log scale domain must not include or cross zero");
          var l,
            d,
            h = !1;
          if (
            (t.all
              .filter(function (e) {
                return null != e;
              })
              .forEach(function (e) {
                h ||
                  (void 0 === i
                    ? (i = Math.sign(e))
                    : Math.sign(e) !== i && (h = !0));
              }),
            h)
          )
            throw Error(
              "a log scale domain must be strictly-positive or strictly-negative"
            );
          (l = "auto" === u ? t.min : u), (d = "auto" === f ? t.max : f);
          var p = (function e() {
            var t = (function (e) {
              var t,
                n,
                r = e(tG, tX),
                i = r.domain,
                a = 10;
              function s() {
                var o, s;
                return (
                  (t =
                    (o = a) === Math.E
                      ? Math.log
                      : (10 === o && Math.log10) ||
                        (2 === o && Math.log2) ||
                        ((o = Math.log(o)),
                        function (e) {
                          return Math.log(e) / o;
                        })),
                  (n =
                    10 === (s = a)
                      ? tK
                      : s === Math.E
                      ? Math.exp
                      : function (e) {
                          return Math.pow(s, e);
                        }),
                  i()[0] < 0
                    ? ((t = t0(t)), (n = t0(n)), e(tQ, tJ))
                    : e(tG, tX),
                  r
                );
              }
              return (
                (r.base = function (e) {
                  return arguments.length ? ((a = +e), s()) : a;
                }),
                (r.domain = function (e) {
                  return arguments.length ? (i(e), s()) : i();
                }),
                (r.ticks = function (e) {
                  var r,
                    o = i(),
                    s = o[0],
                    u = o[o.length - 1];
                  (r = u < s) && ((d = s), (s = u), (u = d));
                  var c,
                    f,
                    l,
                    d = t(s),
                    h = t(u),
                    p = null == e ? 10 : +e,
                    g = [];
                  if (!(a % 1) && h - d < p) {
                    if (((d = Math.floor(d)), (h = Math.ceil(h)), s > 0)) {
                      for (; d <= h; ++d)
                        for (f = 1, c = n(d); f < a; ++f)
                          if (!((l = c * f) < s)) {
                            if (l > u) break;
                            g.push(l);
                          }
                    } else
                      for (; d <= h; ++d)
                        for (f = a - 1, c = n(d); f >= 1; --f)
                          if (!((l = c * f) < s)) {
                            if (l > u) break;
                            g.push(l);
                          }
                    2 * g.length < p && (g = eZ(s, u, p));
                  } else g = eZ(d, h, Math.min(h - d, p)).map(n);
                  return r ? g.reverse() : g;
                }),
                (r.tickFormat = function (e, i) {
                  if (
                    (null == i && (i = 10 === a ? ".0e" : ","),
                    "function" != typeof i && (i = o(i)),
                    e === 1 / 0)
                  )
                    return i;
                  null == e && (e = 10);
                  var s = Math.max(1, (a * e) / r.ticks().length);
                  return function (e) {
                    var r = e / n(Math.round(t(e)));
                    return r * a < a - 0.5 && (r *= a), r <= s ? i(e) : "";
                  };
                }),
                (r.nice = function () {
                  return i(
                    tB(i(), {
                      floor: function (e) {
                        return n(Math.floor(t(e)));
                      },
                      ceil: function (e) {
                        return n(Math.ceil(t(e)));
                      },
                    })
                  );
                }),
                r
              );
            })(e5()).domain([1, 10]);
            return (
              (t.copy = function () {
                return e6(t, e()).base(t.base());
              }),
              e8.o.apply(t, arguments),
              t
            );
          })()
            .domain([l, d])
            .rangeRound("x" === r ? [0, n] : [n, 0])
            .base(void 0 === a ? 10 : a)
            .nice();
          return (p.type = "log"), p;
        },
        nP = function (e, t, n, r) {
          var i,
            o,
            a = e.constant,
            s = e.min,
            u = void 0 === s ? "auto" : s,
            c = e.max,
            f = void 0 === c ? "auto" : c,
            l = e.reverse;
          (i = "auto" === u ? t.min : u), (o = "auto" === f ? t.max : f);
          var d = (function e() {
            var t,
              n,
              r,
              i =
                ((t = e5()),
                (n = 1),
                ((r = t(t1(1), t2(n))).constant = function (e) {
                  return arguments.length ? t(t1((n = +e)), t2(n)) : n;
                }),
                ts(r));
            return (
              (i.copy = function () {
                return e6(i, e()).constant(i.constant());
              }),
              e8.o.apply(i, arguments)
            );
          })()
            .constant(void 0 === a ? 1 : a)
            .rangeRound("x" === r ? [0, n] : [n, 0])
            .nice();
          return (
            !0 === (void 0 !== l && l) ? d.domain([o, i]) : d.domain([i, o]),
            (d.type = "symlog"),
            d
          );
        },
        nz = function (e, t) {
          return e === t;
        },
        nA = function (e, t) {
          return e.getTime() === t.getTime();
        };
      function nZ(e, t, n, r) {
        switch (e.type) {
          case "linear":
            return nS(e, t, n, r);
          case "point":
            return nO(0, t, n);
          case "band":
            return nj(e, t, n, r);
          case "time":
            return nq(e, t, n);
          case "log":
            return nE(e, t, n, r);
          case "symlog":
            return nP(e, t, n, r);
          default:
            throw Error("invalid scale spec");
        }
      }
      var nD = function (e, t, n) {
          var r;
          if ("stacked" in n && n.stacked) {
            var i = e.data["x" === t ? "xStacked" : "yStacked"];
            return null == i ? null : n(i);
          }
          return null != (r = n(e.data[t])) ? r : null;
        },
        nN = function (e, t, n, r, i) {
          var o = e.map(function (e) {
              return nw({}, e, {
                data: e?.data?.map(function (e) {
                  return { data: nw({}, e) };
                }),
              });
            }),
            a = nU(o, t, n);
          "stacked" in t && !0 === t.stacked && nW(a, o),
            "stacked" in n && !0 === n.stacked && nY(a, o);
          var s = nZ(t, a.x, r, "x"),
            u = nZ(n, a.y, i, "y"),
            c = o.map(function (e) {
              return nw({}, e, {
                data: e?.data?.map(function (e) {
                  return nw({}, e, {
                    position: { x: nD(e, "x", s), y: nD(e, "y", u) },
                  });
                }),
              });
            });
          return nw({}, a, { series: c, xScale: s, yScale: u });
        },
        nU = function (e, t, n) {
          return { x: nF(e, "x", t), y: nF(e, "y", n) };
        },
        nF = function (e, t, n, r) {
          var i = void 0 === r ? {} : r,
            o = i.getValue,
            a =
              void 0 === o
                ? function (e) {
                    return e.data[t];
                  }
                : o,
            s = i.setValue,
            u =
              void 0 === s
                ? function (e, n) {
                    e.data[t] = n;
                  }
                : s;
          if ("linear" === n.type)
            e.forEach(function (e) {
              e?.data?.forEach(function (e) {
                var t = a(e);
                t && u(e, parseFloat(String(t)));
              });
            });
          else if ("time" === n.type && "native" !== n.format) {
            var c = nT(n);
            e.forEach(function (e) {
              e?.data?.forEach(function (e) {
                var t = a(e);
                t && u(e, c(t));
              });
            });
          }
          var f = [];
          switch (
            (e.forEach(function (e) {
              e?.data?.forEach(function (e) {
                f.push(a(e));
              });
            }),
            n.type)
          ) {
            case "linear":
              var l = eO()(
                eM()(f).filter(function (e) {
                  return null !== e;
                }),
                function (e) {
                  return e;
                }
              );
              return {
                all: l,
                min: Math.min.apply(Math, l),
                max: Math.max.apply(Math, l),
              };
            case "time":
              var d = eS()(f, function (e) {
                return e.getTime();
              })
                .slice(0)
                .sort(function (e, t) {
                  return t.getTime() - e.getTime();
                })
                .reverse();
              return { all: d, min: d[0], max: eR()(d) };
            default:
              var h = eM()(f);
              return { all: h, min: h[0], max: eR()(h) };
          }
        },
        nL = function (e, t, n) {
          var r = "x" === e ? "y" : "x",
            i = [];
          t[r].all.forEach(function (t) {
            var o = eE()(t) ? nA : nz,
              a = [];
            n.forEach(function (n) {
              var s = n.data.find(function (e) {
                  return o(e.data[r], t);
                }),
                u = null,
                c = null;
              if (void 0 !== s) {
                if (null !== (u = s.data[e])) {
                  var f = eR()(a);
                  void 0 === f ? (c = u) : null !== f && (c = f + u);
                }
                s.data["x" === e ? "xStacked" : "yStacked"] = c;
              }
              a.push(c), null !== c && i.push(c);
            });
          }),
            (t[e].minStacked = Math.min.apply(Math, i)),
            (t[e].maxStacked = Math.max.apply(Math, i));
        },
        nW = function (e, t) {
          return nL("x", e, t);
        },
        nY = function (e, t) {
          return nL("y", e, t);
        },
        nI = function (e) {
          var t = e.bandwidth();
          if (0 === t) return e;
          var n = t / 2;
          return (
            e.round() && (n = Math.round(n)),
            function (t) {
              var r;
              return (null != (r = e(t)) ? r : 0) + n;
            }
          );
        },
        nB = {
          millisecond: [t8, t8],
          second: [t7, t7],
          minute: [t4, t9],
          hour: [ne, nt],
          day: [
            t5(
              function (e) {
                return e.setHours(0, 0, 0, 0);
              },
              function (e, t) {
                return e.setDate(e.getDate() + t);
              },
              function (e, t) {
                return (t.getTime() - e.getTime()) / 864e5;
              },
              function (e) {
                return Math.floor(e.getTime() / 864e5);
              }
            ),
            t5(
              function (e) {
                return e.setUTCHours(0, 0, 0, 0);
              },
              function (e, t) {
                return e.setUTCDate(e.getUTCDate() + t);
              },
              function (e, t) {
                return (t.getTime() - e.getTime()) / 864e5;
              },
              function (e) {
                return Math.floor(e.getTime() / 864e5);
              }
            ),
          ],
          week: [nr, nl],
          sunday: [nr, nl],
          monday: [ni, nd],
          tuesday: [no, nh],
          wednesday: [na, np],
          thursday: [ns, ng],
          friday: [nu, nb],
          saturday: [nc, nm],
          month: [ny, nv],
          year: [n_, nx],
        },
        nH = RegExp(
          "^every\\s*(\\d+)?\\s*(" + Object.keys(nB).join("|") + ")s?$",
          "i"
        ),
        nV = function (e, t) {
          if (Array.isArray(t)) return t;
          if ("string" == typeof t && "useUTC" in e) {
            var n = t.match(nH);
            if (n) {
              var r = n[1],
                i = n[2],
                o = nB[i][e.useUTC ? 1 : 0];
              if ("day" === i) {
                var a,
                  s,
                  u = e.domain(),
                  c = u[0],
                  f = new Date(u[1]);
                return (
                  f.setDate(f.getDate() + 1),
                  null !=
                  (a =
                    null == (s = o.every(Number(null != r ? r : 1)))
                      ? void 0
                      : s.range(c, f))
                    ? a
                    : []
                );
              }
              if (void 0 === r) return e.ticks(o);
              var l = o.every(Number(r));
              if (l) return e.ticks(l);
            }
            throw Error("Invalid tickValues: " + t);
          }
          if ("ticks" in e) {
            if (void 0 === t) return e.ticks();
            if ("number" == typeof t && isFinite(t) && Math.floor(t) === t)
              return e.ticks(t);
          }
          return e.domain();
        },
        n$ = n(52322);
      function nG() {
        return (nG =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var nX = function (e) {
          var t,
            n = e.axis,
            r = e.scale,
            i = e.ticksPosition,
            o = e.tickValues,
            a = e.tickSize,
            s = e.tickPadding,
            c = e.tickRotation,
            f = e.engine,
            l = nV(r, o),
            d = u.a6[void 0 === f ? "svg" : f],
            h = "bandwidth" in r ? nI(r) : r,
            p = { lineX: 0, lineY: 0 },
            g = { textX: 0, textY: 0 },
            b = "object" == typeof document && "rtl" === document.dir,
            m = d.align.center,
            y = d.baseline.center;
          return (
            "x" === n
              ? ((t = function (e) {
                  var t;
                  return { x: null != (t = h(e)) ? t : 0, y: 0 };
                }),
                (p.lineY = a * ("after" === i ? 1 : -1)),
                (g.textY = (a + s) * ("after" === i ? 1 : -1)),
                (y = "after" === i ? d.baseline.top : d.baseline.bottom),
                0 === c
                  ? (m = d.align.center)
                  : ("after" === i && c < 0) || ("before" === i && c > 0)
                  ? ((m = d.align[b ? "left" : "right"]),
                    (y = d.baseline.center))
                  : (("after" === i && c > 0) || ("before" === i && c < 0)) &&
                    ((m = d.align[b ? "right" : "left"]),
                    (y = d.baseline.center)))
              : ((t = function (e) {
                  var t;
                  return { x: 0, y: null != (t = h(e)) ? t : 0 };
                }),
                (p.lineX = a * ("after" === i ? 1 : -1)),
                (g.textX = (a + s) * ("after" === i ? 1 : -1)),
                (m = "after" === i ? d.align.left : d.align.right)),
            {
              ticks: l.map(function (e) {
                return nG(
                  {
                    key: e instanceof Date ? "" + e.valueOf() : "" + e,
                    value: e,
                  },
                  t(e),
                  p,
                  g
                );
              }),
              textAlign: m,
              textBaseline: y,
            }
          );
        },
        nQ = function (e, t) {
          if (void 0 === e || "function" == typeof e) return e;
          if ("time" === t.type) {
            var n = (0, ex.i$)(e);
            return function (e) {
              return n(e instanceof Date ? e : new Date(e));
            };
          }
          return (0, ew.WU)(e);
        },
        nJ = function (e) {
          var t = e.width,
            n = e.height,
            r = e.scale,
            i = e.axis,
            o = e.values,
            a = (Array.isArray(o) ? o : void 0) || nV(r, o),
            s = "bandwidth" in r ? nI(r) : r;
          return "x" === i
            ? a.map(function (e) {
                var t, r;
                return {
                  key: e instanceof Date ? "" + e.valueOf() : "" + e,
                  x1: null != (t = s(e)) ? t : 0,
                  x2: null != (r = s(e)) ? r : 0,
                  y1: 0,
                  y2: n,
                };
              })
            : a.map(function (e) {
                var n, r;
                return {
                  key: e instanceof Date ? "" + e.valueOf() : "" + e,
                  x1: 0,
                  x2: t,
                  y1: null != (n = s(e)) ? n : 0,
                  y2: null != (r = s(e)) ? r : 0,
                };
              });
        },
        nK = (0, s.memo)(function (e) {
          var t,
            n = e.value,
            r = e.format,
            i = e.lineX,
            o = e.lineY,
            a = e.onClick,
            c = e.textBaseline,
            f = e.textAnchor,
            l = e.animatedProps,
            d = (0, u.Fg)(),
            h = null != (t = null == r ? void 0 : r(n)) ? t : n,
            p = (0, s.useMemo)(
              function () {
                var e = { opacity: l.opacity };
                return a
                  ? {
                      style: nG({}, e, { cursor: "pointer" }),
                      onClick: function (e) {
                        return a(e, h);
                      },
                    }
                  : { style: e };
              },
              [l.opacity, a, h]
            );
          return (0,
          n$.jsxs)(e_.animated.g, nG({ transform: l.transform }, p, { children: [(0, n$.jsx)("line", { x1: 0, x2: i, y1: 0, y2: o, style: d.axis.ticks.line }), (0, n$.jsx)(e_.animated.text, { dominantBaseline: c, textAnchor: f, transform: l.textTransform, style: d.axis.ticks.text, children: h })] }));
        }),
        n0 = (0, s.memo)(function (e) {
          var t = e.axis,
            n = e.scale,
            r = e.x,
            i = e.y,
            o = e.length,
            a = e.ticksPosition,
            c = e.tickValues,
            f = e.tickSize,
            l = e.tickPadding,
            d = e.tickRotation,
            h = void 0 === d ? 0 : d,
            p = e.format,
            g = e.renderTick,
            b = void 0 === g ? nK : g,
            m = e.legend,
            y = e.legendPosition,
            v = void 0 === y ? "end" : y,
            _ = e.legendOffset,
            x = void 0 === _ ? 0 : _,
            w = e.onClick,
            k = e.ariaHidden,
            M = (0, u.Fg)(),
            T = (0, s.useMemo)(
              function () {
                return nQ(p, n);
              },
              [p, n]
            ),
            S = nX({
              axis: t,
              scale: n,
              ticksPosition: a,
              tickValues: c,
              tickSize: void 0 === f ? 5 : f,
              tickPadding: void 0 === l ? 5 : l,
              tickRotation: h,
            }),
            C = S.ticks,
            O = S.textAlign,
            j = S.textBaseline,
            R = null;
          if (void 0 !== m) {
            var q,
              E = 0,
              P = 0,
              z = 0;
            "y" === t
              ? ((z = -90),
                (E = x),
                "start" === v
                  ? ((q = "start"), (P = o))
                  : "middle" === v
                  ? ((q = "middle"), (P = o / 2))
                  : "end" === v && (q = "end"))
              : ((P = x),
                "start" === v
                  ? (q = "start")
                  : "middle" === v
                  ? ((q = "middle"), (E = o / 2))
                  : "end" === v && ((q = "end"), (E = o))),
              (R = (0, n$.jsx)("text", {
                transform: "translate(" + E + ", " + P + ") rotate(" + z + ")",
                textAnchor: q,
                style: nG({ dominantBaseline: "central" }, M.axis.legend.text),
                children: m,
              }));
          }
          var A = (0, u.tf)(),
            Z = A.animate,
            D = A.config,
            N = (0, e_.useSpring)({
              transform:
                "translate(" +
                (void 0 === r ? 0 : r) +
                "," +
                (void 0 === i ? 0 : i) +
                ")",
              lineX2: "x" === t ? o : 0,
              lineY2: "x" === t ? 0 : o,
              config: D,
              immediate: !Z,
            }),
            U = (0, e_.useTransition)(C, {
              keys: function (e) {
                return e.key;
              },
              initial: function (e) {
                return {
                  opacity: 1,
                  transform: "translate(" + e.x + "," + e.y + ")",
                  textTransform:
                    "translate(" +
                    e.textX +
                    "," +
                    e.textY +
                    ") rotate(" +
                    h +
                    ")",
                };
              },
              from: function (e) {
                return {
                  opacity: 0,
                  transform: "translate(" + e.x + "," + e.y + ")",
                  textTransform:
                    "translate(" +
                    e.textX +
                    "," +
                    e.textY +
                    ") rotate(" +
                    h +
                    ")",
                };
              },
              enter: function (e) {
                return {
                  opacity: 1,
                  transform: "translate(" + e.x + "," + e.y + ")",
                  textTransform:
                    "translate(" +
                    e.textX +
                    "," +
                    e.textY +
                    ") rotate(" +
                    h +
                    ")",
                };
              },
              update: function (e) {
                return {
                  opacity: 1,
                  transform: "translate(" + e.x + "," + e.y + ")",
                  textTransform:
                    "translate(" +
                    e.textX +
                    "," +
                    e.textY +
                    ") rotate(" +
                    h +
                    ")",
                };
              },
              leave: { opacity: 0 },
              config: D,
              immediate: !Z,
            });
          return (0, n$.jsxs)(e_.animated.g, {
            transform: N.transform,
            "aria-hidden": k,
            children: [
              U(function (e, t, n, r) {
                return s.createElement(
                  b,
                  nG(
                    {
                      tickIndex: r,
                      format: T,
                      rotate: h,
                      textBaseline: j,
                      textAnchor: O,
                      animatedProps: e,
                    },
                    t,
                    w ? { onClick: w } : {}
                  )
                );
              }),
              (0, n$.jsx)(e_.animated.line, {
                style: M.axis.domain.line,
                x1: 0,
                x2: N.lineX2,
                y1: 0,
                y2: N.lineY2,
              }),
              R,
            ],
          });
        }),
        n1 = {
          ticksPosition: et().oneOf(["before", "after"]),
          tickValues: et().oneOfType([
            et().number,
            et().arrayOf(
              et().oneOfType([et().number, et().string, et().instanceOf(Date)])
            ),
            et().string,
          ]),
          tickSize: et().number,
          tickPadding: et().number,
          tickRotation: et().number,
          format: et().oneOfType([et().func, et().string]),
          renderTick: et().func,
          legend: et().node,
          legendPosition: et().oneOf(["start", "middle", "end"]),
          legendOffset: et().number,
          ariaHidden: et().bool,
        },
        n2 = et().shape(n1),
        n3 = ["top", "right", "bottom", "left"],
        n6 = (0, s.memo)(function (e) {
          var t = e.xScale,
            n = e.yScale,
            r = e.width,
            i = e.height,
            o = { top: e.top, right: e.right, bottom: e.bottom, left: e.left };
          return (0, n$.jsx)(n$.Fragment, {
            children: n3.map(function (e) {
              var a = o[e];
              if (!a) return null;
              var s = "top" === e || "bottom" === e;
              return (0,
              n$.jsx)(n0, nG({}, a, { axis: s ? "x" : "y", x: "right" === e ? r : 0, y: "bottom" === e ? i : 0, scale: s ? t : n, length: s ? r : i, ticksPosition: "top" === e || "left" === e ? "before" : "after" }), e);
            }),
          });
        }),
        n5 = (0, s.memo)(function (e) {
          var t = e.animatedProps,
            n = (0, u.Fg)();
          return (0, n$.jsx)(e_.animated.line, nG({}, t, n.grid.line));
        }),
        n8 = (0, s.memo)(function (e) {
          var t = e.lines,
            n = (0, u.tf)(),
            r = n.animate,
            i = n.config,
            o = (0, e_.useTransition)(t, {
              keys: function (e) {
                return e.key;
              },
              initial: function (e) {
                return { opacity: 1, x1: e.x1, x2: e.x2, y1: e.y1, y2: e.y2 };
              },
              from: function (e) {
                return { opacity: 0, x1: e.x1, x2: e.x2, y1: e.y1, y2: e.y2 };
              },
              enter: function (e) {
                return { opacity: 1, x1: e.x1, x2: e.x2, y1: e.y1, y2: e.y2 };
              },
              update: function (e) {
                return { opacity: 1, x1: e.x1, x2: e.x2, y1: e.y1, y2: e.y2 };
              },
              leave: { opacity: 0 },
              config: i,
              immediate: !r,
            });
          return (0, n$.jsx)("g", {
            children: o(function (e, t) {
              return (0,
              s.createElement)(n5, nG({}, t, { key: t.key, animatedProps: e }));
            }),
          });
        }),
        n7 = (0, s.memo)(function (e) {
          var t = e.width,
            n = e.height,
            r = e.xScale,
            i = e.yScale,
            o = e.xValues,
            a = e.yValues,
            u = (0, s.useMemo)(
              function () {
                return (
                  !!r &&
                  nJ({ width: t, height: n, scale: r, axis: "x", values: o })
                );
              },
              [r, o, t, n]
            ),
            c = (0, s.useMemo)(
              function () {
                return (
                  !!i &&
                  nJ({ width: t, height: n, scale: i, axis: "y", values: a })
                );
              },
              [n, t, i, a]
            );
          return (0,
          n$.jsxs)(n$.Fragment, { children: [u && (0, n$.jsx)(n8, { lines: u }), c && (0, n$.jsx)(n8, { lines: c })] });
        }),
        n4 = function (e, t) {
          var n,
            r = t.axis,
            i = t.scale,
            o = t.x,
            a = t.y,
            s = t.length,
            c = t.ticksPosition,
            f = t.tickValues,
            l = t.tickSize,
            d = t.tickPadding,
            h = t.tickRotation,
            p = void 0 === h ? 0 : h,
            g = t.format,
            b = t.legend,
            m = t.legendPosition,
            y = void 0 === m ? "end" : m,
            v = t.legendOffset,
            _ = void 0 === v ? 0 : v,
            x = t.theme,
            w = nX({
              axis: r,
              scale: i,
              ticksPosition: c,
              tickValues: f,
              tickSize: void 0 === l ? 5 : l,
              tickPadding: void 0 === d ? 5 : d,
              tickRotation: p,
              engine: "canvas",
            }),
            k = w.ticks,
            M = w.textAlign,
            T = w.textBaseline;
          e.save(),
            e.translate(void 0 === o ? 0 : o, void 0 === a ? 0 : a),
            (e.textAlign = M),
            (e.textBaseline = T),
            (e.font =
              (x.axis.ticks.text.fontWeight
                ? x.axis.ticks.text.fontWeight + " "
                : "") +
              x.axis.ticks.text.fontSize +
              "px " +
              x.axis.ticks.text.fontFamily),
            (null != (n = x.axis.domain.line.strokeWidth) ? n : 0) > 0 &&
              ((e.lineWidth = Number(x.axis.domain.line.strokeWidth)),
              (e.lineCap = "square"),
              x.axis.domain.line.stroke &&
                (e.strokeStyle = x.axis.domain.line.stroke),
              e.beginPath(),
              e.moveTo(0, 0),
              e.lineTo("x" === r ? s : 0, "x" === r ? 0 : s),
              e.stroke());
          var S =
            "function" == typeof g
              ? g
              : function (e) {
                  return "" + e;
                };
          if (
            (k.forEach(function (t) {
              (null != (n = x.axis.ticks.line.strokeWidth) ? n : 0) > 0 &&
                ((e.lineWidth = Number(x.axis.ticks.line.strokeWidth)),
                (e.lineCap = "square"),
                x.axis.ticks.line.stroke &&
                  (e.strokeStyle = x.axis.ticks.line.stroke),
                e.beginPath(),
                e.moveTo(t.x, t.y),
                e.lineTo(t.x + t.lineX, t.y + t.lineY),
                e.stroke());
              var n,
                r = S(t.value);
              e.save(),
                e.translate(t.x + t.textX, t.y + t.textY),
                e.rotate((0, u.Ht)(p)),
                x.axis.ticks.text.fill &&
                  (e.fillStyle = x.axis.ticks.text.fill),
                e.fillText(String(r), 0, 0),
                e.restore();
            }),
            void 0 !== b)
          ) {
            var C = 0,
              O = 0,
              j = 0,
              R = "center";
            "y" === r
              ? ((j = -90),
                (C = _),
                "start" === y
                  ? ((R = "start"), (O = s))
                  : "middle" === y
                  ? ((R = "center"), (O = s / 2))
                  : "end" === y && (R = "end"))
              : ((O = _),
                "start" === y
                  ? (R = "start")
                  : "middle" === y
                  ? ((R = "center"), (C = s / 2))
                  : "end" === y && ((R = "end"), (C = s))),
              e.translate(C, O),
              e.rotate((0, u.Ht)(j)),
              (e.font =
                (x.axis.legend.text.fontWeight
                  ? x.axis.legend.text.fontWeight + " "
                  : "") +
                x.axis.legend.text.fontSize +
                "px " +
                x.axis.legend.text.fontFamily),
              x.axis.legend.text.fill &&
                (e.fillStyle = x.axis.legend.text.fill),
              (e.textAlign = R),
              (e.textBaseline = "middle"),
              e.fillText(b, 0, 0);
          }
          e.restore();
        },
        n9 = function (e, t) {
          var n = t.xScale,
            r = t.yScale,
            i = t.width,
            o = t.height,
            a = t.top,
            s = t.right,
            u = t.bottom,
            c = t.left,
            f = t.theme,
            l = { top: a, right: s, bottom: u, left: c };
          n3.forEach(function (t) {
            var a = l[t];
            if (!a) return null;
            var s = "top" === t || "bottom" === t,
              u = s ? n : r,
              c = nQ(a.format, u);
            n4(
              e,
              nG({}, a, {
                axis: s ? "x" : "y",
                x: "right" === t ? i : 0,
                y: "bottom" === t ? o : 0,
                scale: u,
                format: c,
                length: s ? i : o,
                ticksPosition: "top" === t || "left" === t ? "before" : "after",
                theme: f,
              })
            );
          });
        },
        re = function (e, t) {
          nJ({
            width: t.width,
            height: t.height,
            scale: t.scale,
            axis: t.axis,
            values: t.values,
          }).forEach(function (t) {
            e.beginPath(),
              e.moveTo(t.x1, t.y1),
              e.lineTo(t.x2, t.y2),
              e.stroke();
          });
        };
      function rt() {
        return (rt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var rn = { top: 0, right: 0, bottom: 0, left: 0 },
        rr = function (e) {
          var t = e.direction,
            n = e.itemsSpacing,
            r = e.padding,
            i = e.itemCount,
            o = e.itemWidth,
            a = e.itemHeight;
          if (
            "number" != typeof r &&
            ("object" != typeof r || Array.isArray(r) || null === r)
          )
            throw Error(
              "Invalid property padding, must be one of: number, object"
            );
          var s =
              "number" == typeof r
                ? { top: r, right: r, bottom: r, left: r }
                : rt({}, rn, r),
            u = s.left + s.right,
            c = s.top + s.bottom,
            f = o + u,
            l = a + c,
            d = (i - 1) * n;
          return (
            "row" === t
              ? (f = o * i + d + u)
              : "column" === t && (l = a * i + d + c),
            { width: f, height: l, padding: s }
          );
        },
        ri = function (e) {
          var t = e.anchor,
            n = e.translateX,
            r = e.translateY,
            i = e.containerWidth,
            o = e.containerHeight,
            a = e.width,
            s = e.height,
            u = n,
            c = r;
          switch (t) {
            case "top":
              u += (i - a) / 2;
              break;
            case "top-right":
              u += i - a;
              break;
            case "right":
              (u += i - a), (c += (o - s) / 2);
              break;
            case "bottom-right":
              (u += i - a), (c += o - s);
              break;
            case "bottom":
              (u += (i - a) / 2), (c += o - s);
              break;
            case "bottom-left":
              c += o - s;
              break;
            case "left":
              c += (o - s) / 2;
              break;
            case "center":
              (u += (i - a) / 2), (c += (o - s) / 2);
          }
          return { x: u, y: c };
        },
        ro = function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = e.direction,
            u = e.justify,
            c = e.symbolSize,
            f = e.symbolSpacing,
            l = e.width,
            d = e.height;
          switch (s) {
            case "left-to-right":
              (t = 0),
                (n = (d - c) / 2),
                (i = d / 2),
                (a = "central"),
                u ? ((r = l), (o = "end")) : ((r = c + f), (o = "start"));
              break;
            case "right-to-left":
              (t = l - c),
                (n = (d - c) / 2),
                (i = d / 2),
                (a = "central"),
                u ? ((r = 0), (o = "start")) : ((r = l - c - f), (o = "end"));
              break;
            case "top-to-bottom":
              (t = (l - c) / 2),
                (n = 0),
                (r = l / 2),
                (o = "middle"),
                u
                  ? ((i = d), (a = "alphabetic"))
                  : ((i = c + f), (a = "text-before-edge"));
              break;
            case "bottom-to-top":
              (t = (l - c) / 2),
                (n = d - c),
                (r = l / 2),
                (o = "middle"),
                u
                  ? ((i = 0), (a = "text-before-edge"))
                  : ((i = d - c - f), (a = "alphabetic"));
          }
          return {
            symbolX: t,
            symbolY: n,
            labelX: r,
            labelY: i,
            labelAnchor: o,
            labelAlignment: a,
          };
        },
        ra = {
          circle: function (e) {
            var t = e.x,
              n = e.y,
              r = e.size,
              i = e.fill,
              o = e.opacity,
              a = e.borderWidth,
              s = e.borderColor;
            return (0, n$.jsx)("circle", {
              r: r / 2,
              cx: t + r / 2,
              cy: n + r / 2,
              fill: i,
              opacity: void 0 === o ? 1 : o,
              strokeWidth: void 0 === a ? 0 : a,
              stroke: void 0 === s ? "transparent" : s,
              style: { pointerEvents: "none" },
            });
          },
          diamond: function (e) {
            var t = e.x,
              n = e.y,
              r = e.size,
              i = e.fill,
              o = e.opacity,
              a = e.borderWidth,
              s = e.borderColor;
            return (0, n$.jsx)("g", {
              transform: "translate(" + t + "," + n + ")",
              children: (0, n$.jsx)("path", {
                d:
                  "\n                    M" +
                  r / 2 +
                  " 0\n                    L" +
                  0.8 * r +
                  " " +
                  r / 2 +
                  "\n                    L" +
                  r / 2 +
                  " " +
                  r +
                  "\n                    L" +
                  0.2 * r +
                  " " +
                  r / 2 +
                  "\n                    L" +
                  r / 2 +
                  " 0\n                ",
                fill: i,
                opacity: void 0 === o ? 1 : o,
                strokeWidth: void 0 === a ? 0 : a,
                stroke: void 0 === s ? "transparent" : s,
                style: { pointerEvents: "none" },
              }),
            });
          },
          square: function (e) {
            var t = e.x,
              n = e.y,
              r = e.size,
              i = e.fill,
              o = e.opacity,
              a = e.borderWidth,
              s = e.borderColor;
            return (0, n$.jsx)("rect", {
              x: t,
              y: n,
              fill: i,
              opacity: void 0 === o ? 1 : o,
              strokeWidth: void 0 === a ? 0 : a,
              stroke: void 0 === s ? "transparent" : s,
              width: r,
              height: r,
              style: { pointerEvents: "none" },
            });
          },
          triangle: function (e) {
            var t = e.x,
              n = e.y,
              r = e.size,
              i = e.fill,
              o = e.opacity,
              a = e.borderWidth,
              s = e.borderColor;
            return (0, n$.jsx)("g", {
              transform: "translate(" + t + "," + n + ")",
              children: (0, n$.jsx)("path", {
                d:
                  "\n                M" +
                  r / 2 +
                  " 0\n                L" +
                  r +
                  " " +
                  r +
                  "\n                L0 " +
                  r +
                  "\n                L" +
                  r / 2 +
                  " 0\n            ",
                fill: i,
                opacity: void 0 === o ? 1 : o,
                strokeWidth: void 0 === a ? 0 : a,
                stroke: void 0 === s ? "transparent" : s,
                style: { pointerEvents: "none" },
              }),
            });
          },
        },
        rs = function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            c,
            f,
            l,
            d,
            h,
            p = e.x,
            g = e.y,
            b = e.width,
            m = e.height,
            y = e.data,
            v = e.direction,
            _ = e.justify,
            x = e.textColor,
            w = e.background,
            k = e.opacity,
            M = e.symbolShape,
            T = void 0 === M ? "square" : M,
            S = e.symbolSize,
            C = void 0 === S ? 16 : S,
            O = e.symbolSpacing,
            j = e.symbolBorderWidth,
            R = e.symbolBorderColor,
            q = e.onClick,
            E = e.onMouseEnter,
            P = e.onMouseLeave,
            z = e.toggleSerie,
            A = e.effects,
            Z = (0, s.useState)({}),
            D = Z[0],
            N = Z[1],
            U = (0, u.Fg)(),
            F = (0, s.useCallback)(
              function (e) {
                A &&
                  N(
                    A.filter(function (e) {
                      return "hover" === e.on;
                    }).reduce(function (e, t) {
                      return rt({}, e, t.style);
                    }, {})
                  ),
                  null == E || E(y, e);
              },
              [E, y, A]
            ),
            L = (0, s.useCallback)(
              function (e) {
                A &&
                  N(
                    A.filter(function (e) {
                      return "hover" !== e.on;
                    }).reduce(function (e, t) {
                      return rt({}, e, t.style);
                    }, {})
                  ),
                  null == P || P(y, e);
              },
              [P, y, A]
            ),
            W = ro({
              direction: void 0 === v ? "left-to-right" : v,
              justify: void 0 !== _ && _,
              symbolSize: null != (t = D.symbolSize) ? t : C,
              symbolSpacing: void 0 === O ? 8 : O,
              width: b,
              height: m,
            }),
            Y = W.symbolX,
            I = W.symbolY,
            B = W.labelX,
            H = W.labelY,
            V = W.labelAnchor,
            $ = W.labelAlignment,
            G = [q, E, P, z].some(function (e) {
              return void 0 !== e;
            }),
            X = "function" == typeof T ? T : ra[T];
          return (0, n$.jsxs)("g", {
            transform: "translate(" + p + "," + g + ")",
            style: {
              opacity: null != (n = D.itemOpacity) ? n : void 0 === k ? 1 : k,
            },
            children: [
              (0, n$.jsx)("rect", {
                width: b,
                height: m,
                fill:
                  null != (r = D.itemBackground)
                    ? r
                    : void 0 === w
                    ? "transparent"
                    : w,
                style: { cursor: G ? "pointer" : "auto" },
                onClick: function (e) {
                  null == q || q(y, e), null == z || z(y.id);
                },
                onMouseEnter: F,
                onMouseLeave: L,
              }),
              s.createElement(
                X,
                rt(
                  {
                    id: y.id,
                    x: Y,
                    y: I,
                    size: null != (i = D.symbolSize) ? i : C,
                    fill:
                      null != (o = null != (a = y.fill) ? a : y.color)
                        ? o
                        : "black",
                    borderWidth:
                      null != (c = D.symbolBorderWidth)
                        ? c
                        : void 0 === j
                        ? 0
                        : j,
                    borderColor:
                      null != (f = D.symbolBorderColor)
                        ? f
                        : void 0 === R
                        ? "transparent"
                        : R,
                  },
                  y.hidden ? U.legends.hidden.symbol : void 0
                )
              ),
              (0, n$.jsx)("text", {
                textAnchor: V,
                style: rt(
                  {},
                  U.legends.text,
                  {
                    fill:
                      null !=
                      (l =
                        null != (d = null != (h = D.itemTextColor) ? h : x)
                          ? d
                          : U.legends.text.fill)
                        ? l
                        : "black",
                    dominantBaseline: $,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                  y.hidden ? U.legends.hidden.text : void 0
                ),
                x: B,
                y: H,
                children: y.label,
              }),
            ],
          });
        },
        ru = function (e) {
          var t = e.data,
            n = e.x,
            r = e.y,
            i = e.direction,
            o = e.padding,
            a = e.justify,
            s = e.effects,
            u = e.itemWidth,
            c = e.itemHeight,
            f = e.itemDirection,
            l = void 0 === f ? "left-to-right" : f,
            d = e.itemsSpacing,
            h = void 0 === d ? 0 : d,
            p = e.itemTextColor,
            g = e.itemBackground,
            b = void 0 === g ? "transparent" : g,
            m = e.itemOpacity,
            y = void 0 === m ? 1 : m,
            v = e.symbolShape,
            _ = e.symbolSize,
            x = e.symbolSpacing,
            w = e.symbolBorderWidth,
            k = e.symbolBorderColor,
            M = e.onClick,
            T = e.onMouseEnter,
            S = e.onMouseLeave,
            C = e.toggleSerie,
            O = rr({
              itemCount: t.length,
              itemWidth: u,
              itemHeight: c,
              itemsSpacing: h,
              direction: i,
              padding: void 0 === o ? 0 : o,
            }).padding,
            j = "row" === i ? u + h : 0,
            R = "column" === i ? c + h : 0;
          return (0, n$.jsx)("g", {
            transform: "translate(" + n + "," + r + ")",
            children: t.map(function (e, t) {
              return (0,
              n$.jsx)(rs, { data: e, x: t * j + O.left, y: t * R + O.top, width: u, height: c, direction: l, justify: a, effects: s, textColor: p, background: b, opacity: y, symbolShape: v, symbolSize: _, symbolSpacing: x, symbolBorderWidth: w, symbolBorderColor: k, onClick: M, onMouseEnter: T, onMouseLeave: S, toggleSerie: C }, t);
            }),
          });
        },
        rc = function (e) {
          var t = e.data,
            n = e.containerWidth,
            r = e.containerHeight,
            i = e.translateX,
            o = e.translateY,
            a = e.anchor,
            s = e.direction,
            u = e.padding,
            c = void 0 === u ? 0 : u,
            f = e.justify,
            l = e.itemsSpacing,
            d = void 0 === l ? 0 : l,
            h = e.itemWidth,
            p = e.itemHeight,
            g = e.itemDirection,
            b = e.itemTextColor,
            m = e.itemBackground,
            y = e.itemOpacity,
            v = e.symbolShape,
            _ = e.symbolSize,
            x = e.symbolSpacing,
            w = e.symbolBorderWidth,
            k = e.symbolBorderColor,
            M = e.onClick,
            T = e.onMouseEnter,
            S = e.onMouseLeave,
            C = e.toggleSerie,
            O = e.effects,
            j = rr({
              itemCount: t.length,
              itemsSpacing: d,
              itemWidth: h,
              itemHeight: p,
              direction: s,
              padding: c,
            }),
            R = ri({
              anchor: a,
              translateX: void 0 === i ? 0 : i,
              translateY: void 0 === o ? 0 : o,
              containerWidth: n,
              containerHeight: r,
              width: j.width,
              height: j.height,
            }),
            q = R.x,
            E = R.y;
          return (0, n$.jsx)(ru, {
            data: t,
            x: q,
            y: E,
            direction: s,
            padding: c,
            justify: f,
            effects: O,
            itemsSpacing: d,
            itemWidth: h,
            itemHeight: p,
            itemDirection: g,
            itemTextColor: b,
            itemBackground: m,
            itemOpacity: y,
            symbolShape: v,
            symbolSize: _,
            symbolSpacing: x,
            symbolBorderWidth: w,
            symbolBorderColor: k,
            onClick: M,
            onMouseEnter: T,
            onMouseLeave: S,
            toggleSerie: "boolean" == typeof C ? void 0 : C,
          });
        },
        rf = { start: "left", middle: "center", end: "right" },
        rl = function (e, t) {
          var n = t.data,
            r = t.containerWidth,
            i = t.containerHeight,
            o = t.translateX,
            a = t.translateY,
            s = t.anchor,
            u = t.direction,
            c = t.padding,
            f = t.justify,
            l = void 0 !== f && f,
            d = t.itemsSpacing,
            h = void 0 === d ? 0 : d,
            p = t.itemWidth,
            g = t.itemHeight,
            b = t.itemDirection,
            m = void 0 === b ? "left-to-right" : b,
            y = t.itemTextColor,
            v = t.symbolSize,
            _ = void 0 === v ? 16 : v,
            x = t.symbolSpacing,
            w = void 0 === x ? 8 : x,
            k = t.theme,
            M = rr({
              itemCount: n.length,
              itemWidth: p,
              itemHeight: g,
              itemsSpacing: h,
              direction: u,
              padding: void 0 === c ? 0 : c,
            }),
            T = M.width,
            S = M.height,
            C = M.padding,
            O = ri({
              anchor: s,
              translateX: void 0 === o ? 0 : o,
              translateY: void 0 === a ? 0 : a,
              containerWidth: r,
              containerHeight: i,
              width: T,
              height: S,
            }),
            j = O.x,
            R = O.y,
            q = "row" === u ? p + h : 0,
            E = "column" === u ? g + h : 0;
          e.save(),
            e.translate(j, R),
            (e.font =
              k.legends.text.fontSize +
              "px " +
              (k.legends.text.fontFamily || "sans-serif")),
            n.forEach(function (t, n) {
              var r,
                i,
                o = n * q + C.left,
                a = n * E + C.top,
                s = ro({
                  direction: m,
                  justify: l,
                  symbolSize: _,
                  symbolSpacing: w,
                  width: p,
                  height: g,
                }),
                u = s.symbolX,
                c = s.symbolY,
                f = s.labelX,
                d = s.labelY,
                h = s.labelAnchor,
                b = s.labelAlignment;
              (e.fillStyle = null != (r = t.color) ? r : "black"),
                e.fillRect(o + u, a + c, _, _),
                (e.textAlign = rf[h]),
                "central" === b && (e.textBaseline = "middle"),
                (e.fillStyle =
                  null != (i = null != y ? y : k.legends.text.fill)
                    ? i
                    : "black"),
                e.fillText(String(t.label), o + f, a + d);
            }),
            e.restore();
        },
        rd = {
          data: et().arrayOf(et().object),
          anchor: et().oneOf([
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            "center",
          ]).isRequired,
          translateX: et().number,
          translateY: et().number,
          direction: et().oneOf(["row", "column"]).isRequired,
          itemsSpacing: et().number,
          itemWidth: et().number.isRequired,
          itemHeight: et().number.isRequired,
          itemDirection: et().oneOf([
            "left-to-right",
            "right-to-left",
            "top-to-bottom",
            "bottom-to-top",
          ]),
          itemTextColor: et().string,
          itemBackground: et().string,
          itemOpacity: et().number,
          symbolShape: et().oneOfType([
            et().oneOf(["circle", "diamond", "square", "triangle"]),
            et().func,
          ]),
          symbolSize: et().number,
          symbolSpacing: et().number,
          symbolBorderWidth: et().number,
          symbolBorderColor: et().string,
          onClick: et().func,
          onMouseEnter: et().func,
          onMouseLeave: et().func,
          effects: et().arrayOf(
            et().shape({
              on: et().oneOfType([et().oneOf(["hover"])]).isRequired,
              style: et().shape({
                itemTextColor: et().string,
                itemBackground: et().string,
                itemOpacity: et().number,
                symbolSize: et().number,
                symbolBorderWidth: et().number,
                symbolBorderColor: et().string,
              }).isRequired,
            })
          ),
        },
        rh = n(88797),
        rp = Math.PI,
        rg = 2 * rp,
        rb = rg - 1e-6;
      function rm() {
        (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
      }
      function ry() {
        return new rm();
      }
      function rv(e) {
        return function () {
          return e;
        };
      }
      rm.prototype = ry.prototype = {
        constructor: rm,
        moveTo: function (e, t) {
          this._ +=
            "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
        },
        closePath: function () {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        },
        lineTo: function (e, t) {
          this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
        },
        quadraticCurveTo: function (e, t, n, r) {
          this._ +=
            "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function (e, t, n, r, i, o) {
          this._ +=
            "C" +
            +e +
            "," +
            +t +
            "," +
            +n +
            "," +
            +r +
            "," +
            (this._x1 = +i) +
            "," +
            (this._y1 = +o);
        },
        arcTo: function (e, t, n, r, i) {
          (e = +e), (t = +t), (n = +n), (r = +r), (i = +i);
          var o = this._x1,
            a = this._y1,
            s = n - e,
            u = r - t,
            c = o - e,
            f = a - t,
            l = c * c + f * f;
          if (i < 0) throw Error("negative radius: " + i);
          if (null === this._x1)
            this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
          else if (l > 1e-6) {
            if (Math.abs(f * s - u * c) > 1e-6 && i) {
              var d = n - o,
                h = r - a,
                p = s * s + u * u,
                g = Math.sqrt(p),
                b = Math.sqrt(l),
                m =
                  i *
                  Math.tan(
                    (rp - Math.acos((p + l - (d * d + h * h)) / (2 * g * b))) /
                      2
                  ),
                y = m / b,
                v = m / g;
              Math.abs(y - 1) > 1e-6 &&
                (this._ += "L" + (e + y * c) + "," + (t + y * f)),
                (this._ +=
                  "A" +
                  i +
                  "," +
                  i +
                  ",0,0," +
                  +(f * d > c * h) +
                  "," +
                  (this._x1 = e + v * s) +
                  "," +
                  (this._y1 = t + v * u));
            } else this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
          }
        },
        arc: function (e, t, n, r, i, o) {
          (e = +e), (t = +t), (n = +n), (o = !!o);
          var a = n * Math.cos(r),
            s = n * Math.sin(r),
            u = e + a,
            c = t + s,
            f = 1 ^ o,
            l = o ? r - i : i - r;
          if (n < 0) throw Error("negative radius: " + n);
          null === this._x1
            ? (this._ += "M" + u + "," + c)
            : (Math.abs(this._x1 - u) > 1e-6 ||
                Math.abs(this._y1 - c) > 1e-6) &&
              (this._ += "L" + u + "," + c),
            n &&
              (l < 0 && (l = (l % rg) + rg),
              l > rb
                ? (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    f +
                    "," +
                    (e - a) +
                    "," +
                    (t - s) +
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    f +
                    "," +
                    (this._x1 = u) +
                    "," +
                    (this._y1 = c))
                : l > 1e-6 &&
                  (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0," +
                    +(l >= rp) +
                    "," +
                    f +
                    "," +
                    (this._x1 = e + n * Math.cos(i)) +
                    "," +
                    (this._y1 = t + n * Math.sin(i))));
        },
        rect: function (e, t, n, r) {
          this._ +=
            "M" +
            (this._x0 = this._x1 = +e) +
            "," +
            (this._y0 = this._y1 = +t) +
            "h" +
            +n +
            "v" +
            +r +
            "h" +
            -n +
            "Z";
        },
        toString: function () {
          return this._;
        },
      };
      var r_ = n(20651);
      function rx(e) {
        return e[0];
      }
      function rw(e) {
        return e[1];
      }
      function rk() {
        var e = rx,
          t = rw,
          n = rv(!0),
          r = null,
          i = r_.Z,
          o = null;
        function a(a) {
          var s,
            u,
            c,
            f = a?.length,
            l = !1;
          for (null == r && (o = i((c = ry()))), s = 0; s <= f; ++s)
            !(s < f && n((u = a[s]), s, a)) === l &&
              ((l = !l) ? o.lineStart() : o.lineEnd()),
              l && o.point(+e(u, s, a), +t(u, s, a));
          if (c) return (o = null), c + "" || null;
        }
        return (
          (a.x = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : rv(+t)), a)
              : e;
          }),
          (a.y = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : rv(+e)), a)
              : t;
          }),
          (a.defined = function (e) {
            return arguments.length
              ? ((n = "function" == typeof e ? e : rv(!!e)), a)
              : n;
          }),
          (a.curve = function (e) {
            return arguments.length ? ((i = e), null != r && (o = i(r)), a) : i;
          }),
          (a.context = function (e) {
            return arguments.length
              ? (null == e ? (r = o = null) : (o = i((r = e))), a)
              : r;
          }),
          a
        );
      }
      let rM = new Uint32Array(512);
      class rT {
        static from(e, t = rq, n = rE) {
          let r = e.length,
            i = new Float64Array(2 * r);
          for (let o = 0; o < r; o++) {
            let r = e[o];
            (i[2 * o] = t(r)), (i[2 * o + 1] = n(r));
          }
          return new rT(i);
        }
        constructor(e) {
          let t = e.length >> 1;
          if (t > 0 && "number" != typeof e[0])
            throw Error("Expected coords to contain numbers.");
          this.coords = e;
          let n = Math.max(2 * t - 5, 0);
          (this._triangles = new Uint32Array(3 * n)),
            (this._halfedges = new Int32Array(3 * n)),
            (this._hashSize = Math.ceil(Math.sqrt(t))),
            (this._hullPrev = new Uint32Array(t)),
            (this._hullNext = new Uint32Array(t)),
            (this._hullTri = new Uint32Array(t)),
            (this._hullHash = new Int32Array(this._hashSize).fill(-1)),
            (this._ids = new Uint32Array(t)),
            (this._dists = new Float64Array(t)),
            this.update();
        }
        update() {
          let e, t, n;
          let {
              coords: r,
              _hullPrev: i,
              _hullNext: o,
              _hullTri: a,
              _hullHash: s,
            } = this,
            u = r.length >> 1,
            c = 1 / 0,
            f = 1 / 0,
            l = -1 / 0,
            d = -1 / 0;
          for (let e = 0; e < u; e++) {
            let t = r[2 * e],
              n = r[2 * e + 1];
            t < c && (c = t),
              n < f && (f = n),
              t > l && (l = t),
              n > d && (d = n),
              (this._ids[e] = e);
          }
          let h = (c + l) / 2,
            p = (f + d) / 2,
            g = 1 / 0;
          for (let t = 0; t < u; t++) {
            let n = rS(h, p, r[2 * t], r[2 * t + 1]);
            n < g && ((e = t), (g = n));
          }
          let b = r[2 * e],
            m = r[2 * e + 1];
          g = 1 / 0;
          for (let n = 0; n < u; n++) {
            if (n === e) continue;
            let i = rS(b, m, r[2 * n], r[2 * n + 1]);
            i < g && i > 0 && ((t = n), (g = i));
          }
          let y = r[2 * t],
            v = r[2 * t + 1],
            _ = 1 / 0;
          for (let i = 0; i < u; i++) {
            if (i === e || i === t) continue;
            let o = (function (e, t, n, r, i, o) {
              let a = n - e,
                s = r - t,
                u = i - e,
                c = o - t,
                f = a * a + s * s,
                l = u * u + c * c,
                d = 0.5 / (a * c - s * u),
                h = (c * f - s * l) * d,
                p = (a * l - u * f) * d;
              return h * h + p * p;
            })(b, m, y, v, r[2 * i], r[2 * i + 1]);
            o < _ && ((n = i), (_ = o));
          }
          let x = r[2 * n],
            w = r[2 * n + 1];
          if (_ === 1 / 0) {
            for (let e = 0; e < u; e++)
              this._dists[e] = r[2 * e] - r[0] || r[2 * e + 1] - r[1];
            rj(this._ids, this._dists, 0, u - 1);
            let e = new Uint32Array(u),
              t = 0;
            for (let n = 0, r = -1 / 0; n < u; n++) {
              let i = this._ids[n];
              this._dists[i] > r && ((e[t++] = i), (r = this._dists[i]));
            }
            (this.hull = e.subarray(0, t)),
              (this.triangles = new Uint32Array(0)),
              (this.halfedges = new Uint32Array(0));
            return;
          }
          if (rO(b, m, y, v, x, w)) {
            let e = t,
              r = y,
              i = v;
            (t = n), (y = x), (v = w), (n = e), (x = r), (w = i);
          }
          let k = (function (e, t, n, r, i, o) {
            let a = n - e,
              s = r - t,
              u = i - e,
              c = o - t,
              f = a * a + s * s,
              l = u * u + c * c,
              d = 0.5 / (a * c - s * u);
            return { x: e + (c * f - s * l) * d, y: t + (a * l - u * f) * d };
          })(b, m, y, v, x, w);
          (this._cx = k.x), (this._cy = k.y);
          for (let e = 0; e < u; e++)
            this._dists[e] = rS(r[2 * e], r[2 * e + 1], k.x, k.y);
          rj(this._ids, this._dists, 0, u - 1), (this._hullStart = e);
          let M = 3;
          (o[e] = i[n] = t),
            (o[t] = i[e] = n),
            (o[n] = i[t] = e),
            (a[e] = 0),
            (a[t] = 1),
            (a[n] = 2),
            s.fill(-1),
            (s[this._hashKey(b, m)] = e),
            (s[this._hashKey(y, v)] = t),
            (s[this._hashKey(x, w)] = n),
            (this.trianglesLen = 0),
            this._addTriangle(e, t, n, -1, -1, -1);
          for (let u = 0, c, f; u < this._ids.length; u++) {
            let l = this._ids[u],
              d = r[2 * l],
              h = r[2 * l + 1];
            if (
              (u > 0 &&
                2220446049250313e-31 >= Math.abs(d - c) &&
                2220446049250313e-31 >= Math.abs(h - f)) ||
              ((c = d), (f = h), l === e || l === t || l === n)
            )
              continue;
            let p = 0;
            for (
              let e = 0, t = this._hashKey(d, h);
              e < this._hashSize &&
              (-1 === (p = s[(t + e) % this._hashSize]) || p === o[p]);
              e++
            );
            let g = (p = i[p]),
              b;
            for (
              ;
              (b = o[g]),
                !rO(d, h, r[2 * g], r[2 * g + 1], r[2 * b], r[2 * b + 1]);

            )
              if ((g = b) === p) {
                g = -1;
                break;
              }
            if (-1 === g) continue;
            let m = this._addTriangle(g, l, o[g], -1, -1, a[g]);
            (a[l] = this._legalize(m + 2)), (a[g] = m), M++;
            let y = o[g];
            for (
              ;
              (b = o[y]),
                rO(d, h, r[2 * y], r[2 * y + 1], r[2 * b], r[2 * b + 1]);

            )
              (m = this._addTriangle(y, l, b, a[l], -1, a[y])),
                (a[l] = this._legalize(m + 2)),
                (o[y] = y),
                M--,
                (y = b);
            if (g === p)
              for (
                ;
                rO(
                  d,
                  h,
                  r[2 * (b = i[g])],
                  r[2 * b + 1],
                  r[2 * g],
                  r[2 * g + 1]
                );

              )
                (m = this._addTriangle(b, l, g, -1, a[g], a[b])),
                  this._legalize(m + 2),
                  (a[b] = m),
                  (o[g] = g),
                  M--,
                  (g = b);
            (this._hullStart = i[l] = g),
              (o[g] = i[y] = l),
              (o[l] = y),
              (s[this._hashKey(d, h)] = l),
              (s[this._hashKey(r[2 * g], r[2 * g + 1])] = g);
          }
          this.hull = new Uint32Array(M);
          for (let e = 0, t = this._hullStart; e < M; e++)
            (this.hull[e] = t), (t = o[t]);
          (this.triangles = this._triangles.subarray(0, this.trianglesLen)),
            (this.halfedges = this._halfedges.subarray(0, this.trianglesLen));
        }
        _hashKey(e, t) {
          return (
            Math.floor(
              (function (e, t) {
                let n = e / (Math.abs(e) + Math.abs(t));
                return (t > 0 ? 3 - n : 1 + n) / 4;
              })(e - this._cx, t - this._cy) * this._hashSize
            ) % this._hashSize
          );
        }
        _legalize(e) {
          let { _triangles: t, _halfedges: n, coords: r } = this,
            i = 0,
            o = 0;
          for (;;) {
            let a = n[e],
              s = e - (e % 3);
            if (((o = s + ((e + 2) % 3)), -1 === a)) {
              if (0 === i) break;
              e = rM[--i];
              continue;
            }
            let u = a - (a % 3),
              c = s + ((e + 1) % 3),
              f = u + ((a + 2) % 3),
              l = t[o],
              d = t[e],
              h = t[c],
              p = t[f];
            if (
              (function (e, t, n, r, i, o, a, s) {
                let u = e - a,
                  c = t - s,
                  f = n - a,
                  l = r - s,
                  d = i - a,
                  h = o - s,
                  p = f * f + l * l,
                  g = d * d + h * h;
                return (
                  u * (l * g - p * h) -
                    c * (f * g - p * d) +
                    (u * u + c * c) * (f * h - l * d) <
                  0
                );
              })(
                r[2 * l],
                r[2 * l + 1],
                r[2 * d],
                r[2 * d + 1],
                r[2 * h],
                r[2 * h + 1],
                r[2 * p],
                r[2 * p + 1]
              )
            ) {
              (t[e] = p), (t[a] = l);
              let r = n[f];
              if (-1 === r) {
                let t = this._hullStart;
                do {
                  if (this._hullTri[t] === f) {
                    this._hullTri[t] = e;
                    break;
                  }
                  t = this._hullPrev[t];
                } while (t !== this._hullStart);
              }
              this._link(e, r), this._link(a, n[o]), this._link(o, f);
              let s = u + ((a + 1) % 3);
              i < rM.length && (rM[i++] = s);
            } else {
              if (0 === i) break;
              e = rM[--i];
            }
          }
          return o;
        }
        _link(e, t) {
          (this._halfedges[e] = t), -1 !== t && (this._halfedges[t] = e);
        }
        _addTriangle(e, t, n, r, i, o) {
          let a = this.trianglesLen;
          return (
            (this._triangles[a] = e),
            (this._triangles[a + 1] = t),
            (this._triangles[a + 2] = n),
            this._link(a, r),
            this._link(a + 1, i),
            this._link(a + 2, o),
            (this.trianglesLen += 3),
            a
          );
        }
      }
      function rS(e, t, n, r) {
        let i = e - n,
          o = t - r;
        return i * i + o * o;
      }
      function rC(e, t, n, r, i, o) {
        let a = (r - t) * (i - e),
          s = (n - e) * (o - t);
        return Math.abs(a - s) >= 33306690738754716e-32 * Math.abs(a + s)
          ? a - s
          : 0;
      }
      function rO(e, t, n, r, i, o) {
        return (
          0 >
          (rC(i, o, e, t, n, r) || rC(e, t, n, r, i, o) || rC(n, r, i, o, e, t))
        );
      }
      function rj(e, t, n, r) {
        if (r - n <= 20)
          for (let i = n + 1; i <= r; i++) {
            let r = e[i],
              o = t[r],
              a = i - 1;
            for (; a >= n && t[e[a]] > o; ) e[a + 1] = e[a--];
            e[a + 1] = r;
          }
        else {
          let i = (n + r) >> 1,
            o = n + 1,
            a = r;
          rR(e, i, o),
            t[e[n]] > t[e[r]] && rR(e, n, r),
            t[e[o]] > t[e[r]] && rR(e, o, r),
            t[e[n]] > t[e[o]] && rR(e, n, o);
          let s = e[o],
            u = t[s];
          for (;;) {
            do o++;
            while (t[e[o]] < u);
            do a--;
            while (t[e[a]] > u);
            if (a < o) break;
            rR(e, o, a);
          }
          (e[n + 1] = e[a]),
            (e[a] = s),
            r - o + 1 >= a - n
              ? (rj(e, t, o, r), rj(e, t, n, a - 1))
              : (rj(e, t, n, a - 1), rj(e, t, o, r));
        }
      }
      function rR(e, t, n) {
        let r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function rq(e) {
        return e[0];
      }
      function rE(e) {
        return e[1];
      }
      class rP {
        constructor() {
          (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
        }
        moveTo(e, t) {
          this._ += `M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 =
            +t)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        }
        lineTo(e, t) {
          this._ += `L${(this._x1 = +e)},${(this._y1 = +t)}`;
        }
        arc(e, t, n) {
          (e = +e), (t = +t);
          let r = e + (n = +n),
            i = t;
          if (n < 0) throw Error("negative radius");
          null === this._x1
            ? (this._ += `M${r},${i}`)
            : (Math.abs(this._x1 - r) > 1e-6 ||
                Math.abs(this._y1 - i) > 1e-6) &&
              (this._ += "L" + r + "," + i),
            n &&
              (this._ += `A${n},${n},0,1,1,${
                e - n
              },${t}A${n},${n},0,1,1,${(this._x1 = r)},${(this._y1 = i)}`);
        }
        rect(e, t, n, r) {
          this._ += `M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 =
            +t)}h${+n}v${+r}h${-n}Z`;
        }
        value() {
          return this._ || null;
        }
      }
      class rz {
        constructor() {
          this._ = [];
        }
        moveTo(e, t) {
          this._.push([e, t]);
        }
        closePath() {
          this._.push(this._[0].slice());
        }
        lineTo(e, t) {
          this._.push([e, t]);
        }
        value() {
          return this._.length ? this._ : null;
        }
      }
      class rA {
        constructor(e, [t, n, r, i] = [0, 0, 960, 500]) {
          if (!((r = +r) >= (t = +t)) || !((i = +i) >= (n = +n)))
            throw Error("invalid bounds");
          (this.delaunay = e),
            (this._circumcenters = new Float64Array(2 * e.points.length)),
            (this.vectors = new Float64Array(2 * e.points.length)),
            (this.xmax = r),
            (this.xmin = t),
            (this.ymax = i),
            (this.ymin = n),
            this._init();
        }
        update() {
          return this.delaunay.update(), this._init(), this;
        }
        _init() {
          let {
              delaunay: { points: e, hull: t, triangles: n },
              vectors: r,
            } = this,
            i = (this.circumcenters = this._circumcenters.subarray(
              0,
              (n.length / 3) * 2
            ));
          for (let t = 0, r = 0, o = n.length, a, s; t < o; t += 3, r += 2) {
            let o = 2 * n[t],
              u = 2 * n[t + 1],
              c = 2 * n[t + 2],
              f = e[o],
              l = e[o + 1],
              d = e[u],
              h = e[u + 1],
              p = e[c],
              g = e[c + 1],
              b = d - f,
              m = h - l,
              y = p - f,
              v = g - l,
              _ = b * b + m * m,
              x = y * y + v * v,
              w = (b * v - m * y) * 2;
            if (w) {
              if (1e-8 > Math.abs(w)) (a = (f + p) / 2), (s = (l + g) / 2);
              else {
                let e = 1 / w;
                (a = f + (v * _ - m * x) * e), (s = l + (b * x - y * _) * e);
              }
            } else (a = (f + p) / 2 - 1e8 * v), (s = (l + g) / 2 + 1e8 * y);
            (i[r] = a), (i[r + 1] = s);
          }
          let o = t[t.length - 1],
            a,
            s = 4 * o,
            u,
            c = e[2 * o],
            f,
            l = e[2 * o + 1];
          r.fill(0);
          for (let n = 0; n < t.length; ++n)
            (o = t[n]),
              (a = s),
              (u = c),
              (f = l),
              (s = 4 * o),
              (c = e[2 * o]),
              (l = e[2 * o + 1]),
              (r[a + 2] = r[s] = f - l),
              (r[a + 3] = r[s + 1] = c - u);
        }
        render(e) {
          let t = null == e ? (e = new rP()) : void 0,
            {
              delaunay: { halfedges: n, inedges: r, hull: i },
              circumcenters: o,
              vectors: a,
            } = this;
          if (i.length <= 1) return null;
          for (let t = 0, r = n.length; t < r; ++t) {
            let r = n[t];
            if (r < t) continue;
            let i = 2 * Math.floor(t / 3),
              a = 2 * Math.floor(r / 3),
              s = o[i],
              u = o[i + 1],
              c = o[a],
              f = o[a + 1];
            this._renderSegment(s, u, c, f, e);
          }
          let s,
            u = i[i.length - 1];
          for (let t = 0; t < i.length; ++t) {
            s = u;
            let n = 2 * Math.floor(r[(u = i[t])] / 3),
              c = o[n],
              f = o[n + 1],
              l = 4 * s,
              d = this._project(c, f, a[l + 2], a[l + 3]);
            d && this._renderSegment(c, f, d[0], d[1], e);
          }
          return t && t.value();
        }
        renderBounds(e) {
          let t = null == e ? (e = new rP()) : void 0;
          return (
            e.rect(
              this.xmin,
              this.ymin,
              this.xmax - this.xmin,
              this.ymax - this.ymin
            ),
            t && t.value()
          );
        }
        renderCell(e, t) {
          let n = null == t ? (t = new rP()) : void 0,
            r = this._clip(e);
          if (null === r || !r.length) return;
          t.moveTo(r[0], r[1]);
          let i = r.length;
          for (; r[0] === r[i - 2] && r[1] === r[i - 1] && i > 1; ) i -= 2;
          for (let e = 2; e < i; e += 2)
            (r[e] !== r[e - 2] || r[e + 1] !== r[e - 1]) &&
              t.lineTo(r[e], r[e + 1]);
          return t.closePath(), n && n.value();
        }
        *cellPolygons() {
          let {
            delaunay: { points: e },
          } = this;
          for (let t = 0, n = e.length / 2; t < n; ++t) {
            let e = this.cellPolygon(t);
            e && ((e.index = t), yield e);
          }
        }
        cellPolygon(e) {
          let t = new rz();
          return this.renderCell(e, t), t.value();
        }
        _renderSegment(e, t, n, r, i) {
          let o;
          let a = this._regioncode(e, t),
            s = this._regioncode(n, r);
          0 === a && 0 === s
            ? (i.moveTo(e, t), i.lineTo(n, r))
            : (o = this._clipSegment(e, t, n, r, a, s)) &&
              (i.moveTo(o[0], o[1]), i.lineTo(o[2], o[3]));
        }
        contains(e, t, n) {
          return (
            (t = +t) == t && (n = +n) == n && this.delaunay._step(e, t, n) === e
          );
        }
        *neighbors(e) {
          let t = this._clip(e);
          if (t)
            for (let n of this.delaunay.neighbors(e)) {
              let e = this._clip(n);
              if (e) {
                t: for (let r = 0, i = t.length; r < i; r += 2)
                  for (let o = 0, a = e.length; o < a; o += 2)
                    if (
                      t[r] == e[o] &&
                      t[r + 1] == e[o + 1] &&
                      t[(r + 2) % i] == e[(o + a - 2) % a] &&
                      t[(r + 3) % i] == e[(o + a - 1) % a]
                    ) {
                      yield n;
                      break t;
                    }
              }
            }
        }
        _cell(e) {
          let {
              circumcenters: t,
              delaunay: { inedges: n, halfedges: r, triangles: i },
            } = this,
            o = n[e];
          if (-1 === o) return null;
          let a = [],
            s = o;
          do {
            let n = Math.floor(s / 3);
            if (
              (a.push(t[2 * n], t[2 * n + 1]),
              i[(s = s % 3 == 2 ? s - 2 : s + 1)] !== e)
            )
              break;
            s = r[s];
          } while (s !== o && -1 !== s);
          return a;
        }
        _clip(e) {
          if (0 === e && 1 === this.delaunay.hull.length)
            return [
              this.xmax,
              this.ymin,
              this.xmax,
              this.ymax,
              this.xmin,
              this.ymax,
              this.xmin,
              this.ymin,
            ];
          let t = this._cell(e);
          if (null === t) return null;
          let { vectors: n } = this,
            r = 4 * e;
          return n[r] || n[r + 1]
            ? this._clipInfinite(e, t, n[r], n[r + 1], n[r + 2], n[r + 3])
            : this._clipFinite(e, t);
        }
        _clipFinite(e, t) {
          let n, r;
          let i = t.length,
            o = null,
            a,
            s,
            u = t[i - 2],
            c = t[i - 1],
            f,
            l = this._regioncode(u, c);
          for (let d = 0; d < i; d += 2)
            if (
              ((a = u),
              (s = c),
              (u = t[d]),
              (c = t[d + 1]),
              (f = l),
              (l = this._regioncode(u, c)),
              0 === f && 0 === l)
            )
              (n = r), (r = 0), o ? o.push(u, c) : (o = [u, c]);
            else {
              let t, i, d, h, p;
              if (0 === f) {
                if (null === (t = this._clipSegment(a, s, u, c, f, l)))
                  continue;
                [i, d, h, p] = t;
              } else {
                if (null === (t = this._clipSegment(u, c, a, s, l, f)))
                  continue;
                ([h, p, i, d] = t),
                  (n = r),
                  (r = this._edgecode(i, d)),
                  n && r && this._edge(e, n, r, o, o.length),
                  o ? o.push(i, d) : (o = [i, d]);
              }
              (n = r),
                (r = this._edgecode(h, p)),
                n && r && this._edge(e, n, r, o, o.length),
                o ? o.push(h, p) : (o = [h, p]);
            }
          if (o)
            (n = r),
              (r = this._edgecode(o[0], o[1])),
              n && r && this._edge(e, n, r, o, o.length);
          else if (
            this.contains(
              e,
              (this.xmin + this.xmax) / 2,
              (this.ymin + this.ymax) / 2
            )
          )
            return [
              this.xmax,
              this.ymin,
              this.xmax,
              this.ymax,
              this.xmin,
              this.ymax,
              this.xmin,
              this.ymin,
            ];
          return o;
        }
        _clipSegment(e, t, n, r, i, o) {
          for (;;) {
            if (0 === i && 0 === o) return [e, t, n, r];
            if (i & o) return null;
            let a,
              s,
              u = i || o;
            8 & u
              ? ((a = e + ((n - e) * (this.ymax - t)) / (r - t)),
                (s = this.ymax))
              : 4 & u
              ? ((a = e + ((n - e) * (this.ymin - t)) / (r - t)),
                (s = this.ymin))
              : 2 & u
              ? ((s = t + ((r - t) * (this.xmax - e)) / (n - e)),
                (a = this.xmax))
              : ((s = t + ((r - t) * (this.xmin - e)) / (n - e)),
                (a = this.xmin)),
              i
                ? ((e = a), (t = s), (i = this._regioncode(e, t)))
                : ((n = a), (r = s), (o = this._regioncode(n, r)));
          }
        }
        _clipInfinite(e, t, n, r, i, o) {
          let a = Array.from(t),
            s;
          if (
            ((s = this._project(a[0], a[1], n, r)) && a.unshift(s[0], s[1]),
            (s = this._project(a[a.length - 2], a[a.length - 1], i, o)) &&
              a.push(s[0], s[1]),
            (a = this._clipFinite(e, a)))
          )
            for (
              let t = 0,
                n = a.length,
                r,
                i = this._edgecode(a[n - 2], a[n - 1]);
              t < n;
              t += 2
            )
              (r = i),
                (i = this._edgecode(a[t], a[t + 1])),
                r && i && ((t = this._edge(e, r, i, a, t)), (n = a.length));
          else
            this.contains(
              e,
              (this.xmin + this.xmax) / 2,
              (this.ymin + this.ymax) / 2
            ) &&
              (a = [
                this.xmin,
                this.ymin,
                this.xmax,
                this.ymin,
                this.xmax,
                this.ymax,
                this.xmin,
                this.ymax,
              ]);
          return a;
        }
        _edge(e, t, n, r, i) {
          for (; t !== n; ) {
            let n, o;
            switch (t) {
              case 5:
                t = 4;
                continue;
              case 4:
                (t = 6), (n = this.xmax), (o = this.ymin);
                break;
              case 6:
                t = 2;
                continue;
              case 2:
                (t = 10), (n = this.xmax), (o = this.ymax);
                break;
              case 10:
                t = 8;
                continue;
              case 8:
                (t = 9), (n = this.xmin), (o = this.ymax);
                break;
              case 9:
                t = 1;
                continue;
              case 1:
                (t = 5), (n = this.xmin), (o = this.ymin);
            }
            (r[i] !== n || r[i + 1] !== o) &&
              this.contains(e, n, o) &&
              (r.splice(i, 0, n, o), (i += 2));
          }
          if (r.length > 4)
            for (let e = 0; e < r.length; e += 2) {
              let t = (e + 2) % r.length,
                n = (e + 4) % r.length;
              ((r[e] === r[t] && r[t] === r[n]) ||
                (r[e + 1] === r[t + 1] && r[t + 1] === r[n + 1])) &&
                (r.splice(t, 2), (e -= 2));
            }
          return i;
        }
        _project(e, t, n, r) {
          let i = 1 / 0,
            o,
            a,
            s;
          if (r < 0) {
            if (t <= this.ymin) return null;
            (o = (this.ymin - t) / r) < i &&
              ((s = this.ymin), (a = e + (i = o) * n));
          } else if (r > 0) {
            if (t >= this.ymax) return null;
            (o = (this.ymax - t) / r) < i &&
              ((s = this.ymax), (a = e + (i = o) * n));
          }
          if (n > 0) {
            if (e >= this.xmax) return null;
            (o = (this.xmax - e) / n) < i &&
              ((a = this.xmax), (s = t + (i = o) * r));
          } else if (n < 0) {
            if (e <= this.xmin) return null;
            (o = (this.xmin - e) / n) < i &&
              ((a = this.xmin), (s = t + (i = o) * r));
          }
          return [a, s];
        }
        _edgecode(e, t) {
          return (
            (e === this.xmin ? 1 : e === this.xmax ? 2 : 0) |
            (t === this.ymin ? 4 : t === this.ymax ? 8 : 0)
          );
        }
        _regioncode(e, t) {
          return (
            (e < this.xmin ? 1 : e > this.xmax ? 2 : 0) |
            (t < this.ymin ? 4 : t > this.ymax ? 8 : 0)
          );
        }
      }
      let rZ = 2 * Math.PI,
        rD = Math.pow;
      function rN(e) {
        return e[0];
      }
      function rU(e) {
        return e[1];
      }
      class rF {
        static from(e, t = rN, n = rU, r) {
          return new rF(
            "length" in e
              ? (function (e, t, n, r) {
                  let i = e.length,
                    o = new Float64Array(2 * i);
                  for (let a = 0; a < i; ++a) {
                    let i = e[a];
                    (o[2 * a] = t.call(r, i, a, e)),
                      (o[2 * a + 1] = n.call(r, i, a, e));
                  }
                  return o;
                })(e, t, n, r)
              : Float64Array.from(
                  (function* (e, t, n, r) {
                    let i = 0;
                    for (let o of e)
                      yield t.call(r, o, i, e), yield n.call(r, o, i, e), ++i;
                  })(e, t, n, r)
                )
          );
        }
        constructor(e) {
          (this._delaunator = new rT(e)),
            (this.inedges = new Int32Array(e.length / 2)),
            (this._hullIndex = new Int32Array(e.length / 2)),
            (this.points = this._delaunator.coords),
            this._init();
        }
        update() {
          return this._delaunator.update(), this._init(), this;
        }
        _init() {
          let e = this._delaunator,
            t = this.points;
          if (
            e.hull &&
            e.hull.length > 2 &&
            (function (e) {
              let { triangles: t, coords: n } = e;
              for (let e = 0; e < t.length; e += 3) {
                let r = 2 * t[e],
                  i = 2 * t[e + 1],
                  o = 2 * t[e + 2];
                if (
                  (n[o] - n[r]) * (n[i + 1] - n[r + 1]) -
                    (n[i] - n[r]) * (n[o + 1] - n[r + 1]) >
                  1e-10
                )
                  return !1;
              }
              return !0;
            })(e)
          ) {
            this.collinear = Int32Array.from(
              { length: t.length / 2 },
              (e, t) => t
            ).sort(
              (e, n) => t[2 * e] - t[2 * n] || t[2 * e + 1] - t[2 * n + 1]
            );
            let e = this.collinear[0],
              i = this.collinear[this.collinear.length - 1],
              o = [t[2 * e], t[2 * e + 1], t[2 * i], t[2 * i + 1]],
              a = 1e-8 * Math.hypot(o[3] - o[1], o[2] - o[0]);
            for (let e = 0, i = t.length / 2; e < i; ++e) {
              var n, r;
              let i = [
                (n = t[2 * e]) + Math.sin(n + (r = t[2 * e + 1])) * a,
                r + Math.cos(n - r) * a,
              ];
              (t[2 * e] = i[0]), (t[2 * e + 1] = i[1]);
            }
            this._delaunator = new rT(t);
          } else delete this.collinear;
          let i = (this.halfedges = this._delaunator.halfedges),
            o = (this.hull = this._delaunator.hull),
            a = (this.triangles = this._delaunator.triangles),
            s = this.inedges.fill(-1),
            u = this._hullIndex.fill(-1);
          for (let e = 0, t = i.length; e < t; ++e) {
            let t = a[e % 3 == 2 ? e - 2 : e + 1];
            (-1 === i[e] || -1 === s[t]) && (s[t] = e);
          }
          for (let e = 0, t = o.length; e < t; ++e) u[o[e]] = e;
          o.length <= 2 &&
            o.length > 0 &&
            ((this.triangles = new Int32Array(3).fill(-1)),
            (this.halfedges = new Int32Array(3).fill(-1)),
            (this.triangles[0] = o[0]),
            (this.triangles[1] = o[1]),
            (this.triangles[2] = o[1]),
            (s[o[0]] = 1),
            2 === o.length && (s[o[1]] = 0));
        }
        voronoi(e) {
          return new rA(this, e);
        }
        *neighbors(e) {
          let {
            inedges: t,
            hull: n,
            _hullIndex: r,
            halfedges: i,
            triangles: o,
            collinear: a,
          } = this;
          if (a) {
            let t = a.indexOf(e);
            t > 0 && (yield a[t - 1]), t < a.length - 1 && (yield a[t + 1]);
            return;
          }
          let s = t[e];
          if (-1 === s) return;
          let u = s,
            c = -1;
          do {
            if ((yield (c = o[u]), o[(u = u % 3 == 2 ? u - 2 : u + 1)] !== e))
              return;
            if (-1 === (u = i[u])) {
              let t = n[(r[e] + 1) % n.length];
              t !== c && (yield t);
              return;
            }
          } while (u !== s);
        }
        find(e, t, n = 0) {
          let r;
          if ((e = +e) != e || (t = +t) != t) return -1;
          let i = n;
          for (; (r = this._step(n, e, t)) >= 0 && r !== n && r !== i; ) n = r;
          return r;
        }
        _step(e, t, n) {
          let {
            inedges: r,
            hull: i,
            _hullIndex: o,
            halfedges: a,
            triangles: s,
            points: u,
          } = this;
          if (-1 === r[e] || !u.length) return (e + 1) % (u.length >> 1);
          let c = e,
            f = rD(t - u[2 * e], 2) + rD(n - u[2 * e + 1], 2),
            l = r[e],
            d = l;
          do {
            let r = s[d],
              l = rD(t - u[2 * r], 2) + rD(n - u[2 * r + 1], 2);
            if (
              (l < f && ((f = l), (c = r)),
              s[(d = d % 3 == 2 ? d - 2 : d + 1)] !== e)
            )
              break;
            if (-1 === (d = a[d])) {
              if (
                (d = i[(o[e] + 1) % i.length]) !== r &&
                rD(t - u[2 * d], 2) + rD(n - u[2 * d + 1], 2) < f
              )
                return d;
              break;
            }
          } while (d !== l);
          return c;
        }
        render(e) {
          let t = null == e ? (e = new rP()) : void 0,
            { points: n, halfedges: r, triangles: i } = this;
          for (let t = 0, o = r.length; t < o; ++t) {
            let o = r[t];
            if (o < t) continue;
            let a = 2 * i[t],
              s = 2 * i[o];
            e.moveTo(n[a], n[a + 1]), e.lineTo(n[s], n[s + 1]);
          }
          return this.renderHull(e), t && t.value();
        }
        renderPoints(e, t = 2) {
          let n = null == e ? (e = new rP()) : void 0,
            { points: r } = this;
          for (let n = 0, i = r.length; n < i; n += 2) {
            let i = r[n],
              o = r[n + 1];
            e.moveTo(i + t, o), e.arc(i, o, t, 0, rZ);
          }
          return n && n.value();
        }
        renderHull(e) {
          let t = null == e ? (e = new rP()) : void 0,
            { hull: n, points: r } = this,
            i = 2 * n[0],
            o = n.length;
          e.moveTo(r[i], r[i + 1]);
          for (let t = 1; t < o; ++t) {
            let i = 2 * n[t];
            e.lineTo(r[i], r[i + 1]);
          }
          return e.closePath(), t && t.value();
        }
        hullPolygon() {
          let e = new rz();
          return this.renderHull(e), e.value();
        }
        renderTriangle(e, t) {
          let n = null == t ? (t = new rP()) : void 0,
            { points: r, triangles: i } = this,
            o = 2 * i[(e *= 3)],
            a = 2 * i[e + 1],
            s = 2 * i[e + 2];
          return (
            t.moveTo(r[o], r[o + 1]),
            t.lineTo(r[a], r[a + 1]),
            t.lineTo(r[s], r[s + 1]),
            t.closePath(),
            n && n.value()
          );
        }
        *trianglePolygons() {
          let { triangles: e } = this;
          for (let t = 0, n = e.length / 3; t < n; ++t)
            yield this.trianglePolygon(t);
        }
        trianglePolygon(e) {
          let t = new rz();
          return this.renderTriangle(e, t), t.value();
        }
      }
      var rL = function (e) {
          return "function" == typeof e
            ? e
            : function (t) {
                return t[e];
              };
        },
        rW = function (e) {
          var t = e.points,
            n = e.x,
            r = e.y,
            i = rL(void 0 === n ? "x" : n),
            o = rL(void 0 === r ? "y" : r);
          return t.map(function (e) {
            return [i(e), o(e)];
          });
        },
        rY = function (e) {
          var t = e.points,
            n = e.width,
            r = e.height,
            i = e.debug,
            o = rF.from(t),
            a = i ? o.voronoi([0, 0, n, r]) : void 0;
          return { delaunay: o, voronoi: a };
        },
        rI = function (e) {
          var t = e.points,
            n = e.x,
            r = e.y,
            i = e.width,
            o = e.height,
            a = e.debug,
            u = (0, s.useMemo)(
              function () {
                return rW({ points: t, x: n, y: r });
              },
              [t, n, r]
            );
          return (0, s.useMemo)(
            function () {
              return rY({ points: u, width: i, height: o, debug: a });
            },
            [u, i, o, a]
          );
        },
        rB = function (e) {
          var t = e.nodes,
            n = e.width,
            r = e.height,
            i = e.x,
            o = e.y,
            a = e.onMouseEnter,
            c = e.onMouseMove,
            f = e.onMouseLeave,
            l = e.onClick,
            d = e.debug,
            h = (0, s.useRef)(null),
            p = (0, s.useState)(null),
            g = p[0],
            b = p[1],
            m = rI({ points: t, x: i, y: o, width: n, height: r, debug: d }),
            y = m.delaunay,
            v = m.voronoi,
            _ = (0, s.useMemo)(
              function () {
                if (d && v) return v.render();
              },
              [d, v]
            ),
            x = (0, s.useCallback)(
              function (e) {
                if (!h.current) return [null, null];
                var n = (0, u.P6)(h.current, e),
                  r = n[0],
                  i = n[1],
                  o = y.find(r, i);
                return [o, void 0 !== o ? t[o] : null];
              },
              [h, y]
            ),
            w = (0, s.useCallback)(
              function (e) {
                var t = x(e),
                  n = t[0],
                  r = t[1];
                b(n), r && (null == a || a(r, e));
              },
              [x, b, a]
            ),
            k = (0, s.useCallback)(
              function (e) {
                var t = x(e),
                  n = t[0],
                  r = t[1];
                b(n), r && (null == c || c(r, e));
              },
              [x, b, c]
            ),
            M = (0, s.useCallback)(
              function (e) {
                if ((b(null), f)) {
                  var n = void 0;
                  null !== g && (n = t[g]), n && f(n, e);
                }
              },
              [b, g, f, t]
            ),
            T = (0, s.useCallback)(
              function (e) {
                var t = x(e),
                  n = t[0],
                  r = t[1];
                b(n), r && (null == l || l(r, e));
              },
              [x, b, l]
            );
          return (0, n$.jsxs)("g", {
            ref: h,
            children: [
              d &&
                v &&
                (0, n$.jsxs)(n$.Fragment, {
                  children: [
                    (0, n$.jsx)("path", {
                      d: _,
                      stroke: "red",
                      strokeWidth: 1,
                      opacity: 0.75,
                    }),
                    null !== g &&
                      (0, n$.jsx)("path", {
                        fill: "pink",
                        opacity: 0.35,
                        d: v.renderCell(g),
                      }),
                  ],
                }),
              (0, n$.jsx)("rect", {
                width: n,
                height: r,
                fill: "red",
                opacity: 0,
                style: { cursor: "auto" },
                onMouseEnter: w,
                onMouseMove: k,
                onMouseLeave: M,
                onClick: T,
              }),
            ],
          });
        },
        rH = function (e, t) {
          e.save(),
            (e.globalAlpha = 0.75),
            e.beginPath(),
            t.render(e),
            (e.strokeStyle = "red"),
            (e.lineWidth = 1),
            e.stroke(),
            e.restore();
        },
        rV = function (e, t, n) {
          e.save(),
            (e.globalAlpha = 0.35),
            e.beginPath(),
            t.renderCell(n, e),
            (e.fillStyle = "red"),
            e.fill(),
            e.restore();
        };
      function r$() {
        return (r$ =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var rG = function (e) {
        var t = e.point;
        return (0, n$.jsx)(rh._5, {
          id: (0, n$.jsxs)("span", {
            children: [
              "x: ",
              (0, n$.jsx)("strong", { children: t.data.xFormatted }),
              ", y:",
              " ",
              (0, n$.jsx)("strong", { children: t.data.yFormatted }),
            ],
          }),
          enableChip: !0,
          color: t.serieColor,
        });
      };
      rG.propTypes = { point: et().object.isRequired };
      var rX = (0, s.memo)(rG),
        rQ = function (e) {
          var t = e.slice,
            n = e.axis,
            r = (0, u.Fg)(),
            i = "x" === n ? "y" : "x";
          return (0, n$.jsx)(rh.zI, {
            rows: t.points.map(function (e) {
              return [
                (0, n$.jsx)(
                  rh.Af,
                  { color: e.serieColor, style: r.tooltip.chip },
                  "chip"
                ),
                e.serieId,
                (0, n$.jsx)(
                  "span",
                  {
                    style: r.tooltip.tableCellValue,
                    children: e.data[i + "Formatted"],
                  },
                  "value"
                ),
              ];
            }),
          });
        };
      rQ.propTypes = {
        slice: et().object.isRequired,
        axis: et().oneOf(["x", "y"]).isRequired,
      };
      var rJ = (0, s.memo)(rQ),
        rK = {
          data: et().arrayOf(
            et().shape({
              id: et().oneOfType([et().string, et().number]).isRequired,
              data: et().arrayOf(
                et().shape({
                  x: et().oneOfType([
                    et().number,
                    et().string,
                    et().instanceOf(Date),
                  ]),
                  y: et().oneOfType([
                    et().number,
                    et().string,
                    et().instanceOf(Date),
                  ]),
                })
              ).isRequired,
            })
          ).isRequired,
          xScale: et().object.isRequired,
          xFormat: et().oneOfType([et().func, et().string]),
          yScale: et().object.isRequired,
          yFormat: et().oneOfType([et().func, et().string]),
          layers: et().arrayOf(
            et().oneOfType([
              et().oneOf([
                "grid",
                "markers",
                "axes",
                "areas",
                "crosshair",
                "lines",
                "slices",
                "points",
                "mesh",
                "legends",
              ]),
              et().func,
            ])
          ).isRequired,
          curve: u.VZ.isRequired,
          axisTop: n2,
          axisRight: n2,
          axisBottom: n2,
          axisLeft: n2,
          enableGridX: et().bool.isRequired,
          enableGridY: et().bool.isRequired,
          gridXValues: et().oneOfType([
            et().number,
            et().arrayOf(
              et().oneOfType([et().number, et().string, et().instanceOf(Date)])
            ),
          ]),
          gridYValues: et().oneOfType([
            et().number,
            et().arrayOf(
              et().oneOfType([et().number, et().string, et().instanceOf(Date)])
            ),
          ]),
          enablePoints: et().bool.isRequired,
          pointSymbol: et().func,
          pointSize: et().number.isRequired,
          pointColor: et().any.isRequired,
          pointBorderWidth: et().number.isRequired,
          pointBorderColor: et().any.isRequired,
          enablePointLabel: et().bool.isRequired,
          pointLabel: et().oneOfType([et().string, et().func]).isRequired,
          markers: et().arrayOf(
            et().shape({
              axis: et().oneOf(["x", "y"]).isRequired,
              value: et().oneOfType([
                et().number,
                et().string,
                et().instanceOf(Date),
              ]).isRequired,
              style: et().object,
            })
          ),
          colors: ey.isRequired,
          enableArea: et().bool.isRequired,
          areaOpacity: et().number.isRequired,
          areaBlendMode: u.wM.isRequired,
          areaBaselineValue: et().oneOfType([
            et().number,
            et().string,
            et().instanceOf(Date),
          ]).isRequired,
          lineWidth: et().number.isRequired,
          legends: et().arrayOf(et().shape(rd)).isRequired,
          isInteractive: et().bool.isRequired,
          debugMesh: et().bool.isRequired,
          tooltip: et().oneOfType([et().func, et().object]).isRequired,
          enableSlices: et().oneOf(["x", "y", !1]).isRequired,
          debugSlices: et().bool.isRequired,
          sliceTooltip: et().oneOfType([et().func, et().object]).isRequired,
          enableCrosshair: et().bool.isRequired,
          crosshairType: et().string.isRequired,
        },
        r0 = r$(
          {},
          rK,
          {
            enablePointLabel: et().bool.isRequired,
            role: et().string.isRequired,
            useMesh: et().bool.isRequired,
          },
          u.w$,
          u._U
        ),
        r1 = r$({ pixelRatio: et().number.isRequired }, rK),
        r2 = {
          curve: "linear",
          xScale: { type: "point" },
          yScale: { type: "linear", min: 0, max: "auto" },
          layers: [
            "grid",
            "markers",
            "axes",
            "areas",
            "crosshair",
            "lines",
            "points",
            "slices",
            "mesh",
            "legends",
          ],
          axisBottom: {},
          axisLeft: {},
          enableGridX: !0,
          enableGridY: !0,
          enablePoints: !0,
          pointSize: 6,
          pointColor: { from: "color" },
          pointBorderWidth: 0,
          pointBorderColor: { theme: "background" },
          enablePointLabel: !1,
          pointLabel: "yFormatted",
          colors: { scheme: "nivo" },
          enableArea: !1,
          areaBaselineValue: 0,
          areaOpacity: 0.2,
          areaBlendMode: "normal",
          lineWidth: 2,
          legends: [],
          isInteractive: !0,
          tooltip: rX,
          enableSlices: !1,
          debugSlices: !1,
          sliceTooltip: rJ,
          debugMesh: !1,
          enableCrosshair: !0,
          crosshairType: "bottom-left",
        },
        r3 = r$({}, r2, {
          enablePointLabel: !1,
          useMesh: !1,
          animate: !0,
          motionConfig: "gentle",
          defs: [],
          fill: [],
          role: "img",
        }),
        r6 = r$({}, r2, {
          pixelRatio:
            ("undefined" != typeof window && window.devicePixelRatio) || 1,
        }),
        r5 = function (e) {
          var t = e.curve;
          return (0, s.useMemo)(
            function () {
              return rk()
                .defined(function (e) {
                  return null !== e.x && null !== e.y;
                })
                .x(function (e) {
                  return e.x;
                })
                .y(function (e) {
                  return e.y;
                })
                .curve((0, u.Bg)(t));
            },
            [t]
          );
        },
        r8 = function (e) {
          var t = e.curve,
            n = e.yScale,
            r = e.areaBaselineValue;
          return (0, s.useMemo)(
            function () {
              return (function () {
                var e = rx,
                  t = null,
                  n = rv(0),
                  r = rw,
                  i = rv(!0),
                  o = null,
                  a = r_.Z,
                  s = null;
                function u(u) {
                  var c,
                    f,
                    l,
                    d,
                    h,
                    p = u.length,
                    g = !1,
                    b = Array(p),
                    m = Array(p);
                  for (null == o && (s = a((h = ry()))), c = 0; c <= p; ++c) {
                    if (!(c < p && i((d = u[c]), c, u)) === g) {
                      if ((g = !g)) (f = c), s.areaStart(), s.lineStart();
                      else {
                        for (s.lineEnd(), s.lineStart(), l = c - 1; l >= f; --l)
                          s.point(b[l], m[l]);
                        s.lineEnd(), s.areaEnd();
                      }
                    }
                    g &&
                      ((b[c] = +e(d, c, u)),
                      (m[c] = +n(d, c, u)),
                      s.point(t ? +t(d, c, u) : b[c], r ? +r(d, c, u) : m[c]));
                  }
                  if (h) return (s = null), h + "" || null;
                }
                function c() {
                  return rk().defined(i).curve(a).context(o);
                }
                return (
                  (u.x = function (n) {
                    return arguments.length
                      ? ((e = "function" == typeof n ? n : rv(+n)),
                        (t = null),
                        u)
                      : e;
                  }),
                  (u.x0 = function (t) {
                    return arguments.length
                      ? ((e = "function" == typeof t ? t : rv(+t)), u)
                      : e;
                  }),
                  (u.x1 = function (e) {
                    return arguments.length
                      ? ((t =
                          null == e
                            ? null
                            : "function" == typeof e
                            ? e
                            : rv(+e)),
                        u)
                      : t;
                  }),
                  (u.y = function (e) {
                    return arguments.length
                      ? ((n = "function" == typeof e ? e : rv(+e)),
                        (r = null),
                        u)
                      : n;
                  }),
                  (u.y0 = function (e) {
                    return arguments.length
                      ? ((n = "function" == typeof e ? e : rv(+e)), u)
                      : n;
                  }),
                  (u.y1 = function (e) {
                    return arguments.length
                      ? ((r =
                          null == e
                            ? null
                            : "function" == typeof e
                            ? e
                            : rv(+e)),
                        u)
                      : r;
                  }),
                  (u.lineX0 = u.lineY0 =
                    function () {
                      return c().x(e).y(n);
                    }),
                  (u.lineY1 = function () {
                    return c().x(e).y(r);
                  }),
                  (u.lineX1 = function () {
                    return c().x(t).y(n);
                  }),
                  (u.defined = function (e) {
                    return arguments.length
                      ? ((i = "function" == typeof e ? e : rv(!!e)), u)
                      : i;
                  }),
                  (u.curve = function (e) {
                    return arguments.length
                      ? ((a = e), null != o && (s = a(o)), u)
                      : a;
                  }),
                  (u.context = function (e) {
                    return arguments.length
                      ? (null == e ? (o = s = null) : (s = a((o = e))), u)
                      : o;
                  }),
                  u
                );
              })()
                .defined(function (e) {
                  return null !== e.x && null !== e.y;
                })
                .x(function (e) {
                  return e.x;
                })
                .y1(function (e) {
                  return e.y;
                })
                .curve((0, u.Bg)(t))
                .y0(n(r));
            },
            [t, n, r]
          );
        },
        r7 = function (e) {
          var t = e.enableSlices,
            n = e.points,
            r = e.width,
            i = e.height;
          return (0, s.useMemo)(
            function () {
              if (!1 === t) return [];
              if ("x" === t) {
                var e = new Map();
                return (
                  n.forEach(function (t) {
                    null !== t.data.x &&
                      null !== t.data.y &&
                      (e.has(t.x) ? e.get(t.x).push(t) : e.set(t.x, [t]));
                  }),
                  Array.from(e.entries())
                    .sort(function (e, t) {
                      return e[0] - t[0];
                    })
                    .map(function (e, t, n) {
                      var o,
                        a = e[0],
                        s = e[1],
                        u = n[t - 1],
                        c = n[t + 1];
                      return {
                        id: a,
                        x0: (o = u ? a - (a - u[0]) / 2 : a),
                        x: a,
                        y0: 0,
                        y: 0,
                        width: c ? a - o + (c[0] - a) / 2 : r - o,
                        height: i,
                        points: s.reverse(),
                      };
                    })
                );
              }
              if ("y" === t) {
                var o = new Map();
                return (
                  n.forEach(function (e) {
                    null !== e.data.x &&
                      null !== e.data.y &&
                      (o.has(e.y) ? o.get(e.y).push(e) : o.set(e.y, [e]));
                  }),
                  Array.from(o.entries())
                    .sort(function (e, t) {
                      return e[0] - t[0];
                    })
                    .map(function (e, t, n) {
                      var o,
                        a,
                        s = e[0],
                        u = e[1],
                        c = n[t - 1],
                        f = n[t + 1];
                      return (
                        (o = c ? s - (s - c[0]) / 2 : s),
                        (a = f ? s - o + (f[0] - s) / 2 : i - o),
                        {
                          id: s,
                          x0: 0,
                          x: 0,
                          y0: o,
                          y: s,
                          width: r,
                          height: a,
                          points: u.reverse(),
                        }
                      );
                    })
                );
              }
            },
            [t, n]
          );
        },
        r4 = function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            c = e.data,
            f = e.xScale,
            l = void 0 === f ? r3.xScale : f,
            d = e.xFormat,
            h = e.yScale,
            p = void 0 === h ? r3.yScale : h,
            g = e.yFormat,
            b = e.width,
            m = e.height,
            y = e.colors,
            v = void 0 === y ? r3.colors : y,
            _ = e.curve,
            x = void 0 === _ ? r3.curve : _,
            w = e.areaBaselineValue,
            k = void 0 === w ? r3.areaBaselineValue : w,
            M = e.pointColor,
            T = void 0 === M ? r3.pointColor : M,
            S = e.pointBorderColor,
            C = void 0 === S ? r3.pointBorderColor : S,
            O = e.enableSlices,
            j = void 0 === O ? r3.enableSlicesTooltip : O,
            R = (0, u.O_)(d),
            q = (0, u.O_)(g),
            E = (0, s.useMemo)(
              function () {
                return ev(v, "id");
              },
              [v, "id"]
            ),
            P = (0, u.Fg)(),
            z = em(T, P),
            A = em(C, P),
            Z = (0, s.useState)([]),
            D = Z[0],
            N = Z[1],
            U = (0, s.useMemo)(
              function () {
                return nN(
                  c.filter(function (e) {
                    return -1 === D.indexOf(e.id);
                  }),
                  l,
                  p,
                  b,
                  m
                );
              },
              [c, D, l, p, b, m]
            ),
            F = U.xScale,
            L = U.yScale,
            W = U.series,
            Y = (0, s.useMemo)(
              function () {
                var e = c.map(function (e) {
                    return { id: e.id, label: e.id, color: E(e) };
                  }),
                  t = e
                    .map(function (e) {
                      return r$(
                        {},
                        W.find(function (t) {
                          return t.id === e.id;
                        }),
                        { color: e.color }
                      );
                    })
                    .filter(function (e) {
                      return !!e.id;
                    });
                return {
                  legendData: e
                    .map(function (e) {
                      return r$({}, e, {
                        hidden: !t.find(function (t) {
                          return t.id === e.id;
                        }),
                      });
                    })
                    .reverse(),
                  series: t,
                };
              },
              [c, W, E]
            ),
            I = Y.legendData,
            B = Y.series,
            H = (0, s.useCallback)(function (e) {
              N(function (t) {
                return t.indexOf(e) > -1
                  ? t.filter(function (t) {
                      return t !== e;
                    })
                  : [].concat(t, [e]);
              });
            }, []),
            V =
              ((n = (t = {
                series: B,
                getPointColor: z,
                getPointBorderColor: A,
                formatX: R,
                formatY: q,
              }).series),
              (r = t.getPointColor),
              (i = t.getPointBorderColor),
              (o = t.formatX),
              (a = t.formatY),
              (0, s.useMemo)(
                function () {
                  return n.reduce(function (e, t) {
                    return [].concat(
                      e,
                      t?.data
                        ?.filter(function (e) {
                          return null !== e.position.x && null !== e.position.y;
                        })
                        .map(function (n, s) {
                          var u = {
                            id: t.id + "." + s,
                            index: e.length + s,
                            serieId: t.id,
                            serieColor: t.color,
                            x: n.position.x,
                            y: n.position.y,
                          };
                          return (
                            (u.color = r(t)),
                            (u.borderColor = i(u)),
                            (u.data = r$({}, n.data, {
                              xFormatted: o(n.data.x),
                              yFormatted: a(n.data.y),
                            })),
                            u
                          );
                        })
                    );
                  }, []);
                },
                [n, r, i, o, a]
              )),
            $ = r7({ enableSlices: j, points: V, width: b, height: m });
          return {
            legendData: I,
            toggleSerie: H,
            lineGenerator: r5({ curve: x }),
            areaGenerator: r8({ curve: x, yScale: L, areaBaselineValue: k }),
            getColor: E,
            series: B,
            xScale: F,
            yScale: L,
            slices: $,
            points: V,
          };
        },
        r9 = function (e) {
          var t = e.areaBlendMode,
            n = e.areaOpacity,
            r = e.color,
            i = e.fill,
            o = e.path,
            a = (0, u.tf)(),
            s = a.animate,
            c = a.config,
            f = (0, u.NS)(o),
            l = (0, e_.useSpring)({ color: r, config: c, immediate: !s });
          return (0, n$.jsx)(e_.animated.path, {
            d: f,
            fill: i || l.color,
            fillOpacity: n,
            strokeWidth: 0,
            style: { mixBlendMode: t },
          });
        };
      r9.propTypes = {
        areaBlendMode: u.wM.isRequired,
        areaOpacity: et().number.isRequired,
        color: et().string,
        fill: et().string,
        path: et().string.isRequired,
      };
      var ie = function (e) {
        var t = e.areaGenerator,
          n = e.areaOpacity,
          r = e.areaBlendMode,
          i = e.lines.slice(0).reverse();
        return (0, n$.jsx)("g", {
          children: i.map(function (e) {
            return (0, n$.jsx)(
              r9,
              r$(
                {
                  path: t(
                    e.data.map(function (e) {
                      return e.position;
                    })
                  ),
                },
                r$({ areaOpacity: n, areaBlendMode: r }, e)
              ),
              e.id
            );
          }),
        });
      };
      ie.propTypes = {
        areaGenerator: et().func.isRequired,
        areaOpacity: et().number.isRequired,
        areaBlendMode: u.wM.isRequired,
        lines: et().arrayOf(et().object).isRequired,
      };
      var it = (0, s.memo)(ie),
        ir = function (e) {
          var t = e.lineGenerator,
            n = e.points,
            r = e.color,
            i = e.thickness,
            o = (0, s.useMemo)(
              function () {
                return t(n);
              },
              [t, n]
            ),
            a = (0, u.NS)(o);
          return (0, n$.jsx)(e_.animated.path, {
            d: a,
            fill: "none",
            strokeWidth: i,
            stroke: r,
          });
        };
      ir.propTypes = {
        points: et().arrayOf(
          et().shape({
            x: et().oneOfType([et().string, et().number]),
            y: et().oneOfType([et().string, et().number]),
          })
        ),
        lineGenerator: et().func.isRequired,
        color: et().string.isRequired,
        thickness: et().number.isRequired,
      };
      var ii = (0, s.memo)(ir),
        io = function (e) {
          var t = e.lines,
            n = e.lineGenerator,
            r = e.lineWidth;
          return t
            .slice(0)
            .reverse()
            .map(function (e) {
              var t = e.id,
                i = e.data,
                o = e.color;
              return (0, n$.jsx)(
                ii,
                {
                  id: t,
                  points: i?.map(function (e) {
                    return e.position;
                  }),
                  lineGenerator: n,
                  color: o,
                  thickness: r,
                },
                t
              );
            });
        };
      io.propTypes = {
        lines: et().arrayOf(
          et().shape({
            id: et().oneOfType([et().string, et().number]).isRequired,
            color: et().string.isRequired,
            data: et().arrayOf(
              et().shape({
                data: et().shape({
                  x: et().oneOfType([
                    et().string,
                    et().number,
                    et().instanceOf(Date),
                  ]),
                  y: et().oneOfType([
                    et().string,
                    et().number,
                    et().instanceOf(Date),
                  ]),
                }).isRequired,
                position: et().shape({ x: et().number, y: et().number })
                  .isRequired,
              })
            ).isRequired,
          })
        ).isRequired,
        lineWidth: et().number.isRequired,
        lineGenerator: et().func.isRequired,
      };
      var ia = (0, s.memo)(io),
        is = function (e) {
          var t = e.slice,
            n = e.axis,
            r = e.debug,
            i = e.tooltip,
            o = e.isCurrent,
            a = e.setCurrent,
            u = (0, rh.lL)(),
            c = u.showTooltipFromEvent,
            f = u.hideTooltip,
            l = (0, s.useCallback)(
              function (e) {
                c((0, s.createElement)(i, { slice: t, axis: n }), e, "right"),
                  a(t);
              },
              [c, i, t]
            ),
            d = (0, s.useCallback)(
              function (e) {
                c((0, s.createElement)(i, { slice: t, axis: n }), e, "right");
              },
              [c, i, t]
            ),
            h = (0, s.useCallback)(
              function () {
                f(), a(null);
              },
              [f]
            );
          return (0, n$.jsx)("rect", {
            x: t.x0,
            y: t.y0,
            width: t.width,
            height: t.height,
            stroke: "red",
            strokeWidth: r ? 1 : 0,
            strokeOpacity: 0.75,
            fill: "red",
            fillOpacity: o && r ? 0.35 : 0,
            onMouseEnter: l,
            onMouseMove: d,
            onMouseLeave: h,
          });
        };
      is.propTypes = {
        slice: et().object.isRequired,
        axis: et().oneOf(["x", "y"]).isRequired,
        debug: et().bool.isRequired,
        height: et().number.isRequired,
        tooltip: et().oneOfType([et().func, et().object]),
        isCurrent: et().bool.isRequired,
        setCurrent: et().func.isRequired,
      };
      var iu = (0, s.memo)(is),
        ic = function (e) {
          var t = e.slices,
            n = e.axis,
            r = e.debug,
            i = e.height,
            o = e.tooltip,
            a = e.current,
            s = e.setCurrent;
          return t.map(function (e) {
            return (0,
            n$.jsx)(iu, { slice: e, axis: n, debug: r, height: i, tooltip: o, setCurrent: s, isCurrent: null !== a && a.id === e.id }, e.id);
          });
        };
      ic.propTypes = {
        slices: et().arrayOf(
          et().shape({
            id: et().oneOfType([
              et().number,
              et().string,
              et().instanceOf(Date),
            ]).isRequired,
            x: et().number.isRequired,
            y: et().number.isRequired,
            points: et().arrayOf(et().object).isRequired,
          })
        ).isRequired,
        axis: et().oneOf(["x", "y"]).isRequired,
        debug: et().bool.isRequired,
        height: et().number.isRequired,
        tooltip: et().oneOfType([et().func, et().object]).isRequired,
        current: et().object,
        setCurrent: et().func.isRequired,
      };
      var il = (0, s.memo)(ic),
        id = function (e) {
          var t = e.points,
            n = e.symbol,
            r = e.size,
            i = e.borderWidth,
            o = e.enableLabel,
            a = e.label,
            s = e.labelYOffset,
            c = (0, u.Fg)(),
            f = (0, u.ji)(a),
            l = t
              .slice(0)
              .reverse()
              .map(function (e) {
                return {
                  id: e.id,
                  x: e.x,
                  y: e.y,
                  datum: e.data,
                  fill: e.color,
                  stroke: e.borderColor,
                  label: o ? f(e.data) : null,
                };
              });
          return (0, n$.jsx)("g", {
            children: l.map(function (e) {
              return (0,
              n$.jsx)(u.F_, { x: e.x, y: e.y, datum: e.datum, symbol: n, size: r, color: e.fill, borderWidth: i, borderColor: e.stroke, label: e.label, labelYOffset: s, theme: c }, e.id);
            }),
          });
        };
      id.propTypes = {
        points: et().arrayOf(et().object),
        symbol: et().func,
        size: et().number.isRequired,
        color: et().func.isRequired,
        borderWidth: et().number.isRequired,
        borderColor: et().func.isRequired,
        enableLabel: et().bool.isRequired,
        label: et().oneOfType([et().string, et().func]).isRequired,
        labelYOffset: et().number,
      };
      var ih = (0, s.memo)(id),
        ip = function (e) {
          var t = e.points,
            n = e.width,
            r = e.height,
            i = e.margin,
            o = e.setCurrent,
            a = e.onMouseEnter,
            u = e.onMouseMove,
            c = e.onMouseLeave,
            f = e.onClick,
            l = e.tooltip,
            d = e.debug,
            h = (0, rh.lL)(),
            p = h.showTooltipAt,
            g = h.hideTooltip,
            b = (0, s.useCallback)(
              function (e, t) {
                p(
                  (0, s.createElement)(l, { point: e }),
                  [e.x + i.left, e.y + i.top],
                  "top"
                ),
                  o(e),
                  a && a(e, t);
              },
              [o, p, l, a, i]
            ),
            m = (0, s.useCallback)(
              function (e, t) {
                p(
                  (0, s.createElement)(l, { point: e }),
                  [e.x + i.left, e.y + i.top],
                  "top"
                ),
                  o(e),
                  u && u(e, t);
              },
              [o, p, l, u]
            ),
            y = (0, s.useCallback)(
              function (e, t) {
                g(), o(null), c && c(e, t);
              },
              [g, o, c]
            ),
            v = (0, s.useCallback)(
              function (e, t) {
                f && f(e, t);
              },
              [f]
            );
          return (0, n$.jsx)(rB, {
            nodes: t,
            width: n,
            height: r,
            onMouseEnter: b,
            onMouseMove: m,
            onMouseLeave: y,
            onClick: v,
            debug: d,
          });
        };
      ip.propTypes = {
        points: et().arrayOf(et().object).isRequired,
        width: et().number.isRequired,
        height: et().number.isRequired,
        margin: et().object.isRequired,
        setCurrent: et().func.isRequired,
        onMouseEnter: et().func,
        onMouseMove: et().func,
        onMouseLeave: et().func,
        onClick: et().func,
        tooltip: et().oneOfType([et().func, et().object]).isRequired,
        debug: et().bool.isRequired,
      };
      var ig = (0, s.memo)(ip),
        ib = function (e) {
          var t = e.data,
            n = e.xScale,
            r = e.xFormat,
            i = e.yScale,
            o = e.yFormat,
            a = e.layers,
            c = e.curve,
            f = e.areaBaselineValue,
            l = e.colors,
            d = e.margin,
            h = e.width,
            p = e.height,
            g = e.axisTop,
            b = e.axisRight,
            m = e.axisBottom,
            y = e.axisLeft,
            v = e.enableGridX,
            _ = e.enableGridY,
            x = e.gridXValues,
            w = e.gridYValues,
            k = e.lineWidth,
            M = e.enableArea,
            T = e.areaOpacity,
            S = e.areaBlendMode,
            C = e.enablePoints,
            O = e.pointSymbol,
            j = e.pointSize,
            R = e.pointColor,
            q = e.pointBorderWidth,
            E = e.pointBorderColor,
            P = e.enablePointLabel,
            z = e.pointLabel,
            A = e.pointLabelYOffset,
            Z = e.defs,
            D = e.fill,
            N = e.markers,
            U = e.legends,
            F = e.isInteractive,
            L = e.useMesh,
            W = e.debugMesh,
            Y = e.onMouseEnter,
            I = e.onMouseMove,
            B = e.onMouseLeave,
            H = e.onClick,
            V = e.tooltip,
            $ = e.enableSlices,
            G = e.debugSlices,
            X = e.sliceTooltip,
            Q = e.enableCrosshair,
            J = e.crosshairType,
            K = e.role,
            ee = (0, u.Bs)(h, p, d),
            et = ee.margin,
            en = ee.innerWidth,
            er = ee.innerHeight,
            ei = ee.outerWidth,
            eo = ee.outerHeight,
            ea = r4({
              data: t,
              xScale: n,
              xFormat: r,
              yScale: i,
              yFormat: o,
              width: en,
              height: er,
              colors: l,
              curve: c,
              areaBaselineValue: f,
              pointColor: R,
              pointBorderColor: E,
              enableSlices: $,
            }),
            es = ea.legendData,
            eu = ea.toggleSerie,
            ec = ea.lineGenerator,
            ef = ea.areaGenerator,
            el = ea.series,
            ed = ea.xScale,
            eh = ea.yScale,
            ep = ea.slices,
            eg = ea.points,
            eb = (0, u.Fg)(),
            ey = em(R, eb),
            ev = em(E, eb),
            e_ = (0, s.useState)(null),
            ex = e_[0],
            ew = e_[1],
            ek = (0, s.useState)(null),
            eM = ek[0],
            eT = ek[1],
            eS = {
              grid: (0, n$.jsx)(
                n7,
                {
                  theme: eb,
                  width: en,
                  height: er,
                  xScale: v ? ed : null,
                  yScale: _ ? eh : null,
                  xValues: x,
                  yValues: w,
                },
                "grid"
              ),
              markers: (0, n$.jsx)(
                u.TL,
                {
                  markers: N,
                  width: en,
                  height: er,
                  xScale: ed,
                  yScale: eh,
                  theme: eb,
                },
                "markers"
              ),
              axes: (0, n$.jsx)(
                n6,
                {
                  xScale: ed,
                  yScale: eh,
                  width: en,
                  height: er,
                  theme: eb,
                  top: g,
                  right: b,
                  bottom: m,
                  left: y,
                },
                "axes"
              ),
              areas: null,
              lines: (0, n$.jsx)(
                ia,
                { lines: el, lineGenerator: ec, lineWidth: k },
                "lines"
              ),
              slices: null,
              points: null,
              crosshair: null,
              mesh: null,
              legends: U.map(function (e, t) {
                return (0,
                n$.jsx)(rc, r$({}, e, { containerWidth: en, containerHeight: er, data: e.data || es, theme: eb, toggleSerie: e.toggleSerie ? eu : void 0 }), "legend." + t);
              }),
            },
            eC = (0, u.yU)(Z, el, D);
          return (
            M &&
              (eS.areas = (0, n$.jsx)(
                it,
                {
                  areaGenerator: ef,
                  areaOpacity: T,
                  areaBlendMode: S,
                  lines: el,
                },
                "areas"
              )),
            F &&
              !1 !== $ &&
              (eS.slices = (0, n$.jsx)(
                il,
                {
                  slices: ep,
                  axis: $,
                  debug: G,
                  height: er,
                  tooltip: X,
                  current: eM,
                  setCurrent: eT,
                },
                "slices"
              )),
            C &&
              (eS.points = (0, n$.jsx)(
                ih,
                {
                  points: eg,
                  symbol: O,
                  size: j,
                  color: ey,
                  borderWidth: q,
                  borderColor: ev,
                  enableLabel: P,
                  label: z,
                  labelYOffset: A,
                },
                "points"
              )),
            F &&
              Q &&
              (null !== ex &&
                (eS.crosshair = (0, n$.jsx)(
                  rh.YS,
                  { width: en, height: er, x: ex.x, y: ex.y, type: J },
                  "crosshair"
                )),
              null !== eM &&
                (eS.crosshair = (0, n$.jsx)(
                  rh.YS,
                  { width: en, height: er, x: eM.x, y: eM.y, type: $ },
                  "crosshair"
                ))),
            F &&
              L &&
              !1 === $ &&
              (eS.mesh = (0, n$.jsx)(
                ig,
                {
                  points: eg,
                  width: en,
                  height: er,
                  margin: et,
                  current: ex,
                  setCurrent: ew,
                  onMouseEnter: Y,
                  onMouseMove: I,
                  onMouseLeave: B,
                  onClick: H,
                  tooltip: V,
                  debug: W,
                },
                "mesh"
              )),
            (0, n$.jsx)(u.tM, {
              defs: eC,
              width: ei,
              height: eo,
              margin: et,
              role: K,
              children: a.map(function (t, n) {
                return "function" == typeof t
                  ? (0, n$.jsx)(
                      s.Fragment,
                      {
                        children: t(
                          r$({}, e, {
                            innerWidth: en,
                            innerHeight: er,
                            series: el,
                            slices: ep,
                            points: eg,
                            xScale: ed,
                            yScale: eh,
                            lineGenerator: ec,
                            areaGenerator: ef,
                            currentPoint: ex,
                            setCurrentPoint: ew,
                            currentSlice: eM,
                            setCurrentSlice: eT,
                          })
                        ),
                      },
                      n
                    )
                  : eS[t];
              }),
            })
          );
        };
      (ib.propTypes = r0), (ib.defaultProps = r3);
      var im = (0, u.li)(ib),
        iy = function (e) {
          return (0, n$.jsx)(u.d, {
            children: function (t) {
              var n = t.width,
                r = t.height;
              return (0, n$.jsx)(im, r$({ width: n, height: r }, e));
            },
          });
        },
        iv = function (e) {
          var t = e.width,
            n = e.height,
            r = e.margin,
            i = e.pixelRatio,
            o = e.data,
            a = e.xScale,
            c = e.xFormat,
            f = e.yScale,
            l = e.yFormat,
            d = e.curve,
            h = e.layers,
            p = e.colors,
            g = e.lineWidth,
            b = e.enableArea,
            m = e.areaBaselineValue,
            y = e.areaOpacity,
            v = e.enablePoints,
            _ = e.pointSize,
            x = e.pointColor,
            w = e.pointBorderWidth,
            k = e.pointBorderColor,
            M = e.enableGridX,
            T = e.gridXValues,
            S = e.enableGridY,
            C = e.gridYValues,
            O = e.axisTop,
            j = e.axisRight,
            R = e.axisBottom,
            q = e.axisLeft,
            E = e.legends,
            P = e.isInteractive,
            z = e.debugMesh,
            A = e.onMouseLeave,
            Z = e.onClick,
            D = e.tooltip,
            N = e.canvasRef,
            U = (0, s.useRef)(null),
            F = (0, u.Bs)(t, n, r),
            L = F.margin,
            W = F.innerWidth,
            Y = F.innerHeight,
            I = F.outerWidth,
            B = F.outerHeight,
            H = (0, u.Fg)(),
            V = (0, s.useState)(null),
            $ = V[0],
            G = V[1],
            X = r4({
              data: o,
              xScale: a,
              xFormat: c,
              yScale: f,
              yFormat: l,
              width: W,
              height: Y,
              colors: p,
              curve: d,
              areaBaselineValue: m,
              pointColor: x,
              pointBorderColor: k,
            }),
            Q = X.lineGenerator,
            J = X.areaGenerator,
            K = X.series,
            ee = X.xScale,
            et = X.yScale,
            en = X.points,
            er = rI({ points: en, width: W, height: Y, debug: z }),
            ei = er.delaunay,
            eo = er.voronoi;
          (0, s.useEffect)(
            function () {
              N && (N.current = U.current),
                (U.current.width = I * i),
                (U.current.height = B * i);
              var e = U.current.getContext("2d");
              e.scale(i, i),
                (e.fillStyle = H.background),
                e.fillRect(0, 0, I, B),
                e.translate(L.left, L.top),
                h.forEach(function (t) {
                  if (
                    ("function" == typeof t &&
                      t({
                        ctx: e,
                        innerWidth: W,
                        innerHeight: Y,
                        series: K,
                        points: en,
                        xScale: ee,
                        yScale: et,
                        lineWidth: g,
                        lineGenerator: Q,
                        areaGenerator: J,
                        currentPoint: $,
                        setCurrentPoint: G,
                      }),
                    "grid" === t &&
                      H.grid.line.strokeWidth > 0 &&
                      ((e.lineWidth = H.grid.line.strokeWidth),
                      (e.strokeStyle = H.grid.line.stroke),
                      M &&
                        re(e, {
                          width: W,
                          height: Y,
                          scale: ee,
                          axis: "x",
                          values: T,
                        }),
                      S &&
                        re(e, {
                          width: W,
                          height: Y,
                          scale: et,
                          axis: "y",
                          values: C,
                        })),
                    "axes" === t &&
                      n9(e, {
                        xScale: ee,
                        yScale: et,
                        width: W,
                        height: Y,
                        top: O,
                        right: j,
                        bottom: R,
                        left: q,
                        theme: H,
                      }),
                    "areas" === t &&
                      !0 === b &&
                      (e.save(),
                      (e.globalAlpha = y),
                      J.context(e),
                      K.forEach(function (t) {
                        (e.fillStyle = t.color),
                          e.beginPath(),
                          J(
                            t.data.map(function (e) {
                              return e.position;
                            })
                          ),
                          e.fill();
                      }),
                      e.restore()),
                    "lines" === t &&
                      (Q.context(e),
                      K.forEach(function (t) {
                        (e.strokeStyle = t.color),
                          (e.lineWidth = g),
                          e.beginPath(),
                          Q(
                            t.data.map(function (e) {
                              return e.position;
                            })
                          ),
                          e.stroke();
                      })),
                    "points" === t &&
                      !0 === v &&
                      _ > 0 &&
                      en.forEach(function (t) {
                        (e.fillStyle = t.color),
                          e.beginPath(),
                          e.arc(t.x, t.y, _ / 2, 0, 2 * Math.PI),
                          e.fill(),
                          w > 0 &&
                            ((e.strokeStyle = t.borderColor),
                            (e.lineWidth = w),
                            e.stroke());
                      }),
                    "mesh" === t &&
                      !0 === z &&
                      (rH(e, eo), $ && rV(e, eo, $.index)),
                    "legends" === t)
                  ) {
                    var n = K.map(function (e) {
                      return { id: e.id, label: e.id, color: e.color };
                    }).reverse();
                    E.forEach(function (t) {
                      rl(
                        e,
                        r$({}, t, {
                          data: t.data || n,
                          containerWidth: W,
                          containerHeight: Y,
                          theme: H,
                        })
                      );
                    });
                  }
                });
            },
            [
              U,
              I,
              B,
              h,
              H,
              Q,
              K,
              ee,
              et,
              M,
              T,
              S,
              C,
              O,
              j,
              R,
              q,
              E,
              en,
              v,
              _,
              $,
            ]
          );
          var ea = (0, s.useCallback)(
              function (e) {
                var t = (0, u.P6)(U.current, e),
                  n = t[0],
                  r = t[1];
                return (0, u.zn)(L.left, L.top, W, Y, n, r)
                  ? en[ei.find(n - L.left, r - L.top)]
                  : null;
              },
              [U, L, W, Y, ei]
            ),
            es = (0, rh.lL)(),
            eu = es.showTooltipFromEvent,
            ec = es.hideTooltip,
            ef = (0, s.useCallback)(
              function (e) {
                var t = ea(e);
                G(t), t ? eu((0, s.createElement)(D, { point: t }), e) : ec();
              },
              [ea, G, eu, ec, D]
            ),
            el = (0, s.useCallback)(
              function (e) {
                ec(), G(null), $ && A && A($, e);
              },
              [ec, G, A]
            ),
            ed = (0, s.useCallback)(
              function (e) {
                if (Z) {
                  var t = ea(e);
                  t && Z(t, e);
                }
              },
              [ea, Z]
            );
          return (0, n$.jsx)("canvas", {
            ref: U,
            width: I * i,
            height: B * i,
            style: { width: I, height: B, cursor: P ? "auto" : "normal" },
            onMouseEnter: P ? ef : void 0,
            onMouseMove: P ? ef : void 0,
            onMouseLeave: P ? el : void 0,
            onClick: P ? ed : void 0,
          });
        };
      (iv.propTypes = r1), (iv.defaultProps = r6);
      var i_ = (0, u.li)(iv),
        ix = (0, s.forwardRef)(function (e, t) {
          return (0, n$.jsx)(i_, r$({}, e, { canvasRef: t }));
        }),
        iw = (0, s.forwardRef)(function (e, t) {
          return (0, n$.jsx)(u.d, {
            children: function (n) {
              var r = n.width,
                i = n.height;
              return (0, n$.jsx)(
                ix,
                r$({ width: r, height: i }, e, { ref: t })
              );
            },
          });
        });
    },
    88797: function (e, t, n) {
      "use strict";
      n.d(t, {
        Af: function () {
          return l;
        },
        L8: function () {
          return v;
        },
        YS: function () {
          return b;
        },
        Zb: function () {
          return m;
        },
        _0: function () {
          return _;
        },
        _5: function () {
          return d;
        },
        lL: function () {
          return x;
        },
        pn: function () {
          return M;
        },
        u: function () {
          return k;
        },
        zI: function () {
          return p;
        },
      });
      var r = n(2784),
        i = n(75868),
        o = n(36458),
        a = n(52322);
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var u = {
          pointerEvents: "none",
          position: "absolute",
          zIndex: 10,
          top: 0,
          left: 0,
        },
        c = function (e, t) {
          return "translate(" + e + "px, " + t + "px)";
        },
        f = (0, r.memo)(function (e) {
          var t,
            n = e.position,
            f = e.anchor,
            l = e.children,
            d = (0, o.Fg)(),
            h = (0, o.tf)(),
            p = h.animate,
            g = h.config,
            b = (0, o.xE)(),
            m = b[0],
            y = b[1],
            v = (0, r.useRef)(!1),
            _ = void 0,
            x = !1,
            w = y.width > 0 && y.height > 0,
            k = Math.round(n[0]),
            M = Math.round(n[1]);
          w &&
            ("top" === f
              ? ((k -= y.width / 2), (M -= y.height + 14))
              : "right" === f
              ? ((k += 14), (M -= y.height / 2))
              : "bottom" === f
              ? ((k -= y.width / 2), (M += 14))
              : "left" === f
              ? ((k -= y.width + 14), (M -= y.height / 2))
              : "center" === f && ((k -= y.width / 2), (M -= y.height / 2)),
            (_ = { transform: c(k, M) }),
            v.current || (x = !0),
            (v.current = [k, M]));
          var T = (0, i.useSpring)({ to: _, config: g, immediate: !p || x }),
            S = s({}, u, d.tooltip, {
              transform: null != (t = T.transform) ? t : c(k, M),
            });
          return (0, a.jsx)(i.animated.div, { ref: m, style: S, children: l });
        });
      f.displayName = "TooltipWrapper";
      var l = (0, r.memo)(function (e) {
          var t = e.size,
            n = void 0 === t ? 12 : t,
            r = e.color,
            i = e.style;
          return (0,
          a.jsx)("span", { style: s({ display: "block", width: n, height: n, background: r }, void 0 === i ? {} : i) });
        }),
        d = (0, r.memo)(function (e) {
          var t,
            n = e.id,
            r = e.value,
            i = e.format,
            s = e.enableChip,
            u = e.color,
            c = e.renderContent,
            f = (0, o.Fg)(),
            d = (0, o.O_)(i);
          if ("function" == typeof c) t = c();
          else {
            var h = r;
            void 0 !== d && void 0 !== h && (h = d(h)),
              (t = (0, a.jsxs)("div", {
                style: f.tooltip.basic,
                children: [
                  void 0 !== s &&
                    s &&
                    (0, a.jsx)(l, { color: u, style: f.tooltip.chip }),
                  void 0 !== h
                    ? (0, a.jsxs)("span", {
                        children: [
                          n,
                          ": ",
                          (0, a.jsx)("strong", { children: "" + h }),
                        ],
                      })
                    : n,
                ],
              }));
          }
          return (0, a.jsx)("div", { style: f.tooltip.container, children: t });
        }),
        h = { width: "100%", borderCollapse: "collapse" },
        p = (0, r.memo)(function (e) {
          var t,
            n = e.title,
            r = e.rows,
            i = void 0 === r ? [] : r,
            u = e.renderContent,
            c = (0, o.Fg)();
          return i.length
            ? ((t =
                "function" == typeof u
                  ? u()
                  : (0, a.jsxs)("div", {
                      children: [
                        n && n,
                        (0, a.jsx)("table", {
                          style: s({}, h, c.tooltip.table),
                          children: (0, a.jsx)("tbody", {
                            children: i.map(function (e, t) {
                              return (0, a.jsx)(
                                "tr",
                                {
                                  children: e.map(function (e, t) {
                                    return (0,
                                    a.jsx)("td", { style: c.tooltip.tableCell, children: e }, t);
                                  }),
                                },
                                t
                              );
                            }),
                          }),
                        }),
                      ],
                    })),
              (0, a.jsx)("div", { style: c.tooltip.container, children: t }))
            : null;
        });
      p.displayName = "TableTooltip";
      var g = (0, r.memo)(function (e) {
        var t = e.x0,
          n = e.x1,
          u = e.y0,
          c = e.y1,
          f = (0, o.Fg)(),
          l = (0, o.tf)(),
          d = l.animate,
          h = l.config,
          p = (0, r.useMemo)(
            function () {
              return s({}, f.crosshair.line, { pointerEvents: "none" });
            },
            [f.crosshair.line]
          ),
          g = (0, i.useSpring)({
            x1: t,
            x2: n,
            y1: u,
            y2: c,
            config: h,
            immediate: !d,
          });
        return (0,
        a.jsx)(i.animated.line, s({}, g, { fill: "none", style: p }));
      });
      g.displayName = "CrosshairLine";
      var b = (0, r.memo)(function (e) {
        var t,
          n,
          r = e.width,
          i = e.height,
          o = e.type,
          s = e.x,
          u = e.y;
        return (
          "cross" === o
            ? ((t = { x0: s, x1: s, y0: 0, y1: i }),
              (n = { x0: 0, x1: r, y0: u, y1: u }))
            : "top-left" === o
            ? ((t = { x0: s, x1: s, y0: 0, y1: u }),
              (n = { x0: 0, x1: s, y0: u, y1: u }))
            : "top" === o
            ? (t = { x0: s, x1: s, y0: 0, y1: u })
            : "top-right" === o
            ? ((t = { x0: s, x1: s, y0: 0, y1: u }),
              (n = { x0: s, x1: r, y0: u, y1: u }))
            : "right" === o
            ? (n = { x0: s, x1: r, y0: u, y1: u })
            : "bottom-right" === o
            ? ((t = { x0: s, x1: s, y0: u, y1: i }),
              (n = { x0: s, x1: r, y0: u, y1: u }))
            : "bottom" === o
            ? (t = { x0: s, x1: s, y0: u, y1: i })
            : "bottom-left" === o
            ? ((t = { x0: s, x1: s, y0: u, y1: i }),
              (n = { x0: 0, x1: s, y0: u, y1: u }))
            : "left" === o
            ? (n = { x0: 0, x1: s, y0: u, y1: u })
            : "x" === o
            ? (t = { x0: s, x1: s, y0: 0, y1: i })
            : "y" === o && (n = { x0: 0, x1: r, y0: u, y1: u }),
          (0, a.jsxs)(a.Fragment, {
            children: [
              t && (0, a.jsx)(g, { x0: t.x0, x1: t.x1, y0: t.y0, y1: t.y1 }),
              n && (0, a.jsx)(g, { x0: n.x0, x1: n.x1, y0: n.y0, y1: n.y1 }),
            ],
          })
        );
      });
      b.displayName = "Crosshair";
      var m = (0, r.createContext)({
          showTooltipAt: function () {},
          showTooltipFromEvent: function () {},
          hideTooltip: function () {},
        }),
        y = {
          isVisible: !1,
          position: [null, null],
          content: null,
          anchor: null,
        },
        v = (0, r.createContext)(y),
        _ = function (e) {
          var t = (0, r.useState)(y),
            n = t[0],
            i = t[1],
            o = (0, r.useCallback)(
              function (e, t, n) {
                void 0 === n && (n = "top"),
                  i({
                    isVisible: !0,
                    position: [t[0], t[1]],
                    anchor: n,
                    content: e,
                  });
              },
              [i]
            ),
            a = (0, r.useCallback)(
              function (t, n, r) {
                void 0 === r && (r = "top");
                var o = e.current.getBoundingClientRect(),
                  a = e.current.offsetWidth,
                  s = a === o.width ? 1 : a / o.width,
                  u = (n.clientX - o.left) * s,
                  c = (n.clientY - o.top) * s;
                ("left" !== r && "right" !== r) ||
                  (r = u < o.width / 2 ? "right" : "left"),
                  i({ isVisible: !0, position: [u, c], anchor: r, content: t });
              },
              [e, i]
            ),
            s = (0, r.useCallback)(
              function () {
                i(y);
              },
              [i]
            );
          return {
            actions: (0, r.useMemo)(
              function () {
                return {
                  showTooltipAt: o,
                  showTooltipFromEvent: a,
                  hideTooltip: s,
                };
              },
              [o, a, s]
            ),
            state: n,
          };
        },
        x = function () {
          var e = (0, r.useContext)(m);
          if (void 0 === e)
            throw Error("useTooltip must be used within a TooltipProvider");
          return e;
        },
        w = function () {
          var e = (0, r.useContext)(v);
          if (void 0 === e)
            throw Error(
              "useTooltipState must be used within a TooltipProvider"
            );
          return e;
        },
        k = function () {
          var e = w();
          return e.isVisible
            ? (0, a.jsx)(f, {
                position: e.position,
                anchor: e.anchor,
                children: e.content,
              })
            : null;
        },
        M = function (e) {
          var t = e.container,
            n = e.children,
            r = _(t),
            i = r.actions,
            o = r.state;
          return (0, a.jsx)(m.Provider, {
            value: i,
            children: (0, a.jsx)(v.Provider, { value: o, children: n }),
          });
        };
    },
    75868: function (e, t, n) {
      "use strict";
      n.d(t, {
        animated: function () {
          return k;
        },
        config: function () {
          return r.config;
        },
        to: function () {
          return r.to;
        },
        useSpring: function () {
          return r.useSpring;
        },
        useTransition: function () {
          return r.useTransition;
        },
      });
      var r = n(14989),
        i = n(28316),
        o = n(50036),
        a = n(96642);
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      let u = ["style", "children", "scrollTop", "scrollLeft"],
        c = /^--/,
        f = {},
        l = {
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
          strokeWidth: !0,
        },
        d = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
        h = ["Webkit", "Ms", "Moz", "O"];
      l = Object.keys(l).reduce(
        (e, t) => (h.forEach((n) => (e[d(n, t)] = e[t])), e),
        l
      );
      let p = ["x", "y", "z"],
        g = /^(matrix|translate|scale|rotate|skew)/,
        b = /^(translate)/,
        m = /^(rotate|skew)/,
        y = (e, t) => (o.is.num(e) && 0 !== e ? e + t : e),
        v = (e, t) =>
          o.is.arr(e)
            ? e.every((e) => v(e, t))
            : o.is.num(e)
            ? e === t
            : parseFloat(e) === t;
      class _ extends a.rS {
        constructor(e) {
          let { x: t, y: n, z: r } = e,
            i = s(e, p),
            a = [],
            u = [];
          (t || n || r) &&
            (a.push([t || 0, n || 0, r || 0]),
            u.push((e) => [
              `translate3d(${e.map((e) => y(e, "px")).join(",")})`,
              v(e, 0),
            ])),
            (0, o.rU)(i, (e, t) => {
              if ("transform" === t)
                a.push([e || ""]), u.push((e) => [e, "" === e]);
              else if (g.test(t)) {
                if ((delete i[t], o.is.und(e))) return;
                let n = b.test(t) ? "px" : m.test(t) ? "deg" : "";
                a.push((0, o.qo)(e)),
                  u.push(
                    "rotate3d" === t
                      ? ([e, t, r, i]) => [
                          `rotate3d(${e},${t},${r},${y(i, n)})`,
                          v(i, 0),
                        ]
                      : (e) => [
                          `${t}(${e.map((e) => y(e, n)).join(",")})`,
                          v(e, t.startsWith("scale") ? 1 : 0),
                        ]
                  );
              }
            }),
            a.length && (i.transform = new x(a, u)),
            super(i);
        }
      }
      class x extends o.B0 {
        constructor(e, t) {
          super(),
            (this._value = null),
            (this.inputs = e),
            (this.transforms = t);
        }
        get() {
          return this._value || (this._value = this._get());
        }
        _get() {
          let e = "",
            t = !0;
          return (
            (0, o.S6)(this.inputs, (n, r) => {
              let i = (0, o.je)(n[0]),
                [a, s] = this.transforms[r](o.is.arr(i) ? i : n.map(o.je));
              (e += " " + a), (t = t && s);
            }),
            t ? "none" : e
          );
        }
        observerAdded(e) {
          1 == e &&
            (0, o.S6)(this.inputs, (e) =>
              (0, o.S6)(e, (e) => (0, o.j$)(e) && (0, o.UI)(e, this))
            );
        }
        observerRemoved(e) {
          0 == e &&
            (0, o.S6)(this.inputs, (e) =>
              (0, o.S6)(e, (e) => (0, o.j$)(e) && (0, o.iL)(e, this))
            );
        }
        eventObserved(e) {
          "change" == e.type && (this._value = null), (0, o.k0)(this, e);
        }
      }
      let w = ["scrollTop", "scrollLeft"];
      r.Globals.assign({
        batchedUpdates: i.unstable_batchedUpdates,
        createStringInterpolator: o.qS,
        colors: o.O9,
      });
      let k = (0, a.Ld)(
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
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
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ],
        {
          applyAnimatedValues: function (e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            let n =
                "filter" === e.nodeName ||
                (e.parentNode && "filter" === e.parentNode.nodeName),
              { style: r, children: i, scrollTop: o, scrollLeft: a } = t,
              d = s(t, u),
              h = Object.values(d),
              p = Object.keys(d).map((t) =>
                n || e.hasAttribute(t)
                  ? t
                  : f[t] ||
                    (f[t] = t.replace(/([A-Z])/g, (e) => "-" + e.toLowerCase()))
              );
            for (let t in (void 0 !== i && (e.textContent = i), r))
              if (r.hasOwnProperty(t)) {
                var g;
                let n =
                  null == (g = r[t]) || "boolean" == typeof g || "" === g
                    ? ""
                    : "number" != typeof g ||
                      0 === g ||
                      c.test(t) ||
                      (l.hasOwnProperty(t) && l[t])
                    ? ("" + g).trim()
                    : g + "px";
                c.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
              }
            p.forEach((t, n) => {
              e.setAttribute(t, h[n]);
            }),
              void 0 !== o && (e.scrollTop = o),
              void 0 !== a && (e.scrollLeft = a);
          },
          createAnimatedStyle: (e) => new _(e),
          getComponentProps: (e) => s(e, w),
        }
      ).animated;
    },
    96642: function (e, t, n) {
      "use strict";
      n.d(t, {
        He: function () {
          return c;
        },
        Ld: function () {
          return w;
        },
        eC: function () {
          return d;
        },
        f3: function () {
          return u;
        },
        iG: function () {
          return l;
        },
        rS: function () {
          return p;
        },
        sb: function () {
          return m;
        },
        ys: function () {
          return s;
        },
      });
      var r = n(50036),
        i = n(2784);
      let o = Symbol.for("Animated:node"),
        a = (e) => !!e && e[o] === e,
        s = (e) => e && e[o],
        u = (e, t) => (0, r.dE)(e, o, t),
        c = (e) => e && e[o] && e[o].getPayload();
      class f {
        constructor() {
          (this.payload = void 0), u(this, this);
        }
        getPayload() {
          return this.payload || [];
        }
      }
      class l extends f {
        constructor(e) {
          super(),
            (this.done = !0),
            (this.elapsedTime = void 0),
            (this.lastPosition = void 0),
            (this.lastVelocity = void 0),
            (this.v0 = void 0),
            (this.durationProgress = 0),
            (this._value = e),
            r.is.num(this._value) && (this.lastPosition = this._value);
        }
        static create(e) {
          return new l(e);
        }
        getPayload() {
          return [this];
        }
        getValue() {
          return this._value;
        }
        setValue(e, t) {
          return (
            r.is.num(e) &&
              ((this.lastPosition = e),
              t &&
                ((e = Math.round(e / t) * t),
                this.done && (this.lastPosition = e))),
            this._value !== e && ((this._value = e), !0)
          );
        }
        reset() {
          let { done: e } = this;
          (this.done = !1),
            r.is.num(this._value) &&
              ((this.elapsedTime = 0),
              (this.durationProgress = 0),
              (this.lastPosition = this._value),
              e && (this.lastVelocity = null),
              (this.v0 = null));
        }
      }
      class d extends l {
        constructor(e) {
          super(0),
            (this._string = null),
            (this._toString = void 0),
            (this._toString = (0, r.mD)({ output: [e, e] }));
        }
        static create(e) {
          return new d(e);
        }
        getValue() {
          let e = this._string;
          return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
          if (r.is.str(e)) {
            if (e == this._string) return !1;
            (this._string = e), (this._value = 1);
          } else {
            if (!super.setValue(e)) return !1;
            this._string = null;
          }
          return !0;
        }
        reset(e) {
          e && (this._toString = (0, r.mD)({ output: [this.getValue(), e] })),
            (this._value = 0),
            super.reset();
        }
      }
      let h = { dependencies: null };
      class p extends f {
        constructor(e) {
          super(), (this.source = e), this.setValue(e);
        }
        getValue(e) {
          let t = {};
          return (
            (0, r.rU)(this.source, (n, i) => {
              a(n)
                ? (t[i] = n.getValue(e))
                : (0, r.j$)(n)
                ? (t[i] = (0, r.je)(n))
                : e || (t[i] = n);
            }),
            t
          );
        }
        setValue(e) {
          (this.source = e), (this.payload = this._makePayload(e));
        }
        reset() {
          this.payload && (0, r.S6)(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
          if (e) {
            let t = new Set();
            return (0, r.rU)(e, this._addToPayload, t), Array.from(t);
          }
        }
        _addToPayload(e) {
          h.dependencies && (0, r.j$)(e) && h.dependencies.add(e);
          let t = c(e);
          t && (0, r.S6)(t, (e) => this.add(e));
        }
      }
      class g extends p {
        constructor(e) {
          super(e);
        }
        static create(e) {
          return new g(e);
        }
        getValue() {
          return this.source.map((e) => e.getValue());
        }
        setValue(e) {
          let t = this.getPayload();
          return e.length == t.length
            ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
            : (super.setValue(e.map(b)), !0);
        }
      }
      function b(e) {
        return ((0, r.Df)(e) ? d : l).create(e);
      }
      function m(e) {
        let t = s(e);
        return t ? t.constructor : r.is.arr(e) ? g : (0, r.Df)(e) ? d : l;
      }
      function y() {
        return (y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      let v = (e, t) => {
        let n = !r.is.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return (0, i.forwardRef)((o, a) => {
          let s = (0, i.useRef)(null),
            u =
              n &&
              (0, i.useCallback)(
                (e) => {
                  s.current = (a && (r.is.fun(a) ? a(e) : (a.current = e)), e);
                },
                [a]
              ),
            [c, f] = (function (e, t) {
              let n = new Set();
              return (
                (h.dependencies = n),
                e.style &&
                  (e = y({}, e, { style: t.createAnimatedStyle(e.style) })),
                (e = new p(e)),
                (h.dependencies = null),
                [e, n]
              );
            })(o, t),
            l = (0, r.NW)(),
            d = () => {
              let e = s.current;
              (!n || e) &&
                !1 === (!!e && t.applyAnimatedValues(e, c.getValue(!0))) &&
                l();
            },
            g = new _(d, f),
            b = (0, i.useRef)();
          (0, r.bt)(
            () => (
              (b.current = g),
              (0, r.S6)(f, (e) => (0, r.UI)(e, g)),
              () => {
                b.current &&
                  ((0, r.S6)(b.current.deps, (e) => (0, r.iL)(e, b.current)),
                  r.Wn.cancel(b.current.update));
              }
            )
          ),
            (0, i.useEffect)(d, []),
            (0, r.tf)(() => () => {
              let e = b.current;
              (0, r.S6)(e.deps, (t) => (0, r.iL)(t, e));
            });
          let m = t.getComponentProps(c.getValue());
          return i.createElement(e, y({}, m, { ref: u }));
        });
      };
      class _ {
        constructor(e, t) {
          (this.update = e), (this.deps = t);
        }
        eventObserved(e) {
          "change" == e.type && r.Wn.write(this.update);
        }
      }
      let x = Symbol.for("AnimatedComponent"),
        w = (
          e,
          {
            applyAnimatedValues: t = () => !1,
            createAnimatedStyle: n = (e) => new p(e),
            getComponentProps: i = (e) => e,
          } = {}
        ) => {
          let o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: i,
            },
            a = (e) => {
              let t = k(e) || "Anonymous";
              return (
                ((e = r.is.str(e)
                  ? a[e] || (a[e] = v(e, o))
                  : e[x] || (e[x] = v(e, o))).displayName = `Animated(${t})`),
                e
              );
            };
          return (
            (0, r.rU)(e, (t, n) => {
              r.is.arr(e) && (n = k(t)), (a[n] = a(t));
            }),
            { animated: a }
          );
        },
        k = (e) =>
          r.is.str(e)
            ? e
            : e && r.is.str(e.displayName)
            ? e.displayName
            : (r.is.fun(e) && e.name) || null;
    },
    14989: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Globals: function () {
          return o.OH;
        },
        config: function () {
          return k;
        },
        to: function () {
          return ew;
        },
        useSpring: function () {
          return eg;
        },
        useTransition: function () {
          return eb;
        },
      });
      var i,
        o = n(50036),
        a = n(2784),
        s = n(96642);
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, ...t) {
        return o.is.fun(e) ? e(...t) : e;
      }
      let f = (e, t) =>
          !0 === e ||
          !!(t && e && (o.is.fun(e) ? e(t) : (0, o.qo)(e).includes(t))),
        l = (e, t) => (o.is.obj(e) ? t && e[t] : e),
        d = (e, t) =>
          !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        h = (e) => e,
        p = (e, t = h) => {
          let n = g;
          e.default && !0 !== e.default && (n = Object.keys((e = e.default)));
          let r = {};
          for (let i of n) {
            let n = t(e[i], i);
            o.is.und(n) || (r[i] = n);
          }
          return r;
        },
        g = [
          "config",
          "onProps",
          "onStart",
          "onChange",
          "onPause",
          "onResume",
          "onRest",
        ],
        b = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function m(e) {
        let t = (function (e) {
          let t = {},
            n = 0;
          if (
            ((0, o.rU)(e, (e, r) => {
              !b[r] && ((t[r] = e), n++);
            }),
            n)
          )
            return t;
        })(e);
        if (t) {
          let n = { to: t };
          return (0, o.rU)(e, (e, r) => r in t || (n[r] = e)), n;
        }
        return u({}, e);
      }
      function y(e) {
        return (
          (e = (0, o.je)(e)),
          o.is.arr(e)
            ? e.map(y)
            : (0, o.Df)(e)
            ? o.OH.createStringInterpolator({ range: [0, 1], output: [e, e] })(
                1
              )
            : e
        );
      }
      function v(e) {
        for (let t in e) return !0;
        return !1;
      }
      function _(e) {
        return o.is.fun(e) || (o.is.arr(e) && o.is.obj(e[0]));
      }
      function x(e, t) {
        var n;
        null == (n = e.ref) || n.delete(e), null == t || t.delete(e);
      }
      function w(e, t) {
        if (t && e.ref !== t) {
          var n;
          null == (n = e.ref) || n.delete(e), t.add(e), (e.ref = t);
        }
      }
      let k = {
          default: { tension: 170, friction: 26 },
          gentle: { tension: 120, friction: 14 },
          wobbly: { tension: 180, friction: 12 },
          stiff: { tension: 210, friction: 20 },
          slow: { tension: 280, friction: 60 },
          molasses: { tension: 280, friction: 120 },
        },
        M = u({}, k.default, {
          mass: 1,
          damping: 1,
          easing: (e) => e,
          clamp: !1,
        });
      class T {
        constructor() {
          (this.tension = void 0),
            (this.friction = void 0),
            (this.frequency = void 0),
            (this.damping = void 0),
            (this.mass = void 0),
            (this.velocity = 0),
            (this.restVelocity = void 0),
            (this.precision = void 0),
            (this.progress = void 0),
            (this.duration = void 0),
            (this.easing = void 0),
            (this.clamp = void 0),
            (this.bounce = void 0),
            (this.decay = void 0),
            (this.round = void 0),
            Object.assign(this, M);
        }
      }
      function S(e, t) {
        if (o.is.und(t.decay)) {
          let n = !o.is.und(t.tension) || !o.is.und(t.friction);
          (!n &&
            o.is.und(t.frequency) &&
            o.is.und(t.damping) &&
            o.is.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
        } else e.duration = void 0;
      }
      let C = [];
      class O {
        constructor() {
          (this.changed = !1),
            (this.values = C),
            (this.toValues = null),
            (this.fromValues = C),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new T()),
            (this.immediate = !1);
        }
      }
      function j(
        e,
        { key: t, props: n, defaultProps: r, state: i, actions: a }
      ) {
        return new Promise((s, l) => {
          var d;
          let h, p;
          let g = f(
            null != (d = n.cancel) ? d : null == r ? void 0 : r.cancel,
            t
          );
          if (g) y();
          else {
            o.is.und(n.pause) || (i.paused = f(n.pause, t));
            let e = null == r ? void 0 : r.pause;
            !0 !== e && (e = i.paused || f(e, t)),
              (h = c(n.delay || 0, t)),
              e ? (i.resumeQueue.add(m), a.pause()) : (a.resume(), m());
          }
          function b() {
            i.resumeQueue.add(m),
              i.timeouts.delete(p),
              p.cancel(),
              (h = p.time - o.Wn.now());
          }
          function m() {
            h > 0 && !o.OH.skipAnimation
              ? ((i.delayed = !0),
                (p = o.Wn.setTimeout(y, h)),
                i.pauseQueue.add(b),
                i.timeouts.add(p))
              : y();
          }
          function y() {
            i.delayed && (i.delayed = !1),
              i.pauseQueue.delete(b),
              i.timeouts.delete(p),
              e <= (i.cancelId || 0) && (g = !0);
            try {
              a.start(u({}, n, { callId: e, cancel: g }), s);
            } catch (e) {
              l(e);
            }
          }
        });
      }
      let R = (e, t) =>
          1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
            ? P(e.get())
            : t.every((e) => e.noop)
            ? q(e.get())
            : E(
                e.get(),
                t.every((e) => e.finished)
              ),
        q = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        E = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        P = (e) => ({ value: e, cancelled: !0, finished: !1 });
      function z(e, t, n, r) {
        let { callId: i, parentId: a, onRest: s } = t,
          { asyncTo: c, promise: f } = n;
        return a || e !== c || t.reset
          ? (n.promise = (async () => {
              let l, d, h;
              (n.asyncId = i), (n.asyncTo = e);
              let g = p(t, (e, t) => ("onRest" === t ? void 0 : e)),
                b = new Promise((e, t) => ((l = e), (d = t))),
                m = (e) => {
                  let t =
                    (i <= (n.cancelId || 0) && P(r)) ||
                    (i !== n.asyncId && E(r, !1));
                  if (t) throw ((e.result = t), d(e), e);
                },
                y = (e, t) => {
                  let a = new Z(),
                    s = new D();
                  return (async () => {
                    if (o.OH.skipAnimation)
                      throw (A(n), (s.result = E(r, !1)), d(s), s);
                    m(a);
                    let c = o.is.obj(e) ? u({}, e) : u({}, t, { to: e });
                    (c.parentId = i),
                      (0, o.rU)(g, (e, t) => {
                        o.is.und(c[t]) && (c[t] = e);
                      });
                    let f = await r.start(c);
                    return (
                      m(a),
                      n.paused &&
                        (await new Promise((e) => {
                          n.resumeQueue.add(e);
                        })),
                      f
                    );
                  })();
                };
              if (o.OH.skipAnimation) return A(n), E(r, !1);
              try {
                let t;
                (t = o.is.arr(e)
                  ? (async (e) => {
                      for (let t of e) await y(t);
                    })(e)
                  : Promise.resolve(e(y, r.stop.bind(r)))),
                  await Promise.all([t.then(l), b]),
                  (h = E(r.get(), !0, !1));
              } catch (e) {
                if (e instanceof Z) h = e.result;
                else if (e instanceof D) h = e.result;
                else throw e;
              } finally {
                i == n.asyncId &&
                  ((n.asyncId = a),
                  (n.asyncTo = a ? c : void 0),
                  (n.promise = a ? f : void 0));
              }
              return (
                o.is.fun(s) &&
                  o.Wn.batchedUpdates(() => {
                    s(h, r, r.item);
                  }),
                h
              );
            })())
          : f;
      }
      function A(e, t) {
        (0, o.yl)(e.timeouts, (e) => e.cancel()),
          e.pauseQueue.clear(),
          e.resumeQueue.clear(),
          (e.asyncId = e.asyncTo = e.promise = void 0),
          t && (e.cancelId = t);
      }
      class Z extends Error {
        constructor() {
          super(
            "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
          ),
            (this.result = void 0);
        }
      }
      class D extends Error {
        constructor() {
          super("SkipAnimationSignal"), (this.result = void 0);
        }
      }
      let N = (e) => e instanceof F,
        U = 1;
      class F extends o.B0 {
        constructor(...e) {
          super(...e),
            (this.id = U++),
            (this.key = void 0),
            (this._priority = 0);
        }
        get priority() {
          return this._priority;
        }
        set priority(e) {
          this._priority != e &&
            ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
          let e = (0, s.ys)(this);
          return e && e.getValue();
        }
        to(...e) {
          return o.OH.to(this, e);
        }
        interpolate(...e) {
          return (0, o.LW)(), o.OH.to(this, e);
        }
        toJSON() {
          return this.get();
        }
        observerAdded(e) {
          1 == e && this._attach();
        }
        observerRemoved(e) {
          0 == e && this._detach();
        }
        _attach() {}
        _detach() {}
        _onChange(e, t = !1) {
          (0, o.k0)(this, { type: "change", parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
          this.idle || o.fT.sort(this),
            (0, o.k0)(this, { type: "priority", parent: this, priority: e });
        }
      }
      let L = Symbol.for("SpringPhase"),
        W = (e) => (1 & e[L]) > 0,
        Y = (e) => (2 & e[L]) > 0,
        I = (e) => (4 & e[L]) > 0,
        B = (e, t) => (t ? (e[L] |= 3) : (e[L] &= -3)),
        H = (e, t) => (t ? (e[L] |= 4) : (e[L] &= -5));
      class V extends F {
        constructor(e, t) {
          if (
            (super(),
            (this.key = void 0),
            (this.animation = new O()),
            (this.queue = void 0),
            (this.defaultProps = {}),
            (this._state = {
              paused: !1,
              delayed: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._pendingCalls = new Set()),
            (this._lastCallId = 0),
            (this._lastToId = 0),
            (this._memoizedDuration = 0),
            !o.is.und(e) || !o.is.und(t))
          ) {
            let n = o.is.obj(e) ? u({}, e) : u({}, t, { from: e });
            o.is.und(n.default) && (n.default = !0), this.start(n);
          }
        }
        get idle() {
          return !(Y(this) || this._state.asyncTo) || I(this);
        }
        get goal() {
          return (0, o.je)(this.animation.to);
        }
        get velocity() {
          let e = (0, s.ys)(this);
          return e instanceof s.iG
            ? e.lastVelocity || 0
            : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
          return W(this);
        }
        get isAnimating() {
          return Y(this);
        }
        get isPaused() {
          return I(this);
        }
        get isDelayed() {
          return this._state.delayed;
        }
        advance(e) {
          let t = !0,
            n = !1,
            r = this.animation,
            { config: i, toValues: a } = r,
            u = (0, s.He)(r.to);
          !u && (0, o.j$)(r.to) && (a = (0, o.qo)((0, o.je)(r.to))),
            r.values.forEach((c, f) => {
              if (c.done) return;
              let l = c.constructor == s.eC ? 1 : u ? u[f].lastPosition : a[f],
                d = r.immediate,
                h = l;
              if (!d) {
                let t;
                if (((h = c.lastPosition), i.tension <= 0)) {
                  c.done = !0;
                  return;
                }
                let n = (c.elapsedTime += e),
                  a = r.fromValues[f],
                  s =
                    null != c.v0
                      ? c.v0
                      : (c.v0 = o.is.arr(i.velocity)
                          ? i.velocity[f]
                          : i.velocity);
                if (o.is.und(i.duration)) {
                  if (i.decay) {
                    let e = !0 === i.decay ? 0.998 : i.decay,
                      r = Math.exp(-(1 - e) * n);
                    (h = a + (s / (1 - e)) * (1 - r)),
                      (d = 0.1 > Math.abs(c.lastPosition - h)),
                      (t = s * r);
                  } else {
                    t = null == c.lastVelocity ? s : c.lastVelocity;
                    let n =
                        i.precision ||
                        (a == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - a))),
                      r = i.restVelocity || n / 10,
                      u = i.clamp ? 0 : i.bounce,
                      f = !o.is.und(u),
                      p = a == l ? c.v0 > 0 : a < l,
                      g = Math.ceil(e / 1);
                    for (
                      let e = 0;
                      e < g &&
                      !(!(Math.abs(t) > r) && (d = Math.abs(l - h) <= n));
                      ++e
                    ) {
                      f && (h == l || h > l == p) && ((t = -t * u), (h = l));
                      let e =
                        (-(1e-6 * i.tension) * (h - l) +
                          -(0.001 * i.friction) * t) /
                        i.mass;
                      (t += 1 * e), (h += 1 * t);
                    }
                  }
                } else {
                  let r = 1;
                  i.duration > 0 &&
                    (this._memoizedDuration !== i.duration &&
                      ((this._memoizedDuration = i.duration),
                      c.durationProgress > 0 &&
                        ((c.elapsedTime = i.duration * c.durationProgress),
                        (n = c.elapsedTime += e))),
                    (r =
                      (r = (i.progress || 0) + n / this._memoizedDuration) > 1
                        ? 1
                        : r < 0
                        ? 0
                        : r),
                    (c.durationProgress = r)),
                    (t =
                      ((h = a + i.easing(r) * (l - a)) - c.lastPosition) / e),
                    (d = 1 == r);
                }
                (c.lastVelocity = t),
                  Number.isNaN(h) &&
                    (console.warn("Got NaN while animating:", this), (d = !0));
              }
              u && !u[f].done && (d = !1),
                d ? (c.done = !0) : (t = !1),
                c.setValue(h, i.round) && (n = !0);
            });
          let c = (0, s.ys)(this),
            f = c.getValue();
          if (t) {
            let e = (0, o.je)(r.to);
            (f !== e || n) && !i.decay
              ? (c.setValue(e), this._onChange(e))
              : n && i.decay && this._onChange(f),
              this._stop();
          } else n && this._onChange(f);
        }
        set(e) {
          return (
            o.Wn.batchedUpdates(() => {
              this._stop(), this._focus(e), this._set(e);
            }),
            this
          );
        }
        pause() {
          this._update({ pause: !0 });
        }
        resume() {
          this._update({ pause: !1 });
        }
        finish() {
          if (Y(this)) {
            let { to: e, config: t } = this.animation;
            o.Wn.batchedUpdates(() => {
              this._onStart(), t.decay || this._set(e, !1), this._stop();
            });
          }
          return this;
        }
        update(e) {
          return (this.queue || (this.queue = [])).push(e), this;
        }
        start(e, t) {
          let n;
          return (
            o.is.und(e)
              ? ((n = this.queue || []), (this.queue = []))
              : (n = [o.is.obj(e) ? e : u({}, t, { to: e })]),
            Promise.all(n.map((e) => this._update(e))).then((e) => R(this, e))
          );
        }
        stop(e) {
          let { to: t } = this.animation;
          return (
            this._focus(this.get()),
            A(this._state, e && this._lastCallId),
            o.Wn.batchedUpdates(() => this._stop(t, e)),
            this
          );
        }
        reset() {
          this._update({ reset: !0 });
        }
        eventObserved(e) {
          "change" == e.type
            ? this._start()
            : "priority" == e.type && (this.priority = e.priority + 1);
        }
        _prepareNode(e) {
          let t = this.key || "",
            { to: n, from: r } = e;
          (null == (n = o.is.obj(n) ? n[t] : n) || _(n)) && (n = void 0),
            null == (r = o.is.obj(r) ? r[t] : r) && (r = void 0);
          let i = { to: n, from: r };
          return (
            W(this) ||
              (e.reverse && ([n, r] = [r, n]),
              (r = (0, o.je)(r)),
              o.is.und(r) ? (0, s.ys)(this) || this._set(n) : this._set(r)),
            i
          );
        }
        _update(e, t) {
          let n = u({}, e),
            { key: r, defaultProps: i } = this;
          n.default &&
            Object.assign(
              i,
              p(n, (e, t) => (/^on/.test(t) ? l(e, r) : e))
            ),
            K(this, n, "onProps"),
            ee(this, "onProps", n, this);
          let a = this._prepareNode(n);
          if (Object.isFrozen(this))
            throw Error(
              "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
            );
          let s = this._state;
          return j(++this._lastCallId, {
            key: r,
            props: n,
            defaultProps: i,
            state: s,
            actions: {
              pause: () => {
                I(this) ||
                  (H(this, !0),
                  (0, o.bl)(s.pauseQueue),
                  ee(
                    this,
                    "onPause",
                    E(this, $(this, this.animation.to)),
                    this
                  ));
              },
              resume: () => {
                I(this) &&
                  (H(this, !1),
                  Y(this) && this._resume(),
                  (0, o.bl)(s.resumeQueue),
                  ee(
                    this,
                    "onResume",
                    E(this, $(this, this.animation.to)),
                    this
                  ));
              },
              start: this._merge.bind(this, a),
            },
          }).then((e) => {
            if (n.loop && e.finished && !(t && e.noop)) {
              let e = G(n);
              if (e) return this._update(e, !0);
            }
            return e;
          });
        }
        _merge(e, t, n) {
          if (t.cancel) return this.stop(!0), n(P(this));
          let r = !o.is.und(e.to),
            i = !o.is.und(e.from);
          if (r || i) {
            if (!(t.callId > this._lastToId)) return n(P(this));
            this._lastToId = t.callId;
          }
          let { key: a, defaultProps: l, animation: d } = this,
            { to: h, from: p } = d,
            { to: g = h, from: b = p } = e;
          i && !r && (!t.default || o.is.und(g)) && (g = b),
            t.reverse && ([g, b] = [b, g]);
          let m = !(0, o.Xy)(b, p);
          m && (d.from = b), (b = (0, o.je)(b));
          let v = !(0, o.Xy)(g, h);
          v && this._focus(g);
          let x = _(t.to),
            { config: w } = d,
            { decay: k, velocity: T } = w;
          (r || i) && (w.velocity = 0),
            t.config &&
              !x &&
              (function (e, t, n) {
                for (let r in (n && (S((n = u({}, n)), t), (t = u({}, n, t))),
                S(e, t),
                Object.assign(e, t),
                M))
                  null == e[r] && (e[r] = M[r]);
                let { mass: r, frequency: i, damping: a } = e;
                o.is.und(i) ||
                  (i < 0.01 && (i = 0.01),
                  a < 0 && (a = 0),
                  (e.tension = Math.pow((2 * Math.PI) / i, 2) * r),
                  (e.friction = (4 * Math.PI * a * r) / i));
              })(
                w,
                c(t.config, a),
                t.config !== l.config ? c(l.config, a) : void 0
              );
          let C = (0, s.ys)(this);
          if (!C || o.is.und(g)) return n(E(this, !0));
          let O = o.is.und(t.reset)
              ? i && !t.default
              : !o.is.und(b) && f(t.reset, a),
            j = O ? b : this.get(),
            R = y(g),
            A = o.is.num(R) || o.is.arr(R) || (0, o.Df)(R),
            Z = !x && (!A || f(l.immediate || t.immediate, a));
          if (v) {
            let e = (0, s.sb)(g);
            if (e !== C.constructor) {
              if (Z) C = this._set(R);
              else
                throw Error(
                  `Cannot animate between ${C.constructor.name} and ${e.name}, as the "to" prop suggests`
                );
            }
          }
          let D = C.constructor,
            N = (0, o.j$)(g),
            U = !1;
          if (!N) {
            let e = O || (!W(this) && m);
            (v || e) && (N = !(U = (0, o.Xy)(y(j), R))),
              (((0, o.Xy)(d.immediate, Z) || Z) &&
                (0, o.Xy)(w.decay, k) &&
                (0, o.Xy)(w.velocity, T)) ||
                (N = !0);
          }
          if (
            (U && Y(this) && (d.changed && !O ? (N = !0) : N || this._stop(h)),
            !x &&
              ((N || (0, o.j$)(h)) &&
                ((d.values = C.getPayload()),
                (d.toValues = (0, o.j$)(g)
                  ? null
                  : D == s.eC
                  ? [1]
                  : (0, o.qo)(R))),
              d.immediate == Z || ((d.immediate = Z), Z || O || this._set(h)),
              N))
          ) {
            let { onRest: e } = d;
            (0, o.S6)(J, (e) => K(this, t, e));
            let r = E(this, $(this, h));
            (0, o.bl)(this._pendingCalls, r),
              this._pendingCalls.add(n),
              d.changed &&
                o.Wn.batchedUpdates(() => {
                  (d.changed = !O),
                    null == e || e(r, this),
                    O
                      ? c(l.onRest, r)
                      : null == d.onStart || d.onStart(r, this);
                });
          }
          O && this._set(j),
            x
              ? n(z(t.to, t, this._state, this))
              : N
              ? this._start()
              : Y(this) && !v
              ? this._pendingCalls.add(n)
              : n(q(j));
        }
        _focus(e) {
          let t = this.animation;
          e !== t.to &&
            ((0, o.Ll)(this) && this._detach(),
            (t.to = e),
            (0, o.Ll)(this) && this._attach());
        }
        _attach() {
          let e = 0,
            { to: t } = this.animation;
          (0, o.j$)(t) && ((0, o.UI)(t, this), N(t) && (e = t.priority + 1)),
            (this.priority = e);
        }
        _detach() {
          let { to: e } = this.animation;
          (0, o.j$)(e) && (0, o.iL)(e, this);
        }
        _set(e, t = !0) {
          let n = (0, o.je)(e);
          if (!o.is.und(n)) {
            let e = (0, s.ys)(this);
            if (!e || !(0, o.Xy)(n, e.getValue())) {
              let r = (0, s.sb)(n);
              e && e.constructor == r
                ? e.setValue(n)
                : (0, s.f3)(this, r.create(n)),
                e &&
                  o.Wn.batchedUpdates(() => {
                    this._onChange(n, t);
                  });
            }
          }
          return (0, s.ys)(this);
        }
        _onStart() {
          let e = this.animation;
          e.changed ||
            ((e.changed = !0),
            ee(this, "onStart", E(this, $(this, e.to)), this));
        }
        _onChange(e, t) {
          t || (this._onStart(), c(this.animation.onChange, e, this)),
            c(this.defaultProps.onChange, e, this),
            super._onChange(e, t);
        }
        _start() {
          let e = this.animation;
          (0, s.ys)(this).reset((0, o.je)(e.to)),
            e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
            Y(this) || (B(this, !0), I(this) || this._resume());
        }
        _resume() {
          o.OH.skipAnimation ? this.finish() : o.fT.start(this);
        }
        _stop(e, t) {
          if (Y(this)) {
            B(this, !1);
            let n = this.animation;
            (0, o.S6)(n.values, (e) => {
              e.done = !0;
            }),
              n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
              (0, o.k0)(this, { type: "idle", parent: this });
            let r = t
              ? P(this.get())
              : E(this.get(), $(this, null != e ? e : n.to));
            (0, o.bl)(this._pendingCalls, r),
              n.changed && ((n.changed = !1), ee(this, "onRest", r, this));
          }
        }
      }
      function $(e, t) {
        let n = y(t),
          r = y(e.get());
        return (0, o.Xy)(r, n);
      }
      function G(e, t = e.loop, n = e.to) {
        let r = c(t);
        if (r) {
          let i = !0 !== r && m(r),
            o = (i || e).reverse,
            a = !i || i.reset;
          return X(
            u(
              {},
              e,
              {
                loop: t,
                default: !1,
                pause: void 0,
                to: !o || _(n) ? n : void 0,
                from: a ? e.from : void 0,
                reset: a,
              },
              i
            )
          );
        }
      }
      function X(e) {
        let { to: t, from: n } = (e = m(e)),
          r = new Set();
        return (
          o.is.obj(t) && Q(t, r),
          o.is.obj(n) && Q(n, r),
          (e.keys = r.size ? Array.from(r) : null),
          e
        );
      }
      function Q(e, t) {
        (0, o.rU)(e, (e, n) => null != e && t.add(n));
      }
      let J = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function K(e, t, n) {
        e.animation[n] = t[n] !== d(t, n) ? l(t[n], e.key) : void 0;
      }
      function ee(e, t, ...n) {
        var r, i, o, a;
        null == (r = (i = e.animation)[t]) || r.call(i, ...n),
          null == (o = (a = e.defaultProps)[t]) || o.call(a, ...n);
      }
      let et = ["onStart", "onChange", "onRest"],
        en = 1;
      class er {
        constructor(e, t) {
          (this.id = en++),
            (this.springs = {}),
            (this.queue = []),
            (this.ref = void 0),
            (this._flush = void 0),
            (this._initialProps = void 0),
            (this._lastAsyncId = 0),
            (this._active = new Set()),
            (this._changed = new Set()),
            (this._started = !1),
            (this._item = void 0),
            (this._state = {
              paused: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._events = {
              onStart: new Map(),
              onChange: new Map(),
              onRest: new Map(),
            }),
            (this._onFrame = this._onFrame.bind(this)),
            t && (this._flush = t),
            e && this.start(u({ default: !0 }, e));
        }
        get idle() {
          return (
            !this._state.asyncTo &&
            Object.values(this.springs).every(
              (e) => e.idle && !e.isDelayed && !e.isPaused
            )
          );
        }
        get item() {
          return this._item;
        }
        set item(e) {
          this._item = e;
        }
        get() {
          let e = {};
          return this.each((t, n) => (e[n] = t.get())), e;
        }
        set(e) {
          for (let t in e) {
            let n = e[t];
            o.is.und(n) || this.springs[t].set(n);
          }
        }
        update(e) {
          return e && this.queue.push(X(e)), this;
        }
        start(e) {
          let { queue: t } = this;
          return (e ? (t = (0, o.qo)(e).map(X)) : (this.queue = []),
          this._flush)
            ? this._flush(this, t)
            : (ef(this, t), ei(this, t));
        }
        stop(e, t) {
          if ((!!e !== e && (t = e), t)) {
            let n = this.springs;
            (0, o.S6)((0, o.qo)(t), (t) => n[t].stop(!!e));
          } else
            A(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
          return this;
        }
        pause(e) {
          if (o.is.und(e)) this.start({ pause: !0 });
          else {
            let t = this.springs;
            (0, o.S6)((0, o.qo)(e), (e) => t[e].pause());
          }
          return this;
        }
        resume(e) {
          if (o.is.und(e)) this.start({ pause: !1 });
          else {
            let t = this.springs;
            (0, o.S6)((0, o.qo)(e), (e) => t[e].resume());
          }
          return this;
        }
        each(e) {
          (0, o.rU)(this.springs, e);
        }
        _onFrame() {
          let { onStart: e, onChange: t, onRest: n } = this._events,
            r = this._active.size > 0,
            i = this._changed.size > 0;
          ((r && !this._started) || (i && !this._started)) &&
            ((this._started = !0),
            (0, o.yl)(e, ([e, t]) => {
              (t.value = this.get()), e(t, this, this._item);
            }));
          let a = !r && this._started,
            s = i || (a && n.size) ? this.get() : null;
          i &&
            t.size &&
            (0, o.yl)(t, ([e, t]) => {
              (t.value = s), e(t, this, this._item);
            }),
            a &&
              ((this._started = !1),
              (0, o.yl)(n, ([e, t]) => {
                (t.value = s), e(t, this, this._item);
              }));
        }
        eventObserved(e) {
          if ("change" == e.type)
            this._changed.add(e.parent), e.idle || this._active.add(e.parent);
          else {
            if ("idle" != e.type) return;
            this._active.delete(e.parent);
          }
          o.Wn.onFrame(this._onFrame);
        }
      }
      function ei(e, t) {
        return Promise.all(t.map((t) => eo(e, t))).then((t) => R(e, t));
      }
      async function eo(e, t, n) {
        let { keys: r, to: i, from: a, loop: s, onRest: u, onResolve: c } = t,
          f = o.is.obj(t.default) && t.default;
        s && (t.loop = !1),
          !1 === i && (t.to = null),
          !1 === a && (t.from = null);
        let l = o.is.arr(i) || o.is.fun(i) ? i : void 0;
        l
          ? ((t.to = void 0), (t.onRest = void 0), f && (f.onRest = void 0))
          : (0, o.S6)(et, (n) => {
              let r = t[n];
              if (o.is.fun(r)) {
                let i = e._events[n];
                (t[n] = ({ finished: e, cancelled: t }) => {
                  let n = i.get(r);
                  n
                    ? (e || (n.finished = !1), t && (n.cancelled = !0))
                    : i.set(r, {
                        value: null,
                        finished: e || !1,
                        cancelled: t || !1,
                      });
                }),
                  f && (f[n] = t[n]);
              }
            });
        let h = e._state;
        !h.paused === t.pause
          ? ((h.paused = t.pause),
            (0, o.bl)(t.pause ? h.pauseQueue : h.resumeQueue))
          : h.paused && (t.pause = !0);
        let p = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
          g = !0 === t.cancel || !0 === d(t, "cancel");
        (l || (g && h.asyncId)) &&
          p.push(
            j(++e._lastAsyncId, {
              props: t,
              state: h,
              actions: {
                pause: o.ZT,
                resume: o.ZT,
                start(t, n) {
                  g
                    ? (A(h, e._lastAsyncId), n(P(e)))
                    : ((t.onRest = u), n(z(l, t, h, e)));
                },
              },
            })
          ),
          h.paused &&
            (await new Promise((e) => {
              h.resumeQueue.add(e);
            }));
        let b = R(e, await Promise.all(p));
        if (s && b.finished && !(n && b.noop)) {
          let n = G(t, s, i);
          if (n) return ef(e, [n]), eo(e, n, !0);
        }
        return c && o.Wn.batchedUpdates(() => c(b, e, e.item)), b;
      }
      function ea(e, t) {
        let n = u({}, e.springs);
        return (
          t &&
            (0, o.S6)((0, o.qo)(t), (e) => {
              o.is.und(e.keys) && (e = X(e)),
                o.is.obj(e.to) || (e = u({}, e, { to: void 0 })),
                ec(n, e, (e) => eu(e));
            }),
          es(e, n),
          n
        );
      }
      function es(e, t) {
        (0, o.rU)(t, (t, n) => {
          e.springs[n] || ((e.springs[n] = t), (0, o.UI)(t, e));
        });
      }
      function eu(e, t) {
        let n = new V();
        return (n.key = e), t && (0, o.UI)(n, t), n;
      }
      function ec(e, t, n) {
        t.keys &&
          (0, o.S6)(t.keys, (r) => {
            (e[r] || (e[r] = n(r)))._prepareNode(t);
          });
      }
      function ef(e, t) {
        (0, o.S6)(t, (t) => {
          ec(e.springs, t, (t) => eu(t, e));
        });
      }
      let el = ["children"],
        ed = (e) => {
          let { children: t } = e,
            n = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i;
            })(e, el),
            r = (0, a.useContext)(eh),
            i = n.pause || !!r.pause,
            s = n.immediate || !!r.immediate;
          n = (0, o.Pr)(() => ({ pause: i, immediate: s }), [i, s]);
          let { Provider: u } = eh;
          return a.createElement(u, { value: n }, t);
        },
        eh =
          (Object.assign(ed, a.createContext({})),
          (ed.Provider._context = ed),
          (ed.Consumer._context = ed),
          ed);
      (ed.Provider = eh.Provider), (ed.Consumer = eh.Consumer);
      let ep = () => {
        let e = [],
          t = function (t) {
            (0, o.ZR)();
            let r = [];
            return (
              (0, o.S6)(e, (e, i) => {
                if (o.is.und(t)) r.push(e.start());
                else {
                  let o = n(t, e, i);
                  o && r.push(e.start(o));
                }
              }),
              r
            );
          };
        (t.current = e),
          (t.add = function (t) {
            e.includes(t) || e.push(t);
          }),
          (t.delete = function (t) {
            let n = e.indexOf(t);
            ~n && e.splice(n, 1);
          }),
          (t.pause = function () {
            return (0, o.S6)(e, (e) => e.pause(...arguments)), this;
          }),
          (t.resume = function () {
            return (0, o.S6)(e, (e) => e.resume(...arguments)), this;
          }),
          (t.set = function (t) {
            (0, o.S6)(e, (e) => e.set(t));
          }),
          (t.start = function (t) {
            let n = [];
            return (
              (0, o.S6)(e, (e, r) => {
                if (o.is.und(t)) n.push(e.start());
                else {
                  let i = this._getProps(t, e, r);
                  i && n.push(e.start(i));
                }
              }),
              n
            );
          }),
          (t.stop = function () {
            return (0, o.S6)(e, (e) => e.stop(...arguments)), this;
          }),
          (t.update = function (t) {
            return (
              (0, o.S6)(e, (e, n) => e.update(this._getProps(t, e, n))), this
            );
          });
        let n = function (e, t, n) {
          return o.is.fun(e) ? e(n, t) : e;
        };
        return (t._getProps = n), t;
      };
      function eg(e, t) {
        let n = o.is.fun(e),
          [[r], i] = (function (e, t, n) {
            let r = o.is.fun(t) && t;
            r && !n && (n = []);
            let i = (0, a.useMemo)(
                () => (r || 3 == arguments.length ? ep() : void 0),
                []
              ),
              s = (0, a.useRef)(0),
              c = (0, o.NW)(),
              f = (0, a.useMemo)(
                () => ({
                  ctrls: [],
                  queue: [],
                  flush(e, t) {
                    let n = ea(e, t);
                    return !(s.current > 0) ||
                      f.queue.length ||
                      Object.keys(n).some((t) => !e.springs[t])
                      ? new Promise((r) => {
                          es(e, n),
                            f.queue.push(() => {
                              r(ei(e, t));
                            }),
                            c();
                        })
                      : ei(e, t);
                  },
                }),
                []
              ),
              l = (0, a.useRef)([...f.ctrls]),
              d = [],
              h = (0, o.zH)(e) || 0;
            function g(e, n) {
              for (let i = e; i < n; i++) {
                let e = l.current[i] || (l.current[i] = new er(null, f.flush)),
                  n = r ? r(i, e) : t[i];
                n &&
                  (d[i] = (function (e) {
                    let t = X(e);
                    return o.is.und(t.default) && (t.default = p(t)), t;
                  })(n));
              }
            }
            (0, a.useMemo)(() => {
              (0, o.S6)(l.current.slice(e, h), (e) => {
                x(e, i), e.stop(!0);
              }),
                (l.current.length = e),
                g(h, e);
            }, [e]),
              (0, a.useMemo)(() => {
                g(0, Math.min(h, e));
              }, n);
            let b = l.current.map((e, t) => ea(e, d[t])),
              m = (0, a.useContext)(ed),
              y = (0, o.zH)(m),
              _ = m !== y && v(m);
            (0, o.bt)(() => {
              s.current++, (f.ctrls = l.current);
              let { queue: e } = f;
              e.length && ((f.queue = []), (0, o.S6)(e, (e) => e())),
                (0, o.S6)(l.current, (e, t) => {
                  null == i || i.add(e), _ && e.start({ default: m });
                  let n = d[t];
                  n && (w(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
                });
            }),
              (0, o.tf)(() => () => {
                (0, o.S6)(f.ctrls, (e) => e.stop(!0));
              });
            let k = b.map((e) => u({}, e));
            return i ? [k, i] : k;
          })(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, i] : r;
      }
      function eb(e, t, n) {
        let i = o.is.fun(t) && t,
          {
            reset: s,
            sort: f,
            trail: l = 0,
            expires: d = !0,
            exitBeforeEnter: h = !1,
            onDestroyed: g,
            ref: b,
            config: y,
          } = i ? i() : t,
          _ = (0, a.useMemo)(
            () => (i || 3 == arguments.length ? ep() : void 0),
            []
          ),
          k = (0, o.qo)(e),
          M = [],
          T = (0, a.useRef)(null),
          S = s ? null : T.current;
        (0, o.bt)(() => {
          T.current = M;
        }),
          (0, o.tf)(
            () => (
              (0, o.S6)(T.current, (e) => {
                var t;
                null == (t = e.ctrl.ref) || t.add(e.ctrl);
                let n = P.get(e);
                n && e.ctrl.start(n.payload);
              }),
              () => {
                (0, o.S6)(T.current, (e) => {
                  e.expired && clearTimeout(e.expirationId),
                    x(e.ctrl, _),
                    e.ctrl.stop(!0);
                });
              }
            )
          );
        let C = (function (e, { key: t, keys: n = t }, i) {
            if (null === n) {
              let t = new Set();
              return e.map((e) => {
                let n =
                  i &&
                  i.find(
                    (n) => n.item === e && n.phase !== r.LEAVE && !t.has(n)
                  );
                return n ? (t.add(n), n.key) : em++;
              });
            }
            return o.is.und(n) ? e : o.is.fun(n) ? e.map(n) : (0, o.qo)(n);
          })(k, i ? i() : t, S),
          O = (s && T.current) || [];
        (0, o.bt)(() =>
          (0, o.S6)(O, ({ ctrl: e, item: t, key: n }) => {
            x(e, _), c(g, t, n);
          })
        );
        let j = [];
        if (
          (S &&
            (0, o.S6)(S, (e, t) => {
              e.expired
                ? (clearTimeout(e.expirationId), O.push(e))
                : ~(t = j[t] = C.indexOf(e.key)) && (M[t] = e);
            }),
          (0, o.S6)(k, (e, t) => {
            M[t] ||
              ((M[t] = { key: C[t], item: e, phase: r.MOUNT, ctrl: new er() }),
              (M[t].ctrl.item = e));
          }),
          j.length)
        ) {
          let e = -1,
            { leave: n } = i ? i() : t;
          (0, o.S6)(j, (t, r) => {
            let i = S[r];
            ~t
              ? ((e = M.indexOf(i)), (M[e] = u({}, i, { item: k[t] })))
              : n && M.splice(++e, 0, i);
          });
        }
        o.is.fun(f) && M.sort((e, t) => f(e.item, t.item));
        let R = -l,
          q = (0, o.NW)(),
          E = p(t),
          P = new Map(),
          z = (0, a.useRef)(new Map()),
          A = (0, a.useRef)(!1);
        (0, o.S6)(M, (e, n) => {
          let a, s;
          let f = e.key,
            p = e.phase,
            g = i ? i() : t,
            v = c(g.delay || 0, f);
          if (p == r.MOUNT) (a = g.enter), (s = r.ENTER);
          else {
            let e = 0 > C.indexOf(f);
            if (p != r.LEAVE) {
              if (e) (a = g.leave), (s = r.LEAVE);
              else {
                if (!(a = g.update)) return;
                s = r.UPDATE;
              }
            } else {
              if (e) return;
              (a = g.enter), (s = r.ENTER);
            }
          }
          if (
            ((a = c(a, e.item, n)),
            !(a = o.is.obj(a) ? m(a) : { to: a }).config)
          ) {
            let t = y || E.config;
            a.config = c(t, e.item, n, s);
          }
          R += l;
          let _ = u(
            {},
            E,
            { delay: v + R, ref: b, immediate: g.immediate, reset: !1 },
            a
          );
          if (s == r.ENTER && o.is.und(_.from)) {
            let r = i ? i() : t,
              a = o.is.und(r.initial) || S ? r.from : r.initial;
            _.from = c(a, e.item, n);
          }
          let { onResolve: x } = _;
          _.onResolve = (e) => {
            c(x, e);
            let t = T.current,
              n = t.find((e) => e.key === f);
            if (n) {
              if (e.cancelled && n.phase != r.UPDATE) return;
              if (n.ctrl.idle) {
                let e = t.every((e) => e.ctrl.idle);
                if (n.phase == r.LEAVE) {
                  let t = c(d, n.item);
                  if (!1 !== t) {
                    let r = !0 === t ? 0 : t;
                    if (((n.expired = !0), !e && r > 0)) {
                      r <= 2147483647 && (n.expirationId = setTimeout(q, r));
                      return;
                    }
                  }
                }
                e &&
                  t.some((e) => e.expired) &&
                  (z.current.delete(n), h && (A.current = !0), q());
              }
            }
          };
          let w = ea(e.ctrl, _);
          s === r.LEAVE && h
            ? z.current.set(e, { phase: s, springs: w, payload: _ })
            : P.set(e, { phase: s, springs: w, payload: _ });
        });
        let Z = (0, a.useContext)(ed),
          D = (0, o.zH)(Z),
          N = Z !== D && v(Z);
        (0, o.bt)(() => {
          N &&
            (0, o.S6)(M, (e) => {
              e.ctrl.start({ default: Z });
            });
        }, [Z]),
          (0, o.S6)(P, (e, t) => {
            if (z.current.size) {
              let e = M.findIndex((e) => e.key === t.key);
              M.splice(e, 1);
            }
          }),
          (0, o.bt)(
            () => {
              (0, o.S6)(
                z.current.size ? z.current : P,
                ({ phase: e, payload: t }, n) => {
                  let { ctrl: i } = n;
                  (n.phase = e),
                    null == _ || _.add(i),
                    N && e == r.ENTER && i.start({ default: Z }),
                    t &&
                      (w(i, t.ref),
                      i.ref && !A.current
                        ? i.update(t)
                        : (i.start(t), A.current && (A.current = !1)));
                }
              );
            },
            s ? void 0 : n
          );
        let U = (e) =>
          a.createElement(
            a.Fragment,
            null,
            M.map((t, n) => {
              let { springs: r } = P.get(t) || t.ctrl,
                i = e(u({}, r), t.item, t, n);
              return i && i.type
                ? a.createElement(
                    i.type,
                    u({}, i.props, {
                      key:
                        o.is.str(t.key) || o.is.num(t.key) ? t.key : t.ctrl.id,
                      ref: i.ref,
                    })
                  )
                : i;
            })
          );
        return _ ? [U, _] : U;
      }
      ((i = r || (r = {})).MOUNT = "mount"),
        (i.ENTER = "enter"),
        (i.UPDATE = "update"),
        (i.LEAVE = "leave");
      let em = 1;
      class ey extends F {
        constructor(e, t) {
          super(),
            (this.key = void 0),
            (this.idle = !0),
            (this.calc = void 0),
            (this._active = new Set()),
            (this.source = e),
            (this.calc = (0, o.mD)(...t));
          let n = this._get(),
            r = (0, s.sb)(n);
          (0, s.f3)(this, r.create(n));
        }
        advance(e) {
          let t = this._get(),
            n = this.get();
          (0, o.Xy)(t, n) ||
            ((0, s.ys)(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && e_(this._active) && ex(this);
        }
        _get() {
          let e = o.is.arr(this.source)
            ? this.source.map(o.je)
            : (0, o.qo)((0, o.je)(this.source));
          return this.calc(...e);
        }
        _start() {
          this.idle &&
            !e_(this._active) &&
            ((this.idle = !1),
            (0, o.S6)((0, s.He)(this), (e) => {
              e.done = !1;
            }),
            o.OH.skipAnimation
              ? (o.Wn.batchedUpdates(() => this.advance()), ex(this))
              : o.fT.start(this));
        }
        _attach() {
          let e = 1;
          (0, o.S6)((0, o.qo)(this.source), (t) => {
            (0, o.j$)(t) && (0, o.UI)(t, this),
              N(t) &&
                (t.idle || this._active.add(t),
                (e = Math.max(e, t.priority + 1)));
          }),
            (this.priority = e),
            this._start();
        }
        _detach() {
          (0, o.S6)((0, o.qo)(this.source), (e) => {
            (0, o.j$)(e) && (0, o.iL)(e, this);
          }),
            this._active.clear(),
            ex(this);
        }
        eventObserved(e) {
          "change" == e.type
            ? e.idle
              ? this.advance()
              : (this._active.add(e.parent), this._start())
            : "idle" == e.type
            ? this._active.delete(e.parent)
            : "priority" == e.type &&
              (this.priority = (0, o.qo)(this.source).reduce(
                (e, t) => Math.max(e, (N(t) ? t.priority : 0) + 1),
                0
              ));
        }
      }
      function ev(e) {
        return !1 !== e.idle;
      }
      function e_(e) {
        return !e.size || Array.from(e).every(ev);
      }
      function ex(e) {
        e.idle ||
          ((e.idle = !0),
          (0, o.S6)((0, s.He)(e), (e) => {
            e.done = !0;
          }),
          (0, o.k0)(e, { type: "idle", parent: e }));
      }
      let ew = (e, ...t) => new ey(e, t);
      o.OH.assign({
        createStringInterpolator: o.qS,
        to: (e, t) => new ey(e, t),
      }),
        o.fT.advance;
    },
    50036: function (e, t, n) {
      "use strict";
      let r, i, o;
      n.d(t, {
        B0: function () {
          return ex;
        },
        OH: function () {
          return N;
        },
        UI: function () {
          return ek;
        },
        k0: function () {
          return e_;
        },
        O9: function () {
          return $;
        },
        mD: function () {
          return eh;
        },
        qS: function () {
          return ez;
        },
        dE: function () {
          return S;
        },
        ZR: function () {
          return eF;
        },
        LW: function () {
          return eN;
        },
        S6: function () {
          return j;
        },
        rU: function () {
          return R;
        },
        yl: function () {
          return E;
        },
        bl: function () {
          return P;
        },
        fT: function () {
          return Y;
        },
        Ll: function () {
          return ev;
        },
        je: function () {
          return ey;
        },
        j$: function () {
          return em;
        },
        is: function () {
          return C;
        },
        Df: function () {
          return eL;
        },
        Xy: function () {
          return O;
        },
        ZT: function () {
          return T;
        },
        Wn: function () {
          return s;
        },
        iL: function () {
          return eM;
        },
        qo: function () {
          return q;
        },
        NW: function () {
          return eI;
        },
        bt: function () {
          return eW;
        },
        Pr: function () {
          return eB;
        },
        tf: function () {
          return eH;
        },
        zH: function () {
          return e$;
        },
      });
      let a = w(),
        s = (e) => y(e, a),
        u = w();
      s.write = (e) => y(e, u);
      let c = w();
      s.onStart = (e) => y(e, c);
      let f = w();
      s.onFrame = (e) => y(e, f);
      let l = w();
      s.onFinish = (e) => y(e, l);
      let d = [];
      s.setTimeout = (e, t) => {
        let n = s.now() + t,
          r = () => {
            let e = d.findIndex((e) => e.cancel == r);
            ~e && d.splice(e, 1), (b -= ~e ? 1 : 0);
          },
          i = { time: n, handler: e, cancel: r };
        return d.splice(h(n), 0, i), (b += 1), v(), i;
      };
      let h = (e) => ~(~d.findIndex((t) => t.time > e) || ~d.length);
      (s.cancel = (e) => {
        c.delete(e), f.delete(e), a.delete(e), u.delete(e), l.delete(e);
      }),
        (s.sync = (e) => {
          (m = !0), s.batchedUpdates(e), (m = !1);
        }),
        (s.throttle = (e) => {
          let t;
          function n() {
            try {
              e(...t);
            } finally {
              t = null;
            }
          }
          function r(...e) {
            (t = e), s.onStart(n);
          }
          return (
            (r.handler = e),
            (r.cancel = () => {
              c.delete(n), (t = null);
            }),
            r
          );
        });
      let p =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      (s.use = (e) => (p = e)),
        (s.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        (s.batchedUpdates = (e) => e()),
        (s.catch = console.error),
        (s.frameLoop = "always"),
        (s.advance = () => {
          "demand" !== s.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
              )
            : x();
        });
      let g = -1,
        b = 0,
        m = !1;
      function y(e, t) {
        m ? (t.delete(e), e(0)) : (t.add(e), v());
      }
      function v() {
        g < 0 && ((g = 0), "demand" !== s.frameLoop && p(_));
      }
      function _() {
        ~g && (p(_), s.batchedUpdates(x));
      }
      function x() {
        let e = g,
          t = h((g = s.now()));
        t && (k(d.splice(0, t), (e) => e.handler()), (b -= t)),
          c.flush(),
          a.flush(e ? Math.min(64, g - e) : 16.667),
          f.flush(),
          u.flush(),
          l.flush(),
          b || (g = -1);
      }
      function w() {
        let e = new Set(),
          t = e;
        return {
          add(n) {
            (b += t != e || e.has(n) ? 0 : 1), e.add(n);
          },
          delete: (n) => ((b -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
          flush(n) {
            t.size &&
              ((e = new Set()),
              (b -= t.size),
              k(t, (t) => t(n) && e.add(t)),
              (b += e.size),
              (t = e));
          },
        };
      }
      function k(e, t) {
        e.forEach((e) => {
          try {
            t(e);
          } catch (e) {
            s.catch(e);
          }
        });
      }
      var M = n(2784);
      function T() {}
      let S = (e, t, n) =>
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
          }),
        C = {
          arr: Array.isArray,
          obj: (e) => !!e && "Object" === e.constructor.name,
          fun: (e) => "function" == typeof e,
          str: (e) => "string" == typeof e,
          num: (e) => "number" == typeof e,
          und: (e) => void 0 === e,
        };
      function O(e, t) {
        if (C.arr(e)) {
          if (!C.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
          return !0;
        }
        return e === t;
      }
      let j = (e, t) => e.forEach(t);
      function R(e, t, n) {
        if (C.arr(e)) {
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
          return;
        }
        for (let r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
      }
      let q = (e) => (C.und(e) ? [] : C.arr(e) ? e : [e]);
      function E(e, t) {
        if (e.size) {
          let n = Array.from(e);
          e.clear(), j(n, t);
        }
      }
      let P = (e, ...t) => E(e, (e) => e(...t)),
        z = () =>
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        A = null,
        Z = !1,
        D = T;
      var N = Object.freeze({
        __proto__: null,
        get createStringInterpolator() {
          return r;
        },
        get to() {
          return i;
        },
        get colors() {
          return A;
        },
        get skipAnimation() {
          return Z;
        },
        get willAdvance() {
          return D;
        },
        assign: (e) => {
          e.to && (i = e.to),
            e.now && (s.now = e.now),
            void 0 !== e.colors && (A = e.colors),
            null != e.skipAnimation && (Z = e.skipAnimation),
            e.createStringInterpolator && (r = e.createStringInterpolator),
            e.requestAnimationFrame && s.use(e.requestAnimationFrame),
            e.batchedUpdates && (s.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (D = e.willAdvance),
            e.frameLoop && (s.frameLoop = e.frameLoop);
        },
      });
      let U = new Set(),
        F = [],
        L = [],
        W = 0,
        Y = {
          get idle() {
            return !U.size && !F.length;
          },
          start(e) {
            W > e.priority ? (U.add(e), s.onStart(I)) : (B(e), s(V));
          },
          advance: V,
          sort(e) {
            if (W) s.onFrame(() => Y.sort(e));
            else {
              let t = F.indexOf(e);
              ~t && (F.splice(t, 1), H(e));
            }
          },
          clear() {
            (F = []), U.clear();
          },
        };
      function I() {
        U.forEach(B), U.clear(), s(V);
      }
      function B(e) {
        F.includes(e) || H(e);
      }
      function H(e) {
        F.splice(
          (function (e, t) {
            let n = e.findIndex(t);
            return n < 0 ? e.length : n;
          })(F, (t) => t.priority > e.priority),
          0,
          e
        );
      }
      function V(e) {
        let t = L;
        for (let n = 0; n < F.length; n++) {
          let r = F[n];
          (W = r.priority), r.idle || (D(r), r.advance(e), r.idle || t.push(r));
        }
        return (W = 0), ((L = F).length = 0), (F = t).length > 0;
      }
      let $ = {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
        G = "[-+]?\\d*\\.?\\d+",
        X = G + "%";
      function Q(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      let J = RegExp("rgb" + Q(G, G, G)),
        K = RegExp("rgba" + Q(G, G, G, G)),
        ee = RegExp("hsl" + Q(G, X, X)),
        et = RegExp("hsla" + Q(G, X, X, G)),
        en = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        er =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ei = /^#([0-9a-fA-F]{6})$/,
        eo = /^#([0-9a-fA-F]{8})$/;
      function ea(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      }
      function es(e, t, n) {
        let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
          i = 2 * n - r;
        return (
          (Math.round(255 * ea(i, r, e + 1 / 3)) << 24) |
          (Math.round(255 * ea(i, r, e)) << 16) |
          (Math.round(255 * ea(i, r, e - 1 / 3)) << 8)
        );
      }
      function eu(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function ec(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function ef(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function el(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function ed(e) {
        let t;
        let n =
          "number" == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = ei.exec(e))
            ? parseInt(t[1] + "ff", 16) >>> 0
            : A && void 0 !== A[e]
            ? A[e]
            : (t = J.exec(e))
            ? ((eu(t[1]) << 24) | (eu(t[2]) << 16) | (eu(t[3]) << 8) | 255) >>>
              0
            : (t = K.exec(e))
            ? ((eu(t[1]) << 24) |
                (eu(t[2]) << 16) |
                (eu(t[3]) << 8) |
                ef(t[4])) >>>
              0
            : (t = en.exec(e))
            ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
            : (t = eo.exec(e))
            ? parseInt(t[1], 16) >>> 0
            : (t = er.exec(e))
            ? parseInt(
                t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                16
              ) >>> 0
            : (t = ee.exec(e))
            ? (255 | es(ec(t[1]), el(t[2]), el(t[3]))) >>> 0
            : (t = et.exec(e))
            ? (es(ec(t[1]), el(t[2]), el(t[3])) | ef(t[4])) >>> 0
            : null;
        if (null === n) return e;
        let r = (4278190080 & (n = n || 0)) >>> 24,
          i = (16711680 & n) >>> 16,
          o = (65280 & n) >>> 8,
          a = (255 & n) / 255;
        return `rgba(${r}, ${i}, ${o}, ${a})`;
      }
      let eh = (e, t, n) => {
        if (C.fun(e)) return e;
        if (C.arr(e)) return eh({ range: e, output: t, extrapolate: n });
        if (C.str(e.output[0])) return r(e);
        let i = e.output,
          o = e.range || [0, 1],
          a = e.extrapolateLeft || e.extrapolate || "extend",
          s = e.extrapolateRight || e.extrapolate || "extend",
          u = e.easing || ((e) => e);
        return (t) => {
          let n = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
          })(t, o);
          return (function (e, t, n, r, i, o, a, s, u) {
            let c = u ? u(e) : e;
            if (c < t) {
              if ("identity" === a) return c;
              "clamp" === a && (c = t);
            }
            if (c > n) {
              if ("identity" === s) return c;
              "clamp" === s && (c = n);
            }
            return r === i
              ? r
              : t === n
              ? e <= t
                ? r
                : i
              : (t === -1 / 0
                  ? (c = -c)
                  : n === 1 / 0
                  ? (c -= t)
                  : (c = (c - t) / (n - t)),
                (c = o(c)),
                r === -1 / 0
                  ? (c = -c)
                  : i === 1 / 0
                  ? (c += r)
                  : (c = c * (i - r) + r),
                c);
          })(t, o[n], o[n + 1], i[n], i[n + 1], u, a, s, e.map);
        };
      };
      function ep() {
        return (ep =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      let eg = Symbol.for("FluidValue.get"),
        eb = Symbol.for("FluidValue.observers"),
        em = (e) => !!(e && e[eg]),
        ey = (e) => (e && e[eg] ? e[eg]() : e),
        ev = (e) => e[eb] || null;
      function e_(e, t) {
        let n = e[eb];
        n &&
          n.forEach((e) => {
            e.eventObserved ? e.eventObserved(t) : e(t);
          });
      }
      class ex {
        constructor(e) {
          if (((this[eg] = void 0), (this[eb] = void 0), !e && !(e = this.get)))
            throw Error("Unknown getter");
          ew(this, e);
        }
      }
      let ew = (e, t) => eT(e, eg, t);
      function ek(e, t) {
        if (e[eg]) {
          let n = e[eb];
          n || eT(e, eb, (n = new Set())),
            !n.has(t) &&
              (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
        }
        return t;
      }
      function eM(e, t) {
        let n = e[eb];
        if (n && n.has(t)) {
          let r = n.size - 1;
          r ? n.delete(t) : (e[eb] = null),
            e.observerRemoved && e.observerRemoved(r, t);
        }
      }
      let eT = (e, t, n) =>
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
          }),
        eS = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        eC =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        eO = RegExp(`(${eS.source})(%|[a-z]+)`, "i"),
        ej = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        eR = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        eq = (e) => {
          let [t, n] = eE(e);
          if (!t || z()) return e;
          let r = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            let e = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(n);
            if (e) return e;
          } else if (n && eR.test(n)) return eq(n);
          else if (n) return n;
          return e;
        },
        eE = (e) => {
          let t = eR.exec(e);
          if (!t) return [,];
          let [, n, r] = t;
          return [n, r];
        },
        eP = (e, t, n, r, i) =>
          `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
        ez = (e) => {
          o ||
            (o = A
              ? RegExp(`(${Object.keys(A).join("|")})(?!\\w)`, "g")
              : /^\b$/);
          let t = e.output.map((e) =>
              ey(e).replace(eR, eq).replace(eC, ed).replace(o, ed)
            ),
            n = t.map((e) => e.match(eS).map(Number)),
            r = n[0]
              .map((e, t) =>
                n.map((e) => {
                  if (!(t in e))
                    throw Error(
                      'The arity of each "output" value must be equal'
                    );
                  return e[t];
                })
              )
              .map((t) => eh(ep({}, e, { output: t })));
          return (e) => {
            var n;
            let i =
                !eO.test(t[0]) &&
                (null == (n = t.find((e) => eO.test(e)))
                  ? void 0
                  : n.replace(eS, "")),
              o = 0;
            return t[0]
              .replace(eS, () => `${r[o++](e)}${i || ""}`)
              .replace(ej, eP);
          };
        },
        eA = "react-spring: ",
        eZ = (e) => {
          let t = !1;
          if ("function" != typeof e)
            throw TypeError(`${eA}once requires a function parameter`);
          return (...n) => {
            t || (e(...n), (t = !0));
          };
        },
        eD = eZ(console.warn);
      function eN() {
        eD(
          `${eA}The "interpolate" function is deprecated in v9 (use "to" instead)`
        );
      }
      let eU = eZ(console.warn);
      function eF() {
        eU(
          `${eA}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
        );
      }
      function eL(e) {
        return (
          C.str(e) &&
          ("#" == e[0] ||
            /\d/.test(e) ||
            (!z() && eR.test(e)) ||
            e in (A || {}))
        );
      }
      let eW =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
            ? M.useLayoutEffect
            : M.useEffect,
        eY = () => {
          let e = (0, M.useRef)(!1);
          return (
            eW(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              []
            ),
            e
          );
        };
      function eI() {
        let e = (0, M.useState)()[1],
          t = eY();
        return () => {
          t.current && e(Math.random());
        };
      }
      function eB(e, t) {
        let [n] = (0, M.useState)(() => ({ inputs: t, result: e() })),
          r = (0, M.useRef)(),
          i = r.current,
          o = i;
        return (
          o
            ? (t &&
                o.inputs &&
                (function (e, t) {
                  if (e.length !== t.length) return !1;
                  for (let n = 0; n < e.length; n++)
                    if (e[n] !== t[n]) return !1;
                  return !0;
                })(t, o.inputs)) ||
              (o = { inputs: t, result: e() })
            : (o = n),
          (0, M.useEffect)(() => {
            (r.current = o), i == n && (n.inputs = n.result = void 0);
          }, [o]),
          o.result
        );
      }
      let eH = (e) => (0, M.useEffect)(e, eV),
        eV = [];
      function e$(e) {
        let t = (0, M.useRef)();
        return (
          (0, M.useEffect)(() => {
            t.current = e;
          }),
          t.current
        );
      }
    },
    68847: function (e, t, n) {
      "use strict";
      n.d(t, {
        B8: function () {
          return M;
        },
        Il: function () {
          return i;
        },
        J5: function () {
          return a;
        },
        SU: function () {
          return k;
        },
        Ss: function () {
          return T;
        },
        ZP: function () {
          return _;
        },
        xV: function () {
          return o;
        },
      });
      var r = n(40948);
      function i() {}
      var o = 0.7,
        a = 1.4285714285714286,
        s = "\\s*([+-]?\\d+)\\s*",
        u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        f = /^#([0-9a-f]{3,8})$/,
        l = RegExp("^rgb\\(" + [s, s, s] + "\\)$"),
        d = RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
        h = RegExp("^rgba\\(" + [s, s, s, u] + "\\)$"),
        p = RegExp("^rgba\\(" + [c, c, c, u] + "\\)$"),
        g = RegExp("^hsl\\(" + [u, c, c] + "\\)$"),
        b = RegExp("^hsla\\(" + [u, c, c, u] + "\\)$"),
        m = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function y() {
        return this.rgb().formatHex();
      }
      function v() {
        return this.rgb().formatRgb();
      }
      function _(e) {
        var t, n;
        return (
          (e = (e + "").trim().toLowerCase()),
          (t = f.exec(e))
            ? ((n = t[1].length),
              (t = parseInt(t[1], 16)),
              6 === n
                ? x(t)
                : 3 === n
                ? new T(
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    ((15 & t) << 4) | (15 & t),
                    1
                  )
                : 8 === n
                ? w(
                    (t >> 24) & 255,
                    (t >> 16) & 255,
                    (t >> 8) & 255,
                    (255 & t) / 255
                  )
                : 4 === n
                ? w(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    (((15 & t) << 4) | (15 & t)) / 255
                  )
                : null)
            : (t = l.exec(e))
            ? new T(t[1], t[2], t[3], 1)
            : (t = d.exec(e))
            ? new T(
                (255 * t[1]) / 100,
                (255 * t[2]) / 100,
                (255 * t[3]) / 100,
                1
              )
            : (t = h.exec(e))
            ? w(t[1], t[2], t[3], t[4])
            : (t = p.exec(e))
            ? w(
                (255 * t[1]) / 100,
                (255 * t[2]) / 100,
                (255 * t[3]) / 100,
                t[4]
              )
            : (t = g.exec(e))
            ? j(t[1], t[2] / 100, t[3] / 100, 1)
            : (t = b.exec(e))
            ? j(t[1], t[2] / 100, t[3] / 100, t[4])
            : m.hasOwnProperty(e)
            ? x(m[e])
            : "transparent" === e
            ? new T(NaN, NaN, NaN, 0)
            : null
        );
      }
      function x(e) {
        return new T((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
      }
      function w(e, t, n, r) {
        return r <= 0 && (e = t = n = NaN), new T(e, t, n, r);
      }
      function k(e) {
        return (e instanceof i || (e = _(e)), e)
          ? new T((e = e.rgb()).r, e.g, e.b, e.opacity)
          : new T();
      }
      function M(e, t, n, r) {
        return 1 == arguments.length ? k(e) : new T(e, t, n, null == r ? 1 : r);
      }
      function T(e, t, n, r) {
        (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
      }
      function S() {
        return "#" + O(this.r) + O(this.g) + O(this.b);
      }
      function C() {
        var e = this.opacity;
        return (
          (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)))
            ? "rgb("
            : "rgba(") +
          Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
          (1 === e ? ")" : ", " + e + ")")
        );
      }
      function O(e) {
        return (
          ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16
            ? "0"
            : "") + e.toString(16)
        );
      }
      function j(e, t, n, r) {
        return (
          r <= 0
            ? (e = t = n = NaN)
            : n <= 0 || n >= 1
            ? (e = t = NaN)
            : t <= 0 && (e = NaN),
          new q(e, t, n, r)
        );
      }
      function R(e) {
        if (e instanceof q) return new q(e.h, e.s, e.l, e.opacity);
        if ((e instanceof i || (e = _(e)), !e)) return new q();
        if (e instanceof q) return e;
        var t = (e = e.rgb()).r / 255,
          n = e.g / 255,
          r = e.b / 255,
          o = Math.min(t, n, r),
          a = Math.max(t, n, r),
          s = NaN,
          u = a - o,
          c = (a + o) / 2;
        return (
          u
            ? ((s =
                t === a
                  ? (n - r) / u + (n < r) * 6
                  : n === a
                  ? (r - t) / u + 2
                  : (t - n) / u + 4),
              (u /= c < 0.5 ? a + o : 2 - a - o),
              (s *= 60))
            : (u = c > 0 && c < 1 ? 0 : s),
          new q(s, u, c, e.opacity)
        );
      }
      function q(e, t, n, r) {
        (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
      }
      function E(e, t, n) {
        return (
          (e < 60
            ? t + ((n - t) * e) / 60
            : e < 180
            ? n
            : e < 240
            ? t + ((n - t) * (240 - e)) / 60
            : t) * 255
        );
      }
      (0, r.Z)(i, _, {
        copy: function (e) {
          return Object.assign(new this.constructor(), this, e);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: y,
        formatHex: y,
        formatHsl: function () {
          return R(this).formatHsl();
        },
        formatRgb: v,
        toString: v,
      }),
        (0, r.Z)(
          T,
          M,
          (0, r.l)(i, {
            brighter: function (e) {
              return (
                (e = null == e ? a : Math.pow(a, e)),
                new T(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? o : Math.pow(o, e)),
                new T(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: S,
            formatHex: S,
            formatRgb: C,
            toString: C,
          })
        ),
        (0, r.Z)(
          q,
          function (e, t, n, r) {
            return 1 == arguments.length
              ? R(e)
              : new q(e, t, n, null == r ? 1 : r);
          },
          (0, r.l)(i, {
            brighter: function (e) {
              return (
                (e = null == e ? a : Math.pow(a, e)),
                new q(this.h, this.s, this.l * e, this.opacity)
              );
            },
            darker: function (e) {
              return (
                (e = null == e ? o : Math.pow(o, e)),
                new q(this.h, this.s, this.l * e, this.opacity)
              );
            },
            rgb: function () {
              var e = (this.h % 360) + (this.h < 0) * 360,
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * t,
                i = 2 * n - r;
              return new T(
                E(e >= 240 ? e - 240 : e + 120, i, r),
                E(e, i, r),
                E(e < 120 ? e + 240 : e - 120, i, r),
                this.opacity
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var e = this.opacity;
              return (
                (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)))
                  ? "hsl("
                  : "hsla(") +
                (this.h || 0) +
                ", " +
                100 * (this.s || 0) +
                "%, " +
                100 * (this.l || 0) +
                "%" +
                (1 === e ? ")" : ", " + e + ")")
              );
            },
          })
        );
    },
    91200: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(40948),
        i = n(68847);
      let o = Math.PI / 180,
        a = 180 / Math.PI;
      var s = -1.78277 * 0.29227 - 0.1347134789;
      function u(e, t, n, r) {
        return 1 == arguments.length
          ? (function (e) {
              if (e instanceof c) return new c(e.h, e.s, e.l, e.opacity);
              e instanceof i.Ss || (e = (0, i.SU)(e));
              var t = e.r / 255,
                n = e.g / 255,
                r = e.b / 255,
                o =
                  (s * r + -1.7884503806 * t - 3.5172982438 * n) /
                  (s + -1.7884503806 - 3.5172982438),
                u = r - o,
                f = -((1.97294 * (n - o) - -0.29227 * u) / 0.90649),
                l = Math.sqrt(f * f + u * u) / (1.97294 * o * (1 - o)),
                d = l ? Math.atan2(f, u) * a - 120 : NaN;
              return new c(d < 0 ? d + 360 : d, l, o, e.opacity);
            })(e)
          : new c(e, t, n, null == r ? 1 : r);
      }
      function c(e, t, n, r) {
        (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
      }
      (0, r.Z)(
        c,
        u,
        (0, r.l)(i.Il, {
          brighter: function (e) {
            return (
              (e = null == e ? i.J5 : Math.pow(i.J5, e)),
              new c(this.h, this.s, this.l * e, this.opacity)
            );
          },
          darker: function (e) {
            return (
              (e = null == e ? i.xV : Math.pow(i.xV, e)),
              new c(this.h, this.s, this.l * e, this.opacity)
            );
          },
          rgb: function () {
            var e = isNaN(this.h) ? 0 : (this.h + 120) * o,
              t = +this.l,
              n = isNaN(this.s) ? 0 : this.s * t * (1 - t),
              r = Math.cos(e),
              a = Math.sin(e);
            return new i.Ss(
              255 * (t + n * (-0.14861 * r + 1.78277 * a)),
              255 * (t + n * (-0.29227 * r + -0.90649 * a)),
              255 * (t + 1.97294 * r * n),
              this.opacity
            );
          },
        })
      );
    },
    40948: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        (e.prototype = t.prototype = n), (n.constructor = e);
      }
      function i(e, t) {
        var n = Object.create(e.prototype);
        for (var r in t) n[r] = t[r];
        return n;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
        l: function () {
          return i;
        },
      });
    },
    82582: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (
          (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var n,
          r = e.slice(0, n);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
      }
      n.d(t, {
        WU: function () {
          return a;
        },
      });
      var i,
        o,
        a,
        s =
          /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function u(e) {
        var t;
        if (!(t = s.exec(e))) throw Error("invalid format: " + e);
        return new c({
          fill: t[1],
          align: t[2],
          sign: t[3],
          symbol: t[4],
          zero: t[5],
          width: t[6],
          comma: t[7],
          precision: t[8] && t[8].slice(1),
          trim: t[9],
          type: t[10],
        });
      }
      function c(e) {
        (this.fill = void 0 === e.fill ? " " : e.fill + ""),
          (this.align = void 0 === e.align ? ">" : e.align + ""),
          (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
          (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
          (this.zero = !!e.zero),
          (this.width = void 0 === e.width ? void 0 : +e.width),
          (this.comma = !!e.comma),
          (this.precision = void 0 === e.precision ? void 0 : +e.precision),
          (this.trim = !!e.trim),
          (this.type = void 0 === e.type ? "" : e.type + "");
      }
      function f(e, t) {
        var n = r(e, t);
        if (!n) return e + "";
        var i = n[0],
          o = n[1];
        return o < 0
          ? "0." + Array(-o).join("0") + i
          : i.length > o + 1
          ? i.slice(0, o + 1) + "." + i.slice(o + 1)
          : i + Array(o - i.length + 2).join("0");
      }
      (u.prototype = c.prototype),
        (c.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
      var l = {
        "%": function (e, t) {
          return (100 * e).toFixed(t);
        },
        b: function (e) {
          return Math.round(e).toString(2);
        },
        c: function (e) {
          return e + "";
        },
        d: function (e) {
          return Math.abs((e = Math.round(e))) >= 1e21
            ? e.toLocaleString("en").replace(/,/g, "")
            : e.toString(10);
        },
        e: function (e, t) {
          return e.toExponential(t);
        },
        f: function (e, t) {
          return e.toFixed(t);
        },
        g: function (e, t) {
          return e.toPrecision(t);
        },
        o: function (e) {
          return Math.round(e).toString(8);
        },
        p: function (e, t) {
          return f(100 * e, t);
        },
        r: f,
        s: function (e, t) {
          var n = r(e, t);
          if (!n) return e + "";
          var o = n[0],
            a = n[1],
            s = a - (i = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
            u = o.length;
          return s === u
            ? o
            : s > u
            ? o + Array(s - u + 1).join("0")
            : s > 0
            ? o.slice(0, s) + "." + o.slice(s)
            : "0." + Array(1 - s).join("0") + r(e, Math.max(0, t + s - 1))[0];
        },
        X: function (e) {
          return Math.round(e).toString(16).toUpperCase();
        },
        x: function (e) {
          return Math.round(e).toString(16);
        },
      };
      function d(e) {
        return e;
      }
      var h = Array.prototype.map,
        p = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      (a = (o = (function (e) {
        var t,
          n,
          o,
          a =
            void 0 === e.grouping || void 0 === e.thousands
              ? d
              : ((t = h.call(e.grouping, Number)),
                (n = e.thousands + ""),
                function (e, r) {
                  for (
                    var i = e.length, o = [], a = 0, s = t[0], u = 0;
                    i > 0 &&
                    s > 0 &&
                    (u + s + 1 > r && (s = Math.max(1, r - u)),
                    o.push(e.substring((i -= s), i + s)),
                    !((u += s + 1) > r));

                  )
                    s = t[(a = (a + 1) % t.length)];
                  return o.reverse().join(n);
                }),
          s = void 0 === e.currency ? "" : e.currency[0] + "",
          c = void 0 === e.currency ? "" : e.currency[1] + "",
          f = void 0 === e.decimal ? "." : e.decimal + "",
          g =
            void 0 === e.numerals
              ? d
              : ((o = h.call(e.numerals, String)),
                function (e) {
                  return e.replace(/[0-9]/g, function (e) {
                    return o[+e];
                  });
                }),
          b = void 0 === e.percent ? "%" : e.percent + "",
          m = void 0 === e.minus ? "-" : e.minus + "",
          y = void 0 === e.nan ? "NaN" : e.nan + "";
        function v(e) {
          var t = (e = u(e)).fill,
            n = e.align,
            r = e.sign,
            o = e.symbol,
            d = e.zero,
            h = e.width,
            v = e.comma,
            _ = e.precision,
            x = e.trim,
            w = e.type;
          "n" === w
            ? ((v = !0), (w = "g"))
            : l[w] || (void 0 === _ && (_ = 12), (x = !0), (w = "g")),
            (d || ("0" === t && "=" === n)) && ((d = !0), (t = "0"), (n = "="));
          var k =
              "$" === o
                ? s
                : "#" === o && /[boxX]/.test(w)
                ? "0" + w.toLowerCase()
                : "",
            M = "$" === o ? c : /[%p]/.test(w) ? b : "",
            T = l[w],
            S = /[defgprs%]/.test(w);
          function C(e) {
            var o,
              s,
              u,
              c = k,
              l = M;
            if ("c" === w) (l = T(e) + l), (e = "");
            else {
              var b = (e = +e) < 0 || 1 / e < 0;
              if (
                ((e = isNaN(e) ? y : T(Math.abs(e), _)),
                x &&
                  (e = (function (e) {
                    e: for (var t, n = e.length, r = 1, i = -1; r < n; ++r)
                      switch (e[r]) {
                        case ".":
                          i = t = r;
                          break;
                        case "0":
                          0 === i && (i = r), (t = r);
                          break;
                        default:
                          if (!+e[r]) break e;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? e.slice(0, i) + e.slice(t + 1) : e;
                  })(e)),
                b && 0 == +e && "+" !== r && (b = !1),
                (c =
                  (b ? ("(" === r ? r : m) : "-" === r || "(" === r ? "" : r) +
                  c),
                (l =
                  ("s" === w ? p[8 + i / 3] : "") +
                  l +
                  (b && "(" === r ? ")" : "")),
                S)
              ) {
                for (o = -1, s = e.length; ++o < s; )
                  if (48 > (u = e.charCodeAt(o)) || u > 57) {
                    (l = (46 === u ? f + e.slice(o + 1) : e.slice(o)) + l),
                      (e = e.slice(0, o));
                    break;
                  }
              }
            }
            v && !d && (e = a(e, 1 / 0));
            var C = c.length + e.length + l.length,
              O = C < h ? Array(h - C + 1).join(t) : "";
            switch (
              (v &&
                d &&
                ((e = a(O + e, O.length ? h - l.length : 1 / 0)), (O = "")),
              n)
            ) {
              case "<":
                e = c + e + l + O;
                break;
              case "=":
                e = c + O + e + l;
                break;
              case "^":
                e = O.slice(0, (C = O.length >> 1)) + c + e + l + O.slice(C);
                break;
              default:
                e = O + c + e + l;
            }
            return g(e);
          }
          return (
            (_ =
              void 0 === _
                ? 6
                : /[gprs]/.test(w)
                ? Math.max(1, Math.min(21, _))
                : Math.max(0, Math.min(20, _))),
            (C.toString = function () {
              return e + "";
            }),
            C
          );
        }
        return {
          format: v,
          formatPrefix: function (e, t) {
            var n,
              i = v((((e = u(e)).type = "f"), e)),
              o =
                3 *
                Math.max(
                  -8,
                  Math.min(
                    8,
                    Math.floor(((n = r(Math.abs((n = t)))) ? n[1] : NaN) / 3)
                  )
                ),
              a = Math.pow(10, -o),
              s = p[8 + o / 3];
            return function (e) {
              return i(a * e) + s;
            };
          },
        };
      })({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        minus: "-",
      })).format),
        o.formatPrefix;
    },
    9486: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return s;
        },
        yi: function () {
          return a;
        },
        wx: function () {
          return o;
        },
      });
      var r = (e) => () => e;
      function i(e, t) {
        return function (n) {
          return e + n * t;
        };
      }
      function o(e, t) {
        var n = t - e;
        return n
          ? i(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
          : r(isNaN(e) ? t : e);
      }
      function a(e) {
        return 1 == (e = +e)
          ? s
          : function (t, n) {
              var i, o, a;
              return n - t
                ? ((i = t),
                  (o = n),
                  (i = Math.pow(i, (a = e))),
                  (o = Math.pow(o, a) - i),
                  (a = 1 / a),
                  function (e) {
                    return Math.pow(i + e * o, a);
                  })
                : r(isNaN(t) ? n : t);
            };
      }
      function s(e, t) {
        var n = t - e;
        return n ? i(e, n) : r(isNaN(e) ? t : e);
      }
    },
    37580: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return a;
        },
      });
      var r = n(91200),
        i = n(9486);
      function o(e) {
        return (function t(n) {
          function o(t, o) {
            var a = e((t = (0, r.Z)(t)).h, (o = (0, r.Z)(o)).h),
              s = (0, i.ZP)(t.s, o.s),
              u = (0, i.ZP)(t.l, o.l),
              c = (0, i.ZP)(t.opacity, o.opacity);
            return function (e) {
              return (
                (t.h = a(e)),
                (t.s = s(e)),
                (t.l = u(Math.pow(e, n))),
                (t.opacity = c(e)),
                t + ""
              );
            };
          }
          return (n = +n), (o.gamma = t), o;
        })(1);
      }
      o(i.wx);
      var a = o(i.ZP);
    },
    45795: function (e, t, n) {
      "use strict";
      var r = n(89589);
      t.Z = (0, r.Z)("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
    },
    25673: function (e, t, n) {
      "use strict";
      var r = n(89589);
      t.Z = (0, r.Z)("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
    },
    52399: function (e, t, n) {
      "use strict";
      var r = n(89589);
      t.Z = (0, r.Z)(
        "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"
      );
    },
    43642: function (e, t, n) {
      "use strict";
      var r = n(89589);
      t.Z = (0, r.Z)("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
    },
    62514: function (e, t, n) {
      "use strict";
      var r = n(89589);
      t.Z = (0, r.Z)("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
    },
    94841: function (e, t, n) {
      "use strict";
      var r = n(89589);
      t.Z = (0, r.Z)("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
    },
    33536: function (e, t, n) {
      "use strict";
      var r = n(89589);
      t.Z = (0, r.Z)("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
    },
    24966: function (e, t, n) {
      "use strict";
      var r = n(89589);
      t.Z = (0, r.Z)(
        "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
      );
    },
    8475: function (e, t, n) {
      "use strict";
      var r = n(89589);
      t.Z = (0, r.Z)(
        "1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"
      );
    },
    89589: function (e, t, n) {
      "use strict";
      function r(e) {
        for (var t = (e.length / 6) | 0, n = Array(t), r = 0; r < t; )
          n[r] = "#" + e.slice(6 * r, 6 * ++r);
        return n;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    28133: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "d8b365f5f5f55ab4ac",
            "a6611adfc27d80cdc1018571",
            "a6611adfc27df5f5f580cdc1018571",
            "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
            "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
            "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
            "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
            "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
            "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    91233: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "af8dc3f7f7f77fbf7b",
            "7b3294c2a5cfa6dba0008837",
            "7b3294c2a5cff7f7f7a6dba0008837",
            "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
            "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
            "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
            "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
            "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
            "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    33037: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "e9a3c9f7f7f7a1d76a",
            "d01c8bf1b6dab8e1864dac26",
            "d01c8bf1b6daf7f7f7b8e1864dac26",
            "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
            "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
            "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
            "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
            "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
            "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    15333: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "998ec3f7f7f7f1a340",
            "5e3c99b2abd2fdb863e66101",
            "5e3c99b2abd2f7f7f7fdb863e66101",
            "542788998ec3d8daebfee0b6f1a340b35806",
            "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
            "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
            "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
            "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
            "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    21594: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "ef8a62f7f7f767a9cf",
            "ca0020f4a58292c5de0571b0",
            "ca0020f4a582f7f7f792c5de0571b0",
            "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
            "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
            "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
            "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
            "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
            "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    39418: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "ef8a62ffffff999999",
            "ca0020f4a582bababa404040",
            "ca0020f4a582ffffffbababa404040",
            "b2182bef8a62fddbc7e0e0e09999994d4d4d",
            "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
            "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
            "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
            "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
            "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    65648: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "fc8d59ffffbf91bfdb",
            "d7191cfdae61abd9e92c7bb6",
            "d7191cfdae61ffffbfabd9e92c7bb6",
            "d73027fc8d59fee090e0f3f891bfdb4575b4",
            "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
            "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
            "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
            "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
            "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    10549: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "fc8d59ffffbf91cf60",
            "d7191cfdae61a6d96a1a9641",
            "d7191cfdae61ffffbfa6d96a1a9641",
            "d73027fc8d59fee08bd9ef8b91cf601a9850",
            "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
            "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
            "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
            "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
            "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    30656: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "fc8d59ffffbf99d594",
            "d7191cfdae61abdda42b83ba",
            "d7191cfdae61ffffbfabdda42b83ba",
            "d53e4ffc8d59fee08be6f59899d5943288bd",
            "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
            "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
            "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
            "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
            "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    43023: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(68847);
      function i(e, t, n, r, i) {
        var o = e * e,
          a = o * e;
        return (
          ((1 - 3 * e + 3 * o - a) * t +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * e + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      var o = n(9486);
      function a(e) {
        return function (t) {
          var n,
            i,
            o = t.length,
            a = Array(o),
            s = Array(o),
            u = Array(o);
          for (n = 0; n < o; ++n)
            (i = (0, r.B8)(t[n])),
              (a[n] = i.r || 0),
              (s[n] = i.g || 0),
              (u[n] = i.b || 0);
          return (
            (a = e(a)),
            (s = e(s)),
            (u = e(u)),
            (i.opacity = 1),
            function (e) {
              return (i.r = a(e)), (i.g = s(e)), (i.b = u(e)), i + "";
            }
          );
        };
      }
      !(function e(t) {
        var n = (0, o.yi)(t);
        function i(e, t) {
          var i = n((e = (0, r.B8)(e)).r, (t = (0, r.B8)(t)).r),
            a = n(e.g, t.g),
            s = n(e.b, t.b),
            u = (0, o.ZP)(e.opacity, t.opacity);
          return function (t) {
            return (
              (e.r = i(t)),
              (e.g = a(t)),
              (e.b = s(t)),
              (e.opacity = u(t)),
              e + ""
            );
          };
        }
        return (i.gamma = e), i;
      })(1);
      var s = a(function (e) {
        var t = e.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
            o = e[r],
            a = e[r + 1],
            s = r > 0 ? e[r - 1] : 2 * o - a,
            u = r < t - 1 ? e[r + 2] : 2 * a - o;
          return i((n - r / t) * t, s, o, a, u);
        };
      });
      a(function (e) {
        var t = e.length;
        return function (n) {
          var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
            o = e[(r + t - 1) % t],
            a = e[r % t],
            s = e[(r + 1) % t],
            u = e[(r + 2) % t];
          return i((n - r / t) * t, o, a, s, u);
        };
      });
      var u = (e) => s(e[e.length - 1]);
    },
    52149: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "e5f5f999d8c92ca25f",
            "edf8fbb2e2e266c2a4238b45",
            "edf8fbb2e2e266c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    43261: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "e0ecf49ebcda8856a7",
            "edf8fbb3cde38c96c688419d",
            "edf8fbb3cde38c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    4267: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "e0f3dba8ddb543a2ca",
            "f0f9e8bae4bc7bccc42b8cbe",
            "f0f9e8bae4bc7bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    22504: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "fee8c8fdbb84e34a33",
            "fef0d9fdcc8afc8d59d7301f",
            "fef0d9fdcc8afc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    93418: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "ece7f2a6bddb2b8cbe",
            "f1eef6bdc9e174a9cf0570b0",
            "f1eef6bdc9e174a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    8302: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "ece2f0a6bddb1c9099",
            "f6eff7bdc9e167a9cf02818a",
            "f6eff7bdc9e167a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    65972: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "e7e1efc994c7dd1c77",
            "f1eef6d7b5d8df65b0ce1256",
            "f1eef6d7b5d8df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    1906: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "fde0ddfa9fb5c51b8a",
            "feebe2fbb4b9f768a1ae017e",
            "feebe2fbb4b9f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    5201: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "f7fcb9addd8e31a354",
            "ffffccc2e69978c679238443",
            "ffffccc2e69978c67931a354006837",
            "ffffccd9f0a3addd8e78c67931a354006837",
            "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    44447: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "edf8b17fcdbb2c7fb8",
            "ffffcca1dab441b6c4225ea8",
            "ffffcca1dab441b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    5768: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "fff7bcfec44fd95f0e",
            "ffffd4fed98efe9929cc4c02",
            "ffffd4fed98efe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    91599: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "ffeda0feb24cf03b20",
            "ffffb2fecc5cfd8d3ce31a1c",
            "ffffb2fecc5cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    35098: function (e, t, n) {
      "use strict";
      var r = n(91200),
        i = n(37580);
      t.Z = (0, i.B)((0, r.Z)(300, 0.5, 0), (0, r.Z)(-240, 0.5, 1));
    },
    155: function (e, t, n) {
      "use strict";
      n.d(t, {
        H7: function () {
          return a;
        },
        ZP: function () {
          return u;
        },
        s7: function () {
          return o;
        },
      });
      var r = n(91200),
        i = n(37580),
        o = (0, i.B)((0, r.Z)(-100, 0.75, 0.35), (0, r.Z)(80, 1.5, 0.8)),
        a = (0, i.B)((0, r.Z)(260, 0.75, 0.35), (0, r.Z)(80, 1.5, 0.8)),
        s = (0, r.Z)();
      function u(e) {
        (e < 0 || e > 1) && (e -= Math.floor(e));
        var t = Math.abs(e - 0.5);
        return (
          (s.h = 360 * e - 100),
          (s.s = 1.5 - 1.5 * t),
          (s.l = 0.8 - 0.9 * t),
          s + ""
        );
      }
    },
    35996: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = (0, n(68847).B8)(),
        i = Math.PI / 3,
        o = (2 * Math.PI) / 3;
      function a(e) {
        var t;
        return (
          (e = (0.5 - e) * Math.PI),
          (r.r = 255 * (t = Math.sin(e)) * t),
          (r.g = 255 * (t = Math.sin(e + i)) * t),
          (r.b = 255 * (t = Math.sin(e + o)) * t),
          r + ""
        );
      }
    },
    44687: function (e, t, n) {
      "use strict";
      n.d(t, {
        uX: function () {
          return o;
        },
        yy: function () {
          return a;
        },
        zD: function () {
          return s;
        },
      });
      var r = n(89589);
      function i(e) {
        var t = e.length;
        return function (n) {
          return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
        };
      }
      t.ZP = i(
        (0, r.Z)(
          "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
        )
      );
      var o = i(
          (0, r.Z)(
            "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
          )
        ),
        a = i(
          (0, r.Z)(
            "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
          )
        ),
        s = i(
          (0, r.Z)(
            "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
          )
        );
    },
    61945: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "deebf79ecae13182bd",
            "eff3ffbdd7e76baed62171b5",
            "eff3ffbdd7e76baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    99506: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "e5f5e0a1d99b31a354",
            "edf8e9bae4b374c476238b45",
            "edf8e9bae4b374c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    54208: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "f0f0f0bdbdbd636363",
            "f7f7f7cccccc969696525252",
            "f7f7f7cccccc969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    7491: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "fee6cefdae6be6550d",
            "feeddefdbe85fd8d3cd94701",
            "feeddefdbe85fd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    64914: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "efedf5bcbddc756bb1",
            "f2f0f7cbc9e29e9ac86a51a3",
            "f2f0f7cbc9e29e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    90202: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(89589),
        i = n(43023),
        o = [, , ,]
          .concat(
            "fee0d2fc9272de2d26",
            "fee5d9fcae91fb6a4acb181d",
            "fee5d9fcae91fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
          )
          .map(r.Z);
      t.Z = (0, i.Z)(o);
    },
    22274: function (e, t, n) {
      "use strict";
      function r(e, t) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(e);
            break;
          default:
            this.range(t).domain(e);
        }
        return this;
      }
      n.d(t, {
        o: function () {
          return r;
        },
      });
    },
    34130: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return function e() {
            var t = new Map(),
              n = [],
              o = [],
              a = i;
            function s(e) {
              var r = e + "",
                s = t.get(r);
              if (!s) {
                if (a !== i) return a;
                t.set(r, (s = n.push(e)));
              }
              return o[(s - 1) % o.length];
            }
            return (
              (s.domain = function (e) {
                if (!arguments.length) return n.slice();
                for (let r of ((n = []), (t = new Map()), e)) {
                  let e = r + "";
                  t.has(e) || t.set(e, n.push(r));
                }
                return s;
              }),
              (s.range = function (e) {
                return arguments.length ? ((o = Array.from(e)), s) : o.slice();
              }),
              (s.unknown = function (e) {
                return arguments.length ? ((a = e), s) : a;
              }),
              (s.copy = function () {
                return e(n, o).unknown(a);
              }),
              r.o.apply(s, arguments),
              s
            );
          };
        },
      });
      var r = n(22274);
      let i = Symbol("implicit");
    },
    20651: function (e, t, n) {
      "use strict";
      function r(e) {
        this._context = e;
      }
      function i(e) {
        return new r(e);
      }
      n.d(t, {
        Z: function () {
          return i;
        },
      }),
        (r.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (e, t) {
            switch (((e = +e), (t = +t), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(e, t)
                    : this._context.moveTo(e, t);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(e, t);
            }
          },
        });
    },
    81488: function (e, t, n) {
      "use strict";
      n.d(t, {
        i$: function () {
          return i;
        },
        Z1: function () {
          return o;
        },
        g0: function () {
          return a;
        },
        wp: function () {
          return s;
        },
      });
      var r,
        i,
        o,
        a,
        s,
        u = new Date(),
        c = new Date();
      function f(e, t, n, r) {
        function i(t) {
          return e((t = 0 == arguments.length ? new Date() : new Date(+t))), t;
        }
        return (
          (i.floor = function (t) {
            return e((t = new Date(+t))), t;
          }),
          (i.ceil = function (n) {
            return e((n = new Date(n - 1))), t(n, 1), e(n), n;
          }),
          (i.round = function (e) {
            var t = i(e),
              n = i.ceil(e);
            return e - t < n - e ? t : n;
          }),
          (i.offset = function (e, n) {
            return t((e = new Date(+e)), null == n ? 1 : Math.floor(n)), e;
          }),
          (i.range = function (n, r, o) {
            var a,
              s = [];
            if (
              ((n = i.ceil(n)),
              (o = null == o ? 1 : Math.floor(o)),
              !(n < r) || !(o > 0))
            )
              return s;
            do s.push((a = new Date(+n))), t(n, o), e(n);
            while (a < n && n < r);
            return s;
          }),
          (i.filter = function (n) {
            return f(
              function (t) {
                if (t >= t) for (; e(t), !n(t); ) t.setTime(t - 1);
              },
              function (e, r) {
                if (e >= e) {
                  if (r < 0) for (; ++r <= 0; ) for (; t(e, -1), !n(e); );
                  else for (; --r >= 0; ) for (; t(e, 1), !n(e); );
                }
              }
            );
          }),
          n &&
            ((i.count = function (t, r) {
              return (
                u.setTime(+t), c.setTime(+r), e(u), e(c), Math.floor(n(u, c))
              );
            }),
            (i.every = function (e) {
              return isFinite((e = Math.floor(e))) && e > 0
                ? e > 1
                  ? i.filter(
                      r
                        ? function (t) {
                            return r(t) % e == 0;
                          }
                        : function (t) {
                            return i.count(0, t) % e == 0;
                          }
                    )
                  : i
                : null;
            })),
          i
        );
      }
      function l(e) {
        return f(
          function (t) {
            t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
              t.setUTCHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setUTCDate(e.getUTCDate() + 7 * t);
          },
          function (e, t) {
            return (t - e) / 6048e5;
          }
        );
      }
      var d = l(0),
        h = l(1),
        p = l(2),
        g = l(3),
        b = l(4),
        m = l(5),
        y = l(6);
      d.range, h.range, p.range, g.range, b.range, m.range, y.range;
      var v = f(
        function (e) {
          e.setUTCHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setUTCDate(e.getUTCDate() + t);
        },
        function (e, t) {
          return (t - e) / 864e5;
        },
        function (e) {
          return e.getUTCDate() - 1;
        }
      );
      function _(e) {
        return f(
          function (t) {
            t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
              t.setHours(0, 0, 0, 0);
          },
          function (e, t) {
            e.setDate(e.getDate() + 7 * t);
          },
          function (e, t) {
            return (
              (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) /
              6048e5
            );
          }
        );
      }
      v.range;
      var x = _(0),
        w = _(1),
        k = _(2),
        M = _(3),
        T = _(4),
        S = _(5),
        C = _(6);
      x.range, w.range, k.range, M.range, T.range, S.range, C.range;
      var O = f(
        (e) => e.setHours(0, 0, 0, 0),
        (e, t) => e.setDate(e.getDate() + t),
        (e, t) =>
          (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) /
          864e5,
        (e) => e.getDate() - 1
      );
      O.range;
      var j = f(
        function (e) {
          e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setFullYear(e.getFullYear() + t);
        },
        function (e, t) {
          return t.getFullYear() - e.getFullYear();
        },
        function (e) {
          return e.getFullYear();
        }
      );
      (j.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? f(
              function (t) {
                t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                  t.setMonth(0, 1),
                  t.setHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setFullYear(t.getFullYear() + n * e);
              }
            )
          : null;
      }),
        j.range;
      var R = f(
        function (e) {
          e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        },
        function (e, t) {
          e.setUTCFullYear(e.getUTCFullYear() + t);
        },
        function (e, t) {
          return t.getUTCFullYear() - e.getUTCFullYear();
        },
        function (e) {
          return e.getUTCFullYear();
        }
      );
      function q(e) {
        if (0 <= e.y && e.y < 100) {
          var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
          return t.setFullYear(e.y), t;
        }
        return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
      }
      function E(e) {
        if (0 <= e.y && e.y < 100) {
          var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
          return t.setUTCFullYear(e.y), t;
        }
        return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
      }
      function P(e, t, n) {
        return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
      }
      (R.every = function (e) {
        return isFinite((e = Math.floor(e))) && e > 0
          ? f(
              function (t) {
                t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                  t.setUTCMonth(0, 1),
                  t.setUTCHours(0, 0, 0, 0);
              },
              function (t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n * e);
              }
            )
          : null;
      }),
        R.range;
      var z = { "-": "", _: " ", 0: "0" },
        A = /^\s*\d+/,
        Z = /^%/,
        D = /[\\^$*+?|[\]().{}]/g;
      function N(e, t, n) {
        var r = e < 0 ? "-" : "",
          i = (r ? -e : e) + "",
          o = i.length;
        return r + (o < n ? Array(n - o + 1).join(t) + i : i);
      }
      function U(e) {
        return e.replace(D, "\\$&");
      }
      function F(e) {
        return RegExp("^(?:" + e.map(U).join("|") + ")", "i");
      }
      function L(e) {
        return new Map(e.map((e, t) => [e.toLowerCase(), t]));
      }
      function W(e, t, n) {
        var r = A.exec(t.slice(n, n + 1));
        return r ? ((e.w = +r[0]), n + r[0].length) : -1;
      }
      function Y(e, t, n) {
        var r = A.exec(t.slice(n, n + 1));
        return r ? ((e.u = +r[0]), n + r[0].length) : -1;
      }
      function I(e, t, n) {
        var r = A.exec(t.slice(n, n + 2));
        return r ? ((e.U = +r[0]), n + r[0].length) : -1;
      }
      function B(e, t, n) {
        var r = A.exec(t.slice(n, n + 2));
        return r ? ((e.V = +r[0]), n + r[0].length) : -1;
      }
      function H(e, t, n) {
        var r = A.exec(t.slice(n, n + 2));
        return r ? ((e.W = +r[0]), n + r[0].length) : -1;
      }
      function V(e, t, n) {
        var r = A.exec(t.slice(n, n + 4));
        return r ? ((e.y = +r[0]), n + r[0].length) : -1;
      }
      function $(e, t, n) {
        var r = A.exec(t.slice(n, n + 2));
        return r
          ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length)
          : -1;
      }
      function G(e, t, n) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
        return r
          ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), n + r[0].length)
          : -1;
      }
      function X(e, t, n) {
        var r = A.exec(t.slice(n, n + 1));
        return r ? ((e.q = 3 * r[0] - 3), n + r[0].length) : -1;
      }
      function Q(e, t, n) {
        var r = A.exec(t.slice(n, n + 2));
        return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
      }
      function J(e, t, n) {
        var r = A.exec(t.slice(n, n + 2));
        return r ? ((e.d = +r[0]), n + r[0].length) : -1;
      }
      function K(e, t, n) {
        var r = A.exec(t.slice(n, n + 3));
        return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
      }
      function ee(e, t, n) {
        var r = A.exec(t.slice(n, n + 2));
        return r ? ((e.H = +r[0]), n + r[0].length) : -1;
      }
      function et(e, t, n) {
        var r = A.exec(t.slice(n, n + 2));
        return r ? ((e.M = +r[0]), n + r[0].length) : -1;
      }
      function en(e, t, n) {
        var r = A.exec(t.slice(n, n + 2));
        return r ? ((e.S = +r[0]), n + r[0].length) : -1;
      }
      function er(e, t, n) {
        var r = A.exec(t.slice(n, n + 3));
        return r ? ((e.L = +r[0]), n + r[0].length) : -1;
      }
      function ei(e, t, n) {
        var r = A.exec(t.slice(n, n + 6));
        return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
      }
      function eo(e, t, n) {
        var r = Z.exec(t.slice(n, n + 1));
        return r ? n + r[0].length : -1;
      }
      function ea(e, t, n) {
        var r = A.exec(t.slice(n));
        return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
      }
      function es(e, t, n) {
        var r = A.exec(t.slice(n));
        return r ? ((e.s = +r[0]), n + r[0].length) : -1;
      }
      function eu(e, t) {
        return N(e.getDate(), t, 2);
      }
      function ec(e, t) {
        return N(e.getHours(), t, 2);
      }
      function ef(e, t) {
        return N(e.getHours() % 12 || 12, t, 2);
      }
      function el(e, t) {
        return N(1 + O.count(j(e), e), t, 3);
      }
      function ed(e, t) {
        return N(e.getMilliseconds(), t, 3);
      }
      function eh(e, t) {
        return ed(e, t) + "000";
      }
      function ep(e, t) {
        return N(e.getMonth() + 1, t, 2);
      }
      function eg(e, t) {
        return N(e.getMinutes(), t, 2);
      }
      function eb(e, t) {
        return N(e.getSeconds(), t, 2);
      }
      function em(e) {
        var t = e.getDay();
        return 0 === t ? 7 : t;
      }
      function ey(e, t) {
        return N(x.count(j(e) - 1, e), t, 2);
      }
      function ev(e) {
        var t = e.getDay();
        return t >= 4 || 0 === t ? T(e) : T.ceil(e);
      }
      function e_(e, t) {
        return (e = ev(e)), N(T.count(j(e), e) + (4 === j(e).getDay()), t, 2);
      }
      function ex(e) {
        return e.getDay();
      }
      function ew(e, t) {
        return N(w.count(j(e) - 1, e), t, 2);
      }
      function ek(e, t) {
        return N(e.getFullYear() % 100, t, 2);
      }
      function eM(e, t) {
        return N((e = ev(e)).getFullYear() % 100, t, 2);
      }
      function eT(e, t) {
        return N(e.getFullYear() % 1e4, t, 4);
      }
      function eS(e, t) {
        var n = e.getDay();
        return N(
          (e = n >= 4 || 0 === n ? T(e) : T.ceil(e)).getFullYear() % 1e4,
          t,
          4
        );
      }
      function eC(e) {
        var t = e.getTimezoneOffset();
        return (
          (t > 0 ? "-" : ((t *= -1), "+")) +
          N((t / 60) | 0, "0", 2) +
          N(t % 60, "0", 2)
        );
      }
      function eO(e, t) {
        return N(e.getUTCDate(), t, 2);
      }
      function ej(e, t) {
        return N(e.getUTCHours(), t, 2);
      }
      function eR(e, t) {
        return N(e.getUTCHours() % 12 || 12, t, 2);
      }
      function eq(e, t) {
        return N(1 + v.count(R(e), e), t, 3);
      }
      function eE(e, t) {
        return N(e.getUTCMilliseconds(), t, 3);
      }
      function eP(e, t) {
        return eE(e, t) + "000";
      }
      function ez(e, t) {
        return N(e.getUTCMonth() + 1, t, 2);
      }
      function eA(e, t) {
        return N(e.getUTCMinutes(), t, 2);
      }
      function eZ(e, t) {
        return N(e.getUTCSeconds(), t, 2);
      }
      function eD(e) {
        var t = e.getUTCDay();
        return 0 === t ? 7 : t;
      }
      function eN(e, t) {
        return N(d.count(R(e) - 1, e), t, 2);
      }
      function eU(e) {
        var t = e.getUTCDay();
        return t >= 4 || 0 === t ? b(e) : b.ceil(e);
      }
      function eF(e, t) {
        return (
          (e = eU(e)), N(b.count(R(e), e) + (4 === R(e).getUTCDay()), t, 2)
        );
      }
      function eL(e) {
        return e.getUTCDay();
      }
      function eW(e, t) {
        return N(h.count(R(e) - 1, e), t, 2);
      }
      function eY(e, t) {
        return N(e.getUTCFullYear() % 100, t, 2);
      }
      function eI(e, t) {
        return N((e = eU(e)).getUTCFullYear() % 100, t, 2);
      }
      function eB(e, t) {
        return N(e.getUTCFullYear() % 1e4, t, 4);
      }
      function eH(e, t) {
        var n = e.getUTCDay();
        return N(
          (e = n >= 4 || 0 === n ? b(e) : b.ceil(e)).getUTCFullYear() % 1e4,
          t,
          4
        );
      }
      function eV() {
        return "+0000";
      }
      function e$() {
        return "%";
      }
      function eG(e) {
        return +e;
      }
      function eX(e) {
        return Math.floor(+e / 1e3);
      }
      (i = (r = (function (e) {
        var t = e.dateTime,
          n = e.date,
          r = e.time,
          i = e.periods,
          o = e.days,
          a = e.shortDays,
          s = e.months,
          u = e.shortMonths,
          c = F(i),
          f = L(i),
          l = F(o),
          d = L(o),
          p = F(a),
          g = L(a),
          b = F(s),
          m = L(s),
          y = F(u),
          _ = L(u),
          x = {
            a: function (e) {
              return a[e.getDay()];
            },
            A: function (e) {
              return o[e.getDay()];
            },
            b: function (e) {
              return u[e.getMonth()];
            },
            B: function (e) {
              return s[e.getMonth()];
            },
            c: null,
            d: eu,
            e: eu,
            f: eh,
            g: eM,
            G: eS,
            H: ec,
            I: ef,
            j: el,
            L: ed,
            m: ep,
            M: eg,
            p: function (e) {
              return i[+(e.getHours() >= 12)];
            },
            q: function (e) {
              return 1 + ~~(e.getMonth() / 3);
            },
            Q: eG,
            s: eX,
            S: eb,
            u: em,
            U: ey,
            V: e_,
            w: ex,
            W: ew,
            x: null,
            X: null,
            y: ek,
            Y: eT,
            Z: eC,
            "%": e$,
          },
          k = {
            a: function (e) {
              return a[e.getUTCDay()];
            },
            A: function (e) {
              return o[e.getUTCDay()];
            },
            b: function (e) {
              return u[e.getUTCMonth()];
            },
            B: function (e) {
              return s[e.getUTCMonth()];
            },
            c: null,
            d: eO,
            e: eO,
            f: eP,
            g: eI,
            G: eH,
            H: ej,
            I: eR,
            j: eq,
            L: eE,
            m: ez,
            M: eA,
            p: function (e) {
              return i[+(e.getUTCHours() >= 12)];
            },
            q: function (e) {
              return 1 + ~~(e.getUTCMonth() / 3);
            },
            Q: eG,
            s: eX,
            S: eZ,
            u: eD,
            U: eN,
            V: eF,
            w: eL,
            W: eW,
            x: null,
            X: null,
            y: eY,
            Y: eB,
            Z: eV,
            "%": e$,
          },
          M = {
            a: function (e, t, n) {
              var r = p.exec(t.slice(n));
              return r
                ? ((e.w = g.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            A: function (e, t, n) {
              var r = l.exec(t.slice(n));
              return r
                ? ((e.w = d.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            b: function (e, t, n) {
              var r = y.exec(t.slice(n));
              return r
                ? ((e.m = _.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            B: function (e, t, n) {
              var r = b.exec(t.slice(n));
              return r
                ? ((e.m = m.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            c: function (e, n, r) {
              return C(e, t, n, r);
            },
            d: J,
            e: J,
            f: ei,
            g: $,
            G: V,
            H: ee,
            I: ee,
            j: K,
            L: er,
            m: Q,
            M: et,
            p: function (e, t, n) {
              var r = c.exec(t.slice(n));
              return r
                ? ((e.p = f.get(r[0].toLowerCase())), n + r[0].length)
                : -1;
            },
            q: X,
            Q: ea,
            s: es,
            S: en,
            u: Y,
            U: I,
            V: B,
            w: W,
            W: H,
            x: function (e, t, r) {
              return C(e, n, t, r);
            },
            X: function (e, t, n) {
              return C(e, r, t, n);
            },
            y: $,
            Y: V,
            Z: G,
            "%": eo,
          };
        function T(e, t) {
          return function (n) {
            var r,
              i,
              o,
              a = [],
              s = -1,
              u = 0,
              c = e.length;
            for (n instanceof Date || (n = new Date(+n)); ++s < c; )
              37 === e.charCodeAt(s) &&
                (a.push(e.slice(u, s)),
                null != (i = z[(r = e.charAt(++s))])
                  ? (r = e.charAt(++s))
                  : (i = "e" === r ? " " : "0"),
                (o = t[r]) && (r = o(n, i)),
                a.push(r),
                (u = s + 1));
            return a.push(e.slice(u, s)), a.join("");
          };
        }
        function S(e, t) {
          return function (n) {
            var r,
              i,
              o = P(1900, void 0, 1);
            if (C(o, e, (n += ""), 0) != n.length) return null;
            if ("Q" in o) return new Date(o.Q);
            if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
            if (
              (!t || "Z" in o || (o.Z = 0),
              "p" in o && (o.H = (o.H % 12) + 12 * o.p),
              void 0 === o.m && (o.m = "q" in o ? o.q : 0),
              "V" in o)
            ) {
              if (o.V < 1 || o.V > 53) return null;
              "w" in o || (o.w = 1),
                "Z" in o
                  ? ((r =
                      (i = (r = E(P(o.y, 0, 1))).getUTCDay()) > 4 || 0 === i
                        ? h.ceil(r)
                        : h(r)),
                    (r = v.offset(r, (o.V - 1) * 7)),
                    (o.y = r.getUTCFullYear()),
                    (o.m = r.getUTCMonth()),
                    (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                  : ((r =
                      (i = (r = q(P(o.y, 0, 1))).getDay()) > 4 || 0 === i
                        ? w.ceil(r)
                        : w(r)),
                    (r = O.offset(r, (o.V - 1) * 7)),
                    (o.y = r.getFullYear()),
                    (o.m = r.getMonth()),
                    (o.d = r.getDate() + ((o.w + 6) % 7)));
            } else
              ("W" in o || "U" in o) &&
                ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
                (i =
                  "Z" in o
                    ? E(P(o.y, 0, 1)).getUTCDay()
                    : q(P(o.y, 0, 1)).getDay()),
                (o.m = 0),
                (o.d =
                  "W" in o
                    ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                    : o.w + 7 * o.U - ((i + 6) % 7)));
            return "Z" in o
              ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), E(o))
              : q(o);
          };
        }
        function C(e, t, n, r) {
          for (var i, o, a = 0, s = t.length, u = n.length; a < s; ) {
            if (r >= u) return -1;
            if (37 === (i = t.charCodeAt(a++))) {
              if (
                !(o = M[(i = t.charAt(a++)) in z ? t.charAt(a++) : i]) ||
                (r = o(e, n, r)) < 0
              )
                return -1;
            } else if (i != n.charCodeAt(r++)) return -1;
          }
          return r;
        }
        return (
          (x.x = T(n, x)),
          (x.X = T(r, x)),
          (x.c = T(t, x)),
          (k.x = T(n, k)),
          (k.X = T(r, k)),
          (k.c = T(t, k)),
          {
            format: function (e) {
              var t = T((e += ""), x);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            parse: function (e) {
              var t = S((e += ""), !1);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            utcFormat: function (e) {
              var t = T((e += ""), k);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            utcParse: function (e) {
              var t = S((e += ""), !0);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
          }
        );
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })).format),
        (o = r.parse),
        (a = r.utcFormat),
        (s = r.utcParse);
    },
    57449: function (e) {
      e.exports = function (e, t) {
        var n = t.prototype,
          r = n.format;
        n.format = function (e) {
          var t = this,
            n = this.$locale();
          if (!this.isValid()) return r.bind(this)(e);
          var i = this.$utils(),
            o = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(
              /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
              function (e) {
                switch (e) {
                  case "Q":
                    return Math.ceil((t.$M + 1) / 3);
                  case "Do":
                    return n.ordinal(t.$D);
                  case "gggg":
                    return t.weekYear();
                  case "GGGG":
                    return t.isoWeekYear();
                  case "wo":
                    return n.ordinal(t.week(), "W");
                  case "w":
                  case "ww":
                    return i.s(t.week(), "w" === e ? 1 : 2, "0");
                  case "W":
                  case "WW":
                    return i.s(t.isoWeek(), "W" === e ? 1 : 2, "0");
                  case "k":
                  case "kk":
                    return i.s(
                      String(0 === t.$H ? 24 : t.$H),
                      "k" === e ? 1 : 2,
                      "0"
                    );
                  case "X":
                    return Math.floor(t.$d.getTime() / 1e3);
                  case "x":
                    return t.$d.getTime();
                  case "z":
                    return "[" + t.offsetName() + "]";
                  case "zzz":
                    return "[" + t.offsetName("long") + "]";
                  default:
                    return e;
                }
              }
            );
          return r.bind(this)(o);
        };
      };
    },
    50030: function (e) {
      e.exports = function (e, t, n) {
        t.prototype.isBetween = function (e, t, r, i) {
          var o = n(e),
            a = n(t),
            s = "(" === (i = i || "()")[0],
            u = ")" === i[1];
          return (
            ((s ? this.isAfter(o, r) : !this.isBefore(o, r)) &&
              (u ? this.isBefore(a, r) : !this.isAfter(a, r))) ||
            ((s ? this.isBefore(o, r) : !this.isAfter(o, r)) &&
              (u ? this.isAfter(a, r) : !this.isBefore(a, r)))
          );
        };
      };
    },
    46824: function (e) {
      e.exports = function (e, t, n) {
        t.prototype.isToday = function () {
          var e = "YYYY-MM-DD",
            t = n();
          return this.format(e) === t.format(e);
        };
      };
    },
    28387: function (e) {
      e.exports = function (e, t, n) {
        t.prototype.isYesterday = function () {
          var e = "YYYY-MM-DD",
            t = n().subtract(1, "day");
          return this.format(e) === t.format(e);
        };
      };
    },
    17374: function (e, t, n) {
      var r;
      /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */ !(function (
        i
      ) {
        "use strict";
        var o,
          a = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          s = !0,
          u = "[DecimalError] ",
          c = u + "Invalid argument: ",
          f = u + "Exponent out of range: ",
          l = Math.floor,
          d = Math.pow,
          h = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          p = l(1286742750677284.5),
          g = {};
        function b(e, t) {
          var n,
            r,
            i,
            o,
            a,
            u,
            c,
            f,
            l = e.constructor,
            d = l.precision;
          if (!e.s || !t.s) return t.s || (t = new l(e)), s ? S(t, d) : t;
          if (
            ((c = e.d),
            (f = t.d),
            (a = e.e),
            (i = t.e),
            (c = c.slice()),
            (o = a - i))
          ) {
            for (
              o < 0
                ? ((r = c), (o = -o), (u = f.length))
                : ((r = f), (i = a), (u = c.length)),
                o > (u = (a = Math.ceil(d / 7)) > u ? a + 1 : u + 1) &&
                  ((o = u), (r.length = 1)),
                r.reverse();
              o--;

            )
              r.push(0);
            r.reverse();
          }
          for (
            (u = c.length) - (o = f.length) < 0 &&
              ((o = u), (r = f), (f = c), (c = r)),
              n = 0;
            o;

          )
            (n = ((c[--o] = c[o] + f[o] + n) / 1e7) | 0), (c[o] %= 1e7);
          for (n && (c.unshift(n), ++i), u = c.length; 0 == c[--u]; ) c.pop();
          return (t.d = c), (t.e = i), s ? S(t, d) : t;
        }
        function m(e, t, n) {
          if (e !== ~~e || e < t || e > n) throw Error(c + e);
        }
        function y(e) {
          var t,
            n,
            r,
            i = e.length - 1,
            o = "",
            a = e[0];
          if (i > 0) {
            for (o += a, t = 1; t < i; t++)
              (n = 7 - (r = e[t] + "").length) && (o += k(n)), (o += r);
            (n = 7 - (r = (a = e[t]) + "").length) && (o += k(n));
          } else if (0 === a) return "0";
          for (; a % 10 == 0; ) a /= 10;
          return o + a;
        }
        (g.absoluteValue = g.abs =
          function () {
            var e = new this.constructor(this);
            return e.s && (e.s = 1), e;
          }),
          (g.comparedTo = g.cmp =
            function (e) {
              var t, n, r, i;
              if (((e = new this.constructor(e)), this.s !== e.s))
                return this.s || -e.s;
              if (this.e !== e.e) return (this.e > e.e) ^ (this.s < 0) ? 1 : -1;
              for (
                t = 0, n = (r = this.d.length) < (i = e.d.length) ? r : i;
                t < n;
                ++t
              )
                if (this.d[t] !== e.d[t])
                  return (this.d[t] > e.d[t]) ^ (this.s < 0) ? 1 : -1;
              return r === i ? 0 : (r > i) ^ (this.s < 0) ? 1 : -1;
            }),
          (g.decimalPlaces = g.dp =
            function () {
              var e = this.d.length - 1,
                t = (e - this.e) * 7;
              if ((e = this.d[e])) for (; e % 10 == 0; e /= 10) t--;
              return t < 0 ? 0 : t;
            }),
          (g.dividedBy = g.div =
            function (e) {
              return v(this, new this.constructor(e));
            }),
          (g.dividedToIntegerBy = g.idiv =
            function (e) {
              var t = this.constructor;
              return S(v(this, new t(e), 0, 1), t.precision);
            }),
          (g.equals = g.eq =
            function (e) {
              return !this.cmp(e);
            }),
          (g.exponent = function () {
            return x(this);
          }),
          (g.greaterThan = g.gt =
            function (e) {
              return this.cmp(e) > 0;
            }),
          (g.greaterThanOrEqualTo = g.gte =
            function (e) {
              return this.cmp(e) >= 0;
            }),
          (g.isInteger = g.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (g.isNegative = g.isneg =
            function () {
              return this.s < 0;
            }),
          (g.isPositive = g.ispos =
            function () {
              return this.s > 0;
            }),
          (g.isZero = function () {
            return 0 === this.s;
          }),
          (g.lessThan = g.lt =
            function (e) {
              return 0 > this.cmp(e);
            }),
          (g.lessThanOrEqualTo = g.lte =
            function (e) {
              return 1 > this.cmp(e);
            }),
          (g.logarithm = g.log =
            function (e) {
              var t,
                n = this.constructor,
                r = n.precision,
                i = r + 5;
              if (void 0 === e) e = new n(10);
              else if ((e = new n(e)).s < 1 || e.eq(o)) throw Error(u + "NaN");
              if (this.s < 1) throw Error(u + (this.s ? "NaN" : "-Infinity"));
              return this.eq(o)
                ? new n(0)
                : ((s = !1),
                  (t = v(M(this, i), M(e, i), i)),
                  (s = !0),
                  S(t, r));
            }),
          (g.minus = g.sub =
            function (e) {
              return (
                (e = new this.constructor(e)),
                this.s == e.s ? C(this, e) : b(this, ((e.s = -e.s), e))
              );
            }),
          (g.modulo = g.mod =
            function (e) {
              var t,
                n = this.constructor,
                r = n.precision;
              if (!(e = new n(e)).s) throw Error(u + "NaN");
              return this.s
                ? ((s = !1),
                  (t = v(this, e, 0, 1).times(e)),
                  (s = !0),
                  this.minus(t))
                : S(new n(this), r);
            }),
          (g.naturalExponential = g.exp =
            function () {
              return _(this);
            }),
          (g.naturalLogarithm = g.ln =
            function () {
              return M(this);
            }),
          (g.negated = g.neg =
            function () {
              var e = new this.constructor(this);
              return (e.s = -e.s || 0), e;
            }),
          (g.plus = g.add =
            function (e) {
              return (
                (e = new this.constructor(e)),
                this.s == e.s ? b(this, e) : C(this, ((e.s = -e.s), e))
              );
            }),
          (g.precision = g.sd =
            function (e) {
              var t, n, r;
              if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
                throw Error(c + e);
              if (
                ((t = x(this) + 1),
                (n = 7 * (r = this.d.length - 1) + 1),
                (r = this.d[r]))
              ) {
                for (; r % 10 == 0; r /= 10) n--;
                for (r = this.d[0]; r >= 10; r /= 10) n++;
              }
              return e && t > n ? t : n;
            }),
          (g.squareRoot = g.sqrt =
            function () {
              var e,
                t,
                n,
                r,
                i,
                o,
                a,
                c = this.constructor;
              if (this.s < 1) {
                if (!this.s) return new c(0);
                throw Error(u + "NaN");
              }
              for (
                e = x(this),
                  s = !1,
                  0 == (i = Math.sqrt(+this)) || i == 1 / 0
                    ? (((t = y(this.d)).length + e) % 2 == 0 && (t += "0"),
                      (i = Math.sqrt(t)),
                      (e = l((e + 1) / 2) - (e < 0 || e % 2)),
                      (r = new c(
                        (t =
                          i == 1 / 0
                            ? "5e" + e
                            : (t = i.toExponential()).slice(
                                0,
                                t.indexOf("e") + 1
                              ) + e)
                      )))
                    : (r = new c(i.toString())),
                  i = a = (n = c.precision) + 3;
                ;

              )
                if (
                  ((r = (o = r).plus(v(this, o, a + 2)).times(0.5)),
                  y(o.d).slice(0, a) === (t = y(r.d)).slice(0, a))
                ) {
                  if (((t = t.slice(a - 3, a + 1)), i == a && "4999" == t)) {
                    if ((S(o, n + 1, 0), o.times(o).eq(this))) {
                      r = o;
                      break;
                    }
                  } else if ("9999" != t) break;
                  a += 4;
                }
              return (s = !0), S(r, n);
            }),
          (g.times = g.mul =
            function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                u,
                c,
                f,
                l = this.constructor,
                d = this.d,
                h = (e = new l(e)).d;
              if (!this.s || !e.s) return new l(0);
              for (
                e.s *= this.s,
                  n = this.e + e.e,
                  (c = d.length) < (f = h.length) &&
                    ((o = d), (d = h), (h = o), (a = c), (c = f), (f = a)),
                  o = [],
                  r = a = c + f;
                r--;

              )
                o.push(0);
              for (r = f; --r >= 0; ) {
                for (t = 0, i = c + r; i > r; )
                  (u = o[i] + h[r] * d[i - r - 1] + t),
                    (o[i--] = u % 1e7 | 0),
                    (t = (u / 1e7) | 0);
                o[i] = (o[i] + t) % 1e7 | 0;
              }
              for (; !o[--a]; ) o.pop();
              return (
                t ? ++n : o.shift(),
                (e.d = o),
                (e.e = n),
                s ? S(e, l.precision) : e
              );
            }),
          (g.toDecimalPlaces = g.todp =
            function (e, t) {
              var n = this,
                r = n.constructor;
              return ((n = new r(n)), void 0 === e)
                ? n
                : (m(e, 0, 1e9),
                  void 0 === t ? (t = r.rounding) : m(t, 0, 8),
                  S(n, e + x(n) + 1, t));
            }),
          (g.toExponential = function (e, t) {
            var n,
              r = this,
              i = r.constructor;
            return (
              void 0 === e
                ? (n = O(r, !0))
                : (m(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : m(t, 0, 8),
                  (n = O((r = S(new i(r), e + 1, t)), !0, e + 1))),
              n
            );
          }),
          (g.toFixed = function (e, t) {
            var n,
              r,
              i = this.constructor;
            return void 0 === e
              ? O(this)
              : (m(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : m(t, 0, 8),
                (n = O(
                  (r = S(new i(this), e + x(this) + 1, t)).abs(),
                  !1,
                  e + x(r) + 1
                )),
                this.isneg() && !this.isZero() ? "-" + n : n);
          }),
          (g.toInteger = g.toint =
            function () {
              var e = this.constructor;
              return S(new e(this), x(this) + 1, e.rounding);
            }),
          (g.toNumber = function () {
            return +this;
          }),
          (g.toPower = g.pow =
            function (e) {
              var t,
                n,
                r,
                i,
                a,
                c,
                f = this,
                d = f.constructor,
                h = +(e = new d(e));
              if (!e.s) return new d(o);
              if (!(f = new d(f)).s) {
                if (e.s < 1) throw Error(u + "Infinity");
                return f;
              }
              if (f.eq(o)) return f;
              if (((r = d.precision), e.eq(o))) return S(f, r);
              if (((c = (t = e.e) >= (n = e.d.length - 1)), (a = f.s), c)) {
                if ((n = h < 0 ? -h : h) <= 9007199254740991) {
                  for (
                    i = new d(o), t = Math.ceil(r / 7 + 4), s = !1;
                    n % 2 && j((i = i.times(f)).d, t), 0 !== (n = l(n / 2));

                  )
                    j((f = f.times(f)).d, t);
                  return (s = !0), e.s < 0 ? new d(o).div(i) : S(i, r);
                }
              } else if (a < 0) throw Error(u + "NaN");
              return (
                (a = a < 0 && 1 & e.d[Math.max(t, n)] ? -1 : 1),
                (f.s = 1),
                (s = !1),
                (i = e.times(M(f, r + 12))),
                (s = !0),
                ((i = _(i)).s = a),
                i
              );
            }),
          (g.toPrecision = function (e, t) {
            var n,
              r,
              i = this,
              o = i.constructor;
            return (
              void 0 === e
                ? ((n = x(i)), (r = O(i, n <= o.toExpNeg || n >= o.toExpPos)))
                : (m(e, 1, 1e9),
                  void 0 === t ? (t = o.rounding) : m(t, 0, 8),
                  (n = x((i = S(new o(i), e, t)))),
                  (r = O(i, e <= n || n <= o.toExpNeg, e))),
              r
            );
          }),
          (g.toSignificantDigits = g.tosd =
            function (e, t) {
              var n = this.constructor;
              return (
                void 0 === e
                  ? ((e = n.precision), (t = n.rounding))
                  : (m(e, 1, 1e9),
                    void 0 === t ? (t = n.rounding) : m(t, 0, 8)),
                S(new n(this), e, t)
              );
            }),
          (g.toString =
            g.valueOf =
            g.val =
            g.toJSON =
              function () {
                var e = x(this),
                  t = this.constructor;
                return O(this, e <= t.toExpNeg || e >= t.toExpPos);
              });
        var v = (function () {
          function e(e, t) {
            var n,
              r = 0,
              i = e.length;
            for (e = e.slice(); i--; )
              (n = e[i] * t + r), (e[i] = n % 1e7 | 0), (r = (n / 1e7) | 0);
            return r && e.unshift(r), e;
          }
          function t(e, t, n, r) {
            var i, o;
            if (n != r) o = n > r ? 1 : -1;
            else
              for (i = o = 0; i < n; i++)
                if (e[i] != t[i]) {
                  o = e[i] > t[i] ? 1 : -1;
                  break;
                }
            return o;
          }
          function n(e, t, n) {
            for (var r = 0; n--; )
              (e[n] -= r),
                (r = e[n] < t[n] ? 1 : 0),
                (e[n] = 1e7 * r + e[n] - t[n]);
            for (; !e[0] && e.length > 1; ) e.shift();
          }
          return function (r, i, o, a) {
            var s,
              c,
              f,
              l,
              d,
              h,
              p,
              g,
              b,
              m,
              y,
              v,
              _,
              w,
              k,
              M,
              T,
              C,
              O = r.constructor,
              j = r.s == i.s ? 1 : -1,
              R = r.d,
              q = i.d;
            if (!r.s) return new O(r);
            if (!i.s) throw Error(u + "Division by zero");
            for (
              f = 0,
                c = r.e - i.e,
                T = q.length,
                k = R.length,
                g = (p = new O(j)).d = [];
              q[f] == (R[f] || 0);

            )
              ++f;
            if (
              (q[f] > (R[f] || 0) && --c,
              (v =
                null == o ? (o = O.precision) : a ? o + (x(r) - x(i)) + 1 : o) <
                0)
            )
              return new O(0);
            if (((v = (v / 7 + 2) | 0), (f = 0), 1 == T))
              for (l = 0, q = q[0], v++; (f < k || l) && v--; f++)
                (_ = 1e7 * l + (R[f] || 0)),
                  (g[f] = (_ / q) | 0),
                  (l = _ % q | 0);
            else {
              for (
                (l = (1e7 / (q[0] + 1)) | 0) > 1 &&
                  ((q = e(q, l)),
                  (R = e(R, l)),
                  (T = q.length),
                  (k = R.length)),
                  w = T,
                  m = (b = R.slice(0, T)).length;
                m < T;

              )
                b[m++] = 0;
              (C = q.slice()).unshift(0), (M = q[0]), q[1] >= 1e7 / 2 && ++M;
              do
                (l = 0),
                  (s = t(q, b, T, m)) < 0
                    ? ((y = b[0]),
                      T != m && (y = 1e7 * y + (b[1] || 0)),
                      (l = (y / M) | 0) > 1
                        ? (l >= 1e7 && (l = 1e7 - 1),
                          (h = (d = e(q, l)).length),
                          (m = b.length),
                          1 == (s = t(d, b, h, m)) &&
                            (l--, n(d, T < h ? C : q, h)))
                        : (0 == l && (s = l = 1), (d = q.slice())),
                      (h = d.length) < m && d.unshift(0),
                      n(b, d, m),
                      -1 == s &&
                        ((m = b.length),
                        (s = t(q, b, T, m)) < 1 &&
                          (l++, n(b, T < m ? C : q, m))),
                      (m = b.length))
                    : 0 === s && (l++, (b = [0])),
                  (g[f++] = l),
                  s && b[0] ? (b[m++] = R[w] || 0) : ((b = [R[w]]), (m = 1));
              while ((w++ < k || void 0 !== b[0]) && v--);
            }
            return g[0] || g.shift(), (p.e = c), S(p, a ? o + x(p) + 1 : o);
          };
        })();
        function _(e, t) {
          var n,
            r,
            i,
            a,
            u,
            c = 0,
            l = 0,
            h = e.constructor,
            p = h.precision;
          if (x(e) > 16) throw Error(f + x(e));
          if (!e.s) return new h(o);
          for (
            null == t ? ((s = !1), (u = p)) : (u = t), a = new h(0.03125);
            e.abs().gte(0.1);

          )
            (e = e.times(a)), (l += 5);
          for (
            u += ((Math.log(d(2, l)) / Math.LN10) * 2 + 5) | 0,
              n = r = i = new h(o),
              h.precision = u;
            ;

          ) {
            if (
              ((r = S(r.times(e), u)),
              (n = n.times(++c)),
              y((a = i.plus(v(r, n, u))).d).slice(0, u) === y(i.d).slice(0, u))
            ) {
              for (; l--; ) i = S(i.times(i), u);
              return (h.precision = p), null == t ? ((s = !0), S(i, p)) : i;
            }
            i = a;
          }
        }
        function x(e) {
          for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10) t++;
          return t;
        }
        function w(e, t, n) {
          if (t > e.LN10.sd())
            throw (
              ((s = !0),
              n && (e.precision = n),
              Error(u + "LN10 precision limit exceeded"))
            );
          return S(new e(e.LN10), t);
        }
        function k(e) {
          for (var t = ""; e--; ) t += "0";
          return t;
        }
        function M(e, t) {
          var n,
            r,
            i,
            a,
            c,
            f,
            l,
            d,
            h,
            p = 1,
            g = e,
            b = g.d,
            m = g.constructor,
            _ = m.precision;
          if (g.s < 1) throw Error(u + (g.s ? "NaN" : "-Infinity"));
          if (g.eq(o)) return new m(0);
          if ((null == t ? ((s = !1), (d = _)) : (d = t), g.eq(10)))
            return null == t && (s = !0), w(m, d);
          if (
            ((d += 10),
            (m.precision = d),
            (r = (n = y(b)).charAt(0)),
            !(15e14 > Math.abs((a = x(g)))))
          )
            return (
              (l = w(m, d + 2, _).times(a + "")),
              (g = M(new m(r + "." + n.slice(1)), d - 10).plus(l)),
              (m.precision = _),
              null == t ? ((s = !0), S(g, _)) : g
            );
          for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
            (r = (n = y((g = g.times(e)).d)).charAt(0)), p++;
          for (
            a = x(g),
              r > 1
                ? ((g = new m("0." + n)), a++)
                : (g = new m(r + "." + n.slice(1))),
              f = c = g = v(g.minus(o), g.plus(o), d),
              h = S(g.times(g), d),
              i = 3;
            ;

          ) {
            if (
              ((c = S(c.times(h), d)),
              y((l = f.plus(v(c, new m(i), d))).d).slice(0, d) ===
                y(f.d).slice(0, d))
            )
              return (
                (f = f.times(2)),
                0 !== a && (f = f.plus(w(m, d + 2, _).times(a + ""))),
                (f = v(f, new m(p), d)),
                (m.precision = _),
                null == t ? ((s = !0), S(f, _)) : f
              );
            (f = l), (i += 2);
          }
        }
        function T(e, t) {
          var n, r, i;
          for (
            (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
              (r = t.search(/e/i)) > 0
                ? (n < 0 && (n = r),
                  (n += +t.slice(r + 1)),
                  (t = t.substring(0, r)))
                : n < 0 && (n = t.length),
              r = 0;
            48 === t.charCodeAt(r);

          )
            ++r;
          for (i = t.length; 48 === t.charCodeAt(i - 1); ) --i;
          if ((t = t.slice(r, i))) {
            if (
              ((i -= r),
              (n = n - r - 1),
              (e.e = l(n / 7)),
              (e.d = []),
              (r = (n + 1) % 7),
              n < 0 && (r += 7),
              r < i)
            ) {
              for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i; )
                e.d.push(+t.slice(r, (r += 7)));
              r = 7 - (t = t.slice(r)).length;
            } else r -= i;
            for (; r--; ) t += "0";
            if ((e.d.push(+t), s && (e.e > p || e.e < -p))) throw Error(f + n);
          } else (e.s = 0), (e.e = 0), (e.d = [0]);
          return e;
        }
        function S(e, t, n) {
          var r,
            i,
            o,
            a,
            u,
            c,
            h,
            g,
            b = e.d;
          for (a = 1, o = b[0]; o >= 10; o /= 10) a++;
          if ((r = t - a) < 0) (r += 7), (i = t), (h = b[(g = 0)]);
          else {
            if ((g = Math.ceil((r + 1) / 7)) >= (o = b.length)) return e;
            for (a = 1, h = o = b[g]; o >= 10; o /= 10) a++;
            (r %= 7), (i = r - 7 + a);
          }
          if (
            (void 0 !== n &&
              ((u = (h / (o = d(10, a - i - 1))) % 10 | 0),
              (c = t < 0 || void 0 !== b[g + 1] || h % o),
              (c =
                n < 4
                  ? (u || c) && (0 == n || n == (e.s < 0 ? 3 : 2))
                  : u > 5 ||
                    (5 == u &&
                      (4 == n ||
                        c ||
                        (6 == n &&
                          (r > 0 ? (i > 0 ? h / d(10, a - i) : 0) : b[g - 1]) %
                            10 &
                            1) ||
                        n == (e.s < 0 ? 8 : 7))))),
            t < 1 || !b[0])
          )
            return (
              c
                ? ((o = x(e)),
                  (b.length = 1),
                  (t = t - o - 1),
                  (b[0] = d(10, (7 - (t % 7)) % 7)),
                  (e.e = l(-t / 7) || 0))
                : ((b.length = 1), (b[0] = e.e = e.s = 0)),
              e
            );
          if (
            (0 == r
              ? ((b.length = g), (o = 1), g--)
              : ((b.length = g + 1),
                (o = d(10, 7 - r)),
                (b[g] = i > 0 ? ((h / d(10, a - i)) % d(10, i) | 0) * o : 0)),
            c)
          )
            for (;;) {
              if (0 == g) {
                1e7 == (b[0] += o) && ((b[0] = 1), ++e.e);
                break;
              }
              if (((b[g] += o), 1e7 != b[g])) break;
              (b[g--] = 0), (o = 1);
            }
          for (r = b.length; 0 === b[--r]; ) b.pop();
          if (s && (e.e > p || e.e < -p)) throw Error(f + x(e));
          return e;
        }
        function C(e, t) {
          var n,
            r,
            i,
            o,
            a,
            u,
            c,
            f,
            l,
            d,
            h = e.constructor,
            p = h.precision;
          if (!e.s || !t.s)
            return t.s ? (t.s = -t.s) : (t = new h(e)), s ? S(t, p) : t;
          if (
            ((c = e.d),
            (d = t.d),
            (r = t.e),
            (f = e.e),
            (c = c.slice()),
            (a = f - r))
          ) {
            for (
              (l = a < 0)
                ? ((n = c), (a = -a), (u = d.length))
                : ((n = d), (r = f), (u = c.length)),
                a > (i = Math.max(Math.ceil(p / 7), u) + 2) &&
                  ((a = i), (n.length = 1)),
                n.reverse(),
                i = a;
              i--;

            )
              n.push(0);
            n.reverse();
          } else {
            for (
              (l = (i = c.length) < (u = d.length)) && (u = i), i = 0;
              i < u;
              i++
            )
              if (c[i] != d[i]) {
                l = c[i] < d[i];
                break;
              }
            a = 0;
          }
          for (
            l && ((n = c), (c = d), (d = n), (t.s = -t.s)),
              u = c.length,
              i = d.length - u;
            i > 0;
            --i
          )
            c[u++] = 0;
          for (i = d.length; i > a; ) {
            if (c[--i] < d[i]) {
              for (o = i; o && 0 === c[--o]; ) c[o] = 1e7 - 1;
              --c[o], (c[i] += 1e7);
            }
            c[i] -= d[i];
          }
          for (; 0 === c[--u]; ) c.pop();
          for (; 0 === c[0]; c.shift()) --r;
          return c[0] ? ((t.d = c), (t.e = r), s ? S(t, p) : t) : new h(0);
        }
        function O(e, t, n) {
          var r,
            i = x(e),
            o = y(e.d),
            a = o.length;
          return (
            t
              ? (n && (r = n - a) > 0
                  ? (o = o.charAt(0) + "." + o.slice(1) + k(r))
                  : a > 1 && (o = o.charAt(0) + "." + o.slice(1)),
                (o = o + (i < 0 ? "e" : "e+") + i))
              : i < 0
              ? ((o = "0." + k(-i - 1) + o),
                n && (r = n - a) > 0 && (o += k(r)))
              : i >= a
              ? ((o += k(i + 1 - a)),
                n && (r = n - i - 1) > 0 && (o = o + "." + k(r)))
              : ((r = i + 1) < a && (o = o.slice(0, r) + "." + o.slice(r)),
                n &&
                  (r = n - a) > 0 &&
                  (i + 1 === a && (o += "."), (o += k(r)))),
            e.s < 0 ? "-" + o : o
          );
        }
        function j(e, t) {
          if (e.length > t) return (e.length = t), !0;
        }
        function R(e) {
          if (!e || "object" != typeof e) throw Error(u + "Object expected");
          var t,
            n,
            r,
            i = [
              "precision",
              1,
              1e9,
              "rounding",
              0,
              8,
              "toExpNeg",
              -1 / 0,
              0,
              "toExpPos",
              0,
              1 / 0,
            ];
          for (t = 0; t < i.length; t += 3)
            if (void 0 !== (r = e[(n = i[t])])) {
              if (l(r) === r && r >= i[t + 1] && r <= i[t + 2]) this[n] = r;
              else throw Error(c + n + ": " + r);
            }
          if (void 0 !== (r = e[(n = "LN10")])) {
            if (r == Math.LN10) this[n] = new this(r);
            else throw Error(c + n + ": " + r);
          }
          return this;
        }
        ((a = (function e(t) {
          var n, r, i;
          function o(e) {
            if (!(this instanceof o)) return new o(e);
            if (((this.constructor = o), e instanceof o)) {
              (this.s = e.s),
                (this.e = e.e),
                (this.d = (e = e.d) ? e.slice() : e);
              return;
            }
            if ("number" == typeof e) {
              if (0 * e != 0) throw Error(c + e);
              if (e > 0) this.s = 1;
              else if (e < 0) (e = -e), (this.s = -1);
              else {
                (this.s = 0), (this.e = 0), (this.d = [0]);
                return;
              }
              if (e === ~~e && e < 1e7) {
                (this.e = 0), (this.d = [e]);
                return;
              }
              return T(this, e.toString());
            }
            if ("string" != typeof e) throw Error(c + e);
            if (
              (45 === e.charCodeAt(0)
                ? ((e = e.slice(1)), (this.s = -1))
                : (this.s = 1),
              h.test(e))
            )
              T(this, e);
            else throw Error(c + e);
          }
          if (
            ((o.prototype = g),
            (o.ROUND_UP = 0),
            (o.ROUND_DOWN = 1),
            (o.ROUND_CEIL = 2),
            (o.ROUND_FLOOR = 3),
            (o.ROUND_HALF_UP = 4),
            (o.ROUND_HALF_DOWN = 5),
            (o.ROUND_HALF_EVEN = 6),
            (o.ROUND_HALF_CEIL = 7),
            (o.ROUND_HALF_FLOOR = 8),
            (o.clone = e),
            (o.config = o.set = R),
            void 0 === t && (t = {}),
            t)
          )
            for (
              n = 0,
                i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              n < i.length;

            )
              t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
          return o.config(t), o;
        })(a)).default = a.Decimal =
          a),
          (o = new a(1)),
          void 0 !==
            (r = function () {
              return a;
            }.call(t, n, t, e)) && (e.exports = r);
      })(0);
    },
    39515: function (e, t, n) {
      var r = n(38761)(n(37772), "DataView");
      e.exports = r;
    },
    89612: function (e, t, n) {
      var r = n(52118),
        i = n(96909),
        o = n(98138),
        a = n(4174),
        s = n(7942);
      function u(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (u.prototype.clear = r),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = a),
        (u.prototype.set = s),
        (e.exports = u);
    },
    80235: function (e, t, n) {
      var r = n(3945),
        i = n(21846),
        o = n(88028),
        a = n(72344),
        s = n(94769);
      function u(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (u.prototype.clear = r),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = a),
        (u.prototype.set = s),
        (e.exports = u);
    },
    10326: function (e, t, n) {
      var r = n(38761)(n(37772), "Map");
      e.exports = r;
    },
    96738: function (e, t, n) {
      var r = n(92411),
        i = n(36417),
        o = n(86928),
        a = n(79493),
        s = n(24150);
      function u(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (u.prototype.clear = r),
        (u.prototype.delete = i),
        (u.prototype.get = o),
        (u.prototype.has = a),
        (u.prototype.set = s),
        (e.exports = u);
    },
    52760: function (e, t, n) {
      var r = n(38761)(n(37772), "Promise");
      e.exports = r;
    },
    2143: function (e, t, n) {
      var r = n(38761)(n(37772), "Set");
      e.exports = r;
    },
    45386: function (e, t, n) {
      var r = n(96738),
        i = n(52842),
        o = n(52482);
      function a(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
      }
      (a.prototype.add = a.prototype.push = i),
        (a.prototype.has = o),
        (e.exports = a);
    },
    86571: function (e, t, n) {
      var r = n(80235),
        i = n(15243),
        o = n(72858),
        a = n(4417),
        s = n(8605),
        u = n(71418);
      function c(e) {
        var t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (c.prototype.clear = i),
        (c.prototype.delete = o),
        (c.prototype.get = a),
        (c.prototype.has = s),
        (c.prototype.set = u),
        (e.exports = c);
    },
    50857: function (e, t, n) {
      var r = n(37772).Symbol;
      e.exports = r;
    },
    79162: function (e, t, n) {
      var r = n(37772).Uint8Array;
      e.exports = r;
    },
    93215: function (e, t, n) {
      var r = n(38761)(n(37772), "WeakMap");
      e.exports = r;
    },
    49432: function (e) {
      e.exports = function (e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      };
    },
    67552: function (e) {
      e.exports = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, i = 0, o = [];
          ++n < r;

        ) {
          var a = e[n];
          t(a, n, e) && (o[i++] = a);
        }
        return o;
      };
    },
    38333: function (e, t, n) {
      var r = n(77832);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1;
      };
    },
    34893: function (e) {
      e.exports = function (e, t, n) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
          if (n(t, e[r])) return !0;
        return !1;
      };
    },
    1634: function (e, t, n) {
      var r = n(36473),
        i = n(79631),
        o = n(86152),
        a = n(73226),
        s = n(39045),
        u = n(77598),
        c = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var n = o(e),
          f = !n && i(e),
          l = !n && !f && a(e),
          d = !n && !f && !l && u(e),
          h = n || f || l || d,
          p = h ? r(e.length, String) : [],
          g = p.length;
        for (var b in e)
          (t || c.call(e, b)) &&
            !(
              h &&
              ("length" == b ||
                (l && ("offset" == b || "parent" == b)) ||
                (d &&
                  ("buffer" == b || "byteLength" == b || "byteOffset" == b)) ||
                s(b, g))
            ) &&
            p.push(b);
        return p;
      };
    },
    50343: function (e) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
          i[n] = t(e[n], n, e);
        return i;
      };
    },
    65067: function (e) {
      e.exports = function (e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
        return e;
      };
    },
    87064: function (e) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      };
    },
    28582: function (e, t, n) {
      var r = n(13940),
        i = n(41225);
      e.exports = function (e, t, n) {
        ((void 0 === n || i(e[t], n)) && (void 0 !== n || t in e)) ||
          r(e, t, n);
      };
    },
    60091: function (e, t, n) {
      var r = n(13940),
        i = n(41225),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n) {
        var a = e[t];
        (o.call(e, t) && i(a, n) && (void 0 !== n || t in e)) || r(e, t, n);
      };
    },
    22218: function (e, t, n) {
      var r = n(41225);
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    13940: function (e, t, n) {
      var r = n(83043);
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    39413: function (e, t, n) {
      var r = n(29259),
        i = Object.create,
        o = (function () {
          function e() {}
          return function (t) {
            if (!r(t)) return {};
            if (i) return i(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })();
      e.exports = o;
    },
    85246: function (e, t, n) {
      var r = n(45386),
        i = n(38333),
        o = n(34893),
        a = n(50343),
        s = n(47826),
        u = n(59950);
      e.exports = function (e, t, n, c) {
        var f = -1,
          l = i,
          d = !0,
          h = e.length,
          p = [],
          g = t.length;
        if (!h) return p;
        n && (t = a(t, s(n))),
          c
            ? ((l = o), (d = !1))
            : t.length >= 200 && ((l = u), (d = !1), (t = new r(t)));
        n: for (; ++f < h; ) {
          var b = e[f],
            m = null == n ? b : n(b);
          if (((b = c || 0 !== b ? b : 0), d && m == m)) {
            for (var y = g; y--; ) if (t[y] === m) continue n;
            p.push(b);
          } else l(t, m, c) || p.push(b);
        }
        return p;
      };
    },
    24303: function (e, t, n) {
      var r = n(26548),
        i = n(92019)(r);
      e.exports = i;
    },
    21359: function (e) {
      e.exports = function (e, t, n, r) {
        for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
          if (t(e[o], o, e)) return o;
        return -1;
      };
    },
    62034: function (e, t, n) {
      var r = n(65067),
        i = n(95882);
      e.exports = function e(t, n, o, a, s) {
        var u = -1,
          c = t.length;
        for (o || (o = i), s || (s = []); ++u < c; ) {
          var f = t[u];
          n > 0 && o(f)
            ? n > 1
              ? e(f, n - 1, o, a, s)
              : r(s, f)
            : a || (s[s.length] = f);
        }
        return s;
      };
    },
    15308: function (e, t, n) {
      var r = n(55463)();
      e.exports = r;
    },
    26548: function (e, t, n) {
      var r = n(15308),
        i = n(90249);
      e.exports = function (e, t) {
        return e && r(e, t, i);
      };
    },
    13324: function (e, t, n) {
      var r = n(17297),
        i = n(33812);
      e.exports = function (e, t) {
        t = r(t, e);
        for (var n = 0, o = t.length; null != e && n < o; ) e = e[i(t[n++])];
        return n && n == o ? e : void 0;
      };
    },
    1897: function (e, t, n) {
      var r = n(65067),
        i = n(86152);
      e.exports = function (e, t, n) {
        var o = t(e);
        return i(e) ? o : r(o, n(e));
      };
    },
    53366: function (e, t, n) {
      var r = n(50857),
        i = n(62107),
        o = n(37157),
        a = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(e)
          ? i(e)
          : o(e);
      };
    },
    20187: function (e) {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    77832: function (e, t, n) {
      var r = n(21359),
        i = n(22195),
        o = n(66024);
      e.exports = function (e, t, n) {
        return t == t ? o(e, t, n) : r(e, i, n);
      };
    },
    15183: function (e, t, n) {
      var r = n(53366),
        i = n(15125);
      e.exports = function (e) {
        return i(e) && "[object Arguments]" == r(e);
      };
    },
    72097: function (e, t, n) {
      var r = n(53366),
        i = n(15125);
      e.exports = function (e) {
        return i(e) && "[object Date]" == r(e);
      };
    },
    88746: function (e, t, n) {
      var r = n(51952),
        i = n(15125);
      e.exports = function e(t, n, o, a, s) {
        return (
          t === n ||
          (null != t && null != n && (i(t) || i(n))
            ? r(t, n, o, a, e, s)
            : t != t && n != n)
        );
      };
    },
    51952: function (e, t, n) {
      var r = n(86571),
        i = n(74871),
        o = n(11491),
        a = n(17416),
        s = n(70940),
        u = n(86152),
        c = n(73226),
        f = n(77598),
        l = "[object Arguments]",
        d = "[object Array]",
        h = "[object Object]",
        p = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, g, b, m) {
        var y = u(e),
          v = u(t),
          _ = y ? d : s(e),
          x = v ? d : s(t);
        (_ = _ == l ? h : _), (x = x == l ? h : x);
        var w = _ == h,
          k = x == h,
          M = _ == x;
        if (M && c(e)) {
          if (!c(t)) return !1;
          (y = !0), (w = !1);
        }
        if (M && !w)
          return (
            m || (m = new r()),
            y || f(e) ? i(e, t, n, g, b, m) : o(e, t, _, n, g, b, m)
          );
        if (!(1 & n)) {
          var T = w && p.call(e, "__wrapped__"),
            S = k && p.call(t, "__wrapped__");
          if (T || S) {
            var C = T ? e.value() : e,
              O = S ? t.value() : t;
            return m || (m = new r()), b(C, O, n, g, m);
          }
        }
        return !!M && (m || (m = new r()), a(e, t, n, g, b, m));
      };
    },
    37036: function (e, t, n) {
      var r = n(86571),
        i = n(88746);
      e.exports = function (e, t, n, o) {
        var a = n.length,
          s = a,
          u = !o;
        if (null == e) return !s;
        for (e = Object(e); a--; ) {
          var c = n[a];
          if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
        }
        for (; ++a < s; ) {
          var f = (c = n[a])[0],
            l = e[f],
            d = c[1];
          if (u && c[2]) {
            if (void 0 === l && !(f in e)) return !1;
          } else {
            var h = new r();
            if (o) var p = o(l, d, f, e, t, h);
            if (!(void 0 === p ? i(d, l, 3, o, h) : p)) return !1;
          }
        }
        return !0;
      };
    },
    22195: function (e) {
      e.exports = function (e) {
        return e != e;
      };
    },
    6840: function (e, t, n) {
      var r = n(61049),
        i = n(47394),
        o = n(29259),
        a = n(87035),
        s = /^\[object .+?Constructor\]$/,
        u = Object.prototype,
        c = Function.prototype.toString,
        f = u.hasOwnProperty,
        l = RegExp(
          "^" +
            c
              .call(f)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!o(e) || i(e)) && (r(e) ? l : s).test(a(e));
      };
    },
    35522: function (e, t, n) {
      var r = n(53366),
        i = n(61158),
        o = n(15125),
        a = {};
      (a["[object Float32Array]"] =
        a["[object Float64Array]"] =
        a["[object Int8Array]"] =
        a["[object Int16Array]"] =
        a["[object Int32Array]"] =
        a["[object Uint8Array]"] =
        a["[object Uint8ClampedArray]"] =
        a["[object Uint16Array]"] =
        a["[object Uint32Array]"] =
          !0),
        (a["[object Arguments]"] =
          a["[object Array]"] =
          a["[object ArrayBuffer]"] =
          a["[object Boolean]"] =
          a["[object DataView]"] =
          a["[object Date]"] =
          a["[object Error]"] =
          a["[object Function]"] =
          a["[object Map]"] =
          a["[object Number]"] =
          a["[object Object]"] =
          a["[object RegExp]"] =
          a["[object Set]"] =
          a["[object String]"] =
          a["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return o(e) && i(e.length) && !!a[r(e)];
        });
    },
    68286: function (e, t, n) {
      var r = n(26423),
        i = n(74716),
        o = n(23059),
        a = n(86152),
        s = n(65798);
      e.exports = function (e) {
        return "function" == typeof e
          ? e
          : null == e
          ? o
          : "object" == typeof e
          ? a(e)
            ? i(e[0], e[1])
            : r(e)
          : s(e);
      };
    },
    86411: function (e, t, n) {
      var r = n(16001),
        i = n(54248),
        o = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return i(e);
        var t = [];
        for (var n in Object(e))
          o.call(e, n) && "constructor" != n && t.push(n);
        return t;
      };
    },
    18390: function (e, t, n) {
      var r = n(29259),
        i = n(16001),
        o = n(62966),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return o(e);
        var t = i(e),
          n = [];
        for (var s in e)
          ("constructor" == s && (t || !a.call(e, s))) || n.push(s);
        return n;
      };
    },
    93401: function (e, t, n) {
      var r = n(24303),
        i = n(67878);
      e.exports = function (e, t) {
        var n = -1,
          o = i(e) ? Array(e.length) : [];
        return (
          r(e, function (e, r, i) {
            o[++n] = t(e, r, i);
          }),
          o
        );
      };
    },
    26423: function (e, t, n) {
      var r = n(37036),
        i = n(49882),
        o = n(73477);
      e.exports = function (e) {
        var t = i(e);
        return 1 == t.length && t[0][2]
          ? o(t[0][0], t[0][1])
          : function (n) {
              return n === e || r(n, e, t);
            };
      };
    },
    74716: function (e, t, n) {
      var r = n(88746),
        i = n(72579),
        o = n(95041),
        a = n(21401),
        s = n(28792),
        u = n(73477),
        c = n(33812);
      e.exports = function (e, t) {
        return a(e) && s(t)
          ? u(c(e), t)
          : function (n) {
              var a = i(n, e);
              return void 0 === a && a === t ? o(n, e) : r(t, a, 3);
            };
      };
    },
    84565: function (e, t, n) {
      var r = n(86571),
        i = n(28582),
        o = n(15308),
        a = n(25561),
        s = n(29259),
        u = n(18582),
        c = n(52434);
      e.exports = function e(t, n, f, l, d) {
        t !== n &&
          o(
            n,
            function (o, u) {
              if ((d || (d = new r()), s(o))) a(t, n, u, f, e, l, d);
              else {
                var h = l ? l(c(t, u), o, u + "", t, n, d) : void 0;
                void 0 === h && (h = o), i(t, u, h);
              }
            },
            u
          );
      };
    },
    25561: function (e, t, n) {
      var r = n(28582),
        i = n(92175),
        o = n(6190),
        a = n(51522),
        s = n(78725),
        u = n(79631),
        c = n(86152),
        f = n(93746),
        l = n(73226),
        d = n(61049),
        h = n(29259),
        p = n(97030),
        g = n(77598),
        b = n(52434),
        m = n(63329);
      e.exports = function (e, t, n, y, v, _, x) {
        var w = b(e, n),
          k = b(t, n),
          M = x.get(k);
        if (M) {
          r(e, n, M);
          return;
        }
        var T = _ ? _(w, k, n + "", e, t, x) : void 0,
          S = void 0 === T;
        if (S) {
          var C = c(k),
            O = !C && l(k),
            j = !C && !O && g(k);
          (T = k),
            C || O || j
              ? c(w)
                ? (T = w)
                : f(w)
                ? (T = a(w))
                : O
                ? ((S = !1), (T = i(k, !0)))
                : j
                ? ((S = !1), (T = o(k, !0)))
                : (T = [])
              : p(k) || u(k)
              ? ((T = w), u(w) ? (T = m(w)) : (!h(w) || d(w)) && (T = s(k)))
              : (S = !1);
        }
        S && (x.set(k, T), v(T, k, y, _, x), x.delete(k)), r(e, n, T);
      };
    },
    23813: function (e, t, n) {
      var r = n(50343),
        i = n(13324),
        o = n(68286),
        a = n(93401),
        s = n(27095),
        u = n(47826),
        c = n(18477),
        f = n(23059),
        l = n(86152);
      e.exports = function (e, t, n) {
        t = t.length
          ? r(t, function (e) {
              return l(e)
                ? function (t) {
                    return i(t, 1 === e.length ? e[0] : e);
                  }
                : e;
            })
          : [f];
        var d = -1;
        return (
          (t = r(t, u(o))),
          s(
            a(e, function (e, n, i) {
              return {
                criteria: r(t, function (t) {
                  return t(e);
                }),
                index: ++d,
                value: e,
              };
            }),
            function (e, t) {
              return c(e, t, n);
            }
          )
        );
      };
    },
    92602: function (e, t, n) {
      var r = n(93759),
        i = n(95041);
      e.exports = function (e, t) {
        return r(e, t, function (t, n) {
          return i(e, n);
        });
      };
    },
    93759: function (e, t, n) {
      var r = n(13324),
        i = n(82857),
        o = n(17297);
      e.exports = function (e, t, n) {
        for (var a = -1, s = t.length, u = {}; ++a < s; ) {
          var c = t[a],
            f = r(e, c);
          n(f, c) && i(u, o(c, e), f);
        }
        return u;
      };
    },
    20256: function (e) {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    82952: function (e, t, n) {
      var r = n(13324);
      e.exports = function (e) {
        return function (t) {
          return r(t, e);
        };
      };
    },
    36060: function (e, t, n) {
      var r = n(23059),
        i = n(43114),
        o = n(75251);
      e.exports = function (e, t) {
        return o(i(e, t, r), e + "");
      };
    },
    82857: function (e, t, n) {
      var r = n(60091),
        i = n(17297),
        o = n(39045),
        a = n(29259),
        s = n(33812);
      e.exports = function (e, t, n, u) {
        if (!a(e)) return e;
        t = i(t, e);
        for (
          var c = -1, f = t.length, l = f - 1, d = e;
          null != d && ++c < f;

        ) {
          var h = s(t[c]),
            p = n;
          if ("__proto__" === h || "constructor" === h || "prototype" === h)
            break;
          if (c != l) {
            var g = d[h];
            void 0 === (p = u ? u(g, h, d) : void 0) &&
              (p = a(g) ? g : o(t[c + 1]) ? [] : {});
          }
          r(d, h, p), (d = d[h]);
        }
        return e;
      };
    },
    86532: function (e, t, n) {
      var r = n(86874),
        i = n(83043),
        o = n(23059),
        a = i
          ? function (e, t) {
              return i(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(t),
                writable: !0,
              });
            }
          : o;
      e.exports = a;
    },
    27095: function (e) {
      e.exports = function (e, t) {
        var n = e.length;
        for (e.sort(t); n--; ) e[n] = e[n].value;
        return e;
      };
    },
    36473: function (e) {
      e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
    },
    1054: function (e, t, n) {
      var r = n(50857),
        i = n(50343),
        o = n(86152),
        a = n(4795),
        s = 1 / 0,
        u = r ? r.prototype : void 0,
        c = u ? u.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (o(t)) return i(t, e) + "";
        if (a(t)) return c ? c.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -s ? "-0" : n;
      };
    },
    47826: function (e) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    67326: function (e, t, n) {
      var r = n(45386),
        i = n(38333),
        o = n(34893),
        a = n(59950),
        s = n(78803),
        u = n(16909);
      e.exports = function (e, t, n) {
        var c = -1,
          f = i,
          l = e.length,
          d = !0,
          h = [],
          p = h;
        if (n) (d = !1), (f = o);
        else if (l >= 200) {
          var g = t ? null : s(e);
          if (g) return u(g);
          (d = !1), (f = a), (p = new r());
        } else p = t ? [] : h;
        n: for (; ++c < l; ) {
          var b = e[c],
            m = t ? t(b) : b;
          if (((b = n || 0 !== b ? b : 0), d && m == m)) {
            for (var y = p.length; y--; ) if (p[y] === m) continue n;
            t && p.push(m), h.push(b);
          } else f(p, m, n) || (p !== h && p.push(m), h.push(b));
        }
        return h;
      };
    },
    59950: function (e) {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    17297: function (e, t, n) {
      var r = n(86152),
        i = n(21401),
        o = n(54452),
        a = n(66188);
      e.exports = function (e, t) {
        return r(e) ? e : i(e, t) ? [e] : o(a(e));
      };
    },
    79882: function (e, t, n) {
      var r = n(79162);
      e.exports = function (e) {
        var t = new e.constructor(e.byteLength);
        return new r(t).set(new r(e)), t;
      };
    },
    92175: function (e, t, n) {
      e = n.nmd(e);
      var r = n(37772),
        i = t && !t.nodeType && t,
        o = i && e && !e.nodeType && e,
        a = o && o.exports === i ? r.Buffer : void 0,
        s = a ? a.allocUnsafe : void 0;
      e.exports = function (e, t) {
        if (t) return e.slice();
        var n = e.length,
          r = s ? s(n) : new e.constructor(n);
        return e.copy(r), r;
      };
    },
    6190: function (e, t, n) {
      var r = n(79882);
      e.exports = function (e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
    },
    27520: function (e, t, n) {
      var r = n(4795);
      e.exports = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            i = null === e,
            o = e == e,
            a = r(e),
            s = void 0 !== t,
            u = null === t,
            c = t == t,
            f = r(t);
          if (
            (!u && !f && !a && e > t) ||
            (a && s && c && !u && !f) ||
            (i && s && c) ||
            (!n && c) ||
            !o
          )
            return 1;
          if (
            (!i && !a && !f && e < t) ||
            (f && n && o && !i && !a) ||
            (u && n && o) ||
            (!s && o) ||
            !c
          )
            return -1;
        }
        return 0;
      };
    },
    18477: function (e, t, n) {
      var r = n(27520);
      e.exports = function (e, t, n) {
        for (
          var i = -1,
            o = e.criteria,
            a = t.criteria,
            s = o.length,
            u = n.length;
          ++i < s;

        ) {
          var c = r(o[i], a[i]);
          if (c) {
            if (i >= u) return c;
            return c * ("desc" == n[i] ? -1 : 1);
          }
        }
        return e.index - t.index;
      };
    },
    51522: function (e) {
      e.exports = function (e, t) {
        var n = -1,
          r = e.length;
        for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
        return t;
      };
    },
    752: function (e, t, n) {
      var r = n(60091),
        i = n(13940);
      e.exports = function (e, t, n, o) {
        var a = !n;
        n || (n = {});
        for (var s = -1, u = t.length; ++s < u; ) {
          var c = t[s],
            f = o ? o(n[c], e[c], c, n, e) : void 0;
          void 0 === f && (f = e[c]), a ? i(n, c, f) : r(n, c, f);
        }
        return n;
      };
    },
    24019: function (e, t, n) {
      var r = n(37772)["__core-js_shared__"];
      e.exports = r;
    },
    97263: function (e, t, n) {
      var r = n(36060),
        i = n(82406);
      e.exports = function (e) {
        return r(function (t, n) {
          var r = -1,
            o = n.length,
            a = o > 1 ? n[o - 1] : void 0,
            s = o > 2 ? n[2] : void 0;
          for (
            a = e.length > 3 && "function" == typeof a ? (o--, a) : void 0,
              s && i(n[0], n[1], s) && ((a = o < 3 ? void 0 : a), (o = 1)),
              t = Object(t);
            ++r < o;

          ) {
            var u = n[r];
            u && e(t, u, r, a);
          }
          return t;
        });
      };
    },
    92019: function (e, t, n) {
      var r = n(67878);
      e.exports = function (e, t) {
        return function (n, i) {
          if (null == n) return n;
          if (!r(n)) return e(n, i);
          for (
            var o = n.length, a = t ? o : -1, s = Object(n);
            (t ? a-- : ++a < o) && !1 !== i(s[a], a, s);

          );
          return n;
        };
      };
    },
    55463: function (e) {
      e.exports = function (e) {
        return function (t, n, r) {
          for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
            var u = a[e ? s : ++i];
            if (!1 === n(o[u], u, o)) break;
          }
          return t;
        };
      };
    },
    78803: function (e, t, n) {
      var r = n(2143),
        i = n(34291),
        o = n(16909),
        a =
          r && 1 / o(new r([, -0]))[1] == 1 / 0
            ? function (e) {
                return new r(e);
              }
            : i;
      e.exports = a;
    },
    83043: function (e, t, n) {
      var r = n(38761),
        i = (function () {
          try {
            var e = r(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })();
      e.exports = i;
    },
    74871: function (e, t, n) {
      var r = n(45386),
        i = n(87064),
        o = n(59950);
      e.exports = function (e, t, n, a, s, u) {
        var c = 1 & n,
          f = e.length,
          l = t.length;
        if (f != l && !(c && l > f)) return !1;
        var d = u.get(e),
          h = u.get(t);
        if (d && h) return d == t && h == e;
        var p = -1,
          g = !0,
          b = 2 & n ? new r() : void 0;
        for (u.set(e, t), u.set(t, e); ++p < f; ) {
          var m = e[p],
            y = t[p];
          if (a) var v = c ? a(y, m, p, t, e, u) : a(m, y, p, e, t, u);
          if (void 0 !== v) {
            if (v) continue;
            g = !1;
            break;
          }
          if (b) {
            if (
              !i(t, function (e, t) {
                if (!o(b, t) && (m === e || s(m, e, n, a, u))) return b.push(t);
              })
            ) {
              g = !1;
              break;
            }
          } else if (!(m === y || s(m, y, n, a, u))) {
            g = !1;
            break;
          }
        }
        return u.delete(e), u.delete(t), g;
      };
    },
    11491: function (e, t, n) {
      var r = n(50857),
        i = n(79162),
        o = n(41225),
        a = n(74871),
        s = n(75179),
        u = n(16909),
        c = r ? r.prototype : void 0,
        f = c ? c.valueOf : void 0;
      e.exports = function (e, t, n, r, c, l, d) {
        switch (n) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              break;
            (e = e.buffer), (t = t.buffer);
          case "[object ArrayBuffer]":
            if (e.byteLength != t.byteLength || !l(new i(e), new i(t))) break;
            return !0;
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return o(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var h = s;
          case "[object Set]":
            var p = 1 & r;
            if ((h || (h = u), e.size != t.size && !p)) break;
            var g = d.get(e);
            if (g) return g == t;
            (r |= 2), d.set(e, t);
            var b = a(h(e), h(t), r, c, l, d);
            return d.delete(e), b;
          case "[object Symbol]":
            if (f) return f.call(e) == f.call(t);
        }
        return !1;
      };
    },
    17416: function (e, t, n) {
      var r = n(13483),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, o, a, s) {
        var u = 1 & n,
          c = r(e),
          f = c.length;
        if (f != r(t).length && !u) return !1;
        for (var l = f; l--; ) {
          var d = c[l];
          if (!(u ? d in t : i.call(t, d))) return !1;
        }
        var h = s.get(e),
          p = s.get(t);
        if (h && p) return h == t && p == e;
        var g = !0;
        s.set(e, t), s.set(t, e);
        for (var b = u; ++l < f; ) {
          var m = e[(d = c[l])],
            y = t[d];
          if (o) var v = u ? o(y, m, d, t, e, s) : o(m, y, d, e, t, s);
          if (!(void 0 === v ? m === y || a(m, y, n, o, s) : v)) {
            g = !1;
            break;
          }
          b || (b = "constructor" == d);
        }
        if (g && !b) {
          var _ = e.constructor,
            x = t.constructor;
          _ != x &&
            "constructor" in e &&
            "constructor" in t &&
            !(
              "function" == typeof _ &&
              _ instanceof _ &&
              "function" == typeof x &&
              x instanceof x
            ) &&
            (g = !1);
        }
        return s.delete(e), s.delete(t), g;
      };
    },
    29097: function (e, t, n) {
      var r = n(35676),
        i = n(43114),
        o = n(75251);
      e.exports = function (e) {
        return o(i(e, void 0, r), e + "");
      };
    },
    51242: function (e, t, n) {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r;
    },
    13483: function (e, t, n) {
      var r = n(1897),
        i = n(80633),
        o = n(90249);
      e.exports = function (e) {
        return r(e, o, i);
      };
    },
    27937: function (e, t, n) {
      var r = n(98304);
      e.exports = function (e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
    },
    49882: function (e, t, n) {
      var r = n(28792),
        i = n(90249);
      e.exports = function (e) {
        for (var t = i(e), n = t.length; n--; ) {
          var o = t[n],
            a = e[o];
          t[n] = [o, a, r(a)];
        }
        return t;
      };
    },
    38761: function (e, t, n) {
      var r = n(6840),
        i = n(98109);
      e.exports = function (e, t) {
        var n = i(e, t);
        return r(n) ? n : void 0;
      };
    },
    47353: function (e, t, n) {
      var r = n(60241)(Object.getPrototypeOf, Object);
      e.exports = r;
    },
    62107: function (e, t, n) {
      var r = n(50857),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        s = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = o.call(e, s),
          n = e[s];
        try {
          e[s] = void 0;
          var r = !0;
        } catch (e) {}
        var i = a.call(e);
        return r && (t ? (e[s] = n) : delete e[s]), i;
      };
    },
    80633: function (e, t, n) {
      var r = n(67552),
        i = n(30981),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        s = a
          ? function (e) {
              return null == e
                ? []
                : r(a((e = Object(e))), function (t) {
                    return o.call(e, t);
                  });
            }
          : i;
      e.exports = s;
    },
    70940: function (e, t, n) {
      var r = n(39515),
        i = n(10326),
        o = n(52760),
        a = n(2143),
        s = n(93215),
        u = n(53366),
        c = n(87035),
        f = "[object Map]",
        l = "[object Promise]",
        d = "[object Set]",
        h = "[object WeakMap]",
        p = "[object DataView]",
        g = c(r),
        b = c(i),
        m = c(o),
        y = c(a),
        v = c(s),
        _ = u;
      ((r && _(new r(new ArrayBuffer(1))) != p) ||
        (i && _(new i()) != f) ||
        (o && _(o.resolve()) != l) ||
        (a && _(new a()) != d) ||
        (s && _(new s()) != h)) &&
        (_ = function (e) {
          var t = u(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? c(n) : "";
          if (r)
            switch (r) {
              case g:
                return p;
              case b:
                return f;
              case m:
                return l;
              case y:
                return d;
              case v:
                return h;
            }
          return t;
        }),
        (e.exports = _);
    },
    98109: function (e) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    1369: function (e, t, n) {
      var r = n(17297),
        i = n(79631),
        o = n(86152),
        a = n(39045),
        s = n(61158),
        u = n(33812);
      e.exports = function (e, t, n) {
        t = r(t, e);
        for (var c = -1, f = t.length, l = !1; ++c < f; ) {
          var d = u(t[c]);
          if (!(l = null != e && n(e, d))) break;
          e = e[d];
        }
        return l || ++c != f
          ? l
          : !!(f = null == e ? 0 : e.length) &&
              s(f) &&
              a(d, f) &&
              (o(e) || i(e));
      };
    },
    52118: function (e, t, n) {
      var r = n(99191);
      e.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    96909: function (e) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    98138: function (e, t, n) {
      var r = n(99191),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return i.call(t, e) ? t[e] : void 0;
      };
    },
    4174: function (e, t, n) {
      var r = n(99191),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : i.call(t, e);
      };
    },
    7942: function (e, t, n) {
      var r = n(99191);
      e.exports = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
    },
    78725: function (e, t, n) {
      var r = n(39413),
        i = n(47353),
        o = n(16001);
      e.exports = function (e) {
        return "function" != typeof e.constructor || o(e) ? {} : r(i(e));
      };
    },
    95882: function (e, t, n) {
      var r = n(50857),
        i = n(79631),
        o = n(86152),
        a = r ? r.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return o(e) || i(e) || !!(a && e && e[a]);
      };
    },
    39045: function (e) {
      var t = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, n) {
        var r = typeof e;
        return (
          !!(n = null == n ? 9007199254740991 : n) &&
          ("number" == r || ("symbol" != r && t.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < n
        );
      };
    },
    82406: function (e, t, n) {
      var r = n(41225),
        i = n(67878),
        o = n(39045),
        a = n(29259);
      e.exports = function (e, t, n) {
        if (!a(n)) return !1;
        var s = typeof t;
        return (
          ("number" == s
            ? !!(i(n) && o(t, n.length))
            : "string" == s && t in n) && r(n[t], e)
        );
      };
    },
    21401: function (e, t, n) {
      var r = n(86152),
        i = n(4795),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      e.exports = function (e, t) {
        if (r(e)) return !1;
        var n = typeof e;
        return (
          !!(
            "number" == n ||
            "symbol" == n ||
            "boolean" == n ||
            null == e ||
            i(e)
          ) ||
          a.test(e) ||
          !o.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    98304: function (e) {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    47394: function (e, t, n) {
      var r,
        i = n(24019),
        o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "";
      e.exports = function (e) {
        return !!o && o in e;
      };
    },
    16001: function (e) {
      var t = Object.prototype;
      e.exports = function (e) {
        var n = e && e.constructor;
        return e === (("function" == typeof n && n.prototype) || t);
      };
    },
    28792: function (e, t, n) {
      var r = n(29259);
      e.exports = function (e) {
        return e == e && !r(e);
      };
    },
    3945: function (e) {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    21846: function (e, t, n) {
      var r = n(22218),
        i = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0)
        );
      };
    },
    88028: function (e, t, n) {
      var r = n(22218);
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    72344: function (e, t, n) {
      var r = n(22218);
      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    94769: function (e, t, n) {
      var r = n(22218);
      e.exports = function (e, t) {
        var n = this.__data__,
          i = r(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
      };
    },
    92411: function (e, t, n) {
      var r = n(89612),
        i = n(80235),
        o = n(10326);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (o || i)(),
            string: new r(),
          });
      };
    },
    36417: function (e, t, n) {
      var r = n(27937);
      e.exports = function (e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    86928: function (e, t, n) {
      var r = n(27937);
      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    79493: function (e, t, n) {
      var r = n(27937);
      e.exports = function (e) {
        return r(this, e).has(e);
      };
    },
    24150: function (e, t, n) {
      var r = n(27937);
      e.exports = function (e, t) {
        var n = r(this, e),
          i = n.size;
        return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
      };
    },
    75179: function (e) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      };
    },
    73477: function (e) {
      e.exports = function (e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      };
    },
    77777: function (e, t, n) {
      var r = n(30733);
      e.exports = function (e) {
        var t = r(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      };
    },
    99191: function (e, t, n) {
      var r = n(38761)(Object, "create");
      e.exports = r;
    },
    54248: function (e, t, n) {
      var r = n(60241)(Object.keys, Object);
      e.exports = r;
    },
    62966: function (e) {
      e.exports = function (e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      };
    },
    4146: function (e, t, n) {
      e = n.nmd(e);
      var r = n(51242),
        i = t && !t.nodeType && t,
        o = i && e && !e.nodeType && e,
        a = o && o.exports === i && r.process,
        s = (function () {
          try {
            var e = o && o.require && o.require("util").types;
            if (e) return e;
            return a && a.binding && a.binding("util");
          } catch (e) {}
        })();
      e.exports = s;
    },
    37157: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    60241: function (e) {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    43114: function (e, t, n) {
      var r = n(49432),
        i = Math.max;
      e.exports = function (e, t, n) {
        return (
          (t = i(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var o = arguments, a = -1, s = i(o.length - t, 0), u = Array(s);
              ++a < s;

            )
              u[a] = o[t + a];
            a = -1;
            for (var c = Array(t + 1); ++a < t; ) c[a] = o[a];
            return (c[t] = n(u)), r(e, this, c);
          }
        );
      };
    },
    37772: function (e, t, n) {
      var r = n(51242),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
      e.exports = o;
    },
    52434: function (e) {
      e.exports = function (e, t) {
        if (
          ("constructor" !== t || "function" != typeof e[t]) &&
          "__proto__" != t
        )
          return e[t];
      };
    },
    52842: function (e) {
      e.exports = function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
      };
    },
    52482: function (e) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    16909: function (e) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      };
    },
    75251: function (e, t, n) {
      var r = n(86532),
        i = n(97787)(r);
      e.exports = i;
    },
    97787: function (e) {
      var t = Date.now;
      e.exports = function (e) {
        var n = 0,
          r = 0;
        return function () {
          var i = t(),
            o = 16 - (i - r);
          if (((r = i), o > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return e.apply(void 0, arguments);
        };
      };
    },
    15243: function (e, t, n) {
      var r = n(80235);
      e.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    72858: function (e) {
      e.exports = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
    },
    4417: function (e) {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    8605: function (e) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    71418: function (e, t, n) {
      var r = n(80235),
        i = n(10326),
        o = n(96738);
      e.exports = function (e, t) {
        var n = this.__data__;
        if (n instanceof r) {
          var a = n.__data__;
          if (!i || a.length < 199)
            return a.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new o(a);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
    },
    66024: function (e) {
      e.exports = function (e, t, n) {
        for (var r = n - 1, i = e.length; ++r < i; ) if (e[r] === t) return r;
        return -1;
      };
    },
    54452: function (e, t, n) {
      var r = n(77777),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(i, function (e, n, r, i) {
              t.push(r ? i.replace(o, "$1") : n || e);
            }),
            t
          );
        });
      e.exports = a;
    },
    33812: function (e, t, n) {
      var r = n(4795),
        i = 1 / 0;
      e.exports = function (e) {
        if ("string" == typeof e || r(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -i ? "-0" : t;
      };
    },
    87035: function (e) {
      var t = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return t.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
    },
    86874: function (e) {
      e.exports = function (e) {
        return function () {
          return e;
        };
      };
    },
    41225: function (e) {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    35676: function (e, t, n) {
      var r = n(62034);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : [];
      };
    },
    72579: function (e, t, n) {
      var r = n(13324);
      e.exports = function (e, t, n) {
        var i = null == e ? void 0 : r(e, t);
        return void 0 === i ? n : i;
      };
    },
    95041: function (e, t, n) {
      var r = n(20187),
        i = n(1369);
      e.exports = function (e, t) {
        return null != e && i(e, t, r);
      };
    },
    23059: function (e) {
      e.exports = function (e) {
        return e;
      };
    },
    79631: function (e, t, n) {
      var r = n(15183),
        i = n(15125),
        o = Object.prototype,
        a = o.hasOwnProperty,
        s = o.propertyIsEnumerable,
        u = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (e) {
              return i(e) && a.call(e, "callee") && !s.call(e, "callee");
            };
      e.exports = u;
    },
    86152: function (e) {
      var t = Array.isArray;
      e.exports = t;
    },
    67878: function (e, t, n) {
      var r = n(61049),
        i = n(61158);
      e.exports = function (e) {
        return null != e && i(e.length) && !r(e);
      };
    },
    93746: function (e, t, n) {
      var r = n(67878),
        i = n(15125);
      e.exports = function (e) {
        return i(e) && r(e);
      };
    },
    73226: function (e, t, n) {
      e = n.nmd(e);
      var r = n(37772),
        i = n(36330),
        o = t && !t.nodeType && t,
        a = o && e && !e.nodeType && e,
        s = a && a.exports === o ? r.Buffer : void 0,
        u = s ? s.isBuffer : void 0;
      e.exports = u || i;
    },
    17318: function (e, t, n) {
      var r = n(72097),
        i = n(47826),
        o = n(4146),
        a = o && o.isDate,
        s = a ? i(a) : r;
      e.exports = s;
    },
    18149: function (e, t, n) {
      var r = n(88746);
      e.exports = function (e, t) {
        return r(e, t);
      };
    },
    61049: function (e, t, n) {
      var r = n(53366),
        i = n(29259);
      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = r(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    61158: function (e) {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    29259: function (e) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    15125: function (e) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    97030: function (e, t, n) {
      var r = n(53366),
        i = n(47353),
        o = n(15125),
        a = Object.prototype,
        s = Function.prototype.toString,
        u = a.hasOwnProperty,
        c = s.call(Object);
      e.exports = function (e) {
        if (!o(e) || "[object Object]" != r(e)) return !1;
        var t = i(e);
        if (null === t) return !0;
        var n = u.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == c;
      };
    },
    85505: function (e, t, n) {
      var r = n(53366),
        i = n(86152),
        o = n(15125);
      e.exports = function (e) {
        return (
          "string" == typeof e || (!i(e) && o(e) && "[object String]" == r(e))
        );
      };
    },
    4795: function (e, t, n) {
      var r = n(53366),
        i = n(15125);
      e.exports = function (e) {
        return "symbol" == typeof e || (i(e) && "[object Symbol]" == r(e));
      };
    },
    77598: function (e, t, n) {
      var r = n(35522),
        i = n(47826),
        o = n(4146),
        a = o && o.isTypedArray,
        s = a ? i(a) : r;
      e.exports = s;
    },
    90249: function (e, t, n) {
      var r = n(1634),
        i = n(86411),
        o = n(67878);
      e.exports = function (e) {
        return o(e) ? r(e) : i(e);
      };
    },
    18582: function (e, t, n) {
      var r = n(1634),
        i = n(18390),
        o = n(67878);
      e.exports = function (e) {
        return o(e) ? r(e, !0) : i(e);
      };
    },
    56974: function (e) {
      e.exports = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
    },
    30733: function (e, t, n) {
      var r = n(96738);
      function i(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw TypeError("Expected a function");
        var n = function () {
          var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            o = n.cache;
          if (o.has(i)) return o.get(i);
          var a = e.apply(this, r);
          return (n.cache = o.set(i, a) || o), a;
        };
        return (n.cache = new (i.Cache || r)()), n;
      }
      (i.Cache = r), (e.exports = i);
    },
    98537: function (e, t, n) {
      var r = n(84565),
        i = n(97263)(function (e, t, n) {
          r(e, t, n);
        });
      e.exports = i;
    },
    34291: function (e) {
      e.exports = function () {};
    },
    13888: function (e, t, n) {
      var r = n(92602),
        i = n(29097)(function (e, t) {
          return null == e ? {} : r(e, t);
        });
      e.exports = i;
    },
    65798: function (e, t, n) {
      var r = n(20256),
        i = n(82952),
        o = n(21401),
        a = n(33812);
      e.exports = function (e) {
        return o(e) ? r(a(e)) : i(e);
      };
    },
    16765: function (e, t, n) {
      var r = n(82857);
      e.exports = function (e, t, n) {
        return null == e ? e : r(e, t, n);
      };
    },
    829: function (e, t, n) {
      var r = n(62034),
        i = n(23813),
        o = n(36060),
        a = n(82406),
        s = o(function (e, t) {
          if (null == e) return [];
          var n = t.length;
          return (
            n > 1 && a(e, t[0], t[1])
              ? (t = [])
              : n > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]),
            i(e, r(t, 1), [])
          );
        });
      e.exports = s;
    },
    30981: function (e) {
      e.exports = function () {
        return [];
      };
    },
    36330: function (e) {
      e.exports = function () {
        return !1;
      };
    },
    63329: function (e, t, n) {
      var r = n(752),
        i = n(18582);
      e.exports = function (e) {
        return r(e, i(e));
      };
    },
    66188: function (e, t, n) {
      var r = n(1054);
      e.exports = function (e) {
        return null == e ? "" : r(e);
      };
    },
    75652: function (e, t, n) {
      var r = n(67326);
      e.exports = function (e) {
        return e && e.length ? r(e) : [];
      };
    },
    84636: function (e, t, n) {
      var r = n(68286),
        i = n(67326);
      e.exports = function (e, t) {
        return e && e.length ? i(e, r(t, 2)) : [];
      };
    },
    67304: function (e, t, n) {
      var r = n(85246),
        i = n(36060),
        o = n(93746),
        a = i(function (e, t) {
          return o(e) ? r(e, t) : [];
        });
      e.exports = a;
    },
    6738: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        ZP: function () {
          return l;
        },
      });
      var i = n(2784);
      r =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : n.g;
      let o = null,
        a = null,
        s = r.clearTimeout,
        u = r.setTimeout,
        c =
          r.cancelAnimationFrame ||
          r.mozCancelAnimationFrame ||
          r.webkitCancelAnimationFrame,
        f =
          r.requestAnimationFrame ||
          r.mozRequestAnimationFrame ||
          r.webkitRequestAnimationFrame;
      null == c || null == f
        ? ((o = s),
          (a = function (e) {
            return u(e, 20);
          }))
        : ((o = function ([e, t]) {
            c(e), s(t);
          }),
          (a = function (e) {
            let t = f(function () {
                s(n), e();
              }),
              n = u(function () {
                c(t), e();
              }, 20);
            return [t, n];
          }));
      class l extends i.Component {
        constructor(...e) {
          super(...e),
            (this.state = {
              height: this.props.defaultHeight || 0,
              scaledHeight: this.props.defaultHeight || 0,
              scaledWidth: this.props.defaultWidth || 0,
              width: this.props.defaultWidth || 0,
            }),
            (this._autoSizer = null),
            (this._detectElementResize = null),
            (this._parentNode = null),
            (this._resizeObserver = null),
            (this._timeoutId = null),
            (this._onResize = () => {
              this._timeoutId = null;
              let {
                disableHeight: e,
                disableWidth: t,
                onResize: n,
              } = this.props;
              if (this._parentNode) {
                let r = window.getComputedStyle(this._parentNode) || {},
                  i = parseFloat(r.paddingLeft || "0"),
                  o = parseFloat(r.paddingRight || "0"),
                  a = parseFloat(r.paddingTop || "0"),
                  s = parseFloat(r.paddingBottom || "0"),
                  u = this._parentNode.getBoundingClientRect(),
                  c = u.height - a - s,
                  f = u.width - i - o,
                  l = this._parentNode.offsetHeight - a - s,
                  d = this._parentNode.offsetWidth - i - o;
                ((e ||
                  (this.state.height === l && this.state.scaledHeight === c)) &&
                  (t ||
                    (this.state.width === d &&
                      this.state.scaledWidth === f))) ||
                  (this.setState({
                    height: l,
                    width: d,
                    scaledHeight: c,
                    scaledWidth: f,
                  }),
                  "function" == typeof n &&
                    n({
                      height: l,
                      scaledHeight: c,
                      scaledWidth: f,
                      width: d,
                    }));
              }
            }),
            (this._setRef = (e) => {
              this._autoSizer = e;
            });
        }
        componentDidMount() {
          let { nonce: e } = this.props,
            t = this._autoSizer ? this._autoSizer.parentNode : null;
          if (
            null != t &&
            t.ownerDocument &&
            t.ownerDocument.defaultView &&
            t instanceof t.ownerDocument.defaultView.HTMLElement
          ) {
            this._parentNode = t;
            let n = t.ownerDocument.defaultView.ResizeObserver;
            null != n
              ? ((this._resizeObserver = new n(() => {
                  this._timeoutId = setTimeout(this._onResize, 0);
                })),
                this._resizeObserver.observe(t))
              : ((this._detectElementResize = (function (e) {
                  let t, n, i, s, u, c;
                  let f =
                    "undefined" != typeof document && document.attachEvent;
                  if (!f) {
                    (u = function (e) {
                      let t = e.__resizeTriggers__,
                        n = t.firstElementChild,
                        r = t.lastElementChild,
                        i = n.firstElementChild;
                      (r.scrollLeft = r.scrollWidth),
                        (r.scrollTop = r.scrollHeight),
                        (i.style.width = n.offsetWidth + 1 + "px"),
                        (i.style.height = n.offsetHeight + 1 + "px"),
                        (n.scrollLeft = n.scrollWidth),
                        (n.scrollTop = n.scrollHeight);
                    }),
                      (c = function (e) {
                        if (
                          e.target.className &&
                          "function" == typeof e.target.className.indexOf &&
                          0 > e.target.className.indexOf("contract-trigger") &&
                          0 > e.target.className.indexOf("expand-trigger")
                        )
                          return;
                        let t = this;
                        u(this),
                          this.__resizeRAF__ && o(this.__resizeRAF__),
                          (this.__resizeRAF__ = a(function () {
                            (t.offsetWidth !== t.__resizeLast__.width ||
                              t.offsetHeight !== t.__resizeLast__.height) &&
                              ((t.__resizeLast__.width = t.offsetWidth),
                              (t.__resizeLast__.height = t.offsetHeight),
                              t.__resizeListeners__.forEach(function (n) {
                                n.call(t, e);
                              }));
                          }));
                      });
                    let e = !1,
                      r = "";
                    i = "animationstart";
                    let f = "Webkit Moz O ms".split(" "),
                      l =
                        "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(
                          " "
                        );
                    {
                      let t = document.createElement("fakeelement");
                      if (
                        (void 0 !== t.style.animationName && (e = !0), !1 === e)
                      ) {
                        for (let n = 0; n < f.length; n++)
                          if (void 0 !== t.style[f[n] + "AnimationName"]) {
                            (r = "-" + (0, f[n]).toLowerCase() + "-"),
                              (i = l[n]),
                              (e = !0);
                            break;
                          }
                      }
                    }
                    (t =
                      "@" +
                      r +
                      "keyframes " +
                      (n = "resizeanim") +
                      " { from { opacity: 0; } to { opacity: 0; } } "),
                      (s = r + "animation: 1ms " + n + "; ");
                  }
                  let l = function (n) {
                    if (!n.getElementById("detectElementResize")) {
                      let r =
                          (t || "") +
                          ".resize-triggers { " +
                          (s || "") +
                          'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                        i = n.head || n.getElementsByTagName("head")[0],
                        o = n.createElement("style");
                      (o.id = "detectElementResize"),
                        (o.type = "text/css"),
                        null != e && o.setAttribute("nonce", e),
                        o.styleSheet
                          ? (o.styleSheet.cssText = r)
                          : o.appendChild(n.createTextNode(r)),
                        i.appendChild(o);
                    }
                  };
                  return {
                    addResizeListener: function (e, t) {
                      if (f) e.attachEvent("onresize", t);
                      else {
                        if (!e.__resizeTriggers__) {
                          let t = e.ownerDocument,
                            o = r.getComputedStyle(e);
                          o &&
                            "static" === o.position &&
                            (e.style.position = "relative"),
                            l(t),
                            (e.__resizeLast__ = {}),
                            (e.__resizeListeners__ = []),
                            ((e.__resizeTriggers__ =
                              t.createElement("div")).className =
                              "resize-triggers");
                          let a = t.createElement("div");
                          (a.className = "expand-trigger"),
                            a.appendChild(t.createElement("div"));
                          let s = t.createElement("div");
                          (s.className = "contract-trigger"),
                            e.__resizeTriggers__.appendChild(a),
                            e.__resizeTriggers__.appendChild(s),
                            e.appendChild(e.__resizeTriggers__),
                            u(e),
                            e.addEventListener("scroll", c, !0),
                            i &&
                              ((e.__resizeTriggers__.__animationListener__ =
                                function (t) {
                                  t.animationName === n && u(e);
                                }),
                              e.__resizeTriggers__.addEventListener(
                                i,
                                e.__resizeTriggers__.__animationListener__
                              ));
                        }
                        e.__resizeListeners__.push(t);
                      }
                    },
                    removeResizeListener: function (e, t) {
                      if (f) e.detachEvent("onresize", t);
                      else if (
                        (e.__resizeListeners__.splice(
                          e.__resizeListeners__.indexOf(t),
                          1
                        ),
                        !e.__resizeListeners__.length)
                      ) {
                        e.removeEventListener("scroll", c, !0),
                          e.__resizeTriggers__.__animationListener__ &&
                            (e.__resizeTriggers__.removeEventListener(
                              i,
                              e.__resizeTriggers__.__animationListener__
                            ),
                            (e.__resizeTriggers__.__animationListener__ =
                              null));
                        try {
                          e.__resizeTriggers__ = !e.removeChild(
                            e.__resizeTriggers__
                          );
                        } catch (e) {}
                      }
                    },
                  };
                })(e)),
                this._detectElementResize.addResizeListener(t, this._onResize)),
              this._onResize();
          }
        }
        componentWillUnmount() {
          this._parentNode &&
            (this._detectElementResize &&
              this._detectElementResize.removeResizeListener(
                this._parentNode,
                this._onResize
              ),
            null !== this._timeoutId && clearTimeout(this._timeoutId),
            this._resizeObserver && this._resizeObserver.disconnect());
        }
        render() {
          let {
              children: e,
              defaultHeight: t,
              defaultWidth: n,
              disableHeight: r = !1,
              disableWidth: o = !1,
              doNotBailOutOnEmptyChildren: a = !1,
              nonce: s,
              onResize: u,
              style: c = {},
              tagName: f = "div",
              ...l
            } = this.props,
            {
              height: d,
              scaledHeight: h,
              scaledWidth: p,
              width: g,
            } = this.state,
            b = { overflow: "visible" },
            m = {},
            y = !1;
          return (
            r ||
              (0 === d && (y = !0),
              (b.height = 0),
              (m.height = d),
              (m.scaledHeight = h)),
            o ||
              (0 === g && (y = !0),
              (b.width = 0),
              (m.width = g),
              (m.scaledWidth = p)),
            a && (y = !1),
            (0, i.createElement)(
              f,
              { ref: this._setRef, style: { ...b, ...c }, ...l },
              !y && e(m)
            )
          );
        }
      }
    },
  },
]);
