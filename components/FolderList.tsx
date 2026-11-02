import Link from "next/link";
import type { Folder } from "@/lib/mock-data";

type FolderListProps = {
  folders: Folder[];
};

export default function FolderList({ folders }: FolderListProps) {
  return (
    <ul className="flex flex-col gap-1">
      {folders.map((folder) => (
        <li key={folder.id}>
          <Link
            href={`/folder/${folder.id}`}
            className="block w-full rounded-lg px-3 py-2 text-left text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            {folder.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
