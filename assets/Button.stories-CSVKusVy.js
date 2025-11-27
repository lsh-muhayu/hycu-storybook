import{j as n}from"./iframe-xZf4lAQW.js";import{B as e}from"./Button-CQ5WPF2G.js";import{c as m}from"./createLucideIcon-CXpwg_El.js";import{D as x}from"./download-BcsRWIgw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOOMdwi9.js";import"./cn-CPGtsWvz.js";const u=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],a=m("bell",u);const v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],p=m("circle-pause",v);const g=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],c=m("log-out",g);const f=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],B=m("trash-2",f),L={title:"Shared/UI/Button",component:e,parameters:{layout:"centered",docs:{description:{component:'\n### 사용자 액션을 위한 인터랙티브 버튼 컴포넌트\n\n버튼 컴포넌트는 사용자 인터페이스에서 액션을 트리거하는 데 사용됩니다. 다양한 크기, 색상 및 변형을 지원합니다.\n\n## 주요 기능\n\n- **다양한 사이즈**: `xs`, `sm`, `md`, `lg`, `icon-md`, `icon-sm` 여섯 가지 크기 옵션 제공\n- **여러 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning`, `deepblue` 색상 지원\n- **세 가지 스타일 변형**: `filled` (채워진), `outlined` (테두리), `text` (텍스트) 스타일\n- **로딩 상태 표시**: 비동기 작업 중 로딩 스피너 자동 표시\n- **아이콘 버튼 지원**: 아이콘과 텍스트를 함께 사용 가능\n- **접근성 지원**: `disabled` 상태 및 `aria-busy` 속성으로 접근성 향상\n- **포커스 관리**: 키보드 포커스 시 시각적 피드백 제공\n\n## 사용 예시\n\n```tsx\n<Button color="primary" variant="filled" size="md">\n  버튼 텍스트\n</Button>\n```\n        '}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outlined","text"],description:"버튼의 스타일 변형",table:{type:{summary:"'filled' | 'outlined' | 'text'"},defaultValue:{summary:"'filled'"}}},color:{control:"select",options:["primary","secondary","danger","success","warning","deepblue"],description:"버튼의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'deepblue'"},defaultValue:{summary:"'primary'"}}},size:{control:"select",options:["xs","sm","md","lg","icon-md","icon-sm"],description:"버튼의 크기",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg' | 'icon-md' | 'icon-sm'"},defaultValue:{summary:"'md'"}}},disabled:{control:"boolean",description:"버튼 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"로딩 상태 여부. 로딩 중일 때는 자동으로 disabled 상태가 됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:"text",description:"버튼에 들어갈 내용 (텍스트 또는 아이콘 포함)",table:{type:{summary:"ReactNode"}}}}},l={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Button 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 variant, color, size, disabled, loading 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Variant**: 버튼의 스타일을 선택합니다. `filled`는 배경이 채워진 스타일, `outlined`는 테두리만 있는 스타일, `text`는 텍스트만 있는 스타일입니다.\n- **Color**: 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 삭제나 위험한 작업에 사용, `warning`은 경고나 주의가 필요한 작업에 사용).\n- **Size**: 버튼의 크기를 조정합니다. `xs`는 매우 작은 버튼, `sm`는 작은 버튼, `md`는 기본 크기, `lg`는 큰 버튼, `icon-md`와 `icon-sm`는 아이콘 전용 버튼입니다.\n- **Loading**: `true`로 설정하면 버튼이 로딩 상태가 되며 자동으로 비활성화됩니다.\n        "}}},args:{children:"Button",variant:"filled",color:"primary",size:"md"}},i={render:()=>n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Filled Variant"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{variant:"filled",color:"primary",children:"Primary"}),n.jsx(e,{variant:"filled",color:"secondary",children:"Secondary"}),n.jsx(e,{variant:"filled",color:"danger",children:"Danger"}),n.jsx(e,{variant:"filled",color:"success",children:"Success"}),n.jsx(e,{variant:"filled",color:"warning",children:"Warning"}),n.jsx(e,{variant:"filled",color:"deepblue",children:"Deep Blue"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Outlined Variant"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{variant:"outlined",color:"primary",children:"Primary"}),n.jsx(e,{variant:"outlined",color:"secondary",children:"Secondary"}),n.jsx(e,{variant:"outlined",color:"danger",children:"Danger"}),n.jsx(e,{variant:"outlined",color:"success",children:"Success"}),n.jsx(e,{variant:"outlined",color:"warning",children:"Warning"}),n.jsx(e,{variant:"outlined",color:"deepblue",children:"Deep Blue"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Text Variant"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{variant:"text",color:"primary",children:"Primary"}),n.jsx(e,{variant:"text",color:"secondary",children:"Secondary"}),n.jsx(e,{variant:"text",color:"danger",children:"Danger"}),n.jsx(e,{variant:"text",color:"success",children:"Success"}),n.jsx(e,{variant:"text",color:"warning",children:"Warning"}),n.jsx(e,{variant:"text",color:"deepblue",children:"Deep Blue"})]})]})]})},t={render:()=>n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"XSmall (xs)"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{size:"xs",variant:"filled",color:"primary",children:"XSmall Button"}),n.jsx(e,{size:"xs",variant:"outlined",color:"primary",children:"XSmall Button"}),n.jsx(e,{size:"xs",variant:"text",color:"primary",children:"XSmall Button"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Small (sm)"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{size:"sm",variant:"filled",color:"primary",children:"Small Button"}),n.jsx(e,{size:"sm",variant:"outlined",color:"primary",children:"Small Button"}),n.jsx(e,{size:"sm",variant:"text",color:"primary",children:"Small Button"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Medium (md)"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{size:"md",variant:"filled",color:"primary",children:"Medium Button"}),n.jsx(e,{size:"md",variant:"outlined",color:"primary",children:"Medium Button"}),n.jsx(e,{size:"md",variant:"text",color:"primary",children:"Medium Button"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Large (lg)"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{size:"lg",variant:"filled",color:"primary",children:"Large Button"}),n.jsx(e,{size:"lg",variant:"outlined",color:"primary",children:"Large Button"}),n.jsx(e,{size:"lg",variant:"text",color:"primary",children:"Large Button"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Icon Medium (icon-md)"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{size:"icon-md",variant:"filled",color:"primary",children:n.jsx(a,{className:"size-5"})}),n.jsx(e,{size:"icon-md",variant:"outlined",color:"primary",children:n.jsx(a,{className:"size-5"})}),n.jsx(e,{size:"icon-md",variant:"text",color:"primary",children:n.jsx(a,{className:"size-5"})})]})]})]})},r={render:()=>n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Normal"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{variant:"filled",color:"primary",children:"Normal Button"}),n.jsx(e,{variant:"outlined",color:"primary",children:"Normal Button"}),n.jsx(e,{variant:"text",color:"primary",children:"Normal Button"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Disabled"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{variant:"filled",color:"primary",disabled:!0,children:"Disabled Button"}),n.jsx(e,{variant:"outlined",color:"primary",disabled:!0,children:"Disabled Button"}),n.jsx(e,{variant:"text",color:"primary",disabled:!0,children:"Disabled Button"})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Loading"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{variant:"filled",color:"primary",loading:!0,children:"Loading Button"}),n.jsx(e,{variant:"outlined",color:"primary",loading:!0,children:"Loading Button"}),n.jsx(e,{variant:"text",color:"primary",loading:!0,children:"Loading Button"})]})]})]})},o={render:()=>n.jsxs("div",{className:"flex flex-col gap-6",children:[n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Loading - All Sizes"}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(e,{size:"xs",variant:"filled",color:"primary",loading:!0,children:"XSmall Loading"}),n.jsx(e,{size:"sm",variant:"filled",color:"primary",loading:!0,children:"Small Loading"}),n.jsx(e,{size:"md",variant:"filled",color:"primary",loading:!0,children:"Medium Loading"}),n.jsx(e,{size:"lg",variant:"filled",color:"primary",loading:!0,children:"Large Loading"}),n.jsx(e,{size:"icon-md",variant:"filled",color:"primary",loading:!0,children:n.jsx(a,{className:"size-5"})})]})]}),n.jsxs("div",{className:"flex flex-col gap-2",children:[n.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Loading - All Colors"}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{variant:"filled",color:"primary",loading:!0,children:"Primary"}),n.jsx(e,{variant:"filled",color:"secondary",loading:!0,children:"Secondary"}),n.jsx(e,{variant:"filled",color:"danger",loading:!0,children:"Danger"}),n.jsx(e,{variant:"filled",color:"success",loading:!0,children:"Success"}),n.jsx(e,{variant:"filled",color:"warning",loading:!0,children:"Warning"}),n.jsx(e,{variant:"filled",color:"deepblue",loading:!0,children:"Deep Blue"})]})]})]})},s={render:()=>n.jsx("div",{className:"flex flex-col gap-6",children:n.jsxs("div",{className:"flex gap-4",children:[n.jsxs(e,{variant:"filled",color:"primary",children:[n.jsx(c,{className:"size-4"}),"로그아웃"]}),n.jsxs(e,{variant:"outlined",color:"primary",children:[n.jsx(c,{className:"size-4"}),"로그아웃"]}),n.jsxs(e,{variant:"text",color:"primary",children:[n.jsx(c,{className:"size-4"}),"로그아웃"]})]})})},d={render:()=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"primary",variant:"filled",children:"Filled Primary"}),n.jsx(e,{color:"primary",variant:"outlined",children:"Outlined Primary"}),n.jsx(e,{color:"primary",variant:"text",children:"Text Primary"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"deepblue",variant:"filled",size:"lg",children:"✅ 승인 (자동 Zoom 생성)"}),n.jsx(e,{color:"secondary",variant:"outlined",size:"lg",children:"거절"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"secondary",variant:"outlined",size:"lg",children:"취소"}),n.jsx(e,{color:"success",variant:"filled",size:"lg",children:"생성 완료"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"primary",variant:"filled",size:"md",children:"선택 학생에게 알림 발송"}),n.jsx(e,{color:"primary",variant:"filled",size:"md",children:"첫 지도 계획 추가하기"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"primary",variant:"filled",size:"md",children:"검색"}),n.jsx(e,{color:"secondary",variant:"filled",size:"md",children:"초기화"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"primary",variant:"outlined",size:"xs",children:"위원"}),n.jsx(e,{color:"success",variant:"outlined",size:"xs",children:"위원장"})]}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx(e,{color:"danger",variant:"filled",size:"md",children:"▶ 재생"}),n.jsx(e,{color:"secondary",variant:"filled",size:"md",children:"⬇ 다운로드"})]}),n.jsx("div",{className:"flex gap-4",children:n.jsxs(e,{color:"secondary",variant:"text",size:"md",children:[n.jsx(c,{className:"size-4"})," 로그아웃"]})}),n.jsxs("div",{className:"flex gap-4",children:[n.jsxs(e,{color:"deepblue",variant:"filled",size:"md",children:[n.jsx(x,{className:"size-4"})," 권한 저장"]}),n.jsxs(e,{color:"warning",variant:"filled",size:"md",children:[n.jsx(p,{className:"size-4"})," 권한 중지"]}),n.jsxs(e,{color:"danger",variant:"filled",size:"md",children:[n.jsx(B,{className:"size-4"})," 완전 삭제"]})]}),n.jsx("div",{className:"flex gap-4",children:n.jsx(e,{color:"secondary",variant:"text",size:"icon-md",children:n.jsx(a,{className:"size-5"})})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Button 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 variant, color, size, disabled, loading 등의 속성을 변경해보세요.

## 사용 팁

- **Variant**: 버튼의 스타일을 선택합니다. \\\`filled\\\`는 배경이 채워진 스타일, \\\`outlined\\\`는 테두리만 있는 스타일, \\\`text\\\`는 텍스트만 있는 스타일입니다.
- **Color**: 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`danger\\\`는 삭제나 위험한 작업에 사용, \\\`warning\\\`은 경고나 주의가 필요한 작업에 사용).
- **Size**: 버튼의 크기를 조정합니다. \\\`xs\\\`는 매우 작은 버튼, \\\`sm\\\`는 작은 버튼, \\\`md\\\`는 기본 크기, \\\`lg\\\`는 큰 버튼, \\\`icon-md\\\`와 \\\`icon-sm\\\`는 아이콘 전용 버튼입니다.
- **Loading**: \\\`true\\\`로 설정하면 버튼이 로딩 상태가 되며 자동으로 비활성화됩니다.
        \`
      }
    }
  },
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'primary',
    size: 'md'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Filled Variant</h3>
        <div className="flex gap-4">
          <Button variant="filled" color="primary">
            Primary
          </Button>
          <Button variant="filled" color="secondary">
            Secondary
          </Button>
          <Button variant="filled" color="danger">
            Danger
          </Button>
          <Button variant="filled" color="success">
            Success
          </Button>
          <Button variant="filled" color="warning">
            Warning
          </Button>
          <Button variant="filled" color="deepblue">
            Deep Blue
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Outlined Variant</h3>
        <div className="flex gap-4">
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="danger">
            Danger
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="deepblue">
            Deep Blue
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Text Variant</h3>
        <div className="flex gap-4">
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="danger">
            Danger
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="deepblue">
            Deep Blue
          </Button>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">XSmall (xs)</h3>
        <div className="flex gap-4">
          <Button size="xs" variant="filled" color="primary">
            XSmall Button
          </Button>
          <Button size="xs" variant="outlined" color="primary">
            XSmall Button
          </Button>
          <Button size="xs" variant="text" color="primary">
            XSmall Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Small (sm)</h3>
        <div className="flex gap-4">
          <Button size="sm" variant="filled" color="primary">
            Small Button
          </Button>
          <Button size="sm" variant="outlined" color="primary">
            Small Button
          </Button>
          <Button size="sm" variant="text" color="primary">
            Small Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Medium (md)</h3>
        <div className="flex gap-4">
          <Button size="md" variant="filled" color="primary">
            Medium Button
          </Button>
          <Button size="md" variant="outlined" color="primary">
            Medium Button
          </Button>
          <Button size="md" variant="text" color="primary">
            Medium Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Large (lg)</h3>
        <div className="flex gap-4">
          <Button size="lg" variant="filled" color="primary">
            Large Button
          </Button>
          <Button size="lg" variant="outlined" color="primary">
            Large Button
          </Button>
          <Button size="lg" variant="text" color="primary">
            Large Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Icon Medium (icon-md)</h3>
        <div className="flex gap-4">
          <Button size="icon-md" variant="filled" color="primary">
            <BellIcon className="size-5" />
          </Button>
          <Button size="icon-md" variant="outlined" color="primary">
            <BellIcon className="size-5" />
          </Button>
          <Button size="icon-md" variant="text" color="primary">
            <BellIcon className="size-5" />
          </Button>
        </div>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Normal</h3>
        <div className="flex gap-4">
          <Button variant="filled" color="primary">
            Normal Button
          </Button>
          <Button variant="outlined" color="primary">
            Normal Button
          </Button>
          <Button variant="text" color="primary">
            Normal Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Disabled</h3>
        <div className="flex gap-4">
          <Button variant="filled" color="primary" disabled>
            Disabled Button
          </Button>
          <Button variant="outlined" color="primary" disabled>
            Disabled Button
          </Button>
          <Button variant="text" color="primary" disabled>
            Disabled Button
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Loading</h3>
        <div className="flex gap-4">
          <Button variant="filled" color="primary" loading>
            Loading Button
          </Button>
          <Button variant="outlined" color="primary" loading>
            Loading Button
          </Button>
          <Button variant="text" color="primary" loading>
            Loading Button
          </Button>
        </div>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Loading - All Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="xs" variant="filled" color="primary" loading>
            XSmall Loading
          </Button>
          <Button size="sm" variant="filled" color="primary" loading>
            Small Loading
          </Button>
          <Button size="md" variant="filled" color="primary" loading>
            Medium Loading
          </Button>
          <Button size="lg" variant="filled" color="primary" loading>
            Large Loading
          </Button>
          <Button size="icon-md" variant="filled" color="primary" loading>
            <BellIcon className="size-5" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Loading - All Colors</h3>
        <div className="flex gap-4">
          <Button variant="filled" color="primary" loading>
            Primary
          </Button>
          <Button variant="filled" color="secondary" loading>
            Secondary
          </Button>
          <Button variant="filled" color="danger" loading>
            Danger
          </Button>
          <Button variant="filled" color="success" loading>
            Success
          </Button>
          <Button variant="filled" color="warning" loading>
            Warning
          </Button>
          <Button variant="filled" color="deepblue" loading>
            Deep Blue
          </Button>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Button variant="filled" color="primary">
          <LogOutIcon className="size-4" />
          로그아웃
        </Button>
        <Button variant="outlined" color="primary">
          <LogOutIcon className="size-4" />
          로그아웃
        </Button>
        <Button variant="text" color="primary">
          <LogOutIcon className="size-4" />
          로그아웃
        </Button>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button color="primary" variant="filled">
          Filled Primary
        </Button>
        <Button color="primary" variant="outlined">
          Outlined Primary
        </Button>
        <Button color="primary" variant="text">
          Text Primary
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="deepblue" variant="filled" size="lg">
          ✅ 승인 (자동 Zoom 생성)
        </Button>
        <Button color="secondary" variant="outlined" size="lg">
          거절
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="secondary" variant="outlined" size="lg">
          취소
        </Button>
        <Button color="success" variant="filled" size="lg">
          생성 완료
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="primary" variant="filled" size="md">
          선택 학생에게 알림 발송
        </Button>
        <Button color="primary" variant="filled" size="md">
          첫 지도 계획 추가하기
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="primary" variant="filled" size="md">
          검색
        </Button>
        <Button color="secondary" variant="filled" size="md">
          초기화
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="primary" variant="outlined" size="xs">
          위원
        </Button>
        <Button color="success" variant="outlined" size="xs">
          위원장
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="danger" variant="filled" size="md">
          ▶ 재생
        </Button>
        <Button color="secondary" variant="filled" size="md">
          ⬇ 다운로드
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="secondary" variant="text" size="md">
          <LogOutIcon className="size-4" /> 로그아웃
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="deepblue" variant="filled" size="md">
          <DownloadIcon className="size-4" /> 권한 저장
        </Button>
        <Button color="warning" variant="filled" size="md">
          <CirclePauseIcon className="size-4" /> 권한 중지
        </Button>
        <Button color="danger" variant="filled" size="md">
          <Trash2Icon className="size-4" /> 완전 삭제
        </Button>
      </div>
      <div className="flex gap-4">
        <Button color="secondary" variant="text" size="icon-md">
          <BellIcon className="size-5" />
        </Button>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const D=["Playground","Variants","Sizes","States","LoadingStates","WithIcons","Examples"];export{d as Examples,o as LoadingStates,l as Playground,t as Sizes,r as States,i as Variants,s as WithIcons,D as __namedExportsOrder,L as default};
