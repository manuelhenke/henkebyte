(window.webpackJsonp=window.webpackJsonp||[]).push([[19,17],{442:function(e,t,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("73e3321c",content,!0,{sourceMap:!1})},454:function(e,t,n){"use strict";n(442)},455:function(e,t,n){var l=n(8)(!1);l.push([e.i,".welcome-card[data-v-148a449b]{display:flex;flex-direction:column;place-content:center;place-items:center;gap:1rem;text-align:center;border:none;padding:1rem}@media(min-width: 576px){.welcome-card[data-v-148a449b]{padding:1.5rem}}@media(min-width: 768px){.welcome-card[data-v-148a449b]{padding:3rem}}.welcome-card .welcome-card-image-container[data-v-148a449b]{max-width:12rem}.welcome-card .welcome-card-line[data-v-148a449b]{height:2px;align-self:stretch;margin:0}.welcome-card .welcome-card-message-container[data-v-148a449b]{align-self:stretch}.welcome-card .welcome-card-message-container ul[data-v-148a449b]{list-style:none;padding:0;margin:0}",""]),e.exports=l},475:function(e,t,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("3efd588b",content,!0,{sourceMap:!1})},484:function(e,t,n){"use strict";n.r(t);var l={name:"WelcomeCard"},c=(n(454),n(2)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"welcome-card card bg-light shadow"},[t("div",{staticClass:"welcome-card-title-container"},[e._t("title")],2),e._v(" "),t("div",{staticClass:"welcome-card-image-container"},[e._t("image")],2),e._v(" "),t("hr",{staticClass:"welcome-card-line"}),e._v(" "),t("div",{staticClass:"welcome-card-message-container"},[e._t("default")],2),e._v(" "),t("TheFooter")],1)}),[],!1,null,"148a449b",null);t.default=component.exports;installComponents(component,{TheFooter:n(165).default})},491:function(e,t,n){"use strict";n(475)},492:function(e,t,n){var l=n(8)(!1);l.push([e.i,"nav ul li[data-v-62f96564]:not(:last-child){margin-bottom:.25rem}",""]),e.exports=l},540:function(e,t,n){"use strict";n.r(t);n(12),n(28);var l={name:"IndexPage",layout:"center-layout",computed:{navigation:function(){return this.$store.state.navigation.filter((function(e){return e.links}))}}},c=(n(491),n(2)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"index-page"}},[e._e(" #index-page "),e._v(" "),t("WelcomeCard",{scopedSlots:e._u([{key:"title",fn:function(){return[t("h1",{staticClass:"display-5 mb-0"},[e._v("Welcome to "),t("span",{staticClass:"visually-hidden"},[e._v("HenkeByte")])])]},proxy:!0},{key:"image",fn:function(){return[t("div",{staticClass:"px-4"},[t("TheLogo")],1)]},proxy:!0}])},[e._v(" "),e._v(" "),t("nav",{staticClass:"row row-cols-1 row-cols-sm-2 gy-3"},e._l(e.navigation,(function(n){return t("div",{key:n.title,staticClass:"col"},[n.title?t("h2",{staticClass:"h5 mb-1"},[e._v("\n          "+e._s(n.title)+"\n        ")]):e._e(),e._v(" "),t("ul",e._l(n.links,(function(link){return t("li",{key:link.name},[link.to?t("NuxtLink",{staticClass:"link-primary fs-5",attrs:{to:link.to}},[e._v(e._s(link.name))]):link.href?t("a",{staticClass:"link-primary fs-5",attrs:{href:link.href,target:"_blank"}},[e._v(e._s(link.name))]):e._e()],1)})),0)])})),0)]),e._v(" "),e._e(" /#index-page ")],1)}),[],!1,null,"62f96564",null);t.default=component.exports;installComponents(component,{TheLogo:n(269).default,WelcomeCard:n(484).default})}}]);