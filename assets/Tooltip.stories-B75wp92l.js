import{r as a,j as e,a as $,H as se}from"./iframe-B14tFzIM.js";import{B as i}from"./Button-D9mshCdM.js";import{a as re,P as V,u as q,b as ae,d as b,g as ie}from"./index-CmHaRtFw.js";import{c as Y,R as ce,P as de,d as xe,A as pe,b as me,C as ge,f as fe,e as ue,D as N}from"./index-BVgEovE7.js";import{u as he}from"./index-CoQBrwdB.js";import{u as Te}from"./index-BEZKKpIG.js";import{T as ve}from"./Textarea-Bu1UFCbj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8v0WkQr9.js";import"./index-D9rdF90-.js";import"./ScrollArea-B7UN8D5K.js";import"./index-BUoBtis5.js";var[k]=re("Tooltip",[Y]),H=Y(),X="TooltipProvider",ye=700,I="tooltip.open",[je,F]=k(X),K=n=>{const{__scopeTooltip:l,delayDuration:o=ye,skipDelayDuration:s=300,disableHoverableContent:r=!1,children:x}=n,d=a.useRef(!0),f=a.useRef(!1),c=a.useRef(0);return a.useEffect(()=>{const m=c.current;return()=>window.clearTimeout(m)},[]),e.jsx(je,{scope:l,isOpenDelayedRef:d,delayDuration:o,onOpen:a.useCallback(()=>{window.clearTimeout(c.current),d.current=!1},[]),onClose:a.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>d.current=!0,s)},[s]),isPointerInTransitRef:f,onPointerInTransitChange:a.useCallback(m=>{f.current=m},[]),disableHoverableContent:r,children:x})};K.displayName=X;var R="Tooltip",[Ne,E]=k(R),J=n=>{const{__scopeTooltip:l,children:o,open:s,defaultOpen:r,onOpenChange:x,disableHoverableContent:d,delayDuration:f}=n,c=F(R,n.__scopeTooltip),m=H(l),[p,u]=a.useState(null),h=he(),g=a.useRef(0),T=d??c.disableHoverableContent,y=f??c.delayDuration,v=a.useRef(!1),[C,j]=Te({prop:s,defaultProp:r??!1,onChange:U=>{U?(c.onOpen(),document.dispatchEvent(new CustomEvent(I))):c.onClose(),x?.(U)},caller:R}),D=a.useMemo(()=>C?v.current?"delayed-open":"instant-open":"closed",[C]),w=a.useCallback(()=>{window.clearTimeout(g.current),g.current=0,v.current=!1,j(!0)},[j]),P=a.useCallback(()=>{window.clearTimeout(g.current),g.current=0,j(!1)},[j]),W=a.useCallback(()=>{window.clearTimeout(g.current),g.current=window.setTimeout(()=>{v.current=!0,j(!0),g.current=0},y)},[y,j]);return a.useEffect(()=>()=>{g.current&&(window.clearTimeout(g.current),g.current=0)},[]),e.jsx(ce,{...m,children:e.jsx(Ne,{scope:l,contentId:h,open:C,stateAttribute:D,trigger:p,onTriggerChange:u,onTriggerEnter:a.useCallback(()=>{c.isOpenDelayedRef.current?W():w()},[c.isOpenDelayedRef,W,w]),onTriggerLeave:a.useCallback(()=>{T?P():(window.clearTimeout(g.current),g.current=0)},[P,T]),onOpen:w,onClose:P,disableHoverableContent:T,children:o})})};J.displayName=R;var M="TooltipTrigger",Q=a.forwardRef((n,l)=>{const{__scopeTooltip:o,...s}=n,r=E(M,o),x=F(M,o),d=H(o),f=a.useRef(null),c=q(l,f,r.onTriggerChange),m=a.useRef(!1),p=a.useRef(!1),u=a.useCallback(()=>m.current=!1,[]);return a.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),e.jsx(pe,{asChild:!0,...d,children:e.jsx(ae.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...s,ref:c,onPointerMove:b(n.onPointerMove,h=>{h.pointerType!=="touch"&&!p.current&&!x.isPointerInTransitRef.current&&(r.onTriggerEnter(),p.current=!0)}),onPointerLeave:b(n.onPointerLeave,()=>{r.onTriggerLeave(),p.current=!1}),onPointerDown:b(n.onPointerDown,()=>{r.open&&r.onClose(),m.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:b(n.onFocus,()=>{m.current||r.onOpen()}),onBlur:b(n.onBlur,r.onClose),onClick:b(n.onClick,r.onClose)})})});Q.displayName=M;var G="TooltipPortal",[Ce,be]=k(G,{forceMount:void 0}),Z=n=>{const{__scopeTooltip:l,forceMount:o,children:s,container:r}=n,x=E(G,l);return e.jsx(Ce,{scope:l,forceMount:o,children:e.jsx(V,{present:o||x.open,children:e.jsx(de,{asChild:!0,container:r,children:s})})})};Z.displayName=G;var B="TooltipContent",ee=a.forwardRef((n,l)=>{const o=be(B,n.__scopeTooltip),{forceMount:s=o.forceMount,side:r="top",...x}=n,d=E(B,n.__scopeTooltip);return e.jsx(V,{present:s||d.open,children:d.disableHoverableContent?e.jsx(te,{side:r,...x,ref:l}):e.jsx(Be,{side:r,...x,ref:l})})}),Be=a.forwardRef((n,l)=>{const o=E(B,n.__scopeTooltip),s=F(B,n.__scopeTooltip),r=a.useRef(null),x=q(l,r),[d,f]=a.useState(null),{trigger:c,onClose:m}=o,p=r.current,{onPointerInTransitChange:u}=s,h=a.useCallback(()=>{f(null),u(!1)},[u]),g=a.useCallback((T,y)=>{const v=T.currentTarget,C={x:T.clientX,y:T.clientY},j=Re(C,v.getBoundingClientRect()),D=Ee(C,j),w=_e(y.getBoundingClientRect()),P=Ae([...D,...w]);f(P),u(!0)},[u]);return a.useEffect(()=>()=>h(),[h]),a.useEffect(()=>{if(c&&p){const T=v=>g(v,p),y=v=>g(v,c);return c.addEventListener("pointerleave",T),p.addEventListener("pointerleave",y),()=>{c.removeEventListener("pointerleave",T),p.removeEventListener("pointerleave",y)}}},[c,p,g,h]),a.useEffect(()=>{if(d){const T=y=>{const v=y.target,C={x:y.clientX,y:y.clientY},j=c?.contains(v)||p?.contains(v),D=!Oe(C,d);j?h():D&&(h(),m())};return document.addEventListener("pointermove",T),()=>document.removeEventListener("pointermove",T)}},[c,p,d,m,h]),e.jsx(te,{...n,ref:x})}),[De,we]=k(R,{isInside:!1}),Pe=ie("TooltipContent"),te=a.forwardRef((n,l)=>{const{__scopeTooltip:o,children:s,"aria-label":r,onEscapeKeyDown:x,onPointerDownOutside:d,...f}=n,c=E(B,o),m=H(o),{onClose:p}=c;return a.useEffect(()=>(document.addEventListener(I,p),()=>document.removeEventListener(I,p)),[p]),a.useEffect(()=>{if(c.trigger){const u=h=>{h.target?.contains(c.trigger)&&p()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[c.trigger,p]),e.jsx(me,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:x,onPointerDownOutside:d,onFocusOutside:u=>u.preventDefault(),onDismiss:p,children:e.jsxs(ge,{"data-state":c.stateAttribute,...m,...f,ref:l,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[e.jsx(Pe,{children:s}),e.jsx(De,{scope:o,isInside:!0,children:e.jsx(fe,{id:c.contentId,role:"tooltip",children:r||s})})]})})});ee.displayName=B;var ne="TooltipArrow",oe=a.forwardRef((n,l)=>{const{__scopeTooltip:o,...s}=n,r=H(o);return we(ne,o).isInside?null:e.jsx(xe,{...r,...s,ref:l})});oe.displayName=ne;function Re(n,l){const o=Math.abs(l.top-n.y),s=Math.abs(l.bottom-n.y),r=Math.abs(l.right-n.x),x=Math.abs(l.left-n.x);switch(Math.min(o,s,r,x)){case x:return"left";case r:return"right";case o:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function Ee(n,l,o=5){const s=[];switch(l){case"top":s.push({x:n.x-o,y:n.y+o},{x:n.x+o,y:n.y+o});break;case"bottom":s.push({x:n.x-o,y:n.y-o},{x:n.x+o,y:n.y-o});break;case"left":s.push({x:n.x+o,y:n.y-o},{x:n.x+o,y:n.y+o});break;case"right":s.push({x:n.x-o,y:n.y-o},{x:n.x-o,y:n.y+o});break}return s}function _e(n){const{top:l,right:o,bottom:s,left:r}=n;return[{x:r,y:l},{x:o,y:l},{x:o,y:s},{x:r,y:s}]}function Oe(n,l){const{x:o,y:s}=n;let r=!1;for(let x=0,d=l.length-1;x<l.length;d=x++){const f=l[x],c=l[d],m=f.x,p=f.y,u=c.x,h=c.y;p>s!=h>s&&o<(u-m)*(s-p)/(h-p)+m&&(r=!r)}return r}function Ae(n){const l=n.slice();return l.sort((o,s)=>o.x<s.x?-1:o.x>s.x?1:o.y<s.y?-1:o.y>s.y?1:0),Se(l)}function Se(n){if(n.length<=1)return n.slice();const l=[];for(let s=0;s<n.length;s++){const r=n[s];for(;l.length>=2;){const x=l[l.length-1],d=l[l.length-2];if((x.x-d.x)*(r.y-d.y)>=(x.y-d.y)*(r.x-d.x))l.pop();else break}l.push(r)}l.pop();const o=[];for(let s=n.length-1;s>=0;s--){const r=n[s];for(;o.length>=2;){const x=o[o.length-1],d=o[o.length-2];if((x.x-d.x)*(r.y-d.y)>=(x.y-d.y)*(r.x-d.x))o.pop();else break}o.push(r)}return o.pop(),l.length===1&&o.length===1&&l[0].x===o[0].x&&l[0].y===o[0].y?l:l.concat(o)}var ze=K,Le=J,ke=Q,He=Z,Ie=ee,Me=oe;const Fe=({...n})=>e.jsx(ze,{"data-slot":"tooltip-provider",...n}),le=({delayDuration:n=0,...l})=>e.jsx(Fe,{children:e.jsx(Le,{"data-slot":"tooltip",delayDuration:n,...l})}),Ge=({...n})=>e.jsx(ke,{"data-slot":"tooltip-trigger",...n}),We=n=>{const{arrowClassName:l,className:o,sideOffset:s=4,children:r,container:x,collisionBoundary:d=[],...f}=n,{collisionBoundary:c,container:m,collisionPadding:p}=ue({collisionBoundary:d,container:x});return e.jsx(He,{container:m,children:e.jsxs(Ie,{"data-slot":"tooltip-content",sideOffset:s,className:$("bg-gray-800 text-white","animate-in fade-in-0 zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2","data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2","z-tooltip w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-sm text-balance",o),collisionBoundary:c,collisionPadding:p,...f,children:[r,e.jsx(Me,{className:$("fill-gray-800",l)})]})})},t=Object.assign(le,{Trigger:Ge,Content:We});le.__docgenInfo={description:"",methods:[],displayName:"TooltipRoot",props:{delayDuration:{defaultValue:{value:"0",computed:!1},required:!1}}};const nt={title:"Shared/UI/Tooltip",component:t,parameters:{layout:"centered",docs:{description:{component:`
### 툴팁 컴포넌트

Tooltip 컴포넌트는 사용자가 요소에 마우스를 올리거나 포커스할 때 추가 정보를 표시하는 컴포넌트입니다.
Radix UI의 Tooltip 프리미티브를 기반으로 구현되었습니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Tooltip\`, \`Tooltip.Trigger\`, \`Tooltip.Content\`로 구성
- **접근성 지원**: 키보드 네비게이션 및 스크린 리더 지원
- **다양한 위치**: \`side\` prop을 통해 top, bottom, left, right 위치 지정 가능
- **애니메이션**: 부드러운 fade-in/out 및 slide 애니메이션 제공
- **화살표 표시**: 자동으로 화살표가 표시되어 툴팁의 방향을 명확히 함
- **지연 시간 설정**: \`delayDuration\`을 통해 툴팁 표시 지연 시간 조정 가능
- **커스터마이징**: \`className\`을 통해 배경색, 텍스트 색상 등 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<Tooltip>
  <Tooltip.Trigger asChild>
    <Button>호버하세요</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>
    <p>이것은 툴팁입니다</p>
  </Tooltip.Content>
</Tooltip>
\`\`\`
        `}}},tags:["autodocs"]},_={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본 툴팁"}),e.jsx("p",{className:"text-xs text-gray-500",children:"마우스를 버튼 위에 올리면 툴팁이 표시됩니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"호버하세요"})}),e.jsx(t.Content,{children:"이것은 기본 툴팁입니다"})]})})]})})},O={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"위치별 툴팁"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`side\\` prop을 사용하여 툴팁의 위치를 지정할 수 있습니다."}),e.jsxs("div",{className:"flex flex-col items-center gap-8 p-12",children:[e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"Top"})}),e.jsx(t.Content,{side:"top",children:"위쪽 툴팁"})]}),e.jsxs("div",{className:"flex gap-8",children:[e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"Left"})}),e.jsx(t.Content,{side:"left",children:"왼쪽 툴팁"})]}),e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"Right"})}),e.jsx(t.Content,{side:"right",children:"오른쪽 툴팁"})]})]}),e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"Bottom"})}),e.jsx(t.Content,{side:"bottom",children:"아래쪽 툴팁"})]})]})]})})},A={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"지연 시간 설정"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`delayDuration\\` prop을 사용하여 툴팁 표시 지연 시간을 조정할 수 있습니다."}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(t,{delayDuration:0,children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"즉시 표시 (0ms)"})}),e.jsx(t.Content,{children:"지연 없이 즉시 표시됩니다"})]}),e.jsxs(t,{delayDuration:300,children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"짧은 지연 (300ms)"})}),e.jsx(t.Content,{children:"300ms 후에 표시됩니다"})]}),e.jsxs(t,{delayDuration:700,children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"중간 지연 (700ms)"})}),e.jsx(t.Content,{children:"700ms 후에 표시됩니다"})]}),e.jsxs(t,{delayDuration:1e3,children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"긴 지연 (1000ms)"})}),e.jsx(t.Content,{children:"1000ms 후에 표시됩니다"})]})]})]})})},S={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"다양한 스타일"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`className\\`을 통해 툴팁의 배경색, 텍스트 색상 등을 커스터마이징할 수 있습니다."}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"기본 스타일 (어두운 배경)"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"기본 스타일"})}),e.jsx(t.Content,{children:"기본 어두운 배경 툴팁"})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"밝은 배경 스타일"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"outlined",color:"secondary",children:"밝은 배경"})}),e.jsx(t.Content,{arrowClassName:"fill-gray-200",className:"border border-gray-200 bg-white text-gray-900",children:"밝은 배경 툴팁"})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"Primary 색상 스타일"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"Primary 색상"})}),e.jsx(t.Content,{arrowClassName:"fill-primary",className:"bg-primary text-white",children:"Primary 색상 툴팁"})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"Success 색상 스타일"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"success",children:"Success 색상"})}),e.jsx(t.Content,{arrowClassName:"fill-success",className:"bg-success text-white",children:"Success 색상 툴팁"})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"Warning 색상 스타일"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"warning",children:"Warning 색상"})}),e.jsx(t.Content,{arrowClassName:"fill-warning",className:"bg-warning text-white",children:"Warning 색상 툴팁"})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"Danger 색상 스타일"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"danger",children:"Danger 색상"})}),e.jsx(t.Content,{arrowClassName:"fill-danger",className:"bg-danger text-white",children:"Danger 색상 툴팁"})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"큰 텍스트 스타일"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"큰 텍스트"})}),e.jsx(t.Content,{className:"px-4 py-2 text-base",children:"더 큰 텍스트 크기의 툴팁"})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"긴 텍스트 스타일"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",children:"긴 텍스트"})}),e.jsx(t.Content,{className:"max-w-xs",children:"이것은 매우 긴 설명 텍스트입니다. 툴팁은 자동으로 텍스트를 줄바꿈하여 표시합니다. max-w-xs와 같은 클래스를 사용하여 최대 너비를 제한할 수 있습니다."})]})})]})]})]})})},z={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"컴포넌트 포함 툴팁"}),e.jsx("p",{className:"text-xs text-gray-500",children:"툴팁 안에 버튼이나 다른 컴포넌트를 넣을 수 있습니다. 다만 접근성 측면에서 툴팁 안에 인터랙티브 요소를 넣는 것은 권장되지 않습니다."}),e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"버튼이 포함된 툴팁"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{children:"호버하세요"})}),e.jsxs(t.Content,{className:"flex flex-col gap-2 p-3",children:[e.jsx("p",{className:"text-sm",children:"이 툴팁에는 버튼이 포함되어 있습니다."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(i,{size:"sm",children:"확인"}),e.jsx(i,{color:"danger",size:"sm",children:"취소"})]})]})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"여러 버튼이 포함된 툴팁"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{color:"secondary",children:"액션 메뉴"})}),e.jsxs(t.Content,{className:"flex flex-col gap-2 p-3",children:[e.jsx("p",{className:"text-sm font-medium",children:"빠른 액션"}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(i,{variant:"text",size:"sm",className:"justify-start",children:"편집"}),e.jsx(i,{variant:"text",size:"sm",className:"justify-start",children:"복사"}),e.jsx(i,{variant:"text",color:"danger",size:"sm",className:"justify-start",children:"삭제"})]})]})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"아이콘과 텍스트가 포함된 툴팁"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{color:"primary",children:"정보"})}),e.jsxs(t.Content,{className:"flex flex-col gap-2 p-3",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-sm font-medium",children:"상태 정보"})}),e.jsx("p",{className:"text-xs text-gray-300",children:"현재 상태를 확인하고 필요한 경우 액션을 취할 수 있습니다."}),e.jsx(i,{color:"success",size:"sm",className:"w-full",children:"상태 업데이트"})]})]})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"폼 요소가 포함된 툴팁"}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{color:"secondary",children:"빠른 입력"})}),e.jsxs(t.Content,{className:"flex flex-col gap-2 p-3",children:[e.jsx("p",{className:"text-sm font-medium",children:"빠른 메모"}),e.jsx(ve,{}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(i,{size:"sm",children:"저장"}),e.jsx(i,{color:"secondary",size:"sm",children:"취소"})]})]})]})})]})]})]})})},L={parameters:{docs:{description:{story:`
Dialog 내부에서 Tooltip을 사용할 때, Tooltip은 DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정합니다.
다양한 위치의 Tooltip을 배치하여 Dialog 경계를 벗어나지 않는다는 것을 확인할 수 있습니다.

**주요 동작**:
- Tooltip이 DialogBody 영역을 벗어나지 않도록 자동 위치 조정
- Dialog의 경계 근처에 있는 버튼에 Tooltip을 표시해도 Dialog 밖으로 나가지 않음
- 스크롤 가능한 DialogBody 내부에서도 정상 동작
        `}}},render:()=>{const n=()=>{se.open(l=>e.jsx(N,{overlayControl:l,children:e.jsxs(N.Content,{className:"h-[500px] w-[600px]",children:[e.jsxs(N.Header,{children:[e.jsx(N.Title,{children:"Dialog 내부의 Tooltip"}),e.jsx(N.Description,{children:"Dialog 내부에서 Tooltip을 사용하면 DialogBody 영역을 벗어나지 않도록 자동으로 위치가 조정됩니다."})]}),e.jsx(N.Body,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-gray-700",children:"아래 버튼들에 마우스를 올리면 Tooltip이 표시됩니다. Tooltip은 DialogBody 영역을 벗어나지 않습니다."}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between rounded-md border border-gray-200 p-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"상단 경계 근처"}),e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",size:"sm",children:"위쪽 툴팁"})}),e.jsx(t.Content,{side:"top",children:"Dialog 상단 경계 근처의 툴팁입니다"})]})]}),e.jsxs("div",{className:"flex items-center justify-between rounded-md border border-gray-200 p-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"좌측 경계 근처"}),e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",size:"sm",children:"왼쪽 툴팁"})}),e.jsx(t.Content,{side:"left",children:"Dialog 좌측 경계 근처의 툴팁입니다"})]})]}),e.jsxs("div",{className:"flex items-center justify-between rounded-md border border-gray-200 p-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"우측 경계 근처"}),e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",size:"sm",children:"오른쪽 툴팁"})}),e.jsx(t.Content,{side:"right",children:"Dialog 우측 경계 근처의 툴팁입니다"})]})]}),e.jsxs("div",{className:"flex items-center justify-between rounded-md border border-gray-200 p-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"하단 경계 근처"}),e.jsxs(t,{children:[e.jsx(t.Trigger,{asChild:!0,children:e.jsx(i,{variant:"filled",color:"primary",size:"sm",children:"아래쪽 툴팁"})}),e.jsx(t.Content,{side:"bottom",children:"Dialog 하단 경계 근처의 툴팁입니다"})]})]})]}),e.jsxs("div",{className:"mt-4 flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700",children:"DialogBody 내부 콘텐츠"}),e.jsx("p",{className:"text-sm text-gray-600",children:"DialogBody 내부에 충분한 콘텐츠가 있어도 Tooltip은 영역을 벗어나지 않습니다. 스크롤을 내려서 하단 경계 근처의 Tooltip을 확인해보세요."}),Array.from({length:15}).map((o,s)=>e.jsxs("p",{className:"text-sm text-gray-500",children:["추가 콘텐츠 ",s+1," - DialogBody 내부의 스크롤 가능한 영역입니다."]},s))]})]})}),e.jsxs(N.Footer,{children:[e.jsx(N.CancelButton,{children:"취소"}),e.jsx(N.Close,{children:e.jsx(N.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(i,{onClick:n,children:"Dialog 열기"})}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">기본 툴팁</h3>
        <p className="text-xs text-gray-500">마우스를 버튼 위에 올리면 툴팁이 표시됩니다.</p>
        <div className="flex gap-4">
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button variant="filled" color="primary">
                호버하세요
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>이것은 기본 툴팁입니다</Tooltip.Content>
          </Tooltip>
        </div>
      </div>
    </div>
}`,..._.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">위치별 툴팁</h3>
        <p className="text-xs text-gray-500">
          \\\`side\\\` prop을 사용하여 툴팁의 위치를 지정할 수 있습니다.
        </p>
        <div className="flex flex-col items-center gap-8 p-12">
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button variant="filled" color="primary">
                Top
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="top">위쪽 툴팁</Tooltip.Content>
          </Tooltip>
          <div className="flex gap-8">
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="filled" color="primary">
                  Left
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content side="left">왼쪽 툴팁</Tooltip.Content>
            </Tooltip>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="filled" color="primary">
                  Right
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content side="right">오른쪽 툴팁</Tooltip.Content>
            </Tooltip>
          </div>
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button variant="filled" color="primary">
                Bottom
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content side="bottom">아래쪽 툴팁</Tooltip.Content>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...O.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">지연 시간 설정</h3>
        <p className="text-xs text-gray-500">
          \\\`delayDuration\\\` prop을 사용하여 툴팁 표시 지연 시간을 조정할 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-4">
          <Tooltip delayDuration={0}>
            <Tooltip.Trigger asChild>
              <Button variant="filled" color="primary">
                즉시 표시 (0ms)
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>지연 없이 즉시 표시됩니다</Tooltip.Content>
          </Tooltip>
          <Tooltip delayDuration={300}>
            <Tooltip.Trigger asChild>
              <Button variant="filled" color="primary">
                짧은 지연 (300ms)
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>300ms 후에 표시됩니다</Tooltip.Content>
          </Tooltip>
          <Tooltip delayDuration={700}>
            <Tooltip.Trigger asChild>
              <Button variant="filled" color="primary">
                중간 지연 (700ms)
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>700ms 후에 표시됩니다</Tooltip.Content>
          </Tooltip>
          <Tooltip delayDuration={1000}>
            <Tooltip.Trigger asChild>
              <Button variant="filled" color="primary">
                긴 지연 (1000ms)
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>1000ms 후에 표시됩니다</Tooltip.Content>
          </Tooltip>
        </div>
      </div>
    </div>
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">다양한 스타일</h3>
        <p className="text-xs text-gray-500">
          \\\`className\\\`을 통해 툴팁의 배경색, 텍스트 색상 등을 커스터마이징할 수 있습니다.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">기본 스타일 (어두운 배경)</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button variant="filled" color="primary">
                    기본 스타일
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content>기본 어두운 배경 툴팁</Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">밝은 배경 스타일</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button variant="outlined" color="secondary">
                    밝은 배경
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content arrowClassName="fill-gray-200" className="border border-gray-200 bg-white text-gray-900">
                  밝은 배경 툴팁
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">Primary 색상 스타일</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button variant="filled" color="primary">
                    Primary 색상
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content arrowClassName="fill-primary" className="bg-primary text-white">
                  Primary 색상 툴팁
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">Success 색상 스타일</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button variant="filled" color="success">
                    Success 색상
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content arrowClassName="fill-success" className="bg-success text-white">
                  Success 색상 툴팁
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">Warning 색상 스타일</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button variant="filled" color="warning">
                    Warning 색상
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content arrowClassName="fill-warning" className="bg-warning text-white">
                  Warning 색상 툴팁
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">Danger 색상 스타일</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button variant="filled" color="danger">
                    Danger 색상
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content arrowClassName="fill-danger" className="bg-danger text-white">
                  Danger 색상 툴팁
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">큰 텍스트 스타일</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button variant="filled" color="primary">
                    큰 텍스트
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="px-4 py-2 text-base">
                  더 큰 텍스트 크기의 툴팁
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">긴 텍스트 스타일</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button variant="filled" color="primary">
                    긴 텍스트
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="max-w-xs">
                  이것은 매우 긴 설명 텍스트입니다. 툴팁은 자동으로 텍스트를 줄바꿈하여 표시합니다.
                  max-w-xs와 같은 클래스를 사용하여 최대 너비를 제한할 수 있습니다.
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">컴포넌트 포함 툴팁</h3>
        <p className="text-xs text-gray-500">
          툴팁 안에 버튼이나 다른 컴포넌트를 넣을 수 있습니다. 다만 접근성 측면에서 툴팁 안에
          인터랙티브 요소를 넣는 것은 권장되지 않습니다.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">버튼이 포함된 툴팁</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button>호버하세요</Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="flex flex-col gap-2 p-3">
                  <p className="text-sm">이 툴팁에는 버튼이 포함되어 있습니다.</p>
                  <div className="flex gap-2">
                    <Button size="sm">확인</Button>
                    <Button color="danger" size="sm">
                      취소
                    </Button>
                  </div>
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">여러 버튼이 포함된 툴팁</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button color="secondary">액션 메뉴</Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="flex flex-col gap-2 p-3">
                  <p className="text-sm font-medium">빠른 액션</p>
                  <div className="flex flex-col gap-1">
                    <Button variant="text" size="sm" className="justify-start">
                      편집
                    </Button>
                    <Button variant="text" size="sm" className="justify-start">
                      복사
                    </Button>
                    <Button variant="text" color="danger" size="sm" className="justify-start">
                      삭제
                    </Button>
                  </div>
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">아이콘과 텍스트가 포함된 툴팁</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button color="primary">정보</Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="flex flex-col gap-2 p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">상태 정보</span>
                  </div>
                  <p className="text-xs text-gray-300">
                    현재 상태를 확인하고 필요한 경우 액션을 취할 수 있습니다.
                  </p>
                  <Button color="success" size="sm" className="w-full">
                    상태 업데이트
                  </Button>
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">폼 요소가 포함된 툴팁</h4>
            <div className="flex gap-4">
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button color="secondary">빠른 입력</Button>
                </Tooltip.Trigger>
                <Tooltip.Content className="flex flex-col gap-2 p-3">
                  <p className="text-sm font-medium">빠른 메모</p>
                  <Textarea />
                  <div className="flex gap-2">
                    <Button size="sm">저장</Button>
                    <Button color="secondary" size="sm">
                      취소
                    </Button>
                  </div>
                </Tooltip.Content>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...z.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Dialog 내부에서 Tooltip을 사용할 때, Tooltip은 DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정합니다.
다양한 위치의 Tooltip을 배치하여 Dialog 경계를 벗어나지 않는다는 것을 확인할 수 있습니다.

**주요 동작**:
- Tooltip이 DialogBody 영역을 벗어나지 않도록 자동 위치 조정
- Dialog의 경계 근처에 있는 버튼에 Tooltip을 표시해도 Dialog 밖으로 나가지 않음
- 스크롤 가능한 DialogBody 내부에서도 정상 동작
        \`
      }
    }
  },
  render: () => {
    const handleOpen = () => {
      overlay.open(overlayControl => <Dialog overlayControl={overlayControl}>
          <Dialog.Content className="h-[500px] w-[600px]">
            <Dialog.Header>
              <Dialog.Title>Dialog 내부의 Tooltip</Dialog.Title>
              <Dialog.Description>
                Dialog 내부에서 Tooltip을 사용하면 DialogBody 영역을 벗어나지 않도록 자동으로 위치가
                조정됩니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <div className="flex flex-col gap-4">
                <p className="text-gray-700">
                  아래 버튼들에 마우스를 올리면 Tooltip이 표시됩니다. Tooltip은 DialogBody 영역을
                  벗어나지 않습니다.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between rounded-md border border-gray-200 p-4">
                    <span className="text-sm text-gray-600">상단 경계 근처</span>
                    <Tooltip>
                      <Tooltip.Trigger asChild>
                        <Button variant="filled" color="primary" size="sm">
                          위쪽 툴팁
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content side="top">
                        Dialog 상단 경계 근처의 툴팁입니다
                      </Tooltip.Content>
                    </Tooltip>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-gray-200 p-4">
                    <span className="text-sm text-gray-600">좌측 경계 근처</span>
                    <Tooltip>
                      <Tooltip.Trigger asChild>
                        <Button variant="filled" color="primary" size="sm">
                          왼쪽 툴팁
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content side="left">
                        Dialog 좌측 경계 근처의 툴팁입니다
                      </Tooltip.Content>
                    </Tooltip>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-gray-200 p-4">
                    <span className="text-sm text-gray-600">우측 경계 근처</span>
                    <Tooltip>
                      <Tooltip.Trigger asChild>
                        <Button variant="filled" color="primary" size="sm">
                          오른쪽 툴팁
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content side="right">
                        Dialog 우측 경계 근처의 툴팁입니다
                      </Tooltip.Content>
                    </Tooltip>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-gray-200 p-4">
                    <span className="text-sm text-gray-600">하단 경계 근처</span>
                    <Tooltip>
                      <Tooltip.Trigger asChild>
                        <Button variant="filled" color="primary" size="sm">
                          아래쪽 툴팁
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content side="bottom">
                        Dialog 하단 경계 근처의 툴팁입니다
                      </Tooltip.Content>
                    </Tooltip>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-sm font-medium text-gray-700">DialogBody 내부 콘텐츠</p>
                  <p className="text-sm text-gray-600">
                    DialogBody 내부에 충분한 콘텐츠가 있어도 Tooltip은 영역을 벗어나지 않습니다.
                    스크롤을 내려서 하단 경계 근처의 Tooltip을 확인해보세요.
                  </p>
                  {Array.from({
                  length: 15
                }).map((_, i) => <p key={i} className="text-sm text-gray-500">
                      추가 콘텐츠 {i + 1} - DialogBody 내부의 스크롤 가능한 영역입니다.
                    </p>)}
                </div>
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CancelButton>취소</Dialog.CancelButton>
              <Dialog.Close>
                <Dialog.ConfirmButton>확인</Dialog.ConfirmButton>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>);
    };
    return <Button onClick={handleOpen}>Dialog 열기</Button>;
  }
}`,...L.parameters?.docs?.source}}};const ot=["기본툴팁","위치별툴팁","지연시간설정","다양한스타일","컴포넌트포함","다이얼로그내부"];export{ot as __namedExportsOrder,nt as default,_ as 기본툴팁,S as 다양한스타일,L as 다이얼로그내부,O as 위치별툴팁,A as 지연시간설정,z as 컴포넌트포함};
