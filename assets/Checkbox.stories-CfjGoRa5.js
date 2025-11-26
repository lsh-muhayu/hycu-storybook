import{r as o,j as e}from"./iframe-C-jbPZJ_.js";import{c as ee,b as ae,P as F,a as O,d as T}from"./index-Bhg_Pyut.js";import{u as se,a as te,b as re}from"./index-DAC5HOqW.js";import{c as ce}from"./index-DOOMdwi9.js";import{c as ne}from"./cn-CPGtsWvz.js";import{c as V}from"./createLucideIcon-C0-AH-bB.js";import{L as j}from"./Label-hZ5oA83p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-g9lpyz-3.js";import"./index-cxfPW5GK.js";const le=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ie=V("check",le);const de=[["path",{d:"M5 12h14",key:"1ays0h"}]],oe=V("minus",de);function me(a,s,{edges:t=["leading","trailing"]}={}){let c,n=null;const r=t!=null&&t.includes("leading"),d=t==null||t.includes("trailing"),l=()=>{n!==null&&(a.apply(c,n),c=void 0,n=null)},m=()=>{d&&l(),g()};let i=null;const p=()=>{i!=null&&clearTimeout(i),i=setTimeout(()=>{i=null,m()},s)},h=()=>{i!==null&&(clearTimeout(i),i=null)},g=()=>{h(),c=void 0,n=null},k=function(...v){c=this,n=v;const N=i==null;p(),r&&N&&l()};return k.cancel=g,k}function I(a){const s=o.useRef(a);return o.useEffect(()=>{s.current=a},[a]),o.useCallback((...t)=>s.current(...t),[])}function xe({onChange:a,timeThreshold:s,leading:t=!1,trailing:c=!0}){const n=I(a),r=o.useRef({value:!1,clearPreviousDebounce:()=>{}});o.useEffect(()=>{const l=r.current;return()=>{l.clearPreviousDebounce()}},[]);const d=o.useMemo(()=>{const l=[];return t&&l.push("leading"),c&&l.push("trailing"),l},[t,c]);return o.useCallback(l=>{if(l===r.current.value)return;const m=me(()=>{n(l),r.current.value=l},s,{edges:d});r.current.clearPreviousDebounce(),m(),r.current.clearPreviousDebounce=m.cancel},[n,s,d])}function pe(a,s){const t=I(a),c=o.useRef(()=>{});return o.useCallback(r=>{if(c.current(),c.current=()=>{},r==null)return;const d=t(r);typeof d=="function"&&(c.current=d)},[t,...s])}function he(a,s){const t=I(a),c=o.useMemo(()=>{if(!(typeof IntersectionObserver>"u"))return new IntersectionObserver(([n])=>{t(n)},s)},[t,s]);return pe(n=>(c?.observe(n),()=>{c?.unobserve(n)}),[t,s])}function fe(a,s={}){const t=o.useCallback(()=>{a(document.visibilityState)},[a]);o.useEffect(()=>((s?.immediate??!1)&&t(),document.addEventListener("visibilitychange",t),()=>{document.removeEventListener("visibilitychange",t)}),[t,s?.immediate])}function ue({onImpressionStart:a=()=>{},onImpressionEnd:s=()=>{},rootMargin:t,areaThreshold:c=0,timeThreshold:n=0}){const r=I(a),d=I(s),l=o.useRef(!1),m=xe({timeThreshold:n,onChange:i=>{(i?r:d)()},leading:!0});return fe(i=>{l.current&&m(i==="visible")}),he(i=>{if(document.visibilityState==="hidden")return;const p=i.intersectionRatio,h=c===0?i.isIntersecting:p>=c;l.current=h,m(h)},{rootMargin:t,threshold:c})}function ge(...a){return s=>{for(const t of a)if(t!=null){if(typeof t=="function"){t(s);continue}t.current=s}}}var be=o.forwardRef(ve);function ve({as:a,rootMargin:s,areaThreshold:t,timeThreshold:c,onImpressionStart:n,onImpressionEnd:r,...d},l){const m=a??"div",i=ue({onImpressionStart:n,onImpressionEnd:r,areaThreshold:t,timeThreshold:c,rootMargin:s});return e.jsx(m,{ref:ge(l,i),...d})}Object.assign(be,{displayName:"ImpressionArea"});function ke({value:a,defaultValue:s,onChange:t,equalityFn:c=Object.is}){const[n,r]=o.useState(s),d=a!==void 0,l=d?a:n,m=o.useCallback(i=>{const p=Ne(i)?i(l):i;c(l,p)!==!0&&(d===!1&&r(p),d===!0&&p===void 0&&r(p),t?.(p))},[d,t,c,l]);return[l,m]}function Ne(a){return typeof a=="function"}var B=class{storage=new Map;get(a){return this.storage.get(a)??null}set(a,s){this.storage.set(a,s)}remove(a){this.storage.delete(a)}clear(){this.storage.clear()}},M=class{static canUse(){const a=q();try{return localStorage.setItem(a,"test"),localStorage.removeItem(a),!0}catch{return!1}}get(a){return localStorage.getItem(a)}set(a,s){localStorage.setItem(a,s)}remove(a){localStorage.removeItem(a)}clear(){localStorage.clear()}},A=class{static canUse(){const a=q();try{return sessionStorage.setItem(a,"test"),sessionStorage.removeItem(a),!0}catch{return!1}}get(a){return sessionStorage.getItem(a)}set(a,s){sessionStorage.setItem(a,s)}remove(a){sessionStorage.removeItem(a)}clear(){sessionStorage.clear()}};function q(){return new Array(4).fill(null).map(()=>Math.random().toString(36).slice(2)).join("")}function ye(){return M.canUse()?new M:new B}function je(){return A.canUse()?new A:new B}ye();je();var _="Checkbox",[Ce]=ee(_),[Ie,U]=Ce(_);function we(a){const{__scopeCheckbox:s,checked:t,children:c,defaultChecked:n,disabled:r,form:d,name:l,onCheckedChange:m,required:i,value:p="on",internal_do_not_use_render:h}=a,[g,k]=se({prop:t,defaultProp:n??!1,onChange:m,caller:_}),[v,N]=o.useState(null),[C,f]=o.useState(null),b=o.useRef(!1),P=v?!!d||!!v.closest("form"):!0,L={checked:g,disabled:r,setChecked:k,control:v,setControl:N,name:l,form:d,value:p,hasConsumerStoppedPropagationRef:b,required:i,defaultChecked:y(n)?!1:n,isFormControl:P,bubbleInput:C,setBubbleInput:f};return e.jsx(Ie,{scope:s,...L,children:ze(h)?h(L):c})}var H="CheckboxTrigger",K=o.forwardRef(({__scopeCheckbox:a,onKeyDown:s,onClick:t,...c},n)=>{const{control:r,value:d,disabled:l,checked:m,required:i,setControl:p,setChecked:h,hasConsumerStoppedPropagationRef:g,isFormControl:k,bubbleInput:v}=U(H,a),N=O(n,p),C=o.useRef(m);return o.useEffect(()=>{const f=r?.form;if(f){const b=()=>h(C.current);return f.addEventListener("reset",b),()=>f.removeEventListener("reset",b)}},[r,h]),e.jsx(F.button,{type:"button",role:"checkbox","aria-checked":y(m)?"mixed":m,"aria-required":i,"data-state":J(m),"data-disabled":l?"":void 0,disabled:l,value:d,...c,ref:N,onKeyDown:T(s,f=>{f.key==="Enter"&&f.preventDefault()}),onClick:T(t,f=>{h(b=>y(b)?!0:!b),v&&k&&(g.current=f.isPropagationStopped(),g.current||f.stopPropagation())})})});K.displayName=H;var W=o.forwardRef((a,s)=>{const{__scopeCheckbox:t,name:c,checked:n,defaultChecked:r,required:d,disabled:l,value:m,onCheckedChange:i,form:p,...h}=a;return e.jsx(we,{__scopeCheckbox:t,checked:n,defaultChecked:r,disabled:l,required:d,onCheckedChange:i,name:c,form:p,value:m,internal_do_not_use_render:({isFormControl:g})=>e.jsxs(e.Fragment,{children:[e.jsx(K,{...h,ref:s,__scopeCheckbox:t}),g&&e.jsx($,{__scopeCheckbox:t})]})})});W.displayName=_;var G="CheckboxIndicator",X=o.forwardRef((a,s)=>{const{__scopeCheckbox:t,forceMount:c,...n}=a,r=U(G,t);return e.jsx(ae,{present:c||y(r.checked)||r.checked===!0,children:e.jsx(F.span,{"data-state":J(r.checked),"data-disabled":r.disabled?"":void 0,...n,ref:s,style:{pointerEvents:"none",...a.style}})})});X.displayName=G;var Y="CheckboxBubbleInput",$=o.forwardRef(({__scopeCheckbox:a,...s},t)=>{const{control:c,hasConsumerStoppedPropagationRef:n,checked:r,defaultChecked:d,required:l,disabled:m,name:i,value:p,form:h,bubbleInput:g,setBubbleInput:k}=U(Y,a),v=O(t,k),N=te(r),C=re(c);o.useEffect(()=>{const b=g;if(!b)return;const P=window.HTMLInputElement.prototype,D=Object.getOwnPropertyDescriptor(P,"checked").set,Q=!n.current;if(N!==r&&D){const Z=new Event("click",{bubbles:Q});b.indeterminate=y(r),D.call(b,y(r)?!1:r),b.dispatchEvent(Z)}},[g,N,r,n]);const f=o.useRef(y(r)?!1:r);return e.jsx(F.input,{type:"checkbox","aria-hidden":!0,defaultChecked:d??f.current,required:l,disabled:m,name:i,value:p,form:h,...s,tabIndex:-1,ref:v,style:{...s.style,...C,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});$.displayName=Y;function ze(a){return typeof a=="function"}function y(a){return a==="indeterminate"}function J(a){return y(a)?"indeterminate":a?"checked":"unchecked"}const Se=ce(["border-gray-2 size-4 shrink-0 cursor-pointer rounded-[3px] border shadow-xs transition-all outline-none","not-disabled:hover:border-gray-1","disabled:cursor-not-allowed disabled:opacity-50","focus-visible:ring-gray-2 focus-visible:ring","data-[state=checked]:border-transparent","data-[state=indeterminate]:border-transparent","not-disabled:hover:data-[state=checked]:border-transparent","not-disabled:hover:data-[state=indeterminate]:border-transparent","data-[invalid=true]:border-danger","data-[invalid=true]:focus-visible:ring-danger","data-[invalid=true]:hover:border-danger","data-[invalid=true]:data-[state=checked]:border-danger data-[invalid=true]:data-[state=checked]:bg-danger","data-[invalid=true]:data-[state=checked]:hover:bg-danger data-[invalid=true]:data-[state=checked]:hover:border-danger","data-[invalid=true]:data-[state=indeterminate]:border-danger data-[invalid=true]:data-[state=indeterminate]:bg-danger","data-[invalid=true]:data-[state=indeterminate]:hover:bg-danger data-[invalid=true]:data-[state=indeterminate]:hover:border-danger"],{variants:{color:{primary:["data-[state=checked]:bg-primary data-[state=checked]:border-primary","data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary","not-disabled:hover:data-[state=checked]:bg-primary-dark not-disabled:hover:data-[state=checked]:border-primary-dark","not-disabled:hover:data-[state=indeterminate]:bg-primary-dark not-disabled:hover:data-[state=indeterminate]:border-primary-dark","data-[state=checked]:focus-visible:ring-primary","data-[state=indeterminate]:focus-visible:ring-primary"],secondary:["data-[state=checked]:bg-gray-200","data-[state=checked]:border-gray-200","data-[state=indeterminate]:bg-gray-200","data-[state=indeterminate]:border-gray-200","not-disabled:hover:data-[state=checked]:bg-gray-300","not-disabled:hover:data-[state=checked]:border-gray-300","not-disabled:hover:data-[state=indeterminate]:bg-gray-300","not-disabled:hover:data-[state=indeterminate]:border-gray-300","data-[state=checked]:focus-visible:ring-gray-200","data-[state=indeterminate]:focus-visible:ring-gray-200"],danger:["data-[state=checked]:bg-danger data-[state=checked]:border-danger","data-[state=indeterminate]:bg-danger data-[state=indeterminate]:border-danger","not-disabled:hover:data-[state=checked]:bg-danger-dark not-disabled:hover:data-[state=checked]:border-danger","not-disabled:hover:data-[state=indeterminate]:bg-danger-dark not-disabled:hover:data-[state=indeterminate]:border-danger","data-[state=checked]:focus-visible:ring-danger","data-[state=indeterminate]:focus-visible:ring-danger"],success:["data-[state=checked]:bg-success data-[state=checked]:border-success","data-[state=indeterminate]:bg-success data-[state=indeterminate]:border-success","not-disabled:hover:data-[state=checked]:bg-success-dark not-disabled:hover:data-[state=checked]:border-success","not-disabled:hover:data-[state=indeterminate]:bg-success-dark not-disabled:hover:data-[state=indeterminate]:border-success","data-[state=checked]:focus-visible:ring-success","data-[state=indeterminate]:focus-visible:ring-success"],warning:["data-[state=checked]:bg-warning data-[state=checked]:border-warning","data-[state=indeterminate]:bg-warning data-[state=indeterminate]:border-warning","not-disabled:hover:data-[state=checked]:bg-warning-dark not-disabled:hover:data-[state=checked]:border-warning","not-disabled:hover:data-[state=indeterminate]:bg-warning-dark not-disabled:hover:data-[state=indeterminate]:border-warning","data-[state=checked]:focus-visible:ring-warning","data-[state=indeterminate]:focus-visible:ring-warning"]}},defaultVariants:{color:"primary"}}),x=a=>{const{className:s,color:t="primary",checked:c,defaultChecked:n=!1,onCheckedChange:r=()=>{},invalid:d,...l}=a,[m,i]=ke({defaultValue:n,value:c,onChange:r});return e.jsx(W,{"data-slot":"checkbox","data-invalid":d,className:ne(Se({color:t}),s),checked:m,onCheckedChange:i,...l,children:e.jsxs(X,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center rounded-xs text-white",children:[m==="indeterminate"&&e.jsx(oe,{className:"h-[90%] w-[90%]",strokeWidth:4}),m===!0&&e.jsx(ie,{className:"h-[90%] w-[90%]",strokeWidth:4})]})})};x.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit","VariantProps"]};const Ae={title:"Shared/UI/Checkbox",component:x,parameters:{layout:"centered",controls:{exclude:["className","onCheckedChange","defaultChecked","name","form","value","required","id","aria-label","aria-labelledby","aria-describedby","aria-required","asChild","onClick","onKeyDown","tabIndex","style"]},docs:{description:{component:'\n### 체크박스 컴포넌트\n\nCheckbox 컴포넌트는 사용자가 옵션을 선택하거나 해제할 수 있는 체크박스 입력 필드입니다.\n\n## 주요 기능\n\n- **여러 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning` 색상 지원\n- **상태 관리**: `checked`, `disabled`, `invalid` 상태 지원\n- **Indeterminate 상태**: 부분 선택 상태 지원\n- **접근성**: 표준 HTML checkbox 속성으로 접근성 지원\n- **커스터마이징**: `className`을 통해 스타일 커스터마이징 가능\n\n## 사용 예시\n\n```tsx\n<Checkbox color="primary" />\n<Checkbox color="success" checked />\n<Checkbox color="danger" disabled />\n<Checkbox checked="indeterminate" />\n<Checkbox invalid />\n```\n        '}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning"],description:"체크박스의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"}}},checked:{control:"boolean",description:"체크박스 선택 여부",table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"체크박스 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{control:"boolean",description:"체크박스 유효성 검사 실패 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},u=["primary","secondary","danger","success","warning"],w={parameters:{controls:{disable:!1},docs:{description:{story:`
체크박스를 클릭하면 자유롭게 토글됩니다.
        `}}},render:a=>e.jsx(x,{...a}),args:{color:"primary",disabled:!1,invalid:!1}},z={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Unchecked"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:u.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{color:a}),e.jsx("span",{className:"text-xs text-gray-600 capitalize",children:a})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Checked"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:u.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{color:a,checked:!0}),e.jsx("span",{className:"text-xs text-gray-600 capitalize",children:a})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Indeterminate"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:u.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{color:a,checked:"indeterminate"}),e.jsx("span",{className:"text-xs text-gray-600 capitalize",children:a})]},a))})]})]})},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"기본 상태"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Unchecked"}),e.jsx("div",{className:"flex gap-3",children:u.map(a=>e.jsx(x,{color:a},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Checked"}),e.jsx("div",{className:"flex gap-3",children:u.map(a=>e.jsx(x,{color:a,checked:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Indeterminate"}),e.jsx("div",{className:"flex gap-3",children:u.map(a=>e.jsx(x,{color:a,checked:"indeterminate"},a))})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Disabled 상태"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Unchecked"}),e.jsx("div",{className:"flex gap-3",children:u.map(a=>e.jsx(x,{color:a,disabled:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Checked"}),e.jsx("div",{className:"flex gap-3",children:u.map(a=>e.jsx(x,{color:a,checked:!0,disabled:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Indeterminate"}),e.jsx("div",{className:"flex gap-3",children:u.map(a=>e.jsx(x,{color:a,checked:"indeterminate",disabled:!0},a))})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Invalid 상태"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Unchecked"}),e.jsx("div",{className:"flex gap-3",children:u.map(a=>e.jsx(x,{color:a,invalid:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Checked"}),e.jsx("div",{className:"flex gap-3",children:u.map(a=>e.jsx(x,{color:a,checked:!0,invalid:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Indeterminate"}),e.jsx("div",{className:"flex gap-3",children:u.map(a=>e.jsx(x,{color:a,checked:"indeterminate",invalid:!0},a))})]})]})]})]})},E={parameters:{docs:{description:{story:`
Checkbox 컴포넌트는 \`className\`을 통해 다양한 크기로 조정할 수 있습니다.
체크 아이콘은 부모 Checkbox 크기의 비례하도록 설정되어있어,
어떤 크기로 변경하더라도 아이콘이 자동으로 조정됩니다.

\`\`\`tsx
<Checkbox className="size-4" />   // 작은 크기
<Checkbox className="size-6" />   // 중간 크기
<Checkbox className="size-10" />  // 큰 크기
\`\`\`
        `}}},render:()=>{const a=[{size:"size-3",label:"3 (12px)"},{size:"size-4",label:"4 (16px)"},{size:"size-5",label:"5 (20px)"},{size:"size-6",label:"6 (24px)"},{size:"size-8",label:"8 (32px)"},{size:"size-10",label:"10 (40px)"}];return e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Unchecked"}),e.jsx("div",{className:"flex flex-wrap items-end gap-6",children:a.map(({size:s,label:t})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{color:"primary",className:s}),e.jsx("span",{className:"text-xs text-gray-600",children:t})]},s))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Checked"}),e.jsx("div",{className:"flex flex-wrap items-end gap-6",children:a.map(({size:s,label:t})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{color:"primary",checked:!0,className:s}),e.jsx("span",{className:"text-xs text-gray-600",children:t})]},s))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Indeterminate"}),e.jsx("div",{className:"flex flex-wrap items-end gap-6",children:a.map(({size:s,label:t})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{color:"primary",checked:"indeterminate",className:s}),e.jsx("span",{className:"text-xs text-gray-600",children:t})]},s))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"모든 색상 (size-6)"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:u.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(x,{color:s,checked:!0,className:"size-6"}),e.jsx("span",{className:"text-xs text-gray-600 capitalize",children:s})]},s))})]})]})}},R={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h1",{children:"체크박스 - 라벨"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{id:"example1",className:"peer"}),e.jsx(j,{htmlFor:"example1",className:"peer-data-[state=checked]:text-primary",children:"Primary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{id:"example2",className:"peer",color:"secondary"}),e.jsx(j,{htmlFor:"example2",className:"peer-data-[state=checked]:text-secondary",children:"Secondary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{id:"example3",className:"peer",color:"danger"}),e.jsx(j,{htmlFor:"example3",className:"peer-data-[state=checked]:text-danger",children:"Danger"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{id:"example4",className:"peer",color:"success"}),e.jsx(j,{htmlFor:"example4",className:"peer-data-[state=checked]:text-success",children:"Success"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{id:"example5",className:"peer",color:"warning"}),e.jsx(j,{htmlFor:"example5",className:"peer-data-[state=checked]:text-warning",children:"Warning"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{id:"example6",className:"peer",invalid:!0}),e.jsx(j,{htmlFor:"example6",className:"peer-data-[invalid=true]:text-danger",children:"Invalid"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{id:"example7",className:"peer",disabled:!0}),e.jsx(j,{htmlFor:"example7",className:"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",children:"Disabled"})]})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
체크박스를 클릭하면 자유롭게 토글됩니다.
        \`
      }
    }
  },
  render: args => {
    return <Checkbox {...args} />;
  },
  args: {
    color: 'primary',
    disabled: false,
    invalid: false
  }
}`,...w.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div className="flex flex-wrap gap-6">
            {colors.map(color => <div key={color} className="flex flex-col items-center gap-2">
                <Checkbox color={color} />
                <span className="text-xs text-gray-600 capitalize">{color}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-700">Checked</h3>
          <div className="flex flex-wrap gap-6">
            {colors.map(color => <div key={color} className="flex flex-col items-center gap-2">
                <Checkbox color={color} checked />
                <span className="text-xs text-gray-600 capitalize">{color}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div className="flex flex-wrap gap-6">
            {colors.map(color => <div key={color} className="flex flex-col items-center gap-2">
                <Checkbox color={color} checked="indeterminate" />
                <span className="text-xs text-gray-600 capitalize">{color}</span>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-8">
        {/* 기본 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">기본 상태</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Unchecked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Checked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Indeterminate</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked="indeterminate" />)}
              </div>
            </div>
          </div>
        </div>

        {/* Disabled 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Disabled 상태</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Unchecked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} disabled />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Checked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked disabled />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Indeterminate</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked="indeterminate" disabled />)}
              </div>
            </div>
          </div>
        </div>

        {/* Invalid 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Invalid 상태</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Unchecked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} invalid />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Checked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked invalid />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Indeterminate</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked="indeterminate" invalid />)}
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Checkbox 컴포넌트는 \\\`className\\\`을 통해 다양한 크기로 조정할 수 있습니다.
체크 아이콘은 부모 Checkbox 크기의 비례하도록 설정되어있어,
어떤 크기로 변경하더라도 아이콘이 자동으로 조정됩니다.

\\\`\\\`\\\`tsx
<Checkbox className="size-4" />   // 작은 크기
<Checkbox className="size-6" />   // 중간 크기
<Checkbox className="size-10" />  // 큰 크기
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => {
    const sizes = [{
      size: 'size-3',
      label: '3 (12px)'
    }, {
      size: 'size-4',
      label: '4 (16px)'
    }, {
      size: 'size-5',
      label: '5 (20px)'
    }, {
      size: 'size-6',
      label: '6 (24px)'
    }, {
      size: 'size-8',
      label: '8 (32px)'
    }, {
      size: 'size-10',
      label: '10 (40px)'
    }];
    return <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Unchecked</h3>
          <div className="flex flex-wrap items-end gap-6">
            {sizes.map(({
            size,
            label
          }) => <div key={size} className="flex flex-col items-center gap-2">
                <Checkbox color="primary" className={size} />
                <span className="text-xs text-gray-600">{label}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Checked</h3>
          <div className="flex flex-wrap items-end gap-6">
            {sizes.map(({
            size,
            label
          }) => <div key={size} className="flex flex-col items-center gap-2">
                <Checkbox color="primary" checked className={size} />
                <span className="text-xs text-gray-600">{label}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Indeterminate</h3>
          <div className="flex flex-wrap items-end gap-6">
            {sizes.map(({
            size,
            label
          }) => <div key={size} className="flex flex-col items-center gap-2">
                <Checkbox color="primary" checked="indeterminate" className={size} />
                <span className="text-xs text-gray-600">{label}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">모든 색상 (size-6)</h3>
          <div className="flex flex-wrap gap-6">
            {colors.map(color => <div key={color} className="flex flex-col items-center gap-2">
                <Checkbox color={color} checked className="size-6" />
                <span className="text-xs text-gray-600 capitalize">{color}</span>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4">
        <h1>체크박스 - 라벨</h1>
        <div className="flex items-center gap-2">
          <Checkbox id="example1" className="peer" />
          <Label htmlFor="example1" className="peer-data-[state=checked]:text-primary">
            Primary
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example2" className="peer" color="secondary" />
          <Label htmlFor="example2" className="peer-data-[state=checked]:text-secondary">
            Secondary
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example3" className="peer" color="danger" />
          <Label htmlFor="example3" className="peer-data-[state=checked]:text-danger">
            Danger
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example4" className="peer" color="success" />
          <Label htmlFor="example4" className="peer-data-[state=checked]:text-success">
            Success
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example5" className="peer" color="warning" />
          <Label htmlFor="example5" className="peer-data-[state=checked]:text-warning">
            Warning
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example6" className="peer" invalid />
          <Label htmlFor="example6" className="peer-data-[invalid=true]:text-danger">
            Invalid
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example7" className="peer" disabled />
          <Label htmlFor="example7" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
            Disabled
          </Label>
        </div>
      </div>;
  }
}`,...R.parameters?.docs?.source}}};const Oe=["Playground","Colors","States","Sizes","WithLabel"];export{z as Colors,w as Playground,E as Sizes,S as States,R as WithLabel,Oe as __namedExportsOrder,Ae as default};
