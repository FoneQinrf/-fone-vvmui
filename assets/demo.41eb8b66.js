import{d as l,i as e,r as a,o as t,c as u,b as n,s,m as d,k as r}from"./vendor.82c32546.js";var b=l({setup:()=>({value:e(["选项二"])})});const o={class:"demo-padding"},p=n("h4",null,"基本用法",-1),c=r("选项"),i=n("h4",null,"搭配CheckboxGroup使用",-1),y=n("h4",null,"type类型",-1),f=n("h4",null,"禁用",-1),h=n("h4",null,"选中字体跟随主题色",-1),m=n("h4",null,"布局方式",-1),_=n("h4",null,"配合icon使用",-1),g=n("span",null,"选项",-1);b.render=function(l,e,r,b,v,x){const k=a("Checkbox"),w=a("CheckboxGroup"),C=a("Icon");return t(),u("div",o,[p,n(k,null,{default:s((()=>[c])),_:1}),i,n(w,null,{default:s((()=>[n(k,{label:"选项一"}),n(k,{label:"选项二"}),n(k,{label:"选项三"})])),_:1}),y,n(w,null,{default:s((()=>[n(k,{type:"default",label:"选项一"}),n(k,{type:"success",label:"选项二"}),n(k,{type:"warning",label:"选项三"}),n(k,{type:"error",label:"选项四"})])),_:1}),f,n(w,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=e=>l.value=e)},{default:s((()=>[n(k,{type:"default",label:"选项一"}),n(k,{disabled:"",type:"success",label:"选项二"}),n(k,{disabled:"",type:"warning",label:"选项三"}),n(k,{disabled:"",type:"error",label:"选项四"})])),_:1},8,["modelValue"]),d("",!0),h,n(w,{"text-theme":""},{default:s((()=>[n(k,{type:"default",label:"选项一"}),n(k,{type:"success",label:"选项二"}),n(k,{type:"warning",label:"选项三"}),n(k,{type:"error",label:"选项四"})])),_:1}),m,n(w,{inline:!1},{default:s((()=>[n(k,{type:"default",label:"选项一"}),n(k,{type:"success",label:"选项二"}),n(k,{type:"warning",label:"选项三"}),n(k,{type:"error",label:"选项四"})])),_:1}),_,n(k,null,{default:s((()=>[n(C,{name:"icongithub"}),g])),_:1})])};export default b;
