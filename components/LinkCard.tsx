import type { LinkItem } from "@/lib/mock-data";

type LinkCardProps = {
  link: LinkItem;
};

export default function LinkCard({ link }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-2 rounded-xl border border-zinc-200 p-4 transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800"
    >
      <h2 className="font-semibold">{link.title}</h2>
      <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
        {link.description}
      </p>
      <span className="truncate text-xs text-zinc-500">{link.url}</span>
    </a>
  );
}
