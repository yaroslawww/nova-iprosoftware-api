(()=>{"use strict";var e,t={770:(e,t,n)=>{const o=Vue;var r={class:"text-white-50%"};const s={data:function(){return{isRequesting:!1,requestUrl:""}},mounted:function(){this.isEmpty&&!this.noFetchOnMount&&this.fetchRequest()},computed:{isEmpty:function(){return!0}},methods:{fetchRequest:function(){var e=this;this.isRequesting=!0,Nova.request().get(this.getRequestUrl(),this.getRequestData()).then((function(t){e.onRequestSuccess(t)})).catch((function(t){e.onRequestError(t)})).finally((function(){e.onRequestFinish(),e.isRequesting=!1}))},onRequestSuccess:function(e){},onRequestError:function(e){},onRequestFinish:function(){},getRequestUrl:function(){return this.requestUrl},getRequestData:function(){return{}}}};var i={key:0},a={class:"text-white-50% text-lg flex flex-col items-center justify-center"},c={key:1,class:"w-full p-3"},l={key:0,class:"text-white-50%"},u={key:2},p={class:"text-white-50% text-lg"};const d={name:"ResultCard",props:{responseData:{type:[Object,Array],default:null},isEmpty:{type:Boolean,default:!0},isRequesting:{type:Boolean,default:!0}}};var m=n(744);const f=(0,m.Z)(d,[["render",function(e,t,n,r,s,d){var m=(0,o.resolveComponent)("Loader"),f=(0,o.resolveComponent)("Card");return(0,o.openBlock)(),(0,o.createBlock)(f,{class:"p-4 min-h-40 flex flex-col items-center justify-center",style:(0,o.normalizeStyle)({opacity:n.isRequesting?.5:1})},{default:(0,o.withCtx)((function(){return[n.isRequesting?((0,o.openBlock)(),(0,o.createElementBlock)("div",i,[(0,o.createElementVNode)("p",a,[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Requesting Now"))+" ",1),(0,o.createVNode)(m,{class:"text-gray-300"})])])):n.isEmpty?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[(0,o.createElementVNode)("p",p,(0,o.toDisplayString)(e.__("Sorry, but there empty list")),1)])):((0,o.openBlock)(),(0,o.createElementBlock)("div",c,[n.responseData?((0,o.openBlock)(),(0,o.createElementBlock)("pre",l,[(0,o.createElementVNode)("code",null,(0,o.toDisplayString)(JSON.stringify(n.responseData,null,2)),1)])):(0,o.renderSlot)(e.$slots,"default",{key:1})]))]})),_:3},8,["style"])}]]),h={name:"SettingsPage",components:{ResultCard:f},props:{header:{type:String,default:""},buttonText:{type:String,default:""},isEmpty:{type:Boolean,default:!0},isRequesting:{type:Boolean,default:!0}}},g=(0,m.Z)(h,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("Heading"),c=(0,o.resolveComponent)("DefaultButton"),l=(0,o.resolveComponent)("ResultCard");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(n.header?n.header:e.__("Setting Page")),1)]})),_:1}),(0,o.createVNode)(c,{class:"w-full flex justify-center mb-2",disabled:n.isRequesting,onClick:t[0]||(t[0]=(0,o.withModifiers)((function(t){return e.$emit("fetch-request")}),["prevent"]))},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(n.buttonText?n.buttonText:e.__("Fetch directly from api")),1)]})),_:1},8,["disabled"]),(0,o.createVNode)(l,{"is-empty":n.isEmpty,"is-requesting":n.isRequesting},{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"default")]})),_:3},8,["is-empty","is-requesting"])])}]]),v={name:"ContactTypes",mixins:[s],components:{SettingsPage:g},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/contact-types",sources:[]}},computed:{isEmpty:function(){return this.sources.length<=0}},methods:{onRequestSuccess:function(e){this.sources=e.data.data,Nova.success(this.__("Success response. Fetched :count contact types.",{count:this.sources.length}))},onRequestError:function(e){this.sources=[],Nova.error(this.__("It failed!"))}}},y=(0,m.Z)(v,[["render",function(e,t,n,s,i,a){var c=(0,o.resolveComponent)("settings-page");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(c,{header:e.__("Contact types"),"is-empty":a.isEmpty,"is-requesting":e.isRequesting,onFetchRequest:e.fetchRequest},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("ol",r,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(i.sources,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.Id}," (ID: "+(0,o.toDisplayString)(e.Id)+") "+(0,o.toDisplayString)(e.Name?e.Name:"-"),1)})),128))])]})),_:1},8,["header","is-empty","is-requesting","onFetchRequest"])])}]]);var N={class:"text-white text-xl mb-2"},q={class:""};var k={class:""},_={class:"border border-white-50% p-1 rounded"},x={class:"flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none"},E={class:"text-lg font-medium"},w={key:0},R={class:"pl-8 pr-8 pt-4 border-t"};const C={name:"Accordion",props:{header:{type:String,default:""}},setup:function(){var e=(0,o.ref)(!1);return{isOpen:e,toggleOpen:function(){e.value=!e.value}}}},D=(0,m.Z)(C,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("Icon");return(0,o.openBlock)(),(0,o.createElementBlock)("article",k,[(0,o.createElementVNode)("div",_,[(0,o.createElementVNode)("header",x,[(0,o.createElementVNode)("span",E,(0,o.toDisplayString)(n.header),1),(0,o.createVNode)(a,{type:"plus-circle",class:"w-7 h-7",onClick:(0,o.withModifiers)(r.toggleOpen,["prevent"]),style:(0,o.normalizeStyle)({transform:"rotate("+(r.isOpen?"135":"0")+"deg)",transition:"transform 0.5s"})},null,8,["onClick","style"])]),(0,o.createVNode)(o.Transition,{name:"fade"},{default:(0,o.withCtx)((function(){return[r.isOpen?((0,o.openBlock)(),(0,o.createElementBlock)("div",w,[(0,o.createElementVNode)("div",R,[(0,o.renderSlot)(e.$slots,"default")])])):(0,o.createCommentVNode)("",!0)]})),_:3})])])}]]),B={name:"BookingRules",mixins:[s],components:{SettingsPage:g,Accordion:D},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/booking-rules",rules:{}}},computed:{isEmpty:function(){return Object.keys(this.rules).length<=0}},methods:{onRequestSuccess:function(e){this.rules=e.data,Nova.success(this.__("Success response. Fetched :count rules sets.",{count:Object.keys(this.rules).length}))},onRequestError:function(e){this.rules={},Nova.error(this.__("It failed!"))},getTextContent:function(e,t){return JSON.stringify(t,null,2)}}},S=(0,m.Z)(B,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("accordion"),c=(0,o.resolveComponent)("settings-page");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(c,{header:e.__("Booking rules"),"is-empty":i.isEmpty,"is-requesting":e.isRequesting,onFetchRequest:e.fetchRequest},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(s.rules,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t,class:"mb-2"},[(0,o.createElementVNode)("h2",N,(0,o.toDisplayString)(t),1),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(a,{key:Array.isArray(e)?e[0].Id:e.Id,class:"mb-1",header:Array.isArray(e)?e[0].Name+" ("+e[0].Id+")":e.Name+" ("+e.Id+")"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("code",q,[(0,o.createElementVNode)("pre",null,"                          "+(0,o.toDisplayString)(i.getTextContent(t,e))+"\n                        ",1)])]})),_:2},1032,["header"])})),128))])})),128))]})),_:1},8,["header","is-empty","is-requesting","onFetchRequest"])])}]]);var b={class:"text-white-50%"};const V={name:"BookingTags",mixins:[s],components:{SettingsPage:g},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/sources",sources:[]}},computed:{isEmpty:function(){return this.sources.length<=0}},methods:{onRequestSuccess:function(e){this.sources=e.data.data,Nova.success(this.__("Success response. Fetched :count tags.",{count:this.sources.length}))},onRequestError:function(e){this.sources=[],Nova.error(this.__("It failed!"))}}},I=(0,m.Z)(V,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("settings-page");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{header:e.__("Booking tags"),"is-empty":i.isEmpty,"is-requesting":e.isRequesting,onFetchRequest:e.fetchRequest},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("ol",b,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(s.sources,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.Id}," (ID: "+(0,o.toDisplayString)(e.Id)+") "+(0,o.toDisplayString)(e.Name?e.Name:"-"),1)})),128))])]})),_:1},8,["header","is-empty","is-requesting","onFetchRequest"])])}]]);var F={class:"text-white-50%"};const T={name:"Sources",mixins:[s],components:{SettingsPage:g},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/sources",sources:[]}},computed:{isEmpty:function(){return this.sources.length<=0}},methods:{onRequestSuccess:function(e){this.sources=e.data.data,Nova.success(this.__("Success response. Fetched :count sources.",{count:this.sources.length}))},onRequestError:function(e){this.sources=[],Nova.error(this.__("It failed!"))}}},O=(0,m.Z)(T,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("settings-page");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{header:e.__("Sources"),"is-empty":i.isEmpty,"is-requesting":e.isRequesting,onFetchRequest:e.fetchRequest},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("ol",F,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(s.sources,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.Id}," (ID: "+(0,o.toDisplayString)(e.Id)+") "+(0,o.toDisplayString)(e.Name?e.Name:"-"),1)})),128))])]})),_:1},8,["header","is-empty","is-requesting","onFetchRequest"])])}]]);var U={class:"text-white-50%"},P={key:0},A={key:0};const M={name:"Sources",mixins:[s],components:{SettingsPage:g},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/locations",locations:[]}},computed:{isEmpty:function(){return this.locations.length<=0}},methods:{onRequestSuccess:function(e){this.locations=e.data.data,Nova.success(this.__("Success response. Fetched :count locations.",{count:this.locations.length}))},onRequestError:function(e){this.locations=[],Nova.error(this.__("It failed!"))}}},j=(0,m.Z)(M,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("settings-page");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{header:e.__("Sources"),"is-empty":i.isEmpty,"is-requesting":e.isRequesting,onFetchRequest:e.fetchRequest},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("ol",U,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(s.locations,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:t.Id},[(0,o.createTextVNode)(" (ID: "+(0,o.toDisplayString)(t.Id)+") "+(0,o.toDisplayString)(t.Name?t.Name:"-")+" ",1),t.Children.length?((0,o.openBlock)(),(0,o.createElementBlock)("ul",P,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(t.Children,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:t.Id},[(0,o.createTextVNode)(" (ID: "+(0,o.toDisplayString)(t.Id)+") "+(0,o.toDisplayString)(t.Name?t.Name:"-")+" ",1),t.Children.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",A,(0,o.toDisplayString)(e.__("Location has :count children",{count:t.Children.length})),1)):(0,o.createCommentVNode)("",!0)])})),128))])):(0,o.createCommentVNode)("",!0)])})),128))])]})),_:1},8,["header","is-empty","is-requesting","onFetchRequest"])])}]]);var G={class:"text-white-50%"};const Z={name:"Attributes",mixins:[s],components:{SettingsPage:g,Accordion:D},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/attributes",attributes:[]}},computed:{isEmpty:function(){return this.attributes.length<=0}},methods:{onRequestSuccess:function(e){this.attributes=e.data.data,Nova.success(this.__("Success response. Fetched :count attributes sets.",{count:this.attributes.length}))},onRequestError:function(e){this.attributes=[],Nova.error(this.__("It failed!"))}}},L=(0,m.Z)(Z,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("accordion"),c=(0,o.resolveComponent)("settings-page");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(c,{header:e.__("Attributes"),"is-empty":i.isEmpty,"is-requesting":e.isRequesting,onFetchRequest:e.fetchRequest},{default:(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(s.attributes,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(a,{key:e.Name,class:"mb-1",header:e.Name},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("ol",G,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.Values,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.Id}," (ID: "+(0,o.toDisplayString)(e.Id)+") "+(0,o.toDisplayString)(e.Name?e.Name:"-"),1)})),128))])]})),_:2},1032,["header"])})),128))]})),_:1},8,["header","is-empty","is-requesting","onFetchRequest"])])}]]);var H={class:"flex mb-4"},$={class:"flex ml-2"};const z={name:"GetContact",mixins:[s],components:{ResultCard:f},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/contacts/",iproId:null,noFetchOnMount:!0,responseData:{}}},computed:{isEmpty:function(){return Object.keys(this.responseData).length<=0}},methods:{onRequestSuccess:function(e){this.responseData=e.data.data,Nova.success(this.__("Success response. Fetched contact :name.",{name:this.responseData.Name}))},onRequestError:function(e){this.responseData={},Nova.error(this.__("It failed!"))},getRequestUrl:function(){return this.requestUrl+this.iproId}}},J=(0,m.Z)(z,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("Heading"),c=(0,o.resolveComponent)("DefaultButton"),l=(0,o.resolveComponent)("ResultCard");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Get contact")),1)]})),_:1}),(0,o.createElementVNode)("div",H,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"number",step:"1",min:"1",placeholder:"Ipro ID","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.iproId=e}),class:"appearance-none rounded h-10 pl-4 w-full focus:bg-white focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600"},null,512),[[o.vModelText,s.iproId]]),(0,o.createElementVNode)("div",$,[(0,o.createVNode)(c,{class:"w-full flex justify-center mb-2 whitespace-nowrap",disabled:e.isRequesting||!s.iproId,onClick:(0,o.withModifiers)(e.fetchRequest,["prevent"])},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.buttonText?e.buttonText:e.__("Fetch directly from api")),1)]})),_:1},8,["disabled","onClick"])])]),(0,o.createVNode)(l,{"response-data":s.responseData,"is-empty":i.isEmpty,"is-requesting":e.isRequesting},null,8,["response-data","is-empty","is-requesting"])])}]]);var K={class:"flex mb-4"},Q={class:"flex ml-2"};const W={name:"GetPropertyAll",mixins:[s],components:{ResultCard:f},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/properties/",iproId:null,noFetchOnMount:!0,responseData:{}}},computed:{isEmpty:function(){return Object.keys(this.responseData).length<=0}},methods:{onRequestSuccess:function(e){this.responseData=e.data.data,Nova.success(this.__("Success response. Fetched property :name.",{name:this.responseData.PropertyDetails.Name}))},onRequestError:function(e){this.responseData={},Nova.error(this.__("It failed!"))},getRequestUrl:function(){return this.requestUrl+this.iproId}}},X=(0,m.Z)(W,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("Heading"),c=(0,o.resolveComponent)("DefaultButton"),l=(0,o.resolveComponent)("ResultCard");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Get Property All")),1)]})),_:1}),(0,o.createElementVNode)("div",K,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"number",step:"1",min:"1",placeholder:"Ipro ID","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.iproId=e}),class:"appearance-none rounded h-10 pl-4 w-full focus:bg-white focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600"},null,512),[[o.vModelText,s.iproId]]),(0,o.createElementVNode)("div",Q,[(0,o.createVNode)(c,{class:"w-full flex justify-center mb-2 whitespace-nowrap",disabled:e.isRequesting||!s.iproId,onClick:(0,o.withModifiers)(e.fetchRequest,["prevent"])},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.buttonText?e.buttonText:e.__("Fetch directly from api")),1)]})),_:1},8,["disabled","onClick"])])]),(0,o.createVNode)(l,{"response-data":s.responseData,"is-empty":i.isEmpty,"is-requesting":e.isRequesting},null,8,["response-data","is-empty","is-requesting"])])}]]);var Y={class:"flex mb-4"},ee={class:"flex ml-2"};const te={name:"GetPropertyRates",mixins:[s],components:{ResultCard:f},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/properties/",iproId:null,noFetchOnMount:!0,responseData:[]}},computed:{isEmpty:function(){return this.responseData.length<=0}},methods:{onRequestSuccess:function(e){this.responseData=e.data.data,Nova.success(this.__("Success response. Fetched property rates count: :count.",{count:this.responseData.length}))},onRequestError:function(e){this.rates={},Nova.error(this.__("It failed!"))},getRequestUrl:function(){return this.requestUrl+this.iproId+"/rates"}}},ne=(0,m.Z)(te,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("Heading"),c=(0,o.resolveComponent)("DefaultButton"),l=(0,o.resolveComponent)("ResultCard");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Get Property Rates")),1)]})),_:1}),(0,o.createElementVNode)("div",Y,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"number",step:"1",min:"1",placeholder:"Ipro ID","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.iproId=e}),class:"appearance-none rounded h-10 pl-4 w-full focus:bg-white focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600"},null,512),[[o.vModelText,s.iproId]]),(0,o.createElementVNode)("div",ee,[(0,o.createVNode)(c,{class:"w-full flex justify-center mb-2 whitespace-nowrap",disabled:e.isRequesting||!s.iproId,onClick:(0,o.withModifiers)(e.fetchRequest,["prevent"])},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.buttonText?e.buttonText:e.__("Fetch directly from api")),1)]})),_:1},8,["disabled","onClick"])])]),(0,o.createVNode)(l,{"response-data":s.responseData,"is-empty":i.isEmpty,"is-requesting":e.isRequesting},null,8,["response-data","is-empty","is-requesting"])])}]]);var oe={class:"flex mb-4"},re={class:"flex ml-2"};const se={name:"GetPropertyCustomRates",mixins:[s],components:{ResultCard:f},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/properties/",iproId:null,noFetchOnMount:!0,responseData:[]}},computed:{isEmpty:function(){return this.responseData.length<=0}},methods:{onRequestSuccess:function(e){this.responseData=e.data.data,Nova.success(this.__("Success response. Fetched property rates count: :count.",{count:this.responseData.length}))},onRequestError:function(e){this.rates={},Nova.error(this.__("It failed!"))},getRequestUrl:function(){return this.requestUrl+this.iproId+"/custom-rates"}}},ie=(0,m.Z)(se,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("Heading"),c=(0,o.resolveComponent)("DefaultButton"),l=(0,o.resolveComponent)("ResultCard");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Get Property Custom Rates")),1)]})),_:1}),(0,o.createElementVNode)("div",oe,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"number",step:"1",min:"1",placeholder:"Ipro ID","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.iproId=e}),class:"appearance-none rounded h-10 pl-4 w-full focus:bg-white focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600"},null,512),[[o.vModelText,s.iproId]]),(0,o.createElementVNode)("div",re,[(0,o.createVNode)(c,{class:"w-full flex justify-center mb-2 whitespace-nowrap",disabled:e.isRequesting||!s.iproId,onClick:(0,o.withModifiers)(e.fetchRequest,["prevent"])},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.buttonText?e.buttonText:e.__("Fetch directly from api")),1)]})),_:1},8,["disabled","onClick"])])]),(0,o.createVNode)(l,{"response-data":s.responseData,"is-empty":i.isEmpty,"is-requesting":e.isRequesting},null,8,["response-data","is-empty","is-requesting"])])}]]);var ae={class:"flex mb-4"},ce={class:"flex ml-2"};const le={name:"GetPropertyExtras",mixins:[s],components:{ResultCard:f},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/properties/",iproId:null,noFetchOnMount:!0,responseData:[]}},computed:{isEmpty:function(){return this.responseData.length<=0}},methods:{onRequestSuccess:function(e){this.responseData=e.data.data,Nova.success(this.__("Success response. Fetched property extras count: :count.",{count:this.responseData.length}))},onRequestError:function(e){this.responseData={},Nova.error(this.__("It failed!"))},getRequestUrl:function(){return this.requestUrl+this.iproId+"/extras"}}},ue=(0,m.Z)(le,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("Heading"),c=(0,o.resolveComponent)("DefaultButton"),l=(0,o.resolveComponent)("ResultCard");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Get Property Extras")),1)]})),_:1}),(0,o.createElementVNode)("div",ae,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"number",step:"1",min:"1",placeholder:"Ipro ID","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.iproId=e}),class:"appearance-none rounded h-10 pl-4 w-full focus:bg-white focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600"},null,512),[[o.vModelText,s.iproId]]),(0,o.createElementVNode)("div",ce,[(0,o.createVNode)(c,{class:"w-full flex justify-center mb-2 whitespace-nowrap",disabled:e.isRequesting||!s.iproId,onClick:(0,o.withModifiers)(e.fetchRequest,["prevent"])},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.buttonText?e.buttonText:e.__("Fetch directly from api")),1)]})),_:1},8,["disabled","onClick"])])]),(0,o.createVNode)(l,{"response-data":s.responseData,"is-empty":i.isEmpty,"is-requesting":e.isRequesting},null,8,["response-data","is-empty","is-requesting"])])}]]);var pe={class:"flex mb-4"},de=["value"],me={class:"flex ml-4"};const fe={name:"GetPropertiesOffers",mixins:[s],components:{ResultCard:f},data:function(){return{requestUrl:"/nova-vendor/iprosoftware-api/properties/properties-offers",type:"SpecificDates",noFetchOnMount:!1,responseData:[]}},computed:{isEmpty:function(){return this.responseData.length<=0}},methods:{onRequestSuccess:function(e){this.responseData=e.data.data,Nova.success(this.__("Success response. Fetched offers count: :count.",{count:this.responseData.length}))},onRequestError:function(e){this.responseData=[],Nova.error(this.__("It failed!"))},getRequestData:function(){return{params:{type:this.type}}}}},he=(0,m.Z)(fe,[["render",function(e,t,n,r,s,i){var a=(0,o.resolveComponent)("Heading"),c=(0,o.resolveComponent)("DefaultButton"),l=(0,o.resolveComponent)("ResultCard");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(a,{class:"mb-6"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Offers")),1)]})),_:1}),(0,o.createElementVNode)("div",pe,[(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.type=e}),class:"flex-grow"},[((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(["SpecificDates","LastMinute","SpecificDates"],(function(e){return(0,o.createElementVNode)("option",{key:e,value:e},(0,o.toDisplayString)(e),9,de)})),64))],512),[[o.vModelSelect,s.type]]),(0,o.createElementVNode)("div",me,[(0,o.createVNode)(c,{class:"w-full flex justify-center mb-2 whitespace-nowrap",disabled:e.isRequesting||!s.type,onClick:(0,o.withModifiers)(e.fetchRequest,["prevent"])},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.buttonText?e.buttonText:e.__("Fetch directly from api")),1)]})),_:1},8,["disabled","onClick"])])]),(0,o.createVNode)(l,{"response-data":s.responseData,"is-empty":i.isEmpty,"is-requesting":e.isRequesting},null,8,["response-data","is-empty","is-requesting"])])}]]);Nova.booting((function(e,t){Nova.inertia("NovaIprosoftwareApiSettingsContactTypes",y),Nova.inertia("NovaIprosoftwareApiSettingsBookingRules",S),Nova.inertia("NovaIprosoftwareApiSettingsBookingTags",I),Nova.inertia("NovaIprosoftwareApiSettingsSources",O),Nova.inertia("NovaIprosoftwareApiSettingsLocations",j),Nova.inertia("NovaIprosoftwareApiSettingsAttributes",L),Nova.inertia("NovaIprosoftwareApiContactsGetContact",J),Nova.inertia("NovaIprosoftwareApiPropertiesGetPropertyAll",X),Nova.inertia("NovaIprosoftwareApiPropertiesGetPropertyRates",ne),Nova.inertia("NovaIprosoftwareApiPropertiesGetPropertyCustomRates",ie),Nova.inertia("NovaIprosoftwareApiPropertiesGetPropertyExtras",ue),Nova.inertia("NovaIprosoftwareApiPropertiesGetPropertyOffers",he)}))},238:()=>{},744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,n,r,s)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,r,s]=e[u],a=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,r,s]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={103:0,990:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,s,[i,a,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var u=c(o)}for(t&&t(n);l<i.length;l++)s=i[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},n=self.webpackChunkyaroslawww_nova_iprosoftware_api=self.webpackChunkyaroslawww_nova_iprosoftware_api||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),o.O(void 0,[990],(()=>o(770)));var r=o.O(void 0,[990],(()=>o(238)));r=o.O(r)})();