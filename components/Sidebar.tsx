import FolderList from "@/components/FolderList";
import type { Folder } from "@/lib/mock-data";

type SidebarProps = {
  folders: Folder[];
};

export default function Sidebar({ folders }: SidebarProps) {
  return (
    <aside className="flex w-56 shrink-0 flex-col gap-4 border-r border-zinc-200 p-4 dark:border-zinc-800">
      <button
        type="button"
        className="w-full rounded-lg bg-zinc-100 px-3 py-2 text-left text-sm font-semibold dark:bg-zinc-900"
      >
        All
      </button>
      <FolderList folders={folders} />
    </aside>
  );
}
