!function() {
	"use strict";
	window.commonsValidator = window.commonsValidator || {},
	function(n) {
		function a(n) {
			return - 1 !== i.indexOf(n)
		}
		function t(n) {
			return - 1 !== r.indexOf(n)
		}
		var i = ["aero", "arpa", "asia", "biz", "cat", "com", "coop", "edu", "gov", "int", "info", "jobs", "mil", "mtn", "mobi", "museum", "name", "net", "org", "pro", "tel", "travel", "xxx", "xyz", "wtf"],
		r = ["ac", "ad", "ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "xn--3e0b707e", "xn--45brj9c", "xn--80ao21a", "xn--90a3ac", "xn--90ais", "xn--clchc0ea0b2g2a9gcd", "xn--d1alf", "xn--fiqs8s", "xn--fiqz9s", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--gecrj9c", "xn--h2brj9c", "xn--j1amh", "xn--j6w193g", "xn--kprw13d", "xn--kpry57d", "xn--l1acc", "xn--lgbbat1ad8j", "xn--mgb9awbf", "xn--mgba3a4f16a", "xn--mgbaam7a8h", "xn--mgbayh7gpa", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgberp4a5d4ar", "xn--mgbpl2fh", "xn--mgbtx2b", "xn--mgbx4cd0ab", "xn--node", "xn--o3cw4h", "xn--ogbpf8fl", "xn--p1ai", "xn--pgbs0dh", "xn--qxam", "xn--s9brj9c", "xn--wgbh1c", "xn--wgbl6a", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--y9a3aq", "xn--yfro4i67o", "xn--ygbi2ammx", "ye", "yt", "za", "zm", "zw"];
		n.Domains = {
			isValidGenericTld: a,
			isValidCountryCodeTld: t
		}
	} (window.commonsValidator),
	function(n) {
		function a(n) {
			return n = n.toLowerCase(),
			"." === n[0] ? n.substring(1) : n
		}
		function t(n) {
			if (!n) return ! 1;
			if (n.length > 253) return ! 1;
			var a = n.match(d);
			return a ? a[1] : null
		}
		function i(t) {
			return n.Domains.isValidGenericTld(a(t)) || n.Domains.isValidCountryCodeTld(a(t))
		}
		function r(n) {
			var a, r, e;
			return "string" != typeof n ? !1 : (r = n.match(l)) ? (e = r[1], s.test(e) || g.test(e) || x.test(e)) : (a = t(n), a ? i(a) : null)
		}
		var e = "[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?",
		c = "[a-zA-Z](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?",
		m = "^(?:" + e + "\\.)*(" + c + ")\\.?$",
		o = "^\\[(.*)\\]$",
		s = /^(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}$/,
		g = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/,
		x = /^((?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4})*)?)::((?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4})*)?)$/,
		d = new RegExp(m),
		l = new RegExp(o);
		n.DomainValidator = {
			isValid: r
		}
	} (window.commonsValidator),
	function(n) {
		function a(a) {
			return - 1 === a.indexOf(".") ? !1 : n.DomainValidator.isValid(a)
		}
		function t(n) {
			var a = !0;
			return ! n || n.length > 64 ? !1 : (a = n.match(g), a || (a = /[a-zA-Z+][a-zA-Z0-9-_.]{1,29}/.test(n)), a)
		}
		function i(n) {
			var a = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
			return a.test(n)
		}
		function r(n) {
			if (!n) return ! 1;
			if (i(n)) return ! 1;
			if ("." === n[n.length - 1]) return ! 1;
			if (n.split("@").length > 2) return ! 1;
			var r = n.match(d);
			return r && t(r[1]) ? a(r[2]) : !1
		}
		var e = "\\(\\)<>@,;:'\\\\\\\"\\.\\[\\]",
		c = "[^\\s" + e + "]",
		m = '("[^"]*")',
		o = "((" + c + "|')+|" + m + ")",
		s = "^\\s*" + o + "(\\." + o + ")*$",
		g = new RegExp(s),
		x = "^\\s*?(.+)@(.+?)\\s*$",
		d = new RegExp(x);
		n.EmailValidator = {
			isValid: r
		};
	} (window.commonsValidator);
} ();