# QA Test Results — 2026-03-01

## 검증 대상
1. **이미지 매핑** — BATTLE 01~06 퀘스트 데이터의 `images` 배열을 실제 파일에 맞게 수정/추가 (양쪽 브랜치)
2. **갤러리 CSS** — 작은 이미지가 고유 크기에 맞게 표시되도록 CSS 변경
3. **Vercel 배포** — 영문 버전 이미지 누락 해결 + 프로덕션 도메인 alias 설정

## 배포 도메인
| 버전 | 도메인 | 리모트 / 브랜치 |
|---|---|---|
| 국문 | `portfolio-doyeon95ks-projects.vercel.app` | origin / main |
| 영문 | `portfolio-doyeon95ks-global.vercel.app` | global / main (fix-global) |

---

## TC-01: 이미지 파일 존재 검증

| # | 파일명 | 기대 | 결과 |
|---|---|---|---|
| 1 | `Battle 01.png` | 존재 | **PASS** |
| 2 | `Battle 02_1.png` ~ `Battle 02_5.png` | 5장 존재 | **PASS** |
| 3 | `Battle 03_1.png`, `Battle 03_2.png` | 2장 존재 | **PASS** |
| 4 | `Battle 04.png` | 존재 | **PASS** |
| 5 | `Battle 05.png` | 존재 | **PASS** |
| 6 | `Battle 06_1.png` ~ `Battle 06_3.png` | 3장 존재 | **PASS** |
| 7 | `Battle 03.png` (삭제 대상) | 존재하지 않아야 함 | **PASS** |
| 8 | `Battle 02.png` (오참조) | 존재하지 않아야 함 | **PASS** |

**TC-01: 8/8 PASS**

---

## TC-02: 코드 데이터 매핑 (fix-global / 영문)

| BATTLE | 기대 값 | 결과 |
|---|---|---|
| 01 | `['images/Battle 01.png']` | **PASS** |
| 02 | `['images/Battle 02_1.png', ... 02_5.png']` (5장) | **PASS** |
| 03 | `['images/Battle 03_1.png','images/Battle 03_2.png']` | **PASS** |
| 04 | `['images/Battle 04.png']` | **PASS** |
| 05 | `['images/Battle 05.png']` | **PASS** |
| 06 | `['images/Battle 06_1.png', ... 06_3.png']` (3장) | **PASS** |

**TC-02: 6/6 PASS**

---

## TC-03: 코드 데이터 매핑 (main / 국문)

main 브랜치도 TC-02와 동일한 이미지 매핑 확인.

**TC-03: 6/6 PASS**

---

## TC-04: 갤러리 CSS 검증 (양쪽 브랜치)

| # | 항목 | 기대 | fix-global | main | 결과 |
|---|---|---|---|---|---|
| 1 | `.modal-gallery-item` | `max-width:320px` | `max-width:320px` | `max-width:320px` | **PASS** |
| 2 | `.modal-gallery-item img` | `max-width:100%` | `max-width:100%` | `max-width:100%` | **PASS** |

**TC-04: 2/2 PASS**

---

## TC-05: 삭제된 파일 Git 추적 검증

| # | 항목 | 결과 |
|---|---|---|
| 1 | `Battle 03.png` — fix-global `git ls-files` | 추적 안 됨 **PASS** |
| 2 | `Battle 03.png` — main `git ls-files` | 추적 안 됨 **PASS** |

**TC-05: 2/2 PASS**

---

## TC-06: Vercel 이미지 서빙 (영문 — portfolio-doyeon95ks-global.vercel.app)

| # | 이미지 | HTTP | 결과 |
|---|---|---|---|
| 1 | `Battle 01.png` | 200 | **PASS** |
| 2 | `Battle 02_1.png` | 200 | **PASS** |
| 3 | `Battle 03_1.png` | 200 | **PASS** |
| 4 | `Battle 04.png` | 200 | **PASS** |
| 5 | `Battle 05.png` | 200 | **PASS** |
| 6 | `Battle 06_1.png` | 200 | **PASS** |

**TC-06: 6/6 PASS**

---

## TC-07: Vercel 이미지 서빙 (국문 — portfolio-doyeon95ks-projects.vercel.app)

| # | 이미지 | HTTP | 결과 |
|---|---|---|---|
| 1 | `Battle 01.png` | 200 | **PASS** |
| 2 | `Battle 02_1.png` | 200 | **PASS** |
| 3 | `Battle 03_1.png` | 200 | **PASS** |
| 4 | `Battle 04.png` | 200 | **PASS** |
| 5 | `Battle 05.png` | 200 | **PASS** |
| 6 | `Battle 06_1.png` | 200 | **PASS** |

