(function(t){function e(e){for(var r,o,l=e[0],n=e[1],c=e[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,l=1;l<a.length;l++){var n=a[l];0!==s[n]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=n;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"23be":function(t,e,a){"use strict";var r=a("cb9b"),s=a.n(r);e["default"]=s.a},"3dfd":function(t,e,a){"use strict";var r=a("ae2a"),s=a("23be"),i=a("2877"),o=a("6544"),l=a.n(o),n=a("7496"),c=a("40dc"),d=a("a75b"),u=a("2fa4"),m=a("2a7f"),v=Object(i["a"])(s["default"],r["a"],r["b"],!1,null,null,null);e["default"]=v.exports,l()(v,{VApp:n["a"],VAppBar:c["a"],VContent:d["a"],VSpacer:u["a"],VToolbarTitle:m["a"]})},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=a("bc3a"),i=a.n(s);let o={};const l=i.a.create(o);l.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=l,window.axios=l,Object.defineProperties(t.prototype,{axios:{get(){return l}},$axios:{get(){return l}}})},r["a"].use(Plugin);Plugin;var n=a("3dfd"),c=a("f309");r["a"].use(c["a"]);var d=new c["a"]({icons:{iconfont:"mdi"}}),u=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HelloWorld")},v=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Tikect service")]),a("p",{staticClass:"subheading font-weight-regular"}),a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"https://localhost:5001"},model:{value:t.userApi,callback:function(e){t.userApi=e},expression:"userApi"}},[t._v(t._s(t.api))]),a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.ADDURL()}}},[t._v("Update Api")])],1)],1)],1)],1)},h=[],f={data:()=>({userApi:r["a"].prototype.$url,api:r["a"].prototype.$url}),methods:{ADDURL(){r["a"].prototype.$url=this.userApi,localStorage.$url=this.userApi,console.log(r["a"].prototype.$url)}}},b=f,k=a("2877"),x=a("6544"),g=a.n(x),_=a("8336"),V=a("a523"),y=a("0e8f"),C=a("4bd4"),w=a("a722"),T=a("8654"),$=Object(k["a"])(b,p,h,!1,null,null,null),D=$.exports;g()($,{VBtn:_["a"],VContainer:V["a"],VFlex:y["a"],VForm:C["a"],VLayout:w["a"],VTextField:T["a"]});var A={components:{HelloWorld:D}},E=A,S=Object(k["a"])(E,m,v,!1,null,null,null),F=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs8:"","offset-xs2":""}},[a("Ticket")],1)],1)],1)},j=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1"),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{counter:512,rules:t.descriptionRules,label:"Description",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.send}},[t._v("Send Ticket")]),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v("\n          Please stand by\n          "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1),a("v-snackbar",{attrs:{color:t.color,timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},P=[],L={data:()=>({valid:!0,description:"",descriptionRules:[t=>!!t||"Name is required",t=>t&&t.length<=512||"Description must be less than 512 characters"],email:"",emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"],checkbox:!1,dialog:!1,snackbar:!1,color:"",timeout:5e3,text:"Hello"}),methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0)},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()},send(){this.dialog=!0,axios.post(r["a"].prototype.$url+"/api/Ticket",{email:this.email,description:this.description}).then(t=>{console.log(t),this.dialog=!1,this.color="success",this.snackbar=!0,this.text="Succes";var e=t.data.Id;console.log(e),this.$router.push({name:"TicketwithID",params:{id:e}})}).catch(t=>{console.log(t),this.dialog=!1,this.color="error",this.snackbar=!0,this.text="Error check console to see log"})}},watch:{dialog(t){}}},U=L,B=a("b0af"),z=a("99d9"),H=a("169a"),M=a("8e36"),q=a("2db4"),R=Object(k["a"])(U,I,P,!1,null,null,null),W=R.exports;g()(R,{VBtn:_["a"],VCard:B["a"],VCardText:z["a"],VDialog:H["a"],VForm:C["a"],VProgressLinear:M["a"],VSnackbar:q["a"],VTextField:T["a"]});var J={name:"ticket",components:{Ticket:W},methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0)}}},N=J,G=Object(k["a"])(N,O,j,!1,null,null,null),K=G.exports;g()(G,{VContainer:V["a"],VFlex:y["a"],VLayout:w["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","offset-xs":""}},[a("ViewTickets")],1)],1)],1)},X=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-table",{attrs:{headers:t.headers,items:t.desserts},on:{"click:row":t.clickedItem},scopedSlots:t._u([{key:"items",fn:function(e){return[a("tr",[a("td",[t._v(t._s(e.item.Id))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.Email))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.Description))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.DateTime))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.TicketStatus))])])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("v-progress-linear",{attrs:{color:"blue",indeterminate:""},scopedSlots:t._u([{key:"progress",fn:function(){},proxy:!0}])})],1),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v("\n        Please stand by\n        "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)},Z=[],tt={data:()=>({selected:[],dialog:!0,headers:[{text:"Id",align:"left",sortable:!1,value:"Id"},{text:"Email",value:"Email",sortable:!1},{text:"Description",value:"Description",sortable:!1},{text:"DateTime",value:"DateTime"},{text:"TicketStatus",value:"TicketStatus"}],desserts:[]}),watch:{dialog(t){}},created(){this.initialize()},methods:{initialize(){axios.get(r["a"].prototype.$url+"/api/Ticket").then(t=>{console.log(t.data),this.desserts=t.data,this.dialog=!1})},clickedItem(t){console.log(t),console.log("TEST"),console.log(t.Id);var e=t.Id;this.$router.push({name:"AdminTicketwithID",params:{id:e}})}}},et=tt,at=a("8fea"),rt=Object(k["a"])(et,Y,Z,!1,null,null,null),st=rt.exports;g()(rt,{VCard:B["a"],VCardText:z["a"],VDataTable:at["a"],VDialog:H["a"],VProgressLinear:M["a"]});var it={name:"View-Tickets",components:{ViewTickets:st}},ot=it,lt=Object(k["a"])(ot,Q,X,!1,null,null,null),nt=lt.exports;g()(lt,{VContainer:V["a"],VFlex:y["a"],VLayout:w["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs8:"","offset-xs2":""}},[a("TicketDetals"),a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.addComment()}}},[t._v("Add Comment")]),a("br"),a("br"),a("CloseTicket")],1)],1)],1)},dt=[],ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1"),a("v-form",{ref:"form"},[a("h1",[t._v("Email: "+t._s(t.email))]),a("h2",[t._v("Description: "+t._s(t.description))]),a("h2",[t._v("Status: "+t._s(t.status))]),a("h1",[t._v("FILES")]),a("ul",{attrs:{id:"example-1"}},t._l(t.files,(function(e){return a("li",[t._v("\n        "+t._s(e.FileName)+"\n        "),a("a",{attrs:{href:e.WebLocation}},[t._v("Download")])])})),0),a("h1",[t._v("Comments")]),a("ul",{attrs:{id:"example-1"}},t._l(t.comments,(function(e){return a("li",[t._v("\n        User : "+t._s(e.User)+"\n        "),a("br"),t._v("\n        Message : "+t._s(e.Message)+"\n      ")])})),0),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v("\n          Please stand by\n          "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1),a("v-snackbar",{attrs:{color:t.color,timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},mt=[],vt={data:()=>({description:"Description",email:"E-mail",status:"",comments:[],files:[],checkbox:!1,dialog:!0,snackbar:!1,color:"",timeout:5e3,text:"Hello",ticketId:"",api:r["a"].prototype.$url}),created(){this.initialize()},methods:{initialize(){this.ticketId=this.$route.params.id,axios.get(r["a"].prototype.$url+"/api/Ticket/"+this.ticketId).then(t=>{console.log(t.data),console.log(t.data.Email),this.email=t.data.Email,this.description=t.data.Description,this.status=t.data.TicketStatus,this.comments=t.data.Comments,this.files=t.data.Files,this.dialog=!1})}},watch:{dialog(t){}}},pt=vt,ht=Object(k["a"])(pt,ut,mt,!1,null,null,null),ft=ht.exports;g()(ht,{VBtn:_["a"],VCard:B["a"],VCardText:z["a"],VDialog:H["a"],VForm:C["a"],VProgressLinear:M["a"],VSnackbar:q["a"]});var bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1"),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-btn",{attrs:{disabled:!t.valid,color:"error"},on:{click:t.send}},[t._v("Close Ticket")]),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v("\n          Please stand by\n          "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1),a("v-snackbar",{attrs:{color:t.color,timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},kt=[],xt={data:()=>({valid:!0,message:"",checkbox:!1,dialog:!1,snackbar:!1,user:"",timeout:5e3,text:"Hello",color:"",ticketId:"",file:""}),methods:{send(){this.dialog=!0,this.ticketId=this.$route.params.id,axios.post(r["a"].prototype.$url+"/api/Ticket/"+this.ticketId+"/close").then(t=>{console.log(t),this.dialog=!1,this.color="success",this.snackbar=!0,this.text="Succes",this.$router.go(0)}).catch(t=>{console.log(t),this.dialog=!1,this.color="error",this.snackbar=!0,this.text="Error check console to see log"})},handleFileUpload(){this.file=this.$refs.file.files[0]}},watch:{dialog(t){}}},gt=xt,_t=Object(k["a"])(gt,bt,kt,!1,null,null,null),Vt=_t.exports;g()(_t,{VBtn:_["a"],VCard:B["a"],VCardText:z["a"],VDialog:H["a"],VForm:C["a"],VProgressLinear:M["a"],VSnackbar:q["a"]});var yt={name:"ticketDetals",components:{TicketDetals:ft,CloseTicket:Vt},methods:{addComment(){this.$router.push({name:"addComment",param:{id:this.$route.params.id}})}}},Ct=yt,wt=Object(k["a"])(Ct,ct,dt,!1,null,null,null),Tt=wt.exports;g()(wt,{VBtn:_["a"],VContainer:V["a"],VFlex:y["a"],VLayout:w["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs8:"","offset-xs2":""}},[a("AddComment")],1)],1)],1)},Dt=[],At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1"),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"User",required:""},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),a("v-text-field",{attrs:{counter:512,label:"message",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.send}},[t._v("Add Comment")]),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v("\n          Please stand by\n          "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1),a("v-snackbar",{attrs:{color:t.color,timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},Et=[],St={data:()=>({valid:!0,message:"",checkbox:!1,dialog:!1,snackbar:!1,user:"",timeout:5e3,text:"Hello",color:"",ticketId:""}),methods:{reset(){this.$refs.form.reset()},send(){this.dialog=!0,this.ticketId=this.$route.params.id,axios.post(r["a"].prototype.$url+"/api/Comments/"+this.ticketId,{User:this.user,Message:this.message}).then(t=>{console.log(t),this.dialog=!1,this.color="success",this.snackbar=!0,this.text="Succes",this.$router.go(-1)}).catch(t=>{console.log(t),this.dialog=!1,this.color="error",this.snackbar=!0,this.text="Error check console to see log"})}},watch:{dialog(t){}}},Ft=St,Ot=Object(k["a"])(Ft,At,Et,!1,null,null,null),jt=Ot.exports;g()(Ot,{VBtn:_["a"],VCard:B["a"],VCardText:z["a"],VDialog:H["a"],VForm:C["a"],VProgressLinear:M["a"],VSnackbar:q["a"],VTextField:T["a"]});var It={name:"addComment",components:{AddComment:jt},methods:{validate(){this.$refs.form.validate()&&(this.snackbar=!0)}}},Pt=It,Lt=Object(k["a"])(Pt,$t,Dt,!1,null,null,null),Ut=Lt.exports;g()(Lt,{VContainer:V["a"],VFlex:y["a"],VLayout:w["a"]});var Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs8:"","offset-xs2":""}},[a("TicketDetals"),a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.addComment()}}},[t._v("Add Comment")]),a("br"),a("br"),a("AddFile")],1)],1)],1)},zt=[],Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1"),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("label",[t._v("\n      File\n      "),a("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(e){return t.handleFileUpload()}}})]),a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.send}},[t._v("Add File")]),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v("\n          Please stand by\n          "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1),a("v-snackbar",{attrs:{color:t.color,timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},Mt=[],qt={data:()=>({valid:!0,message:"",checkbox:!1,dialog:!1,snackbar:!1,user:"",timeout:5e3,text:"Hello",color:"",ticketId:"",file:""}),methods:{send(){this.dialog=!0,this.ticketId=this.$route.params.id;let t=new FormData;t.append("formFile",this.file),axios.post(r["a"].prototype.$url+"/api/Upload/"+this.ticketId,t,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{console.log(t),this.dialog=!1,this.color="success",this.snackbar=!0,this.text="Succes",this.$router.go(0)}).catch(t=>{console.log(t),this.dialog=!1,this.color="error",this.snackbar=!0,this.text="Error check console to see log"})},handleFileUpload(){this.file=this.$refs.file.files[0]}},watch:{dialog(t){}}},Rt=qt,Wt=Object(k["a"])(Rt,Ht,Mt,!1,null,null,null),Jt=Wt.exports;g()(Wt,{VBtn:_["a"],VCard:B["a"],VCardText:z["a"],VDialog:H["a"],VForm:C["a"],VProgressLinear:M["a"],VSnackbar:q["a"]});var Nt={name:"ticketDetals",components:{TicketDetals:ft,AddFile:Jt},methods:{addComment(){this.$router.push({name:"addComment",param:{id:this.$route.params.id}})}}},Gt=Nt,Kt=Object(k["a"])(Gt,Bt,zt,!1,null,null,null),Qt=Kt.exports;g()(Kt,{VBtn:_["a"],VContainer:V["a"],VFlex:y["a"],VLayout:w["a"]}),r["a"].use(u["a"]);var Xt=new u["a"]({routes:[{path:"/",name:"home",component:F},{path:"/AddTicket",name:"AddTicket",component:K},{path:"/AdminTicket",name:"AdminTicket",component:nt},{path:"/AdminTicket/:id",name:"AdminTicketwithID",component:Tt},{path:"/Ticket/:id",name:"TicketwithID",component:Qt},{path:"/AddComment/:id",name:"addComment",component:Ut}]});r["a"].config.productionTip=!1,r["a"].use(d),r["a"].prototype.$url="https://localhost:5001",localStorage.$url&&(r["a"].prototype.$url=localStorage.$url),new r["a"]({vuetify:d,router:Xt,render:t=>t(n["default"])}).$mount("#app")},ae2a:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("Ticket Service")]),t._v("  \n      "),a("span",{staticClass:"font-weight-light"},[t._v("DEMO")]),t._v("  \n    ")]),a("v-spacer"),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" \n      "),a("router-link",{attrs:{to:"/Addticket"}},[t._v("Add Ticket")]),t._v(" \n      "),a("router-link",{attrs:{to:"/AdminTicket"}},[t._v("Admin Ticket")]),t._v(" \n    ")],1)],1),a("v-content",[a("router-view")],1)],1)},s=[];a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s}))},cb9b:function(t,e){}});
//# sourceMappingURL=app.784c4ba9.js.map