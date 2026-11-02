import { notFound } from "next/navigation";
import AppShell from "@/components/AppShell";
import LinkGrid from "@/components/LinkGrid";
import { folders, links } from "@/lib/mock-data";

export default async function FolderPage({
  params,
}: PageProps<"/folder/[folderId]">) {
  const { folderId } = await params;

  if (!folders.some((folder) => folder.id === folderId)) {
    notFound();
  }

  const folderLinks = links.filter((link) => link.folderId === folderId);

  return (
    <AppShell>
      <LinkGrid links={folderLinks} />
    </AppShell>
  );
}
