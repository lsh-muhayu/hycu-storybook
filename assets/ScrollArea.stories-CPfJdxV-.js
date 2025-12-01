import{j as e,r as u}from"./iframe-mkfPu5JP.js";import{S as r,a as y}from"./ScrollArea-BxEtyMDU.js";import{B as v}from"./Button-pJMiEcIy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaBjddpJ.js";import"./index-DVeWkFTi.js";const H={title:"Shared/UI/ScrollArea",component:r,parameters:{layout:"centered",docs:{description:{component:`
### 스크롤 영역 컴포넌트

ScrollArea 컴포넌트는 긴 콘텐츠를 스크롤 가능한 영역으로 표시하기 위한 컴포넌트입니다.
Radix UI의 ScrollArea를 기반으로 하며, 세로 및 가로 스크롤바를 선택적으로 표시할 수 있습니다.

## 주요 기능

- **세로 스크롤**: \`showVertical\` prop을 통해 세로 스크롤바 표시 여부 제어
- **가로 스크롤**: \`showHorizontal\` prop을 통해 가로 스크롤바 표시 여부 제어
- **자동 크기 조절**: \`ScrollAreaAutosize\` 컴포넌트를 통한 자동 크기 조절
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<ScrollArea className="h-64 w-80">
  <div>긴 콘텐츠...</div>
</ScrollArea>

<ScrollArea className="h-64 w-80" showVertical showHorizontal>
  <div>양방향 스크롤 콘텐츠...</div>
</ScrollArea>

<ScrollAreaAutosize className="h-64 w-80">
  <div>자동 크기 조절 콘텐츠...</div>
</ScrollAreaAutosize>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{showVertical:{control:"boolean",description:"세로 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showHorizontal:{control:"boolean",description:"가로 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},t=Array.from({length:50},(s,a)=>`문단 ${a+1}: 이것은 긴 텍스트 콘텐츠입니다. 스크롤이 필요한 긴 내용을 보여주기 위한 예시입니다. 각 문단은 충분한 길이를 가지고 있어 스크롤 영역의 동작을 확인할 수 있습니다.`).join(`

`),b=Array.from({length:30},(s,a)=>`항목 ${a+1}`),n={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 ScrollArea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 showVertical, showHorizontal 등의 속성을 변경해보세요.

## 사용 팁

- **ShowVertical**: \`true\`로 설정하면 세로 스크롤바가 표시됩니다. (기본값: true)
- **ShowHorizontal**: \`true\`로 설정하면 가로 스크롤바가 표시됩니다. (기본값: false)
- 스크롤바는 콘텐츠가 영역을 넘어갈 때만 표시됩니다.
        `}}},args:{showVertical:!0,showHorizontal:!0},render:s=>e.jsx(r,{className:"h-64 w-80 rounded border border-gray-300 p-4",...s,children:e.jsxs("div",{className:"min-w-[800px] pr-4 pb-4",children:[e.jsx("p",{className:"mb-4 text-sm font-semibold text-gray-700",children:"스크롤 가능한 콘텐츠"}),e.jsx("div",{className:"space-y-4",children:Array.from({length:10},(a,o)=>e.jsx("div",{className:"flex gap-4 text-sm whitespace-nowrap text-gray-600",children:Array.from({length:15},(c,l)=>e.jsxs("div",{className:"min-w-[150px] rounded bg-gray-100 p-2",children:["항목 ",o+1,"-",l+1]},l))},o))})]})})},d={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본 스크롤 영역"}),e.jsx(r,{className:"h-64 w-80 rounded border border-gray-300 p-4",children:e.jsxs("div",{className:"pr-4",children:[e.jsx("p",{className:"mb-4 text-sm font-semibold text-gray-700",children:"긴 텍스트 콘텐츠"}),e.jsx("div",{className:"space-y-2 text-sm text-gray-600",children:t})]})})]})})},i={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"세로 스크롤 (기본)"}),e.jsx(r,{className:"h-64 w-80 rounded border border-gray-300 p-4",showVertical:!0,children:e.jsxs("div",{className:"pr-4",children:[e.jsx("p",{className:"mb-4 text-sm font-semibold text-gray-700",children:"세로로 스크롤 가능한 콘텐츠"}),e.jsx("div",{className:"space-y-2 text-sm text-gray-600",children:t})]})})]})})},m={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"가로 스크롤"}),e.jsx(r,{className:"h-48 w-80 rounded border border-gray-300 p-4",showHorizontal:!0,children:e.jsxs("div",{className:"pb-4",children:[e.jsx("p",{className:"mb-4 text-sm font-semibold text-gray-700",children:"가로로 스크롤 가능한 콘텐츠"}),e.jsx("div",{className:"flex gap-4 text-sm whitespace-nowrap text-gray-600",children:Array.from({length:20},(s,a)=>e.jsxs("div",{className:"min-w-[200px] rounded bg-gray-100 p-4",children:["넓은 콘텐츠 박스 ",a+1]},a))})]})})]})})},x={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"양방향 스크롤"}),e.jsx(r,{className:"h-64 w-80 rounded border border-gray-300 p-4",showVertical:!0,showHorizontal:!0,children:e.jsxs("div",{className:"pr-4 pb-4",children:[e.jsx("p",{className:"mb-4 text-sm font-semibold text-gray-700",children:"세로와 가로 모두 스크롤 가능한 콘텐츠"}),e.jsx("div",{className:"space-y-4",children:Array.from({length:10},(s,a)=>e.jsx("div",{className:"flex gap-4 text-sm whitespace-nowrap text-gray-600",children:Array.from({length:15},(o,c)=>e.jsxs("div",{className:"min-w-[150px] rounded bg-gray-100 p-2",children:["항목 ",a+1,"-",c+1]},c))},a))})]})})]})})},p={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"리스트 콘텐츠"}),e.jsx(r,{className:"h-64 w-80 rounded border border-gray-300",children:e.jsx("div",{className:"p-2",children:e.jsx("ul",{className:"space-y-1",children:b.map((s,a)=>e.jsx("li",{className:"rounded px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100",children:s},a))})})})]})})},h={render:()=>{const[s,a]=u.useState(3),o="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!",c=Array(s).fill(0).map((l,f)=>e.jsx("p",{className:"mb-4 text-sm text-gray-600",children:o},f));return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"자동 크기 조절"}),e.jsx(y,{className:"max-h-[300px] max-w-[400px] rounded border border-gray-300",children:e.jsx("div",{className:"p-4",children:c})})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx(v,{color:"danger",variant:"filled",size:"md",onClick:()=>a(l=>Math.max(0,l-1)),disabled:s===0,children:"문단 제거"}),e.jsx(v,{color:"primary",variant:"filled",size:"md",onClick:()=>a(l=>Math.min(10,l+1)),disabled:s===10,children:"문단 추가"})]})]})}},g={render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"스크롤바 없음"}),e.jsx(r,{className:"h-64 w-80 rounded border border-gray-300 p-4",showVertical:!1,showHorizontal:!1,children:e.jsx("div",{className:"pr-4",children:e.jsx("div",{className:"space-y-2 text-sm text-gray-600",children:t})})})]})})},N={render:()=>e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"다양한 크기"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"작은 크기 (h-32)"}),e.jsx(r,{className:"h-32 w-80 rounded border border-gray-300 p-4",children:e.jsx("div",{className:"pr-4",children:e.jsx("div",{className:"space-y-2 text-sm text-gray-600",children:t})})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"중간 크기 (h-48)"}),e.jsx(r,{className:"h-48 w-80 rounded border border-gray-300 p-4",children:e.jsx("div",{className:"pr-4",children:e.jsx("div",{className:"space-y-2 text-sm text-gray-600",children:t})})})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("p",{className:"text-xs text-gray-500",children:"큰 크기 (h-64)"}),e.jsx(r,{className:"h-64 w-80 rounded border border-gray-300 p-4",children:e.jsx("div",{className:"pr-4",children:e.jsx("div",{className:"space-y-2 text-sm text-gray-600",children:t})})})]})]})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 ScrollArea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 showVertical, showHorizontal 등의 속성을 변경해보세요.

## 사용 팁

- **ShowVertical**: \\\`true\\\`로 설정하면 세로 스크롤바가 표시됩니다. (기본값: true)
- **ShowHorizontal**: \\\`true\\\`로 설정하면 가로 스크롤바가 표시됩니다. (기본값: false)
- 스크롤바는 콘텐츠가 영역을 넘어갈 때만 표시됩니다.
        \`
      }
    }
  },
  args: {
    showVertical: true,
    showHorizontal: true
  },
  render: args => <ScrollArea className="h-64 w-80 rounded border border-gray-300 p-4" {...args}>
      <div className="min-w-[800px] pr-4 pb-4">
        <p className="mb-4 text-sm font-semibold text-gray-700">스크롤 가능한 콘텐츠</p>
        <div className="space-y-4">
          {Array.from({
          length: 10
        }, (_, i) => <div key={i} className="flex gap-4 text-sm whitespace-nowrap text-gray-600">
              {Array.from({
            length: 15
          }, (_, j) => <div key={j} className="min-w-[150px] rounded bg-gray-100 p-2">
                  항목 {i + 1}-{j + 1}
                </div>)}
            </div>)}
        </div>
      </div>
    </ScrollArea>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">기본 스크롤 영역</h3>
        <ScrollArea className="h-64 w-80 rounded border border-gray-300 p-4">
          <div className="pr-4">
            <p className="mb-4 text-sm font-semibold text-gray-700">긴 텍스트 콘텐츠</p>
            <div className="space-y-2 text-sm text-gray-600">{longText}</div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">세로 스크롤 (기본)</h3>
        <ScrollArea className="h-64 w-80 rounded border border-gray-300 p-4" showVertical>
          <div className="pr-4">
            <p className="mb-4 text-sm font-semibold text-gray-700">세로로 스크롤 가능한 콘텐츠</p>
            <div className="space-y-2 text-sm text-gray-600">{longText}</div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">가로 스크롤</h3>
        <ScrollArea className="h-48 w-80 rounded border border-gray-300 p-4" showHorizontal>
          <div className="pb-4">
            <p className="mb-4 text-sm font-semibold text-gray-700">가로로 스크롤 가능한 콘텐츠</p>
            <div className="flex gap-4 text-sm whitespace-nowrap text-gray-600">
              {Array.from({
              length: 20
            }, (_, i) => <div key={i} className="min-w-[200px] rounded bg-gray-100 p-4">
                  넓은 콘텐츠 박스 {i + 1}
                </div>)}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">양방향 스크롤</h3>
        <ScrollArea className="h-64 w-80 rounded border border-gray-300 p-4" showVertical showHorizontal>
          <div className="pr-4 pb-4">
            <p className="mb-4 text-sm font-semibold text-gray-700">
              세로와 가로 모두 스크롤 가능한 콘텐츠
            </p>
            <div className="space-y-4">
              {Array.from({
              length: 10
            }, (_, i) => <div key={i} className="flex gap-4 text-sm whitespace-nowrap text-gray-600">
                  {Array.from({
                length: 15
              }, (_, j) => <div key={j} className="min-w-[150px] rounded bg-gray-100 p-2">
                      항목 {i + 1}-{j + 1}
                    </div>)}
                </div>)}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">리스트 콘텐츠</h3>
        <ScrollArea className="h-64 w-80 rounded border border-gray-300">
          <div className="p-2">
            <ul className="space-y-1">
              {longList.map((item, index) => <li key={index} className="rounded px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100">
                  {item}
                </li>)}
            </ul>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(3);
    const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';
    const content = Array(count).fill(0).map((_, index) => <p key={index} className="mb-4 text-sm text-gray-600">
          {lorem}
        </p>);
    return <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">자동 크기 조절</h3>
          <ScrollAreaAutosize className="max-h-[300px] max-w-[400px] rounded border border-gray-300">
            <div className="p-4">{content}</div>
          </ScrollAreaAutosize>
        </div>
        <div className="flex justify-center gap-2">
          <Button color="danger" variant="filled" size="md" onClick={() => setCount(prev => Math.max(0, prev - 1))} disabled={count === 0}>
            문단 제거
          </Button>
          <Button color="primary" variant="filled" size="md" onClick={() => setCount(prev => Math.min(10, prev + 1))} disabled={count === 10}>
            문단 추가
          </Button>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">스크롤바 없음</h3>
        <ScrollArea className="h-64 w-80 rounded border border-gray-300 p-4" showVertical={false} showHorizontal={false}>
          <div className="pr-4">
            <div className="space-y-2 text-sm text-gray-600">{longText}</div>
          </div>
        </ScrollArea>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">다양한 크기</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">작은 크기 (h-32)</p>
            <ScrollArea className="h-32 w-80 rounded border border-gray-300 p-4">
              <div className="pr-4">
                <div className="space-y-2 text-sm text-gray-600">{longText}</div>
              </div>
            </ScrollArea>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">중간 크기 (h-48)</p>
            <ScrollArea className="h-48 w-80 rounded border border-gray-300 p-4">
              <div className="pr-4">
                <div className="space-y-2 text-sm text-gray-600">{longText}</div>
              </div>
            </ScrollArea>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-500">큰 크기 (h-64)</p>
            <ScrollArea className="h-64 w-80 rounded border border-gray-300 p-4">
              <div className="pr-4">
                <div className="space-y-2 text-sm text-gray-600">{longText}</div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
}`,...N.parameters?.docs?.source}}};const _=["Playground","Basic","Vertical","Horizontal","Both","List","Autosize","NoScrollbars","DifferentSizes"];export{h as Autosize,d as Basic,x as Both,N as DifferentSizes,m as Horizontal,p as List,g as NoScrollbars,n as Playground,i as Vertical,_ as __namedExportsOrder,H as default};
