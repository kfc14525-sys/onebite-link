import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-200 px-6 dark:border-zinc-800">
      <Link href="/" className="text-xl font-bold tracking-tight">
        한입 링크
      </Link>
      <Link
        href="/new"
        className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 active:scale-95 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        + 새 링크
      </Link>
    </header>
  );
}
