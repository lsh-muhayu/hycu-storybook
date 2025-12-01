import{j as e}from"./iframe-mkfPu5JP.js";import{M as r}from"./Message-CoI4PPwZ.js";import"./preload-helper-PPVm8Dsz.js";import"./info-LbqdaEOn.js";const p={title:"Shared/UI/Message",component:r,parameters:{layout:"centered",docs:{description:{component:`
### 메시지 컴포넌트

Message 컴포넌트는 사용자에게 정보나 경고를 표시하기 위한 컴포넌트입니다.
아이콘과 함께 메시지를 표시하며, 타입에 따라 다른 색상으로 표시됩니다.

## 주요 기능

- **타입별 스타일**: \`danger\` (위험/오류), \`info\` (정보) 두 가지 타입 지원
- **아이콘 표시**: Info 아이콘이 자동으로 표시됩니다
- **조건부 렌더링**: \`children\`이 없으면 렌더링되지 않습니다
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<Message type="danger">
  오류가 발생했습니다.
</Message>

<Message type="info">
  정보 메시지입니다.
</Message>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["danger","info"],description:"메시지 타입",table:{type:{summary:"'danger' | 'info'"},defaultValue:{summary:"'danger'"}}},children:{control:"text",description:"메시지 내용"}}},s={name:"예시",args:{type:"danger",children:"오류가 발생했습니다."}},a={name:"타입별 예시",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{type:"danger",children:"이 필드는 필수입니다."}),e.jsxs(r,{type:"info",children:["설명에 대한 내용을 적기 위해서는 type을 info로 설정하여 색상을 변경할 수 있습니다.",e.jsx("br",{}),"danger에서는 빨간 색상으로 문구가 보였던 것과 다르게, info에서는 ",e.jsx("b",{children:"파란 색상"}),"으로 문구가 보입니다."]}),e.jsx(r,{type:"danger",children:"메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '예시',
  args: {
    type: 'danger',
    children: '오류가 발생했습니다.'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '타입별 예시',
  render: () => <div className="flex flex-col gap-4">
      <Message type="danger">이 필드는 필수입니다.</Message>
      <Message type="info">
        설명에 대한 내용을 적기 위해서는 type을 info로 설정하여 색상을 변경할 수 있습니다.
        <br />
        danger에서는 빨간 색상으로 문구가 보였던 것과 다르게, info에서는 <b>파란 색상</b>으로 문구가
        보입니다.
      </Message>
      <Message type="danger">
        메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가
        길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시
        표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
        이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
        이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
        이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
        이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
        이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
        이러합니다.메시지가 길어졌을 시 표기는 이러합니다.
      </Message>
    </div>
}`,...a.parameters?.docs?.source}}};const c=["Example","Examples"];export{s as Example,a as Examples,c as __namedExportsOrder,p as default};
