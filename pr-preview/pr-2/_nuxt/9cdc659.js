(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{476:function(e,t,r){var content=r(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(10).default)("dec960ba",content,!0,{sourceMap:!1})},502:function(e,t,r){"use strict";r(476)},503:function(e,t,r){var c=r(8)(!1);c.push([e.i,".search-bar[data-v-087eadd1]{display:flex;gap:1rem;flex-direction:column}@media(min-width: 576px){.search-bar[data-v-087eadd1]{flex-direction:row}}.search-bar .input-container[data-v-087eadd1]{flex:1 0;position:relative}.search-bar .input-container input[data-v-087eadd1]::-webkit-search-cancel-button{-webkit-appearance:none}.search-bar .input-container .clear-input[data-v-087eadd1]{position:absolute;top:0;bottom:0;right:0;display:inline-flex;place-content:center;place-items:center;padding-inline:1rem;border:none;cursor:pointer}.search-bar *[data-v-087eadd1]:not(.input-container){flex:0 1;white-space:nowrap}.error-box[data-v-087eadd1]{display:flex;place-content:center;place-items:center;text-align:center}.error-box[data-v-087eadd1]:not(:empty){margin-top:3rem}#card-container[data-v-087eadd1]:empty{display:none}.card img[data-v-087eadd1],.card iframe[data-v-087eadd1]{background-color:#fff;aspect-ratio:1200/630;object-fit:cover;object-position:center}.card .card-text[data-v-087eadd1]{opacity:.7;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}",""]),e.exports=c},536:function(e,t,r){"use strict";r.r(t);r(30),r(38),r(20),r(57),r(58);var c=r(17),n=r(113),o=r(25),l=(r(32),r(13),r(29),r(39),r(28),r(76),r(56),r(55),r(539)),d=r(501),h=r(524),f=r(542),v=r(525),y=r(492),m=r(496),C=r.n(m),_=r(148);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={name:"ResourcesOverview",data:function(){return{sites:[],categories:[],checkedCategories:[],currentSearchInput:"",masonry:void 0}},fetch:function(){var e=this;return Promise.all([_.a.getEntries({content_type:"site",order:"-sys.createdAt"}),_.a.getEntries({content_type:"category",order:"-sys.createdAt"})]).then((function(t){var r=Object(o.a)(t,2),c=r[0],n=r[1];e.sites=Object(l.a)(c.items),e.categories=n.items,0===e.checkedCategories.length&&(e.checkedCategories=n.items.map((function(e){return e.sys.id})))})).catch(console.error)},computed:{preferGrid:function(){return this.$store.getters["settings/isPreferringGrid"]},filteredSites:function(){var e=this,t=this.sites;if(this.currentSearchInput){var r=Object(d.a)(this.currentSearchInput);t=t.filter((function(e){return Object(h.a)(Object(d.a)(e.fields.title),r)}))}return t=t.filter((function(t){return!Array.isArray(t.fields.categories)||t.fields.categories.some((function(t){return e.checkedCategories.includes(t.sys.id)}))})),t},sortedCategories:function(){return Object(n.a)(this.categories).sort((function(e,t){return e.fields.title.localeCompare(t.fields.title)}))},nothingFoundMessage:function(){switch(Object(f.a)(Object(d.a)(this.currentSearchInput))){case"abi":case"tobias":case"topse":case"tobse":case"tobi":return"RIP Japan tea cup 2019 :(";case"winzling":case"hobbit":case"midget":case"pavel":return"Thats a very HUGE input!";case"kunal":return"Zzzzzzzzzzzzz...";case"oguzhan":case"osan":case"osantor":case"berber":case"melih":return"Gülme vuruşu!";case"nami":case"namy":case"sadeghnia":case"namysade":return"Manuuuuu!";case"bilal":return"CRYPTO!!!!!";case"niko":case"mestanis":case"nibones":case"grieche":return"Jaaaaaa, lass mal times...";case"thao":return"OOOOOOHHHHH VIETNAM!";case"henni":case"henricke":return"You're screaming again!";case"bo":case"boc":case"bad oeynhausen":return"Winner of the Worlds Best City Award!";case"maxi":case"verstappen":return'"MAX VERSTAPPEN YOU ARE THE WORLD CHAMPION!"';case"lewis":case"hamilton":return"Reckless driver!";case"perez":case"pérez":case"checko":return"Mexican Minister of Defence";default:return"Wow, such empty"}}},watch:{filteredSites:function(){var e=this;this.masonry&&this.$nextTick((function(){e.masonry.reloadItems(),e.layoutMasonry()}))},currentSearchInput:function(){var e=w({},this.$route.query);this.currentSearchInput?e.q=this.currentSearchInput:delete e.q,this.$route.query.q!==e.q&&this.$router.replace({path:this.$route.path,query:e})},checkedCategories:function(){if(0!==this.categories.length){var e=w({},this.$route.query);this.checkedCategories.length>0&&this.checkedCategories.length<this.categories.length?e.categories=this.checkedCategories:delete e.categories,Object(v.a)(Object(y.a)(this.$route.query.categories),Object(y.a)(e.categories))||this.$router.replace({path:this.$route.path,query:e})}},preferGrid:function(){this.preferGrid?this.disableMasonry():this.enableMasonry()}},mounted:function(){this.preferGrid||this.enableMasonry(),"q"in this.$route.query&&(this.currentSearchInput=this.$route.query.q),"categories"in this.$route.query&&(this.checkedCategories=Array.isArray(this.$route.query.categories)?this.$route.query.categories:[this.$route.query.categories])},methods:{selectAllCategories:function(){this.checkedCategories=this.categories.map((function(e){return e.sys.id}))},deselectAllCategories:function(){this.checkedCategories=[]},toggleGrid:function(){this.preferGrid?this.$store.dispatch("settings/disablePreferGrid"):this.$store.dispatch("settings/enablePreferGrid")},enableMasonry:function(){this.masonry=new C.a(this.$refs.cardContainer,{itemSelector:".col",percentPosition:!0})},disableMasonry:function(){this.masonry&&(this.masonry.destroy(),this.masonry=void 0)},layoutMasonry:function(){this.masonry&&this.masonry.layout()}}},x=(r(502),r(2)),component=Object(x.a)(O,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"resources-overview"},[t("div",{staticClass:"search-bar mb-3"},[t("div",{staticClass:"input-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.currentSearchInput,expression:"currentSearchInput"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search...","aria-label":"search resources"},domProps:{value:e.currentSearchInput},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.target.blur()},input:function(t){t.target.composing||(e.currentSearchInput=t.target.value)}}}),e._v(" "),e.currentSearchInput?t("div",{staticClass:"btn btn-icon clear-input",attrs:{role:"button",title:"Reset input"},on:{click:function(t){e.currentSearchInput=""}}},[t("i",{staticClass:"bi bi-x"})]):e._e()]),e._v(" "),t("button",{staticClass:"btn btn-primary d-none d-sm-inline-block",attrs:{type:"button",title:"Toggle grid layout"},on:{click:e.toggleGrid}},[e.preferGrid?t("i",{staticClass:"bi bi-bold bi-grid"}):t("i",{staticClass:"bi bi-bold bi-columns-gap"})]),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"error-box"},[e.$fetchState.pending?t("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[t("span",{staticClass:"visually-hidden"},[e._v("Loading...")])]):e.$fetchState.error?t("p",[e._v("An error occurred :(")]):0===e.filteredSites.length?t("div",{staticClass:"display-5"},[e._v("\n      "+e._s(e.nothingFoundMessage)+"\n    ")]):e._e()]),e._v(" "),t("div",{ref:"cardContainer",staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3",attrs:{id:"card-container"}},e._l(e.filteredSites,(function(r){return t("div",{key:r.fields.title,staticClass:"col"},[t("article",{staticClass:"card"},[r.fields.imageSrc?t("iframe",{attrs:{"aria-label":"Preview of ".concat(r.fields.title?r.fields.title:"the site"),role:"img",frameborder:"0",sandbox:"",src:"data:text/html,<style>body{background:url('".concat(r.fields.imageSrc,"') center/cover no-repeat;padding:0;margin:0;overflow:hidden}</style>")}}):e._e(),e._v(" "),t("div",{staticClass:"card-body"},[r.fields.title?t("h2",{staticClass:"card-title"},[e._v("\n            "+e._s(r.fields.title)+"\n          ")]):e._e(),e._v(" "),r.fields.description?t("p",{staticClass:"card-text mb-0"},[e._v("\n            "+e._s(r.fields.description)+"\n          ")]):e._e(),e._v(" "),Array.isArray(r.fields.categories)?t("div",{staticClass:"d-flex flex-wrap gap-1 mt-2 mb-3"},e._l(r.fields.categories,(function(r){return t("span",{key:r.fields.title,staticClass:"badge rounded-pill bg-secondary text-dark"},[e._v("#"+e._s(r.fields.title))])})),0):e._e(),e._v(" "),r.fields.url?t("a",{staticClass:"btn btn-primary",attrs:{href:r.fields.url,target:"_blank"}},[e._v("Visit"),t("i",{staticClass:"bi bi-bold bi-box-arrow-up-right ms-2"})]):e._e()])])])})),0),e._v(" "),t("div",{staticClass:"offcanvas offcanvas-end",attrs:{id:"offcanvasCategories",tabindex:"-1","aria-labelledby":"offcanvasCategoriesLabel"}},[e._e(" categories offcanvas "),e._v(" "),e._m(1),e._v(" "),t("div",{staticClass:"offcanvas-body pt-0"},[t("form",e._l(e.sortedCategories,(function(r){return t("div",{key:r.fields.title,staticClass:"form-check"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCategories,expression:"checkedCategories"}],staticClass:"form-check-input",attrs:{id:r.fields.title,type:"checkbox"},domProps:{value:r.sys.id,checked:Array.isArray(e.checkedCategories)?e._i(e.checkedCategories,r.sys.id)>-1:e.checkedCategories},on:{change:function(t){var c=e.checkedCategories,n=t.target,o=!!n.checked;if(Array.isArray(c)){var l=r.sys.id,d=e._i(c,l);n.checked?d<0&&(e.checkedCategories=c.concat([l])):d>-1&&(e.checkedCategories=c.slice(0,d).concat(c.slice(d+1)))}else e.checkedCategories=o}}}),e._v(" "),t("label",{staticClass:"form-check-label",attrs:{for:r.fields.title}},[e._v("\n            "+e._s(r.fields.title)+"\n          ")])])})),0),e._v(" "),t("div",{staticClass:"row row-cols-2 mt-3"},[t("div",{staticClass:"col"},[t("button",{staticClass:"btn btn-primary w-100",attrs:{disabled:e.categories.length===e.checkedCategories.length,type:"button"},on:{click:e.selectAllCategories}},[e._v("\n            Select All\n          ")])]),e._v(" "),t("div",{staticClass:"col"},[t("button",{staticClass:"btn btn-primary w-100",attrs:{disabled:0===e.checkedCategories.length,type:"button"},on:{click:e.deselectAllCategories}},[e._v("\n            Deselect All\n          ")])])])]),e._v(" "),e._e(" /categories offcanvas ")]),e._v(" "),e._e(" /#resources-overview-page ")])}),[function(){var e=this._self._c;return e("button",{staticClass:"btn btn-primary w-100",attrs:{type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasCategories","aria-controls":"offcanvasCategories"}},[this._v("\n      Filter"),e("i",{staticClass:"bi bi-bold bi-funnel ms-2"})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"offcanvas-header"},[t("h5",{staticClass:"offcanvas-title",attrs:{id:"offcanvasCategoriesLabel"}},[e._v("Categories")]),e._v(" "),t("button",{staticClass:"btn-close text-reset",attrs:{type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"}})])}],!1,null,"087eadd1",null);t.default=component.exports}}]);