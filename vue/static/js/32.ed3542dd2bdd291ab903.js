webpackJsonp([32],{FnfC:function(t,a){},P4aY:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"User_contract",data:function(){var t=this;return{ajaxHistoryData:[],dataCount:0,pageSize:10,historyData:[],columns1:[{title:this.$t("common.Contract_No"),key:"contract_number",align:"center"},{title:this.$t("common.Contract_name"),key:"contract_name",align:"center"},{title:this.$t("common.Contract_category"),key:"contract_type",align:"center"},{title:this.$t("common.Create_Time"),key:"time",align:"center"},{title:this.$t("common.Submission_time"),key:"operation",align:"center",render:function(a,e){return a("div",[a("Button",{props:{type:"primary",size:"small"},style:{marginRight:"10px"},on:{click:function(){t.$router.push({path:"/Add_contract",name:"Add_contract",params:{name:"editorContent",send_data:t.editorContent}})}}},t.$t("common.View")),a("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(e.index)}}},t.$t("common.Delete"))])}}],data1:this.mockTableData1(),Personal_info:null,editorContent:{name:"大公数据注册服务协议",use:"新用户注册签订协议",ban:!0,content:"一、特别提示在此特别提醒您（用户）在注册成为***用户之前，请认真阅读本《***用户服务协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。  本协议约定***与用户之间关于“***”服务（以下简称“服务”）的权利义务。“用户”是指注册、登录、使用本服务的个人。本协议可由***随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在本APP中查阅最新版协议条款。在修改协议条款后，如果用户不接受修改后的条款，请立即停止使用***提供的服务，用户继续使用***提供的服务将被视为接受修改后的协议。二、账号注册1、用户在使用本服务前需要注册一个“***”账号。“***”账号应当使用手机号码绑定注册，请用户使用尚未与“***”账号绑定的手机号码，以及未被***根据本协议封禁的手机号码注册“***”账号。***可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。  2、如果注册申请者有被***封禁的先例或涉嫌虚假注册及滥用他人名义注册，及其他不能得到许可的理由， ***将拒绝其注册申请。  3、鉴于“***”账号的绑定注册方式，您同意***在注册时将允许您的手机号码及手机设备识别码等信息用于注册。  4、在用户注册及使用本服务时，***需要搜集能识别用户身份的个人信息以便***可以在必要时联系用户，或为用户提供更好的使用体验。***搜集的信息包括但不限于用户的姓名、地址；***同意对这些信息的使用将受限于第三条用户个人隐私信息保护的约束。"}}},methods:{handleListApproveHistory:function(){this.ajaxHistoryData=this.data1,this.dataCount=this.data1.length,this.data1.length<this.pageSize?this.historyData=this.ajaxHistoryData:this.historyData=this.ajaxHistoryData.slice(0,this.pageSize)},changepage:function(t){var a=(t-1)*this.pageSize,e=t*this.pageSize;this.historyData=this.ajaxHistoryData.slice(a,e)},mockTableData1:function(){for(var t=[],a=1;a<101;a++)t.push({contract_number:"DG2018031200"+a,contract_name:parseInt(2*Math.random()+0)>0?"大公数据注册服务协议":"大公数据评级合同",contract_type:parseInt(2*Math.random()+0)>0?"用户信用评级":"用户投资",time:this.formatTime(this.getRandomDateBetween()),operation:""});return t},getRandomDateBetween:function(){var t=new Date,a=+new Date("October 10, 2017 11:13:00"),e=+new Date;return t.setTime(Math.random()*(e-a)+a),t},formatDate:function(t){var a=t.getFullYear(),e=t.getMonth()+1;e=e<10?"0"+e:e;var n=t.getDate();n=n<10?"0"+n:n;var o=t.getHours();o=o<10?"0"+o:o;var r=t.getMinutes();r=r<10?"0"+r:r;var i=t.getSeconds();return a+"-"+e+"-"+n+" "+o+":"+r+":"+(i=i<10?"0"+i:i)},formatTime:function(t){var a=t.getFullYear(),e=t.getMonth()+1;e=e<10?"0"+e:e;var n=t.getDate();return a+"-"+e+"-"+(n=n<10?"0"+n:n)},getMoble:function(){for(var t=new Array("130","131","132","133","135","137","138","170","187","189")[parseInt(10*Math.random())],a=0;a<8;a++)t+=Math.floor(10*Math.random());return t},onedata:function(t,a){this.Personal_info=t},sendParams:function(){this.$router.push({path:"/Userinfo",name:"Userinfo",params:{name:"Personal-info",send_data:this.Personal_info}})},Add_contract:function(){this.$router.push("/Add_contract")},remove:function(t){this.historyData.splice(t,1)}},created:function(){this.handleListApproveHistory()}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"User-contract"},[e("Row",{staticClass:"code-row-bg search_criteria",attrs:{type:"flex",justify:"space-around"}},[e("Col",{attrs:{xs:12,sm:12,lg:6}},[e("p",[t._v(t._s(t.$t("common.Contract_No"))+" ")]),t._v(" "),e("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}})],1),t._v(" "),e("Col",{attrs:{xs:12,sm:12,lg:7}},[e("p",[t._v(t._s(t.$t("common.Contract_name"))+" ")]),t._v(" "),e("Input",{staticStyle:{width:"150px"},attrs:{placeholder:""}}),t._v(" "),e("Button",{staticClass:"mgl-10",attrs:{type:"primary"}},[t._v(t._s(t.$t("common.Query")))])],1),t._v(" "),e("Col",{staticStyle:{"line-height":"5"},attrs:{xs:12,sm:12,lg:5}},[e("Button",{staticClass:"mgl-10",attrs:{type:"primary"},on:{click:t.Add_contract}},[t._v(t._s(t.$t("common.Add_contract")))])],1)],1),t._v(" "),e("Table",{style:{marginTop:"20px"},attrs:{"highlight-row":"",columns:t.columns1,data:t.historyData},on:{"on-row-click":t.onedata}}),t._v(" "),e("Row",{staticClass:"code-row-bg page-data",attrs:{type:"flex",justify:"space-around"}},[e("Col",{attrs:{span:"24"}},[e("Page",{attrs:{total:t.dataCount,"page-size":t.pageSize},on:{"on-change":t.changepage}})],1)],1)],1)},staticRenderFns:[]};var r=e("VU/8")(n,o,!1,function(t){e("FnfC")},null,null);a.default=r.exports}});
//# sourceMappingURL=32.ed3542dd2bdd291ab903.js.map