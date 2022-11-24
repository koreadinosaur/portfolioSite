(() => {
  "use strict";
  var n = {
      902: (n, e, t) => {
        t.d(e, { Z: () => u });
        var o = t(81),
          r = t.n(o),
          i = t(645),
          a = t.n(i),
          l = t(667),
          c = t.n(l),
          s = new URL(t(549), t.b),
          d = a()(r()),
          p = c()(s);
        d.push([
          n.id,
          "/* Global */\n:root {\n  /* Color */\n  --color-white: #ffffff;\n  --color-light-white: #eeeeee;\n  --color-dark-white: #bdbdbd;\n  --color-pink: #fe918d;\n  --color-dark-pink: #ff6863;\n  --color-black: #4d4d4d;\n  --color-dark-grey: #4d4d4d;\n  --color-grey: #616161;\n  --color-light-grey: #7c7979;\n  --color-blue: #73aace;\n  --color-yellow: #fff7d1;\n  --color-orange: #feb546;\n  --color-black: #000000;\n\n  /* Font size */\n  --font-large: 48px;\n  --font-medium: 28px;\n  --font-regular: 18px;\n  --font-small: 16px;\n  --font-micro: 14px;\n\n  /* Font weight */\n  --weight-bold: 700;\n  --weight-semi-bold: 600;\n  --weight-regular: 400;\n\n  /* Size */\n  --size-border-radius: 4px;\n\n  /* Annimation */\n  --animation-duration: 300ms;\n\n  /* margin */\n  --margin-top: 40px;\n  /* padding */\n  --padding-top: 40px;\n\n  --logo-size: 10%;\n  --font-size: 20px;\n  --color: white;\n  --font-size-title: 40px;\n}\n\n/* Universal tags */\n* {\n  box-sizing: border-box;\n}\n\n/* Typography */\nh1 {\n  font-size: var(--font-large);\n  font-weight: var(--weight-bold);\n  color: var(--color-black);\n  margin: 16px 0px;\n}\n\nh2 {\n  font-size: var(--font-medium);\n  font-weight: var(--weight-semi-bold);\n  color: var(--color-black);\n  margin: 8px 0;\n}\n\nh3 {\n  font-size: var(--font-regular);\n  font-weight: var(--font-regular);\n  color: var(--color-black);\n  margin: 8px 0;\n}\n\np {\n  font-size: var(--font-regular);\n  font-weight: var(--font-regular);\n  color: var(--color-black);\n  margin: 4px 0;\n}\n\nbody {\n  height: 100vh;\n  margin: 0;\n}\n/* common */\n.section__container {\n  max-width: 1200px;\n  margin: auto;\n}\n.section {\n  text-align: center;\n  margin: auto;\n  padding: 50px;\n}\n.transparent {\n  opacity: ;\n}\n/* background */\n#background--sunrise {\n  background: url(" +
            p +
            ') center/cover no-repeat;\n  background-size: 100% 100%;\n}\n/* header */\n.header {\n  position: fixed;\n  width: 100%;\n  color: var(--color-white);\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  z-index: 1;\n}\n.header__logoBar {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: var(--font-size);\n}\n.header__logoBar img {\n  width: 30px;\n  height: 30px;\n}\n.header__logoBar a {\n  text-decoration: none;\n  color: var(--color-white);\n  display: flex;\n  align-items: center;\n  -webkit-transition: all var(--animation-duration) ease-in-out;\n  transition: all var(--animation-duration) ease-in-out;\n}\n.header__logoBar a:hover {\n  color: var(--color-pink);\n  transform: scale(1.1);\n}\n\n.header__menu {\n  position: relative;\n  list-style: none;\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n.header__menu__item:hover {\n  cursor: pointer;\n  background-color: var(--color-blue);\n  opacity: 0.7;\n  transform: scale(1.1);\n  border-radius: 10%;\n  border: none;\n}\n.header__menu__item {\n  z-index: 2;\n  padding: 5px;\n\n  -webkit-transition: all var(--animation-duration) ease-in-out;\n  transition: all var(--animation-duration) ease-in-out;\n}\n.Home {\n  border: 1px solid;\n  padding: 8px;\n  margin-right: 8px;\n}\n.header__toggle {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  display: none;\n  font-size: 24px;\n}\n/* fix nav bar */\n.header.fixed {\n  z-index: 1;\n  -webkit-transition: all var(--animation-duration) ease-in-out;\n  transition: all var(--animation-duration) ease-in-out;\n}\n.header.fixed::before {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background: center/cover no-repeat;\n  background-size: 100%;\n  width: 100%;\n  height: 100%;\n  content: "";\n  opacity: 0.5;\n  z-index: -1;\n}\n\n/* profile */\n#profile {\n  color: var(--color-white);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  padding-top: 80px;\n}\n#profile span {\n  padding-top: calc(var(--padding-top) * 0.5);\n  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",\n    Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n  font-size: var(--font-medium);\n  font-weight: 400;\n}\n.profile__avatar {\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  border: 2px solid var(--color-white);\n  position: relative;\n  overflow: hidden;\n}\n.profile__avatar img {\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.profile__contact {\n  margin: var(--margin-top);\n  border: 1px solid;\n  background: none;\n  color: var(--color-white);\n}\n.profile__contact:hover {\n  cursor: pointer;\n  color: var(--color-pink);\n}\n\n/* about */\n#about {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-top: var(--margin-top);\n  color: var(--color-black);\n  max-width: 1200px;\n}\n\n.about__description {\n  margin-top: calc(var(--padding-top) * 0.5);\n}\n.about__stacks {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  margin: 60px 0 0 0;\n  padding-left: 0;\n}\n.about__stacks--item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.about__stacks--item div {\n  border: 1px solid var(--color-blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n}\n.about__stacks--item i {\n  color: var(--color-blue);\n  transition: all var(--animation-duration) ease-in-out;\n}\n.about__stacks--item i:hover {\n  transform: scale(1.1);\n  color: var(--color-pink);\n}\n\n/* Skills */\n#skills {\n  margin-top: var(--margin-top);\n  background-color: beige;\n}\n.skillBox {\n  display: flex;\n  color: #eeeeee;\n}\n.skillBox__left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  flex-basis: 60%;\n  background-color: #4d4d4d;\n  padding-bottom: 20px;\n}\n.skillBox__right {\n  flex-basis: 40%;\n}\n.skillBox__left__title {\n  color: #eeeeee;\n  font-weight: var(--weight-semi-bold);\n  font-size: var(--font-regular);\n  padding: 10px 0;\n}\n.skillBox__graph {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n}\n.skillBox__graph div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.skillBox__tools {\n  background-color: var(--color-grey);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 50%;\n}\n.skillBox__etc {\n  background-color: var(--color-light-grey);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 50%;\n}\n.skillBox__etc__title,\n.skillBox__tools__title {\n  padding: 15px 0;\n  font-weight: var(--weight-semi-bold);\n  font-size: var(--font-regular);\n}\n/* input[type="range"] */\ninput[type="range"] {\n  overflow: hidden;\n  width: 100%;\n  height: 6px;\n  -webkit-appearance: none;\n  margin-bottom: 15px;\n  background: transparent;\n}\ninput[type="range"]:focus {\n  outline: none;\n}\n\ninput[type="range"]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  border-radius: 5px;\n  border: 1px solid #ff96ab;\n}\n\ninput[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 0px;\n  background: #ff494f;\n  box-shadow: 1px 1px 7px #d16a6e;\n  cursor: pointer;\n  box-shadow: -100vw 0 0 100vw var(--color-orange);\n}\n\n/* projects */\n\n#myProjects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.projects-nav ul {\n  position: relative;\n  display: flex;\n  list-style: none;\n}\n.projects-nav__list {\n  width: 150px;\n  text-align: center;\n  border: 1px solid var(--color-dark-white);\n  border-radius: 5px;\n  margin: 0 5px;\n  font-weight: var(--weight-semi-bold);\n}\n.projects__screenshots {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 900px;\n}\n.projects-nav__list:hover {\n  cursor: pointer;\n  background-color: var(--color-light-white);\n}\n.projects-nav__list.active {\n  background-color: var(--color-blue);\n}\n.project {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n  width: 200px;\n  height: 200px;\n  background-color: var(--color-light-white);\n  transition: all var(--animation-duration) ease-in;\n}\n.project__description {\n  position: absolute;\n  background-color: var(--color-black);\n  color: var(--color-white);\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transform: translateY(10px);\n  transition: all var(--animation-duration) ease-in;\n}\n.project:hover .project__description {\n  opacity: 70%;\n  transform: translateY(0);\n}\n.project__description h3 {\n  color: var(--color-white);\n}\n.project img {\n  width: 80%;\n  height: 80%;\n}\n.project.invisible {\n  display: none;\n}\n.project.visible {\n  display: flex;\n  animation: fade-in 0.3s;\n}\n.project.fadein {\n}\n\n/* contact */\n#contact {\n  padding: var(--padding-top) 0px;\n  margin-top: var(--margin-top);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--color-blue);\n  color: var(--color-white);\n}\n#contact h1 {\n  color: var(--color-white);\n}\n\n.contact__footer {\n  margin-top: var(--margin-top);\n  font-weight: lighter;\n  color: var(--color-dark-white);\n}\n\n/* arrow */\n#arrow {\n  color: var(--color-dark-white);\n}\n.arrowToHome {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}\n.arrowToHome i:hover {\n  cursor: pointer;\n  color: var(--color-grey);\n}\n\n/* For below 768px screen width */\n@media screen and (max-width: 768px) {\n  .header__toggle {\n    display: block;\n    transition: all var(--animation-duration);\n  }\n  .header__toggle:hover {\n    cursor: pointer;\n    color: var(--color-dark-pink);\n    transform: scale(1.1);\n  }\n  .header {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    transition: all var(--animation-duration) ease;\n  }\n  .header__menu {\n    flex-direction: column;\n    padding-left: 0;\n    transition: all var(--animation-duration) ease;\n    opacity: 0;\n  }\n  .header__menu.animation-in {\n    opacity: 1;\n  }\n  .header__menu__item {\n    display: none;\n  }\n  .header__menu__item.unfold {\n    display: flex;\n  }\n\n  .header__menu,\n  .Home {\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    margin: auto;\n    padding: 5px;\n  }\n  .header__menu__item {\n    border-bottom: solid 1px var(--color-white);\n  }\n  #profile {\n    padding-top: 24px;\n  }\n  .about__stacks {\n    flex-direction: column;\n  }\n  .about__stacks--item {\n    margin-top: 24px;\n  }\n  .skillBox {\n    flex-direction: column;\n  }\n  .skillBox__tools,\n  .skillBox__etc {\n    padding-bottom: 10px;\n  }\n  .project {\n    flex-grow: 1;\n  }\n}\n\n/* keyframe */\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n',
          "",
        ]);
        const u = d;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  o && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, o, r, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var l = 0; l < this.length; l++) {
                  var c = this[l][0];
                  null != c && (a[c] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var d = [].concat(n[s]);
                (o && a[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  r &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = r))
                      : (d[4] = "".concat(r))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      667: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      110: (n, e, t) => {
        t.r(e), t.d(e, { default: () => v });
        var o = t(379),
          r = t.n(o),
          i = t(795),
          a = t.n(i),
          l = t(569),
          c = t.n(l),
          s = t(565),
          d = t.n(s),
          p = t(216),
          u = t.n(p),
          f = t(589),
          g = t.n(f),
          m = t(902),
          h = {};
        (h.styleTagTransform = g()),
          (h.setAttributes = d()),
          (h.insert = c().bind(null, "head")),
          (h.domAPI = a()),
          (h.insertStyleElement = u()),
          r()(m.Z, h);
        const v = m.Z && m.Z.locals ? m.Z.locals : void 0;
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var i = {}, a = [], l = 0; l < n.length; l++) {
            var c = n[l],
              s = o.base ? c[0] + o.base : c[0],
              d = i[s] || 0,
              p = "".concat(s, " ").concat(d);
            i[s] = d + 1;
            var u = t(p),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(f);
            else {
              var g = r(f, o);
              (o.byIndex = l),
                e.splice(l, 0, { identifier: p, updater: g, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var i = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var l = t(i[a]);
              e[l].references--;
            }
            for (var c = o(n, r), s = 0; s < i.length; s++) {
              var d = t(i[s]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            i = c;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      549: (n, e, t) => {
        n.exports = t.p + "./img/노을.jpg";
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, exports: {} });
    return n[o](i, i.exports, t), i.exports;
  }
  (t.m = n),
    (t.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.r = (n) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var o = e.getElementsByTagName("script");
        o.length && (n = o[o.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      t.p, t.p, t.p;
      const n = document.querySelector(".header"),
        e =
          (document.querySelector("#about"),
          document.querySelector(".profile__contact")),
        o = document.querySelector("#background--sunrise"),
        r = document.querySelector("#profile"),
        i = document.querySelector("#arrow");
      function a() {
        window.scrollY > n.clientHeight
          ? (n.classList.add("fixed"), i.classList.add("arrowToHome"))
          : (n.classList.remove("fixed"), i.classList.remove("arrowToHome"));
      }
      t(110),
        window.addEventListener("scroll", a),
        window.addEventListener("scroll", a);
      const l = document.querySelector(".header__menu");
      function c(n) {
        const e = n.target.dataset.target;
        document
          .querySelector(`${e}`)
          .scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
      }
      l.addEventListener("click", c),
        e.addEventListener("click", c),
        i.addEventListener("click", c),
        window.addEventListener("scroll", function () {
          r.classList.add("transparent"),
            (r.style.opacity = 1 - window.scrollY / o.clientHeight);
        });
      const s = document.querySelectorAll(".projects-nav__list"),
        d = document.querySelectorAll(".project");
      s.forEach((n) =>
        n.addEventListener("click", (e) =>
          (function (n, e) {
            const t = n.target.dataset.language,
              o = document.querySelector(".active");
            if (
              (null != o && o.classList.remove("active"),
              e.classList.add("active"),
              null == t)
            )
              return d.forEach((n) => {
                n.classList.remove("invisible"),
                  n.classList.add("visible"),
                  setTimeout(() => {
                    n.classList.remove("visible");
                  }, 301);
              });
            d.forEach((n) => {
              t === n.dataset.language
                ? (n.classList.add("visible"),
                  n.classList.remove("invisible"),
                  setTimeout(() => {
                    n.classList.remove("visible");
                  }, 301))
                : (n.classList.add("invisible"), n.classList.remove("visible"));
            });
          })(e, n)
        )
      );
      const p = document.querySelector(".header__toggle"),
        u = document.querySelectorAll(".header__menu__item");
      p.addEventListener("click", function () {
        l.classList.contains("animation-in")
          ? l.classList.remove("animation-in")
          : l.classList.add("animation-in"),
          u.forEach((n) => {
            n.classList.contains("unfold")
              ? setTimeout(() => n.classList.remove("unfold"), 200)
              : n.classList.add("unfold");
          });
      });
    })();
})();
