(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{463:function(t,n,e){"use strict";var r=e(5),o=e(464),l=e(261),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);r(r.P+r.F*c,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},464:function(t,n,e){var r=e(32),o=e(263),l=e(58);t.exports=function(t,n,e,c){var d=String(l(t)),f=d.length,h=void 0===e?" ":String(e),m=r(n);if(m<=f||""==h)return d;var S=m-f,v=o.call(h,Math.ceil(S/h.length));return v.length>S&&(v=v.slice(0,S)),c?v+d:d+v}},488:function(t,n,e){"use strict";e.r(n);e(260),e(463),e(13),e(92),e(93);var r={name:"TimeString",props:{milliseconds:{type:Number,required:!0}},computed:{formattedElapsedTime:function(){var t=Math.floor(this.milliseconds/1e3),n=Math.floor(t/60),e=t%60;return"".concat(n,":").concat(String(e).padStart(2,"0"))},timeStringStyle:function(){return{display:"inline-block","min-width":"".concat(this.formattedElapsedTime.toString().length,"ch")}}}},o=e(2),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("span",{style:t.timeStringStyle},[t._v(t._s(t.formattedElapsedTime))])}),[],!1,null,null,null);n.default=component.exports}}]);