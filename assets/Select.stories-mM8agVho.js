import{j as e,r as h}from"./iframe-mkfPu5JP.js";import{S as l}from"./Select-COATX4Lc.js";import{L as a}from"./Label-8yYXwoX4.js";import"./preload-helper-PPVm8Dsz.js";import"./ScrollArea-BxEtyMDU.js";import"./index-BaBjddpJ.js";import"./index-DVeWkFTi.js";import"./index-BWh_98kt.js";import"./index-BD21Y2cd.js";import"./index-DQ6AaM_l.js";import"./Button-pJMiEcIy.js";import"./index-Dut8MDga.js";const L={title:"Shared/UI/Select",component:l,parameters:{layout:"centered",docs:{description:{component:`
### 선택 드롭다운 컴포넌트

Select 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 드롭다운 메뉴를 제공합니다.
Radix UI의 Select 프리미티브를 기반으로 구축되었으며, 접근성과 키보드 네비게이션을 완벽하게 지원합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Select\`, \`Select.Trigger\`, \`Select.Content\`, \`Select.Item\`으로 구성
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 완벽 지원
- **스크롤 지원**: 많은 옵션이 있을 때 자동 스크롤 영역 제공
- **상태 관리**: \`disabled\`, \`invalid\`, \`readOnly\` 상태 지원
- **커스터마이징**: \`className\`을 통해 각 부분의 스타일 커스터마이징 가능
- **제어 가능**: \`value\`와 \`onValueChange\`를 통한 제어 컴포넌트 지원
- **비제어 가능**: \`defaultValue\`를 통한 비제어 컴포넌트 지원
- **아이콘**: 우측에 자동으로 아래 방향 아이콘 표시
- **플레이스홀더**: \`placeholder\` prop을 통해 선택 전 안내 텍스트 표시

## 사용 예시

\`\`\`tsx
<Select>
  <Select.Trigger placeholder="옵션을 선택하세요">
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="option1">옵션 1</Select.Item>
    <Select.Item value="option2">옵션 2</Select.Item>
    <Select.Item value="option3">옵션 3</Select.Item>
  </Select.Content>
</Select>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Select 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"선택 전에 표시할 플레이스홀더 텍스트 (Select.Trigger에 전달)",table:{type:{summary:"string"}}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부 (빨간색 테두리 및 텍스트 표시, Select.Trigger에 전달)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"읽기 전용 여부 (회색 배경 표시, Select.Trigger에 전달)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},u=n=>e.jsx("div",{className:"w-80",children:e.jsxs(l,{disabled:n.disabled,children:[e.jsx(l.Trigger,{className:"w-full text-left",placeholder:n.placeholder,invalid:n.invalid,readOnly:n.readOnly}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]})}),s={render:u,parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Select 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **Placeholder**: 선택 전에 표시할 안내 텍스트를 설정합니다. Trigger에 표시되는 플레이스홀더 텍스트가 변경됩니다.
- **Disabled**: \`true\`로 설정하면 Select가 비활성화되어 선택할 수 없습니다. Trigger가 회색으로 표시되고 클릭할 수 없게 됩니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다. Trigger의 테두리와 텍스트가 빨간색으로 변경됩니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용 상태임을 나타내는 회색 배경이 표시됩니다. Trigger의 배경이 회색으로 변경됩니다.
        `}}},args:{disabled:!1,placeholder:"옵션을 선택하세요",invalid:!1,readOnly:!1}},c={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본 Select"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]})]})})},r={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Label과 함께 사용"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"select-basic",children:"기본 선택"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{id:"select-basic",className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"select-required",required:!0,children:"필수 선택"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{id:"select-required",className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]})]})]})]})})},o={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본값이 있는 Select"}),e.jsxs(l,{defaultValue:"option2",children:[e.jsx(l.Trigger,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]})]})})},i={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"다양한 상태"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"select-normal",children:"일반"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{id:"select-normal",className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"select-disabled",children:"비활성화"}),e.jsxs(l,{disabled:!0,children:[e.jsx(l.Trigger,{id:"select-disabled",className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"select-invalid",children:"유효하지 않은 입력"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{id:"select-invalid",className:"w-full text-left",placeholder:"옵션을 선택하세요",invalid:!0}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(a,{htmlFor:"select-readonly",children:"읽기 전용"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{id:"select-readonly",className:"w-full text-left",placeholder:"옵션을 선택하세요",readOnly:!0}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]})]})]})]})})},d={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"아이템 상태"}),e.jsxs(l,{defaultValue:"option2",children:[e.jsx(l.Trigger,{className:"w-full text-left",placeholder:"상태를 확인하세요"}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"일반 아이템"}),e.jsx(l.Item,{value:"option2",children:"선택된 아이템 (checked)"}),e.jsx(l.Item,{value:"option3",disabled:!0,children:"비활성화된 아이템"}),e.jsx(l.Item,{value:"option4",children:"일반 아이템"})]})]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["• hover: 연한 파랑 배경과 파랑 텍스트",e.jsx("br",{}),"• checked: 진한 파랑 배경과 흰색 텍스트",e.jsx("br",{}),"• disabled: 투명도 60%로 표시"]})]})})},m={parameters:{docs:{description:{story:`
이 스토리는 많은 옵션이 있는 Select 컴포넌트를 보여줍니다.

**maxHeight 설정**: Content의 \`maxHeight\` prop을 \`screen\`으로 설정하면, 드롭다운이 화면에서 보일 수 있는 만큼 최대한 늘어납니다. 화면 하단에 가까워지면 자동으로 높이가 조절되어 모든 옵션이 화면 안에 표시되도록 합니다.

- number(기본: 300): 최대 ~px까지 표시
- screen: 사용 가능한 공간에 맞춰 높이 자동 조절
- 스크롤: 옵션이 많을 경우 자동으로 스크롤바 표시
        `}}},render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"많은 옵션이 있는 Select"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{className:"w-full text-left",placeholder:"국가를 선택하세요"}),e.jsx(l.Content,{maxHeight:"screen",children:Array.from({length:100}).map((n,t)=>e.jsxs(l.Item,{value:`option${t+1}`,children:["옵션 ",t+1]},t))})]}),e.jsxs("p",{className:"text-xs text-gray-500",children:[e.jsx("strong",{children:'maxHeight="screen"'}),"으로 설정되어 화면에서 보일 수 있는 만큼 최대한 늘어납니다."]})]})})},x={parameters:{docs:{description:{story:`
이 스토리는 AutoSize 기능을 통해 아이템 수에 따라 Content 크기가 가변적으로 달라지는 것을 보여줍니다.

**AutoSize 동작 방식**:
- ScrollAreaAutosize를 사용하여 콘텐츠 크기에 따라 자동으로 높이가 조절됩니다.
- 아이템이 적을 때: Content가 아이템에 맞춰 작게 표시됩니다.
- 아이템이 많을 때: Content가 maxHeight까지 늘어나고, 그 이상은 스크롤바가 표시됩니다.

**장점**:
- 아이템이 적을 때 불필요한 공간을 차지하지 않습니다.
- 아이템이 많을 때는 maxHeight까지 늘어나 최대한 많은 옵션을 한 번에 보여줍니다.
- 사용자 경험이 향상됩니다.
        `}}},render:()=>e.jsxs("div",{className:"flex w-full flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"AutoSize 기능 비교"}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"아이템이 적을 때 (3개)"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsxs(l.Content,{maxHeight:300,children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]}),e.jsx("p",{className:"text-xs text-gray-500",children:"Content가 아이템에 맞춰 작게 표시됩니다. 스크롤바가 나타나지 않습니다."})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h4",{className:"text-xs font-medium text-gray-600",children:"아이템이 많을 때 (20개)"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsx(l.Content,{maxHeight:300,children:Array.from({length:20}).map((n,t)=>e.jsxs(l.Item,{value:`option${t+1}`,children:["옵션 ",t+1]},t))})]}),e.jsx("p",{className:"text-xs text-gray-500",children:"Content가 maxHeight(300px)까지 늘어나고, 스크롤바가 표시됩니다."})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"실제 사용 예시"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"autosize-select",children:"동적 크기 조절 Select"}),e.jsxs(l,{children:[e.jsx(l.Trigger,{id:"autosize-select",className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsxs(l.Content,{maxHeight:300,children:[e.jsx(l.Item,{value:"item1",children:"첫 번째 항목"}),e.jsx(l.Item,{value:"item2",children:"두 번째 항목"}),e.jsx(l.Item,{value:"item3",children:"세 번째 항목"}),e.jsx(l.Item,{value:"item4",children:"네 번째 항목"}),e.jsx(l.Item,{value:"item5",children:"다섯 번째 항목"})]})]}),e.jsx("p",{className:"text-xs text-gray-500",children:"위 예시는 5개의 아이템만 있어 Content가 작게 표시됩니다. 아이템을 더 추가하면 maxHeight까지 늘어납니다."})]})]})]})},p={render:()=>{const n=()=>{const[t,g]=h.useState("option1");return e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"제어 컴포넌트"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(l,{value:t,onValueChange:g,children:[e.jsx(l.Trigger,{className:"w-full text-left",placeholder:"옵션을 선택하세요"}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"option1",children:"옵션 1"}),e.jsx(l.Item,{value:"option2",children:"옵션 2"}),e.jsx(l.Item,{value:"option3",children:"옵션 3"})]})]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["선택된 값: ",t]})]})]})})};return e.jsx(n,{})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: PlaygroundSelect,
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Select 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **Placeholder**: 선택 전에 표시할 안내 텍스트를 설정합니다. Trigger에 표시되는 플레이스홀더 텍스트가 변경됩니다.
- **Disabled**: \\\`true\\\`로 설정하면 Select가 비활성화되어 선택할 수 없습니다. Trigger가 회색으로 표시되고 클릭할 수 없게 됩니다.
- **Invalid**: \\\`true\\\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다. Trigger의 테두리와 텍스트가 빨간색으로 변경됩니다.
- **ReadOnly**: \\\`true\\\`로 설정하면 읽기 전용 상태임을 나타내는 회색 배경이 표시됩니다. Trigger의 배경이 회색으로 변경됩니다.
        \`
      }
    }
  },
  args: {
    disabled: false,
    placeholder: '옵션을 선택하세요',
    invalid: false,
    readOnly: false
  } as Record<string, unknown>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">기본 Select</h3>
        <Select>
          <Select.Trigger className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
          <Select.Content>
            <Select.Item value="option1">옵션 1</Select.Item>
            <Select.Item value="option2">옵션 2</Select.Item>
            <Select.Item value="option3">옵션 3</Select.Item>
          </Select.Content>
        </Select>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Label과 함께 사용</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-basic">기본 선택</Label>
            <Select>
              <Select.Trigger id="select-basic" className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
              <Select.Content>
                <Select.Item value="option1">옵션 1</Select.Item>
                <Select.Item value="option2">옵션 2</Select.Item>
                <Select.Item value="option3">옵션 3</Select.Item>
              </Select.Content>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-required" required>
              필수 선택
            </Label>
            <Select>
              <Select.Trigger id="select-required" className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
              <Select.Content>
                <Select.Item value="option1">옵션 1</Select.Item>
                <Select.Item value="option2">옵션 2</Select.Item>
                <Select.Item value="option3">옵션 3</Select.Item>
              </Select.Content>
            </Select>
          </div>
        </div>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">기본값이 있는 Select</h3>
        <Select defaultValue="option2">
          <Select.Trigger className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
          <Select.Content>
            <Select.Item value="option1">옵션 1</Select.Item>
            <Select.Item value="option2">옵션 2</Select.Item>
            <Select.Item value="option3">옵션 3</Select.Item>
          </Select.Content>
        </Select>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">다양한 상태</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-normal">일반</Label>
            <Select>
              <Select.Trigger id="select-normal" className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
              <Select.Content>
                <Select.Item value="option1">옵션 1</Select.Item>
                <Select.Item value="option2">옵션 2</Select.Item>
                <Select.Item value="option3">옵션 3</Select.Item>
              </Select.Content>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-disabled">비활성화</Label>
            <Select disabled>
              <Select.Trigger id="select-disabled" className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
              <Select.Content>
                <Select.Item value="option1">옵션 1</Select.Item>
                <Select.Item value="option2">옵션 2</Select.Item>
                <Select.Item value="option3">옵션 3</Select.Item>
              </Select.Content>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-invalid">유효하지 않은 입력</Label>
            <Select>
              <Select.Trigger id="select-invalid" className="w-full text-left" placeholder="옵션을 선택하세요" invalid></Select.Trigger>
              <Select.Content>
                <Select.Item value="option1">옵션 1</Select.Item>
                <Select.Item value="option2">옵션 2</Select.Item>
                <Select.Item value="option3">옵션 3</Select.Item>
              </Select.Content>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="select-readonly">읽기 전용</Label>
            <Select>
              <Select.Trigger id="select-readonly" className="w-full text-left" placeholder="옵션을 선택하세요" readOnly></Select.Trigger>
              <Select.Content>
                <Select.Item value="option1">옵션 1</Select.Item>
                <Select.Item value="option2">옵션 2</Select.Item>
                <Select.Item value="option3">옵션 3</Select.Item>
              </Select.Content>
            </Select>
          </div>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">아이템 상태</h3>
        <Select defaultValue="option2">
          <Select.Trigger className="w-full text-left" placeholder="상태를 확인하세요"></Select.Trigger>
          <Select.Content>
            <Select.Item value="option1">일반 아이템</Select.Item>
            <Select.Item value="option2">선택된 아이템 (checked)</Select.Item>
            <Select.Item value="option3" disabled>
              비활성화된 아이템
            </Select.Item>
            <Select.Item value="option4">일반 아이템</Select.Item>
          </Select.Content>
        </Select>
        <p className="text-xs text-gray-500">
          • hover: 연한 파랑 배경과 파랑 텍스트
          <br />• checked: 진한 파랑 배경과 흰색 텍스트
          <br />• disabled: 투명도 60%로 표시
        </p>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 많은 옵션이 있는 Select 컴포넌트를 보여줍니다.

**maxHeight 설정**: Content의 \\\`maxHeight\\\` prop을 \\\`screen\\\`으로 설정하면, 드롭다운이 화면에서 보일 수 있는 만큼 최대한 늘어납니다. 화면 하단에 가까워지면 자동으로 높이가 조절되어 모든 옵션이 화면 안에 표시되도록 합니다.

- number(기본: 300): 최대 ~px까지 표시
- screen: 사용 가능한 공간에 맞춰 높이 자동 조절
- 스크롤: 옵션이 많을 경우 자동으로 스크롤바 표시
        \`
      }
    }
  },
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">많은 옵션이 있는 Select</h3>
        <Select>
          <Select.Trigger className="w-full text-left" placeholder="국가를 선택하세요"></Select.Trigger>
          <Select.Content maxHeight="screen">
            {Array.from({
            length: 100
          }).map((_, index) => <Select.Item key={index} value={\`option\${index + 1}\`}>
                옵션 {index + 1}
              </Select.Item>)}
          </Select.Content>
        </Select>
        <p className="text-xs text-gray-500">
          <strong>maxHeight=&quot;screen&quot;</strong>으로 설정되어 화면에서 보일 수 있는 만큼
          최대한 늘어납니다.
        </p>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 AutoSize 기능을 통해 아이템 수에 따라 Content 크기가 가변적으로 달라지는 것을 보여줍니다.

**AutoSize 동작 방식**:
- ScrollAreaAutosize를 사용하여 콘텐츠 크기에 따라 자동으로 높이가 조절됩니다.
- 아이템이 적을 때: Content가 아이템에 맞춰 작게 표시됩니다.
- 아이템이 많을 때: Content가 maxHeight까지 늘어나고, 그 이상은 스크롤바가 표시됩니다.

**장점**:
- 아이템이 적을 때 불필요한 공간을 차지하지 않습니다.
- 아이템이 많을 때는 maxHeight까지 늘어나 최대한 많은 옵션을 한 번에 보여줍니다.
- 사용자 경험이 향상됩니다.
        \`
      }
    }
  },
  render: () => <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-700">AutoSize 기능 비교</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">아이템이 적을 때 (3개)</h4>
            <Select>
              <Select.Trigger className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
              <Select.Content maxHeight={300}>
                <Select.Item value="option1">옵션 1</Select.Item>
                <Select.Item value="option2">옵션 2</Select.Item>
                <Select.Item value="option3">옵션 3</Select.Item>
              </Select.Content>
            </Select>
            <p className="text-xs text-gray-500">
              Content가 아이템에 맞춰 작게 표시됩니다. 스크롤바가 나타나지 않습니다.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-medium text-gray-600">아이템이 많을 때 (20개)</h4>
            <Select>
              <Select.Trigger className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
              <Select.Content maxHeight={300}>
                {Array.from({
                length: 20
              }).map((_, index) => <Select.Item key={index} value={\`option\${index + 1}\`}>
                    옵션 {index + 1}
                  </Select.Item>)}
              </Select.Content>
            </Select>
            <p className="text-xs text-gray-500">
              Content가 maxHeight(300px)까지 늘어나고, 스크롤바가 표시됩니다.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-gray-700">실제 사용 예시</h3>
        <div className="flex flex-col gap-2">
          <Label htmlFor="autosize-select">동적 크기 조절 Select</Label>
          <Select>
            <Select.Trigger id="autosize-select" className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
            <Select.Content maxHeight={300}>
              <Select.Item value="item1">첫 번째 항목</Select.Item>
              <Select.Item value="item2">두 번째 항목</Select.Item>
              <Select.Item value="item3">세 번째 항목</Select.Item>
              <Select.Item value="item4">네 번째 항목</Select.Item>
              <Select.Item value="item5">다섯 번째 항목</Select.Item>
            </Select.Content>
          </Select>
          <p className="text-xs text-gray-500">
            위 예시는 5개의 아이템만 있어 Content가 작게 표시됩니다. 아이템을 더 추가하면
            maxHeight까지 늘어납니다.
          </p>
        </div>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ControlledSelect = () => {
      const [value, setValue] = useState<string>('option1');
      return <div className="flex w-80 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-700">제어 컴포넌트</h3>
            <div className="flex flex-col gap-2">
              <Select value={value} onValueChange={setValue}>
                <Select.Trigger className="w-full text-left" placeholder="옵션을 선택하세요"></Select.Trigger>
                <Select.Content>
                  <Select.Item value="option1">옵션 1</Select.Item>
                  <Select.Item value="option2">옵션 2</Select.Item>
                  <Select.Item value="option3">옵션 3</Select.Item>
                </Select.Content>
              </Select>
              <p className="text-sm text-gray-600">선택된 값: {value}</p>
            </div>
          </div>
        </div>;
    };
    return <ControlledSelect />;
  }
}`,...p.parameters?.docs?.source}}};const A=["Playground","Basic","WithLabel","WithDefaultValue","States","ItemStates","MaxHeight","AutoSize","Controlled"];export{x as AutoSize,c as Basic,p as Controlled,d as ItemStates,m as MaxHeight,s as Playground,i as States,o as WithDefaultValue,r as WithLabel,A as __namedExportsOrder,L as default};
