import{T as o}from"./vvmui.bfc3abbf.js";import{d as l,r as n,o as r,c as i,b as s,s as e}from"./vendor.82c32546.js";var c=l({setup:()=>({info:()=>{o.info("消息",{onClose:()=>{console.log("关闭")}})},success:()=>{o.success()},error:()=>{o.error()},warning:()=>{o.warning()},loading:()=>{o.loading(),setTimeout((()=>{o.close()}),2e3)}})});const a={class:"not-padding"},t=s("h4",null,"使用方式",-1);c.render=function(o,l,c,u,C,d){const f=n("Cell"),g=n("CellGroup");return r(),i("div",a,[t,s(g,null,{default:e((()=>[s(f,{onClick:o.info,title:"info 提示",arrow:""},null,8,["onClick"]),s(f,{onClick:o.success,title:"success 成功提示",arrow:""},null,8,["onClick"]),s(f,{onClick:o.error,title:"error 错误提示",arrow:""},null,8,["onClick"]),s(f,{onClick:o.warning,title:"warning 警告提示",arrow:""},null,8,["onClick"]),s(f,{onClick:o.loading,title:"loading 加载",arrow:""},null,8,["onClick"])])),_:1})])};export default c;
