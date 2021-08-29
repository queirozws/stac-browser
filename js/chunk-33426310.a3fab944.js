(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33426310"],{"188f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"items mb-4"},[i("h2",[t._v(" Items "),t.api?t._e():[t._v("("+t._s(t.items.length)+")")]],2),t.api?i("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2 ml-3",attrs:{variant:"outline-primary"}},[i("b-icon-search"),t._v(" Filter ")],1):t._e(),i("b-collapse",{attrs:{id:"itemFilter"}},[i("ItemFilter",{attrs:{stac:t.stac,collectionOnly:!0},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1)]:t._e(),t.chunkedItems.length>0?i("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(e){return i("Item",{key:e.href,attrs:{item:e,selected:t.selected}})})),1):i("p",[t._v("Sorry, no items found.")]),t.api?i("Pagination",{attrs:{pagination:t.pagination,placement:"bottom"},on:{paginate:t.paginate}}):t.hasMore?i("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},a=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("a9e3"),i("fb6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-card",t._b({directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!this.data},attrs:{"img-top":""}},"b-card",t.cardProps,!1),[i("b-card-title",[i("StacLink",{staticClass:"stretched-link",attrs:{link:t.item,title:t.title}})],1),i("b-card-text",[i("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0?i("b-card-text",t._l(t.fileFormats,(function(e){return i("b-badge",{key:e,staticClass:"mr-1 mt-1",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(e)))])})),1):t._e()],1)}),r=[],o=i("5530"),c=(i("7db0"),i("4de4"),i("d81d"),i("07ac"),i("caad"),i("2532"),i("2f62")),l=i("b701"),u=i("2a32"),h={name:"Item",components:{StacLink:l["a"]},props:{item:{type:Object,required:!0},selected:{type:Array,default:function(){return[]}}},data:function(){return{showThumbnail:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["getStac"])),{},{cardProps:function(){var t=this,e={};return this.showThumbnail&&this.thumbnail&&(e["img-src"]=this.thumbnail.href,e["img-alt"]=this.thumbnail.title),Array.isArray(this.selected)&&this.selected.find((function(e){return t.data.equals(e)}))&&(e["border-variant"]="danger"),e},data:function(){return this.item instanceof u["a"]?this.item:this.getStac(this.item.href)},thumbnail:function(){if(this.data){var t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},title:function(){return this.data?this.data.properties.title||this.data.id:null},extent:function(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats:function(){return this.data?Object.values(this.data.assets).filter((function(t){return Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type})).map((function(t){return t.type})).filter((function(t,e,i){return i.indexOf(t)===e})):[]}}),methods:{load:function(t){t&&(this.showThumbnail=!0),this.item instanceof u["a"]||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},p=h,f=(i("83d2"),i("2877")),d=Object(f["a"])(p,s,r,!1,null,null,null),m=d.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-button-group",{class:t.classes},[i("b-button",{attrs:{disabled:!t.pagination.first,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),i("b-button",{attrs:{disabled:!t.pagination.prev,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),i("b-button",{attrs:{disabled:!t.pagination.next,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?i("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},g=[],v={name:"Pagination",props:{pagination:{type:Object,default:function(){return{}}},placement:{type:String}},computed:{classes:function(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate:function(t){this.$emit("paginate",t,this.placement)}}},O=v,w=Object(f["a"])(O,b,g,!1,null,null,null),y=w.exports,j=i("5843"),k=i("7386"),I={name:"Items",components:{BCollapse:j["a"],BIconSearch:k["o"],Item:m,ItemFilter:function(){return Promise.all([i.e("chunk-45b1a3e6"),i.e("chunk-02bd5aca")]).then(i.bind(null,"5f67"))},Pagination:y},props:{items:{type:Array,required:!0},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:function(){return{}}},pagination:{type:Object,default:function(){return{}}},chunkSize:{type:Number,default:90},selected:{type:Array,default:function(){return[]}}},data:function(){return{shownItems:this.chunkSize,filters:this.apiFilters}},computed:{hasMore:function(){return this.items.length>this.shownItems},chunkedItems:function(){return!this.api&&this.items.length>this.chunkSize?this.items.slice(0,this.shownItems):this.items}},watch:{filters:{deep:!0,handler:function(t){this.$emit("filterItems",t)}}},methods:{showMore:function(){this.shownItems+=this.chunkSize},paginate:function(t,e){"bottom"===e&&this.$refs.topPagination&&this.$refs.topPagination.$el.scrollIntoView({behavior:"smooth",block:"start"}),this.$emit("paginate",t)}}},_=I,x=Object(f["a"])(_,n,a,!1,null,null,null);e["a"]=x.exports},"2d3b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[t.root?i("b-row",[i("b-col",{staticClass:"left"},[i("ItemFilter",{attrs:{stac:t.root,title:"",value:t.filters},on:{input:t.setFilters}})],1),i("b-col",{staticClass:"right"},[null===t.loading?i("b-alert",{attrs:{variant:"light",show:""}},[t._v("Please modify the search criteria.")]):!0===t.loading?i("div",{staticClass:"loading text-center"},[i("b-spinner",{attrs:{label:"Loading..."}})],1):0===t.apiItems.length?i("b-alert",{attrs:{variant:"info",show:""}},[t._v("Sorry, no items match the given criteria.")]):[i("Map",{attrs:{stac:t.root,stacLayerData:t.itemCollection},on:{mapClicked:t.mapClicked}}),i("Items",{attrs:{stac:t.root,items:t.apiItems,api:!0,allowFilter:!1,selected:t.selected,pagination:t.itemPages},on:{paginate:t.paginateItems}})]],2)],1):i("div",{staticClass:"loading text-center"},[i("b-spinner",{attrs:{label:"Loading..."}})],1)],1)},a=[],s=i("1da1"),r=i("5530"),o=(i("96cf"),i("d3b7"),i("3ca3"),i("ddb0"),i("7db0"),i("ac1f"),i("5319"),i("188f")),c=i("2f62"),l=i("025e"),u="Search",h={name:"Search",components:{ItemFilter:function(){return Promise.all([i.e("chunk-45b1a3e6"),i.e("chunk-02bd5aca")]).then(i.bind(null,"5f67"))},Items:o["a"],Map:function(){return i.e("chunk-538bc566").then(i.bind(null,"a0be"))}},data:function(){return{loading:null,url:null,method:"get",filters:{},selected:[]}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["c"])(["apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter"])),Object(c["b"])(["root","searchLinks","supportsSearch"])),{},{itemCollection:function(){return{type:"FeatureCollection",features:this.apiItems,links:[]}},itemPages:function(){var t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&(t.first=l["a"].addFiltersToLink(this.apiItemsLink,this.apiItemsFilter)),t},searchLink:function(){return this.searchLinks.find((function(t){return"POST"!==t.method}))}}),watch:{root:{immediate:!0,handler:function(t,e){t&&t!==e&&this.showPage()}}},methods:{setFilters:function(t){var e=arguments,i=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.length>1&&void 0!==e[1]&&e[1],i.filters=t,!a){n.next=7;break}i.$store.commit("resetApiItems"),i.loading=null,n.next=9;break;case 7:return n.next=9,i.filterItems(t);case 9:case"end":return n.stop()}}),n)})))()},showPage:function(){this.supportsSearch||this.$router.replace({path:"/"}),this.$store.commit("showPage",{title:u}),this.searchLink?this.$store.commit("setApiItemsLink",this.searchLink):this.$root.$emit("error",null,"Sorry, STAC Browser only supports search using `GET` requests.")},paginateItems:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,e.$store.dispatch("loadApiItems",t);case 3:n=i.sent,e.handleResponse(n),i.next=10;break;case 7:i.prev=7,i.t0=i["catch"](0),e.$root.$emit("error",i.t0,"Sorry, loading the list of STAC Items failed.");case 10:case"end":return i.stop()}}),i,null,[[0,7]])})))()},filterItems:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.loading=!0,i.prev=1,i.next=4,e.$store.dispatch("filterApiItems",{link:e.searchLink,filters:t});case 4:n=i.sent,e.handleResponse(n),i.next=11;break;case 8:i.prev=8,i.t0=i["catch"](1),e.$root.$emit("error",i.t0,"Sorry, loading a filtered list of STAC Items failed.");case 11:return i.prev=11,e.loading=!1,i.finish(11);case 14:case"end":return i.stop()}}),i,null,[[1,8,11,14]])})))()},handleResponse:function(t){this.$store.commit("showPage",{title:u,url:t.config.url})},mapClicked:function(t){"Feature"===t.type&&(this.selected=[t.data])}}},p=h,f=(i("b62f"),i("2877")),d=Object(f["a"])(p,n,a,!1,null,"11436dac",null);e["default"]=d.exports},5843:function(t,e,i){"use strict";i.d(e,"a",(function(){return B}));var n,a=i("2b0e"),s=i("c637"),r="show",o=i("e863"),c=i("0056"),l=i("a723"),u=i("9b76"),h=i("906c"),p=i("6b77"),f=i("58f2"),d=i("d82f"),m=i("cf75"),b=i("90ef"),g=i("602d"),v=i("8c18"),O=i("b42e"),w=function(t){Object(h["D"])(t,"height",0),Object(h["z"])((function(){Object(h["v"])(t),Object(h["D"])(t,"height","".concat(t.scrollHeight,"px"))}))},y=function(t){Object(h["y"])(t,"height")},j=function(t){Object(h["D"])(t,"height","auto"),Object(h["D"])(t,"display","block"),Object(h["D"])(t,"height","".concat(Object(h["i"])(t).height,"px")),Object(h["v"])(t),Object(h["D"])(t,"height",0)},k=function(t){Object(h["y"])(t,"height")},I={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},_={enter:w,afterEnter:y,leave:j,afterLeave:k},x={appear:Object(m["c"])(l["f"],!1)},S=a["a"].extend({name:s["r"],functional:!0,props:x,render:function(t,e){var i=e.props,n=e.data,a=e.children;return t("transition",Object(O["a"])(n,{props:I,on:_},{props:i}),a)}});function E(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function $(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?E(Object(i),!0).forEach((function(e){A(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function A(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var P=Object(p["d"])(s["q"],"toggle"),C=Object(p["d"])(s["q"],"request-state"),N=Object(p["e"])(s["q"],"accordion"),F=Object(p["e"])(s["q"],"state"),L=Object(p["e"])(s["q"],"sync-state"),T=Object(f["a"])("visible",{type:l["f"],defaultValue:!1}),R=T.mixin,q=T.props,D=T.prop,M=T.event,z=Object(m["d"])(Object(d["l"])($($($({},b["b"]),q),{},{accordion:Object(m["c"])(l["q"]),appear:Object(m["c"])(l["f"],!1),isNav:Object(m["c"])(l["f"],!1),tag:Object(m["c"])(l["q"],"div")})),s["q"]),B=a["a"].extend({name:s["q"],mixins:[b["a"],R,v["a"],g["a"]],props:z,data:function(){return{show:this[D],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(n={},A(n,D,(function(t){t!==this.show&&(this.show=t)})),A(n,"show",(function(t,e){t!==e&&this.emitState()})),n),created:function(){this.show=this[D]},mounted:function(){var t=this;this.show=this[D],this.listenOnRoot(P,this.handleToggleEvt),this.listenOnRoot(N,this.handleAccordionEvt),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(C,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&o["g"]&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){Object(p["c"])(t,window,"resize",this.handleResize,c["Q"]),Object(p["c"])(t,window,"orientationchange",this.handleResize,c["Q"])},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(c["L"])},onAfterEnter:function(){this.transitioning=!1,this.$emit(c["M"])},onLeave:function(){this.transitioning=!0,this.$emit(c["t"])},onAfterLeave:function(){this.transitioning=!1,this.$emit(c["s"])},emitState:function(){var t=this.show,e=this.accordion,i=this.safeId();this.$emit(M,t),this.emitOnRoot(F,i,t),e&&t&&this.emitOnRoot(N,i,e)},emitSync:function(){this.emitOnRoot(L,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=Object(h["o"])(t,r);Object(h["x"])(t,r);var i="block"===Object(h["k"])(t).display;return e&&Object(h["b"])(t,r),i},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(h["k"])(this.$el).display&&(!Object(h["u"])(e,".nav-link,.dropdown-item")&&!Object(h["e"])(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvt:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvt:function(t,e){var i=this.accordion,n=this.show;if(i&&i===e){var a=t===this.safeId();(a&&!n||!a&&n)&&this.toggle()}},handleResize:function(){this.show="block"===Object(h["k"])(this.$el).display}},render:function(t){var e=this.appear,i=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(u["e"],this.slotScope));return t(S,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[i])}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),a=i("577e"),s=i("5899"),r="["+s+"]",o=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),l=function(t){return function(e){var i=a(n(e));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,i){var n=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var s,r;return a&&"function"==typeof(s=e.constructor)&&s!==i&&n(r=s.prototype)&&r!==i.prototype&&a(t,r),t}},"83d2":function(t,e,i){"use strict";i("96a9")},"96a9":function(t,e,i){},a9e3:function(t,e,i){"use strict";var n=i("83ab"),a=i("da84"),s=i("94ca"),r=i("6eeb"),o=i("5135"),c=i("c6b6"),l=i("7156"),u=i("d9b5"),h=i("c04e"),p=i("d039"),f=i("7c73"),d=i("241c").f,m=i("06cf").f,b=i("9bf2").f,g=i("58a8").trim,v="Number",O=a[v],w=O.prototype,y=c(f(w))==v,j=function(t){if(u(t))throw TypeError("Cannot convert a Symbol value to a number");var e,i,n,a,s,r,o,c,l=h(t,"number");if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(s=l.slice(2),r=s.length,o=0;o<r;o++)if(c=s.charCodeAt(o),c<48||c>a)return NaN;return parseInt(s,n)}return+l};if(s(v,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var k,I=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof I&&(y?p((function(){w.valueOf.call(i)})):c(i)!=v)?l(new O(j(e)),i,I):j(e)},_=n?d(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;_.length>x;x++)o(O,k=_[x])&&!o(I,k)&&b(I,k,m(O,k));I.prototype=w,w.constructor=I,r(a,v,I)}},b62f:function(t,e,i){"use strict";i("c229")},c229:function(t,e,i){}}]);
//# sourceMappingURL=chunk-33426310.a3fab944.js.map