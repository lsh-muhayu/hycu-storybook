import{c as _,r as d,j as e,a as y,H as Jn}from"./iframe-Ct6cBN0f.js";import{c as Ue,u as z,P as he,a as g,b as ze,d as A,e as eo,f as no}from"./index-w90ALqq8.js";import{u as Ve}from"./index-BnUxCBFQ.js";import{c as oo}from"./index-DJ4grFFS.js";import{u as Ce,a as ro}from"./index-Ckh8wc6S.js";import{c as He,R as Xe,P as to,A as ao,u as so,a as co,F as io,b as lo,C as uo,h as po,d as mo,e as xo,D as C}from"./index-Z6jdyO17.js";import{u as ue}from"./index-CMO2IfL1.js";import{c as Ye,R as ho,I as wo}from"./index-DibzOx2c.js";import{C as go}from"./chevron-right-PVOCQ-8d.js";import{C as We}from"./check-BVy4-bTP.js";import{B as f}from"./Button-BzLycsm1.js";import{T as B,L as ye}from"./trash-2-Cc1GXTNi.js";import{U as pe}from"./user-C7BhQcjD.js";import{S as Ne}from"./settings-h3jq42xj.js";import{D as Se}from"./download-DE53kcP_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dr9knix5.js";import"./ScrollArea--6jhWGxl.js";import"./index-cTMbTQbW.js";const Mo=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],N=_("copy",Mo);const fo=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],qe=_("ellipsis-vertical",fo);const Do=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],Qe=_("file",Do);const vo=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],we=_("folder",vo);const jo=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],be=_("plus",jo);const Io=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],Ze=_("share",Io);const Co=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],O=_("square-pen",Co);var Ie=["Enter"," "],yo=["ArrowDown","PageUp","Home"],Je=["ArrowUp","PageDown","End"],No=[...yo,...Je],So={ltr:[...Ie,"ArrowRight"],rtl:[...Ie,"ArrowLeft"]},bo={ltr:["ArrowLeft"],rtl:["ArrowRight"]},V="Menu",[K,_o,Ro]=oo(V),[R,en]=Ue(V,[Ro,He,Ye]),H=He(),nn=Ye(),[on,S]=R(V),[To,X]=R(V),rn=n=>{const{__scopeMenu:t,open:r=!1,children:a,dir:s,onOpenChange:c,modal:l=!0}=n,u=H(t),[x,h]=d.useState(null),m=d.useRef(!1),i=Ce(c),w=ro(s);return d.useEffect(()=>{const j=()=>{m.current=!0,document.addEventListener("pointerdown",M,{capture:!0,once:!0}),document.addEventListener("pointermove",M,{capture:!0,once:!0})},M=()=>m.current=!1;return document.addEventListener("keydown",j,{capture:!0}),()=>{document.removeEventListener("keydown",j,{capture:!0}),document.removeEventListener("pointerdown",M,{capture:!0}),document.removeEventListener("pointermove",M,{capture:!0})}},[]),e.jsx(Xe,{...u,children:e.jsx(on,{scope:t,open:r,onOpenChange:i,content:x,onContentChange:h,children:e.jsx(To,{scope:t,onClose:d.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:m,dir:w,modal:l,children:a})})})};rn.displayName=V;var Po="MenuAnchor",_e=d.forwardRef((n,t)=>{const{__scopeMenu:r,...a}=n,s=H(r);return e.jsx(ao,{...s,...a,ref:t})});_e.displayName=Po;var Re="MenuPortal",[Eo,tn]=R(Re,{forceMount:void 0}),an=n=>{const{__scopeMenu:t,forceMount:r,children:a,container:s}=n,c=S(Re,t);return e.jsx(Eo,{scope:t,forceMount:r,children:e.jsx(he,{present:r||c.open,children:e.jsx(to,{asChild:!0,container:s,children:a})})})};an.displayName=Re;var I="MenuContent",[ko,Te]=R(I),sn=d.forwardRef((n,t)=>{const r=tn(I,n.__scopeMenu),{forceMount:a=r.forceMount,...s}=n,c=S(I,n.__scopeMenu),l=X(I,n.__scopeMenu);return e.jsx(K.Provider,{scope:n.__scopeMenu,children:e.jsx(he,{present:a||c.open,children:e.jsx(K.Slot,{scope:n.__scopeMenu,children:l.modal?e.jsx(Bo,{...s,ref:t}):e.jsx(Oo,{...s,ref:t})})})})}),Bo=d.forwardRef((n,t)=>{const r=S(I,n.__scopeMenu),a=d.useRef(null),s=z(t,a);return d.useEffect(()=>{const c=a.current;if(c)return po(c)},[]),e.jsx(Pe,{...n,ref:s,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:g(n.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})}),Oo=d.forwardRef((n,t)=>{const r=S(I,n.__scopeMenu);return e.jsx(Pe,{...n,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})}),Ao=eo("MenuContent.ScrollLock"),Pe=d.forwardRef((n,t)=>{const{__scopeMenu:r,loop:a=!1,trapFocus:s,onOpenAutoFocus:c,onCloseAutoFocus:l,disableOutsidePointerEvents:u,onEntryFocus:x,onEscapeKeyDown:h,onPointerDownOutside:m,onFocusOutside:i,onInteractOutside:w,onDismiss:j,disableOutsideScroll:M,...T}=n,L=S(I,r),P=X(I,r),Vn=H(r),Hn=nn(r),Ae=_o(r),[Xn,Le]=d.useState(null),Y=d.useRef(null),Yn=z(t,Y,L.onContentChange),W=d.useRef(0),q=d.useRef(""),Wn=d.useRef(0),fe=d.useRef(null),Ge=d.useRef("right"),De=d.useRef(0),qn=M?co:d.Fragment,Qn=M?{as:Ao,allowPinchZoom:!0}:void 0,Zn=p=>{const k=q.current+p,b=Ae().filter(v=>!v.disabled),G=document.activeElement,ve=b.find(v=>v.ref.current===G)?.textValue,je=b.map(v=>v.textValue),Fe=Wo(je,k,ve),F=b.find(v=>v.textValue===Fe)?.ref.current;(function v($e){q.current=$e,window.clearTimeout(W.current),$e!==""&&(W.current=window.setTimeout(()=>v(""),1e3))})(k),F&&setTimeout(()=>F.focus())};d.useEffect(()=>()=>window.clearTimeout(W.current),[]),so();const E=d.useCallback(p=>Ge.current===fe.current?.side&&Qo(p,fe.current?.area),[]);return e.jsx(ko,{scope:r,searchRef:q,onItemEnter:d.useCallback(p=>{E(p)&&p.preventDefault()},[E]),onItemLeave:d.useCallback(p=>{E(p)||(Y.current?.focus(),Le(null))},[E]),onTriggerLeave:d.useCallback(p=>{E(p)&&p.preventDefault()},[E]),pointerGraceTimerRef:Wn,onPointerGraceIntentChange:d.useCallback(p=>{fe.current=p},[]),children:e.jsx(qn,{...Qn,children:e.jsx(io,{asChild:!0,trapped:s,onMountAutoFocus:g(c,p=>{p.preventDefault(),Y.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:l,children:e.jsx(lo,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:h,onPointerDownOutside:m,onFocusOutside:i,onInteractOutside:w,onDismiss:j,children:e.jsx(ho,{asChild:!0,...Hn,dir:P.dir,orientation:"vertical",loop:a,currentTabStopId:Xn,onCurrentTabStopIdChange:Le,onEntryFocus:g(x,p=>{P.isUsingKeyboardRef.current||p.preventDefault()}),preventScrollOnEntryFocus:!0,children:e.jsx(uo,{role:"menu","aria-orientation":"vertical","data-state":Cn(L.open),"data-radix-menu-content":"",dir:P.dir,...Vn,...T,ref:Yn,style:{outline:"none",...T.style},onKeyDown:g(T.onKeyDown,p=>{const b=p.target.closest("[data-radix-menu-content]")===p.currentTarget,G=p.ctrlKey||p.altKey||p.metaKey,ve=p.key.length===1;b&&(p.key==="Tab"&&p.preventDefault(),!G&&ve&&Zn(p.key));const je=Y.current;if(p.target!==je||!No.includes(p.key))return;p.preventDefault();const F=Ae().filter(v=>!v.disabled).map(v=>v.ref.current);Je.includes(p.key)&&F.reverse(),Xo(F)}),onBlur:g(n.onBlur,p=>{p.currentTarget.contains(p.target)||(window.clearTimeout(W.current),q.current="")}),onPointerMove:g(n.onPointerMove,U(p=>{const k=p.target,b=De.current!==p.clientX;if(p.currentTarget.contains(k)&&b){const G=p.clientX>De.current?"right":"left";Ge.current=G,De.current=p.clientX}}))})})})})})})});sn.displayName=I;var Lo="MenuGroup",Ee=d.forwardRef((n,t)=>{const{__scopeMenu:r,...a}=n;return e.jsx(A.div,{role:"group",...a,ref:t})});Ee.displayName=Lo;var Go="MenuLabel",dn=d.forwardRef((n,t)=>{const{__scopeMenu:r,...a}=n;return e.jsx(A.div,{...a,ref:t})});dn.displayName=Go;var me="MenuItem",Ke="menu.itemSelect",ge=d.forwardRef((n,t)=>{const{disabled:r=!1,onSelect:a,...s}=n,c=d.useRef(null),l=X(me,n.__scopeMenu),u=Te(me,n.__scopeMenu),x=z(t,c),h=d.useRef(!1),m=()=>{const i=c.current;if(!r&&i){const w=new CustomEvent(Ke,{bubbles:!0,cancelable:!0});i.addEventListener(Ke,j=>a?.(j),{once:!0}),no(i,w),w.defaultPrevented?h.current=!1:l.onClose()}};return e.jsx(cn,{...s,ref:x,disabled:r,onClick:g(n.onClick,m),onPointerDown:i=>{n.onPointerDown?.(i),h.current=!0},onPointerUp:g(n.onPointerUp,i=>{h.current||i.currentTarget?.click()}),onKeyDown:g(n.onKeyDown,i=>{const w=u.searchRef.current!=="";r||w&&i.key===" "||Ie.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})})});ge.displayName=me;var cn=d.forwardRef((n,t)=>{const{__scopeMenu:r,disabled:a=!1,textValue:s,...c}=n,l=Te(me,r),u=nn(r),x=d.useRef(null),h=z(t,x),[m,i]=d.useState(!1),[w,j]=d.useState("");return d.useEffect(()=>{const M=x.current;M&&j((M.textContent??"").trim())},[c.children]),e.jsx(K.ItemSlot,{scope:r,disabled:a,textValue:s??w,children:e.jsx(wo,{asChild:!0,...u,focusable:!a,children:e.jsx(A.div,{role:"menuitem","data-highlighted":m?"":void 0,"aria-disabled":a||void 0,"data-disabled":a?"":void 0,...c,ref:h,onPointerMove:g(n.onPointerMove,U(M=>{a?l.onItemLeave(M):(l.onItemEnter(M),M.defaultPrevented||M.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:g(n.onPointerLeave,U(M=>l.onItemLeave(M))),onFocus:g(n.onFocus,()=>i(!0)),onBlur:g(n.onBlur,()=>i(!1))})})})}),Fo="MenuCheckboxItem",ln=d.forwardRef((n,t)=>{const{checked:r=!1,onCheckedChange:a,...s}=n;return e.jsx(hn,{scope:n.__scopeMenu,checked:r,children:e.jsx(ge,{role:"menuitemcheckbox","aria-checked":xe(r)?"mixed":r,...s,ref:t,"data-state":Oe(r),onSelect:g(s.onSelect,()=>a?.(xe(r)?!0:!r),{checkForDefaultPrevented:!1})})})});ln.displayName=Fo;var un="MenuRadioGroup",[$o,Ko]=R(un,{value:void 0,onValueChange:()=>{}}),pn=d.forwardRef((n,t)=>{const{value:r,onValueChange:a,...s}=n,c=Ce(a);return e.jsx($o,{scope:n.__scopeMenu,value:r,onValueChange:c,children:e.jsx(Ee,{...s,ref:t})})});pn.displayName=un;var mn="MenuRadioItem",xn=d.forwardRef((n,t)=>{const{value:r,...a}=n,s=Ko(mn,n.__scopeMenu),c=r===s.value;return e.jsx(hn,{scope:n.__scopeMenu,checked:c,children:e.jsx(ge,{role:"menuitemradio","aria-checked":c,...a,ref:t,"data-state":Oe(c),onSelect:g(a.onSelect,()=>s.onValueChange?.(r),{checkForDefaultPrevented:!1})})})});xn.displayName=mn;var ke="MenuItemIndicator",[hn,Uo]=R(ke,{checked:!1}),wn=d.forwardRef((n,t)=>{const{__scopeMenu:r,forceMount:a,...s}=n,c=Uo(ke,r);return e.jsx(he,{present:a||xe(c.checked)||c.checked===!0,children:e.jsx(A.span,{...s,ref:t,"data-state":Oe(c.checked)})})});wn.displayName=ke;var zo="MenuSeparator",gn=d.forwardRef((n,t)=>{const{__scopeMenu:r,...a}=n;return e.jsx(A.div,{role:"separator","aria-orientation":"horizontal",...a,ref:t})});gn.displayName=zo;var Vo="MenuArrow",Mn=d.forwardRef((n,t)=>{const{__scopeMenu:r,...a}=n,s=H(r);return e.jsx(mo,{...s,...a,ref:t})});Mn.displayName=Vo;var Be="MenuSub",[Ho,fn]=R(Be),Dn=n=>{const{__scopeMenu:t,children:r,open:a=!1,onOpenChange:s}=n,c=S(Be,t),l=H(t),[u,x]=d.useState(null),[h,m]=d.useState(null),i=Ce(s);return d.useEffect(()=>(c.open===!1&&i(!1),()=>i(!1)),[c.open,i]),e.jsx(Xe,{...l,children:e.jsx(on,{scope:t,open:a,onOpenChange:i,content:h,onContentChange:m,children:e.jsx(Ho,{scope:t,contentId:ue(),triggerId:ue(),trigger:u,onTriggerChange:x,children:r})})})};Dn.displayName=Be;var $="MenuSubTrigger",vn=d.forwardRef((n,t)=>{const r=S($,n.__scopeMenu),a=X($,n.__scopeMenu),s=fn($,n.__scopeMenu),c=Te($,n.__scopeMenu),l=d.useRef(null),{pointerGraceTimerRef:u,onPointerGraceIntentChange:x}=c,h={__scopeMenu:n.__scopeMenu},m=d.useCallback(()=>{l.current&&window.clearTimeout(l.current),l.current=null},[]);return d.useEffect(()=>m,[m]),d.useEffect(()=>{const i=u.current;return()=>{window.clearTimeout(i),x(null)}},[u,x]),e.jsx(_e,{asChild:!0,...h,children:e.jsx(cn,{id:s.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":s.contentId,"data-state":Cn(r.open),...n,ref:ze(t,s.onTriggerChange),onClick:i=>{n.onClick?.(i),!(n.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),r.open||r.onOpenChange(!0))},onPointerMove:g(n.onPointerMove,U(i=>{c.onItemEnter(i),!i.defaultPrevented&&!n.disabled&&!r.open&&!l.current&&(c.onPointerGraceIntentChange(null),l.current=window.setTimeout(()=>{r.onOpenChange(!0),m()},100))})),onPointerLeave:g(n.onPointerLeave,U(i=>{m();const w=r.content?.getBoundingClientRect();if(w){const j=r.content?.dataset.side,M=j==="right",T=M?-5:5,L=w[M?"left":"right"],P=w[M?"right":"left"];c.onPointerGraceIntentChange({area:[{x:i.clientX+T,y:i.clientY},{x:L,y:w.top},{x:P,y:w.top},{x:P,y:w.bottom},{x:L,y:w.bottom}],side:j}),window.clearTimeout(u.current),u.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(i),i.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:g(n.onKeyDown,i=>{const w=c.searchRef.current!=="";n.disabled||w&&i.key===" "||So[a.dir].includes(i.key)&&(r.onOpenChange(!0),r.content?.focus(),i.preventDefault())})})})});vn.displayName=$;var jn="MenuSubContent",In=d.forwardRef((n,t)=>{const r=tn(I,n.__scopeMenu),{forceMount:a=r.forceMount,...s}=n,c=S(I,n.__scopeMenu),l=X(I,n.__scopeMenu),u=fn(jn,n.__scopeMenu),x=d.useRef(null),h=z(t,x);return e.jsx(K.Provider,{scope:n.__scopeMenu,children:e.jsx(he,{present:a||c.open,children:e.jsx(K.Slot,{scope:n.__scopeMenu,children:e.jsx(Pe,{id:u.contentId,"aria-labelledby":u.triggerId,...s,ref:h,align:"start",side:l.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:m=>{l.isUsingKeyboardRef.current&&x.current?.focus(),m.preventDefault()},onCloseAutoFocus:m=>m.preventDefault(),onFocusOutside:g(n.onFocusOutside,m=>{m.target!==u.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:g(n.onEscapeKeyDown,m=>{l.onClose(),m.preventDefault()}),onKeyDown:g(n.onKeyDown,m=>{const i=m.currentTarget.contains(m.target),w=bo[l.dir].includes(m.key);i&&w&&(c.onOpenChange(!1),u.trigger?.focus(),m.preventDefault())})})})})})});In.displayName=jn;function Cn(n){return n?"open":"closed"}function xe(n){return n==="indeterminate"}function Oe(n){return xe(n)?"indeterminate":n?"checked":"unchecked"}function Xo(n){const t=document.activeElement;for(const r of n)if(r===t||(r.focus(),document.activeElement!==t))return}function Yo(n,t){return n.map((r,a)=>n[(t+a)%n.length])}function Wo(n,t,r){const s=t.length>1&&Array.from(t).every(h=>h===t[0])?t[0]:t,c=r?n.indexOf(r):-1;let l=Yo(n,Math.max(c,0));s.length===1&&(l=l.filter(h=>h!==r));const x=l.find(h=>h.toLowerCase().startsWith(s.toLowerCase()));return x!==r?x:void 0}function qo(n,t){const{x:r,y:a}=n;let s=!1;for(let c=0,l=t.length-1;c<t.length;l=c++){const u=t[c],x=t[l],h=u.x,m=u.y,i=x.x,w=x.y;m>a!=w>a&&r<(i-h)*(a-m)/(w-m)+h&&(s=!s)}return s}function Qo(n,t){if(!t)return!1;const r={x:n.clientX,y:n.clientY};return qo(r,t)}function U(n){return t=>t.pointerType==="mouse"?n(t):void 0}var Zo=rn,Jo=_e,er=an,nr=sn,or=Ee,rr=dn,tr=ge,ar=ln,sr=pn,dr=xn,cr=wn,ir=gn,lr=Mn,ur=Dn,pr=vn,mr=In,Me="DropdownMenu",[xr]=Ue(Me,[en]),D=en(),[hr,yn]=xr(Me),Nn=n=>{const{__scopeDropdownMenu:t,children:r,dir:a,open:s,defaultOpen:c,onOpenChange:l,modal:u=!0}=n,x=D(t),h=d.useRef(null),[m,i]=Ve({prop:s,defaultProp:c??!1,onChange:l,caller:Me});return e.jsx(hr,{scope:t,triggerId:ue(),triggerRef:h,contentId:ue(),open:m,onOpenChange:i,onOpenToggle:d.useCallback(()=>i(w=>!w),[i]),modal:u,children:e.jsx(Zo,{...x,open:m,onOpenChange:i,dir:a,modal:u,children:r})})};Nn.displayName=Me;var Sn="DropdownMenuTrigger",bn=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,disabled:a=!1,...s}=n,c=yn(Sn,r),l=D(r);return e.jsx(Jo,{asChild:!0,...l,children:e.jsx(A.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":a?"":void 0,disabled:a,...s,ref:ze(t,c.triggerRef),onPointerDown:g(n.onPointerDown,u=>{!a&&u.button===0&&u.ctrlKey===!1&&(c.onOpenToggle(),c.open||u.preventDefault())}),onKeyDown:g(n.onKeyDown,u=>{a||(["Enter"," "].includes(u.key)&&c.onOpenToggle(),u.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})});bn.displayName=Sn;var wr="DropdownMenuPortal",_n=n=>{const{__scopeDropdownMenu:t,...r}=n,a=D(t);return e.jsx(er,{...a,...r})};_n.displayName=wr;var Rn="DropdownMenuContent",Tn=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=yn(Rn,r),c=D(r),l=d.useRef(!1);return e.jsx(nr,{id:s.contentId,"aria-labelledby":s.triggerId,...c,...a,ref:t,onCloseAutoFocus:g(n.onCloseAutoFocus,u=>{l.current||s.triggerRef.current?.focus(),l.current=!1,u.preventDefault()}),onInteractOutside:g(n.onInteractOutside,u=>{const x=u.detail.originalEvent,h=x.button===0&&x.ctrlKey===!0,m=x.button===2||h;(!s.modal||m)&&(l.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Tn.displayName=Rn;var gr="DropdownMenuGroup",Pn=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(or,{...s,...a,ref:t})});Pn.displayName=gr;var Mr="DropdownMenuLabel",En=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(rr,{...s,...a,ref:t})});En.displayName=Mr;var fr="DropdownMenuItem",kn=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(tr,{...s,...a,ref:t})});kn.displayName=fr;var Dr="DropdownMenuCheckboxItem",Bn=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(ar,{...s,...a,ref:t})});Bn.displayName=Dr;var vr="DropdownMenuRadioGroup",On=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(sr,{...s,...a,ref:t})});On.displayName=vr;var jr="DropdownMenuRadioItem",An=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(dr,{...s,...a,ref:t})});An.displayName=jr;var Ir="DropdownMenuItemIndicator",Ln=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(cr,{...s,...a,ref:t})});Ln.displayName=Ir;var Cr="DropdownMenuSeparator",Gn=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(ir,{...s,...a,ref:t})});Gn.displayName=Cr;var yr="DropdownMenuArrow",Nr=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(lr,{...s,...a,ref:t})});Nr.displayName=yr;var Sr=n=>{const{__scopeDropdownMenu:t,children:r,open:a,onOpenChange:s,defaultOpen:c}=n,l=D(t),[u,x]=Ve({prop:a,defaultProp:c??!1,onChange:s,caller:"DropdownMenuSub"});return e.jsx(ur,{...l,open:u,onOpenChange:x,children:r})},br="DropdownMenuSubTrigger",Fn=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(pr,{...s,...a,ref:t})});Fn.displayName=br;var _r="DropdownMenuSubContent",$n=d.forwardRef((n,t)=>{const{__scopeDropdownMenu:r,...a}=n,s=D(r);return e.jsx(mr,{...s,...a,ref:t,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});$n.displayName=_r;var Rr=Nn,Tr=bn,Kn=_n,Pr=Tn,Er=Pn,kr=En,Br=kn,Or=Bn,Ar=On,Lr=An,Un=Ln,Gr=Gn,Fr=Sr,$r=Fn,Kr=$n;const zn=n=>e.jsx(Rr,{"data-slot":"dropdown-menu",...n}),Ur=n=>e.jsx(Kn,{"data-slot":"dropdown-menu-portal",...n}),zr=n=>e.jsx(Tr,{"data-slot":"dropdown-menu-trigger",...n}),Vr=n=>{const{className:t,sideOffset:r=4,collisionBoundary:a=[],container:s,...c}=n,{collisionBoundary:l,container:u,collisionPadding:x}=xo({collisionBoundary:a,container:s});return e.jsx(Kn,{container:u,children:e.jsx(Pr,{"data-slot":"dropdown-menu-content",sideOffset:r,className:y("z-dropdown overflow-x-hidden overflow-y-auto rounded-md border border-gray-200 bg-white p-2 shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2","data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin)",t),collisionBoundary:l,collisionPadding:x,...c})})},Hr=n=>e.jsx(Er,{"data-slot":"dropdown-menu-group",...n}),Xr=n=>{const{className:t,inset:r,variant:a="default",...s}=n;return e.jsx(Br,{"data-slot":"dropdown-menu-item","data-inset":r,"data-variant":a,className:y("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-gray-900 outline-hidden select-none data-highlighted:bg-gray-100","data-disabled:cursor-not-allowed data-disabled:opacity-50","data-[variant=destructive]:text-danger data-[variant=destructive]:focus:bg-danger/10","dark:data-[variant=destructive]:focus:bg-danger/20 data-[variant=destructive]:focus:text-danger",'data-[variant=destructive]:*:[svg]:text-danger! [&_svg:not([class*="text-"])]:text-muted-foreground',"data-inset:pl-8 [&_svg]:pointer-events-none",'[&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',t),...s})},Yr=n=>{const{className:t,children:r,checked:a,...s}=n;return e.jsxs(Or,{"data-slot":"dropdown-menu-checkbox-item",className:y("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm text-gray-900 outline-hidden data-highlighted:bg-gray-100","data-disabled:cursor-not-allowed data-disabled:opacity-50","focus:bg-accent focus:text-accent-foreground","select-none [&_svg]:pointer-events-none [&_svg]:shrink-0",'[&_svg:not([class*="size-"])]:size-4',t),checked:a,...s,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(Un,{children:e.jsx(We,{className:"size-4"})})}),r]})},Wr=n=>e.jsx(Ar,{"data-slot":"dropdown-menu-radio-group",...n}),qr=n=>{const{className:t,children:r,...a}=n;return e.jsxs(Lr,{"data-slot":"dropdown-menu-radio-item",className:y("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm text-gray-900 outline-hidden select-none data-highlighted:bg-gray-100","data-disabled:cursor-not-allowed data-disabled:opacity-50",'[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',t),...a,children:[e.jsx("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",children:e.jsx(Un,{children:e.jsx(We,{className:"size-4"})})}),r]})},Qr=n=>{const{className:t,inset:r,...a}=n;return e.jsx(kr,{"data-slot":"dropdown-menu-label","data-inset":r,className:y("px-2 py-1.5 text-sm text-gray-900 data-inset:pl-8",t),...a})},Zr=n=>{const{className:t,...r}=n;return e.jsx(Gr,{"data-slot":"dropdown-menu-separator",className:y("mx-1 my-1 h-px bg-gray-200",t),...r})},Jr=n=>{const{className:t,...r}=n;return e.jsx("span",{"data-slot":"dropdown-menu-shortcut",className:y("ml-auto tracking-widest",t),...r})},et=n=>e.jsx(Fr,{"data-slot":"dropdown-menu-sub",...n}),nt=n=>{const{className:t,inset:r,children:a,...s}=n;return e.jsxs($r,{"data-slot":"dropdown-menu-sub-trigger","data-inset":r,className:y("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-gray-900 outline-hidden select-none data-highlighted:bg-gray-100 data-inset:pl-8",'[&_svg:not([class*="text-"])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',t),...s,children:[a,e.jsx(go,{className:"ml-auto size-4"})]})},ot=n=>{const{className:t,...r}=n;return e.jsx(Kr,{"data-slot":"dropdown-menu-sub-content",className:y("z-dropdown overflow-hidden rounded-md border border-gray-200 bg-white p-2 shadow-lg","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",t),...r})},o=Object.assign(zn,{Portal:Ur,Trigger:zr,Content:Vr,Group:Hr,Item:Xr,CheckboxItem:Yr,RadioGroup:Wr,RadioItem:qr,Label:Qr,Separator:Zr,Shortcut:Jr,Sub:et,SubTrigger:nt,SubContent:ot});zn.__docgenInfo={description:"",methods:[],displayName:"DropdownMenuRoot"};const jt={title:"Shared/UI/DropdownMenu",component:o,parameters:{layout:"centered",docs:{description:{component:`
### 드롭다운 메뉴 컴포넌트

DropdownMenu 컴포넌트는 버튼이나 트리거 요소를 클릭하면 나타나는 메뉴를 제공합니다.
Radix UI의 DropdownMenu 프리미티브를 기반으로 구현되었습니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`DropdownMenu\`, \`DropdownMenu.Trigger\`, \`DropdownMenu.Content\`, \`DropdownMenu.Item\` 등으로 구성
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 완벽 지원
- **다양한 아이템 타입**: Item, CheckboxItem, RadioItem, SubMenu 등 지원
- **구분선 및 라벨**: \`DropdownMenu.Separator\`, \`DropdownMenu.Label\`로 메뉴 구조화
- **단축키 표시**: \`DropdownMenu.Shortcut\`을 통해 키보드 단축키 표시 가능
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능
- **variant 지원**: \`destructive\` variant를 통해 위험한 액션 강조 가능

## 사용 예시

\`\`\`tsx
<DropdownMenu>
  <DropdownMenu.Trigger asChild>
    <Button>메뉴 열기</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>항목 1</DropdownMenu.Item>
    <DropdownMenu.Item>항목 2</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
\`\`\`
        `}}},tags:["autodocs"]},Q={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본 드롭다운 메뉴"}),e.jsx("p",{className:"text-xs text-gray-500",children:"버튼을 클릭하면 드롭다운 메뉴가 표시됩니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",children:"메뉴 열기"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Item,{children:"프로필"}),e.jsx(o.Item,{children:"설정"}),e.jsx(o.Item,{children:"로그아웃"})]})]})})]})})},Z={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"아이콘과 함께 사용"}),e.jsx("p",{className:"text-xs text-gray-500",children:"메뉴 항목에 아이콘을 추가하여 시각적으로 구분할 수 있습니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"outlined",color:"secondary",children:e.jsx(qe,{})})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsxs(o.Item,{children:[e.jsx(O,{}),"편집"]}),e.jsxs(o.Item,{children:[e.jsx(N,{}),"복사"]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{variant:"destructive",children:[e.jsx(B,{}),"삭제"]})]})]})})]})})},J={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"단축키 표시"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`DropdownMenu.Shortcut\\`을 사용하여 키보드 단축키를 표시할 수 있습니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",children:"파일 메뉴"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsxs(o.Item,{children:[e.jsx(be,{}),"새 파일",e.jsx(o.Shortcut,{children:"⌘N"})]}),e.jsxs(o.Item,{children:[e.jsx(we,{}),"폴더 열기",e.jsx(o.Shortcut,{children:"⌘O"})]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{children:[e.jsx(N,{}),"복사",e.jsx(o.Shortcut,{children:"⌘C"})]}),e.jsxs(o.Item,{children:["붙여넣기",e.jsx(o.Shortcut,{children:"⌘V"})]})]})]})})]})})},ee={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"라벨과 구분선"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`DropdownMenu.Label\\`와 \\`DropdownMenu.Separator\\`를 사용하여 메뉴를 구조화할 수 있습니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",children:"메뉴 열기"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Label,{className:"text-gray-1 text-sm",children:"내 계정"}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{children:[e.jsx(pe,{}),"프로필"]}),e.jsxs(o.Item,{children:[e.jsx(Ne,{}),"설정"]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{children:[e.jsx(ye,{}),"로그아웃"]})]})]})})]})})},ne={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"그룹화"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`DropdownMenu.Group\\`을 사용하여 관련된 메뉴 항목을 그룹화할 수 있습니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"outlined",color:"secondary",children:"그룹화된 메뉴"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsxs(o.Group,{children:[e.jsx(o.Label,{children:"파일"}),e.jsxs(o.Item,{children:[e.jsx(Qe,{}),"새 파일"]}),e.jsxs(o.Item,{children:[e.jsx(we,{}),"폴더 열기"]})]}),e.jsx(o.Separator,{}),e.jsxs(o.Group,{children:[e.jsx(o.Label,{children:"편집"}),e.jsxs(o.Item,{children:[e.jsx(O,{}),"편집"]}),e.jsxs(o.Item,{children:[e.jsx(N,{}),"복사"]})]})]})]})})]})})},oe={render:()=>{const n=()=>{const[t,r]=d.useState(!0),[a,s]=d.useState(!1),[c,l]=d.useState(!1);return e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"outlined",color:"secondary",children:"체크박스 메뉴"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Label,{children:"표시 옵션"}),e.jsx(o.Separator,{}),e.jsx(o.CheckboxItem,{checked:t,onCheckedChange:r,children:"상태 표시줄"}),e.jsx(o.CheckboxItem,{checked:a,onCheckedChange:s,disabled:!0,children:"활동 표시줄"}),e.jsx(o.CheckboxItem,{checked:c,onCheckedChange:l,children:"패널"})]})]})};return e.jsx(n,{})}},re={render:()=>{const n=()=>{const[t,r]=d.useState("bottom");return e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"outlined",color:"secondary",children:"라디오 메뉴"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Label,{children:"위치"}),e.jsx(o.Separator,{}),e.jsxs(o.RadioGroup,{value:t,onValueChange:r,children:[e.jsx(o.RadioItem,{value:"top",children:"위"}),e.jsx(o.RadioItem,{value:"bottom",children:"아래"}),e.jsx(o.RadioItem,{value:"left",children:"왼쪽"}),e.jsx(o.RadioItem,{value:"right",children:"오른쪽"})]})]})]})};return e.jsx(n,{})}},te={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"서브메뉴"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`DropdownMenu.Sub\\`를 사용하여 중첩된 메뉴를 만들 수 있습니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",children:"서브메뉴 열기"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsxs(o.Item,{children:[e.jsx(be,{}),"새로 만들기"]}),e.jsxs(o.Item,{children:[e.jsx(we,{}),"열기"]}),e.jsx(o.Separator,{}),e.jsxs(o.Sub,{children:[e.jsxs(o.SubTrigger,{children:[e.jsx(Ze,{}),"공유"]}),e.jsxs(o.SubContent,{children:[e.jsxs(o.Item,{children:[e.jsx(N,{}),"링크 복사"]}),e.jsxs(o.Item,{children:[e.jsx(Se,{}),"다운로드"]}),e.jsx(o.Separator,{}),e.jsx(o.Item,{children:"더보기..."})]})]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{variant:"destructive",children:[e.jsx(B,{}),"삭제"]})]})]})})]})})},ae={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"비활성화된 항목"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`disabled\\` prop을 사용하여 메뉴 항목을 비활성화할 수 있습니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"outlined",color:"secondary",children:"메뉴 열기"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Item,{children:"활성화된 항목"}),e.jsx(o.Item,{disabled:!0,children:"비활성화된 항목"}),e.jsx(o.Item,{children:"활성화된 항목"}),e.jsx(o.Separator,{}),e.jsx(o.Item,{disabled:!0,children:"비활성화된 항목"})]})]})})]})})},se={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"위험한 액션"}),e.jsx("p",{className:"text-xs text-gray-500",children:'\\`variant="destructive"\\`를 사용하여 위험한 액션을 강조할 수 있습니다.'}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"outlined",color:"secondary",children:e.jsx(qe,{})})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsxs(o.Item,{children:[e.jsx(O,{}),"편집"]}),e.jsxs(o.Item,{children:[e.jsx(N,{}),"복사"]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{variant:"destructive",children:[e.jsx(B,{}),"삭제"]})]})]})})]})})},de={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Inset 항목"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`inset\\` prop을 사용하여 메뉴 항목을 들여쓰기할 수 있습니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",children:"Inset 메뉴"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Item,{children:"일반 항목"}),e.jsx(o.Item,{inset:!0,children:"들여쓰기된 항목"}),e.jsx(o.Label,{inset:!0,children:"들여쓰기된 라벨"}),e.jsx(o.Item,{inset:!0,children:"들여쓰기된 항목 2"})]})]})})]})})},ce={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"위치별 메뉴"}),e.jsx("p",{className:"text-xs text-gray-500",children:"\\`side\\` prop을 사용하여 드롭다운 메뉴의 위치를 지정할 수 있습니다. (top, bottom, left, right)"}),e.jsxs("div",{className:"flex flex-col items-center gap-12 p-12",children:[e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",children:"위쪽 (top)"})}),e.jsxs(o.Content,{side:"top",className:"w-56",children:[e.jsxs(o.Item,{children:[e.jsx(O,{}),"편집"]}),e.jsxs(o.Item,{children:[e.jsx(N,{}),"복사"]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{variant:"destructive",children:[e.jsx(B,{}),"삭제"]})]})]}),e.jsxs("div",{className:"flex gap-12",children:[e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",children:"왼쪽 (left)"})}),e.jsxs(o.Content,{side:"left",className:"w-56",children:[e.jsxs(o.Item,{children:[e.jsx(pe,{}),"프로필"]}),e.jsxs(o.Item,{children:[e.jsx(Ne,{}),"설정"]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{children:[e.jsx(ye,{}),"로그아웃"]})]})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",children:"오른쪽 (right)"})}),e.jsxs(o.Content,{side:"right",className:"w-56",children:[e.jsxs(o.Item,{children:[e.jsx(Qe,{}),"새 파일"]}),e.jsxs(o.Item,{children:[e.jsx(we,{}),"폴더 열기"]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{children:[e.jsx(Se,{}),"다운로드"]})]})]})]}),e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",children:"아래쪽 (bottom)"})}),e.jsxs(o.Content,{side:"bottom",className:"w-56",children:[e.jsx(o.Label,{children:"옵션"}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{children:[e.jsx(be,{}),"추가"]}),e.jsxs(o.Item,{children:[e.jsx(O,{}),"수정"]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{variant:"destructive",children:[e.jsx(B,{}),"삭제"]})]})]})]})]})})},ie={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"복합 예시"}),e.jsx("p",{className:"text-xs text-gray-500",children:"다양한 기능을 조합한 실제 사용 예시입니다."}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsxs(f,{variant:"filled",color:"primary",children:[e.jsx(pe,{}),"사용자 메뉴"]})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Label,{children:"내 계정"}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{children:[e.jsx(pe,{}),"프로필",e.jsx(o.Shortcut,{children:"⌘P"})]}),e.jsxs(o.Item,{children:[e.jsx(Ne,{}),"설정",e.jsx(o.Shortcut,{children:"⌘S"})]}),e.jsx(o.Separator,{}),e.jsxs(o.Sub,{children:[e.jsxs(o.SubTrigger,{children:[e.jsx(Ze,{}),"공유 옵션"]}),e.jsxs(o.SubContent,{children:[e.jsxs(o.Item,{children:[e.jsx(N,{}),"링크 복사"]}),e.jsxs(o.Item,{children:[e.jsx(Se,{}),"다운로드"]}),e.jsx(o.Item,{disabled:!0,children:"소셜 미디어 (준비중)"})]})]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{variant:"destructive",children:[e.jsx(ye,{}),"로그아웃",e.jsx(o.Shortcut,{children:"⌘Q"})]})]})]})})]})})},le={parameters:{docs:{description:{story:`
