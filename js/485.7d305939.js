"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[485],{6485:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("b-button-group",{attrs:{title:"Sort",size:"sm"}},[e("b-button",{attrs:{variant:"outline-primary",title:"Sort in acending order (A-Z)",pressed:1===t.value||t.enforce&&-1!==t.value},on:{click:function(e){return t.toggle(1)}}},[e("b-icon-sort-alpha-down"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("Ascending")])],1),e("b-button",{attrs:{variant:"outline-primary",title:"Sort in descending order (Z-A)",pressed:-1===t.value},on:{click:function(e){return t.toggle(-1)}}},[e("b-icon-sort-alpha-up"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("Descending")])],1)],1)},o=[],a=n(8019),s={id:"SortButtons",components:{BIconSortAlphaDown:a.WvV,BIconSortAlphaUp:a.LfJ},props:{value:{type:Number,default:0},enforce:{type:Boolean,default:!1}},methods:{toggle(t){let e=this.enforce?1:0;this.value!==t&&(e=t),this.$emit("input",e)}}},l=s,i=n(1001),u=(0,i.Z)(l,r,o,!1,null,null,null),c=u.exports}}]);
//# sourceMappingURL=485.7d305939.js.map