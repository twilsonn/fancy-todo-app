var C=Object.defineProperty,L=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var x=(t,e,s)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))A.call(e,s)&&x(t,s,e[s]);if(v)for(var s of v(e))E.call(e,s)&&x(t,s,e[s]);return t},m=(t,e)=>L(t,S(e));import{v as g,c as F,a as j,u as K,b as O,d as P,r as f,j as o,F as D,e as c,_ as z,P as M,f as y,l as w,g as R,h as B}from"./vendor.2d349864.js";const I=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}};I();const V={value:[{id:g(),title:"Water my plants \u{1F4A6}",details:"The cactus' and snake plant needs watering on sunday morning!",tags:["plants","house"],active:!0},{id:g(),title:"Pick up package from store",details:"The store is open until 6pm",tags:["travel","shopping"],active:!0},{id:g(),title:"Order some new headphones \u{1F3B6}",details:"Look online for open ear headphones!",tags:["shopping","online"],active:!0},{id:g(),title:"Play Elder scrolls online \u{1F93A}",details:"don't take an arrow to the knee",tags:["online","gaming"],active:!0},{id:g(),title:"Contribute to open source development!",details:"Try to get involved in open source dev. Start with the small tasks.",tags:["online","coding"],active:!0}],filter:""},b=()=>({id:g(),title:"",details:"",tags:[],active:!0}),W=(t,e)=>m(u({},t),{value:[...t.value,e.payload]}),_=(t,e)=>m(u({},t),{value:[...t.value.filter(s=>!e.payload.includes(s.id))]}),$=(t,e)=>t.filter===e.payload?m(u({},t),{filter:"",value:[...t.value.map(s=>m(u({},s),{active:!0}))]}):m(u({},t),{filter:e.payload,value:[...t.value.map(s=>s.tags.includes(e.payload)?s:m(u({},s),{active:!1}))]}),N=F({name:"todos",initialState:V,reducers:{addTodo:W,deleteTodo:_,filterTodos:$}}),{addTodo:q,deleteTodo:G,filterTodos:J}=N.actions;var Q=N.reducer;const U=j({reducer:{todos:K(Q)}});const k=()=>O(),X=P;function Y(t,e,s){const r=f.exports.useRef();f.exports.useEffect(()=>{const n=(s==null?void 0:s.current)||window;if(!(n&&n.addEventListener))return;r.current!==e&&(r.current=e);const a=l=>{(r==null?void 0:r.current)&&r.current(l)};return n.addEventListener(t,a),()=>{n.removeEventListener(t,a)}},[t,s,e])}const T=({children:t,ClassName:e,dataValue:s,onClick:r})=>o("div",{onClick:r,"data-value":s,className:`w-full p-4 bg-white shadow-md shadow-slate-200 rounded-2xl ${e}`,children:t}),Z=({children:t,active:e,toggleActive:s})=>{const r=f.exports.useRef(null),n=a=>{r.current&&e&&!r.current.contains(a.target)&&s()};return document.addEventListener("mousedown",n),e?o(D,{children:o("div",{className:"flex absolute top-0 left-0 z-10 justify-center items-center w-full h-full bg-black bg-opacity-20",children:o("div",{ref:r,className:"w-full max-w-sm prose",children:o(T,{ClassName:"shadow-slate-400",children:t})})})}):null},H=({title:t,value:e,changeValue:s})=>c("div",{className:"w-full",children:[o("label",{htmlFor:t,className:"block text-sm font-medium text-gray-700 capitalize",children:t.toLowerCase()}),o("div",{className:"mt-1",children:o("input",{type:"text",name:t,id:t,value:e,onChange:s,className:"block w-full sm:text-sm rounded-md border-gray-300 shadow-sm focus:border-fuchsia-500 focus:ring-fuchsia-500",autoComplete:"off","data-lpignore":"true","data-form-type":"other"})})]}),ee=({title:t,value:e,changeValue:s})=>c("div",{className:"w-full",children:[o("label",{htmlFor:t,className:"block text-sm font-medium text-gray-700 capitalize",children:t.toLowerCase()}),o("div",{className:"mt-1",children:o("textarea",{name:t,id:t,value:e,onChange:s,className:"block w-full sm:text-sm rounded-md border-gray-300 shadow-sm focus:border-fuchsia-500 focus:ring-fuchsia-500",autoComplete:"off","data-lpignore":"true","data-form-type":"other"})})]}),te=({name:t,removeTag:e})=>c("span",{className:"inline-flex items-center py-2.5 pr-2 pl-3 mt-2 mr-1 text-sm font-medium rounded-full text-slate-700 bg-slate-100",children:[t,c("button",{type:"button",onClick:()=>e(t),className:"inline-flex flex-shrink-0 justify-center items-center ml-0.5 w-4 h-4 focus:text-white rounded-full focus:outline-none hover:bg-slate-200 focus:bg-slate-500 text-slate-400 hover:text-slate-500",children:[o("span",{className:"sr-only",children:"Remove large option"}),o("svg",{className:"w-2 h-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8",children:o("path",{strokeLinecap:"round",strokeWidth:"1.5",d:"M1 1l6 6m0-6L1 7"})})]})]}),se=({tags:t,addTag:e,removeTag:s})=>{const[r,n]=f.exports.useState(""),[a,l]=f.exports.useState(!1),h=i=>{i.key==="Enter"&&(e(r),n(""))},p=f.exports.useRef(null),d=i=>{p.current&&a&&!p.current.contains(i.target)&&(l(!1),n(""))};return document.addEventListener("mousedown",d),c("div",{className:"w-full",children:[o("span",{className:"block text-sm font-medium text-gray-700",children:"Tags"}),c("div",{className:"flex flex-wrap justify-start items-center",children:[t.map(i=>o(te,{removeTag:s,name:i},i)),c("button",{ref:p,className:"flex py-2 px-2 mt-2 mr-1 h-10 rounded-full bg-slate-100",children:[a&&o(z,{placeholder:" ",value:r,autoFocus:!0,onChange:i=>n(i.target.value),onKeyDown:h,inputClassName:"p-0 pl-1 m-0 bg-transparent text-sm font-medium -translate-y-1 border-none focus:border-none ring-0 focus:ring-0 outline-none focus:outline-none"}),o(M,{className:"w-6 h-6 text-slate-400 hover:text-slate-500",onClick:()=>l(!a)})]})]})]})},oe=()=>{const t=k(),[e,s]=f.exports.useState(b()),[r,n]=f.exports.useState(!1),a=()=>{s(b()),n(!r)},l=()=>{t(q(e)),a()},h=d=>{const i=new Set([...e.tags,d]);s(m(u({},e),{tags:[...i]}))},p=d=>{s(m(u({},e),{tags:[...e.tags.filter(i=>i===d)]}))};return c("div",{children:[c(Z,{active:r,toggleActive:a,children:[o("h4",{className:"mt-0",children:"Create New Todo"}),c("div",{className:"flex flex-col items-end mt-4 space-y-4",children:[o("div",{className:"w-full",children:o(H,{title:"title",value:e.title,changeValue:d=>s(m(u({},e),{title:d.target.value}))})}),o("div",{className:"w-full",children:o(ee,{title:"details",value:e.details,changeValue:d=>s(m(u({},e),{details:d.target.value}))})}),o(se,{tags:e.tags,addTag:h,removeTag:p}),o("button",{type:"button",onClick:l,className:"py-2 px-6 font-semibold text-white rounded-lg shadow-md bg-fuchsia-500 shadow-fuchsia-200 hover:bg-fuchsia-600",children:"Create Todo"})]})]}),o("button",{type:"button",onClick:a,className:"py-2 px-6 font-semibold text-white rounded-lg shadow-md bg-fuchsia-500 shadow-fuchsia-200 hover:bg-fuchsia-600",children:"New Todo"})]})},ae=()=>o("nav",{className:"py-5 px-8 w-full bg-white rounded-2xl shadow-md shadow-slate-200",children:c("ul",{className:"flex justify-between",children:[o("li",{className:"flex items-center",children:o("h2",{className:"text-2xl font-semibold",children:"Todo List \u{1F384}"})}),o("li",{children:o(oe,{})})]})}),ne=()=>{const t=X(a=>a.todos.present.value),e=k(),[s,r]=f.exports.useState([]),n=(a,l)=>{a.target.getAttribute("data-value")!=="tag"&&(s.some(h=>h.id===l.id)?a.ctrlKey?r(s.filter(h=>h.id!==l.id)):r([]):a.ctrlKey?r([...s,l]):r([l]))};return Y("mousedown",a=>{var l;return((l=a.target.getAttribute("data-value"))==null?void 0:l.includes("todo"))?void 0:r([])}),y(["x","Backspace","Delete"],()=>{s.length>0&&e(G(s.map(a=>a.id)))}),y(["z","y"],a=>{a.key==="z"&&a.ctrlKey&&e(w.ActionCreators.undo()),a.key==="y"&&a.ctrlKey&&e(w.ActionCreators.redo())}),o("div",{children:o("div",{className:"grid grid-cols-3 gap-6 mt-6",children:t.map(a=>{const{id:l,title:h,details:p,tags:d}=a;return a.active?c(T,{onClick:i=>n(i,a),dataValue:s.some(i=>i.id===l)?"todo selected":"todo",ClassName:`prose flex flex-col h-64 cursor-pointer select-none ${s.some(i=>i.id===l)?"ring-fuchsia-500 ring-2":""}`,children:[c("div",{className:"pointer-events-none",children:[o("h3",{className:"mt-0",children:h}),o("p",{children:p})]}),o("div",{className:"flex justify-end items-end space-x-2 h-full",children:d.map(i=>o("span",{"data-value":"tag",onClick:()=>e(J(i)),className:"py-2 px-3 text-sm font-semibold rounded-full cursor-pointer bg-slate-200 hover:bg-slate-300",children:i},i))})]},l):null})})})};function re(){return c("div",{className:"m-auto max-w-4xl",children:[o("header",{className:"my-4",children:o(ae,{})}),o("main",{children:o(ne,{})})]})}const le=()=>o(f.exports.StrictMode,{children:o(B,{store:U,children:o(re,{})})});R.exports.render(o(le,{}),document.getElementById("root"));