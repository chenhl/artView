module.exports = __NEXT_REGISTER_PAGE("/m/s/follow",
function() {
	var e = webpackJsonp([56], {
		1473 : function(e, t, o) {
			e.exports = o(1474)
		},
		1474 : function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: true
			});
			var n = o(33);
			var r = o.n(n);
			var a = o(1);
			var i = o.n(a);
			var s = o(0);
			var l = o.n(s);
			var c = o(59);
			var u = o(198);
			var f = o(190);
			var d = o(83);
			var p = o.n(d);
			var h = o(207);
			var m = o.n(h);
			var v = o(16);
			var w = o.n(v);
			var g = o(35);
			var x = o(64);
			var b = o(23);
			var y = o(66);
			var k = function() {
				function e(e, t) {
					for (var o = 0; o < t.length; o++) {
						var n = t[o];
						n.enumerable = n.enumerable || false;
						n.configurable = true;
						"value" in n && (n.writable = true);
						Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, o, n) {
					o && e(t.prototype, o);
					n && e(t, n);
					return t
				}
			} ();
			function E(e) {
				return function() {
					var t = e.apply(this, arguments);
					return new Promise(function(e, o) {
						function n(r, a) {
							try {
								var i = t[r](a);
								var s = i.value
							} catch(e) {
								o(e);
								return
							}
							if (!i.done) return Promise.resolve(s).then(function(e) {
								n("next", e)
							},
							function(e) {
								n("throw", e)
							});
							e(s)
						}
						return n("next")
					})
				}
			}
			function j(e, t) {
				if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			function _(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return ! t || "object" !== typeof t && "function" !== typeof t ? e: t
			}
			function C(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: false,
						writable: true,
						configurable: true
					}
				});
				t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}
			var P = function(e) {
				C(t, e);
				function t(e) {
					j(this, t);
					var o = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					o.handleClick = function(e, t) {
						o.setState({
							isShow: true,
							index: e,
							aid: t
						})
					};
					o.handleClose = function() {
						o.setState({
							isShow: false
						})
					};
					o.changeFollowStatus = function(e, t) {
						if (!o.uid) {
							w.a.set("xw_lastpage", window.location.href, {
								domain: ".qq.com"
							});
							window.location.href = "/login.html"
						}
						var n = t || o.state.aid;
						m()({
							url: "//pacaio.match.qq.com/om/follow",
							method: "post",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
							},
							data: {
								uid: o.uid,
								id: n,
								status: e
							},
							transformRequest: [function(e) {
								var t = "";
								for (var o in e) t += encodeURIComponent(o) + "=" + encodeURIComponent(e[o]) + "&";
								t = t.slice(0, -1);
								return t
							}]
						}).then(function(e) {
							0 == e.data.code && console.log("success")
						}).
						catch(function(e) {
							console.log(e, "error")
						})
					};
					o.handlefollowAction = function(e, t) {
						o.changeFollowStatus(1, t);
						o.setState(function(t) {
							var o = t.data;
							o[e].unfollowed = false;
							return {
								data: o
							}
						})
					};
					o.handleUnfollowAction = function() {
						o.changeFollowStatus(0);
						o.setState(function(e) {
							var t = e.index;
							var o = e.data;
							o[t].unfollowed = true;
							return {
								data: o
							}
						});
						o.handleClose()
					};
					o.getnum = 10;
					o.state = {
						data: [],
						navTitle: "\u6211\u7684\u5173\u6ce8",
						hasContent: true,
						hasMoreNewComments: true
					};
					return o
				}
				k(t, [{
					key: "componentDidMount",
					value: function() {
						var e = E(r.a.mark(function e() {
							var t, o, n;
							return r.a.wrap(function e(r) {
								while (1) switch (r.prev = r.next) {
								case 0:
									t = w.a.get("main_login");
									o = w.a.get("skey") && w.a.get("uin");
									n = w.a.get("wx_openid") && w.a.get("wx_access_token");
									if ("qq" == t && o) this.uid = w.a.get("uin");
									else if ("wx" == t && n) this.uid = w.a.get("wx_openid");
									else {
										this.uid = "";
										window.location.href = "/login.html"
									}
									this.uid && this.getMsg(0);
									Object(x["a"])({
										pgv_site: ""
									});
									y["a"].ready(function(e) {
										e({
											template: {
												click: "BossId=4919&Pwd=187500179&{%v}&qq={QQ}&refer={REFER}&pac_uid={COOKIE.pac_uid}&ua=" + b["a"].getUserAgentForWebview() + "&openid={COOKIE.wx_openid}&network={UANETTYPE}&_dc={RANDOM}",
												expo: "BossId=4787&Pwd=1286385847&page=follow&qq={QQ}&source={REFER}&network={UANETTYPE}&pac_uid={COOKIE.pac_uid}&openid={COOKIE.wx_openid}&_dc={RANDOM}"
											}
										}).start()
									});
								case 7:
								case "end":
									return r.stop()
								}
							},
							e, this)
						}));
						function t() {
							return e.apply(this, arguments)
						}
						return t
					} ()
				},
				{
					key: "getMsg",
					value: function e(t) {
						var o = this;
						Object(g["a"])("//pacaio.match.qq.com/om/getUserMedia", {
							uid: this.uid,
							num: 10,
							page: t
						}).then(function(e) {
							if (0 == e.code && e.data) {
								var t = !(e.data.length < 10);
								o.setState(function(o) {
									return {
										data: o.data.concat(e.data || []),
										hasMore: t
									}
								})
							} else o.setState({
								hasMore: false
							})
						})
					}
				},
				{
					key: "loadItems",
					value: function e(t) {
						var o = this;
						setTimeout(function() {
							o.getMsg(t)
						},
						0)
					}
				},
				{
					key: "render",
					value: function e() {
						var t = this;
						var o = this.state.data.map(function(e, o) {
							return l.a.createElement("div", {
								key: o,
								className: "jsx-2388226211 item"
							},
							l.a.createElement("div", {
								className: "jsx-2388226211 inner"
							},
							l.a.createElement("a", {
								style: {
									backgroundImage: "url(" + e.icon + ")"
								},
								href: "/m/author?aid=" + e.mid,
								className: "jsx-2388226211 icon"
							}), l.a.createElement("a", {
								href: "/m/author?aid=" + e.mid,
								className: "jsx-2388226211 text"
							},
							l.a.createElement("div", {
								className: "jsx-2388226211 title"
							},
							e.name), l.a.createElement("div", {
								className: "jsx-2388226211 intro"
							},
							e.intro)), l.a.createElement("a", {
								onClick: e.unfollowed ? t.handlefollowAction.bind(t, o, e.mid) : t.handleClick.bind(t, o, e.mid),
								className: "jsx-2388226211 followBtn " + (e.unfollowed ? "unfollow": "followed")
							},
							l.a.createElement("i", {
								className: "jsx-2388226211"
							}), e.unfollowed ? "\u5173\u6ce8": "\u5df2\u5173\u6ce8")), l.a.createElement(i.a, {
								styleId: "2388226211",
								css: [".item.jsx-2388226211{padding:18px 10px 0 12px;}", ".inner.jsx-2388226211{padding-bottom:12px;position:relative;}", '.inner.jsx-2388226211:after{content:"";display:block;position:absolute;left:0px;bottom:0px;width:100%;height:1px;-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);-webkit-transform-origin:left bottom 0px;-ms-transform-origin:left bottom 0px;transform-origin:left bottom 0px;background:rgb(233,233,233);}', ".icon.jsx-2388226211{width:42px;height:42px;background:center no-repeat;background-size:contain;float:left;border-radius:21px;}", ".text.jsx-2388226211{margin-left:54px;margin-right:70px;color:#6E7074;font-size:12px;display:block;-webkit-text-decoration:none;text-decoration:none;}", ".text.jsx-2388226211 .title.jsx-2388226211{color:#3F4146;font-size:16px;margin-bottom:6px;font-family:PingFangSC-Medium;}", ".intro.jsx-2388226211{overflow:hidden;word-wrap:break-word;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;}", ".followBtn.jsx-2388226211{position:absolute;top:9px;right:0;color:#fff;font-size:12px;padding:0 12px;-webkit-text-decoration:none;text-decoration:none;background:#498BF8;border-radius:3px;height:24px;line-height:24px;}", ".unfollow.jsx-2388226211{color:#fff;background:#c4c9d5;}", ".unfollow.jsx-2388226211 i.jsx-2388226211{background:url(//mat1.gtimg.com/www/mobi/2017/image/follow-icon.svg);width:10px;height:10px;display:inline-block;margin-right:3px;background-size:contain;}"]
							}))
						});
						return l.a.createElement("div", {
							"data-boss-expo": "pv"
						},
						l.a.createElement(c["a"], {
							title: "" + this.state.navTitle
						},
						l.a.createElement(u["a"], {
							title: this.state.navTitle,
							isScroll: true,
							hasGlobalNav: true,
							hasGoBack: true
						}), l.a.createElement("div", {
							className: "jsx-3933749352 contentwrapper"
						},
						l.a.createElement(p.a, {
							pageStart: 0,
							loadMore: this.loadItems.bind(this),
							hasMore: this.state.hasMore,
							loader: l.a.createElement("div", {
								key: 0,
								className: "jsx-3933749352"
							},
							l.a.createElement(f["a"], null))
						},
						o)), l.a.createElement("div", {
							onClick: this.handleClose,
							className: "jsx-3933749352 layer " + (this.state.isShow ? "on": "")
						}), l.a.createElement("div", {
							className: "jsx-3933749352 dialog " + (this.state.isShow ? "on": "")
						},
						l.a.createElement("div", {
							className: "jsx-3933749352"
						},
						"\u786e\u5b9a\u4e0d\u518d\u5173\u6ce8\u4ed6?"), l.a.createElement("div", {
							onClick: this.handleUnfollowAction,
							className: "jsx-3933749352 unfollowAction"
						},
						"\u53d6\u6d88\u5173\u6ce8"), l.a.createElement("div", {
							onClick: this.handleClose,
							className: "jsx-3933749352 cancel"
						},
						"\u5173\u95ed")), l.a.createElement(i.a, {
							styleId: "3933749352",
							css: [".layer.jsx-3933749352{position:fixed;top:0;left:0;background:rgba(0,0,0,.5);height:100%;width:100%;display:none;z-index:10;}", ".layer.on.jsx-3933749352{display:block;}", ".dialog.jsx-3933749352{position:fixed;bottom:0;left:0;height:142px;background:#fff;width:100%;text-align:center;z-index:20;border:1px solid #e0e0e0;-webkit-transform:translateY(100%);-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.5s;transition:.5s;will-change:transform;}", ".dialog.on.jsx-3933749352{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}", ".dialog.jsx-3933749352 div.jsx-3933749352{height:45px;line-height:45px;width:100%;text-align:center;font-size:12px;color:#A7A7A7;}", ".dialog.jsx-3933749352 div.unfollowAction.jsx-3933749352{color:#E75353;font-size:16px;position:relative;}", ".dialog.jsx-3933749352 div.cancel.jsx-3933749352{font-size:16px;height:52px;position:absolute;bottom:0;color:#888;border-top:7px solid #e6e6e6;}", ".unfollowAction.jsx-3933749352:before{content:'';display:block;position:absolute;left:12px;right:12px;top:0;background:#e0e0e0;height:1px;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;}"]
						})))
					}
				}], [{
					key: "getInitialProps",
					value: function() {
						var e = E(r.a.mark(function e(t) {
							var o = t.query;
							var n;
							return r.a.wrap(function e(t) {
								while (1) switch (t.prev = t.next) {
								case 0:
									n = !o.static;
									return t.abrupt("return", {
										ssr: n
									});
								case 2:
								case "end":
									return t.stop()
								}
							},
							e, this)
						}));
						function t(t) {
							return e.apply(this, arguments)
						}
						return t
					} ()
				}]);
				return t
			} (s["Component"]);
			t["default"] = P
		},
		83 : function(e, t, o) {
			e.exports = o(84)
		},
		84 : function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: true
			});
			var n = function() {
				function e(e, t) {
					for (var o = 0; o < t.length; o++) {
						var n = t[o];
						n.enumerable = n.enumerable || false;
						n.configurable = true;
						"value" in n && (n.writable = true);
						Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, o, n) {
					o && e(t.prototype, o);
					n && e(t, n);
					return t
				}
			} ();
			var r = o(0);
			var a = l(r);
			var i = o(49);
			var s = l(i);
			function l(e) {
				return e && e.__esModule ? e: {
				default:
					e
				}
			}
			function c(e, t) {
				var o = {};
				for (var n in e) {
					if (t.indexOf(n) >= 0) continue;
					if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
					o[n] = e[n]
				}
				return o
			}
			function u(e, t) {
				if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			function f(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return ! t || "object" !== typeof t && "function" !== typeof t ? e: t
			}
			function d(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: false,
						writable: true,
						configurable: true
					}
				});
				t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}
			var p = function(e) {
				d(t, e);
				function t(e) {
					u(this, t);
					var o = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					o.scrollListener = o.scrollListener.bind(o);
					return o
				}
				n(t, [{
					key: "componentDidMount",
					value: function e() {
						this.pageLoaded = this.props.pageStart;
						this.attachScrollListener()
					}
				},
				{
					key: "componentDidUpdate",
					value: function e() {
						this.attachScrollListener()
					}
				},
				{
					key: "componentWillUnmount",
					value: function e() {
						this.detachScrollListener();
						this.detachMousewheelListener()
					}
				},
				{
					key: "setDefaultLoader",
					value: function e(t) {
						this.defaultLoader = t
					}
				},
				{
					key: "detachMousewheelListener",
					value: function e() {
						var t = window;
						false === this.props.useWindow && (t = this.scrollComponent.parentNode);
						t.removeEventListener("mousewheel", this.mousewheelListener, this.props.useCapture)
					}
				},
				{
					key: "detachScrollListener",
					value: function e() {
						var t = window;
						false === this.props.useWindow && (t = this.getParentElement(this.scrollComponent));
						t.removeEventListener("scroll", this.scrollListener, this.props.useCapture);
						t.removeEventListener("resize", this.scrollListener, this.props.useCapture)
					}
				},
				{
					key: "getParentElement",
					value: function e(t) {
						var o = this.props.getScrollParent && this.props.getScrollParent();
						if (null != o) return o;
						return t && t.parentNode
					}
				},
				{
					key: "filterProps",
					value: function e(t) {
						return t
					}
				},
				{
					key: "attachScrollListener",
					value: function e() {
						var t = this.getParentElement(this.scrollComponent);
						if (!this.props.hasMore || !t) return;
						var o = window;
						false === this.props.useWindow && (o = t);
						o.addEventListener("mousewheel", this.mousewheelListener, this.props.useCapture);
						o.addEventListener("scroll", this.scrollListener, this.props.useCapture);
						o.addEventListener("resize", this.scrollListener, this.props.useCapture);
						this.props.initialLoad && this.scrollListener()
					}
				},
				{
					key: "mousewheelListener",
					value: function e(t) {
						1 === t.deltaY && t.preventDefault()
					}
				},
				{
					key: "scrollListener",
					value: function e() {
						var t = this.scrollComponent;
						var o = window;
						var n = this.getParentElement(t);
						var r = void 0;
						if (this.props.useWindow) {
							var a = document.documentElement || document.body.parentNode || document.body;
							var i = void 0 !== o.pageYOffset ? o.pageYOffset: a.scrollTop;
							r = this.props.isReverse ? i: this.calculateOffset(t, i)
						} else r = this.props.isReverse ? n.scrollTop: t.scrollHeight - n.scrollTop - n.clientHeight;
						if (r < Number(this.props.threshold) && t && null !== t.offsetParent) {
							this.detachScrollListener();
							"function" === typeof this.props.loadMore && this.props.loadMore(this.pageLoaded += 1)
						}
					}
				},
				{
					key: "calculateOffset",
					value: function e(t, o) {
						if (!t) return 0;
						return this.calculateTopPosition(t) + (t.offsetHeight - o - window.innerHeight)
					}
				},
				{
					key: "calculateTopPosition",
					value: function e(t) {
						if (!t) return 0;
						return t.offsetTop + this.calculateTopPosition(t.offsetParent)
					}
				},
				{
					key: "render",
					value: function e() {
						var t = this;
						var o = this.filterProps(this.props);
						var n = o.children,
						r = o.element,
						i = o.hasMore,
						s = o.initialLoad,
						l = o.isReverse,
						u = o.loader,
						f = o.loadMore,
						d = o.pageStart,
						p = o.ref,
						h = o.threshold,
						m = o.useCapture,
						v = o.useWindow,
						w = o.getScrollParent,
						g = c(o, ["children", "element", "hasMore", "initialLoad", "isReverse", "loader", "loadMore", "pageStart", "ref", "threshold", "useCapture", "useWindow", "getScrollParent"]);
						g.ref = function(e) {
							t.scrollComponent = e;
							p && p(e)
						};
						var x = [n];
						i && (u ? l ? x.unshift(u) : x.push(u) : this.defaultLoader && (l ? x.unshift(this.defaultLoader) : x.push(this.defaultLoader)));
						return a.
					default.createElement(r, g, x)
					}
				}]);
				return t
			} (r.Component);
			p.propTypes = {
				children: s.
			default.node.isRequired,
				element: s.
			default.node,
				hasMore: s.
			default.bool,
				initialLoad: s.
			default.bool,
				isReverse: s.
			default.bool,
				loader: s.
			default.node,
				loadMore: s.
			default.func.isRequired,
				pageStart: s.
			default.number,
				ref: s.
			default.func,
				getScrollParent: s.
			default.func,
				threshold: s.
			default.number,
				useCapture: s.
			default.bool,
				useWindow: s.
			default.bool
			};
			p.defaultProps = {
				element: "div",
				hasMore: false,
				initialLoad: true,
				pageStart: 0,
				ref: null,
				threshold: 250,
				useWindow: true,
				isReverse: false,
				useCapture: false,
				loader: null,
				getScrollParent: null
			};
			t.
		default = p;
			e.exports = t["default"]
		}
	},
	[1473]);
	return {
		page: e.
	default
	}
});
/*  |xGv00|c86b4b6f4a50cee961e9820ca6d58be4 */
