webpackJsonp([10],{VBCt:function(t,e){},"or+i":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Institutional_investment",data:function(){return{ajaxHistoryData:[],dataCount:0,pageSize:10,historyData:[],cityList:[{value:"All",label:"common.All"},{value:"Yes",label:"common.On_line"},{value:"No",label:"common.Offline"}],model1:"",columns1:[{title:this.$t("common.Institution_number"),key:"user_number",align:"center"},{title:this.$t("common.Institution_name"),key:"name",align:"center",width:200},{title:this.$t("common.Registered_address"),key:"address",align:"center",width:200},{title:this.$t("common.User_source"),key:"source",align:"center"},{title:this.$t("common.Registration_date"),key:"date",align:"center"},{title:this.$t("common.login_time"),key:"login_time",align:"center"}],data1:this.mockTableData1(),Personal_info:null}},methods:{handleListApproveHistory:function(){this.ajaxHistoryData=this.data1,this.dataCount=this.data1.length,this.data1.length<this.pageSize?this.historyData=this.ajaxHistoryData:this.historyData=this.ajaxHistoryData.slice(0,this.pageSize)},changepage:function(t){var e=(t-1)*this.pageSize,a=t*this.pageSize;this.historyData=this.ajaxHistoryData.slice(e,a)},mockTableData1:function(){for(var t=[],e=1;e<101;e++)t.push({user_number:"DG0000"+e,name:parseInt(2*Math.random()+0)>0?"工商银行上海自贸区支行":"广发银行南京鼓楼支行",address:parseInt(2*Math.random()+0)>0?"上海市浦东新区徐汇路321号":"南京市进香河路33-1号",source:parseInt(2*Math.random()+0)>0?"线下":"线上",date:this.formatTime(this.getRandomDateBetween()),login_time:this.formatDate(this.getRandomDateBetween())});return t},getRandomDateBetween:function(){var t=new Date,e=+new Date("October 10, 2017 11:13:00"),a=+new Date;return t.setTime(Math.random()*(a-e)+e),t},formatDate:function(t){var e=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var n=t.getDate();n=n<10?"0"+n:n;var i=t.getHours();i=i<10?"0"+i:i;var s=t.getMinutes();s=s<10?"0"+s:s;var o=t.getSeconds();return e+"-"+a+"-"+n+" "+i+":"+s+":"+(o=o<10?"0"+o:o)},formatTime:function(t){var e=t.getFullYear(),a=t.getMonth()+1;a=a<10?"0"+a:a;var n=t.getDate();return e+"-"+a+"-"+(n=n<10?"0"+n:n)},onedata:function(t,e){this.Personal_info=t,this.sendParams()},sendParams:function(){this.$router.push({path:"/Institutional_info",name:"Institutional_info",params:{name:"Personal-info",send_data:this.Personal_info}})}},created:function(){this.handleListApproveHistory()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Institutional-investment"},[a("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[a("Col",{attrs:{xs:12,sm:12,lg:6}},[a("p",[t._v(t._s(t.$t("common.Institution_number"))+" ")]),t._v(" "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}})],1),t._v(" "),a("Col",{attrs:{xs:12,sm:12,lg:6}},[a("p",[t._v(t._s(t.$t("common.Institution_name"))+" ")]),t._v(" "),a("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}})],1),t._v(" "),a("Col",{attrs:{xs:12,sm:12,lg:6}},[a("p",[t._v(t._s(t.$t("common.User_source"))+" ")]),t._v(" "),a("Select",{staticStyle:{width:"150px","margin-right":"10px"}},t._l(t.cityList,function(e){return a("Option",{key:e.value,attrs:{value:e.value,label:t.$t(e.label)}})})),t._v(" "),a("Button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("common.Query")))])],1)],1),t._v(" "),a("Table",{style:{marginTop:"20px"},attrs:{"highlight-row":"",columns:t.columns1,data:t.historyData},on:{"on-row-click":t.onedata}}),t._v(" "),a("Row",{staticClass:"code-row-bg page-data",attrs:{type:"flex",justify:"center"}},[a("Col",{attrs:{span:"24"}},[a("Page",{attrs:{total:t.dataCount,"page-size":t.pageSize},on:{"on-change":t.changepage}})],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(n,i,!1,function(t){a("VBCt")},null,null);e.default=s.exports}});
//# sourceMappingURL=10.c351d9282ea6c660c783.js.map