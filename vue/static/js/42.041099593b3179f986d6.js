webpackJsonp([42],{SVX2:function(t,s){},"hv/L":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("sYY+"),o=e.n(a),n={data:function(){return{ContractName:"",ContractUse:"",editorContent:""}},methods:{succ:function(){var t=this;this.$Message.success(this.$t("common.Save_success")),setTimeout(function(){t.$router.push("/Release_message")},2e3)},getContent:function(){alert(this.editorContent)},getParams:function(){var t=this.$route.params.send_data;t&&(this.ContractName=t.name,this.ContractUse=t.use,this.editorContent=t.content)},cancel:function(){this.$router.push("/Release_message")}},mounted:function(){var t=new o.a(this.$refs.editor);t.customConfig.onchange=function(t){},t.create(),this.getParams(),1==this.isban&&t.$textElem.attr("contenteditable",!1)}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Add-message"},[e("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[e("Col",{staticClass:"font-16",attrs:{span:"4"}},[e("h3",[t._v(t._s(t.$t("common.Post_new_message")))])]),t._v(" "),e("Col",{attrs:{span:"5"}}),t._v(" "),e("Col",{attrs:{span:"5"}}),t._v(" "),e("Col",{attrs:{span:"8"}},[e("Button",{staticClass:"mgl-10",attrs:{type:"info"},on:{click:t.succ}},[t._v(t._s(t.$t("common.Release")))]),t._v(" "),e("Button",{staticClass:"mgl-20",attrs:{type:"warning"},on:{click:t.cancel}},[t._v(t._s(t.$t("common.Cancel")))])],1)],1),t._v(" "),e("Row",{staticClass:"code-row-bg contract-row",attrs:{type:"flex",justify:"start"}},[e("Col",{staticClass:"text-right",attrs:{span:"4"}},[t._v(t._s(t.$t("common.Title"))+"：")]),t._v(" "),e("Col",{staticClass:"mgl-20",attrs:{span:"6"}},[e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:""},model:{value:t.ContractName,callback:function(s){t.ContractName=s},expression:"ContractName"}})],1)],1),t._v(" "),e("Row",{staticClass:"code-row-bg text-edit",attrs:{type:"flex",justify:"start"}},[e("Col",{staticClass:"text-right",attrs:{span:"4"}},[t._v(t._s(t.$t("common.Content"))+"：")]),t._v(" "),e("Col",{staticClass:"mgl-20",attrs:{md:18,lg:14}},[e("div",{ref:"editor",staticStyle:{"text-align":"left"}},[e("p",[t._v(t._s(t.editorContent))])])])],1),t._v(" "),e("Row",{staticClass:"code-row-bg message-upload",attrs:{type:"flex",justify:"start"}},[e("Col",{staticClass:"text-right",attrs:{span:"4"}},[t._v(t._s(t.$t("common.Cover"))+"：")]),t._v(" "),e("Col",{staticClass:"mgl-20 z-99999",attrs:{span:"2"}},[e("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[e("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[t._v(t._s(t.$t("common.Selecte_files")))])],1)],1),t._v(" "),e("Col",{attrs:{span:"4"}},[e("p",{staticClass:"col-gray mgl-30"},[t._v(t._s(t.$t("common.No_files_selected")))])])],1)],1)},staticRenderFns:[]};var r=e("VU/8")(n,c,!1,function(t){e("SVX2")},null,null);s.default=r.exports}});
//# sourceMappingURL=42.041099593b3179f986d6.js.map