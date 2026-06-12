// TODO: 배포하신 GAS Web App URL을 아래에 붙여넣어 주세요.
const GAS_URL = "https://script.google.com/a/macros/dbglobalchip.com/s/AKfycbxOWU2vWRLjO2_WnFa43gLsLT4uBW_qfknRPBw8OGK6PECrdS8lCBqmGwfnca4D1B6V/exec";

const questions = [
    {
        category: "인식",
        question: "새로운 AI 기술이나 사내 AI 툴이 도입되었을 때 나의 반응은?",
        options: [
            { text: "아직은 익숙한 기존 방식이 편하다.", score: 1 },
            { text: "관심은 있지만, 누가 알려주기 전까지는 선뜻 써보지 않는다.", score: 2 },
            { text: "간단한 기능 위주로 직접 테스트해보고 업무에 적용해본다.", score: 3 },
            { text: "관련 매뉴얼이나 사례를 적극적으로 찾아보고 선도적으로 활용한다.", score: 4 }
        ]
    },
    {
        category: "생산성",
        question: "보고서 초안 작성, 이메일 번역, 회의록 요약 등에 AI를 얼마나 활용하나요?",
        options: [
            { text: "거의 사용하지 않고 직접 작성한다.", score: 1 },
            { text: "가끔 필요할 때 번역기나 기본적인 챗봇을 사용한다.", score: 2 },
            { text: "주 2~3회 이상 문서 요약, 아이디어 도출 등을 위해 AI를 사용한다.", score: 3 },
            { text: "대부분의 문서 작업 초안을 AI로 작성하고 다듬는 방식으로 효율을 극대화한다.", score: 4 }
        ]
    },
    {
        category: "직무(반도체)",
        question: "데이터 분석, 코드 작성, 또는 기술 스펙 리서치 등에 AI를 어떻게 활용하나요?",
        options: [
            { text: "전문 영역에는 AI 결과물을 신뢰할 수 없어 활용하지 않는다.", score: 1 },
            { text: "간단한 함수 검색이나 구글링 대신 챗봇에게 물어보는 수준이다.", score: 2 },
            { text: "복잡한 수식 생성, 데이터 전처리 코드 작성 등에 AI를 활용해 시간을 단축한다.", score: 3 },
            { text: "오류 분석, 최적화 방안 도출 등 문제 해결의 파트너로서 AI와 깊게 상호작용한다.", score: 4 }
        ]
    },
    {
        category: "직무(반도체)",
        question: "원하는 결과물을 얻기 위해 프롬프트(명령어)를 어떻게 작성하나요?",
        options: [
            { text: "단답형이나 단순한 키워드 위주로 질문한다. (예: 반도체 수율이란?)", score: 1 },
            { text: "문장형으로 묻고, 원하는 답변이 안 나오면 몇 번 정도 다시 묻는다.", score: 2 },
            { text: "배경 상황과 역할, 원하는 출력 형식을 구체적으로 지정하여 질문한다.", score: 3 },
            { text: "사내 데이터나 특정 예시를 제공하여 나만의 고도화된 프롬프트 템플릿을 보유하고 있다.", score: 4 }
        ]
    },
    {
        category: "윤리/보안",
        question: "회사 업무로 AI를 사용할 때 보안 의식은 어느 정도인가요?",
        options: [
            { text: "보안 규정에 대해 잘 모른 채 외부 AI 툴에 사내 정보를 입력한 적이 있다.", score: 1 },
            { text: "주의해야 한다는 것은 알지만, 어떤 정보를 넣으면 안 되는지 명확히 모른다.", score: 2 },
            { text: "사내 보안 가이드라인을 인지하고 있으며 기밀 정보는 절대 입력하지 않는다.", score: 3 },
            { text: "보안에 완벽히 대응하며, 타 부서나 동료들에게도 보안의 중요성을 가이드한다.", score: 4 }
        ]
    },
    {
        category: "윤리/보안",
        question: "AI가 생성한 정보의 환각 현상(거짓 정보)에 대해 어떻게 대처하나요?",
        options: [
            { text: "AI가 제시한 정보를 대부분 사실이라고 믿고 그대로 사용한다.", score: 1 },
            { text: "가끔 이상한 결과가 나오면 당황하거나 사용을 포기한다.", score: 2 },
            { text: "항상 교차 검증을 통해 팩트 체크를 진행한 후 업무에 반영한다.", score: 3 },
            { text: "환각을 최소화하기 위한 프롬프트 기법을 사용하며, 결과물을 비판적으로 분석한다.", score: 4 }
        ]
    }
];

