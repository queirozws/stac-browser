"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[5031],{55031:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var r=function(){var t=this,e=t._self._c;return e("section",{staticClass:"assets mb-4"},[t.displayTitle?e("h2",[t._v(t._s(t.displayTitle))]):t._e(),e("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.assets,(function(s,r){return e("Asset",{key:r,attrs:{asset:s,expand:t.expand,context:t.context,definition:t.definition,shown:t.shown.includes(r),id:r},on:{show:t.show}})})),1)])},i=[],a=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"asset expandable-card",attrs:{"no-body":""}},[e("b-card-header",{attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.uid,expression:"uid"}],attrs:{block:"",variant:"asset",squared:""}},[e("span",{staticClass:"chevron",attrs:{"aria-hidden":"true"}},[t.expanded?e("b-icon-chevron-down"):e("b-icon-chevron-right")],1),e("span",{staticClass:"title"},[t._v(t._s(t.asset.title||t.id))]),Array.isArray(t.asset.roles)?e("div",{staticClass:"badges ml-1"},[t.shown?e("b-badge",{staticClass:"shown",attrs:{variant:"success",title:t.$t("assets.currentlyShown")}},[e("b-icon-check"),t._v(" "+t._s(t.$t("assets.shown"))+" ")],1):t._e(),t.asset.deprecated?e("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v(t._s(t.$t("deprecated")))]):t._e(),t._l(t.asset.roles,(function(s){return e("b-badge",{key:s,staticClass:"role",attrs:{variant:"data"===s?"primary":"secondary"}},[t._v(t._s(t.displayRole(s)))])})),t.shortFileFormat?e("b-badge",{staticClass:"format",attrs:{variant:"dark",title:t.fileFormat}},[e("span",{domProps:{innerHTML:t._s(t.shortFileFormat)}})]):t._e()],2):t._e()])],1),e("b-collapse",{attrs:{id:t.uid,accordion:t.type,role:"tabpanel"},on:{input:t.collapseToggled},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[e("b-card-body",[e("b-card-title",[e("span",{domProps:{innerHTML:t._s(t.fileFormat)}})]),e("HrefActions",{attrs:{isAsset:"",data:t.asset,shown:t.shown},on:{show:t.show}}),t.asset.description?e("b-card-text",{staticClass:"mt-4"},[e("Description",{attrs:{description:t.asset.description,compact:""}})],1):t._e(),e("Metadata",{staticClass:"mt-4",attrs:{data:t.asset,context:t.context,ignoreFields:t.ignore,title:"",type:"Asset"}})],1)],1)],1)},o=[],n=s(11688),l=s(38019),c=s(35834),h=s(20629),d=s(9236),p=s(97245),u=s(83681),f={name:"Asset",components:{BCollapse:n.k,BIconCheck:l.PaS,BIconChevronDown:l.VIw,BIconChevronRight:l.xkg,Description:d["default"],HrefActions:p.Z,Metadata:()=>Promise.all([s.e(9539),s.e(2407),s.e(2768)]).then(s.bind(s,2768))},mixins:[(0,u.Z)({formatMediaType:c.formatMediaType})],props:{asset:{type:Object,required:!0},id:{type:String,required:!0},context:{type:Object,default:null},definition:{type:Boolean,default:!1},expand:{type:Boolean,default:null},shown:{type:Boolean,default:!1}},data(){return{expanded:!1,ignore:["href","title","description","type","roles","proj:bbox","proj:geometry","table:storage_options","xarray:open_kwargs","xarray:storage_options"]}},computed:{...(0,h.rn)(["buildTileUrlTemplate","useTileLayerAsFallback","url","stateQueryParameters"]),tileRendererType(){return this.buildTileUrlTemplate&&!this.useTileLayerAsFallback?"server":"client"},type(){return this.definition?"itemdef":"asset"},uid(){return`${this.type}-${this.id}`},fileFormat(){return"string"===typeof this.asset.type&&this.asset.type.length>0?this.formatMediaType(this.asset.type):null},shortFileFormat(){return"string"===typeof this.asset.type&&this.asset.type.length>0?this.formatMediaType(this.asset.type,null,{shorten:!0}):null}},created(){this.stateQueryParameters[this.type].indexOf(this.uid)>-1?this.expanded=!0:"boolean"===typeof this.expand?this.expanded=this.expand:this.expanded=!1},methods:{displayRole(t){let e=`assets.role.${t}`;return this.$te(e)?this.$t(e):t},show(){this.$emit("show",...arguments)},collapseToggled(t){let e=t?"openCollapsible":"closeCollapsible";this.$store.commit(e,{type:this.type,uid:this.uid})}}},y=f,b=s(1001),m=(0,b.Z)(y,a,o,!1,null,null,null),w=m.exports,g=s(79879),x={name:"Assets",components:{Asset:w},props:{assets:{type:Object,required:!0},shown:{type:Array,default:()=>[]},context:{type:Object,default:null},definition:{type:Boolean,default:!1},title:{type:String,default:null}},computed:{count(){return g.ZP.size(this.assets)},displayTitle(){if(null===this.title){let t=this.definition?"assets.inItems":"stacAssets";return this.$tc(t,this.count)}return this.title},expand(){return!this.definition&&(!(1!==this.count||!this.stac||!this.stac.isItem())||null)}},methods:{show(t,e,s){this.$emit("showAsset",t,e,s)}}},_=x,v=(0,b.Z)(_,r,i,!1,null,null,null),C=v.exports},97245:function(t,e,s){s.d(e,{Z:function(){return C}});var r=function(){var t=this,e=t._self._c;return t.href?e("b-button-group",{staticClass:"actions",attrs:{vertical:t.vertical,size:t.size}},[t.isBrowserProtocol&&t.isAsset?e("b-button",{attrs:{href:t.href,target:"_blank",variant:"primary"}},[t.browserCanOpenFile?e("b-icon-box-arrow-up-right"):e("b-icon-download"),t._v(" "+t._s(t.buttonText)+" ")],1):t._e(),e("CopyButton",{attrs:{variant:"primary",copyText:t.href}},[t._v(" "+t._s(t.copyButtonText)+" ")]),t.isAsset&&t.canShow&&!t.shown?e("b-button",{attrs:{variant:"primary"},on:{click:t.show}},[e("b-icon-eye",{staticClass:"mr-1"}),t.isThumbnail?[t._v(t._s(t.$t("assets.showThumbnail")))]:[t._v(t._s(t.$t("assets.showOnMap")))]],2):t._e(),t._l(t.actions,(function(s){return e("b-button",t._b({key:s.id,attrs:{variant:"primary"},on:{click:s.onClick}},"b-button",s.btnOptions,!1),[s.icon?e(s.icon,{tag:"component",staticClass:"mr-1"}):t._e(),t._v(" "+t._s(s.text)+" ")],1)}))],2):t._e()},i=[],a=s(38019),o=s(9236),n=s(43989),l=s(79879),c=s(20629),h=s(54998),d=s.n(h);class p{constructor(t,e){this.id=t,this.component=e}get btnOptions(){let t;return this.uri instanceof d()?t=this.uri.toString():"string"===typeof this.uri&&(t=this.uri),t?{href:t,target:"_blank"}:{}}get onClick(){return()=>{}}get uri(){return null}get show(){return!1}get icon(){return a.eK4}}class u extends p{constructor(t,e,s){super(s,e),this.asset=t}}var f=s(52940);class y extends u{get show(){return this.component.isBrowserProtocol&&"application/vnd.laszip+copc"===this.asset.type}get uri(){let t=new(d())("https://viewer.copc.io");return t.addQuery("copc",this.component.href),t}get text(){return f.ZP.t("actions.openIn",{service:"copc.io"})}}class b extends u{get show(){return this.component.isBrowserProtocol&&l.KN==this.asset.type}get uri(){let t=new(d())("https://geojson.io");return t.addQuery("data",`text/x-url,${this.component.href}`),t}get text(){return f.ZP.t("actions.openIn",{service:"geojson.io"})}}var m={CopcViewer:y,GeoJsonIo:b},w={},g={name:"HrefActions",components:{BIconBoxArrowUpRight:a.eK4,BIconDownload:a.f6I,BIconEye:a.unT,CopyButton:()=>Promise.resolve().then(s.bind(s,83163)),Description:o["default"],Metadata:()=>Promise.all([s.e(9539),s.e(2407),s.e(2768)]).then(s.bind(s,2768))},props:{data:{type:Object,required:!0},isAsset:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},size:{type:String,default:"md"},shown:{type:Boolean,default:!1}},computed:{...(0,c.Se)(["getRequestUrl"]),actions(){return Object.entries(this.isAsset?m:w).map((([t,e])=>new e(this.data,this,t))).filter((t=>t.show))},canShow(){return"string"===typeof this.data.type&&(!("server"!==this.tileRendererType||!l.Uz.includes(this.data.type))||(!this.isGdalVfs||"client"!==this.tileRendererType)&&(!!this.isBrowserProtocol&&!!l.CF.includes(this.data.type)))},protocol(){if("string"===typeof this.href&&this.href){let t=this.href.match(/^(\w+):\/\//);if(t)return t[1].toLowerCase()}return null},isBrowserProtocol(){return!this.protocol&&!this.isGdalVfs||l.F7.includes(this.protocol)},isThumbnail(){return this.isAsset?Array.isArray(this.data.roles)&&this.data.roles.includes("thumbnail"):"preview"===this.data.rel&&l.ZP.canBrowserDisplayImage(this.data)},isGdalVfs(){return l.ZP.isGdalVfsUri(this.data.href)},href(){if("string"!==typeof this.data.href)return null;let t=null;return this.context instanceof n.Z&&(t=this.context.getAbsoluteUrl()),this.getRequestUrl(this.data.href,t)},from(){if(this.isGdalVfs){let t=this.data.href.match(/^\/vsi([a-z\d]+)(_streaming)?\//);return this.protocolName(t)}return this.protocolName(this.protocol)},browserCanOpenFile(){if(this.isGdalVfs)return!1;if(l.ZP.canBrowserDisplayImage(this.data))return!0;if("string"===typeof this.data.type)switch(this.data.type.toLowerCase()){case"text/html":case"application/xhtml+xml":case"text/plain":case"application/pdf":return!0}return!1},buttonText(){if(this.browserCanOpenFile&&this.isBrowserProtocol)return this.$t("open");let t=!this.isBrowserProtocol&&this.from?"withSource":"generic";return this.$t(`assets.download.${t}`,{source:this.from})},copyButtonText(){let t=this.isGdalVfs?"copyGdalVfsUrl":"copyUrl",e=!this.isBrowserProtocol&&this.from?"withSource":"generic";return this.$t(`assets.${t}.${e}`,{source:this.from})}},methods:{protocolName(t){if("string"!==typeof t)return"";switch(t.toLowerCase()){case"s3":return this.$t("protocol.s3");case"abfs":case"abfss":return this.$t("protocol.azure");case"gcs":return this.$t("protocol.gcs");case"ftp":return this.$t("protocol.ftp");case"oss":return this.$t("protocol.oss");case"file":return this.$t("protocol.file")}return""},show(){let t=Object.assign({},this.data);this.isGdalVfs||(t.href=this.href),this.$emit("show",t,this.id,this.isThumbnail)}}},x=g,_=s(1001),v=(0,_.Z)(x,r,i,!1,null,null,null),C=v.exports}}]);
//# sourceMappingURL=5031.f14dde9d.js.map