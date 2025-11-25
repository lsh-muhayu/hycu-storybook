import{j as e}from"./iframe-CdF_1z1V.js";import{c as L}from"./index-DOOMdwi9.js";import{c}from"./cn-CPGtsWvz.js";import{c as t}from"./createLucideIcon-C00fj4U-.js";import{D as h}from"./download-CRO9HHbI.js";import"./preload-helper-PPVm8Dsz.js";const g=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],f=t("arrow-right",g);const y=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],B=t("external-link",y);const v=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],N=t("refresh-ccw",v),j=L(c("inline-flex items-center justify-center gap-1 transition-colors outline-none not-disabled:cursor-pointer not-disabled:hover:underline not-disabled:focus-visible:underline",'disabled:opacity-50 not-[aria-busy="true"]:disabled:cursor-not-allowed',"aria-busy:cursor-progress"),{variants:{color:{primary:"text-blue-600 hover:text-blue-800 focus-visible:text-blue-800",secondary:"text-gray-600 hover:text-gray-800 focus-visible:text-gray-800",danger:"text-red-600 hover:text-red-800 focus-visible:text-red-800",success:"text-green-600 hover:text-green-800 focus-visible:text-green-800",warning:"text-yellow-600 hover:text-yellow-800 focus-visible:text-yellow-800",purple:"text-purple-600 hover:text-purple-800 focus-visible:text-purple-800"},size:{xs:"text-xs",sm:"text-sm"}},defaultVariants:{color:"primary",size:"sm"}}),n=d=>{const{type:m="button",color:x="primary",size:p="sm",className:u,...k}=d;return e.jsx("button",{className:c(j({color:x,size:p}),u),type:m,...k})};n.__docgenInfo={description:"",methods:[],displayName:"LinkButton",composes:["Omit","VariantProps"]};const I={title:"Shared/UI/LinkButton",component:n,parameters:{layout:"centered",docs:{description:{component:`
### 링크처럼 보이는 버튼 컴포넌트

LinkButton 컴포넌트는 버튼처럼 클릭 가능하지만 링크처럼 보이는 UI 요소입니다. 
텍스트 링크 스타일을 유지하면서 버튼의 기능을 제공합니다.

## 주요 기능

- **여러 색상 옵션**: \`primary\`, \`secondary\`, \`danger\`, \`success\`, \`warning\`, \`purple\` 색상 지원
- **크기 옵션**: \`xs\` (초소형), \`sm\` (작은 크기) 두 가지 크기 지원
- **호버 효과**: 마우스 오버 시 밑줄 표시 및 색상 변경
- **버튼 기능**: 버튼 요소로 구현되어 클릭 이벤트 처리 가능
- **간결한 디자인**: 텍스트 링크 스타일로 깔끔한 UI 제공

## 사용 예시

\`\`\`tsx
<LinkButton color="primary" onClick={() => console.log('clicked')}>
  링크 버튼
</LinkButton>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning","purple"],description:"링크 버튼의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'purple'"},defaultValue:{summary:"'primary'"}}},size:{control:"select",options:["xs","sm"],description:"링크 버튼의 크기",table:{type:{summary:"'xs' | 'sm'"},defaultValue:{summary:"'sm'"}}},disabled:{control:"boolean",description:"링크 버튼 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:"text",description:"링크 버튼에 표시할 텍스트",table:{type:{summary:"ReactNode"}}}}},s={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 LinkButton 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, disabled 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 링크 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 삭제나 위험한 작업에 사용, `success`는 성공적인 작업에 사용).\n- **Size**: 링크 버튼의 크기를 조정합니다. `xs`는 초소형, `sm`은 작은 크기입니다.\n- **Disabled**: `true`로 설정하면 링크 버튼이 비활성화됩니다.\n        "}}},args:{children:"LinkButton",color:"primary",size:"sm"}},r={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"All Colors"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{color:"primary",children:"Primary Link"}),e.jsx(n,{color:"secondary",children:"Secondary Link"}),e.jsx(n,{color:"danger",children:"Danger Link"}),e.jsx(n,{color:"success",children:"Success Link"}),e.jsx(n,{color:"warning",children:"Warning Link"}),e.jsx(n,{color:"purple",children:"Purple Link"})]})]})})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Extra Small Size (xs)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{color:"primary",size:"xs",children:"Extra Small Link"}),e.jsx(n,{color:"secondary",size:"xs",children:"Extra Small Link"}),e.jsx(n,{color:"danger",size:"xs",children:"Extra Small Link"}),e.jsx(n,{color:"success",size:"xs",children:"Extra Small Link"}),e.jsx(n,{color:"warning",size:"xs",children:"Extra Small Link"}),e.jsx(n,{color:"purple",size:"xs",children:"Extra Small Link"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Small Size (sm)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{color:"primary",size:"sm",children:"Small Link"}),e.jsx(n,{color:"secondary",size:"sm",children:"Small Link"}),e.jsx(n,{color:"danger",size:"sm",children:"Small Link"}),e.jsx(n,{color:"success",size:"sm",children:"Small Link"}),e.jsx(n,{color:"warning",size:"sm",children:"Small Link"}),e.jsx(n,{color:"purple",size:"sm",children:"Small Link"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Size Comparison"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(n,{color:"primary",size:"xs",children:"Extra Small Link"}),e.jsx(n,{color:"primary",size:"sm",children:"Small Link"})]})]})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Normal"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(n,{color:"primary",children:"Normal Link"}),e.jsx(n,{color:"secondary",children:"Normal Link"}),e.jsx(n,{color:"danger",children:"Normal Link"}),e.jsx(n,{color:"purple",children:"Normal Link"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Disabled"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(n,{color:"primary",disabled:!0,children:"Disabled Link"}),e.jsx(n,{color:"secondary",disabled:!0,children:"Disabled Link"}),e.jsx(n,{color:"danger",disabled:!0,children:"Disabled Link"}),e.jsx(n,{color:"purple",disabled:!0,children:"Disabled Link"})]})]})]})},i={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"With Icons"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(n,{color:"primary",children:[e.jsx(B,{className:"size-4"}),"외부 링크"]}),e.jsxs(n,{color:"secondary",children:["더 보기",e.jsx(f,{className:"size-4"})]}),e.jsxs(n,{color:"success",children:[e.jsx(h,{className:"size-4"}),"다운로드"]})]})]})})},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(n,{color:"primary",size:"xs",children:"수정"}),e.jsx(n,{color:"danger",size:"xs",children:"삭제"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(n,{color:"primary",size:"sm",children:"상세보기"}),e.jsx(n,{color:"purple",size:"sm",children:"수정"}),e.jsx(n,{color:"success",size:"sm",children:"복사"}),e.jsx(n,{color:"danger",size:"sm",children:"삭제"})]}),e.jsx("div",{className:"flex gap-4",children:e.jsxs(n,{color:"primary",size:"xs",children:[e.jsx(N,{className:"size-3"}),"기관계 시스템에서 다시 불러오기"]})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{color:"secondary",size:"xs",children:"↑"}),e.jsx(n,{color:"secondary",size:"xs",children:"↓"}),e.jsx(n,{color:"danger",size:"xs",children:"삭제"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 LinkButton 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 color, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Color**: 링크 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`danger\\\`는 삭제나 위험한 작업에 사용, \\\`success\\\`는 성공적인 작업에 사용).
- **Size**: 링크 버튼의 크기를 조정합니다. \\\`xs\\\`는 초소형, \\\`sm\\\`은 작은 크기입니다.
- **Disabled**: \\\`true\\\`로 설정하면 링크 버튼이 비활성화됩니다.
        \`
      }
    }
  },
  args: {
    children: 'LinkButton',
    color: 'primary',
    size: 'sm'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">All Colors</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton color="primary">Primary Link</LinkButton>
          <LinkButton color="secondary">Secondary Link</LinkButton>
          <LinkButton color="danger">Danger Link</LinkButton>
          <LinkButton color="success">Success Link</LinkButton>
          <LinkButton color="warning">Warning Link</LinkButton>
          <LinkButton color="purple">Purple Link</LinkButton>
        </div>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Extra Small Size (xs)</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton color="primary" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="secondary" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="danger" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="success" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="warning" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="purple" size="xs">
            Extra Small Link
          </LinkButton>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Small Size (sm)</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton color="primary" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="secondary" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="danger" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="success" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="warning" size="sm">
            Small Link
          </LinkButton>
          <LinkButton color="purple" size="sm">
            Small Link
          </LinkButton>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Size Comparison</h3>
        <div className="flex flex-wrap items-center gap-4">
          <LinkButton color="primary" size="xs">
            Extra Small Link
          </LinkButton>
          <LinkButton color="primary" size="sm">
            Small Link
          </LinkButton>
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Normal</h3>
        <div className="flex gap-4">
          <LinkButton color="primary">Normal Link</LinkButton>
          <LinkButton color="secondary">Normal Link</LinkButton>
          <LinkButton color="danger">Normal Link</LinkButton>
          <LinkButton color="purple">Normal Link</LinkButton>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Disabled</h3>
        <div className="flex gap-4">
          <LinkButton color="primary" disabled>
            Disabled Link
          </LinkButton>
          <LinkButton color="secondary" disabled>
            Disabled Link
          </LinkButton>
          <LinkButton color="danger" disabled>
            Disabled Link
          </LinkButton>
          <LinkButton color="purple" disabled>
            Disabled Link
          </LinkButton>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <LinkButton color="primary">
            <ExternalLinkIcon className="size-4" />
            외부 링크
          </LinkButton>
          <LinkButton color="secondary">
            더 보기
            <ArrowRightIcon className="size-4" />
          </LinkButton>
          <LinkButton color="success">
            <DownloadIcon className="size-4" />
            다운로드
          </LinkButton>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <LinkButton color="primary" size="xs">
          수정
        </LinkButton>
        <LinkButton color="danger" size="xs">
          삭제
        </LinkButton>
      </div>
      <div className="flex gap-4">
        <LinkButton color="primary" size="sm">
          상세보기
        </LinkButton>
        <LinkButton color="purple" size="sm">
          수정
        </LinkButton>
        <LinkButton color="success" size="sm">
          복사
        </LinkButton>
        <LinkButton color="danger" size="sm">
          삭제
        </LinkButton>
      </div>
      <div className="flex gap-4">
        <LinkButton color="primary" size="xs">
          <RefreshCcwIcon className="size-3" />
          기관계 시스템에서 다시 불러오기
        </LinkButton>
      </div>
      <div className="flex gap-2">
        <LinkButton color="secondary" size="xs">
          ↑
        </LinkButton>
        <LinkButton color="secondary" size="xs">
          ↓
        </LinkButton>
        <LinkButton color="danger" size="xs">
          삭제
        </LinkButton>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const C=["Playground","Colors","Sizes","States","WithIcons","Examples"];export{r as Colors,a as Examples,s as Playground,l as Sizes,o as States,i as WithIcons,C as __namedExportsOrder,I as default};
