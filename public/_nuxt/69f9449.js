(window.webpackJsonp=window.webpackJsonp||[]).push([[15,8],{301:function(t,e,o){"use strict";o.r(e);var n=o(302),r=o.n(n),l=(o(303),{props:{load:{type:Boolean,default:!0}},data:function(){return{}},components:{Loading:r.a}}),c=o(46),component=Object(c.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"vld-parent"},[t("loading",{attrs:{active:this.load}})],1)}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,o){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,o){},function(t,e,o){"use strict";o.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,n={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function r(t,e,o,i,n,r,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=o,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var a=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:this.width,height:this.height,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),this._v(" "),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null);a.options.__file="spinner.vue";var s=a.exports,l=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{width:t.width,height:t.height,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:t.color}},[o("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[o("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),o("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),o("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[o("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),o("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),o("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[o("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),o("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null);l.options.__file="dots.vue";var c=l.exports,u=r({name:"vue-loading",mixins:[n],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active||!1}},components:{Spinner:s,Dots:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:t.transition}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[o("div",{staticClass:"vld-background",style:{background:this.backgroundColor,opacity:this.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),t._v(" "),o("div",{staticClass:"vld-icon"},[t._t("before"),t._v(" "),t._t("default",[o(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._v(" "),t._t("after")],2)])])}),[],!1,null,null,null);u.options.__file="Component.vue";var d=u.exports;o(0),d.install=function(t){var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,r=Object.assign({},e,i,{programmatic:!0}),a=new(t.extend(d))({el:document.createElement("div"),propsData:r}),s=Object.assign({},o,n);return Object.keys(s).map((function(t){a.$slots[t]=s[t]})),a}}}(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});t.$loading=e,t.prototype.$loading=e},e.default=d}]).default},303:function(t,e,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(113).default)("cf231d7a",content,!0,{sourceMap:!1})},304:function(t,e,o){var n=o(112)((function(i){return i[1]}));n.push([t.i,".vld-overlay{align-items:center;bottom:0;display:none;justify-content:center;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:1}.vld-overlay.is-active{display:flex}.vld-overlay.is-full-page{position:fixed;z-index:999}.vld-overlay .vld-background{background:#fff;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0}.vld-overlay .vld-icon,.vld-parent{position:relative}",""]),n.locals={},t.exports=n},306:function(t,e,o){"use strict";var n=o(2),r=o(4),l=o(47),c=o(214),d=o(213),v=o(3),m=RangeError,f=String,h=Math.floor,x=r(d),C=r("".slice),_=r(1..toFixed),w=function(t,e,o){return 0===e?o:e%2==1?w(t,e-1,o*t):w(t*t,e/2,o)},y=function(data,t,e){for(var o=-1,n=e;++o<6;)n+=t*data[o],data[o]=n%1e7,n=h(n/1e7)},j=function(data,t){for(var e=6,o=0;--e>=0;)o+=data[e],data[e]=h(o/t),o=o%t*1e7},k=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=f(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:v((function(){return"0.000"!==_(8e-5,3)||"1"!==_(.9,0)||"1.25"!==_(1.255,2)||"1000000000000000128"!==_(0xde0b6b3a7640080,0)}))||!v((function(){_({})}))},{toFixed:function(t){var e,o,n,r,d=c(this),v=l(t),data=[0,0,0,0,0,0],h="",_="0";if(v<0||v>20)throw m("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return f(d);if(d<0&&(h="-",d=-d),d>1e-21)if(o=(e=function(t){for(var e=0,o=t;o>=4096;)e+=12,o/=4096;for(;o>=2;)e+=1,o/=2;return e}(d*w(2,69,1))-69)<0?d*w(2,-e,1):d/w(2,e,1),o*=4503599627370496,(e=52-e)>0){for(y(data,0,o),n=v;n>=7;)y(data,1e7,0),n-=7;for(y(data,w(10,n,1),0),n=e-1;n>=23;)j(data,1<<23),n-=23;j(data,1<<n),y(data,1,1),j(data,2),_=k(data)}else y(data,0,o),y(data,1<<-e,0),_=k(data)+x("0",v);return _=v>0?h+((r=_.length)<=v?"0."+x("0",v-r)+_:C(_,0,r-v)+"."+C(_,r-v)):h+_}})},313:function(t,e,o){var content=o(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(113).default)("5524941c",content,!0,{sourceMap:!1})},320:function(t,e,o){"use strict";o(313)},321:function(t,e,o){var n=o(112)((function(i){return i[1]}));n.push([t.i,".showModal{display:block;opacity:1!important;visibility:visible}",""]),n.locals={},t.exports=n},326:function(t,e,o){"use strict";o.r(e);o(306),o(212),o(48),o(42),o(15);var n=o(10),r=(o(33),o(34),o(64),{head:function(){return{title:this.modulo}},data:function(){return{modulo:"Caja",page:"Caja",load:!1,modalMovimiento:!1,user:{},caja:{salidas:0,ingresos:0,total:0,movimientos:[]},movimiento:{motivo:"",monto:0,tipo:1}}},computed:{},methods:{GET_DATA:function(path){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get(path);case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))()},AddMovimiento:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.load=!0,t.modalMovimiento=!1,t.movimiento.caja_id=t.caja.id,e.next=5,t.$api.$post("cajaMovimientos",t.movimiento);case 5:return e.next=7,Promise.all([t.GET_DATA("cajas/"+t.user.caja_id)]).then((function(e){t.caja=e[0]}));case 7:t.movimiento.motivo="",t.movimiento.monto=0,t.movimiento.tipo=1,t.load=!1;case 11:case"end":return e.stop()}}),e)})))()},Save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.load=!0,e.prev=1,o=t.caja.id,e.next=5,t.$api.$put("cajas/"+o,{id:o});case 5:return n=e.sent,(r=t.user).caja_id=n.id,localStorage.setItem("userAuth",JSON.stringify(r)),t.user=r,e.next=12,Promise.all([t.GET_DATA("cajas/"+t.user.caja_id)]).then((function(e){t.caja=e[0]}));case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:return e.prev=16,t.load=!1,e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,14,16,19]])})))()}},mounted:function(){var t=this,e=localStorage.getItem("userAuth");this.user=JSON.parse(e),this.$nextTick(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.load=!0,e.next=3,Promise.all([t.GET_DATA("cajas/"+t.user.caja_id)]).then((function(e){t.caja=e[0]}));case 3:t.load=!1;case 4:case"end":return e.stop()}}),e)}))))}}),l=(o(320),o(46)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("JcLoader",{attrs:{load:t.load}}),t._v(" "),e("AdminTemplate",{attrs:{page:t.page,modulo:t.modulo}},[e("div",{attrs:{slot:"body"},slot:"body"},[e("div",{staticClass:"row justify-content-end"},[e("div",{staticClass:"col-12 col-sm-7"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card h-100 mt-4 mt-md-0"},[e("div",{staticClass:"card-header pb-0 p-3"},[e("div",{staticClass:"d-flex align-items-center"},[e("h6",[t._v("Movimientos")]),t._v(" "),e("button",{staticClass:"btn btn-icon-only btn-rounded btn-outline-success mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto",attrs:{type:"button","data-bs-toggle":"tooltip","data-bs-placement":"bottom","aria-label":"Data is based from sessions and is 100% accurate","data-bs-original-title":"Data is based from sessions and is 100% accurate"},on:{click:function(e){t.modalMovimiento=!0}}},[e("i",{staticClass:"fas fa-plus",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e("div",{staticClass:"card-body px-3 pt-0 pb-2"},[e("div",{staticClass:"table-responsive p-0"},[e("table",{staticClass:"table align-items-center justify-content-center mb-0"},[e("thead",[e("tr",[e("th",{staticClass:"text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"},[t._v("\n                            No\n                          ")]),t._v(" "),e("th",{staticClass:"text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"},[t._v("\n                            Motivo\n                          ")]),t._v(" "),e("th",{staticClass:"text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"},[t._v("\n                            Monto\n                          ")])])]),t._v(" "),e("tbody",t._l(t.caja.movimientos,(function(o,i){return e("tr",[e("td",[e("p",{staticClass:"text-sm font-weight-bold mb-0"},[t._v("\n                              "+t._s(i+1)+"\n                            ")])]),t._v(" "),e("td",[e("p",{staticClass:"text-sm font-weight-bold mb-0"},[t._v(t._s(o.motivo))])]),t._v(" "),e("td",[1==o.tipo?e("p",{staticClass:"text-sm font-weight-bold mb-0"},[t._v("\n                               "+t._s(o.monto)+"\n                            ")]):e("p",{staticClass:"text-sm text-danger font-weight-bold mb-0"},[t._v("\n                              -"+t._s(o.monto)+"\n                            ")])])])})),0)])])])])])])]),t._v(" "),e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"card card-pricing"},[e("div",{staticClass:"card-header text-center pt-4 pb-5 position-relative",staticStyle:{background:"linear-gradient(45deg, rgba(38,186,34,1) 30%, rgba(245,153,22,0.9561688311688312) 60%)"}},[e("div",{staticClass:"z-index-1 position-relative"},[e("h1",{staticClass:"text-white mt-2 mb-0"},[e("small"),t._v("$ "+t._s(Number(t.caja.total).toFixed(2)))]),t._v(" "),e("h6",{staticClass:"text-white"},[t._v("Total")])])]),t._v(" "),e("div",{staticClass:"position-relative mt-n5",staticStyle:{height:"50px"}},[e("div",{staticClass:"position-absolute w-100"},[e("svg",{staticClass:"waves waves-sm",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 40",preserveAspectRatio:"none","shape-rendering":"auto"}},[e("defs",[e("path",{attrs:{id:"card-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),t._v(" "),e("g",{staticClass:"moving-waves"},[e("use",{attrs:{"xlink:href":"#card-wave",x:"48",y:"-1",fill:"rgba(255,255,255,0.30"}}),t._v(" "),e("use",{attrs:{"xlink:href":"#card-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.35)"}}),t._v(" "),e("use",{attrs:{"xlink:href":"#card-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.25)"}}),t._v(" "),e("use",{attrs:{"xlink:href":"#card-wave",x:"48",y:"8",fill:"rgba(255,255,255,0.20)"}}),t._v(" "),e("use",{attrs:{"xlink:href":"#card-wave",x:"48",y:"13",fill:"rgba(255,255,255,0.15)"}}),t._v(" "),e("use",{attrs:{"xlink:href":"#card-wave",x:"48",y:"16",fill:"rgba(255,255,255,0.99)"}})])])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group"},[e("li",{staticClass:"list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"icon icon-shape icon-sm me-3 shadow text-center",staticStyle:{"background-color":"rgba(38,186,34,1)"}},[e("svg",{staticStyle:{color:"white"},attrs:{width:"23px",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L9.29289 10.7071C9.48043 10.8946 9.73478 11 10 11C10.2652 11 10.5196 10.8946 10.7071 10.7071L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L11 7.58579L11 3C11 2.44771 10.5523 2 10 2C9.44771 2 9 2.44772 9 3V7.58579L8.70711 7.29289Z",fill:"white"}}),t._v(" "),e("path",{attrs:{d:"M3 5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5L5 5V12H7L8 14H12L13 12H15V5H14C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5Z",fill:"white"}})])]),t._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("h6",{staticClass:"mb-1 text-dark text-sm"},[t._v("Ingresos")]),t._v(" "),e("span",{staticClass:"text-xs"},[t._v("$ "+t._s(Number(t.caja.ingresos).toFixed(2))+"\n                      ")])])]),t._v(" "),e("div",{staticClass:"d-flex"})]),t._v(" "),e("li",{staticClass:"list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"icon icon-shape icon-sm me-3 shadow text-center",staticStyle:{"background-color":"rgba(38,186,34,1)"}},[e("svg",{staticStyle:{color:"white"},attrs:{width:"18px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z",fill:"white"}})])]),t._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("h6",{staticClass:"mb-1 text-dark text-sm"},[t._v("Ventas")]),t._v(" "),e("span",{staticClass:"text-xs"},[t._v("$ "+t._s(Number(t.caja.ventas).toFixed(2)))])])]),t._v(" "),e("div",{staticClass:"d-flex"})]),t._v(" "),e("li",{staticClass:"list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"icon icon-shape icon-sm me-3 shadow text-center",staticStyle:{"background-color":"#c53229"}},[e("svg",{staticStyle:{color:"white"},attrs:{width:"22px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zM8 11h2v3h4v-3h2l-4-4-4 4z",fill:"white"}})])]),t._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("h6",{staticClass:"mb-1 text-dark text-sm"},[t._v("Salidas")]),t._v(" "),e("span",{staticClass:"text-xs"},[t._v("$ "+t._s(Number(t.caja.salidas).toFixed(2)))])])]),t._v(" "),e("div",{staticClass:"d-flex"})]),t._v(" "),e("li",{staticClass:"list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"icon icon-shape icon-sm me-3 shadow text-center",staticStyle:{"background-color":"#c53229"}},[e("svg",{staticClass:"bi bi-cart-fill",staticStyle:{color:"white"},attrs:{widths:"25px",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",fill:"white"}})])]),t._v(" "),e("div",{staticClass:"d-flex flex-column"},[e("h6",{staticClass:"mb-1 text-dark text-sm"},[t._v("Compras")]),t._v(" "),e("span",{staticClass:"text-xs font-weight-bold"},[t._v("$ "+t._s(Number(t.caja.compras).toFixed(2)))])])]),t._v(" "),e("div",{staticClass:"d-flex"})])]),t._v(" "),e("a",{staticClass:"btn w-100 mt-4 mb-0",staticStyle:{background:"linear-gradient(45deg, rgba(38,186,34,1) 30%, rgba(245,153,22,0.9561688311688312) 60%)",color:"white"},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.Save()}}},[e("i",{staticClass:"fas fa-save mx-2"}),t._v(" FINALIZAR / APERTURAR CAJA\n              ")])])])]),t._v(" "),e("div",{staticClass:"modal fade",class:t.modalMovimiento?"showModal":"",attrs:{id:"AjusteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n                  Nuevo Movimiento\n                ")]),t._v(" "),e("button",{staticClass:"btn-close text-dark",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:function(e){t.modalMovimiento=!1}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Motivo")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.movimiento.motivo,expression:"movimiento.motivo"}],staticClass:"form-control",attrs:{type:"text",name:"",id:""},domProps:{value:t.movimiento.motivo},on:{input:function(e){e.target.composing||t.$set(t.movimiento,"motivo",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Monto")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.movimiento.monto,expression:"movimiento.monto"}],staticClass:"form-control",attrs:{type:"text",name:"",id:""},domProps:{value:t.movimiento.monto},on:{input:function(e){e.target.composing||t.$set(t.movimiento,"monto",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Movimiento")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.movimiento.tipo,expression:"movimiento.tipo"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.movimiento,"tipo",e.target.multiple?o:o[0])}}},[e("option",{attrs:{value:"1"}},[t._v("Ingreso")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Salida")])])])])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:function(e){t.modalMovimiento=!1}}},[t._v("\n                  Cerrar\n                ")]),t._v(" "),e("button",{staticClass:"btn btn-primary",staticStyle:{"background-color":"#f59916"},attrs:{type:"button"},on:{click:function(e){return t.AddMovimiento()}}},[t._v("\n                  Guardar\n                ")])])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{JcLoader:o(301).default,AdminTemplate:o(305).default})}}]);