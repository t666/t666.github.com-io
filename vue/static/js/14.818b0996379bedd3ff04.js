webpackJsonp([14],{"0Mc2":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"Trade_record",data:function(){return{ajaxHistoryData:[],dataCount:0,pageSize:10,historyData:[],columns1:[{title:this.$t("common.Contract_No"),key:"contract_number",align:"center"},{title:this.$t("common.Lending_product_number"),key:"product_number",align:"center"},{title:this.$t("common.Payment_order_number"),key:"order_number",align:"center"},{title:this.$t("common.Actual_amount"),key:"amount",align:"center"},{title:this.$t("common.Payer_account"),key:"account",align:"center"},{title:this.$t("common.Payment_date"),key:"time",align:"center"},{title:this.$t("common.Trading_state"),key:"state",align:"center",width:120}],data1:this.mockTableData1(),Personal_info:null,rom:""}},methods:{handleListApproveHistory:function(){this.ajaxHistoryData=this.data1,this.dataCount=this.data1.length,this.data1.length<this.pageSize?this.historyData=this.ajaxHistoryData:this.historyData=this.ajaxHistoryData.slice(0,this.pageSize)},changepage:function(t){var a=(t-1)*this.pageSize,e=t*this.pageSize;this.historyData=this.ajaxHistoryData.slice(a,e)},mockTableData1:function(){for(var t=[],a=1;a<101;a++)this.random(),t.push({contract_number:"DG20180312000"+a,product_number:"8371029873109"+a,order_number:"2018031259001024"+a,amount:parseInt(10*Math.random()+1)+",000.00",account:"60138264020029515"+parseInt(9*Math.random()+1),time:this.rom>0?"--":this.formatTime(this.getRandomDateBetween()),state:this.rom>0?this.$t("common.Not_received"):this.$t("common.Received")});return t},random:function(){this.rom=parseInt(2*Math.random()+0)},getRandomDateBetween:function(){var t=new Date,a=+new Date("October 10, 2017 11:13:00"),e=+new Date;return t.setTime(Math.random()*(e-a)+a),t},formatDate:function(t){var a=t.getFullYear(),e=t.getMonth()+1;e=e<10?"0"+e:e;var n=t.getDate();n=n<10?"0"+n:n;var r=t.getHours();r=r<10?"0"+r:r;var o=t.getMinutes();o=o<10?"0"+o:o;var s=t.getSeconds();return a+"-"+e+"-"+n+" "+r+":"+o+":"+(s=s<10?"0"+s:s)},formatTime:function(t){var a=t.getFullYear(),e=t.getMonth()+1;e=e<10?"0"+e:e;var n=t.getDate();return a+"-"+e+"-"+(n=n<10?"0"+n:n)},getMoble:function(){for(var t=new Array("130","131","132","133","135","137","138","170","187","189")[parseInt(10*Math.random())],a=0;a<8;a++)t+=Math.floor(10*Math.random());return t},onedata:function(t,a){this.Personal_info=t},sendParams:function(){this.$router.push({path:"/Userinfo",name:"Userinfo",params:{name:"Personal-info",send_data:this.Personal_info}})}},created:function(){this.handleListApproveHistory()}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Trade-record"},[e("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[e("Col",{attrs:{xs:12,sm:12,lg:5}},[e("p",[t._v(t._s(t.$t("common.Transaction_Type"))+" ")]),t._v(" "),e("Input",{staticStyle:{width:"120px"},attrs:{placeholder:""}})],1),t._v(" "),e("Col",{attrs:{xs:12,sm:12,lg:5}},[e("p",[t._v(t._s(t.$t("common.Contract_No"))+" ")]),t._v(" "),e("Input",{staticStyle:{width:"130px"},attrs:{placeholder:""}})],1),t._v(" "),e("Col",{attrs:{xs:12,sm:12,lg:5}},[e("p",[t._v(t._s(t.$t("common.Payer_account"))+" ")]),t._v(" "),e("Input",{staticStyle:{width:"130px"},attrs:{placeholder:""}})],1),t._v(" "),e("Col",{attrs:{xs:12,sm:12,lg:9}},[e("p",[t._v(t._s(t.$t("common.Payment_date"))+" ")]),t._v(" "),e("DatePicker",{staticStyle:{width:"110px"},attrs:{type:"date",placeholder:""}}),t._v(" -\r\n        "),e("DatePicker",{staticStyle:{width:"110px"},attrs:{type:"date",placeholder:""}}),t._v(" "),e("Button",{staticClass:"mgl-10",attrs:{type:"primary"}},[t._v(t._s(t.$t("common.Query")))])],1)],1),t._v(" "),e("Table",{style:{marginTop:"20px"},attrs:{"highlight-row":"",columns:t.columns1,data:t.historyData},on:{"on-row-click":t.onedata}}),t._v(" "),e("Row",{staticClass:"code-row-bg page-data",attrs:{type:"flex",justify:"center"}},[e("Col",{attrs:{span:"24"}},[e("Page",{attrs:{total:t.dataCount,"page-size":t.pageSize},on:{"on-change":t.changepage}})],1)],1)],1)},staticRenderFns:[]};var o=e("VU/8")(n,r,!1,function(t){e("yG1c")},null,null);a.default=o.exports},yG1c:function(t,a){}});
//# sourceMappingURL=14.818b0996379bedd3ff04.js.map