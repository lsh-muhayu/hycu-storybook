import{r as i,j as e,i as ce,H as w}from"./iframe-cNVH801X.js";import{B as y,b as de}from"./Button-CLmonkht.js";import{c as ge,P as j,a as F,b as C,d as L,e as ue,f as pe}from"./index-DwwV-E6Y.js";import{P as me,u as _,h as xe,R as he,a as fe,F as De,D as ye,S as m}from"./Select-DO6MBAXT.js";import{u as Ce}from"./index-B_aPM4OS.js";import{u as je,C as W}from"./Checkbox-DQ74LFzc.js";import{S as ve}from"./ScrollArea-Csc81wI0.js";import{c as h}from"./cn-CPGtsWvz.js";import{c as Ne}from"./createLucideIcon-DMz69kdg.js";import{L as x}from"./Label-DpMYZbel.js";import{I as S}from"./Input-oz5DgXgw.js";import{T as be}from"./Textarea-H_O5j-wN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOOMdwi9.js";import"./index-D8NspOX2.js";import"./index-CR5NvENJ.js";const Be=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Te=Ne("x",Be);var I="Dialog",[z]=ge(I),[Pe,p]=z(I),q=o=>{const{__scopeDialog:n,children:t,open:a,defaultOpen:s,onOpenChange:l,modal:d=!0}=o,c=i.useRef(null),g=i.useRef(null),[u,f]=Ce({prop:a,defaultProp:s??!1,onChange:l,caller:I});return e.jsx(Pe,{scope:n,triggerRef:c,contentRef:g,contentId:_(),titleId:_(),descriptionId:_(),open:u,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(v=>!v),[f]),modal:d,children:t})};q.displayName=I;var G="DialogTrigger",K=i.forwardRef((o,n)=>{const{__scopeDialog:t,...a}=o,s=p(G,t),l=L(n,s.triggerRef);return e.jsx(j.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":H(s.open),...a,ref:l,onClick:C(o.onClick,s.onOpenToggle)})});K.displayName=G;var k="DialogPortal",[Re,U]=z(k,{forceMount:void 0}),V=o=>{const{__scopeDialog:n,forceMount:t,children:a,container:s}=o,l=p(k,n);return e.jsx(Re,{scope:n,forceMount:t,children:i.Children.map(a,d=>e.jsx(F,{present:t||l.open,children:e.jsx(me,{asChild:!0,container:s,children:d})}))})};V.displayName=k;var O="DialogOverlay",Z=i.forwardRef((o,n)=>{const t=U(O,o.__scopeDialog),{forceMount:a=t.forceMount,...s}=o,l=p(O,o.__scopeDialog);return l.modal?e.jsx(F,{present:a||l.open,children:e.jsx(we,{...s,ref:n})}):null});Z.displayName=O;var Oe=ue("DialogOverlay.RemoveScroll"),we=i.forwardRef((o,n)=>{const{__scopeDialog:t,...a}=o,s=p(O,t);return e.jsx(he,{as:Oe,allowPinchZoom:!0,shards:[s.contentRef],children:e.jsx(j.div,{"data-state":H(s.open),...a,ref:n,style:{pointerEvents:"auto",...a.style}})})}),D="DialogContent",Y=i.forwardRef((o,n)=>{const t=U(D,o.__scopeDialog),{forceMount:a=t.forceMount,...s}=o,l=p(D,o.__scopeDialog);return e.jsx(F,{present:a||l.open,children:l.modal?e.jsx(Ie,{...s,ref:n}):e.jsx(_e,{...s,ref:n})})});Y.displayName=D;var Ie=i.forwardRef((o,n)=>{const t=p(D,o.__scopeDialog),a=i.useRef(null),s=L(n,t.contentRef,a);return i.useEffect(()=>{const l=a.current;if(l)return xe(l)},[]),e.jsx(X,{...o,ref:s,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:C(o.onCloseAutoFocus,l=>{l.preventDefault(),t.triggerRef.current?.focus()}),onPointerDownOutside:C(o.onPointerDownOutside,l=>{const d=l.detail.originalEvent,c=d.button===0&&d.ctrlKey===!0;(d.button===2||c)&&l.preventDefault()}),onFocusOutside:C(o.onFocusOutside,l=>l.preventDefault())})}),_e=i.forwardRef((o,n)=>{const t=p(D,o.__scopeDialog),a=i.useRef(!1),s=i.useRef(!1);return e.jsx(X,{...o,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{o.onCloseAutoFocus?.(l),l.defaultPrevented||(a.current||t.triggerRef.current?.focus(),l.preventDefault()),a.current=!1,s.current=!1},onInteractOutside:l=>{o.onInteractOutside?.(l),l.defaultPrevented||(a.current=!0,l.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const d=l.target;t.triggerRef.current?.contains(d)&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&s.current&&l.preventDefault()}})}),X=i.forwardRef((o,n)=>{const{__scopeDialog:t,trapFocus:a,onOpenAutoFocus:s,onCloseAutoFocus:l,...d}=o,c=p(D,t),g=i.useRef(null),u=L(n,g);return fe(),e.jsxs(e.Fragment,{children:[e.jsx(De,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:s,onUnmountAutoFocus:l,children:e.jsx(ye,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":H(c.open),...d,ref:u,onDismiss:()=>c.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(Se,{titleId:c.titleId}),e.jsx(Fe,{contentRef:g,descriptionId:c.descriptionId})]})]})}),A="DialogTitle",J=i.forwardRef((o,n)=>{const{__scopeDialog:t,...a}=o,s=p(A,t);return e.jsx(j.h2,{id:s.titleId,...a,ref:n})});J.displayName=A;var Q="DialogDescription",ee=i.forwardRef((o,n)=>{const{__scopeDialog:t,...a}=o,s=p(Q,t);return e.jsx(j.p,{id:s.descriptionId,...a,ref:n})});ee.displayName=Q;var oe="DialogClose",ne=i.forwardRef((o,n)=>{const{__scopeDialog:t,...a}=o,s=p(oe,t);return e.jsx(j.button,{type:"button",...a,ref:n,onClick:C(o.onClick,()=>s.onOpenChange(!1))})});ne.displayName=oe;function H(o){return o?"open":"closed"}var te="DialogTitleWarning",[yo,re]=pe(te,{contentName:D,titleName:A,docsSlug:"dialog"}),Se=({titleId:o})=>{const n=re(te),t=`\`${n.contentName}\` requires a \`${n.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${n.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${n.docsSlug}`;return i.useEffect(()=>{o&&(document.getElementById(o)||console.error(t))},[t,o]),null},Ee="DialogDescriptionWarning",Fe=({contentRef:o,descriptionId:n})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${re(Ee).contentName}}.`;return i.useEffect(()=>{const s=o.current?.getAttribute("aria-describedby");n&&s&&(document.getElementById(n)||console.warn(a))},[a,o,n]),null},Le=q,ke=K,Ae=V,He=Z,Me=Y,We=J,$e=ee,ze=ne;const $=(o,n,{checkForDefaultPrevented:t=!0}={})=>function(s){if(o?.(s),t===!1||!s.defaultPrevented)return n?.(s)},qe=200,[Ge,ae]=ce("DialogContext"),se=o=>{const{loading:n=!1,dismissMode:t="none",children:a,...s}=o;return e.jsx(Ge,{loading:n,dismissMode:t,children:e.jsx(Le,{...s,children:a})})},E=o=>{const{control:n,onOpenChange:t,children:a,...s}=o,{isOpen:l,close:d,unmount:c}=n,g=i.useRef(!1);return i.useEffect(function(){l&&!g.current&&(g.current=!0)},[l]),i.useEffect(function(){g.current&&!l&&(t?.(l),setTimeout(c,qe))},[l]),e.jsx(se,{...s,open:l,onOpenChange:u=>!u&&d(),children:a})},Ke=o=>{const{color:n,variant:t,size:a,className:s,...l}=o;return e.jsx(ke,{className:h(de({color:n,variant:t,size:a}),s),...l})},Ue=o=>{const{children:n,...t}=o;return e.jsx(ze,{asChild:!0,...t,children:n})},Ve=o=>{const{color:n="secondary",size:t="sm",...a}=o;return e.jsx(r.Close,{children:e.jsx(y,{color:n,size:t,...a})})},Ze=o=>{const{color:n="primary",size:t="sm",loading:a=!1,onClick:s,...l}=o,{loading:d}=ae(),[c,g]=je(),u=c||a||d;return e.jsx(y,{color:n,size:t,loading:u,onClick:f=>g(Promise.resolve().then(()=>s?.(f))),...l})},le=o=>e.jsx(Ae,{...o}),ie=o=>{const{className:n,...t}=o;return e.jsx(He,{className:h("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-overlay fixed inset-0 bg-black/50",n),...t})},Ye=o=>{const{isHiddenCloseButton:n=!1,className:t,onEscapeKeyDown:a,onInteractOutside:s,children:l,...d}=o,{loading:c,dismissMode:g}=ae(),u=i.useRef(null),f=i.useRef(null),v=M=>{if(c){M.preventDefault();return}switch(g){case"none":M.preventDefault();return;case"dismiss":return}};return e.jsxs(le,{children:[e.jsx(ie,{ref:u}),e.jsxs(Me,{className:h("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","fixed top-[50%] left-[50%] flex translate-x-[-50%] translate-y-[-50%]","z-overlay flex-col overflow-hidden bg-white shadow-lg duration-200","rounded-t-lg rounded-b-none border-0 outline-none","max-h-[calc(100%-2rem)] max-w-[calc(100%-2rem)]",t),onEscapeKeyDown:$(v,a),onInteractOutside:$(v,s),...d,children:[l,!n&&e.jsx(r.Close,{ref:f,children:e.jsx(y,{variant:"text",color:"secondary",size:"icon-sm",className:"z-dialog absolute top-3 right-3 text-gray-500 hover:text-gray-700",children:e.jsx(Te,{className:"size-5"})})})]})]})},Xe=o=>{const{className:n,...t}=o;return e.jsx("div",{className:h("z-dialog relative flex flex-col gap-2 border-b border-gray-200 bg-white p-4",n),...t})},Je=o=>{const{type:n="auto",className:t,...a}=o;return e.jsx("div",{className:"grow overflow-hidden pt-4",children:e.jsx(ve,{className:h("h-full pb-6 pl-6","mr-3 pr-3",t),type:n,...a})})},Qe=o=>{const{className:n,...t}=o;return e.jsx("div",{className:h("z-dialog relative flex shrink-0 items-center justify-end gap-2 border-t border-gray-200 bg-gray-50/50 p-4",n),...t})},eo=o=>{const{className:n,...t}=o;return e.jsx(We,{className:h("text-lg font-semibold text-slate-800",n),...t})},oo=o=>{const{className:n,...t}=o;return e.jsx($e,{className:h("text-sm text-gray-500",n),...t})},r=Object.assign(E,{PrimitiveRoot:se,Root:E,Trigger:Ke,Close:Ue,CancelButton:Ve,ConfirmButton:Ze,Portal:le,Overlay:ie,Content:Ye,Header:Xe,Body:Je,Footer:Qe,Title:eo,Description:oo});E.__docgenInfo={description:"",methods:[],displayName:"DialogOverlayKitRoot",props:{control:{required:!0,tsType:{name:"OverlayControllerProps"},description:""}},composes:["ComponentProps","Partial"]};const Co={title:"Shared/UI/Dialog",parameters:{layout:"centered",docs:{description:{component:`
### 다이얼로그 컴포넌트

