webpackJsonp([43],{c9Po:function(t,e){},wH5G:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Deleted-messages"},[o("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[o("Col",{attrs:{span:"12"}},[o("p",[t._v(t._s(t.$t("common.Release_time"))+" ")]),t._v(" "),o("DatePicker",{staticStyle:{width:"120px"},attrs:{type:"date",placeholder:""}}),t._v(" —\n      "),o("DatePicker",{staticStyle:{width:"120px"},attrs:{type:"date",placeholder:""}}),t._v(" "),o("Button",{staticClass:"mgl-10",attrs:{type:"primary"}},[t._v(t._s(t.$t("common.Query")))])],1),t._v(" "),o("Col",{staticStyle:{"line-height":"6"},attrs:{span:"12"}},[o("Button",{attrs:{type:"primary"},on:{click:function(e){t.goto("Add_message")}}},[t._v(t._s(t.$t("common.Post_new_message")))])],1)],1),t._v(" "),o("Table",{style:{marginTop:"20px"},attrs:{"highlight-row":"",columns:t.columns1,data:t.data1},on:{"on-row-click":t.onedata}})],1)},staticRenderFns:[]};var i=o("VU/8")({name:"Deleted_messages",data:function(){var t=this;return{columns1:[{title:this.$t("common.SID"),key:"SID",align:"center",width:90},{title:this.$t("common.Cover"),key:"cover",align:"center",render:function(t,e){return t("img",{attrs:{src:e.row.cover},props:{},style:{width:"50px"}},"")}},{title:this.$t("common.Title"),key:"title",align:"center",width:200},{title:this.$t("common.Release_time"),key:"date",align:"center"},{title:this.$t("common.Operate"),key:"operation",align:"center",render:function(e,o){return e("div",[e("Button",{props:{type:"text",size:"small"},style:{marginRight:"10px",color:"#00CCFF"},on:{click:function(){}}},t.$t("common.Deleted"))])}}],data1:[{SID:"1",cover:"static/img/p1.jpg",title:"普通评级方法",date:"2018-02-03 10:30:20",operation:""},{SID:"2",cover:"static/img/p2.jpg",title:"高级评级方法",date:"2018-02-04 11:30:20",operation:""},{SID:"3",cover:"static/img/p3.jpg",title:"高级评级方法",date:"2018-02-05 12:30:20",operation:""}]}},methods:{onedata:function(){},goto:function(t){this.$router.push("/"+t)}}},a,!1,function(t){o("c9Po")},null,null);e.default=i.exports}});
//# sourceMappingURL=43.c2dc72edb73ecfcf39ae.js.map