(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8],{301:function(t,e,n){"use strict";n.r(e);var r=n(302),o=n.n(r),l=(n(303),{props:{load:{type:Boolean,default:!0}},data:function(){return{}},components:{Loading:o.a}}),c=n(46),component=Object(c.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"vld-parent"},[t("loading",{attrs:{active:this.load}})],1)}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function o(t,e,n,i,r,o,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var a=o({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:this.width,height:this.height,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),this._v(" "),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null);a.options.__file="spinner.vue";var s=a.exports,l=o({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:t.width,height:t.height,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:t.color}},[n("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[n("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),n("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[n("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),n("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[n("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t._v(" "),n("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null);l.options.__file="dots.vue";var c=l.exports,u=o({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active||!1}},components:{Spinner:s,Dots:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:this.backgroundColor,opacity:this.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),t._v(" "),n("div",{staticClass:"vld-icon"},[t._t("before"),t._v(" "),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._v(" "),t._t("after")],2)])])}),[],!1,null,null,null);u.options.__file="Component.vue";var d=u.exports;n(0),d.install=function(t){var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,o=Object.assign({},e,i,{programmatic:!0}),a=new(t.extend(d))({el:document.createElement("div"),propsData:o}),s=Object.assign({},n,r);return Object.keys(s).map((function(t){a.$slots[t]=s[t]})),a}}}(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});t.$loading=e,t.prototype.$loading=e},e.default=d}]).default},303:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(113).default)("cf231d7a",content,!0,{sourceMap:!1})},304:function(t,e,n){var r=n(112)((function(i){return i[1]}));r.push([t.i,".vld-overlay{align-items:center;bottom:0;display:none;justify-content:center;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:1}.vld-overlay.is-active{display:flex}.vld-overlay.is-full-page{position:fixed;z-index:999}.vld-overlay .vld-background{background:#fff;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0}.vld-overlay .vld-icon,.vld-parent{position:relative}",""]),r.locals={},t.exports=r},306:function(t,e,n){"use strict";var r=n(2),o=n(4),l=n(47),c=n(214),d=n(213),f=n(3),v=RangeError,h=String,m=Math.floor,y=o(d),_=o("".slice),x=o(1..toFixed),C=function(t,e,n){return 0===e?n:e%2==1?C(t,e-1,n*t):C(t*t,e/2,n)},w=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=m(r/1e7)},$=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=m(n/t),n=n%t*1e7},k=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+y("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!f((function(){x({})}))},{toFixed:function(t){var e,n,r,o,d=c(this),f=l(t),data=[0,0,0,0,0,0],m="",x="0";if(f<0||f>20)throw v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return h(d);if(d<0&&(m="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*C(2,69,1))-69)<0?d*C(2,-e,1):d/C(2,e,1),n*=4503599627370496,(e=52-e)>0){for(w(data,0,n),r=f;r>=7;)w(data,1e7,0),r-=7;for(w(data,C(10,r,1),0),r=e-1;r>=23;)$(data,1<<23),r-=23;$(data,1<<r),w(data,1,1),$(data,2),x=k(data)}else w(data,0,n),w(data,1<<-e,0),x=k(data)+y("0",f);return x=f>0?m+((o=x.length)<=f?"0."+y("0",f-o)+x:_(x,0,o-f)+"."+_(x,o-f)):m+x}})},332:function(t,e,n){"use strict";n.r(e);n(306),n(212);var r=n(10),o=(n(15),n(33),n(34),n(64),{head:function(){return{title:this.modulo}},data:function(){return{load:!0,list:[],sucursals:[],apiUrl:"cajas",page:"Caja",modulo:"Lista de Cajas",sucursal:{}}},methods:{GET_DATA:function(path){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$get(path);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([t.GET_DATA(t.apiUrl)]).then((function(e){t.list=e[0]}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:return e.prev=8,t.load=!1,e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,5,8,11]])}))))}}),l=n(46),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("JcLoader",{attrs:{load:t.load}}),t._v(" "),e("AdminTemplate",{attrs:{page:t.page,modulo:t.modulo}},[e("div",{attrs:{slot:"body"},slot:"body"},[e("div",{staticClass:"row justify-content-end"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("table",{staticClass:"table"},[e("thead",[e("th",{staticClass:"py-0 px-1"},[t._v("No")]),t._v(" "),e("th",{staticClass:"py-0 px-1"},[t._v("Fecha")]),t._v(" "),e("th",{staticClass:"py-0 px-1"},[t._v("Usuario")]),t._v(" "),e("th",{staticClass:"py-0 px-1"},[t._v("Total")])]),t._v(" "),e("tbody",t._l(t.list,(function(n,i){return e("tr",[e("td",{staticClass:"py-0 px-1"},[t._v(t._s(i+1))]),t._v(" "),e("td",{staticClass:"py-0 px-1"},[t._v(t._s(n.fecha))]),t._v(" "),e("td",{staticClass:"py-0 px-1"},[t._v(t._s(n.user.nombre))]),t._v(" "),e("td",{staticClass:"py-0 px-1"},[t._v(t._s(Number(n.total).toFixed(2)))])])})),0)])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{JcLoader:n(301).default,AdminTemplate:n(305).default})}}]);