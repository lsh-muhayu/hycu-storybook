import{c as o,j as e,a as t,b as p}from"./iframe-BP1alvHm.js";import"./preload-helper-PPVm8Dsz.js";const f=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],B=o("graduation-cap",f);const h=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],y=o("shield-check",h);const j=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],N=o("user",j),z=p("inline-flex size-fit items-center justify-center gap-1",{variants:{color:{primary:"bg-blue-100 text-blue-700",secondary:"bg-gray-100 text-gray-800",success:"bg-green-100 text-green-700",warning:"bg-yellow-100 text-yellow-700",danger:"bg-red-100 text-red-700",purple:"bg-purple-100 text-purple-800"},rounded:{sm:"rounded-sm",full:"rounded-full"},size:{xs:"px-1.5 py-0.5 text-xs",sm:"px-2 py-1 text-xs",md:"px-3 py-1 text-sm",lg:"px-3 py-1.5 text-base"}},defaultVariants:{color:"primary",rounded:"sm",size:"sm"}}),s=c=>{const{color:i="primary",rounded:m="sm",size:g="sm",className:x,...u}=c;return e.jsx("span",{className:t(z({color:i,rounded:m,size:g,className:x})),...u})};s.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["Omit","VariantProps"]};const w={title:"Shared/UI/Badge",component:s,parameters:{layout:"centered",docs:{description:{component:'\n### 상태나 카테고리를 표시하는 배지 컴포넌트\n\n배지 컴포넌트는 상태, 카테고리, 라벨 등을 시각적으로 표시하는 데 사용됩니다. 다양한 색상과 모양을 지원합니다.\n\n## 주요 기능\n\n- **여러 색상 옵션**: `primary`, `secondary`, `success`, `warning`, `danger`, `purple` 색상 지원\n- **모양 옵션**: `sm` (작은 둥근 모서리), `full` (완전히 둥근 모양) 두 가지 모양 지원\n- **크기 옵션**: `xs` (초소형), `sm` (작은 크기), `md` (중간 크기), `lg` (큰 크기) 네 가지 크기 지원\n- **간결한 디자인**: 작은 크기로 정보를 간결하게 표시\n\n## 사용 예시\n\n```tsx\n<Badge color="primary" rounded="sm">\n  새 메시지\n</Badge>\n```\n        '}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","danger","purple"],description:"배지의 색상",table:{type:{summary:"'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'purple'"},defaultValue:{summary:"'primary'"}}},rounded:{control:"select",options:["sm","full"],description:"배지의 모서리 둥글기",table:{type:{summary:"'sm' | 'full'"},defaultValue:{summary:"'sm'"}}},size:{control:"select",options:["xs","sm","md","lg"],description:"배지의 크기",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'sm'"}}},children:{control:"text",description:"배지에 표시할 텍스트",table:{type:{summary:"ReactNode"}}}}},l={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Badge 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, rounded 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 배지의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `success`는 성공 상태, `danger`는 위험 상태).\n- **Rounded**: 배지의 모서리 둥글기를 조정합니다. `sm`은 작은 둥근 모서리, `full`은 완전히 둥근 모양입니다.\n- **Size**: 배지의 크기를 조정합니다. `xs`는 초소형, `sm`은 작은 크기, `md`는 중간 크기, `lg`는 큰 크기입니다.\n        "}}},args:{children:"Badge",color:"primary",rounded:"sm",size:"sm"}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"All Colors (rounded: sm)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{color:"primary",rounded:"sm",children:"Primary"}),e.jsx(s,{color:"secondary",rounded:"sm",children:"Secondary"}),e.jsx(s,{color:"success",rounded:"sm",children:"Success"}),e.jsx(s,{color:"warning",rounded:"sm",children:"Warning"}),e.jsx(s,{color:"danger",rounded:"sm",children:"Danger"}),e.jsx(s,{color:"purple",rounded:"sm",children:"Purple"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"All Colors (rounded: full)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{color:"primary",rounded:"full",children:"Primary"}),e.jsx(s,{color:"secondary",rounded:"full",children:"Secondary"}),e.jsx(s,{color:"success",rounded:"full",children:"Success"}),e.jsx(s,{color:"warning",rounded:"full",children:"Warning"}),e.jsx(s,{color:"danger",rounded:"full",children:"Danger"}),e.jsx(s,{color:"purple",rounded:"full",children:"Purple"})]})]})]})},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Small Rounded (sm)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{color:"primary",rounded:"sm",children:"Small Rounded"}),e.jsx(s,{color:"secondary",rounded:"sm",children:"Small Rounded"}),e.jsx(s,{color:"success",rounded:"sm",children:"Small Rounded"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Full Rounded (full)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{color:"primary",rounded:"full",children:"Full Rounded"}),e.jsx(s,{color:"secondary",rounded:"full",children:"Full Rounded"}),e.jsx(s,{color:"success",rounded:"full",children:"Full Rounded"})]})]})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Extra Small Size (xs)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{color:"primary",size:"xs",children:"Extra Small"}),e.jsx(s,{color:"secondary",size:"xs",children:"Extra Small"}),e.jsx(s,{color:"success",size:"xs",children:"Extra Small"}),e.jsx(s,{color:"warning",size:"xs",children:"Extra Small"}),e.jsx(s,{color:"danger",size:"xs",children:"Extra Small"}),e.jsx(s,{color:"purple",size:"xs",children:"Extra Small"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Small Size (sm)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{color:"primary",size:"sm",children:"Small"}),e.jsx(s,{color:"secondary",size:"sm",children:"Small"}),e.jsx(s,{color:"success",size:"sm",children:"Small"}),e.jsx(s,{color:"warning",size:"sm",children:"Small"}),e.jsx(s,{color:"danger",size:"sm",children:"Small"}),e.jsx(s,{color:"purple",size:"sm",children:"Small"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Medium Size (md)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{color:"primary",size:"md",children:"Medium"}),e.jsx(s,{color:"secondary",size:"md",children:"Medium"}),e.jsx(s,{color:"success",size:"md",children:"Medium"}),e.jsx(s,{color:"warning",size:"md",children:"Medium"}),e.jsx(s,{color:"danger",size:"md",children:"Medium"}),e.jsx(s,{color:"purple",size:"md",children:"Medium"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Large Size (lg)"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{color:"primary",size:"lg",children:"Large"}),e.jsx(s,{color:"secondary",size:"lg",children:"Large"}),e.jsx(s,{color:"success",size:"lg",children:"Large"}),e.jsx(s,{color:"warning",size:"lg",children:"Large"}),e.jsx(s,{color:"danger",size:"lg",children:"Large"}),e.jsx(s,{color:"purple",size:"lg",children:"Large"})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Size Comparison"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(s,{color:"primary",size:"xs",children:"Extra Small Badge"}),e.jsx(s,{color:"primary",size:"sm",children:"Small Badge"}),e.jsx(s,{color:"primary",size:"md",children:"Medium Badge"}),e.jsx(s,{color:"primary",size:"lg",children:"Large Badge"})]})]})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{color:"primary",rounded:"sm",children:"논문작성계획서 심사"}),e.jsx(s,{color:"success",rounded:"sm",children:"중간논문 심사"}),e.jsx(s,{color:"purple",rounded:"sm",children:"최종논문 심사"}),e.jsx(s,{color:"success",rounded:"full",children:"승인"}),e.jsx(s,{color:"warning",rounded:"full",children:"대기"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{color:"primary",rounded:"full",children:"심사중"}),e.jsx(s,{color:"success",rounded:"full",children:"심사완료"}),e.jsx(s,{color:"warning",rounded:"full",children:"심사대기"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{color:"primary",rounded:"full",size:"md",children:"점수형"}),e.jsx(s,{color:"warning",rounded:"full",size:"lg",children:"승인 대기"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{color:"success",rounded:"sm",children:"연구계획서"}),e.jsx(s,{color:"secondary",rounded:"sm",children:"IRB 승인"}),e.jsx(s,{color:"success",rounded:"sm",children:"중간논문"}),e.jsx(s,{color:"secondary",rounded:"sm",children:"예비심사"}),e.jsx(s,{color:"success",rounded:"sm",children:"최종논문"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{color:"primary",rounded:"sm",className:"font-semibold",children:"1주차"}),e.jsx(s,{color:"purple",rounded:"sm",children:"Zoom"}),e.jsx(s,{color:"danger",rounded:"sm",size:"xs",className:"font-semibold",children:"마감"})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(s,{color:"success",rounded:"full",className:"px-3 font-medium",children:[e.jsx(B,{className:"size-4"}),e.jsx("span",{children:"대학원생"})]}),e.jsxs(s,{color:"primary",rounded:"full",className:"px-3 font-medium",children:[e.jsx(N,{className:"size-4"}),e.jsx("span",{children:"지도교수"})]}),e.jsxs(s,{color:"danger",rounded:"full",className:"px-3 font-medium",children:[e.jsx(y,{className:"size-4"}),e.jsx("span",{children:"관리자"})]})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Badge 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 color, rounded 등의 속성을 변경해보세요.

## 사용 팁

- **Color**: 배지의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`success\\\`는 성공 상태, \\\`danger\\\`는 위험 상태).
- **Rounded**: 배지의 모서리 둥글기를 조정합니다. \\\`sm\\\`은 작은 둥근 모서리, \\\`full\\\`은 완전히 둥근 모양입니다.
- **Size**: 배지의 크기를 조정합니다. \\\`xs\\\`는 초소형, \\\`sm\\\`은 작은 크기, \\\`md\\\`는 중간 크기, \\\`lg\\\`는 큰 크기입니다.
        \`
      }
    }
  },
  args: {
    children: 'Badge',
    color: 'primary',
    rounded: 'sm',
    size: 'sm'
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">All Colors (rounded: sm)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="primary" rounded="sm">
            Primary
          </Badge>
          <Badge color="secondary" rounded="sm">
            Secondary
          </Badge>
          <Badge color="success" rounded="sm">
            Success
          </Badge>
          <Badge color="warning" rounded="sm">
            Warning
          </Badge>
          <Badge color="danger" rounded="sm">
            Danger
          </Badge>
          <Badge color="purple" rounded="sm">
            Purple
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">All Colors (rounded: full)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="primary" rounded="full">
            Primary
          </Badge>
          <Badge color="secondary" rounded="full">
            Secondary
          </Badge>
          <Badge color="success" rounded="full">
            Success
          </Badge>
          <Badge color="warning" rounded="full">
            Warning
          </Badge>
          <Badge color="danger" rounded="full">
            Danger
          </Badge>
          <Badge color="purple" rounded="full">
            Purple
          </Badge>
        </div>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Small Rounded (sm)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="primary" rounded="sm">
            Small Rounded
          </Badge>
          <Badge color="secondary" rounded="sm">
            Small Rounded
          </Badge>
          <Badge color="success" rounded="sm">
            Small Rounded
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Full Rounded (full)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="primary" rounded="full">
            Full Rounded
          </Badge>
          <Badge color="secondary" rounded="full">
            Full Rounded
          </Badge>
          <Badge color="success" rounded="full">
            Full Rounded
          </Badge>
        </div>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Extra Small Size (xs)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="primary" size="xs">
            Extra Small
          </Badge>
          <Badge color="secondary" size="xs">
            Extra Small
          </Badge>
          <Badge color="success" size="xs">
            Extra Small
          </Badge>
          <Badge color="warning" size="xs">
            Extra Small
          </Badge>
          <Badge color="danger" size="xs">
            Extra Small
          </Badge>
          <Badge color="purple" size="xs">
            Extra Small
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Small Size (sm)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="primary" size="sm">
            Small
          </Badge>
          <Badge color="secondary" size="sm">
            Small
          </Badge>
          <Badge color="success" size="sm">
            Small
          </Badge>
          <Badge color="warning" size="sm">
            Small
          </Badge>
          <Badge color="danger" size="sm">
            Small
          </Badge>
          <Badge color="purple" size="sm">
            Small
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Medium Size (md)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="primary" size="md">
            Medium
          </Badge>
          <Badge color="secondary" size="md">
            Medium
          </Badge>
          <Badge color="success" size="md">
            Medium
          </Badge>
          <Badge color="warning" size="md">
            Medium
          </Badge>
          <Badge color="danger" size="md">
            Medium
          </Badge>
          <Badge color="purple" size="md">
            Medium
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Large Size (lg)</h3>
        <div className="flex flex-wrap gap-4">
          <Badge color="primary" size="lg">
            Large
          </Badge>
          <Badge color="secondary" size="lg">
            Large
          </Badge>
          <Badge color="success" size="lg">
            Large
          </Badge>
          <Badge color="warning" size="lg">
            Large
          </Badge>
          <Badge color="danger" size="lg">
            Large
          </Badge>
          <Badge color="purple" size="lg">
            Large
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Size Comparison</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Badge color="primary" size="xs">
            Extra Small Badge
          </Badge>
          <Badge color="primary" size="sm">
            Small Badge
          </Badge>
          <Badge color="primary" size="md">
            Medium Badge
          </Badge>
          <Badge color="primary" size="lg">
            Large Badge
          </Badge>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Badge color="primary" rounded="sm">
          논문작성계획서 심사
        </Badge>
        <Badge color="success" rounded="sm">
          중간논문 심사
        </Badge>
        <Badge color="purple" rounded="sm">
          최종논문 심사
        </Badge>
        <Badge color="success" rounded="full">
          승인
        </Badge>
        <Badge color="warning" rounded="full">
          대기
        </Badge>
      </div>
      <div className="flex gap-4">
        <Badge color="primary" rounded="full">
          심사중
        </Badge>
        <Badge color="success" rounded="full">
          심사완료
        </Badge>
        <Badge color="warning" rounded="full">
          심사대기
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge color="primary" rounded="full" size="md">
          점수형
        </Badge>
        <Badge color="warning" rounded="full" size="lg">
          승인 대기
        </Badge>
      </div>
      <div className="flex gap-4">
        <Badge color="success" rounded="sm">
          연구계획서
        </Badge>
        <Badge color="secondary" rounded="sm">
          IRB 승인
        </Badge>
        <Badge color="success" rounded="sm">
          중간논문
        </Badge>
        <Badge color="secondary" rounded="sm">
          예비심사
        </Badge>
        <Badge color="success" rounded="sm">
          최종논문
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge color="primary" rounded="sm" className="font-semibold">
          1주차
        </Badge>
        <Badge color="purple" rounded="sm">
          Zoom
        </Badge>
        <Badge color="danger" rounded="sm" size="xs" className="font-semibold">
          마감
        </Badge>
      </div>
      <div className="flex gap-4">
        <Badge color="success" rounded="full" className="px-3 font-medium">
          <GraduationCapIcon className="size-4" />
          <span>대학원생</span>
        </Badge>
        <Badge color="primary" rounded="full" className="px-3 font-medium">
          <UserIcon className="size-4" />
          <span>지도교수</span>
        </Badge>
        <Badge color="danger" rounded="full" className="px-3 font-medium">
          <ShieldCheckIcon className="size-4" />
          <span>관리자</span>
        </Badge>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const b=["Playground","Colors","Rounded","Sizes","Examples"];export{r as Colors,n as Examples,l as Playground,a as Rounded,d as Sizes,b as __namedExportsOrder,w as default};
