import{r as x,j as e,e as G,a as y}from"./iframe-B14tFzIM.js";import{u as k}from"./index-D9rdF90-.js";import{a as K,b as j,P as O,d as w}from"./index-CmHaRtFw.js";import{c as A,I as W,R as q}from"./index-CnjF4YRp.js";import{u as z}from"./index-8v0WkQr9.js";import{u as H}from"./index-BEZKKpIG.js";import{u as U}from"./index-CoQBrwdB.js";import{T as V}from"./Textarea-Bu1UFCbj.js";import{I as p}from"./Input-DdOduTbP.js";import{B as u}from"./Button-D9mshCdM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZigr0zA.js";var C="Tabs",[J]=K(C,[A]),F=A(),[Q,I]=J(C),L=x.forwardRef((t,s)=>{const{__scopeTabs:r,value:n,onValueChange:i,defaultValue:o,orientation:l="horizontal",dir:d,activationMode:g="automatic",...v}=t,m=z(d),[c,b]=H({prop:n,onChange:i,defaultProp:o??"",caller:C});return e.jsx(Q,{scope:r,baseId:U(),value:c,onValueChange:b,orientation:l,dir:m,activationMode:g,children:e.jsx(j.div,{dir:m,"data-orientation":l,...v,ref:s})})});L.displayName=C;var P="TabsList",S=x.forwardRef((t,s)=>{const{__scopeTabs:r,loop:n=!0,...i}=t,o=I(P,r),l=F(r);return e.jsx(q,{asChild:!0,...l,orientation:o.orientation,dir:o.dir,loop:n,children:e.jsx(j.div,{role:"tablist","aria-orientation":o.orientation,...i,ref:s})})});S.displayName=P;var B="TabsTrigger",R=x.forwardRef((t,s)=>{const{__scopeTabs:r,value:n,disabled:i=!1,...o}=t,l=I(B,r),d=F(r),g=M(l.baseId,n),v=$(l.baseId,n),m=n===l.value;return e.jsx(W,{asChild:!0,...d,focusable:!i,active:m,children:e.jsx(j.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":v,"data-state":m?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:g,...o,ref:s,onMouseDown:w(t.onMouseDown,c=>{!i&&c.button===0&&c.ctrlKey===!1?l.onValueChange(n):c.preventDefault()}),onKeyDown:w(t.onKeyDown,c=>{[" ","Enter"].includes(c.key)&&l.onValueChange(n)}),onFocus:w(t.onFocus,()=>{const c=l.activationMode!=="manual";!m&&!i&&c&&l.onValueChange(n)})})})});R.displayName=B;var _="TabsContent",E=x.forwardRef((t,s)=>{const{__scopeTabs:r,value:n,forceMount:i,children:o,...l}=t,d=I(_,r),g=M(d.baseId,n),v=$(d.baseId,n),m=n===d.value,c=x.useRef(m);return x.useEffect(()=>{const b=requestAnimationFrame(()=>c.current=!1);return()=>cancelAnimationFrame(b)},[]),e.jsx(O,{present:i||m,children:({present:b})=>e.jsx(j.div,{"data-state":m?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":g,hidden:!b,id:v,tabIndex:0,...l,ref:s,style:{...t.style,animationDuration:c.current?"0s":void 0},children:b&&o})})});E.displayName=_;function M(t,s){return`${t}-trigger-${s}`}function $(t,s){return`${t}-content-${s}`}var X=L,Y=S,Z=R,ee=E;const[ae,te]=G("TabsContext"),D=t=>{const{defaultValue:s="",value:r,onValueChange:n,className:i,...o}=t,[l,d]=k({defaultValue:s,value:r,onChange:n});return e.jsx(ae,{value:l,onValueChange:d,children:e.jsx(X,{defaultValue:s,value:l,onValueChange:d,className:y("w-full",i),...o})})},se=t=>{const{className:s,...r}=t;return e.jsx(Y,{className:y("inline-flex w-full items-center border-b-2 text-gray-200",s),...r})},ne=t=>{const{value:s,className:r,...n}=t;return e.jsx(Z,{value:s,className:y("-mb-0.5 inline-flex cursor-pointer items-center justify-center border-b-2 border-transparent px-6 py-3 whitespace-nowrap","hover:text-primary font-bold text-gray-500 transition-all","ring-offset-white outline-none focus-visible:ring-1 focus-visible:ring-gray-950","disabled:pointer-events-none disabled:opacity-50","data-[state=active]:text-primary data-[state=active]:border-primary",r),...n})},re=t=>{const{value:s,className:r,...n}=t,{value:i}=te(),o=i===s;return e.jsx(x.Activity,{name:s,mode:o?"visible":"hidden",children:e.jsx(ee,{value:s,className:y("mt-5 ring-offset-white focus-visible:ring-offset-2 focus-visible:outline-none",r),...n})})},a=Object.assign(D,{List:se,Trigger:ne,Content:re});D.__docgenInfo={description:"",methods:[],displayName:"TabsRoot"};const fe={title:"Shared/UI/Tabs",component:a,parameters:{layout:"padded",docs:{description:{component:`
### 탭 컴포넌트

Tabs 컴포넌트는 여러 콘텐츠를 탭으로 구분하여 표시하는 컴포넌트입니다.
React 19.2의 Activity 컴포넌트를 사용하여 숨겨진 탭의 상태를 유지합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Tabs\`, \`Tabs.List\`, \`Tabs.Trigger\`, \`Tabs.Content\`로 구성
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 지원
- **상태 유지**: Activity 컴포넌트를 사용하여 숨겨진 탭의 내부 상태 유지
- **제어 가능**: \`value\`와 \`onValueChange\`를 통한 제어 컴포넌트 지원
- **비제어 가능**: \`defaultValue\`를 통한 비제어 컴포넌트 지원
- **커스터마이징**: \`className\`을 통해 각 부분의 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">탭 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">탭 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">
    <div>탭 1의 내용</div>
  </Tabs.Content>
  <Tabs.Content value="tab2">
    <div>탭 2의 내용</div>
  </Tabs.Content>
</Tabs>
\`\`\`
        `}}},tags:["autodocs"]},f={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Tabs 컴포넌트의 기본 사용법을 확인할 수 있습니다.
탭을 클릭하여 다른 콘텐츠로 전환해보세요. Activity 컴포넌트를 사용하여 각 탭의 상태가 유지됩니다.
        `}}},render:()=>e.jsxs(a,{defaultValue:"tab1",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"전체"}),e.jsx(a.Trigger,{value:"tab2",children:"진행중"}),e.jsx(a.Trigger,{value:"tab3",children:"완료"}),e.jsx(a.Trigger,{value:"tab4",children:"보류"})]}),e.jsx(a.Content,{value:"tab1",children:e.jsx("div",{className:"p-4",children:"전체 내용을 보여줍니다."})}),e.jsx(a.Content,{value:"tab2",children:e.jsx("div",{className:"p-4",children:e.jsx(V,{placeholder:"진행중 내용을 입력하세요",rows:10})})}),e.jsx(a.Content,{value:"tab3",children:e.jsx("div",{className:"p-4",children:"완료 내용을 보여줍니다."})}),e.jsx(a.Content,{value:"tab4",children:e.jsx("div",{className:"p-4",children:"보류 내용을 보여줍니다."})})]})},T={render:()=>e.jsx("div",{className:"flex w-full max-w-2xl flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본 탭"}),e.jsxs(a,{defaultValue:"tab1",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"tab1",children:"탭 1"}),e.jsx(a.Trigger,{value:"tab2",children:"탭 2"}),e.jsx(a.Trigger,{value:"tab3",children:"탭 3"})]}),e.jsx(a.Content,{value:"tab1",children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"text-sm text-gray-600",children:"탭 1의 내용입니다."})})}),e.jsx(a.Content,{value:"tab2",children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"text-sm text-gray-600",children:"탭 2의 내용입니다."})})}),e.jsx(a.Content,{value:"tab3",children:e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"text-sm text-gray-600",children:"탭 3의 내용입니다."})})})]})]})})},h={render:()=>e.jsx("div",{className:"flex w-full max-w-2xl flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"폼과 함께 사용 (상태 유지 - Activity 컴포넌트)"}),e.jsx("p",{className:"text-xs text-gray-500",children:"각 탭의 입력 내용이 Activity 컴포넌트를 통해 유지됩니다. 탭을 전환해도 입력한 내용이 사라지지 않습니다."}),e.jsxs(a,{defaultValue:"personal",children:[e.jsxs(a.List,{children:[e.jsx(a.Trigger,{value:"personal",children:"개인정보"}),e.jsx(a.Trigger,{value:"account",children:"계정정보"}),e.jsx(a.Trigger,{value:"settings",children:"설정"})]}),e.jsx(a.Content,{value:"personal",children:e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"name",className:"text-sm font-medium text-gray-700",children:"이름"}),e.jsx(p,{id:"name",placeholder:"이름을 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium text-gray-700",children:"이메일"}),e.jsx(p,{id:"email",type:"email",placeholder:"이메일을 입력하세요"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(u,{variant:"filled",color:"primary",children:"저장"}),e.jsx(u,{variant:"outlined",color:"secondary",children:"취소"})]})]})}),e.jsx(a.Content,{value:"account",children:e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"username",className:"text-sm font-medium text-gray-700",children:"사용자명"}),e.jsx(p,{id:"username",placeholder:"사용자명을 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-medium text-gray-700",children:"비밀번호"}),e.jsx(p,{id:"password",type:"password",placeholder:"비밀번호를 입력하세요"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(u,{variant:"filled",color:"primary",children:"저장"}),e.jsx(u,{variant:"outlined",color:"secondary",children:"취소"})]})]})}),e.jsx(a.Content,{value:"settings",children:e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"notifications",className:"text-sm font-medium text-gray-700",children:"알림 설정"}),e.jsx(V,{id:"notifications",placeholder:"알림 설정을 입력하세요",rows:5})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(u,{variant:"filled",color:"primary",children:"저장"}),e.jsx(u,{variant:"outlined",color:"secondary",children:"취소"})]})]})})]})]})})},N={render:()=>e.jsxs("div",{className:"flex w-full max-w-2xl flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"커스텀 스타일링"}),e.jsx("p",{className:"text-xs text-gray-500",children:"className을 사용하여 탭의 스타일을 커스터마이징할 수 있습니다."})]}),e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(a,{defaultValue:"tab1",children:[e.jsxs(a.List,{className:"gap-2 border-none bg-transparent",children:[e.jsx(a.Trigger,{value:"tab1",className:"data-[state=active]:border-primary data-[state=active]:bg-primary rounded-full border-2 border-gray-300 bg-white px-4 py-2 data-[state=active]:text-white",children:"카드 스타일"}),e.jsx(a.Trigger,{value:"tab2",className:"data-[state=active]:border-primary data-[state=active]:bg-primary rounded-full border-2 border-gray-300 bg-white px-4 py-2 data-[state=active]:text-white",children:"리스트 스타일"}),e.jsx(a.Trigger,{value:"tab3",className:"data-[state=active]:border-primary data-[state=active]:bg-primary rounded-full border-2 border-gray-300 bg-white px-4 py-2 data-[state=active]:text-white",children:"그리드 스타일"})]}),e.jsx(a.Content,{value:"tab1",className:"mt-4",children:e.jsx("div",{className:"rounded-lg border border-gray-200 bg-white p-6 shadow-sm",children:e.jsx("p",{className:"text-sm text-gray-600",children:"카드 스타일 콘텐츠입니다."})})}),e.jsx(a.Content,{value:"tab2",className:"mt-4",children:e.jsx("div",{className:"rounded-lg border border-gray-200 bg-white p-6 shadow-sm",children:e.jsx("p",{className:"text-sm text-gray-600",children:"리스트 스타일 콘텐츠입니다."})})}),e.jsx(a.Content,{value:"tab3",className:"mt-4",children:e.jsx("div",{className:"rounded-lg border border-gray-200 bg-white p-6 shadow-sm",children:e.jsx("p",{className:"text-sm text-gray-600",children:"그리드 스타일 콘텐츠입니다."})})})]})})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Tabs 컴포넌트의 기본 사용법을 확인할 수 있습니다.
탭을 클릭하여 다른 콘텐츠로 전환해보세요. Activity 컴포넌트를 사용하여 각 탭의 상태가 유지됩니다.
        \`
      }
    }
  },
  render: () => <Tabs defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">전체</Tabs.Trigger>
        <Tabs.Trigger value="tab2">진행중</Tabs.Trigger>
        <Tabs.Trigger value="tab3">완료</Tabs.Trigger>
        <Tabs.Trigger value="tab4">보류</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <div className="p-4">전체 내용을 보여줍니다.</div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <div className="p-4">
          <Textarea placeholder="진행중 내용을 입력하세요" rows={10} />
        </div>
      </Tabs.Content>
      <Tabs.Content value="tab3">
        <div className="p-4">완료 내용을 보여줍니다.</div>
      </Tabs.Content>
      <Tabs.Content value="tab4">
        <div className="p-4">보류 내용을 보여줍니다.</div>
      </Tabs.Content>
    </Tabs>
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-2xl flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">기본 탭</h3>
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Trigger value="tab1">탭 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">탭 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3">탭 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">
            <div className="p-4">
              <p className="text-sm text-gray-600">탭 1의 내용입니다.</p>
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <div className="p-4">
              <p className="text-sm text-gray-600">탭 2의 내용입니다.</p>
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab3">
            <div className="p-4">
              <p className="text-sm text-gray-600">탭 3의 내용입니다.</p>
            </div>
          </Tabs.Content>
        </Tabs>
      </div>
    </div>
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-2xl flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">
          폼과 함께 사용 (상태 유지 - Activity 컴포넌트)
        </h3>
        <p className="text-xs text-gray-500">
          각 탭의 입력 내용이 Activity 컴포넌트를 통해 유지됩니다. 탭을 전환해도 입력한 내용이
          사라지지 않습니다.
        </p>
        <Tabs defaultValue="personal">
          <Tabs.List>
            <Tabs.Trigger value="personal">개인정보</Tabs.Trigger>
            <Tabs.Trigger value="account">계정정보</Tabs.Trigger>
            <Tabs.Trigger value="settings">설정</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="personal">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  이름
                </label>
                <Input id="name" placeholder="이름을 입력하세요" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  이메일
                </label>
                <Input id="email" type="email" placeholder="이메일을 입력하세요" />
              </div>
              <div className="flex gap-2">
                <Button variant="filled" color="primary">
                  저장
                </Button>
                <Button variant="outlined" color="secondary">
                  취소
                </Button>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content value="account">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-sm font-medium text-gray-700">
                  사용자명
                </label>
                <Input id="username" placeholder="사용자명을 입력하세요" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  비밀번호
                </label>
                <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
              </div>
              <div className="flex gap-2">
                <Button variant="filled" color="primary">
                  저장
                </Button>
                <Button variant="outlined" color="secondary">
                  취소
                </Button>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content value="settings">
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="notifications" className="text-sm font-medium text-gray-700">
                  알림 설정
                </label>
                <Textarea id="notifications" placeholder="알림 설정을 입력하세요" rows={5} />
              </div>
              <div className="flex gap-2">
                <Button variant="filled" color="primary">
                  저장
                </Button>
                <Button variant="outlined" color="secondary">
                  취소
                </Button>
              </div>
            </div>
          </Tabs.Content>
        </Tabs>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-full max-w-2xl flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">커스텀 스타일링</h3>
        <p className="text-xs text-gray-500">
          className을 사용하여 탭의 스타일을 커스터마이징할 수 있습니다.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Tabs defaultValue="tab1">
          <Tabs.List className="gap-2 border-none bg-transparent">
            <Tabs.Trigger value="tab1" className="data-[state=active]:border-primary data-[state=active]:bg-primary rounded-full border-2 border-gray-300 bg-white px-4 py-2 data-[state=active]:text-white">
              카드 스타일
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2" className="data-[state=active]:border-primary data-[state=active]:bg-primary rounded-full border-2 border-gray-300 bg-white px-4 py-2 data-[state=active]:text-white">
              리스트 스타일
            </Tabs.Trigger>
            <Tabs.Trigger value="tab3" className="data-[state=active]:border-primary data-[state=active]:bg-primary rounded-full border-2 border-gray-300 bg-white px-4 py-2 data-[state=active]:text-white">
              그리드 스타일
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1" className="mt-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-600">카드 스타일 콘텐츠입니다.</p>
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab2" className="mt-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-600">리스트 스타일 콘텐츠입니다.</p>
            </div>
          </Tabs.Content>
          <Tabs.Content value="tab3" className="mt-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-600">그리드 스타일 콘텐츠입니다.</p>
            </div>
          </Tabs.Content>
        </Tabs>
      </div>
    </div>
}`,...N.parameters?.docs?.source}}};const Te=["Playground","Basic","WithForm","CustomStyling"];export{T as Basic,N as CustomStyling,f as Playground,h as WithForm,Te as __namedExportsOrder,fe as default};
