import{_ as f,o as _,b as l,r as p,e as r,d as t,a as s,t as i,u as m}from"./entry.53bdb130.js";const d={};function v(n,e){return _(),l("button",{onClick:e[0]||(e[0]=o=>n.$emit("sample-emit"))}," Click to emit ")}const x=f(d,[["render",v]]),B={__name:"emit-and-ref",setup(n){let e=0;function o(){e++}const a=p(0);function u(){a.value++}return(k,E)=>{const c=x;return _(),l("div",null,[r("div",null,[t(" No ref: "),s(c,{onSampleEmit:o}),t(" 👉 "+i(m(e)),1)]),r("div",null,[t(" Ref: "),s(c,{onSampleEmit:u}),t(" 👉 "+i(m(a)),1)])])}}};export{B as default};
