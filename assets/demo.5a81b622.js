import{d as l,i as e,r as a,o,c as u,b as n}from"./vendor.82c32546.js";var d=l({setup:()=>({value:e(3)})});const s={class:"demo-padding"},t=n("h4",null,"使用方式",-1),c=n("h4",null,"初始化选中",-1),i=n("h4",null,"禁用",-1),r=n("h4",null,"自定义图标",-1),v=n("h4",null,"自定义颜色",-1),m=n("h4",null,"自定义数量",-1),h=n("h4",null,"自定义大小",-1);d.render=function(l,e,d,p,V,b){const f=a("Rate");return o(),u("div",s,[t,n(f),c,n(f,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=e=>l.value=e)},null,8,["modelValue"]),i,n(f,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=e=>l.value=e),disabled:""},null,8,["modelValue"]),r,n(f,{"active-icon":"iconbrowse","default-icon":"iconbrowse"}),v,n(f,{"active-color":"#1FAF70"}),m,n(f,{count:7}),h,n(f,{size:34})])};export default d;
