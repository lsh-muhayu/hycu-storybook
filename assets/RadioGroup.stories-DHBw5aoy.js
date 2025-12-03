import{c as U,r as c,j as e,a as $,b as H}from"./iframe-Ct6cBN0f.js";import{c as V,d as L,u as _,a as F,P as X}from"./index-w90ALqq8.js";import{c as S,R as Y,I as J}from"./index-DibzOx2c.js";import{u as Q}from"./index-BnUxCBFQ.js";import{a as Z}from"./index-Ckh8wc6S.js";import{u as ee}from"./index-cTMbTQbW.js";import{u as ae}from"./index-RvRXAbJj.js";import{L as r}from"./Label-D9V8cGxS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJ4grFFS.js";import"./index-CMO2IfL1.js";const se=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],re=U("circle",se);var k="Radio",[oe,C]=V(k),[ie,te]=oe(k),P=c.forwardRef((a,l)=>{const{__scopeRadio:o,name:d,checked:i=!1,required:t,disabled:n,value:g="on",onCheck:v,form:x,...f}=a,[u,h]=c.useState(null),p=_(l,b=>h(b)),m=c.useRef(!1),N=u?x||!!u.closest("form"):!0;return e.jsxs(ie,{scope:o,checked:i,disabled:n,children:[e.jsx(L.button,{type:"button",role:"radio","aria-checked":i,"data-state":A(i),"data-disabled":n?"":void 0,disabled:n,value:g,...f,ref:p,onClick:F(a.onClick,b=>{i||v?.(),N&&(m.current=b.isPropagationStopped(),m.current||b.stopPropagation())})}),N&&e.jsx(D,{control:u,bubbles:!m.current,name:d,value:g,checked:i,required:t,disabled:n,form:x,style:{transform:"translateX(-100%)"}})]})});P.displayName=k;var E="RadioIndicator",O=c.forwardRef((a,l)=>{const{__scopeRadio:o,forceMount:d,...i}=a,t=te(E,o);return e.jsx(X,{present:d||t.checked,children:e.jsx(L.span,{"data-state":A(t.checked),"data-disabled":t.disabled?"":void 0,...i,ref:l})})});O.displayName=E;var le="RadioBubbleInput",D=c.forwardRef(({__scopeRadio:a,control:l,checked:o,bubbles:d=!0,...i},t)=>{const n=c.useRef(null),g=_(n,t),v=ae(o),x=ee(l);return c.useEffect(()=>{const f=n.current;if(!f)return;const u=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(u,"checked").set;if(v!==o&&p){const m=new Event("click",{bubbles:d});p.call(f,o),f.dispatchEvent(m)}},[v,o,d]),e.jsx(L.input,{type:"radio","aria-hidden":!0,defaultChecked:o,...i,tabIndex:-1,ref:g,style:{...i.style,...x,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});D.displayName=le;function A(a){return a?"checked":"unchecked"}var de=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],w="RadioGroup",[ne]=V(w,[S,C]),z=S(),M=C(),[ce,pe]=ne(w),q=c.forwardRef((a,l)=>{const{__scopeRadioGroup:o,name:d,defaultValue:i,value:t,required:n=!1,disabled:g=!1,orientation:v,dir:x,loop:f=!0,onValueChange:u,...h}=a,p=z(o),m=Z(x),[N,b]=Q({prop:t,defaultProp:i??null,onChange:u,caller:w});return e.jsx(ce,{scope:o,name:d,required:n,disabled:g,value:N,onValueChange:b,children:e.jsx(Y,{asChild:!0,...p,orientation:v,dir:m,loop:f,children:e.jsx(L.div,{role:"radiogroup","aria-required":n,"aria-orientation":v,"data-disabled":g?"":void 0,dir:m,...h,ref:l})})})});q.displayName=w;var T="RadioGroupItem",W=c.forwardRef((a,l)=>{const{__scopeRadioGroup:o,disabled:d,...i}=a,t=pe(T,o),n=t.disabled||d,g=z(o),v=M(o),x=c.useRef(null),f=_(l,x),u=t.value===i.value,h=c.useRef(!1);return c.useEffect(()=>{const p=N=>{de.includes(N.key)&&(h.current=!0)},m=()=>h.current=!1;return document.addEventListener("keydown",p),document.addEventListener("keyup",m),()=>{document.removeEventListener("keydown",p),document.removeEventListener("keyup",m)}},[]),e.jsx(J,{asChild:!0,...g,focusable:!n,active:u,children:e.jsx(P,{disabled:n,required:t.required,checked:u,...v,...i,name:t.name,ref:f,onCheck:()=>t.onValueChange(i.value),onKeyDown:F(p=>{p.key==="Enter"&&p.preventDefault()}),onFocus:F(i.onFocus,()=>{h.current&&x.current?.click()})})})});W.displayName=T;var me="RadioGroupIndicator",B=c.forwardRef((a,l)=>{const{__scopeRadioGroup:o,...d}=a,i=M(o);return e.jsx(O,{...i,...d,ref:l})});B.displayName=me;var ue=q,ge=W,ve=B;const K=a=>{const{className:l,...o}=a;return e.jsx(ue,{"data-slot":"radio-group",className:$(l),...o})},xe=H(["size-4 rounded-full border transition-all focus-visible:ring","outline-none disabled:cursor-not-allowed disabled:border-gray-300","data-[invalid=true]:border-danger data-[invalid=true]:focus-visible:ring-danger data-[invalid=true]:hover:border-danger data-[invalid=true]:hover:bg-red-50",'disabled:[&_[data-slot="radio-group-indicator"]_svg]:fill-gray-300 disabled:[&_[data-slot="radio-group-indicator"]_svg]:stroke-gray-300','data-[invalid=true]:[&_[data-slot="radio-group-indicator"]_svg]:fill-danger data-[invalid=true]:[&_[data-slot="radio-group-indicator"]_svg]:stroke-danger'],{variants:{color:{primary:["border-primary focus-visible:ring-primary not-disabled:hover:bg-sky-50",'[&_[data-slot="radio-group-indicator"]_svg]:fill-primary [&_[data-slot="radio-group-indicator"]_svg]:stroke-primary'],secondary:["border-gray-600 not-disabled:hover:bg-gray-50 focus-visible:ring-gray-600",'[&_[data-slot="radio-group-indicator"]_svg]:fill-gray-600 [&_[data-slot="radio-group-indicator"]_svg]:stroke-gray-600'],danger:["border-danger focus-visible:ring-danger not-disabled:hover:bg-red-50",'[&_[data-slot="radio-group-indicator"]_svg]:fill-danger [&_[data-slot="radio-group-indicator"]_svg]:stroke-danger'],success:["border-success focus-visible:ring-success not-disabled:hover:bg-green-50",'[&_[data-slot="radio-group-indicator"]_svg]:fill-success [&_[data-slot="radio-group-indicator"]_svg]:stroke-success'],warning:["border-warning focus-visible:ring-warning not-disabled:hover:bg-yellow-50",'[&_[data-slot="radio-group-indicator"]_svg]:fill-warning [&_[data-slot="radio-group-indicator"]_svg]:stroke-warning']}},defaultVariants:{color:"primary"}}),fe=a=>{const{className:l,color:o,invalid:d,disabled:i,...t}=a;return e.jsx(ge,{"data-slot":"radio-group-item","data-invalid":d,disabled:i,className:$(xe({color:o}),l),...t,children:e.jsx(ve,{"data-slot":"radio-group-indicator",className:"relative flex items-center justify-center",children:e.jsx(re,{className:"absolute top-1/2 left-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2"})})})},s=Object.assign(K,{Item:fe});K.__docgenInfo={description:"",methods:[],displayName:"RadioGroupRoot"};const _e={title:"Shared/UI/RadioGroup",component:s.Item,parameters:{layout:"centered",controls:{exclude:["className","onValueChange","value","name","dir","loop","orientation","required","asChild","onClick","onKeyDown","tabIndex","style","aria-label","aria-labelledby","aria-describedby","aria-required"]},docs:{description:{component:`
### 라디오 그룹 컴포넌트

RadioGroup 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 라디오 버튼 그룹입니다.

## 주요 기능

- **단일 선택**: 여러 옵션 중 하나만 선택 가능
- **다양한 색상**: \`primary\`, \`secondary\`, \`danger\`, \`success\`, \`warning\` 색상 지원
- **상태 관리**: \`disabled\`, \`invalid\` 상태 지원
- **접근성**: 표준 HTML radio 속성으로 접근성 지원
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`tsx
<RadioGroup defaultValue="option1" color="primary">
  <div className="flex items-center gap-2">
    <RadioGroup.Item value="option1" id="option1" />
    <Label htmlFor="option1">옵션 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroup.Item value="option2" id="option2" />
    <Label htmlFor="option2">옵션 2</Label>
  </div>
</RadioGroup>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning"],description:"라디오 그룹의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"}}},defaultValue:{control:"text",description:"기본 선택 값",table:{type:{summary:"string"}}},value:{control:"text",description:"현재 선택 값 (제어 컴포넌트)",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"라디오 그룹 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},G=["primary","secondary","danger","success","warning"],y={parameters:{controls:{disable:!1},docs:{description:{story:`
라디오 그룹을 클릭하면 옵션을 선택할 수 있습니다.
        `}}},render:a=>e.jsxs(s,{className:"grid gap-3",defaultValue:"option1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{...a,value:"option1",id:"option1"}),e.jsx(r,{htmlFor:"option1",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{...a,value:"option2",id:"option2"}),e.jsx(r,{htmlFor:"option2",children:"옵션 2"})]})]}),args:{color:"primary",value:"option1"}},j={args:{value:"option1"},render:()=>e.jsx("div",{className:"flex flex-row flex-wrap gap-8",children:G.map(a=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-700 capitalize",children:a}),e.jsxs(s,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option1",id:`${a}-option1`,color:a}),e.jsx(r,{htmlFor:`${a}-option1`,children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option2",id:`${a}-option2`,color:a}),e.jsx(r,{htmlFor:`${a}-option2`,children:"옵션 2"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option3",id:`${a}-option3`,color:a}),e.jsx(r,{htmlFor:`${a}-option3`,children:"옵션 3"})]})]})]},a))})},R={args:{value:"option1"},render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"기본 상태"}),e.jsx("div",{className:"grid grid-cols-5 gap-6",children:G.map(a=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 capitalize",children:a}),e.jsxs(s,{defaultValue:"option1",className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option1",id:`default-${a}-1`,color:a}),e.jsx(r,{htmlFor:`default-${a}-1`,className:"text-sm",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option2",id:`default-${a}-2`,color:a}),e.jsx(r,{htmlFor:`default-${a}-2`,className:"text-sm",children:"옵션 2"})]})]})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Disabled 상태"}),e.jsx("div",{className:"grid grid-cols-5 gap-6",children:G.map(a=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 capitalize",children:a}),e.jsxs(s,{defaultValue:"option1",disabled:!0,className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option1",id:`disabled-${a}-1`,disabled:!0,color:a}),e.jsx(r,{htmlFor:`disabled-${a}-1`,className:"text-sm",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option2",id:`disabled-${a}-2`,disabled:!0,color:a}),e.jsx(r,{htmlFor:`disabled-${a}-2`,className:"text-sm",children:"옵션 2"})]})]})]},a))})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-800",children:"Invalid 상태"}),e.jsx("div",{className:"grid grid-cols-5 gap-6",children:G.map(a=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-600 capitalize",children:a}),e.jsxs(s,{defaultValue:"option1",className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{invalid:!0,value:"option1",id:`invalid-${a}-1`,"aria-invalid":"true",color:a}),e.jsx(r,{htmlFor:`invalid-${a}-1`,className:"text-sm",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{invalid:!0,value:"option2",id:`invalid-${a}-2`,"aria-invalid":"true",color:a}),e.jsx(r,{htmlFor:`invalid-${a}-2`,className:"text-sm",children:"옵션 2"})]})]})]},a))})]})]})},I={args:{value:"option1"},render:()=>e.jsxs("div",{className:"flex flex-row flex-wrap gap-6",children:[e.jsxs(s,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option1",id:"primary-1",className:"peer",color:"primary"}),e.jsx(r,{htmlFor:"primary-1",className:"peer-data-[state=checked]:text-primary",children:"Primary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option2",id:"primary-2",className:"peer",color:"primary"}),e.jsx(r,{htmlFor:"primary-2",className:"peer-data-[state=checked]:text-primary",children:"Primary Option 2"})]})]}),e.jsxs(s,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option1",id:"secondary-1",className:"peer",color:"secondary"}),e.jsx(r,{htmlFor:"secondary-1",className:"peer-data-[state=checked]:text-gray-600",children:"Secondary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option2",id:"secondary-2",className:"peer",color:"secondary"}),e.jsx(r,{htmlFor:"secondary-2",className:"peer-data-[state=checked]:text-gray-600",children:"Secondary Option 2"})]})]}),e.jsxs(s,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option1",id:"danger-1",className:"peer",color:"danger"}),e.jsx(r,{htmlFor:"danger-1",className:"peer-data-[state=checked]:text-danger",children:"Danger"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option2",id:"danger-2",className:"peer",color:"danger"}),e.jsx(r,{htmlFor:"danger-2",className:"peer-data-[state=checked]:text-danger",children:"Danger Option 2"})]})]}),e.jsxs(s,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option1",id:"success-1",className:"peer",color:"success"}),e.jsx(r,{htmlFor:"success-1",className:"peer-data-[state=checked]:text-success",children:"Success"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option2",id:"success-2",className:"peer",color:"success"}),e.jsx(r,{htmlFor:"success-2",className:"peer-data-[state=checked]:text-success",children:"Success Option 2"})]})]}),e.jsxs(s,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option1",id:"warning-1",className:"peer",color:"warning"}),e.jsx(r,{htmlFor:"warning-1",className:"peer-data-[state=checked]:text-warning",children:"Warning"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option2",id:"warning-2",className:"peer",color:"warning"}),e.jsx(r,{htmlFor:"warning-2",className:"peer-data-[state=checked]:text-warning",children:"Warning Option 2"})]})]}),e.jsxs(s,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{invalid:!0,value:"option1",id:"invalid-1",className:"peer",color:"primary"}),e.jsx(r,{htmlFor:"invalid-1",className:"peer-data-[invalid=true]:text-danger",children:"Invalid"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{invalid:!0,value:"option2",id:"invalid-2",className:"peer",color:"primary"}),e.jsx(r,{htmlFor:"invalid-2",className:"peer-data-[invalid=true]:text-danger",children:"Invalid Option 2"})]})]}),e.jsxs(s,{defaultValue:"option1",className:"grid gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option1",id:"disabled-1",className:"peer",disabled:!0}),e.jsx(r,{htmlFor:"disabled-1",className:"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",children:"Disabled"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s.Item,{value:"option2",id:"disabled-2",className:"peer",disabled:!0}),e.jsx(r,{htmlFor:"disabled-2",className:"peer-disabled:cursor-not-allowed peer-disabled:opacity-50",children:"Disabled Option 2"})]})]})]})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
