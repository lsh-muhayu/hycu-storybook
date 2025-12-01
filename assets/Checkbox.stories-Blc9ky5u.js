import{j as e}from"./iframe-CTZwLk6S.js";import{C as s}from"./Checkbox-Cbih0u23.js";import{L as r}from"./Label-CM_pY2Ku.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XiIjEo-o.js";import"./index-CX7fBYdY.js";const v={title:"Shared/UI/Checkbox",component:s,parameters:{layout:"centered",controls:{exclude:["className","onCheckedChange","defaultChecked","name","form","value","required","id","aria-label","aria-labelledby","aria-describedby","aria-required","asChild","onClick","onKeyDown","tabIndex","style"]},docs:{description:{component:'\n### 체크박스 컴포넌트\n\nCheckbox 컴포넌트는 사용자가 옵션을 선택하거나 해제할 수 있는 체크박스 입력 필드입니다.\n\n## 주요 기능\n\n- **여러 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning` 색상 지원\n- **상태 관리**: `checked`, `disabled`, `invalid` 상태 지원\n- **Indeterminate 상태**: 부분 선택 상태 지원\n- **접근성**: 표준 HTML checkbox 속성으로 접근성 지원\n- **커스터마이징**: `className`을 통해 스타일 커스터마이징 가능\n\n## 사용 예시\n\n```tsx\n<Checkbox color="primary" />\n<Checkbox color="success" checked />\n<Checkbox color="danger" disabled />\n<Checkbox checked="indeterminate" />\n<Checkbox invalid />\n```\n        '}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning"],description:"체크박스의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"}}},checked:{control:"boolean",description:"체크박스 선택 여부",table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"체크박스 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{control:"boolean",description:"체크박스 유효성 검사 실패 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},l=["primary","secondary","danger","success","warning"],d={parameters:{controls:{disable:!1},docs:{description:{story:`
체크박스를 클릭하면 자유롭게 토글됩니다.
        `}}},render:a=>e.jsx(s,{...a}),args:{color:"primary",disabled:!1,invalid:!1}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Unchecked"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:l.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{color:a}),e.jsx("span",{className:"text-xs text-gray-600 capitalize",children:a})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Checked"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:l.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{color:a,checked:!0}),e.jsx("span",{className:"text-xs text-gray-600 capitalize",children:a})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Indeterminate"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:l.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{color:a,checked:"indeterminate"}),e.jsx("span",{className:"text-xs text-gray-600 capitalize",children:a})]},a))})]})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"기본 상태"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Unchecked"}),e.jsx("div",{className:"flex gap-3",children:l.map(a=>e.jsx(s,{color:a},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Checked"}),e.jsx("div",{className:"flex gap-3",children:l.map(a=>e.jsx(s,{color:a,checked:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Indeterminate"}),e.jsx("div",{className:"flex gap-3",children:l.map(a=>e.jsx(s,{color:a,checked:"indeterminate"},a))})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Disabled 상태"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Unchecked"}),e.jsx("div",{className:"flex gap-3",children:l.map(a=>e.jsx(s,{color:a,disabled:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Checked"}),e.jsx("div",{className:"flex gap-3",children:l.map(a=>e.jsx(s,{color:a,checked:!0,disabled:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Indeterminate"}),e.jsx("div",{className:"flex gap-3",children:l.map(a=>e.jsx(s,{color:a,checked:"indeterminate",disabled:!0},a))})]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Invalid 상태"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Unchecked"}),e.jsx("div",{className:"flex gap-3",children:l.map(a=>e.jsx(s,{color:a,invalid:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Checked"}),e.jsx("div",{className:"flex gap-3",children:l.map(a=>e.jsx(s,{color:a,checked:!0,invalid:!0},a))})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600",children:"Indeterminate"}),e.jsx("div",{className:"flex gap-3",children:l.map(a=>e.jsx(s,{color:a,checked:"indeterminate",invalid:!0},a))})]})]})]})]})},x={parameters:{docs:{description:{story:`
Checkbox 컴포넌트는 \`className\`을 통해 다양한 크기로 조정할 수 있습니다.
체크 아이콘은 부모 Checkbox 크기의 비례하도록 설정되어있어,
어떤 크기로 변경하더라도 아이콘이 자동으로 조정됩니다.

\`\`\`tsx
<Checkbox className="size-4" />   // 작은 크기
<Checkbox className="size-6" />   // 중간 크기
<Checkbox className="size-10" />  // 큰 크기
\`\`\`
        `}}},render:()=>{const a=[{size:"size-3",label:"3 (12px)"},{size:"size-4",label:"4 (16px)"},{size:"size-5",label:"5 (20px)"},{size:"size-6",label:"6 (24px)"},{size:"size-8",label:"8 (32px)"},{size:"size-10",label:"10 (40px)"}];return e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Unchecked"}),e.jsx("div",{className:"flex flex-wrap items-end gap-6",children:a.map(({size:c,label:i})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{color:"primary",className:c}),e.jsx("span",{className:"text-xs text-gray-600",children:i})]},c))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Checked"}),e.jsx("div",{className:"flex flex-wrap items-end gap-6",children:a.map(({size:c,label:i})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{color:"primary",checked:!0,className:c}),e.jsx("span",{className:"text-xs text-gray-600",children:i})]},c))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Indeterminate"}),e.jsx("div",{className:"flex flex-wrap items-end gap-6",children:a.map(({size:c,label:i})=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{color:"primary",checked:"indeterminate",className:c}),e.jsx("span",{className:"text-xs text-gray-600",children:i})]},c))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"모든 색상 (size-6)"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:l.map(c=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{color:c,checked:!0,className:"size-6"}),e.jsx("span",{className:"text-xs text-gray-600 capitalize",children:c})]},c))})]})]})}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h1",{children:"체크박스 - 라벨"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"example1",className:"peer"}),e.jsx(r,{htmlFor:"example1",className:"peer-data-[state=checked]:text-primary",children:"Primary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"example2",className:"peer",color:"secondary"}),e.jsx(r,{htmlFor:"example2",className:"peer-data-[state=checked]:text-secondary",children:"Secondary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"example3",className:"peer",color:"danger"}),e.jsx(r,{htmlFor:"example3",className:"peer-data-[state=checked]:text-danger",children:"Danger"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"example4",className:"peer",color:"success"}),e.jsx(r,{htmlFor:"example4",className:"peer-data-[state=checked]:text-success",children:"Success"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"example5",className:"peer",color:"warning"}),e.jsx(r,{htmlFor:"example5",className:"peer-data-[state=checked]:text-warning",children:"Warning"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"example6",className:"peer",invalid:!0}),e.jsx(r,{htmlFor:"example6",className:"peer-data-[invalid=true]:text-danger",children:"Invalid"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{id:"example7",className:"peer",disabled:!0}),e.jsx(r,{htmlFor:"example7",className:"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",children:"Disabled"})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
체크박스를 클릭하면 자유롭게 토글됩니다.
        \`
      }
    }
  },
  render: args => {
    return <Checkbox {...args} />;
  },
  args: {
    color: 'primary',
    disabled: false,
    invalid: false
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div className="flex flex-wrap gap-6">
            {colors.map(color => <div key={color} className="flex flex-col items-center gap-2">
                <Checkbox color={color} />
                <span className="text-xs text-gray-600 capitalize">{color}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-700">Checked</h3>
          <div className="flex flex-wrap gap-6">
            {colors.map(color => <div key={color} className="flex flex-col items-center gap-2">
                <Checkbox color={color} checked />
                <span className="text-xs text-gray-600 capitalize">{color}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div className="flex flex-wrap gap-6">
            {colors.map(color => <div key={color} className="flex flex-col items-center gap-2">
                <Checkbox color={color} checked="indeterminate" />
                <span className="text-xs text-gray-600 capitalize">{color}</span>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-8">
        {/* 기본 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">기본 상태</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Unchecked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Checked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Indeterminate</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked="indeterminate" />)}
              </div>
            </div>
          </div>
        </div>

        {/* Disabled 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Disabled 상태</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Unchecked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} disabled />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Checked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked disabled />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Indeterminate</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked="indeterminate" disabled />)}
              </div>
            </div>
          </div>
        </div>

        {/* Invalid 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Invalid 상태</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Unchecked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} invalid />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Checked</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked invalid />)}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-medium text-gray-600">Indeterminate</h4>
              <div className="flex gap-3">
                {colors.map(color => <Checkbox key={color} color={color} checked="indeterminate" invalid />)}
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Checkbox 컴포넌트는 \\\`className\\\`을 통해 다양한 크기로 조정할 수 있습니다.
체크 아이콘은 부모 Checkbox 크기의 비례하도록 설정되어있어,
어떤 크기로 변경하더라도 아이콘이 자동으로 조정됩니다.

\\\`\\\`\\\`tsx
<Checkbox className="size-4" />   // 작은 크기
<Checkbox className="size-6" />   // 중간 크기
<Checkbox className="size-10" />  // 큰 크기
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => {
    const sizes = [{
      size: 'size-3',
      label: '3 (12px)'
    }, {
      size: 'size-4',
      label: '4 (16px)'
    }, {
      size: 'size-5',
      label: '5 (20px)'
    }, {
      size: 'size-6',
      label: '6 (24px)'
    }, {
      size: 'size-8',
      label: '8 (32px)'
    }, {
      size: 'size-10',
      label: '10 (40px)'
    }];
    return <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Unchecked</h3>
          <div className="flex flex-wrap items-end gap-6">
            {sizes.map(({
            size,
            label
          }) => <div key={size} className="flex flex-col items-center gap-2">
                <Checkbox color="primary" className={size} />
                <span className="text-xs text-gray-600">{label}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Checked</h3>
          <div className="flex flex-wrap items-end gap-6">
            {sizes.map(({
            size,
            label
          }) => <div key={size} className="flex flex-col items-center gap-2">
                <Checkbox color="primary" checked className={size} />
                <span className="text-xs text-gray-600">{label}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Indeterminate</h3>
          <div className="flex flex-wrap items-end gap-6">
            {sizes.map(({
            size,
            label
          }) => <div key={size} className="flex flex-col items-center gap-2">
                <Checkbox color="primary" checked="indeterminate" className={size} />
                <span className="text-xs text-gray-600">{label}</span>
              </div>)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">모든 색상 (size-6)</h3>
          <div className="flex flex-wrap gap-6">
            {colors.map(color => <div key={color} className="flex flex-col items-center gap-2">
                <Checkbox color={color} checked className="size-6" />
                <span className="text-xs text-gray-600 capitalize">{color}</span>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4">
        <h1>체크박스 - 라벨</h1>
        <div className="flex items-center gap-2">
          <Checkbox id="example1" className="peer" />
          <Label htmlFor="example1" className="peer-data-[state=checked]:text-primary">
            Primary
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example2" className="peer" color="secondary" />
          <Label htmlFor="example2" className="peer-data-[state=checked]:text-secondary">
            Secondary
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example3" className="peer" color="danger" />
          <Label htmlFor="example3" className="peer-data-[state=checked]:text-danger">
            Danger
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example4" className="peer" color="success" />
          <Label htmlFor="example4" className="peer-data-[state=checked]:text-success">
            Success
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example5" className="peer" color="warning" />
          <Label htmlFor="example5" className="peer-data-[state=checked]:text-warning">
            Warning
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example6" className="peer" invalid />
          <Label htmlFor="example6" className="peer-data-[invalid=true]:text-danger">
            Invalid
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="example7" className="peer" disabled />
          <Label htmlFor="example7" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
            Disabled
          </Label>
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const b=["Playground","Colors","States","Sizes","WithLabel"];export{t as Colors,d as Playground,x as Sizes,n as States,m as WithLabel,b as __namedExportsOrder,v as default};
