webpackJsonp([1, 0], [function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	function a() {
		if (!window.isAdLoaded) {
			window.isAdLoaded = !0;
			var t = window.PAGE_SWITCH && window.PAGE_SWITCH.picVersion,
			e = window.PAGE_SWITCH && window.PAGE_SWITCH.migScriptUrl || "//s3a.pstatp.com/toutiao/gallery_img/dist/img.min.js";
			if (!t) {
				var i = new Date;
				t = i.getFullYear() + "" + (i.getMonth() + 1) + i.getDate() + "_01"
			}
			var n = e + "?ver=" + t; (0, c.loadScript)(n,
			function() {
				setTimeout(function() {
					window.ad$ && window.ad$.put(),
					window._czc && window._czc.push(["_trackEvent", "ad-script", "article", "load", 1, ""])
				})
			},
			function() {
				setTimeout(function() {
					window._czc && window._czc.push(["_trackEvent", "ad-script", "article", "block", 1, ""])
				},
				1500)
			})
		}
	}
	var o = i(7),
	s = n(o),
	r = i(190),
	l = n(r);
	i(81);
	var c = i(3),
	u = i(357),
	d = n(u);
	s.
default.use(l.
default),
	new s.
default({
		el:
		"#app",
		template: "<App/>",
		components: {
			App: d.
		default
		}
	}),
	window.isAdLoaded = !1,
	(0, c.addWinLoadEvent)(function() {
		setTimeout(function() {
			a()
		},
		1e3)
	}),
	setTimeout(function() {
		a()
	},
	15e3)
},
, ,
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	function a(t) {
		if (t != +t) return "";
		"object" !== ("undefined" == typeof t ? "undefined": (0, p.
	default)(t)) && (t = new Date(1e3 * t));
		var e, i = Math.floor((new Date - t) / 1e3),
		n = Math.floor(i / 31536e3);
		return n >= 1 ? e = "年": (n = Math.floor(i / 2592e3), n >= 1 ? e = "月": (n = Math.floor(i / 86400), n >= 1 ? e = "天": (n = Math.floor(i / 3600), n >= 1 ? e = "小时": (n = Math.floor(i / 60), n >= 1 ? e = "分钟": (n = i, e = "秒"))))),
		"秒" === e ? "刚刚": n + e + "前"
	}
	function o(t) {
		if (t != +t) return "";
		var e = Math.pow(10, 9),
		i = Math.pow(10, 8),
		n = Math.pow(10, 7),
		a = Math.pow(10, 5),
		o = Math.pow(10, 4),
		s = Math.pow(10, 3),
		r = "",
		l = void 0;
		return t - e >= 0 ? (r = "亿", l = Math.floor(t / i)) : t - i >= 0 ? (r = "亿", l = (Number(Math.floor(t / n) / 10).toFixed(1) + "").replace(/\.0$/, "")) : t - a > 0 ? (r = "万", l = Math.floor(t / o)) : t - o >= 0 ? (r = "万", l = (Number(Math.floor(t / s) / 10).toFixed(1) + "").replace(/\.0$/, "")) : l = t,
		l + r
	}
	function s(t) {
		if (t != +t) return "";
		var e = [],
		i = void 0;
		return t / 3600 >= 1 && (i = Math.floor(t / 3600), t -= 3600 * i, e.push(i)),
		t / 60 >= 1 ? (i = Math.floor(t / 60), t -= 60 * i, i < 10 && (i = "0" + i), e.push(i)) : e.push("00"),
		t < 10 && (t = "0" + t),
		e.push(t),
		e.join(":")
	}
	function r(t) {
		for (var e = 0,
		i = 0,
		n = t; null != n && n != document.body;) e += n.offsetLeft,
		i += n.offsetTop,
		n = n.offsetParent;
		return {
			left: e,
			top: i
		}
	}
	function l() {
		return window.innerHeight && window.innerWidth ? {
			winWidth: window.innerWidth,
			winHeight: window.innerHeight
		}: document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth ? {
			winWidth: document.documentElement.clientWidth,
			winHeight: document.documentElement.clientHeight
		}: void 0
	}
	function c(t) {
		return t === window ? Math.max(window.pageYOffset || 0, document.documentElement.scrollTop) : t.scrollTop
	}
	function u(t, e) {
		_(t, e) || (t.className = "" === t.className ? e: t.className + " " + e)
	}
	function d(t, e) {
		if (_(t, e)) {
			for (var i = " " + t.className.replace(/[\t\r\n]/g, "") + " "; i.indexOf(" " + e + " ") >= 0;) i = i.replace(" " + e + " ", " ");
			t.className = i.replace(/^\s+|\s+$/g, "")
		}
	}
	function _(t, e) {
		return e = e || "",
		0 !== e.replace(/\s/g, "").length && new RegExp(" " + e + " ").test(" " + t.className + " ")
	}
	function h(t, e, i) {
		var n = document.createElement("script");
		n.src = t,
		n.crossOrigin = "anonymous",
		n.onload = function() {
			e && e.call()
		},
		n.onerror = function() {
			i && i.call()
		},
		document.body.appendChild(n)
	}
	function m(t) {
		var e = window.onload;
		"function" != typeof window.onload ? window.onload = t: window.onload = function() {
			e(),
			t()
		}
	}
	var f = i(13),
	p = n(f);
	t.exports = {
		timeAgo: a,
		numFormat: o,
		durationFormat: s,
		elOffset: r,
		getWinSize: l,
		getScrollTop: c,
		addClass: u,
		removeClass: d,
		hasClass: _,
		loadScript: h,
		addWinLoadEvent: m
	}
},
,
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	function a(t) {
		t = t || {},
		t.errorCb = function() {
			window.location.href = "https://sso.toutiao.com/login/"
		},
		o(t)
	}
	function o(t) {
		t = t || {};
		var e = t.successCb ||
		function() {},
		i = t.errorCb ||
		function() {},
		n = t.url || "/user/info/"; (0, r.
	default)({
			url:
			n,
			method: "get",
			success: function(t) {
				var n = t || {};
				return "error" == n.message ? void i() : void e(n)
			},
			error: function() {
				i()
			}
		})
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var s = i(2),
	r = n(s);
	e.
default = a
},
, ,
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(125),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(7),
	o = n(a);
	e.
default = new o.
default
},
function(t, e) {
	"use strict";
	function i(t, e, n) {
		this.$children.forEach(function(a) {
			var o = a.$options.name;
			o === t ? a.$emit.apply(a, [e].concat(n)) : i.apply(a, [t, e].concat([n]))
		})
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}),
	e.
default = {
		methods: {
			dispatch: function(t, e, i) {
				for (var n = this.$parent || this.$root,
				a = n.$options.name; n && (!a || a !== t);) n = n.$parent,
				n && (a = n.$options.name);
				n && n.$emit.apply(n, [e].concat(i))
			},
			broadcast: function(t, e, n) {
				i.call(this, t, e, n)
			}
		}
	}
},
function(t, e, i) {
	i(85);
	var n = i(1)(i(51), i(139), null, null);
	t.exports = n.exports
},
, ,
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	function a(t) {
		var e, i = 1,
		n = 0;
		if (t) for (i = 0, e = t.length - 1; e >= 0; e--) n = t.charCodeAt(e),
		i = (i << 6 & 268435455) + n + (n << 14),
		n = 266338304 & i,
		i = 0 != n ? i ^ n >> 21 : i;
		return i
	}
	function o() {
		var t = k;
		if (t) return t;
		var e = new Date - 0,
		i = window.location.href,
		n = a(i);
		return t = "" + e + n + Math.random() + Math.random() + Math.random() + Math.random(),
		t = t.replace(/\./g, "").substring(0, 32),
		k = t,
		t
	}
	function s(t, e, i) {
		if (t.addEventListener) return t.addEventListener(e, i, !1),
		i;
		if (t.attachEvent) {
			var n = function() {
				var e = window.event;
				e.target = e.srcElement,
				i.call(t, e)
			};
			return t.attachEvent("on" + e, n),
			n
		}
	}
	function r(t, e) {
		if (!t) return "";
		var i = t.getAttribute(e);
		return i ? i: ""
	}
	function l(t, e, i) {
		t && t.setAttribute(e, i)
	}
	function c(t) {
		var e = t.getBoundingClientRect();
		return e.top + 10 < A.winHeight && e.bottom > 10
	}
	function u() {
		return window.innerHeight && window.innerWidth ? {
			winWidth: window.innerWidth,
			winHeight: window.innerHeight
		}: document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth ? {
			winWidth: document.documentElement.clientWidth,
			winHeight: document.documentElement.clientHeight
		}: {
			winWidth: 0,
			winHeight: 0
		}
	}
	function d(t) {
		var e, i = j[t];
		if (e = {
			ad_qihu_id: t,
			article_genre: "ad",
			single_mode: !0,
			ad_label: "广告",
			source_url: i.curl || "",
			image_url: i.img || "",
			title: i.title || "",
			source: i.src || "",
			behot_time: Math.floor((new Date).getTime() / 1e3)
		},
		i.assets && i.assets.length) {
			e.image_list = [];
			for (var n = 0; n < i.assets.length; n++) {
				var a = i.assets[n];
				e.image_list.push({
					url: a.img,
					source_url: a.curl
				})
			}
			e.has_gallery = !0,
			e.single_mode = !1
		}
		return e
	}
	function _(t) {
		var e = [];
		for (var i in t) e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
		return e.join("&")
	}
	function h(t) {
		if (t = t || {},
		!t.url) return ! 1;
		var e = document.getElementsByTagName("head")[0],
		i = _(t.data),
		n = document.createElement("script");
		n.setAttribute("async", ""),
		e.appendChild(n),
		n.src = t.url + "?" + i
	}
	function m(t) {
		h({
			url: E,
			data: {
				jsonp: "_qihu_jsonpFun_",
				type: 1,
				of: 4,
				newf: 1,
				showid: T,
				ref: "toutiao.com",
				uid: o(),
				scheme: window.location.protocol.slice(0, -1),
				impct: t,
				time: "ts_" + +new Date
			}
		})
	}
	function f() {
		for (var t, e = 0,
		i = I.length; e < i; e++) t = I[e],
		c(t) ? 1 != r(t, "ad_show") && (l(t, "ad_show", 1), p(r(t, "ad_qihu_id"), M, "show")) : l(t, "ad_show", 0)
	}
	function p(t, e, i, n) {
		var a, o = j[t];
		if (o) {
			a = "show" == i ? o.imptk: o.clktk;
			for (var s = 0,
			r = a.length; s < r; s++) window._ad_qihu_img_ = new Image,
			window._ad_qihu_img_.src = a[s];
			var l = e + "_" + i;
			n && (l += "_" + n),
			window.ttAnalysis && window.ttAnalysis.send("event", {
				ev: l
			})
		}
	}
	function g() {
		return j.length - (C + 1) < 2 && m(5),
		C + 1 < j.length ? d(++C) : null
	}
	function v(t) {
		var e, i = g(),
		n = !1;
		if (i && t.length) {
			for (var a = 0,
			o = t.length; a < o; a++) if (t[a].ad_id) {
				n = !0,
				t[a] = i;
				break
			}
			n || (e = t.length > 4 ? 4 : t.length, t.splice(e, 0, i))
		}
	}
	function w(t, e) {
		I = t,
		M = e,
		f()
	}
	function x(t, e, i, n) {
		p(t, e, i, n)
	}
	var y = i(6),
	b = n(y),
	k = 0,
	C = -1,
	j = [],
	I = [],
	M = "",
	T = "P5AcFE",
	S = "http://show.g.mediav.com/s",
	P = "https://show-g.mediav.com/s",
	E = 0 === window.location.protocol.indexOf("https") ? P: S,
	A = u();
	window._qihu_jsonpFun_ = function(t) {
		t && t.ads && t.ads.length && (j = j.concat(t.ads), window.ttAnalysis && window.ttAnalysis.send("event", {
			ev: "feed_qihu_adshow_count",
			ext_id: t.ads.length
		}))
	},
	s(window, "scroll", (0, b.
default)(function() {
		f()
	},
	200)),
	t.exports = {
		insertQihuAd: v,
		qhSetAds: w,
		qhSendMsg: x
	}
},
, , ,
function(t, e, i) {
	i(105);
	var n = i(1)(i(50), i(159), null, null);
	t.exports = n.exports
},
, , , , ,
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(129),
	o = n(a);
	e.
default = o.
default
},
,
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(113),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(115),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(74),
	o = n(a),
	s = i(187),
	r = n(s),
	l = i(188),
	c = n(l),
	u = i(2),
	d = n(u),
	_ = i(211),
	h = i(39),
	m = n(h),
	f = i(3),
	p = i(14),
	g = i(189),
	v = function() {
		function t(e) { (0, r.
		default)(this, t),
			this.list = [],
			this.lock = !1,
			this._stickItem = [],
			this._refreshItem = null,
			this._initList = null,
			this.params = {
				category: "__all__",
				utm_source: "toutiao",
				widen: 1,
				tadrequire: !0
			},
			this.params.category = this._category = e.category || "__all__",
			"video" === this.params.category && (this.params.new_video_channel = 1),
			this._url = e.url + "?",
			this._qhAddSupport = e.qhAdSupport,
			this._sourceFlags = {},
			this._frequency = 0,
			this._initList = this._feedListInit(e.initList || [])
		}
		return (0, c.
	default)(t, [{
			key: "_feedListInit",
			value: function(t) {
				return this._dataPreHandle(t)
			}
		},
		{
			key: "getList",
			value: function() {
				var t = this.list;
				return this._refreshItem && (t = [].concat(t.slice(0, this._refreshItem._index), [this._refreshItem], t.slice(this._refreshItem._index))),
				this._stickItem && (t = this._stickItem.concat(t)),
				this._initList && (t = this._initList.concat(t)),
				t
			}
		},
		{
			key: "refresh",
			value: function(t, e) {
				this._getData("refresh", t, e)
			}
		},
		{
			key: "loadMore",
			value: function(t, e) {
				this._getData("loadmore", t, e)
			}
		},
		{
			key: "unshiftItem",
			value: function(t, e, i) {
				t = this._dataPreHandle(t),
				this.list = t.concat(this.list),
				e && e(this.getList(), t.length),
				i && i()
			}
		},
		{
			key: "updateTime",
			value: function() {
				var t = this.getList();
				return t.forEach(function(t) {
					t.time_ago = (0, f.timeAgo)(t.behot_time)
				}),
				t
			}
		},
		{
			key: "dislikeItem",
			value: function(t) {
				var e = -1,
				i = function(e) {
					var i = -1;
					e = e || [];
					for (var n = 0,
					a = e.length; n < a; n++) if (e[n].group_id == t) {
						i = n;
						break
					}
					return i >= 0 && e.splice(i, 1),
					i
				};
				return e = i(this._initList),
				e === -1 && (e = i(this._stickItem)),
				e === -1 && (e = i(this.list), e !== -1 && this._refreshItem && (e >= this._refreshItem._index ? this._refreshItem._index: --this._refreshItem._index)),
				this.getList()
			}
		},
		{
			key: "_getData",
			value: function(t, e, i) {
				var n = this;
				if (!this.lock) {
					this.lock = !0,
					this._setParams(t);
					var a = function() {
						n.lock = !1,
						i && i()
					}; (0, d.
				default)({
						url:
						this.url,
						data: this.params,
						success: function(i) {
							var o = i || {},
							s = o.data || [],
							r = s.length,
							l = o.next && o.next.max_behot_time;
							"success" === o.message && r && (n._qihuAdInsert(s), s = n._dataPreHandle(s), "refresh" === t ? (n._refreshItem = {
								refresh_mode: !0,
								behot_time: l,
								time_ago: (0, f.timeAgo)(l),
								_index: s.length
							},
							n.list = s.concat(n.list)) : n.list = n.list.concat(s), e && e(n.getList(), r)),
							a()
						},
						error: function() {
							a()
						}
					})
				}
			}
		},
		{
			key: "_qihuAdInsert",
			value: function(t) {
				this._qhAddSupport && (0 !== this._frequency && this._frequency % 2 === 0 || (0, p.insertQihuAd)(t), this.params.tadrequire = !this.params.tadrequire, this._frequency++)
			}
		},
		{
			key: "_dataPreHandle",
			value: function(t) {
				var e = this;
				if (!Array.isArray(t) || 0 === t.length) return [];
				var i = [],
				n = this._stickItem || [];
				return t[t.length - 1].honey && t.pop(),
				t.forEach(function(t, n) {
					e._dataChange(t),
					t.is_stick && i.push(n)
				}),
				i.length > 0 && (i.reverse().forEach(function(e) {
					var i = t.splice(e, 1)[0];
					n.unshift(i)
				}), n = (0, _.unionWith)(n,
				function(t, e) {
					return t.group_id === e.group_id
				})),
				this._stickItem = n,
				window.ttAnalysis && window.ttAnalysis.send("event", {
					ev: "article_show_count",
					ext_id: t.length
				}),
				t
			}
		},
		{
			key: "_dataChange",
			value: function(t) {
				t.time_ago = (0, f.timeAgo)(t.behot_time),
				t.comments_count = (0, f.numFormat)(t.comments_count),
				"__all__" === this._category && this._tagHandle(t),
				this._mediaHandle(t)
			}
		},
		{
			key: "_mediaHandle",
			value: function(t) {
				if (!t.media_url) {
					var e = t.source && t.source.replace(/\s*/gi, "");
					t.source_tag = e ? e.slice(0, 1) : "",
					void 0 === this._sourceFlags[e] && (this._sourceFlags[e] = Math.floor(6 * Math.random())),
					t.avatar_style = "avatar-style-" + this._sourceFlags[e]
				}
			}
		},
		{
			key: "_tagHandle",
			value: function(t) {
				var e = {
					"热点": "hot",
					"视频": "video",
					"图片": "image",
					"社会": "society",
					"汽车": "car",
					"体育": "sport",
					"财经": "finance",
					"科技": "technology",
					"娱乐": "entertainment"
				};
				t.chinese_tag && (t.tag_style = "tag-style-" + (e[t.chinese_tag] || "other"))
			}
		},
		{
			key: "_setParams",
			value: function(t) {
				var e = (0, m.
			default)(),
				i = 0;
				this.url = this._url,
				"refresh" === t ? (i = this.list.length > 0 ? this.list[0].behot_time: 0, this.url += "min_behot_time=" + i) : (i = this.list.length > 0 ? this.list[this.list.length - 1].behot_time: 0, this.url += "max_behot_time=" + i);
				var n = (0, g.sign)(i + ""); (0, o.
			default)(this.params, {
					as: e.as,
					cp: e.cp,
					_signature: n
				})
			}
		}]),
		t
	} ();
	e.
