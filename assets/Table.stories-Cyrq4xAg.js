import{j as e}from"./iframe-mkfPu5JP.js";import{T as l}from"./Table-B0OUgZDq.js";import"./preload-helper-PPVm8Dsz.js";import"./ScrollArea-BxEtyMDU.js";import"./index-BaBjddpJ.js";import"./index-DVeWkFTi.js";const u={title:"Shared/UI/Table",component:l,parameters:{layout:"padded",docs:{description:{component:`
### 테이블 컴포넌트

Table 컴포넌트는 구조화된 데이터를 행과 열로 표시하는 컴포넌트입니다.
ScrollArea를 기반으로 구축되어 많은 데이터가 있을 때 자동 스크롤을 지원합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Table\`, \`Table.Header\`, \`Table.Body\`, \`Table.Footer\`, \`Table.Row\`, \`Table.Head\`, \`Table.Cell\`, \`Table.CenterRow\`로 구성
- **스크롤 지원**: 많은 데이터가 있을 때 수직/수평 스크롤 자동 지원
- **Sticky 헤더**: 헤더가 상단에 고정되어 스크롤 시에도 항상 보임
- **호버 효과**: 행에 마우스를 올리면 배경색이 변경되어 가독성 향상
- **빈 상태 지원**: \`Table.CenterRow\`를 사용하여 빈 상태, 로딩, 에러 등의 피드백 표시
- **커스터마이징**: \`className\`을 통해 각 부분의 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>이름</Table.Head>
      <Table.Head>이메일</Table.Head>
      <Table.Head>역할</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>홍길동</Table.Cell>
      <Table.Cell>hong@example.com</Table.Cell>
      <Table.Cell>관리자</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{showVertical:{control:"boolean",description:"수직 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showHorizontal:{control:"boolean",description:"수평 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},x=[{id:1,name:"홍길동",email:"hong@example.com",role:"관리자",status:"활성"},{id:2,name:"김철수",email:"kim@example.com",role:"사용자",status:"활성"},{id:3,name:"이영희",email:"lee@example.com",role:"사용자",status:"비활성"},{id:4,name:"박민수",email:"park@example.com",role:"관리자",status:"활성"},{id:5,name:"정수진",email:"jung@example.com",role:"사용자",status:"활성"}],r={render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"mb-4 text-sm font-semibold text-gray-700",children:"기본 테이블"}),e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"이름"}),e.jsx(l.Head,{children:"이메일"}),e.jsx(l.Head,{children:"역할"}),e.jsx(l.Head,{children:"상태"})]})}),e.jsx(l.Body,{children:x.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.name}),e.jsx(l.Cell,{children:a.email}),e.jsx(l.Cell,{children:a.role}),e.jsx(l.Cell,{children:a.status})]},a.id))})]})]})},d={render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"mb-4 text-sm font-semibold text-gray-700",children:"Footer가 있는 테이블"}),e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"항목"}),e.jsx(l.Head,{children:"수량"}),e.jsx(l.Head,{children:"단가"}),e.jsx(l.Head,{children:"합계"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"상품 A"}),e.jsx(l.Cell,{children:"10"}),e.jsx(l.Cell,{children:"1,000원"}),e.jsx(l.Cell,{children:"10,000원"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"상품 B"}),e.jsx(l.Cell,{children:"5"}),e.jsx(l.Cell,{children:"2,000원"}),e.jsx(l.Cell,{children:"10,000원"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"상품 C"}),e.jsx(l.Cell,{children:"3"}),e.jsx(l.Cell,{children:"3,000원"}),e.jsx(l.Cell,{children:"9,000원"})]})]}),e.jsx(l.Footer,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{colSpan:3,className:"text-right font-semibold",children:"총합계"}),e.jsx(l.Cell,{className:"font-semibold",children:"29,000원"})]})})]})]})},o={parameters:{docs:{description:{story:`
이 스토리는 많은 데이터가 있는 테이블을 보여줍니다.
테이블이 컨테이너 높이를 초과하면 자동으로 스크롤바가 표시됩니다.
헤더는 sticky로 고정되어 있어 스크롤 시에도 항상 보입니다.
        `}}},render:()=>e.jsxs("div",{className:"h-96 w-full max-w-4xl",children:[e.jsx("h3",{className:"mb-4 text-sm font-semibold text-gray-700",children:"스크롤 가능한 테이블"}),e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"ID"}),e.jsx(l.Head,{children:"이름"}),e.jsx(l.Head,{children:"이메일"}),e.jsx(l.Head,{children:"역할"}),e.jsx(l.Head,{children:"상태"}),e.jsx(l.Head,{children:"가입일"})]})}),e.jsx(l.Body,{children:Array.from({length:50}).map((a,s)=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:s+1}),e.jsxs(l.Cell,{children:["사용자 ",s+1]}),e.jsxs(l.Cell,{children:["user",s+1,"@example.com"]}),e.jsx(l.Cell,{children:s%3===0?"관리자":"사용자"}),e.jsx(l.Cell,{children:s%2===0?"활성":"비활성"}),e.jsxs(l.Cell,{children:["2024-01-",s%30+1]})]},s))})]})]})},b={parameters:{docs:{description:{story:`
이 스토리는 빈 상태를 보여주는 테이블을 보여줍니다.
\`Table.CenterRow\`를 사용하여 테이블 중앙에 메시지를 표시할 수 있습니다.
로딩, 에러, 빈 데이터 등의 피드백을 표시하는 데 유용합니다.
        `}}},render:()=>e.jsxs("div",{className:"relative h-64 w-full max-w-4xl",children:[e.jsx("h3",{className:"mb-4 text-sm font-semibold text-gray-700",children:"빈 상태 테이블"}),e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"이름"}),e.jsx(l.Head,{children:"이메일"}),e.jsx(l.Head,{children:"역할"}),e.jsx(l.Head,{children:"상태"})]})}),e.jsx(l.Body,{children:e.jsx(l.CenterRow,{children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("p",{className:"text-sm text-gray-500",children:"데이터가 없습니다"}),e.jsx("p",{className:"text-xs text-gray-400",children:"새로운 데이터를 추가해보세요"})]})})})]})]})},c={render:()=>e.jsxs("div",{className:"relative h-64 w-full max-w-4xl",children:[e.jsx("h3",{className:"mb-4 text-sm font-semibold text-gray-700",children:"로딩 상태 테이블"}),e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"이름"}),e.jsx(l.Head,{children:"이메일"}),e.jsx(l.Head,{children:"역할"}),e.jsx(l.Head,{children:"상태"})]})}),e.jsx(l.Body,{children:e.jsx(l.CenterRow,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"}),e.jsx("p",{className:"text-sm text-gray-500",children:"로딩 중..."})]})})})]})]})},i={render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"mb-4 text-sm font-semibold text-gray-700",children:"커스텀 스타일 테이블"}),e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{className:"w-1/4",children:"이름"}),e.jsx(l.Head,{className:"w-1/2",children:"이메일"}),e.jsx(l.Head,{className:"w-1/4 text-center",children:"역할"})]})}),e.jsx(l.Body,{children:x.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{className:"font-medium",children:a.name}),e.jsx(l.Cell,{className:"text-gray-600",children:a.email}),e.jsx(l.Cell,{className:"text-center",children:e.jsx("span",{className:`inline-flex rounded-full px-2 py-1 text-xs font-medium ${a.role==="관리자"?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}`,children:a.role})})]},a.id))})]})]})},t={parameters:{docs:{description:{story:`
이 스토리는 많은 열이 있는 넓은 테이블을 보여줍니다.
테이블이 컨테이너 너비를 초과하면 수평 스크롤바가 자동으로 표시됩니다.
        `}}},render:()=>e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h3",{className:"mb-4 text-sm font-semibold text-gray-700",children:"넓은 테이블 (수평 스크롤)"}),e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"ID"}),e.jsx(l.Head,{children:"이름"}),e.jsx(l.Head,{children:"이메일"}),e.jsx(l.Head,{children:"전화번호"}),e.jsx(l.Head,{children:"부서"}),e.jsx(l.Head,{children:"직급"}),e.jsx(l.Head,{children:"입사일"}),e.jsx(l.Head,{children:"상태"}),e.jsx(l.Head,{children:"마지막 로그인"}),e.jsx(l.Head,{children:"작업"})]})}),e.jsx(l.Body,{children:x.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.id}),e.jsx(l.Cell,{children:a.name}),e.jsx(l.Cell,{children:a.email}),e.jsx(l.Cell,{children:"010-1234-5678"}),e.jsx(l.Cell,{children:"개발팀"}),e.jsx(l.Cell,{children:"선임"}),e.jsx(l.Cell,{children:"2024-01-15"}),e.jsx(l.Cell,{children:a.status}),e.jsx(l.Cell,{children:"2024-01-20 14:30"}),e.jsx(l.Cell,{children:e.jsx("button",{className:"text-blue-600 hover:underline",children:"수정"})})]},a.id))})]})]})},m={parameters:{docs:{description:{story:`
이 스토리는 가로로 매우 긴 테이블을 보여줍니다.
테이블이 컨테이너 너비를 크게 초과하여 수평 스크롤이 필수적으로 발생합니다.
많은 열과 긴 텍스트를 포함하여 실제 사용 시나리오를 시뮬레이션합니다.
        `}}},render:()=>e.jsxs("div",{className:"w-full max-w-2xl",children:[e.jsx("h3",{className:"mb-4 text-sm font-semibold text-gray-700",children:"가로 스크롤 테이블 (매우 넓음)"}),e.jsxs(l,{children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{className:"min-w-[100px]",children:"ID"}),e.jsx(l.Head,{className:"min-w-[150px]",children:"이름"}),e.jsx(l.Head,{className:"min-w-[200px]",children:"이메일 주소"}),e.jsx(l.Head,{className:"min-w-[150px]",children:"전화번호"}),e.jsx(l.Head,{className:"min-w-[200px]",children:"부서명"}),e.jsx(l.Head,{className:"min-w-[120px]",children:"직급"}),e.jsx(l.Head,{className:"min-w-[150px]",children:"입사일"}),e.jsx(l.Head,{className:"min-w-[100px]",children:"상태"}),e.jsx(l.Head,{className:"min-w-[180px]",children:"마지막 로그인 시간"}),e.jsx(l.Head,{className:"min-w-[200px]",children:"주소 (상세 주소 포함)"}),e.jsx(l.Head,{className:"min-w-[150px]",children:"비고 및 특이사항"}),e.jsx(l.Head,{className:"min-w-[120px]",children:"작업"})]})}),e.jsx(l.Body,{children:x.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.id}),e.jsx(l.Cell,{children:a.name}),e.jsx(l.Cell,{children:a.email}),e.jsx(l.Cell,{children:"010-1234-5678"}),e.jsx(l.Cell,{children:"소프트웨어 개발팀"}),e.jsx(l.Cell,{children:"선임 개발자"}),e.jsx(l.Cell,{children:"2024-01-15"}),e.jsx(l.Cell,{children:a.status}),e.jsx(l.Cell,{children:"2024-01-20 14:30:25"}),e.jsx(l.Cell,{children:"서울특별시 강남구 테헤란로 123길 45, 101동 101호"}),e.jsx(l.Cell,{children:"정기 점검 완료, 추가 교육 필요"}),e.jsx(l.Cell,{children:e.jsx("button",{className:"text-blue-600 hover:underline",children:"수정"})})]},a.id))})]})]})},T={render:a=>e.jsxs("div",{className:"h-96 w-full max-w-4xl",children:[e.jsx("h3",{className:"mb-4 text-sm font-semibold text-gray-700",children:"인터랙티브 플레이그라운드"}),e.jsxs(l,{showVertical:a.showVertical,showHorizontal:a.showHorizontal,children:[e.jsx(l.Header,{children:e.jsxs(l.Row,{children:[e.jsx(l.Head,{children:"이름"}),e.jsx(l.Head,{children:"이메일"}),e.jsx(l.Head,{children:"역할"}),e.jsx(l.Head,{children:"상태"})]})}),e.jsx(l.Body,{children:Array.from({length:20}).map((s,n)=>e.jsxs(l.Row,{children:[e.jsxs(l.Cell,{children:["사용자 ",n+1]}),e.jsxs(l.Cell,{children:["user",n+1,"@example.com"]}),e.jsx(l.Cell,{children:n%3===0?"관리자":"사용자"}),e.jsx(l.Cell,{children:n%2===0?"활성":"비활성"})]},n))})]})]}),parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Table 컴포넌트의 스크롤 관련 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 `showVertical`, `showHorizontal` 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Show Vertical**: `false`로 설정하면 수직 스크롤바가 표시되지 않습니다.\n- **Show Horizontal**: `false`로 설정하면 수평 스크롤바가 표시되지 않습니다.\n        "}}},args:{showVertical:!0,showHorizontal:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">기본 테이블</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>이름</Table.Head>
            <Table.Head>이메일</Table.Head>
            <Table.Head>역할</Table.Head>
            <Table.Head>상태</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleUsers.map(user => <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell>{user.status}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">Footer가 있는 테이블</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>항목</Table.Head>
            <Table.Head>수량</Table.Head>
            <Table.Head>단가</Table.Head>
            <Table.Head>합계</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>상품 A</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>1,000원</Table.Cell>
            <Table.Cell>10,000원</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>상품 B</Table.Cell>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>2,000원</Table.Cell>
            <Table.Cell>10,000원</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>상품 C</Table.Cell>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>3,000원</Table.Cell>
            <Table.Cell>9,000원</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3} className="text-right font-semibold">
              총합계
            </Table.Cell>
            <Table.Cell className="font-semibold">29,000원</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 많은 데이터가 있는 테이블을 보여줍니다.
테이블이 컨테이너 높이를 초과하면 자동으로 스크롤바가 표시됩니다.
헤더는 sticky로 고정되어 있어 스크롤 시에도 항상 보입니다.
        \`
      }
    }
  },
  render: () => <div className="h-96 w-full max-w-4xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">스크롤 가능한 테이블</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>ID</Table.Head>
            <Table.Head>이름</Table.Head>
            <Table.Head>이메일</Table.Head>
            <Table.Head>역할</Table.Head>
            <Table.Head>상태</Table.Head>
            <Table.Head>가입일</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Array.from({
          length: 50
        }).map((_, index) => <Table.Row key={index}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>사용자 {index + 1}</Table.Cell>
              <Table.Cell>user{index + 1}@example.com</Table.Cell>
              <Table.Cell>{index % 3 === 0 ? '관리자' : '사용자'}</Table.Cell>
              <Table.Cell>{index % 2 === 0 ? '활성' : '비활성'}</Table.Cell>
              <Table.Cell>2024-01-{index % 30 + 1}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...o.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 빈 상태를 보여주는 테이블을 보여줍니다.
\\\`Table.CenterRow\\\`를 사용하여 테이블 중앙에 메시지를 표시할 수 있습니다.
로딩, 에러, 빈 데이터 등의 피드백을 표시하는 데 유용합니다.
        \`
      }
    }
  },
  render: () => <div className="relative h-64 w-full max-w-4xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">빈 상태 테이블</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>이름</Table.Head>
            <Table.Head>이메일</Table.Head>
            <Table.Head>역할</Table.Head>
            <Table.Head>상태</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.CenterRow>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-gray-500">데이터가 없습니다</p>
              <p className="text-xs text-gray-400">새로운 데이터를 추가해보세요</p>
            </div>
          </Table.CenterRow>
        </Table.Body>
      </Table>
    </div>
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="relative h-64 w-full max-w-4xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">로딩 상태 테이블</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>이름</Table.Head>
            <Table.Head>이메일</Table.Head>
            <Table.Head>역할</Table.Head>
            <Table.Head>상태</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.CenterRow>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
              <p className="text-sm text-gray-500">로딩 중...</p>
            </div>
          </Table.CenterRow>
        </Table.Body>
      </Table>
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-4xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">커스텀 스타일 테이블</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-1/4">이름</Table.Head>
            <Table.Head className="w-1/2">이메일</Table.Head>
            <Table.Head className="w-1/4 text-center">역할</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleUsers.map(user => <Table.Row key={user.id}>
              <Table.Cell className="font-medium">{user.name}</Table.Cell>
              <Table.Cell className="text-gray-600">{user.email}</Table.Cell>
              <Table.Cell className="text-center">
                <span className={\`inline-flex rounded-full px-2 py-1 text-xs font-medium \${user.role === '관리자' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}\`}>
                  {user.role}
                </span>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 많은 열이 있는 넓은 테이블을 보여줍니다.
테이블이 컨테이너 너비를 초과하면 수평 스크롤바가 자동으로 표시됩니다.
        \`
      }
    }
  },
  render: () => <div className="w-full max-w-4xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">넓은 테이블 (수평 스크롤)</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>ID</Table.Head>
            <Table.Head>이름</Table.Head>
            <Table.Head>이메일</Table.Head>
            <Table.Head>전화번호</Table.Head>
            <Table.Head>부서</Table.Head>
            <Table.Head>직급</Table.Head>
            <Table.Head>입사일</Table.Head>
            <Table.Head>상태</Table.Head>
            <Table.Head>마지막 로그인</Table.Head>
            <Table.Head>작업</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleUsers.map(user => <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>010-1234-5678</Table.Cell>
              <Table.Cell>개발팀</Table.Cell>
              <Table.Cell>선임</Table.Cell>
              <Table.Cell>2024-01-15</Table.Cell>
              <Table.Cell>{user.status}</Table.Cell>
              <Table.Cell>2024-01-20 14:30</Table.Cell>
              <Table.Cell>
                <button className="text-blue-600 hover:underline">수정</button>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 가로로 매우 긴 테이블을 보여줍니다.
테이블이 컨테이너 너비를 크게 초과하여 수평 스크롤이 필수적으로 발생합니다.
많은 열과 긴 텍스트를 포함하여 실제 사용 시나리오를 시뮬레이션합니다.
        \`
      }
    }
  },
  render: () => <div className="w-full max-w-2xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">가로 스크롤 테이블 (매우 넓음)</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head className="min-w-[100px]">ID</Table.Head>
            <Table.Head className="min-w-[150px]">이름</Table.Head>
            <Table.Head className="min-w-[200px]">이메일 주소</Table.Head>
            <Table.Head className="min-w-[150px]">전화번호</Table.Head>
            <Table.Head className="min-w-[200px]">부서명</Table.Head>
            <Table.Head className="min-w-[120px]">직급</Table.Head>
            <Table.Head className="min-w-[150px]">입사일</Table.Head>
            <Table.Head className="min-w-[100px]">상태</Table.Head>
            <Table.Head className="min-w-[180px]">마지막 로그인 시간</Table.Head>
            <Table.Head className="min-w-[200px]">주소 (상세 주소 포함)</Table.Head>
            <Table.Head className="min-w-[150px]">비고 및 특이사항</Table.Head>
            <Table.Head className="min-w-[120px]">작업</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sampleUsers.map(user => <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>010-1234-5678</Table.Cell>
              <Table.Cell>소프트웨어 개발팀</Table.Cell>
              <Table.Cell>선임 개발자</Table.Cell>
              <Table.Cell>2024-01-15</Table.Cell>
              <Table.Cell>{user.status}</Table.Cell>
              <Table.Cell>2024-01-20 14:30:25</Table.Cell>
              <Table.Cell>서울특별시 강남구 테헤란로 123길 45, 101동 101호</Table.Cell>
              <Table.Cell>정기 점검 완료, 추가 교육 필요</Table.Cell>
              <Table.Cell>
                <button className="text-blue-600 hover:underline">수정</button>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...m.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div className="h-96 w-full max-w-4xl">
      <h3 className="mb-4 text-sm font-semibold text-gray-700">인터랙티브 플레이그라운드</h3>
      <Table showVertical={args.showVertical} showHorizontal={args.showHorizontal}>
        <Table.Header>
          <Table.Row>
            <Table.Head>이름</Table.Head>
            <Table.Head>이메일</Table.Head>
            <Table.Head>역할</Table.Head>
            <Table.Head>상태</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Array.from({
          length: 20
        }).map((_, index) => <Table.Row key={index}>
              <Table.Cell>사용자 {index + 1}</Table.Cell>
              <Table.Cell>user{index + 1}@example.com</Table.Cell>
              <Table.Cell>{index % 3 === 0 ? '관리자' : '사용자'}</Table.Cell>
              <Table.Cell>{index % 2 === 0 ? '활성' : '비활성'}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>,
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Table 컴포넌트의 스크롤 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 \\\`showVertical\\\`, \\\`showHorizontal\\\` 속성을 변경해보세요.

## 사용 팁

- **Show Vertical**: \\\`false\\\`로 설정하면 수직 스크롤바가 표시되지 않습니다.
- **Show Horizontal**: \\\`false\\\`로 설정하면 수평 스크롤바가 표시되지 않습니다.
        \`
      }
    }
  },
  args: {
    showVertical: true,
    showHorizontal: true
  } as Record<string, unknown>
}`,...T.parameters?.docs?.source}}};const y=["Basic","WithFooter","Scrollable","EmptyState","LoadingState","CustomStyles","WideTable","HorizontalScroll","Playground"];export{r as Basic,i as CustomStyles,b as EmptyState,m as HorizontalScroll,c as LoadingState,T as Playground,o as Scrollable,t as WideTable,d as WithFooter,y as __namedExportsOrder,u as default};
