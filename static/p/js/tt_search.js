riot.tag("weather", '<div class="w-header"> <span class="y-icon icon-location" onclick="{changeLocation}" ga_event="mh_change_city">&nbsp;{options.city}</span> <span class="wind">{options.wind}</span> <span class="air" riot-style="background: {options.level}">{options.air}</span> </div> <ul class="y-box days-weather {show: options.weather_show}"> <li class="y-left day"> <span class="title">今天</span> <div title="{options.weather.current_condition}" class="weather-icon weather-icon-{options.weather.weather_icon_id}"></div> <span class="temperature"> <em>{options.weather.low_temperature}</em>&#176; &#47; <em>{options.weather.high_temperature}</em>&#176; </span> </li> <li class="y-left day"> <span class="title">明天</span> <div title="{options.weather.tomorrow_condition}" class="weather-icon weather-icon-{options.weather.tomorrow_weather_icon_id}"></div> <span class="temperature"> <em>{options.weather.tomorrow_low_temperature}</em>&#176; &#47; <em>{options.weather.tomorrow_high_temperature}</em>&#176; </span> </li> <li class="y-left day"> <span class="title">后天</span> <div title="{options.weather.dat_condition}" class="weather-icon weather-icon-{options.weather.dat_weather_icon_id}"></div> <span class="temperature"> <em>{options.weather.dat_low_temperature}</em>&#176; &#47; <em>{options.weather.dat_high_temperature}</em>&#176; </span> </li> </ul> <div class="y-box city-select {show: !options.weather_show}"> <div class="y-box"> <div class="y-left select-style"> <p class="y-box"> <span class="y-left name">{options.current_province}</span> <span class="y-right y-icon icon-more" onclick="{showProvinces}"></span> </p> <div class="y-box province-list {show: options.province_show}"> <a class="y-left item" href="javascript:;" each="{item, i in options.locations}" onclick="{changeProvince}"> {item} </a> </div> </div> <div class="y-right select-style"> <p class="y-box"> <span class="y-left name">{options.current_city}</span> <span class="y-right y-icon icon-more" onclick="{showCities}"></span> </p> <div class="y-box city-list {show: options.city_show}"> <a class="y-left item" href="javascript:;" each="{item, i in options.cities}" onclick="{changeCity}"> {item} </a> </div> </div> </div> <div class="y-box action"> <a href="javascript:;" class="y-left ok-btn" onclick="{onSubmitClick}">确定</a> <a href="javascript:;" class="y-right cancel-btn" onclick="{onCancelClick}">取消</a> </div> </div>', 'class="y-weather"',
function() {
	function t(t) {
		var i = !0;
		return t >= 0 && 50 >= t ? {
			c: i ? "#5cbf4c": "#5c8828",
			t: "优"
		}: t >= 51 && 100 >= t ? {
			c: i ? "#5cbf4c": "#5c8828",
			t: "良"
		}: t >= 101 && 150 >= t ? {
			c: i ? "#ff9f2d": "#c58120",
			t: "轻度污染"
		}: t >= 151 && 200 >= t ? {
			c: i ? "#ff9f2d": "#c58120",
			t: "中度污染"
		}: t >= 201 && 300 >= t ? {
			c: i ? "#ff5f5f": "#cf3d3d",
			t: "重度污染"
		}: t >= 301 ? {
			c: i ? "#ff5f5f": "#cf3d3d",
			t: "严重污染"
		}: {
			c: "rgba( 214, 117, 3, 0.8 )",
			t: "其他"
		}
	}
	this.options = {
		current_province: "北京",
		current_city: "北京",
		province_show: !1,
		city_show: !1,
		weather_show: !0
	},
	riot.observable(this),
	this.on("weatherChange",
	function(t) {
		this._renderWeather(t)
	}),
	this.init = function() {
		this._getCities()
	}.bind(this),
	this.showProvinces = function() {
		this.options.city_show = !1,
		this.options.province_show = !this.options.province_show
	}.bind(this),
	this.showCities = function() {
		this.options.province_show = !1,
		this.options.city_show = !this.options.city_show
	}.bind(this),
	this.changeLocation = function() {
		this.options.weather_show = !1
	}.bind(this),
	this.changeProvince = function(t) {
		this.options.city_show = !1,
		this.options.province_show = !1,
		this.options.current_province = t.item.item,
		this._renderCities(t.item.item)
	}.bind(this),
	this.changeCity = function(t) {
		this.options.city_show = !1,
		this.options.province_show = !1,
		this.options.current_city = t.item.item
	}.bind(this),
	this.onSubmitClick = function() {
		var t = this;
		this.options.weather_show = !0,
		this._getWeather({
			city: t.options.current_city
		})
	}.bind(this),
	this.onCancelClick = function() {
		this.options.weather_show = !0
	}.bind(this),
	this._getWeather = function(t) {
		var i = this;
		http({
			url: "/stream/widget/local_weather/data/",
			method: "GET",
			data: t,
			success: function(t) {
				t = t || {},
				"success" === t.message && (i._renderWeather(t.data.weather), Cookies.set("WEATHER_CITY", t.data.city, {
					expires: 100
				}), i.parent && i.parent.trigger("weatherChange", t.data.weather))
			}
		})
	}.bind(this),
	this._renderWeather = function(i) {
		this.options.weather = i,
		this.options.city = i.city_name,
		this.options.wind = i.wind_direction + i.wind_level + "级",
		this.options.air = i.quality_level + " " + i.aqi,
		this.options.level = t(i.aqi).c,
		this.update()
	}.bind(this),
	this._getCities = function() {
		var t = this;
		http({
			url: "/stream/widget/local_weather/city/",
			method: "GET",
			success: function(i) {
				i = i || {},
				"success" === i.message && (t.options.locations = i.data, t._renderCities(t.options.current_province))
			}
		})
	}.bind(this),
	this._renderCities = function(t) {
		this.options.cities = this.options.locations[t];
		for (var i in this.options.cities) {
			this.options.current_city = i;
			break
		}
		this.update()
	}.bind(this),
	this.on("mount",
	function() {
		this.init()
	})
}),
riot.tag("nav", '<div class="nav"> <ul class="y-box nav-list" ga_event="mh_channel"> <li each="{options.navItem}" class="y-left nav-item"> <a class="nav-link {active: location.pathname == url}" href="{url}" target="_blank" ga_event="mh_channel_{en}">{name}</a> </li> <li class="y-left nav-item nav-more"> <a class="nav-link" href="javascript:;"> 更多<i class="y-icon icon-more"></i> </a> <div class="nav-layer"> <ul class="nav-more-list"> <li each="{options.navMore}" class="nav-more-item"> <a href="{url}" target="_blank" ga_event="mh_channel_{en}">{name}</a> </li> </ul> </div> </li> </ul> </div>',
function() {
	this.options = {
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
			name: "视频",
			url: "/ch/video/",
			en: "video"
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
}),
riot.tag("wsearch", '<div name="searchBox" class="wsearch"> <form name="searchForm" action="/search/" method="get" target="_blank" onsubmit="{onSearchClick}"> <div name="inputbox" class="y-box input-group"> <input class="y-left input-text" name="keyword" value="{options.keyword}" autocomplete="off" ga_event="mh_search" type="text" placeholder="请输入关键字" onkeyup="{onKeyup}" onfocus="{onFocus}" onblur="{onBlur}"> <div class="y-right btn-submit"> <button type="submit" href="javascript:;"> <i class="y-icon icon-search" ga_event="mh_search"></i> </button> </div> </div> </form> <div class="layer {layer-show: options.layershow}" if="{options.suggestList.length > 0}"> <ul ga_event="mh_search"> <li each="{item, i in options.suggestList}" class="search-item" onclick="{onSearchItemClick}"> <a href="javascript:;"> <i if="{options.isHotwords}" class="search-no search-no-{i+1}">{i + 1}</i> <i if="{!options.isHotwords}" class="search-sug"></i> <span class="search-txt">{item}</span> </a> </li> </ul> </div> </div>',
function(t) {
	function i(t) { (t >= 65 && 90 >= t || t >= 48 && 57 >= t || t >= 96 && 111 >= t || t >= 186 && 222 >= t || 8 == t || 46 == t || 32 == t || 13 == t) && (clearTimeout(o), o = setTimeout(function() {
			o = null,
			e(),
			s.update()
		},
		200)),
		s.update()
	}
	function e() {
		var t = s.keyword.value;
		"" != t.trim() && http({
			url: "/search/sug/",
			data: {
				keyword: t
			},
			method: "get",
			success: function(t) {
				"success" == t.message ? (s.options.suggestList = t.data, s.options.layershow = !0) : s.options.suggestList = [],
				s.options.isHotwords = !1,
				s.update()
			}
		})
	}
	var s = this,
	a = [];
	this.options = {
		suggestList: [],
		keyword: "",
		searchTip: "大家都在搜：",
		layershow: !1,
		isHotwords: !1
	},
	this.on("mount",
	function() {
		this.init()
	}),
	this.init = function() { ! t.noHot && this._getHotWords()
	}.bind(this),
	this._getHotWords = function() {
		http({
			url: "/hot_words/",
			method: "GET",
			success: function(t) {
				t = t.hot_words || t || [],
				_.isArray(t) && 0 !== t.length && (s.options.suggestList = a = t, s.options.isHotwords = !0, s.options.keyword = s.options.searchTip + t[0], s.update())
			}
		})
	}.bind(this),
	this.onKeyup = function(t) {
		"" == this.keyword.value.trim() ? (this.options.isHotwords = !0, this.options.suggestList = a) : i(t.keyCode)
	}.bind(this),
	this.onFocus = function() {
		this.inputbox.style["border-color"] = "#ed4040",
		this.options.keyword = "",
		this.options.layershow = !0
	}.bind(this),
	this.onBlur = function() {
		this.inputbox.style["border-color"] = "#e8e8e8",
		this.options.layershow = !1
	}.bind(this),
	this.onSearchClick = function() {
		var t, i = this.keyword.value;
		return i ? (t = i.slice(0, 6), t !== this.options.searchTip || (this.options.keyword = i.slice(6), this.options.keyword) ? !0 : (this.keyword.focus(), !1)) : (this.keyword.focus(), !1)
	}.bind(this),
	this.onSearchItemClick = function(t) {
		this.options.keyword = t.item.item,
		this.update(),
		this.searchForm.submit()
	}.bind(this);
	var o = null
}),
riot.tag("wtopbar", '<div class="y-box wtopbar"> <ul class="y-left" if="{opts.home}"> <li class="tb-item"> <a class="tb-link" href="http://app.toutiao.com/news_article/" target="_blank" ga_event="mh_nav_others">下载APP</a> </li> <li class="tb-item weather" if="{opts.home}"> <a class="tb-link" href="javascript:;"> <span>&nbsp;{ options.city }</span> <span class="city_state">{ options.state }</span> <span class="city_temperature"> <em>{options.low}</em>&#176; &nbsp;&#47;&nbsp; <em>{options.top}</em>&#176; </span> <i class="y-icon icon-more"></i> </a> <div class="weather-box"> <div riot-tag="weather"></div> </div> </li> </ul> <div class="y-left y-nav-topbar" riot-tag="nav" if="{!opts.home}"></div> <ul class="y-right"> <li class="tb-item userbox"> <div riot-tag="wuserbox" userinfo="{opts.userInfo}" abtype="{opts.abType}" pageid="{opts.pageId}"></div> </li> <li class="tb-item"> <a onclick="{feedbackClick}" class="tb-link" href="javascript:void(0)">反馈</a> </li> <li class="tb-item"> <a class="tb-link" href="https://mp.toutiao.com/profile_introduction/infringement/complain" ga_event="mh_nav_complain" target="_blank">投诉侵权</a> </li> <li class="tb-item more"> <a class="tb-link" href="/about/">头条产品</a> <div class="layer"> <ul> <li> <a href="https://www.wukong.com" class="layer-item" ga_event="mh_nav_others" target="_blank">问答</a> </li> <li> <a href="https://mp.toutiao.com/" class="layer-item" target="_blank" ga_event="mh_nav_others">头条号</a> </li> <li> <a href="https://tuchong.com/" class="layer-item" target="_blank" ga_event="mh_nav_others">图虫</a> </li> <li> <a href="https://stock.tuchong.com/?source=ttweb" target="_blank" ga_event="mh_nav_others" class="layer-item">正版图库</a> </li> <li> <a href="https://ad.toutiao.com/promotion/?source2=pchometop" class="layer-item" target="_blank" ga_event="mh_nav_ad">广告投放</a> </li> </ul> </div> </li> </ul> <div id="J_userFeedback"></div> </div>',
function(t) {
	this.options = {
		city: "",
		state: "",
		top: 0,
		low: 0,
		userInfo: t.userInfo
	};
	var i = this.tags.weather;
	this.tags.userFeedback,
	this.init = function() {
		if (this.opts.home) {
			var t = Cookies.get("WEATHER_CITY") || "";
			this._getWeather({
				city: t
			})
		}
	}.bind(this),
	this._getWeather = function(t) {
		var e = this;
		http({
			url: "/stream/widget/local_weather/data/",
			method: "GET",
			data: t,
			success: function(t) {
				t = t || {},
				"success" === t.message && (e._renderWeather(t.data.weather), i && i.trigger("weatherChange", t.data.weather))
			}
		})
	}.bind(this),
	this._renderWeather = function(t) {
		this.options.weather = t,
		this.options.city = t.city_name,
		this.options.state = t.current_condition,
		this.options.top = t.high_temperature,
		this.options.low = t.low_temperature,
		this.update()
	}.bind(this),
	this.init(),
	this.on("weatherChange",
	function(t) {
		this._renderWeather(t)
	}),
	this.on("mount",
	function() {
		var t = utils.getHashValue("#userFeedback");
		1 == t && riot.mount(".wtopbar #J_userFeedback", "userFeedback", {})
	}),
	this.feedbackClick = function() {
		riot.mount(".wtopbar #J_userFeedback", "userFeedback", {})
	}.bind(this)
}),
riot.tag("wuserbox", '<div class="y-box wuserbox"> <a if="{options.id && options.isPgc}" class="y-left new-article" href="http://mp.toutiao.com/new_article/" ga_event="mh_write">发文</a> <div if="{options.id}" class="y-right username"> <a ga_event="mh_nav_user" class="user-head" href="//www.toutiao.com/c/user/{options.id}/" target="_blank" rel="nofollow"> <div class="user-image"> <img onload="this.style.opacity=1;" riot-src="{options.avatarUrl}"> </div> <span>{options.name}</span> </a> <div class="user-layer"> <ul ga_event="mh_nav_user"> <li><a href="//www.toutiao.com/c/user/{options.id}/?tab=favourite" class="layer-item" target="_blank" rel="nofollow">我的收藏</a></li> <li><a href="//www.toutiao.com/c/user/relation/{options.id}/?tab=following" class="layer-item" target="_blank" rel="nofollow">我的关注</a></li> <li><a href="//www.toutiao.com/c/user/relation/{options.id}/?tab=followed" class="layer-item" target="_blank" rel="nofollow">我的粉丝</a></li> <li> <a href="https://sso.toutiao.com/logout/" class="layer-item" rel="nofollow">退出</a> </li> </ul> </div> </div> <div if="{!options.id}" class="nav-login"> <a ga_event="nav_login" href="javascript:;" onclick="{onLoginClick}"> <span>登录</span> </a> <div if="{options.alertMsg}" class="y-box login-layer"> <div class="y-left login-alert-icon"></div> <div class="y-right"> <p>手机号登录上线啦！！！</p> <p>登录同步头条App阅读兴趣，推荐更精准！</p> </div> <span onclick="{msgCloseClick}"> <i class="y-icon icon-dislikenewfeed"></i> </span> </div> </div> </div>',
function(t) {
	var i = this;
	t.pageid,
	t.abtype,
	this.options = {
		id: t.userinfo.id,
		name: t.userinfo.name,
		avatarUrl: t.userinfo.avatarUrl,
		isPgc: t.userinfo.isPgc || !1,
		alertMsg: !1
	},
	this.onLoginClick = function() {
		window.location.href = "https://sso.toutiao.com/login/"
	}.bind(this),
	window.on("userChange",
	function(t) {
		t && (i.options.id = t.user_id, i.options.name = t.name, i.options.avatarUrl = t.avatar_url, i._isPgc(), i.update())
	}),
	this._isPgc = function() {
		var t = this;
		http({
			url: "/user/pgc_info/",
			method: "get",
			cache: !1,
			success: function(i) {
				i = i || {},
				"success" === i.message && i.data.is_pgc_author && (t.options.isPgc = !0, t.update())
			}
		})
	}.bind(this)
}),
riot.tag("login", '<div class="login-dialog {hide: options.hide}"> <a class="btn" href="javascript:;" onclick="{hide}"> <i class="icon icon-close"></i> </a> <div class="login-dialog-header"> <h3>邮箱登录</h3> </div> <div class="login-dialog-inner" data-node="inner"> <div class="login-pannel bottom-line"> <form action="/auth/login/" method="POST" onsubmit="{onFormSubmit}"> <ul> <li> <div class="input-group"> <div class="input"> <label>邮箱</label> <input class="name" name="name_or_email" type="text" placeholder="请使用您的注册邮箱" autocomplete="off" spellcheck="false"> </div> </div> </li> <li> <div class="input-group"> <div class="input"> <label>密码</label> <input class="password" name="password" type="password" data-node="password" placeholder="密码" autocomplete="off" spellcheck="false"> </div> </div> </li> <li class="captcha-box {show: options.captchaImg}"> <div class="input-group"> <div class="input"> <input class="password" name="captcha" type="text" data-node="captcha" placeholder="验证码" autocomplete="off" spellcheck="false"> <img name="captchaImg" riot-src="{options.captchaImg}"> </div> </div> </li> <li> <div class="input-group"> <input type="checkbox" name="remember_me" checked="" style="vertical-align:top"> <label for="remember_me" class="label">记住账号</label> </div> </li> <li> <div class="input-group" style="text-align: center;"> <input type="submit" class="submit-btn" value="登录"> <p class="{error: options.errorMsg}">{options.errorMsg}</p> </div> </li> </ul> </form> </div> <div class="login-dialog-header"> <h3>合作网站账号登录</h3> </div> <div class=""> <ul class="y-box sns_login_list" onclick="{onSnsLoginClick}"> <li class="sinaweibo"> <a href="javascript:;" data-pid="sina_weibo" ga_event="login_sina_weibo"> <i class="icon"></i> 新浪微博 </a> </li> <li class="qqweibo"> <a href="javascript:;" data-pid="qq_weibo" ga_event="login_tencnet_weibo"> <i class="icon"></i> 腾讯微博 </a> </li> <li class="qzone"> <a href="javascript:;" data-pid="qzone_sns" ga_event="login_qqzone"> <i class="icon"></i> QQ空间 </a> </li> <li class="renren"> <a href="javascript:;" data-pid="renren_sns" ga_event="login_renren"> <i class="icon"></i> 人人网 </a> </li> <li class="weixin"> <a href="javascript:;" style="margin-right:0;" data-pid="weixin" ga_event="login_wechat"> <i class="icon"></i> 微信 </a> </li> </ul> </div> </div> </div> <div class="mask {hide: options.hide}"></div>',
function(t) {
	var i = this;
	riot.observable(this),
	this.options = {
		hide: !0,
		errorMsg: "",
		captchaImg: ""
	},
	this.curSpec = {
		successCb: t.successCb ||
		function() {},
		errorCb: t.errorCb ||
		function() {}
	},
	this.hide = function() {
		this.options.hide = !0,
		this.update()
	}.bind(this),
	this.onFormSubmit = function(t) {
		t.preventDefault();
		var i = this,
		e = http.serialize(t.currentTarget);
		user.loginByLoc({
			data: e,
			successCb: function(t) {
				"function" == typeof i.curSpec.successCb && i.curSpec.successCb(t),
				i.hide()
			},
			errorCb: function(t) {
				i.password.value = "",
				t = t || {};
				var e = t.data || {};
				i.options.errorMsg = e.description || "登录失败",
				e.captcha ? (i.captcha.value = "", i.options.captchaImg = "data:image/gif;base64," + e.captcha) : (i.captcha.value = "", i.options.captchaImg = ""),
				"function" == typeof i.curSpec.errorCb && i.curSpec.errorCb(t),
				i.update()
			}
		})
	}.bind(this),
	this.onSnsLoginClick = function(t) {
		var i = utils.getTarget(t),
		e = utils.getAttribute(i, "data-pid") || utils.getAttribute(i.parentNode, "data-pid");
		this.hide(),
		user.loginByOther(e, this.curSpec)
	}.bind(this),
	window.on("login",
	function(t) {
		i.options.hide = !1,
		t = t || {},
		i.curSpec = {
			successCb: t.successCb ||
			function() {},
			errorCb: t.errorCb ||
			function() {}
		},
		i.update()
	})
}),
riot.tag("userFeedback", '<div class="feedback_dialog"> <div class="dialog-header"> <h3>意见反馈</h3> </div> <div class="dialog-inner"> <div class="feedback_panel"> <form onsubmit="{onFormSubmit}"> <p class="label">联系方式（必填）</p> <div class="input-group"> <input class="email" placeholder="您的邮箱/QQ号" type="text" name="feedback-email"> </div> <p class="label">您的意见（必填）</p> <div class="input-group"> <textarea style="height:100px;" name="feedback-content" class="content" maxlength="140" placeholder="请填写您的意见，不超过140字"></textarea> </div> <div class="input-group"> <input type="submit" class="{submit-btn:true,disabled:disabled}" value="提交" __disabled="{disabled}"> <span class="error">{msg}</span> <a class="close" href="javascript:void(0);" onclick="{hide}">[关闭]</a> </div> </form> </div> </div> </div>', 'class="userFeedback"',
function() {
	this.message = {
		success: "已提交,感谢您的意见",
		fail: "提交错误,请稍后重试",
		mail_error: "请输入正确的联系方式",
		content_error: "请输入您的意见",
		content_length_error: "意见长度超出限制"
	};
	var t = this;
	this.msg = "",
	this.disabled = !1,
	this.showMessage = function(t) {
		this.msg = this.message[t],
		this.update()
	}.bind(this),
	this.hide = function() {
		this.unmount(!0)
	}.bind(this),
	this.onFormSubmit = function() {
		var i = this["feedback-email"],
		e = this["feedback-content"];
		return i.value.length < 5 ? (i.focus(), this.showMessage("mail_error")) : "" === e.value ? (e.focus(), this.showMessage("content_error")) : (this.msg = "", this.disabled = !0, this.update(), void http({
			headers: {
				"X-CSRFToken": Cookies.get("csrftoken")
			},
			url: "/post_message/",
			method: "post",
			data: {
				appkey: "web",
				uuid: i.value,
				content: "[" + window.location.host + "]" + e.value
			},
			success: function(s) {
				return "success" !== s.message ? t.showMessage("fail") : (i.value = "", e.value = "", t.disabled = !1, t.showMessage("success"), void setTimeout(function() {
					t.hide()
				},
				1e3))
			},
			error: function() {
				t.disabled = !1,
				t.update(),
				t.showMessage("fail")
			}
		}))
	}.bind(this)
}),
riot.tag("toast", '<div name="toast" class="toast-inner" style="opacity: 10; filter:alpha(opacity=1000);"> <span>{opts.msg}</span> </div>', 'class="toast"',
function() {
	var t = this;
	this.on("mount",
	function() {
		var i = this.toast,
		e = i.clientWidth,
		s = i.clientHeight,
		a = new TAnimation;
		i.style.cssText += "margin-top:-" + s / 2 + "px;margin-left:-" + e / 2 + "px",
		a.animate({
			el: i,
			prop: "opacity",
			to: 0,
			transitionDuration: 2e3
		},
		function() {
			t.unmount(!0)
		})
	})
}),
riot.tag("raw", "",
function(t) {
	this.root.innerHTML = t.content
}),
riot.tag("searchBar", '<form name="searchForm" action="{options.searchUrl}" method="get" onsubmit="{onSearchClick}"> <div class="y-box"> <div class="y-left search-content"> <input type="text" name="keyword" value="{options.keyword}" autocomplete="off" placeholder="搜你想搜的" onkeyup="{onKeyup}" onfocus="{onFocus}" onblur="{onBlur}"> <input if="{opts.gr}" type="hidden" name="min_time" id="minTime" value="{options.mintime}"> <input if="{opts.gr}" type="hidden" name="max_time" id="maxTime" value="{options.maxtime}"> </div> <div class="y-right"> <button type="submit" class="search-btn">搜索</button> </div> </div> </form> <div if="{opts.gr}" class="date-wrap"> <span>时间段：</span> <input type="date" name="min_time_picker" onchange="{onMinChange}"> <span>&nbsp;&nbsp;至&nbsp;&nbsp;</span> <input type="date" name="max_time_picker" onchange="{onMaxChange}"> </div> <div class="search-layer {search-layer-show: options.layershow}" if="{options.suggestList.length>0}"> <ul class="suggest-list" ga_event="sug_list_click"> <li class="suggest-item {suggest-item-active: options.sugActiveIndex == i}" each="{item, i in options.suggestList}"> <a if="{!options.gr}" href="{options.searchUrl}?keyword={strEncode(item)}">{item}</a> <a if="{options.gr}" href="{options.searchUrl}?keyword={strEncode(item)}&min_time={options.mintime}&max_time={options.maxtime}">{item}</a> </li> </ul> <div if="{options.isHistory}" class="clear-history" onclick="{clearHistory}">清空搜索历史</div> </div>', 'class="searchBar"',
function(t) {
	function i() {
		for (var t = location.search.slice(1), i = {},
		e = t.split("&"), s = 0, a = e.length; a > s; s++) {
			var o, n = e[s];
			"" !== n.replace(/^\s+|\s+$/g, "") && (o = n.split("="), i[o[0]] = o[1])
		}
		return i
	}
	function e(t) {
		var i = new Date(t),
		e = i.getTime();
		return e / 1e3
	}
	function s(t) {
		if (t = parseInt(t, 10), isNaN(t)) return ! 1;
		t = 1e3 * t;
		var i = new Date(t),
		e = i.getFullYear(),
		s = i.getMonth() + 1,
		a = i.getDate();
		10 > s && (s = "0" + s),
		10 > a && (a = "0" + a);
		var o = e + "-" + s + "-" + a;
		return o
	}
	function a() {
		var t = r.keyword.value;
		"" != t.trim() && http({
			url: "/search/sug/",
			data: {
				keyword: t
			},
			method: "get",
			success: function(t) {
				"success" == t.message ? (r.options.suggestList = t.data, r.options.layershow = !0) : r.options.suggestList = [],
				r.options.isHistory = !1,
				r.update()
			}
		})
	}
	function o() {
		if (tStorage.exist()) {
			var t = tStorage.decode(tStorage.get(l));
			r.options.suggestList = t,
			r.options.isHistory = !0,
			r.options.layershow = !0,
			r.update()
		}
	}
	function n(t) {
		if (tStorage.exist()) {
			var i = tStorage.decode(tStorage.get(l)) || [];
			i.unshift(t);
			for (var e = 1,
			s = i.length; s > e; e++) i[0] == i[e] && i.splice(e, 1);
			i = i.slice(0, 5),
			tStorage.set(l, tStorage.encode(i))
		}
	}
	function c(t) {
		if ((t >= 65 && 90 >= t || t >= 48 && 57 >= t || t >= 96 && 111 >= t || t >= 186 && 222 >= t || 8 == t || 46 == t || 32 == t || 13 == t) && (clearTimeout(p), p = setTimeout(function() {
			p = null,
			a(),
			r.options.sugActiveIndex = -1,
			r.update()
		},
		200)), 38 == t || 40 == t) {
			var i = r.options.sugActiveIndex,
			e = r.options.suggestList.length;
			if (0 == e) return;
			38 == t && --i < 0 && (i = e - 1),
			40 == t && ++i == e && (i = 0),
			r.options.sugActiveIndex = i,
			r.keyword.value = r.options.suggestList[i]
		}
		27 == t && (r.options.layershow = !1),
		r.update()
	}
	var r = this,
	l = "toutiao_search_history";
	this.options = {
		suggestList: [],
		sugActiveIndex: -1,
		isHistory: !1,
		keyword: t.keyword || "",
		layershow: !1,
		searchUrl: t.gr ? "/search/gr/": "/search/",
		maxtime: "",
		mintime: "",
		gr: t.gr
	},
	this.strEncode = function(t) {
		return encodeURIComponent(t)
	}.bind(this),
	this.onKeyup = function(t) {
		"" == this.keyword.value.trim() ? o() : c(t.keyCode)
	}.bind(this),
	this.onFocus = function() {
		"" == this.keyword.value.trim() && o()
	}.bind(this),
	this.onBlur = function() {
		this.options.layershow = !1
	}.bind(this);
	var h = i(),
	d = h.min_time || "",
	u = h.max_time || "";
	d && (this.options.mintime = d, this.min_time_picker.value = s(d), this.update()),
	u && (this.options.maxtime = u, this.max_time_picker.value = s(u), this.update()),
	this.onMaxChange = function(t) {
		var i = t.target.value;
		if (i) {
			var s = e(i);
			this.options.maxtime = s
		} else this.options.maxtime = "";
		this.update()
	}.bind(this),
	this.onMinChange = function(t) {
		var i = t.target.value;
		if (i) {
			var s = e(i);
			this.options.mintime = s
		} else this.options.mintime = "";
		this.update()
	}.bind(this),
	this.onSearchClick = function() {
		var t = this.keyword.value.trim();
		return "" !== this.options.mintime && "" !== this.options.maxtime && this.options.mintime > this.options.maxtime ? (alert("起始日期要小于等于结束日期"), !1) : "" == t ? (this.keyword.focus(), !1) : (n(t), !0)
	}.bind(this),
	this.clearHistory = function() {
		r.options.suggestList = [],
		tStorage.exist() && tStorage.clear(l)
	}.bind(this);
	var p = null
}),
riot.tag("tabBar", '<ul class="y-box tab-list" ga_event="result_tab_click"> <li class="y-left tab-item {active: item.tab_id==options.active}" each="{item, i in opts.tabInfo.tab_list}" onclick="{onTabClick}"> {item.tab_name} </li> </ul>', 'class="tabBar"',
function(t) {
	var i = t.tabInfo.cur_tab;
	this.options = {
		active: i
	},
	this.onTabClick = function(t) {
		var e = t.item.item;
		i != e.tab_id && (this.options.active = i = e.tab_id, window.trigger("curTabChange", {
			cur_tab: i,
			from: e.tab_code,
			pd: e.pd
		}))
	}.bind(this)
}),
riot.tag("loading", '<div if="{options.cssAnimation}" class="loading ball-pulse"> <div></div> <div></div> <div></div> <span>{options.msg}&sdot;&sdot;&sdot;</span> </div> <div if="{!options.cssAnimation}" class="loading loading-normal"> <img src="//s3b.pstatp.com/toutiao/resource/toutiao_web/static/style/image/loading_50c5e3e.gif" alt=""> <span>{options.msg}&sdot;&sdot;&sdot;</span> </div>',
function(t) {
	var i = utils.cssAnimationSupport();
	this.options = {
		cssAnimation: i,
		msg: t.msg || "推荐中"
	}
}),
riot.tag("feedBox", '<div name="feedBox"> <div class="sections"> <div id="J_section_{i}" each="{item, i in options.list}"></div> </div> <div if="{options.isLoadmore}" riot-tag="loading" msg="加载中"></div> <div if="{options.noData}" class="no-feed"> <div class="empty-img"> <img src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/search/empty_result_9f5c0cd.png" alt=""> </div> <p>在这个星球中找不到</p> </div> </div>', 'class="feedBox {child-style: options.curTab != 1}"',
function(t) {
	function i() {
		for (var t = location.search.slice(1), i = {},
		e = t.split("&"), s = 0, a = e.length; a > s; s++) {
			var o, n = e[s];
			"" !== n.replace(/^\s+|\s+$/g, "") && (o = n.split("="), i[o[0]] = o[1])
		}
		return i
	}
	function e(i) {
		if (!u) {
			u = !0;
			var e = {
				offset: l,
				format: "json",
				keyword: d,
				autoload: !0,
				count: 20,
				cur_tab: n.options.curTab,
				from: n.options.from,
				pd: n.options.pd
			};
			t.gr && (v && (e.min_time = v), f && (e.max_time = f)),
			http({
				url: c,
				data: e,
				type: r,
				method: "get",
				success: function(t) {
					if ("success" == t.message) {
						var e = a(t.data);
						n.options.list = n.options.list.concat(e),
						n.update(),
						s(p),
						p += e.length,
						l = t.offset,
						h = t.has_more
					}
					0 == n.options.list.length && (n.options.noData = !0),
					u = !1,
					i && i()
				},
				error: function() {
					u = !1,
					i && i()
				}
			})
		}
	}
	function s(t) {
		for (var i = n.options.list,
		e = i.length,
		s = (t > 0 ? -1 : 0) + t; e > s; s++) {
			var a = i[s],
			c = "J_section_" + s,
			r = "";
			void 0 == a.cell_type && (r = "articleCard"),
			13 == a.cell_type && (r = "pgcCard"),
			38 == a.cell_type && (r = "userCard"),
			33 == a.cell_type && (r = "listCard"),
			50 == a.cell_type && (r = "ugcCard"),
			66 == a.cell_type && (r = "ugcCard"),
			a.behot_time && (a.timeago = utils.timeAgo(a.behot_time)),
			o(s),
			r && riot.mount("#" + c, r, {
				cardid: c,
				item: a
			})
		}
	}
	function a(t) {
		for (var i, e = [], s = 0, a = t.length; a > s; s++) i = t[s],
		(void 0 == i.cell_type || 13 == i.cell_type || 33 == i.cell_type || 38 == i.cell_type || 50 == i.cell_type || 66 == i.cell_type) && e.push(i);
		return e
	}
	function o(t) {
		var i = n.options.list[t],
		e = n.options.list[t + 1];
		void 0 == i.cell_type && e && void 0 != e.cell_type && (i.no_bottom = !0)
	}
	var n = this,
	c = "/search_content/",
	r = "json",
	l = 0,
	h = 1,
	d = t.keyword,
	u = !1,
	p = 0,
	m = t.custom || !1;
	m && (c = "//www.toutiao.com/search_content/", r = "jsonp");
	var g = i(),
	v = g.min_time || "",
	f = g.max_time || "";
	this.options = {
		list: [],
		curTab: t.curTab,
		from: "search_tab",
		pd: "synthesis",
		isLoadmore: !1,
		noData: !1
	},
	this.on("mount",
	function() {
		this.loadmore(),
		utils.on(window, "scroll", _.throttle(function() {
			var t = utils.scrollTop(),
			i = n.feedBox.clientHeight,
			e = window.screen.height;
			600 > i - t - e && h && n.loadmore()
		},
		350))
	}),
	this.loadmore = function() {
		this.options.isLoadmore = !0,
		this.update(),
		e(function() {
			n.options.isLoadmore = !1,
			n.update()
		})
	}.bind(this),
	window.on("curTabChange",
	function(t) {
		n.options.curTab = t.cur_tab,
		n.options.from = t.from,
		n.options.pd = t.pd,
		p = 0,
		l = 0,
		h = 1,
		n.options.list = [],
		n.options.noData = !1,
		n.update(),
		n.loadmore()
	})
}),
riot.tag("pgcCard", '<a class="y-box link" href="{item.source_url}" target="_blank" ga_event="pgc_item_click"> <div class="y-left avatar"> <img riot-src="{item.avatar_url}" alt=""> </div> <div class="media-info"> <div class="media-info-inner"> <h3 class="name"> <span class="J_pgc_name pgc-icon"></span> </h3> <p class="desc"></p> </div> </div> <div class="subscribe {subscribe-active: !options.isLike}" onclick="{onSubClick}" ga_event="follow_pgc"> {options.subscribeTxt} </div> </a>', 'class="pgcCard aladdin"',
function(t) {
	function i() {
		var t = e.options.isLike ? "unfollow": "follow";
		n || (n = !0, http({
			url: "/c/user/" + t + "/",
			method: "POST",
			headers: {
				"X-CSRFToken": Cookies.get("csrftoken")
			},
			data: {
				user_id: s
			},
			success: function(t) {
				"success" === t.message && (e.options.isLike = !e.options.isLike, e.options.subscribeTxt = e.options.isLike ? "已关注": "+关注", n = !1, e.update())
			}
		}))
	}
	this.item = t.item;
	var e = this,
	s = t.item.user_id,
	a = "#" + t.cardid,
	o = this.item.highlight,
	n = !1;
	this.options = {
		subscribeTxt: this.item.is_like ? "已关注": "+关注",
		isLike: this.item.is_like
	},
	this.on("mount",
	function() {
		riot.mount(a + ".pgcCard .J_pgc_name", "raw", {
			content: utils.highlightText(e.item.name, o.name)
		}),
		riot.mount(a + ".pgcCard .desc", "raw", {
			content: utils.highlightText(e.item.description, o.description)
		})
	}),
	this.onSubClick = function() {
		user.checkLogin({
			successCb: function() {
				i()
			},
			errorCb: function() {}
		})
	}.bind(this)
}),
riot.tag("ugcCard", '<div class="item"> <div class="item-inner y-box ugc-item"> <div class="normal {rbox: item.image_count} {no-image: !item.image_count}"> <div class="rbox-inner"> <div class="ugc-box"> <a class="ugc-user" href="{\'//www.toutiao.com/c/user/\' + (item.user_id || 0) + \'/\'}" target="_blank"> <img if="{item.avatar_url}" riot-src="{item.avatar_url}" alt="作者头像" class="avatar"> <div class="avatar" if="{!item.avatar_url}"></div> <span class="name">{item.media_name || item.name || \'已注销\'}</span> <span class="y-icon dv" if="{item.user_auth_info.auth_type}"></span> </a> <div class="ugc-content"> <a href="{item.open_url}" target="_blank" ga_event="ugc_read_count"> <div class="J_content">{{item.content}}</div> </a> </div>  </div> <div class="y-box footer"> <div class="y-left">  <a class="lbtn" ga_event="ugc_digg_count" href="{item.open_url}" target="_blank">{item.digg_count}赞</a> <a class="lbtn" ga_event="ugc_comment_count" href="{item.open_url}" target="_blank">&nbsp;&sdot;&nbsp;{item.comment_count}评论</a> <span if="{item.timeago}" class="lbtn">&nbsp;&sdot;&nbsp;{item.timeago}</span> </div> </div> </div> </div> <div if="{item.image_count}" class="lbox" ga_event="ugc_img_click"> <a class="img-wrap" href="{item.open_url}" target="_blank"> <img riot-src="{item.thumb_image_url}" alt=""> <i class="ftype" if="{item.image_count > 1}"> <span>{item.image_count}图</span> </i> </a> </div> </div> </div>', 'class="ugcCard"',
function(t) {
	var i = t.item,
	e = i.comment_base;
	if (e) {
		i.highlight = i.highlight.comment_base,
		i.content = e.content;
		var s = e.action;
		e.share,
		s ? (i.digg_count = s.digg_count || 0, i.comment_count = s.comment_count || 0) : (i.digg_count = 0, i.comment_count = 0),
		i.timeago = utils.timeAgo(e.create_time),
		Object.assign(i, e.user.info)
	} else i.timeago = utils.timeAgo(i.create_time);
	i.thumb_image_url && (i.thumb_image_url = i.thumb_image_url.replace(/\d+x\d+/, "150x100"));
	try {
		var a = i.user_auth_info;
		i.user_auth_info = "string" == typeof a && a ? JSON.parse(i.user_auth_info) : {}
	} catch(o) {
		console.log(i),
		i.user_auth_info = {}
	}
	i.open_url = i.pc_schema,
	this.item = i;
	var n = this,
	c = "#" + t.cardid,
	r = this.item.highlight || {};
	this.on("mount",
	function() {
		riot.mount(c + " .item .J_content", "raw", {
			content: "&nbsp;" + utils.highlightText(n.item.content, r.content) + "&nbsp;"
		})
	})
}),
riot.tag("userCard", '<a class="y-box link" href="{item.source_url}" target="_blank" ga_event="pgc_item_click"> <div class="y-left avatar"> <img riot-src="{item.avatar_url}" alt=""> </div> <div class="media-info"> <div class="media-info-inner"> <h3 class="name"> <span class="J_pgc_name"></span> <span if="{{item.user_auth_info.auth_type==1}}" class="vstar"><i class="y-icon icon-vstar"></i></span> <span if="{item.is_pgc && item.no_display_pgc_icon!=\'1\'}" class="pgc-icon"></span> </h3> <p class="desc"></p> </div> </div> <div class="subscribe {subscribe-active: !options.isLike}" onclick="{onSubClick}" ga_event="follow_pgc"> {options.subscribeTxt} </div> </a>', 'class="userCard aladdin"',
function(t) {
	function i() {
		var t = e.options.isLike ? "unfollow": "follow";
		n || (n = !0, http({
			url: "/c/user/" + t + "/",
			method: "POST",
			headers: {
				"X-CSRFToken": Cookies.get("csrftoken")
			},
			data: {
				user_id: s
			},
			success: function(t) {
				"success" === t.message && (e.options.isLike = !e.options.isLike, e.options.subscribeTxt = e.options.isLike ? "已关注": "+关注", n = !1, e.update())
			}
		}))
	}
	this.item = t.item;
	var e = this,
	s = t.item.id,
	a = "#" + t.cardid,
	o = this.item.highlight,
	n = !1;
	this.options = {
		subscribeTxt: this.item.is_concern ? "已关注": "+关注",
		isLike: this.item.is_concern
	},
	this.on("mount",
	function() {
		riot.mount(a + ".userCard .J_pgc_name", "raw", {
			content: utils.highlightText(e.item.name, o.name)
		}),
		riot.mount(a + ".userCard .desc", "raw", {
			content: utils.highlightText(e.item.description, o.description)
		})
	}),
	this.onSubClick = function() {
		user.checkLogin({
			successCb: function() {
				i()
			},
			errorCb: function() {}
		})
	}.bind(this)
}),
riot.tag("articleCard", '<div class="item" ga_event="{item.article_genre}_item_click" > <div class="item-inner {item-inner-no-bottom: item.no_bottom} y-box"> <div class="normal {rbox: item.single_mode && item.has_image} {no-image: !item.single_mode&&!item.has_gallery}"> <div class="rbox-inner"> <div class="title-box" ga_event="{item.article_genre}_title_click"> <a class="link title" href="{item.source_url}" target="_blank"> <span class="J_title"></span> </a> </div> <div if="{item.has_gallery}" class="img-list y-box" ga_event="{item.article_genre}_img_click"> <a each="{imgItem, j in item.image_list}" class="img-wrap" href="{item.source_url}" target="_blank"> <img riot-src="{imgItem.url}" alt=""> </a> <a if="{item.image_list.length < 4}" class="img-wrap" href="{item.source_url}" target="_blank"> <span class="add-info">查看详情&nbsp;<i class="y-icon icon-next-page"></i></span> </a> <span if="{!item.ad_id}" class="img-num">{item.gallary_image_count}图</span> </div> <div class="y-box footer"> <div class="y-left"> <div class="y-left" if="{!item.media_url}"> <a class="lbtn media-avatar avatar-bg-{sourceFlag(item.source)}" href="/search/?keyword={item.source}" ga_event="{item.article_genre}_avatar_click" target="_blank">{sourceHandle(item.source)}</a> <a class="lbtn source J_source" href="/search/?keyword={item.source}" ga_event="{item.article_genre}_name_click" target="_blank"></a> </div> <div class="y-left" if="{item.media_url}"> <a class="lbtn media-avatar" ga_event="{item.article_genre}_avatar_click" href="{item.media_url}" target="_blank"> <img riot-src="{item.media_avatar_url}" alt=""> </a> <a class="lbtn source J_source" ga_event="{item.article_genre}_name_click" href="{item.media_url}" target="_blank"></a> </div> <a class="lbtn comment" ga_event="{item.article_genre}_comment_click" href="{item.source_url}/#comment_area" target="_blank">&sdot;&nbsp;{item.comments_count}评论&nbsp;</a> <span if="{item.timeago}" class="lbtn">&sdot;&nbsp;{item.timeago}</span> <span if="{item.hot}" class="lbtn tag-hot">热</span> </div> </div> </div> </div> <div if="{item.single_mode && item.has_image}" class="lbox" ga_event="{item.article_genre}_img_click"> <a class="img-wrap" href="{item.source_url}" target="_blank"> <img riot-src="{item.image_url}" alt=""> <i if="{item.has_video && item.video_duration_str}" class="ftype video"> <span>{item.video_duration_str}</span> </i> </a> </div> </div> </div>', 'class="articleCard"',
function(t) {
	this.item = t.item;
	var i = this,
	e = "#" + t.cardid,
	s = this.item.highlight || {},
	a = {};
	this.on("mount",
	function() {
		riot.mount(e + " .item .J_title", "raw", {
			content: utils.highlightText(i.item.title, s.title)
		}),
		riot.mount(e + " .item .J_source", "raw", {
			content: "&nbsp;" + utils.highlightText(i.item.source, s.source) + "&nbsp;"
		})
	}),
	this.sourceFlag = function(t) {
		return (t = t.replace(/\s*/gi, "")) ? (void 0 === a[t] && (a[t] = Math.floor(6 * Math.random())), a[t]) : 0
	}.bind(this),
	this.sourceHandle = function(t) {
		return t = t.replace(/\s*/gi, ""),
		t ? t.slice(0, 1) : ""
	}.bind(this)
}),
riot.tag("listCard", '<div class="header"> <h2 class="J-card-header"></h2> </div> <div class="card-list"> <div each="{item, i in opts.item.data}" riot-tag="articleCard" item="{item}" id="{parent.opts.cardid}_{i}" cardid="{parent.opts.cardid}_{i}"></div> </div>', 'class="listCard aladdin"',
function(t) {
	var i = "#" + t.cardid,
	e = t.item.highlight;
	this.on("mount",
	function() {
		var s = utils.highlightText(t.item.name, e.name);
		33 == t.item.cell_type && (s += "_相关视频"),
		riot.mount(i + ".listCard .J-card-header", "raw", {
			content: s
		})
	})
}),
riot.tag("searchRelated", '<h3 class="module-header">相关搜索</h3> <ul class="y-box" ga_event="related_tag_click"> <li class="y-left related-item" each="{item in options.list}"> <a href="/search/?keyword={strEncode(item)}">{item}</a> </li> </ul>', 'if="{options.list.length != 0}" class="module searchRelated"',
function(t) {
	var i = this,
	e = t.keyword;
	this.options = {
		list: []
	},
	this.on("mount",
	function() {
		http({
			url: "/search/related/",
			data: {
				keyword: e
			},
			method: "get",
			success: function(t) {
				"success" == t.message && (i.options.list = t.data.slice(0, 10).sort(function(t, i) {
					return t.length < i.length
				}), i.update())
			}
		})
	}),
	this.strEncode = function(t) {
		return encodeURIComponent(t)
	}.bind(this)
}),
riot.tag("searchHot", '<h3 class="module-header">热门搜索排行</h3> <ul ga_event="hot_tag_click"> <li each="{item, i in options.hotwords}" class="search-item"> <a href="/search/?keyword={strEncode(item)}"> <i class="search-no search-no-{i+1}">{i + 1}</i> <span class="search-txt">{item}</span> </a> </li> </ul>', 'class="module searchHot" if="{options.hotwords.length!=0}"',
function(t) {
	function i() {
		http({
			url: "/hot_words/",
			method: "GET",
			success: function(t) {
				t = t.hot_words || t || [],
				_.isArray(t) && 0 !== t.length && (e.options.hotwords = t, e.update())
			}
		})
	}
	var e = this;
	t.keyword,
	this.options = {
		hotwords: []
	},
	this.strEncode = function(t) {
		return encodeURIComponent(t)
	}.bind(this),
	this.on("mount",
	function() {
		i()
	})
});