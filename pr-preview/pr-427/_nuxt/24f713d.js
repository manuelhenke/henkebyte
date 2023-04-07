(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6,11,12],{433:function(t,e,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7671fe77",content,!0,{sourceMap:!1})},434:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("72edbf71",content,!0,{sourceMap:!1})},454:function(t,e,n){"use strict";n(433)},455:function(t,e,n){var o=n(10)(!1);o.push([t.i,"\n.shake-element {\n  display: inline-block;\n}\n.shake {\n  animation-name: shake;\n  animation-timing-function: cubic-bezier(0.36, 0.07, 0.19, 0.97);\n  animation-fill-mode: both;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  transform: translate3d(0, 0, 0);\n}\n@keyframes shake {\n10%,\n  90% {\n    transform: translate3d(-1px, 0, 0);\n}\n20%,\n  80% {\n    transform: translate3d(2px, 0, 0);\n}\n30%,\n  50%,\n  70% {\n    transform: translate3d(-4px, 0, 0);\n}\n40%,\n  60% {\n    transform: translate3d(4px, 0, 0);\n}\n}\n",""]),t.exports=o},458:function(t,e,n){"use strict";n(434)},459:function(t,e,n){var o=n(10)(!1);o.push([t.i,".rain-overlay{position:fixed;inset:0;pointer-events:none;z-index:1030;--rain-color-rgb: var(--bs-black-rgb)}.rain-overlay .rain{position:absolute;left:0;width:100%;height:100%;z-index:1032}.rain-overlay .rain.front-row .drop{left:var(--x-offset)}.rain-overlay .rain.back-row{display:block;z-index:1031;bottom:60px;opacity:.5}.rain-overlay .rain.back-row .drop{right:var(--x-offset)}.rain-overlay .drop{position:absolute;bottom:var(--y-offset);display:flex;flex-direction:column;place-content:center;place-items:center;animation:drop var(--duration) var(--delay) linear infinite}@keyframes drop{0%{transform:translateY(0vh)}75%{transform:translateY(100vh)}100%{transform:translateY(100vh)}}.rain-overlay .stem{display:block;width:1px;height:70px;background:linear-gradient(to bottom, rgba(var(--rain-color-rgb), 0), rgba(var(--rain-color-rgb), 0.5));animation:stem var(--duration) var(--delay) linear infinite}@keyframes stem{0%{opacity:1}65%{opacity:1}75%{opacity:0}100%{opacity:0}}.rain-overlay .splat{display:block;width:15px;height:10px;border-top:2px dotted rgba(var(--rain-color-rgb), 0.75);border-radius:50%;opacity:1;transform:scale(0);animation:splat var(--duration) var(--delay) linear infinite}@keyframes splat{0%{opacity:1;transform:scale(0)}80%{opacity:1;transform:scale(0)}90%{opacity:.5;transform:scale(1)}100%{opacity:0;transform:scale(1.5)}}",""]),t.exports=o},474:function(t,e,n){var content=n(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("0d97f197",content,!0,{sourceMap:!1})},480:function(t,e,n){"use strict";n.r(e);var o=n(416),r={name:"ConfirmModal",props:{title:{type:String,required:!0},body:{type:String,required:!0},cancelButtonText:{type:String,required:!1,default:"Cancel"},cancelButtonType:{type:String,required:!1,default:"btn-outline-dark"},confirmButtonText:{type:String,required:!1,default:"Confirm"},confirmButtonType:{type:String,required:!1,default:"btn-primary"},noCloseButton:{type:Boolean,required:!1,default:!1}},emits:["confirm","cancel"],computed:{titleId:function(){return Object(o.a)("modal-")}}},c=n(3),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{tabindex:"-1","aria-labelledby":t.titleId,"aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:t.titleId}},[t._v(t._s(t.title))]),t._v(" "),t.noCloseButton?t._e():e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),t._v(" "),e("div",{staticClass:"modal-body"},[t._v("\n        "+t._s(t.body)+"\n      ")]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{class:"btn ".concat(t.cancelButtonType),attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:function(e){return t.$emit("cancel")}}},[t._v("\n          "+t._s(t.cancelButtonText)+"\n        ")]),t._v(" "),e("button",{class:"btn ".concat(t.confirmButtonType),attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:function(e){return t.$emit("confirm")}}},[t._v("\n          "+t._s(t.confirmButtonText)+"\n        ")])])])])])}),[],!1,null,"e3cfe9ae",null);e.default=component.exports},482:function(t,e,n){"use strict";n.r(e);n(262);var o={name:"ShakeElement",props:{shakeDuration:{type:Number,required:!1,default:1e3}},data:function(){return{isShaking:!1,timeoutId:void 0}},methods:{shake:function(){var t=this;this.isShaking=!0,window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout((function(){t.isShaking=!1}),this.shakeDuration)}}},r=(n(454),n(3)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"shake-element",class:{shake:t.isShaking}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},483:function(t,e,n){"use strict";n.r(e);n(262),n(456),n(15),n(91),n(92);var o={name:"TimeString",props:{milliseconds:{type:Number,required:!0}},computed:{formattedElapsedTime:function(){var t=Math.floor(this.milliseconds/1e3),e=Math.floor(t/60),n=t%60;return"".concat(e,":").concat(String(n).padStart(2,"0"))},timeStringStyle:function(){return{display:"inline-block","min-width":"".concat(this.formattedElapsedTime.toString().length,"ch")}}}},r=n(3),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("span",{style:t.timeStringStyle},[t._v(t._s(t.formattedElapsedTime))])}),[],!1,null,null,null);e.default=component.exports},484:function(t,e,n){"use strict";n.r(e);var o={name:"StopWatch",data:function(){return{elapsedTime:0,timer:void 0}},computed:{isRunning:function(){return!!this.timer}},methods:{start:function(){var t=this;clearInterval(this.timer),this.timer=setInterval((function(){t.elapsedTime+=1e3}),1e3)},stop:function(){clearInterval(this.timer),this.timer=void 0},reset:function(){this.stop(),this.elapsedTime=0}}},r=n(3),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("span",[t._t("default",(function(){return[t._v("\n    "+t._s(t.elapsedTime)+"\n  ")]}),{elapsedTime:t.elapsedTime})],2)}),[],!1,null,null,null);e.default=component.exports},485:function(t,e,n){"use strict";n.r(e);var o=n(511),r={name:"RainOverlay",props:{noInitRain:{type:Boolean,required:!1,default:!1},noSplat:{type:Boolean,required:!1,default:!1}},data:function(){return{drops:[],backDrops:[]}},mounted:function(){this.noInitRain||this.start()},methods:{getRandomConfig:function(t){var e=Object(o.a)(1,98),n=Object(o.a)(0,2);return{"--x-offset":"".concat(t,"%"),"--y-offset":"".concat(n+n-1+100,"%"),"--delay":"0.".concat(e,"s"),"--duration":"0.5".concat(e,"s")}},start:function(){this.clear();for(var t=0;t<100;)t+=Object(o.a)(2,5),this.drops.push(t),this.backDrops.push(t)},clear:function(){this.drops=[],this.backDrops=[]}}},c=(n(458),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rain-overlay"},[e("div",{staticClass:"rain front-row"},t._l(t.drops,(function(n){return e("div",{key:n,staticClass:"drop",style:t.getRandomConfig(n)},[e("div",{staticClass:"stem"}),t._v(" "),t.noSplat?t._e():e("div",{staticClass:"splat"})])})),0),t._v(" "),e("div",{staticClass:"rain back-row"},t._l(t.backDrops,(function(n){return e("div",{key:n,staticClass:"drop",style:t.getRandomConfig(n)},[e("div",{staticClass:"stem"}),t._v(" "),t.noSplat?t._e():e("div",{staticClass:"splat"})])})),0)])}),[],!1,null,null,null);e.default=component.exports},509:function(t,e,n){"use strict";n(474)},510:function(t,e,n){var o=n(10)(!1);o.push([t.i,".minesweeper-wrapper[data-v-71c5e5f0]:fullscreen{padding:.5rem;overflow-y:auto;overflow-x:hidden;max-width:100vw;background-color:rgb(var(--bs-light-rgb))}#minesweeper[data-v-71c5e5f0]{border-width:4px}@media(max-width: 575.98px){#minesweeper[data-v-71c5e5f0]{border-width:0;outline:4px solid #bdbdbd}}.firework-container[data-v-71c5e5f0]{position:fixed;inset:0;pointer-events:none;z-index:1030}.overlay[data-v-71c5e5f0]{position:absolute;inset:-4px;background-color:rgba(var(--bs-light-rgb), 0.975);display:flex;place-content:center;place-items:center}.overlay .btn[data-v-71c5e5f0]{font-size:3rem}@media(hover: hover){.scoreboard-row:not(:hover) .scoreboard-action>*[data-v-71c5e5f0]{visibility:hidden}}",""]),t.exports=o},546:function(t,e,n){"use strict";n.r(e);n(37),n(29),n(36),n(34),n(23),n(56),n(57);var o=n(19),filter=(n(14),n(557)),map=n(438),r=n(537),c=n(508),l=n(553),d=n(128),m=n(543),f=n(419),v=n(554),h=n(551),y=n(490),_=n(194),w=n(535),C=(n(491),n(534)),k=n(275);var M=n(85);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=M.a.DISPLAY_NOTIFICATION,G=M.a.REMOVE_NOTIFICATION;w.b.register(w.a,w.c,w.d,w.e,w.f);var T={NOOB:{name:"noob",config:{columns:5,rows:5,bombs:2}},EASY:{name:"easy",config:{columns:9,rows:9,bombs:10}},NORMAL:{name:"normal",config:{columns:16,rows:16,bombs:40}},HARD:{name:"hard",config:{columns:30,rows:16,bombs:99}},EXTREME:{name:"extreme",config:{columns:30,rows:30,bombs:200}}},j="custom",E={name:"MinesweeperWrapper",data:function(){return{isEnded:!0,fireworks:void 0,endAnimationTimeoutId:void 0,currentGameModeName:T.EASY.name,games:[],maxScoreboardGamesVisible:10,gamesHistoryChart:void 0,notificationId:"minesweeper-notification",sortGamesByDuration:!0,flagPlacementMode:!1,isInFullscreen:!1,customRows:20,customColumns:20,customBombs:50}},computed:{isStopwatchRunning:function(){try{return this.$refs.stopwatch.isRunning}catch(t){return!1}},currentGameModeGames:function(){return Object(filter.a)(this.games,{gamemode:this.currentGameModeName})},currentGameModeScoreboardEntries:function(){var t=Object(map.a)(Object(filter.a)(this.currentGameModeGames,"gameIsWon"),(function(t,e){return O({rank:e+1},t)}));return this.sortGamesByDuration?t:Object(r.a)(Object(c.a)(t,"gameCompletionTimestamp"))},currentGameModeAverageDuration:function(){return Object(l.a)(this.currentGameModeScoreboardEntries,"gameDuration")},gameModes:function(){return O(O({},T),{},{CUSTOM:{name:j,config:{columns:Object(d.a)(this.customColumns),rows:Object(d.a)(this.customRows),bombs:Object(d.a)(this.customBombs)}}})},gameModesSelectionOptions:function(){var t=this;return Object(map.a)(this.gameModes,(function(e){var n=e.name,o=e.config,r=o.columns,c=o.rows,l=o.bombs;return{value:Object(m.a)(n),selected:t.currentGameModeName===n,text:"".concat(Object(f.a)(n)," - ").concat(c,"x").concat(r," / ").concat(l," Mines")}}))},fullscreenTargetElement:function(){return this.$refs["minesweeper-wrapper"]},currentGameMode:function(){return Object(v.a)(this.gameModes,{name:this.currentGameModeName})},isCustomGameMode:function(){return this.currentGameModeName===j}},watch:{currentGameModeGames:function(){if(this.currentGameModeGames.length>0&&this.$refs["game-history-chart"]){var t=Object(h.a)(Object(filter.a)(this.currentGameModeGames,"gameIsWon")),e=Object(h.a)(this.currentGameModeGames)-t;this.gamesHistoryChart?(this.gamesHistoryChart.data.datasets[0].data=[t,e],this.gamesHistoryChart.options.plugins.title.text="".concat(Object(h.a)(this.currentGameModeGames)," game(s) played in total"),this.gamesHistoryChart.update()):this.gamesHistoryChart=new w.b(this.$refs["game-history-chart"],{type:"doughnut",data:{labels:["Won","Lost"],datasets:[{label:" Amount",data:[t,e],backgroundColor:["#198754","#dc3545"],hoverOffset:4}]},options:{plugins:{title:{text:"".concat(Object(h.a)(this.currentGameModeGames)," game(s) played in total"),display:!0,position:"bottom"}}}})}}},mounted:function(){var t=this,e=this.currentGameMode.config;this.$refs.minesweeper.setGameModeConfiguration(e),this.fireworks=new y.a(this.$refs.firework,{acceleration:1.01}),Object(_.b)((function(){return k.database.games.toArray()})).subscribe((function(e){t.games=Object(c.a)(e,"gameDuration")})),this.fullscreenTargetElement.addEventListener("fullscreenchange",(function(){t.isInFullscreen=document.fullscreenElement}))},methods:{timestampToDateString:function(t){return new Date(t).toLocaleDateString("en-EN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})},toggleFullscreen:function(){this.isInFullscreen?document.exitFullscreen().catch((function(t){return console.error(t)})):this.fullscreenTargetElement.requestFullscreen({navigationUI:"show"}).catch((function(t){return console.error(t)}))},onChangedGameMode:function(t){t.preventDefault(),this.restartGame()},calculateAnimationDuration:function(){var t=this.currentGameMode.config,e=t.rows*t.columns,n=t.bombs/e,o=Math.round(e/n*10);return Math.max(o,2e3)},onGameWon:function(){var t=this;this.isEnded=!0,this.$refs.stopwatch.stop(),this.fireworks.start(),this.$nuxt.$emit(S,{id:this.notificationId,body:"Congratulations, you have won!",options:{delay:5e3}}),this.addDbEntry(!0),this.endAnimationTimeoutId=window.setTimeout((function(){t.fireworks.stop()}),this.calculateAnimationDuration())},onGameLost:function(){var t=this;this.isEnded=!0,this.$refs.stopwatch.stop(),this.$refs.rain.start(),this.$nuxt.$emit(S,{id:this.notificationId,body:"Unfortunately, you lost this round of Minesweeper. Just try again!",options:{delay:5e3}}),this.addDbEntry(!1),this.endAnimationTimeoutId=window.setTimeout((function(){t.$refs.rain.clear()}),this.calculateAnimationDuration())},handleRestart:function(){this.isEnded&&this.restartGame()},restartGame:function(){this.isEnded=!0,this.fireworks.stop(),this.$refs.rain.clear(),window.clearTimeout(this.endAnimationTimeoutId),this.$refs.stopwatch.reset(),this.$nuxt.$emit(G,this.notificationId);var t=this.currentGameMode.config;this.$refs.minesweeper.setGameModeConfiguration(t),this.$refs.minesweeper.restartGame()},handleMinesweeperClick:function(){this.startGame()},handleMinesweeperInteraction:function(t){var e=t.detail.interaction;e.type===C.b.FlagAction&&e.action===C.a.NoChange&&this.$refs["bomb-counter-shake-wrapper"].shake()},startGame:function(){this.isEnded=!1,this.$refs.stopwatch.isRunning||this.$refs.stopwatch.start()},toggleStopWatch:function(){this.isStopwatchRunning?this.$refs.stopwatch.stop():this.$refs.stopwatch.start()},resetGameHistory:function(){k.database.games.clear()},removeScoreboardEntry:function(t){k.database.games.delete(t)},addDbEntry:function(t){k.database.games.add({gamemode:this.currentGameModeName,gameDuration:this.$refs.stopwatch.elapsedTime,gameCompletionTimestamp:Date.now(),gameIsWon:t})}}},I=(n(509),n(3)),component=Object(I.a)(E,(function(){var t=this,e=t._self._c;return e("div",{ref:"minesweeper-wrapper",staticClass:"minesweeper-wrapper"},[t.isInFullscreen?e("div",{staticClass:"h1 display-1 text-center"},[t._v("Minesweeper")]):t._e(),t._v(" "),e("div",{staticClass:"row my-3 text-center gy-2 justify-content-center"},[e("div",{staticClass:"col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentGameModeName,expression:"currentGameModeName"}],staticClass:"form-select text-center",attrs:{name:"gamemode"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentGameModeName=e.target.multiple?n:n[0]},t.onChangedGameMode]}},t._l(t.gameModesSelectionOptions,(function(n){return e("option",{key:n.value,domProps:{value:n.value,selected:n.selected}},[t._v("\n          "+t._s(n.text)+"\n        ")])})),0)]),t._v(" "),e("div",{staticClass:"col-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 d-grid"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{id:"show-btn",type:"button","data-bs-toggle":t.isEnded?void 0:"modal","data-bs-target":t.isEnded?void 0:"#restart-modal"},on:{click:t.handleRestart}},[t._v("\n        Restart\n      ")])])]),t._v(" "),t.isCustomGameMode?e("div",{staticClass:"hstack gap-3 justify-content-center"},[e("div",[e("label",{staticClass:"form-label",attrs:{for:"custom-rows"}},[t._v("Rows")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.customRows,expression:"customRows"}],staticClass:"form-range",attrs:{id:"custom-rows",type:"range",min:"1",max:"100",step:"1"},domProps:{value:t.customRows},on:{__r:function(e){t.customRows=e.target.value}}})]),t._v(" "),e("div",[e("label",{staticClass:"form-label",attrs:{for:"custom-columns"}},[t._v("Columns")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.customColumns,expression:"customColumns"}],staticClass:"form-range",attrs:{id:"custom-columns",type:"range",min:"1",max:"100",step:"1"},domProps:{value:t.customColumns},on:{__r:function(e){t.customColumns=e.target.value}}})]),t._v(" "),e("div",[e("label",{staticClass:"form-label",attrs:{for:"custom-bombs"}},[t._v("Bombs")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.customBombs,expression:"customBombs"}],staticClass:"form-range",attrs:{id:"custom-bombs",type:"range",min:"1",max:t.customColumns*t.customRows,step:"1"},domProps:{value:t.customBombs},on:{__r:function(e){t.customBombs=e.target.value}}})])]):t._e(),t._v(" "),e("div",{staticClass:"my-3 row"},[e("div",{staticClass:"col-6 d-flex align-items-center justify-content-end"},[e("ShakeElement",{ref:"bomb-counter-shake-wrapper"},[e("span",{staticClass:"badge rounded-pill bg-danger"},[e("span",{attrs:{id:"bomb-counter"}}),t._v(" Mines left")])])],1),t._v(" "),e("div",{staticClass:"col-6 d-flex gap-1 align-items-center justify-content-start"},[e("span",[e("i",{staticClass:"bi bi-stopwatch"}),t._v(" "),e("StopWatch",{ref:"stopwatch",scopedSlots:t._u([{key:"default",fn:function(t){var n=t.elapsedTime;return[e("TimeString",{attrs:{milliseconds:n}})]}}])})],1),t._v(" "),e("button",{staticClass:"btn btn-link btn-icon btn-lg",class:{invisible:t.isEnded||!t.isStopwatchRunning},attrs:{type:"button"},on:{click:t.toggleStopWatch}},[e("i",{staticClass:"bi bi-pause-circle-fill"})])])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center my-3 position-relative mw-100"},[e("minesweeper-game",{ref:"minesweeper",staticClass:"d-inline-block",attrs:{id:"minesweeper","bomb-counter-selector":"#bomb-counter","flag-placement-mode":t.flagPlacementMode},on:{"minesweeper:field-interaction":t.handleMinesweeperInteraction,"minesweeper:field-click":t.handleMinesweeperClick,"minesweeper:field-long-press":t.handleMinesweeperClick,"minesweeper:game-won":t.onGameWon,"minesweeper:game-lost":t.onGameLost}}),t._v(" "),t.isEnded||t.isStopwatchRunning?t._e():e("div",{staticClass:"overlay"},[e("button",{staticClass:"btn btn-link btn-icon btn-lg",attrs:{type:"button"},on:{click:t.toggleStopWatch}},[e("i",{staticClass:"bi bi-play-circle-fill"})])])],1),t._v(" "),e("div",{staticClass:"d-flex justify-content-center align-items-center my-3 gap-3"},[e("div",{staticClass:"d-flex justify-content-center align-items-center gap-2"},[e("div",{staticClass:"form-check form-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.flagPlacementMode,expression:"flagPlacementMode"}],staticClass:"form-check-input",attrs:{id:"flagPlacementMode",type:"checkbox",role:"switch"},domProps:{checked:Array.isArray(t.flagPlacementMode)?t._i(t.flagPlacementMode,null)>-1:t.flagPlacementMode},on:{change:function(e){var n=t.flagPlacementMode,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.flagPlacementMode=n.concat([null])):c>-1&&(t.flagPlacementMode=n.slice(0,c).concat(n.slice(c+1)))}else t.flagPlacementMode=r}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"flagPlacementMode"}},[t._v("Place flags")])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"vr d-none d-sm-inline-block"}),t._v(" "),e("div",{staticClass:"d-none d-sm-inline-block"},[e("button",{staticClass:"btn btn-link p-0",attrs:{type:"button",title:"Toggle fullscreen"},on:{click:t.toggleFullscreen}},[t.isInFullscreen?e("i",{staticClass:"bi bi-fullscreen-exit"}):e("i",{staticClass:"bi bi-fullscreen"}),t._v("\n        Fullscreen\n      ")])])]),t._v(" "),e("div",{staticClass:"collapse my-3",attrs:{id:"flagPlacementInfo"}},[e("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[e("h4",{staticClass:"alert-heading"},[t._v("Information: Flags")]),t._v(" "),t._m(1),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("\n        In addition to activating the flag placement mode, there are different ways to place flags\n        (and question marks) depending on your device type:\n      ")]),t._v(" "),e("ul",{staticClass:"mb-0"},[e("li",[t._v("Long press a field (>0.5 sec)")]),t._v(" "),t.$device.isWindows&&!t.$device.isMobile?e("li",[t._v("\n          Hold\n          "),e("kbd",[t._v("Ctrl")]),t._v("\n          or\n          "),e("kbd",[t._v("Alt")]),t._v("\n          while clicking on a field\n        ")]):t._e(),t._v(" "),!t.$device.isMacOS||t.$device.isMobile||t.$device.isTablet?t._e():e("li",[t._v("\n          Hold\n          "),t._m(2),t._v("\n          or\n          "),t._m(3),t._v("\n          while clicking on a field\n        ")])])])]),t._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:t.currentGameModeScoreboardEntries.length>0&&!t.isCustomGameMode,expression:"currentGameModeScoreboardEntries.length > 0 && !isCustomGameMode"}]},[t._m(4),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-8"},[e("table",{staticClass:"table table-striped"},[t._m(5),t._v(" "),e("tbody",[t._l(t.currentGameModeScoreboardEntries.slice(0,t.maxScoreboardGamesVisible),(function(n){return e("tr",{key:n.rank,staticClass:"scoreboard-row"},[e("th",{attrs:{scope:"row"}},[t._v(t._s(n.rank))]),t._v(" "),e("td",[e("TimeString",{attrs:{milliseconds:n.gameDuration}})],1),t._v(" "),e("td",[t._v("\n                "+t._s(t.timestampToDateString(n.gameCompletionTimestamp))+"\n              ")]),t._v(" "),e("td",{staticClass:"scoreboard-action"},[e("button",{staticClass:"btn btn-link btn-icon btn-lg",attrs:{type:"button",title:"Remove entry"},on:{click:function(e){return t.removeScoreboardEntry(n.id)}}},[e("i",{staticClass:"bi bi-trash-fill"})])])])})),t._v(" "),t.currentGameModeScoreboardEntries.length>t.maxScoreboardGamesVisible?e("tr",[e("th",{attrs:{colspan:"4",scope:"row"}},[t._v("...")])]):t._e()],2),t._v(" "),e("tfoot",[e("tr",[e("th",{attrs:{scope:"row "}},[t._v("∑ "+t._s(t.currentGameModeScoreboardEntries.length))]),t._v(" "),e("td",[t._v("~"),e("TimeString",{attrs:{milliseconds:t.currentGameModeAverageDuration}})],1),t._v(" "),e("td"),t._v(" "),e("td")])])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-4"},[e("canvas",{ref:"game-history-chart"})])])]),t._v(" "),e("ConfirmModal",{attrs:{id:"restart-modal",title:"Restart the game",body:"Are you sure, that you want to restart the game? Any Progress will be lost.","confirm-button-text":"Yes, restart"},on:{confirm:t.restartGame}}),t._v(" "),e("ConfirmModal",{attrs:{id:"reset-game-history-modal",title:"Reset game history",body:"Are you sure, that you want to reset the entire history (including every game mode)? This action is irreversible.","confirm-button-text":"Yes, reset","confirm-button-type":"btn-danger"},on:{confirm:t.resetGameHistory}}),t._v(" "),e("RainOverlay",{ref:"rain",attrs:{"no-init-rain":""}}),t._v(" "),e("div",{ref:"firework",staticClass:"firework-container"})],1)}),[function(){var t=this._self._c;return t("button",{staticClass:"btn btn-link btn-icon btn-lg",attrs:{type:"button",title:"Show further information about flag placement","data-bs-toggle":"collapse","data-bs-target":"#flagPlacementInfo","aria-expanded":"false","aria-controls":"flagPlacementInfo"}},[t("i",{staticClass:"bi bi-info-circle-fill"})])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n        Flags are there to indicate an underlying bomb. Therefore, fields with flags cannot be\n        clicked to uncover the field.\n        "),e("strong",[t._v("The maximum number of flags that can be placed is the number of bombs hidden.")])])},function(){var t=this._self._c;return t("kbd",[this._v("Cmd "),t("i",{staticClass:"bi bi-command"})])},function(){var t=this._self._c;return t("kbd",[this._v("Opt "),t("i",{staticClass:"bi bi-option"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex gap-2 align-items-center justify-content-between"},[e("h2",[t._v("Personal Scoreboard")]),t._v(" "),e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#reset-game-history-modal"}},[t._v("\n        Reset\n      ")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Duration")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Completion date")]),t._v(" "),e("th",{attrs:{scope:"col"}})])])}],!1,null,"71c5e5f0",null);e.default=component.exports;installComponents(component,{ShakeElement:n(482).default,TimeString:n(483).default,StopWatch:n(484).default,ConfirmModal:n(480).default,RainOverlay:n(485).default})}}]);