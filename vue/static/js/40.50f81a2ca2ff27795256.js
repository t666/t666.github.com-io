webpackJsonp([40],{D1jB:function(t,e){},"Q+e9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Release-article"},[i("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[i("Col",{attrs:{xs:12,sm:12,lg:8}},[i("p",[t._v(t._s(t.$t("common.Title"))+" ")]),t._v(" "),i("Input",{staticStyle:{width:"120px"},attrs:{placeholder:""}})],1),t._v(" "),i("Col",{attrs:{span:"12"}},[i("p",[t._v(t._s(t.$t("common.Submission_time")))]),t._v(" "),i("DatePicker",{staticStyle:{width:"120px"},attrs:{type:"date",placeholder:""}}),t._v(" —\n      "),i("DatePicker",{staticStyle:{width:"120px"},attrs:{type:"date",placeholder:""}}),t._v(" "),i("Button",{staticClass:"mgl-10",attrs:{type:"primary"}},[t._v(t._s(t.$t("common.Query")))])],1),t._v(" "),i("Col",{staticStyle:{"line-height":"6"},attrs:{xs:12,sm:12,lg:4}},[i("Button",{attrs:{type:"primary"},on:{click:function(e){t.goto("Add_article")}}},[t._v(t._s(t.$t("common.Add_article")))])],1)],1),t._v(" "),i("Table",{style:{marginTop:"20px"},attrs:{"highlight-row":"",columns:t.columns1,data:t.data1},on:{"on-row-click":t.onedata}})],1)},staticRenderFns:[]};var a=i("VU/8")({name:"Release_article",data:function(){var t=this;return{columns1:[{title:this.$t("common.SID"),key:"SID",align:"center",width:90},{title:this.$t("common.Cover"),key:"cover",align:"center",render:function(t,e){return t("img",{attrs:{src:e.row.cover},props:{},style:{width:"50px"}},"")}},{title:this.$t("common.Title"),key:"title",align:"center",width:200},{title:this.$t("common.Author"),key:"author",align:"center",width:200},{title:this.$t("common.Submission_time"),key:"date",align:"center"},{title:this.$t("common.Operate"),key:"operation",align:"center",render:function(e,i){return e("div",[e("Button",{props:{type:"text",size:"small"},style:{marginRight:"10px",color:"#00CCFF"},on:{click:function(){}}},t.$t("common.Delete"))])}}],data1:[{SID:"1",cover:"static/img/p1.jpg",title:"普通评级方法",author:"大公数据-xxx",date:"2018-02-03",operation:""},{SID:"2",cover:"static/img/p2.jpg",title:"高级评级方法",author:"大公数据-yyy",date:"2018-02-04",operation:""},{SID:"3",cover:"static/img/p3.jpg",title:"高级评级方法",author:"大公数据-zzz",date:"2018-02-05",operation:""}]}},methods:{onedata:function(){this.$router.push("/Add_article")},goto:function(t){this.$router.push("/"+t)}}},o,!1,function(t){i("D1jB")},null,null);e.default=a.exports}});
//# sourceMappingURL=40.50f81a2ca2ff27795256.js.map