default = v
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	function a(t) {
		var e, i = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
		return (e = document.cookie.match(i)) ? unescape(e[2]) : null
	}
	function o(t, e, i) {
		if (t.addEventListener) return t.addEventListener(e, i, !1),
		i;
		if (t.attachEvent) {
			var n = function() {
				var e = window.event;
				e.target = e.srcElement,
				i.call(t, e)
			};
			return t.attachEvent("on" + e, n),
			n
		}
	}
	function s(t, e) {
		if (!t) return "";
		var i = t.getAttribute(e);
		return i ? i: ""
	}
	function r(t, e, i) {
		t && t.setAttribute(e, i)
	}
	function l() {
		return window.innerHeight && window.innerWidth ? {
			winWidth: window.innerWidth,
			winHeight: window.innerHeight
		}: document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth ? {
			winWidth: document.documentElement.clientWidth,
			winHeight: document.documentElement.clientHeight
		}: void 0
	}
	function c(t) {
		var e = t.getBoundingClientRect();
		return e.top + 16 < x.winHeight && e.bottom > 16
	}
	function u(t) {
		var e = XMLHttpRequest ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP"),
		i = (t.type || "get").toUpperCase(),
		n = t.url,
		a = t.data;
		if (n) {
			var o = [];
			for (var s in a) o.push(s + "=" + a[s]);
			"GET" === i ? (n = n + "?" + o.join("&") + "&_=" + Math.random(), e.open(i, n, !0), e.send()) : (e.open(i, n, !0), e.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.send(o.join("&"))),
			e.onload = function() { (e.status >= 200 && e.status < 300 || 304 == e.status) && t.success && t.success.call(e, e.responseText)
			}
		}
	}
	function d(t) {
		u({
			url: v,
			type: "POST",
			data: {
				value: t.value,
				tag: "embeded_ad",
				label: t.label,
				is_ad_event: "1",
				log_extra: t.extra,
				category: "web",
				utm_source: a("utm_source"),
				csrfmiddlewaretoken: a("csrftoken")
			},
			success: function(t) {}
		}),
		window.ttAnalysis && window.ttAnalysis.send("event", {
			ev: "feed_ad_" + t.label
		})
	}
	function _(t) {
		var e = new Image;
		e.src = t
	}
	function h() {
		for (var t, e = 0,
		i = w.length; e < i; e++) {
			var n = w[e];
			c(n) ? 1 != s(n, "ad_show") && (r(n, "ad_show", 1), t = {
				value: s(n, "ad_id"),
				extra: s(n, "ad_extra"),
				label: "show",
				track: s(n, "ad_track")
			},
			t.track && _(t.track), d(t)) : r(n, "ad_show", 0)
		}
	}
	function m(t) {
		w = t,
		h()
	}
	function f(t) {
		d(t)
	}
	var p = i(6),
	g = n(p),
	v = "/action_log/",
	w = [],
	x = l();
	o(window, "scroll", (0, g.
default)(function() {
		h()
	},
	150)),
	o(window, "resize", (0, g.
default)(function() {
		x = l()
	},
	150)),
	t.exports = {
		ttSetAds: m,
		ttSendMsg: f
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(121),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(122),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(123),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(124),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(126),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(127),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(128),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(130),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(131),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	function a() {
		var t = Math.floor((new Date).getTime() / 1e3),
		e = t.toString(16).toUpperCase(),
		i = (0, s.
	default)(t).toString().toUpperCase();
		if (8 != e.length) return {
			as: "479BB4B7254C150",
			cp: "7E0AC8874BB0985"
		};
		for (var n = i.slice(0, 5), a = i.slice( - 5), o = "", r = 0; r < 5; r++) o += n[r] + e[r];
		for (var l = "",
		c = 0; c < 5; c++) l += e[c + 3] + a[c];
		return {
			as: "A1" + o + e.slice( - 3),
			cp: e.slice(0, 3) + l + "E1"
		}
	}
	var o = i(41),
	s = n(o);
	t.exports = a
},
function(t, e, i) {
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	var a, o, s, r = i(13),
	l = (n(r),
	function() {
		var t = "6649976",
		e = "http://s.share.baidu.com/",
		i = function() {
			var t = (new Date).getTime(),
			e = (new Date).getTime() + 1e3,
			i = (new Date).getTime() + 3e3;
			return t.toString(32) + e.toString(32) + i.toString(32)
		},
		n = function(t, e) {
			for (var i = t.length,
			n = "",
			a = 1; a <= e; a++) {
				var o = Math.floor(i * Math.random());
				n += t.charAt(o)
			}
			return n
		},
		a = function() {
			var t = (new Date).toString(36),
			e = n("0123456789abcdefghijklmnopqrstuvwxyz", 3);
			return t + e
		},
		o = function(n, o) {
			o = o || {};
			var s = i(),
			r = 0,
			l = "",
			c = document.title,
			u = o.wbuid || "",
			d = a(),
			_ = (window.isAppPage ? "app": "detail/list", encodeURIComponent(o.pic || "")),
			h = encodeURIComponent(o.url || ""),
			m = encodeURIComponent(o.comment || ""),
			f = encodeURIComponent(o.desc || "");
			"tsina" === n ? c = (o.text || c) + (o.weibotext || l) : ("tqq" === n && (o.text = o.text.replace("@今日头条", "@headlineapp")), c = o.text || c),
			c = encodeURIComponent(c.substring(0, 300));
			var p = "?click=1&url=" + h + "&uid=" + t + "&to=" + n + "&type=text&relateUid=" + u + "&pic=" + _ + "&title=" + c + "&key=&sign=on&desc=" + f + "&comment=" + m + "&searchPic=0&l=" + s + "&linkid=" + d + "&sloc=&apiType=0&buttonType=" + r,
			g = e + p,
			v = e + "commit" + p + "&t=" + Math.random(),
			w = function() {
				var t = [];
				return function(e) {
					var i = t.push(new Image) - 1;
					t[i].onload = function() {
						t[i] = t[i].onload = null
					},
					t[i].src = e
				}
			} ();
			setTimeout(function() {
				w(v)
			},
			1500),
			window.open(g, "_blank", "height=500,width=700,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no")
		};
		return o
	} ()); !
	function(i) {
		o = [],
		a = i,
		s = "function" == typeof a ? a.apply(e, o) : a,
		!(void 0 !== s && (t.exports = s))
	} (function() {
		return l
	})
},
function(t, e, i) {
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	var a, o = i(13);
	n(o); !
	function(n) {
		"use strict";
		function o(t, e) {
			var i = (65535 & t) + (65535 & e),
			n = (t >> 16) + (e >> 16) + (i >> 16);
			return n << 16 | 65535 & i
		}
		function s(t, e) {
			return t << e | t >>> 32 - e
		}
		function r(t, e, i, n, a, r) {
			return o(s(o(o(e, t), o(n, r)), a), i)
		}
		function l(t, e, i, n, a, o, s) {
			return r(e & i | ~e & n, t, e, a, o, s)
		}
		function c(t, e, i, n, a, o, s) {
			return r(e & n | i & ~n, t, e, a, o, s)
		}
		function u(t, e, i, n, a, o, s) {
			return r(e ^ i ^ n, t, e, a, o, s)
		}
		function d(t, e, i, n, a, o, s) {
			return r(i ^ (e | ~n), t, e, a, o, s)
		}
		function _(t, e) {
			t[e >> 5] |= 128 << e % 32,
			t[(e + 64 >>> 9 << 4) + 14] = e;
			var i, n, a, s, r, _ = 1732584193,
			h = -271733879,
			m = -1732584194,
			f = 271733878;
			for (i = 0; i < t.length; i += 16) n = _,
			a = h,
			s = m,
			r = f,
			_ = l(_, h, m, f, t[i], 7, -680876936),
			f = l(f, _, h, m, t[i + 1], 12, -389564586),
			m = l(m, f, _, h, t[i + 2], 17, 606105819),
			h = l(h, m, f, _, t[i + 3], 22, -1044525330),
			_ = l(_, h, m, f, t[i + 4], 7, -176418897),
			f = l(f, _, h, m, t[i + 5], 12, 1200080426),
			m = l(m, f, _, h, t[i + 6], 17, -1473231341),
			h = l(h, m, f, _, t[i + 7], 22, -45705983),
			_ = l(_, h, m, f, t[i + 8], 7, 1770035416),
			f = l(f, _, h, m, t[i + 9], 12, -1958414417),
			m = l(m, f, _, h, t[i + 10], 17, -42063),
			h = l(h, m, f, _, t[i + 11], 22, -1990404162),
			_ = l(_, h, m, f, t[i + 12], 7, 1804603682),
			f = l(f, _, h, m, t[i + 13], 12, -40341101),
			m = l(m, f, _, h, t[i + 14], 17, -1502002290),
			h = l(h, m, f, _, t[i + 15], 22, 1236535329),
			_ = c(_, h, m, f, t[i + 1], 5, -165796510),
			f = c(f, _, h, m, t[i + 6], 9, -1069501632),
			m = c(m, f, _, h, t[i + 11], 14, 643717713),
			h = c(h, m, f, _, t[i], 20, -373897302),
			_ = c(_, h, m, f, t[i + 5], 5, -701558691),
			f = c(f, _, h, m, t[i + 10], 9, 38016083),
			m = c(m, f, _, h, t[i + 15], 14, -660478335),
			h = c(h, m, f, _, t[i + 4], 20, -405537848),
			_ = c(_, h, m, f, t[i + 9], 5, 568446438),
			f = c(f, _, h, m, t[i + 14], 9, -1019803690),
			m = c(m, f, _, h, t[i + 3], 14, -187363961),
			h = c(h, m, f, _, t[i + 8], 20, 1163531501),
			_ = c(_, h, m, f, t[i + 13], 5, -1444681467),
			f = c(f, _, h, m, t[i + 2], 9, -51403784),
			m = c(m, f, _, h, t[i + 7], 14, 1735328473),
			h = c(h, m, f, _, t[i + 12], 20, -1926607734),
			_ = u(_, h, m, f, t[i + 5], 4, -378558),
			f = u(f, _, h, m, t[i + 8], 11, -2022574463),
			m = u(m, f, _, h, t[i + 11], 16, 1839030562),
			h = u(h, m, f, _, t[i + 14], 23, -35309556),
			_ = u(_, h, m, f, t[i + 1], 4, -1530992060),
			f = u(f, _, h, m, t[i + 4], 11, 1272893353),
			m = u(m, f, _, h, t[i + 7], 16, -155497632),
			h = u(h, m, f, _, t[i + 10], 23, -1094730640),
			_ = u(_, h, m, f, t[i + 13], 4, 681279174),
			f = u(f, _, h, m, t[i], 11, -358537222),
			m = u(m, f, _, h, t[i + 3], 16, -722521979),
			h = u(h, m, f, _, t[i + 6], 23, 76029189),
			_ = u(_, h, m, f, t[i + 9], 4, -640364487),
			f = u(f, _, h, m, t[i + 12], 11, -421815835),
			m = u(m, f, _, h, t[i + 15], 16, 530742520),
			h = u(h, m, f, _, t[i + 2], 23, -995338651),
			_ = d(_, h, m, f, t[i], 6, -198630844),
			f = d(f, _, h, m, t[i + 7], 10, 1126891415),
			m = d(m, f, _, h, t[i + 14], 15, -1416354905),
			h = d(h, m, f, _, t[i + 5], 21, -57434055),
			_ = d(_, h, m, f, t[i + 12], 6, 1700485571),
			f = d(f, _, h, m, t[i + 3], 10, -1894986606),
			m = d(m, f, _, h, t[i + 10], 15, -1051523),
			h = d(h, m, f, _, t[i + 1], 21, -2054922799),
			_ = d(_, h, m, f, t[i + 8], 6, 1873313359),
			f = d(f, _, h, m, t[i + 15], 10, -30611744),
			m = d(m, f, _, h, t[i + 6], 15, -1560198380),
			h = d(h, m, f, _, t[i + 13], 21, 1309151649),
			_ = d(_, h, m, f, t[i + 4], 6, -145523070),
			f = d(f, _, h, m, t[i + 11], 10, -1120210379),
			m = d(m, f, _, h, t[i + 2], 15, 718787259),
			h = d(h, m, f, _, t[i + 9], 21, -343485551),
			_ = o(_, n),
			h = o(h, a),
			m = o(m, s),
			f = o(f, r);
			return [_, h, m, f]
		}
		function h(t) {
			var e, i = "";
			for (e = 0; e < 32 * t.length; e += 8) i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
			return i
		}
		function m(t) {
			var e, i = [];
			for (i[(t.length >> 2) - 1] = void 0, e = 0; e < i.length; e += 1) i[e] = 0;
			for (e = 0; e < 8 * t.length; e += 8) i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
			return i
		}
		function f(t) {
			return h(_(m(t), 8 * t.length))
		}
		function p(t, e) {
			var i, n, a = m(t),
			o = [],
			s = [];
			for (o[15] = s[15] = void 0, a.length > 16 && (a = _(a, 8 * t.length)), i = 0; i < 16; i += 1) o[i] = 909522486 ^ a[i],
			s[i] = 1549556828 ^ a[i];
			return n = _(o.concat(m(e)), 512 + 8 * e.length),
			h(_(s.concat(n), 640))
		}
		function g(t) {
			var e, i, n = "0123456789abcdef",
			a = "";
			for (i = 0; i < t.length; i += 1) e = t.charCodeAt(i),
			a += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
			return a
		}
		function v(t) {
			return unescape(encodeURIComponent(t))
		}
		function w(t) {
			return f(v(t))
		}
		function x(t) {
			return g(w(t))
		}
		function y(t, e) {
			return p(v(t), v(e))
		}
		function b(t, e) {
			return g(y(t, e))
		}
		function k(t, e, i) {
			return e ? i ? y(e, t) : b(e, t) : i ? w(t) : x(t)
		}
		a = function() {
			return k
		}.call(e, i, e, t),
		!(void 0 !== a && (t.exports = a))
	} (void 0)
},
function(t, e) {
	"use strict";
	var i; !
	function() {
		function t(t) {
			this.mode = u.MODE_8BIT_BYTE,
			this.data = t,
			this.parsedData = [];
			for (var e = 0,
			i = this.data.length; e < i; e++) {
				var n = [],
				a = this.data.charCodeAt(e);
				a > 65536 ? (n[0] = 240 | (1835008 & a) >>> 18, n[1] = 128 | (258048 & a) >>> 12, n[2] = 128 | (4032 & a) >>> 6, n[3] = 128 | 63 & a) : a > 2048 ? (n[0] = 224 | (61440 & a) >>> 12, n[1] = 128 | (4032 & a) >>> 6, n[2] = 128 | 63 & a) : a > 128 ? (n[0] = 192 | (1984 & a) >>> 6, n[1] = 128 | 63 & a) : n[0] = a,
				this.parsedData.push(n)
			}
			this.parsedData = Array.prototype.concat.apply([], this.parsedData),
			this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
		}
		function e(t, e) {
			this.typeNumber = t,
			this.errorCorrectLevel = e,
			this.modules = null,
			this.moduleCount = 0,
			this.dataCache = null,
			this.dataList = []
		}
		function n(t, e) {
			if (void 0 == t.length) throw new Error(t.length + "/" + e);
			for (var i = 0; i < t.length && 0 == t[i];) i++;
			this.num = new Array(t.length - i + e);
			for (var n = 0; n < t.length - i; n++) this.num[n] = t[n + i]
		}
		function a(t, e) {
			this.totalCount = t,
			this.dataCount = e
		}
		function o() {
			this.buffer = [],
			this.length = 0
		}
		function s() {
			return "undefined" != typeof CanvasRenderingContext2D
		}
		function r() {
			var t = !1,
			e = navigator.userAgent;
			if (/android/i.test(e)) {
				t = !0;
				var i = e.toString().match(/android ([0-9]\.[0-9])/i);
				i && i[1] && (t = parseFloat(i[1]))
			}
			return t
		}
		function l(t, e) {
			for (var i = 1,
			n = c(t), a = 0, o = p.length; a <= o; a++) {
				var s = 0;
				switch (e) {
				case d.L:
					s = p[a][0];
					break;
				case d.M:
					s = p[a][1];
					break;
				case d.Q:
					s = p[a][2];
					break;
				case d.H:
					s = p[a][3]
				}
				if (n <= s) break;
				i++
			}
			if (i > p.length) throw new Error("Too long data");
			return i
		}
		function c(t) {
			var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
			return e.length + (e.length != t ? 3 : 0)
		}
		t.prototype = {
			getLength: function(t) {
				return this.parsedData.length
			},
			write: function(t) {
				for (var e = 0,
				i = this.parsedData.length; e < i; e++) t.put(this.parsedData[e], 8)
			}
		},
		e.prototype = {
			addData: function(e) {
				var i = new t(e);
				this.dataList.push(i),
				this.dataCache = null
			},
			isDark: function(t, e) {
				if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
				return this.modules[t][e]
			},
			getModuleCount: function() {
				return this.moduleCount
			},
			make: function() {
				this.makeImpl(!1, this.getBestMaskPattern())
			},
			makeImpl: function(t, i) {
				this.moduleCount = 4 * this.typeNumber + 17,
				this.modules = new Array(this.moduleCount);
				for (var n = 0; n < this.moduleCount; n++) {
					this.modules[n] = new Array(this.moduleCount);
					for (var a = 0; a < this.moduleCount; a++) this.modules[n][a] = null
				}
				this.setupPositionProbePattern(0, 0),
				this.setupPositionProbePattern(this.moduleCount - 7, 0),
				this.setupPositionProbePattern(0, this.moduleCount - 7),
				this.setupPositionAdjustPattern(),
				this.setupTimingPattern(),
				this.setupTypeInfo(t, i),
				this.typeNumber >= 7 && this.setupTypeNumber(t),
				null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
				this.mapData(this.dataCache, i)
			},
			setupPositionProbePattern: function(t, e) {
				for (var i = -1; i <= 7; i++) if (! (t + i <= -1 || this.moduleCount <= t + i)) for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (0 <= i && i <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= n && n <= 4 ? this.modules[t + i][e + n] = !0 : this.modules[t + i][e + n] = !1)
			},
			getBestMaskPattern: function() {
				for (var t = 0,
				e = 0,
				i = 0; i < 8; i++) {
					this.makeImpl(!0, i);
					var n = h.getLostPoint(this); (0 == i || t > n) && (t = n, e = i)
				}
				return e
			},
			createMovieClip: function(t, e, i) {
				var n = t.createEmptyMovieClip(e, i),
				a = 1;
				this.make();
				for (var o = 0; o < this.modules.length; o++) for (var s = o * a,
				r = 0; r < this.modules[o].length; r++) {
					var l = r * a,
					c = this.modules[o][r];
					c && (n.beginFill(0, 100), n.moveTo(l, s), n.lineTo(l + a, s), n.lineTo(l + a, s + a), n.lineTo(l, s + a), n.endFill())
				}
				return n
			},
			setupTimingPattern: function() {
				for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
				for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
			},
			setupPositionAdjustPattern: function() {
				for (var t = h.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var i = 0; i < t.length; i++) {
					var n = t[e],
					a = t[i];
					if (null == this.modules[n][a]) for (var o = -2; o <= 2; o++) for (var s = -2; s <= 2; s++) o == -2 || 2 == o || s == -2 || 2 == s || 0 == o && 0 == s ? this.modules[n + o][a + s] = !0 : this.modules[n + o][a + s] = !1
				}
			},
			setupTypeNumber: function(t) {
				for (var e = h.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
					var n = !t && 1 == (e >> i & 1);
					this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n
				}
				for (var i = 0; i < 18; i++) {
					var n = !t && 1 == (e >> i & 1);
					this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n
				}
			},
			setupTypeInfo: function(t, e) {
				for (var i = this.errorCorrectLevel << 3 | e,
				n = h.getBCHTypeInfo(i), a = 0; a < 15; a++) {
					var o = !t && 1 == (n >> a & 1);
					a < 6 ? this.modules[a][8] = o: a < 8 ? this.modules[a + 1][8] = o: this.modules[this.moduleCount - 15 + a][8] = o
				}
				for (var a = 0; a < 15; a++) {
					var o = !t && 1 == (n >> a & 1);
					a < 8 ? this.modules[8][this.moduleCount - a - 1] = o: a < 9 ? this.modules[8][15 - a - 1 + 1] = o: this.modules[8][15 - a - 1] = o
				}
				this.modules[this.moduleCount - 8][8] = !t
			},
			mapData: function(t, e) {
				for (var i = -1,
				n = this.moduleCount - 1,
				a = 7,
				o = 0,
				s = this.moduleCount - 1; s > 0; s -= 2) for (6 == s && s--;;) {
					for (var r = 0; r < 2; r++) if (null == this.modules[n][s - r]) {
						var l = !1;
						o < t.length && (l = 1 == (t[o] >>> a & 1));
						var c = h.getMask(e, n, s - r);
						c && (l = !l),
						this.modules[n][s - r] = l,
						a--,
						a == -1 && (o++, a = 7)
					}
					if (n += i, n < 0 || this.moduleCount <= n) {
						n -= i,
						i = -i;
						break
					}
				}
			}
		},
		e.PAD0 = 236,
		e.PAD1 = 17,
		e.createData = function(t, i, n) {
			for (var s = a.getRSBlocks(t, i), r = new o, l = 0; l < n.length; l++) {
				var c = n[l];
				r.put(c.mode, 4),
				r.put(c.getLength(), h.getLengthInBits(c.mode, t)),
				c.write(r)
			}
			for (var u = 0,
			l = 0; l < s.length; l++) u += s[l].dataCount;
			if (r.getLengthInBits() > 8 * u) throw new Error("code length overflow. (" + r.getLengthInBits() + ">" + 8 * u + ")");
			for (r.getLengthInBits() + 4 <= 8 * u && r.put(0, 4); r.getLengthInBits() % 8 != 0;) r.putBit(!1);
			for (;;) {
				if (r.getLengthInBits() >= 8 * u) break;
				if (r.put(e.PAD0, 8), r.getLengthInBits() >= 8 * u) break;
				r.put(e.PAD1, 8)
			}
			return e.createBytes(r, s)
		},
		e.createBytes = function(t, e) {
			for (var i = 0,
			a = 0,
			o = 0,
			s = new Array(e.length), r = new Array(e.length), l = 0; l < e.length; l++) {
				var c = e[l].dataCount,
				u = e[l].totalCount - c;
				a = Math.max(a, c),
				o = Math.max(o, u),
				s[l] = new Array(c);
				for (var d = 0; d < s[l].length; d++) s[l][d] = 255 & t.buffer[d + i];
				i += c;
				var _ = h.getErrorCorrectPolynomial(u),
				m = new n(s[l], _.getLength() - 1),
				f = m.mod(_);
				r[l] = new Array(_.getLength() - 1);
				for (var d = 0; d < r[l].length; d++) {
					var p = d + f.getLength() - r[l].length;
					r[l][d] = p >= 0 ? f.get(p) : 0
				}
			}
			for (var g = 0,
			d = 0; d < e.length; d++) g += e[d].totalCount;
			for (var v = new Array(g), w = 0, d = 0; d < a; d++) for (var l = 0; l < e.length; l++) d < s[l].length && (v[w++] = s[l][d]);
			for (var d = 0; d < o; d++) for (var l = 0; l < e.length; l++) d < r[l].length && (v[w++] = r[l][d]);
			return v
		};
		for (var u = {
			MODE_NUMBER: 1,
			MODE_ALPHA_NUM: 2,
			MODE_8BIT_BYTE: 4,
			MODE_KANJI: 8
		},
		d = {
			L: 1,
			M: 0,
			Q: 3,
			H: 2
		},
		_ = {
			PATTERN000: 0,
			PATTERN001: 1,
			PATTERN010: 2,
			PATTERN011: 3,
			PATTERN100: 4,
			PATTERN101: 5,
			PATTERN110: 6,
			PATTERN111: 7
		},
		h = {
			PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
			G15: 1335,
			G18: 7973,
			G15_MASK: 21522,
			getBCHTypeInfo: function(t) {
				for (var e = t << 10; h.getBCHDigit(e) - h.getBCHDigit(h.G15) >= 0;) e ^= h.G15 << h.getBCHDigit(e) - h.getBCHDigit(h.G15);
				return (t << 10 | e) ^ h.G15_MASK
			},
			getBCHTypeNumber: function(t) {
				for (var e = t << 12; h.getBCHDigit(e) - h.getBCHDigit(h.G18) >= 0;) e ^= h.G18 << h.getBCHDigit(e) - h.getBCHDigit(h.G18);
				return t << 12 | e
			},
			getBCHDigit: function(t) {
				for (var e = 0; 0 != t;) e++,
				t >>>= 1;
				return e
			},
			getPatternPosition: function(t) {
				return h.PATTERN_POSITION_TABLE[t - 1]
			},
			getMask: function(t, e, i) {
				switch (t) {
				case _.PATTERN000:
					return (e + i) % 2 == 0;
				case _.PATTERN001:
					return e % 2 == 0;
				case _.PATTERN010:
					return i % 3 == 0;
				case _.PATTERN011:
					return (e + i) % 3 == 0;
				case _.PATTERN100:
					return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;
				case _.PATTERN101:
					return e * i % 2 + e * i % 3 == 0;
				case _.PATTERN110:
					return (e * i % 2 + e * i % 3) % 2 == 0;
				case _.PATTERN111:
					return (e * i % 3 + (e + i) % 2) % 2 == 0;
				default:
					throw new Error("bad maskPattern:" + t)
				}
			},
			getErrorCorrectPolynomial: function(t) {
				for (var e = new n([1], 0), i = 0; i < t; i++) e = e.multiply(new n([1, m.gexp(i)], 0));
				return e
			},
			getLengthInBits: function(t, e) {
				if (1 <= e && e < 10) switch (t) {
				case u.MODE_NUMBER:
					return 10;
				case u.MODE_ALPHA_NUM:
					return 9;
				case u.MODE_8BIT_BYTE:
					return 8;
				case u.MODE_KANJI:
					return 8;
				default:
					throw new Error("mode:" + t)
				} else if (e < 27) switch (t) {
				case u.MODE_NUMBER:
					return 12;
				case u.MODE_ALPHA_NUM:
					return 11;
				case u.MODE_8BIT_BYTE:
					return 16;
				case u.MODE_KANJI:
					return 10;
				default:
					throw new Error("mode:" + t)
				} else {
					if (! (e < 41)) throw new Error("type:" + e);
					switch (t) {
					case u.MODE_NUMBER:
						return 14;
					case u.MODE_ALPHA_NUM:
						return 13;
					case u.MODE_8BIT_BYTE:
						return 16;
					case u.MODE_KANJI:
						return 12;
					default:
						throw new Error("mode:" + t)
					}
				}
			},
			getLostPoint: function(t) {
				for (var e = t.getModuleCount(), i = 0, n = 0; n < e; n++) for (var a = 0; a < e; a++) {
					for (var o = 0,
					s = t.isDark(n, a), r = -1; r <= 1; r++) if (! (n + r < 0 || e <= n + r)) for (var l = -1; l <= 1; l++) a + l < 0 || e <= a + l || 0 == r && 0 == l || s == t.isDark(n + r, a + l) && o++;
					o > 5 && (i += 3 + o - 5)
				}
				for (var n = 0; n < e - 1; n++) for (var a = 0; a < e - 1; a++) {
					var c = 0;
					t.isDark(n, a) && c++,
					t.isDark(n + 1, a) && c++,
					t.isDark(n, a + 1) && c++,
					t.isDark(n + 1, a + 1) && c++,
					0 != c && 4 != c || (i += 3)
				}
				for (var n = 0; n < e; n++) for (var a = 0; a < e - 6; a++) t.isDark(n, a) && !t.isDark(n, a + 1) && t.isDark(n, a + 2) && t.isDark(n, a + 3) && t.isDark(n, a + 4) && !t.isDark(n, a + 5) && t.isDark(n, a + 6) && (i += 40);
				for (var a = 0; a < e; a++) for (var n = 0; n < e - 6; n++) t.isDark(n, a) && !t.isDark(n + 1, a) && t.isDark(n + 2, a) && t.isDark(n + 3, a) && t.isDark(n + 4, a) && !t.isDark(n + 5, a) && t.isDark(n + 6, a) && (i += 40);
				for (var u = 0,
				a = 0; a < e; a++) for (var n = 0; n < e; n++) t.isDark(n, a) && u++;
				var d = Math.abs(100 * u / e / e - 50) / 5;
				return i += 10 * d
			}
		},
		m = {
			glog: function(t) {
				if (t < 1) throw new Error("glog(" + t + ")");
				return m.LOG_TABLE[t]
			},
			gexp: function(t) {
				for (; t < 0;) t += 255;
				for (; t >= 256;) t -= 255;
				return m.EXP_TABLE[t]
			},
			EXP_TABLE: new Array(256),
			LOG_TABLE: new Array(256)
		},
		f = 0; f < 8; f++) m.EXP_TABLE[f] = 1 << f;
		for (var f = 8; f < 256; f++) m.EXP_TABLE[f] = m.EXP_TABLE[f - 4] ^ m.EXP_TABLE[f - 5] ^ m.EXP_TABLE[f - 6] ^ m.EXP_TABLE[f - 8];
		for (var f = 0; f < 255; f++) m.LOG_TABLE[m.EXP_TABLE[f]] = f;
		n.prototype = {
			get: function(t) {
				return this.num[t]
			},
			getLength: function() {
				return this.num.length
			},
			multiply: function(t) {
				for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++) for (var a = 0; a < t.getLength(); a++) e[i + a] ^= m.gexp(m.glog(this.get(i)) + m.glog(t.get(a)));
				return new n(e, 0)
			},
			mod: function(t) {
				if (this.getLength() - t.getLength() < 0) return this;
				for (var e = m.glog(this.get(0)) - m.glog(t.get(0)), i = new Array(this.getLength()), a = 0; a < this.getLength(); a++) i[a] = this.get(a);
				for (var a = 0; a < t.getLength(); a++) i[a] ^= m.gexp(m.glog(t.get(a)) + e);
				return new n(i, 0).mod(t)
			}
		},
		a.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
		a.getRSBlocks = function(t, e) {
			var i = a.getRsBlockTable(t, e);
			if (void 0 == i) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
			for (var n = i.length / 3,
			o = [], s = 0; s < n; s++) for (var r = i[3 * s + 0], l = i[3 * s + 1], c = i[3 * s + 2], u = 0; u < r; u++) o.push(new a(l, c));
			return o
		},
		a.getRsBlockTable = function(t, e) {
			switch (e) {
			case d.L:
				return a.RS_BLOCK_TABLE[4 * (t - 1) + 0];
			case d.M:
				return a.RS_BLOCK_TABLE[4 * (t - 1) + 1];
			case d.Q:
				return a.RS_BLOCK_TABLE[4 * (t - 1) + 2];
			case d.H:
				return a.RS_BLOCK_TABLE[4 * (t - 1) + 3];
			default:
				return
			}
		},
		o.prototype = {
			get: function(t) {
				var e = Math.floor(t / 8);
				return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
			},
			put: function(t, e) {
				for (var i = 0; i < e; i++) this.putBit(1 == (t >>> e - i - 1 & 1))
			},
			getLengthInBits: function() {
				return this.length
			},
			putBit: function(t) {
				var e = Math.floor(this.length / 8);
				this.buffer.length <= e && this.buffer.push(0),
				t && (this.buffer[e] |= 128 >>> this.length % 8),
				this.length++
			}
		};
		var p = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
		g = function() {
			var t = function(t, e) {
				this._el = t,
				this._htOption = e
			};
			return t.prototype.draw = function(t) {
				function e(t, e) {
					var i = document.createElementNS("http://www.w3.org/2000/svg", t);
					for (var n in e) e.hasOwnProperty(n) && i.setAttribute(n, e[n]);
					return i
				}
				var i = this._htOption,
				n = this._el,
				a = t.getModuleCount();
				Math.floor(i.width / a),
				Math.floor(i.height / a);
				this.clear();
				var o = e("svg", {
					viewBox: "0 0 " + String(a) + " " + String(a),
					width: "100%",
					height: "100%",
					fill: i.colorLight
				});
				o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"),
				n.appendChild(o),
				o.appendChild(e("rect", {
					fill: i.colorLight,
					width: "100%",
					height: "100%"
				})),
				o.appendChild(e("rect", {
					fill: i.colorDark,
					width: "1",
					height: "1",
					id: "template"
				}));
				for (var s = 0; s < a; s++) for (var r = 0; r < a; r++) if (t.isDark(s, r)) {
					var l = e("use", {
						x: String(r),
						y: String(s)
					});
					l.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"),
					o.appendChild(l)
				}
			},
			t.prototype.clear = function() {
				for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
			},
			t
		} (),
		v = "svg" === document.documentElement.tagName.toLowerCase(),
		w = v ? g: s() ?
		function() {
			function t() {
				this._elImage.src = this._elCanvas.toDataURL("image/png"),
				this._elImage.style.display = "block",
				this._elCanvas.style.display = "none"
			}
			function e(t, e) {
				var i = this;
				if (i._fFail = e, i._fSuccess = t, null === i._bSupportDataURI) {
					var n = document.createElement("img"),
					a = function() {
						i._bSupportDataURI = !1,
						i._fFail && i._fFail.call(i)
					},
					o = function() {
						i._bSupportDataURI = !0,
						i._fSuccess && i._fSuccess.call(i)
					};
					return n.onabort = a,
					n.onerror = a,
					n.onload = o,
					void(n.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
				}
				i._bSupportDataURI === !0 && i._fSuccess ? i._fSuccess.call(i) : i._bSupportDataURI === !1 && i._fFail && i._fFail.call(i)
			}
			if (this && this._android && this._android <= 2.1) {
				var i = 1 / window.devicePixelRatio,
				n = CanvasRenderingContext2D.prototype.drawImage;
				CanvasRenderingContext2D.prototype.drawImage = function(t, e, a, o, s, r, l, c, u) {
					if ("nodeName" in t && /img/i.test(t.nodeName)) for (var d = arguments.length - 1; d >= 1; d--) arguments[d] = arguments[d] * i;
					else "undefined" == typeof c && (arguments[1] *= i, arguments[2] *= i, arguments[3] *= i, arguments[4] *= i);
					n.apply(this, arguments)
				}
			}
			var a = function(t, e) {
				this._bIsPainted = !1,
				this._android = r(),
				this._htOption = e,
				this._elCanvas = document.createElement("canvas"),
				this._elCanvas.width = e.width,
				this._elCanvas.height = e.height,
				t.appendChild(this._elCanvas),
				this._el = t,
				this._oContext = this._elCanvas.getContext("2d"),
				this._bIsPainted = !1,
				this._elImage = document.createElement("img"),
				this._elImage.alt = "Scan me!",
				this._elImage.style.display = "none",
				this._el.appendChild(this._elImage),
				this._bSupportDataURI = null
			};
			return a.prototype.draw = function(t) {
				var e = this._elImage,
				i = this._oContext,
				n = this._htOption,
				a = t.getModuleCount(),
				o = n.width / a,
				s = n.height / a,
				r = Math.round(o),
				l = Math.round(s);
				e.style.display = "none",
				this.clear();
				for (var c = 0; c < a; c++) for (var u = 0; u < a; u++) {
					var d = t.isDark(c, u),
					_ = u * o,
					h = c * s;
					i.strokeStyle = d ? n.colorDark: n.colorLight,
					i.lineWidth = 1,
					i.fillStyle = d ? n.colorDark: n.colorLight,
					i.fillRect(_, h, o, s),
					i.strokeRect(Math.floor(_) + .5, Math.floor(h) + .5, r, l),
					i.strokeRect(Math.ceil(_) - .5, Math.ceil(h) - .5, r, l)
				}
				this._bIsPainted = !0
			},
			a.prototype.makeImage = function() {
				this._bIsPainted && e.call(this, t)
			},
			a.prototype.isPainted = function() {
				return this._bIsPainted
			},
			a.prototype.clear = function() {
				this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height),
				this._bIsPainted = !1
			},
			a.prototype.round = function(t) {
				return t ? Math.floor(1e3 * t) / 1e3: t
			},
			a
		} () : function() {
			var t = function(t, e) {
				this._el = t,
				this._htOption = e
			};
			return t.prototype.draw = function(t) {
				for (var e = this._htOption,
				i = this._el,
				n = t.getModuleCount(), a = Math.floor(e.width / n), o = Math.floor(e.height / n), s = ['<table style="border:0;border-collapse:collapse;">'], r = 0; r < n; r++) {
					s.push("<tr>");
					for (var l = 0; l < n; l++) s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + a + "px;height:" + o + "px;background-color:" + (t.isDark(r, l) ? e.colorDark: e.colorLight) + ';"></td>');
					s.push("</tr>")
				}
				s.push("</table>"),
				i.innerHTML = s.join("");
				var c = i.childNodes[0],
				u = (e.width - c.offsetWidth) / 2,
				d = (e.height - c.offsetHeight) / 2;
				u > 0 && d > 0 && (c.style.margin = d + "px " + u + "px")
			},
			t.prototype.clear = function() {
				this._el.innerHTML = ""
			},
			t
		} (),
		x = w;
		i = function(t, e) {
			if (this._htOption = {
				width: 256,
				height: 256,
				typeNumber: 4,
				colorDark: "#000000",
				colorLight: "#ffffff",
				correctLevel: d.H
			},
			"string" == typeof e && (e = {
				text: e
			}), e) for (var i in e) this._htOption[i] = e[i];
			"string" == typeof t && (t = document.getElementById(t)),
			w = this._htOption.useSVG ? g: x,
			this._android = r(),
			this._el = t,
			this._oQRCode = null,
			this._oDrawing = new w(this._el, this._htOption),
			this._htOption.text && this.makeCode(this._htOption.text)
		},
		i.prototype.makeCode = function(t) {
			this._oQRCode = new e(l(t, this._htOption.correctLevel), this._htOption.correctLevel),
			this._oQRCode.addData(t),
			this._oQRCode.make(),
			this._el.title = t,
			this._oDrawing.draw(this._oQRCode),
			this.makeImage()
		},
		i.prototype.makeImage = function() {
			"function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
		},
		i.prototype.clear = function() {
			this._oDrawing.clear()
		},
		i.CorrectLevel = d
	} (),
	t.exports = i
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(132),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(133),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(134),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(135),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(5),
	r = n(s),
	l = i(9),
	c = n(l),
	u = i(4),
	d = n(u),
	_ = i(210),
	h = n(_);
	e.