const results = [
    {
        minScore: 6,
        maxScore: 10,
        level: 1,
        title: "AI 탐험가 (Beginner)",
        desc: "AI 기술의 가능성을 이제 막 인지하기 시작하셨군요! 아직은 기존의 업무 방식이 익숙하시겠지만, AI는 생각보다 우리의 수고를 크게 덜어줄 수 있습니다.",
        tips: [
            "사내 인트라넷이나 포털에 있는 간단한 AI 기능부터 가볍게 테스트해 보세요.",
            "메일 번역이나 회의록 요약 등 뻔하고 반복적인 작업부터 AI에게 맡겨보세요.",
            "사내 AI 보안 가이드라인을 우선적으로 숙지하는 것이 중요합니다."
        ]
    },
    {
        minScore: 11,
        maxScore: 16,
        level: 2,
        title: "AI 실무자 (Intermediate)",
        desc: "AI를 업무 생산성 향상 도구로 적절히 활용하고 계십니다! 검색이나 단순 요약 기능을 넘어서 조금 더 고도화된 작업을 AI와 함께 해볼 차례입니다.",
        tips: [
            "질문할 때 '배경 상황, 원하는 형태, 참고 예시'를 구체적으로 적는 연습을 해보세요.",
            "엑셀 수식 작성이나 간단한 파이썬 스크립트 작성에 AI를 활용해 보세요.",
            "동료들이 어떻게 AI를 활용하는지 사례를 공유하고 적용해 보세요."
        ]
    },
    {
        minScore: 17,
        maxScore: 21,
        level: 3,
        title: "AI 협업가 (Advanced)",
        desc: "훌륭합니다! DB 글로벌칩의 업무 특성을 잘 이해하고 전문적인 직무 영역(분석, 최적화, 기획)에 AI를 능숙하게 결합하고 계시네요.",
        tips: [
            "본인만의 성공적인 프롬프트(명령어) 템플릿을 만들어 팀 내에 공유해 보세요.",
            "반도체 스펙 분석이나 데이터 전처리 자동화 등 더 복잡한 파이프라인에 AI를 적용해 보세요.",
            "AI 결과물의 논리적 오류를 비판적으로 검증하는 시각을 지속 유지하세요."
        ]
    },
    {
        minScore: 22,
        maxScore: 24,
        level: 4,
        title: "AI 개척자 (Expert)",
        desc: "상위 1%의 AI 활용 능력을 갖추셨습니다! 스스로 업무 혁신을 이끌 뿐만 아니라 사내 AI 문화를 선도할 수 있는 전문가입니다.",
        tips: [
            "DB 글로벌칩 내의 AI 활용 베스트 프랙티스를 발굴하고 사내 교육/세미나 등을 주도해 보세요.",
            "팀 단위의 업무 프로세스 자체를 AI 친화적으로 리모델링할 수 있는 방안을 기획해 보세요.",
            "AI 도입으로 발생할 수 있는 보안 및 윤리적 리스크를 선제적으로 관리해 주세요."
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;
let currentEmpId = '';
let currentEmpName = '';

// DOM Elements
const introView = document.getElementById('intro-view');
const authView = document.getElementById('auth-view');
const quizView = document.getElementById('quiz-view');
const loadingView = document.getElementById('loading-view');
const resultView = document.getElementById('result-view');

const startBtn = document.getElementById('start-btn');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const empIdInput = document.getElementById('emp-id');
const empNameInput = document.getElementById('emp-name');
const authError = document.getElementById('auth-error');

const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');

const resultTitle = document.getElementById('result-title');
const resultScoreVal = document.getElementById('result-score-val');
const resultDesc = document.getElementById('result-desc');
const resultTips = document.getElementById('result-tips');
const restartBtn = document.getElementById('restart-btn');

// Event Listeners
startBtn.addEventListener('click', showAuth);
authSubmitBtn.addEventListener('click', handleAuthSubmit);
restartBtn.addEventListener('click', resetQuiz);

function switchView(viewElement) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    viewElement.classList.add('active');
}

function showAuth() {
    empIdInput.value = '';
    empNameInput.value = '';
    authError.innerText = '';
    switchView(authView);
}

function handleAuthSubmit() {
    const empId = empIdInput.value.trim();
    const empName = empNameInput.value.trim();

    if (!empId || !empName) {
        authError.innerText = "사번과 성명을 모두 입력해 주세요.";
        return;
    }

    // 로컬 스토리지에서 해당 사번의 참여 여부 확인
    const storageKey = `db_ai_quiz_${empId}`;
    if (localStorage.getItem(storageKey)) {
        authError.innerText = "해당 사번은 이미 진단에 참여하였습니다.";
        return;
    }

    authError.innerText = "";

    // 전역 변수에 사번/성명 저장 (결과 전송 시 사용)
    currentEmpId = empId;
    currentEmpName = empName;

    // 진단 완료 시가 아닌, 시작할 때 기록하여 중간 이탈 후 재참여도 방지할 수 있음.
    // (완료 후 기록하려면 showResult에서 세팅하도록 변경 가능)
    localStorage.setItem(storageKey, JSON.stringify({ name: empName, date: new Date().toISOString() }));

    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    switchView(quizView);
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    questionNumber.innerText = `Q${currentQuestionIndex + 1}.`;
    questionText.innerText = q.question;

    // Update Progress
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Render Options
    optionsContainer.innerHTML = '';
    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option.text;
        btn.onclick = () => handleOptionClick(option.score);
        optionsContainer.appendChild(btn);
    });
}

