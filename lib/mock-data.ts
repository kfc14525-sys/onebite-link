export type Folder = {
  id: string;
  name: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description: string;
  folderId: string;
};

export const folders: Folder[] = [
  { id: "dev", name: "개발" },
  { id: "design", name: "디자인" },
  { id: "reading", name: "읽을거리" },
  { id: "etc", name: "기타" },
];

export const links: LinkItem[] = [
  {
    id: "1",
    title: "Next.js 공식 문서",
    url: "https://nextjs.org/docs",
    description: "App Router, 데이터 패칭, 캐싱 등 Next.js 전반을 다루는 공식 문서",
    folderId: "dev",
  },
  {
    id: "2",
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "유틸리티 클래스 기반의 CSS 프레임워크",
    folderId: "dev",
  },
  {
    id: "3",
    title: "Figma",
    url: "https://www.figma.com",
    description: "협업 중심의 인터페이스 디자인 도구",
    folderId: "design",
  },
  {
    id: "4",
    title: "Refactoring UI",
    url: "https://www.refactoringui.com",
    description: "개발자를 위한 실전 UI 디자인 팁 모음",
    folderId: "design",
  },
  {
    id: "5",
    title: "Hacker News",
    url: "https://news.ycombinator.com",
    description: "개발·스타트업 소식을 모아보는 커뮤니티",
    folderId: "reading",
  },
  {
    id: "6",
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description: "웹 표준 기술에 대한 레퍼런스와 가이드",
    folderId: "dev",
  },
];
