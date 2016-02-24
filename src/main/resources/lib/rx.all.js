/* Copyright (c) Microsoft Open Technologies, Inc. All rights reserved. See License.txt in the project root for license information.*/
(function (a) {
    function b(a) {
        return a && a.Object === Object ? a : null
    }

    function c(a) {
        for (var b = [], c = 0, d = a.length; d > c; c++)b.push(a[c]);
        return b
    }

    function d(a) {
        return function () {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                return Ya.e = b, Ya
            }
        }
    }

    function e(a) {
        throw a
    }

    function f(a, b) {
        if ($a && b.stack && "object" == typeof a && null !== a && a.stack && -1 === a.stack.indexOf(cb)) {
            for (var c = [], d = b; d; d = d.source)d.stack && c.unshift(d.stack);
            c.unshift(a.stack);
            var e = c.join("\n" + cb + "\n");
            a.stack = g(e)
        }
    }

    function g(a) {
        for (var b = a.split("\n"), c = [], d = 0, e = b.length; e > d; d++) {
            var f = b[d];
            h(f) || i(f) || !f || c.push(f)
        }
        return c.join("\n")
    }

    function h(a) {
        var b = k(a);
        if (!b)return !1;
        var c = b[0], d = b[1];
        return c === ab && d >= bb && Dg >= d
    }

    function i(a) {
        return -1 !== a.indexOf("(module.js:") || -1 !== a.indexOf("(node.js:")
    }

    function j() {
        if ($a)try {
            throw new Error
        } catch (a) {
            var b = a.stack.split("\n"), c = b[0].indexOf("@") > 0 ? b[1] : b[2], d = k(c);
            if (!d)return;
            return ab = d[0], d[1]
        }
    }

    function k(a) {
        var b = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);
        if (b)return [b[1], Number(b[2])];
        var c = /at ([^ ]+):(\d+):(?:\d+)$/.exec(a);
        if (c)return [c[1], Number(c[2])];
        var d = /.*@(.+):(\d+)$/.exec(a);
        return d ? [d[1], Number(d[2])] : void 0
    }

    function l(b, c, d, e, f, g) {
        var h = Rb(b), i = h.length, j = Rb(c), k = j.length;
        if (i !== k && !e)return !1;
        for (var l, m = i; m--;)if (l = h[m], !(e ? l in c : Ob.call(c, l)))return !1;
        for (var n = e; ++m < i;) {
            l = h[m];
            var o, p = b[l], q = c[l];
            if (!(o === a ? d(p, q, e, f, g) : o))return !1;
            n || (n = "constructor" === l)
        }
        if (!n) {
            var r = b.constructor, s = c.constructor;
            if (r !== s && "constructor" in b && "constructor" in c && !("function" == typeof r && r instanceof r && "function" == typeof s && s instanceof s))return !1
        }
        return !0
    }

    function m(a, b, c) {
        switch (c) {
            case rb:
            case sb:
                return +a === +b;
            case tb:
                return a.name === b.name && a.message === b.message;
            case wb:
                return a !== +a ? b !== +b : a === +b;
            case yb:
            case Ab:
                return a === b + ""
        }
        return !1
    }

    function n(a) {
        return !!a && "object" == typeof a
    }

    function o(a) {
        return "number" == typeof a && a > -1 && a % 1 === 0 && Qb >= a
    }

    function p(a) {
        return n(a) && o(a.length) && !!Mb[Pb.call(a)]
    }

    function q(a, b) {
        for (var c = -1, d = a.length; ++c < d;)if (b(a[c], c, a))return !0;
        return !1
    }

    function r(b, c, d, e, f, g) {
        var h = -1, i = b.length, j = c.length;
        if (i !== j && !(e && j > i))return !1;
        for (; ++h < i;) {
            var k, l = b[h], m = c[h];
            if (k !== a) {
                if (k)continue;
                return !1
            }
            if (e) {
                if (!q(c, function (a) {
                            return l === a || d(l, a, e, f, g)
                        }))return !1
            } else if (l !== m && !d(l, m, e, f, g))return !1
        }
        return !0
    }

    function s(a, b, c, d, e, f) {
        var g = Tb(a), h = Tb(b), i = qb, j = qb;
        g || (i = Pb.call(a), i === pb ? i = xb : i !== xb && (g = p(a))), h || (j = Pb.call(b), j === pb && (j = xb));
        var k = i === xb && !Sb(a), n = j === xb && !Sb(b), o = i === j;
        if (o && !g && !k)return m(a, b, i);
        if (!d) {
            var q = k && Ob.call(a, "__wrapped__"), s = n && Ob.call(b, "__wrapped__");
            if (q || s)return c(q ? a.value() : a, s ? b.value() : b, d, e, f)
        }
        if (!o)return !1;
        e || (e = []), f || (f = []);
        for (var t = e.length; t--;)if (e[t] === a)return f[t] === b;
        e.push(a), f.push(b);
        var u = (g ? r : l)(a, b, c, d, e, f);
        return e.pop(), f.pop(), u
    }

    function t(a, b, c, d, e) {
        return a === b ? !0 : null == a || null == b || !aa(a) && !n(b) ? a !== a && b !== b : s(a, b, t, c, d, e)
    }

    function u(a, b) {
        for (var c = new Array(a), d = 0; a > d; d++)c[d] = b();
        return c
    }

    function v(a, b) {
        this.id = a, this.value = b
    }

    function w(a, b) {
        this.scheduler = a, this.disposable = b, this.isDisposed = !1
    }

    function x(a, b) {
        b.isDisposed || (b.isDisposed = !0, b.disposable.dispose())
    }

    function y(a) {
        this._s = a, this.isDisposed = !1
    }

    function z(a) {
        this._s = a
    }

    function A(a) {
        this._s = a, this._l = a.length, this._i = 0
    }

    function B(a) {
        this._a = a
    }

    function C(a) {
        this._a = a, this._l = G(a), this._i = 0
    }

    function D(a) {
        return "number" == typeof a && Oa.isFinite(a)
    }

    function E(b) {
        var c, d = b[jb];
        if (!d && "string" == typeof b)return c = new z(b), c[jb]();
        if (!d && b.length !== a)return c = new B(b), c[jb]();
        if (!d)throw new TypeError("Object is not iterable");
        return b[jb]()
    }

    function F(a) {
        var b = +a;
        return 0 === b ? b : isNaN(b) ? b : 0 > b ? -1 : 1
    }

    function G(a) {
        var b = +a.length;
        return isNaN(b) ? 0 : 0 !== b && D(b) ? (b = F(b) * Math.floor(Math.abs(b)), 0 >= b ? 0 : b > kd ? kd : b) : b
    }

    function H(a, b) {
        return oc(a) || (a = vc), new md(b, a)
    }

    function I(a, b) {
        this.observer = a, this.parent = b
    }

    function J(a, b) {
        return a.amb(b)
    }

    function K() {
        return !1
    }

    function L() {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        return b
    }

    function K() {
        return !1
    }

    function L() {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        return b
    }

    function K() {
        return !1
    }

    function M() {
        return []
    }

    function K() {
        return !1
    }

    function M() {
        return []
    }

    function L() {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        return b
    }

    function N(a) {
        return function (b) {
            return a.subscribe(b)
        }
    }

    function O(a) {
        return a.toArray()
    }

    function P(a) {
        return a.length > 0
    }

    function Q(a, b, c) {
        var d = nb(b, c, 3);
        return a.map(function (b, c) {
            var e = d(b, c, a);
            return Wa(e) && (e = cd(e)), (mb(e) || lb(e)) && (e = ld(e)), e
        }).concatAll()
    }

    function R(a, b, c) {
        for (var d = 0, e = a.length; e > d; d++)if (c(a[d], b))return d;
        return -1
    }

    function S(a) {
        this.comparer = a, this.set = []
    }

    function T(b, c) {
        return function (d) {
            for (var e = d, f = 0; c > f; f++) {
                var g = e[b[f]];
                if ("undefined" == typeof g)return a;
                e = g
            }
            return e
        }
    }

    function U(a) {
        if (0 === a.length)throw new db;
        return a[0]
    }

    function V(a, b, c, d) {
        var e = nb(b, c, 3);
        return new ug(function (b) {
            return a.subscribe(new df(b, a, e, d))
        }, a)
    }

    function W(a) {
        return a ? Rc.isObservable(a) ? a : Wa(a) ? Rc.fromPromise(a) : _(a) || $(a) ? nf.call(this, a) : Xa(a) ? Z.call(this, a) : mb(a) || lb(a) ? X.call(this, a) : aa(a) ? Y.call(this, a) : a : a
    }

    function X(a) {
        return Rc.from(a).concatMap(function (a) {
            return Rc.isObservable(a) || aa(a) ? W.call(null, a) : Pa.Observable.just(a)
        }).toArray()
    }

    function Y(b) {
        function c(b, c) {
            d[c] = a, f.push(b.map(function (a) {
                d[c] = a
            }))
        }

        for (var d = new b.constructor, e = Object.keys(b), f = [], g = 0, h = e.length; h > g; g++) {
            var i = e[g], j = W.call(this, b[i]);
            j && Rc.isObservable(j) ? c(j, i) : d[i] = b[i]
        }
        return Rc.forkJoin.apply(Rc, f).map(function () {
            return d
        })
    }

    function Z(a) {
        var b = this;
        return new ug(function (c) {
            a.call(b, function () {
                var a = arguments[0], b = arguments[1];
                if (a)return c.onError(a);
                if (arguments.length > 2) {
                    for (var d = [], e = 1, f = arguments.length; f > e; e++)d.push(arguments[e]);
                    b = d
                }
                c.onNext(b), c.onCompleted()
            })
        })
    }

    function $(a) {
        return Xa(a.next) && Xa(a["throw"])
    }

    function _(a) {
        var b = a.constructor;
        return b ? "GeneratorFunction" === b.name || "GeneratorFunction" === b.displayName ? !0 : $(b.prototype) : !1
    }

    function aa(a) {
        return Object == a.constructor
    }

    function ba(a, b, c, d) {
        var e = new zg;
        return d.push(ca(e, b, c)), a.apply(b, d), e.asObservable()
    }

    function ca(a, b, c) {
        return function () {
            for (var d = arguments.length, e = new Array(d), f = 0; d > f; f++)e[f] = arguments[f];
            if (Xa(c)) {
                if (e = Za(c).apply(b, e), e === Ya)return a.onError(e.e);
                a.onNext(e)
            } else e.length <= 1 ? a.onNext(e[0]) : a.onNext(e);
            a.onCompleted()
        }
    }

    function da(a, b, c, d) {
        var e = new zg;
        return d.push(ea(e, b, c)), a.apply(b, d), e.asObservable()
    }

    function ea(a, b, c) {
        return function () {
            var d = arguments[0];
            if (d)return a.onError(d);
            for (var e = arguments.length, f = [], g = 1; e > g; g++)f[g - 1] = arguments[g];
            if (Xa(c)) {
                var f = Za(c).apply(b, f);
                if (f === Ya)return a.onError(f.e);
                a.onNext(f)
            } else f.length <= 1 ? a.onNext(f[0]) : a.onNext(f);
            a.onCompleted()
        }
    }

    function fa(a) {
        return Oa.StaticNodeList ? a instanceof Oa.StaticNodeList || a instanceof Oa.NodeList : "[object NodeList]" === Object.prototype.toString.call(a)
    }

    function ga(a, b, c) {
        this._e = a, this._n = b, this._fn = c, this._e.addEventListener(this._n, this._fn, !1), this.isDisposed = !1
    }

    function ha(a, b, c) {
        var d = new $b, e = Object.prototype.toString.call(a);
        if (fa(a) || "[object HTMLCollection]" === e)for (var f = 0, g = a.length; g > f; f++)d.add(ha(a.item(f), b, c)); else a && d.add(new ga(a, b, c));
        return d
    }

    function ia(a, b, c) {
        return new ug(function (d) {
            function e(a, b) {
                if (j[b] = a, g[b] = !0, h || (h = g.every(Ra))) {
                    if (f)return d.onError(f);
                    var e = Za(c).apply(null, j);
                    if (e === Ya)return d.onError(e.e);
                    d.onNext(e)
                }
                i && j[1] && d.onCompleted()
            }

            var f, g = [!1, !1], h = !1, i = !1, j = new Array(2);
            return new ic(a.subscribe(function (a) {
                e(a, 0)
            }, function (a) {
                j[1] ? d.onError(a) : f = a
            }, function () {
                i = !0, j[1] && d.onCompleted()
            }), b.subscribe(function (a) {
                e(a, 1)
            }, function (a) {
                d.onError(a)
            }, function () {
                i = !0, e(!0, 1)
            }))
        }, a)
    }

    function O(a) {
        return a.toArray()
    }

    function ja(a, b) {
        return a.groupJoin(this, b, id, function (a, b) {
            return b
        })
    }

    function ka(a) {
        var b = this;
        return new ug(function (c) {
            var d = new yg, e = new $b, f = new kc(e);
            return c.onNext(Xb(d, f)), e.add(b.subscribe(function (a) {
                d.onNext(a)
            }, function (a) {
                d.onError(a), c.onError(a)
            }, function () {
                d.onCompleted(), c.onCompleted()
            })), Wa(a) && (a = cd(a)), e.add(a.subscribe(function (a) {
                d.onCompleted(), d = new yg, c.onNext(Xb(d, f))
            }, function (a) {
                d.onError(a), c.onError(a)
            }, function () {
                d.onCompleted(), c.onCompleted()
            })), f
        }, b)
    }

    function la(a) {
        var b = this;
        return new ug(function (c) {
            function d() {
                var b;
                try {
                    b = a()
                } catch (f) {
                    return void c.onError(f)
                }
                Wa(b) && (b = cd(b));
                var i = new gc;
                e.setDisposable(i), i.setDisposable(b.take(1).subscribe(Qa, function (a) {
                    h.onError(a), c.onError(a)
                }, function () {
                    h.onCompleted(), h = new yg, c.onNext(Xb(h, g)), d()
                }))
            }

            var e = new hc, f = new $b(e), g = new kc(f), h = new yg;
            return c.onNext(Xb(h, g)), f.add(b.subscribe(function (a) {
                h.onNext(a)
            }, function (a) {
                h.onError(a), c.onError(a)
            }, function () {
                h.onCompleted(), c.onCompleted()
            })), d(), g
        }, b)
    }

    function ma(a, b) {
        return new Ef(a, b)
    }

    function L() {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        return b
    }

    function na(a) {
        this.patterns = a
    }

    function oa(a, b) {
        this.expression = a, this.selector = b
    }

    function pa(a) {
        return function (b) {
            a.onError(b)
        }
    }

    function qa(a, b) {
        return function () {
            var c = Za(a.selector).apply(a, arguments);
            return c === Ya ? b.onError(c.e) : void b.onNext(c)
        }
    }

    function ra(a, b, c) {
        var d = a.get(b);
        if (!d) {
            var e = new Mf(b, c);
            return a.set(b, e), e
        }
        return d
    }

    function sa(a, b, c) {
        this.joinObserverArray = a, this.onNext = b, this.onCompleted = c, this.joinObservers = new Lf;
        for (var d = 0, e = this.joinObserverArray.length; e > d; d++) {
            var f = this.joinObserverArray[d];
            this.joinObservers.set(f, f)
        }
    }

    function ta(a, b) {
        return new Nf(a, b)
    }

    function ua(a, b, c) {
        return new ug(function (d) {
            var e = a, f = nc(b);
            return c.scheduleRecursiveFuture(0, e, function (a, b) {
                if (f > 0) {
                    var g = c.now();
                    e = new Date(e.getTime() + f), e.getTime() <= g && (e = new Date(g + f))
                }
                d.onNext(a), b(a + 1, new Date(e))
            })
        })
    }

    function va(a, b, c) {
        return a === b ? new ug(function (a) {
            return c.schedulePeriodic(0, b, function (b) {
                return a.onNext(b), b + 1
            })
        }) : fd(function () {
            return ua(new Date(c.now() + a), b, c)
        })
    }

    function wa(a, b, c) {
        return new ug(function (d) {
            var e, f = !1, g = new hc, h = null, i = [], j = !1;
            return e = a.materialize().timestamp(c).subscribe(function (a) {
                var e, k;
                "E" === a.value.kind ? (i = [], i.push(a), h = a.value.error, k = !j) : (i.push({
                    value: a.value,
                    timestamp: a.timestamp + b
                }), k = !f, f = !0), k && (null !== h ? d.onError(h) : (e = new gc, g.setDisposable(e), e.setDisposable(c.scheduleRecursiveFuture(null, b, function (a, b) {
                    var e, g, k, l;
                    if (null === h) {
                        j = !0;
                        do k = null, i.length > 0 && i[0].timestamp - c.now() <= 0 && (k = i.shift().value), null !== k && k.accept(d); while (null !== k);
                        l = !1, g = 0, i.length > 0 ? (l = !0, g = Math.max(0, i[0].timestamp - c.now())) : f = !1, e = h, j = !1, null !== e ? d.onError(e) : l && b(null, g)
                    }
                }))))
            }), new ic(e, g)
        }, a)
    }

    function xa(a, b, c) {
        return fd(function () {
            return wa(a, b - c.now(), c)
        })
    }

    function ya(a, b, c) {
        var d, e;
        return Xa(b) ? e = b : (d = b, e = c), new ug(function (b) {
            function c() {
                i.setDisposable(a.subscribe(function (a) {
                    var c = Za(e)(a);
                    if (c === Ya)return b.onError(c.e);
                    var d = new gc;
                    g.add(d), d.setDisposable(c.subscribe(function () {
                        b.onNext(a), g.remove(d), f()
                    }, function (a) {
                        b.onError(a)
                    }, function () {
                        b.onNext(a), g.remove(d), f()
                    }))
                }, function (a) {
                    b.onError(a)
                }, function () {
                    h = !0, i.dispose(), f()
                }))
            }

            function f() {
                h && 0 === g.length && b.onCompleted()
            }

            var g = new $b, h = !1, i = new hc;
            return d ? i.setDisposable(d.subscribe(c, function (a) {
                b.onError(a)
            }, c)) : c(), new ic(i, g)
        }, this)
    }

    function za(a, b) {
        return new ug(function (c) {
            var d, e = !1, f = new hc, g = 0, h = a.subscribe(function (a) {
                var h = Za(b)(a);
                if (h === Ya)return c.onError(h.e);
                Wa(h) && (h = cd(h)), e = !0, d = a, g++;
                var i = g, j = new gc;
                f.setDisposable(j), j.setDisposable(h.subscribe(function () {
                    e && g === i && c.onNext(d), e = !1, j.dispose()
                }, function (a) {
                    c.onError(a)
                }, function () {
                    e && g === i && c.onNext(d), e = !1, j.dispose()
                }))
            }, function (a) {
                f.dispose(), c.onError(a), e = !1, g++
            }, function () {
                f.dispose(), e && c.onNext(d), c.onCompleted(), e = !1, g++
            });
            return new ic(h, f)
        }, a)
    }

    function O(a) {
        return a.toArray()
    }

    function O(a) {
        return a.toArray()
    }

    function Aa(a, b, c, d) {
        return Xa(b) && (d = c, c = b, b = rd()), Rc.isObservable(d) || (d = xd(new Yf)), new ug(function (e) {
            function f(a) {
                function b() {
                    return l = c === k
                }

                var c = k, f = new gc;
                i.setDisposable(f), f.setDisposable(a.subscribe(function () {
                    b() && h.setDisposable(d.subscribe(e)), f.dispose()
                }, function (a) {
                    b() && e.onError(a)
                }, function () {
                    b() && h.setDisposable(d.subscribe(e))
                }))
            }

            function g() {
                var a = !l;
                return a && k++, a
            }

            var h = new hc, i = new hc, j = new gc;
            h.setDisposable(j);
            var k = 0, l = !1;
            return f(b), j.setDisposable(a.subscribe(function (a) {
                if (g()) {
                    e.onNext(a);
                    var b = Za(c)(a);
                    if (b === Ya)return e.onError(b.e);
                    f(Wa(b) ? cd(b) : b)
                }
            }, function (a) {
                g() && e.onError(a)
            }, function () {
                g() && e.onCompleted()
            })), new ic(h, i)
        }, a)
    }

    function Ba(a, b, c, d) {
        return oc(c) && (d = c, c = xd(new Yf)), c instanceof Error && (c = xd(c)), oc(d) || (d = Ac), Rc.isObservable(c) || (c = xd(new Yf)), new ug(function (e) {
            function f() {
                var a = g;
                k.setDisposable(d.scheduleFuture(null, b, function () {
                    j = g === a, j && (Wa(c) && (c = cd(c)), i.setDisposable(c.subscribe(e)))
                }))
            }

            var g = 0, h = new gc, i = new hc, j = !1, k = new hc;
            return i.setDisposable(h), f(), h.setDisposable(a.subscribe(function (a) {
                j || (g++, e.onNext(a), f())
            }, function (a) {
                j || (g++, e.onError(a))
            }, function () {
                j || (g++, e.onCompleted())
            })), new ic(i, k)
        }, a)
    }

    function Ca(a) {
        return {
            "@@transducer/init": function () {
                return a
            }, "@@transducer/step": function (a, b) {
                return a.onNext(b)
            }, "@@transducer/result": function (a) {
                return a.onCompleted()
            }
        }
    }

    function Da(a) {
        this.predicate = a
    }

    function Ea(a) {
        this.predicate = a
    }

    function Fa(a, b) {
        var c = this;
        this.scheduler = a, this.messages = b, this.subscriptions = [], this.observers = [];
        for (var d = 0, e = this.messages.length; e > d; d++) {
            var f = this.messages[d], g = f.value;
            !function (b) {
                a.scheduleAbsolute(null, f.time, function () {
                    for (var a = c.observers.slice(0), d = 0, e = a.length; e > d; d++)b.accept(a[d]);
                    return cc
                })
            }(g)
        }
    }

    var Ga = {
        "function": !0,
        object: !0
    }, Ha = Ga[typeof exports] && exports && !exports.nodeType ? exports : null, Ia = Ga[typeof module] && module && !module.nodeType ? module : null, Ja = b(Ha && Ia && "object" == typeof global && global), Ka = b(Ga[typeof self] && self), La = b(Ga[typeof window] && window), Ma = Ia && Ia.exports === Ha ? Ha : null, Na = b(Ga[typeof this] && this), Oa = Ja || La !== (Na && Na.window) && La || Ka || Na || Function("return this")(), Pa = {
        internals: {},
        config: {Promise: Oa.Promise},
        helpers: {}
    }, Qa = Pa.helpers.noop = function () {
    }, Ra = Pa.helpers.identity = function (a) {
        return a
    }, Sa = Pa.helpers.defaultNow = Date.now, Ta = Pa.helpers.defaultComparer = function (a, b) {
        return Ub(a, b)
    }, Ua = Pa.helpers.defaultSubComparer = function (a, b) {
        return a > b ? 1 : b > a ? -1 : 0
    }, Va = (Pa.helpers.defaultKeySerializer = function (a) {
        return a.toString()
    }, Pa.helpers.defaultError = function (a) {
        throw a
    }), Wa = Pa.helpers.isPromise = function (a) {
        return !!a && "function" != typeof a.subscribe && "function" == typeof a.then
    }, Xa = Pa.helpers.isFunction = function () {
        var a = function (a) {
            return "function" == typeof a || !1
        };
        return a(/x/) && (a = function (a) {
            return "function" == typeof a && "[object Function]" == toString.call(a)
        }), a
    }(), Ya = {e: {}}, Za = Pa.internals.tryCatch = function (a) {
        if (!Xa(a))throw new TypeError("fn must be a function");
        return d(a)
    };
    Pa.config.longStackSupport = !1;
    var $a = !1, _a = Za(function () {
        throw new Error
    })();
    $a = !!_a.e && !!_a.e.stack;
    var ab, bb = j(), cb = "From previous event:", db = Pa.EmptyError = function () {
        this.message = "Sequence contains no elements.", Error.call(this)
    };
    db.prototype = Object.create(Error.prototype), db.prototype.name = "EmptyError";
    var eb = Pa.ObjectDisposedError = function () {
        this.message = "Object has been disposed", Error.call(this)
    };
    eb.prototype = Object.create(Error.prototype), eb.prototype.name = "ObjectDisposedError";
    var fb = Pa.ArgumentOutOfRangeError = function () {
        this.message = "Argument out of range", Error.call(this)
    };
    fb.prototype = Object.create(Error.prototype), fb.prototype.name = "ArgumentOutOfRangeError";
    var gb = Pa.NotSupportedError = function (a) {
        this.message = a || "This operation is not supported", Error.call(this)
    };
    gb.prototype = Object.create(Error.prototype), gb.prototype.name = "NotSupportedError";
    var hb = Pa.NotImplementedError = function (a) {
        this.message = a || "This operation is not implemented", Error.call(this)
    };
    hb.prototype = Object.create(Error.prototype), hb.prototype.name = "NotImplementedError";
    var ib = Pa.helpers.notImplemented = function () {
        throw new hb
    }, jb = (Pa.helpers.notSupported = function () {
        throw new gb
    }, "function" == typeof Symbol && Symbol.iterator || "_es6shim_iterator_");
    Oa.Set && "function" == typeof(new Oa.Set)["@@iterator"] && (jb = "@@iterator");
    var kb = Pa.doneEnumerator = {done: !0, value: a}, lb = Pa.helpers.isIterable = function (b) {
        return b && b[jb] !== a
    }, mb = Pa.helpers.isArrayLike = function (b) {
        return b && b.length !== a
    };
    Pa.helpers.iterator = jb;
    var nb = Pa.internals.bindCallback = function (a, b, c) {
        if ("undefined" == typeof b)return a;
        switch (c) {
            case 0:
                return function () {
                    return a.call(b)
                };
            case 1:
                return function (c) {
                    return a.call(b, c)
                };
            case 2:
                return function (c, d) {
                    return a.call(b, c, d)
                };
            case 3:
                return function (c, d, e) {
                    return a.call(b, c, d, e)
                }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, ob = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], pb = (ob.length, "[object Arguments]"), qb = "[object Array]", rb = "[object Boolean]", sb = "[object Date]", tb = "[object Error]", ub = "[object Function]", vb = "[object Map]", wb = "[object Number]", xb = "[object Object]", yb = "[object RegExp]", zb = "[object Set]", Ab = "[object String]", Bb = "[object WeakMap]", Cb = "[object ArrayBuffer]", Db = "[object Float32Array]", Eb = "[object Float64Array]", Fb = "[object Int8Array]", Gb = "[object Int16Array]", Hb = "[object Int32Array]", Ib = "[object Uint8Array]", Jb = "[object Uint8ClampedArray]", Kb = "[object Uint16Array]", Lb = "[object Uint32Array]", Mb = {};
    Mb[Db] = Mb[Eb] = Mb[Fb] = Mb[Gb] = Mb[Hb] = Mb[Ib] = Mb[Jb] = Mb[Kb] = Mb[Lb] = !0, Mb[pb] = Mb[qb] = Mb[Cb] = Mb[rb] = Mb[sb] = Mb[tb] = Mb[ub] = Mb[vb] = Mb[wb] = Mb[xb] = Mb[yb] = Mb[zb] = Mb[Ab] = Mb[Bb] = !1;
    var Nb = Object.prototype, Ob = Nb.hasOwnProperty, Pb = Nb.toString, Qb = Math.pow(2, 53) - 1, Rb = Object.keys || function () {
                var a = Object.prototype.hasOwnProperty, b = !{toString: null}.propertyIsEnumerable("toString"), c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], d = c.length;
                return function (e) {
                    if ("object" != typeof e && ("function" != typeof e || null === e))throw new TypeError("Object.keys called on non-object");
                    var f, g, h = [];
                    for (f in e)a.call(e, f) && h.push(f);
                    if (b)for (g = 0; d > g; g++)a.call(e, c[g]) && h.push(c[g]);
                    return h
                }
            }(), aa = Pa.internals.isObject = function (a) {
        var b = typeof a;
        return !!a && ("object" === b || "function" === b)
    }, Sb = function () {
        try {
            Object({toString: 0} + "")
        } catch (a) {
            return function () {
                return !1
            }
        }
        return function (a) {
            return "function" != typeof a.toString && "string" == typeof(a + "")
        }
    }(), Tb = Array.isArray || function (a) {
                return n(a) && o(a.length) && Pb.call(a) === qb
            }, Ub = Pa.internals.isEqual = function (a, b) {
        return t(a, b)
    }, Vb = ({}.hasOwnProperty, Array.prototype.slice, Pa.internals.inherits = function (a, b) {
        function c() {
            this.constructor = a
        }

        c.prototype = b.prototype, a.prototype = new c
    }), Wb = Pa.internals.addProperties = function (a) {
        for (var b = [], c = 1, d = arguments.length; d > c; c++)b.push(arguments[c]);
        for (var e = 0, f = b.length; f > e; e++) {
            var g = b[e];
            for (var h in g)a[h] = g[h]
        }
    }, Xb = Pa.internals.addRef = function (a, b) {
        return new ug(function (c) {
            return new ic(b.getDisposable(), a.subscribe(c))
        })
    };
    v.prototype.compareTo = function (a) {
        var b = this.value.compareTo(a.value);
        return 0 === b && (b = this.id - a.id), b
    };
    var Yb = Pa.internals.PriorityQueue = function (a) {
        this.items = new Array(a), this.length = 0
    }, Zb = Yb.prototype;
    Zb.isHigherPriority = function (a, b) {
        return this.items[a].compareTo(this.items[b]) < 0
    }, Zb.percolate = function (a) {
        if (!(a >= this.length || 0 > a)) {
            var b = a - 1 >> 1;
            if (!(0 > b || b === a) && this.isHigherPriority(a, b)) {
                var c = this.items[a];
                this.items[a] = this.items[b], this.items[b] = c, this.percolate(b)
            }
        }
    }, Zb.heapify = function (a) {
        if (+a || (a = 0), !(a >= this.length || 0 > a)) {
            var b = 2 * a + 1, c = 2 * a + 2, d = a;
            if (b < this.length && this.isHigherPriority(b, d) && (d = b), c < this.length && this.isHigherPriority(c, d) && (d = c), d !== a) {
                var e = this.items[a];
                this.items[a] = this.items[d], this.items[d] = e, this.heapify(d)
            }
        }
    }, Zb.peek = function () {
        return this.items[0].value
    }, Zb.removeAt = function (b) {
        this.items[b] = this.items[--this.length], this.items[this.length] = a, this.heapify()
    }, Zb.dequeue = function () {
        var a = this.peek();
        return this.removeAt(0), a
    }, Zb.enqueue = function (a) {
        var b = this.length++;
        this.items[b] = new v(Yb.count++, a), this.percolate(b)
    }, Zb.remove = function (a) {
        for (var b = 0; b < this.length; b++)if (this.items[b].value === a)return this.removeAt(b), !0;
        return !1
    }, Yb.count = 0;
    var $b = Pa.CompositeDisposable = function () {
        var a, b, c = [];
        if (Array.isArray(arguments[0]))c = arguments[0]; else for (b = arguments.length, c = new Array(b), a = 0; b > a; a++)c[a] = arguments[a];
        this.disposables = c, this.isDisposed = !1, this.length = c.length
    }, _b = $b.prototype;
    _b.add = function (a) {
        this.isDisposed ? a.dispose() : (this.disposables.push(a), this.length++)
    }, _b.remove = function (a) {
        var b = !1;
        if (!this.isDisposed) {
            var c = this.disposables.indexOf(a);
            -1 !== c && (b = !0, this.disposables.splice(c, 1), this.length--, a.dispose())
        }
        return b
    }, _b.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            for (var a = this.disposables.length, b = new Array(a), c = 0; a > c; c++)b[c] = this.disposables[c];
            for (this.disposables = [], this.length = 0, c = 0; a > c; c++)b[c].dispose()
        }
    };
    var ac = Pa.Disposable = function (a) {
        this.isDisposed = !1, this.action = a || Qa
    };
    ac.prototype.dispose = function () {
        this.isDisposed || (this.action(), this.isDisposed = !0)
    };
    var bc = ac.create = function (a) {
        return new ac(a)
    }, cc = ac.empty = {dispose: Qa}, dc = ac.isDisposable = function (a) {
        return a && Xa(a.dispose)
    }, ec = ac.checkDisposed = function (a) {
        if (a.isDisposed)throw new eb
    }, fc = ac._fixup = function (a) {
        return dc(a) ? a : cc
    }, gc = Pa.SingleAssignmentDisposable = function () {
        this.isDisposed = !1, this.current = null
    };
    gc.prototype.getDisposable = function () {
        return this.current
    }, gc.prototype.setDisposable = function (a) {
        if (this.current)throw new Error("Disposable has already been assigned");
        var b = this.isDisposed;
        !b && (this.current = a), b && a && a.dispose()
    }, gc.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            var a = this.current;
            this.current = null, a && a.dispose()
        }
    };
    var hc = Pa.SerialDisposable = function () {
        this.isDisposed = !1, this.current = null
    };
    hc.prototype.getDisposable = function () {
        return this.current
    }, hc.prototype.setDisposable = function (a) {
        var b = this.isDisposed;
        if (!b) {
            var c = this.current;
            this.current = a
        }
        c && c.dispose(), b && a && a.dispose()
    }, hc.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            var a = this.current;
            this.current = null
        }
        a && a.dispose()
    };
    var ic = Pa.BinaryDisposable = function (a, b) {
        this._first = a, this._second = b, this.isDisposed = !1
    };
    ic.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            var a = this._first;
            this._first = null, a && a.dispose();
            var b = this._second;
            this._second = null, b && b.dispose()
        }
    };
    var jc = Pa.NAryDisposable = function (a) {
        this._disposables = a, this.isDisposed = !1
    };
    jc.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            for (var a = 0, b = this._disposables.length; b > a; a++)this._disposables[a].dispose();
            this._disposables.length = 0
        }
    };
    var kc = Pa.RefCountDisposable = function () {
        function a(a) {
            this.disposable = a, this.disposable.count++, this.isInnerDisposed = !1
        }

        function b(a) {
            this.underlyingDisposable = a, this.isDisposed = !1, this.isPrimaryDisposed = !1, this.count = 0
        }

        return a.prototype.dispose = function () {
            this.disposable.isDisposed || this.isInnerDisposed || (this.isInnerDisposed = !0, this.disposable.count--, 0 === this.disposable.count && this.disposable.isPrimaryDisposed && (this.disposable.isDisposed = !0, this.disposable.underlyingDisposable.dispose()))
        }, b.prototype.dispose = function () {
            this.isDisposed || this.isPrimaryDisposed || (this.isPrimaryDisposed = !0, 0 === this.count && (this.isDisposed = !0, this.underlyingDisposable.dispose()))
        }, b.prototype.getDisposable = function () {
            return this.isDisposed ? cc : new a(this)
        }, b
    }();
    w.prototype.dispose = function () {
        this.scheduler.schedule(this, x)
    };
    var lc = Pa.internals.ScheduledItem = function (a, b, c, d, e) {
        this.scheduler = a, this.state = b, this.action = c, this.dueTime = d, this.comparer = e || Ua, this.disposable = new gc
    };
    lc.prototype.invoke = function () {
        this.disposable.setDisposable(this.invokeCore())
    }, lc.prototype.compareTo = function (a) {
        return this.comparer(this.dueTime, a.dueTime)
    }, lc.prototype.isCancelled = function () {
        return this.disposable.isDisposed
    }, lc.prototype.invokeCore = function () {
        return fc(this.action(this.scheduler, this.state))
    };
    var mc = Pa.Scheduler = function () {
        function a() {
        }

        a.isScheduler = function (b) {
            return b instanceof a
        };
        var b = a.prototype;
        return b.schedule = function (a, b) {
            throw new hb
        }, b.scheduleFuture = function (b, c, d) {
            var e = c;
            return e instanceof Date && (e -= this.now()), e = a.normalize(e), 0 === e ? this.schedule(b, d) : this._scheduleFuture(b, e, d)
        }, b._scheduleFuture = function (a, b, c) {
            throw new hb
        }, a.now = Sa, a.prototype.now = Sa, a.normalize = function (a) {
            return 0 > a && (a = 0), a
        }, a
    }(), nc = mc.normalize, oc = mc.isScheduler;
    !function (a) {
        function b(a, b) {
            function c(b) {
                function d(a, b) {
                    return g ? f.remove(i) : h = !0, e(b, c), cc
                }

                var g = !1, h = !1, i = a.schedule(b, d);
                h || (f.add(i), g = !0)
            }

            var d = b[0], e = b[1], f = new $b;
            return e(d, c), f
        }

        function c(a, b) {
            function c(b, d) {
                function g(a, b) {
                    return h ? f.remove(j) : i = !0, e(b, c), cc
                }

                var h = !1, i = !1, j = a.scheduleFuture(b, d, g);
                i || (f.add(j), h = !0)
            }

            var d = b[0], e = b[1], f = new $b;
            return e(d, c), f
        }

        a.scheduleRecursive = function (a, c) {
            return this.schedule([a, c], b)
        }, a.scheduleRecursiveFuture = function (a, b, d) {
            return this.scheduleFuture([a, d], b, c)
        }
    }(mc.prototype), function (a) {
        a.schedulePeriodic = function (a, b, c) {
            if ("undefined" == typeof Oa.setInterval)throw new gb;
            b = nc(b);
            var d = a, e = Oa.setInterval(function () {
                d = c(d)
            }, b);
            return bc(function () {
                Oa.clearInterval(e)
            })
        }
    }(mc.prototype), function (a) {
        a.catchError = a["catch"] = function (a) {
            return new Bc(this, a)
        }
    }(mc.prototype);
    var pc, qc, rc = Pa.internals.SchedulePeriodicRecursive = function () {
        function a(a) {
            return function (b, c) {
                c(0, a._period);
                var d = Za(a._action)(a._state);
                d === Ya && (a._cancel.dispose(), e(d.e)), a._state = d
            }
        }

        function b(a, b, c, d) {
            this._scheduler = a, this._state = b, this._period = c, this._action = d
        }

        return b.prototype.start = function () {
            var b = new gc;
            return this._cancel = b, b.setDisposable(this._scheduler.scheduleRecursiveFuture(0, this._period, a(this))), b
        }, b
    }(), sc = function (a) {
        function b() {
            a.call(this)
        }

        return Vb(b, a), b.prototype.schedule = function (a, b) {
            return fc(b(this, a))
        }, b
    }(mc), tc = mc.immediate = new sc, uc = function (a) {
        function b() {
            for (; d.length > 0;) {
                var a = d.dequeue();
                !a.isCancelled() && a.invoke()
            }
        }

        function c() {
            a.call(this)
        }

        var d;
        return Vb(c, a), c.prototype.schedule = function (a, c) {
            var f = new lc(this, a, c, this.now());
            if (d)d.enqueue(f); else {
                d = new Yb(4), d.enqueue(f);
                var g = Za(b)();
                d = null, g === Ya && e(g.e)
            }
            return f.disposable
        }, c.prototype.scheduleRequired = function () {
            return !d
        }, c
    }(mc), vc = mc.currentThread = new uc, wc = function () {
        var a, b = Qa;
        if (Oa.setTimeout)a = Oa.setTimeout, b = Oa.clearTimeout; else {
            if (!Oa.WScript)throw new gb;
            a = function (a, b) {
                Oa.WScript.Sleep(b), a()
            }
        }
        return {setTimeout: a, clearTimeout: b}
    }(), xc = wc.setTimeout, yc = wc.clearTimeout;
    !function () {
        function a(b) {
            if (f)xc(function () {
                a(b)
            }, 0); else {
                var c = d[b];
                if (c) {
                    f = !0;
                    var g = Za(c)();
                    qc(b), f = !1, g === Ya && e(g.e)
                }
            }
        }

        function b() {
            if (!Oa.postMessage || Oa.importScripts)return !1;
            var a = !1, b = Oa.onmessage;
            return Oa.onmessage = function () {
                a = !0
            }, Oa.postMessage("", "*"), Oa.onmessage = b, a
        }

        var c = 1, d = {}, f = !1;
        qc = function (a) {
            delete d[a]
        };
        var g = new RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), h = "function" == typeof(h = Ja && Ma && Ja.setImmediate) && !g.test(h) && h;
        if (Xa(h))pc = function (b) {
            var e = c++;
            return d[e] = b, h(function () {
                a(e)
            }), e
        }; else if ("undefined" != typeof process && "[object process]" === {}.toString.call(process))pc = function (b) {
            var e = c++;
            return d[e] = b, process.nextTick(function () {
                a(e)
            }), e
        }; else if (b()) {
            var i = "ms.rx.schedule" + Math.random(), j = function (b) {
                "string" == typeof b.data && b.data.substring(0, i.length) === i && a(b.data.substring(i.length))
            };
            Oa.addEventListener("message", j, !1), pc = function (a) {
                var b = c++;
                return d[b] = a, Oa.postMessage(i + currentId, "*"), b
            }
        } else if (Oa.MessageChannel) {
            var k = new Oa.MessageChannel;
            k.port1.onmessage = function (b) {
                a(b.data)
            }, pc = function (a) {
                var b = c++;
                return d[b] = a, k.port2.postMessage(b), b
            }
        } else pc = "document" in Oa && "onreadystatechange" in Oa.document.createElement("script") ? function (b) {
            var e = Oa.document.createElement("script"), f = c++;
            return d[f] = b, e.onreadystatechange = function () {
                a(f), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null
            }, Oa.document.documentElement.appendChild(e), f
        } : function (b) {
            var e = c++;
            return d[e] = b, xc(function () {
                a(e)
            }, 0), e
        }
    }();
    var zc = function (a) {
        function b() {
            a.call(this)
        }

        function c(a, b, c, d) {
            return function () {
                a.setDisposable(ac._fixup(b(c, d)))
            }
        }

        function d(a) {
            this._id = a, this.isDisposed = !1
        }

        function e(a) {
            this._id = a, this.isDisposed = !1
        }

        return Vb(b, a), d.prototype.dispose = function () {
            this.isDisposed || (this.isDisposed = !0, qc(this._id))
        }, e.prototype.dispose = function () {
            this.isDisposed || (this.isDisposed = !0, yc(this._id))
        }, b.prototype.schedule = function (a, b) {
            var e = new gc, f = pc(c(e, b, this, a));
            return new ic(e, new d(f))
        }, b.prototype._scheduleFuture = function (a, b, d) {
            if (0 === b)return this.schedule(a, d);
            var f = new gc, g = xc(c(f, d, this, a), b);
            return new ic(f, new e(g))
        }, b
    }(mc), Ac = mc["default"] = mc.async = new zc, Bc = function (a) {
        function b(b, c) {
            this._scheduler = b, this._handler = c, this._recursiveOriginal = null, this._recursiveWrapper = null, a.call(this)
        }

        return Vb(b, a), b.prototype.schedule = function (a, b) {
            return this._scheduler.schedule(a, this._wrap(b))
        }, b.prototype._scheduleFuture = function (a, b, c) {
            return this._scheduler.schedule(a, b, this._wrap(c))
        }, b.prototype.now = function () {
            return this._scheduler.now()
        }, b.prototype._clone = function (a) {
            return new b(a, this._handler)
        }, b.prototype._wrap = function (a) {
            var b = this;
            return function (c, d) {
                var f = Za(a)(b._getRecursiveWrapper(c), d);
                return f === Ya ? (b._handler(f.e) || e(f.e), cc) : fc(f)
            }
        }, b.prototype._getRecursiveWrapper = function (a) {
            if (this._recursiveOriginal !== a) {
                this._recursiveOriginal = a;
                var b = this._clone(a);
                b._recursiveOriginal = a, b._recursiveWrapper = b, this._recursiveWrapper = b
            }
            return this._recursiveWrapper
        }, b.prototype.schedulePeriodic = function (a, b, c) {
            var d = this, f = !1, g = new gc;
            return g.setDisposable(this._scheduler.schedulePeriodic(a, b, function (a) {
                if (f)return null;
                var b = Za(c)(a);
                return b === Ya ? (f = !0, d._handler(b.e) || e(b.e), g.dispose(), null) : b
            })), g
        }, b
    }(mc), Cc = Pa.Notification = function () {
        function a() {
        }

        return a.prototype._accept = function (a, b, c) {
            throw new hb
        }, a.prototype._acceptObserver = function (a, b, c) {
            throw new hb
        }, a.prototype.accept = function (a, b, c) {
            return a && "object" == typeof a ? this._acceptObserver(a) : this._accept(a, b, c)
        }, a.prototype.toObservable = function (a) {
            var b = this;
            return oc(a) || (a = tc), new ug(function (c) {
                return a.schedule(b, function (a, b) {
                    b._acceptObserver(c), "N" === b.kind && c.onCompleted()
                })
            })
        }, a
    }(), Dc = function (a) {
        function b(a) {
            this.value = a, this.kind = "N"
        }

        return Vb(b, a), b.prototype._accept = function (a) {
            return a(this.value)
        }, b.prototype._acceptObserver = function (a) {
            return a.onNext(this.value)
        }, b.prototype.toString = function () {
            return "OnNext(" + this.value + ")"
        }, b
    }(Cc), Ec = function (a) {
        function b(a) {
            this.error = a, this.kind = "E"
        }

        return Vb(b, a), b.prototype._accept = function (a, b) {
            return b(this.error)
        }, b.prototype._acceptObserver = function (a) {
            return a.onError(this.error)
        }, b.prototype.toString = function () {
            return "OnError(" + this.error + ")"
        }, b
    }(Cc), Fc = function (a) {
        function b() {
            this.kind = "C"
        }

        return Vb(b, a), b.prototype._accept = function (a, b, c) {
            return c()
        }, b.prototype._acceptObserver = function (a) {
            return a.onCompleted()
        }, b.prototype.toString = function () {
            return "OnCompleted()"
        }, b
    }(Cc), Gc = Cc.createOnNext = function (a) {
        return new Dc(a)
    }, Hc = Cc.createOnError = function (a) {
        return new Ec(a)
    }, Ic = Cc.createOnCompleted = function () {
        return new Fc
    }, Jc = Pa.Observer = function () {
    };
    Jc.prototype.toNotifier = function () {
        var a = this;
        return function (b) {
            return b.accept(a)
        }
    }, Jc.prototype.asObserver = function () {
        var a = this;
        return new Nc(function (b) {
            a.onNext(b)
        }, function (b) {
            a.onError(b)
        }, function () {
            a.onCompleted()
        })
    }, Jc.prototype.checked = function () {
        return new Oc(this)
    };
    var Kc = Jc.create = function (a, b, c) {
        return a || (a = Qa), b || (b = Va), c || (c = Qa), new Nc(a, b, c)
    };
    Jc.fromNotifier = function (a, b) {
        var c = nb(a, b, 1);
        return new Nc(function (a) {
            return c(Gc(a))
        }, function (a) {
            return c(Hc(a))
        }, function () {
            return c(Ic())
        })
    }, Jc.prototype.notifyOn = function (a) {
        return new Qc(a, this)
    }, Jc.prototype.makeSafe = function (a) {
        return new AnonymousSafeObserver(this._onNext, this._onError, this._onCompleted, a)
    };
    var Lc, Mc = Pa.internals.AbstractObserver = function (a) {
        function b() {
            this.isStopped = !1
        }

        return Vb(b, a), b.prototype.next = ib, b.prototype.error = ib, b.prototype.completed = ib, b.prototype.onNext = function (a) {
            !this.isStopped && this.next(a)
        }, b.prototype.onError = function (a) {
            this.isStopped || (this.isStopped = !0, this.error(a))
        }, b.prototype.onCompleted = function () {
            this.isStopped || (this.isStopped = !0, this.completed())
        }, b.prototype.dispose = function () {
            this.isStopped = !0
        }, b.prototype.fail = function (a) {
            return this.isStopped ? !1 : (this.isStopped = !0, this.error(a),
                    !0)
        }, b
    }(Jc), Nc = Pa.AnonymousObserver = function (a) {
        function b(b, c, d) {
            a.call(this), this._onNext = b, this._onError = c, this._onCompleted = d
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._onNext(a)
        }, b.prototype.error = function (a) {
            this._onError(a)
        }, b.prototype.completed = function () {
            this._onCompleted()
        }, b
    }(Mc), Oc = function (a) {
        function b(b) {
            a.call(this), this._observer = b, this._state = 0
        }

        Vb(b, a);
        var c = b.prototype;
        return c.onNext = function (a) {
            this.checkAccess();
            var b = Za(this._observer.onNext).call(this._observer, a);
            this._state = 0, b === Ya && e(b.e)
        }, c.onError = function (a) {
            this.checkAccess();
            var b = Za(this._observer.onError).call(this._observer, a);
            this._state = 2, b === Ya && e(b.e)
        }, c.onCompleted = function () {
            this.checkAccess();
            var a = Za(this._observer.onCompleted).call(this._observer);
            this._state = 2, a === Ya && e(a.e)
        }, c.checkAccess = function () {
            if (1 === this._state)throw new Error("Re-entrancy detected");
            if (2 === this._state)throw new Error("Observer completed");
            0 === this._state && (this._state = 1)
        }, b
    }(Jc), Pc = Pa.internals.ScheduledObserver = function (a) {
        function b(b, c) {
            a.call(this), this.scheduler = b, this.observer = c, this.isAcquired = !1, this.hasFaulted = !1, this.queue = [], this.disposable = new hc
        }

        function c(a, b) {
            return function () {
                a.onNext(b)
            }
        }

        function d(a, b) {
            return function () {
                a.onError(b)
            }
        }

        function f(a) {
            return function () {
                a.onCompleted()
            }
        }

        function g(a, b) {
            var c;
            if (!(a.queue.length > 0))return void(a.isAcquired = !1);
            c = a.queue.shift();
            var d = Za(c)();
            return d === Ya ? (a.queue = [], a.hasFaulted = !0, e(d.e)) : void b(a)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this.queue.push(c(this.observer, a))
        }, b.prototype.error = function (a) {
            this.queue.push(d(this.observer, a))
        }, b.prototype.completed = function () {
            this.queue.push(f(this.observer))
        }, b.prototype.ensureActive = function () {
            var a = !1;
            !this.hasFaulted && this.queue.length > 0 && (a = !this.isAcquired, this.isAcquired = !0), a && this.disposable.setDisposable(this.scheduler.scheduleRecursive(this, g))
        }, b.prototype.dispose = function () {
            a.prototype.dispose.call(this), this.disposable.dispose()
        }, b
    }(Mc), Qc = function (a) {
        function b(b, c, d) {
            a.call(this, b, c), this._cancel = d
        }

        return Vb(b, a), b.prototype.next = function (b) {
            a.prototype.next.call(this, b), this.ensureActive()
        }, b.prototype.error = function (b) {
            a.prototype.error.call(this, b), this.ensureActive()
        }, b.prototype.completed = function () {
            a.prototype.completed.call(this), this.ensureActive()
        }, b.prototype.dispose = function () {
            a.prototype.dispose.call(this), this._cancel && this._cancel.dispose(), this._cancel = null
        }, b
    }(Pc), Rc = Pa.Observable = function () {
        function a(a, b) {
            return function (c) {
                var d = c.onError;
                return c.onError = function (b) {
                    f(b, a), d.call(c, b)
                }, b.call(a, c)
            }
        }

        function b() {
            if (Pa.config.longStackSupport && $a) {
                var b = this._subscribe, c = Za(e)(new Error).e;
                this.stack = c.stack.substring(c.stack.indexOf("\n") + 1), this._subscribe = a(this, b)
            }
        }

        return Lc = b.prototype, b.isObservable = function (a) {
            return a && Xa(a.subscribe)
        }, Lc.subscribe = Lc.forEach = function (a, b, c) {
            return this._subscribe("object" == typeof a ? a : Kc(a, b, c))
        }, Lc.subscribeOnNext = function (a, b) {
            return this._subscribe(Kc("undefined" != typeof b ? function (c) {
                a.call(b, c)
            } : a))
        }, Lc.subscribeOnError = function (a, b) {
            return this._subscribe(Kc(null, "undefined" != typeof b ? function (c) {
                a.call(b, c)
            } : a))
        }, Lc.subscribeOnCompleted = function (a, b) {
            return this._subscribe(Kc(null, null, "undefined" != typeof b ? function () {
                a.call(b)
            } : a))
        }, b
    }(), Sc = Pa.ObservableBase = function (a) {
        function b(a) {
            return a && Xa(a.dispose) ? a : Xa(a) ? bc(a) : cc
        }

        function c(a, c) {
            var d = c[0], f = c[1], g = Za(f.subscribeCore).call(f, d);
            g !== Ya || d.fail(Ya.e) || e(Ya.e), d.setDisposable(b(g))
        }

        function d() {
            a.call(this)
        }

        return Vb(d, a), d.prototype._subscribe = function (a) {
            var b = new vg(a), d = [b, this];
            return vc.scheduleRequired() ? vc.schedule(d, c) : c(null, d), b
        }, d.prototype.subscribeCore = ib, d
    }(Rc), Tc = Pa.FlatMapObservable = function (a) {
        function b(b, c, d, e) {
            this.resultSelector = Xa(d) ? d : null, this.selector = nb(Xa(c) ? c : function () {
                return c
            }, e, 3), this.source = b, a.call(this)
        }

        function c(a, b, c, d) {
            this.i = 0, this.selector = b, this.resultSelector = c, this.source = d, this.o = a, Mc.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new c(a, this.selector, this.resultSelector, this))
        }, Vb(c, Mc), c.prototype._wrapResult = function (a, b, c) {
            return this.resultSelector ? a.map(function (a, d) {
                return this.resultSelector(b, a, c, d)
            }, this) : a
        }, c.prototype.next = function (a) {
            var b = this.i++, c = Za(this.selector)(a, b, this.source);
            return c === Ya ? this.o.onError(c.e) : (Wa(c) && (c = cd(c)), (mb(c) || lb(c)) && (c = Rc.from(c)), void this.o.onNext(this._wrapResult(c, a, b)))
        }, c.prototype.error = function (a) {
            this.o.onError(a)
        }, c.prototype.completed = function () {
            this.o.onCompleted()
        }, b
    }(Sc), Uc = Pa.internals.Enumerable = function () {
    };
    y.prototype.dispose = function () {
        this.isDisposed || (this.isDisposed = !0, this._s.isDisposed = !0)
    };
    var Vc = function (a) {
        function b(b) {
            this.sources = b, a.call(this)
        }

        function c(a, b) {
            if (!a.isDisposed) {
                var c = Za(a.e.next).call(a.e);
                if (c === Ya)return a.o.onError(c.e);
                if (c.done)return a.o.onCompleted();
                var e = c.value;
                Wa(e) && (e = cd(e));
                var f = new gc;
                a.subscription.setDisposable(f), f.setDisposable(e.subscribe(new d(a, b)))
            }
        }

        function d(a, b) {
            this._state = a, this._recurse = b, Mc.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new hc, d = {
                isDisposed: !1,
                o: a,
                subscription: b,
                e: this.sources[jb]()
            }, e = vc.scheduleRecursive(d, c);
            return new jc([b, e, new y(d)])
        }, Vb(d, Mc), d.prototype.next = function (a) {
            this._state.o.onNext(a)
        }, d.prototype.error = function (a) {
            this._state.o.onError(a)
        }, d.prototype.completed = function () {
            this._recurse(this._state)
        }, b
    }(Sc);
    Uc.prototype.concat = function () {
        return new Vc(this)
    };
    var Wc = function (a) {
        function b(b) {
            this.sources = b, a.call(this)
        }

        function c(a, b) {
            if (!a.isDisposed) {
                var c = Za(a.e.next).call(a.e);
                if (c === Ya)return a.o.onError(c.e);
                if (c.done)return null !== a.lastError ? a.o.onError(a.lastError) : a.o.onCompleted();
                var e = c.value;
                Wa(e) && (e = cd(e));
                var f = new gc;
                a.subscription.setDisposable(f), f.setDisposable(e.subscribe(new d(a, b)))
            }
        }

        function d(a, b) {
            this._state = a, this._recurse = b, Mc.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new hc, d = {
                isDisposed: !1,
                e: this.sources[jb](),
                subscription: b,
                lastError: null,
                o: a
            }, e = vc.scheduleRecursive(d, c);
            return new jc([b, e, new y(d)])
        }, Vb(d, Mc), d.prototype.next = function (a) {
            this._state.o.onNext(a)
        }, d.prototype.error = function (a) {
            this._state.lastError = a, this._recurse(this._state)
        }, d.prototype.completed = function () {
            this._state.o.onCompleted()
        }, b
    }(Sc);
    Uc.prototype.catchError = function () {
        return new Wc(this)
    }, Uc.prototype.catchErrorWhen = function (a) {
        var b = this;
        return new ug(function (c) {
            var d, e = new yg, f = new yg, g = a(e), h = g.subscribe(f), i = b[jb](), j = {isDisposed: !1}, k = new hc, l = vc.scheduleRecursive(null, function (a, b) {
                if (!j.isDisposed) {
                    var g = Za(i.next).call(i);
                    if (g === Ya)return c.onError(g.e);
                    if (g.done)return void(d ? c.onError(d) : c.onCompleted());
                    var h = g.value;
                    Wa(h) && (h = cd(h));
                    var l = new gc, m = new gc;
                    k.setDisposable(new ic(m, l)), l.setDisposable(h.subscribe(function (a) {
                        c.onNext(a)
                    }, function (a) {
                        m.setDisposable(f.subscribe(b, function (a) {
                            c.onError(a)
                        }, function () {
                            c.onCompleted()
                        })), e.onNext(a)
                    }, function () {
                        c.onCompleted()
                    }))
                }
            });
            return new jc([h, k, l, new y(j)])
        })
    };
    var Xc = function (a) {
        function b(a, b) {
            this.v = a, this.c = null == b ? -1 : b
        }

        function c(a) {
            this.v = a.v, this.l = a.c
        }

        return Vb(b, a), b.prototype[jb] = function () {
            return new c(this)
        }, c.prototype.next = function () {
            return 0 === this.l ? kb : (this.l > 0 && this.l--, {done: !1, value: this.v})
        }, b
    }(Uc), Yc = Uc.repeat = function (a, b) {
        return new Xc(a, b)
    }, Zc = function (a) {
        function b(a, b, c) {
            this.s = a, this.fn = b ? nb(b, c, 3) : null
        }

        function c(a) {
            this.i = -1, this.s = a.s, this.l = this.s.length, this.fn = a.fn
        }

        return Vb(b, a), b.prototype[jb] = function () {
            return new c(this)
        }, c.prototype.next = function () {
            return ++this.i < this.l ? {
                done: !1,
                value: this.fn ? this.fn(this.s[this.i], this.i, this.s) : this.s[this.i]
            } : kb
        }, b
    }(Uc), $c = Uc.of = function (a, b, c) {
        return new Zc(a, b, c)
    }, _c = function (a) {
        function b(b, c) {
            this.source = b, this._s = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Qc(this._s, a))
        }, b
    }(Sc);
    Lc.observeOn = function (a) {
        return new _c(this, a)
    };
    var ad = function (a) {
        function b(b, c) {
            this.source = b, this._s = c, a.call(this)
        }

        function c(a, b) {
            var c = b[0], d = b[1], e = b[2];
            d.setDisposable(new w(a, c.subscribe(e)))
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new gc, d = new hc;
            return d.setDisposable(b), b.setDisposable(this._s.schedule([this.source, d, a], c)), d
        }, b
    }(Sc);
    Lc.subscribeOn = function (a) {
        return new ad(this, a)
    };
    var bd = function (a) {
        function b(b, c) {
            this._p = b, this._s = c, a.call(this)
        }

        function c(a, b) {
            var c = b[0], d = b[1];
            c.onNext(d), c.onCompleted()
        }

        function d(a, b) {
            var c = b[0], d = b[1];
            c.onError(d)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new gc, e = this;
            return this._p.then(function (d) {
                b.setDisposable(e._s.schedule([a, d], c))
            }, function (c) {
                b.setDisposable(e._s.schedule([a, c], d))
            }), b
        }, b
    }(Sc), cd = Rc.fromPromise = function (a, b) {
        return b || (b = Ac), new bd(a, b)
    };
    Lc.toPromise = function (a) {
        if (a || (a = Pa.config.Promise), !a)throw new gb("Promise type not provided nor in Rx.config.Promise");
        var b = this;
        return new a(function (a, c) {
            var d;
            b.subscribe(function (a) {
                d = a
            }, c, function () {
                a(d)
            })
        })
    };
    var dd = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        function c(a) {
            this.o = a, this.a = [], Mc.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new c(a))
        }, Vb(c, Mc), c.prototype.next = function (a) {
            this.a.push(a)
        }, c.prototype.error = function (a) {
            this.o.onError(a)
        }, c.prototype.completed = function () {
            this.o.onNext(this.a), this.o.onCompleted()
        }, b
    }(Sc);
    Lc.toArray = function () {
        return new dd(this)
    }, Rc.create = function (a, b) {
        return new ug(a, b)
    };
    var ed = function (a) {
        function b(b) {
            this._f = b, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = Za(this._f)();
            return b === Ya ? xd(b.e).subscribe(a) : (Wa(b) && (b = cd(b)), b.subscribe(a))
        }, b
    }(Sc), fd = Rc.defer = function (a) {
        return new ed(a)
    }, gd = function (a) {
        function b(b) {
            this.scheduler = b, a.call(this)
        }

        function c(a, b) {
            this.observer = a, this.scheduler = b
        }

        function d(a, b) {
            return b.onCompleted(), cc
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new c(a, this.scheduler);
            return b.run()
        }, c.prototype.run = function () {
            var a = this.observer;
            return this.scheduler === tc ? d(null, a) : this.scheduler.schedule(a, d)
        }, b
    }(Sc), hd = new gd(tc), id = Rc.empty = function (a) {
        return oc(a) || (a = tc), a === tc ? hd : new gd(a)
    }, jd = function (a) {
        function b(b, c, d) {
            this._iterable = b, this._fn = c, this._scheduler = d, a.call(this)
        }

        function c(a, b, c) {
            return function (d, e) {
                var f = Za(b.next).call(b);
                if (f === Ya)return a.onError(f.e);
                if (f.done)return a.onCompleted();
                var g = f.value;
                return Xa(c) && (g = Za(c)(g, d), g === Ya) ? a.onError(g.e) : (a.onNext(g), void e(d + 1))
            }
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = Object(this._iterable), d = E(b);
            return this._scheduler.scheduleRecursive(0, c(a, d, this._fn))
        }, b
    }(Sc), kd = Math.pow(2, 53) - 1;
    z.prototype[jb] = function () {
        return new A(this._s)
    }, A.prototype[jb] = function () {
        return this
    }, A.prototype.next = function () {
        return this._i < this._l ? {done: !1, value: this._s.charAt(this._i++)} : kb
    }, B.prototype[jb] = function () {
        return new C(this._a)
    }, C.prototype[jb] = function () {
        return this
    }, C.prototype.next = function () {
        return this._i < this._l ? {done: !1, value: this._a[this._i++]} : kb
    };
    var ld = Rc.from = function (a, b, c, d) {
        if (null == a)throw new Error("iterable cannot be null.");
        if (b && !Xa(b))throw new Error("mapFn when provided must be a function");
        if (b)var e = nb(b, c, 2);
        return oc(d) || (d = vc), new jd(a, e, d)
    }, md = function (a) {
        function b(b, c) {
            this._args = b, this._scheduler = c, a.call(this)
        }

        function c(a, b) {
            var c = b.length;
            return function (d, e) {
                c > d ? (a.onNext(b[d]), e(d + 1)) : a.onCompleted()
            }
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this._scheduler.scheduleRecursive(0, c(a, this._args))
        }, b
    }(Sc), nd = Rc.fromArray = function (a, b) {
        return oc(b) || (b = vc), new md(a, b)
    }, od = function (a) {
        function b(b, c, d, e, f) {
            this._initialState = b, this._cndFn = c, this._itrFn = d, this._resFn = e, this._s = f, a.call(this)
        }

        function c(a, b) {
            if (a.first)a.first = !1; else if (a.newState = Za(a.self._itrFn)(a.newState), a.newState === Ya)return a.o.onError(a.newState.e);
            var c = Za(a.self._cndFn)(a.newState);
            if (c === Ya)return a.o.onError(c.e);
            if (c) {
                var d = Za(a.self._resFn)(a.newState);
                if (d === Ya)return a.o.onError(d.e);
                a.o.onNext(d), b(a)
            } else a.o.onCompleted()
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = {o: a, self: this, first: !0, newState: this._initialState};
            return this._s.scheduleRecursive(b, c)
        }, b
    }(Sc);
    Rc.generate = function (a, b, c, d, e) {
        return oc(e) || (e = vc), new od(a, b, c, d, e)
    }, Rc.of = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        return new md(b, vc)
    }, Rc.ofWithScheduler = function (a) {
        for (var b = arguments.length, c = new Array(b - 1), d = 1; b > d; d++)c[d - 1] = arguments[d];
        return new md(c, a)
    }, Rc.ofArrayChanges = function (a) {
        if (!Array.isArray(a))throw new TypeError("Array.observe only accepts arrays.");
        if ("function" != typeof Array.observe && "function" != typeof Array.unobserve)throw new TypeError("Array.observe is not supported on your platform");
        return new ug(function (b) {
            function c(a) {
                for (var c = 0, d = a.length; d > c; c++)b.onNext(a[c])
            }

            return Array.observe(a, c), function () {
                Array.unobserve(a, c)
            }
        })
    }, Rc.ofObjectChanges = function (a) {
        if (null == a)throw new TypeError("object must not be null or undefined.");
        if ("function" != typeof Object.observe && "function" != typeof Object.unobserve)throw new TypeError("Object.observe is not supported on your platform");
        return new ug(function (b) {
            function c(a) {
                for (var c = 0, d = a.length; d > c; c++)b.onNext(a[c])
            }

            return Object.observe(a, c), function () {
                Object.unobserve(a, c)
            }
        })
    };
    var pd = function (a) {
        function b() {
            a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return cc
        }, b
    }(Sc), qd = new pd, rd = Rc.never = function () {
        return qd
    }, sd = function (a) {
        function b(b, c) {
            this._o = b, this._keys = Object.keys(b), this._scheduler = c, a.call(this)
        }

        function c(a, b, c) {
            return function (d, e) {
                if (d < c.length) {
                    var f = c[d];
                    a.onNext([f, b[f]]), e(d + 1)
                } else a.onCompleted()
            }
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this._scheduler.scheduleRecursive(0, c(a, this._o, this._keys))
        }, b
    }(Sc);
    Rc.pairs = function (a, b) {
        return b || (b = vc), new sd(a, b)
    };
    var td = function (a) {
        function b(b, c, d) {
            this.start = b, this.rangeCount = c, this.scheduler = d, a.call(this)
        }

        function c(a, b, c) {
            return function (d, e) {
                b > d ? (c.onNext(a + d), e(d + 1)) : c.onCompleted()
            }
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.scheduler.scheduleRecursive(0, c(this.start, this.rangeCount, a))
        }, b
    }(Sc);
    Rc.range = function (a, b, c) {
        return oc(c) || (c = vc), new td(a, b, c)
    };
    var ud = function (a) {
        function b(b, c, d) {
            this.value = b, this.repeatCount = null == c ? -1 : c, this.scheduler = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new I(a, this);
            return b.run()
        }, b
    }(Sc);
    I.prototype.run = function () {
        function a(a, d) {
            return (-1 === a || a > 0) && (b.onNext(c), a > 0 && a--), 0 === a ? b.onCompleted() : void d(a)
        }

        var b = this.observer, c = this.parent.value;
        return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount, a)
    }, Rc.repeat = function (a, b, c) {
        return oc(c) || (c = vc), new ud(a, b, c)
    };
    var vd = function (a) {
        function b(b, c) {
            this._value = b, this._scheduler = c, a.call(this)
        }

        function c(a, b) {
            var c = b[0], d = b[1];
            return d.onNext(c), d.onCompleted(), cc
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = [this._value, a];
            return this._scheduler === tc ? c(null, b) : this._scheduler.schedule(b, c)
        }, b
    }(Sc), wd = (Rc["return"] = Rc.just = function (a, b) {
        return oc(b) || (b = tc), new vd(a, b)
    }, function (a) {
        function b(b, c) {
            this._error = b, this._scheduler = c, a.call(this)
        }

        function c(a, b) {
            var c = b[0], d = b[1];
            return d.onError(c), cc
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = [this._error, a];
            return this._scheduler === tc ? c(null, b) : this._scheduler.schedule(b, c)
        }, b
    }(Sc)), xd = Rc["throw"] = function (a, b) {
        return oc(b) || (b = tc), new wd(a, b)
    }, yd = function (a) {
        function b(b, c) {
            this._resFn = b, this._obsFn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = cc, c = Za(this._resFn)();
            if (c === Ya)return new ic(xd(c.e).subscribe(a), b);
            c && (b = c);
            var d = Za(this._obsFn)(c);
            return d === Ya ? new ic(xd(d.e).subscribe(a), b) : new ic(d.subscribe(a), b)
        }, b
    }(Sc);
    Rc.using = function (a, b) {
        return new yd(a, b)
    }, Lc.amb = function (a) {
        var b = this;
        return new ug(function (c) {
            function d() {
                f || (f = g, j.dispose())
            }

            function e() {
                f || (f = h, i.dispose())
            }

            var f, g = "L", h = "R", i = new gc, j = new gc;
            Wa(a) && (a = cd(a));
            var k = Kc(function (a) {
                d(), f === g && c.onNext(a)
            }, function (a) {
                d(), f === g && c.onError(a)
            }, function () {
                d(), f === g && c.onCompleted()
            }), l = Kc(function (a) {
                e(), f === h && c.onNext(a)
            }, function (a) {
                e(), f === h && c.onError(a)
            }, function () {
                e(), f === h && c.onCompleted()
            });
            return i.setDisposable(b.subscribe(k)), j.setDisposable(a.subscribe(l)), new ic(i, j)
        })
    }, Rc.amb = function () {
        var a, b = rd();
        if (Array.isArray(arguments[0]))a = arguments[0]; else {
            var c = arguments.length;
            a = new Array(a);
            for (var d = 0; c > d; d++)a[d] = arguments[d]
        }
        for (var d = 0, c = a.length; c > d; d++)b = J(b, a[d]);
        return b
    };
    var zd = function (a) {
        function b(b, c) {
            this.source = b, this._fn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new gc, c = new hc;
            return c.setDisposable(b), b.setDisposable(this.source.subscribe(new Ad(a, c, this._fn))), c
        }, b
    }(Sc), Ad = function (a) {
        function b(b, c, d) {
            this._o = b, this._s = c, this._fn = d, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._o.onNext(a)
        }, b.prototype.completed = function () {
            return this._o.onCompleted()
        }, b.prototype.error = function (a) {
            var b = Za(this._fn)(a);
            if (b === Ya)return this._o.onError(b.e);
            Wa(b) && (b = cd(b));
            var c = new gc;
            this._s.setDisposable(c), c.setDisposable(b.subscribe(this._o))
        }, b
    }(Mc);
    Lc["catch"] = function (a) {
        return Xa(a) ? new zd(this, a) : Bd([this, a])
    };
    var Bd = Rc["catch"] = function () {
        var a;
        if (Array.isArray(arguments[0]))a = arguments[0]; else {
            var b = arguments.length;
            a = new Array(b);
            for (var c = 0; b > c; c++)a[c] = arguments[c]
        }
        return $c(a).catchError()
    };
    Lc.combineLatest = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        return Array.isArray(b[0]) ? b[0].unshift(this) : b.unshift(this), Ed.apply(this, b)
    };
    var Cd = function (a) {
        function b(b, c) {
            this._params = b, this._cb = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            for (var b = this._params.length, c = new Array(b), d = {
                hasValue: u(b, K),
                hasValueAll: !1,
                isDone: u(b, K),
                values: new Array(b)
            }, e = 0; b > e; e++) {
                var f = this._params[e], g = new gc;
                c[e] = g, Wa(f) && (f = cd(f)), g.setDisposable(f.subscribe(new Dd(a, e, this._cb, d)))
            }
            return new jc(c)
        }, b
    }(Sc), Dd = function (a) {
        function b(b, c, d, e) {
            this._o = b, this._i = c, this._cb = d, this._state = e, a.call(this)
        }

        function c(a) {
            return function (b, c) {
                return c !== a
            }
        }

        return Vb(b, a), b.prototype.next = function (a) {
            if (this._state.values[this._i] = a, this._state.hasValue[this._i] = !0, this._state.hasValueAll || (this._state.hasValueAll = this._state.hasValue.every(Ra))) {
                var b = Za(this._cb).apply(null, this._state.values);
                if (b === Ya)return this._o.onError(b.e);
                this._o.onNext(b)
            } else this._state.isDone.filter(c(this._i)).every(Ra) && this._o.onCompleted()
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._state.isDone[this._i] = !0, this._state.isDone.every(Ra) && this._o.onCompleted()
        }, b
    }(Mc), Ed = Rc.combineLatest = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        var d = Xa(b[a - 1]) ? b.pop() : L;
        return Array.isArray(b[0]) && (b = b[0]), new Cd(b, d)
    };
    Lc.concat = function () {
        for (var a = [], b = 0, c = arguments.length; c > b; b++)a.push(arguments[b]);
        return a.unshift(this), Hd.apply(null, a)
    };
    var Fd = function (a) {
        function b(b, c) {
            this._s = b, this._fn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._s.o.onNext(a)
        }, b.prototype.error = function (a) {
            this._s.o.onError(a)
        }, b.prototype.completed = function () {
            this._s.i++, this._fn(this._s)
        }, b
    }(Mc), Gd = function (a) {
        function b(b) {
            this._sources = b, a.call(this)
        }

        function c(a, b) {
            if (!a.disposable.isDisposed) {
                if (a.i === a.sources.length)return a.o.onCompleted();
                var c = a.sources[a.i];
                Wa(c) && (c = cd(c));
                var d = new gc;
                a.subscription.setDisposable(d), d.setDisposable(c.subscribe(new Fd(a, b)))
            }
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new hc, d = bc(Qa), e = {
                o: a,
                i: 0,
                subscription: b,
                disposable: d,
                sources: this._sources
            }, f = tc.scheduleRecursive(e, c);
            return new jc([b, d, f])
        }, b
    }(Sc), Hd = Rc.concat = function () {
        var a;
        if (Array.isArray(arguments[0]))a = arguments[0]; else {
            a = new Array(arguments.length);
            for (var b = 0, c = arguments.length; c > b; b++)a[b] = arguments[b]
        }
        return new Gd(a)
    };
    Lc.concatAll = function () {
        return this.merge(1)
    };
    var Id = function (a) {
        function b(b, c) {
            this.source = b, this.maxConcurrent = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new $b;
            return b.add(this.source.subscribe(new Jd(a, this.maxConcurrent, b))), b
        }, b
    }(Sc), Jd = function (a) {
        function b(b, c, d) {
            this.o = b, this.max = c, this.g = d, this.done = !1, this.q = [], this.activeCount = 0, a.call(this)
        }

        function c(b, c) {
            this.parent = b, this.sad = c, a.call(this)
        }

        return Vb(b, a), b.prototype.handleSubscribe = function (a) {
            var b = new gc;
            this.g.add(b), Wa(a) && (a = cd(a)), b.setDisposable(a.subscribe(new c(this, b)))
        }, b.prototype.next = function (a) {
            this.activeCount < this.max ? (this.activeCount++, this.handleSubscribe(a)) : this.q.push(a)
        }, b.prototype.error = function (a) {
            this.o.onError(a)
        }, b.prototype.completed = function () {
            this.done = !0, 0 === this.activeCount && this.o.onCompleted()
        }, Vb(c, a), c.prototype.next = function (a) {
            this.parent.o.onNext(a)
        }, c.prototype.error = function (a) {
            this.parent.o.onError(a)
        }, c.prototype.completed = function () {
            this.parent.g.remove(this.sad), this.parent.q.length > 0 ? this.parent.handleSubscribe(this.parent.q.shift()) : (this.parent.activeCount--, this.parent.done && 0 === this.parent.activeCount && this.parent.o.onCompleted())
        }, b
    }(Mc);
    Lc.merge = function (a) {
        return "number" != typeof a ? Kd(this, a) : new Id(this, a)
    };
    var Kd = Rc.merge = function () {
        var a, b, c = [], d = arguments.length;
        if (arguments[0])if (oc(arguments[0]))for (a = arguments[0], b = 1; d > b; b++)c.push(arguments[b]); else for (a = tc, b = 0; d > b; b++)c.push(arguments[b]); else for (a = tc, b = 1; d > b; b++)c.push(arguments[b]);
        return Array.isArray(c[0]) && (c = c[0]), H(a, c).mergeAll()
    }, Ld = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new $b, c = new gc;
            return b.add(c), c.setDisposable(this.source.subscribe(new Md(a, b))), b
        }, b
    }(Sc), Md = function (a) {
        function b(b, c) {
            this.o = b, this.g = c, this.done = !1, a.call(this)
        }

        function c(b, c) {
            this.parent = b, this.sad = c, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = new gc;
            this.g.add(b), Wa(a) && (a = cd(a)), b.setDisposable(a.subscribe(new c(this, b)))
        }, b.prototype.error = function (a) {
            this.o.onError(a)
        }, b.prototype.completed = function () {
            this.done = !0, 1 === this.g.length && this.o.onCompleted()
        }, Vb(c, a), c.prototype.next = function (a) {
            this.parent.o.onNext(a)
        }, c.prototype.error = function (a) {
            this.parent.o.onError(a)
        }, c.prototype.completed = function () {
            this.parent.g.remove(this.sad), this.parent.done && 1 === this.parent.g.length && this.parent.o.onCompleted()
        }, b
    }(Mc);
    Lc.mergeAll = function () {
        return new Ld(this)
    };
    var Nd = Pa.CompositeError = function (a) {
        this.innerErrors = a, this.message = "This contains multiple errors. Check the innerErrors", Error.call(this)
    };
    Nd.prototype = Object.create(Error.prototype), Nd.prototype.name = "CompositeError";
    var Od = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new $b, c = new gc, d = {isStopped: !1, errors: [], o: a};
            return b.add(c), c.setDisposable(this.source.subscribe(new Pd(b, d))), b
        }, b
    }(Sc), Pd = function (a) {
        function b(b, c) {
            this._group = b, this._state = c, a.call(this)
        }

        function c(a, b) {
            0 === b.length ? a.onCompleted() : 1 === b.length ? a.onError(b[0]) : a.onError(new Nd(b))
        }

        function d(b, c, d) {
            this._inner = b, this._group = c, this._state = d, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = new gc;
            this._group.add(b), Wa(a) && (a = cd(a)), b.setDisposable(a.subscribe(new d(b, this._group, this._state)))
        }, b.prototype.error = function (a) {
            this._state.errors.push(a), this._state.isStopped = !0, 1 === this._group.length && c(this._state.o, this._state.errors)
        }, b.prototype.completed = function () {
            this._state.isStopped = !0, 1 === this._group.length && c(this._state.o, this._state.errors)
        }, Vb(d, a), d.prototype.next = function (a) {
            this._state.o.onNext(a)
        }, d.prototype.error = function (a) {
            this._state.errors.push(a), this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && c(this._state.o, this._state.errors)
        }, d.prototype.completed = function () {
            this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && c(this._state.o, this._state.errors)
        }, b
    }(Mc);
    Rc.mergeDelayError = function () {
        var a;
        if (Array.isArray(arguments[0]))a = arguments[0]; else {
            var b = arguments.length;
            a = new Array(b);
            for (var c = 0; b > c; c++)a[c] = arguments[c]
        }
        var d = H(null, a);
        return new Od(d)
    }, Lc.onErrorResumeNext = function (a) {
        if (!a)throw new Error("Second observable is required");
        return Sd([this, a])
    };
    var Qd = function (a) {
        function b(b) {
            this.sources = b, a.call(this)
        }

        function c(a, b) {
            if (a.pos < a.sources.length) {
                var c = a.sources[a.pos++];
                Wa(c) && (c = cd(c));
                var d = new gc;
                a.subscription.setDisposable(d), d.setDisposable(c.subscribe(new Rd(a, b)))
            } else a.o.onCompleted()
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new hc, d = {pos: 0, subscription: b, o: a, sources: this.sources}, e = tc.scheduleRecursive(d, c);
            return new ic(b, e)
        }, b
    }(Sc), Rd = function (a) {
        function b(b, c) {
            this._state = b, this._recurse = c, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._state.o.onNext(a)
        }, b.prototype.error = function () {
            this._recurse(this._state)
        }, b.prototype.completed = function () {
            this._recurse(this._state)
        }, b
    }(Mc), Sd = Rc.onErrorResumeNext = function () {
        var a = [];
        if (Array.isArray(arguments[0]))a = arguments[0]; else {
            var b = arguments.length;
            a = new Array(b);
            for (var c = 0; b > c; c++)a[c] = arguments[c]
        }
        return new Qd(a)
    }, Td = function (a) {
        function b(b, c) {
            this._s = b, this._o = Wa(c) ? cd(c) : c, this._open = !1, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new gc;
            b.setDisposable(this._s.subscribe(new Ud(a, this))), Wa(this._o) && (this._o = cd(this._o));
            var c = new gc;
            return c.setDisposable(this._o.subscribe(new Vd(a, this, c))), new ic(b, c)
        }, b
    }(Sc), Ud = function (a) {
        function b(b, c) {
            this._o = b, this._p = c, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._p._open && this._o.onNext(a)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.onCompleted = function () {
            this._p._open && this._o.onCompleted()
        }, b
    }(Mc), Vd = function (a) {
        function b(b, c, d) {
            this._o = b, this._p = c, this._r = d, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function () {
            this._p._open = !0, this._r.dispose()
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.onCompleted = function () {
            this._r.dispose()
        }, b
    }(Mc);
    Lc.skipUntil = function (a) {
        return new Td(this, a)
    };
    var Wd = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        function c(a, b) {
            this.o = a, this.inner = b, this.stopped = !1, this.latest = 0, this.hasLatest = !1, Mc.call(this)
        }

        function d(a, b) {
            this.parent = a, this.id = b, Mc.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new hc, d = this.source.subscribe(new c(a, b));
            return new ic(d, b)
        }, Vb(c, Mc), c.prototype.next = function (a) {
            var b = new gc, c = ++this.latest;
            this.hasLatest = !0, this.inner.setDisposable(b), Wa(a) && (a = cd(a)), b.setDisposable(a.subscribe(new d(this, c)))
        }, c.prototype.error = function (a) {
            this.o.onError(a)
        }, c.prototype.completed = function () {
            this.stopped = !0, !this.hasLatest && this.o.onCompleted()
        }, Vb(d, Mc), d.prototype.next = function (a) {
            this.parent.latest === this.id && this.parent.o.onNext(a)
        }, d.prototype.error = function (a) {
            this.parent.latest === this.id && this.parent.o.onError(a)
        }, d.prototype.completed = function () {
            this.parent.latest === this.id && (this.parent.hasLatest = !1, this.parent.stopped && this.parent.o.onCompleted())
        }, b
    }(Sc);
    Lc["switch"] = Lc.switchLatest = function () {
        return new Wd(this)
    };
    var Xd = function (a) {
        function b(b, c) {
            this.source = b, this.other = Wa(c) ? cd(c) : c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return new ic(this.source.subscribe(a), this.other.subscribe(new Yd(a)))
        }, b
    }(Sc), Yd = function (a) {
        function b(b) {
            this._o = b, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function () {
            this._o.onCompleted()
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.onCompleted = Qa, b
    }(Mc);
    Lc.takeUntil = function (a) {
        return new Xd(this, a)
    };
    var Zd = function (a) {
        function b(b, c, d) {
            this._s = b, this._ss = c, this._cb = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            for (var b = this._ss.length, c = {
                hasValue: u(b, K),
                hasValueAll: !1,
                values: new Array(b)
            }, d = this._ss.length, e = new Array(d + 1), f = 0; d > f; f++) {
                var g = this._ss[f], h = new gc;
                Wa(g) && (g = cd(g)), h.setDisposable(g.subscribe(new $d(a, f, c))), e[f] = h
            }
            var i = new gc;
            return i.setDisposable(this._s.subscribe(new _d(a, this._cb, c))), e[d] = i, new jc(e)
        }, b
    }(Sc), $d = function (a) {
        function b(b, c, d) {
            this._o = b, this._i = c, this._state = d, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._state.values[this._i] = a, this._state.hasValue[this._i] = !0, this._state.hasValueAll = this._state.hasValue.every(Ra)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = Qa, b
    }(Mc), _d = function (a) {
        function b(b, c, d) {
            this._o = b, this._cb = c, this._state = d, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = [a].concat(this._state.values);
            if (this._state.hasValueAll) {
                var c = Za(this._cb).apply(null, b);
                return c === Ya ? this._o.onError(c.e) : void this._o.onNext(c)
            }
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.withLatestFrom = function () {
        if (0 === arguments.length)throw new Error("invalid arguments");
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        var d = Xa(b[a - 1]) ? b.pop() : L;
        return Array.isArray(b[0]) && (b = b[0]), new Zd(this, b, d)
    };
    var ae = function (a) {
        function b(b, c) {
            this._s = b, this._cb = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            for (var b = this._s.length, c = new Array(b), d = u(b, K), e = u(b, M), f = 0; b > f; f++) {
                var g = this._s[f], h = new gc;
                c[f] = h, Wa(g) && (g = cd(g)), h.setDisposable(g.subscribe(new be(a, f, this, e, d)))
            }
            return new jc(c)
        }, b
    }(Sc), be = function (a) {
        function b(b, c, d, e, f) {
            this._o = b, this._i = c, this._p = d, this._q = e, this._d = f, a.call(this)
        }

        function c(a) {
            return a.length > 0
        }

        function d(a) {
            return a.shift()
        }

        function e(a) {
            return function (b, c) {
                return c !== a
            }
        }

        return Vb(b, a), b.prototype.next = function (a) {
            if (this._q[this._i].push(a), this._q.every(c)) {
                var b = this._q.map(d), f = Za(this._p._cb).apply(null, b);
                if (f === Ya)return this._o.onError(f.e);
                this._o.onNext(f)
            } else this._d.filter(e(this._i)).every(Ra) && this._o.onCompleted()
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._d[this._i] = !0, this._d.every(Ra) && this._o.onCompleted()
        }, b
    }(Mc);
    Lc.zip = function () {
        if (0 === arguments.length)throw new Error("invalid arguments");
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        var d = Xa(b[a - 1]) ? b.pop() : L;
        Array.isArray(b[0]) && (b = b[0]);
        var e = this;
        return b.unshift(e), new ae(b, d)
    }, Rc.zip = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        Array.isArray(b[0]) && (b = Xa(b[1]) ? b[0].concat(b[1]) : b[0]);
        var d = b.shift();
        return d.zip.apply(d, b)
    };
    var ce = function (a) {
        function b(b, c) {
            this.sources = b, this._cb = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            for (var b = this.sources, c = b.length, d = new Array(c), e = {
                q: u(c, M),
                done: u(c, K),
                cb: this._cb,
                o: a
            }, f = 0; c > f; f++)!function (a) {
                var c = b[a], f = new gc;
                (mb(c) || lb(c)) && (c = ld(c)), d[a] = f, f.setDisposable(c.subscribe(new de(e, a)))
            }(f);
            return new jc(d)
        }, b
    }(Sc), de = function (a) {
        function b(b, c) {
            this._s = b, this._i = c, a.call(this)
        }

        function c(a) {
            return a.length > 0
        }

        function d(a) {
            return a.shift()
        }

        function e(a) {
            return function (b, c) {
                return c !== a
            }
        }

        return Vb(b, a), b.prototype.next = function (a) {
            if (this._s.q[this._i].push(a), this._s.q.every(c)) {
                var b = this._s.q.map(d), f = Za(this._s.cb).apply(null, b);
                if (f === Ya)return this._s.o.onError(f.e);
                this._s.o.onNext(f)
            } else this._s.done.filter(e(this._i)).every(Ra) && this._s.o.onCompleted()
        }, b.prototype.error = function (a) {
            this._s.o.onError(a)
        }, b.prototype.completed = function () {
            this._s.done[this._i] = !0, this._s.done.every(Ra) && this._s.o.onCompleted()
        }, b
    }(Mc);
    Lc.zipIterable = function () {
        if (0 === arguments.length)throw new Error("invalid arguments");
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        var d = Xa(b[a - 1]) ? b.pop() : L, e = this;
        return b.unshift(e), new ce(b, d)
    }, Lc.asObservable = function () {
        return new ug(N(this), this)
    }, Lc.bufferWithCount = function (a, b) {
        return "number" != typeof b && (b = a), this.windowWithCount(a, b).flatMap(O).filter(P)
    };
    var ee = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new fe(a))
        }, b
    }(Sc), fe = function (a) {
        function b(b) {
            this._o = b, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            a.accept(this._o)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.dematerialize = function () {
        return new ee(this)
    };
    var ge = function (a) {
        function b(b, c, d) {
            this.source = b, this.keyFn = c, this.comparer = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new he(a, this.keyFn, this.comparer))
        }, b
    }(Sc), he = function (a) {
        function b(b, c, d) {
            this.o = b, this.keyFn = c, this.comparer = d, this.hasCurrentKey = !1, this.currentKey = null, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b, c = a;
            return Xa(this.keyFn) && (c = Za(this.keyFn)(a), c === Ya) ? this.o.onError(c.e) : this.hasCurrentKey && (b = Za(this.comparer)(this.currentKey, c), b === Ya) ? this.o.onError(b.e) : void(this.hasCurrentKey && b || (this.hasCurrentKey = !0, this.currentKey = c, this.o.onNext(a)))
        }, b.prototype.error = function (a) {
            this.o.onError(a)
        }, b.prototype.completed = function () {
            this.o.onCompleted()
        }, b
    }(Mc);
    Lc.distinctUntilChanged = function (a, b) {
        return b || (b = Ta), new ge(this, a, b)
    };
    var ie = function (a) {
        function b(b, c, d, e) {
            this.source = b, this._oN = c, this._oE = d, this._oC = e, a.call(this)
        }

        function c(a, b) {
            this.o = a, this.t = !b._oN || Xa(b._oN) ? Kc(b._oN || Qa, b._oE || Qa, b._oC || Qa) : b._oN, this.isStopped = !1, Mc.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new c(a, this))
        }, Vb(c, Mc), c.prototype.next = function (a) {
            var b = Za(this.t.onNext).call(this.t, a);
            b === Ya && this.o.onError(b.e), this.o.onNext(a)
        }, c.prototype.error = function (a) {
            var b = Za(this.t.onError).call(this.t, a);
            return b === Ya ? this.o.onError(b.e) : void this.o.onError(a)
        }, c.prototype.completed = function () {
            var a = Za(this.t.onCompleted).call(this.t);
            return a === Ya ? this.o.onError(a.e) : void this.o.onCompleted()
        }, b
    }(Sc);
    Lc["do"] = Lc.tap = Lc.doAction = function (a, b, c) {
        return new ie(this, a, b, c)
    }, Lc.doOnNext = Lc.tapOnNext = function (a, b) {
        return this.tap("undefined" != typeof b ? function (c) {
            a.call(b, c)
        } : a)
    }, Lc.doOnError = Lc.tapOnError = function (a, b) {
        return this.tap(Qa, "undefined" != typeof b ? function (c) {
            a.call(b, c)
        } : a)
    }, Lc.doOnCompleted = Lc.tapOnCompleted = function (a, b) {
        return this.tap(Qa, null, "undefined" != typeof b ? function () {
            a.call(b)
        } : a)
    };
    var je = function (a) {
        function b(b, c, d) {
            this.source = b, this._fn = nb(c, d, 0), a.call(this)
        }

        function c(a, b) {
            this.isDisposed = !1, this._s = a, this._fn = b
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = Za(this.source.subscribe).call(this.source, a);
            return b === Ya && (this._fn(), e(b.e)), new c(b, this._fn)
        }, c.prototype.dispose = function () {
            if (!this.isDisposed) {
                var a = Za(this._s.dispose).call(this._s);
                this._fn(), a === Ya && e(a.e)
            }
        }, b
    }(Sc);
    Lc["finally"] = function (a, b) {
        return new je(this, a, b)
    };
    var ke = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        function c(a) {
            this.o = a, this.isStopped = !1
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new c(a))
        }, c.prototype.onNext = Qa, c.prototype.onError = function (a) {
            this.isStopped || (this.isStopped = !0, this.o.onError(a))
        }, c.prototype.onCompleted = function () {
            this.isStopped || (this.isStopped = !0, this.o.onCompleted())
        }, c.prototype.dispose = function () {
            this.isStopped = !0
        }, c.prototype.fail = function (a) {
            return this.isStopped ? !1 : (this.isStopped = !0, this.observer.onError(a), !0)
        }, b
    }(Sc);
    Lc.ignoreElements = function () {
        return new ke(this)
    };
    var le = function (a) {
        function b(b, c) {
            this.source = b, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new me(a))
        }, b
    }(Sc), me = function (a) {
        function b(b) {
            this._o = b, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._o.onNext(Gc(a))
        }, b.prototype.error = function (a) {
            this._o.onNext(Hc(a)), this._o.onCompleted()
        }, b.prototype.completed = function () {
            this._o.onNext(Ic()), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.materialize = function () {
        return new le(this)
    }, Lc.repeat = function (a) {
        return Yc(this, a).concat()
    }, Lc.retry = function (a) {
        return Yc(this, a).catchError()
    }, Lc.retryWhen = function (a) {
        return Yc(this).catchErrorWhen(a)
    };
    var ne = function (a) {
        function b(b, c, d, e) {
            this.source = b, this.accumulator = c, this.hasSeed = d, this.seed = e, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new oe(a, this))
        }, b
    }(Sc), oe = function (a) {
        function b(b, c) {
            this._o = b, this._p = c, this._fn = c.accumulator, this._hs = c.hasSeed, this._s = c.seed, this._ha = !1, this._a = null, this._hv = !1, this._i = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            return !this._hv && (this._hv = !0), this._ha ? this._a = Za(this._fn)(this._a, a, this._i, this._p) : (this._a = this._hs ? Za(this._fn)(this._s, a, this._i, this._p) : a, this._ha = !0), this._a === Ya ? this._o.onError(this._a.e) : (this._o.onNext(this._a), void this._i++)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            !this._hv && this._hs && this._o.onNext(this._s), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.scan = function () {
        var a, b = !1, c = arguments[0];
        return 2 === arguments.length && (b = !0, a = arguments[1]), new ne(this, c, b, a)
    };
    var pe = function (a) {
        function b(b, c) {
            this.source = b, this._c = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new qe(a, this._c))
        }, b
    }(Sc), qe = function (a) {
        function b(b, c) {
            this._o = b, this._c = c, this._q = [], a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._q.push(a), this._q.length > this._c && this._o.onNext(this._q.shift())
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.skipLast = function (a) {
        if (0 > a)throw new fb;
        return new pe(this, a)
    }, Lc.startWith = function () {
        var a, b = 0;
        arguments.length && oc(arguments[0]) ? (a = arguments[0], b = 1) : a = tc;
        for (var c = [], d = b, e = arguments.length; e > d; d++)c.push(arguments[d]);
        return $c([nd(c, a), this]).concat()
    };
    var re = function (a) {
        function b(b, c) {
            this._o = b, this._c = c, this._q = [], a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._q.push(a), this._q.length > this._c && this._q.shift()
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            for (; this._q.length > 0;)this._o.onNext(this._q.shift());
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.takeLast = function (a) {
        if (0 > a)throw new fb;
        var b = this;
        return new ug(function (c) {
            return b.subscribe(new re(c, a))
        }, b)
    };
    var se = function (a) {
        function b(b, c) {
            this._o = b, this._c = c, this._q = [], a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._q.push(a), this._q.length > this._c && this._q.shift()
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(this._q), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.takeLastBuffer = function (a) {
        if (0 > a)throw new fb;
        var b = this;
        return new ug(function (c) {
            return b.subscribe(new se(c, a))
        }, b)
    }, Lc.windowWithCount = function (a, b) {
        var c = this;
        if (+a || (a = 0), Math.abs(a) === 1 / 0 && (a = 0), 0 >= a)throw new fb;
        if (null == b && (b = a), +b || (b = 0), Math.abs(b) === 1 / 0 && (b = 0), 0 >= b)throw new fb;
        return new ug(function (d) {
            function e() {
                var a = new yg;
                i.push(a), d.onNext(Xb(a, g))
            }

            var f = new gc, g = new kc(f), h = 0, i = [];
            return e(), f.setDisposable(c.subscribe(function (c) {
                for (var d = 0, f = i.length; f > d; d++)i[d].onNext(c);
                var g = h - a + 1;
                g >= 0 && g % b === 0 && i.shift().onCompleted(), ++h % b === 0 && e()
            }, function (a) {
                for (; i.length > 0;)i.shift().onError(a);
                d.onError(a)
            }, function () {
                for (; i.length > 0;)i.shift().onCompleted();
                d.onCompleted()
            })), g
        }, c)
    }, Lc.selectConcat = Lc.concatMap = function (a, b, c) {
        return Xa(a) && Xa(b) ? this.concatMap(function (c, d) {
            var e = a(c, d);
            return Wa(e) && (e = cd(e)), (mb(e) || lb(e)) && (e = ld(e)), e.map(function (a, e) {
                return b(c, a, d, e)
            })
        }) : Xa(a) ? Q(this, a, c) : Q(this, function () {
            return a
        })
    }, Lc.concatMapObserver = Lc.selectConcatObserver = function (a, b, c, d) {
        var e = this, f = nb(a, d, 2), g = nb(b, d, 1), h = nb(c, d, 0);
        return new ug(function (a) {
            var b = 0;
            return e.subscribe(function (c) {
                var d;
                try {
                    d = f(c, b++)
                } catch (e) {
                    return void a.onError(e)
                }
                Wa(d) && (d = cd(d)), a.onNext(d)
            }, function (b) {
                var c;
                try {
                    c = g(b)
                } catch (d) {
                    return void a.onError(d)
                }
                Wa(c) && (c = cd(c)), a.onNext(c), a.onCompleted()
            }, function () {
                var b;
                try {
                    b = h()
                } catch (c) {
                    return void a.onError(c)
                }
                Wa(b) && (b = cd(b)), a.onNext(b), a.onCompleted()
            })
        }, this).concatAll()
    };
    var te = function (a) {
        function b(b, c) {
            this._o = b, this._d = c, this._f = !1, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._f = !0, this._o.onNext(a)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            !this._f && this._o.onNext(this._d), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.defaultIfEmpty = function (b) {
        var c = this;
        return b === a && (b = null), new ug(function (a) {
            return c.subscribe(new te(a, b))
        }, c)
    }, S.prototype.push = function (a) {
        var b = -1 === R(this.set, a, this.comparer);
        return b && this.set.push(a), b
    };
    var ue = function (a) {
        function b(b, c, d) {
            this.source = b, this._keyFn = c, this._cmpFn = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new ve(a, this._keyFn, this._cmpFn))
        }, b
    }(Sc), ve = function (a) {
        function b(b, c, d) {
            this._o = b, this._keyFn = c, this._h = new S(d), a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = a;
            return Xa(this._keyFn) && (b = Za(this._keyFn)(a), b === Ya) ? this._o.onError(b.e) : void(this._h.push(b) && this._o.onNext(a))
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.distinct = function (a, b) {
        return b || (b = Ta), new ue(this, a, b)
    }, Lc.groupBy = function (a, b) {
        return this.groupByUntil(a, b, rd)
    }, Lc.groupByUntil = function (b, c, d) {
        var e = this;
        return new ug(function (f) {
            var g = new Lf, h = new $b, i = new kc(h), j = function (a) {
                return function (b) {
                    b.onError(a)
                }
            };
            return h.add(e.subscribe(function (e) {
                var k = Za(b)(e);
                if (k === Ya)return g.forEach(j(k.e)), f.onError(k.e);
                var l = !1, m = g.get(k);
                if (m === a && (m = new yg, g.set(k, m), l = !0), l) {
                    var n = new xg(k, m, i), o = new xg(k, m), p = Za(d)(o);
                    if (p === Ya)return g.forEach(j(p.e)), f.onError(p.e);
                    f.onNext(n);
                    var q = new gc;
                    h.add(q), q.setDisposable(p.take(1).subscribe(Qa, function (a) {
                        g.forEach(j(a)), f.onError(a)
                    }, function () {
                        g["delete"](k) && m.onCompleted(), h.remove(q)
                    }))
                }
                var r = e;
                return Xa(c) && (r = Za(c)(e), r === Ya) ? (g.forEach(j(r.e)), f.onError(r.e)) : void m.onNext(r)
            }, function (a) {
                g.forEach(j(a)), f.onError(a)
            }, function () {
                g.forEach(function (a) {
                    a.onCompleted()
                }), f.onCompleted()
            })), i
        }, e)
    };
    var we = function (a) {
        function b(b, c, d) {
            this.source = b, this.selector = nb(c, d, 3), a.call(this)
        }

        function c(a, b) {
            return function (c, d, e) {
                return a.call(this, b.selector(c, d, e), d, e)
            }
        }

        function d(a, b, c) {
            this.o = a, this.selector = b, this.source = c, this.i = 0, Mc.call(this)
        }

        return Vb(b, a), b.prototype.internalMap = function (a, d) {
            return new b(this.source, c(a, this), d)
        }, b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new d(a, this.selector, this))
        }, Vb(d, Mc), d.prototype.next = function (a) {
            var b = Za(this.selector)(a, this.i++, this.source);
            return b === Ya ? this.o.onError(b.e) : void this.o.onNext(b)
        }, d.prototype.error = function (a) {
            this.o.onError(a)
        }, d.prototype.completed = function () {
            this.o.onCompleted()
        }, b
    }(Sc);
    Lc.map = Lc.select = function (a, b) {
        var c = "function" == typeof a ? a : function () {
            return a
        };
        return this instanceof we ? this.internalMap(c, b) : new we(this, c, b)
    }, Lc.pluck = function () {
        var a = arguments.length, b = new Array(a);
        if (0 === a)throw new Error("List of properties cannot be empty.");
        for (var c = 0; a > c; c++)b[c] = arguments[c];
        return this.map(T(b, a))
    }, Lc.flatMap = Lc.selectMany = function (a, b, c) {
        return new Tc(this, a, b, c).mergeAll()
    }, Lc.flatMapObserver = Lc.selectManyObserver = function (a, b, c, d) {
        var e = this;
        return new ug(function (f) {
            var g = 0;
            return e.subscribe(function (b) {
                var c;
                try {
                    c = a.call(d, b, g++)
                } catch (e) {
                    return void f.onError(e)
                }
                Wa(c) && (c = cd(c)), f.onNext(c)
            }, function (a) {
                var c;
                try {
                    c = b.call(d, a)
                } catch (e) {
                    return void f.onError(e)
                }
                Wa(c) && (c = cd(c)), f.onNext(c), f.onCompleted()
            }, function () {
                var a;
                try {
                    a = c.call(d)
                } catch (b) {
                    return void f.onError(b)
                }
                Wa(a) && (a = cd(a)), f.onNext(a), f.onCompleted()
            })
        }, e).mergeAll()
    }, Pa.Observable.prototype.flatMapLatest = function (a, b, c) {
        return new Tc(this, a, b, c).switchLatest()
    };
    var xe = function (a) {
        function b(b, c) {
            this.source = b, this._count = c, a.call(this)
        }

        function c(a, b) {
            this._o = a, this._r = b, Mc.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new c(a, this._count))
        }, Vb(c, Mc), c.prototype.next = function (a) {
            this._r <= 0 ? this._o.onNext(a) : this._r--
        }, c.prototype.error = function (a) {
            this._o.onError(a)
        }, c.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Sc);
    Lc.skip = function (a) {
        if (0 > a)throw new fb;
        return new xe(this, a)
    };
    var ye = function (a) {
        function b(b, c) {
            this.source = b, this._fn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new ze(a, this))
        }, b
    }(Sc), ze = function (a) {
        function b(b, c) {
            this._o = b, this._p = c, this._i = 0, this._r = !1, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            if (!this._r) {
                var b = Za(this._p._fn)(a, this._i++, this._p);
                if (b === Ya)return this._o.onError(b.e);
                this._r = !b
            }
            this._r && this._o.onNext(a)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.skipWhile = function (a, b) {
        var c = nb(a, b, 3);
        return new ye(this, c)
    };
    var Ae = function (a) {
        function b(b, c) {
            this.source = b, this._count = c, a.call(this)
        }

        function c(a, b) {
            this._o = a, this._c = b, this._r = b, Mc.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new c(a, this._count))
        }, Vb(c, Mc), c.prototype.next = function (a) {
            this._r-- > 0 && (this._o.onNext(a), this._r <= 0 && this._o.onCompleted())
        }, c.prototype.error = function (a) {
            this._o.onError(a)
        }, c.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Sc);
    Lc.take = function (a, b) {
        if (0 > a)throw new fb;
        return 0 === a ? id(b) : new Ae(this, a)
    };
    var Be = function (a) {
        function b(b, c) {
            this.source = b, this._fn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Ce(a, this))
        }, b
    }(Sc), Ce = function (a) {
        function b(b, c) {
            this._o = b, this._p = c, this._i = 0, this._r = !0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            return this._r && (this._r = Za(this._p._fn)(a, this._i++, this._p), this._r === Ya) ? this._o.onError(this._r.e) : void(this._r ? this._o.onNext(a) : this._o.onCompleted())
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.takeWhile = function (a, b) {
        var c = nb(a, b, 3);
        return new Be(this, c)
    };
    var De = function (a) {
        function b(b, c, d) {
            this.source = b, this.predicate = nb(c, d, 3), a.call(this)
        }

        function c(a, b) {
            return function (c, d, e) {
                return b.predicate(c, d, e) && a.call(this, c, d, e)
            }
        }

        function d(a, b, c) {
            this.o = a, this.predicate = b, this.source = c, this.i = 0, Mc.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new d(a, this.predicate, this))
        }, b.prototype.internalFilter = function (a, d) {
            return new b(this.source, c(a, this), d)
        }, Vb(d, Mc), d.prototype.next = function (a) {
            var b = Za(this.predicate)(a, this.i++, this.source);
            return b === Ya ? this.o.onError(b.e) : void(b && this.o.onNext(a))
        }, d.prototype.error = function (a) {
            this.o.onError(a)
        }, d.prototype.completed = function () {
            this.o.onCompleted()
        }, b
    }(Sc);
    Lc.filter = Lc.where = function (a, b) {
        return this instanceof De ? this.internalFilter(a, b) : new De(this, a, b)
    };
    var Ee = function (a) {
        function b(b, c, d) {
            this.source = b, this._k = c, this._c = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Fe(a, this._k, this._c))
        }, b
    }(Sc), Fe = function (a) {
        function b(b, c, d) {
            this._o = b, this._k = c, this._c = d, this._v = null, this._hv = !1, this._l = [], a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = Za(this._k)(a);
            if (b === Ya)return this._o.onError(b.e);
            var c = 0;
            if (this._hv) {
                if (c = Za(this._c)(b, this._v), c === Ya)return this._o.onError(c.e)
            } else this._hv = !0, this._v = b;
            c > 0 && (this._v = b, this._l = []), c >= 0 && this._l.push(a)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(this._l), this._o.onCompleted()
        }, b
    }(Mc), Ge = function (a) {
        function b(b, c, d, e) {
            this.source = b, this.accumulator = c, this.hasSeed = d, this.seed = e, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new He(a, this))
        }, b
    }(Sc), He = function (a) {
        function b(b, c) {
            this._o = b, this._p = c, this._fn = c.accumulator, this._hs = c.hasSeed, this._s = c.seed, this._ha = !1, this._a = null, this._hv = !1, this._i = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            return !this._hv && (this._hv = !0), this._ha ? this._a = Za(this._fn)(this._a, a, this._i, this._p) : (this._a = this._hs ? Za(this._fn)(this._s, a, this._i, this._p) : a, this._ha = !0), this._a === Ya ? this._o.onError(this._a.e) : void this._i++
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._hv && this._o.onNext(this._a), !this._hv && this._hs && this._o.onNext(this._s), !this._hv && !this._hs && this._o.onError(new db), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.reduce = function () {
        var a, b = !1, c = arguments[0];
        return 2 === arguments.length && (b = !0, a = arguments[1]), new Ge(this, c, b, a)
    };
    var Ie = function (a) {
        function b(b, c) {
            this.source = b, this._fn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Je(a, this._fn, this.source))
        }, b
    }(Sc), Je = function (a) {
        function b(b, c, d) {
            this._o = b, this._fn = c, this._s = d, this._i = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = Za(this._fn)(a, this._i++, this._s);
            return b === Ya ? this._o.onError(b.e) : void(Boolean(b) && (this._o.onNext(!0), this._o.onCompleted()))
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(!1), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.some = function (a, b) {
        var c = nb(a, b, 3);
        return new Ie(this, c)
    };
    var Ke = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Le(a))
        }, b
    }(Sc), Le = function (a) {
        function b(b) {
            this._o = b, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function () {
            this._o.onNext(!1), this._o.onCompleted()
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(!0), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.isEmpty = function () {
        return new Ke(this)
    };
    var Me = function (a) {
        function b(b, c) {
            this.source = b, this._fn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Ne(a, this._fn, this.source))
        }, b
    }(Sc), Ne = function (a) {
        function b(b, c, d) {
            this._o = b, this._fn = c, this._s = d, this._i = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = Za(this._fn)(a, this._i++, this._s);
            return b === Ya ? this._o.onError(b.e) : void(Boolean(b) || (this._o.onNext(!1), this._o.onCompleted()))
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(!0), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.every = function (a, b) {
        var c = nb(a, b, 3);
        return new Me(this, c)
    };
    var Oe = function (a) {
        function b(b, c, d) {
            var e = +d || 0;
            Math.abs(e) === 1 / 0 && (e = 0), this.source = b, this._elem = c, this._n = e, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this._n < 0 ? (a.onNext(!1), a.onCompleted(), cc) : this.source.subscribe(new Pe(a, this._elem, this._n))
        }, b
    }(Sc), Pe = function (a) {
        function b(b, c, d) {
            this._o = b, this._elem = c, this._n = d, this._i = 0, a.call(this)
        }

        function c(a, b) {
            return 0 === a && 0 === b || a === b || isNaN(a) && isNaN(b)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._i++ >= this._n && c(a, this._elem) && (this._o.onNext(!0), this._o.onCompleted())
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(!1), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.includes = function (a, b) {
        return new Oe(this, a, b)
    };
    var Qe = function (a) {
        function b(b, c) {
            this.source = b, this._fn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Re(a, this._fn, this.source))
        }, b
    }(Sc), Re = function (a) {
        function b(b, c, d) {
            this._o = b, this._fn = c, this._s = d, this._i = 0, this._c = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            if (this._fn) {
                var b = Za(this._fn)(a, this._i++, this._s);
                if (b === Ya)return this._o.onError(b.e);
                Boolean(b) && this._c++
            } else this._c++
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(this._c), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.count = function (a, b) {
        var c = nb(a, b, 3);
        return new Qe(this, c)
    };
    var Se = function (a) {
        function b(b, c, d) {
            this.source = b, this._e = c, this._n = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this._n < 0 ? (a.onNext(-1), a.onCompleted(), cc) : this.source.subscribe(new Te(a, this._e, this._n))
        }, b
    }(Sc), Te = function (a) {
        function b(b, c, d) {
            this._o = b, this._e = c, this._n = d, this._i = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._i >= this._n && a === this._e && (this._o.onNext(this._i), this._o.onCompleted()), this._i++
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(-1), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.indexOf = function (a, b) {
        var c = +b || 0;
        return Math.abs(c) === 1 / 0 && (c = 0), new Se(this, a, c)
    };
    var Ue = function (a) {
        function b(b, c) {
            this.source = b, this._fn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Ve(a, this._fn, this.source))
        }, b
    }(Sc), Ve = function (a) {
        function b(b, c, d) {
            this._o = b, this._fn = c, this._s = d, this._i = 0, this._c = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            if (this._fn) {
                var b = Za(this._fn)(a, this._i++, this._s);
                if (b === Ya)return this._o.onError(b.e);
                this._c += b
            } else this._c += a
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(this._c), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.sum = function (a, b) {
        var c = nb(a, b, 3);
        return new Ue(this, c)
    }, Lc.minBy = function (a, b) {
        return b || (b = Ua), new Ee(this, a, function (a, c) {
            return -1 * b(a, c)
        })
    }, Lc.min = function (a) {
        return this.minBy(Ra, a).map(U)
    }, Lc.maxBy = function (a, b) {
        return b || (b = Ua), new Ee(this, a, b)
    }, Lc.max = function (a) {
        return this.maxBy(Ra, a).map(U)
    };
    var We = function (a) {
        function b(b, c) {
            this.source = b, this._fn = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Xe(a, this._fn, this.source))
        }, b
    }(Sc), Xe = function (a) {
        function b(b, c, d) {
            this._o = b, this._fn = c, this._s = d, this._c = 0, this._t = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            if (this._fn) {
                var b = Za(this._fn)(a, this._c++, this._s);
                if (b === Ya)return this._o.onError(b.e);
                this._t += b
            } else this._c++, this._t += a
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            return 0 === this._c ? this._o.onError(new db) : (this._o.onNext(this._t / this._c), void this._o.onCompleted())
        }, b
    }(Mc);
    Lc.average = function (a, b) {
        var c, d = this;
        return Xa(a) && (c = nb(a, b, 3)), new We(d, c)
    }, Lc.sequenceEqual = function (a, b) {
        var c = this;
        return b || (b = Ta), new ug(function (d) {
            var e = !1, f = !1, g = [], h = [], i = c.subscribe(function (a) {
                if (h.length > 0) {
                    var c = h.shift(), e = Za(b)(c, a);
                    if (e === Ya)return d.onError(e.e);
                    e || (d.onNext(!1), d.onCompleted())
                } else f ? (d.onNext(!1), d.onCompleted()) : g.push(a)
            }, function (a) {
                d.onError(a)
            }, function () {
                e = !0, 0 === g.length && (h.length > 0 ? (d.onNext(!1), d.onCompleted()) : f && (d.onNext(!0), d.onCompleted()))
            });
            (mb(a) || lb(a)) && (a = ld(a)), Wa(a) && (a = cd(a));
            var j = a.subscribe(function (a) {
                if (g.length > 0) {
                    var c = g.shift(), f = Za(b)(c, a);
                    if (f === Ya)return d.onError(f.e);
                    f || (d.onNext(!1), d.onCompleted())
                } else e ? (d.onNext(!1), d.onCompleted()) : h.push(a)
            }, function (a) {
                d.onError(a)
            }, function () {
                f = !0, 0 === h.length && (g.length > 0 ? (d.onNext(!1), d.onCompleted()) : e && (d.onNext(!0), d.onCompleted()))
            });
            return new ic(i, j)
        }, c)
    };
    var Ye = function (a) {
        function b(b, c, d) {
            this.source = b, this._i = c, this._d = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Ze(a, this._i, this._d))
        }, b
    }(Sc), Ze = function (b) {
        function c(a, c, d) {
            this._o = a, this._i = c, this._d = d, b.call(this)
        }

        return Vb(c, b), c.prototype.next = function (a) {
            0 === this._i-- && (this._o.onNext(a), this._o.onCompleted())
        }, c.prototype.error = function (a) {
            this._o.onError(a)
        }, c.prototype.completed = function () {
            this._d === a ? this._o.onError(new fb) : (this._o.onNext(this._d), this._o.onCompleted())
        }, c
    }(Mc);
    Lc.elementAt = function (a, b) {
        if (0 > a)throw new fb;
        return new Ye(this, a, b)
    };
    var $e = function (b) {
        function c(a, c, d) {
            this._o = a, this._obj = c, this._s = d, this._i = 0, this._hv = !1, this._v = null, b.call(this)
        }

        return Vb(c, b), c.prototype.next = function (a) {
            var b = !1;
            if (this._obj.predicate) {
                var c = Za(this._obj.predicate)(a, this._i++, this._s);
                if (c === Ya)return this._o.onError(c.e);
                Boolean(c) && (b = !0)
            } else this._obj.predicate || (b = !0);
            if (b) {
                if (this._hv)return this._o.onError(new Error("Sequence contains more than one matching element"));
                this._hv = !0, this._v = a
            }
        }, c.prototype.error = function (a) {
            this._o.onError(a)
        }, c.prototype.completed = function () {
            this._hv ? (this._o.onNext(this._v), this._o.onCompleted()) : this._obj.defaultValue === a ? this._o.onError(new db) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
        }, c
    }(Mc);
    Lc.single = function (a, b) {
        var c = {}, d = this;
        if (c = "object" == typeof arguments[0] ? arguments[0] : {
                    predicate: arguments[0],
                    thisArg: arguments[1],
                    defaultValue: arguments[2]
                }, Xa(c.predicate)) {
            var e = c.predicate;
            c.predicate = nb(e, c.thisArg, 3)
        }
        return new ug(function (a) {
            return d.subscribe(new $e(a, c, d))
        }, d)
    };
    var _e = function (a) {
        function b(b, c) {
            this.source = b, this._obj = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new af(a, this._obj, this.source))
        }, b
    }(Sc), af = function (b) {
        function c(a, c, d) {
            this._o = a, this._obj = c, this._s = d, this._i = 0, b.call(this)
        }

        return Vb(c, b), c.prototype.next = function (a) {
            if (this._obj.predicate) {
                var b = Za(this._obj.predicate)(a, this._i++, this._s);
                if (b === Ya)return this._o.onError(b.e);
                Boolean(b) && (this._o.onNext(a), this._o.onCompleted())
            } else this._obj.predicate || (this._o.onNext(a), this._o.onCompleted())
        }, c.prototype.error = function (a) {
            this._o.onError(a)
        }, c.prototype.completed = function () {
            this._obj.defaultValue === a ? this._o.onError(new db) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
        }, c
    }(Mc);
    Lc.first = function () {
        var a = {};
        if (a = "object" == typeof arguments[0] ? arguments[0] : {
                    predicate: arguments[0],
                    thisArg: arguments[1],
                    defaultValue: arguments[2]
                }, Xa(a.predicate)) {
            var b = a.predicate;
            a.predicate = nb(b, a.thisArg, 3)
        }
        return new _e(this, a)
    };
    var bf = function (a) {
        function b(b, c) {
            this.source = b, this._obj = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new cf(a, this._obj, this.source))
        }, b
    }(Sc), cf = function (b) {
        function c(a, c, d) {
            this._o = a, this._obj = c, this._s = d, this._i = 0, this._hv = !1, this._v = null, b.call(this)
        }

        return Vb(c, b), c.prototype.next = function (a) {
            var b = !1;
            if (this._obj.predicate) {
                var c = Za(this._obj.predicate)(a, this._i++, this._s);
                if (c === Ya)return this._o.onError(c.e);
                Boolean(c) && (b = !0)
            } else this._obj.predicate || (b = !0);
            b && (this._hv = !0, this._v = a)
        }, c.prototype.error = function (a) {
            this._o.onError(a)
        }, c.prototype.completed = function () {
            this._hv ? (this._o.onNext(this._v), this._o.onCompleted()) : this._obj.defaultValue === a ? this._o.onError(new db) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
        }, c
    }(Mc);
    Lc.last = function () {
        var a = {};
        if (a = "object" == typeof arguments[0] ? arguments[0] : {
                    predicate: arguments[0],
                    thisArg: arguments[1],
                    defaultValue: arguments[2]
                }, Xa(a.predicate)) {
            var b = a.predicate;
            a.predicate = nb(b, a.thisArg, 3)
        }
        return new bf(this, a)
    };
    var df = function (a) {
        function b(b, c, d, e) {
            this._o = b, this._s = c, this._cb = d, this._y = e, this._i = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = Za(this._cb)(a, this._i, this._s);
            return b === Ya ? this._o.onError(b.e) : void(b ? (this._o.onNext(this._y ? this._i : a), this._o.onCompleted()) : this._i++)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._y && this._o.onNext(-1), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.find = function (a, b) {
        return V(this, a, b, !1)
    }, Lc.findIndex = function (a, b) {
        return V(this, a, b, !0)
    };
    var ef = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new ff(a))
        }, b
    }(Sc), ff = function (a) {
        function b(b) {
            this._o = b, this._s = new Oa.Set, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._s.add(a)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(this._s), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.toSet = function () {
        if ("undefined" == typeof Oa.Set)throw new TypeError;
        return new ef(this)
    };
    var gf = function (a) {
        function b(b, c, d) {
            this.source = b, this._k = c, this._e = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new hf(a, this._k, this._e))
        }, b
    }(Sc), hf = function (a) {
        function b(b, c, d) {
            this._o = b, this._k = c, this._e = d, this._m = new Oa.Map, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = Za(this._k)(a);
            if (b === Ya)return this._o.onError(b.e);
            var c = a;
            return this._e && (c = Za(this._e)(a), c === Ya) ? this._o.onError(c.e) : void this._m.set(b, c)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onNext(this._m), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.toMap = function (a, b) {
        if ("undefined" == typeof Oa.Map)throw new TypeError;
        return new gf(this, a, b)
    };
    var jf = function (a) {
        function b(b, c, d) {
            this.source = b, this._b = c, this._e = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new kf(a, this._b, this._e))
        }, b
    }(Sc), kf = function (a) {
        function b(b, c, d) {
            this._o = b, this._b = c, this._e = d, this._i = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._i >= this._b && (this._e === this._i ? this._o.onCompleted() : this._o.onNext(a)), this._i++
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.slice = function (a, b) {
        var c = a || 0;
        if (0 > c)throw new Pa.ArgumentOutOfRangeError;
        if ("number" == typeof b && c > b)throw new Pa.ArgumentOutOfRangeError;
        return new jf(this, c, b)
    };
    var lf = function (a) {
        function b(b, c, d) {
            this.source = b, this._e = c, this._n = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this._n < 0 ? (a.onNext(-1), a.onCompleted(), cc) : this.source.subscribe(new mf(a, this._e, this._n))
        }, b
    }(Sc), mf = function (a) {
        function b(b, c, d) {
            this._o = b, this._e = c, this._n = d, this._v = 0, this._hv = !1, this._i = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._i >= this._n && a === this._e && (this._hv = !0, this._v = this._i), this._i++
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._hv ? this._o.onNext(this._v) : this._o.onNext(-1), this._o.onCompleted()
        }, b
    }(Mc);
    Lc.lastIndexOf = function (a, b) {
        var c = +b || 0;
        return Math.abs(c) === 1 / 0 && (c = 0), new lf(this, a, c)
    }, Rc.wrap = function (a) {
        function b() {
            return Rc.spawn.call(this, a.apply(this, arguments))
        }

        return b.__generatorFunction__ = a, b
    };
    var nf = Rc.spawn = function () {
        for (var a = arguments[0], b = this, c = [], d = 1, e = arguments.length; e > d; d++)c.push(arguments[d]);
        return new ug(function (d) {
            function e(b) {
                var c = Za(a.next).call(a, b);
                return c === Ya ? d.onError(c.e) : void g(c)
            }

            function f(b) {
                var c = Za(a.next).call(a, b);
                return c === Ya ? d.onError(c.e) : void g(c)
            }

            function g(a) {
                if (a.done)return d.onNext(a.value), void d.onCompleted();
                var c = W.call(b, a.value), g = null, i = !1;
                Rc.isObservable(c) ? h.add(c.subscribe(function (a) {
                    i = !0, g = a
                }, f, function () {
                    i && e(g)
                })) : f(new TypeError("type not supported"))
            }

            var h = new $b;
            return Xa(a) && (a = a.apply(b, c)), a && Xa(a.next) ? (e(), h) : (d.onNext(a), d.onCompleted())
        })
    };
    Rc.start = function (a, b, c) {
        return of(a, b, c)()
    };
    var of = Rc.toAsync = function (a, b, c) {
        return oc(c) || (c = Ac), function () {
            var d = arguments, e = new zg;
            return c.schedule(null, function () {
                var c;
                try {
                    c = a.apply(b, d)
                } catch (f) {
                    return void e.onError(f)
                }
                e.onNext(c), e.onCompleted()
            }), e.asObservable()
        }
    };
    Rc.fromCallback = function (a, b, c) {
        return function () {
            "undefined" == typeof b && (b = this);
            for (var d = arguments.length, e = new Array(d), f = 0; d > f; f++)e[f] = arguments[f];
            return ba(a, b, c, e)
        }
    }, Rc.fromNodeCallback = function (a, b, c) {
        return function () {
            "undefined" == typeof b && (b = this);
            for (var d = arguments.length, e = new Array(d), f = 0; d > f; f++)e[f] = arguments[f];
            return da(a, b, c, e)
        }
    }, ga.prototype.dispose = function () {
        this.isDisposed || (this._e.removeEventListener(this._n, this._fn, !1), this.isDisposed = !0)
    }, Pa.config.useNativeEvents = !1;
    var pf = function (a) {
        function b(b, c, d) {
            this._el = b, this._n = c, this._fn = d, a.call(this)
        }

        function c(a, b) {
            return function () {
                var c = arguments[0];
                return Xa(b) && (c = Za(b).apply(null, arguments), c === Ya) ? a.onError(c.e) : void a.onNext(c)
            }
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return ha(this._el, this._n, c(a, this._fn))
        }, b
    }(Sc);
    Rc.fromEvent = function (a, b, c) {
        return a.addListener ? rf(function (c) {
            a.addListener(b, c)
        }, function (c) {
            a.removeListener(b, c)
        }, c) : Pa.config.useNativeEvents || "function" != typeof a.on || "function" != typeof a.off ? new pf(a, b, c).publish().refCount() : rf(function (c) {
            a.on(b, c)
        }, function (c) {
            a.off(b, c)
        }, c)
    };
    var qf = function (a) {
        function b(b, c, d) {
            this._add = b, this._del = c, this._fn = d, a.call(this)
        }

        function c(a, b) {
            return function () {
                var c = arguments[0];
                return Xa(b) && (c = Za(b).apply(null, arguments), c === Ya) ? a.onError(c.e) : void a.onNext(c)
            }
        }

        function d(a, b, c) {
            this._del = a, this._fn = b, this._ret = c, this.isDisposed = !1
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = c(a, this._fn), e = this._add(b);
            return new d(this._del, b, e)
        }, d.prototype.dispose = function () {
            this.isDisposed || Xa(this._del) && this._del(this._fn, this._ret)
        }, b
    }(Sc), rf = Rc.fromEventPattern = function (a, b, c) {
        return new qf(a, b, c).publish().refCount()
    };
    Rc.startAsync = function (a) {
        var b = Za(a)();
        return b === Ya ? xd(b.e) : cd(b)
    };
    var sf = function (a) {
        function b(b, c) {
            this.source = b, this.controller = new yg, c && c.subscribe ? this.pauser = this.controller.merge(c) : this.pauser = this.controller, a.call(this)
        }

        return Vb(b, a), b.prototype._subscribe = function (a) {
            var b = this.source.publish(), c = b.subscribe(a), d = cc, e = this.pauser.distinctUntilChanged().subscribe(function (a) {
                a ? d = b.connect() : (d.dispose(), d = cc)
            });
            return new jc([c, d, e])
        }, b.prototype.pause = function () {
            this.controller.onNext(!1)
        }, b.prototype.resume = function () {
            this.controller.onNext(!0)
        }, b
    }(Rc);
    Lc.pausable = function (a) {
        return new sf(this, a)
    };
    var tf = function (b) {
        function c(a, c) {
            this.source = a, this.controller = new yg, c && c.subscribe ? this.pauser = this.controller.merge(c) : this.pauser = this.controller, b.call(this)
        }

        return Vb(c, b), c.prototype._subscribe = function (b) {
            function c() {
                for (; e.length > 0;)b.onNext(e.shift())
            }

            var d, e = [], f = ia(this.source, this.pauser.startWith(!1).distinctUntilChanged(), function (a, b) {
                return {data: a, shouldFire: b}
            }).subscribe(function (f) {
                d !== a && f.shouldFire !== d ? (d = f.shouldFire, f.shouldFire && c()) : (d = f.shouldFire, f.shouldFire ? b.onNext(f.data) : e.push(f.data))
            }, function (a) {
                c(), b.onError(a)
            }, function () {
                c(), b.onCompleted()
            });
            return f
        }, c.prototype.pause = function () {
            this.controller.onNext(!1)
        }, c.prototype.resume = function () {
            this.controller.onNext(!0)
        }, c
    }(Rc);
    Lc.pausableBuffered = function (a) {
        return new tf(this, a)
    };
    var uf = function (a) {
        function b(b, c, d) {
            a.call(this), this.subject = new vf(c, d), this.source = b.multicast(this.subject).refCount()
        }

        return Vb(b, a), b.prototype._subscribe = function (a) {
            return this.source.subscribe(a)
        }, b.prototype.request = function (a) {
            return this.subject.request(null == a ? -1 : a)
        }, b
    }(Rc), vf = function (a) {
        function b(b, c) {
            null == b && (b = !0), a.call(this), this.subject = new yg, this.enableQueue = b, this.queue = b ? [] : null, this.requestedCount = 0, this.requestedDisposable = null, this.error = null, this.hasFailed = !1, this.hasCompleted = !1, this.scheduler = c || vc
        }

        return Vb(b, a), Wb(b.prototype, Jc, {
            _subscribe: function (a) {
                return this.subject.subscribe(a)
            }, onCompleted: function () {
                this.hasCompleted = !0, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Cc.createOnCompleted()) : (this.subject.onCompleted(), this.disposeCurrentRequest())
            }, onError: function (a) {
                this.hasFailed = !0, this.error = a, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Cc.createOnError(a)) : (this.subject.onError(a), this.disposeCurrentRequest())
            }, onNext: function (a) {
                this.requestedCount <= 0 ? this.enableQueue && this.queue.push(Cc.createOnNext(a)) : (0 === this.requestedCount-- && this.disposeCurrentRequest(), this.subject.onNext(a))
            }, _processRequest: function (a) {
                if (this.enableQueue)for (; this.queue.length > 0 && (a > 0 || "N" !== this.queue[0].kind);) {
                    var b = this.queue.shift();
                    b.accept(this.subject), "N" === b.kind ? a-- : (this.disposeCurrentRequest(), this.queue = [])
                }
                return a
            }, request: function (a) {
                this.disposeCurrentRequest();
                var b = this;
                return this.requestedDisposable = this.scheduler.schedule(a, function (a, c) {
                    var d = b._processRequest(c), e = b.hasCompleted || b.hasFailed;
                    return !e && d > 0 ? (b.requestedCount = d, bc(function () {
                        b.requestedCount = 0
                    })) : void 0
                }), this.requestedDisposable
            }, disposeCurrentRequest: function () {
                this.requestedDisposable && (this.requestedDisposable.dispose(), this.requestedDisposable = null)
            }
        }), b
    }(Rc);
    Lc.controlled = function (a, b) {
        return a && oc(a) && (b = a, a = !0), null == a && (a = !0), new uf(this, a, b)
    };
    var wf = function (a) {
        function b(b) {
            a.call(this), this.source = b
        }

        function c(a, b) {
            b.source.request(1)
        }

        Vb(b, a), b.prototype._subscribe = function (a) {
            return this.subscription = this.source.subscribe(new d(a, this, this.subscription)), new ic(this.subscription, Ac.schedule(this, c))
        };
        var d = function (a) {
            function c(b, c, d) {
                a.call(this), this.observer = b, this.observable = c, this.cancel = d, this.scheduleDisposable = null
            }

            function d(a, b) {
                b.observable.source.request(1)
            }

            return Vb(c, a), c.prototype.completed = function () {
                this.observer.onCompleted(), this.dispose()
            }, c.prototype.error = function (a) {
                this.observer.onError(a), this.dispose()
            }, c.prototype.next = function (a) {
                this.observer.onNext(a), this.scheduleDisposable = Ac.schedule(this, d)
            }, b.dispose = function () {
                this.observer = null, this.cancel && (this.cancel.dispose(), this.cancel = null), this.scheduleDisposable && (this.scheduleDisposable.dispose(), this.scheduleDisposable = null), a.prototype.dispose.call(this)
            }, c
        }(Mc);
        return b
    }(Rc);
    uf.prototype.stopAndWait = function () {
        return new wf(this)
    };
    var xf = function (a) {
        function b(b, c) {
            a.call(this), this.source = b, this.windowSize = c
        }

        function c(a, b) {
            b.source.request(b.windowSize)
        }

        Vb(b, a), b.prototype._subscribe = function (a) {
            return this.subscription = this.source.subscribe(new d(a, this, this.subscription)), new ic(this.subscription, Ac.schedule(this, c))
        };
        var d = function (a) {
            function b(b, c, d) {
                this.observer = b, this.observable = c, this.cancel = d, this.received = 0, this.scheduleDisposable = null, a.call(this)
            }

            function c(a, b) {
                b.observable.source.request(b.observable.windowSize)
            }

            return Vb(b, a), b.prototype.completed = function () {
                this.observer.onCompleted(), this.dispose()
            }, b.prototype.error = function (a) {
                this.observer.onError(a), this.dispose()
            }, b.prototype.next = function (a) {
                this.observer.onNext(a), this.received = ++this.received % this.observable.windowSize, 0 === this.received && (this.scheduleDisposable = Ac.schedule(this, c))
            }, b.prototype.dispose = function () {
                this.observer = null, this.cancel && (this.cancel.dispose(), this.cancel = null), this.scheduleDisposable && (this.scheduleDisposable.dispose(), this.scheduleDisposable = null), a.prototype.dispose.call(this)
            }, b
        }(Mc);
        return b
    }(Rc);
    uf.prototype.windowed = function (a) {
        return new xf(this, a)
    }, Lc.pipe = function (a) {
        function b() {
            c.resume()
        }

        var c = this.pausableBuffered();
        return a.addListener("drain", b), c.subscribe(function (b) {
            !a.write(String(b)) && c.pause()
        }, function (b) {
            a.emit("error", b)
        }, function () {
            !a._isStdio && a.end(), a.removeListener("drain", b)
        }), c.resume(), a
    };
    var yf = function (a) {
        function b(b, c, d) {
            this.source = b, this._fn1 = c, this._fn2 = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = this.source.multicast(this._fn1());
            return new ic(this._fn2(b).subscribe(a), b.connect())
        }, b
    }(Sc);
    Lc.multicast = function (a, b) {
        return Xa(a) ? new yf(this, a, b) : new Bf(this, a)
    }, Lc.publish = function (a) {
        return a && Xa(a) ? this.multicast(function () {
            return new yg
        }, a) : this.multicast(new yg)
    }, Lc.share = function () {
        return this.publish().refCount()
    }, Lc.publishLast = function (a) {
        return a && Xa(a) ? this.multicast(function () {
            return new zg
        }, a) : this.multicast(new zg)
    }, Lc.publishValue = function (a, b) {
        return 2 === arguments.length ? this.multicast(function () {
            return new Ag(b)
        }, a) : this.multicast(new Ag(a))
    }, Lc.shareValue = function (a) {
        return this.publishValue(a).refCount()
    }, Lc.replay = function (a, b, c, d) {
        return a && Xa(a) ? this.multicast(function () {
            return new Bg(b, c, d)
        }, a) : this.multicast(new Bg(b, c, d))
    }, Lc.shareReplay = function (a, b, c) {
        return this.replay(null, a, b, c).refCount()
    };
    var zf = function (a, b) {
        this._s = a, this._o = b
    };
    zf.prototype.dispose = function () {
        if (!this._s.isDisposed && null !== this._o) {
            var a = this._s.observers.indexOf(this._o);
            this._s.observers.splice(a, 1), this._o = null
        }
    };
    var Af = function (a) {
        function b(b) {
            this.source = b, this._count = 0, this._connectableSubscription = null, a.call(this)
        }

        function c(a, b) {
            this._p = a, this._s = b, this.isDisposed = !1
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = this.source.subscribe(a);
            return 1 === ++this._count && (this._connectableSubscription = this.source.connect()), new c(this, b)
        }, c.prototype.dispose = function () {
            this.isDisposed || (this.isDisposed = !0, this._s.dispose(), 0 === --this._p._count && this._p._connectableSubscription.dispose())
        }, b
    }(Sc), Bf = Pa.ConnectableObservable = function (a) {
        function b(b, c) {
            this.source = b, this._connection = null, this._source = b.asObservable(), this._subject = c, a.call(this)
        }

        function c(a, b) {
            this._p = a, this._s = b
        }

        return Vb(b, a), c.prototype.dispose = function () {
            this._s && (this._s.dispose(), this._s = null, this._p._connection = null)
        }, b.prototype.connect = function () {
            if (!this._connection) {
                var a = this._source.subscribe(this._subject);
                this._connection = new c(this, a)
            }
            return this._connection
        }, b.prototype._subscribe = function (a) {
            return this._subject.subscribe(a)
        }, b.prototype.refCount = function () {
            return new Af(this)
        }, b
    }(Rc);
    Lc.singleInstance = function () {
        function a() {
            return d || (d = !0, b = c["finally"](function () {
                d = !1
            }).publish().refCount()), b
        }

        var b, c = this, d = !1;
        return new ug(function (b) {
            return a().subscribe(b)
        })
    }, Lc.join = function (a, b, c, d) {
        var e = this;
        return new ug(function (f) {
            var g = new $b, h = !1, i = !1, j = 0, k = 0, l = new Lf, m = new Lf, n = function (a) {
                f.onError(a)
            };
            return g.add(e.subscribe(function (a) {
                var c = j++, e = new gc;
                l.set(c, a), g.add(e);
                var i = Za(b)(a);
                return i === Ya ? f.onError(i.e) : (e.setDisposable(i.take(1).subscribe(Qa, n, function () {
                    l["delete"](c) && 0 === l.size && h && f.onCompleted(), g.remove(e)
                })), void m.forEach(function (b) {
                    var c = Za(d)(a, b);
                    return c === Ya ? f.onError(c.e) : void f.onNext(c)
                }))
            }, n, function () {
                h = !0, (i || 0 === l.size) && f.onCompleted()
            })), g.add(a.subscribe(function (a) {
                var b = k++, e = new gc;
                m.set(b, a), g.add(e);
                var h = Za(c)(a);
                return h === Ya ? f.onError(h.e) : (e.setDisposable(h.take(1).subscribe(Qa, n, function () {
                    m["delete"](b) && 0 === m.size && i && f.onCompleted(), g.remove(e)
                })), void l.forEach(function (b) {
                    var c = Za(d)(b, a);
                    return c === Ya ? f.onError(c.e) : void f.onNext(c)
                }))
            }, n, function () {
                i = !0, (h || 0 === m.size) && f.onCompleted()
            })), g
        }, e)
    }, Lc.groupJoin = function (a, b, c, d) {
        var e = this;
        return new ug(function (f) {
            function g(a) {
            }

            var h = new $b, i = new kc(h), j = new Lf, k = new Lf, l = 0, m = 0, g = function (a) {
                return function (b) {
                    b.onError(a)
                }
            };
            return h.add(e.subscribe(function (a) {
                var c = new yg, e = l++;
                j.set(e, c);
                var m = Za(d)(a, Xb(c, i));
                if (m === Ya)return j.forEach(g(m.e)), f.onError(m.e);
                f.onNext(m), k.forEach(function (a) {
                    c.onNext(a)
                });
                var n = new gc;
                h.add(n);
                var o = Za(b)(a);
                return o === Ya ? (j.forEach(g(o.e)), f.onError(o.e)) : void n.setDisposable(o.take(1).subscribe(Qa, function (a) {
                    j.forEach(g(a)), f.onError(a)
                }, function () {
                    j["delete"](e) && c.onCompleted(), h.remove(n)
                }))
            }, function (a) {
                j.forEach(g(a)), f.onError(a)
            }, function () {
                f.onCompleted()
            })), h.add(a.subscribe(function (a) {
                var b = m++;
                k.set(b, a);
                var d = new gc;
                h.add(d);
                var e = Za(c)(a);
                return e === Ya ? (j.forEach(g(e.e)), f.onError(e.e)) : (d.setDisposable(e.take(1).subscribe(Qa, function (a) {
                    j.forEach(g(a)), f.onError(a)
                }, function () {
                    k["delete"](b), h.remove(d)
                })), void j.forEach(function (b) {
                    b.onNext(a)
                }))
            }, function (a) {
                j.forEach(g(a)), f.onError(a)
            })), i
        }, e)
    }, Lc.buffer = function () {
        return this.window.apply(this, arguments).flatMap(O)
    }, Lc.window = function (a, b) {
        return 1 === arguments.length && "function" != typeof arguments[0] ? ka.call(this, a) : "function" == typeof a ? la.call(this, a) : ja.call(this, a, b)
    };
    var Cf = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Df(a))
        }, b
    }(Sc), Df = function (a) {
        function b(b) {
            this._o = b, this._p = null, this._hp = !1, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._hp ? this._o.onNext([this._p, a]) : this._hp = !0, this._p = a
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.pairwise = function () {
        return new Cf(this)
    }, Lc.partition = function (a, b) {
        var c = nb(a, b, 3);
        return [this.filter(a, b), this.filter(function (a, b, d) {
            return !c(a, b, d)
        })]
    };
    var Ef = function (a) {
        function b(a, b) {
            this.c = a, this.s = b
        }

        return Vb(b, a), b.prototype[jb] = function () {
            var a = this;
            return {
                next: function () {
                    return a.c() ? {done: !1, value: a.s} : {done: !0, value: void 0}
                }
            }
        }, b
    }(Uc);
    Lc.letBind = Lc.let = function (a) {
        return a(this)
    }, Rc["if"] = function (a, b, c) {
        return fd(function () {
            return c || (c = id()), Wa(b) && (b = cd(b)), Wa(c) && (c = cd(c)), "function" == typeof c.now && (c = id(c)), a() ? b : c
        })
    }, Rc["for"] = Rc.forIn = function (a, b, c) {
        return $c(a, b, c).concat()
    };
    var Ff = Rc["while"] = Rc.whileDo = function (a, b) {
        return Wa(b) && (b = cd(b)), ma(a, b).concat()
    };
    Lc.doWhile = function (a) {
        return Hd([this, Ff(a, this)])
    }, Rc["case"] = function (a, b, c) {
        return fd(function () {
            Wa(c) && (c = cd(c)), c || (c = id()), oc(c) && (c = id(c));
            var d = b[a()];
            return Wa(d) && (d = cd(d)), d || c
        })
    };
    var Gf = function (a) {
        function b(b, c, d) {
            this.source = b, this._fn = c, this._scheduler = d, a.call(this)
        }

        function c(a, b) {
            var c, d = a[0], e = a[1];
            if (!(d.q.length > 0))return void(d.isAcquired = !1);
            c = d.q.shift();
            var f = new gc;
            d.d.add(f), f.setDisposable(c.subscribe(new Hf(d, e, f))), b([d, e])
        }

        return Vb(b, a), b.prototype._ensureActive = function (a) {
            var b = !1;
            a.q.length > 0 && (b = !a.isAcquired, a.isAcquired = !0), b && a.m.setDisposable(this._scheduler.scheduleRecursive([a, this], c))
        }, b.prototype.subscribeCore = function (a) {
            var b = new hc, c = new $b(b), d = {q: [], m: b, d: c, activeCount: 0, isAcquired: !1, o: a};
            return d.q.push(this.source), d.activeCount++, this._ensureActive(d), c
        }, b
    }(Sc), Hf = function (a) {
        function b(b, c, d) {
            this._s = b, this._p = c, this._m1 = d, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._s.o.onNext(a);
            var b = Za(this._p._fn)(a);
            return b === Ya ? this._s.o.onError(b.e) : (this._s.q.push(b), this._s.activeCount++, void this._p._ensureActive(this._s))
        }, b.prototype.error = function (a) {
            this._s.o.onError(a)
        }, b.prototype.completed = function () {
            this._s.d.remove(this._m1), this._s.activeCount--, 0 === this._s.activeCount && this._s.o.onCompleted()
        }, b
    }(Mc);
    Lc.expand = function (a, b) {
        return oc(b) || (b = vc), new Gf(this, a, b)
    };
    var If = function (a) {
        function b(b, c) {
            this._sources = b, this._cb = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            if (0 === this._sources.length)return a.onCompleted(), cc;
            for (var b = this._sources.length, c = {
                finished: !1,
                hasResults: new Array(b),
                hasCompleted: new Array(b),
                results: new Array(b)
            }, d = new $b, e = 0, f = this._sources.length; f > e; e++) {
                var g = this._sources[e];
                Wa(g) && (g = cd(g)), d.add(g.subscribe(new Jf(a, c, e, this._cb, d)))
            }
            return d
        }, b
    }(Sc), Jf = function (a) {
        function b(b, c, d, e, f) {
            this._o = b, this._s = c, this._i = d, this._cb = e, this._subs = f, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._s.finished || (this._s.hasResults[this._i] = !0, this._s.results[this._i] = a)
        }, b.prototype.error = function (a) {
            this._s.finished = !0, this._o.onError(a), this._subs.dispose()
        }, b.prototype.completed = function () {
            if (!this._s.finished) {
                if (!this._s.hasResults[this._i])return this._o.onCompleted();
                this._s.hasCompleted[this._i] = !0;
                for (var a = 0; a < this._s.results.length; a++)if (!this._s.hasCompleted[a])return;
                this._s.finished = !0;
                var b = Za(this._cb).apply(null, this._s.results);
                if (b === Ya)return this._o.onError(b.e);
                this._o.onNext(b), this._o.onCompleted()
            }
        }, b
    }(Mc);
    Rc.forkJoin = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        var d = Xa(b[a - 1]) ? b.pop() : L;
        return Array.isArray(b[0]) && (b = b[0]), new If(b, d)
    }, Lc.forkJoin = function () {
        for (var a = arguments.length, b = new Array(a), c = 0; a > c; c++)b[c] = arguments[c];
        return Array.isArray(b[0]) ? b[0].unshift(this) : b.unshift(this), Rc.forkJoin.apply(null, b)
    }, Lc.manySelect = Lc.extend = function (a, b) {
        oc(b) || (b = Pa.Scheduler.immediate);
        var c = this;
        return fd(function () {
            var d;
            return c.map(function (a) {
                var b = new Kf(a);
                return d && d.onNext(a), d = b, b
            }).tap(Qa, function (a) {
                d && d.onError(a)
            }, function () {
                d && d.onCompleted()
            }).observeOn(b).map(a)
        }, c)
    };
    var Kf = function (a) {
        function b(b) {
            a.call(this), this.head = b, this.tail = new zg
        }

        return Vb(b, a), Wb(b.prototype, Jc, {
            _subscribe: function (a) {
                var b = new $b;
                return b.add(vc.schedule(this, function (c, d) {
                    a.onNext(d.head), b.add(d.tail.mergeAll().subscribe(a))
                })), b
            }, onCompleted: function () {
                this.onNext(Rc.empty())
            }, onError: function (a) {
                this.onNext(Rc["throw"](a))
            }, onNext: function (a) {
                this.tail.onNext(a), this.tail.onCompleted()
            }
        }), b
    }(Rc), Lf = Oa.Map || function () {
                function b() {
                    this.size = 0, this._values = [], this._keys = []
                }

                return b.prototype["delete"] = function (a) {
                    var b = this._keys.indexOf(a);
                    return -1 === b ? !1 : (this._values.splice(b, 1), this._keys.splice(b, 1), this.size--, !0)
                }, b.prototype.get = function (b) {
                    var c = this._keys.indexOf(b);
                    return -1 === c ? a : this._values[c]
                }, b.prototype.set = function (a, b) {
                    var c = this._keys.indexOf(a);
                    return -1 === c ? (this._keys.push(a), this._values.push(b), this.size++) : this._values[c] = b, this
                }, b.prototype.forEach = function (a, b) {
                    for (var c = 0; c < this.size; c++)a.call(b, this._values[c], this._keys[c])
                }, b
            }();
    na.prototype.and = function (a) {
        return new na(this.patterns.concat(a))
    }, na.prototype.thenDo = function (a) {
        return new oa(this, a)
    }, oa.prototype.activate = function (a, b, c) {
        for (var d = [], e = pa(b), f = 0, g = this.expression.patterns.length; g > f; f++)d.push(ra(a, this.expression.patterns[f], e));
        var h = new sa(d, qa(this, b), function () {
            for (var a = 0, b = d.length; b > a; a++)d[a].removeActivePlan(h);
            c(h)
        });
        for (f = 0, g = d.length; g > f; f++)d[f].addActivePlan(h);
        return h
    }, sa.prototype.dequeue = function () {
        this.joinObservers.forEach(function (a) {
            a.queue.shift()
        })
    }, sa.prototype.match = function () {
        var a, b, c = !0;
        for (a = 0, b = this.joinObserverArray.length; b > a; a++)if (0 === this.joinObserverArray[a].queue.length) {
            c = !1;
            break
        }
        if (c) {
            var d = [], e = !1;
            for (a = 0, b = this.joinObserverArray.length; b > a; a++)d.push(this.joinObserverArray[a].queue[0]), "C" === this.joinObserverArray[a].queue[0].kind && (e = !0);
            if (e)this.onCompleted(); else {
                this.dequeue();
                var f = [];
                for (a = 0, b = d.length; a < d.length; a++)f.push(d[a].value);
                this.onNext.apply(this, f)
            }
        }
    };
    var Mf = function (a) {
        function b(b, c) {
            a.call(this), this.source = b, this.onError = c, this.queue = [], this.activePlans = [], this.subscription = new gc, this.isDisposed = !1
        }

        Vb(b, a);
        var c = b.prototype;
        return c.next = function (a) {
            if (!this.isDisposed) {
                if ("E" === a.kind)return this.onError(a.error);
                this.queue.push(a);
                for (var b = this.activePlans.slice(0), c = 0, d = b.length; d > c; c++)b[c].match()
            }
        }, c.error = Qa, c.completed = Qa, c.addActivePlan = function (a) {
            this.activePlans.push(a)
        }, c.subscribe = function () {
            this.subscription.setDisposable(this.source.materialize().subscribe(this))
        }, c.removeActivePlan = function (a) {
            this.activePlans.splice(this.activePlans.indexOf(a), 1), 0 === this.activePlans.length && this.dispose()
        }, c.dispose = function () {
            a.prototype.dispose.call(this), this.isDisposed || (this.isDisposed = !0, this.subscription.dispose())
        }, b
    }(Mc);
    Lc.and = function (a) {
        return new na([this, a])
    }, Lc.thenDo = function (a) {
        return new na([this]).thenDo(a)
    }, Rc.when = function () {
        var a, b = arguments.length;
        if (Array.isArray(arguments[0]))a = arguments[0]; else {
            a = new Array(b);
            for (var c = 0; b > c; c++)a[c] = arguments[c]
        }
        return new ug(function (b) {
            var c = [], d = new Lf, e = Kc(function (a) {
                b.onNext(a)
            }, function (a) {
                d.forEach(function (b) {
                    b.onError(a)
                }), b.onError(a)
            }, function (a) {
                b.onCompleted()
            });
            try {
                for (var f = 0, g = a.length; g > f; f++)c.push(a[f].activate(d, e, function (a) {
                    var d = c.indexOf(a);
                    c.splice(d, 1), 0 === c.length && b.onCompleted()
                }))
            } catch (h) {
                xd(h).subscribe(b)
            }
            var i = new $b;
            return d.forEach(function (a) {
                a.subscribe(), i.add(a)
            }), i
        })
    };
    var Nf = function (a) {
        function b(b, c) {
            this._dt = b, this._s = c, a.call(this)
        }

        function c(a, b) {
            b.onNext(0), b.onCompleted()
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this._s.scheduleFuture(a, this._dt, c)
        }, b
    }(Sc), Of = Rc.interval = function (a, b) {
        return va(a, a, oc(b) ? b : Ac)
    };
    Rc.timer = function (b, c, d) {
        var e;
        return oc(d) || (d = Ac), null != c && "number" == typeof c ? e = c : oc(c) && (d = c), (b instanceof Date || "number" == typeof b) && e === a ? ta(b, d) : b instanceof Date && e !== a ? ua(b.getTime(), c, d) : va(b, e, d)
    };
    Lc.delay = function () {
        var a = arguments[0];
        if ("number" == typeof a || a instanceof Date) {
            var b = a, c = arguments[1];
            return oc(c) || (c = Ac), b instanceof Date ? xa(this, b, c) : wa(this, b, c)
        }
        if (Rc.isObservable(a) || Xa(a))return ya(this, a, arguments[1]);
        throw new Error("Invalid arguments")
    };
    var Pf = function (a) {
        function b(b, c, d) {
            oc(d) || (d = Ac), this.source = b, this._dt = c, this._s = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new hc;
            return new ic(this.source.subscribe(new Qf(a, this._dt, this._s, b)), b)
        }, b
    }(Sc), Qf = function (a) {
        function b(b, c, d, e) {
            this._o = b, this._d = c, this._scheduler = d, this._c = e, this._v = null, this._hv = !1, this._id = 0, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._hv = !0, this._v = a;
            var b = ++this._id, c = new gc;
            this._c.setDisposable(c), c.setDisposable(this._scheduler.scheduleFuture(this, this._d, function (c, d) {
                d._hv && d._id === b && d._o.onNext(a), d._hv = !1
            }))
        }, b.prototype.error = function (a) {
            this._c.dispose(), this._o.onError(a), this._hv = !1, this._id++
        }, b.prototype.completed = function () {
            this._c.dispose(), this._hv && this._o.onNext(this._v), this._o.onCompleted(), this._hv = !1, this._id++
        }, b
    }(Mc);
    Lc.debounce = function () {
        if (Xa(arguments[0]))return za(this, arguments[0]);
        if ("number" == typeof arguments[0])return new Pf(this, arguments[0], arguments[1]);
        throw new Error("Invalid arguments")
    }, Lc.windowWithTime = function (a, b, c) {
        var d, e = this;
        return null == b && (d = a), oc(c) || (c = Ac), "number" == typeof b ? d = b : oc(b) && (d = a, c = b), new ug(function (b) {
            function f() {
                var a = new gc, e = !1, g = !1;
                l.setDisposable(a), j === i ? (e = !0, g = !0) : i > j ? e = !0 : g = !0;
                var n = e ? j : i, o = n - m;
                m = n, e && (j += d), g && (i += d), a.setDisposable(c.scheduleFuture(null, o, function () {
                    if (g) {
                        var a = new yg;
                        k.push(a), b.onNext(Xb(a, h))
                    }
                    e && k.shift().onCompleted(), f()
                }))
            }

            var g, h, i = d, j = a, k = [], l = new hc, m = 0;
            return g = new $b(l), h = new kc(g), k.push(new yg), b.onNext(Xb(k[0], h)), f(), g.add(e.subscribe(function (a) {
                for (var b = 0, c = k.length; c > b; b++)k[b].onNext(a)
            }, function (a) {
                for (var c = 0, d = k.length; d > c; c++)k[c].onError(a);
                b.onError(a)
            }, function () {
                for (var a = 0, c = k.length; c > a; a++)k[a].onCompleted();
                b.onCompleted()
            })), h
        }, e)
    }, Lc.windowWithTimeOrCount = function (a, b, c) {
        var d = this;
        return oc(c) || (c = Ac), new ug(function (e) {
            function f(b) {
                var d = new gc;
                g.setDisposable(d), d.setDisposable(c.scheduleFuture(null, a, function () {
                    if (b === k) {
                        j = 0;
                        var a = ++k;
                        l.onCompleted(), l = new yg, e.onNext(Xb(l, i)), f(a)
                    }
                }))
            }

            var g = new hc, h = new $b(g), i = new kc(h), j = 0, k = 0, l = new yg;
            return e.onNext(Xb(l, i)), f(0), h.add(d.subscribe(function (a) {
                var c = 0, d = !1;
                l.onNext(a), ++j === b && (d = !0, j = 0, c = ++k, l.onCompleted(), l = new yg, e.onNext(Xb(l, i))), d && f(c)
            }, function (a) {
                l.onError(a), e.onError(a)
            }, function () {
                l.onCompleted(), e.onCompleted()
            })), i
        }, d)
    }, Lc.bufferWithTime = function (a, b, c) {
        return this.windowWithTime(a, b, c).flatMap(O)
    }, Lc.bufferWithTimeOrCount = function (a, b, c) {
        return this.windowWithTimeOrCount(a, b, c).flatMap(O)
    };
    var Rf = function (a) {
        function b(b, c) {
            this.source = b, this._s = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Sf(a, this._s))
        }, b
    }(Sc), Sf = function (a) {
        function b(b, c) {
            this._o = b, this._s = c, this._l = c.now(), a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = this._s.now(), c = b - this._l;
            this._l = b, this._o.onNext({value: a, interval: c})
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.timeInterval = function (a) {
        return oc(a) || (a = Ac), new Rf(this, a)
    };
    var Tf = function (a) {
        function b(b, c) {
            this.source = b, this._s = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new Uf(a, this._s))
        }, b
    }(Sc), Uf = function (a) {
        function b(b, c) {
            this._o = b, this._s = c, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._o.onNext({value: a, timestamp: this._s.now()})
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.timestamp = function (a) {
        return oc(a) || (a = Ac), new Tf(this, a)
    };
    var Vf = function (a) {
        function b(b, c) {
            this.source = b, this._sampler = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = {o: a, atEnd: !1, value: null, hasValue: !1, sourceSubscription: new gc};
            return b.sourceSubscription.setDisposable(this.source.subscribe(new Xf(b))), new ic(b.sourceSubscription, this._sampler.subscribe(new Wf(b)))
        }, b
    }(Sc), Wf = function (a) {
        function b(b) {
            this._s = b, a.call(this)
        }

        return Vb(b, a), b.prototype._handleMessage = function () {
            this._s.hasValue && (this._s.hasValue = !1, this._s.o.onNext(this._s.value)), this._s.atEnd && this._s.o.onCompleted()
        }, b.prototype.next = function () {
            this._handleMessage()
        }, b.prototype.error = function (a) {
            this._s.onError(a)
        }, b.prototype.completed = function () {
            this._handleMessage()
        }, b
    }(Mc), Xf = function (a) {
        function b(b) {
            this._s = b, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._s.hasValue = !0, this._s.value = a
        }, b.prototype.error = function (a) {
            this._s.o.onError(a)
        }, b.prototype.completed = function () {
            this._s.atEnd = !0, this._s.sourceSubscription.dispose()
        }, b
    }(Mc);
    Lc.sample = function (a, b) {
        return oc(b) || (b = Ac), "number" == typeof a ? new Vf(this, Of(a, b)) : new Vf(this, a)
    };
    var Yf = Pa.TimeoutError = function (a) {
        this.message = a || "Timeout has occurred", this.name = "TimeoutError", Error.call(this)
    };
    Yf.prototype = Object.create(Error.prototype), Lc.timeout = function () {
        var a = arguments[0];
        if (a instanceof Date || "number" == typeof a)return Ba(this, a, arguments[1], arguments[2]);
        if (Rc.isObservable(a) || Xa(a))return Aa(this, a, arguments[1], arguments[2]);
        throw new Error("Invalid arguments")
    };
    var Zf = function (a) {
        function b(b, c, d, e, f, g) {
            this._state = b, this._cndFn = c, this._itrFn = d, this._resFn = e, this._timeFn = f, this._s = g, a.call(this)
        }

        function c(a, b) {
            if (a.hasResult && a.o.onNext(a.newState), a.first)a.first = !1; else if (a.newState = Za(a.self._itrFn)(a.newState), a.newState === Ya)return a.o.onError(a.newState.e);
            if (a.hasResult = Za(a.self._cndFn)(a.newState), a.hasResult === Ya)return a.o.onError(a.hasResult.e);
            if (a.hasResult) {
                var c = Za(a.self._resFn)(a.newState);
                if (c === Ya)return a.o.onError(c.e);
                var d = Za(a.self._timeFn)(a.newState);
                if (d === Ya)return a.o.onError(d.e);
                b(a, d)
            } else a.o.onCompleted()
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = {o: a, self: this, newState: this._state, first: !0, hasValue: !1};
            return this._s.scheduleRecursiveFuture(b, new Date(this._s.now()), c)
        }, b
    }(Sc);
    Rc.generateWithAbsoluteTime = function (a, b, c, d, e, f) {
        return oc(f) || (f = Ac), new Zf(a, b, c, d, e, f)
    };
    var $f = function (a) {
        function b(b, c, d, e, f, g) {
            this._state = b, this._cndFn = c, this._itrFn = d, this._resFn = e, this._timeFn = f, this._s = g, a.call(this)
        }

        function c(a, b) {
            if (a.hasResult && a.o.onNext(a.newState), a.first)a.first = !1; else if (a.newState = Za(a.self._itrFn)(a.newState), a.newState === Ya)return a.o.onError(a.newState.e);
            if (a.hasResult = Za(a.self._cndFn)(a.newState), a.hasResult === Ya)return a.o.onError(a.hasResult.e);
            if (a.hasResult) {
                var c = Za(a.self._resFn)(a.newState);
                if (c === Ya)return a.o.onError(c.e);
                var d = Za(a.self._timeFn)(a.newState);
                if (d === Ya)return a.o.onError(d.e);
                b(a, d)
            } else a.o.onCompleted()
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = {o: a, self: this, newState: this._state, first: !0, hasValue: !1};
            return this._s.scheduleRecursiveFuture(b, 0, c)
        }, b
    }(Sc);
    Rc.generateWithRelativeTime = function (a, b, c, d, e, f) {
        return oc(f) || (f = Ac), new $f(a, b, c, d, e, f)
    };
    var _f = function (a) {
        function b(b, c, d) {
            this.source = b, this._dt = c, this._s = d, a.call(this)
        }

        function c(a, b) {
            var c = b[0], d = b[1], e = b[2];
            e.setDisposable(c.subscribe(d))
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new hc;
            return b.setDisposable(this._s.scheduleFuture([this.source, a, b], this._dt, c)), b
        }, b
    }(Sc);
    Lc.delaySubscription = function (a, b) {
        return oc(b) || (b = Ac), new _f(this, a, b)
    };
    var ag = function (a) {
        function b(b, c, d) {
            this.source = b, this._d = c, this._s = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new bg(a, this))
        }, b
    }(Sc), bg = function (a) {
        function b(b, c) {
            this._o = b, this._s = c._s, this._d = c._d, this._q = [], a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = this._s.now();
            for (this._q.push({
                interval: b,
                value: a
            }); this._q.length > 0 && b - this._q[0].interval >= this._d;)this._o.onNext(this._q.shift().value)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            for (var a = this._s.now(); this._q.length > 0 && a - this._q[0].interval >= this._d;)this._o.onNext(this._q.shift().value);
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.skipLastWithTime = function (a, b) {
        return oc(b) || (b = Ac), new ag(this, a, b)
    };
    var cg = function (a) {
        function b(b, c, d) {
            this.source = b, this._d = c, this._s = d, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this.source.subscribe(new dg(a, this._d, this._s))
        }, b
    }(Sc), dg = function (a) {
        function b(b, c, d) {
            this._o = b, this._d = c, this._s = d, this._q = [], a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = this._s.now();
            for (this._q.push({
                interval: b,
                value: a
            }); this._q.length > 0 && b - this._q[0].interval >= this._d;)this._q.shift()
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            for (var a = this._s.now(); this._q.length > 0;) {
                var b = this._q.shift();
                a - b.interval <= this._d && this._o.onNext(b.value)
            }
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.takeLastWithTime = function (a, b) {
        return oc(b) || (b = Ac), new cg(this, a, b)
    }, Lc.takeLastBufferWithTime = function (a, b) {
        var c = this;
        return oc(b) || (b = Ac), new ug(function (d) {
            var e = [];
            return c.subscribe(function (c) {
                var d = b.now();
                for (e.push({interval: d, value: c}); e.length > 0 && d - e[0].interval >= a;)e.shift()
            }, function (a) {
                d.onError(a)
            }, function () {
                for (var c = b.now(), f = []; e.length > 0;) {
                    var g = e.shift();
                    c - g.interval <= a && f.push(g.value)
                }
                d.onNext(f), d.onCompleted()
            })
        }, c)
    };
    var eg = function (a) {
        function b(b, c, d) {
            this.source = b, this._d = c, this._s = d, a.call(this)
        }

        function c(a, b) {
            b.onCompleted()
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return new ic(this._s.scheduleFuture(a, this._d, c), this.source.subscribe(a))
        }, b
    }(Sc);
    Lc.takeWithTime = function (a, b) {
        return oc(b) || (b = Ac), new eg(this, a, b)
    };
    var fg = function (a) {
        function b(b, c, d) {
            this.source = b, this._d = c, this._s = d, this._open = !1, a.call(this)
        }

        function c(a, b) {
            b._open = !0
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return new ic(this._s.scheduleFuture(this, this._d, c), this.source.subscribe(new gg(a, this)))
        }, b
    }(Sc), gg = function (a) {
        function b(b, c) {
            this._o = b, this._p = c, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._p._open && this._o.onNext(a)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.skipWithTime = function (a, b) {
        return oc(b) || (b = Ac), new fg(this, a, b)
    };
    var hg = function (a) {
        function b(b, c, d) {
            this.source = b, this._st = c, this._s = d, a.call(this)
        }

        function c(a, b) {
            b._open = !0
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return this._open = !1, new ic(this._s.scheduleFuture(this, this._st, c), this.source.subscribe(new ig(a, this)))
        }, b
    }(Sc), ig = function (a) {
        function b(b, c) {
            this._o = b, this._p = c, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            this._p._open && this._o.onNext(a)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._o.onCompleted()
        }, b
    }(Mc);
    Lc.skipUntilWithTime = function (a, b) {
        return oc(b) || (b = Ac), new hg(this, a, b)
    }, Lc.takeUntilWithTime = function (a, b) {
        oc(b) || (b = Ac);
        var c = this;
        return new ug(function (d) {
            return new ic(b.scheduleFuture(d, a, function (a, b) {
                b.onCompleted()
            }), c.subscribe(d))
        }, c)
    }, Lc.throttle = function (a, b) {
        oc(b) || (b = Ac);
        var c = +a || 0;
        if (0 >= c)throw new RangeError("windowDuration cannot be less or equal zero.");
        var d = this;
        return new ug(function (a) {
            var e = 0;
            return d.subscribe(function (d) {
                var f = b.now();
                (0 === e || f - e >= c) && (e = f, a.onNext(d))
            }, function (b) {
                a.onError(b)
            }, function () {
                a.onCompleted()
            })
        }, d)
    };
    var jg = function (a) {
        function b(b, c) {
            this._o = b, this._xform = c, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            var b = Za(this._xform["@@transducer/step"]).call(this._xform, this._o, a);
            b === Ya && this._o.onError(b.e)
        }, b.prototype.error = function (a) {
            this._o.onError(a)
        }, b.prototype.completed = function () {
            this._xform["@@transducer/result"](this._o)
        }, b
    }(Mc);
    Lc.transduce = function (a) {
        var b = this;
        return new ug(function (c) {
            var d = a(Ca(c));
            return b.subscribe(new jg(c, d))
        }, b)
    };
    var kg = function (a) {
        function b(b) {
            this.source = b, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            var b = new gc, c = new $b, d = {hasCurrent: !1, isStopped: !1, o: a, g: c};
            return c.add(b), b.setDisposable(this.source.subscribe(new lg(d))), c
        }, b
    }(Sc), lg = function (a) {
        function b(b) {
            this._s = b, a.call(this)
        }

        function c(b, c) {
            this._s = b, this._i = c, a.call(this)
        }

        return Vb(b, a), b.prototype.next = function (a) {
            if (!this._s.hasCurrent) {
                this._s.hasCurrent = !0, Wa(a) && (a = cd(a));
                var b = new gc;
                this._s.g.add(b), b.setDisposable(a.subscribe(new c(this._s, b)))
            }
        }, b.prototype.error = function (a) {
            this._s.o.onError(a)
        }, b.prototype.completed = function () {
            this._s.isStopped = !0, !this._s.hasCurrent && 1 === this._s.g.length && this._s.o.onCompleted()
        }, Vb(c, a), c.prototype.next = function (a) {
            this._s.o.onNext(a)
        }, c.prototype.error = function (a) {
            this._s.o.onError(a)
        }, c.prototype.completed = function () {
            this._s.g.remove(this._i), this._s.hasCurrent = !1, this._s.isStopped && 1 === this._s.g.length && this._s.o.onCompleted()
        }, b
    }(Mc);
    Lc.switchFirst = function () {
        return new kg(this)
    }, Lc.flatMapFirst = Lc.selectManyFirst = function (a, b, c) {
        return new Tc(this, a, b, c).switchFirst()
    }, Pa.Observable.prototype.flatMapWithMaxConcurrent = function (a, b, c, d) {
        return new Tc(this, b, c, d).merge(a)
    };
    var mg = Pa.VirtualTimeScheduler = function (a) {
        function b(b, c) {
            this.clock = b, this.comparer = c, this.isEnabled = !1, this.queue = new Yb(1024), a.call(this);
        }

        Vb(b, a);
        var c = b.prototype;
        return c.now = function () {
            return this.toAbsoluteTime(this.clock)
        }, c.schedule = function (a, b) {
            return this.scheduleAbsolute(a, this.clock, b)
        }, c.scheduleFuture = function (a, b, c) {
            var d = b instanceof Date ? this.toRelativeTime(b - this.now()) : this.toRelativeTime(b);
            return this.scheduleRelative(a, d, c)
        }, c.add = ib, c.toAbsoluteTime = ib, c.toRelativeTime = ib, c.schedulePeriodic = function (a, b, c) {
            var d = new rc(this, a, b, c);
            return d.start()
        }, c.scheduleRelative = function (a, b, c) {
            var d = this.add(this.clock, b);
            return this.scheduleAbsolute(a, d, c)
        }, c.start = function () {
            if (!this.isEnabled) {
                this.isEnabled = !0;
                do {
                    var a = this.getNext();
                    null !== a ? (this.comparer(a.dueTime, this.clock) > 0 && (this.clock = a.dueTime), a.invoke()) : this.isEnabled = !1
                } while (this.isEnabled)
            }
        }, c.stop = function () {
            this.isEnabled = !1
        }, c.advanceTo = function (a) {
            var b = this.comparer(this.clock, a);
            if (this.comparer(this.clock, a) > 0)throw new fb;
            if (0 !== b && !this.isEnabled) {
                this.isEnabled = !0;
                do {
                    var c = this.getNext();
                    null !== c && this.comparer(c.dueTime, a) <= 0 ? (this.comparer(c.dueTime, this.clock) > 0 && (this.clock = c.dueTime), c.invoke()) : this.isEnabled = !1
                } while (this.isEnabled);
                this.clock = a
            }
        }, c.advanceBy = function (a) {
            var b = this.add(this.clock, a), c = this.comparer(this.clock, b);
            if (c > 0)throw new fb;
            0 !== c && this.advanceTo(b)
        }, c.sleep = function (a) {
            var b = this.add(this.clock, a);
            if (this.comparer(this.clock, b) >= 0)throw new fb;
            this.clock = b
        }, c.getNext = function () {
            for (; this.queue.length > 0;) {
                var a = this.queue.peek();
                if (!a.isCancelled())return a;
                this.queue.dequeue()
            }
            return null
        }, c.scheduleAbsolute = function (a, b, c) {
            function d(a, b) {
                return e.queue.remove(f), c(a, b)
            }

            var e = this, f = new lc(this, a, d, b, this.comparer);
            return this.queue.enqueue(f), f.disposable
        }, b
    }(mc);
    Pa.HistoricalScheduler = function (a) {
        function b(b, c) {
            var d = null == b ? 0 : b, e = c || Ua;
            a.call(this, d, e)
        }

        Vb(b, a);
        var c = b.prototype;
        return c.add = function (a, b) {
            return a + b
        }, c.toAbsoluteTime = function (a) {
            return new Date(a).getTime()
        }, c.toRelativeTime = function (a) {
            return a
        }, b
    }(Pa.VirtualTimeScheduler), Da.prototype.equals = function (a) {
        return a === this ? !0 : null == a ? !1 : "N" !== a.kind ? !1 : this.predicate(a.value)
    }, Ea.prototype.equals = function (a) {
        return a === this ? !0 : null == a ? !1 : "E" !== a.kind ? !1 : this.predicate(a.error)
    };
    var ng = Pa.ReactiveTest = {
        created: 100, subscribed: 200, disposed: 1e3, onNext: function (a, b) {
            return "function" == typeof b ? new og(a, new Da(b)) : new og(a, Cc.createOnNext(b))
        }, onError: function (a, b) {
            return "function" == typeof b ? new og(a, new Ea(b)) : new og(a, Cc.createOnError(b))
        }, onCompleted: function (a) {
            return new og(a, Cc.createOnCompleted())
        }, subscribe: function (a, b) {
            return new pg(a, b)
        }
    }, og = Pa.Recorded = function (a, b, c) {
        this.time = a, this.value = b, this.comparer = c || Ta
    };
    og.prototype.equals = function (a) {
        return this.time === a.time && this.comparer(this.value, a.value)
    }, og.prototype.toString = function () {
        return this.value.toString() + "@" + this.time
    };
    var pg = Pa.Subscription = function (a, b) {
        this.subscribe = a, this.unsubscribe = b || Number.MAX_VALUE
    };
    pg.prototype.equals = function (a) {
        return this.subscribe === a.subscribe && this.unsubscribe === a.unsubscribe
    }, pg.prototype.toString = function () {
        return "(" + this.subscribe + ", " + (this.unsubscribe === Number.MAX_VALUE ? "Infinite" : this.unsubscribe) + ")"
    };
    var qg = Pa.MockDisposable = function (a) {
        this.scheduler = a, this.disposes = [], this.disposes.push(this.scheduler.clock)
    };
    qg.prototype.dispose = function () {
        this.disposes.push(this.scheduler.clock)
    };
    var rg = function (a) {
        function b(b) {
            a.call(this), this.scheduler = b, this.messages = []
        }

        Vb(b, a);
        var c = b.prototype;
        return c.onNext = function (a) {
            this.messages.push(new og(this.scheduler.clock, Cc.createOnNext(a)))
        }, c.onError = function (a) {
            this.messages.push(new og(this.scheduler.clock, Cc.createOnError(a)))
        }, c.onCompleted = function () {
            this.messages.push(new og(this.scheduler.clock, Cc.createOnCompleted()))
        }, b
    }(Jc);
    Fa.prototype.then = function (b, c) {
        var d = this;
        this.subscriptions.push(new pg(this.scheduler.clock));
        var e, f = this.subscriptions.length - 1, g = Pa.Observer.create(function (c) {
            var h = b(c);
            if (h && "function" == typeof h.then)e = h; else {
                var i = d.scheduler.clock;
                e = new Fa(d.scheduler, [Pa.ReactiveTest.onNext(i, a), Pa.ReactiveTest.onCompleted(i)])
            }
            var j = d.observers.indexOf(g);
            d.observers.splice(j, 1), d.subscriptions[f] = new pg(d.subscriptions[f].subscribe, d.scheduler.clock)
        }, function (a) {
            c(a);
            var b = d.observers.indexOf(g);
            d.observers.splice(b, 1), d.subscriptions[f] = new pg(d.subscriptions[f].subscribe, d.scheduler.clock)
        });
        return this.observers.push(g), e || new Fa(this.scheduler, this.messages)
    };
    var sg = function (a) {
        function b(b, c) {
            a.call(this);
            var d, e, f = this;
            this.scheduler = b, this.messages = c, this.subscriptions = [], this.observers = [];
            for (var g = 0, h = this.messages.length; h > g; g++)d = this.messages[g], e = d.value, function (a) {
                b.scheduleAbsolute(null, d.time, function () {
                    for (var b = f.observers.slice(0), c = 0, d = b.length; d > c; c++)a.accept(b[c]);
                    return cc
                })
            }(e)
        }

        return Vb(b, a), b.prototype._subscribe = function (a) {
            var b = this;
            this.observers.push(a), this.subscriptions.push(new pg(this.scheduler.clock));
            var c = this.subscriptions.length - 1;
            return bc(function () {
                var d = b.observers.indexOf(a);
                b.observers.splice(d, 1), b.subscriptions[c] = new pg(b.subscriptions[c].subscribe, b.scheduler.clock)
            })
        }, b
    }(Rc), tg = function (a) {
        function b(b, c) {
            a.call(this), this.scheduler = b, this.messages = c, this.subscriptions = []
        }

        return Vb(b, a), b.prototype._subscribe = function (a) {
            var b, c, d = this;
            this.subscriptions.push(new pg(this.scheduler.clock));
            for (var e = this.subscriptions.length - 1, f = new $b, g = 0, h = this.messages.length; h > g; g++)b = this.messages[g], c = b.value, function (c) {
                f.add(d.scheduler.scheduleRelative(null, b.time, function () {
                    return c.accept(a), cc
                }))
            }(c);
            return bc(function () {
                d.subscriptions[e] = new pg(d.subscriptions[e].subscribe, d.scheduler.clock), f.dispose()
            })
        }, b
    }(Rc);
    Pa.TestScheduler = function (a) {
        function b(a, b) {
            return a > b ? 1 : b > a ? -1 : 0
        }

        function c() {
            a.call(this, 0, b)
        }

        return Vb(c, a), c.prototype.scheduleAbsolute = function (b, c, d) {
            return c <= this.clock && (c = this.clock + 1), a.prototype.scheduleAbsolute.call(this, b, c, d)
        }, c.prototype.add = function (a, b) {
            return a + b
        }, c.prototype.toAbsoluteTime = function (a) {
            return new Date(a).getTime()
        }, c.prototype.toRelativeTime = function (a) {
            return a
        }, c.prototype.startScheduler = function (a, b) {
            b || (b = {}), null == b.created && (b.created = ng.created), null == b.subscribed && (b.subscribed = ng.subscribed), null == b.disposed && (b.disposed = ng.disposed);
            var c, d, e = this.createObserver();
            return this.scheduleAbsolute(null, b.created, function () {
                return c = a(), cc
            }), this.scheduleAbsolute(null, b.subscribed, function () {
                return d = c.subscribe(e), cc
            }), this.scheduleAbsolute(null, b.disposed, function () {
                return d.dispose(), cc
            }), this.start(), e
        }, c.prototype.createHotObservable = function () {
            var a, b = arguments.length;
            if (Array.isArray(arguments[0]))a = arguments[0]; else {
                a = new Array(b);
                for (var c = 0; b > c; c++)a[c] = arguments[c]
            }
            return new sg(this, a)
        }, c.prototype.createColdObservable = function () {
            var a, b = arguments.length;
            if (Array.isArray(arguments[0]))a = arguments[0]; else {
                a = new Array(b);
                for (var c = 0; b > c; c++)a[c] = arguments[c]
            }
            return new tg(this, a)
        }, c.prototype.createResolvedPromise = function (a, b) {
            return new Fa(this, [Pa.ReactiveTest.onNext(a, b), Pa.ReactiveTest.onCompleted(a)])
        }, c.prototype.createRejectedPromise = function (a, b) {
            return new Fa(this, [Pa.ReactiveTest.onError(a, b)])
        }, c.prototype.createObserver = function () {
            return new rg(this)
        }, c
    }(mg);
    var ug = Pa.AnonymousObservable = function (a) {
        function b(a) {
            return a && Xa(a.dispose) ? a : Xa(a) ? bc(a) : cc
        }

        function c(a, c) {
            var d = c[0], f = c[1], g = Za(f.__subscribe).call(f, d);
            g !== Ya || d.fail(Ya.e) || e(Ya.e), d.setDisposable(b(g))
        }

        function d(b, c) {
            this.source = c, this.__subscribe = b, a.call(this)
        }

        return Vb(d, a), d.prototype._subscribe = function (a) {
            var b = new vg(a), d = [b, this];
            return vc.scheduleRequired() ? vc.schedule(d, c) : c(null, d), b
        }, d
    }(Rc), vg = function (a) {
        function b(b) {
            a.call(this), this.observer = b, this.m = new gc
        }

        Vb(b, a);
        var c = b.prototype;
        return c.next = function (a) {
            var b = Za(this.observer.onNext).call(this.observer, a);
            b === Ya && (this.dispose(), e(b.e))
        }, c.error = function (a) {
            var b = Za(this.observer.onError).call(this.observer, a);
            this.dispose(), b === Ya && e(b.e)
        }, c.completed = function () {
            var a = Za(this.observer.onCompleted).call(this.observer);
            this.dispose(), a === Ya && e(a.e)
        }, c.setDisposable = function (a) {
            this.m.setDisposable(a)
        }, c.getDisposable = function () {
            return this.m.getDisposable()
        }, c.dispose = function () {
            a.prototype.dispose.call(this), this.m.dispose()
        }, b
    }(Mc), wg = function (a) {
        function b(b, c) {
            this._m = b, this._u = c, a.call(this)
        }

        return Vb(b, a), b.prototype.subscribeCore = function (a) {
            return new ic(this._m.getDisposable(), this._u.subscribe(a))
        }, b
    }(Sc), xg = function (a) {
        function b(b, c, d) {
            a.call(this), this.key = b, this.underlyingObservable = d ? new wg(d, c) : c
        }

        return Vb(b, a), b.prototype._subscribe = function (a) {
            return this.underlyingObservable.subscribe(a)
        }, b
    }(Rc), yg = Pa.Subject = function (a) {
        function b() {
            a.call(this), this.isDisposed = !1, this.isStopped = !1, this.observers = [], this.hasError = !1
        }

        return Vb(b, a), Wb(b.prototype, Jc.prototype, {
            _subscribe: function (a) {
                return ec(this), this.isStopped ? this.hasError ? (a.onError(this.error), cc) : (a.onCompleted(), cc) : (this.observers.push(a), new zf(this, a))
            }, hasObservers: function () {
                return this.observers.length > 0
            }, onCompleted: function () {
                if (ec(this), !this.isStopped) {
                    this.isStopped = !0;
                    for (var a = 0, b = c(this.observers), d = b.length; d > a; a++)b[a].onCompleted();
                    this.observers.length = 0
                }
            }, onError: function (a) {
                if (ec(this), !this.isStopped) {
                    this.isStopped = !0, this.error = a, this.hasError = !0;
                    for (var b = 0, d = c(this.observers), e = d.length; e > b; b++)d[b].onError(a);
                    this.observers.length = 0
                }
            }, onNext: function (a) {
                if (ec(this), !this.isStopped)for (var b = 0, d = c(this.observers), e = d.length; e > b; b++)d[b].onNext(a)
            }, dispose: function () {
                this.isDisposed = !0, this.observers = null
            }
        }), b.create = function (a, b) {
            return new Cg(a, b)
        }, b
    }(Rc), zg = Pa.AsyncSubject = function (a) {
        function b() {
            a.call(this), this.isDisposed = !1, this.isStopped = !1, this.hasValue = !1, this.observers = [], this.hasError = !1
        }

        return Vb(b, a), Wb(b.prototype, Jc.prototype, {
            _subscribe: function (a) {
                return ec(this), this.isStopped ? (this.hasError ? a.onError(this.error) : this.hasValue ? (a.onNext(this.value), a.onCompleted()) : a.onCompleted(), cc) : (this.observers.push(a), new zf(this, a))
            }, hasObservers: function () {
                return ec(this), this.observers.length > 0
            }, onCompleted: function () {
                var a, b;
                if (ec(this), !this.isStopped) {
                    this.isStopped = !0;
                    var d = c(this.observers), b = d.length;
                    if (this.hasValue)for (a = 0; b > a; a++) {
                        var e = d[a];
                        e.onNext(this.value), e.onCompleted()
                    } else for (a = 0; b > a; a++)d[a].onCompleted();
                    this.observers.length = 0
                }
            }, onError: function (a) {
                if (ec(this), !this.isStopped) {
                    this.isStopped = !0, this.hasError = !0, this.error = a;
                    for (var b = 0, d = c(this.observers), e = d.length; e > b; b++)d[b].onError(a);
                    this.observers.length = 0
                }
            }, onNext: function (a) {
                ec(this), this.isStopped || (this.value = a, this.hasValue = !0)
            }, dispose: function () {
                this.isDisposed = !0, this.observers = null, this.error = null, this.value = null
            }
        }), b
    }(Rc), Ag = Pa.BehaviorSubject = function (a) {
        function b(b) {
            a.call(this), this.value = b, this.observers = [], this.isDisposed = !1, this.isStopped = !1, this.hasError = !1
        }

        return Vb(b, a), Wb(b.prototype, Jc.prototype, {
            _subscribe: function (a) {
                return ec(this), this.isStopped ? (this.hasError ? a.onError(this.error) : a.onCompleted(), cc) : (this.observers.push(a), a.onNext(this.value), new zf(this, a))
            }, getValue: function () {
                return ec(this), this.hasError && e(this.error), this.value
            }, hasObservers: function () {
                return this.observers.length > 0
            }, onCompleted: function () {
                if (ec(this), !this.isStopped) {
                    this.isStopped = !0;
                    for (var a = 0, b = c(this.observers), d = b.length; d > a; a++)b[a].onCompleted();
                    this.observers.length = 0
                }
            }, onError: function (a) {
                if (ec(this), !this.isStopped) {
                    this.isStopped = !0, this.hasError = !0, this.error = a;
                    for (var b = 0, d = c(this.observers), e = d.length; e > b; b++)d[b].onError(a);
                    this.observers.length = 0
                }
            }, onNext: function (a) {
                if (ec(this), !this.isStopped) {
                    this.value = a;
                    for (var b = 0, d = c(this.observers), e = d.length; e > b; b++)d[b].onNext(a)
                }
            }, dispose: function () {
                this.isDisposed = !0, this.observers = null, this.value = null, this.error = null
            }
        }), b
    }(Rc), Bg = Pa.ReplaySubject = function (a) {
        function b(a, b) {
            return bc(function () {
                b.dispose(), !a.isDisposed && a.observers.splice(a.observers.indexOf(b), 1)
            })
        }

        function d(b, c, d) {
            this.bufferSize = null == b ? e : b, this.windowSize = null == c ? e : c, this.scheduler = d || vc, this.q = [], this.observers = [], this.isStopped = !1, this.isDisposed = !1, this.hasError = !1, this.error = null, a.call(this)
        }

        var e = Math.pow(2, 53) - 1;
        return Vb(d, a), Wb(d.prototype, Jc.prototype, {
            _subscribe: function (a) {
                ec(this);
                var c = new Pc(this.scheduler, a), d = b(this, c);
                this._trim(this.scheduler.now()), this.observers.push(c);
                for (var e = 0, f = this.q.length; f > e; e++)c.onNext(this.q[e].value);
                return this.hasError ? c.onError(this.error) : this.isStopped && c.onCompleted(), c.ensureActive(), d
            }, hasObservers: function () {
                return this.observers.length > 0
            }, _trim: function (a) {
                for (; this.q.length > this.bufferSize;)this.q.shift();
                for (; this.q.length > 0 && a - this.q[0].interval > this.windowSize;)this.q.shift()
            }, onNext: function (a) {
                if (ec(this), !this.isStopped) {
                    var b = this.scheduler.now();
                    this.q.push({interval: b, value: a}), this._trim(b);
                    for (var d = 0, e = c(this.observers), f = e.length; f > d; d++) {
                        var g = e[d];
                        g.onNext(a), g.ensureActive()
                    }
                }
            }, onError: function (a) {
                if (ec(this), !this.isStopped) {
                    this.isStopped = !0, this.error = a, this.hasError = !0;
                    var b = this.scheduler.now();
                    this._trim(b);
                    for (var d = 0, e = c(this.observers), f = e.length; f > d; d++) {
                        var g = e[d];
                        g.onError(a), g.ensureActive()
                    }
                    this.observers.length = 0
                }
            }, onCompleted: function () {
                if (ec(this), !this.isStopped) {
                    this.isStopped = !0;
                    var a = this.scheduler.now();
                    this._trim(a);
                    for (var b = 0, d = c(this.observers), e = d.length; e > b; b++) {
                        var f = d[b];
                        f.onCompleted(), f.ensureActive()
                    }
                    this.observers.length = 0
                }
            }, dispose: function () {
                this.isDisposed = !0, this.observers = null
            }
        }), d
    }(Rc), Cg = Pa.AnonymousSubject = function (a) {
        function b(b, c) {
            this.observer = b, this.observable = c, a.call(this)
        }

        return Vb(b, a), Wb(b.prototype, Jc.prototype, {
            _subscribe: function (a) {
                return this.observable.subscribe(a)
            }, onCompleted: function () {
                this.observer.onCompleted()
            }, onError: function (a) {
                this.observer.onError(a)
            }, onNext: function (a) {
                this.observer.onNext(a)
            }
        }), b
    }(Rc);
    Pa.Pauser = function (a) {
        function b() {
            a.call(this)
        }

        return Vb(b, a), b.prototype.pause = function () {
            this.onNext(!1)
        }, b.prototype.resume = function () {
            this.onNext(!0)
        }, b
    }(yg), "function" == typeof define && "object" == typeof define.amd && define.amd ? (Oa.Rx = Pa, define(function () {
        return Pa
    })) : Ha && Ia ? Ma ? (Ia.exports = Pa).Rx = Pa : Ha.Rx = Pa : Oa.Rx = Pa;
    var Dg = j()
}).call(this);
//# sourceMappingURL=rx.all.map