default = {
		name: "CommentInput",
		props: {
			isShowCommentBox: {
				type: Boolean,
			default:
				!0
			},
			group_id: {
				type: String,
			default:
				""
			},
			item_id: {
				type: String,
			default:
				""
			},
			dongtai_id: {
				type: Number,
			default:
				0
			},
			comment_id: {
				type: Number,
			default:
				0
			},
			reply_id: {
				type: Number,
			default:
				0
			},
			reply_to_user_id: {
				type: Number,
			default:
				0
			},
			pIndex: {
				type: Number,
			default:
				0
			},
			subIndex: {
				type: Number,
			default:
				0
			},
			sourceName: {
				type: String,
			default:
				""
			},
			sourceText: {
				type: String,
			default:
				""
			},
			avatar: {
				type: String,
			default:
				""
			},
			isMain: {
				type: Boolean,
			default:
				!1
			}
		},
		computed: {
			COMMENT_API: function() {
				return this.isMain ? "/api/comment/post_comment/": "/api/comment/post_reply/"
			},
			commitText: function() {
				return this.isMain ? "评论": "回复"
			},
			params: function() {
				return {
					pIndex: this.pIndex,
					subIndex: this.subIndex,
					dongtai_id: this.dongtai_id,
					isMain: this.isMain
				}
			}
		},
		data: function() {
			return {
				isFocus: !1,
				inputText: ""
			}
		},
		methods: {
			isBlur: function() {
				this.isFocus = !1
			},
			inputFocusClick: function() {
				this.isMain && c.
			default.$emit("removeChildComment"),
				this.isFocus = !0
			},
			onCommentClick: function() {
				var t = this,
				e = this.inputText,
				i = {},
				n = {},
				a = function() {
					return 0 === e.replace(/\s*/gi, "").length ? (t.$Toast({
						message: t.commitText + "内容不能为空！"
					}), !1) : (n = {
						status: e,
						content: e,
						group_id: t.group_id,
						item_id: t.item_id,
						id: t.dongtai_id,
						format: "json",
						aid: 24
					},
					t.isMain || (t.params.subIndex > -1 && (e = e + "//@" + t.sourceName + "：" + t.sourceText), n = {
						content: e,
						group_id: t.group_id,
						item_id: t.item_id,
						comment_id: t.comment_id,
						reply_to_user_id: t.reply_to_user_id,
						reply_id: t.reply_id
					}), void(0, o.
				default)({
						url:
						t.COMMENT_API,
						headers: {
							"X-CSRFToken": d.
						default.get("csrftoken")
						},
						method: "POST",
						data: n,
						success: function(n) {
							"success" === n.message && (i = (0, h.
						default)({},
							t.params, {
								text: e,
								id: t.isMain ? n.comment.id: n.data.comment.id
							}), c.
						default.$emit("commentInsert", i), t.inputText = "", t.isFocus = !1)
						}
					}))
				}; (0, r.
			default)({
					successCb:
					function() {
						a()
					}
				})
			}
		},
		mounted: function() {
			var t = this;
			c.
		default.$on("removeChildComment",
			function() {
				t.isMain || t.$el.remove()
			}),
			c.
		default.$on("mainCommentInputBlur",
			function() {
				t.isFocus = !1
			})
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(4),
	r = n(s);
	e.
default = {
		name: "CommentInput",
		props: {
			reportData: {
				type: Object
			},
			isShowReport: {
				type: Boolean,
			default:
				!1
			}
		},
		data: function() {
			return {
				reportType: 1,
				complainText: ""
			}
		},
		computed: {
			params: function() {
				return this.reportData
			}
		},
		methods: {
			onCancelClick: function(t) {
				this.$emit("closeReport")
			},
			onOkClick: function(t) {
				var e = this;
				return 0 === this.reportType && (this.params.content = this.complainText.trim(), "" === this.params.content) ? (this.$Toast({
					message: "请填写投诉原因"
				}), !1) : (this.params.aid = 13, this.params.report_type = this.reportType, void(0, o.
			default)({
					url:
					"/report_user/",
					headers: {
						"X-CSRFToken": r.
					default.get("csrftoken")
					},
					data: this.params,
					method: "POST",
					success: function(t) {
						var i = "投诉失败！";
						"success" === t.message && (i = "投诉成功！"),
						e.$Toast({
							message: i
						}),
						e.complainText = "",
						e.$emit("closeReport")
					}
				}))
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(7),
	r = (n(s), i(111)),
	l = n(r),
	c = i(112),
	u = n(c),
	d = i(9),
	_ = n(d),
	h = i(3),
	m = i(5),
	f = n(m),
	p = i(4),
	g = n(p);
	e.
default = {
		name: "Comment",
		props: {
			group_id: {
				type: String,
			default:
				""
			},
			item_id: {
				type: String,
			default:
				""
			},
			comment_load_count: {
				type: Number,
			default:
				5
			},
			ban_comment: {
				type: Number,
			default:
				0
			},
			comments_count: {
				type: Number,
			default:
				0
			},
			userInfo: {
				type: Object
			}
		},
		data: function() {
			return {
				commentBoxOptions: {
					isShow: !1,
					dongtai_id: 0,
					comment_id: 0,
					reply_id: 0,
					reply_to_user_id: 0,
					pIndex: -1,
					subIndex: -1,
					sourceName: "",
					sourceText: ""
				},
				isShowReport: !1,
				reportData: {},
				options: {
					list: [],
					hasMore: !1,
					isLoading: !1,
					noMore: !1
				},
				params: {
					group_id: this.group_id,
					item_id: this.item_id,
					offset: 0,
					count: this.comment_load_count
				}
			}
		},
		computed: {
			commentsCount: function() {
				return "[object Number]" === Object.prototype.toString.call(this.comments_count) && (this.ban_comment > 0 ? 0 : this.comments_count.toString().split("").reverse().join("").replace(/(\d{3})(?=[^$])/g, "$1,").split("").reverse().join(""))
			}
		},
		methods: {
			getComments: function(t) {
				var e = this;
				return ! this.options.isLoading && (this.options.isLoading = !0, void(0, o.
			default)({
					url:
					"/api/comment/list/",
					data: this.params,
					method: "GET",
					success: function(i) {
						"success" === i.message && (e.options.hasMore = i.data.has_more, i.data.comments = e.dataPreHandle(i.data.comments), e.options.list = e.options.list.concat(i.data.comments), e.params.offset += e.params.count, e.options.isLoading = !1),
						"first" === t ? e.params.count = 10 : e.options.hasMore && (e.options.hasMore = !1, e.options.noMore = !0)
					}
				}))
			},
			getReplyComments: function(t, e) {
				var i = this;
				void 0 === t.reply_data.offset && (t.reply_data.offset = 0),
				(0, o.
			default)({
					url:
					"/api/comment/get_reply/",
					data: {
						comment_id: t.id,
						dongtai_id: t.dongtai_id,
						offset: t.reply_data.offset,
						count: 20
					},
					method: "GET",
					success: function(n) {
						"success" === n.message && (t.is_reply_expanded = !0, t.reply_data.hasMore = !!n.data.has_more, t.reply_data.offset += 20, i.setReplyParent(n.data.data, e), 0 === t.reply_data.offset && (t.reply_data.reply_list = []), t.reply_data.reply_list = t.reply_data.reply_list.concat(n.data.data))
					}
				})
			},
			dataPreHandle: function(t) {
				var e = this;
				return t.forEach(function(t, i) {
					t.timeAgo = (0, h.timeAgo)(t.create_time),
					t.diggNum = (0, h.numFormat)(t.digg_count, 1),
					e.setReplyParent(t.reply_data.reply_list, i)
				}),
				t
			},
			setReplyParent: function(t, e) {
				t.forEach(function(t) {
					t.parent = e,
					t.timeAgo = (0, h.timeAgo)(t.create_time),
					t.diggNum = (0, h.numFormat)(t.digg_count, 1)
				})
			},
			onReplyCollapseClick: function(t) {
				t.is_reply_expanded = !1,
				t.reply_data.offset = 0,
				t.reply_data.hasMore = !1,
				t.reply_data.reply_list = []
			},
			onReplyClick: function(t, e, i, n) {
				var a = this,
				o = "J_input_";
				i ? (o += e, this.commentBoxOptions.pIndex = e, this.commentBoxOptions.subIndex = -1, this.commentBoxOptions.reply_id = 0, this.commentBoxOptions.comment_id = t.id) : (o = o + t.parent + "_" + e, this.commentBoxOptions.pIndex = t.parent, this.commentBoxOptions.subIndex = e, this.commentBoxOptions.reply_id = t.id, this.commentBoxOptions.comment_id = n),
				this.commentBoxOptions.sourceName = t.user.name,
				this.commentBoxOptions.sourceText = t.text,
				this.commentBoxOptions.dongtai_id = t.dongtai_id,
				this.commentBoxOptions.reply_to_user_id = t.user.user_id,
				this.commentBoxOptions.isShow = !0,
				_.
			default.$emit("mainCommentInputBlur");
				var s = function() {
					var t = document.getElementsByClassName(o);
					t[0].appendChild(a.$refs.childComment.$el)
				}; (0, f.
			default)({
					successCb:
					function() {
						s()
					}
				})
			},
			closeReport: function() {
				this.isShowReport = !1
			},
			openReport: function(t) {
				this.reportData = {
					user_id: t.user.user_id,
					comment_id: t.id,
					group_id: this.group_id,
					item_id: this.item_id
				},
				this.isShowReport = !0
			},
			onDiggClick: function(t, e) {
				var i = t.id,
				n = t.dongtai_id,
				a = "/api/comment/reply_digg/";
				if (e && (a = "/api/comment/digg/"), t.user_digg) return ! 1;
				var s = {
					comment_id: i,
					dongtai_id: n,
					group_id: this.group_id,
					item_id: this.item_id,
					action: "digg"
				},
				r = function() { (0, o.
				default)({
						url:
						a,
						headers: {
							"X-CSRFToken": g.
						default.get("csrftoken")
						},
						data: s,
						method: "POST",
						success: function(e) {
							"success" === e.message && (t.user_digg = 1, t.digg_count += 1, t.diggNum = (0, h.numFormat)(t.digg_count, 1))
						}
					})
				}; (0, f.
			default)({
					successCb:
					function() {
						r()
					}
				})
			}
		},
		mounted: function() {
			var t = this;
			0 === this.ban_comment && this.getComments("first"),
			_.
		default.$on("commentInsert",
			function(e) {
				var i = {
					text: e.text,
					id: e.id,
					dongtai_id: e.dongtai_id,
					user: {
						avatar_url: t.userInfo.avatarUrl,
						user_id: t.userInfo.id,
						name: t.userInfo.name
					},
					reply_data: {
						reply_list: []
					},
					digg_count: 0,
					reply_count: 0,
					user_digg: 0,
					timeAgo: (0, h.timeAgo)(Math.floor((new Date).getTime() / 1e3)),
					diggNum: (0, h.numFormat)(0, 1),
					parent: e.pIndex
				};
				if (e.isMain) t.options.list.unshift(i);
				else {
					for (var n = 0,
					a = t.options.list.length; n < a; n++) if (n === e.pIndex) {
						t.options.list[n].reply_data.reply_list.splice(e.subIndex + 1, 0, i);
						break
					}
					_.
				default.$emit("removeChildComment")
				}
			})
		},
		components: {
			CommentInput: l.
		default,
			CommentReport: u.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(15),
	o = n(a),
	s = i(2),
	r = n(s),
	l = i(10),
	c = n(l),
	u = i(5),
	d = n(u);
	e.
default = {
		name: "Dislike",
		mixins: [c.
	default],
		props: {
			group_id: {
				type: String,
			default:
				""
			},
			item_id: {
				type: String,
			default:
				""
			},
			ad_id: {
				type: String,
			default:
				""
			},
			getUserInfoUrl: {
				type: String,
			default:
				"/user/info/"
			},
			dispatchTarget: {
				type: String,
			default:
				"FeedBox"
			}
		},
		components: {},
		methods: {
			dislikeClick: function() {
				var t = this; (0, d.
			default)({
					successCb:
					function() {
						t._disLike()
					},
					url: this.getUserInfoUrl
				})
			},
			_disLike: function() {
				var t = this,
				e = this._getParams(); (0, r.
			default)({
					url:
					"/user_data/batch_action/?aid=24",
					method: "post",
					headers: {
						"Content-Type": "application/json; charset=utf-8"
					},
					data: e,
					success: function(e) {
						var i = e || {},
						n = "不好意思，网络错误";
						"success" == i.message && (t.dispatch(t.dispatchTarget, "feed-item-dislike", t.group_id), n = "将减少推荐类似内容"),
						t.$Toast({
							message: n,
							position: "middle"
						})
					}
				})
			},
			_getParams: function() {
				var t = {
					actions: [{
						action: "dislike",
						aggr_type: 1,
						id: this.group_id,
						item_id: this.item_id,
						ad_extra: {},
						type: 1,
						timestamp: Math.floor( + new Date / 1e3)
					}]
				};
				if (this.ad_id) for (var e = document.querySelectorAll(".feed-infinite-wrapper .J_ad") || [], i = 0, n = e.length; i < n; i++) {
					var a = e[i],
					s = a.getAttribute("ad_id");
					if (s === this.ad_id) {
						t.actions[0].type = 3,
						t.actions[0].ad_id = s,
						t.actions[0].ad_extra.log_extra = a.getAttribute("ad_extra");
						break
					}
				}
				return t = (0, o.
			default)(t)
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(18),
	o = n(a);
	e.
default = {
		props: {
			item: {
				type: Object,
			default:
				{}
			},
			dislikeUrl: {
				type: String,
			default:
				"/api/dislike/"
			},
			getUserInfoUrl: {
				type: String,
			default:
				"/user/info/"
			}
		},
		computed: {},
		components: {
			Dislike: o.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(6),
	o = n(a),
	s = i(3),
	r = i(10),
	l = n(r);
	e.
default = {
		name: "MsgAlert",
		mixins: [l.
	default],
		props: {
			category: String,
			suspensionTip: {
				type: Boolean,
			default:
				!0
			}
		},
		data: function() {
			return {
				msgHidden: !0,
				msgShow: !1,
				msgFixed: !1,
				articleCount: -1
			}
		},
		mounted: function() {
			var t = this;
			this.waitTime = 36e4,
			this.$on("feed-refresh-count",
			function(t) {
				var e = this;
				this.msgTimer && clearTimeout(this.msgTimer),
				this.articleCount = t,
				this.msgHidden = !1,
				this.msgTimer = setTimeout(function() {
					e.msgHidden = !0
				},
				2300)
			}),
			this.$on("feed-refresh",
			function() {
				this.msgShow = !1
			}),
			this.suspensionTip && (this.msgOffsetTop = 0, window.addEventListener("scroll", (0, o.
		default)(function() {
				t._stateChange()
			},
			50), !1), this._timerUpdate())
		},
		methods: {
			closeMsgClick: function() {
				this.msgShow = !1,
				this._timerUpdate()
			},
			feedRefreshClick: function() {
				this.msgShow = !1,
				this._timerUpdate(),
				this.dispatch("FeedBox", "feed-refresh")
			},
			_timerUpdate: function() {
				var t = this;
				this.refreshTimer && (clearTimeout(this.refreshTimer), this.refreshTimer = null),
				this.refreshTimer = setTimeout(function() {
					t.msgShow = !0,
					t.msgFixed = !1,
					t.$nextTick(function() {
						t._stateChange()
					})
				},
				this.waitTime)
			},
			_stateChange: function() {
				if (this.msgShow) {
					var t = (0, s.elOffset)(this.$refs.msgAlertPlace).top,
					e = (0, s.getScrollTop)(window);
					this.msgOffsetTop < t && (this.msgOffsetTop = t),
					this.msgFixed = e > this.msgOffsetTop
				}
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(10),
	o = n(a),
	s = i(9),
	r = n(s),
	l = i(119),
	c = n(l),
	u = i(116),
	d = n(u),
	_ = i(117),
	h = n(_),
	m = i(120),
	f = n(m),
	p = i(118),
	g = n(p),
	v = i(114),
	w = n(v),
	x = i(28),
	y = n(x),
	b = i(29),
	k = i(14),
	C = i(3);
	e.
default = {
		name: "FeedBox",
		mixins: [o.
	default],
		props: {
			category: {
				type: String,
			default:
				""
			},
			url: {
				type: String,
			default:
				""
			},
			qhAdSupport: {
				type: Boolean,
			default:
				!1
			},
			suspensionTip: {
				type: Boolean,
			default:
				!0
			},
			initList: {
				type: Array,
			default:
				function() {
					return []
				}
			},
			containerCheck: {
				type: Boolean,
			default:
				!0
			},
			containerCheckCount: {
				type: Number,
			default:
				8
			},
			dislikeUrl: {
				type: String,
			default:
				"/api/dislike/"
			},
			getUserInfoUrl: {
				type: String,
			default:
				"/user/info/"
			},
			onInit: {
				type: Function,
			default:
				function(t, e) {}
			},
			onLoadMore: {
				type: Function,
			default:
				function(t, e) {
					window.ttAnalysis && window.ttAnalysis.send("event", {
						ev: "article_show_count",
						ext_id: e
					})
				}
			},
			onItemClick: {
				type: Function,
			default:
				function(t) {
					t && t.ad_id && (0, b.ttSendMsg)({
						label: "click",
						value: t.ad_id,
						extra: t.log_extra
					}),
					t && t.ad_qihu_id > -1 && (0, k.qhSendMsg)(t.ad_qihu_id, "feed_qihu_ad", "click")
				}
			},
			onRefresh: {
				type: Function,
			default:
				function(t, e) {
					window.ttAnalysis && window.ttAnalysis.send("event", {
						ev: "article_show_count",
						ext_id: e
					})
				}
			}
		},
		data: function() {
			return {
				refreshLock: !1,
				loadmoreLock: !1,
				loading: !1,
				offsetTop: 0,
				_feedList: null,
				list: []
			}
		},
		mounted: function() {
			this.configList(),
			this.$on("feed-item-dislike", this._dislike),
			this.$on("feed-refresh", this.refresh),
			r.
		default.$on("feed-refresh-bus", this.refresh)
		},
		updated: function() {
			var t = document.querySelectorAll(".J_ad");
			t.length && (0, b.ttSetAds)(t);
			var e = document.querySelectorAll(".J_qihu_ad");
			e.length && (0, k.qhSetAds)(e, "feed_qihu_ad")
		},
		methods: {
			configList: function() {
				var t = this;
				this.offsetTop = (0, C.elOffset)(this.$refs.wrapper).top,
				this._feedList = new y.
			default({
					url:
					this.url,
					category: this.category,
					qhAdSupport: this.qhAdSupport,
					initList: this.initList
				}),
				0 === this.initList.length ? this.refresh(!0) : this.list = this._feedList.getList(),
				this.onInit(this.list, this.list.length),
				setInterval(function() {
					t.list = t._feedList.updateTime()
				},
				6e4)
			},
			refresh: function(t) {
				var e = this;
				t === !0 && window.scrollTo(0, 0),
				t !== !0 && window.scrollTo(0, this.offsetTop),
				this.broadcast("MsgAlert", "feed-refresh", {}),
				this.loading = !0,
				this.refreshLock = !0,
				this._feedList.refresh(function(t, i) {
					e.list = t,
					e.broadcast("MsgAlert", "feed-refresh-count", i),
					e.onRefresh(t, i)
				},
				function() {
					e.loading = !1,
					e.refreshLock = !1
				})
			},
			loadMore: function() {
				var t = this;
				this.loading = !0,
				this.loadmoreLock = !0,
				this._feedList.loadMore(function(e, i) {
					t.list = e,
					t.onLoadMore(e, i)
				},
				function() {
					t.loading = !1,
					t.loadmoreLock = !1
				})
			},
			feedItemClick: function(t) {
				this.onItemClick(t)
			},
			_dislike: function(t) {
				this.list = this._feedList.dislikeItem(t)
			}
		},
		components: {
			singleMode: c.
		default,
			moreMode: d.
		default,
			noMode: h.
		default,
			ugcMode: f.
		default,
			refreshMode: g.
		default,
			msgAlert: w.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(11),
	o = n(a);
	e.
default = {
		props: {
			item: {
				type: Object,
			default:
				{}
			}
		},
		components: {
			FooterBar: o.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(11),
	o = n(a);
	e.
default = {
		props: {
			item: {
				type: Object,
			default:
				{}
			}
		},
		components: {
			FooterBar: o.
		default
		}
	}
},
function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}),
	e.
default = {
		props: {
			item: {
				type: Object,
			default:
				{}
			}
		},
		methods: {}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(11),
	o = n(a);
	e.
default = {
		props: {
			item: {
				type: Object,
			default:
				{}
			},
			dislikeUrl: {
				type: String,
			default:
				"/api/dislike/"
			},
			getUserInfoUrl: {
				type: String,
			default:
				"/user/info/"
			}
		},
		components: {
			FooterBar: o.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(18),
	o = n(a),
	s = i(3);
	e.
default = {
		props: {
			item: {
				type: Object,
			default:
				{}
			}
		},
		computed: {
			styles: function() {
				var t = {};
				return this.item.ugc_data.ugc_images.length && (t.height = "179px"),
				t
			}
		},
		components: {
			Dislike: o.
		default
		},
		filters: {
			formatCount: function(t) {
				return t ? t = (0, s.numFormat)(t) : "0"
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(4),
	r = n(s),
	l = {
		success: "已提交,感谢您的意见",
		fail: "提交错误,请稍后重试",
		mail_error: "请输入正确的联系方式",
		content_error: "请输入您的意见",
		content_length_error: "意见长度超出限制"
	};
	e.
default = {
		name: "Feedback",
		props: {
			show: {
				type: Boolean,
			default:
				!1
			}
		},
		data: function() {
			return {
				feedbackDialogVisible: !1,
				feedbackEmail: "",
				feedbackContent: "",
				isSubmitDisabled: !1
			}
		},
		methods: {
			submit: function() {
				var t = this,
				e = t.feedbackEmail,
				i = t.feedbackContent;
				return e.length < 5 ? (t.$Toast(l.mail_error), void document.querySelector(".feedback .email").focus()) : "" === i.trim() ? (t.$Toast(l.content_error), void document.querySelector(".feedback .text").focus()) : (t.isSubmitDisabled = !0, void(0, o.
			default)({
					headers:
					{
						"X-CSRFToken":
						r.
					default.get("csrftoken")
					},
					url: "/post_message/",
					method: "post",
					data: {
						appkey: "web",
						uuid: e,
						content: "[" + window.location.host + "]" + i
					},
					success: function(e) {
						e && "success" === e.message ? (t.feedbackEmail = "", t.feedbackContent = "", t.feedbackDialogVisible = !1) : t.$Toast(l.fail)
					},
					error: function() {
						t.$Toast(l.fail)
					},
					complete: function() {
						t.isSubmitDisabled = !1
					}
				}))
			}
		},
		created: function() {
			this.feedbackDialogVisible = this.show
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(38),
	o = n(a),
	s = i(35),
	r = n(s),
	l = i(30),
	c = n(l);
	e.
default = {
		name: "TtHeader",
		data: function() {
			return {
				isShowFeedback: !1,
				logoImg: i(109),
				navItem: [{
					name: "推荐",
					url: "/",
					en: "recommend"
				},
				{
					name: "热点",
					url: "/ch/news_hot/",
					en: "hot"
				},
				{
					name: "图片",
					url: "/ch/news_image/",
					en: "image"
				},
				{
					name: "娱乐",
					url: "/ch/news_entertainment/",
					en: "entertainment"
				},
				{
					name: "科技",
					url: "/ch/news_tech/",
					en: "tech"
				},
				{
					name: "汽车",
					url: "/ch/news_car/",
					en: "car"
				},
				{
					name: "体育",
					url: "/ch/news_sports/",
					en: "sports"
				},
				{
					name: "财经",
					url: "/ch/news_finance/",
					en: "finance"
				},
				{
					name: "军事",
					url: "/ch/news_military/",
					en: "military"
				},
				{
					name: "国际",
					url: "/ch/news_world/",
					en: "world"
				},
				{
					name: "时尚",
					url: "/ch/news_fashion/",
					en: "fashion"
				},
				{
					name: "旅游",
					url: "/ch/news_travel/",
					en: "travel"
				}],
				navMore: [{
					name: "探索",
					url: "/ch/news_discovery/",
					en: "discovery"
				},
				{
					name: "育儿",
					url: "/ch/news_baby/",
					en: "baby"
				},
				{
					name: "养生",
					url: "/ch/news_regimen/",
					en: "regimen"
				},
				{
					name: "美文",
					url: "/ch/news_essay/",
					en: "essay"
				},
				{
					name: "游戏",
					url: "/ch/news_game/",
					en: "game"
				},
				{
					name: "历史",
					url: "/ch/news_history/",
					en: "history"
				},
				{
					name: "美食",
					url: "/ch/news_food/",
					en: "food"
				}]
			}
		},
		props: {
			showUser: {
				type: Boolean,
			default:
				!0
			},
			options: {
				type: Object,
			default:
				function() {
					return {}
				}
			},
			middlebarWidth: {
				type: Number,
			default:
				1120
			}
		},
		methods: {
			closeFeedback: function() {
				this.isShowFeedback = !1
			},
			showFeedback: function() {
				this.isShowFeedback = !0
			},
			jumpToLogin: function() {
				setTimeout(function() {
					location.href = "https://sso.toutiao.com/login/"
				},
				250)
			}
		},
		components: {
			WeatherBox: o.
		default,
			SearchBox: r.
		default,
			Feedback: c.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(8),
	r = n(s);
	e.
default = {
		name: "HotImages",
		data: function() {
			return {
				list: []
			}
		},
		mounted: function() {
			var t = this; (0, o.
		default)({
				url:
				this.getHotImagesUrl,
				data: {
					widen: 1
				},
				method: "get",
				success: function(e) {
					e.data && (t.list = e.data)
				}
			})
		},
		props: {
			count: {
				type: Number,
			default:
				4
			},
			title: {
				type: String,
			default:
				"精彩图片"
			},
			getHotImagesUrl: {
				type: String,
			default:
				"/api/pc/hot_gallery/"
			}
		},
		computed: {
			listCount: function() {
				var t = this.list.slice(0, this.count);
				return t.length > 2 && t.splice(2, 0, {}),
				t.length > 6 && t.splice(6, 0, {}),
				t
			}
		},
		components: {
			Pane: r.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(3),
	r = i(8),
	l = n(r);
	e.
default = {
		name: "HotVideos",
		data: function() {
			return {
				list: []
			}
		},
		mounted: function() {
			var t = this; (0, o.
		default)({
				url:
				this.getHotVideosUrl,
				data: {
					widen: 1
				},
				method: "get",
				success: function(e) {
					e.data && (t.list = e.data)
				}
			})
		},
		props: {
			count: {
				type: Number,
			default:
				4
			},
			title: {
				type: String,
			default:
				"热门视频"
			},
			getHotVideosUrl: {
				type: String,
			default:
				"/api/pc/hot_video/"
			}
		},
		computed: {
			listCount: function() {
				var t = this.list.slice(0, this.count);
				return t.length > 2 && t.splice(3, 0, {}),
				t
			}
		},
		filters: {
			formatCount: function(t) {
				return t ? t = (0, s.numFormat)(t) : "0"
			}
		},
		components: {
			Pane: l.
		default
		}
	}
},
function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}),
	e.
default = {
		name: "Pane",
		props: {
			title: {
				type: String
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(186),
	o = n(a),
	s = i(2),
	r = n(s),
	l = i(4),
	c = n(l),
	u = i(5),
	d = n(u);
	e.
default = {
		name: "Report",
		props: {
			groupId: {
				type: String,
				required: !0
			}
		},
		components: {},
		data: function() {
			return {
				reportDialogVisible: !1,
				complainShow: !1,
				complainText: ""
			}
		},
		methods: {
			onReportClick: function() {
				var t = this; (0, d.
			default)({
					successCb:
					function() {
						t.reportDialogVisible = !0
					}
				})
			},
			report: function() {
				var t = this,
				e = {
					group_id: t.groupId,
					app_name: "toutiao_web",
					aid: 24,
					report_type: "",
					report_content: ""
				},
				i = document.querySelectorAll(".report .content input"),
				n = [],
				a = !0,
				s = !1,
				l = void 0;
				try {
					for (var u, d = (0, o.
				default)(i); ! (a = (u = d.next()).done); a = !0) {
						var _ = u.value;
						_.checked && n.push(_.getAttribute("rtype"))
					}
				} catch(t) {
					s = !0,
					l = t
				} finally {
					try { ! a && d.
						return && d.
						return ()
					} finally {
						if (s) throw l
					}
				}
				return t.complainShow && (n.push(0), e.report_content = t.complainText),
				0 === n.length ? void t.$Toast("请填写投诉原因") : (e.report_type = n.join(","), void(0, r.
			default)({
					url:
					"/api/article/report/",
					headers: {
						"X-CSRFToken": c.
					default.get("csrftoken")
					},
					data: e,
					method: "post",
					success: function(e) {
						var n = "投诉失败";
						e && "success" === e.message && (n = "投诉成功", t.reportDialogVisible = !1),
						t.$Toast(n);
						var a = !0,
						s = !1,
						r = void 0;
						try {
							for (var l, c = (0, o.
						default)(i); ! (a = (l = c.next()).done); a = !0) {
								var u = l.value;
								u.checked = !1
							}
						} catch(t) {
							s = !0,
							r = t
						} finally {
							try { ! a && c.
								return && c.
								return ()
							} finally {
								if (s) throw r
							}
						}
						t.complainShow = !1,
						t.complainText = ""
					}
				}))
			},
			expand: function() {
				this.complainShow = !this.complainShow
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(7),
	r = n(s);
	r.
default.component("sortable-list", {
		functional: !0,
		render: function(t, e) {
			var i = e.props.item,
			n = e.props.index + 1;
			return t("li", e.data, [t("i", {
				attrs: {
					class: "search-no search-no-" + n
				}
			},
			[n]), t("span", {
				attrs: {
					class: "search-text"
				}
			},
			[i.value])])
		},
		props: {
			item: {
				type: Object,
				required: !0
			},
			index: Number
		}
	}),
	e.
default = {
		name: "SearchBox",
		props: {
			searchUrl: {
				type: String,
			default:
				"//www.toutiao.com/search/?keyword="
			},
			getSearchSuggestionUrl: {
				type: String,
			default:
				"/search/sug/"
			},
			getHotSearchUrl: {
				type: String,
			default:
				"/search/suggest/initial_page/"
			}
		},
		data: function() {
			return {
				wordslist: [],
				searchWord: "",
				timeout: null,
				placeHolder: "请输入要搜索的内容",
				resultType: "sortable-list",
				presetWord: ""
			}
		},
		methods: {
			querySearchAsync: function(t, e) {
				var i = [];
				t ? (this.resultType = "", (0, o.
			default)({
					url:
					this.getSearchSuggestionUrl,
					data: {
						keyword: t
					},
					method: "GET",
					success: function(t) {
						var n = t && t.data ? t.data: [];
						n.forEach(function(t) {
							i.push({
								value: t
							})
						}),
						e(i)
					}
				})) : (this.resultType = "sortable-list", i = this.wordslist, e(i))
			},
			toSearchPage: function(t) {
				t && window.open(this.searchUrl + t)
			},
			handleIconClick: function() {
				this.toSearchPage(this.searchWord)
			},
			handleSelect: function(t) {
				this.toSearchPage(t.value),
				t.index && (window._czc && _czc.push(["_trackEvent", "search", "hotword" + t.index, "click"]), window.ttAnalysis && window.ttAnalysis.send("event", {
					ev: "search_hotword" + t.index + "_click"
				}))
			},
			handleEnterKeydown: function() {
				this.toSearchPage(this.searchWord)
			},
			handleFocus: function() {
				this.placeHolder = ""
			},
			handleBlur: function() {}
		},
		mounted: function() {}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(4),
	r = n(s),
	l = i(5),
	c = n(l);
	e.
default = {
		name: "Star",
		props: {
			repin: {
				type: Number,
				required: !0
			},
			groupId: {
				required: !0
			},
			itemId: {
				required: !0
			}
		},
		data: function() {
			return {
				isRepinned: !1
			}
		},
		created: function() {
			this.isRepinned = !!this.repin
		},
		methods: {
			sendRequest: function() {
				var t = this,
				e = t.isRepinned ? "unrepin": "repin",
				i = "/group/" + e + "/",
				n = function() { (0, o.
				default)({
						headers:
						{
							"X-CSRFToken":
							r.
						default.get("csrftoken")
						},
						url: i,
						data: {
							group_id: t.groupId,
							item_id: t.itemId
						},
						method: "post",
						success: function(e) {
							e && "success" === e.message && (t.isRepinned = !t.isRepinned)
						}
					})
				}; (0, c.
			default)({
					successCb:
					function() {
						n()
					}
				})
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(4),
	r = n(s),
	l = i(5),
	c = n(l);
	e.
default = {
		name: "Subscribe",
		props: {
			userId: {
				required: !0
			},
			follow: {
				type: Boolean,
				required: !0
			}
		},
		data: function() {
			return {
				isFollowing: !1
			}
		},
		created: function() {
			this.isFollowing = this.follow
		},
		methods: {
			sendRequest: function() {
				var t = this,
				e = t.isFollowing ? "unfollow": "follow",
				i = "/c/user/" + e + "/",
				n = function() { (0, o.
				default)({
						headers:
						{
							"X-CSRFToken":
							r.
						default.get("csrftoken")
						},
						url: i,
						method: "post",
						data: {
							user_id: t.userId
						},
						success: function(e) {
							e && "success" === e.message && (t.isFollowing = !t.isFollowing)
						}
					})
				}; (0, c.
			default)({
					successCb:
					function() {
						n()
					}
				})
			}
		},
		computed: {
			text: function() {
				return this.isFollowing ? "已关注": "关注"
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(3),
	o = i(6),
	s = n(o);
	e.
default = {
		name: "Toolbar",
		props: {
			showHome: {
				type: Boolean,
			default:
				!1
			},
			showReport: {
				type: Boolean,
			default:
				!1
			},
			showRefresh: {
				type: Boolean,
			default:
				!1
			},
			showTop: {
				type: Boolean,
			default:
				!0
			},
			refreshMethod: Function
		},
		data: function() {
			return {
				hasScrolled: !1
			}
		},
		computed: {
			reallyShowTop: function() {
				return this.showTop && this.hasScrolled
			}
		},
		mounted: function() {
			var t = this,
			e = 0;
			window.addEventListener("scroll", (0, s.
		default)(function() {
				e = (0, a.getScrollTop)(window),
				e > 100 ? t.hasScrolled = !0 : t.hasScrolled = !1
			},
			500), !1)
		},
		methods: {
			scrollToTop: function() {
				window.scrollTo(0, 0)
			},
			refresh: function() {
				this.refreshMethod && this.refreshMethod()
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	function a(t) {
		return t >= 0 && t <= 100 ? "#5cbf4c": t >= 101 && t <= 200 ? "#ff9f2d": t >= 201 ? "#ff5f5f": "rgba(214, 117, 3, 0.8)"
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = i(15),
	s = n(o),
	r = i(2),
	l = n(r),
	c = i(4),
	u = n(c);
	e.
default = {
		name: "WeatherBox",
		props: {
			weatherCityUrl: {
				type: String,
			default:
				"/stream/widget/local_weather/city/"
			},
			weatherDataUrl: {
				type: String,
			default:
				"/stream/widget/local_weather/data/"
			}
		},
		data: function() {
			return {
				provinces: [],
				citys: [],
				rs: null,
				province: "北京",
				city: "北京",
				weathercity: "",
				weather: {},
				iconClass: {},
				showWeather: !0,
				showPopup: !1,
				selecting: !1,
				aqiColor: ""
			}
		},
		mounted: function() {
			var t = this;
			if (window.localStorage) {
				var e = localStorage.getItem("weather_city");
				e && (e = JSON.parse(e), this.city = e.city, this.province = e.province)
			}
			this.onSubmitClick(),
			(0, l.
		default)({
				url:
				this.weatherCityUrl,
				method: "get",
				success: function(i) {
					var n = !(!i || !i.data) && i.data,
					a = [],
					o = [];
					if (n) {
						for (var s in n) {
							a.push({
								value: s,
								label: s
							}),
							o = n[s],
							n[s] = [];
							for (var r in o) n[s].push({
								value: r,
								label: r
							})
						}
						t.provinces = a,
						t.rs = n,
						e && (t.citys = t.rs[e.province])
					}
				}
			})
		},
		methods: {
			changeLocation: function() {
				this.showWeather = !1
			},
			isSelecting: function(t) {
				this.selecting = t
			},
			onSubmitClick: function() {
				var t = this; (0, l.
			default)({
					url:
					this.weatherDataUrl,
					data: {
						city: t.city
					},
					method: "get",
					success: function(e) {
						e.data && e.data.weather && (t.weathercity = e.data.city, t.weather = e.data.weather, t.aqiColor = a(t.weather.aqi))
					}
				}),
				window.localStorage && (localStorage.setItem("weather_city", (0, s.
			default)({
					city:
					this.city,
					province: this.province
				})), u.
			default.set("WEATHER_CITY", this.city, {
					expires: 100
				})),
				t.showWeather = !0
			},
			onCancelClick: function() {
				this.showWeather = !0
			},
			handleProvinceChange: function(t) {
				this.rs && (this.citys = this.rs[t], this.city = this.citys[0].value)
			},
			handleMouseEnter: function(t) {
				this.showPopup = !0
			},
			handleMouseLeave: function(t) {
				return ! this.selecting && void(this.showPopup = !1)
			}
		},
		watch: {
			weather: function(t) {
				this.iconClass = {
					today: "weather-icon-" + t.weather_icon_id,
					tom: "weather-icon-" + t.tomorrow_weather_icon_id,
					dat: "weather-icon-" + t.dat_weather_icon_id
				}
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(26),
	o = n(a);
	e.
default = {
		props: {
			userInfo: Object,
			commentInfo: Object
		},
		components: {
			Comment: o.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(27),
	o = n(a);
	e.
default = {
		name: "DetailFeed",
		props: {
			feedInfo: Object
		},
		components: {
			FeedBox: o.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(42),
	o = n(a),
	s = i(40),
	r = n(s),
	l = i(3),
	c = i(6),
	u = n(c),
	d = i(110),
	_ = n(d);
	e.
default = {
		props: {
			shareUrl: {
				type: String,
			default:
				"http://www.toutiao.com/"
			},
			abstract: {
				type: String,
			default:
				"今日头条"
			},
			commentCount: {
				type: String,
			default:
				"0"
			},
			banComment: {
				type: Number,
			default:
				0
			},
			showRepost: {
				type: Boolean,
			default:
				!1
			}
		},
		data: function() {
			return {
				comment_Count: "0",
				shareFixed: !1,
				repostImg: _.
			default
			}
		},
		mounted: function() {
			this.qrcode = null,
			this.banComment > 0 ? this.comment_Count = 0 : this.comment_Count = (0, l.numFormat)(this.commentCount),
			window.addEventListener("scroll", (0, u.
		default)(this.handleScroll, 100), !1)
		},
		methods: {
			weixinShare: function() {
				null === this.qrcode && (this.qrcode = new o.
			default("J_qrcode", {
					width: 72,
					height: 72
				}), this.qrcode.makeCode(this.shareUrl))
			},
			bdShareClick: function(t) {
				var e = {
					url: this.shareUrl,
					text: "【（分享来自 @今日头条）" + this.abstract + "...",
					desc: "来自今日头条 http://www.toutiao.com/"
				}; (0, r.
			default)(t, e)
			},
			handleClickRepost: function() {
				this.$emit("repost")
			},
			handleScroll: function() {
				var t = (0, l.elOffset)(this.$refs.shareBox).top,
				e = (0, l.getScrollTop)(window);
				e > t - 20 ? this.shareFixed = !0 : this.shareFixed = !1
			}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(8),
	o = n(a),
	s = i(24),
	r = n(s);
	e.
default = {
		props: {
			pgcInfo: Array,
			mediaInfo: Object
		},
		components: {
			Pane: o.
		default,
			Subscribe: r.
		default
		}
	}
},
, , , , , , ,
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e) {},
function(t, e, i) {
	t.exports = i.p + "static/img/logo.201f80d.png"
},
function(t, e, i) {
	t.exports = i.p + "static/img/repost.021bf16.png"
},
function(t, e, i) {
	i(103);
	var n = i(1)(i(47), i(157), "data-v-7f58aa2c", null);
	t.exports = n.exports
},
function(t, e, i) {
	i(108);
	var n = i(1)(i(48), i(162), "data-v-e2575b7c", null);
	t.exports = n.exports
},
function(t, e, i) {
	i(94);
	var n = i(1)(i(49), i(148), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(99);
	var n = i(1)(i(52), i(153), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(107);
	var n = i(1)(i(53), i(161), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(83);
	var n = i(1)(i(54), i(137), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(86);
	var n = i(1)(i(55), i(140), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(97);
	var n = i(1)(i(56), i(151), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(92);
	var n = i(1)(i(57), i(146), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(89);
	var n = i(1)(i(58), i(143), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(88);
	var n = i(1)(i(59), i(142), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(84);
	var n = i(1)(i(60), i(138), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(90);
	var n = i(1)(i(61), i(144), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(98);
	var n = i(1)(i(62), i(152), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(95);
	var n = i(1)(i(63), i(149), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(87);
	var n = i(1)(i(64), i(141), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(93);
	var n = i(1)(i(65), i(147), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(102);
	var n = i(1)(i(66), i(156), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(100);
	var n = i(1)(i(67), i(154), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(96);
	var n = i(1)(i(68), i(150), "data-v-5c014667", null);
	t.exports = n.exports
},
function(t, e, i) {
	i(101);
	var n = i(1)(i(69), i(155), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(106);
	var n = i(1)(i(70), i(160), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(104);
	var n = i(1)(i(71), i(158), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(91);
	var n = i(1)(i(72), i(145), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(82);
	var n = i(1)(i(73), i(136), null, null);
	t.exports = n.exports
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return t.mediaInfo.uid ? i("pane", [i("template", {
				slot: "content"
			},
			[i("div", {
				staticClass: "user-card"
			},
			[i("div", {
				staticClass: "user-card-head"
			},
			[i("a", {
				staticClass: "user-card-avatar",
				attrs: {
					target: "_blank",
					href: t.mediaInfo.openUrl
				}
			},
			[i("img", {
				attrs: {
					src: t.mediaInfo.avatar,
					alt: ""
				}
			})]), t._v(" "), i("div", {
				staticClass: "user-card-name"
			},
			[i("a", {
				attrs: {
					href: t.mediaInfo.openUrl,
					target: "_blank"
				}
			},
			[t._v(t._s(t.mediaInfo.name))]), t._v(" "), i("subscribe", {
				attrs: {
					"user-id": t.mediaInfo.uid,
					follow: t.mediaInfo.follow
				}
			})], 1)]), t._v(" "), i("ul", {
				staticClass: "user-card-article-list"
			},
			t._l(t.pgcInfo,
			function(e) {
				return i("li", {
					staticClass: "user-card-article-item"
				},
				[i("a", {
					attrs: {
						href: e.url,
						target: "_blank"
					}
				},
				[t._v(t._s(e.title))])])
			}))])])], 2) : t._e()
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "more-mode",
				attrs: {
					ga_event: t.item.article_genre + "_item_click"
				}
			},
			[i("div", {
				staticClass: "title-box",
				attrs: {
					ga_event: t.item.article_genre + "_title_click"
				}
			},
			[i("a", {
				staticClass: "link",
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				}
			},
			[t._v(t._s(t.item.title))])]), t._v(" "), i("div", {
				staticClass: "bui-box img-list",
				attrs: {
					ga_event: t.item.article_genre + "_img_click"
				}
			},
			[t._l(t.item.image_list,
			function(e, n) {
				return i("a", {
					staticClass: "img-wrap img-item",
					attrs: {
						href: e.source_url || t.item.source_url,
						target: "_blank"
					}
				},
				[i("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: e.url,
						expression: "img.url"
					}],
					staticClass: "lazy-load-img"
				})])
			}), t._v(" "), t.item.image_list.length < 4 ? i("a", {
				staticClass: "img-wrap img-item",
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				}
			},
			[i("span", {
				staticClass: "more-info"
			},
			[t._v("\n        查看详情 "), i("tt-icon", {
				attrs: {
					type: "nextpagetool",
					color: "#406599",
					size: "12"
				}
			})], 1)]) : t._e(), t._v(" "), t.item.ad_label ? t._e() : i("i", {
				staticClass: "pic-tip"
			},
			[i("span", [t._v(t._s(t.item.gallary_image_count) + "图")])])], 2), t._v(" "), i("FooterBar", {
				attrs: {
					item: t.item
				}
			})], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "toutiao-header"
			},
			[i("div", {
				staticClass: "topbar"
			},
			[t.options.isHomePage ? i("div", {
				staticClass: "bui-left clearfix"
			},
			[i("a", {
				staticClass: "download-app tb-link",
				attrs: {
					href: "//app.toutiao.com/news_article/",
					target: "_blank",
					ga_event: "mh_nav_others"
				}
			},
			[t._v("下载APP")]), t._v(" "), i("weather-box")], 1) : t._e(), t._v(" "), t.options.isHomePage ? t._e() : i("div", {
				staticClass: "bui-left clearfix"
			}), t._v(" "), i("div", {
				staticClass: "bui-right"
			},
			[i("ul", {
				staticClass: "user-nav-list clearfix"
			},
			[t.options.id && t.options.isPgc ? i("li", {
				staticClass: "new-article"
			},
			[i("a", {
				staticClass: "tb-link",
				attrs: {
					href: "//mp.toutiao.com/new_article/",
					ga_event: "mh_write",
					target: "_blank"
				}
			},
			[t._v("发文")])]) : t._e(), t._v(" "), t.options.id && !t.options.isPgc ? i("li", {
				staticClass: "new-article"
			},
			[i("a", {
				staticClass: "tb-link",
				attrs: {
					href: "//www.toutiao.com/c/user/" + t.options.id + "/?publish=1",
					ga_event: "ugc_write",
					target: "_blank"
				}
			},
			[t._v("发文")])]) : t._e(), t._v(" "), t.options.id && t.showUser ? i("li", [i("tt-dropdown", [i("div", {
				staticClass: "tt-dropdown-link tb-link"
			},
			[i("a", {
				staticClass: "user-name",
				attrs: {
					href: "//www.toutiao.com/c/user/" + t.options.id + "/",
					ga_event: "mh_nav_user",
					target: "_blank",
					rel: "nofollow"
				}
			},
			[i("img", {
				staticClass: "user-avatar",
				attrs: {
					src: t.options.avatarUrl
				}
			}), t._v("\n              " + t._s(t.options.userName))])]), t._v(" "), i("tt-dropdown-menu", {
				attrs: {
					slot: "dropdown"
				},
				slot: "dropdown"
			},
			[i("tt-dropdown-item", [i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "//www.toutiao.com/c/user/" + t.options.id + "/?tab=favourite",
					target: "_blank",
					rel: "nofollow"
				}
			},
			[t._v("我的收藏")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "//www.toutiao.com/c/user/" + t.options.id + "/?tab=following",
					target: "_blank",
					rel: "nofollow"
				}
			},
			[t._v("我的关注")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "//www.toutiao.com/c/user/relation/" + t.options.id + "/?tab=followed",
					target: "_blank",
					rel: "nofollow"
				}
			},
			[t._v("我的粉丝")])]), t._v(" "), i("tt-dropdown-item", {
				attrs: {
					divided: ""
				}
			},
			[i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "https://sso.toutiao.com/logout/",
					rel: "nofollow"
				}
			},
			[t._v("退出")])])], 1)], 1)], 1) : t._e(), t._v(" "), !t.options.id && t.showUser ? i("li", {
				staticClass: "nav-login"
			},
			[i("a", {
				staticClass: "tb-link",
				attrs: {
					ga_event: "nav_login"
				},
				on: {
					click: function(e) {
						return e.preventDefault(),
						t.jumpToLogin(e)
					}
				}
			},
			[t._v("登录")])]) : t._e(), t._v(" "), t.options.id ? i("li", [i("feedback", {
				attrs: {
					show: !1
				}
			})], 1) : t._e(), t._v(" "), t._m(0), t._v(" "), i("li", [i("tt-dropdown", [i("a", {
				staticClass: "tt-dropdown-link tb-link",
				attrs: {
					href: "javascript:;"
				}
			},
			[t._v("头条产品")]), t._v(" "), i("tt-dropdown-menu", {
				attrs: {
					slot: "dropdown"
				},
				slot: "dropdown"
			},
			[i("tt-dropdown-item", [i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "https://www.wukong.com/",
					target: "_blank",
					ga_event: "mh_nav_others"
				}
			},
			[t._v("问答")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "https://mp.toutiao.com/",
					target: "_blank",
					ga_event: "mh_nav_others"
				}
			},
			[t._v("头条号")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "https://tuchong.com?utm_source=toutiao&utm_medium=pc_header",
					target: "_blank",
					ga_event: "mh_nav_others"
				}
			},
			[t._v("图虫")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "https://stock.tuchong.com/?source=ttweb",
					target: "_blank",
					ga_event: "mh_nav_others"
				}
			},
			[t._v("正版图库")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "https://ad.toutiao.com/promotion/?source2=pchometop",
					target: "_blank",
					ga_event: "mh_nav_ad"
				}
			},
			[t._v("广告投放")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
				staticClass: "layer-item",
				attrs: {
					href: "http://s.pstatp.com/site/motor/",
					target: "_blank",
					ga_event: "mh_nav_others"
				}
			},
			[t._v("懂车帝")])])], 1)], 1)], 1)])])]), t._v(" "), t.options.hasBar ? i("div", {
				staticClass: "middlebar"
			},
			[i("div", {
				staticClass: "middlebar-inner clearfix",
				style: {
					width: t.middlebarWidth + "px"
				}
			},
			[i("div", {
				staticClass: "bui-left logo-box"
			},
			[i("a", {
				staticClass: "logo-link",
				attrs: {
					href: "/",
					ga_event: "go_home"
				}
			},
			[i("img", {
				staticClass: "logo",
				attrs: {
					src: t.logoImg
				}
			})])]), t._v(" "), t.options.chineseTag ? i("div", {
				staticClass: "bui-left chinese-tag"
			},
			[i("a", {
				attrs: {
					href: "/",
					target: "_blank",
					ga_event: "click_index"
				}
			},
			[t._v("首页")]), t._v("\n        /\n        "), i("a", {
				attrs: {
					href: "/" + t.options.crumbTag,
					target: "_blank",
					ga_event: "click_channel"
				}
			},
			[t._v(t._s(t.options.chineseTag))]), t._v("\n        /\n        "), i("span", {
				staticClass: "text"
			},
			[t._v("正文")])]) : t._e(), t._v(" "), i("div", {
				staticClass: "bui-right",
				attrs: {
					ga_event: "middlebar_search"
				}
			},
			[i("search-box")], 1)])]) : t._e()])
		},
		staticRenderFns: [function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("li", [i("a", {
				staticClass: "tb-link",
				attrs: {
					href: "//www.toutiao.com/complain/",
					ga_event: "mh_nav_complain",
					target: "blank"
				}
			},
			[t._v("侵权投诉")])])
		}]
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "bui-box footer-bar"
			},
			[i("div", {
				staticClass: "bui-left footer-bar-left"
			},
			[t.item.tag_style ? i("a", {
				staticClass: "footer-bar-action tag",
				class: t.item.tag_style,
				attrs: {
					href: t.item.tag_url,
					target: "_blank",
					ga_event: "article_tag_click"
				}
			},
			[t._v(t._s(t.item.chinese_tag))]) : t._e(), t._v(" "), t.item.media_url ? [i("a", {
				staticClass: "footer-bar-action media-avatar",
				attrs: {
					href: t.item.media_url,
					target: "_blank",
					ga_event: t.item.article_genre + "_avatar_click"
				}
			},
			[i("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: t.item.media_avatar_url,
					expression: "item.media_avatar_url"
				}]
			})]), t._v(" "), i("a", {
				staticClass: "footer-bar-action source",
				attrs: {
					href: t.item.media_url,
					target: "_blank",
					ga_event: t.item.article_genre + "_name_click"
				}
			},
			[t._v(" " + t._s(t.item.source) + " ⋅")]), t._v(" "), i("a", {
				staticClass: "footer-bar-action source",
				attrs: {
					href: t.item.source_url + "/#comment_area",
					target: "_blank",
					ga_event: t.item.article_genre + "_comment_click"
				}
			},
			[t._v(" " + t._s(t.item.comments_count) + "评论 ⋅")])] : [i("a", {
				staticClass: "footer-bar-action media-avatar",
				class: t.item.avatar_style,
				attrs: {
					href: "/search/?keyword=" + t.item.source,
					ga_event: t.item.article_genre + "_avatar_click"
				}
			},
			[t._v(t._s(t.item.source_tag))]), t._v(" "), i("a", {
				staticClass: "footer-bar-action source",
				attrs: {
					href: "/search/?keyword=" + t.item.source,
					target: "_blank",
					ga_event: t.item.article_genre + "_name_click"
				}
			},
			[t._v(" " + t._s(t.item.source) + " ⋅")])], t._v(" "), i("span", {
				staticClass: "footer-bar-action"
			},
			[t._v(" " + t._s(t.item.time_ago))]), t._v(" "), t.item.is_related ? i("span", {
				staticClass: "footer-bar-action recommend"
			},
			[t._v("相关")]) : t._e(), t._v(" "), t.item.hot ? i("span", {
				staticClass: "footer-bar-action hot"
			},
			[t._v("热")]) : t._e(), t._v(" "), t.item.ad_label ? i("a", {
				staticClass: "footer-bar-action ad",
				attrs: {
					target: "_blank",
					href: "https://ad.toutiao.com/promotion/?source2=pcfeedadtag"
				}
			},
			[t._v(t._s(t.item.ad_label))]) : t._e()], 2), t._v(" "), t.item.group_id ? i("div", {
				staticClass: "bui-right"
			},
			[i("Dislike", {
				attrs: {
					group_id: t.item.group_id + "",
					item_id: t.item.item_id + "",
					ad_id: t.item.ad_id + "",
					dislikeUrl: t.dislikeUrl,
					getUserInfoUrl: t.getUserInfoUrl
				}
			})], 1) : t._e()])
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "no-mode",
				attrs: {
					ga_event: t.item.article_genre + "_item_click"
				}
			},
			[i("div", {
				staticClass: "title-box",
				attrs: {
					ga_event: t.item.article_genre + "_title_click"
				}
			},
			[i("a", {
				staticClass: "link",
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				}
			},
			[t._v(t._s(t.item.title))])]), t._v(" "), i("FooterBar", {
				attrs: {
					item: t.item
				}
			})], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "report"
			},
			[i("div", {
				staticClass: "areport",
				on: {
					click: t.onReportClick
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "report",
					size: "14",
					color: "#cacaca"
				}
			}), i("span", [t._v("举报")])], 1), t._v(" "), i("tt-dialog", {
				attrs: {
					title: "举报文章问题",
					size: "tiny"
				},
				model: {
					value: t.reportDialogVisible,
					callback: function(e) {
						t.reportDialogVisible = e
					},
					expression: "reportDialogVisible"
				}
			},
			[i("div", {
				staticClass: "content"
			},
			[i("div", {
				staticClass: "option"
			},
			[i("label", {
				attrs: {
					for: "c-1"
				}
			},
			[t._v("广告")]), t._v(" "), i("input", {
				attrs: {
					type: "checkbox",
					name: "report",
					id: "c-1",
					rtype: "23",
					value: "0"
				}
			})]), t._v(" "), i("div", {
				staticClass: "option"
			},
			[i("label", {
				attrs: {
					for: "c-2"
				}
			},
			[t._v("重复、旧闻")]), t._v(" "), i("input", {
				attrs: {
					type: "checkbox",
					name: "report",
					id: "c-2",
					rtype: "1",
					value: "0"
				}
			})]), t._v(" "), i("div", {
				staticClass: "option"
			},
			[i("label", {
				attrs: {
					for: "c-3"
				}
			},
			[t._v("格式问题")]), t._v(" "), i("input", {
				attrs: {
					type: "checkbox",
					name: "report",
					id: "c-3",
					rtype: "3",
					value: "0"
				}
			})]), t._v(" "), i("div", {
				staticClass: "option"
			},
			[i("label", {
				attrs: {
					for: "c-4"
				}
			},
			[t._v("低俗")]), t._v(" "), i("input", {
				attrs: {
					type: "checkbox",
					name: "report",
					id: "c-4",
					rtype: "14",
					value: "0"
				}
			})]), t._v(" "), i("div", {
				staticClass: "option"
			},
			[i("label", {
				attrs: {
					for: "c-5"
				}
			},
			[t._v("标题夸张")]), t._v(" "), i("input", {
				attrs: {
					type: "checkbox",
					name: "report",
					id: "c-5",
					rtype: "15",
					value: "0"
				}
			})]), t._v(" "), i("div", {
				staticClass: "option"
			},
			[i("label", {
				attrs: {
					for: "c-6"
				}
			},
			[t._v("与事实不符")]), t._v(" "), i("input", {
				attrs: {
					type: "checkbox",
					name: "report",
					id: "c-6",
					rtype: "17",
					value: "0"
				}
			})]), t._v(" "), i("div", {
				staticClass: "option"
			},
			[i("label", {
				attrs: {
					for: "c-7"
				}
			},
			[t._v("疑似抄袭")]), t._v(" "), i("input", {
				attrs: {
					type: "checkbox",
					name: "report",
					id: "c-7",
					rtype: "18",
					value: "0"
				}
			})]), t._v(" "), i("div", {
				staticClass: "option"
			},
			[i("p", {
				class: {
					active: t.complainShow
				},
				on: {
					click: t.expand
				}
			},
			[t._v("其他问题，我要吐槽"), i("i", {
				staticClass: "bui-icon icon-arrow_down"
			})]), t._v(" "), t.complainShow ? i("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.complainText,
					expression: "complainText"
				}],
				domProps: {
					value: t.complainText
				},
				on: {
					input: function(e) {
						e.target.composing || (t.complainText = e.target.value)
					}
				}
			}) : t._e()])]), t._v(" "), i("span", {
				staticClass: "dialog-footer",
				attrs: {
					slot: "footer"
				},
				slot: "footer"
			},
			[i("tt-button", {
				on: {
					click: function(e) {
						t.reportDialogVisible = !1
					}
				}
			},
			[t._v("取消")]), t._v(" "), i("tt-button", {
				attrs: {
					type: "primary"
				},
				on: {
					click: t.report
				}
			},
			[t._v("确认")])], 1)])], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "feedback"
			},
			[i("a", {
				staticClass: "feedback-text",
				attrs: {
					href: "javascript:void(0)"
				},
				on: {
					click: function(e) {
						t.feedbackDialogVisible = !0
					}
				}
			},
			[t._v("反馈")]), t._v(" "), i("tt-dialog", {
				attrs: {
					title: "意见反馈",
					size: "tiny"
				},
				model: {
					value: t.feedbackDialogVisible,
					callback: function(e) {
						t.feedbackDialogVisible = e
					},
					expression: "feedbackDialogVisible"
				}
			},
			[i("div", {
				staticClass: "content"
			},
			[i("p", {
				staticClass: "label"
			},
			[t._v("联系方式（必填）")]), t._v(" "), i("div", {
				staticClass: "input-group"
			},
			[i("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.feedbackEmail,
					expression: "feedbackEmail"
				}],
				staticClass: "email",
				attrs: {
					placeholder: "您的邮箱/QQ号",
					type: "text"
				},
				domProps: {
					value: t.feedbackEmail
				},
				on: {
					input: function(e) {
						e.target.composing || (t.feedbackEmail = e.target.value)
					}
				}
			})]), t._v(" "), i("p", {
				staticClass: "label"
			},
			[t._v("您的意见（必填）")]), t._v(" "), i("div", {
				staticClass: "input-group"
			},
			[i("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.feedbackContent,
					expression: "feedbackContent"
				}],
				staticClass: "text",
				attrs: {
					maxlength: "140",
					placeholder: "请填写您的意见，不超过140字"
				},
				domProps: {
					value: t.feedbackContent
				},
				on: {
					input: function(e) {
						e.target.composing || (t.feedbackContent = e.target.value)
					}
				}
			})])]), t._v(" "), i("span", {
				staticClass: "dialog-footer",
				attrs: {
					slot: "footer"
				},
				slot: "footer"
			},
			[i("tt-button", {
				on: {
					click: function(e) {
						t.feedbackDialogVisible = !1
					}
				}
			},
			[t._v("取消")]), t._v(" "), i("tt-button", {
				staticClass: "submit",
				attrs: {
					type: "primary",
					disabled: t.isSubmitDisabled
				},
				on: {
					click: t.submit
				}
			},
			[t._v("确认")])], 1)])], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "bui-box ugc-mode",
				style: t.styles,
				attrs: {
					ga_event: "ugc_item_click"
				}
			},
			[t.item.ugc_data.ugc_images.length ? i("div", {
				staticClass: "bui-left ugc-mode-lbox",
				attrs: {
					ga_event: "ugc_img_click"
				}
			},
			[i("a", {
				staticClass: "img-wrap",
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				}
			},
			[i("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: t.item.ugc_data.ugc_images[0],
					expression: "item.ugc_data.ugc_images[0]"
				}],
				staticClass: "lazy-load-img"
			})]), t._v(" "), t.item.ugc_data.ugc_images.length > 1 ? i("span", {
				staticClass: "pic-tip"
			},
			[t._v(t._s(t.item.ugc_data.ugc_images.length) + "图")]) : t._e()]) : t._e(), t._v(" "), i("div", {
				staticClass: "ugc-mode-right ugc-mode-rbox"
			},
			[i("div", {
				staticClass: "ugc-mode-rbox-inner"
			},
			[i("div", {
				staticClass: "ugc-mode-user"
			},
			[i("a", {
				staticClass: "ugc-avatar",
				attrs: {
					href: t.item.ugc_data.ugc_user.open_url,
					target: "_blank",
					ga_event: "ugc_avatar_click"
				}
			},
			[i("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: t.item.ugc_data.ugc_user.avatar_url,
					expression: "item.ugc_data.ugc_user.avatar_url"
				}]
			})]), t._v(" "), i("div", {
				staticClass: "ugc-desc"
			},
			[i("a", {
				staticClass: "ugc-name",
				attrs: {
					href: t.item.ugc_data.ugc_user.open_url,
					target: "_blank",
					ga_event: "ugc_name_click"
				}
			},
			[i("span", [t._v(t._s(t.item.ugc_data.ugc_user.name))]), t._v(" "), t.item.ugc_data.ugc_user.user_verified ? [i("tt-icon", {
				attrs: {
					type: "symbolv",
					size: "16",
					color: "#FEC346"
				}
			})] : t._e(), t._v(" "), i("tt-icon", {
				attrs: {
					type: "vtt",
					size: "20",
					color: "#FF9818"
				}
			})], 2), t._v(" "), i("p", {
				staticClass: "ugc-meta"
			},
			[t.item.ugc_data.ugc_user.is_following ? i("span", [t._v("已关注")]) : i("span", [t._v("未关注")]), t._v(" "), t.item.ugc_data.ugc_user.user_auth_info.auth_info ? i("span", [t._v(" · " + t._s(t.item.ugc_data.ugc_user.user_auth_info.auth_info))]) : t._e()])])]), t._v(" "), i("div", {
				staticClass: "ugc-mode-content",
				attrs: {
					ga_event: "ugc_content_click"
				}
			},
			[t.item.ugc_data.rich_content ? i("a", {
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				},
				domProps: {
					innerHTML: t._s(t.item.ugc_data.rich_content)
				}
			}) : i("a", {
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				}
			},
			[t._v(t._s(t.item.ugc_data.content))])]), t._v(" "), i("div", {
				staticClass: "bui-box ugc-mode-footer"
			},
			[i("div", {
				staticClass: "bui-left ugc-mode-footer-left",
				attrs: {
					ga_event: "ugc_comment_click"
				}
			},
			[i("a", {
				staticClass: "ugc-mode-action source",
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				}
			},
			[t._v(t._s(t._f("formatCount")(t.item.ugc_data.digg_count)) + "赞")]), t._v(" "), i("a", {
				staticClass: "ugc-mode-action source",
				attrs: {
					href: t.item.source_url + "/#comment_area",
					target: "_blank"
				}
			},
			[t._v(" · " + t._s(t._f("formatCount")(t.item.ugc_data.comment_count)) + "评论")]), t._v(" "), i("a", {
				staticClass: "ugc-mode-action source",
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				}
			},
			[t._v(" · " + t._s(t._f("formatCount")(t.item.ugc_data.read_count)) + "阅读")]), t._v(" "), i("span", {
				staticClass: "ugc-mode-action"
			},
			[t._v(" · " + t._s(t.item.time_ago))])]), t._v(" "), i("div", {
				staticClass: "bui-right"
			},
			[i("Dislike", {
				attrs: {
					group_id: t.item.group_id
				}
			})], 1)])])])])
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return t.listCount.length ? i("pane", {
				attrs: {
					title: t.title
				}
			},
			[i("template", {
				slot: "content"
			},
			[i("ul", {
				staticClass: "module-content bui-box picture-list",
				attrs: {
					ga_event: "click_pictures_recommend"
				}
			},
			t._l(t.listCount,
			function(e, n) {
				return i("li", {
					staticClass: "bui-left picture-item",
					class: {
						"picture-item-a": 2 === n || 6 === n
					}
				},
				[2 === n ? i("div", {
					staticStyle: {
						display: "block !important"
					},
					attrs: {
						name: "hot_image*cell_5",
						"ad-cursor": ""
					}
				}) : 6 === n ? i("div", {
					staticStyle: {
						display: "block !important"
					},
					attrs: {
						name: "hot_image*cell_6",
						"ad-cursor": ""
					}
				}) : [i("a", {
					staticClass: "link",
					attrs: {
						href: e.article_url,
						target: "_blank"
					}
				},
				[i("div", {
					staticClass: "module-pic picture-img"
				},
				[i("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: e.cover_image_url,
						expression: "item.cover_image_url"
					}],
					attrs: {
						alt: ""
					}
				}), t._v(" "), i("i", {
					staticClass: "module-tag"
				},
				[i("span", [t._v(t._s(e.gallery_image_count) + "图")])])]), t._v(" "), i("p", [t._v(t._s(e.title))])])]], 2)
			}))])], 2) : t._e()
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				ref: "shareBox",
				staticClass: "share-box",
				class: {
					"share-box-fixed": t.shareFixed
				}
			},
			[i("a", {
				staticClass: "share-count",
				attrs: {
					href: "#comment_area",
					ga_event: "click_comment_anchor"
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "comments_anchor",
					size: "30",
					color: "#f85959"
				}
			}), t._v(" "), i("span", [t._v(t._s(t.comment_Count))])], 1), t._v(" "), i("div", {
				staticClass: "share-hr"
			}), t._v(" "), t.showRepost ? i("div", {
				staticClass: "share-type",
				attrs: {
					ga_event: "click_repost"
				},
				on: {
					click: function(e) {
						t.handleClickRepost()
					}
				}
			},
			[i("img", {
				staticClass: "repost-img",
				attrs: {
					src: t.repostImg
				}
			}), i("span", [t._v("转发")])]) : t._e(), t._v(" "), i("div", {
				staticClass: "share-type",
				attrs: {
					ga_event: "click_share_weibo"
				},
				on: {
					click: function(e) {
						t.bdShareClick("tsina")
					}
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "sina",
					size: "34",
					color: "#ff6631"
				}
			}), i("span", [t._v("微博")])], 1), t._v(" "), i("div", {
				staticClass: "share-type",
				attrs: {
					ga_event: "click_share_qzone"
				},
				on: {
					click: function(e) {
						t.bdShareClick("qzone")
					}
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "qzone",
					size: "34",
					color: "#ffbd1d"
				}
			}), i("span", [t._v("Qzone")])], 1), t._v(" "), i("div", {
				staticClass: "share-type share-weixin",
				attrs: {
					ga_event: "click_share_weixin"
				},
				on: {
					mouseenter: t.weixinShare
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "wechat",
					size: "34",
					color: "#52cd3e"
				}
			}), i("span", [t._v("微信")]), t._v(" "), t._m(0)], 1)])
		},
		staticRenderFns: [function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "share-qrcode"
			},
			[i("div", {
				attrs: {
					id: "J_qrcode"
				}
			})])
		}]
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "bui-box single-mode",
				attrs: {
					ga_event: t.item.article_genre + "_item_click"
				}
			},
			[i("div", {
				staticClass: "bui-left single-mode-lbox",
				attrs: {
					ga_event: t.item.article_genre + "_img_click"
				}
			},
			[i("a", {
				staticClass: "img-wrap",
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				}
			},
			[i("img", {
				directives: [{
					name: "lazy",
					rawName: "v-lazy",
					value: t.item.image_url,
					expression: "item.image_url"
				}],
				staticClass: "lazy-load-img"
			}), t._v(" "), t.item.has_video ? i("i", {
				staticClass: "pic-tip video-tip"
			},
			[i("span", [t._v(t._s(t.item.video_duration_str))])]) : t._e()])]), t._v(" "), i("div", {
				staticClass: "single-mode-rbox"
			},
			[i("div", {
				staticClass: "single-mode-rbox-inner"
			},
			[i("div", {
				staticClass: "title-box",
				attrs: {
					ga_event: t.item.article_genre + "_title_click"
				}
			},
			[i("a", {
				staticClass: "link",
				attrs: {
					href: t.item.source_url,
					target: "_blank"
				}
			},
			[t._v(t._s(t.item.title))])]), t._v(" "), i("FooterBar", {
				attrs: {
					item: t.item,
					dislikeUrl: t.dislikeUrl,
					getUserInfoUrl: t.getUserInfoUrl
				}
			})], 1)])])
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "search-wrap"
			},
			[i("tt-autocomplete", {
				attrs: {
					"fetch-suggestions": t.querySearchAsync,
					"on-enter-keydown": t.handleEnterKeydown,
					"custom-item": t.resultType,
					placeholder: t.placeHolder
				},
				on: {
					focus: t.handleFocus,
					select: t.handleSelect,
					blur: t.handleBlur
				},
				model: {
					value: t.searchWord,
					callback: function(e) {
						t.searchWord = e
					},
					expression: "searchWord"
				}
			},
			[i("template", {
				slot: "append"
			},
			[i("tt-button", {
				on: {
					click: t.handleIconClick
				}
			},
			[t._v("搜索")])], 1)], 2)], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				attrs: {
					id: "comment"
				}
			},
			[i("div", {
				staticClass: "c-header"
			},
			[i("em", [t._v(t._s(t.commentsCount) + " ")]), t._v("条评论\n  ")]), t._v(" "), i("comment-input", {
				attrs: {
					"is-main": !0,
					avatar: t.userInfo.avatarUrl,
					group_id: t.group_id,
					item_id: t.item_id
				}
			}), t._v(" "), i("ul", t._l(t.options.list,
			function(e, n) {
				return i("li", {
					staticClass: "c-item"
				},
				[i("a", {
					staticClass: "avatar-wrap",
					attrs: {
						href: "/c/user/" + e.user.user_id + "/",
						target: "_blank"
					}
				},
				[e.user.avatar_url ? i("img", {
					attrs: {
						src: e.user.avatar_url,
						alt: ""
					}
				}) : t._e()]), t._v(" "), i("div", {
					staticClass: "c-content"
				},
				[i("div", {
					staticClass: "c-user-info"
				},
				[i("a", {
					staticClass: "c-user-name",
					attrs: {
						href: "/c/user/" + e.user.user_id + "/",
						target: "_blank"
					}
				},
				[t._v(t._s(e.user.name))]), t._v(" "), i("span", {
					staticClass: "c-create-time"
				},
				[t._v(t._s(e.timeAgo))])]), t._v(" "), i("p", [t._v(t._s(e.text))]), t._v(" "), i("div", {
					staticClass: "c-footer-action"
				},
				[i("span", {
					staticClass: "c-reply",
					attrs: {
						ga_event: "click_reply_comment"
					},
					on: {
						click: function(i) {
							t.onReplyClick(e, n, !0)
						}
					}
				},
				[t._v("回复")]), t._v(" "), e.reply_count > 0 && !e.is_reply_expanded ? i("span", {
					staticClass: "c-reply-count",
					attrs: {
						ga_event: "click_expand_reply"
					},
					on: {
						click: function(i) {
							t.getReplyComments(e, n)
						}
					}
				},
				[t._v(" ⋅ " + t._s(e.reply_count) + "条回复"), i("tt-icon", {
					attrs: {
						type: "arrow_down",
						color: "#406599",
						size: "14"
					}
				})], 1) : t._e(), t._v(" "), e.is_reply_expanded ? i("span", {
					staticClass: "c-reply-count",
					on: {
						click: function(i) {
							t.onReplyCollapseClick(e)
						}
					}
				},
				[t._v(" ⋅ 收起回复"), i("tt-icon", {
					attrs: {
						type: "arrow_up",
						color: "#406599",
						size: "14"
					}
				})], 1) : t._e(), t._v(" "), i("span", {
					staticClass: "bui-right c-report",
					attrs: {
						title: "举报"
					},
					on: {
						click: function(i) {
							t.openReport(e)
						}
					}
				},
				[i("tt-icon", {
					attrs: {
						type: "report",
						color: "#cacaca",
						size: "14"
					}
				})], 1), t._v(" "), i("span", {
					staticClass: "bui-right c-digg",
					class: {
						"c-digg-active": e.user_digg
					},
					attrs: {
						title: "点赞",
						ga_event: "click_good_comment"
					},
					on: {
						click: function(i) {
							t.onDiggClick(e, !0)
						}
					}
				},
				[t._v(t._s(e.diggNum) + " "), i("i", {
					staticClass: "bui-icon icon-thumbsup_line"
				})])]), t._v(" "), i("div", {
					class: "J_input_" + n
				}), t._v(" "), t._l(e.reply_data.reply_list,
				function(a, o) {
					return i("div", {
						staticClass: "c-reply-comment"
					},
					[i("a", {
						staticClass: "avatar-wrap",
						attrs: {
							href: "/c/user/" + a.user.user_id + "/",
							target: "_blank"
						}
					},
					[a.user.avatar_url ? i("img", {
						attrs: {
							src: a.user.avatar_url,
							alt: ""
						}
					}) : t._e()]), t._v(" "), i("div", {
						staticClass: "c-content"
					},
					[i("div", {
						staticClass: "c-user-info"
					},
					[i("a", {
						staticClass: "c-user-name",
						attrs: {
							href: "/c/user/" + a.user.user_id + "/",
							target: "_blank"
						}
					},
					[t._v(t._s(a.user.name))]), t._v(" "), i("span", {
						staticClass: "c-create-time"
					},
					[t._v(t._s(a.timeAgo))])]), t._v(" "), i("p", [t._v(t._s(a.text))]), t._v(" "), i("div", {
						staticClass: "c-footer-action"
					},
					[i("span", {
						staticClass: "c-reply",
						attrs: {
							ga_event: "click_reply_comment"
						},
						on: {
							click: function(i) {
								t.onReplyClick(a, o, !1, e.id)
							}
						}
					},
					[t._v("回复")]), t._v(" "), i("span", {
						staticClass: "bui-right c-digg",
						class: {
							"c-digg-active": a.user_digg
						},
						attrs: {
							title: "点赞",
							ga_event: "click_good_comment"
						},
						on: {
							click: function(e) {
								t.onDiggClick(a, !1)
							}
						}
					},
					[t._v(t._s(a.diggNum) + " "), i("i", {
						staticClass: "bui-icon icon-thumbsup_line"
					})])]), t._v(" "), i("div", {
						class: "J_input_" + n + "_" + o
					})])])
				}), t._v(" "), e.reply_data.hasMore ? i("a", {
					staticClass: "c-load-more r-load-more",
					attrs: {
						ga_event: "click_loadmore_reply"
					},
					on: {
						click: function(i) {
							i.preventDefault(),
							t.getReplyComments(e, n)
						}
					}
				},
				[t._v("查看更多回复")]) : t._e()], 2)])
			})), t._v(" "), t.options.hasMore ? i("a", {
				staticClass: "c-load-more",
				attrs: {
					ga_event: "click_loadmore_comment"
				},
				on: {
					click: function(e) {
						return e.preventDefault(),
						t.getComments(e)
					}
				}
			},
			[t._v("查看更多评论")]) : t._e(), t._v(" "), t.options.noMore && t.comments_count > 0 ? i("a", {
				staticClass: "no-more-tips",
				attrs: {
					href: "//app.toutiao.com/news_article/",
					target: "_blank"
				}
			},
			[t._v("以上为热门评论，头条 App 还有更多内容")]) : t._e(), t._v(" "), i("comment-input", {
				ref: "childComment",
				attrs: {
					"is-show-comment-box": t.commentBoxOptions.isShow,
					group_id: t.group_id,
					item_id: t.item_id,
					dongtai_id: t.commentBoxOptions.dongtai_id,
					reply_to_user_id: t.commentBoxOptions.reply_to_user_id,
					reply_id: t.commentBoxOptions.reply_id,
					comment_id: t.commentBoxOptions.comment_id,
					pIndex: t.commentBoxOptions.pIndex,
					subIndex: t.commentBoxOptions.subIndex,
					sourceName: t.commentBoxOptions.sourceName,
					sourceText: t.commentBoxOptions.sourceText
				}
			}), t._v(" "), i("comment-report", {
				attrs: {
					"is-show-report": t.isShowReport,
					reportData: t.reportData
				},
				on: {
					closeReport: t.closeReport
				}
			})], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "pane-module"
			},
			[t.title ? i("div", {
				staticClass: "module-head"
			},
			[t._v(t._s(t.title))]) : t._e(), t._v(" "), t._t("content")], 2)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("ul", {
				staticClass: "toolbar"
			},
			[t.showHome ? i("li", {
				staticClass: "tool-item"
			},
			[i("a", {
				attrs: {
					href: "//www.toutiao.com"
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "house",
					size: "16",
					color: "#fff"
				}
			})], 1)]) : t._e(), t._v(" "), t.showReport ? i("li", {
				staticClass: "tool-item report-item"
			},
			[t._m(0)]) : t._e(), t._v(" "), t.showRefresh ? i("li", {
				staticClass: "tool-item",
				on: {
					click: t.refresh
				}
			},
			[i("a", {
				attrs: {
					href: "javascript:void(0);"
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "refresh",
					size: "16",
					color: "#fff"
				}
			})], 1)]) : t._e(), t._v(" "), t.reallyShowTop ? i("li", {
				staticClass: "tool-item",
				on: {
					click: t.scrollToTop
				}
			},
			[i("a", {
				attrs: {
					href: "javascript:void(0);"
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "arrow_up_big",
					size: "16",
					color: "#fff"
				}
			})], 1)]) : t._e()])
		},
		staticRenderFns: [function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("a", {
				attrs: {
					href: "http://report.12377.cn:13225/toreportinputNormal_anis.do",
					target: "_blank"
				}
			},
			[i("img", {
				attrs: {
					src: "//s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/other/report_logo_15cc24e.png"
				}
			}), t._v(" "), i("span", [t._v("网上有害信息举报")])])
		}]
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "refresh-mode",
				attrs: {
					ga_event: "refresh_item_click"
				}
			},
			[i("span", [t._v(t._s(t.item.time_ago) + "看到这里")]), t._v("\n   点击刷新 "), i("tt-icon", {
				attrs: {
					type: "refresh",
					size: "12",
					color: "#2A90D7"
				}
			})], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return t.listCount.length ? i("pane", {
				attrs: {
					title: t.title
				}
			},
			[i("template", {
				slot: "content"
			},
			[i("ul", {
				staticClass: "module-content video-list",
				attrs: {
					ga_event: "click_video_recommend"
				}
			},
			t._l(t.listCount,
			function(e, n) {
				return i("li", {
					staticClass: "video-item",
					class: {
						"video-item-a": 3 === n
					}
				},
				[3 === n ? i("div", {
					staticStyle: {
						display: "block !important"
					},
					attrs: {
						name: "hot_video*cell_4",
						"ad-cursor": ""
					}
				}) : [i("a", {
					staticClass: "link",
					attrs: {
						href: e.display_url,
						target: "_blank"
					}
				},
				[i("dl", [i("dt", {
					staticClass: "module-pic"
				},
				[i("img", {
					directives: [{
						name: "lazy",
						rawName: "v-lazy",
						value: e.pc_image_url,
						expression: "item.pc_image_url"
					}],
					attrs: {
						alt: e.title
					}
				}), t._v(" "), i("i", {
					staticClass: "module-tag video-tag"
				},
				[i("span", [t._v(t._s(e.video_duration_format))])])]), t._v(" "), i("dd", [i("div", {
					staticClass: "cell"
				},
				[i("h4", [t._v(t._s(e.title))]), t._v(" "), i("p", [i("span", [t._v(t._s(t._f("formatCount")(e.video_play_count)) + "次播放 ")]), i("span", [t._v("⋅ " + t._s(t._f("formatCount")(e.comment_count)) + "评论")])])])])])])]], 2)
			}))])], 2) : t._e()
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", [i("div", {
				staticClass: "msg-alert",
				class: {
					"msg-alert-hidden": t.msgHidden
				}
			},
			[t.articleCount > 0 ? i("span", [t._v("为您推荐了" + t._s(t.articleCount) + "篇文章")]) : t._e(), t._v(" "), 0 == t.articleCount ? i("span", [t._v("暂时没有更新，休息一会儿吧")]) : t._e()]), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.msgShow,
					expression: "msgShow"
				}],
				ref: "msgAlertPlace",
				staticClass: "msgAlert-place",
				on: {
					click: t.feedRefreshClick
				}
			},
			[i("div", {
				staticClass: "msg-alert",
				class: {
					"msg-alert-fixed": t.msgFixed
				},
				attrs: {
					ga_event: "refresh_float_click"
				}
			},
			[i("span", [t._v("您有未读新闻，点击查看")]), t._v(" "), i("tt-icon", {
				attrs: {
					type: "close_small",
					size: "15",
					color: "#fff"
				},
				nativeOn: {
					click: function(e) {
						return e.stopPropagation(),
						t.closeMsgClick(e)
					}
				}
			})], 1)])])
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "subscribe",
				attrs: {
					ga_event: "follow_pgc"
				}
			},
			[i("div", {
				staticClass: "left-arrow",
				class: {
					"subscribe-btn": !t.isFollowing,
					"unsubscribe-btn": t.isFollowing
				},
				on: {
					click: t.sendRequest
				}
			},
			[i("tt-icon", {
				attrs: {
					type: t.isFollowing ? "check": "add_small",
					size: t.isFollowing ? 8 : 12,
					color: t.isFollowing ? "#777": "#fff"
				}
			}), i("span", [t._v(t._s(t.text))])], 1)])
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "weather-tool",
				on: {
					mouseenter: t.handleMouseEnter,
					mouseleave: t.handleMouseLeave
				}
			},
			[i("div", {
				staticClass: "weather-abstract"
			},
			[i("span", [t._v(" " + t._s(t.weathercity))]), t._v(" "), i("span", {
				staticClass: "city_state"
			},
			[t._v(t._s(t.weather.current_condition))]), t._v(" "), i("span", {
				staticClass: "city_temperature"
			},
			[i("em", [t._v(t._s(t.weather.low_temperature))]), t._v("°  /  "), i("em", [t._v(t._s(t.weather.high_temperature))]), t._v("°\n    ")]), t._v(" "), i("tt-icon", {
				attrs: {
					type: "arrow_down",
					color: "#fff",
					size: "14"
				}
			})], 1), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.showPopup,
					expression: "showPopup"
				}],
				staticClass: "y-weather"
			},
			[i("div", {
				staticClass: "w-header"
			},
			[i("span", {
				staticClass: "bui-icon icon-locationweather bui-vm",
				attrs: {
					ga_event: "mh_change_city"
				},
				on: {
					click: t.changeLocation
				}
			},
			[t._v(" " + t._s(t.weathercity))]), t._v(" "), i("span", {
				staticClass: "wind bui-vm"
			},
			[t._v(t._s(t.weather.wind_direction) + t._s(t.weather.wind_level) + "级")]), t._v(" "), i("span", {
				staticClass: "air vm",
				style: {
					backgroundColor: t.aqiColor
				}
			},
			[t._v(t._s(t.weather.quality_level) + " " + t._s(t.weather.aqi))])]), t._v(" "), t.showWeather ? i("ul", {
				staticClass: "days-weather"
			},
			[i("li", {
				staticClass: "bui-left day"
			},
			[i("span", {
				staticClass: "title"
			},
			[t._v("今天")]), t._v(" "), i("div", {
				staticClass: "weather-icon",
				class: [t.iconClass.today],
				attrs: {
					title: t.weather.current_condition
				}
			}), t._v(" "), i("span", {
				staticClass: "temperature"
			},
			[i("em", [t._v(t._s(t.weather.low_temperature))]), t._v("°\n            /\n            "), i("em", [t._v(t._s(t.weather.high_temperature))]), t._v("°\n        ")])]), t._v(" "), i("li", {
				staticClass: "bui-left day"
			},
			[i("span", {
				staticClass: "title"
			},
			[t._v("明天")]), t._v(" "), i("div", {
				staticClass: "weather-icon",
				class: [t.iconClass.tom],
				attrs: {
					title: t.weather.tomorrow_condition
				}
			}), t._v(" "), i("span", {
				staticClass: "temperature"
			},
			[i("em", [t._v(t._s(t.weather.tomorrow_low_temperature))]), t._v("°\n            /\n            "), i("em", [t._v(t._s(t.weather.tomorrow_high_temperature))]), t._v("°\n        ")])]), t._v(" "), i("li", {
				staticClass: "bui-left day"
			},
			[i("span", {
				staticClass: "title"
			},
			[t._v("后天")]), t._v(" "), i("div", {
				staticClass: "weather-icon",
				class: [t.iconClass.dat],
				attrs: {
					title: t.weather.dat_condition
				}
			}), t._v(" "), i("span", {
				staticClass: "temperature"
			},
			[i("em", [t._v(t._s(t.weather.dat_low_temperature))]), t._v("°\n            /\n            "), i("em", [t._v(t._s(t.weather.dat_high_temperature))]), t._v("°\n        ")])])]) : i("div", {
				staticClass: "city-select"
			},
			[i("div", {
				staticClass: "clearfix"
			},
			[i("div", {
				staticClass: "bui-left select-style"
			},
			[i("tt-select", {
				attrs: {
					placeholder: "省份"
				},
				on: {
					change: t.handleProvinceChange,
					"visible-change": t.isSelecting
				},
				model: {
					value: t.province,
					callback: function(e) {
						t.province = e
					},
					expression: "province"
				}
			},
			t._l(t.provinces,
			function(t) {
				return i("tt-option", {
					key: t.value,
					attrs: {
						label: t.label,
						value: t.value
					}
				})
			}))], 1), t._v(" "), i("div", {
				staticClass: "bui-right select-style"
			},
			[i("tt-select", {
				attrs: {
					placeholder: "城市"
				},
				on: {
					"visible-change": t.isSelecting
				},
				model: {
					value: t.city,
					callback: function(e) {
						t.city = e
					},
					expression: "city"
				}
			},
			t._l(t.citys,
			function(t) {
				return i("tt-option", {
					key: t.value,
					attrs: {
						label: t.label,
						value: t.value
					}
				})
			}))], 1)]), t._v(" "), i("div", {
				staticClass: "action clearfix"
			},
			[i("a", {
				staticClass: "bui-left ok-btn",
				attrs: {
					href: "javascript:;"
				},
				on: {
					click: t.onSubmitClick
				}
			},
			[t._v("确定")]), t._v(" "), i("a", {
				staticClass: "bui-right cancel-btn",
				attrs: {
					href: "javascript:;"
				},
				on: {
					click: t.onCancelClick
				}
			},
			[t._v("取消")])])])])])
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "repin",
				on: {
					click: t.sendRequest
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "favorite_line",
					size: "18",
					color: t.isRepinned ? "#ffbd1d": "#cacaca"
				}
			}), i("span", [t._v("收藏")])], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return t.isShowCommentBox ? i("div", {
				staticClass: "inputBox",
				on: {
					blur: t.isBlur
				}
			},
			[i("div", {
				staticClass: "bui-box"
			},
			[t.isMain ? i("div", {
				staticClass: "avatar-wrap avatar-wrap-center"
			},
			[t.avatar ? i("img", {
				attrs: {
					src: t.avatar,
					alt: ""
				}
			}) : t._e()]) : t._e(), t._v(" "), i("div", {
				staticClass: "input-wrap",
				class: {
					focus: t.isFocus,
					"not-main": !t.isMain
				}
			},
			[i("div", {
				staticClass: "c-textarea",
				attrs: {
					ga_event: "click_input_comment"
				}
			},
			[i("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.inputText,
					expression: "inputText"
				}],
				attrs: {
					placeholder: "写下您的" + t.commitText + "..."
				},
				domProps: {
					value: t.inputText
				},
				on: {
					focus: t.inputFocusClick,
					input: function(e) {
						e.target.composing || (t.inputText = e.target.value)
					}
				}
			})]), t._v(" "), i("div", {
				staticClass: "c-action",
				attrs: {
					ga_event: "click_publish_comment"
				}
			},
			[i("div", {
				staticClass: "c-submit",
				on: {
					click: t.onCommentClick
				}
			},
			[t._v(t._s(t.commitText))])])])])]) : t._e()
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "detail-feed"
			},
			[i("div", {
				staticClass: "title"
			},
			[t._v("相关推荐")]), t._v(" "), i("feed-box", {
				attrs: {
					url: t.feedInfo.url,
					initList: t.feedInfo.initList,
					category: t.feedInfo.category,
					suspensionTip: !1
				}
			})], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "action-dislike",
				attrs: {
					ga_event: "dislike_click"
				},
				on: {
					click: t.dislikeClick
				}
			},
			[i("tt-icon", {
				attrs: {
					type: "close_small",
					color: "#ddd",
					size: "16"
				}
			}), t._v("\n  不感兴趣\n")], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "detail-comment"
			},
			[i("a", {
				attrs: {
					id: "comment_area",
					href: "#"
				}
			}), t._v(" "), i("comment", {
				attrs: {
					userInfo: t.userInfo,
					group_id: t.commentInfo.groupId,
					item_id: t.commentInfo.itemId,
					comments_count: t.commentInfo.comments_count,
					ban_comment: t.commentInfo.ban_comment
				}
			})], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				ref: "wrapper",
				staticClass: "feed-infinite-wrapper"
			},
			[i("tt-loading", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.refreshLock,
					expression: "refreshLock"
				}],
				attrs: {
					message: "推荐中"
				}
			}), t._v(" "), i("msgAlert", {
				attrs: {
					category: t.category,
					suspensionTip: t.suspensionTip
				}
			}), t._v(" "), i("ul", {
				directives: [{
					name: "infinite-scroll",
					rawName: "v-infinite-scroll",
					value: t.loadMore,
					expression: "loadMore"
				}],
				attrs: {
					"infinite-scroll-disabled": "loading",
					"infinite-scroll-immediate-check": "containerCheck",
					"infinite-scroll-immediate-check-count": "containerCheckCount",
					"infinite-scroll-distance": "80"
				}
			},
			t._l(t.list,
			function(e) {
				return e.is_stick ? t._e() : i("li", {
					key: e.group_id,
					class: {
						J_ad: e.ad_id,
						J_qihu_ad: e.ad_qihu_id > -1
					},
					attrs: {
						ad_id: e.ad_id,
						ad_qihu_id: e.ad_qihu_id,
						ad_extra: e.log_extra,
						ad_track: e.ad_track
					},
					on: {
						click: function(i) {
							t.feedItemClick(e)
						}
					}
				},
				[e.ugc_data ? i("ugcMode", {
					attrs: {
						item: e
					}
				}) : e.single_mode ? i("singleMode", {
					attrs: {
						item: e,
						dislikeUrl: t.dislikeUrl,
						getUserInfoUrl: t.getUserInfoUrl
					}
				}) : e.has_gallery ? i("moreMode", {
					attrs: {
						item: e
					}
				}) : e.refresh_mode ? i("refreshMode", {
					attrs: {
						item: e
					},
					nativeOn: {
						click: function(e) {
							return e.stopPropagation(),
							t.refresh(e)
						}
					}
				}) : i("noMode", {
					attrs: {
						item: e
					}
				})], 1)
			})), t._v(" "), i("tt-loading", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.loadmoreLock,
					expression: "loadmoreLock"
				}],
				attrs: {
					message: "加载中"
				}
			})], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", [i("tt-dialog", {
				attrs: {
					title: "举报此人",
					size: "small"
				},
				model: {
					value: t.isShowReport,
					callback: function(e) {
						t.isShowReport = e
					},
					expression: "isShowReport"
				}
			},
			[i("div", {
				staticClass: "report-content"
			},
			[i("div", {
				staticClass: "report-option"
			},
			[i("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.reportType,
					expression: "reportType"
				}],
				attrs: {
					type: "radio",
					id: "radio-forbidden"
				},
				domProps: {
					value: 1,
					checked: t._q(t.reportType, 1)
				},
				on: {
					change: function(e) {
						t.reportType = 1
					}
				}
			}), t._v(" "), i("label", {
				attrs: {
					for: "radio-forbidden"
				}
			},
			[t._v("淫秽色情")])]), t._v(" "), i("div", {
				staticClass: "report-option"
			},
			[i("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.reportType,
					expression: "reportType"
				}],
				attrs: {
					type: "radio",
					id: "radio-market"
				},
				domProps: {
					value: 2,
					checked: t._q(t.reportType, 2)
				},
				on: {
					change: function(e) {
						t.reportType = 2
					}
				}
			}), t._v(" "), i("label", {
				attrs: {
					for: "radio-market"
				}
			},
			[t._v("营销广告")])]), t._v(" "), i("div", {
				staticClass: "report-option"
			},
			[i("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.reportType,
					expression: "reportType"
				}],
				attrs: {
					type: "radio",
					id: "radio-hostile"
				},
				domProps: {
					value: 3,
					checked: t._q(t.reportType, 3)
				},
				on: {
					change: function(e) {
						t.reportType = 3
					}
				}
			}), t._v(" "), i("label", {
				attrs: {
					for: "radio-hostile"
				}
			},
			[t._v("恶意攻击谩骂")])]), t._v(" "), i("div", {
				staticClass: "report-option"
			},
			[i("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.reportType,
					expression: "reportType"
				}],
				attrs: {
					type: "radio",
					id: "radio-complain"
				},
				domProps: {
					value: 0,
					checked: t._q(t.reportType, 0)
				},
				on: {
					change: function(e) {
						t.reportType = 0
					}
				}
			}), t._v(" "), i("label", {
				attrs: {
					for: "radio-complain"
				}
			},
			[t._v("我有话要说")])]), t._v(" "), 0 === t.reportType ? i("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.complainText,
					expression: "complainText"
				}],
				staticClass: "complain-text",
				domProps: {
					value: t.complainText
				},
				on: {
					input: function(e) {
						e.target.composing || (t.complainText = e.target.value)
					}
				}
			}) : t._e()]), t._v(" "), i("span", {
				staticClass: "dialog-footer",
				attrs: {
					slot: "footer"
				},
				slot: "footer"
			},
			[i("tt-button", {
				attrs: {
					type: "primary"
				},
				on: {
					click: t.onOkClick
				}
			},
			[t._v("确认")]), t._v(" "), i("tt-button", {
				on: {
					click: t.onCancelClick
				}
			},
			[t._v("取消")])], 1)])], 1)
		},
		staticRenderFns: []
	}
},
, , , , , , , ,
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	function a(t) {
		return function(e) {
			return null == t ? void 0 : t[e]
		}
	}
	function o(t) {
		return t = (0, r.
	default)(t),
		t && d.test(t) ? t.replace(u, c) : t
	}
	var s = i(253),
	r = n(s),
	l = {
		"&amp;": "&",
		"&#x3D;": "=",
		"&lt;": "<",
		"&gt;": ">",
		"&quot;": '"',
		"&#39;": "'",
		"&#x27;": "'"
	},
	c = a(l),
	u = /&(?:amp|lt|gt|quot|#39|#x3D|#x27);/g,
	d = RegExp(u.source);
	t.exports = o
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(214),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(174),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(7),
	o = n(a),
	s = i(217),
	r = n(s),
	l = o.
default.extend(r.
default),
	c = [],
	u = function(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		if (t) {
			var i = new l({
				el: t,
				propsData: {
					id: e.id || "",
					title: e.title || "",
					time: e.time || "",
					content: e.content || ""
				}
			});
			c.push(i)
		}
	};
	e.
default = u
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(176),
	o = n(a);
	e.
default = o.
default
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(7),
	o = n(a),
	s = i(218),
	r = n(s),
	l = o.
default.extend(r.
default),
	c = [],
	u = function(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		if (t) {
			var i = new l({
				el: t,
				propsData: {
					title: e.title || "",
					author_description: e.author_description || "",
					thumb_url: e.thumb_url || "",
					sold: e.sold || 0,
					column_id: e.column_id || "",
					price: e.price || ""
				}
			});
			c.push(i)
		}
	};
	e.
default = u
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(219),
	o = n(a);
	e.
default = o.
default
},
function(t, e) {
	"use strict";
	function i(t) {
		var e = /(\[[^\]]+[\]])+?/g,
		i = RegExp(e.source);
		return t && i.test(t) ? t.replace(e,
		function(t) {
			return n[t] ? '<i class="emoji" style="background-image:url(//s3.pstatp.com/toutiao/tt_tps/static/images/ttemoji_v2/' + n[t].image + ')"></i>': t
		}) : t
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}),
	e.
