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
      className="card-hover flex flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4"
    >
      <h2 className="text-xl font-semibold leading-snug">{link.title}</h2>
      <p className="line-clamp-2 text-sm leading-snug text-[var(--text-sub)]">
        {link.description}
      </p>
      <span className="self-start truncate rounded bg-[var(--hover-bg)] px-2 py-0.5 text-[13px]">
        {link.url.replace(/^https?:\/\//, "")}
      </span>
    </a>
  );
}