function handleOptionClick(score) {
    totalScore += score;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        progressBar.style.width = `100%`;
        setTimeout(() => {
            showLoading();
        }, 300);
    }
}

function showLoading() {
    switchView(loadingView);

    // Determine Level
    let finalResult = results[0];
    for (let r of results) {
        if (totalScore >= r.minScore && totalScore <= r.maxScore) {
            finalResult = r;
            break;
        }
    }

    // GAS로 데이터 전송 (no-cors 모드 사용)
    const payload = {
        empId: currentEmpId,
        empName: currentEmpName,
        score: totalScore,
        levelTitle: finalResult.title
    };

    // 1.5초 기본 로딩 시간 보장 및 fetch 비동기 처리
    const minimumLoadingTime = new Promise(resolve => setTimeout(resolve, 1500));

    let fetchPromise = Promise.resolve();
    if (GAS_URL && GAS_URL !== "YOUR_GAS_URL_HERE") {
        fetchPromise = fetch(GAS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(payload)
        }).catch(error => console.error('Error sending data to GAS:', error));
    } else {
        console.warn("GAS_URL이 설정되지 않아 서버로 데이터가 전송되지 않습니다.");
    }

    // 로딩 최소 1.5초 대기 후 결과 화면 표시
    Promise.all([minimumLoadingTime, fetchPromise]).then(() => {
        showResult(finalResult);
    });
}

function showResult(finalResult) {
    // Set Result Content
    resultTitle.innerText = finalResult.title;
    resultScoreVal.innerText = totalScore;
    resultDesc.innerText = finalResult.desc;

    // Clear custom level classes
    resultView.classList.remove('level-1', 'level-2', 'level-3', 'level-4');
    resultView.classList.add(`level-${finalResult.level}`);

    resultTips.innerHTML = '';
    finalResult.tips.forEach(tip => {
        const li = document.createElement('li');
        li.innerText = tip;
        resultTips.appendChild(li);
    });

    switchView(resultView);
}

function resetQuiz() {
    // 단 1회 참여 가능하므로, 퀴즈 재시작 대신 처음 화면으로 새로고침
    location.reload();
}
