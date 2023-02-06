"use strict";(self.webpackChunkphrude_doc=self.webpackChunkphrude_doc||[]).push([[201],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),i=s(t),m=a,f=i["".concat(u,".").concat(m)]||i[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[i]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>i,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const l={sidebar_position:2},o="\u691c\u77e5\u30eb\u30fc\u30eb\u306e\u4f8b",p={unversionedId:"rule/example",id:"rule/example",title:"\u691c\u77e5\u30eb\u30fc\u30eb\u306e\u4f8b",description:"subprocess\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3088\u308b\u65b0\u898f\u30d7\u30ed\u30bb\u30b9\u306e\u4f5c\u6210",source:"@site/docs/rule/example.md",sourceDirName:"rule",slug:"/rule/example",permalink:"/docs/rule/example",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rule/example.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u691c\u77e5\u30eb\u30fc\u30eb\u306e\u69cb\u6587",permalink:"/docs/rule/basis"}},u={},s=[{value:"subprocess\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3088\u308b\u65b0\u898f\u30d7\u30ed\u30bb\u30b9\u306e\u4f5c\u6210",id:"subprocess\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3088\u308b\u65b0\u898f\u30d7\u30ed\u30bb\u30b9\u306e\u4f5c\u6210",level:3},{value:"\u63a8\u5968\u6761\u4ef6\u8a18\u8ff0",id:"\u63a8\u5968\u6761\u4ef6\u8a18\u8ff0",level:4},{value:"os\u30d1\u30c3\u30b1\u30fc\u30b8\u306epopen\u306b\u3088\u308b\u65b0\u898f\u30d7\u30ed\u30bb\u30b9\u306e\u4f5c\u6210",id:"os\u30d1\u30c3\u30b1\u30fc\u30b8\u306epopen\u306b\u3088\u308b\u65b0\u898f\u30d7\u30ed\u30bb\u30b9\u306e\u4f5c\u6210",level:3},{value:"request\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a",id:"request\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a",level:3},{value:"requests\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a\u6642\u306eIP\u30a2\u30c9\u30ec\u30b9\u306e\u8a18\u9332",id:"requests\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a\u6642\u306eip\u30a2\u30c9\u30ec\u30b9\u306e\u8a18\u9332",level:3},{value:"DNS\u306e\u540d\u524d\u89e3\u6c7a\u306e\u8a18\u9332",id:"dns\u306e\u540d\u524d\u89e3\u6c7a\u306e\u8a18\u9332",level:3},{value:"\u63a8\u5968\u6761\u4ef6\u8a18\u8ff0",id:"\u63a8\u5968\u6761\u4ef6\u8a18\u8ff0-1",level:4},{value:"\u74b0\u5883\u5909\u6570\u306e\u53d6\u5f97",id:"\u74b0\u5883\u5909\u6570\u306e\u53d6\u5f97",level:3}],c={toc:s};function i(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u691c\u77e5\u30eb\u30fc\u30eb\u306e\u4f8b"},"\u691c\u77e5\u30eb\u30fc\u30eb\u306e\u4f8b"),(0,a.kt)("h3",{id:"subprocess\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3088\u308b\u65b0\u898f\u30d7\u30ed\u30bb\u30b9\u306e\u4f5c\u6210"},"subprocess\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u3088\u308b\u65b0\u898f\u30d7\u30ed\u30bb\u30b9\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u30de\u30eb\u30a6\u30a7\u30a2\u306e\u5b9f\u884c\u30fb\u30d0\u30c3\u30af\u30c9\u30a2\u306e\u5b9f\u884c\u30fb\u5916\u90e8\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308b\u60aa\u7528\u306a\u3069\u306b\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: code executed by subprocess\n  func: _execute_child\n  file: subprocess.py\n  value:\n    cmd: "$func_args[args]"\n  level: alert\n')),(0,a.kt)("h4",{id:"\u63a8\u5968\u6761\u4ef6\u8a18\u8ff0"},"\u63a8\u5968\u6761\u4ef6\u8a18\u8ff0"),(0,a.kt)("p",null,"\u5916\u90e8\u30b3\u30de\u30f3\u30c9(\u4f8b : ",(0,a.kt)("inlineCode",{parentName:"p"},"imagemagick"),")\u3067\u306e\u51e6\u7406\u3092\u884c\u3046\u5834\u5408\u3001\u547c\u3073\u51fa\u3057\u95a2\u6570\u540d\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  condition:\n    func: # \u547c\u3073\u51fa\u3057\u5143\u95a2\u6570\n      allow: # \u547c\u3073\u51fa\u3057\u5143\u95a2\u6570\u306b\u4ee5\u4e0b\u306e\u95a2\u6570\u304c\u542b\u307e\u308c\u308b\u5834\u5408\u3001\u691c\u77e5\u3057\u306a\u3044\n        - imagemagick_convert\n")),(0,a.kt)("p",null,"Flask\u3067\u958b\u767a\u30b5\u30fc\u30d0\u30fc\u3067\u52d5\u4f5c\u3055\u305b\u308b\u5834\u5408\u3001\u81ea\u8eab\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u30d5\u30a1\u30a4\u30eb\u306e\u5b9f\u884c\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  condition:\n    arg: # \u5f15\u6570\n      allow: # \u5f15\u6570\u306b\u4ee5\u4e0b\u304c\u542b\u307e\u308c\u308b\u5834\u5408\u3001\u691c\u77e5\u3057\u306a\u3044\n        - \"['/usr/local/bin/python', '/app/main.py']\"\n")),(0,a.kt)("h3",{id:"os\u30d1\u30c3\u30b1\u30fc\u30b8\u306epopen\u306b\u3088\u308b\u65b0\u898f\u30d7\u30ed\u30bb\u30b9\u306e\u4f5c\u6210"},"os\u30d1\u30c3\u30b1\u30fc\u30b8\u306epopen\u306b\u3088\u308b\u65b0\u898f\u30d7\u30ed\u30bb\u30b9\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u30de\u30eb\u30a6\u30a7\u30a2\u306e\u5b9f\u884c\u30fb\u30d0\u30c3\u30af\u30c9\u30a2\u306e\u5b9f\u884c\u30fb\u5916\u90e8\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308b\u60aa\u7528\u306a\u3069\u306b\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: code executed by os.popen\n  func: popen\n  file: os.py\n  value:\n    cmd: "$func_args[cmd]"\n  level: alert\n')),(0,a.kt)("p",null,"##\u3000urllib\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a"),(0,a.kt)("p",null,"\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u60c5\u5831\u6d41\u51fa\u306a\u3069\u306b\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: http request by urllib\n  func: create_connection\n  file: socket.py\n  value:\n    address: "$func_args[address]"\n  level: warn\n')),(0,a.kt)("h3",{id:"request\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a"},"request\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a"),(0,a.kt)("p",null,"\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u60c5\u5831\u6d41\u51fa\u306a\u3069\u306b\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: http request by requests\n  func: create_connection\n  file: connection.py\n  value:\n    address: "$func_args[address]"\n  level: warn\n')),(0,a.kt)("h3",{id:"requests\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a\u6642\u306eip\u30a2\u30c9\u30ec\u30b9\u306e\u8a18\u9332"},"requests\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a\u6642\u306eIP\u30a2\u30c9\u30ec\u30b9\u306e\u8a18\u9332"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ip2num"),"\u95a2\u6570\u3092\u691c\u77e5\u3059\u308b\u3053\u3068\u3067\u3001requests\u306b\u3088\u308b\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306ehttp\u63a5\u7d9a\u6642\u306eIP\u30a2\u30c9\u30ec\u30b9\u3092\u8a18\u9332\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: connected ip addr by requests\n  func: ip2num\n  file: request.py\n  value:\n    ip: "$func_args[ipAddr]"\n  level: info\n')),(0,a.kt)("h3",{id:"dns\u306e\u540d\u524d\u89e3\u6c7a\u306e\u8a18\u9332"},"DNS\u306e\u540d\u524d\u89e3\u6c7a\u306e\u8a18\u9332"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getaddrinfo"),"\u95a2\u6570\u3092\u691c\u77e5\u3059\u308b\u3053\u3068\u3067\u3001\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u63a5\u7d9a\u6642\u306eDNS\u306e\u540d\u524d\u89e3\u6c7a\u3092\u8a18\u9332\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: lookup dns record\n  func: getaddrinfo\n  file: socket.py\n  value:\n    host: "$func_args[host]"\n  level: info\n')),(0,a.kt)("h4",{id:"\u63a8\u5968\u6761\u4ef6\u8a18\u8ff0-1"},"\u63a8\u5968\u6761\u4ef6\u8a18\u8ff0"),(0,a.kt)("p",null,"Flask\u3092\u8d77\u52d5\u3059\u308b\u969b\u306b\u3001\u81ea\u8eab\u306eIP\u30a2\u30c9\u30ec\u30b9",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"\u3078\u306e\u540d\u524d\u89e3\u6c7a\u304c\u5b9f\u884c\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  condition:\n    arg: # \u5f15\u6570\n      allow: # \u5f15\u6570\u306b\u4ee5\u4e0b\u304c\u542b\u307e\u308c\u308b\u5834\u5408\u3001\u691c\u77e5\u3057\u306a\u3044\n        - 0.0.0.0\n")),(0,a.kt)("h3",{id:"\u74b0\u5883\u5909\u6570\u306e\u53d6\u5f97"},"\u74b0\u5883\u5909\u6570\u306e\u53d6\u5f97"),(0,a.kt)("p",null,"\u74b0\u5883\u5909\u6570\u306b\u683c\u7d0d\u3055\u308c\u305f\u9375\u60c5\u5831\u3084\u6a5f\u5bc6\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u6d41\u51fa\u306a\u3069\u306b\u4f7f\u7528\u3055\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: process getenv\n  func: getenv\n  file: os.py\n  value:\n    key: "$func_args[key]"\n  level: info\n')))}i.isMDXComponent=!0}}]);