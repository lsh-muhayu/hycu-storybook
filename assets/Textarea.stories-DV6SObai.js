import{j as e}from"./iframe-C-jbPZJ_.js";import{c as m}from"./index-DOOMdwi9.js";import{c as p}from"./cn-CPGtsWvz.js";import{L as l}from"./Label-hZ5oA83p.js";import"./preload-helper-PPVm8Dsz.js";const f=m(["rounded border border-gray-300 bg-white px-3 py-2 text-sm font-normal text-gray-900 transition-shadow placeholder:text-gray-300","focus:border-primary focus-visible:ring-primary focus-visible:ring focus-visible:outline-none","disabled:cursor-not-allowed disabled:opacity-60","read-only:bg-gray-50"],{variants:{invalid:{true:"border-danger text-danger focus:border-danger focus-visible:ring-danger"}}}),a=n=>{const{className:i,invalid:c=!1,...x}=n;return e.jsx("textarea",{className:p(f({invalid:c}),i),...x})};a.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{invalid:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ComponentProps","VariantProps"]};const N={title:"Shared/UI/Textarea",component:a,parameters:{layout:"centered",docs:{description:{component:`
### 텍스트 영역 컴포넌트

Textarea 컴포넌트는 폼에서 여러 줄의 텍스트 입력을 받기 위한 컴포넌트입니다.
표준 HTML textarea 요소의 모든 속성을 지원하며, 다양한 상태를 지원합니다.

## 주요 기능

- **다양한 크기**: \`rows\`, \`cols\` 속성을 통한 크기 조절
- **상태 관리**: \`disabled\`, \`readOnly\` 상태 지원
- **유효성 검사**: \`invalid\` prop을 통해 유효하지 않은 입력을 시각적으로 표시
- **플레이스홀더**: \`placeholder\`를 통한 사용자 가이드 제공
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<Textarea placeholder="내용을 입력하세요" />
<Textarea rows={5} placeholder="긴 텍스트를 입력하세요" />
<Textarea disabled />
<Textarea placeholder="내용을 입력하세요" invalid />
\`\`\`
        `}}},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"텍스트 영역에 표시할 플레이스홀더 텍스트",table:{type:{summary:"string"}}},rows:{control:"number",description:"텍스트 영역의 행 수",table:{type:{summary:"number"},defaultValue:{summary:"2"}}},cols:{control:"number",description:"텍스트 영역의 열 수",table:{type:{summary:"number"}}},disabled:{control:"boolean",description:"텍스트 영역 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"읽기 전용 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부 (빨간색 테두리 및 텍스트 표시)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},r={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Textarea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 rows, placeholder, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Rows**: 텍스트 영역의 세로 크기를 조절합니다.
- **Cols**: 텍스트 영역의 가로 크기를 조절합니다.
- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Disabled**: \`true\`로 설정하면 텍스트 영역이 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        `}}},args:{rows:4,placeholder:"내용을 입력하세요",disabled:!1,readOnly:!1,invalid:!1}},s={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본 텍스트 영역"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{placeholder:"내용을 입력하세요"}),e.jsx(a,{rows:5,placeholder:"긴 텍스트를 입력하세요"}),e.jsx(a,{rows:3,placeholder:"짧은 텍스트를 입력하세요"})]})]})})},t={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"라벨과 함께 사용"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-description",children:"설명"}),e.jsx(a,{id:"textarea-description",rows:4,placeholder:"설명을 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-comment",children:"댓글"}),e.jsx(a,{id:"textarea-comment",rows:3,placeholder:"댓글을 입력하세요"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-note",children:"메모"}),e.jsx(a,{id:"textarea-note",rows:6,placeholder:"메모를 입력하세요"})]})]})]})})},o={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"다양한 상태"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-normal",children:"일반"}),e.jsx(a,{id:"textarea-normal",rows:4,placeholder:"일반 텍스트 영역"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-disabled",children:"비활성화"}),e.jsx(a,{id:"textarea-disabled",rows:4,placeholder:"비활성화된 텍스트 영역",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-readonly",children:"읽기 전용"}),e.jsx(a,{id:"textarea-readonly",rows:4,placeholder:"읽기 전용 텍스트 영역",readOnly:!0,defaultValue:"이 텍스트는 읽기 전용입니다."})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-invalid",children:"유효하지 않은 입력"}),e.jsx(a,{id:"textarea-invalid",rows:4,placeholder:"유효하지 않은 텍스트 영역",invalid:!0})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-invalid-filled",children:"유효하지 않은 입력 (값 있음)"}),e.jsx(a,{id:"textarea-invalid-filled",rows:4,placeholder:"유효하지 않은 텍스트 영역",invalid:!0,defaultValue:"이 입력은 유효하지 않습니다."})]})]})]})})},d={render:()=>e.jsx("div",{className:"flex w-80 flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"다양한 크기"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-small",children:"작은 크기 (2행)"}),e.jsx(a,{id:"textarea-small",rows:2,placeholder:"작은 텍스트 영역"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-medium",children:"중간 크기 (4행)"}),e.jsx(a,{id:"textarea-medium",rows:4,placeholder:"중간 텍스트 영역"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-large",children:"큰 크기 (6행)"}),e.jsx(a,{id:"textarea-large",rows:6,placeholder:"큰 텍스트 영역"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(l,{htmlFor:"textarea-xlarge",children:"매우 큰 크기 (10행)"}),e.jsx(a,{id:"textarea-xlarge",rows:10,placeholder:"매우 큰 텍스트 영역"})]})]})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Textarea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 rows, placeholder, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Rows**: 텍스트 영역의 세로 크기를 조절합니다.
- **Cols**: 텍스트 영역의 가로 크기를 조절합니다.
- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Disabled**: \\\`true\\\`로 설정하면 텍스트 영역이 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \\\`true\\\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \\\`true\\\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        \`
      }
    }
  },
  args: {
    rows: 4,
    placeholder: '내용을 입력하세요',
    disabled: false,
    readOnly: false,
    invalid: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">기본 텍스트 영역</h3>
        <div className="flex flex-col gap-2">
          <Textarea placeholder="내용을 입력하세요" />
          <Textarea rows={5} placeholder="긴 텍스트를 입력하세요" />
          <Textarea rows={3} placeholder="짧은 텍스트를 입력하세요" />
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">라벨과 함께 사용</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-description">설명</Label>
            <Textarea id="textarea-description" rows={4} placeholder="설명을 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-comment">댓글</Label>
            <Textarea id="textarea-comment" rows={3} placeholder="댓글을 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-note">메모</Label>
            <Textarea id="textarea-note" rows={6} placeholder="메모를 입력하세요" />
          </div>
        </div>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">다양한 상태</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-normal">일반</Label>
            <Textarea id="textarea-normal" rows={4} placeholder="일반 텍스트 영역" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-disabled">비활성화</Label>
            <Textarea id="textarea-disabled" rows={4} placeholder="비활성화된 텍스트 영역" disabled />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-readonly">읽기 전용</Label>
            <Textarea id="textarea-readonly" rows={4} placeholder="읽기 전용 텍스트 영역" readOnly defaultValue="이 텍스트는 읽기 전용입니다." />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-invalid">유효하지 않은 입력</Label>
            <Textarea id="textarea-invalid" rows={4} placeholder="유효하지 않은 텍스트 영역" invalid />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-invalid-filled">유효하지 않은 입력 (값 있음)</Label>
            <Textarea id="textarea-invalid-filled" rows={4} placeholder="유효하지 않은 텍스트 영역" invalid defaultValue="이 입력은 유효하지 않습니다." />
          </div>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">다양한 크기</h3>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-small">작은 크기 (2행)</Label>
            <Textarea id="textarea-small" rows={2} placeholder="작은 텍스트 영역" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-medium">중간 크기 (4행)</Label>
            <Textarea id="textarea-medium" rows={4} placeholder="중간 텍스트 영역" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-large">큰 크기 (6행)</Label>
            <Textarea id="textarea-large" rows={6} placeholder="큰 텍스트 영역" />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="textarea-xlarge">매우 큰 크기 (10행)</Label>
            <Textarea id="textarea-xlarge" rows={10} placeholder="매우 큰 텍스트 영역" />
          </div>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const j=["Playground","Basic","WithLabel","States","Sizes"];export{s as Basic,r as Playground,d as Sizes,o as States,t as WithLabel,j as __namedExportsOrder,N as default};