Dialog 내부에서 DropdownMenu를 사용할 때, DropdownMenuContent는 자동으로 DialogBody를 collisionBoundary로 인식합니다.
이를 통해 DropdownMenu가 Dialog 영역을 벗어나지 않도록 합니다.

**자동 collisionBoundary 감지**: DropdownMenuContent가 렌더링된 가장 가까운 부모에서 \`data-slot="dialog-body"\`를 가진 요소를 찾아 collisionBoundary로 설정합니다.

**주요 동작**:
- DropdownMenu가 DialogBody 영역을 벗어나지 않도록 자동 위치 조정
- Dialog의 경계 근처에 있는 버튼에 DropdownMenu를 표시해도 Dialog 밖으로 나가지 않음
- 스크롤 가능한 DialogBody 내부에서도 정상 동작
- 서브메뉴도 DialogBody 영역을 벗어나지 않음
        `}}},render:()=>{const n=()=>{Jn.open(t=>e.jsx(C,{overlayControl:t,children:e.jsxs(C.Content,{className:"h-[500px] w-[600px]",children:[e.jsxs(C.Header,{children:[e.jsx(C.Title,{children:"Dialog 내부의 DropdownMenu"}),e.jsx(C.Description,{children:"Dialog 내부에서 DropdownMenu를 사용하면 DialogBody 영역을 벗어나지 않도록 자동으로 위치가 조정됩니다."})]}),e.jsx(C.Body,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("p",{className:"text-gray-700",children:"아래 버튼들을 클릭하면 DropdownMenu가 열립니다. DropdownMenu는 DialogBody 영역을 벗어나지 않습니다."}),e.jsx("div",{className:"mt-10 flex flex-wrap gap-4",children:e.jsx("div",{children:e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(f,{variant:"filled",color:"primary",size:"sm",children:"상단 좌측"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsxs(o.Item,{children:[e.jsx(O,{}),"편집"]}),e.jsxs(o.Item,{children:[e.jsx(N,{}),"복사"]}),e.jsx(o.Separator,{}),e.jsxs(o.Item,{variant:"destructive",children:[e.jsx(B,{}),"삭제"]})]})]})})})]})}),e.jsxs(C.Footer,{children:[e.jsx(C.CancelButton,{children:"취소"}),e.jsx(C.Close,{children:e.jsx(C.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(f,{onClick:n,children:"Dialog 열기 (DropdownMenu 포함)"})}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">기본 드롭다운 메뉴</h3>
        <p className="text-xs text-gray-500">버튼을 클릭하면 드롭다운 메뉴가 표시됩니다.</p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="filled" color="primary">
                메뉴 열기
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Item>프로필</DropdownMenu.Item>
              <DropdownMenu.Item>설정</DropdownMenu.Item>
              <DropdownMenu.Item>로그아웃</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">아이콘과 함께 사용</h3>
        <p className="text-xs text-gray-500">
          메뉴 항목에 아이콘을 추가하여 시각적으로 구분할 수 있습니다.
        </p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="outlined" color="secondary">
                <MoreVerticalIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Item>
                <EditIcon />
                편집
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <CopyIcon />
                복사
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item variant="destructive">
                <Trash2Icon />
                삭제
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">단축키 표시</h3>
        <p className="text-xs text-gray-500">
          \\\`DropdownMenu.Shortcut\\\`을 사용하여 키보드 단축키를 표시할 수 있습니다.
        </p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="filled" color="primary">
                파일 메뉴
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Item>
                <PlusIcon />새 파일
                <DropdownMenu.Shortcut>⌘N</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <FolderIcon />
                폴더 열기
                <DropdownMenu.Shortcut>⌘O</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <CopyIcon />
                복사
                <DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                붙여넣기
                <DropdownMenu.Shortcut>⌘V</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...J.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">라벨과 구분선</h3>
        <p className="text-xs text-gray-500">
          \\\`DropdownMenu.Label\\\`와 \\\`DropdownMenu.Separator\\\`를 사용하여 메뉴를 구조화할 수
          있습니다.
        </p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="filled" color="primary">
                메뉴 열기
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Label className="text-gray-1 text-sm">내 계정</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <UserIcon />
                프로필
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <SettingsIcon />
                설정
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <LogOutIcon />
                로그아웃
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...ee.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">그룹화</h3>
        <p className="text-xs text-gray-500">
          \\\`DropdownMenu.Group\\\`을 사용하여 관련된 메뉴 항목을 그룹화할 수 있습니다.
        </p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="outlined" color="secondary">
                그룹화된 메뉴
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Group>
                <DropdownMenu.Label>파일</DropdownMenu.Label>
                <DropdownMenu.Item>
                  <FileIcon />새 파일
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <FolderIcon />
                  폴더 열기
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
              <DropdownMenu.Group>
                <DropdownMenu.Label>편집</DropdownMenu.Label>
                <DropdownMenu.Item>
                  <EditIcon />
                  편집
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <CopyIcon />
                  복사
                </DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...ne.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  render: () => {
    const CheckboxMenu = () => {
      const [showStatusBar, setShowStatusBar] = React.useState(true);
      const [showActivityBar, setShowActivityBar] = React.useState(false);
      const [showPanel, setShowPanel] = React.useState(false);
      return <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button variant="outlined" color="secondary">
              체크박스 메뉴
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-56">
            <DropdownMenu.Label>표시 옵션</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.CheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
              상태 표시줄
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar} disabled>
              활동 표시줄
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
              패널
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.Content>
        </DropdownMenu>;
    };
    return <CheckboxMenu />;
  }
}`,...oe.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  render: () => {
    const RadioMenu = () => {
      const [position, setPosition] = React.useState('bottom');
      return <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button variant="outlined" color="secondary">
              라디오 메뉴
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-56">
            <DropdownMenu.Label>위치</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.RadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenu.RadioItem value="top">위</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="bottom">아래</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="left">왼쪽</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="right">오른쪽</DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu>;
    };
    return <RadioMenu />;
  }
}`,...re.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">서브메뉴</h3>
        <p className="text-xs text-gray-500">
          \\\`DropdownMenu.Sub\\\`를 사용하여 중첩된 메뉴를 만들 수 있습니다.
        </p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="filled" color="primary">
                서브메뉴 열기
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Item>
                <PlusIcon />
                새로 만들기
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <FolderIcon />
                열기
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>
                  <ShareIcon />
                  공유
                </DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>
                    <CopyIcon />
                    링크 복사
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <DownloadIcon />
                    다운로드
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>더보기...</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
              <DropdownMenu.Separator />
              <DropdownMenu.Item variant="destructive">
                <Trash2Icon />
                삭제
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...te.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">비활성화된 항목</h3>
        <p className="text-xs text-gray-500">
          \\\`disabled\\\` prop을 사용하여 메뉴 항목을 비활성화할 수 있습니다.
        </p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="outlined" color="secondary">
                메뉴 열기
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Item>활성화된 항목</DropdownMenu.Item>
              <DropdownMenu.Item disabled>비활성화된 항목</DropdownMenu.Item>
              <DropdownMenu.Item>활성화된 항목</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item disabled>비활성화된 항목</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...ae.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">위험한 액션</h3>
        <p className="text-xs text-gray-500">
          \\\`variant=&quot;destructive&quot;\\\`를 사용하여 위험한 액션을 강조할 수 있습니다.
        </p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="outlined" color="secondary">
                <MoreVerticalIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Item>
                <EditIcon />
                편집
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <CopyIcon />
                복사
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item variant="destructive">
                <Trash2Icon />
                삭제
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...se.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Inset 항목</h3>
        <p className="text-xs text-gray-500">
          \\\`inset\\\` prop을 사용하여 메뉴 항목을 들여쓰기할 수 있습니다.
        </p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="filled" color="primary">
                Inset 메뉴
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Item>일반 항목</DropdownMenu.Item>
              <DropdownMenu.Item inset>들여쓰기된 항목</DropdownMenu.Item>
              <DropdownMenu.Label inset>들여쓰기된 라벨</DropdownMenu.Label>
              <DropdownMenu.Item inset>들여쓰기된 항목 2</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...de.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">위치별 메뉴</h3>
        <p className="text-xs text-gray-500">
          \\\`side\\\` prop을 사용하여 드롭다운 메뉴의 위치를 지정할 수 있습니다. (top, bottom, left,
          right)
        </p>
        <div className="flex flex-col items-center gap-12 p-12">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="filled" color="primary">
                위쪽 (top)
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content side="top" className="w-56">
              <DropdownMenu.Item>
                <EditIcon />
                편집
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <CopyIcon />
                복사
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item variant="destructive">
                <Trash2Icon />
                삭제
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
          <div className="flex gap-12">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="filled" color="primary">
                  왼쪽 (left)
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content side="left" className="w-56">
                <DropdownMenu.Item>
                  <UserIcon />
                  프로필
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <SettingsIcon />
                  설정
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <LogOutIcon />
                  로그아웃
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="filled" color="primary">
                  오른쪽 (right)
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content side="right" className="w-56">
                <DropdownMenu.Item>
                  <FileIcon />새 파일
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <FolderIcon />
                  폴더 열기
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <DownloadIcon />
                  다운로드
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="filled" color="primary">
                아래쪽 (bottom)
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content side="bottom" className="w-56">
              <DropdownMenu.Label>옵션</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <PlusIcon />
                추가
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <EditIcon />
                수정
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item variant="destructive">
                <Trash2Icon />
                삭제
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...ce.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">복합 예시</h3>
        <p className="text-xs text-gray-500">다양한 기능을 조합한 실제 사용 예시입니다.</p>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="filled" color="primary">
                <UserIcon />
                사용자 메뉴
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Label>내 계정</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <UserIcon />
                프로필
                <DropdownMenu.Shortcut>⌘P</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <SettingsIcon />
                설정
                <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>
                  <ShareIcon />
                  공유 옵션
                </DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>
                    <CopyIcon />
                    링크 복사
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <DownloadIcon />
                    다운로드
                  </DropdownMenu.Item>
                  <DropdownMenu.Item disabled>소셜 미디어 (준비중)</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
              <DropdownMenu.Separator />
              <DropdownMenu.Item variant="destructive">
                <LogOutIcon />
                로그아웃
                <DropdownMenu.Shortcut>⌘Q</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
}`,...ie.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Dialog 내부에서 DropdownMenu를 사용할 때, DropdownMenuContent는 자동으로 DialogBody를 collisionBoundary로 인식합니다.
이를 통해 DropdownMenu가 Dialog 영역을 벗어나지 않도록 합니다.

**자동 collisionBoundary 감지**: DropdownMenuContent가 렌더링된 가장 가까운 부모에서 \\\`data-slot="dialog-body"\\\`를 가진 요소를 찾아 collisionBoundary로 설정합니다.

**주요 동작**:
- DropdownMenu가 DialogBody 영역을 벗어나지 않도록 자동 위치 조정
- Dialog의 경계 근처에 있는 버튼에 DropdownMenu를 표시해도 Dialog 밖으로 나가지 않음
- 스크롤 가능한 DialogBody 내부에서도 정상 동작
- 서브메뉴도 DialogBody 영역을 벗어나지 않음
        \`
      }
    }
  },
  render: () => {
    const handleOpen = () => {
      overlay.open(overlayControl => <Dialog overlayControl={overlayControl}>
          <Dialog.Content className="h-[500px] w-[600px]">
            <Dialog.Header>
              <Dialog.Title>Dialog 내부의 DropdownMenu</Dialog.Title>
              <Dialog.Description>
                Dialog 내부에서 DropdownMenu를 사용하면 DialogBody 영역을 벗어나지 않도록 자동으로
                위치가 조정됩니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <div className="flex flex-col gap-4">
                <p className="text-gray-700">
                  아래 버튼들을 클릭하면 DropdownMenu가 열립니다. DropdownMenu는 DialogBody 영역을
                  벗어나지 않습니다.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <div>
                    <DropdownMenu>
                      <DropdownMenu.Trigger asChild>
                        <Button variant="filled" color="primary" size="sm">
                          상단 좌측
                        </Button>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content className="w-56">
                        <DropdownMenu.Item>
                          <EditIcon />
                          편집
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                          <CopyIcon />
                          복사
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item variant="destructive">
                          <Trash2Icon />
                          삭제
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu>
                  </div>
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
    return <Button onClick={handleOpen}>Dialog 열기 (DropdownMenu 포함)</Button>;
  }
}`,...le.parameters?.docs?.source}}};const It=["기본메뉴","아이콘과함께","단축키표시","라벨과구분선","그룹화","체크박스아이템","라디오아이템","서브메뉴","비활성화항목","위험한액션","Inset항목","위치별메뉴","복합예시","다이얼로그내부"];export{de as Inset항목,It as __namedExportsOrder,jt as default,ne as 그룹화,Q as 기본메뉴,le as 다이얼로그내부,J as 단축키표시,re as 라디오아이템,ee as 라벨과구분선,ie as 복합예시,ae as 비활성화항목,te as 서브메뉴,Z as 아이콘과함께,ce as 위치별메뉴,se as 위험한액션,oe as 체크박스아이템};