default = i;
	var n = e.emojiResourceList = {
		"[微笑]": {
			index: 1,
			name: "[微笑]",
			image: "emoji_1_smile@3x.png",
			key: "emoji_1_smile@3x.png",
			width: 96,
			height: 96
		},
		"[爱慕]": {
			index: 2,
			name: "[爱慕]",
			image: "emoji_2_kiss@3x.png",
			key: "emoji_2_kiss@3x.png",
			width: 96,
			height: 96
		},
		"[惊呆]": {
			index: 3,
			name: "[惊呆]",
			image: "emoji_3_daze@3x.png",
			key: "emoji_3_daze@3x.png",
			width: 96,
			height: 96
		},
		"[酷拽]": {
			index: 4,
			name: "[酷拽]",
			image: "emoji_4_smoke@3x.png",
			key: "emoji_4_smoke@3x.png",
			width: 96,
			height: 96
		},
		"[抠鼻]": {
			index: 5,
			name: "[抠鼻]",
			image: "emoji_5_pick_nose@3x.png",
			key: "emoji_5_pick_nose@3x.png",
			width: 96,
			height: 96
		},
		"[流泪]": {
			index: 6,
			name: "[流泪]",
			image: "emoji_6_cry@3x.png",
			key: "emoji_6_cry@3x.png",
			width: 96,
			height: 96
		},
		"[发怒]": {
			index: 7,
			name: "[发怒]",
			image: "emoji_7_anger@3x.png",
			key: "emoji_7_anger@3x.png",
			width: 96,
			height: 96
		},
		"[呲牙]": {
			index: 8,
			name: "[呲牙]",
			image: "emoji_8_laugh@3x.png",
			key: "emoji_8_laugh@3x.png",
			width: 96,
			height: 96
		},
		"[鼾睡]": {
			index: 9,
			name: "[鼾睡]",
			image: "emoji_9_sleep@3x.png",
			key: "emoji_9_sleep@3x.png",
			width: 96,
			height: 96
		},
		"[害羞]": {
			index: 10,
			name: "[害羞]",
			image: "emoji_10_shy@3x.png",
			key: "emoji_10_shy@3x.png",
			width: 96,
			height: 96
		},
		"[可爱]": {
			index: 11,
			name: "[可爱]",
			image: "emoji_11_naughty@3x.png",
			key: "emoji_11_naughty@3x.png",
			width: 102,
			height: 96
		},
		"[晕]": {
			index: 12,
			name: "[晕]",
			image: "emoji_12_dizzy@3x.png",
			key: "emoji_12_dizzy@3x.png",
			width: 96,
			height: 96
		},
		"[衰]": {
			index: 13,
			name: "[衰]",
			image: "emoji_13_stunned@3x.png",
			key: "emoji_13_stunned@3x.png",
			width: 96,
			height: 96
		},
		"[闭嘴]": {
			index: 14,
			name: "[闭嘴]",
			image: "emoji_14_shut_up@3x.png",
			key: "emoji_14_shut_up@3x.png",
			width: 96,
			height: 96
		},
		"[机智]": {
			index: 15,
			name: "[机智]",
			image: "emoji_15_wit@3x.png",
			key: "emoji_15_wit@3x.png",
			width: 96,
			height: 96
		},
		"[来看我]": {
			index: 16,
			name: "[来看我]",
			image: "emoji_16_attention@3x.png",
			key: "emoji_16_attention@3x.png",
			width: 108,
			height: 96
		},
		"[灵光一闪]": {
			index: 17,
			name: "[灵光一闪]",
			image: "emoji_17_hand_sample@3x.png",
			key: "emoji_17_hand_sample@3x.png",
			width: 102,
			height: 96
		},
		"[耶]": {
			index: 18,
			name: "[耶]",
			image: "emoji_18_ye@3x.png",
			key: "emoji_18_ye@3x.png",
			width: 99,
			height: 96
		},
		"[捂脸]": {
			index: 19,
			name: "[捂脸]",
			image: "emoji_19_distress_situation@3x.png",
			key: "emoji_19_distress_situation@3x.png",
			width: 96,
			height: 96
		},
		"[打脸]": {
			index: 20,
			name: "[打脸]",
			image: "emoji_20_play_face@3x.png",
			key: "emoji_20_play_face@3x.png",
			width: 102,
			height: 96
		},
		"[大笑]": {
			index: 21,
			name: "[大笑]",
			image: "emoji_21_smile@3x.png",
			key: "emoji_21_smile@3x.png",
			width: 96,
			height: 96
		},
		"[哈欠]": {
			index: 22,
			name: "[哈欠]",
			image: "emoji_22_yawn@3x.png",
			key: "emoji_22_yawn@3x.png",
			width: 96,
			height: 96
		},
		"[震惊]": {
			index: 23,
			name: "[震惊]",
			image: "emoji_23_surprise@3x.png",
			key: "emoji_23_surprise@3x.png",
			width: 96,
			height: 96
		},
		"[送心]": {
			index: 24,
			name: "[送心]",
			image: "emoji_24_take_heart@3x.png",
			key: "emoji_24_take_heart@3x.png",
			width: 96,
			height: 96
		},
		"[困]": {
			index: 25,
			name: "[困]",
			image: "emoji_25_sleepy@3x.png",
			key: "emoji_25_sleepy@3x.png",
			width: 96,
			height: 96
		},
		"[what]": {
			index: 26,
			name: "[what]",
			image: "emoji_26_what@3x.png",
			key: "emoji_26_what@3x.png",
			width: 105,
			height: 96
		},
		"[泣不成声]": {
			index: 27,
			name: "[泣不成声]",
			image: "emoji_27_sobbing@3x.png",
			key: "emoji_27_sobbing@3x.png",
			width: 96,
			height: 96
		},
		"[小鼓掌]": {
			index: 28,
			name: "[小鼓掌]",
			image: "emoji_28_handclap@3x.png",
			key: "emoji_28_handclap@3x.png",
			width: 96,
			height: 96
		},
		"[酷]": {
			index: 29,
			name: "[酷]",
			image: "emoji_29_cool@3x.png",
			key: "emoji_29_cool@3x.png",
			width: 96,
			height: 96
		},
		"[大金牙]": {
			index: 29,
			name: "[大金牙]",
			image: "emoji_29_cool@3x.png",
			key: "emoji_29_cool@3x.png",
			width: 96,
			height: 96
		},
		"[偷笑]": {
			index: 30,
			name: "[偷笑]",
			image: "emoji_30_titter@3x.png",
			key: "emoji_30_titter@3x.png",
			width: 96,
			height: 96
		},
		"[石化]": {
			index: 31,
			name: "[石化]",
			image: "emoji_31_lightning_strike@3x.png",
			key: "emoji_31_lightning_strike@3x.png",
			width: 96,
			height: 96
		},
		"[思考]": {
			index: 32,
			name: "[思考]",
			image: "emoji_32_meditation@3x.png",
			key: "emoji_32_meditation@3x.png",
			width: 96,
			height: 96
		},
		"[吐血]": {
			index: 33,
			name: "[吐血]",
			image: "emoji_33_vomiting_blood@3x.png",
			key: "emoji_33_vomiting_blood@3x.png",
			width: 96,
			height: 96
		},
		"[可怜]": {
			index: 34,
			name: "[可怜]",
			image: "emoji_34_acting_cute@3x.png",
			key: "emoji_34_acting_cute@3x.png",
			width: 96,
			height: 96
		},
		"[嘘]": {
			index: 35,
			name: "[嘘]",
			image: "emoji_35_quietly@3x.png",
			key: "emoji_35_quietly@3x.png",
			width: 96,
			height: 96
		},
		"[撇嘴]": {
			index: 36,
			name: "[撇嘴]",
			image: "emoji_36_hum@3x.png",
			key: "emoji_36_hum@3x.png",
			width: 96,
			height: 96
		},
		"[黑线]": {
			index: 37,
			name: "[黑线]",
			image: "emoji_37_khan@3x.png",
			key: "emoji_37_khan@3x.png",
			width: 96,
			height: 96
		},
		"[笑哭]": {
			index: 38,
			name: "[笑哭]",
			image: "emoji_38_forced_smile@3x.png",
			key: "emoji_38_forced_smile@3x.png",
			width: 111,
			height: 96
		},
		"[雾霾]": {
			index: 39,
			name: "[雾霾]",
			image: "emoji_39_haze@3x.png",
			key: "emoji_39_haze@3x.png",
			width: 96,
			height: 96
		},
		"[奸笑]": {
			index: 40,
			name: "[奸笑]",
			image: "emoji_40_smirk@3x.png",
			key: "emoji_40_smirk@3x.png",
			width: 96,
			height: 96
		},
		"[得意]": {
			index: 41,
			name: "[得意]",
			image: "emoji_41_cool@3x.png",
			key: "emoji_41_cool@3x.png",
			width: 96,
			height: 96
		},
		"[憨笑]": {
			index: 42,
			name: "[憨笑]",
			image: "emoji_42_bad_smile@3x.png",
			key: "emoji_42_bad_smile@3x.png",
			width: 96,
			height: 96
		},
		"[抓狂]": {
			index: 43,
			name: "[抓狂]",
			image: "emoji_43_crazy@3x.png",
			key: "emoji_43_crazy@3x.png",
			width: 96,
			height: 96
		},
		"[泪奔]": {
			index: 44,
			name: "[泪奔]",
			image: "emoji_44_tears@3x.png",
			key: "emoji_44_tears@3x.png",
			width: 96,
			height: 96
		},
		"[钱]": {
			index: 45,
			name: "[钱]",
			image: "emoji_45_money@3x.png",
			key: "emoji_45_money@3x.png",
			width: 96,
			height: 96
		},
		"[吻]": {
			index: 46,
			name: "[吻]",
			image: "emoji_46_kiss@3x.png",
			key: "emoji_46_kiss@3x.png",
			width: 96,
			height: 96
		},
		"[恐惧]": {
			index: 47,
			name: "[恐惧]",
			image: "emoji_47_fear@3x.png",
			key: "emoji_47_fear@3x.png",
			width: 96,
			height: 96
		},
		"[笑]": {
			index: 48,
			name: "[笑]",
			image: "emoji_48_smile@3x.png",
			key: "emoji_48_smile@3x.png",
			width: 96,
			height: 96
		},
		"[快哭了]": {
			index: 49,
			name: "[快哭了]",
			image: "emoji_49_injustice@3x.png",
			key: "emoji_49_injustice@3x.png",
			width: 96,
			height: 96
		},
		"[翻白眼]": {
			index: 50,
			name: "[翻白眼]",
			image: "emoji_50_their@3x.png",
			key: "emoji_50_their@3x.png",
			width: 96,
			height: 96
		},
		"[互粉]": {
			index: 51,
			name: "[互粉]",
			image: "emoji_51_focus@3x.png",
			key: "emoji_51_focus@3x.png",
			width: 96,
			height: 96
		},
		"[赞]": {
			index: 52,
			name: "[赞]",
			image: "emoji_52_like@3x.png",
			key: "emoji_52_like@3x.png",
			width: 96,
			height: 96
		},
		"[鼓掌]": {
			index: 53,
			name: "[鼓掌]",
			image: "emoji_53_handclap@3x.png",
			key: "emoji_53_handclap@3x.png",
			width: 96,
			height: 96
		},
		"[谢谢]": {
			index: 54,
			name: "[谢谢]",
			image: "emoji_54_3Q@3x.png",
			key: "emoji_54_3Q@3x.png",
			width: 96,
			height: 96
		},
		"[祈祷]": {
			index: 54,
			name: "[祈祷]",
			image: "emoji_54_3Q@3x.png",
			key: "emoji_54_3Q@3x.png",
			width: 96,
			height: 96
		},
		"[kiss]": {
			index: 55,
			name: "[kiss]",
			image: "emoji_55_kiss@3x.png",
			key: "emoji_55_kiss@3x.png",
			width: 96,
			height: 96
		},
		"[去污粉]": {
			index: 56,
			name: "[去污粉]",
			image: "emoji_56_household_cleanser@3x.png",
			key: "emoji_56_household_cleanser@3x.png",
			width: 96,
			height: 96
		},
		"[666]": {
			index: 57,
			name: "[666]",
			image: "emoji_57_666@3x.png",
			key: "emoji_57_666@3x.png",
			width: 96,
			height: 96
		},
		"[玫瑰]": {
			index: 58,
			name: "[玫瑰]",
			image: "emoji_58_rose@3x.png",
			key: "emoji_58_rose@3x.png",
			width: 96,
			height: 96
		},
		"[胡瓜]": {
			index: 59,
			name: "[胡瓜]",
			image: "emoji_59_cucumber@3x.png",
			key: "emoji_59_cucumber@3x.png",
			width: 96,
			height: 96
		},
		"[啤酒]": {
			index: 60,
			name: "[啤酒]",
			image: "emoji_60_beer@3x.png",
			key: "emoji_60_beer@3x.png",
			width: 96,
			height: 96
		},
		"[我想静静]": {
			index: 61,
			name: "[我想静静]",
			image: "emoji_61_distress_situation@3x.png",
			key: "emoji_61_distress_situation@3x.png",
			width: 105,
			height: 96
		},
		"[委屈]": {
			index: 62,
			name: "[委屈]",
			image: "emoji_62_injustice@3x.png",
			key: "emoji_62_injustice@3x.png",
			width: 96,
			height: 96
		},
		"[舔屏]": {
			index: 63,
			name: "[舔屏]",
			image: "emoji_63_lick_screen@3x.png",
			key: "emoji_63_lick_screen@3x.png",
			width: 96,
			height: 96
		},
		"[鄙视]": {
			index: 64,
			name: "[鄙视]",
			image: "emoji_64_despise@3x.png",
			key: "emoji_64_despise@3x.png",
			width: 96,
			height: 96
		},
		"[飞吻]": {
			index: 65,
			name: "[飞吻]",
			image: "emoji_65_kiss@3x.png",
			key: "emoji_65_kiss@3x.png",
			width: 96,
			height: 96
		},
		"[再见]": {
			index: 66,
			name: "[再见]",
			image: "emoji_66_bye@3x.png",
			key: "emoji_66_bye@3x.png",
			width: 96,
			height: 96
		},
		"[紫薇别走]": {
			index: 67,
			name: "[紫薇别走]",
			image: "emoji_67_erkang@3x.png",
			key: "emoji_67_erkang@3x.png",
			width: 108,
			height: 96
		},
		"[求抱抱]": {
			index: 68,
			name: "[求抱抱]",
			image: "emoji_68_hug@3x.png",
			key: "emoji_68_hug@3x.png",
			width: 108,
			height: 96
		},
		"[听歌]": {
			index: 69,
			name: "[听歌]",
			image: "emoji_69_hitler@3x.png",
			key: "emoji_69_hitler@3x.png",
			width: 96,
			height: 96
		},
		"[周冬雨的凝视]": {
			index: 70,
			name: "[周冬雨的凝视]",
			image: "emoji_70_zhoudongyu_gaze@3x.png",
			key: "emoji_70_zhoudongyu_gaze@3x.png",
			width: 96,
			height: 96
		},
		"[马思纯的微笑]": {
			index: 71,
			name: "[马思纯的微笑]",
			image: "emoji_71_masichun_smile@3x.png",
			key: "emoji_71_masichun_smile@3x.png",
			width: 96,
			height: 96
		},
		"[吐舌]": {
			index: 72,
			name: "[吐舌]",
			image: "emoji_72_dogo@3x.png",
			key: "emoji_72_dogo@3x.png",
			width: 96,
			height: 96
		},
		"[呆无辜]": {
			index: 73,
			name: "[呆无辜]",
			image: "emoji_73_cat@3x.png",
			key: "emoji_73_cat@3x.png",
			width: 96,
			height: 96
		},
		"[看]": {
			index: 74,
			name: "[看]",
			image: "emoji_74_2ha@3x.png",
			key: "emoji_74_2ha@3x.png",
			width: 96,
			height: 96
		},
		"[白眼]": {
			index: 75,
			name: "[白眼]",
			image: "emoji_75_dogo@3x.png",
			key: "emoji_75_dogo@3x.png",
			width: 96,
			height: 96
		},
		"[熊吉]": {
			index: 76,
			name: "[熊吉]",
			image: "emoji_76_bear@3x.png",
			key: "emoji_76_bear@3x.png",
			width: 96,
			height: 96
		},
		"[骷髅]": {
			index: 77,
			name: "[骷髅]",
			image: "emoji_77_skeleton@3x.png",
			key: "emoji_77_skeleton@3x.png",
			width: 96,
			height: 96
		},
		"[黑脸]": {
			index: 78,
			name: "[黑脸]",
			image: "emoji_78_black_face@3x.png",
			key: "emoji_78_black_face@3x.png",
			width: 96,
			height: 96
		},
		"[吃瓜群众]": {
			index: 79,
			name: "[吃瓜群众]",
			image: "emoji_79_eat_melon@3x.png",
			key: "emoji_79_eat_melon@3x.png",
			width: 96,
			height: 96
		},
		"[绿帽子]": {
			index: 80,
			name: "[绿帽子]",
			image: "emoji_80_green_hat@3x.png",
			key: "emoji_80_green_hat@3x.png",
			width: 96,
			height: 96
		},
		"[汗]": {
			index: 81,
			name: "[汗]",
			image: "emoji_81_sweat@3x.png",
			key: "emoji_81_sweat@3x.png",
			width: 96,
			height: 96
		},
		"[摸头]": {
			index: 82,
			name: "[摸头]",
			image: "emoji_82_lear_ropes@3x.png",
			key: "emoji_82_lear_ropes@3x.png",
			width: 96,
			height: 96
		},
		"[皱眉]": {
			index: 83,
			name: "[皱眉]",
			image: "emoji_83_frown@3x.png",
			key: "emoji_83_frown@3x.png",
			width: 96,
			height: 96
		},
		"[擦汗]": {
			index: 84,
			name: "[擦汗]",
			image: "emoji_84_wipe_sweat@3x.png",
			key: "emoji_84_wipe_sweat@3x.png",
			width: 96,
			height: 96
		},
		"[红脸]": {
			index: 85,
			name: "[红脸]",
			image: "emoji_85_redface@3x.png",
			key: "emoji_85_redface@3x.png",
			width: 96,
			height: 96
		},
		"[尬笑]": {
			index: 86,
			name: "[尬笑]",
			image: "emoji_86_orz@3x.png",
			key: "emoji_86_orz@3x.png",
			width: 96,
			height: 96
		},
		"[做鬼脸]": {
			index: 87,
			name: "[做鬼脸]",
			image: "emoji_87_makeface@3x.png",
			key: "emoji_87_makeface@3x.png",
			width: 96,
			height: 96
		},
		"[强]": {
			index: 88,
			name: "[强]",
			image: "emoji_88_intensity@3x.png",
			key: "emoji_88_intensity@3x.png",
			width: 96,
			height: 96
		},
		"[如花]": {
			index: 89,
			name: "[如花]",
			image: "emoji_89_ruhua@3x.png",
			key: "emoji_89_ruhua@3x.png",
			width: 96,
			height: 96
		},
		"[吐]": {
			index: 90,
			name: "[吐]",
			image: "emoji_90_spit@3x.png",
			key: "emoji_90_spit@3x.png",
			width: 96,
			height: 96
		},
		"[惊喜]": {
			index: 91,
			name: "[惊喜]",
			image: "emoji_91_surprise@3x.png",
			key: "emoji_91_surprise@3x.png",
			width: 96,
			height: 96
		},
		"[敲打]": {
			index: 92,
			name: "[敲打]",
			image: "emoji_92_knock@3x.png",
			key: "emoji_92_knock@3x.png",
			width: 96,
			height: 96
		},
		"[奋斗]": {
			index: 93,
			name: "[奋斗]",
			image: "emoji_93_refuel@3x.png",
			key: "emoji_93_refuel@3x.png",
			width: 96,
			height: 96
		},
		"[吐彩虹]": {
			index: 94,
			name: "[吐彩虹]",
			image: "emoji_94_rainbow@3x.png",
			key: "emoji_94_rainbow@3x.png",
			width: 96,
			height: 96
		},
		"[大哭]": {
			index: 95,
			name: "[大哭]",
			image: "emoji_95_bigcry@3x.png",
			key: "emoji_95_bigcry@3x.png",
			width: 96,
			height: 96
		},
		"[比心]": {
			index: 96,
			name: "[比心]",
			image: "emoji_96_fingerheart@3x.png",
			key: "emoji_96_fingerheart@3x.png",
			width: 96,
			height: 96
		},
		"[加油]": {
			index: 97,
			name: "[加油]",
			image: "emoji_97_refuel@3x.png",
			key: "emoji_97_refuel@3x.png",
			width: 96,
			height: 96
		},
		"[碰拳]": {
			index: 98,
			name: "[碰拳]",
			image: "emoji_98_fist@3x.png",
			key: "emoji_98_fist@3x.png",
			width: 96,
			height: 96
		},
		"[ok]": {
			index: 99,
			name: "[ok]",
			image: "emoji_99_OK@3x.png",
			key: "emoji_99_OK@3x.png",
			width: 96,
			height: 96
		},
		"[击掌]": {
			index: 100,
			name: "[击掌]",
			image: "emoji_100_highfive@3x.png",
			key: "emoji_100_highfive@3x.png",
			width: 96,
			height: 96
		},
		"[左上]": {
			index: 101,
			name: "[左上]",
			image: "emoji_101_left@3x.png",
			key: "emoji_101_left@3x.png",
			width: 96,
			height: 96
		},
		"[握手]": {
			index: 102,
			name: "[握手]",
			image: "emoji_102_shakehand@3x.png",
			key: "emoji_102_shakehand@3x.png",
			width: 96,
			height: 96
		},
		"[18禁]": {
			index: 103,
			name: "[18禁]",
			image: "emoji_103_18@3x.png",
			key: "emoji_103_18@3x.png",
			width: 96,
			height: 96
		},
		"[刀]": {
			index: 104,
			name: "[刀]",
			image: "emoji_104_knife@3x.png",
			key: "emoji_104_knife@3x.png",
			width: 96,
			height: 96
		},
		"[V5]": {
			index: 105,
			name: "[V5]",
			image: "emoji_105_V5@3x.png",
			key: "emoji_105_V5@3x.png",
			width: 96,
			height: 96
		},
		"[给力]": {
			index: 106,
			name: "[给力]",
			image: "emoji_106_awesome@3x.png",
			key: "emoji_106_awesome@3x.png",
			width: 96,
			height: 96
		},
		"[心]": {
			index: 107,
			name: "[心]",
			image: "emoji_107_heart@3x.png",
			key: "emoji_107_heart@3x.png",
			width: 96,
			height: 96
		},
		"[伤心]": {
			index: 108,
			name: "[伤心]",
			image: "emoji_108_broken_heart@3x.png",
			key: "emoji_108_broken_heart@3x.png",
			width: 96,
			height: 96
		},
		"[屎]": {
			index: 109,
			name: "[屎]",
			image: "emoji_109_shit@3x.png",
			key: "emoji_109_shit@3x.png",
			width: 96,
			height: 96
		},
		"[礼物]": {
			index: 110,
			name: "[礼物]",
			image: "emoji_110_gifts@3x.png",
			key: "emoji_110_gifts@3x.png",
			width: 96,
			height: 96
		},
		"[蛋糕]": {
			index: 111,
			name: "[蛋糕]",
			image: "emoji_111_cake@3x.png",
			key: "emoji_111_cake@3x.png",
			width: 96,
			height: 96
		},
		"[撒花]": {
			index: 112,
			name: "[撒花]",
			image: "emoji_112_flower@3x.png",
			key: "emoji_112_flower@3x.png",
			width: 96,
			height: 96
		},
		"[不看]": {
			index: 113,
			name: "[不看]",
			image: "emoji_113_lookat@3x.png",
			key: "emoji_113_lookat@3x.png",
			width: 96,
			height: 96
		},
		"[炸弹]": {
			index: 114,
			name: "[炸弹]",
			image: "emoji_114_bomb@3x.png",
			key: "emoji_114_bomb@3x.png",
			width: 96,
			height: 96
		}
	}
},
,
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(171),
	r = n(s),
	l = i(215),
	c = n(l),
	u = i(216),
	d = n(u),
	_ = i(173),
	h = n(_),
	m = i(175),
	f = n(m);
	e.
