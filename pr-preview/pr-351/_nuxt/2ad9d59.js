(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{424:function(t,e,n){"use strict";var r=n(429),c=n(41),o=n(60),l=n(21),f=c.a?c.a.isConcatSpreadable:void 0;var d=function(t){return Object(l.a)(t)||Object(o.a)(t)||!!(f&&t&&t[f])};e.a=function t(e,n,c,o,l){var f=-1,v=e.length;for(c||(c=d),l||(l=[]);++f<v;){var h=e[f];n>0&&c(h)?n>1?t(h,n-1,c,o,l):Object(r.a)(l,h):o||(l[l.length]=h)}return l}},437:function(t,e,n){"use strict";var r=n(159),c=n(419),o=n(420),l=n(21);e.a=function(t,e){return(Object(l.a)(t)?r.a:o.a)(t,Object(c.a)(e,3))}},543:function(t,e,n){"use strict";n.r(e);var r=n(4),c=(n(31),n(21)),o=n(424);var l=function(t){return(null==t?0:t.length)?Object(o.a)(t,1):[]},map=n(437),f={layout:"default",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,o=r.slug||"index",e.next=4,n(o).fetch().catch((function(){c({statusCode:404,message:"Page not found"})}));case 4:return l=e.sent,e.abrupt("return",{page:l});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{page:void 0}},head:function(){var head={title:"".concat(this.page.title," - HenkeByte"),meta:[]};return Object(c.a)(this.page.meta_tags)&&(head.meta=l(Object(map.a)(this.page.meta_tags,(function(t){return[{hid:t.key,name:t.key,content:t.content},{hid:"og:".concat(t.key),property:"og:".concat(t.key),content:t.content}]})))),head}},d=n(3),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"page"}},[t._e(" #page "),t._v(" "),e("TheTitle",{attrs:{"badge-text":t.page.badge_text}},[t._v(t._s(t.page.title))]),t._v(" "),e("nuxt-content",{attrs:{document:t.page}}),t._v(" "),t._e(" /#page ")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheTitle:n(278).default})}}]);