Dialog 컴포넌트는 사용자에게 중요한 정보를 표시하거나 확인을 받기 위한 모달 다이얼로그입니다.
Radix UI의 Dialog를 기반으로 하며, overlay-kit과 함께 사용할 수 있도록 설계되었습니다.

## 주요 기능

- **헤더/바디/푸터 구조**: \`Dialog.Header\`, \`Dialog.Body\`, \`Dialog.Footer\`를 통한 구조화된 레이아웃
- **로딩 상태**: \`loading\` prop을 통한 로딩 상태 관리
- **닫기 모드**: \`dismissMode\` prop을 통한 닫기 동작 제어 (none/dismiss)
- **확인/취소 버튼**: \`Dialog.ConfirmButton\`, \`Dialog.CancelButton\`을 통한 편리한 버튼 제공
- **스크롤 가능한 바디**: \`Dialog.Body\`는 자동으로 스크롤 영역을 제공

## 사용 예시

\`\`\`tsx
const overlay = useOverlay();
const { open, close, isOpen, unmount } = overlay;

open(({ overlayId, close, unmount }) => (
  <Dialog 
    overlayControl={{ overlayId, isOpen: true, close, unmount }}
    loading={false}
    dismissMode="dismiss"
  >
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>제목</Dialog.Title>
        <Dialog.Description>설명</Dialog.Description>
      </Dialog.Header>
      <Dialog.Body>
        <p>내용</p>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CancelButton>취소</Dialog.CancelButton>
        <Dialog.ConfirmButton>확인</Dialog.ConfirmButton>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog>
));
\`\`\`
        `}}},tags:["autodocs"],argTypes:{loading:{control:"boolean",description:"Dialog의 로딩 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},dismissMode:{control:"select",options:["none","dismiss"],description:"Dialog의 닫기 동작 모드",table:{type:{summary:"'none' | 'dismiss'"},defaultValue:{summary:"'none'"}}}}},N={render:o=>e.jsxs(r.PrimitiveRoot,{...o,children:[e.jsx(r.Trigger,{children:"다이얼로그 열기"}),e.jsxs(r.Content,{children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Trigger를 사용한 다이얼로그"}),e.jsx(r.Description,{children:"Dialog.Trigger를 사용하여 다이얼로그를 열 수 있습니다."})]}),e.jsx(r.Body,{children:e.jsx("p",{className:"text-gray-700",children:"이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다."})}),e.jsxs(r.Footer,{children:[e.jsx(r.CancelButton,{children:"취소"}),e.jsx(r.Close,{children:e.jsx(r.ConfirmButton,{children:"확인"})})]})]})]})},b={render:()=>{const o=()=>{w.open(n=>e.jsx(r,{control:n,children:e.jsxs(r.Content,{children:[e.jsx(r.Header,{children:e.jsx(r.Title,{children:"기본 다이얼로그"})}),e.jsx(r.Body,{children:e.jsx("p",{className:"text-gray-700",children:"다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다."})}),e.jsxs(r.Footer,{children:[e.jsx(r.CancelButton,{children:"취소"}),e.jsx(r.Close,{children:e.jsx(r.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(y,{onClick:o,children:"다이얼로그 열기"})}},B={render:()=>{const o=({control:n})=>{const[t,a]=i.useState(!1);return e.jsx(r,{control:n,loading:t,dismissMode:"dismiss",children:e.jsxs(r.Content,{children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"로딩 상태 다이얼로그"}),e.jsx(r.Description,{children:"로딩 중일 때는 다이얼로그를 닫을 수 없습니다."})]}),e.jsxs(r.Body,{children:[e.jsx("p",{className:"text-gray-700",children:"로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다."}),t&&e.jsx("p",{className:"text-gray-700",children:"로딩 중입니다..."})]}),e.jsxs(r.Footer,{children:[e.jsx(r.CancelButton,{children:"취소"}),e.jsx(r.ConfirmButton,{onClick:async()=>{a(!0),await new Promise(s=>setTimeout(s,2e3)),a(!1),n.close()},children:"확인"})]})]})})};return e.jsx(y,{onClick:()=>w.open(n=>e.jsx(o,{control:n})),children:"로딩 다이얼로그 열기"})}},T={parameters:{docs:{description:{story:`
스크롤이 생기게 하려면 **Dialog.Content에 height을 반드시 설정**해야 합니다.
Content에 높이가 설정되지 않으면 내용이 길어져도 스크롤이 생기지 않습니다.

이 예시에서는 \`className="h-[500px]"\`를 사용하여 Content의 높이를 500px로 제한하고 있습니다.
        `}}},render:()=>{const o=()=>{w.open(n=>e.jsx(r,{control:n,children:e.jsxs(r.Content,{className:"h-[500px]",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"긴 내용이 있는 다이얼로그"}),e.jsx(r.Description,{children:"이 다이얼로그는 Body 영역에 스크롤이 생길 만큼 긴 내용을 포함합니다."})]}),e.jsx(r.Body,{children:Array.from({length:100}).map((t,a)=>e.jsxs("p",{children:["엄청 길면? ",a,"엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?"]},a))}),e.jsxs(r.Footer,{children:[e.jsx(r.CancelButton,{children:"취소"}),e.jsx(r.Close,{children:e.jsx(r.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(y,{onClick:o,children:"긴 내용 다이얼로그 열기"})}},P={parameters:{docs:{description:{story:`
가로 스크롤이 생기게 하려면 **Dialog.Content에 width을 제한**하고, **Body 내부에 가로로 넓은 콘텐츠**가 있어야 합니다.

이 예시에서는 \`className="w-[400px]"\`를 사용하여 Content의 너비를 400px로 제한하고, 넓은 테이블을 포함하여 가로 스크롤이 발생하도록 했습니다.
        `}}},render:()=>{const o=()=>{w.open(n=>e.jsx(r,{control:n,children:e.jsxs(r.Content,{className:"h-[400px] w-[400px]",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"가로/세로 스크롤이 있는 다이얼로그"}),e.jsx(r.Description,{children:"이 다이얼로그는 Body 영역에 가로 스크롤이 생길 만큼 넓은 콘텐츠를 포함합니다."})]}),e.jsx(r.Body,{children:e.jsx("div",{className:"min-w-[800px]",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100",children:[e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"이름"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"이메일 주소"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"전화번호"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"소속 부서"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"직책"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"상태"})]})}),e.jsx("tbody",{children:Array.from({length:10}).map((t,a)=>e.jsxs("tr",{children:[e.jsxs("td",{className:"border border-gray-300 p-2",children:["홍길동",a+1]}),e.jsxs("td",{className:"border border-gray-300 p-2",children:["hong.gildong",a+1,"@example.com"]}),e.jsxs("td",{className:"border border-gray-300 p-2",children:["010-1234-567",a]}),e.jsx("td",{className:"border border-gray-300 p-2",children:"컴퓨터공학과"}),e.jsx("td",{className:"border border-gray-300 p-2",children:"교수"}),e.jsx("td",{className:"border border-gray-300 p-2",children:"활성"})]},a))})]})})}),e.jsxs(r.Footer,{children:[e.jsx(r.CancelButton,{children:"취소"}),e.jsx(r.Close,{children:e.jsx(r.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(y,{onClick:o,children:"가로 스크롤 다이얼로그 열기"})}},R={render:()=>e.jsxs(r.PrimitiveRoot,{children:[e.jsx(r.Trigger,{children:"주차별 논문지도 계획 추가"}),e.jsxs(r.Content,{className:"h-[750px] w-[500px]",children:[e.jsx(r.Header,{children:e.jsx(r.Title,{children:"주차별 논문지도 계획 추가"})}),e.jsx(r.Body,{children:e.jsxs("section",{className:"space-y-4",children:[e.jsxs("section",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsx(x,{required:!0,children:"주차"}),e.jsx(S,{type:"number"})]}),e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsx(x,{required:!0,children:"계획일"}),e.jsx(S,{type:"date"})]})]}),e.jsxs("section",{className:"flex w-full flex-col gap-2",children:[e.jsx(x,{required:!0,children:"담당교수 선택"}),e.jsxs("div",{className:"space-y-2.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(W,{id:"advisor-kim",className:"peer"}),e.jsx(x,{htmlFor:"advisor-kim",className:"peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700",children:"김교수 (주지도교수)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(W,{id:"advisor-hong",className:"peer"}),e.jsx(x,{htmlFor:"advisor-hong",className:"peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700",children:"홍교수 (부지도교수)"})]})]})]}),e.jsxs("section",{className:"flex w-full flex-col gap-2",children:[e.jsx(x,{required:!0,children:"지도 주제"}),e.jsx(S,{type:"text",placeholder:"예: 연구방법론 개요"})]}),e.jsxs("section",{className:"flex w-full flex-col gap-2",children:[e.jsx(x,{required:!0,children:"계획 내용"}),e.jsx(be,{className:"h-24",placeholder:"지도할 내용을 상세히 입력하세요"})]}),e.jsxs("section",{className:"flex w-full flex-col gap-2",children:[e.jsx(x,{required:!0,children:"지도 방식"}),e.jsxs(m,{children:[e.jsx(m.Trigger,{placeholder:"선택하세요"}),e.jsxs(m.Content,{children:[e.jsx(m.Item,{value:"대면",children:"대면"}),e.jsx(m.Item,{value:"온라인",children:"온라인"}),e.jsx(m.Item,{value:"Zoom",children:"Zoom"}),e.jsx(m.Item,{value:"이메일",children:"이메일"}),e.jsx(m.Item,{value:"전화",children:"전화"})]})]})]}),e.jsxs("div",{className:"flex items-start gap-2 rounded-md bg-blue-50 p-3",children:[e.jsx("span",{className:"text-base",children:"💡"}),e.jsx("p",{className:"text-sm text-gray-700",children:"계획을 저장한 후, 실제 지도를 진행하면 '실적입력' 버튼을 클릭하여 실행 내용을 기록하세요."})]})]})}),e.jsxs(r.Footer,{children:[e.jsx(r.CancelButton,{className:"w-full",children:"취소"}),e.jsx(r.Close,{children:e.jsx(r.ConfirmButton,{className:"w-full",children:"저장"})})]})]})]})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Dialog.PrimitiveRoot {...args}>
        <Dialog.Trigger>다이얼로그 열기</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Trigger를 사용한 다이얼로그</Dialog.Title>
            <Dialog.Description>
              Dialog.Trigger를 사용하여 다이얼로그를 열 수 있습니다.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Body>
            <p className="text-gray-700">이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다.</p>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.CancelButton>취소</Dialog.CancelButton>
            <Dialog.Close>
              <Dialog.ConfirmButton>확인</Dialog.ConfirmButton>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.PrimitiveRoot>;
  }
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleOpen = () => {
      overlay.open(control => <Dialog control={control}>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>기본 다이얼로그</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p className="text-gray-700">
                다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다.
              </p>
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
    return <Button onClick={handleOpen}>다이얼로그 열기</Button>;
  }
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const LoadingDialog = ({
      control
    }: {
      control: OverlayControllerProps;
    }) => {
      const [loading, setLoading] = useState(false);
      return <Dialog control={control} loading={loading} dismissMode="dismiss">
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>로딩 상태 다이얼로그</Dialog.Title>
              <Dialog.Description>로딩 중일 때는 다이얼로그를 닫을 수 없습니다.</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <p className="text-gray-700">
                로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.
              </p>
              {loading && <p className="text-gray-700">로딩 중입니다...</p>}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CancelButton>취소</Dialog.CancelButton>
              <Dialog.ConfirmButton onClick={async () => {
              setLoading(true);
              await new Promise(resolve => setTimeout(resolve, 2000));
              setLoading(false);
              control.close();
            }}>
                확인
              </Dialog.ConfirmButton>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>;
    };
    return <Button onClick={() => overlay.open(control => <LoadingDialog control={control} />)}>
        로딩 다이얼로그 열기
      </Button>;
  }
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
스크롤이 생기게 하려면 **Dialog.Content에 height을 반드시 설정**해야 합니다.
Content에 높이가 설정되지 않으면 내용이 길어져도 스크롤이 생기지 않습니다.

이 예시에서는 \\\`className="h-[500px]"\\\`를 사용하여 Content의 높이를 500px로 제한하고 있습니다.
        \`
      }
    }
  },
  render: () => {
    const handleOpen = () => {
      overlay.open(control => <Dialog control={control}>
          <Dialog.Content className="h-[500px]">
            <Dialog.Header>
              <Dialog.Title>긴 내용이 있는 다이얼로그</Dialog.Title>
              <Dialog.Description>
                이 다이얼로그는 Body 영역에 스크롤이 생길 만큼 긴 내용을 포함합니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              {Array.from({
              length: 100
            }).map((_, i) => <p key={i}>
                  엄청 길면? {i}엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
                  엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
                </p>)}
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
    return <Button onClick={handleOpen}>긴 내용 다이얼로그 열기</Button>;
  }
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
가로 스크롤이 생기게 하려면 **Dialog.Content에 width을 제한**하고, **Body 내부에 가로로 넓은 콘텐츠**가 있어야 합니다.

이 예시에서는 \\\`className="w-[400px]"\\\`를 사용하여 Content의 너비를 400px로 제한하고, 넓은 테이블을 포함하여 가로 스크롤이 발생하도록 했습니다.
        \`
      }
    }
  },
  render: () => {
    const handleOpen = () => {
      overlay.open(control => <Dialog control={control}>
          <Dialog.Content className="h-[400px] w-[400px]">
            <Dialog.Header>
              <Dialog.Title>가로/세로 스크롤이 있는 다이얼로그</Dialog.Title>
              <Dialog.Description>
                이 다이얼로그는 Body 영역에 가로 스크롤이 생길 만큼 넓은 콘텐츠를 포함합니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <div className="min-w-[800px]">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">이름</th>
                      <th className="border border-gray-300 p-2 text-left">이메일 주소</th>
                      <th className="border border-gray-300 p-2 text-left">전화번호</th>
                      <th className="border border-gray-300 p-2 text-left">소속 부서</th>
                      <th className="border border-gray-300 p-2 text-left">직책</th>
                      <th className="border border-gray-300 p-2 text-left">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({
                    length: 10
                  }).map((_, i) => <tr key={i}>
                        <td className="border border-gray-300 p-2">홍길동{i + 1}</td>
                        <td className="border border-gray-300 p-2">
                          hong.gildong{i + 1}@example.com
                        </td>
                        <td className="border border-gray-300 p-2">010-1234-567{i}</td>
                        <td className="border border-gray-300 p-2">컴퓨터공학과</td>
                        <td className="border border-gray-300 p-2">교수</td>
                        <td className="border border-gray-300 p-2">활성</td>
                      </tr>)}
                  </tbody>
                </table>
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
    return <Button onClick={handleOpen}>가로 스크롤 다이얼로그 열기</Button>;
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Dialog.PrimitiveRoot>
        <Dialog.Trigger>주차별 논문지도 계획 추가</Dialog.Trigger>
        <Dialog.Content className="h-[750px] w-[500px]">
          <Dialog.Header>
            <Dialog.Title>주차별 논문지도 계획 추가</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <section className="space-y-4">
              <section className="flex gap-4">
                <div className="flex w-full flex-col gap-2">
                  <Label required>주차</Label>
                  <Input type="number" />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Label required>계획일</Label>
                  <Input type="date" />
                </div>
              </section>
              <section className="flex w-full flex-col gap-2">
                <Label required>담당교수 선택</Label>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Checkbox id="advisor-kim" className="peer" />
                    <Label htmlFor="advisor-kim" className="peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700">
                      김교수 (주지도교수)
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="advisor-hong" className="peer" />
                    <Label htmlFor="advisor-hong" className="peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700">
                      홍교수 (부지도교수)
                    </Label>
                  </div>
                </div>
              </section>
              <section className="flex w-full flex-col gap-2">
                <Label required>지도 주제</Label>
                <Input type="text" placeholder="예: 연구방법론 개요" />
              </section>
              <section className="flex w-full flex-col gap-2">
                <Label required>계획 내용</Label>
                <Textarea className="h-24" placeholder="지도할 내용을 상세히 입력하세요" />
              </section>
              <section className="flex w-full flex-col gap-2">
                <Label required>지도 방식</Label>
                <Select>
                  <Select.Trigger placeholder="선택하세요" />
                  <Select.Content>
                    <Select.Item value="대면">대면</Select.Item>
                    <Select.Item value="온라인">온라인</Select.Item>
                    <Select.Item value="Zoom">Zoom</Select.Item>
                    <Select.Item value="이메일">이메일</Select.Item>
                    <Select.Item value="전화">전화</Select.Item>
                  </Select.Content>
                </Select>
              </section>
              <div className="flex items-start gap-2 rounded-md bg-blue-50 p-3">
                <span className="text-base">💡</span>
                <p className="text-sm text-gray-700">
                  계획을 저장한 후, 실제 지도를 진행하면 &apos;실적입력&apos; 버튼을 클릭하여 실행
                  내용을 기록하세요.
                </p>
              </div>
            </section>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.CancelButton className="w-full">취소</Dialog.CancelButton>
            <Dialog.Close>
              <Dialog.ConfirmButton className="w-full">저장</Dialog.ConfirmButton>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.PrimitiveRoot>;
  }
}`,...R.parameters?.docs?.source}}};const jo=["Default","WithOverlayKit","WithLoading","WithLongContent","WithHorizontalScroll","ThesisGuidancePlanForm"];export{N as Default,R as ThesisGuidancePlanForm,P as WithHorizontalScroll,B as WithLoading,T as WithLongContent,b as WithOverlayKit,jo as __namedExportsOrder,Co as default};
