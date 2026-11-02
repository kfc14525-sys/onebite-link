import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-12 shrink-0 items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/80 px-4 backdrop-blur-[8px]">
      <Link href="/" className="text-base font-semibold">
        한입 링크
      </Link>
      <Link
        href="/new"
        className="btn-primary rounded-md px-4 py-2 text-sm font-medium"
      >
        + 새 링크
      </Link>
    </header>
  );
}
