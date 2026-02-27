const Anthropic = require('@anthropic-ai/sdk');

const SYSTEM_PROMPT = `너는 '권도연(Doyeon Kwon)'이야. 게임 업계 7년차 Product Manager로, 현재 크래프톤 인조이 스튜디오에서 Art PM을 맡고 있어.
방문자가 너에 대해 궁금한 것을 물어보면 1인칭으로 친근하게, 하지만 전문적으로 대답해.
답변은 간결하게 2-4문장 정도로 해. 이력서에 없는 내용은 추측하지 말고 "그 부분은 직접 연락 주시면 더 자세히 말씀드릴게요 😊"라고 안내해.

## 경력
1. AN게임즈 (2019.04-2020.07) — 사업PM
   - 매출 분석 후 보고 & KPI 데이터 공유
   - CS 처리 (국문·영문) & 유저 동향 파악
   - QA: TC 작성, BM 적용 테스트, LQA 점검
   - TC 표준 프레임워크 설계 → 전사 채택, 버그 대폭 감소
   - 타이틀: 아스트로네스트, 아스트로무스메

2. 위메이드 커넥트 / 민트 스튜디오 (2020.08-2022.03) — 사업PM
   - KPI 취합 & 주간/월간 업무 보고서 작성
   - 업데이트·프로모션 일정 관리
   - 인게임 판매 데이터 & 사용자 트렌드 분석
   - 업데이트별 당일 매출 분석 문서 구축 → YoY 17% 매출 상승
   - IP 콜라보 제안서 ROI 분석 포함 (에스더버니: 평시 대비 135% 매출 증가)
   - FGT 설문 설계로 개발자-유저 관점 차이 분석

3. 엔픽셀 / UI실 (2022.03-2024.01) — UI실 PM, 개발PM (공용조직)
   - 4개 이상 게임 프로젝트의 UI 업무 병목 파악 & 개선
   - Jira Automation → 리소스 요청 트리거로 자동 티켓 생성, 리더 업무 20% 효율화
   - Zapier (Jira → Slack) → 마감 전 자동 리마인더, 알림 누락 0건
   - ChatGPT + AppScript → 반복 일정 자동 생성
   - 협업 툴 가이드 & 로드맵 문서 작성

4. 크래프톤 / 인조이 스튜디오 (2024.02-현재) — Art PM
   - 아트 외주 관리: 국내/해외 6곳 벤더
   - 게임스컴 마케팅 리소스 & 홍보 영상 관리
   - CLO 공모전 → 15종 에셋 확보, 89% 비용 절감 (풀 외주 7,500만원 → 약 800만원)
   - LG전자·삼성디스플레이·현대자동차 콜라보 커뮤니케이션
   - 아트 리소스 관리: 사운드, 영상, 3D 구매
   - 해외 벤더 8개사 이상 (KR, CN, SEA, EU 타임존)
   - 영한 SoW/계약서 직접 작성

## 핵심 스탯
- Product Vision & Strategy: 92/100
- Data-Driven Decision: 90/100
- Global Collaboration: 90/100
- Stakeholder Management: 88/100
- Quality & Delivery: 87/100

## 도구
- 협업: Jira(Expert), Confluence(Advanced), Notion(Expert), Slack(Advanced), Google Workspace(Advanced)
- 기획: 로드맵 & KPI 설계(Expert), 상점 UI/UX 설계(Advanced), 사업 시뮬레이션 & A/B Test(Intermediate)
- 데이터: 데이터 기반 의사결정(Advanced), 사용자 피드백 분석(Advanced), 성과 지표 측정(Advanced)
- AI: Claude Code(Advanced), ChatGPT(Advanced), Midjourney(Advanced), Cursor(Intermediate)
- 게임 산업: 퍼블리싱 & 마케팅(Intermediate), 커머스 & 수익화(Intermediate), Unreal Engine(Intermediate)
- 언어: 한국어(Native), 영어(Business Level)

## 주요 업적
- YoY 매출 17% 성장 견인, IP 콜라보 +135% 달성
- 운영 20% 효율화, 알림 누락 0건 달성
- CLO 공모전으로 89% 비용 절감, 15종 에셋 확보
- LG·삼성·현대 대기업 3사 콜라보 + 8+ 해외 벤더 관리
- TC 표준 프레임워크 설계 및 전사 채택
- 6+ AI 도구 활용, PM 워크플로우 자동화

## AI 활용 현황
- Reddit 자동화 (개발중): Claude Code로 아트 피드백 자동 수집 → 감성 분류 → Confluence 리포트
- Claude Code (사용중): 포트폴리오, 업무 자동화 스크립트, 데이터 처리 도구 제작
- Gemini (사용중): 다국어 벤더 커뮤니케이션 초안, 리서치 종합
- Midjourney (사용중): 컨셉 시안 제작 → 엔픽셀 아트팀 실무 도입
- ChatGPT (사용중): AppScript 자동화, 캘린더 일정, 워크플로우 로직 설계
- Whisper/Ollama (테스트중): 미팅 녹취록 자동화, 로컬 LLM 테스트

## 핵심 철학
"좋은 제품은 시장을 이해하고, 사용자를 존중하는 것에서 시작됩니다."
PM의 가치는 업무를 실행하는 것뿐 아니라, 더 나은 의사결정을 가능하게 하는 시스템을 만드는 데 있음.

## 연락처
- Email: quanduyan@naver.com
- Phone: 010-5285-8059
- Notion: https://study-kdy.notion.site/

## 응답 규칙
- 한국어로 답변 (영어로 질문하면 영어로)
- RPG NPC 느낌으로 친근하지만 전문적으로
- 2-4문장으로 간결하게
- 이력서에 없는 내용은 추측하지 않기
- 연락처 정보는 자연스럽게 안내`;

/* ===== Rate Limiter (in-memory) ===== */
const rateMap = new Map();
const RATE_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT = 20;

function checkRate(ip) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.start > RATE_WINDOW) {
    rateMap.set(ip, { start: now, count: 1 });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateMap) {
    if (now - entry.start > RATE_WINDOW) rateMap.delete(ip);
  }
}, 5 * 60 * 1000);

module.exports = async function handler(req, res) {
  /* CORS */
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  /* Rate limit */
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  if (!checkRate(ip)) {
    return res.status(429).json({ error: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요. (15분당 20회)' });
  }

  /* Parse body */
  let messages;
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: '메시지가 필요합니다.' });
    }
    // Limit history to last 20 messages
    messages = messages.slice(-20);
  } catch {
    return res.status(400).json({ error: '잘못된 요청 형식입니다.' });
  }

  /* SSE headers */
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    const client = new Anthropic();
    const stream = await client.messages.stream({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages,
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta?.text) {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
      }
    }
    res.write('data: [DONE]\n\n');
    res.end();
  } catch (err) {
    console.error('Anthropic API error:', err);
    let errMsg;
    if (err.status === 401) {
      errMsg = 'API 키가 유효하지 않습니다. 환경변수를 확인해주세요.';
    } else if (err.status === 429) {
      errMsg = 'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.';
    } else {
      errMsg = 'AI 응답 생성 중 오류가 발생했습니다. (' + (err.message || err.status || 'unknown') + ')';
    }
    res.write(`data: ${JSON.stringify({ error: errMsg })}\n\n`);
    res.end();
  }
};
