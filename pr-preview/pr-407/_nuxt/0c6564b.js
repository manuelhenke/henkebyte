(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{423:function(e,t,n){"use strict";var r=n(177),o=n(161);t.a=function(object,path){for(var e=0,t=(path=Object(r.a)(path,object)).length;null!=object&&e<t;)object=object[Object(o.a)(path[e++])];return e&&e==t?object:void 0}},435:function(e,t,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("61346132",content,!0,{sourceMap:!1})},461:function(e,t,n){"use strict";n(435)},462:function(e,t,n){var r=n(10)(!1);r.push([e.i,'.timeline-item[data-v-28ceb07b]{display:grid;grid-template-columns:5ch 1fr;grid-column-gap:1rem}.timeline-item .year-container[data-v-28ceb07b]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:1rem 0;font-weight:700;text-align:center}.timeline-item .year-container>p[data-v-28ceb07b]{margin:0;line-height:1.2}.timeline-item .year-container .year-divider[data-v-28ceb07b]{line-height:1}.timeline-item .year-container .year-divider[data-v-28ceb07b],.timeline-item .year-container .year-from[data-v-28ceb07b]{opacity:.5}.timeline-item .content-container .item[data-v-28ceb07b]{border-left:.3rem solid #ced4da;padding:1rem;position:relative}.timeline-item .content-container .item[data-v-28ceb07b]::before{content:"";display:block;position:absolute;width:1rem;height:1rem;border-radius:50rem;left:-0.65rem;top:1rem;background:var(--timeline-item-dot-color)}.timeline-item .content-container .role-item[data-v-28ceb07b]{margin:0;margin-bottom:.25rem;font-weight:700}.timeline-item .content-container .place-item[data-v-28ceb07b]{margin:0;margin-bottom:.5rem;font-weight:400}.timeline-item .content-container .description-item[data-v-28ceb07b]{margin:0;font-weight:300}',""]),e.exports=r},464:function(e,t,n){"use strict";n.r(t);var r=n(468),o={name:"TimelineItem",props:{itemTimeline:{type:Object,default:function(){return{}}},colorDots:{type:String,default:"var(--bs-secondary)"},dateLocale:{type:String,default:""}},computed:{yearFrom:function(){return Object(r.a)(this.itemTimeline,"from")},yearTo:function(){return Object(r.a)(this.itemTimeline,"to")},backgroundColor:function(){return"--timeline-item-dot-color: ".concat(Object(r.a)(this.itemTimeline,"color",this.colorDots))}}},c=(n(461),n(3)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"timeline-item"},[t("div",{staticClass:"year-container"},[e.yearTo?t("p",{staticClass:"year-to"},[e._v("\n      "+e._s(e.yearTo)+"\n    ")]):e._e(),e._v(" "),e.yearTo?t("span",{staticClass:"year-divider"},[t("i",{staticClass:"bi bi-dash"})]):e._e(),e._v(" "),e.yearFrom?t("p",{staticClass:"year-from"},[e._v("\n      "+e._s(e.yearFrom)+"\n    ")]):e._e()]),e._v(" "),t("section",{staticClass:"content-container"},[t("div",{staticClass:"item fw-normal",style:e.backgroundColor},[t("h3",{staticClass:"role-item fs-6"},[e._v(e._s(e.itemTimeline.role))]),e._v(" "),t("h4",{staticClass:"place-item fs-6"},[e._v(e._s(e.itemTimeline.place))]),e._v(" "),t("p",{staticClass:"description-item"},[e._v("\n        "+e._s(e.itemTimeline.description)+"\n      ")])])])])}),[],!1,null,"28ceb07b",null);t.default=component.exports},468:function(e,t,n){"use strict";var r=n(423);t.a=function(object,path,e){var t=null==object?void 0:Object(r.a)(object,path);return void 0===t?e:t}}}]);