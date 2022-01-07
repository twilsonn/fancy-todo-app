var D=Object.defineProperty,K=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(t,s,a)=>s in t?D(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,h=(t,s)=>{for(var a in s||(s={}))z.call(s,a)&&T(t,a,s[a]);if(k)for(var a of k(s))O.call(s,a)&&T(t,a,s[a]);return t},f=(t,s)=>K(t,P(s));import{v as x,c as Z,p as $,u as B,a as V,b as G,d as _,e as q,f as H,r as p,j as r,m as w,g as e,F as L,_ as U,P as W,h as N,M as y,D as X,T as Y,L as Q,i as J,G as ee,l as A,k as te,n as se,o as ae}from"./vendor.1243d8c4.js";const ne=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}};ne();const re={value:[{id:x(),title:"Water my plants \u{1F4A6}",details:"The cactus' and snake plant needs watering on sunday morning!",tags:["plants","house"],active:!0},{id:x(),title:"Pick up package from store",details:"The store is open until 6pm",tags:["travel","shopping"],active:!0},{id:x(),title:"Order some new headphones \u{1F3B6}",details:"Look online for open ear headphones!",tags:["shopping","online"],active:!0},{id:x(),title:"Play Elder scrolls online \u{1F93A}",details:"don't take an arrow to the knee",tags:["online","gaming"],active:!0},{id:x(),title:"Contribute to open source development!",details:"Try to get involved in open source dev. Start with the small tasks.",tags:["online","coding"],active:!0}],filter:"",locked:!0},S=()=>({id:x(),title:"",details:"",tags:[],active:!0}),le=(t,s)=>f(h({},t),{value:[...t.value,s.payload]}),oe=(t,s)=>f(h({},t),{value:[...t.value.filter(a=>!s.payload.includes(a.id))]}),ie=(t,s)=>t.filter===s.payload?f(h({},t),{filter:"",value:[...t.value.map(a=>f(h({},a),{active:!0}))]}):f(h({},t),{filter:s.payload,value:[...t.value.map(a=>a.tags.includes(s.payload)?a:f(h({},a),{active:!1}))]}),ce=t=>f(h({},t),{locked:!t.locked}),M=Z({name:"todos",initialState:re,reducers:{addTodo:le,deleteTodo:oe,filterTodos:ie,toggleLock:ce}}),{addTodo:de,deleteTodo:ue,filterTodos:me,toggleLock:j}=M.actions;var he=M.reducer;const fe={key:"todos",storage:_},pe=$(fe,B(he)),R=V(pe),ge=G(R);var ve=()=>({store:R,persistor:ge});const b=()=>q(),C=H;function xe(t,s,a){const i=p.exports.useRef();p.exports.useEffect(()=>{const n=(a==null?void 0:a.current)||window;if(!(n&&n.addEventListener))return;i.current!==s&&(i.current=s);const l=u=>{(i==null?void 0:i.current)&&i.current(u)};return n.addEventListener(t,l),()=>{n.removeEventListener(t,l)}},[t,a,s])}const ye=()=>{const t=C(s=>s.present);return t.filter?r(w.div,{initial:{height:"0",opacity:0},animate:{height:"auto",opacity:"1"},className:"flex items-center h-10",children:[e("span",{className:"mr-3",children:"Filters: "}),e("span",{className:"inline-flex items-center py-2.5 px-3 mr-1 text-sm font-medium rounded-full text-slate-700 bg-slate-200",children:t.filter})]}):null},E=({key:t,children:s,ClassName:a,dataValue:i,onClick:n})=>e("div",{onClick:n,"data-value":i,className:`w-full p-4 bg-white shadow-md shadow-slate-200 rounded-2xl ${a}`,children:s}),F=({children:t,active:s,toggleActive:a,className:i})=>{const n=p.exports.useRef(null),l=u=>{n.current&&s&&!n.current.contains(u.target)&&a()};return document.addEventListener("mousedown",l),s?e(L,{children:e(w.div,{initial:{backgroundColor:"rgba(0,0,0,0)"},animate:{backgroundColor:"rgba(0,0,0,0.3)"},className:"flex absolute top-0 left-0 z-10 justify-center items-center w-full h-full bg-black bg-opacity-20",children:e(w.div,{ref:n,className:`w-full min-w-sm prose ${i}`,initial:{scale:.8},animate:{scale:1},children:e(E,{ClassName:"shadow-slate-400",children:t})})})}):null},Ce=({title:t,value:s,changeValue:a})=>r("div",{className:"w-full",children:[e("label",{htmlFor:t,className:"block text-sm font-medium text-gray-700 capitalize",children:t.toLowerCase()}),e("div",{className:"mt-1",children:e("input",{type:"text",name:t,id:t,value:s,onChange:a,className:"block w-full sm:text-sm rounded-md border-gray-300 shadow-sm focus:border-fuchsia-500 focus:ring-fuchsia-500",autoComplete:"off","data-lpignore":"true","data-form-type":"other"})})]}),we=({title:t,value:s,changeValue:a})=>r("div",{className:"w-full",children:[e("label",{htmlFor:t,className:"block text-sm font-medium text-gray-700 capitalize",children:t.toLowerCase()}),e("div",{className:"mt-1",children:e("textarea",{name:t,id:t,value:s,onChange:a,className:"block w-full sm:text-sm rounded-md border-gray-300 shadow-sm focus:border-fuchsia-500 focus:ring-fuchsia-500",autoComplete:"off","data-lpignore":"true","data-form-type":"other"})})]}),Ne=({name:t,removeTag:s})=>r("span",{className:"inline-flex items-center py-2.5 pr-2 pl-3 mt-2 mr-1 text-sm font-medium rounded-full text-slate-700 bg-slate-100",children:[t,r("button",{type:"button",onClick:()=>s(t),className:"inline-flex flex-shrink-0 justify-center items-center ml-0.5 w-4 h-4 focus:text-white rounded-full focus:outline-none hover:bg-slate-200 focus:bg-slate-500 text-slate-400 hover:text-slate-500",children:[e("span",{className:"sr-only",children:"Remove large option"}),e("svg",{className:"w-2 h-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8",children:e("path",{strokeLinecap:"round",strokeWidth:"1.5",d:"M1 1l6 6m0-6L1 7"})})]})]}),be=({tags:t,addTag:s,removeTag:a})=>{const[i,n]=p.exports.useState(""),[l,u]=p.exports.useState(!1),o=m=>{m.key==="Enter"&&(s(i),n(""))},c=p.exports.useRef(null),d=m=>{c.current&&l&&!c.current.contains(m.target)&&(u(!1),n(""))};return document.addEventListener("mousedown",d),r("div",{className:"w-full",children:[e("span",{className:"block text-sm font-medium text-gray-700",children:"Tags"}),r("div",{className:"flex flex-wrap justify-start items-center",children:[t.map(m=>e(Ne,{removeTag:a,name:m},m)),r("button",{ref:c,className:"flex py-2 px-2 mt-2 mr-1 h-10 rounded-full bg-slate-100",children:[l&&e(U,{placeholder:" ",value:i,autoFocus:!0,onChange:m=>n(m.target.value),onKeyDown:o,inputClassName:"p-0 pl-1 m-0 bg-transparent text-sm font-medium -translate-y-1 border-none focus:border-none ring-0 focus:ring-0 outline-none focus:outline-none"}),e(W,{className:"w-6 h-6 text-slate-400 hover:text-slate-500",onClick:()=>u(!l)})]})]})]})},ke=()=>{const t=b(),[s,a]=p.exports.useState(S()),[i,n]=p.exports.useState(!1),l=()=>{a(S()),n(!i)},u=()=>{t(de(s)),l()},o=d=>{const m=new Set([...s.tags,d]);a(f(h({},s),{tags:[...m]}))},c=d=>{a(f(h({},s),{tags:[...s.tags.filter(m=>m===d)]}))};return N(["v","q"],d=>{d.key==="v"&&d.ctrlKey&&n(!i),d.key==="q"&&d.ctrlKey&&t(j())}),r("div",{children:[r(F,{active:i,toggleActive:l,className:"w-96",children:[e("h4",{className:"mt-0",children:"Create New Todo"}),r("div",{className:"flex flex-col items-end mt-4 space-y-4",children:[e("div",{className:"w-full",children:e(Ce,{title:"title",value:s.title,changeValue:d=>a(f(h({},s),{title:d.target.value}))})}),e("div",{className:"w-full",children:e(we,{title:"details",value:s.details,changeValue:d=>a(f(h({},s),{details:d.target.value}))})}),e(be,{tags:s.tags,addTag:o,removeTag:c}),e("button",{type:"button",onClick:u,className:"py-2 px-6 font-semibold text-white rounded-lg shadow-md bg-fuchsia-500 shadow-fuchsia-200 hover:bg-fuchsia-600",children:"Create Todo"})]})]}),e("button",{type:"button",onClick:l,className:"inline-flex justify-center w-full rounded-md border border-fuchsia-500 text-sm font-medium focus:outline-none px-4 py-2 text-white shadow-sm bg-fuchsia-500 shadow-fuchsia-200 hover:bg-fuchsia-600",children:"New Todo"})]})},g=({t})=>e("span",{className:"text-xs py-1 px-1.5 bg-slate-200 rounded-md font-medium",children:t}),Te=()=>r("div",{className:"prose",children:[e("h3",{children:"Controls"}),r("div",{className:"space-y-4",children:[r("div",{className:"flex items-center",children:[e("span",{children:"New Todo:"}),r("span",{className:"ml-2",children:[e(g,{t:"CTRL"})," + ",e(g,{t:"V"})]})]}),r("div",{className:"flex items-center",children:[e("span",{children:"Lock Todos:"}),r("span",{className:"ml-2",children:[e(g,{t:"CTRL"})," + ",e(g,{t:"Q"})]})]}),r("div",{className:"flex items-center",children:[e("span",{children:"Undo Last Action:"}),r("span",{className:"ml-2",children:[e(g,{t:"CTRL"})," + ",e(g,{t:"Z"})]})]}),r("div",{className:"flex items-center",children:[e("span",{children:"Redo Last Action:"}),r("span",{className:"ml-2",children:[e(g,{t:"CTRL"})," + ",e(g,{t:"Y"})]})]}),r("div",{className:"flex items-center",children:[e("span",{children:"Delete selected Todo:"}),r("span",{className:"ml-2",children:[e(g,{t:"DEL"})," , ",e(g,{t:"X"})," , ",e(g,{t:"\u2190"})]})]})]})]}),Le=()=>{const t=C(n=>n.present.locked),s=b(),[a,i]=p.exports.useState(!1);return r(L,{children:[e(F,{active:a,toggleActive:()=>i(!a),className:"w-80",children:e(Te,{})}),r(y,{as:"div",className:"relative inline-block text-left",children:[e("div",{children:e(y.Button,{className:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none ",children:e(X,{className:"w-5, h-5"})})}),e(Y,{as:p.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e(y.Items,{className:"z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:r("div",{className:"py-1",children:[e(y.Item,{children:({active:n})=>e("a",{href:"#",onClick:()=>s(j()),className:`${n?"bg-gray-100 text-gray-900":"text-gray-700"} block px-4 py-2 text-sm`,children:t?r("div",{className:"flex items-center justify-between",children:["Unlock Todos",e(Q,{className:"w-5, h-5"})]}):r("div",{className:"flex items-center justify-between",children:["Lock Todos",e(J,{className:"w-5, h-5"})]})})}),e(y.Item,{children:({active:n})=>e("a",{onClick:()=>i(!a),className:`${n?"bg-gray-100 text-gray-900":"text-gray-700"} block px-4 py-2 text-sm`,children:"Controls"})}),e("form",{method:"POST",action:"#",children:e(y.Item,{children:({active:n})=>e("a",{href:"https://github.com/twilsonn",target:"_blank",className:`${n?"bg-gray-100 text-gray-900":"text-gray-700"} block w-full text-left px-4 py-2 text-sm`,children:r("div",{className:"flex items-center justify-between",children:["GitHub",e("span",{className:"ml-2",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",className:"w-4 h-4",width:"256px",height:"250px",viewBox:"0 0 256 250",version:"1.1",preserveAspectRatio:"xMidYMid",children:e("g",{children:e("path",{d:"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",fill:"#161614"})})})})]})})})})]})})})]})]})},Ae=()=>e("nav",{className:"py-5 px-8 mb-3 w-full bg-white rounded-2xl shadow-md shadow-slate-200",children:r("ul",{className:"flex justify-between",children:[e("li",{className:"flex items-center",children:e("h2",{className:"text-2xl font-semibold",children:"Todo List"})}),r("li",{className:"flex",children:[e(ke,{}),e("div",{className:"w-2"}),e(Le,{})]})]})}),Se=()=>{const t=C(o=>o.present.value),s=C(o=>o.present.locked),a=b(),i=t.filter(o=>o.active).map((o,c)=>({i:o.id,x:c%3,y:Math.floor(c/3),w:1,h:1})),[n,l]=p.exports.useState([]),u=(o,c)=>{o.target.getAttribute("data-value")!=="tag"&&(n.some(d=>d.id===c.id)?o.ctrlKey?l(n.filter(d=>d.id!==c.id)):l([]):o.ctrlKey?l([...n,c]):l([c]))};return xe("mousedown",o=>{var c;return((c=o.target.getAttribute("data-value"))==null?void 0:c.includes("todo"))?void 0:l([])}),N(["x","Backspace","Delete"],()=>{n.length>0&&a(ue(n.map(o=>o.id)))}),N(["z","y"],o=>{o.key==="z"&&o.ctrlKey&&a(A.ActionCreators.undo()),o.key==="y"&&o.ctrlKey&&a(A.ActionCreators.redo())}),e(ee,{className:"layout mt-3",containerPadding:[0,0],margin:[12,12],layout:i,cols:3,rowHeight:256,width:896,compactType:"horizontal",isResizable:!1,isBounded:!0,isDraggable:!s,children:t.map(o=>{const{id:c,title:d,details:m,tags:I}=o;return o.active?e("div",{children:r(E,{onClick:v=>u(v,o),dataValue:n.some(v=>v.id===c)?"todo selected":"todo",ClassName:`prose flex flex-col h-64 cursor-pointer select-none ${n.some(v=>v.id===c)?"ring-fuchsia-500 ring-2":""}`,children:[r("div",{className:"pointer-events-none",children:[e("h3",{className:"mt-0",children:d}),e("p",{children:m})]}),e("div",{className:"flex justify-end items-end space-x-2 h-full",children:I.map(v=>e("span",{"data-value":"tag",onClick:()=>a(me(v)),className:"py-2 px-3 text-sm font-semibold rounded-full cursor-pointer bg-slate-200 hover:bg-slate-300",children:v},v))})]})},c):null})})};function Me(){return r("div",{className:"m-auto max-w-4xl",children:[e("header",{className:"mt-4",children:e(Ae,{})}),r("main",{children:[e(ye,{}),e(Se,{})]})]})}const{store:je,persistor:Re}=ve(),Ee=()=>e(p.exports.StrictMode,{children:e(se,{store:je,children:e(ae,{loading:null,persistor:Re,children:e(Me,{})})})});te.exports.render(e(Ee,{}),document.getElementById("root"));