**TC-07: 6/6 PASS**

---

## TC-08: Vercel HTML 콘텐츠 검증

| # | 도메인 | 항목 | 결과 |
|---|---|---|---|
| 1 | 영문 | `Battle 02_1` ~ `Battle 06_3` 참조 포함 | **PASS** |
| 2 | 영문 | `Battle 02.png`, `Battle 03.png` 오참조 없음 | **PASS** |
| 3 | 국문 | 동일 검증 | **PASS** |

**TC-08: 3/3 PASS**

---

## TC-09: 전체 콘텐츠 언어별 표기 규칙 검증

### TC-09-A: HTML/CSS 기본 설정

| # | 항목 | main (국문) | fix-global (영문) | 결과 |
|---|---|---|---|---|
| 1 | `<html lang>` | `ko` | `en` | **PASS** |
| 2 | CSS font | `Noto Sans KR` | `Inter` | **PASS** |
| 3 | `<title>` | `권도연 \| Product Manager Portfolio` | `Doyeon Kwon \| Product Manager Portfolio` | **PASS** |

**TC-09-A: 6/6 PASS**

### TC-09-B: 네비게이션 & 섹션 헤더

| # | 섹션 | main (국문) | fix-global (영문) | 결과 |
|---|---|---|---|---|
| 1 | 프로필 탭 | `프로필` | `Profile` | **PASS** |
| 2 | 전투 기록 탭 | `전투 기록` | `Battle Log` | **PASS** |
| 3 | 스킬 탭 | `스킬` | `Skills` | **PASS** |
| 4 | 업적 탭 | `업적` | `Achievements` | **PASS** |
| 5 | 대화 탭 | `대화` | `Chat` | **PASS** |
| 6 | 연락처 탭 | `연락처` | `Contact` | **PASS** |

**TC-09-B: 12/12 PASS**

### TC-09-C: 프로필 섹션

| # | 항목 | main (국문) | fix-global (영문) | 결과 |
|---|---|---|---|---|
| 1 | 이름 | `권도연` | `Doyeon Kwon` | **PASS** |
| 2 | 소속 | `크래프톤 / KRAFTON` | `KRAFTON` | **PASS** |
| 3 | 부서 | `인조이 스튜디오 — Art PM` | `inZOI Studio — Art PM` | **PASS** |
| 4 | 핵심 스탯 | `핵심 스탯` | `Core Stats` | **PASS** |

**TC-09-C: 8/8 PASS**

### TC-09-D: 커리어 타임라인

| # | 회사 | main (국문) | fix-global (영문) | 결과 |
|---|---|---|---|---|
| 1 | AN게임즈 | `AN게임즈` / `사업PM` | `AN Games` / `Business PM` | **PASS** |
| 2 | 위메이드 커넥트 | `위메이드 커넥트` / `사업PM` | `Wemade Connect` / `Business PM` | **PASS** |
| 3 | 엔픽셀 | `엔픽셀` / `UI실 PM, 개발PM` | `NPIXEL` / `UI Dept PM, Dev PM` | **PASS** |
| 4 | 크래프톤 | `크래프톤 / 인조이 스튜디오` / `Art PM` | `KRAFTON / inZOI Studio` / `Art PM` | **PASS** |

**TC-09-D: 16/16 PASS**

### TC-09-E: QUESTS 데이터 (전체 BATTLE)

| # | 항목 | main (국문) | fix-global (영문) | 결과 |
|---|---|---|---|---|
| 1 | 퀘스트 제목 | 한국어 | 영어 | **PASS** |
| 2 | 회사명 meta | 한국어 | 영어 | **PASS** |
| 3 | summary / before / after | 한국어 | 영어 | **PASS** |
| 4 | metrics label + suffix | 한국어 | 영어 | **PASS** |
| 5 | insight | 한국어 | 영어 | **PASS** |

6개 BATTLE x 5개 항목 = 30+ 세부 검증 완료.

**TC-09-E: ALL PASS**

### TC-09-F: TYPING_PHRASES

