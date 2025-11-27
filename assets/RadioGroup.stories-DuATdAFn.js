import{r as i,j as e}from"./iframe-BQZr8jVe.js";import{c as he}from"./index-DOOMdwi9.js";import{c as M,P as w,e as j,a as P,d as be}from"./index-zegQQXP-.js";import{c as Ne,u as ye}from"./index-D6Hv88sW.js";import{u as B,a as Re}from"./index-DWG84EiS.js";import{u as q,a as je,b as Ie}from"./index-D42-f6AR.js";import{c as W}from"./cn-CPGtsWvz.js";import{c as Fe}from"./createLucideIcon-Cfk6RcC0.js";import{L as n}from"./Label-BGAJOpxG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dm5LYP5_.js";import"./index-CCnmBc38.js";const Ge=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],we=Fe("circle",Ge);var A="rovingFocusGroup.onEntryFocus",Le={bubbles:!1,cancelable:!0},L="RovingFocusGroup",[T,H,_e]=Ne(L),[ke,Y]=M(L,[_e]),[Se,Ce]=ke(L),X=i.forwardRef((a,t)=>e.jsx(T.Provider,{scope:a.__scopeRovingFocusGroup,children:e.jsx(T.Slot,{scope:a.__scopeRovingFocusGroup,children:e.jsx(Ee,{...a,ref:t})})}));X.displayName=L;var Ee=i.forwardRef((a,t)=>{const{__scopeRovingFocusGroup:s,orientation:o,loop:l=!1,dir:c,currentTabStopId:m,defaultCurrentTabStopId:x,onCurrentTabStopIdChange:h,onEntryFocus:v,preventScrollOnEntryFocus:p=!1,...f}=a,b=i.useRef(null),u=P(t,b),g=B(c),[y,d]=q({prop:m,defaultProp:x??null,onChange:h,caller:L}),[I,V]=i.useState(!1),R=Re(v),F=H(s),D=i.useRef(!1),[ue,U]=i.useState(0);return i.useEffect(()=>{const N=b.current;if(N)return N.addEventListener(A,R),()=>N.removeEventListener(A,R)},[R]),e.jsx(Se,{scope:s,orientation:o,dir:g,loop:l,currentTabStopId:y,onItemFocus:i.useCallback(N=>d(N),[d]),onItemShiftTab:i.useCallback(()=>V(!0),[]),onFocusableItemAdd:i.useCallback(()=>U(N=>N+1),[]),onFocusableItemRemove:i.useCallback(()=>U(N=>N-1),[]),children:e.jsx(w.div,{tabIndex:I||ue===0?-1:0,"data-orientation":o,...f,ref:u,style:{outline:"none",...a.style},onMouseDown:j(a.onMouseDown,()=>{D.current=!0}),onFocus:j(a.onFocus,N=>{const ve=!D.current;if(N.target===N.currentTarget&&ve&&!I){const z=new CustomEvent(A,Le);if(N.currentTarget.dispatchEvent(z),!z.defaultPrevented){const O=F().filter(G=>G.focusable),ge=O.find(G=>G.active),fe=O.find(G=>G.id===y),xe=[ge,fe,...O].filter(Boolean).map(G=>G.ref.current);Z(xe,p)}}D.current=!1}),onBlur:j(a.onBlur,()=>V(!1))})})}),J="RovingFocusGroupItem",Q=i.forwardRef((a,t)=>{const{__scopeRovingFocusGroup:s,focusable:o=!0,active:l=!1,tabStopId:c,children:m,...x}=a,h=ye(),v=c||h,p=Ce(J,s),f=p.currentTabStopId===v,b=H(s),{onFocusableItemAdd:u,onFocusableItemRemove:g,currentTabStopId:y}=p;return i.useEffect(()=>{if(o)return u(),()=>g()},[o,u,g]),e.jsx(T.ItemSlot,{scope:s,id:v,focusable:o,active:l,children:e.jsx(w.span,{tabIndex:f?0:-1,"data-orientation":p.orientation,...x,ref:t,onMouseDown:j(a.onMouseDown,d=>{o?p.onItemFocus(v):d.preventDefault()}),onFocus:j(a.onFocus,()=>p.onItemFocus(v)),onKeyDown:j(a.onKeyDown,d=>{if(d.key==="Tab"&&d.shiftKey){p.onItemShiftTab();return}if(d.target!==d.currentTarget)return;const I=Ve(d,p.orientation,p.dir);if(I!==void 0){if(d.metaKey||d.ctrlKey||d.altKey||d.shiftKey)return;d.preventDefault();let R=b().filter(F=>F.focusable).map(F=>F.ref.current);if(I==="last")R.reverse();else if(I==="prev"||I==="next"){I==="prev"&&R.reverse();const F=R.indexOf(d.currentTarget);R=p.loop?De(R,F+1):R.slice(F+1)}setTimeout(()=>Z(R))}}),children:typeof m=="function"?m({isCurrentTabStop:f,hasTabStop:y!=null}):m})})});Q.displayName=J;var Pe={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function $e(a,t){return t!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function Ve(a,t,s){const o=$e(a.key,s);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(o))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(o)))return Pe[o]}function Z(a,t=!1){const s=document.activeElement;for(const o of a)if(o===s||(o.focus({preventScroll:t}),document.activeElement!==s))return}function De(a,t){return a.map((s,o)=>a[(t+o)%a.length])}var Oe=X,Ae=Q,K="Radio",[Te,ee]=M(K),[Me,Ke]=Te(K),ae=i.forwardRef((a,t)=>{const{__scopeRadio:s,name:o,checked:l=!1,required:c,disabled:m,value:x="on",onCheck:h,form:v,...p}=a,[f,b]=i.useState(null),u=P(t,d=>b(d)),g=i.useRef(!1),y=f?v||!!f.closest("form"):!0;return e.jsxs(Me,{scope:s,checked:l,disabled:m,children:[e.jsx(w.button,{type:"button",role:"radio","aria-checked":l,"data-state":te(l),"data-disabled":m?"":void 0,disabled:m,value:x,...p,ref:u,onClick:j(a.onClick,d=>{l||h?.(),y&&(g.current=d.isPropagationStopped(),g.current||d.stopPropagation())})}),y&&e.jsx(oe,{control:f,bubbles:!g.current,name:o,value:x,checked:l,required:c,disabled:m,form:v,style:{transform:"translateX(-100%)"}})]})});ae.displayName=K;var re="RadioIndicator",se=i.forwardRef((a,t)=>{const{__scopeRadio:s,forceMount:o,...l}=a,c=Ke(re,s);return e.jsx(be,{present:o||c.checked,children:e.jsx(w.span,{"data-state":te(c.checked),"data-disabled":c.disabled?"":void 0,...l,ref:t})})});se.displayName=re;var Ue="RadioBubbleInput",oe=i.forwardRef(({__scopeRadio:a,control:t,checked:s,bubbles:o=!0,...l},c)=>{const m=i.useRef(null),x=P(m,c),h=je(s),v=Ie(t);return i.useEffect(()=>{const p=m.current;if(!p)return;const f=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(f,"checked").set;if(h!==s&&u){const g=new Event("click",{bubbles:o});u.call(p,s),p.dispatchEvent(g)}},[h,s,o]),e.jsx(w.input,{type:"radio","aria-hidden":!0,defaultChecked:s,...l,tabIndex:-1,ref:x,style:{...l.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});oe.displayName=Ue;function te(a){return a?"checked":"unchecked"}var ze=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],$="RadioGroup",[Be]=M($,[Y,ee]),ie=Y(),le=ee(),[qe,We]=Be($),ne=i.forwardRef((a,t)=>{const{__scopeRadioGroup:s,name:o,defaultValue:l,value:c,required:m=!1,disabled:x=!1,orientation:h,dir:v,loop:p=!0,onValueChange:f,...b}=a,u=ie(s),g=B(v),[y,d]=q({prop:c,defaultProp:l??null,onChange:f,caller:$});return e.jsx(qe,{scope:s,name:o,required:m,disabled:x,value:y,onValueChange:d,children:e.jsx(Oe,{asChild:!0,...u,orientation:h,dir:g,loop:p,children:e.jsx(w.div,{role:"radiogroup","aria-required":m,"aria-orientation":h,"data-disabled":x?"":void 0,dir:g,...b,ref:t})})})});ne.displayName=$;var de="RadioGroupItem",ce=i.forwardRef((a,t)=>{const{__scopeRadioGroup:s,disabled:o,...l}=a,c=We(de,s),m=c.disabled||o,x=ie(s),h=le(s),v=i.useRef(null),p=P(t,v),f=c.value===l.value,b=i.useRef(!1);return i.useEffect(()=>{const u=y=>{ze.includes(y.key)&&(b.current=!0)},g=()=>b.current=!1;return document.addEventListener("keydown",u),document.addEventListener("keyup",g),()=>{document.removeEventListener("keydown",u),document.removeEventListener("keyup",g)}},[]),e.jsx(Ae,{asChild:!0,...x,focusable:!m,active:f,children:e.jsx(ae,{disabled:m,required:c.required,checked:f,...h,...l,name:c.name,ref:p,onCheck:()=>c.onValueChange(l.value),onKeyDown:j(u=>{u.key==="Enter"&&u.preventDefault()}),onFocus:j(l.onFocus,()=>{b.current&&v.current?.click()})})})});ce.displayName=de;var He="RadioGroupIndicator",pe=i.forwardRef((a,t)=>{const{__scopeRadioGroup:s,...o}=a,l=le(s);return e.jsx(se,{...l,...o,ref:t})});pe.displayName=He;var Ye=ne,Xe=ce,Je=pe;const me=a=>{const{className:t,...s}=a;return e.jsx(Ye,{"data-slot":"radio-group",className:W(t),...s})},Qe=he(["size-4 rounded-full border transition-all focus-visible:ring","outline-none disabled:cursor-not-allowed disabled:border-gray-300","data-[invalid=true]:border-danger data-[invalid=true]:focus-visible:ring-danger data-[invalid=true]:hover:border-danger data-[invalid=true]:hover:bg-red-50",'disabled:[&_[data-slot="radio-group-indicator"]_svg]:fill-gray-300 disabled:[&_[data-slot="radio-group-indicator"]_svg]:stroke-gray-300','data-[invalid=true]:[&_[data-slot="radio-group-indicator"]_svg]:fill-danger data-[invalid=true]:[&_[data-slot="radio-group-indicator"]_svg]:stroke-danger'],{variants:{color:{primary:["border-primary focus-visible:ring-primary not-disabled:hover:bg-sky-50",'[&_[data-slot="radio-group-indicator"]_svg]:fill-primary [&_[data-slot="radio-group-indicator"]_svg]:stroke-primary'],secondary:["border-gray-600 not-disabled:hover:bg-gray-50 focus-visible:ring-gray-600",'[&_[data-slot="radio-group-indicator"]_svg]:fill-gray-600 [&_[data-slot="radio-group-indicator"]_svg]:stroke-gray-600'],danger:["border-danger focus-visible:ring-danger not-disabled:hover:bg-red-50",'[&_[data-slot="radio-group-indicator"]_svg]:fill-danger [&_[data-slot="radio-group-indicator"]_svg]:stroke-danger'],success:["border-success focus-visible:ring-success not-disabled:hover:bg-green-50",'[&_[data-slot="radio-group-indicator"]_svg]:fill-success [&_[data-slot="radio-group-indicator"]_svg]:stroke-success'],warning:["border-warning focus-visible:ring-warning not-disabled:hover:bg-yellow-50",'[&_[data-slot="radio-group-indicator"]_svg]:fill-warning [&_[data-slot="radio-group-indicator"]_svg]:stroke-warning']}},defaultVariants:{color:"primary"}}),Ze=a=>{const{className:t,color:s,invalid:o,disabled:l,...c}=a;return e.jsx(Xe,{"data-slot":"radio-group-item","data-invalid":o,disabled:l,className:W(Qe({color:s}),t),...c,children:e.jsx(Je,{"data-slot":"radio-group-indicator",className:"relative flex items-center justify-center",children:e.jsx(we,{className:"absolute top-1/2 left-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2"})})})},r=Object.assign(me,{Item:Ze});me.__docgenInfo={description:"",methods:[],displayName:"RadioGroupRoot"};const ua={title:"Shared/UI/RadioGroup",component:r.Item,parameters:{layout:"centered",controls:{exclude:["className","onValueChange","value","name","dir","loop","orientation","required","asChild","onClick","onKeyDown","tabIndex","style","aria-label","aria-labelledby","aria-describedby","aria-required"]},docs:{description:{component:`
### 라디오 그룹 컴포넌트

RadioGroup 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 라디오 버튼 그룹입니다.

## 주요 기능

- **단일 선택**: 여러 옵션 중 하나만 선택 가능
- **다양한 색상**: \`primary\`, \`secondary\`, \`danger\`, \`success\`, \`warning\` 색상 지원
- **상태 관리**: \`disabled\`, \`invalid\` 상태 지원
- **접근성**: 표준 HTML radio 속성으로 접근성 지원
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<RadioGroup defaultValue="option1" color="primary">
  <div className="flex items-center gap-2">
    <RadioGroup.Item value="option1" id="option1" />
    <Label htmlFor="option1">옵션 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroup.Item value="option2" id="option2" />
    <Label htmlFor="option2">옵션 2</Label>
  </div>
</RadioGroup>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning"],description:"라디오 그룹의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"}}},defaultValue:{control:"text",description:"기본 선택 값",table:{type:{summary:"string"}}},value:{control:"text",description:"현재 선택 값 (제어 컴포넌트)",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"라디오 그룹 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},E=["primary","secondary","danger","success","warning"],_={parameters:{controls:{disable:!1},docs:{description:{story:`
라디오 그룹을 클릭하면 옵션을 선택할 수 있습니다.
        `}}},render:a=>e.jsxs(r,{className:"grid gap-3",defaultValue:"option1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{...a,value:"option1",id:"option1"}),e.jsx(n,{htmlFor:"option1",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{...a,value:"option2",id:"option2"}),e.jsx(n,{htmlFor:"option2",children:"옵션 2"})]})]}),args:{color:"primary",value:"option1"}},k={args:{value:"option1"},render:()=>e.jsx("div",{className:"flex flex-row flex-wrap gap-8",children:E.map(a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700 capitalize",children:a}),e.jsxs(r,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option1",id:`${a}-option1`,color:a}),e.jsx(n,{htmlFor:`${a}-option1`,children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option2",id:`${a}-option2`,color:a}),e.jsx(n,{htmlFor:`${a}-option2`,children:"옵션 2"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option3",id:`${a}-option3`,color:a}),e.jsx(n,{htmlFor:`${a}-option3`,children:"옵션 3"})]})]})]},a))})},S={args:{value:"option1"},render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"기본 상태"}),e.jsx("div",{className:"grid grid-cols-5 gap-6",children:E.map(a=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 capitalize",children:a}),e.jsxs(r,{defaultValue:"option1",className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option1",id:`default-${a}-1`,color:a}),e.jsx(n,{htmlFor:`default-${a}-1`,className:"text-sm",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option2",id:`default-${a}-2`,color:a}),e.jsx(n,{htmlFor:`default-${a}-2`,className:"text-sm",children:"옵션 2"})]})]})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Disabled 상태"}),e.jsx("div",{className:"grid grid-cols-5 gap-6",children:E.map(a=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 capitalize",children:a}),e.jsxs(r,{defaultValue:"option1",disabled:!0,className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option1",id:`disabled-${a}-1`,disabled:!0,color:a}),e.jsx(n,{htmlFor:`disabled-${a}-1`,className:"text-sm",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option2",id:`disabled-${a}-2`,disabled:!0,color:a}),e.jsx(n,{htmlFor:`disabled-${a}-2`,className:"text-sm",children:"옵션 2"})]})]})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Invalid 상태"}),e.jsx("div",{className:"grid grid-cols-5 gap-6",children:E.map(a=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 capitalize",children:a}),e.jsxs(r,{defaultValue:"option1",className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{invalid:!0,value:"option1",id:`invalid-${a}-1`,"aria-invalid":"true",color:a}),e.jsx(n,{htmlFor:`invalid-${a}-1`,className:"text-sm",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{invalid:!0,value:"option2",id:`invalid-${a}-2`,"aria-invalid":"true",color:a}),e.jsx(n,{htmlFor:`invalid-${a}-2`,className:"text-sm",children:"옵션 2"})]})]})]},a))})]})]})},C={args:{value:"option1"},render:()=>e.jsxs("div",{className:"flex flex-row flex-wrap gap-6",children:[e.jsxs(r,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option1",id:"primary-1",className:"peer",color:"primary"}),e.jsx(n,{htmlFor:"primary-1",className:"peer-data-[state=checked]:text-primary",children:"Primary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option2",id:"primary-2",className:"peer",color:"primary"}),e.jsx(n,{htmlFor:"primary-2",className:"peer-data-[state=checked]:text-primary",children:"Primary Option 2"})]})]}),e.jsxs(r,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option1",id:"secondary-1",className:"peer",color:"secondary"}),e.jsx(n,{htmlFor:"secondary-1",className:"peer-data-[state=checked]:text-gray-600",children:"Secondary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option2",id:"secondary-2",className:"peer",color:"secondary"}),e.jsx(n,{htmlFor:"secondary-2",className:"peer-data-[state=checked]:text-gray-600",children:"Secondary Option 2"})]})]}),e.jsxs(r,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option1",id:"danger-1",className:"peer",color:"danger"}),e.jsx(n,{htmlFor:"danger-1",className:"peer-data-[state=checked]:text-danger",children:"Danger"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option2",id:"danger-2",className:"peer",color:"danger"}),e.jsx(n,{htmlFor:"danger-2",className:"peer-data-[state=checked]:text-danger",children:"Danger Option 2"})]})]}),e.jsxs(r,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option1",id:"success-1",className:"peer",color:"success"}),e.jsx(n,{htmlFor:"success-1",className:"peer-data-[state=checked]:text-success",children:"Success"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option2",id:"success-2",className:"peer",color:"success"}),e.jsx(n,{htmlFor:"success-2",className:"peer-data-[state=checked]:text-success",children:"Success Option 2"})]})]}),e.jsxs(r,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option1",id:"warning-1",className:"peer",color:"warning"}),e.jsx(n,{htmlFor:"warning-1",className:"peer-data-[state=checked]:text-warning",children:"Warning"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option2",id:"warning-2",className:"peer",color:"warning"}),e.jsx(n,{htmlFor:"warning-2",className:"peer-data-[state=checked]:text-warning",children:"Warning Option 2"})]})]}),e.jsxs(r,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{invalid:!0,value:"option1",id:"invalid-1",className:"peer",color:"primary"}),e.jsx(n,{htmlFor:"invalid-1",className:"peer-data-[invalid=true]:text-danger",children:"Invalid"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{invalid:!0,value:"option2",id:"invalid-2",className:"peer",color:"primary"}),e.jsx(n,{htmlFor:"invalid-2",className:"peer-data-[invalid=true]:text-danger",children:"Invalid Option 2"})]})]}),e.jsxs(r,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option1",id:"disabled-1",className:"peer",disabled:!0}),e.jsx(n,{htmlFor:"disabled-1",className:"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",children:"Disabled"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r.Item,{value:"option2",id:"disabled-2",className:"peer",disabled:!0}),e.jsx(n,{htmlFor:"disabled-2",className:"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",children:"Disabled Option 2"})]})]})]})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
라디오 그룹을 클릭하면 옵션을 선택할 수 있습니다.
        \`
      }
    }
  },
  render: args => {
    return <RadioGroup className="grid gap-3" defaultValue="option1">
        <div className="flex items-center gap-2">
          <RadioGroup.Item {...args} value="option1" id="option1" />
          <Label htmlFor="option1">옵션 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup.Item {...args} value="option2" id="option2" />
          <Label htmlFor="option2">옵션 2</Label>
        </div>
      </RadioGroup>;
  },
  args: {
    color: 'primary',
    value: 'option1'
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'option1'
  },
  render: () => {
    return <div className="flex flex-row flex-wrap gap-8">
        {colors.map(color => <div key={color} className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-700 capitalize">{color}</h3>
            <RadioGroup defaultValue="option1" className="grid gap-3">
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="option1" id={\`\${color}-option1\`} color={color} />
                <Label htmlFor={\`\${color}-option1\`}>옵션 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="option2" id={\`\${color}-option2\`} color={color} />
                <Label htmlFor={\`\${color}-option2\`}>옵션 2</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="option3" id={\`\${color}-option3\`} color={color} />
                <Label htmlFor={\`\${color}-option3\`}>옵션 3</Label>
              </div>
            </RadioGroup>
          </div>)}
      </div>;
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'option1'
  },
  render: () => {
    return <div className="flex flex-col gap-8">
        {/* 기본 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">기본 상태</h3>
          <div className="grid grid-cols-5 gap-6">
            {colors.map(color => <div key={color} className="flex flex-col gap-3">
                <h4 className="text-sm font-medium text-gray-600 capitalize">{color}</h4>
                <RadioGroup defaultValue="option1" className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option1" id={\`default-\${color}-1\`} color={color} />
                    <Label htmlFor={\`default-\${color}-1\`} className="text-sm">
                      옵션 1
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option2" id={\`default-\${color}-2\`} color={color} />
                    <Label htmlFor={\`default-\${color}-2\`} className="text-sm">
                      옵션 2
                    </Label>
                  </div>
                </RadioGroup>
              </div>)}
          </div>
        </div>

        {/* Disabled 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Disabled 상태</h3>
          <div className="grid grid-cols-5 gap-6">
            {colors.map(color => <div key={color} className="flex flex-col gap-3">
                <h4 className="text-sm font-medium text-gray-600 capitalize">{color}</h4>
                <RadioGroup defaultValue="option1" disabled className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option1" id={\`disabled-\${color}-1\`} disabled color={color} />
                    <Label htmlFor={\`disabled-\${color}-1\`} className="text-sm">
                      옵션 1
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option2" id={\`disabled-\${color}-2\`} disabled color={color} />
                    <Label htmlFor={\`disabled-\${color}-2\`} className="text-sm">
                      옵션 2
                    </Label>
                  </div>
                </RadioGroup>
              </div>)}
          </div>
        </div>

        {/* Invalid 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Invalid 상태</h3>
          <div className="grid grid-cols-5 gap-6">
            {colors.map(color => <div key={color} className="flex flex-col gap-3">
                <h4 className="text-sm font-medium text-gray-600 capitalize">{color}</h4>
                <RadioGroup defaultValue="option1" className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item invalid value="option1" id={\`invalid-\${color}-1\`} aria-invalid="true" color={color} />
                    <Label htmlFor={\`invalid-\${color}-1\`} className="text-sm">
                      옵션 1
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item invalid value="option2" id={\`invalid-\${color}-2\`} aria-invalid="true" color={color} />
                    <Label htmlFor={\`invalid-\${color}-2\`} className="text-sm">
                      옵션 2
                    </Label>
                  </div>
                </RadioGroup>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'option1'
  },
  render: () => {
    return <div className="flex flex-row flex-wrap gap-6">
        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="primary-1" className="peer" color="primary" />
            <Label htmlFor="primary-1" className="peer-data-[state=checked]:text-primary">
              Primary
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="primary-2" className="peer" color="primary" />
            <Label htmlFor="primary-2" className="peer-data-[state=checked]:text-primary">
              Primary Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="secondary-1" className="peer" color="secondary" />
            <Label htmlFor="secondary-1" className="peer-data-[state=checked]:text-gray-600">
              Secondary
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="secondary-2" className="peer" color="secondary" />
            <Label htmlFor="secondary-2" className="peer-data-[state=checked]:text-gray-600">
              Secondary Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="danger-1" className="peer" color="danger" />
            <Label htmlFor="danger-1" className="peer-data-[state=checked]:text-danger">
              Danger
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="danger-2" className="peer" color="danger" />
            <Label htmlFor="danger-2" className="peer-data-[state=checked]:text-danger">
              Danger Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="success-1" className="peer" color="success" />
            <Label htmlFor="success-1" className="peer-data-[state=checked]:text-success">
              Success
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="success-2" className="peer" color="success" />
            <Label htmlFor="success-2" className="peer-data-[state=checked]:text-success">
              Success Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="warning-1" className="peer" color="warning" />
            <Label htmlFor="warning-1" className="peer-data-[state=checked]:text-warning">
              Warning
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="warning-2" className="peer" color="warning" />
            <Label htmlFor="warning-2" className="peer-data-[state=checked]:text-warning">
              Warning Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item invalid value="option1" id="invalid-1" className="peer" color="primary" />
            <Label htmlFor="invalid-1" className="peer-data-[invalid=true]:text-danger">
              Invalid
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item invalid value="option2" id="invalid-2" className="peer" color="primary" />
            <Label htmlFor="invalid-2" className="peer-data-[invalid=true]:text-danger">
              Invalid Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="disabled-1" className="peer" disabled />
            <Label htmlFor="disabled-1" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
              Disabled
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="disabled-2" className="peer" disabled />
            <Label htmlFor="disabled-2" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
              Disabled Option 2
            </Label>
          </div>
        </RadioGroup>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};const va=["Playground","Colors","States","WithLabel"];export{k as Colors,_ as Playground,S as States,C as WithLabel,va as __namedExportsOrder,ua as default};
