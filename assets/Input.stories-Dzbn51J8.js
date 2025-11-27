import{j as e}from"./iframe-C0UkEmAf.js";import{I as l}from"./Input-i9g3PVex.js";import{L as a}from"./Label-DGyrDHa9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOOMdwi9.js";import"./cn-CPGtsWvz.js";const x={title:"Shared/UI/Input",component:l,parameters:{layout:"centered",docs:{description:{component:'\n### 입력 필드 컴포넌트\n\nInput 컴포넌트는 폼에서 텍스트 입력을 받기 위한 컴포넌트입니다.\n표준 HTML input 요소의 모든 속성을 지원하며, 다양한 상태와 타입을 지원합니다.\n\n## 주요 기능\n\n- **다양한 타입 지원**: `text`, `email`, `password`, `number`, `tel`, `url` 등 모든 input type 지원\n- **상태 관리**: `disabled`, `readOnly` 상태 지원\n- **유효성 검사**: `invalid` prop을 통해 유효하지 않은 입력을 시각적으로 표시\n- **플레이스홀더**: `placeholder`를 통한 사용자 가이드 제공\n- **커스터마이징**: `className`을 통해 스타일 커스터마이징 가능\n\n## 사용 예시\n\n```tsx\n<Input type="email" placeholder="example@email.com" />\n<Input type="text" placeholder="이름을 입력하세요" />\n<Input type="password" disabled />\n<Input type="email" placeholder="example@email.com" invalid />\n```\n        '}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search","date","time"],description:"입력 필드의 타입",table:{type:{summary:"string"},defaultValue:{summary:"'text'"}}},placeholder:{control:"text",description:"입력 필드에 표시할 플레이스홀더 텍스트",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"입력 필드 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"읽기 전용 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부 (빨간색 테두리 및 텍스트 표시)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},t={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Input 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 type, placeholder, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Type**: 입력 필드의 타입을 선택합니다. 각 타입에 맞는 키보드와 유효성 검사가 적용됩니다.
- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Disabled**: \`true\`로 설정하면 입력 필드가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        `}}},args:{type:"text",placeholder:"텍스트를 입력하세요",disabled:!1,readOnly:!1,invalid:!1}},s={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본 입력 필드"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{type:"text",placeholder:"이름을 입력하세요"}),e.jsx(l,{type:"email",placeholder:"example@email.com"}),e.jsx(l,{type:"tel",placeholder:"010-1234-5678"})]})]})})},i={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"다양한 입력 타입"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-text",children:"텍스트"}),e.jsx(l,{id:"input-text",type:"text",placeholder:"텍스트를 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-email",children:"이메일"}),e.jsx(l,{id:"input-email",type:"email",placeholder:"example@email.com"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-password",children:"비밀번호"}),e.jsx(l,{id:"input-password",type:"password",placeholder:"비밀번호를 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-number",children:"숫자"}),e.jsx(l,{id:"input-number",type:"number",placeholder:"숫자를 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-tel",children:"전화번호"}),e.jsx(l,{id:"input-tel",type:"tel",placeholder:"010-1234-5678"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-url",children:"URL"}),e.jsx(l,{id:"input-url",type:"url",placeholder:"https://example.com"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-search",children:"검색"}),e.jsx(l,{id:"input-search",type:"search",placeholder:"검색어를 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"date-search",children:"날짜"}),e.jsx(l,{id:"date-search",type:"date",placeholder:"날짜를 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"time-search",children:"시간"}),e.jsx(l,{id:"time-search",type:"time",placeholder:"시간을 입력하세요"})]})]})]})})},n={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"다양한 상태"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-normal",children:"일반"}),e.jsx(l,{id:"input-normal",type:"text",placeholder:"일반 입력 필드"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-disabled",children:"비활성화"}),e.jsx(l,{id:"input-disabled",type:"text",placeholder:"비활성화된 입력 필드",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-readonly",children:"읽기 전용"}),e.jsx(l,{id:"input-readonly",type:"text",placeholder:"읽기 전용 입력 필드",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-invalid",children:"유효하지 않은 입력"}),e.jsx(l,{id:"input-invalid",type:"text",placeholder:"유효하지 않은 입력 필드",invalid:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-invalid-password",children:"유효하지 않은 비밀번호"}),e.jsx(l,{id:"input-invalid-password",type:"password",placeholder:"비밀번호를 입력하세요",invalid:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-invalid-date",children:"유효하지 않은 날짜"}),e.jsx(l,{id:"input-invalid-date",type:"date",invalid:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"input-invalid-time",children:"유효하지 않은 시간"}),e.jsx(l,{id:"input-invalid-time",type:"time",invalid:!0})]})]})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Input 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 type, placeholder, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Type**: 입력 필드의 타입을 선택합니다. 각 타입에 맞는 키보드와 유효성 검사가 적용됩니다.
- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Disabled**: \\\`true\\\`로 설정하면 입력 필드가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \\\`true\\\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \\\`true\\\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        \`
      }
    }
  },
  args: {
    type: 'text',
    placeholder: '텍스트를 입력하세요',
    disabled: false,
    readOnly: false,
    invalid: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">기본 입력 필드</h3>
        <div className="flex flex-col gap-2">
          <Input type="text" placeholder="이름을 입력하세요" />
          <Input type="email" placeholder="example@email.com" />
          <Input type="tel" placeholder="010-1234-5678" />
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">다양한 입력 타입</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-text">텍스트</Label>
            <Input id="input-text" type="text" placeholder="텍스트를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-email">이메일</Label>
            <Input id="input-email" type="email" placeholder="example@email.com" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-password">비밀번호</Label>
            <Input id="input-password" type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-number">숫자</Label>
            <Input id="input-number" type="number" placeholder="숫자를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-tel">전화번호</Label>
            <Input id="input-tel" type="tel" placeholder="010-1234-5678" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-url">URL</Label>
            <Input id="input-url" type="url" placeholder="https://example.com" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-search">검색</Label>
            <Input id="input-search" type="search" placeholder="검색어를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="date-search">날짜</Label>
            <Input id="date-search" type="date" placeholder="날짜를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="time-search">시간</Label>
            <Input id="time-search" type="time" placeholder="시간을 입력하세요" />
          </div>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">다양한 상태</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-normal">일반</Label>
            <Input id="input-normal" type="text" placeholder="일반 입력 필드" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-disabled">비활성화</Label>
            <Input id="input-disabled" type="text" placeholder="비활성화된 입력 필드" disabled />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-readonly">읽기 전용</Label>
            <Input id="input-readonly" type="text" placeholder="읽기 전용 입력 필드" readOnly />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-invalid">유효하지 않은 입력</Label>
            <Input id="input-invalid" type="text" placeholder="유효하지 않은 입력 필드" invalid />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-invalid-password">유효하지 않은 비밀번호</Label>
            <Input id="input-invalid-password" type="password" placeholder="비밀번호를 입력하세요" invalid />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-invalid-date">유효하지 않은 날짜</Label>
            <Input id="input-invalid-date" type="date" invalid />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="input-invalid-time">유효하지 않은 시간</Label>
            <Input id="input-invalid-time" type="time" invalid />
          </div>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const u=["Playground","Basic","Types","States"];export{s as Basic,t as Playground,n as States,i as Types,u as __namedExportsOrder,x as default};
