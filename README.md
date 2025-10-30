# 범정부 UI/UX 디자인 시스템

한국 정부의 범정부 UI/UX 공통 가이드를 준수하는 React 컴포넌트 라이브러리입니다.

## 📋 주요 특징

- ✅ **범정부 UI/UX 가이드 준수**: 공식 전자정부 디자인 가이드라인 적용
- ♿ **접근성 (Accessibility)**: W3C WCAG 레벨 AA 이상 준수
- 🎨 **일관된 디자인**: 통합된 디자인 토큰 시스템
- 🌏 **한국어 최적화**: Pretendard GOV / Noto Sans KR 폰트 사용
- 📱 **반응형**: 다양한 화면 크기 지원

## 🎨 디자인 원칙

### 색상 시스템 (Color System)

- **Key Colors**: Primary, Secondary, Tertiary
- **Point Colors**: Success, Warning, Error, Info
- **System Colors**: Background, Text, Border

### 타이포그래피 (Typography)

- **폰트**: Pretendard GOV, Noto Sans KR
- **크기**: xs(12px) ~ 3xl(32px)
- **굵기**: Regular(400), Medium(500), Semibold(600), Bold(700)
- **행간**: Tight(1.2), Normal(1.5), Relaxed(1.75)

### 모양 (Shape)

- **Corner Radius**: 기본 20px 기준 (8px, 12px, 16px, 20px)
- **Shadow**: 4단계 그림자 시스템

## 📦 컴포넌트 목록

### 기본 컴포넌트

- **Button**: 5가지 변형 (Primary, Secondary, Tertiary, Outlined, Text)
- **Input**: 레이블, 에러 상태, 도움말 텍스트 지원
- **Text**: 시맨틱 HTML 태그 지원
- **ColorBox**: 색상 팔레트 표시

### 폼 컴포넌트

- **Checkbox**: 레이블 연결, 접근성 지원
- **Select**: 드롭다운 선택, 키보드 네비게이션

### 피드백 컴포넌트

- **Alert**: 4가지 상태 (Success, Warning, Error, Info)
- **Badge**: 6가지 변형, 외곽선 옵션

### 레이아웃 컴포넌트

- **Card**: 호버 효과, 다양한 패딩/그림자 옵션
- **Board**: 정부 웹사이트용 게시판 테이블

## 🚀 사용 방법

### 설치

```bash
npm install
```

### 컴포넌트 임포트

```typescript
import { Button, Input, Text, Card, tokens } from "./src";
```

### 기본 사용 예제

```tsx
import { Button, Card, Text, tokens } from "./src";

function App() {
  return (
    <Card title="환영합니다" padding="xl">
      <Text size="lg" weight="medium">
        범정부 UI/UX 디자인 시스템
      </Text>
      <Button variant="primary" size="md">
        시작하기
      </Button>
    </Card>
  );
}
```

### 토큰 사용

```tsx
import { tokens } from "./src";

const customStyle = {
  color: tokens.color.key.primary,
  fontSize: tokens.font.size.md,
  padding: tokens.spacing.lg,
  borderRadius: tokens.radius.xl,
};
```

## 📁 프로젝트 구조

```
test-design/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Text.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Board.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Select.tsx
│   │   └── ColorBox.tsx
│   └── index.ts
├── examples/
│   └── ComponentShowcase.tsx
├── tokens.json          # 디자인 토큰 정의
├── schema.json          # 컴포넌트 스키마
└── README.md
```

## 🎯 접근성 (Accessibility)

모든 컴포넌트는 다음 접근성 기준을 준수합니다:

- **키보드 네비게이션**: Tab, Enter, Space 키 지원
- **스크린 리더**: ARIA 속성 적용
- **색상 대비**: WCAG AA 기준 준수 (4.5:1)
- **포커스 표시**: 명확한 포커스 상태
- **에러 처리**: 명확한 에러 메시지 전달

## 📖 컴포넌트 API

### Button

```tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary" | "outlined" | "text";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
```

### Input

```tsx
interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password" | "number";
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
}
```

### Card

```tsx
interface CardProps {
  title?: string;
  children: React.ReactNode;
  shadow?: "sm" | "md" | "lg" | "xl";
  padding?: "sm" | "md" | "lg" | "xl";
  hoverable?: boolean;
  onClick?: () => void;
}
```

더 자세한 API 문서는 `schema.json`을 참조하세요.

## 🔧 개발

### 빌드

```bash
npm run build
```

### 예제 실행

```bash
# ComponentShowcase.tsx 참조
```

## 📚 참고 자료

- [범정부 UI/UX 가이드](https://www.figma.com/design/R1UturTvXvJdVBXGq7uAxV)
- [WCAG 2.1 가이드라인](https://www.w3.org/WAI/WCAG21/quickref/)
- [Pretendard GOV 폰트](https://github.com/orioncactus/pretendard)

## 📄 라이선스

이 프로젝트는 범정부 UI/UX 공통 가이드를 준수하여 제작되었습니다.

## 🤝 기여

버그 리포트 및 기능 제안은 이슈로 등록해주세요.

---

**Made with ❤️ for Korean Government Digital Services**