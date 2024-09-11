import{j as D}from"./jsx-runtime-d079401a.js";import{c as W}from"./css-7708fb60.js";/* empty css                 */import{R as m,r as f}from"./index-f1f2c4b1.js";import{c as z,R as q,a as Y,u as _,b as G,d as B,e as F}from"./index-a8bd1a45.js";import"./index-5f347087.js";const{makeDecorator:J,addons:w}=__STORYBOOK_MODULE_PREVIEW_API__;var y="storybook/react-router-v6",Q="reactRouter",s={CLEAR:`${y}/clear`,NAVIGATION:`${y}/navigation`,STORY_LOADED:`${y}/story-loaded`,ROUTE_MATCHES:`${y}/route-matches`,ACTION_INVOKED:`${y}/action_invoked`,ACTION_SETTLED:`${y}/action_settled`,LOADER_INVOKED:`${y}/loader_invoked`,LOADER_SETTLED:`${y}/loader_settled`},I=m.createContext([]),C=m.createContext(void 0);function X(){let[t,r]=f.useState([]),e=Y;return e.Provider._context=new Proxy(e.Provider._context??{},{set(a,n,i){return n==="_currentValue"&&i!==void 0&&r(o=>i.matches.length>o.length?i.matches:o),Reflect.set(a,n,i)}}),t}function Z(t){let r={};return t.forEach((e,a)=>{if(e instanceof File){r[a]={filename:e.name,filesize:e.size,filetype:e.type};return}r[a]=e}),r}async function P(t){let r=t.clone(),e=r.headers.get("content-type")||"",a;switch(!0){case e.startsWith("text"):a=await r.text();break;case e.startsWith("application/json"):a=await r.json();break;case e.startsWith("multipart/form-data"):case e.startsWith("application/x-www-form-urlencoded"):{a=Z(await r.formData());break}}return a}var b=()=>{let t=f.useRef(0);return f.useCallback(async(r,e)=>{t.current++;let a=`${r}_${t.current}`;switch(r){case s.ACTION_INVOKED:{let{request:n,params:i,context:o}=e,h={url:n.url,method:n.method,body:await P(n)};return{key:a,type:r,data:{params:i,request:h,context:o}}}case s.ACTION_SETTLED:return{key:a,type:r,data:e};case s.LOADER_INVOKED:{let{request:n,params:i,context:o}=e,h={url:n.url,method:n.method,body:await P(n)};return{key:a,type:r,data:{params:i,request:h,context:o}}}case s.LOADER_SETTLED:return{key:a,type:r,data:e}}},[])};function tt(){let t=w.getChannel(),r=b();return f.useCallback(e=>async function(a){if(e===void 0)return;t.emit(s.ACTION_INVOKED,await r(s.ACTION_INVOKED,a));let n=await e(a);return t.emit(s.ACTION_SETTLED,await r(s.ACTION_SETTLED,n)),n},[t,r])}function et(){let t=w.getChannel(),r=b();return f.useCallback(e=>async function(a){if(e===void 0)return;t.emit(s.LOADER_INVOKED,await r(s.LOADER_INVOKED,a));let n=await e(a);return t.emit(s.LOADER_SETTLED,await r(s.LOADER_SETTLED,n)),n},[t,r])}function rt(){let t=tt(),r=et(),e=f.useCallback(a=>a.map(n=>{let{action:i,loader:o,children:h,lazy:d}=n,c={...n};return d&&(c.lazy=async function(){let l=await d(),u={...l};return l.action&&(u.action=t(l.action)),l.loader&&(u.loader=r(l.loader)),u}),i&&(c.action=t(i)),o&&(c.loader=r(o)),h&&(c.children=e(h)),c}),[t,r]);return e}var L=()=>{let t=m.useContext(C);if(t===void 0)throw new Error("useStory should be used inside <StoryContext>");return t};function N(t,r,e=0){return t.length===1&&(t[0].children===void 0||t[0].children.length===0)?[{...t[0],element:r}]:t.findIndex(a=>a.useStoryElement)!==-1?t.map(a=>a.useStoryElement?{...a,element:r}:a):t.map(a=>a.children?{...a,children:N(a.children,r)}:a)}var S;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(S||(S={}));function at(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function nt(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}var A;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(A||(A={}));function x(t,r){r===void 0&&(r={});let e=t;e.endsWith("*")&&e!=="*"&&!e.endsWith("/*")&&(nt(!1,'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".')),e=e.replace(/\*$/,"/*"));let a=e.startsWith("/")?"/":"",n=o=>o==null?"":typeof o=="string"?o:String(o),i=e.split(/\/+/).map((o,h,d)=>{if(h===d.length-1&&o==="*")return n(r["*"]);let c=o.match(/^:([\w-]+)(\??)$/);if(c){let[,l,u]=c,E=r[l];return at(u==="?"||E!=null,'Missing ":'+l+'" param'),n(E)}return o.replace(/\?$/g,"")}).filter(o=>!!o);return a+i.join("/")}var k=["post","put","patch","delete"];new Set(k);var ot=["get",...k];new Set(ot);function it({navigationHistory:t,location:r,routes:e}){if(t!==void 0){let l=[],u,E=Object.values(t);for(let g=0;g<E.length;g++){let{path:v,pathParams:R,searchParams:j,hash:H,state:K,isInitialLocation:M}=E[g];M&&(u=g);let T=O(e),U=(typeof v=="function"?v(T,R??{}):v)??T;l.push({pathname:x(U??"/",R),search:new URLSearchParams(j).toString(),hash:H,state:K})}return u??(u=l.length-1),{initialEntries:l,initialIndex:u}}let{path:a,pathParams:n,searchParams:i,hash:o,state:h}=r??{},d=O(e),c=(typeof a=="function"?a(d,n??{}):a)??d;return{initialEntries:[{pathname:x(c,n),search:new URLSearchParams(i).toString(),hash:o,state:h}],initialIndex:0}}function O(t=[],r="/"){if(t.length!==1)return r;let e=t[0],a=lt(r,e.path);return e.children===void 0||e.children.length===0?a:O(e.children,a)}function lt(t,r=""){let e=["","/"],a=t.split("/").filter(i=>!e.includes(i)),n=r.split("/").filter(i=>!e.includes(i));return"/"+[...a,...n].join("/")}function p(t,r){return Object.prototype.hasOwnProperty.call(t,r)}function st(t){return arguments.length===0?[]:Array.isArray(t)?t:[t]}function ct(t){var r;return t===void 0?[{path:"/"}]:typeof t=="string"?[{path:t}]:(t=st(t),t.length===1&&((r=t[0]).path??(r.path="/")),t)}var $=()=>m.useContext(I);function ut(t){let r={};return t.forEach((e,a)=>{let n=r[a];if(typeof n=="string"){r[a]=[n,e];return}if(Array.isArray(n)){r[a]=[...n,e];return}r[a]=e}),r}var ht=()=>{let t=_(),r=t.pathname;return t.search.length>0&&(r+=`?${t.search}`),t.hash.length>0&&(r+=`#${t.hash}`),r},dt=()=>{let t=f.useRef(0),r=_(),e=G(),[a]=B(),n=F(),i=$(),o=ut(a),h=ht(),d=i.map(l=>{let u={path:l.route.path};return Object.keys(l.params).length>0&&(u.params=l.params),u}),c={url:h,path:r.pathname,routeParams:e,searchParams:o,hash:r.hash,routeState:r.state,routeMatches:d};return l=>{t.current++;let u=`${l}_${t.current}`;switch(l){case s.STORY_LOADED:return{key:u,type:l,data:c};case s.NAVIGATION:return{key:u,type:l,data:{...c,navigationType:n}};case s.ROUTE_MATCHES:return{key:u,type:l,data:{matches:d}}}}};function V(){let{renderStory:t,storyContext:r}=L(),e=w.getChannel(),a=_(),n=$(),i=dt(),o=f.useRef(),h=f.useRef(),d=f.useRef(),c=o.current!==void 0,l=c&&a.key!==o.current;return l&&h.current!==a.key&&(e.emit(s.NAVIGATION,i(s.NAVIGATION)),h.current=a.key),l&&n.length>0&&n!==d.current&&e.emit(s.ROUTE_MATCHES,i(s.ROUTE_MATCHES)),!c&&n.length>0&&(e.emit(s.STORY_LOADED,i(s.STORY_LOADED)),o.current=a.key,d.current=n),d.current=n,m.createElement(m.Fragment,null,t(r))}V.displayName="RouterLogger";function mt(){let{addonParameters:t={}}=L(),{hydrationData:r,routing:e,navigationHistory:a,location:n}=t,i=rt(),o=f.useMemo(()=>{let h=ct(e),d=i(h),c=N(d,m.createElement(V,null)),{initialEntries:l,initialIndex:u}=it({navigationHistory:a,location:n,routes:c});return z(c,{initialEntries:l,initialIndex:u,hydrationData:r})},[i,r,n,a,e]);return m.createElement(q,{router:o,fallbackElement:m.createElement(pt,null)})}function pt(){return m.createElement("p",null,"Performing initial data load")}var ft=({renderStory:t,storyContext:r,addonParameters:e})=>{let a=X();return m.createElement(C.Provider,{value:{renderStory:t,storyContext:r,addonParameters:e}},m.createElement(I.Provider,{value:a},m.createElement(mt,null)))};function yt(t){if(m.isValidElement(t))return!0;switch(!0){case m.isValidElement(t):case typeof t=="string":case typeof t=="number":case typeof t=="boolean":case t===null:case t===void 0:case(t instanceof Object&&p(t,Symbol.iterator)):return!0}return!1}function Et(t){return yt(t)?{element:t}:t}function gt(t={}){let r=["location","navigationHistory","routing"];if(Object.keys(t??{}).some(a=>r.includes(a)))return t;let e={routing:{},location:{},hydrationData:void 0};if(p(t,"routePath")&&(e.location.path=t.routePath,e.routing.path=t.routePath),p(t,"routeParams")&&(e.location.pathParams=t.routeParams),p(t,"routeState")&&(e.location.state=t.routeState),p(t,"routeHandle")&&(e.routing.handle=t.routeHandle),p(t,"searchParams")&&(e.location.searchParams=t.searchParams),p(t,"browserPath")&&(e.location.path=t.browserPath),p(t,"loader")&&(e.routing.loader=t.loader),p(t,"action")&&(e.routing.action=t.action),p(t,"errorElement")&&(e.routing.errorElement=t.errorElement),p(t,"hydrationData")&&(e.hydrationData=t.hydrationData),p(t,"shouldRevalidate")&&(e.routing.shouldRevalidate=t.shouldRevalidate),p(t,"routeId")&&(e.routing.id=t.routeId),p(t,"outlet")){let a=Et(t.outlet);a.path??(a.path=""),e.routing.children=[a]}return e.routing.useStoryElement=!0,e}var vt=J({name:"withRouter",parameterName:Q,wrapper:(t,r,{parameters:e})=>{let a=gt(e);return m.createElement(ft,{renderStory:t,storyContext:r,addonParameters:a})}});const Pt={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Pages","Home"]}}},decorators:[vt,t=>D.jsx("div",{className:W("atm_c8_xoeuol atm_bx_3wtidt","c1qb5p0i"),children:D.jsx(t,{})})]};export{Pt as default};
