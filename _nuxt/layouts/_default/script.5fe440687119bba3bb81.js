webpackJsonp([42],{"0UMQ":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-dropdown",[o("button",{staticClass:"button",attrs:{slot:"trigger"},slot:"trigger"},[o("span",[t._v(t._s(t.$t("lang."+this.$i18n.i18next.language+".original")))]),o("span",{staticClass:"icon"},[o("i",{staticClass:"fas fa-chevron-down"})])]),t._l(t.$store.supportedLocales,function(e){return o("b-dropdown-item",{key:e,class:[e===t.currentLang?"is-active":""],attrs:{"data-lang":"lang"},on:{click:function(o){t.currentLang=e}}},[t._v(t._s(t.$t("language_selector."+e)))])})],2)};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},"6fwQ":function(t,e,o){"use strict";var i=o("FQzT");e.a={name:"LanguageSelector",data:function(){return{currentLang:this.$cookies.get("locale")}},watch:{currentLang:function(t){this.$cookies.set("locale",t,{path:"/",expires:i.a.getDefaultCookieExpireTime()}),this.$store.commit("SET_LANG",t),window.location.reload()}}}},"7YgM":function(t,e){t.exports={name:"foe-tools",version:"2.8.0",description:"Set of tools for Forge Of Empire",main:"nuxt.config.js",scripts:{dev:"nuxt","prod:build":"cross-env NODE_ENV=production nuxt build",build:"nuxt build",start:"nuxt start",generate:"nuxt generate",test:'echo "Error: no test specified" && exit 1',lint:"eslint --ext .js,.vue --ignore-path .gitignore .",lintfix:"eslint --fix --ext .js,.vue --ignore-path .gitignore .","build:gh":"cross-env DEPLOY_ENV=GH_PAGES nuxt build","generate:gh":"cross-env DEPLOY_ENV=GH_PAGES nuxt generate",release:"standard-version",deploy:"push-dir --dir=dist --branch=master --cleanup","contributors:add":"all-contributors --config all-contributorsrc.json add","contributors:generate":"all-contributors --config all-contributorsrc.json generate"},repository:{type:"git",url:"git+https://github.com/FOE-Tools/FOE-Tools.github.io.git"},keywords:["foe","forge","empire","nuxt","vue","yarn","tool","forge-of-empires","investment"],author:"Heziode <Heziode@protonmail.com>",license:"MIT",bugs:{url:"https://github.com/FOE-Tools/FOE-Tools.github.io/issues"},homepage:"https://foe-tools.github.io/",devDependencies:{"babel-eslint":"^8.2.3","cross-env":"^5.1.4",eslint:"^5.2.0","eslint-config-airbnb-base":"^13.0.0","eslint-config-prettier":"^2.9.0","eslint-friendly-formatter":"^4.0.1","eslint-import-resolver-webpack":"^0.10.1","eslint-loader":"^2.0.0","eslint-plugin-import":"^2.11.0","eslint-plugin-prettier":"^2.6.0","eslint-plugin-vue":"^4.5.0","node-sass":"^4.9.2",prettier:"^1.12.1",pug:"^2.0.3","pug-loader":"^2.4.0","push-dir":"^0.4.1","sass-loader":"^7.0.1","standard-version":"^4.4.0"},dependencies:{"@panter/vue-i18next":"^0.12.0","all-contributors-cli":"^5.3.0",buefy:"^0.6.5",bulma:"^0.7.1","chart.js":"^2.7.2","cookie-universal-nuxt":"^2.0.5",enumify:"^1.0.4",i18next:"^11.2.3","js-priority-queue":"^0.1.5",jsdom:"^11.10.0",moment:"^2.22.1","moment-duration-format":"^2.2.2",numeral:"^2.0.6",nuxt:"^1.4.0","nuxt-buefy":"^0.1.0",remark:"^9.0.0","remark-emoji":"^2.0.1","remark-html":"^7.0.0","vue-clipboards":"^1.2.4","vue-router":"^3.0.1"}}},PJR1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("mB27"),s=o("7YgM"),r=o.n(s),n=o("FQzT");e.default={head:function(){return{link:[{hid:"icon_1",rel:"icon",type:"image/png",href:"/img/icons/favicon-16x16.png"}],htmlAttrs:{lang:this.lang}}},data:function(){return{i18nPrefix:"components.site_layout.",siteVersion:r.a.version,burgerMenuVisible:!1,cookieDisclaimerUndisplayed:void 0===this.$cookies.get("cookieDisclaimerDisplayed")||!0!==this.$cookies.get("cookieDisclaimerDisplayed"),navbarLinks:{home:this.$store.state.routes.home,gb_investment:this.$store.state.routes.gb_investment,secure_position:this.$store.state.routes.secure_position,cf_calculator:this.$store.state.routes.cf_calculator,gb_statistics:this.$store.state.routes.gb_statistics,gb_forecast_cost:this.$store.state.routes.gb_forecast_cost,trade:this.$store.state.routes.trade,campaign_cost:this.$store.state.routes.campaign_cost},footerLinks:[this.$store.state.routes.about,this.$store.state.routes.contributors,this.$store.state.routes.changelog]}},computed:{isPermalink:function(){return this.$store.state.isPermalink},lang:function(){return this.$store.state.locale}},watch:{lang:function(t){this.$formatNumberLocale(t)}},mounted:function(){this.$formatNumberLocale(this.lang);var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);if(t.length>0){var e=this;t.forEach(function(t){t.addEventListener("click",function(){e.$data.burgerMenuVisible=!e.$data.burgerMenuVisible})})}},methods:{confirmInfoCookie:function(){this.$data.cookieUnread=!1,this.$cookies.set("cookieDisclaimerDisplayed",!0,{path:"/",expires:n.a.getDefaultCookieExpireTime()})}},components:{languageSelector:i.a}}},mB27:function(t,e,o){"use strict";var i=o("6fwQ"),s=o("0UMQ"),r=o("VU/8")(i.a,s.a,!1,null,null,null);r.options.__file="components/language-selector/index.vue",e.a=r.exports}});