(() => {
    "use strict";
    var e = {
            6044: (e, n, t) => {
                t(6992), t(8674), t(9601), t(7727);
                var i = t(9242),
                    r = t(3396),
                    o = (0, r.Uk)("Home"),
                    a = (0, r.Uk)(" | "),
                    l = (0, r.Uk)("About");

                function s(e, n) {
                    var t = (0, r.up)("router-link"),
                        i = (0, r.up)("router-view");
                    return (0, r.wg)(), (0, r.iD)(r.HY, null, [(0, r._)("nav", null, [(0, r.Wm)(t, {
                        to: "/"
                    }, {
                        default: (0, r.w5)((function () {
                            return [o]
                        })),
                        _: 1
                    }), a, (0, r.Wm)(t, {
                        to: "/about"
                    }, {
                        default: (0, r.w5)((function () {
                            return [l]
                        })),
                        _: 1
                    })]), (0, r.Wm)(i)], 64)
                }
                var c = t(89);
                const u = {},
                    d = (0, c.Z)(u, [
                        ["render", s]
                    ]),
                    v = d;
                t(1539), t(8783), t(3948);
                var p = t(302),
                    m = t(8534),
                    f = (t(6133), t(6977), t(4916), t(7601), t(4870)),
                    h = t(5461);
                new h.XS;
                var g = t(1114),
                    w = t(2236),
                    _ = new g.xsS,
                    b = new w.x;
                b.loadAsync("./textures/023.hdr").then((function (e) {
                    _.background = e, _.environment = e, _.environment.mapping = g.dSO
                }));
                var y = new g.Ox3(16777215, 1);
                y.position.set(10, 100, 10), _.add(y);
                const C = _;
                var k = t(3087),
                    P = t(2833),
                    x = t(1373),
                    O = new x.Z;
                const j = O;
                var A = new g.cPb(75, window.innerHeight / window.innerHeight, 1, 1e5);
                A.position.set(1e3, 1e3, 1e3);
                var E = function () {
                    function e() {
                        var n = this;
                        (0, k.Z)(this, e), this.activeCamera = A, this.collection = {
                            default: A
                        }, j.on("toggleCamera", (function (e) {
                            n.setActive(e)
                        }))
                    }
                    return (0, P.Z)(e, [{
                        key: "add",
                        value: function (e, n) {
                            this.collection[e] = n
                        }
                    }, {
                        key: "setActive",
                        value: function (e) {
                            this.activeCamera = this.collection[e]
                        }
                    }]), e
                }();
                const S = new E;
                var F = t(4543),
                    M = t(1183),
                    Z = t(1984),
                    H = new g.CP7({
                        antialias: !0,
                        logarithmicDepthBuffer: !0,
                        physicallyCorrectLights: !0
                    });
                H.setSize(window.innerWidth, window.innerHeight), H.shadowMap.enabled = !0, H.toneMapping = g.LY2, H.toneMappingExposure = 1.5;
                const D = H;
                var L = function () {
                    function e() {
                        var n = this;
                        (0, k.Z)(this, e), this.setOrbitControls(), j.on("toggleControls", (function (e) {
                            n["set".concat(e, "Controls")]()
                        }))
                    }
                    return (0, P.Z)(e, [{
                        key: "setOrbitControls",
                        value: function () {
                            this.controls = new F.z(S.activeCamera, D.domElement), this.controls.enableDamping = !0, this.controls.maxPolarAngle = Math.PI / 2, this.controls.minPolarAngle = 0
                        }
                    }, {
                        key: "setFlyControls",
                        value: function () {
                            this.controls = new M.m(S.activeCamera, D.domElement), this.controls.movementSpeed = 100, this.controls.rollSpeed = Math.PI / 60
                        }
                    }, {
                        key: "setFirstPersonControls",
                        value: function () {
                            this.controls = new Z.o(S.activeCamera, D.domElement), this.controls.movementSpeed = 100, this.controls.rollSpeed = Math.PI / 60
                        }
                    }]), e
                }();
                const T = new L;
                var W = new g.y8_(5);
                const N = W;
                S.activeCamera.aspect = window.innerWidth / window.innerHeight, S.activeCamera.updateProjectionMatrix(), window.addEventListener("resize", (function () {
                    S.activeCamera.aspect = window.innerWidth / window.innerHeight, S.activeCamera.updateProjectionMatrix(), D.setSize(window.innerWidth, window.innerHeight), D.setPixelRatio(window.devicePixelRatio)
                }));
                var Y, z = t(4198),
                    B = (t(8309), t(9554), t(4747), t(8552)),
                    I = t(1989),
                    R = function () {
                        function e(n) {
                            var t = this;
                            (0, k.Z)(this, e), this.scene = n, this.loader = new z.E;
                            var i = new I._;
                            i.setDecoderPath("./draco/"), this.loader.setDRACOLoader(i), this.loader.load("./model/city4.glb", (function (e) {
                                console.log(e), n.add(e.scene), t.gltf = e, e.scene.traverse((function (n) {
                                    if ("热气球" === n.name && (t.mixer = new g.Xcj(n), t.clip = e.animations[1], t.action = t.mixer.clipAction(t.clip), t.action.play()), "汽车园区轨迹" === n.name) {
                                        var i = n;
                                        i.visible = !1;
                                        for (var r = [], o = i.geometry.attributes.position.count - 1; o >= 0; o--) r.push(new g.Pa4(i.geometry.attributes.position.getX(o), i.geometry.attributes.position.getY(o), i.geometry.attributes.position.getZ(o)));
                                        t.curve = new g.YT8(r), t.curveProgress = 0, t.carAnimation()
                                    }
                                    "redcar" === n.name && (console.log(n), t.redcar = n)
                                })), e.cameras.forEach((function (e) {
                                    S.add(e.name, e)
                                }))
                            })), j.on("actionClick", (function (e) {
                                console.log(e), t.action.reset(), t.clip = t.gltf.animations[e], console.log(t.clip, "  this.clip ="), t.action = t.mixer.clipAction(t.clip), t.action.play()
                            }))
                        }
                        return (0, P.Z)(e, [{
                            key: "update",
                            value: function (e) {
                                this.mixer && this.mixer.update(e)
                            }
                        }, {
                            key: "carAnimation",
                            value: function () {
                                var e = this;
                                B.ZP.to(this, {
                                    curveProgress: .999,
                                    duration: 10,
                                    repeat: -1,
                                    onUpdate: function () {
                                        var n = e.curve.getPoint(e.curveProgress);
                                        if (e.redcar.position.set(n.x, n.y, n.z), e.curveProgress + .001 < 1) {
                                            var t = e.curve.getPoint(e.curveProgress + .001);
                                            e.redcar.lookAt(t)
                                        }
                                    }
                                })
                            }
                        }]), e
                    }();

                function U() {
                    Y = new R(C)
                }

                function q(e) {
                    Y.update(e)
                }
                var X = new g.SUY;

                function G(e) {
                    var n = X.getDelta();
                    T.controls.update(n), q(n), requestAnimationFrame(G), D.render(C, S.activeCamera)
                }
                const J = G,
                    K = {
                        props: ["eventList"],
                        setup: function (e) {
                            var n = (0, f.iH)(null);
                            C.add(S.activeCamera), C.add(N), U();
                            return (0, r.bv)((function () {
                                    n.value.appendChild(D.domElement), J()
                                })),
                                function (e, t) {
                                    return (0, r.wg)(), (0, r.iD)("div", {
                                        class: "scene",
                                        ref_key: "sceneDiv",
                                        ref: n
                                    }, null, 512)
                                }
                        }
                    },
                    Q = K,
                    V = Q;
                var $ = t(3057),
                    ee = t(3886),
                    ne = {
                        id: "bigScreen"
                    },
                    te = (0, r._)("div", {
                        class: "header"
                    }, "智慧园区", -1),
                    ie = {
                        class: "main"
                    },
                    re = {
                        class: "left"
                    },
                    oe = {
                        class: "cityEvent"
                    },
                    ae = (0, r._)("h3", null, [(0, r._)("span", null, "热气球控制")], -1),
                    le = (0, r._)("img", {
                        class: "icon",
                        src: $,
                        alt: ""
                    }, null, -1),
                    se = (0, r._)("span", null, "设置热气球以横穿园区的动画显示", -1),
                    ce = [le, se],
                    ue = (0, r._)("img", {
                        class: "icon",
                        src: $,
                        alt: ""
                    }, null, -1),
                    de = (0, r._)("span", null, "设置热气球以环绕园区进行运动", -1),
                    ve = [ue, de],
                    pe = (0, r._)("div", {
                        class: "footerBorder"
                    }, null, -1),
                    me = {
                        class: "cityEvent"
                    },
                    fe = (0, r._)("h3", null, [(0, r._)("span", null, "相机控制")], -1),
                    he = (0, r._)("img", {
                        class: "icon",
                        src: $,
                        alt: ""
                    }, null, -1),
                    ge = (0, r._)("span", null, "默认的相机视角", -1),
                    we = [he, ge],
                    _e = (0, r._)("img", {
                        class: "icon",
                        src: $,
                        alt: ""
                    }, null, -1),
                    be = (0, r._)("span", null, "设置相机追随汽车导览园区", -1),
                    ye = [_e, be],
                    Ce = (0, r._)("img", {
                        class: "icon",
                        src: $,
                        alt: ""
                    }, null, -1),
                    ke = (0, r._)("span", null, "查看汽车司机视角", -1),
                    Pe = [Ce, ke],
                    xe = (0, r._)("div", {
                        class: "footerBorder"
                    }, null, -1),
                    Oe = {
                        class: "right"
                    },
                    je = {
                        class: "cityEvent list"
                    },
                    Ae = (0, r._)("h3", null, [(0, r._)("span", null, "切换园区观览模式")], -1),
                    Ee = (0, r._)("h1", null, [(0, r._)("div", null, [(0, r._)("img", {
                        class: "icon",
                        src: ee,
                        alt: ""
                    }), (0, r._)("span", null, " 轨道观览 ")])], -1),
                    Se = (0, r._)("p", null, "可以锁定目标建筑和园区进行轨道式360°查看", -1),
                    Fe = [Ee, Se],
                    Me = (0, r._)("h1", null, [(0, r._)("div", null, [(0, r._)("img", {
                        class: "icon",
                        src: ee,
                        alt: ""
                    }), (0, r._)("span", null, " 飞行观览 ")])], -1),
                    Ze = (0, r._)("p", null, "可以使用飞行模式进行园区进行观览", -1),
                    He = [Me, Ze],
                    De = (0, r._)("h1", null, [(0, r._)("div", null, [(0, r._)("img", {
                        class: "icon",
                        src: ee,
                        alt: ""
                    }), (0, r._)("span", null, " 第一人称 ")])], -1),
                    Le = (0, r._)("p", null, "可以使用第一人称模式进行园区进行观览", -1),
                    Te = [De, Le],
                    We = (0, r._)("div", {
                        class: "footerBorder"
                    }, null, -1);
                const Ne = {
                        props: ["dataInfo", "dataInfoNum", "iotNum", "eventNum", "testNum", "powerNum", "eventList"],
                        setup: function (e) {
                            var n = (0, f.iH)(null);
                            t(3886), t(8957), t(8169);
                            j.on("spriteClick", (function (e) {
                                n.value = e
                            }));
                            var i = function (e) {
                                    console.log(e), j.emit("actionClick", e)
                                },
                                o = function (e) {
                                    j.emit("toggleCamera", e)
                                },
                                a = function (e) {
                                    j.emit("toggleControls", e)
                                };
                            return function (e, n) {
                                return (0, r.wg)(), (0, r.iD)("div", ne, [te, (0, r._)("div", ie, [(0, r._)("div", re, [(0, r._)("div", oe, [ae, (0, r._)("h1", {
                                    onClick: n[0] || (n[0] = function (e) {
                                        return i(0)
                                    })
                                }, ce), (0, r._)("h1", {
                                    onClick: n[1] || (n[1] = function (e) {
                                        return i(1)
                                    })
                                }, ve), pe]), (0, r._)("div", me, [fe, (0, r._)("h1", {
                                    onClick: n[2] || (n[2] = function (e) {
                                        return o("default")
                                    })
                                }, we), (0, r._)("h1", {
                                    onClick: n[3] || (n[3] = function (e) {
                                        return o("carcamera_Orientation")
                                    })
                                }, ye), (0, r._)("h1", {
                                    onClick: n[4] || (n[4] = function (e) {
                                        return o("rightcamera_Orientation")
                                    })
                                }, Pe), xe])]), (0, r._)("div", Oe, [(0, r._)("div", je, [Ae, (0, r._)("ul", null, [(0, r._)("li", {
                                    onClick: n[5] || (n[5] = function (e) {
                                        return a("Orbit")
                                    })
                                }, Fe), (0, r._)("li", {
                                    onClick: n[6] || (n[6] = function (e) {
                                        return a("Fly")
                                    })
                                }, He), (0, r._)("li", {
                                    onClick: n[7] || (n[7] = function (e) {
                                        return a("FirstPerson")
                                    })
                                }, Te)]), We])])])])
                            }
                        }
                    },
                    Ye = Ne,
                    ze = Ye;
                t(6265);
                var Be = {
                    class: "home"
                };
                const Ie = {
                        setup: function (e) {
                            var n = (0, f.qj)({}),
                                t = (0, f.qj)({
                                    iot: 0,
                                    event: 0,
                                    power: 0,
                                    test: 0
                                });
                            (0, r.Fl)((function () {
                                return t.iot.toFixed(0)
                            })), (0, r.Fl)((function () {
                                return t.event.toFixed(0)
                            })), (0, r.Fl)((function () {
                                return t.power.toFixed(2)
                            })), (0, r.Fl)((function () {
                                return t.test.toFixed(0)
                            }));
                            (0, r.bv)((0, m.Z)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))), (0, r.YP)(n, (function (e, n) {
                                B.ZP.to(t, {
                                    iot: e.iot.number,
                                    event: e.event.number,
                                    test: e.test.number,
                                    power: e.power.number,
                                    duration: 1,
                                    repeat: 1
                                })
                            }));
                            var i = (0, f.iH)([]);
                            return (0, r.YP)(i, (function () {
                                    console.log("触发事件列表更新")
                                })), (0, r.bv)((function () {})),
                                function (e, n) {
                                    return (0, r.wg)(), (0, r.iD)("div", Be, [(0, r.Wm)(V, {
                                        eventList: i.value
                                    }, null, 8, ["eventList"]), (0, r.Wm)(ze)])
                                }
                        }
                    },
                    Re = Ie,
                    Ue = Re;
                var qe = [{
                        path: "/",
                        name: "home",
                        component: Ue
                    }, {
                        path: "/about",
                        name: "about",
                        component: function () {
                            return t.e(443).then(t.bind(t, 7381))
                        }
                    }],
                    Xe = (0, p.p7)({
                        history: (0, p.r5)(),
                        routes: qe
                    });
                const Ge = Xe;
                var Je = t(65);
                const Ke = (0, Je.MT)({
                    state: {},
                    getters: {},
                    mutations: {},
                    actions: {},
                    modules: {}
                });
                (0, i.ri)(v).use(Ke).use(Ge).mount("#app")
            },
            3057: (e, n, t) => {
                e.exports = t.p + "img/bar.svg"
            },
            3886: (e, n, t) => {
                e.exports = t.p + "img/dianli.00c36544.svg"
            },
            8957: (e, n, t) => {
                e.exports = t.p + "img/fire.5236bece.svg"
            },
            8169: (e, n, t) => {
                e.exports = t.p + "img/jingcha.da78e053.svg"
            }
        },
        n = {};

    function t(i) {
        var r = n[i];
        if (void 0 !== r) return r.exports;
        var o = n[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return e[i](o, o.exports, t), o.loaded = !0, o.exports
    }
    t.m = e, (() => {
        var e = [];
        t.O = (n, i, r, o) => {
            if (!i) {
                var a = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [i, r, o] = e[u], l = !0, s = 0; s < i.length; s++)(!1 & o || a >= o) && Object.keys(t.O).every((e => t.O[e](i[s]))) ? i.splice(s--, 1) : (l = !1, o < a && (a = o));
                    if (l) {
                        e.splice(u--, 1);
                        var c = r();
                        void 0 !== c && (n = c)
                    }
                }
                return n
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--) e[u] = e[u - 1];
            e[u] = [i, r, o]
        }
    })(), (() => {
        t.n = e => {
            var n = e && e.__esModule ? () => e["default"] : () => e;
            return t.d(n, {
                a: n
            }), n
        }
    })(), (() => {
        t.d = (e, n) => {
            for (var i in n) t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: n[i]
            })
        }
    })(), (() => {
        t.f = {}, t.e = e => Promise.all(Object.keys(t.f).reduce(((n, i) => (t.f[i](e, n), n)), []))
    })(), (() => {
        t.u = e => "js/about.78b54b96.js"
    })(), (() => {
        t.miniCssF = e => {}
    })(), (() => {
        t.g = function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }()
    })(), (() => {
        t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)
    })(), (() => {
        var e = {},
            n = "threeapp:";
        t.l = (i, r, o, a) => {
            if (e[i]) e[i].push(r);
            else {
                var l, s;
                if (void 0 !== o)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                        var d = c[u];
                        if (d.getAttribute("src") == i || d.getAttribute("data-webpack") == n + o) {
                            l = d;
                            break
                        }
                    }
                l || (s = !0, l = document.createElement("script"), l.charset = "utf-8", l.timeout = 120, t.nc && l.setAttribute("nonce", t.nc), l.setAttribute("data-webpack", n + o), l.src = i), e[i] = [r];
                var v = (n, t) => {
                        l.onerror = l.onload = null, clearTimeout(p);
                        var r = e[i];
                        if (delete e[i], l.parentNode && l.parentNode.removeChild(l), r && r.forEach((e => e(t))), n) return n(t)
                    },
                    p = setTimeout(v.bind(null, void 0, {
                        type: "timeout",
                        target: l
                    }), 12e4);
                l.onerror = v.bind(null, l.onerror), l.onload = v.bind(null, l.onload), s && document.head.appendChild(l)
            }
        }
    })(), (() => {
        t.r = e => {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    })(), (() => {
        t.nmd = e => (e.paths = [], e.children || (e.children = []), e)
    })(), (() => {
        t.p = "/"
    })(), (() => {
        var e = {
            143: 0
        };
        t.f.j = (n, i) => {
            var r = t.o(e, n) ? e[n] : void 0;
            if (0 !== r)
                if (r) i.push(r[2]);
                else {
                    var o = new Promise(((t, i) => r = e[n] = [t, i]));
                    i.push(r[2] = o);
                    var a = t.p + t.u(n),
                        l = new Error,
                        s = i => {
                            if (t.o(e, n) && (r = e[n], 0 !== r && (e[n] = void 0), r)) {
                                var o = i && ("load" === i.type ? "missing" : i.type),
                                    a = i && i.target && i.target.src;
                                l.message = "Loading chunk " + n + " failed.\n(" + o + ": " + a + ")", l.name = "ChunkLoadError", l.type = o, l.request = a, r[1](l)
                            }
                        };
                    t.l(a, s, "chunk-" + n, n)
                }
        }, t.O.j = n => 0 === e[n];
        var n = (n, i) => {
                var r, o, [a, l, s] = i,
                    c = 0;
                if (a.some((n => 0 !== e[n]))) {
                    for (r in l) t.o(l, r) && (t.m[r] = l[r]);
                    if (s) var u = s(t)
                }
                for (n && n(i); c < a.length; c++) o = a[c], t.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                return t.O(u)
            },
            i = self["webpackChunkthreeapp"] = self["webpackChunkthreeapp"] || [];
        i.forEach(n.bind(null, 0)), i.push = n.bind(null, i.push.bind(i))
    })();
    var i = t.O(void 0, [998], (() => t(6044)));
    i = t.O(i)
})();
//# sourceMappingURL=app.1282ed27.js.map