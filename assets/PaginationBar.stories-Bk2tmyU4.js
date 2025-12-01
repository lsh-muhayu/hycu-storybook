import{j as e,r as u}from"./iframe-DvAcwVFH.js";import{P as s}from"./Pagination-DpHjS0vy.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BmpyaUGQ.js";const i=c=>{const{currentPage:a,onPageChange:n,totalPages:P}=c,r=Math.max(P,1),t=Math.floor((a-1)/10)*10+1,p=Math.min(t+9,r);return e.jsxs(s,{children:[e.jsx(s.First,{disabled:a===1,onClick:()=>n(1)}),e.jsx(s.Previous,{disabled:a===1,onClick:()=>n(Math.max(t-1,1))}),Array.from({length:p-t+1}).map((m,o)=>e.jsx(s.Item,{isCurrent:a===o+t,onClick:()=>n(o+t),children:o+t},o)),e.jsx(s.Next,{disabled:a===r,onClick:()=>n(Math.min(p+1,r))}),e.jsx(s.Last,{disabled:a===r,onClick:()=>n(r)})]})};i.__docgenInfo={description:"",methods:[],displayName:"PaginationBar",props:{currentPage:{required:!0,tsType:{name:"number"},description:"현재 페이지 번호"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"페이지 변경 시 실행 핸들러"},totalPages:{required:!0,tsType:{name:"number"},description:"총 페이지 수"}}};const C={title:"Shared/UI/PaginationBar",parameters:{layout:"centered",docs:{description:{component:`
### 페이지네이션 바 컴포넌트

PaginationBar 컴포넌트는 페이지네이션 기능을 제공하는 고수준 컴포넌트입니다.
10개씩 페이지를 그룹화하여 표시하며, 첫/마지막 페이지 이동 및 이전/다음 페이지 이동 기능을 제공합니다.

## 주요 기능

- **10개 단위 그룹화**: 페이지를 10개씩 그룹화하여 표시 (1-10, 11-20, ...)
- **첫/마지막 페이지 이동**: 첫 페이지와 마지막 페이지로 빠르게 이동
- **이전/다음 페이지 이동**: 현재 그룹의 이전/다음 페이지로 이동
- **현재 페이지 강조**: 현재 페이지를 시각적으로 강조
- **자동 비활성화**: 첫 페이지에서는 이전/첫 페이지 버튼 비활성화, 마지막 페이지에서는 다음/마지막 페이지 버튼 비활성화

## 사용 예시

\`\`\`tsx
const [currentPage, setCurrentPage] = useState(1);

<PaginationBar
  currentPage={currentPage}
  totalPages={50}
  onPageChange={setCurrentPage}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},description:"현재 페이지 번호"},totalPages:{control:{type:"number",min:1},description:"총 페이지 수"},onPageChange:{action:"page changed",description:"페이지 변경 시 실행되는 핸들러"}}},g={render:()=>{const[c,a]=u.useState(1),[n,P]=u.useState(1),[r,t]=u.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{currentPage:c,totalPages:5,onPageChange:a}),e.jsx(i,{currentPage:n,totalPages:15,onPageChange:P}),e.jsx(i,{currentPage:r,totalPages:2e3,onPageChange:t})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [page2, setPage2] = useState(1);
    const [page3, setPage3] = useState(1);
    return <div className="space-y-4">
        <PaginationBar currentPage={page} totalPages={5} onPageChange={setPage} />
        <PaginationBar currentPage={page2} totalPages={15} onPageChange={setPage2} />
        <PaginationBar currentPage={page3} totalPages={2000} onPageChange={setPage3} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}};const y=["Examples"];export{g as Examples,y as __namedExportsOrder,C as default};
