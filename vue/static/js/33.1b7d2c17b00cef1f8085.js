webpackJsonp([33],{PqB3:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"System-role"},[o("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[o("Col",{attrs:{xs:12,sm:12,lg:6}},[o("p",[t._v(t._s(t.$t("common.Username")))]),t._v(" "),o("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}})],1),t._v(" "),o("Col",{attrs:{xs:12,sm:12,lg:6}},[o("p",[t._v(t._s(t.$t("common.Role_type"))+" ")]),t._v(" "),o("Select",{staticStyle:{width:"150px","text-align":"center"}},t._l(t.category,function(t){return o("Option",{key:t.value,attrs:{value:t.value,label:t.label}})}))],1),t._v(" "),o("Col",{attrs:{xs:12,sm:12,lg:12}},[o("p",[t._v(t._s(t.$t("common.login_time"))+" ")]),t._v(" "),o("DatePicker",{staticStyle:{width:"120px"},attrs:{type:"date",placeholder:""}}),t._v(" —\n      "),o("DatePicker",{staticStyle:{width:"120px"},attrs:{type:"date",placeholder:""}}),t._v(" "),o("Button",{staticClass:"mgl-10",attrs:{type:"primary"}},[t._v(t._s(t.$t("common.Query")))])],1)],1),t._v(" "),o("Table",{style:{marginTop:"20px"},attrs:{"highlight-row":"",columns:t.columns1,data:t.data1},on:{"on-row-click":t.onedata}})],1)},staticRenderFns:[]};var a=o("VU/8")({name:"System_role",data:function(){var t=this;return{category:[{value:"All",label:this.$t("common.All")},{value:"Yes",label:this.$t("common.Ordinary_role")},{value:"No",label:this.$t("common.Management_role")}],columns1:[{title:this.$t("common.User_ID"),key:"SID",align:"center"},{title:this.$t("common.Username"),key:"user",align:"content"},{title:this.$t("common.Role_type"),key:"category",align:"name"},{title:this.$t("common.Role_power"),key:"power",align:"phone"},{title:this.$t("common.login_time"),key:"date",align:"center"},{title:this.$t("common.Role_belong"),key:"belong",align:"center",width:250},{title:this.$t("common.Operate"),key:"operation",align:"center",render:function(e,o){return e("div",[e("Button",{props:{type:"text",size:"small"},style:{color:"#00CCFF"},on:{click:function(){}}},t.$t("common.Modify")),e("Button",{props:{type:"text",size:"small"},style:{color:"#ed3f14"},on:{click:function(){}}},t.$t("common.Delete"))])}}],data1:[{SID:"0001",user:"qweqwe",category:"管理角色",power:"高级权限",date:"2018-02-03 10:30:20",belong:"客服",operation:""},{SID:"0002",user:"sdfsdf",category:"普通角色",power:"普通权限",date:"2018-02-03 10:30:20",belong:"评级分析师",operation:""},{SID:"0003",user:"qwwqf",category:"管理角色",power:"超级权限",date:"2018-02-03 10:30:20",belong:"网站管理员",operation:""},{SID:"0004",user:"xdsfsdz",category:"普通角色",power:"基本权限",date:"2018-02-03 10:30:20",belong:"个人客户",operation:""},{SID:"0005",user:"dfgdfgd",category:"普通角色",power:"基本权限",date:"2018-02-03 10:30:20",belong:"企业客户",operation:""}]}},methods:{onedata:function(){},goto:function(t){this.$router.push("/"+t)}}},n,!1,function(t){o("fWzY")},null,null);e.default=a.exports},fWzY:function(t,e){}});
//# sourceMappingURL=33.1b7d2c17b00cef1f8085.js.map