default = {
		name: "ArticleBox",
		props: {
			articleInfo: Object
		},
		data: function() {
			return {
				articleTitle: this.articleInfo.title,
				articleContent: "",
				articleUnescapeTitle: ""
			}
		},
		mounted: function() {
			var t = this;
			this.articleContent = (0, r.
		default)(this.articleInfo.content),
			this.articleUnescapeTitle = (0, r.
		default)(this.articleInfo.title),
			this.$nextTick(function() {
				var e = t.$refs.articleContent;
				t._pgcCardHandle(),
				t._audioHandle(e.querySelectorAll("tt-audio")),
				t._columnHandle(e.querySelectorAll(".tt-column-card"))
			})
		},
		methods: {
			_audioHandle: function(t) {
				if (t && t.length) for (var e = 0,
				i = t.length; e < i; e++) {
					var n = t[e]; (0, h.
				default)(n, {
						id: n.getAttribute("data-id"),
						title: n.getAttribute("title"),
						time: n.getAttribute("time"),
						content: n.getAttribute("content")
					})
				}
			},
			_columnHandle: function(t) {
				var e = {};
				if (t && t.length) for (var i = 0,
				n = t.length; i < n; i++) {
					var a = t[i],
					o = {};
					e = a.getAttribute("data-content");
					try {
						o = JSON.parse(e) || {}
					} catch(t) {
						console.error(t)
					}
					var s = o,
					r = s.title,
					l = s.author_description,
					c = s.thumb_url,
					u = s.sold,
					d = s.column_id,
					_ = s.price; (0, f.
				default)(a, {
						title: r,
						author_description: l,
						thumb_url: c,
						sold: u,
						column_id: d,
						price: _
					})
				}
			},
			_pgcCardHandle: function() {
				this._executeScript(this.articleContent)
			},
			_executeScript: function(t) {
				for (var e = /<script>([\s\S]*)<\/script>/gm,
				i = void 0; i = e.exec(t);) {
					var n = document.createElement("script");
					n.type = "text/javascript",
					n.innerHTML = i[1],
					document.body.appendChild(n)
				}
			},
			_getArticleContent: function() {
				var t = this,
				e = {};
				2 === this.articleInfo.type ? e.item_id = this.articleInfo.itemId: e.group_id = this.articleInfo.groupId,
				(0, o.
			default)({
					url:
					"/api/pc/detail/",
					method: "get",
					data: e,
					success: function(e) {
						if ("success" === e.message) {
							var i = e.data;
							t.articleContent = i.content || ""
						}
					}
				})
			}
		},
		components: {
			ArticleSub: c.
		default,
			ArticleTag: d.
		default,
			TtAudio: h.
		default
		}
	}
},
function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}),
	e.
