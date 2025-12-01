import{j as e,H as x,r as y}from"./iframe-BP1alvHm.js";import{D as n}from"./Dialog-ClYLV_sj.js";import{B as h}from"./Button-DGN8E8Cb.js";import{L as l}from"./Label-zRnQYtwd.js";import{I as u}from"./Input-DaRPY2K2.js";import{T as f}from"./Textarea-D2bJWxG8.js";import{C as D}from"./Checkbox-BOO-U1cr.js";import{S as t}from"./Select-Dx73THoS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-xYWV55g1.js";import"./index-B7T8IL5q.js";import"./index-RDL9oT1P.js";import"./index-D0l3Br2T.js";import"./ScrollArea-C7QBIvFS.js";import"./index-CxL78S5I.js";import"./index-CfSxSIxW.js";const R={title:"Shared/UI/Dialog",parameters:{layout:"centered",docs:{description:{component:`
### 다이얼로그 컴포넌트

Dialog 컴포넌트는 사용자에게 중요한 정보를 표시하거나 확인을 받기 위한 모달 다이얼로그입니다.
Radix UI의 Dialog를 기반으로 하며, overlay-kit과 함께 사용할 수 있도록 설계되었습니다.

## 주요 기능

- **헤더/바디/푸터 구조**: \`Dialog.Header\`, \`Dialog.Body\`, \`Dialog.Footer\`를 통한 구조화된 레이아웃
- **로딩 상태**: \`loading\` prop을 통한 로딩 상태 관리
- **닫기 모드**: \`dismissMode\` prop을 통한 닫기 동작 제어 (none/dismiss)
- **확인/취소 버튼**: \`Dialog.ConfirmButton\`, \`Dialog.CancelButton\`을 통한 편리한 버튼 제공
- **스크롤 가능한 바디**: \`Dialog.Body\`는 자동으로 스크롤 영역을 제공

## 사용 예시

\`\`\`tsx
const overlay = useOverlay();
const { open, close, isOpen, unmount } = overlay;

open(({ overlayId, close, unmount }) => (
  <Dialog 
    overlayControl={{ overlayId, isOpen: true, close, unmount }}
    loading={false}
    dismissMode="dismiss"
  >
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>제목</Dialog.Title>
        <Dialog.Description>설명</Dialog.Description>
      </Dialog.Header>
      <Dialog.Body>
        <p>내용</p>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CancelButton>취소</Dialog.CancelButton>
        <Dialog.ConfirmButton>확인</Dialog.ConfirmButton>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog>
));
\`\`\`
        `}}},tags:["autodocs"],argTypes:{loading:{control:"boolean",description:"Dialog의 로딩 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},dismissMode:{control:"select",options:["none","dismiss"],description:"Dialog의 닫기 동작 모드",table:{type:{summary:"'none' | 'dismiss'"},defaultValue:{summary:"'none'"}}}}},i={render:a=>e.jsxs(n.PrimitiveRoot,{...a,children:[e.jsx(n.Trigger,{children:"다이얼로그 열기"}),e.jsxs(n.Content,{children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:"Trigger를 사용한 다이얼로그"}),e.jsx(n.Description,{children:"Dialog.Trigger를 사용하여 다이얼로그를 열 수 있습니다."})]}),e.jsx(n.Body,{children:e.jsx("p",{className:"text-gray-700",children:"이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다."})}),e.jsxs(n.Footer,{children:[e.jsx(n.CancelButton,{children:"취소"}),e.jsx(n.Close,{children:e.jsx(n.ConfirmButton,{children:"확인"})})]})]})]})},c={render:()=>{const a=()=>{x.open(o=>e.jsx(n,{control:o,children:e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:e.jsx(n.Title,{children:"기본 다이얼로그"})}),e.jsx(n.Body,{children:e.jsx("p",{className:"text-gray-700",children:"다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다."})}),e.jsxs(n.Footer,{children:[e.jsx(n.CancelButton,{children:"취소"}),e.jsx(n.Close,{children:e.jsx(n.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(h,{onClick:a,children:"다이얼로그 열기"})}},d={render:()=>{const a=({control:o})=>{const[s,r]=y.useState(!1);return e.jsx(n,{control:o,loading:s,dismissMode:"dismiss",children:e.jsxs(n.Content,{children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:"로딩 상태 다이얼로그"}),e.jsx(n.Description,{children:"로딩 중일 때는 다이얼로그를 닫을 수 없습니다."})]}),e.jsxs(n.Body,{children:[e.jsx("p",{className:"text-gray-700",children:"로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다."}),s&&e.jsx("p",{className:"text-gray-700",children:"로딩 중입니다..."})]}),e.jsxs(n.Footer,{children:[e.jsx(n.CancelButton,{children:"취소"}),e.jsx(n.ConfirmButton,{onClick:async()=>{r(!0),await new Promise(j=>setTimeout(j,2e3)),r(!1),o.close()},children:"확인"})]})]})})};return e.jsx(h,{onClick:()=>x.open(o=>e.jsx(a,{control:o})),children:"로딩 다이얼로그 열기"})}},g={parameters:{docs:{description:{story:`
스크롤이 생기게 하려면 **Dialog.Content에 height을 반드시 설정**해야 합니다.
Content에 높이가 설정되지 않으면 내용이 길어져도 스크롤이 생기지 않습니다.

이 예시에서는 \`className="h-[500px]"\`를 사용하여 Content의 높이를 500px로 제한하고 있습니다.
        `}}},render:()=>{const a=()=>{x.open(o=>e.jsx(n,{control:o,children:e.jsxs(n.Content,{className:"h-[500px]",children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:"긴 내용이 있는 다이얼로그"}),e.jsx(n.Description,{children:"이 다이얼로그는 Body 영역에 스크롤이 생길 만큼 긴 내용을 포함합니다."})]}),e.jsx(n.Body,{children:Array.from({length:100}).map((s,r)=>e.jsxs("p",{children:["엄청 길면? ",r,"엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?"]},r))}),e.jsxs(n.Footer,{children:[e.jsx(n.CancelButton,{children:"취소"}),e.jsx(n.Close,{children:e.jsx(n.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(h,{onClick:a,children:"긴 내용 다이얼로그 열기"})}},m={parameters:{docs:{description:{story:`
가로 스크롤이 생기게 하려면 **Dialog.Content에 width을 제한**하고, **Body 내부에 가로로 넓은 콘텐츠**가 있어야 합니다.

이 예시에서는 \`className="w-[400px]"\`를 사용하여 Content의 너비를 400px로 제한하고, 넓은 테이블을 포함하여 가로 스크롤이 발생하도록 했습니다.
        `}}},render:()=>{const a=()=>{x.open(o=>e.jsx(n,{control:o,children:e.jsxs(n.Content,{className:"h-[400px] w-[400px]",children:[e.jsxs(n.Header,{children:[e.jsx(n.Title,{children:"가로/세로 스크롤이 있는 다이얼로그"}),e.jsx(n.Description,{children:"이 다이얼로그는 Body 영역에 가로 스크롤이 생길 만큼 넓은 콘텐츠를 포함합니다."})]}),e.jsx(n.Body,{children:e.jsx("div",{className:"min-w-[800px]",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-100",children:[e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"이름"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"이메일 주소"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"전화번호"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"소속 부서"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"직책"}),e.jsx("th",{className:"border border-gray-300 p-2 text-left",children:"상태"})]})}),e.jsx("tbody",{children:Array.from({length:10}).map((s,r)=>e.jsxs("tr",{children:[e.jsxs("td",{className:"border border-gray-300 p-2",children:["홍길동",r+1]}),e.jsxs("td",{className:"border border-gray-300 p-2",children:["hong.gildong",r+1,"@example.com"]}),e.jsxs("td",{className:"border border-gray-300 p-2",children:["010-1234-567",r]}),e.jsx("td",{className:"border border-gray-300 p-2",children:"컴퓨터공학과"}),e.jsx("td",{className:"border border-gray-300 p-2",children:"교수"}),e.jsx("td",{className:"border border-gray-300 p-2",children:"활성"})]},r))})]})})}),e.jsxs(n.Footer,{children:[e.jsx(n.CancelButton,{children:"취소"}),e.jsx(n.Close,{children:e.jsx(n.ConfirmButton,{children:"확인"})})]})]})}))};return e.jsx(h,{onClick:a,children:"가로 스크롤 다이얼로그 열기"})}},p={render:()=>e.jsxs(n.PrimitiveRoot,{children:[e.jsx(n.Trigger,{children:"주차별 논문지도 계획 추가"}),e.jsxs(n.Content,{className:"h-[750px] w-[500px]",children:[e.jsx(n.Header,{children:e.jsx(n.Title,{children:"주차별 논문지도 계획 추가"})}),e.jsx(n.Body,{children:e.jsxs("section",{className:"space-y-4",children:[e.jsxs("section",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsx(l,{required:!0,children:"주차"}),e.jsx(u,{type:"number"})]}),e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsx(l,{required:!0,children:"계획일"}),e.jsx(u,{type:"date"})]})]}),e.jsxs("section",{className:"flex w-full flex-col gap-2",children:[e.jsx(l,{required:!0,children:"담당교수 선택"}),e.jsxs("div",{className:"space-y-2.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(D,{id:"advisor-kim",className:"peer"}),e.jsx(l,{htmlFor:"advisor-kim",className:"peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700",children:"김교수 (주지도교수)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(D,{id:"advisor-hong",className:"peer"}),e.jsx(l,{htmlFor:"advisor-hong",className:"peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700",children:"홍교수 (부지도교수)"})]})]})]}),e.jsxs("section",{className:"flex w-full flex-col gap-2",children:[e.jsx(l,{required:!0,children:"지도 주제"}),e.jsx(u,{type:"text",placeholder:"예: 연구방법론 개요"})]}),e.jsxs("section",{className:"flex w-full flex-col gap-2",children:[e.jsx(l,{required:!0,children:"계획 내용"}),e.jsx(f,{className:"h-24",placeholder:"지도할 내용을 상세히 입력하세요"})]}),e.jsxs("section",{className:"flex w-full flex-col gap-2",children:[e.jsx(l,{required:!0,children:"지도 방식"}),e.jsxs(t,{children:[e.jsx(t.Trigger,{placeholder:"선택하세요"}),e.jsxs(t.Content,{children:[e.jsx(t.Item,{value:"대면",children:"대면"}),e.jsx(t.Item,{value:"온라인",children:"온라인"}),e.jsx(t.Item,{value:"Zoom",children:"Zoom"}),e.jsx(t.Item,{value:"이메일",children:"이메일"}),e.jsx(t.Item,{value:"전화",children:"전화"})]})]})]}),e.jsxs("div",{className:"flex items-start gap-2 rounded-md bg-blue-50 p-3",children:[e.jsx("span",{className:"text-base",children:"💡"}),e.jsx("p",{className:"text-sm text-gray-700",children:"계획을 저장한 후, 실제 지도를 진행하면 '실적입력' 버튼을 클릭하여 실행 내용을 기록하세요."})]})]})}),e.jsxs(n.Footer,{children:[e.jsx(n.CancelButton,{className:"w-full",children:"취소"}),e.jsx(n.Close,{children:e.jsx(n.ConfirmButton,{className:"w-full",children:"저장"})})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <Dialog.PrimitiveRoot {...args}>
        <Dialog.Trigger>다이얼로그 열기</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Trigger를 사용한 다이얼로그</Dialog.Title>
            <Dialog.Description>
              Dialog.Trigger를 사용하여 다이얼로그를 열 수 있습니다.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Body>
            <p className="text-gray-700">이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다.</p>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.CancelButton>취소</Dialog.CancelButton>
            <Dialog.Close>
              <Dialog.ConfirmButton>확인</Dialog.ConfirmButton>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.PrimitiveRoot>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleOpen = () => {
      overlay.open(control => <Dialog control={control}>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>기본 다이얼로그</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p className="text-gray-700">
                다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CancelButton>취소</Dialog.CancelButton>
              <Dialog.Close>
                <Dialog.ConfirmButton>확인</Dialog.ConfirmButton>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>);
    };
    return <Button onClick={handleOpen}>다이얼로그 열기</Button>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const LoadingDialog = ({
      control
    }: {
      control: OverlayControllerProps;
    }) => {
      const [loading, setLoading] = useState(false);
      return <Dialog control={control} loading={loading} dismissMode="dismiss">
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>로딩 상태 다이얼로그</Dialog.Title>
              <Dialog.Description>로딩 중일 때는 다이얼로그를 닫을 수 없습니다.</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <p className="text-gray-700">
                로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.
              </p>
              {loading && <p className="text-gray-700">로딩 중입니다...</p>}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CancelButton>취소</Dialog.CancelButton>
              <Dialog.ConfirmButton onClick={async () => {
              setLoading(true);
              await new Promise(resolve => setTimeout(resolve, 2000));
              setLoading(false);
              control.close();
            }}>
                확인
              </Dialog.ConfirmButton>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>;
    };
    return <Button onClick={() => overlay.open(control => <LoadingDialog control={control} />)}>
        로딩 다이얼로그 열기
      </Button>;
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
스크롤이 생기게 하려면 **Dialog.Content에 height을 반드시 설정**해야 합니다.
Content에 높이가 설정되지 않으면 내용이 길어져도 스크롤이 생기지 않습니다.

이 예시에서는 \\\`className="h-[500px]"\\\`를 사용하여 Content의 높이를 500px로 제한하고 있습니다.
        \`
      }
    }
  },
  render: () => {
    const handleOpen = () => {
      overlay.open(control => <Dialog control={control}>
          <Dialog.Content className="h-[500px]">
            <Dialog.Header>
              <Dialog.Title>긴 내용이 있는 다이얼로그</Dialog.Title>
              <Dialog.Description>
                이 다이얼로그는 Body 영역에 스크롤이 생길 만큼 긴 내용을 포함합니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              {Array.from({
              length: 100
            }).map((_, i) => <p key={i}>
                  엄청 길면? {i}엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
                  엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
                </p>)}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CancelButton>취소</Dialog.CancelButton>
              <Dialog.Close>
                <Dialog.ConfirmButton>확인</Dialog.ConfirmButton>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>);
    };
    return <Button onClick={handleOpen}>긴 내용 다이얼로그 열기</Button>;
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
가로 스크롤이 생기게 하려면 **Dialog.Content에 width을 제한**하고, **Body 내부에 가로로 넓은 콘텐츠**가 있어야 합니다.

이 예시에서는 \\\`className="w-[400px]"\\\`를 사용하여 Content의 너비를 400px로 제한하고, 넓은 테이블을 포함하여 가로 스크롤이 발생하도록 했습니다.
        \`
      }
    }
  },
  render: () => {
    const handleOpen = () => {
      overlay.open(control => <Dialog control={control}>
          <Dialog.Content className="h-[400px] w-[400px]">
            <Dialog.Header>
              <Dialog.Title>가로/세로 스크롤이 있는 다이얼로그</Dialog.Title>
              <Dialog.Description>
                이 다이얼로그는 Body 영역에 가로 스크롤이 생길 만큼 넓은 콘텐츠를 포함합니다.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <div className="min-w-[800px]">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">이름</th>
                      <th className="border border-gray-300 p-2 text-left">이메일 주소</th>
                      <th className="border border-gray-300 p-2 text-left">전화번호</th>
                      <th className="border border-gray-300 p-2 text-left">소속 부서</th>
                      <th className="border border-gray-300 p-2 text-left">직책</th>
                      <th className="border border-gray-300 p-2 text-left">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({
                    length: 10
                  }).map((_, i) => <tr key={i}>
                        <td className="border border-gray-300 p-2">홍길동{i + 1}</td>
                        <td className="border border-gray-300 p-2">
                          hong.gildong{i + 1}@example.com
                        </td>
                        <td className="border border-gray-300 p-2">010-1234-567{i}</td>
                        <td className="border border-gray-300 p-2">컴퓨터공학과</td>
                        <td className="border border-gray-300 p-2">교수</td>
                        <td className="border border-gray-300 p-2">활성</td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CancelButton>취소</Dialog.CancelButton>
              <Dialog.Close>
                <Dialog.ConfirmButton>확인</Dialog.ConfirmButton>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>);
    };
    return <Button onClick={handleOpen}>가로 스크롤 다이얼로그 열기</Button>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Dialog.PrimitiveRoot>
        <Dialog.Trigger>주차별 논문지도 계획 추가</Dialog.Trigger>
        <Dialog.Content className="h-[750px] w-[500px]">
          <Dialog.Header>
            <Dialog.Title>주차별 논문지도 계획 추가</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <section className="space-y-4">
              <section className="flex gap-4">
                <div className="flex w-full flex-col gap-2">
                  <Label required>주차</Label>
                  <Input type="number" />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Label required>계획일</Label>
                  <Input type="date" />
                </div>
              </section>
              <section className="flex w-full flex-col gap-2">
                <Label required>담당교수 선택</Label>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Checkbox id="advisor-kim" className="peer" />
                    <Label htmlFor="advisor-kim" className="peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700">
                      김교수 (주지도교수)
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="advisor-hong" className="peer" />
                    <Label htmlFor="advisor-hong" className="peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700">
                      홍교수 (부지도교수)
                    </Label>
                  </div>
                </div>
              </section>
              <section className="flex w-full flex-col gap-2">
                <Label required>지도 주제</Label>
                <Input type="text" placeholder="예: 연구방법론 개요" />
              </section>
              <section className="flex w-full flex-col gap-2">
                <Label required>계획 내용</Label>
                <Textarea className="h-24" placeholder="지도할 내용을 상세히 입력하세요" />
              </section>
              <section className="flex w-full flex-col gap-2">
                <Label required>지도 방식</Label>
                <Select>
                  <Select.Trigger placeholder="선택하세요" />
                  <Select.Content>
                    <Select.Item value="대면">대면</Select.Item>
                    <Select.Item value="온라인">온라인</Select.Item>
                    <Select.Item value="Zoom">Zoom</Select.Item>
                    <Select.Item value="이메일">이메일</Select.Item>
                    <Select.Item value="전화">전화</Select.Item>
                  </Select.Content>
                </Select>
              </section>
              <div className="flex items-start gap-2 rounded-md bg-blue-50 p-3">
                <span className="text-base">💡</span>
                <p className="text-sm text-gray-700">
                  계획을 저장한 후, 실제 지도를 진행하면 &apos;실적입력&apos; 버튼을 클릭하여 실행
                  내용을 기록하세요.
                </p>
              </div>
            </section>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.CancelButton className="w-full">취소</Dialog.CancelButton>
            <Dialog.Close>
              <Dialog.ConfirmButton className="w-full">저장</Dialog.ConfirmButton>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.PrimitiveRoot>;
  }
}`,...p.parameters?.docs?.source}}};const W=["Default","WithOverlayKit","WithLoading","WithLongContent","WithHorizontalScroll","ThesisGuidancePlanForm"];export{i as Default,p as ThesisGuidancePlanForm,m as WithHorizontalScroll,d as WithLoading,g as WithLongContent,c as WithOverlayKit,W as __namedExportsOrder,R as default};