| # | main (국문) | fix-global (영문) | 결과 |
|---|---|---|---|
| 1 | `제품의 비전을 정의하고 시장에서 증명하는 PM` | `A PM who defines product vision and proves it in the market` | **PASS** |
| 2 | `데이터와 사용자 인사이트로 제품을 성장시킵니다` | `Growing products through data and user insights` | **PASS** |
| 3 | `AI와 자동화로 제품 개발의 새로운 가능성을 열어갑니다` | `Unlocking new possibilities with AI and automation` | **PASS** |
| 4 | `이해관계자와 함께 새로운 가치를 창출합니다` | `Creating new value through stakeholder alignment` | **PASS** |

**TC-09-F: 4/4 PASS**

### TC-09-G: 복사/토스트 메시지

| # | 항목 | main (국문) | fix-global (영문) | 결과 |
|---|---|---|---|---|
| 1 | 복사 버튼 | `복사` → `완료!` | `Copy` → `Copied!` | **PASS** |
| 2 | 토스트 성공 | `클립보드에 복사되었습니다!` | `Copied to clipboard!` | **PASS** |
| 3 | 토스트 실패 | `복사에 실패했습니다. 직접 복사해주세요.` | `Failed to copy. Please copy manually.` | **PASS** |

**TC-09-G: 5/5 PASS**

### TC-09-H: 챗봇 시스템

| # | 항목 | main (국문) | fix-global (영문) | 결과 |
|---|---|---|---|---|
| 1 | `lang` 파라미터 | `'ko'` | `'en'` | **PASS** |
| 2 | 추천 질문 | 한국어 4개 | 영어 4개 | **PASS** |
| 3 | 네트워크 에러 | `네트워크 오류가 발생했습니다...` | `A network error occurred...` | **PASS** |
| 4 | 스트리밍 에러 | `스트리밍 중 오류가 발생했습니다.` | `An error occurred during streaming.` | **PASS** |
| 5 | 햄버거 aria-label | `메뉴 열기` | `Open menu` | **PASS** |

**TC-09-H: 10/10 PASS**

### TC-09-I: API 언어 지시문 (api/chat.js)

| # | lang 값 | 기대 동작 | 결과 |
|---|---|---|---|
| 1 | `'ko'` | LANG_INSTRUCTIONS.ko 적용 (한국어 + 존댓말) | **PASS** |
| 2 | `'en'` | LANG_INSTRUCTIONS.en 적용 (English only) | **PASS** |
| 3 | 미전송/잘못된 값 | LANG_INSTRUCTIONS.en 폴백 | **PASS** |

**TC-09-I: 3/3 PASS**

### TC-09-J: Vercel 배포 API 엔드포인트 응답 검증

| # | 도메인 | 요청 | HTTP | 응답 언어 | 결과 |
|---|---|---|---|---|---|
| 1 | portfolio-doyeon95ks-global.vercel.app | `lang:'en'` | 200 | 영문 SSE 스트리밍 | **PASS** |
| 2 | portfolio-doyeon95ks-projects.vercel.app | `lang:'ko'` | 200 | 국문 SSE 스트리밍 | **PASS** |

**TC-09-J: 2/2 PASS**

---

## TC-10: 양쪽 브랜치 커밋 동기화 검증

| # | 항목 | 결과 |
|---|---|---|
| 1 | main 최신 커밋에 이미지 매핑 + CSS 수정 포함 | **PASS** |
| 2 | fix-global 최신 커밋에 이미지 매핑 + CSS 수정 + 이미지 파일 포함 | **PASS** |
| 3 | origin/main 동기화 완료 | **PASS** |
| 4 | global/main 동기화 완료 | **PASS** |
| 5 | global/fix-global 동기화 완료 | **PASS** |

**TC-10: 5/5 PASS**

---

## 최종 요약

| TC | 설명 | 항목 수 | 결과 |
|---|---|---|---|
| TC-01 | 이미지 파일 존재 | 8 | **ALL PASS** |
| TC-02 | 코드 매핑 (fix-global) | 6 | **ALL PASS** |
| TC-03 | 코드 매핑 (main) | 6 | **ALL PASS** |
| TC-04 | 갤러리 CSS | 2 | **ALL PASS** |
| TC-05 | 삭제 파일 Git 추적 | 2 | **ALL PASS** |
| TC-06 | Vercel 이미지 (영문) | 6 | **ALL PASS** |
| TC-07 | Vercel 이미지 (국문) | 6 | **ALL PASS** |
| TC-08 | Vercel HTML 콘텐츠 | 3 | **ALL PASS** |
| TC-09 | 언어별 표기 규칙 (A~J) | 69+ | **ALL PASS** |
| TC-10 | 커밋 동기화 | 5 | **ALL PASS** |
| **합계** | | **113+** | **ALL PASS** |
