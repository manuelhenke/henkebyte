(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{483:function(e,t,n){"use strict";n.r(t);var r={name:"StopWatch",data:function(){return{elapsedTime:0,timer:void 0}},computed:{isRunning:function(){return!!this.timer}},methods:{start:function(){var e=this;clearInterval(this.timer),this.timer=setInterval((function(){e.elapsedTime+=1e3}),1e3)},stop:function(){clearInterval(this.timer),this.timer=void 0},reset:function(){this.stop(),this.elapsedTime=0}}},o=n(2),component=Object(o.a)(r,(function(){var e=this;return(0,e._self._c)("span",[e._t("default",(function(){return[e._v("\n    "+e._s(e.elapsedTime)+"\n  ")]}),{elapsedTime:e.elapsedTime})],2)}),[],!1,null,null,null);t.default=component.exports}}]);