default = {
		props: {
			subInfo: Object
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(36),
	o = n(a),
	s = i(34),
	r = n(s);
	e.
default = {
		props: {
			tagInfo: Object
		},
		components: {
			Star: o.
		default,
			Report: r.
		default
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(2),
	o = n(a),
	s = i(241),
	r = n(s),
	l = i(9),
	c = n(l),
	u = i(3),
	d = r.
default.Base64;
	e.
default = {
		name: "TtAudio",
		props: {
			id: String,
			title: String,
			time: String,
			content: String
		},
		data: function() {
			return {
				url: "",
				isActive: !1,
				progress: 0
			}
		},
		mounted: function() {
			var t = this;
			c.
		default.$on("tt-audio-play",
			function(e) {
				t.id !== e && t.isActive && t.$refs.audioObj.pause()
			})
		},
		computed: {
			timeFormat: function() {
				return (0, u.durationFormat)(this.time)
			}
		},
		methods: {
			audioClick: function() {
				this.isActive ? this.$refs.audioObj.pause() : "" === this.url ? this._getAudioUrl() : (this.progress === this.containerWidth && (this.$refs.audioObj.currentTime = 0, this.progress = 0), this.$refs.audioObj.play())
			},
			audioPlay: function() {
				c.
			default.$emit("tt-audio-play", this.id),
				this.isActive = !0
			},
			audioPause: function() {
				this.isActive = !1
			},
			audioProgress: function(t) {
				this.containerWidth || (this.containerWidth = this.$el.clientWidth);
				var e = this.$refs.audioObj.currentTime,
				i = e / this.time;
				i = i > 1 ? 1 : i,
				this.progress = i * this.containerWidth
			},
			_getAudioUrl: function() {
				var t = this; (0, o.
			default)({
					method:
					"GET",
					type: "jsonp",
					url: "//i.snssdk.com/audio/play/1/toutiao/mp4/" + this.id,
					success: function(e) {
						"success" === e.message && (t.url = d.decode(e.data.audio_list.audio_1.main_url.replace(/\n/gi, "")).replace(/^http:/, "https:"), t.backup_url = d.decode(e.data.audio_list.audio_1.backup_url_1.replace(/\n/gi, "")).replace(/^http:/, "https:"), t.$nextTick(function() {
							t.$refs.audioObj.play().
							catch(function() {
								t.url = t.backup_url,
								t.$nextTick(function() {
									t.$refs.audioObj.play()
								})
							})
						}))
					},
					error: function() {}
				})
			}
		}
	}
},
function(t, e) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	}),
	e.
default = {
		name: "TtColumnCard",
		props: {
			thumb_url: String,
			title: String,
			author_description: String,
			price: String,
			sold: String,
			column_id: String
		},
		data: function() {
			return {}
		}
	}
},
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(74),
	o = n(a),
	s = i(15),
	r = n(s),
	l = i(229),
	c = n(l),
	u = i(212),
	d = n(u),
	_ = i(178);
	e.
