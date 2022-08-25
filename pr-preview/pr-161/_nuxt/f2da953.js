(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6,10],{414:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("72edbf71",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";n(414)},436:function(t,e,n){var r=n(4)(!1);r.push([t.i,".rain-overlay{position:fixed;inset:0;pointer-events:none;z-index:1030;--rain-color-rgb: var(--bs-black-rgb)}.rain-overlay .rain{position:absolute;left:0;width:100%;height:100%;z-index:1032}.rain-overlay .rain.front-row .drop{left:var(--x-offset)}.rain-overlay .rain.back-row{display:block;z-index:1031;bottom:60px;opacity:.5}.rain-overlay .rain.back-row .drop{right:var(--x-offset)}.rain-overlay .drop{position:absolute;bottom:var(--y-offset);display:flex;flex-direction:column;place-content:center;place-items:center;animation:drop var(--duration) var(--delay) linear infinite}@keyframes drop{0%{transform:translateY(0vh)}75%{transform:translateY(100vh)}100%{transform:translateY(100vh)}}.rain-overlay .stem{display:block;width:1px;height:70px;background:linear-gradient(to bottom, rgba(var(--rain-color-rgb), 0), rgba(var(--rain-color-rgb), 0.5));animation:stem var(--duration) var(--delay) linear infinite}@keyframes stem{0%{opacity:1}65%{opacity:1}75%{opacity:0}100%{opacity:0}}.rain-overlay .splat{display:block;width:15px;height:10px;border-top:2px dotted rgba(var(--rain-color-rgb), 0.75);border-radius:50%;opacity:1;transform:scale(0);animation:splat var(--duration) var(--delay) linear infinite}@keyframes splat{0%{opacity:1;transform:scale(0)}80%{opacity:1;transform:scale(0)}90%{opacity:.5;transform:scale(1)}100%{opacity:0;transform:scale(1.5)}}",""]),t.exports=r},450:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("48fdd845",content,!0,{sourceMap:!1})},458:function(t,e,n){"use strict";n.r(e);var r=n(386),o={name:"ConfirmModal",props:{title:{type:String,required:!0},body:{type:String,required:!0},cancelButtonText:{type:String,required:!1,default:"Cancel"},cancelButtonType:{type:String,required:!1,default:"btn-outline-dark"},confirmButtonText:{type:String,required:!1,default:"Confirm"},confirmButtonType:{type:String,required:!1,default:"btn-primary"},noCloseButton:{type:Boolean,required:!1,default:!1}},emits:["confirm","cancel"],computed:{titleId:function(){return Object(r.a)("modal-")}}},c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{tabindex:"-1","aria-labelledby":t.titleId,"aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:t.titleId}},[t._v(t._s(t.title))]),t._v(" "),t.noCloseButton?t._e():e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),t._v(" "),e("div",{staticClass:"modal-body"},[t._v("\n        "+t._s(t.body)+"\n      ")]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{class:"btn ".concat(t.cancelButtonType),attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:function(e){return t.$emit("cancel")}}},[t._v("\n          "+t._s(t.cancelButtonText)+"\n        ")]),t._v(" "),e("button",{class:"btn ".concat(t.confirmButtonType),attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:function(e){return t.$emit("confirm")}}},[t._v("\n          "+t._s(t.confirmButtonText)+"\n        ")])])])])])}),[],!1,null,"e3cfe9ae",null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);n(214),n(432);var r={name:"TimeString",props:{milliseconds:{type:Number,required:!0}},computed:{formattedElapsedTime:function(){var t=Math.floor(this.milliseconds/1e3),e=Math.floor(t/60),n=t%60;return"".concat(e,":").concat(String(n).padStart(2,"0"))}}},o=n(2),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("span",{staticClass:"time-string"},[t._v(t._s(t.formattedElapsedTime))])}),[],!1,null,null,null);e.default=component.exports},460:function(t,e,n){"use strict";n.r(e);var r={name:"StopWatch",data:function(){return{elapsedTime:0,timer:void 0}},computed:{isRunning:function(){return!!this.timer}},methods:{start:function(){var t=this;clearInterval(this.timer),this.timer=setInterval((function(){t.elapsedTime+=1e3}),1e3)},stop:function(){clearInterval(this.timer),this.timer=void 0},reset:function(){this.stop(),this.elapsedTime=0}}},o=n(2),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("span",[t._t("default",(function(){return[t._v("\n    "+t._s(t.elapsedTime)+"\n  ")]}),{elapsedTime:t.elapsedTime})],2)}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,n){"use strict";n.r(e);var r=n(471),o={name:"RainOverlay",props:{noInitRain:{type:Boolean,required:!1,default:!1},noSplat:{type:Boolean,required:!1,default:!1}},data:function(){return{drops:[],backDrops:[]}},mounted:function(){this.noInitRain||this.start()},methods:{getRandomConfig:function(t){var e=Object(r.a)(1,98),n=Object(r.a)(0,2);return{"--x-offset":"".concat(t,"%"),"--y-offset":"".concat(n+n-1+100,"%"),"--delay":"0.".concat(e,"s"),"--duration":"0.5".concat(e,"s")}},start:function(){this.clear();for(var t=0;t<100;)t+=Object(r.a)(2,5),this.drops.push(t),this.backDrops.push(t)},clear:function(){this.drops=[],this.backDrops=[]}}},c=(n(435),n(2)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rain-overlay"},[e("div",{staticClass:"rain front-row"},t._l(t.drops,(function(n){return e("div",{key:n,staticClass:"drop",style:t.getRandomConfig(n)},[e("div",{staticClass:"stem"}),t._v(" "),t.noSplat?t._e():e("div",{staticClass:"splat"})])})),0),t._v(" "),e("div",{staticClass:"rain back-row"},t._l(t.backDrops,(function(n){return e("div",{key:n,staticClass:"drop",style:t.getRandomConfig(n)},[e("div",{staticClass:"stem"}),t._v(" "),t.noSplat?t._e():e("div",{staticClass:"splat"})])})),0)])}),[],!1,null,null,null);e.default=component.exports},469:function(t,e,n){"use strict";n(450)},470:function(t,e,n){var r=n(4)(!1);r.push([t.i,"#minesweeper[data-v-bf3d4b4e]{border-width:4px}@media(max-width: 575.98px){#minesweeper[data-v-bf3d4b4e]{border-width:0;outline:4px solid #bdbdbd}}.firework-container[data-v-bf3d4b4e]{position:fixed;inset:0;pointer-events:none;z-index:1030}.overlay[data-v-bf3d4b4e]{position:absolute;inset:-4px;background-color:rgba(var(--bs-light-rgb), 0.975);display:flex;place-content:center;place-items:center}.overlay .btn[data-v-bf3d4b4e]{font-size:3rem}@media(hover: hover){.scoreboard-row:not(:hover) .scoreboard-action>*[data-v-bf3d4b4e]{visibility:hidden}}",""]),t.exports=r},505:function(t,e,n){"use strict";n.r(e);n(120),n(213),n(428),n(404),n(405),n(410),n(411);var r=n(403),filter=(n(81),n(517)),map=n(418),o=n(496),c=n(468),l=n(513),d=n(502),m=n(389),f=n(511),v=n(514),h=n(466),y=n(141),_=n(494),w=n(221);var C=n(53);n(467);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x=C.a.DISPLAY_NOTIFICATION,G=C.a.REMOVE_NOTIFICATION;_.b.register(_.a,_.c,_.d,_.e,_.f);var k={NOOB:{name:"noob",endAnimationDuration:5e3,config:{columns:5,rows:5,bombs:2}},EASY:{name:"easy",endAnimationDuration:1e4,config:{columns:9,rows:9,bombs:10}},NORMAL:{name:"normal",endAnimationDuration:15e3,config:{columns:16,rows:16,bombs:40}},HARD:{name:"hard",endAnimationDuration:2e4,config:{columns:30,rows:16,bombs:99}},EXTREME:{name:"extreme",endAnimationDuration:3e4,config:{columns:30,rows:30,bombs:300}}},M={name:"MinesweeperWrapper",data:function(){return{isEnded:!0,fireworks:void 0,endAnimationTimeoutId:void 0,currentGameModeName:k.EASY.name,games:[],maxScoreboardGamesVisible:10,gamesHistoryChart:void 0,notificationId:"minesweeper-notification",sortGamesByDuration:!0}},computed:{isStopwatchRunning:function(){try{return this.$refs.stopwatch.isRunning}catch(t){return!1}},currentGameModeGames:function(){return Object(filter.a)(this.games,{gamemode:this.currentGameModeName})},currentGameModeScoreboardEntries:function(){var t=Object(map.a)(Object(filter.a)(this.currentGameModeGames,"gameIsWon"),(function(t,e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({rank:e+1},t)}));return this.sortGamesByDuration?t:Object(o.a)(Object(c.a)(t,"gameCompletionTimestamp"))},currentGameModeAverageDuration:function(){return Object(l.a)(this.currentGameModeScoreboardEntries,"gameDuration")},gameModesSelectionOptions:function(){var t=this;return Object(map.a)(k,(function(e){var n=e.name,r=e.config,o=r.columns,c=r.rows,l=r.bombs;return{value:Object(d.a)(n),selected:t.currentGameModeName===n,text:"".concat(Object(m.a)(n)," - ").concat(c,"x").concat(o," / ").concat(l," Mines")}}))}},watch:{currentGameModeGames:function(){if(this.currentGameModeGames.length>0&&this.$refs["game-history-chart"]){var t=Object(f.a)(Object(filter.a)(this.currentGameModeGames,"gameIsWon")),e=Object(f.a)(this.currentGameModeGames)-t;if(this.gamesHistoryChart)this.gamesHistoryChart.data.datasets[0].data=[t,e],this.gamesHistoryChart.options.plugins.title.text="".concat(Object(f.a)(this.currentGameModeGames)," game(s) played in total"),this.gamesHistoryChart.update();else{var n={type:"doughnut",data:{labels:["Won","Lost"],datasets:[{label:"Games History",data:[t,e],backgroundColor:["#198754","#dc3545"],hoverOffset:4}]},options:{plugins:{title:{text:"".concat(Object(f.a)(this.currentGameModeGames)," game(s) played in total"),display:!0,position:"bottom"}}}};this.gamesHistoryChart=new _.b(this.$refs["game-history-chart"],n)}}}},mounted:function(){var t=this,e=this.getGameModeConfiguration();this.$refs.minesweeper.setGameModeConfiguration(e),this.fireworks=new h.a(this.$refs.firework,{acceleration:1.01}),Object(y.b)((function(){return w.database.games.toArray()})).subscribe((function(e){t.games=Object(c.a)(e,"gameDuration")}))},methods:{timestampToDateString:function(t){return new Date(t).toLocaleDateString("en-EN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})},getCurrentGameMode:function(){return Object(v.a)(k,{name:this.currentGameModeName})},getGameModeConfiguration:function(){return this.getCurrentGameMode().config},onChangedGameMode:function(t){t.preventDefault();var e=this.getGameModeConfiguration();this.$refs.minesweeper.setGameModeConfiguration(e),this.restartGame()},onGameWon:function(){var t=this;this.isEnded=!0,this.$refs.stopwatch.stop(),this.fireworks.start(),this.$nuxt.$emit(x,{id:this.notificationId,body:"Congratulations, you have won!",options:{delay:k.NOOB.endAnimationDuration}}),this.addDbEntry(!0),this.endAnimationTimeoutId=window.setTimeout((function(){t.fireworks.stop()}),this.getCurrentGameMode().endAnimationDuration)},onGameLost:function(){var t=this;this.isEnded=!0,this.$refs.stopwatch.stop(),this.$refs.rain.start(),this.$nuxt.$emit(x,{id:this.notificationId,body:"Unfortunately, you lost this round of Minesweeper. Just try again!",options:{delay:k.NOOB.endAnimationDuration}}),this.addDbEntry(!1),this.endAnimationTimeoutId=window.setTimeout((function(){t.$refs.rain.clear()}),this.getCurrentGameMode().endAnimationDuration)},clickedRestart:function(){this.isEnded&&this.restartGame()},restartGame:function(){this.isEnded=!0,this.fireworks.stop(),this.$refs.rain.clear(),window.clearTimeout(this.endAnimationTimeoutId),this.$refs.stopwatch.reset(),this.$nuxt.$emit(G,this.notificationId),this.$refs.minesweeper.restartGame()},handleMinesweeperClick:function(){this.isEnded=!1,this.$refs.stopwatch.isRunning||this.$refs.stopwatch.start()},toggleStopWatch:function(){this.isStopwatchRunning?this.$refs.stopwatch.stop():this.$refs.stopwatch.start()},resetGameHistory:function(){w.database.games.clear()},removeScoreboardEntry:function(t){w.database.games.delete(t)},addDbEntry:function(t){w.database.games.add({gamemode:this.currentGameModeName,gameDuration:this.$refs.stopwatch.elapsedTime,gameCompletionTimestamp:Date.now(),gameIsWon:t})}}},S=M,j=(n(469),n(2)),component=Object(j.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"minesweeper"},[e("div",{staticClass:"d-grid gap-2 col-12 col-md-6 col-lg-4 mx-auto my-3 text-center"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentGameModeName,expression:"currentGameModeName"}],staticClass:"form-select text-center",attrs:{name:"gamemode"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentGameModeName=e.target.multiple?n:n[0]},t.onChangedGameMode]}},t._l(t.gameModesSelectionOptions,(function(n){return e("option",{key:n.value,domProps:{value:n.value,selected:n.selected}},[t._v("\n        "+t._s(n.text)+"\n      ")])})),0),t._v(" "),e("button",{staticClass:"btn btn-outline-primary",attrs:{id:"show-btn",type:"button","data-bs-toggle":t.isEnded?void 0:"modal","data-bs-target":t.isEnded?void 0:"#restart-modal"},on:{click:t.clickedRestart}},[t._v("\n      Restart\n    ")])]),t._v(" "),e("div",{staticClass:"text-center my-3 position-relative"},[e("minesweeper-game",{ref:"minesweeper",staticClass:"d-inline-block",attrs:{id:"minesweeper","bomb-counter-selector":"#bomb-counter"},on:{"field-click":t.handleMinesweeperClick,"game-won":t.onGameWon,"game-lost":t.onGameLost}}),t._v(" "),t.isEnded||t.isStopwatchRunning?t._e():e("div",{staticClass:"overlay"},[e("button",{staticClass:"btn btn-link btn-icon btn-lg",attrs:{type:"button"},on:{click:t.toggleStopWatch}},[e("i",{staticClass:"bi bi-play-circle-fill"})])])],1),t._v(" "),e("div",{staticClass:"my-3 d-flex gap-5 align-items-center justify-content-center"},[e("div",{staticClass:"d-flex gap-2 align-items-center justify-content-center"},[e("span",[e("i",{staticClass:"bi bi-stopwatch"}),t._v(" "),e("StopWatch",{ref:"stopwatch",scopedSlots:t._u([{key:"default",fn:function(t){var n=t.elapsedTime;return[e("TimeString",{attrs:{milliseconds:n}})]}}])})],1),t._v(" "),!t.isEnded&&t.isStopwatchRunning?e("button",{staticClass:"btn btn-link btn-icon btn-lg",attrs:{type:"button"},on:{click:t.toggleStopWatch}},[e("i",{staticClass:"bi bi-pause-circle-fill"})]):t._e()]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"alert alert-info d-flex align-items-center",attrs:{role:"alert"}},[e("i",{staticClass:"bi bi-info-circle-fill flex-shrink-0 me-2"}),t._v(" "),t.$device.isWindows&&!t.$device.isMobile?e("div",[t._v("\n      To place a flag just hold "),e("kbd",[t._v("Ctrl")]),t._v(" or "),e("kbd",[t._v("Alt")]),t._v(" while clicking on a field. Or\n      just hold a field to place a flag.\n    ")]):t.$device.isMacOS&&!t.$device.isMobile?e("div",[t._v("\n      To place a flag just hold\n      "),t._m(1),t._v(" or\n      "),t._m(2),t._v(" while clicking on a field. Or just hold a field\n      to place a flag.\n    ")]):e("div",[t._v("Just hold a field to place a flag.")])]),t._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:t.currentGameModeScoreboardEntries.length>0,expression:"currentGameModeScoreboardEntries.length > 0"}]},[t._m(3),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-8"},[e("table",{staticClass:"table table-striped"},[t._m(4),t._v(" "),e("tbody",[t._l(t.currentGameModeScoreboardEntries.slice(0,t.maxScoreboardGamesVisible),(function(n){return e("tr",{key:n.rank,staticClass:"scoreboard-row"},[e("th",{attrs:{scope:"row"}},[t._v(t._s(n.rank))]),t._v(" "),e("td",[e("TimeString",{attrs:{milliseconds:n.gameDuration}})],1),t._v(" "),e("td",[t._v("\n                "+t._s(t.timestampToDateString(n.gameCompletionTimestamp))+"\n              ")]),t._v(" "),e("td",{staticClass:"scoreboard-action"},[e("button",{staticClass:"btn btn-link btn-icon btn-lg",attrs:{type:"button",title:"Remove entry"},on:{click:function(e){return t.removeScoreboardEntry(n.id)}}},[e("i",{staticClass:"bi bi-trash-fill"})])])])})),t._v(" "),t.currentGameModeScoreboardEntries.length>t.maxScoreboardGamesVisible?e("tr",[e("th",{attrs:{colspan:"4",scope:"row"}},[t._v("...")])]):t._e()],2),t._v(" "),e("tfoot",[e("tr",[e("th",{attrs:{scope:"row "}},[t._v("∑ "+t._s(t.currentGameModeScoreboardEntries.length))]),t._v(" "),e("td",[t._v("~"),e("TimeString",{attrs:{milliseconds:t.currentGameModeAverageDuration}})],1),t._v(" "),e("td"),t._v(" "),e("td")])])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-4"},[e("canvas",{ref:"game-history-chart"})])])]),t._v(" "),e("ConfirmModal",{attrs:{id:"restart-modal",title:"Restart the game",body:"Are you sure, that you want to restart the game? Any Progress will be lost.","confirm-button-text":"Yes, restart"},on:{confirm:t.restartGame}}),t._v(" "),e("ConfirmModal",{attrs:{id:"reset-game-history-modal",title:"Reset game history",body:"Are you sure, that you want to reset the entire history (including every game mode)? This action is irreversible.","confirm-button-text":"Yes, reset","confirm-button-type":"btn-danger"},on:{confirm:t.resetGameHistory}}),t._v(" "),e("RainOverlay",{ref:"rain",attrs:{"no-init-rain":""}}),t._v(" "),e("div",{ref:"firework",staticClass:"firework-container"})],1)}),[function(){var t=this._self._c;return t("span",{staticClass:"badge rounded-pill bg-danger"},[t("span",{attrs:{id:"bomb-counter"}}),this._v(" Mines left")])},function(){var t=this._self._c;return t("kbd",[this._v("Cmd "),t("i",{staticClass:"bi bi-command"})])},function(){var t=this._self._c;return t("kbd",[this._v("Opt "),t("i",{staticClass:"bi bi-option"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex gap-2 align-items-center justify-content-between"},[e("h2",[t._v("Personal Scoreboard")]),t._v(" "),e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#reset-game-history-modal"}},[t._v("\n        Reset\n      ")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Game Duration")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Played on")]),t._v(" "),e("th",{attrs:{scope:"col"}})])])}],!1,null,"bf3d4b4e",null);e.default=component.exports;installComponents(component,{TimeString:n(459).default,StopWatch:n(460).default,ConfirmModal:n(458).default,RainOverlay:n(461).default})}}]);