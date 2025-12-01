import{c as se,r as p,j as e,a as re,R as k,H as z}from"./iframe-DvAcwVFH.js";import{a as te,P as F,u as M,b as H,d as j,e as ae}from"./index-DE2f7I4D.js";import{c as W,R as le,A as L,P as ie,h as ce,a as de,u as pe,F as xe,b as me,C as ge,d as he,e as ve,D as d}from"./index-EaCrmfwY.js";import{u as ue}from"./index-C-dffQxu.js";import{u as fe}from"./index-A3F_Fzbv.js";import{B as a}from"./Button-BmpyaUGQ.js";import{S as m}from"./Select-DKK_5s5P.js";import{C as I}from"./Checkbox-ET_MA4Jd.js";import{I as U}from"./info-BS4Ww3WX.js";import{U as je}from"./user-CTt7tITr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BorqGysB.js";import"./index-D8vcUbJs.js";import"./ScrollArea-CHuWdQ7p.js";import"./index-BMUuxj7O.js";import"./index-FbwJIM3R.js";import"./index-C60KcMMw.js";const Ne=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$=se("settings",Ne);var O="Popover",[G]=te(O,[W]),N=W(),[Pe,g]=G(O),K=n=>{const{__scopePopover:t,children:r,open:s,defaultOpen:l,onOpenChange:i,modal:c=!1}=n,x=N(t),h=p.useRef(null),[v,P]=p.useState(!1),[C,u]=fe({prop:s,defaultProp:l??!1,onChange:i,caller:O});return e.jsx(le,{...x,children:e.jsx(Pe,{scope:t,contentId:ue(),triggerRef:h,open:C,onOpenChange:u,onOpenToggle:p.useCallback(()=>u(E=>!E),[u]),hasCustomAnchor:v,onCustomAnchorAdd:p.useCallback(()=>P(!0),[]),onCustomAnchorRemove:p.useCallback(()=>P(!1),[]),modal:c,children:r})})};K.displayName=O;var V="PopoverAnchor",Z=p.forwardRef((n,t)=>{const{__scopePopover:r,...s}=n,l=g(V,r),i=N(r),{onCustomAnchorAdd:c,onCustomAnchorRemove:x}=l;return p.useEffect(()=>(c(),()=>x()),[c,x]),e.jsx(L,{...i,...s,ref:t})});Z.displayName=V;var q="PopoverTrigger",J=p.forwardRef((n,t)=>{const{__scopePopover:r,...s}=n,l=g(q,r),i=N(r),c=M(t,l.triggerRef),x=e.jsx(H.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":oe(l.open),...s,ref:c,onClick:j(n.onClick,l.onOpenToggle)});return l.hasCustomAnchor?x:e.jsx(L,{asChild:!0,...i,children:x})});J.displayName=q;var _="PopoverPortal",[Ce,ye]=G(_,{forceMount:void 0}),Q=n=>{const{__scopePopover:t,forceMount:r,children:s,container:l}=n,i=g(_,t);return e.jsx(Ce,{scope:t,forceMount:r,children:e.jsx(F,{present:r||i.open,children:e.jsx(ie,{asChild:!0,container:l,children:s})})})};Q.displayName=_;var f="PopoverContent",X=p.forwardRef((n,t)=>{const r=ye(f,n.__scopePopover),{forceMount:s=r.forceMount,...l}=n,i=g(f,n.__scopePopover);return e.jsx(F,{present:s||i.open,children:i.modal?e.jsx(be,{...l,ref:t}):e.jsx(De,{...l,ref:t})})});X.displayName=f;var Be=ae("PopoverContent.RemoveScroll"),be=p.forwardRef((n,t)=>{const r=g(f,n.__scopePopover),s=p.useRef(null),l=M(t,s),i=p.useRef(!1);return p.useEffect(()=>{const c=s.current;if(c)return ce(c)},[]),e.jsx(de,{as:Be,allowPinchZoom:!0,children:e.jsx(Y,{...n,ref:l,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:j(n.onCloseAutoFocus,c=>{c.preventDefault(),i.current||r.triggerRef.current?.focus()}),onPointerDownOutside:j(n.onPointerDownOutside,c=>{const x=c.detail.originalEvent,h=x.button===0&&x.ctrlKey===!0,v=x.button===2||h;i.current=v},{checkForDefaultPrevented:!1}),onFocusOutside:j(n.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1})})})}),De=p.forwardRef((n,t)=>{const r=g(f,n.__scopePopover),s=p.useRef(!1),l=p.useRef(!1);return e.jsx(Y,{...n,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{n.onCloseAutoFocus?.(i),i.defaultPrevented||(s.current||r.triggerRef.current?.focus(),i.preventDefault()),s.current=!1,l.current=!1},onInteractOutside:i=>{n.onInteractOutside?.(i),i.defaultPrevented||(s.current=!0,i.detail.originalEvent.type==="pointerdown"&&(l.current=!0));const c=i.target;r.triggerRef.current?.contains(c)&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&l.current&&i.preventDefault()}})}),Y=p.forwardRef((n,t)=>{const{__scopePopover:r,trapFocus:s,onOpenAutoFocus:l,onCloseAutoFocus:i,disableOutsidePointerEvents:c,onEscapeKeyDown:x,onPointerDownOutside:h,onFocusOutside:v,onInteractOutside:P,...C}=n,u=g(f,r),E=N(r);return pe(),e.jsx(xe,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:l,onUnmountAutoFocus:i,children:e.jsx(me,{asChild:!0,disableOutsidePointerEvents:c,onInteractOutside:P,onEscapeKeyDown:x,onPointerDownOutside:h,onFocusOutside:v,onDismiss:()=>u.onOpenChange(!1),children:e.jsx(ge,{"data-state":oe(u.open),role:"dialog",id:u.contentId,...E,...C,ref:t,style:{...C.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),ee="PopoverClose",Te=p.forwardRef((n,t)=>{const{__scopePopover:r,...s}=n,l=g(ee,r);return e.jsx(H.button,{type:"button",...s,ref:t,onClick:j(n.onClick,()=>l.onOpenChange(!1))})});Te.displayName=ee;var Ae="PopoverArrow",we=p.forwardRef((n,t)=>{const{__scopePopover:r,...s}=n,l=N(r);return e.jsx(he,{...l,...s,ref:t})});we.displayName=Ae;function oe(n){return n?"open":"closed"}var Se=K,Re=Z,ke=J,Oe=Q,Ee=X;const ne=n=>e.jsx(Se,{...n}),Ie=n=>e.jsx(ke,{...n}),_e=n=>{const{className:t,align:r="center",sideOffset:s=4,container:l,collisionBoundary:i=[],...c}=n,{collisionBoundary:x,container:h,collisionPadding:v}=ve({collisionBoundary:i,container:l});return e.jsx(Oe,{container:h,children:e.jsx(Ee,{className:re("w-full min-w-72 p-4","origin-(--radix-popover-content-transform-origin) rounded-md border border-gray-50 bg-white shadow-md outline-none","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",t),align:r,sideOffset:s,collisionBoundary:x,collisionPadding:v,...c})})},ze=n=>e.jsx(Re,{...n}),o=Object.assign(ne,{Trigger:Ie,Content:_e,Anchor:ze});ne.__docgenInfo={description:"",methods:[],displayName:"PopoverRoot"};const oo={title:"Shared/UI/Popover",component:o,parameters:{layout:"centered",docs:{description:{component:`
### 팝오버 컴포넌트

Popover 컴포넌트는 트리거 요소 근처에 표시되는 작은 오버레이입니다.
Radix UI의 Popover 프리미티브를 기반으로 구축되었으며, 접근성과 키보드 네비게이션을 완벽하게 지원합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Popover\`, \`Popover.Trigger\`, \`Popover.Content\`, \`Popover.Anchor\`로 구성
- **위치 조정**: \`side\`와 \`align\` prop을 통해 팝오버 위치 제어
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 완벽 지원
- **충돌 감지**: 화면 경계나 다른 요소와의 충돌 시 자동으로 위치 조정
- **Dialog 내부 사용**: Dialog 내부에서 사용 시 collisionBoundary를 자동으로 DialogBody로 제한
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<Popover>
  <Popover.Trigger asChild>
    <Button>팝오버 열기</Button>
  </Popover.Trigger>
  <Popover.Content>
    <p>팝오버 내용</p>
  </Popover.Content>
</Popover>
\`\`\`
        `}}},tags:["autodocs"]},y={render:()=>e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"팝오버 열기"})}),e.jsx(o.Content,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-semibold",children:"팝오버 제목"}),e.jsx("p",{className:"text-sm text-gray-600",children:"이것은 기본 팝오버입니다."})]})})]})},B={render:()=>e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"상세 정보 보기"})}),e.jsx(o.Content,{className:"w-80",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(U,{className:"size-5 text-blue-500"}),e.jsx("h4",{className:"font-semibold",children:"정보 팝오버"})]}),e.jsx("p",{className:"text-sm text-gray-600",children:"이 팝오버는 더 많은 정보를 표시할 수 있습니다. 여러 줄의 텍스트와 아이콘을 포함할 수 있습니다."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{size:"sm",variant:"filled",color:"primary",children:"확인"}),e.jsx(a,{size:"sm",variant:"outlined",color:"secondary",children:"취소"})]})]})})]})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Side 위치"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"위 (top)"})}),e.jsx(o.Content,{side:"top",children:e.jsx("p",{className:"text-sm",children:"위쪽에 표시되는 팝오버"})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"오른쪽 (right)"})}),e.jsx(o.Content,{side:"right",children:e.jsx("p",{className:"text-sm",children:"오른쪽에 표시되는 팝오버"})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"아래 (bottom)"})}),e.jsx(o.Content,{side:"bottom",children:e.jsx("p",{className:"text-sm",children:"아래쪽에 표시되는 팝오버"})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"왼쪽 (left)"})}),e.jsx(o.Content,{side:"left",children:e.jsx("p",{className:"text-sm",children:"왼쪽에 표시되는 팝오버"})})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Align 정렬"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-8",children:[e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"시작 (start)"})}),e.jsx(o.Content,{side:"bottom",align:"start",children:e.jsx("p",{className:"text-sm",children:"시작 정렬"})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"중앙 (center)"})}),e.jsx(o.Content,{side:"bottom",align:"center",children:e.jsx("p",{className:"text-sm",children:"중앙 정렬"})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"끝 (end)"})}),e.jsx(o.Content,{side:"bottom",align:"end",children:e.jsx("p",{className:"text-sm",children:"끝 정렬"})})]})]})]})]})},D={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Anchor를 사용한 팝오버"}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"트리거 버튼"})}),e.jsx(o.Anchor,{asChild:!0,children:e.jsx("div",{className:"rounded-md border-2 border-dashed border-blue-300 p-4",children:e.jsx("p",{className:"text-sm text-gray-600",children:"이 영역이 Anchor입니다"})})}),e.jsx(o.Content,{children:e.jsx("p",{className:"text-sm",children:"이 팝오버는 Anchor 영역을 기준으로 위치가 결정됩니다."})})]})})]})},T={parameters:{docs:{description:{story:`
Dialog 내부에서 Popover를 사용할 때, PopoverContent는 자동으로 DialogBody를 collisionBoundary로 인식합니다.
이를 통해 Popover가 Dialog 영역을 벗어나지 않도록 합니다.

**자동 collisionBoundary 감지**: PopoverContent가 렌더링된 가장 가까운 부모에서 \`data-slot="dialog-body"\`를 가진 요소를 찾아 collisionBoundary로 설정합니다.
        `}}},render:()=>{const n=()=>{z.open(t=>e.jsx(d,{overlayControl:t,children:e.jsxs(d.Content,{className:"h-[500px] w-[600px]",children:[e.jsxs(d.Header,{children:[e.jsx(d.Title,{children:"Dialog 내부의 Popover"}),e.jsx(d.Description,{children:"이 Dialog 내부에서 Popover를 사용하면 자동으로 DialogBody를 collisionBoundary로 인식합니다."})]}),e.jsx(d.Body,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-gray-700",children:"아래 버튼을 클릭하면 Popover가 열립니다. Popover는 DialogBody 영역을 벗어나지 않습니다."}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"팝오버 열기 (위)"})}),e.jsx(o.Content,{side:"top",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-semibold",children:"Dialog 내부 팝오버"}),e.jsx("p",{className:"text-sm text-gray-600",children:"이 팝오버는 DialogBody 영역을 벗어나지 않습니다."})]})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"팝오버 열기 (아래)"})}),e.jsx(o.Content,{side:"bottom",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-semibold",children:"Dialog 내부 팝오버"}),e.jsx("p",{className:"text-sm text-gray-600",children:"이 팝오버는 DialogBody 영역을 벗어나지 않습니다."})]})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700",children:"옵션 선택"}),e.jsxs(m,{children:[e.jsx(m.Trigger,{className:"w-[200px]",placeholder:"옵션을 선택하세요"}),e.jsxs(m.Content,{children:[e.jsx(m.Item,{value:"option1",children:"옵션 1"}),e.jsx(m.Item,{value:"option2",children:"옵션 2"}),e.jsx(m.Item,{value:"option3",children:"옵션 3"}),e.jsx(m.Item,{value:"option4",children:"옵션 4"}),e.jsx(m.Item,{value:"option5",children:"옵션 5"})]})]})]}),e.jsxs("div",{className:"mt-8 flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"스크롤을 내려서 더 많은 내용을 확인해보세요."}),Array.from({length:20}).map((r,s)=>e.jsxs("p",{className:"text-sm text-gray-500",children:["추가 콘텐츠 ",s+1]},s))]})]})}),e.jsxs(d.Footer,{children:[e.jsx(d.CancelButton,{children:"취소"}),e.jsx(d.Close,{children:e.jsx(d.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(a,{onClick:n,children:"Dialog 열기"})}},A={parameters:{docs:{description:{story:`
Dialog 내부에서 Popover의 콘텐츠가 매우 길 때의 동작을 확인할 수 있습니다.
Popover는 DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정하며, 필요시 스크롤이 가능합니다.

**주요 동작**:
- Popover의 높이가 DialogBody를 초과하면 자동으로 위치 조정
- Popover 내부에 스크롤이 필요한 경우 자동으로 처리
- collisionBoundary가 DialogBody로 설정되어 Dialog 영역을 벗어나지 않음
        `}}},render:()=>{const n=()=>{z.open(t=>e.jsx(d,{overlayControl:t,children:e.jsxs(d.Content,{className:"h-[500px] w-[600px]",children:[e.jsxs(d.Header,{children:[e.jsx(d.Title,{children:"긴 콘텐츠가 있는 Popover"}),e.jsx(d.Description,{children:"Dialog 내부에서 Popover의 콘텐츠가 매우 길 때 어떻게 동작하는지 확인할 수 있습니다."})]}),e.jsx(d.Body,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-gray-700",children:"아래 버튼을 클릭하면 매우 긴 콘텐츠를 가진 Popover가 열립니다. Popover는 DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정합니다."}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"긴 콘텐츠 팝오버 (위)"})}),e.jsx(o.Content,{side:"top",className:"max-h-[400px] w-80",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"font-semibold",children:"매우 긴 콘텐츠"}),e.jsx("div",{className:"flex flex-col gap-2 overflow-y-auto",children:Array.from({length:50}).map((r,s)=>e.jsxs("div",{className:"rounded border border-gray-200 p-2",children:[e.jsxs("p",{className:"text-sm font-medium",children:["항목 ",s+1]}),e.jsx("p",{className:"text-xs text-gray-600",children:"이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면 자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다."})]},s))}),e.jsxs("div",{className:"flex gap-2 border-t border-gray-200 pt-2",children:[e.jsx(a,{size:"sm",variant:"filled",color:"primary",className:"flex-1",children:"확인"}),e.jsx(a,{size:"sm",variant:"outlined",color:"secondary",className:"flex-1",children:"취소"})]})]})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"긴 콘텐츠 팝오버 (아래)"})}),e.jsx(o.Content,{side:"bottom",className:"max-h-[400px] w-80",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"font-semibold",children:"매우 긴 콘텐츠"}),e.jsx("div",{className:"flex flex-col gap-2 overflow-y-auto",children:Array.from({length:50}).map((r,s)=>e.jsxs("div",{className:"rounded border border-gray-200 p-2",children:[e.jsxs("p",{className:"text-sm font-medium",children:["항목 ",s+1]}),e.jsx("p",{className:"text-xs text-gray-600",children:"이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면 자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다."})]},s))}),e.jsxs("div",{className:"flex gap-2 border-t border-gray-200 pt-2",children:[e.jsx(a,{size:"sm",variant:"filled",color:"primary",className:"flex-1",children:"확인"}),e.jsx(a,{size:"sm",variant:"outlined",color:"secondary",className:"flex-1",children:"취소"})]})]})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"긴 콘텐츠 팝오버 (오른쪽)"})}),e.jsx(o.Content,{side:"right",className:"max-h-[400px] w-80",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"font-semibold",children:"매우 긴 콘텐츠"}),e.jsx("div",{className:"flex flex-col gap-2 overflow-y-auto",children:Array.from({length:50}).map((r,s)=>e.jsxs("div",{className:"rounded border border-gray-200 p-2",children:[e.jsxs("p",{className:"text-sm font-medium",children:["항목 ",s+1]}),e.jsx("p",{className:"text-xs text-gray-600",children:"이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면 자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다."})]},s))}),e.jsxs("div",{className:"flex gap-2 border-t border-gray-200 pt-2",children:[e.jsx(a,{size:"sm",variant:"filled",color:"primary",className:"flex-1",children:"확인"}),e.jsx(a,{size:"sm",variant:"outlined",color:"secondary",className:"flex-1",children:"취소"})]})]})})]})]}),e.jsxs("div",{className:"mt-4 flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700",children:"DialogBody 내부 콘텐츠"}),e.jsx("p",{className:"text-sm text-gray-600",children:"DialogBody 내부에 충분한 콘텐츠가 있어도 Popover는 영역을 벗어나지 않습니다."}),Array.from({length:10}).map((r,s)=>e.jsxs("p",{className:"text-sm text-gray-500",children:["추가 콘텐츠 ",s+1," - DialogBody 내부의 스크롤 가능한 영역입니다."]},s))]})]})}),e.jsxs(d.Footer,{children:[e.jsx(d.CancelButton,{children:"취소"}),e.jsx(d.Close,{children:e.jsx(d.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(a,{onClick:n,children:"Dialog 열기 (긴 콘텐츠 Popover)"})}},w={render:()=>{const n=()=>{const[t,r]=k.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(o,{open:t,onOpenChange:r,children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"제어된 팝오버"})}),e.jsx(o.Content,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-semibold",children:"제어 컴포넌트"}),e.jsx("p",{className:"text-sm text-gray-600",children:"이 팝오버는 외부에서 상태를 제어할 수 있습니다."}),e.jsx(a,{size:"sm",onClick:()=>r(!1),children:"닫기"})]})})]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["열림 상태: ",t?"열림":"닫힘"]})]})};return e.jsx(n,{})}},S={render:()=>{const[n,t]=k.useState(!1),[r,s]=k.useState(!0),[l,i]=k.useState(!1);return e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(a,{children:"설정 열기"})}),e.jsx(o.Content,{className:"w-80",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx($,{className:"size-5 text-gray-500"}),e.jsx("h4",{className:"font-semibold",children:"설정"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"알림 받기"}),e.jsx(I,{checked:n,onCheckedChange:c=>t(c===!0)})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"이메일 알림"}),e.jsx(I,{checked:r,onCheckedChange:c=>s(c===!0)})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:"푸시 알림"}),e.jsx(I,{checked:l,onCheckedChange:c=>i(c===!0)})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{size:"sm",variant:"filled",color:"primary",className:"flex-1",children:"저장"}),e.jsx(a,{size:"sm",variant:"outlined",color:"secondary",className:"flex-1",children:"취소"})]})]})})]})}},R={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"여러 개의 팝오버"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsxs(a,{variant:"outlined",color:"primary",children:[e.jsx(je,{className:"size-4"}),"사용자 정보"]})}),e.jsx(o.Content,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-semibold",children:"사용자 정보"}),e.jsx("p",{className:"text-sm text-gray-600",children:"이름: 홍길동"}),e.jsx("p",{className:"text-sm text-gray-600",children:"이메일: hong@example.com"})]})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsxs(a,{variant:"outlined",color:"secondary",children:[e.jsx($,{className:"size-4"}),"설정"]})}),e.jsx(o.Content,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-semibold",children:"설정"}),e.jsx("p",{className:"text-sm text-gray-600",children:"다양한 설정 옵션을 확인할 수 있습니다."})]})})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsxs(a,{variant:"outlined",color:"success",children:[e.jsx(U,{className:"size-4"}),"정보"]})}),e.jsx(o.Content,{children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"font-semibold",children:"정보"}),e.jsx("p",{className:"text-sm text-gray-600",children:"추가 정보를 확인할 수 있습니다."})]})})]})]})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <Popover.Trigger asChild>
        <Button>팝오버 열기</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">팝오버 제목</h4>
          <p className="text-sm text-gray-600">이것은 기본 팝오버입니다.</p>
        </div>
      </Popover.Content>
    </Popover>
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <Popover.Trigger asChild>
        <Button>상세 정보 보기</Button>
      </Popover.Trigger>
      <Popover.Content className="w-80">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <InfoIcon className="size-5 text-blue-500" />
            <h4 className="font-semibold">정보 팝오버</h4>
          </div>
          <p className="text-sm text-gray-600">
            이 팝오버는 더 많은 정보를 표시할 수 있습니다. 여러 줄의 텍스트와 아이콘을 포함할 수
            있습니다.
          </p>
          <div className="flex gap-2">
            <Button size="sm" variant="filled" color="primary">
              확인
            </Button>
            <Button size="sm" variant="outlined" color="secondary">
              취소
            </Button>
          </div>
        </div>
      </Popover.Content>
    </Popover>
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-700">Side 위치</h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Popover>
            <Popover.Trigger asChild>
              <Button>위 (top)</Button>
            </Popover.Trigger>
            <Popover.Content side="top">
              <p className="text-sm">위쪽에 표시되는 팝오버</p>
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Trigger asChild>
              <Button>오른쪽 (right)</Button>
            </Popover.Trigger>
            <Popover.Content side="right">
              <p className="text-sm">오른쪽에 표시되는 팝오버</p>
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Trigger asChild>
              <Button>아래 (bottom)</Button>
            </Popover.Trigger>
            <Popover.Content side="bottom">
              <p className="text-sm">아래쪽에 표시되는 팝오버</p>
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Trigger asChild>
              <Button>왼쪽 (left)</Button>
            </Popover.Trigger>
            <Popover.Content side="left">
              <p className="text-sm">왼쪽에 표시되는 팝오버</p>
            </Popover.Content>
          </Popover>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-700">Align 정렬</h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Popover>
            <Popover.Trigger asChild>
              <Button>시작 (start)</Button>
            </Popover.Trigger>
            <Popover.Content side="bottom" align="start">
              <p className="text-sm">시작 정렬</p>
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Trigger asChild>
              <Button>중앙 (center)</Button>
            </Popover.Trigger>
            <Popover.Content side="bottom" align="center">
              <p className="text-sm">중앙 정렬</p>
            </Popover.Content>
          </Popover>
          <Popover>
            <Popover.Trigger asChild>
              <Button>끝 (end)</Button>
            </Popover.Trigger>
            <Popover.Content side="bottom" align="end">
              <p className="text-sm">끝 정렬</p>
            </Popover.Content>
          </Popover>
        </div>
      </div>
    </div>
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-gray-700">Anchor를 사용한 팝오버</h3>
      <div className="flex items-center gap-4">
        <Popover>
          <Popover.Trigger asChild>
            <Button>트리거 버튼</Button>
          </Popover.Trigger>
          <Popover.Anchor asChild>
            <div className="rounded-md border-2 border-dashed border-blue-300 p-4">
              <p className="text-sm text-gray-600">이 영역이 Anchor입니다</p>
            </div>
          </Popover.Anchor>
          <Popover.Content>
            <p className="text-sm">이 팝오버는 Anchor 영역을 기준으로 위치가 결정됩니다.</p>
          </Popover.Content>
        </Popover>
      </div>
    </div>
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Dialog 내부에서 Popover를 사용할 때, PopoverContent는 자동으로 DialogBody를 collisionBoundary로 인식합니다.
이를 통해 Popover가 Dialog 영역을 벗어나지 않도록 합니다.

**자동 collisionBoundary 감지**: PopoverContent가 렌더링된 가장 가까운 부모에서 \\\`data-slot="dialog-body"\\\`를 가진 요소를 찾아 collisionBoundary로 설정합니다.
        \`
      }
    }
  },
  render: () => {
    const handleOpen = () => {
      overlay.open(overlayControl => <Dialog overlayControl={overlayControl}>
          <Dialog.Content className="h-[500px] w-[600px]">
            <Dialog.Header>
              <Dialog.Title>Dialog 내부의 Popover</Dialog.Title>
              <Dialog.Description>
                이 Dialog 내부에서 Popover를 사용하면 자동으로 DialogBody를 collisionBoundary로
                인식합니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <div className="flex flex-col gap-4">
                <p className="text-gray-700">
                  아래 버튼을 클릭하면 Popover가 열립니다. Popover는 DialogBody 영역을 벗어나지
                  않습니다.
                </p>
                <div className="flex gap-4">
                  <Popover>
                    <Popover.Trigger asChild>
                      <Button>팝오버 열기 (위)</Button>
                    </Popover.Trigger>
                    <Popover.Content side="top">
                      <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">Dialog 내부 팝오버</h4>
                        <p className="text-sm text-gray-600">
                          이 팝오버는 DialogBody 영역을 벗어나지 않습니다.
                        </p>
                      </div>
                    </Popover.Content>
                  </Popover>
                  <Popover>
                    <Popover.Trigger asChild>
                      <Button>팝오버 열기 (아래)</Button>
                    </Popover.Trigger>
                    <Popover.Content side="bottom">
                      <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">Dialog 내부 팝오버</h4>
                        <p className="text-sm text-gray-600">
                          이 팝오버는 DialogBody 영역을 벗어나지 않습니다.
                        </p>
                      </div>
                    </Popover.Content>
                  </Popover>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-gray-700">옵션 선택</p>
                  <Select>
                    <Select.Trigger className="w-[200px]" placeholder="옵션을 선택하세요" />
                    <Select.Content>
                      <Select.Item value="option1">옵션 1</Select.Item>
                      <Select.Item value="option2">옵션 2</Select.Item>
                      <Select.Item value="option3">옵션 3</Select.Item>
                      <Select.Item value="option4">옵션 4</Select.Item>
                      <Select.Item value="option5">옵션 5</Select.Item>
                    </Select.Content>
                  </Select>
                </div>
                <div className="mt-8 flex flex-col gap-2">
                  <p className="text-sm text-gray-600">
                    스크롤을 내려서 더 많은 내용을 확인해보세요.
                  </p>
                  {Array.from({
                  length: 20
                }).map((_, i) => <p key={i} className="text-sm text-gray-500">
                      추가 콘텐츠 {i + 1}
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
}`,...T.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Dialog 내부에서 Popover의 콘텐츠가 매우 길 때의 동작을 확인할 수 있습니다.
Popover는 DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정하며, 필요시 스크롤이 가능합니다.

**주요 동작**:
- Popover의 높이가 DialogBody를 초과하면 자동으로 위치 조정
- Popover 내부에 스크롤이 필요한 경우 자동으로 처리
- collisionBoundary가 DialogBody로 설정되어 Dialog 영역을 벗어나지 않음
        \`
      }
    }
  },
  render: () => {
    const handleOpen = () => {
      overlay.open(overlayControl => <Dialog overlayControl={overlayControl}>
          <Dialog.Content className="h-[500px] w-[600px]">
            <Dialog.Header>
              <Dialog.Title>긴 콘텐츠가 있는 Popover</Dialog.Title>
              <Dialog.Description>
                Dialog 내부에서 Popover의 콘텐츠가 매우 길 때 어떻게 동작하는지 확인할 수 있습니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <div className="flex flex-col gap-4">
                <p className="text-gray-700">
                  아래 버튼을 클릭하면 매우 긴 콘텐츠를 가진 Popover가 열립니다. Popover는
                  DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정합니다.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Popover>
                    <Popover.Trigger asChild>
                      <Button>긴 콘텐츠 팝오버 (위)</Button>
                    </Popover.Trigger>
                    <Popover.Content side="top" className="max-h-[400px] w-80">
                      <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">매우 긴 콘텐츠</h4>
                        <div className="flex flex-col gap-2 overflow-y-auto">
                          {Array.from({
                          length: 50
                        }).map((_, i) => <div key={i} className="rounded border border-gray-200 p-2">
                              <p className="text-sm font-medium">항목 {i + 1}</p>
                              <p className="text-xs text-gray-600">
                                이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면
                                자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다.
                              </p>
                            </div>)}
                        </div>
                        <div className="flex gap-2 border-t border-gray-200 pt-2">
                          <Button size="sm" variant="filled" color="primary" className="flex-1">
                            확인
                          </Button>
                          <Button size="sm" variant="outlined" color="secondary" className="flex-1">
                            취소
                          </Button>
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover>
                  <Popover>
                    <Popover.Trigger asChild>
                      <Button>긴 콘텐츠 팝오버 (아래)</Button>
                    </Popover.Trigger>
                    <Popover.Content side="bottom" className="max-h-[400px] w-80">
                      <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">매우 긴 콘텐츠</h4>
                        <div className="flex flex-col gap-2 overflow-y-auto">
                          {Array.from({
                          length: 50
                        }).map((_, i) => <div key={i} className="rounded border border-gray-200 p-2">
                              <p className="text-sm font-medium">항목 {i + 1}</p>
                              <p className="text-xs text-gray-600">
                                이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면
                                자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다.
                              </p>
                            </div>)}
                        </div>
                        <div className="flex gap-2 border-t border-gray-200 pt-2">
                          <Button size="sm" variant="filled" color="primary" className="flex-1">
                            확인
                          </Button>
                          <Button size="sm" variant="outlined" color="secondary" className="flex-1">
                            취소
                          </Button>
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover>
                  <Popover>
                    <Popover.Trigger asChild>
                      <Button>긴 콘텐츠 팝오버 (오른쪽)</Button>
                    </Popover.Trigger>
                    <Popover.Content side="right" className="max-h-[400px] w-80">
                      <div className="flex flex-col gap-3">
                        <h4 className="font-semibold">매우 긴 콘텐츠</h4>
                        <div className="flex flex-col gap-2 overflow-y-auto">
                          {Array.from({
                          length: 50
                        }).map((_, i) => <div key={i} className="rounded border border-gray-200 p-2">
                              <p className="text-sm font-medium">항목 {i + 1}</p>
                              <p className="text-xs text-gray-600">
                                이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면
                                자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다.
                              </p>
                            </div>)}
                        </div>
                        <div className="flex gap-2 border-t border-gray-200 pt-2">
                          <Button size="sm" variant="filled" color="primary" className="flex-1">
                            확인
                          </Button>
                          <Button size="sm" variant="outlined" color="secondary" className="flex-1">
                            취소
                          </Button>
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-sm font-medium text-gray-700">DialogBody 내부 콘텐츠</p>
                  <p className="text-sm text-gray-600">
                    DialogBody 내부에 충분한 콘텐츠가 있어도 Popover는 영역을 벗어나지 않습니다.
                  </p>
                  {Array.from({
                  length: 10
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
    return <Button onClick={handleOpen}>Dialog 열기 (긴 콘텐츠 Popover)</Button>;
  }
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledPopover = () => {
      const [open, setOpen] = React.useState(false);
      return <div className="flex flex-col gap-4">
          <Popover open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
              <Button>제어된 팝오버</Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">제어 컴포넌트</h4>
                <p className="text-sm text-gray-600">
                  이 팝오버는 외부에서 상태를 제어할 수 있습니다.
                </p>
                <Button size="sm" onClick={() => setOpen(false)}>
                  닫기
                </Button>
              </div>
            </Popover.Content>
          </Popover>
          <p className="text-sm text-gray-600">열림 상태: {open ? '열림' : '닫힘'}</p>
        </div>;
    };
    return <ControlledPopover />;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notificationEnabled, setNotificationEnabled] = React.useState(false);
    const [emailEnabled, setEmailEnabled] = React.useState(true);
    const [pushEnabled, setPushEnabled] = React.useState(false);
    return <Popover>
        <Popover.Trigger asChild>
          <Button>설정 열기</Button>
        </Popover.Trigger>
        <Popover.Content className="w-80">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <SettingsIcon className="size-5 text-gray-500" />
              <h4 className="font-semibold">설정</h4>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">알림 받기</span>
                <Checkbox checked={notificationEnabled} onCheckedChange={checked => setNotificationEnabled(checked === true)} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">이메일 알림</span>
                <Checkbox checked={emailEnabled} onCheckedChange={checked => setEmailEnabled(checked === true)} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">푸시 알림</span>
                <Checkbox checked={pushEnabled} onCheckedChange={checked => setPushEnabled(checked === true)} />
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="filled" color="primary" className="flex-1">
                저장
              </Button>
              <Button size="sm" variant="outlined" color="secondary" className="flex-1">
                취소
              </Button>
            </div>
          </div>
        </Popover.Content>
      </Popover>;
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <h3 className="text-sm font-semibold text-gray-700">여러 개의 팝오버</h3>
      <div className="flex flex-wrap gap-4">
        <Popover>
          <Popover.Trigger asChild>
            <Button variant="outlined" color="primary">
              <UserIcon className="size-4" />
              사용자 정보
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">사용자 정보</h4>
              <p className="text-sm text-gray-600">이름: 홍길동</p>
              <p className="text-sm text-gray-600">이메일: hong@example.com</p>
            </div>
          </Popover.Content>
        </Popover>
        <Popover>
          <Popover.Trigger asChild>
            <Button variant="outlined" color="secondary">
              <SettingsIcon className="size-4" />
              설정
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">설정</h4>
              <p className="text-sm text-gray-600">다양한 설정 옵션을 확인할 수 있습니다.</p>
            </div>
          </Popover.Content>
        </Popover>
        <Popover>
          <Popover.Trigger asChild>
            <Button variant="outlined" color="success">
              <InfoIcon className="size-4" />
              정보
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">정보</h4>
              <p className="text-sm text-gray-600">추가 정보를 확인할 수 있습니다.</p>
            </div>
          </Popover.Content>
        </Popover>
      </div>
    </div>
}`,...R.parameters?.docs?.source}}};const no=["Basic","WithRichContent","Positions","WithAnchor","InDialog","InDialogWithLongContent","Controlled","WithForm","MultiplePopovers"];export{y as Basic,w as Controlled,T as InDialog,A as InDialogWithLongContent,R as MultiplePopovers,b as Positions,D as WithAnchor,S as WithForm,B as WithRichContent,no as __namedExportsOrder,oo as default};
