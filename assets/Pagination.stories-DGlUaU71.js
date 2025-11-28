import{j as t}from"./iframe-C9qNL7s6.js";import{P as n}from"./Pagination-C9vwnUfF.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-qehPiwAV.js";import"./index-DOOMdwi9.js";import"./cn-CPGtsWvz.js";import"./createLucideIcon-DeEHW5HN.js";const I={title:"Shared/UI/Pagination",component:n,parameters:{layout:"centered",docs:{description:{component:`
### 페이지네이션 컴포넌트

Pagination 컴포넌트는 여러 페이지로 나뉜 콘텐츠를 탐색하기 위한 네비게이션 컴포넌트입니다.

## 주요 기능

- **첫/마지막 페이지 이동**: \`Pagination.First\`, \`Pagination.Last\`를 통한 빠른 이동
- **이전/다음 페이지 이동**: \`Pagination.Previous\`, \`Pagination.Next\`를 통한 순차적 이동
- **페이지 번호 표시**: \`Pagination.Item\`을 통한 페이지 번호 버튼
- **현재 페이지 강조**: \`isCurrent\` prop을 통한 현재 페이지 표시
- **접근성 지원**: ARIA 속성 및 시맨틱 HTML로 접근성 향상

## 사용 예시

\`\`\`tsx
<Pagination>
  <Pagination.First />
  <Pagination.Previous />
  <Pagination.Item isCurrent>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
\`\`\`
        `}}},tags:["autodocs"]},a={name:"예시",parameters:{controls:{disable:!1}},render:i=>t.jsxs(n,{...i,children:[t.jsx(n.First,{}),t.jsx(n.Previous,{}),t.jsx(n.Item,{children:"1"}),t.jsx(n.Item,{children:"2"}),t.jsx(n.Item,{children:"3"}),t.jsx(n.Item,{children:"4"}),t.jsx(n.Item,{children:"5"}),t.jsx(n.Item,{children:"6"}),t.jsx(n.Item,{children:"7"}),t.jsx(n.Item,{disabled:!0,children:"8"}),t.jsx(n.Item,{isCurrent:!0,children:"9"}),t.jsx(n.Item,{children:"10"}),t.jsx(n.Next,{}),t.jsx(n.Last,{})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '예시',
  parameters: {
    controls: {
      disable: false
    }
  },
  render: args => <Pagination {...args}>
      <Pagination.First />
      <Pagination.Previous />
      <Pagination.Item>1</Pagination.Item>
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item>3</Pagination.Item>
      <Pagination.Item>4</Pagination.Item>
      <Pagination.Item>5</Pagination.Item>
      <Pagination.Item>6</Pagination.Item>
      <Pagination.Item>7</Pagination.Item>
      <Pagination.Item disabled>8</Pagination.Item>
      <Pagination.Item isCurrent>9</Pagination.Item>
      <Pagination.Item>10</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
}`,...a.parameters?.docs?.source}}};const d=["Example"];export{a as Example,d as __namedExportsOrder,I as default};
