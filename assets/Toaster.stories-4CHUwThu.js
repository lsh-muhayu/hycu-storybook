import{T as f,j as s,t as e}from"./iframe-Ct6cBN0f.js";import{B as t}from"./Button-BzLycsm1.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Shared/UI/Toast",component:f,parameters:{layout:"centered",docs:{description:{component:`
### 사용자에게 알림을 표시하는 토스트 컴포넌트

토스트 컴포넌트는 사용자에게 중요한 정보나 작업 결과를 알려주는 데 사용됩니다. 다양한 타입과 위치 옵션을 지원합니다.

## 주요 기능

- **다양한 타입**: \`success\`, \`error\`, \`info\`, \`warning\`, \`loading\` 타입 지원
- **타이틀과 설명**: 타이틀과 설명을 함께 표시 가능
- **커스텀 아이콘**: 각 타입별로 적절한 아이콘 자동 표시
- **자동 닫기**: 설정된 시간 후 자동으로 닫힘
- **수동 닫기**: 사용자가 직접 닫을 수 있음
- **다중 토스트**: 여러 토스트를 동시에 표시 가능

## 사용 예시

\`\`\`tsx
import { Toaster } from '@/shared/ui/toaster/Toaster';
<Toaster />
\`\`\`
        `}}},tags:["autodocs"]},i={parameters:{controls:{disable:!1},docs:{description:{story:`

        `}}},render:()=>s.jsx("div",{className:"flex flex-col gap-4",children:s.jsx("div",{className:"flex flex-col gap-2",children:s.jsx("div",{className:"flex flex-wrap gap-2",children:s.jsx(t,{onClick:()=>e.success("Toast Message"),children:"Click Me"})})})})},o={parameters:{docs:{description:{story:`
기본 토스트 타입들입니다.
        `}}},render:()=>s.jsx("div",{className:"flex flex-col gap-4",children:s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Success Toast"}),s.jsx("p",{className:"text-xs text-gray-500",children:"성공적인 작업 완료나 긍정적인 결과를 알릴 때 사용합니다."}),s.jsx("div",{className:"flex gap-2",children:s.jsx(t,{variant:"filled",color:"success",size:"sm",onClick:()=>e.success("작업이 성공적으로 완료되었습니다!"),children:"기본 Success"})})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Error Toast"}),s.jsx("p",{className:"text-xs text-gray-500",children:"오류나 실패한 작업을 알릴 때 사용합니다."}),s.jsx("div",{className:"flex gap-2",children:s.jsx(t,{variant:"filled",color:"danger",size:"sm",onClick:()=>e.error("오류가 발생했습니다."),children:"기본 Error"})})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Info Toast"}),s.jsx("p",{className:"text-xs text-gray-500",children:"정보나 알림을 제공할 때 사용합니다."}),s.jsx("div",{className:"flex gap-2",children:s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>e.info("새로운 업데이트가 있습니다."),children:"기본 Info"})})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Warning Toast"}),s.jsx("p",{className:"text-xs text-gray-500",children:"경고나 주의가 필요한 상황을 알릴 때 사용합니다."}),s.jsx("div",{className:"flex gap-2",children:s.jsx(t,{variant:"filled",color:"warning",size:"sm",onClick:()=>e.warning("주의가 필요합니다."),children:"기본 Warning"})})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Loading Toast"}),s.jsx("p",{className:"text-xs text-gray-500",children:"비동기 작업이 진행 중임을 알릴 때 사용합니다."}),s.jsx("div",{className:"flex gap-2",children:s.jsx(t,{variant:"filled",color:"secondary",size:"sm",onClick:()=>{const a=e.loading("처리 중입니다...");setTimeout(()=>{e.dismiss(a),e.success("처리가 완료되었습니다!")},3e3)},children:"Loading → Success"})})]})]})})},l={parameters:{docs:{description:{story:`
Promise를 사용하여 비동기 작업의 상태를 자동으로 표시하는 토스트입니다.

