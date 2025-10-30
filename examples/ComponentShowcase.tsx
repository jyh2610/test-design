import React, { useState } from "react";
import {
  Button,
  Input,
  Text,
  ColorBox,
  Card,
  Badge,
  Alert,
  Board,
  Checkbox,
  Select,
  tokens,
} from "../src";

export const ComponentShowcase: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const samplePosts = [
    {
      id: 1,
      title: "범정부 UI/UX 가이드라인 업데이트",
      author: "관리자",
      date: "2025-10-30",
      views: 152,
    },
    {
      id: 2,
      title: "접근성 개선 사항 안내",
      author: "정책담당",
      date: "2025-10-29",
      views: 87,
    },
    {
      id: 3,
      title: "디자인 토큰 변경 공지",
      author: "디자인팀",
      date: "2025-10-28",
      views: 203,
    },
  ];

  const selectOptions = [
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
  ];

  return (
    <div
      style={{
        padding: tokens.spacing["3xl"],
        backgroundColor: tokens.color.system.background.secondary,
        minHeight: "100vh",
        fontFamily: tokens.font.family.primary,
      }}
    >
      <Text as="h1" size="3xl" weight="bold" align="center">
        범정부 UI/UX 디자인 시스템
      </Text>
      <Text as="p" size="md" color="secondary" align="center">
        Pretendard GOV 폰트 기반 컴포넌트 라이브러리
      </Text>

      {/* Buttons Section */}
      <Card title="버튼 (Buttons)" padding="xl" shadow="md">
        <div style={{ marginBottom: tokens.spacing.lg }}>
          <Text size="sm" weight="medium" color="secondary">
            기본 버튼
          </Text>
          <div
            style={{
              display: "flex",
              gap: tokens.spacing.md,
              marginTop: tokens.spacing.sm,
            }}
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
          </div>
        </div>

        <div style={{ marginBottom: tokens.spacing.lg }}>
          <Text size="sm" weight="medium" color="secondary">
            버튼 크기
          </Text>
          <div
            style={{
              display: "flex",
              gap: tokens.spacing.md,
              marginTop: tokens.spacing.sm,
              alignItems: "center",
            }}
          >
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" color="secondary">
            비활성화 & 전체 너비
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: tokens.spacing.sm,
              marginTop: tokens.spacing.sm,
            }}
          >
            <Button disabled>Disabled Button</Button>
            <Button fullWidth>Full Width Button</Button>
          </div>
        </div>
      </Card>

      {/* Input Section */}
      <Card title="입력 필드 (Input)" padding="xl" shadow="md">
        <Input
          label="이메일 주소"
          type="email"
          placeholder="example@government.go.kr"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          helperText="정부 이메일 주소를 입력하세요"
        />
        <Input
          label="에러 상태"
          placeholder="잘못된 입력"
          error
          helperText="올바른 형식이 아닙니다"
        />
        <Input label="비활성화" placeholder="입력 불가" disabled />
      </Card>

      {/* Text Section */}
      <Card title="텍스트 (Text)" padding="xl" shadow="md">
        <Text size="3xl" weight="bold">
          Heading 1 - 32px Bold
        </Text>
        <Text size="2xl" weight="semibold">
          Heading 2 - 24px Semibold
        </Text>
        <Text size="xl" weight="medium">
          Heading 3 - 20px Medium
        </Text>
        <Text size="md" color="secondary">
          본문 텍스트 - 16px Regular (Secondary)
        </Text>
        <Text size="sm" color="tertiary">
          보조 텍스트 - 14px Regular (Tertiary)
        </Text>
        <Text size="xs" color="disabled">
          비활성화 텍스트 - 12px Regular (Disabled)
        </Text>
      </Card>

      {/* Badge Section */}
      <Card title="뱃지 (Badge)" padding="xl" shadow="md">
        <div style={{ marginBottom: tokens.spacing.lg }}>
          <Text size="sm" weight="medium" color="secondary">
            기본 뱃지
          </Text>
          <div
            style={{
              display: "flex",
              gap: tokens.spacing.sm,
              marginTop: tokens.spacing.sm,
              flexWrap: "wrap",
            }}
          >
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </div>
        </div>

        <div style={{ marginBottom: tokens.spacing.lg }}>
          <Text size="sm" weight="medium" color="secondary">
            외곽선 뱃지
          </Text>
          <div
            style={{
              display: "flex",
              gap: tokens.spacing.sm,
              marginTop: tokens.spacing.sm,
              flexWrap: "wrap",
            }}
          >
            <Badge variant="primary" outlined>
              Primary
            </Badge>
            <Badge variant="success" outlined>
              Success
            </Badge>
            <Badge variant="warning" outlined>
              Warning
            </Badge>
            <Badge variant="error" outlined>
              Error
            </Badge>
          </div>
        </div>

        <div>
          <Text size="sm" weight="medium" color="secondary">
            뱃지 크기
          </Text>
          <div
            style={{
              display: "flex",
              gap: tokens.spacing.sm,
              marginTop: tokens.spacing.sm,
              alignItems: "center",
            }}
          >
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </div>
      </Card>

      {/* Alert Section */}
      <Card title="알림 (Alert)" padding="xl" shadow="md">
        <Alert variant="success" title="성공" closable>
          작업이 성공적으로 완료되었습니다.
        </Alert>
        <Alert variant="info" title="안내">
          시스템 점검이 예정되어 있습니다.
        </Alert>
        <Alert variant="warning" title="주의" closable>
          입력하신 정보를 다시 확인해주세요.
        </Alert>
        <Alert variant="error" title="오류">
          오류가 발생했습니다. 관리자에게 문의하세요.
        </Alert>
      </Card>

      {/* Checkbox & Select Section */}
      <Card title="선택 입력 (Checkbox & Select)" padding="xl" shadow="md">
        <div style={{ marginBottom: tokens.spacing.xl }}>
          <Text size="sm" weight="medium" color="secondary">
            체크박스
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: tokens.spacing.sm,
              marginTop: tokens.spacing.sm,
            }}
          >
            <Checkbox
              label="개인정보 수집 및 이용에 동의합니다"
              checked={checkboxValue}
              onChange={setCheckboxValue}
            />
            <Checkbox label="마케팅 정보 수신에 동의합니다 (선택)" />
            <Checkbox label="비활성화된 옵션" disabled />
          </div>
        </div>

        <Select
          label="지역 선택"
          options={selectOptions}
          value={selectValue}
          onChange={setSelectValue}
          placeholder="지역을 선택하세요"
        />
      </Card>

      {/* Color Palette Section */}
      <Card title="색상 팔레트 (Color Palette)" padding="xl" shadow="md">
        <Text size="sm" weight="medium" color="secondary">
          Key Colors
        </Text>
        <div
          style={{
            display: "flex",
            gap: tokens.spacing.md,
            marginBottom: tokens.spacing.xl,
          }}
        >
          <ColorBox color={tokens.color.key.primary} label="Primary" />
          <ColorBox color={tokens.color.key.secondary} label="Secondary" />
          <ColorBox color={tokens.color.key.tertiary} label="Tertiary" />
        </div>

        <Text size="sm" weight="medium" color="secondary">
          Point Colors
        </Text>
        <div
          style={{
            display: "flex",
            gap: tokens.spacing.md,
            marginBottom: tokens.spacing.xl,
          }}
        >
          <ColorBox color={tokens.color.point.success} label="Success" />
          <ColorBox color={tokens.color.point.warning} label="Warning" />
          <ColorBox color={tokens.color.point.error} label="Error" />
          <ColorBox color={tokens.color.point.info} label="Info" />
        </div>
      </Card>

      {/* Board Section */}
      <Card title="게시판 (Board)" padding="xl" shadow="md">
        <Board
          posts={samplePosts}
          onSelect={(post) => alert(`선택된 게시물: ${post.title}`)}
          showHeader
        />
      </Card>

      {/* Nested Cards */}
      <Card title="호버 가능한 카드 (Hoverable Cards)" padding="xl" shadow="md">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: tokens.spacing.lg,
          }}
        >
          <Card title="카드 1" hoverable padding="md" shadow="sm">
            <Text size="sm" color="secondary">
              마우스를 올려보세요
            </Text>
          </Card>
          <Card title="카드 2" hoverable padding="md" shadow="sm">
            <Text size="sm" color="secondary">
              호버 효과 테스트
            </Text>
          </Card>
          <Card title="카드 3" hoverable padding="md" shadow="sm">
            <Text size="sm" color="secondary">
              클릭 가능한 카드
            </Text>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default ComponentShowcase;