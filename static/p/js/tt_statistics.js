webpackJsonp([5, 0], {
	0 : function(e, t, n) {
		e.exports = n(366)
	},
	366 : function(e, t) { !
		function(e, t, n) {
			function o(e) {
				var t = s("__tasessionId");
				return t ? t && e && (a("__tasessionId", t, {
					expires: 1800
				}), f = !1) : (p = (new Date).getTime(), t = "" + i(9) + (new Date).getTime(), a("__tasessionId", t, {
					expires: 1800
				}), f = !0),
				t
			}
			function i(e) {
				for (var t = ""; t.length < e; t += Math.random().toString(36).substr(2));
				return t.substr(0, e)
			}
			function r(e) {
				for (var t, n, o = 1,
				i = arguments.length; o < i; o++) {
					t = arguments[o];
					for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
				}
				return e
			}
			function s(e) {
				var n, o = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
				return (n = t.cookie.match(o)) ? unescape(n[2]) : null
			}
			function a(e, n, o) {
				var i, s = {
					path: "/"
				};
				r(s, o),
				s.expires && (i = new Date, i.setTime(i.getTime() + 1e3 * o.expires)),
				t.cookie = [e, "=", escape(n), s.expires ? "; expires=" + i.toUTCString() : "", s.path ? "; path=" + s.path: "", s.domain ? "; domain=" + s.domain: "", s.secure ? "; secure": ""].join("")
			}
			var u = {},
			c = {},
			p = (new Date).getTime(),
			f = !1;
			u.setup = function(e) {
				r(c, e)
			},
			u.send = function(t, n) {
				var i = "//www.toutiao.com/api/article/user_log/?",
				s = [],
				a = {};
				if (r(a, c, n, {
					sid: o("event" === t),
					type: t
				}), "close" !== t || (a.st = (new Date).getTime() - p, !f)) {
					for (k in a) s.push(k + "=" + a[k]);
					s.push("t=" + (new Date).getTime()),
					e._ta_log_img_ = new Image,
					e._ta_log_img_.src = i + s.join("&")
				}
			},
			e.onbeforeunload = function(e) {
				u.send("close", {})
			},
			e.ttAnalysis = u
		} (window, document, void 0)
	}
});