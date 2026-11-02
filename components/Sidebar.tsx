import Link from "next/link";
import FolderList from "@/components/FolderList";
import type { Folder } from "@/lib/mock-data";

type SidebarProps = {
  folders: Folder[];
};

export default function Sidebar({ folders }: SidebarProps) {
  return (
    <aside className="flex w-56 shrink-0 flex-col gap-1 border-r border-[var(--border)] p-3">
      <Link
        href="/"
        className="nav-item block w-full rounded-md px-3 py-2 text-left text-sm font-semibold"
      >
        All
      </Link>
      <FolderList folders={folders} />
    </aside>
  );
}
