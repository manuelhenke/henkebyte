(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{437:function(e,t,n){"use strict";var r=n(441),o=n(41),c=n(59),l=n(19),m=o.a?o.a.isConcatSpreadable:void 0;var d=function(e){return Object(l.a)(e)||Object(c.a)(e)||!!(m&&e&&e[m])};t.a=function e(t,n,o,c,l){var m=-1,f=t.length;for(o||(o=d),l||(l=[]);++m<f;){var v=t[m];n>0&&o(v)?n>1?e(v,n-1,o,c,l):Object(r.a)(l,v):c||(l[l.length]=v)}return l}},445:function(e,t,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("61346132",content,!0,{sourceMap:!1})},448:function(e,t,n){"use strict";var r=n(159),o=n(432),c=n(433),l=n(19);t.a=function(e,t){return(Object(l.a)(e)?r.a:c.a)(e,Object(o.a)(t,3))}},466:function(e,t,n){"use strict";n(445)},467:function(e,t,n){var r=n(8)(!1);r.push([e.i,'.timeline-item[data-v-28ceb07b]{display:grid;grid-template-columns:5ch 1fr;grid-column-gap:1rem}.timeline-item .year-container[data-v-28ceb07b]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:1rem 0;font-weight:700;text-align:center}.timeline-item .year-container>p[data-v-28ceb07b]{margin:0;line-height:1.2}.timeline-item .year-container .year-divider[data-v-28ceb07b]{line-height:1}.timeline-item .year-container .year-divider[data-v-28ceb07b],.timeline-item .year-container .year-from[data-v-28ceb07b]{opacity:.5}.timeline-item .content-container .item[data-v-28ceb07b]{border-left:.3rem solid #ced4da;padding:1rem;position:relative}.timeline-item .content-container .item[data-v-28ceb07b]::before{content:"";display:block;position:absolute;width:1rem;height:1rem;border-radius:50rem;left:-0.65rem;top:1rem;background:var(--timeline-item-dot-color)}.timeline-item .content-container .role-item[data-v-28ceb07b]{margin:0;margin-bottom:.25rem;font-weight:700}.timeline-item .content-container .place-item[data-v-28ceb07b]{margin:0;margin-bottom:.5rem;font-weight:400}.timeline-item .content-container .description-item[data-v-28ceb07b]{margin:0;font-weight:300}',""]),e.exports=r},468:function(e,t,n){var r=n(5),o=n(260)(!1);r(r.S,"Object",{values:function(e){return o(e)}})},470:function(e,t,n){"use strict";n.r(t);var r=n(474),o={name:"TimelineItem",props:{itemTimeline:{type:Object,default:function(){return{}}},colorDots:{type:String,default:"var(--bs-secondary)"},dateLocale:{type:String,default:""}},computed:{yearFrom:function(){return Object(r.a)(this.itemTimeline,"from")},yearTo:function(){return Object(r.a)(this.itemTimeline,"to")},backgroundColor:function(){return"--timeline-item-dot-color: ".concat(Object(r.a)(this.itemTimeline,"color",this.colorDots))}}},c=(n(466),n(2)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"timeline-item"},[t("div",{staticClass:"year-container"},[e.yearTo?t("p",{staticClass:"year-to"},[e._v("\n      "+e._s(e.yearTo)+"\n    ")]):e._e(),e._v(" "),e.yearTo?t("span",{staticClass:"year-divider"},[t("i",{staticClass:"bi bi-dash"})]):e._e(),e._v(" "),e.yearFrom?t("p",{staticClass:"year-from"},[e._v("\n      "+e._s(e.yearFrom)+"\n    ")]):e._e()]),e._v(" "),t("section",{staticClass:"content-container"},[t("div",{staticClass:"item fw-normal",style:e.backgroundColor},[t("h3",{staticClass:"role-item fs-6"},[e._v(e._s(e.itemTimeline.role))]),e._v(" "),t("h4",{staticClass:"place-item fs-6"},[e._v(e._s(e.itemTimeline.place))]),e._v(" "),t("p",{staticClass:"description-item"},[e._v("\n        "+e._s(e.itemTimeline.description)+"\n      ")])])])])}),[],!1,null,"28ceb07b",null);t.default=component.exports},480:function(e,t,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("128b53de",content,!0,{sourceMap:!1})},507:function(e,t,n){"use strict";n(480)},508:function(e,t,n){var r=n(8)(!1);r.push([e.i,".timeline-main[data-v-fc19528c]{text-align:left;width:100%}.timeline-main .wrapper-timeline[data-v-fc19528c]{position:relative}.timeline-main .wrapper-item[data-v-fc19528c]:not(:last-child){margin-bottom:1rem}.timeline-main .wrapper-item:not(:last-child).unique-timeline[data-v-fc19528c]{margin-bottom:0}",""]),e.exports=r},532:function(e,t,n){"use strict";n.r(t);n(76),n(55),n(468);var r=n(68);var o=function(e,t,n,r){for(var o=-1,c=null==e?0:e.length;++o<c;){var l=e[o];t(r,l,n(l),e)}return r},c=n(471);var l=function(e,t,n,r){return Object(c.a)(e,(function(e,o,c){t(r,e,n(e),c)})),r},m=n(432),d=n(19);var f=function(e,t){return function(n,r){var c=Object(d.a)(n)?o:l,f=t?t():{};return c(n,e,Object(m.a)(r,2),f)}},v=Object.prototype.hasOwnProperty,h=f((function(e,t,n){v.call(e,n)?e[n].push(t):Object(r.a)(e,n,[t])})),y=n(434),_=n(437),map=n(448);var T=function(e,t){return Object(_.a)(Object(map.a)(e,t),1)},O=n(470),C={NONE:"none",DESC:"desc",ASC:"asc"},j={name:"TimelineMain",components:{TimelineItem:O.default},props:{timelineItems:{type:Array,default:function(){return[]}},messageWhenNoItems:{type:String,default:""},colorDots:{type:String,default:"var(--bs-secondary)"},uniqueTimeline:{type:Boolean,default:!1},uniqueYear:{type:Boolean,default:!1},order:{type:String,default:C.DESC,validator:function(e){return Object.values(C).includes(e)}},dateLocale:{type:String,default:""}},computed:{hasItems:function(){return this.timelineItems.length>0},dataTimeline:function(){return this.order===C.NONE?this.timelineItems:this.orderItems(this.timelineItems,this.order)}},methods:{wrapperItemClass:function(e){var t=this.checkYearTimelineItem(e),n=this.uniqueYear&&t&&void 0!==this.order;return{"wrapper-item":!0,"unique-timeline":this.uniqueTimeline||n}},checkYearTimelineItem:function(e){var t=this.dataTimeline[e-1],n=this.dataTimeline[e+1],r=this.dataTimeline[e];if(!t||!n)return!1;var o=t.from,c=n.from,l=r.from;return o===l&&l===c||l===c},orderItems:function(e,t){var n=h(e,"from"),r=Object(y.a)(n).sort((function(a,b){return t===C.DESC?b-a:a-b}));return T(r,(function(e){return n[e]}))}}},w=(n(507),n(2)),component=Object(w.a)(j,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"timeline-main"},[e.hasItems?t("div",{staticClass:"wrapper-timeline"},e._l(e.dataTimeline,(function(n,r){return t("div",{key:r,class:e.wrapperItemClass(r)},[t("TimelineItem",{attrs:{"item-timeline":n,"date-locale":e.dateLocale,"color-dots":e.colorDots}})],1)})),0):t("p",[e._v(e._s(e.messageWhenNoItems))])])}),[],!1,null,"fc19528c",null);t.default=component.exports;installComponents(component,{TimelineItem:n(470).default})}}]);