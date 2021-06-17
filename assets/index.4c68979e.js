import{r as l,c as n,b as t,o as s,s as u,k as a}from"./vendor.82c32546.js";const e={class:"markdown-body"},r=t("h1",null,"Dialog 弹出窗",-1),d=t("hr",null,null,-1),o=t("h3",null,"组件调用",-1),c=t("pre",null,[t("code",{class:"hljs Javascript"},[t("span",{class:"copy",value:"import { createApp } from 'vue';\nimport { Dialog } from 'vvmui';\n\nconst app = createApp();\napp.use(Dialog);\n"},"复制代码"),t("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),a(),t("span",{class:"hljs-string"},"'vue'"),a(";\n"),t("span",{class:"hljs-keyword"},"import"),a(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),a(),t("span",{class:"hljs-string"},"'vvmui'"),a(";\n\n"),t("span",{class:"hljs-keyword"},"const"),a(" app = createApp();\napp.use(Dialog);\n")])],-1),p=t("br",null,null,-1),h=t("h3",null,"函数调用",-1),i=t("pre",null,[t("code",{class:"hljs Javascript"},[t("span",{class:"copy",value:"import { Dialog } from 'vvmui';\n\nDialog.alert({ msg: '提示内容' });\n"},"复制代码"),t("span",{class:"hljs-keyword"},"import"),a(" { Dialog } "),t("span",{class:"hljs-keyword"},"from"),a(),t("span",{class:"hljs-string"},"'vvmui'"),a(";\n\nDialog.alert({ "),t("span",{class:"hljs-attr"},"msg"),a(": "),t("span",{class:"hljs-string"},"'提示内容'"),a(" });\n")])],-1),g=t("h2",null,"代码演示",-1),j=t("h3",null,"基本用法",-1),f=t("p",null,"用于普通的消息提示",-1),m=t("pre",null,[t("code",{class:"hljs Javascript"},[t("span",{class:"copy",value:"const dialog = Dialog.alert({\n  msg: '这是提示内容',\n  onConfirm: () => {\n    dialog.close();\n  }\n});\n"},"复制代码"),t("span",{class:"hljs-keyword"},"const"),a(" dialog = Dialog.alert({\n  "),t("span",{class:"hljs-attr"},"msg"),a(": "),t("span",{class:"hljs-string"},"'这是提示内容'"),a(",\n  "),t("span",{class:"hljs-attr"},"onConfirm"),a(": "),t("span",{class:"hljs-function"},"() =>"),a(" {\n    dialog.close();\n  }\n});\n")])],-1),v=t("br",null,null,-1),w=t("h3",null,"无按钮弹窗",-1),y=t("p",null,[a("通过"),t("code",null,"showButton"),a("属性可定义无按钮的提示")],-1),C=t("pre",null,[t("code",{class:"hljs Javascript"},[t("span",{class:"copy",value:"Dialog.alert({\n  msg: '这是提示内容',\n  onClickOverlay: true,\n  showButton: false\n});\n"},"复制代码"),a("Dialog.alert({\n  "),t("span",{class:"hljs-attr"},"msg"),a(": "),t("span",{class:"hljs-string"},"'这是提示内容'"),a(",\n  "),t("span",{class:"hljs-attr"},"onClickOverlay"),a(": "),t("span",{class:"hljs-literal"},"true"),a(",\n  "),t("span",{class:"hljs-attr"},"showButton"),a(": "),t("span",{class:"hljs-literal"},"false"),a("\n});\n")])],-1),D=t("br",null,null,-1),b=t("h3",null,"无标题弹窗",-1),k=t("p",null,[a("通过"),t("code",null,"showTitle"),a("可设置无"),t("code",null,"title"),a("内容的提示")],-1),B=t("pre",null,[t("code",{class:"hljs Javascript"},[t("span",{class:"copy",value:"Dialog.alert({\n  msg: '这是提示内容',\n  onClickOverlay: true,\n  showTitle: false\n});\n"},"复制代码"),a("Dialog.alert({\n  "),t("span",{class:"hljs-attr"},"msg"),a(": "),t("span",{class:"hljs-string"},"'这是提示内容'"),a(",\n  "),t("span",{class:"hljs-attr"},"onClickOverlay"),a(": "),t("span",{class:"hljs-literal"},"true"),a(",\n  "),t("span",{class:"hljs-attr"},"showTitle"),a(": "),t("span",{class:"hljs-literal"},"false"),a("\n});\n")])],-1),_=t("br",null,null,-1),S=t("h3",null,"带取消按钮弹窗",-1),T=t("p",null,[a("通过"),t("code",null,"showCancel"),a("属性可添加取消按钮，取消按钮默认点击可关闭弹窗")],-1),J=t("pre",null,[t("code",{class:"hljs Javascript"},[t("span",{class:"copy",value:"Dialog.alert({\n  msg: '这是提示内容',\n  showCancel: true\n});\n"},"复制代码"),a("Dialog.alert({\n  "),t("span",{class:"hljs-attr"},"msg"),a(": "),t("span",{class:"hljs-string"},"'这是提示内容'"),a(",\n  "),t("span",{class:"hljs-attr"},"showCancel"),a(": "),t("span",{class:"hljs-literal"},"true"),a("\n});\n")])],-1),x=t("h2",null,"高级使用方式",-1),O=t("h3",null,"自定义标题",-1),N=t("p",null,"通过渲染函数可自定义头部内容模版",-1),V=t("pre",null,[t("code",{class:"hljs Javascript"},[t("span",{class:"copy",value:"import { createVNode } from 'vue';\n\nDialog.alert({\n  title: () => {\n    return createVNode('span', {}, '自定义标题');\n  },\n  msg: '这是提示内容',\n  showCancel: true\n});\n"},"复制代码"),t("span",{class:"hljs-keyword"},"import"),a(" { createVNode } "),t("span",{class:"hljs-keyword"},"from"),a(),t("span",{class:"hljs-string"},"'vue'"),a(";\n\nDialog.alert({\n  "),t("span",{class:"hljs-attr"},"title"),a(": "),t("span",{class:"hljs-function"},"() =>"),a(" {\n    "),t("span",{class:"hljs-keyword"},"return"),a(" createVNode("),t("span",{class:"hljs-string"},"'span'"),a(", {}, "),t("span",{class:"hljs-string"},"'自定义标题'"),a(");\n  },\n  "),t("span",{class:"hljs-attr"},"msg"),a(": "),t("span",{class:"hljs-string"},"'这是提示内容'"),a(",\n  "),t("span",{class:"hljs-attr"},"showCancel"),a(": "),t("span",{class:"hljs-literal"},"true"),a("\n});\n")])],-1),A=t("br",null,null,-1),L=t("h3",null,"自定义内容",-1),E=t("pre",null,[t("code",{class:"hljs Javascript"},[t("span",{class:"copy",value:"import { createVNode } from 'vue';\n\nDialog.alert({\n  msg: () => {\n    return createVNode(Input, {\n      textAlign: 'center'\n    });\n  },\n  showCancel: true\n});\n"},"复制代码"),t("span",{class:"hljs-keyword"},"import"),a(" { createVNode } "),t("span",{class:"hljs-keyword"},"from"),a(),t("span",{class:"hljs-string"},"'vue'"),a(";\n\nDialog.alert({\n  "),t("span",{class:"hljs-attr"},"msg"),a(": "),t("span",{class:"hljs-function"},"() =>"),a(" {\n    "),t("span",{class:"hljs-keyword"},"return"),a(" createVNode(Input, {\n      "),t("span",{class:"hljs-attr"},"textAlign"),a(": "),t("span",{class:"hljs-string"},"'center'"),a("\n    });\n  },\n  "),t("span",{class:"hljs-attr"},"showCancel"),a(": "),t("span",{class:"hljs-literal"},"true"),a("\n});\n")])],-1),F=t("br",null,null,-1),I=t("h3",null,"组件使用",-1),X=t("p",null,"面对复杂的展示内容时可选择组件的方式使用",-1),M=t("pre",null,[t("code",{class:"hljs HTML, XML"},[t("span",{class:"copy",value:"<Dialog v-model:show='show' :onClickOverlay='true'>\n  <p>提示内容</p>\n</Dialog>\n"},"复制代码"),t("span",{class:"hljs-tag"},[a("<"),t("span",{class:"hljs-name"},"Dialog"),a(),t("span",{class:"hljs-attr"},"v-model:show"),a("="),t("span",{class:"hljs-string"},"'show'"),a(),t("span",{class:"hljs-attr"},":onClickOverlay"),a("="),t("span",{class:"hljs-string"},"'true'"),a(">")]),a("\n  "),t("span",{class:"hljs-tag"},[a("<"),t("span",{class:"hljs-name"},"p"),a(">")]),a("提示内容"),t("span",{class:"hljs-tag"},[a("</"),t("span",{class:"hljs-name"},"p"),a(">")]),a("\n"),t("span",{class:"hljs-tag"},[a("</"),t("span",{class:"hljs-name"},"Dialog"),a(">")]),a("\n")])],-1),P=t("h2",null,"API",-1),H=t("h3",null,"方法",-1),q=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"方法"),t("th",null,"说明"),t("th",null,"参数"),t("th",null,"返回值")])]),t("tbody",null,[t("tr",null,[t("td",null,"Dialog.alert"),t("td",null,"展示提示"),t("td",null,[t("code",null,"options")]),t("td",null,"组件的实例以及关闭的方法")])])],-1),z=t("br",null,null,-1),G=t("h3",null,"Options",-1),K=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值")])]),t("tbody",null,[t("tr",null,[t("td",null,"msg"),t("td",null,"提示内容，支持vue渲染函数"),t("td",null,"String ｜ () => JSX.ELement"),t("td",null,"-"),t("td",null,"-")]),t("tr",null,[t("td",null,"title"),t("td",null,"标题内容，支持vue渲染函数"),t("td",null,"String ｜ () => JSX.ELement"),t("td",null,"-"),t("td",null,"标题")]),t("tr",null,[t("td",null,"onClickOverlay"),t("td",null,"是否可点击背景关闭"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"false")]),t("tr",null,[t("td",null,"showTitle"),t("td",null,"是否显示标题内容"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"true")]),t("tr",null,[t("td",null,"showCancel"),t("td",null,"是否显示取消按钮"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"false")]),t("tr",null,[t("td",null,"showConfirm"),t("td",null,"是否显示确认按钮"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"true")]),t("tr",null,[t("td",null,"cancelText"),t("td",null,"取消按钮的文字"),t("td",null,"String"),t("td",null,"-"),t("td",null,"取消")]),t("tr",null,[t("td",null,"confirmText"),t("td",null,"确认按钮的文字"),t("td",null,"String"),t("td",null,"-"),t("td",null,"确认")]),t("tr",null,[t("td",null,"onCancelClose"),t("td",null,"是否点击取消关闭"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"true")]),t("tr",null,[t("td",null,"onConfirmClose"),t("td",null,"是否点击确认关闭"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"false")]),t("tr",null,[t("td",null,"onConfirm"),t("td",null,"点击确认按钮回调函数"),t("td",null,"Function"),t("td",null,"-"),t("td",null,"-")]),t("tr",null,[t("td",null,"onCancel"),t("td",null,"点击取消按钮回调函数"),t("td",null,"Function"),t("td",null,"-"),t("td",null,"-")]),t("tr",null,[t("td",null,"onClose"),t("td",null,"提示关闭回调函数"),t("td",null,"Function"),t("td",null,"-"),t("td",null,"-")])])],-1),Q=t("br",null,null,-1),R=t("h3",null,"Props",-1),U=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值")])]),t("tbody",null,[t("tr",null,[t("td",null,"v-model:show"),t("td",null,[a("控制"),t("code",null,"Dialog"),a("显示隐藏")]),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"false")]),t("tr",null,[t("td",null,"msg"),t("td",null,"提示内容，支持vue渲染函数"),t("td",null,"String"),t("td",null,"-"),t("td",null,"-")]),t("tr",null,[t("td",null,"title"),t("td",null,"标题内容，支持vue渲染函数"),t("td",null,"String"),t("td",null,"-"),t("td",null,"标题")]),t("tr",null,[t("td",null,"onClickOverlay"),t("td",null,"是否可点击背景关闭"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"false")]),t("tr",null,[t("td",null,"showTitle"),t("td",null,"是否显示标题内容"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"true")]),t("tr",null,[t("td",null,"showCancel"),t("td",null,"是否显示取消按钮"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"false")]),t("tr",null,[t("td",null,"showConfirm"),t("td",null,"是否显示确认按钮"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"true")]),t("tr",null,[t("td",null,"cancelText"),t("td",null,"取消按钮的文字"),t("td",null,"String"),t("td",null,"-"),t("td",null,"取消")]),t("tr",null,[t("td",null,"confirmText"),t("td",null,"确认按钮的文字"),t("td",null,"String"),t("td",null,"-"),t("td",null,"确认")]),t("tr",null,[t("td",null,"confirmText"),t("td",null,"确认按钮的文字"),t("td",null,"String"),t("td",null,"-"),t("td",null,"确认")]),t("tr",null,[t("td",null,"onCancelClose"),t("td",null,"是否点击取消关闭"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"true")]),t("tr",null,[t("td",null,"onConfirmClose"),t("td",null,"是否点击确认关闭"),t("td",null,"Boolean"),t("td",null,[t("code",null,"true"),a(),t("code",null,"false")]),t("td",null,"false")]),t("tr",null,[t("td",null,"teleport"),t("td",null,"期望渲染在的节点内"),t("td",null,"String"),t("td",null,"-"),t("td",null,"-")])])],-1),W=t("br",null,null,-1),Y=t("h3",null,"Dialog solt",-1),Z=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"无"),t("td",null,"自定义主体内容")]),t("tr",null,[t("td",null,"title"),t("td",null,"自定义标题内容")])])],-1),$=t("br",null,null,-1),ll=t("h3",null,"Dialog Events",-1),nl=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"回调参数")])]),t("tbody",null,[t("tr",null,[t("td",null,"confirm"),t("td",null,"点击确认按钮触发"),t("td",null,"-")]),t("tr",null,[t("td",null,"cancel"),t("td",null,"点击取消按钮触发"),t("td",null,"-")]),t("tr",null,[t("td",null,"close"),t("td",null,"关闭时触发"),t("td",null,"-")])])],-1),tl=t("br",null,null,-1),sl=t("h3",null,"更新日志",-1),ul=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"版本"),t("th",null,"类型"),t("th",null,"内容")])])],-1),al={expose:[],setup:a=>(a,al)=>{const el=l("Card");return s(),n("div",e,[r,d,t(el,null,{default:u((()=>[o,c])),_:1}),p,t(el,null,{default:u((()=>[h,i])),_:1}),g,t(el,null,{default:u((()=>[j,f,m])),_:1}),v,t(el,null,{default:u((()=>[w,y,C])),_:1}),D,t(el,null,{default:u((()=>[b,k,B])),_:1}),_,t(el,null,{default:u((()=>[S,T,J])),_:1}),x,t(el,null,{default:u((()=>[O,N,V])),_:1}),A,t(el,null,{default:u((()=>[L,E])),_:1}),F,t(el,null,{default:u((()=>[I,X,M])),_:1}),P,t(el,null,{default:u((()=>[H,q])),_:1}),z,t(el,null,{default:u((()=>[G,K])),_:1}),Q,t(el,null,{default:u((()=>[R,U])),_:1}),W,t(el,null,{default:u((()=>[Y,Z])),_:1}),$,t(el,null,{default:u((()=>[ll,nl])),_:1}),tl,t(el,null,{default:u((()=>[sl,ul])),_:1})])}};export default al;
