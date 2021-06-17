import{d as a,p as e,a as t,r as n,o,c as s,F as c,A as l,b as r,t as i,k as d,m,w as p,J as u,i as v,L as h,n as f,M as b,N as g,C as y,T as k,K as C,I as _}from"./vendor.82c32546.js";import{T as x}from"./vvmui.bfc3abbf.js";const w=[{name:"指南",packages:[{name:"介绍",path:"intro"},{name:"icon - 图标",path:"icon"}]},{name:"布局组件",packages:[{name:"Card - 卡片",path:"card"},{name:"Cell - 单元格",path:"cell"}]},{name:"基础组件",packages:[{name:"Button - 按钮",path:"button"},{name:"Popup - 弹出层",path:"popup"},{name:"ScrollCard - 滑动视图",path:"scroll-card"},{name:"Picker - 选择器",path:"picker"}]},{name:"表单组件",packages:[{name:"Input - 输入框",path:"input"},{name:"ActionSheet - 动作面板",path:"action-sheet"},{name:"Radio - 单选",path:"radio"},{name:"Checkbox - 多选",path:"checkbox"},{name:"Switch - 开关",path:"switch"},{name:"Rate - 评分",path:"rate"}]},{name:"操作反馈",packages:[{name:"Toast - 吐司",path:"toast"},{name:"Dialog - 弹出框",path:"dialog"},{name:"Notify - 消息通知",path:"notify"}]}];var L=a({setup:()=>({navList:w})});const S=p();e("data-v-72a1fcfa");const I={class:"doc-nav vvm-scrollbar"},N={class:"title"},$={key:0};t();const A=S(((a,e,t,p,u,v)=>{const h=n("router-link");return o(),s("div",I,[(o(!0),s(c,null,l(a.navList,(a=>(o(),s("ul",null,[r("li",N,i(a.name),1),a.packages.length?(o(),s("ol",$,[(o(!0),s(c,null,l(a.packages,(a=>(o(),s("li",null,[r(h,{class:"nav-tag",to:a.path.toLowerCase()},{default:S((()=>[d(i(a.name),1)])),_:2},1032,["to"])])))),256))])):m("",!0)])))),256))])}));L.render=A,L.__scopeId="data-v-72a1fcfa";const D=["intro","icon"];var E=a({name:"demo",setup(){const a=u(),e=v(""),t=a=>{D.includes(a)?e.value="":e.value=a};return h((a=>{t(String(a.name))})),f((()=>{t(String(a.name))})),{demo:"https://foneqinrf.github.io/fone-vvmui/mobile.html",path:e}}});const T=p();e("data-v-3e43b318");const j={class:"demo-wrp"};t();const q=T(((a,e,t,n,c,l)=>(o(),s("div",j,[r("iframe",{name:"demo-content",src:`${a.demo}#/${a.path}`}," ",8,["src"])]))));E.render=q,E.__scopeId="data-v-3e43b318";var H=a({name:"layout",components:{Nav:L,Demo:E},setup:()=>{var a;return{style:{height:document.body.clientHeight-(null==(a=document.querySelector(".vvm-navbar"))?void 0:a.clientHeight)+"px"}}},directives:{"copy-code":{mounted(a){b((()=>{a.handler=e=>{if("copy"===e.target.className){const t=e.target.getAttribute("value");if(!t)return void console.log("无复制内容");const n=document.createElement("textarea");n.readOnly="readonly",n.style.position="absolute",n.style.left="-9999px",n.value=t,document.body.appendChild(n),n.select();if(document.execCommand("Copy")){if(a.$callback&&"function"==typeof a.$callback)return void a.$callback();x.info("复制成功")}document.body.removeChild(n)}},a.addEventListener("click",a.handler)}))},unmounted(a){a.removeEventListener("click",a.handler)}}}});const P=p();e("data-v-5f758d90");const R={class:"doc-main vvm-scrollbar"};t();const B=P(((a,e,t,c,l,i)=>{const d=n("Nav"),m=n("router-view"),p=n("Demo"),u=g("copy-code");return o(),s("div",{style:a.style,class:"vvm-layout"},[r(d),y(r("div",R,[r(m,null,{default:P((({Component:a})=>[r(k,null,{default:P((()=>[(o(),s(C,null,[(o(),s(_(a)))],1024))])),_:2},1024)])),_:1}),r(p)],512),[[u]])],4)}));H.render=B,H.__scopeId="data-v-5f758d90";export default H;
