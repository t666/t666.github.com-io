webpackJsonp([9],{BNKr:function(t,e){},ebnj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Material_review",data:function(){var t=this;return{ajaxHistoryData:[],dataCount:0,pageSize:10,historyData:[],stateList:[{value:"All",label:this.$t("common.All")},{value:"Yes",label:this.$t("common.Audit_pass")},{value:"No",label:this.$t("common.Pending_review")}],columns1:[{title:this.$t("common.Rating_project_number"),key:"project_number",align:"center"},{title:this.$t("common.Rating_project_name"),key:"project_name",align:"center",width:250,render:function(e,a){return e("a",{style:{color:"#2d8cf0"},on:{click:function(){t.$router.push("/Rating_details")}}},a.row.project_name)}},{title:this.$t("common.Rating_enterprise_name"),key:"company_name",align:"center"},{title:this.$t("common.Approval_Status"),key:"state",align:"center"},{title:this.$t("common.Operate"),key:"operate",align:"center",render:function(e,a){return e("a",{style:{color:"#00CCFF"},on:{click:function(){t.$router.push("/Review_details")}}},a.row.operate)}}],data1:this.mockTableData1(),Personal_info:null}},methods:{handleListApproveHistory:function(){this.ajaxHistoryData=this.data1,this.dataCount=this.data1.length,this.data1.length<this.pageSize?this.historyData=this.ajaxHistoryData:this.historyData=this.ajaxHistoryData.slice(0,this.pageSize)},changepage:function(t){var e=(t-1)*this.pageSize,a=t*this.pageSize;this.historyData=this.ajaxHistoryData.slice(e,a)},mockTableData1:function(){for(var t=[],e=1;e<101;e++)t.push({project_number:"DG2018020300"+e,project_name:parseInt(2*Math.random()+0)>0?"福建六建集团有限公司DG2018020300"+e:"鸿兴资本运营有限公司DG2018020300"+e,company_name:parseInt(2*Math.random()+0)>0?"福建六建集团有限公司":"鸿兴资本运营有限公司",state:"待审核",operate:"审核"});return t},getRandomDateBetween:function(){var t=new Date,e=+new Date("October 10, 2017 11:13:00"),a=+new Date;return t.setTime(Math.random()*(a-e)+e),t},formatDate:function(t){var e=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var n=t.getDate();n=n<10?"0"+n:n;var r=t.getHours();r=r<10?"0"+r:r;var o=t.getMinutes();o=o<10?"0"+o:o;var i=t.getSeconds();return e+"-"+a+"-"+n+" "+r+":"+o+":"+(i=i<10?"0"+i:i)},formatTime:function(t){var e=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var n=t.getDate();return e+"-"+a+"-"+(n=n<10?"0"+n:n)},onedata:function(t,e){},sendParams:function(){this.$router.push({path:"/Institutional_info",name:"Institutional_info",params:{name:"Personal-info",send_data:this.Personal_info}})}},created:function(){this.handleListApproveHistory()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Material-review"},[a("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[a("Col",{attrs:{xs:12,sm:12,lg:8}},[a("p",[t._v(t._s(t.$t("common.Rating_project_number"))+" ")]),t._v(" "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}})],1),t._v(" "),a("Col",{attrs:{xs:12,sm:12,lg:8}},[a("p",[t._v(t._s(t.$t("common.Rating_enterprise_name"))+" ")]),t._v(" "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}})],1),t._v(" "),a("Col",{attrs:{xs:12,sm:12,lg:8}},[a("p",[t._v(t._s(t.$t("common.Approval_Status"))+" ")]),t._v(" "),a("Select",{staticStyle:{width:"150px","margin-right":"10px"}},t._l(t.stateList,function(t){return a("Option",{key:t.value,attrs:{value:t.value,label:t.label}})})),t._v(" "),a("Button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("common.Query")))])],1)],1),t._v(" "),a("Table",{style:{marginTop:"20px"},attrs:{"highlight-row":"",columns:t.columns1,data:t.historyData},on:{"on-row-click":t.onedata}}),t._v(" "),a("Row",{staticClass:"code-row-bg page-data",attrs:{type:"flex",justify:"center"}},[a("Col",{attrs:{span:"24"}},[a("Page",{attrs:{total:t.dataCount,"page-size":t.pageSize},on:{"on-change":t.changepage}})],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,r,!1,function(t){a("BNKr")},null,null);e.default=o.exports}});
//# sourceMappingURL=9.8773a4b8173cb68a939e.js.map