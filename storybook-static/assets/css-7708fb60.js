var f=function(){const t=Array.prototype.slice.call(arguments).filter(Boolean),n={},c=[];t.forEach(e=>{(e?e.split(" "):[]).forEach(o=>{if(o.startsWith("atm_")){const[,a]=o.split("_");n[a]=o}else c.push(o)})});const r=[];for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.push(n[e]);return r.push(...c),r.join(" ")},u=f;const y=(s="",t,n)=>({className:s,style:t,"data-component":n});function l(s){return s&&typeof s=="object"&&"className"in s}function d(s,t){return t?l(s)?{...s,className:d(t,s.className)}:typeof s=="string"?u(t,s):s:s}const p=({themeValues:s,varPrefix:t})=>Object.keys(s).reduce((c,r)=>(c[`${t}-${r}`]=s[r]+"",c),{});function h(s,t,n){const c=p({varPrefix:t,themeValues:s}),r=Object.keys(s),e=r.reduce((i,o)=>(i[o]=`${t}-${o}`,i),{});if(typeof n=="string"){const i=r.reduce((o,a)=>(o[a]=`${n}: var(${e[a]});`,o),{});return{vars:e,css:i,definitions:c}}return{vars:e,definitions:c}}export{h as b,d as c,y as t};