\`\`\`tsx
// Promise 토스트 기본 사용법
toast.promise(
  fetchData(), // Promise를 반환하는 함수
  {
    loading: '데이터를 불러오는 중...',
    success: '데이터 로드 완료',
    error: '데이터 로드 실패',
  }
);

// 데이터를 사용한 동적 메시지
toast.promise(
  createUser(userData),
  {
    loading: '사용자 생성 중...',
    success: (data) => \`\${data.name} 사용자가 생성되었습니다.\`,
    error: '사용자 생성에 실패했습니다.',
  }
);

// 복잡한 Promise 체인
toast.promise(
  async () => {
    const result = await uploadFile();
    await processFile(result.id);
    return result;
  },
  {
    loading: '파일 업로드 및 처리 중...',
    success: (data) => \`파일 \${data.name}이 업로드되었습니다.\`,
    error: '파일 처리 중 오류가 발생했습니다.',
  }
);
\`\`\`
        `}}},render:()=>s.jsx("div",{className:"flex flex-col gap-4",children:s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"기본 Promise 토스트"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Promise의 상태에 따라 자동으로 loading → success/error로 전환됩니다."}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>{e.promise(new globalThis.Promise(a=>setTimeout(()=>a({name:"파일"}),2e3)),{loading:"파일 업로드 중...",success:"파일 업로드 완료",error:"파일 업로드 실패"})},children:"성공 Promise"}),s.jsx(t,{variant:"filled",color:"danger",size:"sm",onClick:()=>{e.promise(new globalThis.Promise((a,p)=>setTimeout(()=>p(new Error("오류 발생")),2e3)),{loading:"파일 업로드 중...",success:"파일 업로드 완료",error:"파일 업로드 실패"})},children:"실패 Promise"})]})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"동적 메시지"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Promise의 결과 데이터를 사용하여 동적으로 메시지를 생성할 수 있습니다."}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(t,{variant:"filled",color:"success",size:"sm",onClick:()=>{e.promise(new globalThis.Promise(a=>setTimeout(()=>a({name:"사용자",id:123}),2e3)),{loading:"사용자 생성 중...",success:a=>`${a.name} (ID: ${a.id})가 생성되었습니다.`,error:"사용자 생성에 실패했습니다."})},children:"동적 Success 메시지"}),s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>{e.promise(new globalThis.Promise(a=>setTimeout(()=>a({fileName:"document.pdf",size:1024}),2e3)),{loading:"파일 업로드 중...",success:a=>`파일 "${a.fileName}" (${a.size}KB)이 업로드되었습니다.`,error:"파일 업로드에 실패했습니다."})},children:"동적 파일 업로드"})]})]})]})})},r={parameters:{docs:{description:{story:`
토스트의 위치를 지정할 수 있습니다.
        `}}},render:()=>s.jsx("div",{className:"flex flex-col gap-4",children:s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsx("div",{className:"flex flex-col gap-2",children:s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"토스트 위치"})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("div",{className:"flex flex-col gap-2",children:s.jsx("div",{children:s.jsx(t,{onClick:()=>e.success("top-left",{position:"top-left"}),children:"top-left"})})}),s.jsx("div",{className:"flex flex-col gap-2",children:s.jsx("div",{children:s.jsx(t,{onClick:()=>e.success("top-center",{position:"top-center"}),children:"top-center"})})}),s.jsx("div",{className:"flex flex-col gap-2",children:s.jsx("div",{children:s.jsx(t,{onClick:()=>e.success("top-right",{position:"top-right"}),children:"top-right"})})})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx("div",{className:"flex flex-col gap-2",children:s.jsx("div",{children:s.jsx(t,{onClick:()=>e.success("bottom-left",{position:"bottom-left"}),children:"bottom-left"})})}),s.jsx("div",{className:"flex flex-col gap-2",children:s.jsx("div",{children:s.jsx(t,{onClick:()=>e.success("bottom-center",{position:"bottom-center"}),children:"bottom-center"})})}),s.jsx("div",{className:"flex flex-col gap-2",children:s.jsx("div",{children:s.jsx(t,{onClick:()=>e.success("bottom-right",{position:"bottom-right"}),children:"bottom-right"})})})]})]})})},c={parameters:{docs:{description:{story:`
여러 개의 토스트를 동시에 표시하고 관리하는 방법입니다.

\`\`\`tsx
// 여러 토스트 표시
toast.success('첫 번째 작업 완료');
setTimeout(() => toast.info('두 번째 작업 진행 중'), 500);
setTimeout(() => toast.warning('세 번째 작업 주의'), 1000);
setTimeout(() => toast.error('네 번째 작업 실패'), 1500);

// 모든 토스트 닫기
toast.dismiss();

// 특정 토스트 닫기
const toastId = toast.success('이 토스트는 닫을 수 있습니다.');
setTimeout(() => toast.dismiss(toastId), 3000);
\`\`\`
        `}}},render:()=>s.jsx("div",{className:"flex flex-col gap-4",children:s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"다중 토스트"}),s.jsx("p",{className:"text-xs text-gray-500",children:"여러 개의 토스트를 동시에 표시할 수 있습니다."}),s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>{e.success("첫 번째 작업 완료"),setTimeout(()=>e.info("두 번째 작업 진행 중"),500),setTimeout(()=>e.warning("세 번째 작업 주의"),1e3),setTimeout(()=>e.error("네 번째 작업 실패"),1500)},children:"여러 토스트 표시"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"모든 토스트 닫기"}),s.jsx("p",{className:"text-xs text-gray-500",children:"toast.dismiss()를 사용하여 모든 토스트를 한 번에 닫을 수 있습니다."}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>{e.success("토스트 1"),e.info("토스트 2"),e.warning("토스트 3")},children:"토스트 표시"}),s.jsx(t,{variant:"filled",color:"secondary",size:"sm",onClick:()=>e.dismiss(),children:"모든 토스트 닫기"})]})]})]})})},n={parameters:{docs:{description:{story:`
타이틀과 설명을 함께 표시하는 토스트 예시입니다.

\`\`\`tsx
// 타이틀과 설명이 있는 토스트
toast.success('파일 업로드 완료', {
  description: '3개의 파일이 성공적으로 업로드되었습니다.',
});

toast.error('업로드 실패', {
  description: '파일 크기가 너무 큽니다. 최대 10MB까지 업로드 가능합니다.',
});

toast.info('시스템 점검 안내', {
  description: '2024년 1월 15일 오전 2시부터 4시까지 시스템 점검이 진행됩니다.',
});
\`\`\`
        `}}},render:()=>s.jsx("div",{className:"flex flex-col gap-4",children:s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Success with Description"}),s.jsx("p",{className:"text-xs text-gray-500",children:"타이틀과 설명을 함께 표시할 수 있습니다."}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(t,{variant:"filled",color:"success",size:"sm",onClick:()=>e.success("파일 업로드 완료",{description:"3개의 파일이 성공적으로 업로드되었습니다."}),children:"Success + Description"}),s.jsx(t,{variant:"filled",color:"success",size:"sm",onClick:()=>e.success("계정 생성 완료",{description:"새로운 계정이 성공적으로 생성되었습니다. 이메일을 확인해주세요.새로운 계정이 성공적으로 생성되었습니다. 이메일을 확인해주세요.새로운 계정이 성공적으로 생성되었습니다. 이메일을 확인해주세요.새로운 계정이 성공적으로 생성되었습니다. 이메일을 확인해주세요."}),children:"Success + Long Description"})]})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Error with Description"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(t,{variant:"filled",color:"danger",size:"sm",onClick:()=>e.error("업로드 실패",{description:"파일 크기가 너무 큽니다. 최대 10MB까지 업로드 가능합니다."}),children:"Error + Description"}),s.jsx(t,{variant:"filled",color:"danger",size:"sm",onClick:()=>e.error("로그인 실패",{description:"이메일 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.이메일 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.이메일 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.이메일 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요."}),children:"Error + Long Description"})]})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Info with Description"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>e.info("시스템 점검 안내",{description:"2024년 1월 15일 오전 2시부터 4시까지 시스템 점검이 진행됩니다."}),children:"Info + Description"}),s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>e.info("새로운 기능 출시",{description:"더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다.더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다.더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다.더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다.더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다. 확인해보세요!"}),children:"Info + Long Description"})]})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Warning with Description"}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(t,{variant:"filled",color:"warning",size:"sm",onClick:()=>e.warning("저장되지 않은 변경사항",{description:"페이지를 떠나기 전에 변경사항을 저장해주세요."}),children:"Warning + Description"}),s.jsx(t,{variant:"filled",color:"warning",size:"sm",onClick:()=>e.warning("용량 부족 경고",{description:"저장 공간이 부족합니다. 일부 파일을 삭제하여 공간을 확보해주세요.저장 공간이 부족합니다. 일부 파일을 삭제하여 공간을 확보해주세요.저장 공간이 부족합니다. 일부 파일을 삭제하여 공간을 확보해주세요.저장 공간이 부족합니다. 일부 파일을 삭제하여 공간을 확보해주세요."}),children:"Warning + Long Description"})]})]})]})})},d={render:()=>s.jsx("div",{className:"flex flex-col gap-4",children:s.jsx("div",{className:"flex flex-col gap-6",children:s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"닫기 버튼 포함"}),s.jsx("p",{className:"text-xs text-gray-500",children:"closeButton 옵션을 사용하여 수동으로 닫을 수 있는 버튼을 표시합니다."}),s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>e.success("닫기 버튼이 있는 토스트",{closeButton:!0,description:"좌측 상단의 X 버튼을 클릭하여 닫을 수 있습니다."}),children:"Close Button Toast"})]})})})},m={render:()=>s.jsx("div",{className:"flex flex-col gap-4",children:s.jsx("div",{className:"flex flex-col gap-6",children:s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"커스텀 지속 시간"}),s.jsx("p",{className:"text-xs text-gray-500",children:"duration 옵션을 사용하여 토스트가 표시되는 시간을 조정할 수 있습니다."}),s.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>e.success("2초 후 자동으로 닫힙니다.",{duration:2e3}),children:"2초 Duration"}),s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>e.success("5초 후 자동으로 닫힙니다.",{duration:5e3}),children:"5초 Duration"}),s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>e.success("10초 후 자동으로 닫힙니다.",{duration:1e4}),children:"10초 Duration"}),s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>e.success("자동으로 닫히지 않습니다.",{duration:1/0}),children:"무한 Duration"})]})]})})})},x={parameters:{docs:{description:{story:`
액션 버튼과 취소 버튼을 포함한 토스트입니다.

\`\`\`tsx
// 액션 버튼만 있는 토스트
toast.success('파일이 삭제되었습니다.', {
  description: '실수로 삭제하셨나요?',
  action: {
    label: '되돌리기',
    onClick: () => {
      // 되돌리기 로직
      toast.info('파일이 복구되었습니다.');
    },
  },
});

// 액션과 취소 버튼이 모두 있는 토스트
toast.warning('저장되지 않은 변경사항이 있습니다.', {
  description: '페이지를 떠나시겠습니까?',
  action: {
    label: '저장',
    onClick: () => {
      // 저장 로직
      toast.success('변경사항이 저장되었습니다.');
    },
  },
  cancel: {
    label: '취소',
    onClick: () => {
      // 취소 로직
    },
  },
});
\`\`\`
        `}}},render:()=>s.jsx("div",{className:"flex flex-col gap-4",children:s.jsxs("div",{className:"flex flex-col gap-6",children:[s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"액션 버튼 포함"}),s.jsx("p",{className:"text-xs text-gray-500",children:"토스트에 액션 버튼을 추가하여 사용자가 바로 작업을 수행할 수 있습니다."}),s.jsx(t,{variant:"filled",color:"primary",size:"sm",onClick:()=>e.success("파일이 삭제되었습니다.",{description:"실수로 삭제하셨나요?",action:{label:"되돌리기",onClick:()=>e.info("파일이 복구되었습니다.")}}),children:"Action Button Toast"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"취소 버튼 포함"}),s.jsx("p",{className:"text-xs text-gray-500",children:"취소 버튼을 추가하여 사용자가 작업을 취소할 수 있습니다."}),s.jsx(t,{variant:"filled",color:"warning",size:"sm",onClick:()=>e.warning("저장되지 않은 변경사항이 있습니다.",{description:"페이지를 떠나시겠습니까?",action:{label:"저장",onClick:()=>e.success("변경사항이 저장되었습니다.")},cancel:{label:"취소",onClick:()=>{}}}),children:"Cancel Button Toast"})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`

        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => toast.success('Toast Message')}>Click Me</Button>
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
기본 토스트 타입들입니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Success Toast</h3>
          <p className="text-xs text-gray-500">
            성공적인 작업 완료나 긍정적인 결과를 알릴 때 사용합니다.
          </p>
          <div className="flex gap-2">
            <Button variant="filled" color="success" size="sm" onClick={() => toast.success('작업이 성공적으로 완료되었습니다!')}>
              기본 Success
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Error Toast</h3>
          <p className="text-xs text-gray-500">오류나 실패한 작업을 알릴 때 사용합니다.</p>
          <div className="flex gap-2">
            <Button variant="filled" color="danger" size="sm" onClick={() => toast.error('오류가 발생했습니다.')}>
              기본 Error
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Info Toast</h3>
          <p className="text-xs text-gray-500">정보나 알림을 제공할 때 사용합니다.</p>
          <div className="flex gap-2">
            <Button variant="filled" color="primary" size="sm" onClick={() => toast.info('새로운 업데이트가 있습니다.')}>
              기본 Info
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Warning Toast</h3>
          <p className="text-xs text-gray-500">경고나 주의가 필요한 상황을 알릴 때 사용합니다.</p>
          <div className="flex gap-2">
            <Button variant="filled" color="warning" size="sm" onClick={() => toast.warning('주의가 필요합니다.')}>
              기본 Warning
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Loading Toast</h3>
          <p className="text-xs text-gray-500">비동기 작업이 진행 중임을 알릴 때 사용합니다.</p>
          <div className="flex gap-2">
            <Button variant="filled" color="secondary" size="sm" onClick={() => {
            const toastId = toast.loading('처리 중입니다...');
            setTimeout(() => {
              toast.dismiss(toastId);
              toast.success('처리가 완료되었습니다!');
            }, 3000);
          }}>
              Loading → Success
            </Button>
          </div>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Promise를 사용하여 비동기 작업의 상태를 자동으로 표시하는 토스트입니다.

\\\`\\\`\\\`tsx
// Promise 토스트 기본 사용법
toast.promise(
  fetchData(), // Promise를 반환하는 함수
  {
    loading: '데이터를 불러오는 중...',
    success: '데이터 로드 완료',
    error: '데이터 로드 실패',
  }
);

// 데이터를 사용한 동적 메시지
toast.promise(
  createUser(userData),
  {
    loading: '사용자 생성 중...',
    success: (data) => \\\`\\\${data.name} 사용자가 생성되었습니다.\\\`,
    error: '사용자 생성에 실패했습니다.',
  }
);

// 복잡한 Promise 체인
toast.promise(
  async () => {
    const result = await uploadFile();
    await processFile(result.id);
    return result;
  },
  {
    loading: '파일 업로드 및 처리 중...',
    success: (data) => \\\`파일 \\\${data.name}이 업로드되었습니다.\\\`,
    error: '파일 처리 중 오류가 발생했습니다.',
  }
);
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => {
    return <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-700">기본 Promise 토스트</h3>
            <p className="text-xs text-gray-500">
              Promise의 상태에 따라 자동으로 loading → success/error로 전환됩니다.
            </p>
            <div className="flex gap-2">
              <Button variant="filled" color="primary" size="sm" onClick={() => {
              toast.promise(new globalThis.Promise<{
                name: string;
              }>(resolve => setTimeout(() => resolve({
                name: '파일'
              }), 2000)), {
                loading: '파일 업로드 중...',
                success: '파일 업로드 완료',
                error: '파일 업로드 실패'
              });
            }}>
                성공 Promise
              </Button>
              <Button variant="filled" color="danger" size="sm" onClick={() => {
              toast.promise(new globalThis.Promise<never>((_resolve: (value: never) => void, reject: (reason?: unknown) => void) => setTimeout(() => reject(new Error('오류 발생')), 2000)), {
                loading: '파일 업로드 중...',
                success: '파일 업로드 완료',
                error: '파일 업로드 실패'
              });
            }}>
                실패 Promise
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-700">동적 메시지</h3>
            <p className="text-xs text-gray-500">
              Promise의 결과 데이터를 사용하여 동적으로 메시지를 생성할 수 있습니다.
            </p>
            <div className="flex gap-2">
              <Button variant="filled" color="success" size="sm" onClick={() => {
              toast.promise(new globalThis.Promise<{
                name: string;
                id: number;
              }>((resolve: (value: {
                name: string;
                id: number;
              }) => void) => setTimeout(() => resolve({
                name: '사용자',
                id: 123
              }), 2000)), {
                loading: '사용자 생성 중...',
                success: (data: {
                  name: string;
                  id: number;
                }) => \`\${data.name} (ID: \${data.id})가 생성되었습니다.\`,
                error: '사용자 생성에 실패했습니다.'
              });
            }}>
                동적 Success 메시지
              </Button>
              <Button variant="filled" color="primary" size="sm" onClick={() => {
              toast.promise(new globalThis.Promise<{
                fileName: string;
                size: number;
              }>((resolve: (value: {
                fileName: string;
                size: number;
              }) => void) => setTimeout(() => resolve({
                fileName: 'document.pdf',
                size: 1024
              }), 2000)), {
                loading: '파일 업로드 중...',
                success: (data: {
                  fileName: string;
                  size: number;
                }) => \`파일 "\${data.fileName}" (\${data.size}KB)이 업로드되었습니다.\`,
                error: '파일 업로드에 실패했습니다.'
              });
            }}>
                동적 파일 업로드
              </Button>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
토스트의 위치를 지정할 수 있습니다.
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">토스트 위치</h3>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <div>
              <Button onClick={() => toast.success('top-left', {
              position: 'top-left'
            })}>
                top-left
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Button onClick={() => toast.success('top-center', {
              position: 'top-center'
            })}>
                top-center
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Button onClick={() => toast.success('top-right', {
              position: 'top-right'
            })}>
                top-right
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <div>
              <Button onClick={() => toast.success('bottom-left', {
              position: 'bottom-left'
            })}>
                bottom-left
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Button onClick={() => toast.success('bottom-center', {
              position: 'bottom-center'
            })}>
                bottom-center
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Button onClick={() => toast.success('bottom-right', {
              position: 'bottom-right'
            })}>
                bottom-right
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
여러 개의 토스트를 동시에 표시하고 관리하는 방법입니다.

\\\`\\\`\\\`tsx
// 여러 토스트 표시
toast.success('첫 번째 작업 완료');
setTimeout(() => toast.info('두 번째 작업 진행 중'), 500);
setTimeout(() => toast.warning('세 번째 작업 주의'), 1000);
setTimeout(() => toast.error('네 번째 작업 실패'), 1500);

// 모든 토스트 닫기
toast.dismiss();

// 특정 토스트 닫기
const toastId = toast.success('이 토스트는 닫을 수 있습니다.');
setTimeout(() => toast.dismiss(toastId), 3000);
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">다중 토스트</h3>
          <p className="text-xs text-gray-500">여러 개의 토스트를 동시에 표시할 수 있습니다.</p>
          <Button variant="filled" color="primary" size="sm" onClick={() => {
          toast.success('첫 번째 작업 완료');
          setTimeout(() => toast.info('두 번째 작업 진행 중'), 500);
          setTimeout(() => toast.warning('세 번째 작업 주의'), 1000);
          setTimeout(() => toast.error('네 번째 작업 실패'), 1500);
        }}>
            여러 토스트 표시
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">모든 토스트 닫기</h3>
          <p className="text-xs text-gray-500">
            toast.dismiss()를 사용하여 모든 토스트를 한 번에 닫을 수 있습니다.
          </p>
          <div className="flex gap-2">
            <Button variant="filled" color="primary" size="sm" onClick={() => {
            toast.success('토스트 1');
            toast.info('토스트 2');
            toast.warning('토스트 3');
          }}>
              토스트 표시
            </Button>
            <Button variant="filled" color="secondary" size="sm" onClick={() => toast.dismiss()}>
              모든 토스트 닫기
            </Button>
          </div>
        </div>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
타이틀과 설명을 함께 표시하는 토스트 예시입니다.

\\\`\\\`\\\`tsx
// 타이틀과 설명이 있는 토스트
toast.success('파일 업로드 완료', {
  description: '3개의 파일이 성공적으로 업로드되었습니다.',
});

toast.error('업로드 실패', {
  description: '파일 크기가 너무 큽니다. 최대 10MB까지 업로드 가능합니다.',
});

toast.info('시스템 점검 안내', {
  description: '2024년 1월 15일 오전 2시부터 4시까지 시스템 점검이 진행됩니다.',
});
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Success with Description</h3>
          <p className="text-xs text-gray-500">타이틀과 설명을 함께 표시할 수 있습니다.</p>
          <div className="flex gap-2">
            <Button variant="filled" color="success" size="sm" onClick={() => toast.success('파일 업로드 완료', {
            description: '3개의 파일이 성공적으로 업로드되었습니다.'
          })}>
              Success + Description
            </Button>
            <Button variant="filled" color="success" size="sm" onClick={() => toast.success('계정 생성 완료', {
            description: '새로운 계정이 성공적으로 생성되었습니다. 이메일을 확인해주세요.새로운 계정이 성공적으로 생성되었습니다. 이메일을 확인해주세요.새로운 계정이 성공적으로 생성되었습니다. 이메일을 확인해주세요.새로운 계정이 성공적으로 생성되었습니다. 이메일을 확인해주세요.'
          })}>
              Success + Long Description
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Error with Description</h3>
          <div className="flex gap-2">
            <Button variant="filled" color="danger" size="sm" onClick={() => toast.error('업로드 실패', {
            description: '파일 크기가 너무 큽니다. 최대 10MB까지 업로드 가능합니다.'
          })}>
              Error + Description
            </Button>
            <Button variant="filled" color="danger" size="sm" onClick={() => toast.error('로그인 실패', {
            description: '이메일 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.이메일 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.이메일 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.이메일 또는 비밀번호가 올바르지 않습니다. 다시 시도해주세요.'
          })}>
              Error + Long Description
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Info with Description</h3>
          <div className="flex gap-2">
            <Button variant="filled" color="primary" size="sm" onClick={() => toast.info('시스템 점검 안내', {
            description: '2024년 1월 15일 오전 2시부터 4시까지 시스템 점검이 진행됩니다.'
          })}>
              Info + Description
            </Button>
            <Button variant="filled" color="primary" size="sm" onClick={() => toast.info('새로운 기능 출시', {
            description: '더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다.더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다.더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다.더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다.더 나은 사용자 경험을 위해 새로운 기능이 추가되었습니다. 확인해보세요!'
          })}>
              Info + Long Description
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Warning with Description</h3>
          <div className="flex gap-2">
            <Button variant="filled" color="warning" size="sm" onClick={() => toast.warning('저장되지 않은 변경사항', {
            description: '페이지를 떠나기 전에 변경사항을 저장해주세요.'
          })}>
              Warning + Description
            </Button>
            <Button variant="filled" color="warning" size="sm" onClick={() => toast.warning('용량 부족 경고', {
            description: '저장 공간이 부족합니다. 일부 파일을 삭제하여 공간을 확보해주세요.저장 공간이 부족합니다. 일부 파일을 삭제하여 공간을 확보해주세요.저장 공간이 부족합니다. 일부 파일을 삭제하여 공간을 확보해주세요.저장 공간이 부족합니다. 일부 파일을 삭제하여 공간을 확보해주세요.'
          })}>
              Warning + Long Description
            </Button>
          </div>
        </div>
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">닫기 버튼 포함</h3>
          <p className="text-xs text-gray-500">
            closeButton 옵션을 사용하여 수동으로 닫을 수 있는 버튼을 표시합니다.
          </p>
          <Button variant="filled" color="primary" size="sm" onClick={() => toast.success('닫기 버튼이 있는 토스트', {
          closeButton: true,
          description: '좌측 상단의 X 버튼을 클릭하여 닫을 수 있습니다.'
        })}>
            Close Button Toast
          </Button>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">커스텀 지속 시간</h3>
          <p className="text-xs text-gray-500">
            duration 옵션을 사용하여 토스트가 표시되는 시간을 조정할 수 있습니다.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="filled" color="primary" size="sm" onClick={() => toast.success('2초 후 자동으로 닫힙니다.', {
            duration: 2000
          })}>
              2초 Duration
            </Button>
            <Button variant="filled" color="primary" size="sm" onClick={() => toast.success('5초 후 자동으로 닫힙니다.', {
            duration: 5000
          })}>
              5초 Duration
            </Button>
            <Button variant="filled" color="primary" size="sm" onClick={() => toast.success('10초 후 자동으로 닫힙니다.', {
            duration: 10000
          })}>
              10초 Duration
            </Button>
            <Button variant="filled" color="primary" size="sm" onClick={() => toast.success('자동으로 닫히지 않습니다.', {
            duration: Infinity
          })}>
              무한 Duration
            </Button>
          </div>
        </div>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
액션 버튼과 취소 버튼을 포함한 토스트입니다.

\\\`\\\`\\\`tsx
// 액션 버튼만 있는 토스트
toast.success('파일이 삭제되었습니다.', {
  description: '실수로 삭제하셨나요?',
  action: {
    label: '되돌리기',
    onClick: () => {
      // 되돌리기 로직
      toast.info('파일이 복구되었습니다.');
    },
  },
});

// 액션과 취소 버튼이 모두 있는 토스트
toast.warning('저장되지 않은 변경사항이 있습니다.', {
  description: '페이지를 떠나시겠습니까?',
  action: {
    label: '저장',
    onClick: () => {
      // 저장 로직
      toast.success('변경사항이 저장되었습니다.');
    },
  },
  cancel: {
    label: '취소',
    onClick: () => {
      // 취소 로직
    },
  },
});
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">액션 버튼 포함</h3>
          <p className="text-xs text-gray-500">
            토스트에 액션 버튼을 추가하여 사용자가 바로 작업을 수행할 수 있습니다.
          </p>
          <Button variant="filled" color="primary" size="sm" onClick={() => toast.success('파일이 삭제되었습니다.', {
          description: '실수로 삭제하셨나요?',
          action: {
            label: '되돌리기',
            onClick: () => toast.info('파일이 복구되었습니다.')
          }
        })}>
            Action Button Toast
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">취소 버튼 포함</h3>
          <p className="text-xs text-gray-500">
            취소 버튼을 추가하여 사용자가 작업을 취소할 수 있습니다.
          </p>
          <Button variant="filled" color="warning" size="sm" onClick={() => toast.warning('저장되지 않은 변경사항이 있습니다.', {
          description: '페이지를 떠나시겠습니까?',
          action: {
            label: '저장',
            onClick: () => toast.success('변경사항이 저장되었습니다.')
          },
          cancel: {
            label: '취소',
            onClick: () => {}
          }
        })}>
            Cancel Button Toast
          </Button>
        </div>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};const N=["Playground","Basic","Promise","Position","MultipleToasts","WithTitleAndDescription","WithCloseButton","WithDuration","WithActionButton"];export{o as Basic,c as MultipleToasts,i as Playground,r as Position,l as Promise,x as WithActionButton,d as WithCloseButton,m as WithDuration,n as WithTitleAndDescription,N as __namedExportsOrder,h as default};