라디오 그룹을 클릭하면 옵션을 선택할 수 있습니다.
        \`
      }
    }
  },
  render: args => {
    return <RadioGroup className="grid gap-3" defaultValue="option1">
        <div className="flex items-center gap-2">
          <RadioGroup.Item {...args} value="option1" id="option1" />
          <Label htmlFor="option1">옵션 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup.Item {...args} value="option2" id="option2" />
          <Label htmlFor="option2">옵션 2</Label>
        </div>
      </RadioGroup>;
  },
  args: {
    color: 'primary',
    value: 'option1'
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'option1'
  },
  render: () => {
    return <div className="flex flex-row flex-wrap gap-8">
        {colors.map(color => <div key={color} className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-700 capitalize">{color}</h3>
            <RadioGroup defaultValue="option1" className="grid gap-3">
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="option1" id={\`\${color}-option1\`} color={color} />
                <Label htmlFor={\`\${color}-option1\`}>옵션 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="option2" id={\`\${color}-option2\`} color={color} />
                <Label htmlFor={\`\${color}-option2\`}>옵션 2</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="option3" id={\`\${color}-option3\`} color={color} />
                <Label htmlFor={\`\${color}-option3\`}>옵션 3</Label>
              </div>
            </RadioGroup>
          </div>)}
      </div>;
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'option1'
  },
  render: () => {
    return <div className="flex flex-col gap-8">
        {/* 기본 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">기본 상태</h3>
          <div className="grid grid-cols-5 gap-6">
            {colors.map(color => <div key={color} className="flex flex-col gap-3">
                <h4 className="text-sm font-medium text-gray-600 capitalize">{color}</h4>
                <RadioGroup defaultValue="option1" className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option1" id={\`default-\${color}-1\`} color={color} />
                    <Label htmlFor={\`default-\${color}-1\`} className="text-sm">
                      옵션 1
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option2" id={\`default-\${color}-2\`} color={color} />
                    <Label htmlFor={\`default-\${color}-2\`} className="text-sm">
                      옵션 2
                    </Label>
                  </div>
                </RadioGroup>
              </div>)}
          </div>
        </div>

        {/* Disabled 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Disabled 상태</h3>
          <div className="grid grid-cols-5 gap-6">
            {colors.map(color => <div key={color} className="flex flex-col gap-3">
                <h4 className="text-sm font-medium text-gray-600 capitalize">{color}</h4>
                <RadioGroup defaultValue="option1" disabled className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option1" id={\`disabled-\${color}-1\`} disabled color={color} />
                    <Label htmlFor={\`disabled-\${color}-1\`} className="text-sm">
                      옵션 1
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option2" id={\`disabled-\${color}-2\`} disabled color={color} />
                    <Label htmlFor={\`disabled-\${color}-2\`} className="text-sm">
                      옵션 2
                    </Label>
                  </div>
                </RadioGroup>
              </div>)}
          </div>
        </div>

        {/* Invalid 상태 */}
        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold text-gray-800">Invalid 상태</h3>
          <div className="grid grid-cols-5 gap-6">
            {colors.map(color => <div key={color} className="flex flex-col gap-3">
                <h4 className="text-sm font-medium text-gray-600 capitalize">{color}</h4>
                <RadioGroup defaultValue="option1" className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item invalid value="option1" id={\`invalid-\${color}-1\`} aria-invalid="true" color={color} />
                    <Label htmlFor={\`invalid-\${color}-1\`} className="text-sm">
                      옵션 1
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item invalid value="option2" id={\`invalid-\${color}-2\`} aria-invalid="true" color={color} />
                    <Label htmlFor={\`invalid-\${color}-2\`} className="text-sm">
                      옵션 2
                    </Label>
                  </div>
                </RadioGroup>
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'option1'
  },
  render: () => {
    return <div className="flex flex-row flex-wrap gap-6">
        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="primary-1" className="peer" color="primary" />
            <Label htmlFor="primary-1" className="peer-data-[state=checked]:text-primary">
              Primary
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="primary-2" className="peer" color="primary" />
            <Label htmlFor="primary-2" className="peer-data-[state=checked]:text-primary">
              Primary Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="secondary-1" className="peer" color="secondary" />
            <Label htmlFor="secondary-1" className="peer-data-[state=checked]:text-gray-600">
              Secondary
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="secondary-2" className="peer" color="secondary" />
            <Label htmlFor="secondary-2" className="peer-data-[state=checked]:text-gray-600">
              Secondary Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="danger-1" className="peer" color="danger" />
            <Label htmlFor="danger-1" className="peer-data-[state=checked]:text-danger">
              Danger
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="danger-2" className="peer" color="danger" />
            <Label htmlFor="danger-2" className="peer-data-[state=checked]:text-danger">
              Danger Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="success-1" className="peer" color="success" />
            <Label htmlFor="success-1" className="peer-data-[state=checked]:text-success">
              Success
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="success-2" className="peer" color="success" />
            <Label htmlFor="success-2" className="peer-data-[state=checked]:text-success">
              Success Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="warning-1" className="peer" color="warning" />
            <Label htmlFor="warning-1" className="peer-data-[state=checked]:text-warning">
              Warning
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="warning-2" className="peer" color="warning" />
            <Label htmlFor="warning-2" className="peer-data-[state=checked]:text-warning">
              Warning Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item invalid value="option1" id="invalid-1" className="peer" color="primary" />
            <Label htmlFor="invalid-1" className="peer-data-[invalid=true]:text-danger">
              Invalid
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item invalid value="option2" id="invalid-2" className="peer" color="primary" />
            <Label htmlFor="invalid-2" className="peer-data-[invalid=true]:text-danger">
              Invalid Option 2
            </Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="option1" className="grid gap-3">
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option1" id="disabled-1" className="peer" disabled />
            <Label htmlFor="disabled-1" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
              Disabled
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroup.Item value="option2" id="disabled-2" className="peer" disabled />
            <Label htmlFor="disabled-2" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
              Disabled Option 2
            </Label>
          </div>
        </RadioGroup>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};const ke=["Playground","Colors","States","WithLabel"];export{j as Colors,y as Playground,R as States,I as WithLabel,ke as __namedExportsOrder,_e as default};