default = {
		props: {
			articleInfo: {
				type: Object,
			default:
				function() {
					return {}
				}
			},
			mediaInfo: {
				type: Object,
			default:
				function() {
					return {}
				}
			},
			isUgc: {
				type: Boolean,
			default:
				!1
			},
			showPublisher: Boolean
		},
		data: function() {
			return {
				closeImg: d.
			default,
				inputContent: "",
				inputLength: 0,
				inputInvalid: !1,
				isShowEmojiPanel: !1
			}
		},
		watch: {
			showPublisher: function() {
				var t = this;
				if (this.showPublisher) {
					if (this.originThread) {
						var e = this.articleInfo.ugcInfo || {};
						this.inputContent = "//@" + e.name + ":" + this.articleInfo.content,
						this.$nextTick(function() {
							var e = t.$refs.input;
							e.selectionStart = 0,
							e.selectionEnd = 0,
							e.focus && e.focus()
						})
					}
				} else this.inputContent = "",
				this.inputLength = 0,
				this.inputInvalid = !1,
				this.isShowEmojiPanel = !1
			}
		},
		computed: {
			emojiList: function() {
				return (0, c.
			default)(_.emojiResourceList).sort(function(t, e) {
					return t.index - e.index
				}).map(function(t) {
					return t.backgroundImg = "//s3.pstatp.com/toutiao/tt_tps/static/images/ttemoji_v2/" + t.image,
					t
				})
			},
			canPublish: function() {
				return "" !== this.inputContent && !this.inputInvalid
			},
			openUrl: function() {
				if (this.isUgc) {
					if (this.originThread) {
						var t = (this.originThread.user || {}).info || {};
						return "https://www.toutiao.com/c/user/" + t.user_id + "/"
					}
					var e = this.articleInfo.ugcInfo;
					return "https://www.toutiao.com/c/user/" + e.userId + "/"
				}
				return "https://www.toutiao.com" + this.mediaInfo.openUrl
			},
			originUserName: function() {
				if (this.isUgc) {
					var t = void 0;
					return t = this.originThread ? (this.originThread.user || {}).info || {}: this.articleInfo.ugcInfo,
					t.name
				}
				return this.mediaInfo.name
			},
			originContent: function() {
				return this.isUgc ? this.originThread ? this.originThread.rich_content || this.originThread.content: this.articleInfo.richContent || this.articleInfo.content: this.articleInfo.title
			},
			originCoverUrl: function() {
				var t = void 0,
				e = void 0;
				if (this.isUgc) if (this.originThread) {
					var i = this.originThread.large_image_list,
					n = (this.originThread.user || {}).info || {};
					t = i && i.length > 0 ? i[0].url: null,
					e = n.avatar_url || ""
				} else {
					var a = this.articleInfo.images,
					o = this.articleInfo.ugcInfo;
					t = a && a.length > 0 ? a[0] : null,
					e = o.avatarUrl || ""
				} else t = this.articleInfo.coverImg,
				e = this.mediaInfo.avatar || "";
				return t = t || e,
				0 === t.indexOf("http") ? t: t ? "http:" + t: ""
			},
			originThread: function() {
				return this.articleInfo.showOrigin ? this.articleInfo.originThread: null
			}
		},
		methods: {
			handleClose: function() {
				this.$emit("close")
			},
			toggleEmojiPanel: function() {
				this.isShowEmojiPanel = !this.isShowEmojiPanel
			},
			handleInput: function(t) {
				this.inputLength = t.length,
				this.inputLength > 2e3 ? this.inputInvalid = !0 : this.inputInvalid = !1
			},
			handleSelectEmoji: function(t) {
				var e = this.$refs.input,
				i = "number" == typeof e.selectionStart ? e.selectionStart: this.inputContent.length,
				n = i + t.name.length;
				this.inputContent = this.inputContent.substring(0, i) + t.name + this.inputContent.substring(i, this.inputContent.length),
				this.handleInput(this.inputContent),
				this.$nextTick(function() {
					e.selectionStart = n,
					e.selectionEnd = n,
					e.focus && e.focus()
				})
			},
			getContentRichSpan: function() {
				var t = this.articleInfo.ugcInfo || {},
				e = t.name;
				if (!e) return null;
				for (var i = [], n = "@" + e, a = new RegExp(n, "gm"), o = a.exec(this.inputContent); o;) {
					var s = {
						flag: 0,
						link: "sslocal://profile?uid=" + t.userId,
						length: n.length,
						start: o.index
					};
					0 !== i.length && (s.type = 1, s.text = ""),
					i.push(s),
					o = a.exec(this.inputContent)
				}
				return i.length > 0 ? (0, r.
			default)({
					links:
					i
				}):
				void 0
			},
			publish: function(t) {
				if (t.preventDefault(), this.canPublish) {
					var e = {};
					if (this.isUgc) {
						var i = this.articleInfo.repostParams || {};
						e = {
							content: this.inputContent,
							cover_url: this.originCoverUrl,
							repost_to_comment: 1
						},
						this.originThread ? (211 === i.repost_type ? e.title = "@" + this.originUserName + "：" + this.originThread.content: this.articleInfo.isComment ? e.title = this.originThread.content: e.title = this.originUserName + "：" + this.originThread.content, e.content_rich_span = this.getContentRichSpan()) : e.title = this.originUserName + "：" + this.articleInfo.content,
						delete i.content,
						delete i.cover_url,
						delete i.title,
						delete i.content_rich_span,
						e = (0, o.
					default)(e, i)
					} else e = {
						content: this.inputContent,
						cover_url: this.originCoverUrl,
						fw_id: this.articleInfo.groupId && this.articleInfo.itemId,
						fw_id_type: 4,
						fw_user_id: parseInt(this.mediaInfo.uid, 10),
						opt_id: this.articleInfo.groupId && this.articleInfo.itemId,
						opt_id_type: 4,
						repost_to_comment: 1,
						repost_type: 211,
						title: this.mediaInfo.name + "：" + this.originContent
					};
					e.group_id = this.articleInfo.groupId,
					e.item_id = this.articleInfo.itemId,
					this.$emit("publish", e)
				}
			}
		}
	}
},
, , , , , , , , , , , , , , , ,
function(t, e) {},
function(t, e) {},
function(t, e) {},
,
function(t, e) {},
function(t, e) {},
function(t, e) {},
, , ,
function(t, e, i) {
	t.exports = i.p + "static/img/close.bc5a00d.png"
},
,
function(t, e, i) {
	i(206);
	var n = i(1)(i(180), i(224), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(203);
	var n = i(1)(i(181), i(221), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(202);
	var n = i(1)(i(182), i(220), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(204);
	var n = i(1)(i(183), i(222), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(207);
	var n = i(1)(i(184), i(225), null, null);
	t.exports = n.exports
},
function(t, e, i) {
	i(208);
	var n = i(1)(i(185), i(226), null, null);
	t.exports = n.exports
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "bui-box article-tag"
			},
			[i("div", {
				staticClass: "bui-left"
			},
			[i("tt-icon", {
				attrs: {
					type: "tag",
					color: "#cacaca",
					size: "21"
				}
			}), t._v(" "), i("ul", {
				staticClass: "tag-list"
			},
			t._l(t.tagInfo.tags,
			function(e) {
				return i("li", {
					staticClass: "tag-item"
				},
				[i("a", {
					staticClass: "label-link",
					attrs: {
						href: "/search/?keyword=" + e.name,
						target: "_blank"
					}
				},
				[t._v(t._s(e.name))])])
			}))], 1), t._v(" "), i("div", {
				staticClass: "bui-right"
			},
			[i("star", {
				attrs: {
					"group-id": t.tagInfo.groupId,
					"item-id": t.tagInfo.itemId,
					repin: t.tagInfo.repin
				}
			}), t._v(" "), i("report", {
				attrs: {
					"group-id": t.tagInfo.groupId
				}
			})], 1)])
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "article-sub"
			},
			[t.subInfo.isOriginal ? i("span", {
				staticClass: "original"
			},
			[t._v("原创")]) : t._e(), t._v(" "), i("span", [t._v(t._s(t.subInfo.source))]), t._v(" "), i("span", [t._v(t._s(t.subInfo.time))])])
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "audio-box",
				class: {
					active: t.isActive
				},
				on: {
					click: t.audioClick
				}
			},
			[i("div", {
				staticClass: "audio-top"
			},
			[i("p", {
				staticClass: "audio-title"
			},
			[t._v(t._s(t.title))]), t._v(" "), i("p", {
				staticClass: "audio-time"
			},
			[t._v(t._s(t.timeFormat))])]), t._v(" "), i("div", {
				staticClass: "audio-content"
			},
			[t._v(t._s(t.content))]), t._v(" "), i("div", {
				staticStyle: {
					display: "none"
				}
			},
			[i("audio", {
				ref: "audioObj",
				attrs: {
					src: t.url
				},
				on: {
					play: t.audioPlay,
					pause: t.audioPause,
					timeupdate: t.audioProgress
				}
			})]), t._v(" "), i("div", {
				staticClass: "audio-progress",
				style: {
					width: t.progress + "px"
				}
			})])
		},
		staticRenderFns: []
	}
},
,
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "article-box"
			},
			[i("h1", {
				staticClass: "article-title"
			},
			[t._v(t._s(t.articleUnescapeTitle))]), t._v(" "), i("article-sub", {
				attrs: {
					subInfo: t.articleInfo.subInfo
				}
			}), t._v(" "), i("div", {
				ref: "articleContent",
				staticClass: "article-content",
				domProps: {
					innerHTML: t._s(t.articleContent)
				}
			}), t._v(" "), t.articleInfo.itemId && t.articleInfo.has_extern_link ? i("a", {
				staticClass: "extra-link",
				attrs: {
					href: "//i.snssdk.com/pgcui/extern_redirect/?item_id=" + t.articleInfo.itemId,
					target: "_blank"
				}
			},
			[t._v("了解更多")]) : t._e(), t._v(" "), i("article-tag", {
				attrs: {
					tagInfo: t.articleInfo.tagInfo
				}
			})], 1)
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "pgc-column-card"
			},
			[i("img", {
				attrs: {
					src: t.thumb_url,
					role: "presentation"
				}
			}), t._v(" "), i("div", {
				staticClass: "info"
			},
			[i("p", {
				staticClass: "title"
			},
			[t._v(t._s(t.title))]), t._v(" "), i("p", {
				staticClass: "author"
			},
			[t._v("作者：" + t._s(t.author_description))]), t._v(" "), i("div", [i("span", {
				staticClass: "price"
			},
			[t._v(t._s(Number(t.price) ? t.price + "元": "免费"))]), t._v(" "), i("span", {
				staticClass: "sold"
			},
			[t._v(t._s(t.sold) + "人已购")]), t._v(" "), i("a", {
				staticClass: "detail",
				attrs: {
					target: "_blank",
					href: "https://ic.snssdk.com/column/v2/index/column/landing/?column_id=" + t.column_id
				}
			},
			[t._v("详情")])])])])
		},
		staticRenderFns: []
	}
},
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", {
				staticClass: "publisher"
			},
			[i("div", {
				staticClass: "publisher-inner"
			},
			[i("div", {
				staticClass: "header"
			},
			[i("div", {
				staticClass: "title"
			},
			[t._v("转发")]), t._v(" "), i("span", {
				staticClass: "close",
				on: {
					click: t.handleClose
				}
			},
			[i("img", {
				attrs: {
					src: t.closeImg
				}
			})])]), t._v(" "), i("div", {
				staticClass: "publisher-content"
			},
			[i("div", {
				staticClass: "original-content"
			},
			[t.originCoverUrl ? i("img", {
				staticClass: "cover-img",
				attrs: {
					src: t.originCoverUrl
				}
			}) : t._e(), t._v(" "), i("div", {
				staticClass: "text"
			},
			[i("a", {
				staticClass: "user-name",
				attrs: {
					href: t.openUrl,
					target: "_blank"
				}
			},
			[t._v("@" + t._s(t.originUserName))]), t._v("："), i("div", {
				staticClass: "html",
				domProps: {
					innerHTML: t._s(t.originContent)
				}
			})])]), t._v(" "), i("div", {
				staticClass: "publish-content"
			},
			[i("textarea", {
				directives: [{
					name: "model",
					rawName: "v-model.trim",
					value: t.inputContent,
					expression: "inputContent",
					modifiers: {
						trim: !0
					}
				}],
				ref: "input",
				staticClass: "input",
				class: {
					warning: t.inputInvalid
				},
				attrs: {
					placeholder: "请输入内容"
				},
				domProps: {
					value: t.inputContent
				},
				on: {
					keyup: function(e) {
						t.handleInput(e.target.value)
					},
					input: function(e) {
						e.target.composing || (t.inputContent = e.target.value.trim())
					},
					blur: function(e) {
						t.$forceUpdate()
					}
				}
			}), t._v(" "), i("p", {
				staticClass: "words-number"
			},
			[t._v(t._s(t.inputLength) + "/2000字")]), t._v(" "), i("span", {
				staticClass: "show-emoji",
				on: {
					click: t.toggleEmojiPanel
				}
			},
			[i("img", {
				staticClass: "icon",
				attrs: {
					src: "http://p3.pstatp.com/origin/b76b00091cadfe239a6a"
				}
			})])]), t._v(" "), i("div", {
				staticClass: "footer"
			},
			[i("div", {
				staticClass: "y-right"
			},
			[i("a", {
				staticClass: "publish",
				class: {
					active: t.canPublish
				},
				attrs: {
					href: "#"
				},
				on: {
					click: t.publish
				}
			},
			[t._v("转发")])])]), t._v(" "), i("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.isShowEmojiPanel,
					expression: "isShowEmojiPanel"
				}],
				staticClass: "uploader-popup emoji-panel"
			},
			[i("i", {
				staticClass: "bui-icon close-popup icon-close_small",
				on: {
					click: t.toggleEmojiPanel
				}
			}), t._v(" "), i("div", {
				staticClass: "emoji-box"
			},
			[i("div", {
				staticClass: "emoji-list"
			},
			t._l(t.emojiList,
			function(e) {
				return i("i", {
					key: e.name,
					staticClass: "emoji",
					style: {
						"background-image": "url(" + e.backgroundImg + ")"
					},
					on: {
						click: function(i) {
							t.handleSelectEmoji(e)
						}
					}
				})
			}))])])])])])
		},
		staticRenderFns: []
	}
},
,
function(t, e) {},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(t, e, i) {
	"use strict";
	function n(t) {
		return t && t.__esModule ? t: {
		default:
			t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var a = i(31),
	o = n(a),
	s = i(37),
	r = n(s),
	l = i(33),
	c = n(l),
	u = i(32),
	d = n(u),
	_ = i(3),
	h = i(6),
	m = n(h),
	f = i(44),
	p = n(f),
	g = i(43),
	v = n(g),
	w = i(172),
	x = n(w),
	y = i(45),
	b = n(y),
	k = i(46),
	C = n(k),
	j = i(177),
	I = n(j),
	M = i(2),
	T = n(M),
	S = window.BASE_DATA;
	e.
default = {
		name: "app",
		data: function() {
			return {
				userInfo: S.userInfo,
				headerInfo: S.headerInfo,
				articleInfo: S.articleInfo,
				commentInfo: S.commentInfo,
				feedInfo: S.feedInfo,
				shareInfo: S.shareInfo,
				pgcInfo: S.pgcInfo,
				mediaInfo: S.mediaInfo,
				clearPage: ["6563848780355994116"].indexOf(S.articleInfo.groupId) === -1,
				showPublisher: !1,
				submiting: !1
			}
		},
		mounted: function() {
			this._hoverAdHandle()
		},
		methods: {
			_hoverAdHandle: function() {
				var t = this,
				e = (0, _.elOffset)(this.$refs.rightModule).top;
				window.addEventListener("scroll", (0, m.
			default)(function() {
					var i = t.$refs.rightModule.clientHeight,
					n = (0, _.getScrollTop)(window);
					t.$refs.hoverAd.getAttribute("done") && (e + i > n ? t.$refs.hoverAdWrap.style.display = "none": t.$refs.hoverAdWrap.style.display = "block")
				},
				100), !1)
			},
			handleShowRepostEditor: function() {
				this.showPublisher = !0
			},
			handleClosePublisher: function() {
				this.showPublisher = !1
			},
			handleRepost: function(t) {
				var e = this;
				return ! this.submiting && (t.content ? (this.submiting = !0, void(0, T.
			default)({
					url:
					"/c/ugc/content/repost/",
					method: "post",
					data: t,
					success: function(t) {
						e.submiting = !1,
						"success" === t.message ? (e.$Toast({
							message: "转发成功"
						}), setTimeout(function() {
							window.location = "https://www.toutiao.com" + t.data.open_url
						},
						2e3)) : "error" === t.message && e.$Toast({
							message: "转发失败，请重试"
						})
					},
					error: function(t) {
						e.$Toast({
							message: "服务器开了点小差，请稍后再试"
						}),
						e.submiting = !1
					}
				})) : (this.$Toast({
					message: "内容必填"
				}), !1))
			}
		},
		components: {
			TtHeader: o.
		default,
			ToolBar: r.
		default,
			ArticleBox: x.
		default,
			DetailFeed: p.
		default,
			DetailComment: v.
		default,
			ShareBox: b.
		default,
			UserCard: C.
		default,
			HotVideos: c.
		default,
			HotImages: d.
		default,
			Publisher: I.
		default
		}
	}
},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(t, e) {},
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
function(t, e, i) {
	i(308);
	var n = i(1)(i(261), i(364), null, null);
	t.exports = n.exports
},
, , , , , ,
function(t, e) {
	t.exports = {
		render: function() {
			var t = this,
			e = t.$createElement,
			i = t._self._c || e;
			return i("div", [i("tt-header", {
				attrs: {
					options: t.headerInfo,
					middlebarWidth: 1170
				}
			}), t._v(" "), i("div", {
				staticClass: "bui-box container"
			},
			[i("div", {
				staticClass: "bui-left index-left"
			},
			[i("share-box", {
				attrs: {
					"share-url": t.shareInfo.shareUrl,
					"comment-count": t.shareInfo.commentCount,
					abstract: t.shareInfo.abstract,
					"ban-comment": t.shareInfo.ban_comment,
					"show-repost": !0
				},
				on: {
					repost: t.handleShowRepostEditor
				}
			})], 1), t._v(" "), i("div", {
				staticClass: "bui-left index-middle"
			},
			[i("article-box", {
				attrs: {
					articleInfo: t.articleInfo
				}
			}), t._v(" "), t.clearPage ? i("div", {
				staticClass: "bd-bottom-1",
				attrs: {
					"ad-cursor": "",
					name: "adetail_main*bottom_1",
					id: "J_ad_baidu_bottom"
				}
			}) : t._e(), t._v(" "), i("detail-comment", {
				attrs: {
					userInfo: t.userInfo,
					commentInfo: t.commentInfo
				}
			}), t._v(" "), t.clearPage ? i("detail-feed", {
				attrs: {
					feedInfo: t.feedInfo
				}
			}) : t._e()], 1), t._v(" "), t.clearPage ? i("div", {
				ref: "rightModule",
				staticClass: "bui-right index-right"
			},
			["0" != t.mediaInfo.uid ? i("user-card", {
				attrs: {
					pgcInfo: t.pgcInfo,
					mediaInfo: t.mediaInfo
				}
			}) : t._e(), t._v(" "), i("div", {
				staticClass: "right-top-1 right-img",
				attrs: {
					name: "adetail_right*top_1_zy"
				}
			}), t._v(" "), i("hot-images", {
				attrs: {
					count: 8,
					title: "精彩图片"
				}
			}), t._v(" "), i("div", {
				staticClass: "right-top-2 right-img",
				attrs: {
					name: "adetail_right*top_2_zy"
				}
			}), t._v(" "), i("hot-videos", {
				attrs: {
					count: 7,
					title: "热门视频"
				}
			}), t._v(" "), i("div", {
				staticClass: "right-top-3 right-img",
				attrs: {
					name: "adetail_right*top_3_zy"
				}
			}), t._v(" "), i("div", {
				staticClass: "right-top-4 right-img",
				attrs: {
					name: "adetail_right*top_4_zy"
				}
			}), t._v(" "), i("div", {
				ref: "hoverAdWrap",
				attrs: {
					id: "imagindexhover"
				}
			},
			[i("div", {
				ref: "hoverAd",
				staticClass: "right-hover-1 right-img",
				attrs: {
					name: "adetail_right*hover_1_zy"
				}
			})])], 1) : t._e()]), t._v(" "), i("tool-bar"), t._v(" "), i("Publisher", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.showPublisher,
					expression: "showPublisher"
				}],
				attrs: {
					isUgc: !1,
					"show-publisher": t.showPublisher,
					articleInfo: t.articleInfo,
					mediaInfo: t.mediaInfo
				},
				on: {
					close: t.handleClosePublisher,
					publish: t.handleRepost
				}
			})], 1)
		},
		staticRenderFns: []
	}
}]);