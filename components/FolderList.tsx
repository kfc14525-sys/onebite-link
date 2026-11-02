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
            className="nav-item block w-full rounded-md px-3 py-2 text-left text-sm text-[var(--text-sub)]"
          >
            {folder.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
