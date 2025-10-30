import React from "react";
import tokens from "../../tokens.json";

interface Post {
  id: number;
  title: string;
  author: string;
  date?: string;
  views?: number;
}

interface BoardProps {
  posts: Post[];
  onSelect?: (post: Post) => void;
  showHeader?: boolean;
}

export const Board: React.FC<BoardProps> = ({
  posts,
  onSelect,
  showHeader = true,
}) => {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: tokens.color.system.background.default,
        borderRadius: tokens.radius.xl,
        overflow: "hidden",
        border: `1px solid ${tokens.color.system.border.default}`,
        fontFamily: tokens.font.family.primary,
      }}
    >
      {showHeader && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "60px 1fr 120px 80px 80px",
            padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
            backgroundColor: tokens.color.system.background.secondary,
            borderBottom: `1px solid ${tokens.color.system.border.default}`,
            fontSize: tokens.font.size.sm,
            fontWeight: tokens.font.weight.bold,
            color: tokens.color.system.text.default,
          }}
        >
          <div style={{ textAlign: "center" }}>번호</div>
          <div>제목</div>
          <div style={{ textAlign: "center" }}>작성자</div>
          <div style={{ textAlign: "center" }}>작성일</div>
          <div style={{ textAlign: "center" }}>조회수</div>
        </div>
      )}
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => onSelect?.(post)}
          onMouseEnter={() => setHoveredId(post.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            display: "grid",
            gridTemplateColumns: "60px 1fr 120px 80px 80px",
            padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
            borderBottom: `1px solid ${tokens.color.system.border.default}`,
            cursor: onSelect ? "pointer" : "default",
            backgroundColor:
              hoveredId === post.id
                ? tokens.color.system.background.secondary
                : "transparent",
            transition: `background-color ${tokens.transition.fast}`,
            fontSize: tokens.font.size.sm,
            color: tokens.color.system.text.default,
          }}
        >
          <div style={{ textAlign: "center" }}>{post.id}</div>
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontWeight:
                hoveredId === post.id
                  ? tokens.font.weight.medium
                  : tokens.font.weight.regular,
            }}
          >
            {post.title}
          </div>
          <div style={{ textAlign: "center" }}>{post.author}</div>
          <div
            style={{
              textAlign: "center",
              color: tokens.color.system.text.secondary,
            }}
          >
            {post.date || "-"}
          </div>
          <div
            style={{
              textAlign: "center",
              color: tokens.color.system.text.secondary,
            }}
          >
            {post.views || 0}
          </div>
        </div>
      ))}
      {posts.length === 0 && (
        <div
          style={{
            padding: `${tokens.spacing["3xl"]} ${tokens.spacing.lg}`,
            textAlign: "center",
            color: tokens.color.system.text.secondary,
            fontSize: tokens.font.size.md,
          }}
        >
          게시물이 없습니다.
        </div>
      )}
    </div>
  );
};