webpackJsonp([20],{"0uOu":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Wait-article"},[o("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[o("Col",{attrs:{xs:12,sm:12,lg:8}},[o("p",[t._v(t._s(t.$t("common.Title"))+" ")]),t._v(" "),o("Input",{staticStyle:{width:"120px"},attrs:{placeholder:""}})],1),t._v(" "),o("Col",{attrs:{span:"12"}},[o("p",[t._v(t._s(t.$t("common.Submission_time")))]),t._v(" "),o("DatePicker",{staticStyle:{width:"120px"},attrs:{type:"date",placeholder:""}}),t._v(" —\n      "),o("DatePicker",{staticStyle:{width:"120px"},attrs:{type:"date",placeholder:""}}),t._v(" "),o("Button",{staticClass:"mgl-10",attrs:{type:"primary"}},[t._v(t._s(t.$t("common.Query")))])],1),t._v(" "),o("Col",{staticStyle:{"line-height":"6"},attrs:{xs:12,sm:12,lg:4}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.goto("Add_article")}}},[t._v(t._s(t.$t("common.Add_article")))])],1)],1),t._v(" "),o("Table",{style:{marginTop:"20px"},attrs:{"highlight-row":"",columns:t.columns1,data:t.data1},on:{"on-row-click":t.onedata}})],1)},staticRenderFns:[]};var n=o("VU/8")({name:"Wait_article",data:function(){var t=this;return{columns1:[{title:this.$t("common.SID"),key:"SID",align:"center",width:90},{title:this.$t("common.Cover"),key:"cover",align:"center",render:function(t,e){return t("img",{attrs:{src:e.row.cover},props:{},style:{width:"50px"}},"")}},{title:this.$t("common.Title"),key:"title",align:"center",width:200},{title:this.$t("common.Author"),key:"author",align:"center",width:200},{title:this.$t("common.Submission_time"),key:"date",align:"center"},{title:this.$t("common.Operate"),key:"operation",align:"center",render:function(e,o){return e("div",[e("Button",{props:{type:"text",size:"small"},style:{marginRight:"10px",color:"#00CCFF"},on:{click:function(){}}},t.$t("common.Adopt")),e("Button",{props:{type:"text",size:"small"},style:{marginRight:"10px"},on:{click:function(){}}},t.$t("common.Overrule")),e("Button",{props:{type:"text",size:"small"},style:{color:"#BCBCBC"},on:{click:function(){}}},t.$t("common.Edit"))])}}],data1:[{SID:"1",cover:"static/img/p1.jpg",title:"普通评级方法",author:"大公数据-xxx",date:"2018-02-03",operation:""},{SID:"2",cover:"static/img/p2.jpg",title:"高级评级方法",author:"大公数据-yyy",date:"2018-02-04",operation:""},{SID:"3",cover:"static/img/p3.jpg",title:"高级评级方法",author:"大公数据-zzz",date:"2018-02-05",operation:""}]}},methods:{onedata:function(){this.$router.push("/Add_article")},goto:function(t){this.$router.push("/"+t)}}},i,!1,function(t){o("14Gj")},null,null);e.default=n.exports},"14Gj":function(t,e){}});
//# sourceMappingURL=20.42406a31b5ccaaf97b00.js.map