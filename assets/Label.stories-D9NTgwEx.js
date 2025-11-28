import{j as e}from"./iframe-C9qNL7s6.js";import{L as l}from"./Label-C0Gr0GV4.js";import{I as i}from"./Input-CFbfZr1B.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOOMdwi9.js";import"./cn-CPGtsWvz.js";const f={title:"Shared/UI/Label",component:l,parameters:{layout:"centered",docs:{description:{component:`
### 라벨 컴포넌트

Label 컴포넌트는 폼 요소에 대한 라벨을 제공하는 컴포넌트입니다.
필수 입력 필드를 표시하기 위한 required 옵션을 지원합니다.

## 주요 기능

- **필수 표시**: \`required\` prop을 통해 필수 입력 필드임을 표시 (빨간색 별표)
- **표준 HTML 속성**: 모든 표준 label 요소의 속성을 지원
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<Label>이메일</Label>
<Label required>이름</Label>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{required:{control:"boolean",description:"필수 입력 필드 여부 (빨간색 별표 표시)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:"text",description:"라벨에 표시할 텍스트",table:{type:{summary:"ReactNode"}}}}},r={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Label 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 required, children 등의 속성을 변경해보세요.

## 사용 팁

- **Required**: \`true\`로 설정하면 라벨 옆에 빨간색 별표(*)가 표시되어 필수 입력 필드임을 나타냅니다.
        `}}},args:{children:"라벨",required:!1}},a={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본 라벨"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{htmlFor:"email",children:"이메일"}),e.jsx(l,{htmlFor:"name",children:"이름"}),e.jsx(l,{htmlFor:"phone",children:"전화번호"})]})]})})},s={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"필수 입력 필드"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{htmlFor:"email-required",required:!0,children:"이메일"}),e.jsx(l,{htmlFor:"name-required",required:!0,children:"이름"}),e.jsx(l,{htmlFor:"phone-required",required:!0,children:"전화번호"})]})]})})},n={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"일반 vs 필수"}),e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{htmlFor:"email-normal",children:"이메일 (선택)"}),e.jsx(l,{htmlFor:"email-required",required:!0,children:"이메일 (필수)"})]})})]})})},o={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"폼과 함께 사용"}),e.jsxs("form",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"form-email",required:!0,children:"이메일"}),e.jsx(i,{id:"form-email",type:"email",placeholder:"example@email.com"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"form-name",required:!0,children:"이름"}),e.jsx(i,{id:"form-name",type:"text",placeholder:"홍길동"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"form-phone",children:"전화번호"}),e.jsx(i,{id:"form-phone",type:"tel",placeholder:"010-1234-5678"})]})]})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Label 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 required, children 등의 속성을 변경해보세요.

## 사용 팁

- **Required**: \\\`true\\\`로 설정하면 라벨 옆에 빨간색 별표(*)가 표시되어 필수 입력 필드임을 나타냅니다.
        \`
      }
    }
  },
  args: {
    children: '라벨',
    required: false
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">기본 라벨</h3>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">이메일</Label>
          <Label htmlFor="name">이름</Label>
          <Label htmlFor="phone">전화번호</Label>
        </div>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">필수 입력 필드</h3>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email-required" required>
            이메일
          </Label>
          <Label htmlFor="name-required" required>
            이름
          </Label>
          <Label htmlFor="phone-required" required>
            전화번호
          </Label>
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">일반 vs 필수</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email-normal">이메일 (선택)</Label>
            <Label htmlFor="email-required" required>
              이메일 (필수)
            </Label>
          </div>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">폼과 함께 사용</h3>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="form-email" required>
              이메일
            </Label>
            <Input id="form-email" type="email" placeholder="example@email.com" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="form-name" required>
              이름
            </Label>
            <Input id="form-name" type="text" placeholder="홍길동" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="form-phone">전화번호</Label>
            <Input id="form-phone" type="tel" placeholder="010-1234-5678" />
          </div>
        </form>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};const h=["Playground","Basic","Required","Comparison","WithForm"];export{a as Basic,n as Comparison,r as Playground,s as Required,o as WithForm,h as __namedExportsOrder,f as default};
